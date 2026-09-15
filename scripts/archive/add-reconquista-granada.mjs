/**
 * Reconquista Batch 7 — the fall of Granada (1492), the close of the Reconquista.
 * Adds: Fall of Granada (1492), Ferdinand II of Aragon, Boabdil (Muhammad XII),
 * Nasrid dynasty (house), Granada (city). Links the existing Isabella I. These
 * figures reign after the Codex's 1453 cutoff, but the task mandates the
 * conclusion and Isabella I already exists; succession endpoints are marked
 * outside-scope / office-ended. Verified images, aliases, sources. Idempotent.
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

const isabellaSlug = data.characters.find((c) => c.id === 'isabella-of-castile') ? 'isabella-of-castile'
  : (data.characters.find((c) => c.id === 'isabella-i-of-castile') ? 'isabella-i-of-castile' : null)

// ---------------------------------------------------------------- EVENT: Fall of Granada
const granadaFall = {
  id: 'fall-of-granada', type: 'event', name: 'Fall of Granada', year: 1492,
  aliases: ['Conquest of Granada', 'Surrender of Granada', 'Capitulation of Granada'],
  location: 'Granada, Iberia', eventType: 'Fall of City', conflict: 'Reconquista — the Granada War',
  image: fp('La%20Rendici%C3%B3n%20de%20Granada%20(Francisco%20Pradilla).jpg'),
  summary: 'On 2 January 1492 Boabdil, the last Nasrid emir, surrendered Granada to Ferdinand II of Aragon and Isabella I of Castile — ending the last Muslim state in Iberia and, with it, the Reconquista.',
  details: 'The handover of the Alhambra closed a ten-year war of attrition (1482–1492) that had ground down the emirate town by town, and ended nearly eight centuries of Muslim rule in the peninsula.',
  factions: ['Crown of Castile and Aragon', 'Emirate of Granada'],
  leaders: [
    { name: 'Ferdinand II of Aragon', faction: 'Crown of Castile and Aragon', personId: 'ferdinand-ii-of-aragon' },
    { name: 'Boabdil', faction: 'Emirate of Granada', personId: 'muhammad-xii-of-granada' }
  ],
  outcome: 'Granada capitulated; the Nasrid emirate ended and Muslim political rule in Iberia was extinguished after nearly 800 years.',
  background: [
    'By the later 15th century the Emirate of Granada was the last Muslim state in Iberia, a tributary of Castile weakened by its own dynastic feuds. When the marriage of Ferdinand II of Aragon and Isabella I of Castile united the two great Christian crowns, they turned their combined strength on it.',
    'The Granada War opened in 1482 with the Christian seizure of Alhama and dragged on for a decade of sieges — the fall of Loja, the siege of Málaga in 1487, the surrender of Baza in 1489 — as the Christians took the emirate\'s towns one by one and civil strife split the Nasrid ruling house.'
  ],
  aftermath: 'Under the terms of surrender the people of Granada were promised their property, laws and religion, promises soon eroded; the mass expulsions and forced conversions came in the following years. Boabdil went into exile, and tradition remembers his backward glance at the city as "the last sigh of the Moor". The year 1492 also saw the expulsion of the Jews from Spain and Columbus\'s first voyage, financed by the victorious monarchs. The Reconquista, the long and fragmented struggle conventionally dated from Covadonga, was over.',
  imageInfo: {
    caption: '"The Surrender of Granada" by Francisco Pradilla (1882): Boabdil hands the keys of the city to Ferdinand and Isabella.',
    creator: 'Francisco Pradilla Ortiz',
    date: '1882 (19th-century history painting)',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:La_Rendici%C3%B3n_de_Granada_(Francisco_Pradilla).jpg',
    license: 'Public domain',
    note: 'A 19th-century national history painting, not a contemporary record.'
  },
  contentSections: [
    { title: 'Overview', paragraphs: [
      'The Fall of Granada on 2 January 1492 was the surrender of the last Muslim state in Iberia, the Nasrid Emirate of Granada, to Ferdinand II of Aragon and Isabella I of Castile. Its emir, Boabdil, handed over the Alhambra and went into exile.',
      'The event is the conventional end of the Reconquista, the centuries-long and often-interrupted struggle for the peninsula. It came at the close of a ten-year war and in a year — 1492 — that also brought the expulsion of the Jews and Columbus\'s voyage across the Atlantic.'
    ]},
    { title: 'The Granada War', paragraphs: [
      'The united crowns of Castile and Aragon brought overwhelming resources — money, artillery, and a war of methodical sieges — against an emirate torn by civil war between rival Nasrid claimants. The struggle was not a single campaign but a decade of attrition, 1482 to 1492.',
      'Alhama fell in 1482, then a string of strongholds: Loja, the great port of Málaga in 1487 after a bitter siege, Baza in 1489. As the towns fell, Granada itself was isolated. The captured Boabdil was played off against his relatives, deepening the Nasrid collapse.'
    ]},
    { title: 'Surrender and aftermath', paragraphs: [
      'With his capital blockaded and no relief possible, Boabdil negotiated a surrender on generous paper terms — the Capitulations of Granada guaranteed the Muslims their property, laws and faith. On 2 January 1492 the Christian monarchs took possession of the Alhambra.',
      'Those guarantees were soon broken: within a decade came forced conversions and, in time, expulsions. Boabdil left for exile in North Africa, and later tradition gave him the sorrowful backward look known as "the last sigh of the Moor". Muslim political rule in Iberia, begun in 711, was ended.'
    ]}
  ],
  sources: [
    { title: 'Granada War', author: 'Wikipedia', type: 'reference', url: 'https://en.wikipedia.org/wiki/Granada_War' },
    { title: 'Muhammad XII of Granada', author: 'Wikipedia', type: 'reference', url: 'https://en.wikipedia.org/wiki/Muhammad_XII_of_Granada' }
  ],
  relatedEntries: {
    people: [
      per('ferdinand-ii-of-aragon', 'Ferdinand II of Aragon', 'Co-conqueror of Granada'),
      per('muhammad-xii-of-granada', 'Boabdil', 'The last emir, who surrendered the city'),
      ...(isabellaSlug ? [per(isabellaSlug, 'Isabella I of Castile', 'Co-conqueror of Granada')] : [])
    ],
    locations: [ loc('granada', 'Granada', 'The city that fell'), loc('al-andalus', 'al-Andalus', 'The Muslim Iberia it ended') ],
    houses: [ hse('nasrid-dynasty', 'Nasrid dynasty', 'The dynasty extinguished as a ruling house') ]
  }
}

// ---------------------------------------------------------------- PERSON: Ferdinand II
const ferdinand2 = {
  id: 'ferdinand-ii-of-aragon', type: 'person', name: 'Ferdinand II of Aragon',
  aliases: ['Fernando II de Aragón', 'Ferdinand the Catholic', 'Ferdinand V of Castile'],
  born: '1452', died: '1516', deathAge: '63', restingPlace: 'Royal Chapel of Granada',
  birth: { date: '10 March 1452', place: 'Sos, Kingdom of Aragon' },
  death: { date: '23 January 1516', place: 'Madrigalejo, Extremadura' },
  location: 'Aragon and Castile',
  image: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Michel_Sittow_004.jpg',
  title: 'king of Aragon; king consort/co-ruler of Castile', isRuler: true,
  roles: ['King of Aragon', 'Co-ruler of Castile with Isabella I', 'Co-conqueror of Granada'],
  epithets: [ { name: 'the Catholic', type: 'religious epithet', note: 'The papal title "los Reyes Católicos" (the Catholic Monarchs), granted to Ferdinand and Isabella in 1496.' } ],
  summary: 'Ferdinand II of Aragon, husband of Isabella I of Castile, joined the two great Christian crowns of Iberia; together the "Catholic Monarchs" conquered Granada in 1492, ending the Reconquista.',
  details: 'King of Aragon from 1479 and co-ruler of Castile through his marriage to Isabella, Ferdinand completed the reconquest of Iberia, backed Columbus\'s voyage, and laid the foundations of a united Spain.',
  overview: 'Ferdinand the Catholic is remembered as one of the architects of Spain, a shrewd and formidable ruler whose partnership with Isabella reshaped the peninsula.',
  quickFacts: { realm: 'Crown of Aragon (and Castile with Isabella)', dynasty: 'House of Trastámara', culture: 'Aragonese-Castilian', knownFor: 'The conquest of Granada (1492) and the union of the Spanish crowns' },
  contentSections: [
    { title: 'Overview', paragraphs: [
      'Ferdinand II of Aragon ruled his own kingdom from 1479 and, through his marriage in 1469 to Isabella I of Castile, shared in the government of Castile as well. Between them the two monarchs united the strength of Christian Iberia.',
      'As the "Catholic Monarchs" they completed the Reconquista with the conquest of Granada in 1492, and in the same year backed Christopher Columbus\'s first Atlantic voyage. Ferdinand was long remembered as a model of cunning statecraft.'
    ]},
    { title: 'Reign and the fall of Granada', paragraphs: [
      'Ferdinand and Isabella pooled the resources of Aragon and Castile against the last Muslim state in Iberia, the Emirate of Granada, weakened by its own civil wars. Their decade-long war of sieges, 1482 to 1492, ground the emirate down town by town.',
      'On 2 January 1492 Granada surrendered, ending nearly eight centuries of Muslim rule in the peninsula. The same year saw the expulsion of the Jews and the voyage of Columbus, financed by the monarchs. Ferdinand ruled on until 1516; he is buried beside Isabella in the Royal Chapel of Granada, the city that crowned their reign.'
    ]},
    { title: 'Character and Personality', paragraphs: [
      'Ferdinand became a byword for calculating statecraft — Machiavelli, a near contemporary, held him up as the model of a successful prince. Contemporaries admired and feared his patience, his readiness to use marriage, diplomacy and force by turns, and his grip on power.',
      'The partnership with Isabella was central to how he was seen: the two were presented as a single royal will, though their kingdoms kept their own laws and institutions. Judged by results — a united crown, a completed reconquest, an empire begun — he ranks among the most effective rulers of his age, admired for competence more than warmth.'
    ]}
  ],
  keyAchievements: [
    'United the crowns of Aragon and Castile with Isabella I',
    'Completed the Reconquista with the conquest of Granada (1492)',
    'Financed Columbus\'s first Atlantic voyage (1492)'
  ],
  timeline: [
    { date: '1452', title: 'Born', description: 'Born at Sos in the Kingdom of Aragon.' },
    { date: '1469', title: 'Married Isabella', description: 'Marries Isabella of Castile, joining the two crowns\' futures.' },
    { date: '1479', title: 'King of Aragon', description: 'Succeeds his father as king of Aragon.' },
    { date: '1482–1492', title: 'The Granada War', description: 'Leads, with Isabella, the ten-year conquest of the Emirate of Granada.' },
    { date: '1492', title: 'Fall of Granada', description: 'Takes Granada, ending the Reconquista; backs Columbus\'s voyage.' },
    { date: '1516', title: 'Died', description: 'Dies in Extremadura; his lands pass toward his grandson Charles.' }
  ],
  succession: {
    office: 'King of Aragon',
    predecessor: { status: 'outside-scope', displayName: 'John II of Aragon', note: 'His father, who reigned from 1458 — after the Codex\'s 1453 medieval cutoff.' },
    successor: { status: 'outside-scope', displayName: 'Charles I (Emperor Charles V)', note: 'His grandson, who inherited from 1516, well beyond the medieval window.' }
  },
  imageInfo: {
    caption: 'Ferdinand II of Aragon, "the Catholic", in a portrait attributed to Michel Sittow.',
    creator: 'Attributed to Michel Sittow',
    date: 'c. 1500–1516',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Michel_Sittow_004.jpg',
    license: 'Public domain',
    note: 'A near-contemporary portrait of the king.'
  },
  sources: [
    { title: 'Ferdinand II of Aragon', author: 'Wikipedia', type: 'reference', url: 'https://en.wikipedia.org/wiki/Ferdinand_II_of_Aragon' }
  ],
  relatedEntries: {
    events: [ evt('fall-of-granada', 'Fall of Granada', 'His conquest that ended the Reconquista') ],
    people: isabellaSlug ? [per(isabellaSlug, 'Isabella I of Castile', 'His wife and co-ruler')] : [],
    locations: [ loc('granada', 'Granada', 'His final conquest and burial place'), loc('kingdom-of-castile', 'Kingdom of Castile', 'The realm he shared with Isabella') ]
  }
}

// ---------------------------------------------------------------- PERSON: Boabdil
const boabdil = {
  id: 'muhammad-xii-of-granada', type: 'person', name: 'Boabdil',
  aliases: ['Muhammad XII', 'Muhammad XII of Granada', 'Abu Abdallah Muhammad XII', 'Boabdil el Chico', 'El Rey Chico'],
  born: 'c. 1460', died: 'c. 1533', deathAge: 'unknown', restingPlace: 'Fez, Morocco (uncertain)',
  birth: { date: 'c. 1460', place: 'Granada' },
  death: { date: 'c. 1533 (uncertain)', place: 'Fez, Morocco' },
  location: 'Granada and North Africa',
  image: fp('Portrait%20of%20Muhammad%20XII%20of%20Granada%2C%2017th%20century.jpg'),
  title: 'last emir of Granada', isRuler: true,
  roles: ['Emir of Granada', 'Last Nasrid ruler'],
  epithets: [ { name: 'el Chico', type: 'byname', note: '"The little one" / "the young", to distinguish him from his elders; Latinised in Spanish as Boabdil.' } ],
  summary: 'Boabdil, or Muhammad XII, was the last Nasrid emir of Granada, who surrendered the city and the Alhambra to the Catholic Monarchs in 1492, ending Muslim rule in Iberia.',
  details: 'Caught between his warring relatives and the pressure of Castile and Aragon, Boabdil ruled a collapsing emirate and, after a decade of losing wars, gave up Granada in 1492 and went into exile.',
  overview: 'Boabdil is remembered less for what he did than for what ended with him: he is the melancholy figure at the close of al-Andalus.',
  quickFacts: { realm: 'Emirate of Granada', dynasty: 'Nasrid dynasty', culture: 'Andalusi (Nasrid)', knownFor: 'Surrendering Granada in 1492, the last emir of al-Andalus' },
  contentSections: [
    { title: 'Overview', paragraphs: [
      'Boabdil — Muhammad XII — was the twenty-third and last Nasrid emir of Granada. He came to the throne amid civil war within his own dynasty and ruled the last Muslim state in Iberia in its final, doomed decade.',
      'After years of defeat in the Granada War, he surrendered the city and the Alhambra to Ferdinand and Isabella on 2 January 1492 and left for exile. With his surrender the long history of Muslim rule in Iberia came to an end.'
    ]},
    { title: 'A doomed reign', paragraphs: [
      'Boabdil seized power by rebelling against his father, Abu al-Hasan Ali, splitting the Nasrid house at the worst possible moment. Captured by the Christians at Lucena in 1483, he was released as a pawn, set against his own relatives to deepen Granada\'s civil wars.',
      'As the Christian armies took the emirate\'s towns one by one, Boabdil was left ruling little more than Granada itself. In 1491–1492 he negotiated the surrender of the city on terms, and then departed for North Africa, where he is thought to have died in Fez decades later.'
    ]},
    { title: 'Character and Personality', paragraphs: [
      'Boabdil comes down to us wrapped in legend more than record: the tragic last king, weeping as he looked back on the city he had lost — "the last sigh of the Moor" — while his mother is said to have told him not to weep like a woman for what he could not defend like a man. This is literary tradition, shaped by later Christian and Romantic writers, as much as history.',
      'The historical Boabdil was a ruler dealt an impossible hand: a divided dynasty, a bankrupt emirate, and two united Christian crowns bent on his destruction. He is judged harshly by legend for the surrender, but modern historians stress how little room he had to do anything else.'
    ]}
  ],
  keyAchievements: [
    'Ruled Granada as its last Nasrid emir',
    'Negotiated the terms of the surrender of 1492',
    'Marked, in his person, the end of Muslim Iberia'
  ],
  timeline: [
    { date: 'c. 1460', title: 'Born', description: 'Born at Granada into the Nasrid ruling house.' },
    { date: 'c. 1482', title: 'Seizes power', description: 'Rebels against his father and takes the throne amid Nasrid civil war.' },
    { date: '1483', title: 'Captured at Lucena', description: 'Taken prisoner by the Christians and released as a political pawn.' },
    { date: '1492', title: 'Surrenders Granada', description: 'Gives up the city and the Alhambra to the Catholic Monarchs.' },
    { date: 'c. 1533', title: 'Died in exile', description: 'Believed to have died in Fez, North Africa.' }
  ],
  succession: {
    office: 'Emir of Granada',
    predecessor: { status: 'outside-scope', displayName: 'Abu al-Hasan Ali', note: 'His father, whose reign fell after the Codex\'s 1453 medieval cutoff.' },
    successor: { status: 'office-ended', displayName: 'None — the emirate ended', note: 'Granada fell to the Catholic Monarchs in 1492, ending the Nasrid emirate and Muslim rule in Iberia.' }
  },
  imageInfo: {
    caption: 'A 17th-century imagined portrait of Boabdil (Muhammad XII), the last emir of Granada; no contemporary likeness survives.',
    creator: 'Later portrait, Wikimedia Commons',
    date: '17th-century imagined portrait',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Portrait_of_Muhammad_XII_of_Granada,_17th_century.jpg',
    license: 'Public domain',
    note: 'A later imagining, not a portrait from life.'
  },
  sources: [
    { title: 'Muhammad XII of Granada', author: 'Wikipedia', type: 'reference', url: 'https://en.wikipedia.org/wiki/Muhammad_XII_of_Granada' }
  ],
  relatedEntries: {
    events: [ evt('fall-of-granada', 'Fall of Granada', 'His surrender of the city') ],
    houses: [ hse('nasrid-dynasty', 'Nasrid dynasty', 'The dynasty he was the last to rule') ],
    locations: [ loc('granada', 'Granada', 'His capital, lost in 1492'), loc('al-andalus', 'al-Andalus', 'The Muslim Iberia that ended with him') ]
  }
}

// ---------------------------------------------------------------- HOUSE: Nasrid dynasty
const nasrid = {
  id: 'nasrid-dynasty', type: 'house', name: 'Nasrid dynasty',
  aliases: ['Nasrids', 'Banu Nasr', 'Nasrid kingdom of Granada'],
  originYear: 1230, endYear: 1492, reignSpan: '1230–1492 (Emirate of Granada)',
  region: 'The Emirate of Granada, southern Iberia', originPlace: 'Granada',
  arms: 'The Nasrid motto "Wa la ghaliba illa Allah" ("There is no victor but God")',
  image: fp('Granada%20-%20Alhambra%20-%20Palacios%20nazar%C3%ADes%20-%20Patio%20de%20los%20Leones%20-%201.jpg'),
  summary: 'The last Muslim dynasty of Iberia, which ruled the Emirate of Granada for over two and a half centuries, built the Alhambra, and fell to the Catholic Monarchs in 1492.',
  overview: 'The Nasrids held the final redoubt of al-Andalus, surviving as a tributary of Castile long after the rest of Muslim Iberia had fallen, and leaving in the Alhambra the supreme monument of Andalusi art.',
  founder: { displayName: 'Muhammad I ibn al-Ahmar', note: 'Founder of the emirate and dynasty, c. 1238 (no Codex article yet).' },
  seats: ['Granada (the Alhambra)'],
  notableMembers: [
    { displayName: 'Muhammad I ibn al-Ahmar', note: 'Founder of the Emirate of Granada (r. 1238–1273).' },
    { displayName: 'Yusuf I', note: 'A great builder of the Alhambra (r. 1333–1354).' },
    { displayName: 'Muhammad V', note: 'Completed much of the Nasrid palaces, incl. the Court of the Lions.' },
    { personSlug: 'muhammad-xii-of-granada', displayName: 'Boabdil (Muhammad XII)', note: 'The last emir, who surrendered Granada in 1492.' }
  ],
  familyTree: {},
  contentSections: [
    { title: 'Overview', paragraphs: [
      'The Nasrid dynasty, the Banu Nasr, ruled the Emirate of Granada from about 1230 until 1492. It was the last Muslim dynasty in Iberia, holding the mountainous south-east after the great Castilian conquests of the 13th century had swept away the rest of al-Andalus.',
      'The Nasrids survived largely by becoming a tributary of Castile and by exploiting Christian divisions, and in their long twilight they raised the Alhambra of Granada, the finest surviving palace-complex of the medieval Islamic west.'
    ]},
    { title: 'Survival and fall', paragraphs: [
      'For two and a half centuries the emirate endured through diplomacy, tribute and the strength of its mountain frontier, a wealthy and cultured state even as it shrank. Its court sustained a brilliant late flowering of Andalusi art, architecture and letters.',
      'In the end the union of Castile and Aragon under Ferdinand and Isabella, and the Nasrids\' own dynastic civil wars, proved fatal. The Granada War of 1482–1492 dismantled the emirate town by town, and with the surrender of Boabdil in 1492 the dynasty and the last Muslim state in Iberia came to an end.'
    ]}
  ],
  timeline: [
    { date: 'c. 1230', title: 'Dynasty founded', description: 'Muhammad I establishes the Emirate of Granada.' },
    { date: '14th century', title: 'The Alhambra', description: 'Yusuf I and Muhammad V build the great Nasrid palaces.' },
    { date: '1492', title: 'Fall of Granada', description: 'Boabdil surrenders; the dynasty and Muslim Iberia end.' }
  ],
  imageInfo: {
    caption: 'The Court of the Lions in the Nasrid palaces of the Alhambra, Granada — the masterwork of the Nasrid dynasty.',
    creator: 'Photograph, Wikimedia Commons',
    date: 'Nasrid palaces, 14th century',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Granada_-_Alhambra_-_Palacios_nazar%C3%ADes_-_Patio_de_los_Leones_-_1.jpg',
    license: 'Creative Commons',
    note: 'A surviving Nasrid monument, the heart of the Alhambra palaces.'
  },
  sources: [
    { title: 'Nasrid dynasty', author: 'Wikipedia', type: 'reference', url: 'https://en.wikipedia.org/wiki/Nasrid_dynasty' }
  ],
  relatedEntries: {
    people: [ per('muhammad-xii-of-granada', 'Boabdil', 'The dynasty\'s last emir') ],
    events: [ evt('fall-of-granada', 'Fall of Granada', 'The end of the dynasty') ],
    locations: [ loc('granada', 'Granada', 'Its capital'), loc('al-andalus', 'al-Andalus', 'The Muslim Iberia it was the last of') ]
  }
}

// ---------------------------------------------------------------- LOCATION: Granada
const granadaLoc = {
  id: 'granada', type: 'location', locationType: 'city', name: 'Granada',
  aliases: ['Gharnata', 'Emirate of Granada'],
  year: 'medieval', image: fp('View%20of%20the%20Alhambra%20and%20Sierra%20Nevada%20-%20Granada%20-%20Spain.jpg'),
  summary: 'The mountain capital of the last Muslim state in Iberia, seat of the Nasrid dynasty and their Alhambra, whose surrender in 1492 ended the Reconquista.',
  overview: 'Granada, at the foot of the Sierra Nevada, was the heart of the last Muslim emirate of Iberia and holds in the Alhambra the greatest surviving monument of al-Andalus.',
  knownFor: 'Being the Nasrid capital and the last Muslim city of al-Andalus, home of the Alhambra',
  contentSections: [
    { title: 'Overview', paragraphs: [
      'Granada lies on the northern slopes of the Sierra Nevada in south-eastern Iberia, a naturally defensible site that made it the last refuge of Muslim power in the peninsula. From the 13th century it was the capital of the Nasrid Emirate of Granada.',
      'The city is crowned by the Alhambra, the fortified palace-city of the Nasrid emirs, whose halls and courts are the supreme achievement of medieval Andalusi architecture. Granada\'s surrender in 1492 marks the conventional end of the Reconquista.'
    ]},
    { title: 'The Nasrid capital', paragraphs: [
      'For over two centuries Granada flourished as the seat of a wealthy, cultured emirate, its population swollen by Muslims fleeing the Christian conquests further north. Trade, learning and craft sustained it even as its territory shrank.',
      'The Alhambra and the neighbouring Generalife gardens, built and adorned above all under Yusuf I and Muhammad V in the 14th century, remain the city\'s glory. After 1492 Granada became a Castilian city, but its medieval Nasrid fabric still defines it.'
    ]}
  ],
  timeline: [
    { date: 'c. 1230', title: 'Nasrid capital', description: 'Becomes the seat of the Emirate of Granada.' },
    { date: '1492', title: 'Fall of Granada', description: 'Surrenders to the Catholic Monarchs, ending Muslim Iberia.' }
  ],
  imageInfo: {
    caption: 'The Alhambra of Granada below the Sierra Nevada — the Nasrid palace-fortress of the last Muslim capital in Iberia.',
    creator: 'Photograph, Wikimedia Commons',
    date: 'Alhambra, 13th–14th century',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:View_of_the_Alhambra_and_Sierra_Nevada_-_Granada_-_Spain.jpg',
    license: 'Creative Commons',
    note: 'The medieval Nasrid Alhambra, not a modern cityscape.'
  },
  sources: [
    { title: 'Granada', author: 'Wikipedia', type: 'reference', url: 'https://en.wikipedia.org/wiki/Granada' }
  ],
  relatedEntries: {
    events: [ evt('fall-of-granada', 'Fall of Granada', 'Its surrender in 1492') ],
    people: [ per('muhammad-xii-of-granada', 'Boabdil', 'Its last Muslim ruler') ],
    houses: [ hse('nasrid-dynasty', 'Nasrid dynasty', 'The dynasty that ruled it') ]
  }
}

const results = []
results.push(['event', granadaFall.name, upsert(data.events, granadaFall)])
results.push(['person', ferdinand2.name, upsert(data.characters, ferdinand2)])
results.push(['person', boabdil.name, upsert(data.characters, boabdil)])
results.push(['house', nasrid.name, upsert(data.houses, nasrid)])
results.push(['location', granadaLoc.name, upsert(data.locations, granadaLoc)])

// Backlink: add Fall of Granada to the existing Isabella I's related events.
if (isabellaSlug) {
  const isa = data.characters.find((c) => c.id === isabellaSlug)
  if (isa) {
    isa.relatedEntries = isa.relatedEntries || {}
    const evs = isa.relatedEntries.events = isa.relatedEntries.events || []
    if (!evs.some((e) => e.slug === 'fall-of-granada')) { evs.push(evt('fall-of-granada', 'Fall of Granada', 'Her conquest that ended the Reconquista')); results.push(['backlink', 'Isabella I → Fall of Granada', 'added']) }
  }
}

fs.writeFileSync(dataPath, JSON.stringify(data, null, 2))
for (const [t, n, a] of results) console.log(`${a.padEnd(8)} ${t.padEnd(9)} ${n}`)
console.log(`\nisabella slug: ${isabellaSlug}\nDone. Run gen-entity-links + gates.`)
