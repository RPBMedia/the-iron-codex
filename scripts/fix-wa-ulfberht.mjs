/**
 * ulfberht-swords — principal image.
 *
 * Was an extreme close-up of a hilt and the +VLFBERH+T inscription: no blade, no
 * point. The grouped-named-artifact rule asks for a genuine representative
 * example shown complete, with the article explaining that the label covers many
 * surviving blades rather than one object.
 *
 * Now a complete Ulfberht sword — pommel, decorated guard, full inscribed blade
 * to the tip — from the Germanisches Nationalmuseum, with a firm identification
 * (inv. FG 2187, found 1960 in the Old Rhine near Mannheim). This is a named
 * artifact, so its corroded museum condition is correct and must NOT be swapped
 * for a replica.
 *
 * The inscription close-up moves to Description, where it is genuinely the better
 * image: the lettering is what the whole article turns on.
 */
import { readFileSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dataPath = path.join(__dirname, '../server/data/history.json')
const data = JSON.parse(readFileSync(dataPath, 'utf8'))
const e = data.weaponsArmor.find((x) => x.id === 'ulfberht-swords')
if (!e) throw new Error('ulfberht-swords missing')

const file = '0825 Spatha, Ulfberht-Schwert anagoria.JPG'
const F = (n) => `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(n.replace(/ /g, '_'))}`
const P = (n) => `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(n.replace(/ /g, '_'))}`

const old = { image: e.image, info: e.imageInfo }

e.image = F(file)
e.imageInfo = {
  caption:
    'An Ulfberht sword shown complete, from the lobed pommel and inlaid guard down the full length of the inscribed blade to the point — one of roughly 170 surviving blades that carry the name, not a single famous object.',
  creator: 'Photograph by Anagoria',
  date: 'photographed 2013; sword 9th century',
  source: 'Germanisches Nationalmuseum, Nuremberg, inv. FG 2187 — via Wikimedia Commons',
  sourceUrl: P(file),
  note:
    'Recovered in 1960 from the Old Rhine near the Friesenheimer Insel at Mannheim. The blade is corroded, as excavated iron is, and that condition is left standing here deliberately: this article is about the surviving objects themselves, so a modern replica would misrepresent them. The pommel and guard retain their non-ferrous inlay, which is why the hilt reads far more clearly than the blade. Licensed CC BY 3.0.'
}

e.sectionImages = [
  ...(e.sectionImages ?? []),
  {
    section: 'Description',
    src: old.image,
    alt: 'Close-up of the +VLFBERH+T inscription inlaid into a Viking-age blade.',
    caption:
      'The inscription itself, inlaid into the fuller of the blade in iron letters — the feature that defines the group.',
    creator: old.info?.creator ?? 'Unknown',
    date: old.info?.date ?? '',
    source: old.info?.source ?? 'Wikimedia Commons',
    sourceUrl: old.info?.sourceUrl ?? '',
    note:
      'A detail, and the right place for one: the lettering is what identifies an Ulfberht blade, and the varying placement of the crosses in +VLFBERH+T is central to arguments about which blades are genuine and which are later imitations.'
  }
]

console.log(`ulfberht-swords: principal -> ${file}`)
console.log('ulfberht-swords: inscription close-up kept under "Description"')

writeFileSync(dataPath, JSON.stringify(data, null, 2))
console.log('history.json written')
