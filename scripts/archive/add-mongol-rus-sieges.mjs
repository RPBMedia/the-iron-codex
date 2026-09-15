// Mongol invasions — Batch 2: the destruction of the Rus' principalities,
// 1237–1240. Siege of Ryazan → Siege of Vladimir → Battle of the Sit River →
// Siege of Kyiv, chained by battleContinuity into the Kalka/Mohi arc. Idempotent
// upsert. Reuses batu-khan, subutai, house-of-borjigin, kievan-rus, novgorod,
// alexander-nevsky, battle-of-the-kalka-river, battle-of-mohi.
import { readFileSync, writeFileSync } from 'node:fs'

const dataPath = new URL('../server/data/history.json', import.meta.url)
const data = JSON.parse(readFileSync(dataPath, 'utf8'))

const per = (slug, title, label) => ({ title, type: 'person', slug, label })
const loc = (slug, title, label) => ({ title, type: 'location', slug, label })
const evt = (slug, title, label) => ({ title, type: 'event', slug, label })

// Mongol side factions/leaders reused across the campaign.
const mongolFactions = [{ name: 'Mongol Empire', title: 'House of Borjigin', type: 'house', slug: 'house-of-borjigin' }]
const CONFLICT = 'Mongol invasion of the Rus’ (1237–1240)'

const sourcesRus = [
  { title: 'The Chronicle of Novgorod, 1016–1471', author: 'trans. Michell & Forbes', type: 'primary source' },
  { title: 'The Mongol Invasion of Russia in the 13th Century', author: 'George Vernadsky (and later surveys)', type: 'book' },
  { title: 'Encyclopaedia Britannica: Mongol invasion of Russia', author: 'Encyclopaedia Britannica', type: 'reference work', url: 'https://www.britannica.com/event/Mongol-invasion-of-Russia' }
]

