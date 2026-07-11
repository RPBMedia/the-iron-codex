// Archive-wide battle-reference audit. Scans every string field of every
// article for battle-like phrases ("Battle of X", "Siege of X") and classifies:
//   RESOLVED   — an entityLinks term covers the phrase (auto-linker will link it)
//   NO-ARTICLE — the named battle has no article in the archive
// The RESOLVED check replicates DetailPage.jsx's findEntityMatches candidate
// logic exactly, so it reflects what the running client actually links.
import fs from 'node:fs'

const dataPath = new URL('../server/data/history.json', import.meta.url)
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'))
const linksSrc = fs.readFileSync(new URL('../client/src/lib/entityLinks.js', import.meta.url), 'utf8')

// Parse entityLinks label+aliases -> the set of linkable terms (lowercased).
const linkable = new Set()
const termToSlug = new Map()
const entryRe = /\{\s*label:\s*"((?:[^"\\]|\\.)*)"\s*(?:,\s*aliases:\s*\[([^\]]*)\])?\s*,\s*type:\s*"([^"]*)"\s*,\s*slug:\s*"([^"]*)"\s*\}/g
let m
while ((m = entryRe.exec(linksSrc))) {
  const label = m[1].replace(/\\"/g, '"')
  const aliases = (m[2] || '').split(',').map(s => s.trim().replace(/^"|"$/g, '').replace(/\\"/g, '"')).filter(Boolean)
  for (const t of [label, ...aliases]) { linkable.add(t.toLowerCase()); termToSlug.set(t.toLowerCase(), m[4]) }
}

const militaryIds = new Set(data.events.filter(e => ['Battle', 'Siege'].includes(e.eventType)).map(e => e.id))

// Battle-like phrase detector. Captures "Battle/Siege of <Name>" up to a natural
// stop (comma, semicolon, "in", "and", parenthesis, sentence end, etc.).
const phraseRe = /\b(Battle|Siege) of ([A-ZÀ-Þ][\wÀ-ÿ'’.-]*(?:[ -](?:of|de|del|la|le|the|aux|sur|[A-ZÀ-Þ][\wÀ-ÿ'’.-]*))*)/g

// Does an entityLinks term cover this phrase? True if the exact phrase is a
// linkable term, OR a linkable term is a leading substring that the auto-linker
// would match (word-boundary aware, longest-first — same as the client).
function resolves(phrase) {
  const p = phrase.toLowerCase()
  if (linkable.has(p)) return termToSlug.get(p)
  // client sorts candidates longest-first; any linkable term that is a
  // word-bounded substring of the phrase links part of it.
  for (const term of linkable) {
    if (term.length < 5) continue
    const re = new RegExp(`(^|[^a-z0-9])${term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}($|[^a-z0-9])`, 'i')
    if (re.test(phrase)) return termToSlug.get(term)
  }
  return null
}

const findings = { resolved: [], missing: new Map() }

function scan(text, where) {
  let mm
  phraseRe.lastIndex = 0
  while ((mm = phraseRe.exec(text))) {
    const phrase = mm[0].replace(/[.,;:]$/, '').trim()
    const slug = resolves(phrase)
    if (slug) findings.resolved.push({ phrase, where, slug })
    else {
      if (!findings.missing.has(phrase)) findings.missing.set(phrase, [])
      findings.missing.get(phrase).push(where)
    }
  }
}

function walk(o, path, articleId) {
  if (typeof o === 'string') scan(o, `${articleId} ${path}`)
  else if (Array.isArray(o)) o.forEach((v, i) => walk(v, `${path}[${i}]`, articleId))
  else if (o && typeof o === 'object') for (const [k, v] of Object.entries(o)) walk(v, `${path}.${k}`, articleId)
}

for (const [col, arr] of Object.entries(data)) {
  if (!Array.isArray(arr)) continue
  for (const a of arr) walk(a, col, a.id || a.name)
}

console.log(`RESOLVED battle phrases (auto-linked): ${findings.resolved.length}`)
console.log(`\nUNRESOLVED battle phrases (no matching article), ${findings.missing.size} distinct:\n`)
const sorted = [...findings.missing.entries()].sort((a, b) => b[1].length - a[1].length)
for (const [phrase, wheres] of sorted) {
  console.log(`  ✗ "${phrase}"  ×${wheres.length}`)
  console.log(`      e.g. ${wheres[0]}`)
}
