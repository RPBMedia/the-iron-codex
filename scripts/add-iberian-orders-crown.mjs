// M2 batch B: the Order of Aviz (Portugal), the Order of Montesa (Aragon), and
// the Order of Christ (Portugal). The last two are the direct heirs of the
// suppressed Templars in the Crown of Aragon and in Portugal. Idempotent upsert.
// Reuses john-i-of-portugal, afonso-i-of-portugal, ferdinand-ii-of-aragon,
// battle-of-aljubarrota, kingdom-of-portugal, kingdom-of-aragon; and cross-links
// to order-of-calatrava, knights-templar, knights-hospitaller.
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

const aviz = {
  id: 'order-of-aviz',
  type: 'order',
  name: 'Order of Aviz',
  aliases: [
    'The Order of Aviz', 'Order of Avis', 'Knights of Aviz', 'Order of Évora',
    'Military Order of Aviz', 'Ordem de Avis', 'Order of Saint Benedict of Aviz'
  ],
  originYear: 1176,
  image: 'https://upload.wikimedia.org/wikipedia/commons/6/6d/Torre_da_Rainha_-_Avis_-_Portugal_%286443743635%29.jpg',
  imageInfo: {
    caption: 'A medieval tower at Avis, the Alentejo town and castle that gave the order its name and seat.',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Torre_da_Rainha_-_Avis_-_Portugal_(6443743635).jpg',
    note: 'Avis became the order’s headquarters in the early 13th century.'
  },
  sigilImage: fp('Flag of Order of Aviz.svg'),
  sigilImageInfo: {
    caption: 'The green cross flory of the Order of Aviz.',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Flag_of_Order_of_Aviz.svg',
    note: 'A green lily-ended cross, marking the order as a Portuguese cousin of Calatrava.'
  },
  summary:
    'The Order of Aviz was Portugal’s great national military order, born of the Reconquista in the Alentejo and affiliated to Calatrava. Its most famous master, João, seized the Portuguese throne in 1385 as John I and founded the House of Aviz — so that a military order gave its name to a royal dynasty and a golden age.',
  founded: 'c. 1176, Portugal (as the Order of Évora)',
  recognized: 'Affiliated to Calatrava; papal confirmation, 12th century',
  status: 'Extant as a Portuguese honorific order (crown mastership from 1385/1551)',
  allegiance: 'The crown of Portugal; the Cistercians via Calatrava',
  headquarters: 'Évora → Avis',
  habit: 'White mantle with a green cross flory',
  patron: 'St Benedict and the Virgin Mary',
  purpose:
    'The order was founded to carry the Reconquista through the Alentejo and to hold the southern Portuguese frontier against al-Andalus, garrisoning the castles that secured the young kingdom’s expansion toward the Algarve.',
  keyStats: [
    { label: 'Founded', value: 'c. 1176 (as the Order of Évora)' },
    { label: 'Emblem', value: 'A green cross flory' },
    { label: 'Famous master', value: 'John I of Portugal, founder of the House of Aviz' },
    { label: 'Affiliation', value: 'Daughter-order of Calatrava' }
  ],
  contentSections: [
    { title: 'Overview', paragraphs: [
      'The Order of Aviz was the chief military order of medieval Portugal — the kingdom’s own instrument of the Reconquista, modelled on and affiliated to the Castilian Order of Calatrava. It held the Alentejo frontier and shared in the making of Portugal.',
      'Its place in history was sealed when its master, João, became King John I in 1385 and gave the name of the order to the royal House of Aviz, which would rule Portugal through the age of discovery.'
    ] },
    { title: 'From Évora to Avis', paragraphs: [
      'The order emerged around 1176 as a brotherhood of knights at Évora, in the newly conquered Alentejo, and was affiliated to Calatrava, whose Cistercian rule and green-lily cross it adopted. In the early 13th century it received the town of Avis and moved its headquarters there, taking the name it has kept since.',
      'As a daughter-order of Calatrava it stood under Castilian visitation, a tie that Portugal’s kings would strain as they built a national order of their own.'
    ] },
    { title: 'A master becomes a king', paragraphs: [
      'When the Portuguese royal line failed in 1383, the master of Aviz — João, an illegitimate son of King Peter I — became the focus of resistance to a Castilian succession. Acclaimed king in 1385, he defeated Castile at the Battle of Aljubarrota that same year and secured Portuguese independence.',
      'As John I he founded the House of Aviz. The order’s name now belonged to a dynasty, and its mastership passed permanently into the orbit of the crown.'
    ] },
    { title: 'Order and dynasty', paragraphs: [
      'After 1385 the mastership of Aviz was held by royal princes, binding the order ever closer to the throne. Its knights and revenues served the crown’s wars in Iberia and, in time, its ventures in North Africa.',
      'The green cross of Aviz became a badge of the Portuguese establishment, worn by the nobles of the dynasty that carried its name.'
    ] },
    { title: 'Legacy', paragraphs: [
      'The Order of Aviz survives as one of Portugal’s honorific orders, but its deepest mark on history is the dynasty it named. The House of Aviz — John I, John II, and Manuel I — presided over Portugal’s rise as a maritime power.',
      'Alongside the Order of Christ, Aviz shows how the military orders became fused with the Portuguese crown at the dawn of the age of discovery.'
    ] }
  ],
  grandMasters: [
    { name: 'Gonçalo Viegas', term: 'c. 1176–1195', note: 'First master of the order of Évora.' },
    { name: 'Fernão Rodrigues Monteiro', term: 'early 13th c.', note: 'Master around the move to Avis.' },
    { name: 'Rui Freire de Andrade', term: 'late 13th c.', note: '' },
    { name: 'João, Master of Aviz', term: '1364–1385', note: 'Became King John I of Portugal and founded the House of Aviz.' },
    { name: 'Fernando of Portugal', term: '15th c.', note: 'A royal prince as master, tying the order to the crown.' }
  ],
  battles: [
    { slug: 'battle-of-aljubarrota', name: 'Aljubarrota', date: '14 Aug 1385', role: 'Master João, now king, wins Portuguese independence.', opponent: 'Kingdom of Castile', outcome: 'Portuguese victory' }
  ],
  strongholds: [
    { name: 'Avis', period: 'from the early 13th c.', note: 'The Alentejo town and castle that became the order’s seat.' },
    { name: 'Évora', period: 'from c. 1176', note: 'The order’s birthplace in the reconquered Alentejo.' },
    { name: 'Alter do Chão & Benavente', period: '13th–14th c.', note: 'Frontier commanderies of the order.' }
  ],
  timeline: [
    { date: 'c. 1176', title: 'Foundation at Évora', description: 'A knightly brotherhood forms in the Alentejo, affiliated to Calatrava.' },
    { date: 'early 13th c.', title: 'The move to Avis', description: 'The order receives Avis and takes the town’s name.' },
    { date: '1364', title: 'João becomes master', description: 'The future John I is made master of the order.' },
    { date: '1385', title: 'Aljubarrota', description: 'Master João, acclaimed king, secures independence and founds the House of Aviz.' },
    { date: '15th c.', title: 'Order of the crown', description: 'The mastership is held by royal princes and bound to the throne.' }
  ],
  myths: [
    { claim: 'The House of Aviz and the Order of Aviz were the same thing.', reality: 'The royal dynasty took its name from the order because its founder had been the order’s master — but the order was an institution, not the dynasty.' }
  ],
  sources: [
    { title: 'A History of Portugal', author: 'A. H. de Oliveira Marques', year: '1972' },
    { title: 'The Military Orders in medieval Portugal', author: 'various', year: '' }
  ],
  relatedEntries: {
    people: [
      per('john-i-of-portugal', 'John I of Portugal', 'Master of Aviz who became king'),
      per('afonso-i-of-portugal', 'Afonso I of Portugal', 'Founder of the kingdom the order served')
    ],
    events: [
      evt('battle-of-aljubarrota', 'Battle of Aljubarrota', '1385 — the master-king’s victory')
    ],
    locations: [
      loc('kingdom-of-portugal', 'Kingdom of Portugal', 'The realm the order defended')
    ],
    orders: [
      ord('order-of-calatrava', 'Order of Calatrava', 'Its Castilian mother-order'),
      ord('order-of-christ', 'Order of Christ', 'Portugal’s other great order')
    ]
  }
}

