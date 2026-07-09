// Polity audit batch 2: Iberia (Castile, Aragon, Navarre) and France
// (France, Aquitaine, Normandy, Flanders) rewritten to anchor-article depth.
// León and Portugal were handled in the foundations/rewrite scripts.
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

// ── KINGDOM OF CASTILE ──────────────────────────────────────────────────────
patch('kingdom-of-castile', {
  overview: [
    'Castile grew from a fortified frontier county of León — its name from the castles studding the upper Ebro marches — into the largest and most aggressive of the Iberian Christian kingdoms: royal from 1065, permanently united with León from 1230, master of Toledo, Seville, and Córdoba, and the crown whose late medieval union with Aragon created Spain.',
    'Its medieval arc runs from the semi-legendary judge-counts and Fernán González\'s hereditary county, through the Cid\'s century and the great thirteenth-century conquests of Fernando III, to the legalist empire-building of Alfonso X\'s Siete Partidas, the civil war of Peter the Cruel and the Trastámara usurpation of 1369, and the marriage of Isabella of Castile to Ferdinand of Aragon in 1469.'
  ],
  contentSections: [
    { title: 'Overview', paragraphs: [
      'Castile grew from a fortified frontier county of León — its name from the castles studding the upper Ebro marches — into the largest and most aggressive of the Iberian Christian kingdoms: royal from 1065, permanently united with León from 1230, master of Toledo, Seville, and Córdoba, and the crown whose late medieval union with Aragon created Spain.',
      'Its medieval arc runs from the semi-legendary judge-counts and Fernán González\'s hereditary county, through the Cid\'s century and the great thirteenth-century conquests of Fernando III, to the legalist empire-building of Alfonso X\'s Siete Partidas, the civil war of Peter the Cruel and the Trastámara usurpation of 1369, and the marriage of Isabella of Castile to Ferdinand of Aragon in 1469 that pointed past the Middle Ages.'
    ]},
    { title: 'Background and origins', paragraphs: [
      'Castile began in the ninth century as León\'s eastern shield: a land of refugee-settlers, free peasant-warriors, and counts commanding the castle line against Córdoba\'s raiding armies. Count Fernán González (d. 970) made the command hereditary and practically autonomous, and Castilian custom — law spoken by local judges rather than the Gothic code of León — became a badge of the difference.',
      'Kingship came by inheritance politics: Sancho III the Great of Navarre absorbed Castile by marriage, and at his death in 1035 left it to his son Fernando I as a kingdom in embryo; Fernando promptly took León too, and the title "king of Castile" entered permanent use with the partitions among his sons after 1065. From Alfonso VI\'s conquest of Toledo in 1085, Castile\'s centre of gravity — and its claim to lead the Reconquista — sat on the Tagus.'
    ]},
    { title: 'High Middle Ages: from the Cid to Las Navas', paragraphs: [
      'The century after Toledo was frontier war at its most fluid: Almoravid counter-crusade destroying Alfonso VI\'s armies at Sagrajas (1086) and Uclés (1108); the freelance epic of Rodrigo Díaz — El Cid — holding Valencia (1094–1102); the dynastic chaos of Urraca\'s reign; and the long duel of Alfonso VIII with both Almohads and Christian neighbours, from the disaster of Alarcos in 1195 to the redeeming triumph of Las Navas de Tolosa in 1212, won with Aragon and Navarre under a crusading bull.',
      'Fernando III (1217–1252) reunited Castile and León in 1230 and broke Almohad Iberia: Córdoba fell in 1236, Jaén in 1246, Seville after a two-year siege in 1248, leaving only vassal Granada. His son Alfonso X "the Wise" (1252–1284) converted conquest into culture and law — the Siete Partidas, the vernacular chancery, the school of translators at Toledo, the imperial candidacy that drained his treasury — while the mudéjar revolts and noble leagues he provoked set the pattern of late medieval Castilian turbulence.'
    ]},
    { title: 'Late Middle Ages: crisis and Trastámara Castile', paragraphs: [
      'The fourteenth century brought the strait\'s last African war — Alfonso XI\'s great victory at the Salado in 1340 with Portuguese help, and his death of plague besieging Gibraltar in 1350 — then dynastic catastrophe: the civil war of Peter the Cruel and his bastard half-brother Henry of Trastámara, fought with English and French armies inside the Hundred Years\' War (the Black Prince winning Nájera for Peter in 1367, Bertrand du Guesclin\'s companies winning Montiel and the regicide for Henry in 1369).',
      'Trastámara Castile was a great power run by a quarrelsome high nobility: Henry II\'s "mercedes" bought loyalty with alienated royal lands; John I lost Aljubarrota and with it the Portuguese crown in 1385; the long minorities of Henry III and John II handed government to regents and favourites — Álvaro de Luna above all, master of Castile for thirty years until his execution in 1453. Through it all the machinery matured: cortes of the three estates, the audiencia as high court, the hermandades policing the roads, and the wool of the Mesta funding crown and fleet.'
    ]},
    { title: 'Political structure and rule', paragraphs: [
      'Castilian kingship was hereditary, sacral in style, and — by the Partidas\' Roman-law doctrine — theoretically absolute: the king as emperor in his kingdom, source of law and justice. Practice was bargained: the cortes of Castile and León (townsmen present from the twelfth century) voted the servicios taxation and heard grievances; the great magnate houses (Lara and Haro early; Mendoza, Guzmán, Velasco later) and the masters of Santiago, Calatrava, and Alcántara commanded private armies the crown alternately used and fought.',
      'The kingdom\'s administrative signature was the town: hundreds of fuero-chartered concejos with vast frontier territories, urban knight-militias (caballeros villanos) owing cavalry service, and — from Alfonso XI\'s reform of 1348 — royal regidores steering their councils. Royal justice travelled through adelantados and corregidores; the Partidas, given binding force in 1348, made Castile the peninsula\'s great Roman-law monarchy.'
    ]},
    { title: 'Major rulers', paragraphs: [
      'Fernán González, count c. 931–970 — made Castile hereditary and effectively autonomous within León.',
      'Alfonso VI of Castile and León, 1065/1072–1109 — conqueror of Toledo (1085); the Cid\'s difficult sovereign.',
      'Alfonso VIII of Castile, 1158–1214 — survivor of Alarcos and victor of Las Navas de Tolosa (1212).',
      'Fernando III, 1217–1252 — union with León (1230) and the conquests of Córdoba, Jaén, and Seville; canonised in 1671.',
      'Alfonso X the Wise, 1252–1284 — the Siete Partidas, the Toledo translators, the imperial dream and its debts.',
      'Alfonso XI of Castile, 1312–1350 — victor of the Salado (1340), reformer of town government, dead of plague before Gibraltar.',
      'Peter of Castile, 1350–1369 — "the Cruel" to his enemies; his war with the Trastámaras merged into the Hundred Years\' War and ended at Montiel.',
      'Henry II of Castile, 1369–1379 — the usurper-founder of the Trastámara dynasty.',
      'John I of Castile, 1379–1390 — pressed the Portuguese claim to defeat at Aljubarrota (1385).',
      'John II of Castile, 1406–1454 — the long reign of favourites, Álvaro de Luna\'s Castile, and the eve of the Catholic Monarchs.'
    ]},
    { title: 'Wars, battles, and expansion', paragraphs: [
      'Against al-Andalus, Castile\'s ledger carries the Reconquista\'s heaviest entries: Toledo (1085); the Almoravid defeats of Sagrajas and Uclés; Alarcos (1195) and the answering triumph of Las Navas de Tolosa (1212); Fernando III\'s Córdoba (1236) and Seville (1248); the battle of the Salado (1340) closing the African route; and the long tributary supervision of Nasrid Granada that the Middle Ages left unfinished.',
      'Against Christians: the endemic cousin-wars with León until 1230 and with Navarre and Aragon over the Ebro marches; the Castilian civil war of 1366–1369 as a theatre of the Hundred Years\' War — Nájera (1367) and Montiel (1369) — with the fleet Castile then lent France helping win La Rochelle (1372); and the Portuguese adventure broken at Aljubarrota (1385). The fifteenth century\'s wars were mostly internal — leagues, infantes of Aragon, and the Luna decades — until Granada\'s endgame opened after the period\'s close.'
    ]},
    { title: 'Religion, culture, and society', paragraphs: [
      'Castile ran Christendom\'s widest religious frontier: primatial Toledo presiding over a church of crusading orders and frontier bishoprics; the camino francés feeding Burgos and its Gothic cathedral (begun 1221); and, inside the walls, the peninsula\'s largest Jewish and mudéjar populations — protected, taxed, and employed by the crown (Jewish almojarifes ran royal finance for generations) until the pogroms of 1391 broke the equilibrium and mass conversion created the converso question that haunted the fifteenth century.',
      'Its culture made the vernacular a language of state a century before most of Europe: Alfonso X\'s chancery, chronicles, law-books, and Cantigas in Castilian and Galician; the epic of the Cid (c. 1200) at the literature\'s head; the universities of Palencia (c. 1212) and Salamanca (1218) at its schools\'. Society was organised for war and wool: free towns and their mounted commoner-knights, the great sheep-walks of the Mesta chartered in 1273, and a nobility whose fueros of arms the Partidas dressed in Roman law.'
    ]},
    { title: 'Decline, transformation, and legacy', paragraphs: [
      'Castile ended the Middle Ages ascendant, not declining: the Trastámara civil wars resolved into the accession of Isabella of Castile in 1474 and the dynastic union with Aragon that made "Spain"; the crown\'s medieval instruments — cortes, hermandad, corregidores, the Granada crusade, the converso tribunal chartered in 1478 — became the early modern monarchy\'s toolkit; and Castilian, the frontier county\'s dialect, became a world language.',
      'Its medieval legacy is therefore double-edged and enormous: the peninsula\'s political centre of gravity fixed at Toledo-Valladolid-Seville; the legal monarchy of the Partidas underwriting both Spanish absolutism and Spanish-American law; and the habits of a society organised for permanent frontier war carried, within a generation of the period\'s end, across an ocean.'
    ]}
  ],
  knownFor: [
    'From frontier county of León to Iberia\'s dominant crown',
    'Toledo (1085), Las Navas de Tolosa (1212), Córdoba and Seville (1236–1248)',
    'The Siete Partidas — medieval Europe\'s greatest vernacular law code',
    'The Trastámara century and the union with Aragon under Isabella',
    'The Mesta, the cortes, and Castilian as a language of state'
  ],
  timeline: [
    { date: 'c. 931–970', title: 'Fernán González\'s county', description: 'Castile becomes a hereditary, near-autonomous county under its great count.' },
    { date: '1035/1065', title: 'County to kingdom', description: 'Sancho III of Navarre\'s partition seeds a Castilian crown for Fernando I; the royal title fixes under his sons.' },
    { date: '1085', title: 'Conquest of Toledo', description: 'Alfonso VI takes the old Visigothic capital; the Tagus becomes Castile\'s axis.' },
    { date: '1086/1108', title: 'Almoravid shocks', description: 'Sagrajas and Uclés maul the kingdom; the Cid\'s Valencia (1094) is the era\'s counterpoint.' },
    { date: '16 July 1212', title: 'Las Navas de Tolosa', description: 'Alfonso VIII, with Aragon and Navarre, breaks Almohad power in the peninsula.' },
    { date: '1230', title: 'Permanent union with León', description: 'Fernando III inherits both crowns; they never separate again.' },
    { date: '1248', title: 'Seville falls', description: 'The two-year siege completes the great conquests; only Granada remains as a vassal.' },
    { date: '1256–1265', title: 'Siete Partidas drafted', description: 'Alfonso X\'s jurists build the vernacular Roman-law code that later binds all Castile.' },
    { date: '30 October 1340', title: 'Battle of the Salado', description: 'Alfonso XI and Afonso IV of Portugal destroy the last great African invasion.' },
    { date: '1369', title: 'Montiel and the Trastámara usurpation', description: 'Henry II kills Peter the Cruel; the new dynasty rules Castile to the period\'s end.' },
    { date: '14 August 1385', title: 'Aljubarrota', description: 'John I\'s bid for Portugal is destroyed; the western border is confirmed for good.' },
    { date: '1391', title: 'The pogroms', description: 'Anti-Jewish violence sweeps the cities, creating the converso society of the fifteenth century.' },
    { date: '1469/1474', title: 'Isabella and the union', description: 'Isabella\'s marriage to Ferdinand of Aragon and her accession point from Trastámara Castile toward Spain.' }
  ],
  relatedEntries: {
    people: [
      { title: 'Alfonso VIII of Castile', type: 'person', slug: 'alfonso-viii-of-castile', label: 'Victor of Las Navas' },
      { title: 'Peter of Castile', type: 'person', slug: 'peter-of-castile', label: 'The civil war\'s doomed king' },
      { title: 'Henry II of Castile', type: 'person', slug: 'henry-ii-of-castile', label: 'Trastámara founder' },
      { title: 'Isabella of Castile', type: 'person', slug: 'isabella-of-castile', label: 'The union with Aragon' }
    ],
    locations: [
      { title: 'Kingdom of León', type: 'location', slug: 'kingdom-of-leon', label: 'Mother-crown and permanent partner from 1230' },
      { title: 'Kingdom of Portugal', type: 'location', slug: 'kingdom-of-portugal', label: 'The western rival' },
      { title: 'Kingdom of Aragon', type: 'location', slug: 'kingdom-of-aragon', label: 'Rival, ally, and final dynastic partner' }
    ],
    events: [
      { title: 'Battle of Las Navas de Tolosa', type: 'event', slug: 'battle-of-las-navas-de-tolosa', label: 'The peninsular turning point, 1212' },
      { title: 'Battle of Aljubarrota', type: 'event', slug: 'battle-of-aljubarrota', label: 'The Portuguese frontier sealed, 1385' }
    ]
  },
  sources: [
    { title: 'Kingdom of Castile — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Kingdom_of_Castile' },
    { title: 'Spain in the Middle Ages: From Frontier to Empire', author: 'Angus MacKay', type: 'book', note: 'Standard survey of medieval Castile\'s society and politics.' },
    { title: 'The Contest of Christian and Muslim Spain', author: 'Bernard F. Reilly', type: 'book' }
  ]
})

