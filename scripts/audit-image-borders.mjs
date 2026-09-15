/**
 * Blank borders baked into image files (owner rule, 2026-09-15: no margins around
 * images, whatsoever).
 *
 * The CSS no longer pads any article image, but a file can still carry its own
 * border: a library scan with the page margin around an engraving (the Hélyot
 * plate on order-of-st-thomas-of-acre), or an emblem set on a wide white ground.
 * This audit fetches every render image in the archive, composites it over the
 * site's dark frame colour, and measures how many edge rows and columns are flat,
 * light and blank.
 *
 * It fetches every image (about a thousand, most from Wikimedia Commons), so it
 * is an audit rather than a build gate, like `check:images --remote`. Downloads
 * are cached under node_modules/.cache/image-borders, so a rerun is cheap.
 *
 *   node scripts/audit-image-borders.mjs              # scan everything
 *   node scripts/audit-image-borders.mjs --only a,b   # only these article ids
 *   node scripts/audit-image-borders.mjs --out report.json
 *
 * Reported classes, strongest first:
 *   frame   blank light border on three or four sides (a scan or a tiled emblem)
 *   pair    blank light border on two sides
 *   single  one side only, 8% or more (often a plain sky: review by eye)
 */
import fs from 'node:fs'
import path from 'node:path'
import crypto from 'node:crypto'
import { execFileSync } from 'node:child_process'
import { loadArchive } from '../server/data/archive.mjs'

const repoRoot = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..')
const cacheDir = path.join(repoRoot, 'node_modules/.cache/image-borders')
const UA = 'IronCodexBot/1.0 (+https://www.theironcodex.org)'
const SAMPLE_WIDTH = 240
const FRAME_RGB = [0x11, 0x11, 0x16] // the dark frame article images render on
const LIGHT_MIN = 190 // a blank row brighter than this reads as a white or paper margin
const ROW_SPREAD_MAX = 28 // p95 minus p5 luminance across a blank row
const SIDE_MIN = 0.02 // a side counts when 2% or more of it is blank
const SINGLE_MIN = 0.08

const IMAGE_KEYS = new Set(['image', 'thumbnail', 'imageUrl', 'imageSrc', 'mainImage', 'heroImage', 'cardImage', 'src', 'img', 'sigilImage', 'armsImage'])

const arg = (name) => {
  const i = process.argv.indexOf(name)
  return i === -1 ? undefined : process.argv[i + 1]
}
const only = arg('--only') ? new Set(arg('--only').split(',')) : null
const outFile = arg('--out')

