/**
 * TRACK A, M12 — Pelagonia 1259 and the recovery of Constantinople, 1261.
 *
 * Eight articles: the battle, the recovery, Michael VIII Palaiologos, and the five
 * states that carved up the Byzantine world after 1204 — the Empire of Nicaea,
 * the Latin Empire, the Despotate of Epirus, the Principality of Achaea and the
 * Kingdom of Sicily.
 *
 * This is the milestone the archive has been pointing at since M1: Michael VIII
 * was named in the original Track A audit as the single most conspicuous missing
 * person, and here he is.
 *
 * `locationType: "Despotate"` is new, added to POLITY_TYPES for Epirus; the
 * Despotate of the Morea would reuse it.
 *
 * The recovery of 1261 is typed `Fall of City` rather than Battle or Siege,
 * because that is what it was: eight hundred men walked in through a postern gate
 * while the Latin fleet was away, and there was no battle at all. Typing it
 * honestly also keeps it out of the strength and continuity validators, which
 * would otherwise demand army sizes for an operation that had none worth naming.
 *
 * Pelagonia's continuity points at Kosovo 1389 for want of anything nearer.
 * **Re-point it at Bapheus 1302 when M13 lands** — the first Ottoman victory over
 * a Byzantine army, and the real sequel to everything Michael VIII rebuilt.
 */
import { readFileSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dataPath = path.join(__dirname, '../server/data/history.json')
const data = JSON.parse(readFileSync(dataPath, 'utf8'))
const S = (title, ...paragraphs) => ({ title, paragraphs })
const img = (f) => `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(f)}`
const BYZ = { title: 'Byzantine Empire', type: 'location', slug: 'byzantine-empire' }
const CPL = { title: 'Constantinople', type: 'location', slug: 'constantinople' }

const pelagonia = {
  id: 'battle-of-pelagonia', type: 'event', eventType: 'Battle', name: 'Battle of Pelagonia',
  aliases: ['Battle of Kastoria'], year: 1259,
  location: 'The plain of Pelagonia, in Macedonia',
  eventLocation: 'The plain of Pelagonia near Kastoria, in western Macedonia',
  conflict: 'The wars of the Byzantine successor states',
  image: img('Greece in 1210.svg'),
  imageInfo: {
    caption: 'The Greek world after the Fourth Crusade: the Latin Empire, the Principality of Achaea, Epirus and the Byzantine successor states that fought over the wreckage.',
    creator: 'Wikimedia Commons contributor', date: 'modern map of Greece around 1210', source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Greece_in_1210.svg',
    note: 'A modern map, dated half a century before the battle, and used because it shows what the battle was about: a Byzantine world broken into pieces, each of which claimed to be the real one. Public domain.'
  },
  summary: 'In 1259 the army of Nicaea destroyed a coalition of Epirus, Achaea and Sicily at Pelagonia, capturing the prince of Achaea and opening the road to Constantinople.',
  details: 'The battle that decided which of the Byzantine successor states would restore the empire.',
  outcome: 'Decisive Nicaean victory; William II of Villehardouin captured and the western coalition destroyed.',
  background: 'Michael VIII of Nicaea faced an alliance of every power that did not want him to take Constantinople.',
  battle: 'The coalition fell apart before the fighting: Epirus withdrew in the night, and the Frankish knights were left to fight alone.',
  aftermath: 'William II bought his freedom by ceding Mystras, Monemvasia and Maina — the nucleus of the later Byzantine Morea.',
  contentSections: [
    S('Overview',
      'After the Fourth Crusade took Constantinople in 1204, the Byzantine world broke into pieces: a Latin Empire in the capital, Greek successor states at Nicaea, in Epirus and at Trebizond, and a scatter of crusader principalities in Greece.',
      'By 1259 the Empire of Nicaea under Michael VIII Palaiologos was the strongest of them and was clearly preparing to take Constantinople back. Everyone who preferred that not to happen made an alliance: Michael II of Epirus, William II of Villehardouin, prince of Achaea, and Manfred of Sicily.',
      'They met the Nicaean army under Michael\'s brother John Palaiologos on the plain of Pelagonia in Macedonia. The coalition collapsed before the battle and was destroyed in it, and two years later Constantinople was Byzantine again.'),
    S('Background',
      'The Empire of Nicaea had spent fifty years rebuilding: John III Vatatzes had restored its finances and pushed its frontier into Europe, and by the 1250s it held Thessalonica and much of Thrace and Macedonia.',
      'Michael VIII had taken power at Nicaea in 1258 as regent and then co-emperor for the child John IV Laskaris, in a coup that is the beginning of the archive\'s difficulty with him.',
      'The coalition against him was an alliance of convenience between people with nothing else in common: a Greek despot who claimed the imperial title himself, a French prince of the Morea, and the illegitimate son of Frederick II ruling Sicily. It held together for exactly one campaign.'),
    S('The battle',
      'The armies faced each other on the plain in the summer of 1259. What happened next is disputed in detail and clear in outline: the allies quarrelled, and Michael II of Epirus withdrew his forces in the night — the Byzantine sources say he was outmanoeuvred by Nicaean disinformation, and it is at least clear that he judged the alliance not worth dying for.',
      'That left the Frankish knights of Achaea and the German troops Manfred had sent to fight without their Greek contingent. The Nicaean army, strong in horse archers, engaged on ground of its choosing.',
      'The Frankish cavalry was destroyed and William II of Villehardouin was taken prisoner — found, according to the Chronicle of the Morea, hiding under a haystack and identified by his prominent teeth.'),
    S('Aftermath',
      'The immediate consequence was strategic. The only coalition capable of stopping a Nicaean move on Constantinople had been destroyed, and Michael VIII was free to act. Alexios Strategopoulos took the city two years later.',
      'The consequence for Greece was more durable. William II spent three years in captivity and bought his freedom in 1262 by ceding the fortresses of Mystras, Monemvasia and Maina in the south-eastern Morea.',
      'Those three castles became the nucleus of Byzantine power in the Peloponnese and grew into the Despotate of the Morea, which outlasted Constantinople itself by seven years — falling to the Ottomans in 1460.'),
    S('Significance',
      'Pelagonia decided which Greek state would restore the empire. Epirus had a claim as good as Nicaea\'s and had held Thessalonica and an imperial title of its own thirty years earlier; after 1259 it was a regional power and nothing more.',
      'It also set the shape of the following two centuries in Greece. The Franks of the Morea never recovered their dominance, the Byzantines had a foothold at Mystras that became a capital and a centre of late Byzantine culture, and the two coexisted in the Peloponnese until the Ottomans removed both.',
      'And it made the restoration possible without making it secure. Michael VIII got Constantinople because of Pelagonia, and spent the rest of his reign defending it against the western powers whose army he had destroyed here.')
  ],
  timeline: [
    { date: '1204', title: 'The empire broken', description: 'The Fourth Crusade takes Constantinople and the Byzantine world fragments into rival successor states.' },
    { date: '1258', title: 'Michael VIII takes power at Nicaea', description: 'He becomes regent and then co-emperor for the child John IV Laskaris.' },
    { date: '1259', title: 'The coalition forms', description: 'Epirus, Achaea and Sicily ally to prevent a Nicaean recovery of Constantinople.' },
    { date: '1259', title: 'Epirus withdraws', description: 'Michael II pulls his forces out before the battle, leaving the Franks to fight alone.' },
    { date: '1259', title: 'Pelagonia', description: 'The Nicaean army destroys the coalition and captures William II of Villehardouin.' },
    { date: '1261', title: 'Constantinople recovered', description: 'With no coalition left to stop him, Michael VIII takes the capital.', links: [{ title: 'Recovery of Constantinople', type: 'event', slug: 'recovery-of-constantinople' }] },
    { date: '1262', title: 'Mystras ceded', description: 'William buys his freedom with three Moreot fortresses that become the Byzantine Despotate of the Morea.' }
  ],
  participants: [
    {
      side: 'Empire of Nicaea',
      factions: [{ name: 'Empire of Nicaea', title: 'Empire of Nicaea', type: 'location', slug: 'empire-of-nicaea' }],
      leaders: [{ name: 'John Palaiologos', note: 'No article: the emperor\'s brother, who commanded the army at Pelagonia. Michael VIII was not present. No image of him survives.' }],
      strength: { display: 'Unknown; a Nicaean field army strong in horse archers and mercenaries', confidence: 'unknown', note: 'The sources describe the composition — Cuman and Turkish horse archers, Latin mercenaries, Byzantine cavalry — rather than the numbers.' }
    },
    {
      side: 'The western coalition',
      factions: [
        { name: 'Principality of Achaea', title: 'Principality of Achaea', type: 'location', slug: 'principality-of-achaea' },
        { name: 'Despotate of Epirus', title: 'Despotate of Epirus', type: 'location', slug: 'despotate-of-epirus' },
        { name: 'Kingdom of Sicily', title: 'Kingdom of Sicily', type: 'location', slug: 'kingdom-of-sicily' }
      ],
      leaders: [{ name: 'William II of Villehardouin', note: 'No article: the prince of Achaea, captured in the battle and ransomed for three fortresses. No image of him survives beyond his coinage.' }],
      strength: { display: 'Unknown; Frankish knights of the Morea, German troops from Sicily, and an Epirote contingent that left before the fighting', confidence: 'unknown', note: 'The withdrawal of the Epirote force before the battle matters more than any figure, and it is the one thing every account agrees on.' }
    }
  ],
  battleContinuity: {
    label: 'Continue to who ended up holding Greece',
    battleSlug: 'battle-of-kosovo',
    relationship: 'same-region',
    reason: 'Pelagonia decided which Greek state would restore the empire; a century and a half later at Kosovo the Ottomans began taking the whole Balkan peninsula from all of them.'
  },
  relatedEntries: {
    people: [{ title: 'Michael VIII Palaiologos', type: 'person', slug: 'michael-viii-palaiologos', label: 'Whose brother commanded, and whose restoration it made possible' }],
    events: [{ title: 'Recovery of Constantinople', type: 'event', slug: 'recovery-of-constantinople', label: 'Two years later, and only possible because of this' }],
    locations: [
      { title: 'Empire of Nicaea', type: 'location', slug: 'empire-of-nicaea', label: 'The victor' },
      { title: 'Principality of Achaea', type: 'location', slug: 'principality-of-achaea', label: 'Whose prince was captured here' },
      { title: 'Despotate of Epirus', type: 'location', slug: 'despotate-of-epirus', label: 'Which withdrew before the fighting' }
    ]
  },
  sources: [
    { title: 'George Akropolites, History', url: 'https://en.wikipedia.org/wiki/George_Akropolites', type: 'primary source' },
    { title: 'The Chronicle of the Morea', url: 'https://en.wikipedia.org/wiki/Chronicle_of_the_Morea', type: 'primary source' },
    { title: 'Battle of Pelagonia', url: 'https://en.wikipedia.org/wiki/Battle_of_Pelagonia', type: 'encyclopedia' }
  ]
}

const recovery = {
  id: 'recovery-of-constantinople', type: 'event', eventType: 'Fall of City',
  name: 'Recovery of Constantinople', aliases: ['Reconquest of Constantinople', 'Byzantine recovery of Constantinople'],
  year: 1261,
  location: 'Constantinople',
  eventLocation: 'Constantinople, entered through a postern near the Gate of the Fountain',
  conflict: 'The wars of the Byzantine successor states',
  image: img('MichaelVIIIPaleologusVirginMaryOverWallOfConstantinople.jpg'),
  imageInfo: {
    caption: 'A gold hyperpyron of Michael VIII showing the Virgin standing within the walls of Constantinople, struck to commemorate the recovery of the city.',
    creator: 'Constantinople mint', date: 'after 1261', source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:MichaelVIIIPaleologusVirginMaryOverWallOfConstantinople.jpg',
    note: 'A contemporary object issued for exactly this event: the city\'s walls drawn as a ring with the Virgin inside them, protecting what had been lost for fifty-seven years. Public domain.'
  },
  summary: 'On 25 July 1261 a Byzantine force of about eight hundred men walked into Constantinople through an undefended gate while the Latin fleet was away. The empire was restored without a battle.',
  details: 'Fifty-seven years of Latin rule ended in a night, by accident, with a reconnaissance party.',
  outcome: 'Constantinople recovered; the Latin Empire extinguished and Michael VIII crowned in Hagia Sophia.',
  background: 'Pelagonia had destroyed the coalition against Nicaea, and a treaty with Genoa had neutralised Venetian sea power.',
  aftermath: 'Michael VIII entered the city in August, was crowned in Hagia Sophia, and blinded the child emperor John IV at Christmas.',
  contentSections: [
    S('Overview',
      'The Byzantine recovery of Constantinople was not a siege, a battle or a campaign. It was a reconnaissance that found the door open.',
      'In July 1261 Alexios Strategopoulos was moving through Thrace with a small force — the sources say around eight hundred men, mostly Cuman horse archers — with orders to observe the city, not to attack it.',
      'Local Greeks told him the garrison and the entire Venetian fleet had sailed to attack the island of Daphnousia in the Black Sea. On the night of 24–25 July his men entered through an undefended postern, opened a gate from inside, and by morning the city was theirs.'),
    S('Background',
      'Fifty-seven years of Latin rule had reduced Constantinople to a shell. The Latin emperors had sold the relics — the Crown of Thorns went to Louis IX of France, who built the Sainte-Chapelle to house it — and stripped the lead from the palace roofs to pay their debts. The population had collapsed.',
      'What kept the city Latin was Venetian sea power, and Michael VIII removed it diplomatically. By the Treaty of Nymphaeum in March 1261 he gave Genoa the commercial privileges Venice had held, in exchange for Genoese ships.',
      'Pelagonia in 1259 had already destroyed the land coalition. By the summer of 1261 there was nothing left protecting the city except the fleet, and the fleet went to Daphnousia.'),
    S('The night of 25 July',
      'The Greeks inside the city had kept contact with Nicaea, and it was they who told Strategopoulos the fleet was gone and showed his men the postern.',
      'A party went over or through the wall, killed the watch, and opened one of the gates. The Latin garrison, such as it was, could not organise a defence of a four-mile land wall with the men remaining.',
      'The emperor Baldwin II fled to the harbour, abandoning his crown and sword in the palace, and took ship for Euboea. The Venetian quarter was burned to prevent the fleet returning to a base, and the Latin population fled with it. The fleet came back to find the city gone.'),
    S('What Michael VIII did next',
      'The emperor was camped in Asia Minor and heard the news three weeks later. He entered Constantinople on 15 August, the feast of the Dormition, walking behind an icon of the Virgin — the same association the deliverance of 626 had used, and deliberately so.',
      'He was crowned in Hagia Sophia, which had been a Latin cathedral for two generations. The city he inherited was half-empty and ruinous, and he spent the rest of his reign repopulating and rebuilding it.',
      'At Christmas 1261 he had John IV Laskaris — the eleven-year-old legitimate emperor of Nicaea, in whose name he had first taken power — blinded and imprisoned. The patriarch Arsenios excommunicated him for it, and the schism that followed divided the church for decades.'),
    S('Significance',
      'The restoration is the last great reversal in Byzantine history and it is genuinely astonishing: an empire that had ceased to exist in 1204 recovered its capital fifty-seven years later with eight hundred men and no fighting.',
      'It also inherited an impossible position. The empire that returned to Constantinople was a fraction of the one that had left it, surrounded by hostile Latin states, committed to defending a capital far too large for it, and dependent on Genoese sea power it did not control.',
      'Michael VIII spent his reign holding the west off by diplomacy — the church union of 1274, the encouragement of the Sicilian Vespers in 1282 — while Anatolia, the empire\'s recruiting ground, was left to the Turkish frontier lords. The Ottoman emirate that would end the empire took shape there within a generation of his death.')
  ],
  timeline: [
    { date: '1204', title: 'Constantinople sacked', description: 'The Fourth Crusade takes the city and establishes the Latin Empire.' },
    { date: '1259', title: 'Pelagonia', description: 'The coalition that could have stopped a Nicaean advance is destroyed.', links: [{ title: 'Battle of Pelagonia', type: 'event', slug: 'battle-of-pelagonia' }] },
    { date: 'March 1261', title: 'Treaty of Nymphaeum', description: 'Genoa is given Venice\'s commercial privileges in exchange for naval support.' },
    { date: 'July 1261', title: 'The fleet sails for Daphnousia', description: 'The Venetian fleet and the garrison leave the city undefended.' },
    { date: '25 July 1261', title: 'The city taken', description: 'Alexios Strategopoulos enters through a postern with about eight hundred men; Baldwin II flees by sea.' },
    { date: '15 August 1261', title: 'Michael VIII enters', description: 'The emperor walks in behind an icon of the Virgin on the feast of the Dormition and is crowned in Hagia Sophia.' },
    { date: 'December 1261', title: 'John IV blinded', description: 'The eleven-year-old Laskarid emperor is blinded and imprisoned; the patriarch excommunicates Michael.' }
  ],
  relatedEntries: {
    people: [{ title: 'Michael VIII Palaiologos', type: 'person', slug: 'michael-viii-palaiologos', label: 'Whose restoration this was, though he was not there' }],
    events: [
      { title: 'Battle of Pelagonia', type: 'event', slug: 'battle-of-pelagonia', label: 'Which made it possible two years earlier' },
      { title: 'Fall of Constantinople', type: 'event', slug: 'fall-of-constantinople', label: 'The city lost again, in 1453' }
    ],
    locations: [
      { title: 'Latin Empire', type: 'location', slug: 'latin-empire', label: 'Extinguished by it' },
      { title: 'Empire of Nicaea', type: 'location', slug: 'empire-of-nicaea', label: 'Which became the restored empire' },
      CPL
    ]
  },
  sources: [
    { title: 'George Akropolites, History', url: 'https://en.wikipedia.org/wiki/George_Akropolites', type: 'primary source' },
    { title: 'George Pachymeres, Historical Relations', url: 'https://en.wikipedia.org/wiki/George_Pachymeres', type: 'primary source' },
    { title: 'Reconquest of Constantinople', url: 'https://en.wikipedia.org/wiki/Reconquest_of_Constantinople', type: 'encyclopedia' }
  ]
}

const michael8 = {
  id: 'michael-viii-palaiologos', type: 'character', name: 'Michael VIII Palaiologos',
  aliases: ['Michael VIII', 'Michael Palaiologos'],
  born: 1223, died: 1282, deathAge: 'about 58',
  causeOfDeath: 'Died on campaign in Thrace in December 1282; his son refused him a church burial.',
  restingPlace: 'Buried without rites at Selymbria, his body later moved',
  location: 'Constantinople', title: 'Emperor of the Romans', roles: ['Emperor', 'Commander'],
  image: img('Miniature of Michael VIII.png'),
  imageInfo: {
    caption: 'Michael VIII Palaiologos in imperial dress with the labarum, in a manuscript miniature inscribed with his name.',
    creator: 'Byzantine manuscript workshop', date: '13th–14th century', source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Miniature_of_Michael_VIII.png',
    note: 'A manuscript portrait, inscribed with his name and title, and close enough to his own century to be worth more than the later Modena drawings this archive uses for earlier emperors. Public domain.'
  },
  summary: 'Michael VIII recovered Constantinople in 1261 and founded the last Byzantine dynasty. He also blinded the child he ruled for, forced a church union his people hated, and left Anatolia to the Turks.',
  overview: 'The most successful Byzantine ruler in three centuries, and the one his own church refused to bury.',
  greatestFeats: [
    'Recovered Constantinople in 1261 after fifty-seven years of Latin rule',
    'Founded the Palaiologos dynasty, which ruled until 1453',
    'Destroyed Charles of Anjou\'s invasion plans by helping to engineer the Sicilian Vespers in 1282'
  ],
  birth: { date: '1223', place: { name: 'The Empire of Nicaea' } },
  death: { date: '1282', place: { name: 'Thrace' }, circumstance: 'Died in December 1282 on campaign; his son Andronikos II, repudiating the church union, denied him a Christian burial.' },
  quickFacts: { realm: 'Byzantine Empire', dynasty: 'Palaiologos', culture: 'Roman', knownFor: 'Recovering Constantinople, and everything he did to keep it' },
  isRuler: true,
  succession: {
    office: 'Emperor of the Romans',
    predecessor: { displayName: 'John IV Laskaris', note: 'The child emperor of Nicaea, eight when Michael became his regent and eleven when Michael had him blinded and imprisoned on his eleventh birthday. He lived on in confinement for decades. No article yet in this archive.' },
    successor: { displayName: 'Andronikos II Palaiologos', note: 'His son, who repudiated the church union immediately, denied his father a church burial, and reigned for forty-six years while the empire\'s position in Anatolia collapsed. No article yet in this archive.' }
  },
  contentSections: [
    S('Overview',
      'Michael VIII Palaiologos was a Nicaean aristocrat and general who made himself regent for a child emperor in 1258, co-emperor shortly after, and sole emperor by blinding the child in 1261.',
      'In the same year his troops recovered Constantinople, and he became the first emperor to rule from the city in fifty-seven years and the founder of the dynasty that held it until 1453.',
      'The rest of his reign was spent keeping it. He subordinated the Byzantine church to Rome to prevent a western crusade against him, and when that failed he financed and encouraged the rebellion that destroyed Charles of Anjou\'s invasion fleet. Both worked. Neither was forgiven.'),
    S('Birth and early life',
      'He was born in 1223 into the Palaiologos family, one of the great military houses of the Nicaean aristocracy, with descent from the Komnenoi and the Doukai on both sides — which mattered enormously to the legitimacy he later claimed.',
      'He made a career as a general and was twice suspected of treason, on the second occasion submitting to trial by ordeal — he refused to carry the red-hot iron and argued his way out of it, which the sources report with some relish.',
      'When Theodore II Laskaris died in 1258 leaving a seven-year-old son, Michael had himself made regent within weeks and co-emperor within months.'),
    S('Character and Personality',
      'He is one of the few Byzantine emperors whose contemporaries and successors agree on his ability and disagree about nothing else.',
      'What comes through is intelligence applied without much scruple: a soldier who preferred negotiation, a usurper who took enormous trouble over the appearance of legitimacy, and a diplomat who spent twenty years playing the papacy, Genoa, Venice, the Mongols and Aragon against each other and generally won.',
      'The blinding of John IV is the act everything else is read through, and it was not politically necessary in the way that most Byzantine mutilations were — the boy was eleven and had no faction. Pachymeres, who admired his competence, does not defend it. Nor does this archive: it was a calculated removal of a rival who had not yet become one.'),
    S('The recovery and its price',
      'Constantinople fell to him almost by accident in July 1261, and he entered it in August behind an icon of the Virgin. The restoration was total in symbol and partial in fact: the city was half-ruined and half-empty, and the empire that returned to it was a Balkan and west Anatolian state, not a Mediterranean power.',
      'The immediate danger was western. Charles of Anjou, having taken southern Italy, spent the 1270s assembling a coalition to restore the Latin Empire, and Michael\'s answer was the Second Council of Lyons in 1274, at which his envoys accepted papal primacy and the Latin creed.',
      'The union bought him papal protection and cost him his own church. It was rejected almost universally in Byzantium, enforced with imprisonments, and repudiated the moment he died. The empire he saved regarded the price as a betrayal of the thing he had saved it for.'),
    S('The Sicilian Vespers',
      'When a new pope withdrew papal protection, Charles of Anjou\'s invasion was scheduled for 1282, and Michael did what he had always done: he found somebody else to fight it.',
      'Byzantine gold went to Peter III of Aragon, who had a claim to Sicily through his wife, and to the Sicilian nobles who resented Angevin rule. On Easter Monday 1282 Palermo rose against the French garrison in the massacre known as the Sicilian Vespers, and by the autumn Peter had taken the island.',
      'Charles never sailed. Michael wrote afterwards, with justified satisfaction, that if he claimed God had made the Sicilians free through him he would only be stating the truth. He died in December of the same year.'),
    S('Legacy',
      'He restored the empire and left it structurally worse off than the Nicaean state he had inherited. The resources went west to hold Constantinople and defend against the Angevins, and the Anatolian frontier — the Nicaean heartland, and the empire\'s recruiting ground — was stripped of the troops and the subsidies that had held it.',
      'The Turkish emirates filled the space within a generation. One of them was Osman\'s, and the empire\'s first defeat by his forces came at Bapheus in 1302, twenty years after Michael\'s death.',
      'His son denied him a church burial as a Latinizer, and no Byzantine emperor was ever less mourned by the state he had rescued. The dynasty he founded ruled for a hundred and ninety-two years and produced the last emperor to die on the walls in 1453.')
  ],
  timeline: [
    { date: '1223', title: 'Born', description: 'Born into the Palaiologos family, with Komnenian and Doukid descent on both sides.' },
    { date: '1258', title: 'Regent at Nicaea', description: 'Theodore II Laskaris dies; Michael makes himself regent for the seven-year-old John IV and then co-emperor.' },
    { date: '1259', title: 'Pelagonia', description: 'His brother destroys the coalition of Epirus, Achaea and Sicily.', links: [{ title: 'Battle of Pelagonia', type: 'event', slug: 'battle-of-pelagonia' }] },
    { date: 'March 1261', title: 'Treaty of Nymphaeum', description: 'He buys Genoese naval support with the commercial privileges Venice had held.' },
    { date: '25 July 1261', title: 'Constantinople recovered', description: 'Alexios Strategopoulos enters the city with eight hundred men; Michael is crowned in Hagia Sophia in August.', links: [{ title: 'Recovery of Constantinople', type: 'event', slug: 'recovery-of-constantinople' }] },
    { date: 'December 1261', title: 'John IV blinded', description: 'The eleven-year-old legitimate emperor is blinded and imprisoned; Michael is excommunicated by his own patriarch.' },
    { date: '1274', title: 'The Union of Lyons', description: 'His envoys accept papal primacy to prevent a western crusade; his church and people reject it.' },
    { date: '1282', title: 'The Sicilian Vespers', description: 'Byzantine gold helps raise the rebellion that destroys Charles of Anjou\'s invasion plans.' },
    { date: '1282', title: 'Died', description: 'Dies on campaign in Thrace; his son refuses him a Christian burial.' }
  ],
  relatedEntries: {
    people: [{ title: 'Constantine XI Palaiologos', type: 'person', slug: 'constantine-xi-palaiologos', label: 'The last of the dynasty he founded, killed on the walls in 1453' }],
    events: [
      { title: 'Recovery of Constantinople', type: 'event', slug: 'recovery-of-constantinople', label: 'The achievement his reign is defined by' },
      { title: 'Battle of Pelagonia', type: 'event', slug: 'battle-of-pelagonia', label: 'Which cleared the way to it' }
    ],
    locations: [
      { title: 'Empire of Nicaea', type: 'location', slug: 'empire-of-nicaea', label: 'The state he took over and then dissolved into the restored empire' },
      { title: 'Latin Empire', type: 'location', slug: 'latin-empire', label: 'Which he extinguished' },
      BYZ
    ]
  },
  sources: [
    { title: 'George Pachymeres, Historical Relations', url: 'https://en.wikipedia.org/wiki/George_Pachymeres', type: 'primary source' },
    { title: 'George Akropolites, History', url: 'https://en.wikipedia.org/wiki/George_Akropolites', type: 'primary source' },
    { title: 'Michael VIII Palaiologos', url: 'https://en.wikipedia.org/wiki/Michael_VIII_Palaiologos', type: 'encyclopedia' }
  ]
}

// ── The five successor states ─────────────────────────────────────────────────

const nicaea = {
  id: 'empire-of-nicaea', type: 'location', locationType: 'Empire',
  name: 'Empire of Nicaea', aliases: ['Nicaean Empire', 'Nicaea', 'Laskarid empire'],
  kingdom: 'Empire of Nicaea', year: 1204,
  image: img('Paolo Monti - Servizio fotografico (Iznik, 1962) - BEIC 6362045.jpg'),
  imageInfo: {
    caption: 'The Roman and Byzantine walls of Nicaea, photographed in 1962, with the gate through which the exiled empire\'s capital was entered.',
    creator: 'Paolo Monti', date: 'photographed 1962; the walls Roman and Byzantine', source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Paolo_Monti_-_Servizio_fotografico_(Iznik,_1962)_-_BEIC_6362045.jpg',
    note: 'The walls are the reason Nicaea was chosen: a defensible city close enough to Constantinople to claim its inheritance and far enough to survive losing it. The photograph is modern; the fabric is not. Public domain.'
  },
  summary: 'The Empire of Nicaea was the Byzantine government in exile from 1204 to 1261, the strongest of the successor states, and the one that took Constantinople back.',
  overview: 'A rump state in western Anatolia that spent fifty-seven years being the Roman Empire, and then proved it.',
  knownFor: [
    'Founded at Nicaea in 1204 by Theodore I Laskaris after the Fourth Crusade took Constantinople.',
    'Claimed the imperial title against Epirus, Trebizond and the Latins in the capital.',
    'Under John III Vatatzes became economically self-sufficient and expanded into Europe.',
    'Won the Battle of Pelagonia in 1259 against a coalition of Epirus, Achaea and Sicily.',
    'Recovered Constantinople in 1261 and ceased to exist by becoming the restored empire.'
  ],
  contentSections: [
    S('Overview',
      'When the Fourth Crusade took Constantinople in 1204, the Byzantine state did not so much fall as scatter. Three Greek successor states emerged — at Nicaea in western Anatolia, in Epirus in north-western Greece, and at Trebizond on the Black Sea — and each claimed to be the empire.',
      'Nicaea won that argument. It held the richest surviving Byzantine territory, it secured the patriarchate in exile, and it was close enough to Constantinople to make its claim credible and far enough away to be defensible.',
      'For fifty-seven years it functioned as a working Byzantine state in miniature, and in 1261 it recovered the capital and dissolved itself into the restored empire.'),
    S('Foundation',
      'Theodore I Laskaris, a son-in-law of the last pre-conquest emperor, established himself at Nicaea in 1204 and spent a decade fighting the Latins, the Seljuks and rival Greek claimants simultaneously.',
      'His decisive achievement was legitimacy rather than territory: in 1208 he had a patriarch elected at Nicaea, who crowned him emperor. That gave the Nicaean claim a canonical foundation the other successor states never matched.',
      'He beat the Seljuk sultan at Antioch on the Maeander in 1211 — killing him in single combat, according to the Greek sources — and secured a frontier that held for fifty years.'),
    S('John III Vatatzes',
      'His son-in-law John III Vatatzes, who ruled from 1221 to 1254, is the reason Nicaea won. He was an administrator before he was a general, and he made the state solvent.',
      'He pursued deliberate economic self-sufficiency — encouraging agriculture, banning the import of Italian luxury goods, and funding the treasury from imperial estates. The chronicler records him buying his wife a crown from the profits of the imperial poultry farms, which is the kind of detail that gets repeated because it is true to the man.',
      'On that base he took the Latin possessions in Asia, crossed into Europe, took Thessalonica from Epirus in 1246, and left his successors a state that surrounded Constantinople on three sides.'),
    S('Major rulers',
      'Theodore I Laskaris (1205–1221) founded the state and secured its legitimacy with a patriarch and a coronation.',
      'John III Vatatzes (1221–1254) made it solvent and expanded it into Europe; he was later venerated as a saint in Asia Minor, which no other Byzantine emperor of the period managed. Theodore II Laskaris (1254–1258) was learned, ill and suspicious, and his short reign alienated the aristocracy.',
      'John IV Laskaris (1258–1261) was seven at his accession and eleven when Michael VIII Palaiologos, his regent and then co-emperor, had him blinded. Michael VIII (1259–1282) took the state to Constantinople and ended it there.'),
    S('The church and the court',
      'The single most important thing Nicaea held was not territory but the patriarchate. When a patriarch was elected there in 1208 and crowned Theodore I, the Orthodox church outside Latin control had a head, and it was at Nicaea rather than at Arta or Trebizond.',
      'That gave the state a claim no army could supply, and it made Nicaea the address for Orthodox Christians across the eastern Mediterranean — including in territory it did not govern. Negotiations with Rome over church union ran through Nicaea for the whole period, always inconclusively.',
      'The court was also a serious intellectual centre. Nikephoros Blemmydes taught there, Theodore II Laskaris wrote philosophy as well as ruling, and the libraries and schools assembled in exile are part of what the restored empire carried back to Constantinople in 1261.'),
    S('The end and the argument about it',
      'Pelagonia in 1259 destroyed the coalition that might have stopped Nicaea, and in July 1261 a Nicaean force walked into Constantinople through an undefended gate.',
      'The empire of Nicaea then ceased to exist, not by conquest but by becoming what it had always claimed to be.',
      'Whether that was a good outcome is a genuine historical argument and worth stating as one. Nicaea was compact, defensible, solvent and Anatolian; the restored empire was overextended, broke, and committed to defending a capital it could not fill. Some historians have argued the Laskarid state would have lasted longer than the Palaiologan one did. It is unprovable and it is not unreasonable.')
  ],
  timeline: [
    { date: '1204', title: 'Constantinople falls', description: 'The Fourth Crusade takes the city; Theodore Laskaris withdraws to Bithynia.' },
    { date: '1208', title: 'A patriarch and a coronation', description: 'A patriarch elected at Nicaea crowns Theodore I emperor, giving the claim canonical standing.' },
    { date: '1211', title: 'Antioch on the Maeander', description: 'Theodore defeats the Seljuk sultan and secures the eastern frontier for a generation.' },
    { date: '1221', title: 'John III Vatatzes succeeds', description: 'The reign that makes the state solvent and expands it into Europe begins.' },
    { date: '1235', title: 'Alliance with Bulgaria', description: 'Nicaea and Bulgaria besiege Constantinople together without taking it.' },
    { date: '1246', title: 'Thessalonica taken', description: 'John III takes the city from Epirus, ending its rival imperial claim.' },
    { date: '1258', title: 'Michael VIII takes power', description: 'Theodore II dies; Michael Palaiologos becomes regent and then co-emperor for the child John IV.' },
    { date: '1259', title: 'Pelagonia', description: 'The Nicaean army destroys the coalition of Epirus, Achaea and Sicily.', links: [{ title: 'Battle of Pelagonia', type: 'event', slug: 'battle-of-pelagonia' }] },
    { date: '1261', title: 'Constantinople recovered', description: 'The state achieves its purpose and dissolves into the restored empire.', links: [{ title: 'Recovery of Constantinople', type: 'event', slug: 'recovery-of-constantinople' }] }
  ],
  relatedEntries: {
    people: [{ title: 'Michael VIII Palaiologos', type: 'person', slug: 'michael-viii-palaiologos', label: 'Its last emperor, and the first of the restored empire' }],
    events: [
      { title: 'Battle of Pelagonia', type: 'event', slug: 'battle-of-pelagonia', label: 'Its decisive victory' },
      { title: 'Recovery of Constantinople', type: 'event', slug: 'recovery-of-constantinople', label: 'Its purpose, and its end' }
    ],
    locations: [
      { title: 'Latin Empire', type: 'location', slug: 'latin-empire', label: 'Its rival in the capital' },
      { title: 'Despotate of Epirus', type: 'location', slug: 'despotate-of-epirus', label: 'Its rival for the Greek imperial claim' },
      BYZ
    ]
  },
  sources: [
    { title: 'George Akropolites, History', url: 'https://en.wikipedia.org/wiki/George_Akropolites', type: 'primary source' },
    { title: 'Empire of Nicaea', url: 'https://en.wikipedia.org/wiki/Empire_of_Nicaea', type: 'encyclopedia' },
    { title: 'Dumbarton Oaks — Byzantine studies', url: 'https://www.doaks.org/research/byzantine', type: 'academic resource', institution: 'Dumbarton Oaks' }
  ]
}

const latinEmpire = {
  id: 'latin-empire', type: 'location', locationType: 'Empire',
  name: 'Latin Empire', aliases: ['Latin Empire of Constantinople', 'Romania', 'Empire of Romania'],
  kingdom: 'Latin Empire', year: 1204,
  image: img('LatinEmpire2.png'),
  imageInfo: {
    caption: 'The partition of the Byzantine Empire after 1204: the Latin Empire and its vassals against the Greek successor states at Nicaea, Epirus and Trebizond.',
    creator: 'Wikimedia Commons contributor', date: 'modern map of the partition after 1204', source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:LatinEmpire2.png',
    note: 'A modern map. What it shows is the problem: a Latin Empire holding the capital and very little else, ringed by Greek states that all claimed the same inheritance. Public domain.'
  },
  summary: 'The Latin Empire was the crusader state established at Constantinople in 1204, which spent fifty-seven years insolvent, shrinking and selling its relics, and fell to eight hundred men in 1261.',
  overview: 'A conquest that could not be paid for, in a capital its rulers could not fill.',
  knownFor: [
    'Founded in 1204 when the Fourth Crusade sacked Constantinople instead of going to Egypt.',
    'Its first emperor, Baldwin I, was captured by the Bulgarians within a year and died in prison.',
    'Sold the Crown of Thorns to Louis IX of France, who built the Sainte-Chapelle for it.',
    'Stripped the lead from its own palace roofs to pay debts.',
    'Fell in 1261 without a battle when a Byzantine force found the gates undefended.'
  ],
  contentSections: [
    S('Overview',
      'The Latin Empire was created in 1204 by a crusade that had set out for Egypt, been diverted to Constantinople by Venetian debt and a Byzantine succession dispute, and taken and sacked the largest Christian city in the world.',
      'The victors partitioned the empire on paper — a quarter and a half of a quarter to the emperor, the rest to Venice and the crusader lords — and then discovered that holding it was a different problem from dividing it.',
      'For fifty-seven years the Latin Empire held Constantinople, a shrinking strip of Thrace, and the loyalty of vassal states in Greece that mostly ignored it. It never solved its finances, never held its frontiers, and ended without a fight.'),
    S('The conquest and the partition',
      'The sack of April 1204 was catastrophic and the loot was legendary — the bronze horses that stand in Venice were taken from the hippodrome then. It also destroyed the city\'s economy and much of its population, which the new rulers then had to govern.',
      'Baldwin of Flanders was elected emperor and crowned in Hagia Sophia. Venice took the harbours and the islands, which was the arrangement Venice had wanted all along and the only part of the settlement that made money.',
      'Within a year Baldwin was captured by the Bulgarian tsar Kaloyan at Adrianople and died in captivity, and the empire never recovered the initiative. His brother Henry, who ruled to 1216, was the one competent emperor it had.'),
    S('Poverty',
      'The Latin Empire is the clearest case in this archive of a state that could not pay for itself. Its territory shrank almost continuously, its revenues collapsed with the city\'s trade, and its emperors spent their reigns touring western Europe asking for money.',
      'Baldwin II, the last emperor, sold the relics. The Crown of Thorns went to Louis IX of France in 1238, who built the Sainte-Chapelle in Paris to house it, and a stream of other relics followed it west.',
      'When the relics ran out he pawned his own son to Venetian merchants as security for a loan, and had the lead stripped from the roofs of the imperial palaces to sell. The city he ruled had lost most of its population and much of it stood empty.'),
    S('Major rulers',
      'Baldwin I (1204–1205), count of Flanders, was elected emperor and captured by the Bulgarians at Adrianople within a year.',
      'Henry of Flanders (1206–1216), his brother, was by common consent the ablest of them: a capable soldier and a conciliator who treated his Greek subjects as subjects rather than enemies, and whose death removed the empire\'s only chance of stability.',
      'Peter of Courtenay and Robert followed without distinction, and Baldwin II (1228–1261) reigned for thirty-three years, most of them abroad raising money, and fled the city by sea in July 1261.'),
    S('The end',
      'By 1261 the empire was Constantinople and very little else, and its defence rested on the Venetian fleet. In July that fleet sailed to attack an island in the Black Sea.',
      'A Byzantine reconnaissance force of about eight hundred men, which had no orders to attack, found the city undefended and walked in through a postern gate on the night of 25 July. Baldwin II abandoned his crown and sword and took ship.',
      'The Latin Empire ended there. Its titular claim was inherited and traded among western noble families for another century and a half, which is the only afterlife it had.'),
    S('Legacy',
      'The damage was permanent. The sack of 1204 and the fifty-seven years that followed destroyed Constantinople as an economic centre, and the restored empire inherited a capital that was a fraction of what it had been.',
      'The schism between the Greek and Latin churches, formally dated to 1054, became real in 1204 and has effectively never healed. No amount of negotiated union afterwards — including Michael VIII\'s at Lyons in 1274 — could get past what had been done to the city.',
      'And the strategic consequence outlived everyone involved. A weakened Byzantium could not hold Anatolia, and the Turkish emirates that filled that space produced the Ottomans. The crusade that was meant to help the eastern Christians is the largest single reason they were conquered.')
  ],
  timeline: [
    { date: '1204', title: 'Constantinople sacked', description: 'The Fourth Crusade takes the city and partitions the empire.' },
    { date: '1204', title: 'Baldwin I crowned', description: 'The count of Flanders is elected emperor and crowned in Hagia Sophia.' },
    { date: '1205', title: 'Adrianople', description: 'Baldwin is captured by the Bulgarian tsar Kaloyan and dies in captivity.' },
    { date: '1206–1216', title: 'Henry of Flanders', description: 'The empire\'s one capable ruler stabilises it briefly and conciliates his Greek subjects.' },
    { date: '1235', title: 'Besieged by Nicaea and Bulgaria', description: 'A joint Nicaean and Bulgarian force besieges Constantinople; the Latin Empire survives on Venetian sea power alone.' },
    { date: '1238', title: 'The Crown of Thorns sold', description: 'Baldwin II sells the relic to Louis IX, who builds the Sainte-Chapelle to house it.' },
    { date: '1250s', title: 'Stripping the palaces', description: 'Lead is taken from the imperial roofs to raise money; the emperor\'s son is pawned to Venetian creditors.' },
    { date: '25 July 1261', title: 'The city lost', description: 'A Byzantine force enters through an undefended gate; Baldwin II flees by sea.', links: [{ title: 'Recovery of Constantinople', type: 'event', slug: 'recovery-of-constantinople' }] }
  ],
  relatedEntries: {
    people: [
      { title: 'Baldwin I, Latin Emperor', type: 'person', slug: 'baldwin-i-latin-emperor', label: 'Its first emperor, captured within a year' },
      { title: 'Michael VIII Palaiologos', type: 'person', slug: 'michael-viii-palaiologos', label: 'Who extinguished it in 1261' }
    ],
    events: [{ title: 'Recovery of Constantinople', type: 'event', slug: 'recovery-of-constantinople', label: 'Where it ended, without a battle' }],
    locations: [
      { title: 'Empire of Nicaea', type: 'location', slug: 'empire-of-nicaea', label: 'The Greek state that took the capital back' },
      { title: 'Principality of Achaea', type: 'location', slug: 'principality-of-achaea', label: 'Its most successful vassal, which outlived it' },
      CPL
    ]
  },
  sources: [
    { title: 'Geoffrey of Villehardouin, The Conquest of Constantinople', url: 'https://en.wikipedia.org/wiki/Geoffrey_of_Villehardouin', type: 'primary source' },
    { title: 'Niketas Choniates, History', url: 'https://en.wikipedia.org/wiki/Niketas_Choniates', type: 'primary source' },
    { title: 'Latin Empire', url: 'https://en.wikipedia.org/wiki/Latin_Empire', type: 'encyclopedia' }
  ]
}

const epirus = {
  id: 'despotate-of-epirus', type: 'location', locationType: 'Despotate',
  name: 'Despotate of Epirus', aliases: ['Epirus', 'Despotate of Arta'],
  kingdom: 'Despotate of Epirus', year: 1205,
  image: img('Epirus 1205-1230-en.svg'),
  imageInfo: {
    caption: 'The expansion of Epirus between 1205 and 1230, when it held Thessalonica and its ruler wore an imperial crown.',
    creator: 'Wikimedia Commons contributor', date: 'modern map of Epirus, 1205–1230', source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Epirus_1205-1230-en.svg',
    note: 'A modern map showing the state at its height, immediately before Klokotnitsa in 1230 reduced it to the north-western corner it started from. Public domain.'
  },
  summary: 'The Despotate of Epirus was the Greek successor state in north-western Greece that briefly held Thessalonica and claimed the empire, and lost both to Bulgaria in a single afternoon in 1230.',
  overview: 'The successor state that came closest to beating Nicaea to Constantinople, and was destroyed by a battle it did not have to fight.',
  knownFor: [
    'Founded after 1204 by Michael I Komnenos Doukas in the mountains of north-western Greece.',
    'Took Thessalonica in 1224 and had its ruler crowned emperor there.',
    'Was crushed by Bulgaria at Klokotnitsa in 1230, ending its imperial claim.',
    'Withdrew from the coalition at Pelagonia in 1259, leaving its allies to be destroyed.',
    'Survived as a regional principality at Arta until the Ottoman conquest.'
  ],
  contentSections: [
    S('Overview',
      'Epirus is the mountainous north-western corner of Greece, and it produced the successor state that came closest to reaching Constantinople first.',
      'Founded by Michael I Komnenos Doukas after 1204, it expanded east under his half-brother Theodore, took Thessalonica from the Latins in 1224, and had Theodore crowned emperor there — a direct challenge to Nicaea\'s claim.',
      'In 1230 Theodore attacked Bulgaria and was destroyed at Klokotnitsa. Epirus never recovered its position, and thirty years later it withdrew from the field at Pelagonia and left the anti-Nicaean coalition to be destroyed without it.'),
    S('Foundation and expansion',
      'Michael I Komnenos Doukas was a cousin of the last pre-1204 emperors, and he established himself in Epirus in the confusion after the Fourth Crusade with the support of local landowners.',
      'The terrain did most of the work. Epirus is defensible, poor and hard to reach, and the Latin Empire never had the resources to take it seriously.',
      'His half-brother Theodore, who succeeded in 1215, was the aggressive one: he captured the Latin emperor-elect Peter of Courtenay in 1217, took Thessalonica in 1224, and by 1225 was campaigning in Thrace within reach of Constantinople itself.'),
    S('Major rulers',
      'Michael I Komnenos Doukas (1205–1215) founded the state and secured the mountains.',
      'Theodore Komnenos Doukas (1215–1230) took Thessalonica, was crowned emperor there by the archbishop of Ohrid, and lost everything at Klokotnitsa — captured, later blinded, and reduced to a political nuisance for the rest of his life.',
      'Michael II Komnenos Doukas (1230–1268) rebuilt the state as a regional power, married his daughters into Achaea and Sicily to build the coalition of 1259, and then withdrew his troops from the field at Pelagonia — the decision that ended any Epirote claim to the empire.'),
    S('Klokotnitsa and after',
      'In 1230 Theodore invaded Bulgaria in breach of a treaty, and Ivan Asen II met him at Klokotnitsa on the Maritsa. The Epirote army was destroyed and Theodore was captured.',
      'The story that circulated afterwards — that Asen carried the broken treaty on a lance as a banner — may be embellishment, and the result is not: the empire of Thessalonica collapsed within a few years and Epirus was pushed back to where it had started.',
      'Nicaea took Thessalonica in 1246, and after that there was only one Greek claimant to Constantinople that anybody took seriously.'),
    S('Legacy',
      'Epirus survived as a principality at Arta for two more centuries, passing through Greek, Italian and Albanian rulers before the Ottomans took it in 1449.',
      'Its churches are its most visible legacy: the Paregoretissa at Arta and the other late Byzantine foundations of the despotate are among the best-preserved buildings of the period anywhere in Greece.',
      'Its historical importance is as the road not taken. For six years in the 1220s it was more likely than Nicaea to restore the empire, and the difference was one battle it chose to fight against the wrong enemy.')
  ],
  timeline: [
    { date: '1205', title: 'Founded', description: 'Michael I Komnenos Doukas establishes a Greek state in the mountains of north-western Greece.' },
    { date: '1217', title: 'A Latin emperor captured', description: 'Theodore takes Peter of Courtenay, the emperor-elect, on his way to Constantinople.' },
    { date: '1224', title: 'Thessalonica taken', description: 'Epirus takes the empire\'s second city from the Latins.' },
    { date: '1225', title: 'Theodore crowned emperor', description: 'The archbishop of Ohrid crowns him, directly challenging Nicaea\'s claim.' },
    { date: '1230', title: 'Klokotnitsa', description: 'Ivan Asen II of Bulgaria destroys the Epirote army and captures Theodore.' },
    { date: '1246', title: 'Thessalonica lost to Nicaea', description: 'John III Vatatzes takes the city, ending the western claim to the empire.' },
    { date: '1259', title: 'Withdrawal at Pelagonia', description: 'Michael II pulls his forces out before the battle, leaving his allies to be destroyed.', links: [{ title: 'Battle of Pelagonia', type: 'event', slug: 'battle-of-pelagonia' }] },
    { date: '1449', title: 'Taken by the Ottomans', description: 'Arta falls, ending the last of the Epirote states.' }
  ],
  relatedEntries: {
    people: [{ title: 'Michael VIII Palaiologos', type: 'person', slug: 'michael-viii-palaiologos', label: 'Whose brother destroyed its coalition in 1259' }],
    events: [{ title: 'Battle of Pelagonia', type: 'event', slug: 'battle-of-pelagonia', label: 'Where it abandoned its allies' }],
    locations: [
      { title: 'Empire of Nicaea', type: 'location', slug: 'empire-of-nicaea', label: 'Its rival for the imperial claim' },
      { title: 'First Bulgarian Empire', type: 'location', slug: 'first-bulgarian-empire', label: 'Whose successor state destroyed it at Klokotnitsa' },
      BYZ
    ]
  },
  sources: [
    { title: 'George Akropolites, History', url: 'https://en.wikipedia.org/wiki/George_Akropolites', type: 'primary source' },
    { title: 'Despotate of Epirus', url: 'https://en.wikipedia.org/wiki/Despotate_of_Epirus', type: 'encyclopedia' },
    { title: 'Dumbarton Oaks — Byzantine studies', url: 'https://www.doaks.org/research/byzantine', type: 'academic resource', institution: 'Dumbarton Oaks' }
  ]
}

const achaea = {
  id: 'principality-of-achaea', type: 'location', locationType: 'Principality',
  name: 'Principality of Achaea', aliases: ['Principality of the Morea', 'Achaea', 'Frankish Morea'],
  kingdom: 'Principality of Achaea', year: 1205,
  image: img('Aerial view of the Kastro Medieval Castle and Museum on Peloponnese, Greece (51223833204).jpg'),
  imageInfo: {
    caption: 'Chlemoutsi, the castle the Villehardouin princes built above the western coast of the Morea in the 1220s.',
    creator: 'Wikimedia Commons contributor', date: 'photographed 2021; the castle of the 1220s', source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Aerial_view_of_the_Kastro_Medieval_Castle_and_Museum_on_Peloponnese,_Greece_(51223833204).jpg',
    note: 'The best-preserved Frankish castle in Greece, built by Geoffrey I of Villehardouin — reportedly with money seized from the church — and the seat from which the principality was governed at its height. Licensed CC BY-SA 4.0.'
  },
  summary: 'The Principality of Achaea was the crusader state in the Peloponnese, the most successful of the Latin conquests in Greece, and the one that lost Mystras to Byzantium as a prince\'s ransom.',
  overview: 'A French principality in the Morea that outlived the empire it belonged to and lost its dominance in a single battle.',
  knownFor: [
    'Conquered the Peloponnese after 1204 with remarkably little fighting.',
    'Governed on French feudal lines and produced the Chronicle of the Morea and the Assizes of Romania.',
    'Built Chlemoutsi, the finest Frankish castle in Greece.',
    'Its prince was captured at Pelagonia in 1259 and ransomed for Mystras, Monemvasia and Maina.',
    'Coexisted with the Byzantine Despotate of the Morea until the Ottoman conquest.'
  ],
  contentSections: [
    S('Overview',
      'The Principality of Achaea was established in the Peloponnese — the Morea, to its Frankish rulers — by William of Champlitte and Geoffrey of Villehardouin after 1204, and it was the most durable and best-organised of the crusader states in Greece.',
      'It was conquered quickly and with relatively little resistance, partly because the Byzantine provincial administration had already collapsed and local landowners preferred a working government to none.',
      'It ran on French feudal law, produced a substantial literature, built serious castles, and was the wealthiest Latin state in the east after the kingdom of Cyprus. And in 1259 its prince rode to Pelagonia and lost it its dominance in an afternoon.'),
    S('Conquest and government',
      'The conquest of the Morea took about three years and was carried out by a few hundred knights, which says more about the state of Byzantine Greece in 1205 than about Frankish military prowess.',
      'The settlement was systematic. The principality was divided into twelve baronies, each owing knight service, and governed under the Assizes of Romania — a body of feudal law that is one of the fullest statements of crusader legal practice to survive.',
      'Greek landowners were largely left in place and Greek Orthodox worship continued, which is why the state functioned. The Chronicle of the Morea, written in the fourteenth century in Greek, French, Italian and Aragonese versions, is the principality\'s own account of itself and one of the most interesting sources for how a mixed Frankish-Greek society actually worked.'),
    S('Major rulers',
      'William of Champlitte led the conquest and left; Geoffrey I of Villehardouin (1209–1229) secured the state and built Chlemoutsi, using — the Chronicle says — money confiscated from the church, for which he was excommunicated and evidently did not much care.',
      'Geoffrey II (1229–1246) was the principality at its height: rich enough to lend money to the Latin emperor in Constantinople and to maintain a court that western visitors described as the most chivalrous in the east.',
      'William II (1246–1278) completed the conquest of the Morea by taking Monemvasia, and then lost the principality\'s position at Pelagonia — captured in the battle and released only in 1262 in exchange for the fortresses that became Byzantine Mystras.'),
    S('Pelagonia and after',
      'William II joined the coalition of Epirus and Sicily against Nicaea in 1259 because a Byzantine restoration was an obvious threat to a Frankish principality in Greece. He was right, and he lost.',
      'Taken prisoner at Pelagonia, he spent three years in captivity and bought his release by ceding Mystras, Monemvasia and Maina, in the south-east of the peninsula.',
      'Those fortresses became the base of a Byzantine province that grew into the Despotate of the Morea and spent the next two centuries taking the peninsula back, castle by castle. Mystras became a Byzantine capital and one of the great centres of late Byzantine art and scholarship.'),
    S('Legacy',
      'The principality declined through the fourteenth century under absentee Angevin and Navarrese rulers, and the Byzantines took most of what remained before the Ottomans took everything in 1460.',
      'What survives is the castles — Chlemoutsi, Mistra\'s lower town, Karytaina, Acrocorinth — and the Chronicle, which is the closest thing the Latin east produced to a national literature.',
      'It also demonstrates something the crusader states elsewhere rarely managed: a Latin ruling class and a Greek population coexisting for two centuries in a working polity. It did not save it, but it is why it lasted as long as it did.')
  ],
  timeline: [
    { date: '1205', title: 'The conquest begins', description: 'William of Champlitte and Geoffrey of Villehardouin take the Morea with a few hundred knights.' },
    { date: '1209', title: 'Geoffrey I becomes prince', description: 'The Villehardouin dynasty takes control and organises the principality into twelve baronies.' },
    { date: 'c. 1220s', title: 'Chlemoutsi built', description: 'The great castle above the western coast is built, reportedly with money seized from the church.' },
    { date: '1246', title: 'William II succeeds', description: 'The principality reaches its greatest extent and prestige.' },
    { date: '1248', title: 'Monemvasia taken', description: 'The last Byzantine stronghold in the peninsula falls, completing the conquest.' },
    { date: '1259', title: 'Pelagonia', description: 'William II is captured fighting the Nicaeans in Macedonia.', links: [{ title: 'Battle of Pelagonia', type: 'event', slug: 'battle-of-pelagonia' }] },
    { date: '1262', title: 'Mystras ceded', description: 'He buys his freedom with three fortresses that become the nucleus of Byzantine Morea.' },
    { date: '1460', title: 'The Ottoman conquest', description: 'The Ottomans take the Peloponnese, ending both the Frankish and Byzantine states in it.' }
  ],
  relatedEntries: {
    people: [{ title: 'Michael VIII Palaiologos', type: 'person', slug: 'michael-viii-palaiologos', label: 'Who took its south-eastern fortresses as a ransom' }],
    events: [{ title: 'Battle of Pelagonia', type: 'event', slug: 'battle-of-pelagonia', label: 'Where its prince was captured' }],
    locations: [
      { title: 'Latin Empire', type: 'location', slug: 'latin-empire', label: 'Its nominal overlord, which it outlived' },
      { title: 'Empire of Nicaea', type: 'location', slug: 'empire-of-nicaea', label: 'Whose victory cost it Mystras' },
      { title: 'Crusader States', type: 'location', slug: 'crusader-states', label: 'The wider world of Latin conquest it belonged to' }
    ]
  },
  sources: [
    { title: 'The Chronicle of the Morea', url: 'https://en.wikipedia.org/wiki/Chronicle_of_the_Morea', type: 'primary source' },
    { title: 'Principality of Achaea', url: 'https://en.wikipedia.org/wiki/Principality_of_Achaea', type: 'encyclopedia' },
    { title: 'Dumbarton Oaks — Byzantine studies', url: 'https://www.doaks.org/research/byzantine', type: 'academic resource', institution: 'Dumbarton Oaks' }
  ]
}

const sicily = {
  id: 'kingdom-of-sicily', type: 'location', locationType: 'Kingdom',
  name: 'Kingdom of Sicily', aliases: ['Regno di Sicilia', 'Norman Sicily'],
  kingdom: 'Kingdom of Sicily', year: 1130,
  image: img('Chapelle Palatine.jpg'),
  imageInfo: {
    caption: 'The Cappella Palatina in Palermo, built for Roger II with Byzantine mosaics, Arab muqarnas ceiling and a Latin plan.',
    creator: 'Photographed in the Palazzo dei Normanni, Palermo', date: 'the chapel of 1132–1140', source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Chapelle_Palatine.jpg',
    note: 'The single best object for what this kingdom was: Greek mosaicists, Muslim carpenters and Norman patrons working on one building, with inscriptions in Latin, Greek and Arabic. Public domain.'
  },
  summary: 'The Kingdom of Sicily was the Norman state founded in 1130 that fused Latin, Greek and Arab cultures, threatened Byzantium for two centuries, and lost its island in the Sicilian Vespers of 1282.',
  overview: 'A Norman kingdom in the middle of the Mediterranean that spoke three languages, and the Byzantine Empire\'s most persistent western enemy.',
  knownFor: [
    'Founded in 1130 by Roger II from the Norman conquests in Sicily and southern Italy.',
    'Produced a Latin-Greek-Arabic court culture unmatched anywhere in medieval Europe.',
    'Invaded the Byzantine Balkans repeatedly, from Robert Guiscard in 1081 to Manfred in 1259.',
    'Passed to Frederick II, who ruled it as the base of his imperial ambitions.',
    'Lost the island in the Sicilian Vespers of 1282, a rebellion Byzantine gold helped to fund.'
  ],
  contentSections: [
    S('Overview',
      'The Kingdom of Sicily was created in 1130 when Roger II united the Norman conquests in Sicily and southern Italy into a single monarchy, with the island — recently taken from its Muslim rulers — as its centre.',
      'It was the wealthiest and most sophisticated state in twelfth-century Europe and the strangest: a Norman dynasty ruling Greek Orthodox and Arabic-speaking Muslim subjects, with an administration that worked in three languages and a court that borrowed from all of them.',
      'For the Byzantine Empire it was a persistent western threat. Norman armies crossed the Adriatic repeatedly — Robert Guiscard nearly broke the empire in 1081, and Manfred sent the German troops who fought at Pelagonia in 1259.'),
    S('The Norman conquest and the three cultures',
      'Sicily had been Muslim for two centuries when the Norman adventurers Robert Guiscard and his brother Roger took it between 1061 and 1091, and southern Italy was largely Greek Orthodox and had been Byzantine until the same decade.',
      'What the Normans built on that inheritance was genuinely unusual. The royal administration used Latin, Greek and Arabic; the fleet was commanded by a Greek with the Arabic-derived title of ammiratus, from which "admiral" comes; and the geographer al-Idrisi made his world map at Roger II\'s court.',
      'The buildings say it best. The Cappella Palatina has Byzantine mosaics under an Arab honeycomb ceiling in a Latin chapel; the cathedral at Monreale and the Martorana in Palermo are the same synthesis. It did not survive the twelfth century intact — the Muslim population was later deported to Lucera — but while it lasted there was nothing like it.'),
    S('Major rulers',
      'Roger II (1130–1154) created the kingdom, codified its law, and made it a naval power that raided the Byzantine Empire and North Africa.',
      'William I and William II held it through the twelfth century; the male line failed, and through marriage it passed to the Hohenstaufen. Frederick II (1198–1250) — king of Sicily, king of Germany, Holy Roman Emperor — governed it as the base of his power and the place he most wanted to be.',
      'Manfred (1258–1266), his illegitimate son, sent the troops that fought at Pelagonia and married his daughter to Michael II of Epirus. Charles of Anjou (1266–1285) destroyed and replaced him, and then spent fifteen years preparing to conquer Constantinople.'),
    S('Sicily and Byzantium',
      'The relationship was one of near-continuous hostility. Robert Guiscard invaded the Balkans in 1081 and beat Alexios I at Dyrrhachium; Roger II\'s fleets sacked Corinth and Thebes in 1147 and carried off the silk workers to Palermo; Manfred held Corfu and the Epirote coast.',
      'The most dangerous phase came last. Charles of Anjou, having taken the kingdom in 1266, assembled a coalition through the 1270s explicitly to restore the Latin Empire at Constantinople, with papal backing.',
      'Michael VIII\'s response was the Union of Lyons in 1274, which removed the papal justification, and then — when a new pope restored it — money. Byzantine gold went to Peter III of Aragon and to the discontented Sicilian nobility.'),
    S('Law and government',
      'Roger II governed through an administration inherited in working order from the people he had conquered, which is why the kingdom was rich when comparable Norman states were not.',
      'The Assizes of Ariano, issued around 1140, asserted royal authority over feudal custom far more firmly than any contemporary western monarchy managed, and the fiscal machinery — the diwan, run in Arabic — was Fatimid in origin and unmatched in Latin Europe.',
      'Frederick II took it further with the Constitutions of Melfi in 1231, a code that treated the kingdom as a single legal jurisdiction under the crown. Historians have called the result the first modern state in Europe, which overstates it; what is not overstated is that Sicily was administered while its neighbours were merely ruled.'),
    S('The Vespers and after',
      'On Easter Monday 1282 the population of Palermo rose against the French garrison, in a massacre that spread across the island within weeks. Peter III of Aragon landed in August and took Sicily.',
      'Charles\'s fleet, assembled for Constantinople, was destroyed or diverted, and the invasion never sailed. Michael VIII wrote that if he said God had freed the Sicilians through him, he would only be telling the truth — and he was.',
      'The kingdom split permanently: Aragon held the island, the Angevins held the mainland from Naples, and the two fought for twenty years. The Byzantine Empire got another century and a half from it.')
  ],
  timeline: [
    { date: '1061–1091', title: 'The Norman conquest', description: 'Robert Guiscard and his brother Roger take Sicily from its Muslim rulers and southern Italy from Byzantium.' },
    { date: '1081', title: 'Guiscard invades the Balkans', description: 'A Norman army beats Alexios I at Dyrrhachium and nearly breaks the Byzantine recovery before it starts.' },
    { date: '1130', title: 'The kingdom founded', description: 'Roger II unites the Norman conquests into a single monarchy centred on Palermo.' },
    { date: '1147', title: 'Corinth and Thebes sacked', description: 'Sicilian fleets raid Greece and carry the silk weavers back to Palermo.' },
    { date: '1194', title: 'The Hohenstaufen inherit', description: 'The kingdom passes by marriage to the German imperial house.' },
    { date: '1259', title: 'Manfred at Pelagonia', description: 'Sicilian troops fight in the coalition destroyed by Nicaea in Macedonia.', links: [{ title: 'Battle of Pelagonia', type: 'event', slug: 'battle-of-pelagonia' }] },
    { date: '1266', title: 'Charles of Anjou takes the kingdom', description: 'Manfred is killed and the Angevins begin preparing to restore the Latin Empire at Constantinople.' },
    { date: '1282', title: 'The Sicilian Vespers', description: 'Palermo rises against the French; Peter III of Aragon takes the island and the invasion of Byzantium never sails.' }
  ],
  relatedEntries: {
    people: [{ title: 'Michael VIII Palaiologos', type: 'person', slug: 'michael-viii-palaiologos', label: 'Who helped fund the rebellion that split the kingdom' }],
    events: [{ title: 'Battle of Pelagonia', type: 'event', slug: 'battle-of-pelagonia', label: 'Where its troops fought against Nicaea' }],
    locations: [
      { title: 'Byzantine Empire', type: 'location', slug: 'byzantine-empire', label: 'Its most frequent target, and eventually its undoer' },
      { title: 'Latin Empire', type: 'location', slug: 'latin-empire', label: 'Which Charles of Anjou intended to restore' },
      { title: 'Emirate of Crete', type: 'location', slug: 'emirate-of-crete', label: 'Part of the same Muslim Mediterranean the Normans conquered their island from' }
    ]
  },
  sources: [
    { title: 'Al-Idrisi, Tabula Rogeriana', url: 'https://en.wikipedia.org/wiki/Tabula_Rogeriana', type: 'primary source' },
    { title: 'Kingdom of Sicily', url: 'https://en.wikipedia.org/wiki/Kingdom_of_Sicily', type: 'encyclopedia' },
    { title: 'Cappella Palatina, Palermo', url: 'https://en.wikipedia.org/wiki/Cappella_Palatina', type: 'museum collection', institution: 'Palazzo dei Normanni' }
  ]
}

data.events.push(pelagonia, recovery)
data.characters.push(michael8)
data.locations.push(nicaea, latinEmpire, epirus, achaea, sicily)

// ── Links ─────────────────────────────────────────────────────────────────────
const push = (arr, item) => { if (!arr.some((x) => x.slug === item.slug)) arr.push(item) }
const loc = (id) => data.locations.find((l) => l.id === id)
const chr = (id) => data.characters.find((c) => c.id === id)
const evt = (id) => data.events.find((e) => e.id === id)

const m8Ref = (label) => ({ title: 'Michael VIII Palaiologos', type: 'person', slug: 'michael-viii-palaiologos', label })
const recRef = (label) => ({ title: 'Recovery of Constantinople', type: 'event', slug: 'recovery-of-constantinople', label })

const byz = loc('byzantine-empire')
push((byz.relatedEntries.events ??= []), recRef('Where the empire was restored in 1261 after fifty-seven years'))
push((byz.relatedEntries.people ??= []), m8Ref('Recovered Constantinople and founded the last dynasty'))

const cpl = loc('constantinople')
push((cpl.relatedEntries.events ??= []), recRef('Recovered by eight hundred men through an undefended gate in 1261'))

const fall = evt('fall-of-constantinople')
push((fall.relatedEntries.events ??= []), recRef('The city recovered in 1261, and held for another 192 years'))

const cxi = chr('constantine-xi-palaiologos')
push((cxi.relatedEntries.people ??= []), m8Ref('Founder of his dynasty, who recovered the city he died defending'))

const crusaders = loc('crusader-states')
push((crusaders.relatedEntries.locations ??= []), { title: 'Latin Empire', type: 'location', slug: 'latin-empire', label: 'The crusader state established at Constantinople in 1204' })
push((crusaders.relatedEntries.locations ??= []), { title: 'Principality of Achaea', type: 'location', slug: 'principality-of-achaea', label: 'The most durable of the Latin conquests in Greece' })

const baldwin = chr('baldwin-i-latin-emperor')
push((baldwin.relatedEntries.locations ??= []), { title: 'Latin Empire', type: 'location', slug: 'latin-empire', label: 'The empire he was elected to rule' })

// Michael VIII into the Palaiologos house.
const house = data.houses.find((h) => h.id === 'house-of-palaiologos')
if (!house.notableMembers.some((m) => m.personSlug === 'michael-viii-palaiologos')) {
  house.notableMembers.unshift({ personSlug: 'michael-viii-palaiologos', displayName: 'Michael VIII Palaiologos', note: 'Founder of the dynasty; recovered Constantinople in 1261' })
  console.log('~ house-of-palaiologos: Michael VIII added as founding member')
}

console.log('+ events     : battle-of-pelagonia, recovery-of-constantinople')
console.log('+ characters : michael-viii-palaiologos')
console.log('+ locations  : empire-of-nicaea, latin-empire, despotate-of-epirus,')
console.log('               principality-of-achaea, kingdom-of-sicily')

writeFileSync(dataPath, JSON.stringify(data, null, 2))
console.log(`\nM12 written — characters ${data.characters.length}, locations ${data.locations.length}, events ${data.events.length}`)
