/**
 * gambeson — AI illustration replaced by a real photograph.
 *
 * The AI image was authorised only because no photograph could be licensed at the
 * time; retailer photography was still disallowed. That restriction was lifted, so
 * under the rule that a real photograph always takes precedence, it goes.
 *
 * The replacement is better evidence as well as more honest: it shows the arming
 * points at shoulders, elbows and waist — the laces by which a gambeson carried
 * plate defences — which the illustration did not show at all.
 *
 * The AI file is deleted from client/public rather than left orphaned.
 */
import { readFileSync, writeFileSync, existsSync, unlinkSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dataPath = path.join(__dirname, '../server/data/history.json')
const data = JSON.parse(readFileSync(dataPath, 'utf8'))
const e = data.weaponsArmor.find((x) => x.id === 'gambeson')
if (!e) throw new Error('gambeson missing')

if (e.imageInfo?.aiGenerated !== true) {
  console.log('gambeson principal is not the AI image — nothing to replace')
} else {
  e.image = '/gambeson-wulflund.jpg'
  e.imageInfo = {
    caption:
      'Modern reproduction of a medieval gambeson, worn to show its shape: a quilted padded coat with a standing collar, a laced front, a waist seam above a short skirt, and arming points at the shoulders, elbows and waist for tying on plate defences.',
    creator: 'Wulflund (Czech workshop) — maker and product photograph',
    date: 'modern reproduction of a 14th–15th century form',
    source: 'Wulflund, reproduced with credit',
    sourceUrl: 'https://www.wulflund.com/quilted-doublet-medieval-gambeson',
    note:
      'A reproduction, not a surviving garment — almost no medieval gambeson survives, since textile rots where iron only corrodes. The form follows the quilted arming coats of the 14th and 15th centuries: diagonal quilting channels holding the padding in place, a high collar, and lacing rather than buttons. Its materials are modern (cotton canvas over polyester wadding, where the originals used linen or wool over tow), so the claim made here is about cut, quilting and fittings, not about the fabric. Photograph used with maker credit and a link.'
  }
  console.log('gambeson: principal -> /gambeson-wulflund.jpg (real photograph)')
  console.log('gambeson: aiGenerated flag dropped')
}

// Remove the now-unused AI asset so it cannot be reintroduced by accident.
const aiAsset = path.join(__dirname, '../client/public/gambeson-ai-illustration.png')
const stillReferenced = JSON.stringify(data).includes('gambeson-ai-illustration')
if (!stillReferenced && existsSync(aiAsset)) {
  unlinkSync(aiAsset)
  console.log('removed client/public/gambeson-ai-illustration.png (no longer referenced)')
}

writeFileSync(dataPath, JSON.stringify(data, null, 2))
console.log('history.json written')
