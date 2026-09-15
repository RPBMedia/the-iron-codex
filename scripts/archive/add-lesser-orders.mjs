// M4: lesser / regional military orders, chosen for solid historicity and clean
// ties into the existing orders — the Order of St Thomas of Acre (the one English
// military order), the Order of Montjoy / Montegaudio (absorbed by the Templars,
// its remnant by Calatrava), and the Order of San Jorge de Alfama (absorbed by
// Montesa). Idempotent upsert. Reuses richard-the-lionheart, saladin,
// ferdinand-ii-of-aragon, battle-of-hattin, kingdom-of-jerusalem, al-andalus,
// kingdom-of-aragon, and the relevant orders.
import { readFileSync, writeFileSync } from 'node:fs'

const dataPath = new URL('../server/data/history.json', import.meta.url)
const data = JSON.parse(readFileSync(dataPath, 'utf8'))
if (!Array.isArray(data.orders)) data.orders = []

const per = (slug, title, label) => ({ title, type: 'person', slug, label })
const loc = (slug, title, label) => ({ title, type: 'location', slug, label })
const evt = (slug, title, label) => ({ title, type: 'event', slug, label })
const ord = (slug, title, label) => ({ title, type: 'order', slug, label })

const stThomas = {
  id: 'order-of-st-thomas-of-acre',
  type: 'order',
  name: 'Order of St Thomas of Acre',
  aliases: [
    'The Order of St Thomas of Acre', 'Order of Saint Thomas of Acre',
    'Order of St Thomas of Canterbury', 'Knights of St Thomas', 'Order of St Thomas the Martyr'
  ],
  originYear: 1191,
  image: "https://upload.wikimedia.org/wikipedia/commons/c/c6/Figures_pour_l%27Histoire_des_ordres_monastiques%2C_religieux_et_militaires..._-_du_P%C3%A8re_Helyot_-_btv1b84547218_%28237_of_245%29.jpg",
  imageInfo: {
    caption: 'A knight of the Order of St Thomas of Acre, engraved for Hélyot’s history of the religious and military orders.',
    source: 'Wikimedia Commons',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Figures_pour_l'Histoire_des_ordres_monastiques,_religieux_et_militaires..._-_du_P%C3%A8re_Helyot_-_btv1b84547218_(237_of_245).jpg",
    note: 'A later costume plate; no contemporary portrait of the order’s habit survives.'
  },
  sigilImage: 'https://upload.wikimedia.org/wikipedia/commons/6/6c/Order_of_St_Thomas_of_Acre_cross.svg',
  sigilImageInfo: {
    caption: 'The red cross of the Order of St Thomas of Acre.',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Order_of_St_Thomas_of_Acre_cross.svg',
    note: 'The order honoured the martyred archbishop Thomas Becket.'
  },
  summary:
    'The Order of St Thomas of Acre was the only English military order — a small brotherhood founded during the Third Crusade to bury and care for English crusaders and dedicated to St Thomas Becket. Never a major fighting force, it outlived the Holy Land as a religious and charitable order in London until the Reformation.',
  founded: 'c. 1191, Acre',
  recognized: 'Militarised c. 1228',
  dissolved: '1538 (Dissolution of the Monasteries)',
  allegiance: 'The English crown and the Papacy',
  headquarters: 'Acre → Cyprus → London (Cheapside)',
  habit: 'White mantle with a red cross',
  patron: 'St Thomas Becket of Canterbury',
  purpose:
    'The order began to bury the English dead and tend the sick at the siege of Acre, then took on a military role defending the Crusader states. In England it returned to charity and prayer, keeping the cult of St Thomas at the heart of the City of London.',
  keyStats: [
    { label: 'Founded', value: 'c. 1191, at the siege of Acre' },
    { label: 'Distinction', value: 'The only English military order' },
    { label: 'Patron', value: 'St Thomas Becket' },
    { label: 'End', value: 'Dissolved with the English monasteries, 1538' }
  ],
  contentSections: [
    { title: 'Overview', paragraphs: [
      'The Order of St Thomas of Acre holds a singular place among the military orders: it was the only one founded by, and for, the English. It grew out of the miseries of the Third Crusade, when English crusaders at the siege of Acre needed men to bury their dead and care for their sick.',
      'Dedicated to the recently martyred Thomas Becket, it never rivalled the great orders in arms or wealth, but it endured — first in the Holy Land, then on Cyprus, and finally in the City of London, where it survived as a religious house until Henry VIII dissolved it.'
    ] },
    { title: 'From burial guild to military order', paragraphs: [
      'The brotherhood was organised at Acre around 1191, in the camp of the Third Crusade, as a hospital and burial confraternity for the English. It took as its patron St Thomas Becket, the archbishop murdered in Canterbury Cathedral in 1170 and canonised soon after.',
      'Around 1228 the bishop of Winchester, Peter des Roches, reorganised it as a military order on the model of the Teutonic Knights, giving it a rule and a fighting role. Even so it remained small, dependent on English patronage and never fielding more than a modest force.'
    ] },
    { title: 'From Acre to London', paragraphs: [
      'When Acre fell in 1291 the order, like the greater ones, withdrew to Cyprus. But its centre of gravity had always been England, and its chief house stood in Cheapside, in the City of London, on a site associated with Becket’s birthplace.',
      'There it gradually shed its military character and lived as a religious and charitable order, closely tied to the City and its merchants. Its London church and hospital kept the cult of St Thomas at the commercial heart of the kingdom.'
    ] },
    { title: 'Dissolution and legacy', paragraphs: [
      'The order’s English life ended with the Reformation: it was suppressed in 1538 during Henry VIII’s dissolution of the monasteries, and its London property passed, in time, to the Mercers’ Company, which still occupies the site.',
      'Small as it was, the order is a reminder that the crusading impulse touched every corner of Latin Christendom — and that England, too, raised its own brotherhood of warrior-monks under the sign of its martyred saint.'
    ] }
  ],
  strongholds: [
    { name: 'Acre', period: 'c. 1191–1291', note: 'The crusader city where the order was born.' },
    { name: 'Nicosia, Cyprus', period: 'after 1291', note: 'Refuge after the loss of the Holy Land.' },
    { name: 'London (Cheapside)', period: 'medieval', note: 'The order’s chief house, later held by the Mercers’ Company.' }
  ],
  timeline: [
    { date: 'c. 1191', title: 'Founded at Acre', description: 'English crusaders form a hospital and burial confraternity dedicated to St Thomas Becket.' },
    { date: 'c. 1228', title: 'Made a military order', description: 'Peter des Roches of Winchester reorganises it on the Teutonic model.' },
    { date: '1291', title: 'Fall of Acre', description: 'The order withdraws to Cyprus as the Holy Land is lost.' },
    { date: '1538', title: 'Dissolution', description: 'Henry VIII suppresses the order; its London site passes to the Mercers.' }
  ],
  myths: [
    { claim: 'St Thomas of Acre was a major crusading order like the Templars.', reality: 'It was always small and only briefly military; its lasting life was as an English religious and charitable house.' }
  ],
  sources: [
    { title: 'The Knights of St Thomas of Acon', author: 'A. J. Forey', year: '1977 (article)' },
    { title: 'The Military Orders (essay collections)', author: 'ed. Malcolm Barber and others', year: '' }
  ],
  relatedEntries: {
    people: [
      per('richard-the-lionheart', 'Richard the Lionheart', 'Led the English at the siege of Acre'),
      per('saladin', 'Saladin', 'The adversary at Acre and Hattin')
    ],
    locations: [
      loc('kingdom-of-jerusalem', 'Kingdom of Jerusalem', 'The Crusader state it served')
    ],
    orders: [
      ord('knights-templar', 'Knights Templar', 'The great order alongside it at Acre'),
      ord('knights-hospitaller', 'Knights Hospitaller', 'The other Acre-based order')
    ]
  }
}

