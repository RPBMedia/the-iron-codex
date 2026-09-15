// M5 (People, batch 3): the popes who shaped the military orders, plus Alexander
// Nevsky — all named in the order articles' prose. Modelled as non-rulers (the
// archive's existing popes carry no succession box), matching pope-innocent-iii.
// Idempotent upsert.
import { readFileSync, writeFileSync } from 'node:fs'

const dataPath = new URL('../server/data/history.json', import.meta.url)
const data = JSON.parse(readFileSync(dataPath, 'utf8'))

const per = (slug, title) => ({ title, type: 'person', slug })
const loc = (slug, title) => ({ title, type: 'location', slug })
const ord = (slug, title) => ({ title, type: 'order', slug })

const papalSources = (name, url) => [
  { title: `Encyclopaedia Britannica: ${name}`, author: 'Encyclopaedia Britannica', type: 'reference work', url },
  { title: 'The Papacy in the Middle Ages (survey works)', author: 'various', type: 'book' }
]

const clement = {
  id: 'pope-clement-v',
  type: 'character',
  name: 'Pope Clement V',
  aliases: ['Clement V', 'Bertrand de Got'],
  born: 1264,
  died: 1314,
  deathAge: 'about 50',
  causeOfDeath: 'Clement died in 1314, worn down by illness, weeks before the year was out that also saw Jacques de Molay burned.',
  restingPlace: 'Uzeste, Gascony',
  location: 'Papacy (Avignon)',
  image: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Pope_Clement_V.jpg',
  title: 'pope who suppressed the Knights Templar',
  roles: ['Pope', 'first of the Avignon popes'],
  birth: { date: 'c. 1264', place: null },
  death: { date: '20 April 1314', place: null, circumstance: 'Died of long illness in Gascony.' },
  quickFacts: { realm: 'Papacy', dynasty: 'Not dynastic', culture: 'Gascon / Latin Christian', knownFor: 'Suppressed the Knights Templar' },
  imageInfo: { caption: 'Pope Clement V, first of the Avignon popes.', creator: 'Unknown', date: 'later depiction', source: 'Wikimedia Commons', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Pope_Clement_V.jpg', note: 'A later depiction; no contemporary portrait survives.' },
  overview: [
    'Pope Clement V was the first of the Avignon popes and the pontiff who, under pressure from King Philip IV of France, suppressed the Knights Templar at the Council of Vienne in 1312.',
    'A Gascon canon lawyer, he moved the papal court to Avignon and spent his reign caught between conscience and the French crown.'
  ],
  contentSections: [
    { title: 'Overview', paragraphs: ['Pope Clement V (reigned 1305–1314) was a Gascon lawyer-pope who moved the papacy to Avignon and, bending to King Philip IV of France, dissolved the Order of the Temple.'] },
    { title: 'Birth and early life', paragraphs: ['Born Bertrand de Got in Gascony around 1264, he rose as a canon lawyer and archbishop of Bordeaux before his election as a compromise candidate in 1305, never setting foot in Rome.'] },
    { title: 'Character and Personality', paragraphs: [
      'Clement was an able canon lawyer but an irresolute and physically frail pope, chronically ill and heavily dependent on the goodwill of the king of France. Where a stronger pontiff might have resisted, he temporised.',
      'His handling of the Templars shows the pattern. Pressed relentlessly by Philip IV — to whom he owed his position and who held the papacy in Avignon within reach of French power — Clement wavered, suspended the proceedings, examined the brothers at Chinon, and finally suppressed the order in 1312 by the administrative bull Vox in excelso, without a clear verdict of guilt.',
      'He was not the villain of the affair so much as its weak point: a pope who let a king drive the destruction of an order, and whose reputation has never recovered from it. Contemporaries and historians alike remember him as pliant, ailing, and overmatched by the French crown.'
    ] },
    { title: 'The suppression of the Templars', paragraphs: [
      'After Philip IV’s mass arrest of the French Templars in 1307, Clement was drawn into a long, agonised process of inquiry. He tried at times to assert papal control, but in the end he yielded.',
      'At the Council of Vienne in 1312 he dissolved the order and ordered its property transferred largely to the Hospitallers. Jacques de Molay, the last Grand Master, was burned in 1314; Clement died the same year.'
    ] },
    { title: 'Death', paragraphs: ['Worn down by illness, Clement died in Gascony in April 1314, only weeks after the burning of Jacques de Molay — the coincidence feeding the legend of de Molay’s dying curse.'] },
    { title: 'Legacy', paragraphs: [
      'Clement V is remembered as the pope who began the “Avignon Papacy” and who let the Templars fall. His reign marked a decisive shift of the papacy into the orbit of the French monarchy.',
      'The suppression he oversaw scattered the Templar inheritance across Europe, giving rise to the Order of Christ in Portugal and the Order of Montesa in Aragon.'
    ] }
  ],
  timeline: [
    { date: 'c. 1264', title: 'Born in Gascony', description: 'Born Bertrand de Got, the future canon lawyer and archbishop of Bordeaux.' },
    { date: '1305', title: 'Elected pope', description: 'Chosen as a compromise candidate, close to King Philip IV of France.' },
    { date: '1309', title: 'The court moves to Avignon', description: 'Clement settles the papal court in Avignon rather than Rome.' },
    { date: '1312', title: 'Suppression of the Templars', description: 'At the Council of Vienne he dissolves the Templars by the bull Vox in excelso.' },
    { date: '1314', title: 'Death', description: 'Clement dies in Gascony weeks after Jacques de Molay is burned in Paris.' }
  ],
  relatedEntries: {
    people: [per('philip-iv-of-france', 'Philip IV of France'), per('jacques-de-molay', 'Jacques de Molay')],
    locations: [loc('papacy', 'Papacy')],
    orders: [ord('knights-templar', 'Knights Templar'), ord('order-of-christ', 'Order of Christ')]
  },
  sources: papalSources('Clement V', 'https://www.britannica.com/biography/Clement-V')
}

const gregory = {
  id: 'pope-gregory-ix',
  type: 'character',
  name: 'Pope Gregory IX',
  aliases: ['Gregory IX', 'Ugolino di Conti', 'Hugolino of Segni'],
  born: null,
  died: 1241,
  deathAge: 'unknown',
  causeOfDeath: 'Gregory died in Rome in 1241 in extreme old age, with Emperor Frederick II’s armies pressing on the city.',
  restingPlace: "St Peter's, Rome",
  location: 'Papacy',
  image: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Pope_Gregory_IX.jpg',
  title: 'pope, patron of the military orders and founder of the papal Inquisition',
  roles: ['Pope'],
  birth: { date: 'unknown (c. 1145–1170)', place: null },
  death: { date: '22 August 1241', place: null, circumstance: 'Died in Rome during his war with the emperor.' },
  quickFacts: { realm: 'Papacy', dynasty: 'Not dynastic', culture: 'Latin Christian / Italian', knownFor: 'Merged the Sword-Brothers into the Teutonic Order' },
  imageInfo: { caption: 'Pope Gregory IX, the great canon lawyer and patron of the crusading orders.', creator: 'Unknown', date: 'later depiction', source: 'Wikimedia Commons', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Pope_Gregory_IX.jpg', note: 'A later depiction; no contemporary likeness survives.' },
  overview: [
    'Pope Gregory IX was a formidable canon lawyer and a great patron of the military orders, who in 1237 incorporated the shattered Livonian Brothers of the Sword into the Teutonic Order.',
    'He founded the papal Inquisition, canonised Francis of Assisi, and waged a ferocious feud with the Emperor Frederick II.'
  ],
  contentSections: [
    { title: 'Overview', paragraphs: ['Pope Gregory IX (reigned 1227–1241) was one of the most energetic and combative of medieval popes — a brilliant lawyer, a fierce champion of papal authority, and a key patron of the crusading orders in the Baltic and the Holy Land.'] },
    { title: 'Birth and early life', paragraphs: ['Born Ugolino, of the counts of Segni and a kinsman of Pope Innocent III, he trained in law at Bologna and Paris and served as a cardinal and papal legate before his election in 1227.'] },
    { title: 'Character and Personality', paragraphs: [
      'Gregory was aged but astonishingly vigorous, a man of iron will and legal genius. He compiled the Decretals that became the backbone of Church law for centuries, and he pursued his aims — the supremacy of the papacy, the suppression of heresy, the support of the crusades — with relentless energy into his nineties.',
      'His combativeness defined his reign. He excommunicated the Emperor Frederick II twice and fought him to the end of his life, and in 1231 he established the papal Inquisition to root out heresy, appointing the first inquisitors. Firm to the point of harshness, he was also a genuine patron of the new religious movements, canonising both Francis of Assisi and Dominic.',
      'For the military orders he was a decisive friend: it was Gregory who, in 1237, folded the remnant of the Sword-Brothers into the Teutonic Order after their destruction at Saule, shaping the future of the Baltic crusades.'
    ] },
    { title: 'Patron of the orders', paragraphs: [
      'Gregory worked closely with Hermann von Salza, the Teutonic Grand Master, and it was under his authority that the Livonian Brothers of the Sword were incorporated into the Teutonic Order in 1237, creating its autonomous Livonian branch.',
      'He confirmed privileges for the Templars and Hospitallers and pressed for renewed crusade, treating the military orders as essential instruments of the Church.'
    ] },
    { title: 'Death', paragraphs: ['Gregory died in Rome in August 1241, in extreme old age, with Frederick II’s forces closing on the city — unbroken in his war with the emperor to the last.'] },
    { title: 'Legacy', paragraphs: [
      'Gregory IX left the Church a codified body of law, a permanent machinery of inquisition, and a reinvigorated crusading effort. For the Baltic, his merger of the Sword-Brothers into the Teutonic Order set the shape of the northern crusades for centuries.',
      'He is remembered as one of the great lawyer-popes and as an implacable defender of papal power against the empire.'
    ] }
  ],
  timeline: [
    { date: 'c. 1145–1170', title: 'Born of the counts of Segni', description: 'A kinsman of Innocent III, trained as a canon lawyer.' },
    { date: '1227', title: 'Elected pope', description: 'Becomes pope already advanced in years, and at once clashes with Frederick II.' },
    { date: '1228', title: 'Canonises Francis of Assisi', description: 'A patron of the new mendicant orders as well as the military ones.' },
    { date: '1231', title: 'Founds the papal Inquisition', description: 'Establishes standing inquisitors to pursue heresy.' },
    { date: '1237', title: 'Merges the Sword-Brothers', description: 'Incorporates the Livonian Brothers of the Sword into the Teutonic Order.' },
    { date: '1241', title: 'Death in Rome', description: 'Dies in extreme old age with the emperor’s armies at the walls.' }
  ],
  relatedEntries: {
    people: [per('frederick-ii-holy-roman-emperor', 'Frederick II'), per('hermann-von-salza', 'Hermann von Salza')],
    locations: [loc('papacy', 'Papacy')],
    orders: [ord('teutonic-order', 'Teutonic Order'), ord('livonian-brothers-of-the-sword', 'Livonian Brothers of the Sword')]
  },
  sources: papalSources('Gregory IX', 'https://www.britannica.com/biography/Gregory-IX')
}

const john = {
  id: 'pope-john-xxii',
  type: 'character',
  name: 'Pope John XXII',
  aliases: ['John XXII', 'Jacques Duèze', 'Jacques d’Euse'],
  born: 1244,
  died: 1334,
  deathAge: 'about 90',
  causeOfDeath: 'John died at Avignon in 1334 at a very great age, after one of the longest reigns of the medieval papacy.',
  restingPlace: 'Avignon Cathedral',
  location: 'Papacy (Avignon)',
  image: "https://upload.wikimedia.org/wikipedia/commons/0/08/Papa_Giovanni_XXII%2C_di_Cristofano_dell%27Altissimo%2C_1552-68_-FG.jpg",
  title: 'Avignon pope who created the Orders of Montesa and Christ',
  roles: ['Pope', 'second of the Avignon popes'],
  birth: { date: '1244', place: null },
  death: { date: '4 December 1334', place: null, circumstance: 'Died at Avignon at a very advanced age.' },
  quickFacts: { realm: 'Papacy', dynasty: 'Not dynastic', culture: 'Occitan / Latin Christian', knownFor: 'Created the Orders of Montesa and of Christ' },
  imageInfo: { caption: 'Pope John XXII, portrayed by Cristofano dell’Altissimo.', creator: 'Cristofano dell’Altissimo', date: '1552–1568', source: 'Wikimedia Commons', sourceUrl: "https://commons.wikimedia.org/wiki/File:Papa_Giovanni_XXII,_di_Cristofano_dell'Altissimo,_1552-68_-FG.jpg", note: 'A later portrait in a series of the popes.' },
  overview: [
    'Pope John XXII was the second Avignon pope and a formidable administrator who reorganised the finances of the papacy.',
    'In settling the fate of the Templars’ property he created two new orders: Montesa in the Crown of Aragon (1317) and the Order of Christ in Portugal (1319).'
  ],
  contentSections: [
    { title: 'Overview', paragraphs: ['Pope John XXII (reigned 1316–1334) was an aged, austere, and brilliantly capable canon lawyer who rebuilt papal administration and finance at Avignon — and who chartered the orders that inherited the Templars in Iberia.'] },
    { title: 'Birth and early life', paragraphs: ['Born Jacques Duèze at Cahors in 1244, the son of a merchant, he rose through law and royal service to become a cardinal, and was elected pope in 1316 after a long conclave.'] },
    { title: 'Character and Personality', paragraphs: [
      'John was old when elected and reigned for eighteen years, yet he was tireless: a small, spare, intensely industrious man with a lawyer’s mind and an administrator’s appetite for detail. He overhauled the papal bureaucracy and finances so effectively that Avignon became a byword for centralised, revenue-hungry government.',
      'He was also famously combative and litigious. He fought a long battle with the radical Franciscans over the doctrine of apostolic poverty, quarrelled bitterly with the Emperor Louis IV of Bavaria, and provoked a storm by advancing his own controversial views on the Beatific Vision, which he was pressed to retract near the end of his life.',
      'For the military orders his instinct was tidy and legal: rather than let the Templars’ Iberian wealth pass to a foreign order, he created purpose-built national orders — Montesa and the Order of Christ — to inherit it. It was a characteristic solution from a pope who governed by charter and law.'
    ] },
    { title: 'Creator of new orders', paragraphs: [
      'In 1317, at the request of James II of Aragon, John established the Order of Montesa to take over the Templars’ property in the Kingdom of Valencia. Two years later, in 1319, he chartered the Order of Christ in Portugal to inherit the Templar estates there, including Tomar.',
      'By these acts John ensured that in the Iberian kingdoms the Templars were not destroyed so much as reconstituted under new names — a quietly momentous legacy of his reign.'
    ] },
    { title: 'Death', paragraphs: ['John XXII died at Avignon in December 1334 at a very great age, having outlasted most of his rivals and left the papacy richer and more centralised than he found it.'] },
    { title: 'Legacy', paragraphs: [
      'John XXII is remembered as the great administrator of the Avignon papacy and as a pope whose reign was thick with controversy over poverty, power, and doctrine.',
      'Through the Orders of Montesa and of Christ he gave the Templar inheritance a lasting afterlife in Spain and Portugal.'
    ] }
  ],
  timeline: [
    { date: '1244', title: 'Born at Cahors', description: 'Born Jacques Duèze, the son of a merchant, who rose through the law.' },
    { date: '1316', title: 'Elected pope', description: 'Chosen after a long conclave as the second pope to reign at Avignon.' },
    { date: '1317', title: 'Creates the Order of Montesa', description: 'Charters a new order to inherit the Templars’ lands in Valencia.' },
    { date: '1319', title: 'Creates the Order of Christ', description: 'Charters the Portuguese heir of the Templars, seated at Tomar.' },
    { date: '1323', title: 'Clash over Franciscan poverty', description: 'Condemns the radical doctrine of absolute apostolic poverty.' },
    { date: '1334', title: 'Death at Avignon', description: 'Dies at a very advanced age after an eighteen-year reign.' }
  ],
  relatedEntries: {
    locations: [loc('papacy', 'Papacy')],
    orders: [ord('order-of-montesa', 'Order of Montesa'), ord('order-of-christ', 'Order of Christ'), ord('knights-templar', 'Knights Templar')]
  },
  sources: papalSources('John XXII', 'https://www.britannica.com/biography/John-XXII')
}

const eugenius = {
  id: 'pope-eugenius-iii',
  type: 'character',
  name: 'Pope Eugenius III',
  aliases: ['Eugenius III', 'Eugene III', 'Bernardo Pignatelli', 'Bernardo da Pisa'],
  born: null,
  died: 1153,
  deathAge: 'unknown',
  causeOfDeath: 'Eugenius died in 1153, shortly after his mentor Bernard of Clairvaux.',
  restingPlace: "St Peter's, Rome",
  location: 'Papacy',
  image: 'https://upload.wikimedia.org/wikipedia/commons/3/32/Pope_Eugene_III.jpg',
  title: 'first Cistercian pope, who called the Second Crusade',
  roles: ['Pope', 'first Cistercian pope'],
  birth: { date: 'unknown', place: null },
  death: { date: '8 July 1153', place: null, circumstance: 'Died at Tivoli, near Rome.' },
  quickFacts: { realm: 'Papacy', dynasty: 'Not dynastic', culture: 'Latin Christian / Pisan', knownFor: 'Granted the Templars their red cross' },
  imageInfo: { caption: 'Pope Eugenius III, the first Cistercian pope.', creator: 'Unknown', date: 'later depiction', source: 'Wikimedia Commons', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Pope_Eugene_III.jpg', note: 'A later depiction; no contemporary portrait survives.' },
  overview: [
    'Pope Eugenius III was the first Cistercian pope, a disciple of Bernard of Clairvaux, who called the Second Crusade and granted the Knights Templar the right to wear the red cross.',
    'A humble monk raised unexpectedly to the papacy, he leaned heavily on the guidance of his formidable mentor.'
  ],
  contentSections: [
    { title: 'Overview', paragraphs: ['Pope Eugenius III (reigned 1145–1153) was the first Cistercian to become pope — a modest, monastic figure whose reign was shaped by the towering influence of Bernard of Clairvaux and by the crusading fervour of the age.'] },
    { title: 'Birth and early life', paragraphs: ['Born near Pisa and a monk of Clairvaux under Bernard, Bernardo Pignatelli was abbot of a Roman monastery when he was elected pope in 1145 — a surprising choice that dismayed even Bernard, who feared his pupil too gentle for the office.'] },
    { title: 'Character and Personality', paragraphs: [
      'Eugenius was, by all accounts, a genuinely humble and devout man, more at home in the cloister than the curia. He kept his Cistercian habit and simplicity as pope, and was widely respected for his sincerity and mildness.',
      'His closeness to Bernard of Clairvaux defined him. Bernard wrote his famous treatise On Consideration to advise (and gently admonish) his former pupil, and contemporaries sometimes wondered who truly governed the Church. Yet Eugenius was no mere cipher: he held firm on matters of principle, defended papal authority against the Roman commune that drove him from the city, and steered the Church with quiet resolve.',
      'It was under Eugenius that the crusading energy of Bernard’s preaching reached its height — and that the Templars, Bernard’s special protégés, received the red cross that became their emblem of martyrdom.'
    ] },
    { title: 'Crusade and the Templars', paragraphs: [
      'In 1145 Eugenius issued the bull Quantum praedecessores, calling the Second Crusade, which Bernard of Clairvaux then preached across Europe — though the expedition ended in failure.',
      'Around 1147 Eugenius granted the Knights Templar the right to wear a red cross on their white mantle, the sign that marked them as men ready for martyrdom and that became the order’s enduring emblem.'
    ] },
    { title: 'Death', paragraphs: ['Eugenius died in 1153, only weeks before Bernard of Clairvaux, the mentor whose shadow had fallen across his whole pontificate.'] },
    { title: 'Legacy', paragraphs: [
      'Eugenius III is remembered as the Cistercian pope of the Second Crusade and as the pontiff who gave the Templars their red cross.',
      'His reign marks the high tide of Cistercian and crusading influence over the 12th-century papacy.'
    ] }
  ],
  timeline: [
    { date: 'c. 1080–1100', title: 'Born near Pisa', description: 'Enters the Cistercian order and becomes a monk under Bernard of Clairvaux.' },
    { date: '1145', title: 'Elected pope', description: 'The first Cistercian pope, elected to Bernard’s own dismay.' },
    { date: '1145', title: 'Calls the Second Crusade', description: 'Issues Quantum praedecessores, which Bernard preaches across Europe.' },
    { date: 'c. 1147', title: 'Grants the Templars the red cross', description: 'Authorises the red cross on the Templars’ white mantle.' },
    { date: '1153', title: 'Death', description: 'Dies weeks before his mentor Bernard of Clairvaux.' }
  ],
  relatedEntries: {
    people: [per('bernard-of-clairvaux', 'Bernard of Clairvaux')],
    locations: [loc('papacy', 'Papacy')],
    orders: [ord('knights-templar', 'Knights Templar')]
  },
  sources: papalSources('Eugenius III', 'https://www.britannica.com/biography/Eugenius-III')
}

const nevsky = {
  id: 'alexander-nevsky',
  type: 'character',
  name: 'Alexander Nevsky',
  aliases: ['Aleksandr Nevsky', 'Alexander Yaroslavich', 'Saint Alexander Nevsky'],
  born: 1221,
  died: 1263,
  deathAge: 'about 42',
  causeOfDeath: 'Alexander died in 1263 on his way home from the Golden Horde, probably worn out and possibly poisoned.',
  restingPlace: 'Vladimir (later St Petersburg)',
  location: 'Novgorod and Vladimir',
  image: 'https://upload.wikimedia.org/wikipedia/commons/a/ad/Alexander_Nevsky%2C_Russian_School_19th-20th_century.jpg',
  title: 'Prince of Novgorod who defeated the Livonian Order on the ice',
  roles: ['Prince of Novgorod', 'Grand Prince of Vladimir'],
  birth: { date: 'c. 1221', place: null },
  death: { date: '14 November 1263', place: null, circumstance: 'Died returning from the Mongol Horde.' },
  quickFacts: { realm: 'Novgorod and Vladimir (Rus’)', dynasty: 'Rurikid', culture: 'Orthodox Rus’', knownFor: 'Beat the Livonian Order at the Battle on the Ice' },
  imageInfo: { caption: 'Alexander Nevsky, Prince of Novgorod, in a later Russian-school portrait.', creator: 'Russian school', date: '19th–20th century', source: 'Wikimedia Commons', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Alexander_Nevsky,_Russian_School_19th-20th_century.jpg', note: 'A later idealised portrait; no contemporary likeness survives.' },
  overview: [
    'Alexander Nevsky was a prince of Novgorod and grand prince of Vladimir who checked the eastward push of the Baltic crusaders, most famously defeating the Livonian Order on the frozen Lake Peipus in 1242 — the “Battle on the Ice”.',
    'He is a national hero and saint of Russia, remembered for resisting the Latin West while submitting pragmatically to the Mongols.'
  ],
  contentSections: [
    { title: 'Overview', paragraphs: ['Alexander Yaroslavich, called Nevsky, was the Rus’ prince who defeated the Swedes on the Neva in 1240 and the Livonian Order on the ice of Lake Peipus in 1242, becoming the great symbol of Orthodox resistance to the Catholic crusaders.'] },
    { title: 'Birth and early life', paragraphs: ['Born about 1221 into the Rurikid dynasty, a son of Grand Prince Yaroslav II, Alexander was made prince of the great trading republic of Novgorod as a young man, at the moment the city faced enemies from both west and east.'] },
    { title: 'Character and Personality', paragraphs: [
      'Alexander was a bold and gifted commander, but his lasting reputation rests on his strategic realism rather than mere valour. He grasped, more clearly than his contemporaries, that Rus’ could not fight the Mongols and the Latin West at once.',
      'So he made a hard, clear-eyed choice: he fought the Swedes and the German crusading orders who threatened Novgorod and the Orthodox faith, but he submitted to the far mightier Mongol Golden Horde, travelling to their courts and accepting their overlordship to spare his people the devastation that resistance had brought elsewhere. To some this was collaboration; to most Russians it was wisdom.',
      'Later ages made him a legend — a warrior-saint of the Orthodox Church and, in the 20th century, the hero of Eisenstein’s famous film. The historical Alexander was a shrewd, decisive, and pragmatic ruler who chose which battles to fight, and won the ones he chose.'
    ] },
    { title: 'The Battle on the Ice', paragraphs: [
      'In 1240 Alexander crushed a Swedish force at the mouth of the Neva, winning the byname “Nevsky”. Two years later he turned west against the Livonian Order and the bishop of Dorpat, who had seized Pskov.',
      'On 5 April 1242, on the frozen surface of Lake Peipus, he met and defeated the crusaders in the clash remembered as the Battle on the Ice — a check that halted the German advance into Orthodox Rus’, though the battle’s scale was later much magnified in legend.'
    ] },
    { title: 'Death', paragraphs: ['Alexander died in 1263 while returning from the Golden Horde, worn out by the burdens of his balancing act between east and west. He was later canonised as a saint of the Russian Church.'] },
    { title: 'Legacy', paragraphs: [
      'Alexander Nevsky became the enduring symbol of Russian resistance to the West and of pragmatic survival under the Mongols. His victory on the ice fixed the eastern limit of the Baltic crusades.',
      'For the Livonian Order, Lake Peipus was the frontier that Orthodox Rus’ would not let them cross.'
    ] }
  ],
  timeline: [
    { date: 'c. 1221', title: 'Born a Rurikid prince', description: 'A son of Grand Prince Yaroslav II of Vladimir.' },
    { date: '1240', title: 'Victory on the Neva', description: 'Defeats a Swedish force at the Neva, earning the name “Nevsky”.' },
    { date: '1242', title: 'The Battle on the Ice', description: 'Beats the Livonian Order on the frozen Lake Peipus.' },
    { date: '1252', title: 'Grand Prince of Vladimir', description: 'Confirmed as grand prince under Mongol overlordship.' },
    { date: '1263', title: 'Death', description: 'Dies returning from the Golden Horde; later canonised as a saint.' }
  ],
  relatedEntries: {
    locations: [loc('novgorod', 'Novgorod')],
    orders: [ord('livonian-order', 'Livonian Order'), ord('teutonic-order', 'Teutonic Order')]
  },
  sources: [
    { title: 'Encyclopaedia Britannica: Alexander Nevsky', author: 'Encyclopaedia Britannica', type: 'reference work', url: 'https://www.britannica.com/biography/Alexander-Nevsky' },
    { title: 'The Northern Crusades', author: 'Eric Christiansen', type: 'book' }
  ]
}

const upsert = (e) => {
  const i = data.characters.findIndex((x) => x.id === e.id)
  if (i >= 0) { data.characters[i] = e; return 'updated' }
  data.characters.push(e); return 'added'
}

for (const c of [clement, gregory, john, eugenius, nevsky]) console.log('characters:', upsert(c), c.id)
writeFileSync(dataPath, JSON.stringify(data, null, 2))
console.log(`characters collection now has ${data.characters.length}`)
