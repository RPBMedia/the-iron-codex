import { readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const dataPath = join(__dirname, '..', 'server', 'data', 'history.json')
const data = JSON.parse(readFileSync(dataPath, 'utf8'))
const P = (slug, displayName, note) => ({ personSlug: slug, displayName, note })

/* --------------------------------------------------------- LANCASTER */
const lancaster = {
  id: 'house-of-lancaster',
  type: 'house',
  name: 'House of Lancaster',
  aliases: ['Lancaster', 'Lancastrian', 'Lancastrians', 'Lancaster dynasty'],
  originYear: 1399,
  endYear: 1471,
  reignSpan: '1399–1471',
  region: 'Kingdom of England',
  originPlace: 'England',
  arms: 'The royal arms of England differenced by a label of France; the red rose became the Lancastrian badge',
  image: 'https://commons.wikimedia.org/wiki/Special:FilePath/King%20Henry%20V%20from%20NPG.jpg?width=1000',
  imageInfo: {
    caption: 'Henry V, the greatest Lancastrian king and victor of Agincourt, in a later royal portrait.',
    creator: 'Unknown English painter (National Portrait Gallery)',
    date: 'Late 16th-century copy of a lost original',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:King_Henry_V_from_NPG.jpg',
    note: 'A later copy of the standard royal likeness of Henry V; no portrait from life survives.'
  },
  summary: 'The cadet branch of the Plantagenets that seized the English throne in 1399 and held it through the Hundred Years’ War and into the Wars of the Roses.',
  overview: 'The House of Lancaster descended from John of Gaunt, third surviving son of Edward III. When his son Henry Bolingbroke deposed Richard II in 1399 and took the crown as Henry IV, the Lancastrians became kings of England. Under Henry V they came close to winning France, but the long minority and madness of Henry VI collapsed into the Wars of the Roses.',
  founder: { displayName: 'John of Gaunt', note: 'Duke of Lancaster, son of Edward III; father of the royal line (no Codex article yet)' },
  seats: [{ name: 'Kingdom of England', type: 'location', slug: 'kingdom-of-england' }],
  notableMembers: [
    P('henry-iv-of-england', 'Henry IV', 'Deposed Richard II and founded the royal house in 1399'),
    P('henry-v-of-england', 'Henry V', 'Victor of Agincourt; heir to France by the Treaty of Troyes'),
    P('henry-vi-of-england', 'Henry VI', 'His minority and madness brought on the Wars of the Roses'),
    P('john-duke-of-bedford', 'John, Duke of Bedford', 'Regent of Lancastrian France for the young Henry VI')
  ],
  cadetBranches: [
    { name: 'House of Beaufort', note: 'The legitimated descendants of John of Gaunt and Katherine Swynford, through whom the Tudor claim later ran.' }
  ],
  familyTree: {
    caption: 'The Lancastrian kings, a branch of the House of Plantagenet descended from John of Gaunt, third son of Edward III. ⚭ marks a marriage.',
    root: {
      name: 'John of Gaunt', note: 'Duke of Lancaster, son of Edward III',
      children: [{
        name: 'Henry IV', personSlug: 'henry-iv-of-england', note: 'r. 1399–1413',
        children: [
          {
            name: 'Henry V', personSlug: 'henry-v-of-england', note: 'r. 1413–1422',
            spouse: { name: 'Catherine of Valois' },
            children: [{ name: 'Henry VI', personSlug: 'henry-vi-of-england', note: 'r. 1422–1461, 1470–71' }]
          },
          { name: 'John, Duke of Bedford', personSlug: 'john-duke-of-bedford', note: 'regent of France' }
        ]
      }]
    }
  },
  contentSections: [
    { title: 'Origins', paragraphs: [
      'The house sprang from John of Gaunt, Duke of Lancaster, the third surviving son of Edward III and the richest magnate in England. Gaunt himself never ruled, but his vast Lancastrian inheritance and royal blood made his son a natural claimant when Richard II’s tyranny alienated the nobility.',
      'In 1399 Gaunt’s son Henry Bolingbroke returned from exile, deposed Richard II, and took the crown as Henry IV — a usurpation that gave the dynasty its throne but also a permanent weakness of legitimacy.'
    ]},
    { title: 'Henry V and the conquest of France', paragraphs: [
      'Henry IV spent his reign defending his stolen crown against rebellion. His son Henry V turned outward, renewing the Hundred Years’ War and winning the overwhelming victory at the Battle of Agincourt in 1415. By the Treaty of Troyes in 1420 he was recognised as heir to the French throne and married Catherine of Valois.',
      'Henry V’s early death in 1422 left the double inheritance of England and France to an infant, with his brother John, Duke of Bedford, ruling as regent in France.'
    ]},
    { title: 'Henry VI and collapse', paragraphs: [
      'Henry VI grew into a pious but weak king who suffered bouts of mental collapse, and under him the English position in France fell apart — helped on by Joan of Arc — until only Calais remained by 1453. At home, faction, debt, and the king’s incapacity discredited the regime.',
      'From 1455 the rivalry between the Lancastrian court and the House of York erupted into the Wars of the Roses.'
    ]},
    { title: 'The Wars of the Roses and the end of the line', paragraphs: [
      'The dynastic wars swung back and forth: Henry VI was deposed by the Yorkist Edward IV in 1461, briefly restored in 1470, and finally destroyed in 1471, when his son Prince Edward was killed at Tewkesbury and Henry himself died in the Tower, ending the direct Lancastrian line.',
      'The Lancastrian claim survived through the Beauforts, and in 1485 Henry Tudor — descended from John of Gaunt through that line — defeated Richard III to found the Tudor dynasty.'
    ]},
    { title: 'Legacy', paragraphs: [
      'The House of Lancaster gave England the victories of Henry V and, in Henry VI, the collapse that opened the Wars of the Roses. The red rose of Lancaster became one of the most famous badges in English history.',
      'Through the Beaufort line and the Tudor marriage of Lancaster and York, the dynasty’s blood flowed into the monarchy that followed the medieval age.'
    ]}
  ],
  timeline: [
    { date: '1399', title: 'Henry IV takes the throne', description: 'Henry Bolingbroke deposes Richard II and founds the royal house.', links: [{ title: 'Henry IV', type: 'person', slug: 'henry-iv-of-england' }] },
    { date: '1415', title: 'Victory at Agincourt', description: 'Henry V wins his famous victory over the French.', links: [{ title: 'Battle of Agincourt', type: 'event', slug: 'battle-of-agincourt' }] },
    { date: '1420', title: 'Treaty of Troyes', description: 'Henry V is recognised as heir to the French crown.', links: [{ title: 'Henry V', type: 'person', slug: 'henry-v-of-england' }] },
    { date: '1455', title: 'Wars of the Roses begin', description: 'Lancaster and York go to war for the crown.', links: [{ title: 'Henry VI', type: 'person', slug: 'henry-vi-of-england' }] },
    { date: '1471', title: 'End of the direct line', description: 'Henry VI and his son die; direct Lancastrian rule ends.' }
  ],
  relatedEntries: {
    people: [
      { title: 'Henry IV', type: 'person', slug: 'henry-iv-of-england', label: 'Founder of the royal house' },
      { title: 'Henry V', type: 'person', slug: 'henry-v-of-england', label: 'Victor of Agincourt' },
      { title: 'Henry VI', type: 'person', slug: 'henry-vi-of-england', label: 'The Wars of the Roses' }
    ],
    events: [
      { title: 'Battle of Agincourt', type: 'event', slug: 'battle-of-agincourt', label: 'Henry V’s great victory, 1415' },
      { title: "Hundred Years' War", type: 'event', slug: 'hundred-years-war', label: 'The Lancastrian war in France' }
    ],
    locations: [{ title: 'Kingdom of England', type: 'location', slug: 'kingdom-of-england', label: 'The realm they ruled' }],
    houses: [{ title: 'House of Plantagenet', type: 'house', slug: 'house-of-plantagenet', label: 'The senior dynasty' }]
  },
  sources: [
    { title: 'House of Lancaster — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/House_of_Lancaster' },
    { title: 'House of Lancaster — Encyclopaedia Britannica', author: 'Encyclopaedia Britannica', type: 'encyclopedia', url: 'https://www.britannica.com/topic/house-of-Lancaster' },
    { title: 'Henry V — Encyclopaedia Britannica', author: 'Encyclopaedia Britannica', type: 'encyclopedia', url: 'https://www.britannica.com/biography/Henry-V-king-of-England' }
  ]
}

/* ------------------------------------------------------------- BRUCE */
const bruce = {
  id: 'house-of-bruce',
  type: 'house',
  name: 'House of Bruce',
  aliases: ['Bruce', 'Bruce dynasty', 'de Brus', 'Clan Bruce'],
  originYear: 1306,
  endYear: 1371,
  reignSpan: '1306–1371',
  region: 'Kingdom of Scotland',
  originPlace: 'Annandale, Scotland',
  arms: 'Or, a saltire and chief gules — the arms of Bruce',
  image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Robert%20the%20Bruce%20statue,%20Bannockburn%20-%20geograph.org.uk%20-%201538090.jpg?width=1000',
  imageInfo: {
    caption: 'Statue of Robert the Bruce at Bannockburn, site of his decisive victory over the English in 1314.',
    creator: 'Pilkington Jackson (equestrian statue, 1964)',
    date: '1964',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Robert_the_Bruce_statue,_Bannockburn_-_geograph.org.uk_-_1538090.jpg',
    note: 'A 20th-century monument to the Bruce on the battlefield where he secured Scottish independence.'
  },
  summary: 'The Scottish royal house of Robert the Bruce, who won independence from England and founded a short-lived dynasty.',
  overview: 'The House of Bruce held the Scottish throne for two reigns in the fourteenth century. Robert the Bruce seized the crown in 1306 amid the Wars of Scottish Independence, secured it at the Battle of Bannockburn in 1314, and won recognition of Scottish independence; his son David II held the throne until 1371, when the crown passed to the Stewarts.',
  founder: P('robert-the-bruce', 'Robert the Bruce', 'Won the crown and Scottish independence'),
  seats: [{ name: 'Kingdom of Scotland', type: 'location', slug: 'kingdom-of-scotland' }],
  notableMembers: [
    P('robert-the-bruce', 'Robert the Bruce', 'King Robert I; victor of Bannockburn'),
    P('david-ii-of-scotland', 'David II', 'His son; last Bruce king of Scots')
  ],
  cadetBranches: [
    { name: 'House of Stewart', note: 'Through Robert the Bruce’s daughter Marjorie, who married Walter Stewart; their son became Robert II, first Stewart king.' }
  ],
  familyTree: {
    caption: 'The two Bruce kings of Scots. Robert the Bruce’s daughter Marjorie carried the succession to the House of Stewart. ⚭ marks a marriage.',
    root: {
      name: 'Robert the Bruce', personSlug: 'robert-the-bruce', note: 'King Robert I, r. 1306–1329',
      children: [
        { name: 'David II', personSlug: 'david-ii-of-scotland', note: 'r. 1329–1371, no heir' },
        { name: 'Marjorie Bruce', note: 'daughter; m. Walter Stewart', branch: '→ House of Stewart (Robert II)' }
      ]
    }
  },
  contentSections: [
    { title: 'Origins', paragraphs: [
      'The Bruces were an Anglo-Norman family, lords of Annandale in south-west Scotland, with a claim to the Scottish throne through descent from David I. When the line of Alexander III failed and Edward I of England sought to dominate Scotland, Robert the Bruce emerged as a leader of Scottish resistance.',
      'In 1306, after killing his rival John Comyn in a church at Dumfries, Bruce had himself crowned king at Scone — an act of desperation that began his fight for both the crown and the kingdom.'
    ]},
    { title: 'Bannockburn and independence', paragraphs: [
      'Bruce’s early reign nearly collapsed under English pressure and Scottish opposition, but he rebuilt his position through guerrilla warfare, the capture of English-held castles, and the destruction of his domestic enemies. In 1314 he won a crushing victory over Edward II’s much larger army at the Battle of Bannockburn.',
      'The Declaration of Arbroath in 1320 asserted Scottish independence to the pope, and by the Treaty of Edinburgh–Northampton in 1328 England at last recognised Bruce as king of an independent Scotland.'
    ]},
    { title: 'David II and the end of the line', paragraphs: [
      'Robert died in 1329 and was succeeded by his five-year-old son David II. David’s long reign was troubled — years of exile in France, capture by the English at Neville’s Cross in 1346, and a long imprisonment — but he preserved the Bruce crown and Scottish independence.',
      'David died childless in 1371, ending the direct Bruce line. The throne passed to his nephew Robert Stewart, son of Marjorie Bruce, founding the long-lived House of Stewart.'
    ]},
    { title: 'Legacy', paragraphs: [
      'The House of Bruce secured Scotland’s survival as an independent kingdom, a status it kept for nearly four more centuries. Robert the Bruce became Scotland’s national hero, and Bannockburn its defining victory.',
      'Through Marjorie Bruce the dynasty’s blood passed to the Stewarts, who would eventually rule both Scotland and England.'
    ]}
  ],
  timeline: [
    { date: '1306', title: 'Bruce crowned king', description: 'Robert seizes the Scottish throne after killing John Comyn.', links: [{ title: 'Robert the Bruce', type: 'person', slug: 'robert-the-bruce' }] },
    { date: '1314', title: 'Battle of Bannockburn', description: 'Bruce destroys a far larger English army.', links: [{ title: 'Battle of Bannockburn', type: 'event', slug: 'battle-of-bannockburn' }] },
    { date: '1328', title: 'Independence recognised', description: 'England acknowledges Bruce as king of a free Scotland.' },
    { date: '1371', title: 'End of the Bruce line', description: 'David II dies childless; the Stewarts succeed.', links: [{ title: 'David II', type: 'person', slug: 'david-ii-of-scotland' }] }
  ],
  relatedEntries: {
    people: [
      { title: 'Robert the Bruce', type: 'person', slug: 'robert-the-bruce', label: 'Founder; won independence' },
      { title: 'David II', type: 'person', slug: 'david-ii-of-scotland', label: 'Last Bruce king' }
    ],
    events: [{ title: 'Battle of Bannockburn', type: 'event', slug: 'battle-of-bannockburn', label: 'Decisive victory, 1314' }],
    locations: [{ title: 'Kingdom of Scotland', type: 'location', slug: 'kingdom-of-scotland', label: 'The realm they ruled' }]
  },
  sources: [
    { title: 'House of Bruce — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Clan_Bruce' },
    { title: 'Robert the Bruce — Encyclopaedia Britannica', author: 'Encyclopaedia Britannica', type: 'encyclopedia', url: 'https://www.britannica.com/biography/Robert-the-Bruce' },
    { title: 'David II — Encyclopaedia Britannica', author: 'Encyclopaedia Britannica', type: 'encyclopedia', url: 'https://www.britannica.com/biography/David-II' }
  ]
}

/* ------------------------------------------------- CAPETIAN ANJOU */
const capetianAnjou = {
  id: 'house-of-anjou-capetian',
  type: 'house',
  name: 'Capetian House of Anjou',
  aliases: ['Capetian Angevins', 'Angevins of Naples', 'Anjou-Sicily', 'House of Anjou-Naples'],
  originYear: 1266,
  endYear: 1442,
  reignSpan: '1266–1442',
  region: 'Naples, Hungary & Poland',
  originPlace: 'Anjou (a Capetian appanage)',
  arms: 'Azure semé-de-lis or, a label gules (France Ancient with a red label) — the Capetian Angevin arms',
  image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Louis%20I%20(Chronicon%20Pictum).jpg?width=1000',
  imageInfo: {
    caption: 'Louis I the Great of Hungary and Poland, the dynasty’s most powerful king, in the Illuminated Chronicle.',
    creator: 'Chronicon Pictum (Illuminated Chronicle)',
    date: 'c. 1360',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Louis_I_(Chronicon_Pictum).jpg',
    note: 'A near-contemporary Hungarian royal-chronicle depiction of the Capetian Angevin king Louis I.'
  },
  summary: 'The Capetian cadet dynasty of Charles of Anjou — distinct from the Plantagenets — that ruled Naples, Hungary, and Poland.',
  overview: 'The Capetian House of Anjou descended from Charles of Anjou, brother of King Louis IX of France, who conquered the Kingdom of Naples and Sicily in 1266. A separate line from the earlier Angevin Plantagenets, the dynasty later gained the crowns of Hungary and, under Louis I the Great, Poland as well.',
  founder: { displayName: 'Charles I of Anjou', note: 'Brother of Louis IX; conquered Naples and Sicily in 1266 (no Codex article yet)' },
  seats: [{ name: 'Kingdom of Poland', type: 'location', slug: 'kingdom-of-poland' }],
  notableMembers: [
    P('louis-i-of-hungary', 'Louis I the Great', 'King of Hungary and Poland at the dynasty’s height'),
    P('jadwiga-of-poland', 'Jadwiga', 'Queen of Poland; her marriage to Jogaila founded the Jagiellonian union')
  ],
  familyTree: {
    caption: 'The Capetian Angevins, descended from Charles of Anjou (brother of Louis IX) — a Capetian cadet line entirely distinct from the Angevin Plantagenets. The Naples and Hungarian branches are compressed here to the kings held in the Codex.',
    root: {
      name: 'Charles I of Anjou', note: 'brother of Louis IX; King of Naples & Sicily, d. 1285',
      children: [{
        name: 'Angevin kings of Naples', note: 'Charles II and his descendants',
        children: [{
          name: 'Charles I of Hungary', note: 'Charles Robert; won the Hungarian crown, r. 1308–1342',
          children: [{
            name: 'Louis I the Great', personSlug: 'louis-i-of-hungary', note: 'King of Hungary & Poland, r. 1342–1382',
            children: [{ name: 'Jadwiga', personSlug: 'jadwiga-of-poland', note: 'Queen of Poland, r. 1384–1399', branch: '→ union with the House of Gediminas' }]
          }]
        }]
      }]
    }
  },
  contentSections: [
    { title: 'Origins', paragraphs: [
      'The dynasty began with Charles of Anjou, a younger brother of the French king Louis IX, who was granted the county of Anjou as a Capetian appanage. Invited by the papacy to destroy the Hohenstaufen, Charles conquered the Kingdom of Naples and Sicily, defeating Manfred at Benevento in 1266 and the boy Conradin in 1268.',
      'This made the Capetian Angevins a great Mediterranean power — a line entirely separate from the earlier Angevins of the House of Plantagenet, despite the shared name of Anjou.'
    ]},
    { title: 'Naples and the loss of Sicily', paragraphs: [
      'Charles’s harsh rule provoked the Sicilian Vespers of 1282, a rebellion that drove the Angevins out of the island of Sicily and handed it to the Crown of Aragon, though they kept the mainland Kingdom of Naples. From Naples the dynasty pursued ambitions across Italy, the Balkans, and central Europe.',
      'Its branches married into the ruling houses of Hungary and elsewhere, spreading Capetian Angevin power far beyond Italy.'
    ]},
    { title: 'Hungary and Poland', paragraphs: [
      'When the Árpád dynasty of Hungary died out in 1301, an Angevin claimant, Charles Robert, eventually secured the Hungarian throne. His son Louis I the Great ruled Hungary powerfully for forty years and, by inheritance from his uncle, also became king of Poland in 1370.',
      'Under Louis I the Capetian Angevins were among the most powerful rulers in Europe, holding Hungary, Poland, and claims stretching to Naples.'
    ]},
    { title: 'End of the line and legacy', paragraphs: [
      'Louis I left no son. His daughter Mary took Hungary and his daughter Jadwiga was crowned "king" of Poland; Jadwiga’s marriage in 1386 to the Lithuanian grand duke Jogaila founded the Jagiellonian dynasty and united Poland with Lithuania. The Neapolitan branch struggled on until the mid-fifteenth century.',
      'The dynasty thus shaped the destiny of three kingdoms, and through Jadwiga it handed the Polish crown to the house that would dominate central Europe for the next two centuries.'
    ]}
  ],
  timeline: [
    { date: '1266', title: 'Charles of Anjou takes Naples', description: 'The Capetian Angevins conquer southern Italy from the Hohenstaufen.' },
    { date: '1282', title: 'The Sicilian Vespers', description: 'A rebellion strips the island of Sicily from the dynasty.' },
    { date: '1342', title: 'Louis I of Hungary', description: 'The dynasty reaches its height in central Europe.', links: [{ title: 'Louis I the Great', type: 'person', slug: 'louis-i-of-hungary' }] },
    { date: '1370', title: 'Louis I gains Poland', description: 'Hungary and Poland are united under one Angevin king.' },
    { date: '1386', title: 'Jadwiga’s marriage', description: 'Her union with Jogaila founds the Jagiellonian dynasty.', links: [{ title: 'Jadwiga', type: 'person', slug: 'jadwiga-of-poland' }] }
  ],
  relatedEntries: {
    people: [
      { title: 'Louis I the Great', type: 'person', slug: 'louis-i-of-hungary', label: 'King of Hungary and Poland' },
      { title: 'Jadwiga', type: 'person', slug: 'jadwiga-of-poland', label: 'Queen of Poland' }
    ],
    locations: [{ title: 'Kingdom of Poland', type: 'location', slug: 'kingdom-of-poland', label: 'A crown they held' }],
    houses: [
      { title: 'House of Capet', type: 'house', slug: 'house-of-capet', label: 'The senior Capetian line' },
      { title: 'House of Gediminas', type: 'house', slug: 'house-of-gediminas', label: 'Jadwiga’s marriage founded its royal line' }
    ]
  },
  sources: [
    { title: 'Capetian House of Anjou — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Capetian_House_of_Anjou' },
    { title: 'Charles I (of Anjou) — Encyclopaedia Britannica', author: 'Encyclopaedia Britannica', type: 'encyclopedia', url: 'https://www.britannica.com/biography/Charles-I-king-of-Naples-and-Sicily' },
    { title: 'Louis I — Encyclopaedia Britannica', author: 'Encyclopaedia Britannica', type: 'encyclopedia', url: 'https://www.britannica.com/biography/Louis-I-king-of-Hungary-and-Poland' }
  ]
}

if (!Array.isArray(data.houses)) data.houses = []
for (const house of [lancaster, bruce, capetianAnjou]) {
  const i = data.houses.findIndex((h) => h.id === house.id)
  if (i >= 0) data.houses[i] = house
  else data.houses.push(house)
}

writeFileSync(dataPath, JSON.stringify(data, null, 2))
console.log(`Batch G written. houses now (${data.houses.length}): ${data.houses.map((h) => h.id).join(', ')}`)
