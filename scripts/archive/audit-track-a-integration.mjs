/**
 * M14 integration audit: is the Track A corpus actually wired into the archive,
 * or is it just present in the data file?
 *
 * ~100 articles were added across thirteen milestones. Each milestone validated
 * its own articles, and nothing has ever checked how they sit in the whole. This
 * looks for the four ways a correct article can still be badly integrated:
 *
 *   1. ORPHANS — nothing links to it, so a reader can only reach it by search.
 *   2. SORT DATES — the events index sorts chronologically using a hand-written
 *      day-precision map in server/index.js. An event missing from it sorts to
 *      1 January of its year, so it appears before everything that year that has
 *      a real date. This is invisible in the data and visible on the page.
 *   3. UNLINKED SUCCESSION ENDPOINTS — a predecessor or successor named as plain
 *      text. The validator already hard-fails when the named person HAS an
 *      article; this counts the rest, which are a real backlog.
 *   4. UNLINKED COMMANDERS — named in a battle's participants with no slug.
 *
 *   node scripts/audit-track-a-integration.mjs
 *   node scripts/audit-track-a-integration.mjs --all
 */
import { readFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const data = JSON.parse(readFileSync(path.join(__dirname, '../server/data/history.json'), 'utf8'))
const serverSrc = readFileSync(path.join(__dirname, '../server/index.js'), 'utf8')
const showAll = process.argv.includes('--all')

const collections = Object.entries(data).filter(([, v]) => Array.isArray(v))
const byId = new Map()
for (const [name, arr] of collections) for (const a of arr) byId.set(a.id, { ...a, _collection: name })

// --- 1. inbound link counts ------------------------------------------------
const inbound = new Map()
const bump = (slug) => { if (slug && byId.has(slug)) inbound.set(slug, (inbound.get(slug) ?? 0) + 1) }
const walk = (node, selfId) => {
  if (!node || typeof node !== 'object') return
  if (Array.isArray(node)) return node.forEach((n) => walk(n, selfId))
  for (const k of ['slug', 'personSlug', 'battleSlug', 'locationId']) {
    if (node[k] && node[k] !== selfId) bump(node[k])
  }
  for (const v of Object.values(node)) walk(v, selfId)
}
for (const [, arr] of collections) for (const a of arr) walk(a, a.id)

// Houses are reached a second way that no stored slug records: the server's
// `withDynastyHouse` resolves a person's `quickFacts.dynasty` string against
// house names and aliases at request time, and the client renders the Dynasty
// card as a link. A house with no inbound slug is therefore NOT an orphan if any
// character's dynasty string resolves to it.
//
// This cost a false alarm the first time this audit ran — it reported 33 orphaned
// houses, and every one of them was linked from every member's Dynasty card.
const AMBIGUOUS_DYNASTY_KEYS = new Set(['house of anjou', 'angevins', 'angevin dynasty', 'anjou'])
const normalizeDynastyKey = (v) => String(v ?? '').trim().toLowerCase().replace(/^the\s+/, '')
const houseByDynastyKey = new Map()
for (const house of data.houses ?? []) {
  for (const label of [house.name, ...(house.aliases ?? [])]) {
    const key = normalizeDynastyKey(label)
    if (!key || AMBIGUOUS_DYNASTY_KEYS.has(key)) continue
    if (!houseByDynastyKey.has(key)) houseByDynastyKey.set(key, house.id)
  }
}
const runtimeLinkedHouses = new Set()
for (const c of data.characters ?? []) {
  const id = houseByDynastyKey.get(normalizeDynastyKey(c.quickFacts?.dynasty))
  if (id) runtimeLinkedHouses.add(id)
}

const orphans = []
for (const [name, arr] of collections) {
  for (const a of arr) {
    if (inbound.get(a.id) > 0) continue
    if (runtimeLinkedHouses.has(a.id)) continue
    orphans.push({ ...a, _collection: name })
  }
}

// --- 2. events missing a day-precision sort date ---------------------------
const sortBlock = serverSrc.match(/const eventSortDates = \{([\s\S]*?)\n\}/)?.[1] ?? ''
const dated = new Set([...sortBlock.matchAll(/'([^']+)':/g)].map((m) => m[1]))
const undatedEvents = data.events
  .filter((e) => !dated.has(e.id))
  .sort((a, b) => (a.year ?? 0) - (b.year ?? 0))

// Which of those actually collide: another event the same year that IS dated,
// or another undated event the same year. Those are the ones a reader sees wrong.
const yearCounts = new Map()
for (const e of data.events) yearCounts.set(e.year, (yearCounts.get(e.year) ?? 0) + 1)
const colliding = undatedEvents.filter((e) => yearCounts.get(e.year) > 1)

// --- 3. unlinked succession endpoints --------------------------------------
const unlinkedSuccession = []
for (const c of data.characters) {
  for (const side of ['predecessor', 'successor']) {
    const s = c.succession?.[side]
    // The link field here is `personSlug`, NOT `slug` — checking the wrong one
    // made this audit report all 626 endpoints as unlinked on its first run.
    if (s && !s.personSlug && !s.status && s.displayName) {
      unlinkedSuccession.push({ id: c.id, side, name: s.displayName, staleNote: false })
    }
  }
}

// --- 3b. stale notes on endpoints that ARE now linked ----------------------
// A note written while the target had no article ("No article yet in this
// archive", "Article planned for Track A M7") is wrong the moment the article
// appears, and nothing rewrites it.
const STALE = /no article yet|article planned|no article in this archive/i
const staleNotes = []
for (const c of data.characters) {
  for (const side of ['predecessor', 'successor']) {
    const s = c.succession?.[side]
    if (s?.personSlug && s.note && STALE.test(s.note)) {
      staleNotes.push({ id: c.id, side, target: s.personSlug, note: s.note })
    }
  }
}

// --- 4. unlinked commanders -------------------------------------------------
const unlinkedCommanders = []
for (const e of data.events) {
  for (const p of e.participants ?? []) {
    for (const l of p.leaders ?? []) {
      if (!l.slug && l.name) unlinkedCommanders.push({ event: e.id, name: l.name, hasNote: Boolean(l.note) })
    }
  }
}

// --- report -----------------------------------------------------------------
const total = [...byId.keys()].length
console.log(`${total} articles across ${collections.length} collections.\n`)

console.log(`== 1. ORPHANS (no inbound links): ${orphans.length}`)
for (const a of showAll ? orphans : orphans.slice(0, 20)) {
  console.log(`   ${a._collection.padEnd(13)} ${a.id}`)
}
if (!showAll && orphans.length > 20) console.log(`   ... and ${orphans.length - 20} more`)

console.log(`\n== 2. EVENTS WITH NO DAY-PRECISION SORT DATE: ${undatedEvents.length} of ${data.events.length}`)
console.log(`   of which share a year with another event (visibly mis-sorted): ${colliding.length}`)
for (const e of showAll ? undatedEvents : colliding) {
  console.log(`   ${String(e.year).padStart(4)}  ${e.id}`)
}

console.log(`\n== 3. UNLINKED SUCCESSION ENDPOINTS: ${unlinkedSuccession.length}`)
if (showAll) for (const s of unlinkedSuccession) console.log(`   ${s.id} ${s.side}: ${s.name}`)

console.log(`\n== 3b. STALE NOTES on succession endpoints that ARE linked: ${staleNotes.length}`)
for (const s of showAll ? staleNotes : staleNotes.slice(0, 15)) {
  console.log(`   ${s.id} ${s.side} -> ${s.target}`)
}
if (!showAll && staleNotes.length > 15) console.log(`   ... and ${staleNotes.length - 15} more`)

console.log(`\n== 4. UNLINKED COMMANDERS: ${unlinkedCommanders.length}`)
const noNote = unlinkedCommanders.filter((c) => !c.hasNote)
console.log(`   without an explanatory note: ${noNote.length}`)
for (const c of showAll ? unlinkedCommanders : noNote) {
  console.log(`   ${c.event.padEnd(34)} ${c.name}${c.hasNote ? '' : '   <- no note'}`)
}
