import { readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
const __dirname = dirname(fileURLToPath(import.meta.url))
const dataPath = join(__dirname, '..', 'server', 'data', 'history.json')
const data = JSON.parse(readFileSync(dataPath, 'utf8'))
const P = (slug, displayName, note) => ({ personSlug: slug, displayName, note })
const IMG = (f) => `https://commons.wikimedia.org/wiki/Special:FilePath/${f}?width=1000`
const BYZ = () => ({ name: 'Byzantine Empire', type: 'location', slug: 'byzantine-empire' })

// 1. Jarls of Lade — the great earls of Trøndelag
const lade = {
  id: 'jarls-of-lade', type: 'house', name: 'Jarls of Lade',
  aliases: ['Jarls of Lade (Hlaðir)', 'Jarls of Lade', 'Lade jarls', 'Ladejarl', 'Hlaðajarl', 'Earls of Lade'],
  originYear: 870, endYear: 1030, reignSpan: '9th–11th centuries', region: 'Trøndelag & Norway', originPlace: 'Lade (Hlaðir), by Trondheim',
  arms: 'None — the Viking-age jarls ruled before the age of heraldry.',
  image: IMG('H%C3%A5kon%20jarl.jpg'),
  imageInfo: { caption: 'Jarl Håkon Sigurdsson of Lade, effective ruler of Norway, in an 1895 drawing by Christian Krohg for an edition of the Heimskringla.', creator: 'Christian Krohg', date: '1895 (Håkon d. 995)', source: 'Wikimedia Commons', sourceUrl: 'https://commons.wikimedia.org/wiki/File:H%C3%A5kon_jarl.jpg', note: 'A late-19th-century saga illustration, not a contemporary likeness; no image of Håkon survives from his own time.' },
  summary: 'The mighty earls of Lade in Trøndelag, counterweights to the kings of Norway and, under Håkon Sigurdsson, rulers of the country in their own right.',
  overview: 'The Hlaðir jarls, based at Lade near modern Trondheim, were the dominant lords of Trøndelag and the northern Norwegian coast through the Viking Age. Sometimes allied with the Fairhair kings and sometimes their rivals, they twice effectively ruled Norway — most powerfully under Håkon Sigurdsson, the last great champion of Norse paganism, before Olaf Tryggvason overthrew him in 995.',
  founder: { displayName: 'Håkon Grjotgardsson', note: 'First jarl of Lade to appear in the sagas (no Codex article yet)' },
  notableMembers: [
    { displayName: 'Sigurd Håkonsson', note: 'Jarl of Lade; foster-father and ally of Haakon the Good' },
    P('jarl-hakon-sigurdsson', 'Håkon Sigurdsson', 'Ruled Norway as jarl; defender of the old religion, d. 995'),
    { displayName: 'Eiríkr Hákonarson', note: 'Håkon’s son; later ruled Norway as jarl under Cnut the Great' }
  ],
  familyTree: { caption: 'The line of the Lade jarls through Sigurd to Håkon and his son Eiríkr; only Håkon Sigurdsson has a Codex article so far.', root: {
    name: 'Sigurd Håkonsson', note: 'Jarl of Lade, d. 962',
    children: [
      { name: 'Håkon Sigurdsson', personSlug: 'jarl-hakon-sigurdsson', note: 'ruler of Norway, d. 995', children: [
        { name: 'Eiríkr Hákonarson', note: 'jarl of Norway under Cnut' }
      ] }
    ]
  } },
  contentSections: [
    { title: 'Origins', paragraphs: [
      'The jarls of Lade rose as the great regional dynasty of Trøndelag, the rich farming country around the Trondheimsfjord, with their seat at Lade (Hlaðir). As Harald Fairhair’s descendants tried to build a single Norwegian kingship, the Lade jarls held the north as semi-independent lords whose support could make or break a king. Sigurd Håkonsson was the mainstay of Haakon the Good’s reign, and his family kept the old sacrificial cult at the great temple-feasts.',
      'Their power rested on control of Trøndelag’s wealth and warriors and on the sea-lanes of the northern coast, giving them a durable base independent of the southern kings.'
    ] },
    { title: 'Håkon Sigurdsson, ruler of Norway', paragraphs: [
      'After the sons of Eirik Bloodaxe killed his father, Håkon Sigurdsson allied with the Danish king Harald Bluetooth, drove out his enemies, and by the 970s ruled most of Norway as jarl — at first under nominal Danish overlordship, then in open defiance of it. A committed pagan, he restored the old temples and sacrifices that the Christian kings had attacked.',
      'His authority survived a great sea-battle at Hjörungavágr, where he shattered a fleet of the Jomsvikings sent against him. But his high-handed rule and, in the sagas, his womanising turned the Trøndelag farmers against him, and when Olaf Tryggvason arrived to claim the throne in 995 Håkon was hunted down and killed, hidden in a pigsty, by his own slave.'
    ] },
    { title: 'Legacy', paragraphs: [
      'The house did not end with Håkon: his sons Eiríkr and Sveinn returned after Olaf Tryggvason’s death to govern Norway again as jarls, this time under the Danish king Cnut the Great, keeping Lade at the centre of Norwegian power into the eleventh century.',
      'The Lade jarls represent the great regional lordship that the unifying kings of Norway had to absorb or destroy; their fall marked a decisive stage in the Christianisation and centralisation of the kingdom.'
    ] }
  ],
  timeline: [
    { date: 'c. 970s', title: 'Håkon rules Norway', description: 'Håkon Sigurdsson governs most of Norway as jarl and restores the pagan cult.', links: [{ title: 'Håkon Sigurdsson', type: 'person', slug: 'jarl-hakon-sigurdsson' }] },
    { date: 'c. 986', title: 'Battle at Hjörungavágr', description: 'Håkon destroys the Jomsviking fleet sent to overthrow him.' },
    { date: '995', title: 'Fall of Håkon', description: 'Olaf Tryggvason’s arrival ends Håkon’s rule; he is killed by his own slave.' }
  ],
  relatedEntries: { people: [
    { title: 'Håkon Sigurdsson', type: 'person', slug: 'jarl-hakon-sigurdsson', label: 'The jarl who ruled Norway' }
  ], locations: [{ name: 'Kingdom of Norway', title: 'Kingdom of Norway', type: 'location', slug: 'kingdom-of-norway', label: 'The realm they held and contested' }], houses: [
    { title: 'House of Fairhair', type: 'house', slug: 'house-of-fairhair', label: 'The royal line they served and rivalled' }
  ] },
  sources: [
    { title: 'Haakon Sigurdsson — Encyclopaedia Britannica', author: 'Encyclopaedia Britannica', type: 'encyclopedia', url: 'https://www.britannica.com/biography/Haakon-Sigurdsson' },
    { title: 'Haakon Sigurdsson — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Haakon_Sigurdsson' },
    { title: 'Earl of Lade — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Earl_of_Lade' }
  ]
}

// 2. House of Poitiers (Ramnulfids) — the dukes of Aquitaine
const poitiers = {
  id: 'house-of-poitiers', type: 'house', name: 'House of Poitiers',
  aliases: ['House of Poitiers / Ramnulfids', 'House of Poitiers', 'Ramnulfids', 'Ramnulfid', 'Poitevin dynasty', 'Dukes of Aquitaine'],
  originYear: 845, endYear: 1137, reignSpan: '9th century–1137', region: 'Aquitaine & Poitou', originPlace: 'Poitou, western France',
  arms: 'Gules, a lion (leopard) passant guardant or — the arms of the dukes of Aquitaine.',
  image: IMG('Church%20of%20Fontevraud%20Abbey%20Eleanor%20of%20Aquitaine%20effigy%20detail.jpg'),
  imageInfo: { caption: 'The tomb effigy of Eleanor of Aquitaine, last heiress of the house, at Fontevraud Abbey — she is shown reading a book.', creator: 'Fontevraud Abbey (sculpted effigy)', date: 'Early 13th century (Eleanor d. 1204)', source: 'Wikimedia Commons', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Church_of_Fontevraud_Abbey_Eleanor_of_Aquitaine_effigy_detail.jpg', note: 'Her near-contemporary carved and painted tomb effigy, one of the earliest such royal effigies to survive.' },
  summary: 'The Ramnulfid counts of Poitou and dukes of Aquitaine, whose vast duchy passed through the great heiress Eleanor of Aquitaine to the crowns of France and then England.',
  overview: 'The house of Poitiers, or Ramnulfids, ruled the county of Poitou and the duchy of Aquitaine — one of the largest and richest fiefs of medieval France — from the ninth century. It produced the troubadour duke William IX; its line ended with the heiress Eleanor of Aquitaine, whose marriages to Louis VII of France and then Henry II of England carried Aquitaine into the heart of European high politics.',
  founder: { displayName: 'Ramnulf I of Poitiers', note: 'Count of Poitiers from whom the Ramnulfid line takes its name (no Codex article yet)' },
  notableMembers: [
    { displayName: 'William IX', note: '"the Troubadour"; Duke of Aquitaine and the first known troubadour poet' },
    { displayName: 'William X', note: 'Eleanor’s father; the last duke of the male line' },
    P('eleanor-of-aquitaine', 'Eleanor of Aquitaine', 'Duchess in her own right; Queen of France, then of England')
  ],
  familyTree: { caption: 'The last generations of the Ramnulfid dukes, ending with the heiress Eleanor, who carried Aquitaine into the French and then the English royal houses. ⚭ marks a marriage.', root: {
    name: 'William IX', note: 'Duke of Aquitaine, "the Troubadour"',
    children: [
      { name: 'William X', note: 'last duke of the male line, d. 1137', children: [
        { name: 'Eleanor of Aquitaine', personSlug: 'eleanor-of-aquitaine', note: 'heiress; Queen of France then of England' }
      ] }
    ]
  } },
  contentSections: [
    { title: 'Origins', paragraphs: [
      'The Ramnulfids emerged in the ninth century as counts of Poitou, taking their name from Ramnulf I. As Carolingian central authority collapsed, they built a great territorial principality in the south-west, uniting Poitou with the duchy of Aquitaine and lands stretching toward Gascony. By the tenth and eleventh centuries the dukes of Aquitaine were among the most powerful princes of France, nominal vassals of the Capetian kings but effectively independent rulers of a rich, distinct region with its own language and culture.',
      'Their court at Poitiers became a centre of the new vernacular poetry, and Duke William IX is the earliest troubadour whose verse survives — founder of a courtly literary tradition that spread across Europe.'
    ] },
    { title: 'Eleanor and the great inheritance', paragraphs: [
      'The line ended in the male line with William X, who died in 1137 leaving his teenage daughter Eleanor as the greatest heiress in western Europe. Within weeks she was married to the heir to the French throne, and as queen of Louis VII she brought Aquitaine into the French royal orbit; she accompanied him on the Second Crusade before the marriage was annulled in 1152.',
      'Eleanor then married Henry of Anjou, soon Henry II of England, joining Aquitaine to the sprawling Angevin dominions that ran from Scotland to the Pyrenees. Her sons Richard the Lionheart and John both ruled the duchy, and her long, turbulent life made her one of the defining figures of the twelfth century.'
    ] },
    { title: 'Legacy', paragraphs: [
      'Through Eleanor the Ramnulfid inheritance shaped a century of Anglo-French conflict: Aquitaine remained an English possession, held of the French crown, and the tension over it helped set the stage for the Hundred Years’ War. The duchy’s wine trade through Bordeaux bound it economically to England for three hundred years.',
      'The house of Poitiers thus vanished as a ruling line precisely by succeeding too well — its heiress carrying one of Europe’s greatest fiefs into the marriages that redrew the political map of the West.'
    ] }
  ],
  timeline: [
    { date: '1137', title: 'Eleanor inherits Aquitaine', description: 'The death of Duke William X leaves Eleanor heiress of the duchy; she marries Louis VII of France.', links: [{ title: 'Eleanor of Aquitaine', type: 'person', slug: 'eleanor-of-aquitaine' }] },
    { date: '1152', title: 'Eleanor marries Henry of Anjou', description: 'After her French marriage is annulled, Aquitaine passes toward the Angevin empire.' },
    { date: '1204', title: 'Death of Eleanor', description: 'The last of the Poitevin line dies at Fontevraud after an extraordinary career.' }
  ],
  relatedEntries: { people: [
    { title: 'Eleanor of Aquitaine', type: 'person', slug: 'eleanor-of-aquitaine', label: 'Last heiress of the house' }
  ], locations: [{ name: 'Aquitaine', title: 'Aquitaine', type: 'location', slug: 'aquitaine', label: 'The duchy they ruled' }], houses: [
    { title: 'House of Plantagenet', type: 'house', slug: 'house-of-plantagenet', label: 'The Angevin house Eleanor married into' },
    { title: 'House of Capet', type: 'house', slug: 'house-of-capet', label: 'The French royal house of her first marriage' }
  ] },
  sources: [
    { title: 'Eleanor of Aquitaine — Encyclopaedia Britannica', author: 'Encyclopaedia Britannica', type: 'encyclopedia', url: 'https://www.britannica.com/biography/Eleanor-of-Aquitaine' },
    { title: 'Eleanor of Aquitaine — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Eleanor_of_Aquitaine' },
    { title: 'Duke of Aquitaine — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Duke_of_Aquitaine' }
  ]
}

// 3. House of Courtenay — the last Latin emperors of Constantinople
const courtenay = {
  id: 'house-of-courtenay', type: 'house', name: 'House of Courtenay',
  aliases: ['House of Courtenay', 'Courtenay', 'de Courtenay', 'Courtenay dynasty'],
  originYear: 1216, endYear: 1261, reignSpan: '1216–1261 (Latin Empire)', region: 'France & the Latin Empire of Constantinople', originPlace: 'Courtenay, in the Gâtinais',
  arms: 'Or, three torteaux gules — the three red roundels of Courtenay.',
  image: IMG('Peter%202%20of%20Courtenay.jpg'),
  imageInfo: { caption: 'Peter of Courtenay, Latin Emperor of Constantinople, on horseback — a 19th-century engraving after his medieval equestrian seal.', creator: 'Engraving after his seal', date: '19th-century engraving (Peter d. c. 1219)', source: 'Wikimedia Commons', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Peter_2_of_Courtenay.jpg', note: 'A later engraving reproducing Peter’s contemporary seal, the closest surviving image of the emperor.' },
  summary: 'The French house, a Capetian cadet branch, that supplied the last emperors of the Latin Empire of Constantinople — Peter, Robert, and Baldwin II.',
  overview: 'The Courtenays were lords of the Gâtinais whose male line married a grandson of Louis VI of France, making the house a cadet branch of the Capetians. Through marriage into the Latin imperial family, Peter of Courtenay became Latin Emperor of Constantinople in 1216, and his sons Robert and Baldwin II were the last to hold that fragile throne, which fell to the Byzantines in 1261.',
  founder: { displayName: 'Peter I of Courtenay', note: 'Youngest son of Louis VI of France; married the Courtenay heiress (no Codex article yet)' },
  notableMembers: [
    P('peter-of-courtenay', 'Peter of Courtenay', 'Latin Emperor of Constantinople; captured on his way east'),
    { displayName: 'Robert of Courtenay', note: 'Peter’s son; Latin Emperor, 1221–1228' },
    { displayName: 'Baldwin II', note: 'The last Latin Emperor; lost Constantinople in 1261' }
  ],
  familyTree: { caption: 'The imperial Courtenays: Peter and his sons Robert and Baldwin II, the last three Latin emperors of Constantinople; only Peter has a Codex article so far.', root: {
    name: 'Peter of Courtenay', personSlug: 'peter-of-courtenay', note: 'Latin Emperor from 1216',
    children: [
      { name: 'Robert of Courtenay', note: 'Latin Emperor, 1221–1228' },
      { name: 'Baldwin II', note: 'last Latin Emperor, lost the city in 1261' }
    ]
  } },
  contentSections: [
    { title: 'Origins', paragraphs: [
      'The house took its name from the lordship of Courtenay in the Gâtinais, south of Paris. Its decisive rise came when the heiress of Courtenay married Peter, a younger son of King Louis VI of France, so that the ruling line of the house descended from the Capetian kings — a royal cadet branch, though one without a great territorial base of its own. A separate branch of the family had earlier held the crusader county of Edessa in the East.',
      'That combination of royal blood and crusading connection drew the Courtenays into the affairs of the Latin East created by the Fourth Crusade.'
    ] },
    { title: 'Emperors of Constantinople', paragraphs: [
      'When the Latin Empire of Constantinople, founded after the Fourth Crusade’s sack of the city in 1204, lost its emperors of the house of Flanders-Hainaut, the crown passed by marriage to Peter of Courtenay, who was elected emperor in 1216. Peter never reached his capital: crowned at Rome, he was captured in the Balkans by the ruler of Epirus while marching east, and died in captivity.',
      'His widow and then his sons ruled at Constantinople. Robert of Courtenay presided over a shrinking, impoverished empire hemmed in by the Greek successor states, and the last emperor, Baldwin II, spent his reign pawning relics and touring Europe begging for aid.'
    ] },
    { title: 'The fall of the Latin Empire', paragraphs: [
      'In 1261 the Byzantines of Nicaea, under Michael VIII Palaiologos, retook Constantinople almost without a fight while its defenders were away, and Baldwin II fled to the West. The Latin Empire was extinguished after little more than half a century, and the Courtenay emperors and their heirs kept only an empty title.',
      'The house is remembered as the last dynasty of that short-lived Latin state — a Capetian offshoot whose brush with an imperial crown ended in exile, even as the wider Courtenay family endured among the nobility of France and England.'
    ] }
  ],
  timeline: [
    { date: '1216', title: 'Peter of Courtenay elected emperor', description: 'The Latin imperial crown passes to the Courtenay line.', links: [{ title: 'Peter of Courtenay', type: 'person', slug: 'peter-of-courtenay' }] },
    { date: '1217', title: 'Peter captured', description: 'Marching to Constantinople, Peter is taken prisoner in the Balkans and dies in captivity.' },
    { date: '1261', title: 'Fall of the Latin Empire', description: 'Michael VIII Palaiologos retakes Constantinople; Baldwin II, the last Courtenay emperor, flees.' }
  ],
  relatedEntries: { people: [
    { title: 'Peter of Courtenay', type: 'person', slug: 'peter-of-courtenay', label: 'Latin Emperor of Constantinople' }
  ], locations: [BYZ()], houses: [
    { title: 'House of Flanders-Hainaut', type: 'house', slug: 'house-of-flanders-hainaut', label: 'The Latin emperors before them' },
    { title: 'House of Capet', type: 'house', slug: 'house-of-capet', label: 'The royal house they branched from' }
  ] },
  sources: [
    { title: 'Latin Empire — Encyclopaedia Britannica', author: 'Encyclopaedia Britannica', type: 'encyclopedia', url: 'https://www.britannica.com/place/Latin-Empire-of-Constantinople' },
    { title: 'Peter II of Courtenay — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Peter_II_of_Courtenay' },
    { title: 'House of Courtenay — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/House_of_Courtenay' }
  ]
}

// 4. House of Botaneiates — the emperor between Doukas and Komnenos
const botaneiates = {
  id: 'house-of-botaneiates', type: 'house', name: 'House of Botaneiates',
  aliases: ['Botaneiates (transitional)', 'Botaneiates', 'Botaniates', 'Botaneiates dynasty'],
  originYear: 1078, endYear: 1081, reignSpan: '1078–1081', region: 'The Byzantine Empire', originPlace: 'The Anatolian themes',
  arms: 'None — Byzantine emperors used no Western heraldry; imperial identity was shown through the crown, loros, and labarum.',
  image: IMG('Meister%20der%20Predigtsammlung%20des%20Heiligen%20Johannes%20Chrysostomus%20001.jpg'),
  imageInfo: { caption: 'Emperor Nikephoros III Botaneiates in full regalia between St John Chrysostom and the Archangel Michael, in a manuscript made during his reign (Coislin 79, c. 1078–1081).', creator: 'Byzantine court manuscript (Coislin 79)', date: 'c. 1078–1081', source: 'Wikimedia Commons', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Meister_der_Predigtsammlung_des_Heiligen_Johannes_Chrysostomus_001.jpg', note: 'A contemporary imperial portrait from a luxury manuscript made for Nikephoros III himself.' },
  summary: 'The brief imperial house of Nikephoros III Botaneiates, the elderly general who held the Byzantine throne between the Doukas and Komnenos dynasties.',
  overview: 'The Botaneiatai were an old Anatolian military family. Their one emperor, Nikephoros III Botaneiates, seized the throne in 1078 amid the collapse that followed the defeat at Manzikert, ruling a shrinking empire beset by revolts. After three years he was overthrown by Alexios I Komnenos, whose accession began the Komnenian restoration — making the Botaneiates reign a short bridge between two great dynasties.',
  founder: P('nikephoros-iii-botaneiates', 'Nikephoros III Botaneiates', 'Anatolian general who seized the throne in 1078'),
  seats: [BYZ()],
  notableMembers: [
    P('nikephoros-iii-botaneiates', 'Nikephoros III Botaneiates', 'Byzantine emperor, 1078–1081'),
    { displayName: 'Maria of Alania', note: 'His empress, a Georgian princess, previously married to Michael VII Doukas' }
  ],
  familyTree: { caption: 'A one-emperor house: the Anatolian family of the Botaneiatai produced only Nikephoros III, whose short reign linked the Doukas and Komnenos dynasties.', root: {
    name: 'The Botaneiatai family', note: 'Anatolian military aristocracy',
    children: [
      { name: 'Nikephoros III Botaneiates', personSlug: 'nikephoros-iii-botaneiates', note: 'Emperor, 1078–1081' }
    ]
  } },
  contentSections: [
    { title: 'Origins', paragraphs: [
      'The Botaneiatai were a distinguished family of the Anatolian military aristocracy, the class of provincial generals who had long supplied Byzantium with soldiers and emperors. Nikephoros Botaneiates rose through decades of campaigning on the empire’s eastern and Balkan frontiers, and claimed a lineage reaching back to the great tenth-century house of Phokas and beyond.',
      'His bid for the throne came in the crisis years of the 1070s, when the empire reeled from the loss of most of Anatolia to the Seljuk Turks and from repeated civil wars among its generals.'
    ] },
    { title: 'Nikephoros III on the throne', paragraphs: [
      'In 1078 Nikephoros, already an old man, revolted against the ineffective Michael VII Doukas and was proclaimed emperor, entering Constantinople and marrying Michael’s empress, Maria of Alania, to bolster his legitimacy. His short reign was consumed by fresh rebellions — including that of Nikephoros Bryennios, whom he defeated with the help of a young general named Alexios Komnenos — and by the empire’s continuing military and financial collapse.',
      'The luxury manuscripts he commissioned, such as the homilies of John Chrysostom now called Coislin 79, show him in full imperial majesty, but the reality of his rule was a state contracting on every front.'
    ] },
    { title: 'Fall and significance', paragraphs: [
      'In 1081 the very general who had served him, Alexios Komnenos, turned against the childless old emperor and seized Constantinople. Nikephoros abdicated without much resistance and retired to a monastery, where he soon died. His overthrow brought Alexios I to the throne and inaugurated the Komnenian dynasty that would stabilise and partly restore the empire.',
      'The house of Botaneiates thus amounts to a single reign, but a pivotal one: the last flicker of the old Anatolian military aristocracy’s hold on the throne before the Komnenoi remade the Byzantine state.'
    ] }
  ],
  timeline: [
    { date: '1078', title: 'Nikephoros III seizes the throne', description: 'The old general overthrows Michael VII Doukas and is crowned emperor.', links: [{ title: 'Nikephoros III Botaneiates', type: 'person', slug: 'nikephoros-iii-botaneiates' }] },
    { date: '1078', title: 'Revolt of Bryennios crushed', description: 'Alexios Komnenos defeats the rebel Nikephoros Bryennios for the emperor.' },
    { date: '1081', title: 'Overthrown by Alexios I', description: 'Alexios Komnenos takes Constantinople; Nikephoros abdicates to a monastery.' }
  ],
  relatedEntries: { people: [
    { title: 'Nikephoros III Botaneiates', type: 'person', slug: 'nikephoros-iii-botaneiates', label: 'The one emperor of the house' }
  ], locations: [BYZ()], houses: [
    { title: 'House of Doukas', type: 'house', slug: 'house-of-doukas', label: 'The dynasty he displaced' },
    { title: 'House of Komnenos', type: 'house', slug: 'house-of-komnenos', label: 'The dynasty that overthrew him' }
  ] },
  sources: [
    { title: 'Nicephorus III Botaniates — Encyclopaedia Britannica', author: 'Encyclopaedia Britannica', type: 'encyclopedia', url: 'https://www.britannica.com/biography/Nicephorus-III-Botaniates' },
    { title: 'Nikephoros III Botaneiates — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Nikephoros_III_Botaneiates' },
    { title: 'Coislin 79 — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Nikephoros_III_Botaneiates' }
  ]
}

if (!Array.isArray(data.houses)) data.houses = []
for (const house of [lade, poitiers, courtenay, botaneiates]) {
  const i = data.houses.findIndex((h) => h.id === house.id)
  if (i >= 0) data.houses[i] = house; else data.houses.push(house)
}

// Cheap alias fixes for genuine cadet / ancestral branches of existing houses:
// Valois-Burgundy (John the Fearless) is a cadet branch of the House of Valois;
// the Pippinids/Arnulfings ARE the ancestral Carolingian family.
const addAlias = (id, alias) => {
  const h = data.houses.find((x) => x.id === id)
  if (h) { h.aliases = h.aliases ?? []; if (!h.aliases.includes(alias)) h.aliases.push(alias) }
}
addAlias('house-of-valois', 'Valois-Burgundy')
addAlias('house-of-carolingian', 'Pippinid / Arnulfing')

writeFileSync(dataPath, JSON.stringify(data, null, 2))
console.log(`Batch P written. houses now (${data.houses.length}).`)
