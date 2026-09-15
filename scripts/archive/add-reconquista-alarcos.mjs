/**
 * Reconquista Batch 5 — the Alarcos cluster (Almohad wars, 1195).
 * Adds: Battle of Alarcos (1195), Yaqub al-Mansur (Almohad caliph), Alarcos (site).
 * Inserts Alarcos into the continuity chain (Sagrajas -> Alarcos -> Las Navas),
 * links the existing Alfonso VIII and Muhammad al-Nasir, and backlinks the
 * Almohad dynasty. Verified Wikimedia images, aliases, sources. Idempotent by id.
 */
import fs from 'node:fs'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dataPath = path.join(__dirname, '../server/data/history.json')
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'))

const loc = (slug, title, label) => ({ title, type: 'location', slug, label })
const per = (slug, title, label) => ({ title, type: 'person', slug, label })
const evt = (slug, title, label) => ({ title, type: 'event', slug, label })
const hse = (slug, title, label) => ({ title, type: 'house', slug, label })
const fp = (file) => `https://commons.wikimedia.org/wiki/Special:FilePath/${file}`
const upsert = (arr, e) => { const i = arr.findIndex((x) => x.id === e.id); if (i >= 0) { arr[i] = e; return 'updated' } arr.push(e); return 'added' }

// ---------------------------------------------------------------- EVENT
const alarcos = {
  id: 'battle-of-alarcos', type: 'event', name: 'Battle of Alarcos', year: 1195,
  aliases: ['al-Arak', 'Battle of al-Arak'],
  location: 'Alarcos, near Ciudad Real, Iberia', eventType: 'Battle',
  conflict: 'Reconquista — Almohad wars',
  image: fp('Battle%20of%20Alarcos%20(engraving).jpg'),
  summary: 'On 18 July 1195 the Almohad caliph Abu Yusuf Yaqub crushed Alfonso VIII of Castile at Alarcos, a defeat so complete that the caliph took the title al-Mansur, "the Victorious" — and Castile\'s advance was checked until Las Navas de Tolosa avenged it.',
  details: 'Alfonso VIII advanced too far and gave battle at Alarcos before his allies arrived. The Almohad army enveloped and destroyed the Castilian host; the king escaped to Toledo, and the Almohads overran the Tagus frontier.',
  factions: ['Kingdom of Castile', 'Almohad Caliphate'],
  leaders: [
    { name: 'Alfonso VIII of Castile', faction: 'Kingdom of Castile', personId: 'alfonso-viii-of-castile' },
    { name: 'Yaqub al-Mansur', faction: 'Almohad Caliphate', personId: 'yaqub-al-mansur' }
  ],
  eventLocation: { name: 'Alarcos' },
  outcome: 'Decisive Almohad victory; Alfonso VIII fled to Toledo and the Almohads recovered the Tagus frontier, halting Castile for a generation.',
  background: [
    'By the 1190s the Almohad caliphate, which had absorbed al-Andalus after the Almoravids, was the dominant power in the south. Alfonso VIII of Castile, ambitious and over-confident after years of raiding, pushed his frontier toward Córdoba and provoked a major Almohad response.',
    'The caliph Abu Yusuf Yaqub crossed from Africa with a large army. Alfonso VIII advanced to the half-built castle of Alarcos and, rather than wait for the forces of León and Navarre, chose to give battle at once.'
  ],
  battle: 'Alfonso opened with a heavy Castilian cavalry charge that broke the Almohad vanguard, but Yaqub held his main body and reserves in hand. The Almohads absorbed the charge, then enveloped the committed Castilian knights, cutting them off from the unfinished castle. The Christian army disintegrated; many were killed or captured, and Alfonso VIII cut his way out with a remnant and fled north to Toledo. As always the chronicle numbers — tens of thousands dead — are unreliable, but the completeness of the Castilian catastrophe is well attested.',
  aftermath: 'The caliph took the honorific al-Mansur, "the Victorious", in memory of the day, and the Almohads overran the Tagus frontier towns, though they could not take Toledo. The defeat set Castile\'s reconquest back a generation and left a burning desire for revenge. That revenge came in 1212 at Las Navas de Tolosa, where Alfonso VIII led a Christian coalition to break Almohad power for good.',
  imageInfo: {
    caption: 'The Battle of Alarcos (1195) in a later engraving; no contemporary depiction survives.',
    creator: 'Later engraving, Wikimedia Commons',
    date: 'Later depiction of the 1195 battle',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Battle_of_Alarcos_(engraving).jpg',
    license: 'Public domain',
    note: 'A later imagining of the battle, not a contemporary record.'
  },
  contentSections: [
    { title: 'Overview', paragraphs: [
      'The Battle of Alarcos, fought on 18 July 1195 near Ciudad Real, was a crushing Almohad victory over Alfonso VIII of Castile. It was the worst Christian defeat of the late-12th-century Reconquista and the high point of Almohad power in Iberia.',
      'The Almohad caliph Abu Yusuf Yaqub won so decisively that he adopted the title al-Mansur, "the Victorious". The defeat halted Castile\'s advance for a generation, until the same king led the coalition that avenged it at Las Navas de Tolosa in 1212.'
    ]},
    { title: 'Background', paragraphs: [
      'The Almohads had replaced the Almoravids as the great Berber power of the western Mediterranean and, by the late 12th century, ruled al-Andalus. Alfonso VIII of Castile had spent years raiding deep into Muslim territory and pressing his frontier southward.',
      'When the caliph Yaqub crossed from Morocco with a large army in 1195, Alfonso marched out to meet him at the half-finished castle of Alarcos, and — fatefully — decided to fight before the armies of his Leonese and Navarrese neighbours could join him.'
    ]},
    { title: 'Forces and commanders', paragraphs: [
      'Alfonso VIII led the field army of Castile, strong in heavy cavalry but without his potential allies. The caliph Yaqub commanded a large, disciplined Almohad army with a deep reserve, the instrument of a state at its height.',
      'The chronicle figures for both hosts are hugely inflated and cannot be used. What decided the day was not raw numbers but Yaqub\'s decision to let the Castilian charge spend itself before committing his reserves.'
    ]},
    { title: 'The battle', paragraphs: [
      'The Castilian knights charged and shattered the Almohad front line, and for a moment the day seemed theirs. But Yaqub had kept his main body and reserves back, and now threw them forward, closing around the committed Christian cavalry and severing them from the unfinished castle behind.',
      'Surrounded and broken, the Castilian army was destroyed. Alfonso VIII escaped with a small band and fled to Toledo, leaving thousands dead or captive and the frontier open behind him.'
    ]},
    { title: 'Aftermath', paragraphs: [
      'Yaqub took the title al-Mansur and the Almohads swept over the Tagus frontier, seizing Calatrava and other strongholds, though Toledo itself held. Castile\'s southward push was stopped in its tracks.',
      'The humiliation, however, hardened Christian resolve and pushed the fractious Iberian kingdoms toward cooperation. Seventeen years later, at Las Navas de Tolosa, Alfonso VIII led the combined armies of Castile, Aragon and Navarre to the victory that reversed Alarcos and broke Almohad power.'
    ]},
    { title: 'Historical significance', paragraphs: [
      'Alarcos shows how quickly the Reconquista could swing backward: a confident Christian king lost a whole army in an afternoon, and decades of gains evaporated. It punctures any picture of a steady one-way Christian advance.',
      'It also set up its own reversal. The defeat drove the normally rivalrous Iberian kingdoms to unite, so that Alarcos is remembered less as an end than as the disaster that made Las Navas de Tolosa possible.'
    ]}
  ],
  sources: [
    { title: 'Battle of Alarcos', author: 'Wikipedia', type: 'reference', url: 'https://en.wikipedia.org/wiki/Battle_of_Alarcos' }
  ],
  participants: [
    {
      side: 'Kingdom of Castile',
      factions: [ { name: 'Kingdom of Castile', title: 'Kingdom of Castile', type: 'location', slug: 'kingdom-of-castile' } ],
      leaders: [ { name: 'Alfonso VIII of Castile', title: 'Alfonso VIII of Castile', type: 'person', slug: 'alfonso-viii-of-castile' } ],
      strength: { display: 'The field army of Castile; no reliable figure', confidence: 'debated', note: 'Strong in cavalry but without the Leonese and Navarrese allies; chronicle totals are inflated.' }
    },
    {
      side: 'Almohad Caliphate',
      factions: [ { name: 'Almohad Caliphate', title: 'Almohad Caliphate', type: 'location', slug: 'almohad-caliphate' } ],
      leaders: [ { name: 'Yaqub al-Mansur', title: 'Yaqub al-Mansur', type: 'person', slug: 'yaqub-al-mansur' } ],
      strength: { display: 'A large Almohad army; chronicle numbers unreliable', confidence: 'chronicle-claim', note: 'Larger than the Castilian force, with a deep reserve; the vast figures given by the sources cannot be trusted.' }
    }
  ],
  battleContinuity: {
    label: 'The revenge that reversed it',
    battleSlug: 'battle-of-las-navas-de-tolosa',
    relationship: 'same-war',
    reason: 'Alarcos was the great Almohad victory that halted Castile; seventeen years later the same king, Alfonso VIII, led a Christian coalition to Las Navas de Tolosa (1212), the crushing revenge that broke Almohad power.'
  },
  relatedEntries: {
    people: [
      per('alfonso-viii-of-castile', 'Alfonso VIII of Castile', 'Defeated here, victor later at Las Navas'),
      per('yaqub-al-mansur', 'Yaqub al-Mansur', 'The victorious Almohad caliph')
    ],
    locations: [ loc('alarcos', 'Alarcos', 'The battle site'), loc('almohad-caliphate', 'Almohad Caliphate', 'The victorious power') ],
    houses: [ hse('almohad-dynasty', 'Almohad dynasty', 'The dynasty of the victor') ]
  }
}

