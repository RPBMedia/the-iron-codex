// Full anchor-article rewrite of the Kingdom of Portugal (the audit's worked
// example). Names in prose match entityLinks labels/aliases so rulers and
// battles auto-link in the client.
import fs from 'node:fs'

const dataPath = new URL('../server/data/history.json', import.meta.url)
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'))
const fp = (n) => `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(n)}`
const pg = (n) => `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(n)}`

const k = data.locations.find((l) => l.id === 'kingdom-of-portugal')
if (!k) { console.error('kingdom-of-portugal not found'); process.exit(1) }

k.year = 1139
k.image = fp('Genealogia_dos_Reis_de_Portugal_-_Tavoa_Primeira_dos_Reys_-_Tronco_do_Conde_Dom_Anrique.jpg')
k.imageInfo = {
  caption: 'The dynasty of Portugal springing from Count Henry — first table of the illuminated Genealogy of the Kings of Portugal.',
  creator: 'António de Holanda and Simon Bening (workshop)',
  date: '1530–1534',
  source: 'British Library, Add MS 12531, f. 7r — via Wikimedia Commons',
  sourceUrl: pg('Genealogia_dos_Reis_de_Portugal_-_Tavoa_Primeira_dos_Reys_-_Tronco_do_Conde_Dom_Anrique.jpg'),
  note: 'An early sixteenth-century royal genealogy depicting the medieval dynasty; public domain.'
}

k.overview = [
  'The Kingdom of Portugal emerged from the County of Portugal in the twelfth century, breaking from Leonese overlordship under Afonso Henriques and building royal legitimacy through warfare, diplomacy, and papal recognition: victory over his mother\'s party at the Battle of São Mamede in 1128, the royal title assumed after the Battle of Ourique in 1139, Leonese recognition at the Treaty of Zamora in 1143, and the bull Manifestis Probatum from Rome in 1179.',
  'Its medieval history was shaped by frontier expansion against Muslim-ruled territories — Lisbon taken with a crusader fleet in 1147, the Algarve completed by 1249 — by rivalry and marriage politics with León and Castile, by an Atlantic-facing commercial turn under kings like Denis of Portugal, and by the crisis of 1383–1385, when the towns and the Master of Aviz defended independence at the Battle of Aljubarrota and founded the dynasty that carried Portugal to the ocean.'
]

