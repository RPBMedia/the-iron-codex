/**
 * Serve locally hosted images as WebP at display size.
 *
 * WHY (2026-09-23). The 62 images the site hosts itself — the owner's AI
 * weapon and armour illustrations, the Wulflund photographs, portraits — were
 * served as the original PNG/JPEG files: 41.8 MB in all, up to 3.1 MB each,
 * and an archive page of cards could pull tens of megabytes. As WebP, at most
 * 1600 px on the long edge and quality 82, they come to 9.2 MB (−78%) and
 * still fill a detail page or the lightbox sharply. The whole object stays in
 * frame: images are only ever scaled down, never cropped.
 *
 * What it does, for every PNG/JPEG under client/public (not og/, map-data/ or
 * the favicons):
 *   1. writes `<name>.webp` beside it;
 *   2. writes a JPEG social card in client/public/og/ if there is none, so
 *      og:image stays a JPEG every preview service accepts (prerender.mjs
 *      prefers the card);
 *   3. MOVES the original to client/assets/originals/, which is kept but not
 *      served — the repo convention for owner-supplied originals;
 *   4. rewrites every archive reference to the new path.
 *
 * Needs `sharp`, which is deliberately not a project dependency (the Vercel
 * build never runs this):
 *
 *   npm i --no-save sharp && node scripts/optimize-images.mjs
 *
 * check-images.mjs fails the build on a locally hosted PNG/JPEG article image,
 * so a new one cannot ship without this being run.
 */
import { existsSync, mkdirSync, readdirSync, renameSync, statSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { loadArchive, saveArchive } from '../server/data/archive.mjs'

let sharp
try {
  sharp = (await import('sharp')).default
} catch {
  console.error('optimize-images needs sharp: npm i --no-save sharp && node scripts/optimize-images.mjs')
  process.exit(1)
}

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')
const publicDir = path.join(root, 'client', 'public')
const originalsDir = path.join(root, 'client', 'assets', 'originals')

const MAX_EDGE = 1600
const QUALITY = 82
const SKIP_DIRS = new Set(['og', 'map-data'])
const SKIP_FILE = /^(favicon|android-chrome|apple-touch-icon)/i
const RASTER = /\.(png|jpe?g)$/i

function rasters(dir, rel = '') {
  const found = []
  for (const name of readdirSync(dir)) {
    const full = path.join(dir, name)
    const relative = `${rel}/${name}`
    if (statSync(full).isDirectory()) {
      if (!(rel === '' && SKIP_DIRS.has(name))) found.push(...rasters(full, relative))
    } else if (RASTER.test(name) && !SKIP_FILE.test(name)) {
      found.push(relative)
    }
  }
  return found
}

const renamed = new Map()
let before = 0
let after = 0

for (const rel of rasters(publicDir)) {
  const input = path.join(publicDir, rel)
  const webpRel = rel.replace(RASTER, '.webp')
  const output = path.join(publicDir, webpRel)
  const ogOutput = path.join(publicDir, 'og', rel.replace(RASTER, '.jpg'))

  await sharp(input)
    .rotate()
    .resize({ width: MAX_EDGE, height: MAX_EDGE, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: QUALITY, effort: 5 })
    .toFile(output)

  if (!existsSync(ogOutput)) {
    mkdirSync(path.dirname(ogOutput), { recursive: true })
    await sharp(input)
      .rotate()
      .resize({ width: 1200, height: 1200, fit: 'inside', withoutEnlargement: true })
      .flatten({ background: '#ffffff' })
      .jpeg({ quality: 82, mozjpeg: true })
      .toFile(ogOutput)
  }

  before += statSync(input).size
  after += statSync(output).size

  const kept = path.join(originalsDir, rel)
  mkdirSync(path.dirname(kept), { recursive: true })
  renameSync(input, kept)
  renamed.set(rel, webpRel)
}

// Rewrite archive references. Only whole values are replaced: every local image
// is stored as its bare path ("/coat-of-plates-ai.png").
const data = loadArchive()
let references = 0
const rewrite = (value) => {
  if (typeof value === 'string') {
    if (renamed.has(value)) {
      references += 1
      return renamed.get(value)
    }
    return value
  }
  if (Array.isArray(value)) return value.map(rewrite)
  if (value && typeof value === 'object') {
    for (const key of Object.keys(value)) value[key] = rewrite(value[key])
  }
  return value
}
rewrite(data)
saveArchive(data)

const mb = (bytes) => `${(bytes / 1048576).toFixed(1)} MB`
console.log(
  `optimize-images: ${renamed.size} images, ${mb(before)} -> ${mb(after)}` +
    (before ? ` (${Math.round((1 - after / before) * 100)}% smaller)` : '') +
    `; ${references} archive references rewritten; originals in client/assets/originals/.`
)
