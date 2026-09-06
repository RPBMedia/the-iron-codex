/**
 * buckler — FORMAT FAIL fixed.
 *
 * The principal image was the MS I.33 fencing scene: artwork, with the buckler a
 * small element inside a fight rather than a photograph of the object. The brief
 * called this out by name.
 *
 * Now a reproduction buckler photographed front and back — plywood faced with
 * textile and rawhide-bound at the rim, with a riveted steel boss, 30 cm across,
 * which sits inside the 15–45 cm range of surviving bucklers. Two views, as the
 * brief asked, so the boss, the rim and the central grip can all be read.
 *
 * I.33 is not discarded: it moves to the battlefield-role section, which is where
 * it belongs — it is the earliest surviving European fencing manual and it shows
 * the weapon in use, which no object photograph can.
 *
 * Also removes 'buckler' from weaponsArmorFullObjectFallbackAllowlist in
 * scripts/check-images.mjs, since the exception no longer applies. That edit must
 * land in this same commit or the checker fails.
 */
import { readFileSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dataPath = path.join(__dirname, '../server/data/history.json')
const data = JSON.parse(readFileSync(dataPath, 'utf8'))
const e = data.weaponsArmor.find((x) => x.id === 'buckler')
if (!e) throw new Error('buckler missing')

const old = { image: e.image, info: e.imageInfo }
const MAKER = 'https://www.wulflund.com/armour/shields/battle-ready-shileds/buckler-living-history-authencity-battle-ready.html/'

e.image = '/buckler-front-wulflund.jpg'
e.imageInfo = {
  caption:
    'Modern reproduction of a medieval buckler, seen from the front: a small round shield about 30 cm across, its face bound at the rim with rawhide and pierced at the centre by a riveted steel boss that covers the hand.',
  creator: 'Wulflund (Czech workshop) — maker and product photograph',
  date: 'modern reproduction of a 13th–14th century form',
  source: 'Wulflund, reproduced with credit',
  sourceUrl: MAKER,
  note:
    'A reproduction, not a surviving buckler. Built as the medieval ones were: beech plywood faced with textile, a rawhide-bound edge, and a separate steel boss riveted over a central hole so the fist sits inside it. At 30 cm it falls within the 15–45 cm range of surviving examples. Used because the article previously led with a manuscript illustration, which shows the buckler in use but not the object. Photograph used with maker credit and a link.'
}

e.sectionImages = [
  {
    section: 'Design and construction',
    src: '/buckler-rear-wulflund.jpg',
    alt: 'The reverse of a reproduction buckler, showing the wooden back and the horizontal grip bar spanning the boss cavity.',
    caption:
      'The same buckler from behind: the hollow of the boss forms the space for the fist, and a single horizontal bar riveted across it is the only grip.',
    creator: 'Wulflund (Czech workshop) — maker and product photograph',
    date: 'modern reproduction of a 13th–14th century form',
    source: 'Wulflund, reproduced with credit',
    sourceUrl: MAKER,
    note:
      'The rear view explains how the weapon was held and why it was so mobile: nothing straps it to the arm, so it is punched and thrust out from the fist rather than carried on it.'
  },
  {
    section: 'Protection and battlefield role',
    src: old.image,
    alt: old.info?.caption ?? 'Two fencers with sword and buckler in MS I.33.',
    caption:
      'Sword and buckler in use, from MS I.33 (c. 1300) — the earliest surviving European fencing manual, which teaches the buckler as an active weapon covering the sword hand rather than a passive guard.',
    creator: old.info?.creator ?? 'Anonymous medieval illuminator',
    date: old.info?.date ?? 'c. 1300',
    source: old.info?.source ?? 'Wikimedia Commons',
    sourceUrl: old.info?.sourceUrl ?? '',
    note:
      'Artwork rather than an object photograph, which is why it is no longer the principal image — but it is the best evidence for how the buckler was actually used, and no photograph of a surviving shield can show that.'
  }
]

console.log('buckler: principal -> /buckler-front-wulflund.jpg (front)')
console.log('buckler: rear/grip view -> "Design and construction"')
console.log('buckler: MS I.33 -> "Protection and battlefield role"')
writeFileSync(dataPath, JSON.stringify(data, null, 2))
console.log('history.json written')
