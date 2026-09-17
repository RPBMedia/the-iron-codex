/**
 * Generates client/src/lib/entityLinks.js from server/data/archive so the
 * body/timeline auto-linker covers EVERY article. Merges in the hand-curated
 * aliases already present in the file (so entries like "Stupor Mundi" survive).
 * Only emits entries whose slug exists in the data — never a broken link.
 */
import fs from 'node:fs'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
import { loadArchive } from '../server/data/archive.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const data = loadArchive()
const outPath = path.join(__dirname, '../client/src/lib/entityLinks.js')
const existing = fs.readFileSync(outPath, 'utf8')

const collectionToType = { characters: 'person', events: 'event', locations: 'location', artifacts: 'artifact', weaponsArmor: 'weaponArmor', orders: 'order', civilizations: 'civilization' }

// Parse existing curated aliases: { slug -> [aliases] }
const curated = {}
const entryRe = /\{\s*label:\s*"((?:[^"\\]|\\.)*)"\s*(?:,\s*aliases:\s*\[([^\]]*)\])?\s*,\s*type:\s*"([^"]*)"\s*,\s*slug:\s*"([^"]*)"\s*\}/g
let m
while ((m = entryRe.exec(existing))) {
  // Parse the array as JSON (esc() below writes JSON-compatible strings). It was
  // split on commas, which tore "Ferdinand, Count of Flanders" into a bare
  // "Ferdinand" alias on every regeneration.
  const aliases = JSON.parse(`[${m[2] || ''}]`).filter(Boolean)
  curated[m[4]] = aliases
}

