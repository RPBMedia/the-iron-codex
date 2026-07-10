// Polity audit batch 4: the empires and the Lombard League.
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

// ── FRANKISH KINGDOM ────────────────────────────────────────────────────────
patch('frankish-kingdom', {
  overview: [
    'The Frankish Kingdom was post-Roman Europe\'s decisive polity: Clovis\'s Merovingian realm united Gaul under a Catholic (not Arian) dynasty from his baptism at Reims (c. 496–508), and its Carolingian successors — mayors become kings in 751 — built the platform on which Charlemagne\'s empire and, through partition, France and Germany all stand.',
    'Its medieval bequests are structural: the Franco-papal alliance sealed by Pepin the Short\'s Donation (756); Charles Martel\'s victory at Tours (732) fixing the Islamic frontier at the Pyrenees; and the Frankish fusion of Roman administration, Germanic kingship, and Latin Christianity that defined "Europe" as a civilisation.'
  ],
  contentSections: [
    { title: 'Overview', paragraphs: [
      'The Frankish Kingdom was post-Roman Europe\'s decisive polity: Clovis\'s Merovingian realm united Gaul under a Catholic (not Arian) dynasty from his baptism at Reims (c. 496–508), and its Carolingian successors — mayors become kings in 751 — built the platform on which Charlemagne\'s empire and, through partition, France and Germany all stand.',
      'Its medieval bequests are structural: the Franco-papal alliance sealed by Pepin the Short\'s Donation (756); Charles Martel\'s victory at the Battle of Tours (732) fixing the Islamic frontier at the Pyrenees; and the Frankish fusion of Roman administration, Germanic kingship, and Latin Christianity that defined "Europe" as a civilisation.'
    ]},
    { title: 'Merovingian origins', paragraphs: [
      'The Franks entered Gaul as Rome\'s federate soldiers and stayed as its heirs. Clovis (481–511) destroyed the last Roman commander at Soissons (486), the Alemanni, and the Visigoths at Vouillé (507) — and his baptism by Remigius at Reims, with three thousand warriors, married the conquest to Catholic Gaul\'s bishops and cities: the one barbarian kingdom aligned with its Roman population\'s faith.',
      'Merovingian custom divided the realm among royal sons — Neustria, Austrasia, Burgundy crystallising as sub-kingdoms — generating the feud-politics Gregory of Tours chronicled (Brunhild and Fredegund\'s forty-year vendetta the exemplar), while queens, bishops, and the great villa-economy governed between wars. From the mid-seventh century the kings faded to figureheads — the "do-nothing kings" of later propaganda — and the mayors of the palace, above all Austrasia\'s Arnulfing-Pippinid house, became the realm\'s real dynasty.'
    ]},
    { title: 'The Carolingian ascent', paragraphs: [
      'Charles Martel ruled Francia (718–741) without a crown: reunifying the kingdoms from Austrasia, breaking the Umayyad raiding-army between Tours and Poitiers (732), pushing missions (Boniface\'s) and cavalry-benefices together into the structures later called feudal. His sons finished the logic: Carloman retired to Monte Cassino; Pepin the Short asked Pope Zacharias whether the man with power or the man with title should be king, deposed Childeric III, and was anointed at Soissons (751) — kingship\'s legitimacy re-founded on the church\'s oil.',
      'The price and prize was Italy: Pepin crossed the Alps (754, 756) against the Lombards and donated the Exarchate to Saint Peter — the Papal States born as Frankish gift — and the alliance\'s trajectory ran straight to his son: Charlemagne\'s Lombard crown (774), Saxon wars, and the imperial coronation of 800 that turned the Frankish kingdom into the Carolingian Empire (treated in its own article).'
    ]},
    { title: 'Political structure and rule', paragraphs: [
      'Frankish government fused inheritances: counts (comites) in Roman civitates, dukes on the marches; the royal court (palatium) itinerating between villas; assemblies of the armed people (the Marchfield, later Mayfield) consenting to war and law; and written codes — Salic law for the Franks, with Roman law running for Romans — under a kingship both war-band lordship and, after 751, sacral office.',
      'Two instruments defined its reach: the church, whose bishops were royal partners, whose monasteries (Luxeuil\'s Columbanian wave, then Benedictine houses) colonised and archived, and whose synods legislated with the king; and the benefice-vassalage complex — land for mounted service — that Martel\'s wars accelerated and that would structure European lordship for half a millennium.'
    ]},
    { title: 'Major rulers', paragraphs: [
      'Clovis I, 481–511 — Soissons, Vouillé, and the Reims baptism: Gaul united under Catholic Frankish kingship.',
      'Dagobert I, 623–639 — the last commanding Merovingian; Saint-Denis\'s patron.',
      'Charles Martel, mayor 718–741 — Tours (732); the realm reunified from Austrasia.',
      'Pepin the Short, king 751–768 — the anointed usurper; the Donation of 756.',
      'Charlemagne, king from 768 — the kingdom\'s transformation into empire.'
    ]},
    { title: 'Wars and expansion', paragraphs: [
      'The conquest sequence built Francia: Soissons (486), Tolbiac against the Alemanni, Vouillé (507) driving the Visigoths to Spain, Burgundy absorbed (534), Provence gained — then centuries of eastern tribute-marches over Thuringians, Bavarians, and Saxons, and the endemic civil wars of the divided realm (Tertry, 687, making the Pippinids masters).',
      'The eighth century\'s wars were world-historical: Toulouse (721) and Tours (732) checking al-Andalus; Narbonne\'s recapture (759) expelling Islam from Gaul; the Lombard interventions (754–774); and Aquitaine\'s brutal pacification — the anvil on which Carolingian military kingship was hammered.'
    ]},
    { title: 'Religion, culture, and society', paragraphs: [
      'Frankish Christianity was royal religion: bishops from senatorial and then Frankish families ruling cities; saints\' cults (Martin of Tours the national protector, his cappa giving "chapel" its name) underwriting power; Irish and Anglo-Saxon monks — Columbanus, then Boniface, "apostle of the Germans", crowned by martyrdom at Dokkum (754) — reforming and expanding the church under mayoral patronage.',
      'Society ran from the great Gallo-Roman villa estates toward the manorial bipartite domain; Latin decayed toward Romance in the west while Frankish held the Rhineland — the future France-Germany line already linguistic; and the law-codes\' wergild tariffs mapped a world of honour-price and feud slowly bent toward royal and ecclesiastical peace.'
    ]},
    { title: 'Legacy', paragraphs: [
      'The Frankish kingdom is the hinge polity of European history: every later Western monarchy borrowed its anointing; the papacy\'s temporal power began as its gift; its partitions drew the Franco-German fault-line; and its name spread so far that "Frank" meant "Western European" from Byzantium to the Levant for a thousand years.',
      'Its deepest legacy is the synthesis itself — Roman city and law, Germanic kingship and settlement, Catholic faith and letters — which is why historians reach for one phrase to describe what emerged from it: the making of Europe.'
    ]}
  ],
  knownFor: [
    'Clovis\'s baptism: Catholic kingship over united Gaul',
    'Charles Martel and the Battle of Tours (732)',
    'The anointing of 751 and the Franco-papal alliance',
    'The Donation of Pepin and the Papal States\' origin',
    'Foundation-polity of both France and Germany'
  ],
  timeline: [
    { date: '486', title: 'Soissons', description: 'Clovis destroys Syagrius\'s Roman enclave; Frankish Gaul begins.' },
    { date: 'c. 496–508', title: 'The Reims baptism', description: 'Clovis and his warriors enter Catholic Christianity — the alliance with Gaul\'s bishops.' },
    { date: '507', title: 'Vouillé', description: 'The Visigoths are driven to Spain; Aquitaine becomes Frankish.' },
    { date: '561–613', title: 'The queens\' wars', description: 'Brunhild and Fredegund\'s feud tears Neustria and Austrasia; Gregory of Tours chronicles the age.' },
    { date: '687', title: 'Tertry', description: 'Pepin of Herstal\'s victory makes the Pippinid mayors Francia\'s real rulers.' },
    { date: '10 October 732', title: 'Tours', description: 'Charles Martel breaks the Umayyad army between Tours and Poitiers.' },
    { date: '751', title: 'Pepin anointed', description: 'The last Merovingian is tonsured; kingship is re-founded with papal sanction.' },
    { date: '756', title: 'Donation of Pepin', description: 'The conquered Exarchate is laid on Saint Peter\'s tomb — the Papal States begin.' },
    { date: '768', title: 'Charlemagne succeeds', description: 'The kingdom passes to the ruler who will make it an empire.' }
  ],
  relatedEntries: {
    people: [
      { title: 'Charles Martel', type: 'person', slug: 'charles-martel', label: 'Tours\' victor' },
      { title: 'Pepin the Short', type: 'person', slug: 'pepin-the-short', label: 'The anointed founder-king' },
      { title: 'Charlemagne', type: 'person', slug: 'charlemagne', label: 'The kingdom become empire' }
    ],
    locations: [
      { title: 'Carolingian Empire', type: 'location', slug: 'carolingian-empire', label: 'Its imperial successor' },
      { title: 'Kingdom of France', type: 'location', slug: 'kingdom-of-france', label: 'The western heir' },
      { title: 'Papacy', type: 'location', slug: 'papacy', label: 'The ally endowed at its expense' }
    ],
    events: [ { title: 'Battle of Tours', type: 'event', slug: 'battle-of-tours', label: '732' }, { title: 'Charlemagne Crowned Emperor', type: 'event', slug: 'charlemagne-crowned', label: 'The transformation of 800' } ]
  },
  sources: [
    { title: 'Francia — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Francia' },
    { title: 'Gregory of Tours, Histories', author: 'Gregory of Tours', type: 'primary source' },
    { title: 'The Merovingian Kingdoms 450–751', author: 'Ian Wood', type: 'book' }
  ]
})

