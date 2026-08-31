// Mongol invasions — Batch 4 (capstone): the Mongol Empire polity, the hub that
// all the Mongol battle entries point to. Empire-standard location (>=6 sections,
// timeline >=8, a Major rulers section). Weaves in the later invasions (1259
// Poland, 1285 Hungary) and the 1242 withdrawal. Idempotent upsert.
import { readFileSync, writeFileSync } from 'node:fs'

const dataPath = new URL('../server/data/history.json', import.meta.url)
const data = JSON.parse(readFileSync(dataPath, 'utf8'))

const per = (slug, title, label) => ({ title, type: 'person', slug, label })
const loc = (slug, title, label) => ({ title, type: 'location', slug, label })
const evt = (slug, title, label) => ({ title, type: 'event', slug, label })
const hse = (slug, title, label) => ({ title, type: 'house', slug, label })

const empire = {
  id: 'mongol-empire',
  type: 'location',
  name: 'Mongol Empire',
  aliases: ['The Mongol Empire', 'Yeke Mongol Ulus', 'Great Mongol State'],
  locationType: 'Empire',
  kingdom: 'Eurasia',
  year: 1206,
  image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Expansion_of_the_Mongol_Empire.svg',
  imageInfo: {
    caption: 'The expansion of the Mongol Empire, 1206–1294 — the largest contiguous land empire in history.',
    creator: 'Wikimedia Commons contributors',
    date: 'modern map',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Expansion_of_the_Mongol_Empire.svg',
    note: 'A modern reconstruction map of the empire’s growth.'
  },
  summary:
    'The Mongol Empire was the largest contiguous land empire in history, forged by Genghis Khan from 1206 and expanded by his heirs across Asia and into eastern Europe. Its western invasions destroyed the Rus’ principalities and shattered Christian armies at Legnica and Mohi in 1241 before internal politics turned the horde back.',
  overview: [
    'Founded by Genghis Khan in 1206, the Mongol Empire grew within two generations into the largest land empire the world has known, stretching from Korea to the gates of central Europe.',
    'Its invasion of Europe in 1237–1242 was one of the great shocks of the Middle Ages, and its long shadow — the Golden Horde — lay over the Rus’ for two centuries.'
  ],
  knownFor: [
    'The largest contiguous land empire in history',
    'Genghis Khan and the Mongol conquests',
    'The Kalka, Rus’, Legnica and Mohi campaigns in Europe',
    'The Pax Mongolica and the yam relay network',
    'Division into the Golden Horde, Ilkhanate, Chagatai Khanate and Yuan China'
  ],
  contentSections: [
    { title: 'Overview', paragraphs: [
      'The Mongol Empire (Yeke Mongol Ulus, the “Great Mongol State”) was the largest contiguous land empire in history. Proclaimed by Genghis Khan in 1206 out of the united tribes of the steppe, it expanded under his sons and grandsons across China, Persia, the Islamic heartlands, and the Rus’ principalities, reaching in 1241 into Poland and Hungary at the edge of Latin Europe.',
      'For medieval Europe the empire meant, above all, the terror of 1237–1242: the destruction of the Rus’, the twin catastrophes of Legnica and Mohi, and then — as suddenly as it had come — the withdrawal of the horde.'
    ] },
    { title: 'Rise under Genghis Khan', paragraphs: [
      'Temüjin, a chieftain’s son who survived a hard and dangerous youth, united the warring tribes of Mongolia by 1206 and was proclaimed Genghis Khan, “universal ruler”. He forged the steppe peoples into a single disciplined nation-in-arms, organised on the decimal system into units of tens, hundreds, thousands, and ten-thousands (tumens).',
      'From this base he launched conquests of astonishing scale — against the Jin of northern China, the Qara Khitai, and the wealthy Khwarezmian empire of central Asia, which he annihilated with a ferocity that became legendary. By his death in 1227 the empire already spanned from the Pacific to the Caspian.'
    ] },
    { title: 'The war machine', paragraphs: [
      'Mongol success rested on the finest army of the age: highly mobile mounted archers who could ride and shoot at the gallop, supported by a genius for organisation, discipline, and intelligence-gathering. Armies manoeuvred in coordinated columns across vast distances and struck with devastating timing.',
      'Their battlefield methods — the feigned retreat that drew enemies into disorder, the encirclement, the use of terror and siege engineers borrowed from conquered peoples — overwhelmed the Rus’, the Poles, and the Hungarians in turn. Western heavy cavalry, brave but slow and undisciplined, proved almost helpless against them.'
    ] },
    { title: 'Government and the Pax Mongolica', paragraphs: [
      'Once conquest gave way to rule, the Mongols governed with a pragmatism that surprised their victims. They codified law in the yassa, employed administrators of every faith and nation, and were strikingly tolerant in religion, patronising Buddhists, Muslims, Christians, and shamanists alike.',
      'Across the empire ran the yam, a relay network of post-stations that carried messengers and merchants in safety over thousands of miles. This “Mongol peace” reopened the Silk Road, allowing men like Marco Polo and the friars sent by the popes to travel between Europe and the Mongol courts.'
    ] },
    { title: 'The invasion of Europe', paragraphs: [
      'Europe first met the Mongols at the Battle of the Kalka River in 1223, when a reconnaissance force under Jebe and Subutai crushed a Rus’–Cuman army and then withdrew. The real storm came in 1237, when Batu Khan and Subutai returned in overwhelming force, sacking Ryazan, Vladimir, and finally, in 1240, Kyiv — ending the age of Kievan Rus’.',
      'In 1241 the horde crossed into Latin Europe. A northern column destroyed a Polish-German army at the Battle of Legnica on 9 April, while two days later Subutai annihilated the Hungarian royal army at the Battle of Mohi. For a moment all of central Europe seemed open.',
      'Then, in 1242, the Mongols withdrew. The Great Khan Ögedei had died, and Batu turned back east to take part in the choosing of a successor — a piece of steppe politics that spared Europe further ruin. Later Mongol raids into Poland (1259 and 1287) and a second invasion of Hungary in 1285 did great damage but were beaten off: Hungary had rebuilt in stone, and its new castles and heavier cavalry blunted the horsemen who had once been irresistible.'
    ] },
    { title: 'Major rulers', paragraphs: [
      'Genghis Khan (r. 1206–1227) founded the empire and set its conquests in motion. His son Ögedei (r. 1229–1241) completed the conquest of northern China and launched the great western campaign that overran the Rus’ and struck Europe; his death in 1241 halted it.',
      'Güyük (r. 1246–1248) and then Möngke (r. 1251–1259) presided over the empire’s height, Möngke directing the sack of Baghdad in 1258. Under Kublai Khan (r. 1260–1294) the centre shifted to China, where he founded the Yuan dynasty — but by then real power had passed to the regional khans. In the west, Batu Khan, grandson of Genghis, ruled the lands he had conquered as the Golden Horde, the overlord of the Rus’ for generations.'
    ] },
    { title: 'Division into khanates', paragraphs: [
      'The empire was always a family enterprise, divided among the lines of Genghis’s sons, and after Möngke’s death in 1259 it fractured into four effectively independent states. The Golden Horde held the Rus’ and the western steppe; the Ilkhanate ruled Persia and the Middle East; the Chagatai Khanate held central Asia; and the Yuan dynasty ruled China.',
      'These khanates warred with one another as often as with outsiders, and the dream of a single Mongol world-empire dissolved — though each fragment remained a great power in its own right for generations.'
    ] },
    { title: 'Legacy', paragraphs: [
      'For eastern Europe the Mongol impact was profound and lasting: the Golden Horde dominated the Rus’ principalities until the 15th century, shaping the rise of Moscow, while the memory of 1241 haunted the Latin West for generations.',
      'Beyond the terror, the empire’s peace briefly knit Eurasia together, moving goods, people, technologies, and ideas — and, in its wake, the plague — between China and Europe on a scale not seen before. Few states have left so deep a mark in so short a time.'
    ] }
  ],
  timeline: [
    { date: '1206', title: 'Genghis Khan proclaimed', description: 'Temüjin unites the Mongol tribes and is proclaimed universal ruler.' },
    { date: '1223', title: 'Battle of the Kalka River', description: 'A Mongol reconnaissance force defeats a Rus’–Cuman army, then withdraws.' },
    { date: '1227', title: 'Death of Genghis Khan', description: 'The founder dies with the empire already spanning much of Asia.' },
    { date: '1237–1240', title: 'Conquest of the Rus’', description: 'Batu and Subutai sack Ryazan, Vladimir, and Kyiv, ending Kievan Rus’.' },
    { date: '1241', title: 'Legnica and Mohi', description: 'The horde destroys Polish and Hungarian armies in the twin battles of 1241.' },
    { date: '1242', title: 'The withdrawal', description: 'After Ögedei’s death the Mongols turn back east, sparing Latin Europe.' },
    { date: '1258', title: 'Sack of Baghdad', description: 'Möngke’s brother Hülegü destroys the Abbasid Caliphate.' },
    { date: '1260', title: 'Ain Jalut', description: 'The Mamluks of Egypt halt the Mongol advance in the Levant.' },
    { date: '1259–1260', title: 'Division into khanates', description: 'After Möngke’s death the empire fractures into four rival states.' },
    { date: '1285', title: 'Second invasion of Hungary repelled', description: 'Hungary’s new stone castles and heavier cavalry beat off a fresh Mongol assault.' },
    { date: '1368', title: 'Fall of the Yuan', description: 'The Mongol Yuan dynasty is driven from China as the empire’s fragments decline.' }
  ],
  relatedEntries: {
    people: [per('batu-khan', 'Batu Khan'), per('subutai', 'Subutai'), per('alexander-nevsky', 'Alexander Nevsky')],
    events: [
      evt('battle-of-the-kalka-river', 'Battle of the Kalka River'),
      evt('siege-of-kyiv', 'Siege of Kyiv'),
      evt('battle-of-legnica', 'Battle of Legnica'),
      evt('battle-of-mohi', 'Battle of Mohi')
    ],
    locations: [loc('kievan-rus', 'Kievan Rus’'), loc('kingdom-of-poland', 'Kingdom of Poland')],
    houses: [hse('house-of-borjigin', 'House of Borjigin')]
  },
  sectionImages: [
    {
      section: 'Major rulers',
      src: 'https://commons.wikimedia.org/wiki/Special:FilePath/YuanEmperorAlbumGenghisPortrait.jpg',
      caption: 'Genghis Khan, founder of the Mongol Empire, in a Yuan-era album portrait.',
      source: 'Wikimedia Commons',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:YuanEmperorAlbumGenghisPortrait.jpg'
    }
  ],
  sources: [
    { title: 'The Mongols', author: 'David Morgan', type: 'book' },
    { title: 'Genghis Khan and the Making of the Modern World', author: 'Jack Weatherford', type: 'book' },
    { title: 'The Devil’s Horsemen: The Mongol Invasion of Europe', author: 'James Chambers', type: 'book' },
    { title: 'Encyclopaedia Britannica: Mongol Empire', author: 'Encyclopaedia Britannica', type: 'reference work', url: 'https://www.britannica.com/place/Mongol-empire' }
  ]
}

const i = data.locations.findIndex((x) => x.id === empire.id)
if (i >= 0) { data.locations[i] = empire; console.log('locations: updated', empire.id) }
else { data.locations.push(empire); console.log('locations: added', empire.id) }
writeFileSync(dataPath, JSON.stringify(data, null, 2))
console.log(`locations collection now has ${data.locations.length}`)
