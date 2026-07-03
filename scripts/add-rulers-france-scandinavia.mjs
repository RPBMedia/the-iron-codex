// Batch 2: French (5) and Scandinavian (5) rulers needed as succession links.
import fs from 'node:fs'

const dataPath = new URL('../server/data/history.json', import.meta.url)
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'))
const fp = (n) => `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(n)}`
const pg = (n) => `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(n)}`
const P = (personSlug, displayName, note) => ({ personSlug, displayName, ...(note ? { note } : {}) })
const UN = (displayName, note) => ({ displayName, ...(note ? { note } : {}) })

const people = [
  // ── FRANCE ──────────────────────────────────────────────────────────────
  {
    id: 'louis-vi-of-france', type: 'character', name: 'Louis VI of France', aliases: ['Louis the Fat', 'Louis le Gros'],
    born: 1081, died: 1137, deathAge: '55', causeOfDeath: 'Dysentery, at Béthisy-Saint-Pierre',
    restingPlace: 'Basilica of Saint-Denis', location: 'Kingdom of France',
    image: fp('Louis_VI_le_Gros.jpg'),
    imageInfo: { caption: 'Louis VI in a miniature from the Grandes Chroniques de France, fourteenth century.', creator: 'Unknown illuminator', date: '14th century', source: 'Grandes Chroniques de France — via Wikimedia Commons', sourceUrl: pg('Louis_VI_le_Gros.jpg'), note: 'A later medieval imagined portrait; no contemporary likeness survives.' },
    summary: 'Louis VI "the Fat" (1108–1137) spent thirty years hammering the robber barons of the Île-de-France into obedience, making the Capetian king master of his own domain for the first time.',
    title: 'king of France', roles: ['King of France'],
    birth: { date: 'late 1081', place: 'Paris', note: 'Son of Philip I and Bertha of Holland.' },
    death: { date: '1 August 1137', place: 'Béthisy-Saint-Pierre', note: 'Died days after sealing the marriage of his heir to Eleanor of Aquitaine.', circumstance: 'Too corpulent to mount a horse in his last years, he died campaigning in mind if not in body, and was buried at Saint-Denis.' },
    quickFacts: { realm: 'Kingdom of France', dynasty: 'House of Capet', culture: 'French', knownFor: 'subduing the castellans of the royal domain and reviving Capetian kingship' },
    isRuler: true,
    succession: { office: 'King of France', predecessor: UN('Philip I of France', 'His father, whose long reign had let royal authority decay'), successor: P('louis-vii-of-france', 'Louis VII of France', 'His son, newly married to Eleanor of Aquitaine') },
    overview: [
      'Louis VI inherited a kingship whose writ barely ran beyond Paris and Orléans: robber lords like Hugh of Le Puiset and Thomas of Marle taxed pilgrims and merchants from their towers within sight of royal cities. His answer was twenty-five years of small, grinding sieges that levelled the towers and hanged the lords.',
      'That domestic work — narrated with devotion by his minister Abbot Suger of Saint-Denis — turned the Capetian domain into the strongest compact lordship in France, and the marriage he arranged on his deathbed, his son Louis to Eleanor of Aquitaine, briefly promised to attach the whole south to it.'
    ],
    contentSections: [
      { title: 'Overview', paragraphs: [
        'Louis VI inherited a kingship whose writ barely ran beyond Paris and Orléans: robber lords like Hugh of Le Puiset and Thomas of Marle taxed pilgrims and merchants from their towers within sight of royal cities. His answer was twenty-five years of small, grinding sieges that levelled the towers and hanged the lords.',
        'That domestic work — narrated with devotion by his minister Abbot Suger of Saint-Denis — turned the Capetian domain into the strongest compact lordship in France, and the marriage he arranged on his deathbed, his son Louis to Eleanor of Aquitaine, briefly promised to attach the whole south to it.'
      ]},
      { title: 'Birth and early life', paragraphs: [
        'Louis was born in Paris in 1081 to Philip I. His father\'s scandalous later years — excommunicated for abducting and "marrying" Bertrade de Montfort — left the young Louis running the kingdom\'s defence from his teens, fighting William Rufus in the Vexin before he was twenty.',
        'Associated in government long before his father died in 1108, he was consecrated at Orléans in haste — the roads to Reims were unsafe, which was itself a summary of the realm he inherited.'
      ]},
      { title: 'Character and Personality', paragraphs: [
        'Suger, who had known him since they were schoolboys together at Saint-Denis, drew the enduring portrait: cheerful, accessible, physically enormous — by forty so fat that mounting a horse required effort, hence the nickname he wore without apparent resentment — and tirelessly, personally warlike. This was a king who led escalades himself and whom the chronicler shows fighting in the fords of the Epte.',
        'His justice had a demonstrative theatricality his subjects understood: oath-breaking castellans saw their keeps slighted and their prisoners freed, and the worst of them, Thomas of Marle, was run down and mortally wounded in the king\'s own campaign of 1130. Churchmen forgave the appetite and the temper because the peace of the roads — the peasant\'s, merchant\'s, and pilgrim\'s peace — was visibly his work.'
      ]},
      { title: 'Reign', paragraphs: [
        'The wars of the domain filled two decades: Le Puiset taken and retaken three times, Crécy-sur-Serre and Coucy humbled, the Montlhéry ring around Paris broken up by siege and marriage. Beyond the domain he fought Henry I of England over the Vexin and the Norman border — beaten at Brémule in 1119, but never dislodged — and championed his ally William Clito\'s claim to Normandy.',
        'In 1124, when Emperor Henry V invaded Champagne, Louis raised the oriflamme from the altar of Saint-Denis and summoned the host of the realm; the great vassals — Champagne, Blois, Burgundy, even Aquitaine — actually came, and the emperor withdrew without battle. It was the first time in living memory that the king of France had commanded France, and contemporaries grasped the significance. His last stroke was dynastic: when Duke William X of Aquitaine died in 1137, his heiress Eleanor was married to the king\'s son within three months.'
      ]},
      { title: 'Death and legacy', paragraphs: [
        'Louis died of dysentery on 1 August 1137, a week after the Bordeaux wedding, and was buried at Saint-Denis. Suger\'s biography made him the model of the good Capetian: the king as guarantor of peace, protector of churches, and hammer of tyrants.',
        'The institutional legacy outlasted the somewhat romanticised memory. A pacified, profitable royal domain became the platform from which his grandson Philip Augustus conquered Normandy and Anjou; the alliance of crown and church, sealed at Saint-Denis, became the Capetian formula for three centuries.'
      ]}
    ],
    timeline: [
      { date: '1081', title: 'Born in Paris', description: 'Son of Philip I of France and Bertha of Holland.' },
      { date: '1108', title: 'Crowned at Orléans', description: 'Consecrated in haste because the road to Reims was held by hostile lords.' },
      { date: '1111–1118', title: 'Wars of the domain', description: 'Reduces Hugh of Le Puiset and the castellans strangling the roads around Paris.' },
      { date: '20 August 1119', title: 'Defeated at Brémule', description: 'Henry I of England beats the French knights in the Vexin; Louis keeps the border regardless.' },
      { date: '1124', title: 'Raises the oriflamme', description: 'The host of France assembles at Reims against Emperor Henry V, who retreats without battle.' },
      { date: 'July 1137', title: 'The Aquitaine marriage', description: 'Marries his heir Louis to Eleanor, heiress of Aquitaine, uniting north and south in prospect.' },
      { date: '1 August 1137', title: 'Dies', description: 'Dies of dysentery at Béthisy; buried at Saint-Denis.' }
    ],
    relatedEntries: {
      people: [
        { title: 'Louis VII of France', type: 'person', slug: 'louis-vii-of-france', label: 'Son and successor' },
        { title: 'Eleanor of Aquitaine', type: 'person', slug: 'eleanor-of-aquitaine', label: 'The heiress he secured for his son' }
      ],
      locations: [ { title: 'Kingdom of France', type: 'location', slug: 'kingdom-of-france' }, { title: 'Paris', type: 'location', slug: 'paris', label: 'Heart of the domain he pacified' } ],
      events: []
    },
    sources: [
      { title: 'Wikimedia Commons image record', author: 'Wikimedia Commons', type: 'image source', url: pg('Louis_VI_le_Gros.jpg') },
      { title: 'Louis VI of France — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Louis_VI_of_France' },
      { title: 'Suger, The Deeds of Louis the Fat (Vita Ludovici Grossi)', author: 'Abbot Suger of Saint-Denis', type: 'primary source', note: 'Contemporary biography by the king\'s minister and friend.' }
    ]
  },
  {
    id: 'louis-viii-of-france', type: 'character', name: 'Louis VIII of France', aliases: ['Louis the Lion'],
    born: 1187, died: 1226, deathAge: '39', causeOfDeath: 'Dysentery, returning from the Albigensian crusade',
    restingPlace: 'Basilica of Saint-Denis', location: 'Kingdom of France',
    image: fp('Louis_VIII_le_Lion.jpg'),
    imageInfo: { caption: 'Louis VIII in a miniature from the Grandes Chroniques de France tradition.', creator: 'Unknown illuminator', date: 'later medieval', source: 'Wikimedia Commons', sourceUrl: pg('Louis_VIII_le_Lion.jpg'), note: 'A later medieval imagined portrait, not a likeness from life.' },
    summary: 'Louis VIII "the Lion" — invader of England in 1216–17, victor of Poitou and Languedoc — reigned only three years (1223–1226) but attached the south to the French crown before dying on the road home.',
    title: 'king of France', roles: ['King of France'],
    birth: { date: '5 September 1187', place: 'Paris', note: 'Son of Philip II Augustus and Isabella of Hainault.' },
    death: { date: '8 November 1226', place: 'Montpensier, Auvergne', note: 'Died of dysentery returning from the siege of Avignon.', circumstance: 'Left a twelve-year-old heir under the formidable regency of his widow Blanche of Castile.' },
    quickFacts: { realm: 'Kingdom of France', dynasty: 'House of Capet', culture: 'French', knownFor: 'the invasion of England and the royal takeover of the Albigensian crusade' },
    isRuler: true,
    succession: { office: 'King of France', predecessor: P('philip-ii-of-france', 'Philip II Augustus', 'His father, victor of Bouvines'), successor: P('louis-ix-of-france', 'Louis IX', 'His son, aged twelve, under Blanche of Castile\'s regency') },
    overview: [
      'Louis was a crowned king for only three years, but he had been the sword of Capetian France for fifteen before that: victor of La Roche-aux-Moines against King John in 1214, claimant-invader of England in 1216–17 at the Magna Carta barons\' invitation, and conqueror of Poitou in 1224.',
      'As king he turned the stalled Albigensian crusade into a royal enterprise, marching south in 1226 to receive the submissions of Languedoc. Dysentery killed him on the way home; the south, and the future Mediterranean France, stayed won.'
    ],
    contentSections: [
      { title: 'Overview', paragraphs: [
        'Louis was a crowned king for only three years, but he had been the sword of Capetian France for fifteen before that: victor of La Roche-aux-Moines against King John in 1214, claimant-invader of England in 1216–17 at the Magna Carta barons\' invitation, and conqueror of Poitou in 1224.',
        'As king he turned the stalled Albigensian crusade into a royal enterprise, marching south in 1226 to receive the submissions of Languedoc. Dysentery killed him on the way home; the south, and the future Mediterranean France, stayed won.'
      ]},
      { title: 'Birth and early life', paragraphs: [
        'Born in 1187 to Philip Augustus and the quickly-dead Isabella of Hainault, Louis grew up in the shadow of a father who never let him near power but used him constantly as an instrument. Married at twelve to Blanche of Castile — a granddaughter of Henry II of England, which mattered — he commanded armies from his mid-twenties.',
        'In 1214, while his father faced the imperial coalition at Bouvines, Louis held the southern front, routing King John\'s army at La Roche-aux-Moines. Two years later the English barons at war with John offered him the crown through Blanche\'s lineage, and Louis ruled half of England for a year — until John\'s death dissolved the rebellion, and defeats at Lincoln and the naval fight off Sandwich ended the adventure with the face-saving treaty of Lambeth in 1217.'
      ]},
      { title: 'Character and Personality', paragraphs: [
        'Chroniclers called him "the Lion" for conduct in the field, and the surviving descriptions insist on the contrast with his corpulent grandfather and calculating father: slight, pale, austere, and pious, with his energy banked in willpower rather than physique. William the Breton, the court chronicler, presents a prince of scrupulous — sometimes rigid — honour, who kept terms even with the Albigensian towns that surrendered promptly.',
        'His marriage to Blanche of Castile was, unusually for the age, both faithful and a working political partnership; contemporaries noted that no mistress or bastard is recorded of him, and the trust he placed in Blanche\'s capacity was vindicated by the regency that saved his son\'s crown. The severity had another face: at Marmande in 1219, during the southern crusade, the massacre that followed the town\'s fall stained his record in the south\'s memory.'
      ]},
      { title: 'Reign', paragraphs: [
        'Crowned in 1223, Louis refused to renew his father\'s truce with England and struck at once into Poitou, taking Niort, Saint-Jean-d\'Angély, and La Rochelle in 1224 — stripping the Plantagenets of everything north of Gascony and completing the work of 1204.',
        'The great enterprise was the south. The Albigensian crusade, begun in 1209, had exhausted its private leadership; Louis, who had twice campaigned there as prince, took the cross as king in 1226. The march down the Rhône broke resistance by reputation alone — town after town submitted — until Avignon, which resisted a three-month siege before yielding. Languedoc\'s submission created the royal administration of the south, sealed three years later in his son\'s name by the treaty of Paris of 1229.'
      ]},
      { title: 'Death and legacy', paragraphs: [
        'Louis contracted dysentery on the return march and died at Montpensier in the Auvergne on 8 November 1226, aged thirty-nine. Rumour blamed poison or, in one strand, the consequences of refusing a lady procured to cure him — a story his sanctified reputation attracted rather than earned. He was buried at Saint-Denis.',
        'His testament shaped the century: the crown to Louis IX under Blanche\'s regency, and appanages for the younger sons — including Anjou for the youngest, Charles, whose Mediterranean empire would grow from that grant. The three-year reign\'s real monument is the map: after Louis VIII, the king of France ruled from the Channel to the Mediterranean.'
      ]}
    ],
    timeline: [
      { date: '5 September 1187', title: 'Born in Paris', description: 'Son of Philip II Augustus and Isabella of Hainault.' },
      { date: '1200', title: 'Marries Blanche of Castile', description: 'The match carries a claim to the English succession through her Plantagenet mother.' },
      { date: '2 July 1214', title: 'La Roche-aux-Moines', description: 'Routs King John\'s army in Anjou while his father wins Bouvines in the north.' },
      { date: '1216–1217', title: 'Invades England', description: 'Proclaimed king in London by the rebel barons; the cause dies with John, and Lincoln and Sandwich end it.' },
      { date: '1224', title: 'Conquers Poitou', description: 'Takes La Rochelle and drives the Plantagenets back to Gascony.' },
      { date: 'June–September 1226', title: 'Royal Albigensian crusade', description: 'Marches south as king; Avignon falls after three months and Languedoc submits.' },
      { date: '8 November 1226', title: 'Dies at Montpensier', description: 'Dysentery kills him on the road home; Blanche of Castile takes the regency.' }
    ],
    relatedEntries: {
      people: [
        { title: 'Philip II of France', type: 'person', slug: 'philip-ii-of-france', label: 'Father and predecessor' },
        { title: 'Louis IX of France', type: 'person', slug: 'louis-ix-of-france', label: 'Son and successor' },
        { title: 'John of England', type: 'person', slug: 'john-of-england', label: 'The enemy whose crown he nearly took' }
      ],
      locations: [ { title: 'Kingdom of France', type: 'location', slug: 'kingdom-of-france' }, { title: 'Kingdom of England', type: 'location', slug: 'kingdom-of-england', label: 'Ruled half of it, briefly, in 1216–17' } ],
      events: [ { title: 'Battle of Bouvines', type: 'event', slug: 'battle-of-bouvines', label: 'The northern half of the 1214 campaign he fought in the south' } ]
    },
    sources: [
      { title: 'Wikimedia Commons image record', author: 'Wikimedia Commons', type: 'image source', url: pg('Louis_VIII_le_Lion.jpg') },
      { title: 'Louis VIII of France — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Louis_VIII_of_France' },
      { title: 'The Capetians: Kings of France 987–1328', author: 'Jim Bradbury', type: 'book', note: 'Covers Louis VIII\'s campaigns and short reign in dynastic context.' }
    ]
  },
  {
    id: 'philip-iii-of-france', type: 'character', name: 'Philip III of France', aliases: ['Philip the Bold', 'Philippe le Hardi'],
    born: 1245, died: 1285, deathAge: '40', causeOfDeath: 'Dysentery, retreating from the Aragonese crusade',
    restingPlace: 'Basilica of Saint-Denis', location: 'Kingdom of France',
    image: fp('Philip_III_of_France.jpg'),
    imageInfo: { caption: 'Philip III of France in a later medieval depiction.', creator: 'Unknown artist', date: 'later medieval', source: 'Wikimedia Commons', sourceUrl: pg('Philip_III_of_France.jpg'), note: 'A posthumous imagined likeness.' },
    summary: 'Philip III "the Bold" (1270–1285), proclaimed king in the crusader camp at Tunis, absorbed the county of Toulouse into the royal domain and died on the disastrous crusade against Aragon.',
    title: 'king of France', roles: ['King of France'],
    birth: { date: '1 May 1245', place: 'Poissy', note: 'Second son of Louis IX and Margaret of Provence; heir from his brother Louis\'s death in 1260.' },
    death: { date: '5 October 1285', place: 'Perpignan', note: 'Died of dysentery in the retreat from Girona.', circumstance: 'The failed "Aragonese crusade" against Peter III ended with the army decimated by disease and the king dead at Perpignan.' },
    quickFacts: { realm: 'Kingdom of France', dynasty: 'House of Capet', culture: 'French', knownFor: 'annexing Toulouse and the catastrophic Aragonese crusade' },
    isRuler: true,
    succession: { office: 'King of France', predecessor: P('louis-ix-of-france', 'Louis IX', 'His father, who died before Tunis'), successor: UN('Philip IV the Fair', 'His son, who abandoned the Aragonese war at once') },
    overview: [
      'Philip III has the historical misfortune of standing between the saint and the iron king — son of Louis IX, father of Philip IV. Diffident and devout, he was proclaimed king beside his father\'s deathbed at Tunis in 1270 and brought five royal coffins home from that plague-ridden crusade.',
      'His reign\'s solid gain was enormous: the death of his uncle Alphonse of Poitiers in 1271 brought Toulouse, Poitou, and the Auvergne into the royal domain, carrying the crown\'s direct rule to the Mediterranean. Its ruin was the papally-sponsored crusade against Aragon after the Sicilian Vespers, which killed him and nearly wrecked the army of France.'
    ],
    contentSections: [
      { title: 'Overview', paragraphs: [
        'Philip III has the historical misfortune of standing between the saint and the iron king — son of Louis IX, father of Philip IV. Diffident and devout, he was proclaimed king beside his father\'s deathbed at Tunis in 1270 and brought five royal coffins home from that plague-ridden crusade.',
        'His reign\'s solid gain was enormous: the death of his uncle Alphonse of Poitiers in 1271 brought Toulouse, Poitou, and the Auvergne into the royal domain, carrying the crown\'s direct rule to the Mediterranean. Its ruin was the papally-sponsored crusade against Aragon after the Sicilian Vespers, which killed him and nearly wrecked the army of France.'
      ]},
      { title: 'Birth and early life', paragraphs: [
        'Born at Poissy in 1245, Philip became heir at fifteen on his elder brother\'s death and grew up under the most demanding royal father in Christendom, whose written Enseignements to his son survive: rule justly, avoid war with Christians, love God before all.',
        'He accompanied Louis IX on the Tunis crusade of 1270 and watched dysentery kill his brother-in-law, his father, and — on the terrible journey home — his own young wife and their newborn. He entered Paris in 1271 escorting a procession of coffins, and was crowned at Reims that August.'
      ]},
      { title: 'Character and Personality', paragraphs: [
        'The nickname "le Hardi" — the Bold — honoured his personal conduct at arms, notably in the Foix campaign of 1272; nothing in his statecraft matched it. Contemporaries and the chronicle tradition agree on a gentle, pious, suggestible king, dominated in turn by his chamberlain Pierre de La Broce and by his forceful second queen, Marie of Brabant — when La Broce was hanged in 1278 after accusing the queen of poisoning Philip\'s heir, observers read it as the change of masters it was.',
        'His confessor\'s and the abbey records\' picture is of the good son overawed by a canonised father: scrupulous in devotion, faithful in the domain administration he inherited, and dangerously dependent on counsel. The decision that killed him — accepting the pope\'s offer of the Aragonese crown for his son against every strategic sense — was pressed on him by his uncle Charles of Anjou and the queen\'s faction over the objection of the ablest men at court.'
      ]},
      { title: 'Reign', paragraphs: [
        'The reign\'s permanent achievement came by inheritance law rather than war: when Alphonse of Poitiers and Joan of Toulouse died childless in 1271, their vast appanage — Poitou, the Auvergne, and the county of Toulouse with all Languedoc — reverted to the crown. Royal seneschals moved into Toulouse, and the treaty-work of his grandfather and father in the south was consummated. Navarre, too, came into the family orbit through the marriage of the heiress Joan to his son Philip in 1284.',
        'The catastrophe grew from his uncle\'s empire. When the Sicilian Vespers (1282) threw Charles of Anjou\'s island kingdom to Peter III of Aragon, the French pope Martin IV excommunicated Peter, declared his crown forfeit, and bestowed Aragon on Philip\'s younger son Charles of Valois. The resulting "crusade" of 1285 took Girona after a hard siege while the Aragonese admiral Roger of Lauria destroyed the French fleet at Les Formigues; supply failed, dysentery swept the army, and the retreat over the Pyrenees became a running disaster. Philip, carried in a litter, died at Perpignan on 5 October 1285.'
      ]},
      { title: 'Death and legacy', paragraphs: [
        'His bones went to Saint-Denis, his flesh — boiled from them in the fashion of distant royal deaths — to Narbonne. His son Philip IV, who had opposed the war, liquidated it immediately and drew from the fiasco the lesson that governed his own reign: never again would the French crown lend its army to papal projects; popes would instead learn to reckon with France.',
        'Between Toulouse absorbed and Navarre acquired, Philip III enlarged the effective kingdom more than many abler kings — a reminder, historians have observed, that Capetian success was built as much on inheritance, marriage, and patience as on genius.'
      ]}
    ],
    timeline: [
      { date: '1 May 1245', title: 'Born at Poissy', description: 'Second son of Louis IX; heir after his brother\'s death in 1260.' },
      { date: '25 August 1270', title: 'Proclaimed king at Tunis', description: 'Succeeds on his father\'s death in the crusader camp before Tunis.' },
      { date: '1271', title: 'Toulouse reverts to the crown', description: 'The deaths of Alphonse of Poitiers and Joan of Toulouse bring Languedoc, Poitou, and Auvergne into the royal domain.' },
      { date: '1278', title: 'Fall of Pierre de La Broce', description: 'The favourite is hanged at Montfaucon as court factions change hands.' },
      { date: '1284', title: 'Navarre marriage', description: 'His heir Philip marries Joan of Navarre, attaching her kingdom and Champagne to the crown\'s future.' },
      { date: '1285', title: 'The Aragonese crusade', description: 'Invades Catalonia for the papal grant of Aragon; Girona falls but the fleet is destroyed and disease breaks the army.' },
      { date: '5 October 1285', title: 'Dies at Perpignan', description: 'Dies of dysentery in the retreat; Philip IV abandons the enterprise.' }
    ],
    relatedEntries: {
      people: [
        { title: 'Louis IX of France', type: 'person', slug: 'louis-ix-of-france', label: 'Father and predecessor' },
        { title: 'Charles of Anjou', type: 'person', slug: 'charles-of-anjou', label: 'Uncle, whose Sicilian empire dragged France into the Aragonese war' },
        { title: 'Philip II of France', type: 'person', slug: 'philip-ii-of-france', label: 'Great-grandfather whose domain-building his inheritance completed' }
      ],
      locations: [ { title: 'Kingdom of France', type: 'location', slug: 'kingdom-of-france' } ],
      events: []
    },
    sources: [
      { title: 'Wikimedia Commons image record', author: 'Wikimedia Commons', type: 'image source', url: pg('Philip_III_of_France.jpg') },
      { title: 'Philip III of France — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Philip_III_of_France' },
      { title: 'The Capetians: Kings of France 987–1328', author: 'Jim Bradbury', type: 'book', note: 'Standard dynastic survey covering the reign.' }
    ]
  },
  {
    id: 'charles-iv-of-france', type: 'character', name: 'Charles IV of France', aliases: ['Charles the Fair', 'Charles le Bel'],
    born: 1294, died: 1328, deathAge: '33', causeOfDeath: 'Illness at Vincennes; the sources name no specific disease',
    restingPlace: 'Basilica of Saint-Denis', location: 'Kingdom of France',
    image: fp('Charles4_mini.jpg'),
    imageInfo: { caption: 'Charles IV of France in a medieval miniature.', creator: 'Unknown illuminator', date: 'medieval', source: 'Wikimedia Commons', sourceUrl: pg('Charles4_mini.jpg'), note: 'A manuscript image in the royal iconographic tradition rather than a portrait from life.' },
    summary: 'Charles IV "the Fair" (1322–1328), last Capetian king of the direct line, humbled England in the War of Saint-Sardos and died leaving no son — the vacancy that opened the Hundred Years\' War.',
    title: 'king of France', roles: ['King of France', 'King of Navarre'],
    birth: { date: '18/19 June 1294', place: 'Clermont (Oise)', note: 'Third son of Philip IV the Fair and Joan I of Navarre.' },
    death: { date: '1 February 1328', place: 'Vincennes', note: 'Died leaving his queen pregnant; the child was a girl.', circumstance: 'With his death the direct Capetian male line, unbroken since 987, ended; the succession dispute that followed defined a century.' },
    quickFacts: { realm: 'Kingdom of France', dynasty: 'House of Capet (direct line, last king)', culture: 'French', knownFor: 'the War of Saint-Sardos and the extinction of the direct Capetian line' },
    isRuler: true,
    succession: { office: 'King of France', predecessor: UN('Philip V the Tall', 'His brother, who also died without a son'), successor: P('philip-vi-of-france', 'Philip VI of France', 'His Valois cousin, chosen by the peers over Edward III\'s claim through Isabella') },
    overview: [
      'Charles IV was the third of Philip the Fair\'s sons to wear the crown in fourteen years, and like his brothers he died without a male heir — the dynastic catastrophe that ended three and a half centuries of father-to-son Capetian succession.',
      'His short reign was effective at England\'s expense: the War of Saint-Sardos (1324) overran most of English Gascony in weeks, and the settlement he imposed — negotiated by his sister Isabella, King Edward II\'s estranged queen — became the springboard for her invasion of England. When Charles died in 1328, the peers passed over Isabella\'s son Edward III for Philip of Valois; Edward\'s deferred claim became the legal banner of the Hundred Years\' War.'
    ],
    contentSections: [
      { title: 'Overview', paragraphs: [
        'Charles IV was the third of Philip the Fair\'s sons to wear the crown in fourteen years, and like his brothers he died without a male heir — the dynastic catastrophe that ended three and a half centuries of father-to-son Capetian succession.',
        'His short reign was effective at England\'s expense: the War of Saint-Sardos (1324) overran most of English Gascony in weeks, and the settlement he imposed — negotiated by his sister Isabella, King Edward II\'s estranged queen — became the springboard for her invasion of England. When Charles died in 1328, the peers passed over Isabella\'s son Edward III for Philip of Valois; Edward\'s deferred claim became the legal banner of the Hundred Years\' War.'
      ]},
      { title: 'Birth and early life', paragraphs: [
        'Born in 1294, Charles was the youngest son of Philip IV and grew up through the dynasty\'s harshest dramas — the destruction of the Templars, and the Tour de Nesle adultery scandal of 1314, in which his first wife Blanche of Burgundy was imprisoned for life. The marriage was annulled only in 1322, when he needed a queen.',
        'He received the county of La Marche as appanage and waited through the brief reigns of his brothers Louis X and Philip V, becoming king in January 1322 when Philip died leaving only daughters — the second application of the new principle excluding women from the throne that Charles\'s own death would test to destruction.'
      ]},
      { title: 'Character and Personality', paragraphs: [
        '"Le Bel" — the Fair — described his person, as it had his father\'s; the chronicles grant him the good looks of his house and not much of its force. The description that survives is of a correct, unimaginative, mildly avaricious king: he pursued his brothers\' fiscal expedients — currency manipulation, prosecutions of Lombard bankers and corrupt officials — with steadiness rather than cruelty.',
        'Toward his sister Isabella he showed the family loyalty that reshaped two kingdoms: sheltering her and her exiled lover Mortimer at the French court, and holding Gascony hostage while their invasion of England ripened — conduct his English brother-in-law\'s partisans called perfidy and the French court called justice on a vassal in default. Nothing recorded of him suggests he grasped that the dynasty itself was dying around the proprieties he maintained.'
      ]},
      { title: 'Reign', paragraphs: [
        'The centrepiece was the War of Saint-Sardos. A Gascon village priory, a royal bastide burned by English partisans, a summons Edward II ignored — and in August 1324 Charles\'s uncle Charles of Valois swept through the Agenais and left England holding only a coastal strip around Bordeaux. Edward, to avoid personal homage, sent his son: the future Edward III did homage for a truncated Gascony in 1325, in his mother Isabella\'s custody, and from that custody came the invasion that deposed Edward II in 1327.',
        'Charles kept Navarre through his mother\'s inheritance, meddled profitably in Flanders, and even entertained an imperial candidacy in 1324. When he fell mortally ill at Vincennes in the new year of 1328, everything hung on the pregnancy of Queen Jeanne d\'Évreux: he directed that if the child were a girl, the peers should choose the king. On 1 April she bore a daughter, and the crown passed to Philip of Valois.'
      ]},
      { title: 'Death and legacy', paragraphs: [
        'Charles died on 1 February 1328 and was buried at Saint-Denis; the regency and then the crown of his cousin Philip VI followed the assembly\'s verdict that "no woman, nor therefore her son", could succeed to France — reasoning aimed squarely at Isabella and the sixteen-year-old Edward III.',
        'The consequence outweighed everything he did: within a decade Edward III\'s renounced-and-revived claim through Isabella became the dynastic engine of the Hundred Years\' War, and every later act of that conflict — Crécy, Poitiers, Troyes, Castillon — worked out the succession question that closed over Charles the Fair\'s grave.'
      ]}
    ],
    timeline: [
      { date: 'June 1294', title: 'Born', description: 'Third son of Philip IV the Fair and Joan I of Navarre.' },
      { date: '1314', title: 'Tour de Nesle scandal', description: 'His wife Blanche of Burgundy is imprisoned for adultery; the marriage is later annulled.' },
      { date: '3 January 1322', title: 'Becomes king', description: 'Succeeds his brother Philip V, who left only daughters.' },
      { date: 'August 1324', title: 'War of Saint-Sardos', description: 'French forces overrun the Agenais and most of English Gascony in six weeks.' },
      { date: 'September 1325', title: 'Homage of the young Edward', description: 'The future Edward III does homage for Gascony and remains with Isabella in France.' },
      { date: '1 February 1328', title: 'Dies at Vincennes', description: 'Dies awaiting the birth of his child; a daughter is born on 1 April.' },
      { date: 'April–May 1328', title: 'End of the direct line', description: 'The peers give the crown to Philip of Valois; Edward III\'s excluded claim smoulders toward war.' }
    ],
    relatedEntries: {
      people: [
        { title: 'Philip VI of France', type: 'person', slug: 'philip-vi-of-france', label: 'Valois cousin and successor' },
        { title: 'Edward III of England', type: 'person', slug: 'edward-iii-of-england', label: 'Nephew whose excluded claim ignited the war' },
        { title: 'Edward II of England', type: 'person', slug: 'edward-ii-of-england', label: 'Brother-in-law, humbled at Saint-Sardos and deposed from Paris' }
      ],
      locations: [ { title: 'Kingdom of France', type: 'location', slug: 'kingdom-of-france' }, { title: 'Gascony', type: 'location', slug: 'gascony', label: 'Overrun in 1324' } ],
      events: [ { title: "Hundred Years' War", type: 'event', slug: 'hundred-years-war', label: 'Opened by the succession vacuum he left' } ]
    },
    sources: [
      { title: 'Wikimedia Commons image record', author: 'Wikimedia Commons', type: 'image source', url: pg('Charles4_mini.jpg') },
      { title: 'Charles IV of France — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Charles_IV_of_France' },
      { title: 'The Hundred Years War, vol. 1: Trial by Battle', author: 'Jonathan Sumption', type: 'book', note: 'Opens with Saint-Sardos and the 1328 succession.' }
    ]
  },
  {
    id: 'charles-v-of-france', type: 'character', name: 'Charles V of France', aliases: ['Charles the Wise', 'Charles le Sage'],
    born: 1338, died: 1380, deathAge: '42', causeOfDeath: 'Chronic illness, possibly the aftermath of a long-suspected poisoning attempt of 1359',
    restingPlace: 'Basilica of Saint-Denis', location: 'Kingdom of France',
    image: fp('Saint-Èvre_-_Charles_V_of_France.jpg'),
    imageInfo: { caption: 'Charles V of France, painted by Gillot Saint-Èvre in the nineteenth century for Versailles.', creator: 'Gillot Saint-Èvre', date: '19th century', source: 'Palace of Versailles — via Wikimedia Commons', sourceUrl: pg('Saint-Èvre_-_Charles_V_of_France.jpg'), note: 'A nineteenth-century historical imagining, not a contemporary portrait.' },
    summary: 'Charles V "the Wise" (1364–1380) rebuilt France after Poitiers and the Jacquerie, and — through Du Guesclin\'s Fabian war — recovered nearly everything the treaty of Brétigny had ceded to England.',
    title: 'king of France', roles: ['King of France', 'Dauphin and regent during John II\'s captivity'],
    birth: { date: '21 January 1338', place: 'Vincennes', note: 'Eldest son of John II and Bonne of Luxembourg; the first French heir titled Dauphin.' },
    death: { date: '16 September 1380', place: 'Beauté-sur-Marne', note: 'Died at forty-two after years of failing health.', circumstance: 'On his deathbed he ordered the abolition of the hearth tax that had funded his wars — a scruple his son\'s ministers ignored.' },
    quickFacts: { realm: 'Kingdom of France', dynasty: 'House of Valois', culture: 'French', knownFor: 'reversing the verdict of Poitiers and Brétigny without a single great battle' },
    isRuler: true,
    succession: { office: 'King of France', predecessor: P('john-ii-of-france', 'John II', 'His father, who died in honourable London captivity'), successor: UN('Charles VI', 'His eleven-year-old son, whose later madness undid the recovery') },
    overview: [
      'Charles V learned kingship in catastrophe: regent at eighteen after Poitiers, with his father captive, Paris in revolt under Étienne Marcel, the Jacquerie burning the countryside, and Navarre and England dismembering the realm. He survived it all — and remembered every lesson.',
      'As king he refused the war England wanted. Reopening hostilities in 1369 on a Gascon legal pretext, he let Bertrand du Guesclin\'s harrying columns, fortified towns, and fleet do the work while forbidding pitched battle with English field armies. By 1380 the great Brétigny cession was reduced to Calais and a sliver of Gascony — Crécy and Poitiers annulled without a Crécy or a Poitiers.'
    ],
    contentSections: [
      { title: 'Overview', paragraphs: [
        'Charles V learned kingship in catastrophe: regent at eighteen after Poitiers, with his father captive, Paris in revolt under Étienne Marcel, the Jacquerie burning the countryside, and Navarre and England dismembering the realm. He survived it all — and remembered every lesson.',
        'As king he refused the war England wanted. Reopening hostilities in 1369 on a Gascon legal pretext, he let Bertrand du Guesclin\'s harrying columns, fortified towns, and fleet do the work while forbidding pitched battle with English field armies. By 1380 the great Brétigny cession was reduced to Calais and a sliver of Gascony — Crécy and Poitiers annulled without a Crécy or a Poitiers.'
      ]},
      { title: 'Birth and early life', paragraphs: [
        'Born at Vincennes in 1338, Charles was the first heir of France to bear the title Dauphin, from the newly purchased Dauphiné. At Poitiers in 1356 the eighteen-year-old commanded a division and was led from the field before the end — a humiliation his enemies never let him forget and his later strategy answered better than bravado would have.',
        'The regency of 1356–1360 was his forge. The Estates under Étienne Marcel tried to rule through him; Marcel\'s mob murdered the marshals of Champagne and Normandy in his own chamber, splashing him with their blood, and he escaped Paris to raise the loyal towns. Marcel\'s murder by the Parisians themselves in 1358, and the collapse of the Jacquerie, gave the Dauphin back his capital; the treaty of Brétigny in 1360 bought his father\'s liberty at a ruinous price in land and gold — a price Charles spent his reign clawing back.'
      ]},
      { title: 'Character and Personality', paragraphs: [
        'Christine de Pizan\'s Livre des fais et bonnes meurs du sage roy Charles V — a commissioned but detailed portrait by a court insider\'s daughter — fixed the image contemporaries confirm: a thin, grave, sickly king with a swollen right hand who could not bear armour long, and who therefore made his study, council chamber, and library the theatre of his kingship. He kept fixed working hours, heard petitions in person, and read voraciously; his Louvre library of over nine hundred volumes became the seed of the Bibliothèque nationale.',
        'The wisdom in the epithet was practical: he chose servants of low birth and high talent — Du Guesclin the Breton hedge-knight made Constable, the Bureau brothers\' predecessors in the ordnance, Clisson — and held them against aristocratic complaint. Enemies then and critics since have called the method cold, legalistic, even devious: he fought by lawsuit, subsidy, and siege, and shed his own nobility\'s illusions about glory. He would have accepted the description.'
      ]},
      { title: 'Reign', paragraphs: [
        'The rebuilding came first: the standing taxes (fouage, aides, gabelle) regularised war finance; the ordinance of 1374 fixed royal majority at fourteen to spare France another long regency; walls — including the Bastille — rose around Paris; and a real navy grew at the Clos des Galées in Rouen. When the Gascon lords appealed to Paris against the Black Prince\'s hearth tax in 1368, Charles had his casus belli in proper legal form.',
        'The war of 1369–1380 was fought his way. Du Guesclin, Constable from 1370, shadowed and starved the great English chevauchées — Knolles\'s in 1370 destroyed piecemeal at Pontvallain, Lancaster\'s of 1373 bled to a ruin across the winter Auvergne — while town after town in Aquitaine was bought, besieged, or persuaded back to French allegiance. The Castilian galleys won at La Rochelle in 1372, closing the sea. Poitou, the Limousin, Périgord, the Agenais, the Rouergue: by 1377 the principality of Aquitaine created at Brétigny had collapsed to Bordeaux, Bayonne, and their hinterland.'
      ]},
      { title: 'Death and legacy', paragraphs: [
        'Du Guesclin died in July 1380; Charles followed on 16 September, after ordering on his deathbed the abolition of the fouage — the hearth tax underpinning his whole system — in a final scruple of conscience about taxation without consent. He was buried at Saint-Denis beside the constable he had raised from nothing.',
        'The recovery proved personal rather than institutional: his son Charles VI\'s minority squandered the treasury, and the madness that followed delivered France to the feuds that Agincourt and Troyes exploited. But the model survived — when Charles VII finished the war seventy years later, he did it with his grandfather\'s tools: permanent taxes, a professional army, artillery, and the refusal of battle on English terms.'
      ]}
    ],
    timeline: [
      { date: '21 January 1338', title: 'Born at Vincennes', description: 'Eldest son of John II; first heir to bear the title Dauphin.' },
      { date: '19 September 1356', title: 'Poitiers', description: 'Commands a division at eighteen; his father is captured and Charles becomes regent.' },
      { date: '1358', title: 'Marcel and the Jacquerie', description: 'Escapes revolutionary Paris after the marshals are murdered before him; the risings collapse by summer.' },
      { date: '1360', title: 'Treaty of Brétigny', description: 'A third of France and three million crowns buy John II\'s release; Charles inherits the debt and the grievance.' },
      { date: '8 April 1364', title: 'Crowned at Reims', description: 'Becomes king on his father\'s death in London.' },
      { date: '1369', title: 'Reopens the war', description: 'Accepts the Gascon appeals and declares Aquitaine forfeit; Du Guesclin\'s Fabian campaigns begin.' },
      { date: '1372', title: 'La Rochelle', description: 'The Castilian fleet destroys the English convoy; the sea lanes to Aquitaine close.' },
      { date: '16 September 1380', title: 'Dies', description: 'Dies at Beauté-sur-Marne weeks after Du Guesclin, abolishing the hearth tax with his last orders.' }
    ],
    relatedEntries: {
      people: [
        { title: 'John II of France', type: 'person', slug: 'john-ii-of-france', label: 'Father, whose captivity made him regent' },
        { title: 'Edward, the Black Prince', type: 'person', slug: 'edward-the-black-prince', label: 'The adversary whose principality he dismantled' },
        { title: 'Edward III of England', type: 'person', slug: 'edward-iii-of-england', label: 'The old enemy outlasted and out-governed' }
      ],
      locations: [ { title: 'Kingdom of France', type: 'location', slug: 'kingdom-of-france' }, { title: 'Paris', type: 'location', slug: 'paris', label: 'Rewalled under his regency and reign' } ],
      events: [
        { title: 'Battle of Poitiers', type: 'event', slug: 'battle-of-poitiers', label: 'The disaster his reign reversed' },
        { title: "Hundred Years' War", type: 'event', slug: 'hundred-years-war' }
      ]
    },
    sources: [
      { title: 'Wikimedia Commons image record', author: 'Wikimedia Commons', type: 'image source', url: pg('Saint-Èvre_-_Charles_V_of_France.jpg') },
      { title: 'Charles V of France — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Charles_V_of_France' },
      { title: 'The Hundred Years War, vol. 3: Divided Houses', author: 'Jonathan Sumption', type: 'book', note: 'The fullest modern narrative of the 1369–1380 recovery.' }
    ]
  },

  // ── SCANDINAVIA ─────────────────────────────────────────────────────────
  {
    id: 'harald-greycloak', type: 'character', name: 'Harald Greycloak', aliases: ['Harald II Eiriksson', 'Harald Gråfell'],
    born: 935, died: 970, deathAge: 'about 35', causeOfDeath: 'Killed in battle at Hals in the Limfjord, lured there by Danish treachery',
    restingPlace: 'Unknown', location: 'Kingdom of Norway',
    image: fp('Olav_Tryggvasons_saga_-_Harald_Graafell_-_c._Krohg.jpg'),
    imageInfo: { caption: 'Harald Greycloak as imagined by Christian Krohg for the 1899 edition of Heimskringla.', creator: 'Christian Krohg', date: '1899', source: 'Snorri Sturluson, Heimskringla (1899 ed.) — via Wikimedia Commons', sourceUrl: pg('Olav_Tryggvasons_saga_-_Harald_Graafell_-_c._Krohg.jpg'), note: 'A modern artistic imagining; no medieval depiction of Harald survives.' },
    summary: 'Harald Greycloak, eldest surviving son of Eric Bloodaxe, ruled western Norway (c. 961–970) with his brothers under Danish patronage, destroying rival kings until Danish treachery destroyed him in turn.',
    title: 'king of Norway', roles: ['King of Norway (with his brothers)'],
    birth: { date: 'c. 935', place: 'Norway or the British Isles', note: 'Son of Eric Bloodaxe and Gunnhild; raised partly in exile after his father\'s fall.' },
    death: { date: 'c. 970', place: 'Hals, Limfjord, Denmark', note: 'Killed in battle after being lured to Denmark.', circumstance: 'Saga tradition has Harald Bluetooth and Jarl Håkon contrive his death: invited to receive Danish fiefs, he was met at Hals by an army.' },
    quickFacts: { realm: 'Kingdom of Norway', dynasty: 'Fairhair line (Eirikssons)', culture: 'Norse, early Christian', knownFor: 'the harsh rule of the Eirikssons and his death by Danish treachery' },
    isRuler: true,
    succession: { office: 'King of Norway', predecessor: P('haakon-the-good', 'Haakon the Good', 'Mortally wounded at Fitjar defeating the Eirikssons\' last assault'), successor: UN('Jarl Håkon Sigurdsson', 'Who ruled Norway under Danish overlordship after contriving Harald\'s death') },
    overview: [
      'Harald Greycloak led the sons of Eric Bloodaxe back from exile to claim their grandfather Fairhair\'s kingdom, finally winning it when Haakon the Good fell at Fitjar around 961. The brothers ruled the western coast harshly by saga account — killing the petty kings of the Uplands and Trøndelag\'s jarl, and breaking sacrifices as baptised kings among heathen subjects.',
      'The nickname came, Snorri says, from a consignment of grey sheepskin cloaks he made fashionable to help Icelandic merchants. His Danish patron Harald Bluetooth turned on him around 970: lured to the Limfjord with promises of Danish fiefs, he was ambushed at Hals and killed, and Norway passed to Jarl Håkon under Danish lordship.'
    ],
    contentSections: [
      { title: 'Overview', paragraphs: [
        'Harald Greycloak led the sons of Eric Bloodaxe back from exile to claim their grandfather Fairhair\'s kingdom, finally winning it when Haakon the Good fell at Fitjar around 961. The brothers ruled the western coast harshly by saga account — killing the petty kings of the Uplands and Trøndelag\'s jarl, and breaking sacrifices as baptised kings among heathen subjects.',
        'The nickname came, Snorri says, from a consignment of grey sheepskin cloaks he made fashionable to help Icelandic merchants. His Danish patron Harald Bluetooth turned on him around 970: lured to the Limfjord with promises of Danish fiefs, he was ambushed at Hals and killed, and Norway passed to Jarl Håkon under Danish lordship.'
      ]},
      { title: 'Birth and early life', paragraphs: [
        'Harald was born around 935 to Eric Bloodaxe and Gunnhild, the saga tradition\'s arch-schemer among queens. His father\'s expulsion from Norway and death in England (at Stainmore, 954) left the brood of Eirikssons at the Danish court, where Harald Bluetooth stood godfather to their ambitions against Haakon the Good.',
        'The brothers were baptised in England or Denmark — making them, after Haakon, the second Christian generation to claim Norway — and spent the 950s raiding their homeland\'s coasts in Danish-backed attempts that Haakon threw back at Avaldsnes, Rastarkalv, and finally, at the price of his own life, at Fitjar.'
      ]},
      { title: 'Character and Personality', paragraphs: [
        'The saga picture — Heimskringla and Fagrskinna, written 250 years later — is of the ablest of a hated brood: a hard fighter from his youth in the eastern Baltic raids, more decisive than his brothers, but ruling in famine years that Norse memory blamed on the kings\' impiety. The verses of contemporary skalds, quoted by Snorri, honour his generosity and his war-luck, the two virtues a Norse king could not lack.',
        'His mother Gunnhild dominates the tradition\'s explanation of the brothers\' cruelty; how much of that is history and how much the sagas\' need for a villainess is genuinely unknowable. What the tradition concedes even in hostility is that Harald and his brothers destroyed everyone the sagas name as their rivals — until the ally behind them decided the tool had grown too independent.'
      ]},
      { title: 'Reign and death', paragraphs: [
        'From about 961 Harald was the leading king among his brothers, holding the west coast heartland while Danish power stood behind and above them. The saga catalogue of their reign is a list of eliminations: King Tryggve Olafsson and King Gudrød Bjørnsson of the Vestfold line killed, Jarl Sigurd of Lade burned in his hall — each removal clearing the board, and each making new enemies, most fatefully Sigurd\'s son Jarl Håkon.',
        'Around 970 Håkon and Harald Bluetooth closed the trap: an invitation to Denmark, fiefs in the offing, and at Hals in the Limfjord a battle arranged in advance, where Harald fell to Gold-Harald Knutsson — who was then himself promptly destroyed by Håkon, leaving the jarl to rule Norway as Denmark\'s man. Gunnhild and the surviving sons fled to Orkney; the age of the Eirikssons was over.'
      ]},
      { title: 'Legacy', paragraphs: [
        'Harald\'s fall reset the Norwegian kingship twice over: it proved Denmark could make and unmake Norway\'s kings, and it left the Fairhair claim dormant until Olaf Tryggvason — son of the Tryggve whom Harald had killed — returned in 995 to reclaim it. The pattern of exile, Danish patronage, and violent return that Harald rode to power outlived him by a century.',
        'For the church\'s memory he remained ambiguous: a baptised king who broke heathen altars but is credited with no mission, remembered chiefly for hunger and hard rule — the contrast against which the sagas built the missionary reigns of the two Olafs.'
      ]}
    ],
    timeline: [
      { date: 'c. 935', title: 'Born', description: 'Eldest surviving son of Eric Bloodaxe and Gunnhild.' },
      { date: '954', title: 'Eric Bloodaxe dies at Stainmore', description: 'The family\'s English kingdom ends; the Eirikssons regroup at the Danish court.' },
      { date: 'c. 961', title: 'Fitjar', description: 'Haakon the Good falls repelling the brothers\' assault; Harald takes the kingship in the west.' },
      { date: '960s', title: 'The eliminations', description: 'Tryggve Olafsson, Gudrød Bjørnsson, and Jarl Sigurd of Lade are killed as the brothers consolidate.' },
      { date: 'c. 970', title: 'Lured to Denmark', description: 'Promised fiefs by Harald Bluetooth, he sails to the Limfjord.' },
      { date: 'c. 970', title: 'Killed at Hals', description: 'Ambushed and slain; Jarl Håkon rules Norway under Danish overlordship.' }
    ],
    relatedEntries: {
      people: [
        { title: 'Eric Bloodaxe', type: 'person', slug: 'eric-bloodaxe', label: 'Father' },
        { title: 'Haakon the Good', type: 'person', slug: 'haakon-the-good', label: 'The uncle he fought and succeeded' },
        { title: 'Harald Bluetooth', type: 'person', slug: 'harald-bluetooth', label: 'Patron, overlord, and finally betrayer' },
        { title: 'Olaf Tryggvason', type: 'person', slug: 'olaf-tryggvason', label: 'Son of his victim, avenger of the Vestfold line' }
      ],
      locations: [],
      events: [ { title: 'Battle of Svolder', type: 'event', slug: 'battle-of-svolder', label: 'The next great reckoning of Norwegian kingship' } ]
    },
    sources: [
      { title: 'Wikimedia Commons image record — Krohg illustration', author: 'Wikimedia Commons', type: 'image source', url: pg('Olav_Tryggvasons_saga_-_Harald_Graafell_-_c._Krohg.jpg') },
      { title: 'Harald Greycloak — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Harald_Greycloak' },
      { title: 'Snorri Sturluson, Heimskringla (Harald Greycloak\'s saga)', author: 'Snorri Sturluson', type: 'primary source', note: 'Thirteenth-century saga compilation; tradition, not documentary record.' }
    ]
  },
  {
    id: 'magnus-ii-of-norway', type: 'character', name: 'Magnus II of Norway', aliases: ['Magnus Haraldsson'],
    born: 1048, died: 1069, deathAge: 'about 21', causeOfDeath: 'Died of illness — ergotism ("ringworm disease" in the sagas) — in 1069',
    restingPlace: 'Nidaros Cathedral, Trondheim', location: 'Kingdom of Norway',
    image: fp('Nidarosdomen_vestfronten.jpg'),
    imageInfo: { caption: 'The west front of Nidaros Cathedral, Trondheim, where Magnus II was buried.', creator: 'Photographer, Wikimedia Commons', date: 'modern photograph', source: 'Wikimedia Commons', sourceUrl: pg('Nidarosdomen_vestfronten.jpg'), note: 'No medieval depiction of Magnus II survives; his burial church stands for him here.' },
    summary: 'Magnus II Haraldsson, elder son of Harald Hardrada, ruled Norway (1066–1069) after his father fell at Stamford Bridge, sharing the kingship with his brother Olaf III until an early death.',
    title: 'king of Norway', roles: ['King of Norway (jointly with Olaf III from 1067)'],
    birth: { date: 'c. 1048', place: 'Norway', note: 'Son of Harald Hardrada and Tora Torbergsdatter.' },
    death: { date: '28 April 1069', place: 'Nidaros (Trondheim)', note: 'Died young of disease, leaving the kingdom to his brother.', circumstance: 'The sagas name his illness "ringworm disease", generally read as ergotism; he was buried in Christ Church, Nidaros.' },
    quickFacts: { realm: 'Kingdom of Norway', dynasty: 'Hardrada line', culture: 'Norse Christian', knownFor: 'holding Norway after Stamford Bridge and the joint kingship with Olaf Kyrre' },
    isRuler: true,
    succession: { office: 'King of Norway', predecessor: P('harald-hardrada', 'Harald Hardrada', 'His father, killed at Stamford Bridge while Magnus governed at home'), successor: P('olaf-iii-of-norway', 'Olaf III Kyrre', 'His brother and co-king, sole ruler after Magnus\'s death') },
    overview: [
      'When Harald Hardrada sailed for England in 1066 he left his elder son Magnus behind as king of Norway — a precaution that saved the dynasty when Stamford Bridge destroyed the invasion. Magnus, about eighteen, was already holding the kingdom when his brother Olaf brought the survivors home.',
      'The brothers divided the kingship in 1067 in the customary Norwegian manner, Magnus taking the north. He died of disease in April 1069, barely twenty-one, and Norway passed whole to Olaf Kyrre\'s long peace.'
    ],
    contentSections: [
      { title: 'Overview', paragraphs: [
        'When Harald Hardrada sailed for England in 1066 he left his elder son Magnus behind as king of Norway — a precaution that saved the dynasty when Stamford Bridge destroyed the invasion. Magnus, about eighteen, was already holding the kingdom when his brother Olaf brought the survivors home.',
        'The brothers divided the kingship in 1067 in the customary Norwegian manner, Magnus taking the north. He died of disease in April 1069, barely twenty-one, and Norway passed whole to Olaf Kyrre\'s long peace.'
      ]},
      { title: 'Birth and early life', paragraphs: [
        'Magnus was born around 1048 to Harald Hardrada and Tora Torbergsdatter of the powerful Giske kin — the marriage that bound the Arnmødling magnates to the new dynasty. He was named for his father\'s nephew and predecessor Magnus the Good.',
        'His only recorded independent command came in 1058, when — a boy of ten, clearly under guardians — he nominally led a Norwegian fleet to support Ælfgar of Mercia and Gruffudd ap Llywelyn in Wales; the episode shows how early Hardrada put his sons into the dynasty\'s work.'
      ]},
      { title: 'Character and Personality', paragraphs: [
        'The sagas, which lavish attention on his father and brother, give Magnus little beyond the essentials, and honesty requires saying so: he appears as the responsible elder son, trusted with the realm at eighteen, and as a king who kept his half of a divided inheritance without recorded conflict with his brother — itself noteworthy in a century when joint kingships regularly ended in war.',
        'Morkinskinna preserves the tradition that the division of 1067 was amicable and that Magnus\'s early death, not rivalry, reunited the kingdom. Against the vivid saga portraits of Hardrada\'s ferocity and Olaf\'s quietness, Magnus survives as the dynasty\'s dutiful, briefly-glimpsed hinge.'
      ]},
      { title: 'Reign and death', paragraphs: [
        'Magnus\'s kingship was framed by the catastrophe of 1066: he was regent-king while his father and brother sailed with the great fleet, and the settlement of 1067 made formal what the disaster had made fact — Magnus king in the north at Nidaros, Olaf in the east, the customary Norwegian double kingship rather than any partition of sovereignty.',
        'In April 1069 Magnus sickened and died at Nidaros of what the sagas call "ringworm disease", commonly identified with ergotism. He was buried in Christ Church — the predecessor of Nidaros Cathedral — near the shrine of his uncle Saint Olaf, and his infant son Håkon Toresfostre would briefly figure as a king a generation later.'
      ]},
      { title: 'Legacy', paragraphs: [
        'Magnus\'s quiet three years mattered for what did not happen: no succession war after Stamford Bridge, no Danish reconquest, no magnate revolt. The stability he and Olaf kept let Norway absorb the loss of its king, its fleet, and a generation of warriors in a single September week.',
        'His line continued through his son Håkon, co-king with Magnus Barefoot for a year, but the future belonged to Olaf\'s and then Magnus Barefoot\'s descendants; Magnus II remains the least remembered king of his house — the price of dying young in peace.'
      ]}
    ],
    timeline: [
      { date: 'c. 1048', title: 'Born', description: 'Elder son of Harald Hardrada and Tora Torbergsdatter.' },
      { date: '1058', title: 'Nominal command in the Irish Sea', description: 'Fronts a Norwegian fleet supporting the Mercian-Welsh alliance, aged about ten.' },
      { date: 'summer 1066', title: 'Left as king in Norway', description: 'Harald Hardrada designates him ruler at home before sailing for England.' },
      { date: '25 September 1066', title: 'Stamford Bridge', description: 'His father is killed; Magnus\'s regency becomes the kingdom\'s continuity.' },
      { date: '1067', title: 'Joint kingship', description: 'Divides the royal office with his returned brother Olaf, taking the northern half.' },
      { date: '28 April 1069', title: 'Dies at Nidaros', description: 'Dies of disease, about twenty-one; Olaf Kyrre rules alone.' }
    ],
    relatedEntries: {
      people: [
        { title: 'Harald Hardrada', type: 'person', slug: 'harald-hardrada', label: 'Father' },
        { title: 'Olaf III Kyrre', type: 'person', slug: 'olaf-iii-of-norway', label: 'Brother and co-king' },
        { title: 'Magnus the Good', type: 'person', slug: 'magnus-the-good', label: 'Namesake and kinsman' }
      ],
      locations: [],
      events: [ { title: 'Battle of Stamford Bridge', type: 'event', slug: 'battle-of-stamford-bridge', label: 'The defeat that made his regency a reign' } ]
    },
    sources: [
      { title: 'Wikimedia Commons image record — Nidaros Cathedral', author: 'Wikimedia Commons', type: 'image source', url: pg('Nidarosdomen_vestfronten.jpg') },
      { title: 'Magnus Haraldsson — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Magnus_Haraldsson' },
      { title: 'Morkinskinna (trans. Andersson & Gade)', author: 'Anonymous, 13th century', type: 'primary source', note: 'Earliest saga compilation covering the joint kingship of 1067–1069.' }
    ]
  },
  {
    id: 'olaf-iii-of-norway', type: 'character', name: 'Olaf III of Norway', aliases: ['Olaf Kyrre', 'Olaf the Peaceful'],
    born: 1050, died: 1093, deathAge: 'about 43', causeOfDeath: 'Died of illness at Haukbø in Ranrike — a peaceful death rare among his line',
    restingPlace: 'Christ Church, Nidaros (Trondheim)', location: 'Kingdom of Norway',
    image: fp('Olav_Kyrre_mynt_1.jpg'),
    imageInfo: { caption: 'Silver penny of Olaf Kyrre — coinage minted in his own reign, the nearest thing to a contemporary image of the king.', creator: 'Royal mint of Norway, 11th century', date: 'c. 1067–1093', source: 'Wikimedia Commons', sourceUrl: pg('Olav_Kyrre_mynt_1.jpg'), note: 'A contemporary object from Olaf\'s own reign; the stylised bust is not a portrait.' },
    summary: 'Olaf III "Kyrre" (the Peaceful) survived Stamford Bridge and ruled Norway for twenty-six years (1067–1093) without a single war — founding Bergen, establishing bishoprics, and letting the country grow rich.',
    title: 'king of Norway', roles: ['King of Norway (jointly with Magnus II to 1069)'],
    birth: { date: 'c. 1050', place: 'Norway', note: 'Younger son of Harald Hardrada and Tora Torbergsdatter.' },
    death: { date: '22 September 1093', place: 'Haukbø, Ranrike', note: 'Died in his bed after the longest peace in Norwegian royal memory.', circumstance: 'Buried at Christ Church, Nidaros, the stone cathedral he had begun over Saint Olaf\'s shrine.' },
    quickFacts: { realm: 'Kingdom of Norway', dynasty: 'Hardrada line', culture: 'Norse Christian', knownFor: 'twenty-six years of peace, the founding of Bergen, and the first Norwegian bishoprics' },
    isRuler: true,
    succession: { office: 'King of Norway', predecessor: P('magnus-ii-of-norway', 'Magnus II', 'His brother and co-king, dead of disease in 1069'), successor: P('magnus-barefoot', 'Magnus Barefoot', 'His son, who spent the peace his father had banked') },
    overview: [
      'Olaf Haraldsson the younger stood in the shield-wall at Stamford Bridge at sixteen, was given quarter to sail home with the survivors — twenty-four ships of the three hundred that had come — and drew from that education the most un-Norse of royal programmes: peace, at any honourable price.',
      'He made it stick for twenty-six years, the longest calm in the kingdom\'s recorded history: peace with Denmark by treaty in 1068, marriage into the Danish royal house, Bergen founded, the first fixed bishoprics at Nidaros, Bergen, and Oslo, stone churches rising, and the towns and guilds growing in a kingdom that imported its fashions instead of its enemies.'
    ],
    contentSections: [
      { title: 'Overview', paragraphs: [
        'Olaf Haraldsson the younger stood in the shield-wall at Stamford Bridge at sixteen, was given quarter to sail home with the survivors — twenty-four ships of the three hundred that had come — and drew from that education the most un-Norse of royal programmes: peace, at any honourable price.',
        'He made it stick for twenty-six years, the longest calm in the kingdom\'s recorded history: peace with Denmark by treaty in 1068, marriage into the Danish royal house, Bergen founded, the first fixed bishoprics at Nidaros, Bergen, and Oslo, stone churches rising, and the towns and guilds growing in a kingdom that imported its fashions instead of its enemies.'
      ]},
      { title: 'Birth and early life', paragraphs: [
        'Olaf was born around 1050, younger son of Harald Hardrada and Tora Torbergsdatter, and sailed with the great fleet of 1066 as a boy of sixteen. He was with the ships at Riccall when his father and the army died at Stamford Bridge, and Harold Godwinson — days from his own death at Hastings — let the boy take the survivors home in peace.',
        'He wintered in Orkney and reached Norway in 1067, sharing the kingship with his brother Magnus until Magnus\'s death in 1069 left him sole king at about nineteen.'
      ]},
      { title: 'Character and Personality', paragraphs: [
        'The sagas describe Olaf with unusual physical detail — tall, thick fair hair, notably handsome, sparing of speech and cheerful in drink — and with the byname that is itself a character judgment: kyrre, the Quiet. Snorri credits him with the court innovations of a Europeanising king: hall floors strewn and stoves replacing the long-fire, cupbearers and candle-pages, guild-feasts in the new towns — details his warrior ancestors would have found effete and his kingdom found prosperous.',
        'The one anecdote everyone repeats catches the man: asked why he kept so much state in peacetime, he answered that he would rather his men remembered his splendour than his wars. Later kings\' sagas, written for fighting courts, treat the long calm almost apologetically; the farmers\' memory, the same texts admit, kept "Olaf\'s peace" as a golden measure for a century.'
      ]},
      { title: 'Reign', paragraphs: [
        'The foundation was the settlement of 1068 with Sweyn Estridsson: Denmark and Norway renounced their claims on each other, and Olaf sealed it by marrying Sweyn\'s daughter Ingerid. When William the Conqueror\'s enemies and even the last Danish invasions of England invited Norwegian adventure, Olaf lent ships once (1069, under treaty obligation) and otherwise kept out — a discipline no predecessor had managed.',
        'Inside the realm he built the institutional church: fixed episcopal seats at Nidaros, Bergen, and Oslo replacing the wandering court bishops; the great stone Christ Churches begun at Nidaros over Saint Olaf\'s shrine and at Bergen — the town he founded around 1070, which grew within a century into the trading capital of the North Atlantic. Royal revenue shifted with the peace: tolls, town rents, and tithe-like renders in place of plunder.'
      ]},
      { title: 'Death and legacy', paragraphs: [
        'Olaf died in his bed at Haukbø in Ranrike on 22 September 1093 — among the very few kings of his line to manage it — and was buried in his own new cathedral church at Nidaros.',
        'The verdict of the tradition is embedded in his son\'s reign: Magnus Barefoot spent the treasury and manpower of the long peace on a decade of western war, and the sagas measure that expenditure explicitly against what "Olaf\'s peace" had gathered. The bishoprics, Bergen, and the pattern of a kingdom governed rather than raided were the durable estate.'
      ]}
    ],
    timeline: [
      { date: 'c. 1050', title: 'Born', description: 'Younger son of Harald Hardrada and Tora Torbergsdatter.' },
      { date: '25 September 1066', title: 'Survives Stamford Bridge', description: 'At the ships with the reserve; granted quarter to take the survivors home.' },
      { date: '1067–1069', title: 'Joint kingship', description: 'Shares Norway with his brother Magnus II until Magnus\'s death.' },
      { date: '1068', title: 'Peace with Denmark', description: 'Treaty with Sweyn Estridsson ends the generation-long Norwegian-Danish war; marries Ingerid Sweynsdatter.' },
      { date: 'c. 1070', title: 'Founds Bergen', description: 'Establishes the trading town that becomes Norway\'s commercial capital; fixed bishoprics follow.' },
      { date: '22 September 1093', title: 'Dies in peace', description: 'Dies at Haukbø after twenty-six years without war; buried in Christ Church, Nidaros.' }
    ],
    relatedEntries: {
      people: [
        { title: 'Harald Hardrada', type: 'person', slug: 'harald-hardrada', label: 'Father, whose fall taught him the price of war' },
        { title: 'Magnus II of Norway', type: 'person', slug: 'magnus-ii-of-norway', label: 'Brother and co-king' },
        { title: 'Magnus Barefoot', type: 'person', slug: 'magnus-barefoot', label: 'Son and successor, who spent the peace' },
        { title: 'Sweyn II Estridsson', type: 'person', slug: 'sweyn-ii-estridsson', label: 'Treaty partner and father-in-law' }
      ],
      locations: [],
      events: [ { title: 'Battle of Stamford Bridge', type: 'event', slug: 'battle-of-stamford-bridge', label: 'The catastrophe he survived at sixteen' } ]
    },
    sources: [
      { title: 'Wikimedia Commons image record — Olaf Kyrre penny', author: 'Wikimedia Commons', type: 'image source', url: pg('Olav_Kyrre_mynt_1.jpg') },
      { title: 'Olaf III of Norway — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Olaf_III_of_Norway' },
      { title: 'Snorri Sturluson, Heimskringla (Olaf Kyrre\'s saga)', author: 'Snorri Sturluson', type: 'primary source', note: 'Brief saga of the long peace, written c. 1230.' }
    ]
  },
  {
    id: 'harald-ii-of-denmark', type: 'character', name: 'Harald II of Denmark', aliases: ['Harald Svendsen'],
    born: 995, died: 1018, deathAge: 'about 23', causeOfDeath: 'Unrecorded; he died young in 1018 and the sources give no circumstances',
    restingPlace: 'Unknown', location: 'Kingdom of Denmark',
    image: fp('Harald-2.(Harald-VI),1646,Albert-Haelwegh.jpg'),
    imageInfo: { caption: 'Harald II of Denmark as imagined in a 1646 engraving by Albert Haelwegh.', creator: 'Albert Haelwegh', date: '1646', source: 'Wikimedia Commons', sourceUrl: pg('Harald-2.(Harald-VI),1646,Albert-Haelwegh.jpg'), note: 'A seventeenth-century imagined portrait; no medieval depiction of Harald II survives.' },
    summary: 'Harald II, elder son of Sweyn Forkbeard, held the Danish kingdom (1014–1018) while his brother Cnut conquered England, and by refusing to divide Denmark pushed Cnut toward that greater prize.',
    title: 'king of Denmark', roles: ['King of Denmark'],
    birth: { date: 'c. 995', place: 'Denmark', note: 'Elder son of Sweyn Forkbeard; his mother is named in the sources as Sweyn\'s Polish-born queen.' },
    death: { date: '1018', place: 'Denmark', note: 'Died young and unrecorded, leaving Denmark to Cnut.', circumstance: 'His death reunited Denmark and England under a single king for the first time.' },
    quickFacts: { realm: 'Kingdom of Denmark', dynasty: 'House of Knýtlinga (Jelling line)', culture: 'Danish Christian', knownFor: 'ruling Denmark while Cnut conquered England' },
    isRuler: true,
    succession: { office: 'King of Denmark', predecessor: P('sweyn-forkbeard', 'Sweyn Forkbeard', 'His father, who died king of England in February 1014'), successor: P('cnut-the-great', 'Cnut the Great', 'His brother, already king of England, who added Denmark on Harald\'s death') },
    overview: [
      'Harald II is the necessary, nearly invisible king of the Danish conquest of England. When Sweyn Forkbeard died at Gainsborough in February 1014, the empire split along the lines he had prepared: Harald, the elder son, took the homeland kingdom; Cnut, with the fleet in England, took the war.',
      'When Cnut came home defeated later that year, the Encomium Emmae reports, he proposed sharing Denmark and was refused — Harald instead helped equip the great fleet of 1015 that won England at Assandun. Harald\'s early death in 1018 handed Cnut Denmark as well, assembling the North Sea empire under one crown.'
    ],
    contentSections: [
      { title: 'Overview', paragraphs: [
        'Harald II is the necessary, nearly invisible king of the Danish conquest of England. When Sweyn Forkbeard died at Gainsborough in February 1014, the empire split along the lines he had prepared: Harald, the elder son, took the homeland kingdom; Cnut, with the fleet in England, took the war.',
        'When Cnut came home defeated later that year, the Encomium Emmae reports, he proposed sharing Denmark and was refused — Harald instead helped equip the great fleet of 1015 that won England at Assandun. Harald\'s early death in 1018 handed Cnut Denmark as well, assembling the North Sea empire under one crown.'
      ]},
      { title: 'Birth and early life', paragraphs: [
        'Harald was born around 995, the elder of Sweyn Forkbeard\'s sons, and was named for his grandfather Harald Bluetooth. When Sweyn sailed on the great invasion of England in 1013 he left Harald as regent of Denmark — the arrangement contemporaries understood as marking the elder son for the home kingdom.',
        'Danish kingship still required election and the support of the fleet-levies; Harald\'s smooth assumption of the crown in 1014, while his brother was being chased out of England, shows the homeland establishment stood behind the designated heir.'
      ]},
      { title: 'Character and Personality', paragraphs: [
        'No saga or chronicle drew Harald\'s character; he must be read from two recorded decisions, and honesty about that thinness is part of his record. The first: he refused to divide Denmark with Cnut in 1014 — firmness toward a brother fresh from defeat, and exactly what a kingdom\'s stability required. The second: having refused, he backed Cnut\'s English war with Danish ships and men rather than rivalry.',
        'Those two choices — keep the kingdom whole, point the ambitious brother outward — are the acts of a ruler who understood both his rights and his situation. The Encomium, written for Cnut\'s widow, remembers the refusal without rancour, which suggests the brothers\' settlement held on both sides.'
      ]},
      { title: 'Reign and death', paragraphs: [
        'Harald\'s four years were, so far as the record runs, quiet ones: Denmark supplied rather than suffered the wars of the age. The great fleet that carried Cnut, Thorkell the Tall, and Eric of Lade to England in 1015 was gathered in Harald\'s harbours, and Denmark\'s stability underwrote the campaign that ended at Assandun.',
        'He died in 1018, aged perhaps twenty-three, of causes no source records. Cnut came from England that year to secure the succession, and thereafter wore both crowns; whatever family of Harald\'s existed left no trace in the record.'
      ]},
      { title: 'Legacy', paragraphs: [
        'Harald\'s reign made the conquest of England financially and logistically possible while guaranteeing that failure abroad would not cost the dynasty its base. His death then completed the design accidentally: Denmark and England joined under Cnut into the North Sea empire that framed the next forty years of northern politics.',
        'He is among the clearest examples in the period of a king remembered almost solely through his relationships — son of Sweyn, brother of Cnut — and of how much such "minor" reigns could determine.'
      ]}
    ],
    timeline: [
      { date: 'c. 995', title: 'Born', description: 'Elder son of Sweyn Forkbeard, named for Harald Bluetooth.' },
      { date: '1013', title: 'Regent of Denmark', description: 'Governs the homeland while Sweyn conquers England.' },
      { date: 'February 1014', title: 'King of Denmark', description: 'Succeeds on Sweyn\'s death at Gainsborough; Cnut is proclaimed by the fleet in England.' },
      { date: '1014', title: 'Refuses to divide Denmark', description: 'Turns down Cnut\'s proposal to share the kingdom, backing his English ambitions instead.' },
      { date: '1015', title: 'The great fleet sails', description: 'Danish resources equip the armada that reconquers England by 1016.' },
      { date: '1018', title: 'Dies', description: 'Dies young and unrecorded; Cnut adds Denmark to England.' }
    ],
    relatedEntries: {
      people: [
        { title: 'Sweyn Forkbeard', type: 'person', slug: 'sweyn-forkbeard', label: 'Father' },
        { title: 'Cnut the Great', type: 'person', slug: 'cnut-the-great', label: 'Brother and successor' },
        { title: 'Harald Bluetooth', type: 'person', slug: 'harald-bluetooth', label: 'Grandfather and namesake' }
      ],
      locations: [ { title: 'Kingdom of England', type: 'location', slug: 'kingdom-of-england', label: 'The prize his refusal pointed Cnut toward' } ],
      events: []
    },
    sources: [
      { title: 'Wikimedia Commons image record — Haelwegh engraving', author: 'Wikimedia Commons', type: 'image source', url: pg('Harald-2.(Harald-VI),1646,Albert-Haelwegh.jpg') },
      { title: 'Harald II of Denmark — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Harald_II_of_Denmark' },
      { title: 'Encomium Emmae Reginae (ed. A. Campbell)', author: 'Anonymous, 11th century', type: 'primary source', note: 'Contains the only narrative of Harald\'s dealings with Cnut in 1014.' }
    ]
  },
  {
    id: 'eric-vi-of-denmark', type: 'character', name: 'Eric VI of Denmark', aliases: ['Eric Menved', 'Erik Menved'],
    born: 1274, died: 1319, deathAge: '45', causeOfDeath: 'Died broken in health and finances; contemporaries connected his decline to the deaths of all fourteen of his children',
    restingPlace: 'St Bendt\'s Church, Ringsted', location: 'Kingdom of Denmark',
    image: fp('Erik_Menved_(Sankt_Bendts_Kirke).jpg'),
    imageInfo: { caption: 'Eric VI Menved and Queen Ingeborg on the celebrated memorial brass over their grave in St Bendt\'s Church, Ringsted.', creator: 'Unknown workshop', date: 'c. 1319–1325', source: 'St Bendt\'s Church, Ringsted — via Wikimedia Commons', sourceUrl: pg('Erik_Menved_(Sankt_Bendts_Kirke).jpg'), note: 'A near-contemporary funerary image, among the finest medieval brasses in Scandinavia.' },
    summary: 'Eric VI Menved (1286–1319) came to Denmark\'s throne as a boy after his father\'s murder at Finderup, fought the archbishops and Norway, and mortgaged the kingdom for Baltic glory that died with his childless line.',
    title: 'king of Denmark', roles: ['King of Denmark'],
    birth: { date: '1274', place: 'Denmark', note: 'Son of Eric V Klipping and Agnes of Brandenburg.' },
    death: { date: '13 November 1319', place: 'Roskilde', note: 'Died childless — all fourteen children by Queen Ingeborg had died — with the realm pawned to creditors.', circumstance: 'Buried under the great brass at Ringsted; his brother Christopher II inherited a mortgaged crown.' },
    quickFacts: { realm: 'Kingdom of Denmark', dynasty: 'House of Estridsen', culture: 'Danish', knownFor: 'Baltic imperial ambitions financed by mortgaging Denmark' },
    isRuler: true,
    succession: { office: 'King of Denmark', predecessor: P('eric-v-of-denmark', 'Eric V Klipping', 'His father, murdered in the barn at Finderup in 1286'), successor: P('christopher-ii-of-denmark', 'Christopher II', 'His brother, who inherited the debts and the disintegration' ) },
    overview: [
      'Eric Menved became king at twelve, the night after the most famous murder in Danish history — his father stabbed fifty-six times at Finderup — and reigned under its shadow: the outlawed magnates blamed for the deed raided Denmark for decades from Norwegian bases.',
      'His mature policy was imperial nostalgia: to rebuild the Valdemars\' Baltic dominion. Rostock, Lübeck\'s submission, lordship over the north German coast — each success was bought with borrowed silver and provinces pawned to Holstein counts and German princes. He crushed a peasant rising in Jutland, died childless in 1319, and left his brother a kingdom already sold.'
    ],
    contentSections: [
      { title: 'Overview', paragraphs: [
        'Eric Menved became king at twelve, the night after the most famous murder in Danish history — his father stabbed fifty-six times at Finderup — and reigned under its shadow: the outlawed magnates blamed for the deed raided Denmark for decades from Norwegian bases.',
        'His mature policy was imperial nostalgia: to rebuild the Valdemars\' Baltic dominion. Rostock, Lübeck\'s submission, lordship over the north German coast — each success was bought with borrowed silver and provinces pawned to Holstein counts and German princes. He crushed a peasant rising in Jutland, died childless in 1319, and left his brother a kingdom already sold.'
      ]},
      { title: 'Birth and early life', paragraphs: [
        'Eric was born in 1274 to Eric V Klipping and Agnes of Brandenburg. On 22 November 1286 his father was murdered in a barn at Finderup; the regency for the boy king — his mother and her Brandenburg kin — fixed guilt at the Nyborg assembly of 1287 on Marshal Stig Andersen and eight companions, who fled to Norway and turned outlaw-corsairs against their own country.',
        'Whether the condemned men were guilty remains one of Danish history\'s open questions; what mattered politically was the standing war it created with Norway, which sheltered the outlaws, and the fortress of Hjelm from which they harried the coasts through Eric\'s youth.'
      ]},
      { title: 'Character and Personality', paragraphs: [
        'The annals and the German town chronicles show a king of genuine magnificence and dangerous appetite for it: the knighting festival at Rostock in 1311, with its tournaments and imported princes, was the talk of the north for a generation — and was held on credit. His byname "Menved", of debated meaning, contemporaries connected to a favourite oath of his.',
        'His conflict with the church displays the harder edge: Archbishop Jens Grand of Lund, kinsman and partisan of the outlaws, was seized in 1294 and held in irons at Søborg until he escaped through the latrine — an outrage that cost Eric papal interdict and a crushing fine before the compromise of 1303. Yet even hostile tradition allows him courage, piety of the conventional kind, and a genuine, doomed constancy: fourteen children born to him and Ingeborg of Sweden, and all fourteen dead — the last, tradition says, dropped from the queen\'s arms from a carriage — a private catastrophe contemporaries read across his later years.'
      ]},
      { title: 'Reign', paragraphs: [
        'The Norwegian war over the outlaws ran hot and cold to 1309, the outlaw base at Hjelm was finally reduced, and the North German project then absorbed everything: Rostock taken under Danish lordship in 1300, the great coalition wars of 1307–1317 that made Eric overlord of Mecklenburg, Rostock, and for a time Lübeck itself. Every campaign was financed by pledging royal lands and revenues — by his death most of Funen and great tracts of Jutland and Zealand stood pawned to Holstein and German creditors.',
        'The bill came home in blood as well: the Jutland peasants and lesser gentry rose against the war taxes in 1313 and were broken at Kolding, punishment castles rising over the rebel districts. His sister Martha\'s marriage made him arbiter of Sweden\'s civil wars, where his brother-in-law King Birger\'s murder of his own brothers at Nyköping in 1317 — an atrocity Danish policy was tangled in — destroyed Danish influence there too.'
      ]},
      { title: 'Death and legacy', paragraphs: [
        'Eric died at Roskilde on 13 November 1319 and was buried at Ringsted among the Valdemars he had emulated, under the magnificent brass that still covers him and Ingeborg. He left no heir and a crown so encumbered that his brother Christopher II had to sign the most humiliating accession charter in Danish history to receive it.',
        'Within a decade of his death the monarchy effectively dissolved into its creditors\' hands — the kingless years of Holstein rule — until his great-nephew Valdemar IV spent a reign redeeming what Eric had pawned. His tomb remains his best monument: the imperial style, executed beautifully, over an empty succession.'
      ]}
    ],
    timeline: [
      { date: '1274', title: 'Born', description: 'Son of Eric V Klipping and Agnes of Brandenburg.' },
      { date: '22 November 1286', title: 'Finderup murder', description: 'His father is assassinated; Eric becomes king at twelve under regency.' },
      { date: '1287', title: 'The outlaws condemned', description: 'Marshal Stig and companions are outlawed at Nyborg and turn corsair from Norwegian bases.' },
      { date: '1294', title: 'Seizes Archbishop Jens Grand', description: 'Imprisons the archbishop of Lund; interdict and papal process follow until 1303.' },
      { date: '1300', title: 'Rostock under Danish lordship', description: 'The Baltic project advances along the German coast.' },
      { date: '1313', title: 'Crushes the Jutland rising', description: 'Peasants and gentry revolting against war taxation are defeated; punishment castles built.' },
      { date: '13 November 1319', title: 'Dies at Roskilde', description: 'Dies childless with the realm mortgaged; buried under the Ringsted brass.' }
    ],
    relatedEntries: {
      people: [
        { title: 'Eric V Klipping', type: 'person', slug: 'eric-v-of-denmark', label: 'Father, murdered at Finderup' },
        { title: 'Christopher II', type: 'person', slug: 'christopher-ii-of-denmark', label: 'Brother and successor to the debts' },
        { title: 'Birger Magnusson', type: 'person', slug: 'birger-magnusson', label: 'Swedish brother-in-law whose Nyköping crime wrecked the northern balance' }
      ],
      locations: [],
      events: []
    },
    sources: [
      { title: 'Wikimedia Commons image record — Ringsted brass', author: 'Wikimedia Commons', type: 'image source', url: pg('Erik_Menved_(Sankt_Bendts_Kirke).jpg') },
      { title: 'Eric VI of Denmark — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Eric_VI_of_Denmark' },
      { title: 'Danmarks historie, vol. 4 (Gyldendal)', author: 'Danish academic survey tradition', type: 'book', note: 'Standard national-history treatment of the Menved era.' }
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
console.log(`Added ${added} French/Scandinavian rulers (of ${people.length}).`)
