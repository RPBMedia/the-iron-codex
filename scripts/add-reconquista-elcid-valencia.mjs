/**
 * Reconquista Batch 4 — El Cid & Valencia (late 11th century).
 * Adds: El Cid (Rodrigo Díaz de Vivar), Conquest of Valencia (1094), Valencia (city).
 * Bidirectional links, verified Wikimedia images, aliases, sources. Idempotent.
 * The historical Cid — who served Christian AND Muslim lords — is distinguished
 * from the later crusader-hero legend.
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
const upsert = (arr, entry) => {
  const i = arr.findIndex(e => e.id === entry.id)
  if (i >= 0) { arr[i] = entry; return 'updated' }
  arr.push(entry); return 'added'
}

// ---------------------------------------------------------------- PERSON: El Cid
const cid = {
  id: 'el-cid', type: 'person', name: 'El Cid',
  aliases: ['Rodrigo Díaz de Vivar', 'Rodrigo Diaz de Vivar', 'El Campeador', 'The Cid', 'Ruy Díaz', 'Rodrigo Díaz'],
  born: 'c. 1043', died: '1099', deathAge: 'about 56', restingPlace: 'Burgos Cathedral',
  birth: { date: 'c. 1043', place: 'Vivar, near Burgos' },
  death: { date: '10 July 1099', place: 'Valencia' },
  location: 'Castile and Valencia, Iberia',
  image: 'https://upload.wikimedia.org/wikipedia/commons/8/85/Estatua_del_Cid_%28Burgos%29.jpg',
  title: 'Castilian warlord; lord of Valencia', isRuler: false,
  roles: ['Castilian nobleman and military commander', 'Lord of Valencia (1094–1099)'],
  epithets: [
    { name: 'El Campeador', type: 'epithet', note: '"The Champion", master of the battlefield.' }
  ],
  summary: 'Rodrigo Díaz de Vivar, called El Cid, was the most celebrated warrior of eleventh-century Iberia, a Castilian commander who served both Christian and Muslim lords and carved out his own principality by conquering Valencia in 1094.',
  details: 'A minor Castilian noble who rose as a soldier under Sancho II and Alfonso VI, El Cid was twice exiled by Alfonso, served the Muslim taifa of Zaragoza, and finally took Valencia, ruling it as an independent lord until his death in 1099.',
  overview: 'El Cid became a national hero of Christian Spain, but the historical Rodrigo was a pragmatic warlord of the divided taifa world, fighting for pay and advantage on both sides of the religious frontier.',
  quickFacts: { realm: 'Lordship of Valencia', dynasty: 'Castilian nobility (house of Vivar)', culture: 'Castilian', knownFor: 'Conquering and ruling Valencia (1094–1099)' },
  contentSections: [
    { title: 'Overview', paragraphs: [
      'Rodrigo Díaz de Vivar, known as El Cid — from the Arabic al-sīd, "the lord" — and El Campeador, "the champion", was the outstanding soldier of eleventh-century Iberia. A Castilian noble of modest origins, he rose by pure military ability in the service of the kings of Castile and León.',
      'Exiled by Alfonso VI, he took service where he could, including with the Muslim taifa of Zaragoza, before conquering the great city of Valencia in 1094 and ruling it as his own until his death in 1099. In legend he became the ideal Christian knight; in history he was something more complicated.'
    ]},
    { title: 'Soldier of two faiths', paragraphs: [
      'Rodrigo won his reputation young, as armiger and commander under Sancho II of Castile, and continued to serve Sancho\'s brother and successor Alfonso VI. But relations soured, and around 1081 Alfonso exiled him. Cut loose, El Cid did what a landless warrior of the age did: he sold his sword, and for years he fought for the Muslim rulers of Zaragoza against their Christian and Muslim rivals alike.',
      'This is the point the later legend suppresses. The historical Cid was not a crusader but a professional man of war in a world where Christian and Muslim princes allied and fought across the religious line as interest dictated. His career only makes sense in that fragmented taifa world.'
    ]},
    { title: 'The conquest of Valencia', paragraphs: [
      'From the late 1080s El Cid operated increasingly on his own account in the east of the peninsula, and after a long blockade he took the rich city of Valencia in 1094. Later that year he beat off a large Almoravid army sent to retake it, one of the first serious checks to Almoravid arms in Iberia.',
      'He ruled Valencia as an independent lord until his death in 1099. His widow Jimena held the city for a further three years, but in 1102, unable to resist the Almoravids, the Christians withdrew and burned it. Valencia would not be permanently retaken until James I of Aragon in 1238.'
    ]},
    { title: 'Character and Personality', paragraphs: [
      'The Rodrigo of the sources is above all a supremely effective and self-reliant soldier, loyal to his men and his own advancement rather than to any single crown — a man who could be wronged by his king and simply take his talents elsewhere, even across the religious frontier. Both Arabic and Christian writers respected his skill in war.',
      'The Cantar de Mio Cid and later tradition reshaped him into a paragon of restraint, piety and vassal loyalty, the perfect Christian knight unjustly exiled. That literary Cid is a moral portrait; the historical one was a harder, more opportunistic figure whose greatness lay in war and in seizing his own chance at Valencia.'
    ]}
  ],
  keyAchievements: [
    'Rose to command the armies of Castile as a young man',
    'Served and won victories for the Muslim taifa of Zaragoza in exile',
    'Conquered Valencia in 1094 and ruled it until his death'
  ],
  timeline: [
    { date: 'c. 1043', title: 'Born', description: 'Born at Vivar, near Burgos, into the Castilian minor nobility.' },
    { date: 'c. 1065', title: 'Rises under Sancho II', description: 'Becomes a leading commander for Sancho II of Castile.' },
    { date: 'c. 1081', title: 'Exiled', description: 'Exiled by Alfonso VI; takes service with the taifa of Zaragoza.' },
    { date: '1094', title: 'Conquest of Valencia', description: 'Captures Valencia and defeats an Almoravid relief army.' },
    { date: '1099', title: 'Died', description: 'Dies at Valencia; his widow Jimena holds the city until 1102.' }
  ],
  imageInfo: {
    caption: 'The equestrian statue of El Cid in Burgos, near his birthplace; no contemporary likeness survives.',
    creator: 'Statue by Juan Cristóbal González Quesada; photograph, Wikimedia Commons',
    date: '20th-century monument',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Estatua_del_Cid_(Burgos).jpg',
    license: 'Creative Commons',
    note: 'A modern commemorative statue of the legendary Cid.'
  },
  sources: [
    { title: 'El Cid', author: 'Wikipedia', type: 'reference', url: 'https://en.wikipedia.org/wiki/El_Cid' },
    { title: 'Cantar de Mio Cid', author: 'Castilian epic (early 13th c.)', type: 'primary source', url: 'https://en.wikipedia.org/wiki/Cantar_de_mio_Cid' }
  ],
  relatedEntries: {
    events: [ evt('conquest-of-valencia', 'Conquest of Valencia', 'His greatest achievement') ],
    people: [ per('alfonso-vi-of-leon-and-castile', 'Alfonso VI of León and Castile', 'The king who exiled him') ],
    locations: [ loc('valencia', 'Valencia', 'The city he conquered and ruled'), loc('kingdom-of-castile', 'Kingdom of Castile', 'His homeland') ],
    houses: [ hse('almoravid-dynasty', 'Almoravid dynasty', 'The power he checked at Valencia') ]
  }
}

// ---------------------------------------------------------------- EVENT: Conquest of Valencia
const valenciaConquest = {
  id: 'conquest-of-valencia', type: 'event', name: 'Conquest of Valencia', year: 1094,
  aliases: ['Siege of Valencia', 'Fall of Valencia', 'El Cid\'s conquest of Valencia'],
  location: 'Valencia, Iberia', eventType: 'Fall of City', conflict: 'Reconquista',
  image: fp('Valencia_cathedral_2022_-_north_fa%C3%A7ade_dawn.jpg'),
  summary: 'In 1094, after a long blockade, El Cid captured the wealthy taifa city of Valencia and held it against the Almoravids, ruling it as an independent Christian lordship until his death.',
  details: 'Rodrigo Díaz took Valencia in June 1094 after a prolonged siege, then defeated a large Almoravid relief army nearby. He ruled the city until 1099; the Christians finally abandoned and burned it in 1102 as the Almoravids closed in.',
  factions: ['El Cid\'s forces', 'Taifa of Valencia', 'Almoravids'],
  outcome: 'El Cid took and held Valencia as an independent lordship (1094–1102) before it fell to the Almoravids; a rare early check to Almoravid power.',
  background: [
    'Valencia was a rich and populous taifa city on the eastern coast, long fought over by Christian and Muslim powers and racked by internal factions. El Cid, operating independently in the east after his exile from Castile, drew it steadily into his grip.',
    'When an Almoravid-backed faction seized the city, El Cid tightened a blockade until, starved and divided, Valencia surrendered to him in 1094.'
  ],
  aftermath: 'El Cid ruled Valencia as his own principality, converting its great mosque to a cathedral and defeating an Almoravid army sent to expel him at Cuarte later in 1094. After his death in 1099 his widow Jimena held the city until 1102, when, unable to withstand the Almoravids, the Christians withdrew and burned it. Valencia returned to Muslim rule until James I of Aragon conquered it in 1238.',
  imageInfo: {
    caption: 'Valencia Cathedral, built on the site of the city\'s main mosque, which El Cid consecrated as a church after taking Valencia in 1094.',
    creator: 'Photograph, Wikimedia Commons',
    date: 'Cathedral begun 13th century, on the former mosque',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Valencia_cathedral_2022_-_north_fa%C3%A7ade_dawn.jpg',
    license: 'Creative Commons',
    note: 'The later cathedral stands where El Cid turned the main mosque into a church.'
  },
  contentSections: [
    { title: 'Overview', paragraphs: [
      'The Conquest of Valencia was El Cid\'s capture of the great eastern taifa city in 1094, the crowning achievement of his career. After a long blockade the city surrendered, and Rodrigo Díaz ruled it as an independent Christian lordship.',
      'Holding Valencia meant facing the Almoravids, then the rising power of Muslim Iberia, and El Cid\'s defeat of an Almoravid relief army was one of the first serious checks to their advance. The city remained his until his death in 1099.'
    ]},
    { title: 'Siege and rule', paragraphs: [
      'Valencia was wealthy, divided and coveted. El Cid, campaigning on his own account in the east, brought it under pressure and, when an Almoravid-backed party took control, closed a starving blockade around it until it capitulated in June 1094.',
      'As lord of Valencia he consecrated the main mosque as a cathedral and organised the defence of his new realm, beating off the Almoravid army sent to retake the city at Cuarte. It was a personal principality, held by force of arms rather than by any crown\'s grant.'
    ]},
    { title: 'Loss and legacy', paragraphs: [
      'El Cid\'s death in 1099 left Valencia to his widow Jimena, who could not hold it indefinitely. In 1102, with the Almoravids advancing and no relief in sight, the Christians evacuated and burned the city, which returned to Muslim rule.',
      'Valencia would not be permanently reconquered until James I of Aragon took it in 1238. El Cid\'s brief lordship became one of the great stories of the Reconquista, magnified by legend far beyond its immediate strategic weight.'
    ]}
  ],
  sources: [
    { title: 'El Cid', author: 'Wikipedia', type: 'reference', url: 'https://en.wikipedia.org/wiki/El_Cid' },
    { title: 'Taifa of Valencia', author: 'Wikipedia', type: 'reference', url: 'https://en.wikipedia.org/wiki/Taifa_of_Valencia' }
  ],
  relatedEntries: {
    people: [ per('el-cid', 'El Cid', 'Conqueror and ruler of the city') ],
    locations: [ loc('valencia', 'Valencia', 'The city taken'), loc('al-andalus', 'al-Andalus', 'The Muslim Iberia it was taken from') ],
    houses: [ hse('almoravid-dynasty', 'Almoravid dynasty', 'The power El Cid held Valencia against') ]
  }
}

// ---------------------------------------------------------------- LOCATION: Valencia
const valencia = {
  id: 'valencia', type: 'location', locationType: 'city', name: 'Valencia',
  aliases: ['Valentia', 'Balansiya'],
  year: 'ancient–medieval', image: fp('Torres%20de%20Serranos%20in%20Ciutat%20Vella%2C%20Valencia%2C%20Spain.jpg'),
  summary: 'A rich coastal city of eastern Iberia, capital of a taifa kingdom, famously conquered by El Cid in 1094 and permanently reconquered by James I of Aragon in 1238.',
  overview: 'Valencia, on the Mediterranean coast, was a wealthy Muslim city and taifa capital whose possession was contested throughout the Reconquista.',
  knownFor: 'The taifa of Valencia, El Cid\'s conquest of 1094, and its final reconquest by James I in 1238',
  contentSections: [
    { title: 'Overview', paragraphs: [
      'Valencia, the Roman Valentia and the Arabic Balansiya, stood amid the fertile irrigated plain of the huerta on the eastern Mediterranean coast. Under Muslim rule it grew into a rich and populous city and the capital of one of the taifa kingdoms.',
      'Its wealth made it a prize fought over by Christian and Muslim powers alike. El Cid\'s conquest of the city in 1094 and its final reconquest by James I of Aragon in 1238 are among the landmark events of the eastern Reconquista.'
    ]},
    { title: 'A contested city', paragraphs: [
      'Valencia passed repeatedly between rulers: taifa kings, El Cid\'s brief Christian lordship of 1094–1102, the Almoravids and then the Almohads, before James I of Aragon took it for good in 1238 and made it the capital of a new Kingdom of Valencia within the Crown of Aragon.',
      'Its medieval fabric survives in monuments such as the Serranos towers — one of the great gates of the Christian-era walls — the cathedral raised on the site of the main mosque, and the later Gothic Silk Exchange, testifying to the city\'s enduring importance.'
    ]}
  ],
  timeline: [
    { date: '1094', title: 'Conquest of Valencia', description: 'El Cid takes the city and rules it as an independent lordship.' },
    { date: '1102', title: 'Lost to the Almoravids', description: 'The Christians abandon and burn the city; it returns to Muslim rule.' },
    { date: '1238', title: 'Reconquered by James I', description: 'James I of Aragon takes Valencia permanently for the Christians.' }
  ],
  imageInfo: {
    caption: 'The Serranos towers of Valencia, a monumental gate of the medieval Christian-era city walls.',
    creator: 'Photograph, Wikimedia Commons',
    date: 'Towers built 1392–1398 (medieval city gate)',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Torres_de_Serranos_in_Ciutat_Vella,_Valencia,_Spain.jpg',
    license: 'Creative Commons',
    note: 'A surviving medieval gate of Valencia, not a modern cityscape.'
  },
  sources: [
    { title: 'Valencia', author: 'Wikipedia', type: 'reference', url: 'https://en.wikipedia.org/wiki/Valencia' }
  ],
  relatedEntries: {
    events: [ evt('conquest-of-valencia', 'Conquest of Valencia', 'El Cid\'s capture of the city, 1094') ],
    people: [ per('el-cid', 'El Cid', 'Conquered and ruled the city') ],
    locations: [ loc('al-andalus', 'al-Andalus', 'The Muslim Iberia it belonged to') ]
  }
}

const results = []
results.push(['person', cid.name, upsert(data.characters, cid)])
results.push(['event', valenciaConquest.name, upsert(data.events, valenciaConquest)])
results.push(['location', valencia.name, upsert(data.locations, valencia)])

// Backlink: add El Cid to Alfonso VI's related people (bidirectional).
const a6 = data.characters.find(c => c.id === 'alfonso-vi-of-leon-and-castile')
if (a6) {
  a6.relatedEntries = a6.relatedEntries || {}
  const ppl = a6.relatedEntries.people = a6.relatedEntries.people || []
  if (!ppl.some(p => p.slug === 'el-cid')) {
    ppl.push(per('el-cid', 'El Cid', 'The warlord he exiled, who took Valencia'))
    results.push(['backlink', 'Alfonso VI → El Cid', 'added'])
  }
}

fs.writeFileSync(dataPath, JSON.stringify(data, null, 2))
for (const [type, name, action] of results) console.log(`${action.padEnd(8)} ${type.padEnd(9)} ${name}`)
console.log('\nDone. Run gen-entity-links + gates.')
