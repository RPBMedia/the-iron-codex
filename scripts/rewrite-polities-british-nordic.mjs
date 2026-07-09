// Polity audit batch 3: British Isles and Scandinavia.
import fs from 'node:fs'

const dataPath = new URL('../server/data/history.json', import.meta.url)
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'))
const byId = Object.fromEntries(data.locations.map((l) => [l.id, l]))
function patch(id, fields) {
  const l = byId[id]
  if (!l) { console.error('missing polity:', id); process.exitCode = 1; return }
  Object.assign(l, fields)
  console.log('rewrote', id, `(${fields.contentSections.length} sections, ${fields.timeline.length} timeline)`)
}

// ── KINGDOM OF ENGLAND ──────────────────────────────────────────────────────
patch('kingdom-of-england', {
  overview: [
    'The Kingdom of England was made twice: first by the house of Wessex, whose kings from Alfred the Great to Æthelstan united the Anglo-Saxon realms against the Danes (Æthelstan the first king of all England from 927); then by the Norman Conquest of 1066, which rebuilt its ruling class, church, and landholding on the verdict of the Battle of Hastings.',
    'Between Domesday Book and the Wars of the Roses it produced medieval Europe\'s most precocious state — exchequer, common law, Magna Carta (1215), and parliament — while its kings\' French ambitions, from the Angevin empire to the Hundred Years\' War, bound its history to the continent until Castillon (1453) threw it back on its island and its institutions.'
  ],
  contentSections: [
    { title: 'Overview', paragraphs: [
      'The Kingdom of England was made twice: first by the house of Wessex, whose kings from Alfred the Great to Æthelstan united the Anglo-Saxon realms against the Danes (Æthelstan the first king of all England from 927); then by the Norman Conquest of 1066, which rebuilt its ruling class, church, and landholding on the verdict of the Battle of Hastings.',
      'Between Domesday Book and the Wars of the Roses it produced medieval Europe\'s most precocious state — exchequer, common law, Magna Carta (1215), and parliament — while its kings\' French ambitions, from the Angevin empire to the Hundred Years\' War, bound its history to the continent until the Battle of Castillon (1453) threw it back on its island and its institutions.'
    ]},
    { title: 'Background and origins', paragraphs: [
      'England\'s name and language came from the Anglo-Saxon kingdoms planted in post-Roman Britain — Northumbria, Mercia, East Anglia, Wessex and their lesser neighbours — Christianised from 597 by Augustine\'s Roman mission at Canterbury and Irish monks from Iona, and schooled by Bede, whose History (731) imagined a single "English people" long before politics did.',
      'The Vikings made the unity. The Great Heathen Army (from 865) destroyed every kingdom but Wessex; Alfred the Great\'s survival at Edington (878), his burhs, fleet, and laws, and the reconquests of Edward the Elder and Æthelstan — crowned first king of the English after taking York in 927, victor of the great coalition at Brunanburh in 937 — built one realm where four had been. The Danish empire of Cnut the Great (1016–1035) proved the kingdom could change dynasties without dissolving: its shires, sheriffs, geld, and coinage already the strongest royal machinery in the Latin West.'
    ]},
    { title: 'The Norman and Angevin kingdom', paragraphs: [
      'The events of 1066 — Stamford Bridge destroying the Norwegian claim, the Battle of Hastings destroying King Harold Godwinson — delivered that machinery to William the Conqueror, who rebuilt its commanding heights: a Norman-French aristocracy holding by knight-service, castles and Romanesque cathedrals rising together, and Domesday Book (1086) inventorying the conquest with bureaucratic thoroughness no contemporary state could match.',
      'Henry II (1154–1189) turned lordship into law: itinerant justices, standard writs, and juries made the common law; the Becket conflict marked its limit at the church door. His sons ran the empire down — Richard the Lionheart\'s crusade and ransom, John of England\'s loss of Normandy (1204) and the baronial revolt that extracted Magna Carta at Runnymede (1215) — and the century of Henry III and Edward I turned crisis into constitution: Simon de Montfort\'s parliament of 1265 seating burgesses, Edward\'s "Model Parliament" of 1295, statute law, and the conquests of Wales (1277–1283, ringed with Caernarfon\'s castles) and the attempted conquest of Scotland that Bannockburn (1314) undid.'
    ]},
    { title: 'Late Middle Ages: war, plague, and the crown at stake', paragraphs: [
      'Edward III\'s claim to France opened the Hundred Years\' War (1337): the longbow triumphs of Crécy (1346) and Poitiers (1356), Calais taken, the Black Prince\'s Aquitaine — then the Black Death (1348) killing perhaps half the realm, the Statute of Labourers failing to freeze its wages, and the Peasants\' Revolt (1381) burning London\'s records in the first great English rising.',
      'Dynastic politics turned lethal after Richard II\'s deposition by Henry IV (1399): the Lancastrian zenith under Henry V — Agincourt (1415), Normandy conquered at the Siege of Rouen, the Treaty of Troyes promising France itself — collapsed under Henry VI, whose losses at Formigny (1450) and Castillon (1453) ended the French empire, and whose incapacity opened the Wars of the Roses at St Albans (1455): the medieval kingdom closing amid Towton\'s snow and the Tower\'s secrets, its institutions — parliament, common law, JPs, English as the tongue of law and Chaucer — stronger than any of the kings they survived.'
    ]},
    { title: 'Political structure and rule', paragraphs: [
      'England\'s medieval signature was strong central machinery bargained early: the Anglo-Saxon shire/hundred/sheriff grid and the geld; the Norman exchequer (auditing at Westminster by 1110) and chancery; Henry II\'s returnable writs making royal justice ordinary; and the tax-state\'s price — Magna Carta\'s clauses on consent and law, reissued until it became the realm\'s first statute, and parliament, which by Edward III\'s reign meant Lords and Commons whose assent made law and granted taxes.',
      'The crown\'s local reach ran through unpaid gentry — coroners, then justices of the peace (statutory from 1361) — rather than salaried prefects: cheap, resilient, and the seedbed of the political class the Commons represented. The church, from Lanfranc\'s reorganisation to the Statutes of Provisors and Praemunire (1351–1353) fencing papal reach, was partner and rival by turns; Wales was annexed under the Statute of Rhuddlan (1284); Ireland\'s lordship, planted in 1171, shrank by 1450 to the Pale.'
    ]},
    { title: 'Major rulers', paragraphs: [
      'Alfred the Great, 871–899 — saved Wessex at Edington, built burhs, fleet, and law: the unification\'s foundation.',
      'Æthelstan, 924–939 — first king of all England (927), victor of Brunanburh (937).',
      'Cnut the Great, 1016–1035 — the Danish empire\'s English decades: conquest ruling through English law.',
      'William the Conqueror, 1066–1087 — Hastings, the Norman settlement, and Domesday Book.',
      'Henry II of England, 1154–1189 — the common law\'s architect and the Angevin empire\'s master.',
      'John of England, 1199–1216 — Normandy lost, Magna Carta sealed: failure\'s constitutional harvest.',
      'Edward I of England, 1272–1307 — statutes, the Model Parliament, Wales conquered, Scotland attempted.',
      'Edward III of England, 1327–1377 — Crécy and Poitiers; parliament\'s two houses fixed in his long war-reign.',
      'Henry V of England, 1413–1422 — Agincourt and Troyes: the French crown almost grasped.',
      'Henry VI of England, 1422–1461/1470–71 — the losses of 1450–1453 and the Wars of the Roses.'
    ]},
    { title: 'Wars, battles, and expansion', paragraphs: [
      'The island wars: Edington (878) and the Viking age\'s long arc to Stamford Bridge (1066); Hastings (1066); the baronial wars of 1215–1217 and 1264–1265 (Lewes and Evesham); Wales conquered 1277–1283; the Scottish wars from Stirling Bridge and Falkirk to Bannockburn (1314) and the intermittent border centuries after.',
      'The continental wars: Normandy and Anjou lost at the Angevin collapse (1204, sealed at Bouvines 1214); the Hundred Years\' War\'s full sequence — Sluys, Crécy, Calais, Poitiers, the 1360 peace, the Du Guesclin reversal, Agincourt, the Siege of Rouen, Verneuil, then Orléans, Patay, Formigny, and Castillon — after which England\'s French possessions were Calais alone, and its soldiers came home to fight each other in the Roses.'
    ]},
    { title: 'Religion, culture, and society', paragraphs: [
      'The English church ran from Bede\'s Northumbria and the tenth-century monastic reform to Norman Romanesque (Durham\'s ribs pointing at Gothic), Canterbury\'s martyr-shrine after Becket (1170), the friars in the towns, Wyclif\'s challenge and the Lollards\' suppression (De heretico comburendo, 1401). Its parishes, guilds, and mystery plays framed common life; its universities — Oxford by 1200, Cambridge from 1209 — supplied the state its clerks.',
      'Society moved from Domesday\'s villeinage through the plague\'s wage revolution toward the yeoman and gentry England of the fifteenth century: wool and then cloth the export spine (the Staple at Calais from 1363); London swelling past forty thousand; English rising from conquered vernacular to the tongue of pleading (1362), of Chaucer, Langland, and the Paston letters — the first family archive of the emerging middling sort.'
    ]},
    { title: 'Decline, transformation, and legacy', paragraphs: [
      'The medieval kingdom ended not in decline but in redirection: the French empire gone by 1453, the crown fought over by Lancaster and York until the Tudor settlement (just past the period\'s edge) — while the deep structures held and compounded: parliament\'s consent to taxation, the common law\'s writs and juries, JP government, and a precociously unified national identity forged against Dane, then France.',
      'Its legacy is the constitutional vocabulary of the English-speaking world: Magna Carta as the rule-of-law\'s talisman, parliament as representative assembly\'s archetype, common law as a global legal family — medieval England\'s institutions outliving every dynasty that presided over them.'
    ]}
  ],
  knownFor: [
    'Unified by Wessex against the Danes; Æthelstan first king of England (927)',
    'The Norman Conquest, Domesday Book, and feudal England',
    'Common law, Magna Carta (1215), and parliament',
    'The Hundred Years\' War from Crécy to Castillon',
    'Plague, Peasants\' Revolt, and the Wars of the Roses'
  ],
  timeline: [
    { date: '597', title: 'Augustine at Canterbury', description: 'The Roman mission begins the English church.' },
    { date: '878', title: 'Edington', description: 'Alfred the Great defeats Guthrum; Wessex survives to lead the reconquest.' },
    { date: '927', title: 'England united', description: 'Æthelstan takes York and rules the first united English kingdom; Brunanburh (937) defends it.' },
    { date: '1016–1035', title: 'Cnut\'s empire', description: 'England anchors a Danish North Sea empire, its institutions intact.' },
    { date: '14 October 1066', title: 'Hastings', description: 'William the Conqueror defeats Harold Godwinson; the Norman kingdom begins.' },
    { date: '1086', title: 'Domesday Book', description: 'The conquest inventories itself — Europe\'s most complete medieval survey.' },
    { date: '1166–1179', title: 'The common law forms', description: 'Henry II\'s assizes and writs make royal justice the default.' },
    { date: '15 June 1215', title: 'Magna Carta', description: 'John seals the Great Charter at Runnymede; reissues make it the first statute.' },
    { date: '1265/1295', title: 'Parliament emerges', description: 'De Montfort\'s burgesses, then Edward I\'s Model Parliament, fix representation.' },
    { date: '1348–1349', title: 'The Black Death', description: 'Perhaps half the population dies; the labour economy transforms.' },
    { date: '1381', title: 'Peasants\' Revolt', description: 'Tyler and Ball\'s rising takes London; the poll tax dies with it.' },
    { date: '25 October 1415', title: 'Agincourt', description: 'Henry V\'s victory reopens the French dream; Troyes (1420) nearly grasps it.' },
    { date: '1450–1453', title: 'The French empire falls', description: 'Formigny and Castillon end the Hundred Years\' War; only Calais remains.' },
    { date: '22 May 1455', title: 'St Albans', description: 'The Wars of the Roses begin; the medieval kingdom\'s dynastic endgame.' }
  ],
  relatedEntries: {
    people: [
      { title: 'Alfred the Great', type: 'person', slug: 'alfred-the-great', label: 'The survivor-founder' },
      { title: 'William the Conqueror', type: 'person', slug: 'william-the-conqueror', label: '1066' },
      { title: 'Henry II of England', type: 'person', slug: 'henry-ii-of-england', label: 'The common law\'s maker' },
      { title: 'Edward III of England', type: 'person', slug: 'edward-iii-of-england', label: 'The war-king of Crécy' }
    ],
    locations: [
      { title: 'Kingdom of Wessex', type: 'location', slug: 'kingdom-of-wessex', label: 'The nucleus' },
      { title: 'Duchy of Normandy', type: 'location', slug: 'duchy-of-normandy', label: 'The conqueror\'s duchy' },
      { title: 'Kingdom of France', type: 'location', slug: 'kingdom-of-france', label: 'The rival of the whole period' },
      { title: 'Kingdom of Scotland', type: 'location', slug: 'kingdom-of-scotland', label: 'The northern neighbour' }
    ],
    events: [
      { title: 'Battle of Hastings', type: 'event', slug: 'battle-of-hastings', label: 'The kingdom remade, 1066' },
      { title: "Hundred Years' War", type: 'event', slug: 'hundred-years-war' },
      { title: 'Battle of Agincourt', type: 'event', slug: 'battle-of-agincourt' }
    ]
  },
  sources: [
    { title: 'Kingdom of England — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Kingdom_of_England' },
    { title: 'The Anglo-Saxons / The Norman Conquest (Marc Morris)', author: 'Marc Morris', type: 'book' },
    { title: 'England under the Norman and Angevin Kings', author: 'Robert Bartlett', type: 'book' }
  ]
})

