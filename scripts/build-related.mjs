/**
 * Builds historically-meaningful relatedEntries for every article from the
 * CURATED structured data already in the archive (timeline links, birth/death
 * place & event, realm, location kingdomId, event participants) plus a reverse
 * index (who references this article). These are documented relationships, not
 * category neighbours. Dry-run by default: pass --write to persist.
 */
import fs from 'node:fs'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dataPath = path.join(__dirname, '../server/data/history.json')
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'))
const WRITE = process.argv.includes('--write')

const typeToCollection = {
  person: 'characters', people: 'characters', character: 'characters',
  event: 'events',
  location: 'locations', place: 'locations', kingdom: 'locations', polity: 'locations',
  artifact: 'artifacts', document: 'artifacts',
  weaponArmor: 'weaponsArmor', weapon: 'weaponsArmor', armor: 'weaponsArmor',
  shield: 'weaponsArmor', helmet: 'weaponsArmor', famousWeapon: 'weaponsArmor', famousArmor: 'weaponsArmor'
}
const collectionToType = { characters: 'person', events: 'event', locations: 'location', artifacts: 'artifact', weaponsArmor: 'weaponArmor' }
const collectionToGroup = { characters: 'people', events: 'events', locations: 'locations', artifacts: 'artifacts', weaponsArmor: 'weaponsArmor' }

// id sets + name index
const byId = {} // collection -> Map(id -> article)
const nameIndex = new Map() // lowercased name/alias -> {collection, id, title}
for (const [col, arr] of Object.entries(data)) {
  if (!Array.isArray(arr)) continue
  byId[col] = new Map()
  for (const a of arr) {
    byId[col].set(a.id, a)
    const names = [a.name, a.title, ...(a.aliases || [])].filter(Boolean)
    for (const n of names) {
      const k = n.toLowerCase().trim()
      if (!nameIndex.has(k)) nameIndex.set(k, { collection: col, id: a.id, title: a.name || a.title })
    }
  }
}

function resolve(type, slug) {
  const col = typeToCollection[type]
  if (!col || !slug) return null
  if (!byId[col]?.has(slug)) return null
  return { collection: col, id: slug, title: byId[col].get(slug).name || byId[col].get(slug).title }
}
function resolveName(name) {
  if (!name) return null
  return nameIndex.get(name.toLowerCase().trim()) || null
}

// ── Build a candidate map: articleKey "col/id" -> Map(targetKey -> {col,id,title,reason,weight}) ──
const candidates = new Map()
function keyOf(col, id) { return `${col}/${id}` }
function ensure(col, id) { const k = keyOf(col, id); if (!candidates.has(k)) candidates.set(k, new Map()); return candidates.get(k) }
function addCand(srcCol, srcId, tgt, reason, weight) {
  if (!tgt) return
  if (tgt.collection === srcCol && tgt.id === srcId) return // self
  const m = ensure(srcCol, srcId)
  const tk = `${tgt.collection}/${tgt.id}`
  const existing = m.get(tk)
  if (!existing || weight > existing.weight) {
    m.set(tk, { collection: tgt.collection, id: tgt.id, title: tgt.title, reason: reason || existing?.reason || '', weight: Math.max(weight, existing?.weight || 0) })
  }
}

// Reverse helper: when A documents a relationship to B, also give B a candidate back to A
function addBoth(aCol, aId, bResolved, reasonAtoB, reasonBtoA, weight) {
  if (!bResolved) return
  addCand(aCol, aId, bResolved, reasonAtoB, weight)
  const aArt = byId[aCol].get(aId)
  addCand(bResolved.collection, bResolved.id, { collection: aCol, id: aId, title: aArt.name || aArt.title }, reasonBtoA, weight - 1)
}

