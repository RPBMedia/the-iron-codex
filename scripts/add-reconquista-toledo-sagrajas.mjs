/**
 * Reconquista Batch 3 — Toledo & Sagrajas (late 11th century, the Almoravid intervention).
 * Adds: Conquest of Toledo (1085), Battle of Sagrajas / az-Zallaqah (1086),
 * Alfonso VI of León and Castile, Yusuf ibn Tashfin, Almoravid dynasty (house),
 * Toledo (city). Bidirectional links, verified Wikimedia images, aliases, sources.
 * Idempotent by id. Rewires the Simancas continuity forward to Sagrajas.
 * (El Cid + Valencia are deferred to the next batch, with the Valencian campaign.)
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

// ---------------------------------------------------------------- EVENT: Conquest of Toledo (Fall of City)
const toledoConquest = {
  id: 'conquest-of-toledo', type: 'event', name: 'Conquest of Toledo', year: 1085,
  aliases: ['Fall of Toledo', 'Capture of Toledo', 'Siege of Toledo'],
  location: 'Toledo, Iberia', eventType: 'Fall of City', conflict: 'Reconquista',
  image: fp('Alfonso%20VI%20reconquista%20Toledo.JPG'),
  summary: 'In 1085 Alfonso VI of León and Castile took Toledo, the old Visigothic capital, the greatest Christian gain of the Reconquista before the thirteenth century — and the shock that brought the Almoravids into Iberia.',
  details: 'After years of pressure and a tightening blockade, the taifa city of Toledo capitulated to Alfonso VI on 25 May 1085. Its fall gave the Christians a great fortified capital on the Tagus and so alarmed the Muslim states that they summoned Almoravid help from North Africa.',
  factions: ['Kingdom of León and Castile', 'Taifa of Toledo'],
  outcome: 'Toledo passed permanently to Christian rule; Alfonso VI took the title of emperor, and the alarmed taifa kings called in the Almoravids.',
  background: [
    'Toledo had been the capital of the Visigothic kingdom and remained a great city under Muslim rule, capital of one of the strongest taifa kingdoms. For the Christian kings its recovery carried enormous symbolic weight as the seat of the old Hispanic monarchy.',
    'Alfonso VI had for years dominated the taifa of Toledo, extracting tribute (parias) and intervening in its politics; he backed the weak ruler al-Qadir and steadily closed his grip until the city could no longer hold out.'
  ],
  aftermath: 'Toledo became a Christian archiepiscopal seat and the primatial see of Spain, and later a famous centre of translation between Arabic, Hebrew and Latin. Alfonso installed the deposed al-Qadir in Valencia. But the loss of so important a city terrified the remaining taifa rulers, who now invited Yusuf ibn Tashfin and the Almoravids across the strait — leading directly to the disaster of Sagrajas the following year.',
  imageInfo: {
    caption: 'Alfonso VI takes Toledo in 1085, in a later Spanish depiction of the reconquest of the city.',
    creator: 'Later Spanish depiction, Wikimedia Commons',
    date: 'Later depiction of the 1085 event',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Alfonso_VI_reconquista_Toledo.JPG',
    license: 'Public domain',
    note: 'A commemorative image, not a contemporary record.'
  },
  contentSections: [
    { title: 'Overview', paragraphs: [
      'The Conquest of Toledo in 1085 was the capture of the old Visigothic capital by Alfonso VI of León and Castile, the most important Christian gain of the Reconquista before the thirteenth century. Rather than a stormed assault, it was the surrender of a taifa city worn down by years of Christian pressure.',
      'Its fall gave the Christian kingdoms a great walled capital on the Tagus and immense prestige, but it also frightened the Muslim taifa rulers into summoning the Almoravids of North Africa — a reaction that would soon check the Christian advance.'
    ]},
    { title: 'Background', paragraphs: [
      'Toledo, capital of the Visigoths and then of a powerful taifa, was the prize the Leonese-Castilian kings most coveted. Alfonso VI had long treated it as a tributary, taking parias and meddling in its succession while backing the pliable al-Qadir.',
      'As the balance tilted, Alfonso pressed the city ever harder until, unable to resist and abandoned by potential allies, Toledo capitulated on terms in May 1085.'
    ]},
    { title: 'The fall and its consequences', paragraphs: [
      'The city surrendered rather than being sacked, and its Muslim and Jewish inhabitants were guaranteed protection under the terms of capitulation, though the great mosque was soon converted to Christian use. Alfonso VI, styling himself "emperor of all Spain", made Toledo a bastion of Christian power in the centre of the peninsula.',
      'The shock of losing Toledo persuaded the taifa kings, led by al-Mutamid of Seville, that they could not withstand the Christians alone. They appealed to the Almoravid emir Yusuf ibn Tashfin, whose intervention would produce the crushing Christian defeat at Sagrajas in 1086.'
    ]}
  ],
  sources: [
    { title: 'Alfonso VI of León and Castile', author: 'Wikipedia', type: 'reference', url: 'https://en.wikipedia.org/wiki/Alfonso_VI_of_Le%C3%B3n_and_Castile' },
    { title: 'Taifa of Toledo', author: 'Wikipedia', type: 'reference', url: 'https://en.wikipedia.org/wiki/Taifa_of_Toledo' }
  ],
  relatedEntries: {
    people: [ per('alfonso-vi-of-leon-and-castile', 'Alfonso VI of León and Castile', 'Took the city in 1085') ],
    locations: [
      loc('toledo', 'Toledo', 'The city that fell'),
      loc('al-andalus', 'al-Andalus', 'The Muslim Iberia it was taken from')
    ],
    events: [ evt('battle-of-sagrajas', 'Battle of Sagrajas', 'The Almoravid response it provoked') ]
  }
}

// ---------------------------------------------------------------- EVENT: Battle of Sagrajas
const sagrajas = {
  id: 'battle-of-sagrajas', type: 'event', name: 'Battle of Sagrajas', year: 1086,
  aliases: ['az-Zallaqah', 'al-Zallaqa', 'Battle of Zallaqa', 'Battle of az-Zallaqah', 'Battle of Zalaca', 'Sagrajas', 'Zalaca'],
  location: 'near Badajoz, Iberia', eventType: 'Battle',
  conflict: 'Reconquista — Almoravid intervention in al-Andalus',
  image: fp('Battle%20of%20Zalaca%2C%201086%20(J.%20Serra).png'),
  summary: 'On 23 October 1086 the Almoravid emir Yusuf ibn Tashfin, allied with the taifa kings, crushed Alfonso VI of León and Castile near Badajoz — the battle known in Arabic as az-Zallaqah — halting the Christian advance after the fall of Toledo.',
  details: 'Summoned across the strait by the taifa rulers after the loss of Toledo, Yusuf ibn Tashfin joined his North African army to the taifa forces of al-Mutamid of Seville and others, and shattered Alfonso VI\'s army at Sagrajas, though he then withdrew to Africa without exploiting the victory.',
  factions: ['Almoravids and taifa allies', 'Kingdom of León and Castile'],
  leaders: [
    { name: 'Yusuf ibn Tashfin', faction: 'Almoravids', personId: 'yusuf-ibn-tashfin' },
    { name: 'al-Mutamid of Seville', faction: 'Taifa allies' },
    { name: 'Alfonso VI of León and Castile', faction: 'Kingdom of León and Castile', personId: 'alfonso-vi-of-leon-and-castile' }
  ],
  eventLocation: { name: 'Sagrajas (az-Zallaqah), near Badajoz' },
  outcome: 'Decisive Almoravid–taifa victory; Alfonso VI\'s army was destroyed and he escaped wounded, but Yusuf returned to Africa and did not follow up.',
  background: [
    'The fall of Toledo in 1085 convinced the taifa kings that they could not hold out against Alfonso VI. Led by al-Mutamid of Seville, they appealed to Yusuf ibn Tashfin, emir of the austere Almoravid movement that now ruled the Maghreb.',
    'Yusuf crossed the Strait of Gibraltar with a disciplined Berber army and joined the assembled taifa forces. Alfonso VI, at the height of his power, marched south to confront the new threat, and the armies met near Badajoz.'
  ],
  battle: 'The two hosts clashed on 23 October 1086 at a place the Arabic sources call az-Zallaqah, "the slippery ground". Alfonso VI opened with a heavy Christian charge that drove back the taifa contingents, but Yusuf held his Almoravid regulars — including a disciplined guard and, by tradition, drummers whose noise unsettled the Christian horses — in reserve and committed them at the decisive moment. Struck in front and flank, and with a detachment sent against his camp, the Christian army was broken and cut down; Alfonso VI cut his way out with a remnant, wounded in the leg. As with every battle of the period, the chronicle numbers — tens or hundreds of thousands — are not credible, but the completeness of the Christian defeat is well attested.',
  aftermath: 'Sagrajas was a shattering blow to Alfonso VI and halted the Christian advance, yet its immediate results were limited: news of his heir\'s death drew Yusuf back to Morocco, and he made no attempt to retake Toledo. The lasting consequence was strategic — the Almoravids were now a power in Iberia, and within a few years Yusuf would return to depose the very taifa kings who had summoned him, annexing al-Andalus to his North African empire.',
  imageInfo: {
    caption: 'The Battle of Zalaca (Sagrajas), 1086, in a painting by Josep Serra.',
    creator: 'Josep Serra',
    date: '19th-century painting',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Battle_of_Zalaca,_1086_(J._Serra).png',
    license: 'Public domain',
    note: 'A romantic 19th-century imagining of the battle, not a contemporary record.'
  },
  contentSections: [
    { title: 'Overview', paragraphs: [
      'The Battle of Sagrajas, called az-Zallaqah in Arabic, was fought on 23 October 1086 near Badajoz between the Almoravid emir Yusuf ibn Tashfin, allied with the Muslim taifa kings, and Alfonso VI of León and Castile. It was a crushing Christian defeat that halted the advance opened by the fall of Toledo the year before.',
      'The battle marked the entry of the Almoravids into Iberian affairs. Though Yusuf did not exploit his victory at once, Sagrajas ended the run of Christian success and set in motion the Almoravid takeover of al-Andalus.'
    ]},
    { title: 'Background', paragraphs: [
      'Alfonso VI\'s capture of Toledo in 1085 terrified the taifa rulers, who realised they could not resist the Christian kingdoms alone. Al-Mutamid of Seville led an appeal to Yusuf ibn Tashfin, the emir who had forged the Almoravid empire in the Maghreb, even at the risk that the newcomer might turn on his hosts.',
      'Yusuf crossed the strait with a disciplined army and united it with the taifa forces. Alfonso VI, styling himself emperor and at the peak of his power, advanced south to meet the combined host near Badajoz.'
    ]},
    { title: 'Forces and commanders', paragraphs: [
      'Yusuf commanded the hardened Almoravid regulars, supported by the levies of the taifa kings — a coalition of North African discipline and Andalusi manpower. Alfonso VI led the combined feudal host of León, Castile and their allies, confident after Toledo.',
      'The figures given by the chroniclers are wildly inflated on both sides and cannot be used. What is certain is that Yusuf kept a strong reserve in hand while Alfonso committed his strength early — the difference that decided the day.'
    ]},
    { title: 'The battle', paragraphs: [
      'Alfonso opened with a powerful charge that scattered the taifa troops, and for a time the Christians seemed to be winning. But Yusuf had held his Almoravid regulars back, and threw them in when the Christians were committed and disordered, while a detachment struck Alfonso\'s camp in the rear.',
      'Caught between the fresh Almoravid line and the assault on his camp, and unsettled — the sources say — by the din of Almoravid drums, Alfonso\'s army broke and was slaughtered. The king escaped with a small band, wounded, leaving the field to Yusuf.'
    ]},
    { title: 'Aftermath', paragraphs: [
      'The defeat stunned Christian Spain and ended the momentum of Alfonso\'s reign, but Yusuf drew back to Morocco on news of his son\'s death and did not press his advantage or besiege Toledo. In the short term little territory changed hands.',
      'The deeper consequence was decisive: the Almoravids were now committed to al-Andalus. Returning in the 1090s, Yusuf deposed the taifa kings who had called him in and annexed Muslim Iberia to his empire, freezing the Reconquista for a generation.'
    ]},
    { title: 'Historical significance', paragraphs: [
      'Sagrajas is the classic example of how fragmented the "sides" of the Reconquista were: Muslim taifa kings, unable to face a Christian king, imported a North African power that then swallowed them, while the Christian coalition itself was a patchwork of feudal contingents. Religious labels conceal a tangle of rival interests.',
      'It also punctures the idea of a steady Christian advance. The recovery of Toledo looked like a decisive breakthrough; within a year Sagrajas showed how quickly the balance could swing when a new power entered from Africa.'
    ]}
  ],
  sources: [
    { title: 'Battle of Sagrajas', author: 'Wikipedia', type: 'reference', url: 'https://en.wikipedia.org/wiki/Battle_of_Sagrajas' }
  ],
  participants: [
    {
      side: 'Almoravids and taifa allies',
      factions: [ { name: 'Almoravid dynasty', title: 'Almoravid dynasty', type: 'house', slug: 'almoravid-dynasty' }, { name: 'Taifa kingdoms', title: 'Taifa kingdoms' } ],
      leaders: [ { name: 'Yusuf ibn Tashfin', title: 'Yusuf ibn Tashfin', type: 'person', slug: 'yusuf-ibn-tashfin' } ],
      strength: { display: 'A combined Almoravid–taifa army; chronicle figures unreliable', confidence: 'chronicle-claim', note: 'Almoravid regulars plus taifa levies; the vast numbers in the sources cannot be trusted.' }
    },
    {
      side: 'Kingdom of León and Castile',
      factions: [ { name: 'Kingdom of León', title: 'Kingdom of León', type: 'location', slug: 'kingdom-of-leon' }, { name: 'Kingdom of Castile', title: 'Kingdom of Castile', type: 'location', slug: 'kingdom-of-castile' } ],
      leaders: [ { name: 'Alfonso VI of León and Castile', title: 'Alfonso VI of León and Castile', type: 'person', slug: 'alfonso-vi-of-leon-and-castile' } ],
      strength: { display: 'The feudal host of León-Castile; no reliable figure', confidence: 'debated', note: 'Chronicle totals are inflated; Alfonso escaped with only a remnant.' }
    }
  ],
  battleContinuity: {
    label: 'The decisive turning point that came later',
    battleSlug: 'battle-of-las-navas-de-tolosa',
    relationship: 'same-war',
    reason: 'Sagrajas brought the Almoravids into Iberia and froze the Christian advance; the same long struggle turned decisively at Las Navas de Tolosa in 1212, when a Christian coalition broke the Almoravids\' Almohad successors.'
  },
  relatedEntries: {
    people: [
      per('yusuf-ibn-tashfin', 'Yusuf ibn Tashfin', 'Victorious Almoravid emir'),
      per('alfonso-vi-of-leon-and-castile', 'Alfonso VI of León and Castile', 'Defeated Christian king')
    ],
    locations: [ loc('al-andalus', 'al-Andalus', 'The Muslim Iberia contested') ],
    houses: [ hse('almoravid-dynasty', 'Almoravid dynasty', 'The North African power that intervened') ]
  }
}

// ---------------------------------------------------------------- PERSON: Alfonso VI
const alfonso6 = {
  id: 'alfonso-vi-of-leon-and-castile', type: 'person', name: 'Alfonso VI of León and Castile',
  aliases: ['Alfonso VI', 'Alfonso VI of Castile', 'Alfonso the Brave', 'Alfonso el Bravo'],
  born: 'c. 1040', died: '1109', deathAge: 'about 69', restingPlace: 'Sahagún',
  birth: { date: 'c. 1040', place: 'Kingdom of León' },
  death: { date: '1 July 1109', place: 'Toledo' },
  location: 'León, Castile and Toledo, Iberia',
  image: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/AlfonsoVI_of_Castile.jpg',
  title: 'king of León, Castile and Galicia', isRuler: true,
  roles: ['King of León and Castile', 'Conqueror of Toledo'],
  epithets: [ { name: 'the Brave', type: 'epithet', note: 'Alfonso "el Bravo", the Brave or Valiant.' } ],
  summary: 'Alfonso VI reunited León, Castile and Galicia, captured Toledo in 1085, and styled himself emperor of Spain — but his triumph brought the Almoravids into Iberia and the great defeat of Sagrajas.',
  details: 'Ruling from 1065 in León and reuniting his father\'s realms by 1072, Alfonso VI dominated the taifa kings, took Toledo in 1085, and was beaten by the Almoravids at Sagrajas in 1086. He was also the sometime patron and antagonist of El Cid.',
  overview: 'Alfonso VI was the most powerful Christian ruler of eleventh-century Iberia, whose reign saw both the greatest advance of the Reconquista to that date and the reversal that followed it.',
  quickFacts: { realm: 'Kingdom of León and Castile', dynasty: 'Jiménez dynasty', culture: 'Leonese-Castilian', knownFor: 'The conquest of Toledo (1085)' },
  contentSections: [
    { title: 'Overview', paragraphs: [
      'Alfonso VI of León and Castile ruled from 1065 to 1109 and was the dominant Christian king of his age. He reunited the realms his father Ferdinand I had divided, imposed tribute on the Muslim taifa kingdoms, and in 1085 captured Toledo, the old Visigothic capital.',
      'His success was checked the next year at Sagrajas, where the newly arrived Almoravids destroyed his army. His reign thus spans both the high tide of eleventh-century Christian expansion and the reaction that halted it.'
    ]},
    { title: 'Reign and wars', paragraphs: [
      'Alfonso inherited León in 1065 and, after the deaths of his brothers Sancho II and García in the wars over their father\'s partitioned inheritance, reunited León, Castile and Galicia by 1072. He turned the taifa kings into tributaries, drawing vast wealth in parias, and in 1085 crowned this dominance with the conquest of Toledo.',
      'The taifa appeal to the Almoravids brought disaster at Sagrajas in 1086, and later defeats — including Uclés in 1108, where his only son Sancho was killed — clouded his last years. His relationship with the great Castilian warlord El Cid was famously stormy, marked by exile and reconciliation. He died in 1109, leaving his daughter Urraca to succeed.'
    ]},
    { title: 'Character and Personality', paragraphs: [
      'Alfonso VI comes across as an ambitious, calculating ruler, as ready to use and depose the taifa kings as to fight them, and grand enough to claim the title of "emperor of all Spain". His long manipulation of Toledo before taking it shows a patient, political style of conquest.',
      'He could also be harsh and proud — his quarrels with El Cid, whom he exiled, reveal a suspicious streak — yet he was pragmatic in ruling a mixed society, confirming protections for Muslims and Jews at Toledo. Contemporaries saw him as formidable, and his defeats wounded a reputation built on real achievement.'
    ]}
  ],
  keyAchievements: [
    'Reunited León, Castile and Galicia',
    'Captured Toledo in 1085',
    'Turned the taifa kingdoms into tributaries'
  ],
  timeline: [
    { date: 'c. 1040', title: 'Born', description: 'Son of Ferdinand I of León and Castile.' },
    { date: '1065', title: 'King of León', description: 'Inherited León on his father\'s death and the partition of the realm.' },
    { date: '1072', title: 'Reunited the realms', description: 'Reunited León, Castile and Galicia after his brothers\' deaths.' },
    { date: '1085', title: 'Conquest of Toledo', description: 'Captured the old Visigothic capital.' },
    { date: '1086', title: 'Battle of Sagrajas', description: 'Defeated by the Almoravids under Yusuf ibn Tashfin.' },
    { date: '1109', title: 'Died', description: 'Died at Toledo; succeeded by his daughter Urraca.' }
  ],
  succession: {
    office: 'King of León and Castile',
    predecessor: { displayName: 'Ferdinand I of León and Castile', note: 'His father, whose realm was divided among his sons.' },
    successor: { displayName: 'Urraca of León and Castile', note: 'His daughter.' }
  },
  imageInfo: {
    caption: 'Alfonso VI of León and Castile in a medieval-style royal portrait.',
    creator: 'Later depiction, Wikimedia Commons',
    date: 'Later royal depiction',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:AlfonsoVI_of_Castile.jpg',
    license: 'Public domain',
    note: 'No contemporary likeness survives.'
  },
  sources: [
    { title: 'Alfonso VI of León and Castile', author: 'Wikipedia', type: 'reference', url: 'https://en.wikipedia.org/wiki/Alfonso_VI_of_Le%C3%B3n_and_Castile' }
  ],
  relatedEntries: {
    events: [
      evt('conquest-of-toledo', 'Conquest of Toledo', 'His greatest conquest'),
      evt('battle-of-sagrajas', 'Battle of Sagrajas', 'His great defeat')
    ],
    locations: [
      loc('toledo', 'Toledo', 'The city he conquered'),
      loc('kingdom-of-leon', 'Kingdom of León', 'His realm'),
      loc('kingdom-of-castile', 'Kingdom of Castile', 'His realm')
    ]
  }
}

// ---------------------------------------------------------------- PERSON: Yusuf ibn Tashfin
const yusuf = {
  id: 'yusuf-ibn-tashfin', type: 'person', name: 'Yusuf ibn Tashfin',
  aliases: ['Yusuf ibn Tashufin', 'Yusuf Ibn Tashfin', 'Yusuf ben Tachfin'],
  born: 'c. 1009', died: '1106', deathAge: 'probably over 90', restingPlace: 'Marrakesh',
  birth: { date: 'c. 1009', place: 'the Sahara (Almoravid heartland)' },
  death: { date: '1106', place: 'Marrakesh' },
  location: 'Marrakesh and al-Andalus',
  image: 'https://upload.wikimedia.org/wikipedia/commons/7/7d/Yusuf_Ben_Tasfin_dinar_22562.jpg',
  title: 'Almoravid emir (Amir al-Muslimin)', isRuler: true,
  roles: ['Almoravid emir', 'Founder of Marrakesh', 'Victor of Sagrajas'],
  epithets: [ { name: 'Amir al-Muslimin', type: 'honorific', note: 'His title "Commander of the Muslims".' } ],
  summary: 'Yusuf ibn Tashfin was the Almoravid emir who built an empire spanning Morocco and al-Andalus, founded Marrakesh, won the Battle of Sagrajas in 1086, and then absorbed the taifa kingdoms of Muslim Spain.',
  details: 'A Sanhaja Berber leader of the Almoravid movement, Yusuf unified the Maghreb, founded Marrakesh as his capital, crossed into Iberia at the taifa kings\' request, crushed Alfonso VI at Sagrajas, and by the 1090s had annexed al-Andalus.',
  overview: 'Yusuf ibn Tashfin transformed a desert reform movement into the greatest power of the western Islamic world and reshaped the Reconquista by bringing North African arms into Spain.',
  quickFacts: { realm: 'Almoravid Empire', dynasty: 'Almoravid dynasty', culture: 'Sanhaja Berber', knownFor: 'Founding Marrakesh; victory at Sagrajas; uniting the Maghreb and al-Andalus' },
  contentSections: [
    { title: 'Overview', paragraphs: [
      'Yusuf ibn Tashfin was the emir who made the Almoravids a great power. A Sanhaja Berber from the Sahara, he unified Morocco, founded Marrakesh as his capital, and took the title Amir al-Muslimin, "Commander of the Muslims".',
      'Summoned into Iberia by the taifa kings after the fall of Toledo, he defeated Alfonso VI at Sagrajas in 1086 and, returning in the following years, deposed the taifa rulers and annexed al-Andalus to his empire — decisively altering the course of the Reconquista.'
    ]},
    { title: 'Empire and intervention in Iberia', paragraphs: [
      'Rising within the austere, reforming Almoravid movement of the western Sahara, Yusuf extended its power across Morocco and the Maghreb, founding Marrakesh around 1070 as the seat of his authority. By the 1080s he ruled the strongest state in the western Islamic world.',
      'When al-Mutamid of Seville and the other taifa kings, unable to resist Alfonso VI, appealed for aid, Yusuf crossed the strait and won the great victory of Sagrajas in 1086. Judging the taifa rulers weak and impious, he returned to depose them one by one, uniting Muslim Iberia under Almoravid rule before his death in 1106, when his son Ali ibn Yusuf succeeded him.'
    ]},
    { title: 'Character and Personality', paragraphs: [
      'The sources portray Yusuf as austere, disciplined and shrewd — a leader of a puritanical movement who lived plainly even as he ruled an empire, and who judged the luxurious taifa kings as much for their impiety as their weakness. His patience in consolidating the Maghreb before intervening in Iberia marks a careful strategist.',
      'He was also ruthless in pursuit of unity, turning on the very rulers who had invited him and stripping them of their kingdoms. To Andalusi and Christian observers alike he was a formidable and unsentimental figure, the embodiment of a new and harder power from across the strait.'
    ]}
  ],
  keyAchievements: [
    'Unified the Maghreb under the Almoravids',
    'Founded Marrakesh (c. 1070)',
    'Won the Battle of Sagrajas (1086) and annexed al-Andalus'
  ],
  timeline: [
    { date: 'c. 1009', title: 'Born', description: 'Born among the Sanhaja Berbers of the Sahara.' },
    { date: 'c. 1070', title: 'Founded Marrakesh', description: 'Established Marrakesh as the Almoravid capital.' },
    { date: '1086', title: 'Battle of Sagrajas', description: 'Defeated Alfonso VI of León and Castile.' },
    { date: '1090s', title: 'Annexed al-Andalus', description: 'Deposed the taifa kings and united Muslim Iberia under Almoravid rule.' },
    { date: '1106', title: 'Died', description: 'Died at Marrakesh; succeeded by his son Ali ibn Yusuf.' }
  ],
  succession: {
    office: 'Almoravid emir',
    predecessor: { displayName: 'Abu Bakr ibn Umar', note: 'His kinsman, who ceded leadership of the Almoravid west to him.' },
    successor: { displayName: 'Ali ibn Yusuf', note: 'His son.' }
  },
  imageInfo: {
    caption: 'A gold dinar struck in the name of Yusuf ibn Tashfin, emir of the Almoravids.',
    creator: 'Almoravid mint; photograph, Wikimedia Commons',
    date: 'Late 11th / early 12th century coin',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Yusuf_Ben_Tasfin_dinar_22562.jpg',
    license: 'Creative Commons',
    note: 'No portrait of Yusuf exists; his coinage is the closest contemporary trace.'
  },
  sources: [
    { title: 'Yusuf ibn Tashfin', author: 'Wikipedia', type: 'reference', url: 'https://en.wikipedia.org/wiki/Yusuf_ibn_Tashfin' }
  ],
  relatedEntries: {
    events: [ evt('battle-of-sagrajas', 'Battle of Sagrajas', 'His great victory in Iberia') ],
    houses: [ hse('almoravid-dynasty', 'Almoravid dynasty', 'The dynasty he led') ],
    locations: [ loc('al-andalus', 'al-Andalus', 'The Muslim Iberia he annexed') ]
  }
}

// ---------------------------------------------------------------- HOUSE: Almoravid dynasty
const almoravids = {
  id: 'almoravid-dynasty', type: 'house', name: 'Almoravid dynasty',
  aliases: ['Almoravids', 'al-Murabitun', 'Almoravid Empire'],
  originYear: 1040, endYear: 1147, reignSpan: '1040s–1147 (Maghreb and al-Andalus)',
  region: 'The Maghreb & al-Andalus', originPlace: 'The western Sahara',
  arms: 'Almoravid gold dinar coinage',
  image: fp('Almoravid%20gold%20dinar%20coin%20from%20Seville%2C%20Spain%2C%201116%20British%20Museum.jpg'),
  summary: 'The Berber dynasty and empire that rose from a Saharan reform movement to rule Morocco and Muslim Spain in the late eleventh and early twelfth centuries, checking the Reconquista before falling to the Almohads.',
  overview: 'The Almoravids (al-Murabitun) built the first great Berber empire of the western Islamic world, uniting the Maghreb and al-Andalus under a strict Sunni banner from their capital at Marrakesh.',
  founder: { personSlug: 'yusuf-ibn-tashfin', displayName: 'Yusuf ibn Tashfin', note: 'The emir who forged the empire; the movement\'s religious founder was Abdallah ibn Yasin.' },
  seats: ['Marrakesh', 'Seville'],
  notableMembers: [
    { personSlug: 'yusuf-ibn-tashfin', displayName: 'Yusuf ibn Tashfin', note: 'Great emir; victor of Sagrajas; founder of Marrakesh.' },
    { displayName: 'Ali ibn Yusuf', note: 'His son; ruled the empire at its height (r. 1106–1143).' },
    { displayName: 'Tashfin ibn Ali', note: 'Late Almoravid ruler, defeated by the Almohads.' }
  ],
  familyTree: {},
  contentSections: [
    { title: 'Overview', paragraphs: [
      'The Almoravid dynasty, in Arabic al-Murabitun, arose from a puritanical Sunni reform movement among the Sanhaja Berbers of the western Sahara in the mid-eleventh century. Under Yusuf ibn Tashfin it became an empire spanning Morocco and, after 1086, Muslim Spain.',
      'From their capital at Marrakesh the Almoravids ruled a vast territory on both sides of the Strait of Gibraltar, imposing a stricter religious order on the sophisticated society of al-Andalus and holding back the Christian advance for a generation.'
    ]},
    { title: 'Rise and fall', paragraphs: [
      'Called into Iberia by the taifa kings, the Almoravids won at Sagrajas in 1086 and then absorbed the taifa kingdoms themselves, uniting al-Andalus under their rule. At their height under Ali ibn Yusuf the empire was the dominant power of the western Mediterranean.',
      'By the 1140s Almoravid power was crumbling under a new Berber reform movement, the Almohads, who took Marrakesh in 1147 and destroyed the dynasty, inheriting its empire in both the Maghreb and Spain.'
    ]}
  ],
  timeline: [
    { date: 'c. 1040', title: 'Movement founded', description: 'The Almoravid reform movement begins among the Saharan Sanhaja.' },
    { date: '1086', title: 'Battle of Sagrajas', description: 'Almoravid victory over Alfonso VI opens their intervention in Iberia.' },
    { date: '1147', title: 'Fall to the Almohads', description: 'The Almohads take Marrakesh and end the dynasty.' }
  ],
  imageInfo: {
    caption: 'An Almoravid gold dinar struck at Seville (1116), coinage of the dynasty that ruled Morocco and al-Andalus.',
    creator: 'Almoravid mint; British Museum, Wikimedia Commons',
    date: '1116 coin',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Almoravid_gold_dinar_coin_from_Seville,_Spain,_1116_British_Museum.jpg',
    license: 'Creative Commons',
    note: 'Almoravid dinars set the standard for gold coinage across the medieval western Mediterranean.'
  },
  sources: [
    { title: 'Almoravid dynasty', author: 'Wikipedia', type: 'reference', url: 'https://en.wikipedia.org/wiki/Almoravid_dynasty' }
  ],
  relatedEntries: {
    people: [ per('yusuf-ibn-tashfin', 'Yusuf ibn Tashfin', 'The dynasty\'s great emir') ],
    events: [ evt('battle-of-sagrajas', 'Battle of Sagrajas', 'The victory that opened their rule in Iberia') ],
    locations: [ loc('al-andalus', 'al-Andalus', 'The Muslim Iberia they came to rule') ]
  }
}

// ---------------------------------------------------------------- LOCATION: Toledo
const toledo = {
  id: 'toledo', type: 'location', locationType: 'city', name: 'Toledo',
  aliases: ['Toletum', 'Tulaytulah'],
  year: 'ancient–medieval', image: fp('Mezquita%20de%20Bab%20al-Mardum%20(Toledo).jpg'),
  summary: 'The old Visigothic capital on the Tagus, a great taifa city taken by Alfonso VI in 1085 and thereafter a Christian stronghold and famous centre of translation.',
  overview: 'Toledo, set on a rocky bend of the Tagus in the centre of Iberia, was capital of the Visigoths, then a leading Muslim taifa, and after 1085 the primatial see of Christian Spain.',
  knownFor: 'The Visigothic capital, the taifa of Toledo, and its conquest by Alfonso VI in 1085',
  contentSections: [
    { title: 'Overview', paragraphs: [
      'Toledo stands on a granite height almost encircled by the river Tagus in the centre of the Iberian Peninsula, a natural fortress that made it a capital in every age. It was the seat of the Visigothic kings, and under Muslim rule the centre of one of the strongest taifa kingdoms.',
      'Its capture by Alfonso VI in 1085 was the great symbolic prize of the eleventh-century Reconquista, restoring the old royal capital to Christian rule and giving Castile a fortress-city at the heart of the peninsula.'
    ]},
    { title: 'A city of three cultures', paragraphs: [
      'After 1085 Toledo became the primatial archiepiscopal see of Spain, yet it retained large Muslim and Jewish communities, and its surviving medieval fabric — Visigothic, Islamic and Christian — reflects that layered history. The little mosque of Bab al-Mardum, built in 999 and later a church, is one of its finest Islamic monuments.',
      'In the twelfth and thirteenth centuries Toledo became famous as a centre of translation, where scholars rendered Arabic and Hebrew works of philosophy and science into Latin, channelling much of the learning of al-Andalus into Christian Europe.'
    ]}
  ],
  timeline: [
    { date: '1085', title: 'Conquest of Toledo', description: 'Alfonso VI takes the city from its taifa ruler.' }
  ],
  imageInfo: {
    caption: 'The mosque of Bab al-Mardum (Cristo de la Luz), built in Toledo in 999 — a surviving Islamic monument of the medieval city.',
    creator: 'Photograph, Wikimedia Commons',
    date: 'Mosque built 999',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Mezquita_de_Bab_al-Mardum_(Toledo).jpg',
    license: 'Creative Commons',
    note: 'A medieval Islamic building of Toledo, later converted to a church; not a modern cityscape.'
  },
  sources: [
    { title: 'Toledo, Spain', author: 'Wikipedia', type: 'reference', url: 'https://en.wikipedia.org/wiki/Toledo,_Spain' }
  ],
  relatedEntries: {
    events: [
      evt('conquest-of-toledo', 'Conquest of Toledo', 'Taken by Alfonso VI in 1085'),
      evt('battle-of-sagrajas', 'Battle of Sagrajas', 'The Almoravid response its fall provoked')
    ],
    people: [ per('alfonso-vi-of-leon-and-castile', 'Alfonso VI of León and Castile', 'Conquered the city') ],
    locations: [ loc('al-andalus', 'al-Andalus', 'The Muslim Iberia it belonged to') ]
  }
}

const results = []
results.push(['event', toledoConquest.name, upsert(data.events, toledoConquest)])
results.push(['event', sagrajas.name, upsert(data.events, sagrajas)])
results.push(['person', alfonso6.name, upsert(data.characters, alfonso6)])
results.push(['person', yusuf.name, upsert(data.characters, yusuf)])
results.push(['house', almoravids.name, upsert(data.houses, almoravids)])
results.push(['location', toledo.name, upsert(data.locations, toledo)])

// Rewire Simancas continuity forward to Sagrajas (nearest later Reconquista battle now in the archive).
const sim = data.events.find(e => e.id === 'battle-of-simancas')
if (sim) {
  sim.battleContinuity = {
    label: 'The Almoravid intervention that came next',
    battleSlug: 'battle-of-sagrajas',
    relationship: 'chronological-follow-up',
    reason: 'Simancas was the tenth-century high point of Christian arms against Córdoba; the next great turn came in 1086 at Sagrajas, when the Almoravids entered Iberia and checked the Christian advance after the fall of Toledo.'
  }
  sim.relatedEntries = sim.relatedEntries || {}
  const evs = sim.relatedEntries.events = sim.relatedEntries.events || []
  if (!evs.some(e => e.slug === 'battle-of-sagrajas')) evs.push(evt('battle-of-sagrajas', 'Battle of Sagrajas', 'The next great turn in the struggle'))
  results.push(['rewire', 'Simancas → Sagrajas', 'updated'])
}

fs.writeFileSync(dataPath, JSON.stringify(data, null, 2))
for (const [type, name, action] of results) console.log(`${action.padEnd(8)} ${type.padEnd(9)} ${name}`)
console.log('\nDone. Run gen-entity-links + gates.')