const montesa = {
  id: 'order-of-montesa',
  type: 'order',
  name: 'Order of Montesa',
  aliases: [
    'The Order of Montesa', 'Knights of Montesa', 'Orde de Montesa', 'Orden de Montesa',
    'Order of Saint Mary of Montesa'
  ],
  originYear: 1317,
  image: 'https://upload.wikimedia.org/wikipedia/commons/7/71/Castell_de_Montesa_03.JPG',
  imageInfo: {
    caption: 'The castle of Montesa in Valencia, the seat of the order that inherited the Templars’ Aragonese lands.',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Castell_de_Montesa_03.JPG',
    note: 'The fortress was wrecked by an earthquake in 1748; its ruins still crown the hill.'
  },
  sigilImage: 'https://upload.wikimedia.org/wikipedia/commons/a/a3/Cruz_Orden_de_Montesa.jpg',
  sigilImageInfo: {
    caption: 'The red cross of the Order of Montesa.',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Cruz_Orden_de_Montesa.jpg',
    note: 'A plain red cross; after 1400 it was combined with the black cross of the absorbed Order of Sant Jordi d’Alfama.'
  },
  summary:
    'The Order of Montesa was created in 1317 to inherit the Valencian estates of the suppressed Templars — the Crown of Aragon’s answer to the problem of what to do with the Temple’s wealth. Placed under Calatrava’s rule, it kept the Templars’ defensive role on the Valencian frontier and became the Aragonese counterpart of Portugal’s Order of Christ.',
  founded: '1317, Kingdom of Valencia (Crown of Aragon)',
  recognized: 'Papal bull of John XXII, 1317',
  status: 'Extant as a Spanish honorific order (crown mastership from 1587)',
  allegiance: 'The crown of Aragon; the Cistercians via Calatrava',
  headquarters: 'Montesa castle, Valencia',
  habit: 'White mantle with a red (later red-and-black) cross',
  patron: 'St George and the Virgin Mary',
  purpose:
    'The order was founded to take over the Templars’ lands and castles in the Kingdom of Valencia and to continue their work: garrisoning the frontier of the Crown of Aragon against the Muslims of Granada and defending the Valencian coast against raiders.',
  keyStats: [
    { label: 'Founded', value: '1317 — to inherit the Templars in Valencia' },
    { label: 'Emblem', value: 'A red cross (later with the black cross of Sant Jordi)' },
    { label: 'Rule', value: 'Cistercian, under Calatrava’s visitation' },
    { label: 'Parallel', value: 'The Aragonese cousin of the Order of Christ' }
  ],
  contentSections: [
    { title: 'Overview', paragraphs: [
      'The Order of Montesa was the Crown of Aragon’s solution to a delicate problem: when the Templars were suppressed in 1312, their great estates in Valencia could not simply be handed to the Hospitallers without strengthening a foreign power on Aragonese soil. Instead a new native order was created to absorb them.',
      'Founded in 1317 and named for its chief castle, Montesa continued the Templars’ frontier mission in Valencia — the direct Aragonese parallel to the Order of Christ founded in Portugal in the very same years.'
    ] },
    { title: 'Heir of the Temple in Aragon', paragraphs: [
      'King James II of Aragon petitioned the papacy for a new order to hold the former Templar (and some Hospitaller) properties in his realm. Pope John XXII agreed, and in 1317 the Order of Santa María de Montesa was established, endowed with the Temple’s Valencian castles and lands.',
      'The order was placed under the rule and visitation of Calatrava, giving it a Cistercian discipline and linking it to the wider Iberian family of orders rather than to the international Hospitallers.'
    ] },
    { title: 'Guarding the Valencian frontier', paragraphs: [
      'From its castle at Montesa the order garrisoned the southern frontier of the Crown of Aragon against the Muslim kingdom of Granada and defended the Valencian coast against Barbary and Granadan raiders.',
      'In 1400 it absorbed the small Order of Sant Jordi d’Alfama, adding that order’s black cross to its own red one and consolidating the crusading orders of the Aragonese lands into a single body.'
    ] },
    { title: 'Into the crown', paragraphs: [
      'Like the Castilian orders, Montesa’s mastership was drawn steadily toward the crown. Its independence lasted longer than theirs, but in 1587 the mastership was incorporated into the Spanish crown under Philip II.',
      'Thereafter the order endured as an honorific and administrative institution, its knights the gentlemen of the Valencian establishment.'
    ] },
    { title: 'Legacy', paragraphs: [
      'Montesa is the clearest Aragonese proof that the Templars were not so much destroyed as reorganised: their Valencian wealth and role passed intact to a new order under a new name.',
      'Its ruined castle, thrown down by the earthquake of 1748, still stands as a monument to the strange afterlife of the Temple in the Crown of Aragon.'
    ] }
  ],
  grandMasters: [
    { name: 'Guillem d’Erill', term: '1319', note: 'First master; died within months of taking office.' },
    { name: 'Arnau de Soler', term: '1320–1327', note: 'Organised the new order and its estates.' },
    { name: 'Pere de Tous', term: '1327–1374', note: 'Long-serving and revered master who consolidated the order.' },
    { name: 'Romeu de Corbera', term: '1410–1445', note: 'Master who oversaw the union with Sant Jordi d’Alfama.' },
    { name: 'Lluís Despuig', term: '1453–1482', note: 'Statesman-master in the service of the Aragonese crown.' }
  ],
  strongholds: [
    { name: 'Montesa castle', period: '1319–1748', note: 'The order’s headquarters, a former Muslim then royal fortress.' },
    { name: 'Peñíscola', period: 'former Templar castle', note: 'One of the great coastal fortresses of the Templar inheritance.' },
    { name: 'Sant Mateu', period: '14th c.', note: 'Chief town of the order’s Valencian domains.' }
  ],
  timeline: [
    { date: '1312', title: 'The Templars suppressed', description: 'The Council of Vienne dissolves the Temple; its Valencian lands fall vacant.' },
    { date: '1317', title: 'Foundation of Montesa', description: 'John XXII creates the order to inherit the Templar estates in Valencia.' },
    { date: '1319', title: 'The order takes possession', description: 'The first knights are installed under Calatrava’s rule.' },
    { date: '1400', title: 'Union with Sant Jordi d’Alfama', description: 'The order absorbs the small Aragonese order and its black cross.' },
    { date: '1587', title: 'Into the crown', description: 'The mastership is incorporated into the Spanish crown under Philip II.' }
  ],
  myths: [
    { claim: 'The Templars’ property simply vanished when the order fell.', reality: 'In the Crown of Aragon it passed to the purpose-built Order of Montesa; in Portugal, to the Order of Christ.' }
  ],
  sources: [
    { title: 'The Trial of the Templars', author: 'Malcolm Barber', year: '2006' },
    { title: 'Studies of the Crown of Aragon and its orders', author: 'various', year: '' }
  ],
  relatedEntries: {
    people: [
      per('ferdinand-ii-of-aragon', 'Ferdinand II of Aragon', 'Aragonese king in the order’s later heyday')
    ],
    locations: [
      loc('kingdom-of-aragon', 'Kingdom of Aragon', 'The crown the order served'),
      loc('al-andalus', 'Al-Andalus', 'The Muslim frontier it guarded')
    ],
    orders: [
      ord('knights-templar', 'Knights Templar', 'Whose Valencian lands it inherited'),
      ord('knights-hospitaller', 'Knights Hospitaller', 'The rival heir the crown wished to avoid'),
      ord('order-of-calatrava', 'Order of Calatrava', 'Its Cistercian rule-giver'),
      ord('order-of-christ', 'Order of Christ', 'The Portuguese heir of the Templars'),
      ord('order-of-san-jorge-de-alfama', 'Order of San Jorge de Alfama', 'The small order Montesa absorbed in 1400')
    ]
  }
}

