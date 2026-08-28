/**
 * Reconquista Batch 6 — Ferdinand III and the 13th-century Castilian reconquest.
 * Adds: Conquest of Córdoba (1236), Conquest of Seville (1248), Ferdinand III of
 * Castile (person), Seville (city). Bidirectional links, verified Wikimedia images,
 * aliases, sources. Idempotent by id.
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
const fp = (file) => `https://commons.wikimedia.org/wiki/Special:FilePath/${file}`
const upsert = (arr, e) => { const i = arr.findIndex((x) => x.id === e.id); if (i >= 0) { arr[i] = e; return 'updated' } arr.push(e); return 'added' }

// ---------------------------------------------------------------- EVENT: Córdoba
const cordoba = {
  id: 'conquest-of-cordoba', type: 'event', name: 'Conquest of Córdoba', year: 1236,
  aliases: ['Fall of Córdoba', 'Capture of Córdoba', 'Fall of Cordoba'],
  location: 'Córdoba, Iberia', eventType: 'Fall of City', conflict: 'Reconquista',
  image: fp('Coronica%20del%20sancto%20rey%20don%20Fernando%20III.jpg'),
  summary: 'In 1236 Ferdinand III of Castile took Córdoba, the former capital of the Umayyad caliphate — a conquest of huge symbolic weight that turned its Great Mosque into a cathedral.',
  details: 'After Castilian raiders seized a quarter of the city by surprise, Ferdinand III brought up his army and the divided, weakened Córdoba capitulated on 29 June 1236.',
  factions: ['Kingdom of Castile', 'Taifa of Córdoba'],
  outcome: 'Córdoba passed to Christian rule; its Great Mosque was consecrated as a cathedral and the bells looted by Almanzor centuries earlier were returned to Santiago.',
  background: [
    'Córdoba had been the seat of the Umayyad caliphate and the greatest city of al-Andalus, but by the 1230s it was the capital of a weak taifa, its power long broken and the Almohad order collapsing across the peninsula.',
    'The victory at Las Navas de Tolosa in 1212 had shattered Almohad strength and opened the Guadalquivir valley to Christian expansion. Ferdinand III, king of a reunited Castile and León, drove that expansion hard.'
  ],
  aftermath: 'The recovery of the old caliphal capital was celebrated across Christendom. The Great Mosque became the cathedral of Córdoba, and, in a gesture rich with memory, the bells that al-Mansur (Almanzor) had carried off from Santiago de Compostela around 997 were carried back. Córdoba became a base for the next stage of the conquest, which would reach Seville within twelve years.',
  imageInfo: {
    caption: 'The Corónica of the "holy king" Ferdinand III, the medieval chronicle of the conqueror of Córdoba and Seville.',
    creator: 'Chronicle of Ferdinand III, Wikimedia Commons',
    date: 'Later chronicle of the 1236 conquest',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Coronica_del_sancto_rey_don_Fernando_III.jpg',
    license: 'Public domain',
    note: 'A chronicle recording Ferdinand III\'s deeds, not a contemporary record of the day.'
  },
  contentSections: [
    { title: 'Overview', paragraphs: [
      'The Conquest of Córdoba in 1236 was the capture of the old Umayyad capital by Ferdinand III of Castile. For the Christian kingdoms it was a prize charged with symbolism: the city that had once ruled al-Andalus as a caliphate now fell to Castile.',
      'The conquest turned the Great Mosque of Córdoba into a Christian cathedral and opened the rich Guadalquivir valley to further advance. It was the first of Ferdinand III\'s great southern conquests, to be followed by Jaén and Seville.'
    ]},
    { title: 'Background', paragraphs: [
      'Córdoba in the 1230s was a shadow of the caliphal metropolis of three centuries earlier, reduced to a weak taifa amid the collapse of Almohad power after Las Navas de Tolosa. The Guadalquivir cities were divided and could not combine.',
      'Ferdinand III, ruling a Castile and León reunited under his crown from 1230, pressed south into this vacuum. When Castilian adventurers seized a suburb of Córdoba by night, the king marched to exploit the opening.'
    ]},
    { title: 'The fall and its meaning', paragraphs: [
      'With part of the city already in Christian hands and no relief in prospect, Córdoba surrendered on terms on 29 June 1236. Its Muslim population largely departed, and the Great Mosque — one of the wonders of the medieval world — was consecrated for Christian worship.',
      'Ferdinand had the bells of Santiago, which al-Mansur had famously carried off to Córdoba around 997 to hang as lamps in the mosque, returned to Compostela — closing a loop of memory that made the conquest resonate across Christian Iberia.'
    ]}
  ],
  sources: [
    { title: 'Ferdinand III of Castile', author: 'Wikipedia', type: 'reference', url: 'https://en.wikipedia.org/wiki/Ferdinand_III_of_Castile' }
  ],
  relatedEntries: {
    people: [ per('ferdinand-iii-of-castile', 'Ferdinand III of Castile', 'The conqueror of the city') ],
    locations: [ loc('caliphate-of-cordoba', 'Caliphate of Córdoba', 'The caliphate whose old capital this was'), loc('al-andalus', 'al-Andalus', 'The Muslim Iberia it was taken from') ],
    events: [ evt('conquest-of-seville', 'Conquest of Seville', 'The greater conquest that followed in 1248') ]
  }
}

// ---------------------------------------------------------------- EVENT: Seville
const seville = {
  id: 'conquest-of-seville', type: 'event', name: 'Conquest of Seville', year: 1248,
  aliases: ['Siege of Seville', 'Fall of Seville', 'Capture of Seville'],
  location: 'Seville, Iberia', eventType: 'Fall of City', conflict: 'Reconquista',
  image: 'https://upload.wikimedia.org/wikipedia/commons/c/c8/Capture_de_S%C3%A9ville_par_Ferdinand_III.jpg',
  summary: 'After a siege of over a year, Ferdinand III of Castile took Seville — the greatest city of al-Andalus — on 23 November 1248, all but completing the reconquest of the Guadalquivir.',
  details: 'Ferdinand III blockaded Seville by land and river, and when a Castilian fleet under Ramón Bonifaz broke the pontoon bridge linking the city to Triana, the starving city capitulated.',
  factions: ['Kingdom of Castile', 'Almohad-era Seville'],
  outcome: 'Seville surrendered; its Muslim population was expelled and the city became a Castilian capital, leaving only Granada as an independent Muslim state.',
  background: [
    'By the 1240s Ferdinand III had taken Córdoba (1236) and Jaén (1246) and reduced Murcia to vassalage. Seville, the largest and richest city of al-Andalus and a former Almohad capital, was the great remaining prize of the Guadalquivir.',
    'Ferdinand invested the city in 1247, ringing it with camps and cutting its supply lines. The key was the river Guadalquivir, which still linked Seville to the sea and to its suburb of Triana.'
  ],
  aftermath: 'The fall of Seville broke the last great concentration of Muslim power in western al-Andalus. Its Muslim inhabitants were expelled and the city resettled with Christians; Ferdinand III made it a royal capital and died there in 1252. After 1248 only the Nasrid Emirate of Granada survived as an independent Muslim state, and it would endure for another two and a half centuries.',
  imageInfo: {
    caption: 'The capture of Seville by Ferdinand III in 1248, in a later depiction.',
    creator: 'Later depiction, Wikimedia Commons',
    date: 'Later depiction of the 1248 conquest',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Capture_de_S%C3%A9ville_par_Ferdinand_III.jpg',
    license: 'Public domain',
    note: 'A later imagining of the conquest, not a contemporary record.'
  },
  contentSections: [
    { title: 'Overview', paragraphs: [
      'The Conquest of Seville was the capture of the greatest city of al-Andalus by Ferdinand III of Castile in 1248, after a siege lasting more than a year. It was the climax of Ferdinand\'s reconquest of the Guadalquivir valley.',
      'With Seville taken, Christian rule reached almost the whole of southern Iberia, and only the Nasrid emirate of Granada remained as an independent Muslim state. Ferdinand made Seville a capital and was buried in its cathedral.'
    ]},
    { title: 'The siege', paragraphs: [
      'Ferdinand III surrounded Seville in 1247 and settled in to starve it out, but the city could still be supplied along the Guadalquivir from its suburb of Triana across the river. The decisive stroke was naval: a Castilian fleet under the admiral Ramón Bonifaz sailed up the river and, in a celebrated action, broke the pontoon bridge of boats that joined Seville to Triana.',
      'Cut off from the river and from relief, and with famine setting in, Seville negotiated its surrender. On 23 November 1248 the city capitulated, and Ferdinand III made his formal entry.'
    ]},
    { title: 'Aftermath', paragraphs: [
      'The Muslim population of Seville was required to leave, and the city was repopulated with settlers from the north; the great Almohad mosque became its cathedral, its minaret the Giralda. Seville became one of the chief cities of the Crown of Castile.',
      'The conquest effectively completed the reconquest of western al-Andalus. What remained was the emirate of Granada, now a tributary of Castile, which would survive as the last Muslim state in Iberia until 1492.'
    ]}
  ],
  sources: [
    { title: 'Ferdinand III of Castile', author: 'Wikipedia', type: 'reference', url: 'https://en.wikipedia.org/wiki/Ferdinand_III_of_Castile' }
  ],
  relatedEntries: {
    people: [ per('ferdinand-iii-of-castile', 'Ferdinand III of Castile', 'The conqueror of the city') ],
    locations: [ loc('seville', 'Seville', 'The city taken in 1248'), loc('al-andalus', 'al-Andalus', 'The Muslim Iberia it was taken from') ],
    events: [ evt('conquest-of-cordoba', 'Conquest of Córdoba', 'His earlier conquest of 1236') ]
  }
}

// ---------------------------------------------------------------- PERSON: Ferdinand III
const ferdinand = {
  id: 'ferdinand-iii-of-castile', type: 'person', name: 'Ferdinand III of Castile',
  aliases: ['Fernando III', 'Saint Ferdinand', 'San Fernando', 'Ferdinand the Saint'],
  born: 'c. 1199', died: '1252', deathAge: 'about 53', restingPlace: 'Seville Cathedral',
  birth: { date: 'c. 1199', place: 'near Salamanca, Kingdom of León' },
  death: { date: '30 May 1252', place: 'Seville' },
  location: 'Castile, León and Andalusia',
  image: 'https://upload.wikimedia.org/wikipedia/commons/d/d7/Fernando_III_de_Castilla_02.jpg',
  title: 'king of Castile and León', isRuler: true,
  roles: ['King of Castile', 'King of León', 'Conqueror of Córdoba and Seville'],
  epithets: [ { name: 'the Saint', type: 'religious epithet', note: 'Canonised as San Fernando in 1671; venerated for his piety and his conquests.' } ],
  summary: 'Ferdinand III permanently united Castile and León and conquered most of al-Andalus — Córdoba, Jaén, and Seville — leaving only Granada as an independent Muslim state; he was later canonised as San Fernando.',
  details: 'King of Castile from 1217 and of León from 1230, Ferdinand III fused the two crowns for good and led the most sweeping advance of the Reconquista, taking the great cities of the Guadalquivir before his death at Seville in 1252.',
  overview: 'Ferdinand III is remembered as the king who all but finished the reconquest of southern Iberia and as a saint of the Castilian monarchy.',
  quickFacts: { realm: 'Kingdom of Castile and León', dynasty: 'Castilian royal house', culture: 'Castilian-Leonese', knownFor: 'Uniting Castile and León; conquering Córdoba and Seville' },
  contentSections: [
    { title: 'Overview', paragraphs: [
      'Ferdinand III ruled Castile from 1217 and León from 1230, and by joining the two crowns permanently he created the dominant Christian power of Iberia. He then led the greatest surge of the Reconquista, conquering the heartland of al-Andalus.',
      'In little more than a decade he took Córdoba (1236), Jaén (1246) and Seville (1248), and reduced Murcia and Granada to tributary status. By his death in 1252 only Granada survived as an independent Muslim state. He was canonised in 1671 as San Fernando.'
    ]},
    { title: 'Reign and conquests', paragraphs: [
      'Ferdinand came to the throne of Castile in 1217 when his mother Berengaria, who had inherited it, stepped aside in his favour. In 1230, on the death of his father Alfonso IX of León, he claimed and secured León as well, ending the recurring separation of the two kingdoms.',
      'With the Almohad order collapsing after Las Navas de Tolosa, he drove south down the Guadalquivir. Córdoba fell in 1236 and Seville, after a siege broken by a river fleet, in 1248. He organised the resettlement of the conquered cities and the great military orders that held the frontier, and he died at Seville, where he is buried in the cathedral.'
    ]},
    { title: 'Character and Personality', paragraphs: [
      'Ferdinand was remembered by his own court and by later tradition as the model of a Christian warrior-king: pious, just, and relentless in the holy war of reconquest, a reputation that carried him to sainthood four centuries after his death. The chronicles stress his devotion and his care to give his conquests a religious frame.',
      'Behind the saintly image was an effective and hard-headed ruler. He managed the difficult union of Castile and León, worked closely with the military orders and the Church, and organised the settlement of vast new territories — the administrative labour that made his conquests permanent rather than passing raids.'
    ]}
  ],
  keyAchievements: [
    'Permanently united the crowns of Castile and León (1230)',
    'Conquered Córdoba (1236), Jaén (1246) and Seville (1248)',
    'Reduced al-Andalus to the single emirate of Granada'
  ],
  timeline: [
    { date: 'c. 1199', title: 'Born', description: 'Son of Alfonso IX of León and Berengaria of Castile.' },
    { date: '1217', title: 'King of Castile', description: 'Becomes king of Castile when his mother Berengaria cedes the throne to him.' },
    { date: '1230', title: 'King of León', description: 'Inherits León on his father\'s death, uniting the two crowns for good.' },
    { date: '1236', title: 'Conquest of Córdoba', description: 'Takes the former Umayyad capital.' },
    { date: '1248', title: 'Conquest of Seville', description: 'Captures the greatest city of al-Andalus after a long siege.' },
    { date: '1252', title: 'Died', description: 'Dies at Seville; succeeded by his son Alfonso X.' }
  ],
  succession: {
    office: 'King of Castile and León',
    note: 'Ferdinand held Castile from 1217 and León from 1230, joining them permanently.',
    predecessor: { displayName: 'Henry I of Castile', note: 'His cousin, the boy-king of Castile whose death brought Ferdinand the throne (León came from his father Alfonso IX in 1230).' },
    successor: { displayName: 'Alfonso X of Castile', note: 'His son, "the Wise".' }
  },
  imageInfo: {
    caption: 'Ferdinand III of Castile, later canonised as San Fernando, conqueror of Córdoba and Seville.',
    creator: 'Later depiction, Wikimedia Commons',
    date: 'Later royal/devotional depiction',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Fernando_III_de_Castilla_02.jpg',
    license: 'Public domain',
    note: 'A later image of the sainted king; no contemporary portrait survives.'
  },
  sources: [
    { title: 'Ferdinand III of Castile', author: 'Wikipedia', type: 'reference', url: 'https://en.wikipedia.org/wiki/Ferdinand_III_of_Castile' }
  ],
  relatedEntries: {
    events: [
      evt('conquest-of-cordoba', 'Conquest of Córdoba', 'His conquest of 1236'),
      evt('conquest-of-seville', 'Conquest of Seville', 'His conquest of 1248')
    ],
    locations: [
      loc('seville', 'Seville', 'His conquest and burial place'),
      loc('kingdom-of-castile', 'Kingdom of Castile', 'His realm'),
      loc('kingdom-of-leon', 'Kingdom of León', 'His realm')
    ]
  }
}

// ---------------------------------------------------------------- LOCATION: Seville
const sevilleLoc = {
  id: 'seville', type: 'location', locationType: 'city', name: 'Seville',
  aliases: ['Hispalis', 'Ishbiliya', 'Sevilla'],
  year: 'ancient–medieval', image: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Torre_del_Oro_flag_Seville_Spain.jpg',
  summary: 'The great city of the lower Guadalquivir, capital of Almohad al-Andalus and, after its conquest by Ferdinand III in 1248, one of the chief cities of the Crown of Castile.',
  overview: 'Seville, on the navigable Guadalquivir, was the largest and richest city of Muslim Iberia and the western capital of the Almohads before it fell to Castile.',
  knownFor: 'Being the Almohad capital of al-Andalus and its conquest by Ferdinand III in 1248',
  contentSections: [
    { title: 'Overview', paragraphs: [
      'Seville lies on the river Guadalquivir in the south-west of Iberia, far enough inland to be safe yet linked by the navigable river to the Atlantic. That position made it a great port and the largest city of al-Andalus under Muslim rule.',
      'Under the Almohads in the 12th and 13th centuries it served as their capital in the peninsula, adorned with monuments such as the Giralda and the riverside Torre del Oro. Its conquest by Ferdinand III in 1248 was one of the decisive moments of the Reconquista.'
    ]},
    { title: 'Almohad and Castilian city', paragraphs: [
      'The Almohads made Seville a showcase of their power, building the great mosque whose minaret survives as the Giralda and the twelve-sided Torre del Oro to guard the river. The city was a centre of trade, learning and administration for Muslim Iberia.',
      'After 1248 Seville became a Castilian royal capital; its mosque became a cathedral, and Ferdinand III was buried there. In later centuries it grew again as the gateway to the Atlantic, but its medieval Almohad and Mudéjar fabric still shapes the old city.'
    ]}
  ],
  timeline: [
    { date: '1248', title: 'Conquest of Seville', description: 'Ferdinand III takes the city after a long siege.' },
    { date: '1252', title: 'Burial of Ferdinand III', description: 'The conqueror-king is buried in Seville.' }
  ],
  imageInfo: {
    caption: 'The Torre del Oro, an Almohad watchtower of the 1220s on the Guadalquivir at Seville, part of the medieval city\'s river defences.',
    creator: 'Photograph, Wikimedia Commons',
    date: 'Tower built c. 1220s (Almohad)',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Torre_del_Oro_flag_Seville_Spain.jpg',
    license: 'Creative Commons',
    note: 'A surviving Almohad monument of medieval Seville, not a modern cityscape.'
  },
  sources: [
    { title: 'Seville', author: 'Wikipedia', type: 'reference', url: 'https://en.wikipedia.org/wiki/Seville' }
  ],
  relatedEntries: {
    events: [ evt('conquest-of-seville', 'Conquest of Seville', 'Taken by Ferdinand III in 1248') ],
    people: [ per('ferdinand-iii-of-castile', 'Ferdinand III of Castile', 'Conquered and was buried here') ],
    locations: [ loc('al-andalus', 'al-Andalus', 'The Muslim Iberia it belonged to') ]
  }
}

const results = []
results.push(['event', cordoba.name, upsert(data.events, cordoba)])
results.push(['event', seville.name, upsert(data.events, seville)])
results.push(['person', ferdinand.name, upsert(data.characters, ferdinand)])
results.push(['location', sevilleLoc.name, upsert(data.locations, sevilleLoc)])

// Backlink: Las Navas de Tolosa (existing) points forward to these conquests it enabled.
const lasnavas = data.events.find((e) => e.id === 'battle-of-las-navas-de-tolosa')
if (lasnavas) {
  lasnavas.relatedEntries = lasnavas.relatedEntries || {}
  const evs = lasnavas.relatedEntries.events = lasnavas.relatedEntries.events || []
  for (const [slug, title, label] of [['conquest-of-cordoba', 'Conquest of Córdoba', 'The advance it opened (1236)'], ['conquest-of-seville', 'Conquest of Seville', 'The advance it opened (1248)']]) {
    if (!evs.some((e) => e.slug === slug)) evs.push(evt(slug, title, label))
  }
  results.push(['backlink', 'Las Navas → Córdoba/Seville', 'added'])
}

fs.writeFileSync(dataPath, JSON.stringify(data, null, 2))
for (const [t, n, a] of results) console.log(`${a.padEnd(8)} ${t.padEnd(9)} ${n}`)
console.log('\nDone. Run gen-entity-links + gates.')
