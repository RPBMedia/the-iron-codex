import { readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
const __dirname = dirname(fileURLToPath(import.meta.url))
const dataPath = join(__dirname, '..', 'server', 'data', 'history.json')
const data = JSON.parse(readFileSync(dataPath, 'utf8'))
const P = (slug, displayName, note) => ({ personSlug: slug, displayName, note })
const IMG = (f) => `https://commons.wikimedia.org/wiki/Special:FilePath/${f}?width=1000`
const SCOT = () => ({ name: 'Kingdom of Scotland', type: 'location', slug: 'kingdom-of-scotland' })
const HRE = () => ({ name: 'Holy Roman Empire', type: 'location', slug: 'holy-roman-empire' })

// 1. House of Stewart — the royal house of Scotland from 1371
const stewart = {
  id: 'house-of-stewart', type: 'house', name: 'House of Stewart',
  aliases: ['House of Stewart (founder)', 'Stewart', 'House of Stewart', 'Stewart dynasty', 'Stuart', 'House of Stuart'],
  originYear: 1371, endYear: 1714, reignSpan: 'from 1371 (Scotland)', region: 'Scotland (later Great Britain)', originPlace: 'Renfrewshire, Scotland',
  arms: 'Or, a fess chequy azure and argent — the chequered fess of the Stewarts; as kings they bore the royal arms of Scotland.',
  image: IMG('Robert_II,_King_of_Scotland_seal.png'),
  imageInfo: { caption: 'The great seal of Robert II, first Stewart king of Scots, showing him enthroned in majesty.', creator: 'Royal chancery of Scotland', date: '14th century (r. 1371–1390)', source: 'Wikimedia Commons', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Robert_II,_King_of_Scotland_seal.png', note: 'A cast of Robert II’s contemporary great seal, the official image of his kingship.' },
  summary: 'The house of the hereditary Stewards of Scotland that took the crown in 1371 under Robert II and ruled Scotland — and later all of Britain — for more than three centuries.',
  overview: 'The Stewarts held the hereditary office of High Steward of Scotland, from which they took their name. When the male line of Robert the Bruce failed, the crown passed in 1371 to Bruce’s grandson Robert Stewart as Robert II, founding a royal dynasty that would rule Scotland until 1714 and, after 1603, the united crowns of Scotland, England, and Ireland.',
  founder: P('robert-ii-of-scotland', 'Robert II', 'Grandson of Robert the Bruce; first Stewart king, 1371'),
  seats: [SCOT()],
  notableMembers: [
    P('robert-ii-of-scotland', 'Robert II', 'First Stewart king of Scots, r. 1371–1390'),
    { displayName: 'Robert III', note: 'His son; a weak king whose reign saw noble feuding' },
    { displayName: 'James I', note: 'Poet-king; reformed royal government before his murder in 1437' }
  ],
  familyTree: { caption: 'The Stewart succession from the marriage that carried Bruce’s blood into the family down to the early Stewart kings; only Robert II has a Codex article so far. ⚭ marks a marriage.', root: {
    name: 'Walter Stewart', note: 'High Steward of Scotland', spouse: { name: 'Marjorie Bruce', note: 'daughter of Robert the Bruce' },
    children: [
      { name: 'Robert II', personSlug: 'robert-ii-of-scotland', note: 'first Stewart king, 1371', children: [
        { name: 'Robert III', note: 'r. 1390–1406', children: [
          { name: 'James I', note: 'r. 1406–1437' }
        ] }
      ] }
    ]
  } },
  contentSections: [
    { title: 'Origins', paragraphs: [
      'The family rose through the office of High Steward of Scotland, a great hereditary post controlling the royal household and estates, granted to Walter fitz Alan in the twelfth century; from the office the family took the surname Stewart. Their decisive step toward the throne came when Walter, the sixth High Steward, married Marjorie, daughter of Robert the Bruce.',
      'When Bruce’s son David II died childless in 1371, the crown passed by that marriage to Marjorie’s son, Robert the Steward, who became King Robert II — the first of the Stewart line.'
    ] },
    { title: 'Robert II and the early Stewart kings', paragraphs: [
      'Robert II was already in his mid-fifties at his accession and left much of the fighting on the English border to his sons and magnates; his reign preserved the kingdom won by the Bruce but did little to strengthen royal authority. His son Robert III was physically frail and politically overshadowed by his brother, the Duke of Albany.',
      'It was Robert III’s son James I, held prisoner in England for eighteen years, who returned in 1424 determined to break the power of the great nobles — a campaign that reformed royal government but ended in his assassination in 1437.'
    ] },
    { title: 'A British dynasty', paragraphs: [
      'From these beginnings the Stewarts became one of Europe’s great royal houses. They ruled Scotland through the turbulent minorities and forfeitures of the fifteenth and sixteenth centuries, and in 1603 James VI of Scotland inherited the English crown as James I, uniting the crowns of Scotland and England under the family (now often spelled Stuart).',
      'The dynasty reigned over the British kingdoms until the death of Queen Anne in 1714, a span of more than three centuries from Robert II’s accession — a remarkable ascent from a stewardship to the thrones of three kingdoms.'
    ] }
  ],
  timeline: [
    { date: '1371', title: 'Robert II becomes king', description: 'The Steward inherits the throne when the Bruce male line ends.', links: [{ title: 'Robert II', type: 'person', slug: 'robert-ii-of-scotland' }] },
    { date: '1406', title: 'Accession of James I', description: 'The young king is captured by the English and rules from captivity for years.' },
    { date: '1603', title: 'Union of the Crowns', description: 'James VI of Scotland inherits the English throne, uniting the crowns under the Stewarts.' }
  ],
  relatedEntries: { people: [
    { title: 'Robert II', type: 'person', slug: 'robert-ii-of-scotland', label: 'Founder; first Stewart king' }
  ], locations: [SCOT()], houses: [
    { title: 'House of Bruce', type: 'house', slug: 'house-of-bruce', label: 'Robert II’s grandfather’s house, from which the crown passed' },
    { title: 'House of Balliol', type: 'house', slug: 'house-of-balliol', label: 'The rival claimant house of the succession wars' }
  ] },
  sources: [
    { title: 'House of Stuart — Encyclopaedia Britannica', author: 'Encyclopaedia Britannica', type: 'encyclopedia', url: 'https://www.britannica.com/topic/house-of-Stuart' },
    { title: 'Robert II of Scotland — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Robert_II_of_Scotland' },
    { title: 'House of Stewart — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/House_of_Stuart' }
  ]
}

// 2. House of Balliol — the brief, contested Scottish kingship
const balliol = {
  id: 'house-of-balliol', type: 'house', name: 'House of Balliol',
  aliases: ['House of Balliol', 'Balliol', 'de Balliol', 'Balliol dynasty', 'Bailleul'],
  originYear: 1292, endYear: 1356, reignSpan: '1292–1296 (crowned kingship)', region: 'Scotland, England & Picardy', originPlace: 'Bailleul, Picardy & Barnard Castle',
  arms: 'Gules, an orle argent — the arms of Balliol.',
  image: IMG('SetonArmorialJohnBalliolAndWife.jpg'),
  imageInfo: { caption: 'John Balliol, King of Scots, and his wife, in the 16th-century Seton Armorial.', creator: 'Seton Armorial', date: '1591 (depicting John Balliol, king 1292–1296)', source: 'Wikimedia Commons', sourceUrl: 'https://commons.wikimedia.org/wiki/File:SetonArmorialJohnBalliolAndWife.jpg', note: 'A later heraldic armorial depiction, not a contemporary portrait; it shows Balliol with the royal lion banner of Scotland.' },
  summary: 'The Anglo-Norman house whose head, John Balliol, was made King of Scots in 1292 and stripped of the crown in 1296 — the spark of the Wars of Scottish Independence.',
  overview: 'The Balliols were a great Anglo-Norman family with lands in England, Scotland, and Picardy. In the succession crisis after the death of the Maid of Norway, John Balliol was chosen King of Scots in 1292 by the arbitration of Edward I of England — to whom he then had to do homage. When he resisted English overlordship, Edward deposed and humiliated him in 1296, an act that ignited the long wars of Scottish independence.',
  founder: P('john-balliol', 'John Balliol', 'King of Scots, 1292–1296'),
  seats: [SCOT()],
  notableMembers: [
    P('john-balliol', 'John Balliol', 'King of Scots; deposed by Edward I in 1296'),
    { displayName: 'Edward Balliol', note: 'His son; puppet claimant crowned with English help in 1332' },
    { displayName: 'Dervorguilla of Galloway', note: 'John’s mother; founded Balliol College, Oxford, in his father’s memory' }
  ],
  familyTree: { caption: 'The Balliol royal claim from John to his son Edward, both of whom wore the Scottish crown briefly and precariously.', root: {
    name: 'John Balliol', personSlug: 'john-balliol', note: 'King of Scots 1292–1296',
    children: [
      { name: 'Edward Balliol', note: 'crowned 1332 with English backing; never secure' }
    ]
  } },
  contentSections: [
    { title: 'Origins', paragraphs: [
      'The Balliols took their name from Bailleul in Picardy and built a great cross-Channel lordship, holding Barnard Castle in England and wide estates in Scotland and France. John Balliol’s claim to the Scottish throne came through his mother Dervorguilla of Galloway, a descendant of David I; Dervorguilla is remembered for founding Balliol College at Oxford in memory of her husband.',
      'That royal descent placed John among the "Competitors" for the crown when Scotland’s direct line failed in 1290 with the death of Margaret, the Maid of Norway.'
    ] },
    { title: 'The Great Cause and the Toom Tabard', paragraphs: [
      'To settle the disputed succession the Scottish guardians invited Edward I of England to arbitrate. In the process known as the Great Cause, Edward chose John Balliol in 1292 — but only after Balliol and the other claimants had acknowledged Edward as overlord of Scotland. John was crowned, yet Edward treated him as a vassal, summoning him to English courts and demanding Scottish troops for his French wars.',
      'When the Scots resisted and allied with France, Edward invaded, defeated Balliol in 1296, and ceremonially stripped him of the royal arms — earning him the mocking name Toom Tabard, "empty coat." He was imprisoned and later exiled to his French estates, where he died in 1314.'
    ] },
    { title: 'Aftermath', paragraphs: [
      'Balliol’s deposition left Scotland without an effective king and under English occupation, igniting the Wars of Scottish Independence fought by William Wallace and won by Robert the Bruce. The Balliol claim did not quite die: in 1332 John’s son Edward Balliol, backed by England and the "Disinherited" lords, was crowned, but he never held the country and the cause collapsed.',
      'The house is remembered less for its brief kingship than for the crisis it triggered — the moment English overlordship provoked the Scottish nation into a generation of war.'
    ] }
  ],
  timeline: [
    { date: '1292', title: 'John Balliol made King of Scots', description: 'Edward I chooses Balliol in the Great Cause, exacting homage as overlord.', links: [{ title: 'John Balliol', type: 'person', slug: 'john-balliol' }] },
    { date: '1296', title: 'The Toom Tabard deposed', description: 'Edward I invades, defeats Balliol, and strips him of the crown.' },
    { date: '1332', title: 'Edward Balliol crowned', description: 'John’s son is briefly crowned with English support but cannot hold the kingdom.' }
  ],
  relatedEntries: { people: [
    { title: 'John Balliol', type: 'person', slug: 'john-balliol', label: 'King of Scots, 1292–1296' }
  ], locations: [SCOT(), { title: 'Kingdom of England', type: 'location', slug: 'kingdom-of-england', label: 'Edward I’s realm, which claimed overlordship' }], houses: [
    { title: 'House of Bruce', type: 'house', slug: 'house-of-bruce', label: 'The rival house that won the crown and the war' }
  ] },
  sources: [
    { title: 'John de Balliol — Encyclopaedia Britannica', author: 'Encyclopaedia Britannica', type: 'encyclopedia', url: 'https://www.britannica.com/biography/John-de-Balliol-king-of-Scotland' },
    { title: 'John Balliol — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/John_Balliol' },
    { title: 'House of Balliol — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/House_of_Balliol' }
  ]
}

// 3. House of Welf — the imperial rivals of the Hohenstaufen
const welf = {
  id: 'house-of-welf', type: 'house', name: 'House of Welf',
  aliases: ['Welf', 'House of Welf', 'Welf dynasty', 'Welfs', 'Guelph', 'Guelf'],
  originYear: 1070, endYear: 1918, reignSpan: 'medieval dukes; imperial 1198–1218', region: 'Saxony, Bavaria & Brunswick', originPlace: 'Swabia & Bavaria',
  arms: 'Gules, two lions passant guardant or — the lions of the Welfs, later the arms of Brunswick.',
  image: IMG('Otto_IV._und_Papst_Innocenz_III._reichen_sich_vor_den_ankommenden_Schiffen_Friedrichs_II._die_H%C3%A4nde.jpg'),
  imageInfo: { caption: 'Otto IV, the only Welf Holy Roman Emperor, with Pope Innocent III, in a c.1450 illustrated chronicle.', creator: 'Workshop of Diebold Lauber', date: 'c. 1450 (Otto IV d. 1218)', source: 'Wikimedia Commons', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Otto_IV._und_Papst_Innocenz_III._reichen_sich_vor_den_ankommenden_Schiffen_Friedrichs_II._die_H%C3%A4nde.jpg', note: 'A later manuscript miniature depicting Otto IV and the pope, not a contemporary portrait.' },
  summary: 'One of the oldest German dynasties — dukes of Saxony and Bavaria, rivals of the Hohenstaufen, and, in Otto IV, the only Welf to wear the imperial crown.',
  overview: 'The Welfs were among the greatest princely families of the medieval Empire. Under Henry the Lion they ruled both Saxony and Bavaria and colonised the German east, until their rivalry with the Hohenstaufen brought Henry’s fall. His son Otto IV briefly won the imperial crown before losing it after the Battle of Bouvines. The family survived as dukes of Brunswick-Lüneburg and, centuries later, gave Britain the House of Hanover.',
  founder: { displayName: 'Henry the Lion', note: 'Duke of Saxony and Bavaria; the towering Welf prince of the 12th century (no Codex article yet)' },
  seats: [HRE()],
  notableMembers: [
    { displayName: 'Henry the Lion', note: 'Duke of Saxony and Bavaria; founder of Munich and Lübeck' },
    P('otto-iv', 'Otto IV', 'The only Welf Holy Roman Emperor, crowned 1209; defeated at Bouvines'),
    { displayName: 'Welf VI', note: 'Duke of Spoleto; an earlier head of the Italian Welf lands' }
  ],
  familyTree: { caption: 'The imperial Welf line: Henry the Lion’s son Otto IV won and then lost the Empire; only Otto IV has a Codex article so far.', root: {
    name: 'Henry the Lion', note: 'Duke of Saxony and Bavaria, d. 1195',
    children: [
      { name: 'Otto IV', personSlug: 'otto-iv', note: 'Holy Roman Emperor, r. 1209–1218' },
      { name: 'Henry V', note: 'Count Palatine of the Rhine' }
    ]
  } },
  contentSections: [
    { title: 'Origins', paragraphs: [
      'The Welfs were an ancient Frankish-Swabian family who, by marriage and inheritance, gathered the duchies of Bavaria and later Saxony. Their name became a byword for a whole political tradition: in Italy the pro-papal "Guelph" party took its name from the Welfs, set against the "Ghibelline" supporters of the Hohenstaufen emperors.',
      'The house reached its zenith under Henry the Lion, who ruled Saxony and Bavaria together, pushed German settlement eastward into Slavic lands, and founded cities including Munich and Lübeck.'
    ] },
    { title: 'Henry the Lion and the fall', paragraphs: [
      'Henry the Lion’s power rivalled that of the emperor himself, and his refusal to support his cousin Frederick Barbarossa in Italy led to his downfall: in 1180 he was stripped of his duchies, which were broken up, and driven into exile in England, where his marriage to a daughter of Henry II tied the Welfs to the Angevin kings.',
      'The family kept its allodial lands around Brunswick, and from that base Henry’s sons contended again for the highest prizes of the Empire.'
    ] },
    { title: 'Otto IV and the imperial crown', paragraphs: [
      'In the disputed succession after 1197 the Welf Otto IV was elected king against the Hohenstaufen Philip of Swabia, and after years of civil war he was crowned Holy Roman Emperor in 1209 by Pope Innocent III. The alliance soon broke: Otto invaded papal Italy, was excommunicated, and faced the young Hohenstaufen Frederick II, whom the pope now backed.',
      'Otto’s bid collapsed at the Battle of Bouvines in 1214, where he fought alongside King John of England and was routed by Philip II of France. He lost the Empire to Frederick II and died in 1218. The Welfs endured as dukes of Brunswick-Lüneburg, and in 1714 a descendant became King George I of Great Britain as the House of Hanover.'
    ] }
  ],
  timeline: [
    { date: '1180', title: 'Fall of Henry the Lion', description: 'Frederick Barbarossa strips the Welf duke of Saxony and Bavaria.' },
    { date: '1209', title: 'Otto IV crowned emperor', description: 'The Welf is crowned Holy Roman Emperor by Innocent III.', links: [{ title: 'Otto IV', type: 'person', slug: 'otto-iv' }] },
    { date: '1214', title: 'Battle of Bouvines', description: 'Otto IV is defeated with the English and loses the Empire to Frederick II.', links: [{ title: 'Battle of Bouvines', type: 'event', slug: 'battle-of-bouvines' }] }
  ],
  relatedEntries: { people: [
    { title: 'Otto IV', type: 'person', slug: 'otto-iv', label: 'The only Welf emperor' }
  ], events: [{ title: 'Battle of Bouvines', type: 'event', slug: 'battle-of-bouvines', label: 'Otto IV’s decisive defeat, 1214' }], locations: [HRE()], houses: [
    { title: 'House of Hohenstaufen', type: 'house', slug: 'house-of-hohenstaufen', label: 'Their great imperial rivals' }
  ] },
  sources: [
    { title: 'Welf dynasty — Encyclopaedia Britannica', author: 'Encyclopaedia Britannica', type: 'encyclopedia', url: 'https://www.britannica.com/topic/Welf-dynasty' },
    { title: 'Otto IV, Holy Roman Emperor — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Otto_IV,_Holy_Roman_Emperor' },
    { title: 'House of Welf — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/House_of_Welf' }
  ]
}

// 4. Merovingian dynasty — the first Frankish royal house
const merovingian = {
  id: 'merovingian-dynasty', type: 'house', name: 'Merovingian dynasty',
  aliases: ['Merovingian (last)', 'Merovingian', 'Merovingians', 'Merovingian dynasty', 'Meroving'],
  originYear: 450, endYear: 751, reignSpan: 'c. 450–751', region: 'Francia (Gaul)', originPlace: 'Northern Gaul (the Salian Franks)',
  arms: 'None — the Merovingians ruled before heraldry; their kings were the reges criniti, the "long-haired kings."',
  image: IMG('Master_Of_Saint_Gilles_-_The_Baptism_of_Clovis_-_WGA14482.jpg'),
  imageInfo: { caption: 'The Baptism of Clovis I, founder of the Christian Frankish monarchy, painted by the Master of Saint Gilles (c. 1500).', creator: 'Master of Saint Gilles', date: 'c. 1500 (Clovis baptised c. 496–508)', source: 'Wikimedia Commons', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Master_Of_Saint_Gilles_-_The_Baptism_of_Clovis_-_WGA14482.jpg', note: 'A later panel painting (National Gallery, London) imagining the baptism; not a contemporary record.' },
  summary: 'The first royal dynasty of the Franks, which ruled Gaul from the fifth century until 751 — the line of Clovis I, ended by the deposition of Childeric III.',
  overview: 'The Merovingians were the founding dynasty of Frankish Gaul, named after the semi-legendary Merovech. Under Clovis I they united the Frankish tribes, conquered most of Roman Gaul, and adopted Catholic Christianity. Later Merovingian kings gradually lost real power to the Mayors of the Palace, and in 751 the last of them, Childeric III, was deposed by the Carolingian Pepin the Short.',
  founder: { displayName: 'Clovis I', note: 'United the Franks and converted to Catholic Christianity (no Codex article yet)' },
  notableMembers: [
    { displayName: 'Clovis I', note: 'r. 481–511; united the Franks and was baptised a Catholic' },
    { displayName: 'Dagobert I', note: 'r. 629–639; the last Merovingian to rule with real authority' },
    P('childeric-iii', 'Childeric III', 'The last Merovingian king, deposed in 751')
  ],
  familyTree: { caption: 'The Merovingian line from its legendary origin to its fall; kinship across the intervening centuries is compressed here, and only the last king, Childeric III, has a Codex article.', root: {
    name: 'Merovech', note: 'semi-legendary ancestor who gave the dynasty its name',
    children: [
      { name: 'Childeric I', note: 'king of the Salian Franks, d. c. 481', children: [
        { name: 'Clovis I', note: 'united the Franks; baptised a Catholic', branch: 'many kings follow over 250 years', children: [
          { name: 'Dagobert I', note: 'last strong Merovingian, d. 639', children: [
            { name: 'Childeric III', personSlug: 'childeric-iii', note: 'last Merovingian; deposed 751' }
          ] }
        ] }
      ] }
    ]
  } },
  contentSections: [
    { title: 'Origins', paragraphs: [
      'The dynasty took its name from Merovech, a shadowy fifth-century leader of the Salian Franks; the first firmly historical king is his descendant Childeric I, buried at Tournai with a spectacular treasure of gold and garnet. Merovingian kingship was marked by a distinctive symbol: the kings alone wore their hair long and uncut, the reges criniti or "long-haired kings," a sign of their royal blood.',
      'From a base in northern Gaul the family expanded rapidly as Roman power collapsed, absorbing rival Frankish kingdoms and Gallo-Roman territory.'
    ] },
    { title: 'Clovis and the Christian kingdom', paragraphs: [
      'Clovis I, who reigned from 481 to 511, transformed the Franks into the dominant power of Gaul: he defeated the last Roman commander at Soissons, crushed the Alemanni, and drove the Visigoths beyond the Pyrenees. His conversion from paganism to Catholic Christianity — sealed by his baptism at Reims by Bishop Remigius — aligned the Frankish monarchy with the Gallo-Roman Church and set it apart from the Arian kingdoms around it.',
      'After Clovis the kingdom was repeatedly divided among his heirs into the sub-kingdoms of Neustria, Austrasia, and Burgundy, producing a violent politics of partition, reunion, and feud that the chronicler Gregory of Tours recorded in vivid detail.'
    ] },
    { title: 'Decline and the fall of Childeric III', paragraphs: [
      'By the later seventh century real power had passed from the kings to the Mayors of the Palace, the chief officials of the royal household. The Arnulfing–Pippinid family — the future Carolingians — made the office hereditary and ruled in the kings’ name, while the Merovingians became figureheads later mocked as the rois fainéants, the "do-nothing kings."',
      'The dynasty ended in 751 when the mayor Pepin the Short, with the sanction of the papacy, deposed the last Merovingian, Childeric III, and had himself made king — replacing the long-haired line with the Carolingian dynasty and cutting Childeric’s hair before shutting him in a monastery.'
    ] }
  ],
  timeline: [
    { date: 'c. 496', title: 'Baptism of Clovis', description: 'Clovis I converts to Catholic Christianity, binding the Franks to the Church.' },
    { date: '511', title: 'Death of Clovis', description: 'The kingdom is divided among his sons, beginning the pattern of partition.' },
    { date: '751', title: 'Childeric III deposed', description: 'Pepin the Short ends the dynasty and founds the Carolingian line.', links: [{ title: 'Childeric III', type: 'person', slug: 'childeric-iii' }] }
  ],
  relatedEntries: { people: [
    { title: 'Childeric III', type: 'person', slug: 'childeric-iii', label: 'The last Merovingian king' }
  ], locations: [{ title: 'Kingdom of France', type: 'location', slug: 'kingdom-of-france', label: 'The later kingdom grown from Frankish Gaul' }], houses: [
    { title: 'Carolingian dynasty', type: 'house', slug: 'house-of-carolingian', label: 'The mayors of the palace who supplanted them in 751' }
  ] },
  sources: [
    { title: 'Merovingian dynasty — Encyclopaedia Britannica', author: 'Encyclopaedia Britannica', type: 'encyclopedia', url: 'https://www.britannica.com/topic/Merovingian-dynasty' },
    { title: 'Clovis I — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Clovis_I' },
    { title: 'Merovingian dynasty — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Merovingian_dynasty' }
  ]
}

if (!Array.isArray(data.houses)) data.houses = []
for (const house of [stewart, balliol, welf, merovingian]) {
  const i = data.houses.findIndex((h) => h.id === house.id)
  if (i >= 0) data.houses[i] = house; else data.houses.push(house)
}
writeFileSync(dataPath, JSON.stringify(data, null, 2))
console.log(`Batch M written. houses now (${data.houses.length}).`)
