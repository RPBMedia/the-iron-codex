/**
 * Mark succession endpoints that fall outside IronCodex's 476–1453 medieval
 * scope, and convert non-person "unknown/unrecorded" endpoints to a proper
 * status. Idempotent. Read the target, patch the entry in place.
 */
import fs from 'node:fs'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dataPath = path.join(__dirname, '../server/data/history.json')
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'))
const bySlug = new Map(data.characters.map(c => [c.id, c]))

// [slug, 'predecessor'|'successor', status, note]
const patches = [
  // Successors whose reign begins after the 1453 medieval cutoff -> outside-scope
  ['isabella-of-castile', 'predecessor', 'outside-scope',
    'Reigned 1454–1474, beginning after IronCodex\'s 1453 medieval cutoff; treated as an early-modern ruler rather than a covered medieval one.'],
  ['isabella-of-castile', 'successor', 'outside-scope',
    'Joanna and Philip I succeeded in 1504, well beyond IronCodex\'s 1453 medieval cutoff.'],
  ['christian-i-of-denmark', 'successor', 'outside-scope',
    'John (Hans) began ruling in 1481, after IronCodex\'s 1453 medieval cutoff.'],
  ['charles-viii-of-sweden', 'successor', 'outside-scope',
    'Sten Sture the Elder governed as regent from 1470, after IronCodex\'s 1453 medieval cutoff.'],
  ['bayezid-ii', 'successor', 'outside-scope',
    'Selim I reigned from 1512, well beyond IronCodex\'s 1453 medieval cutoff.'],
  ['john-ii-of-portugal', 'successor', 'outside-scope',
    'Manuel I reigned from 1495, beyond IronCodex\'s 1453 medieval cutoff.'],
  ['henry-vi-of-england', 'successor', 'outside-scope',
    'Edward IV took the throne in 1461, after IronCodex\'s 1453 medieval cutoff, opening the Yorkist monarchy.'],

  // Non-person endpoints -> unknown (no individual to link)
  ['horik-ii-of-denmark', 'successor', 'unknown',
    'No successor to the Danish kingship is securely recorded after Horik II; the line passes into obscurity in the surviving sources.'],
  ['eric-the-victorious', 'predecessor', 'unknown',
    'The kings of the Swedes before Eric the Victorious are known only from later, semi-legendary tradition and cannot be securely identified.'],
]

let changed = 0
for (const [slug, key, status, note] of patches) {
  const c = bySlug.get(slug)
  if (!c?.succession?.[key]) { console.warn(`SKIP: ${slug}.${key} not found`); continue }
  const prev = c.succession[key]
  c.succession[key] = { status, displayName: prev.displayName, note }
  changed++
  console.log(`${slug}.${key}: ${prev.displayName} -> status:${status}`)
}

fs.writeFileSync(dataPath, JSON.stringify(data, null, 2))
console.log(`\nPatched ${changed} succession endpoints.`)
