// M1 batch 2: re-home the Teutonic Order from a mis-modelled `location` into the
// new `orders` collection, UPGRADING it to the rich order format while preserving
// its existing prose (contentSections, timeline, sources), and atomically
// repointing every relatedEntries reference across the archive from
// location:teutonic-order to order:teutonic-order (moved into an `orders` group).
// Idempotent: safe to re-run.
import { readFileSync, writeFileSync } from 'node:fs'

const dataPath = new URL('../server/data/history.json', import.meta.url)
const data = JSON.parse(readFileSync(dataPath, 'utf8'))
if (!Array.isArray(data.orders)) data.orders = []

const fp = (file) =>
  `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(file.replace(/ /g, '_'))}`
const per = (slug, title, label) => ({ title, type: 'person', slug, label })
const loc = (slug, title, label) => ({ title, type: 'location', slug, label })
const evt = (slug, title, label) => ({ title, type: 'event', slug, label })
const ord = (slug, title, label) => ({ title, type: 'order', slug, label })

// Pull the existing entry from wherever it currently lives (location on first
// run, order on re-run) so we keep its authored prose.
const prev =
  data.locations.find((x) => x.id === 'teutonic-order') ||
  data.orders.find((x) => x.id === 'teutonic-order')
if (!prev) throw new Error('teutonic-order entry not found in locations or orders')