k.contentSections = [
  { title: 'Overview', paragraphs: [
    'The Kingdom of Portugal emerged from the County of Portugal in the twelfth century, breaking from Leonese overlordship under Afonso Henriques and building royal legitimacy through warfare, diplomacy, and papal recognition: victory over his mother\'s party at the Battle of São Mamede in 1128, the royal title assumed after the Battle of Ourique in 1139, Leonese recognition at the Treaty of Zamora in 1143, and the bull Manifestis Probatum from Rome in 1179.',
    'Its medieval history was shaped by frontier expansion against Muslim-ruled al-Andalus — Lisbon taken with a crusader fleet in 1147, the Algarve completed by 1249, making Portugal the first Iberian kingdom to finish its Reconquista — by rivalry and marriage politics with León and Castile, by an Atlantic-facing commercial turn, and by the crisis of 1383–1385, when the towns and the Master of Aviz defended independence at the Battle of Aljubarrota and founded the dynasty that carried Portugal toward the ocean.'
  ]},
  { title: 'Background and origins', paragraphs: [
    'Portugal began as a Leonese frontier command. The county of Portucale — the lands around the old Suevic seats of Braga and Guimarães, between the Minho and the Douro — had been a hereditary march of the Asturian-Leonese kings since the ninth century; a second, grander county was created in 1096, when Alfonso VI of León-Castile granted the whole territory from the Minho toward the Tagus to the Burgundian crusader-knight Henry, Count of Portugal, and his wife Teresa of León, the king\'s favoured illegitimate daughter.',
    'Henry defended the Almoravid frontier and stretched every ambiguity of his vassalage; after his death in 1112 Teresa ruled for their son and then for herself, styling herself queen from 1117. Her reliance on the Galician house of Traba turned the Portuguese baronage toward her son, and on 24 June 1128, at the Battle of São Mamede below Guimarães, the nineteen-year-old Afonso Henriques took the county from his mother\'s party.',
    'The road from county to kingdom ran through victory and paperwork in equal measure: the royal style assumed after the Battle of Ourique against the Almoravids in July 1139; the Treaty of Zamora of October 1143, in which Alfonso VII of León recognised his cousin\'s kingship with a papal legate presiding; the same year\'s commendation of Portugal to Saint Peter for a census of four ounces of gold — an overlord safely in Rome invoked against the one in León; and at last Alexander III\'s bull Manifestis Probatum of 1179, which addressed Afonso as king outright and took his realm under apostolic protection.'
  ]},
  { title: 'High Middle Ages: independence and southern expansion', paragraphs: [
    'Afonso Henriques spent a fifty-seven-year reign (1128–1185) turning title into territory. Santarém fell to escalade in March 1147; that summer a storm-diverted fleet of Second Crusade crusaders from England, Flanders, and the Rhineland joined the king before Lisbon, and the seventeen-week Siege of Lisbon ended in October with the great Tagus port in Portuguese hands. The Templars, Hospitallers, and the new Iberian orders of Avis and Santiago garrisoned the moving frontier; Muslim counter-attack under the Almohads took back much of the trans-Tagus in the 1190s, but the line held at the river.',
    'His successors finished the peninsula\'s westernmost Reconquista. Sancho I of Portugal (1185–1211), "the Populator", chartered frontier towns and briefly held Silves with another crusader fleet in 1189; Afonso II of Portugal (1211–1223) issued the kingdom\'s first general laws at the cortes of Coimbra in 1211 and sent troops to the decisive peninsular victory of Las Navas de Tolosa in 1212; Sancho II conquered deep into the Alentejo before baronial and clerical revolt, blessed by Innocent IV, deposed him in 1245–1247; and his brother Afonso III of Portugal (1248–1279) took Faro in 1249, completing the conquest of the Algarve and fixing Portugal\'s continental borders essentially as they remain — the first Iberian kingdom to finish its share of the Reconquista.',
    'The century closed with consolidation rather than conquest. Afonso III moved the court definitively to Lisbon, summoned townsmen to the cortes of Leiria in 1254 — among Europe\'s earliest — and his son Denis of Portugal (1279–1325) gave the kingdom its institutional maturity: the University founded at Lisbon in 1290, Portuguese made the language of the chancery, the treaty of Alcanizes with Castile in 1297 sealing the border, the Order of Christ created in 1319 to inherit the suppressed Templars\' castles and wealth, pine forests planted for ship-timber, and a Genoese admiral, Manuel Pessanha, hired in 1317 to build a royal fleet.'
  ]},
  { title: 'Late Middle Ages: crisis, Aviz, and consolidation', paragraphs: [
    'The fourteenth century tested the structure. The Black Death of 1348 emptied fields and drove the crown\'s labour legislation (the Lei das Sesmarias of 1375); Afonso IV of Portugal (1325–1357) sent the fleet and knights that shared the great victory over the Marinids at Salado in 1340, while his court was stained by the murder of Inês de Castro, whose "reign" as posthumous queen under Pedro I became the kingdom\'s darkest royal legend. Ferdinand I of Portugal (1367–1383) fought three ruinous wars for the Castilian crown and built Lisbon\'s great wall, but left only a daughter married to the king of Castile.',
    'His death in 1383 opened the succession crisis that defined late medieval Portugal. Against the regency of Leonor Teles and the claim of Juan I of Castile, the towns — Lisbon above all — rose for João, Master of Aviz, the old king\'s illegitimate half-brother. The Castilian siege of Lisbon broke on plague and resistance in 1384; the cortes of Coimbra proclaimed João king as John I of Portugal in April 1385; and on 14 August 1385, at the Battle of Aljubarrota, the new king and his constable Nuno Álvares Pereira destroyed the Castilian host with English archers in the line — independence saved, and the House of Aviz founded.',
    'Aviz Portugal consolidated fast. The Treaty of Windsor of 1386 made the English alliance perpetual — Europe\'s oldest still in force — and John I\'s marriage to Philippa of Lancaster produced the "illustrious generation": Duarte the legislator-king, Pedro the travelled regent, and Henrique — Henry the Navigator — under whom the capture of Ceuta in 1415 and the Atlantic voyages that followed carried the medieval kingdom\'s frontier habit onto the ocean. By mid-century, with Madeira and the Azores settled and the African coast opening, the medieval kingdom had become the springboard of an early modern empire.'
  ]},
  { title: 'Political structure and rule', paragraphs: [
    'Portuguese kingship was hereditary in the Burgundian line from Afonso Henriques to 1383, and its authority grew through the king\'s ability to grant land, confirm municipal charters (forais), command frontier warfare, and bargain with nobles and bishops. The curia regia of magnates and prelates widened into the cortes — Coimbra 1211 hearing the first general laws, Leiria 1254 seating townsmen — where clergy, nobility, and town procurators were consulted on taxation, succession, and law; the crisis assemblies of 1385 at Coimbra showed the institution could make a king.',
    'Royal centralisation advanced in waves against seigneurial and ecclesiastical immunity: Afonso II\'s confirmations and the first inquirições — sworn inquiries into usurped royal rights — under Afonso II and Afonso III; Denis\'s land law and vernacular chancery; the crown\'s long jurisdictional wars with the bishops, which put the realm under interdict more than once. The military orders held the southern castles as quasi-provinces, and their gradual domestication — above all the Order of Christ, founded 1319 as a royal instrument — turned crusading endowments into crown capacity.',
    'Law and administration matured along the same arc: local custom and Visigothic inheritance codified through forais; royal judges (corregedores) riding circuit into private jurisdictions from the fourteenth century; and the kingdom\'s legislation gathered, just past the period\'s edge, into the Ordenações Afonsinas (1446) — the first great national law code of western Europe, the medieval monarchy\'s administrative summa.'
  ]},
  { title: 'Major rulers', paragraphs: [
    'Afonso I of Portugal (Afonso Henriques), 1139–1185 — founder: victor of São Mamede and Ourique, conqueror of Santarém and Lisbon, recognised at Zamora and by Manifestis Probatum.',
    'Sancho I of Portugal, 1185–1211 — "the Populator": chartered towns, settled the interior, took Silves with the 1189 crusader fleet.',
    'Afonso II of Portugal, 1211–1223 — first general laws at the 1211 cortes of Coimbra; sent the Portuguese contingent to Las Navas de Tolosa; began the inquirições into royal rights.',
    'Afonso III of Portugal, 1248–1279 — completed the conquest of the Algarve at Faro in 1249; moved the court to Lisbon; seated townsmen in the cortes of Leiria in 1254.',
    'Denis of Portugal, 1279–1325 — lawgiver and planter: the university (1290), Portuguese as chancery language, the treaty of Alcanizes (1297), the Order of Christ (1319), forests and fleet.',
    'Afonso IV of Portugal, 1325–1357 — victor with Castile at the Salado in 1340; his reign carries the tragedy of Inês de Castro.',
    'Ferdinand I of Portugal, 1367–1383 — the Fernandine wars with Castile and Lisbon\'s new wall; his death opened the succession crisis.',
    'John I of Portugal, 1385–1433 — Master of Aviz, victor of Aljubarrota, husband of Philippa of Lancaster, conqueror of Ceuta: founder of the dynasty that made the ocean Portuguese.'
  ]},
  { title: 'Wars, battles, and expansion', paragraphs: [
    'The founding wars ran on two fronts. Against León and Castile: the internal victory of the Battle of São Mamede (1128); border wars along the Minho and Galicia punctuated by the Treaty of Zamora (1143), the humiliation of Badajoz (1169, where Afonso Henriques was captured by Ferdinand II of León), and the boundary treaty of Alcanizes (1297). Against al-Andalus: the Battle of Ourique (1139); Santarém and the Siege of Lisbon (1147); Silves taken and lost (1189–1191); the Almohad counter-offensives absorbed; Alcácer do Sal retaken with Fifth-Crusade ships in 1217; and the Alentejo and Algarve campaigns of Sancho II and Afonso III closing at Faro in 1249.',
    'Late medieval war was dynastic. The three Fernandine wars (1369–1382) chased a Castilian crown and bought devastation; the 1383–1385 interregnum brought Castilian invasion, the failed siege of Lisbon (1384), Nuno Álvares Pereira\'s first victory at Atoleiros, and the decisive Battle of Aljubarrota (14 August 1385), sealed by the perpetual English alliance of the Treaty of Windsor (1386) and closed formally by peace with Castile only in 1411. The African turn followed at once: Ceuta stormed in 1415, the disaster at Tangier in 1437, and the slow Moroccan and Atlantic expansion that turned Reconquista energies overseas.'
  ]},
  { title: 'Religion, culture, and society', paragraphs: [
    'The church was the kingdom\'s second skeleton. Braga\'s metropolitan see — restored 1100, its primacy disputed with Compostela and Toledo — anchored the north; Lisbon\'s cathedral rose in the conquered mosque from 1147 with an English crusader, Gilbert of Hastings, as first bishop; Alcobaça, the great Cistercian house founded by Afonso Henriques in 1153, colonised and farmed the centre; and the military orders — Templars at Tomar, then their heirs of the Order of Christ, with Avis, Santiago, and the Hospital — held the south. Kings and bishops fought chronically over jurisdiction and property: Afonso II died excommunicate, Denis inherited an interdicted realm and settled it by concordat.',
    'Portuguese kings used municipal charters to people the land: hundreds of forais planted or confirmed towns from the Minho to the Algarve, and their councils — with militias owed to the frontier host — became the third estate the cortes seated from 1254. Latin remained the language of church and learning, but Galician-Portuguese matured into a great lyric literature — Denis of Portugal was himself among its finest troubadour-poets — and into the language of law and chancery; the university founded in 1290 migrated between Lisbon and Coimbra. Muslim communities (mouros forros) remained under royal protection in their quarters after the conquests, as did a substantial and productive Jewish minority under royal chief-rabbis — protection that was real, fiscal, and increasingly strained by the century of the Black Death.'
  ]},
  { title: 'Economy and trade', paragraphs: [
    'Medieval Portugal was Atlantic before it was imperial. Wine, olive oil, salt from Setúbal and Aveiro, dried fish, cork, and fruit moved north to England and Flanders in exchange for cloth and grain; Lisbon and Porto grew as the kingdom\'s lungs, and Portuguese factors had standing privileges in Bruges and English ports from the thirteenth century — the commercial substrate of the political English alliance. Italian capital and pilots joined the mix early: Genoese and Placentine merchants in Lisbon\'s charters, and from 1317 Manuel Pessanha\'s hereditary admiralty binding Genoese expertise to the crown.',
    'The crown\'s economy ran on its own estates, tolls and port customs (the sisas becoming general under the Aviz kings), coinage — the dinheiro debased and reformed reign by reign, gold returning with African trade at the period\'s edge — and the great agrarian engines of the orders and Alcobaça. Denis\'s policy caught the pattern at its best: fairs chartered across the interior, marshes drained, the pine forest of Leiria planted against dune and for ship-timber — the trees, tradition says, that built the caravels which, within a generation of the period\'s close, had turned the kingdom\'s Atlantic-facing geography into the first European ocean empire.'
  ]},
  { title: 'Decline, transformation, and legacy', paragraphs: [
    'Portugal did not decline out of the Middle Ages; it accelerated. By the end of the period the kingdom had survived pressure from León and Castile, completed its Reconquista first among the Iberian crowns, preserved a separate royal line through the 1383–1385 crisis, and — victory at Aljubarrota and the Aviz dynasty in hand — turned its frontier institutions seaward: the Order of Christ funding voyages, Lisbon\'s port financing them, Ceuta (1415), Madeira (from 1419), and the Azores (from 1427) extending the medieval kingdom beyond the map it had completed.',
    'Its medieval legacies proved unusually durable: the oldest fixed land border in Europe (essentially Alcanizes, 1297); Europe\'s oldest alliance still in force (Windsor, 1386); a national language raised from troubadour lyric to chancery standard within the period; and a monarchy whose founding myths — São Mamede\'s field, Ourique\'s miracle, Aljubarrota\'s unlikely victory — remained the working vocabulary of Portuguese identity from the medieval chronicles of Fernão Lopes to the modern age.'
  ]}
]

