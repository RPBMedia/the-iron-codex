import { readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
const __dirname = dirname(fileURLToPath(import.meta.url))
const dataPath = join(__dirname, '..', 'server', 'data', 'history.json')
const data = JSON.parse(readFileSync(dataPath, 'utf8'))
const P = (slug, displayName, note) => ({ personSlug: slug, displayName, note })
const IMG = (f) => `https://commons.wikimedia.org/wiki/Special:FilePath/${f}?width=1000`
const DK = () => ({ name: 'Kingdom of Denmark', type: 'location', slug: 'kingdom-of-denmark' })
const HRE = () => ({ name: 'Holy Roman Empire', type: 'location', slug: 'holy-roman-empire' })

// 1. Early Danish Royal House — the 9th-century kings of the Danes (4 rulers)
const earlyDanish = {
  id: 'early-danish-royal-house', type: 'house', name: 'Early Danish Royal House',
  aliases: ['Early Danish ruling house', 'Early Danish kings', 'House of Godfred', 'Danish royal house (9th century)'],
  originYear: 804, endYear: 873, reignSpan: 'c. 804–873', region: 'Denmark & the southern Baltic', originPlace: 'Jutland & the Danish isles',
  arms: 'None — the 9th-century Danish kings ruled before the age of heraldry.',
  image: IMG("Danevirke,_Valdemar%27s_Wall.jpg"),
  imageInfo: { caption: 'The Danevirke, the Danish frontier rampart in Schleswig that King Godfred expanded against the Franks around 808; the brick face shown here is a later, twelfth-century phase over the earlier earthworks.', creator: 'Photograph', date: 'Earthworks 8th–12th century', source: 'Wikimedia Commons', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Danevirke,_Valdemar%27s_Wall.jpg', note: 'A photograph of the surviving rampart; the visible brick wall (the Valdemarsmur) is a later phase, but it stands on the frontier work associated with the early Danish kings.' },
  summary: 'The 9th-century kings of the Danes — Godfred, Hemming, and the two Horiks — who resisted Charlemagne, fortified the Danevirke, and ruled Denmark at the dawn of the Viking Age.',
  overview: 'The first securely documented Danish monarchy, known mainly through Frankish sources, is the line of kings who ruled the Danes in the ninth century. King Godfred confronted Charlemagne and strengthened the Danevirke frontier wall; Hemming made peace with the Franks; and Horik I and Horik II held a long, contested kingship through the first Viking raids on Francia. They precede the later House of Jelling that would unite and Christianise Denmark.',
  founder: { displayName: 'Godfred', note: 'King of the Danes (d. 810); the first strong ruler recorded in Frankish sources' },
  seats: [DK()],
  notableMembers: [
    P('godfred-of-denmark', 'Godfred', 'King of the Danes; expanded the Danevirke and defied Charlemagne'),
    P('hemming-of-denmark', 'Hemming', 'Made the Treaty of Heiligen (811), fixing the Eider frontier'),
    P('horik-i-of-denmark', 'Horik I', 'Long-reigning king; received the missionary Ansgar; killed in the 854 civil war'),
    P('horik-ii-of-denmark', 'Horik II', 'Succeeded after the bloodshed of 854 and continued Ansgar’s toleration')
  ],
  familyTree: { caption: 'The 9th-century Danish kings as reconstructed from Frankish annals; exact kinship is uncertain, so the notes state each relationship as the sources give it.', root: {
    name: 'Godfred', personSlug: 'godfred-of-denmark', note: 'King of the Danes, d. 810',
    children: [
      { name: 'Hemming', personSlug: 'hemming-of-denmark', note: 'kinsman and successor; made peace with the Franks in 811' },
      { name: 'Horik I', personSlug: 'horik-i-of-denmark', note: 'son of Godfred; king c. 813–854', children: [
        { name: 'Horik II', personSlug: 'horik-ii-of-denmark', note: 'kinsman and successor after the 854 civil war' }
      ] }
    ]
  } },
  contentSections: [
    { title: 'Origins', paragraphs: [
      'The Danish kings of the ninth century are the first rulers of Denmark to appear clearly in the written record, almost entirely through Frankish sources — above all the Royal Frankish Annals and Rimbert’s Life of Ansgar. They ruled a kingdom centred on Jutland and the Danish isles, with the great trading town of Hedeby and the frontier rampart of the Danevirke as its southern anchors.',
      'The dynasty’s power rested on control of the Jutland peninsula and the sea-lanes of the western Baltic, and on the ability to muster fleets — the same maritime strength that would soon carry Danish raiders deep into the Frankish and English worlds.'
    ] },
    { title: 'Godfred, Hemming, and the Franks', paragraphs: [
      'King Godfred is the first of the line to loom large in the sources. Alarmed by Charlemagne’s conquest of the neighbouring Saxons, around 808 he strengthened the Danevirke, sacked the Slavic trading town of Reric and moved its merchants to Hedeby, and threatened Frisia; he was murdered by one of his own followers in 810 before a full war with the empire came. His successor Hemming quickly made terms, and the Treaty of Heiligen in 811 fixed the River Eider as the border between the Danes and the Frankish empire.',
      'Godfred’s aggression and Hemming’s diplomacy set the pattern for the century: the Danish kings were strong enough to defy the Carolingians on the frontier, but preferred a fortified border to open war with the greatest power in the West.'
    ] },
    { title: 'The reigns of Horik I and Horik II', paragraphs: [
      'After a decade of succession struggles, Horik I emerged as sole king and reigned for some forty years. His reign coincided with the first great Viking raids on Francia: a Danish fleet sacked Hamburg in 845, and Horik alternately disavowed and profited from such expeditions while negotiating with the Frankish emperors and permitting the missionary Ansgar to build churches at Hedeby and Ribe. In 854 a dynastic war destroyed most of the royal kin, and Horik I was killed.',
      'Horik II, a young kinsman, survived the slaughter and succeeded him, maintaining the toleration of Ansgar’s mission. After his reign the ninth-century royal line fades from the record, giving way in time to the dynasty of Jelling that would unite and Christianise Denmark under Gorm and Harald Bluetooth.'
    ] }
  ],
  timeline: [
    { date: 'c. 808', title: 'Godfred fortifies the Danevirke', description: 'Facing Charlemagne’s conquest of Saxony, Godfred strengthens the frontier wall and moves the merchants of Reric to Hedeby.' },
    { date: '811', title: 'Treaty of Heiligen', description: 'Hemming fixes the River Eider as the Danish–Frankish border.' },
    { date: '845', title: 'Sack of Hamburg', description: 'A Danish fleet burns Hamburg during the reign of Horik I.' },
    { date: '854', title: 'Dynastic civil war', description: 'Horik I is killed with most of the royal kin; Horik II succeeds.' }
  ],
  relatedEntries: { people: [
    { title: 'Godfred', type: 'person', slug: 'godfred-of-denmark', label: 'Defied Charlemagne; expanded the Danevirke' },
    { title: 'Horik I', type: 'person', slug: 'horik-i-of-denmark', label: 'Long-reigning king; patron-tolerant of Ansgar' },
    { title: 'Hemming', type: 'person', slug: 'hemming-of-denmark', label: 'Made peace with the Franks, 811' }
  ], locations: [DK()], houses: [{ title: 'House of Jelling', type: 'house', slug: 'house-of-jelling', label: 'The later dynasty that united Denmark' }] },
  sources: [
    { title: 'Godfred — Encyclopaedia Britannica', author: 'Encyclopaedia Britannica', type: 'encyclopedia', url: 'https://www.britannica.com/biography/Godfred' },
    { title: 'History of Denmark — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/History_of_Denmark' },
    { title: 'Danevirke — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Danevirke' }
  ]
}

// 2. House of Wittelsbach — Bavaria, the Palatinate, and the Kalmar Union
const wittelsbach = {
  id: 'house-of-wittelsbach', type: 'house', name: 'House of Wittelsbach',
  aliases: ['Wittelsbach', 'Wittelsbach dynasty', 'House of Wittelsbach'],
  originYear: 1180, endYear: 1918, reignSpan: '1180–1918 (Bavaria)', region: 'Bavaria & the Rhine Palatinate', originPlace: 'Wittelsbach Castle, Bavaria',
  arms: 'Lozengy azure and argent — the blue-and-white lozenges of Bavaria.',
  image: IMG('Ludwig_der_Bayer.jpg'),
  imageInfo: { caption: 'Louis IV the Bavarian, the Wittelsbach who was crowned Holy Roman Emperor in 1328, in a later imperial portrait.', creator: 'Later portrait', date: 'Later depiction (Louis IV d. 1347)', source: 'Wikimedia Commons', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Ludwig_der_Bayer.jpg', note: 'A later idealised portrait of Louis IV in imperial regalia, not a contemporary likeness.' },
  summary: 'The Bavarian dynasty that ruled Bavaria and the Rhenish Palatinate for centuries and produced Emperor Louis IV and Christopher of Bavaria, king of the Kalmar Union.',
  overview: 'The House of Wittelsbach received the Duchy of Bavaria in 1180 and held it until 1918, later dividing into Bavarian and Palatine branches, the latter becoming electors of the Holy Roman Empire. Its greatest medieval figure, Louis IV, won the imperial crown; a century later the Wittelsbach Christopher of Bavaria was elected king of Denmark, Sweden, and Norway in the Kalmar Union.',
  founder: { displayName: 'Otto I, Duke of Bavaria', note: 'Invested with Bavaria in 1180 after the fall of Henry the Lion (no Codex article yet)' },
  seats: [HRE()],
  notableMembers: [
    { displayName: 'Louis IV the Bavarian', note: 'Holy Roman Emperor, crowned 1328; beat the Habsburgs at Mühldorf (1322)' },
    P('christopher-of-bavaria', 'Christopher of Bavaria', 'King of Denmark, Sweden, and Norway in the Kalmar Union, 1440–1448'),
    { displayName: 'Rupert of the Palatinate', note: 'Elector Palatine and King of the Romans, 1400–1410' }
  ],
  familyTree: { caption: 'The Wittelsbach line from Duke Otto I through the imperial Louis IV and the Palatine branch, with the Kalmar-Union king Christopher of Bavaria; figures without Codex articles are named but not linked.', root: {
    name: 'Otto I, Duke of Bavaria', note: 'invested with Bavaria, 1180',
    children: [
      { name: 'Louis IV the Bavarian', note: 'Holy Roman Emperor, r. 1328–1347', branch: 'Bavarian line' },
      { name: 'Palatine branch', note: 'electors of the Rhine', children: [
        { name: 'Christopher of Bavaria', personSlug: 'christopher-of-bavaria', note: 'King of the Kalmar Union, 1440–1448' }
      ] }
    ]
  } },
  contentSections: [
    { title: 'Origins', paragraphs: [
      'The Wittelsbachs took their name from a castle in Bavaria and rose as ministerials and counts palatine before Frederick Barbarossa granted the Duchy of Bavaria to Otto I of Wittelsbach in 1180, following the fall of the Welf duke Henry the Lion. From that grant the family held Bavaria without interruption until 1918.',
      'In the thirteenth century the house divided into two great branches: the dukes of Bavaria and the counts palatine of the Rhine. The Palatine branch gained a vote in the imperial elections, giving the Wittelsbachs a permanent place among the electors of the Holy Roman Empire.'
    ] },
    { title: 'Louis IV and the imperial crown', paragraphs: [
      'The dynasty reached its medieval height with Louis IV, Duke of Bavaria, elected King of the Romans in 1314 against a Habsburg rival and defeating him decisively at Mühldorf in 1322. Crowned emperor in 1328, Louis spent his reign in bitter conflict with the Avignon papacy, which excommunicated him, and with the rising Luxembourg dynasty that would eventually supplant him.',
      'His acquisition of Brandenburg, Holland, and other territories for his sons overreached the family’s strength and provoked the electors, and after his death the imperial crown passed to the Luxembourg Charles IV.'
    ] },
    { title: 'Christopher of Bavaria and later fortunes', paragraphs: [
      'In 1440 a Wittelsbach of the Palatine line, Christopher of Bavaria, was elected king of Denmark, and soon of Sweden and Norway, briefly wearing all three crowns of the Kalmar Union until his sudden death in 1448 without an heir — an event that opened the Danish throne to the House of Oldenburg.',
      'The Wittelsbachs never regained the imperial title in the Middle Ages, but they held Bavaria and the Palatinate through every later upheaval, ruling Bavaria as dukes, electors, and finally kings until the German revolutions of 1918.'
    ] }
  ],
  timeline: [
    { date: '1180', title: 'Otto I made Duke of Bavaria', description: 'The Wittelsbachs gain Bavaria after the fall of Henry the Lion.' },
    { date: '1328', title: 'Louis IV crowned emperor', description: 'The Bavarian duke becomes Holy Roman Emperor, in conflict with the papacy.' },
    { date: '1440', title: 'Christopher elected king', description: 'Christopher of Bavaria is chosen king of the Kalmar Union.', links: [{ title: 'Christopher of Bavaria', type: 'person', slug: 'christopher-of-bavaria' }] }
  ],
  relatedEntries: { people: [
    { title: 'Christopher of Bavaria', type: 'person', slug: 'christopher-of-bavaria', label: 'Wittelsbach king of the Kalmar Union' }
  ], locations: [HRE(), DK()], houses: [{ title: 'House of Luxembourg', type: 'house', slug: 'house-of-luxembourg', label: 'The rival dynasty that took the imperial crown after Louis IV' }] },
  sources: [
    { title: 'House of Wittelsbach — Encyclopaedia Britannica', author: 'Encyclopaedia Britannica', type: 'encyclopedia', url: 'https://www.britannica.com/topic/House-of-Wittelsbach' },
    { title: 'Louis IV, Holy Roman Emperor — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Louis_IV,_Holy_Roman_Emperor' },
    { title: 'Christopher of Bavaria — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Christopher_of_Bavaria' }
  ]
}

// 3. House of Luxembourg — emperors and kings of Bohemia and Hungary
const luxembourg = {
  id: 'house-of-luxembourg', type: 'house', name: 'House of Luxembourg',
  aliases: ['Luxembourg', 'House of Luxembourg', 'Luxembourg dynasty', 'Limburg-Luxembourg'],
  originYear: 1308, endYear: 1437, reignSpan: '1308–1437 (imperial line)', region: 'Luxembourg, Bohemia, Hungary & the Empire', originPlace: 'County of Luxembourg',
  arms: 'Barry of ten argent and azure, a lion rampant queue-fourchée gules crowned or — the Luxembourg lion.',
  image: IMG('Sigismund,_Holy_Roman_Emperor,_by_Albrecht_D%C3%BCrer.jpg'),
  imageInfo: { caption: 'Emperor Sigismund of Luxembourg, the last of the male line, in Albrecht Dürer’s posthumous portrait (c. 1512).', creator: 'Albrecht Dürer', date: 'c. 1512 (posthumous; Sigismund d. 1437)', source: 'Wikimedia Commons', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Sigismund,_Holy_Roman_Emperor,_by_Albrecht_D%C3%BCrer.jpg', note: 'A posthumous idealised portrait painted by Dürer for Nuremberg some seventy-five years after Sigismund’s death, not a contemporary likeness.' },
  summary: 'The counts of Luxembourg who won the imperial crown and the thrones of Bohemia and Hungary — Henry VII, Charles IV, and Sigismund.',
  overview: 'The House of Luxembourg rose from a frontier county to become one of the greatest dynasties of the late medieval Empire. Henry VII gained the imperial crown in 1312; his son John the Blind became King of Bohemia; John’s son Charles IV issued the Golden Bull and made Prague an imperial capital; and Charles’s son Sigismund, king of Hungary and Bohemia and emperor, convened the Council of Constance before the male line ended at his death in 1437.',
  founder: { displayName: 'Henry VII, Holy Roman Emperor', note: 'Count of Luxembourg elected King of the Romans in 1308, crowned emperor 1312 (no Codex article yet)' },
  seats: [HRE()],
  notableMembers: [
    { displayName: 'Henry VII', note: 'Count of Luxembourg; Holy Roman Emperor from 1312' },
    { displayName: 'John the Blind', note: 'King of Bohemia; died fighting for France at Crécy, 1346' },
    { displayName: 'Charles IV', note: 'Emperor and King of Bohemia; issued the Golden Bull of 1356' },
    P('sigismund-of-luxembourg', 'Sigismund', 'Emperor, King of Hungary and Bohemia; convened the Council of Constance')
  ],
  familyTree: { caption: 'The Luxembourg imperial line from Henry VII to Sigismund; only Sigismund has a Codex article so far, the others are named but not yet linked.', root: {
    name: 'Henry VII', note: 'Holy Roman Emperor, d. 1313',
    children: [
      { name: 'John the Blind', note: 'King of Bohemia, d. 1346 at Crécy', children: [
        { name: 'Charles IV', note: 'Emperor; Golden Bull of 1356', children: [
          { name: 'Wenceslaus', note: 'King of the Romans and Bohemia (deposed 1400)' },
          { name: 'Sigismund', personSlug: 'sigismund-of-luxembourg', note: 'Emperor; d. 1437, ending the male line' }
        ] }
      ] }
    ]
  } },
  contentSections: [
    { title: 'Origins', paragraphs: [
      'The Luxembourgs were counts of a small but strategically placed territory between France and the Empire. Their fortunes were transformed in 1308 when Henry VII was elected King of the Romans; crowned emperor at Rome in 1312, he revived imperial ambitions in Italy before dying there in 1313. Through a marriage alliance he secured the crown of Bohemia for his son John.',
      'From Bohemia, one of the wealthiest kingdoms of the Empire, the Luxembourgs built a power base that let them contend for the imperial throne across the fourteenth century against the Wittelsbachs and Habsburgs.'
    ] },
    { title: 'John the Blind and Charles IV', paragraphs: [
      'John of Bohemia, "the Blind," was the model of a wandering chivalric king, campaigning from Lithuania to Italy; blind in his last years, he insisted on being led into the fight at the Battle of Crécy in 1346 and was killed there. His son Charles IV became the dominant statesman of the age: emperor and King of Bohemia, he made Prague a capital with a university and a great cathedral, and in 1356 issued the Golden Bull that fixed the procedure for imperial elections for centuries.',
      'Under Charles IV the dynasty reached its height, holding the Empire, Bohemia, and Brandenburg and shaping the constitution of the Holy Roman Empire itself.'
    ] },
    { title: 'Sigismund and the end of the line', paragraphs: [
      'Charles’s son Sigismund inherited Hungary through marriage and later Bohemia and the Empire. His long reign was dominated by two crises: the Great Western Schism, which he ended by convening the Council of Constance (1414–1418) — the same council that condemned and burned the Bohemian reformer Jan Hus — and the Hussite Wars that erupted in Bohemia in response.',
      'Sigismund died in 1437 as the last male Luxembourg. Through his daughter Elizabeth, married to Albert of Habsburg, the crowns of Hungary and Bohemia and the imperial claim passed to the House of Habsburg, opening their long ascendancy.'
    ] }
  ],
  timeline: [
    { date: '1312', title: 'Henry VII crowned emperor', description: 'The Count of Luxembourg gains the imperial crown at Rome.' },
    { date: '1356', title: 'The Golden Bull', description: 'Charles IV fixes the rules for electing the Holy Roman Emperor.' },
    { date: '1437', title: 'Death of Sigismund', description: 'The last male Luxembourg dies; the inheritance passes to the Habsburgs.', links: [{ title: 'Sigismund', type: 'person', slug: 'sigismund-of-luxembourg' }] }
  ],
  relatedEntries: { people: [
    { title: 'Sigismund', type: 'person', slug: 'sigismund-of-luxembourg', label: 'Emperor; last of the male line' }
  ], locations: [HRE()], houses: [
    { title: 'House of Wittelsbach', type: 'house', slug: 'house-of-wittelsbach', label: 'The imperial house it displaced under Charles IV' },
    { title: 'House of Valois', type: 'house', slug: 'house-of-valois', label: 'The French royal house John the Blind died serving at Crécy' }
  ] },
  sources: [
    { title: 'House of Luxembourg — Encyclopaedia Britannica', author: 'Encyclopaedia Britannica', type: 'encyclopedia', url: 'https://www.britannica.com/topic/house-of-Luxembourg' },
    { title: 'Sigismund, Holy Roman Emperor — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Sigismund,_Holy_Roman_Emperor' },
    { title: 'Charles IV, Holy Roman Emperor — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Charles_IV,_Holy_Roman_Emperor' }
  ]
}

// 4. House of Oldenburg — the royal house of Denmark from 1448
const oldenburg = {
  id: 'house-of-oldenburg', type: 'house', name: 'House of Oldenburg',
  aliases: ['Oldenburg', 'House of Oldenburg', 'Oldenburg dynasty'],
  originYear: 1448, endYear: 1863, reignSpan: 'from 1448 (Denmark)', region: 'Denmark, Norway & Schleswig-Holstein', originPlace: 'County of Oldenburg',
  arms: 'Or, two bars gules — the arms of the counts of Oldenburg.',
  image: IMG('Christian_I_of_Denmark,_Norway_%26_Sweden_1440s.jpg'),
  imageInfo: { caption: 'Christian I of Denmark, first Oldenburg king of Denmark, Norway, and Sweden, in a 15th-century panel.', creator: 'Unknown artist', date: '15th century', source: 'Wikimedia Commons', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Christian_I_of_Denmark,_Norway_%26_Sweden_1440s.jpg', note: 'A near-contemporary painted portrait of Christian I as a crowned king.' },
  summary: 'The comital house of Oldenburg that won the Danish crown in 1448 under Christian I and became the enduring royal house of Denmark and Norway.',
  overview: 'When the Wittelsbach king Christopher of Bavaria died without an heir in 1448, the Danish council elected Count Christian of Oldenburg as king. Christian I went on to gain Norway and, briefly, Sweden, and to inherit Schleswig and Holstein, founding a dynasty that would rule Denmark into the nineteenth century and Norway for centuries, and that spread through its branches across the thrones of Europe.',
  founder: P('christian-i-of-denmark', 'Christian I', 'Count of Oldenburg elected King of Denmark in 1448'),
  seats: [DK()],
  notableMembers: [
    P('christian-i-of-denmark', 'Christian I', 'First Oldenburg king of Denmark, Norway, and Sweden'),
    { displayName: 'John (Hans)', note: 'Christian I’s son; king of Denmark, Norway, and briefly Sweden' }
  ],
  familyTree: { caption: 'The founding of the Oldenburg royal line: Count Dietrich’s son Christian I gains the Danish crown, passing it to his son John.', root: {
    name: 'Dietrich of Oldenburg', note: 'Count of Oldenburg, "the Fortunate"',
    children: [
      { name: 'Christian I', personSlug: 'christian-i-of-denmark', note: 'King of Denmark from 1448', children: [
        { name: 'John (Hans)', note: 'King of Denmark and Norway' }
      ] }
    ]
  } },
  contentSections: [
    { title: 'Origins', paragraphs: [
      'The house took its name from the county of Oldenburg in north-western Germany, where its counts had ruled since the twelfth century. Its rise to royalty came through kinship and election rather than conquest: Count Christian was related to the earlier Danish kings, and when the throne fell vacant in 1448 the Danish Rigsråd chose him over other claimants.',
      'Christian I’s accession bound the small German county to the crowns of Scandinavia and made Oldenburg one of the most successful dynasties in European history.'
    ] },
    { title: 'Christian I and the three crowns', paragraphs: [
      'Elected King of Denmark in 1448, Christian I was crowned King of Norway in 1450 and, for a time, recognised as King of Sweden — reviving the union of the three Scandinavian kingdoms first forged at Kalmar. In 1460 the nobles of Schleswig and Holstein elected him their duke and count, joining those duchies to the Danish crown by the pledge that they should remain "forever undivided."',
      'His reign was chronically short of money — he even pawned the Orkney and Shetland islands to Scotland as his daughter’s dowry, and they were never redeemed — but he founded the University of Copenhagen and secured his dynasty on the Danish throne.'
    ] },
    { title: 'A dynasty of dynasties', paragraphs: [
      'From Christian I the House of Oldenburg ruled Denmark until 1863 and Norway in personal union for centuries, while cadet branches carried the name across the continent. Offshoots of the family — the houses of Holstein-Gottorp, Glücksburg, and their kin — came to hold the thrones of Russia, Greece, and Norway, and the British royal house descends from the Oldenburg line through Prince Philip.',
      'Few medieval comital families rose so far: from a minor German county, the Oldenburgs became one of the longest-reigning royal houses in Europe.'
    ] }
  ],
  timeline: [
    { date: '1448', title: 'Christian I elected King of Denmark', description: 'The Danish council chooses the Count of Oldenburg after Christopher of Bavaria dies heirless.', links: [{ title: 'Christian I', type: 'person', slug: 'christian-i-of-denmark' }] },
    { date: '1450', title: 'Crowned King of Norway', description: 'Christian I unites the Danish and Norwegian crowns.' },
    { date: '1460', title: 'Treaty of Ribe', description: 'Christian I gains Schleswig and Holstein, pledged to stay "forever undivided."' }
  ],
  relatedEntries: { people: [
    { title: 'Christian I', type: 'person', slug: 'christian-i-of-denmark', label: 'Founder; first Oldenburg king' }
  ], locations: [DK(), { title: 'Kingdom of Norway', type: 'location', slug: 'kingdom-of-norway', label: 'United to Denmark under Christian I' }, { title: 'Kingdom of Sweden', type: 'location', slug: 'kingdom-of-sweden', label: 'Briefly held in the Kalmar Union' }] },
  sources: [
    { title: 'House of Oldenburg — Encyclopaedia Britannica', author: 'Encyclopaedia Britannica', type: 'encyclopedia', url: 'https://www.britannica.com/topic/house-of-Oldenburg' },
    { title: 'Christian I of Denmark — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Christian_I_of_Denmark' },
    { title: 'House of Oldenburg — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/House_of_Oldenburg' }
  ]
}

if (!Array.isArray(data.houses)) data.houses = []
for (const house of [earlyDanish, wittelsbach, luxembourg, oldenburg]) {
  const i = data.houses.findIndex((h) => h.id === house.id)
  if (i >= 0) data.houses[i] = house; else data.houses.push(house)
}

// Cheap alias fix: Margaret I's dynasty string ("House of Estridsen / Bjälbo
// connections") could not resolve to the existing House of Estridsen — register
// it as an alias so her Dynasty/House card links (bidirectional nav).
const estridsen = data.houses.find((h) => h.id === 'house-of-estridsen')
if (estridsen) {
  estridsen.aliases = estridsen.aliases ?? []
  const extra = 'House of Estridsen / Bjälbo connections'
  if (!estridsen.aliases.includes(extra)) estridsen.aliases.push(extra)
}

writeFileSync(dataPath, JSON.stringify(data, null, 2))
console.log(`Batch L written. houses now (${data.houses.length}).`)
