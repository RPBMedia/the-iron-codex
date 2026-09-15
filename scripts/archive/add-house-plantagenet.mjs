import { readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const dataPath = join(__dirname, '..', 'server', 'data', 'history.json')
const data = JSON.parse(readFileSync(dataPath, 'utf8'))

const IMG_EFFIGY =
  'https://commons.wikimedia.org/wiki/Special:FilePath/Church%20of%20Fontevraud%20Abbey%20Henry%20II%20effigy.jpg?width=1000'
const IMG_ARMS =
  'https://commons.wikimedia.org/wiki/Special:FilePath/Coa%20England%20Country%20History%20Anjou-Plantagen%C3%AAt%20(1198-1340).svg'

const plantagenet = {
  id: 'house-of-plantagenet',
  type: 'house',
  name: 'House of Plantagenet',
  aliases: ['Plantagenet', 'Angevins', 'Angevin dynasty', 'House of Anjou'],
  originYear: 1154,
  endYear: 1485,
  reignSpan: '1154–1485',
  region: 'England & western France',
  originPlace: 'Anjou',
  arms: 'Gules, three lions passant guardant or',
  image: IMG_EFFIGY,
  imageInfo: {
    caption:
      'Tomb effigy of Henry II at Fontevraud Abbey, the first Angevin king of England and founder of the Plantagenet royal line.',
    creator: 'Photograph of the polychrome tomb effigy (late 12th / early 13th century)',
    date: 'Effigy c. 1200; photograph modern',
    source: 'Wikimedia Commons',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:Church_of_Fontevraud_Abbey_Henry_II_effigy.jpg',
    note: 'The effigy is a near-contemporary funerary image, not a portrait from life; Henry II was buried at Fontevraud in 1189.'
  },
  summary:
    'The Angevin royal house that held the English crown from Henry II in 1154 to Richard III in 1485 — the longest-reigning dynasty in English history.',
  overview:
    'The House of Plantagenet ruled England for over three centuries, from Henry II in 1154 to the death of Richard III at Bosworth in 1485. Its kings built and then lost a cross-Channel empire, clashed repeatedly with barons, church, and the French crown, and presided over the making of Magna Carta, the English Parliament, and the common law.',
  founder: {
    personSlug: 'henry-ii-of-england',
    displayName: 'Henry II',
    note: 'First Angevin king of England, crowned 1154'
  },
  seats: [
    { name: 'Kingdom of England', type: 'location', slug: 'kingdom-of-england' },
    { name: 'Duchy of Normandy', type: 'location', slug: 'duchy-of-normandy' },
    { name: 'Aquitaine', type: 'location', slug: 'aquitaine' }
  ],
  notableMembers: [
    { personSlug: 'henry-ii-of-england', displayName: 'Henry II', note: 'Founder; built the Angevin empire and reformed English law' },
    { personSlug: 'richard-the-lionheart', displayName: 'Richard the Lionheart', note: 'Crusader king who spent most of his reign abroad' },
    { personSlug: 'john-of-england', displayName: 'John', note: 'Lost Normandy and sealed Magna Carta in 1215' },
    { personSlug: 'henry-iii-of-england', displayName: 'Henry III', note: 'Long reign tested by Simon de Montfort and the Barons’ War' },
    { personSlug: 'edward-i-of-england', displayName: 'Edward I', note: 'Conqueror of Wales and hammer of the Scots' },
    { personSlug: 'edward-iii-of-england', displayName: 'Edward III', note: 'Claimed the French crown, opening the Hundred Years’ War' },
    { personSlug: 'richard-ii-of-england', displayName: 'Richard II', note: 'Deposed in 1399, ending the senior Plantagenet line' },
    { personSlug: 'henry-v-of-england', displayName: 'Henry V', note: 'Lancastrian king; victor of Agincourt' }
  ],
  cadetBranches: [
    {
      name: 'House of Lancaster',
      note: 'Descended from John of Gaunt, Edward III’s third surviving son; held the crown as Henry IV, Henry V, and Henry VI.'
    },
    {
      name: 'House of York',
      note: 'Descended from Edmund of Langley, Duke of York; held the crown as Edward IV and Richard III during the Wars of the Roses.'
    }
  ],
  familyTree: {
    caption:
      'The royal line of descent, from Geoffrey of Anjou and Empress Matilda through the reigning kings to the Lancastrian and Yorkist branches. Spouses are shown beside each ruler; ⚭ marks a marriage.',
    root: {
      name: 'Geoffrey of Anjou',
      note: 'Count of Anjou (d. 1151)',
      spouse: { name: 'Empress Matilda', personSlug: 'empress-matilda', note: 'Heir of Henry I' },
      children: [
        {
          name: 'Henry II',
          personSlug: 'henry-ii-of-england',
          note: 'r. 1154–1189',
          spouse: { name: 'Eleanor of Aquitaine', personSlug: 'eleanor-of-aquitaine' },
          children: [
            {
              name: 'Richard the Lionheart',
              personSlug: 'richard-the-lionheart',
              note: 'r. 1189–1199',
              spouse: { name: 'Berengaria of Navarre' },
              branch: 'No surviving issue'
            },
            {
              name: 'John',
              personSlug: 'john-of-england',
              note: 'r. 1199–1216',
              spouse: { name: 'Isabella of Angoulême' },
              children: [
                {
                  name: 'Henry III',
                  personSlug: 'henry-iii-of-england',
                  note: 'r. 1216–1272',
                  spouse: { name: 'Eleanor of Provence' },
                  children: [
                    {
                      name: 'Edward I',
                      personSlug: 'edward-i-of-england',
                      note: 'r. 1272–1307',
                      spouse: { name: 'Eleanor of Castile' },
                      children: [
                        {
                          name: 'Edward II',
                          personSlug: 'edward-ii-of-england',
                          note: 'r. 1307–1327',
                          spouse: { name: 'Isabella of France' },
                          children: [
                            {
                              name: 'Edward III',
                              personSlug: 'edward-iii-of-england',
                              note: 'r. 1327–1377',
                              spouse: { name: 'Philippa of Hainault' },
                              children: [
                                {
                                  name: 'Edward the Black Prince',
                                  personSlug: 'edward-the-black-prince',
                                  note: 'd. 1376, never king',
                                  spouse: { name: 'Joan of Kent' },
                                  children: [
                                    {
                                      name: 'Richard II',
                                      personSlug: 'richard-ii-of-england',
                                      note: 'r. 1377–1399, deposed',
                                      spouse: { name: 'Anne of Bohemia' }
                                    }
                                  ]
                                },
                                {
                                  name: 'John of Gaunt',
                                  note: 'Duke of Lancaster',
                                  spouse: { name: 'Blanche of Lancaster' },
                                  branch: 'House of Lancaster',
                                  children: [
                                    {
                                      name: 'Henry IV',
                                      personSlug: 'henry-iv-of-england',
                                      note: 'r. 1399–1413',
                                      spouse: { name: 'Mary de Bohun' },
                                      children: [
                                        {
                                          name: 'Henry V',
                                          personSlug: 'henry-v-of-england',
                                          note: 'r. 1413–1422',
                                          spouse: { name: 'Catherine of Valois' },
                                          children: [
                                            {
                                              name: 'Henry VI',
                                              personSlug: 'henry-vi-of-england',
                                              note: 'r. 1422–1461, 1470–71',
                                              spouse: { name: 'Margaret of Anjou' }
                                            }
                                          ]
                                        }
                                      ]
                                    }
                                  ]
                                },
                                {
                                  name: 'Edmund of Langley',
                                  note: 'Duke of York',
                                  branch: 'House of York',
                                  children: [
                                    {
                                      name: 'Yorkist kings',
                                      note: 'Edward IV & Richard III (to 1485)'
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  },
  contentSections: [
    {
      title: 'Origins',
      paragraphs: [
        'The dynasty took its name from Geoffrey of Anjou, whose byname "Plantagenet" is usually linked to the sprig of broom (Old French plante genêt) he is said to have worn. Geoffrey married Empress Matilda, daughter and designated heir of Henry I of England, in 1128, joining the county of Anjou to the Norman claim on England.',
        'Matilda’s fight for the English throne against Stephen of Blois plunged England into the civil war known as the Anarchy. It ended by compromise: Stephen kept the crown for life but recognised Matilda’s son as heir. That son took the throne in 1154 as Henry II, the first Angevin king and the founder of the Plantagenet line.'
      ]
    },
    {
      title: 'The Angevin empire',
      paragraphs: [
        'Henry II ruled far more than England. Through inheritance he held Normandy, Anjou, Maine, and Touraine, and through his marriage to Eleanor of Aquitaine in 1152 he gained the vast duchy of Aquitaine in south-western France. The resulting collection of lands, stretching from the Scottish border to the Pyrenees, is known to historians as the Angevin empire.',
        'This was never a single unified state but a personal union of territories held on different terms, several of them as fiefs of the king of France. That contradiction — an English king who was also the French king’s most powerful vassal — drove much of the warfare and diplomacy of the next three centuries.'
      ]
    },
    {
      title: 'Kingship, law, and the barons',
      paragraphs: [
        'Henry II rebuilt royal authority after the Anarchy and expanded the reach of royal justice, laying foundations of the English common law through itinerant judges and the use of juries. His quarrel with Archbishop Thomas Becket ended in Becket’s murder in Canterbury Cathedral in 1170, a scandal that echoed across Latin Christendom.',
        'Under his son John the cross-Channel empire collapsed: Philip II of France overran Normandy and Anjou by 1204, and John’s attempt to recover them ended in defeat at the Battle of Bouvines in 1214. Baronial anger at his taxation and arbitrary rule forced him to seal Magna Carta in 1215. Conflict continued under Henry III, whose reign was challenged by Simon de Montfort and a baronial movement that summoned the parliament of 1265.'
      ]
    },
    {
      title: 'The Hundred Years’ War',
      paragraphs: [
        'When the direct Capetian line of France failed in 1328, Edward III pressed a claim to the French throne through his mother, Isabella of France. The dispute, tangled with the old problem of English-held Aquitaine, opened the Hundred Years’ War in 1337.',
        'English armies won famous victories at the Battle of Crécy in 1346 and the Battle of Poitiers in 1356, where Edward’s son the Black Prince captured the French king. A second wave under the Lancastrian Henry V brought the crushing victory at the Battle of Agincourt in 1415 and the Treaty of Troyes in 1420, which recognised Henry as heir to France — a settlement that collapsed within a generation.'
      ]
    },
    {
      title: 'Lancaster, York, and the Wars of the Roses',
      paragraphs: [
        'The dynasty split into rival branches descended from the sons of Edward III. The House of Lancaster, from John of Gaunt, took the throne when Henry IV deposed Richard II in 1399. The House of York, from Edmund of Langley, pressed a competing claim through a senior female line.',
        'From 1455 the two branches fought the dynastic civil wars later called the Wars of the Roses. The crown passed between Lancastrian Henry VI and Yorkist Edward IV before Richard III, the last Plantagenet king, was killed at Bosworth Field in 1485. Henry Tudor took the throne as Henry VII and married Elizabeth of York, uniting the claims and ending Plantagenet rule.'
      ]
    },
    {
      title: 'Legacy',
      paragraphs: [
        'The Plantagenets were England’s longest-reigning royal house, and their three centuries shaped institutions that outlasted them. The common law, the jury, the Exchequer, and above all Parliament — which grew from the great councils and the assemblies summoned under Henry III and Edward I — became permanent features of English government.',
        'The name "Plantagenet" itself was rarely used by the medieval kings; it was revived as a dynastic surname by Richard, Duke of York, in the 15th century and popularised by later historians. Their tombs at Fontevraud, Westminster, and Canterbury, and the enduring three-lion arms of England, remain the most visible traces of the dynasty.'
      ]
    }
  ],
  sectionImages: [
    {
      section: 'The Angevin empire',
      src: IMG_ARMS,
      caption: 'The arms borne by the Plantagenet kings of England from the reign of Richard I: gules, three lions passant guardant or.',
      creator: 'Heraldic rendering (SVG) of the historical royal arms',
      date: 'Arms in use c. 1198–1340',
      source: 'Wikimedia Commons',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Coa_England_Country_History_Anjou-Plantagen%C3%AAt_(1198-1340).svg',
      note: 'Modern vector drawing of the medieval blazon, not a surviving object.'
    }
  ],
  timeline: [
    { date: '1128', title: 'Geoffrey of Anjou marries Empress Matilda', description: 'The union joins Anjou to the Norman claim on England and gives the dynasty its name.' },
    { date: '1154', title: 'Henry II crowned', description: 'The first Angevin king takes the English throne, ending the Anarchy.', links: [{ title: 'Henry II', type: 'person', slug: 'henry-ii-of-england' }] },
    { date: '1189', title: 'Richard the Lionheart succeeds', description: 'Richard I inherits the Angevin lands and departs on the Third Crusade.', links: [{ title: 'Richard the Lionheart', type: 'person', slug: 'richard-the-lionheart' }] },
    { date: '1204', title: 'Normandy lost to France', description: 'Philip II conquers Normandy from King John, shrinking the Angevin empire to England and Gascony.' },
    { date: '1215', title: 'Magna Carta sealed', description: 'Baronial pressure forces John to accept limits on royal power.', links: [{ title: 'Magna Carta', type: 'event', slug: 'magna-carta' }] },
    { date: '1265', title: 'Simon de Montfort’s parliament', description: 'A baronial regime under Henry III summons a landmark representative assembly.' },
    { date: '1337', title: 'Hundred Years’ War begins', description: 'Edward III claims the French crown, opening the long Anglo-French conflict.', links: [{ title: "Hundred Years' War", type: 'event', slug: 'hundred-years-war' }] },
    { date: '1346', title: 'Victory at Crécy', description: 'English longbowmen destroy a larger French army in a defining battle of the war.', links: [{ title: 'Battle of Crécy', type: 'event', slug: 'battle-of-crecy' }] },
    { date: '1415', title: 'Victory at Agincourt', description: 'Henry V wins a celebrated victory that revives the English claim in France.', links: [{ title: 'Battle of Agincourt', type: 'event', slug: 'battle-of-agincourt' }] },
    { date: '1455', title: 'Wars of the Roses begin', description: 'The Lancastrian and Yorkist branches of the dynasty go to war for the crown.' },
    { date: '1485', title: 'Death of Richard III at Bosworth', description: 'The last Plantagenet king falls; Henry Tudor takes the throne as Henry VII.' }
  ],
  relatedEntries: {
    people: [
      { title: 'Henry II', type: 'person', slug: 'henry-ii-of-england', label: 'Founder of the dynasty' },
      { title: 'Richard the Lionheart', type: 'person', slug: 'richard-the-lionheart', label: 'Crusader king' },
      { title: 'John', type: 'person', slug: 'john-of-england', label: 'Lost Normandy; sealed Magna Carta' },
      { title: 'Edward III', type: 'person', slug: 'edward-iii-of-england', label: 'Opened the Hundred Years’ War' },
      { title: 'Henry V', type: 'person', slug: 'henry-v-of-england', label: 'Victor of Agincourt' },
      { title: 'Eleanor of Aquitaine', type: 'person', slug: 'eleanor-of-aquitaine', label: 'Brought Aquitaine to the dynasty' }
    ],
    events: [
      { title: 'Magna Carta', type: 'event', slug: 'magna-carta', label: 'Sealed under King John, 1215' },
      { title: 'Battle of Bouvines', type: 'event', slug: 'battle-of-bouvines', label: 'John’s bid to recover Normandy fails' },
      { title: 'Battle of Crécy', type: 'event', slug: 'battle-of-crecy', label: 'Edward III’s great victory' },
      { title: 'Battle of Agincourt', type: 'event', slug: 'battle-of-agincourt', label: 'Henry V’s victory' },
      { title: "Hundred Years' War", type: 'event', slug: 'hundred-years-war', label: 'Defining Plantagenet conflict' }
    ],
    locations: [
      { title: 'Kingdom of England', type: 'location', slug: 'kingdom-of-england', label: 'Primary realm' },
      { title: 'Aquitaine', type: 'location', slug: 'aquitaine', label: 'Southern French inheritance' },
      { title: 'Duchy of Normandy', type: 'location', slug: 'duchy-of-normandy', label: 'Continental heartland, lost in 1204' }
    ]
  },
  sources: [
    { title: 'House of Plantagenet — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/House_of_Plantagenet' },
    { title: 'Angevin Empire — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Angevin_Empire' },
    { title: 'Plantagenet, House of — Encyclopaedia Britannica', author: 'Encyclopaedia Britannica', type: 'encyclopedia', url: 'https://www.britannica.com/topic/House-of-Plantagenet' },
    { title: 'Fontevraud Abbey — royal necropolis of the Plantagenets', author: 'Centre des monuments nationaux', type: 'museum/heritage', url: 'https://www.fontevraud.fr/en/' }
  ]
}

if (!Array.isArray(data.houses)) data.houses = []
const existing = data.houses.findIndex((h) => h.id === plantagenet.id)
if (existing >= 0) data.houses[existing] = plantagenet
else data.houses.push(plantagenet)

writeFileSync(dataPath, JSON.stringify(data, null, 2))
console.log(`Wrote house-of-plantagenet. houses now: ${data.houses.length}. Top-level: ${Object.keys(data).join(', ')}`)