function looksLikeImage(value) {
  return typeof value === 'string' && (/^https?:\/\//.test(value) || /^\/[^/]/.test(value)) &&
    (/Special:FilePath\//.test(value) || /upload\.wikimedia\.org/.test(value) || /\.(jpe?g|png|gif|webp|svg|tiff?)(\?|$)/i.test(value))
}

function collectRefs(data) {
  const refs = []
  const walk = (node, trail, owner) => {
    if (Array.isArray(node)) return node.forEach((child, i) => walk(child, `${trail}[${i}]`, owner))
    if (!node || typeof node !== 'object') return
    for (const [key, value] of Object.entries(node)) {
      if (IMAGE_KEYS.has(key) && looksLikeImage(value)) refs.push({ ...owner, field: trail ? `${trail}.${key}` : key, src: value })
      else if (value && typeof value === 'object' && key !== 'sources') walk(value, trail ? `${trail}.${key}` : key, owner)
    }
  }
  for (const [collection, entries] of Object.entries(data)) {
    if (!Array.isArray(entries)) continue
    for (const entry of entries) {
      if (only && !only.has(entry.id)) continue
      walk(entry, '', { collection, id: entry.id })
    }
  }
  return refs
}

/** A fetchable URL at a modest width: Commons thumbnails, local files as-is. */
function fetchTarget(src) {
  if (src.startsWith('/')) return { local: path.join(repoRoot, 'client/public', decodeURIComponent(src.split('?')[0])) }
  const filePath = src.match(/Special:FilePath\/([^?#]+)/)
  if (filePath) return { url: `https://commons.wikimedia.org/wiki/Special:FilePath/${filePath[1]}?width=500` }
  const upload = src.match(/upload\.wikimedia\.org\/wikipedia\/commons\/(?:thumb\/)?[0-9a-f]\/[0-9a-f]{2}\/([^/?#]+)/)
  if (upload) return { url: `https://commons.wikimedia.org/wiki/Special:FilePath/${upload[1]}?width=500` }
  return { url: src }
}

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

async function download(url) {
  const cached = path.join(cacheDir, crypto.createHash('sha1').update(url).digest('hex'))
  if (fs.existsSync(cached)) return cached
  for (const wait of [0, 5000, 15000, 45000]) {
    if (wait) await sleep(wait)
    const response = await fetch(url, { headers: { 'User-Agent': UA }, redirect: 'follow' })
    if (response.status === 429 || response.status >= 500) continue
    if (!response.ok) throw new Error(`HTTP ${response.status}`)
    fs.writeFileSync(cached, Buffer.from(await response.arrayBuffer()))
    return cached
  }
  throw new Error('rate-limited after retries')
}

/** Decode to a small RGBA raster and flatten it over the dark frame colour. */
function luminanceGrid(file) {
  const raw = execFileSync('ffmpeg', ['-loglevel', 'error', '-i', file, '-frames:v', '1', '-vf', `scale=${SAMPLE_WIDTH}:-2,format=rgba`, '-f', 'rawvideo', '-'], { maxBuffer: 64 * 1024 * 1024 })
  const width = SAMPLE_WIDTH
  const height = raw.length / (4 * width)
  if (!Number.isInteger(height) || height < 8) throw new Error('could not decode')
  const lum = new Float32Array(width * height)
  for (let p = 0; p < width * height; p++) {
    const a = raw[p * 4 + 3] / 255
    const [r, g, b] = [0, 1, 2].map((c) => raw[p * 4 + c] * a + FRAME_RGB[c] * (1 - a))
    lum[p] = 0.2126 * r + 0.7152 * g + 0.0722 * b
  }
  return { lum, width, height }
}

function isBlankLine(values) {
  const sorted = [...values].sort((x, y) => x - y)
  const p5 = sorted[Math.floor(sorted.length * 0.05)]
  const p95 = sorted[Math.floor(sorted.length * 0.95)]
  const mean = values.reduce((sum, v) => sum + v, 0) / values.length
  return mean >= LIGHT_MIN && p95 - p5 <= ROW_SPREAD_MAX
}

function measureBorders({ lum, width, height }) {
  const row = (y) => lum.subarray(y * width, (y + 1) * width)
  const col = (x) => Array.from({ length: height }, (_, y) => lum[y * width + x])
  const run = (count, line) => {
    let n = 0
    while (n < count && isBlankLine(line(n))) n++
    return n
  }
  return {
    top: run(height, (i) => row(i)) / height,
    bottom: run(height, (i) => row(height - 1 - i)) / height,
    left: run(width, (i) => col(i)) / width,
    right: run(width, (i) => col(width - 1 - i)) / width
  }
}

function classify(sides) {
  const counted = Object.values(sides).filter((v) => v >= SIDE_MIN).length
  if (counted >= 3) return 'frame'
  if (counted === 2) return 'pair'
  if (Math.max(...Object.values(sides)) >= SINGLE_MIN) return 'single'
  return null
}

fs.mkdirSync(cacheDir, { recursive: true })
const refs = collectRefs(loadArchive())
const bySrc = new Map()
for (const ref of refs) bySrc.set(ref.src, [...(bySrc.get(ref.src) ?? []), ref])
console.log(`Scanning ${bySrc.size} distinct image(s) from ${refs.length} reference(s)...`)

const results = []
const errors = []
let done = 0
const queue = [...bySrc.entries()]
async function worker() {
  while (queue.length) {
    const [src, uses] = queue.shift()
    try {
      const target = fetchTarget(src)
      if (/\.svg(\?|$)/i.test(target.local ?? '')) throw new Error('local SVG not decoded')
      const file = target.local ?? await download(target.url)
      const sides = measureBorders(luminanceGrid(file))
      const kind = classify(sides)
      if (kind) results.push({ kind, sides, src, uses: uses.map((u) => `${u.collection}/${u.id} ${u.field}`) })
    } catch (error) {
      errors.push({ src, uses: uses.map((u) => `${u.collection}/${u.id} ${u.field}`), error: error.message })
    }
    if (++done % 100 === 0) console.log(`  ${done}/${bySrc.size}`)
    if (!fetchTarget(src).local) await sleep(150)
  }
}
await Promise.all([worker(), worker()])

const order = { frame: 0, pair: 1, single: 2 }
results.sort((a, b) => order[a.kind] - order[b.kind] || Math.max(...Object.values(b.sides)) - Math.max(...Object.values(a.sides)))
const pct = (v) => `${Math.round(v * 100)}%`
for (const r of results) {
  console.log(`${r.kind.padEnd(6)} t${pct(r.sides.top)} b${pct(r.sides.bottom)} l${pct(r.sides.left)} r${pct(r.sides.right)}  ${r.uses.join('; ')}`)
}
for (const e of errors) console.log(`error  ${e.error}  ${e.uses.join('; ')}`)
const counts = Object.fromEntries(['frame', 'pair', 'single'].map((k) => [k, results.filter((r) => r.kind === k).length]))
console.log(`\n${bySrc.size} scanned: ${counts.frame} frame, ${counts.pair} pair, ${counts.single} single, ${errors.length} error(s).`)
if (outFile) fs.writeFileSync(outFile, JSON.stringify({ counts, results, errors }, null, 2))