const teutonic = {
  id: 'teutonic-order',
  type: 'order',
  name: 'Teutonic Order',
  aliases: [
    'The Teutonic Order', 'Teutonic Knights', 'The Teutonic Knights',
    'Order of the Teutonic Knights', 'Order of the German House of Saint Mary in Jerusalem',
    'German Order', 'Deutscher Orden'
  ],
  originYear: 1190,
  image: fp('Castillo de Malbork, Polonia, 2013-05-19, DD 13.jpg'),
  imageInfo: {
    caption: 'Marienburg (Malbork), the brick-Gothic capital of the Teutonic Order’s monastic state.',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Castillo_de_Malbork,_Polonia,_2013-05-19,_DD_13.jpg',
    note: 'The largest brick castle in the world; the Grand Masters’ seat from 1309.'
  },
  sigilImage: fp('Siegel Grossmeister Deutschritterorden.jpg'),
  sigilImageInfo: {
    caption: 'The seal of the Grand Master of the Teutonic Order.',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Siegel_Grossmeister_Deutschritterorden.jpg',
    note: 'The order’s sign was a black cross on a white mantle.'
  },
  summary: prev.summary,

  founded: '1190 (hospital); militarised 1198, Acre',
  recognized: 'Papal charter, 1198',
  status: 'Extant as a Catholic religious order (the monastic state ended in 1525)',
  allegiance: 'The Papacy and the Holy Roman Empire',
  headquarters: 'Acre → Venice → Marienburg → Königsberg',
  habit: 'White mantle with a black cross',
  patron: 'The Virgin Mary',
  purpose:
    'Born as a field hospital for German crusaders at the siege of Acre, the order became a crusading brotherhood that conquered pagan Prussia and built its own monastic state on the Baltic. Its defining work was the reisen — perpetual holy war against the pagan Lithuanians — governed from brick fortresses like Marienburg.',

  keyStats: [
    { label: 'Active', value: '1190 – present (monastic state 1226–1525)' },
    { label: 'Capital', value: 'Marienburg (Malbork), from 1309' },
    { label: 'Defining war', value: 'The reisen against pagan Lithuania' },
    { label: 'Turning point', value: 'Grunwald, 1410' }
  ],

  // Preserve the authored prose and chronology as-is.
  knownFor: prev.knownFor,
  contentSections: prev.contentSections,
  timeline: prev.timeline,
  sources: prev.sources,

  sectionImages: [
    {
      section: 'The Ordensstaat at its height',
      src: 'https://upload.wikimedia.org/wikipedia/commons/6/69/Deutscher_Orden_1410.png',
      caption: 'The Teutonic Order’s Baltic state at its height, c. 1410.',
      source: 'Wikimedia Commons',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Deutscher_Orden_1410.png'
    }
  ],

  grandMasters: [
    { name: 'Heinrich Walpot von Bassenheim', term: 'c. 1198–1200', note: 'First Grand Master of the militarised order.' },
    { name: 'Otto von Kerpen', term: '1200–1208', note: '' },
    { name: 'Heinrich von Tunna', term: '1208–1209', note: '' },
    { name: 'Hermann von Salza', slug: 'hermann-von-salza', term: '1210–1239', note: 'Diplomat-founder of the Baltic project; won the Golden Bull of Rimini.' },
    { name: 'Conrad of Thuringia', term: '1239–1240', note: '' },
    { name: 'Gerhard von Malberg', term: '1240–1244', note: '' },
    { name: 'Heinrich von Hohenlohe', term: '1244–1249', note: 'Oversaw the Treaty of Christburg with the Prussians.' },
    { name: 'Günther von Wüllersleben', term: '1249–1252', note: '' },
    { name: 'Poppo von Osterna', term: '1252–1256', note: '' },
    { name: 'Anno von Sangershausen', term: '1256–1273', note: 'Held the order together through the great Prussian revolt.' },
    { name: 'Hartmann von Heldrungen', term: '1273–1282', note: 'Formalised the union with Livonia.' },
    { name: 'Burchard von Schwanden', term: '1283–1290', note: 'Resigned on the eve of the fall of Acre.' },
    { name: 'Konrad von Feuchtwangen', term: '1291–1296', note: 'Led the order out of the lost Holy Land.' },
    { name: 'Gottfried von Hohenlohe', term: '1297–1303', note: '' },
    { name: 'Siegfried von Feuchtwangen', term: '1303–1311', note: 'Moved the headquarters to Marienburg in 1309.' },
    { name: 'Karl von Trier', term: '1311–1324', note: '' },
    { name: 'Werner von Orseln', term: '1324–1330', note: 'Assassinated by a brother knight.' },
    { name: 'Luther von Braunschweig', term: '1331–1335', note: 'Patron of the order’s literary culture.' },
    { name: 'Dietrich von Altenburg', term: '1335–1341', note: 'Great builder of Marienburg.' },
    { name: 'Ludolf König', term: '1342–1345', note: '' },
    { name: 'Heinrich Dusemer', term: '1345–1351', note: 'Beat Lithuania at the river Strėva in 1348.' },
    { name: 'Winrich von Kniprode', term: '1352–1382', note: 'The golden age’s master; victor at Rudau.' },
    { name: 'Konrad Zöllner von Rotenstein', term: '1382–1390', note: '' },
    { name: 'Konrad von Wallenrode', term: '1391–1393', note: '' },
    { name: 'Konrad von Jungingen', term: '1393–1407', note: 'Presided over the state at its economic peak.' },
    { name: 'Ulrich von Jungingen', slug: 'ulrich-von-jungingen', term: '1407–1410', note: 'Killed leading the army at Grunwald.' },
    { name: 'Heinrich von Plauen', term: '1410–1413', note: 'Saved Marienburg after Grunwald; later deposed.' },
    { name: 'Michael Küchmeister', term: '1414–1422', note: '' },
    { name: 'Paul von Rusdorf', term: '1422–1441', note: '' },
    { name: 'Konrad von Erlichshausen', term: '1441–1449', note: '' },
    { name: 'Ludwig von Erlichshausen', term: '1450–1467', note: 'Lost the Thirteen Years’ War and Marienburg itself.' },
    { name: 'Albert of Brandenburg-Ansbach', term: '1510–1525', note: 'Last Prussian master; secularised the state as a Lutheran duchy.' }
  ],

  battles: [
    { name: 'Saule', date: '22 Sep 1236', role: 'The Livonian Sword-Brothers destroyed; survivors merge into the order.', opponent: 'Samogitians & Semigallians', outcome: 'Catastrophic defeat' },
    { name: 'Lake Peipus (Battle on the Ice)', date: '5 Apr 1242', role: 'The Livonian branch beaten on the frozen lake.', opponent: 'Novgorod under Alexander Nevsky', outcome: 'Defeat' },
    { name: 'Durbe', date: '13 Jul 1260', role: 'A great Livonian defeat that sparked the second Prussian revolt.', opponent: 'Samogitians', outcome: 'Catastrophic defeat' },
    { name: 'Rudau', date: '17 Feb 1370', role: 'Kniprode’s victory at the height of the golden age.', opponent: 'Grand Duchy of Lithuania', outcome: 'Order victory' },
    { slug: 'battle-of-grunwald', name: 'Grunwald (Tannenberg)', date: '15 Jul 1410', role: 'The army and the Grand Master destroyed in the field.', opponent: 'Poland–Lithuania under Jagiełło & Vytautas', outcome: 'Catastrophic defeat' }
  ],

  strongholds: [
    { name: 'Acre', period: '1190–1291', note: 'The founding hospital in the Holy Land.' },
    { name: 'Venice', period: '1291–1309', note: 'Interim seat of the Grand Masters after Outremer was lost.' },
    { name: 'Marienburg (Malbork)', period: '1309–1457', note: 'The great brick-Gothic capital of the monastic state.' },
    { name: 'Königsberg', period: 'from 1457', note: 'Seat after Marienburg was pawned away and lost to Poland.' },
    { name: 'Riga & Wenden (Cēsis)', period: '13th–16th c.', note: 'Centres of the semi-autonomous Livonian branch.' },
    { name: 'Thorn, Kulm & Elbing', period: 'from the 1230s', note: 'The Vistula river-towns that anchored the conquest of Prussia.' }
  ],

  myths: [
    { claim: 'Grunwald (1410) destroyed the Teutonic Order.', reality: 'The army and Grand Master fell, but Marienburg held and the state survived another century — ended by the 1466 peace and the 1525 secularisation, not by a single battle.' },
    { claim: 'It was essentially a German-nationalist project against the Slavs.', reality: 'It was a medieval crusading order recruiting across the Empire; the nationalist framing is a 19th–20th-century overlay (the 1914 battle was deliberately named “Tannenberg”).' },
    { claim: 'The order ceased to exist in 1525.', reality: 'The Prussian monastic state ended, but the order itself continues to this day as a Catholic religious and charitable institution.' },
    { claim: 'The “Battle on the Ice” was the order’s decisive defeat.', reality: 'That 1242 clash was fought by the smaller Livonian branch and its scale was heavily mythologised later, above all by Eisenstein’s film.' }
  ],

  relatedEntries: {
    people: [
      per('hermann-von-salza', 'Hermann von Salza', 'Diplomat-founder of the Baltic order'),
      per('ulrich-von-jungingen', 'Ulrich von Jungingen', 'Grand Master killed at Grunwald'),
      per('wladyslaw-ii-jagiello', 'Władysław II Jagiełło', 'Grunwald’s victor'),
      per('vytautas', 'Vytautas', 'The co-commander at Grunwald'),
      per('frederick-ii-holy-roman-emperor', 'Frederick II', 'Imperial patron of the Golden Bull of Rimini')
    ],
    locations: [
      loc('kingdom-of-poland', 'Kingdom of Poland', 'The adversary and final overlord'),
      loc('grand-duchy-of-lithuania', 'Grand Duchy of Lithuania', 'The object of the crusade')
    ],
    events: [
      evt('battle-of-grunwald', 'Battle of Grunwald', '1410 — the order’s great defeat')
    ],
    orders: [
      ord('knights-templar', 'Knights Templar', 'The senior international order'),
      ord('knights-hospitaller', 'Knights Hospitaller', 'Sister order of St John')
    ]
  }
}

