/**
 * Constantinople, rewritten.
 *
 * The owner read the article and objected that the most important city in the
 * medieval world had a stub. He was right: three sections, about 1,380 characters
 * of prose, no timeline, and a source list whose third entry was a generic link to
 * "Middle Ages". Every siege article in Track A is longer than the article about
 * the thing being besieged.
 *
 * This replaces the body wholesale: ten sections, a fourteen-entry timeline from
 * the foundation of 330 to the conquest of 1453 and after, three section images,
 * and related entries that actually connect to the material the archive has built
 * around it — four sieges, six emperors, the Latin Empire and Nicaea.
 *
 * The primary image is kept. The 1422 delineation is a genuinely good choice: it
 * derives from Cristoforo Buondelmonti's survey, which is the earliest surviving
 * map of the city and was made thirty-one years before the conquest.
 *
 * Section images avoid everything already in use elsewhere in the archive — the
 * layered walls photograph belongs to the 626 siege, the Komnenian mosaics to the
 * house of Komnenos, and Hagia Eirene's apse to the Isaurian dynasty.
 */
import { readFileSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dataPath = path.join(__dirname, '../server/data/history.json')
const data = JSON.parse(readFileSync(dataPath, 'utf8'))
const S = (title, ...paragraphs) => ({ title, paragraphs })
const img = (f) => `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(f)}`

const c = data.locations.find((l) => l.id === 'constantinople')
const before = (c.contentSections ?? []).reduce((n, s) => n + s.paragraphs.join(' ').length, 0)

c.aliases = ['Byzantium', 'New Rome', 'Konstantinoupolis', 'Tsargrad', 'The Queen of Cities', 'Istanbul']

c.summary = 'Constantinople was the capital of the Roman and Byzantine empires for eleven centuries — the largest, richest and most heavily fortified city in medieval Europe, and the one every power around it wanted.'

c.overview = [
  'Founded by Constantine I in 330 on the site of the Greek colony of Byzantion, the city commanded the Bosphorus, the only sea route between the Mediterranean and the Black Sea, and the land route between Europe and Asia.',
  'Its walls were never taken by assault until 1453, and the two occasions on which it fell — to the Fourth Crusade in 1204 and to Mehmed II in 1453 — both changed the shape of the world around it.'
]

c.knownFor = [
  'Capital of the Roman and Byzantine empires from 330 to 1453.',
  'The Theodosian Walls, which no besieger broke by assault for a thousand years.',
  'Hagia Sophia, the largest church in Christendom for nine hundred years.',
  'Survived sieges by Avars, Persians, Arabs, Rus\', Bulgars and Ottomans.',
  'Sacked by the Fourth Crusade in 1204 and never recovered its size or wealth.',
  'Taken by Mehmed II in 1453, ending the Roman Empire after fifteen hundred years.'
]

c.sectionImages = [
  {
    section: 'The walls',
    src: img('Theodosian Walls of Constantinople, Istanbul (24053561188).jpg'),
    caption: 'A surviving stretch of the Theodosian land walls, showing the alternating courses of stone and brick that gave them their flexibility.',
    creator: 'Carole Raddato',
    date: 'photographed 2017; the walls built 408–413',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Theodosian_Walls_of_Constantinople,_Istanbul_(24053561188).jpg',
    note: 'The brick courses are not decoration: they bind the rubble core and let the wall flex in earthquakes, which is part of why so much of it is still standing. Licensed CC BY-SA 2.0.'
  },
  {
    section: 'Hagia Sophia',
    src: img('Hagia Sophia (228968325).jpeg'),
    caption: 'Hagia Sophia, built for Justinian I between 532 and 537, with the minarets added after the Ottoman conquest.',
    creator: 'Wikimedia Commons contributor',
    date: 'photographed in the modern era; the church of 532–537',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Hagia_Sophia_(228968325).jpeg',
    note: 'The four minarets are Ottoman and post-date 1453, and the buttresses are medieval and later repairs — the building has never stopped being modified. What is original is the dome and the plan beneath it. Licensed CC BY-SA 4.0.'
  },
  {
    section: 'The city as a machine',
    src: img('Cisterna Basílica, Estambul, Turquía, 2024-09-28, DD 58-60 HDR.jpg'),
    caption: 'The Basilica Cistern, built under Justinian I to hold eighty thousand cubic metres of water beneath the city centre.',
    creator: 'Diego Delso',
    date: 'photographed 2024; the cistern of the 6th century',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Cisterna_Bas%C3%ADlica,_Estambul,_Turqu%C3%ADa,_2024-09-28,_DD_58-60_HDR.jpg',
    note: 'The coloured lighting is a modern tourist installation; the three hundred and thirty-six columns, many of them reused from older buildings, are sixth-century. Cisterns like this are why the city could be besieged for a year and not go thirsty. Licensed CC BY-SA 4.0.'
  }
]

c.contentSections = [
  S('Overview',
    'Constantinople was the capital of the Roman Empire, and then of its eastern continuation, from 330 until 1453 — eleven hundred and twenty-three years, which is longer than any other city has served as the seat of a single state in European history.',
    'It was built where it was for one reason: the site controls the Bosphorus, the only water route between the Mediterranean and the Black Sea, and sits on the land route between Europe and Asia. Whoever held it taxed both.',
    'For most of the Middle Ages it was also simply the largest thing anyone had seen. Western visitors — crusaders, Rus\' merchants, Scandinavian mercenaries — describe it in terms that read as exaggeration until you realise they are trying to describe a city of several hundred thousand people to audiences whose largest town held five thousand.'),

  S('Foundation and the New Rome',
    'The site was already old. The Greek colony of Byzantion had stood on the promontory since the seventh century BC, and it had been taken, destroyed and rebuilt several times before Constantine I chose it.',
    'He refounded it as his capital in 330, and the choice was strategic rather than sentimental: Rome was badly placed for an empire whose threats were on the Danube and the Euphrates, and the new city sat between them. It was called New Rome officially and Constantinople in practice almost immediately.',
    'The Roman apparatus was reproduced deliberately — a senate, a forum, seven hills claimed on a peninsula that does not obviously have them, free grain for the citizens, and a hippodrome. What made it different was that it was Christian from the start, with no pagan temple establishment to accommodate.'),

  S('The walls',
    'The city\'s survival is a story about masonry. The land approach is a four-mile neck between the Sea of Marmara and the Golden Horn, and in 408–413, under the child emperor Theodosius II, that neck was closed by the most effective fortification built anywhere before gunpowder.',
    'The system was in depth: a moat sixty feet wide, then a low outer wall with its own towers, then a terrace, then an inner wall about twelve metres high carrying ninety-six towers. An attacker who took the outer wall stood on open ground beneath the inner one.',
    'It worked for a thousand years. Avars and Persians in 626, Arabs in 674–678 and again in 717–718, Rus\' fleets, Bulgars, and the Ottomans in 1422 all failed against it. It was breached exactly once by assault, in 1453, by cannon that had not existed when it was designed — and even then the walls held for fifty-three days.'),

  S('Hagia Sophia',
    'The church of the Holy Wisdom was built for Justinian I between 532 and 537, after riots had burned its predecessor, and it was finished in five years — an almost impossible schedule for a building of that size, and one that shows in the structural problems that followed.',
    'Its dome is thirty-one metres across and rests on pendentives above an open square, which had not been done at that scale before. The first dome collapsed in an earthquake in 558 and was rebuilt steeper; the building has been repaired, buttressed and re-domed repeatedly since.',
    'It remained the largest church in Christendom for nine hundred years, until Seville cathedral. Justinian is supposed to have said on entering it that he had outdone Solomon — a story from a much later source, and one everybody repeats because it is the right thing for him to have said. After 1453 it became a mosque, and the minarets in the photograph date from then.'),

  S('The city as a machine',
    'A city of that size in the sixth century was an engineering problem before it was anything else, and Constantinople solved it with water. The aqueduct of Valens brought supply from Thrace along a channel more than two hundred and fifty kilometres long, and it fed open reservoirs and roofed cisterns beneath the city — the Basilica Cistern alone holds eighty thousand cubic metres.',
    'Food came by sea. Egyptian grain fed the city until the Arab conquest took Egypt in the 640s, after which Thrace and the Black Sea had to replace it — a change that shrank the population permanently and made control of the Bosphorus a question of survival rather than revenue.',
    'The public life of the city ran along the Mese, the colonnaded main street, from the Golden Gate through a sequence of fora to the Augustaion and the palace. Its politics ran through the Hippodrome, where the chariot-racing factions — the Blues and the Greens — functioned as something between supporters\' clubs, militias and political parties, and where the Nika riots of 532 nearly ended Justinian\'s reign and killed tens of thousands.'),

  S('Ceremony and government',
    'The Great Palace complex on the point below the Hippodrome was the seat of government for seven centuries, and the way it worked is documented in extraordinary detail because an emperor wrote it down.',
    'Constantine VII\'s Book of Ceremonies records the ritual of the court — processions, receptions, acclamations, what was worn and said and in what order — with the thoroughness of a man who had spent decades with nothing to do but observe it.',
    'The purpose was political. Foreign envoys were received in rooms with mechanical golden birds that sang and lions that roared and a throne that rose towards the ceiling, and Liudprand of Cremona, who saw them in 949 and again in 968, records both his astonishment the first time and his irritation the second. Ceremony was the empire\'s cheapest weapon, and it used it constantly.'),

  S('The sieges',
    'No city in Europe was besieged as often or as unsuccessfully. In 626 the Avars attacked the land walls while a Persian army watched from the Asian shore, unable to cross because the imperial fleet held the water. In 674–678 and again in 717–718 Arab fleets and armies tried and failed, the second time destroyed by Greek fire, an exceptional winter and a Bulgar attack.',
    'The Rus\' came by sea in 860, 941 and 1043; the Bulgars under Krum and Symeon came by land; and each time the combination of the walls, the fleet and the chain across the Golden Horn was enough.',
    'The pattern is consistent enough to be worth stating as a rule: Constantinople could not be taken while its defenders held the sea. Every failed siege in this archive founders on that, and both successful ones — 1204 and 1453 — began with the attackers getting inside the Golden Horn.'),

  S('1204 and the Latin Empire',
    'The Fourth Crusade, diverted from Egypt by Venetian debt and a Byzantine succession dispute, took the city in April 1204 and sacked it for three days.',
    'The material loss was enormous and much of it is still visible elsewhere: the bronze horses on the front of St Mark\'s in Venice were taken from the Hippodrome, and the reliquaries of western Europe are full of what left Constantinople that week. Niketas Choniates, who was there, wrote the account that makes the scale of it clear.',
    'The Latin Empire that followed held the city for fifty-seven years and could not pay for it. Its emperors sold the relics — the Crown of Thorns went to Louis IX, who built the Sainte-Chapelle to house it — and stripped the lead from the palace roofs. When Byzantine forces walked back in through an undefended gate in 1261, they recovered a city that had lost most of its population and never regained it.'),

  S('The last centuries',
    'The restored city was a shell inside walls built for something much larger. Fields and orchards grew inside the circuit, whole quarters stood empty, and travellers in the fourteenth and fifteenth centuries describe a capital of villages.',
    'Commercially it had been captured from outside. The Genoese held Galata across the Golden Horn under their own government and took the great majority of the customs revenue of the strait; the empire collected a fraction of the trade passing its own door.',
    'The Ottomans besieged it in 1394–1402 and again in 1422, and in 1452 Mehmed II built the fortress of Rumeli Hisarı on the European shore above the city to close the Bosphorus entirely. The final siege began in April 1453 and lasted fifty-three days.'),

  S('1453 and after',
    'Mehmed II brought cannon capable of breaking the Theodosian walls — including one that required sixty oxen to move — and a fleet that he had dragged overland into the Golden Horn to get past the chain.',
    'The city fell on 29 May 1453. Constantine XI Palaiologos died in the fighting at the walls and his body was never identified with certainty, which is why the legend of the marble emperor sleeping beneath the Golden Gate attached itself to him.',
    'Mehmed made it his capital, repopulated it deliberately with settlers of every religion, converted Hagia Sophia into a mosque and began the building programme that produced the Ottoman city. The name Istanbul, from a Greek phrase meaning "to the city", had been in colloquial use for centuries and became official in 1930.'),

  S('Legacy',
    'The idea outlasted the empire. Russian rulers claimed the inheritance — the doctrine of Moscow as the third Rome dates from within a lifetime of 1453 — and the Ottoman sultans claimed it too, styling themselves Kaysar-i Rum, Caesar of Rome.',
    'For western Europe the fall of 1453 became a marker for the end of the Middle Ages, which is a convenience of periodisation rather than a fact about the year. Greek scholars had been arriving in Italy for decades before it, and the manuscripts that fed the Renaissance mostly travelled ahead of the conquest rather than because of it.',
    'What survives in Istanbul is a great deal: the walls for most of their length, Hagia Sophia, the cisterns, the Hippodrome\'s obelisks, the aqueduct, and dozens of Byzantine churches inside Ottoman mosques. It is the only medieval European capital where the medieval city is still the ground plan of the modern one.')
]

c.timeline = [
  { date: 'c. 660 BC', title: 'Byzantion founded', description: 'Greek colonists from Megara settle the promontory at the mouth of the Bosphorus.' },
  { date: '330', title: 'Refounded as New Rome', description: 'Constantine I dedicates the city as his capital, with a senate, a hippodrome and free grain.' },
  { date: '408–413', title: 'The Theodosian Walls built', description: 'The land approach is closed by a moat and two walls in depth under the child emperor Theodosius II.' },
  { date: '532', title: 'The Nika riots', description: 'Hippodrome factions rise against Justinian I; tens of thousands are killed and much of the centre burns.' },
  { date: '537', title: 'Hagia Sophia completed', description: 'Justinian\'s church is finished in five years and remains the largest in Christendom for nine hundred.' },
  { date: '626', title: 'The Avar siege', description: 'Avars attack the walls while a Persian army waits on the Asian shore; the fleet keeps them apart.', links: [{ title: 'Siege of Constantinople (626)', type: 'event', slug: 'siege-of-constantinople-626' }] },
  { date: '674–678', title: 'The first Arab blockade', description: 'A four-year Arab naval attempt is broken, in the campaign that gives the first record of Greek fire.' },
  { date: '717–718', title: 'The Umayyad siege', description: 'A twelve-month blockade by land and sea fails against Greek fire, a hard winter and a Bulgar attack.', links: [{ title: 'Siege of Constantinople (717–718)', type: 'event', slug: 'siege-of-constantinople-717' }] },
  { date: '860', title: 'The Rus\' appear', description: 'A Rus\' fleet raids the suburbs, the first appearance of a people who would matter for centuries.' },
  { date: '1204', title: 'Sacked by the Fourth Crusade', description: 'The city is taken and looted over three days; the Latin Empire is established in it.' },
  { date: '1261', title: 'Recovered by Byzantium', description: 'Eight hundred men enter through an undefended gate while the Latin fleet is away.', links: [{ title: 'Recovery of Constantinople', type: 'event', slug: 'recovery-of-constantinople' }] },
  { date: '1422', title: 'The Ottoman siege fails', description: 'Murad II besieges the city and withdraws; the walls hold for the last time.' },
  { date: '1452', title: 'Rumeli Hisarı built', description: 'Mehmed II fortifies the European shore above the city and closes the Bosphorus.' },
  { date: '29 May 1453', title: 'The city falls', description: 'Ottoman cannon breach the walls after fifty-three days; Constantine XI dies in the fighting.', links: [{ title: 'Fall of Constantinople', type: 'event', slug: 'fall-of-constantinople' }] },
  { date: '1930', title: 'Istanbul made official', description: 'The colloquial Greek-derived name, in use for centuries, becomes the city\'s official one.' }
]

c.relatedEntries = {
  people: [
    { title: 'Justinian I', type: 'person', slug: 'justinian-i', label: 'Built Hagia Sophia and the cisterns after the Nika riots' },
    { title: 'Heraclius', type: 'person', slug: 'heraclius', label: 'Whose capital held the Avar and Persian siege of 626 in his absence' },
    { title: 'Leo III', type: 'person', slug: 'leo-iii-the-isaurian', label: 'Held the city through the Umayyad siege of 717–718' },
    { title: 'Constantine VII', type: 'person', slug: 'constantine-vii', label: 'Recorded the court ceremonial of the Great Palace in the Book of Ceremonies' },
    { title: 'Michael VIII Palaiologos', type: 'person', slug: 'michael-viii-palaiologos', label: 'Recovered the city from the Latins in 1261' },
    { title: 'Constantine XI Palaiologos', type: 'person', slug: 'constantine-xi-palaiologos', label: 'The last emperor, killed on the walls in 1453' },
    { title: 'Mehmed II', type: 'person', slug: 'mehmed-ii', label: 'Took the city in 1453 and made it his capital' }
  ],
  events: [
    { title: 'Siege of Constantinople (626)', type: 'event', slug: 'siege-of-constantinople-626', label: 'Attacked from Europe and Asia at once' },
    { title: 'Siege of Constantinople (717–718)', type: 'event', slug: 'siege-of-constantinople-717', label: 'Twelve months of blockade by land and sea' },
    { title: 'Recovery of Constantinople', type: 'event', slug: 'recovery-of-constantinople', label: 'Retaken from the Latin Empire in 1261' },
    { title: 'Fall of Constantinople', type: 'event', slug: 'fall-of-constantinople', label: 'The end, on 29 May 1453' }
  ],
  locations: [
    { title: 'Byzantine Empire', type: 'location', slug: 'byzantine-empire', label: 'The realm it was the capital of for eleven centuries' },
    { title: 'Latin Empire', type: 'location', slug: 'latin-empire', label: 'Which held the city from 1204 to 1261' },
    { title: 'Empire of Nicaea', type: 'location', slug: 'empire-of-nicaea', label: 'The government in exile that took it back' },
    { title: 'Avar Khaganate', type: 'location', slug: 'avar-khaganate', label: 'Whose failure at the walls in 626 broke its power' }
  ]
}

c.sources = [
  { title: 'Procopius, Buildings', url: 'https://en.wikipedia.org/wiki/De_aedificiis', type: 'primary source' },
  { title: 'Constantine VII, Book of Ceremonies', url: 'https://en.wikipedia.org/wiki/De_Ceremoniis', type: 'primary source' },
  { title: 'Niketas Choniates, History', url: 'https://en.wikipedia.org/wiki/Niketas_Choniates', type: 'primary source' },
  { title: 'Constantinople', url: 'https://en.wikipedia.org/wiki/Constantinople', type: 'encyclopedia' },
  { title: 'Dumbarton Oaks — Byzantine studies', url: 'https://www.doaks.org/research/byzantine', type: 'academic resource', institution: 'Dumbarton Oaks' }
]

const after = c.contentSections.reduce((n, s) => n + s.paragraphs.join(' ').length, 0)
console.log(`constantinople rewritten: ${before} -> ${after} chars of prose`)
console.log(`  sections ${c.contentSections.length}, timeline ${c.timeline.length}, section images ${c.sectionImages.length}`)
console.log(`  related: ${c.relatedEntries.people.length} people, ${c.relatedEntries.events.length} events, ${c.relatedEntries.locations.length} locations`)

writeFileSync(dataPath, JSON.stringify(data, null, 2))