// ── CAROLINGIAN EMPIRE ──────────────────────────────────────────────────────
patch('carolingian-empire', {
  overview: [
    'The Carolingian Empire was Latin Christendom\'s first reconstruction of Rome: Charlemagne\'s conquests — Lombard Italy (774), Saxony in thirty bitter years, the Avar ring\'s treasure, the Spanish March — crowned on Christmas Day 800 in Saint Peter\'s, when Leo III made the Frankish king "emperor governing the Roman Empire".',
    'It legislated a civilisation — capitularies and missi, corrected Bibles and Caroline minuscule, the palace school at Aachen — and then partitioned itself to death: Louis the Pious\'s sons at Verdun (843) split it into the ancestors of France, Germany, and the contested middle; by 888 the imperial unity was memory, bequeathed as an idea to Ottonian revival.'
  ],
  contentSections: [
    { title: 'Overview', paragraphs: [
      'The Carolingian Empire was Latin Christendom\'s first reconstruction of Rome: Charlemagne\'s conquests — Lombard Italy (774), Saxony in thirty bitter years, the Avar ring\'s treasure, the Spanish March — crowned on Christmas Day 800 in Saint Peter\'s, when Leo III made the Frankish king "emperor governing the Roman Empire".',
      'It legislated a civilisation — capitularies and missi, corrected Bibles and Caroline minuscule, the palace school at Aachen — and then partitioned itself to death: Louis the Pious\'s sons at the Treaty of Verdun (843) split it into the ancestors of France, Germany, and the contested middle; by 888 the imperial unity was memory, bequeathed as an idea to Ottonian revival.'
    ]},
    { title: 'Conquest and coronation', paragraphs: [
      'Charlemagne\'s forty-six years of campaigns (768–814) roughly doubled Francia: the Lombard kingdom taken with its iron crown (774); Saxony conquered, converted, and repeatedly reconquered (772–804) — the Irminsul felled, the Verden executions (782) and forced baptisms marking the wars\' ferocity; Bavaria absorbed (788); the Avar khaganate\'s ring-fortress plundered into legend (795–796); and the Spanish March carved beyond the Pyrenees after Roncesvalles\' famous rearguard disaster (778).',
      'The coronation of 800 crystallised the result: summoned to judge Pope Leo III\'s cause, Charlemagne left Saint Peter\'s as emperor — a title Byzantium eventually, grudgingly recognised (812) as "emperor of the Franks". Whether surprise or script, it wedded Frankish power to Roman-Christian universalism: the political theology of medieval Europe in one ceremony.'
    ]},
    { title: 'Government and renaissance', paragraphs: [
      'The empire governed by writing and oath: capitularies (the Admonitio Generalis of 789 a programme for a Christian society), missi dominici — paired count-and-bishop inspectors riding circuit — general oaths of fidelity, reformed silver coinage (the denier standard for centuries), and counts, margraves, and royal vassals knitting three hundred counties to Aachen\'s palace.',
      'The "Carolingian renaissance" was its soft power: Alcuin of York and an imported intelligentsia correcting texts, schooling clergy, and standardising script — Caroline minuscule, so legible the Renaissance mistook it for Rome\'s own; scriptoria multiplying the classics (most surviving Latin literature passed through Carolingian pens); Aachen\'s chapel quoting Ravenna; and the court\'s self-image — David\'s new Israel — set in verse and mosaic.'
    ]},
    { title: 'Partition and afterlife', paragraphs: [
      'Louis the Pious inherited an empire and an insoluble problem: one imperial title, several throne-worthy sons. The Ordinatio Imperii (817) subordinating brothers to emperor broke on remarriage and rebellion — the Field of Lies (833), penance, and restoration — and after his death the sons fought to the great oath-taking at Strasbourg (842, sworn bilingually in proto-French and proto-German) and the Treaty of Verdun (843): Charles the Bald\'s west, Louis the German\'s east, Lothair\'s imperial middle strip from Frisia to Rome.',
      'The partitions kept subdividing (Prüm 855, Meerssen 870, Ribemont 880) while Vikings burned the rivers, Saracens the Mediterranean, and Magyars (from 899) the east; Charles the Fat\'s brief reunion collapsed with Paris\'s siege (885–86) and his deposition (887–88) — "the kingdoms did each make a king from its own guts", a chronicler wrote. The last east-Frankish Carolingian died in 911, the last western claimant in 987: the empire ended, but its idea — translated to Otto I in 962 — and its institutions seeded everything after.'
    ]},
    { title: 'Major rulers', paragraphs: [
      'Charlemagne, 768–814, emperor from 800 — the conqueror-legislator of Christian Europe.',
      'Louis the Pious, 814–840 — the reformer whose sons\' wars broke the unity.',
      'Lothair I, emperor 840–855 — the middle kingdom\'s doomed senior line.',
      'Charles the Bald, 843–877 — West Francia\'s founder-king, emperor at the end.',
      'Louis the German, 843–876 — East Francia\'s architect.',
      'Charles the Fat, emperor 881–887 — the last reunion and the deposition that ended it.'
    ]},
    { title: 'Religion, culture, and society', paragraphs: [
      'The empire made correction (correctio) its religion: one Benedictine rule (Benedict of Aniane\'s synods, 816–17), one liturgy Romanised, one biblical text (Alcuin\'s), tithes enforced, parishes gridded — the machinery of a uniform Latin Christianity that survived the state which built it. Its theology fought its own battles (predestination, images, the filioque entering the creed at Aachen) with Byzantium watching.',
      'Its society was the manor\'s: bipartite estates (demesne and dependent holdings) documented in polyptychs like Saint-Germain\'s, slavery shading into serfdom, and the count-vassal-benefice lattice hardening under invasion into the localised lordship — castles, knights, immunities — that post-Carolingian Europe would call normal. The renaissance\'s books and the fragmentation\'s fortresses were the same century\'s twin bequests.'
    ]},
    { title: 'Legacy', paragraphs: [
      'Every later medieval "empire" footnotes this one: Otto I\'s coronation (962) deliberately Carolingian, the Salians and Staufer holding "Roman" empire as Charlemagne\'s heirs, Napoleon still reaching for the symbolism. France and Germany trace their births to Verdun\'s lines; Europe\'s Latin manuscript inheritance survives substantially because Carolingian scriptoria copied it.',
      'Charlemagne himself became the continent\'s common ancestor-figure — canonised by an antipope\'s favour (1165), starring in the chansons de geste, his Aachen throne crowning German kings for six centuries — the empire\'s afterlife as myth outlasting its eighty-eight years as fact.'
    ]}
  ],
  knownFor: [
    'Charlemagne crowned emperor, Christmas 800',
    'Saxon wars, Lombard crown, Avar treasure, Spanish March',
    'Capitularies, missi dominici, and Caroline minuscule',
    'The Treaty of Verdun (843) parting France from Germany',
    'The imperial idea bequeathed to Otto I (962)'
  ],
  timeline: [
    { date: '768', title: 'Charlemagne\'s accession', description: 'Sole king from 771 after Carloman\'s death.' },
    { date: '774', title: 'Lombard crown', description: 'Pavia falls; Charlemagne is king of the Franks and Lombards.' },
    { date: '778', title: 'Roncesvalles', description: 'The Pyrenean rearguard disaster that epic will make immortal.' },
    { date: '772–804', title: 'The Saxon wars', description: 'Thirty years of conquest and conversion, Verden\'s massacre included.' },
    { date: '789', title: 'Admonitio Generalis', description: 'The great capitulary legislates a Christian society and its schools.' },
    { date: '25 December 800', title: 'Imperial coronation', description: 'Leo III crowns Charlemagne in Saint Peter\'s.' },
    { date: '814', title: 'Louis the Pious succeeds', description: 'One empire, several heirs: the structural crisis begins.' },
    { date: '833', title: 'The Field of Lies', description: 'Louis\'s army deserts to his sons; deposition and penance follow.' },
    { date: '842–843', title: 'Strasbourg and Verdun', description: 'Bilingual oaths, then the tripartite partition of the empire.' },
    { date: '885–888', title: 'Paris besieged; the empire ends', description: 'Charles the Fat\'s failure and deposition dissolve the unity into successor kingdoms.' },
    { date: '962', title: 'The idea translated', description: 'Otto I\'s coronation revives the imperial title for the German kings.' }
  ],
  relatedEntries: {
    people: [
      { title: 'Charlemagne', type: 'person', slug: 'charlemagne' },
      { title: 'Louis the Pious', type: 'person', slug: 'louis-the-pious' },
      { title: 'Pepin the Short', type: 'person', slug: 'pepin-the-short', label: 'The dynasty\'s crowned founder' }
    ],
    locations: [
      { title: 'Frankish Kingdom', type: 'location', slug: 'frankish-kingdom', label: 'The parent realm' },
      { title: 'Holy Roman Empire', type: 'location', slug: 'holy-roman-empire', label: 'The idea\'s heir' },
      { title: 'Kingdom of France', type: 'location', slug: 'kingdom-of-france', label: 'Verdun\'s western share' }
    ],
    events: [
      { title: 'Charlemagne Crowned Emperor', type: 'event', slug: 'charlemagne-crowned' },
      { title: 'Treaty of Verdun', type: 'event', slug: 'treaty-of-verdun' }
    ]
  },
  sources: [
    { title: 'Carolingian Empire — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Carolingian_Empire' },
    { title: 'Einhard and Notker, Two Lives of Charlemagne', author: 'Einhard; Notker', type: 'primary source' },
    { title: 'King and Emperor: A New Life of Charlemagne', author: 'Janet L. Nelson', type: 'book' }
  ]
})

