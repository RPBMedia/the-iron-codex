// Adds the Knights Templar as the flagship entry of the new `orders` collection
// (type: "order"). Idempotent upsert by id. Reuses existing anchors
// (hugh-de-payns, jacques-de-molay, bernard-of-clairvaux, saladin,
// guy-of-lusignan, battle-of-hattin, battle-of-arsuf,
// battle-of-las-navas-de-tolosa, kingdom-of-jerusalem, teutonic-order).
import { readFileSync, writeFileSync } from 'node:fs'

const dataPath = new URL('../server/data/history.json', import.meta.url)
const data = JSON.parse(readFileSync(dataPath, 'utf8'))
if (!Array.isArray(data.orders)) data.orders = []

const fp = (file) =>
  `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(file.replace(/ /g, '_'))}`

const per = (slug, title, label) => ({ title, type: 'person', slug, label })
const evt = (slug, title, label) => ({ title, type: 'event', slug, label })
const loc = (slug, title, label) => ({ title, type: 'location', slug, label })

const templars = {
  id: 'knights-templar',
  type: 'order',
  name: 'Knights Templar',
  aliases: [
    'The Knights Templar', 'Templars', 'The Templars', 'Order of the Temple',
    'Poor Fellow-Soldiers of Christ', 'Poor Fellow-Soldiers of Christ and of the Temple of Solomon',
    'Order of the Poor Knights of the Temple', 'Knights of the Temple'
  ],
  originYear: 1119,
  image: fp('Templari Paris.jpg'),
  imageInfo: {
    caption: 'Two Knights Templar, drawn by the chronicler Matthew Paris (13th century).',
    creator: 'Matthew Paris',
    date: 'c. 1250',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Templari_Paris.jpg',
    note: 'The white mantle with the red cross was the order’s battlefield sign.'
  },
  sigilImage: fp('Seal of Templars.jpg'),
  sigilImageInfo: {
    caption: 'The seal of the Knights Templar — two knights sharing a single horse.',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Seal_of_Templars.jpg',
    note: 'The two-riders device was read as a sign of the brothers’ poverty and brotherhood.'
  },
  summary:
    'The Poor Fellow-Soldiers of Christ and of the Temple of Solomon — founded in Jerusalem around 1119 to protect pilgrims — grew into the most famous of the military religious orders: an elite standing army of warrior-monks, a pan-European banking network, and, after 1307, the victims of the most notorious heresy trial of the Middle Ages.',

  // ---- hero fact strip ----
  founded: 'c. 1119, Jerusalem',
  recognized: 'Council of Troyes, 1129',
  dissolved: '1312, Council of Vienne',
  allegiance: 'The Papacy (exempt from local bishops)',
  headquarters: 'Temple Mount, Jerusalem → Acre → Cyprus',
  habit: 'White mantle with a red cross',
  patron: 'The Virgin Mary',

  keyStats: [
    { label: 'Active', value: 'c. 1119 – 1312 (nearly 200 years)' },
    { label: 'Grand Masters', value: '23, from Hugh de Payns to Jacques de Molay' },
    { label: 'At its height', value: 'Estates across Latin Europe and the Levant; c. 15,000–20,000 members, a fraction of them knights' },
    { label: 'Rule', value: 'The Latin Rule (1129), later expanded — Cistercian in spirit' }
  ],

  contentSections: [
    {
      title: 'Overview',
      paragraphs: [
        'The Knights Templar were the first and most celebrated of the medieval military religious orders: brothers who took monastic vows of poverty, chastity, and obedience, yet lived as professional cavalry. For nearly two centuries they were the shock troops of the Crusader states, the guardians of the pilgrim roads, and the trusted bankers of kings and popes.',
        'Their sudden destruction — mass arrests in France on Friday 13 October 1307, followed by torture, forced confessions, and the burning of the last Grand Master, Jacques de Molay, in 1314 — turned an order of soldier-monks into one of the most enduring legends in European history.'
      ]
    },
    {
      title: 'Origins',
      paragraphs: [
        'Around 1119, in the wake of the First Crusade, a French knight named Hugh de Payns and a small band of companions bound themselves to protect Christian pilgrims travelling the dangerous roads to Jerusalem. King Baldwin II gave them quarters in a wing of the royal palace on the Temple Mount — believed to stand on the site of the Temple of Solomon — which gave the order its name.',
        'The turning point came at the Council of Troyes in 1129, where the brotherhood received formal Church recognition and a written rule. The great Cistercian abbot Bernard of Clairvaux championed their cause and wrote In Praise of the New Knighthood, arguing that a monk who killed the enemies of Christ committed no sin but did away with evil — a startling theology of holy violence that gave the order its moral charter.'
      ]
    },
    {
      title: 'Rule and religious life',
      paragraphs: [
        'The Templars followed the Latin Rule, austere and Cistercian in flavour: fixed hours of prayer, communal meals eaten in silence, plain dress, and no private property. Brothers cropped their hair but wore beards; they were forbidden to retreat unless the odds were overwhelming or the banner fell.',
        'Pope Eugenius III granted them the right to wear a red cross on the white mantle around 1147, marking them as men ready for martyrdom. Papal privileges — above all Omne Datum Optimum (1139) — exempted the order from all authority but the pope’s, freed it from tithes, and let it keep its own priests. This independence made the Templars formidable, and in the end helped make them enemies.'
      ]
    },
    {
      title: 'Organisation and ranks',
      paragraphs: [
        'A Grand Master led the order for life, elected by a chapter and bound by its council. Beneath him stood the Seneschal, the Marshal (the chief military officer), the Draper, and regional commanders — the Commander of the Kingdom of Jerusalem, of Tripoli, and of Antioch chief among them.',
        'Membership was layered: knight-brothers of noble birth who fought in white mantles; sergeant-brothers in black or brown who fought and served; chaplain-brothers who provided the liturgy; and a vast body of associates, tenants, and hired troops. Europe was carved into provinces — France, England, Aragon, Portugal, and more — whose estates funded the war in the East.'
      ]
    },
    {
      title: 'The military machine',
      paragraphs: [
        'On the battlefield the Templars were prized as disciplined heavy cavalry. Their Rule governed the charge in detail: brothers held formation, did not break ranks for plunder, and rallied to the piebald banner known as the Baucent. A Templar could not seek ransom and could not flee while the banner still flew — a code that made them terrifying in attack and, at times, recklessly brittle.',
        'They also became the Crusader states’ permanent garrison, holding a chain of castles that no feudal levy could have maintained. Their standing, salaried presence gave the Latin East something close to a professional army in an age of temporary crusading expeditions.'
      ]
    },
    {
      title: 'A financial empire',
      paragraphs: [
        'To move men and money safely between Europe and the Holy Land, the Templars built one of the first international financial networks. A pilgrim could deposit funds at the Temple in Paris or London and withdraw them in Acre against a written note — an early form of letter of credit — while the order managed estates, safeguarded treasure, and lent to the crowned heads of Europe.',
        'The Paris Temple effectively served as the royal treasury of France for a time. This wealth was the sinew of their war effort — and, by the early 1300s, the reason a debt-ridden King Philip IV had every incentive to see the order fall.'
      ]
    },
    {
      title: 'Wars in the Holy Land',
      paragraphs: [
        'The Templars fought in nearly every major campaign of the Crusader states. At Montgisard in 1177 a Templar contingent helped shatter Saladin’s army; at Jacob’s Ford they built and briefly held a frontier castle. Their darkest day was the Battle of Hattin in 1187, where the field army of Jerusalem was destroyed and Saladin had the captured brothers executed — a blow from which the order in the East never fully recovered.',
        'They rebuilt. Templars anchored the vanguard at the Battle of Arsuf in 1191 during Richard the Lionheart’s march, held the great coastal fortress of Château Pèlerin, and bled in the catastrophe at La Forbie (1244) and the fighting at Mansurah (1250). When Acre fell in 1291, the Grand Master Guillaume de Beaujeu died in its defence and the order withdrew to Cyprus, its reason for being suddenly gone.'
      ]
    },
    {
      title: 'Iberia and the wider network',
      paragraphs: [
        'The Holy Land was only one front. In the Iberian Peninsula the Templars joined the Reconquista, holding castles along the frontier with al-Andalus and taking part in the great Christian victory at the Battle of Las Navas de Tolosa in 1212. The kings of Aragon and Portugal endowed them richly; Tomar in Portugal became a Templar stronghold and, later, the seat of their successors.',
        'This dual role — crusading in the East, reconquering in the West — tied the order into the politics of every Latin kingdom and made it a genuinely pan-European institution rather than a purely Levantine one.'
      ]
    },
    {
      title: 'Trial and suppression',
      paragraphs: [
        'With Jerusalem lost, the order’s purpose blurred while its wealth and independence remained. On Friday 13 October 1307, King Philip IV had the Templars in France arrested en masse on charges of heresy, blasphemy, and obscene rites. Under torture many confessed to renouncing Christ and worshipping an idol; most later recanted.',
        'Pope Clement V, pressed by the French crown, examined the brothers at Chinon and eventually dissolved the order at the Council of Vienne in 1312 by the bull Vox in excelso — by administrative decree rather than a verdict of guilt. Jacques de Molay, who retracted his confession, was burned as a relapsed heretic on an island in the Seine in 1314. Legend says he summoned Philip and Clement to God’s judgement within the year; both were dead before it ended.'
      ]
    },
    {
      title: 'Legacy',
      paragraphs: [
        'Most Templar property was transferred to the Knights Hospitaller, but not everywhere. In Portugal the order was reconstituted as the Order of Christ, whose cross later sailed on the ships of Henry the Navigator; in the Crown of Aragon much of it passed to the new Order of Montesa. The brothers themselves were pensioned off, absorbed, or simply vanished from the record.',
        'What did not vanish was the legend. Because they were destroyed by force and rumour rather than defeated in the field, the Templars became a blank screen onto which later ages projected hidden treasure, secret knowledge, and grand conspiracies — a mythology that still outshines the disciplined, deeply conventional monks who actually wore the red cross.'
      ]
    }
  ],

  // ---- 23 Grand Masters (complete series) ----
  grandMasters: [
    { name: 'Hugh de Payns', slug: 'hugh-de-payns', term: 'c. 1119–1136', note: 'Founder and first Grand Master.' },
    { name: 'Robert de Craon', term: '1136–1149', note: 'Secured the great papal privileges.' },
    { name: 'Everard des Barres', term: '1149–1152', note: 'Resigned to become a Cistercian monk.' },
    { name: 'Bernard de Tremelay', term: '1152–1153', note: 'Killed storming Ascalon.' },
    { name: 'André de Montbard', term: '1153–1156', note: 'An uncle of Bernard of Clairvaux.' },
    { name: 'Bertrand de Blanquefort', term: '1156–1169', note: 'Reformed the order after captivity.' },
    { name: 'Philippe de Milly', term: '1169–1171', note: 'A great baron of Outremer before joining.' },
    { name: 'Odo de St Amand', term: '1171–1179', note: 'Died a prisoner of Saladin.' },
    { name: 'Arnold of Torroja', term: '1179–1184', note: 'Died on a diplomatic mission to Europe.' },
    { name: 'Gérard de Ridefort', term: '1185–1189', note: 'Led the order into the disaster at Hattin.' },
    { name: 'Robert de Sablé', term: '1191–1193', note: 'Bought and briefly governed Cyprus.' },
    { name: 'Gilbert Érail', term: '1193–1200', note: 'Rebuilt strength after the Third Crusade.' },
    { name: 'Philippe de Plessis', term: '1201–1209', note: 'Held a fragile truce with the Ayyubids.' },
    { name: 'Guillaume de Chartres', term: '1209–1219', note: 'Died of disease at the siege of Damietta.' },
    { name: 'Pedro de Montaigu', term: '1219–1232', note: 'Led the order through the Fifth Crusade.' },
    { name: 'Armand de Périgord', term: '1232–1244', note: 'Captured or killed at La Forbie.' },
    { name: 'Richard de Bures', term: '1244–1247', note: 'Acting master during a disputed interval.' },
    { name: 'Guillaume de Sonnac', term: '1247–1250', note: 'Mortally wounded at Mansurah.' },
    { name: 'Renaud de Vichiers', term: '1250–1256', note: 'Close ally of Louis IX of France.' },
    { name: 'Thomas Bérard', term: '1256–1273', note: 'Held the order together as the East contracted.' },
    { name: 'Guillaume de Beaujeu', term: '1273–1291', note: 'Died defending Acre in its final siege.' },
    { name: 'Thibaud Gaudin', term: '1291–1292', note: 'Evacuated the order to Cyprus.' },
    { name: 'Jacques de Molay', slug: 'jacques-de-molay', term: '1292–1314', note: 'Last Grand Master; burned as a heretic in 1314.' }
  ],

  // ---- major battles (only Hattin/Arsuf/Las Navas have articles; others are prose-safe names) ----
  battles: [
    { name: 'Montgisard', date: '25 Nov 1177', role: 'Templar charge helped rout Saladin’s army.', opponent: 'Saladin (Ayyubids)', outcome: 'Crusader victory' },
    { slug: 'battle-of-hattin', name: 'Hattin', date: '4 Jul 1187', role: 'Field army destroyed; captured brothers executed.', opponent: 'Saladin (Ayyubids)', outcome: 'Catastrophic defeat' },
    { slug: 'battle-of-arsuf', name: 'Arsuf', date: '7 Sep 1191', role: 'Held the vanguard on Richard I’s coastal march.', opponent: 'Saladin (Ayyubids)', outcome: 'Crusader victory' },
    { slug: 'battle-of-las-navas-de-tolosa', name: 'Las Navas de Tolosa', date: '16 Jul 1212', role: 'Fought in the great Iberian crusading victory.', opponent: 'Almohad Caliphate', outcome: 'Christian victory' },
    { name: 'La Forbie', date: '17 Oct 1244', role: 'Field army annihilated; the master lost.', opponent: 'Ayyubid–Khwarezmian army', outcome: 'Catastrophic defeat' },
    { name: 'Mansurah', date: '8–11 Feb 1250', role: 'Vanguard mauled in the streets of the town.', opponent: 'Ayyubids of Egypt', outcome: 'Crusader defeat' }
  ],

  // ---- headquarters & strongholds ----
  strongholds: [
    { name: 'Temple Mount, Jerusalem', period: '1119–1187', note: 'The royal-palace wing that gave the order its name and identity.' },
    { name: 'Acre', period: '1191–1291', note: 'Headquarters after Jerusalem fell; lost in the great siege of 1291.' },
    { name: 'Château Pèlerin (Atlit)', period: '1218–1291', note: 'Massive coastal fortress; never taken by storm.' },
    { name: 'Tortosa & Arwad', period: 'to 1302', note: 'The order’s last footholds off the Syrian coast.' },
    { name: 'Tomar, Portugal', period: 'from 1160', note: 'Iberian stronghold; later the seat of the Order of Christ.' },
    { name: 'The Paris & London Temples', period: '12th–14th c.', note: 'Fortified treasuries at the heart of the order’s banking network.' }
  ],

  timeline: [
    { date: 'c. 1119', title: 'Foundation in Jerusalem', description: 'Hugh de Payns and a few knights vow to protect pilgrims; King Baldwin II houses them on the Temple Mount.' },
    { date: '1129', title: 'Council of Troyes', description: 'The order wins Church recognition and a written rule, with Bernard of Clairvaux as its great advocate.' },
    { date: '1139', title: 'Omne Datum Optimum', description: 'A papal bull frees the order from all authority but the pope’s and grants sweeping privileges.' },
    { date: 'c. 1147', title: 'The red cross granted', description: 'Pope Eugenius III authorises the red cross on the white mantle.' },
    { date: '1177', title: 'Montgisard', description: 'A Templar contingent helps rout Saladin’s invading army.' },
    { date: '1187', title: 'Disaster at Hattin', description: 'The field army is destroyed and captured Templars are executed by Saladin.' },
    { date: '1191', title: 'Arsuf and the move to Acre', description: 'Templars hold the vanguard at Arsuf; Acre becomes the new headquarters.' },
    { date: '1244', title: 'La Forbie', description: 'The order’s field army is annihilated alongside the barons of Outremer.' },
    { date: '1291', title: 'Fall of Acre', description: 'Grand Master Guillaume de Beaujeu dies in the siege; the order retreats to Cyprus.' },
    { date: '13 Oct 1307', title: 'Mass arrests in France', description: 'Philip IV seizes the French Templars on charges of heresy.' },
    { date: '1312', title: 'Dissolution', description: 'The Council of Vienne suppresses the order by the bull Vox in excelso.' },
    { date: '1314', title: 'Jacques de Molay burned', description: 'The last Grand Master is executed as a relapsed heretic in Paris.' }
  ],

  myths: [
    { claim: 'The Templars guarded the Holy Grail (or the Ark of the Covenant).', reality: 'No medieval source connects them to either. The Grail link comes from later romance and modern fiction, not the order’s records.' },
    { claim: 'They secretly worshipped an idol called Baphomet.', reality: 'The charge appears only in confessions extracted under torture during the 1307–12 trial and is not credited by most historians.' },
    { claim: 'Friday the 13th is unlucky because of the 1307 arrests.', reality: 'The arrests did fall on Friday 13 October 1307, but the superstition is not attested until centuries later; the connection is a modern one.' },
    { claim: 'The Templars became the Freemasons.', reality: 'There is no documented institutional continuity. Masonic “Templar” degrees were invented in the 18th century, four centuries after the order’s end.' },
    { claim: 'A vast Templar treasure was hidden and never found.', reality: 'The crown seized far less than it hoped, but the shortfall reflects debts, running costs, and transfers to the Hospitallers — not a buried hoard.' }
  ],

  sources: [
    { title: 'The New Knighthood: A History of the Order of the Temple', author: 'Malcolm Barber', year: '1994' },
    { title: 'The Trial of the Templars', author: 'Malcolm Barber', year: '2006' },
    { title: 'The Knights Templar: A New History', author: 'Helen Nicholson', year: '2001' },
    { title: 'The Templars: The Rise and Spectacular Fall of God’s Holy Warriors', author: 'Dan Jones', year: '2017' },
    { title: 'In Praise of the New Knighthood (De laude novae militiae)', author: 'Bernard of Clairvaux', year: 'c. 1130 (primary source)' }
  ],

  relatedEntries: {
    people: [
      per('hugh-de-payns', 'Hugh de Payns', 'Founder and first Grand Master'),
      per('jacques-de-molay', 'Jacques de Molay', 'Last Grand Master, burned 1314'),
      per('bernard-of-clairvaux', 'Bernard of Clairvaux', 'Wrote the order’s charter of holy war'),
      per('saladin', 'Saladin', 'The order’s great adversary in the East'),
      per('guy-of-lusignan', 'Guy of Lusignan', 'King of Jerusalem at Hattin')
    ],
    events: [
      evt('battle-of-hattin', 'Battle of Hattin', '1187 — the order’s worst defeat'),
      evt('battle-of-arsuf', 'Battle of Arsuf', '1191 — Templars in the vanguard'),
      evt('battle-of-las-navas-de-tolosa', 'Battle of Las Navas de Tolosa', '1212 — crusading in Iberia')
    ],
    locations: [
      loc('kingdom-of-jerusalem', 'Kingdom of Jerusalem', 'The Crusader state they defended'),
      loc('teutonic-order', 'Teutonic Order', 'A sister military order')
    ]
  }
}

const upsert = (arr, e) => {
  const i = arr.findIndex((x) => x.id === e.id)
  if (i >= 0) { arr[i] = e; return 'updated' }
  arr.push(e); return 'added'
}

const result = upsert(data.orders, templars)
writeFileSync(dataPath, JSON.stringify(data, null, 2))
console.log(`orders: ${result} ${templars.id} (collection now has ${data.orders.length})`)
