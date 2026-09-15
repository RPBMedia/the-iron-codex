/**
 * Crops blank borders baked into archive image files and self-hosts the result
 * (owner rule, 2026-09-15: no margins around images, whatsoever). Companion to
 * scripts/audit-image-borders.mjs, which finds them.
 *
 *   node scripts/crop-image-borders.mjs --preview <dir> events/siege-of-kyiv:image ...
 *   node scripts/crop-image-borders.mjs --apply events/siege-of-kyiv:image ...
 *
 * A target is <collection>/<id>:<field>, with field one of image, armsImage,
 * sigilImage, sectionImages[n].src or galleryImages[n].src. Each image is fetched
 * at up to 2400px from Wikimedia Commons (or read from client/public), and blank
 * light rows and columns are trimmed from every edge. A line counts as blank when
 * it is light and flat between its 1st and 99th percentile, so dust and foxing on
 * a scan do not stop the trim. Printed captions, plate lines and card labels are
 * not blank, so they stay; check the preview by eye before applying.
 *
 * --apply writes client/public/images/<collection>/<id>[-<field>].jpg, points the
 * field at it, keeps the Commons page as sourceUrl, and adds one sentence to the
 * image note saying the Codex copy is cropped.
 */
import fs from 'node:fs'
import path from 'node:path'
import crypto from 'node:crypto'
import { execFileSync } from 'node:child_process'
import { loadArchive, saveArchive } from '../server/data/archive.mjs'

const repoRoot = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..')
const cacheDir = path.join(repoRoot, 'node_modules/.cache/image-borders/full')
const UA = 'IronCodexBot/1.0 (+https://www.theironcodex.org)'
const LIGHT_MIN = 170
const SPREAD_MAX = 40
// check-seo fails a self-hosted og:image over ~600 KB (WhatsApp drops the preview),
// so crops are saved at up to 1600px and quality 4, which lands well under that.
const MAX_EDGE = 1600
const CROP_NOTE = 'The Codex copy is cropped to remove the blank border of the source scan (owner rule: no margins around images).'

const args = process.argv.slice(2)
const apply = args.includes('--apply')
const previewIndex = args.indexOf('--preview')
const previewDir = previewIndex === -1 ? null : args[previewIndex + 1]
const targets = args.filter((a, i) => !a.startsWith('--') && i !== previewIndex + 1)
if (!apply && !previewDir) throw new Error('pass --preview <dir> or --apply')

const metadataFor = (entry, field) => {
  const section = field.match(/^(sectionImages|galleryImages)\[(\d+)\]\.src$/)
  if (section) return entry[section[1]][Number(section[2])]
  return entry[{ image: 'imageInfo', armsImage: 'armsImageInfo', sigilImage: 'sigilImageInfo' }[field]]
}
const getField = (entry, field) => {
  const section = field.match(/^(sectionImages|galleryImages)\[(\d+)\]\.src$/)
  return section ? entry[section[1]][Number(section[2])].src : entry[field]
}
const setField = (entry, field, value) => {
  const section = field.match(/^(sectionImages|galleryImages)\[(\d+)\]\.src$/)
  if (section) entry[section[1]][Number(section[2])].src = value
  else entry[field] = value
}

