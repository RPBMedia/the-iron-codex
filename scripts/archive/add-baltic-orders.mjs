// M3: the Baltic / Northern military orders — the Livonian Brothers of the Sword,
// the Livonian Order, and the Order of Dobrzyń. All three orbit the already-live
// Teutonic Order (the Sword-Brothers and Dobrzyń were both absorbed by it).
// Idempotent upsert. Reuses teutonic-order, hermann-von-salza, battle-of-grunwald,
// grand-duchy-of-lithuania, kingdom-of-poland, novgorod, vytautas.
import { readFileSync, writeFileSync } from 'node:fs'

const dataPath = new URL('../server/data/history.json', import.meta.url)
const data = JSON.parse(readFileSync(dataPath, 'utf8'))
if (!Array.isArray(data.orders)) data.orders = []

const per = (slug, title, label) => ({ title, type: 'person', slug, label })
const loc = (slug, title, label) => ({ title, type: 'location', slug, label })
const evt = (slug, title, label) => ({ title, type: 'event', slug, label })
const ord = (slug, title, label) => ({ title, type: 'order', slug, label })

const swordBrothers = {
  id: 'livonian-brothers-of-the-sword',
  type: 'order',
  name: 'Livonian Brothers of the Sword',
  aliases: [
    'The Livonian Brothers of the Sword', 'Sword Brothers', 'Sword-Brothers', 'Swordbrothers',
    'Order of the Brothers of the Sword', 'Fratres militiae Christi Livoniae', 'Militia of Christ of Livonia'
  ],
  originYear: 1202,
  image: 'https://upload.wikimedia.org/wikipedia/commons/7/73/Turaida_Castle.JPG',
  imageInfo: {
    caption: 'Turaida, a red-brick crusader castle in the Gauja valley, heart of the Livonian crusade.',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Turaida_Castle.JPG',
    note: 'The Sword-Brothers studded conquered Livonia with brick castles like this.'
  },
  sigilImage: 'https://upload.wikimedia.org/wikipedia/commons/1/16/Zakon_Kawaler%C3%B3w_Mieczowych_COA.svg',
  sigilImageInfo: {
    caption: 'Arms of the Sword-Brothers — a red cross above a red sword.',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Zakon_Kawaler%C3%B3w_Mieczowych_COA.svg',
    note: 'The cross and sword gave the order its popular name.'
  },
  summary:
    'The Livonian Brothers of the Sword were founded in 1202 to conquer and convert pagan Livonia for the bishops of Riga. Brutal and independent, they carved out a crusader state on the eastern Baltic before their army was annihilated at Saule in 1236, after which the survivors were folded into the Teutonic Order.',
  founded: '1202, Riga',
  recognized: 'Confirmed by Innocent III, 1204',
  dissolved: '1237 (merged into the Teutonic Order)',
  allegiance: 'The Bishopric of Riga and the Papacy',
  headquarters: 'Riga, Wenden (Cēsis), and Fellin',
  habit: 'White mantle with a red cross and sword',
  patron: 'The Virgin Mary',
  purpose:
    'The order was created to give the missionary bishopric of Riga a permanent army — to subdue the Livs, Latgalians, and Estonians of the eastern Baltic by the sword and hold the conquered land for the Church.',
  keyStats: [
    { label: 'Founded', value: '1202 — the first Baltic crusading order' },
    { label: 'Emblem', value: 'A red cross above a red sword' },
    { label: 'Rule', value: 'Modelled on the Knights Templar' },
    { label: 'End', value: 'Destroyed at Saule, 1236; absorbed 1237' }
  ],
  contentSections: [
    { title: 'Overview', paragraphs: [
      'The Livonian Brothers of the Sword were the first of the Baltic crusading orders — warrior-monks raised to conquer the pagan peoples of Livonia, on the far north-eastern edge of Latin Christendom. In a single generation they built a crusader state around Riga by relentless, often merciless war.',
      'Fiercely independent of the bishops who founded them, they were also brittle: when a Lithuanian and Semigallian army destroyed their field force at Saule in 1236, the order could not recover, and the remnant was absorbed into the Teutonic Order.'
    ] },
    { title: 'The conquest of Livonia', paragraphs: [
      'Bishop Albert of Riga, needing soldiers to hold his new mission, founded the order in 1202; Pope Innocent III confirmed it in 1204 and gave it a rule modelled on the Templars. Its brothers fought their way up the Daugava and Gauja rivers, storming and building castles and forcing baptism on the Livs, Latgalians, and Estonians.',
      'By the 1230s the Sword-Brothers held a wide swathe of the eastern Baltic — but they quarrelled endlessly with the bishops over the division of the conquered land, keeping the larger share for themselves.'
    ] },
    { title: 'Saule and the end', paragraphs: [
      'In 1236 the order launched a raid deep into Samogitia. On the way home, on boggy ground at Saule, it was trapped and destroyed by Samogitians and Semigallians; the master, Volkwin, and much of the brotherhood were killed.',
      'The blow was fatal. The next year Pope Gregory IX, with the Teutonic Grand Master Hermann von Salza brokering the arrangement, incorporated the survivors into the Teutonic Order, where they became its semi-autonomous Livonian branch.'
    ] },
    { title: 'Legacy', paragraphs: [
      'The Sword-Brothers left behind the crusader state of Livonia — a patchwork of order lands and bishoprics that would endure, under their Teutonic successors, for three more centuries.',
      'Their brief, violent career set the pattern for the Baltic crusades: conquest by castle-building, forced conversion, and constant friction between the military order and the churchmen it was meant to serve.'
    ] }
  ],
  grandMasters: [
    { name: 'Vinno von Rohrbach', term: '1204–1209', note: 'First master; murdered by a brother knight.' },
    { name: 'Volkwin von Naumburg', term: '1209–1236', note: 'Led the order to its height and died in the disaster at Saule.' }
  ],
  battles: [
    { name: 'Saule', date: '22 Sep 1236', role: 'The order’s army is trapped and destroyed; master Volkwin killed.', opponent: 'Samogitians & Semigallians', outcome: 'Catastrophic defeat' }
  ],
  strongholds: [
    { name: 'Riga', period: 'from 1202', note: 'The missionary city that founded and based the order.' },
    { name: 'Wenden (Cēsis)', period: 'from c. 1214', note: 'The order’s chief inland castle, later the Livonian Order’s seat.' },
    { name: 'Fellin (Viljandi)', period: '13th c.', note: 'Great brick castle commanding conquered Estonia.' }
  ],
  timeline: [
    { date: '1202', title: 'Foundation at Riga', description: 'Bishop Albert founds the order to conquer and convert Livonia.' },
    { date: '1204', title: 'Papal confirmation', description: 'Innocent III recognises the order and gives it a Templar-style rule.' },
    { date: '1207–1227', title: 'Conquest of Livonia', description: 'The brothers subdue the Livs, Latgalians, and Estonians by castle and sword.' },
    { date: '1236', title: 'Saule', description: 'The order’s field army is annihilated in Samogitia.' },
    { date: '1237', title: 'Absorbed by the Teutonic Order', description: 'The survivors become the Teutonic Order’s Livonian branch.' }
  ],
  myths: [
    { claim: 'The Sword-Brothers were simply the Teutonic Knights under another name.', reality: 'They were a separate, earlier order founded for the bishops of Riga; only after Saule (1236) were the survivors merged into the Teutonic Order.' }
  ],
  sources: [
    { title: 'The Northern Crusades', author: 'Eric Christiansen', year: '1997' },
    { title: 'The Chronicle of Henry of Livonia', author: 'Henry of Livonia', year: 'c. 1229 (primary source)' }
  ],
  relatedEntries: {
    people: [
      per('hermann-von-salza', 'Hermann von Salza', 'Teutonic master who brokered the 1237 merger')
    ],
    locations: [
      loc('novgorod', 'Novgorod', 'The Rus’ power on the order’s eastern flank'),
      loc('grand-duchy-of-lithuania', 'Grand Duchy of Lithuania', 'The pagan power that helped destroy it at Saule')
    ],
    orders: [
      ord('livonian-order', 'Livonian Order', 'Its direct successor'),
      ord('teutonic-order', 'Teutonic Order', 'The order that absorbed it')
    ]
  }
}

