/**
 * Weapons & Armor M3 — image replacements, batch 1 (helmets).
 *
 * Each replacement follows the 2026-09-06 standard: the whole object in frame,
 * in a condition that communicates its original form, photographic, with the
 * previous image demoted to `sectionImages` rather than deleted.
 *
 *  sutton-hoo-helmet — was the British Museum REPLICA, which the named-artifact
 *      rule forbids (the article is about the original object). Now the
 *      reassembled original; the replica becomes a secondary image, which is
 *      exactly where it is useful. Also fixes the attribution, which credited a
 *      20th-century replica to an "Anglo-Saxon (East Anglian) smith".
 *  great-helm — was a heavily corroded helm photographed with a museum visitor in
 *      shot (CONDITION FAIL for a generic type). Now the Kornburg helm, whose
 *      gilding and aventail survive and whose form reads immediately.
 *  nasal-helmet — was a pitted excavated helm in a dark case (CONDITION FAIL).
 *      Now a clean replica, disclosed as a replica in the caption's first
 *      sentence as the standard requires.
 */
import { readFileSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dataPath = path.join(__dirname, '../server/data/history.json')
const data = JSON.parse(readFileSync(dataPath, 'utf8'))
const wa = (id) => data.weaponsArmor.find((x) => x.id === id)

const F = (name) => `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(name.replace(/ /g, '_'))}`
const P = (name) => `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(name.replace(/ /g, '_'))}`

/** Replace the principal image, keeping the old one as a secondary section image. */
function replace(id, { file, imageInfo, demoteTo, demoteNote }) {
  const entry = wa(id)
  if (!entry) throw new Error(`missing ${id}`)
  const old = { image: entry.image, info: entry.imageInfo }

  entry.image = F(file)
  entry.imageInfo = { ...imageInfo, sourceUrl: P(file) }

  if (demoteTo) {
    const titles = (entry.contentSections ?? []).map((s) => s.title)
    if (!titles.includes(demoteTo)) throw new Error(`${id}: no section "${demoteTo}" (have: ${titles.join(', ')})`)
    entry.sectionImages = entry.sectionImages ?? []
    entry.sectionImages.push({
      section: demoteTo,
      src: old.image,
      alt: old.info?.caption ?? '',
      caption: old.info?.caption ?? '',
      creator: old.info?.creator ?? 'Unknown',
      date: old.info?.date ?? '',
      source: old.info?.source ?? 'Wikimedia Commons',
      sourceUrl: old.info?.sourceUrl ?? '',
      note: demoteNote
    })
  }
  console.log(`${id}: principal -> ${file}${demoteTo ? ` (previous image kept under "${demoteTo}")` : ''}`)
}

// ---- Sutton Hoo helmet: the ORIGINAL, not the replica -----------------------
replace('sutton-hoo-helmet', {
  file: 'Original Sutton Hoo Helmet.jpg',
  imageInfo: {
    caption:
      'The original Sutton Hoo helmet as it survives today: corroded iron overlaid with tinned-bronze panels, with gilt fittings and garnet-set eyebrows still in place, reassembled from several hundred fragments and displayed in the British Museum.',
    creator: 'Photograph by Michel wal',
    date: 'photographed 2008; helmet early 7th century',
    source: 'British Museum (Sutton Hoo Mound 1) — via Wikimedia Commons',
    note:
      'The helmet was excavated in 1939 crushed into hundreds of pieces. What is shown is a reconstruction of the surviving metal: Herbert Maryon assembled a first version in 1945–46, and Nigel Williams dismantled and rebuilt it in 1970–71 after re-reading the fragments. The two reconstructions differ noticeably in the shape of the cap and the placement of the panels, so the outline should be read as the best current interpretation rather than a settled fact. Licensed CC BY-SA 3.0.'
  },
  demoteTo: 'Description',
  demoteNote:
    'The British Museum replica, made in the 1970s by the Royal Armouries, shows the complete decorative scheme as it would have looked when new — useful precisely because the original survives only in fragments. It is a modern object, not an Anglo-Saxon one.'
})

// ---- Great helm: a helm whose form still reads ------------------------------
replace('great-helm', {
  file: '1350 Topfhelm des Hans Rieter zu Kornburg anagoria.JPG',
  imageInfo: {
    caption:
      'The great helm of Hans Rieter von Kornburg, made in Nuremberg about the mid-14th century — the full cylindrical form, the flat top, the ocularium slit and the gilt decorative bands all intact, with a mail curtain hanging from the lower edge.',
    creator: 'Photograph by Anagoria',
    date: 'photographed 2013; helm mid-14th century',
    source: 'Germanisches Nationalmuseum, Nuremberg — via Wikimedia Commons',
    note:
      'One of the better-preserved great helms in any collection: enough of the gilding and the riveted plate construction survives that the shape can be read at a glance, which a corroded excavated helm cannot show. Licensed CC BY 3.0.'
  },
  demoteTo: 'Regional variations and surviving pieces',
  demoteNote:
    'A more heavily corroded great helm in the Deutsches Historisches Museum, Berlin — closer to the condition in which most examples survive, and a useful corrective to how complete the Kornburg helm looks.'
})

// ---- Nasal helmet: a clean replica, disclosed as such -----------------------
replace('nasal-helmet', {
  file: '0922 Spangen helmet from 10th 12th c. Norman style. replica.JPG',
  imageInfo: {
    caption:
      'Modern replica of a Norman-style nasal helmet of the 10th–12th centuries, showing the riveted spangen construction, the browband and the single nasal bar that gives the type its name.',
    creator: 'Photograph by Silar; replica by an unrecorded maker',
    date: 'photographed 2013; replica of a 10th–12th century form',
    source: 'Wikimedia Commons',
    note:
      'A reproduction, not an excavated helmet. It is used here because surviving nasal helmets are corroded and often incomplete, so they show the type badly; this shows how the riveted bands, browband and nasal fit together. It follows the general Norman/spangenhelm form rather than reproducing one identified original, and should not be read as evidence for any individual surviving helmet. Licensed CC BY-SA 3.0.'
  },
  demoteTo: 'Regional variations and surviving pieces',
  demoteNote:
    'A surviving nasal helmet in its excavated condition — pitted and darkened, with the nasal partly obscured. Genuine evidence for the type, and a reminder of how little of the original surface usually survives.'
})

writeFileSync(dataPath, JSON.stringify(data, null, 2))
console.log('history.json written')