// ── HOLY ROMAN EMPIRE ───────────────────────────────────────────────────────
patch('holy-roman-empire', {
  overview: [
    'The Holy Roman Empire was the medieval West\'s universal monarchy in theory and its most contested polity in practice: revived by Otto I\'s coronation (962) on Carolingian foundations, spanning Germany, Burgundy, and imperial Italy, and claiming — as protector of the church and heir of Rome — a primacy the popes spent three centuries disputing.',
    'Its medieval drama runs from Ottonian church-kingship through Canossa (1077) and the Investiture Contest, the Staufer duel with the papacy and Lombard League — Barbarossa at Legnano (1176), Frederick II\'s world-war with Rome — to the Great Interregnum, the electoral constitution fixed by the Golden Bull (1356), and the Habsburg gathering of the fifteenth century.'
  ],
  contentSections: [
    { title: 'Overview', paragraphs: [
      'The Holy Roman Empire was the medieval West\'s universal monarchy in theory and its most contested polity in practice: revived by Otto I\'s coronation (962) on Carolingian foundations, spanning Germany, Burgundy, and imperial Italy, and claiming — as protector of the church and heir of Rome — a primacy the popes spent three centuries disputing.',
      'Its medieval drama runs from Ottonian church-kingship through Canossa (1077) and the Investiture Contest, the Staufer duel with the papacy and Lombard League — Frederick Barbarossa at the Battle of Legnano (1176), Frederick II\'s world-war with Rome — to the Great Interregnum, the electoral constitution fixed by the Golden Bull (1356), and the Habsburg gathering of the fifteenth century.'
    ]},
    { title: 'Background and origins', paragraphs: [
      'East Francia\'s Carolingian line died in 911; the duchies (Saxony, Franconia, Bavaria, Swabia, Lotharingia) elected kings — Conrad I, then Henry the Fowler, whose son Otto I made the kingship imperial: the Magyars annihilated at the Lechfeld (955), Italy entered and its crown taken (951), and on 2 February 962 the papal coronation in Rome reviving Charlemagne\'s title for the Saxon house.',
      'The Ottonian system ruled through the church: bishoprics and royal abbeys endowed with counties and armies (the imperial church system), Magdeburg founded against the Slavs, and the emperor as Christ\'s vicar in governance — a fusion of altar and crown so complete that its unpicking, when reform popes demanded it, would convulse Europe.'
    ]},
    { title: 'High Middle Ages: investiture and the Staufer', paragraphs: [
      'The Investiture Contest broke the old order: Gregory VII\'s decrees against lay investiture met Henry IV\'s deposition letter, and the excommunicated emperor knelt three snowy days at Canossa (1077) — absolution as humiliation, princes electing an anti-king, civil war for a generation until the Concordat of Worms (1122) split spiritualities from temporalities. The monarchy emerged weakened exactly where princes and towns were strengthening.',
      'The Staufer century fought to reverse that: Frederick Barbarossa (1152–1190) — "holy empire" entering the chancery style — asserting Roncaglia\'s regalian rights over Lombardy\'s communes, destroying Milan (1162), and being fought to the Peace of Constance (1183) after the Lombard League\'s pikes held at Legnano (1176); drowned on crusade in 1190, he left the design to Henry VI — Sicily added by marriage — and to Frederick II, the Sicilian-born stupor mundi whose crusade by diplomacy (Jerusalem, 1229), Sicilian bureaucratic monarchy, and death-struggle with Innocent IV (deposed at Lyon, 1245) ended with dynasty extinguished — Conradin beheaded at Naples (1268) — and the empire kingless in the Great Interregnum (1250–1273).'
    ]},
    { title: 'Late Middle Ages: the electoral empire', paragraphs: [
      'Rudolf of Habsburg\'s election (1273) restarted the kingship on new terms: dynasties (Habsburg, Luxembourg, Wittelsbach) building house-power — Rudolf seizing Austria from Ottokar II at the Marchfeld (1278) — while the constitution formalised what practice had made: Charles IV\'s Golden Bull (1356) fixing seven electors, majority election, and indivisible electorates, the empire henceforth an elective federation with an imperial apex.',
      'Its later medieval life was polycentric: Charles IV\'s Prague — university (1348), New Town, the court of the Luxembourgs — as imperial capital; the towns\' leagues (Rhenish, Swabian, Hanseatic) and the knights\' feuds filling the space princes and emperor left; Sigismund managing Christendom\'s crises — the Council of Constance (1414–1418) ending the papal schism, Hus burned there and the Hussite wars scorching Bohemia — and Frederick III\'s long, patient reign (1440–1493) marrying his son to Burgundy\'s heiress: the Habsburg world-position assembled as the Middle Ages closed.'
    ]},
    { title: 'Political structure and rule', paragraphs: [
      'The empire\'s constitution was election plus iter Romanum: German kingship chosen (by custom, then by the Bull\'s seven electors — Mainz, Cologne, Trier, Bohemia, Palatinate, Saxony, Brandenburg), imperial title completed by Roman coronation until the fifteenth century let "emperor-elect" suffice. Between elections, government was negotiation: diets (Hoftage, later Reichstage) of princes and towns, regalian rights farmed or pawned, and justice through the king\'s court and, increasingly, princely territories.',
      'Its texture was legal plurality: prince-bishoprics and abbeys, imperial free cities (Nuremberg, Frankfurt, Lübeck answering only to the crown), imperial knights, and territorial principalities consolidating Landeshoheit — with Italy\'s communes and signori and Burgundy\'s kingdom attached by claims more than control. The empire worked less as a state than as Europe\'s legal-ceremonial framework — which is why it could lose every centralising battle and still outlive its victors.'
    ]},
    { title: 'Major rulers', paragraphs: [
      'Otto I the Great, 936–973, emperor 962 — Lechfeld, the Italian crown, the revival itself.',
      'Otto III, 983–1002 — the boy-emperor\'s Roman renovatio with his pope Sylvester II.',
      'Henry IV, 1056–1106 — Canossa\'s penitent and the Investiture war\'s survivor.',
      'Frederick I Barbarossa, 1152–1190 — Roncaglia, Legnano, Constance; drowned leading the Third Crusade.',
      'Henry VI, 1190–1197 — Sicily seized, Richard the Lionheart ransomed; the hereditary-empire plan died with him.',
      'Frederick II, 1212–1250 — stupor mundi: Sicilian state-builder, excommunicate crusader, Rome\'s mortal enemy.',
      'Rudolf of Habsburg, 1273–1291 — the Interregnum ended; Austria won at the Marchfeld.',
      'Henry VII, 1308–1313 — Dante\'s hoped-for world-monarch; died on the Italian expedition.',
      'Charles IV, 1346–1378 — the Golden Bull and golden Prague.',
      'Sigismund, 1410–1437 — Constance\'s convener, the Hussites\' adversary, the Luxembourgs\' last.',
      'Frederick III, 1440–1493 — the tortoise-emperor whose Burgundian marriage made the Habsburg future.'
    ]},
    { title: 'Wars, battles, and conflicts', paragraphs: [
      'The empire\'s formative battles ring its history: the Lechfeld (955) ending the Magyar terror; Civitate\'s lesson unlearned; the Elster (1080) killing the anti-king Rudolf; Legnano (1176), the communes\' day; Bouvines (1214) deciding Otto IV\'s throne in France\'s favour; Cortenuova (1237), Frederick II\'s Lombard triumph before the papal war consumed all; the Marchfeld (1278) founding Habsburg Austria; Morgarten (1315) and Sempach (1386), the Swiss Confederation fighting free; the Hussite wars\' wagon-fortress victories (Vítkov, Domažlice) humbling five crusades.',
      'Its expansion was largely eastern and urban: the Ostsiedlung planting German law towns from Holstein to Transylvania; Lübeck (1143) and the Baltic bridgeheads; margraviates thickening into Brandenburg, Meissen, Austria — the demographic-legal frontier that, more than any battle, moved the empire\'s centre of gravity east.'
    ]},
    { title: 'Religion, culture, and society', paragraphs: [
      'The empire\'s sacral core — coronations at Aachen on Charlemagne\'s throne, the imperial regalia\'s Holy Lance, canonised Charlemagne (1165) — coexisted with Christendom\'s sharpest church-state conflicts, from Canossa to the publicist wars of Lewis IV\'s reign (Marsilius\'s Defensor Pacis written at his court). Its churchmen ran principalities; its friars and mystics (Eckhart, Tauler) ran deep; its Jews, "servi camerae" under imperial protection bought dearly, suffered the crusade pogroms of 1096 and the Black Death burnings of 1348–49 in the same cities that housed Europe\'s great communities of learning.',
      'Its high culture moved from Ottonian gold and ivory through the Hohenstaufen moment — Walther von der Vogelweide\'s lyrics, the Nibelungenlied, Wolfram\'s Parzival — to Charles IV\'s Prague and the universities (Prague 1348, Vienna 1365, Heidelberg 1386...); its economy from Rhenish cathedral-towns to the Hansa\'s sea-empire and Augsburg-Nuremberg\'s metal-and-money capitalism: an empire poor at the centre and rich everywhere else.'
    ]},
    { title: 'Legacy', paragraphs: [
      'Medieval Europe\'s central argument — pope or emperor, God\'s two swords — was conducted through this polity, and its stalemate\'s residue became Western constitutionalism\'s raw material: electoral monarchy, written fundamental law (the Golden Bull), corporate representation, and the legal pluralism German lands carried into modernity. The Swiss and the Hansa, the prince-bishop and the free city, are its characteristic children.',
      'It also fixed Europe\'s longest-running structural facts: the Franco-German rivalry over Lotharingia\'s ghost, the German push east, Austria\'s rise, and the imperial idea itself — which survived until 1806 and haunted every "empire" proclaimed since.'
    ]}
  ],
  knownFor: [
    'Otto I\'s revival (962) and the imperial church system',
    'Canossa (1077) and the Investiture Contest',
    'Barbarossa, the Lombard League, and Legnano (1176)',
    'Frederick II\'s war with the papacy and the Interregnum',
    'The Golden Bull (1356) and the electoral constitution'
  ],
  timeline: [
    { date: '911/919', title: 'East Francia elects', description: 'The Carolingian line ends; Conrad, then Henry the Fowler, begin elective German kingship.' },
    { date: '10 August 955', title: 'The Lechfeld', description: 'Otto I destroys the Magyar host; the eastern terror ends.' },
    { date: '2 February 962', title: 'Imperial coronation', description: 'John XII crowns Otto I; the empire is revived.' },
    { date: 'January 1077', title: 'Canossa', description: 'Henry IV\'s three-day penance before Gregory VII.' },
    { date: '1122', title: 'Concordat of Worms', description: 'Investiture compromise: ring and staff from the church, sceptre from the king.' },
    { date: '29 May 1176', title: 'Legnano', description: 'The Lombard League defeats Barbarossa; Constance (1183) prices the peace.' },
    { date: '1214', title: 'Bouvines', description: 'Otto IV\'s coalition destroyed; Frederick II\'s path clears.' },
    { date: '1245–1268', title: 'The Staufer destroyed', description: 'Lyon deposes Frederick II; Conradin\'s execution ends the house; Interregnum.' },
    { date: '26 August 1278', title: 'The Marchfeld', description: 'Rudolf of Habsburg defeats Ottokar II; Austria becomes Habsburg.' },
    { date: '1356', title: 'The Golden Bull', description: 'Charles IV fixes the seven electors and the empire\'s constitution.' },
    { date: '1414–1418', title: 'Council of Constance', description: 'Sigismund\'s council ends the Schism; Hus\'s pyre ignites Bohemia.' },
    { date: '1452/1477', title: 'The Habsburg gathering', description: 'Frederick III crowned in Rome; Maximilian\'s Burgundian marriage assembles the future.' }
  ],
  relatedEntries: {
    people: [
      { title: 'Frederick Barbarossa', type: 'person', slug: 'frederick-i-barbarossa' },
      { title: 'Henry VI', type: 'person', slug: 'henry-vi-holy-roman-emperor' },
      { title: 'Frederick II', type: 'person', slug: 'frederick-ii-holy-roman-emperor' },
      { title: 'Otto IV', type: 'person', slug: 'otto-iv' }
    ],
    locations: [
      { title: 'Carolingian Empire', type: 'location', slug: 'carolingian-empire', label: 'The inheritance claimed' },
      { title: 'Papacy', type: 'location', slug: 'papacy', label: 'Partner and adversary' },
      { title: 'Lombard League', type: 'location', slug: 'lombard-league', label: 'The communes that fought the Staufer' }
    ],
    events: [
      { title: 'Battle of Legnano', type: 'event', slug: 'battle-of-legnano' },
      { title: 'Battle of Bouvines', type: 'event', slug: 'battle-of-bouvines' }
    ]
  },
  sources: [
    { title: 'Holy Roman Empire — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Holy_Roman_Empire' },
    { title: 'Heart of Europe: A History of the Holy Roman Empire', author: 'Peter H. Wilson', type: 'book' },
    { title: 'Otto of Freising, Deeds of Frederick Barbarossa', author: 'Otto of Freising', type: 'primary source' }
  ]
})

