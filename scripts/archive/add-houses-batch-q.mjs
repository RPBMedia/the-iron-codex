import { readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
const __dirname = dirname(fileURLToPath(import.meta.url))
const dataPath = join(__dirname, '..', 'server', 'data', 'history.json')
const data = JSON.parse(readFileSync(dataPath, 'utf8'))
const P = (slug, displayName, note) => ({ personSlug: slug, displayName, note })
const IMG = (f) => `https://commons.wikimedia.org/wiki/Special:FilePath/${f}?width=1000`
const SWE = () => ({ name: 'Kingdom of Sweden', type: 'location', slug: 'kingdom-of-sweden' })
const SCOT = () => ({ name: 'Kingdom of Scotland', type: 'location', slug: 'kingdom-of-scotland' })

// 1. House of Bonde — the Swedish national kingship of Charles VIII
const bonde = {
  id: 'house-of-bonde', type: 'house', name: 'House of Bonde',
  aliases: ['Bonde family', 'Bonde', 'House of Bonde', 'Bonde dynasty', 'Bondeätten'],
  originYear: 1448, endYear: 1470, reignSpan: '1448–1470 (with interruptions)', region: 'Sweden', originPlace: 'Sweden',
  arms: 'Azure, a boat (galley) or — the golden boat of the Bonde family.',
  image: IMG('Karl%20VIII%20Knutsson%20Bonde,%201408-70,%20konung%20av%20Sverige%20och%20Norge%20-%20Nationalmuseum%20-%2015059.tif'),
  imageInfo: { caption: 'Charles VIII of Sweden (Karl Knutsson Bonde), the Swedish national king, shown with the Bonde arms.', creator: 'Unknown (Nationalmuseum, Stockholm)', date: 'Later portrait (Charles VIII d. 1470)', source: 'Wikimedia Commons', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Karl_VIII_Knutsson_Bonde,_1408-70,_konung_av_Sverige_och_Norge_-_Nationalmuseum_-_15059.tif', note: 'A later painted portrait in a royal series, not a contemporary likeness.' },
  summary: 'The Swedish noble family whose head, Karl Knutsson Bonde, was three times elected King of Sweden as the national candidate against the Kalmar Union.',
  overview: 'The Bonde family were among the leading nobility of late-medieval Sweden. Their most prominent member, Karl Knutsson Bonde, led the party that resisted Danish domination of the Kalmar Union and was elected King of Sweden as Charles VIII — three separate times, between 1448 and 1470, in a running struggle with the Union kings of the House of Oldenburg.',
  founder: P('charles-viii-of-sweden', 'Charles VIII', 'Karl Knutsson Bonde; first Bonde king of Sweden, 1448'),
  seats: [SWE()],
  notableMembers: [
    P('charles-viii-of-sweden', 'Charles VIII', 'Three times King of Sweden and once of Norway; the national anti-Union candidate')
  ],
  familyTree: { caption: 'The Bonde royal kingship rested on a single man, Karl Knutsson, raised from the high nobility to the throne as the Swedish alternative to the Union kings.', root: {
    name: 'The Bonde family', note: 'Swedish high nobility',
    children: [
      { name: 'Charles VIII (Karl Knutsson)', personSlug: 'charles-viii-of-sweden', note: 'King of Sweden 1448–1457, 1464–1465, 1467–1470' }
    ]
  } },
  contentSections: [
    { title: 'Origins', paragraphs: [
      'The Bondes were an established Swedish noble family, and Karl Knutsson rose through the offices of the realm to become Marshal of Sweden and the leading figure of the aristocratic party that resented Danish control of the Kalmar Union. When the Union king Christopher of Bavaria died without an heir in 1448, the Swedish council chose Karl Knutsson as king, in the same season that the Danes chose Christian of Oldenburg — setting the two men against each other for the northern crowns.',
      'His kingship was therefore national and factional from the start: he was the candidate of Swedes who wanted a king of their own rather than a distant Union monarch.'
    ] },
    { title: 'Three reigns', paragraphs: [
      'Charles VIII was crowned King of Sweden in 1448 and briefly King of Norway in 1449, but he could not hold Norway against Christian I, and in 1457 a rebellion led by the archbishop and magnates drove him into exile. Restored in 1464, he was deposed again within a year, and returned a third time in 1467 to reign until his death in 1470.',
      'The repeated depositions reflected how far real power lay with the great nobles and the Church: Charles depended on shifting factions, and when they turned against him the crown slipped away — only for the anti-Danish cause to bring him back.'
    ] },
    { title: 'Legacy', paragraphs: [
      'Charles VIII’s turbulent reigns embodied the long Swedish resistance to the Kalmar Union that would culminate, two generations later, in Gustav Vasa’s final break with Denmark in 1523. He died in 1470, and leadership of the national party passed to the regents of the Sture family who governed Sweden in the decades that followed.',
      'No other Bonde wore the crown, making the house a single-reign royal line — but one that stood for the idea of an independent Swedish kingship at a time when the Union seemed to threaten it.'
    ] }
  ],
  timeline: [
    { date: '1448', title: 'Charles VIII elected king', description: 'The Swedish council chooses Karl Knutsson Bonde over the Union candidate Christian I.', links: [{ title: 'Charles VIII', type: 'person', slug: 'charles-viii-of-sweden' }] },
    { date: '1457', title: 'First deposition', description: 'A revolt of magnates and the archbishop drives Charles into exile.' },
    { date: '1470', title: 'Death of Charles VIII', description: 'After a third reign the last Bonde king dies; the Sture regents take up the national cause.' }
  ],
  relatedEntries: { people: [
    { title: 'Charles VIII', type: 'person', slug: 'charles-viii-of-sweden', label: 'The one Bonde king' }
  ], locations: [SWE()], houses: [
    { title: 'House of Oldenburg', type: 'house', slug: 'house-of-oldenburg', label: 'Christian I’s house, his Union rival' },
    { title: 'House of Wittelsbach', type: 'house', slug: 'house-of-wittelsbach', label: 'Christopher of Bavaria, whose death opened the throne' }
  ] },
  sources: [
    { title: 'Charles VIII — Encyclopaedia Britannica', author: 'Encyclopaedia Britannica', type: 'encyclopedia', url: 'https://www.britannica.com/biography/Charles-VIII-king-of-Sweden' },
    { title: 'Charles VIII of Sweden — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Charles_VIII_of_Sweden' },
    { title: 'Kalmar Union — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Kalmar_Union' }
  ]
}

// 2. House of Dunkeld — the kings of Scots, 1034–1290
const dunkeld = {
  id: 'house-of-dunkeld', type: 'house', name: 'House of Dunkeld',
  aliases: ['House of Dunkeld / Sverre (Norway)', 'House of Dunkeld', 'Dunkeld', 'Dunkeld dynasty', 'Clann Chrìnain', 'MacMalcolm', 'House of Canmore'],
  originYear: 1034, endYear: 1290, reignSpan: '1034–1290', region: 'Scotland', originPlace: 'Dunkeld, Perthshire',
  arms: 'Or, a lion rampant gules within a double tressure flory-counter-flory gules — the royal arms of Scotland, settled under the later Dunkeld kings.',
  image: IMG('David%20I%20and%20Malcolm%20IV.jpg'),
  imageInfo: { caption: 'The Dunkeld kings David I and his grandson Malcolm IV enthroned, in the illuminated initial of the Kelso Abbey charter of 1159.', creator: 'Kelso Abbey scriptorium', date: '1159', source: 'Wikimedia Commons', sourceUrl: 'https://commons.wikimedia.org/wiki/File:David_I_and_Malcolm_IV.jpg', note: 'A contemporary manuscript depiction of two kings of the house, from a charter they granted; the older David is shown as the reforming elder king.' },
  summary: 'The dynasty of Malcolm III and David I that ruled Scotland from 1034 to 1290, feudalised the kingdom, and ended with the death of Margaret, Maid of Norway.',
  overview: 'The House of Dunkeld — descended from Crínán, lay abbot of Dunkeld, and the royal line of Alpin — held the Scottish throne from Duncan I in 1034. Its kings, above all Malcolm III "Canmore" and the great reformer David I, transformed Scotland with Anglo-Norman feudalism, burghs, and monasteries. The line failed in 1290 with the child-queen Margaret, Maid of Norway, plunging Scotland into the succession crisis that led to the Wars of Independence.',
  founder: { displayName: 'Duncan I', note: 'Grandson of Malcolm II of the house of Alpin; first Dunkeld king, killed by Macbeth in 1040 (no Codex article yet)' },
  seats: [SCOT()],
  notableMembers: [
    { displayName: 'Malcolm III "Canmore"', note: 'Avenged his father on Macbeth; married the future St Margaret' },
    { displayName: 'David I', note: 'The great reformer-king who feudalised Scotland and founded many burghs and abbeys' },
    { displayName: 'Alexander III', note: 'His long reign was later remembered as a golden age; died 1286' },
    P('margaret-maid-of-norway', 'Margaret, Maid of Norway', 'Child-queen; the last of the line, d. 1290')
  ],
  familyTree: { caption: 'The Dunkeld kings from Duncan I through the reforming David I to the last of the line, the child-queen Margaret; only Margaret has a Codex article so far.', root: {
    name: 'Duncan I', note: 'first Dunkeld king, d. 1040',
    children: [
      { name: 'Malcolm III "Canmore"', note: 'r. 1058–1093', children: [
        { name: 'David I', note: 'the reformer, r. 1124–1153', branch: 'later kings follow', children: [
          { name: 'Alexander III', note: 'r. 1249–1286', children: [
            { name: 'Margaret, Maid of Norway', personSlug: 'margaret-maid-of-norway', note: 'granddaughter and heir; d. 1290' }
          ] }
        ] }
      ] }
    ]
  } },
  contentSections: [
    { title: 'Origins', paragraphs: [
      'The house took its name from Dunkeld, whose lay abbot Crínán married Bethóc, daughter of Malcolm II of the house of Alpin. Their son became king as Duncan I in 1034, uniting the abbatial and royal lines. Duncan’s reign ended in 1040 when he was killed by Macbeth, and it was Duncan’s son Malcolm III who eventually recovered the throne, killing Macbeth’s stepson in 1058 — the events later dramatised by Shakespeare.',
      'Malcolm III, called Canmore ("great chief"), married the English princess Margaret, later canonised as St Margaret of Scotland, and their marriage began the steady turning of the Scottish court toward English and continental models.'
    ] },
    { title: 'David I and the transformation of Scotland', paragraphs: [
      'The dynasty’s greatest king was David I, a son of Malcolm and Margaret raised at the Anglo-Norman court. As king he remade Scotland: he settled Norman and Flemish knights on Scottish land, granted charters to create royal burghs such as Edinburgh and Berwick, founded great abbeys including Melrose and Kelso, reformed the coinage and the church, and built a royal administration on the English pattern.',
      'His grandson Malcolm IV — shown beside him in the Kelso charter — and then William the Lion continued this Europeanising work; William gave Scotland the red lion rampant that became its royal arms. Under these kings a recognisably medieval Scottish kingdom took shape.'
    ] },
    { title: 'The failure of the line', paragraphs: [
      'The thirteenth century, and especially the long reign of Alexander III, was remembered as a time of peace and prosperity. But Alexander’s children died before him, and when he was killed in a fall from his horse in 1286 his only heir was his infant granddaughter Margaret, daughter of the king of Norway — the Maid of Norway.',
      'The little girl was recognised as queen, but she died in 1290 on the voyage to Scotland, at about seven years old, ending the male and direct line of Dunkeld. Her death left the throne disputed among many claimants, and the arbitration of that "Great Cause" by Edward I of England opened the door to the Wars of Scottish Independence and the rival kingships of Balliol and Bruce.'
    ] }
  ],
  timeline: [
    { date: '1034', title: 'Duncan I becomes king', description: 'The Dunkeld line takes the Scottish throne from the house of Alpin.' },
    { date: '1124', title: 'Accession of David I', description: 'The reformer-king begins the feudal transformation of Scotland.' },
    { date: '1290', title: 'Death of the Maid of Norway', description: 'The child-queen Margaret dies, ending the line and triggering the succession crisis.', links: [{ title: 'Margaret, Maid of Norway', type: 'person', slug: 'margaret-maid-of-norway' }] }
  ],
  relatedEntries: { people: [
    { title: 'Margaret, Maid of Norway', type: 'person', slug: 'margaret-maid-of-norway', label: 'The last of the line' }
  ], locations: [SCOT()], houses: [
    { title: 'House of Alpin', type: 'house', slug: 'house-of-alpin', label: 'The earlier royal line from which they sprang' },
    { title: 'House of Bruce', type: 'house', slug: 'house-of-bruce', label: 'A claimant house of the succession crisis their end caused' }
  ] },
  sources: [
    { title: 'David I — Encyclopaedia Britannica', author: 'Encyclopaedia Britannica', type: 'encyclopedia', url: 'https://www.britannica.com/biography/David-I-king-of-Scotland' },
    { title: 'House of Dunkeld — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/House_of_Dunkeld' },
    { title: 'Margaret, Maid of Norway — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Margaret,_Maid_of_Norway' }
  ]
}

if (!Array.isArray(data.houses)) data.houses = []
for (const house of [bonde, dunkeld]) {
  const i = data.houses.findIndex((h) => h.id === house.id)
  if (i >= 0) data.houses[i] = house; else data.houses.push(house)
}

// Alias fixes onto existing houses (compound dynasty strings that failed to match):
// Teresa of León is Jiménez by birth (folded into the codex's House of Ivrea, which
// already carries the Jiménez aliases); Ferdinand of Flanders is of the Portuguese
// House of Burgundy.
const addAlias = (id, alias) => {
  const h = data.houses.find((x) => x.id === id)
  if (h) { h.aliases = h.aliases ?? []; if (!h.aliases.includes(alias)) h.aliases.push(alias) }
}
addAlias('house-of-ivrea', 'Jiménez (León) / House of Burgundy by marriage')
addAlias('house-of-burgundy-portugal', 'House of Burgundy-Portugal')

writeFileSync(dataPath, JSON.stringify(data, null, 2))
console.log(`Batch Q written. houses now (${data.houses.length}).`)
