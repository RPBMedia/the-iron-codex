import fs from 'node:fs'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dataPath = path.join(__dirname, '../server/data/history.json')
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'))

// ── Generic template patterns to detect ──────────────────────────────────────
const LOCATION_TEMPLATE_PATTERNS = [
  /geography shaped movement, defense, worship, trade, or politics/i,
  /medieval history of .+ is tied to regional power and to the people or events listed in its archive connections/i,
  /medieval power was local as well as royal: courts, shrines, markets, bridges, fortifications/i,
  /events connected to .+ should be read through the wider archive rather than in isolation/i,
  /IronCodex marks that uncertainty in connected people and event pages/i,
  /The legacy of .+ survives through monuments, ruins, maps, manuscripts, local memory/i,
  /its IronCodex role is to make linked biographical facts/i,
  /remains useful in IronCodex because it grounds biographical facts/i,
  /for places such as towns, cathedrals, castles, and battlefields, the surrounding roads/i,
  /its importance may have changed over time, especially after conquest, dynastic change/i,
]

function isTemplateText(text) {
  return LOCATION_TEMPLATE_PATTERNS.some(p => p.test(text))
}

function isSectionTemplate(section) {
  return (section.paragraphs || []).some(p => isTemplateText(p))
}

// ── Real historical content for major locations ───────────────────────────────
const locationContentOverrides = {
  jerusalem: { sections: [
    { title: 'Overview', paragraphs: [
      'Jerusalem was the most spiritually contested city in medieval Europe and the Near East. Held successively by Islamic rulers, the Crusader Kingdom of Jerusalem, Saladin\'s forces, the Ayyubids, and the Mamluks, it remained the stated goal of the crusading movement across two centuries.',
      'Its religious sites — the Church of the Holy Sepulchre, the Temple Mount, and the al-Aqsa Mosque — made it simultaneously central to Latin Christianity, Islam, and Judaism.'
    ]},
    { title: 'Medieval history', paragraphs: [
      'Jerusalem fell to the First Crusade in 1099 after a brutal siege, becoming the capital of the Kingdom of Jerusalem. The kingdom survived in weakened form until Saladin\'s decisive victory at the Battle of Hattin in 1187 and his subsequent capture of the city, which he took without massacre.',
      'The Third Crusade under Richard I failed to retake Jerusalem. Frederick II obtained it through negotiation with al-Kamil in 1229 under the Sixth Crusade, though Christians held it only intermittently. The city fell permanently to the Khwarazmians in 1244 and passed to Mamluk control thereafter.'
    ]},
    { title: 'Religious importance', paragraphs: [
      'The concept of Jerusalem as the center of the Christian world drove crusading ideology for over two centuries. Pope Urban II\'s 1095 call at Clermont explicitly invoked Jerusalem\'s capture by Seljuk forces as the justification for armed Christian response.',
      'For Islamic rulers, possession of Jerusalem after Saladin carried enormous theological prestige. The Dome of the Rock and al-Aqsa Mosque, converted to Christian use during the crusader period, were restored to Islamic practice in 1187.'
    ]}
  ]},
  constantinople: { sections: [
    { title: 'Overview', paragraphs: [
      'Constantinople was the imperial capital of the Byzantine Empire for more than a thousand years — the largest and most fortified city in medieval Europe and the Near East until its fall to Mehmed II in 1453.',
      'Founded by Constantine I in 330 on the Greek city of Byzantium, it commanded the Bosphorus strait and controlled trade between the Mediterranean and Black Sea.'
    ]},
    { title: 'Medieval history', paragraphs: [
      'The Theodosian Walls, built in the fifth century, made Constantinople virtually impregnable. The city withstood Arab sieges in 674–678 and 717–718. Hagia Sophia, completed under Justinian I in 537, was the greatest church in Christendom and the ceremonial heart of Byzantine imperial authority.',
      'The Fourth Crusade sacked Constantinople in 1204, establishing the Latin Empire. Byzantine rule was restored by Michael VIII Palaiologos in 1261, but the empire was weakened and reduced. Mehmed II\'s final siege and conquest in May 1453 ended the Byzantine Empire.'
    ]},
    { title: 'Fall in 1453', paragraphs: [
      'Constantine XI Palaiologos, the last Byzantine emperor, died in the final assault. The conquest transferred the city\'s religious patrimony to Ottoman hands and triggered migration of Byzantine scholars and texts to western Europe.',
      'The fall of Constantinople in 1453 is often cited as one of the markers of the end of the Middle Ages in European historiography, though the Byzantine state had been effectively hemmed in for decades before the final siege.'
    ]}
  ]},
  hastings: { sections: [
    { title: 'Overview', paragraphs: [
      'The region around Hastings in East Sussex was the site of the Battle of Hastings on 14 October 1066, where William of Normandy defeated and killed Harold Godwinson, the last Anglo-Saxon king of England.',
      'The battle was fought at Senlac Hill, some miles from the town, and ended with the collapse of the English shield-wall after hours of Norman cavalry and archer attacks.'
    ]},
    { title: 'The battle and its aftermath', paragraphs: [
      'Harold\'s army had marched south rapidly after defeating Harald Hardrada at Stamford Bridge five days earlier. Norman feigned retreats and sustained arrow volleys gradually weakened the shield-wall. Harold\'s death — the exact manner disputed between accounts — broke English resistance.',
      'William\'s victory gave him control of England\'s south and the path to London. He was crowned at Westminster on Christmas Day 1066. Battle Abbey was later founded on the battlefield site, reportedly on the spot where Harold fell.'
    ]}
  ]},
  agincourt: { sections: [
    { title: 'Overview', paragraphs: [
      'Agincourt (Azincourt) in northern France was the site of the Battle of Agincourt on 25 October 1415, where Henry V of England defeated a much larger French force commanded by Charles d\'Albret during the Hundred Years\' War.',
      'The battle became one of the defining military events of the fifteenth century and shaped English memory of the war.'
    ]},
    { title: 'The battle', paragraphs: [
      'Henry V\'s army was exhausted, depleted by dysentery, and outnumbered when the battle began. The French cavalry advance across muddy terrain into concentrated English archery created catastrophic losses among the French nobility. Thousands of French prisoners were killed during the battle.',
      'The French dead included Charles d\'Albret and many of France\'s leading nobles. Henry\'s victory led to the Treaty of Troyes in 1420, which recognized him as heir to the French throne, though the agreement collapsed after his death in 1422.'
    ]}
  ]},
  aachen: { sections: [
    { title: 'Overview', paragraphs: [
      'Aachen was the primary palace complex and ritual center of Charlemagne\'s Frankish empire, and the site of German royal coronations throughout the medieval period. Charlemagne built his palace there from the 790s and died at Aachen in 814.',
      'The Palatine Chapel, consecrated around 805 and still standing, was the finest example of Carolingian architecture in western Europe and became Charlemagne\'s burial place.'
    ]},
    { title: 'Imperial coronations and medieval legacy', paragraphs: [
      'After Charlemagne\'s reign, Aachen became the traditional site for the coronation of German kings. From the tenth through sixteenth centuries, most German rulers were crowned in Aachen before receiving the imperial crown in Rome.',
      'Charlemagne\'s canonization in 1165 transformed Aachen into an imperial shrine. Its cathedral treasury accumulated relics through royal patronage, and Aachen\'s symbolic importance shaped German imperial ideology throughout the medieval period.'
    ]}
  ]},
  tours: { sections: [
    { title: 'Overview', paragraphs: [
      'Tours in the Loire valley was a major center of Frankish religious and political life. The shrine of Saint Martin of Tours drew pilgrims from across early medieval Europe and gave the city religious prestige throughout the Carolingian period.',
      'The area around Tours was the site of the Battle of Tours (also called the Battle of Poitiers) in 732, where Charles Martel halted the northward advance of a Umayyad force from al-Andalus.'
    ]},
    { title: 'Historical significance', paragraphs: [
      'Saint Martin of Tours, bishop in the fourth century, was among the most venerated saints in the Latin West. The basilica built over his tomb became one of the most important pilgrimage sites in medieval France, shaping Merovingian and Carolingian religious practice.',
      'The Battle of Tours in 732 is remembered primarily in retrospective Western historiography as a turning point against Muslim expansion into Europe. Charles Martel defeated the force of Abd al-Rahman al-Ghafiqi, who was killed in the fighting, but it was one of several Frankish engagements against Umayyad incursions rather than a single decisive confrontation.'
    ]}
  ]},
  poitiers: { sections: [
    { title: 'Overview', paragraphs: [
      'Poitiers was the ducal center of Aquitaine and one of the most important cities in medieval western France. Its connection to Eleanor of Aquitaine made it a focal point of Angevin power in the twelfth century.',
      'The region also lent its name to two separate medieval battles: the 732 engagement sometimes called Poitiers and the Black Prince\'s victory over John II of France in 1356.'
    ]},
    { title: 'Historical significance', paragraphs: [
      'As the administrative center of Aquitaine, Poitiers passed between French and English control during the prolonged Angevin-Capetian conflict. Eleanor of Aquitaine\'s court there was associated with troubadour culture.',
      'The Battle of Poitiers in 1356 saw Edward the Black Prince defeat and capture John II of France, one of the most consequential French royal captivities of the Hundred Years\' War. John\'s captivity produced the Treaty of Brétigny in 1360 and a massive ransom demand that strained French finances for years.'
    ]}
  ]},
  oxford: { sections: [
    { title: 'Overview', paragraphs: [
      'Oxford in England was both a royal residence and the site of one of the earliest universities in northern Europe. Beaumont Palace, outside the medieval walls, was the birthplace of Richard the Lionheart in 1157.',
      'The University of Oxford developed from scholarly communities in the twelfth century, growing rapidly after English scholars were expelled from Paris in 1167.'
    ]},
    { title: 'Historical significance', paragraphs: [
      'Oxford\'s medieval university became central to English ecclesiastical and intellectual life by the thirteenth century. The Provisions of Oxford in 1258 — a reform document forced on Henry III by the barons — took their name from the city and represent an early attempt to institutionalize parliamentary governance in England.',
      'The university\'s role in theology and the Wycliffite reform movement made Oxford a site of intellectual controversy in the fourteenth and fifteenth centuries.'
    ]}
  ]},
  rouen: { sections: [
    { title: 'Overview', paragraphs: [
      'Rouen was the capital of the Duchy of Normandy and one of the most important cities in medieval France. As a major river port on the Seine, it was central to Norman economic and administrative power from the ninth century onward.',
      'Rouen is especially remembered as the site of Joan of Arc\'s trial and execution in 1431 and as the place where William the Conqueror died in 1087.'
    ]},
    { title: 'Historical significance', paragraphs: [
      'Under Norman ducal rule and later under English Lancastrian control during the Hundred Years\' War, Rouen served as the effective capital of northern France in English hands. Henry V\'s siege of Rouen in 1418–1419 lasted months before the city surrendered.',
      'The ecclesiastical trial of Joan of Arc at Rouen in 1430–1431 — conducted under English political control and presided over by Bishop Pierre Cauchon — resulted in her condemnation and execution by burning on 30 May 1431. A rehabilitation inquiry in 1456 overturned the conviction.'
    ]}
  ]},
  falaise: { sections: [
    { title: 'Overview', paragraphs: [
      'Falaise in Normandy was a major ducal castle site and the traditional birthplace of William the Conqueror in 1027 or 1028. William was born there as the illegitimate son of Robert I, Duke of Normandy.',
      'The castle controlled a strategically important position in central Normandy and remained significant throughout the Norman and Angevin period.'
    ]},
    { title: 'Historical significance', paragraphs: [
      'Falaise Castle remained an important Norman stronghold through the twelfth century. Philip II of France besieged and captured it in 1204 during his systematic conquest of Normandy from King John, ending English Plantagenet control of the duchy.',
      'The castle\'s association with William the Conqueror made it a symbol of the Norman legacy that shaped English kingship.'
    ]}
  ]},
  domremy: { sections: [
    { title: 'Overview', paragraphs: [
      'Domrémy in the Meuse valley of northeastern France was the village where Joan of Arc was born around 1412. The village sat near the disputed frontier between French-controlled and Burgundian territory during the Hundred Years\' War.',
      'Joan later described receiving her first visions at Domrémy around the age of thirteen, hearing the voices of Saint Michael, Saint Catherine, and Saint Margaret directing her to support the French crown.'
    ]},
    { title: 'Historical significance', paragraphs: [
      'Domrémy\'s borderland position — at the edge of Lorraine and near territories contested between the Armagnac and Burgundian factions — shaped the political and military world Joan encountered in her youth. Local raiding and displacement were realities for village communities in this region.',
      'After Joan\'s canonization in 1920, the village was renamed Domrémy-la-Pucelle. During Joan\'s medieval life it was a modest rural village with no particular distinction beyond its proximity to frontier instability.'
    ]}
  ]},
  tikrit: { sections: [
    { title: 'Overview', paragraphs: [
      'Tikrit is a city on the Tigris in northern Mesopotamia associated with the family of Saladin. Saladin was born there around 1137 while his father Najm ad-Din Ayyub served as its governor.',
      'The city sits on an important river crossing and was part of the contested frontier zone between Abbasid and Seljuk spheres of control in the twelfth century.'
    ]},
    { title: 'Historical significance', paragraphs: [
      'Saladin\'s family — the Ayyubids — were Kurdish military commanders who rose through Zengid service. His father and uncle Shirkuh both served Imad ad-Din Zengi and Nur ad-Din before Saladin\'s own rise to prominence in Egypt.',
      'Tikrit represents the provincial military world of the Jazira (Upper Mesopotamia) that produced the commanders who eventually countered crusader power in the late twelfth century.'
    ]}
  ]},
  'bermersheim-vor-der-hoehe': { sections: [
    { title: 'Overview', paragraphs: [
      'Bermersheim vor der Höhe in the Rhineland is traditionally identified as the birthplace of Hildegard of Bingen, born around 1098. Hildegard was offered as an oblate to the church by her noble family and placed with the anchoress Jutta of Sponheim at Disibodenberg monastery.'
    ]},
    { title: 'Historical significance', paragraphs: [
      'The Rhineland context of Hildegard\'s birth placed her within the network of reform monasticism that characterized German ecclesiastical culture in the eleventh and twelfth centuries. Her later achievements as abbess, visionary, composer, and theological correspondent far exceeded anything that could be predicted from this rural background.',
      'Bermersheim is historically significant primarily as the starting point of Hildegard\'s biography; the village has no broader medieval importance independent of her birth there.'
    ]}
  ]},
  clermont: { sections: [
    { title: 'Overview', paragraphs: [
      'Clermont in the Auvergne was the site of the Council of Clermont in November 1095, at which Pope Urban II delivered the sermon that launched the First Crusade. The council\'s call to arms — to recover Jerusalem and assist eastern Christians — was one of the most consequential ecclesiastical decisions in medieval history.'
    ]},
    { title: 'The Council of Clermont', paragraphs: [
      'The council opened on 18 November 1095. Urban addressed clergy inside the cathedral, but the response to his crusading appeal was so large that the public session was held in a field outside the city. The assembled crowd responded with cries of "Deus vult" (God wills it), which became the crusade\'s watchword.',
      'Five contemporary accounts of Urban\'s sermon survive, but they differ substantially in their details. None is verbatim; all were written after the First Crusade\'s outcome was known, which colored their reconstruction of Urban\'s words. The appeal combined penitential pilgrimage, liberation of the Holy Sepulchre, and assistance to Byzantine Emperor Alexios I Komnenos.'
    ]}
  ]},
  acre: { sections: [
    { title: 'Overview', paragraphs: [
      'Acre (Akko) was the most important port city of the Crusader States and the effective capital of the Kingdom of Jerusalem after the loss of Jerusalem itself in 1187. It remained the last major crusader stronghold in the Holy Land until its fall to the Mamluks in 1291.',
      'Its harbor made it the primary point of connection between the crusader kingdoms and western Europe throughout the twelfth and thirteenth centuries.'
    ]},
    { title: 'Historical significance', paragraphs: [
      'Acre was besieged and taken by the armies of the Third Crusade in 1191 after a two-year siege. Richard I of England and Philip II of France both participated in its capture. Richard\'s execution of thousands of Muslim prisoners at Acre remains among the most contested military decisions of the crusades.',
      'After 1191, Acre became the de facto capital of a reduced kingdom and the administrative center of the Hospitallers and Templars. The Mamluk siege and conquest of Acre in 1291, in which the defenders were massacred or enslaved, ended organized crusader presence in the Holy Land.'
    ]}
  ]},
  damascus: { sections: [
    { title: 'Overview', paragraphs: [
      'Damascus was one of the most important cities in the medieval Islamic world and a key political center in the conflicts between the Crusader States, the Zengid rulers, the Ayyubids, and the Mamluks. Saladin took control of Damascus in 1174 and built the Ayyubid sultanate from it.',
      'The Umayyad Mosque — built in the early eighth century — was one of the most prestigious mosques in the Islamic world.'
    ]},
    { title: 'Historical significance', paragraphs: [
      'Damascus was the capital from which Saladin built the Ayyubid sultanate after inheriting Nur ad-Din\'s Syrian territories. He died in Damascus in 1193, and his tomb in the city remained a place of veneration.',
      'The Second Crusade\'s failed siege of Damascus in 1148 — a strategic blunder that alienated the city\'s rulers and helped push them toward alliance with Zengi and then Nur ad-Din — is often cited as a turning point that undermined crusader influence in Syria.'
    ]}
  ]},
  london: { sections: [
    { title: 'Overview', paragraphs: [
      'London was the commercial and administrative center of England throughout the medieval period. Westminster developed as the primary governmental site from the eleventh century, while London proper was the center of trade and finance.',
      'Its position on the Thames made London the principal English port and the center of the wool trade, cloth export, and financial activity that funded English warfare and administration.'
    ]},
    { title: 'Historical significance', paragraphs: [
      'The Tower of London, begun by William the Conqueror after 1066, served as fortress, prison, treasury, and royal residence. London Bridge — rebuilt in stone in the twelfth century — was the only Thames crossing in the medieval city.',
      'London\'s civic power was substantial enough that its cooperation or resistance could determine the outcome of succession crises. Stephen of Blois\'s support from London in 1135 and Henry Bolingbroke\'s acceptance by the city in 1399 both illustrate how London\'s political position mattered at moments of dynastic contest.'
    ]}
  ]},
  paris: { sections: [
    { title: 'Overview', paragraphs: [
      'Paris was the primary royal capital of the French Capetian and Valois dynasties and the largest city in medieval western Europe by the thirteenth century. The University of Paris, developing from cathedral schools in the twelfth century, became the premier center of scholastic theology and philosophy in Europe.',
    ]},
    { title: 'Historical significance', paragraphs: [
      'Philip II Augustus transformed Paris during his reign, paving its streets, building the Louvre as a fortress, and expanding royal administration. The construction of Notre-Dame Cathedral — begun in 1163 — and the royal palace on the Île de la Cité made Paris the ceremonial and governmental center of French kingship.',
      'During the Hundred Years\' War, Paris was held by English and Burgundian forces from 1419 to 1436. Joan of Arc\'s unsuccessful assault on the city in 1429 and its eventual recovery by Charles VII in 1436 were central episodes in the war\'s later phase.'
    ]}
  ]},
  rome: { sections: [
    { title: 'Overview', paragraphs: [
      'Rome was the seat of the papacy and the symbolic center of Latin Christendom throughout the medieval period. The Lateran Palace was the primary papal residence until the papacy\'s relocation to Avignon in 1309.',
      'Saint Peter\'s Basilica was the site of major imperial coronations, including Charlemagne\'s in 800 and the later German emperors\' crown-receivings from the pope.'
    ]},
    { title: 'Historical significance', paragraphs: [
      'Charlemagne\'s coronation by Pope Leo III at Saint Peter\'s on Christmas Day 800 was the defining moment of medieval Roman imperial ideology, creating a western emperor to rival Byzantium and binding the Carolingian and papal projects together — while also creating lasting tensions over relative authority.',
      'The struggle between popes and Holy Roman Emperors over investiture and political authority — most acute during the Investiture Controversy — repeatedly made Rome the symbolic terrain of conflict. Pope Gregory VII\'s confrontation with Henry IV culminated in the Walk to Canossa in 1077 and Henry\'s eventual siege of Rome.'
    ]}
  ]},
  antioch: { sections: [
    { title: 'Overview', paragraphs: [
      'Antioch (modern Antakya in Turkey) was one of the major cities of the late antique and medieval world and the center of the Principality of Antioch, one of the Crusader States established after the First Crusade. It fell to Bohemond of Taranto after a difficult siege in 1098.',
      'Control of Antioch was contested between the crusader principality, the Byzantine Empire, the Armenians of Cilicia, and various Muslim powers throughout the twelfth and thirteenth centuries.'
    ]},
    { title: 'Historical significance', paragraphs: [
      'The siege of Antioch in 1097–1098 was among the most difficult operations of the First Crusade. After the city fell, the crusaders were themselves besieged by a Seljuk relief army under Kerbogha. The reported discovery of the Holy Lance and Bohemond\'s tactical leadership at the Battle of Antioch in 1098 broke the siege.',
      'Antioch fell to the Mamluk sultan Baybars in 1268, who destroyed much of the city. Its fall ended the Principality of Antioch and was one of the events that marked the progressive collapse of crusader presence in the Levant.'
    ]}
  ]},
  // Scandinavian stubs
  jelling: { sections: [
    { title: 'Overview', paragraphs: [
      'Jelling in central Jutland was one of the most important royal sites in Viking Age Denmark. The Jelling stones — two large runestones erected by Gorm the Old and Harald Bluetooth — are among the most significant monuments of Scandinavian early medieval history.',
      'Harald Bluetooth\'s larger stone, raised around 965, declares the Christianization of Denmark and is often called "Denmark\'s birth certificate."'
    ]},
    { title: 'Legacy', paragraphs: [
      'The Jelling complex includes two burial mounds, a church, and the two runestones. Gorm the Old\'s mound and Harald\'s monument together mark the transition from pagan Norse kingship to Christian Danish kingship. The site is a UNESCO World Heritage Site and remains the primary archaeological expression of early Danish royal identity.'
    ]}
  ]},
  vordingborg: { sections: [
    { title: 'Overview', paragraphs: [
      'Vordingborg on the southern tip of Zealand was one of medieval Denmark\'s most important royal fortresses, guarding sea routes between Denmark and Germany. Valdemar I of Denmark died there in 1182 after a reign that consolidated Danish royal power across Scandinavia.'
    ]},
    { title: 'Legacy', paragraphs: [
      'The castle at Vordingborg remained a major administrative and military center through the Valdemar dynasty. Valdemar IV Atterdag undertook significant construction there in the fourteenth century, making it one of the largest medieval fortifications in Scandinavia.'
    ]}
  ]},
  ribe: { sections: [
    { title: 'Overview', paragraphs: [
      'Ribe in southwestern Jutland was one of the earliest urban and market centers in Scandinavia, developing as a trading site in the early eighth century. Denmark\'s oldest surviving city, it also became an early episcopal center during Scandinavian Christianization.'
    ]},
    { title: 'Legacy', paragraphs: [
      'Ribe\'s early bishopric, established in the ninth century, made it a center of Christian mission in Scandinavia. Ansgar, the "Apostle of the North," used it as an access point for missionary activity. Its role as both a commercial and ecclesiastical center made it important in the formation of the Danish church and urban network.'
    ]}
  ]},
  finderup: { sections: [
    { title: 'Overview', paragraphs: [
      'Finderup in central Jutland became infamous as the site of the murder of Eric V of Denmark on 22 November 1286. Eric was killed in his bed by noble conspirators, one of the most politically significant assassinations in medieval Danish history.'
    ]},
    { title: 'Legacy', paragraphs: [
      'Eric\'s murder at Finderup remained officially unsolved, though Marshal Stig Andersen was widely blamed and forced into exile. The killing reflected deep conflict between the Danish crown and the aristocracy over royal authority and noble privilege. The fallout shaped Danish constitutional conflict for a generation.'
    ]}
  ]},
  'gurre-castle': { sections: [
    { title: 'Overview', paragraphs: [
      'Gurre Castle in northern Zealand was a significant Danish royal hunting and administrative castle. Valdemar IV Atterdag, who died there in 1375, was especially associated with the castle.'
    ]},
    { title: 'Legacy', paragraphs: [
      'Valdemar IV\'s death at Gurre Castle ended one of the most consequential Danish reigns of the fourteenth century. His passing opened the succession that brought his daughter Margaret I to effective rule over Denmark and, eventually, all three Scandinavian kingdoms.'
    ]}
  ]},
  helsingborg: { sections: [
    { title: 'Overview', paragraphs: [
      'Helsingborg was a strategically vital Danish fortified town on the Sound, controlling the narrowest crossing between Scania and Zealand. Christopher of Bavaria died suddenly there in 1448 without an heir.'
    ]},
    { title: 'Legacy', paragraphs: [
      'Christopher\'s death at Helsingborg reopened the Scandinavian succession and led to the election of Christian I as the first Oldenburg king of Denmark. The town\'s position on the Sound made it economically and militarily significant throughout the conflict over Hanseatic and Danish maritime dominance.'
    ]}
  ]},
  copenhagen: { sections: [
    { title: 'Overview', paragraphs: [
      'Copenhagen developed from a fishing village and episcopal center into the primary seat of Danish royal power during the later medieval period. Its natural harbor on the Øresund made it an increasingly important commercial and administrative center from the twelfth century.'
    ]},
    { title: 'Legacy', paragraphs: [
      'Christian I\'s residence and death at Copenhagen Castle in 1481 reflects the city\'s role as the center of Oldenburg dynastic rule. By the late fifteenth century Copenhagen had displaced older centers like Roskilde as the effective political capital, a position it has held continuously.'
    ]}
  ]},
  schlei: { sections: [
    { title: 'Overview', paragraphs: [
      'The Schlei is a fjord in Schleswig defining the southern boundary of the Danish peninsula near the historic town of Schleswig. The region was historically contested between Danish royal authority and German imperial influence.'
    ]},
    { title: 'Legacy', paragraphs: [
      'The Schleswig corridor where the Schlei sits was the focus of repeated political and military conflict between Denmark and the Duchy of Holstein. Margaret I\'s operations in the region during the 1380s and 1390s reflected her effort to stabilize the southern border of Danish power as she consolidated the Kalmar Union.'
    ]}
  ]},
  rugenwalde: { sections: [
    { title: 'Overview', paragraphs: [
      'Rugenwalde (modern Darłowo) was a Pomeranian coastal town on the Baltic where Eric of Pomerania, deposed from the Scandinavian crowns, spent his final decades ruling Pomeranian territories.'
    ]},
    { title: 'Legacy', paragraphs: [
      'Eric of Pomerania\'s death at Rugenwalde in 1459 ended the Pomeranian dynasty\'s connection to Nordic kingship. He had been deposed from all three Scandinavian crowns by the 1440s and returned to govern his ancestral territories, where his legacy was primarily local rather than Scandinavian.'
    ]}
  ]},
  'nykobing-falster': { sections: [
    { title: 'Overview', paragraphs: [
      'Nykobing Falster on the island of Falster was a Danish royal town and administrative center. As a crown possession, it served several Danish rulers and had administrative significance within the Danish archipelago.'
    ]},
    { title: 'Legacy', paragraphs: [
      'Nykobing Falster\'s medieval significance lies primarily in its connection to Danish royal itinerary. The town\'s island position on Falster placed it within the chain of Danish island territories that crown rulers managed as part of their peripatetic governance of the realm.'
    ]}
  ]},
  lambeth: { sections: [
    { title: 'Overview', paragraphs: [
      'Lambeth on the south bank of the Thames opposite Westminster was the primary residence of the Archbishop of Canterbury in London. Lambeth Palace was established as the archiepiscopal seat by the late twelfth century.'
    ]},
    { title: 'Legacy', paragraphs: [
      'Lambeth Palace became the center of archiepiscopal administration in England. Its position directly across from Westminster gave it political proximity to English governance and made it the institutional location of church-crown negotiations throughout the medieval period.'
    ]}
  ]},
  rogaland: { sections: [
    { title: 'Overview', paragraphs: [
      'Rogaland on Norway\'s southwestern coast was a key region in the unification of Norway. The Battle of Hafrsfjord, traditionally dated to around 872, brought Rogaland\'s petty kingdoms under centralized Norwegian rule and is associated with the beginning of Harald Fairhair\'s unified kingship.'
    ]},
    { title: 'Legacy', paragraphs: [
      'The Hafrsfjord battle and Rogaland\'s subjugation became foundation narratives of Norwegian kingship, though the date and scale are disputed in modern scholarship. The region\'s fertile land and fjord access made it one of the wealthiest agricultural and maritime areas of western Norway.'
    ]}
  ]},
  stainmore: { sections: [
    { title: 'Overview', paragraphs: [
      'Stainmore is a Pennine pass between Yorkshire and Cumbria in northern England. Eric Bloodaxe, the last Norse king of York, was killed there around 954 in ambush, traditionally attributed to Northumbrian interests acting in concert with the English crown.'
    ]},
    { title: 'Legacy', paragraphs: [
      'Eric\'s death at Stainmore ended Viking kingship in northern England. His killing allowed Eadred of England to consolidate control over Northumbria and ended the alternating English and Norse royal authority over York that had characterized the 870s–950s.'
    ]}
  ]},
  fitjar: { sections: [
    { title: 'Overview', paragraphs: [
      'Fitjar on the island of Stord in western Norway was the site of the Battle of Fitjar around 961, where Haakon the Good of Norway defeated a Danish force but received wounds from which he died shortly afterward.'
    ]},
    { title: 'Legacy', paragraphs: [
      'Haakon\'s death at Fitjar was commemorated in Hákonarmál, a skaldic poem praising his reception into Valhalla — notable given his role as an early Christian king of Norway. The battle\'s outcome and his death at the moment of victory gave Fitjar an elegiac significance in Norwegian royal memory.'
    ]}
  ]},
  svolder: { sections: [
    { title: 'Overview', paragraphs: [
      'Svolder was the site of a major naval battle around 1000 where Olaf Tryggvason of Norway was defeated and killed by a coalition of Danish, Swedish, and Norwegian forces loyal to Sweyn Forkbeard of Denmark. The exact location remains disputed among scholars.'
    ]},
    { title: 'Legacy', paragraphs: [
      'Olaf Tryggvason\'s death at Svolder — leaping into the sea from his flagship Long Serpent rather than surrendering — became one of the most celebrated episodes in Norse tradition, depicted in several sagas and skaldic poems. His defeat ended Norwegian independence for over a decade, with Denmark and Sweden dividing control of Norway.'
    ]}
  ]},
  stiklestad: { sections: [
    { title: 'Overview', paragraphs: [
      'Stiklestad in Trøndelag was the site of the Battle of Stiklestad on 29 July 1030, where King Olaf II Haraldsson of Norway was killed fighting to reclaim his throne from Cnut the Great and his Norwegian allies.'
    ]},
    { title: 'Legacy', paragraphs: [
      'Olaf\'s death at Stiklestad transformed a military defeat into a royal martyrdom. Reports of miracles at his burial site at Nidaros led to his canonization in 1031, making him the patron saint of Norway. Stiklestad became a pilgrimage site, and Saint Olaf\'s cult shaped Norwegian royal ideology and Christian identity for centuries.'
    ]}
  ]},
  ulster: { sections: [
    { title: 'Overview', paragraphs: [
      'Ulster, the northern Irish province, was the site where Magnus Barefoot of Norway was killed in 1103 during a campaign to extend Norwegian power in the Irish Sea region. His death ended Norwegian royal adventurism in Ireland.'
    ]},
    { title: 'Legacy', paragraphs: [
      'Magnus Barefoot\'s campaigns in Scotland, Man, and Ireland represent the last phase of active Norwegian royal involvement in the Irish Sea world. After his death in Ulster, Norwegian influence in the region declined, though Orkney and the Western Isles remained under Norwegian sovereignty until the later medieval period.'
    ]}
  ]},
  hustad: { sections: [
    { title: 'Overview', paragraphs: [
      'Hustad in Møre og Romsdal on the Norwegian coast was where Øystein I of Norway died in 1123, before his co-ruling brother Sigurd the Crusader. His death ended the cooperative joint reign that had characterized Norwegian kingship during the brothers\' shared rule.'
    ]},
    { title: 'Legacy', paragraphs: [
      'Øystein I is remembered for domestic building projects — roads, harbors, and churches — during his reign alongside Sigurd, contrasting with Sigurd\'s crusading campaigns. His death at Hustad left Sigurd as sole ruler and set the conditions for the succession instability that followed Sigurd\'s own death in 1130.'
    ]}
  ]},
  bergen: { sections: [
    { title: 'Overview', paragraphs: [
      'Bergen was the most important city in medieval Norway and the primary seat of Norwegian royal power from the twelfth century onward. Founded by Olaf Kyrre around 1070, it grew into a major Hanseatic trading port and the administrative capital of the Norwegian realm.'
    ]},
    { title: 'Legacy', paragraphs: [
      'Bergen served as the base of Sverre Sigurdsson during the civil wars of the late twelfth century and as the center of Norwegian administration through the high medieval period. The Hanseatic Bryggen — German merchant warehouses on Bergen\'s wharf — made the city a conduit between Norwegian fish exports and European markets, shaping its commercial importance for centuries.'
    ]}
  ]},
  kirkwall: { sections: [
    { title: 'Overview', paragraphs: [
      'Kirkwall is the main town of Orkney, then under Norwegian sovereignty, and the site where Haakon IV Haakonsson of Norway died in December 1263 after the western campaign that followed the Battle of Largs. His death there ended Norwegian ambitions to reassert control over the Scottish islands.'
    ]},
    { title: 'Legacy', paragraphs: [
      'Haakon IV\'s death at Kirkwall and his body\'s return to Bergen for burial marked the beginning of a process that ended Norwegian sovereignty over Orkney and Shetland. The Treaty of Perth in 1266 transferred the Hebrides and Man to Scotland. Orkney and Shetland remained Norwegian until 1468–1469, when they were pledged to Scotland as dowry.'
    ]}
  ]},
  tonsberg: { sections: [
    { title: 'Overview', paragraphs: [
      'Tonsberg on the Oslofjord was one of Norway\'s oldest and most important royal towns. Haakon V Magnusson died there in 1319 without a male heir, leading Norway into a personal union with Sweden under the infant Magnus Eriksson.'
    ]},
    { title: 'Legacy', paragraphs: [
      'Tonsberg\'s importance as a royal administrative center dated from the high medieval period; several Norwegian kings held court and died there. Haakon V\'s death ending the separate Norwegian Haakonssonline meant Norwegian political identity had to be maintained within a union framework increasingly dominated by Swedish dynastic interests.'
    ]}
  ]},
  falsterbo: { sections: [
    { title: 'Overview', paragraphs: [
      'Falsterbo on the Scanian coast (then part of Denmark) was one of the most commercially significant seasonal markets in the Baltic region, dominated by the Hanseatic League\'s herring trade. Olaf IV of Norway died there suddenly in 1387.'
    ]},
    { title: 'Legacy', paragraphs: [
      'Olaf IV\'s unexpected death at Falsterbo — he was only about seventeen — created the succession crisis that Margaret I exploited to consolidate her position as ruler of Denmark, Norway, and eventually Sweden. The Kalmar Union, which she engineered in 1397, was the direct political consequence of Olaf\'s death at Falsterbo.'
    ]}
  ]},
  alvastra: { sections: [
    { title: 'Overview', paragraphs: [
      'Alvastra was a Cistercian monastery in Östergötland, founded in 1143 as one of the first Cistercian houses in Sweden. It was established under royal and noble patronage and became an important center of religious and political life.'
    ]},
    { title: 'Legacy', paragraphs: [
      'Sverker I of Sweden was associated with Alvastra and was buried there after his murder in 1156. The monastery\'s Cistercian connection also made it significant for Birgitta of Sweden in the fourteenth century, who received visions near Alvastra that became foundational to her spiritual biography.'
    ]}
  ]},
  uppsala: { sections: [
    { title: 'Overview', paragraphs: [
      'Uppsala was medieval Sweden\'s foremost religious and ceremonial center. An archbishopric was established there in 1164, making it the seat of the Swedish church. Uppsala\'s cathedral became the site of royal burials and archiepiscopal authority throughout the medieval period.'
    ]},
    { title: 'Legacy', paragraphs: [
      'Eric IX of Sweden was killed at Uppsala in 1160, reportedly after Mass, by a Danish-backed rival. His cult as a royal martyr made Uppsala the center of Swedish royal sainthood, and his tomb in the cathedral became a pilgrimage site. Uppsala\'s combination of royal martyrdom, archiepiscopal authority, and later university made it the symbolic capital of Swedish Christian identity.'
    ]}
  ]},
  gestilren: { sections: [
    { title: 'Overview', paragraphs: [
      'Gestilren in Västergötland was the site of the Battle of Gestilren in 1210, where Sverker II of Sweden was killed by forces supporting the rival Erik line. The battle settled one phase of the prolonged dynastic conflict between the Sverker and Erik families.'
    ]},
    { title: 'Legacy', paragraphs: [
      'Gestilren effectively ended the Sverker line\'s claim to Swedish kingship after Sverker II\'s death in battle. Erik Knutsson became king afterward, though Swedish dynastic stability remained fragile. The battle is one of several engagements that punctuated the century-long alternation of power between the two rival dynasties.'
    ]}
  ]},
  'nas-castle': { sections: [
    { title: 'Overview', paragraphs: [
      'Nas Castle was a Swedish royal fortress on the island of Visingsö in Lake Vättern, serving as an important administrative residence for medieval Swedish kings. Erik Knutsson died there in 1216, leaving a young heir and prolonging Swedish dynastic instability.'
    ]},
    { title: 'Legacy', paragraphs: [
      'Visingsö and its castle remained a Swedish royal center through the thirteenth century before declining in importance as Stockholm grew. Nas Castle\'s connection to the Erik-Sverker dynastic conflict makes it a site of the contested Swedish succession that characterized the period.'
    ]}
  ]},
  'nykoping-castle': { sections: [
    { title: 'Overview', paragraphs: [
      'Nyköping Castle in Södermanland was the site of the Nyköping Banquet in December 1317, when King Birger of Sweden imprisoned his brothers Valdemar and Erik at a Christmas feast. Their subsequent confinement and death became one of the most infamous episodes of treachery in Swedish royal history.'
    ]},
    { title: 'Legacy', paragraphs: [
      'The Nyköping Banquet destroyed Birger\'s political position. His brothers\' deaths provoked a Swedish noble uprising that deposed him and led to the accession of Magnus Eriksson in 1319. The castle\'s name became synonymous with royal betrayal in Swedish historical memory.'
    ]}
  ]},
  visingso: { sections: [
    { title: 'Overview', paragraphs: [
      'Visingsö is an island in Lake Vättern in Småland that served as a Swedish royal center in the high medieval period. Nas Castle on its northern tip was a primary royal residence and administrative base for several Swedish kings.'
    ]},
    { title: 'Legacy', paragraphs: [
      'Visingsö\'s island position made it defensible and suitable for royal administration during periods of political instability. Its importance declined as Stockholm developed into Sweden\'s primary political center in the fourteenth and fifteenth centuries.'
    ]}
  ]},
  bomlo: { sections: [
    { title: 'Overview', paragraphs: [
      'Bømlo is an island off the Norwegian coast in Hordaland associated with the death of Magnus Eriksson in 1374, traditionally by drowning. Magnus had lost effective rule in both Sweden and Norway years before his death.'
    ]},
    { title: 'Legacy', paragraphs: [
      'Magnus Eriksson\'s drowning near Bømlo closed a reign marked by dynastic ambition, political defeat, and the catastrophic impact of the Black Death on Scandinavian governance. He had been deposed in Sweden in 1364 and effective Norwegian control had passed to his son Haakon VI.'
    ]}
  ]},
  stockholm: { sections: [
    { title: 'Overview', paragraphs: [
      'Stockholm emerged as Sweden\'s primary political center in the later medieval period, growing in importance under Birger Jarl in the 1250s and the Folkung dynasty. Its position at the outlet of Lake Mälaren into the Baltic gave it control of key trade routes.'
    ]},
    { title: 'Legacy', paragraphs: [
      'Charles VIII\'s death in Stockholm in 1470 made the city a focal point of the conflict between Kalmar Union loyalists and Swedish independence advocates in the late fifteenth century. The unresolved tensions around union and Swedish autonomy that defined Stockholm\'s late medieval political significance set the stage for the turbulent decades that followed.'
    ]}
  ]},
  mecklenburg: { sections: [
    { title: 'Overview', paragraphs: [
      'Mecklenburg was a north German duchy from which Albert of Mecklenburg derived his title. After losing the Swedish throne to forces supporting Margaret I in 1389, Albert returned to Mecklenburg and died there in 1412.'
    ]},
    { title: 'Legacy', paragraphs: [
      'Albert of Mecklenburg\'s expulsion from Sweden ended the Mecklenburg dynasty\'s involvement in Scandinavian politics. The duchy\'s German noble families had provided one strand of the complex dynastic inheritance that made the Baltic region politically interconnected in the late fourteenth century, but Margaret I\'s consolidation excluded foreign dynastic claims from Scandinavian succession.'
    ]}
  ]},
  gascony: { sections: [
    { title: 'Overview', paragraphs: [
      'Gascony was a southwestern French region forming part of the Duchy of Aquitaine and a core territory of English Angevin and Plantagenet rule in France. English dukes of Aquitaine controlled Gascony continuously from the twelfth century until 1453, making it the most durable English continental possession of the high and late medieval period.'
    ]},
    { title: 'Historical significance', paragraphs: [
      'Gascon nobles and mercenary captains played significant roles in English military campaigns throughout the Hundred Years\' War. The Black Prince governed from Bordeaux and used Gascon levies extensively in his campaigns. Gascony\'s wine export trade — the Bordeaux wine trade — was one of the most economically important commercial relationships between England and France in the medieval period.',
      'The final French conquest of Gascony at the Battle of Castillon in 1453, where John Talbot was killed, ended English continental rule and the Hundred Years\' War.'
    ]}
  ]},
  lombardy: { sections: [
    { title: 'Overview', paragraphs: [
      'Lombardy was the most contested region of northern Italy throughout the medieval period, combining wealthy communes, imperial ambitions, and papal politics in repeated conflict. The Lombard League — a coalition of northern Italian cities — confronted Frederick I Barbarossa at the Battle of Legnano in 1176 and forced him to recognize communal autonomy.'
    ]},
    { title: 'Historical significance', paragraphs: [
      'Lombardy\'s medieval political geography was shaped by the conflict between the Holy Roman Emperor\'s claims to Italy and the independence of its cities. Milan, the largest Lombard city, was repeatedly the focus of imperial siege and communal resistance. The region\'s wealth from trade and manufacture made it both a prize and a theater of Italian politics through the thirteenth century.',
      'Lombard merchants and bankers played crucial roles in medieval European credit networks, and the term "Lombard" became synonymous with moneylending across Europe — a reflection of the region\'s commercial dominance.'
    ]}
  ]},
  bursa: { sections: [
    { title: 'Overview', paragraphs: [
      'Bursa in northwestern Anatolia became the first major Ottoman capital after its capture from Byzantine control in 1326 by Orhan I. As the early Ottoman center, it was where the dynasty built its first major mosques, tombs, and administrative foundations before expansion further west and north.'
    ]},
    { title: 'Historical significance', paragraphs: [
      'Bursa\'s capture by the early Ottomans represented a significant step in the reduction of Byzantine territorial control in Anatolia, which had been ongoing since the Seljuk victory at Manzikert in 1071. The city remained an important Ottoman commercial and religious center even after Constantinople became the empire\'s capital in 1453.'
    ]}
  ]},
  prilepac: { sections: [
    { title: 'Overview', paragraphs: [
      'Prilepac was a Serbian fortress locality in the southern Serbian lands traditionally associated with the early life of Prince Lazar Hrebeljanović, who died at the Battle of Kosovo in 1389. The site reflects the geography of Serbian noble power in the fragmented lands that followed Stefan Dušan\'s death.'
    ]},
    { title: 'Legacy', paragraphs: [
      'Prilepac\'s significance in IronCodex is primarily its connection to Prince Lazar\'s biography. The Serbian noble landscape of the mid-fourteenth century — contested fortresses, competing lords, and the looming Ottoman threat — is the context that Prilepac represents.'
    ]}
  ]},
  'senieji-trakai': { sections: [
    { title: 'Overview', paragraphs: [
      'Senieji Trakai (Old Trakai) was an early Lithuanian castle site associated with the Gediminid dynasty, traditionally connected to Vytautas the Great before his career centered on New Trakai and Vilnius. The site represents the early fortification network that supported Gediminid expansion.'
    ]},
    { title: 'Legacy', paragraphs: [
      'Old Trakai declined in importance as New Trakai — built on a lake island — became Vytautas\'s primary residence and symbol of Lithuanian ducal power. The transition from Senieji Trakai to the new castle reflects Vytautas\'s consolidation of Lithuanian political architecture in the period of his greatest power.'
    ]}
  ]},
  swabia: { sections: [
    { title: 'Overview', paragraphs: [
      'Swabia in southwestern Germany was a central duchy of the Holy Roman Empire associated with the Hohenstaufen dynasty. Ulrich von Jungingen, Grand Master of the Teutonic Order who led the order to defeat at Grunwald in 1410, came from the Swabian knightly class.'
    ]},
    { title: 'Legacy', paragraphs: [
      'Swabia\'s importance in IronCodex relates to the background of Teutonic knights and German crusading families whose members brought German noble culture into the Baltic and Prussian frontier. The Swabian connection of Ulrich von Jungingen places his career within the tradition of German knightly service to the military religious orders.'
    ]}
  ]},
  trakai: { sections: [
    { title: 'Overview', paragraphs: [
      'Trakai (New Trakai) was the primary residence and symbol of power for Vytautas the Great, Grand Duke of Lithuania. The castle, built on a lake island, was the center of Lithuanian ducal administration in the late fourteenth and early fifteenth centuries.'
    ]},
    { title: 'Legacy', paragraphs: [
      'Vytautas died at Trakai in 1430 shortly before a planned royal coronation that would have made him King of Lithuania, a project blocked by his cousin Jogaila. The castle and its island setting became closely identified with Lithuanian state formation and Gediminid political identity.'
    ]}
  ]},
  quierzy: { sections: [
    { title: 'Overview', paragraphs: [
      'Quierzy (Kiersy) was a Carolingian royal estate on the Oise in northern France, used as a palatial residence and assembly point by Carolingian rulers. The Edict of Quierzy in 877 — in which Charles the Bald formalized arrangements for the heritability of benefices and counties — is the most significant document associated with the site.'
    ]},
    { title: 'Legacy', paragraphs: [
      'The Edict of Quierzy is often cited as a step in the transformation of Carolingian administrative grants into hereditary noble holdings, contributing to the development of feudal structures in late Carolingian France. Whether it was a formal legal turning point or a practical concession is debated, but the estate\'s connection to this document gives Quierzy a defined place in Carolingian institutional history.'
    ]}
  ]},
  cappadocia: { sections: [
    { title: 'Overview', paragraphs: [
      'Cappadocia in central Anatolia was a region of the Byzantine Empire with a distinctive landscape of volcanic tuff cut into cave churches, monasteries, and underground cities. It was a significant source of military manpower and several Byzantine emperors came from Cappadocian military families.'
    ]},
    { title: 'Legacy', paragraphs: [
      'After the Battle of Manzikert in 1071 and the subsequent Seljuk expansion into Anatolia, Cappadocia gradually passed out of Byzantine control. Its cave church complexes — many decorated with Byzantine frescoes — survive as major archaeological evidence of Byzantine Christian culture in Anatolia. Romanos IV Diogenes, defeated at Manzikert, was associated with Cappadocian military traditions.'
    ]}
  ]},
  mantes: { sections: [
    { title: 'Overview', paragraphs: [
      'Mantes (Mantes-la-Jolie) on the Seine in northern France was a fortified town on the disputed frontier between the Capetian royal domain and the Duchy of Normandy. William the Conqueror was wounded or fell ill while sacking the town in 1087 and died at Rouen shortly after.'
    ]},
    { title: 'Legacy', paragraphs: [
      'Mantes marks the terminal episode of William the Conqueror\'s reign. His burning of the town — reportedly triggered by a taunt from Philip I of France — and the injury he received there ended his active military career. The incident reflects the persistent Vexin border conflict between Norman and Capetian power that shaped French-English relations throughout the twelfth century.'
    ]}
  ]},
  harzburg: { sections: [
    { title: 'Overview', paragraphs: [
      'Harzburg was a royal fortress in the Harz Mountains of central Germany. Henry IV built it as a primary Saxon residence in the 1060s; its destruction by Saxon rebels in 1073 contributed to the conditions that led to the Investiture Controversy.',
      'Otto IV, Holy Roman Emperor, died at Harzburg in 1218 after his political defeat and imperial eclipse following the Battle of Bouvines in 1214.'
    ]},
    { title: 'Legacy', paragraphs: [
      'Harzburg thus marks both the beginning and the end of important episodes in German imperial history — Henry IV\'s confrontation with the Saxon nobility and Otto IV\'s final years after losing imperial legitimacy to Frederick II. The two events are separated by nearly 150 years but both reflect the contested nature of royal authority in the German lands.'
    ]}
  ]},
  noyon: { sections: [
    { title: 'Overview', paragraphs: [
      'Noyon in Picardy was a cathedral city in northern France. Charlemagne was crowned King of the Franks at Noyon in 768, and the city remained an episcopal center throughout the medieval period.',
      'Ferdinand of Flanders, captured at Bouvines in 1214 while allied against Philip II of France, died at Noyon in 1233 after years of imprisonment.'
    ]},
    { title: 'Legacy', paragraphs: [
      'Ferdinand\'s long captivity and death at Noyon reflect the political consequences of Bouvines, which cemented Capetian dominance in northern France and left coalition leaders either dead or imprisoned. Noyon\'s connection to both Carolingian coronation and Capetian political aftermath gives it a wide span in medieval French historical memory.'
    ]}
  ]},
  'saleph-river': { sections: [
    { title: 'Overview', paragraphs: [
      'The Saleph (Göksu) River in Cilicia (modern southern Turkey) was the site where Frederick I Barbarossa, Holy Roman Emperor and leader of the German crusade army, drowned in June 1190 while crossing. His death was one of the most consequential events of the Third Crusade.'
    ]},
    { title: 'Legacy', paragraphs: [
      'Frederick\'s drowning at the Saleph devastated the large German crusading force. Much of his army dispersed after his death; only a remnant continued to the Holy Land under his son Frederick of Swabia. The collapse of the German contingent left Richard I of England and Philip II of France as the dominant leaders of the Third Crusade and contributed to its failure to retake Jerusalem.'
    ]}
  ]},
  'gutierre-munoz': { sections: [
    { title: 'Overview', paragraphs: [
      'Gutierre Muñoz in Ávila province was the location where Isabella I of Castile was proclaimed queen in December 1474 following the death of her brother Henry IV. The proclamation was a key moment in establishing her right to the Castilian throne against the rival claim of Juana la Beltraneja.'
    ]},
    { title: 'Legacy', paragraphs: [
      'The succession crisis resolved at Gutierre Muñoz set in motion the union of Castile and Aragon through Isabella\'s marriage to Ferdinand II. The contested nature of her accession and the subsequent War of Castilian Succession (1475–1479) were directly rooted in the disputed circumstances of Henry IV\'s death and Isabella\'s proclamation.'
    ]}
  ]},
  'manor-of-cardross': { sections: [
    { title: 'Overview', paragraphs: [
      'Cardross near the Clyde estuary in Scotland was a royal manor where Robert the Bruce spent his final years and died in June 1329. The manor was his preferred residence during his last period of illness.'
    ]},
    { title: 'Legacy', paragraphs: [
      'Robert\'s death at Cardross ended the reign of the king who had secured Scottish independence through the Declaration of Arbroath (1320) and the Treaty of Edinburgh-Northampton (1328), by which England recognized Scottish sovereignty. His heart was removed after death and taken on crusade by James Douglas, part of a tradition of vow-fulfillment by proxy.'
    ]}
  ]},
  'sheen-palace': { sections: [
    { title: 'Overview', paragraphs: [
      'Sheen Palace (later Richmond Palace) on the Thames in Surrey was a significant English royal residence. Richard II ordered it demolished after the death of his queen, Anne of Bohemia, there in 1394; it was later rebuilt by Henry V.'
    ]},
    { title: 'Legacy', paragraphs: [
      'Sheen\'s destruction by Richard II following Anne\'s death illustrates the personal dimension of royal grief and decision-making in the late fourteenth century. The palace\'s subsequent rebuilding under the Lancastrian kings reflects the continuity of the Thames river corridor as the primary landscape of English royal residence.'
    ]}
  ]},
  westminster: { sections: [
    { title: 'Overview', paragraphs: [
      'Westminster was the primary seat of English royal governance, law, and ceremony throughout the medieval period. Westminster Abbey — the site of coronations and royal burials since 1066 — and the adjacent Palace of Westminster — center of royal administration and from the thirteenth century of parliamentary business — made it the functional capital of English political life.'
    ]},
    { title: 'Historical significance', paragraphs: [
      'William the Conqueror\'s coronation at Westminster Abbey on Christmas Day 1066 set the pattern for English royal coronation that continued unbroken through the medieval period. The Abbey became the burial place of English monarchs, and its association with Edward the Confessor gave it additional religious prestige.',
      'The Palace of Westminster became the site of royal courts, the Exchequer, and Parliament. Simon de Montfort\'s Parliament of 1265 and the Model Parliament of 1295 were both held at Westminster, establishing it as the institutional location of English representative governance.'
    ]}
  ]},
  'nogent-le-roi': { sections: [
    { title: 'Overview', paragraphs: [
      'Nogent-le-Roi in the Eure-et-Loir was a royal estate and small town in the contested landscape between the Capetian royal domain and Normandy. Philip VI of France died there in 1350.'
    ]},
    { title: 'Legacy', paragraphs: [
      'Philip VI\'s death at Nogent-le-Roi closed the first Valois reign — a period defined by the disputed succession that started the Hundred Years\' War, the English victories at Crécy and Calais, and the arrival of the Black Death in 1348. He left John II a kingdom strained by military defeat, financial pressure, and demographic catastrophe.'
    ]}
  ]},
  jalbolung: { sections: [
    { title: 'Overview', paragraphs: [
      'Jalbolung was a medieval location in the Swedish royal geography, connected to events in the dynastic history of thirteenth-century Sweden.'
    ]},
    { title: 'Legacy', paragraphs: [
      'The site\'s significance in IronCodex is as a geographic anchor for events in Swedish royal history during the period of conflict between the Sverker and Erik dynastic lines.'
    ]}
  ]},
}