// ---------------------------------------------------------------- PERSON
const yaqub = {
  id: 'yaqub-al-mansur', type: 'person', name: 'Yaqub al-Mansur',
  aliases: ['Abu Yusuf Yaqub al-Mansur', 'Ya\'qub al-Mansur', 'Almanzor (Almohad)', 'al-Mansur (Almohad)'],
  born: 'c. 1160', died: '1199', deathAge: 'about 39', restingPlace: 'Tinmel, Morocco',
  birth: { date: 'c. 1160', place: 'the Almohad realm (Morocco)' },
  death: { date: '1199', place: 'Marrakesh' },
  location: 'Marrakesh and al-Andalus',
  image: 'https://upload.wikimedia.org/wikipedia/commons/4/47/Sevilla_Cathedral_-_Giralda.jpg',
  title: 'Almohad caliph', isRuler: true,
  roles: ['Almohad caliph', 'Victor of Alarcos'],
  epithets: [ { name: 'al-Mansur', type: 'honorific', note: '"The Victorious", taken after his victory at Alarcos in 1195.' } ],
  summary: 'Yaqub al-Mansur was the third Almohad caliph, whose reign (1184–1199) marked the height of Almohad power: he crushed Castile at Alarcos in 1195 and adorned his empire with monuments such as the Giralda of Seville.',
  details: 'Ruling an empire that spanned the Maghreb and al-Andalus, Yaqub defeated Alfonso VIII at Alarcos, patronised (then exiled) the philosopher Averroes, and built great works before dying in 1199, leaving the throne to his son Muhammad al-Nasir.',
  overview: 'Yaqub al-Mansur brought the Almohad caliphate to its zenith, a peak of military power and monumental building that his successors could not sustain.',
  quickFacts: { realm: 'Almohad Caliphate', dynasty: 'Almohad dynasty', culture: 'Almohad (Berber)', knownFor: 'Victory at Alarcos (1195); the Giralda of Seville' },
  contentSections: [
    { title: 'Overview', paragraphs: [
      'Abu Yusuf Yaqub al-Mansur was the third caliph of the Almohad dynasty, ruling from 1184 to 1199 over an empire that reached from Morocco across al-Andalus. His reign is remembered as the summit of Almohad power.',
      'His defining moment was the crushing defeat of Alfonso VIII of Castile at Alarcos in 1195, after which he took the title al-Mansur, "the Victorious". He was also a great builder and a patron of learning, though the empire\'s strength did not long outlive him.'
    ]},
    { title: 'Caliph, victor and builder', paragraphs: [
      'Yaqub inherited a powerful state and defended it vigorously on both sides of the strait. His victory at Alarcos in 1195 halted the Castilian advance and briefly recovered the Tagus frontier, and it gave him his triumphal name.',
      'He was a notable patron of architecture and thought, raising the Giralda minaret of the great mosque of Seville and the Hassan Tower of Rabat, and for a time protecting the philosopher Averroes (Ibn Rushd) before bowing to religious hardliners and exiling him. He died in 1199 and was succeeded by his son Muhammad al-Nasir, whose defeat at Las Navas de Tolosa would undo much of what his father built.'
    ]},
    { title: 'Character and Personality', paragraphs: [
      'The sources present Yaqub as a capable, pious and forceful ruler — a caliph who took the field in person, governed a vast empire firmly, and cultivated an image of victorious majesty that his adopted title advertised. His great buildings were as much statements of Almohad authority as works of devotion.',
      'His treatment of Averroes captures a tension in him: drawn to philosophy and learning, he nonetheless sacrificed his famous protégé to placate conservative religious opinion when it suited his authority. He emerges as a pragmatic strong ruler rather than a zealot or a pure patron, judged by contemporaries above all through the great victory that named him.'
    ]}
  ],
  keyAchievements: [
    'Brought the Almohad caliphate to its height',
    'Won the Battle of Alarcos over Alfonso VIII (1195)',
    'Built the Giralda of Seville and the Hassan Tower of Rabat'
  ],
  timeline: [
    { date: 'c. 1160', title: 'Born', description: 'Born into the Almohad ruling house.' },
    { date: '1184', title: 'Became caliph', description: 'Succeeded his father Abu Yaqub Yusuf as Almohad caliph.' },
    { date: '1195', title: 'Battle of Alarcos', description: 'Crushed Alfonso VIII of Castile and took the title al-Mansur.' },
    { date: '1195–1198', title: 'Building and patronage', description: 'Raised the Giralda and the Hassan Tower; patronised then exiled Averroes.' },
    { date: '1199', title: 'Died', description: 'Died at Marrakesh; succeeded by his son Muhammad al-Nasir.' }
  ],
  succession: {
    office: 'Almohad caliph',
    predecessor: { displayName: 'Abu Yaqub Yusuf', note: 'His father, the second Almohad caliph.' },
    successor: { personSlug: 'muhammad-al-nasir', displayName: 'Muhammad al-Nasir', note: 'His son, defeated at Las Navas de Tolosa.' }
  },
  imageInfo: {
    caption: 'The Giralda, the minaret of the great mosque of Seville, built under the Almohad caliph Yaqub al-Mansur (no likeness of him survives).',
    creator: 'Photograph, Wikimedia Commons',
    date: 'Minaret built c. 1184–1198',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Sevilla_Cathedral_-_Giralda.jpg',
    license: 'Creative Commons',
    note: 'A monument of his reign, used because no portrait of the caliph exists; the upper Renaissance belfry is a later addition.'
  },
  sources: [
    { title: 'Yaqub al-Mansur', author: 'Wikipedia', type: 'reference', url: 'https://en.wikipedia.org/wiki/Yaqub_al-Mansur' }
  ],
  relatedEntries: {
    events: [ evt('battle-of-alarcos', 'Battle of Alarcos', 'His great victory') ],
    people: [ per('muhammad-al-nasir', 'Muhammad al-Nasir', 'His son and successor') ],
    houses: [ hse('almohad-dynasty', 'Almohad dynasty', 'The dynasty he led') ],
    locations: [ loc('almohad-caliphate', 'Almohad Caliphate', 'The caliphate he ruled') ]
  }
}

