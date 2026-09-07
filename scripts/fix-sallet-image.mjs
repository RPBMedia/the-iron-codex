/**
 * Sallet principal image: replace the pure-profile Castelnaud shot.
 *
 * The old image (Château de Castelnaud) showed the helmet in strict side view,
 * so the front — the brow, the vision slit, the face opening the whole design is
 * organised around — was invisible. For a generic type article that hides half of
 * what the article explains.
 *
 * Replacement: Metropolitan Museum 29.150.13, a Franco-Burgundian sallet of the
 * later 15th century, photographed by the Met in a front three-quarter view on a
 * neutral ground. Front, side and the swept tail are all legible in one image,
 * the object is complete and its form entirely readable, and the file is CC0
 * through the Met's Open Access donation to Commons.
 *
 * Reviewed and rejected on the way here (all viewed, not just resolved):
 *   - Walters 51466 — rear three-quarter, monochrome, pitted
 *   - KHM A 2334 / A 1203 — dead frontal, no side
 *   - Wallace A81 / A85 — good angles, but red case, glare and neighbouring
 *     objects in frame; A85 is an embossed parade face, atypical of the type
 *   - Higgins DSC05461 — rear three-quarter, heavily corroded, damaged bevor
 *   - Nelson-Atkins DSC08581 — right angle, but green case wall and a blown highlight
 *   - MET 29.150.12 — corroded and flaking; CONDITION FAIL for a generic type
 *   - MET 14.25.576 — superb condition, but profile again
 *
 * The Castelnaud profile is kept as a section image: it is the clearest view of
 * the swept tail, which is exactly what a three-quarter angle foreshortens.
 */
import { readFileSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dataPath = path.join(__dirname, '../server/data/history.json')
const data = JSON.parse(readFileSync(dataPath, 'utf8'))

const sallet = data.weaponsArmor.find((x) => x.id === 'sallet')
if (!sallet) throw new Error('sallet article not found')

const previousImage = sallet.image
const previousInfo = sallet.imageInfo

sallet.image =
  'https://commons.wikimedia.org/wiki/Special:FilePath/Sallet%20in%20the%20Franco-Burgundian%20Style%20MET%2029.150.13%20002AA2015.jpg'
sallet.imageInfo = {
  caption:
    'A Franco-Burgundian sallet of the later 15th century, shown in three-quarter view so the brow, the vision slit and the long swept tail are all visible at once.',
  creator: 'Franco-Burgundian armourer; photograph by the Metropolitan Museum of Art',
  date: 'late 15th century (object)',
  source: 'Metropolitan Museum of Art, Arms and Armor, accession 29.150.13 / Wikimedia Commons',
  sourceUrl:
    'https://commons.wikimedia.org/wiki/File:Sallet_in_the_Franco-Burgundian_Style_MET_29.150.13_002AA2015.jpg',
  note:
    'An original surviving helmet, not a reconstruction. Museum studio photograph on a neutral ground, released CC0 under the Met Open Access programme; the surface pitting is age, and the form of the piece is complete and unaltered.'
}

sallet.sectionImages = [
  {
    section: 'Design and construction',
    src: previousImage,
    caption:
      'The same form in strict profile, at the Château de Castelnaud: the tail sweeps back over the neck in one continuous curve from the skull, the feature that separates a sallet from every other late-medieval helmet.',
    creator: previousInfo?.creator ?? 'German or Italian armourer',
    date: previousInfo?.date ?? 'late 15th century (object)',
    source: previousInfo?.source ?? 'Musée de Castelnaud / Wikimedia Commons',
    sourceUrl: previousInfo?.sourceUrl,
    note:
      'Kept as a supporting view because a three-quarter angle foreshortens the tail; this profile shows its full length and the depth of cover it gave the neck.'
  }
]

writeFileSync(dataPath, JSON.stringify(data, null, 2))
console.log('sallet principal image -> MET 29.150.13 (front three-quarter, CC0)')
console.log('sallet section image  -> Castelnaud profile, under "Design and construction"')
