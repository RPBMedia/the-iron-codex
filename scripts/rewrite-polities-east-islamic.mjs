// Polity audit batch 5: Eastern Europe, the crusader states, and the Islamic
// polities. Final content batch of the kingdom/polity audit.
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

// ── KINGDOM OF POLAND ───────────────────────────────────────────────────────
patch('kingdom-of-poland', {
  overview: [
    'Poland entered Christendom in 966 with Mieszko I\'s baptism and became a kingdom with Bolesław the Brave\'s coronation (1025): a Piast realm between Empire and Rus\' that fragmented for two centuries after 1138, was reassembled by Władysław the Short (crowned 1320), and reached its medieval height under Casimir the Great and the Jagiellonian union with Lithuania.',
    'Its defining late medieval facts were the union of Krewo (1385–86) — Jadwiga\'s marriage to the baptised Jogaila creating Europe\'s largest composite state — and the victory over the Teutonic Order at the Battle of Grunwald (1410), which broke the crusader-state\'s power and fixed the Baltic balance for a century.'
  ],
  contentSections: [
    { title: 'Overview', paragraphs: [
      'Poland entered Christendom in 966 with Mieszko I\'s baptism and became a kingdom with Bolesław the Brave\'s coronation (1025): a Piast realm between Empire and Rus\' that fragmented for two centuries after 1138, was reassembled by Władysław the Short (crowned 1320), and reached its medieval height under Casimir the Great and the Jagiellonian union with Lithuania.',
      'Its defining late medieval facts were the union of Krewo (1385–86) — Jadwiga of Poland\'s marriage to the baptised Jogaila creating Europe\'s largest composite state — and the victory over the Teutonic Order at the Battle of Grunwald (1410), which broke the crusader-state\'s power and fixed the Baltic balance for a century.'
    ]},
    { title: 'Background and origins', paragraphs: [
      'The Polans of the Warta basin — gord-building West Slavs around Gniezno and Poznań — produced the Piast dynasty whose first documented duke, Mieszko I, took baptism in 966 through his Bohemian marriage: conversion as sovereignty, placing his realm under Saint Peter (the Dagome iudex donation) to fence off imperial claims.',
      'His son Bolesław the Brave hosted Otto III at Gniezno (1000) — congress, archbishopric, and imperial friendship — then fought the next emperor for a generation, taking Lusatia and briefly Kiev, and died crowned king (1025). The eleventh century swung between such peaks and pagan-reaction collapse; the twelfth ended unity: Bolesław III\'s testament (1138) partitioned the realm among his sons\' lines, and the senioral principle rotting into permanent division.'
    ]},
    { title: 'Fragmentation and reunification', paragraphs: [
      'The partition era (1138–1320) shrank dukes and grew everything else: German-law towns planted by the hundreds (Kraków chartered 1257), Cistercian and friar networks, and — fatefully — Duke Conrad of Masovia\'s invitation to the Teutonic Order (1226) against the pagan Prussians: the crusader-state it built on the Baltic would shadow Poland for two centuries. The Mongol irruption of 1241 burned Kraków and killed Duke Henry the Pious at Legnica in the same season.',
      'Reunification came from the smallest duke: Władysław the Short (Łokietek), outlasting Bohemian kings and rebel towns to be crowned at Wawel in 1320, and beating the Order at Płowce (1331) if not recovering Pomerania. His son Casimir III the Great (1333–1370) made the restored kingdom work: statutes codified, Kraków\'s university founded (1364), ethnic-legal pluralism managed (charters confirming Jewish liberties as the west expelled), Red Ruthenia annexed — "found a Poland of wood, left one of brick".'
    ]},
    { title: 'The Jagiellonian turn', paragraphs: [
      'Casimir died heirless; the Angevin interlude (Louis of Hungary, whose Koszyce privilege of 1374 bought the nobility\'s consent to female succession with tax exemption — szlachta constitutionalism\'s seed) delivered the crown to his daughter Jadwiga of Poland, crowned "king" in 1384. The union of Krewo (1385) traded her hand for Lithuania\'s conversion: Jogaila baptised as Władysław II Jagiełło, king beside her from 1386 — two realms, one dynasty, and the Teutonic Order\'s crusading rationale annulled at a stroke.',
      'The reckoning came at Grunwald (15 July 1410): the united Polish-Lithuanian host under Jagiełło and his cousin Vytautas destroyed the Order\'s army — grand master Ulrich von Jungingen dead on the field — and though Toruń\'s first peace (1411) restored most conquests, the Order never recovered; the Thirteen Years\' War (1454–66) ended with the second Peace of Toruń giving Poland Royal Prussia and Danzig, the Order\'s rump a Polish fief. Jagiellonian kings meanwhile collected crowns (Hungary, Bohemia in the dynasty\'s branches) and concessions: Nieszawa\'s statutes (1454) making the szlachta\'s sejmiki the price of war — the noble commonwealth taking shape inside the medieval kingdom.'
    ]},
    { title: 'Political structure and rule', paragraphs: [
      'Piast rule ran on ducal law (ius ducale) — princely rights over settlement, tolls, and service — modified by immunity charters to church and magnates, and after 1226–1320 by the legal mosaic of German-law towns and villages inside Polish ducal jurisdictions. The restored kingdom layered institutions on that base: royal starostas, Casimir\'s statutes for Great and Little Poland, and a two-capital rhythm of Gniezno\'s crown and Kraków\'s court.',
      'The late medieval signature was noble consent: privileges from Koszyce (1374) through Jedlnia ("neminem captivabimus", 1430–33 — no arrest without judgment) to Nieszawa (1454) building the szlachta into a constitutional estate with land-diets and, by the period\'s end, a national sejm — an elective, contract-bound monarchy in the making, with towns and peasants progressively locked out of the bargain.'
    ]},
    { title: 'Major rulers', paragraphs: [
      'Mieszko I, c. 960–992 — baptism (966) and the realm\'s entry into Latin Christendom.',
      'Bolesław the Brave, 992–1025 — Gniezno\'s congress host, Kiev\'s raider, first crowned king.',
      'Bolesław III Wrymouth, 1102–1138 — Pomerania conquered; the testament that partitioned the realm.',
      'Władysław the Short, crowned 1320 — the reunifier of the crown at Wawel.',
      'Casimir III the Great, 1333–1370 — statutes, the university (1364), Red Ruthenia: the medieval kingdom\'s architect.',
      'Jadwiga of Poland, 1384–1399 — king in her own right; Krewo\'s union her sacrifice and design.',
      'Władysław II Jagiełło, 1386–1434 — Lithuania\'s convert-duke as Poland\'s king; Grunwald\'s victor.',
      'Casimir IV Jagiellon, 1447–1492 — the Thirteen Years\' War won; Royal Prussia annexed; the dynasty across three crowns.'
    ]},
    { title: 'Wars, battles, and expansion', paragraphs: [
      'Poland\'s wars ran on three fronts: the Empire and Bohemia early (Bolesław\'s wars, the Luxembourg claims); the steppe and Rus\' east (Kiev entered 1018; the Mongol catastrophes of 1241 — Legnica — 1259, and 1287; Red Ruthenia absorbed from 1340); and above all the Baltic north against the Teutonic Order — Gdańsk\'s seizure (1308), Płowce (1331), Grunwald (1410), and the Thirteen Years\' War (1454–1466) that reversed 1308 at last.',
      'Grunwald anchors the roll: one of medieval Europe\'s largest battles, the Order\'s leadership annihilated, and its myth — Polish-Lithuanian brotherhood in arms — outlasting every later partition of the nations that won it.'
    ]},
    { title: 'Religion, culture, and society', paragraphs: [
      'The Polish church grew from Adalbert\'s martyr-cult (his relics at Gniezno buying the 1000 archbishopric) to a province dense with Cistercians, friars, and bishop-statesmen (Oleśnicki the fifteenth-century kingmaker); its university at Kraków — refounded 1400 on Jadwiga\'s jewels — trained the lawyers who argued Poland\'s case against the Order at Constance, where Paweł Włodkowic defended pagans\' natural rights against crusade: a Polish contribution to international law\'s prehistory.',
      'Society was plural by policy: Polish knightly clans (herby shared across families), German-law burghers, the largest Jewish settlement in Europe growing under Bolesław the Pious\'s Kalisz statute (1264) and Casimir\'s confirmations, Armenian and Ruthenian merchants in the Lviv trade — with the szlachta\'s rise and the towns\' late medieval stagnation setting the Commonwealth\'s future social architecture.'
    ]},
    { title: 'Legacy', paragraphs: [
      'Medieval Poland\'s legacy is the union itself: Krewo and its successors (culminating in Lublin, 1569) built Europe\'s great federal experiment, and Grunwald its founding battle-memory; the noble-consent constitutionalism of 1374–1454 grew into the Commonwealth\'s golden liberty — parliamentary, elective, and ultimately fatal, but medieval Poland\'s most distinctive political creation.',
      'Its eastern turn — Ruthenia, the Lithuanian marriage, the Black Sea trade — moved the realm\'s centre of gravity from Piast west to Jagiellonian east, defining the space (and the arguments) of Polish history into modernity.'
    ]}
  ],
  knownFor: [
    'Mieszko\'s baptism (966) and the Gniezno congress (1000)',
    'Partition (1138–1320) and Casimir the Great\'s rebuilt kingdom',
    'The Kalisz statute and Europe\'s largest Jewish settlement',
    'The union of Krewo (1385) with Lithuania',
    'Grunwald (1410) and the defeat of the Teutonic Order'
  ],
  timeline: [
    { date: '966', title: 'Baptism of Poland', description: 'Mieszko I converts; the realm enters Latin Christendom.' },
    { date: '1000', title: 'Congress of Gniezno', description: 'Otto III at Adalbert\'s tomb; the Polish archbishopric founded.' },
    { date: '1025', title: 'First coronation', description: 'Bolesław the Brave crowned king in his final year.' },
    { date: '1138', title: 'The testament', description: 'Bolesław III\'s partition begins two centuries of fragmentation.' },
    { date: '1226', title: 'The Order invited', description: 'Conrad of Masovia brings the Teutonic Knights against the Prussians.' },
    { date: '9 April 1241', title: 'Legnica', description: 'The Mongols kill Henry the Pious; the fragmented realm burns.' },
    { date: '1320', title: 'Reunification', description: 'Władysław the Short is crowned at Wawel.' },
    { date: '1364', title: 'Kraków university', description: 'Casimir the Great founds the studium generale.' },
    { date: '1385–1386', title: 'Union of Krewo', description: 'Jadwiga weds the baptised Jogaila; Poland-Lithuania begins.' },
    { date: '15 July 1410', title: 'Grunwald', description: 'The Order\'s army is destroyed; its grand master falls.' },
    { date: '1454–1466', title: 'Thirteen Years\' War', description: 'Royal Prussia and Danzig pass to the crown; the Order becomes a fief.' }
  ],
  relatedEntries: {
    people: [
      { title: 'Jadwiga of Poland', type: 'person', slug: 'jadwiga-of-poland', label: 'The union\'s queen-king' },
      { title: 'Władysław II Jagiełło', type: 'person', slug: 'wladyslaw-ii-jagiello', label: 'Grunwald\'s victor' },
      { title: 'Vytautas', type: 'person', slug: 'vytautas', label: 'The Lithuanian cousin-partner' }
    ],
    locations: [
      { title: 'Grand Duchy of Lithuania', type: 'location', slug: 'grand-duchy-of-lithuania', label: 'The union partner' },
      { title: 'Teutonic Order', type: 'location', slug: 'teutonic-order', label: 'The Baltic adversary' },
      { title: "Kievan Rus'", type: 'location', slug: 'kievan-rus', label: 'The eastern inheritance contested' }
    ],
    events: [ { title: 'Battle of Grunwald', type: 'event', slug: 'battle-of-grunwald', label: '1410' } ]
  },
  sources: [
    { title: 'Kingdom of Poland — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Kingdom_of_Poland_(1385%E2%80%931569)' },
    { title: 'God\'s Playground: A History of Poland, vol. 1', author: 'Norman Davies', type: 'book' },
    { title: 'Gallus Anonymus and Jan Długosz, chronicles', author: 'Polish chronicle tradition', type: 'primary source' }
  ]
})

