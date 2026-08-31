// M2 batch A: the three great Castilian–Leonese military orders —
// Santiago, Calatrava, and Alcántara. Idempotent upsert by id.
// Reuses Reconquista anchors: alfonso-viii-of-castile, ferdinand-iii-of-castile,
// battle-of-alarcos, battle-of-las-navas-de-tolosa, battle-of-sagrajas,
// kingdom-of-castile, kingdom-of-leon, al-andalus, toledo.
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

const santiago = {
  id: 'order-of-santiago',
  type: 'order',
  name: 'Order of Santiago',
  aliases: [
    'The Order of Santiago', 'Order of St James', 'Order of Saint James of the Sword',
    'Order of Santiago de Compostela', 'Knights of Santiago', 'Orden de Santiago'
  ],
  originYear: 1170,
  image: fp('Uclés - Monasterio de Uclés 02 2015-11-19.jpg'),
  imageInfo: {
    caption: 'The monastery of Uclés, the “Escorial of La Mancha”, chief house of the Order of Santiago.',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Ucl%C3%A9s_-_Monasterio_de_Ucl%C3%A9s_02_2015-11-19.jpg',
    note: 'Uclés was the order’s Castilian headquarters from the late 12th century.'
  },
  sigilImage: fp('Cruz de Santiago.svg'),
  sigilImageInfo: {
    caption: 'The red sword-cross of the Order of Santiago.',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Cruz_de_Santiago.svg',
    note: 'A cross whose lower limb is shaped like a sword, for St James the Moor-slayer.'
  },
  summary:
    'The Order of Santiago was the largest and richest of the Spanish military orders, founded in 1170 to guard the pilgrim roads to Santiago de Compostela and to carry the Reconquista into al-Andalus. Uniquely among the great orders it admitted married knights, and it grew into a vast landed power whose mastership the Catholic Monarchs eventually drew into the crown.',
  founded: '1170, León (Cáceres)',
  recognized: 'Papal bull of Alexander III, 1175',
  status: 'Extant as a Spanish honorific order (crown mastership from 1493)',
  allegiance: 'The crowns of León and Castile; the Papacy',
  headquarters: 'Uclés (Castile) and San Marcos de León',
  habit: 'White mantle with a red sword-cross',
  patron: 'St James the Greater (Santiago)',
  purpose:
    'The order was founded to protect pilgrims travelling to the shrine of St James at Compostela and to fight the Muslims of al-Andalus. To hold and resettle a violent frontier it took the unusual step of admitting married knights, whose families could people the reconquered land.',
  keyStats: [
    { label: 'Founded', value: '1170 — the largest Iberian order' },
    { label: 'Emblem', value: 'A red cross shaped as a sword' },
    { label: 'Unusual rule', value: 'Married knights were admitted' },
    { label: 'Headquarters', value: 'Uclés and San Marcos de León' }
  ],
  contentSections: [
    { title: 'Overview', paragraphs: [
      'The Order of Santiago was the greatest of the Iberian military orders — larger, richer, and more powerful than any of its rivals. It began as a brotherhood pledged to protect pilgrims on the roads to Santiago de Compostela and to wage holy war against al-Andalus, and it ended as one of the mightiest landholders in Spain.',
      'Its distinctive red sword-cross and its patron, St James the Moor-slayer, made it the very emblem of the Reconquista; its wealth made its mastership a prize that kings could not leave in other hands.'
    ] },
    { title: 'Origins on the pilgrim road', paragraphs: [
      'The order took shape around 1170 at Cáceres in León, out of a band of knights who joined with the canons of St Eloy to guard pilgrims on the Camino de Santiago. Pope Alexander III confirmed it in 1175, and kings on both sides of the León–Castile divide showered it with castles and towns.',
      'From the first it served two masters — the shrine of Compostela and the crusading frontier — and its knights moved between escorting pilgrims in the north and raiding the Muslim south.'
    ] },
    { title: 'Married knights and the frontier', paragraphs: [
      'Alone among the great orders, Santiago admitted married men as full brother-knights, with their own rule for conjugal life. The purpose was practical: a married brotherhood could not only fight for the frontier but settle and repopulate it, planting Christian families on reconquered land.',
      'This made the order as much an instrument of colonisation as of war, and helps explain the enormous spread of its estates across New Castile, Extremadura, and Andalusia.'
    ] },
    { title: 'War in the Reconquista', paragraphs: [
      'Santiago’s knights fought in the decisive battles of the Reconquista. They shared in the catastrophe of the Battle of Alarcos in 1195 and in the great Christian victory at the Battle of Las Navas de Tolosa in 1212, which broke Almohad power.',
      'Under its most famous master, Pelay Pérez Correa, the order played a leading part in Ferdinand III’s conquest of Andalusia and Murcia in the mid-13th century, winning vast new lands in the south.'
    ] },
    { title: 'Power, wealth, and the crown', paragraphs: [
      'By the late Middle Ages the mastership of Santiago commanded a fortune and a private army, and it became a pawn in Castile’s civil wars — held by royal favourites such as Álvaro de Luna and contested by the crown itself.',
      'When the last independent master, Alonso de Cárdenas, died in 1493 after the fall of Granada, Ferdinand the Catholic took the mastership into royal hands. In 1523 the papacy formally annexed the Spanish orders’ masterships to the crown for good.'
    ] },
    { title: 'Legacy', paragraphs: [
      'The Order of Santiago survives today as one of Spain’s honorific noble orders, but its true monument is the map: the towns, churches, and castles across half of Spain that carry its sword-cross, and the memory of the Reconquista it did so much to wage.',
      'Its knights included some of the most powerful nobles of medieval Castile, and its wealth, folded into the crown, helped fund the united Spain of the Catholic Monarchs.'
    ] }
  ],
  grandMasters: [
    { name: 'Pedro Fernández de Fuentencalada', term: '1170–1184', note: 'The founding master.' },
    { name: 'Sancho Fernández de Lemus', term: '1186–1195', note: '' },
    { name: 'Gonzalo Ordóñez', term: '1195–1204', note: 'Master through the Alarcos crisis.' },
    { name: 'Fernando González de Marañón', term: '1204–1210', note: '' },
    { name: 'García González de Arauzo', term: '1212–1217', note: 'Master at the time of Las Navas de Tolosa.' },
    { name: 'Pelay Pérez Correa', term: '1242–1275', note: 'Led the order in Ferdinand III’s conquest of Andalusia and Murcia.' },
    { name: 'Lorenzo Suárez de Figueroa', term: '1387–1409', note: 'Rebuilt the order’s power in Castile.' },
    { name: 'Enrique de Aragón', term: '1409–1445', note: 'A royal infante as master.' },
    { name: 'Álvaro de Luna', term: '1445–1453', note: 'The royal favourite; executed by John II of Castile in 1453.' },
    { name: 'Alonso de Cárdenas', term: '1477–1493', note: 'Last independent master; fought in the war of Granada.' }
  ],
  battles: [
    { slug: 'battle-of-alarcos', name: 'Alarcos', date: '18 Jul 1195', role: 'The order’s knights share in the Castilian defeat.', opponent: 'Almohad Caliphate', outcome: 'Christian defeat' },
    { slug: 'battle-of-las-navas-de-tolosa', name: 'Las Navas de Tolosa', date: '16 Jul 1212', role: 'Fought in the great victory that broke the Almohads.', opponent: 'Almohad Caliphate', outcome: 'Christian victory' }
  ],
  strongholds: [
    { name: 'Uclés', period: 'from 1174', note: 'The order’s Castilian headquarters and pantheon of its masters.' },
    { name: 'San Marcos de León', period: 'from the 12th c.', note: 'The great Leonese house of the order.' },
    { name: 'Mérida & Montánchez', period: '13th c.', note: 'Extremaduran seats won in the Reconquista.' },
    { name: 'Segura de la Sierra', period: '13th c.', note: 'Key commandery on the Andalusian frontier.' }
  ],
  timeline: [
    { date: '1170', title: 'Foundation', description: 'Knights at Cáceres bind themselves to guard the pilgrim road and fight al-Andalus.' },
    { date: '1175', title: 'Papal confirmation', description: 'Alexander III recognises the order and its rule.' },
    { date: '1195', title: 'Alarcos', description: 'The order shares in the Castilian disaster against the Almohads.' },
    { date: '1212', title: 'Las Navas de Tolosa', description: 'Santiago fights in the decisive victory of the Reconquista.' },
    { date: '1242–1275', title: 'The age of Pelay Pérez Correa', description: 'The order wins vast estates in Andalusia and Murcia.' },
    { date: '1445', title: 'Álvaro de Luna', description: 'The royal favourite seizes the coveted mastership.' },
    { date: '1493', title: 'The crown takes over', description: 'After Granada, Ferdinand the Catholic assumes the mastership.' }
  ],
  myths: [
    { claim: 'The military orders were celibate monks to a man.', reality: 'Santiago admitted married knights with a rule of their own — a deliberate tool for resettling the frontier.' },
    { claim: 'St James the Moor-slayer was a medieval eyewitness tradition.', reality: 'The figure of Santiago Matamoros grew as crusading propaganda; the legend of his appearance in battle is later devotional myth, not report.' }
  ],
  sources: [
    { title: 'The Spanish Military Orders in the Twelfth and Thirteenth Centuries', author: 'Various (ed. surveys)', year: '' },
    { title: 'The Reconquest of Spain', author: 'Derek W. Lomax', year: '1978' },
    { title: 'The Military Orders in Medieval Iberia', author: 'ed. surveys of the Spanish orders', year: '' }
  ],
  relatedEntries: {
    people: [
      per('alfonso-viii-of-castile', 'Alfonso VIII of Castile', 'King at Alarcos and Las Navas'),
      per('ferdinand-iii-of-castile', 'Ferdinand III of Castile', 'Conqueror of Andalusia, whom the order served')
    ],
    events: [
      evt('battle-of-las-navas-de-tolosa', 'Battle of Las Navas de Tolosa', '1212 — the order in the great victory'),
      evt('battle-of-alarcos', 'Battle of Alarcos', '1195 — the order in the great defeat')
    ],
    locations: [
      loc('kingdom-of-castile', 'Kingdom of Castile', 'The order’s chief realm'),
      loc('kingdom-of-leon', 'Kingdom of León', 'Where it was founded')
    ],
    orders: [
      ord('order-of-calatrava', 'Order of Calatrava', 'The first Castilian order'),
      ord('order-of-alcantara', 'Order of Alcántara', 'The Leonese frontier order')
    ]
  }
}

