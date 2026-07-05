/** Rank the in-scope named-unlinked backlog by reuse: how many endpoints one
 *  new article would close, and whether the name already matches an article. */
import fs from 'node:fs'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
const __dirname = path.dirname(fileURLToPath(import.meta.url))
const data = JSON.parse(fs.readFileSync(path.join(__dirname, '../server/data/history.json'), 'utf8'))
const ids = new Set(data.characters.map(c => c.id))

const counts = new Map() // displayName -> [{ruler, side}]
for (const r of data.characters.filter(c => c.isRuler && c.succession)) {
  for (const side of ['predecessor', 'successor']) {
    const e = r.succession[side]
    if (e && !e.personSlug && !e.status) {
      const key = e.displayName || '(none)'
      if (!counts.has(key)) counts.set(key, [])
      counts.get(key).push(`${r.name} (${side})`)
    }
  }
}

// Names that look like a single linkable person vs. plural/legendary/collective
const nonPerson = /\band\b| or |rival|warring|semi-legend|unrecorded|sons of|jarls/i

const rows = [...counts.entries()].map(([name, refs]) => ({
  name, n: refs.length, refs,
  collective: nonPerson.test(name),
  existsSlug: [...ids].find(id => id.replace(/-/g, ' ') === name.toLowerCase()) || null,
})).sort((a, b) => b.n - a.n || a.name.localeCompare(b.name))

console.log(`Distinct backlog names: ${rows.length} (covering ${[...counts.values()].reduce((s, v) => s + v.length, 0)} endpoints)\n`)
console.log('=== Highest reuse (one article closes many) ===')
for (const r of rows.filter(r => r.n > 1)) console.log(`  ${r.n}x  ${r.name}${r.collective ? '  [collective/legendary -> status, not an article]' : ''}`)
console.log('\n=== Collective / legendary / plural (better as status, not new articles) ===')
for (const r of rows.filter(r => r.collective && r.n === 1)) console.log(`  ${r.name}  <- ${r.refs[0]}`)
console.log(`\n=== Single-person, single-use (each needs its own article): ${rows.filter(r => !r.collective && r.n === 1).length} ===`)
for (const r of rows.filter(r => !r.collective && r.n === 1)) console.log(`  ${r.name}`)
