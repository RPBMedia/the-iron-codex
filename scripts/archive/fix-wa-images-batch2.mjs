/**
 * Weapons & Armor M3 — image replacements, batch 2.
 *
 *  plate-armor — was a HALF-ARMOUR ending at the tassets, with a caption claiming
 *      it was "shown head to foot". A generic article about the complete harness
 *      must show a complete harness. Now a full Gothic-style harness in Brussels:
 *      sallet, breastplate, tassets, arm harness with gauntlet, cuisses, greaves
 *      and sabatons, all in frame.
 *  pavise — was a black-and-white catalogue photograph of a worn painted shield.
 *      Now a colour studio photograph of a complete fifteenth-century pavise, in
 *      which the central spine and the painted scheme both read.
 *
 * Rejected on inspection this batch: "Gothic armor.jpg" is a 15th-century printed
 * woodcut, not armour (FORMAT FAIL) — the second mislabelled Commons file found
 * in this milestone. "Tarcze rycerskie.jpg" is a reenactment fair with children
 * and tents in shot.
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

function replace(id, { file, imageInfo, demoteTo, demoteNote }) {
  const e = wa(id)
  if (!e) throw new Error(`missing ${id}`)
  const old = { image: e.image, info: e.imageInfo }
  e.image = F(file)
  e.imageInfo = { ...imageInfo, sourceUrl: P(file) }
  if (demoteTo) {
    const titles = (e.contentSections ?? []).map((s) => s.title)
    if (!titles.includes(demoteTo)) throw new Error(`${id}: no section "${demoteTo}" (have: ${titles.join(', ')})`)
    e.sectionImages = [
      ...(e.sectionImages ?? []),
      {
        section: demoteTo,
        src: old.image,
        alt: old.info?.caption ?? '',
        caption: old.info?.caption ?? '',
        creator: old.info?.creator ?? 'Unknown',
        date: old.info?.date ?? '',
        source: old.info?.source ?? 'Wikimedia Commons',
        sourceUrl: old.info?.sourceUrl ?? '',
        note: demoteNote
      }
    ]
  }
  console.log(`${id}: principal -> ${file}${demoteTo ? ` (previous kept under "${demoteTo}")` : ''}`)
}

replace('plate-armor', {
  file: '2016-08-24 D3 4131 Q 3 O BD K1 Musee de l armee KLM MRA K2 Armure K3 K4.jpg',
  imageInfo: {
    caption:
      'A complete late-medieval harness of Gothic style, shown from head to foot: sallet and bevor, fluted breastplate, articulated tassets, full arm defence with gauntlet, and cuisses, greaves and sabatons covering the legs.',
    creator: 'Photograph by Iod1889',
    date: 'photographed 2016; harness of the later 15th century',
    source: 'Royal Museum of the Armed Forces and of Military History, Brussels — via Wikimedia Commons',
    note:
      'Displayed in a case alongside other pieces, so helmets and swords are visible around it, but the harness itself is unobstructed and complete — which the article needs, because plate armour worked as a system of overlapping defences rather than as separate pieces. The style points to the later fifteenth century; the photograph’s record does not give an accession number, so no closer date is claimed here. Licensed CC BY-SA 4.0.'
  },
  demoteTo: 'Regional variations and surviving pieces',
  demoteNote:
    'A half-armour — helmet, cuirass, pauldrons and tassets without leg defences. Armours were often assembled and displayed this way, and the distinction between a half-armour and a full harness mattered for both cost and mobility.'
})

replace('pavise', {
  file: 'Infantry Shield (Pavise) (IA mma infantry shield pavise 23333).jpg',
  imageInfo: {
    caption:
      'A fifteenth-century pavise, the large standing shield used by crossbowmen and other foot soldiers in central Europe: the full curved body, the raised central spine that stiffened it, and the painted decoration with a heraldic device near the top.',
    creator: 'Collection photograph, Metropolitan Museum of Art',
    date: 'photograph undated; shield 15th century',
    source: 'Metropolitan Museum of Art — via the Internet Archive and Wikimedia Commons',
    note:
      'Shields of this type were often fitted with a prop so that a crossbowman could shelter behind them while spanning his weapon. The paint has faded and abraded, but the profile, the spine and the decorative scheme all remain legible, which a heavily worn example would not show. Public domain.'
  }
})

writeFileSync(dataPath, JSON.stringify(data, null, 2))
console.log('history.json written')