const calatrava = {
  id: 'order-of-calatrava',
  type: 'order',
  name: 'Order of Calatrava',
  aliases: [
    'The Order of Calatrava', 'Knights of Calatrava', 'Orden de Calatrava', 'Order of Calatrava la Nueva'
  ],
  originYear: 1158,
  image: fp('Calatrava la Nueva 3.jpg'),
  imageInfo: {
    caption: 'Calatrava la Nueva, the castle-convent that became the order’s headquarters after 1217.',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Calatrava_la_Nueva_3.jpg',
    note: 'A fortress-monastery on the Andalusian frontier of Castile.'
  },
  sigilImage: fp('Cruz de Calatrava.svg'),
  sigilImageInfo: {
    caption: 'The red cross flory of the Order of Calatrava.',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Cruz_de_Calatrava.svg',
    note: 'A red cross with lily-shaped ends, shared in green by its daughter-orders.'
  },
  summary:
    'The Order of Calatrava was the first military order founded in Spain, created in 1158 to hold a frontier fortress that the Templars had judged indefensible. Cistercian in spirit and Castilian in loyalty, it was nearly destroyed at Alarcos, redeemed at Las Navas de Tolosa, and became the mother-order of Alcántara, Aviz, and Montesa.',
  founded: '1158, Kingdom of Castile',
  recognized: 'Papal confirmation, 1164',
  status: 'Extant as a Spanish honorific order (crown mastership from 1487)',
  allegiance: 'The crown of Castile; the Cistercian Order of Morimond',
  headquarters: 'Calatrava la Vieja → Calatrava la Nueva',
  habit: 'White mantle with a red cross flory',
  patron: 'The Virgin Mary (Cistercian)',
  purpose:
    'The order was founded to garrison and defend the fortress of Calatrava, the key to the Toledo frontier, after the Templars gave it up as untenable. From that single castle it grew into a standing defence of the Castilian frontier against al-Andalus.',
  keyStats: [
    { label: 'Founded', value: '1158 — the first Iberian order' },
    { label: 'Affiliation', value: 'Cistercian (subject to Morimond)' },
    { label: 'Emblem', value: 'A red cross flory' },
    { label: 'Daughter-orders', value: 'Alcántara, Aviz, and Montesa' }
  ],
  contentSections: [
    { title: 'Overview', paragraphs: [
      'Calatrava was the first of the Spanish military orders and the model for the rest. Born to defend a frontier fortress the Templars had abandoned, it fused the discipline of the Cistercians with the mission of holy war, and became a pillar of the Castilian Reconquista.',
      'Its history swings between two battles: the disaster of Alarcos, which nearly ended it, and the triumph of Las Navas de Tolosa, which restored it. From Calatrava sprang a whole family of orders.'
    ] },
    { title: 'A fortress the Templars gave up', paragraphs: [
      'In 1158 the frontier fortress of Calatrava, guarding the road to Toledo, was thought so exposed that the Templars holding it surrendered it back to the king. The abbot Raymond of Fitero and the knight Diego Velázquez offered to defend it with a new brotherhood of Cistercian warrior-monks.',
      'King Sancho III granted them the castle, and the Order of Calatrava was born — the first military order native to Spain, confirmed by the pope in 1164 and tied to the Cistercian abbey of Morimond.'
    ] },
    { title: 'Alarcos and Las Navas', paragraphs: [
      'The order’s darkest hour came at the Battle of Alarcos in 1195, when the Almohads shattered the Castilian army and overran Calatrava itself; the brothers were driven north and the order nearly collapsed.',
      'Redemption came at the Battle of Las Navas de Tolosa in 1212, where Calatrava’s knights fought in the great Christian victory that broke Almohad power. Soon after, the order built a new headquarters, Calatrava la Nueva, deeper toward the frontier.'
    ] },
    { title: 'Mother of orders', paragraphs: [
      'Calatrava’s Cistercian model spread. The Leonese Order of San Julián del Pereiro, which became Alcántara, and the Portuguese Order of Évora, which became Aviz, were affiliated to it, and Calatrava kept rights of visitation over them.',
      'When the Templars were suppressed, the new Order of Montesa in Valencia was likewise placed under Calatrava’s oversight. Through these daughter-orders Calatrava’s rule shaped military monasticism across Iberia.'
    ] },
    { title: 'Decline into the crown', paragraphs: [
      'Like Santiago, Calatrava’s mastership became a prize in Castile’s politics, held by magnates such as Pedro Girón and his son. The last master, García López de Padilla, saw the crown steadily take control.',
      'In 1487 Ferdinand the Catholic assumed the administration of the order, and in 1523 the mastership was permanently annexed to the Spanish crown.'
    ] },
    { title: 'Legacy', paragraphs: [
      'Calatrava left the template for the Spanish military orders and a chain of fortress-monasteries across New Castile. Its ruined headquarters, Calatrava la Nueva, still crowns its hill as one of the great monuments of the Reconquista.',
      'As the parent of Alcántara, Aviz, and Montesa, it stands at the head of a whole Iberian family of military orders.'
    ] }
  ],
  grandMasters: [
    { name: 'García', term: 'c. 1164–1169', note: 'First master of the order.' },
    { name: 'Martín Pérez de Siones', term: '1170–1182', note: '' },
    { name: 'Nuño Pérez de Quiñones', term: '1182–1199', note: 'Master during the Alarcos catastrophe.' },
    { name: 'Ruy Díaz de Yanguas', term: '1199–1212', note: 'Rebuilt the order before Las Navas de Tolosa.' },
    { name: 'Martín Fernández de Andújar', term: '1254–1267', note: '' },
    { name: 'Juan González de Lucena', term: '1267–1284', note: '' },
    { name: 'Pedro Girón', term: '1445–1466', note: 'Powerful royal favourite and magnate.' },
    { name: 'Rodrigo Téllez Girón', term: '1466–1482', note: 'Died young at the siege of Loja.' },
    { name: 'García López de Padilla', term: '1482–1489', note: 'Last independent master before the crown took over.' }
  ],
  battles: [
    { slug: 'battle-of-alarcos', name: 'Alarcos', date: '18 Jul 1195', role: 'Calatrava overrun; the order nearly destroyed.', opponent: 'Almohad Caliphate', outcome: 'Catastrophic defeat' },
    { slug: 'battle-of-las-navas-de-tolosa', name: 'Las Navas de Tolosa', date: '16 Jul 1212', role: 'Fought in the victory that broke Almohad power.', opponent: 'Almohad Caliphate', outcome: 'Christian victory' }
  ],
  strongholds: [
    { name: 'Calatrava la Vieja', period: '1158–1195', note: 'The original frontier fortress that gave the order its name.' },
    { name: 'Calatrava la Nueva', period: 'from 1217', note: 'The great castle-convent headquarters built after Las Navas.' },
    { name: 'Salvatierra', period: '1198–1211', note: 'Refuge and seat during the years after Alarcos.' }
  ],
  timeline: [
    { date: '1158', title: 'Foundation', description: 'Raymond of Fitero’s monks take on the defence of Calatrava for King Sancho III.' },
    { date: '1164', title: 'Papal confirmation', description: 'The order is recognised and affiliated to the Cistercians of Morimond.' },
    { date: '1195', title: 'Alarcos', description: 'The Almohads overrun Calatrava; the order is driven north.' },
    { date: '1212', title: 'Las Navas de Tolosa', description: 'The order shares in the decisive Christian victory.' },
    { date: '1217', title: 'Calatrava la Nueva', description: 'A new fortress-headquarters is built toward the frontier.' },
    { date: '1487', title: 'The crown administers the order', description: 'Ferdinand the Catholic takes over the mastership.' }
  ],
  myths: [
    { claim: 'The military orders were purely soldiers, not monks.', reality: 'Calatrava was formally a Cistercian order under the abbey of Morimond, its knights bound by monastic vows and visitation.' }
  ],
  sources: [
    { title: 'The Reconquest of Spain', author: 'Derek W. Lomax', year: '1978' },
    { title: 'The Rise of the Aragonese-Catalan Empire', author: 'surveys of the Iberian orders', year: '' }
  ],
  relatedEntries: {
    people: [
      per('alfonso-viii-of-castile', 'Alfonso VIII of Castile', 'King at Alarcos and Las Navas'),
      per('ferdinand-iii-of-castile', 'Ferdinand III of Castile', 'The great conqueror the order served')
    ],
    events: [
      evt('battle-of-alarcos', 'Battle of Alarcos', '1195 — Calatrava overrun'),
      evt('battle-of-las-navas-de-tolosa', 'Battle of Las Navas de Tolosa', '1212 — the redemption')
    ],
    locations: [
      loc('kingdom-of-castile', 'Kingdom of Castile', 'The order’s realm'),
      loc('al-andalus', 'Al-Andalus', 'The Muslim frontier it faced')
    ],
    orders: [
      ord('order-of-santiago', 'Order of Santiago', 'The largest Castilian order'),
      ord('order-of-alcantara', 'Order of Alcántara', 'Daughter-order in León'),
      ord('order-of-aviz', 'Order of Aviz', 'Daughter-order in Portugal'),
      ord('order-of-montesa', 'Order of Montesa', 'Daughter-order in Valencia'),
      ord('knights-templar', 'Knights Templar', 'Held Calatrava before the order')
    ]
  }
}

