/**
 * Person <-> object links must run both ways (owner rule, 2026-09-07).
 *
 * An audit found THIRTEEN one-way links: the object article named the person, the
 * person's article said nothing about the object, so a reader arriving from the
 * person's side could not find it. William Wallace's Sword was the case the owner
 * spotted; the Bayeux Tapestry, Magna Carta, the Royal Frankish Annals and the
 * Declaration of Arbroath all had the same defect.
 *
 * Kept as a script rather than a one-off edit so the fix is reproducible and the
 * reasoning is on the record.
 */
import { readFileSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dataPath = path.join(__dirname, '../server/data/history.json')
const data = JSON.parse(readFileSync(dataPath, 'utf8'))
const characters = new Map(data.characters.map((c) => [c.id, c]))

const pairs = [
  ['weaponsArmor', 'dane-axe', 'harold-godwinson', 'The two-handed axe of his housecarls at Hastings'],
  ['weaponsArmor', 'kite-shield', 'william-the-conqueror', 'Carried by his cavalry at Hastings'],
  ['weaponsArmor', 'lance', 'william-the-conqueror', 'The couched charge his riders delivered'],
  ['weaponsArmor', 'viking-sword', 'harald-hardrada', 'The sword of his Norse world'],
  ['weaponsArmor', 'bombard', 'mehmed-ii', 'Commissioned the great guns that broke the Theodosian Walls'],
  ['weaponsArmor', 'trebuchet', 'edward-i-of-england', 'Built Warwolf at Stirling in 1304'],
  ['weaponsArmor', 'arquebus', 'mehmed-ii', 'Gunpowder small arms in his army at the siege of 1453'],
  ['weaponsArmor', 'wallace-sword', 'william-wallace', 'The sword kept and displayed as his'],
  ['artifacts', 'bayeux-tapestry', 'william-the-conqueror', 'Its subject and its victor'],
  ['artifacts', 'bayeux-tapestry', 'harold-godwinson', 'Its defeated protagonist'],
  ['artifacts', 'magna-carta-document', 'pope-innocent-iii', 'Annulled it in 1215'],
  ['artifacts', 'royal-frankish-annals', 'charlemagne', 'The reign they chronicle'],
  ['artifacts', 'declaration-of-arbroath', 'robert-the-bruce', 'The king it was written to defend']
]

const typeFor = { weaponsArmor: 'weaponArmor', artifacts: 'artifact' }

let n = 0
for (const [collection, objectId, personId, label] of pairs) {
  const object = data[collection].find((x) => x.id === objectId)
  const person = characters.get(personId)
  if (!object) throw new Error(`missing object: ${collection}/${objectId}`)
  if (!person) throw new Error(`missing person: ${personId}`)

  const already = Object.values(person.relatedEntries ?? {}).flat().some((r) => r?.slug === objectId)
  if (already) {
    console.log(`  = ${personId} already links ${objectId}`)
    continue
  }
  ;(person.relatedEntries[collection] ??= []).push({
    title: object.name,
    type: typeFor[collection],
    slug: object.id,
    label
  })
  console.log(`  + ${personId.padEnd(26)} -> ${objectId}`)
  n++
}

writeFileSync(dataPath, JSON.stringify(data, null, 2))
console.log(`\n${n} back-links added`)