// ── KINGDOM OF WESSEX ───────────────────────────────────────────────────────
patch('kingdom-of-wessex', {
  overview: [
    'Wessex — the kingdom of the West Saxons — was the Anglo-Saxon realm that outlived the rest: founded in the post-Roman migrations, hardened in wars with Mercia and the Britons, and, when the Great Heathen Army destroyed every rival English kingdom in the 860s–870s, the sole survivor from which a united England was built.',
    'Under Alfred the Great and his heirs it became the engine of unification — burhs, fleet, laws, and the reconquest of the Danelaw — until, with Æthelstan\'s coronation over all England in 927, Wessex ceased to be a kingdom by becoming the kingdom: its dynasty England\'s royal house, its heartland the medieval crown\'s.'
  ],
  contentSections: [
    { title: 'Overview', paragraphs: [
      'Wessex — the kingdom of the West Saxons — was the Anglo-Saxon realm that outlived the rest: founded in the post-Roman migrations, hardened in wars with Mercia and the Britons, and, when the Great Heathen Army destroyed every rival English kingdom in the 860s–870s, the sole survivor from which a united England was built.',
      'Under Alfred the Great and his heirs it became the engine of unification — burhs, fleet, laws, and the reconquest of the Danelaw — until, with Æthelstan\'s coronation over all England in 927, Wessex ceased to be a kingdom by becoming the kingdom: its dynasty England\'s royal house, its heartland the medieval crown\'s.'
    ]},
    { title: 'Background and origins', paragraphs: [
      'The West Saxon origin story — Cerdic and Cynric landing in 495, the Chronicle\'s neat conquest — is dynastic legend written centuries later; archaeology shows a messier fusion of Saxon settlers and Romano-Britons spreading from the upper Thames. The historical kingdom emerges with Ceawlin\'s wars (the 577 victory at Dyrham taking Gloucester, Cirencester, and Bath) and the West Saxons\' baptism under Cynegils (635), with the see later fixed at Winchester.',
      'Two kings made it durable: Ine (688–726), whose law-code — the first West Saxon legislation, preserved by Alfred\'s appendix — organised a realm of shires and dependent Britons, and Ecgberht (802–839), who broke Mercian supremacy at Ellendun (825), annexed Kent, Sussex, Surrey, and Essex, and received Northumbria\'s submission: overlord of the English on the eve of the storm.'
    ]},
    { title: 'The Viking crisis and Alfred', paragraphs: [
      'The Great Heathen Army landed in 865 and by 874 had destroyed or puppetised Northumbria, East Anglia, and Mercia. Wessex fought it to a standstill in the "year of battles" (871) under Æthelred I of Wessex and his brother Alfred — nine engagements including the victory at Ashdown — and bought time with tribute; the surprise attack of January 878 drove Alfred into the Somerset marshes of Athelney, the kingdom reduced to a guerrilla court.',
      'Edington (May 878) reversed it: Guthrum\'s army beaten, baptised, and settled in East Anglia by treaty. Alfred\'s reconstruction made survival a system — thirty-three garrisoned burhs (the Burghal Hidage lists them, none more than a day\'s march apart), a rotating field army, ships built to his design, London restored (886), a law-code issued, and a court school translating "the books most needful for men to know" into English: the programme of a king who understood that the war was cultural as well as military.'
    ]},
    { title: 'From Wessex to England', paragraphs: [
      'Alfred\'s children executed the reconquest: Edward the Elder and his sister Æthelflæd, Lady of the Mercians, rolled the burh-line through the Danelaw — Tettenhall (910) destroying Northumbrian power, Essex, East Anglia, and the Five Boroughs submitting by 918, Mercia absorbed into the West Saxon crown at Æthelflæd\'s death. The dynasty\'s style shifted from "king of the West Saxons" to "king of the Anglo-Saxons".',
      'Æthelstan completed it: York taken in 927, the northern kings\' submission at Eamont Bridge, and the great coalition of Scots, Strathclyde, and Dublin Norse destroyed at Brunanburh (937) — the Chronicle\'s victory-poem calling it the greatest slaughter since the Saxons came. Wessex thereafter was England\'s core rather than a kingdom: the house of Cerdic ruling the whole, through the monastic reform of Edgar\'s peaceable reign, the disasters of Æthelred the Unready, Cnut\'s Danish interlude, to Edward the Confessor and the 1066 succession that ended the line — Wessex\'s last political shape being Harold Godwinson\'s pre-conquest earldom.'
    ]},
    { title: 'Political structure and rule', paragraphs: [
      'Wessex\'s machinery became England\'s template: shires (older here than anywhere — Hampshire, Wiltshire, Dorset, Somerset predate Alfred) under ealdormen and royal reeves; the hundred courts beneath them; a royal host raised by land-assessment (hidage) that also priced the burhs\' garrisons; and a coinage of controlled mints whose silver pennies the kings recalled and reissued at will — Europe\'s most managed currency.',
      'Kingship ran on the witan\'s counsel and consent, the church\'s anointing (from Ecgberht\'s line onward the dynasty wrapped itself in sacral legitimacy), and written law from Ine to Alfred to their successors: a governing tradition dense enough that conquerors — Cnut in 1016 as much as William in 1066 — found it easier to operate than replace.'
    ]},
    { title: 'Major rulers', paragraphs: [
      'Ine, 688–726 — lawgiver and organiser of the early kingdom; died a pilgrim in Rome.',
      'Ecgberht, 802–839 — victor of Ellendun; made Wessex the English overlord-power.',
      'Æthelwulf of Wessex, 839–858 — held the line against the first great raids; father of five kings.',
      'Æthelred I of Wessex, 865–871 — fought the year of battles beside his brother.',
      'Alfred the Great, 871–899 — Edington, the burhs, the fleet, the law, the learning: the survivor-architect.',
      'Edward the Elder, 899–924 — reconquered the southern Danelaw with Æthelflæd.',
      'Æthelstan, 924–939 — first king of England; Brunanburh\'s victor.'
    ]},
    { title: 'Religion, culture, and society', paragraphs: [
      'Winchester was the kingdom\'s sacred capital: Old Minster holding Swithun\'s relics, New Minster Alfred\'s bones, and — under Edgar and Bishop Æthelwold in the 970s — the epicentre of the Benedictine reform whose Regularis Concordia standardised English monastic life and whose scriptorium\'s "Winchester style" illuminated it. Sherborne, Glastonbury (Dunstan\'s nursery), and Malmesbury (Aldhelm\'s) carried the older learning.',
      'Alfred\'s vernacular programme gave England a written prose language centuries ahead of its neighbours — the Chronicle begun, Bede and Boethius Englished, the laws in the people\'s tongue — and West Saxon became the standard literary dialect in which most surviving Old English (Beowulf\'s manuscript included) was copied. Society ranged from the thegnly class the burh-system enriched to the ceorls whose service and geld sustained it — the deal codified from Ine\'s code to the Domesday shires the Conqueror inherited.'
    ]},
    { title: 'Legacy', paragraphs: [
      'Wessex\'s legacy is England itself: the unification\'s machinery and dynasty, the shire map that lasted until 1974, Winchester\'s royal-sacral tradition, and the vernacular administrative culture that made English government documentary. Even the Conquest ran on its rails — Domesday is a Wessex-style survey executed with Norman ruthlessness.',
      'In memory it became the Anglo-Saxon kingdom par excellence: Alfred the only English king called "the Great", his marsh-and-comeback story the national myth of resilience, endlessly reworked from the medieval chroniclers to the modern novelists — the little kingdom that, alone of its kind, refused to die.'
    ]}
  ],
  knownFor: [
    'Sole Anglo-Saxon kingdom to survive the Great Heathen Army',
    'Alfred the Great: Edington, burhs, fleet, laws, and learning',
    'The reconquest of the Danelaw under Edward the Elder and Æthelflæd',
    'Æthelstan: first king of all England (927), victor of Brunanburh (937)',
    'Template of English shires, coinage, and vernacular government'
  ],
  timeline: [
    { date: '577', title: 'Dyrham', description: 'Ceawlin\'s victory takes Gloucester, Cirencester, and Bath; the kingdom reaches the Severn.' },
    { date: '688–726', title: 'Ine\'s laws', description: 'The first West Saxon code organises the kingdom that Alfred will inherit.' },
    { date: '825', title: 'Ellendun', description: 'Ecgberht breaks Mercia and annexes the south-east; Wessex becomes overlord of the English.' },
    { date: '871', title: 'The year of battles', description: 'Nine engagements against the Great Army, Ashdown among them; Alfred succeeds mid-war.' },
    { date: 'January–May 878', title: 'Athelney to Edington', description: 'From the marsh refuge to the decisive victory; Guthrum accepts baptism and the Danelaw treaty.' },
    { date: 'c. 880s–890s', title: 'The burh system', description: 'Thirty-three garrisoned towns web the kingdom; London is restored (886).' },
    { date: '910–918', title: 'The reconquest', description: 'Tettenhall, then the Danelaw\'s submission to Edward the Elder and Æthelflæd.' },
    { date: '927', title: 'York taken', description: 'Æthelstan rules all England; Wessex becomes the kingdom\'s core.' },
    { date: '937', title: 'Brunanburh', description: 'The great coalition is destroyed; the poets call it the age\'s bloodiest field.' },
    { date: '1066', title: 'The line ends', description: 'Edward the Confessor\'s death and Hastings close the house of Cerdic\'s three-century story.' }
  ],
  relatedEntries: {
    people: [
      { title: 'Alfred the Great', type: 'person', slug: 'alfred-the-great' },
      { title: 'Æthelred I of Wessex', type: 'person', slug: 'aethelred-i-of-wessex', label: 'The year of battles\' king' },
      { title: 'Edward the Elder', type: 'person', slug: 'edward-the-elder', label: 'The reconqueror' },
      { title: 'Æthelstan', type: 'person', slug: 'aethelstan', label: 'First king of England' }
    ],
    locations: [ { title: 'Kingdom of England', type: 'location', slug: 'kingdom-of-england', label: 'The realm Wessex became' }, { title: 'Northumbria', type: 'location', slug: 'northumbria', label: 'The northern kingdom absorbed in 927' } ],
    events: [ { title: 'Battle of Stamford Bridge', type: 'event', slug: 'battle-of-stamford-bridge', label: 'The Viking age\'s English end' } ]
  },
  sources: [
    { title: 'Wessex — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Wessex' },
    { title: 'Asser, Life of King Alfred; the Anglo-Saxon Chronicle', author: 'Asser; Chronicle compilers', type: 'primary source' },
    { title: 'The Anglo-Saxons', author: 'Marc Morris', type: 'book' }
  ]
})