const alcantara = {
  id: 'order-of-alcantara',
  type: 'order',
  name: 'Order of Alcántara',
  aliases: [
    'The Order of Alcántara', 'Knights of Alcántara', 'Orden de Alcántara',
    'Order of San Julián del Pereiro', 'Order of St Julian of Pereiro'
  ],
  originYear: 1176,
  image: fp('Convento de San Benito Alcántara.jpg'),
  imageInfo: {
    caption: 'The Convent of San Benito at Alcántara, the order’s headquarters in Extremadura.',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Convento_de_San_Benito_Alc%C3%A1ntara.jpg',
    note: 'The great convent of the order beside the Tagus in western Spain.'
  },
  sigilImage: fp('Cruz de Alcántara.svg'),
  sigilImageInfo: {
    caption: 'The green cross flory of the Order of Alcántara.',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Cruz_de_Alc%C3%A1ntara.svg',
    note: 'The same lily-ended cross as Calatrava’s, but in green.'
  },
  summary:
    'The Order of Alcántara guarded the Leonese frontier of the Reconquista. It began as the Order of San Julián del Pereiro and took its lasting name when Calatrava handed it the town of Alcántara on the Tagus. A Cistercian daughter-order of Calatrava, it became one of the three great orders whose masterships the Spanish crown absorbed.',
  founded: 'c. 1176, Kingdom of León (as San Julián del Pereiro)',
  recognized: 'Papal confirmation, 1177',
  status: 'Extant as a Spanish honorific order (crown mastership from 1494)',
  allegiance: 'The crown of León and Castile; the Cistercians',
  headquarters: 'Alcántara, on the Tagus',
  habit: 'White mantle with a green cross flory',
  patron: 'St Julian and the Virgin Mary',
  purpose:
    'The order was founded to defend the western, Leonese sector of the frontier with al-Andalus, holding castles along the Tagus and in Extremadura and pushing the Reconquista south into what became western Spain.',
  keyStats: [
    { label: 'Founded', value: 'c. 1176 (as San Julián del Pereiro)' },
    { label: 'Renamed', value: 'Alcántara, after Calatrava ceded it the town in 1218' },
    { label: 'Emblem', value: 'A green cross flory' },
    { label: 'Affiliation', value: 'Cistercian daughter of Calatrava' }
  ],
  contentSections: [
    { title: 'Overview', paragraphs: [
      'The Order of Alcántara was León’s answer to Calatrava — a Cistercian military order raised to defend the western frontier of the Reconquista. Under Calatrava’s tutelage it grew from a small brotherhood at a Leonese hermitage into a great territorial order of Extremadura.',
      'Its green cross became one of the three that dominated the Spanish orders, alongside the red sword-cross of Santiago and the red cross of Calatrava.'
    ] },
    { title: 'From Pereiro to Alcántara', paragraphs: [
      'The order arose around 1176 as the Order of San Julián del Pereiro, a knightly brotherhood on the Leonese frontier, confirmed by the pope the following year. It was affiliated to Calatrava, which held rights of visitation over it.',
      'In 1218 Calatrava, unable to garrison the newly won town of Alcántara on the Tagus, ceded it to the Leonese knights. They moved their headquarters there and took the name by which they have been known ever since.'
    ] },
    { title: 'Guarding the western frontier', paragraphs: [
      'Alcántara’s knights held a chain of castles across Extremadura and pressed the frontier southward, sharing in the great advances of the 13th century that carried Christian arms toward the Guadiana and beyond.',
      'Like its sister-orders it combined the monastic rule of the Cistercians with the life of a frontier garrison, its commanderies both convents and fortresses.'
    ] },
    { title: 'Into the crown', paragraphs: [
      'The mastership of Alcántara, like those of Santiago and Calatrava, became entangled in Castilian politics and coveted by the crown. Its last independent master, Juan de Zúñiga, resigned his office as the Catholic Monarchs gathered the orders in.',
      'From 1494 the crown administered the order, and in 1523 its mastership was permanently annexed to the Spanish crown along with the others.'
    ] },
    { title: 'Legacy', paragraphs: [
      'Alcántara left its green cross across the towns and castles of Extremadura and a great convent by the Roman bridge that gave the order its name. Its estates, folded into the crown, added to the resources of a unifying Spain.',
      'With Santiago and Calatrava it completed the trio of Castilian–Leonese orders that carried the Reconquista to its end.'
    ] }
  ],
  grandMasters: [
    { name: 'Gómez Fernández Barrientos', term: 'c. 1176–1200', note: 'Early master of the order of Pereiro.' },
    { name: 'Nuño Fernández', term: 'early 13th c.', note: 'Master around the move to Alcántara.' },
    { name: 'Pedro Yáñez', term: '1218–1227', note: 'First master seated at Alcántara.' },
    { name: 'Gonzalo Núñez de Guzmán', term: '1385–1388', note: 'Master in the wars with Portugal.' },
    { name: 'Juan de Zúñiga y Pimentel', term: '1479–1494', note: 'Last independent master; humanist patron who resigned to the crown.' }
  ],
  battles: [
    { slug: 'battle-of-las-navas-de-tolosa', name: 'Las Navas de Tolosa', date: '16 Jul 1212', role: 'The Leonese order shares in the great victory.', opponent: 'Almohad Caliphate', outcome: 'Christian victory' }
  ],
  strongholds: [
    { name: 'Alcántara', period: 'from 1218', note: 'The order’s headquarters and convent on the Tagus.' },
    { name: 'San Julián del Pereiro', period: 'from c. 1176', note: 'The original hermitage-fortress in León.' },
    { name: 'Magacela & Zalamea', period: '13th c.', note: 'Extremaduran commanderies won in the Reconquista.' }
  ],
  timeline: [
    { date: 'c. 1176', title: 'Foundation', description: 'The Order of San Julián del Pereiro is formed on the Leonese frontier.' },
    { date: '1177', title: 'Papal confirmation', description: 'The order is recognised and affiliated to Calatrava.' },
    { date: '1218', title: 'The move to Alcántara', description: 'Calatrava cedes the town of Alcántara; the order takes its name.' },
    { date: '1494', title: 'The crown takes over', description: 'Juan de Zúñiga resigns and the crown administers the order.' }
  ],
  myths: [
    { claim: 'Alcántara was fully independent of Calatrava.', reality: 'It was a Cistercian daughter-order over which Calatrava held formal rights of visitation and correction.' }
  ],
  sources: [
    { title: 'The Reconquest of Spain', author: 'Derek W. Lomax', year: '1978' },
    { title: 'Studies of the Iberian military orders', author: 'various', year: '' }
  ],
  relatedEntries: {
    people: [
      per('ferdinand-iii-of-castile', 'Ferdinand III of Castile', 'The conqueror the order served'),
      per('alfonso-viii-of-castile', 'Alfonso VIII of Castile', 'King at Las Navas de Tolosa')
    ],
    events: [
      evt('battle-of-las-navas-de-tolosa', 'Battle of Las Navas de Tolosa', '1212 — the Leonese order in the victory'),
      evt('battle-of-alarcos', 'Battle of Alarcos', '1195 — the Almohad high tide it fought against')
    ],
    locations: [
      loc('kingdom-of-leon', 'Kingdom of León', 'Where the order was founded'),
      loc('kingdom-of-castile', 'Kingdom of Castile', 'The united realm it served')
    ],
    orders: [
      ord('order-of-calatrava', 'Order of Calatrava', 'Its Cistercian mother-order'),
      ord('order-of-santiago', 'Order of Santiago', 'The great Castilian order alongside it')
    ]
  }
}

const upsert = (arr, e) => {
  const i = arr.findIndex((x) => x.id === e.id)
  if (i >= 0) { arr[i] = e; return 'updated' }
  arr.push(e); return 'added'
}

for (const o of [santiago, calatrava, alcantara]) {
  console.log('orders:', upsert(data.orders, o), o.id)
}
writeFileSync(dataPath, JSON.stringify(data, null, 2))
console.log(`orders collection now has ${data.orders.length}`)
