/**
 * Social-card versions of the locally hosted images.
 *
 * WhatsApp silently refuses a link-preview image much over ~600 KB and falls
 * back to the site favicon. The owner found this: the Eric Bloodaxe preview
 * showed the shield icon instead of the illustration, because the og:image was a
 * 2,379 KB PNG. 22 of the 29 local images were over the limit.
 *
 * The 771 Wikimedia images were never affected — those are requested with
 * `?width=1200`, so Commons renders them at ~300-450 KB. Only images we host
 * ourselves were served at full size.
 *
 * This writes a derived JPEG per local image into `client/public/og/`, resized
 * to fit 1200px on the long edge. Originals are untouched and still used on the
 * page itself; only the og:image/twitter:image tags point at these.
 *
 * DELIBERATELY NOT CROPPED to a 1.91:1 card. Most of these are portrait
 * illustrations of a person or a weapon, and cropping to landscape would cut the
 * subject. A whole portrait image previews as a smaller thumbnail, which is a far
 * better outcome than a beheaded one.
 *
 * RUN LOCALLY, COMMIT THE OUTPUT. It uses `sips`, which is macOS-only and not
 * available on Vercel's Linux builders, so this is not part of the build. That is
 * safe because `check-seo.mjs` FAILS the build if any local og:image is missing
 * or oversized — so a new image cannot ship without someone running this.
 *
 *   node scripts/make-og-images.mjs
 */
import { readFileSync, existsSync, mkdirSync, statSync } from 'node:fs'
import { execFileSync } from 'node:child_process'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')
const publicDir = path.join(root, 'client', 'public')
const data = JSON.parse(readFileSync(path.join(root, 'server', 'data', 'history.json'), 'utf8'))

export const MAX_OG_BYTES = 600 * 1024
const LONG_EDGE = 1200
const QUALITY = 70

/** `/people/eric-bloodaxe.png` -> `/og/people/eric-bloodaxe.jpg` */
export const ogPathFor = (src) => `/og${src.replace(/\.[a-z0-9]+$/i, '')}.jpg`

const sources = new Set()
for (const arr of Object.values(data)) {
  if (!Array.isArray(arr)) continue
  for (const a of arr) {
    if (a.image?.startsWith('/')) sources.add(a.image)
    for (const s of a.sectionImages ?? []) if (s.src?.startsWith('/')) sources.add(s.src)
  }
}

let made = 0, skipped = 0, missing = 0
for (const src of [...sources].sort()) {
  const input = path.join(publicDir, src)
  if (!existsSync(input)) {
    console.warn(`! source missing, skipped: ${src}`)
    missing++
    continue
  }
  // Already small enough? Then the original IS the social card, and deriving one
  // would only make things worse — the first run of this script re-encoded four
  // already-fine 1024px JPEGs and made every one of them BIGGER, because -Z
  // upscales as well as downscales.
  if (statSync(input).size <= MAX_OG_BYTES) {
    skipped++
    continue
  }

  const outRel = ogPathFor(src)
  const output = path.join(publicDir, outRel)
  mkdirSync(path.dirname(output), { recursive: true })

  if (existsSync(output) && statSync(output).mtimeMs >= statSync(input).mtimeMs) {
    skipped++
    continue
  }

  // Never enlarge: cap the target at the source's own long edge.
  const dims = execFileSync('sips', ['-g', 'pixelWidth', '-g', 'pixelHeight', input], { encoding: 'utf8' })
  const longEdge = Math.max(...[...dims.matchAll(/pixel(?:Width|Height):\s*(\d+)/g)].map((m) => Number(m[1])))
  const target = Math.min(LONG_EDGE, longEdge || LONG_EDGE)

  execFileSync('sips', [
    '-Z', String(target),
    '-s', 'format', 'jpeg',
    '-s', 'formatOptions', String(QUALITY),
    input, '--out', output
  ], { stdio: 'ignore' })

  const kb = Math.round(statSync(output).size / 1024)
  const before = Math.round(statSync(input).size / 1024)
  const flag = statSync(output).size > MAX_OG_BYTES ? '  <-- STILL TOO BIG' : ''
  console.log(`${outRel.padEnd(40)} ${String(before).padStart(5)} KB -> ${String(kb).padStart(4)} KB${flag}`)
  made++
}

console.log(`\n${made} generated, ${skipped} already small enough or current, ${missing} source(s) missing.`)