// ── NORTHUMBRIA ─────────────────────────────────────────────────────────────
patch('northumbria', {
  overview: [
    'Northumbria — the union of Bernicia and Deira north of the Humber — was seventh-century Britain\'s superpower and Europe\'s unlikely lighthouse: the kingdom of Oswald and the Whitby synod, of Lindisfarne, Bede, and the Codex Amiatinus, whose "golden age" made a windswept frontier the most learned corner of the Latin West.',
    'Its later history was a long dismemberment: the first Viking raid in recorded western memory at Lindisfarne (793), the Great Army taking York (866–867) and planting the Danish kingdom of Jórvík, Æthelstan\'s annexation (927), and the earldom\'s absorption — harried by the Conqueror, contested by Scotland — into medieval England\'s far north.'
  ],
  contentSections: [
    { title: 'Overview', paragraphs: [
      'Northumbria — the union of Bernicia and Deira north of the Humber — was seventh-century Britain\'s superpower and Europe\'s unlikely lighthouse: the kingdom of Oswald and the Whitby synod, of Lindisfarne, Bede, and the Codex Amiatinus, whose "golden age" made a windswept frontier the most learned corner of the Latin West.',
      'Its later history was a long dismemberment: the first Viking raid in recorded western memory at Lindisfarne (793), the Great Army taking York (866–867) and planting the Danish kingdom of Jórvík, Æthelstan\'s annexation (927), and the earldom\'s absorption — harried by the Conqueror, contested by Scotland — into medieval England\'s far north.'
    ]},
    { title: 'Origins and the age of overlords', paragraphs: [
      'Two Anglian kingdoms seeded it: Bernicia on its rock-fortress of Bamburgh and Deira around York, united (and repeatedly re-divided) by warrior-kings from Æthelfrith onward. Edwin\'s baptism at York (627) with Paulinus began royal Christianity; his fall to Penda and Cadwallon led to Oswald\'s restoration from Iona\'s exile — victory at Heavenfield (634), Aidan summoned to found Lindisfarne — and Oswiu\'s long supremacy, which at the Synod of Whitby (664) chose Roman over Irish usage for the English church.',
      'The northern imperium broke at the Trent (679) against Mercia and at Nechtansmere (685), where the Picts destroyed Ecgfrith and the kingdom\'s Scottish ambitions together; thereafter Northumbria\'s greatness was cultural. Its eighth-century politics decayed into coup and counter-coup — eleven kings deposed or murdered in a century — even as its cloisters flowered.'
    ]},
    { title: 'The golden age', paragraphs: [
      'The generation around 700 produced wonders from twin sources: Irish-rooted Lindisfarne, whose Gospels (c. 715) fused Celtic, Germanic, and Mediterranean art into the insular style\'s masterpiece; and Roman-facing Wearmouth-Jarrow, Benedict Biscop\'s twin foundation, whose library fed Bede — the age\'s greatest scholar, whose Ecclesiastical History (731) invented English history — and whose scriptorium produced the Codex Amiatinus, the oldest complete Latin Bible in existence.',
      'York\'s school carried the flame forward: its master Alcuin, headhunted by Charlemagne in 781, became the Carolingian renaissance\'s schoolmaster — Northumbrian learning refounding continental education. Stone crosses (Ruthwell, Bewcastle), Cædmon\'s first English religious verse at Whitby, and Cuthbert\'s cult at Lindisfarne completed a culture without contemporary equal north of Rome.'
    ]},
    { title: 'Vikings, Jórvík, and the end of the kingdom', paragraphs: [
      'Lindisfarne\'s sack in June 793 — "never before has such terror appeared in Britain", Alcuin wrote from Charlemagne\'s court — opened the Viking age; the Great Heathen Army closed the kingdom, taking York in 866–867 and killing both rival kings who stormed its walls. Danish Jórvík ruled from the Ouse for nearly a century — a trading boomtown under kings like Guthfrith and the Dublin dynasty — while English earls held out beyond the Tees at Bamburgh, and Cuthbert\'s monks wandered seven years with his coffin to eventual rest at Durham (995).',
      'The end came in instalments: Æthelstan took York in 927; the last Viking king, Eric Bloodaxe, was expelled and killed at Stainmore in 954; and the earldom of Northumbria passed through English, Danish, and Norman hands — Siward, Tostig Godwinson (whose misrule sparked the 1065 revolt), Morcar — until William the Conqueror\'s Harrying of the North (1069–1070) answered rebellion with a devastation Domesday still records as "waste". Durham\'s palatine bishops and the border earls inherited the fragments; the Scots took Lothian for good after Carham (1018), fixing the future Anglo-Scottish line on the Tweed.'
    ]},
    { title: 'Political structure and rule', paragraphs: [
      'Northumbrian kingship was war-band kingship writ large: Bernician and Deiran royal lines alternating and feuding, sub-kings under overlord-kings (Bede\'s imperium), tribute from Picts, Britons, and Mercians when strong, and — uniquely well-documented — the eighth century\'s revolving-door depositions, which Alcuin\'s letters diagnose as the kingdom\'s moral disease.',
      'The church was co-government: bishop-abbots of royal kin, monasteries as royal treasuries and archives, Cuthbert\'s community at Durham eventually holding a palatinate no other English see matched. After 954 "Northumbria" meant an earldom whose holders — from Bamburgh\'s house through Siward to the Conquest — governed a border society of liberties (Durham, Tynedale, Redesdale) that kept the region constitutionally peculiar throughout the Middle Ages.'
    ]},
    { title: 'Major rulers', paragraphs: [
      'Æthelfrith, c. 592–616 — the unifier-conqueror the Britons called "the Twister".',
      'Edwin, 616–633 — first Christian king; York\'s baptism, 627.',
      'Oswald, 634–642 — Heavenfield\'s victor, Lindisfarne\'s founder, the warrior-saint.',
      'Oswiu, 642–670 — Penda\'s slayer at the Winwaed (655); Whitby\'s arbiter (664).',
      'Ecgfrith, 670–685 — the overreach: Trent and Nechtansmere ended the imperium.',
      'Eric Bloodaxe, York\'s last king, d. 954 — the Viking kingdom\'s violent coda.'
    ]},
    { title: 'Legacy', paragraphs: [
      'Northumbria\'s golden age shaped Europe: Bede\'s History gave the English their story and the AD dating system its vogue; Alcuin carried York\'s classroom to Aachen; the Lindisfarne Gospels and Amiatinus set standards of book-art never surpassed; and Cuthbert\'s Durham became the north\'s sacred anchor, its Norman cathedral (from 1093) engineering\'s reply to sanctity.',
      'Politically its dissolution drew the map: the Tweed border and the palatinate of Durham, the north\'s liberties and border tenures, and York\'s enduring role as England\'s second capital — the ghost of Jórvík in the city\'s very name-forms. The kingdom died young; its books, saints, and boundaries governed on.'
    ]}
  ],
  knownFor: [
    'The seventh-century golden age: Lindisfarne, Bede, Whitby, Alcuin',
    'First recorded Viking raid in the west — Lindisfarne, 793',
    'The Danish kingdom of Jórvík at York',
    'Cuthbert\'s community and palatine Durham',
    'Annexed to England 927; the border fixed at the Tweed after Carham (1018)'
  ],
  timeline: [
    { date: '627', title: 'Edwin baptised at York', description: 'Royal Christianity begins with Paulinus\'s mission.' },
    { date: '634', title: 'Heavenfield', description: 'Oswald restores the kingdom and summons Aidan to found Lindisfarne.' },
    { date: '664', title: 'Synod of Whitby', description: 'Oswiu chooses Roman usage; the English church\'s direction is set.' },
    { date: '685', title: 'Nechtansmere', description: 'The Picts destroy Ecgfrith; the northern imperium ends.' },
    { date: 'c. 715/731', title: 'Gospels and History', description: 'The Lindisfarne Gospels and Bede\'s Ecclesiastical History crown the golden age.' },
    { date: '8 June 793', title: 'Lindisfarne sacked', description: 'The Viking age opens on the holy island.' },
    { date: '866–867', title: 'York falls', description: 'The Great Army takes the city; Danish Jórvík begins.' },
    { date: '927/954', title: 'Annexation', description: 'Æthelstan takes York; Eric Bloodaxe\'s death at Stainmore ends the Viking kingdom.' },
    { date: '1018', title: 'Carham', description: 'The Scots win Lothian; the Tweed becomes the border.' },
    { date: '1069–1070', title: 'The Harrying of the North', description: 'William the Conqueror devastates the rebellious earldom; Domesday writes "waste".' }
  ],
  relatedEntries: {
    people: [
      { title: 'Æthelstan', type: 'person', slug: 'aethelstan', label: 'The annexer of 927' },
      { title: 'Eric Bloodaxe', type: 'person', slug: 'eric-bloodaxe', label: 'York\'s last Viking king' },
      { title: 'Tostig Godwinson', type: 'person', slug: 'tostig-godwinson', label: 'The earl whose fall led to 1066' }
    ],
    locations: [ { title: 'Kingdom of England', type: 'location', slug: 'kingdom-of-england' }, { title: 'Kingdom of Scotland', type: 'location', slug: 'kingdom-of-scotland', label: 'The winner of Lothian' } ],
    events: [ { title: 'Battle of Stamford Bridge', type: 'event', slug: 'battle-of-stamford-bridge', label: 'Fought in old Deira, 1066' } ]
  },
  sources: [
    { title: 'Kingdom of Northumbria — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Kingdom_of_Northumbria' },
    { title: 'Bede, Ecclesiastical History of the English People', author: 'Bede', type: 'primary source' },
    { title: 'The King in the North', author: 'Max Adams', type: 'book' }
  ]
})