// ── BYZANTINE EMPIRE ────────────────────────────────────────────────────────
patch('byzantine-empire', {
  overview: [
    'The Byzantine Empire was Rome continued: the eastern empire ruling from Constantine\'s city for over a millennium (330–1453), Greek in tongue, Roman in law and title, Orthodox in faith — Justinian\'s codification and Hagia Sophia its early summits, the theme-system its medieval survival kit.',
    'Its medieval arc swings vast: Heraclius\'s Persian victory devoured by the Arab conquests; iconoclasm\'s century; the Macedonian apogee under Basil II; Manzikert (1071) opening Anatolia to the Turks; Komnenian restoration entangled with the crusades it summoned; the Fourth Crusade\'s sack (1204) and Palaiologan recovery (1261) of a shrinking realm — until Mehmed II\'s guns ended it on 29 May 1453.'
  ],
  contentSections: [
    { title: 'Overview', paragraphs: [
      'The Byzantine Empire was Rome continued: the eastern empire ruling from Constantine\'s city for over a millennium (330–1453), Greek in tongue, Roman in law and title, Orthodox in faith — Justinian\'s codification and Hagia Sophia its early summits, the theme-system its medieval survival kit.',
      'Its medieval arc swings vast: Heraclius\'s Persian victory devoured by the Arab conquests; iconoclasm\'s century; the Macedonian apogee under Basil II; the Battle of Manzikert (1071) opening Anatolia to the Turks; Komnenian restoration entangled with the crusades it summoned; the Fourth Crusade\'s sack (1204) and Palaiologan recovery (1261) of a shrinking realm — until Mehmed II\'s guns ended it at the Fall of Constantinople, 29 May 1453.'
    ]},
    { title: 'Background and early medieval survival', paragraphs: [
      'Constantine founded the city (330) and Theodosius\'s heirs split the administration for good (395); the east, richer and walled, survived the west\'s fall and under Justinian (527–565) counter-attacked — Belisarius\'s Africa and Italy, the Corpus Juris Civilis, Hagia Sophia\'s dome — before plague and Persian wars spent the surplus.',
      'The seventh century remade it or nothing would remain: Heraclius destroyed Persia (Nineveh, 627) only to lose Syria, Egypt, and Africa to the Arab caliphate within a generation; Constantinople itself held the sieges of 674–678 and 717–718 — Greek fire and the Theodosian walls saving, arguably, Europe. The response was systemic: themes settling soldier-farmers under strategoi, Greek replacing Latin, the empire hardening into its medieval form — smaller, militarised, and indestructible for centuries.'
    ]},
    { title: 'Iconoclasm to apogee', paragraphs: [
      'The iconoclast controversy (726–787, 815–843) fused theology and politics — emperors against images, monks and empresses for them — ending with Orthodoxy\'s "Triumph" (843) and a self-definition (icons, liturgy, Roman order) exported wholesale: Cyril and Methodius to the Slavs (863), Bulgaria converted (864), and in 988 Vladimir of Kiev\'s baptism marrying Rus\' to Byzantium — the "commonwealth" of Orthodox nations born.',
      'The Macedonian dynasty (867–1056) rode reconquest to apogee: Nikephoros Phokas and John Tzimiskes retaking Crete, Cilicia, Antioch; Basil II (976–1025) grinding Bulgaria to annexation (1018, "Bulgar-slayer") and leaving the treasury full, the frontiers at the Danube and Euphrates — and the succession fatally unarranged: fifty years of court mismanagement squandered it into Manzikert\'s decade.'
    ]},
    { title: 'Crusades, catastrophe, and the long end', paragraphs: [
      'Manzikert (1071) and the civil wars after let the Seljuks settle Anatolia — the recruiting heartland — while Normans took Italy\'s last themes (Bari, 1071). Alexios I Komnenos rebuilt through alliance: his appeal helped summon the First Crusade, whose passage recovered Nicaea and the coasts but planted Latin states with Byzantine claims — a century of Komnenian management (John II\'s campaigns, Manuel\'s ambitions) ending at Myriokephalon (1176) and, after the dynasty\'s fall, in catastrophe: the Fourth Crusade, diverted by Venice and exiled princes, stormed and sacked Constantinople (12–13 April 1204), partitioning the empire into Latin fiefs.',
      'The Greek successor-states (Nicaea, Epirus, Trebizond) kept the flame; Michael VIII Palaiologos retook the city (1261) and refounded an empire that was thereafter a great name defending shrinking ground: Catalan companies and civil wars, the Ottoman crossing at Gallipoli (1354), Bayezid\'s blockade broken only by Timur at Ankara (1402), union offered at Florence (1439) for help that died at Varna (1444) — until Mehmed II\'s two-month siege ended it: Constantine XI Palaiologos falling at the walls on 29 May 1453, the city becoming an Ottoman capital, and "Rome" — after 2,206 years by its own count — passing into memory and claim.'
    ]},
    { title: 'Political structure and rule', paragraphs: [
      'Byzantium was medieval Europe\'s only bureaucratic state: an emperor "crowned by God" (and made by army, senate, and mob in practice — dynasties changed by acclamation and blinding), a salaried civil service of logothetes and themes\' governors, Roman law continuously updated (Justinian\'s Corpus, the Ecloga, Basil I\'s Basilika), gold coinage (the nomisma) stable for seven centuries, and a diplomatic service whose bribes, marriages, and ceremony (the Book of Ceremonies codifying awe) were weapons as real as the tagmata.',
      'Church and empire ran as symphonia: the patriarch crowning, the emperor convening councils and appointing — caesaropapism to critics, harmony to theorists — with monasticism (Athos chartered 963) as the spiritual counterweight. The system\'s genius was reproduction: every collapse (7th century, 1204) produced administrations-in-exile that reassembled the state from its paperwork.'
    ]},
    { title: 'Major rulers', paragraphs: [
      'Justinian I, 527–565 — the law codified, the west briefly retaken, Hagia Sophia raised.',
      'Heraclius, 610–641 — Persia destroyed, the Cross restored, the Arab storm endured.',
      'Leo III, 717–741 — the 717 siege broken; iconoclasm begun.',
      'Basil II, 976–1025 — the Bulgar-slayer\'s apogee: Danube to Euphrates.',
      'Romanos IV Diogenes, 1068–1071 — Manzikert\'s captive emperor.',
      'Alexios I Komnenos, 1081–1118 — the restorer who called the West and managed what answered.',
      'John II Komnenos, 1118–1143 — the dynasty\'s best soldier-administrator.',
      'Michael VIII Palaiologos, 1259–1282 — 1261\'s recoverer; union\'s first gambler.',
      'John VIII Palaiologos, 1425–1448 — Florence\'s union for Varna\'s crusade.',
      'Constantine XI Palaiologos, 1449–1453 — the last emperor, dead in the breach.'
    ]},
    { title: 'Wars and defence', paragraphs: [
      'Byzantium\'s battle-roll maps Eurasia: Yarmouk (636) losing Syria; the Constantinople sieges (674–78, 717–18) saving the state; Kleidion (1014) breaking Bulgaria; Manzikert (1071) losing Anatolia\'s heart; Myriokephalon (1176) ending recovery\'s hope; 1204\'s sack; Pelekanon (1329) failing against Orhan; and 1453\'s fifty-three days of bombardment, the wall\'s first fall to gunpowder.',
      'Its military tradition was doctrine as much as valour: the strategika (Maurice\'s, Leo VI\'s) teaching combined arms and paid retreat; Greek fire\'s naval monopoly; the themes\' defence-in-depth; the tagmata and Varangian Guard (Harald Hardrada its most famous alumnus) as strike-core; and fortification — the Theodosian walls above all — as the empire\'s longest-serving soldier.'
    ]},
    { title: 'Religion, culture, and society', paragraphs: [
      'Byzantium\'s religion organised half of Christendom: the pentarchy\'s senior see after Rome\'s drift, councils from Nicaea to the Photian and 1054 schisms hardening the Orthodox-Latin divide, hesychasm\'s late mystical flowering (Palamas, vindicated 1351), and the missionary alphabet-cultures (Cyrillic) that made Slavic Orthodoxy Byzantium\'s self-replication. Constantinople itself — half a million souls at peak, the world\'s relic-hoard, Hagia Sophia\'s liturgy that "we knew not whether we were in heaven or on earth" (the Rus\' envoys\' report) — was the empire\'s argument.',
      'Its culture preserved and created: classical literature copied and taught (the Suda, Photius\'s library) while mosaic, icon, and hymnography perfected a sacred aesthetics; its economy ran the silk monopoly, the grain fleets, and the medieval world\'s money until Italian privileges (Venice\'s 1082 chrysobull the fateful first) hollowed the customs house — the merchant-republics Byzantium licensed becoming its carriers, creditors, and finally its conquerors\' ferrymen.'
    ]},
    { title: 'Legacy', paragraphs: [
      'Byzantium\'s fall scattered its functions: Moscow claiming "Third Rome", the Ottomans taking the city\'s imperial mantle (Mehmed styling himself Kayser-i Rûm), Greek scholars and manuscripts feeding the Italian Renaissance — the classics\' survival owing more to Byzantine copyists than to any western institution — and Orthodox Christianity carrying the liturgy, canon law, and political theology of the empire across Eastern Europe to this day.',
      'Its medieval role was Europe\'s eastern wall and teacher at once: absorbing the caliphate\'s and steppe\'s blows for centuries, transmitting Roman law (the Corpus that western universities rediscovered), and demonstrating — for a millennium — that antiquity\'s state could be made to run on Christian time.'
    ]}
  ],
  knownFor: [
    'Rome\'s eastern continuation: 330–1453',
    'Justinian\'s law, Hagia Sophia, and Greek fire',
    'Basil II\'s apogee and the Orthodox commonwealth',
    'Manzikert (1071) and the 1204 sack',
    'The Fall of Constantinople, 29 May 1453'
  ],
  timeline: [
    { date: '330', title: 'Constantinople founded', description: 'Constantine dedicates New Rome on the Bosphorus.' },
    { date: '527–565', title: 'Justinian', description: 'The Corpus Juris, Hagia Sophia, and the western reconquests.' },
    { date: '636', title: 'Yarmouk', description: 'Syria falls to the Arabs; the near-eastern provinces follow.' },
    { date: '717–718', title: 'The great siege', description: 'Leo III and Greek fire break the caliphate\'s assault on the city.' },
    { date: '843', title: 'Triumph of Orthodoxy', description: 'Iconoclasm ends; the icon defines the faith.' },
    { date: '1018', title: 'Bulgaria annexed', description: 'Basil II completes the grinding conquest; the Danube is the border again.' },
    { date: '26 August 1071', title: 'Manzikert', description: 'Romanos IV is captured; civil war opens Anatolia to the Turks.' },
    { date: '1082', title: 'Venice\'s chrysobull', description: 'Alexios I buys naval aid with trading privileges — the maritime republics\' entry.' },
    { date: '12–13 April 1204', title: 'The sack', description: 'The Fourth Crusade storms Constantinople; Latin empire and Greek exiles partition Rome.' },
    { date: '15 August 1261', title: 'Recovery', description: 'Michael VIII enters the city; the Palaiologan restoration begins.' },
    { date: '1354', title: 'Gallipoli', description: 'The Ottomans take their European bridgehead from an earthquake\'s ruins.' },
    { date: '6 July 1439', title: 'Union of Florence', description: 'John VIII signs union for a crusade that dies at Varna (1444).' },
    { date: '29 May 1453', title: 'The fall', description: 'Mehmed II takes the city; Constantine XI dies at the walls.' }
  ],
  relatedEntries: {
    people: [
      { title: 'Alexios I Komnenos', type: 'person', slug: 'alexios-i-komnenos' },
      { title: 'Romanos IV Diogenes', type: 'person', slug: 'romanos-iv-diogenes' },
      { title: 'Constantine XI Palaiologos', type: 'person', slug: 'constantine-xi-palaiologos' },
      { title: 'Mehmed II', type: 'person', slug: 'mehmed-ii', label: 'The conqueror' }
    ],
    locations: [
      { title: 'Ottoman Empire', type: 'location', slug: 'ottoman-empire', label: 'The successor at the walls' },
      { title: 'Seljuk Turks', type: 'location', slug: 'seljuk-turks', label: 'Manzikert\'s victors' },
      { title: "Kievan Rus'", type: 'location', slug: 'kievan-rus', label: 'The commonwealth\'s northern convert' }
    ],
    events: [
      { title: 'Battle of Manzikert', type: 'event', slug: 'battle-of-manzikert' },
      { title: 'Fall of Constantinople', type: 'event', slug: 'fall-of-constantinople' }
    ]
  },
  sources: [
    { title: 'Byzantine Empire — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Byzantine_Empire' },
    { title: 'A History of the Byzantine State and Society', author: 'Warren Treadgold', type: 'book' },
    { title: 'Anna Komnene, The Alexiad; Niketas Choniates, Historia', author: 'Byzantine historians', type: 'primary source' }
  ]
})

