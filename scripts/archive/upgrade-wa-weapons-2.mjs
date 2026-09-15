/**
 * W&A M5b — second 9 general weapons. Same pattern as batch 1: replace the generic
 * template knownFor with weapon-specific facts and add a Specifications card
 * (established ranges, not false precision). Prose left intact. Idempotent.
 * longbow vs war-bow are deliberately framed distinctly to avoid interchangeable text.
 */
import fs from 'node:fs'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dataPath = path.join(__dirname, '../server/data/history.json')
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'))

const NOTE = 'Typical ranges; individual medieval examples varied by workshop, date, and region.'
const S = (rows) => ({ note: NOTE, rows })

const UP = {
  'mace': {
    knownFor: [
      'A concussive weapon that stunned an opponent through mail and helmets without needing to cut.',
      'Flanged metal heads developed to bite and crush plate armour that resisted the edge.',
      'Simple, cheap, and almost unbreakable compared with a sword.',
      'A one-handed weapon favoured by cavalry and, by tradition, by fighting clergy.'
    ],
    specs: S([
      { label: 'Period', value: 'Throughout the Middle Ages (flanged forms 12th–15th c.)' },
      { label: 'Overall length', value: 'c. 0.5–0.8 m' },
      { label: 'Typical weight', value: 'c. 1–2 kg' },
      { label: 'Head', value: 'Knobbed or flanged metal' },
      { label: 'Grip', value: 'One-handed' },
      { label: 'Primary action', value: 'Crushing, concussive blows' },
      { label: 'Typical users', value: 'Cavalry, sergeants, men-at-arms' },
      { label: 'Role', value: 'Armour-defeating percussion weapon' }
    ])
  },
  'longbow': {
    knownFor: [
      'A tall self-bow of yew, drawn to the ear and shot in massed volleys.',
      'Very heavy draw weights that demanded a lifetime of training from boyhood.',
      'The missile arm that made English armies so dangerous in the Hundred Years’ War.',
      'Deadliest against horses and unarmoured troops; its power against good plate is debated.'
    ],
    specs: S([
      { label: 'Period', value: 'c. 13th–16th century (English/Welsh)' },
      { label: 'Length', value: 'c. 1.8–2.0 m (a "self" stave)' },
      { label: 'Material', value: 'Yew (or ash, elm), single stave' },
      { label: 'Draw weight', value: 'Estimated c. 100–160+ lb (from Mary Rose finds)' },
      { label: 'Arrows', value: 'Bodkin and broadhead types' },
      { label: 'Primary use', value: 'Massed direct and arcing volleys' },
      { label: 'Typical users', value: 'English and Welsh archers' },
      { label: 'Role', value: 'Decisive infantry missile weapon' }
    ])
  },
  'war-bow': {
    knownFor: [
      'The heavy military bow, distinct from the lighter bows used for hunting.',
      'Enormous draw weights that left visible marks on archers’ skeletons, as the Mary Rose bows attest.',
      'Trained through years of practice mandated by law in some realms.',
      'Shot with heavy war arrows — bodkin points for armour, broadheads against horses and men.'
    ],
    specs: S([
      { label: 'Period', value: 'High to late Middle Ages' },
      { label: 'Length', value: 'c. 1.7–2.0 m' },
      { label: 'Draw weight', value: 'Estimated well over 100 lb for war bows' },
      { label: 'Material', value: 'Yew and other self-bow woods' },
      { label: 'Arrows', value: 'Heavy war shafts; bodkin and broadhead heads' },
      { label: 'Primary use', value: 'Long-range massed shooting' },
      { label: 'Typical users', value: 'Trained military archers' },
      { label: 'Role', value: 'Heavy military missile weapon' }
    ])
  },
  'crossbow': {
    knownFor: [
      'High power and accuracy from a weapon that needed little training to use.',
      'A slow reload, spanned by stirrup, goat’s-foot lever, windlass, or cranequin.',
      'The trade weapon of professional mercenaries such as the Genoese crossbowmen.',
      'Condemned for use against Christians by the Second Lateran Council of 1139.'
    ],
    specs: S([
      { label: 'Period', value: 'c. 11th–16th century' },
      { label: 'Bow (lath)', value: 'Composite, horn, or later steel' },
      { label: 'Spanning', value: 'Stirrup, goat’s-foot lever, windlass, cranequin' },
      { label: 'Projectile', value: 'Short bolt or quarrel' },
      { label: 'Rate of fire', value: 'Low — far slower than a bow' },
      { label: 'Primary use', value: 'Powerful, aimed armour-piercing shots' },
      { label: 'Typical users', value: 'Mercenaries, town militias, garrisons' },
      { label: 'Role', value: 'High-power missile weapon' }
    ])
  },
  'rondel-dagger': {
    knownFor: [
      'A stiff, sharply tapered thrusting dagger with round discs (rondels) at guard and pommel.',
      'Made to punch into the gaps of plate armour at grappling range.',
      'The standard sidearm for a knight’s armoured close combat and half-swording.',
      'The weapon of the finishing thrust — the mercy-stroke against a downed opponent.'
    ],
    specs: S([
      { label: 'Period', value: 'c. 14th–16th century' },
      { label: 'Overall length', value: 'c. 30–50 cm' },
      { label: 'Blade', value: 'Stiff, acutely tapered; often of square or diamond section' },
      { label: 'Guard/pommel', value: 'Flat discs (rondels)' },
      { label: 'Grip', value: 'One-handed, often reversed (ice-pick) for armoured work' },
      { label: 'Primary action', value: 'Thrusting into armour gaps' },
      { label: 'Typical users', value: 'Knights and men-at-arms' },
      { label: 'Role', value: 'Armoured close-combat sidearm' }
    ])
  },
  'seax': {
    knownFor: [
      'A single-edged blade that served as both a tool and a sidearm.',
      'The distinctive "broken-back" profile of many larger Anglo-Saxon examples.',
      'A weapon so bound to one people that it is said to have given the Saxons their name.',
      'Sometimes finely inscribed, like the runic Seax of Beagnoth in the British Museum.'
    ],
    specs: S([
      { label: 'Period', value: 'c. 5th–11th century' },
      { label: 'Length', value: 'From small knives to langseax of c. 40–70 cm' },
      { label: 'Blade', value: 'Single-edged, often "broken-back"' },
      { label: 'Grip', value: 'One-handed' },
      { label: 'Function', value: 'Utility knife and close-combat sidearm' },
      { label: 'Typical users', value: 'Anglo-Saxons, Franks, Norse' },
      { label: 'Role', value: 'Everyday knife and backup weapon' }
    ])
  },
  'falchion': {
    knownFor: [
      'A single-edged sword with a broad, forward-weighted, cleaver-like blade.',
      'Balance set toward the tip for heavy, chopping cuts.',
      'A cheaper, harder-hitting cutting alternative to the double-edged arming sword.',
      'Known from rare survivors such as the 13th-century Conyers falchion.'
    ],
    specs: S([
      { label: 'Period', value: 'c. 13th–16th century' },
      { label: 'Overall length', value: 'c. 80–95 cm' },
      { label: 'Blade', value: 'Single-edged, broad, forward-weighted' },
      { label: 'Grip', value: 'One-handed' },
      { label: 'Primary action', value: 'Powerful cuts and chops' },
      { label: 'Typical users', value: 'Infantry and knights alike' },
      { label: 'Role', value: 'Cutting sword / sidearm' }
    ])
  },
  'bill-billhook': {
    knownFor: [
      'A polearm evolved from the farmer’s billhook, with a hooked cutting blade.',
      'A head that could cut, thrust with its spike, and hook a rider or his weapon.',
      'The English counterpart to the halberd, the "bill" of "bills and bows".',
      'A cheap, versatile weapon for the common infantry of late-medieval England.'
    ],
    specs: S([
      { label: 'Period', value: 'c. 14th–16th century' },
      { label: 'Overall length', value: 'c. 1.5–2 m' },
      { label: 'Head', value: 'Curved cutting blade + hook + top spike' },
      { label: 'Grip', value: 'Two-handed' },
      { label: 'Primary actions', value: 'Cut, hook, and thrust' },
      { label: 'Typical users', value: 'English infantry' },
      { label: 'Role', value: 'Versatile infantry polearm' }
    ])
  },
  'javelin-throwing-spear': {
    knownFor: [
      'A light spear made to be thrown before closing to hand-to-hand range.',
      'Used to skirmish and to break up an enemy shield wall from a distance.',
      'The barbed Frankish angon, whose head lodged in a shield to weigh it down.',
      'The weapon of light troops, from foot skirmishers to the mounted jinetes of Iberia.'
    ],
    specs: S([
      { label: 'Period', value: 'Throughout the Middle Ages' },
      { label: 'Length', value: 'c. 1.0–1.5 m' },
      { label: 'Typical weight', value: 'Light — made to be thrown' },
      { label: 'Head', value: 'Small point; sometimes barbed (the angon)' },
      { label: 'Grip', value: 'One-handed' },
      { label: 'Primary use', value: 'Thrown missile, then melee' },
      { label: 'Typical users', value: 'Skirmishers and light cavalry' },
      { label: 'Role', value: 'Light throwing weapon' }
    ])
  }
}

const results = []
for (const [id, up] of Object.entries(UP)) {
  const w = data.weaponsArmor.find((x) => x.id === id)
  if (!w) { results.push([id, 'MISSING']); continue }
  w.knownFor = up.knownFor
  w.specs = up.specs
  results.push([id, 'upgraded'])
}

fs.writeFileSync(dataPath, JSON.stringify(data, null, 2))
for (const [id, a] of results) console.log(`${a.padEnd(9)} ${id}`)
console.log('\nDone. Run gates + build.')