// ---------------------------------------------------------------- LOCATION
const alarcosLoc = {
  id: 'alarcos', type: 'location', locationType: 'fortress', name: 'Alarcos',
  aliases: ['al-Arak', 'Alarcos (Ciudad Real)'],
  year: '12th century', image: fp('Campo%20de%20Batalla%20de%20Alarcos%20-%20Battlefield%20of%20Alarcos%20001.jpg'),
  summary: 'A hilltop fortress on the Guadiana near Ciudad Real, still half-built when Alfonso VIII lost the great battle of 1195 beneath its walls.',
  overview: 'Alarcos guarded the Castilian frontier toward al-Andalus. Its name is bound to the catastrophic defeat fought there in 1195.',
  knownFor: 'The Battle of Alarcos (1195)',
  contentSections: [
    { title: 'Overview', paragraphs: [
      'Alarcos stands on a low hill above the river Guadiana near modern Ciudad Real, on what in the 12th century was the exposed southern frontier of Castile. Alfonso VIII was fortifying it as a frontier stronghold when the Almohads struck.',
      'The castle was still unfinished on the day of the battle in July 1195, and its incomplete walls could not shelter the broken Castilian army. After the defeat the Almohads took the site, and it never regained importance.'
    ]},
    { title: 'The site today', paragraphs: [
      'The hill of Alarcos is now an archaeological park, with the remains of the medieval castle and church and, beneath them, an older Iberian settlement. The open ground below the walls is the battlefield of 1195.',
      'Excavations have made Alarcos one of the better-studied frontier sites of central Iberia, preserving the memory of the day the Castilian frontier collapsed.'
    ]}
  ],
  timeline: [
    { date: '1195', title: 'Battle of Alarcos', description: 'Alfonso VIII is defeated by the Almohads beneath the unfinished castle.' }
  ],
  imageInfo: {
    caption: 'The battlefield and hill of Alarcos near Ciudad Real, site of the 1195 defeat and now an archaeological park.',
    creator: 'Photograph, Wikimedia Commons',
    date: 'Medieval frontier site; modern photograph',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Campo_de_Batalla_de_Alarcos_-_Battlefield_of_Alarcos_001.jpg',
    license: 'Creative Commons',
    note: 'The frontier hill and battlefield, not a modern townscape.'
  },
  sources: [
    { title: 'Alarcos', author: 'Wikipedia', type: 'reference', url: 'https://en.wikipedia.org/wiki/Alarcos' }
  ],
  relatedEntries: {
    events: [ evt('battle-of-alarcos', 'Battle of Alarcos', 'Fought beneath its walls') ],
    people: [ per('alfonso-viii-of-castile', 'Alfonso VIII of Castile', 'Defeated here in 1195'), per('yaqub-al-mansur', 'Yaqub al-Mansur', 'The victor of 1195') ],
    locations: [ loc('kingdom-of-castile', 'Kingdom of Castile', 'The frontier it guarded') ]
  }
}

