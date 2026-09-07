/**
 * Two corrections the M13 gates caught, both of them mine.
 *
 * 1. `birth` and `death` are OBJECTS in this schema — {date, place, circumstance}
 *    — not prose strings. I wrote them as prose on both new characters, which
 *    left `death.date` empty and tripped the deathAge validator ("numeric
 *    deathAge but death date is unknown"). The prose I wrote is kept, moved to
 *    `circumstance` where it belongs.
 *
 * 2. Four existing characters are named as commanders in the new battles and did
 *    not link back to them. The reciprocity rule is right to insist: a reader on
 *    Heraclius's page should be able to reach Yarmouk, which is the battle that
 *    undid his life's work.
 */
import { readFileSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dataPath = path.join(__dirname, '../server/data/history.json')
const data = JSON.parse(readFileSync(dataPath, 'utf8'))
const person = (id) => data.characters.find((c) => c.id === id)

// --- 1. birth/death as objects -------------------------------------------
const khalid = person('khalid-ibn-al-walid')
khalid.born = 'c. 585'
khalid.died = '642'
khalid.birth = {
  date: 'c. 585',
  place: { name: 'Mecca' },
  circumstance: 'Born into the Banu Makhzum, one of the leading clans of the Quraysh, and raised to the cavalry warfare his family was known for.'
}
khalid.death = {
  date: '642',
  place: { name: 'Homs' },
  circumstance: 'Died of illness, reportedly saying that he had fought in so many battles that there was no part of his body without a scar, and was dying in his bed like a camel. Medina is also claimed as the place of his death.'
}

const ka2 = person('kilij-arslan-ii')
ka2.born = 'Early twelfth century'
ka2.died = '1192'
ka2.birth = {
  date: 'Early twelfth century',
  place: { name: 'Sultanate of Rum' },
  circumstance: 'A son of Mas\'ud I, born into a sultanate that had spent two generations recovering from the First Crusade. The year is not recorded.'
}
ka2.death = {
  date: '1192',
  place: { name: 'Konya' },
  circumstance: 'Died having lived long enough to be effectively deposed by his own sons and to see the partition of the sultanate produce exactly the civil war it invited.'
}

// --- 2. reciprocal links from commanders to their battles ------------------
const BACKLINKS = [
  ['heraclius', 'events', { title: 'Battle of Yarmouk', type: 'event', slug: 'battle-of-yarmouk', label: 'The defeat that undid everything Nineveh won' }],
  ['manuel-i-komnenos', 'events', { title: 'Battle of Myriokephalon', type: 'event', slug: 'battle-of-myriokephalon', label: 'His defeat in the pass, which he compared to Manzikert' }],
  ['enrico-dandolo', 'events', { title: 'Siege and Sack of Constantinople (1204)', type: 'event', slug: 'siege-of-constantinople-1204', label: 'The city he took, and where he is buried' }],
  ['osman-i', 'events', { title: 'Battle of Bapheus', type: 'event', slug: 'battle-of-bapheus', label: 'His first victory over a Byzantine army' }]
]

for (const [id, bucket, item] of BACKLINKS) {
  const c = person(id)
  c.relatedEntries ??= {}
  c.relatedEntries[bucket] ??= []
  if (!c.relatedEntries[bucket].some((x) => x.slug === item.slug)) {
    c.relatedEntries[bucket].push(item)
    console.log(`${id} -> ${item.slug}`)
  }
}

console.log('birth/death objects fixed: khalid-ibn-al-walid, kilij-arslan-ii')

writeFileSync(dataPath, JSON.stringify(data, null, 2))
