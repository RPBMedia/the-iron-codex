// Bidirectional links: add the Rus' sieges to the related entries of the Mongol
// commanders who led them (required by the content-quality gate). Idempotent.
import { readFileSync, writeFileSync } from 'node:fs'

const dataPath = new URL('../server/data/history.json', import.meta.url)
const data = JSON.parse(readFileSync(dataPath, 'utf8'))
const ev = (slug, title, label) => ({ title, type: 'event', slug, label })

const add = {
  'batu-khan': [
    ev('siege-of-ryazan', 'Siege of Ryazan', 'Opened the conquest of the Rus’, 1237'),
    ev('siege-of-vladimir', 'Siege of Vladimir', 'Took the northern capital, 1238'),
    ev('battle-of-the-sit-river', 'Battle of the Sit River', 'Destroyed the grand prince’s army, 1238'),
    ev('siege-of-kyiv', 'Siege of Kyiv', 'Stormed the mother of Rus’ cities, 1240')
  ],
  'subutai': [
    ev('siege-of-ryazan', 'Siege of Ryazan', 'Co-led the opening of the Rus’ campaign, 1237'),
    ev('siege-of-kyiv', 'Siege of Kyiv', 'Co-led the storm of Kyiv, 1240')
  ]
}

let n = 0
for (const [id, events] of Object.entries(add)) {
  const c = data.characters.find((x) => x.id === id)
  if (!c) { console.warn('MISSING', id); continue }
  c.relatedEntries = c.relatedEntries ?? {}
  c.relatedEntries.events = c.relatedEntries.events ?? []
  for (const e of events) {
    if (!c.relatedEntries.events.some((x) => x.slug === e.slug)) { c.relatedEntries.events.push(e); n++ }
  }
}
writeFileSync(dataPath, JSON.stringify(data, null, 2))
console.log(`added ${n} event link(s) to Mongol commanders`)