const christ = {
  id: 'order-of-christ',
  type: 'order',
  name: 'Order of Christ',
  aliases: [
    'The Order of Christ', 'Military Order of Christ', 'Order of the Knights of Christ',
    'Ordem de Cristo', 'Order of Christ (Portugal)'
  ],
  originYear: 1319,
  image: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Charola_do_Convento_de_Cristo_-_Tomar_-_Portugal_%2832439629132%29.jpg',
  imageInfo: {
    caption: 'The Charola, the round Templar church at the Convent of Christ in Tomar, inherited by the order.',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Charola_do_Convento_de_Cristo_-_Tomar_-_Portugal_(32439629132).jpg',
    note: 'Tomar, the Templars’ Portuguese seat, became the headquarters of the Order of Christ.'
  },
  sigilImage: 'https://upload.wikimedia.org/wikipedia/commons/1/1d/Order_of_Christ_Portugal_cross.png',
  sigilImageInfo: {
    caption: 'The Cross of Christ — a red cross with a white inner cross.',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Order_of_Christ_Portugal_cross.png',
    note: 'The cross that later sailed on the caravels of the Portuguese discoveries.'
  },
  summary:
    'The Order of Christ was founded in 1319 as the direct heir of the Templars in Portugal, inheriting all their property — including Tomar — so that the suppressed Temple lived on under a new name. A century later, under Prince Henry the Navigator, it became the engine and emblem of the Portuguese age of discovery.',
  founded: '1319, Portugal',
  recognized: 'Papal bull Ad ea ex quibus of John XXII, 1319',
  status: 'Extant as a Portuguese honorific order (crown mastership from 1551)',
  allegiance: 'The crown of Portugal; the Papacy',
  headquarters: 'Castro Marim → Tomar',
  habit: 'White mantle with the red Cross of Christ',
  patron: 'Jesus Christ and the Virgin Mary',
  purpose:
    'The order was created to preserve the Templars’ property and defensive mission in Portugal after the Temple’s suppression, guarding the southern frontier and the Algarve coast. Under Prince Henry it was redirected to fund and bless the exploration of the Atlantic and the coasts of Africa.',
  keyStats: [
    { label: 'Founded', value: '1319 — heir of the Templars in Portugal' },
    { label: 'Emblem', value: 'The red Cross of Christ' },
    { label: 'Great patron', value: 'Prince Henry the Navigator' },
    { label: 'Headquarters', value: 'Tomar, the old Templar seat' }
  ],
  contentSections: [
    { title: 'Overview', paragraphs: [
      'The Order of Christ is the clearest case of the Templars surviving their own destruction. When the Temple was suppressed in 1312, King Dinis of Portugal refused to let its wealth pass to the Hospitallers and instead had a new Portuguese order created to inherit it whole — men, castles, and Tomar alike.',
      'For a century it was a frontier order like any other; then, under Prince Henry the Navigator, it became the spiritual and financial sponsor of the voyages that opened the age of discovery, its red cross flying on the sails of the caravels.'
    ] },
    { title: 'Heir of the Templars', paragraphs: [
      'King Dinis argued to the papacy that the Templars’ Portuguese property had been given for the war against the Muslims and should stay in Portugal for that purpose. In 1319 Pope John XXII agreed, and by the bull Ad ea ex quibus created the Order of Christ, endowed with the entire Templar inheritance.',
      'Many former Templars simply joined the new order, and its first seat was the frontier castle of Castro Marim before it moved to Tomar, the Templars’ own great convent — the continuity could hardly have been plainer.'
    ] },
    { title: 'Prince Henry and the sea', paragraphs: [
      'In 1420 Prince Henry, called the Navigator, became governor of the Order of Christ, and he turned its vast revenues to a new kind of crusade — the exploration of the Atlantic islands and the west coast of Africa.',
      'The order’s ships carried its cross south year after year; Madeira, the Azores, and the African coast were opened under its banner. The red Cross of Christ became the badge of Portuguese expansion, painted on the sails that later reached India and Brazil.'
    ] },
    { title: 'Order and crown', paragraphs: [
      'The governorship of the order was held by royal princes and then by the kings themselves. In 1551 the mastership was formally united with the Portuguese crown, and the order became an instrument of royal patronage.',
      'By then its cross was known across the oceans as the mark of Portugal, from the forts of Africa to the coasts of Asia and the Americas.'
    ] },
    { title: 'Legacy', paragraphs: [
      'The Order of Christ preserved the Templar inheritance in Portugal and then transformed it, becoming the institution that underwrote the discoveries. Its headquarters at Tomar, layering Templar rotunda and Renaissance cloister, is one of the great monuments of both stories.',
      'It survives today as a Portuguese honorific order, but its true legacy is written on the map of the world the Portuguese sailed to under its cross.'
    ] }
  ],
  grandMasters: [
    { name: 'Gil Martins', term: '1319–1321', note: 'First master, transferred from the Order of Aviz.' },
    { name: 'Lopo Dias de Sousa', term: '1373–1417', note: 'Master through the crisis of 1383–85.' },
    { name: 'Prince Henry the Navigator', term: '1420–1460', note: 'Governor who turned the order to Atlantic exploration.' },
    { name: 'Prince Fernando', term: '1460–1470', note: 'Royal prince and administrator of the order.' },
    { name: 'Manuel, Duke of Beja', term: 'from 1484', note: 'Later King Manuel I; the order’s cross became the mark of empire.' }
  ],
  strongholds: [
    { name: 'Tomar (Convent of Christ)', period: 'from 1357', note: 'The former Templar convent that became the order’s headquarters.' },
    { name: 'Castro Marim', period: '1319–1357', note: 'The Algarve frontier castle that was the order’s first seat.' },
    { name: 'Almourol', period: 'former Templar castle', note: 'The island fortress on the Tagus, part of the Templar inheritance.' }
  ],
  timeline: [
    { date: '1312', title: 'The Templars suppressed', description: 'The Council of Vienne dissolves the Temple; its Portuguese lands are held pending a decision.' },
    { date: '1319', title: 'Foundation of the Order of Christ', description: 'John XXII’s bull creates the order to inherit the Templar estates in Portugal.' },
    { date: '1357', title: 'Headquarters at Tomar', description: 'The order takes over the Templars’ great convent.' },
    { date: '1420', title: 'Prince Henry governor', description: 'The Navigator turns the order’s wealth to Atlantic exploration.' },
    { date: '1551', title: 'Union with the crown', description: 'The mastership is joined permanently to the Portuguese crown.' }
  ],
  myths: [
    { claim: 'The Templars were wiped out in 1312.', reality: 'In Portugal they were reconstituted almost intact as the Order of Christ, keeping their castles, their convent at Tomar, and many of their members.' },
    { claim: 'The Cross of Christ on the caravels was a national flag.', reality: 'It was the emblem of the Order of Christ, whose patron Prince Henry funded the voyages — a religious-military order’s cross, not a state banner.' }
  ],
  sources: [
    { title: 'A History of Portugal', author: 'A. H. de Oliveira Marques', year: '1972' },
    { title: 'Prince Henry “the Navigator”: A Life', author: 'Peter Russell', year: '2000' },
    { title: 'The New Knighthood', author: 'Malcolm Barber', year: '1994' }
  ],
  relatedEntries: {
    people: [
      per('john-i-of-portugal', 'John I of Portugal', 'King whose sons, incl. Prince Henry, led the order')
    ],
    locations: [
      loc('kingdom-of-portugal', 'Kingdom of Portugal', 'The realm the order served')
    ],
    orders: [
      ord('knights-templar', 'Knights Templar', 'Whose entire Portuguese inheritance it received'),
      ord('order-of-aviz', 'Order of Aviz', 'Portugal’s other great order'),
      ord('order-of-montesa', 'Order of Montesa', 'The Aragonese heir of the Templars')
    ]
  }
}

const upsert = (arr, e) => {
  const i = arr.findIndex((x) => x.id === e.id)
  if (i >= 0) { arr[i] = e; return 'updated' }
  arr.push(e); return 'added'
}

for (const o of [aviz, montesa, christ]) {
  console.log('orders:', upsert(data.orders, o), o.id)
}
writeFileSync(dataPath, JSON.stringify(data, null, 2))
console.log(`orders collection now has ${data.orders.length}`)