const results = []
results.push(['event', alarcos.name, upsert(data.events, alarcos)])
results.push(['person', yaqub.name, upsert(data.characters, yaqub)])
results.push(['location', alarcosLoc.name, upsert(data.locations, alarcosLoc)])

// Rewire Sagrajas continuity forward to Alarcos (nearest later Reconquista battle now present).
const sag = data.events.find((e) => e.id === 'battle-of-sagrajas')
if (sag) {
  sag.battleContinuity = {
    label: 'The next great clash with the Berber empires',
    battleSlug: 'battle-of-alarcos',
    relationship: 'chronological-follow-up',
    reason: 'Sagrajas brought the Almoravids into Iberia in 1086; a century later their Almohad successors won an even greater victory at Alarcos in 1195 over Alfonso VIII of Castile.'
  }
  sag.relatedEntries = sag.relatedEntries || {}
  const evs = sag.relatedEntries.events = sag.relatedEntries.events || []
  if (!evs.some((e) => e.slug === 'battle-of-alarcos')) evs.push(evt('battle-of-alarcos', 'Battle of Alarcos', 'The later Almohad victory'))
  results.push(['rewire', 'Sagrajas → Alarcos', 'updated'])
}

// Alfonso VIII (existing): add Alarcos to his related events (he commanded there).
const a8 = data.characters.find((c) => c.id === 'alfonso-viii-of-castile')
if (a8) {
  a8.relatedEntries = a8.relatedEntries || {}
  const evs = a8.relatedEntries.events = a8.relatedEntries.events || []
  if (!evs.some((e) => e.slug === 'battle-of-alarcos')) { evs.push(evt('battle-of-alarcos', 'Battle of Alarcos', 'His great defeat, avenged at Las Navas')); results.push(['backlink', 'Alfonso VIII → Alarcos', 'added']) }
}

