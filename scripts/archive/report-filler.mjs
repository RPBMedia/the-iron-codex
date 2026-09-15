/**
 * Read-only report: scans every article for the worst filler patterns and
 * reports which articles/sections still contain them. Does not modify anything.
 */
import fs from 'node:fs'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const data = JSON.parse(fs.readFileSync(path.join(__dirname, '../server/data/history.json'), 'utf8'))

const patterns = [
  /played an important role/i,
  /shaped politics and society/i,
  /varied by region and period/i,
  /interests did not always align/i,
  /developed in the context/i,
  /control of land and routes/i,
  /law, charters, seals/i,
  /cathedral cities/i,
  /knightly lordships/i,
  /weapon categories are modern conveniences/i,
  /the article keeps wording cautious/i,
  /historical reliability/i,
  /source traditions differ/i,
  /details are uncertain/i,
  /became significant/i,
  /was important in medieval Europe/i,
  /provided protection in battle/i,
  /effective in combat/i,
  /used by soldiers in medieval/i,
]

const hits = new Map() // pattern -> [{id, where, snippet}]
function record(pat, id, where, snippet) {
  const key = pat.source
  if (!hits.has(key)) hits.set(key, [])
  hits.get(key).push({ id, where, snippet: snippet.slice(0, 140) })
}

function scanString(str, id, where) {
  if (typeof str !== 'string') return
  for (const pat of patterns) if (pat.test(str)) record(pat, id, where, str)
}

for (const [collection, arr] of Object.entries(data)) {
  if (!Array.isArray(arr)) continue
  for (const a of arr) {
    const id = `${collection}/${a.id}`
    // section titles + paragraphs
    for (const s of a.contentSections || []) {
      scanString(s.title, id, `section-title`)
      for (const p of s.paragraphs || []) scanString(p, id, `section "${s.title}"`)
    }
    // timeline descriptions
    for (const t of a.timeline || []) scanString(t.description, id, 'timeline')
    // any historicalReliability field
    if ('historicalReliability' in a) record(/historical reliability/i, id, 'FIELD historicalReliability', String(a.historicalReliability))
    // overview / summary / details
    for (const f of ['summary', 'details', 'overview']) {
      const v = a[f]
      if (Array.isArray(v)) v.forEach(x => scanString(x, id, f)); else scanString(v, id, f)
    }
  }
}

let total = 0
console.log('=== FILLER PATTERN REPORT ===\n')
for (const pat of patterns) {
  const list = hits.get(pat.source) || []
  total += list.length
  console.log(`"${pat.source}" — ${list.length} hit(s)`)
  for (const h of list) console.log(`    ${h.id} [${h.where}] — ${h.snippet}`)
}
console.log(`\nTOTAL hits: ${total}`)