// ── KINGDOM OF ARAGON ───────────────────────────────────────────────────────
patch('kingdom-of-aragon', {
  overview: [
    'Aragon rose from a Pyrenean county to a Mediterranean empire: a kingdom from 1035, joined to Catalonia by the marriage-union of 1137, conqueror of Majorca and Valencia under James I, and by 1300 the naval power whose kings ruled Sicily, Sardinia, and — through the Catalan Company\'s strange adventure — duchies in Greece.',
    'Its constitutional temper set it apart: a federated "Crown of Aragon" of distinct realms, each with its own corts, laws, and famous oath-bound contractualism, whose union with Castile in 1469 built Spain out of two very different medieval monarchies.'
  ],
  contentSections: [
    { title: 'Overview', paragraphs: [
      'Aragon rose from a Pyrenean county to a Mediterranean empire: a kingdom from 1035, joined to Catalonia by the marriage-union of 1137, conqueror of Majorca and Valencia under James I, and by 1300 the naval power whose kings ruled Sicily, Sardinia, and — through the Catalan Company\'s adventure — duchies in Greece.',
      'Its constitutional temper set it apart: a federated "Crown of Aragon" of distinct realms — Aragon, Catalonia, Valencia, Majorca, and the island kingdoms — each with its own corts, laws, and oath-bound contractualism, whose union with Castile in 1469 built Spain out of two very different medieval monarchies.'
    ]},
    { title: 'Background and origins', paragraphs: [
      'Aragon began as a Carolingian-era county on the river of the same name, one of the Pyrenean marches that survived the Muslim conquest in the mountains. Absorbed by Sancho III the Great of Navarre, it passed at his death in 1035 to his son Ramiro I with a royal future: Ramiro and his heirs pushed down from Jaca toward the Ebro, dying on its frontiers — as Sancho Ramírez did before Huesca in 1094.',
      'Two twelfth-century strokes made the kingdom. Alfonso I "the Battler" (1104–1134) took Zaragoza from the Almoravids in 1118, moving the kingdom onto the great river; his childless death left a crisis resolved when his brother, the monk-king Ramiro II, fathered the heiress Petronilla and betrothed her in 1137 to Ramon Berenguer IV, count of Barcelona — the dynastic union of Aragon and Catalonia that created the composite Crown.'
    ]},
    { title: 'High Middle Ages: the conquests of James I', paragraphs: [
      'After the southern check of Muret (1213) — where Peter II, fresh from crusading glory at Las Navas, died fighting the Albigensian crusade of Simon de Montfort and lost Occitania\'s future — the Crown turned seaward. James I "the Conqueror" (1213–1276), in a sixty-three-year reign he narrated himself in the Llibre dels fets, took Majorca in 1229–1231 and Valencia in 1238, creating two new chartered kingdoms; the treaty of Corbeil (1258) traded dead Carolingian claims with France, fixing the Pyrenean line.',
      'His son Peter III answered the Sicilian Vespers\' invitation in 1282, taking Sicily from Charles of Anjou and beating the ensuing French "crusade" at the Col de Panissars — at the price of a papal deposition his realms\' parliaments made him pay for constitutionally. The Privilegio General of 1283 and the union movements it fed made the Crown Europe\'s laboratory of limited monarchy; the era\'s admiral, Roger of Lauria, made its navy the Mediterranean\'s best.'
    ]},
    { title: 'Late Middle Ages: Mediterranean empire and union crisis', paragraphs: [
      'The fourteenth century consolidated an island empire — Sardinia invaded from 1323, Majorca\'s cadet kingdom reabsorbed by Peter IV in 1343–1349, the Sicilian branch reunited by marriage in 1409 — while the Catalan Company, unpaid veterans of the Byzantine wars, seized Athens (1311) and held it under Aragonese princes until 1388. Peter IV "the Ceremonious" broke the Aragonese Union\'s armed constitutionalism at Épila (1348), slashing — chronicle says with his own dagger — the Union\'s privileges, yet ruling thereafter through scrupulously summoned corts and the standing Diputació del General (Generalitat) they created.',
      'The male line\'s end in 1410 brought the Crown\'s most remarkable succession: two years of interregnum settled not by war but by the Compromise of Caspe (1412), nine jurists and clerics electing the Castilian Trastámara Ferdinand I. His son Alfonso V conquered Naples (1442) and moved the court there; his grandson John II fought the Catalan civil war (1462–1472) that exhausted the principality — and married his heir Ferdinand to Isabella of Castile in 1469, the union that closed the medieval Crown\'s independent story.'
    ]},
    { title: 'Political structure and rule', paragraphs: [
      'The Crown of Aragon was a federation under one king: Aragon proper with its fueros and Justicia — the judge-magistrate who stood between king and law; Catalonia with its Usatges and corts; Valencia and Majorca with their own charters. Each realm\'s corts (parliament of nobles, clergy, and towns) voted supply realm by realm, and their standing deputations — the Catalan Generalitat (1359) first — became permanent fiscal-constitutional watchdogs.',
      'The legend of the Aragonese oath — "we, who are worth as much as you, take you as our king, provided you keep our fueros; and if not, not" — is a later formulation, but it codes a real practice: kings bargained, confirmed privileges at accession, and governed the empire through viceroys and consulates of the sea rather than a unitary state. It made the Crown resilient, legalistic, fiscally sophisticated — and, against centralising Castile, constitutionally incompatible in ways that outlasted the Middle Ages.'
    ]},
    { title: 'Major rulers', paragraphs: [
      'Ramiro I, 1035–1063 — first king; turned the Pyrenean county toward the Ebro plains.',
      'Alfonso I the Battler, 1104–1134 — conqueror of Zaragoza (1118); his strange crusader testament nearly gave the kingdom to the military orders.',
      'Ramiro II and Petronilla, 1134–1137/1164 — the monk-king and the child-queen whose betrothal to Barcelona created the composite Crown.',
      'Peter II, 1196–1213 — crusader at Las Navas, dead at Muret defending his Occitan vassals.',
      'James I the Conqueror, 1213–1276 — Majorca and Valencia; the Llibre dels fets; the Corbeil settlement with France.',
      'Peter III the Great, 1276–1285 — Sicily taken after the Vespers; the French crusade repelled; the Privilegio General conceded.',
      'Peter IV the Ceremonious, 1336–1387 — Majorca reannexed, the Union broken at Épila, the Generalitat born.',
      'Ferdinand I of Antequera, 1412–1416 — the Caspe compromise\'s elected Trastámara.',
      'Alfonso V the Magnanimous, 1416–1458 — Naples conquered (1442); the court of the Mediterranean Renaissance.',
      'John II, 1458–1479 — the Catalan civil war; father of Ferdinand the Catholic.'
    ]},
    { title: 'Wars, battles, and expansion', paragraphs: [
      'The Crown\'s battle-roll is Mediterranean: Zaragoza (1118) and Cutanda; Las Navas de Tolosa (1212) in the peninsular coalition; Muret (1213), the Occitan catastrophe; Majorca (1229) and the Valencia campaigns (1232–1245); the Vespers war — Peter III\'s landing (1282), Roger of Lauria\'s naval victories at Malta and the Gulf of Naples, the rout of the French crusade (1285); Sardinia\'s long insurgencies against Arborea; and the Naples wars of Alfonso V, lost at sea at Ponza (1435) and won on land by 1442.',
      'Against Castile the Crown fought the "War of the Two Peters" (1356–1375), Aragon\'s hardest home-front war, absorbing Castilian invasions with scorched frontiers and fortress lines; against France, from Muret to Corbeil to the Panissars, it traded the Occitan dream for Pyrenean security. Its distinctive instrument throughout was the sea: the consulates, the galley fleets, and admirals like Lauria who made "even the fish wear the four bars".'
    ]},
    { title: 'Religion, culture, and society', paragraphs: [
      'The Crown\'s culture was polyglot and mercantile: Catalan as a language of chronicle (Desclot, Muntaner, the royal Llibre dels fets), law (the Consolat de Mar, the Mediterranean\'s commercial code), and mysticism (Ramon Llull\'s vast oeuvre); Aragonese in the fueros; Latin and Hebrew scholarship in Zaragoza, Barcelona, and the call of Girona — home of Nahmanides, summoned to the Barcelona Disputation of 1263 before James I.',
      'Society ranged from Catalonia\'s bound remença peasants (their emancipation a fifteenth-century battleground) to Valencia\'s great mudéjar population working the huertas under royal protection; from the merchant patriciates of Barcelona\'s Consell de Cent to the frontier aristocracy of Aragon proper. The church crusaded, taxed, and litigated with the rest — Poblet and Santes Creus housing the royal tombs, the Templars\' fall (1307–1312) handled with characteristic legalism by transfer to a new order, Montesa, rather than plunder.'
    ]},
    { title: 'Decline, transformation, and legacy', paragraphs: [
      'The fifteenth century weakened the Crown\'s Iberian core even as its Italian crown glittered: plague and the 1391 pogroms hit Barcelona hard; the Caspe dynasty\'s Castilian entanglements and John II\'s Catalan civil war drained the principality; and the 1469 marriage folded the Crown into a dual monarchy where Castile\'s demographic weight told. The realms kept their constitutions inside Spain — until 1707–1716 abolished them, an afterlife that made the medieval fueros a modern political memory.',
      'The medieval legacy is Mediterranean and constitutional: Catalan commercial law and language planted from Valencia to Sicily and Sardinia; the parliamentary-contractual tradition of corts, Justicia, and Generalitat that historians set beside England\'s as Europe\'s most developed; and the four red bars — the Crown\'s ubiquitous emblem — still flying across its old western Mediterranean.'
    ]}
  ],
  knownFor: [
    'Pyrenean county to composite Crown: union with Catalonia (1137)',
    'James I\'s conquests of Majorca (1229) and Valencia (1238)',
    'The Sicilian Vespers inheritance and Mediterranean naval empire',
    'Corts, Justicia, and Generalitat — medieval Europe\'s deepest contractual monarchy',
    'The Compromise of Caspe (1412) and the 1469 union with Castile'
  ],
  timeline: [
    { date: '1035', title: 'Kingdom under Ramiro I', description: 'Sancho III of Navarre\'s partition makes the Pyrenean county a kingdom.' },
    { date: '1118', title: 'Zaragoza conquered', description: 'Alfonso the Battler takes the Ebro metropolis from the Almoravids.' },
    { date: '1137', title: 'Union with Barcelona', description: 'Petronilla\'s betrothal to Ramon Berenguer IV creates the Crown of Aragon.' },
    { date: '12 September 1213', title: 'Muret', description: 'Peter II dies against the Albigensian crusade; the Occitan orientation dies with him.' },
    { date: '1229–1238', title: 'Majorca and Valencia', description: 'James I\'s conquests add two new kingdoms to the Crown.' },
    { date: '1258', title: 'Treaty of Corbeil', description: 'France and Aragon trade obsolete claims; the Pyrenees become the border.' },
    { date: '1282–1285', title: 'Sicilian Vespers war', description: 'Peter III takes Sicily, survives papal deposition and the French crusade, and concedes the Privilegio General.' },
    { date: '1311', title: 'Catalans take Athens', description: 'The Catalan Company seizes the duchy of Athens, held under the Crown\'s princes to 1388.' },
    { date: '1348', title: 'Épila and after', description: 'Peter IV crushes the armed Union, then governs through corts; the Generalitat follows in 1359.' },
    { date: '1412', title: 'Compromise of Caspe', description: 'Nine electors end the interregnum by choosing Ferdinand of Antequera — succession by arbitration.' },
    { date: '1442', title: 'Naples conquered', description: 'Alfonso the Magnanimous wins the Neapolitan crown and moves his court to Italy.' },
    { date: '1469', title: 'Ferdinand marries Isabella', description: 'The Crowns of Aragon and Castile bind their futures; medieval Aragon\'s separate story closes.' }
  ],
  relatedEntries: {
    people: [
      { title: 'Isabella of Castile', type: 'person', slug: 'isabella-of-castile', label: 'The Castilian half of the 1469 union' },
      { title: 'Charles of Anjou', type: 'person', slug: 'charles-of-anjou', label: 'The enemy of the Vespers war' },
      { title: 'John II of Castile', type: 'person', slug: 'john-ii-of-castile', label: 'The Trastámara cousin-network' }
    ],
    locations: [
      { title: 'Kingdom of Castile', type: 'location', slug: 'kingdom-of-castile', label: 'Rival and final partner' },
      { title: 'Kingdom of Navarre', type: 'location', slug: 'kingdom-of-navarre', label: 'The Pyrenean sibling-kingdom' },
      { title: 'Kingdom of France', type: 'location', slug: 'kingdom-of-france', label: 'Adversary from Muret to the Vespers crusade' }
    ],
    events: [
      { title: 'Battle of Las Navas de Tolosa', type: 'event', slug: 'battle-of-las-navas-de-tolosa', label: 'Peter II in the great coalition, 1212' }
    ]
  },
  sources: [
    { title: 'Crown of Aragon — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Crown_of_Aragon' },
    { title: 'The Medieval Crown of Aragon: A Short History', author: 'T. N. Bisson', type: 'book', note: 'The standard English survey.' },
    { title: 'James I, Llibre dels fets (Book of Deeds)', author: 'James I of Aragon', type: 'primary source', note: 'The conqueror\'s own chronicle.' }
  ]
})