// ── KINGDOM OF SCOTLAND ─────────────────────────────────────────────────────
patch('kingdom-of-scotland', {
  overview: [
    'Scotland was assembled, not conquered into being: the Gaelic kings of Alba — traditionally from Kenneth MacAlpin (c. 843) — fused Picts and Scots, took Lothian at Carham (1018) and Strathclyde soon after, and by Máel Coluim III\'s day ruled a realm from the Tweed to the Moray Firth that the Canmore dynasty then transformed with Anglo-Norman settlers, burghs, and reformed monasticism.',
    'Its defining medieval ordeal was the Wars of Independence: the succession broken in 1290, Edward I of England\'s overlordship and the humiliation of John Balliol, resistance under William Wallace and victory under Robert the Bruce at Bannockburn (1314), and the Declaration of Arbroath (1320) — sovereignty argued as community consent — before the long Stewart centuries of border war and French alliance.'
  ],
  contentSections: [
    { title: 'Overview', paragraphs: [
      'Scotland was assembled, not conquered into being: the Gaelic kings of Alba — traditionally from Kenneth MacAlpin (c. 843) — fused Picts and Scots, took Lothian at Carham (1018) and Strathclyde soon after, and by Máel Coluim III\'s day ruled a realm from the Tweed to the Moray Firth that the Canmore dynasty then transformed with Anglo-Norman settlers, burghs, and reformed monasticism.',
      'Its defining medieval ordeal was the Wars of Independence: the succession broken in 1290, Edward I of England\'s overlordship and the humiliation of John Balliol, resistance under William Wallace and victory under Robert the Bruce at the Battle of Bannockburn (1314), and the Declaration of Arbroath (1320) — sovereignty argued as community consent — before the long Stewart centuries of border war and French alliance.'
    ]},
    { title: 'Background and origins', paragraphs: [
      'Medieval Scotland fused four peoples: Picts north of the Forth, whose kingdom dominated the early north; Gaelic Scots of Dál Riata in Argyll, bringing Columba\'s Iona (563) and its paruchia; Britons of Strathclyde around Dumbarton and Govan; and Angles of Lothian, Northumbria\'s northern shore. Viking pressure — Dumbarton sacked from Dublin in 870, the isles and Caithness settled from Norway — squeezed them together.',
      'The kingdom of Alba appears under Kenneth MacAlpin\'s dynasty from the mid-ninth century, Gaelic in speech and church (the relics of Columba divided between Dunkeld and Ireland), crowning its kings on the Stone at Scone. Constantine II (900–943) named it Alba, fought Æthelstan at Brunanburh, and retired to St Andrews; Carham (1018) won Lothian, and Strathclyde\'s absorption under Máel Coluim II\'s heirs completed the mainland assembly the Canmores inherited.'
    ]},
    { title: 'High Middle Ages: the Canmore transformation', paragraphs: [
      'Máel Coluim III (Canmore, 1058–1093) — Macbeth\'s supplanter, husband of the English saint-queen Margaret — opened the kingdom southward; his sons, above all David I (1124–1153), revolutionised it: Anglo-Norman families (Bruce, Balliol, Stewart) planted on knight-service, royal burghs chartered from Berwick to Inverness with their own law, sheriffdoms and justiciars superimposed on the mormaers, a reformed coinage, and the great border abbeys — Melrose, Kelso, Jedburgh, Dryburgh — anchoring a Europeanised church. Contemporaries called it revolution; David called it improvement, and fought England at the Standard (1138) all the same.',
      'His successors consolidated: William the Lion\'s capture at Alnwick (1174) briefly subjected the realm to Henry II of England (the Falaise homage, bought back in 1189); Alexander II and Alexander III rounded the kingdom — the Western Isles won from Norway after Largs (1263) by the Treaty of Perth (1266) — and the thirteenth century closed in prosperity remembered as a golden age, until Alexander III rode over a Fife cliff in 1286 and the succession died with his granddaughter, Margaret, Maid of Norway, in 1290.'
    ]},
    { title: 'The Wars of Independence and late medieval Scotland', paragraphs: [
      'Edward I of England judged the Great Cause as overlord, chose John Balliol (1292), then stripped king and kingdom — Berwick sacked, Dunbar won, the Stone of Scone carried south (1296). Resistance made its legends fast: William Wallace and Moray at Stirling Bridge (1297), Wallace\'s defeat at Falkirk and betrayal to execution (1305); then Robert the Bruce — crowned at Scone weeks after killing John Comyn at Dumfries (1306) — rebuilding from fugitive to victor of the Battle of Bannockburn (1314), the raiding peace-making of the Declaration of Arbroath (1320), and the recognition of Edinburgh-Northampton (1328).',
      'The war\'s afterlives filled the century: Edward Balliol and the Disinherited winning Dupplin Moor and Halidon Hill in the 1330s; David II captured at Neville\'s Cross (1346) honouring the French alliance after Crécy; ransom politics and the first Stewart, Robert II (1371). Late medieval Scotland ran on that "auld alliance" (renewed from 1295 to Flodden and beyond), on border war — Otterburn (1388) — and on a crown wrestling its magnates: James I\'s murdered reforms (1437), the Black Douglases broken by James II (Arbroath\'s spirit surviving in a parliament of three estates that could, and did, say no).'
    ]},
    { title: 'Political structure and rule', paragraphs: [
      'Scottish kingship kept its own grammar: inauguration at Scone on the Stone (until 1296) with the royal genealogy recited in Gaelic, no anointing until 1329\'s papal grant — legitimacy resting on kin, community, and continuity more than sacral theatre. The community of the realm was no phrase: it governed as Guardians through the interregna and put its name to Arbroath\'s famous conditional loyalty — a king who betrayed the kingdom\'s freedom could be replaced.',
      'Government mixed imported and native forms: sheriffs and justiciars beside earls who were often the old mormaers renamed; burgh law (the Leges Burgorum) and the Court of the Four Burghs; a parliament of prelates, nobles, and burgh commissioners auditing war finance from the 1320s; and beyond the highland line, lordships — above all the MacDonald Lordship of the Isles — where the crown\'s writ ran through galleys, bonds, and negotiation rather than sheriffs.'
    ]},
    { title: 'Major rulers', paragraphs: [
      'Kenneth MacAlpin, d. 858 — the dynasty\'s traditional founder over Picts and Scots.',
      'Constantine II, 900–943 — Alba named, Brunanburh fought, the realm consolidated.',
      'Máel Coluim II, 1005–1034 — Carham (1018) and Lothian won.',
      'David I, 1124–1153 — burghs, abbeys, sheriffs, and settlers: the great transformer.',
      'Alexander III, 1249–1286 — the Isles won, the golden age presided; his death broke the line.',
      'John Balliol, 1292–1296 — the Great Cause\'s king, stripped as "Toom Tabard".',
      'Robert the Bruce, 1306–1329 — Bannockburn, Arbroath, and independence restored.',
      'David II, 1329–1371 — Neville\'s Cross, captivity, and the shrewd fiscal recovery.',
      'Robert II of Scotland, 1371–1390 — the first Stewart king.',
      'James I, 1406–1437 — the poet-king\'s legislative storm, ended by assassination.'
    ]},
    { title: 'Wars, battles, and expansion', paragraphs: [
      'Against England the roll is the kingdom\'s spine: Carham (1018); the Standard (1138); Alnwick (1174) and the Falaise homage; Dunbar (1296); Stirling Bridge (1297) and Falkirk (1298); Bannockburn (1314); the Weardale campaign and Stanhope Park (1327); Dupplin Moor (1332) and Halidon Hill (1333); Neville\'s Cross (1346); Otterburn (1388); Homildon Hill (1402) — a rhythm of catastrophe and recovery that made the border a permanent war-society of wardens, marches, and reiving surnames.',
      'Against Norway: Largs (1263) and the Treaty of Perth (1266) winning the Hebrides and Man; Orkney and Shetland following by marriage-pledge in 1468–1472, just past the period\'s heart. Within: the crown\'s long duels with Moray\'s men, the Lord of the Isles (the 1411 blood-letting at Harlaw), and the Douglases — the "Black Dinner" (1440) and James II\'s dagger (1452) among Europe\'s franker statements of royal policy.'
    ]},
    { title: 'Religion, culture, and society', paragraphs: [
      'The church travelled from Iona\'s and the Céli Dé\'s Gaelic world to a Roman province in David I\'s pattern — Cluniac, Cistercian, and Augustinian houses, dioceses from Glasgow to Aberdeen — declared a "special daughter" answering directly to Rome (1192) to fence out York\'s claims; St Andrews rose on the apostle\'s relics to metropolitan rank (1472), its university (1410–1413) joined by Glasgow (1451) and Aberdeen (1495).',
      'Its society spoke four tongues — Gaelic dominant then receding to the highlands, Scots (northern English) rising in burgh and parliament, Latin in kirk and charter, Norse in the isles — and its late medieval culture found voice in Barbour\'s Brus (1375), Wyntoun and Fordun\'s chronicles building the national story, and the makars around the Stewart court. Wool through Berwick (till war wrecked it), then hides, fish, and the Leith-Flanders staple carried a poor kingdom\'s trade; kin, bond, and feud — lowland surname and highland clan — organised what the sheriff could not reach.'
    ]},
    { title: 'Legacy', paragraphs: [
      'Medieval Scotland\'s core legacy is survival with argument attached: the Wars of Independence fixed a separate crown that even 1603\'s union of crowns and 1707\'s union of parliaments absorbed rather than erased, and Arbroath\'s letter — freedom as the community\'s possession, kingship as its trust — became a founding text of European contractual politics, quoted far beyond its border.',
      'It bequeathed institutions (parliament of estates, Scots law\'s distinct stream, the ancient universities), the auld alliance\'s long French thread, a border ballad-culture, and the national mythology — Wallace, Bruce, the Stone — that the Middle Ages minted and modernity still spends.'
    ]}
  ],
  knownFor: [
    'Picts and Scots fused into Alba; Lothian won at Carham (1018)',
    'David I\'s revolution: burghs, abbeys, and Anglo-Norman Scotland',
    'The Wars of Independence: Wallace, Bruce, Bannockburn (1314)',
    'The Declaration of Arbroath (1320)',
    'The auld alliance and the Stewart succession (1371)'
  ],
  timeline: [
    { date: '563', title: 'Columba at Iona', description: 'The mission-island anchors Gaelic Christianity in the north.' },
    { date: 'c. 843', title: 'Kenneth MacAlpin', description: 'The traditional union of Picts and Scots under one dynasty.' },
    { date: '1018', title: 'Carham', description: 'Lothian passes to the Scots; the Tweed line emerges.' },
    { date: '1124–1153', title: 'David I\'s revolution', description: 'Burghs, sheriffs, abbeys, and settler-families remake the kingdom.' },
    { date: '1263–1266', title: 'Largs and Perth', description: 'Norway cedes the Hebrides and Man to the Scottish crown.' },
    { date: '1286–1290', title: 'The succession fails', description: 'Alexander III\'s fall and the Maid of Norway\'s death open the Great Cause.' },
    { date: '1296', title: 'Edward I strikes', description: 'Berwick sacked, Balliol stripped, the Stone of Scone taken south.' },
    { date: '11 September 1297', title: 'Stirling Bridge', description: 'Wallace and Moray destroy the English army at the crossing.' },
    { date: '23–24 June 1314', title: 'Bannockburn', description: 'Robert the Bruce\'s schiltrons win the kingdom back.' },
    { date: '6 April 1320', title: 'Declaration of Arbroath', description: 'The barons\' letter to the pope states the community\'s sovereignty.' },
    { date: '17 October 1346', title: 'Neville\'s Cross', description: 'David II is captured honouring the French alliance.' },
    { date: '1371', title: 'The Stewarts', description: 'Robert II begins the dynasty that carries Scotland from the Middle Ages.' },
    { date: '21 February 1437', title: 'James I assassinated', description: 'The reforming king is murdered at Perth; the crown-magnate struggle resumes.' }
  ],
  relatedEntries: {
    people: [
      { title: 'Robert the Bruce', type: 'person', slug: 'robert-the-bruce', label: 'Bannockburn\'s king' },
      { title: 'William Wallace', type: 'person', slug: 'william-wallace', label: 'The Guardian' },
      { title: 'John Balliol', type: 'person', slug: 'john-balliol', label: 'The Great Cause\'s king' },
      { title: 'David II of Scotland', type: 'person', slug: 'david-ii-of-scotland' }
    ],
    locations: [
      { title: 'Kingdom of England', type: 'location', slug: 'kingdom-of-england', label: 'The southern adversary' },
      { title: 'Kingdom of Norway', type: 'location', slug: 'kingdom-of-norway', label: 'Ceded the Isles at Perth, 1266' }
    ],
    events: [
      { title: 'Battle of Bannockburn', type: 'event', slug: 'battle-of-bannockburn', label: '1314' },
      { title: 'Wars of Scottish Independence', type: 'event', slug: 'wars-of-scottish-independence' },
      { title: 'Treaty of Edinburgh-Northampton', type: 'event', slug: 'treaty-of-edinburgh-northampton', label: 'Recognition, 1328' }
    ]
  },
  sources: [
    { title: 'Kingdom of Scotland — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Kingdom_of_Scotland' },
    { title: 'Robert Bruce and the Community of the Realm of Scotland', author: 'G. W. S. Barrow', type: 'book' },
    { title: 'The New Edinburgh History of Scotland (relevant volumes)', author: 'Academic series', type: 'book' }
  ]
})