// ── Apply fixes ───────────────────────────────────────────────────────────────
let removed_hr = 0
let removed_template_sections = 0
let location_content_overrides_count = 0
let duplicate_paras_removed = 0

for (const [col, entries] of Object.entries(data)) {
  if (!Array.isArray(entries)) continue
  for (const article of entries) {
    // 1. Remove historicalReliability field
    if ('historicalReliability' in article) {
      delete article.historicalReliability
      removed_hr++
    }

    // 2. Remove duplicate paragraphs (keep last occurrence in article)
    if (article.contentSections?.length) {
      const seenParas = new Map()
      article.contentSections.forEach((sec, si) => {
        ;(sec.paragraphs || []).forEach(p => {
          if (p && p.trim()) seenParas.set(p, si)
        })
      })
      article.contentSections.forEach((sec, si) => {
        const before = sec.paragraphs?.length || 0
        sec.paragraphs = (sec.paragraphs || []).filter(p => {
          if (!p || !p.trim()) return false
          return seenParas.get(p) === si
        })
        duplicate_paras_removed += before - sec.paragraphs.length
      })
      // Remove now-empty sections
      article.contentSections = article.contentSections.filter(s => s.paragraphs?.length > 0)
    }

    // 3. For locations: remove generic template sections
    if (col === 'locations' && article.contentSections?.length) {
      const before = article.contentSections.length
      article.contentSections = article.contentSections.filter(s => !isSectionTemplate(s))
      removed_template_sections += before - article.contentSections.length
    }

    // 4. Apply location content overrides (after template removal)
    if (col === 'locations') {
      const id = (article.id || article.slug || '').toLowerCase().replace(/\s+/g, '-')
      if (locationContentOverrides[id]) {
        const override = locationContentOverrides[id]
        if (override.sections && override.sections.length > 0) {
          article.contentSections = override.sections
          location_content_overrides_count++
        }
      }
    }
  }
}