// ── KINGDOM OF NAVARRE ──────────────────────────────────────────────────────
patch('kingdom-of-navarre', {
  overview: [
    'Navarre — the kingdom of Pamplona until the twelfth century — was Iberia\'s oldest crown and its smallest survivor: birthplace of the dynasty that under Sancho III the Great (1004–1035) briefly ruled most of Christian Spain and seeded the royal lines of Castile and Aragon, then a compact Pyrenean monarchy that outlived the Reconquista it was locked out of.',
    'Hemmed in by Castile and Aragon after losing the Rioja and its coast, it turned north: French dynasties — Champagne from 1234, Capetian kings of France 1285–1328, then Évreux — ruled it through the late Middle Ages, and its history became one of chartered liberties (the Fuero General), the pilgrim road, and survival diplomacy until Castilian annexation of the southern kingdom in 1512.'
  ],
  contentSections: [
    { title: 'Overview', paragraphs: [
      'Navarre — the kingdom of Pamplona until the twelfth century — was Iberia\'s oldest crown and its smallest survivor: birthplace of the dynasty that under Sancho III the Great (1004–1035) briefly ruled most of Christian Spain and seeded the royal lines of Castile and Aragon, then a compact Pyrenean monarchy that outlived the Reconquista it was locked out of.',
      'Hemmed in by Castile and Aragon after losing the Rioja and its coast, it turned north: French dynasties — Champagne from 1234, the Capetian kings of France in personal union 1285–1328, then Évreux — ruled it through the late Middle Ages, and its history became one of chartered liberties (the Fuero General), the pilgrim road, and survival diplomacy until Castile annexed the southern kingdom in 1512.'
    ]},
    { title: 'Background and origins', paragraphs: [
      'The kingdom crystallised around Pamplona in 824, when — tradition and thin sources agree — Íñigo Arista was raised as king after the local Basques, veterans of ambushing Charlemagne\'s rearguard at Roncesvalles in 778, threw off Frankish and Cordoban overlordship alike. Wedged between the Carolingian march and the Banu Qasi muwallad lords of the Ebro (their frequent allies), the early kings ruled a mountain people the Romans had never fully absorbed.',
      'The Jimena dynasty from 905 built outward — Sancho I taking Nájera and the Rioja — and reached its zenith with Sancho III the Great, who by 1030 ruled or dominated Pamplona, Aragon, Castile, and León\'s borderlands: rex Hispaniarum in his charters. His partition among his sons (1035) created the kingdoms of Castile and Aragon and reduced Pamplona-Navarre, at a stroke, from Iberia\'s centre to its cornered elder.'
    ]},
    { title: 'High and Late Middle Ages', paragraphs: [
      'The restored kingdom (after a generation absorbed by Aragon, 1076–1134) fought its geography: García Ramírez and Sancho VI "the Wise" — who first styled the realm "kingdom of Navarre" and chartered towns like San Sebastián — held the line; Sancho VII "the Strong" (1194–1234), a giant in the chronicles, broke the Almohad palace-guard\'s chain at Las Navas de Tolosa in 1212 (the chains entering the royal arms), but lost Álava and Guipúzcoa to Castile in 1200, sealing Navarre off from the sea and from further Reconquista.',
      'His nephew Theobald I of Champagne (1234) began the French centuries: trouvère-king and crusader; the Capetian union under Philip the Fair and his sons (1285–1328), when Navarre was governed from Paris; then the house of Évreux — Charles II "the Bad" (1349–1387), the Hundred Years\' War\'s arch-intriguer, plotting between Valois, Plantagenet, and the Jacquerie; and Charles III "the Noble" (1387–1425), who bought peace, built pamplona\'s cathedral and Olite\'s palace, and gave the realm its calmest reign. The century after him sank into the civil war of Agramonts and Beaumonts around John II of Aragon and his imprisoned heir Charles of Viana — the strife that invited Ferdinand the Catholic\'s conquest in 1512.'
    ]},
    { title: 'Political structure and rule', paragraphs: [
      'Navarrese kingship was Iberia\'s most explicitly contractual: from the thirteenth century kings swore at coronation to keep the fueros before the realm swore to them, and the Fuero General — compiled under Theobald I when the cortes feared a French king would not know the custom — bound the crown to counsel, fixed the rights of hidalgos and francos, and made the Cortes of Navarre (nobles, clergy, and the "good towns") a permanent partner in taxation.',
      'The kingdom\'s working institutions were the merindades under their merinos, the Cámara de Comptos (1365) auditing a sophisticated little fisc, and the chartered towns of the camino — Pamplona\'s three rival boroughs, Estella, Puente la Reina — whose Frankish settler-liberties made them islands of privilege. Distinct communities lived under royal protection and taxation: the Basque-speaking countryside, the francos of the roads, and substantial Jewish and Muslim aljamas whose fueros the kings confirmed for fiscal reasons the cortes understood perfectly.'
    ]},
    { title: 'Major rulers', paragraphs: [
      'Íñigo Arista, c. 824–851 — first king of Pamplona, raised against Frank and emir alike.',
      'Sancho III the Great, 1004–1035 — master of Christian Iberia; his partition seeded Castile and Aragon.',
      'Sancho VI the Wise, 1150–1194 — renamed the realm Navarre, chartered its towns, and defended it by law and diplomacy.',
      'Sancho VII the Strong, 1194–1234 — the giant of Las Navas; last of the native line.',
      'Theobald I, 1234–1253 — Champagne\'s trouvère-count as king; the Fuero General\'s reign.',
      'Joan I and Philip the Fair, 1284–1305 — the Capetian union; Navarre ruled from Paris.',
      'Charles II the Bad, 1349–1387 — the Hundred Years\' War\'s most notorious intriguer.',
      'Charles III the Noble, 1387–1425 — peace, Olite\'s palace, and the kingdom\'s golden autumn.'
    ]},
    { title: 'Wars, battles, and expansion', paragraphs: [
      'Navarre\'s military history opens with the most famous ambush in medieval literature — Roncesvalles, 778, where the Basques destroyed Charlemagne\'s rearguard and Roland with it — and closes with civil war; between them lie the Ebro wars beside and against the Banu Qasi, the tenth-century disasters against Almanzor, the long attritional frontier with Castile (Álava and Guipúzcoa lost, 1199–1200), and the one great crusading day at Las Navas de Tolosa (1212).',
      'Locked out of expansion, the late medieval kingdom exported soldiers and intrigue instead: Charles II\'s companies fought (and changed sides) across the Hundred Years\' War\'s France; Navarrese garrisons held Norman towns pledged to him; and the fifteenth-century Agramont-Beaumont civil war turned the kingdom\'s politics into the instrument first of John II of Aragon and finally of Ferdinand, whose 1512 invasion ended the southern kingdom\'s independence — the northern remnant beyond the Pyrenees keeping the crown that would one day reach Paris with Henry IV.'
    ]},
    { title: 'Religion, culture, and society', paragraphs: [
      'The camino de Santiago made little Navarre a European corridor: Roncesvalles\' great pilgrim hospital, the bridge-town of Puente la Reina where the routes joined, Estella\'s Frankish boroughs, and Pamplona\'s French-Gothic cathedral rebuilt under Charles III. The kingdom\'s culture was correspondingly layered — Basque in the valleys (the language\'s first written fragments appear in Navarrese monasteries like Leire), Romance in the towns and chancery, French at court under the northern dynasties.',
      'San Salvador de Leire and Santa María la Real of Nájera anchored the early kings\' memory; the aljamas of Tudela — home of the traveller Benjamin of Tudela and the poet-philosopher Abraham ibn Ezra — and Pamplona made the kingdom, for its size, a notable seat of Jewish learning, protected in the fueros until the massacres and pressures of the fourteenth century (Estella, 1328) eroded the old convivencia.'
    ]},
    { title: 'Decline, transformation, and legacy', paragraphs: [
      'Navarre\'s end was partition: Ferdinand\'s armies took the southern kingdom in 1512 (annexed to Castile with its fueros intact in 1515), while Lower Navarre beyond the mountains stayed with the Albret line — whose Henry III became Henry IV of France in 1589, carrying the title "King of France and Navarre" to the French Revolution.',
      'Its legacy outlived its power on both slopes: the fueros the annexation preserved made Navarre a juridical particularity inside Spain into the modern era; the dynastic seed of 1035 meant every later Iberian royal line traced to Pamplona; and Roncesvalles — battle, epic, and pilgrim pass — fixed the little kingdom permanently in Europe\'s imagination.'
    ]}
  ],
  knownFor: [
    'Iberia\'s oldest kingdom — Pamplona, from 824',
    'Sancho III the Great\'s pan-Iberian hegemony and the 1035 partition',
    'Roncesvalles (778) and the chains of Las Navas (1212) in its arms',
    'The Fuero General and coronation oath — contractual kingship in miniature',
    'French dynasties, Charles the Bad, and survival between the crowns'
  ],
  timeline: [
    { date: '778', title: 'Roncesvalles', description: 'The Basques destroy Charlemagne\'s rearguard — the seedbed of Pamplonese independence and of the Song of Roland.' },
    { date: 'c. 824', title: 'Íñigo Arista raised as king', description: 'Pamplona becomes a kingdom between the Franks and Córdoba.' },
    { date: '1004–1035', title: 'Sancho III the Great', description: 'Navarre briefly dominates Christian Iberia; the partition of 1035 creates Castile and Aragon.' },
    { date: '1076–1134', title: 'Aragonese absorption', description: 'After Sancho IV\'s murder the realm passes to Aragon\'s kings for two generations.' },
    { date: '1162–1194', title: 'Sancho the Wise renames the realm', description: '"King of Navarre" replaces "of Pamplona"; San Sebastián and the towns are chartered.' },
    { date: '1200', title: 'The sea lost', description: 'Castile takes Álava and Guipúzcoa; Navarre is landlocked for good.' },
    { date: '16 July 1212', title: 'Las Navas de Tolosa', description: 'Sancho the Strong breaks the caliph\'s guard; the chains enter the arms of Navarre.' },
    { date: '1234', title: 'The French turn', description: 'Theobald of Champagne inherits; the Fuero General is set down.' },
    { date: '1285–1328', title: 'Capetian union', description: 'Navarre shares kings with France until the Évreux restoration.' },
    { date: '1349–1387', title: 'Charles the Bad', description: 'The kingdom\'s resources fuel three decades of Hundred Years\' War intrigue.' },
    { date: '1387–1425', title: 'Charles the Noble', description: 'Peace bought and built: Olite\'s palace, Pamplona\'s unification charter (1423).' },
    { date: '1512', title: 'Castilian conquest', description: 'Ferdinand the Catholic annexes the southern kingdom; only trans-Pyrenean Navarre stays free.' }
  ],
  relatedEntries: {
    locations: [
      { title: 'Kingdom of Castile', type: 'location', slug: 'kingdom-of-castile', label: 'The neighbour that took its coast and finally its crown' },
      { title: 'Kingdom of Aragon', type: 'location', slug: 'kingdom-of-aragon', label: 'Sibling-kingdom of the 1035 partition' },
      { title: 'Kingdom of France', type: 'location', slug: 'kingdom-of-france', label: 'Dynastic partner of the late Middle Ages' }
    ],
    events: [
      { title: 'Battle of Las Navas de Tolosa', type: 'event', slug: 'battle-of-las-navas-de-tolosa', label: 'Navarre\'s great crusading day' },
      { title: 'Battle of Tours', type: 'event', slug: 'battle-of-tours', label: 'The Frankish-Umayyad world its origins sat between' }
    ],
    people: [ { title: 'Charles Martel', type: 'person', slug: 'charles-martel', label: 'The Carolingian power the first kings escaped' } ]
  },
  sources: [
    { title: 'Kingdom of Navarre — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Kingdom_of_Navarre' },
    { title: 'Spain in the Middle Ages', author: 'Angus MacKay', type: 'book' },
    { title: 'The Fuero General de Navarra', author: 'Navarrese juridical tradition', type: 'primary source', note: 'The realm\'s thirteenth-century constitutional compilation.' }
  ]
})

