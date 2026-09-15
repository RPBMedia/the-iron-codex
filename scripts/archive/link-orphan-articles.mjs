/**
 * M14 integration: the sixteen articles nothing linked to.
 *
 * Found by scripts/audit-track-a-integration.mjs. An orphan here means no other
 * article carries a curated slug reference to it — the collection index and
 * search still reach it, and the prose auto-linker may too, but nobody browsing
 * the archive is ever offered it. For an archive whose whole shape is
 * cross-reference, that is a real hole.
 *
 * None of the sixteen are Track A articles. Every Track A milestone wired its own
 * cross-links; these are older gaps that the integration audit surfaced because it
 * was the first thing to look at the archive as a whole rather than a milestone.
 *
 * The link is added on the HOST — the article a reader would plausibly be on when
 * they would want the orphan — rather than on the orphan, because a link out of an
 * orphan does nothing for its discoverability.
 *
 * NOT DONE HERE, and queued instead: several of these are also thin. The Shroud of
 * Turin article opens "Shroud of Turin is a material or textual object whose
 * physical survival helps historians read medieval politics, belief, art, or
 * memory", which is template filler, and four popes have no summary at all.
 * Linking to a stub makes the stub more visible, not better; the content work is a
 * separate job and is recorded in QUEUE.md.
 */
import { readFileSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dataPath = path.join(__dirname, '../server/data/history.json')
const data = JSON.parse(readFileSync(dataPath, 'utf8'))

const index = new Map()
for (const arr of Object.values(data)) {
  if (Array.isArray(arr)) for (const a of arr) index.set(a.id, a)
}

// [host, bucket, { title, type, slug, label }]
const LINKS = [
  // The end of the western empire, unreferenced by the two articles that exist
  // because of it.
  ['ostrogothic-kingdom', 'events', ['Fall of the Western Roman Empire', 'event', 'fall-of-western-rome',
    'The deposition of 476 that left Italy to be ruled by its generals']],
  ['byzantine-empire', 'events', ['Fall of the Western Roman Empire', 'event', 'fall-of-western-rome',
    'The western half ends in 476; this archive follows the half that did not']],

  // Ragnar's historicity is doubtful, but the army his reputed sons led is not.
  ['guthrum', 'people', ['Ragnar Lothbrok', 'person', 'ragnar-lothbrok',
    'The legendary figure whose reputed sons led the army Guthrum rose in']],
  ['alfred-the-great', 'people', ['Ragnar Lothbrok', 'person', 'ragnar-lothbrok',
    'The saga figure to whom tradition attributes the leaders of the Great Heathen Army']],

  // The First Crusade's chronicler and its most formidable opponent.
  ['first-crusade-called', 'people', ['Fulcher of Chartres', 'person', 'fulcher-of-chartres',
    'Who went on the crusade and wrote one of the fullest accounts of it']],
  ['first-crusade-called', 'people', ['Kerbogha', 'person', 'kerbogha',
    'Atabeg of Mosul, whose relief army was beaten outside Antioch in 1098']],

  // Joinville wrote the biography that made Louis IX a saint in the popular mind.
  ['louis-ix-of-france', 'people', ['Jean de Joinville', 'person', 'jean-de-joinville',
    'His companion on crusade, and the author of the Life that shaped his memory']],

  // The Hospitallers' founder, unlinked from the order he founded.
  ['knights-hospitaller', 'people', ['Gerard Thom', 'person', 'gerard-thom',
    'The founder, who ran the Jerusalem hospital before the order was a military one']],
  ['knights-hospitaller', 'orders', ['Order of Saint Lazarus', 'order', 'order-of-saint-lazarus',
    'The leper brotherhood that grew out of the same hospital tradition']],
  ['kingdom-of-jerusalem', 'orders', ['Order of Saint Lazarus', 'order', 'order-of-saint-lazarus',
    'Founded outside the walls of Jerusalem, and the strangest of the military orders']],

  // The only English military order, founded on the Third Crusade.
  ['third-crusade', 'orders', ['Order of St Thomas of Acre', 'order', 'order-of-st-thomas-of-acre',
    'Founded during this crusade to bury and care for English crusaders']],

  // Christine wrote the only contemporary work about Joan by a woman.
  ['joan-of-arc', 'people', ['Christine de Pizan', 'person', 'christine-de-pizan',
    'Who wrote the Ditié de Jehanne d\'Arc in 1429, the only contemporary poem about her']],

  // The popes, each linked from the institution they acted on.
  ['knights-templar', 'people', ['Pope Clement V', 'person', 'pope-clement-v',
    'Who suppressed the order at the Council of Vienne in 1312']],
  ['pope-clement-v', 'people', ['Pope John XXII', 'person', 'pope-john-xxii',
    'His successor at Avignon, who inherited the aftermath of the suppression']],
  ['teutonic-order', 'people', ['Pope Gregory IX', 'person', 'pope-gregory-ix',
    'Who authorised the order\'s crusade in Prussia']],
  ['bernard-of-clairvaux', 'people', ['Pope Eugenius III', 'person', 'pope-eugenius-iii',
    'His former pupil, for whom he preached the Second Crusade']],

  // Royal burial churches, linked from the kings buried in them.
  ['cnut-the-great', 'locations', ['Winchester Cathedral', 'location', 'winchester-cathedral',
    'Where he was buried, among the kings of Wessex he had displaced']],
  ['house-of-wessex', 'locations', ['Winchester Cathedral', 'location', 'winchester-cathedral',
    'The dynasty\'s burial church and the old capital of its kingdom']],
  ['harald-bluetooth', 'locations', ['Roskilde', 'location', 'roskilde',
    'The Danish royal and episcopal centre, and the burial place of its kings']],
  ['house-of-estridsen', 'locations', ['Roskilde', 'location', 'roskilde',
    'Where the dynasty\'s kings were buried']],

  // The Shroud's documented history begins at Lirey in the 1350s. The link from
  // 1204 is a hypothesis and the label says so — the Mandylion of Constantinople
  // disappears in the sack, and one line of argument connects the two. It is
  // contested and the archive is not endorsing it, only pointing at it.
  ['siege-of-constantinople-1204', 'artifacts', ['Shroud of Turin', 'artifact', 'shroud-of-turin',
    'Connected to the relics lost in the sack by one contested line of argument']]
]

let added = 0
for (const [hostId, bucket, [title, type, slug, label]] of LINKS) {
  const host = index.get(hostId)
  if (!host) { console.warn(`! missing host ${hostId}`); continue }
  if (!index.get(slug)) { console.warn(`! missing target ${slug}`); continue }
  host.relatedEntries ??= {}
  host.relatedEntries[bucket] ??= []
  if (host.relatedEntries[bucket].some((x) => x.slug === slug)) continue
  host.relatedEntries[bucket].push({ title, type, slug, label })
  added++
  console.log(`${hostId} -> ${slug}`)
}

console.log(`\n${added} cross-link(s) added.`)

writeFileSync(dataPath, JSON.stringify(data, null, 2))