async function sourceFile(src) {
  if (src.startsWith('/')) return path.join(repoRoot, 'client/public', decodeURIComponent(src.split('?')[0]))
  const name = src.match(/Special:FilePath\/([^?#]+)/)?.[1] ??
    src.match(/upload\.wikimedia\.org\/wikipedia\/commons\/(?:thumb\/)?[0-9a-f]\/[0-9a-f]{2}\/([^/?#]+)/)?.[1]
  const url = name ? `https://commons.wikimedia.org/wiki/Special:FilePath/${name}?width=2400` : src
  const cached = path.join(cacheDir, crypto.createHash('sha1').update(url).digest('hex'))
  if (fs.existsSync(cached)) return cached
  for (const wait of [0, 5000, 15000, 45000]) {
    if (wait) await new Promise((resolve) => setTimeout(resolve, wait))
    const response = await fetch(url, { headers: { 'User-Agent': UA } })
    if (response.status === 429 || response.status >= 500) continue
    if (!response.ok) throw new Error(`HTTP ${response.status} for ${url}`)
    fs.writeFileSync(cached, Buffer.from(await response.arrayBuffer()))
    return cached
  }
  throw new Error(`rate-limited: ${url}`)
}

function probe(file) {
  const [width, height] = execFileSync('ffprobe', ['-v', 'error', '-select_streams', 'v:0', '-show_entries', 'stream=width,height', '-of', 'csv=p=0', file]).toString().trim().split(',').map(Number)
  return { width, height }
}

function blankEdges(file, { width, height }) {
  // Flatten any transparency onto white, as a browser shows a transparent scan.
  const raw = execFileSync('ffmpeg', ['-loglevel', 'error', '-i', file, '-frames:v', '1', '-filter_complex', `color=white:s=${width}x${height}[bg];[bg][0:v]overlay=format=auto,format=gray`, '-f', 'rawvideo', '-'], { maxBuffer: 512 * 1024 * 1024 })
  const blank = (values) => {
    const sorted = Float32Array.from(values).sort()
    const p1 = sorted[Math.floor(sorted.length * 0.01)]
    const p99 = sorted[Math.floor(sorted.length * 0.99)]
    const median = sorted[Math.floor(sorted.length / 2)]
    return median >= LIGHT_MIN && p99 - p1 <= SPREAD_MAX
  }
  const row = (y) => raw.subarray(y * width, (y + 1) * width)
  const col = (x) => { const out = new Uint8Array(height); for (let y = 0; y < height; y++) out[y] = raw[y * width + x]; return out }
  let top = 0; while (top < height - 1 && blank(row(top))) top++
  let bottom = 0; while (bottom < height - top - 1 && blank(row(height - 1 - bottom))) bottom++
  let left = 0; while (left < width - 1 && blank(col(left))) left++
  let right = 0; while (right < width - left - 1 && blank(col(width - 1 - right))) right++
  return { top, bottom, left, right }
}

fs.mkdirSync(cacheDir, { recursive: true })
if (previewDir) fs.mkdirSync(previewDir, { recursive: true })
const data = loadArchive()
const report = []
for (const target of targets) {
  // An optional @x0,y0,x1,y1 suffix gives the box to keep as fractions of the
  // source, for borders the blank test cannot see: a card mount with handwritten
  // labels, a faint decorative page frame, a photographed book spread.
  const [, collection, id, field, box] = target.match(/^([^/]+)\/([^:@]+):([^@]+)(?:@([\d.,]+))?$/) ?? []
  const entry = data[collection]?.find((e) => e.id === id)
  if (!entry) throw new Error(`no article ${target}`)
  const src = getField(entry, field)
  if (!src) throw new Error(`no ${field} on ${target}`)
  const file = await sourceFile(src)
  const size = probe(file)
  let edges
  if (box) {
    const [x0, y0, x1, y1] = box.split(',').map(Number)
    edges = { left: Math.round(x0 * size.width), top: Math.round(y0 * size.height), right: size.width - Math.round(x1 * size.width), bottom: size.height - Math.round(y1 * size.height) }
  } else {
    edges = blankEdges(file, size)
  }
  const w = size.width - edges.left - edges.right
  const h = size.height - edges.top - edges.bottom
  const scale = Math.min(1, MAX_EDGE / Math.max(w, h))
  const slug = field === 'image' ? id : `${id}-${field.replace(/\[(\d+)\]\.src$/, '-$1').replace(/Image$/, '')}`
  const filter = `crop=${w}:${h}:${edges.left}:${edges.top},scale=${Math.round(w * scale / 2) * 2}:-2`
  const pct = (n, of) => `${Math.round((n / of) * 100)}%`
  report.push(`${target}  trimmed t${pct(edges.top, size.height)} b${pct(edges.bottom, size.height)} l${pct(edges.left, size.width)} r${pct(edges.right, size.width)}  -> ${w}x${h}`)
  const out = apply ? path.join(repoRoot, 'client/public/images', collection, `${slug}.jpg`) : path.join(previewDir, `${collection}--${slug}.jpg`)
  fs.mkdirSync(path.dirname(out), { recursive: true })
  execFileSync('ffmpeg', ['-loglevel', 'error', '-y', '-i', file, '-frames:v', '1', '-vf', filter, '-q:v', '4', out])
  if (apply) {
    setField(entry, field, `/images/${collection}/${slug}.jpg`)
    const meta = metadataFor(entry, field)
    if (meta && !String(meta.note ?? '').includes(CROP_NOTE)) meta.note = meta.note ? `${meta.note} ${CROP_NOTE}` : CROP_NOTE
  }
}
console.log(report.join('\n'))
if (apply) console.log('files changed:', saveArchive(data))
