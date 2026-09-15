import { readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const dataPath = join(__dirname, '..', 'server', 'data', 'history.json')
const data = JSON.parse(readFileSync(dataPath, 'utf8'))

const wessex = {
  id: 'house-of-wessex',
  type: 'house',
  name: 'House of Wessex',
  aliases: ['Cerdicings', 'Cerdicing dynasty', 'West Saxon dynasty', 'House of Cerdic'],
  originYear: 802,
  endYear: 1066,
  reignSpan: '802–1066',
  region: 'England (Wessex)',
  originPlace: 'Wessex',
  arms: 'Attributed: azure, a wyvern or — the golden dragon of Wessex',
  image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Athelstan.jpg?width=1000',
  imageInfo: {
    caption: 'King Æthelstan presenting a gospel book to St Cuthbert, from a manuscript of c. 934 — the earliest surviving portrait of an English king.',
    creator: 'Anglo-Saxon manuscript illumination (Corpus Christi College, Cambridge, MS 183)',
    date: 'c. 934',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Athelstan.jpg',
    note: 'A near-contemporary image of Æthelstan, first king of all England and grandson of Alfred the Great; the dynasty had no single heraldic portrait.'
  },
  summary: 'The West Saxon royal line that resisted the Vikings under Alfred the Great and united the English kingdoms into a single realm of England.',
  overview: 'The House of Wessex, or Cerdicings, grew from a southern English kingdom into the ruling dynasty of a united England. Under Alfred the Great it survived the Viking onslaught; under his son and grandsons — Edward the Elder, Æthelstan, Edmund, and Edgar — it forged and governed the Kingdom of England, before the line was overwhelmed by Danish and Norman conquest in the eleventh century.',
  founder: {
    personSlug: 'egbert-of-wessex',
    displayName: 'Egbert of Wessex',
    note: 'Secured West Saxon supremacy over the other English kingdoms in the 820s'
  },
  seats: [
    { name: 'Kingdom of Wessex', type: 'location', slug: 'kingdom-of-wessex' },
    { name: 'Kingdom of England', type: 'location', slug: 'kingdom-of-england' }
  ],
  notableMembers: [
    { personSlug: 'egbert-of-wessex', displayName: 'Egbert', note: 'Won overlordship of the southern English kingdoms' },
    { personSlug: 'alfred-the-great', displayName: 'Alfred the Great', note: 'Defended Wessex against the Danes and reformed law and learning' },
    { personSlug: 'edward-the-elder', displayName: 'Edward the Elder', note: 'Reconquered the Danelaw with his sister Æthelflæd' },
    { personSlug: 'aethelstan', displayName: 'Æthelstan', note: 'First king of all England; victor of Brunanburh' },
    { personSlug: 'edmund-i-of-england', displayName: 'Edmund I', note: 'Recovered the northern Danelaw' },
    { personSlug: 'edgar-the-peaceful', displayName: 'Edgar the Peaceful', note: 'Presided over a consolidated, monastically reformed kingdom' },
    { personSlug: 'aethelred-the-unready', displayName: 'Æthelred the Unready', note: 'His reign collapsed under renewed Viking invasion' },
    { personSlug: 'edmund-ironside', displayName: 'Edmund Ironside', note: 'Fought Cnut for the throne in 1016' },
    { personSlug: 'edward-the-confessor', displayName: 'Edward the Confessor', note: 'Last strong king of the old line; died childless in 1066' }
  ],
  familyTree: {
    caption: 'The West Saxon royal line from Egbert through Alfred the Great to Edward the Confessor. Danish kings (Sweyn, Cnut) interrupted the line 1013–1042 and are not shown; ⚭ marks a marriage.',
    root: {
      name: 'Egbert',
      personSlug: 'egbert-of-wessex',
      note: 'r. 802–839',
      children: [
        {
          name: 'Æthelwulf',
          note: 'King of Wessex, r. 839–858',
          children: [
            { name: 'Æthelred I', personSlug: 'aethelred-i-of-wessex', note: 'r. 865–871', branch: 'Died fighting the Danes' },
            {
              name: 'Alfred the Great',
              personSlug: 'alfred-the-great',
              note: 'r. 871–899',
              spouse: { name: 'Ealhswith' },
              children: [
                {
                  name: 'Edward the Elder',
                  personSlug: 'edward-the-elder',
                  note: 'r. 899–924',
                  spouse: { name: 'Eadgifu of Kent' },
                  children: [
                    { name: 'Æthelstan', personSlug: 'aethelstan', note: 'r. 924–939, unmarried' },
                    {
                      name: 'Edmund I',
                      personSlug: 'edmund-i-of-england',
                      note: 'r. 939–946',
                      children: [
                        { name: 'Eadwig', personSlug: 'eadwig-of-england', note: 'r. 955–959' },
                        {
                          name: 'Edgar the Peaceful',
                          personSlug: 'edgar-the-peaceful',
                          note: 'r. 959–975',
                          children: [
                            { name: 'Edward the Martyr', personSlug: 'edward-the-martyr', note: 'r. 975–978, murdered' },
                            {
                              name: 'Æthelred the Unready',
                              personSlug: 'aethelred-the-unready',
                              note: 'r. 978–1016',
                              spouse: { name: 'Emma of Normandy' },
                              children: [
                                {
                                  name: 'Edmund Ironside',
                                  personSlug: 'edmund-ironside',
                                  note: 'r. 1016',
                                  children: [
                                    {
                                      name: 'Edward the Exile',
                                      note: 'd. 1057',
                                      children: [
                                        { name: 'Edgar Ætheling', note: 'uncrowned claimant, 1066' },
                                        { name: 'St Margaret', note: 'Queen of Scots; ancestress of later kings' }
                                      ]
                                    }
                                  ]
                                },
                                { name: 'Edward the Confessor', personSlug: 'edward-the-confessor', note: 'r. 1042–1066, no issue', spouse: { name: 'Edith of Wessex' } }
                              ]
                            }
                          ]
                        }
                      ]
                    },
                    { name: 'Eadred', personSlug: 'eadred-of-england', note: 'r. 946–955, childless' }
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
        'The dynasty traced itself to Cerdic, the semi-legendary founder of Wessex around 500, though that early descent is chronicle tradition rather than secure history. Its firm rise begins with Egbert, who by the 820s had made Wessex the strongest of the southern English kingdoms and briefly won recognition as overlord of Mercia and Northumbria.',
        'Wessex was one of several Anglo-Saxon kingdoms competing for dominance. What set the West Saxon house apart was not early supremacy but survival: when the Viking "Great Heathen Army" destroyed the other English royal lines in the 860s and 870s, Wessex alone endured to become the nucleus of a united kingdom.'
      ]
    },
    {
      title: 'Alfred and the Viking wars',
      paragraphs: [
        'Alfred the Great came to the throne in 871 as the Danes overran England. Driven into the Somerset marshes at Athelney, he rebuilt his forces and defeated the Danish leader Guthrum at the Battle of Edington in 878, securing a treaty that partitioned England along the Danelaw. He fortified a network of burhs, reorganised the army, issued a law code, and revived learning by translating Latin works into English.',
        'Alfred styled himself king of the Anglo-Saxons rather than merely of Wessex, a deliberate claim to lead all the English not under Danish rule. That programme of defence, administration, and ideology gave his successors the platform to go on the offensive.'
      ]
    },
    {
      title: 'Kings of the English',
      paragraphs: [
        'Alfred’s son Edward the Elder, with his sister Æthelflæd of Mercia, reconquered the southern Danelaw. Edward’s son Æthelstan completed the work: he took York in 927, becoming the first king to rule all England, and crushed a combined Scottish, Norse, and Strathclyde army at the Battle of Brunanburh in 937.',
        'Under Edmund I, Eadred, and above all Edgar the Peaceful, the kingdom was consolidated. Edgar’s reign saw a sweeping monastic reform led by Dunstan, Æthelwold, and Oswald, a reformed coinage, and a famous crowning at Bath in 973 that presented him as emperor of Britain.'
      ]
    },
    {
      title: 'Danish conquest and restoration',
      paragraphs: [
        'The murder of Edward the Martyr in 978 brought the young Æthelred the Unready to the throne. Renewed Viking raids, heavy Danegeld payments, and the massacre of St Brice’s Day in 1002 provoked full-scale invasion by Sweyn Forkbeard and then his son Cnut. After Æthelred’s death and the hard-fought reign of Edmund Ironside in 1016, the West Saxon line was displaced by the Danish kings.',
        'The house was restored in 1042 when Edward the Confessor, Æthelred’s son, returned from exile in Normandy. Pious and increasingly detached from government, Edward left no heir, and his death in January 1066 opened the succession crisis that ended the dynasty.'
      ]
    },
    {
      title: 'The end of the line and legacy',
      paragraphs: [
        'Edward the Confessor’s death triggered a three-way contest between Harold Godwinson, Harald Hardrada of Norway, and Duke William of Normandy. Harold defeated the Norwegians at the Battle of Stamford Bridge but fell weeks later at the Battle of Hastings, and the Norman Conquest ended West Saxon rule. The last male claimant of the old line, Edgar Ætheling, was never securely crowned.',
        'Yet the dynasty’s achievement outlasted it. The united Kingdom of England, its shires and hundreds, its coinage and law, and its very idea of a single English realm were West Saxon creations that the Norman and later kings inherited. Through Edmund Ironside’s granddaughter St Margaret of Scotland, the blood of the house also flowed back into the later English royal succession.'
      ]
    }
  ],
  timeline: [
    { date: '802', title: 'Egbert becomes king of Wessex', description: 'The reign that would raise Wessex above its rivals begins.', links: [{ title: 'Egbert', type: 'person', slug: 'egbert-of-wessex' }] },
    { date: '871', title: 'Alfred the Great accedes', description: 'Alfred takes the throne amid the Viking Great Heathen Army’s onslaught.', links: [{ title: 'Alfred the Great', type: 'person', slug: 'alfred-the-great' }] },
    { date: '878', title: 'Victory at Edington', description: 'Alfred defeats Guthrum and secures the survival of Wessex.', links: [{ title: 'Battle of Edington', type: 'event', slug: 'battle-of-edington' }] },
    { date: '927', title: 'Æthelstan unites England', description: 'Æthelstan takes York and becomes the first king of all England.', links: [{ title: 'Æthelstan', type: 'person', slug: 'aethelstan' }] },
    { date: '937', title: 'Battle of Brunanburh', description: 'Æthelstan defeats a Norse-Scottish-Strathclyde coalition.', links: [{ title: 'Battle of Brunanburh', type: 'event', slug: 'battle-of-brunanburh' }] },
    { date: '973', title: 'Edgar crowned at Bath', description: 'A grand imperial coronation marks the height of the united kingdom.', links: [{ title: 'Edgar the Peaceful', type: 'person', slug: 'edgar-the-peaceful' }] },
    { date: '1016', title: 'Danish conquest', description: 'After Edmund Ironside’s death, Cnut takes the English throne.', links: [{ title: 'Edmund Ironside', type: 'person', slug: 'edmund-ironside' }] },
    { date: '1042', title: 'Edward the Confessor restored', description: 'The West Saxon line returns from Norman exile.', links: [{ title: 'Edward the Confessor', type: 'person', slug: 'edward-the-confessor' }] },
    { date: '1066', title: 'Norman Conquest ends the dynasty', description: 'Harold’s defeat at Hastings ends West Saxon rule of England.', links: [{ title: 'Norman Conquest', type: 'event', slug: 'norman-conquest' }] }
  ],
  relatedEntries: {
    people: [
      { title: 'Alfred the Great', type: 'person', slug: 'alfred-the-great', label: 'Defender of Wessex' },
      { title: 'Æthelstan', type: 'person', slug: 'aethelstan', label: 'First king of all England' },
      { title: 'Edward the Elder', type: 'person', slug: 'edward-the-elder', label: 'Reconquered the Danelaw' },
      { title: 'Edward the Confessor', type: 'person', slug: 'edward-the-confessor', label: 'Last king of the old line' }
    ],
    events: [
      { title: 'Battle of Edington', type: 'event', slug: 'battle-of-edington', label: 'Alfred’s decisive victory, 878' },
      { title: 'Battle of Brunanburh', type: 'event', slug: 'battle-of-brunanburh', label: 'Æthelstan secures England, 937' },
      { title: 'Norman Conquest', type: 'event', slug: 'norman-conquest', label: 'Ended the dynasty in 1066' }
    ],
    locations: [
      { title: 'Kingdom of Wessex', type: 'location', slug: 'kingdom-of-wessex', label: 'Ancestral realm' },
      { title: 'Kingdom of England', type: 'location', slug: 'kingdom-of-england', label: 'The realm the house created' }
    ]
  },
  sources: [
    { title: 'House of Wessex — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/House_of_Wessex' },
    { title: 'Anglo-Saxons — Encyclopaedia Britannica', author: 'Encyclopaedia Britannica', type: 'encyclopedia', url: 'https://www.britannica.com/topic/Anglo-Saxon' },
    { title: 'Kings and Queens of England — Alfred to Edward the Confessor (Royal Household)', author: 'The Royal Household', type: 'reference', url: 'https://www.royal.uk/kings-and-queens-anglo-saxons' }
  ]
}

const normandy = {
  id: 'house-of-normandy',
  type: 'house',
  name: 'House of Normandy',
  aliases: ['Norman dynasty', 'House of Rollo', 'Normans'],
  originYear: 1066,
  endYear: 1154,
  reignSpan: '1066–1154',
  region: 'England & Normandy',
  originPlace: 'Normandy',
  arms: 'Gules, two lions passant guardant or — the arms attributed to the dukes of Normandy',
  image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Statue%20of%20William%20the%20Conquerer.jpg?width=1000',
  imageInfo: {
    caption: 'Statue of William the Conqueror at Falaise, his birthplace, surrounded by the dukes of Normandy.',
    creator: 'Louis Rochet (19th-century equestrian monument)',
    date: '1851',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Statue_of_William_the_Conquerer.jpg',
    note: 'A 19th-century monument, not a contemporary likeness; it commemorates the dynasty’s founder in the town where he was born.'
  },
  summary: 'The dynasty of Rollo’s heirs that conquered England in 1066 and ruled a cross-Channel Anglo-Norman realm until the civil war known as the Anarchy.',
  overview: 'The House of Normandy descended from the Viking leader Rollo, who was granted the lands around the lower Seine in 911. Its dukes turned that grant into a formidable principality, and in 1066 Duke William II conquered England. For nearly a century the Norman kings ruled England and Normandy together, until the disputed succession after Henry I plunged the realm into the Anarchy.',
  founder: {
    personSlug: 'william-the-conqueror',
    displayName: 'William the Conqueror',
    note: 'Duke of Normandy; conquered England in 1066'
  },
  seats: [
    { name: 'Duchy of Normandy', type: 'location', slug: 'duchy-of-normandy' },
    { name: 'Kingdom of England', type: 'location', slug: 'kingdom-of-england' }
  ],
  notableMembers: [
    { personSlug: 'william-the-conqueror', displayName: 'William the Conqueror', note: 'Founder; won England at Hastings in 1066' },
    { personSlug: 'william-ii-of-england', displayName: 'William II Rufus', note: 'Second Norman king; died in the New Forest in 1100' },
    { personSlug: 'henry-i-of-england', displayName: 'Henry I', note: 'Reunited England and Normandy; reformed royal administration' },
    { personSlug: 'stephen-of-england', displayName: 'Stephen', note: 'Last Norman-line king; his reign was the civil war of the Anarchy' }
  ],
  cadetBranches: [
    { name: 'House of Blois', note: 'Stephen came from the counts of Blois through his father, but claimed England through his mother Adela, daughter of William I.' }
  ],
  familyTree: {
    caption: 'The Norman kings of England from William the Conqueror to the disputed succession that passed the crown, through Empress Matilda, to the House of Plantagenet. Rollo and the earlier dukes are described in the text; ⚭ marks a marriage.',
    root: {
      name: 'William the Conqueror',
      personSlug: 'william-the-conqueror',
      note: 'Duke of Normandy; r. England 1066–1087',
      spouse: { name: 'Matilda of Flanders' },
      children: [
        { name: 'Robert Curthose', note: 'Duke of Normandy, d. 1134' },
        { name: 'William II Rufus', personSlug: 'william-ii-of-england', note: 'r. 1087–1100, no issue' },
        {
          name: 'Henry I',
          personSlug: 'henry-i-of-england',
          note: 'r. 1100–1135',
          spouse: { name: 'Matilda of Scotland' },
          children: [
            { name: 'William Adelin', note: 'Heir; drowned in the White Ship, 1120' },
            {
              name: 'Empress Matilda',
              personSlug: 'empress-matilda',
              note: 'Designated heir',
              spouse: { name: 'Geoffrey of Anjou' },
              branch: '→ House of Plantagenet'
            }
          ]
        },
        {
          name: 'Adela of Normandy',
          note: 'Daughter of William I',
          spouse: { name: 'Stephen, Count of Blois' },
          children: [
            { name: 'Stephen', personSlug: 'stephen-of-england', note: 'r. 1135–1154', spouse: { name: 'Matilda of Boulogne' }, branch: 'House of Blois' }
          ]
        }
      ]
    }
  },
  contentSections: [
    {
      title: 'Origins',
      paragraphs: [
        'The dynasty began with Rollo, a Viking leader who, by the treaty traditionally dated to 911 at Saint-Clair-sur-Epte, received the lands around Rouen from the West Frankish king Charles the Simple in exchange for defending the Seine and accepting baptism. His descendants — William Longsword, Richard I, and Richard II — expanded and consolidated the territory that became the Duchy of Normandy.',
        'Within a few generations the Northmen had become Normans: French-speaking, Christian, and organised around a powerful duke, castles, and a martial aristocracy. That combination of Scandinavian aggression and Frankish institutions made Normandy one of the most effective principalities in eleventh-century Europe.'
      ]
    },
    {
      title: 'The conquest of England',
      paragraphs: [
        'William, an illegitimate son of Duke Robert I, survived a violent minority to master Normandy. When Edward the Confessor died childless in 1066, William claimed the English throne against Harold Godwinson. He crossed the Channel, and at the Battle of Hastings on 14 October 1066 Harold was killed and the English army destroyed.',
        'The Norman Conquest replaced the English ruling class with a Norman aristocracy, introduced a network of castles, and produced the Domesday survey of 1086. William held England and Normandy together, ruling a cross-Channel realm whose politics would shape both countries for centuries.'
      ]
    },
    {
      title: 'The Norman kings',
      paragraphs: [
        'William was succeeded in England by his son William II Rufus, a forceful and irreligious king killed by an arrow in the New Forest in 1100. His younger brother Henry I seized the throne, defeated their eldest brother Robert Curthose at Tinchebrai in 1106, and reunited England and Normandy.',
        'Henry I was a formidable administrator who developed the Exchequer and royal justice. But the drowning of his only legitimate son, William Adelin, in the wreck of the White Ship in 1120 left him without a male heir and set the stage for a succession crisis.'
      ]
    },
    {
      title: 'The Anarchy and the end of the line',
      paragraphs: [
        'Henry I named his daughter, the Empress Matilda, as his heir and had his barons swear to accept her. On his death in 1135 his nephew Stephen of Blois seized the crown instead, and the rival claims plunged England into nearly two decades of civil war known as the Anarchy.',
        'Neither side could win outright. The Treaty of Wallingford in 1153 recognised Stephen as king for life but made Matilda’s son, Henry of Anjou, his heir. When Stephen died in 1154, the throne passed to Henry II, and with him the House of Plantagenet, closing the Norman royal line in England.'
      ]
    },
    {
      title: 'Legacy',
      paragraphs: [
        'The Norman dynasty bound England to continental Europe and remade its ruling culture. It imposed a French-speaking aristocracy and a feudal tenurial system, covered the country in motte-and-bailey and stone castles, rebuilt cathedrals and abbeys in the Romanesque style, and left the Domesday Book as an unrivalled record of the conquered land.',
        'The Anglo-Norman realm the dynasty created — an English kingdom whose kings were also great French princes — outlived the house itself and defined the political geography that the Plantagenets inherited, including the long entanglement with France that would culminate in the Hundred Years’ War.'
      ]
    }
  ],
  timeline: [
    { date: '911', title: 'Rollo granted Normandy', description: 'The treaty of Saint-Clair-sur-Epte gives Rollo the lands around Rouen.' },
    { date: '1035', title: 'William becomes duke', description: 'The young William inherits Normandy and survives a turbulent minority.' },
    { date: '1066', title: 'Conquest of England', description: 'William wins the throne at Hastings and is crowned on Christmas Day.', links: [{ title: 'Battle of Hastings', type: 'event', slug: 'battle-of-hastings' }, { title: 'Norman Conquest', type: 'event', slug: 'norman-conquest' }] },
    { date: '1087', title: 'William II Rufus', description: 'William’s son succeeds him as king of England.', links: [{ title: 'William II Rufus', type: 'person', slug: 'william-ii-of-england' }] },
    { date: '1100', title: 'Henry I seizes the throne', description: 'Henry takes the crown after Rufus dies in the New Forest.', links: [{ title: 'Henry I', type: 'person', slug: 'henry-i-of-england' }] },
    { date: '1120', title: 'The White Ship disaster', description: 'Henry’s heir William Adelin drowns, triggering a succession crisis.' },
    { date: '1135', title: 'The Anarchy begins', description: 'Stephen seizes the throne against the Empress Matilda’s claim.', links: [{ title: 'Stephen', type: 'person', slug: 'stephen-of-england' }] },
    { date: '1154', title: 'Plantagenet succession', description: 'Stephen’s death passes the crown to Henry II, ending the Norman line.' }
  ],
  relatedEntries: {
    people: [
      { title: 'William the Conqueror', type: 'person', slug: 'william-the-conqueror', label: 'Founder of the dynasty' },
      { title: 'Henry I', type: 'person', slug: 'henry-i-of-england', label: 'Reunited England and Normandy' },
      { title: 'William II Rufus', type: 'person', slug: 'william-ii-of-england', label: 'Second Norman king' },
      { title: 'Stephen', type: 'person', slug: 'stephen-of-england', label: 'Last of the line; the Anarchy' },
      { title: 'Empress Matilda', type: 'person', slug: 'empress-matilda', label: 'Heir whose son founded the Plantagenets' }
    ],
    events: [
      { title: 'Battle of Hastings', type: 'event', slug: 'battle-of-hastings', label: 'Won the English crown, 1066' },
      { title: 'Norman Conquest', type: 'event', slug: 'norman-conquest', label: 'The dynasty’s defining achievement' },
      { title: 'Battle of Stamford Bridge', type: 'event', slug: 'battle-of-stamford-bridge', label: 'Cleared the way weeks before Hastings' }
    ],
    locations: [
      { title: 'Duchy of Normandy', type: 'location', slug: 'duchy-of-normandy', label: 'Ancestral duchy' },
      { title: 'Kingdom of England', type: 'location', slug: 'kingdom-of-england', label: 'Conquered realm' }
    ]
  },
  sources: [
    { title: 'House of Normandy — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/House_of_Normandy' },
    { title: 'Norman Conquest — Encyclopaedia Britannica', author: 'Encyclopaedia Britannica', type: 'encyclopedia', url: 'https://www.britannica.com/event/Norman-Conquest' },
    { title: 'The Normans (BBC History)', author: 'BBC History', type: 'reference', url: 'https://www.bbc.co.uk/history/british/normans/' }
  ]
}

if (!Array.isArray(data.houses)) data.houses = []
for (const house of [wessex, normandy]) {
  const i = data.houses.findIndex((h) => h.id === house.id)
  if (i >= 0) data.houses[i] = house
  else data.houses.push(house)
}

writeFileSync(dataPath, JSON.stringify(data, null, 2))
console.log(`Batch A written. houses now: ${data.houses.map((h) => h.id).join(', ')}`)
