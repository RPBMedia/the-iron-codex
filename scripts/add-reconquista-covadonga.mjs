/**
 * Reconquista Batch 1 — the Covadonga cluster.
 * Adds: Battle of Covadonga (event), Pelagius/Pelayo (person), Covadonga
 * (location), Kingdom of Asturias (location/polity), House of Asturias (house).
 * Full-quality: sections, cross-links (bidirectional), verified Wikimedia images,
 * aliases, sources. Idempotent by id. Historiography (Covadonga's legend vs the
 * minimal contemporary evidence) is integrated into the prose, not boilerplate.
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

// ---------------------------------------------------------------- EVENT
const battle = {
  id: 'battle-of-covadonga', type: 'event', name: 'Battle of Covadonga',
  year: 722, location: 'Covadonga, Asturias, Iberia', eventType: 'Battle',
  conflict: 'Umayyad conquest of Hispania / early Reconquista',
  image: 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Pelayo_en_la_batalla_de_Covadonga_BNE_Mss_2805_f_23r.jpg',
  summary: 'Around 718–722 a small Christian band under Pelagius (Pelayo) repelled an Umayyad punitive force in the mountains of Asturias — a minor engagement that later tradition made the founding victory of the Reconquista.',
  details: 'Fought in a narrow valley below the cave of Covadonga in the Picos de Europa, the clash was tiny by the standards of the age, but it preserved the Asturian revolt led by Pelayo and became, centuries later, the symbolic origin of the Christian recovery of Iberia and of the Asturian monarchy.',
  factions: ['Asturian rebels', 'Umayyad Caliphate'],
  leaders: [
    { name: 'Pelagius of Asturias', faction: 'Asturian rebels', personId: 'pelagius-of-asturias' },
    { name: 'al-Qama', faction: 'Umayyad expedition' }
  ],
  eventLocation: { name: 'Covadonga' },
  outcome: 'Asturian victory; the revolt survived and the Kingdom of Asturias took root in the northern mountains.',
  background: [
    'After the Umayyad victory over the Visigoths at Guadalete in 711, Muslim armies overran almost the whole Iberian Peninsula within a decade. Resistance survived only in the Cantabrian mountains of the north, terrain that made occupation costly and offered little to reward it.',
    'Pelayo, a Visigothic or local Astur noble remembered as a former royal officer, led a rising against Umayyad authority and its local governor Munuza. When submission and negotiation failed, a punitive column was sent into the mountains to crush the revolt, and Pelayo withdrew to the defensible ground around the cave of Covadonga.'
  ],
  battle: 'The Umayyad force advanced up a constricted valley where numbers and cavalry counted for little. Pelayo\'s men, sheltering in and around the cave and the wooded slopes, ambushed the column with missiles and a downhill charge, throwing it back in disorder; the retreat through the mountains cost the expedition further losses. The Christian chronicles that describe the fight were written more than a century later and inflate it into a miracle — the Chronicle of Alfonso III claims 124,000 Muslims killed and thousands more crushed by a collapsing mountain — figures no modern historian accepts. Contemporary Arabic sources barely register the affair, dismissing Pelayo as a minor "wild ass" of a rebel whose handful of followers would come to nothing.',
  aftermath: 'The immediate result was modest: a punitive expedition failed and the Asturian revolt endured. Its long consequences were large. Pelayo was recognised as leader and later king, and the mountain principality he preserved grew into the Kingdom of Asturias, from which the Christian states of the north would expand. By the ninth and tenth centuries Asturian and Leonese writers had reframed Covadonga as the divinely ordained beginning of the reconquest of Spain.',
  imageInfo: {
    caption: 'Pelayo at the Battle of Covadonga in a medieval manuscript (Biblioteca Nacional de España, Mss. 2805, f. 23r).',
    creator: 'Biblioteca Nacional de España manuscript',
    date: 'Medieval manuscript illumination',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Pelayo_en_la_batalla_de_Covadonga_BNE_Mss_2805_f_23r.jpg',
    license: 'Public domain',
    note: 'A later manuscript image of the legend, not a contemporary record of the fight.'
  },
  contentSections: [
    { title: 'Overview', paragraphs: [
      'The Battle of Covadonga was a small engagement fought around 718–722 in the mountains of Asturias, in which a band of Christian rebels led by Pelagius — Pelayo in Spanish — repelled an Umayyad punitive force sent to end their revolt. In military terms it was a skirmish; in memory it became the founding victory of the Reconquista.',
      'The clash preserved the rising that Pelayo led and allowed a Christian principality to survive in the Cantabrian north. From that survival grew the Kingdom of Asturias and, over the following centuries, the Christian kingdoms that gradually pushed south. The distance between the modest event and its towering later reputation is itself the most important thing to understand about Covadonga.'
    ]},
    { title: 'Background', paragraphs: [
      'The Umayyad conquest that began in 711 shattered the Visigothic kingdom and swept across Iberia with startling speed. Only the mountainous north — Asturias, Cantabria, the Basque country — remained beyond effective control, protected by terrain rather than by armies.',
      'Pelayo emerged as leader of an Asturian revolt against Umayyad authority and the local governor Munuza. When the rising could not be bought off or talked down, a column was dispatched to destroy it, and Pelayo fell back on the naturally defensible ground around the cave of Covadonga in the Picos de Europa.'
    ]},
    { title: 'Forces and commanders', paragraphs: [
      'The numbers are unknowable. Pelayo commanded a small mountain following — later legend speaks of a few hundred, which is plausible for the scale of the fight, against the chroniclers\' impossible tens of thousands of attackers. The engagement was decided by ground and ambush, not by mass.',
      'The Umayyad expedition was led by a commander the Christian sources name al-Qama, accompanied according to tradition by the captured bishop Oppas, sent to persuade Pelayo to surrender. Its object was punitive: to reassert authority over a remote and unproductive corner of the new province.'
    ]},
    { title: 'The battle', paragraphs: [
      'The Umayyad force pushed up the narrow valley toward the cave, where its numbers and horsemen could not deploy. Pelayo\'s men, using the cave, the slopes and the woods, met the advance with missiles and a sudden charge, broke it, and harried the survivors in a costly retreat through the mountains.',
      'The written accounts come from Asturian chronicles of the late ninth century — the Chronica Albeldensia and the Chronicle of Alfonso III — more than 150 years after the event, and they cast it as a miracle: rocks hurled by the defenders turn back on the attackers, a mountain falls on the fleeing enemy, 124,000 are slain. These are theological set-pieces, not battle reports. The near-silence of the Arabic sources, which treat Pelayo as an insignificant nuisance, confirms that the real fight was small.'
    ]},
    { title: 'Aftermath', paragraphs: [
      'The expedition\'s failure left the revolt intact. Pelayo was acknowledged as leader and, in the traditional account, raised to kingship; his stronghold in the mountains became the nucleus of the Kingdom of Asturias, with an early seat at Cangas de Onís.',
      'From this base Asturian rulers expanded slowly southward as Umayyad power turned to other frontiers and to internal strife. Within a few generations the little kingdom would reach the Duero, and by the tenth century it had given rise to the Kingdom of León.'
    ]},
    { title: 'Historical significance', paragraphs: [
      'Covadonga\'s significance is symbolic far more than tactical. Asturian and later Castilian tradition made it the God-given beginning of the Reconquista and the origin point of the Iberian Christian monarchies, a story reinforced across the Middle Ages and revived by modern Spanish nationalism, which built a basilica at the site and enshrined the cave as a national shrine.',
      'Modern historians read it differently: as one local success among many frontier clashes, magnified in hindsight to give a long and fragmented process a single heroic starting point. The Reconquista was never the uninterrupted 781-year crusade of legend — Christian kingdoms fought each other, Muslim states fought each other, and rulers crossed the religious divide for allies — but Covadonga remained the myth on which its story was hung.'
    ]}
  ],
  sources: [
    { title: 'Chronicle of Alfonso III', author: 'Asturian court chronicle (late 9th c.)', type: 'primary source', url: 'https://en.wikipedia.org/wiki/Chronicle_of_Alfonso_III' },
    { title: 'Battle of Covadonga', author: 'Wikipedia', type: 'reference', url: 'https://en.wikipedia.org/wiki/Battle_of_Covadonga' },
    { title: 'Wikimedia Commons image record', author: 'Wikimedia Commons', type: 'image source', url: 'https://commons.wikimedia.org/wiki/File:Pelayo_en_la_batalla_de_Covadonga_BNE_Mss_2805_f_23r.jpg' }
  ],
  relatedEntries: {
    people: [ per('pelagius-of-asturias', 'Pelagius of Asturias', 'Led the Asturian rebels to victory') ],
    locations: [
      loc('covadonga', 'Covadonga', 'Site of the battle and later national shrine'),
      loc('kingdom-of-asturias', 'Kingdom of Asturias', 'The realm that grew from the revolt'),
      loc('al-andalus', 'al-Andalus', 'The Muslim-ruled Iberia the revolt resisted')
    ]
  },
  participants: [
    {
      side: 'Asturian rebels',
      factions: [ { name: 'Kingdom of Asturias', title: 'Kingdom of Asturias', type: 'location', slug: 'kingdom-of-asturias' } ],
      leaders: [ { name: 'Pelagius of Asturias', title: 'Pelagius of Asturias', type: 'person', slug: 'pelagius-of-asturias' } ],
      strength: { display: 'A small mountain following (a few hundred at most)', confidence: 'debated', note: 'No reliable figure survives; the fight was small, and the chroniclers\' vast numbers are legend.' }
    },
    {
      side: 'Umayyad expedition',
      factions: [ { name: 'Umayyad Caliphate', title: 'Umayyad Caliphate', type: 'location', slug: 'umayyad-caliphate' } ],
      leaders: [ { name: 'al-Qama', title: 'Umayyad commander' } ],
      strength: { display: 'A punitive column; chronicle claims of tens of thousands are fantastical', confidence: 'chronicle-claim', note: 'The Chronicle of Alfonso III\'s 124,000 dead is a theological figure, not a headcount; the real force was modest.' }
    }
  ],
  battleContinuity: {
    label: 'The Reconquista\'s symbolic start and its decisive turning point',
    battleSlug: 'battle-of-las-navas-de-tolosa',
    relationship: 'same-war',
    reason: 'Covadonga became the mythic beginning of the Reconquista; nearly five centuries later, the allied victory at Las Navas de Tolosa in 1212 broke Almohad power and opened the decisive phase of that long recovery — the two battles bracket the arc.'
  }
}

// ---------------------------------------------------------------- PERSON
const pelayo = {
  id: 'pelagius-of-asturias', type: 'person', name: 'Pelagius of Asturias',
  aliases: ['Pelayo', 'Don Pelayo', 'Pelagius', 'Pelayo of Asturias'],
  born: 'c. 685', died: '737', deathAge: 'about 52', restingPlace: 'Holy Cave of Covadonga',
  birth: { date: 'c. 685', place: 'Asturias or the former Visigothic lands' },
  death: { date: '737', place: 'Kingdom of Asturias' },
  location: 'Asturias, Iberia',
  image: fp('Covadonga%20-%20Estatua%20de%20Don%20Pelayo%201.jpg'),
  title: 'first king of Asturias', isRuler: true,
  roles: ['King of Asturias', 'Leader at the Battle of Covadonga'],
  summary: 'Pelagius, or Pelayo, was the Asturian leader who resisted Umayyad rule after 711 and, by his victory at Covadonga, founded the Kingdom of Asturias — remembered as the first ruler of the Reconquista.',
  details: 'A noble of Visigothic or local Astur background, Pelayo led the mountain revolt in Asturias, was acclaimed its ruler around 718, and held the small realm together until his death in 737. Much of his life is known only through Asturian chronicles written well over a century later.',
  overview: 'Pelayo stands at the head of every genealogy of the Christian kings of Iberia, yet the man himself is elusive, glimpsed only through later and heavily mythologised sources.',
  quickFacts: { realm: 'Kingdom of Asturias', dynasty: 'House of Asturias', culture: 'Astur / Visigothic', knownFor: 'Victory at Covadonga; founding the Kingdom of Asturias' },
  contentSections: [
    { title: 'Overview', paragraphs: [
      'Pelagius of Asturias — Pelayo — was the leader of the Asturian resistance to Umayyad rule in the years after the conquest of 711 and is counted as the first king of Asturias. His victory at Covadonga, around 718–722, preserved a Christian principality in the Cantabrian mountains that later tradition made the seed of the Reconquista.',
      'The historical Pelayo is hard to see clearly. The sources that describe him were written in the Asturian court more than a century after his death and blend genuine memory with legend and dynastic propaganda, so much of his story must be read with caution.'
    ]},
    { title: 'Revolt and reign', paragraphs: [
      'The chronicles present Pelayo as a Visigothic noble, in some accounts a sword-bearer of the last Gothic kings, who refused submission to the new Muslim order and fled to Asturias. There he led a rising against Umayyad authority and its governor Munuza, and after the failed punitive expedition at Covadonga he was acclaimed leader — in the traditional telling, raised on a shield as king.',
      'As ruler he governed a small mountain realm from an early seat at Cangas de Onís, consolidating control over the Asturian valleys rather than launching great campaigns. He died in 737 and was succeeded by his son Favila; when Favila was killed soon afterward, the crown passed to Alfonso I, married to Pelayo\'s daughter Ermesinda, binding the new monarchy to Pelayo\'s line.'
    ]},
    { title: 'Memory and legend', paragraphs: [
      'Over the following centuries Pelayo was transformed from a frontier chieftain into the providential founder of Christian Spain. Asturian, Leonese and Castilian writers made Covadonga a divine sign and Pelayo its chosen instrument, and the medieval kings traced their legitimacy back to him.',
      'That memory hardened into national myth in the modern era, with a great statue of Pelayo raised at Covadonga and his tomb venerated in the Holy Cave. Historians today separate the symbolic Pelayo — origin-figure of a 700-year narrative — from the obscure but real leader who kept a small revolt alive in the mountains.'
    ]},
    { title: 'Character and Personality', paragraphs: [
      'The Pelayo of the chronicles is above all defiant: a leader who refuses the terms offered by the governor Munuza and by the captive bishop Oppas, and who chooses a fight in the mountains over submission. The sources cast him as the resolute Christian noble who would not bow, a portrait shaped to serve the later origin-myth of the Reconquista as much as to record a man.',
      'Beyond that stance almost nothing personal survives — no reliable account of his temperament, appearance or private life, only his role as founder. What can be said is that he was evidently a capable enough war-leader and organiser to hold a following together in hostile country and to convert a local revolt into a durable principality, an achievement his more mythic reputation tends to obscure.'
    ]}
  ],
  keyAchievements: [
    'Led the Asturian revolt against Umayyad rule',
    'Won the Battle of Covadonga (c. 718–722)',
    'Founded and first ruled the Kingdom of Asturias'
  ],
  timeline: [
    { date: 'c. 685', title: 'Born', description: 'Born into a noble Astur or Visigothic family.' },
    { date: 'c. 711–714', title: 'Umayyad conquest', description: 'The Muslim conquest of Iberia; Pelayo withdraws into the northern mountains.' },
    { date: 'c. 718', title: 'Acclaimed leader', description: 'Recognised as leader of the Asturian revolt against Umayyad rule.' },
    { date: 'c. 722', title: 'Battle of Covadonga', description: 'Repelled an Umayyad punitive expedition in the mountains of Asturias.' },
    { date: '737', title: 'Died', description: 'Died as ruler of Asturias; succeeded by his son Favila.' }
  ],
  succession: {
    office: 'King of Asturias',
    predecessor: { displayName: 'None — founder of the realm', note: 'Pelayo established the Asturian monarchy.' },
    successor: { personSlug: '', displayName: 'Favila of Asturias', note: 'His son, who reigned briefly and was killed hunting a bear.' }
  },
  imageInfo: {
    caption: 'Statue of Don Pelayo at Covadonga, Asturias, honouring the founder of the Asturian kingdom.',
    creator: 'Monument at Covadonga (sculptor Eduardo Zaragoza)',
    date: '20th century monument',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Covadonga_-_Estatua_de_Don_Pelayo_1.jpg',
    license: 'Creative Commons',
    note: 'A modern commemorative statue; no contemporary likeness of Pelayo exists.'
  },
  sources: [
    { title: 'Pelagius of Asturias', author: 'Wikipedia', type: 'reference', url: 'https://en.wikipedia.org/wiki/Pelagius_of_Asturias' },
    { title: 'Chronicle of Alfonso III', author: 'Asturian court chronicle (late 9th c.)', type: 'primary source', url: 'https://en.wikipedia.org/wiki/Chronicle_of_Alfonso_III' }
  ],
  relatedEntries: {
    events: [ evt('battle-of-covadonga', 'Battle of Covadonga', 'His defining victory') ],
    locations: [
      loc('kingdom-of-asturias', 'Kingdom of Asturias', 'The realm he founded'),
      loc('covadonga', 'Covadonga', 'Site of his victory and his tomb')
    ]
  }
}

// ---------------------------------------------------------------- LOCATIONS
const covadonga = {
  id: 'covadonga', type: 'location', locationType: 'shrine', name: 'Covadonga',
  year: '8th century', image: fp('Bas%C3%ADlica%20de%20Covadonga%20y%20Santa%20Cueva%20(Santuario%20de%20Covadonga).jpg'),
  summary: 'A mountain sanctuary in the Picos de Europa of Asturias, site of Pelayo\'s victory around 722 and, ever since, the symbolic birthplace of the Reconquista.',
  overview: 'Covadonga — from Cova Dominica, "cave of the Lady" — is a narrow valley and holy cave in eastern Asturias. Its fame rests entirely on the battle fought here and the myth built upon it.',
  knownFor: 'The Battle of Covadonga and the shrine to Our Lady of Covadonga',
  contentSections: [
    { title: 'Overview', paragraphs: [
      'Covadonga lies in a steep valley of the Picos de Europa in eastern Asturias, where a cave set in the cliff face has been a place of veneration since the early Middle Ages. It takes its name and its whole significance from the battle fought nearby around 722, when Pelayo\'s rebels turned back an Umayyad expedition.',
      'The site became the sacred origin-point of the Asturian monarchy and, in later tradition, of the Christian recovery of Iberia. Pelayo was buried in the Holy Cave, and the shrine of Our Lady of Covadonga grew into one of the principal pilgrimage centres of northern Spain.'
    ]},
    { title: 'The sanctuary', paragraphs: [
      'The Holy Cave (Santa Cueva) holds a chapel and the tombs traditionally identified as those of Pelayo and his kin, above a waterfall that feeds the valley below. Nearby the great neo-Romanesque Basilica of Santa María la Real de Covadonga was built in the late nineteenth century as the mountain became a national shrine.',
      'The high mountain lakes above the sanctuary, Enol and Ercina, and the surrounding peaks form the core of what is now a national park, so the place that made occupation impossible in the eighth century remains wild and defensible-looking today.'
    ]}
  ],
  timeline: [
    { date: 'c. 722', title: 'Battle of Covadonga', description: 'Pelayo\'s rebels repel an Umayyad expedition here.' },
    { date: '737', title: 'Burial of Pelayo', description: 'Pelayo is entombed in the Holy Cave.' }
  ],
  imageInfo: {
    caption: 'The Holy Cave and neo-Romanesque basilica at the sanctuary of Covadonga in the Picos de Europa.',
    creator: 'Photograph, Wikimedia Commons',
    date: 'Modern photograph of the medieval shrine site',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Bas%C3%ADlica_de_Covadonga_y_Santa_Cueva_(Santuario_de_Covadonga).jpg',
    license: 'Creative Commons',
    note: 'The basilica is 19th-century; the venerated cave and site date to the era of the battle.'
  },
  sources: [
    { title: 'Covadonga', author: 'Wikipedia', type: 'reference', url: 'https://en.wikipedia.org/wiki/Covadonga' }
  ],
  relatedEntries: {
    events: [ evt('battle-of-covadonga', 'Battle of Covadonga', 'Fought at this site') ],
    people: [ per('pelagius-of-asturias', 'Pelagius of Asturias', 'Victor here and buried in the Holy Cave') ],
    locations: [ loc('kingdom-of-asturias', 'Kingdom of Asturias', 'The realm born of the victory here') ],
    houses: [ hse('house-of-asturias', 'House of Asturias', 'The dynasty whose founding victory was won here') ]
  }
}

const asturias = {
  id: 'kingdom-of-asturias', type: 'location', locationType: 'kingdom', name: 'Kingdom of Asturias',
  aliases: ['Asturian kingdom', 'Astur kingdom'],
  year: '718–924', image: fp('SaintMaryOfNaranco.jpg'),
  summary: 'The first Christian kingdom of the Reconquista, founded by Pelayo in the Cantabrian mountains around 718 and, by 924, transformed into the Kingdom of León.',
  overview: 'Asturias was the small northern realm from which the Christian recovery of Iberia began. Sheltered by mountains, it survived the Umayyad conquest and slowly expanded southward toward the Duero.',
  knownFor: 'Being the cradle of the Reconquista and of Asturian pre-Romanesque art',
  contentSections: [
    { title: 'Overview', paragraphs: [
      'The Kingdom of Asturias arose from the revolt Pelayo led after the Umayyad conquest, taking shape as a distinct realm in the mountainous north-west of Iberia during the eighth century. Protected by the Cantabrian range, it endured where the Visigothic kingdom had collapsed.',
      'From early seats at Cangas de Onís and later Oviedo, its kings pushed the frontier gradually south as Muslim power was drawn elsewhere. By the early tenth century the centre of gravity had moved to León, and around 924 the realm is conventionally reckoned to have become the Kingdom of León.'
    ]},
    { title: 'Expansion and culture', paragraphs: [
      'Rulers such as Alfonso I, Alfonso II and Alfonso III extended Asturian control over the Duero valley, repopulating frontier lands and presenting themselves as heirs of the Visigothic monarchy. This "neo-Gothic" claim gave the young kingdom a usable past and a justification for reconquest.',
      'Asturias also produced a remarkable pre-Romanesque architecture — churches and palaces such as Santa María del Naranco and San Miguel de Lillo near Oviedo — and the Cross of Victory, later the emblem of the region. These survivals are the most tangible legacy of a kingdom otherwise thinly documented.'
    ]}
  ],
  timeline: [
    { date: 'c. 718', title: 'Foundation', description: 'Pelayo establishes the realm after the revolt in Asturias.' },
    { date: 'c. 722', title: 'Battle of Covadonga', description: 'The victory that secured the kingdom\'s survival.' },
    { date: 'c. 924', title: 'Becomes León', description: 'The kingdom is reckoned to pass into the Kingdom of León.' }
  ],
  imageInfo: {
    caption: 'Santa María del Naranco near Oviedo, a 9th-century palace-church of Asturian pre-Romanesque architecture.',
    creator: 'Photograph, Wikimedia Commons',
    date: '9th-century building (built under Ramiro I, c. 848)',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:SaintMaryOfNaranco.jpg',
    license: 'Creative Commons',
    note: 'A surviving monument of the Asturian kingdom, not a modern townscape.'
  },
  sources: [
    { title: 'Kingdom of Asturias', author: 'Wikipedia', type: 'reference', url: 'https://en.wikipedia.org/wiki/Kingdom_of_Asturias' }
  ],
  relatedEntries: {
    events: [ evt('battle-of-covadonga', 'Battle of Covadonga', 'Secured the kingdom\'s survival') ],
    people: [ per('pelagius-of-asturias', 'Pelagius of Asturias', 'Founder and first king') ],
    locations: [ loc('covadonga', 'Covadonga', 'The sanctuary where the kingdom was born') ],
    houses: [ hse('house-of-asturias', 'House of Asturias', 'The royal line that ruled the kingdom') ]
  }
}

// ---------------------------------------------------------------- HOUSE
const house = {
  id: 'house-of-asturias', type: 'house', name: 'House of Asturias',
  aliases: ['Astur-Leonese dynasty', 'Asturian dynasty', 'Astur dynasty'],
  originYear: 718, endYear: 1037, reignSpan: '718–1037 (Asturias, León and their line)',
  region: 'North-western Iberia (Asturias and León)',
  originPlace: 'Asturias',
  arms: 'The Cross of Victory (Cruz de la Victoria)',
  image: fp('Cruz%20de%20la%20victoria%20de%20Asturias.JPG'),
  summary: 'The royal line begun by Pelayo that ruled Asturias and then León, giving the Reconquista its first monarchy and, through marriage and succession, the later kings of Castile and León.',
  overview: 'The House of Asturias — also called the Astur-Leonese dynasty — is the founding royal line of Christian Iberia. It was never a single unbroken male lineage, but a monarchy that ran from Pelayo through the kings of Asturias and León.',
  founder: { personSlug: 'pelagius-of-asturias', displayName: 'Pelagius of Asturias', note: 'Founder of the Asturian kingdom and the dynasty, c. 718.' },
  seats: ['Cangas de Onís', 'Oviedo', 'León'],
  notableMembers: [
    { personSlug: 'pelagius-of-asturias', displayName: 'Pelayo', note: 'Founder; victor of Covadonga (r. c. 718–737).' },
    { displayName: 'Alfonso I of Asturias', note: 'Son-in-law of Pelayo; expanded the realm (r. 739–757).' },
    { displayName: 'Alfonso II the Chaste', note: 'Fixed the capital at Oviedo (r. 791–842).' },
    { displayName: 'Alfonso III the Great', note: 'Greatest of the Asturian kings (r. 866–910).' },
    { displayName: 'Ordoño II of León', note: 'Made León the seat of the kingdom.' }
  ],
  familyTree: {},
  contentSections: [
    { title: 'Overview', paragraphs: [
      'The House of Asturias is the royal line that began with Pelayo\'s revolt and grew into the first Christian monarchy of the Reconquista. Its kings ruled Asturias from the eighth century and then, as the realm expanded and its centre shifted south, the Kingdom of León.',
      'Strictly, it was less a single dynasty than a continuous monarchy: Pelayo\'s direct male line ended within two generations, and the crown passed to Alfonso I through marriage to Pelayo\'s daughter Ermesinda. Later medieval and modern writers nonetheless treated the Asturian and Leonese kings as one founding house.'
    ]},
    { title: 'Legacy', paragraphs: [
      'Through the kings of León the line continued into the central Middle Ages, and by inheritance and marriage its blood ran into the royal houses of Castile and León. Medieval rulers across Christian Iberia traced their legitimacy back to Pelayo and the Asturian kings.',
      'The dynasty\'s enduring emblem is the Cross of Victory, associated with Pelayo\'s banner at Covadonga and preserved as a jewelled cross in Oviedo, which remains the heraldic symbol of Asturias.'
    ]}
  ],
  timeline: [
    { date: 'c. 718', title: 'Dynasty founded', description: 'Pelayo establishes the Asturian monarchy.' },
    { date: 'c. 924', title: 'Asturias becomes León', description: 'The line continues as the kings of León.' }
  ],
  imageInfo: {
    caption: 'The Cross of Victory, jewelled emblem of the Asturian monarchy, kept in the Cámara Santa of Oviedo Cathedral.',
    creator: 'Photograph, Wikimedia Commons',
    date: 'Cross dated 908 (reign of Alfonso III)',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Cruz_de_la_victoria_de_Asturias.JPG',
    license: 'Creative Commons',
    note: 'The historic emblem associated with Pelayo\'s victory and the Asturian kings.'
  },
  sources: [
    { title: 'Kings of Asturias', author: 'Wikipedia', type: 'reference', url: 'https://en.wikipedia.org/wiki/List_of_Asturleonese_monarchs' }
  ],
  relatedEntries: {
    people: [ per('pelagius-of-asturias', 'Pelagius of Asturias', 'Founder of the house') ],
    events: [ evt('battle-of-covadonga', 'Battle of Covadonga', 'The victory that launched the dynasty') ],
    locations: [
      loc('kingdom-of-asturias', 'Kingdom of Asturias', 'The realm the house ruled'),
      loc('covadonga', 'Covadonga', 'Where the dynasty\'s founding victory was won')
    ]
  }
}

// ---------------------------------------------------------------- link Pelayo into the house
pelayo.quickFacts.dynasty = 'House of Asturias'

const results = []
results.push(['event', battle.name, upsert(data.events, battle)])
results.push(['person', pelayo.name, upsert(data.characters, pelayo)])
results.push(['location', covadonga.name, upsert(data.locations, covadonga)])
results.push(['location', asturias.name, upsert(data.locations, asturias)])
results.push(['house', house.name, upsert(data.houses, house)])

// Backlink: let the existing al-Andalus location point to Covadonga so the new
// battle is reachable from an existing page (no orphans).
const alAndalus = data.locations.find(l => l.id === 'al-andalus')
if (alAndalus) {
  alAndalus.relatedEntries = alAndalus.relatedEntries || {}
  const evs = alAndalus.relatedEntries.events = alAndalus.relatedEntries.events || []
  if (!evs.some(e => e.slug === 'battle-of-covadonga')) {
    evs.push(evt('battle-of-covadonga', 'Battle of Covadonga', 'Early Christian resistance in the north'))
    results.push(['backlink', 'al-Andalus → Covadonga', 'added'])
  }
}

fs.writeFileSync(dataPath, JSON.stringify(data, null, 2))
for (const [type, name, action] of results) console.log(`${action.padEnd(8)} ${type.padEnd(9)} ${name}`)
console.log('\nDone. Run gen-entity-links + check:content-quality + check:images.')
