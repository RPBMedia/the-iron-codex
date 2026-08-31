// M5 (People, batch 1): full biographies for three significant order figures who
// were named-but-unlinked in the order tables/prose — Henry the Navigator
// (Order of Christ), Wolter von Plettenberg (Livonian Order), and Gérard de
// Ridefort (Templar master at Hattin). All non-rulers, so no succession boxes.
// Idempotent upsert. Modelled on the existing character schema (jacques-de-molay).
import { readFileSync, writeFileSync } from 'node:fs'

const dataPath = new URL('../server/data/history.json', import.meta.url)
const data = JSON.parse(readFileSync(dataPath, 'utf8'))

const fp = (file) =>
  `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(file.replace(/ /g, '_'))}`
const per = (slug, title) => ({ title, type: 'person', slug })
const loc = (slug, title) => ({ title, type: 'location', slug })
const evt = (slug, title) => ({ title, type: 'event', slug })
const ord = (slug, title) => ({ title, type: 'order', slug })

const henry = {
  id: 'henry-the-navigator',
  type: 'character',
  name: 'Henry the Navigator',
  aliases: ['Prince Henry the Navigator', 'Infante Dom Henrique', 'Henry of Portugal', 'Dom Henrique'],
  born: 1394,
  died: 1460,
  deathAge: '66',
  causeOfDeath: 'Henry died at Sagres in 1460, having spent his last decades directing Portuguese voyages down the African coast.',
  restingPlace: 'Monastery of Batalha, Portugal',
  location: 'Kingdom of Portugal',
  image: fp('Henry the Navigator (Cronicas).jpg'),
  title: 'Prince of Portugal and patron of the discoveries',
  roles: ['Prince of Portugal', 'Governor of the Order of Christ', 'patron of Atlantic exploration'],
  birth: { date: '4 March 1394', place: null },
  death: { date: '13 November 1460', place: null, circumstance: 'Died at Sagres, in the Algarve, after four decades sponsoring exploration.' },
  quickFacts: {
    realm: 'Kingdom of Portugal',
    dynasty: 'House of Aviz',
    culture: 'Portuguese',
    knownFor: 'Sponsored the early Portuguese voyages of discovery'
  },
  imageInfo: {
    caption: 'Prince Henry the Navigator in a Portuguese chronicle depiction.',
    creator: 'Unknown',
    date: 'medieval / early-modern depiction',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Henry_the_Navigator_(Cronicas).jpg',
    note: 'A traditional depiction; the best-known likeness is the St Vincent Panels, not a contemporary portrait.'
  },
  overview: [
    'Henry the Navigator was a prince of the House of Aviz and, as governor of the Order of Christ, the great patron of the first Portuguese voyages of discovery down the Atlantic coast of Africa.',
    'He funded exploration from the wealth of the order that had inherited the Templars in Portugal, tying the age of discovery to the crusading tradition.'
  ],
  contentSections: [
    { title: 'Overview', paragraphs: [
      'Henry the Navigator was a Portuguese prince who, from the revenues of the Order of Christ, sponsored the systematic exploration of the Atlantic islands and the west coast of Africa — the opening of the European age of discovery.'
    ] },
    { title: 'Birth and early life', paragraphs: [
      'Born at Porto in 1394, Henry was the third surviving son of King John I of Portugal, founder of the House of Aviz, and Philippa of Lancaster. He first won fame in 1415 at the capture of Ceuta in North Africa, a crusading enterprise that turned his attention to the lands beyond.'
    ] },
    { title: 'Character and Personality', paragraphs: [
      'Henry was an austere, intensely pious, and single-minded man, closer in temperament to a crusading monk than to a Renaissance prince. He never married, wore a hair shirt in later life according to his chroniclers, and folded his maritime ambitions into the religious mission of the Order of Christ, whose cross flew on the sails of his ships.',
      'He was also patient, methodical, and stubborn: for years his captains failed to round the feared Cape Bojador before one finally passed it in 1434, and Henry kept sending them until the barrier of fear was broken. That persistence, more than any technical genius, is his real achievement.',
      'The romantic image of Henry presiding over a great "school of navigation" at Sagres, teaching cartography and astronomy, is largely a later invention. The historical Henry was a driven, devout organiser and financier of exploration — a crusader who turned the ocean into his frontier — rather than a scientist or a sailor; he rarely went to sea himself.'
    ] },
    { title: 'Governor of the Order of Christ', paragraphs: [
      'In 1420 Henry became governor of the Order of Christ, the Portuguese successor to the Knights Templar. He directed its considerable wealth to fitting out expeditions, and the order’s red cross became the emblem of Portuguese expansion.',
      'Under his patronage Portuguese captains colonised Madeira and the Azores and pushed down the African coast past Cape Bojador, opening the sea route that would eventually lead, after his death, to India and Brazil.'
    ] },
    { title: 'Death', paragraphs: [
      'Henry died at Sagres in the Algarve in 1460, his voyages having reached the coast of Sierra Leone. He was buried in the monastery of Batalha among the kings of his house.'
    ] },
    { title: 'Legacy', paragraphs: [
      'Henry did not sail the ocean he opened, but the machinery of exploration he built — the money of the Order of Christ, the accumulated charts and experience of his captains — carried Portugal to the front rank of the discoveries within a generation of his death.',
      'He remains the figure who bound the crusading orders to the age of discovery, and the cross of the order he governed sailed on Portuguese ships across three oceans.'
    ] }
  ],
  timeline: [
    { date: '1394', title: 'Born at Porto', description: 'Third surviving son of King John I of Portugal and Philippa of Lancaster.' },
    { date: '1415', title: 'Capture of Ceuta', description: 'Henry wins his spurs at the seizure of the North African port, turning his ambitions overseas.' },
    { date: '1420', title: 'Governor of the Order of Christ', description: 'Henry takes charge of the Templars’ Portuguese heir and its wealth.' },
    { date: '1434', title: 'Cape Bojador rounded', description: 'His captain Gil Eanes finally passes the feared cape after years of failed attempts.' },
    { date: '1444', title: 'Down the African coast', description: 'Henry’s ships reach the Senegal and the Cape Verde region, opening the West African trade.' },
    { date: '1460', title: 'Death at Sagres', description: 'Henry dies in the Algarve; his voyages have reached Sierra Leone.' }
  ],
  relatedEntries: {
    people: [per('john-i-of-portugal', 'John I of Portugal')],
    locations: [loc('kingdom-of-portugal', 'Kingdom of Portugal')],
    orders: [ord('order-of-christ', 'Order of Christ'), ord('order-of-aviz', 'Order of Aviz')]
  },
  sources: [
    { title: 'Prince Henry “the Navigator”: A Life', author: 'Peter Russell', type: 'book' },
    { title: 'Encyclopaedia Britannica: Henry the Navigator', author: 'Encyclopaedia Britannica', type: 'reference work', url: 'https://www.britannica.com/biography/Henry-the-Navigator' }
  ]
}