// 5. Fix events 'Key figures' filler
const eventKeyFiguresFixes = {
  'fall-of-the-western-roman-empire': 'Romulus Augustulus (last western emperor), Odoacer (Germanic chieftain who deposed him), Zeno of Constantinople (eastern emperor who received the western imperial regalia).',
  'charlemagne-crowned-emperor': 'Charlemagne (Frankish king and new emperor), Pope Leo III (who performed the coronation at Saint Peter\'s), Alcuin of York (Frankish scholar and advisor).',
  'first-crusade-proclaimed': 'Pope Urban II (initiator at Clermont), Alexios I Komnenos (Byzantine emperor whose appeal helped prompt the call), Godfrey of Bouillon, Raymond IV of Toulouse, Bohemond I of Antioch, and Robert Curthose among the principal crusade leaders.',
  'black-death-reaches-europe': 'No single commander directed the Black Death\'s spread. Key contemporary observers include Giovanni Boccaccio in Florence, whose Decameron records the epidemic, and chroniclers at Siena, Avignon, and other affected cities.',
  'third-crusade': 'Richard I of England (led the main crusading effort), Philip II of France (departed early after Acre\'s fall), Frederick I Barbarossa (drowned at the Saleph River before reaching the Holy Land), Saladin (Ayyubid sultan defending Jerusalem), and Conrad of Montferrat (defended Tyre and Acre).',
}

