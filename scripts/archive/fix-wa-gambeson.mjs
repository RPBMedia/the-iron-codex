/**
 * gambeson — AI-generated illustration, authorised last resort.
 *
 * Search record (all exhausted before falling back):
 *   Wikimedia Commons — Category:Gambeson, intitle:gambeson / aketon / pourpoint,
 *     and full-text "gambeson". Everything returned was manuscript art, modern
 *     line drawings, or 17th-century buff coats and doublets. The two closest
 *     files, "Gambeson.jpg" and "Pourpoint.jpg", are both ink drawings.
 *   Metropolitan Museum — no Arms and Armor object for gambeson, arming doublet
 *     or jack of plate with a public-domain image.
 *   Cleveland Museum of Art (CC0 open access) — no medieval textile armour.
 *
 * No photograph of an original or of a reconstruction could be licensed, so the
 * owner supplied an AI illustration. It is flagged, disclosed in the caption's
 * first sentence, and its limitations are stated rather than glossed.
 */
import { readFileSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dataPath = path.join(__dirname, '../server/data/history.json')
const data = JSON.parse(readFileSync(dataPath, 'utf8'))
const e = data.weaponsArmor.find((x) => x.id === 'gambeson')
if (!e) throw new Error('gambeson missing')

const old = { image: e.image, info: e.imageInfo }

e.image = '/gambeson-ai-illustration.png'
e.imageInfo = {
  caption:
    'AI-generated illustration of a late-medieval gambeson: a quilted linen garment stitched in vertical channels, with a standing collar, a close-buttoned front and a waisted body flaring into a short skirt.',
  creator: 'AI-generated for The Iron Codex',
  date: 'generated 2026',
  source: 'The Iron Codex (AI illustration)',
  sourceUrl: '',
  aiGenerated: true,
  note:
    'Not a photograph of an object. It is used because no suitably licensed photograph of a gambeson — surviving original or modern reconstruction — could be sourced from Wikimedia Commons, the Metropolitan Museum or Cleveland Museum open access. The features it shows are well attested: vertical quilted channels, a standing collar, closely spaced cloth buttons and a waisted body with a flared skirt all appear on surviving quilted garments such as the pourpoint of Charles de Blois (c. 1364). Two limits are worth stating: the garment is drawn lighter and more finely tailored than a thick battlefield gambeson, reading closer to an arming doublet worn under plate; and the quilting is more regular than hand-stitched work. Treat it as a guide to the form, not as evidence for any surviving garment.'
}

e.sectionImages = [
  ...(e.sectionImages ?? []),
  {
    section: 'Regional variations and surviving pieces',
    src: old.image,
    alt: old.info?.caption ?? 'A surviving quilted garment in a museum display case.',
    caption: old.info?.caption ?? '',
    creator: old.info?.creator ?? 'Unknown',
    date: old.info?.date ?? '',
    source: old.info?.source ?? 'Wikimedia Commons',
    sourceUrl: old.info?.sourceUrl ?? '',
    note:
      'A surviving quilted garment photographed in its case. Textile armour rarely survives, and what does is fragile, discoloured and hard to read — which is exactly why the illustration above is used to show the form.'
  }
]

console.log('gambeson: principal -> /gambeson-ai-illustration.png (aiGenerated: true)')
console.log('gambeson: previous museum photograph kept as a secondary image')

writeFileSync(dataPath, JSON.stringify(data, null, 2))
console.log('history.json written')