const plettenberg = {
  id: 'wolter-von-plettenberg',
  type: 'character',
  name: 'Wolter von Plettenberg',
  aliases: ['Walter von Plettenberg', 'Wolther von Plettenberg'],
  born: 1450,
  died: 1535,
  deathAge: 'about 85',
  causeOfDeath: 'Plettenberg died in 1535 in extreme old age, still master of the Livonian Order.',
  restingPlace: 'Wenden (Cēsis), Livonia',
  location: 'Livonia',
  image: fp('Wolter von Plettenberg (1450-1535).jpg'),
  title: 'Master of the Livonian Order',
  roles: ['Master (Landmeister) of the Livonian Order'],
  birth: { date: 'c. 1450', place: null },
  death: { date: '28 February 1535', place: null, circumstance: 'Died in old age at the head of the Livonian Order.' },
  quickFacts: {
    realm: 'Livonia (Terra Mariana)',
    dynasty: 'Livonian Order',
    culture: 'Baltic German (Teutonic)',
    knownFor: 'The greatest master of the Livonian Order'
  },
  imageInfo: {
    caption: 'Wolter von Plettenberg (c. 1450–1535), master of the Livonian Order.',
    creator: 'Unknown',
    date: 'later portrait',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Wolter_von_Plettenberg_(1450-1535).jpg',
    note: 'A later portrait of the master; no contemporary likeness survives.'
  },
  overview: [
    'Wolter von Plettenberg was the greatest master of the Livonian Order, who beat back the rising power of Muscovy and won his Baltic state a long peace.',
    'He held Livonia together through the Reformation, tolerating Lutheranism while keeping the order and its lands intact.'
  ],
  contentSections: [
    { title: 'Overview', paragraphs: [
      'Wolter von Plettenberg was master of the Livonian Order from 1494 to 1535 and its greatest leader — soldier, statesman, and effective sovereign of the crusader lands of Livonia during their last age of strength.'
    ] },
    { title: 'Birth and early life', paragraphs: [
      'Born about 1450 into a Westphalian noble family, Plettenberg entered the Teutonic Order’s Livonian branch as a young man and rose through its offices during a period of mounting pressure from the Orthodox east.'
    ] },
    { title: 'Character and Personality', paragraphs: [
      'Plettenberg was a cautious, far-sighted statesman-soldier rather than a reckless crusader. His instincts were defensive: he fought Muscovy hard when he had to, but his lasting aim was to secure Livonia’s independence and buy it time, not to seek glory in endless war.',
      'He was politically deft, holding a fragile balance between the order, the archbishop of Riga, the towns, and the great powers pressing on Livonia — Muscovy, Poland-Lithuania, and Sweden. Contemporaries respected him as steady, shrewd, and personally austere.',
      'His religious moderation defined his last decades. When the Reformation reached Livonia he allowed Lutheranism to spread and issued guarantees of religious peace, yet — unlike the Prussian branch under Albert of Brandenburg — he refused to secularise the order and turn it into a private duchy, keeping the old institution alive for another generation.'
    ] },
    { title: 'Master of the Livonian Order', paragraphs: [
      'Elected master in 1494, Plettenberg confronted the expansion of Muscovy under Ivan III. In a hard-fought campaign he defeated a far larger Russian army at Smolino in 1502, checking Moscow’s advance and securing a truce that gave Livonia decades of relative peace.',
      'For the rest of his long rule he governed Livonia as its effective prince, strengthening its castles and finances and steering it through the religious upheaval of the 1520s without letting the order’s state collapse.'
    ] },
    { title: 'Death', paragraphs: [
      'Plettenberg died in 1535 in extreme old age, still master of the order. The peace he had won outlived him by only a generation before the Livonian War destroyed the order in 1561.'
    ] },
    { title: 'Legacy', paragraphs: [
      'Plettenberg is remembered as the last great master of the Livonian Order and, in Baltic-German memory, as the founder of Livonia’s golden autumn. His victory at Smolino and the long peace that followed marked the high point of the order’s independence.',
      'That he kept the order intact rather than secularising it meant that medieval Livonia survived, in its old form, decades longer than the Teutonic state in Prussia.'
    ] }
  ],
  timeline: [
    { date: 'c. 1450', title: 'Born in Westphalia', description: 'Into a noble family that supplied the Teutonic Order with knights.' },
    { date: '1494', title: 'Elected master', description: 'Becomes master of the Livonian Order as Muscovy’s power rises in the east.' },
    { date: '1501', title: 'War with Muscovy', description: 'Plettenberg campaigns against Ivan III’s expanding grand duchy.' },
    { date: '1502', title: 'Victory at Smolino', description: 'Defeats a much larger Russian army and wins a long truce for Livonia.' },
    { date: '1525', title: 'Religious peace', description: 'Tolerates the spreading Reformation but refuses to secularise the order.' },
    { date: '1535', title: 'Death in office', description: 'Dies in extreme old age, still master of the order.' }
  ],
  relatedEntries: {
    locations: [loc('novgorod', 'Novgorod'), loc('grand-duchy-of-lithuania', 'Grand Duchy of Lithuania')],
    orders: [ord('livonian-order', 'Livonian Order'), ord('teutonic-order', 'Teutonic Order')]
  },
  sources: [
    { title: 'The Northern Crusades', author: 'Eric Christiansen', type: 'book' },
    { title: 'The Livonian Crusade', author: 'William Urban', type: 'book' }
  ]
}