// ── GRAND DUCHY OF LITHUANIA ────────────────────────────────────────────────
patch('grand-duchy-of-lithuania', {
  overview: [
    'The Grand Duchy of Lithuania was medieval Europe\'s great anomaly: the last pagan state, forged by Mindaugas (crowned 1253) and expanded by Gediminas and Algirdas until it ruled more Orthodox Rus\' than pagan Balts — from the Baltic toward the Black Sea, Kiev itself taken after Blue Waters (1362).',
    'Squeezed between the Teutonic Order\'s perpetual crusade and Moscow\'s rise, it chose the west: Jogaila\'s baptism and Polish crown (1386), Christianisation from 1387, Vytautas\'s great-power decades — Grunwald (1410) shared, the steppe frontier at Vorskla lost (1399) — and the long constitutional dance with Poland that led, past the period\'s edge, to full union.'
  ],
  contentSections: [
    { title: 'Overview', paragraphs: [
      'The Grand Duchy of Lithuania was medieval Europe\'s great anomaly: the last pagan state, forged by Mindaugas (crowned 1253) and expanded by Gediminas and Algirdas until it ruled more Orthodox Rus\' than pagan Balts — from the Baltic toward the Black Sea, Kiev itself taken after Blue Waters (1362).',
      'Squeezed between the Teutonic Order\'s perpetual crusade and Moscow\'s rise, it chose the west: Jogaila\'s baptism and Polish crown (1386), Christianisation from 1387, Vytautas\'s great-power decades — the Battle of Grunwald (1410) shared, the steppe frontier at the Vorskla lost (1399) — and the long constitutional dance with Poland that led, past the period\'s edge, to full union.'
    ]},
    { title: 'Origins and the pagan kingdom', paragraphs: [
      'The Baltic tribes of the Nemunas basin — never Christianised, never conquered by Rus\' — consolidated under pressure: the sword-brothers\' and Teutonic Order\'s crusades from the 1230s made unity survival. Mindaugas united the duchies, accepted baptism for a royal crown (1253, Christendom\'s newest king), then apostatised or was ambiguous, and was assassinated (1263): the experiment\'s end, but not the state\'s.',
      'The pagan grand dukes who followed ran Europe\'s strangest chancery: Gediminas (1316–1341) — Vilnius\'s founder-by-letter, inviting German merchants and friars while rebuffing baptism, marrying his children across Orthodox and Catholic courts — building by diplomacy an empire his sons Algirdas and Kęstutis ran as a remarkable diarchy: Algirdas east against Moscow (thrice at its walls), Kęstutis west against the Order\'s annual reisen (the crusading package-tours of European chivalry — Bolingbroke among the tourists).'
    ]},
    { title: 'Conversion and the Vytautas apogee', paragraphs: [
      'Dynastic struggle after Algirdas — Jogaila against uncle Kęstutis (strangled at Kreva, 1382) and cousin Vytautas — resolved into the union of Krewo (1385): Jogaila baptised, married to Jadwiga of Poland, crowned Władysław II Jagiełło; Lithuania\'s official conversion following from 1387 (Samogitia, the Order\'s coveted corridor, only after 1413). The Order\'s reason-for-being dissolved just as its power peaked.',
      'Vytautas, reconciled as grand duke (Astrava 1392, effectively sovereign), made the duchy a great power: Tatar politics reaching for the steppe (the catastrophic Vorskla, 1399, checking the Black Sea dream), Smolensk taken (1404), Grunwald\'s co-command (1410) — the union\'s armies destroying the Order — the Horodło union (1413) adopting Lithuanian boyars into Polish heraldic clans, and the Congress of Lutsk (1429) offering him a crown he died awaiting (1430): the duchy\'s zenith in one lifetime.'
    ]},
    { title: 'Political structure and rule', paragraphs: [
      'The duchy was a federation under the Gediminid kin: patrimonial grand-ducal core (Vilnius, Trakai) ringed by Rus\' principalities ruled by dynasts or local princes under charters — "we do not destroy the old, we do not impose the new", the formula of Ruthenian autonomy. Chancery Slavonic (Ruthenian) served as state language beside Latin and German diplomacy: a pagan, then Catholic, elite governing an Orthodox majority in their own tongue.',
      'After Horodło (1413) Catholic boyars gained Polish-style rights and offices (voivodes, castellans of Vilnius and Trakai), the council of lords (Rada) hardening into the real government during absentee reigns; privileges of 1432–1447 extended rights across confessional lines to stem Muscovite attraction. The Statutes (1529, past the period) would codify what medieval practice built: Europe\'s largest state run as legal federation.'
    ]},
    { title: 'Major rulers', paragraphs: [
      'Mindaugas, unifier, king 1253–1263 — the crowned experiment and its assassination.',
      'Gediminas, 1316–1341 — Vilnius, the letters to Europe, the dynastic web: the empire\'s architect.',
      'Algirdas, 1345–1377 — Blue Waters (1362), Kiev, and thrice to Moscow\'s walls.',
      'Kęstutis, co-ruler to 1382 — the west\'s defender through the Order\'s crusade-decades.',
      'Jogaila (Władysław II Jagiełło), 1377–1434 — Krewo\'s convert: Lithuania\'s duke as Poland\'s king.',
      'Vytautas the Great, 1392–1430 — Grunwald, Lutsk, and the duchy\'s zenith.'
    ]},
    { title: 'Wars and expansion', paragraphs: [
      'Two-front war defined it: against the Teutonic Order, a century of reisen, castles (Kaunas taken and retaken), Samogitian risings, and the decision at Grunwald (1410) with Melno\'s peace (1422) finally fixing the border; against and across the steppe, Blue Waters (1362) taking the Kiev lands from the Horde, Vorskla (1399) burying Vytautas\'s Tatar grand design, and the long duel with Moscow beginning as Algirdas\'s sieges and continuing as attrition over the Orthodox borderlands.',
      'Expansion was mostly absorption: Polotsk, Vitebsk, Volhynia, Kiev, Smolensk — Rus\' principalities entering the Gediminid federation by conquest, marriage, and charter, until the duchy stretched Baltic-to-Black-Sea steppe: the largest state in Europe governed from wooden Vilnius.'
    ]},
    { title: 'Religion, culture, and society', paragraphs: [
      'Lithuania\'s religious history compresses Europe\'s whole arc into decades: organised paganism (Perkūnas\'s fires, sacred groves — the crusaders\' propaganda and the ethnographers\' evidence agreeing on its vitality) into official Catholicism (1387) planted with Polish clergy and Vilnius\'s cathedral on the temple site — while the Orthodox majority kept its metropolitans (contested between Moscow and Kiev-in-Lithuania), and Vytautas settled Karaites and Tatars around Trakai: a confessional mosaic under dynastic management.',
      'Society ranged from the boyars-becoming-szlachta of Horodło\'s adoption through Ruthenian princely courts and German-law towns (Vilnius chartered 1387) to the peasant communities whose customary dues the charters standardised; culture wrote itself in Ruthenian chronicles (the Lithuanian Chronicles\' dynastic legends), Latin diplomacy, and the layered law that made the later Statutes possible.'
    ]},
    { title: 'Legacy', paragraphs: [
      'The duchy\'s choices drew Eastern Europe\'s map: the western (Catholic-Polish) orientation of 1386 against the Muscovite alternative defined the Belarusian-Ukrainian lands\' history for four centuries, and the Polish-Lithuanian union it founded became the Commonwealth — with the duchy\'s legal traditions (the Statutes) and its Ruthenian chancery culture as lasting substrates of Belarus and Ukraine.',
      'Its medieval image endures doubled: last pagan Europe holding two crusading fronts for 150 years, and Grunwald\'s co-victor — the state that beat the crusade both by battle and by baptism.'
    ]}
  ],
  knownFor: [
    'Europe\'s last pagan state; Mindaugas\'s crown (1253)',
    'Gediminas\'s Vilnius and the Baltic–Black Sea federation',
    'Blue Waters (1362) and the absorption of western Rus\'',
    'Krewo (1385) and conversion; Grunwald (1410) with Poland',
    'Vytautas the Great\'s zenith'
  ],
  timeline: [
    { date: '1236', title: 'Saule', description: 'The Sword-Brothers are destroyed by the Samogitians; the Order absorbs the survivors — the crusade hardens.' },
    { date: '1253', title: 'Mindaugas crowned', description: 'Lithuania\'s only royal coronation; assassination (1263) ends the Christian experiment.' },
    { date: '1316–1341', title: 'Gediminas', description: 'Vilnius founded by invitation-letters; the dynastic federation built.' },
    { date: '1362', title: 'Blue Waters', description: 'Algirdas defeats the Horde; Kiev enters the duchy.' },
    { date: '1385–1387', title: 'Krewo and conversion', description: 'Jogaila\'s baptism, Polish crown, and Lithuania\'s Christianisation.' },
    { date: '12 August 1399', title: 'The Vorskla', description: 'Vytautas\'s Tatar grand design dies on the steppe.' },
    { date: '15 July 1410', title: 'Grunwald', description: 'The union\'s armies destroy the Teutonic Order\'s host.' },
    { date: '1413', title: 'Union of Horodło', description: 'Lithuanian boyars adopted into Polish clans; the federation constitutionalised.' },
    { date: '1429–1430', title: 'Lutsk and the lost crown', description: 'Vytautas dies awaiting the coronation the congress offered.' }
  ],
  relatedEntries: {
    people: [
      { title: 'Vytautas', type: 'person', slug: 'vytautas', label: 'The Great' },
      { title: 'Władysław II Jagiełło', type: 'person', slug: 'wladyslaw-ii-jagiello', label: 'Duke become king' },
      { title: 'Jadwiga of Poland', type: 'person', slug: 'jadwiga-of-poland', label: 'The union\'s other half' }
    ],
    locations: [
      { title: 'Kingdom of Poland', type: 'location', slug: 'kingdom-of-poland', label: 'The union partner' },
      { title: 'Teutonic Order', type: 'location', slug: 'teutonic-order', label: 'The crusading enemy' },
      { title: "Kievan Rus'", type: 'location', slug: 'kievan-rus', label: 'The inheritance absorbed' }
    ],
    events: [ { title: 'Battle of Grunwald', type: 'event', slug: 'battle-of-grunwald' } ]
  },
  sources: [
    { title: 'Grand Duchy of Lithuania — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Grand_Duchy_of_Lithuania' },
    { title: 'Lithuania Ascending: A Pagan Empire within East-Central Europe', author: 'S. C. Rowell', type: 'book' },
    { title: 'The Letters of Gediminas', author: 'Grand-ducal chancery', type: 'primary source' }
  ]
})

