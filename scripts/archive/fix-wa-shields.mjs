/**
 * heater-shield and kite-shield — CONDITION / staging failures fixed.
 *
 *  heater-shield was the shield of Konrad von Thüringen: a genuine survival, but
 *      so degraded that the painted lion is barely readable — a CONDITION FAIL for
 *      a generic-type article. It is kept as a secondary image, where being one of
 *      the oldest surviving heater shields is exactly the point.
 *  kite-shield was a snapshot of reenactment shields on grass with a dog and
 *      bystanders in frame. Complete objects, unusable staging.
 *
 * Both replaced with Wulflund reproductions built the medieval way — plywood core,
 * canvas facing, rawhide-bound rim — photographed clean and unwatermarked. Both
 * are undecorated blanks, which shows construction unusually well; the captions
 * say plainly that shields of both types normally carried painted heraldry.
 */
import { readFileSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dataPath = path.join(__dirname, '../server/data/history.json')
const data = JSON.parse(readFileSync(dataPath, 'utf8'))
const wa = (id) => data.weaponsArmor.find((x) => x.id === id)

function replace(id, { src, imageInfo, demoteTo, demoteNote }) {
  const e = wa(id)
  if (!e) throw new Error(`missing ${id}`)
  const old = { image: e.image, info: e.imageInfo }
  e.image = src
  e.imageInfo = imageInfo
  if (demoteTo) {
    const titles = (e.contentSections ?? []).map((s) => s.title)
    if (!titles.includes(demoteTo)) throw new Error(`${id}: no section "${demoteTo}"`)
    e.sectionImages = [...(e.sectionImages ?? []), {
      section: demoteTo, src: old.image, alt: old.info?.caption ?? '', caption: old.info?.caption ?? '',
      creator: old.info?.creator ?? 'Unknown', date: old.info?.date ?? '',
      source: old.info?.source ?? 'Wikimedia Commons', sourceUrl: old.info?.sourceUrl ?? '', note: demoteNote
    }]
  }
  console.log(`${id}: principal -> ${src}`)
}

replace('heater-shield', {
  src: '/heater-shield-wulflund.jpg',
  imageInfo: {
    caption:
      'Modern reproduction of a heater shield of about 1250–1350, shown complete: the flat top and curved sides tapering to a point, a canvas-faced plywood body, and a rawhide binding stitched around the whole rim.',
    creator: 'Wulflund (Czech workshop) — maker and product photograph',
    date: 'modern reproduction of a c. 1250–1350 form',
    source: 'Wulflund, reproduced with credit',
    sourceUrl: 'https://www.wulflund.com/medieval-heater-shield-1250-1350-living-history',
    note:
      'A reproduction, 60 × 60 cm, built as medieval shields were: a plywood core faced with canvas and edged with rawhide, which both protected the rim and held the layers together. It is left unpainted, so the construction reads clearly — but shields of this type were normally painted with their bearer\'s arms, and the plain face should not be taken as the usual appearance. Photograph used with maker credit and a link.'
  },
  demoteTo: 'Regional variations and surviving pieces',
  demoteNote:
    'The shield of Konrad von Thüringen (d. 1240), one of the oldest surviving heater shields, in the Elisabethkirche at Marburg. Centuries of degradation have left the painted lion barely legible, which is why it sits here rather than at the top of the article — but as a survival it is far rarer than any reproduction.'
})

replace('kite-shield', {
  src: '/kite-shield-wulflund.jpg',
  imageInfo: {
    caption:
      'Modern reproduction of an early-medieval kite shield, shown flat and complete: the rounded top and long tapering body that protected a horseman\'s left side from shoulder to knee.',
    creator: 'Wulflund (Czech workshop) — maker and product photograph',
    date: 'modern reproduction of an 11th–12th century form',
    source: 'Wulflund, reproduced with credit',
    sourceUrl: 'https://www.wulflund.com/almond-shield-early-middle-ages-wooden-base',
    note:
      'A reproduction of the almond or kite form, 125 cm tall, made from bent plywood — the curve across the body is the point, since it wrapped around the rider rather than sitting flat. Shown as an unpainted blank; kite shields in the Bayeux Tapestry and elsewhere carry painted devices, so the plain face is a maker\'s starting point, not the finished appearance. Photograph used with maker credit and a link.'
  },
  demoteTo: 'Regional variations and surviving pieces',
  demoteNote:
    'Painted reproductions in use at a living-history event, showing the range of devices these shields carried and how they look in the hand rather than laid flat.'
})

writeFileSync(dataPath, JSON.stringify(data, null, 2))
console.log('history.json written')