const livonianOrder = {
  id: 'livonian-order',
  type: 'order',
  name: 'Livonian Order',
  aliases: [
    'The Livonian Order', 'Livonian branch of the Teutonic Order', 'Order of Livonia',
    'Livländischer Orden', 'Brothers of the Sword of Livonia'
  ],
  originYear: 1237,
  image: 'https://upload.wikimedia.org/wikipedia/commons/7/73/Cesis_Ordensburg_Cesis_08.JPG',
  imageInfo: {
    caption: 'The Ordensburg at Wenden (Cēsis), the residence of the masters of the Livonian Order.',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Cesis_Ordensburg_Cesis_08.JPG',
    note: 'One of the great brick castles of the order’s Baltic state.'
  },
  sigilImage: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/LivonianShield.svg',
  sigilImageInfo: {
    caption: 'The red cross and sword of the Livonian Order, inherited from the Sword-Brothers.',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:LivonianShield.svg',
    note: 'The Livonian branch kept the cross-and-sword device of its predecessor.'
  },
  summary:
    'The Livonian Order was the semi-autonomous Livonian branch of the Teutonic Order, formed in 1237 from the remnant of the Sword-Brothers. For over three centuries it ruled much of what is now Latvia and Estonia, checking Novgorod at Lake Peipus, weathering defeats like Durbe, and outlasting even the Teutonic state in Prussia before the Livonian War swept it away in 1561.',
  founded: '1237 (from the Sword-Brothers)',
  recognized: 'A branch of the Teutonic Order',
  status: 'Dissolved 1561 (secularised in the Livonian War)',
  allegiance: 'An autonomous branch of the Teutonic Order',
  headquarters: 'Wenden (Cēsis), Riga, and Fellin',
  habit: 'White mantle with a black cross (with the red sword-cross device)',
  patron: 'The Virgin Mary',
  purpose:
    'The order governed and defended Terra Mariana — the crusader lands of Livonia — alongside the archbishop of Riga and the bishops, holding the frontier against pagan Lithuania and Orthodox Novgorod and Pskov.',
  keyStats: [
    { label: 'Existed', value: '1237–1561 (over three centuries)' },
    { label: 'Autonomy', value: 'Elected its own master (Landmeister)' },
    { label: 'Realm', value: 'Terra Mariana — Latvia and Estonia' },
    { label: 'Greatest master', value: 'Wolter von Plettenberg (1494–1535)' }
  ],
  contentSections: [
    { title: 'Overview', paragraphs: [
      'The Livonian Order rose from the ashes of the Sword-Brothers: after Saule, the survivors were absorbed into the Teutonic Order in 1237 as a distinct, largely self-governing Livonian branch. It ruled a Baltic state of castles, towns, and converted peasantry for more than three hundred years.',
      'Semi-independent of the Grand Master in Prussia, it elected its own master and shared power with the bishops in the loose Livonian Confederation — a fractious arrangement that nonetheless held Livonia together until the 16th century.'
    ] },
    { title: 'Wars on the eastern frontier', paragraphs: [
      'The order’s wars ran in every direction. In 1242 its knights and the bishop of Dorpat’s men were beaten by Alexander Nevsky of Novgorod on the frozen Lake Peipus — the “Battle on the Ice” — checking any advance into Rus’.',
      'To the south, pagan Lithuania was the perennial enemy: at Durbe in 1260 the order suffered a crushing defeat that touched off risings across the Baltic. Yet the order endured, campaigning season after season much as its Prussian brothers did.'
    ] },
    { title: 'The age of Plettenberg', paragraphs: [
      'Its golden age came under Wolter von Plettenberg, master from 1494 to 1535. He beat back the growing power of Muscovy — winning at Smolino in 1502 — and won Livonia a long peace, becoming the effective sovereign of the land.',
      'Plettenberg also steered the order through the Reformation, tolerating Lutheranism while keeping the order’s state intact — but he declined to secularise it as the Prussian branch had done in 1525.'
    ] },
    { title: 'Collapse in the Livonian War', paragraphs: [
      'The reckoning came in the 1550s. Caught between Muscovy, Sweden, Poland-Lithuania, and Denmark, the order’s state was torn apart in the Livonian War. Its army was broken and its lands overrun.',
      'In 1561 the last master, Gotthard Kettler, secularised what remained, converting to Lutheranism and becoming the first Duke of Courland as a vassal of Poland-Lithuania. The Livonian Order — and medieval Livonia with it — ceased to exist.'
    ] },
    { title: 'Legacy', paragraphs: [
      'The Livonian Order shaped the Baltic for centuries: its brick castles, German-law towns, and Baltic-German nobility outlived it by generations, and its collapse redrew the map of north-eastern Europe.',
      'It was also the longest-lived fragment of the Teutonic project, holding Livonia decades after the Prussian monastic state had become a duchy.'
    ] }
  ],
  grandMasters: [
    { name: 'Hermann Balk', term: '1237–1238', note: 'First master of the Livonian branch.' },
    { name: 'Andreas von Felben', term: '1240–1241', note: 'Master at the time of the Battle on the Ice.' },
    { name: 'Anno von Sangerhausen', term: '1253–1256', note: 'Later Grand Master of the whole order.' },
    { name: 'Konrad von Mandern', term: '1263–1266', note: 'Rebuilt the order after Durbe.' },
    { name: 'Wolter von Plettenberg', slug: 'wolter-von-plettenberg', term: '1494–1535', note: 'The greatest master; beat Muscovy at Smolino and secured a long peace.' },
    { name: 'Hermann von Brüggenei', term: '1535–1549', note: 'Presided over a Livonia turning Protestant.' },
    { name: 'Gotthard Kettler', term: '1559–1561', note: 'Last master; secularised the order as Duke of Courland.' }
  ],
  battles: [
    { name: 'Lake Peipus (Battle on the Ice)', date: '5 Apr 1242', role: 'The order and the bishop of Dorpat are beaten by Novgorod.', opponent: 'Novgorod under Alexander Nevsky', outcome: 'Defeat' },
    { name: 'Durbe', date: '13 Jul 1260', role: 'A crushing defeat that sparked Baltic revolts.', opponent: 'Samogitians', outcome: 'Catastrophic defeat' },
    { slug: 'battle-of-grunwald', name: 'Grunwald', date: '15 Jul 1410', role: 'A Livonian contingent joins the Teutonic army.', opponent: 'Poland–Lithuania', outcome: 'Catastrophic defeat' },
    { name: 'Smolino', date: '13 Sep 1502', role: 'Plettenberg beats back the power of Muscovy.', opponent: 'Grand Duchy of Moscow', outcome: 'Order victory' }
  ],
  strongholds: [
    { name: 'Wenden (Cēsis)', period: '1237–1561', note: 'The residence of the masters of the order.' },
    { name: 'Riga', period: 'contested', note: 'The great Hanseatic city, often at odds with the order.' },
    { name: 'Fellin (Viljandi)', period: '13th–16th c.', note: 'Powerful brick castle and treasury in Estonia.' },
    { name: 'Narva', period: 'frontier', note: 'The order’s outpost facing Novgorod and Pskov.' }
  ],
  timeline: [
    { date: '1237', title: 'Formation', description: 'The Sword-Brothers’ remnant becomes the Teutonic Order’s Livonian branch.' },
    { date: '1242', title: 'Battle on the Ice', description: 'Alexander Nevsky checks the order at Lake Peipus.' },
    { date: '1260', title: 'Durbe', description: 'A great defeat by the Samogitians sparks revolts across the Baltic.' },
    { date: '1410', title: 'Grunwald', description: 'A Livonian contingent fights in the Teutonic disaster.' },
    { date: '1502', title: 'Smolino', description: 'Plettenberg beats back Muscovy and wins a long peace.' },
    { date: '1561', title: 'Secularisation', description: 'Gotthard Kettler dissolves the order and becomes Duke of Courland.' }
  ],
  myths: [
    { claim: 'The “Battle on the Ice” was the order’s greatest catastrophe.', reality: 'It was a real defeat, but a modest one later mythologised — above all by Eisenstein’s film — into an epic clash; Durbe in 1260 was a far heavier blow.' },
    { claim: 'The Livonian Order died with the Teutonic state in 1525.', reality: 'It outlasted the Prussian branch by decades, surviving until the Livonian War destroyed it in 1561.' }
  ],
  sources: [
    { title: 'The Northern Crusades', author: 'Eric Christiansen', year: '1997' },
    { title: 'The Baltic Crusade', author: 'William Urban', year: '1994' },
    { title: 'The Livonian Crusade', author: 'William Urban', year: '2004' }
  ],
  relatedEntries: {
    people: [
      per('vytautas', 'Vytautas', 'Lithuanian ruler who fought the order at Grunwald')
    ],
    events: [
      evt('battle-of-grunwald', 'Battle of Grunwald', '1410 — a Livonian contingent fought')
    ],
    locations: [
      loc('grand-duchy-of-lithuania', 'Grand Duchy of Lithuania', 'The order’s great southern enemy'),
      loc('novgorod', 'Novgorod', 'The Rus’ republic it fought on the ice')
    ],
    orders: [
      ord('livonian-brothers-of-the-sword', 'Livonian Brothers of the Sword', 'Its predecessor'),
      ord('teutonic-order', 'Teutonic Order', 'The order it was a branch of')
    ]
  }
}