// ── OTTOMAN EMPIRE ──────────────────────────────────────────────────────────
patch('ottoman-empire', {
  overview: [
    'The Ottoman Empire grew from a Bithynian frontier beylik into the power that ended Byzantium: Osman\'s ghazi band (c. 1299) to Orhan\'s Bursa and the Gallipoli crossing (1354), Murad I\'s Adrianople and Kosovo (1389), Bayezid\'s empire wrecked by Timur at Ankara (1402) and rebuilt within a generation — to Mehmed II\'s conquest of Constantinople in 1453.',
    'Its medieval machinery — the devshirme levy and Janissaries, timar cavalry, ghazi legitimacy fused with Perso-Islamic statecraft, and Europe\'s best siege artillery — made it by 1453 the heir of Rome in its conquerors\' own style: Mehmed as Kayser-i Rûm, Istanbul as the empire\'s new head.'
  ],
  contentSections: [
    { title: 'Overview', paragraphs: [
      'The Ottoman Empire grew from a Bithynian frontier beylik into the power that ended Byzantium: Osman\'s ghazi band (c. 1299) to Orhan\'s Bursa and the Gallipoli crossing (1354), Murad I\'s Adrianople and the Battle of Kosovo (1389), Bayezid I\'s empire wrecked by Timur at Ankara (1402) and rebuilt within a generation — to Mehmed II\'s conquest of Constantinople in 1453.',
      'Its medieval machinery — the devshirme levy and Janissaries, timar cavalry, ghazi legitimacy fused with Perso-Islamic statecraft, and Europe\'s best siege artillery — made it by 1453 the heir of Rome in its conquerors\' own style: Mehmed as Kayser-i Rûm, Istanbul as the empire\'s new head.'
    ]},
    { title: 'Origins: the beylik', paragraphs: [
      'The Seljuk sultanate of Rum\'s collapse under Mongol suzerainty left western Anatolia to ghazi frontier-lordships; Osman\'s, facing Byzantine Bithynia, was among the smallest and best-placed — raiding rich borderlands, absorbing warriors, dervishes, and defectors, its founding legend (Osman\'s dream of a world-tree) written later but its opportunism contemporary. The victory at Bapheus (1302) announced it; the long blockades did the work.',
      'Orhan (c. 1324–1362) converted band to state: Bursa starved out (1326) as capital, Nicaea (1331) and Nicomedia (1337) following after Pelekanon beat the last imperial relief; the first coins, medreses, and standing infantry; marriage into the Byzantine civil wars (Theodora Kantakouzene) — and through them Thrace\'s roads learned, until the earthquake-breach at Gallipoli (1354) gave the Ottomans their permanent European gate.'
    ]},
    { title: 'The Balkan century and Ankara\'s crash', paragraphs: [
      'Murad I (1362–1389) made Rumelia the empire\'s centre: Adrianople taken (c. 1369) and made capital Edirne; the Maritsa victory (1371) shattering the Serbian lords of Macedonia; vassalage webs over Bulgaria, Byzantium, and Serbia — and the Battle of Kosovo (1389), where sultan and prince Lazar both died and Ottoman suzerainty over Serbia hardened. The instruments matured with the conquests: the Janissaries raised from prisoner-levy and then devshirme, the kapıkulu household army, timar grants binding cavalry to conquered land.',
      'Bayezid I "the Thunderbolt" pushed both ways at once — the beyliks annexed, Constantinople blockaded (1394–1402), the Nicopolis crusade destroyed (1396) — until Timur\'s invasion caught the over-stretched sultanate at Ankara (1402): army defected, sultan caged, beyliks restored, sons at war. The Interregnum (1402–1413) was the empire\'s near-death; Mehmed I\'s victory and Murad II\'s long consolidation (Varna\'s crusade crushed 1444, second Kosovo 1448) proved the structure — devshirme state, not steppe confederacy — could regrow its head.'
    ]},
    { title: '1453 and the imperial turn', paragraphs: [
      'Mehmed II inherited (1451) a project prepared: the Bosphorus cut by the fortress of Rumeli Hisarı (1452), Urban\'s great bombard cast, the fleet portaged over Galata\'s hill into the Golden Horn when the chain held. The fifty-three-day siege ended before dawn on 29 May 1453 — the walls breached where cannon had worked for weeks, Constantine XI dead in the fighting, three days\' sack, and then reconstruction: Hagia Sophia a mosque, the patriarchate reappointed (Gennadios enthroned by the sultan), the city repopulated by decree into an imperial capital again.',
      'The conquest closed the medieval Mediterranean\'s central question and opened the Ottoman imperial age: Serbia and the Morea absorbed (by 1460), Trebizond\'s last "Roman" empire taken (1461), Kayser-i Rûm added to sultan and ghazi in the titulature — the medieval frontier-band now running Rome\'s city, taxing its trade, and codifying (Mehmed\'s kanunname) the fratricide-succession and slave-administration that would rule three continents.'
    ]},
    { title: 'Political structure and rule', paragraphs: [
      'The Ottoman formula fused three inheritances: Turco-Mongol dynasty (the house of Osman alone throne-worthy, succession by contest among sons — codified as legal fratricide), Perso-Islamic administration (vizierate, chancery, kadi courts applying sharia and sultanic kanun), and the ghazi frontier (holy-war legitimacy shared with dervish orders and march-lords like the Evrenosoğulları).',
      'Its distinctive engine was the kapıkulu — the sultan\'s slaves: devshirme boys from Christian villages trained into Janissary infantry and palace administrators, loyal to the dynasty against the Turkish aristocracy; beside them the timariot sipahis, holding revenue-grants for cavalry service, tied conquest to cultivation. Non-Muslim communities ran themselves under their clergy in return for the cizye tax — the arrangement later formalised as millets — making the empire, from birth, a machine for governing diversity.'
    ]},
    { title: 'Major rulers', paragraphs: [
      'Osman I, c. 1299–1324 — the eponym: dream, band, and Bapheus.',
      'Orhan, c. 1324–1362 — Bursa, Nicaea, the first institutions, Gallipoli.',
      'Murad I, 1362–1389 — Edirne, the Maritsa, Kosovo: Rumelia made the base; the Janissaries founded.',
      'Bayezid I, 1389–1402 — Nicopolis\'s victor, Constantinople\'s blockader, Ankara\'s prisoner.',
      'Mehmed I, 1413–1421 — the Interregnum\'s winner and re-founder.',
      'Murad II, 1421–1451 — Varna and second Kosovo; the consolidator who twice abdicated.',
      'Mehmed II the Conqueror, 1444/1451–1481 — 1453; the imperial codifier.'
    ]},
    { title: 'Wars and expansion', paragraphs: [
      'The medieval sequence runs: Bapheus (1302) and the Bithynian sieges; Pelekanon (1329); Gallipoli (1354); the Maritsa (1371); Kosovo (1389); Nicopolis (1396) destroying Christendom\'s great crusade; Ankara (1402) as the catastrophe-exception; Varna (1444) and second Kosovo (1448) ending the rescue-crusades; Constantinople (1453); Belgrade\'s repulse by Hunyadi (1456) marking the northern limit for a lifetime.',
      'Its method blended raid and system: akıncı raiders softening frontiers march-deep; vassalage before annexation (Serbia, Wallachia, Byzantium itself paying tribute for decades); fortress-and-road logistics; and artillery embraced early and hugely — the walls of Constantinople falling to the same gunpowder revolution that Castillon crowned the same year in the West.'
    ]},
    { title: 'Religion, culture, and society', paragraphs: [
      'Ottoman Islam was frontier Islam organised: ulema and kadi courts for law, dervish orders (Bektashis bound to the Janissaries, Mevlevis to the elite) for devotion, imarets and vakıf endowments building the conquered cities\' mosques, soup-kitchens, and markets — Bursa\'s and Edirne\'s complexes the pattern Istanbul would monumentalise. The dynasty patronised Persian letters and Turkish verse alike; Mehmed II added Greek scholars, Italian painters (Bellini\'s portrait), and a conqueror\'s library.',
      'Society ran on the askeri/reaya line — tax-exempt military-administrative class over taxpaying subjects of all faiths — with mobility through the devshirme\'s strange ladder: peasant boys becoming grand viziers. Christian and Jewish communities kept courts and churches under their own hierarchs (the post-1453 patriarchate\'s authority actually widened under the sultans), and the Balkans\' conversion proceeded by advantage and osmosis more than sword — the empire\'s medieval genius being incorporation, not erasure.'
    ]},
    { title: 'Legacy', paragraphs: [
      'By 1453 the medieval Ottomans had redrawn the map for four centuries: Byzantium ended, the Balkans yoked into one fiscal-military space, the Black Sea closing toward an Ottoman lake, and Europe\'s eastern politics reorganised around the "Turkish question" — crusade rhetoric giving way to embassy and trade with a power now inside the system.',
      'The medieval matrix — kanun and sharia, Janissary and timar, millet pluralism, fratricide succession — governed the mature empire until early modern reform, and its capital-choice proved the deepest legacy: Istanbul as the seat where Roman, Islamic, and Turkish imperial traditions were declared one inheritance.'
    ]}
  ],
  knownFor: [
    'Ghazi beylik to world empire in five generations',
    'Gallipoli (1354), Kosovo (1389), Nicopolis (1396)',
    'Ankara (1402) and the Interregnum survived',
    'Janissaries, devshirme, and timar system',
    'The conquest of Constantinople, 1453'
  ],
  timeline: [
    { date: 'c. 1299/1302', title: 'Osman\'s emergence', description: 'The beylik coalesces; Bapheus announces it to Byzantium.' },
    { date: '6 April 1326', title: 'Bursa falls', description: 'Orhan\'s capital; the state acquires its first great city.' },
    { date: '1354', title: 'Gallipoli', description: 'The earthquake-breach gives the Ottomans Europe.' },
    { date: '26 September 1371', title: 'The Maritsa', description: 'The Serbian lords of Macedonia are destroyed; the Balkans open.' },
    { date: '15 June 1389', title: 'Kosovo', description: 'Murad I and Lazar die; Serbia becomes vassal.' },
    { date: '25 September 1396', title: 'Nicopolis', description: 'Bayezid crushes the great crusade on the Danube.' },
    { date: '28 July 1402', title: 'Ankara', description: 'Timur destroys and captures Bayezid; the Interregnum tears the state.' },
    { date: '1413', title: 'Mehmed I reunites', description: 'The civil war ends; reconstruction begins.' },
    { date: '10 November 1444', title: 'Varna', description: 'Murad II destroys the last rescue-crusade; the second Kosovo (1448) confirms it.' },
    { date: '29 May 1453', title: 'Constantinople conquered', description: 'Mehmed II takes the city; the medieval project completes itself.' },
    { date: '1456', title: 'Belgrade holds', description: 'Hunyadi\'s defence fixes the Danube frontier for seventy years.' }
  ],
  relatedEntries: {
    people: [
      { title: 'Orhan', type: 'person', slug: 'orhan' },
      { title: 'Murad I', type: 'person', slug: 'murad-i' },
      { title: 'Bayezid I', type: 'person', slug: 'bayezid-i' },
      { title: 'Mehmed II', type: 'person', slug: 'mehmed-ii', label: 'The Conqueror' }
    ],
    locations: [
      { title: 'Byzantine Empire', type: 'location', slug: 'byzantine-empire', label: 'The inheritance taken at the walls' },
      { title: 'Seljuk Turks', type: 'location', slug: 'seljuk-turks', label: 'The Anatolian predecessor' },
      { title: 'Principality of Serbia', type: 'location', slug: 'principality-of-serbia', label: 'Kosovo\'s adversary and vassal' }
    ],
    events: [
      { title: 'Battle of Kosovo', type: 'event', slug: 'battle-of-kosovo' },
      { title: 'Fall of Constantinople', type: 'event', slug: 'fall-of-constantinople' }
    ]
  },
  sources: [
    { title: 'Ottoman Empire — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Ottoman_Empire' },
    { title: 'The Ottoman Empire: The Classical Age 1300–1600', author: 'Halil İnalcık', type: 'book' },
    { title: 'Osman\'s Dream', author: 'Caroline Finkel', type: 'book' }
  ]
})