// ── KINGDOM OF FRANCE ───────────────────────────────────────────────────────
patch('kingdom-of-france', {
  overview: [
    'The Kingdom of France grew from the western third of the Carolingian partition of Verdun (843) into medieval Europe\'s paradigm monarchy: Capetian from 987, when Hugh Capet\'s election began the longest unbroken royal line in European history, and by 1300 the richest, most populous, and most administratively ambitious realm in Latin Christendom.',
    'Its medieval story is the domain\'s expansion — Philip Augustus taking Normandy and Anjou from King John and sealing it at Bouvines (1214), Languedoc absorbed after the Albigensian crusade, the legists of Philip the Fair humbling Boniface VIII — and then the Hundred Years\' War\'s near-death and recovery: Crécy and Poitiers, a captive king, Agincourt and Troyes, and the Valois resurrection under Charles VII from Orléans (1429) to Castillon (1453).'
  ],
  contentSections: [
    { title: 'Overview', paragraphs: [
      'The Kingdom of France grew from the western third of the Carolingian partition of Verdun (843) into medieval Europe\'s paradigm monarchy: Capetian from 987, when Hugh Capet\'s election began the longest unbroken royal line in European history, and by 1300 the richest, most populous, and most administratively ambitious realm in Latin Christendom.',
      'Its medieval story is the domain\'s expansion — Philip II Augustus taking Normandy and Anjou from King John and sealing the verdict at the Battle of Bouvines (1214), Languedoc absorbed after the Albigensian crusade, the legists of Philip the Fair humbling Pope Boniface VIII — and then the Hundred Years\' War\'s near-death and recovery: Crécy and Poitiers, a captive king, Agincourt and the Treaty of Troyes, and the Valois resurrection under Charles VII from the Siege of Orléans (1429) to the Battle of Castillon (1453).'
    ]},
    { title: 'Background and origins', paragraphs: [
      'West Francia was born at the Treaty of Verdun in 843, Charles the Bald\'s share of Charlemagne\'s divided empire. The late Carolingian century was Viking siege — Paris\'s defence in 885–886 made the Robertian counts\' reputation — and the crown alternated between Carolingians and Robertians until 987, when the magnates elected Hugh Capet and the succession, shrewdly managed by anticipatory coronation of heirs, never left his house again.',
      'The early Capetians reigned over great princes — Normandy, Flanders, Aquitaine, Toulouse, Champagne — while ruling little beyond the Île-de-France, and even that imperfectly: Louis VI spent a reign subduing the robber-lords of the royal roads. Their assets were durability, the church\'s alliance (Saint-Denis, the anointing at Reims), and suzerainty\'s legal threads — assets the twelfth century\'s crisis, Eleanor of Aquitaine\'s remarriage carrying half of France to Henry II of England\'s Angevin empire, forced them to learn to pull.'
    ]},
    { title: 'High Middle Ages: the Capetian ascent', paragraphs: [
      'Philip II Augustus (1180–1223) made the monarchy: he broke the Angevin empire by law and siege — Normandy falling with Château Gaillard and Rouen in 1204 after King John\'s condemnation by the royal court — and crushed the Welf-Flemish-English coalition at Bouvines in 1214, a victory contemporaries read as God\'s verdict on the dynasty. Paris got walls, Les Halles, and a university charter; the domain got baillis; the crown\'s revenue tripled.',
      'His grandson Louis IX (1226–1270) added sanctity to power: the reformed coinage and enquêteurs auditing royal officials, the parlement crystallising as a supreme court, the Sainte-Chapelle built for the Crown of Thorns, two crusades and a canonisation (1297) that made every later French king "the most Christian" heir of Saint Louis. Under Philip IV the Fair (1285–1314) the machine turned on its makers\' partners: Boniface VIII outfaced at Anagni, the Templars destroyed in 1307–1314, the Estates General first summoned (1302), and the legists\' doctrine — the king emperor in his kingdom — became government.'
    ]},
    { title: 'Late Middle Ages: the Hundred Years\' War', paragraphs: [
      'The Capetian miracle failed in 1328: three sons of Philip the Fair dead without male heirs, and the assembled peers passing the crown to Philip VI of Valois over Edward III of England\'s claim through his mother. War came in 1337, and with it the century of catastrophe: the Battle of Crécy (1346) and Calais lost; the Black Death from 1348; the Battle of Poitiers (1356) taking John II captive; the Jacquerie and Étienne Marcel\'s Paris in revolt; a third of the realm signed away at Brétigny (1360).',
      'Charles V and Du Guesclin clawed it back by fortress and Fabian war, but Charles VI\'s madness delivered France to the Armagnac-Burgundian feud, the Battle of Agincourt (1415), and the Treaty of Troyes (1420) that disinherited the Dauphin for Henry V\'s line. The recovery from the "kingdom of Bourges" was the era\'s great reversal: Joan of Arc at the Siege of Orléans and the Battle of Patay (1429), the Reims coronation of Charles VII, Burgundy reconciled at Arras (1435), the standing companies and the Bureau brothers\' artillery — and the end at the Battle of Formigny (1450) and the Battle of Castillon (1453), leaving England only Calais.'
    ]},
    { title: 'Political structure and rule', paragraphs: [
      'Capetian government grew from household to state along visible rungs: the great officers (seneschal, chancellor) tamed or left vacant; Philip Augustus\'s salaried baillis and southern sénéchaux superimposed on the prévôts; Louis IX\'s enquêteurs auditing them; the curia regis specialising into the parlement of Paris (justice), the chambre des comptes (audit, fixed 1320), and the conseil. Legists trained on Roman law — Nogaret\'s generation — supplied the doctrine of sovereignty; the appanage system parked royal cadets on great fiefs, with mixed long-term results (Burgundy above all).',
      'Consent institutions grew war by war: the Estates General from 1302, provincial estates bargaining taxes; the crisis of 1356–1358 extracting the Great Ordinance before reaction buried it; and the war\'s end leaving the crown what no medieval rival possessed — permanent taxation (taille, aides, gabelle) and a standing army (the compagnies d\'ordonnance, 1445) — the fiscal-military state in embryo, with the parlement registering (and occasionally remonstrating against) its laws.'
    ]},
    { title: 'Major rulers', paragraphs: [
      'Hugh Capet, 987–996 — the elected founder; his house held the throne in the direct line for 341 years.',
      'Louis VI the Fat, 1108–1137 — tamed the domain\'s robber-lords and married his heir to Eleanor of Aquitaine.',
      'Louis VII, 1137–1180 — crusader-king whose divorce handed Aquitaine to the Plantagenets.',
      'Philip II Augustus, 1180–1223 — conqueror of Normandy (1204), victor of Bouvines (1214), builder of the administrative crown.',
      'Louis VIII the Lion, 1223–1226 — invader of England, conqueror of Poitou, and the crown\'s entry into Languedoc.',
      'Louis IX (Saint Louis), 1226–1270 — the reformer-crusader canonised in 1297; medieval kingship\'s moral benchmark.',
      'Philip III the Bold, 1270–1285 — Toulouse absorbed; the disastrous Aragonese crusade.',
      'Philip IV the Fair, 1285–1314 — Anagni, the Templars, the Estates General: sovereignty\'s sharpest medieval statement.',
      'Philip VI of Valois, 1328–1350 — first Valois; Crécy and the plague opened his dynasty\'s ordeal.',
      'John II the Good, 1350–1364 — captured at Poitiers; died in honourable London captivity.',
      'Charles V the Wise, 1364–1380 — with Du Guesclin, reversed Brétigny without a pitched battle.',
      'Charles VII the Victorious, 1422–1461 — from "king of Bourges" to Formigny and Castillon: the war won, the tax-state and standing army founded.'
    ]},
    { title: 'Wars, battles, and expansion', paragraphs: [
      'The crown\'s wars of growth ran through Bouvines (1214) — Normandy, Anjou, and the Angevin heartland already annexed in 1204 — the Albigensian crusade (1209–1229) delivering Languedoc by the Treaty of Paris, and Philip III\'s inheritance of Toulouse (1271). Its wars of survival were the Hundred Years\' War\'s arcs: Sluys, Crécy, Calais, Poitiers; Cocherel and the Du Guesclin recovery; Agincourt, Verneuil, and the Lancastrian occupation; Orléans, Patay, Formigny, Castillon.',
      'Its distinctive military evolutions bracket the period: the feudal host that won Bouvines; the noble cavalry that died at Crécy and Agincourt against massed archery; and the reformed instrument of the 1440s — professional ordinance companies, francs-archers, and Europe\'s best artillery train under the Bureau brothers — that ended the war and defined the next century\'s armies.'
    ]},
    { title: 'Religion, culture, and society', paragraphs: [
      'Medieval France was Latin Christendom\'s cultural engine: the Gothic invented at Suger\'s Saint-Denis (1140s) and raised at Chartres, Reims, and Amiens; the University of Paris, chartered under Philip Augustus and championed by Aquinas and Bonaventure, the theology faculty of Europe; Cluny and then Cîteaux reforming monasticism for the whole continent; the chansons de geste, the troubadour south and trouvère north, and the Roman de la Rose defining vernacular literature.',
      'Its society held Europe\'s largest population — perhaps twenty million before the Black Death halved it — from the vineyards of Burgundy to the cloth towns of the north and the fairs of Champagne, medieval commerce\'s great clearing-house. The crown\'s sacral aura (Reims\'s holy ampulla, the royal touch for scrofula) coexisted with harder edges: the era\'s largest Jewish communities repeatedly taxed, expelled (1306, 1394), and readmitted; Cathar Languedoc broken by crusade and the Dominican inquisition; and the peasantry whose customary burdens the Jacquerie (1358) briefly and bloodily contested.'
    ]},
    { title: 'Decline, transformation, and legacy', paragraphs: [
      'France left the Middle Ages transformed by its ordeal: the war\'s end in 1453 found the Valois crown with permanent taxes, a standing army, an artillery arm without rival, and a nobility increasingly pensioned rather than sovereign — the platform from which Louis XI would break Burgundy and the early modern monarchy would build. The English claim shrank to Calais and a title; the Burgundian appanage remained the last great medieval-style challenge, and outlasted the period by only two decades.',
      'Its legacies define "medieval" in the European imagination: Gothic architecture, the Paris schools, crusading kingship, the Salic-law succession doctrine improvised in 1316–1328, and the administrative vocabulary — bailli, parlement, taille — of continental state-building. The dynasty itself was the deepest legacy: Capetian legitimacy, renewed through Valois trial by fire, made the French crown the medieval West\'s model of durable monarchy.'
    ]}
  ],
  knownFor: [
    'The Capetian miracle: one dynasty, 987 to the period\'s end and beyond',
    'Bouvines (1214) and the annexation of the Angevin lands',
    'Saint Louis\'s reformed, sacral kingship and the parlement',
    'The Hundred Years\' War: catastrophe at Crécy, Poitiers, Agincourt; recovery to Castillon',
    'Gothic architecture, the University of Paris, and the Champagne fairs'
  ],
  timeline: [
    { date: '843', title: 'Treaty of Verdun', description: 'Charles the Bald takes West Francia — the future France — in Charlemagne\'s partition.' },
    { date: '885–886', title: 'Siege of Paris', description: 'Count Odo\'s defence against the Vikings raises the Robertian house toward the throne.' },
    { date: '987', title: 'Hugh Capet elected', description: 'The Capetian line begins; anticipatory coronations entrench it.' },
    { date: '1204', title: 'Normandy annexed', description: 'Philip Augustus takes Rouen after Château Gaillard; the Angevin empire\'s heart passes to France.' },
    { date: '27 July 1214', title: 'Battle of Bouvines', description: 'The coalition of Otto IV, Flanders, and England is crushed; the Capetian ascendancy is sealed.' },
    { date: '1229', title: 'Treaty of Paris', description: 'The Albigensian crusade ends with Languedoc bound to the crown.' },
    { date: '1302–1303', title: 'Estates General and Anagni', description: 'Philip the Fair summons the estates and breaks Boniface VIII; the legist monarchy stands clear.' },
    { date: '1328', title: 'The Valois succession', description: 'The direct Capetian line fails; Philip VI is preferred to Edward III — the war\'s dynastic fuse.' },
    { date: '26 August 1346', title: 'Crécy', description: 'The nobility is shattered by English archery; Calais falls the next year, the plague the year after.' },
    { date: '19 September 1356', title: 'Poitiers', description: 'John II is captured; the Jacquerie, Marcel\'s Paris, and Brétigny\'s cessions follow.' },
    { date: '25 October 1415', title: 'Agincourt', description: 'Henry V destroys the French host; Troyes (1420) disinherits the Dauphin.' },
    { date: '8 May 1429', title: 'Orléans relieved', description: 'Joan of Arc turns the war; Patay and the Reims coronation follow within weeks.' },
    { date: '1435–1445', title: 'Arras, Paris, and the reforms', description: 'Burgundy reconciled, Paris regained (1436), permanent taxes and the ordinance companies founded.' },
    { date: '17 July 1453', title: 'Castillon', description: 'The war ends; England keeps only Calais, and the fiscal-military monarchy stands complete.' }
  ],
  relatedEntries: {
    people: [
      { title: 'Philip II of France', type: 'person', slug: 'philip-ii-of-france', label: 'Architect of the Capetian ascent' },
      { title: 'Louis IX of France', type: 'person', slug: 'louis-ix-of-france', label: 'Saint Louis' },
      { title: 'Charles V of France', type: 'person', slug: 'charles-v-of-france', label: 'The wise rebuilder' },
      { title: 'Joan of Arc', type: 'person', slug: 'joan-of-arc', label: 'The recovery\'s catalyst' }
    ],
    locations: [
      { title: 'Kingdom of England', type: 'location', slug: 'kingdom-of-england', label: 'The rival of the whole period' },
      { title: 'Duchy of Normandy', type: 'location', slug: 'duchy-of-normandy', label: 'The great annexation of 1204' },
      { title: 'Duchy of Aquitaine', type: 'location', slug: 'aquitaine', label: 'The dowry that made the war' }
    ],
    events: [
      { title: 'Battle of Bouvines', type: 'event', slug: 'battle-of-bouvines', label: '1214: the dynasty\'s verdict' },
      { title: "Hundred Years' War", type: 'event', slug: 'hundred-years-war', label: 'The late medieval ordeal' },
      { title: 'Battle of Castillon', type: 'event', slug: 'battle-of-castillon', label: '1453: the war won' }
    ]
  },
  sources: [
    { title: 'Kingdom of France — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/France_in_the_Middle_Ages' },
    { title: 'The Capetians: Kings of France 987–1328', author: 'Jim Bradbury', type: 'book' },
    { title: 'The Hundred Years War (5 vols.)', author: 'Jonathan Sumption', type: 'book', note: 'The fullest modern narrative of the late medieval kingdom at war.' }
  ]
})

