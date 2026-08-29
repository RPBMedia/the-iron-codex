// Adds the Knights Hospitaller (Order of St John) to the orders collection.
// M1 batch 1. Idempotent upsert by id. Reuses existing anchors:
// raymond-du-puy, saladin, baybars, richard-the-lionheart, guy-of-lusignan,
// battle-of-hattin, battle-of-arsuf, kingdom-of-jerusalem, knights-templar.
import { readFileSync, writeFileSync } from 'node:fs'

const dataPath = new URL('../server/data/history.json', import.meta.url)
const data = JSON.parse(readFileSync(dataPath, 'utf8'))
if (!Array.isArray(data.orders)) data.orders = []

const fp = (file) =>
  `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(file.replace(/ /g, '_'))}`

const per = (slug, title, label) => ({ title, type: 'person', slug, label })
const evt = (slug, title, label) => ({ title, type: 'event', slug, label })
const loc = (slug, title, label) => ({ title, type: 'location', slug, label })
const ord = (slug, title, label) => ({ title, type: 'order', slug, label })

const hospitallers = {
  id: 'knights-hospitaller',
  type: 'order',
  name: 'Knights Hospitaller',
  aliases: [
    'The Knights Hospitaller', 'Hospitallers', 'The Hospitallers', 'Order of St John',
    'Order of Saint John', 'Order of the Hospital', 'Knights of St John',
    'Knights of Saint John', 'Order of St John of Jerusalem', 'Order of Malta', 'Knights of Malta'
  ],
  originYear: 1099,
  image: fp('Krak des Chevaliers 01.jpg'),
  imageInfo: {
    caption: 'Krak des Chevaliers, the great Hospitaller fortress in Syria.',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Krak_des_Chevaliers_01.jpg',
    note: 'Held by the order from 1142 until it fell to Baybars in 1271.'
  },
  sigilImage: fp('Seal of Hospitallers.jpg'),
  sigilImageInfo: {
    caption: 'The seal of the Order of the Hospital of St John of Jerusalem.',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Seal_of_Hospitallers.jpg',
    note: 'The order’s emblem was a plain white cross; the eight-pointed “Maltese” form came later.'
  },
  summary:
    'The Order of St John of Jerusalem began as a hospital for sick and poor pilgrims and became a military order rivalled only by the Templars — nurses and knights at once. Unlike the Templars, it survived the fall of the Holy Land, reinventing itself as the sovereign naval power of Rhodes and later Malta, and it endures today as the Sovereign Military Order of Malta.',

  founded: 'c. 1099, Jerusalem',
  recognized: 'Pie postulatio voluntatis, 1113',
  status: 'Extant — the Sovereign Military Order of Malta',
  allegiance: 'The Papacy (exempt from local bishops)',
  headquarters: 'Jerusalem → Acre → Cyprus → Rhodes',
  habit: 'Black mantle with a white cross',
  patron: 'St John the Baptist',
  purpose:
    'The Hospitallers were founded to shelter and heal sick and destitute pilgrims in Jerusalem, calling the sick “our lords”. As the Crusader states came under threat they took up arms as well, adding the military defence of the Holy Land — and later of the Christian Mediterranean — to their original charitable mission.',

  keyStats: [
    { label: 'Active', value: 'c. 1099 – present (never dissolved)' },
    { label: 'Great castle', value: 'Krak des Chevaliers, held 1142–1271' },
    { label: 'Island state', value: 'Rhodes 1310–1522, then Malta from 1530' },
    { label: 'Rule', value: 'The Rule of Raymond du Puy (mid-12th century)' }
  ],

  contentSections: [
    {
      title: 'Overview',
      paragraphs: [
        'The Knights Hospitaller were unique among the military orders in doing two things at once: running the greatest hospital in the medieval world and fielding an army of warrior-monks. Founded in Jerusalem before the First Crusade to care for sick pilgrims, they militarised in the 12th century and became, alongside the Templars, the backbone of the Crusader states’ defence.',
        'Where the Templars were destroyed, the Hospitallers adapted. After the Holy Land was lost they conquered Rhodes and ruled it as a sovereign order, then moved to Malta, and they survive to this day as the Sovereign Military Order of Malta — the only medieval military order with an unbroken existence.'
      ]
    },
    {
      title: 'Origins',
      paragraphs: [
        'Around 1080, merchants from Amalfi founded a hospital in Jerusalem dedicated to St John the Baptist, to care for poor and sick pilgrims. When the First Crusade took the city in 1099, the hospital and its rector, the Blessed Gerard, won fame and endowments across the new Latin kingdoms.',
        'In 1113 Pope Paschal II recognised the community by the bull Pie postulatio voluntatis, freeing it from local control and placing it under papal protection. At this point it was still a purely charitable brotherhood — the sword came later.'
      ]
    },
    {
      title: 'From hospital to army',
      paragraphs: [
        'Under Raymond du Puy, who led the order from around 1120, the Hospitallers took on a military role, escorting pilgrims and then garrisoning castles against Muslim armies. Raymond gave the order its Rule and reorganised it into a body that could both nurse the sick and wage war.',
        'The dual mission was never dropped. Even at the height of their military power the brothers maintained their great hospital, and the care of the sick remained, in principle, the order’s first purpose.'
      ]
    },
    {
      title: 'Rule, ranks, and the hospital',
      paragraphs: [
        'A Grand Master governed the order for life. Beneath him served knight-brothers of noble blood, sergeant-brothers, and chaplain-brothers, later grouped by language into “langues”. The estates of Europe — organised in priories and commanderies — funded the war in the East.',
        'At the heart of it all stood the hospital in Jerusalem, which could hold up to two thousand patients and treated pilgrims of any faith. The brothers addressed the sick as “our lords the sick”, a reversal of rank that expressed the order’s founding ideal of service.'
      ]
    },
    {
      title: 'Castles and the military machine',
      paragraphs: [
        'The Hospitallers became master castle-builders, holding a chain of fortresses that no local lord could have maintained. The greatest was Krak des Chevaliers, granted in 1142 and rebuilt into the most formidable castle of the age; Margat (Marqab) guarded the northern coast.',
        'These strongholds turned the order into a permanent, professional garrison for the Crusader states — a standing defence in a world where crusading armies came and went with the seasons.'
      ]
    },
    {
      title: 'Wars in the Holy Land',
      paragraphs: [
        'The Hospitallers fought in every great crisis of the Latin East. Their master Roger de Moulins was killed at the skirmish of Cresson in 1187, weeks before the order was annihilated with the Templars at the Battle of Hattin. At the Battle of Arsuf in 1191 it was a Hospitaller charge from the rearguard that broke Saladin’s pursuit and handed Richard the Lionheart his victory.',
        'Disaster returned at La Forbie in 1244, where the order’s field army was destroyed. Baybars took Krak des Chevaliers in 1271, and when Acre fell in 1291 the wounded Grand Master Jean de Villiers was carried aboard ship as the city was overrun. With the mainland gone, the order withdrew to Cyprus.'
      ]
    },
    {
      title: 'Cyprus and the conquest of Rhodes',
      paragraphs: [
        'Exile on Cyprus left the order dependent on a suspicious king and without a purpose of its own. Its answer was audacious: between 1306 and 1310 the Hospitallers conquered the Byzantine island of Rhodes and made it their own sovereign state.',
        'On Rhodes the order became something new — a self-governing power ruling territory and subjects, answerable only to the pope. It absorbed much of the property of the suppressed Templars after 1312, and reinvented itself as a naval force.'
      ]
    },
    {
      title: 'A Mediterranean sea power',
      paragraphs: [
        'From Rhodes the Hospitallers built a fleet of war galleys and turned to the sea, raiding Muslim shipping and defending Christian trade and pilgrims across the eastern Mediterranean. The island’s harbour and the Palace of the Grand Masters became the centre of a small but genuine maritime state.',
        'That naval strength was tested repeatedly. The order beat off a Mamluk assault on Rhodes in 1444 and would later withstand a great Ottoman siege in 1480, holding the island until 1522.'
      ]
    },
    {
      title: 'Hospitallers and Templars',
      paragraphs: [
        'The two great international orders were sister institutions and constant rivals. Both answered only to the pope, both fielded elite cavalry, and their rivalry over precedence, property, and strategy sometimes weakened the Crusader states they defended.',
        'Their fates diverged sharply. When the Templars were suppressed in 1312, much of their wealth was ordered transferred to the Hospitallers — so the survivor inherited a large share of its rival’s estates.'
      ]
    },
    {
      title: 'Legacy',
      paragraphs: [
        'The Hospitallers held Rhodes until an Ottoman siege forced them out in 1522. In 1530 Emperor Charles V granted them Malta, where as the Knights of Malta they won lasting fame defending the island in the Great Siege of 1565.',
        'Expelled from Malta by Napoleon in 1798, the order did not die. It continues today as the Sovereign Military Order of Malta, a Catholic religious order and a sovereign entity under international law, returned to its founding work of medical and humanitarian relief — the medieval hospital outliving every castle it ever built.'
      ]
    }
  ],

  grandMasters: [
    { name: 'Blessed Gerard', term: 'to 1120', note: 'Founder and first rector of the Jerusalem hospital.' },
    { name: 'Raymond du Puy', slug: 'raymond-du-puy', term: 'c. 1120–1160', note: 'Militarised the order and wrote its Rule.' },
    { name: 'Auger de Balben', term: '1160–1162', note: '' },
    { name: 'Arnaud de Comps', term: '1162–1163', note: '' },
    { name: 'Gilbert d’Assailly', term: '1163–1170', note: 'Drove the disastrous invasion of Egypt.' },
    { name: 'Gastone de Murols', term: 'c. 1170–1172', note: '' },
    { name: 'Jobert of Syria', term: '1172–1177', note: '' },
    { name: 'Roger de Moulins', term: '1177–1187', note: 'Killed at the skirmish of Cresson.' },
    { name: 'Ermengol de Aspa', term: '1187–1190', note: 'Provisional master after the Hattin catastrophe.' },
    { name: 'Garnier de Nablus', term: '1190–1192', note: 'Led the decisive charge at Arsuf.' },
    { name: 'Geoffroy de Donjon', term: '1193–1202', note: '' },
    { name: 'Alfonso of Portugal', term: '1203–1206', note: 'A royal prince as master.' },
    { name: 'Geoffroy le Rat', term: '1206–1207', note: '' },
    { name: 'Guérin de Montaigu', term: '1207–1228', note: 'Influential during the Fifth Crusade.' },
    { name: 'Bertrand de Thessy', term: '1228–1231', note: '' },
    { name: 'Guérin', term: '1231–1236', note: '' },
    { name: 'Bertrand de Comps', term: '1236–1240', note: '' },
    { name: 'Pierre de Vieille-Bride', term: '1240–1242', note: '' },
    { name: 'Guillaume de Châteauneuf', term: '1242–1258', note: 'Captured at La Forbie and held for years.' },
    { name: 'Hugues de Revel', term: '1258–1277', note: 'Reformed the order as the Holy Land shrank.' },
    { name: 'Nicolas Lorgne', term: '1277–1284', note: '' },
    { name: 'Jean de Villiers', term: '1284–1294', note: 'Wounded in the fall of Acre in 1291.' },
    { name: 'Odon de Pins', term: '1294–1296', note: '' },
    { name: 'Guillaume de Villaret', term: '1296–1305', note: 'Planned the move to Rhodes.' },
    { name: 'Foulques de Villaret', term: '1305–1319', note: 'Conquered Rhodes and founded the island state.' },
    { name: 'Hélion de Villeneuve', term: '1319–1346', note: 'Organised the order into “langues”.' },
    { name: 'Dieudonné de Gozon', term: '1346–1353', note: 'Of “dragon-slayer” legend on Rhodes.' },
    { name: 'Pierre de Corneillan', term: '1353–1355', note: '' },
    { name: 'Roger de Pins', term: '1355–1365', note: '' },
    { name: 'Raymond Bérenger', term: '1365–1374', note: '' },
    { name: 'Robert de Juilly', term: '1374–1377', note: '' },
    { name: 'Juan Fernández de Heredia', term: '1377–1396', note: 'Scholar-master and patron of learning.' },
    { name: 'Philibert de Naillac', term: '1396–1421', note: 'Fought at Nicopolis; built the Naillac tower.' },
    { name: 'Antonio Fluvian de Riviere', term: '1421–1437', note: 'Strengthened the defences of Rhodes.' },
    { name: 'Jean de Lastic', term: '1437–1454', note: 'Beat off the Mamluk siege of Rhodes in 1444.' }
  ],

  battles: [
    { name: 'Cresson', date: '1 May 1187', role: 'Grand Master Roger de Moulins killed in the rout.', opponent: 'Ayyubids under Saladin', outcome: 'Crusader defeat' },
    { slug: 'battle-of-hattin', name: 'Hattin', date: '4 Jul 1187', role: 'Order destroyed alongside the Templars.', opponent: 'Saladin (Ayyubids)', outcome: 'Catastrophic defeat' },
    { slug: 'battle-of-arsuf', name: 'Arsuf', date: '7 Sep 1191', role: 'Hospitaller rearguard charge broke the pursuit.', opponent: 'Saladin (Ayyubids)', outcome: 'Crusader victory' },
    { name: 'La Forbie', date: '17 Oct 1244', role: 'Field army destroyed; the master captured.', opponent: 'Ayyubid–Khwarezmian army', outcome: 'Catastrophic defeat' },
    { name: 'Krak des Chevaliers', date: '1271', role: 'The great castle surrenders after a siege.', opponent: 'Mamluks under Baybars', outcome: 'Fortress lost' },
    { name: 'Rhodes', date: '1444', role: 'Island fortress holds out against assault.', opponent: 'Mamluk Sultanate', outcome: 'Siege repelled' }
  ],

  strongholds: [
    { name: 'Krak des Chevaliers', period: '1142–1271', note: 'The order’s greatest castle and the finest surviving crusader fortress.' },
    { name: 'Margat (Marqab)', period: '1186–1285', note: 'Black-basalt fortress guarding the northern Syrian coast.' },
    { name: 'Acre', period: '1191–1291', note: 'Headquarters and hospital after the loss of Jerusalem.' },
    { name: 'Rhodes', period: '1310–1522', note: 'The island capital of the sovereign order; the Palace of the Grand Masters.' },
    { name: 'Bodrum Castle (Halicarnassus)', period: 'from 1404', note: 'Mainland Anatolian outpost of the Rhodian knights.' },
    { name: 'Kolossi, Cyprus', period: '14th c.', note: 'Cypriot commandery and centre of the order’s sugar estates.' }
  ],

  timeline: [
    { date: 'c. 1080', title: 'The Amalfitan hospital', description: 'Merchants from Amalfi found a hospital for pilgrims in Jerusalem, dedicated to St John the Baptist.' },
    { date: '1099', title: 'The First Crusade', description: 'Jerusalem is taken; the hospital flourishes under the Blessed Gerard and gains endowments.' },
    { date: '1113', title: 'Papal recognition', description: 'Pope Paschal II confirms the order by the bull Pie postulatio voluntatis.' },
    { date: 'c. 1120–1160', title: 'Militarisation', description: 'Raymond du Puy adds a military role and gives the order its Rule.' },
    { date: '1142', title: 'Krak des Chevaliers', description: 'The count of Tripoli grants the order the great frontier castle.' },
    { date: '1187', title: 'Cresson and Hattin', description: 'Roger de Moulins is killed at Cresson; the order is destroyed with the Templars at Hattin.' },
    { date: '1191', title: 'Arsuf', description: 'The Hospitaller charge breaks Saladin’s pursuit; the order settles its headquarters at Acre.' },
    { date: '1271', title: 'Fall of Krak des Chevaliers', description: 'Baybars takes the order’s greatest castle after a siege.' },
    { date: '1291', title: 'Fall of Acre', description: 'The last mainland stronghold falls; the order withdraws to Cyprus.' },
    { date: '1306–1310', title: 'Conquest of Rhodes', description: 'The Hospitallers seize Rhodes and rule it as a sovereign island state.' },
    { date: '1444', title: 'Mamluk siege of Rhodes', description: 'The island fortress beats off a major Egyptian assault.' },
    { date: '1523', title: 'Rhodes to Malta', description: 'After losing Rhodes to the Ottomans in 1522, the order later receives Malta (1530).' }
  ],

  myths: [
    { claim: 'The Hospitallers and the Templars were the same order.', reality: 'They were separate orders — sister institutions and frequent rivals, with different origins and, at first, different missions.' },
    { claim: 'They were only nurses, or only knights.', reality: 'Uniquely, they were both: the order ran the greatest hospital of the age and fielded an elite army at the same time.' },
    { claim: 'The Knights of Malta died out long ago.', reality: 'The order survives as the Sovereign Military Order of Malta, a Catholic order and a sovereign subject of international law.' },
    { claim: 'The eight-pointed Maltese cross was always their symbol.', reality: 'The medieval order used a plain white cross; the eight-pointed form and the name “Maltese cross” belong to the later Malta era.' }
  ],

  sources: [
    { title: 'The Knights Hospitaller', author: 'Helen Nicholson', year: '2001' },
    { title: 'The Knights of St John in Jerusalem and Cyprus, c.1050–1310', author: 'Jonathan Riley-Smith', year: '1967' },
    { title: 'Hospitallers: The History of the Order of St John', author: 'Jonathan Riley-Smith', year: '1999' },
    { title: 'The Hospitallers of Rhodes and their Mediterranean World', author: 'Anthony Luttrell', year: '1992' }
  ],

  sectionImages: [
    {
      section: 'Cyprus and the conquest of Rhodes',
      src: fp('Rhodes, Grand Master Palace 02.JPG'),
      caption: 'The Palace of the Grand Masters at Rhodes, seat of the sovereign order.',
      source: 'Wikimedia Commons',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Rhodes,_Grand_Master_Palace_02.JPG'
    }
  ],

  relatedEntries: {
    people: [
      per('raymond-du-puy', 'Raymond du Puy', 'The master who made it a military order'),
      per('saladin', 'Saladin', 'The great adversary in the East'),
      per('baybars', 'Baybars', 'Mamluk sultan who took Krak des Chevaliers and Acre'),
      per('richard-the-lionheart', 'Richard the Lionheart', 'Won Arsuf with the Hospitaller charge'),
      per('guy-of-lusignan', 'Guy of Lusignan', 'King of Jerusalem at Hattin')
    ],
    events: [
      evt('battle-of-hattin', 'Battle of Hattin', '1187 — the order destroyed'),
      evt('battle-of-arsuf', 'Battle of Arsuf', '1191 — the Hospitaller charge')
    ],
    locations: [
      loc('kingdom-of-jerusalem', 'Kingdom of Jerusalem', 'The Crusader state they defended')
    ],
    orders: [
      ord('knights-templar', 'Knights Templar', 'Sister order and rival')
    ]
  }
}

const upsert = (arr, e) => {
  const i = arr.findIndex((x) => x.id === e.id)
  if (i >= 0) { arr[i] = e; return 'updated' }
  arr.push(e); return 'added'
}

const result = upsert(data.orders, hospitallers)
writeFileSync(dataPath, JSON.stringify(data, null, 2))
console.log(`orders: ${result} ${hospitallers.id} (collection now has ${data.orders.length})`)