// ── LOMBARD LEAGUE ──────────────────────────────────────────────────────────
patch('lombard-league', {
  overview: [
    'The Lombard League was the sworn alliance of northern Italian communes — Milan, Brescia, Bergamo, Verona, Padua, Bologna and their fellows — formed at Pontida (by tradition, 1167) against Frederick Barbarossa\'s claim to govern Lombardy through imperial podestàs and Roncaglia\'s regalian rights.',
    'Its citizen armies rebuilt razed Milan, founded the fortress-city Alessandria (named for their papal ally), and at the Battle of Legnano (1176) broke the emperor\'s knights around the carroccio — winning at the Peace of Constance (1183) the chartered self-government that made the Italian city-republics, and their civilisation, possible.'
  ],
  contentSections: [
    { title: 'Overview', paragraphs: [
      'The Lombard League was the sworn alliance of northern Italian communes — Milan, Brescia, Bergamo, Verona, Padua, Bologna and their fellows — formed at Pontida (by tradition, 1167) against Frederick Barbarossa\'s claim to govern Lombardy through imperial podestàs and Roncaglia\'s regalian rights.',
      'Its citizen armies rebuilt razed Milan, founded the fortress-city Alessandria (named for their papal ally), and at the Battle of Legnano (1176) broke the emperor\'s knights around the carroccio — winning at the Peace of Constance (1183) the chartered self-government that made the Italian city-republics, and their civilisation, possible.'
    ]},
    { title: 'Background', paragraphs: [
      'By 1150 the Lombard towns had governed themselves for two generations — consuls elected, walls and contadi controlled, regalian revenues (tolls, mints, justice) quietly absorbed — when Frederick Barbarossa came south to reclaim them: the diet of Roncaglia (1158), advised by Bologna\'s Roman lawyers, defined the regalia as imperial and priced them at 30,000 pounds of silver a year.',
      'Enforcement meant war: Crema\'s siege and destruction (1159–60), Milan starved into surrender and razed, its people dispersed (1162), imperial podestàs governing where consuls had. The resistance organised in stages — the Veronese League (1164) holding the Adige, then the great conspiracy sworn at Pontida (1167) — sixteen cities within a year, rebuilding Milan\'s walls before the emperor recrossed the Alps.'
    ]},
    { title: 'The war and Legnano', paragraphs: [
      'The League\'s decade of war was infrastructure as much as battle: Milan rebuilt; Alessandria planted (1168) in the marshes astride the western passes — "city of straw" to imperial mockery, unbreachable in the siege of 1174–75 all the same; papal alliance (Alexander III against Frederick\'s antipopes) sanctifying the cause.',
      'On 29 May 1176, at Legnano, the League\'s infantry — militia companies around Milan\'s carroccio, the Company of Death sworn to the standard — absorbed the imperial cavalry\'s charges until the returning League horse broke Frederick\'s army; the emperor, unhorsed and rumoured dead, reached Pavia a fugitive. Venice\'s peace-congress (1177) reconciled him to the pope; the Peace of Constance (1183) settled the substance: the cities kept election of consuls, jurisdiction, and regalia within their walls and contadi for a modest fealty — empire preserved in name, commune confirmed in fact.'
    ]},
    { title: 'The second league and the Staufer wars', paragraphs: [
      'Frederick II\'s revival of imperial Italy renewed the League (1226): the old alliance re-sworn — Milan, Bologna, Brescia, Piacenza and their circle — closing the Alpine passes against imperial diets. The emperor\'s great victory at Cortenuova (1237), the carroccio itself paraded to Cremona and Rome, seemed to reverse Legnano; his failure before Brescia (1238), the papal depositions, and Parma\'s stunning sortie burning his siege-city "Vittoria" (1248) reversed the reversal — the League\'s cities outlasting the Staufer project until Frederick\'s death (1250) dissolved it.',
      'The victory\'s afterlife was ambivalent: the communes, freed of the empire, fought each other and themselves — Guelf and Ghibelline factionalising every council — and the podestà-republics slid toward the signorie (the Visconti rising in Milan itself); the League as institution faded, but the settlement it had won remained the legal floor of Italian urban liberty.'
    ]},
    { title: 'Structure and method', paragraphs: [
      'The League was a sworn confederation with working organs: rectors from each city meeting in congress, common oaths renewed and registered, war-taxes apportioned, disputes between members arbitrated — medieval Europe\'s most successful inter-city constitution, its acts sealed and archived (the Pontida oath\'s later cult built on real parchment practice).',
      'Its army was the commune in arms: guild and quarter militias, crossbowmen and pikemen around the carroccio — the ox-drawn altar-standard whose loss meant the city\'s honour — with communal cavalry from the urban nobility; its finance the cities\' commercial wealth, which could hire, build (Alessandria in months), and outlast an emperor paying feudal hosts.'
    ]},
    { title: 'Legacy', paragraphs: [
      'Constance\'s charters underwrote the Italian difference: self-governing cities whose law schools (Bologna serving both sides at Roncaglia), banks, and chronicles built toward the Renaissance republics; the League proved communal infantry could beat imperial chivalry and communal treaties could bind an emperor — lessons Europe\'s towns from Flanders to the Rhine studied closely.',
      'Its memory became a politics of its own: Legnano and Pontida as the Risorgimento\'s favourite medieval scene (Verdi\'s opera, the oath in a thousand paintings), the "carroccio" and "league" entering Italian political vocabulary permanently — a twelfth-century alliance still arguing in the modern republic\'s symbols.'
    ]}
  ],
  knownFor: [
    'The Pontida oath (1167) and sixteen sworn cities',
    'Milan rebuilt and Alessandria founded against Barbarossa',
    'The Battle of Legnano (1176) and the carroccio',
    'The Peace of Constance (1183): communal liberty chartered',
    'The second League\'s survival of Frederick II'
  ],
  timeline: [
    { date: '1158', title: 'Roncaglia', description: 'Barbarossa\'s lawyers define the regalia as imperial; enforcement begins.' },
    { date: '1162', title: 'Milan razed', description: 'The city surrenders and is destroyed; its people are dispersed to four villages.' },
    { date: '7 April 1167', title: 'The Pontida oath', description: 'The communes swear the League; Milan\'s rebuilding starts within the year.' },
    { date: '1168', title: 'Alessandria founded', description: 'The League plants its fortress-city, named for Pope Alexander III.' },
    { date: '1174–1175', title: 'Alessandria holds', description: 'The "city of straw" defeats the imperial siege.' },
    { date: '29 May 1176', title: 'Legnano', description: 'The League breaks Barbarossa\'s army around the carroccio.' },
    { date: '25 June 1183', title: 'Peace of Constance', description: 'The cities\' consuls, jurisdiction, and regalia are chartered under nominal imperial fealty.' },
    { date: '1226', title: 'The second League', description: 'The alliance re-forms against Frederick II.' },
    { date: '27 November 1237', title: 'Cortenuova', description: 'Frederick II\'s great victory; the carroccio is sent to Rome in triumph.' },
    { date: '18 February 1248', title: 'Parma\'s sortie', description: 'The besieged city burns "Vittoria"; the Staufer project in Lombardy breaks.' }
  ],
  relatedEntries: {
    people: [
      { title: 'Frederick Barbarossa', type: 'person', slug: 'frederick-i-barbarossa', label: 'The adversary of Legnano' },
      { title: 'Frederick II', type: 'person', slug: 'frederick-ii-holy-roman-emperor', label: 'The second League\'s enemy' }
    ],
    locations: [
      { title: 'Holy Roman Empire', type: 'location', slug: 'holy-roman-empire', label: 'The claim resisted' },
      { title: 'Papacy', type: 'location', slug: 'papacy', label: 'Alexander III\'s alliance' },
      { title: 'Legnano', type: 'location', slug: 'legnano', label: 'The battlefield' }
    ],
    events: [ { title: 'Battle of Legnano', type: 'event', slug: 'battle-of-legnano', label: '1176' } ]
  },
  sources: [
    { title: 'Lombard League — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Lombard_League' },
    { title: 'Otto of Freising and continuators; Milanese annals', author: 'Contemporary chronicles', type: 'primary source' },
    { title: 'The Two Italies / Italian city-communes scholarship', author: 'Academic tradition', type: 'book' }
  ]
})

fs.writeFileSync(dataPath, JSON.stringify(data, null, 2) + '\n')
console.log('Batch 4 (empires + Lombard League) complete.')