// ── KINGDOM OF NORWAY ───────────────────────────────────────────────────────
patch('kingdom-of-norway', {
  overview: [
    'Norway\'s medieval kingdom was built along a sea-road — the norðrvegr that named it: unified in tradition by Harald Fairhair at Hafrsfjord (c. 872), Christianised by the two Olafs (Tryggvason and the saint of Stiklestad), and stretched by its ships into a North Atlantic empire of tributary isles from Man and the Hebrides to Orkney, the Faroes, Iceland (1262–64), and Greenland.',
    'Its arc runs from Viking sea-kings through the civil-war century (1130–1240) to the consolidated "Norgesveldet" of Håkon IV and the lawgiver Magnus VI — then dynastic exhaustion: the male line\'s end (1319), the Black Death\'s exceptional devastation (1349), and absorption through Margaret I\'s union-building into Kalmar (1397), a junior partnership lasting into the modern era.'
  ],
  contentSections: [
    { title: 'Overview', paragraphs: [
      'Norway\'s medieval kingdom was built along a sea-road — the norðrvegr that named it: unified in tradition by Harald Fairhair at Hafrsfjord (c. 872), Christianised by the two Olafs (Tryggvason and the saint of Stiklestad), and stretched by its ships into a North Atlantic empire of tributary isles from Man and the Hebrides to Orkney, the Faroes, Iceland (1262–64), and Greenland.',
      'Its arc runs from Viking sea-kings through the civil-war century (1130–1240) to the consolidated "Norgesveldet" of Håkon IV Håkonsson and the lawgiver Magnus VI — then dynastic exhaustion: the male line\'s end (1319), the Black Death\'s exceptional devastation (1349), and absorption through Margaret I\'s union-building into Kalmar (1397), a junior partnership lasting into the modern era.'
    ]},
    { title: 'Background and origins', paragraphs: [
      'Before kings, Norway was chiefdoms strung on the coastal sailing route — Trøndelag\'s jarls and farmers around the Trondheimsfjord, the southwestern sea-kings, the Oslofjord\'s Danish-leaning lords — societies of things (assemblies), ship-levies, and the far-raiding that from Lindisfarne (793) made "Northman" a European word.',
      'Harald Fairhair\'s victory at Hafrsfjord (traditionally c. 872) is the unification\'s saga-anchor — kingship over the western coast, rivals driven to settle Iceland — though his realm fragmented among sons like Eric Bloodaxe and Haakon the Good. The tenth century\'s pattern held: native kings, Danish overlordship under Harald Bluetooth pressing from the south, and the Lade jarls ruling the north as brokers between them.'
    ]},
    { title: 'Christianisation and the age of the Olafs', paragraphs: [
      'Conversion came sword-first with two returned Vikings: Olaf Tryggvason (995–1000), baptised in England, who broke idols and chieftains alike until the coalition of Denmark, Sweden, and the jarls destroyed him at the sea-fight of Svolder (1000); and Olaf II Haraldsson (1015–1028), who rebuilt the kingdom and its church with law as much as force — the Moster assembly\'s Christian law — until Cnut the Great\'s silver and the offended magnates drove him out, and his return ended at the Battle of Stiklestad (1030).',
      'Stiklestad\'s defeat became the monarchy\'s foundation: miracles at the king\'s grave made Olaf Norway\'s eternal king (rex perpetuus Norvegiae), Nidaros his shrine-city, and the dynasty his heirs. His son Magnus the Good took Denmark too; his half-brother Harald Hardrada — Stiklestad\'s survivor, Byzantium\'s Varangian — died reaching for England at Stamford Bridge (1066), closing the Viking age; Olaf Kyrre\'s long peace (1067–1093) then gave the kingdom towns (Bergen founded), fixed bishoprics, and a breathing civilisation.'
    ]},
    { title: 'Civil wars, the great age, and the union drift', paragraphs: [
      'From 1130 the succession\'s open rules — every king\'s son, legitimate or not, a candidate — fed a century of civil war: Birkebeiner ("birch-legs") against Bagler factions, the pretender-king Sverre Sigurdsson (1177–1202) defying Rome itself with his crowned-usurper\'s genius, and the infant Håkon IV Håkonsson carried to safety over the mountains by Birkebeiner skiers (1206) — the rescue Norwegian memory still races.',
      'Håkon\'s reign (1217–1263) closed the wars and opened the great age: sole succession law (1260), Iceland and Greenland submitting (1261–1264), the court importing European romance and building in stone — though his last expedition ended indecisively at Largs (1263) and his son ceded the Hebrides by the Treaty of Perth (1266). Magnus VI "Law-mender" (1263–1280) gave the realm Europe\'s first single national law-code (the Landslov, 1274); Håkon V (1299–1319) moved the centre to Oslo and built Akershus — and died without sons. The Swedish union of his grandson Magnus, Haakon VI\'s marriage to Margaret of Denmark, the Black Death\'s carnage (1349 — perhaps half the people, the aristocracy and clergy gutted), and Olaf IV\'s early death delivered the crown to Margaret I\'s hands and the Kalmar Union (1397): Norway thereafter governed from abroad, its council fading, its tributary isles pawned or drifting.'
    ]},
    { title: 'Political structure and rule', paragraphs: [
      'Norwegian kingship rested on the things: regional law-assemblies — Frostathing, Gulathing, Eidsivathing, Borgarthing — where kings were acclaimed and law spoken, later federated under the Landslov\'s realm-wide rules. The leidang ship-levy organised the coast for war and tax; the hird (household) grew into an aristocracy of office (lendmenn, sysselmenn) rather than great territorial princes — Norway\'s nobility stayed Europe\'s poorest and its peasantry among the freest.',
      'The church, organised under the archbishopric of Nidaros (1152/53) with its province spanning the Atlantic isles, fought the crown over elections and jurisdiction — Sverre died excommunicate — but also built the monarchy\'s sacral core around Saint Olaf. The Council of the Realm emerged in the fourteenth century as regency government for absent union-kings: the very instrument through which the kingdom\'s independence would quietly drain away.'
    ]},
    { title: 'Major rulers', paragraphs: [
      'Harald Fairhair, c. 872–930 — Hafrsfjord\'s victor; unification\'s legendary founder.',
      'Haakon the Good, c. 934–961 — the Christian fosterling of Æthelstan; died defending the realm at Fitjar.',
      'Olaf Tryggvason, 995–1000 — the missionary sea-king; fell at Svolder.',
      'Olaf II Haraldsson, 1015–1028 — the law-Christianiser; Stiklestad\'s martyr, Norway\'s eternal king.',
      'Harald Hardrada, 1046–1066 — Byzantine Varangian, Oslo\'s founder, Stamford Bridge\'s casualty.',
      'Sverre Sigurdsson, 1177–1202 — the Birkebeiner priest-pretender who out-argued and outfought church and rivals.',
      'Håkon IV Håkonsson, 1217–1263 — the civil wars ended; the North Atlantic empire at its height.',
      'Magnus VI Law-mender, 1263–1280 — the Landslov of 1274: one law for one realm.',
      'Håkon V Magnusson, 1299–1319 — Oslo\'s king; the last of the old male line.',
      'Margaret I, regent-queen from 1387 — the union-builder who folded Norway into Kalmar.'
    ]},
    { title: 'Religion, culture, and society', paragraphs: [
      'Norway\'s conversion produced a distinctive Christian-royal culture: Saint Olaf\'s cult radiating from Nidaros across the North (churches from Dublin to Novgorod), stave churches translating ship-carpentry into ecclesiastical art, and the archdiocese\'s Atlantic province binding Iceland, Greenland, and the isles to Trondheim. The thirteenth-century court translated Europe — the King\'s Mirror instructing princes, riddarasögur rendering Arthurian romance — while Iceland, politically annexed, repaid the connection by writing the north\'s memory: Snorri Sturluson\'s Heimskringla is the sagas\' history of Norway\'s kings.',
      'Society ran on free farmers (bønder) at law in their things, fishers and the dried-cod trade that fed Europe\'s Lents, and towns small but strategic — Bergen above all, the stockfish staple where the Hanseatic League\'s Kontor (established by the 1360s) came to dominate exchange, a commercial colonisation that outlasted the union\'s politics. Serfdom never took root; the plague\'s emptied farms made land cheap and labour dear, deepening the peasant freedom that became the country\'s social signature.'
    ]},
    { title: 'Legacy', paragraphs: [
      'The medieval kingdom\'s legacy held through four centuries of union: the Landslov governing until 1687, the peasant-thing tradition and Saint Olaf\'s crown persisting as the idea of Norway that 1814\'s constitution-makers reached back to at Eidsvoll. The Atlantic web left Norse law and language in the isles — Manx and Hebridean place-names, Orkney and Shetland\'s Norn — and Iceland\'s sagas preserved the whole world\'s memory.',
      'Its paradox is instructive: a kingdom that pioneered national law and sole succession earlier than most of Europe was undone by biology and plague rather than defeat — the crown intact, the state hollowed, the nation stored in law, faith, and farms until called for again.'
    ]}
  ],
  knownFor: [
    'Unification at Hafrsfjord and the Fairhair dynasty',
    'Saint Olaf, Stiklestad (1030), and the Nidaros shrine-monarchy',
    'The North Atlantic empire: Iceland and Greenland under the crown (1262–64)',
    'The Landslov of 1274 — Europe\'s first national law-code',
    'The Black Death\'s devastation and the road to Kalmar (1397)'
  ],
  timeline: [
    { date: 'c. 872', title: 'Hafrsfjord', description: 'Harald Fairhair\'s sea-victory begins the unified kingdom of tradition.' },
    { date: '1000', title: 'Svolder', description: 'Olaf Tryggvason falls to the Dano-Swedish-jarl coalition; Norway is divided.' },
    { date: '29 July 1030', title: 'Stiklestad', description: 'Olaf II falls; his sainthood refounds the monarchy he lost.' },
    { date: '25 September 1066', title: 'Stamford Bridge', description: 'Harald Hardrada dies invading England — the Viking age\'s conventional end.' },
    { date: '1152/53', title: 'Nidaros archbishopric', description: 'The Atlantic church-province is founded around Saint Olaf\'s shrine.' },
    { date: '1130–1240', title: 'Civil-war century', description: 'Birkebeiner and Bagler tear the succession until Sverre\'s line prevails.' },
    { date: '1261–1264', title: 'The empire completed', description: 'Greenland and Iceland submit to Håkon IV; the Norgesveldet peaks.' },
    { date: '1266', title: 'Treaty of Perth', description: 'The Hebrides and Man are sold to Scotland after Largs.' },
    { date: '1274', title: 'The Landslov', description: 'Magnus Law-mender issues the single code for the whole realm.' },
    { date: '1319', title: 'The male line ends', description: 'Håkon V dies; the crown enters Swedish and then Danish unions.' },
    { date: '1349', title: 'The Black Death', description: 'The plague kills perhaps half of Norway — Europe\'s hardest-hit kingdom.' },
    { date: '1397', title: 'Kalmar Union', description: 'Margaret I\'s union crowns Eric of Pomerania; Norway\'s medieval independence closes.' }
  ],
  relatedEntries: {
    people: [
      { title: 'Harald Fairhair', type: 'person', slug: 'harald-fairhair' },
      { title: 'Olaf II Haraldsson', type: 'person', slug: 'olaf-ii-haraldsson', label: 'Saint Olaf' },
      { title: 'Harald Hardrada', type: 'person', slug: 'harald-hardrada' },
      { title: 'Håkon IV Håkonsson', type: 'person', slug: 'haakon-iv-haakonsson', label: 'The great age\'s king' },
      { title: 'Margaret I', type: 'person', slug: 'margaret-i', label: 'The union-maker' }
    ],
    locations: [
      { title: 'Kingdom of Denmark', type: 'location', slug: 'kingdom-of-denmark', label: 'Overlord, rival, union-partner' },
      { title: 'Kingdom of Sweden', type: 'location', slug: 'kingdom-of-sweden' },
      { title: 'Kalmar Union', type: 'location', slug: 'kalmar-union', label: 'The 1397 absorption' }
    ],
    events: [
      { title: 'Battle of Stiklestad', type: 'event', slug: 'battle-of-stiklestad', label: 'The martyr-king\'s field, 1030' },
      { title: 'Battle of Svolder', type: 'event', slug: 'battle-of-svolder', label: '1000' },
      { title: 'Battle of Stamford Bridge', type: 'event', slug: 'battle-of-stamford-bridge', label: '1066' }
    ]
  },
  sources: [
    { title: 'Kingdom of Norway (872–1397) — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Kingdom_of_Norway_(872%E2%80%931397)' },
    { title: 'Snorri Sturluson, Heimskringla', author: 'Snorri Sturluson', type: 'primary source' },
    { title: 'Norway in the Middle Ages (standard national-history surveys)', author: 'Norwegian academic tradition', type: 'book' }
  ]
})