// Muhammad al-Nasir (existing): link his father Yaqub al-Mansur as predecessor + related.
const nasir = data.characters.find((c) => c.id === 'muhammad-al-nasir')
if (nasir) {
  if (nasir.succession?.predecessor && !nasir.succession.predecessor.personSlug) {
    nasir.succession.predecessor = { personSlug: 'yaqub-al-mansur', displayName: 'Yaqub al-Mansur', note: 'His father, the victor of Alarcos.' }
    results.push(['link', 'al-Nasir predecessor → Yaqub', 'updated'])
  }
  nasir.relatedEntries = nasir.relatedEntries || {}
  const ppl = nasir.relatedEntries.people = nasir.relatedEntries.people || []
  if (!ppl.some((p) => p.slug === 'yaqub-al-mansur')) { ppl.push(per('yaqub-al-mansur', 'Yaqub al-Mansur', 'His father and predecessor')); results.push(['backlink', 'al-Nasir → Yaqub', 'added']) }
}

// Almohad dynasty (existing house): add Yaqub as a notable member + related person.
const house = data.houses.find((h) => h.id === 'almohad-dynasty')
if (house) {
  house.notableMembers = house.notableMembers || []
  if (!house.notableMembers.some((m) => m.personSlug === 'yaqub-al-mansur')) house.notableMembers.push({ personSlug: 'yaqub-al-mansur', displayName: 'Yaqub al-Mansur', note: 'Third caliph; victor of Alarcos (r. 1184–1199).' })
  house.relatedEntries = house.relatedEntries || {}
  const ppl = house.relatedEntries.people = house.relatedEntries.people || []
  if (!ppl.some((p) => p.slug === 'yaqub-al-mansur')) { ppl.push(per('yaqub-al-mansur', 'Yaqub al-Mansur', 'Caliph at the dynasty\'s height')); results.push(['backlink', 'Almohad dynasty → Yaqub', 'added']) }
}

fs.writeFileSync(dataPath, JSON.stringify(data, null, 2))
for (const [t, n, a] of results) console.log(`${a.padEnd(8)} ${t.padEnd(9)} ${n}`)
console.log('\nDone. Run gen-entity-links + gates.')