const ryazan = {
  id: 'siege-of-ryazan', type: 'event', name: 'Siege of Ryazan', year: 1237,
  aliases: ['Sack of Ryazan', 'Fall of Ryazan'],
  location: 'Rus’ (Ryazan)', eventType: 'Siege', conflict: CONFLICT,
  image: 'https://upload.wikimedia.org/wikipedia/commons/6/61/RYAZAN.JPG',
  imageInfo: { caption: 'A Russian chronicle depiction of the Mongol storm of Ryazan.', creator: 'Unknown', date: 'later chronicle illumination', source: 'Wikimedia Commons', sourceUrl: 'https://commons.wikimedia.org/wiki/File:RYAZAN.JPG', note: 'A later illuminated-chronicle image; not a contemporary eyewitness view.' },
  summary: 'In December 1237 the army of Batu Khan opened its conquest of the Rus’ by storming the frontier city of Ryazan after a five-day assault, sacking it and massacring its people — a deliberate act of terror that set the pattern for the campaign.',
  details: 'Ryazan had refused Batu’s demand for a tenth of everything; when its appeal for help to Vladimir went unanswered, it faced the Mongols alone.',
  eventLocation: { name: 'Ryazan' },
  background: [
    'After the reconnaissance victory at the Kalka River in 1223, the Mongols returned in overwhelming force in 1237 under Batu Khan and the general Subutai, some 100,000 or more horsemen crossing the Volga to conquer the Rus’ principalities.',
    'The disunited princes could not combine. When Batu demanded submission and tribute, Ryazan refused and begged the grand prince of Vladimir for aid, which did not come in time.'
  ],
  battle: 'The Mongols surrounded Ryazan with a stockade and battered it with siege engines for five days before storming the walls on 21 December 1237.',
  outcome: 'Decisive Mongol victory; Ryazan was sacked and its population slaughtered.',
  aftermath: 'Old Ryazan never fully recovered and the town was later refounded elsewhere. The road into the heart of the Rus’ lay open.',
  contentSections: [
    { title: 'Overview', paragraphs: ['The siege of Ryazan in December 1237 was the opening blow of the Mongol conquest of the Rus’. The city was stormed after five days and annihilated, a calculated massacre meant to terrify the other principalities into submission.'] },
    { title: 'Background', paragraphs: ['The Mongols who had beaten the Rus’ at the Kalka River in 1223 returned in 1237 in vast strength under Batu and Subutai. The Rus’ principalities, chronically divided, faced them one at a time. Ryazan, first in the invaders’ path, refused Batu’s demand for submission and tribute and appealed in vain to Vladimir for help.'] },
    { title: 'The siege', paragraphs: ['The Mongols encircled Ryazan, cut it off with a palisade, and pounded the walls with catapults for five days. On 21 December 1237 they stormed the city. The prince, his family, and the population were massacred, the churches burned, and the town left in ruins.', 'Russian tradition remembers the boyar Evpaty Kolovrat, who is said to have returned to the smoking ruins, raised a small band, and harried the Mongol army in revenge — a legend expressing the shock of the catastrophe.'] },
    { title: 'Aftermath', paragraphs: ['Ryazan’s destruction opened the road north. Within weeks Batu’s army moved on Kolomna and Moscow and then toward Vladimir, the capital of the strongest Rus’ principality, spreading the same terror as it went.'] }
  ],
  participants: [
    { side: 'Principality of Ryazan', factions: [{ name: 'Ryazan and the Rus’ principalities', title: 'Kievan Rus’', type: 'location', slug: 'kievan-rus' }],
      leaders: [{ name: 'Yuri Igorevich of Ryazan', title: 'Prince of Ryazan' }],
      strength: { display: 'The city garrison and levy; no reliable figure', confidence: 'debated', note: 'Chronicle numbers for Ryazan’s defenders are not trustworthy; the city stood essentially alone.' } },
    { side: 'Mongol Empire', factions: mongolFactions,
      leaders: [{ name: 'Batu Khan', title: 'Batu Khan', type: 'person', slug: 'batu-khan' }, { name: 'Subutai', title: 'Subutai', type: 'person', slug: 'subutai' }],
      strength: { display: 'The main western horde (perhaps 100,000+); estimates vary', confidence: 'estimated', note: 'The size of Batu’s army is debated; medieval and modern estimates range widely.' } }
  ],
  leaders: [
    { name: 'Yuri Igorevich of Ryazan', faction: 'Principality of Ryazan' },
    { name: 'Batu Khan', faction: 'Mongol Empire', personId: 'batu-khan' },
    { name: 'Subutai', faction: 'Mongol Empire', personId: 'subutai' }
  ],
  factions: ['Principality of Ryazan', 'Mongol Empire'],
  battleContinuity: { label: 'The horde marches on the capital', battleSlug: 'siege-of-vladimir', relationship: 'same-campaign', reason: 'After sacking Ryazan, Batu’s army pushed north through Kolomna and Moscow to besiege Vladimir, the capital of the grand principality, in February 1238.' },
  relatedEntries: {
    people: [per('batu-khan', 'Batu Khan'), per('subutai', 'Subutai'), per('alexander-nevsky', 'Alexander Nevsky')],
    events: [evt('battle-of-the-kalka-river', 'Battle of the Kalka River'), evt('siege-of-vladimir', 'Siege of Vladimir'), evt('siege-of-kyiv', 'Siege of Kyiv')],
    locations: [loc('kievan-rus', 'Kievan Rus’')]
  },
  sources: sourcesRus
}