const ridefort = {
  id: 'gerard-de-ridefort',
  type: 'character',
  name: 'Gérard de Ridefort',
  aliases: ['Gerard de Ridefort', 'Gerard of Ridefort'],
  born: null,
  died: 1189,
  deathAge: 'unknown',
  causeOfDeath: 'Gérard was killed at the siege of Acre in 1189, fighting Saladin’s forces.',
  restingPlace: 'Unknown',
  location: 'Kingdom of Jerusalem',
  image: fp('Battle of Cresson.jpg'),
  title: 'Grand Master of the Knights Templar',
  roles: ['Grand Master of the Knights Templar'],
  birth: { date: 'unknown', place: null },
  death: { date: '1189', place: null, circumstance: 'Killed at the siege of Acre.' },
  quickFacts: {
    realm: 'Kingdom of Jerusalem',
    dynasty: 'Knights Templar',
    culture: 'Latin Christian (Crusader)',
    knownFor: 'The Templar master at the Hattin catastrophe'
  },
  imageInfo: {
    caption: 'The rout at Cresson in 1187, where Ridefort’s reckless charge was destroyed.',
    creator: 'Unknown',
    date: 'medieval manuscript image',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Battle_of_Cresson.jpg',
    note: 'A depiction of the 1187 rout; no likeness of Ridefort himself survives.'
  },
  overview: [
    'Gérard de Ridefort was Grand Master of the Knights Templar in the years of catastrophe, whose reckless counsel helped drive the Kingdom of Jerusalem to its destruction at the Battle of Hattin in 1187.',
    'Captured at Hattin and later released, he died fighting at the siege of Acre in 1189.'
  ],
  contentSections: [
    { title: 'Overview', paragraphs: [
      'Gérard de Ridefort was master of the Knights Templar from 1185 to 1189, remembered by the chroniclers as a rash and vengeful commander whose belligerent advice contributed to the loss of the Kingdom of Jerusalem to Saladin.'
    ] },
    { title: 'Birth and early life', paragraphs: [
      'A Flemish knight of uncertain birth, Gérard came east to seek his fortune and, after a bitter quarrel with the count of Tripoli over a promised marriage and inheritance, entered the Templars — a grievance that chroniclers say coloured his later conduct.'
    ] },
    { title: 'Character and Personality', paragraphs: [
      'Ridefort comes down through the sources as brave but headstrong, proud, and driven by grudges — the very opposite of the cautious discipline the Templar Rule prized. Where other commanders counselled patience, he pressed for the reckless attack.',
      'At the skirmish of Cresson in May 1187 he goaded a tiny force of knights into charging a far larger Muslim army, and it was annihilated; he was one of the few to escape. Weeks later, at the war council before Hattin, his insistence overrode wiser voices and pushed King Guy of Lusignan into the fatal march across a waterless plain toward Saladin’s waiting army.',
      'His personal courage was never in doubt, but medieval writers and modern historians alike hold his impulsiveness and thirst for a fight partly responsible for the catastrophe of 1187. He is remembered as a cautionary figure: a brave man whose rashness helped ruin the cause he served.'
    ] },
    { title: 'Master at Hattin', paragraphs: [
      'Ridefort became Grand Master in 1185. His feud with Raymond of Tripoli split the leadership of the kingdom at its moment of greatest danger, and his aggressive counsel helped bring on the disaster of the Battle of Hattin on 4 July 1187, where the Christian army was destroyed and the True Cross lost.',
      'Captured in the battle, Ridefort was spared the execution Saladin meted out to the other captured Templars and Hospitallers, and was ransomed — his release itself a matter of later criticism.'
    ] },
    { title: 'Death', paragraphs: [
      'Freed after Hattin, Ridefort joined the Christian effort to recover the coast and was killed fighting at the siege of Acre in 1189.'
    ] },
    { title: 'Legacy', paragraphs: [
      'Ridefort’s mastership became a byword for how the indiscipline and rivalries of the Crusader leadership brought on the collapse of 1187. His name is bound to the twin disasters of Cresson and Hattin.',
      'For the Templars, his career was a dark counterpoint to the Rule’s ideal of disciplined, collective restraint in the field.'
    ] }
  ],
  timeline: [
    { date: 'c. 1180', title: 'Comes to the Holy Land', description: 'The Flemish knight quarrels with Raymond of Tripoli and later enters the Templars.' },
    { date: '1185', title: 'Grand Master', description: 'Ridefort is elected master of the Knights Templar.' },
    { date: 'May 1187', title: 'The rout at Cresson', description: 'His reckless charge with a tiny force is destroyed; he is among the few to escape.' },
    { date: 'Jul 1187', title: 'Captured at Hattin', description: 'His aggressive counsel helps bring on the Battle of Hattin, where he is taken prisoner.' },
    { date: '1188', title: 'Ransomed', description: 'Spared the execution given to other captured Templars, he is released.' },
    { date: '1189', title: 'Killed at Acre', description: 'Dies fighting at the siege of Acre.' }
  ],
  relatedEntries: {
    people: [per('saladin', 'Saladin'), per('guy-of-lusignan', 'Guy of Lusignan')],
    events: [evt('battle-of-hattin', 'Battle of Hattin')],
    orders: [ord('knights-templar', 'Knights Templar')]
  },
  sources: [
    { title: 'The New Knighthood: A History of the Order of the Temple', author: 'Malcolm Barber', type: 'book' },
    { title: 'The Chronicle of the Third Crusade / continuations of William of Tyre', author: 'medieval chroniclers', type: 'primary source' }
  ]
}

const upsert = (e) => {
  const i = data.characters.findIndex((x) => x.id === e.id)
  if (i >= 0) { data.characters[i] = e; return 'updated' }
  data.characters.push(e); return 'added'
}

for (const c of [henry, plettenberg, ridefort]) console.log('characters:', upsert(c), c.id)
writeFileSync(dataPath, JSON.stringify(data, null, 2))
console.log(`characters collection now has ${data.characters.length}`)
