/**
 * W&A M5a — first 9 general weapons. Replaces the generic template knownFor with
 * weapon-specific facts and adds a scannable Specifications card (typical ranges
 * from established arms scholarship, not false precision). Prose sections are left
 * intact. Idempotent by id. Battle names are avoided in these fields to keep the
 * auto-linker clean.
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
  'arming-sword': {
    knownFor: [
      'The standard one-handed knightly sword of the high Middle Ages, carried with a shield.',
      'A cruciform hilt and a double-edged blade that shifted from broad cutting to tapering thrusting forms as armour improved.',
      'The everyday sidearm of the mounted knight, worn even when the lance or another weapon led the fight.',
      'The direct ancestor of the two-handed longsword.'
    ],
    specs: S([
      { label: 'Period', value: 'c. 1000–1400' },
      { label: 'Overall length', value: 'c. 90–100 cm' },
      { label: 'Blade length', value: 'c. 70–80 cm' },
      { label: 'Typical weight', value: 'c. 1.0–1.5 kg' },
      { label: 'Grip', value: 'One-handed' },
      { label: 'Blade', value: 'Double-edged; broad cutting to tapering thrusting types' },
      { label: 'Used with', value: 'A shield (heater, kite, or buckler)' },
      { label: 'Typical users', value: 'Knights and men-at-arms' }
    ])
  },
  'viking-sword': {
    knownFor: [
      'A broad, double-edged cutting blade with a wide central fuller to lighten it.',
      'Pattern-welded construction in earlier examples, and the famous imported Frankish blades signed +VLFBERHT+.',
      'A high-status object, often richly hilted, named, and buried with its owner.',
      'The prestige weapon of the Norse warrior, used alongside a round shield.'
    ],
    specs: S([
      { label: 'Period', value: 'c. 8th–11th century' },
      { label: 'Overall length', value: 'c. 90–100 cm' },
      { label: 'Blade length', value: 'c. 70–80 cm' },
      { label: 'Typical weight', value: 'c. 1.0–1.4 kg' },
      { label: 'Grip', value: 'One-handed' },
      { label: 'Blade', value: 'Broad, fullered, double-edged; rounded cutting point' },
      { label: 'Construction', value: 'Pattern-welded, or imported crucible-steel blades' },
      { label: 'Typical users', value: 'Norse and Frankish warriors' }
    ])
  },
  'dane-axe': {
    knownFor: [
      'A long two-handed axe with a broad, thin, dramatically flared cutting edge.',
      'Reach and cleaving power enough to split shields and bite through mail.',
      'The signature weapon of the Anglo-Danish housecarls, the elite of the late Viking age.',
      'A weapon that traded the shield hand for sheer two-handed hitting power.'
    ],
    specs: S([
      { label: 'Period', value: 'c. 10th–12th century' },
      { label: 'Haft length', value: 'c. 1.2–1.7 m' },
      { label: 'Head edge', value: 'c. 20–30 cm, broad and thin' },
      { label: 'Typical weight', value: 'c. 1–2 kg' },
      { label: 'Grip', value: 'Two-handed (no shield)' },
      { label: 'Primary actions', value: 'Cleaving cuts; shield- and limb-splitting blows' },
      { label: 'Typical users', value: 'Housecarls and elite infantry' },
      { label: 'Role', value: 'Shock infantry weapon' }
    ])
  },
  'battle-axe': {
    knownFor: [
      'A cheap, widely available weapon that concentrated force into a narrow edge.',
      'Effective at cutting and at defeating mail and light armour for its low cost.',
      'Carried one-handed with a shield across the whole medieval period.',
      'A family running from the Frankish throwing francisca to the later horseman’s axe.'
    ],
    specs: S([
      { label: 'Period', value: 'Throughout the Middle Ages' },
      { label: 'Haft length', value: 'c. 0.6–1.0 m' },
      { label: 'Typical weight', value: 'c. 1.0–1.5 kg' },
      { label: 'Grip', value: 'One-handed (with a shield)' },
      { label: 'Head', value: 'Compact cutting bit; sometimes a rear spike' },
      { label: 'Primary actions', value: 'Hooking, chopping, armour-splitting blows' },
      { label: 'Typical users', value: 'Infantry of every rank' },
      { label: 'Role', value: 'Cheap, effective sidearm' }
    ])
  },
  'lance': {
    knownFor: [
      'The shock weapon of the mounted knight, couched tight under the arm for the charge.',
      'A weapon that delivered the combined momentum of horse and rider to a single point.',
      'Fitted over time with a vamplate to guard the hand and a lance-rest (arrêt) to brace the shaft.',
      'The defining arm of the heavy cavalry charge, distinct from its blunted tournament forms.'
    ],
    specs: S([
      { label: 'Period', value: 'c. 11th–15th century' },
      { label: 'Overall length', value: 'c. 2.5–4 m' },
      { label: 'Typical weight', value: 'c. 2–3 kg' },
      { label: 'Shaft', value: 'Ash, tapering; later with a hand-guard (vamplate)' },
      { label: 'Grip', value: 'Couched one-handed on horseback' },
      { label: 'Primary action', value: 'The charge — a single braced thrust at speed' },
      { label: 'Typical users', value: 'Knights and heavy cavalry' },
      { label: 'Role', value: 'Mounted shock weapon' }
    ])
  },
  'spear': {
    knownFor: [
      'The most common weapon of the Middle Ages — cheap, easy to make, and easy to learn.',
      'Long reach that let the front rank strike before shorter weapons could answer.',
      'The backbone of the shield wall and the anti-cavalry schiltron.',
      'A weapon carried by everyone from levied peasants to mounted nobles.'
    ],
    specs: S([
      { label: 'Period', value: 'Throughout the Middle Ages' },
      { label: 'Overall length', value: 'c. 1.8–3 m' },
      { label: 'Typical weight', value: 'c. 1–2 kg' },
      { label: 'Head', value: 'Leaf- or lozenge-shaped steel point' },
      { label: 'Grip', value: 'One or two hands' },
      { label: 'Primary actions', value: 'Thrusting; formation fighting' },
      { label: 'Typical users', value: 'Infantry of every kind' },
      { label: 'Role', value: 'The primary infantry weapon' }
    ])
  },
  'halberd': {
    knownFor: [
      'A polearm combining an axe blade, a top spike, and a rear hook or beak on one head.',
      'Versatility: it could chop, thrust, and hook a rider from the saddle.',
      'The signature weapon of the Swiss and South-German infantry of the 14th–16th centuries.',
      'A weapon that let foot soldiers both stop a charge and break into it.'
    ],
    specs: S([
      { label: 'Period', value: 'c. 14th–16th century' },
      { label: 'Overall length', value: 'c. 1.5–2 m' },
      { label: 'Typical weight', value: 'c. 2.5–3.5 kg' },
      { label: 'Head', value: 'Axe blade + top spike + rear hook/beak' },
      { label: 'Grip', value: 'Two-handed' },
      { label: 'Primary actions', value: 'Chop, thrust, and hook/pull down horsemen' },
      { label: 'Typical users', value: 'Swiss and German infantry' },
      { label: 'Role', value: 'Versatile infantry polearm' }
    ])
  },
  'poleaxe': {
    knownFor: [
      'The dismounted knight’s weapon of choice against plate armour.',
      'A head pairing a hammer or axe with a top spike and rear fangs for percussion and puncture.',
      'Steel langets down the haft to stop the shaft being cut through.',
      'A favourite weapon of the judicial duel fought on foot in armour.'
    ],
    specs: S([
      { label: 'Period', value: 'c. 14th–16th century' },
      { label: 'Overall length', value: 'c. 1.5–2 m' },
      { label: 'Typical weight', value: 'c. 2–3 kg' },
      { label: 'Head', value: 'Hammer or axe + top spike + rear fangs' },
      { label: 'Grip', value: 'Two-handed; haft reinforced with langets' },
      { label: 'Primary actions', value: 'Percussive blows and thrusts into armour gaps' },
      { label: 'Typical users', value: 'Dismounted men-at-arms' },
      { label: 'Role', value: 'Knightly anti-plate weapon' }
    ])
  },
  'war-hammer': {
    knownFor: [
      'A concussive weapon built to defeat plate armour that resisted the edge.',
      'A hammer face to stun through the steel and a rear beak to punch or find gaps.',
      'Made in short one-handed horseman’s forms and longer two-handed foot forms.',
      'A specialist arm of the late-medieval armoured battlefield.'
    ],
    specs: S([
      { label: 'Period', value: 'c. 14th–16th century' },
      { label: 'Overall length', value: 'c. 0.5–1.0 m (foot forms longer)' },
      { label: 'Typical weight', value: 'c. 1.0–1.5 kg' },
      { label: 'Head', value: 'Hammer face + rear spike/beak' },
      { label: 'Grip', value: 'One- or two-handed' },
      { label: 'Primary actions', value: 'Concussion through plate; spike into gaps' },
      { label: 'Typical users', value: 'Men-at-arms, mounted and on foot' },
      { label: 'Role', value: 'Armour-defeating percussion weapon' }
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
