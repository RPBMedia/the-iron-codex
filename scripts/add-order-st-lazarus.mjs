// M1 batch 3: the Order of Saint Lazarus of Jerusalem — the leper-knights.
// Idempotent upsert. Reuses baldwin-iv-of-jerusalem (the leper king),
// louis-ix-of-france, saladin, kingdom-of-jerusalem, and the other orders.
import { readFileSync, writeFileSync } from 'node:fs'

const dataPath = new URL('../server/data/history.json', import.meta.url)
const data = JSON.parse(readFileSync(dataPath, 'utf8'))
if (!Array.isArray(data.orders)) data.orders = []

const fp = (file) =>
  `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(file.replace(/ /g, '_'))}`
const per = (slug, title, label) => ({ title, type: 'person', slug, label })
const loc = (slug, title, label) => ({ title, type: 'location', slug, label })
const ord = (slug, title, label) => ({ title, type: 'order', slug, label })

const lazarus = {
  id: 'order-of-saint-lazarus',
  type: 'order',
  name: 'Order of Saint Lazarus',
  aliases: [
    'The Order of Saint Lazarus', 'Order of St Lazarus', 'Order of Saint Lazarus of Jerusalem',
    'Order of St Lazarus of Jerusalem', 'Knights of Saint Lazarus', 'Lazarites', 'Leper Knights'
  ],
  originYear: 1140,
  image: fp('Raising of Lazarus (f. 11r).jpg'),
  imageInfo: {
    caption: 'The Raising of Lazarus, in a medieval illumination — the order took St Lazarus as its patron.',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Raising_of_Lazarus_(f._11r).jpg',
    note: 'The order honoured the leprous Lazarus of the Gospel parable as the patron of lepers.'
  },
  sigilImage: fp('Cross of Saint Lazarus.svg'),
  sigilImageInfo: {
    caption: 'The green cross of the Order of Saint Lazarus.',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Cross_of_Saint_Lazarus.svg',
    note: 'The green cross set the Lazarites apart from the red-cross Templars and white-cross Hospitallers.'
  },
  summary:
    'The Order of Saint Lazarus grew from a leper hospital outside the walls of Jerusalem into the strangest of the military orders: a brotherhood that cared for lepers and received leprous knights from the Templars and Hospitallers into its own ranks. Small and often overlooked, it fought and bled in the Crusader states, then survived in the West as a hospitaller order long after the Holy Land was lost.',

  founded: 'by c. 1140s, Jerusalem (from a leper hospital)',
  recognized: 'Papal protection, 12th century',
  status: 'Contested — continued through French and Savoyard successor orders',
  allegiance: 'The Papacy; later the French and Savoyard crowns',
  headquarters: 'Jerusalem → Acre → Boigny (France)',
  habit: 'Black mantle with a green cross',
  patron: 'St Lazarus, patron of lepers',
  purpose:
    'The order existed first to shelter and nurse lepers — including knights of the other military orders who contracted the disease and could no longer serve elsewhere. From that charitable core it took on a military role in the defence of the Crusader states, uniquely fielding leper-knights alongside its healthy brothers.',

  keyStats: [
    { label: 'Unique trait', value: 'Received leprous knights; long led by a leprous master' },
    { label: 'Emblem', value: 'A green cross' },
    { label: 'Great trial', value: 'La Forbie, 1244 — near-annihilation' },
    { label: 'Western seat', value: 'Boigny, near Orléans' }
  ],

  contentSections: [
    {
      title: 'Overview',
      paragraphs: [
        'Of all the military orders, the Order of St Lazarus was the most unusual. It began as a hospital for lepers outside the walls of Jerusalem and never abandoned that founding purpose, even as it took up arms. Knights of the Templars and Hospitallers who contracted leprosy — a constant danger in the East — were sent to St Lazarus, and for a long time the order was itself led by a leprous master.',
        'It was never large or wealthy, and its records are fragmentary, but it shared in the wars and disasters of the Crusader states before retreating to the West, where its hospitals and commanderies outlived the Kingdom of Jerusalem by centuries.'
      ]
    },
    {
      title: 'The leper hospital of Jerusalem',
      paragraphs: [
        'A hospital dedicated to St Lazarus — the beggar “full of sores” from the Gospel parable, taken as the patron of lepers — stood outside the northern wall of Jerusalem by the first half of the 12th century. It cared for the many lepers of the Latin East, a group both pitied and feared.',
        'Leprosy touched even the throne: Baldwin IV, the “leper king”, ruled Jerusalem while the disease slowly killed him. In such a world a specialised leper order filled a real need, and the house of St Lazarus grew under royal and noble patronage.'
      ]
    },
    {
      title: 'The leper-knights',
      paragraphs: [
        'By the mid-12th century the order had added a military role. Its most striking feature was that leprous brothers — including knights invalided out of the Templars and Hospitallers, whose own rules required them to transfer to St Lazarus — fought in its ranks. For much of the 13th century custom, and then rule, held that the master of the order should himself be a leper.',
        'Only in 1253 did a papal dispensation allow a healthy man to hold the mastership, an acknowledgement that leadership by the dying was no longer workable as the order took on more fighting.'
      ]
    },
    {
      title: 'In the field',
      paragraphs: [
        'The Lazarites fought in the great crises of the Latin East. At the catastrophe of La Forbie in 1244 the order’s contingent — leprous and healthy knights alike — was almost wiped out, and it suffered again during Louis IX’s crusade at the fighting around Mansurah in 1250.',
        'These losses were heavy for so small a body, and each one thinned an order that could never easily replace its knights. When Acre fell in 1291, St Lazarus, like the greater orders, lost its reason for being in the East.'
      ]
    },
    {
      title: 'The move west',
      paragraphs: [
        'The order’s centre of gravity had long lain in Europe, where kings and lords had endowed it with leper-houses and estates. Its chief seat became Boigny, near Orléans, under French royal protection; its principal English house was Burton Lazars in Leicestershire, and it held commanderies in Italy, Germany, Switzerland, and beyond.',
        'In the West the order returned to its first work — running hospitals and leprosaria — while keeping the forms and dignities of a knightly order. Its master at Boigny, Thomas de Sainville, reorganised it around this western base as the East slipped away.'
      ]
    },
    {
      title: 'Decline and afterlife',
      paragraphs: [
        'As leprosy receded in late-medieval Europe, the order’s hospitals lost their purpose and its wealth drew predators. In 1490 Pope Innocent VIII tried to suppress it and hand its property to the Hospitallers; the French branch resisted and survived under the crown’s protection.',
        'The order then splintered along national lines. In Savoy it was united with the Order of St Maurice in 1572 to form the Order of Saints Maurice and Lazarus; in France it was joined to Our Lady of Mount Carmel in 1608. From these threads descend the several bodies that claim the name today — a contested and much-disputed succession.'
      ]
    },
    {
      title: 'Legacy',
      paragraphs: [
        'The medieval Order of St Lazarus left few castles and little treasure, but it embodied something distinctive: a chivalric institution built around care for the sick and a place for knights whom disease had cast out of every other brotherhood.',
        'Its name survives in place-names across Europe — the many “Lazar houses” and “spittals” — and in the modern chivalric and charitable orders, however tangled their claims, that still invoke the green cross of the leper-knights.'
      ]
    }
  ],

  // The medieval master-list is fragmentary; only the best-attested figures are
  // given here, with cautious dating.
  grandMasters: [
    { name: 'Boyant Roger', term: 'fl. c. 1234–1244', note: 'Master at the time of the disaster at La Forbie.' },
    { name: 'Reynald de Flory', term: 'fl. c. 1269', note: 'Master during the last decades in the Holy Land.' },
    { name: 'Thomas de Sainville', term: 'c. 1277–1312', note: 'Reorganised the order around its French seat at Boigny.' },
    { name: 'Adam de Veau', term: 'early 14th c.', note: 'Master of the order at Boigny after the loss of the East.' },
    { name: 'Jean de Paris', term: 'mid-14th c.', note: 'One of the French masters of the western order.' }
  ],

  battles: [
    { name: 'La Forbie', date: '17 Oct 1244', role: 'The order’s knights almost annihilated with the army of Outremer.', opponent: 'Ayyubid–Khwarezmian army', outcome: 'Catastrophic defeat' },
    { name: 'Mansurah', date: '8–11 Feb 1250', role: 'Lazarite brothers lost in Louis IX’s Egyptian crusade.', opponent: 'Ayyubids of Egypt', outcome: 'Crusader defeat' },
    { name: 'Acre (1291)', date: '1291', role: 'The order loses its base with the fall of the last mainland city.', opponent: 'Mamluk Sultanate', outcome: 'Holy Land lost' }
  ],

  strongholds: [
    { name: 'Leper hospital of St Lazarus, Jerusalem', period: '12th c.–1187', note: 'The founding house, outside the northern wall of the city.' },
    { name: 'Acre', period: '13th c.–1291', note: 'Base in the Kingdom of Jerusalem’s last capital.' },
    { name: 'Boigny, near Orléans', period: 'from the late 13th c.', note: 'The western headquarters under French royal protection.' },
    { name: 'Burton Lazars, Leicestershire', period: '12th–16th c.', note: 'The chief house of the order in England.' },
    { name: 'Seedorf & Capua', period: 'medieval', note: 'Commanderies in Switzerland and southern Italy.' }
  ],

  timeline: [
    { date: 'c. 1120s–1140s', title: 'The leper hospital', description: 'A hospital of St Lazarus for lepers is attested outside the walls of Jerusalem.' },
    { date: 'mid-12th c.', title: 'A military role', description: 'The order takes up arms and adopts the green cross, receiving leprous knights from the other orders.' },
    { date: '1244', title: 'La Forbie', description: 'The order’s contingent is almost destroyed alongside the army of the Latin East.' },
    { date: '1253', title: 'A healthy master allowed', description: 'A papal dispensation ends the requirement that the master be a leper.' },
    { date: '1291', title: 'Fall of Acre', description: 'With the Holy Land lost, the order’s weight shifts fully to its western houses.' },
    { date: 'c. 1300', title: 'Reorganised at Boigny', description: 'Thomas de Sainville re-centres the order on its French seat.' },
    { date: '1490', title: 'A threatened suppression', description: 'Innocent VIII tries to merge the order into the Hospitallers; the French branch resists.' },
    { date: '1572', title: 'Saints Maurice and Lazarus', description: 'The Savoyard branch is united with the Order of St Maurice.' },
    { date: '1608', title: 'United with Mount Carmel', description: 'The French branch is joined to Our Lady of Mount Carmel.' }
  ],

  myths: [
    { claim: 'The order simply died out in the Middle Ages.', reality: 'Its French and Savoyard branches continued for centuries; the difficulty is that several modern bodies now contest the succession.' },
    { claim: 'Its patron was Lazarus of Bethany, raised by Christ.', reality: 'The order chiefly honoured the leprous beggar Lazarus of the parable (Luke 16), patron of lepers — though the two Lazaruses were often conflated.' },
    { claim: 'Only lepers could belong to it.', reality: 'Healthy knights, chaplains, and sisters also served; the leprous were received and, for a time, led the order — but never made up all of it.' }
  ],

  sources: [
    { title: 'Leper Knights: The Order of St Lazarus of Jerusalem in England, 1150–1544', author: 'David Marcombe', year: '2003' },
    { title: 'L’ordre de Saint-Lazare de Jérusalem au Moyen Âge', author: 'Rafaël Hyacinthe', year: '2003' },
    { title: 'The Order of St Lazarus and the Crusades', author: 'Malcolm Barber', year: '1994 (article)' }
  ],

  relatedEntries: {
    people: [
      per('baldwin-iv-of-jerusalem', 'Baldwin IV of Jerusalem', 'The “leper king” of the order’s homeland'),
      per('louis-ix-of-france', 'Louis IX of France', 'Led the crusade in which the order bled at Mansurah'),
      per('saladin', 'Saladin', 'The adversary who overran the Kingdom of Jerusalem')
    ],
    locations: [
      loc('kingdom-of-jerusalem', 'Kingdom of Jerusalem', 'The Crusader state it served')
    ],
    orders: [
      ord('knights-templar', 'Knights Templar', 'Sent it their leprous knights'),
      ord('knights-hospitaller', 'Knights Hospitaller', 'The great hospitaller order alongside it')
    ]
  }
}

const upsert = (arr, e) => {
  const i = arr.findIndex((x) => x.id === e.id)
  if (i >= 0) { arr[i] = e; return 'updated' }
  arr.push(e); return 'added'
}

const result = upsert(data.orders, lazarus)
writeFileSync(dataPath, JSON.stringify(data, null, 2))
console.log(`orders: ${result} ${lazarus.id} (collection now has ${data.orders.length})`)
