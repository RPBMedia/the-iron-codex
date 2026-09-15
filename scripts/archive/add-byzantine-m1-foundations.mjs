/**
 * Byzantine expansion — M1 (foundations).
 *
 * Two structural fixes that the rest of the Byzantine work depends on:
 *
 * 1. `byzantine-empire` was typed `Kingdom`. It is an Empire, and every other
 *    empire in the archive (Holy Roman, Mongol) is typed `Empire`. Dozens of new
 *    Byzantine articles will point at this entity, so the type is fixed first.
 *
 * 2. `Kingdom of Hungary` is used as a faction on `battle-of-mohi` and is needed
 *    again for Sirmium (1167), but no article existed — an orphaned faction
 *    string. Created here as a full anchor polity article.
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dataPath = path.join(__dirname, '../server/data/history.json')
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'))

const byId = (coll, id) => data[coll].find((x) => x.id === id)
const exists = (coll, id) => Boolean(byId(coll, id))

// ── 1. Fix the Byzantine Empire's polity type ────────────────────────────────
const byz = byId('locations', 'byzantine-empire')
if (!byz) throw new Error('byzantine-empire missing — aborting')
const previousType = byz.locationType
byz.locationType = 'Empire'
console.log(`byzantine-empire: locationType ${previousType} -> Empire`)

// ── 2. Kingdom of Hungary ────────────────────────────────────────────────────
const hungary = {
  id: 'kingdom-of-hungary',
  type: 'location',
  locationType: 'Kingdom',
  name: 'Kingdom of Hungary',
  aliases: ['Regnum Hungariae', 'Magyar kingdom'],
  kingdom: 'Central Europe',
  year: 1000,
  image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Stephen_I_(Chronicon_Pictum_041).jpg',
  imageInfo: {
    caption:
      'Stephen I of Hungary, the kingdom’s first crowned ruler, depicted in the Chronicon Pictum (Illuminated Chronicle) of the 1360s.',
    creator: 'Illuminator of the Chronicon Pictum, traditionally associated with Márk Kálti’s workshop',
    date: 'c. 1358–1370',
    source: 'Chronicon Pictum, National Széchényi Library, Budapest — via Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Stephen_I_(Chronicon_Pictum_041).jpg',
    note:
      'A courtly image made some three centuries after Stephen’s death; it shows how the fourteenth-century Angevin court wished to remember the founder, not his actual appearance.'
  },
  summary:
    'The Kingdom of Hungary was the Latin Christian monarchy founded in the Carpathian basin around the year 1000, which for five centuries dominated the middle Danube and fought in turn the Byzantines, the Mongols and the Ottomans.',
  overview: [
    'The Kingdom of Hungary took shape when the Magyar princes who had settled the Carpathian basin at the end of the ninth century abandoned raiding, accepted Latin Christianity and built a western-style monarchy. Stephen I, crowned at the turn of the millennium with a crown sent from Rome, organised the realm into counties governed from royal castles and endowed a bishopric structure that outlasted every dynasty that ruled it.',
    'Its position made it a frontier state in three directions at once. Hungarian kings pressed south into Croatia and Dalmatia, where they collided with Venice and with the Byzantine Empire under Manuel I Komnenos; they absorbed the Mongol catastrophe of 1241; and from the late fourteenth century they carried the main weight of the Ottoman advance up the Danube.'
  ],
  knownFor: [
    'Stephen I and the Christianisation of the Magyars',
    'The Golden Bull of 1222',
    'The Mongol invasion of 1241 and the rebuilding that followed',
    'Rivalry with Byzantium over Croatia, Dalmatia and Sirmium',
    'Leading the Danube front against the Ottomans at Nicopolis and Varna'
  ],
  contentSections: [
    {
      title: 'Overview',
      paragraphs: [
        'The Kingdom of Hungary was the principal Latin Christian power of the middle Danube from about 1000 until the Ottoman conquest of its centre in the sixteenth century. It grew out of the Magyar settlement of the Carpathian basin in the 890s, and its conversion turned a raiding confederation into a territorial monarchy with counties, bishoprics, a royal chancery and a written law.',
        'Hungarian kings ruled a realm defined by its frontiers rather than by a single core province. The Danube and Tisza plains formed its agricultural heart, Transylvania its eastern march, and Croatia and the Dalmatian coast its contested southern extension — the last of these bringing the kingdom into direct conflict with Constantinople and Venice.'
      ]
    },
    {
      title: 'Settlement and Christianisation',
      paragraphs: [
        'Magyar groups under Árpád occupied the Carpathian basin from about 895, and for two generations raided westward as far as Burgundy and northern Italy. That phase ended with their defeat on the Lechfeld near Augsburg in 955, after which the ruling house turned towards accommodation with the Latin west rather than plunder from it.',
        'Géza, ruling from the 970s, accepted Christian missionaries and married his son Vajk to Gisela of Bavaria. That son, baptised Stephen, was crowned around the turn of the millennium and suppressed the rival claims of his kinsman Koppány and the Transylvanian ruler Gyula. Stephen founded the archbishopric of Esztergom, issued two law codes, and was canonised in 1083 — the founding king becoming the kingdom’s patron saint.'
      ]
    },
    {
      title: 'The Árpád monarchy',
      paragraphs: [
        'The Árpád dynasty ruled until 1301. Ladislaus I and Coloman extended royal authority southward; Coloman was crowned king of Croatia in 1102, beginning the long union of the two crowns and the Hungarian claim to the Dalmatian towns that Venice and Byzantium also wanted.',
        'Royal power was repeatedly contested by the magnates. The Golden Bull of 1222, extracted from Andrew II, guaranteed noble privileges, exempted the nobility from taxation and asserted a right of resistance against a king who broke its terms — a charter often compared with Magna Carta, issued seven years earlier in England, though it grew from Hungarian conditions rather than English precedent.'
      ]
    },
    {
      title: 'Wars and frontiers',
      paragraphs: [
        'Hungary’s southern frontier brought it into sustained conflict with the Byzantine Empire during the twelfth century. Manuel I Komnenos intervened repeatedly in Hungarian succession disputes, held the future Béla III at Constantinople as his designated heir under the name Alexios, and in 1167 destroyed a Hungarian army near Sirmium, confirming imperial control of Syrmia and influence over Croatia and Dalmatia. Béla III later returned to rule Hungary, carrying Byzantine administrative habits with him.',
        'The gravest disaster came in 1241, when the Mongol army of Batu and Subutai destroyed the royal host at the Battle of Mohi and overran the kingdom until its withdrawal the following year. Béla IV rebuilt on stone: a programme of masonry castles, fortified towns and invited settlers reshaped the kingdom’s defences for the rest of the Middle Ages.'
      ]
    },
    {
      title: 'Major rulers',
      paragraphs: [
        'Stephen I (c. 1000–1038) founded the Christian kingdom, its counties and its church. Ladislaus I (1077–1095) and Coloman (1095–1116) extended it to Croatia and the Adriatic. Béla III (1172–1196), raised at the Byzantine court, ruled one of the wealthiest realms of his day.',
        'Andrew II (1205–1235) conceded the Golden Bull; his son Béla IV (1235–1270) survived the Mongol invasion and rebuilt the kingdom. After the Árpád line failed in 1301 the Angevin Charles I and Louis I the Great (1342–1382) restored royal finances and pushed Hungarian influence into Poland and the Balkans. Sigismund of Luxembourg (1387–1437) led the crusade defeated at the Battle of Nicopolis, and Matthias Corvinus (1458–1490) built the last great independent Hungarian court before the Ottoman conquest.'
      ]
    },
    {
      title: 'Government, society and economy',
      paragraphs: [
        'Administration rested on the royal county, an area governed from a castle by an ispán who commanded its garrison, collected royal revenue and held court. Alongside it stood the church province of Esztergom and, later, Kalocsa. Royal free towns, many settled by German-speaking hospites invited after 1241, held charters granting self-government and market rights.',
        'The kingdom’s wealth came from land, cattle, and above all metals: the mines of upper Hungary and Transylvania made it one of Europe’s largest producers of gold and silver in the fourteenth century, underwriting the Angevin gold florin and the exceptional revenues Louis I and Sigismund could command.'
      ]
    },
    {
      title: 'The Ottoman wars and the end of the medieval kingdom',
      paragraphs: [
        'From the 1390s Hungary carried the principal land defence of Latin Christendom on the Danube. Sigismund’s international army was broken at the Battle of Nicopolis in 1396, and the crusade of 1444 ended in the death of King Władysław III at the Battle of Varna. Between those defeats John Hunyadi held the frontier and relieved Belgrade in 1456.',
        'The medieval kingdom ended in the sixteenth century: the catastrophe at Mohács in 1526 killed Louis II and opened the way to the Ottoman occupation of Buda in 1541, after which Hungary was partitioned between Ottoman, Habsburg and Transylvanian rule.'
      ]
    },
    {
      title: 'Legacy',
      paragraphs: [
        'The institutions Stephen I created — the county, the bishopric, the Latin liturgy and the written royal charter — outlived the dynasty, the Mongols and the Ottomans, and remained the framework of Hungarian public life into the modern period. The Holy Crown itself became a legal abstraction, the notional source of authority in the kingdom regardless of who wore it.',
        'For the Byzantine story the kingdom matters as the empire’s most persistent Latin neighbour on the Danube: an opponent at Sirmium, a dynastic partner through Béla III, and later a fellow casualty of the same Ottoman advance that took Constantinople in 1453.'
      ]
    }
  ],
  timeline: [
    { date: 'c. 895', title: 'Magyar settlement of the Carpathian basin', description: 'Magyar groups under Árpád occupy the middle Danube, displacing Moravian and Bulgarian authority in the region.' },
    { date: '955', title: 'Defeat on the Lechfeld', description: 'Otto I destroys a Magyar raiding army near Augsburg, ending the westward raids and pushing the ruling house towards Christian settlement.' },
    { date: 'c. 1000–1001', title: 'Coronation of Stephen I', description: 'Stephen is crowned with a crown sent from Rome, founding the Christian kingdom and the archbishopric of Esztergom.' },
    { date: '1083', title: 'Canonisation of Stephen I', description: 'Ladislaus I secures the canonisation of the founding king, binding the dynasty to the kingdom’s patron saint.' },
    { date: '1102', title: 'Coloman crowned king of Croatia', description: 'The Hungarian and Croatian crowns are united, beginning the kingdom’s long contest with Venice and Byzantium over Dalmatia.' },
    { date: '1167', title: 'Byzantine victory near Sirmium', description: 'An imperial army under Andronikos Kontostephanos destroys a Hungarian force, confirming Byzantine control of Syrmia under Manuel I Komnenos.' },
    { date: '1222', title: 'The Golden Bull', description: 'Andrew II concedes a charter of noble liberties, including exemption from taxation and a right of resistance against a king who violates it.' },
    { date: '1241', title: 'Mongol invasion and the Battle of Mohi', description: 'Batu and Subutai destroy the royal army on the Sajó; the kingdom is overrun until the Mongol withdrawal in 1242.' },
    { date: '1301', title: 'End of the Árpád dynasty', description: 'Andrew III dies without a male heir, opening a succession contest resolved in favour of the Angevin Charles I.' },
    { date: '1396', title: 'Battle of Nicopolis', description: 'Sigismund’s international crusading army is destroyed by Bayezid I, ending hopes of driving the Ottomans from the Balkans.' },
    { date: '1444', title: 'Battle of Varna', description: 'The crusade of Władysław III is defeated and the king killed, leaving Hungary to hold the Danube frontier largely alone.' },
    { date: '1458', title: 'Accession of Matthias Corvinus', description: 'The son of John Hunyadi is elected king and builds a professional army and a humanist court at Buda.' }
  ],
  relatedEntries: {
    people: [{ title: 'Béla IV of Hungary', type: 'person', slug: 'bela-iv-of-hungary' }],
    events: [
      { title: 'Battle of Mohi', type: 'event', slug: 'battle-of-mohi' },
      { title: 'Battle of Nicopolis', type: 'event', slug: 'battle-of-nicopolis' },
      { title: 'Battle of Varna', type: 'event', slug: 'battle-of-varna' }
    ],
    locations: [
      { title: 'Byzantine Empire', type: 'location', slug: 'byzantine-empire' },
      { title: 'Mongol Empire', type: 'location', slug: 'mongol-empire' }
    ]
  },
  sources: [
    { title: 'A History of Hungary', author: 'Peter F. Sugar (ed.)', type: 'book' },
    { title: 'The Realm of St Stephen: A History of Medieval Hungary, 895–1526', author: 'Pál Engel', type: 'book' },
    { title: 'Chronicon Pictum image record', author: 'Wikimedia Commons', type: 'image source', url: 'https://commons.wikimedia.org/wiki/File:Stephen_I_(Chronicon_Pictum_041).jpg' }
  ]
}

// Guard: never emit a relatedEntries link to an id that does not exist.
const collFor = { person: 'characters', event: 'events', location: 'locations', house: 'houses', order: 'orders' }
for (const [group, items] of Object.entries(hungary.relatedEntries)) {
  hungary.relatedEntries[group] = items.filter((it) => {
    const ok = exists(collFor[it.type], it.slug)
    if (!ok) console.warn(`  ! dropped dead relatedEntries link: ${it.type}/${it.slug}`)
    return ok
  })
}

if (exists('locations', hungary.id)) {
  console.log('kingdom-of-hungary already exists — leaving untouched')
} else {
  data.locations.push(hungary)
  console.log('kingdom-of-hungary: created')
}

// Match the repo convention exactly (2-space, no trailing newline) so the diff
// stays scoped to the change rather than reformatting all 6 MB.
fs.writeFileSync(dataPath, JSON.stringify(data, null, 2))
console.log('history.json written')