// ── KINGDOM OF DENMARK ──────────────────────────────────────────────────────
patch('kingdom-of-denmark', {
  overview: [
    'Denmark was Scandinavia\'s precocious power: organised early around the Jelling dynasty — Gorm the Old and Harald Bluetooth, whose rune-stone (c. 965) names both "Denmark" and its conversion — and briefly master of a North Sea empire under Sweyn Forkbeard and Cnut the Great that yoked England to the Danish crown.',
    'Its medieval centuries swing between expansion and collapse: the Valdemarian golden age (1157–1241) conquering the Baltic\'s Wendish coast and Estonia under the Dannebrog legend; the fourteenth-century mortgage-state that ceased to exist under Holstein counts; Valdemar IV\'s ruthless reconstruction; and Margaret I\'s Kalmar Union (1397) making Copenhagen the north\'s capital.'
  ],
  contentSections: [
    { title: 'Overview', paragraphs: [
      'Denmark was Scandinavia\'s precocious power: organised early around the Jelling dynasty — Gorm the Old and Harald Bluetooth, whose great rune-stone (c. 965) names both "Denmark" and its conversion — and briefly master of a North Sea empire under Sweyn Forkbeard and Cnut the Great that yoked England to the Danish crown.',
      'Its medieval centuries swing between expansion and collapse: the Valdemarian golden age (1157–1241) conquering the Baltic\'s Wendish coast and Estonia under the Dannebrog legend; the fourteenth-century mortgage-state that ceased to exist under Holstein counts; Valdemar IV Atterdag\'s ruthless reconstruction; and Margaret I\'s Kalmar Union (1397) making the Danish court the north\'s capital.'
    ]},
    { title: 'Background and origins', paragraphs: [
      'Denmark\'s deep organisation predates its records: the Danevirke earthworks walling the Jutland neck (phases from the eighth century), the Kanhave canal, and the emporium of Hedeby announce coordinated power facing the Frankish world — the kings Godfred and Hemming treating with Charlemagne\'s empire on the Eider as equals by 810.',
      'The documented dynasty begins at Jelling: Gorm the Old and Harald Bluetooth, whose stone proclaims he "won all Denmark and Norway and made the Danes Christian" — conversion as royal programme, ring-fortresses (Trelleborg, Fyrkat, Aggersborg) as its muscle. His son Sweyn Forkbeard turned the machine outward, conquering England in 1013; grandson Cnut the Great ruled the North Sea empire (England, Denmark, Norway) that made a Danish king the West\'s equal — an empire of personal union that died with Harthacnut in 1042.'
    ]},
    { title: 'High Middle Ages: the Valdemarian age', paragraphs: [
      'After civil war among three kings ended at Grathe Heath (1157), Valdemar I the Great and his fosterbrother-bishop Absalon — warrior-archbishop, Copenhagen\'s founder — rebuilt the realm as a crusading Baltic power: Rügen\'s Wendish temple-state taken (1168), the Danevirke bricked, the church-crown partnership canonising the dynasty\'s father (Cnut Lavard) and crowning its future (Cnut VI anointed co-king).',
      'Valdemar II "the Victorious" pushed the arc to its height — northern Estonia conquered in the 1219 crusade where legend drops the Dannebrog from heaven at Lyndanisse (Tallinn: "Danes\' town") — then to its check: kidnapped with his son by a vassal count (1223), ransomed at ruinous price, and beaten at Bornhöved (1227), losing the north-German conquests. His consolation was internal: the Code of Jutland (1241), prefaced "with law shall the land be built", closing the golden age as lawgiver.'
    ]},
    { title: 'Collapse, Atterdag, and the union', paragraphs: [
      'The succeeding century broke the crown: partitioned appanages for royal sons, the murdered kings Eric IV (1250) and Eric V Klipping — stabbed at Finderup (1286), his alleged killers outlawed into Norwegian-backed piracy — the constitutional charter forced on Eric V in 1282 binding kings to annual parliament (the Danehof), and Eric VI Menved\'s glittering, borrowed Baltic ambitions pawning the realm piecemeal. Under Christopher II the pawns were called: from 1332 to 1340 Denmark had no king at all, its provinces held by Holstein counts and the Scanian lands sold to Sweden.',
      'Valdemar IV Atterdag ("Day-again", 1340–1375) redeemed the state — province by mortgage-province, Zealand to Scania (retaken 1360) to Gotland, whose Visby he stormed in 1361 — and provoked the Hanseatic League into war: defeated by the towns\' second coalition, the crown signed the Treaty of Stralsund (1370), conceding the League Scanian castles and veto-weight in royal elections — the price of survival. His daughter Margaret I converted survival into supremacy: regent of Denmark and Norway for her son Olaf IV, victor over Albert of Mecklenburg for Sweden (Åsle, 1389), and architect of the Kalmar Union (1397) crowning Eric of Pomerania over all three realms — the Danish-led north that, through Eric\'s Sound Toll (1429) and Christian I\'s acquisition of Schleswig-Holstein (1460), carried into early modern Europe.'
    ]},
    { title: 'Political structure and rule', paragraphs: [
      'Danish kingship was elective within the royal kin — acclaimed at the provincial things of Viborg, Ringsted, and Lund — a fact the magnates weaponised: the 1282 charter (håndfæstning) made election conditional on sworn capitulations, annual Danehof, and law-bound rule, a constitutionalism kings evaded but never escaped; from 1320 every accession bought itself with a new charter. The Council of the Realm (Rigsråd) of bishops and magnates carried government through minorities, interregnum, and union absenteeism.',
      'Its instruments were advanced for the region: provincial law-books (Scanian, Zealand, Jutland codes) written by the 1240s; a church of wealthy bishoprics — Lund the archsee of all Scandinavia from 1103/04 — supplying chancellors and warriors (Absalon\'s sword as ready as his crozier); royal castles and len (fiefs-in-pledge) structuring finance; and the herremænd, service-nobility exempt from tax for cavalry duty, whose bargain with the crown defined Danish politics for centuries.'
    ]},
    { title: 'Major rulers', paragraphs: [
      'Gorm the Old, d. c. 958 — the Jelling dynasty\'s founder-figure.',
      'Harald Bluetooth, c. 958–986 — converted the Danes, built the ring-fortresses, named the realm on stone.',
      'Sweyn Forkbeard, 986–1014 — conqueror of England (1013).',
      'Cnut the Great, 1018–1035 (in Denmark) — the North Sea empire\'s emperor.',
      'Valdemar I the Great, 1157–1182 — Grathe Heath\'s survivor; with Absalon, the restoration\'s architect.',
      'Valdemar II the Victorious, 1202–1241 — Estonia\'s crusader-conqueror; the Code of Jutland\'s lawgiver.',
      'Eric V Klipping, 1259–1286 — the charter of 1282; murdered at Finderup.',
      'Valdemar IV Atterdag, 1340–1375 — the mortgage-realm redeemed; Visby stormed; Stralsund conceded.',
      'Margaret I, 1387–1412 — regent-queen of the three crowns; Kalmar\'s architect.',
      'Eric of Pomerania, 1397–1439 — union king; the Sound Toll\'s inventor; deposed by all three realms.'
    ]},
    { title: 'Wars, battles, and expansion', paragraphs: [
      'The Viking-age wars made kings of sea-lords: Sweyn\'s English campaigns culminating at London and Gainsborough (1013), Cnut\'s conquest sealed at Assandun (1016), the Norwegian wars from Svolder (1000) — where Sweyn shared the victors\' spoils — to Cnut\'s hegemony. The Valdemarian crusades turned east: Rügen (1168), Estonia (Lyndanisse, 1219), the Baltic\'s brief Danish lake; Bornhöved (1227) called the limit.',
      'The late medieval wars were existential: the Holstein pawn-lords resisted Atterdag\'s redemption; the Hanseatic wars — Helsingborg (1362) a Danish victory, the League\'s 1368–69 revenge devastating the coasts — ended at Stralsund (1370); Margaret\'s war for Sweden broke Albert of Mecklenburg at Åsle (1389); and the union\'s Schleswig war against the Holsteiners and Eric\'s Hanseatic struggles filled the fifteenth century until Christian I bought the duchies whole in 1460 ("forever undivided") — a phrase with a long fuse.'
    ]},
    { title: 'Religion, culture, and society', paragraphs: [
      'The Danish church rose fast and rich: Ansgar\'s ninth-century missions seeding Hedeby and Ribe, English and German clergy shaping the conversion, Lund made metropolitan of all the North in 1103/04. Its monuments matched ambition — Lund\'s Romanesque cathedral, Roskilde\'s brick Gothic housing the royal tombs, hundreds of village churches whose frescoes preached in pictures — and its chronicler crowned the age: Saxo Grammaticus\'s Gesta Danorum (c. 1200), written in Absalon\'s circle, gave Denmark a classical-Latin national epic (and Shakespeare, eventually, his Amleth).',
      'Society ran from the herremænd\'s manors through Europe\'s densest herring-economy — the Scanian fairs at Skanør-Falsterbo, where autumn shoals drew merchants from every Baltic port under royal peace and toll — to a peasantry drifting from Viking-age freedom toward the vornedskab bondage of the islands\' late Middle Ages. Towns stayed small but strategic: Ribe, Roskilde, Copenhagen — Absalon\'s castle-market of 1167 — growing by the Sound\'s geography into the union\'s natural capital.'
    ]},
    { title: 'Legacy', paragraphs: [
      'Medieval Denmark\'s legacy is the Baltic order it built and priced: the Sound Toll (1429–1857) making the kingdom Europe\'s gatekeeper; the union structure that held Norway to 1814 and fought Sweden for centuries; Schleswig-Holstein\'s "forever undivided" pledge shaping (and detonating) modern borders; and the herring-and-castle economy that seeded Copenhagen\'s rise.',
      'Its cultural bequests are equally durable: the Jelling stone as the nation\'s "baptismal certificate", the Dannebrog legend of 1219 in the world\'s oldest state flag, Saxo\'s history feeding national imagination, and the law-built-land preamble of 1241 still quoted as Danish government\'s founding maxim.'
    ]}
  ],
  knownFor: [
    'The Jelling dynasty and Harald Bluetooth\'s conversion-stone',
    'The North Sea empire of Sweyn Forkbeard and Cnut the Great',
    'The Valdemarian golden age and the Dannebrog crusade to Estonia (1219)',
    'The 1282 charter, the mortgage-collapse, and Atterdag\'s redemption',
    'The Kalmar Union (1397) and the Sound Toll'
  ],
  timeline: [
    { date: 'c. 810', title: 'Godfred faces Charlemagne', description: 'The Danevirke kings treat with the Frankish empire on the Eider.' },
    { date: 'c. 965', title: 'The Jelling stone', description: 'Harald Bluetooth proclaims Denmark named, unified, and Christian.' },
    { date: '1013–1016', title: 'England conquered', description: 'Sweyn Forkbeard and Cnut the Great take the English crown; the North Sea empire forms.' },
    { date: '1103/04', title: 'Lund archbishopric', description: 'Scandinavia\'s first metropolitan see makes Denmark the northern church\'s head.' },
    { date: '1157', title: 'Grathe Heath', description: 'Valdemar I ends the three-kings\' civil war; the Valdemarian age begins.' },
    { date: '15 June 1219', title: 'Lyndanisse', description: 'The Estonian crusade\'s victory — and the Dannebrog\'s legendary descent.' },
    { date: '1241', title: 'Code of Jutland', description: '"With law shall the land be built": Valdemar II\'s legislative testament.' },
    { date: '1282', title: 'The first charter', description: 'Eric V accepts annual parliament and law-bound kingship.' },
    { date: '1332–1340', title: 'The kingless years', description: 'The pawned realm is ruled by Holstein counts until Atterdag\'s restoration.' },
    { date: '1361/1370', title: 'Visby and Stralsund', description: 'Atterdag storms Gotland; the Hanseatic League\'s victory prices the crown\'s Baltic power.' },
    { date: '1397', title: 'Kalmar Union', description: 'Margaret I crowns Eric of Pomerania over Denmark, Norway, and Sweden.' },
    { date: '1429', title: 'The Sound Toll', description: 'Eric of Pomerania begins charging the strait — Denmark\'s four-century golden lever.' }
  ],
  relatedEntries: {
    people: [
      { title: 'Harald Bluetooth', type: 'person', slug: 'harald-bluetooth' },
      { title: 'Cnut the Great', type: 'person', slug: 'cnut-the-great' },
      { title: 'Valdemar IV Atterdag', type: 'person', slug: 'valdemar-iv-atterdag', label: 'The redeemer of the pawned realm' },
      { title: 'Margaret I', type: 'person', slug: 'margaret-i', label: 'Kalmar\'s architect' }
    ],
    locations: [
      { title: 'Kingdom of Norway', type: 'location', slug: 'kingdom-of-norway' },
      { title: 'Kingdom of Sweden', type: 'location', slug: 'kingdom-of-sweden' },
      { title: 'Kalmar Union', type: 'location', slug: 'kalmar-union' },
      { title: 'North Sea Empire', type: 'location', slug: 'north-sea-empire', label: 'Cnut\'s conglomerate' }
    ],
    events: [ { title: 'Battle of Svolder', type: 'event', slug: 'battle-of-svolder', label: 'The coalition\'s victory, 1000' } ]
  },
  sources: [
    { title: 'Denmark in the Middle Ages — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Denmark_in_the_Middle_Ages' },
    { title: 'Saxo Grammaticus, Gesta Danorum', author: 'Saxo Grammaticus', type: 'primary source' },
    { title: 'Danmarks historie (Gyldendal survey volumes)', author: 'Danish academic tradition', type: 'book' }
  ]
})