const vladimir = {
  id: 'siege-of-vladimir', type: 'event', name: 'Siege of Vladimir', year: 1238,
  aliases: ['Sack of Vladimir', 'Fall of Vladimir'],
  location: 'Rus’ (Vladimir)', eventType: 'Siege', conflict: CONFLICT,
  image: 'https://upload.wikimedia.org/wikipedia/commons/2/27/Mongols_vladimir.jpg',
  imageInfo: { caption: 'The Mongol storm of Vladimir, in a Russian chronicle miniature.', creator: 'Unknown', date: 'later chronicle illumination', source: 'Wikimedia Commons', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Mongols_vladimir.jpg', note: 'A later illuminated-chronicle image of the sack.' },
  summary: 'In February 1238 the Mongols took Vladimir, capital of the strongest Rus’ principality. The grand prince was away raising an army; the city fell in days and his family perished in the flames of its cathedral.',
  details: 'Vladimir-Suzdal was the leading power of northern Rus’; its fall broke the last centre of resistance in the north-east.',
  eventLocation: { name: 'Vladimir' },
  background: [
    'After Ryazan, Batu’s army destroyed the relieving force at Kolomna and burned Moscow, then advanced on Vladimir, seat of Grand Prince Yuri II of Vladimir-Suzdal — the strongest ruler of the northern Rus’.',
    'Yuri left the city to gather an army in the north, entrusting Vladimir to his sons and its garrison.'
  ],
  battle: 'The Mongols invested Vladimir on 3 February 1238, breached the walls with engines, and stormed the city on 7 February.',
  outcome: 'Decisive Mongol victory; the capital was sacked and burned.',
  aftermath: 'The grand prince’s wife and family died when the Assumption Cathedral, where they had taken refuge, was set ablaze. Batu then turned to hunt down Yuri II himself.',
  contentSections: [
    { title: 'Overview', paragraphs: ['The siege of Vladimir in February 1238 destroyed the capital of the most powerful principality of northern Rus’. The city fell in days, and the grand prince’s family died in the burning cathedral, breaking organised resistance in the north-east.'] },
    { title: 'Background', paragraphs: ['From the ruins of Ryazan the Mongols swept north, wiping out a Rus’ army at Kolomna and burning Moscow. Grand Prince Yuri II of Vladimir left his capital to raise fresh forces in the north, leaving Vladimir to his sons and its defenders.'] },
    { title: 'The siege', paragraphs: ['Batu’s army surrounded Vladimir on 3 February 1238 and brought up siege engines. Within days the walls were breached, and on 7 February the Mongols stormed in. The princes fell, and the grand princess and her family, sheltering in the Cathedral of the Assumption, perished when it was fired.', 'The great churches and the treasures of the city were destroyed, and much of the population was killed or enslaved.'] },
    { title: 'Aftermath', paragraphs: ['With Vladimir gone, Batu detached forces to run down the grand prince, who was gathering an army to the north on the Sit River. The two would meet there in March 1238.'] }
  ],
  participants: [
    { side: 'Grand Principality of Vladimir', factions: [{ name: 'Vladimir-Suzdal', title: 'Kievan Rus’', type: 'location', slug: 'kievan-rus' }],
      leaders: [{ name: 'Prince Vsevolod Yurievich', title: 'Son of the grand prince' }],
      strength: { display: 'The city garrison; no reliable figure', confidence: 'debated', note: 'The grand prince and the field army were absent; only the garrison held the walls.' } },
    { side: 'Mongol Empire', factions: mongolFactions,
      leaders: [{ name: 'Batu Khan', title: 'Batu Khan', type: 'person', slug: 'batu-khan' }],
      strength: { display: 'The main western horde; estimates vary', confidence: 'estimated', note: 'Part of Batu’s army; exact numbers unknown.' } }
  ],
  leaders: [
    { name: 'Vsevolod Yurievich', faction: 'Grand Principality of Vladimir' },
    { name: 'Batu Khan', faction: 'Mongol Empire', personId: 'batu-khan' }
  ],
  factions: ['Grand Principality of Vladimir', 'Mongol Empire'],
  battleContinuity: { label: 'Run down the grand prince', battleSlug: 'battle-of-the-sit-river', relationship: 'same-campaign', reason: 'After taking Vladimir, the Mongols pursued Grand Prince Yuri II, who was assembling an army to the north, and destroyed it at the Sit River in March 1238.' },
  relatedEntries: {
    people: [per('batu-khan', 'Batu Khan'), per('subutai', 'Subutai'), per('alexander-nevsky', 'Alexander Nevsky')],
    events: [evt('siege-of-ryazan', 'Siege of Ryazan'), evt('battle-of-the-sit-river', 'Battle of the Sit River')],
    locations: [loc('kievan-rus', 'Kievan Rus’')]
  },
  sources: sourcesRus
}

const sit = {
  id: 'battle-of-the-sit-river', type: 'event', name: 'Battle of the Sit River', year: 1238,
  aliases: ['Battle of the Sit', 'Battle on the Sit River'],
  location: 'Rus’ (Sit River)', eventType: 'Battle', conflict: CONFLICT,
  image: 'https://upload.wikimedia.org/wikipedia/commons/a/a2/%D0%91%D0%B8%D1%82%D0%B2%D0%B0_%D0%BD%D0%B0_%D1%80%D0%B5%D0%BA%D0%B5_%D0%A1%D0%B8%D1%82%D1%8C%2C_%D0%BC%D0%B8%D0%BD%D0%B8%D0%B0%D1%82%D1%8E%D1%80%D0%B0_%D0%B8%D0%B7_%D0%96%D0%B8%D1%82%D0%B8%D1%8F_%D0%95%D1%84%D1%80%D0%BE%D1%81%D0%B8%D0%BD%D0%B8%D0%B8_%D0%A1%D1%83%D0%B7%D0%B4%D0%B0%D0%BB%D1%8C%D1%81%D0%BA%D0%BE%D0%B9.jpg',
  imageInfo: { caption: 'The Battle of the Sit River, in a Russian hagiographic miniature.', creator: 'Unknown', date: 'later miniature', source: 'Wikimedia Commons', sourceUrl: 'https://commons.wikimedia.org/wiki/File:%D0%91%D0%B8%D1%82%D0%B2%D0%B0_%D0%BD%D0%B0_%D1%80%D0%B5%D0%BA%D0%B5_%D0%A1%D0%B8%D1%82%D1%8C.jpg', note: 'A later illuminated depiction from the Life of Euphrosyne of Suzdal.' },
  summary: 'On 4 March 1238, on the frozen Sit River, a Mongol column caught and destroyed the army Grand Prince Yuri II of Vladimir had gathered to fight back. Yuri was killed, and organised resistance in northern Rus’ collapsed.',
  details: 'The battle ended the house of Vladimir-Suzdal as a fighting power and confirmed the Mongol conquest of the north-east.',
  eventLocation: { name: 'The Sit River' },
  background: [
    'After the fall of Vladimir, Grand Prince Yuri II encamped on the Sit River, north-west of the ruined capital, waiting for reinforcements from his brothers and nephews before turning on the invaders.',
    'A Mongol column under the general Burundai found his camp before his forces were fully assembled.'
  ],
  battle: 'The Mongols fell on the unprepared Rus’ camp on 4 March 1238 and overwhelmed it; the grand prince’s army was scattered and destroyed.',
  outcome: 'Decisive Mongol victory; Grand Prince Yuri II was killed.',
  aftermath: 'With Yuri dead, the northern principalities submitted or lay in ruins. The Mongols turned back south, sparing Novgorod — saved by distance and the spring thaw — and withdrew to the steppe to regroup.',
  contentSections: [
    { title: 'Overview', paragraphs: ['The Battle of the Sit River on 4 March 1238 destroyed the last field army of northern Rus’ and killed Grand Prince Yuri II of Vladimir, sealing the Mongol conquest of the north-east.'] },
    { title: 'Background', paragraphs: ['After Vladimir fell, Yuri II gathered what forces he could on the Sit River, hoping to unite the contingents of his kinsmen before striking back. But the Mongols moved faster than he expected, and a column under Burundai located his camp before his army was ready.'] },
    { title: 'The battle', paragraphs: ['On 4 March 1238 the Mongols surprised and surrounded the Rus’ on the frozen river. Caught unprepared, Yuri’s army was routed and cut to pieces, and the grand prince himself was killed in the slaughter.', 'The defeat left the principalities of the north-east without a leader or an army.'] },
    { title: 'Aftermath', paragraphs: ['The Mongols pressed on toward Novgorod but turned back short of the great trading city as the spring thaw made the marshy roads impassable, sparing it the fate of Vladimir. Batu withdrew to the southern steppe to rest his horses and prepare the next phase — the destruction of southern Rus’ and the invasion of Europe.'] }
  ],
  participants: [
    { side: 'Grand Principality of Vladimir', factions: [{ name: 'Vladimir-Suzdal', title: 'Kievan Rus’', type: 'location', slug: 'kievan-rus' }],
      leaders: [{ name: 'Yuri II of Vladimir', title: 'Grand Prince of Vladimir' }],
      strength: { display: 'A hastily gathered army; figures unreliable', confidence: 'debated', note: 'The grand prince was still assembling his forces; chronicle numbers are not dependable.' } },
    { side: 'Mongol Empire', factions: mongolFactions,
      leaders: [{ name: 'Burundai', title: 'Mongol general' }, { name: 'Batu Khan', title: 'Batu Khan', type: 'person', slug: 'batu-khan' }],
      strength: { display: 'A Mongol column under Burundai; size unknown', confidence: 'debated', note: 'A detached corps of Batu’s army; no reliable count survives.' } }
  ],
  leaders: [
    { name: 'Yuri II of Vladimir', faction: 'Grand Principality of Vladimir' },
    { name: 'Burundai', faction: 'Mongol Empire' },
    { name: 'Batu Khan', faction: 'Mongol Empire', personId: 'batu-khan' }
  ],
  factions: ['Grand Principality of Vladimir', 'Mongol Empire'],
  battleContinuity: { label: 'South to the mother of cities', battleSlug: 'siege-of-kyiv', relationship: 'same-campaign', reason: 'After crushing the north-east, Batu rested and then turned against southern Rus’, storming Kyiv in 1240 before invading Europe.' },
  relatedEntries: {
    people: [per('batu-khan', 'Batu Khan'), per('subutai', 'Subutai'), per('alexander-nevsky', 'Alexander Nevsky')],
    events: [evt('siege-of-vladimir', 'Siege of Vladimir'), evt('siege-of-kyiv', 'Siege of Kyiv')],
    locations: [loc('kievan-rus', 'Kievan Rus’'), loc('novgorod', 'Novgorod')]
  },
  sources: sourcesRus
}

const kyiv = {
  id: 'siege-of-kyiv', type: 'event', name: 'Siege of Kyiv', year: 1240,
  aliases: ['Siege of Kiev', 'Sack of Kyiv', 'Fall of Kyiv (1240)'],
  location: 'Rus’ (Kyiv)', eventType: 'Siege', conflict: CONFLICT,
  image: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Siege_of_Kiev_%281240%29.png',
  imageInfo: { caption: 'The Mongol storm of Kyiv in 1240.', creator: 'Unknown', date: 'later depiction', source: 'Wikimedia Commons', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Siege_of_Kiev_(1240).png', note: 'A later depiction of the fall of the city.' },
  summary: 'In late 1240 Batu Khan stormed Kyiv, the “mother of Rus’ cities”, after a fierce assault. The great city was sacked and largely destroyed, ending the golden age of Kievan Rus’ and opening the road into Latin Europe.',
  details: 'Kyiv’s fall marked the end of Kievan Rus’ as a political centre and the start of the Mongol invasion of Poland and Hungary.',
  eventLocation: { name: 'Kyiv' },
  background: [
    'Having subdued the north-east and rested on the steppe, Batu turned in 1240 to southern Rus’, taking Pereyaslavl and Chernigov before reaching Kyiv — still the greatest and most storied city of the Rus’, though no longer their political master.',
    'The city was held for Prince Danylo of Galicia by the voivode Dmytro; the prince himself was absent seeking allies in the west.'
  ],
  battle: 'The Mongols encircled Kyiv and battered its walls with a great concentration of siege engines. When the ramparts fell the defenders held a last stand at the Church of the Tithes, which collapsed under the weight of people and the assault.',
  outcome: 'Decisive Mongol victory; Kyiv was stormed and destroyed.',
  aftermath: 'Kyiv was left a ruin, its population slaughtered or enslaved; a papal envoy passing years later found only a few hundred houses. With southern Rus’ subdued, Batu and Subutai advanced into Poland and Hungary in 1241.',
  contentSections: [
    { title: 'Overview', paragraphs: ['The siege of Kyiv in 1240 destroyed the greatest city of the Rus’ and ended the era of Kievan Rus’. Its fall cleared the way for the Mongol invasion of Poland and Hungary the following year.'] },
    { title: 'Background', paragraphs: ['After conquering the north-east in 1238, Batu spent a year on the steppe before turning on southern Rus’ in 1240. Pereyaslavl and Chernigov fell, and the horde closed on Kyiv — a city past its political prime but still vast, wealthy, and revered as the cradle of Rus’ Christianity. It was held by the voivode Dmytro for the absent Danylo of Galicia.'] },
    { title: 'The siege', paragraphs: ['The Mongols massed their siege engines against the walls and kept up a battering that, the chronicles say, never ceased day or night. When the ramparts were breached the defenders fell back to the inner city and made a final stand around the Church of the Tithes, which collapsed under the press of people who had climbed onto it for refuge.', 'The city was stormed, sacked, and burned; the wounded Dmytro was spared by Batu for his courage.'] },
    { title: 'Aftermath', paragraphs: ['Kyiv was left desolate — when the friar John of Plano Carpini rode through a few years later he counted barely two hundred houses standing amid the bones of the dead. With the Rus’ crushed, the Mongols crossed into Latin Europe in 1241, defeating the Poles at Legnica and destroying the Hungarian army at the Battle of Mohi.'] }
  ],
  participants: [
    { side: 'Kyiv (for Galicia-Volhynia)', factions: [{ name: 'Kievan Rus’', title: 'Kievan Rus’', type: 'location', slug: 'kievan-rus' }],
      leaders: [{ name: 'Voivode Dmytro', title: 'Commander of Kyiv’s defence' }],
      strength: { display: 'The city garrison and townsfolk; no reliable figure', confidence: 'debated', note: 'The defenders were overwhelmingly outnumbered; chronicle figures are unreliable.' } },
    { side: 'Mongol Empire', factions: mongolFactions,
      leaders: [{ name: 'Batu Khan', title: 'Batu Khan', type: 'person', slug: 'batu-khan' }, { name: 'Subutai', title: 'Subutai', type: 'person', slug: 'subutai' }],
      strength: { display: 'The main Mongol horde; estimates vary', confidence: 'estimated', note: 'A very large army with a heavy siege train; exact numbers are debated.' } }
  ],
  leaders: [
    { name: 'Voivode Dmytro', faction: 'Kyiv (for Galicia-Volhynia)' },
    { name: 'Batu Khan', faction: 'Mongol Empire', personId: 'batu-khan' },
    { name: 'Subutai', faction: 'Mongol Empire', personId: 'subutai' }
  ],
  factions: ['Kyiv (for Galicia-Volhynia)', 'Mongol Empire'],
  battleContinuity: { label: 'On into Europe', battleSlug: 'battle-of-mohi', relationship: 'same-war', reason: 'With Kyiv destroyed and the Rus’ subdued, Batu and Subutai invaded Latin Europe in 1241, destroying the Hungarian royal army at the Battle of Mohi.' },
  relatedEntries: {
    people: [per('batu-khan', 'Batu Khan'), per('subutai', 'Subutai'), per('mstislav-the-bold', 'Mstislav the Bold')],
    events: [evt('battle-of-the-sit-river', 'Battle of the Sit River'), evt('battle-of-mohi', 'Battle of Mohi'), evt('battle-of-the-kalka-river', 'Battle of the Kalka River')],
    locations: [loc('kievan-rus', 'Kievan Rus’'), loc('novgorod', 'Novgorod')]
  },
  sources: sourcesRus
}

const upsert = (e) => {
  const i = data.events.findIndex((x) => x.id === e.id)
  if (i >= 0) { data.events[i] = e; return 'updated' }
  data.events.push(e); return 'added'
}

for (const e of [ryazan, vladimir, sit, kyiv]) console.log('events:', upsert(e), e.id)
writeFileSync(dataPath, JSON.stringify(data, null, 2))
console.log(`events collection now has ${data.events.length}`)