// ── DUCHY OF AQUITAINE ──────────────────────────────────────────────────────
patch('aquitaine', {
  overview: [
    'Aquitaine — the vast duchy between the Loire and the Pyrenees — was medieval France\'s great south-west: Roman in its towns, troubadour in its courts, and for three centuries the pivot of the Anglo-French struggle after Eleanor of Aquitaine\'s marriage to Henry II of England in 1152 attached it to the Plantagenet crown.',
    'Its story runs from the Carolingian sub-kingdom and the ducal house of Poitiers, through Eleanor\'s century and the wine-rich English Gascony that followed, to its place as the legal detonator of the Hundred Years\' War — confiscated by Paris in 1337, made a principality under the Black Prince, and finally conquered by France at Castillon in 1453.'
  ],
  contentSections: [
    { title: 'Overview', paragraphs: [
      'Aquitaine — the vast duchy between the Loire and the Pyrenees — was medieval France\'s great south-west: Roman in its towns, troubadour in its courts, and for three centuries the pivot of the Anglo-French struggle after Eleanor of Aquitaine\'s marriage to Henry II of England in 1152 attached it to the Plantagenet crown.',
      'Its story runs from the Carolingian sub-kingdom and the ducal house of Poitiers, through Eleanor\'s century and the wine-rich English Gascony that followed, to its place as the legal detonator of the Hundred Years\' War — confiscated by Paris in 1337, made a principality under Edward, the Black Prince, and finally conquered by France at the Battle of Castillon in 1453.'
    ]},
    { title: 'Background and origins', paragraphs: [
      'Aquitaine entered the Middle Ages as a Roman survival: the land of the Garonne and the old provincia Aquitania, whose Gallo-Roman aristocracy and city-culture (Bordeaux, Poitiers, Limoges) long stood apart from the Frankish north. Clovis took it from the Visigoths at Vouillé in 507; independent-minded dukes like Eudes — who beat the Umayyads before Toulouse in 721 and stood with Charles Martel at the Battle of Tours in 732 — kept the distance alive.',
      'Charlemagne made it a sub-kingdom for his son Louis the Pious in 781; as the Carolingian order decayed the ducal title settled by the tenth century on the counts of Poitiers, the "Guilhem" dynasty whose William V held court like a king and whose William IX (1071–1126) — the first troubadour — began the line\'s cultural legend. Their duchy was a federation of restless counties (Angoulême, Périgord, the Limousin, Gascony absorbed after 1058) held together by homage, marriage, and the dukes\' relentless itineration.'
    ]},
    { title: 'Eleanor\'s century and the Plantagenet duchy', paragraphs: [
      'The duchy\'s pivot was a marriage-bed. Duke William X died in 1137 leaving Eleanor of Aquitaine his heiress; married at once to Louis VII, she was queen of France for fifteen years, then — the marriage annulled at Beaugency in March 1152 — married Henry Plantagenet within eight weeks, carrying Poitou, Gascony, and everything between to the future Henry II of England. Half of France changed weight in a single spring.',
      'Plantagenet Aquitaine was governed hard and held loosely: Richard the Lionheart learned war breaking its baronial revolts through the 1170s–80s; Eleanor\'s own court at Poitiers made the duchy the troubadour world\'s capital. After 1204, when Philip II Augustus stripped John of Normandy and Poitou\'s north, the duchy contracted toward Gascony — and the Treaty of Paris (1259) fixed the fatal formula: the king of England holding Guyenne as a peer and liege vassal of the king of France, sovereignty\'s lawyers guaranteed a quarrel in every appeal to Paris.'
    ]},
    { title: 'English Gascony and the Hundred Years\' War', paragraphs: [
      'Gascony\'s economy bound it to England more tightly than law: the wine fleet out of Bordeaux — over 80,000 tuns in the best years, medieval Europe\'s greatest single trade — against English grain, wool, and silver; the bastide new towns planted by both crowns across the countryside; Bordeaux and Bayonne governing themselves like little republics under a distant king-duke. When Philip VI declared the duchy confiscate in May 1337 — over appeals, Saint-Sardos\'s aftermath, and the harbouring of a French fugitive — the war that followed wore Aquitaine\'s law as its first cause.',
      'The war made and unmade a principality: Brétigny (1360) granted the Plantagenets a sovereign Aquitaine a third of France wide; Edward, the Black Prince ruled it from Bordeaux in unmatched splendour, won Nájera for Peter of Castile, and taxed the duchy into the appeals — heard by Charles V in 1369 — that restarted the war and dissolved the principality within six years under Du Guesclin\'s pressure. The fifteenth century reduced English Aquitaine to its Bordelais core; Charles VII\'s armies took Bordeaux in 1451, and John Talbot\'s death at Castillon in July 1453 ended three hundred years of the English connection — Bordeaux submitting for good that October.'
    ]},
    { title: 'Major rulers', paragraphs: [
      'Eudes of Aquitaine, d. 735 — victor of Toulouse (721), ally of Charles Martel at Tours: the duchy\'s early independence personified.',
      'William IX, 1086–1126 — "the first troubadour": crusader, scandal, and the founder of vernacular lyric.',
      'William X, 1126–1137 — his death on pilgrimage left Europe\'s greatest heiress.',
      'Eleanor of Aquitaine, 1137–1204 — duchess in her own right through two crowns; the duchy\'s destiny in one person.',
      'Richard the Lionheart, duke 1172–1199 — the duchy\'s hard schoolmaster before and during his kingship.',
      'Edward, the Black Prince, prince of Aquitaine 1362–1372 — the sovereign principality\'s brilliant, brief experiment.'
    ]},
    { title: 'Religion, culture, and society', paragraphs: [
      'Aquitaine\'s medieval fame is cultural: the troubadours from William IX through Bernart de Ventadorn and Bertran de Born singing in Occitan for the courts of Poitiers and beyond; Romanesque churches thick along the four pilgrim roads to Compostela that crossed the duchy (Saint-Sernin at Toulouse on its edge, Poitiers\' Notre-Dame-la-Grande, Périgueux\'s domes); Limoges enamels furnishing Europe\'s altars; and the abbey of Fontevraud on its northern rim holding the Plantagenet tombs — Eleanor\'s effigy reading a book.',
      'Its society was Occitan-speaking, custom-ruled (the written law of the south began at its edges), and precociously urban: Bordeaux\'s jurade and Bayonne\'s shipmen negotiating charters with their king-dukes; the bastides — Monpazier, Libourne, hundreds more — planting market-grid towns across the land as instruments of both settlement and sovereignty; and the wine, salt, and Bayonne\'s whalers binding the duchy\'s fortunes to the Atlantic long before the phrase existed.'
    ]},
    { title: 'Decline, transformation, and legacy', paragraphs: [
      'French conquest ended the political duchy in 1453: the Bordelais lost its privileges, took French garrisons and the Château Trompette, and rose once (1452–1453) for the old connection before Castillon settled it. The title "duke of Guyenne" became a French royal appanage-name; the wine trade, after a hard generation, resumed with the old English customer under new sovereignty.',
      'The legacies are large: the Occitan lyric that taught Europe to sing of love; the Eleanor inheritance that structured three centuries of Anglo-French conflict — the Hundred Years\' War is, in one light, the longest lawsuit in history, over Aquitaine\'s homage; and the bastide landscape and Bordeaux vineyards that still map the medieval duchy onto modern France.'
    ]}
  ],
  knownFor: [
    'Eleanor\'s dowry: the duchy that built the Angevin empire',
    'The troubadour courts and the first vernacular lyric',
    'English Gascony and the Bordeaux wine trade',
    'Legal detonator of the Hundred Years\' War (confiscation, 1337)',
    'The Black Prince\'s principality and the end at Castillon (1453)'
  ],
  timeline: [
    { date: '507', title: 'Vouillé', description: 'Clovis takes Aquitaine from the Visigoths; the Roman south enters the Frankish world.' },
    { date: '721/732', title: 'Toulouse and Tours', description: 'Duke Eudes defeats the Umayyads at Toulouse and stands with Charles Martel at Tours.' },
    { date: '781', title: 'Carolingian sub-kingdom', description: 'Charlemagne crowns the child Louis the Pious king of Aquitaine.' },
    { date: 'c. 1086–1126', title: 'William IX', description: 'The first troubadour rules the Poitevin duchy at its cultural dawn.' },
    { date: '1137/1152', title: 'Eleanor\'s two marriages', description: 'Aquitaine goes to Louis VII, then — eight weeks after the annulment — to Henry Plantagenet.' },
    { date: '1204', title: 'The Angevin collapse', description: 'Philip Augustus takes the north; the duchy contracts toward Gascony.' },
    { date: '1259', title: 'Treaty of Paris', description: 'Henry III holds Guyenne as the French king\'s vassal — the appeal-trap that fuels a century of conflict.' },
    { date: 'May 1337', title: 'Confiscation', description: 'Philip VI declares the duchy forfeit; the Hundred Years\' War begins over Aquitaine\'s homage.' },
    { date: '1360–1372', title: 'The Black Prince\'s principality', description: 'Brétigny\'s sovereign Aquitaine rises and dissolves in the appeals of 1369 and Du Guesclin\'s war.' },
    { date: '1451–1453', title: 'French conquest', description: 'Bordeaux falls, rises for Talbot, and submits after Castillon; English Aquitaine ends.' }
  ],
  relatedEntries: {
    people: [
      { title: 'Eleanor of Aquitaine', type: 'person', slug: 'eleanor-of-aquitaine', label: 'The duchess who carried it between crowns' },
      { title: 'Richard the Lionheart', type: 'person', slug: 'richard-the-lionheart', label: 'Its ducal schoolmaster' },
      { title: 'Edward, the Black Prince', type: 'person', slug: 'edward-the-black-prince', label: 'Prince of Aquitaine' }
    ],
    locations: [
      { title: 'Kingdom of France', type: 'location', slug: 'kingdom-of-france', label: 'Suzerain and final conqueror' },
      { title: 'Kingdom of England', type: 'location', slug: 'kingdom-of-england', label: 'The king-dukes\' crown' },
      { title: 'Gascony', type: 'location', slug: 'gascony', label: 'The duchy\'s enduring core' }
    ],
    events: [
      { title: "Hundred Years' War", type: 'event', slug: 'hundred-years-war', label: 'Fought over its homage' },
      { title: 'Battle of Castillon', type: 'event', slug: 'battle-of-castillon', label: 'The end, 1453' },
      { title: 'Battle of Tours', type: 'event', slug: 'battle-of-tours', label: 'Duke Eudes beside Charles Martel, 732' }
    ]
  },
  sources: [
    { title: 'Duchy of Aquitaine — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Duchy_of_Aquitaine' },
    { title: 'Eleanor of Aquitaine: Lord and Lady (eds. Wheeler & Parsons)', author: 'Academic collection', type: 'book' },
    { title: 'The Hundred Years War, vol. 1: Trial by Battle', author: 'Jonathan Sumption', type: 'book', note: 'Opens with the fullest modern account of English Gascony.' }
  ]
})

