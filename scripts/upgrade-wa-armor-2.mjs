/**
 * W&A M5c-tail — remaining minor armour, helmets, and shields. Adds an
 * armour-adapted Specifications card to each. Prose + non-generic knownFor intact.
 * Idempotent by id. (surcoat is a garment, so its fields describe cloth/function.)
 */
import fs from 'node:fs'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dataPath = path.join(__dirname, '../server/data/history.json')
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'))

const NOTE = 'Typical ranges; surviving examples vary by date, region, and workshop.'
const S = (rows) => ({ note: NOTE, rows })

const SPECS = {
  'kettle-hat': S([
    { label: 'Period', value: '12th–15th century' },
    { label: 'Material', value: 'Steel' },
    { label: 'Weight', value: 'c. 1.5–2.5 kg' },
    { label: 'Form', value: 'Domed skull with a wide brim, open face' },
    { label: 'Protects', value: 'The head from blows and missiles from above' },
    { label: 'Strengths', value: 'Cheap, with good vision and ventilation' },
    { label: 'Typical users', value: 'Infantry, archers, and levies' }
  ]),
  'nasal-helmet': S([
    { label: 'Period', value: '10th–12th century' },
    { label: 'Material', value: 'Steel (often a segmented spangenhelm build)' },
    { label: 'Weight', value: 'c. 1.5–2.5 kg' },
    { label: 'Form', value: 'Conical skull with a fixed nasal bar' },
    { label: 'Protects', value: 'The skull and the centre of the face' },
    { label: 'Worn over', value: 'A mail coif' },
    { label: 'Typical users', value: 'Norman and other early-medieval warriors' }
  ]),
  'mail-coif': S([
    { label: 'Period', value: '11th–14th century' },
    { label: 'Material', value: 'Riveted mail' },
    { label: 'Weight', value: 'c. 1–2 kg' },
    { label: 'Covers', value: 'The head, neck, and throat' },
    { label: 'Protects against', value: 'Cutting blows to the neck and head' },
    { label: 'Worn', value: 'Over a padded cap, under a helmet' }
  ]),
  'hounskull-bascinet': S([
    { label: 'Period', value: 'Late 14th–early 15th century' },
    { label: 'Material', value: 'Steel' },
    { label: 'Weight', value: 'c. 2.5–3.5 kg with visor' },
    { label: 'Form', value: 'Bascinet with a pointed, snouted "pig-face" visor' },
    { label: 'Protects', value: 'The whole head; a mail aventail guards the neck' },
    { label: 'Strengths', value: 'The snout deflects thrusts and aids ventilation' },
    { label: 'Typical users', value: 'Knights and men-at-arms' }
  ]),
  'coat-of-plates': S([
    { label: 'Period', value: '13th–14th century' },
    { label: 'Material', value: 'Iron plates riveted inside cloth or leather' },
    { label: 'Weight', value: 'c. 7–9 kg' },
    { label: 'Protects', value: 'The torso, bridging mail and full plate' },
    { label: 'Worn over', value: 'A mail hauberk' },
    { label: 'Evidence', value: 'Well known from the Wisby (Visby) battle finds' }
  ]),
  'gothic-plate-armor': S([
    { label: 'Period', value: 'Later 15th century' },
    { label: 'Origin', value: 'German ("Gothic") style' },
    { label: 'Material', value: 'Steel' },
    { label: 'Weight', value: 'c. 20–25 kg full harness' },
    { label: 'Look', value: 'Slender, fluted, sharply pointed forms' },
    { label: 'Strengths', value: 'Elegant articulation; fluting adds rigidity' },
    { label: 'Typical users', value: 'Wealthy knights and nobles' }
  ]),
  'surcoat': S([
    { label: 'Period', value: '12th–14th century' },
    { label: 'Material', value: 'Cloth (linen, wool, sometimes silk)' },
    { label: 'Worn over', value: 'Mail armour' },
    { label: 'Function', value: 'Identification, heraldry, and shade from the sun' },
    { label: 'Note', value: 'A garment, not armour; later gave way to the tighter jupon' }
  ]),
  'kite-shield': S([
    { label: 'Period', value: '11th–13th century' },
    { label: 'Material', value: 'Wood faced with leather' },
    { label: 'Weight', value: 'c. 2–3 kg' },
    { label: 'Shape', value: 'Elongated teardrop (a "kite")' },
    { label: 'Protects', value: 'The body and the left leg of a horseman' },
    { label: 'Carried', value: 'On the forearm by straps (enarmes)' },
    { label: 'Survivor', value: 'The rare 13th-c. Seedorf shield' }
  ]),
  'pavise': S([
    { label: 'Period', value: '14th–16th century' },
    { label: 'Material', value: 'Wood faced with leather/gesso, painted' },
    { label: 'Size', value: 'Large — a standing body shield' },
    { label: 'Protects', value: 'A crossbowman while spanning and reloading' },
    { label: 'Deployed', value: 'Propped up, or carried by a shield-bearer (pavisier)' },
    { label: 'Context', value: 'Siege and field-crossbow warfare' }
  ]),
  'shield': S([
    { label: 'Period', value: 'Throughout the Middle Ages' },
    { label: 'Material', value: 'Wood, faced with leather, with a metal boss/rim' },
    { label: 'Forms', value: 'Round, kite, heater, buckler, and pavise' },
    { label: 'Protects', value: 'The body, actively interposed against blows and missiles' },
    { label: 'Carried', value: 'On the arm (enarmes) or in the fist (a boss)' },
    { label: 'Role', value: 'The primary personal defence before full plate' }
  ])
}

const results = []
for (const [id, specs] of Object.entries(SPECS)) {
  const w = data.weaponsArmor.find((x) => x.id === id)
  if (!w) { results.push([id, 'MISSING']); continue }
  w.specs = specs
  results.push([id, 'specs'])
}

fs.writeFileSync(dataPath, JSON.stringify(data, null, 2))
for (const [id, a] of results) console.log(`${a.padEnd(9)} ${id}`)
const withSpecs = data.weaponsArmor.filter((w) => w.specs).length
console.log(`\nDone. Entries with specs: ${withSpecs}/${data.weaponsArmor.length}. Run gates + build.`)
