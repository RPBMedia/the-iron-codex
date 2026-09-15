// M5 link audit (batch 1): add short regnal-form aliases so figures that already
// have People pages auto-link where the order articles name them in prose
// ("King Philip IV", "Baldwin IV the leper king", "Louis IX’s crusade", etc.).
// Only unambiguous short forms (one such regnal number in the archive). Idempotent.
import { readFileSync, writeFileSync } from 'node:fs'

const dataPath = new URL('../server/data/history.json', import.meta.url)
const data = JSON.parse(readFileSync(dataPath, 'utf8'))

const add = {
  'philip-iv-of-france': ['Philip IV'],
  'baldwin-ii-of-jerusalem': ['Baldwin II'],
  'baldwin-iv-of-jerusalem': ['Baldwin IV'],
  'louis-ix-of-france': ['Louis IX'],
  'alfonso-viii-of-castile': ['Alfonso VIII'],
  'ferdinand-iii-of-castile': ['Ferdinand III']
}

const byId = Object.fromEntries(data.characters.map((c) => [c.id, c]))
let changed = 0
for (const [id, aliases] of Object.entries(add)) {
  const c = byId[id]
  if (!c) { console.warn('MISSING character:', id); continue }
  c.aliases = c.aliases ?? []
  for (const a of aliases) {
    if (!c.aliases.includes(a)) { c.aliases.push(a); changed++; console.log(`+ ${id}: "${a}"`) }
  }
}

writeFileSync(dataPath, JSON.stringify(data, null, 2))
console.log(`added ${changed} alias(es)`)