const montjoy = {
  id: 'order-of-montjoy',
  type: 'order',
  name: 'Order of Montjoy',
  aliases: [
    'The Order of Montjoy', 'Order of Montegaudio', 'Order of Mountjoy', 'Orden de Montegaudio',
    'Knights of Montjoy', 'Order of the Holy Redeemer of Montjoy'
  ],
  originYear: 1173,
  image: 'https://upload.wikimedia.org/wikipedia/commons/0/07/Escudo_de_la_orden_militar_de_Montegaudio-Santo_Redentor.jpg',
  imageInfo: {
    caption: 'Arms of the Order of Montegaudio (Montjoy), the Holy Redeemer.',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Escudo_de_la_orden_militar_de_Montegaudio-Santo_Redentor.jpg',
    note: 'A short-lived order that straddled the Holy Land and Iberia.'
  },
  sigilImage: 'https://upload.wikimedia.org/wikipedia/commons/b/b3/Cross_of_order_of_mountjoy.svg',
  sigilImageInfo: {
    caption: 'The red star-cross of the Order of Montjoy.',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Cross_of_order_of_mountjoy.svg',
    note: 'Named for Montjoie, the hill from which pilgrims first glimpsed Jerusalem.'
  },
  summary:
    'The Order of Montjoy was a short-lived Cistercian military order founded around 1173 by a disaffected Castilian noble, straddling the Holy Land and Iberia. Chronically short of men and money, it was absorbed by the Templars in 1188, and its Spanish remnant was folded into Calatrava — a small order remembered mainly for how quickly the great ones swallowed it.',
  founded: 'c. 1173, Kingdom of Jerusalem',
  recognized: 'Papal confirmation, 1180',
  dissolved: '1188 (into the Templars); Iberian remnant into Calatrava, 1221',
  allegiance: 'The Papacy; the Cistercians',
  headquarters: 'Montjoie (near Jerusalem) and Montfragüe (Castile)',
  habit: 'White mantle with a red-and-white star-cross',
  patron: 'The Holy Redeemer and the Virgin Mary',
  purpose:
    'The order was founded to fight for the Kingdom of Jerusalem and, through its Iberian estates, to share in the Reconquista — but it never had the resources to sustain either front for long.',
  keyStats: [
    { label: 'Founded', value: 'c. 1173, in the Holy Land' },
    { label: 'Founder', value: 'Rodrigo Álvarez de Sarria, ex-knight of Santiago' },
    { label: 'Emblem', value: 'A red-and-white star-cross' },
    { label: 'End', value: 'Absorbed by the Templars (1188), then Calatrava' }
  ],
  contentSections: [
    { title: 'Overview', paragraphs: [
      'The Order of Montjoy — Montegaudio in Spanish — was one of the many small military orders that flickered briefly in the 12th century before being absorbed by the giants. Founded by a Castilian count who had fallen out with the Order of Santiago, it tried to hold ground on two crusading fronts at once, in the Holy Land and in Iberia.',
      'It took its name from Montjoie, the hill north of Jerusalem from which pilgrims caught their first sight of the holy city. But it was always too poor and too few to matter, and within fifteen years it had ceased to exist as an independent order.'
    ] },
    { title: 'Two fronts, too few men', paragraphs: [
      'Around 1173 Count Rodrigo Álvarez de Sarria, a former knight of Santiago, founded the order with Cistercian backing and estates in both the Latin East and Castile. The pope confirmed it in 1180, and it built a base at Montfragüe on the Tagus in Extremadura.',
      'The problem was arithmetic: the order never attracted enough knights or endowments to garrison the Holy Land and the Iberian frontier at the same time. Its handful of brothers were spread far too thin to make a difference on either front.'
    ] },
    { title: 'Swallowed by the great orders', paragraphs: [
      'The disaster of 1187, when Saladin destroyed the army of Jerusalem at the Battle of Hattin and took the holy city, was the end of Montjoy’s eastern hopes. In 1188 the order was merged into the Knights Templar.',
      'Its Iberian remnant clung on at Montfragüe for a generation before being absorbed, around 1221, into the Order of Calatrava. Montjoy’s brief career shows how hard it was for a minor order to survive between the Templars, the Hospitallers, and the great Spanish orders.'
    ] }
  ],
  grandMasters: [
    { name: 'Rodrigo Álvarez de Sarria', term: 'c. 1173–1187', note: 'Founder and first master; a former knight of Santiago.' }
  ],
  battles: [
    { slug: 'battle-of-hattin', name: 'Hattin', date: '4 Jul 1187', role: 'The collapse of the Kingdom of Jerusalem ends the order’s eastern role.', opponent: 'Saladin (Ayyubids)', outcome: 'Catastrophic defeat' }
  ],
  strongholds: [
    { name: 'Montfragüe', period: 'c. 1180–1221', note: 'The order’s castle on the Tagus in Extremadura.' },
    { name: 'Ascalon region', period: '1170s–1180s', note: 'Holdings in the Kingdom of Jerusalem before 1187.' }
  ],
  timeline: [
    { date: 'c. 1173', title: 'Foundation', description: 'Rodrigo Álvarez de Sarria founds the order in the Holy Land, with Iberian estates.' },
    { date: '1180', title: 'Papal confirmation', description: 'The order is recognised under a Cistercian rule.' },
    { date: '1187', title: 'Hattin', description: 'The fall of Jerusalem ends the order’s prospects in the East.' },
    { date: '1188', title: 'Merged into the Templars', description: 'The order is absorbed by the Knights Templar.' },
    { date: 'c. 1221', title: 'Remnant into Calatrava', description: 'The Iberian brothers at Montfragüe join the Order of Calatrava.' }
  ],
  myths: [
    { claim: 'Montjoy was a lasting Spanish order.', reality: 'It survived barely fifteen years as an independent order before the Templars and then Calatrava absorbed it.' }
  ],
  sources: [
    { title: 'The Military Orders in the Latin East and Iberia', author: 'A. J. Forey', year: '' },
    { title: 'The Reconquest of Spain', author: 'Derek W. Lomax', year: '1978' }
  ],
  relatedEntries: {
    people: [
      per('saladin', 'Saladin', 'Whose victory at Hattin ended the order’s eastern role')
    ],
    locations: [
      loc('kingdom-of-jerusalem', 'Kingdom of Jerusalem', 'One of the order’s two fronts'),
      loc('al-andalus', 'Al-Andalus', 'The Iberian frontier of its Montfragüe estates')
    ],
    orders: [
      ord('knights-templar', 'Knights Templar', 'Absorbed the order in 1188'),
      ord('order-of-calatrava', 'Order of Calatrava', 'Absorbed its Iberian remnant')
    ]
  }
}

