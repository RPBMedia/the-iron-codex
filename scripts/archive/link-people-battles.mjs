/**
 * People-to-Battle link audit + fix. For every Person article, connects the
 * military events they are tied to and ensures the link appears in (A) related
 * entries and (B) timeline links. Body linking is handled by the regenerated
 * entityLinks auto-linker. Connection signals (authoritative first):
 *   1. the event lists the person as a leader/participant,
 *   2. the person's death.event is the event,
 *   3. the event's name (or distinctive suffix) appears in the person's body or timeline.
 * Dry-run unless --write. Reports every addition.
 */
import fs from 'node:fs'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dataPath = path.join(__dirname, '../server/data/history.json')
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'))
const WRITE = process.argv.includes('--write')

// Military events: battles, sieges, wars, conquests, crusades, falls.
const isMilitary = (e) => ['Battle', 'Siege', 'War'].includes(e.eventType) ||
  /^(battle|siege|fall) of|crusade|conquest|wars of/i.test(e.name || '')
const military = data.events.filter(isMilitary)

// Distinctive suffix (after "Battle of "/"Siege of ") for textual matching.
// Exclude major CITY suffixes that appear as ordinary place references
// unconnected to the battle (Orléans the city vs the 1429 siege, etc.).
const CITY_SUFFIX = new Set(['tours', 'poitiers', 'orléans', 'orleans', 'rouen', 'constantinople', 'jerusalem', 'acre', 'antioch', 'damascus', 'paris', 'kiev'])
function suffixOf(name) {
  const m = (name || '').match(/^(?:Battle|Siege) of (.+)$/)
  if (!m) return null
  const s = m[1].trim()
  if (s.length < 6 || s.includes(',') || CITY_SUFFIX.has(s.toLowerCase())) return null
  return s
}
const suffixMap = new Map(military.map(e => [e.id, suffixOf(e.name)]))

// person id -> Set(event ids) they lead / participate in
const leaderOf = new Map()
function addLeader(pid, eid) { if (!leaderOf.has(pid)) leaderOf.set(pid, new Set()); leaderOf.get(pid).add(eid) }
for (const e of military) {
  for (const l of e.leaders || []) if (l.personId) addLeader(l.personId, e.id)
  for (const p of e.participants || []) for (const l of p.leaders || []) if (l.slug) addLeader(l.slug, e.id)
  for (const it of Object.values(e.relatedEntries || {}).flat()) if (it.type === 'person' && it.slug && /commander|fought|led|killed/i.test(it.label || '')) addLeader(it.slug, e.id)
}

function textOf(person) {
  const parts = []
  for (const s of person.contentSections || []) for (const p of s.paragraphs || []) parts.push(p)
  for (const t of person.timeline || []) { parts.push(t.title || ''); parts.push(t.description || '') }
  return parts.join(' \n ')
}
function mentions(text, e) {
  if (new RegExp(`\\b${e.name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'i').test(text)) return true
  const suf = suffixMap.get(e.id)
  if (suf && new RegExp(`\\b${suf.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`).test(text)) return true
  return false
}

function labelFor(person, e) {
  if (leaderOf.get(person.id)?.has(e.id)) {
    if (person.death?.event?.slug === e.id) return 'Killed in this battle'
    return e.eventType === 'Siege' ? 'Commander at the siege' : (e.eventType === 'War' ? 'Central figure in the war' : 'Commander')
  }
  if (person.death?.event?.slug === e.id) return 'Where he died'
  return '' // textual mention: link without a forced generic label
}

const relTypeCol = { person: 'characters', event: 'events', location: 'locations', artifact: 'artifacts', weaponArmor: 'weaponsArmor' }
function currentRelSlugs(person) {
  const s = new Set()
  for (const it of Object.values(person.relatedEntries || {}).flat()) if (it.slug) s.add(`${relTypeCol[it.type] || it.type}:${it.slug}`)
  return s
}

let relAdds = 0, tlAdds = 0
const report = []
for (const person of data.characters) {
  const text = textOf(person)
  // Lifespan window for non-authoritative (textual) matches: the event must fall
  // within the person's life, so a Legacy section discussing a much-later battle
  // as context does not create a false connection.
  const lo = (typeof person.born === 'number' ? person.born : -Infinity) - 5
  const hi = (typeof person.died === 'number' ? person.died : Infinity) + 3
  const connected = []
  for (const e of military) {
    const isLeader = leaderOf.get(person.id)?.has(e.id)
    const isDeath = person.death?.event?.slug === e.id
    const inLife = typeof e.year !== 'number' || (e.year >= lo && e.year <= hi)
    const isMention = inLife && mentions(text, e)
    if (isLeader || isDeath || isMention) connected.push({ e, rank: isLeader ? 0 : isDeath ? 1 : (['Battle', 'Siege'].includes(e.eventType) ? 2 : 3) })
  }
  if (!connected.length) continue
  connected.sort((a, b) => a.rank - b.rank)

  // (A) related entries — add up to 4 military events, prefer battles/sieges over wars
  if (!person.relatedEntries) person.relatedEntries = {}
  if (!person.relatedEntries.events) person.relatedEntries.events = []
  const have = currentRelSlugs(person)
  let addedThis = []
  for (const { e } of connected) {
    if (person.relatedEntries.events.filter(x => ['Battle', 'Siege', 'War'].includes(military.find(m => m.id === x.slug)?.eventType) || /^(battle|siege|fall) of|crusade|conquest|wars of/i.test(x.title || '')).length >= 4) break
    if (have.has(`events:${e.id}`)) continue
    const entry = { title: e.name, type: 'event', slug: e.id }
    const lbl = labelFor(person, e)
    if (lbl) entry.label = lbl
    person.relatedEntries.events.push(entry)
    have.add(`events:${e.id}`)
    relAdds++; addedThis.push('REL+' + e.id)
  }

  // (B) timeline links — for each timeline item mentioning a military event, ensure link
  for (const item of person.timeline || []) {
    const itemText = `${item.title || ''} ${item.description || ''}`
    for (const { e } of connected) {
      if (!mentions(itemText, e)) continue
      if (!item.links) item.links = []
      if (item.links.some(l => l.slug === e.id)) continue
      item.links.push({ title: e.name, type: 'event', slug: e.id })
      tlAdds++; addedThis.push('TL+' + e.id + '@' + (item.date || '?'))
    }
  }

  if (addedThis.length) report.push(`${person.id}: ${addedThis.join(', ')}`)
}

console.log(WRITE ? '=== WROTE ===' : '=== DRY RUN ===')
console.log(`Related-entry battle links added: ${relAdds}`)
console.log(`Timeline battle links added: ${tlAdds}`)
console.log(`People updated: ${report.length}`)
report.forEach(r => console.log('  ' + r))
if (WRITE) fs.writeFileSync(dataPath, JSON.stringify(data, null, 2))
