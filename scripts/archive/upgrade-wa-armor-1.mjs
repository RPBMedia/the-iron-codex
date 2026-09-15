/**
 * W&A M5c — major armour, helmets, and shields. Adds an armour-ADAPTED
 * Specifications card (protection / construction / weight / limitations — not a
 * weapon template) to the high-interest entries, and appends a specialist museum
 * source to the four entries the audit found lacking one. Prose + existing
 * (non-generic) knownFor left intact. Idempotent by id.
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
  'plate-armor': S([
    { label: 'Period', value: 'Late 14th–16th century' },
    { label: 'Material', value: 'Hardened steel plates' },
    { label: 'Weight (full harness)', value: 'c. 20–25 kg, spread over the body' },
    { label: 'Protects against', value: 'Cuts, most thrusts, and many arrows' },
    { label: 'Weak against', value: 'Concussion, and thrusts into the gaps' },
    { label: 'Construction', value: 'Articulated lames riveted and strapped' },
    { label: 'Worn over', value: 'An arming doublet and mail voiders' }
  ]),
  'mail-armor': S([
    { label: 'Period', value: 'Antiquity to the 16th century' },
    { label: 'Material', value: 'Riveted iron or steel rings' },
    { label: 'Weight (shirt)', value: 'c. 9–12 kg' },
    { label: 'Protects against', value: 'Cuts and slashes very well' },
    { label: 'Weak against', value: 'Concussion, fine points, and heavy thrusts' },
    { label: 'Construction', value: 'Interlinked 4-in-1 riveted rings' },
    { label: 'Worn over', value: 'A padded garment (gambeson/aketon)' }
  ]),
  'gambeson': S([
    { label: 'Period', value: 'c. 12th–15th century' },
    { label: 'Material', value: 'Quilted layers of linen or wool' },
    { label: 'Weight', value: 'c. 3–5 kg' },
    { label: 'Protects against', value: 'Cuts, blunt trauma, and some arrows' },
    { label: 'Worn', value: 'Alone by common infantry, or under mail/plate' },
    { label: 'Cost', value: 'Cheap and widely affordable' }
  ]),
  'brigandine': S([
    { label: 'Period', value: 'c. 14th–16th century' },
    { label: 'Material', value: 'Small steel plates riveted inside a cloth garment' },
    { label: 'Weight', value: 'c. 8–10 kg' },
    { label: 'Protects', value: 'The torso, while staying flexible' },
    { label: 'Construction', value: 'Plates riveted to fabric (rivet-heads show outside)' },
    { label: 'Typical users', value: 'Men-at-arms and better-equipped infantry' }
  ]),
  'bascinet': S([
    { label: 'Period', value: '14th–early 15th century' },
    { label: 'Material', value: 'Steel' },
    { label: 'Weight', value: 'c. 2–3 kg' },
    { label: 'Protects', value: 'Skull, face, and (via the aventail) the neck' },
    { label: 'Features', value: 'Pointed skull; mail aventail; often a pointed visor' },
    { label: 'Worn by', value: 'Knights and men-at-arms' }
  ]),
  'great-helm': S([
    { label: 'Period', value: 'Late 12th–14th century' },
    { label: 'Material', value: 'Riveted steel plates' },
    { label: 'Weight', value: 'c. 2.5–4 kg' },
    { label: 'Protects', value: 'The entire head, fully enclosed' },
    { label: 'Weak against', value: 'Poor vision and ventilation; heavy on the neck' },
    { label: 'Worn over', value: 'A mail coif or a close-fitting cervelliere' }
  ]),
  'sallet': S([
    { label: 'Period', value: '15th century' },
    { label: 'Material', value: 'Steel' },
    { label: 'Weight', value: 'c. 2–3 kg' },
    { label: 'Protects', value: 'Skull and neck; the face with a paired bevor' },
    { label: 'Features', value: 'Swept rear tail; German long-tailed and Italian forms' },
    { label: 'Worn by', value: 'Late-medieval knights and infantry' }
  ]),
  'hauberk': S([
    { label: 'Period', value: '11th–14th century' },
    { label: 'Material', value: 'Riveted mail' },
    { label: 'Weight', value: 'c. 10–12 kg' },
    { label: 'Covers', value: 'Torso, arms, and thighs (a long mail shirt)' },
    { label: 'Protects against', value: 'Cutting blows above all' },
    { label: 'Worn over', value: 'A padded gambeson' }
  ]),
  'heater-shield': S([
    { label: 'Period', value: '13th–14th century' },
    { label: 'Material', value: 'Wood faced with leather/gesso, painted' },
    { label: 'Weight', value: 'c. 2–3 kg' },
    { label: 'Shape', value: 'Rounded top, tapering to a point' },
    { label: 'Carried', value: 'On the forearm by straps (enarmes)' },
    { label: 'Also', value: 'A prime surface for heraldry' }
  ]),
  'buckler': S([
    { label: 'Period', value: '13th–16th century' },
    { label: 'Material', value: 'Steel (sometimes wood)' },
    { label: 'Size', value: 'Small round, c. 20–35 cm across' },
    { label: 'Held', value: 'In the fist behind a central boss' },
    { label: 'Used for', value: 'Parrying and binding, paired with a one-handed sword' },
    { label: 'Context', value: 'Both the battlefield and civilian self-defence' }
  ])
}

// Specialist museum source to append where the audit found none.
const MUSEUM = {
  'great-helm': { title: 'Arms and Armour collection', author: 'Royal Armouries, Leeds', type: 'museum collection', url: 'https://royalarmouries.org/collection/' },
  'hauberk': { title: 'Arms and Armor department', author: 'Metropolitan Museum of Art', type: 'museum collection', url: 'https://www.metmuseum.org/art/collection/search?department=4' },
  'kite-shield': { title: 'Arms and Armour collection', author: 'Royal Armouries, Leeds', type: 'museum collection', url: 'https://royalarmouries.org/collection/' },
  'ulfberht-swords': { title: 'Viking-age swords (collection)', author: 'Metropolitan Museum of Art, Arms and Armor', type: 'museum collection', url: 'https://www.metmuseum.org/art/collection/search?department=4&q=viking%20sword' }
}

const results = []
for (const [id, specs] of Object.entries(SPECS)) {
  const w = data.weaponsArmor.find((x) => x.id === id)
  if (!w) { results.push([id, 'MISSING']); continue }
  w.specs = specs
  results.push([id, 'specs'])
}
for (const [id, src] of Object.entries(MUSEUM)) {
  const w = data.weaponsArmor.find((x) => x.id === id)
  if (!w) continue
  w.sources = w.sources || []
  if (!w.sources.some((s) => (s.url || '') === src.url)) {
    w.sources.push(src)
    results.push([id, 'source+'])
  }
}

fs.writeFileSync(dataPath, JSON.stringify(data, null, 2))
for (const [id, a] of results) console.log(`${a.padEnd(9)} ${id}`)
console.log('\nDone. Run gates + build.')