for (const [col, arr] of Object.entries(data)) {
  if (!Array.isArray(arr)) continue
  for (const a of arr) {
    // existing relatedEntries (keep, medium weight; also reverse at low weight)
    for (const it of Object.values(a.relatedEntries || {}).flat()) {
      if (!it || !it.slug) continue
      const r = resolve(it.type, it.slug)
      if (r) {
        addCand(col, a.id, r, it.label && it.label !== it.title ? it.label : '', 5)
        addCand(r.collection, r.id, { collection: col, id: a.id, title: a.name || a.title }, '', 2)
      }
    }

    if (col === 'characters') {
      const realm = resolveName(a.quickFacts?.realm)
      const realmTgt = realm && realm.collection === 'locations' ? { collection: 'locations', id: realm.id, title: realm.title } : null
      const deathEventTgt = a.death?.event?.slug ? resolve('event', a.death.event.slug) : null
      // birth place
      const birthTgt = a.birth?.place?.slug ? resolve('location', a.birth.place.slug) : null
      if (birthTgt) addBoth(col, a.id, birthTgt, 'Birthplace', `Birthplace of ${a.name}`, 9)
      // death place + event
      const deathPlaceTgt = a.death?.place?.slug ? resolve('location', a.death.place.slug) : null
      if (deathPlaceTgt) addBoth(col, a.id, deathPlaceTgt, 'Place of death', `Death of ${a.name}`, 8)
      if (deathEventTgt) addBoth(col, a.id, deathEventTgt, 'Died in this engagement', `${a.name} was killed here`, 10)
      // realm
      if (realmTgt) addBoth(col, a.id, realmTgt, 'Realm', `Ruler/figure of ${realm.title}`, 9)
      // transitive: a person's birth/death place also relates to that person's realm and death-event
      for (const placeTgt of [birthTgt, deathPlaceTgt].filter(Boolean)) {
        if (realmTgt && realmTgt.id !== placeTgt.id) addCand('locations', placeTgt.id, realmTgt, `Realm of ${a.name}`, 4)
        if (deathEventTgt) addCand('locations', placeTgt.id, deathEventTgt, `Connected to ${a.name}`, 4)
      }
      // timeline links (frequency-weighted)
      const freq = new Map()
      for (const t of a.timeline || []) for (const l of t.links || []) {
        const r = resolve(l.type, l.slug)
        if (!r) continue
        const tk = `${r.collection}/${r.id}`
        freq.set(tk, (freq.get(tk) || 0) + 1)
      }
      for (const t of a.timeline || []) for (const l of t.links || []) {
        const r = resolve(l.type, l.slug)
        if (!r) continue
        const f = freq.get(`${r.collection}/${r.id}`) || 1
        addCand(col, a.id, r, '', 3 + Math.min(f, 3)) // 4..6 by frequency
        // reverse: the referenced place/event/person gains an inbound candidate
        // (documented in this person's timeline) — no label to avoid generic filler
        addCand(r.collection, r.id, { collection: col, id: a.id, title: a.name || a.title }, '', 2 + Math.min(f, 2))
      }
    }

    if (col === 'events') {
      for (const p of a.participants || []) {
        for (const f of p.factions || []) addBoth(col, a.id, resolve(f.type, f.slug), 'Combatant faction', 'Took part in this engagement', 8)
        for (const ld of p.leaders || []) addBoth(col, a.id, resolve(ld.type, ld.slug), 'Commander', 'Fought in this engagement', 9)
      }
      // leaders/factions flat arrays (if present)
      for (const ld of a.leaders || []) { if (ld?.slug) addBoth(col, a.id, resolve(ld.type, ld.slug), 'Commander', 'Fought in this engagement', 9) }
      for (const f of a.factions || []) { if (f?.slug) addBoth(col, a.id, resolve(f.type, f.slug), 'Combatant faction', 'Took part in this engagement', 8) }
    }

    if (col === 'locations') {
      // containing kingdom by id, else by name string
      if (a.kingdomId) addBoth(col, a.id, resolve('location', a.kingdomId), 'Containing realm', 'Place within this realm', 8)
      else if (a.kingdom) {
        const kr = resolveName(a.kingdom)
        if (kr && kr.collection === 'locations' && kr.id !== a.id) addBoth(col, a.id, { collection: 'locations', id: kr.id, title: kr.title }, 'Containing realm', 'Place within this realm', 7)
      }
    }

    if (col === 'events') {
      // battle-of-X event <-> location X (battlefield), a reliable structural match
      const m = a.id.match(/^battle-of-(.+)$/)
      if (m && byId.locations.has(m[1])) {
        const locId = m[1]
        addBoth(col, a.id, { collection: 'locations', id: locId, title: byId.locations.get(locId).name }, 'Battlefield', 'Battle fought here', 9)
        // battlefield location inherits the battle's commanders and factions
        for (const p of a.participants || []) {
          for (const ld of p.leaders || []) { const r = resolve(ld.type, ld.slug); if (r) addCand('locations', locId, r, 'Fought here', 6) }
          for (const f of p.factions || []) { const r = resolve(f.type, f.slug); if (r) addCand('locations', locId, r, 'Combatant here', 6) }
        }
      }
      // event location string -> location article (match text before comma)
      const locStr = (a.location || a.eventLocation || '').split(',')[0].trim()
      const lr = resolveName(locStr)
      if (lr && lr.collection === 'locations' && lr.id !== a.id) {
        addBoth(col, a.id, { collection: 'locations', id: lr.id, title: lr.title }, 'Location', 'Event connected to this place', 7)
      }
    }
  }
}