k.knownFor = [
  'First Iberian kingdom to complete its Reconquista (Algarve, 1249)',
  'Independence built from São Mamede (1128) to Manifestis Probatum (1179)',
  'The conquest of Lisbon with a Second Crusade fleet (1147)',
  'The 1383–1385 crisis and Aljubarrota — the Aviz dynasty\'s founding victory',
  'The Anglo-Portuguese alliance of the Treaty of Windsor (1386), Europe\'s oldest',
  'Atlantic-facing trade and the late medieval springboard to overseas expansion'
]

k.timeline = [
  { date: '1096', title: 'County of Portugal granted', description: 'Alfonso VI of León-Castile grants the county to Henry, Count of Portugal and Teresa of León.' },
  { date: '24 June 1128', title: 'Battle of São Mamede', description: 'Afonso Henriques defeats his mother Teresa\'s party below Guimarães and takes the county\'s government.' },
  { date: '25 July 1139', title: 'Battle of Ourique', description: 'Victory over Almoravid forces; Afonso\'s charters begin styling him king of the Portuguese.' },
  { date: 'October 1143', title: 'Treaty of Zamora', description: 'Alfonso VII of León recognises Afonso Henriques\'s royal rule; Portugal commends itself to the papacy that December.' },
  { date: '24 October 1147', title: 'Lisbon falls', description: 'After Santarém in March, the seventeen-week Siege of Lisbon with a Second Crusade fleet gives the kingdom its great port.' },
  { date: '1179', title: 'Manifestis Probatum', description: 'Pope Alexander III formally recognises Afonso as king and Portugal as a papal-protected realm.' },
  { date: '1211', title: 'First general laws', description: 'Afonso II\'s cortes at Coimbra issue the kingdom\'s first general legislation; the inquirições into royal rights follow.' },
  { date: '1249', title: 'Conquest of the Algarve complete', description: 'Afonso III takes Faro; Portugal is the first Iberian kingdom to finish its Reconquista.' },
  { date: '1254', title: 'Townsmen enter the cortes', description: 'The cortes of Leiria seat municipal procurators — among the earliest parliamentary assemblies in Europe.' },
  { date: '1290', title: 'University founded', description: 'King Denis founds the studium generale at Lisbon (later Coimbra); Portuguese becomes the chancery language.' },
  { date: '1297', title: 'Treaty of Alcanizes', description: 'The border with Castile is fixed — essentially Europe\'s oldest surviving land frontier.' },
  { date: '1319', title: 'Order of Christ founded', description: 'Denis converts the suppressed Templars\' Portuguese wealth into a royal military order — later the funder of the voyages.' },
  { date: '1383–1385', title: 'Succession crisis and revolution', description: 'Ferdinand I\'s death brings Castilian invasion; Lisbon resists siege, and the cortes of Coimbra crown the Master of Aviz as John I.' },
  { date: '14 August 1385', title: 'Battle of Aljubarrota', description: 'John I and Nuno Álvares Pereira destroy the Castilian army; Aviz independence is secured.' },
  { date: '9 May 1386', title: 'Treaty of Windsor', description: 'The perpetual Anglo-Portuguese alliance is sealed; John I marries Philippa of Lancaster the next year.' },
  { date: '21 August 1415', title: 'Ceuta taken', description: 'The medieval kingdom\'s frontier war crosses to Africa — the hinge to Atlantic expansion.' }
]