const alfama = {
  id: 'order-of-san-jorge-de-alfama',
  type: 'order',
  name: 'Order of San Jorge de Alfama',
  aliases: [
    'The Order of San Jorge de Alfama', 'Order of Saint George of Alfama', 'Order of Sant Jordi d’Alfama',
    'Orde de Sant Jordi d’Alfama', 'Knights of St George of Alfama'
  ],
  originYear: 1201,
  image: "https://upload.wikimedia.org/wikipedia/commons/2/23/Torre_de_Sant_Jordi_d%27Alfama.jpg",
  imageInfo: {
    caption: 'The tower of Sant Jordi d’Alfama on the Catalan coast, the order’s remote seat.',
    source: 'Wikimedia Commons',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Torre_de_Sant_Jordi_d'Alfama.jpg",
    note: 'A lonely coastal fortress between the Ebro delta and Tarragona.'
  },
  sigilImage: "https://upload.wikimedia.org/wikipedia/commons/b/bc/St_George%27s_Cross.svg",
  sigilImageInfo: {
    caption: 'The red cross of St George, the order’s emblem.',
    source: 'Wikimedia Commons',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:St_George's_Cross.svg",
    note: 'The order carried this cross into the Order of Montesa when the two merged.'
  },
  summary:
    'The Order of San Jorge de Alfama was a small Catalan-Aragonese order founded in 1201 to guard a stretch of desolate coast against Muslim raiders and pirates. Chronically poor, it was united with the Order of Montesa in 1400, carrying the red cross of St George into that larger order.',
  founded: '1201, Crown of Aragon',
  recognized: 'Founded by King Peter II of Aragon',
  dissolved: '1400 (united with the Order of Montesa)',
  allegiance: 'The crown of Aragon',
  headquarters: 'Sant Jordi d’Alfama, on the Catalan coast',
  habit: 'White mantle with the red cross of St George',
  patron: 'St George',
  purpose:
    'The order was founded to hold and defend a bleak, exposed stretch of the Catalan coast — a refuge and watch against the Muslim raiders and corsairs who preyed on Aragonese shipping and shore.',
  keyStats: [
    { label: 'Founded', value: '1201, by Peter II of Aragon' },
    { label: 'Emblem', value: 'The red cross of St George' },
    { label: 'Seat', value: 'The lonely coast of Alfama' },
    { label: 'End', value: 'United with Montesa, 1400' }
  ],
  contentSections: [
    { title: 'Overview', paragraphs: [
      'The Order of San Jorge de Alfama was among the smallest of the Iberian military orders — a Catalan brotherhood founded to garrison one hard, exposed piece of coast under the banner of St George. It never grew large or rich, and its story is one of poverty and endurance rather than conquest.',
      'Its lasting importance is heraldic and institutional: when it merged with the Order of Montesa in 1400, it carried the red cross of St George into that order, where the saint’s cross has been associated with Valencia and Catalonia ever since.'
    ] },
    { title: 'A watch on the coast', paragraphs: [
      'In 1201 King Peter II of Aragon granted the desolate site of Alfama, between the Ebro delta and Tarragona, to a small brotherhood of knights under the patronage of St George. Their task was to hold the coast against the Muslim raiders and pirates who threatened Aragonese shipping.',
      'The place was so barren and dangerous that the order struggled to survive there at all. It never attracted the endowments of the great orders, and its brothers lived close to the edge of viability.'
    ] },
    { title: 'Union with Montesa', paragraphs: [
      'By the end of the 14th century the order was too weak to continue alone. In 1400, by a bull of the Avignon pope Benedict XIII, it was united with the Order of Montesa, the Aragonese heir of the Templars.',
      'Montesa took on Alfama’s red cross of St George — in time combining it with its own — so that the little coastal order lived on inside the larger one. The cross of St George remained the badge of the Aragonese military establishment.'
    ] }
  ],
  strongholds: [
    { name: 'Sant Jordi d’Alfama', period: '1201–1400', note: 'The order’s remote coastal tower and convent.' }
  ],
  timeline: [
    { date: '1201', title: 'Foundation', description: 'Peter II of Aragon grants Alfama to a brotherhood under St George.' },
    { date: '13th–14th c.', title: 'Coastal defence', description: 'The small order guards the shore against raiders, always short of means.' },
    { date: '1400', title: 'Union with Montesa', description: 'Benedict XIII unites the order with Montesa, which adopts its cross of St George.' }
  ],
  myths: [
    { claim: 'The order gave Catalonia its cross of St George.', reality: 'The cult of St George was already widespread; the order carried his cross into Montesa, but the saint’s association with the Crown of Aragon was much broader than one small order.' }
  ],
  sources: [
    { title: 'The Military Orders in Medieval Iberia', author: 'A. J. Forey and others', year: '' },
    { title: 'La orden de San Jorge de Alfama', author: 'Regina Sáinz de la Maza', year: '1990' }
  ],
  relatedEntries: {
    people: [
      per('ferdinand-ii-of-aragon', 'Ferdinand II of Aragon', 'Later king of the crown the order served')
    ],
    locations: [
      loc('kingdom-of-aragon', 'Kingdom of Aragon', 'The crown the order defended'),
      loc('al-andalus', 'Al-Andalus', 'The Muslim power whose raiders it watched for')
    ],
    orders: [
      ord('order-of-montesa', 'Order of Montesa', 'The order it merged into in 1400'),
      ord('knights-hospitaller', 'Knights Hospitaller', 'A great order active in the Crown of Aragon')
    ]
  }
}

const upsert = (arr, e) => {
  const i = arr.findIndex((x) => x.id === e.id)
  if (i >= 0) { arr[i] = e; return 'updated' }
  arr.push(e); return 'added'
}

for (const o of [stThomas, montjoy, alfama]) {
  console.log('orders:', upsert(data.orders, o), o.id)
}
writeFileSync(dataPath, JSON.stringify(data, null, 2))
console.log(`orders collection now has ${data.orders.length}`)
