// Batch 4 (final): Carolingian, HRE, Polish, Rus', Jerusalem, and Scottish rulers.
import fs from 'node:fs'

const dataPath = new URL('../server/data/history.json', import.meta.url)
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'))
const fp = (n) => `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(n)}`
const pg = (n) => `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(n)}`
const P = (personSlug, displayName, note) => ({ personSlug, displayName, ...(note ? { note } : {}) })
const UN = (displayName, note) => ({ displayName, ...(note ? { note } : {}) })
const NONE = (displayName, note) => ({ status: 'none', displayName, note })

const people = [
  {
    id: 'pepin-the-short', type: 'character', name: 'Pepin the Short', aliases: ['Pippin III', 'Pépin le Bref'],
    born: 714, died: 768, deathAge: 'about 54', causeOfDeath: 'Died of illness at Saint-Denis returning from his Aquitanian war',
    restingPlace: 'Basilica of Saint-Denis', location: 'Frankish Kingdom',
    image: fp('PippinImperialChronicleCorpusChristiCollegeMS373Fol14.jpg'),
    imageInfo: { caption: 'Pepin the Short in a twelfth-century imperial chronicle manuscript.', creator: 'Unknown illuminator', date: '12th century', source: 'Corpus Christi College, Cambridge, MS 373 — via Wikimedia Commons', sourceUrl: pg('PippinImperialChronicleCorpusChristiCollegeMS373Fol14.jpg'), note: 'A high-medieval imagined portrait; no contemporary likeness survives.' },
    summary: 'Pepin the Short, mayor of the palace turned king (751–768), deposed the last Merovingian with papal blessing, founded the Carolingian monarchy, and created the Papal States by his Italian wars.',
    title: 'king of the Franks', roles: ['King of the Franks', 'Mayor of the Palace (741–751)'],
    birth: { date: 'c. 714', place: 'Francia', note: 'Younger son of Charles Martel; educated at Saint-Denis.' },
    death: { date: '24 September 768', place: 'Saint-Denis', note: 'Died after finally subduing Aquitaine.', circumstance: 'The kingdom was divided between his sons Charles — the future Charlemagne — and Carloman.' },
    quickFacts: { realm: 'Frankish Kingdom', dynasty: 'Carolingian (founder as king)', culture: 'Frankish Christian', knownFor: 'the dynastic revolution of 751 and the Donation of Pepin' },
    isRuler: true,
    succession: { office: 'King of the Franks', predecessor: UN('Childeric III', 'The last Merovingian, deposed and tonsured with papal sanction in 751'), successor: P('charlemagne', 'Charlemagne', 'Jointly with his brother Carloman until Carloman\'s death in 771') },
    overview: [
      'Pepin completed what his father Charles Martel had made possible: in 751, armed with Pope Zacharias\'s famous answer — that he who held the power ought to hold the name of king — he deposed the puppet Childeric III, took the crown by election and anointment, and founded the Carolingian monarchy.',
      'The papal alliance was paid for in Italy: twice he crossed the Alps against the Lombards, and the "Donation of Pepin" (756) handed the conquered exarchate to St Peter — the legal birth of the Papal States and of the Frankish-papal axis on which Charlemagne\'s empire would stand.'
    ],
    contentSections: [
      { title: 'Overview', paragraphs: [
        'Pepin completed what his father Charles Martel had made possible: in 751, armed with Pope Zacharias\'s famous answer — that he who held the power ought to hold the name of king — he deposed the puppet Childeric III, took the crown by election and anointment, and founded the Carolingian monarchy.',
        'The papal alliance was paid for in Italy: twice he crossed the Alps against the Lombards, and the "Donation of Pepin" (756) handed the conquered exarchate to St Peter — the legal birth of the Papal States and of the Frankish-papal axis on which Charlemagne\'s empire would stand.'
      ]},
      { title: 'Birth and early life', paragraphs: [
        'Born about 714, the year his grandfather Pepin of Herstal died, Pepin was raised at Saint-Denis while his father Charles Martel fought his way to mastery of Francia. On Charles\'s death in 741 the mayoral office was divided: Carloman took the east, Pepin the west, with a Merovingian figurehead — Childeric III — dusted off in 743 to quiet legitimists.',
        'The brothers crushed the risings of Aquitanians, Alemans, and Bavarians together until 747, when Carloman, in one of the age\'s genuine surprises, renounced the world for Monte Cassino — leaving Pepin sole master of Francia and free to ask Rome his famous question.'
      ]},
      { title: 'Character and Personality', paragraphs: [
        'The nickname "the Short" is late and possibly a mistranslation; the contemporary record shows nothing small. Einhard, writing under his grandson, preserved the emblematic story: taunted about his stature, Pepin loosed a lion and a bull in the arena, then leapt down and beheaded both — theatre, but theatre remembered because it matched the man\'s decisiveness.',
        'His revolution\'s method reveals the politician: every step — the papal consultation, the election at Soissons, the anointment by bishops (repeated in 754 by Pope Stephen himself, who also anointed his sons and forbade the Franks ever to choose a king from another family) — wrapped naked usurpation in every sanctity available. He invented, in effect, the medieval theory of sacral kingship by needing it.'
      ]},
      { title: 'Reign', paragraphs: [
        'The Italian interventions answered Pope Stephen II\'s personal journey across the Alps in 753–754 — the first papal visit to Francia — begging protection from the Lombard king Aistulf. Pepin\'s campaigns of 754 and 756 broke Aistulf, and the keys of the exarchate\'s cities were laid on St Peter\'s tomb: the Donation that made the pope a territorial prince and the Frankish king Rome\'s protector, with all that both would mean.',
        'Elsewhere he governed as conqueror-reformer: Septimania taken from the Umayyads with Narbonne\'s fall in 759; the church councils continued from Carloman\'s day, with Boniface\'s reforms institutionalised; the coinage reformed on the silver denier that would rule Western Europe for five centuries; and the last eight years spent breaking Aquitaine in the brutal annual campaigns he completed weeks before his death.'
      ]},
      { title: 'Death and legacy', paragraphs: [
        'Pepin died at Saint-Denis on 24 September 768, and was buried — at his own humble instruction, face-down at the threshold, tradition says — in the abbey that had raised him. Francia was divided between Charles and Carloman in the customary way, with the customary fraternal hatred; Carloman\'s death in 771 spared the kingdom the war.',
        'His reign built every platform Charlemagne stood on: the sanctified dynasty, the papal axis, the Lombard question half-answered, the reformed church and coinage, Aquitaine subdued. Founders who are also fathers of geniuses are doomed to the shadow; historians have spent two centuries pointing out that the "first Carolingian" was among the most effective kings the Franks ever had.'
      ]}
    ],
    timeline: [
      { date: 'c. 714', title: 'Born', description: 'Younger son of Charles Martel; raised at Saint-Denis.' },
      { date: '741', title: 'Mayor of the palace', description: 'Divides the mayoral office with his brother Carloman on their father\'s death.' },
      { date: '747', title: 'Sole ruler in fact', description: 'Carloman retires to Monte Cassino, leaving Pepin master of Francia.' },
      { date: 'November 751', title: 'The dynastic revolution', description: 'With Pope Zacharias\'s sanction, deposes Childeric III and is elected and anointed king at Soissons.' },
      { date: '754 and 756', title: 'Italian campaigns', description: 'Defeats the Lombards and grants the exarchate to the papacy — the Donation of Pepin.' },
      { date: '759', title: 'Takes Narbonne', description: 'Ends Umayyad rule north of the Pyrenees with the fall of Septimania.' },
      { date: '24 September 768', title: 'Dies at Saint-Denis', description: 'The kingdom passes jointly to Charlemagne and Carloman.' }
    ],
    relatedEntries: {
      people: [
        { title: 'Charles Martel', type: 'person', slug: 'charles-martel', label: 'Father, victor of Tours' },
        { title: 'Charlemagne', type: 'person', slug: 'charlemagne', label: 'Son and successor' }
      ],
      locations: [ { title: 'Kingdom of France', type: 'location', slug: 'kingdom-of-france', label: 'Heir of the Frankish realm he refounded' } ],
      events: [ { title: 'Battle of Tours', type: 'event', slug: 'battle-of-tours', label: 'His father\'s victory, the dynasty\'s springboard' } ]
    },
    sources: [
      { title: 'Wikimedia Commons image record', author: 'Wikimedia Commons', type: 'image source', url: pg('PippinImperialChronicleCorpusChristiCollegeMS373Fol14.jpg') },
      { title: 'Pepin the Short — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Pepin_the_Short' },
      { title: 'Royal Frankish Annals; Einhard, Vita Karoli', author: 'Carolingian court historiography', type: 'primary source', note: 'The dynasty\'s own account of the 751 revolution.' }
    ]
  },
  {
    id: 'louis-the-pious', type: 'character', name: 'Louis the Pious', aliases: ['Louis I', 'Ludovicus Pius'],
    born: 778, died: 840, deathAge: '62', causeOfDeath: 'Died on an island in the Rhine near Ingelheim, campaigning against his own son',
    restingPlace: 'Abbey of Saint-Arnould, Metz', location: 'Carolingian Empire',
    image: fp('Ludwik_I_Pobożny.jpg'),
    imageInfo: { caption: 'Louis the Pious as miles Christi, from Rabanus Maurus\'s De laudibus sanctae crucis, c. 831 — made in the emperor\'s own lifetime.', creator: 'Fulda scriptorium', date: 'c. 831', source: 'Rabanus Maurus, De laudibus sanctae crucis — via Wikimedia Commons', sourceUrl: pg('Ludwik_I_Pobożny.jpg'), note: 'A contemporary manuscript portrait, iconographic rather than naturalistic.' },
    summary: 'Louis the Pious (814–840), Charlemagne\'s sole surviving heir, held the empire together by moral authority until his sons\' rebellions — twice deposing him — broke it toward the partition of Verdun.',
    title: 'emperor of the Franks', roles: ['Emperor', 'King of the Franks', 'King of Aquitaine (781–814)'],
    birth: { date: '778', place: 'Chasseneuil, Aquitaine', note: 'Son of Charlemagne and Hildegard; king of Aquitaine from age three.' },
    death: { date: '20 June 840', place: 'island near Ingelheim', note: 'Died marching against his rebel son Louis the German.', circumstance: 'His last recorded word — "Huz!", "out!" — was aimed, a biographer says, at an evil spirit; the civil war among his sons began within weeks.' },
    quickFacts: { realm: 'Carolingian Empire', dynasty: 'Carolingian', culture: 'Frankish Christian', knownFor: 'the imperial reform programme and the family wars that broke the empire' },
    isRuler: true,
    succession: { office: 'Emperor of the Franks', predecessor: P('charlemagne', 'Charlemagne', 'His father, who crowned him co-emperor at Aachen in 813'), successor: UN('Lothair I', 'His eldest son took the imperial title; the empire itself was partitioned at Verdun in 843') },
    overview: [
      'Louis inherited the whole Carolingian world in 814 because his brothers had died first, and ruled it as its conscience: a court purged of his father\'s comfortable irregularities, the monasteries reformed under Benedict of Aniane, the empire itself reconceived — in the Ordinatio Imperii of 817 — as a Christian unity that must not be divided like private property.',
      'The unity broke on his own household. His fourth son by a second marriage, Charles the Bald, needed a portion; the elder sons rebelled — twice deposing him, in 830 and in the great humiliation of 833, the "Field of Lies", where his army deserted him at a stroke. Restored twice, he died in 840 marching against yet another filial revolt, and Verdun\'s partition followed in three years.'
    ],
    contentSections: [
      { title: 'Overview', paragraphs: [
        'Louis inherited the whole Carolingian world in 814 because his brothers had died first, and ruled it as its conscience: a court purged of his father\'s comfortable irregularities, the monasteries reformed under Benedict of Aniane, the empire itself reconceived — in the Ordinatio Imperii of 817 — as a Christian unity that must not be divided like private property.',
        'The unity broke on his own household. His fourth son by a second marriage, Charles the Bald, needed a portion; the elder sons rebelled — twice deposing him, in 830 and in the great humiliation of 833, the "Field of Lies", where his army deserted him at a stroke. Restored twice, he died in 840 marching against yet another filial revolt, and Verdun\'s partition followed in three years.'
      ]},
      { title: 'Birth and early life', paragraphs: [
        'Born in Aquitaine in 778 — while his father was returning from the Roncesvalles campaign — Louis was crowned king of Aquitaine at three and grew up governing it, learning war on the Spanish March: his forces took Barcelona in 801, the campaign that anchored Frankish Spain.',
        'Charlemagne\'s two elder heirs, Pepin of Italy and Charles the Younger, died in 810 and 811; in September 813, at Aachen, the old emperor — bypassing pope and ceremony alike — had Louis lift the crown from the altar with his own hands. A year later he was sole ruler of the West.'
      ]},
      { title: 'Character and Personality', paragraphs: [
        'Two contemporary biographies — Thegan\'s and the Astronomer\'s — and Ermoldus\'s verse portrait agree on the piety that named him: daily psalms, floods of tears at prayer, a court where the scurrilous songs his father had enjoyed were banned and the palace school turned to scripture. He was also, Thegan insists, a strong bowman and huntsman who never laughed aloud in public — gravitas worn like armour.',
        'The fatal traits were the piety\'s twins: a scrupulosity his enemies learned to weaponise — the public penance at Attigny in 822 for blinding his rebel nephew Bernard set the precedent for the forced, throne-voiding penance of 833 — and a clemency toward his sons that reset the board after every revolt without ever settling it. Modern historians have partly rehabilitated the "weak" Louis of legend: the empire\'s administration, courts, and missions ran better under him than under his father. It was the succession, the one problem sanctity could not solve, that destroyed him.'
      ]},
      { title: 'Reign', paragraphs: [
        'The reform years (814–829) were the Carolingian project at its most serious: Benedict of Aniane\'s uniform Benedictine rule imposed across the empire\'s monasteries (Aachen synods, 816–819), missi and capitularies renewed, the Ordinatio Imperii of 817 subordinating the younger sons\' kingdoms to the imperial unity vested in Lothair — the first constitutional theory of empire the medieval West produced.',
        'The second marriage undid it. Judith of Bavaria\'s son Charles (b. 823) required an inheritance the Ordinatio had not left room for; the redistributions of 829 triggered the elder sons\' first coup (830), and in 833 all three — with Pope Gregory IV in their camp — met Louis at the Rotfeld near Colmar, where his supporters melted away overnight: the Field of Lies. Deposed and driven through a staged public penance at Soissons, he was restored within the year by the very sons\' quarrels that had unmade him, and spent his last years redrawing partition maps as alliances shifted — dying in 840 on the Rhine, at war with Louis the German, forgiving him formally from the deathbed.'
      ]},
      { title: 'Legacy', paragraphs: [
        'Three years after his death, the treaty of Verdun (843) divided the empire among the surviving sons — Charles the West, Louis the East, Lothair the middle strip and the title — the partition from which France and Germany descend. The unity Louis had theorised proved inseparable from the dynasty\'s own property instincts; his reign is the hinge on which "Europe" swung from empire to kingdoms.',
        'The reform legacy outlived the politics: the Benedictine standardisation, the capitulary tradition, and the moral vocabulary of Christian kingship — including, fatefully, the idea that an emperor could be judged and deposed by bishops — all passed from his court into the medieval mainstream.'
      ]}
    ],
    timeline: [
      { date: '778', title: 'Born in Aquitaine', description: 'Son of Charlemagne and Hildegard; crowned king of Aquitaine in 781.' },
      { date: '801', title: 'Takes Barcelona', description: 'His Aquitanian forces capture the city, anchoring the Spanish March.' },
      { date: 'September 813', title: 'Crowned co-emperor', description: 'Lifts the crown from the Aachen altar at his father\'s command.' },
      { date: '817', title: 'Ordinatio Imperii', description: 'Constitutes the empire as an indivisible Christian unity under Lothair\'s future primacy.' },
      { date: '822', title: 'Penance of Attigny', description: 'Publicly atones for his nephew Bernard\'s death — sanctity as policy, and precedent.' },
      { date: '833', title: 'The Field of Lies', description: 'Deserted by his army before his sons\' coalition; deposed and forced to public penance.' },
      { date: '835', title: 'Restored', description: 'His sons\' rivalries return him to the throne at Saint-Denis.' },
      { date: '20 June 840', title: 'Dies on the Rhine', description: 'Dies campaigning against Louis the German; Verdun\'s partition follows in 843.' }
    ],
    relatedEntries: {
      people: [
        { title: 'Charlemagne', type: 'person', slug: 'charlemagne', label: 'Father and predecessor' },
        { title: 'Charles Martel', type: 'person', slug: 'charles-martel', label: 'Great-grandfather, founder of the family\'s power' }
      ],
      locations: [],
      events: [
        { title: 'Treaty of Verdun', type: 'event', slug: 'treaty-of-verdun', label: 'The partition of his empire among his sons' },
        { title: 'Charlemagne Crowned Emperor', type: 'event', slug: 'charlemagne-crowned', label: 'The imperial office he inherited' }
      ]
    },
    sources: [
      { title: 'Wikimedia Commons image record — De laudibus portrait', author: 'Wikimedia Commons', type: 'image source', url: pg('Ludwik_I_Pobożny.jpg') },
      { title: 'Louis the Pious — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Louis_the_Pious' },
      { title: 'Thegan and the Astronomer, Lives of Louis the Pious', author: 'Thegan; the Astronomer', type: 'primary source', note: 'The two contemporary biographies of the emperor.' }
    ]
  },
  {
    id: 'henry-vi-holy-roman-emperor', type: 'character', name: 'Henry VI, Holy Roman Emperor', aliases: ['Heinrich VI'],
    born: 1165, died: 1197, deathAge: '31', causeOfDeath: 'Fever (probably malaria) at Messina, preparing his crusade',
    restingPlace: 'Palermo Cathedral', location: 'Holy Roman Empire',
    image: fp('Codex_Manesse_Heinrich_VI._(HRR).jpg'),
    imageInfo: { caption: 'Henry VI enthroned as poet-emperor, from the Codex Manesse, c. 1300–1340.', creator: 'Zurich workshop illuminators', date: 'c. 1300–1340', source: 'Universitätsbibliothek Heidelberg, Codex Manesse — via Wikimedia Commons', sourceUrl: pg('Codex_Manesse_Heinrich_VI._(HRR).jpg'), note: 'A posthumous idealised miniature heading the emperor\'s own Minnesang verses.' },
    summary: 'Henry VI (1190–1197), Barbarossa\'s son, ransomed Richard the Lionheart, conquered Norman Sicily on his wife\'s claim, and died at thirty-one planning crusade and hereditary empire alike.',
    title: 'Holy Roman Emperor', roles: ['Holy Roman Emperor', 'King of Germany', 'King of Sicily'],
    birth: { date: 'November 1165', place: 'Nijmegen', note: 'Second son of Frederick Barbarossa and Beatrice of Burgundy.' },
    death: { date: '28 September 1197', place: 'Messina, Sicily', note: 'Died with his crusade\'s advance parties already in the Holy Land.', circumstance: 'His three-year-old son Frederick\'s double inheritance — Empire and Sicily — set the next sixty years of papal-imperial war.' },
    quickFacts: { realm: 'Holy Roman Empire and Kingdom of Sicily', dynasty: 'Hohenstaufen', culture: 'German / Sicilian-Norman court', knownFor: 'Richard I\'s ransom and the conquest of Sicily' },
    isRuler: true,
    succession: { office: 'Holy Roman Emperor', predecessor: P('frederick-i-barbarossa', 'Frederick Barbarossa', 'His father, drowned on the Third Crusade'), successor: P('otto-iv', 'Otto IV', 'The Welf victor of the double election that followed Henry\'s early death') },
    overview: [
      'Henry VI took up his drowned father\'s empire in 1190 and in seven years came closer than any medieval emperor to universal monarchy: Richard the Lionheart, delivered to him by Austrian luck, was milked of 150,000 marks and vassalage; the ransom financed the conquest of Sicily — his wife Constance\'s inheritance — completed with calculated cruelty at Palermo in 1194.',
      'Master of Germany, Italy, and the Mediterranean\'s richest kingdom, holding Cyprus and Armenia as client crowns, he was assembling a crusade and pressing the princes to make the empire hereditary when malaria killed him at Messina at thirty-one — leaving a three-year-old, a widow, and a civil war.'
    ],
    contentSections: [
      { title: 'Overview', paragraphs: [
        'Henry VI took up his drowned father\'s empire in 1190 and in seven years came closer than any medieval emperor to universal monarchy: Richard the Lionheart, delivered to him by Austrian luck, was milked of 150,000 marks and vassalage; the ransom financed the conquest of Sicily — his wife Constance\'s inheritance — completed with calculated cruelty at Palermo in 1194.',
        'Master of Germany, Italy, and the Mediterranean\'s richest kingdom, holding Cyprus and Armenia as client crowns, he was assembling a crusade and pressing the princes to make the empire hereditary when malaria killed him at Messina at thirty-one — leaving a three-year-old, a widow, and a civil war.'
      ]},
      { title: 'Birth and early life', paragraphs: [
        'Born at Nijmegen in 1165, elected king of the Romans at four, Henry was trained in his father\'s shadow through the Lombard settlements and the great Mainz court of 1184. His marriage in 1186 to Constance of Sicily — aunt and, after the young king William II died childless in 1189, heiress of the Norman kingdom — was Barbarossa\'s masterstroke and the papacy\'s nightmare: the empire closing around Rome from north and south.',
        'When Barbarossa drowned in Anatolia in 1190, Henry inherited the German kingship amid a Welf rising and the Sicilian succession already stolen — the Norman barons had crowned the bastard Tancred of Lecce. His first Italian expedition (1191) won him the imperial crown from a reluctant pope and lost an army to epidemic before Naples.'
      ]},
      { title: 'Character and Personality', paragraphs: [
        'Contemporaries describe a slight, bookish figure — the Codex Manesse would later open its song-collection with the emperor\'s own courtly verses — housing perhaps the coldest political intelligence of his age. Chroniclers who admired the order he kept still recorded the method: the captured Sicilian leadership of 1194 blinded, burned, or drowned on suspicion of conspiracy, Richard of Acerra hung upside down until a jester mercifully finished him, the pretender\'s son blinded and castrated.',
        'The same mind ran the subtlest negotiation of the century: Richard\'s captivity managed against pope, France, and the prisoner\'s formidable mother simultaneously, priced to the last mark, and converted — by making Richard a vassal king — into constitutional theatre. His plan for a hereditary empire, offered to the princes with Sicilian gold and nearly carried, was statecraft a century ahead of its institutions; everything he built assumed a length of life he did not get.'
      ]},
      { title: 'Reign', paragraphs: [
        'The Richard windfall (1192–1194) reset everything: the English king, shipwrecked and seized by Leopold of Austria, was bought by Henry, held at Trifels, and released for 150,000 marks of silver and homage — money that paid for the second Sicilian expedition. Genoese and Pisan fleets in his service, Henry swept the kingdom in 1194; Palermo fell in November, Tancred being conveniently dead, and Henry was crowned king of Sicily on Christmas Day — the day before Constance, forty and delivering her first child in a market-square tent at Jesi to forestall all doubt, bore Frederick.',
        'The Sicilian conspiracy of 1197 was crushed with the ferocity noted above; the hereditary-empire plan traded away at the princes\' resistance for the election of the infant Frederick as king of the Romans; and the crusade — the "German crusade" whose advance forces took Beirut — was boarding when the emperor died of fever at Messina on 28 September 1197. Within months Germany split between Philip of Swabia and Otto IV; Constance, dying in 1198, delivered Sicily and her son to the guardianship of Pope Innocent III.'
      ]},
      { title: 'Legacy', paragraphs: [
        'Henry\'s union of Sicily and Empire defined the thirteenth century\'s central war: the popes\' obsession with breaking the encirclement ran through Innocent III\'s wardship of Frederick, the deposition struggles of Frederick\'s maturity, and the extermination of the Hohenstaufen line at Charles of Anjou\'s hands in the 1260s. One early death, and sixty years of European politics reorganised around its consequences.',
        'His son — Frederick II, "stupor mundi" — inherited the design and the enemies together. The Sicilian treasure Henry took north, the client kingdoms of Cyprus and Armenia he created, and the administrative fusion of Norman and imperial practice all outlived him; the breadth of the conception is why historians still argue over whether 1197 killed a passing hegemony or a different European future.'
      ]}
    ],
    timeline: [
      { date: 'November 1165', title: 'Born at Nijmegen', description: 'Son of Frederick Barbarossa; elected king of the Romans at four.' },
      { date: '27 January 1186', title: 'Marries Constance of Sicily', description: 'The Norman succession enters the Hohenstaufen house.' },
      { date: 'June 1190', title: 'Inherits Germany', description: 'Barbarossa drowns in Anatolia; Henry takes up the kingship amid Welf revolt.' },
      { date: '1193–1194', title: 'Richard\'s ransom', description: 'Buys the captive Lionheart from Austria and releases him for 150,000 marks and homage.' },
      { date: 'Christmas 1194', title: 'Crowned king of Sicily', description: 'Palermo taken; the next day Constance bears Frederick at Jesi.' },
      { date: '1196', title: 'The hereditary-empire plan', description: 'Presses the princes to make the crown hereditary; settles for his infant son\'s election.' },
      { date: '28 September 1197', title: 'Dies at Messina', description: 'Malaria kills him at thirty-one; double election and papal wardship follow.' }
    ],
    relatedEntries: {
      people: [
        { title: 'Frederick Barbarossa', type: 'person', slug: 'frederick-i-barbarossa', label: 'Father' },
        { title: 'Otto IV', type: 'person', slug: 'otto-iv', label: 'Welf successor after the double election' },
        { title: 'Frederick II', type: 'person', slug: 'frederick-ii-holy-roman-emperor', label: 'Son, born the day after his Sicilian coronation' },
        { title: 'Richard the Lionheart', type: 'person', slug: 'richard-the-lionheart', label: 'His most profitable prisoner' }
      ],
      locations: [],
      events: [ { title: 'Battle of Legnano', type: 'event', slug: 'battle-of-legnano', label: 'His father\'s Italian defeat, avenged by Henry\'s different methods' } ]
    },
    sources: [
      { title: 'Wikimedia Commons image record — Codex Manesse', author: 'Wikimedia Commons', type: 'image source', url: pg('Codex_Manesse_Heinrich_VI._(HRR).jpg') },
      { title: 'Henry VI, Holy Roman Emperor — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Henry_VI,_Holy_Roman_Emperor' },
      { title: 'Otto of St Blasien, Chronicle', author: 'Otto of St Blasien', type: 'primary source', note: 'Contemporary German narrative of the reign and the Sicilian conquest.' }
    ]
  },
  {
    id: 'jadwiga-of-poland', type: 'character', name: 'Jadwiga of Poland', aliases: ['Hedwig of Anjou', 'Saint Jadwiga'],
    born: 1374, died: 1399, deathAge: '25', causeOfDeath: 'Died of childbirth complications, four days after her infant daughter',
    restingPlace: 'Wawel Cathedral, Kraków', location: 'Kingdom of Poland',
    image: fp('Jadwiga_Andegaweńska_seal_1386.PNG'),
    imageInfo: { caption: 'The majestic seal of Jadwiga, king of Poland, 1386 — an image made in her own chancery.', creator: 'Royal chancery of Poland', date: '1386', source: 'Wikimedia Commons', sourceUrl: pg('Jadwiga_Andegaweńska_seal_1386.PNG'), note: 'A contemporary official image; medieval seals are iconographic, not portraits.' },
    summary: 'Jadwiga, crowned "king" of Poland in her own right in 1384, accepted marriage to the pagan grand duke Jogaila to Christianise Lithuania — the union that created the Jagiellonian commonwealth and, at Grunwald, broke the Teutonic Order.',
    title: 'king of Poland', roles: ['King (regnant) of Poland'],
    birth: { date: 'February 1374', place: 'Buda, Hungary', note: 'Youngest daughter of Louis I of Hungary and Poland and Elizabeth of Bosnia.' },
    death: { date: '17 July 1399', place: 'Kraków', note: 'Died at twenty-five after the birth and death of her only child.', circumstance: 'Canonised in 1997; her Wawel tomb remains a national shrine.' },
    quickFacts: { realm: 'Kingdom of Poland', dynasty: 'Capetian House of Anjou', culture: 'Polish / Angevin court', knownFor: 'the Polish-Lithuanian union and the Christianisation of Lithuania' },
    isRuler: true,
    succession: { office: 'King of Poland', predecessor: UN('Louis I of Hungary and Poland', 'Her father, whose death in 1382 opened two years of interregnum before the Polish lords accepted Jadwiga'), successor: P('wladyslaw-ii-jagiello', 'Władysław II Jagiełło', 'Her husband and co-ruler, sole king after her death') },
    overview: [
      'Jadwiga was crowned at Kraków in October 1384 not as queen but as king — rex Poloniae — the Polish lords\' declaration that sovereignty itself sat in the ten-year-old girl. Two years later she accepted the price of a policy grander than her own betrothal-hearted preferences: marriage to Jogaila of Lithuania, pagan Europe\'s last great ruler, baptised as Władysław on the eve of the wedding.',
      'The union of Krewo turned two rivals into a dual power the length of Eastern Europe, brought the last pagan nation into Christendom by treaty rather than Teutonic sword — destroying the Order\'s whole reason for existing, a generation before Grunwald destroyed its army — and made Jadwiga, in her decade of co-rule, the union\'s conscience: diplomat to the Order, patron of the restored Kraków university, saint of its memory.'
    ],
    contentSections: [
      { title: 'Overview', paragraphs: [
        'Jadwiga was crowned at Kraków in October 1384 not as queen but as king — rex Poloniae — the Polish lords\' declaration that sovereignty itself sat in the ten-year-old girl. Two years later she accepted the price of a policy grander than her own betrothal-hearted preferences: marriage to Jogaila of Lithuania, pagan Europe\'s last great ruler, baptised as Władysław on the eve of the wedding.',
        'The union of Krewo turned two rivals into a dual power the length of Eastern Europe, brought the last pagan nation into Christendom by treaty rather than Teutonic sword — destroying the Order\'s whole reason for existing, a generation before Grunwald destroyed its army — and made Jadwiga, in her decade of co-rule, the union\'s conscience: diplomat to the Order, patron of the restored Kraków university, saint of its memory.'
      ]},
      { title: 'Birth and early life', paragraphs: [
        'Born at Buda in 1374, youngest daughter of Louis the Great — king of Hungary and, from 1370, of Poland — Jadwiga was raised in one of Europe\'s most cultivated courts and betrothed in childhood to William of Habsburg, with whom she was partly brought up in Vienna.',
        'Louis\'s death in 1382 broke the personal union: Hungary took her sister Mary, and the Polish lords, after two years\' hard bargaining with her mother, took Jadwiga — on their terms. She arrived at thirteen and was crowned king on 16 October 1384, the male title securing her sovereignty against any husband\'s claims.'
      ]},
      { title: 'Character and Personality', paragraphs: [
        'The contemporary and near-contemporary testimony — chancery records, Długosz\'s history a generation later, the canonisation depositions — describes intelligence and piety fused with unusual political discipline: a girl who reportedly took an axe to the locked castle gate to reach her Habsburg betrothed, then, persuaded of the union\'s Christian stakes, renounced him and never looked back. Her Latin, French, German, and Polish, her psalter-translations and library, made her court a bridge between Angevin sophistication and Polish need.',
        'The recorded acts have a consistent grain: interceding for Kraków\'s townsfolk against her own retinue\'s damages ("who will give them back their tears?"), negotiating personally with the Teutonic grand masters where her husband\'s presence would have meant war, selling her jewels to refound the university that became the Jagiellonian. Poland\'s memory made her a saint; the documents make her something rarer — a teenage sovereign who chose policy over inclination once, completely, and governed by that choice for life.'
      ]},
      { title: 'Reign', paragraphs: [
        'The union of Krewo (August 1385) traded her hand for Lithuania\'s baptism: Jogaila undertook to convert himself and his nation, reclaim Poland\'s lost lands, and bind his grand duchy to the Polish crown. Baptised Władysław, he married Jadwiga in February 1386 and was crowned co-king; she remained crowned king in her own right, and the charters ran in both names.',
        'Her decade of co-rule had its own portfolio: the 1387 expedition she led in person that recovered Red Ruthenia (Lwów\'s homage) from Hungarian occupation; the standing diplomacy with the Teutonic Order over Dobrzyń and Samogitia, where the grand masters preferred the queen\'s table to the king\'s camp; and the cultural foundation — the bequest of her jewels that reopened the University of Kraków in 1400, six months after her death, with theology faculty and Lithuanian scholarships aimed squarely at staffing the new Christian east.'
      ]},
      { title: 'Death and legacy', paragraphs: [
        'Her only child, Elizabeth Bonifacia, was born on 22 June 1399 and died within three weeks; Jadwiga followed on 17 July, twenty-five years old. On her deathbed, the tradition runs, she counselled Jogaila to marry Anna of Cilli, granddaughter of Casimir the Great — handing her husband the dynastic legitimacy her own death took with it.',
        'The structures she died for held: the union survived her by four centuries, Grunwald came eleven years later, and the Jagiellonian university still teaches under her name. Canonised by John Paul II in 1997 at Kraków, she remains the only woman crowned king of Poland — and the union\'s founding act remains, by any measure, one of the most consequential marriages in European history.'
      ]}
    ],
    timeline: [
      { date: 'February 1374', title: 'Born at Buda', description: 'Daughter of Louis the Great of Hungary and Poland.' },
      { date: '16 October 1384', title: 'Crowned king of Poland', description: 'Crowned rex at Wawel at ten, sovereignty vested in her own person.' },
      { date: '14 August 1385', title: 'Union of Krewo', description: 'The marriage treaty binds Lithuania\'s conversion and union to her hand.' },
      { date: 'February–March 1386', title: 'Baptism, marriage, coronation', description: 'Jogaila becomes Władysław II; the co-rule of king and king begins.' },
      { date: '1387', title: 'Recovers Red Ruthenia', description: 'Leads the expedition that returns Lwów and the province to the Polish crown.' },
      { date: '1397', title: 'University endowment', description: 'Obtains the papal bull and pledges her jewels for Kraków\'s restored university.' },
      { date: '17 July 1399', title: 'Dies at Kraków', description: 'Dies after childbirth with her infant daughter; buried at Wawel.' }
    ],
    relatedEntries: {
      people: [
        { title: 'Władysław II Jagiełło', type: 'person', slug: 'wladyslaw-ii-jagiello', label: 'Husband, convert, and co-ruler' },
        { title: 'Vytautas', type: 'person', slug: 'vytautas', label: 'The Lithuanian cousin the union eventually reconciled' }
      ],
      locations: [],
      events: [ { title: 'Battle of Grunwald', type: 'event', slug: 'battle-of-grunwald', label: 'The union\'s vindication, eleven years after her death' } ]
    },
    sources: [
      { title: 'Wikimedia Commons image record — 1386 seal', author: 'Wikimedia Commons', type: 'image source', url: pg('Jadwiga_Andegaweńska_seal_1386.PNG') },
      { title: 'Jadwiga of Poland — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Jadwiga_of_Poland' },
      { title: 'Jan Długosz, Annales seu cronicae incliti Regni Poloniae', author: 'Jan Długosz', type: 'primary source', note: 'The great fifteenth-century Polish history; near-contemporary for Jadwiga\'s reign.' }
    ]
  },
  {
    id: 'sviatoslav-i-of-kiev', type: 'character', name: 'Sviatoslav I of Kiev', aliases: ['Svyatoslav Igorevich'],
    born: 943, died: 972, deathAge: 'about 29', causeOfDeath: 'Killed by Pechenegs at the Dnieper rapids; their khan had his skull made into a drinking cup, the chronicle says',
    restingPlace: 'Unknown', location: "Kievan Rus'",
    image: fp('Sviatoslav_by_Eugene_Lanceray_1886.JPG'),
    imageInfo: { caption: 'Sviatoslav I on horseback, bronze by Yevgeny Lanceray, 1886.', creator: 'Yevgeny Lanceray', date: '1886', source: 'Wikimedia Commons', sourceUrl: pg('Sviatoslav_by_Eugene_Lanceray_1886.JPG'), note: 'A nineteenth-century artistic imagining based on Leo the Deacon\'s famous description; no contemporary image exists.' },
    summary: 'Sviatoslav I (c. 945–972), the last pagan ruler of Kievan Rus\', destroyed Khazaria and fought Byzantium for the Balkans — a whirlwind of campaigns ended by a Pecheneg ambush at the Dnieper rapids.',
    title: 'grand prince of Kiev', roles: ["Grand Prince of Kiev"],
    birth: { date: 'c. 943', place: "Kievan Rus'", note: 'Son of Igor of Kiev and Olga; a small child when his father was killed.' },
    death: { date: 'spring 972', place: 'Dnieper rapids', note: 'Ambushed by the Pechenegs — forewarned, the chronicle tradition says, by Byzantine diplomacy.', circumstance: 'The Primary Chronicle reports Khan Kurya lined his skull with gold as a cup; the detail is chronicle tradition, told of steppe victors since antiquity.' },
    quickFacts: { realm: "Kievan Rus'", dynasty: 'Rurikid (chronicle tradition)', culture: "Pagan Norse-Slavic Rus'", knownFor: 'destroying Khazaria and the great Balkan war with Byzantium' },
    isRuler: true,
    succession: { office: 'Grand Prince of Kiev', predecessor: P('olga-of-kiev', 'Olga', 'His mother, regent through his minority, whose Christianity he declined to share'), successor: UN('Yaropolk I', 'His eldest son, whose fratricidal war ended with Vladimir the Great\'s victory') },
    overview: [
      'Sviatoslav is the Primary Chronicle\'s pagan hero: the prince who "sent word to the nations, saying, I am coming upon you". In a decade of continuous war he shattered Khazaria — sacking Sarkel (965) and the capital Itil, ending the khaganate that had taxed the steppe for three centuries — and subdued the Volga Bulgars and Vyatichi.',
      'Invited by Byzantine gold to raid Bulgaria, he decided to keep it, announcing he would move his capital to the Danube. The emperor John Tzimiskes needed two bloody years (971) to besiege him out of Dorostolon; the withdrawal treaty fed him to the Pechenegs at the Dnieper rapids the following spring. He refused baptism to the end — his warriors, he told his Christian mother, would laugh.'
    ],
    contentSections: [
      { title: 'Overview', paragraphs: [
        'Sviatoslav is the Primary Chronicle\'s pagan hero: the prince who "sent word to the nations, saying, I am coming upon you". In a decade of continuous war he shattered Khazaria — sacking Sarkel (965) and the capital Itil, ending the khaganate that had taxed the steppe for three centuries — and subdued the Volga Bulgars and Vyatichi.',
        'Invited by Byzantine gold to raid Bulgaria, he decided to keep it, announcing he would move his capital to the Danube. The emperor John Tzimiskes needed two bloody years (971) to besiege him out of Dorostolon; the withdrawal treaty fed him to the Pechenegs at the Dnieper rapids the following spring. He refused baptism to the end — his warriors, he told his Christian mother, would laugh.'
      ]},
      { title: 'Birth and early life', paragraphs: [
        'The Primary Chronicle — a twelfth-century compilation, and the caution applies to everything that follows — makes Sviatoslav a small child at his father Igor\'s death in 945, and gives him a ceremonial début at his mother Olga\'s Derevlian revenge-battle: the boy\'s thrown spear, falling short, opening the fight. Olga ruled as regent through his minority.',
        'His name is the first purely Slavic one in the ruling line — after the Norse Rurik, Oleg (Helgi), Igor (Ingvar), and Olga (Helga) — a detail historians read as the dynasty\'s assimilation in progress even as its prince kept the old gods.'
      ]},
      { title: 'Character and Personality', paragraphs: [
        'Uniquely for an early Rus\' ruler, we have an eyewitness portrait from the enemy: Leo the Deacon saw him at the Danube parley of 971 — medium height, powerful, blue-eyed, bushy-browed, head shaved but for a single lock, a gold earring with two pearls and a ruby, clothes white and indistinguishable from his men\'s except cleaner, rowing his own oar. The Byzantine historian\'s Achilles-comparison was deliberate.',
        'The chronicle\'s character-sketch matches: no baggage, no cauldron, meat roasted on coals, sleeping on his saddle-blanket under the stars, and the herald\'s warning sent ahead to every enemy. How much is literary shaping — the pagan warrior-king as foil for his sainted mother and converting son — is fair to ask; but with a Greek eyewitness corroborating the austerity and the charisma, Sviatoslav survives source-criticism better than most figures of his century.'
      ]},
      { title: 'Campaigns', paragraphs: [
        'The eastern war (963–966 by the chronicle\'s reckoning) redrew western Eurasia: the Vyatichi detached from Khazar tribute, Sarkel on the Don stormed in 965, Itil on the Volga left — a later Arab geographer reported — without a grape or a leaf; the khaganate that had balanced the steppe for centuries simply ceased. The vacuum let the Pechenegs — his eventual killers — roam free: destroying Khazaria was magnificent and, for Kiev\'s long-term safety, arguably ruinous.',
        'The Balkan adventure began as a Byzantine subcontract (967/968): raid Bulgaria, paid in gold. Sviatoslav took eighty towns and decided the Danube — "the centre of my lands, where all riches flow" — suited him better than Kiev, which he left to his sons after beating off the Pechenegs\' 968 siege of his mother\'s city. Byzantium, having invited the wolf, spent 970–971 expelling him: Arcadiopolis checked his coalition, Tzimiskes stormed Preslav at Easter 971, and after the three-month blood-bath of Dorostolon — sorties, night burials with prisoner sacrifices, the last great battle fought, the Greeks admitted, to a hair\'s breadth — Sviatoslav treated: Bulgaria abandoned, trade rights renewed, safe passage home.'
      ]},
      { title: 'Death and legacy', paragraphs: [
        'The safe passage was the trap: warned — by Byzantine embassy to the Pechenegs, the chronicle alleges — the khan Kurya waited at the Dnieper rapids where every boat must portage. Sviatoslav, refusing the detour his voivode Sveneld took overland, wintered on the river and died at the rapids in spring 972. The gold-lined skull-cup the chronicle gives Kurya is a steppe-literary flourish as old as Herodotus; the ambush and the death are as solid as anything in the period.',
        'His partition of Rus\' among three sons — Yaropolk, Oleg, Vladimir — delivered the fratricidal war from which Vladimir the Great emerged; the pagan hero\'s youngest son would make Rus\' Christian within a generation, completing the arc his grandmother had begun. In the modern era the chronicle\'s Sviatoslav — the ascetic, the herald\'s warning, the death at the rapids — became a foundational warrior-image in both Ukrainian and Russian national imaginations, contested like everything in that shared inheritance.'
      ]}
    ],
    timeline: [
      { date: 'c. 943', title: 'Born', description: 'Son of Igor and Olga, by the chronicle\'s chronology.' },
      { date: '945–c. 963', title: 'Olga\'s regency', description: 'His mother rules and converts to Christianity; Sviatoslav keeps the old gods.' },
      { date: '965', title: 'Sarkel falls', description: 'Storms the Khazar fortress on the Don; Itil and the khaganate follow.' },
      { date: '967/968', title: 'Into Bulgaria', description: 'Takes the Danube towns on Byzantine invitation — and decides to stay.' },
      { date: '968', title: 'Pechenegs besiege Kiev', description: 'Races home to relieve the city, then returns to the Danube.' },
      { date: '971', title: 'Dorostolon', description: 'John Tzimiskes besieges him for three months; the treaty ends the Balkan war.' },
      { date: 'spring 972', title: 'Killed at the rapids', description: 'The Pecheneg ambush ends him; his sons\' war for Rus\' begins.' }
    ],
    relatedEntries: {
      people: [
        { title: 'Olga of Kiev', type: 'person', slug: 'olga-of-kiev', label: 'Mother, regent, and saint he declined to follow' },
        { title: 'Igor of Kiev', type: 'person', slug: 'igor-of-kiev', label: 'Father' },
        { title: 'Rurik', type: 'person', slug: 'rurik', label: 'Chronicle founder of his line' },
        { title: 'Oleg of Novgorod', type: 'person', slug: 'oleg-of-novgorod', label: 'Predecessor tradition in Kiev' }
      ],
      locations: [ { title: 'Byzantine Empire', type: 'location', slug: 'byzantine-empire', label: 'Paymaster, then enemy, at Dorostolon' } ],
      events: []
    },
    sources: [
      { title: 'Wikimedia Commons image record — Lanceray bronze', author: 'Wikimedia Commons', type: 'image source', url: pg('Sviatoslav_by_Eugene_Lanceray_1886.JPG') },
      { title: 'Sviatoslav I — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Sviatoslav_I' },
      { title: 'Leo the Deacon, History; Russian Primary Chronicle', author: 'Leo the Deacon; Kievan compilers', type: 'primary source', note: 'The Byzantine eyewitness and the twelfth-century Rus\' tradition, to be read together and critically.' }
    ]
  },
  {
    id: 'baldwin-iii-of-jerusalem', type: 'character', name: 'Baldwin III of Jerusalem', aliases: ['Baudouin III'],
    born: 1130, died: 1163, deathAge: '33', causeOfDeath: 'Died at Beirut after a wasting illness; his doctor was suspected of poison, probably unjustly',
    restingPlace: 'Church of the Holy Sepulchre, Jerusalem', location: 'Kingdom of Jerusalem',
    image: fp('Baudouin_III_apprenant_la_nouvelle_(cropped).jpg'),
    imageInfo: { caption: 'Baldwin III in a miniature from a manuscript of William of Tyre\'s history.', creator: 'Unknown illuminator', date: '13th century', source: 'William of Tyre manuscript tradition — via Wikimedia Commons', sourceUrl: pg('Baudouin_III_apprenant_la_nouvelle_(cropped).jpg'), note: 'A later medieval imagined portrait from the chronicle that preserves his reign.' },
    summary: 'Baldwin III (1143–1163) wrested sole rule from his mother Melisende, took Ascalon in 1153 — the kingdom\'s last great conquest — and bound Jerusalem to Byzantium by his Komnenian marriage.',
    title: 'king of Jerusalem', roles: ['King of Jerusalem'],
    birth: { date: '1130', place: 'Kingdom of Jerusalem', note: 'Eldest son of Fulk of Anjou and Queen Melisende; grandson of Baldwin II.' },
    death: { date: '10 February 1163', place: 'Beirut', note: 'Died childless; even Nur ad-Din, it was said, refused to attack the mourning kingdom.', circumstance: 'The crown passed to his brother Amalric after a baronial dispute over Amalric\'s marriage.' },
    quickFacts: { realm: 'Kingdom of Jerusalem', dynasty: 'House of Anjou-Rethel', culture: 'Frankish Outremer', knownFor: 'the conquest of Ascalon and the Byzantine alliance' },
    isRuler: true,
    succession: { office: 'King of Jerusalem', predecessor: P('melisende-of-jerusalem', 'Melisende', 'His mother and co-ruler, from whom he forced sole power in 1152'), successor: P('amalric-i-of-jerusalem', 'Amalric I', 'His brother, accepted by the barons after annulling his marriage') },
    overview: [
      'Baldwin III was crowned at thirteen jointly with his formidable mother Melisende, and the kingdom nearly came to civil war when the grown king demanded reality to match the title: in 1152 he took Jerusalem from her partisans within a fortnight, then — the measure of them both — restored her to honour and counsel.',
      'His reign carried the Second Crusade\'s wreckage (he was in the council that chose the disastrous Damascus attack of 1148), answered it with the five-month siege that finally took Ascalon (1153), and met Nur ad-Din\'s unification of Muslim Syria with the only counterweight available: the Byzantine marriage — Theodora Komnene, and with her the emperor Manuel\'s protection.'
    ],
    contentSections: [
      { title: 'Overview', paragraphs: [
        'Baldwin III was crowned at thirteen jointly with his formidable mother Melisende, and the kingdom nearly came to civil war when the grown king demanded reality to match the title: in 1152 he took Jerusalem from her partisans within a fortnight, then — the measure of them both — restored her to honour and counsel.',
        'His reign carried the Second Crusade\'s wreckage (he was in the council that chose the disastrous Damascus attack of 1148), answered it with the five-month siege that finally took Ascalon (1153), and met Nur ad-Din\'s unification of Muslim Syria with the only counterweight available: the Byzantine marriage — Theodora Komnene, and with her the emperor Manuel\'s protection.'
      ]},
      { title: 'Birth and early life', paragraphs: [
        'Born in 1130 to Fulk of Anjou and Melisende, Baldwin was the first king of Jerusalem born in the kingdom itself. His father\'s death in a hunting accident in 1143 made him king at thirteen under his mother\'s co-rule — an arrangement his grandfather Baldwin II had constitutionally designed, and which Melisende had every intention of making permanent.',
        'His military schooling was immediate: Edessa fell to Zengi the next year, triggering the Second Crusade, and the teenage king campaigned in its humiliations — including the four-day fiasco before Damascus in 1148 that he had helped counsel.'
      ]},
      { title: 'Character and Personality', paragraphs: [
        'William of Tyre, who knew the court and wrote the reign, drew Baldwin at full length and with love: tall, well-made, laughing easily, the best-lettered of Jerusalem\'s kings, a listening ruler who kept even his enemies\' respect and — pointedly, in Outremer — kept his hands off other men\'s wives and the church\'s treasury. The vices conceded are gambling in his youth and a tongue too quick for dignity.',
        'The crisis of 1152 shows the steel under the charm: refused real power at twenty-two, he demanded partition, took the north, then swept his mother\'s half in two weeks of actual siege warfare — Nablus, Jerusalem, the Tower of David — without an execution, a blinding, or a lasting breach; Melisende emerged dowager-counsellor rather than prisoner. Even his death played to character witnesses: the emirs, William says, held their raids while the kingdom carried its king to the Sepulchre.'
      ]},
      { title: 'Reign', paragraphs: [
        'Ascalon was the strategic prize of a decade: the last Fatimid port on the Palestinian coast, the standing threat to the kingdom\'s southern roads. Baldwin closed it inside the new castles — Ibelin, Blanchegarde, Gaza given to the Templars — and in January 1153 sat down before it with the whole kingdom, patriarch and True Cross included. The five-month siege survived the Templars\' catastrophic private assault through the August breach; the city fell on 22 August, and the county of Jaffa-Ascalon went to his brother Amalric.',
        'Against Nur ad-Din — master of Aleppo and, from 1154, of Damascus, the first union of Muslim Syria in crusader memory — Baldwin\'s answer was Constantinople: the marriage to Manuel I\'s niece Theodora in 1158 (she was thirteen, the treasury got 100,000 hyperpyra), the joint Antioch settlement of 1159 that put the emperor in ceremonial lordship over the principality, and the unbuilt but real deterrent of Byzantine power that held the north together for a generation.'
      ]},
      { title: 'Death and legacy', paragraphs: [
        'Baldwin sickened through 1162 and died at Beirut on 10 February 1163, thirty-three and childless; the lozenges prescribed by his Syrian doctor fed the usual poison rumour, which William of Tyre reports and doubts. The funeral cortège to Jerusalem drew, the chronicler insists, Muslim mourners down from the hills, and Nur ad-Din declined to profit: the Franks, he reportedly said, had lost such a prince as the world no longer had.',
        'The succession went, after baronial argument, to Amalric — on condition he shed his wife Agnes de Courtenay, whose children were nonetheless kept legitimate: a lawyer\'s compromise whose consequences (Baldwin IV, Sibylla, and through Sibylla, Guy of Lusignan and Hattin) would unmake the kingdom within a quarter-century. Baldwin III\'s own balance — Ascalon taken, Byzantium bound, the barons managed, the mother honoured — marked the kingdom\'s high water; the tide behind it was already Nur ad-Din\'s.'
      ]}
    ],
    timeline: [
      { date: '1130', title: 'Born', description: 'Eldest son of Fulk and Melisende; first king born in the kingdom.' },
      { date: '25 December 1143', title: 'Crowned with Melisende', description: 'Joint coronation at thirteen after Fulk\'s hunting death.' },
      { date: 'July 1148', title: 'Damascus fiasco', description: 'The Second Crusade\'s four-day siege collapses; the king shares the council\'s blame.' },
      { date: 'March–April 1152', title: 'Takes sole power', description: 'Forces his mother\'s partisans from Nablus and Jerusalem in a two-week campaign, then reconciles.' },
      { date: '22 August 1153', title: 'Ascalon falls', description: 'The five-month siege ends Fatimid presence on the Palestinian coast.' },
      { date: 'September 1158', title: 'Marries Theodora Komnene', description: 'The Byzantine alliance is sealed; Manuel I\'s protection covers the north.' },
      { date: '10 February 1163', title: 'Dies at Beirut', description: 'Childless; Amalric succeeds after the annulment compromise.' }
    ],
    relatedEntries: {
      people: [
        { title: 'Melisende of Jerusalem', type: 'person', slug: 'melisende-of-jerusalem', label: 'Mother, co-ruler, and defeated rival' },
        { title: 'Amalric I', type: 'person', slug: 'amalric-i-of-jerusalem', label: 'Brother and successor' },
        { title: 'Nur ad-Din', type: 'person', slug: 'nur-ad-din', label: 'The adversary whose Syria closed around his kingdom' }
      ],
      locations: [],
      events: [ { title: 'Third Crusade', type: 'event', slug: 'third-crusade', label: 'The later reckoning with the power he held at bay' } ]
    },
    sources: [
      { title: 'Wikimedia Commons image record', author: 'Wikimedia Commons', type: 'image source', url: pg('Baudouin_III_apprenant_la_nouvelle_(cropped).jpg') },
      { title: 'Baldwin III of Jerusalem — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Baldwin_III_of_Jerusalem' },
      { title: 'William of Tyre, Historia', author: 'William of Tyre', type: 'primary source', note: 'The court chronicler\'s full-length portrait of the reign.' }
    ]
  },
  {
    id: 'amalric-i-of-jerusalem', type: 'character', name: 'Amalric I of Jerusalem', aliases: ['Amaury I'],
    born: 1136, died: 1174, deathAge: '38', causeOfDeath: 'Dysentery, weeks after returning from the abortive siege of Banias',
    restingPlace: 'Church of the Holy Sepulchre, Jerusalem', location: 'Kingdom of Jerusalem',
    image: fp('Amalric_receives_a_message_(cropped).jpg'),
    imageInfo: { caption: 'Amalric I in a miniature from a manuscript of William of Tyre\'s history.', creator: 'Unknown illuminator', date: '13th century', source: 'William of Tyre manuscript tradition — via Wikimedia Commons', sourceUrl: pg('Amalric_receives_a_message_(cropped).jpg'), note: 'A later medieval imagined portrait from the chronicle of his own archbishop-historian.' },
    summary: 'Amalric I (1163–1174) staked Jerusalem\'s future on five invasions of Egypt — and lost the race: Saladin\'s rise in Cairo closed the ring his campaigns had tried to break.',
    title: 'king of Jerusalem', roles: ['King of Jerusalem', 'Count of Jaffa and Ascalon (before accession)'],
    birth: { date: '1136', place: 'Kingdom of Jerusalem', note: 'Younger son of Fulk and Melisende.' },
    death: { date: '11 July 1174', place: 'Jerusalem', note: 'Died two months after Nur ad-Din, leaving a leper boy as heir.', circumstance: 'The double vacancy of 1174 — Damascus and Jerusalem at once — was filled on the Muslim side by Saladin.' },
    quickFacts: { realm: 'Kingdom of Jerusalem', dynasty: 'House of Anjou-Rethel', culture: 'Frankish Outremer', knownFor: 'the Egyptian campaigns and the Byzantine alliance against Nur ad-Din' },
    isRuler: true,
    succession: { office: 'King of Jerusalem', predecessor: P('baldwin-iii-of-jerusalem', 'Baldwin III', 'His childless brother'), successor: P('baldwin-iv-of-jerusalem', 'Baldwin IV', 'His son, the leper king, thirteen at his accession') },
    overview: [
      'Amalric received the crown in 1163 on a lawyer\'s condition — his marriage to Agnes de Courtenay annulled, their children Baldwin and Sibylla ruled legitimate — and spent his reign on a single strategic idea: Fatimid Egypt, decadent and fabulously rich, must belong to Jerusalem or to Nur ad-Din, and whoever held both banks held the crusader states\' fate.',
      'Five expeditions (1163–1169) came heartbreakingly close — in 1167 his men garrisoned Alexandria and a Frankish resident sat in Cairo — before the extortionate invasion of 1168 threw the Egyptians into Nur ad-Din\'s arms: Shirkuh took Cairo, and Shirkuh\'s nephew Saladin inherited it. Amalric died in 1174 two months after Nur ad-Din, leaving a thirteen-year-old leper facing the man who now ruled both Egypt and Damascus.'
    ],
    contentSections: [
      { title: 'Overview', paragraphs: [
        'Amalric received the crown in 1163 on a lawyer\'s condition — his marriage to Agnes de Courtenay annulled, their children Baldwin and Sibylla ruled legitimate — and spent his reign on a single strategic idea: Fatimid Egypt, decadent and fabulously rich, must belong to Jerusalem or to Nur ad-Din, and whoever held both banks held the crusader states\' fate.',
        'Five expeditions (1163–1169) came heartbreakingly close — in 1167 his men garrisoned Alexandria and a Frankish resident sat in Cairo — before the extortionate invasion of 1168 threw the Egyptians into Nur ad-Din\'s arms: Shirkuh took Cairo, and Shirkuh\'s nephew Saladin inherited it. Amalric died in 1174 two months after Nur ad-Din, leaving a thirteen-year-old leper facing the man who now ruled both Egypt and Damascus.'
      ]},
      { title: 'Birth and early life', paragraphs: [
        'Born in 1136, the younger son, Amalric grew up in his brother\'s shadow and his mother\'s party — he stood with Melisende in the crisis of 1152 — and was invested with the new county of Jaffa and Ascalon after 1153: the southern command facing Egypt, which shaped everything he later attempted.',
        'The succession of 1163 was conditional: the Haute Cour balked at Agnes de Courtenay as queen, consanguinity supplied the pretext, and Amalric accepted the annulment with the children\'s rights preserved — the fateful clause — before his coronation.'
      ]},
      { title: 'Character and Personality', paragraphs: [
        'William of Tyre — Amalric\'s own choice as tutor to his son and archdeacon-historian — wrote the king from close observation and evident, complicated respect: taciturn where Baldwin III had charmed (a slight stammer embarrassed him), given to fits of laughter that shook his heavy frame, restless in intelligence — the king peppered William with theological doubts and legal puzzles — and immovable in adversity, the eye of every routed field. He was, the archbishop notes with clerical wincing, fond of other men\'s wives and remorseless about church taxation.',
        'The assize attributed to his reign that bound rear-vassals directly to the crown, his codifying instinct, and the census-treaty precision of his Byzantine diplomacy show the judicial mind under the soldier; Runciman\'s summary — the last king of Jerusalem who governed as well as reigned — follows William\'s own.'
      ]},
      { title: 'Reign', paragraphs: [
        'The Egyptian decade ran like a tragedy in five acts: 1163, the Nile-flood repulse at Pelusium; 1164, invited in by the ousted vizier Shawar against Shirkuh — Nur ad-Din\'s counter-move at Harim in the north costing the Franks an army and nearly Antioch; 1167, the great campaign — Alexandria besieged over Saladin\'s first command, tribute trebled, a Frankish prefect in Cairo; 1168, the unprovoked winter invasion, pressed by the Hospitallers over the king\'s treaty scruples, Bilbeis massacred — and Shawar\'s Cairo, choosing between conquerors, calling in Shirkuh for good. By January 1169 the vizierate was Shirkuh\'s, then dead Shirkuh\'s nephew Saladin\'s; the Fatimid caliphate itself was abolished in 1171.',
        'The Byzantine alliance was the other pillar: married to Maria Komnene in 1167, Amalric sailed to Constantinople himself in 1171 — the first king of Jerusalem to do homage in the Queen of Cities — and the joint fleet-and-army design on Egypt was rebuilding (the 1169 Damietta attempt had failed in recrimination and rain) when both protagonists died: Nur ad-Din in May 1174, Amalric of dysentery on 11 July, thirty-eight years old, his last campaign an abortive lunge at Banias.'
      ]},
      { title: 'Legacy', paragraphs: [
        'The verdict of events was total: the Egypt he failed to take crowned the man who would destroy the kingdom — Hattin came thirteen years after his death, Jerusalem\'s fall within fourteen. Yet the strategic reading was correct, as Richard the Lionheart\'s identical conclusion on the Third Crusade would confirm: Jerusalem\'s security ran through Cairo, and the resources to hold Cairo never crossed the sea in time.',
        'His household became the kingdom\'s dramatis personae: Baldwin IV the leper hero, Sibylla and her Guy, Isabella and her four husbands — and his historian William of Tyre, whose great chronicle, commissioned and informed by the king, remains the window through which the whole Latin East is seen.'
      ]}
    ],
    timeline: [
      { date: '1136', title: 'Born', description: 'Younger son of Fulk and Melisende.' },
      { date: '1154', title: 'Count of Jaffa and Ascalon', description: 'Receives the southern march facing Egypt.' },
      { date: '18 February 1163', title: 'Crowned king', description: 'Accepts the annulment of his marriage as the barons\' price; his children stay legitimate.' },
      { date: '1167', title: 'Alexandria and Cairo', description: 'The third Egyptian campaign plants a garrison in Alexandria and a resident in Cairo.' },
      { date: 'winter 1168', title: 'The fatal invasion', description: 'Bilbeis is massacred; Shawar calls in Shirkuh, and Egypt is lost to Nur ad-Din\'s house.' },
      { date: '1171', title: 'Homage at Constantinople', description: 'Sails in person to Manuel I to rebuild the Egyptian design.' },
      { date: '11 July 1174', title: 'Dies at Jerusalem', description: 'Two months after Nur ad-Din; Saladin holds both Egypt and Damascus within the year.' }
    ],
    relatedEntries: {
      people: [
        { title: 'Baldwin III', type: 'person', slug: 'baldwin-iii-of-jerusalem', label: 'Brother and predecessor' },
        { title: 'Baldwin IV', type: 'person', slug: 'baldwin-iv-of-jerusalem', label: 'Son, the leper king' },
        { title: 'Saladin', type: 'person', slug: 'saladin', label: 'The nephew of his rival who inherited Egypt' },
        { title: 'Nur ad-Din', type: 'person', slug: 'nur-ad-din', label: 'The adversary in the race for Cairo' }
      ],
      locations: [],
      events: [ { title: 'Third Crusade', type: 'event', slug: 'third-crusade', label: 'Fought over the collapse his failure made possible' } ]
    },
    sources: [
      { title: 'Wikimedia Commons image record', author: 'Wikimedia Commons', type: 'image source', url: pg('Amalric_receives_a_message_(cropped).jpg') },
      { title: 'Amalric of Jerusalem — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Amalric_of_Jerusalem' },
      { title: 'William of Tyre, Historia', author: 'William of Tyre', type: 'primary source', note: 'Written by the tutor of Amalric\'s son, at the king\'s own commission.' }
    ]
  },
  {
    id: 'isabella-i-of-jerusalem', type: 'character', name: 'Isabella I of Jerusalem', aliases: ['Isabelle of Jerusalem'],
    born: 1172, died: 1205, deathAge: 'about 33', causeOfDeath: 'Died at Acre shortly after her fourth husband; the cause is unrecorded',
    restingPlace: 'Acre (probably)', location: 'Kingdom of Jerusalem (at Acre)',
    image: fp('Isabella_I_of_Jerusalem.jpeg'),
    imageInfo: { caption: 'Isabella I of Jerusalem in a later depiction.', creator: 'Unknown artist', date: 'later', source: 'Wikimedia Commons', sourceUrl: pg('Isabella_I_of_Jerusalem.jpeg'), note: 'A posthumous imagined likeness; no contemporary portrait survives.' },
    summary: 'Isabella I, queen of Jerusalem (1190/92–1205), carried the shattered kingdom\'s legitimacy through four political marriages — the crown of Acre passing with her hand from Conrad to Henry of Champagne to Amalric of Lusignan.',
    title: 'queen of Jerusalem', roles: ['Queen (regnant) of Jerusalem'],
    birth: { date: '1172', place: 'Kingdom of Jerusalem', note: 'Daughter of Amalric I and Maria Komnene; half-sister of Baldwin IV and Sibylla.' },
    death: { date: 'early 1205', place: 'Acre', note: 'Died at about thirty-three; her daughter Maria of Montferrat inherited.', circumstance: 'Four marriages, five reigning years of husbands murdered, fallen, or dead — the queen outlived them all by weeks.' },
    quickFacts: { realm: 'Kingdom of Jerusalem (Acre)', dynasty: 'House of Anjou-Rethel', culture: 'Frankish Outremer', knownFor: 'carrying the royal line through the kingdom\'s collapse and reconstruction at Acre' },
    isRuler: true,
    succession: { office: 'Queen of Jerusalem', predecessor: P('sibylla-of-jerusalem', 'Sibylla', 'Her half-sister, dead with her daughters in the siege camp at Acre in 1190'), successor: UN('Maria of Montferrat', 'Her daughter by Conrad, queen at thirteen under John of Brienne\'s later kingship') },
    overview: [
      'Isabella was the succession: when Sibylla died at Acre in 1190, every faction\'s road to the crown ran through Amalric I\'s younger daughter, and her marriages became the kingdom\'s constitutional history. Forced from her beloved first husband Humphrey of Toron by the barons (1190) to legitimise Conrad of Montferrat; widowed by the Assassins\' knives days after Conrad\'s election (1192); remarried within the week to Henry of Champagne for the same reasons of state; widowed again by a window\'s collapse (1197); and married last to Amalric of Lusignan, king of Cyprus.',
      'Through it all she was the reigning queen of a kingdom rebuilt at Acre by Richard\'s crusade — its Jerusalem lost, its politics a regency of husbands — and she transmitted the crown intact: through her daughters ran every later claim, from Brienne and Hohenstaufen to the kings of Cyprus.'
    ],
    contentSections: [
      { title: 'Overview', paragraphs: [
        'Isabella was the succession: when Sibylla died at Acre in 1190, every faction\'s road to the crown ran through Amalric I\'s younger daughter, and her marriages became the kingdom\'s constitutional history. Forced from her beloved first husband Humphrey of Toron by the barons (1190) to legitimise Conrad of Montferrat; widowed by the Assassins\' knives days after Conrad\'s election (1192); remarried within the week to Henry of Champagne for the same reasons of state; widowed again by a window\'s collapse (1197); and married last to Amalric of Lusignan, king of Cyprus.',
        'Through it all she was the reigning queen of a kingdom rebuilt at Acre by Richard\'s crusade — its Jerusalem lost, its politics a regency of husbands — and she transmitted the crown intact: through her daughters ran every later claim, from Brienne and Hohenstaufen to the kings of Cyprus.'
      ]},
      { title: 'Birth and early life', paragraphs: [
        'Born in 1172 to Amalric I and his Byzantine queen Maria Komnene, Isabella was raised at her mother\'s dower-town of Nablus, half-royal and half-Greek, at careful distance from the Courtenay faction around her half-siblings. At eight she was betrothed, at eleven married, to Humphrey IV of Toron — the wedding at Kerak celebrated, in one of the age\'s indelible scenes, while Saladin\'s siege engines battered the walls and the bridegroom\'s mother sent dishes from the feast out to the sultan.',
        'The succession crisis of 1186 first made her a piece on the board: the baronial opposition at Nablus proposed crowning Isabella and Humphrey against Sibylla and Guy — and Humphrey, horrified, slipped away to do homage to Guy, postponing her queenship by four years.'
      ]},
      { title: 'Character and Personality', paragraphs: [
        'The chroniclers agree on the beauty — the Lyon Eracles calls her one of the loveliest women of her time — and record, mostly in passing, the pliancy her situation enforced: eighteen years old, in love with Humphrey, she resisted the 1190 annulment until, the sources say, her formidable mother persuaded her where the barons\' lawyers could not, and thereafter she performed each dynastic remarriage within days of each widowhood. What she thought is nowhere recorded; queens who are successions incarnate rarely get to say.',
        'Flashes survive nonetheless: at Conrad\'s murder she barricaded herself in the Tyre citadel and — by the Muslim chronicler Ibn al-Athir\'s account — refused to yield the keys to anyone but Richard or her own next lawful husband: the succession, in her own person, holding a walled city. Her partnership with Henry of Champagne is the one the sources let warm slightly; five years, three daughters, and a court at Acre that briefly remembered gaiety.'
      ]},
      { title: 'Reign', paragraphs: [
        'Her queenship ran through proxies by law and war by circumstance: Conrad, king-elect for eight days, never crowned, murdered in a Tyre street by two Assassins (April 1192); Henry of Champagne, ruling as "lord of the kingdom" without coronation, managing the German crusade\'s gains (Beirut recovered) until the balcony at Acre gave way beneath him (September 1197); Amalric of Lusignan, crowned with her at Acre in January 1198, bringing Cyprus and its resources into the royal orbit and sealing the six-year truce of 1198 that let the rump kingdom breathe.',
        'The kingdom she presided over was the Third Crusade\'s creation: the coastal strip from Jaffa to Beirut, capital at Acre, Jerusalem itself Saladin\'s — a state of ports, truces, and Italian merchant quarters whose politics her marriages held together. She died at Acre early in 1205, within weeks of Amalric; the crown passed, clean and uncontested, to her thirteen-year-old daughter Maria of Montferrat.'
      ]},
      { title: 'Legacy', paragraphs: [
        'Isabella\'s biological legacy was the entire later succession: Maria of Montferrat carried the crown to John of Brienne and thence to Frederick II\'s house; Alice of Champagne married into Cyprus and regented Jerusalem; Melisende of Lusignan\'s line ran to the princes of Antioch. Every claimant to the title "king of Jerusalem" for the next six centuries — to the House of Savoy and beyond — descends from or through her.',
        'Historians have read her reign as the demonstration case of Outremer\'s constitutional paradox: a kingdom whose high court could unmake marriages and make kings, but only through the body of one woman. The queen who was never not queen — through four husbands, two murders-by-fate, and the loss of the holy city itself — kept the legal thread of the First Crusade\'s kingdom unbroken; it was not nothing, and it was hers.'
      ]}
    ],
    timeline: [
      { date: '1172', title: 'Born', description: 'Daughter of Amalric I and Maria Komnene.' },
      { date: 'November 1183', title: 'Married at Kerak', description: 'Weds Humphrey IV of Toron during Saladin\'s siege of the castle.' },
      { date: '1186', title: 'The Nablus alternative', description: 'The baronial party proposes her against Sibylla; Humphrey\'s defection ends it.' },
      { date: 'November 1190', title: 'The forced annulment', description: 'The barons dissolve her marriage to make her queen; Conrad of Montferrat weds her.' },
      { date: '28 April 1192', title: 'Conrad murdered', description: 'Assassins kill the king-elect; Isabella holds the Tyre citadel until remarried to Henry of Champagne.' },
      { date: '10 September 1197', title: 'Henry\'s fall', description: 'Champagne dies in the Acre window collapse; Amalric of Lusignan marries and crowns with her in January 1198.' },
      { date: 'early 1205', title: 'Dies at Acre', description: 'Outlives her fourth husband by weeks; Maria of Montferrat succeeds.' }
    ],
    relatedEntries: {
      people: [
        { title: 'Sibylla of Jerusalem', type: 'person', slug: 'sibylla-of-jerusalem', label: 'Half-sister and predecessor' },
        { title: 'Conrad of Montferrat', type: 'person', slug: 'conrad-of-montferrat', label: 'Second husband, murdered king-elect' },
        { title: 'Henry II of Champagne', type: 'person', slug: 'henry-ii-of-champagne', label: 'Third husband, lord of the kingdom' },
        { title: 'Amalric I', type: 'person', slug: 'amalric-i-of-jerusalem', label: 'Father' }
      ],
      locations: [],
      events: [ { title: 'Third Crusade', type: 'event', slug: 'third-crusade', label: 'The war that rebuilt the kingdom she carried' } ]
    },
    sources: [
      { title: 'Wikimedia Commons image record', author: 'Wikimedia Commons', type: 'image source', url: pg('Isabella_I_of_Jerusalem.jpeg') },
      { title: 'Isabella I of Jerusalem — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Isabella_I_of_Jerusalem' },
      { title: 'The Continuations of William of Tyre (Lyon Eracles)', author: 'Old French continuators', type: 'primary source', note: 'The principal narrative for the queenship and the four marriages.' }
    ]
  },
  {
    id: 'john-balliol', type: 'character', name: 'John Balliol', aliases: ['Toom Tabard', 'John de Balliol'],
    born: 1249, died: 1314, deathAge: 'about 65', causeOfDeath: 'Died in exile on his family estates in Picardy',
    restingPlace: 'Hélicourt, Picardy', location: 'Kingdom of Scotland',
    image: fp('John,_King_of_Scotland_(seal).png'),
    imageInfo: { caption: 'The great seal of John, king of Scots — a contemporary official image of his kingship.', creator: 'Scottish royal chancery', date: '1292–1296', source: 'Wikimedia Commons', sourceUrl: pg('John,_King_of_Scotland_(seal).png'), note: 'Contemporary sigillography; medieval seals are iconographic, not portraits.' },
    summary: 'John Balliol, chosen king of Scots in the Great Cause (1292), was stripped of his kingdom and his royal arms — "Toom Tabard", the empty coat — by Edward I in 1296, the humiliation that ignited the Wars of Independence.',
    title: 'king of Scots', roles: ['King of Scots'],
    birth: { date: 'c. 1249', place: 'Picardy or Barnard Castle', note: 'Heir of the great Anglo-Scottish Balliol inheritance and, through his mother Dervorguilla, of the Galloway lordship and royal blood.' },
    death: { date: 'late 1314', place: 'Hélicourt, Picardy', note: 'Died on his French estates in the year of Bannockburn.', circumstance: 'His son Edward Balliol would briefly revive the claim against the Bruces in the 1330s.' },
    quickFacts: { realm: 'Kingdom of Scotland', dynasty: 'House of Balliol', culture: 'Anglo-Scottish baronial', knownFor: 'the Great Cause, the humiliation of 1296, and the auld alliance treaty' },
    isRuler: true,
    succession: { office: 'King of Scots', predecessor: UN('Margaret, Maid of Norway', 'The child queen whose death at sea in 1290 emptied the throne and began the Great Cause'), successor: P('robert-the-bruce', 'Robert the Bruce', 'After ten kingless years of war and occupation, crowned at Scone in 1306') },
    overview: [
      'John Balliol won the Scottish crown in court: the Great Cause of 1291–92, the arbitration of thirteen claims that Edward I of England chaired on condition all parties acknowledged his overlordship. Balliol\'s descent — senior line from David I through his mother\'s house — was the best in law, and law duly crowned him at Scone in November 1292.',
      'The overlordship then swallowed the kingship: appeals from Scottish courts summoned to Westminster, the king of Scots called to answer like a defaulting baron, troops demanded for Edward\'s French war. The Scots answered with the French treaty of 1295 — the auld alliance\'s founding text — and Edward answered that with the sack of Berwick, Dunbar, and the ceremony at Montrose where Balliol\'s royal tabard was torn from him: Toom Tabard, the empty coat, and Scotland to be ruled as a land, not a realm.'
    ],
    contentSections: [
      { title: 'Overview', paragraphs: [
        'John Balliol won the Scottish crown in court: the Great Cause of 1291–92, the arbitration of thirteen claims that Edward I of England chaired on condition all parties acknowledged his overlordship. Balliol\'s descent — senior line from David I through his mother\'s house — was the best in law, and law duly crowned him at Scone in November 1292.',
        'The overlordship then swallowed the kingship: appeals from Scottish courts summoned to Westminster, the king of Scots called to answer like a defaulting baron, troops demanded for Edward\'s French war. The Scots answered with the French treaty of 1295 — the auld alliance\'s founding text — and Edward answered that with the sack of Berwick, Dunbar, and the ceremony at Montrose where Balliol\'s royal tabard was torn from him: Toom Tabard, the empty coat, and Scotland to be ruled as a land, not a realm.'
      ]},
      { title: 'Birth and early life', paragraphs: [
        'John was born about 1249, a younger son of the John Balliol who founded the Oxford college in penance and of Dervorguilla of Galloway, through whom came both the vast Celtic lordship and the royal descent from David I\'s eldest granddaughter. Brothers\' deaths made him heir to it all by 1278: estates in Picardy, England, and Scotland — a great cross-border baron of exactly the kind the coming wars would make impossible.',
        'Nothing in his career before 1290 suggested a throne; the Maid of Norway\'s death that October made his bloodline suddenly the kingdom\'s best title, with Robert Bruce the Competitor (grandfather of the king) his nearest and most violent rival.'
      ]},
      { title: 'Character and Personality', paragraphs: [
        'The Scottish chronicle tradition, written under the Bruces, needed Balliol to be nothing — a "toom tabard" in character as in ceremony — and mocked him as the lamb among wolves who dared not open his mouth. The record\'s facts are kinder and sadder: a middle-aged magnate of no military experience, competent in the parliamentary and legal business his brief reign actually transacted, crushed between a feudal superior of genius and ruthlessness and a Scottish community that organised its own resistance around, and finally instead of, him.',
        'The one unambiguous act of defiance — the 1295 French treaty and the renunciation of homage in April 1296, with its bitter recital of Edward\'s "harassments" — was the community\'s as much as the king\'s: a council of twelve had effectively taken the government from his hands to make the stand he had not. His seal, cut from its parchment at Montrose along with his arms from his coat, remains the emblem of sovereignty voided; whether any king could have carried that inheritance differently is the standing question in his defence.'
      ]},
      { title: 'Reign and fall', paragraphs: [
        'The reign\'s working record — four parliaments, ordinary justice, the absorption of the Western Isles\' administration — was overwritten from the first by the appeals crisis: Edward heard Scottish cases at Westminster (the Macduff case above all), summoned King John to answer personally, and in 1294 demanded Scottish service in Gascony. The magnates\' council of 1295 took control, sealed the French alliance, and mustered the host.',
        'The war of 1296 lasted a season: Berwick stormed with a massacre that stank in memory, the Scottish army shattered at Dunbar in April, and the surrender submitted through the summer — culminating at Montrose and Brechin in July, where Balliol resigned kingdom and homage, the arms were stripped from his tabard, and the Stone of Scone went south in Edward\'s baggage with the records of the realm. Three years in the Tower, papal custody at Cambrai, and from 1301 the quiet Picard exile at Hélicourt: he never saw Scotland again, and pointedly never joined the risings — Wallace\'s and Moray\'s of 1297 among them — fought in his name.'
      ]},
      { title: 'Legacy', paragraphs: [
        'The empty coat mattered more empty than worn: "King John\'s" name legitimised the community\'s resistance — Wallace was Guardian "in the name of the illustrious King John" — and the constitutional theory the wars produced, culminating at Arbroath in 1320, grew from the problem his fall posed: if the king failed the kingdom, where did the kingdom\'s sovereignty live? Scotland\'s answer — in the community of the realm — is Balliol\'s inadvertent monument.',
        'The dynastic afterlife was brief and bitter: his son Edward Balliol, crowned in the English-backed invasion of 1332, traded half the Lowlands to Edward III for his shadow-kingship and resigned the claim in 1356. The auld alliance signed under John outlasted them all — two and a half centuries of the French connection began as his reign\'s one defiant act.'
      ]}
    ],
    timeline: [
      { date: 'c. 1249', title: 'Born', description: 'Heir of Balliol and, through Dervorguilla of Galloway, of the senior royal descent.' },
      { date: 'October 1290', title: 'The throne empties', description: 'Margaret, Maid of Norway, dies at sea; the Great Cause begins under Edward I\'s arbitration.' },
      { date: '17 November 1292', title: 'Awarded the crown', description: 'Edward\'s court finds for Balliol\'s senior line; he is enthroned at Scone on St Andrew\'s Day.' },
      { date: '1293–1294', title: 'The appeals crisis', description: 'Scottish cases are summoned to Westminster and the king of Scots treated as a defaulting vassal.' },
      { date: 'October 1295', title: 'The French treaty', description: 'The council of twelve seals the alliance with Philip IV — the auld alliance\'s founding act.' },
      { date: 'April–July 1296', title: 'Dunbar and Toom Tabard', description: 'The army is destroyed at Dunbar; at Montrose the royal arms are stripped from his coat and the kingdom surrendered.' },
      { date: 'late 1314', title: 'Dies in Picardy', description: 'Dies at Hélicourt in the year of Bannockburn, the claim passing nominally to his son.' }
    ],
    relatedEntries: {
      people: [
        { title: 'Robert the Bruce', type: 'person', slug: 'robert-the-bruce', label: 'The eventual successor whose grandfather was his rival in the Great Cause' },
        { title: 'Edward I of England', type: 'person', slug: 'edward-i-of-england', label: 'Arbiter, overlord, and destroyer' },
        { title: 'William Wallace', type: 'person', slug: 'william-wallace', label: 'Guardian who fought in King John\'s name' },
        { title: 'John Comyn', type: 'person', slug: 'john-comyn', label: 'Nephew and leader of his party after 1296' }
      ],
      locations: [],
      events: [
        { title: 'Wars of Scottish Independence', type: 'event', slug: 'wars-of-scottish-independence', label: 'Ignited by his fall' },
        { title: 'Battle of Bannockburn', type: 'event', slug: 'battle-of-bannockburn', label: 'Fought the year he died' }
      ]
    },
    sources: [
      { title: 'Wikimedia Commons image record — great seal', author: 'Wikimedia Commons', type: 'image source', url: pg('John,_King_of_Scotland_(seal).png') },
      { title: 'John Balliol — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/John_Balliol' },
      { title: 'Robert Bruce and the Community of the Realm of Scotland', author: 'G. W. S. Barrow', type: 'book', note: 'The classic study framing Balliol\'s reign and the wars that followed.' }
    ]
  },
  {
    id: 'david-ii-of-scotland', type: 'character', name: 'David II of Scotland', aliases: ['David Bruce'],
    born: 1324, died: 1371, deathAge: '46', causeOfDeath: 'Died suddenly at Edinburgh Castle, apparently of natural causes',
    restingPlace: 'Holyrood Abbey', location: 'Kingdom of Scotland',
    image: fp('Scotland_penny_802002_(obverse).jpg'),
    imageInfo: { caption: 'Silver penny of David II — coinage struck in his own reign, the nearest contemporary image of the king.', creator: 'Scottish royal mint', date: '14th century', source: 'Wikimedia Commons', sourceUrl: pg('Scotland_penny_802002_(obverse).jpg'), note: 'A contemporary object; the crowned bust is iconographic, not a portrait.' },
    summary: 'David II (1329–1371), Bruce\'s son, was crowned at five, exiled at ten, captured at Neville\'s Cross at twenty-two — and returned from eleven years\' captivity to rule, against every expectation, as one of medieval Scotland\'s most effective kings.',
    title: 'king of Scots', roles: ['King of Scots'],
    birth: { date: '5 March 1324', place: 'Dunfermline Abbey', note: 'Son of Robert the Bruce and Elizabeth de Burgh, born when his father was nearly fifty.' },
    death: { date: '22 February 1371', place: 'Edinburgh Castle', note: 'Died childless despite three marriages; the Stewarts succeeded.', circumstance: 'His nephew Robert Stewart, the lieutenant he had repeatedly outmanoeuvred, became Robert II — the first Stewart king.' },
    quickFacts: { realm: 'Kingdom of Scotland', dynasty: 'House of Bruce', culture: 'Scottish', knownFor: 'Neville\'s Cross, the long captivity, and the shrewd late reign' },
    isRuler: true,
    succession: { office: 'King of Scots', predecessor: P('robert-the-bruce', 'Robert the Bruce', 'His father, dead when David was five'), successor: UN('Robert II', 'His nephew Robert Stewart, first king of the House of Stewart') },
    overview: [
      'David II\'s reign was framed by his father\'s unfinished business: crowned at five (the first Scots king anointed with papal blessing — Bruce\'s diplomatic legacy), he was evacuated to France at ten when Edward Balliol and the Disinherited overran the kingdom, and returned at seventeen to lead it — straight into the disaster at Neville\'s Cross (1346), where, honouring the French alliance after Crécy, he was wounded by two arrows and captured.',
      'Eleven years an honoured prisoner, ransomed in 1357 for 100,000 marks, he then confounded the story written for him: the ransom\'s tax machinery rebuilt crown finance, the over-mighty Stewarts were faced down, castles and customs came back under royal hands, and the ransom itself was diplomatically stalled until his sudden death in 1371 — childless, which was the one failure that mattered dynastically.'
    ],
    contentSections: [
      { title: 'Overview', paragraphs: [
        'David II\'s reign was framed by his father\'s unfinished business: crowned at five (the first Scots king anointed with papal blessing — Bruce\'s diplomatic legacy), he was evacuated to France at ten when Edward Balliol and the Disinherited overran the kingdom, and returned at seventeen to lead it — straight into the disaster at Neville\'s Cross (1346), where, honouring the French alliance after Crécy, he was wounded by two arrows and captured.',
        'Eleven years an honoured prisoner, ransomed in 1357 for 100,000 marks, he then confounded the story written for him: the ransom\'s tax machinery rebuilt crown finance, the over-mighty Stewarts were faced down, castles and customs came back under royal hands, and the ransom itself was diplomatically stalled until his sudden death in 1371 — childless, which was the one failure that mattered dynastically.'
      ]},
      { title: 'Birth and early life', paragraphs: [
        'Born at Dunfermline in 1324 to the ageing Bruce and Elizabeth de Burgh, David was married at four — to Joan of the Tower, Edward III\'s seven-year-old sister, under the treaty of Edinburgh-Northampton — and king at five when his father died in 1329. The peace died almost as fast: Edward Balliol\'s invasion and Dupplin Moor (1332), Halidon Hill (1333), and the child king and queen were shipped to Château Gaillard in 1334 for seven years\' French refuge.',
        'He came home in 1341 to a kingdom the Guardians — Moray, the young Robert Stewart, Douglas of Liddesdale — had clawed back fortress by fortress, and took up personal rule at seventeen with border raiding already habitual.'
      ]},
      { title: 'Character and Personality', paragraphs: [
        'The chronicle tradition — Bower and Wyntoun, writing under the Stewarts his policy had slighted — handed down a wastrel: extravagant, uxorious (the Margaret Logie marriage scandalised them), soft on England, unworthy of his father. Twentieth-century record scholarship reversed the portrait almost completely: the exchequer rolls show a king who tripled ordinary revenue, ran the toughest parliaments of the century, and made the crown feared in the localities as it had not been since Bruce.',
        'The personal courage was never in question — at Neville\'s Cross he fought on with an arrowhead lodged in his face and knocked out the teeth of his captor — and the political nerve matched it: the notorious "Plantagenet succession" proposals he dangled before Edward III (a Plantagenet prince to succeed him, failing heirs) are now generally read as calculated ransom-diplomacy, trading a phantom to defer six-figure instalments, with parliament reliably staged to refuse. The failure the record cannot rehabilitate is the marriage-bed: three wives, one divorce pursued to Avignon, and no heir — the gap through which the Stewarts entered.'
      ]},
      { title: 'Reign', paragraphs: [
        'The captivity years (1346–1357) hollowed the kingdom — Balliol ceded the southern shires outright to Edward III in 1356, the year of the Burnt Candlemas devastation — while Robert Stewart, lieutenant and heir-presumptive, governed comfortably and negotiated his uncle\'s release without urgency. The treaty of Berwick (October 1357) priced the king at 100,000 marks over ten years.',
        'The restored king governed like a man repossessing his house: customs rates quadrupled and collection centralised; the great earldoms escheated or redirected as they fell in; the Steward\'s sons imprisoned and the Steward himself forced to reseal his allegiance after the abortive magnate confrontation of 1363; Edinburgh built up — David\'s Tower rising over the castle — as something like a capital. Payments on the ransom, suspended more often than made, had transferred barely a third of the price when king and obligation quietly expired together.'
      ]},
      { title: 'Death and legacy', paragraphs: [
        'David died suddenly in Edinburgh Castle on 22 February 1371, a month short of forty-seven, planning a third marriage that might yet have disinherited the Stewarts; Robert II was crowned at Scone within the month, the Bruce dynasty ending after two kings — the hero and the son written out of the hero\'s story.',
        'Modern verdicts run with the records: the unlucky king was among the ablest administrators to hold the medieval Scottish crown, and the monarchy the early Stewarts let slacken was one he had wound tight. His true memorial is negative and considerable — the kingdom his father freed did not, despite Neville\'s Cross, eleven years\' captivity, and a ransom designed to cripple it, slip back under English lordship.'
      ]}
    ],
    timeline: [
      { date: '5 March 1324', title: 'Born at Dunfermline', description: 'Son of Robert the Bruce and Elizabeth de Burgh.' },
      { date: 'November 1331', title: 'Crowned and anointed', description: 'The first Scottish coronation with papal unction, aged seven.' },
      { date: '1334–1341', title: 'French exile', description: 'Sheltered at Château Gaillard while the Guardians fight Balliol and Edward III.' },
      { date: '17 October 1346', title: 'Neville\'s Cross', description: 'Invading for France after Crécy, he is wounded and captured; eleven years\' captivity follow.' },
      { date: 'October 1357', title: 'Treaty of Berwick', description: 'Ransomed for 100,000 marks; the fiscal reconstruction begins.' },
      { date: '1363', title: 'Faces down the magnates', description: 'The Steward\'s confrontation collapses; royal authority is reasserted.' },
      { date: '22 February 1371', title: 'Dies at Edinburgh', description: 'Childless; Robert II begins the Stewart line.' }
    ],
    relatedEntries: {
      people: [
        { title: 'Robert the Bruce', type: 'person', slug: 'robert-the-bruce', label: 'Father' },
        { title: 'Edward III of England', type: 'person', slug: 'edward-iii-of-england', label: 'Brother-in-law, captor, and ransom counterparty' },
        { title: 'John Balliol', type: 'person', slug: 'john-balliol', label: 'Whose son\'s claim shadowed his minority' }
      ],
      locations: [],
      events: [
        { title: 'Wars of Scottish Independence', type: 'event', slug: 'wars-of-scottish-independence', label: 'The war he inherited as a child' },
        { title: 'Treaty of Edinburgh-Northampton', type: 'event', slug: 'treaty-of-edinburgh-northampton', label: 'Sealed by his infant marriage' },
        { title: 'Battle of Bannockburn', type: 'event', slug: 'battle-of-bannockburn', label: 'His father\'s victory, his inheritance\'s foundation' }
      ]
    },
    sources: [
      { title: 'Wikimedia Commons image record — penny of David II', author: 'Wikimedia Commons', type: 'image source', url: pg('Scotland_penny_802002_(obverse).jpg') },
      { title: 'David II of Scotland — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/David_II_of_Scotland' },
      { title: 'David II, 1329–71', author: 'Michael Penman', type: 'book', note: 'The standard modern biography, built on the exchequer records.' }
    ]
  }
]

const ids = new Set(data.characters.map((c) => c.id))
let added = 0
for (const p of people) {
  if (ids.has(p.id)) { console.log(`skip (exists): ${p.id}`); continue }
  data.characters.push(p)
  added++
}
fs.writeFileSync(dataPath, JSON.stringify(data, null, 2) + '\n')
console.log(`Added ${added} rulers (of ${people.length}).`)