function esc(s) { return String(s).replace(/\\/g, '\\\\').replace(/"/g, '\\"') }

const personLabels = (data.characters || []).map(c => c.name).filter(Boolean)

// Aliases too short or generic to auto-link safely
function keepAlias(a, label) {
  if (!a || a.length < 4) return false
  if (a.toLowerCase() === label.toLowerCase()) return false
  // A bare regnal alias ("Henry I", "John I") is refused when another ruler of
  // that name has an article: "Henry I" belonged to Henry I of Castile and so
  // linked Henry I of England and of France to Castile.
  if (/^\p{Lu}\p{L}+ [IVX]+$/u.test(a) && personLabels.some(l => l !== label && (l === a || l.startsWith(`${a} `)))) return false
  return true
}

// A curated alias that is only a comma-split piece of another alias on the same
// entry ("Ferdinand" from "Ferdinand, Count of Flanders", "Holy Roman Emperor"
// from "Otto IV, Holy Roman Emperor") is a parser artifact, not a curated name.
function isCommaFragment(alias, allAliases, dataAliases) {
  if (dataAliases.includes(alias)) return false
  return allAliases.some(x => x !== alias && x.includes(',') && x.split(',').map(s => s.trim()).includes(alias))
}

// All article names/labels, lowercased, to detect suffix collisions (a battle
// suffix that is ALSO a location or person name must NOT become an auto-alias).
// Every name AND alias in the archive, mapped to the article ids that claim it.
//
// Names alone were not enough, and the comment below promised more than the code
// delivered (found 2026-09-17). The Crécy location is *named* "Crecy" and carries
// "Crécy" as an ALIAS, so a name-only check happily minted "Crécy" as a bare
// battle suffix — precisely the collision this guard exists to prevent, and one
// of the three cases the comment names.
//
// The map is keyed by claimant id because a battle must not block its own
// suffix: "Ain Jalut" is an alias of battle-of-ain-jalut itself, and a naive
// alias-aware check suppressed nine perfectly good links for that reason.
const claimantsByName = new Map()
for (const arr of Object.values(data)) {
  if (!Array.isArray(arr)) continue
  for (const a of arr) {
    if (!a.id) continue
    for (const raw of [a.name || a.title, ...(a.aliases || [])]) {
      const k = String(raw || '').toLowerCase().trim()
      if (!k) continue
      if (!claimantsByName.has(k)) claimantsByName.set(k, new Set())
      claimantsByName.get(k).add(a.id)
    }
  }
}
// A "Battle of X" suffix becomes a safe short-form alias only when no other
// article is named X (so "Arsuf", "Hattin", "Aljubarrota" link to the battle,
// while "Crécy", "Stiklestad", "Bannockburn" — which are also location articles —
// are left to their full "Battle of X" form to avoid wrong links).
// Sieges are excluded: the X in "Siege of X" is a city, and a city's bare name
// is not the siege. "Siege of Vladimir" made "Vladimir" link Vladimir the Great
// to 1238, and "Siege of Orléans" made "Louis of Orléans" link to 1429.
function safeBattleSuffix(name, id) {
  const m = (name || '').match(/^Battle of (.+)$/)
  if (!m) return null
  const s = m[1].trim()
  if (s.length < 5 || s.includes(',')) return null
  // Unsafe when SOME OTHER article claims the name, by title or alias. The
  // battle's own aliases must not count: most battles already carry their own
  // suffix, so a self-inclusive check would suppress nine good links.
  const claimants = claimantsByName.get(s.toLowerCase())
  if (claimants && [...claimants].some((claimant) => claimant !== id)) return null
  return s
}

const entries = []
for (const [col, arr] of Object.entries(data)) {
  if (!Array.isArray(arr)) continue
  const type = collectionToType[col]
  // Skip collections without a known auto-link type (e.g. houses, whose
  // bidirectional name-linking is handled in a later milestone).
  if (!type) continue
  for (const a of arr) {
    const label = a.name || a.title
    if (!label || !a.id) continue
    const fromData = (a.aliases || []).filter(x => keepAlias(x, label))
    const everyAlias = [...(curated[a.id] || []), ...(a.aliases || []), label]
    // Earlier runs wrote "Siege of X" suffixes into the file, where they read
    // back as curated aliases; drop them unless the data itself declares one.
    const siegeSuffix = (label.match(/^Siege of (.+)$/) || [])[1]?.trim()
    const isBakedSiegeSuffix = (x) => siegeSuffix && x === siegeSuffix && !(a.aliases || []).includes(x)
    // The same trap for BATTLE suffixes that are no longer safe. "Crécy" was
    // minted while the collision check read only names, so it missed the village
    // whose name is the unaccented "Crecy" and whose ALIAS is the accented form.
    // Fixing the check was not enough on its own: a value baked into the file by
    // an earlier run reads back as curated and survives regeneration. Drop it
    // unless the archive itself declares it (found 2026-09-17).
    const battleSuffix = (label.match(/^Battle of (.+)$/) || [])[1]?.trim()
    const isBakedUnsafeBattleSuffix = (x) =>
      battleSuffix && x === battleSuffix && !safeBattleSuffix(label, a.id) && !(a.aliases || []).includes(x)
    const fromCurated = (curated[a.id] || []).filter(x => keepAlias(x, label) && !isCommaFragment(x, everyAlias, a.aliases || []) && !isBakedSiegeSuffix(x) && !isBakedUnsafeBattleSuffix(x))
    const aliases = [...new Set([...fromCurated, ...fromData])]
    if (col === 'events') { const suf = safeBattleSuffix(label, a.id); if (suf && !aliases.includes(suf)) aliases.push(suf) }
    entries.push({ label, aliases, type, slug: a.id })
  }
}

// Stable order: by type, then label
const typeOrder = { person: 0, event: 1, location: 2, artifact: 3, weaponArmor: 4, order: 5 }
entries.sort((x, y) => (typeOrder[x.type] - typeOrder[y.type]) || x.label.localeCompare(y.label))

const lines = entries.map(e => {
  const aliasStr = e.aliases.length ? `, aliases: [${e.aliases.map(a => `"${esc(a)}"`).join(',')}]` : ''
  return `  { label: "${esc(e.label)}"${aliasStr}, type: "${e.type}", slug: "${e.slug}" },`
})

const header = `// entityLinks AUTO-GENERATED from server/data/archive by
// scripts/gen-entity-links.mjs. Do not edit the entityLinks array by hand: run
// \`node scripts/gen-entity-links.mjs\` after adding or renaming articles. Curated
// aliases from the previous file are preserved and merged. This drives the
// body/timeline auto-linker in DetailPage.jsx. The hand-maintained
// ambiguousEntityAliases export below is preserved across regenerations.
`

// Preserve the hand-maintained ambiguousEntityAliases export (disambiguation for
// same-name battles like Tours vs Poitiers). Extract it from the existing file;
// DetailPage.jsx imports it, so it must never be dropped.
const ambigMatch = existing.match(/export const ambiguousEntityAliases[\s\S]*$/)
const ambiguousBlock = ambigMatch
  ? ambigMatch[0].trimEnd() + '\n'
  : 'export const ambiguousEntityAliases = []\n'

fs.writeFileSync(outPath, `${header}export const entityLinks = [\n${lines.join('\n')}\n]\n\n${ambiguousBlock}`)
console.log(`Wrote ${entries.length} entityLinks (was ~${Object.keys(curated).length} curated).`)
const byType = {}
for (const e of entries) byType[e.type] = (byType[e.type] || 0) + 1
console.log('By type:', JSON.stringify(byType))
