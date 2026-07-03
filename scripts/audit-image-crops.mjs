// Audit: which archive images would the OLD fixed-height cover-crop layout
// have visibly cut? Fetches real image dimensions from the Commons API
// (no image downloads) and flags images whose aspect ratio departs far
// enough from the old render boxes that content was cropped.
//
// Old boxes (pre-fix):
//   detail main image: ~560px wide column, height clamp(340px, 61vh, 720px)
//     -> at a typical 1440x900 desktop viewport: ~560x549 box, AR (h/w) ~0.98,
//        object-fit: cover, anchored center TOP => bottoms of tall images cut.
//   section figure: min(340px, 42%) wide, max-height 320 -> AR ~0.94, center.
//
// Usage: node scripts/audit-image-crops.mjs
import fs from 'node:fs'

const data = JSON.parse(fs.readFileSync(new URL('../server/data/history.json', import.meta.url), 'utf8'))

const images = [] // { article, kind, url, file }
for (const [collection, entries] of Object.entries(data)) {
  if (!Array.isArray(entries)) continue
  for (const entry of entries) {
    if (entry.image) images.push({ article: `${collection}/${entry.id}`, kind: 'main', url: entry.image })
    for (const s of entry.sectionImages ?? []) {
      if (s.src) images.push({ article: `${collection}/${entry.id}`, kind: 'section', url: s.src })
    }
  }
}

function commonsFilename(url) {
  try {
    const u = new URL(url)
    if (u.hostname === 'commons.wikimedia.org') {
      const m = u.pathname.match(/Special:FilePath\/(.+)$/)
      if (m) return decodeURIComponent(m[1])
    }
    if (u.hostname === 'upload.wikimedia.org') {
      // /wikipedia/commons/a/ab/Name.jpg or /wikipedia/commons/thumb/a/ab/Name.jpg/800px-Name.jpg
      const parts = u.pathname.split('/')
      const thumbIdx = parts.indexOf('thumb')
      const name = thumbIdx >= 0 ? parts[thumbIdx + 3] : parts[parts.length - 1]
      return decodeURIComponent(name)
    }
  } catch { /* fall through */ }
  return null
}

const byFile = new Map()
for (const img of images) {
  const file = commonsFilename(img.url)
  if (!file) { img.skip = 'non-wikimedia'; continue }
  img.file = file
  if (!byFile.has(file)) byFile.set(file, [])
  byFile.get(file).push(img)
}

const files = [...byFile.keys()]
const dims = new Map()
for (let i = 0; i < files.length; i += 50) {
  const batch = files.slice(i, i + 50)
  const titles = batch.map((f) => `File:${f}`).join('|')
  const url = 'https://commons.wikimedia.org/w/api.php?action=query&format=json&prop=imageinfo&iiprop=size&redirects=1&titles=' + encodeURIComponent(titles)
  const res = await fetch(url, { headers: { 'User-Agent': 'IronCodex-image-audit/1.0' } })
  const json = await res.json()
  const normalized = new Map((json.query?.normalized ?? []).map((n) => [n.to, n.from]))
  const redirected = new Map((json.query?.redirects ?? []).map((r) => [r.to, r.from]))
  for (const page of Object.values(json.query?.pages ?? {})) {
    const info = page.imageinfo?.[0]
    if (!info) continue
    let title = page.title
    title = redirected.get(title) ?? title
    title = normalized.get(title) ?? title
    dims.set(title.replace(/^File:/, ''), { w: info.width, h: info.height })
  }
  process.stderr.write(`fetched ${Math.min(i + 50, files.length)}/${files.length}\n`)
}

// Old render-box aspect ratios (height/width) at a typical desktop viewport.
const OLD_BOX_AR = { main: 0.98, section: 0.94 }
// Flag when more than 15% of the image's height (or width) was cropped.
const CROP_THRESHOLD = 0.15

const flagged = []
for (const img of images) {
  if (!img.file) continue
  const d = dims.get(img.file) ?? dims.get(img.file.replaceAll('_', ' '))
  if (!d) { img.skip = 'no-dimensions'; continue }
  const imageAR = d.h / d.w
  const boxAR = OLD_BOX_AR[img.kind]
  if (imageAR > boxAR) {
    const hiddenFraction = 1 - boxAR / imageAR // vertical crop (bottom cut, top-anchored)
    if (hiddenFraction > CROP_THRESHOLD) {
      flagged.push({ ...img, dims: d, hidden: `${Math.round(hiddenFraction * 100)}% of height (bottom)` , frac: hiddenFraction })
    }
  } else if (imageAR < boxAR) {
    const hiddenFraction = 1 - imageAR / boxAR // horizontal crop (sides cut)
    if (hiddenFraction > CROP_THRESHOLD) {
      flagged.push({ ...img, dims: d, hidden: `${Math.round(hiddenFraction * 100)}% of width (sides)`, frac: hiddenFraction })
    }
  }
}

flagged.sort((a, b) => b.frac - a.frac)
console.log(`\n${images.length} images checked; ${flagged.length} were visibly cropped by the old layout (>15% hidden):\n`)
for (const f of flagged) {
  console.log(`- ${f.article} [${f.kind}] ${f.dims.w}x${f.dims.h}: ~${f.hidden}`)
}
const skipped = images.filter((i) => i.skip)
if (skipped.length) {
  console.log(`\nSkipped (${skipped.length}):`)
  for (const s of skipped) console.log(`- ${s.article}: ${s.skip} (${s.url.slice(0, 80)})`)
}