k.relatedEntries = {
  people: [
    { title: 'Afonso I of Portugal', type: 'person', slug: 'afonso-i-of-portugal', label: 'Founder-king' },
    { title: 'Denis of Portugal', type: 'person', slug: 'denis-of-portugal', label: 'The lawgiver-planter of the mature kingdom' },
    { title: 'John I of Portugal', type: 'person', slug: 'john-i-of-portugal', label: 'Founder of the Aviz dynasty' },
    { title: 'Nuno Álvares Pereira', type: 'person', slug: 'nuno-alvares-pereira', label: 'The Holy Constable of Aljubarrota' }
  ],
  locations: [
    { title: 'Kingdom of León', type: 'location', slug: 'kingdom-of-leon', label: 'Mother-crown and first rival' },
    { title: 'Kingdom of Castile', type: 'location', slug: 'kingdom-of-castile', label: 'The neighbour of treaties and wars' },
    { title: 'Lisbon', type: 'location', slug: 'lisbon', label: 'Conquest of 1147, capital and port' }
  ],
  events: [
    { title: 'Battle of São Mamede', type: 'event', slug: 'battle-of-sao-mamede', label: 'The founding battle, 1128' },
    { title: 'Siege of Lisbon', type: 'event', slug: 'siege-of-lisbon', label: 'The great conquest, 1147' },
    { title: 'Battle of Aljubarrota', type: 'event', slug: 'battle-of-aljubarrota', label: 'Independence defended, 1385' }
  ]
}

k.sources = [
  { title: 'Wikimedia Commons image record — Genealogy of the Kings of Portugal', author: 'Wikimedia Commons', type: 'image source', url: pg('Genealogia_dos_Reis_de_Portugal_-_Tavoa_Primeira_dos_Reys_-_Tronco_do_Conde_Dom_Anrique.jpg') },
  { title: 'Kingdom of Portugal — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Kingdom_of_Portugal' },
  { title: 'A History of Medieval Portugal (in: Disney, A History of Portugal and the Portuguese Empire, vol. 1)', author: 'A. R. Disney', type: 'book', note: 'Standard English-language survey of the medieval kingdom.' },
  { title: 'Fernão Lopes, Crónica de D. João I', author: 'Fernão Lopes', type: 'primary source', note: 'The great fifteenth-century chronicle of the 1383–1385 crisis and Aljubarrota.' }
]

fs.writeFileSync(dataPath, JSON.stringify(data, null, 2) + '\n')
console.log('Kingdom of Portugal rewritten:', k.contentSections.length, 'sections,', k.timeline.length, 'timeline entries')
