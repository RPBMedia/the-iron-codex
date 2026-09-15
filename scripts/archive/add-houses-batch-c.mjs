import { readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const dataPath = join(__dirname, '..', 'server', 'data', 'history.json')
const data = JSON.parse(readFileSync(dataPath, 'utf8'))

const P = (slug, displayName, note) => ({ personSlug: slug, displayName, note })

/* ---------------------------------------------------------- ESTRIDSEN */
const estridsen = {
  id: 'house-of-estridsen',
  type: 'house',
  name: 'House of Estridsen',
  aliases: ['Estridsen dynasty', 'Estridsson dynasty', 'House of Estrid'],
  originYear: 1047,
  endYear: 1412,
  reignSpan: '1047–1412',
  region: 'Kingdom of Denmark',
  originPlace: 'Denmark',
  arms: 'Or, three lions passant azure crowned and armed — the arms of Denmark',
  image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Valdemar%20Atterdag.jpg?width=1000',
  imageInfo: {
    caption: 'King Valdemar IV Atterdag, who rebuilt the Danish kingdom, in a medieval Danish wall painting.',
    creator: 'Danish church wall painting (kalkmaleri)',
    date: 'c. 1375',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Valdemar_Atterdag.jpg',
    note: 'A near-contemporary Danish fresco of Valdemar IV, the dynasty’s great restorer; no single portrait represents the whole house.'
  },
  summary: 'The dynasty that ruled Denmark for over three centuries, from Sweyn II to the Valdemarian golden age and the eve of the Kalmar Union.',
  overview: 'The House of Estridsen took the Danish throne with Sweyn II in 1047 and held it, through repeated civil wars, until the early fifteenth century. Its high point was the Valdemarian age, when Valdemar I, Cnut VI, and Valdemar II built a Baltic empire; after a period of collapse, Valdemar IV Atterdag restored the kingdom, and his daughter Margaret I forged the Kalmar Union of the three Scandinavian crowns.',
  founder: P('sweyn-ii-estridsson', 'Sweyn II Estridsson', 'Nephew of Cnut the Great; king of Denmark from 1047'),
  seats: [{ name: 'Kingdom of Denmark', type: 'location', slug: 'kingdom-of-denmark' }],
  notableMembers: [
    P('sweyn-ii-estridsson', 'Sweyn II Estridsson', 'Founder of the dynasty'),
    P('cnut-iv-of-denmark', 'Cnut IV the Holy', 'Martyred in 1086; Denmark’s patron saint'),
    P('niels-of-denmark', 'Niels', 'Last of Sweyn’s five reigning sons'),
    P('valdemar-i-of-denmark', 'Valdemar I the Great', 'Ended the civil wars and began the Baltic expansion'),
    P('cnut-vi-of-denmark', 'Cnut VI', 'Extended Danish power over the Wends and north Germany'),
    P('valdemar-ii-of-denmark', 'Valdemar II the Victorious', 'Baltic conqueror; issued the Law of Jutland'),
    P('eric-v-of-denmark', 'Eric V Klipping', 'Forced to grant Denmark’s first charter in 1282'),
    P('valdemar-iv-atterdag', 'Valdemar IV Atterdag', 'Rebuilt the mortgaged kingdom')
  ],
  cadetBranches: [
    { name: 'Kalmar Union', note: 'Margaret I, Valdemar IV’s daughter, united Denmark, Norway, and Sweden under one crown from 1397.' }
  ],
  familyTree: {
    caption: 'The Danish royal line of the Estridsens, from Sweyn II through the Valdemarian kings to Valdemar IV Atterdag and Margaret I. Denmark’s repeated succession wars mean several kings were brothers, nephews, or rivals rather than direct heirs; notes flag the exceptions.',
    root: {
      name: 'Sweyn II Estridsson', personSlug: 'sweyn-ii-estridsson', note: 'r. 1047–1076',
      children: [
        { name: 'Harald III Hen', personSlug: 'harald-iii-of-denmark', note: 'r. 1076–1080' },
        { name: 'Cnut IV the Holy', personSlug: 'cnut-iv-of-denmark', note: 'r. 1080–1086, martyred' },
        { name: 'Oluf I Hunger', personSlug: 'oluf-i-of-denmark', note: 'r. 1086–1095' },
        {
          name: 'Eric I Evergood', personSlug: 'eric-i-of-denmark', note: 'r. 1095–1103',
          children: [
            {
              name: 'Cnut Lavard', note: 'Duke of Schleswig; murdered 1131',
              children: [
                {
                  name: 'Valdemar I the Great', personSlug: 'valdemar-i-of-denmark', note: 'r. 1157–1182',
                  children: [
                    { name: 'Cnut VI', personSlug: 'cnut-vi-of-denmark', note: 'r. 1182–1202' },
                    {
                      name: 'Valdemar II the Victorious', personSlug: 'valdemar-ii-of-denmark', note: 'r. 1202–1241',
                      children: [
                        { name: 'Eric IV Plowpenny', personSlug: 'eric-iv-of-denmark', note: 'r. 1241–1250' },
                        { name: 'Abel', personSlug: 'abel-of-denmark', note: 'r. 1250–1252' },
                        {
                          name: 'Christopher I', personSlug: 'christopher-i-of-denmark', note: 'r. 1252–1259',
                          children: [{
                            name: 'Eric V Klipping', personSlug: 'eric-v-of-denmark', note: 'r. 1259–1286',
                            children: [
                              { name: 'Eric VI Menved', personSlug: 'eric-vi-of-denmark', note: 'r. 1286–1319' },
                              {
                                name: 'Christopher II', personSlug: 'christopher-ii-of-denmark', note: 'r. 1320–1332',
                                children: [{
                                  name: 'Valdemar IV Atterdag', personSlug: 'valdemar-iv-atterdag', note: 'r. 1340–1375',
                                  children: [{ name: 'Margaret I', personSlug: 'margaret-i', note: 'Founder of the Kalmar Union', branch: '→ Kalmar Union' }]
                                }]
                              }
                            ]
                          }]
                        }
                      ]
                    }
                  ]
                },
                {
                  name: 'Eric II Emune', personSlug: 'eric-ii-of-denmark', note: 'r. 1134–1137',
                  children: [{ name: 'Sweyn III', personSlug: 'sweyn-iii-of-denmark', note: 'r. 1146–1157, civil war' }]
                },
                { name: 'Eric III Lamb', personSlug: 'eric-iii-of-denmark', note: 'r. 1137–1146 (grandson via a daughter)' }
              ]
            }
          ]
        },
        { name: 'Niels', personSlug: 'niels-of-denmark', note: 'r. 1104–1134' }
      ]
    }
  },
  contentSections: [
    { title: 'Origins', paragraphs: [
      'The dynasty is named for Estrid Svendsdatter, sister of Cnut the Great, whose son Sweyn Estridsson took the Danish throne in 1047 after the North Sea Empire of Cnut’s line collapsed. Sweyn spent decades contesting Denmark with the Norwegian king Harald Hardrada before securing his rule.',
      'Sweyn had many sons, and an unusual five of them reigned in succession, giving the dynasty a broad but quarrelsome foundation. One, Cnut IV, was killed by rebels in a church at Odense in 1086 and later canonised as Denmark’s first royal saint.'
    ]},
    { title: 'Civil wars and Valdemar the Great', paragraphs: [
      'The early twelfth century dissolved into dynastic civil war among the descendants of Sweyn’s sons, culminating in a three-way struggle between Sweyn III, Cnut V, and Valdemar. Valdemar emerged victorious in 1157 as Valdemar I the Great, ending the bloodshed with the help of his foster-brother, Bishop Absalon of Roskilde.',
      'Valdemar and Absalon turned Denmark outward, launching campaigns against the pagan Wends of the southern Baltic and founding the fortress that became Copenhagen. The murdered Cnut Lavard, Valdemar’s father, was canonised, binding the dynasty’s legitimacy to sanctity.'
    ]},
    { title: 'The Valdemarian golden age', paragraphs: [
      'Under Cnut VI and especially Valdemar II the Victorious, Denmark became a Baltic power, conquering territories from Holstein to Estonia — Danish tradition held that the national flag, the Dannebrog, fell from heaven at Lyndanisse in 1219. Valdemar II codified the Law of Jutland in 1241, one of medieval Scandinavia’s great law books.',
      'The empire proved fragile. Valdemar II’s capture by a vassal in 1223 forced him to surrender most of his German conquests, and after his death the kingdom fractured among his feuding sons Eric IV, Abel, and Christopher I.'
    ]},
    { title: 'Decline and restoration', paragraphs: [
      'The later thirteenth century weakened the crown: Eric V Klipping was forced to grant Denmark’s first coronation charter in 1282 and was murdered in 1286, and under Christopher II royal authority collapsed so completely that the kingdom was mortgaged piecemeal to Holstein counts.',
      'Valdemar IV Atterdag ("New Day"), returning in 1340, patiently bought and fought back the pawned kingdom, restored royal power, and recovered Danish influence in the Baltic against the Hanseatic League.'
    ]},
    { title: 'Legacy and the Kalmar Union', paragraphs: [
      'Valdemar IV left no surviving son, but his daughter Margaret I proved the ablest ruler of the age. Through her son and her own regency she gained the crowns of Denmark, Norway, and Sweden, uniting them in the Kalmar Union of 1397 — the political framework of Scandinavia for the next century.',
      'The Estridsens thus ended not in extinction but in transformation: the dynasty of Danish kings became the root of a united Scandinavian monarchy, and the three lions of Denmark remained its enduring emblem.'
    ]}
  ],
  timeline: [
    { date: '1047', title: 'Sweyn II takes the throne', description: 'The Estridsen dynasty begins in Denmark.', links: [{ title: 'Sweyn II Estridsson', type: 'person', slug: 'sweyn-ii-estridsson' }] },
    { date: '1086', title: 'Martyrdom of Cnut IV', description: 'The king is killed at Odense and later becomes Denmark’s patron saint.', links: [{ title: 'Cnut IV the Holy', type: 'person', slug: 'cnut-iv-of-denmark' }] },
    { date: '1157', title: 'Valdemar I ends the civil wars', description: 'Victory brings unity and the start of the Baltic expansion.', links: [{ title: 'Valdemar I the Great', type: 'person', slug: 'valdemar-i-of-denmark' }] },
    { date: '1219', title: 'The Dannebrog tradition', description: 'The Danish flag is said to fall from heaven during Valdemar II’s Estonian campaign.', links: [{ title: 'Valdemar II the Victorious', type: 'person', slug: 'valdemar-ii-of-denmark' }] },
    { date: '1241', title: 'The Law of Jutland', description: 'Valdemar II issues one of medieval Scandinavia’s great law codes.' },
    { date: '1282', title: 'Denmark’s first charter', description: 'Eric V Klipping is forced to accept limits on royal power.', links: [{ title: 'Eric V Klipping', type: 'person', slug: 'eric-v-of-denmark' }] },
    { date: '1340', title: 'Valdemar IV rebuilds the kingdom', description: 'Atterdag begins recovering the mortgaged realm.', links: [{ title: 'Valdemar IV Atterdag', type: 'person', slug: 'valdemar-iv-atterdag' }] },
    { date: '1397', title: 'The Kalmar Union', description: 'Margaret I unites Denmark, Norway, and Sweden.' }
  ],
  relatedEntries: {
    people: [
      { title: 'Sweyn II Estridsson', type: 'person', slug: 'sweyn-ii-estridsson', label: 'Founder' },
      { title: 'Valdemar I the Great', type: 'person', slug: 'valdemar-i-of-denmark', label: 'Ended the civil wars' },
      { title: 'Valdemar II the Victorious', type: 'person', slug: 'valdemar-ii-of-denmark', label: 'Baltic empire; law-giver' },
      { title: 'Valdemar IV Atterdag', type: 'person', slug: 'valdemar-iv-atterdag', label: 'Restorer of the kingdom' }
    ],
    locations: [{ title: 'Kingdom of Denmark', type: 'location', slug: 'kingdom-of-denmark', label: 'The realm they ruled' }]
  },
  sources: [
    { title: 'House of Estridsen — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/House_of_Estridsen' },
    { title: 'Denmark: The Valdemars — Encyclopaedia Britannica', author: 'Encyclopaedia Britannica', type: 'encyclopedia', url: 'https://www.britannica.com/place/Denmark/The-Valdemars' },
    { title: 'Sweyn II Estridsen — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Sweyn_II_of_Denmark' }
  ]
}

/* --------------------------------------------------------------- AVIZ */
const aviz = {
  id: 'house-of-aviz',
  type: 'house',
  name: 'House of Aviz',
  aliases: ['Aviz dynasty', 'Joanine dynasty', 'House of Avis'],
  originYear: 1385,
  endYear: 1580,
  reignSpan: '1385–1580',
  region: 'Kingdom of Portugal',
  originPlace: 'Portugal',
  arms: 'The Portuguese quinas within a bordure of castles, differenced by the green cross of the Order of Aviz',
  image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Lisbon,%20Museum%20Nacional%20de%20Arte%20Antiga,%20unknown%20painter,%20King%20John%20I%20of%20Portugal.JPG?width=1000',
  imageInfo: {
    caption: 'John I of Portugal, founder of the House of Aviz, in a later panel portrait.',
    creator: 'Unknown painter (Museu Nacional de Arte Antiga, Lisbon)',
    date: 'c. 1450–1500',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Lisbon,_Museum_Nacional_de_Arte_Antiga,_unknown_painter,_King_John_I_of_Portugal.JPG',
    note: 'A later Portuguese portrait of the dynasty’s founder, victor of Aljubarrota and father of the "Illustrious Generation".'
  },
  summary: 'The Portuguese dynasty that secured independence at Aljubarrota and launched the Age of Discovery.',
  overview: 'The House of Aviz took the Portuguese throne with John I in 1385, after his victory at Aljubarrota preserved Portugal from absorption by Castile. His sons, the "Illustrious Generation", began Portuguese overseas expansion; under John II the dynasty completed a centralised monarchy and opened the sea route toward India.',
  founder: P('john-i-of-portugal', 'John I', 'Master of Aviz; king after the 1383–85 crisis'),
  seats: [{ name: 'Kingdom of Portugal', type: 'location', slug: 'kingdom-of-portugal' }],
  notableMembers: [
    P('john-i-of-portugal', 'John I the Good', 'Founder; victor of Aljubarrota'),
    P('edward-of-portugal', 'Edward (Duarte)', 'The "Philosopher King"; brief troubled reign'),
    P('afonso-v-of-portugal', 'Afonso V the African', 'Campaigned in Morocco; claimed Castile'),
    P('john-ii-of-portugal', 'John II the Perfect Prince', 'Crushed the great nobles; backed the route to India')
  ],
  familyTree: {
    caption: 'The Aviz kings from John I, through the House of Lancaster marriage that produced the "Illustrious Generation", to John II. ⚭ marks a marriage.',
    root: {
      name: 'John I', personSlug: 'john-i-of-portugal', note: 'r. 1385–1433',
      spouse: { name: 'Philippa of Lancaster' },
      children: [{
        name: 'Edward (Duarte)', personSlug: 'edward-of-portugal', note: 'r. 1433–1438',
        children: [{
          name: 'Afonso V the African', personSlug: 'afonso-v-of-portugal', note: 'r. 1438–1481',
          children: [{ name: 'John II the Perfect Prince', personSlug: 'john-ii-of-portugal', note: 'r. 1481–1495' }]
        }]
      }]
    }
  },
  contentSections: [
    { title: 'Origins', paragraphs: [
      'When Ferdinand I of the Afonsine line died in 1383 without a son, his daughter’s marriage to the king of Castile threatened to swallow Portugal. The Portuguese rallied instead around John, Master of the military Order of Aviz and illegitimate son of Pedro I, who was acclaimed king in 1385.',
      'His crushing victory over the Castilians at the Battle of Aljubarrota in 1385, won with English longbowmen and the generalship of Nuno Álvares Pereira, secured both Portuguese independence and the new dynasty.'
    ]},
    { title: 'The Illustrious Generation and expansion', paragraphs: [
      'John I’s marriage to Philippa of Lancaster produced a remarkable set of princes whom the poet Camões called the "Illustrious Generation". In 1415 they seized Ceuta in North Africa, the opening move of Portuguese overseas expansion, and one of them, Prince Henry the Navigator, sponsored the voyages that pushed down the African coast.',
      'The dynasty thus turned a small Atlantic kingdom into the pioneer of European maritime exploration, laying the foundations of a seaborne empire.'
    ]},
    { title: 'Edward, Afonso V, and the African wars', paragraphs: [
      'Edward’s short reign was overshadowed by the disastrous expedition to Tangier in 1437, in which his brother Ferdinand was left a hostage and died in captivity. His son Afonso V, called "the African", campaigned successfully at Arzila and Tangier but exhausted the kingdom pursuing a claim to the Castilian throne, checked at Toro in 1476.',
      'These reigns balanced crusading ambition in Morocco against the slower, more profitable work of Atlantic exploration and trade.'
    ]},
    { title: 'John II and the road to India', paragraphs: [
      'John II, one of the ablest kings of the age, broke the power of the great nobles — executing the Duke of Braganza and personally stabbing the Duke of Viseu — and rebuilt royal authority. He drove the exploration effort that sent Bartolomeu Dias round the Cape of Good Hope in 1488 and negotiated the Treaty of Tordesillas dividing the wider world with Castile in 1494.',
      'By the end of the medieval period the House of Aviz had made Portugal the leading power of oceanic discovery, poised for Vasco da Gama’s voyage to India in 1498.'
    ]}
  ],
  timeline: [
    { date: '1385', title: 'Battle of Aljubarrota', description: 'John I defeats Castile and founds the dynasty.', links: [{ title: 'Battle of Aljubarrota', type: 'event', slug: 'battle-of-aljubarrota' }] },
    { date: '1415', title: 'Capture of Ceuta', description: 'Portugal takes its first overseas territory, opening the age of expansion.', links: [{ title: 'John I the Good', type: 'person', slug: 'john-i-of-portugal' }] },
    { date: '1437', title: 'The Tangier disaster', description: 'A failed expedition costs Prince Ferdinand his life in captivity.', links: [{ title: 'Edward (Duarte)', type: 'person', slug: 'edward-of-portugal' }] },
    { date: '1476', title: 'Afonso V checked at Toro', description: 'His bid for the Castilian crown fails.', links: [{ title: 'Afonso V the African', type: 'person', slug: 'afonso-v-of-portugal' }] },
    { date: '1488', title: 'Rounding the Cape', description: 'Under John II, Bartolomeu Dias reaches the Cape of Good Hope.', links: [{ title: 'John II the Perfect Prince', type: 'person', slug: 'john-ii-of-portugal' }] },
    { date: '1494', title: 'Treaty of Tordesillas', description: 'John II divides the oceans of discovery with Castile.' }
  ],
  relatedEntries: {
    people: [
      { title: 'John I the Good', type: 'person', slug: 'john-i-of-portugal', label: 'Founder' },
      { title: 'Afonso V the African', type: 'person', slug: 'afonso-v-of-portugal', label: 'Moroccan campaigns' },
      { title: 'John II the Perfect Prince', type: 'person', slug: 'john-ii-of-portugal', label: 'Route to India' }
    ],
    events: [{ title: 'Battle of Aljubarrota', type: 'event', slug: 'battle-of-aljubarrota', label: 'Founding victory, 1385' }],
    locations: [{ title: 'Kingdom of Portugal', type: 'location', slug: 'kingdom-of-portugal', label: 'The realm they ruled' }]
  },
  sources: [
    { title: 'House of Aviz — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/House_of_Aviz' },
    { title: 'John I of Portugal — Encyclopaedia Britannica', author: 'Encyclopaedia Britannica', type: 'encyclopedia', url: 'https://www.britannica.com/biography/John-I-king-of-Portugal' },
    { title: 'Portugal: The house of Aviz — Encyclopaedia Britannica', author: 'Encyclopaedia Britannica', type: 'encyclopedia', url: 'https://www.britannica.com/place/Portugal/The-Aviz-dynasty' }
  ]
}

/* ------------------------------------------------------------- VALOIS */
const valois = {
  id: 'house-of-valois',
  type: 'house',
  name: 'House of Valois',
  aliases: ['Valois', 'Valois dynasty'],
  originYear: 1328,
  endYear: 1589,
  reignSpan: '1328–1589',
  region: 'Kingdom of France',
  originPlace: 'France',
  arms: 'Azure, three fleurs-de-lis or (France Modern) — the arms of the kings of France',
  image: 'https://commons.wikimedia.org/wiki/Special:FilePath/14th-century%20unknown%20painters%20-%20Portrait%20of%20Jean%20le%20Bon,%20King%20of%20France%20-%20WGA23666.jpg?width=1000',
  imageInfo: {
    caption: 'John II the Good, second Valois king of France — one of the earliest surviving independent portraits in European painting.',
    creator: 'Unknown French painter',
    date: 'c. 1350',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:14th-century_unknown_painters_-_Portrait_of_Jean_le_Bon,_King_of_France_-_WGA23666.jpg',
    note: 'A near-contemporary panel portrait of the Valois king John II, remarkable as one of the first individual portraits in Western art.'
  },
  summary: 'The Capetian cadet branch that ruled France through the Hundred Years’ War, from the crisis of 1328 to the recovery under Charles VII.',
  overview: 'The House of Valois inherited the French crown in 1328 when the direct Capetian line died out. Its early reigns were dominated by the Hundred Years’ War with England — disaster at Crécy and Poitiers, the madness of Charles VI and the Burgundian civil war, then recovery and final victory under Charles VII, aided by Joan of Arc.',
  founder: P('philip-vi-of-france', 'Philip VI', 'First Valois king; his accession helped trigger the Hundred Years’ War'),
  seats: [{ name: 'Kingdom of France', type: 'location', slug: 'kingdom-of-france' }],
  notableMembers: [
    P('philip-vi-of-france', 'Philip VI', 'Founder; defeated at Crécy'),
    P('john-ii-of-france', 'John II the Good', 'Captured by the English at Poitiers'),
    P('charles-v-of-france', 'Charles V the Wise', 'Recovered most of the English gains'),
    P('charles-vi-of-france', 'Charles VI the Mad', 'His madness plunged France into civil war'),
    P('charles-vii-of-france', 'Charles VII the Victorious', 'Won the Hundred Years’ War with Joan of Arc’s help')
  ],
  cadetBranches: [
    { name: 'House of Valois-Burgundy', note: 'The dukes of Burgundy (Philip the Bold to Charles the Bold), a powerful cadet line that rivalled the crown.' }
  ],
  familyTree: {
    caption: 'The direct Valois kings from Philip VI through the Hundred Years’ War to Charles VII. ⚭ marks a marriage.',
    root: {
      name: 'Philip VI', personSlug: 'philip-vi-of-france', note: 'r. 1328–1350',
      children: [{
        name: 'John II the Good', personSlug: 'john-ii-of-france', note: 'r. 1350–1364',
        children: [{
          name: 'Charles V the Wise', personSlug: 'charles-v-of-france', note: 'r. 1364–1380',
          children: [{
            name: 'Charles VI the Mad', personSlug: 'charles-vi-of-france', note: 'r. 1380–1422',
            children: [{ name: 'Charles VII the Victorious', personSlug: 'charles-vii-of-france', note: 'r. 1422–1461' }]
          }]
        }]
      }]
    }
  },
  contentSections: [
    { title: 'Origins', paragraphs: [
      'When Charles IV, last of the direct Capetians, died in 1328, the French magnates passed over the claim of Edward III of England — descended through his mother — and gave the crown to Philip of Valois, nephew of Philip IV, as Philip VI. The rejection of Edward’s claim became a legal pretext for the Hundred Years’ War.',
      'Philip VI’s reign opened badly: English longbowmen destroyed his mounted chivalry at the Battle of Crécy in 1346, and the Black Death struck France in 1348.'
    ]},
    { title: 'Captivity and crisis', paragraphs: [
      'His son John II the Good was himself captured by the Black Prince at the Battle of Poitiers in 1356, a catastrophe that left France leaderless. The huge ransom, the peasant revolt called the Jacquerie, and the Parisian rising under Étienne Marcel brought the monarchy near collapse.',
      'John died a captive in London in 1364, having returned voluntarily when a hostage broke parole — an act contemporaries praised as chivalrous and modern historians find ruinous.'
    ]},
    { title: 'Charles V and recovery', paragraphs: [
      'Charles V the Wise rebuilt the kingdom. Avoiding pitched battles, he used his constable Bertrand du Guesclin to wear the English down through skirmishing and sieges, and by 1380 had recovered nearly all the territory lost at Brétigny. He reformed the coinage and taxation and built royal libraries and the Bastille.',
      'His death in 1380 left the recovery in the hands of a child king and quarrelling royal uncles.'
    ]},
    { title: 'Madness, civil war, and Agincourt', paragraphs: [
      'Charles VI suffered recurring bouts of insanity from 1392, and the vacuum of power split the court between the Armagnac and Burgundian factions in open civil war. Henry V of England exploited the division, annihilating the French nobility at the Battle of Agincourt in 1415 and forcing the Treaty of Troyes in 1420, which disinherited the dauphin.',
      'For a time it seemed the French and English crowns would be united under the Lancastrians.'
    ]},
    { title: 'Charles VII and victory', paragraphs: [
      'The disinherited dauphin, crowned Charles VII at Reims in 1429 after Joan of Arc broke the siege of Orléans, gradually turned the war. Reconciliation with Burgundy in 1435, a standing army, and reformed artillery under the Bureau brothers let him reconquer Normandy and Guyenne, ending the Hundred Years’ War in 1453.',
      'Under Charles VII the Valois monarchy emerged victorious and far stronger, its authority and finances rebuilt for the centralised state of the later kings.'
    ]}
  ],
  timeline: [
    { date: '1328', title: 'Philip VI founds the dynasty', description: 'The Valois inherit the crown as the direct Capetians die out.', links: [{ title: 'Philip VI', type: 'person', slug: 'philip-vi-of-france' }] },
    { date: '1346', title: 'Defeat at Crécy', description: 'English longbows destroy Philip VI’s army.', links: [{ title: 'Battle of Crécy', type: 'event', slug: 'battle-of-crecy' }] },
    { date: '1356', title: 'John II captured at Poitiers', description: 'The king is taken prisoner by the Black Prince.', links: [{ title: 'Battle of Poitiers', type: 'event', slug: 'battle-of-poitiers' }] },
    { date: '1380', title: 'Charles V restores the realm', description: 'By his death most English gains have been recovered.', links: [{ title: 'Charles V the Wise', type: 'person', slug: 'charles-v-of-france' }] },
    { date: '1415', title: 'Catastrophe at Agincourt', description: 'Henry V destroys the French nobility during Charles VI’s madness.', links: [{ title: 'Battle of Agincourt', type: 'event', slug: 'battle-of-agincourt' }] },
    { date: '1429', title: 'Joan of Arc and Charles VII', description: 'The dauphin is crowned at Reims and the tide turns.', links: [{ title: 'Charles VII the Victorious', type: 'person', slug: 'charles-vii-of-france' }] },
    { date: '1453', title: 'End of the Hundred Years’ War', description: 'Charles VII reconquers Guyenne; the long war ends.', links: [{ title: "Hundred Years' War", type: 'event', slug: 'hundred-years-war' }] }
  ],
  relatedEntries: {
    people: [
      { title: 'Philip VI', type: 'person', slug: 'philip-vi-of-france', label: 'Founder' },
      { title: 'Charles V the Wise', type: 'person', slug: 'charles-v-of-france', label: 'Recovered the kingdom' },
      { title: 'Charles VII the Victorious', type: 'person', slug: 'charles-vii-of-france', label: 'Won the war' }
    ],
    events: [
      { title: "Hundred Years' War", type: 'event', slug: 'hundred-years-war', label: 'The defining Valois conflict' },
      { title: 'Battle of Crécy', type: 'event', slug: 'battle-of-crecy', label: 'Opening disaster, 1346' },
      { title: 'Battle of Agincourt', type: 'event', slug: 'battle-of-agincourt', label: 'Low point, 1415' }
    ],
    locations: [{ title: 'Kingdom of France', type: 'location', slug: 'kingdom-of-france', label: 'The realm they ruled' }]
  },
  sources: [
    { title: 'House of Valois — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/House_of_Valois' },
    { title: 'Valois dynasty — Encyclopaedia Britannica', author: 'Encyclopaedia Britannica', type: 'encyclopedia', url: 'https://www.britannica.com/topic/Valois-dynasty' },
    { title: 'Hundred Years’ War — Encyclopaedia Britannica', author: 'Encyclopaedia Britannica', type: 'encyclopedia', url: 'https://www.britannica.com/event/Hundred-Years-War' }
  ]
}

/* --------------------------------------------------------- TRASTAMARA */
const trastamara = {
  id: 'house-of-trastamara',
  type: 'house',
  name: 'House of Trastámara',
  aliases: ['House of Trastamara', 'House of Trastámara (founder)', 'Trastámara', 'Trastamara', 'Trastámara dynasty'],
  originYear: 1369,
  endYear: 1516,
  reignSpan: '1369–1516',
  region: 'Castile (and Aragon)',
  originPlace: 'Castile',
  arms: 'Quarterly, Castile and León — the arms of the Crown of Castile',
  image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Enrique%20II%20de%20Castilla.jpg?width=1000',
  imageInfo: {
    caption: 'Henry II of Castile, founder of the Trastámara dynasty, in a later depiction.',
    creator: 'Later manuscript / portrait depiction',
    date: 'Later depiction (Henry II r. 1369–1379)',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Enrique_II_de_Castilla.jpg',
    note: 'A later image of Henry of Trastámara, who founded the dynasty by killing his half-brother Peter the Cruel.'
  },
  summary: 'The dynasty that seized Castile in a civil war and, through the marriage of Isabella and Ferdinand, united the Spanish crowns.',
  overview: 'The House of Trastámara took the throne of Castile in 1369 when Henry of Trastámara killed his half-brother Peter the Cruel. Its Castilian kings — Henry II, John I, Henry III, and John II — ruled through minorities and noble factionalism, until the marriage of John II’s daughter Isabella to Ferdinand of the Aragonese Trastámaras joined Castile and Aragon on the eve of the modern age.',
  founder: P('henry-ii-of-castile', 'Henry II', 'Won the crown by defeating Peter the Cruel'),
  seats: [{ name: 'Kingdom of Castile', type: 'location', slug: 'kingdom-of-castile' }],
  notableMembers: [
    P('henry-ii-of-castile', 'Henry II', 'Founder of the dynasty'),
    P('john-i-of-castile', 'John I', 'Defeated at Aljubarrota, ending Castilian claims on Portugal'),
    P('henry-iii-of-castile', 'Henry III the Sufferer', 'Restored royal authority after a turbulent minority'),
    P('john-ii-of-castile', 'John II', 'His long reign was dominated by the favourite Álvaro de Luna'),
    P('isabella-of-castile', 'Isabella I', 'United the Spanish crowns (reigned beyond the medieval era)')
  ],
  familyTree: {
    caption: 'The Castilian Trastámara kings from Henry II to John II and his daughter Isabella I. Henry IV, who reigned between John II and Isabella, falls beyond the Codex’s 1453 window.',
    root: {
      name: 'Henry II', personSlug: 'henry-ii-of-castile', note: 'r. 1369–1379',
      children: [{
        name: 'John I', personSlug: 'john-i-of-castile', note: 'r. 1379–1390',
        children: [{
          name: 'Henry III the Sufferer', personSlug: 'henry-iii-of-castile', note: 'r. 1390–1406',
          children: [{
            name: 'John II', personSlug: 'john-ii-of-castile', note: 'r. 1406–1454',
            children: [{ name: 'Isabella I', personSlug: 'isabella-of-castile', note: 'r. 1474–1504, beyond the medieval era', branch: 'Union with Aragon' }]
          }]
        }]
      }]
    }
  },
  contentSections: [
    { title: 'Origins', paragraphs: [
      'The dynasty was born of civil war. Henry of Trastámara, illegitimate son of Alfonso XI of Castile, rebelled against his half-brother King Peter — remembered as "the Cruel" or "the Just" depending on the teller — in a struggle that drew in the wider Hundred Years’ War, with England backing Peter and France backing Henry.',
      'The war turned when Henry, with the French mercenary captain Bertrand du Guesclin, killed Peter at Montiel in 1369 and took the throne as Henry II, founding the Trastámara line.'
    ]},
    { title: 'The early Trastámara kings', paragraphs: [
      'Henry II rewarded his noble backers so lavishly with lands and titles — the "Enrique of the largesses" — that he strengthened a great aristocracy his successors struggled to control. His son John I entangled Castile in the Portuguese succession, only to be crushed at the Battle of Aljubarrota in 1385, ending Castilian hopes of absorbing Portugal.',
      'John I’s son Henry III the Sufferer, succeeding as a child, grew into a capable king who curbed the overmighty nobles and restored the authority of the crown before his early death.'
    ]},
    { title: 'John II and Álvaro de Luna', paragraphs: [
      'The long reign of John II was dominated by his favourite, the constable Álvaro de Luna, who governed Castile for decades against the resistance of the high nobility before his dramatic fall and execution in 1453. It was a reign of factional struggle, cultural brilliance at court, and continued war against Granada.',
      'John II’s daughter Isabella would inherit both the dynasty and its unfinished struggle to master the Castilian nobility.'
    ]},
    { title: 'The union of the crowns', paragraphs: [
      'A parallel branch of the Trastámaras had gained the crown of Aragon in 1412, so that by the fifteenth century the dynasty ruled both great Iberian kingdoms. The marriage in 1469 of Isabella of Castile to Ferdinand of Aragon — both Trastámaras — joined the two crowns in the persons of the "Catholic Monarchs".',
      'Their joint reign, which completed the Reconquista at Granada in 1492 and sponsored Columbus, belongs to the dawn of the early modern era, but its dynastic foundation was the medieval House of Trastámara.'
    ]}
  ],
  timeline: [
    { date: '1369', title: 'Henry II founds the dynasty', description: 'Henry of Trastámara kills Peter the Cruel at Montiel and takes Castile.', links: [{ title: 'Henry II', type: 'person', slug: 'henry-ii-of-castile' }] },
    { date: '1385', title: 'Defeat at Aljubarrota', description: 'John I’s bid to absorb Portugal collapses.', links: [{ title: 'Battle of Aljubarrota', type: 'event', slug: 'battle-of-aljubarrota' }] },
    { date: '1406', title: 'Accession of John II', description: 'A long reign dominated by the favourite Álvaro de Luna begins.', links: [{ title: 'John II', type: 'person', slug: 'john-ii-of-castile' }] },
    { date: '1412', title: 'Trastámaras gain Aragon', description: 'A branch of the dynasty takes the Aragonese crown at the Compromise of Caspe.' },
    { date: '1453', title: 'Fall of Álvaro de Luna', description: 'The great constable is executed, ending an era at John II’s court.' },
    { date: '1469', title: 'Isabella marries Ferdinand', description: 'The marriage that would unite Castile and Aragon.', links: [{ title: 'Isabella I', type: 'person', slug: 'isabella-of-castile' }] }
  ],
  relatedEntries: {
    people: [
      { title: 'Henry II', type: 'person', slug: 'henry-ii-of-castile', label: 'Founder' },
      { title: 'John I', type: 'person', slug: 'john-i-of-castile', label: 'Defeated at Aljubarrota' },
      { title: 'Isabella I', type: 'person', slug: 'isabella-of-castile', label: 'United the Spanish crowns' }
    ],
    events: [
      { title: 'Battle of Aljubarrota', type: 'event', slug: 'battle-of-aljubarrota', label: 'John I’s defeat, 1385' },
      { title: "Hundred Years' War", type: 'event', slug: 'hundred-years-war', label: 'The Castilian civil war was one of its theatres' }
    ],
    locations: [{ title: 'Kingdom of Castile', type: 'location', slug: 'kingdom-of-castile', label: 'The realm they ruled' }]
  },
  sources: [
    { title: 'House of Trastámara — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/House_of_Trast%C3%A1mara' },
    { title: 'Trastámara — Encyclopaedia Britannica', author: 'Encyclopaedia Britannica', type: 'encyclopedia', url: 'https://www.britannica.com/topic/Trastamara' },
    { title: 'Henry II of Castile — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Henry_II_of_Castile' }
  ]
}

if (!Array.isArray(data.houses)) data.houses = []
for (const house of [estridsen, aviz, valois, trastamara]) {
  const i = data.houses.findIndex((h) => h.id === house.id)
  if (i >= 0) data.houses[i] = house
  else data.houses.push(house)
}

writeFileSync(dataPath, JSON.stringify(data, null, 2))
console.log(`Batch C written. houses now: ${data.houses.map((h) => h.id).join(', ')}`)
