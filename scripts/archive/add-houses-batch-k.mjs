import { readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
const __dirname = dirname(fileURLToPath(import.meta.url))
const dataPath = join(__dirname, '..', 'server', 'data', 'history.json')
const data = JSON.parse(readFileSync(dataPath, 'utf8'))
const P = (slug, displayName, note) => ({ personSlug: slug, displayName, note })
const IMG = (f) => `https://commons.wikimedia.org/wiki/Special:FilePath/${f}?width=1000`
const JERU = () => ({ name: 'Kingdom of Jerusalem', type: 'location', slug: 'kingdom-of-jerusalem' })

const hauteville = {
  id: 'house-of-hauteville', type: 'house', name: 'House of Hauteville',
  aliases: ['Hauteville', 'de Hauteville', 'Altavilla', 'Hauteville dynasty'],
  originYear: 1046, endYear: 1194, reignSpan: '1046–1194', region: 'Southern Italy, Sicily & Antioch', originPlace: 'Hauteville, Normandy',
  arms: 'Argent, a chief indented gules — arms attributed to the Hauteville family',
  image: IMG('Bohemond%20I%20of%20Antioch%20lib%20(Cropped).jpg'),
  imageInfo: { caption: 'Bohemond I, the Hauteville prince who founded the Crusader principality of Antioch.', creator: 'Manuscript depiction', date: 'Later depiction (Bohemond I d. 1111)', source: 'Wikimedia Commons', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Bohemond_I_of_Antioch_lib_(Cropped).jpg', note: 'A later image of Bohemond I; the Hauteville family also ruled southern Italy and Sicily.' },
  summary: 'The Norman family whose sons conquered southern Italy and Sicily and founded the Crusader principality of Antioch.',
  overview: 'The House of Hauteville, a family of minor Norman lords, rose in the eleventh century to conquer southern Italy and Sicily under Robert Guiscard and Roger I, creating the Kingdom of Sicily under Roger II. A separate branch under Bohemond and Tancred founded and ruled the Crusader Principality of Antioch.',
  founder: { displayName: 'Tancred of Hauteville', note: 'Norman lord of the Cotentin whose many sons conquered southern Italy (no Codex article yet)' },
  notableMembers: [
    P('bohemond-i-of-antioch', 'Bohemond I of Antioch', 'First Norman Prince of Antioch'),
    P('bohemond-ii-of-antioch', 'Bohemond II', 'Prince of Antioch'),
    P('tancred-prince-of-galilee', 'Tancred', 'Crusader lord and regent of Antioch'),
    { displayName: 'Robert Guiscard', note: 'Duke of Apulia and Calabria; conquered southern Italy' },
    { displayName: 'Roger II', note: 'First King of Sicily, 1130; the crown later passed to the Hohenstaufen' }
  ],
  familyTree: { caption: 'The Hauteville family: Robert Guiscard’s conquest of Italy and the Antioch branch of Bohemond and Tancred, and the Sicilian branch of Roger I and Roger II (named here but not yet given Codex articles).', root: {
    name: 'Tancred of Hauteville', note: 'Norman lord; his sons conquered southern Italy',
    children: [
      { name: 'Robert Guiscard', note: 'Duke of Apulia', children: [
        { name: 'Bohemond I of Antioch', personSlug: 'bohemond-i-of-antioch', note: 'Prince of Antioch, 1098–1111', children: [
          { name: 'Bohemond II', personSlug: 'bohemond-ii-of-antioch', note: 'r. 1119–1130' }
        ] },
        { name: 'Tancred', personSlug: 'tancred-prince-of-galilee', note: 'grand-nephew; regent of Antioch' }
      ] },
      { name: 'Roger I', note: 'Great Count of Sicily', children: [
        { name: 'Roger II', note: 'first King of Sicily, 1130', branch: '→ Hohenstaufen (via Constance)' }
      ] }
    ]
  } },
  contentSections: [
    { title: 'Origins', paragraphs: [
      'The Hautevilles were a family of petty Norman lords from the Cotentin whose sons, lacking inheritance at home, sought their fortune as mercenaries in southern Italy in the early eleventh century. The most formidable, Robert Guiscard ("the Cunning"), carved out the Duchy of Apulia and Calabria from the Byzantines and Lombards, while his brother Roger I conquered Muslim Sicily.',
      'From these conquests grew the Kingdom of Sicily, one of the richest and most cosmopolitan states of the Mediterranean, which the Hautevilles ruled until it passed by marriage to the Hohenstaufen.'
    ] },
    { title: 'The principality of Antioch', paragraphs: [
      'Robert Guiscard’s son Bohemond joined the First Crusade and, after the long siege of Antioch, made himself its prince in 1098 — founding a Hauteville dynasty in the Crusader East. He became the most famous of the crusade’s leaders, and his wars against the Byzantines carried Norman ambition to the Balkans.',
      'His nephew Tancred ruled Antioch as an able regent, and Bohemond’s son Bohemond II held the principality until his death in battle in 1130.'
    ] },
    { title: 'Legacy', paragraphs: [
      'The Hautevilles were among the most successful adventurers of the age: from a minor Norman family they founded a Mediterranean kingdom and a Crusader principality. The Sicily they created blended Norman, Greek, Arab, and Latin culture into a brilliant court civilisation.',
      'Through the marriage of the heiress Constance of Sicily to Henry VI, the Sicilian inheritance passed to the Hohenstaufen and their son Frederick II, carrying the Hauteville legacy into the heart of imperial politics.'
    ] }
  ],
  timeline: [
    { date: '1059', title: 'Robert Guiscard made duke', description: 'The pope invests Guiscard with Apulia and Calabria.' },
    { date: '1098', title: 'Bohemond takes Antioch', description: 'The Hauteville prince founds the crusader principality.', links: [{ title: 'Bohemond I of Antioch', type: 'person', slug: 'bohemond-i-of-antioch' }] },
    { date: '1130', title: 'Kingdom of Sicily founded', description: 'Roger II is crowned king; the same year Bohemond II dies at Antioch.' }
  ],
  relatedEntries: { people: [
    { title: 'Bohemond I of Antioch', type: 'person', slug: 'bohemond-i-of-antioch', label: 'Founder of Antioch' },
    { title: 'Bohemond II', type: 'person', slug: 'bohemond-ii-of-antioch', label: 'Prince of Antioch' },
    { title: 'Tancred', type: 'person', slug: 'tancred-prince-of-galilee', label: 'Regent of Antioch' }
  ], houses: [{ title: 'House of Hohenstaufen', type: 'house', slug: 'house-of-hohenstaufen', label: 'Inherited the Sicilian crown' }] },
  sources: [
    { title: 'Hauteville family — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Hauteville_family' },
    { title: 'Robert Guiscard — Encyclopaedia Britannica', author: 'Encyclopaedia Britannica', type: 'encyclopedia', url: 'https://www.britannica.com/biography/Robert-Guiscard' },
    { title: 'Bohemond I — Encyclopaedia Britannica', author: 'Encyclopaedia Britannica', type: 'encyclopedia', url: 'https://www.britannica.com/biography/Bohemond-I' }
  ]
}

const lusignan = {
  id: 'house-of-lusignan', type: 'house', name: 'House of Lusignan',
  aliases: ['Lusignan', 'Lusignan dynasty', 'de Lusignan'],
  originYear: 1186, endYear: 1489, reignSpan: '1186–1489 (Jerusalem & Cyprus)', region: 'Jerusalem, Cyprus & Poitou', originPlace: 'Lusignan, Poitou',
  arms: 'Barry argent and azure — the arms of Lusignan',
  image: IMG('Guido%20di%20Lusignano.jpg'),
  imageInfo: { caption: 'Guy of Lusignan, King of Jerusalem, whose defeat at Hattin lost the holy city.', creator: 'Later depiction', date: 'Later image (Guy d. 1194)', source: 'Wikimedia Commons', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Guido_di_Lusignano.jpg', note: 'A later image of Guy of Lusignan, founder of the Lusignan royal line in the East.' },
  summary: 'The Poitevin family that gained the crowns of Jerusalem and Cyprus and ruled the crusader island kingdom for three centuries.',
  overview: 'The House of Lusignan, lords of Poitou, rose to the crusader thrones when Guy of Lusignan married Sibylla and became King of Jerusalem. Though Guy lost the kingdom at Hattin, his brother Amalric II secured the island of Cyprus, where the Lusignans reigned as kings long after the mainland crusader states had fallen.',
  founder: P('guy-of-lusignan', 'Guy of Lusignan', 'King of Jerusalem; later lord of Cyprus'),
  seats: [JERU()],
  notableMembers: [
    P('guy-of-lusignan', 'Guy of Lusignan', 'King of Jerusalem; lost at Hattin, then ruled Cyprus'),
    P('amalric-ii-of-lusignan', 'Amalric II', 'King of Cyprus and Jerusalem; secured the dynasty')
  ],
  familyTree: { caption: 'The brothers Guy and Amalric of Lusignan, who together brought the crowns of Jerusalem and Cyprus into the family.', root: {
    name: 'Hugh VIII of Lusignan', note: 'lord of Lusignan in Poitou',
    children: [
      { name: 'Guy of Lusignan', personSlug: 'guy-of-lusignan', note: 'King of Jerusalem 1186–1192; lord of Cyprus' },
      { name: 'Amalric II', personSlug: 'amalric-ii-of-lusignan', note: 'King of Cyprus and Jerusalem, d. 1205' }
    ]
  } },
  contentSections: [
    { title: 'Origins', paragraphs: [
      'The Lusignans were a powerful family of Poitou, in western France, long troublesome vassals of the dukes of Aquitaine. In the 1180s Guy of Lusignan came east and married Sibylla, heiress of the Kingdom of Jerusalem, becoming king through his wife.',
      'His accession divided the barons of the kingdom, and his reign coincided with the greatest crisis in its history.'
    ] },
    { title: 'Hattin and Cyprus', paragraphs: [
      'In 1187 Guy led the army of Jerusalem to annihilation against Saladin at the Battle of Hattin, and the kingdom lost Jerusalem and almost all its territory. Discredited on the mainland, Guy was compensated during the Third Crusade with the island of Cyprus, which Richard the Lionheart had seized.',
      'There the Lusignans established a Latin kingdom that would outlast every other crusader state.'
    ] },
    { title: 'The Cypriot kingdom', paragraphs: [
      'Guy’s brother Amalric II secured the family’s position, taking the royal title in Cyprus and briefly reuniting it with the rump Kingdom of Jerusalem based at Acre. The Lusignans ruled Cyprus as kings until 1489, long after Acre fell in 1291, making it the last Latin outpost of the crusading age in the eastern Mediterranean.',
      'From Cyprus the family also pressed claims to Jerusalem and Armenia, keeping the memory of the crusader kingdoms alive for two more centuries.'
    ] }
  ],
  timeline: [
    { date: '1186', title: 'Guy crowned King of Jerusalem', description: 'Guy of Lusignan becomes king through his marriage to Sibylla.', links: [{ title: 'Guy of Lusignan', type: 'person', slug: 'guy-of-lusignan' }] },
    { date: '1187', title: 'Battle of Hattin', description: 'Guy’s defeat loses Jerusalem to Saladin.', links: [{ title: 'Battle of Hattin', type: 'event', slug: 'battle-of-hattin' }] },
    { date: '1192', title: 'The Lusignans gain Cyprus', description: 'The family establishes a lasting kingdom on the island.' }
  ],
  relatedEntries: { people: [
    { title: 'Guy of Lusignan', type: 'person', slug: 'guy-of-lusignan', label: 'Founder; King of Jerusalem' },
    { title: 'Amalric II', type: 'person', slug: 'amalric-ii-of-lusignan', label: 'King of Cyprus' }
  ], events: [{ title: 'Battle of Hattin', type: 'event', slug: 'battle-of-hattin', label: 'Guy’s catastrophic defeat, 1187' }], locations: [JERU()], houses: [{ title: 'House of Anjou-Rethel', type: 'house', slug: 'house-of-anjou-rethel', label: 'The Jerusalem line before them' }] },
  sources: [
    { title: 'Lusignan family — Encyclopaedia Britannica', author: 'Encyclopaedia Britannica', type: 'encyclopedia', url: 'https://www.britannica.com/topic/Lusignan-family' },
    { title: 'Guy of Lusignan — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Guy_of_Lusignan' },
    { title: 'Kingdom of Cyprus — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Kingdom_of_Cyprus' }
  ]
}

const montferrat = {
  id: 'house-of-montferrat', type: 'house', name: 'House of Montferrat',
  aliases: ['House of Montferrat / Aleramici', 'Aleramici', 'Montferrat', 'Aleramid'],
  originYear: 1187, endYear: 1207, reignSpan: '1187–1207 (Jerusalem & Thessalonica)', region: 'Piedmont, Jerusalem & Greece', originPlace: 'Montferrat, Piedmont',
  arms: 'Argent, a chief gules — the arms of Montferrat',
  image: IMG('Conrad%20of%20Montferrat%20-%20Conrad%20arrives%20at%20Tyre.jpg'),
  imageInfo: { caption: 'Conrad of Montferrat, defender of Tyre and king-elect of Jerusalem, in a manuscript of William of Tyre’s continuation.', creator: 'Manuscript of the Histoire d’Outremer', date: '13th–14th century', source: 'Wikimedia Commons', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Conrad_of_Montferrat_-_Conrad_arrives_at_Tyre.jpg', note: 'A later crusader-chronicle depiction of Conrad of Montferrat.' },
  summary: 'The Piedmontese marquesses who won crowns in the crusading world — Jerusalem, Thessalonica, and beyond.',
  overview: 'The House of Montferrat, an ancient family of marquesses in Piedmont, produced a remarkable set of crusading princes. Conrad of Montferrat saved Tyre and was elected King of Jerusalem; his brother Boniface led the Fourth Crusade and became King of Thessalonica; and Conrad’s daughter Maria carried the Jerusalem crown onward.',
  founder: { displayName: 'William V of Montferrat', note: 'Marquess of Montferrat, "the Old", father of the crusading brothers (no Codex article yet)' },
  seats: [JERU()],
  notableMembers: [
    P('conrad-of-montferrat', 'Conrad of Montferrat', 'Defender of Tyre; elected King of Jerusalem'),
    P('boniface-of-montferrat', 'Boniface of Montferrat', 'Leader of the Fourth Crusade; King of Thessalonica'),
    P('maria-of-montferrat', 'Maria of Montferrat', 'Queen of Jerusalem; Conrad’s daughter')
  ],
  familyTree: { caption: 'The Montferrat brothers Conrad and Boniface, sons of William V, and Conrad’s daughter Maria, Queen of Jerusalem. ⚭ marks a marriage.', root: {
    name: 'William V of Montferrat', note: 'Marquess of Montferrat, "the Old"',
    children: [
      { name: 'Conrad of Montferrat', personSlug: 'conrad-of-montferrat', note: 'King-elect of Jerusalem, d. 1192', spouse: { name: 'Isabella I of Jerusalem' }, children: [
        { name: 'Maria of Montferrat', personSlug: 'maria-of-montferrat', note: 'Queen of Jerusalem, r. 1205–1212' }
      ] },
      { name: 'Boniface of Montferrat', personSlug: 'boniface-of-montferrat', note: 'King of Thessalonica, d. 1207' }
    ]
  } },
  contentSections: [
    { title: 'Origins', paragraphs: [
      'The marquesses of Montferrat were one of the great feudal houses of north-western Italy, descended from the Aleramici and closely tied to the Holy Roman Empire. In the late twelfth century a generation of Montferrat brothers won fame and thrones across the crusading world.',
      'Their imperial connections and military reputation made them natural leaders in the wars of the Latin East and the politics of Byzantium.'
    ] },
    { title: 'Conrad and the defence of Tyre', paragraphs: [
      'Conrad of Montferrat arrived in the Holy Land just after Hattin and organised the successful defence of Tyre, the last major city the Crusaders held. Marrying Isabella, heiress of Jerusalem, he was elected king during the Third Crusade — but was assassinated in 1192, days after his election, by the Nizari "Assassins".',
      'His daughter Maria inherited the claim and, as queen, carried the crown of Jerusalem into her marriage with John of Brienne.'
    ] },
    { title: 'Boniface and the Fourth Crusade', paragraphs: [
      'Conrad’s brother Boniface was chosen to lead the Fourth Crusade in 1202. When the crusade was diverted to sack Constantinople in 1204, Boniface carved out the Kingdom of Thessalonica in northern Greece, becoming one of the chief Latin rulers of the dismembered Byzantine Empire.',
      'He was killed by the Bulgarians in 1207, but the Montferrat name remained entangled with the thrones of Greece and Jerusalem for generations.'
    ] }
  ],
  timeline: [
    { date: '1187', title: 'Conrad saves Tyre', description: 'Conrad organises the defence that preserves a crusader foothold after Hattin.', links: [{ title: 'Conrad of Montferrat', type: 'person', slug: 'conrad-of-montferrat' }] },
    { date: '1192', title: 'Conrad elected and murdered', description: 'Elected King of Jerusalem, he is assassinated days later.' },
    { date: '1204', title: 'Boniface and the Fourth Crusade', description: 'Boniface becomes King of Thessalonica after the sack of Constantinople.', links: [{ title: 'Boniface of Montferrat', type: 'person', slug: 'boniface-of-montferrat' }] }
  ],
  relatedEntries: { people: [
    { title: 'Conrad of Montferrat', type: 'person', slug: 'conrad-of-montferrat', label: 'Defender of Tyre' },
    { title: 'Boniface of Montferrat', type: 'person', slug: 'boniface-of-montferrat', label: 'Led the Fourth Crusade' },
    { title: 'Maria of Montferrat', type: 'person', slug: 'maria-of-montferrat', label: 'Queen of Jerusalem' }
  ], events: [{ title: 'Fall of Constantinople', type: 'event', slug: 'fall-of-constantinople', label: 'The Ottoman conquest of the city Boniface’s crusade had once taken' }], locations: [JERU()] },
  sources: [
    { title: 'Montferrat — Encyclopaedia Britannica', author: 'Encyclopaedia Britannica', type: 'encyclopedia', url: 'https://www.britannica.com/place/Montferrat' },
    { title: 'Conrad of Montferrat — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Conrad_of_Montferrat' },
    { title: 'Boniface I of Montferrat — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Boniface_I,_Marquis_of_Montferrat' }
  ]
}

const toulouse = {
  id: 'house-of-toulouse', type: 'house', name: 'House of Toulouse',
  aliases: ['Raymondines', 'House of Saint-Gilles', 'Toulouse', 'Counts of Toulouse'],
  originYear: 1096, endYear: 1187, reignSpan: '1096–1187 (crusader Tripoli)', region: 'Toulouse & the County of Tripoli', originPlace: 'Toulouse, Languedoc',
  arms: 'Gules, a cross clechée voided and pommettée or — the cross of Toulouse',
  image: IMG('Raymond%20IV%20of%20Toulouse%20(Cropped).jpg'),
  imageInfo: { caption: 'Raymond IV of Toulouse, one of the principal leaders of the First Crusade and founder of the County of Tripoli.', creator: 'Later depiction', date: 'Later image (Raymond IV d. 1105)', source: 'Wikimedia Commons', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Raymond_IV_of_Toulouse_(Cropped).jpg', note: 'A later image of the crusader count Raymond IV of Saint-Gilles.' },
  summary: 'The counts of Toulouse, First Crusade leaders whose branch founded and ruled the County of Tripoli.',
  overview: 'The House of Toulouse, one of the greatest feudal families of southern France, joined the First Crusade under Raymond IV of Saint-Gilles. Though Raymond never gained the crown he sought, his family founded the County of Tripoli, the last of the four great Crusader states, which his descendants ruled for the twelfth century.',
  founder: P('raymond-iv-of-toulouse', 'Raymond IV of Toulouse', 'First Crusade leader; founder of the Tripoli line'),
  notableMembers: [
    P('raymond-iv-of-toulouse', 'Raymond IV', 'Led the First Crusade; began the conquest of Tripoli'),
    P('raymond-ii-of-tripoli', 'Raymond II', 'Count of Tripoli'),
    P('raymond-iii-of-tripoli', 'Raymond III', 'Regent of Jerusalem; counselled against the Hattin campaign')
  ],
  familyTree: { caption: 'The Toulouse line in the East: Raymond IV of Saint-Gilles and his descendants, the counts of Tripoli, through Raymond II and Raymond III.', root: {
    name: 'Raymond IV of Toulouse', personSlug: 'raymond-iv-of-toulouse', note: 'Count of Toulouse; d. 1105',
    children: [{ name: 'the counts of Tripoli', note: 'Bertrand, Pons, and their successors', children: [
      { name: 'Raymond II', personSlug: 'raymond-ii-of-tripoli', note: 'Count of Tripoli, d. 1152', children: [
        { name: 'Raymond III', personSlug: 'raymond-iii-of-tripoli', note: 'Count of Tripoli; regent of Jerusalem, d. 1187' }
      ] }
    ] }]
  } },
  contentSections: [
    { title: 'Origins', paragraphs: [
      'The counts of Toulouse ruled a vast territory in Languedoc and were among the most powerful lords of southern France. Raymond IV, called Raymond of Saint-Gilles, was the wealthiest and most senior of the leaders of the First Crusade in 1096, and expected to take a leading role in the conquered Holy Land.',
      'Passed over for the crown of Jerusalem, he turned instead to the Syrian coast, beginning the siege of Tripoli that his family would complete.'
    ] },
    { title: 'The County of Tripoli', paragraphs: [
      'Raymond IV died in 1105 before Tripoli fell, but his relatives finished the conquest in 1109, founding the County of Tripoli — the last of the four crusader states. His descendants ruled it as a fief loosely tied to the Kingdom of Jerusalem.',
      'The most notable was Raymond III, a shrewd and experienced statesman who served as regent of Jerusalem and warned, in vain, against the reckless campaign that ended at Hattin in 1187.'
    ] },
    { title: 'Legacy', paragraphs: [
      'The Toulouse line gave the crusader world one of its founding leaders and one of its most durable states. Raymond III’s death in the aftermath of Hattin effectively ended the direct line’s rule in the East, and Tripoli passed to the counts of Antioch.',
      'In France, the counts of Toulouse remained a great power until the Albigensian Crusade of the thirteenth century broke their independence and drew Languedoc into the French crown.'
    ] }
  ],
  timeline: [
    { date: '1096', title: 'Raymond IV joins the crusade', description: 'The senior leader of the First Crusade sets out.', links: [{ title: 'Raymond IV', type: 'person', slug: 'raymond-iv-of-toulouse' }] },
    { date: '1109', title: 'Fall of Tripoli', description: 'The Toulouse family completes the county’s conquest.' },
    { date: '1187', title: 'Death of Raymond III', description: 'The last great count of the line dies after Hattin.', links: [{ title: 'Raymond III', type: 'person', slug: 'raymond-iii-of-tripoli' }] }
  ],
  relatedEntries: { people: [
    { title: 'Raymond IV', type: 'person', slug: 'raymond-iv-of-toulouse', label: 'First Crusade leader' },
    { title: 'Raymond II', type: 'person', slug: 'raymond-ii-of-tripoli', label: 'Count of Tripoli' },
    { title: 'Raymond III', type: 'person', slug: 'raymond-iii-of-tripoli', label: 'Regent of Jerusalem' }
  ], houses: [{ title: 'House of Boulogne', type: 'house', slug: 'house-of-boulogne', label: 'Fellow founders of the crusader states' }] },
  sources: [
    { title: 'Raymond IV — Encyclopaedia Britannica', author: 'Encyclopaedia Britannica', type: 'encyclopedia', url: 'https://www.britannica.com/biography/Raymond-IV' },
    { title: 'County of Tripoli — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/County_of_Tripoli' },
    { title: 'Raymond III of Tripoli — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Raymond_III,_Count_of_Tripoli' }
  ]
}

const flandersHainaut = {
  id: 'house-of-flanders-hainaut', type: 'house', name: 'House of Flanders-Hainaut',
  aliases: ['House of Flanders', 'Flanders-Hainaut', 'House of Hainaut'],
  originYear: 1204, endYear: 1216, reignSpan: '1204–1216 (Latin Empire)', region: 'Flanders & the Latin Empire', originPlace: 'Flanders and Hainaut',
  arms: 'Or, a lion rampant sable — the arms of Flanders',
  image: IMG('Baldwin%20I%20of%20Constantinople%20(Cropped).jpg'),
  imageInfo: { caption: 'Baldwin I, Count of Flanders and first Latin Emperor of Constantinople.', creator: 'Later depiction', date: 'Later image (Baldwin I d. 1205)', source: 'Wikimedia Commons', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Baldwin_I_of_Constantinople_(Cropped).jpg', note: 'A later image of Baldwin of Flanders, the first Latin emperor after the Fourth Crusade.' },
  summary: 'The counts of Flanders and Hainaut who became the first Latin Emperors of Constantinople after the Fourth Crusade.',
  overview: 'The House of Flanders-Hainaut supplied the first rulers of the Latin Empire of Constantinople, founded when the Fourth Crusade sacked the Byzantine capital in 1204. Count Baldwin IX of Flanders was elected emperor, and after his capture and death his brother Henry proved the ablest of the Latin emperors.',
  founder: P('baldwin-i-latin-emperor', 'Baldwin I', 'Count of Flanders; first Latin Emperor of Constantinople'),
  seats: [{ name: 'County of Flanders', type: 'location', slug: 'county-of-flanders' }],
  notableMembers: [
    P('baldwin-i-latin-emperor', 'Baldwin I', 'First Latin Emperor; captured by the Bulgarians'),
    P('henry-of-flanders', 'Henry of Flanders', 'Ablest of the Latin emperors')
  ],
  familyTree: { caption: 'The brothers Baldwin and Henry of Flanders, the first two Latin Emperors of Constantinople.', root: {
    name: 'Baldwin V of Hainaut', note: 'Count of Hainaut and Flanders',
    children: [
      { name: 'Baldwin I', personSlug: 'baldwin-i-latin-emperor', note: 'Latin Emperor 1204–1205' },
      { name: 'Henry of Flanders', personSlug: 'henry-of-flanders', note: 'Latin Emperor 1206–1216' }
    ]
  } },
  contentSections: [
    { title: 'Origins', paragraphs: [
      'Baldwin IX, Count of Flanders and Hainaut, was one of the great princes of the Low Countries and a leader of the Fourth Crusade. When the crusade was diverted to attack Constantinople and stormed the city in 1204, the victorious Latins elected Baldwin as the first emperor of a new Latin Empire in place of the Byzantine one.',
      'The new empire was a fragile Latin overlay on a hostile Greek world, surrounded by Byzantine successor states and the Bulgarians.'
    ] },
    { title: 'Baldwin and Henry', paragraphs: [
      'Baldwin I’s reign was short: in 1205 he was defeated and captured by the Bulgarian tsar Kaloyan at Adrianople and died in captivity. His brother Henry succeeded him and proved the most capable of the Latin emperors, holding the empire together against Greeks and Bulgarians alike through war and diplomacy until his death in 1216.',
      'After Henry the crown passed by marriage to the House of Courtenay, and the Latin Empire slid into decline.'
    ] },
    { title: 'Legacy', paragraphs: [
      'The Flanders-Hainaut emperors founded the Latin Empire that ruled Constantinople for half a century after 1204, one of the most striking consequences of the Fourth Crusade. Their rule deepened the schism between the Latin and Greek churches and left lasting bitterness in the Orthodox world.',
      'The empire they created never recovered from Baldwin’s early loss, and in 1261 the Byzantines under the Palaiologoi retook Constantinople.'
    ] }
  ],
  timeline: [
    { date: '1204', title: 'Baldwin elected Latin Emperor', description: 'The Fourth Crusade makes the Count of Flanders emperor.', links: [{ title: 'Baldwin I', type: 'person', slug: 'baldwin-i-latin-emperor' }] },
    { date: '1205', title: 'Disaster at Adrianople', description: 'Baldwin is captured by the Bulgarians and dies.' },
    { date: '1216', title: 'Death of Henry', description: 'The ablest Latin emperor dies; the crown passes to Courtenay.', links: [{ title: 'Henry of Flanders', type: 'person', slug: 'henry-of-flanders' }] }
  ],
  relatedEntries: { people: [
    { title: 'Baldwin I', type: 'person', slug: 'baldwin-i-latin-emperor', label: 'First Latin Emperor' },
    { title: 'Henry of Flanders', type: 'person', slug: 'henry-of-flanders', label: 'Ablest Latin emperor' }
  ], locations: [{ title: 'County of Flanders', type: 'location', slug: 'county-of-flanders', label: 'Their ancestral county' }], houses: [{ title: 'House of Palaiologos', type: 'house', slug: 'house-of-palaiologos', label: 'Recovered Constantinople in 1261' }] },
  sources: [
    { title: 'Latin Empire — Encyclopaedia Britannica', author: 'Encyclopaedia Britannica', type: 'encyclopedia', url: 'https://www.britannica.com/place/Latin-Empire-of-Constantinople' },
    { title: 'Baldwin I, Latin Emperor — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Baldwin_I,_Latin_Emperor' },
    { title: 'Henry of Flanders — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Henry_of_Flanders' }
  ]
}

if (!Array.isArray(data.houses)) data.houses = []
for (const house of [hauteville, lusignan, montferrat, toulouse, flandersHainaut]) {
  const i = data.houses.findIndex((h) => h.id === house.id)
  if (i >= 0) data.houses[i] = house; else data.houses.push(house)
}
writeFileSync(dataPath, JSON.stringify(data, null, 2))
console.log(`Batch K written. houses now (${data.houses.length}).`)