// ── DUCHY OF NORMANDY ───────────────────────────────────────────────────────
patch('duchy-of-normandy', {
  overview: [
    'Normandy began as a Viking settlement legalised: in 911, by the traditional grant of Saint-Clair-sur-Epte, the Carolingian king Charles the Simple ceded the lower Seine to the Norse leader Rollo, whose descendants turned raiders\' land into the most precociously governed principality in France.',
    'From it came the eleventh century\'s most consequential conquest — William the Conqueror\'s England, 1066 — and a cross-Channel realm whose duke-kings ruled from the Tyne to the Loire until Philip II Augustus took the duchy in 1204; thereafter Normandy was the French crown\'s richest province, England\'s target in the Hundred Years\' War (occupied 1417–1450), and the last word in the war\'s decision at Formigny.'
  ],
  contentSections: [
    { title: 'Overview', paragraphs: [
      'Normandy began as a Viking settlement legalised: in 911, by the traditional grant of Saint-Clair-sur-Epte, the Carolingian king Charles the Simple ceded the lower Seine to the Norse leader Rollo, whose descendants turned raiders\' land into the most precociously governed principality in France.',
      'From it came the eleventh century\'s most consequential conquest — William the Conqueror\'s England, 1066 — and a cross-Channel realm whose duke-kings ruled from the Tyne to the Loire until Philip II Augustus took the duchy in 1204; thereafter Normandy was the French crown\'s richest province, England\'s target renewed in the Hundred Years\' War (occupied 1417–1450), and the stage of the war\'s Norman decision at the Battle of Formigny.'
    ]},
    { title: 'Background and origins', paragraphs: [
      'The Seine valley bore the worst of the ninth century\'s Viking storm — Rouen burned, Paris besieged — until royal policy tried enfeoffment: Rollo\'s band received Rouen and its county in 911 against baptism and defence of the river, and successive grants (924, 933) pushed "the Northmen\'s land" to roughly its historic borders. Assimilation was startlingly fast: within two generations the ducal family spoke Romance, married Frankish, and ruled through counts, viscounts, and a restored church.',
      'Dukes Richard I and II made the duchy a power — allying with Capetians, marrying into England (Emma, wed to Æthelred the Unready, then to Cnut the Great), and rebuilding the abbeys (Fécamp, Jumièges, Mont-Saint-Michel) whose schools, under imports like William of Volpiano and Lanfranc at Bec, gave Normandy Europe\'s most vigorous new monastic culture.'
    ]},
    { title: 'The Conqueror\'s duchy and the Anglo-Norman realm', paragraphs: [
      'William the Bastard\'s minority (from 1035) nearly dissolved the duchy in baronial anarchy; his victory at Val-ès-Dunes (1047) and twenty years of siege-war rebuilt it into the disciplined instrument that crossed the Channel: castles licensed by the duke alone, a church reformed under his half-brother Odo of Bayeux and Archbishop Maurilius, knight-service quotas that read like an army list. The Battle of Hastings in 1066 made the duke a king and Normandy the senior partner of a cross-Channel state.',
      'The realm\'s double structure — barons holding on both shores, succession disputes splitting them — set the next century\'s pattern: William\'s sons fought over the halves (Robert Curthose losing Normandy to William II Rufus\'s pawn and then to Henry I\'s conquest at Tinchebray, 1106); Stephen\'s anarchy lost the duchy to Anjou (Geoffrey Plantagenet, 1144); and under Henry II Normandy anchored the Angevin empire, its exchequer at Caen and its customs (the Très Ancien Coutumier appearing c. 1200) the empire\'s administrative model.'
    ]},
    { title: 'French Normandy and the Lancastrian occupation', paragraphs: [
      'Philip II Augustus took the duchy from King John in 1202–1204 — Château Gaillard\'s six-month siege the epic, Rouen\'s surrender in June 1204 the end — and the annexation held: the Norman church, towns, and custom kept their privileges under Capetian rule, codified when the crown confirmed the Charte aux Normands in 1315, the province\'s Magna Carta. For two centuries French Normandy was the monarchy\'s fiscal heartweight and its window on the Channel war.',
      'Henry V renewed the old claim in arms: Harfleur (1415) and the Agincourt campaign, then the methodical conquest of 1417–1419 climaxing at the Siege of Rouen, gave Lancastrian England the whole duchy — governed from Rouen for thirty years, with a university founded at Caen (1432) and Norman estates voting taxes, but bleeding under the écorcheur war and the resistance the occupation bred. Charles VII\'s reconquest of 1449–1450 swept it away in a year: Rouen opened its gates, the relief army died at the Battle of Formigny in April 1450, and Cherbourg\'s fall that August ended English Normandy forever.'
    ]},
    { title: 'Major rulers', paragraphs: [
      'Rollo, c. 911–927 — the Viking founder, baptised Robert: legend\'s hard bargainer at Saint-Clair-sur-Epte.',
      'Richard II, 996–1026 — the duchy\'s consolidator; Emma\'s brother, the abbeys\' rebuilder.',
      'William the Conqueror, duke 1035–1087 — Val-ès-Dunes, Hastings, and the cross-Channel realm.',
      'Robert Curthose, 1087–1106 — crusader and loser of Tinchebray; died England\'s prisoner.',
      'Henry I of England, duke 1106–1135 — the Anglo-Norman state at its administrative height.',
      'Henry II of England, duke 1150–1189 — Normandy as the Angevin empire\'s hinge.',
      'John of England, duke to 1204 — the loser of the duchy.',
      'Henry V of England, conqueror 1417–1422 — the Lancastrian duchy\'s architect.'
    ]},
    { title: 'Religion, culture, and society', paragraphs: [
      'Norman culture fused Norse energy with Frankish and Latin form. Its architecture named a style: Jumièges and Caen\'s twin abbeys (Saint-Étienne and La Trinité, the Conqueror\'s and Matilda\'s penance-houses) rehearsed the Romanesque England would build big; Mont-Saint-Michel piled Gothic on its rock; the Bayeux Tapestry — commissioned in the conquest generation, probably for Odo of Bayeux — remains the Middle Ages\' most famous narrative object.',
      'The duchy\'s schools travelled: Bec under Lanfranc and Anselm supplied Canterbury its greatest archbishops; Norman adventurers supplied the Mediterranean its newest kings — the Hauteville brothers conquering southern Italy and Sicily (Roger II crowned 1130), Bohemond taking Antioch on the First Crusade — so that "Norman" named a world from Durham to Palermo. At home, customary law hardened early (the coutumiers, the exchequer\'s rolls), and the towns — Rouen\'s commune chartered under the Angevins, its Établissements copied across the west — ran Europe\'s densest cloth-and-river economy between Paris and the sea.'
    ]},
    { title: 'Decline, transformation, and legacy', paragraphs: [
      'After 1450 the duchy dissolved into the French province: the title reserved to royal sons and rarely granted, the Charte aux Normands confirmed then eroded, the estates and exchequer surviving as provincial institutions until the Revolution levelled them. The Channel Islands alone — the duchy\'s insular fragment kept by England after 1204 — preserve Norman law and the old allegiance to this day: the last living piece of the Conqueror\'s duchy.',
      'Its medieval export was governance and conquest in equal measure: the English state\'s Norman rebuild after 1066 (Domesday, the honour system, castle and cathedral); the Sicilian kingdom\'s hybrid brilliance; crusader Antioch; and the model, studied by every French king after 1204, of what a principality could be when a hard dynasty, a reformed church, and written custom pulled together.'
    ]}
  ],
  knownFor: [
    'Viking grant to ducal state: Saint-Clair-sur-Epte, 911',
    'William the Conqueror and the Battle of Hastings, 1066',
    'The Anglo-Norman realm and its administrative revolution',
    'Lost to Philip Augustus in 1204; the Charte aux Normands (1315)',
    'Lancastrian occupation 1417–1450, ended at Formigny'
  ],
  timeline: [
    { date: '911', title: 'Saint-Clair-sur-Epte', description: 'Charles the Simple grants Rollo the lower Seine; Normandy is born of a Viking peace.' },
    { date: '1047', title: 'Val-ès-Dunes', description: 'The young William breaks the baronial revolt and begins rebuilding ducal power.' },
    { date: '14 October 1066', title: 'Hastings', description: 'The duke conquers England; the cross-Channel realm begins.' },
    { date: '1106', title: 'Tinchebray', description: 'Henry I defeats Robert Curthose and reunites England and Normandy.' },
    { date: '1144', title: 'Angevin conquest', description: 'Geoffrey Plantagenet takes the duchy during Stephen\'s anarchy; his son Henry II inherits both shores.' },
    { date: '1203–1204', title: 'Château Gaillard and Rouen', description: 'Philip Augustus conquers the duchy from King John; Normandy becomes French.' },
    { date: '1315', title: 'Charte aux Normands', description: 'The crown confirms the province\'s liberties — Normandy\'s Magna Carta.' },
    { date: '1417–1419', title: 'Henry V\'s conquest', description: 'Caen, then the Siege of Rouen: the duchy becomes Lancastrian France\'s heart.' },
    { date: '15 April 1450', title: 'Formigny', description: 'The last English field army in Normandy is destroyed; Cherbourg falls in August.' }
  ],
  relatedEntries: {
    people: [
      { title: 'William the Conqueror', type: 'person', slug: 'william-the-conqueror', label: 'Duke and king' },
      { title: 'Henry V of England', type: 'person', slug: 'henry-v-of-england', label: 'The re-conqueror of 1417' },
      { title: 'Philip II of France', type: 'person', slug: 'philip-ii-of-france', label: 'The annexer of 1204' }
    ],
    locations: [
      { title: 'Kingdom of England', type: 'location', slug: 'kingdom-of-england', label: 'The conquest of 1066' },
      { title: 'Kingdom of France', type: 'location', slug: 'kingdom-of-france', label: 'Suzerain and sovereign after 1204' },
      { title: 'Rouen', type: 'location', slug: 'rouen', label: 'The ducal capital' }
    ],
    events: [
      { title: 'Battle of Hastings', type: 'event', slug: 'battle-of-hastings', label: 'The duchy\'s world-changing victory' },
      { title: 'Siege of Rouen', type: 'event', slug: 'siege-of-rouen', label: 'Henry V\'s conquest completed, 1419' },
      { title: 'Battle of Formigny', type: 'event', slug: 'battle-of-formigny', label: 'English Normandy\'s end, 1450' }
    ]
  },
  sources: [
    { title: 'Duchy of Normandy — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Duchy_of_Normandy' },
    { title: 'The Normans: The History of a Dynasty', author: 'David Crouch', type: 'book' },
    { title: 'William the Conqueror', author: 'David Bates', type: 'book', note: 'The standard modern biography, rich on the duchy\'s governance.' }
  ]
})

