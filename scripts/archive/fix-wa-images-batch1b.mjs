/**
 * Weapons & Armor M3 — batch 1 corrections after review.
 *
 *  sutton-hoo-helmet — reverted on the owner's call: the British Museum replica
 *      returns as the principal image because it communicates the helmet's form
 *      far better than the fragmentary original. The original photograph stays in
 *      the article as the secondary image, so the reader still sees what actually
 *      survives. The attribution defect is NOT reverted: the replica is credited
 *      to its 20th-century makers, not to an Anglo-Saxon smith.
 *
 *  great-helm — the Kornburg helm was a pure side view. Replaced with a
 *      three-quarter view showing the front (ocularium, breath holes) and the
 *      side together. Kornburg is kept as a secondary image, where its surviving
 *      gilding is genuinely worth seeing.
 *
 *  nasal-helmet — unchanged; approved on review.
 */
import { readFileSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dataPath = path.join(__dirname, '../server/data/history.json')
const data = JSON.parse(readFileSync(dataPath, 'utf8'))
const wa = (id) => data.weaponsArmor.find((x) => x.id === id)

const F = (n) => `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(n.replace(/ /g, '_'))}`
const P = (n) => `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(n.replace(/ /g, '_'))}`

// ---- Sutton Hoo: replica back as principal, original as secondary -----------
{
  const e = wa('sutton-hoo-helmet')
  const replicaFile = 'Sutton_Hoo_helmet_2016.png'
  const originalSrc = e.image                 // the reassembled original, currently principal
  const originalInfo = e.imageInfo

  // The demoted replica entry we added in batch 1 (if present) is no longer needed.
  e.sectionImages = (e.sectionImages ?? []).filter((s) => !/replica/i.test(s.caption ?? ''))

  e.image = F(replicaFile)
  e.imageInfo = {
    caption:
      'The British Museum’s replica of the Sutton Hoo helmet, showing the complete decorative scheme — tinned-bronze panels, gilt dragon crest, garnet-set eyebrows — as the helmet would have looked when new.',
    creator: 'Replica made for the British Museum by the Royal Armouries workshop',
    date: 'replica made 1971–73; original helmet early 7th century',
    source: 'British Museum — via Wikimedia Commons',
    sourceUrl: P(replicaFile),
    note:
      'A modern replica, not the excavated helmet. It is shown first because the original survives only as corroded fragments reassembled on a shell, so the replica is the clearer guide to the object’s original appearance. The surviving original is shown below.'
  }
  e.sectionImages.unshift({
    section: 'Description',
    src: originalSrc,
    alt: 'The original Sutton Hoo helmet, reassembled from surviving fragments, in the British Museum.',
    caption:
      'The original helmet as it survives: corroded iron and tinned bronze, reassembled from several hundred fragments.',
    creator: originalInfo?.creator ?? 'Photograph by Michel wal',
    date: originalInfo?.date ?? 'photographed 2008; helmet early 7th century',
    source: 'British Museum (Sutton Hoo Mound 1) — via Wikimedia Commons',
    sourceUrl: originalInfo?.sourceUrl ?? '',
    note:
      'Herbert Maryon assembled a first reconstruction in 1945–46; Nigel Williams dismantled and rebuilt it in 1970–71 after re-reading the fragments, and the two differ noticeably in the shape of the cap. The outline is the best current interpretation rather than a settled fact.'
  })
  console.log('sutton-hoo-helmet: replica restored as principal; original kept as secondary')
}

// ---- Great helm: three-quarter view showing front and side ------------------
{
  const e = wa('great-helm')
  const file = 'Ancient German armour helmet.jpg'
  const kornburgSrc = e.image
  const kornburgInfo = e.imageInfo

  // Drop the batch-1 demotion (the Berlin helm now IS the principal, so keeping
  // another Berlin helm as a secondary would likely duplicate the same object).
  e.sectionImages = (e.sectionImages ?? []).filter((s) => !/Deutsches Historisches Museum/i.test(s.note ?? ''))

  e.image = F(file)
  e.imageInfo = {
    caption:
      'A great helm seen from the front quarter, so that both faces read at once: the flat top, the tapering cylinder, the horizontal ocularium slit for vision and the pierced breath holes over the mouth.',
    creator: 'Photograph by Thom Quine',
    date: 'photographed 2009; helm of the high medieval type',
    source: 'Museum collection in Berlin — via Wikimedia Commons',
    sourceUrl: P(file),
    note:
      'The photographer’s record identifies the object only as an armour helmet exhibited in a Berlin museum, so the individual piece and its accession are not established here. The surface is pitted from burial or long exposure, but the construction — riveted bands, eye slit, breath holes — remains fully legible, which is why it is used in preference to a cleaner side-only view. Licensed CC BY-SA 2.0.'
  }
  e.sectionImages.push({
    section: 'Regional variations and surviving pieces',
    src: kornburgSrc,
    alt: 'The great helm of Hans Rieter von Kornburg, mid-14th century, Germanisches Nationalmuseum, Nuremberg.',
    caption:
      'The great helm of Hans Rieter von Kornburg, Nuremberg, mid-14th century — seen from the side, with gilt decorative bands and a mail curtain at the lower edge.',
    creator: kornburgInfo?.creator ?? 'Photograph by Anagoria',
    date: kornburgInfo?.date ?? 'photographed 2013; helm mid-14th century',
    source: 'Germanisches Nationalmuseum, Nuremberg — via Wikimedia Commons',
    sourceUrl: kornburgInfo?.sourceUrl ?? '',
    note:
      'One of the better-preserved great helms anywhere: enough gilding survives to show that these helmets were decorated objects, not bare steel. Licensed CC BY 3.0.'
  })
  console.log('great-helm: three-quarter view set as principal; Kornburg helm kept as secondary')
}

writeFileSync(dataPath, JSON.stringify(data, null, 2))
console.log('history.json written')
