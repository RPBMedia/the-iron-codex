/**
 * Generates client/src/lib/entityLinks.js from server/data/history.json so the
 * body/timeline auto-linker covers EVERY article. Merges in the hand-curated
 * aliases already present in the file (so entries like "Stupor Mundi" survive).
 * Only emits entries whose slug exists in the data — never a broken link.
 */
import fs from 'node:fs'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const data = JSON.parse(fs.readFileSync(path.join(__dirname, '../server/data/history.json'), 'utf8'))
const outPath = path.join(__dirname, '../client/src/lib/entityLinks.js')
const existing = fs.readFileSync(outPath, 'utf8')

const collectionToType = { characters: 'person', events: 'event', locations: 'location', artifacts: 'artifact', weaponsArmor: 'weaponArmor' }

// Parse existing curated aliases: { slug -> [aliases] }
const curated = {}
const entryRe = /\{\s*label:\s*"((?:[^"\\]|\\.)*)"\s*(?:,\s*aliases:\s*\[([^\]]*)\])?\s*,\s*type:\s*"([^"]*)"\s*,\s*slug:\s*"([^"]*)"\s*\}/g
let m
while ((m = entryRe.exec(existing))) {
  const aliasesRaw = m[2] || ''
  const aliases = aliasesRaw.split(',').map(s => s.trim().replace(/^"|"$/g, '').replace(/\\"/g, '"').replace(/\\'/g, "'")).filter(Boolean)
  curated[m[4]] = aliases
}

function esc(s) { return String(s).replace(/\\/g, '\\\\').replace(/"/g, '\\"') }

// Aliases too short or generic to auto-link safely
function keepAlias(a, label) {
  if (!a || a.length < 4) return false
  if (a.toLowerCase() === label.toLowerCase()) return false
  return true
}

// All article names/labels, lowercased, to detect suffix collisions (a battle
// suffix that is ALSO a location or person name must NOT become an auto-alias).
const allNamesLower = new Set()
for (const arr of Object.values(data)) {
  if (!Array.isArray(arr)) continue
  for (const a of arr) { const n = (a.name || a.title || '').toLowerCase().trim(); if (n) allNamesLower.add(n) }
}
// A "Battle of X" / "Siege of X" suffix becomes a safe short-form alias only when
// no other article is named X (so "Arsuf", "Hattin", "Aljubarrota" link to the
// battle, while "Crécy", "Stiklestad", "Bannockburn" — which are also location
// articles — are left to their full "Battle of X" form to avoid wrong links).
function safeBattleSuffix(name) {
  const m = (name || '').match(/^(?:Battle|Siege) of (.+)$/)
  if (!m) return null
  const s = m[1].trim()
  if (s.length < 5 || s.includes(',')) return null
  if (allNamesLower.has(s.toLowerCase())) return null // collides with a location/person
  return s
}

const entries = []
for (const [col, arr] of Object.entries(data)) {
  if (!Array.isArray(arr)) continue
  const type = collectionToType[col]
  for (const a of arr) {
    const label = a.name || a.title
    if (!label || !a.id) continue
    const fromData = (a.aliases || []).filter(x => keepAlias(x, label))
    const fromCurated = (curated[a.id] || []).filter(x => keepAlias(x, label))
    const aliases = [...new Set([...fromCurated, ...fromData])]
    if (col === 'events') { const suf = safeBattleSuffix(label); if (suf && !aliases.includes(suf)) aliases.push(suf) }
    entries.push({ label, aliases, type, slug: a.id })
  }
}

// Stable order: by type, then label
const typeOrder = { person: 0, event: 1, location: 2, artifact: 3, weaponArmor: 4 }
entries.sort((x, y) => (typeOrder[x.type] - typeOrder[y.type]) || x.label.localeCompare(y.label))

const lines = entries.map(e => {
  const aliasStr = e.aliases.length ? `, aliases: [${e.aliases.map(a => `"${esc(a)}"`).join(',')}]` : ''
  return `  { label: "${esc(e.label)}"${aliasStr}, type: "${e.type}", slug: "${e.slug}" },`
})

const header = `// AUTO-GENERATED from server/data/history.json by scripts/gen-entity-links.mjs.
// Do not edit by hand: run \`node scripts/gen-entity-links.mjs\` after adding or
// renaming articles. Curated aliases from the previous file are preserved and
// merged. This list drives the body/timeline auto-linker in DetailPage.jsx.
`

fs.writeFileSync(outPath, `${header}export const entityLinks = [\n${lines.join('\n')}\n]\n`)
console.log(`Wrote ${entries.length} entityLinks (was ~${Object.keys(curated).length} curated).`)
const byType = {}
for (const e of entries) byType[e.type] = (byType[e.type] || 0) + 1
console.log('By type:', JSON.stringify(byType))