// 1) Remove any existing copy from locations, then upsert into orders.
data.locations = data.locations.filter((x) => x.id !== 'teutonic-order')
const oi = data.orders.findIndex((x) => x.id === 'teutonic-order')
if (oi >= 0) data.orders[oi] = teutonic
else data.orders.push(teutonic)

// 2) Repoint every relatedEntries reference to an order id: force type:'order'
// and move it into the entry's `orders` group (out of any other group).
const orderIds = new Set(data.orders.map((o) => o.id))
let repointed = 0
for (const [, arr] of Object.entries(data)) {
  if (!Array.isArray(arr)) continue
  for (const entry of arr) {
    const groups = entry.relatedEntries
    if (!groups || typeof groups !== 'object') continue
    const moved = []
    for (const [g, items] of Object.entries(groups)) {
      if (!Array.isArray(items)) continue
      const keep = []
      for (const it of items) {
        if (it && orderIds.has(it.slug)) {
          if (it.slug === entry.id) continue // never self-link
          moved.push({ ...it, type: 'order' })
        } else {
          keep.push(it)
        }
      }
      if (keep.length !== items.length) {
        if (g === 'orders') { /* handled below */ } else groups[g] = keep
      }
    }
    if (!moved.length) continue
    const existingOrders = Array.isArray(groups.orders) ? groups.orders : []
    const byslug = new Map()
    for (const it of [...existingOrders, ...moved]) {
      if (it.slug === entry.id) continue
      if (!byslug.has(it.slug)) byslug.set(it.slug, { ...it, type: 'order' })
    }
    groups.orders = [...byslug.values()]
    repointed += moved.length
    // Drop any now-empty groups (except keep orders).
    for (const g of Object.keys(groups)) {
      if (g !== 'orders' && Array.isArray(groups[g]) && groups[g].length === 0) delete groups[g]
    }
  }
}

writeFileSync(dataPath, JSON.stringify(data, null, 2))
console.log(`teutonic-order re-homed to orders (collection now ${data.orders.length}); repointed ${repointed} reference(s).`)