// ── COUNTY OF FLANDERS ──────────────────────────────────────────────────────
patch('county-of-flanders', {
  overview: [
    'Flanders was medieval Europe\'s industrial heartland: a small county owing homage to France (and, for its eastern fringe, the Empire) that by 1200 packed the continent\'s densest towns — Ghent, Bruges, Ypres — around the greatest cloth industry of the age, weaving English wool for every market from Novgorod to Cairo.',
    'That wealth made its politics Europe\'s bellwether: counts caught between their French suzerain and their English wool supplier; patricians against weavers in the streets; the communal militias\' stunning victory over French chivalry at Courtrai (1302); and the Burgundian acquisition of 1384 that folded the county into the Low Countries\' new composite state.'
  ],
  contentSections: [
    { title: 'Overview', paragraphs: [
      'Flanders was medieval Europe\'s industrial heartland: a small county owing homage to France (and, for its eastern fringe, the Empire) that by 1200 packed the continent\'s densest towns — Ghent, Bruges, Ypres — around the greatest cloth industry of the age, weaving English wool for every market from Novgorod to Cairo.',
      'That wealth made its politics Europe\'s bellwether: counts caught between their French suzerain and their English wool supplier; patricians against weavers in the streets; the communal militias\' stunning victory over French chivalry at Courtrai in 1302; and the Burgundian acquisition of 1384 that folded the county into the Low Countries\' new composite state.'
    ]},
    { title: 'Background and origins', paragraphs: [
      'The county began in the Viking age: Baldwin I "Iron Arm", who eloped with Charles the Bald\'s daughter Judith around 862, and his successors built the coastal march\'s ring-forts (Bruges, Ghent, Saint-Omer) into the base of a hereditary principality that the weak West Frankish crown could neither control nor revoke. Baldwin II and Arnulf I pushed south into Artois; by 1000 the counts ruled the strongest principality of the French north.',
      'Geography wrote its destiny: rivers and coast facing England, soil better for sheep and towns than lordships, and position athwart every route between France, the Empire, and the sea. The eleventh century added the fatal complication — counties of imperial Flanders east of the Scheldt — making the counts double vassals and their politics permanently international.'
    ]},
    { title: 'High Middle Ages: the towns\' century', paragraphs: [
      'Twelfth-century Flanders was Europe\'s urban laboratory: Ghent and Bruges growing past thirty thousand souls, Ypres\'s cloth halls rising, charters bought and defended — most dramatically after Count Charles the Good\'s murder in Bruges church (1127), when the towns bargained their liberties between rival claimants with the chronicler Galbert of Bruges taking the minutes. Count Thierry and Philip of Alsace ruled a model principality: bailiffs, written town law (the keuren), the great fairs cycle, and crusading prestige — Philip dying before Acre in 1191.',
      'His death began the squeeze: Philip Augustus took Artois, and the counts\' inheritance passed through heiresses — Baldwin IX departing to be Latin emperor of Constantinople in 1204, his daughters Joan and Margaret ruling for six decades under French pressure. The crisis peaked under Guy of Dampierre: allied with England\'s Edward I over the wool that fed his towns, he was imprisoned and his county occupied by Philip IV — until the towns rose, massacred the French garrison of Bruges in the "Matins" of May 1302, and on 11 July destroyed the royal army\'s chivalry in the golden-spurs field of Courtrai.'
    ]},
    { title: 'Late Middle Ages: revolt and Burgundy', paragraphs: [
      'The fourteenth century ran on the town-count-king triangle. Mons-en-Pévèle (1304) and the treaty of Athis restored comital rule at ruinous cost; the weavers\' regimes kept seizing the cities — under Jacob van Artevelde, Ghent ruled Flanders (1338–1345) in alliance with Edward III, who was proclaimed king of France in its Friday Market in 1340, the year his fleet won at Sluys; under Philip van Artevelde the last great rising beat the count at Beverhoutsveld before dying under the French lances at Roosebeke (1382).',
      'The settlement came by marriage: Margaret of Male, the last count\'s heiress, wed Philip the Bold of Burgundy, and from 1384 Flanders anchored the Burgundian state — its revenues funding the Valois dukes, its towns bargaining and rebelling (Ghent\'s war of 1449–1453 ending in submission at Gavere) inside a composite Low Countries polity, and its ports and painters (van Eyck in Bruges) making the Burgundian century Europe\'s most brilliant north of the Alps.'
    ]},
    { title: 'Major rulers', paragraphs: [
      'Baldwin I Iron Arm, c. 862–879 — the runaway founder of the comital house.',
      'Charles the Good, 1119–1127 — the murdered count whose succession crisis chartered the towns.',
      'Philip of Alsace, 1157–1191 — the model administrator-crusader; Artois his dowry-loss to France.',
      'Baldwin IX, 1194–1205 — count of Flanders and first Latin emperor of Constantinople.',
      'Guy of Dampierre, 1251–1305 — the count whose English alliance brought occupation, and whose towns answered at Courtrai.',
      'Louis of Male, 1346–1384 — the last native count, rich, slippery, and besieged by Ghent.',
      'Philip the Bold of Burgundy, 1384–1404 — the marriage that made Flanders Burgundian.'
    ]},
    { title: 'Economy and trade', paragraphs: [
      'Flanders was the medieval economy\'s densest node: the cloth towns turning English wool into the luxury broadcloths of Ypres, Ghent, and Bruges; the fairs of Flanders linking to Champagne\'s; and Bruges, once the Zwin channel opened it to sea-going ships, becoming the north\'s money-market — the Italian banking houses\' northern seats, the Hanseatic Kontor, the world\'s first "bourse" named from the Van der Beurse inn. Wool statistics measured politics: an English embargo could starve the looms within a season, which is why Flemish towns repeatedly chose England against their count and king.',
      'The countryside matched the towns: Europe\'s most intensive agriculture on reclaimed polders, the abbeys\' sheep-walks, and a peasantry — free, market-oriented, litigious — as far from classic serfdom as the age offered. The combination made tiny Flanders a fiscal great power: the Burgundian dukes\' Flemish revenues outweighed kingdoms.'
    ]},
    { title: 'Religion, culture, and society', paragraphs: [
      'Flemish society invented much of Europe\'s urban vocabulary: guilds and their halls (Ypres\'s Cloth Hall the age\'s largest civic building), belfries as the communes\' towers of liberty, béguinages housing the women\'s religious movement the region pioneered, and civic militias whose goedendags and pikes schooled Europe at Courtrai in what infantry could do. Chronicle and archive throve — Galbert of Bruges\'s murder-journal of 1127 is medieval Europe\'s most modern-feeling text.',
      'Its church ran from great Benedictine houses (Saint-Bavo and Saint-Peter at Ghent, Saint-Bertin) through the crusading enthusiasm that sent counts to Jerusalem and Constantinople, to the fifteenth century\'s devotio moderna and the parish-and-guild piety van Eyck painted: the Ghent Altarpiece (1432) as the county\'s summa. Language divided by line, not class — Flemish-speaking north, French-speaking Walloon fringe and comital court — a bilingualism the Burgundian state inherited and managed.'
    ]},
    { title: 'Decline, transformation, and legacy', paragraphs: [
      'Flanders did not fall; it was absorbed and overtaken. Burgundian then Habsburg sovereignty tamed the communes (Ghent\'s privileges broken at Gavere in 1453 and again in 1540); the Zwin silted and Antwerp inherited Bruges\'s markets; the cloth industry migrated to lighter draperies and to England itself. The county\'s name ended as two provinces of later states — but its fabric, urban and physical, endured.',
      'Its legacy is the European city itself: communal self-government bargained from princes, industrial specialisation for export, the strike and the urban revolt as political instruments, and the proof — delivered at Courtrai on 11 July 1302, still the Flemish national day — that the medieval order\'s cavalry could be beaten by townsmen with pikes and a cause.'
    ]}
  ],
  knownFor: [
    'Medieval Europe\'s greatest cloth industry — Ghent, Bruges, Ypres',
    'The Battle of the Golden Spurs at Courtrai, 1302',
    'Bruges as the north\'s financial capital',
    'The Artevelde revolts and the English wool alliance',
    'Absorption into the Burgundian state, 1384'
  ],
  timeline: [
    { date: 'c. 862', title: 'Baldwin Iron Arm', description: 'The elopement-county begins under Charles the Bald\'s reluctant blessing.' },
    { date: '1127–1128', title: 'Murder of Charles the Good', description: 'The Bruges church assassination and succession war win the towns their charters.' },
    { date: '1191', title: 'Artois lost', description: 'Philip of Alsace dies on crusade; Philip Augustus takes the county\'s southern third.' },
    { date: '1204', title: 'A count on the Bosphorus', description: 'Baldwin IX becomes Latin emperor of Constantinople; heiresses rule Flanders for sixty years.' },
    { date: '18 May 1302', title: 'The Matins of Bruges', description: 'The towns massacre the French garrison; the county rises against occupation.' },
    { date: '11 July 1302', title: 'Courtrai — the Golden Spurs', description: 'Communal infantry destroys the French royal cavalry; five hundred pairs of spurs hang in the church.' },
    { date: '1338–1345', title: 'Van Artevelde\'s Ghent', description: 'The towns rule Flanders in English alliance; Edward III is proclaimed king of France in Ghent (1340).' },
    { date: '27 November 1382', title: 'Roosebeke', description: 'Philip van Artevelde\'s militia is crushed by the French royal army; the last great communal war fails.' },
    { date: '1384', title: 'Burgundian Flanders', description: 'Philip the Bold succeeds through Margaret of Male; the county anchors the Burgundian Low Countries.' },
    { date: '1432', title: 'The Ghent Altarpiece', description: 'Van Eyck completes the panel that crowns the county\'s urban civilisation.' }
  ],
  relatedEntries: {
    people: [
      { title: 'Ferdinand of Flanders', type: 'person', slug: 'ferdinand-of-flanders', label: 'The count captured at Bouvines' },
      { title: 'Baldwin I, Latin Emperor', type: 'person', slug: 'baldwin-i-latin-emperor', label: 'Count Baldwin IX, emperor at Constantinople' },
      { title: 'Philip II of France', type: 'person', slug: 'philip-ii-of-france', label: 'The suzerain who took Artois' }
    ],
    locations: [
      { title: 'Kingdom of France', type: 'location', slug: 'kingdom-of-france', label: 'Suzerain and adversary' },
      { title: 'Kingdom of England', type: 'location', slug: 'kingdom-of-england', label: 'The wool lifeline' }
    ],
    events: [
      { title: 'Battle of Bouvines', type: 'event', slug: 'battle-of-bouvines', label: '1214: the county\'s count in the coalition\'s wreck' },
      { title: "Hundred Years' War", type: 'event', slug: 'hundred-years-war', label: 'The wool war\'s great frame' }
    ]
  },
  sources: [
    { title: 'County of Flanders — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/County_of_Flanders' },
    { title: 'Medieval Flanders', author: 'David Nicholas', type: 'book', note: 'The standard English-language history of the county.' },
    { title: 'Galbert of Bruges, The Murder of Charles the Good', author: 'Galbert of Bruges', type: 'primary source' }
  ]
})

fs.writeFileSync(dataPath, JSON.stringify(data, null, 2) + '\n')
console.log('Batch 2 (Iberia + France) complete.')
