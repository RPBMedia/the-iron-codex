/**
 * Track C M3 — curated topic landing pages.
 *
 * WHY THESE EXIST. The archive has 800 articles and two ways in: an A-Z index
 * and seven collection hubs. Both are organised by what an article *is*, and
 * nobody searches that way. People search for "the Viking age", "the crusades",
 * "the battle of Hastings" — subjects, not categories. A topic page is the page
 * that can rank for the subject and then hand the reader the fifty articles the
 * archive already has about it.
 *
 * HOW MEMBERSHIP IS DECIDED, and why not by keyword. Matching articles by regex
 * was tried and abandoned: "the crusades" matched 309 articles, because one
 * passing mention of Jerusalem is enough. A landing page padded with loose
 * matches is thin content, which search engines penalise and readers resent.
 *
 * Instead each topic is seeded with anchor articles chosen by hand, then expanded
 * ONE HOP through `relatedEntries`. Those links were written deliberately, article
 * by article, across every milestone in this project — so the archive's own
 * curated link graph decides what belongs, and everything on a topic page is
 * there because a human said the two things were related.
 *
 * The prose is not decoration either. A page that is only a list of links is thin
 * whatever the links are; each topic carries several hundred words that stand on
 * their own.
 *
 * OUTPUT — deliberately two files, no API:
 *   server/data/topics.json    for the prerenderer
 *   client/src/lib/topics.js   imported statically by the SPA
 *
 * The static import matters. Hub pages fetched their data from `/api` and
 * rendered EMPTY for Googlebot, which reported soft 404s (see Track C M2). A
 * generated module cannot fail that way: it is in the bundle, so the first render
 * is always complete.
 */
import { readFileSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')
const data = JSON.parse(readFileSync(path.join(root, 'server', 'data', 'history.json'), 'utf8'))

const pub = (c) => (c === 'characters' ? 'people' : c === 'weaponsArmor' ? 'weapons-armor' : c)
const TYPE_TO_COLLECTION = {
  person: 'people', event: 'events', location: 'locations', artifact: 'artifacts',
  weaponArmor: 'weapons-armor', house: 'houses', order: 'orders'
}

const index = new Map()
for (const [collection, arr] of Object.entries(data)) {
  if (!Array.isArray(arr)) continue
  for (const a of arr) index.set(a.id, { article: a, collection: pub(collection) })
}

const P = (...paragraphs) => paragraphs

const TOPICS = [
  {
    slug: 'viking-age',
    title: 'The Viking Age',
    heading: 'The Viking Age',
    blurb: 'The Scandinavian expansion of the eighth to eleventh centuries: the kings, the battles, the ships and the weapons.',
    intro: P(
      'The Viking Age is conventionally dated from the raid on Lindisfarne in 793 to the death of Harald Hardrada at Stamford Bridge in 1066 — a span of less than three centuries in which people from a thinly populated northern periphery reached Newfoundland, Baghdad and the walls of Constantinople.',
      'The word itself is a problem the archive takes seriously. "Viking" in the sources is closer to an activity than an identity: most Scandinavians of the period farmed, and the raiders who gave the age its name were a minority pursuing a seasonal trade. What made them formidable was not ferocity, which their victims had met before, but the ship — a shallow-draught hull that could cross open sea and then row up a river, which meant no monastery, town or royal hall within reach of navigable water was safe.',
      'The political consequences outlast the raiding by centuries. Scandinavian settlement reshaped England, produced the Duchy of Normandy and through it the Norman conquests of England and Sicily, founded the Rus principalities that became Russia and Ukraine, and supplied the Byzantine emperors with the Varangian Guard. The unification of Norway, Denmark and Sweden into kingdoms happened in the same period and largely because of it.',
      'What follows is everything the archive holds on the period: the rulers who unified the northern kingdoms and the ones who failed, the battles that decided them, the dynasties that came out of them, and the arms and armour the age is remembered for.'
    ),
    seeds: ['harald-fairhair', 'eric-bloodaxe', 'cnut-the-great', 'harald-hardrada', 'battle-of-stamford-bridge',
      'battle-of-hafrsfjord', 'battle-of-svolder', 'battle-of-stiklestad', 'sweyn-forkbeard', 'guthrum',
      'battle-of-edington', 'house-of-jelling', 'house-of-fairhair', 'house-of-ui-imair', 'viking-sword',
      'round-shield', 'dane-axe', 'sutton-hoo-helmet', 'gjermundbu-helmet', 'battle-of-brunanburh', 'olaf-tryggvason']
  },
  {
    slug: 'crusades',
    title: 'The Crusades',
    heading: 'The Crusades',
    blurb: 'Two centuries of holy war in the eastern Mediterranean: the campaigns, the crusader states, the military orders and the people on both sides.',
    intro: P(
      'Between Urban II\'s sermon at Clermont in 1095 and the fall of Acre in 1291, western Europe repeatedly sent armies to the eastern Mediterranean. They founded four states there, lost them, and in the process reshaped the politics of Europe, the Levant and Byzantium — none of it in the way anyone intended.',
      'The archive treats the crusades as a series of specific campaigns rather than a single movement, because that is what they were: differently motivated, differently financed, differently led, and united mainly by a papal grant of indulgence. The First Crusade succeeded beyond any reasonable expectation. The Third recovered the coast but not Jerusalem. The Fourth never reached the Holy Land at all and sacked Constantinople instead, which did more lasting damage to Christendom than any Muslim victory.',
      'The military orders are the crusades\' most distinctive institutional creation — the Templars, the Hospitallers, the Teutonic Knights and several smaller brotherhoods, monastic communities that were also standing armies. They outlived the crusader states, and two of them outlived the crusades entirely.',
      'Coverage here runs to both sides. Saladin and Kerbogha are treated as seriously as Richard the Lionheart, and the Fourth Crusade is covered from the Byzantine end as well as the Venetian.'
    ),
    seeds: ['first-crusade-called', 'third-crusade', 'fourth-crusade', 'siege-of-constantinople-1204',
      'kingdom-of-jerusalem', 'crusader-states', 'knights-templar', 'knights-hospitaller', 'teutonic-order',
      'saladin', 'battle-of-hattin', 'richard-the-lionheart', 'enrico-dandolo', 'bernard-of-clairvaux',
      'kerbogha', 'order-of-saint-lazarus', 'order-of-st-thomas-of-acre']
  },
  {
    slug: 'byzantine-warfare',
    title: 'The Byzantine Empire at War',
    heading: 'The Byzantine Empire at War',
    blurb: 'A thousand years of Roman warfare in the east: the sieges of Constantinople, the reconquests, the defeats, and the emperors who fought them.',
    intro: P(
      'The eastern Roman empire outlived the western by almost a thousand years, and spent most of them fighting. The archive covers that span from Justinian\'s reconquest of Africa and Italy in the 530s to the fall of Constantinople in 1453 — the longest continuous military history of any polity it holds.',
      'The shape of it is not a straight decline, which is the single most common misreading. The empire lost Syria, Palestine and Egypt to the Arab conquests within a decade of winning a twenty-six-year war against Persia, and then held its remaining territory against two enormous sieges of its capital. It recovered in the tenth century under Nikephoros Phokas and Basil II to become the strongest state in the Mediterranean, lost Anatolia after Manzikert less through the battle than through the civil wars that followed it, recovered again under the Komnenoi, and was destroyed not by an enemy but by a crusade it had helped to provoke.',
      'Constantinople is the thread. The city was besieged by Avars, Persians, Arabs, Bulgars, Rus and Vikings across nine centuries without falling, and when it did fall in 1204 it fell to allies. The empire restored in 1261 never recovered from that, and the last two centuries are a long defensive contraction against the Ottomans.',
      'This is the archive\'s deepest single subject, built out across fourteen milestones of dedicated research.'
    ),
    seeds: ['byzantine-empire', 'constantinople', 'battle-of-manzikert', 'battle-of-yarmouk',
      'battle-of-myriokephalon', 'siege-of-constantinople-717', 'siege-of-constantinople-626',
      'fall-of-constantinople', 'justinian-i', 'belisarius', 'heraclius', 'basil-ii',
      'michael-viii-palaiologos', 'battle-of-pelagonia', 'recovery-of-constantinople', 'vandalic-war',
      'gothic-war', 'battle-of-bapheus', 'sultanate-of-rum', 'rashidun-caliphate']
  },
  {
    slug: 'hundred-years-war',
    title: "The Hundred Years' War",
    heading: "The Hundred Years' War",
    blurb: 'The Anglo-French wars of 1337–1453: Crécy, Poitiers, Agincourt, Joan of Arc, and the artillery that ended it.',
    intro: P(
      'The Hundred Years\' War lasted a hundred and sixteen years, was not continuous, and was not really about the English claim to the French throne that provided its pretext. It was a succession of campaigns, truces and civil wars between two crowns whose lands and loyalties had been entangled since 1066.',
      'Militarily it is the period in which the balance between armoured cavalry and missile infantry shifted decisively, and then shifted again. Crécy, Poitiers and Agincourt are three variations on the same lesson — dismounted men-at-arms and massed longbowmen on chosen ground, against a numerically superior force that had to come to them. The English won every one of those battles and still lost the war.',
      'What reversed it was partly Joan of Arc, whose eighteen months transformed a collapsing French position at Orléans, and partly something less romantic: the French crown built a professional standing army and the best artillery train in Europe. Formigny and Castillon were decided by guns, and Castillon in 1453 is where the medieval military age is usually said to end.',
      'The archive covers the battles, the commanders on both sides, and the weapons and armour that made the period what it was.'
    ),
    seeds: ['hundred-years-war', 'battle-of-crecy', 'battle-of-poitiers', 'battle-of-agincourt',
      'battle-of-formigny', 'battle-of-castillon', 'siege-of-orleans', 'battle-of-patay', 'joan-of-arc',
      'longbow', 'battle-of-verneuil', 'siege-of-rouen']
  },
  {
    slug: 'norman-conquest',
    title: 'The Norman Conquest',
    heading: 'The Norman Conquest',
    blurb: 'England in 1066: three claimants, three battles in three weeks, and the conquest that remade the kingdom.',
    intro: P(
      'The death of Edward the Confessor in January 1066 left England with no undisputed heir and three men prepared to fight for it: Harold Godwinson, crowned within days; Harald Hardrada of Norway, pressing a claim inherited from an old treaty; and William, duke of Normandy, who said Edward had promised him the throne and that Harold had sworn to support him.',
      'What followed is the most compressed decisive campaign in medieval English history. Hardrada landed in the north and beat the northern earls at Fulford on 20 September. Harold marched an army two hundred miles and destroyed him at Stamford Bridge on the 25th. William landed in Sussex three days later. Harold marched back south and was killed at Hastings on 14 October.',
      'The consequences were not merely dynastic. Within twenty years the English landholding aristocracy had been almost entirely replaced, the language of government had changed, castles had appeared across the country, and England had been surveyed in a document with no parallel anywhere in Europe. The kingdom\'s centre of political gravity moved to the continent and stayed there for four hundred years, which is where the Hundred Years\' War ultimately comes from.',
      'The archive covers all three claimants, all three battles, and the dynasties on either side of the break.'
    ),
    seeds: ['norman-conquest', 'battle-of-hastings', 'battle-of-stamford-bridge', 'battle-of-fulford',
      'william-the-conqueror', 'harold-godwinson', 'harald-hardrada', 'edward-the-confessor',
      'house-of-normandy', 'house-of-wessex']
  },
  {
    slug: 'mongol-invasions',
    title: 'The Mongol Invasions',
    heading: 'The Mongol Invasions',
    blurb: 'The campaigns that reached central Europe: Kalka, the destruction of the Rus principalities, Legnica and Mohi.',
    intro: P(
      'In 1223 a Mongol reconnaissance force destroyed a combined Rus and Cuman army at the Kalka river and then rode home. Fourteen years later a real invasion arrived, and within four years the Rus principalities had been systematically dismantled, Poland and Hungary had been beaten in the same week, and Mongol scouts had reached the Adriatic.',
      'The campaigns are studied because they were extraordinarily well executed rather than merely large. The Mongol armies operated in separate columns across hundreds of miles and arrived where they intended together; they took fortified cities that had never fallen; and at Legnica and Mohi in April 1241 they defeated two entirely separate European armies two days apart.',
      'What stopped the advance was not a battle. Ögedei Khan died in December 1241 and the commanders withdrew east for the succession, and the invasion of central Europe simply ended. Whether it would have continued is one of the genuine unanswerable questions of medieval history, and the archive says so rather than guessing.',
      'The Rus principalities did not recover their independence for two centuries. That, rather than the raid into Poland and Hungary, is the lasting consequence.'
    ),
    seeds: ['battle-of-mohi', 'battle-of-legnica', 'siege-of-kyiv', 'siege-of-ryazan', 'siege-of-vladimir',
      'battle-of-the-sit-river', 'subutai', 'house-of-borjigin', 'battle-of-the-kalka-river']
  },
  {
    slug: 'reconquista',
    title: 'The Reconquista',
    heading: 'The Reconquista',
    blurb: 'Seven centuries in Iberia: al-Andalus, the Christian kingdoms, Las Navas de Tolosa and the making of Spain and Portugal.',
    intro: P(
      'The Reconquista is a name given long afterwards to something that was never a single project: the seven-hundred-year process by which Christian kingdoms in northern Iberia expanded south at the expense of Muslim al-Andalus, ending with the fall of Granada in 1492.',
      'The archive is careful with the word. For most of the period the frontier was not a religious front line but an ordinary political one, crossed constantly by mercenaries, exiles, tribute arrangements and alliances that ignored religion entirely. El Cid, the great hero of the Castilian tradition, spent years in the service of the Muslim ruler of Zaragoza. Christian kings allied with taifa emirs against other Christian kings, and vice versa, throughout.',
      'What changed the character of it was the arrival of the Almoravids and then the Almohads from North Africa, which introduced a genuinely ideological element on both sides, and the papal grant of crusade status to Iberian campaigns. Las Navas de Tolosa in 1212 is the conventional turning point: after it, Almohad power in Iberia collapsed and the southern conquests followed quickly.',
      'The other outcome is Portugal, which separated from León in the twelfth century and became a kingdom in its own right — a story the archive covers in its own detail.'
    ),
    seeds: ['al-andalus', 'battle-of-las-navas-de-tolosa', 'el-cid', 'almohad-caliphate', 'almoravid-dynasty',
      'caliphate-of-cordoba', 'battle-of-ourique', 'siege-of-lisbon', 'battle-of-sao-mamede',
      'nasrid-dynasty', 'abd-al-rahman-iii']
  }
]

const MAX_MEMBERS = 70

const topics = TOPICS.map((t) => {
  const missing = t.seeds.filter((id) => !index.has(id))
  if (missing.length) throw new Error(`topic "${t.slug}" seeds do not exist: ${missing.join(', ')}`)

  // Seeds first, then one hop through the hand-written relatedEntries graph.
  const members = new Map()
  const add = (id, depth) => {
    if (!index.has(id) || members.has(id)) return
    members.set(id, depth)
  }
  for (const id of t.seeds) add(id, 0)
  for (const id of t.seeds) {
    const { article } = index.get(id)
    for (const r of Object.values(article.relatedEntries ?? {}).flat()) {
      if (r?.slug && TYPE_TO_COLLECTION[r.type]) add(r.slug, 1)
    }
  }

  // Seeds before expansions, then alphabetical — so the anchors of the subject
  // lead each group rather than whatever the graph happened to surface.
  const grouped = {}
  for (const [id, depth] of members) {
    const { article, collection } = index.get(id)
    ;(grouped[collection] ??= []).push({ id, name: article.name, depth, summary: article.summary ?? '' })
  }
  let total = 0
  for (const [collection, list] of Object.entries(grouped)) {
    list.sort((a, b) => a.depth - b.depth || a.name.localeCompare(b.name))
    total += list.length
  }
  if (total > MAX_MEMBERS) {
    // Trim expansions (depth 1) from the largest groups first; never a seed.
    const order = Object.entries(grouped).sort((a, b) => b[1].length - a[1].length)
    let over = total - MAX_MEMBERS
    for (const [, list] of order) {
      while (over > 0 && list.length && list[list.length - 1].depth === 1) { list.pop(); over-- }
    }
    total = Object.values(grouped).reduce((n, l) => n + l.length, 0)
  }

  return { ...t, seeds: undefined, members: grouped, count: total }
})

// Reverse map: article id -> the topics it belongs to. This is what makes the
// clusters BIDIRECTIONAL — a reader who lands on one battle from a search can
// get to the whole subject, and crawlers see a dense two-way link graph instead
// of a hub that only points outward.
const topicsByArticle = {}
for (const t of topics) {
  for (const list of Object.values(t.members)) {
    for (const m of list) {
      ;(topicsByArticle[m.id] ??= []).push({ slug: t.slug, title: t.title })
    }
  }
}

writeFileSync(path.join(root, 'server', 'data', 'topics.json'),
  JSON.stringify({ topics, topicsByArticle }, null, 2))

// Static module for the SPA. NOT fetched from the API — a topic page must never
// depend on a network call to render, which is what made the hub pages soft-404.
writeFileSync(
  path.join(root, 'client', 'src', 'lib', 'topics.js'),
  '// GENERATED by scripts/build-topics.mjs — do not edit by hand.\n' +
  '// Imported statically so topic pages render with no API call and no loading\n' +
  '// state, which is what keeps them crawlable (see Track C M2).\n' +
  `export const TOPICS = ${JSON.stringify(topics, null, 2)}\n\n` +
  `export const TOPICS_BY_ARTICLE = ${JSON.stringify(topicsByArticle, null, 2)}\n\n` +
  'export const topicBySlug = (slug) => TOPICS.find((t) => t.slug === slug) ?? null\n\n' +
  'export const topicsForArticle = (id) => TOPICS_BY_ARTICLE[id] ?? []\n'
)

for (const t of topics) {
  const by = Object.entries(t.members).map(([c, l]) => `${c} ${l.length}`).join(', ')
  console.log(`${t.slug.padEnd(20)} ${String(t.count).padStart(3)} articles  (${by})`)
}
console.log(`\n${topics.length} topics, ${Object.keys(topicsByArticle).length} articles linked back to a subject.`)
