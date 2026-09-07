/**
 * Ranks the archive's thin articles by how much damage each one does.
 *
 * Written after the owner found the Constantinople article at 1,380 characters —
 * thinner than every siege article written about it. The archive has two
 * standards in it: the current one, and the older one most of the base was
 * written to. This finds the gap and sorts it by consequence.
 *
 * The ranking is inbound links first, length second, deliberately. A stub nobody
 * links to is a gap; a stub that forty articles send readers to is a broken
 * promise, and those are the ones to fix first.
 *
 *   node scripts/audit-stubs.mjs            # top 30 by inbound links
 *   node scripts/audit-stubs.mjs --all      # every article under the threshold
 *   node scripts/audit-stubs.mjs --chars=3000
 */
import { readFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const data = JSON.parse(readFileSync(path.join(__dirname, '../server/data/history.json'), 'utf8'))

const argv = process.argv.slice(2)
const showAll = argv.includes('--all')
const threshold = Number((argv.find((a) => a.startsWith('--chars=')) ?? '--chars=2000').split('=')[1])

// Count inbound references: related entries, succession links, battle continuity,
// family trees, leaders, factions — anything carrying a slug.
const inbound = new Map()
const bump = (slug) => { if (slug) inbound.set(slug, (inbound.get(slug) ?? 0) + 1) }
const walk = (node) => {
  if (!node || typeof node !== 'object') return
  if (Array.isArray(node)) return node.forEach(walk)
  bump(node.slug); bump(node.personSlug); bump(node.battleSlug); bump(node.locationId)
  for (const value of Object.values(node)) walk(value)
}
for (const arr of Object.values(data)) if (Array.isArray(arr)) arr.forEach(walk)

const rows = []
for (const [collection, arr] of Object.entries(data)) {
  if (!Array.isArray(arr)) continue
  for (const a of arr) {
    const sections = a.contentSections ?? []
    rows.push({
      collection,
      id: a.id,
      chars: sections.reduce((n, s) => n + (s.paragraphs ?? []).join(' ').length, 0),
      sections: sections.length,
      timeline: (a.timeline ?? []).length,
      links: inbound.get(a.id) ?? 0
    })
  }
}

const stubs = rows
  .filter((r) => r.chars < threshold)
  .sort((a, b) => b.links - a.links || a.chars - b.chars)

const total = rows.length
const median = [...rows].sort((a, b) => a.chars - b.chars)[Math.floor(total / 2)].chars

console.log(`${total} articles; median prose ${median} chars.`)
console.log(`${stubs.length} under ${threshold} chars (${Math.round((stubs.length / total) * 100)}%).`)
console.log(`${stubs.filter((s) => s.timeline === 0).length} of those have no timeline.\n`)
console.log('links  chars  secs  tl  collection      id')
for (const r of showAll ? stubs : stubs.slice(0, 30)) {
  console.log(
    String(r.links).padStart(5),
    String(r.chars).padStart(6),
    String(r.sections).padStart(5),
    String(r.timeline).padStart(3),
    ' ' + r.collection.padEnd(14),
    r.id
  )
}
if (!showAll && stubs.length > 30) console.log(`\n... and ${stubs.length - 30} more (--all to list).`)