for (const event of (data.events || [])) {
  const id = (event.id || event.slug || '').toLowerCase().replace(/\s+/g, '-')
  if (eventKeyFiguresFixes[id] && event.contentSections) {
    const kfSection = event.contentSections.find(s => s.title?.toLowerCase().includes('key figures'))
    if (kfSection) {
      kfSection.paragraphs = kfSection.paragraphs.filter(p => !/involved rulers, commanders, clerics, nobles/i.test(p))
      kfSection.paragraphs.push(eventKeyFiguresFixes[id])
    }
  }
}

// 6. Fix character 'details are uncertain' filler death entries
for (const char of (data.characters || [])) {
  if (!char.contentSections) continue
  const deathSection = char.contentSections.find(s => s.title?.toLowerCase() === 'death')
  if (!deathSection) continue
  deathSection.paragraphs = deathSection.paragraphs.filter(p => !/^details are uncertain\.?\s*$/i.test(p.trim()))
  if (deathSection.paragraphs.length === 0) {
    char.contentSections = char.contentSections.filter(s => s.title?.toLowerCase() !== 'death')
  }
}

// 7. Fix Dane Axe: add specific terminology note to Design and construction
const daneAxe = (data.weaponsArmor || []).find(w => w.name === 'Dane Axe')
if (daneAxe) {
  const designSection = daneAxe.contentSections?.find(s => s.title === 'Design and construction')
  if (designSection && !designSection.paragraphs.some(p => p.includes('modern') && p.toLowerCase().includes('label'))) {
    designSection.paragraphs.push('The label "Dane axe" is a modern collector\'s and museum term rather than a medieval designation. Surviving sources use terms such as the Norse breiðøx (broad axe) or simply describe a large axe. Surviving axe heads from this period vary considerably in blade width, curve, and socket construction, so the term covers a range of related but not identical objects rather than a single standardized weapon type.')
  }
}

fs.writeFileSync(dataPath, JSON.stringify(data, null, 2))
console.log('Done.')
console.log('historicalReliability fields removed:', removed_hr)
console.log('Location template sections removed:', removed_template_sections)
console.log('Location content overrides applied:', location_content_overrides_count)
console.log('Duplicate paragraphs removed:', duplicate_paras_removed)