// ── KINGDOM OF SWEDEN ───────────────────────────────────────────────────────
patch('kingdom-of-sweden', {
  overview: [
    'Medieval Sweden unified late and argued long: a realm of provinces (Svealand around Uppsala\'s pagan cult-centre, Götaland\'s plains) whose kings — from Olof Skötkonung\'s baptism (c. 1000) through the alternating Sverker and Erik dynasties\' century of feud — were elected at the Stones of Mora and bound by provincial laws older than the crown.',
    'Its medieval achievements came in bursts: Birger Jarl\'s state-building and Stockholm\'s founding (1250s); the Folkung kings\' law-codes and eastern crusades planting Sweden in Finland; Magnus Eriksson\'s realm-wide code (c. 1350) — before plague, aristocratic constitutionalism, and Margaret I\'s victory at Åsle (1389) pulled the kingdom into Kalmar, against which the fifteenth century\'s risings (Engelbrekt, the Stures) rehearsed the independence to come.'
  ],
  contentSections: [
    { title: 'Overview', paragraphs: [
      'Medieval Sweden unified late and argued long: a realm of provinces (Svealand around Uppsala\'s pagan cult-centre, Götaland\'s plains) whose kings — from Olof Skötkonung\'s baptism (c. 1000) through the alternating Sverker and Erik dynasties\' century of feud — were elected at the Stones of Mora and bound by provincial laws older than the crown.',
      'Its medieval achievements came in bursts: Birger Jarl\'s state-building and Stockholm\'s founding (1250s); the Folkung kings\' law-codes and eastern crusades planting Sweden in Finland; Magnus Eriksson\'s realm-wide code (c. 1350) — before plague, aristocratic constitutionalism, and Margaret I\'s victory at Åsle (1389) pulled the kingdom into Kalmar, against which the fifteenth century\'s risings (Engelbrekt, the Stures) rehearsed the independence to come.'
    ]},
    { title: 'Background and origins', paragraphs: [
      'The Svear of the Mälaren basin — Uppsala\'s kings, Birka\'s traders — and the Götar to their south entered history through others\' eyes: Tacitus\'s Suiones, Ansgar\'s ninth-century mission to Birka, and the runestones (Sweden holds thousands) whose Viking-age voyages ran east — the Rus\' routes to Byzantium and the caliphate that made "Swedes" of the Volkhov and Dnieper.',
      'Kingship over both peoples crystallised around 1000 with Olof Skötkonung — baptised, coin-striking at Sigtuna, and a partner in the Svolder coalition (1000) — but the realm stayed a federation of law-provinces electing kings who then rode the Eriksgata to be acclaimed province by province. The old cult-centre at Uppsala (its temple described, luridly, by Adam of Bremen c. 1070) yielded slowly: Sweden was the last Scandinavian kingdom fully Christianised, its archbishopric coming only in 1164.'
    ]},
    { title: 'High Middle Ages: dynastic feud to Folkung state', paragraphs: [
      'The twelfth century alternated two royal houses in blood — Sverker I of Sweden murdered (1156); Eric IX "the Saint" (Sweden\'s patron, of the legendary Finnish crusade) cut down at Uppsala (1160); Knut Eriksson, Sverker II of Sweden, and Erik Knutsson trading the crown through the battles of Lena (1208) and Gestilren (1210) — a feud papal diplomacy refereed and never resolved.',
      'The jarls ended it: Birger Jarl, king-maker of the Bjälbo house, crushed the last risings (Herrevadsbro, 1251), founded Stockholm (c. 1252), legislated the peace-laws (home, church, thing, and women\'s peace), and set his sons on the throne. The Folkung century built the state: Magnus III Ladulås ("Barn-lock") chartering the frälse service-nobility at Alsnö (1280); the eastern crusades and Viborg castle (1293) fixing Sweden in Finland against Novgorod (peace of Nöteborg, 1323); Torgils Knutsson\'s regency and the fratricidal drama of Birger Magnusson — the Nyköping Banquet (1317), starving his brothers in the dungeon — ending the line and electing the child Magnus Eriksson to a realm reaching, briefly, across three crowns\' worth of the north.'
    ]},
    { title: 'Late Middle Ages: code, plague, and Kalmar', paragraphs: [
      'Magnus Eriksson\'s long reign (1319–1364) gave Sweden its constitutional spine — the national Landslag (c. 1350) with its king\'s section binding rule to law and counsel, and the freeing of thralls (Skara statute, 1335) — and its miseries: the Black Death from 1349–50, the ruinous purchase and loss of Scania, Saint Bridget\'s thunderous prophecies against him, and the magnates\' revolts that hired Albert of Mecklenburg (1364), whose German-staffed rule they then broke by inviting Margaret I: Albert fell captive at Åsle (1389), and Kalmar (1397) folded Sweden into the union.',
      'Union Sweden was chronic revolt punctuated by regency: Eric of Pomerania\'s bailiffs and Sound-politics strangled the iron trade until the Engelbrekt rising (1434–36) — miners and peasants of Bergslagen under Engelbrekt Engelbrektsson, whose assemblies at Arboga seeded the four-estate Riksdag and whose murder made him a martyr; Charles VIII of Sweden thrice crowned and thrice ejected; and the Sture regencies ruling in the union\'s name against its kings — Sten Sture\'s peasant-levies smashing Christian I\'s knights at Brunkeberg (1471) before Stockholm\'s gates, the medieval kingdom ending as it began: elective, legalist, and armed.'
    ]},
    { title: 'Political structure and rule', paragraphs: [
      'Sweden\'s constitution was its law-provinces: each land with its own written code (Västgötalagen the oldest, c. 1220s) and lagman (law-speaker), electing kings at Mora and confirming them on the Eriksgata circuit; the Landslag of c. 1350 federated but did not flatten them. The council (riksråd) of magnates and bishops, chartered rights (Alsnö\'s tax-free frälse for cavalry service), and accession charters made the realm Europe\'s most explicitly elective large monarchy.',
      'Its social peculiarity endured: no serfdom — a free, armed, taxed peasantry seated in things and, from the Engelbrekt era, in national assemblies beside burghers, clergy, and nobles; mining communities (Falun\'s copper, Bergslagen\'s iron) with their own law; and Finland as integral eastern land, its castle-fiefs (Åbo, Viborg) the realm\'s Baltic hinge.'
    ]},
    { title: 'Major rulers', paragraphs: [
      'Olof Skötkonung, c. 995–1022 — first baptised king of Svear and Götar; Sigtuna\'s coiner.',
      'Eric IX the Saint, c. 1156–1160 — the patron-king of legend, law, and the Finnish mission.',
      'Birger Jarl, regent 1248–1266 — Stockholm\'s founder, the peace-laws\' legislator, the dynasty\'s maker.',
      'Magnus III Ladulås, 1275–1290 — Alsnö\'s charter: the nobility founded, the peasants "barn-locked" against lordly exaction.',
      'Birger Magnusson, 1290–1318 — the Nyköping Banquet\'s host; the old line\'s catastrophic end.',
      'Magnus Eriksson, 1319–1364 — the Landslag, thralldom\'s abolition, and the realm at its widest.',
      'Albert of Mecklenburg, 1364–1389 — the hired king broken at Åsle.',
      'Engelbrekt Engelbrektsson, rebel-captain 1434–1436 — the rising that seeded the Riksdag.',
      'Charles VIII of Sweden, thrice king 1448–1470 — the union\'s Swedish counter-king.',
      'Sten Sture the Elder, regent 1470–1497/1501–03 — Brunkeberg\'s victor; the proto-national regency.'
    ]},
    { title: 'Religion, culture, and society', paragraphs: [
      'The church came late and built deep: Uppsala\'s pagan hof yielding to the archbishopric (1164) planted beside the old mounds; Cistercians at Alvastra and Varnhem farming the conversion; Finland\'s mission-dioceses; and in the fourteenth century Europe\'s most formidable holy woman — Saint Bridget (Birgitta), whose Revelations scolded kings and popes and whose Vadstena abbey (founded 1346, motherhouse of a continental order) made little Sweden a voice at Avignon and Rome.',
      'Culture wrote itself in law and rock: the provincial codes\' oral-formulaic prose, the Erikskrönikan rhymed chronicle (c. 1330) singing the Folkung age, thousands of runestones shading into churchyard Latin. The economy ran on iron and copper — osmund iron the export staple, German merchants so thick in Stockholm that its council was half-German by statute — Hanseatic partnership and friction defining town life, while the free countryside\'s things, tithes, and levies kept politics participatory to a degree the union\'s kings never mastered.'
    ]},
    { title: 'Legacy', paragraphs: [
      'Medieval Sweden\'s legacy is constitutional: the elective, law-bound, estate-based politics — Mora\'s stones to Arboga\'s assemblies to the Riksdag — that survived Kalmar and armed the Vasa secession (1523) just past the period\'s edge; the Landslag governing into the seventeenth century; the free peasantry as Europe\'s exception and Sweden\'s self-image.',
      'It also fixed the realm\'s eastern axis: Finland\'s six-century Swedish era began with the medieval crusades and castles, Nöteborg\'s 1323 line the first eastern border — the Baltic vocation that the early modern empire would spend, and the union-scarred wariness of Denmark that would define it.'
    ]}
  ],
  knownFor: [
    'Late unification of Svear and Götar; elective kingship at Mora',
    'The Sverker–Erik century of feud, ended by Birger Jarl',
    'Stockholm founded (c. 1252); Alsnö charter (1280); Landslag (c. 1350)',
    'Saint Bridget and Vadstena',
    'Kalmar Union resistance: Engelbrekt, the Stures, Brunkeberg (1471)'
  ],
  timeline: [
    { date: 'c. 829', title: 'Ansgar at Birka', description: 'The first recorded mission touches the Mälaren trade-town.' },
    { date: 'c. 1000', title: 'Olof Skötkonung baptised', description: 'The first king of both Svear and Götar strikes coins at Sigtuna and shares Svolder\'s coalition.' },
    { date: '1160', title: 'Eric the Saint slain', description: 'The martyr-king of Uppsala becomes Sweden\'s patron and his line\'s banner.' },
    { date: '1210', title: 'Gestilren', description: 'The Sverker–Erik feud\'s last great battle; Erik Knutsson holds the crown.' },
    { date: 'c. 1252', title: 'Stockholm founded', description: 'Birger Jarl locks the Mälaren with the new town and legislates the peace-laws.' },
    { date: '1280', title: 'Alsnö charter', description: 'Magnus Ladulås charters the frälse nobility for cavalry service.' },
    { date: '1317', title: 'The Nyköping Banquet', description: 'Birger Magnusson starves his brothers; the dynasty destroys itself.' },
    { date: '1323', title: 'Peace of Nöteborg', description: 'The first Swedish–Novgorodian border divides Karelia; Finland\'s Swedish era is framed.' },
    { date: 'c. 1350', title: 'The Landslag', description: 'Magnus Eriksson\'s national code binds king to law and counsel.' },
    { date: '1389/1397', title: 'Åsle and Kalmar', description: 'Margaret I captures Albert of Mecklenburg and folds Sweden into the union.' },
    { date: '1434–1436', title: 'The Engelbrekt rising', description: 'Bergslagen\'s revolt seeds the four-estate Riksdag and Swedish separatism.' },
    { date: '10 October 1471', title: 'Brunkeberg', description: 'Sten Sture defeats Christian I before Stockholm; the Sture era defies the union.' }
  ],
  relatedEntries: {
    people: [
      { title: 'Birger Jarl', type: 'person', slug: 'birger-jarl', label: 'Stockholm\'s founder' },
      { title: 'Magnus Eriksson', type: 'person', slug: 'magnus-eriksson', label: 'The Landslag\'s king' },
      { title: 'Albert of Mecklenburg', type: 'person', slug: 'albert-of-mecklenburg' },
      { title: 'Charles VIII of Sweden', type: 'person', slug: 'charles-viii-of-sweden' }
    ],
    locations: [
      { title: 'Kalmar Union', type: 'location', slug: 'kalmar-union' },
      { title: 'Kingdom of Denmark', type: 'location', slug: 'kingdom-of-denmark' },
      { title: 'Kingdom of Norway', type: 'location', slug: 'kingdom-of-norway' }
    ],
    events: [ { title: 'Battle of Gestilren', type: 'event', slug: 'battle-of-gestilren', label: 'The dynastic feud\'s field, 1210' } ]
  },
  sources: [
    { title: 'Sweden in the Middle Ages — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/History_of_Sweden_(800%E2%80%931521)' },
    { title: 'Erikskrönikan (The Chronicle of Duke Erik)', author: 'Anonymous, c. 1330', type: 'primary source' },
    { title: 'Sveriges historia (Norstedts survey volumes)', author: 'Swedish academic tradition', type: 'book' }
  ]
})

