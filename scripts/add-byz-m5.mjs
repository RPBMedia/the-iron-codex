/**
 * TRACK A, M5 — the Avar siege of Constantinople, 626.
 *
 * Two articles: the siege itself, and the Avar Khaganate as a full anchor realm.
 *
 * SERGIUS AND BONUS ARE DEFERRED. The patriarch Sergius and the patrician Bonus
 * ran the defence, and neither can have an article: no image of either exists in
 * any form — Sergius's own Wikipedia article carries none, and Commons has
 * nothing. Same rule that deferred Vitiges in M3 and Shahrbaraz in M4. They are
 * named in prose without a link and recorded in QUEUE.md. The Avar khagan is not
 * a deferral at all: no source of any kind records his name.
 *
 * Source note, and it runs the opposite way to M4's. The evidence for 626 is
 * unusually good for the seventh century — the Chronicon Paschale was compiled in
 * Constantinople within a couple of decades and gives dates, Theodore Synkellos
 * preached on the deliverance and was there, and George of Pisidia wrote the
 * Bellum Avaricum. All three are Constantinopolitan, Christian and triumphal, so
 * the chronology is secure while the interpretation is uniform and interested.
 * The Avars left no writing whatsoever, and no Persian account survives.
 *
 * locationType "Khaganate" is new, and is added to POLITY_TYPES in
 * check-content-quality.mjs in the same commit. The article is written to the
 * Empire bar (8 sections, 10-entry timeline) regardless of the lighter minimum.
 */
import { readFileSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dataPath = path.join(__dirname, '../server/data/history.json')
const data = JSON.parse(readFileSync(dataPath, 'utf8'))
const S = (title, ...paragraphs) => ({ title, paragraphs })
const img = (f) => `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(f)}`

const siege = {
  id: 'siege-of-constantinople-626', type: 'event', eventType: 'Siege',
  name: 'Siege of Constantinople (626)',
  aliases: ['Avar siege of Constantinople', 'Avar–Persian siege of Constantinople'],
  year: 626,
  location: 'Constantinople',
  eventLocation: 'The Theodosian land walls, the Golden Horn, and the Asian shore at Chalcedon',
  conflict: 'The Roman–Persian war of 602–628',
  image: img('42-manasses-chronicle.jpg'),
  imageInfo: {
    caption: 'A fourteenth-century Manasses Chronicle miniature: horsemen assault the walls of Constantinople while defenders shoot from the towers.',
    creator: 'Manuscript of the Constantine Manasses Chronicle',
    date: '14th century',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:42-manasses-chronicle.jpg',
    note: 'A Bulgarian manuscript made some seven hundred years after the event, not a record of it: the miniature shows the Persian attack on the capital alongside Heraclius\'s campaign in the east, which is the strategic situation of 626 rather than a depiction of the fighting. Public domain.'
  },
  sectionImages: [
    {
      section: 'The city\'s defences',
      src: img('Walls of Constantinople 1.jpg'),
      caption: 'The Theodosian land walls today, showing the layered defence: the low outer wall in front, the terrace behind it, and the towered inner wall beyond.',
      creator: 'CrniBombarder!!! (Wikimedia Commons)',
      date: 'modern photograph',
      source: 'Wikimedia Commons',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Walls_of_Constantinople_1.jpg',
      note: 'A modern photograph of the surviving fabric. The walls stood four miles from the Sea of Marmara to the Golden Horn and were already two centuries old in 626. Public domain.'
    },
    {
      section: 'Memory and the Akathist',
      src: img('Siege of Constantinople fresco, Moldovița monastery, Vatra Moldoviței, 2017.jpg'),
      caption: 'The 626 siege painted on the outer wall of Moldovița monastery in 1537, with sixteenth-century Ottoman besiegers and cannon.',
      creator: 'DimiTalen',
      date: 'fresco of 1537, photographed 2017',
      source: 'Wikimedia Commons',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Siege_of_Constantinople_fresco,_Moldovi%C8%9Ba_monastery,_Vatra_Moldovi%C8%9Bei,_2017.jpg',
      note: 'Not a record of 626 but of how it was remembered: Moldavian painters gave the Avar siege Ottoman artillery because by 1537 the deliverance of the city had become a template applied to whatever enemy was at the door. Licensed CC0.'
    }
  ],
  summary: 'Between 29 July and 7 August 626 an Avar army stormed the land walls of Constantinople while a Persian army watched from the Asian shore, unable to cross. The failure broke Avar power and ended Persia\'s last chance to finish the war.',
  details: 'The closest any enemy came to taking the city before 1204, and it was decided by ships rather than by walls.',
  outcome: 'Decisive Roman victory; the Slav flotilla destroyed in the Golden Horn, the Avar assault repulsed, and the coalition dissolved.',
  background: 'Heraclius had left the capital to campaign in the east and gambled that the walls would hold without him. The Avars and Persians coordinated to prove otherwise.',
  battle: 'Assaults on the Blachernae and the middle walls failed; the Slav canoes bringing Persian troops across the Golden Horn were intercepted and destroyed on 7 August.',
  aftermath: 'The khagan burnt his siege engines and withdrew. Shahrbaraz never crossed the strait, and sixteen months later Heraclius destroyed the Persian field army at Nineveh.',
  contentSections: [
    S('Overview',
      'For ten days at the end of July and the beginning of August 626, Constantinople was attacked from Europe and Asia at once. The Avar khagan brought his own army and contingents of Slavs, Bulgars and Gepids against the land walls; a Persian army under Shahrbaraz stood on the Asian shore at Chalcedon, close enough to see the city it had come to take.',
      'The emperor was not there. Heraclius had been campaigning in the Caucasus since 622 on the calculated judgement that the capital could defend itself while he attacked Persia where it was weakest, and he refused to come back. Command fell to the patrician Bonus, the patriarch Sergius, and his own young son Constantine.',
      'The two enemy armies never combined, and that is the whole story of the siege. Between them ran the Bosphorus and the Golden Horn, and the Roman fleet held both. A coalition that looked overwhelming on a map was, on the water, two separate forces that could not reach each other.'),
    S('Background',
      'By 626 the war that Khosrow II had begun in 602 had stripped the eastern empire of Syria, Palestine and Egypt. Shahrbaraz\'s army had reached Chalcedon, opposite the capital, as early as 615 and had never gone away.',
      'The Avars had been a separate problem for fifty years, extracting tribute that rose from 80,000 gold solidi under Tiberius II to around 120,000 in the early seventh century. At a meeting near Herakleia — the sources date it to either 617 or 623 — the khagan attempted to seize Heraclius himself, and the emperor escaped back to the city in disguise.',
      'What made 626 different was coordination. An Avar assault on the walls and a Persian army on the far shore were each survivable; together, with the Persians ferried across to attack the sea walls, they were not. Heraclius sent part of his army back to the city, kept the rest in the east, and did not return.'),
    S('The city\'s defences',
      'The Theodosian land walls had been built between 408 and 413 and rebuilt after the earthquake of 447. They ran roughly four miles from the Sea of Marmara to the Golden Horn as three lines: a broad moat, a low outer wall, a terrace, and behind it an inner wall some twelve metres high carrying ninety-six towers. Nothing in the sixth or seventh century could reduce that quickly.',
      'The weak point was the northern end. The Blachernae quarter, with its church of the Theotokos, lay outside the main Theodosian line and was covered by a single wall, and it was there that the Avars pressed hardest.',
      'The Chronicon Paschale puts the garrison at about twelve thousand — heavily outnumbered, though against these walls numbers mattered less than the second asset. The fleet controlled the Bosphorus and the Golden Horn, which meant it controlled whether the besiegers could ever become one army.'),
    S('The siege',
      'An Avar advance force appeared before the walls on 29 June and spent a month cutting the city off and burning the suburbs. The khagan arrived with the main army on 29 July and began the assault the next day.',
      'He brought siege towers and twelve stone-throwing engines protected by hides against the stretch of wall between the Polyandrion and the Gate of Saint Romanus, and pressed the Blachernae end hardest of all. The defenders burnt the engines and held the line, but the attacks were serious and sustained rather than a demonstration.',
      'The decisive move was on the water. Slav dugout canoes — the monoxyla — were carried overland and launched into the Golden Horn to ferry Persian troops across from Chalcedon and to attack the sea wall where it was thinnest. On 7 August the Roman ships met them in the Horn and destroyed the flotilla; the Slavs who reached the shore were killed by the Armenian troops at the Blachernae. The great land assault of the same day failed with it, and on 8 August the khagan burnt what siege equipment he had left and withdrew.'),
    S('The Persians at Chalcedon',
      'Shahrbaraz\'s army spent the siege on the Asian shore and never fought. This was not caution. The Persians had no fleet, and every attempt to put them across the strait depended on Avar and Slav boats that the Roman navy could sink at will.',
      'They could not be reinforced either. Heraclius had sent his brother Theodore against the other Persian army in Armenia under Shahin, and beaten it, so there was no second force to change the balance in Anatolia while the coalition was in front of the city.',
      'The result was the most expensive stalemate of the war. Persia had spent twenty years reaching the shore opposite Constantinople, and when it finally arrived there in company with an ally at the walls, the strait made the two armies useless to each other.'),
    S('Aftermath',
      'Avar power never recovered from the failure. The khaganate\'s authority over its subject peoples rested on success and plunder, and its subjects drew the obvious conclusion: the Slav revolt under the Frankish merchant Samo was already running in the west, and the Avar grip on the Balkans loosened permanently over the following decades.',
      'For Persia it was the last opportunity. Shahrbaraz withdrew from Chalcedon, Heraclius was left free to campaign in the Persian heartland, and in December 627 he destroyed the field army at the Battle of Nineveh. Khosrow II was deposed and executed two months after that.',
      'For the city, 626 made the reputation of its defences. The next besieger to attempt the same combination of walls and water was the Umayyad caliphate in 717–718, and it failed against the same pairing of Theodosian masonry and a fleet that would not let the sea be used.'),
    S('Memory and the Akathist',
      'The victory was credited to the Virgin. Sergius had carried her icon along the walls during the assaults, and the Chronicon Paschale, Theodore Synkellos and George of Pisidia all present the deliverance as her work rather than the fleet\'s.',
      'That reading hardened into liturgy. The prooemion of the Akathist Hymn — "To you, the champion general" — is traditionally connected to the deliverance of 626, and the connection is a genuine and old one. It is not, however, documented: the hymn itself is older than the siege, and the attribution of its opening to this occasion belongs to later tradition rather than to any seventh-century source.',
      'The memory travelled a long way. Sixteenth-century Moldavian monasteries painted the 626 siege across their outer walls with Ottoman besiegers and cannon in the picture, because by then the story had stopped being about Avars and had become a general image of a city delivered.'),
    S('Sources',
      'The evidence for 626 is markedly better than for the campaigns that followed it. The Chronicon Paschale was compiled in Constantinople within a couple of decades of the siege and supplies the dates; Theodore Synkellos preached a homily on the deliverance and had been in the city while it happened; George of Pisidia wrote the Bellum Avaricum on the same events.',
      'The limitation is uniformity rather than distance. All three writers are Constantinopolitan, all three are churchmen or court poets, and all three explain the outcome as divine protection. The sequence of days is therefore unusually secure while the interpretation comes from a single point of view.',
      'There is nothing from the other side at all. The Avars left no writing of any kind, and no Persian account of Chalcedon survives, so the numbers, the intentions and the quarrels of the besiegers are known only from the people they were trying to kill.')
  ],
  timeline: [
    { date: '29 June 626', title: 'The Avar advance guard arrives', description: 'A forward force reaches the walls, cuts the city off and burns the suburbs.' },
    { date: '29 July 626', title: 'The khagan arrives', description: 'The main Avar army, with Slav, Bulgar and Gepid contingents, takes up position before the land walls.' },
    { date: '31 July 626', title: 'The assault opens', description: 'Siege towers and twelve stone-throwing engines are brought against the wall between the Polyandrion and the Gate of Saint Romanus.' },
    { date: '2 August 626', title: 'The Blachernae pressed', description: 'The attack concentrates on the northern quarter, which lay outside the main Theodosian line behind a single wall.' },
    { date: '7 August 626', title: 'The battle in the Golden Horn', description: 'Slav canoes carrying Persian troops across the Horn are intercepted and destroyed by the Roman fleet; the land assault fails the same day.' },
    { date: '8 August 626', title: 'The Avars withdraw', description: 'The khagan burns his remaining siege engines and leaves.' },
    { date: 'December 627', title: 'Nineveh', description: 'Freed of the threat to his capital, Heraclius destroys the Persian field army in Mesopotamia.', links: [{ title: 'Battle of Nineveh', type: 'event', slug: 'battle-of-nineveh' }] }
  ],
  participants: [
    {
      side: 'Roman defenders',
      factions: [{ name: 'Byzantine Empire', title: 'Byzantine Empire', type: 'location', slug: 'byzantine-empire' }],
      leaders: [{ name: 'Bonus' }, { name: 'Sergius' }],
      strength: { display: 'c. 12,000 troops, with the city fleet', confidence: 'estimated', note: 'The Chronicon Paschale\'s figure for the garrison. Neither Bonus, who commanded as patrician and magistros, nor the patriarch Sergius has an article in this archive: no image of either survives in any form.' }
    },
    {
      side: 'Avar Khaganate and its subject peoples',
      factions: [{ name: 'Avar Khaganate', title: 'Avar Khaganate', type: 'location', slug: 'avar-khaganate' }],
      leaders: [{ name: 'The Khagan of the Avars (name not recorded)' }],
      strength: { display: 'Chronicle claims c. 80,000 with allies; modern estimates far lower', confidence: 'chronicle-claim', note: 'The figure comes from Constantinopolitan writers describing an enemy they wanted to make formidable. The force certainly included Slav, Bulgar and Gepid contingents, and the ruling khagan\'s name is recorded by no source at all.' }
    },
    {
      side: 'Sasanian army at Chalcedon',
      factions: [{ name: 'Sasanian Empire', title: 'Sasanian Empire', type: 'location', slug: 'sasanian-empire' }],
      leaders: [{ name: 'Shahrbaraz' }],
      strength: { display: 'Unknown; a detached field army that never crossed the strait', confidence: 'unknown', note: 'No figures survive. The army watched the siege from the Asian shore and never engaged, having no ships of its own. Shahrbaraz has no article in this archive: no image of him exists, not even a coin.' }
    }
  ],
  battleContinuity: {
    label: 'Continue to the victory that ended the war',
    battleSlug: 'battle-of-nineveh',
    relationship: 'same-war',
    reason: 'Holding the capital in 626 left Heraclius free to keep fighting in the Persian heartland instead of coming home to defend it; sixteen months later he destroyed the Persian field army at Nineveh and brought down Khosrow II.'
  },
  relatedEntries: {
    people: [
      { title: 'Heraclius', type: 'person', slug: 'heraclius', label: 'The emperor who was not there' },
      { title: 'Khosrow II', type: 'person', slug: 'khosrow-ii', label: 'Whose army watched from the far shore' }
    ],
    events: [
      { title: 'Battle of Nineveh', type: 'event', slug: 'battle-of-nineveh', label: 'The victory this siege made possible' },
      { title: 'Fall of Constantinople', type: 'event', slug: 'fall-of-constantinople', label: 'The walls held here, and for another eight centuries' }
    ],
    locations: [
      { title: 'Constantinople', type: 'location', slug: 'constantinople', label: 'The city besieged' },
      { title: 'Avar Khaganate', type: 'location', slug: 'avar-khaganate', label: 'The power broken by the failure' },
      { title: 'Byzantine Empire', type: 'location', slug: 'byzantine-empire', label: 'The empire that survived it' },
      { title: 'Sasanian Empire', type: 'location', slug: 'sasanian-empire', label: 'Whose last chance this was' }
    ]
  },
  sources: [
    { title: 'Chronicon Paschale', url: 'https://en.wikipedia.org/wiki/Chronicon_Paschale', type: 'primary source' },
    { title: 'George of Pisidia, Bellum Avaricum', url: 'https://en.wikipedia.org/wiki/George_of_Pisidia', type: 'primary source' },
    { title: 'Siege of Constantinople (626)', url: 'https://en.wikipedia.org/wiki/Siege_of_Constantinople_(626)', type: 'encyclopedia' },
    { title: 'Byzantine and Christian Museum, Athens', url: 'https://www.byzantinemuseum.gr/en/', type: 'museum collection', institution: 'Byzantine and Christian Museum' }
  ]
}

const avarKhaganate = {
  id: 'avar-khaganate', type: 'location', locationType: 'Khaganate',
  name: 'Avar Khaganate', aliases: ['Avar Khanate', 'Pannonian Avars', 'Avaria'],
  kingdom: 'Avar Khaganate', year: 567,
  image: img('Avar Khaganate Map 602.png'),
  imageInfo: {
    caption: 'The Avar Khaganate in 602, holding the Carpathian basin between the Franks, the Lombards in Italy and the eastern Roman empire, with the excavated Avar sites marked.',
    creator: 'Wario2 (Wikimedia Commons)',
    date: 'modern map of the khaganate in 602',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Avar_Khaganate_Map_602.png',
    note: 'A modern map. It is used as the primary image because the Avars built no cities and left no monuments: what survives of them is graves, and the shape of the territory that let them reach Constantinople in one march. Licensed CC BY-SA 4.0.'
  },
  sectionImages: [
    {
      section: 'Archaeology and legacy',
      src: img('The Avar Treasure MET h1 17.190.1674-1712.jpg'),
      caption: 'Gold and silver vessels of the seventh century catalogued by the Metropolitan Museum as "Avar or Byzantine" — the uncertainty is the museum\'s own.',
      creator: 'The Metropolitan Museum of Art',
      date: '7th century',
      source: 'The Metropolitan Museum of Art (via Wikimedia Commons)',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:The_Avar_Treasure_MET_h1_17.190.1674-1712.jpg',
      note: 'A hoard traditionally called the Avar Treasure, whose attribution is genuinely disputed: the metalwork could be Avar, Byzantine work taken as tribute, or Bulgar. That ambiguity is characteristic of the whole subject, since Avar wealth largely arrived as somebody else\'s coinage and plate. Released CC0.'
    }
  ],
  summary: 'The Avar Khaganate ruled the Carpathian basin from the 560s to about 800, extorted a fortune in gold from Constantinople, and was destroyed by Charlemagne.',
  overview: 'A steppe power that dominated central Europe for two and a half centuries and left no written word of its own, so everything known about it comes from its enemies and from its graves.',
  knownFor: [
    'Ruled the Carpathian basin for roughly 250 years without leaving a single written source of its own.',
    'Extracted tribute from Constantinople rising from 80,000 to around 120,000 gold solidi a year.',
    'Besieged Constantinople in 626 in coordination with Sasanian Persia, and failed.',
    'Generally credited with bringing the iron stirrup into Europe.',
    'Destroyed by Charlemagne\'s campaigns of 791–796, which carried off its accumulated treasure.'
  ],
  contentSections: [
    S('Overview',
      'The Avars were a steppe people who arrived on the Danube in the 560s and held the Carpathian basin — roughly modern Hungary and its neighbours — until Frankish armies broke them in the 790s. For most of that time they were the dominant military power in central Europe.',
      'They are unusually hard to write about. They produced no chronicles, no inscriptions and no literature, so every statement about their politics comes from Constantinople or from Frankish annals, both hostile. What they did leave is graves: something on the order of sixty thousand Avar-period burials have been excavated in the Carpathian basin, which makes them among the best-documented peoples of early medieval Europe archaeologically and among the worst documented politically.',
      'Their relationship with the eastern Roman empire ran on gold. For fifty years they were paid not to attack, and the sums grew; when the payments and the threats stopped working, they came to the walls of Constantinople in 626 and were beaten there.'),
    S('Origins',
      'The Avars appear in Byzantine sources in 558, when an embassy reached the emperor Justinian I asking for land and payment. They had come west across the steppe, and later Turkic rulers insisted to Constantinople that these were runaways from the Turkic khaganate rather than the true Avars at all — a dispute the Roman court found politically useful and could not settle.',
      'Justinian did what Roman governments habitually did with new arrivals on the frontier: he paid them and pointed them at somebody else. They fought the Utigurs and Kutrigurs on Rome\'s behalf, then moved west up the Danube looking for land of their own.',
      'A 2022 study of ancient DNA from elite Avar burials found close affinity with populations of the Mongolian steppe, consistent with a rapid migration westward within a few generations rather than a slow drift. That is a strong result for the ruling group specifically, and says nothing about the mass of the khaganate\'s subjects, who were mostly local and increasingly Slavic.'),
    S('Taking the Carpathian basin',
      'The opportunity came from a quarrel between two other peoples. The Lombard king Alboin was fighting the Gepids for control of the middle Danube, and in 567 he bought Avar help on terms that gave them the Gepid lands. The Gepid kingdom was destroyed and never re-formed.',
      'The following year the Lombards left for Italy, and whether they went because Alboin had already decided to or because he had understood what he had just invited into the neighbourhood, the effect was the same: the Avars inherited the whole Carpathian basin without further fighting.',
      'The strategic consequence for Constantinople was immediate. From the middle Danube an Avar army could reach the Balkan provinces in a single season, and the fortress city of Sirmium — the key to the Save frontier — fell to them after a long blockade in 582.'),
    S('How the khaganate worked',
      'Authority rested with the khagan, and beneath him the khaganate was a coalition rather than a state: Avar horsemen at the centre, and subject Gepids, Bulgars and above all Slavs supplying infantry, labour and boats. The Slav monoxyla that fought in the Golden Horn in 626 were built by subjects, not by Avars.',
      'Its economy was extraction. Tribute from Constantinople rose from 80,000 gold solidi a year under Tiberius II to around 120,000 by the early seventh century, and the sums are recorded because the Roman treasury regarded them as a scandal. Plunder, ransom and the sale of captives supplied the rest.',
      'Militarily the Avars were mounted archers with lamellar armour and a long tradition of composite bows, and they are generally credited with introducing the iron stirrup into Europe in the later sixth century. Byzantine writers paid them the compliment of imitation: the Strategikon attributed to the emperor Maurice tells Roman cavalry to adopt Avar equipment by name.'),
    S('Major rulers',
      'The ruler list is four names, and the reason is worth stating plainly: the Avars wrote nothing, so a khagan is recorded only when a Greek or Latin author had occasion to mention him.',
      'Bayan I is the one figure who can be followed. He led the Avars into the Carpathian basin, destroyed the Gepids in 567, took Sirmium in 582 and set the pattern of tribute-taking that lasted for decades; he ruled from about 562 until around 602 and was succeeded by his sons.',
      'After him the record thins to almost nothing. The khagan who besieged Constantinople in 626 — the most consequential Avar of all — is named by no surviving source. At the other end, the Frankish annals record a tudun who submitted to Charlemagne in 795 and a khagan called Zodan who came in to the emperor in 803, and both appear only as the men who ended it.'),
    S('War with Constantinople',
      'From the 580s the Avars raided the Balkans repeatedly, and the emperor Maurice\'s attempts to push them back across the Danube were among the causes of the mutiny that killed him in 602. His murder started the Persian war, and the Avars spent the next quarter-century exploiting it.',
      'At a meeting near Herakleia, which the sources place in either 617 or 623, the khagan tried to seize Heraclius in person during a parley. The emperor escaped to the city in disguise, and the episode did more than any raid to establish that no agreement with the Avars was worth anything.',
      'The high point was 626, when the khagan brought his army to the Theodosian walls in coordination with a Persian force at Chalcedon. It was the only time the Avars attempted a full siege of the capital, and the ten days it lasted ended their period of ascendancy.'),
    S('Decline',
      'The khaganate\'s authority over its subjects depended on victories, and after 626 there were none to distribute. The Slav revolt led by the Frankish merchant Samo, which had begun in the early 620s, held in the west, and the Avar grip on the Balkans slackened until the peninsula\'s Slavic settlement was proceeding entirely outside their control.',
      'A period of internal conflict followed in the 630s, and Bulgar groups broke away. What remained was still a functioning power in the Carpathian basin, but one that had stopped expanding and had lost its access to Roman gold; the seventh and eighth centuries are archaeologically rich and historically almost silent, because the Avars had ceased to be anybody\'s major problem.',
      'The pattern in the graves changes accordingly. Later Avar-period burials show a settled agricultural population with distinctive cast bronze belt fittings, which is not the material culture of a people living off tribute and raids.'),
    S('The end: Charlemagne',
      'The Franks reached the Avar frontier after conquering Bavaria, and Charlemagne attacked in 791. The decisive blow came in 795 and 796, when Frankish forces under Eric of Friuli and Charlemagne\'s son Pippin of Italy took the Ring, the fortified centre where the khagans had kept the accumulated treasure of two centuries.',
      'Einhard records the plunder being carried back in fifteen wagons, each drawn by four oxen, and the gold that Constantinople had paid to be left alone ended up funding Frankish church-building. It is the clearest single illustration of what the tribute system had actually built.',
      'The khaganate did not survive the loss. Bulgar attacks under Krum finished what the Franks had begun, and by about 803 the Avars had ceased to exist as an independent power, with the remnants absorbed into Frankish, Bulgar and Slavic polities in the Danube lands.'),
    S('Archaeology and legacy',
      'What the Avars left is material rather than textual. The excavated cemeteries of the Carpathian basin — tens of thousands of graves with horse burials, composite bows, stirrups, lamellar armour fittings and elaborately cast bronze belt sets — carry almost all the evidence for how Avar society actually lived and changed.',
      'The metalwork poses a permanent question of attribution. Hoards traditionally labelled Avar contain Byzantine work, and museums including the Metropolitan hedge their catalogue entries accordingly, because a people financed by Roman tribute naturally owned a great deal of Roman silver.',
      'Their lasting contribution to European warfare is the stirrup, which spread west from the Carpathian basin during their ascendancy and changed how cavalry could be used. Politically they left a vacuum: the Frankish destruction of the khaganate opened the middle Danube, and it was into that space that Moravians, Bulgars and eventually Magyars moved.')
  ],
  timeline: [
    { date: '558', title: 'First Avar embassy', description: 'Avar envoys reach Justinian I asking for land and payment; the empire hires them against other steppe peoples.' },
    { date: '567', title: 'The Gepid kingdom destroyed', description: 'Allied with the Lombard king Alboin, the Avars destroy the Gepids and take their lands on the middle Danube.' },
    { date: '568', title: 'The Lombards leave for Italy', description: 'Alboin\'s departure hands the Avars the whole Carpathian basin without further fighting.' },
    { date: '582', title: 'Sirmium falls', description: 'The key fortress on the Save frontier is starved into surrender, opening the Balkans to Avar raiding.' },
    { date: 'c. 602', title: 'Death of Bayan I', description: 'The khagan who built the khaganate dies after some forty years; his sons succeed him.' },
    { date: '617 or 623', title: 'The attempt on Heraclius', description: 'The khagan tries to seize the emperor during a parley near Herakleia; Heraclius escapes to the city in disguise.' },
    { date: '626', title: 'The siege of Constantinople', description: 'The khagan assaults the Theodosian walls in coordination with a Persian army at Chalcedon, and fails.', links: [{ title: 'Siege of Constantinople (626)', type: 'event', slug: 'siege-of-constantinople-626' }] },
    { date: 'c. 630s', title: 'Revolts and secessions', description: 'Samo\'s Slavs hold in the west and Bulgar groups break away; the khaganate stops expanding.' },
    { date: '791', title: 'Charlemagne attacks', description: 'The first Frankish campaign against the Avars follows the conquest of Bavaria.' },
    { date: '795–796', title: 'The Ring is taken', description: 'Eric of Friuli and Pippin of Italy capture the khagans\' fortified centre and carry off two centuries of accumulated treasure.' },
    { date: 'c. 803', title: 'The khaganate ends', description: 'Bulgar pressure under Krum finishes the collapse; the last khagan submits and the Avars cease to exist as a power.' }
  ],
  relatedEntries: {
    people: [
      { title: 'Charlemagne', type: 'person', slug: 'charlemagne', label: 'Destroyed the khaganate and took its treasure' },
      { title: 'Heraclius', type: 'person', slug: 'heraclius', label: 'The emperor its khagan tried to capture, and failed to besiege' }
    ],
    events: [
      { title: 'Siege of Constantinople (626)', type: 'event', slug: 'siege-of-constantinople-626', label: 'Its high-water mark, and its defeat' }
    ],
    locations: [
      { title: 'Byzantine Empire', type: 'location', slug: 'byzantine-empire', label: 'The empire that paid it tribute for fifty years' },
      { title: 'Carolingian Empire', type: 'location', slug: 'carolingian-empire', label: 'The power that destroyed it' },
      { title: 'Constantinople', type: 'location', slug: 'constantinople', label: 'The city it failed to take in 626' },
      { title: 'Kingdom of Hungary', type: 'location', slug: 'kingdom-of-hungary', label: 'The later realm of the Carpathian basin it once held' }
    ]
  },
  sources: [
    { title: 'Chronicon Paschale', url: 'https://en.wikipedia.org/wiki/Chronicon_Paschale', type: 'primary source' },
    { title: 'Einhard, Life of Charlemagne', url: 'https://en.wikipedia.org/wiki/Vita_Karoli_Magni', type: 'primary source' },
    { title: 'Pannonian Avars', url: 'https://en.wikipedia.org/wiki/Pannonian_Avars', type: 'encyclopedia' },
    { title: 'The Metropolitan Museum of Art — Migration-period collections', url: 'https://www.metmuseum.org/art/collection', type: 'museum collection', institution: 'The Metropolitan Museum of Art' }
  ]
}

data.events.push(siege)
data.locations.push(avarKhaganate)

// ── Link the new material into what already exists (bidirectional) ─────────────
const push = (arr, item) => { if (!arr.some((x) => x.slug === item.slug)) arr.push(item) }
const loc = (id) => data.locations.find((l) => l.id === id)
const chr = (id) => data.characters.find((c) => c.id === id)
const evt = (id) => data.events.find((e) => e.id === id)

const siegeRef = (label) => ({ title: 'Siege of Constantinople (626)', type: 'event', slug: 'siege-of-constantinople-626', label })
const avarRef = (label) => ({ title: 'Avar Khaganate', type: 'location', slug: 'avar-khaganate', label })

const byz = loc('byzantine-empire')
push((byz.relatedEntries.events ??= []), siegeRef('The siege it survived without its emperor in 626'))
push((byz.relatedEntries.locations ??= []), avarRef('The steppe power it paid tribute to for fifty years'))

const cpl = loc('constantinople')
push((cpl.relatedEntries.events ??= []), siegeRef('Attacked from Europe and Asia at once in 626'))

const sasanian = loc('sasanian-empire')
push((sasanian.relatedEntries.events ??= []), siegeRef('Where its army reached the Bosphorus and could not cross'))

const carolingian = loc('carolingian-empire')
push((carolingian.relatedEntries.locations ??= []), avarRef('Destroyed by Charlemagne\'s campaigns of 791–796'))

const hera = chr('heraclius')
push((hera.relatedEntries.events ??= []), siegeRef('His capital held in his absence'))
push((hera.relatedEntries.locations ??= []), avarRef('The power whose khagan tried to capture him at a parley'))

const khosrow = chr('khosrow-ii')
push((khosrow.relatedEntries.events ??= []), siegeRef('His last chance to take Constantinople'))

const charlemagne = chr('charlemagne')
push((charlemagne.relatedEntries.locations ??= []), avarRef('The khaganate his armies destroyed in 795–796'))

const nineveh = evt('battle-of-nineveh')
push((nineveh.relatedEntries.events ??= []), siegeRef('The failed siege that freed Heraclius to finish the war'))

console.log('+ events    : siege-of-constantinople-626')
console.log('+ locations : avar-khaganate')
console.log('~ linked    : byzantine-empire, constantinople, sasanian-empire, carolingian-empire,')
console.log('              heraclius, khosrow-ii, charlemagne, battle-of-nineveh')

writeFileSync(dataPath, JSON.stringify(data, null, 2))
console.log(`\nM5 written — characters ${data.characters.length}, locations ${data.locations.length}, events ${data.events.length}`)
