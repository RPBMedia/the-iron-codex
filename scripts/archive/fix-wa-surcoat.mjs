/**
 * surcoat — FORMAT FAIL fixed.
 *
 * The principal image was a stone tomb effigy: a sculpture of a knight wearing a
 * surcoat, not a photograph of the garment. Under the format rule, sculpture is
 * secondary evidence.
 *
 * Now a reproduction Templar surcoat photographed complete: the sleeveless
 * outer garment, the front split for riding, the belt, and a red cross pattée on
 * natural cloth. The effigy moves to the historical-development section, where it
 * is genuinely the better evidence — it is contemporary, it shows the garment worn
 * over mail as intended, and almost no medieval surcoat survives.
 *
 * Also removes the final entry from weaponsArmorFullObjectFallbackAllowlist, in
 * this same commit, so the allowlist is now empty.
 */
import { readFileSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dataPath = path.join(__dirname, '../server/data/history.json')
const data = JSON.parse(readFileSync(dataPath, 'utf8'))
const e = data.weaponsArmor.find((x) => x.id === 'surcoat')
if (!e) throw new Error('surcoat missing')

const old = { image: e.image, info: e.imageInfo }
const MAKER = 'https://www.battlemerchant.com/en/medieval-tabard-templar-natural-coloured/red'

e.image = '/surcoat-battlemerchant.jpg'
e.imageInfo = {
  caption:
    'Modern reproduction of a knightly surcoat, shown complete and worn: a sleeveless outer garment reaching below the knee, split at the front and back so the wearer could sit a horse, belted at the waist, and bearing the red cross pattée of the Knights Templar on natural cloth.',
  creator: 'Battle-Merchant — maker and product photograph',
  date: 'modern reproduction of a 12th–13th century form',
  source: 'Battle-Merchant, reproduced with credit',
  sourceUrl: MAKER,
  note:
    'A reproduction, not a surviving garment — medieval surcoats survive only in fragments, which is why this article previously used a tomb effigy. The cut is the historical one: sleeveless, long, split front and back for riding, worn over mail and belted. The red cross pattée is the genuine device of the Templars rather than an invented design. Its cloth is modern cotton where the originals were linen or wool, so the claim made here is about cut and heraldic use, not fabric. Photograph used with maker credit and a link.'
}

e.sectionImages = [
  ...(e.sectionImages ?? []),
  {
    section: 'Historical development',
    src: old.image,
    alt: old.info?.caption ?? 'Tomb effigy of a knight wearing a surcoat over mail.',
    caption:
      'The standing tomb effigy of Eberhard (d. 1311), carved with the surcoat worn over mail — belted, split, and falling to mid-calf.',
    creator: old.info?.creator ?? 'Anonymous sculptor',
    date: old.info?.date ?? 'early 14th century',
    source: old.info?.source ?? 'Wikimedia Commons',
    sourceUrl: old.info?.sourceUrl ?? '',
    note:
      'Sculpture rather than a photograph of a garment, which is why it no longer leads the article — but as contemporary evidence it is stronger than any reproduction. Effigies and manuscript images are most of what is known about how surcoats were cut and worn, since the textiles themselves have not survived.'
  }
]

console.log('surcoat: principal -> /surcoat-battlemerchant.jpg')
console.log('surcoat: tomb effigy -> "Historical development"')
writeFileSync(dataPath, JSON.stringify(data, null, 2))
console.log('history.json written')