// ── KIEVAN RUS' ─────────────────────────────────────────────────────────────
patch('kievan-rus', {
  overview: [
    'Kievan Rus\' was the river-road polity of the eastern Slavs and their Varangian princes: by the Primary Chronicle\'s account founded from Rurik\'s line, seated at Kiev by Oleg, and converted wholesale when Vladimir the Great took baptism from Byzantium (988) — the founding act of East Slavic Christianity.',
    'At its height under Yaroslav the Wise (law, cathedrals, dynastic marriages across Europe), it dissolved into a princely federation ruled by the Rurikid kin until the Mongol storm — Kiev annihilated in 1240 — broke it into successor spheres: Galicia-Volhynia, Novgorod\'s republic, and the northeastern principalities from which Moscow would rise, while Lithuania absorbed the west.'
  ],
  contentSections: [
    { title: 'Overview', paragraphs: [
      'Kievan Rus\' was the river-road polity of the eastern Slavs and their Varangian princes: by the Primary Chronicle\'s account founded from Rurik\'s line, seated at Kiev by Oleg, and converted wholesale when Vladimir the Great took baptism from Byzantium (988) — the founding act of East Slavic Christianity.',
      'At its height under Yaroslav the Wise (law, cathedrals, dynastic marriages across Europe), it dissolved into a princely federation ruled by the Rurikid kin until the Mongol storm — Kiev annihilated in 1240 — broke it into successor spheres: Galicia-Volhynia, Novgorod\'s republic, and the northeastern principalities from which Moscow would rise, while Lithuania absorbed the west.'
    ]},
    { title: 'Origins: the chronicle and the rivers', paragraphs: [
      'The sources demand care: the Primary Chronicle, compiled at Kiev c. 1113, tells the calling of Rurik (traditionally 862), Oleg\'s seizure of Kiev, and the early princes as founding tradition — invaluable, ideological, and centuries after the fact. What archaeology confirms is the river-road itself: Scandinavian traders-raiders (the Rus\') on the Volkhov-Dnieper route "from the Varangians to the Greeks", fortified emporia at Ladoga, Novgorod, Gnezdovo, and treaties with Byzantium (907/911, 944 — preserved verbatim) marking a state coalescing around tribute and trade.',
      'The tenth-century princes of the tradition — Igor of Kiev killed collecting tribute, Olga\'s regency and revenge then personal conversion, Sviatoslav\'s decade of storm against Khazaria and Byzantium — read as chronicle-shaped memory of a real consolidation: by Vladimir\'s accession the dynasty ruled the whole river-road and its Slavic hinterlands.'
    ]},
    { title: 'Conversion and the golden age', paragraphs: [
      'Vladimir the Great\'s baptism (988, tied to marriage with the emperor\'s sister and troops for Basil II) converted the realm by decree — idols into the Dnieper, Byzantine clergy, the tithe-church — and bound Rus\' to the Orthodox commonwealth: liturgy in Slavonic (Cyril and Methodius\'s inheritance), metropolitan of Kiev under Constantinople, and the political theology of prince-and-church that outlived every later fragmentation.',
      'Yaroslav the Wise (1019–1054) built the apogee: Saint Sophia of Kiev raised after the Pecheneg victory (1036), the Russkaya Pravda law-code\'s core, the first native metropolitan (Hilarion, whose "Sermon on Law and Grace" is East Slavic literature\'s founding oration), and a marriage-web — daughters queens of France, Hungary, Norway — that made Kiev a European court of the first rank. His testament\'s rota system (brothers rotating through cities toward Kiev) organised and doomed the succession: kin-federation as constitution.'
    ]},
    { title: 'Fragmentation and the Mongol end', paragraphs: [
      'The twelfth century multiplied princes and centres: Novgorod taking princes on contract (its veche and archbishop running a merchant republic toward the Baltic and the fur north), Vladimir-Suzdal rising in the northeast (Andrei Bogoliubsky sacking Kiev itself in 1169 and taking the primacy north), Galicia-Volhynia flowering toward the west — the Rurikid kin warring within the rules (and outside them: princes\' congresses like Liubech, 1097, redrawing the shares), while Cuman steppe pressure ground the south (the Igor Tale\'s doomed raid, 1185, its literary monument).',
      'The Mongols ended the world in two blows: Kalka (1223), the allied princes\' annihilation by a reconnaissance; then Batu\'s invasion — Riazan, Vladimir (1238), and Kiev stormed and razed December 1240, the traveller Carpini finding "countless skulls" five years later. The successor-geometry followed: the northeast under the Golden Horde\'s yoke (Alexander Nevsky\'s Novgorod beating Swedes and Teutonic Knights — the Neva 1240, Lake Peipus 1242 — while paying the khan), Galicia-Volhynia briefly crowned (Daniel, 1253) then absorbed by Poland and Lithuania, and the "all Rus\'" title migrating with the metropolitans toward Moscow.'
    ]},
    { title: 'Political structure and rule', paragraphs: [
      'Rus\' was ruled as a dynastic condominium: the whole land the Rurikid kin\'s patrimony, cities allotted by seniority (the rota), Kiev\'s grand prince first among brothers — a system generating both cohesion (only Rurikids could rule; the dynasty never lost the land) and structured civil war (every generation\'s ladder-climbing). Princes ruled with druzhina retinues, veche town assemblies (Novgorod\'s sovereign, Kiev\'s riotous), and tribute-circuits monetised into the fur-silver-slave trade with Byzantium and the caliphate.',
      'Law layered custom and import: the Russkaya Pravda\'s wergild tariffs (no death penalty — fines and feud), church statutes carving family and morals for the metropolitans\' courts, treaties with Byzantium regulating merchants — a legal culture written in Slavonic from the conversion generation onward.'
    ]},
    { title: 'Major rulers', paragraphs: [
      'Rurik, trad. 862–879 — the called founder of chronicle tradition.',
      'Oleg, trad. 879–912 — Kiev seized, Constantinople\'s gates shielded, the 911 treaty.',
      'Olga, regent 945–c. 960 — revenge, reform of tribute, and personal conversion: the dynasty\'s first Christian.',
      'Sviatoslav I, c. 962–972 — Khazaria destroyed, Bulgaria contested, death at the rapids.',
      'Vladimir the Great, 980–1015 — the baptism of Rus\' (988).',
      'Yaroslav the Wise, 1019–1054 — law, Sophia, and the European marriage-web.',
      'Vladimir Monomakh, 1113–1125 — the last strong Kievan hand; his Testament the princely mirror.',
      'Alexander Nevsky, d. 1263 — Novgorod\'s defender west, the Horde\'s pragmatist east.'
    ]},
    { title: 'Religion, culture, and society', paragraphs: [
      'The conversion built a civilisation: Slavonic liturgy and letters (chronicles at the Caves monastery, whose founders Antony and Theodosius set Rus\' monasticism\'s pattern), Byzantine-taught masonry (Kiev\'s and Novgorod\'s Sophias, Vladimir\'s limestone churches), icon and fresco schools, and the church\'s courts and calendar structuring life from Novgorod\'s birchbark-literate townsfolk — hundreds of everyday letters surviving in the mud — to the princely courts.',
      'Society ran from princes and boyars through townsmen of the veche cities (Kiev, Novgorod, Smolensk on the great routes) to smerdy peasants and slaves; the economy on furs, wax, honey, and transit — Byzantine silks and steppe horses, Baltic amber and Islamic silver — the river-road\'s tolls funding the gold-domed skyline that awed the age.'
    ]},
    { title: 'Legacy', paragraphs: [
      'Kievan Rus\' is the shared medieval root of Ukraine, Belarus, and Russia — and therefore modern Europe\'s most contested inheritance: Kiev\'s baptism, Yaroslav\'s law, and the Rurikid principle claimed by every successor. The historian\'s duty the Codex follows: state the sources\' nature (chronicle tradition, not documentary certainty) and resist reading modern nations backward into the river-road polity.',
      'Its structures had long afterlives: the Orthodox metropolia\'s migrations mapping political gravity (Kiev to Vladimir to Moscow; a western metropolia under Lithuania), Novgorod\'s republic carrying veche government to 1478, and the steppe-forest dual frontier — Horde tribute and Baltic crusade — schooling the successor states\' politics for centuries.'
    ]}
  ],
  knownFor: [
    'The river-road polity of the Varangian-Slav synthesis',
    'Vladimir\'s baptism of Rus\' (988)',
    'Yaroslav the Wise: law, Saint Sophia, European marriages',
    'The Rurikid rota-federation and its civil wars',
    'Kalka (1223) and Kiev\'s destruction by the Mongols (1240)'
  ],
  timeline: [
    { date: 'trad. 862', title: 'The calling of Rurik', description: 'Chronicle tradition\'s founding: the Varangian princes take Novgorod.' },
    { date: '907/911', title: 'Byzantine treaties', description: 'Oleg\'s campaigns yield trade treaties preserved word for word.' },
    { date: '945–c. 960', title: 'Olga\'s regency', description: 'Tribute reformed after Igor\'s death; the regent converts at Constantinople.' },
    { date: '965–971', title: 'Sviatoslav\'s storm', description: 'Khazaria destroyed; Bulgaria won and lost; death at the rapids (972).' },
    { date: '988', title: 'The baptism of Rus\'', description: 'Vladimir converts the realm to Byzantine Christianity.' },
    { date: '1036–1054', title: 'Yaroslav\'s apogee', description: 'Pechenegs crushed; Sophia built; the Pravda codified; Europe married.' },
    { date: '1097', title: 'Liubech congress', description: 'The princes partition patrimonies — federation formalised.' },
    { date: '1169', title: 'Kiev sacked by Bogoliubsky', description: 'The primacy drifts northeast to Vladimir.' },
    { date: '31 May 1223', title: 'The Kalka', description: 'The princes\' coalition is annihilated by the Mongol reconnaissance.' },
    { date: '6 December 1240', title: 'Kiev destroyed', description: 'Batu\'s storm ends the old Rus\'; the successor spheres divide the inheritance.' },
    { date: '5 April 1242', title: 'Lake Peipus', description: 'Alexander Nevsky halts the Teutonic push on the ice.' }
  ],
  relatedEntries: {
    people: [
      { title: 'Rurik', type: 'person', slug: 'rurik', label: 'Chronicle founder' },
      { title: 'Oleg of Novgorod', type: 'person', slug: 'oleg-of-novgorod' },
      { title: 'Olga of Kiev', type: 'person', slug: 'olga-of-kiev' },
      { title: 'Sviatoslav I of Kiev', type: 'person', slug: 'sviatoslav-i-of-kiev' }
    ],
    locations: [
      { title: 'Byzantine Empire', type: 'location', slug: 'byzantine-empire', label: 'Baptismal mother-civilisation' },
      { title: 'Grand Duchy of Lithuania', type: 'location', slug: 'grand-duchy-of-lithuania', label: 'Absorber of the western lands' }
    ],
    events: []
  },
  sources: [
    { title: "Kievan Rus' — Wikipedia", author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Kievan_Rus%27' },
    { title: 'The Russian Primary Chronicle (ed. Cross & Sherbowitz-Wetzor)', author: 'Kievan compilers', type: 'primary source', note: 'Twelfth-century tradition — read critically per the Codex\'s Rus\' rules.' },
    { title: 'The Emergence of Rus 750–1200', author: 'Simon Franklin & Jonathan Shepard', type: 'book' }
  ]
})

// ── PRINCIPALITY OF SERBIA ──────────────────────────────────────────────────
patch('principality-of-serbia', {
  overview: [
    'Medieval Serbia rose from župan-lordships between Byzantium and the Adriatic to a crowned kingdom under the Nemanjić dynasty — founded by Stefan Nemanja (grand župan from 1166), crowned under his son Stefan "the First-Crowned" (1217), sanctified by Saint Sava\'s autocephalous church (1219) — and peaked as an empire when Stefan Dušan was crowned tsar (1346) with his law-code binding it.',
    'After Dušan the empire dissolved into regional lords; Prince Lazar\'s Moravian Serbia led the resistance that met the Ottomans at the Battle of Kosovo (1389) — the field that became the nation\'s founding epic — and the despotate that followed (Stefan Lazarević, Đurađ Branković) balanced between Hungary and the sultans until Smederevo\'s fall (1459) ended medieval Serbian statehood.'
  ],
  contentSections: [
    { title: 'Overview', paragraphs: [
      'Medieval Serbia rose from župan-lordships between Byzantium and the Adriatic to a crowned kingdom under the Nemanjić dynasty — founded by Stefan Nemanja (grand župan from 1166), crowned under his son Stefan "the First-Crowned" (1217), sanctified by Saint Sava\'s autocephalous church (1219) — and peaked as an empire when Stefan Dušan was crowned tsar (1346) with his law-code binding it.',
      'After Dušan the empire dissolved into regional lords; Prince Lazar\'s Moravian Serbia led the resistance that met the Ottomans at the Battle of Kosovo (1389) — the field that became the nation\'s founding epic — and the despotate that followed (Stefan Lazarević, Đurađ Branković) balanced between Hungary and the sultans until Smederevo\'s fall (1459) ended medieval Serbian statehood.'
    ]},
    { title: 'Background and the Nemanjić rise', paragraphs: [
      'Serb polities formed early between empires: Raška\'s inland župans and the maritime principalities (Zeta/Duklja, briefly royal in the eleventh century) oscillating in Byzantine orbit, Christianised from both Rome and Constantinople — a dual pull the whole medieval story inherits.',
      'Stefan Nemanja (r. 1166–1196) built the durable house: uniting Raška and Zeta, fighting and accommodating Manuel I\'s Byzantium, endowing Hilandar on Athos where he died a monk (Saint Simeon). His sons split the inheritance\'s tools — Stefan taking the crown (from a papal legate, 1217; Orthodox reconciliation following), Sava taking the church: autocephaly negotiated at Nicaea (1219), Sava as first archbishop, Žiča\'s coronation church, and the dynasty\'s distinctive sanctity — a royal house that canonised itself generation by generation, its frescoed foundations (Studenica, Mileševa, Sopoćani) the argument in paint.'
    ]},
    { title: 'Kingdom to empire', paragraphs: [
      'The thirteenth-century kingdom prospered on mining: Saxon miners (the "Sasi") opening Novo Brdo and Brskovo, silver funding kings — Uroš I, Milutin (r. 1282–1321), whose forty churches and Byzantine marriage (a five-year-old\'s scandalous diplomacy) marked the Byzantinisation of court and law, and Stefan Dečanski, victor of the decisive battle against Bulgaria at Velbazhd (1330), builder of Dečani, deposed and strangled by his son.',
      'That son, Stefan Dušan (1331–1355), took the empire: Byzantine civil wars opening Macedonia, Albania, Epirus, and Thessaly to his armies, coronation as "tsar of the Serbs and Greeks" at Skopje (Easter 1346, the archbishopric raised to patriarchate to crown him), and the Zakonik (1349, expanded 1354) — the great law-code fusing Byzantine law with Serbian custom, its articles binding even the tsar\'s judges "not according to fear of me... but according to the law". He died (1355) preparing for Constantinople; the empire\'s seams — regional magnates, an unripe centre — opened at once.'
    ]},
    { title: 'Kosovo and the despotate', paragraphs: [
      'The dissolution gave the Ottomans their entry: the Maritsa (1371) destroying the Macedonian lords, vassalage spreading, and Prince Lazar — strongest of the successor-lords, church-builder (Ravanica) and coalition-maker — meeting Murad I at Kosovo Polje on 15 June 1389: both rulers dead, the armies wrecked, the political result vassalage — and the cultural result the Kosovo epic: Lazar\'s heavenly-kingdom choice, Miloš Obilić\'s tyrannicide, the field of blackbirds as the nation\'s Passion narrative, built in liturgy and folk song across the following centuries.',
      'The despotate was the long, brilliant epilogue: Stefan Lazarević — Bayezid\'s vassal at Nicopolis and Ankara, then despot by Byzantine grant (1402) — rebuilding around Belgrade with a chancery culture (his own writings, Resava\'s scriptoria) that made the era a "Serbian renaissance"; Đurađ Branković\'s Smederevo (1430) holding the balance through the Varna wars until Mehmed II\'s systematic conquests: Novo Brdo\'s silver taken (1455), Smederevo surrendered (1459) — the medieval state\'s end, its church and epic carrying the nation stateless.'
    ]},
    { title: 'Political structure and rule', paragraphs: [
      'Nemanjić rule fused Byzantine forms with dynastic sanctity: courts of logothetes and sebastokrators beside župans and voivodes; sabori (assemblies of lords and hierarchs) acclaiming successions and laws; the ruler\'s ktitor-role — founding and painting monasteries — as constitutional theatre, the dynasty\'s saints its legitimacy. Dušan\'s Zakonik shows the machinery mature: paragraphs on courts, pronoia-style grants, mining law, and the meropah peasant\'s fixed obligations.',
      'The economy\'s spine was metal and the coast: Novo Brdo\'s silver-gold glama among Europe\'s richest strikes, Ragusa (Dubrovnik) holding the trade concessions and paying the tribute, coastal charters balancing Catholic towns under Orthodox crowns — a dual-rite realm managed, mostly, with notable pragmatism.'
    ]},
    { title: 'Major rulers', paragraphs: [
      'Stefan Nemanja, 1166–1196 — founder; Saint Simeon of Hilandar.',
      'Stefan the First-Crowned, 1196–1228 — the royal crown (1217) beside his brother Sava\'s autocephaly (1219).',
      'Milutin, 1282–1321 — Byzantinisation, forty foundations, Macedonian expansion.',
      'Stefan Dečanski, 1321–1331 — Velbazhd\'s victor, Dečani\'s builder, his son\'s victim.',
      'Stefan Dušan, 1331–1355 — tsar (1346) and lawgiver (1349): the empire\'s decade.',
      'Prince Lazar, c. 1373–1389 — Moravian Serbia\'s builder and Kosovo\'s martyr-prince.',
      'Stefan Lazarević, 1389–1427 — despot, writer, Belgrade\'s rebuilder.',
      'Đurađ Branković, 1427–1456 — Smederevo\'s founder, the balance\'s last master.'
    ]},
    { title: 'Religion, culture, and society', paragraphs: [
      'The Serbian church was the dynasty\'s twin: Sava\'s autocephaly and typika, the self-canonising royal line, and the monastic map — Studenica\'s marble, Mileševa\'s White Angel, Sopoćani\'s classicism, Gračanica and Dečani\'s painted encyclopaedias — that constitutes one of medieval Europe\'s great artistic corpora; raised to patriarchate (1346) for the imperial coronation, reconciled with Constantinople (1375), and after the fall the nation\'s stateless government.',
      'Its literature ran from Sava\'s and Domentijan\'s vitae through Dušan\'s legal Slavonic to the despotate\'s refined circle (Constantine the Philosopher\'s biography of Stefan Lazarević); its society from magnate courts and Saxon-charter mining towns through Vlach pastoral catuns to the Zakonik\'s bound peasants — with Ragusan merchants, Athonite monks, and steppe-frontier soldiers threading it into every neighbouring world.'
    ]},
    { title: 'Legacy', paragraphs: [
      'Medieval Serbia\'s deepest legacy is liturgical-national: the autocephalous church as the people\'s frame through five Ottoman centuries, the Nemanjić saints and painted monasteries as its memory palaces, and Kosovo — history transfigured into covenant — as the epic around which modern Serbian identity organised itself, with all the power and peril such inheritances carry.',
      'Institutionally it left the Zakonik\'s legal monument, the mining-urban network the Ottomans inherited running, and the despotate\'s manuscript culture seeding early modern Slavic letters: a state extinguished in 1459 whose civilisational furniture never stopped being used.'
    ]}
  ],
  knownFor: [
    'The Nemanjić dynasty: crown (1217) and autocephalous church (1219)',
    'Dušan\'s empire and the Zakonik law-code (1346–1349)',
    'The painted monasteries from Studenica to Dečani',
    'Kosovo (1389) and its epic covenant',
    'The despotate\'s Belgrade and Smederevo; the fall of 1459'
  ],
  timeline: [
    { date: '1166', title: 'Stefan Nemanja', description: 'The grand župan unites Raška and Zeta; the dynasty begins.' },
    { date: '1217/1219', title: 'Crown and church', description: 'Stefan First-Crowned takes the royal title; Sava wins autocephaly at Nicaea.' },
    { date: '1330', title: 'Velbazhd', description: 'Bulgaria\'s challenge broken; Macedonia opens to Serbian power.' },
    { date: 'Easter 1346', title: 'Imperial coronation', description: 'Dušan crowned tsar at Skopje; the patriarchate created to crown him.' },
    { date: '1349', title: 'The Zakonik', description: 'The great law-code binds empire, church, and custom.' },
    { date: '26 September 1371', title: 'The Maritsa', description: 'The Macedonian lords fall to the Ottomans; vassalage spreads.' },
    { date: '15 June 1389', title: 'Kosovo', description: 'Lazar and Murad I die; the battle becomes the nation\'s epic.' },
    { date: '1402', title: 'The despotate', description: 'Stefan Lazarević, despot by Byzantine grant, rebuilds around Belgrade.' },
    { date: '1430', title: 'Smederevo built', description: 'Branković\'s great fortress anchors the last balance.' },
    { date: '1459', title: 'The fall', description: 'Smederevo surrenders to Mehmed II; medieval Serbian statehood ends.' }
  ],
  relatedEntries: {
    people: [
      { title: 'Prince Lazar', type: 'person', slug: 'prince-lazar', label: 'Kosovo\'s martyr-prince' },
      { title: 'Murad I', type: 'person', slug: 'murad-i', label: 'The sultan who fell the same day' },
      { title: 'Bayezid I', type: 'person', slug: 'bayezid-i', label: 'The vassalage\'s enforcer' }
    ],
    locations: [
      { title: 'Byzantine Empire', type: 'location', slug: 'byzantine-empire', label: 'Model, rival, and church-mother' },
      { title: 'Ottoman Empire', type: 'location', slug: 'ottoman-empire', label: 'The conqueror' }
    ],
    events: [ { title: 'Battle of Kosovo', type: 'event', slug: 'battle-of-kosovo', label: '1389' } ]
  },
  sources: [
    { title: 'Medieval Serbia — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Serbia_in_the_Middle_Ages' },
    { title: 'The Late Medieval Balkans', author: 'John V. A. Fine Jr.', type: 'book' },
    { title: 'Dušan\'s Code (Zakonik)', author: 'Serbian imperial chancery', type: 'primary source' }
  ]
})

// ── TEUTONIC ORDER ──────────────────────────────────────────────────────────
patch('teutonic-order', {
  overview: [
    'The Teutonic Order — the Order of the German House of Saint Mary in Jerusalem — began as a crusader hospital at Acre (1190), militarised in 1198, and under Hermann von Salza traded the Levant for the Baltic: invited by Conrad of Masovia (1226), chartered by the Golden Bull of Rimini, it conquered pagan Prussia and merged with Livonia\'s Sword-Brothers (1237) to rule a unique monastic state.',
    'Its Ordensstaat — brick castles like Marienburg, planted towns, Hanseatic grain trade, and the reisen crusade-tourism of European chivalry — dominated the Baltic until Lithuania\'s conversion removed its rationale and Grunwald (1410) broke its army; the Thirteen Years\' War ended with the Order as a Polish vassal (1466), its Prussian rump secularised in 1525.'
  ],
  contentSections: [
    { title: 'Overview', paragraphs: [
      'The Teutonic Order — the Order of the German House of Saint Mary in Jerusalem — began as a crusader hospital at Acre (1190), militarised in 1198, and under Hermann von Salza traded the Levant for the Baltic: invited by Conrad of Masovia (1226), chartered by the Golden Bull of Rimini, it conquered pagan Prussia and merged with Livonia\'s Sword-Brothers (1237) to rule a unique monastic state.',
      'Its Ordensstaat — brick castles like Marienburg, planted towns, Hanseatic grain trade, and the reisen crusade-tourism of European chivalry — dominated the Baltic until Lithuania\'s conversion removed its rationale and the Battle of Grunwald (1410) broke its army; the Thirteen Years\' War ended with the Order as a Polish vassal (1466), its Prussian rump secularised in 1525.'
    ]},
    { title: 'Origins and the Baltic turn', paragraphs: [
      'Founded by Lübeck and Bremen burghers as a field hospital at the siege of Acre (1190) and knighted by papal charter (1198), the Order was the crusades\' German latecomer — until Hermann von Salza (grand master 1210–1239), Frederick II\'s indispensable diplomat, learned from the Hungarian misadventure (the Burzenland grant revoked, 1225, when the Order behaved too sovereignly) and secured better paper for the next offer.',
      'Conrad of Masovia\'s invitation against the Prussians (1226) came wrapped, at Salza\'s insistence, in the Golden Bull of Rimini: whatever the Order conquered it would hold as imperial-papal princedom, no Polish strings attached. The conquest of Prussia (1230s–1283) proceeded by riverline castles (Thorn, Kulm, Marienwerder), crusader levies, and the calculated terror and treaty (Christburg, 1249) that survived the great Prussian revolts — while the 1237 absorption of Livonia\'s shattered Sword-Brothers gave the Order a second, northern state.'
    ]},
    { title: 'The Ordensstaat at its height', paragraphs: [
      'The fourteenth century was the monastic state\'s golden age: Marienburg (Malbork) — Europe\'s largest brick castle — as capital from 1309 (the year the Order also seized Danzig and Pomerelia from Poland, its original sin in the coming lawsuits); a governed landscape of komtur districts, planted German-law towns (Thorn, Elbing, Königsberg) and free Prussian and German villages; grain, amber, and the Hansa\'s networks making it the Baltic\'s best-run economy — the Order itself a trading corporation with a treasury the envy of kings.',
      'War remained its liturgy: the winter reisen against pagan Lithuania — Europe\'s knightly package-crusade, hosting Bolingbroke, Boucicaut, and Chaucer\'s Knight — season after season for a century, Samogitia the coveted land-bridge between Prussia and Livonia. Lithuania\'s baptism (1386–87) gutted the rationale; the Order fought on for Samogitia regardless, and the lawsuits (Polish jurists arguing at Constance that converting pagans by sword was no right at all) began eroding what battle had not.'
    ]},
    { title: 'Grunwald and the long decline', paragraphs: [
      'The reckoning came at Grunwald/Tannenberg (15 July 1410): grand master Ulrich von Jungingen and the Order\'s leadership dead on the field against Jagiełło and Vytautas, the army destroyed — Marienburg itself saved only by Heinrich von Plauen\'s defence. The first Peace of Thorn (1411) was mild in land, ruinous in indemnities and myth: the invincibility gone, the taxes to pay for it radicalising the estates.',
      'The endgame was internal as much as Polish: the Prussian Confederation of towns and gentry (1440) — Danzig, Thorn, Elbing tired of Order taxation without representation — rose in 1454, did homage to Casimir IV, and fought the Thirteen Years\' War at the Order\'s side\'s expense; the second Peace of Thorn (1466) split the state — Royal Prussia (Danzig, Marienburg, the Vistula mouth) to Poland, the eastern rump around Königsberg held as a Polish fief. Grand master Albert\'s Lutheran secularisation (1525) turned the rump into ducal Prussia: the monastic state\'s strange afterlife as the seed of Brandenburg-Prussia.'
    ]},
    { title: 'Structure and rule', paragraphs: [
      'The Order was a monastic corporation ruling a state: brother-knights under vows, commanderies (komtureien) as garrison-monasteries-estates, a general chapter electing the grand master, and great offices (marshal at Königsberg, treasurer at Marienburg) running war and money — celibate, self-replacing from the Empire\'s nobility, and thus immune to dynastic accident: the only Baltic power without a succession crisis.',
      'Its subjects were governed by charter: Kulm law (1233) templating the towns, Prussian freemen and German settlers on defined rents, the conquered Prussians\' obligations codified after Christburg — administration by written privilege that made the Ordensstaat medieval Europe\'s most literate government per capita, and made its estates, when aggrieved, formidably legal-minded rebels.'
    ]},
    { title: 'Major figures', paragraphs: [
      'Hermann von Salza, grand master 1210–1239 — the diplomat-founder of the Baltic project.',
      'Winrich von Kniprode, 1352–1382 — the golden age\'s master: Rudau\'s victor, Marienburg\'s builder-manager.',
      'Ulrich von Jungingen, 1407–1410 — the master who fell at Grunwald.',
      'Heinrich von Plauen, 1410–1413 — Marienburg\'s saviour, deposed by the peace party.',
      'Albert of Brandenburg-Ansbach, 1510–1525 — the last Prussian master; the secularisation.'
    ]},
    { title: 'Religion, culture, and society', paragraphs: [
      'The Order\'s religion was crusade routinised: the Marian cult (the state itself "Our Lady\'s land"), liturgical war-calendars, chronicles (Peter von Dusburg\'s) theologising conquest — and a genuine literary culture in the castles, from translated scripture to the great Marienburg library. Its architecture is its monument: the brick-Gothic castle-convent (Marienburg\'s High Castle above all) and the parish skylines of its towns.',
      'Society was colonial and plural: German burghers and peasants, Prussian freemen and villages (the language dying slowly toward the sixteenth century), Polish settlers in the south, all under charter; the towns\' Hanseatic prosperity — Danzig\'s grain fleets — generating exactly the burgher confidence that, taxed for lost wars, would call in the Polish king.'
    ]},
    { title: 'Legacy', paragraphs: [
      'The Order state\'s deepest legacy is demographic-legal: the German-law urban and village landscape of Prussia and the Baltic, the Hanseatic integration of the region, and — through 1466 and 1525 — the strange chain from monastic state to ducal Prussia to the Hohenzollern kingdom: no medieval institution has a more consequential afterlife.',
      'Its memory splits by nation: Grunwald/Tannenberg as Polish-Lithuanian founding victory and German nationalist mirror (the 1914 battle deliberately named for it), the Order as crusading civiliser or colonial predator — the Codex\'s duty being the documented state itself: brick, charter, ledger, and the lawsuits that finally outfought the sword.'
    ]}
  ],
  knownFor: [
    'Acre hospital to Baltic monastic state',
    'The Golden Bull of Rimini and the conquest of Prussia',
    'Marienburg and the brick-Gothic Ordensstaat',
    'The reisen against pagan Lithuania',
    'Grunwald (1410) and the second Peace of Thorn (1466)'
  ],
  timeline: [
    { date: '1190/1198', title: 'Founded and knighted', description: 'The Acre hospital becomes a military order by papal charter.' },
    { date: '1226/1234', title: 'Rimini and Rieti', description: 'Imperial and papal bulls make conquered Prussia the Order\'s princedom.' },
    { date: '1237', title: 'Livonia absorbed', description: 'The Sword-Brothers\' remnant merges after Saule; the two-state Baltic order forms.' },
    { date: '1249', title: 'Treaty of Christburg', description: 'The first Prussian revolt ends with codified convert rights.' },
    { date: '1283', title: 'Prussia conquered', description: 'The chroniclers date the conquest\'s completion; the Lithuanian crusade begins.' },
    { date: '1309', title: 'Marienburg and Danzig', description: 'The capital moves to Prussia; Pomerelia\'s seizure opens the Polish feud.' },
    { date: '17 February 1370', title: 'Rudau', description: 'Kniprode\'s victory over Algirdas and Kęstutis marks the golden age\'s zenith.' },
    { date: '15 July 1410', title: 'Grunwald', description: 'The Order\'s army and master fall; Plauen saves Marienburg.' },
    { date: '1440/1454', title: 'The Confederation rises', description: 'Prussian towns and gentry revolt and submit to Casimir IV.' },
    { date: '19 October 1466', title: 'Second Peace of Thorn', description: 'Royal Prussia to Poland; the Order\'s rump a Polish fief.' },
    { date: '1525', title: 'Secularisation', description: 'Albert\'s Lutheran duchy ends the monastic state.' }
  ],
  relatedEntries: {
    people: [
      { title: 'Władysław II Jagiełło', type: 'person', slug: 'wladyslaw-ii-jagiello', label: 'Grunwald\'s victor' },
      { title: 'Vytautas', type: 'person', slug: 'vytautas', label: 'The co-commander' },
      { title: 'Frederick II', type: 'person', slug: 'frederick-ii-holy-roman-emperor', label: 'Rimini\'s imperial patron' }
    ],
    locations: [
      { title: 'Kingdom of Poland', type: 'location', slug: 'kingdom-of-poland', label: 'The adversary and final overlord' },
      { title: 'Grand Duchy of Lithuania', type: 'location', slug: 'grand-duchy-of-lithuania', label: 'The crusade\'s object' }
    ],
    events: [ { title: 'Battle of Grunwald', type: 'event', slug: 'battle-of-grunwald' } ]
  },
  sources: [
    { title: 'Teutonic Order — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Teutonic_Order' },
    { title: 'The Northern Crusades', author: 'Eric Christiansen', type: 'book' },
    { title: 'Peter von Dusburg, Chronicon terrae Prussiae', author: 'Peter von Dusburg', type: 'primary source' }
  ]
})

// ── MECKLENBURG ─────────────────────────────────────────────────────────────
patch('mecklenburg', {
  overview: [
    'Mecklenburg was the Baltic\'s Slavic-German hinge: homeland of the Obodrite Wends whose princes resisted and finally joined Christendom — Niklot falling against Henry the Lion (1160), his son Pribislav accepting baptism and fief (1167) — making Mecklenburg\'s dynasty medieval Germany\'s only enduring princely house of Slavic descent.',
    'Raised to a duchy (1348) inside the Empire, it colonised, chartered towns (Rostock, Wismar in the Hanseatic web), and briefly reached for crowns: Albert of Mecklenburg\'s Swedish kingship (1364–1389) drew the duchy into Scandinavia\'s union wars until Margaret I\'s victory reduced the adventure — leaving a middling duchy whose ports, university (Rostock, 1419), and pirate-troubles (the Victual Brothers it once licensed) told the Baltic\'s story in miniature.'
  ],
  contentSections: [
    { title: 'Overview', paragraphs: [
      'Mecklenburg was the Baltic\'s Slavic-German hinge: homeland of the Obodrite Wends whose princes resisted and finally joined Christendom — Niklot falling against Henry the Lion (1160), his son Pribislav accepting baptism and fief (1167) — making Mecklenburg\'s dynasty medieval Germany\'s only enduring princely house of Slavic descent.',
      'Raised to a duchy (1348) inside the Empire, it colonised, chartered towns (Rostock, Wismar in the Hanseatic web), and briefly reached for crowns: Albert of Mecklenburg\'s Swedish kingship (1364–1389) drew the duchy into Scandinavia\'s union wars until Margaret I\'s victory reduced the adventure — leaving a middling duchy whose ports, university (Rostock, 1419), and pirate-troubles (the Victual Brothers it once licensed) told the Baltic\'s story in miniature.'
    ]},
    { title: 'Wendish origins and the German turn', paragraphs: [
      'The Obodrite confederation — Wendish Slavs of the lake-and-coast country, their princes at the fortress the Germans called Mikilinborg ("great castle") — spent the eleventh and twelfth centuries between Saxon dukes, Danish kings, and their own pagan reaction (the 1066 rising martyring bishops). The Wendish Crusade (1147) hit them first of all.',
      'Niklot, the last great pagan prince, burned his own coastal forts and fought Henry the Lion and the Danes for a decade before falling in 1160; his son Pribislav, after years of guerrilla, took the pragmatic settlement of 1167: baptism, homage to Saxony, and his father\'s lands back as fief — the dynasty preserved by conversion, its Wendish descent thereafter a heraldic boast (the bull\'s head arms) inside German princedom. Colonisation followed fast: Cistercians at Doberan (Pribislav\'s foundation, the dynastic tomb), German peasants and law, and the Slavic tongue receding to villages within generations.'
    ]},
    { title: 'Duchy, Hansa, and the Swedish adventure', paragraphs: [
      'The princes navigated upward: princes of the Empire (1170), survivors of Danish overlordship\'s rise and fall (Bornhöved, 1227, freeing the coast), dukes by Charles IV\'s grant (1348) — while their towns joined the Baltic\'s real power: Rostock and Wismar in the Hanseatic League\'s inner circle, their cogs and beer in every northern port, their councils bargaining ducal charters with the confidence of creditors.',
      'Albert II\'s dynastic reach peaked when Sweden\'s rebel magnates elected his son: Albert of Mecklenburg, king of Sweden 1364–1389, ruling with German councillors until the aristocracy invited Margaret I — Åsle (1389) ending the kingship in captivity. The war\'s sea-arm outlived it notoriously: the Victual Brothers, privateers licensed from Mecklenburg ports to supply besieged Stockholm, turned pirate confederacy ("God\'s friends and all the world\'s enemies") until the Order took Gotland (1398) and Hamburg\'s executions (Störtebeker\'s legend, 1401) broke them — Mecklenburg\'s most infamous export.'
    ]},
    { title: 'Political structure and society', paragraphs: [
      'The duchy ran on the north-German pattern: partible inheritance splitting lines (Schwerin, Güstrow, Stargard branches recombining across the centuries), Landstände — prelates, knights, and the six great towns — bargaining taxes in territorial diets, and the dukes\' domain administration (vogts, pfandschaften) chronically mortgaged to nobles and towns: princely authority as negotiation.',
      'Society layered colonist and native into a single peasantry (Wendish names thinning northwestward), a knightly class (the future Junkers) consolidating estates, and the sea-towns\' burgher elite — Rostock\'s university (1419, the Baltic\'s first) training the region\'s clergy and lawyers; Doberan\'s abbey, the Marienkirchen of Rostock and Wismar, and the brick Gothic everywhere marking the Hanseatic ecumene\'s inland edge.'
    ]},
    { title: 'Major rulers', paragraphs: [
      'Niklot, d. 1160 — the last independent Obodrite prince; the dynasty\'s pagan founder-figure.',
      'Pribislav, 1167–1178 — convert and fief-taker: the house\'s survival architect; Doberan\'s founder.',
      'Henry II the Lion of Mecklenburg, 1287–1329 — consolidator of the lordship toward ducal rank.',
      'Albert II, 1329–1379 — first duke (1348); the Scandinavian marriage-web\'s weaver.',
      'Albert of Mecklenburg (Albert III), duke and king of Sweden 1364–1389 — the crown won by election and lost at Åsle.'
    ]},
    { title: 'Legacy', paragraphs: [
      'Mecklenburg\'s medieval story is the Ostsiedlung\'s in one territory: pagan principality to imperial duchy inside a century, Slavic dynasty Germanised but never replaced — ruling, in unbroken male line from Niklot, until 1918: Europe\'s longest continuous dynasty after the Capetians by some counts.',
      'Its legacy is textured rather than dramatic: the Hanseatic townscapes of Rostock and Wismar, the university\'s Baltic reach, the Victual Brothers\' pirate legend, and the demonstration — in the bull\'s-head arms of a Wendish house presiding over German estates — that the medieval Baltic\'s conquests ended as syntheses.'
    ]}
  ],
  knownFor: [
    'Obodrite Wendish homeland; Niklot and Pribislav\'s dynasty',
    'The Wendish Crusade and the 1167 conversion-settlement',
    'Rostock and Wismar in the Hanseatic League',
    'Albert of Mecklenburg\'s Swedish crown (1364–1389)',
    'The Victual Brothers\' piracy'
  ],
  timeline: [
    { date: '1147', title: 'The Wendish Crusade', description: 'The northern crusade strikes the Obodrite lands.' },
    { date: '1160', title: 'Niklot falls', description: 'The last pagan prince dies against Henry the Lion and the Danes.' },
    { date: '1167', title: 'Pribislav\'s settlement', description: 'Baptism and homage return the lands as fief; the dynasty continues.' },
    { date: '1171', title: 'Doberan founded', description: 'The Cistercian abbey becomes the house\'s pantheon.' },
    { date: '1227', title: 'Bornhöved', description: 'Danish overlordship of the coast collapses.' },
    { date: '1348', title: 'Ducal rank', description: 'Charles IV raises Mecklenburg to a duchy of the Empire.' },
    { date: '1364', title: 'A Mecklenburg king in Sweden', description: 'Albert III elected by the rebel magnates.' },
    { date: '1389', title: 'Åsle', description: 'Margaret I\'s victory ends the Swedish adventure in captivity.' },
    { date: '1398/1401', title: 'The Victual Brothers broken', description: 'Gotland taken by the Order; Hamburg executes the pirate captains.' },
    { date: '1419', title: 'Rostock university', description: 'The Baltic\'s first university opens in the duchy\'s great port.' }
  ],
  relatedEntries: {
    people: [
      { title: 'Albert of Mecklenburg', type: 'person', slug: 'albert-of-mecklenburg', label: 'The duchy\'s Swedish king' },
      { title: 'Margaret I', type: 'person', slug: 'margaret-i', label: 'The adversary at Åsle' }
    ],
    locations: [
      { title: 'Kingdom of Sweden', type: 'location', slug: 'kingdom-of-sweden', label: 'The crown briefly held' },
      { title: 'Kingdom of Denmark', type: 'location', slug: 'kingdom-of-denmark', label: 'The overlord thrown off at Bornhöved' },
      { title: 'Holy Roman Empire', type: 'location', slug: 'holy-roman-empire', label: 'The framework of ducal rank' }
    ],
    events: []
  },
  sources: [
    { title: 'Mecklenburg — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Mecklenburg' },
    { title: 'Helmold of Bosau, Chronica Slavorum', author: 'Helmold of Bosau', type: 'primary source', note: 'The contemporary chronicle of the Wendish lands\' conversion era.' },
    { title: 'The Northern Crusades', author: 'Eric Christiansen', type: 'book' }
  ]
})

// ── KINGDOM OF JERUSALEM ────────────────────────────────────────────────────
patch('kingdom-of-jerusalem', {
  overview: [
    'The Kingdom of Jerusalem was the First Crusade\'s crowned creation: founded when the crusaders stormed the holy city (1099), ruled first by Godfrey of Bouillon as Advocate of the Holy Sepulchre and then by the kings of his line, and sustained for two centuries as Latin Christendom\'s outpost between the sea and Islam.',
    'Its history breaks at Hattin (1187), where Saladin destroyed the royal army and took the True Cross and Jerusalem itself; the "Second Kingdom" rebuilt on the coast from Acre by the Third Crusade lasted — through Frederick II\'s treaty-Jerusalem (1229–1244), the barons\' legalism, and Mamluk hammer-blows — until Acre\'s fall in 1291 ended Outremer.'
  ],
  contentSections: [
    { title: 'Overview', paragraphs: [
      'The Kingdom of Jerusalem was the First Crusade\'s crowned creation: founded when the crusaders stormed the holy city (1099), ruled first by Godfrey of Bouillon as Advocate of the Holy Sepulchre and then by the kings of his line, and sustained for two centuries as Latin Christendom\'s outpost between the sea and Islam.',
      'Its history breaks at Hattin (1187), where Saladin destroyed the royal army and took the True Cross and Jerusalem itself; the "Second Kingdom" rebuilt on the coast from Acre by the Third Crusade lasted — through Frederick II\'s treaty-Jerusalem (1229–1244), the barons\' legalism, and Mamluk hammer-blows — until Acre\'s fall in 1291 ended Outremer.'
    ]},
    { title: 'Foundation and the first kingdom', paragraphs: [
      'Jerusalem fell to the First Crusade on 15 July 1099 amid massacre the chronicles did not hide; Godfrey of Bouillon took rule without a crown ("not a king where Christ wore thorns"), and his brother Baldwin I accepted the royal title (Christmas 1100), spending a hard reign conquering the coast — Arsuf, Caesarea, Acre (1104), Sidon — with Italian fleets paid in quarters and privileges.',
      'The kingdom matured under Baldwin II, Melisende and Fulk, and Baldwin III: a realm of four great baronies and the military orders — Templars and Hospitallers holding the castles no lord could afford — its constitutional life (the Haute Cour\'s judgments) precocious, its manpower always thin, its survival resting on Muslim division. Zengi\'s taking of Edessa (1144) announced the counter-crusade; Nur ad-Din\'s union of Syria and the failed race for Egypt under Amalric I set the trap; Saladin\'s inheritance of both closed it.'
    ]},
    { title: 'Hattin and the second kingdom', paragraphs: [
      'The catastrophe was political before it was military: the leper-king Baldwin IV\'s heroic holding action (Montgisard, 1177) dissolved into the succession of Guy of Lusignan, Raynald of Châtillon\'s truce-breaking, and the baronial feuds Saladin outwaited. On 4 July 1187, at the Horns of Hattin, the royal army died of thirst and encirclement; the True Cross was taken, Raynald executed, the Templars and Hospitallers slaughtered — and by October Jerusalem capitulated on terms that shamed 1099\'s memory into contrast.',
      'The Third Crusade\'s remnant-kingdom ran from Tyre (held by Conrad of Montferrat) through Richard the Lionheart\'s coastal campaign — Acre retaken (1191), Arsuf and Jaffa won, Jerusalem twice approached and refused — to the 1192 truce: a coastal strip with Acre as capital. The thirteenth century governed that strip by lawbook and expedient: the crown drifting through Isabella I\'s marriages to absentee Hohenstaufen (Frederick II\'s bloodless treaty regaining Jerusalem 1229–1244, until the Khwarazmian sack), the barons ruling by the Assises\' legalism, the orders and Italian communes (the War of Saint Sabas, 1256–1258, Venice against Genoa in Acre\'s streets) fighting private wars — while Baibars\' Mamluks took the great castles one by one (Safed, Jaffa, Antioch 1268, Krak 1271) and Acre\'s final siege (April–May 1291) ended the kingdom in fire and evacuation.'
    ]},
    { title: 'Political structure and rule', paragraphs: [
      'Jerusalem\'s constitution fascinated contemporaries and historians alike: an elective-then-hereditary crown checked by the Haute Cour of barons whose Assises (written up in the thirteenth century by jurist-lords like John of Ibelin) made judgment-of-peers the realm\'s working law — "the most feudal of feudal states", where kings litigated and lost. The four great baronies (Jaffa-Ascalon, Galilee, Sidon, Oultrejordain) and the church\'s principalities framed a crown rich mainly in Tyre and Acre\'s customs.',
      'Its permanent institutions were the orders — Templars, Hospitallers, later the Teutonic Order — international corporations garrisoning the frontier castles; the Italian communes\' quarters (Venetian, Genoese, Pisan thirds and streets, chartered from the conquest fleets\' bargains) running the ports\' trade; and a plural subject society — Melkite and Jacobite Christians, Muslims under fixed rents, Jews, Samaritans — taxed and adjudicated under the Cour de la Fonde\'s mixed benches: colonial Outremer as managed diversity.'
    ]},
    { title: 'Major rulers', paragraphs: [
      'Godfrey of Bouillon, 1099–1100 — Advocate of the Holy Sepulchre: the uncrowned founder.',
      'Baldwin I, 1100–1118 — the coast\'s conqueror and the crown\'s creator.',
      'Melisende, 1131–1153 — queen-regnant of the kingdom\'s golden generation.',
      'Baldwin III, 1143–1163 — Ascalon\'s conqueror (1153); the Byzantine alliance.',
      'Amalric I, 1163–1174 — the Egyptian wars that summoned Saladin\'s age.',
      'Baldwin IV, 1174–1185 — the leper-king: Montgisard and the held line.',
      'Guy of Lusignan, 1186–1192 — Hattin\'s loser; Cyprus\'s founder after.',
      'Conrad of Montferrat, king-elect 1192 — Tyre\'s savior, murdered days after election.',
      'John of Brienne, 1210–1225 — the soldier-king of the Fifth Crusade era.',
      'Frederick II, 1225–1243 (by marriage) — the excommunicate\'s treaty-crown (1229).'
    ]},
    { title: 'Wars, battles, and defence', paragraphs: [
      'The battle-roll frames the arc: Ascalon (1099) securing the founding; Ramla\'s three battles testing Baldwin I; the Field of Blood (1119) north; Ascalon taken (1153); Montgisard\'s reprieve (1177); the Springs of Cresson and Hattin (1187); the Third Crusade\'s Acre and Arsuf (1191); La Forbie (1244) — Hattin\'s forgotten twin, the barons\' army destroyed beside Egypt\'s enemies; Louis IX\'s Mansurah captivity (1250) and his Acre rebuilding; the Mamluk sieges from Safed to Antioch to Acre (1291).',
      'Its defence was architecture and treaty as much as field armies: the great castles (Krak des Chevaliers, Belvoir, Montfort) as the orders\' anchor-points, truce-craft with Damascus and Cairo as ordinary statecraft — the kingdom\'s best generals often its negotiators, and its worst disasters (Cresson, Hattin, La Forbie) the work of councils that overrode them.'
    ]},
    { title: 'Religion, culture, and society', paragraphs: [
      'Latin Jerusalem rebuilt the holy geography: the Holy Sepulchre rededicated (1149) in crusader Romanesque, the Templum Domini\'s cross over the Dome, pilgrimage as the realm\'s industry and purpose — while the Latin patriarchate presided over a Christian mosaic (Greek, Syriac, Armenian rites keeping altars and quarrels) and Muslim and Jewish communities lived the conquerors\' pragmatism after 1099\'s blood.',
      'Its culture was Outremer\'s own: the scriptorium of the Holy Sepulchre (Melisende\'s Psalter its jewel), William of Tyre\'s great history written by a native-born archbishop, French law-books and Arabic-fluent lords (Usama ibn Munqidh\'s bemused friendships), icon-painters mixing Byzantine and Latin — the first sustained European colonial society, with all that phrase\'s creativity and violence.'
    ]},
    { title: 'Legacy', paragraphs: [
      'The kingdom\'s fall built institutions that outlived it: the orders\' sovereignties (Rhodes and Malta from the Hospitallers, Prussia from the Teutonic house, the Templars\' destruction as France\'s cautionary tale), Cyprus\'s Lusignan kingdom carrying the crown\'s law and line for three centuries, and the title "King of Jerusalem" decorating European monarchies into the twentieth century.',
      'Its deeper legacy is the crusading question itself — the two-century experiment in holy-war statehood whose law-books enriched medieval jurisprudence, whose castles taught Europe fortification, and whose memory (1099\'s massacre, Hattin\'s cross, Acre\'s fall) still frames every argument about the crusades\' meaning.'
    ]}
  ],
  knownFor: [
    'Founded by the First Crusade (1099)',
    'The Haute Cour and the Assises of Jerusalem',
    'Hattin (1187) and the loss of the holy city',
    'The Acre-based second kingdom and Frederick II\'s treaty-Jerusalem',
    'The fall of Acre (1291) ending Outremer'
  ],
  timeline: [
    { date: '15 July 1099', title: 'Jerusalem stormed', description: 'The First Crusade takes the city; Godfrey rules as Advocate.' },
    { date: 'Christmas 1100', title: 'Baldwin I crowned', description: 'The kingdom takes its crown at Bethlehem.' },
    { date: '1153', title: 'Ascalon falls', description: 'Baldwin III completes the coastal conquest.' },
    { date: '25 November 1177', title: 'Montgisard', description: 'The leper-king routs Saladin — the reprieve before the storm.' },
    { date: '4 July 1187', title: 'Hattin', description: 'The royal army is destroyed; Jerusalem capitulates by October.' },
    { date: '12 July 1191', title: 'Acre retaken', description: 'The Third Crusade rebuilds the kingdom on the coast.' },
    { date: '18 February 1229', title: 'The treaty-Jerusalem', description: 'Frederick II regains the city by diplomacy; it is lost to the Khwarazmians in 1244.' },
    { date: '17 October 1244', title: 'La Forbie', description: 'The barons\' army is annihilated — Hattin\'s repetition.' },
    { date: '1265–1271', title: 'The Mamluk conquests', description: 'Baibars takes Safed, Jaffa, Antioch, and Krak des Chevaliers.' },
    { date: '18 May 1291', title: 'Acre falls', description: 'The Mamluk storm ends the kingdom; the last towns evacuate.' }
  ],
  relatedEntries: {
    people: [
      { title: 'Godfrey of Bouillon', type: 'person', slug: 'godfrey-of-bouillon', label: 'The founder' },
      { title: 'Melisende of Jerusalem', type: 'person', slug: 'melisende-of-jerusalem' },
      { title: 'Baldwin IV of Jerusalem', type: 'person', slug: 'baldwin-iv-of-jerusalem', label: 'The leper-king' },
      { title: 'Saladin', type: 'person', slug: 'saladin', label: 'Hattin\'s victor' }
    ],
    locations: [
      { title: 'Crusader States', type: 'location', slug: 'crusader-states', label: 'The wider Outremer' },
      { title: 'Ayyubid Sultanate', type: 'location', slug: 'ayyubid-sultanate', label: 'The counter-crusade\'s state' }
    ],
    events: [ { title: 'Third Crusade', type: 'event', slug: 'third-crusade', label: 'The kingdom\'s rebuilding' } ]
  },
  sources: [
    { title: 'Kingdom of Jerusalem — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Kingdom_of_Jerusalem' },
    { title: 'William of Tyre, Historia', author: 'William of Tyre', type: 'primary source' },
    { title: 'The Crusader States', author: 'Malcolm Barber', type: 'book' }
  ]
})

// ── CRUSADER STATES ─────────────────────────────────────────────────────────
patch('crusader-states', {
  overview: [
    'The Crusader States — Outremer — were the four Latin polities the First Crusade left in the Levant: the County of Edessa (1098), the Principality of Antioch (1098), the Kingdom of Jerusalem (1099), and the County of Tripoli (1102–1109), a Frankish archipelago from the Euphrates to Sinai\'s edge.',
    'Their two centuries ran the crusading movement\'s whole arc: Edessa\'s fall (1144) summoning the Second Crusade; Hattin (1187) the Third; Constantinople\'s Latin empire (1204) the movement\'s strangest offshoot; and the Mamluk conquests ending Antioch (1268), Tripoli (1289), and Acre (1291) — leaving Cyprus and the military orders as the enterprise\'s heirs.'
  ],
  contentSections: [
    { title: 'Overview', paragraphs: [
      'The Crusader States — Outremer — were the four Latin polities the First Crusade left in the Levant: the County of Edessa (1098), the Principality of Antioch (1098), the Kingdom of Jerusalem (1099), and the County of Tripoli (1102–1109), a Frankish archipelago from the Euphrates to Sinai\'s edge.',
      'Their two centuries ran the crusading movement\'s whole arc: Edessa\'s fall (1144) summoning the Second Crusade; Hattin (1187) the Third; Constantinople\'s Latin empire (1204) the movement\'s strangest offshoot; and the Mamluk conquests ending Antioch (1268), Tripoli (1289), and Acre (1291) — leaving Cyprus and the military orders as the enterprise\'s heirs.'
    ]},
    { title: 'Foundations', paragraphs: [
      'Each state had its own founding logic: Baldwin of Boulogne\'s Edessa (1098) by adoption-coup in an Armenian city — the first state, the most exposed, the least "crusaded" for; Bohemond I of Antioch\'s principality (1098) by the great siege\'s double treachery, Norman ambition holding Byzantium\'s claimed city against emperor and atabeg alike; Jerusalem by the vow\'s fulfilment (1099); Raymond IV of Toulouse\'s Tripoli by patient blockade he did not live to complete (1109).',
      'Their coherence was familial and fractious: Jerusalem\'s kings claiming a loose primacy (regencies exercised, homages disputed), marriage binding the houses, and the northern pair living a different geopolitics — Antioch\'s Byzantine question (Alexios I Komnenos\'s Treaty of Devol, 1108, unenforced; Manuel\'s ceremonial lordship, 1159) and Edessa\'s Turkish marches — from the southern kingdom\'s Egyptian one.'
    ]},
    { title: 'The counter-crusade and the fall', paragraphs: [
      'The Muslim reconquest built by stages the Franks could see but not stop: Zengi taking Edessa (1144) — the first state\'s death and the Second Crusade\'s failure; Nur ad-Din\'s Syria unified around jihad renewed; Saladin\'s Egypt-Syria pincer closing at Hattin (1187) and sweeping all but Tyre, Tripoli, and Antioch\'s cores; the Third Crusade\'s coastal restoration freezing a rump-Outremer that thirteenth-century politics — Frederick II\'s absentee crown, the barons\' wars, Genoa-Venice\'s Saint Sabas war in Acre\'s streets — governed as a querulous condominium.',
      'The Mongol irruption briefly scrambled the board (Antioch\'s Bohemond VI riding as Hülegü\'s vassal into Damascus, 1260) until Ain Jalut (1260) made the Mamluks Islam\'s sword: Baibars\' methodical decade (Antioch\'s terrible sack, 1268; Krak, 1271), Qalawun\'s Tripoli (1289), and al-Ashraf Khalil\'s Acre (1291) ended the mainland states; the Templars\' Ruad islet (to 1302) was the literal last foothold.'
    ]},
    { title: 'Structure and society', paragraphs: [
      'Outremer\'s states shared a kit: thin Frankish military elites over plural native majorities (Eastern Christians of five rites, Muslims, Jews); the military orders as standing armies and bankers; Italian commune-quarters running the ports; castles as government (Edessa\'s marches, Antioch\'s Orontes line, Tripoli\'s Krak); and law-books — Jerusalem\'s Assises, Antioch\'s own — codifying feudal judgment with colonial precision.',
      'Their economies made the connection pay: Levant ports as the spice-silk-sugar interface (sugar plantations around Tyre and Tripoli among Europe\'s first), pilgrim traffic as service industry, and the truce-trade with Damascus and Cairo continuing through most wars — Outremer as the medieval Mediterranean\'s busiest membrane, not its wall.'
    ]},
    { title: 'The states in brief', paragraphs: [
      'Edessa (1098–1144/50): Baldwin\'s and Joscelin\'s Armenian-Frankish march; first founded, first lost — Zengi\'s conquest the crusading century\'s alarm bell.',
      'Antioch (1098–1268): Bohemond\'s and Tancred\'s Norman principality; the Field of Blood (1119) its darkest field, the Byzantine homages its chronic question, Baibars\' 1268 sack its annihilation.',
      'Tripoli (1102/09–1289): the Toulouse county of the coast and Krak; passed to Antioch\'s house (1187) and fell to Qalawun two years before Acre.',
      'Jerusalem (1099–1291): the crown of the enterprise — treated at length in its own article.'
    ]},
    { title: 'Legacy', paragraphs: [
      'The states\' fall distributed their functions: Lusignan Cyprus carried Outremer\'s law, families, and claims; the orders became sovereign powers (Rhodes, Prussia) or cautionary ruins (the Temple, 1307–1314); the Italian republics kept the trade the states had hosted; and "recovery of the Holy Land" literature fed both late-crusade planning and early modern geography.',
      'Historiographically they remain the test-case colonial societies of the Middle Ages — studied now less as epic than as administration: charters, mixed courts, sugar mills, and the daily coexistence Usama\'s memoirs and the Assises alike record, between the massacres the chronicles remember.'
    ]}
  ],
  knownFor: [
    'The four Latin states of Outremer (1098–1291)',
    'Edessa\'s fall (1144) and the Second Crusade',
    'Antioch\'s Norman principality and the Byzantine question',
    'Hattin (1187) and the coastal rump-kingdom',
    'The Mamluk conquests ending at Acre (1291)'
  ],
  timeline: [
    { date: '1098', title: 'Edessa and Antioch', description: 'Baldwin\'s county and Bohemond\'s principality — the first two states.' },
    { date: '15 July 1099', title: 'Jerusalem', description: 'The kingdom-to-be is stormed into existence.' },
    { date: '1109', title: 'Tripoli falls to the Franks', description: 'The fourth state completes Outremer\'s map.' },
    { date: '28 June 1119', title: 'The Field of Blood', description: 'Antioch\'s army is annihilated by Ilghazi — the north\'s fragility exposed.' },
    { date: '1144', title: 'Edessa lost', description: 'Zengi\'s conquest ends the first state and summons the Second Crusade.' },
    { date: '4 July 1187', title: 'Hattin', description: 'Saladin\'s victory sweeps the inland south.' },
    { date: '1191–1192', title: 'The coastal restoration', description: 'The Third Crusade rebuilds a maritime Outremer.' },
    { date: '3 September 1260', title: 'Ain Jalut', description: 'The Mamluks stop the Mongols and inherit the jihad.' },
    { date: '1268/1289', title: 'Antioch and Tripoli fall', description: 'Baibars\' sack and Qalawun\'s conquest end the northern states.' },
    { date: '18 May 1291', title: 'Acre', description: 'The mainland\'s end; Ruad\'s Templar islet holds to 1302.' }
  ],
  relatedEntries: {
    people: [
      { title: 'Bohemond I of Antioch', type: 'person', slug: 'bohemond-i-of-antioch', label: 'Antioch\'s founder' },
      { title: 'Godfrey of Bouillon', type: 'person', slug: 'godfrey-of-bouillon' },
      { title: 'Saladin', type: 'person', slug: 'saladin' },
      { title: 'Baybars', type: 'person', slug: 'baybars', label: 'The methodical destroyer' }
    ],
    locations: [
      { title: 'Kingdom of Jerusalem', type: 'location', slug: 'kingdom-of-jerusalem', label: 'The crown of Outremer' },
      { title: 'Byzantine Empire', type: 'location', slug: 'byzantine-empire', label: 'Antioch\'s claimant-suzerain' },
      { title: 'Ayyubid Sultanate', type: 'location', slug: 'ayyubid-sultanate' }
    ],
    events: [ { title: 'Third Crusade', type: 'event', slug: 'third-crusade' } ]
  },
  sources: [
    { title: 'Crusader states — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Crusader_states' },
    { title: 'The Crusader States', author: 'Malcolm Barber', type: 'book' },
    { title: 'Usama ibn Munqidh, Book of Contemplation', author: 'Usama ibn Munqidh', type: 'primary source' }
  ]
})

// ── UMAYYAD CALIPHATE ───────────────────────────────────────────────────────
patch('umayyad-caliphate', {
  overview: [
    'The Umayyad Caliphate (661–750) was Islam\'s first dynasty and antiquity\'s last world-empire builder: from Damascus, Muawiya\'s house ruled and expanded the conquests to their furthest medieval reach — Visigothic Spain taken (711), the Indus and Transoxiana reached, Constantinople twice besieged, and the raid into Francia turned back between Tours and Poitiers (732).',
    'It built the empire\'s machinery — Arabic coinage and chancery, the Dome of the Rock and Damascus\'s Great Mosque — and fell to the Abbasid revolution (750); its survivor Abd al-Rahman refounded the house at Córdoba, where the emirate and later caliphate (929–1031) of al-Andalus made Umayyad Spain medieval Europe\'s most urbane polity until its collapse into the taifas.'
  ],
  contentSections: [
    { title: 'Overview', paragraphs: [
      'The Umayyad Caliphate (661–750) was Islam\'s first dynasty and antiquity\'s last world-empire builder: from Damascus, Muawiya\'s house ruled and expanded the conquests to their furthest medieval reach — Visigothic Spain taken (711), the Indus and Transoxiana reached, Constantinople twice besieged, and the raid into Francia turned back at the Battle of Tours (732).',
      'It built the empire\'s machinery — Arabic coinage and chancery, the Dome of the Rock and Damascus\'s Great Mosque — and fell to the Abbasid revolution (750); its survivor Abd al-Rahman refounded the house at Córdoba, where the emirate and later caliphate (929–1031) of al-Andalus made Umayyad Spain medieval Europe\'s most urbane polity until its collapse into the taifas.'
    ]},
    { title: 'Damascus: the imperial caliphate', paragraphs: [
      'Muawiya — Syria\'s long-time governor, victor of the first fitna after Ali\'s murder — moved the capital to Damascus (661) and made the caliphate dynastic: Byzantine-trained bureaucracies kept running in Greek until Abd al-Malik\'s arabisation (690s) minted the aniconic dinar and made Arabic the chancery tongue — state-building visible in the Dome of the Rock (691), Islam\'s first great monument.',
      'Expansion resumed on all fronts: Ifriqiya and Carthage taken (698); Tariq and Musa crossing to Spain (711), the Visigothic kingdom collapsing at the Guadalete; Sind and Transoxiana entered (Qutayba\'s campaigns); and the empire\'s limits found — Constantinople\'s failed sieges (674–678, 717–718) and the Frankish check at Tours (732) fixing the north-west, the Turgesh and Khazars holding the steppes. The dynasty\'s fissures ran as deep as its reach: Kharijite revolts, Shia memory of Karbala (680), Arab tribal factionalism (Qays vs Yaman), and the mawali (non-Arab converts) taxed like conquered men — grievances the Abbasid mission organised into the black-bannered revolution that destroyed the house at the Zab (750).'
    ]},
    { title: 'Córdoba: the Andalusi refoundation', paragraphs: [
      'One grandson escaped the massacre: Abd al-Rahman I, "the Falcon of the Quraysh", crossed to Spain and took Córdoba (756), founding an emirate that renounced Abbasid allegiance in fact and, under Abd al-Rahman III (from 929), in name: caliph in his own right, his Córdoba — the Great Mosque\'s forest of arches growing by reign, the palace-city Madinat al-Zahra rising (936) — the West\'s largest city, its library-culture proverbial.',
      'The caliphate\'s zenith was administrative and cultural as much as military: Christian and Jewish communities under dhimma inside a commercial world from the Maghreb to the Rhône, the hajib al-Mansur (Almanzor) running a military dictatorship in the caliphs\' name whose raids sacked Barcelona (985) and Santiago (997). His death began the amirate\'s convulsion: the fitna of 1009–1031 wrecked Córdoba and dissolved the caliphate into the taifa kingdoms — brilliant, competitive, and militarily helpless — whose parias tribute fed Christian expansion until the Almoravids (1086) and Almohads answered.'
    ]},
    { title: 'Political structure and rule', paragraphs: [
      'The Umayyads governed as Arab kings of an Islamic empire: caliphal succession within the house (contested at each generation), provincial super-governors (al-Hajjaj\'s Iraq the model of iron administration), the diwan army-registers paying Arab tribesmen as a ruling caste, and the dhimmi communities self-administering under tax — a light, extractive imperial frame over Byzantine and Sasanian substructures.',
      'Córdoba refined the model: a palatine bureaucracy of viziers and the hajib, saqaliba (European slave-soldiers and administrators) balancing Arab and Berber factions, jund settlements garrisoning the provinces, and Maliki jurists supplying the religious establishment — a state whose sophistication its Christian neighbours borrowed (and whose mercenaries they hired) even while crusading against it.'
    ]},
    { title: 'Major rulers', paragraphs: [
      'Muawiya I, 661–680 — the founder: Syria\'s governor made dynast.',
      'Abd al-Malik, 685–705 — arabisation, the reformed coinage, the Dome of the Rock.',
      'Al-Walid I, 705–715 — the conquests\' zenith: Spain, Sind, Transoxiana; Damascus\'s Great Mosque.',
      'Umar II, 717–720 — the pious reformer of the mawali\'s grievances.',
      'Hisham, 724–743 — the last strong Damascus caliph; Tours fell in his reign.',
      'Abd al-Rahman I, emir 756–788 — the survivor who refounded the house at Córdoba.',
      'Abd al-Rahman III, 912–961 — caliph of Córdoba (929): al-Andalus\'s golden noon.',
      'Al-Mansur (Almanzor), hajib 978–1002 — the dictator-general of the caliphate\'s armed twilight.'
    ]},
    { title: 'Religion, culture, and society', paragraphs: [
      'Umayyad religion built Islam\'s public face: the great mosques (Damascus, Jerusalem\'s Aqsa, Córdoba), the developing law-schools and Quranic scholarship the dynasty patronised and provoked (its critics — proto-Shia, Kharijite, pious opposition — shaping Islamic thought in resistance), and the pragmatic pluralism of dhimma that kept conquered societies functioning.',
      'Al-Andalus made the culture legendary: Ziryab\'s Baghdad fashions in ninth-century Córdoba, the translation-and-library boom under al-Hakam II (a catalogue of 400,000 volumes claimed), Ibn Hazm and the Andalusi poets — with Jewish courtier-scholars (Hasdai ibn Shaprut) and Mozarab Christians inside the caliphate\'s intellectual economy: the convivencia, real and unequal at once, that made Córdoba the medieval West\'s reference city.'
    ]},
    { title: 'Legacy', paragraphs: [
      'The Damascus caliphate fixed Islam\'s imperial vocabulary — dynastic succession, Arabic administration, the mosque as state monument — and its conquests\' map still frames the Arab world; the Abbasids inherited its machinery while damning its memory.',
      'Córdoba\'s legacy went to both civilisations: the taifas\' scholars and libraries feeding the Toledo translation movement that gave Latin Europe its Aristotle and algebra, the Great Mosque becoming a cathedral without losing its arches, and al-Andalus itself — from 711 to the taifas — remaining history\'s shorthand for Islamic Europe.'
    ]}
  ],
  knownFor: [
    'Islam\'s first dynasty, ruling from Damascus (661–750)',
    'The conquest of Spain (711) and the check at Tours (732)',
    'The Dome of the Rock and Arabic imperial administration',
    'Refoundation at Córdoba; the caliphate of 929–1031',
    'Córdoba as the medieval West\'s greatest city'
  ],
  timeline: [
    { date: '661', title: 'Muawiya\'s caliphate', description: 'The capital moves to Damascus; the dynasty begins.' },
    { date: '691', title: 'Dome of the Rock', description: 'Abd al-Malik raises Islam\'s first great monument.' },
    { date: '711', title: 'The Guadalete', description: 'Tariq\'s crossing destroys the Visigothic kingdom; al-Andalus begins.' },
    { date: '717–718', title: 'Constantinople holds', description: 'The great siege fails against Leo III and Greek fire.' },
    { date: '10 October 732', title: 'Tours', description: 'Charles Martel turns back the raid into Francia.' },
    { date: '750', title: 'The Abbasid revolution', description: 'The Zab and the massacre of the house end Damascus\'s caliphate.' },
    { date: '756', title: 'Córdoba refounded', description: 'Abd al-Rahman I escapes to Spain and takes the emirate.' },
    { date: '929', title: 'The caliphate of Córdoba', description: 'Abd al-Rahman III assumes the caliphal title.' },
    { date: '936', title: 'Madinat al-Zahra', description: 'The palace-city rises — al-Andalus\'s Versailles.' },
    { date: '997', title: 'Almanzor at Santiago', description: 'The hajib\'s raids reach Compostela itself.' },
    { date: '1009–1031', title: 'The fitna', description: 'Civil war wrecks Córdoba; the caliphate dissolves into the taifas.' }
  ],
  relatedEntries: {
    people: [
      { title: 'Abd al-Rahman al-Ghafiqi', type: 'person', slug: 'abd-al-rahman-al-ghafiqi', label: 'Tours\' commander' },
      { title: 'Charles Martel', type: 'person', slug: 'charles-martel', label: 'The Frankish check' }
    ],
    locations: [
      { title: 'Byzantine Empire', type: 'location', slug: 'byzantine-empire', label: 'The sieged survivor' },
      { title: 'Almohad Caliphate', type: 'location', slug: 'almohad-caliphate', label: 'Al-Andalus\'s later masters' },
      { title: 'Frankish Kingdom', type: 'location', slug: 'frankish-kingdom', label: 'The north-western limit' }
    ],
    events: [ { title: 'Battle of Tours', type: 'event', slug: 'battle-of-tours', label: '732' } ]
  },
  sources: [
    { title: 'Umayyad Caliphate — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Umayyad_Caliphate' },
    { title: 'The Great Arab Conquests', author: 'Hugh Kennedy', type: 'book' },
    { title: 'Muslim Spain and Portugal', author: 'Hugh Kennedy', type: 'book' }
  ]
})

// ── ALMOHAD CALIPHATE ───────────────────────────────────────────────────────
patch('almohad-caliphate', {
  overview: [
    'The Almohad Caliphate (al-Muwahhidun, "the unitarians") rose from Ibn Tumart\'s Atlas-mountain reform movement — proclaiming himself Mahdi against Almoravid "anthropomorphism" — into the empire his lieutenant Abd al-Mumin built: Marrakesh taken (1147), the Maghreb united to Tunisia, and al-Andalus absorbed under caliphs who styled themselves successors to the Prophet outright.',
    'Its century of power framed the western Mediterranean: Yaqub al-Mansur\'s victory at Alarcos (1195) the apogee, the philosophical court of Averroes its paradox — and the coalition defeat at Las Navas de Tolosa (1212) the turning point after which the caliphate unravelled, its Iberian collapse opening the great Christian conquests of the thirteenth century.'
  ],
  contentSections: [
    { title: 'Overview', paragraphs: [
      'The Almohad Caliphate (al-Muwahhidun, "the unitarians") rose from Ibn Tumart\'s Atlas-mountain reform movement — proclaiming himself Mahdi against Almoravid "anthropomorphism" — into the empire his lieutenant Abd al-Mumin built: Marrakesh taken (1147), the Maghreb united to Tunisia, and al-Andalus absorbed under caliphs who styled themselves successors to the Prophet outright.',
      'Its century of power framed the western Mediterranean: Yaqub al-Mansur\'s victory at Alarcos (1195) the apogee, the philosophical court of Averroes its paradox — and the coalition defeat at the Battle of Las Navas de Tolosa (1212) the turning point after which the caliphate unravelled, its Iberian collapse opening the great Christian conquests of the thirteenth century.'
    ]},
    { title: 'Origins: the Mahdi\'s movement', paragraphs: [
      'Ibn Tumart returned from eastern study (c. 1117) preaching tawhid — God\'s absolute unity — against the Almoravid establishment\'s literalism and its jurists\' power: moral censor, tribal organiser, and finally self-proclaimed Mahdi at Tinmal in the High Atlas (c. 1121), building among the Masmuda Berbers a hierarchical revolutionary community (the Ten, the Fifty, the tribal councils) with takfir\'s license against Muslim opponents.',
      'His successor Abd al-Mumin — a Zanata outsider, organiser of genius — turned sect to empire in twenty years: the Atlas held, Tlemcen and Fez taken, Marrakesh stormed (1147) with the last Almoravids, then the eastward sweep to Ifriqiya (Tunis, Mahdia 1159–60) — the first unification of the whole Maghreb — and al-Andalus, invited by post-Almoravid taifa chaos, garrisoned and absorbed with Seville as the peninsular capital.'
    ]},
    { title: 'Apogee and Las Navas', paragraphs: [
      'The great caliphs ruled a dual empire from Marrakesh and Seville: Abu Yaqub Yusuf and Yaqub al-Mansur patronising the age\'s philosophy (Averroes and Ibn Tufayl at court — the Commentator\'s Aristotle written under Almohad protection, his late disgrace a faction\'s victory) while prosecuting jihad — al-Mansur\'s Alarcos (1195) crushing Alfonso VIII of Castile and taking the "victorious" laqab home to build the Kutubiyya\'s sister minarets: Seville\'s Giralda, Rabat\'s unfinished Hassan.',
      'The answer came as coalition: Innocent III\'s crusade-bull uniting Castile, Aragon, and Navarre (with the papacy holding Alfonso IX\'s feud in check), and at Las Navas de Tolosa (16 July 1212) the caliph al-Nasir\'s host was annihilated — the Navarrese cutting the chained guard of the caliphal tent, the banner sent to Rome. The empire\'s spine broke: al-Nasir dead within two years, child-caliphs and doctrinal repudiations (al-Mamun renouncing the Mahdi\'s creed, 1229) dissolving legitimacy while Marinids rose in Morocco, Hafsids in Tunisia, Zayyanids at Tlemcen — and in Iberia the "great conquests" harvested the wreck: Córdoba (1236), Valencia (1238), Seville (1248).'
    ]},
    { title: 'Political structure and rule', paragraphs: [
      'The Almohad state was ideology institutionalised: the Mahdi\'s infallible doctrine as constitution, a ruling hierarchy of the founding councils and the sayyids (Abd al-Mumin\'s house monopolising the caliphate), the talaba as doctrinal cadres-cum-inspectors, and the empire\'s startling innovation — a caliphate claimed in full, Friday prayers naming no Abbasid, coinage square-dirhamed and creed-stamped.',
      'Administration ran on Berber tribal contingents and Andalusi bureaucrats, provincial sayyid-governors from the royal kin, a formidable navy (Mediterranean\'s strongest in al-Mansur\'s day), and fiscal rigour that funded monuments and armies alike; the doctrine\'s hard edge showed in the dhimma\'s effective abolition — forced conversions and the Jewish flight (Maimonides\'s family among the exiles) marking the founding decades, softening in practice as empire aged.'
    ]},
    { title: 'Major rulers', paragraphs: [
      'Ibn Tumart, the Mahdi, d. 1130 — the movement\'s founder-doctrine.',
      'Abd al-Mumin, caliph 1130–1163 — Marrakesh, the Maghreb united, al-Andalus entered: the empire-builder.',
      'Abu Yaqub Yusuf, 1163–1184 — the philosophers\' patron; died besieging Santarém.',
      'Yaqub al-Mansur, 1184–1199 — Alarcos\'s victor; the great minarets\' builder.',
      'Muhammad al-Nasir, 1199–1213 — Las Navas\'s loser; the unravelling\'s first caliph.'
    ]},
    { title: 'Religion, culture, and society', paragraphs: [
      'Almohadism was reform as state religion: creed-catechisms in Berber and Arabic, the Mahdi\'s writ over the jurists, purist mosque-building whose austerity became a style — the Kutubiyya, Tinmal\'s memorial mosque, the Giralda — and a censorious public piety that nonetheless sheltered the century\'s boldest falsafa: the Almohad paradox of Averroes writing the Decisive Treatise for a caliph while the talaba burned other books.',
      'Its society moved armies and ideas across the strait both ways: Andalusi secretaries and poets in Marrakesh, Berber garrisons in Seville, the trans-Saharan gold trade funding the dinar\'s prestige — and its minorities\' experience darkened the convivencia: the forced conversions\' generation seeding both the Maghreb\'s Islamised Jewish communities and the exiles (Maimonides to Cairo) who carried Andalusi learning east.'
    ]},
    { title: 'Legacy', paragraphs: [
      'The caliphate\'s collapse redrew two continents\' futures: the Maghreb\'s tripartite successor-map (Marinid, Zayyanid, Hafsid) lasted into early modernity, while al-Andalus\'s fall to the great conquests left only Granada — the Almohad century thus bracketing Islamic Iberia\'s last imperial age.',
      'Its cultural residue outlived the doctrine: the minaret-style from Rabat to Seville\'s cathedral tower, Averroes\'s Aristotle transforming Latin scholasticism within a generation of Las Navas, and the movement itself remaining the model case — studied from Ibn Khaldun onward — of how Maghrebi reform movements make and unmake empires.'
    ]}
  ],
  knownFor: [
    'Ibn Tumart\'s Mahdist reform movement from the Atlas',
    'Abd al-Mumin\'s unification of the Maghreb and al-Andalus',
    'Alarcos (1195) and the court of Averroes',
    'Defeat at Las Navas de Tolosa (1212)',
    'The Giralda and the Almohad architectural style'
  ],
  timeline: [
    { date: 'c. 1121', title: 'The Mahdi at Tinmal', description: 'Ibn Tumart proclaims the movement in the High Atlas.' },
    { date: '1147', title: 'Marrakesh falls', description: 'Abd al-Mumin destroys the Almoravids and takes their capital.' },
    { date: '1159–1160', title: 'The Maghreb united', description: 'Ifriqiya conquered — one rule from the Atlantic to Tripoli.' },
    { date: '1172', title: 'Al-Andalus absorbed', description: 'Seville becomes the caliphate\'s Iberian capital.' },
    { date: '18 July 1195', title: 'Alarcos', description: 'Yaqub al-Mansur crushes Castile; the apogee.' },
    { date: '1198', title: 'Averroes dies', description: 'The Commentator\'s death closes the court-philosophy era his patrons enabled.' },
    { date: '16 July 1212', title: 'Las Navas de Tolosa', description: 'The coalition destroys al-Nasir\'s army; the turning point.' },
    { date: '1229', title: 'The creed repudiated', description: 'Al-Mamun renounces the Mahdi; legitimacy dissolves.' },
    { date: '1236–1248', title: 'The great conquests', description: 'Córdoba, Valencia, and Seville fall to Castile and Aragon.' },
    { date: '1269', title: 'Marrakesh to the Marinids', description: 'The dynasty\'s end in its own capital.' }
  ],
  relatedEntries: {
    people: [
      { title: 'Muhammad al-Nasir', type: 'person', slug: 'muhammad-al-nasir', label: 'Las Navas\'s caliph' },
      { title: 'Alfonso VIII of Castile', type: 'person', slug: 'alfonso-viii-of-castile', label: 'Alarcos\'s loser, Las Navas\'s victor' }
    ],
    locations: [
      { title: 'Kingdom of Castile', type: 'location', slug: 'kingdom-of-castile', label: 'The coalition\'s core' },
      { title: 'Umayyad Caliphate', type: 'location', slug: 'umayyad-caliphate', label: 'Al-Andalus\'s earlier masters' }
    ],
    events: [ { title: 'Battle of Las Navas de Tolosa', type: 'event', slug: 'battle-of-las-navas-de-tolosa', label: '1212' } ]
  },
  sources: [
    { title: 'Almohad Caliphate — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Almohad_Caliphate' },
    { title: 'The Almohad Revolution', author: 'Allen Fromherz / academic scholarship', type: 'book' },
    { title: 'Muslim Spain and Portugal', author: 'Hugh Kennedy', type: 'book' }
  ]
})

// ── SELJUK EMPIRE ───────────────────────────────────────────────────────────
patch('seljuk-turks', {
  overview: [
    'The Great Seljuk Empire carried the Turks into Middle Eastern history: Oghuz war-bands under the house of Seljuk who broke the Ghaznavids at Dandanaqan (1040), took Baghdad as the caliph\'s "liberators" (1055), and under Tughril Beg, Alp Arslan, and Malik-Shah I ruled from Transoxiana to Syria — the sultanate itself invented for them.',
    'Its pivots ring the age: Manzikert (1071) opening Anatolia to Turkish settlement; Nizam al-Mulk\'s madrasas and statecraft defining Perso-Islamic government; the 1092 double assassination-and-death breaking the unity — successor sultanates (Rum in Anatolia until the Mongols\' Köse Dağ, 1243) and atabeg dynasties inheriting the fragments through which crusade and counter-crusade would move.'
  ],
  contentSections: [
    { title: 'Overview', paragraphs: [
      'The Great Seljuk Empire carried the Turks into Middle Eastern history: Oghuz war-bands under the house of Seljuk who broke the Ghaznavids at Dandanaqan (1040), took Baghdad as the caliph\'s "liberators" (1055), and under Tughril Beg, Alp Arslan, and Malik-Shah I ruled from Transoxiana to Syria — the sultanate itself invented for them.',
      'Its pivots ring the age: the Battle of Manzikert (1071) opening Anatolia to Turkish settlement; Nizam al-Mulk\'s madrasas and statecraft defining Perso-Islamic government; the 1092 double assassination-and-death breaking the unity — successor sultanates (Rum in Anatolia until the Mongols\' Köse Dağ, 1243) and atabeg dynasties inheriting the fragments through which crusade and counter-crusade would move.'
    ]},
    { title: 'From steppe to sultanate', paragraphs: [
      'The Seljuks were Oghuz Turks of the Aral steppes, converted to Sunni Islam around the millennium and drawn south as mercenaries and migrants; Tughril and his brother Chaghri turned hunger into conquest at Dandanaqan (1040), dividing the Ghaznavid east and pushing west through Persia city by city.',
      'Baghdad crowned the ascent: the Buyid Shia emirate ended at the caliph\'s own invitation (1055), and al-Qaim\'s investiture of Tughril as sultan — "power" made a title — created the Sunni dyarchy (caliph\'s name, sultan\'s sword) that framed Islamic government for centuries. The unruly Turkmen tribes, the empire\'s muscle and its chaos, were pointed at Byzantium: the raids into Armenia and Anatolia that Alp Arslan\'s formal campaigns capped.'
    ]},
    { title: 'Manzikert, apogee, and fracture', paragraphs: [
      'Alp Arslan\'s decade (1063–1072) took Ani (1064) and met Romanos IV Diogenes\'s great counter-offensive at Manzikert (1071): the Byzantine army destroyed, the emperor captured and courteously ransomed — and the real consequence unplanned: Byzantium\'s civil wars, not the treaty, let Turkmen bands settle Anatolia within a decade, Nicaea itself a Turkish capital by 1081. The sultan died the next year on the Oxus; his son Malik-Shah I ruled the apogee with Nizam al-Mulk — the empire at its widest, the vizier\'s Siyasatnama and Nizamiyya madrasas its software.',
      'The fracture came in one autumn (1092): Nizam al-Mulk murdered by the Assassins — the Ismaili state-in-fortresses of Hasan-i Sabbah at Alamut, the empire\'s internal nemesis — and Malik-Shah dead weeks later; succession wars split the house (Berkyaruq, Muhammad, Sanjar in the east), atabegs (Turkish guardian-generals) made appanages hereditary, and when the First Crusade marched into Syria (1097–99) it passed through exactly this fractured landscape — Kilij Arslan\'s Rum fighting alone at Nicaea and Dorylaeum, Aleppo and Damascus under rival lords. Sanjar\'s eastern sultanate ended in Ghuzz captivity (1153); Rum flourished (Konya\'s courts, Alaeddin Kayqubad\'s buildings) until the Mongols broke it at Köse Dağ (1243), the vassal-sultanate dissolving into the beyliks from which the Ottomans would rise.'
    ]},
    { title: 'Political structure and rule', paragraphs: [
      'The Seljuk synthesis — Turco-Persian statecraft — became the region\'s template: Turkish military dynasty and tribal cavalry; Persian vizieral administration (Nizam al-Mulk its archetype) running divans and taxes; the iqta revenue-grant binding soldiers to land without ownership; and the caliph-sultan dyarchy legitimising it all. Family-confederacy ruled beneath the sultan: princes in appanage with atabeg guardians — a structure that reproduced itself and its civil wars in every generation.',
      'Its institutional bequest was the madrasa system: the Nizamiyyas (Baghdad\'s under al-Ghazali the most famous) training the Sunni scholar-bureaucracy, hardening the "Sunni revival" against Fatimid Shiism, and exporting the pattern — endowed college, standardised law, state-adjacent ulema — across the Islamic world.'
    ]},
    { title: 'Major rulers', paragraphs: [
      'Tughril Beg, sultan 1055–1063 — Dandanaqan\'s victor, Baghdad\'s "liberator", the first sultan.',
      'Alp Arslan, 1063–1072 — Ani and Manzikert; the empire\'s soldier-apogee.',
      'Malik-Shah I, 1072–1092 — the zenith with Nizam al-Mulk; the fracture at his death.',
      'Sanjar, eastern sultan 1118–1157 — the long Khurasani afterglow ending in Ghuzz captivity.',
      'Kilij Arslan I, Rum 1092–1107 — the First Crusade\'s Anatolian adversary.'
    ]},
    { title: 'Religion, culture, and society', paragraphs: [
      'Seljuk religion was Sunni restoration with Sufi undertow: madrasas and mosque-complexes (Isfahan\'s Great Mosque\'s domes the architectural signature), al-Ghazali\'s synthesis written inside its institutions, and the dervish currents that would flower in Rum — Rumi\'s Konya is a Seljuk court city — while the Assassins\' counter-state supplied the era\'s terror and legend.',
      'Its culture was Persian in tongue and Turkish in power: Omar Khayyam calibrating the calendar in Malik-Shah\'s observatory, Firdawsi\'s legacy canonised, caravanserais chaining the trade routes (Rum\'s stone hans the best-preserved), and Anatolia\'s slow turkification — toponyms, tribes, and tekkes — beginning the demographic transformation that made "Turkey" out of Rum.'
    ]},
    { title: 'Legacy', paragraphs: [
      'The Seljuks\' bequests structured everything after: the sultanate as institution, Turco-Persian government inherited by Zengids, Ayyubids, Mamluks, and Ottomans alike, the madrasa\'s Sunni establishment, and Anatolia\'s Turkish future — Manzikert\'s long shadow, claimed as founding moment by the Ottoman and modern Turkish imaginations.',
      'For the Latin West they were the trigger: Manzikert\'s aftermath supplied the appeals to which Urban II answered with the First Crusade — the empire whose fracture invited Christendom\'s counter-offensive and whose successor-lords (Zengi above all) organised the response.'
    ]}
  ],
  knownFor: [
    'Dandanaqan (1040) and the Turkish entry into the Middle East',
    'Baghdad (1055) and the invention of the sultanate',
    'Manzikert (1071) and Anatolia\'s opening',
    'Nizam al-Mulk, the madrasas, and Turco-Persian statecraft',
    'The 1092 fracture, Rum\'s sultanate, and Köse Dağ (1243)'
  ],
  timeline: [
    { date: '1040', title: 'Dandanaqan', description: 'The Ghaznavid army breaks; Tughril and Chaghri divide the east.' },
    { date: '1055', title: 'Baghdad entered', description: 'The Buyids fall; the caliph invests Tughril as sultan (1058).' },
    { date: '1064', title: 'Ani falls', description: 'Alp Arslan takes Armenia\'s capital; the Anatolian raids sharpen.' },
    { date: '26 August 1071', title: 'Manzikert', description: 'Romanos IV is captured; Byzantium\'s civil wars open Anatolia.' },
    { date: '1092', title: 'The double death', description: 'Nizam al-Mulk assassinated, Malik-Shah dead; the succession wars begin.' },
    { date: '1097–1099', title: 'The First Crusade passes', description: 'Nicaea and Dorylaeum defeat Rum; the fractured Levant cannot combine.' },
    { date: '1141', title: 'The Qatwan steppe', description: 'Sanjar\'s defeat by the Qara Khitai shakes the east.' },
    { date: '1153', title: 'Sanjar\'s captivity', description: 'The Ghuzz rising ends the great sultanate in Khurasan.' },
    { date: '1176', title: 'Myriokephalon', description: 'Rum turns back Byzantium\'s last Anatolian offensive.' },
    { date: '26 June 1243', title: 'Köse Dağ', description: 'The Mongols break Rum; the beylik age begins.' }
  ],
  relatedEntries: {
    people: [
      { title: 'Tughril Beg', type: 'person', slug: 'tughril-beg' },
      { title: 'Alp Arslan', type: 'person', slug: 'alp-arslan' },
      { title: 'Malik-Shah I', type: 'person', slug: 'malik-shah-i' },
      { title: 'Kilij Arslan I', type: 'person', slug: 'kilij-arslan-i' }
    ],
    locations: [
      { title: 'Byzantine Empire', type: 'location', slug: 'byzantine-empire', label: 'Manzikert\'s loser' },
      { title: 'Ottoman Empire', type: 'location', slug: 'ottoman-empire', label: 'The beylik heir' }
    ],
    events: [ { title: 'Battle of Manzikert', type: 'event', slug: 'battle-of-manzikert' } ]
  },
  sources: [
    { title: 'Seljuk Empire — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Seljuk_Empire' },
    { title: 'The Great Seljuk Empire', author: 'A. C. S. Peacock', type: 'book' },
    { title: 'Nizam al-Mulk, Siyasatnama (Book of Government)', author: 'Nizam al-Mulk', type: 'primary source' }
  ]
})

// ── AYYUBID SULTANATE ───────────────────────────────────────────────────────
patch('ayyubid-sultanate', {
  overview: [
    'The Ayyubid Sultanate was Saladin\'s creation: the Kurdish soldier who ended the Fatimid caliphate (1171), united Egypt and Syria over Nur ad-Din\'s inheritance, destroyed the crusader army at Hattin and retook Jerusalem (1187), and fought the Third Crusade to the standing truce of 1192.',
    'After him it ran as a family confederation — al-Adil\'s and al-Kamil\'s pragmatic decades trading truces and even Jerusalem itself (1229) with Frederick II — prosperous, learned, and militarily cautious, until the Khwarazmian sack (1244), Louis IX\'s crusade, and the Mamluk coup (1250) that replaced the dynasty with its own slave-soldiers.'
  ],
  contentSections: [
    { title: 'Overview', paragraphs: [
      'The Ayyubid Sultanate was Saladin\'s creation: the Kurdish soldier who ended the Fatimid caliphate (1171), united Egypt and Syria over Nur ad-Din\'s inheritance, destroyed the crusader army at Hattin and retook Jerusalem (1187), and fought the Third Crusade to the standing truce of 1192.',
      'After him it ran as a family confederation — al-Adil\'s and al-Kamil\'s pragmatic decades trading truces and even Jerusalem itself (1229) with Frederick II — prosperous, learned, and militarily cautious, until the Khwarazmian sack (1244), Louis IX\'s crusade, and the Mamluk coup (1250) that replaced the dynasty with its own slave-soldiers.'
    ]},
    { title: 'Origins: Saladin\'s ascent', paragraphs: [
      'The house of Ayyub were Kurdish officers in Zengid service: Shirkuh, Nur ad-Din\'s general, won the three-cornered Egyptian wars against Amalric I of Jerusalem and the Fatimid viziers (1164–1169); his nephew Saladin, inheriting the vizierate at thirty-one, abolished the Fatimid caliphate for Baghdad\'s (1171), survived Nur ad-Din\'s displeasure by that lord\'s death (1174), and spent a decade gathering Damascus, Aleppo (1183), and Mosul\'s homage — jihad\'s credentials assembled alongside the family appanages.',
      'The reckoning with the Franks made the legend: Hattin\'s annihilation (4 July 1187), Jerusalem\'s negotiated surrender (October) pointedly unlike 1099\'s sack, and the coast swept — then held against the Third Crusade\'s siege of Acre and Richard the Lionheart\'s battles (Arsuf, Jaffa) to the Treaty of Jaffa (1192): the coast Frankish, the interior and the holy city Muslim, pilgrimage open. He died months later at Damascus, famously poor, his reputation — chivalric in the West\'s telling, saintly-jurist in the East\'s — the dynasty\'s greatest asset.'
    ]},
    { title: 'The confederation and its fall', paragraphs: [
      'Saladin\'s empire was parcelled among kin as policy: sons at Damascus, Aleppo, and Cairo balanced by his brother al-Adil, who by 1200 had gathered the sultanate himself and set the pattern — a senior sultan in Cairo refereeing princely Syria. The system\'s genius was peace-management: truces with the rump-crusaders, trade privileges to Venice and Pisa, and the Fifth Crusade\'s defeat (Damietta regained 1221) followed by al-Kamil\'s masterpiece of realism — the 1229 treaty ceding demilitarised Jerusalem to Frederick II for a decade\'s peace, both rulers\' clerics scandalised.',
      'The unravelling came fast at mid-century: the Khwarazmian mercenaries\' sack of Jerusalem (1244) and the allied Frankish-Syrian defeat at La Forbie; as-Salih Ayyub\'s concentration of Turkish slave-soldiers (the Bahri mamluks) as his instrument; Louis IX\'s crusade taking Damietta (1249) and dying into captivity at Mansurah (1250) — where the sultan\'s death mid-campaign exposed the succession: the mamluks murdered his heir Turanshah, raised Shajar al-Durr and then their own emirs, and the Ayyubid sultanate passed to its army. Syrian branches lingered (Aleppo to the Mongols, 1260; hill-appanages like Hama for centuries) but Ain Jalut\'s victors owned the future.'
    ]},
    { title: 'Political structure and rule', paragraphs: [
      'The Ayyubids governed as a kin-confederation under Cairo\'s seniority: appanaged princes (Damascus, Aleppo, Hama, Homs, the Jazira, Yemen) bound by oaths renegotiated at every death, iqta grants sustaining Kurdish and Turkish regiments, and the chancery-and-divan machinery inherited from Fatimids and Zengids running commerce-rich Egypt as the treasury of the whole.',
      'Its signature institutions were Sunni-restorationist: madrasas planted in Cairo (ending Fatimid Ismaili instruction), citadels crowning the capitals — Cairo\'s begun by Saladin with Frankish prisoners, Aleppo\'s glacis among the age\'s engineering feats — and the hospital-and-college complexes (as-Salih\'s, later the model for Mamluk grandeur) that made Ayyubid cities the era\'s Sunni intellectual capitals.'
    ]},
    { title: 'Major rulers', paragraphs: [
      'Saladin, 1171–1193 — founder: Hattin, Jerusalem, and the truce of 1192.',
      'Al-Adil I, 1200–1218 — the consolidator; "Saphadin" to the Franks he outbargained.',
      'Al-Kamil, 1218–1238 — Damietta\'s defender, Frederick II\'s treaty-partner, St Francis\'s host.',
      'As-Salih Ayyub, 1240–1249 — the Bahri mamluks\' creator; died facing Louis IX.',
      'Turanshah, 1249–1250 — Mansurah\'s victor for weeks; the dynasty\'s murdered last.'
    ]},
    { title: 'Religion, culture, and society', paragraphs: [
      'Ayyubid religion was the Sunni revival made policy: Shafii and other law-colleges endowed against two centuries of Ismaili rule, Sufi khanqahs patronised, jihad preached and pragmatically scheduled — with the dhimma\'s protections generally restored after Fatimid oscillations, Coptic administrators and Jewish physicians (Maimonides, Saladin\'s court doctor) serving the state.',
      'Its culture was late-classical Islam\'s high plateau: Baha al-Din\'s and Imad al-Din\'s Saladin-biographies, Ibn Khallikan\'s biographical dictionary begun in its schools, Abd al-Latif\'s Cairo lectures, and an architecture of purposeful mass — citadels, city walls (Cairo\'s extended), madrasas — that Mamluk splendour would elaborate; commerce meanwhile bound Alexandria to Venice and the Red Sea to India: the sultanate as the spice route\'s Sunni toll-keeper.'
    ]},
    { title: 'Legacy', paragraphs: [
      'The Ayyubids\' structural bequest was the Mamluk state itself — army, iqta system, Cairo\'s primacy, and the counter-crusade\'s momentum passing whole to their slave-successors, who finished Outremer within a lifetime; their political bequest was the demonstrated alternative to jihad-maximalism: al-Kamil\'s treaty-Jerusalem remains diplomacy\'s most argued-over medieval case.',
      'Saladin himself became a shared civilisational figure — Dante\'s virtuous pagan, the East\'s exemplar of just war and mercy, modern nationalism\'s icon — the dynasty\'s name carried less by its states than by its founder\'s unmatched afterlife.'
    ]}
  ],
  knownFor: [
    'Saladin\'s union of Egypt and Syria; the Fatimids ended (1171)',
    'Hattin and the recovery of Jerusalem (1187)',
    'The Third Crusade fought to the 1192 truce',
    'Al-Kamil\'s treaty ceding Jerusalem to Frederick II (1229)',
    'The Mamluk coup of 1250'
  ],
  timeline: [
    { date: '1169', title: 'Shirkuh and Saladin in Cairo', description: 'The Egyptian wars end with the Ayyubid uncle-nephew in the vizierate.' },
    { date: '1171', title: 'The Fatimids ended', description: 'Saladin restores Baghdad\'s name to Cairo\'s pulpits.' },
    { date: '1174–1186', title: 'Syria gathered', description: 'Damascus, Aleppo, and Mosul\'s homage under one jihad-banner.' },
    { date: '4 July 1187', title: 'Hattin', description: 'The crusader army destroyed; Jerusalem surrenders in October.' },
    { date: '1191–1192', title: 'The Third Crusade', description: 'Acre falls, Arsuf and Jaffa are fought, and the truce of Jaffa splits coast from interior.' },
    { date: '1221', title: 'The Fifth Crusade fails', description: 'Al-Kamil regains Damietta as the Nile drowns the crusade.' },
    { date: '18 February 1229', title: 'Jerusalem by treaty', description: 'Al-Kamil and Frederick II\'s bargain: the city, demilitarised, for peace.' },
    { date: '1244', title: 'Khwarazmian sack and La Forbie', description: 'Jerusalem lost for good; the Frankish-Syrian alliance annihilated.' },
    { date: '1249–1250', title: 'Louis IX\'s crusade', description: 'Damietta taken, Mansurah lost, the king captured — and the mamluks seize the state.' },
    { date: '1260', title: 'Aftermath at Ain Jalut', description: 'The Mamluk successors stop the Mongols; Syria\'s Ayyubid remnants fold in.' }
  ],
  relatedEntries: {
    people: [
      { title: 'Saladin', type: 'person', slug: 'saladin', label: 'The founder' },
      { title: 'Al-Adil I', type: 'person', slug: 'al-adil-i' },
      { title: 'Al-Kamil', type: 'person', slug: 'al-kamil' },
      { title: 'Baybars', type: 'person', slug: 'baybars', label: 'The Mamluk successor-power' }
    ],
    locations: [
      { title: 'Kingdom of Jerusalem', type: 'location', slug: 'kingdom-of-jerusalem', label: 'The adversary of Hattin and the truces' },
      { title: 'Seljuk Turks', type: 'location', slug: 'seljuk-turks', label: 'The statecraft inherited via the Zengids' }
    ],
    events: [ { title: 'Third Crusade', type: 'event', slug: 'third-crusade' } ]
  },
  sources: [
    { title: 'Ayyubid dynasty — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Ayyubid_dynasty' },
    { title: 'Saladin: The Politics of the Holy War', author: 'Malcolm Cameron Lyons & D. E. P. Jackson', type: 'book' },
    { title: 'Baha al-Din ibn Shaddad, The Rare and Excellent History of Saladin', author: 'Baha al-Din ibn Shaddad', type: 'primary source' }
  ]
})

fs.writeFileSync(dataPath, JSON.stringify(data, null, 2) + '\n')
console.log('Batch 5 (east + crusader + Islamic) complete.')