// ── Same-realm reign adjacency for rulers: links a ruler to the chronologically
// nearest rulers of the SAME realm (approx predecessor/successor) — a documented
// dynastic/succession relationship, used to top up thin articles. ──
const realmGroups = new Map() // realmId -> [{id, year}]
for (const a of data.characters) {
  const realm = resolveName(a.quickFacts?.realm)
  if (!realm || realm.collection !== 'locations') continue
  const year = a.died ?? a.born ?? 0
  if (!realmGroups.has(realm.id)) realmGroups.set(realm.id, [])
  realmGroups.get(realm.id).push({ id: a.id, year, realmTitle: realm.title })
}
for (const [, members] of realmGroups) {
  members.sort((x, y) => x.year - y.year)
  members.forEach((m, i) => {
    const neighbours = [members[i - 1], members[i + 1]].filter(Boolean)
    for (const n of neighbours) {
      const art = byId.characters.get(n.id)
      addCand('characters', m.id, { collection: 'characters', id: n.id, title: art.name || art.title }, `Ruler of ${m.realmTitle}`, 4)
    }
  })
}

// ── Now assemble final per article. ──

function pickFor(col, a) {
  const existingValid = []
  for (const it of Object.values(a.relatedEntries || {}).flat()) {
    if (it && it.slug && resolve(it.type, it.slug)) existingValid.push(`${typeToCollection[it.type]}/${it.slug}`)
  }
  const m = candidates.get(keyOf(col, a.id)) || new Map()
  const ranked = [...m.values()].sort((x, y) => y.weight - x.weight)
  return { ranked, existingCount: new Set(existingValid).size }
}

let writeCount = 0
const stillUnder3 = []
const sample = []

for (const [col, arr] of Object.entries(data)) {
  if (!Array.isArray(arr)) continue
  for (const a of arr) {
    const { ranked } = pickFor(col, a)
    // Build grouped relatedEntries, cap 6, ensure unique
    const chosen = ranked.slice(0, 6)
    if (chosen.length < 3) stillUnder3.push(`${col}/${a.id} (${chosen.length})`)

    if (WRITE) {
      const grouped = {}
      for (const c of chosen) {
        const g = collectionToGroup[c.collection]
        if (!grouped[g]) grouped[g] = []
        const entry = { title: c.title, type: collectionToType[c.collection], slug: c.id }
        if (c.reason) entry.label = c.reason
        grouped[g].push(entry)
      }
      a.relatedEntries = grouped
      writeCount++
    }
    if (sample.length < 6 && chosen.length >= 4 && (a.id === 'harald-hardrada' || a.id === 'constantinople' || a.id === 'battle-of-stamford-bridge' || a.id === 'rogaland' || a.id === 'kingdom-of-norway' || a.id === 'saladin')) {
      sample.push({ id: `${col}/${a.id}`, entries: chosen.map(c => `${c.collection}/${c.id}${c.reason ? ' ["' + c.reason + '"]' : ''}`) })
    }
  }
}

console.log(WRITE ? '=== WROTE relatedEntries ===' : '=== DRY RUN ===')
console.log('Articles processed:', data.characters.length + data.events.length + data.locations.length + data.artifacts.length + data.weaponsArmor.length)
if (WRITE) console.log('Articles written:', writeCount)
console.log('Still under 3 after build:', stillUnder3.length)
stillUnder3.slice(0, 80).forEach(x => console.log('  ' + x))
console.log('\n--- SAMPLES ---')
for (const s of sample) { console.log(s.id + ':'); s.entries.forEach(e => console.log('    ' + e)) }
if (WRITE) fs.writeFileSync(dataPath, JSON.stringify(data, null, 2))
const out = 'C:/Users/ruipa/AppData/Local/Temp/claude/c--Users-ruipa-CodeWorkspace/1e4f3312-4a26-40ca-92c3-4c8a44c16584/scratchpad/still-under3.json'
fs.writeFileSync(out, JSON.stringify(stillUnder3, null, 1))
console.log('\nResidual list ->', out)