const dobrzyn = {
  id: 'order-of-dobrzyn',
  type: 'order',
  name: 'Order of Dobrzyń',
  aliases: [
    'The Order of Dobrzyń', 'Order of Dobrin', 'Brothers of Dobrzyń', 'Knights of Dobrzyń',
    'Fratres Militiae Christi de Dobrin', 'Prussian Knights'
  ],
  originYear: 1216,
  image: 'https://upload.wikimedia.org/wikipedia/commons/c/c8/Dobrzy%C5%84_nad_Wis%C5%82%C4%85_~23irmked.jpg',
  imageInfo: {
    caption: 'Dobrzyń on the Vistula, the small order’s seat in Masovia.',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Dobrzy%C5%84_nad_Wis%C5%82%C4%85_~23irmked.jpg',
    note: 'The frontier town that gave the short-lived order its name.'
  },
  sigilImage: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Dobrzynski_braty.svg',
  sigilImageInfo: {
    caption: 'Emblem of the Order of Dobrzyń — a red star above a red sword.',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Dobrzynski_braty.svg',
    note: 'A star-and-sword device, echoing the Sword-Brothers on which the order was modelled.'
  },
  summary:
    'The Order of Dobrzyń was a tiny military order founded around 1216 by the duke of Masovia to defend his lands against the pagan Prussians. Modelled on the Sword-Brothers and never more than a handful of knights, it proved too weak for the task and was swallowed within a generation by the Teutonic Order.',
  founded: 'c. 1216, Duchy of Masovia',
  recognized: 'Papal confirmation, 1228',
  dissolved: 'c. 1235 (merged into the Teutonic Order)',
  allegiance: 'The Duke of Masovia and the Bishop of Prussia',
  headquarters: 'Dobrzyń nad Wisłą, on the Vistula',
  habit: 'White mantle with a red star and sword',
  patron: 'The Virgin Mary',
  purpose:
    'The order was raised to shield the Polish duchy of Masovia from Prussian raids across the Vistula — a small, local answer to a frontier the duke could not otherwise defend.',
  keyStats: [
    { label: 'Founded', value: 'c. 1216 — a small local order' },
    { label: 'Emblem', value: 'A red star above a red sword' },
    { label: 'Strength', value: 'Only about fifteen knights' },
    { label: 'End', value: 'Absorbed by the Teutonic Order, c. 1235' }
  ],
  contentSections: [
    { title: 'Overview', paragraphs: [
      'The Order of Dobrzyń was the smallest and shortest-lived of the Baltic military orders — a local militia of warrior-monks created to guard a single Polish frontier. It is remembered less for what it achieved than for what its failure caused: it helped bring the Teutonic Order into Poland.',
      'Founded on the model of the Livonian Sword-Brothers, it never had the numbers to hold the Prussian border, and within a generation it had been absorbed into the far greater order that would dominate the region.'
    ] },
    { title: 'A frontier order', paragraphs: [
      'Around 1216 Konrad of Masovia and Bishop Christian of Prussia established the order at Dobrzyń on the Vistula to defend Masovia against Prussian raids. The pope confirmed it in 1228, and it took a rule and habit like the Sword-Brothers’, marked with a red star and sword.',
      'But the order was tiny — perhaps fifteen knights — and could do little against the Prussians. In the same years, and for the same reason, Konrad had invited the Teutonic Order to take up the fight.'
    ] },
    { title: 'Absorbed by the Teutonic Order', paragraphs: [
      'The Teutonic Knights, arriving with imperial and papal charters and far greater resources, quickly overshadowed the little order. Around 1235 most of the Brothers of Dobrzyń were incorporated into the Teutonic Order.',
      'A small remnant that resisted was resettled briefly at Drohiczyn before fading from the record. The frontier the order had been meant to hold became, instead, the seed of the Teutonic state in Prussia.'
    ] },
    { title: 'Legacy', paragraphs: [
      'The Order of Dobrzyń is a footnote with long consequences: its inability to defend Masovia was one of the reasons the Teutonic Order was invited into Poland, a decision that would shape the Baltic for three centuries and set Poland against the order in wars down to Grunwald.',
      'It stands as the clearest example of how the small, local Baltic foundations were swept up into the Teutonic juggernaut.'
    ] }
  ],
  grandMasters: [
    { name: 'Bruno', term: 'fl. c. 1228', note: 'The order’s first and best-attested master; the leadership is otherwise poorly recorded.' }
  ],
  strongholds: [
    { name: 'Dobrzyń nad Wisłą', period: 'c. 1216–1235', note: 'The Masovian frontier town that was the order’s seat.' },
    { name: 'Drohiczyn', period: 'after 1235', note: 'Where a small resisting remnant was briefly resettled.' }
  ],
  timeline: [
    { date: 'c. 1216', title: 'Foundation', description: 'Konrad of Masovia and Bishop Christian raise the order at Dobrzyń.' },
    { date: '1228', title: 'Papal confirmation', description: 'The order is recognised, modelled on the Sword-Brothers.' },
    { date: 'c. 1230', title: 'The Teutonic Knights arrive', description: 'Konrad’s greater invitation overshadows the little order.' },
    { date: 'c. 1235', title: 'Absorbed', description: 'Most of the Brothers of Dobrzyń are merged into the Teutonic Order.' }
  ],
  myths: [
    { claim: 'The Order of Dobrzyń was a major force in the Prussian crusade.', reality: 'It was a tiny order of perhaps fifteen knights, too weak to hold the frontier — which is precisely why the Teutonic Order was brought in and soon absorbed it.' }
  ],
  sources: [
    { title: 'The Northern Crusades', author: 'Eric Christiansen', year: '1997' },
    { title: 'The Prussian Crusade', author: 'William Urban', year: '1980' }
  ],
  relatedEntries: {
    people: [
      per('hermann-von-salza', 'Hermann von Salza', 'Teutonic master whose order absorbed it')
    ],
    locations: [
      loc('kingdom-of-poland', 'Kingdom of Poland', 'The Polish world of Masovia it defended')
    ],
    orders: [
      ord('teutonic-order', 'Teutonic Order', 'The order that absorbed it'),
      ord('livonian-brothers-of-the-sword', 'Livonian Brothers of the Sword', 'The order it was modelled on')
    ]
  }
}

const upsert = (arr, e) => {
  const i = arr.findIndex((x) => x.id === e.id)
  if (i >= 0) { arr[i] = e; return 'updated' }
  arr.push(e); return 'added'
}

for (const o of [swordBrothers, livonianOrder, dobrzyn]) {
  console.log('orders:', upsert(data.orders, o), o.id)
}
writeFileSync(dataPath, JSON.stringify(data, null, 2))
console.log(`orders collection now has ${data.orders.length}`)