// ── KALMAR UNION ────────────────────────────────────────────────────────────
patch('kalmar-union', {
  overview: [
    'The Kalmar Union (1397–1523) joined Denmark, Norway, and Sweden — with Finland, Iceland, and the Atlantic isles — under one crown: Margaret I\'s masterwork, sealed at Kalmar castle with the coronation of her great-nephew Eric of Pomerania, creating Europe\'s largest realm by territory.',
    'Built to end Mecklenburg-German penetration of the north and balance the Hanseatic League, it worked as personal union and failed as constitution: Danish-run castles and taxes against Swedish council-constitutionalism produced a century of depositions and risings — Engelbrekt\'s (1434), the Stures\' — until the Stockholm Bloodbath (1520) triggered the Swedish secession that ended it.'
  ],
  contentSections: [
    { title: 'Overview', paragraphs: [
      'The Kalmar Union (1397–1523) joined Denmark, Norway, and Sweden — with Finland, Iceland, and the Atlantic isles — under one crown: Margaret I\'s masterwork, sealed at Kalmar castle with the coronation of her great-nephew Eric of Pomerania, creating Europe\'s largest realm by territory.',
      'Built to end Mecklenburg-German penetration of the north and balance the Hanseatic League, it worked as personal union and failed as constitution: Danish-run castles and taxes against Swedish council-constitutionalism produced a century of depositions and risings — Engelbrekt\'s (1434), the Stures\' — until the Stockholm Bloodbath (1520) triggered the Swedish secession that ended it.'
    ]},
    { title: 'Origins', paragraphs: [
      'Dynastic accident and German pressure made the union thinkable: Valdemar IV Atterdag\'s daughter Margaret, married to Haakon VI of Norway, mothered Olaf IV — king of Denmark (1376) and Norway (1380) — and when the boy died in 1387 the councils of both realms acclaimed the mother herself as "sovereign lady and rightful ruler". Sweden\'s magnates, choking on Albert of Mecklenburg\'s German bailiffs, offered her the third crown; her army took Albert captive at Åsle (1389).',
      'At Kalmar in June–July 1397 the three realms crowned Eric of Pomerania in a single ceremony. Two documents survive from the meeting and define its ambiguity: the Coronation Letter proclaiming unitary royal power, and the Union Letter — sealed but arguably never ratified — promising each realm its own laws, councils, and native officers: hereditary-royalist versus federal-conciliar readings of the same event, the union\'s whole future argument in parchment.'
    ]},
    { title: 'The union at work', paragraphs: [
      'Margaret ruled it masterfully until her death (1412): castles in trusted hands, crown lands recovered, bishops packed, the three councils managed separately — union as her household government. Eric of Pomerania inherited the structure without the touch: his Sound Toll (1429) enriched Denmark and enraged the trading world; his long Schleswig war taxed Sweden for Danish ends; his bailiffs\' exactions in the Bergslagen mining districts lit the Engelbrekt rising (1434–36), which allied miners, peasants, and finally magnates, seeded Sweden\'s estates-assemblies, and broke his rule — all three councils deposed him by 1439–1442.',
      'Thereafter the union was a contested framework rather than a state: Christopher of Bavaria\'s brief pan-Scandinavian reign (1440–1448); then Denmark\'s Christian I against Sweden\'s Charles VIII — crowned and expelled three times — and the Sture regencies governing Sweden "within the union" while refusing its king: Brunkeberg (1471) making the arrangement military fact. Norway, plague-weakened, slid into Danish administration — its council marginalised, Orkney and Shetland pawned to Scotland (1468–72) for a dowry never paid.'
    ]},
    { title: 'Political structure', paragraphs: [
      'Constitutionally the union was three elective crowns sharing one elected head: each realm\'s riksråd (council) guarding its law and castles, accession charters (håndfæstninger) binding each king realm by realm, and no common institutions at all beyond the ruler — no union council, treasury, or law. The design flaw was structural: the king lived in Denmark, so Denmark\'s council captured the crown while Sweden\'s learned to govern without it.',
      'The recurring quarrels were therefore always the same: foreign (Danish or German) bailiffs in Swedish castles against the Union Letter\'s native-officers clause; union taxation for Danish wars; and the king\'s hereditary ambitions against the councils\' electoral rights — a constitutional argument conducted through depositions, regencies, and battles for a century and a quarter.'
    ]},
    { title: 'Major rulers', paragraphs: [
      'Margaret I, architect-regent 1387/1397–1412 — the union personified: three councils, one will.',
      'Eric of Pomerania, 1397–1439/42 — the Sound Toll\'s inventor, the union\'s first casualty; ended as Gotland\'s pirate-lord.',
      'Christopher of Bavaria, 1440–1448 — the last king crowned by all three realms in peace.',
      'Christian I, 1448/1450/1457 — Oldenburg founder holding Denmark and Norway, winning and losing Sweden; Brunkeberg\'s loser.',
      'Charles VIII of Sweden, 1448–1470 (thrice) — the counter-king of Swedish separatism.',
      'Sten Sture the Elder, regent 1470–1503 — union-in-name, independence-in-practice.'
    ]},
    { title: 'Wars and crises', paragraphs: [
      'The union\'s wars were mostly its own: the Schleswig-Holstein struggle (1409–1435) that Eric waged and lost, conceding the duchies\' course; the Hanseatic conflicts entwined with every Sound and toll dispute; and the Swedish wars of secession-in-instalments — Engelbrekt\'s campaigns (1434–36), the Charles VIII–Christian I seesaw, Brunkeberg (1471), and the final act beyond the medieval frame: Christian II\'s reconquest, the Stockholm Bloodbath (November 1520) executing eighty-plus Sture partisans after an amnesty, and Gustav Vasa\'s rising ending the union in 1523.',
      'Its territorial ledger marks the age\'s shifts: Orkney and Shetland to Scotland (1468–72); Gotland fought over from Eric\'s Visby corsair years; Iceland and the Faroes riding Norway\'s crown into the Danish orbit — the Atlantic rim quietly changing sovereignty while the mainland argued.'
    ]},
    { title: 'Legacy', paragraphs: [
      'The union\'s failure organised Scandinavia\'s modern shape: Sweden-Finland exiting as a rival state system (the Vasa monarchy), Denmark-Norway continuing the union\'s rump until 1814, and the Sound Toll financing Copenhagen\'s primacy — three centuries of Dano-Swedish wars flowing from Kalmar\'s unresolved argument.',
      'It left a paradoxical memory: the ghost of northern unity invoked by every later "Scandinavianism", and the cautionary constitutional tale — personal union without common institutions — studied wherever composite monarchy is discussed. Margaret\'s achievement remains the benchmark: for one reign, the whole North answered to a single, formidable will.'
    ]}
  ],
  knownFor: [
    'Margaret I\'s three-crown union sealed at Kalmar, 1397',
    'Europe\'s largest realm: Scandinavia with Finland and the Atlantic isles',
    'The Coronation Letter vs Union Letter constitutional ambiguity',
    'Engelbrekt\'s rising and the Sture regencies',
    'Ended by the Stockholm Bloodbath and Vasa secession (1520–1523)'
  ],
  timeline: [
    { date: '1380', title: 'Denmark–Norway joined', description: 'Olaf IV\'s double crown under Margaret\'s regency links the first two realms.' },
    { date: '1389', title: 'Åsle', description: 'Margaret\'s forces capture Albert of Mecklenburg; Sweden joins her orbit.' },
    { date: 'June–July 1397', title: 'Kalmar coronation', description: 'Eric of Pomerania is crowned for all three realms; the two Letters state the union\'s rival readings.' },
    { date: '1429', title: 'The Sound Toll', description: 'Eric taxes the strait, funding the crown and antagonising the Hansa.' },
    { date: '1434–1436', title: 'Engelbrekt rising', description: 'Bergslagen revolts against union bailiffs; Swedish estates-politics is born.' },
    { date: '1439–1442', title: 'Eric deposed', description: 'All three councils abandon him; the ex-king turns corsair on Gotland.' },
    { date: '1468–1472', title: 'Orkney and Shetland pawned', description: 'Christian I\'s unpaid dowry passes the isles to Scotland.' },
    { date: '10 October 1471', title: 'Brunkeberg', description: 'Sten Sture defeats Christian I; Sweden is union in name only.' },
    { date: 'November 1520', title: 'Stockholm Bloodbath', description: 'Christian II\'s executions after amnesty ignite the final rising.' },
    { date: '1523', title: 'The union ends', description: 'Gustav Vasa\'s election closes Kalmar; Denmark–Norway continues alone.' }
  ],
  relatedEntries: {
    people: [
      { title: 'Margaret I', type: 'person', slug: 'margaret-i', label: 'Architect' },
      { title: 'Eric of Pomerania', type: 'person', slug: 'eric-of-pomerania' },
      { title: 'Christopher of Bavaria', type: 'person', slug: 'christopher-of-bavaria' },
      { title: 'Christian I', type: 'person', slug: 'christian-i-of-denmark' }
    ],
    locations: [
      { title: 'Kingdom of Denmark', type: 'location', slug: 'kingdom-of-denmark' },
      { title: 'Kingdom of Norway', type: 'location', slug: 'kingdom-of-norway' },
      { title: 'Kingdom of Sweden', type: 'location', slug: 'kingdom-of-sweden' }
    ],
    events: []
  },
  sources: [
    { title: 'Kalmar Union — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Kalmar_Union' },
    { title: 'Margrete I (biographical scholarship)', author: 'Scandinavian academic tradition', type: 'book' },
    { title: 'The Coronation and Union Letters of 1397', author: 'Kalmar meeting documents', type: 'primary source' }
  ]
})

// ── NORTH SEA EMPIRE ────────────────────────────────────────────────────────
patch('north-sea-empire', {
  overview: [
    'The North Sea Empire was Cnut the Great\'s personal conglomerate (1016/18–1035): England conquered at Assandun, Denmark inherited from his brother Harald II, Norway taken from Saint Olaf (1028), with Scottish kings submitting and the Irish Sea in its orbit — the closest thing to a united Viking world ever achieved.',
    'It was empire as seamanship and settlement: ruled through English institutions and Danish housecarls, projecting power by fleet, marriage (Emma of Normandy), and pilgrimage-diplomacy (Cnut at Conrad II\'s imperial coronation, 1027) — and it dissolved on contact with mortality, its parts resuming separate histories within seven years of Cnut\'s death.'
  ],
  contentSections: [
    { title: 'Overview', paragraphs: [
      'The North Sea Empire was Cnut the Great\'s personal conglomerate (1016/18–1035): England conquered at Assandun, Denmark inherited from his brother Harald II of Denmark, Norway taken from Saint Olaf (1028), with Scottish kings submitting and the Irish Sea in its orbit — the closest thing to a united Viking world ever achieved.',
      'It was empire as seamanship and statecraft: ruled through English institutions and Danish housecarls, projecting power by fleet, marriage (Emma of Normandy), and pilgrimage-diplomacy (Cnut at Conrad II\'s imperial coronation, 1027) — and it dissolved on contact with mortality, its parts resuming separate histories within seven years of Cnut\'s death.'
    ]},
    { title: 'Assembly', paragraphs: [
      'The empire assembled in a decade: Sweyn Forkbeard\'s conquest of England (1013) and sudden death; Cnut\'s return with the great fleet (1015), the year of battles against Edmund Ironside ending at Assandun and the Alney partition (1016), and sole rule from Edmund\'s death that November; Denmark on Harald II\'s death (1018/19); and Norway — softened by silver among Olaf II Haraldsson\'s magnates — submitting at the Ouse fleet\'s approach in 1028, with Stiklestad (1030) destroying the exiled king\'s return.',
      'Its glue was personal: Cnut king separately in each realm — English law confirmed at Oxford (1018), his letters of 1020 and 1027 addressed to "all the people of the English" in their own tongue; Denmark under his sister\'s line and son; Norway under the Lade jarls and then the disastrous regency of Ælfgifu and Sweyn, whose harsh laws lost what the fleet had won even before Cnut died.'
    ]},
    { title: 'Rule and reach', paragraphs: [
      'England paid for and anchored the empire: the vast geld of 1018 (82,500 pounds) paid off the invasion fleet, a standing bodyguard of housecarls and a small ship-army remained, and Cnut ruled through earls — Godwin of Wessex his greatest creation — English bishops, and Wessex law, marrying Æthelred the Unready\'s widow Emma of Normandy to fold the old dynasty\'s legitimacy (and Normandy\'s neutrality) into his own.',
      'Its high-water marks were demonstrative: the 1027 journey to Rome for Conrad II\'s coronation — a Viking conqueror processing among emperors, negotiating toll-relief for English pilgrims and the Schleswig march\'s return; tribute and submission from Scots kings (Malcolm II among them, by the sources\' report); and the North Sea run as a Danish lake, its trade from Dublin to the Baltic moving under one crown\'s peace.'
    ]},
    { title: 'Dissolution and legacy', paragraphs: [
      'The parts outlived the whole\'s logic: at Cnut\'s death (1035) Norway had already expelled the regency for Magnus the Good; England split between Harold Harefoot and the absent Harthacnut, whose reunion-reign (1040–42) died young; and with Edward the Confessor\'s accession (1042) and Magnus taking Denmark, the empire was memory — though its claims echoed for a generation, Harald Hardrada\'s 1066 invasion being its last will read aloud at Stamford Bridge.',
      'Its legacy ran through what it normalised: Anglo-Scandinavian ruling elites (the house of Godwin above all), Danish legal custom settled into English shires, the demonstration that England\'s wealth could fund northern empire — the lesson 1066\'s three-cornered contest was fought over — and the model, remembered in the north, of Scandinavian power organised around the English connection rather than against it.'
    ]}
  ],
  knownFor: [
    'Cnut the Great\'s three crowns: England, Denmark, Norway',
    'Assandun (1016) and the Alney partition',
    'Rule through English law, earls, and the Emma marriage',
    'The 1027 Rome journey among emperors',
    'Dissolution by 1042; its echo at Stamford Bridge (1066)'
  ],
  timeline: [
    { date: '1013', title: 'Sweyn\'s conquest', description: 'Sweyn Forkbeard takes England; his death in February 1014 scatters the first empire.' },
    { date: '18 October 1016', title: 'Assandun', description: 'Cnut defeats Edmund Ironside; partition, then sole rule by November.' },
    { date: '1018/19', title: 'Denmark inherited', description: 'Harald II\'s death joins the homeland to the English conquest.' },
    { date: '1027', title: 'Rome', description: 'Cnut attends Conrad II\'s imperial coronation and negotiates as a peer of emperors.' },
    { date: '1028–1030', title: 'Norway taken', description: 'The fleet and silver expel Olaf II; Stiklestad ends his return.' },
    { date: '12 November 1035', title: 'Cnut dies', description: 'The empire begins dissolving among sons and regents.' },
    { date: '1042', title: 'The end', description: 'Harthacnut\'s death restores the old lines: Edward in England, Magnus in Denmark-Norway.' }
  ],
  relatedEntries: {
    people: [
      { title: 'Cnut the Great', type: 'person', slug: 'cnut-the-great', label: 'The empire in one man' },
      { title: 'Sweyn Forkbeard', type: 'person', slug: 'sweyn-forkbeard', label: 'The prototype conqueror' },
      { title: 'Harthacnut', type: 'person', slug: 'harthacnut', label: 'The last emperor-heir' },
      { title: 'Edmund Ironside', type: 'person', slug: 'edmund-ironside', label: 'The English resistance' }
    ],
    locations: [
      { title: 'Kingdom of England', type: 'location', slug: 'kingdom-of-england', label: 'The empire\'s treasury' },
      { title: 'Kingdom of Denmark', type: 'location', slug: 'kingdom-of-denmark', label: 'The dynastic base' },
      { title: 'Kingdom of Norway', type: 'location', slug: 'kingdom-of-norway', label: 'The contested third crown' }
    ],
    events: [ { title: 'Battle of Stiklestad', type: 'event', slug: 'battle-of-stiklestad', label: 'Norway secured, sainthood created, 1030' }, { title: 'Battle of Stamford Bridge', type: 'event', slug: 'battle-of-stamford-bridge', label: 'The claim\'s last echo, 1066' } ]
  },
  sources: [
    { title: 'North Sea Empire — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/North_Sea_Empire' },
    { title: 'Cnut the Great (Timothy Bolton)', author: 'Timothy Bolton', type: 'book' },
    { title: 'The Anglo-Saxon Chronicle; Encomium Emmae Reginae', author: 'Contemporary sources', type: 'primary source' }
  ]
})

fs.writeFileSync(dataPath, JSON.stringify(data, null, 2) + '\n')
console.log('Batch 3 (British Isles + Scandinavia) complete.')
