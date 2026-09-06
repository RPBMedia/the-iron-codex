/**
 * great-helm — third pass.
 *
 * Batch 1 used the Kornburg helm (rejected: pure side view). Batch 1b used a
 * Berlin museum helm for its three-quarter angle, but that object is pitted and
 * corroded — a CONDITION FAIL for a *generic type* article, where the job of the
 * principal image is to show the form as it looked when serviceable. Worn
 * originals lead only for named-artifact articles.
 *
 * Principal is now a clean reproduction, front-on, showing the complete
 * cylindrical form, the reinforcing cross, the ocularium and the breath holes.
 * Kornburg stays as the single secondary image, where its surviving gilding
 * makes the point that these were decorated objects. The corroded Berlin helm is
 * dropped rather than kept: CLAUDE.md caps articles at one main plus one or two
 * section images, and Kornburg is the stronger of the two.
 */
import { readFileSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dataPath = path.join(__dirname, '../server/data/history.json')
const data = JSON.parse(readFileSync(dataPath, 'utf8'))
const e = data.weaponsArmor.find((x) => x.id === 'great-helm')
if (!e) throw new Error('great-helm missing')

const file = 'Grand heaume J1.jpg'
const F = (n) => `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(n.replace(/ /g, '_'))}`
const P = (n) => `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(n.replace(/ /g, '_'))}`

e.image = F(file)
e.imageInfo = {
  caption:
    'A modern reproduction of a great helm, seen from the front: the flat-topped cylinder that encloses the whole head, the reinforcing band across the face, the horizontal ocularium for vision and the pierced breath holes below it.',
  creator: 'Photograph by Jamain; reproduction by an unrecorded maker',
  date: 'photographed 2016 at Wattrelos, France; reproduction of a 13th–14th century form',
  source: 'Wikimedia Commons',
  sourceUrl: P(file),
  note:
    'A reproduction, not a surviving helmet, and photographed being carried at a living-history event rather than in a studio — a supporting hand is visible at the lower edge, though the helm itself is complete in frame. It is used because surviving great helms are almost all heavily corroded, which hides exactly what this article needs to show: the smooth enclosing form and how vision and breathing were provided for. It follows the general 13th–14th century type rather than reproducing one identified original. Licensed CC BY-SA 4.0.'
}

// Keep exactly one secondary: the Kornburg helm. Drop the corroded Berlin helm.
const kornburg = (e.sectionImages ?? []).find((s) => /Kornburg/i.test(s.caption ?? '') || /Kornburg/i.test(s.alt ?? ''))
e.sectionImages = kornburg ? [kornburg] : []

console.log(`great-helm: principal -> ${file}`)
console.log(`great-helm: ${e.sectionImages.length} secondary image(s) kept${kornburg ? ' (Kornburg)' : ''}`)

writeFileSync(dataPath, JSON.stringify(data, null, 2))
console.log('history.json written')
