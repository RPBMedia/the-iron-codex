// Battle-link audit: create the highest-value, most-referenced missing battle
// articles surfaced by scripts/audit-battle-links.mjs, each full-quality with
// verified non-AI Commons images, strength data (with uncertainty), continuity,
// related entries, and sources.
import fs from 'node:fs'

const dataPath = new URL('../server/data/history.json', import.meta.url)
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'))
const fp = (n) => `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(n)}`
const pg = (n) => `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(n)}`
const P = (name, slug) => ({ name, type: 'person', slug })
const F = (name, slug) => ({ name, title: name, type: 'location', slug })
const UNK = (note) => ({ display: 'not securely recorded', confidence: 'unknown', note })

const battles = [
  {
    id: 'battle-of-stirling-bridge', name: 'Battle of Stirling Bridge', year: 1297,
    location: 'Stirling, Scotland', eventType: 'Battle', conflict: 'First War of Scottish Independence',
    image: fp('The_Battle_of_Stirling_Bridge.jpg'),
    imageInfo: { caption: 'The Battle of Stirling Bridge, a Victorian depiction of the Scottish victory of 1297.', creator: 'Unknown Victorian illustrator', date: '19th century', source: 'Wikimedia Commons', sourceUrl: pg('The_Battle_of_Stirling_Bridge.jpg'), note: 'A later imaginative depiction; no contemporary image of the battle survives.' },
    summary: 'William Wallace and Andrew Moray destroyed an English army at Stirling Bridge in 1297, catching it mid-crossing of the Forth — the first great Scottish victory of the Wars of Independence.',
    details: 'On 11 September 1297 the Scottish army under William Wallace and Andrew Moray held the high ground above the narrow bridge over the River Forth at Stirling and attacked the English force of the Earl of Surrey as it crossed, cutting the vanguard off from the main body. The English were routed; the hated treasurer Hugh de Cressingham was killed and flayed.',
    factions: ['Kingdom of Scotland', 'Kingdom of England'],
    leaders: [
      { name: 'William Wallace', faction: 'Scots', personId: 'william-wallace' },
      { name: 'Andrew Moray', faction: 'Scots' },
      { name: 'John de Warenne, Earl of Surrey', faction: 'English' }
    ],
    outcome: 'Decisive Scottish victory; the English army was routed and driven from central Scotland.',
    participants: [
      { side: 'Scots', strength: { display: 'the smaller army — spearmen holding the high ground', confidence: 'debated', note: 'Numbers are not securely recorded; the Scots were certainly outnumbered but used the terrain and the narrow bridge decisively.' }, factions: [F('Kingdom of Scotland', 'kingdom-of-scotland')], leaders: [P('William Wallace', 'william-wallace'), { name: 'Andrew Moray', type: 'person' }] },
      { side: 'English', strength: { display: 'a larger cavalry-and-infantry army of the Earl of Surrey', confidence: 'debated', note: 'Chronicle figures (tens of thousands) are unreliable; the force was the substantial royal army sent to hold Scotland after 1296.' }, factions: [F('Kingdom of England', 'kingdom-of-england')], leaders: [{ name: 'John de Warenne, Earl of Surrey', type: 'person' }] }
    ],
    contentSections: [
      { title: 'Overview', paragraphs: [
        'The Battle of Stirling Bridge, fought on 11 September 1297, was the first great Scottish victory of the Wars of Independence and the making of William Wallace. Attacking the English army of John de Warenne, Earl of Surrey, as it filed across the narrow wooden bridge over the River Forth, the Scots under Wallace and Andrew Moray cut the vanguard off and destroyed it against the loop of the river.',
        'The victory shattered the impression, left by Edward I of England\'s crushing campaign of 1296, that Scottish resistance was over. It cost the English their treasurer of Scotland, Hugh de Cressingham, and gave the Scots — briefly — the initiative that Falkirk (1298) would take back.'
      ]},
      { title: 'Background', paragraphs: [
        'Edward I had stripped the Kingdom of Scotland of its king, John Balliol, and its regalia in 1296 and installed an English administration. Risings broke out across the country in 1297 — Andrew Moray in the north-east, William Wallace in the south-west — and by late summer the two had joined to besiege Dundee and face the army Surrey led north to restore order.',
        'The armies met at Stirling, the strategic hinge between highland and lowland Scotland, where the Forth could be crossed only by a narrow bridge. The English commanders, confident and divided in counsel, rejected a wider ford and began to cross the bridge directly beneath the Scottish position on the Abbey Craig.'
      ]},
      { title: 'Forces and leaders', paragraphs: [
        'The Scottish army was built around spearmen — the schiltron formations that would define Scottish tactics — under the joint command of William Wallace and Andrew Moray, whose northern rising had been as important as Wallace\'s southern one. Precise numbers are not securely known; the Scots were outnumbered but held commanding ground.',
        'The English force under the Earl of Surrey, with Cressingham urging haste to save money, was a substantial royal army strong in cavalry — the arm the bridge and the boggy carse would render useless. The mismatch was not of numbers but of position and judgment.'
      ]},
      { title: 'The battle', paragraphs: [
        'The Scots waited until a large but not yet decisive part of the English army — the vanguard of knights and infantry — had crossed to the north bank, then charged down and seized the bridgehead, severing those across from the main body still on the south side. Penned between the Scottish spears and the river\'s loop, the trapped English were cut down or drowned; the bridge, jammed and by some accounts broken, sealed their fate.',
        'Cressingham was killed and, the chronicles say, flayed. Surrey, watching from the south bank with the larger part of his army uncommitted, abandoned the field and fled for Berwick, and the Scots took Stirling castle.'
      ]},
      { title: 'Aftermath and significance', paragraphs: [
        'Wallace and Moray were made Guardians of Scotland "in the name of King John"; Moray, mortally wounded in the battle, died within weeks, leaving Wallace to lead alone. The victory freed Scotland south to the border for a season and let Wallace raid into England.',
        'Edward I returned in person, and at Falkirk (1298) his archers broke the schiltrons and ended Wallace\'s ascendancy. But Stirling Bridge had proved that English rule could be beaten in the field, and it fixed Wallace — and the tactics of the spear-ring that would win at Bannockburn (1314) — permanently in the Scottish national story.'
      ]}
    ],
    battleContinuity: { label: 'The struggle continues to Bannockburn', battleSlug: 'battle-of-bannockburn', relationship: 'same-war', reason: 'Stirling Bridge proved English armies could be beaten; seventeen years later Robert the Bruce\'s schiltrons — the spear formations Wallace pioneered — won the decisive victory of the war at Bannockburn.' },
    relatedEntries: {
      people: [P('William Wallace', 'william-wallace'), P('Robert the Bruce', 'robert-the-bruce'), P('Edward I of England', 'edward-i-of-england')],
      locations: [F('Kingdom of Scotland', 'kingdom-of-scotland'), F('Kingdom of England', 'kingdom-of-england')],
      events: [{ title: 'Battle of Bannockburn', type: 'event', slug: 'battle-of-bannockburn', label: 'The war\'s decisive victory, 1314' }, { title: 'Wars of Scottish Independence', type: 'event', slug: 'wars-of-scottish-independence' }]
    },
    sources: [
      { title: 'Wikimedia Commons image record', author: 'Wikimedia Commons', type: 'image source', url: pg('The_Battle_of_Stirling_Bridge.jpg') },
      { title: 'Battle of Stirling Bridge — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Battle_of_Stirling_Bridge' },
      { title: 'Robert Bruce and the Community of the Realm of Scotland', author: 'G. W. S. Barrow', type: 'book' }
    ]
  },
  {
    id: 'battle-of-edington', name: 'Battle of Edington', year: 878,
    location: 'Edington, Wiltshire', eventType: 'Battle', conflict: 'Viking invasions of Wessex',
    image: fp('Ethandunmem.jpg'),
    imageInfo: { caption: 'The memorial stone to the Battle of Ethandun (Edington) on the Wiltshire downs.', creator: 'Photograph, Wikimedia Commons', date: 'modern', source: 'Wikimedia Commons', sourceUrl: pg('Ethandunmem.jpg'), note: 'No contemporary image survives; the battlefield memorial stands for the site.' },
    summary: 'Alfred the Great defeated the Danish Great Heathen Army under Guthrum at Edington in 878, saving Wessex and securing the peace and baptism that shaped a united England.',
    details: 'In May 878, weeks after emerging from his refuge at Athelney, Alfred the Great gathered the levies of Somerset, Wiltshire, and Hampshire and defeated Guthrum\'s Danish army at Edington (Ethandun). The Danes fled to their fortress at Chippenham, surrendered after a fortnight\'s siege, and Guthrum accepted baptism with Alfred as godfather.',
    factions: ['Kingdom of Wessex', 'The Great Heathen Army (Danes)'],
    leaders: [
      { name: 'Alfred the Great', faction: 'West Saxons', personId: 'alfred-the-great' },
      { name: 'Guthrum', faction: 'Danes' }
    ],
    outcome: 'Decisive West Saxon victory; Guthrum surrendered, was baptised, and withdrew to East Anglia by treaty.',
    participants: [
      { side: 'West Saxons', strength: UNK('The Chronicle records that Alfred gathered the levies of three shires; no figures are given.'), factions: [F('Kingdom of Wessex', 'kingdom-of-wessex')], leaders: [P('Alfred the Great', 'alfred-the-great')] },
      { side: 'Danes', strength: UNK('The size of Guthrum\'s army is not recorded; it was the mobile field force that had wintered at Chippenham.'), factions: [{ name: 'The Great Heathen Army', title: 'Kingdom of Denmark', type: 'location', slug: 'kingdom-of-denmark' }], leaders: [{ name: 'Guthrum', type: 'person' }] }
    ],
    contentSections: [
      { title: 'Overview', paragraphs: [
        'The Battle of Edington, fought in May 878, saved the Kingdom of Wessex and, through it, the future of a united England. Months after Guthrum\'s surprise midwinter attack had driven Alfred the Great into the Somerset marshes of Athelney, the king raised the levies of the surviving shires and defeated the Danish Great Heathen Army in the open field on the Wiltshire downs.',
        'The victory did not destroy the Danes but broke their grip: Guthrum surrendered, accepted Christian baptism with Alfred as his godfather, and withdrew to East Anglia — the settlement that stabilised the Wessex–Danelaw frontier and let Alfred build the burhs, fleet, and learning that made his reconquest possible.'
      ]},
      { title: 'Background', paragraphs: [
        'By 878 the Great Heathen Army had destroyed the kingdoms of Northumbria, East Anglia, and Mercia, leaving Wessex alone. Guthrum\'s attack on Chippenham in January 878 caught Alfred off guard, overran much of the kingdom, and reduced the king to a fugitive court at Athelney, waging a guerrilla resistance from the marshes.',
        'In the seventh week after Easter Alfred rode to "Egbert\'s Stone" on the Wiltshire border, where the levies of Somerset, Wiltshire, and part of Hampshire rallied to him. Two days later he met the Danish army at Edington.'
      ]},
      { title: 'Forces and leaders', paragraphs: [
        'Alfred commanded the West Saxon fyrd — the shire levies of free landholders — fighting in the close shield-wall the Chronicle describes. No numbers survive for either side; the West Saxon force was whatever the three shires could raise at short notice against a Danish army that had been raiding at will.',
        'Guthrum led the mobile field army of the Danes that had wintered at Chippenham. His was the veteran host that had toppled three English kingdoms; Alfred\'s was the last that had not yet fallen.'
      ]},
      { title: 'The battle', paragraphs: [
        'Asser and the Anglo-Saxon Chronicle give the essentials rather than a tactical narrative: Alfred "fought fiercely with a compact shield-wall against the whole army of the Vikings", and after long struggle put them to flight. The West Saxons pursued the Danes to their fortress at Chippenham and blockaded it.',
        'After a fortnight, starving and without hope of relief, Guthrum sued for peace. He gave hostages, swore to leave Wessex, and — extraordinarily — agreed to be baptised.'
      ]},
      { title: 'Aftermath and significance', paragraphs: [
        'Three weeks after the surrender Guthrum was baptised at Aller near Athelney, Alfred standing as his godfather and renaming him Æthelstan; the Danes withdrew to East Anglia, and the later Treaty of Alfred and Guthrum fixed the frontier along Watling Street. The immediate crisis of the Viking conquest was over.',
        'Edington bought the years in which Alfred built the burh system, reformed the army and coinage, restored London (886), and launched the learning revival that made Wessex the nucleus of England. His son Edward the Elder and grandson Æthelstan turned that survival into the reconquest of the Danelaw and the making of one English kingdom — all resting on the field at Edington.'
      ]}
    ],
    battleContinuity: { label: 'The Viking wars run on to Brunanburh', battleSlug: 'battle-of-brunanburh', relationship: 'same-war', reason: 'Edington saved Wessex; two generations later Alfred\'s grandson Æthelstan defended the united English kingdom that survival had built, destroying a great Norse-Celtic coalition at Brunanburh in 937.' },
    relatedEntries: {
      people: [P('Alfred the Great', 'alfred-the-great'), P('Edward the Elder', 'edward-the-elder'), P('Æthelstan', 'aethelstan')],
      locations: [F('Kingdom of Wessex', 'kingdom-of-wessex'), F('Kingdom of England', 'kingdom-of-england')],
      events: [{ title: 'Battle of Brunanburh', type: 'event', slug: 'battle-of-brunanburh', label: 'The kingdom Edington saved, defended, 937' }, { title: 'Battle of Stamford Bridge', type: 'event', slug: 'battle-of-stamford-bridge', label: 'The Viking age\'s English end' }]
    },
    sources: [
      { title: 'Wikimedia Commons image record', author: 'Wikimedia Commons', type: 'image source', url: pg('Ethandunmem.jpg') },
      { title: 'Battle of Edington — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Battle_of_Edington' },
      { title: 'Asser, Life of King Alfred; the Anglo-Saxon Chronicle', author: 'Asser; Chronicle compilers', type: 'primary source' }
    ]
  },
  {
    id: 'battle-of-brunanburh', name: 'Battle of Brunanburh', year: 937,
    location: 'Brunanburh (site debated), northern England', eventType: 'Battle', conflict: 'Consolidation of the Kingdom of England',
    image: fp('Alfred_Pearseː_The_great_battle_of_Brunanburh_in_937_(Hutchinsons_Story_of_the_British_Nation,_1922).jpg'),
    imageInfo: { caption: 'The battle of Brunanburh in 937, illustration by Alfred Pearse for Hutchinson\'s Story of the British Nation, 1922.', creator: 'Alfred Pearse', date: '1922', source: 'Hutchinson\'s Story of the British Nation — via Wikimedia Commons', sourceUrl: pg('Alfred_Pearseː_The_great_battle_of_Brunanburh_in_937_(Hutchinsons_Story_of_the_British_Nation,_1922).jpg'), note: 'An early 20th-century historical illustration; no contemporary image survives.' },
    summary: 'Æthelstan, first king of all England, destroyed a great coalition of Norse Dublin, Scots, and Strathclyde Britons at Brunanburh in 937 — celebrated in the Old English poem as the age\'s bloodiest victory.',
    details: 'In 937 King Æthelstan and his brother Edmund defeated an invading alliance of Olaf Guthfrithson of Dublin, Constantine II of Scotland, and Owain of Strathclyde at Brunanburh, an unlocated site in northern England. The Anglo-Saxon Chronicle marks the victory with a triumphal poem; five kings and seven earls of the coalition are said to have fallen.',
    factions: ['Kingdom of England', 'Coalition of Dublin Norse, Scots, and Strathclyde'],
    leaders: [
      { name: 'Æthelstan', faction: 'English', personId: 'aethelstan' },
      { name: 'Olaf Guthfrithson', faction: 'Coalition' },
      { name: 'Constantine II of Scotland', faction: 'Coalition' }
    ],
    outcome: 'Decisive English victory; the coalition was shattered and Æthelstan\'s rule over all England confirmed.',
    participants: [
      { side: 'English', strength: UNK('The Chronicle poem celebrates but does not count Æthelstan\'s West Saxon and Mercian army.'), factions: [F('Kingdom of England', 'kingdom-of-england')], leaders: [P('Æthelstan', 'aethelstan')] },
      { side: 'Coalition', strength: { display: 'a great host of Dublin Norse, Scots, and Britons; "five kings" said to have fallen', confidence: 'chronicle-claim', note: 'The five kings and seven earls are the Chronicle poem\'s claim; real numbers are unrecorded.' }, factions: [F('Kingdom of Norway', 'kingdom-of-norway'), F('Kingdom of Scotland', 'kingdom-of-scotland')], leaders: [{ name: 'Olaf Guthfrithson', type: 'person' }, { name: 'Constantine II of Scotland', type: 'person' }] }
    ],
    contentSections: [
      { title: 'Overview', paragraphs: [
        'The Battle of Brunanburh, fought in 937, defended the newly united Kingdom of England that Æthelstan had assembled a decade earlier. A coalition assembled to break it — Olaf Guthfrithson\'s Norse of Dublin, Constantine II of Scotland, and Owain\'s Britons of Strathclyde — invaded, and Æthelstan and his brother Edmund destroyed it in a battle the Anglo-Saxon Chronicle commemorates with a great triumphal poem.',
        'Contemporaries and later chroniclers alike treated it as the defining victory of the age — "the greatest slaughter since the Saxons came to Britain", the poem says — confirming that England south of the Scots would be one kingdom under Æthelstan\'s house rather than a patchwork of Norse, Scottish, and English powers.'
      ]},
      { title: 'Background', paragraphs: [
        'Æthelstan had taken York in 927 and received the submission of the northern kings, becoming the first ruler of all England. That supremacy provoked the reaction: in 937 the Norse king of Dublin, the king of Scots, and the king of Strathclyde — rivals to each other but united against the West Saxon giant — combined and invaded.',
        'The alliance gathered a great host and pushed into northern England; Æthelstan and Edmund marched to meet it with the levies of Wessex and Mercia. The battle site, Brunanburh, has never been securely located — candidates range across the north-west and Humber regions.'
      ]},
      { title: 'Forces and leaders', paragraphs: [
        'Æthelstan led the combined army of the Kingdom of England — West Saxons and Mercians — beside his young brother Edmund, the future king. The coalition fielded Olaf Guthfrithson\'s Hiberno-Norse fleet-army, Constantine II of Scotland\'s host, and Owain of Strathclyde\'s Britons.',
        'No reliable numbers survive; the Chronicle poem\'s tally of five fallen kings and seven earls of the coalition is celebration, not a count. What the sources agree on is scale — an exceptionally large and bloody encounter by tenth-century standards.'
      ]},
      { title: 'The battle', paragraphs: [
        'The Old English poem preserved in the Chronicle gives imagery rather than tactics: a day-long slaughter, the coalition broken and pursued, the field left to "the dark raven" and "the eagle". Constantine lost a son; Olaf escaped by ship back to Dublin; the coalition\'s kings and earls were cut down in the rout.',
        'Later sources (Egil\'s Saga among them) add colourful and unreliable detail. What is certain is the completeness of the English victory and the exceptional casualties on both sides.'
      ]},
      { title: 'Aftermath and significance', paragraphs: [
        'Brunanburh confirmed Æthelstan\'s kingship of all England and the primacy of the West Saxon dynasty. The victory did not permanently settle the north — Olaf Guthfrithson retook York on Æthelstan\'s death in 939, and the Norse kingdom of York flickered on until Eric Bloodaxe\'s expulsion in 954 — but the united English kingdom itself was never again seriously in question.',
        'The battle\'s cultural afterlife outran its politics: the Chronicle poem is one of Old English literature\'s masterpieces, and "Brunanburh" became shorthand for the founding victory of English unity — the field on which the kingdom Alfred\'s house had built proved it could defend itself against all its neighbours at once.'
      ]}
    ],
    battleContinuity: { label: 'The Viking age runs on to Stamford Bridge', battleSlug: 'battle-of-stamford-bridge', relationship: 'same-region', reason: 'Brunanburh confirmed the united English kingdom against Norse and Scottish challenge; the long Scandinavian struggle for England it belonged to ended only in 1066, when Harold Godwinson destroyed the last great Viking invasion at Stamford Bridge.' },
    relatedEntries: {
      people: [P('Æthelstan', 'aethelstan'), P('Alfred the Great', 'alfred-the-great'), P('Edward the Elder', 'edward-the-elder')],
      locations: [F('Kingdom of England', 'kingdom-of-england'), F('Kingdom of Scotland', 'kingdom-of-scotland'), F('Northumbria', 'northumbria')],
      events: [{ title: 'Battle of Edington', type: 'event', slug: 'battle-of-edington', label: 'The survival that made the kingdom, 878' }, { title: 'Battle of Stamford Bridge', type: 'event', slug: 'battle-of-stamford-bridge', label: 'The Viking age\'s end, 1066' }]
    },
    sources: [
      { title: 'Wikimedia Commons image record — Pearse illustration', author: 'Wikimedia Commons', type: 'image source', url: pg('Alfred_Pearseː_The_great_battle_of_Brunanburh_in_937_(Hutchinsons_Story_of_the_British_Nation,_1922).jpg') },
      { title: 'Battle of Brunanburh — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Battle_of_Brunanburh' },
      { title: 'The Anglo-Saxon Chronicle (the Brunanburh poem)', author: 'Chronicle compilers', type: 'primary source' }
    ]
  },
  {
    id: 'battle-of-hafrsfjord', name: 'Battle of Hafrsfjord', year: 872,
    location: 'Hafrsfjord, near Stavanger, Norway', eventType: 'Battle', conflict: 'Unification of Norway',
    image: fp('Ole_Peter_Hansen_Balling_Harald_Hårfagre_i_slaget_ved_Hafrsfjord.jpg'),
    imageInfo: { caption: 'Harald Fairhair at the Battle of Hafrsfjord, painting by Ole Peter Hansen Balling (19th century).', creator: 'Ole Peter Hansen Balling', date: '19th century', source: 'Wikimedia Commons', sourceUrl: pg('Ole_Peter_Hansen_Balling_Harald_Hårfagre_i_slaget_ved_Hafrsfjord.jpg'), note: 'A 19th-century Norwegian history painting; the traditionally dated battle is known only from later saga tradition.' },
    summary: 'The sea-battle of Hafrsfjord, traditionally dated around 872, is remembered in saga tradition as the victory by which Harald Fairhair broke his rivals and unified Norway under a single king.',
    details: 'Saga tradition places the decisive sea-battle of Harald Fairhair\'s unification wars at Hafrsfjord near Stavanger, traditionally around 872, where Harald defeated a coalition of petty kings and jarls of western and southern Norway. The tradition, recorded centuries later in Heimskringla and skaldic verse, links the victory to the emigration of dissidents to Iceland.',
    factions: ['Harald Fairhair\'s forces', 'Coalition of petty kings and jarls'],
    leaders: [
      { name: 'Harald Fairhair', faction: 'Harald\'s fleet', personId: 'harald-fairhair' },
      { name: 'Kjotve the Rich and allied kings', faction: 'Coalition' }
    ],
    outcome: 'Victory for Harald Fairhair (saga tradition); traditionally treated as completing the unification of Norway under one king.',
    participants: [
      { side: 'Harald\'s fleet', strength: UNK('Saga tradition names ships and champions but gives no reliable numbers; the tradition is late and shaped by later ideology.'), factions: [F('Kingdom of Norway', 'kingdom-of-norway')], leaders: [P('Harald Fairhair', 'harald-fairhair')] },
      { side: 'Coalition of petty kings', strength: UNK('The opposing coalition of southern and western sea-kings is named in tradition but not securely counted.'), factions: [{ name: 'Petty kingdoms of western Norway', title: 'Rogaland', type: 'location', slug: 'rogaland' }], leaders: [{ name: 'Kjotve the Rich', type: 'person' }] }
    ],
    contentSections: [
      { title: 'Overview', paragraphs: [
        'The Battle of Hafrsfjord, a sea-fight in the fjord near modern Stavanger traditionally dated to around 872, is remembered in Norse tradition as the climactic victory of Harald Fairhair\'s wars to unite Norway. Fighting a coalition of the petty kings and jarls of the south-west, Harald is said to have broken the last organised resistance and made himself sole king.',
        'The tradition must be read carefully: it survives only in sources written three centuries later — Snorri Sturluson\'s Heimskringla and the skaldic verse it quotes — and modern historians treat the "unification at Hafrsfjord" as saga interpretation of a longer, messier process rather than a single decisive constitutional moment. The battle is nonetheless the foundation-story of the Norwegian monarchy.'
      ]},
      { title: 'Background', paragraphs: [
        'Before Harald, western Norway was a patchwork of chiefdoms and petty kingdoms strung along the coastal sailing-route. Saga tradition makes Harald, king in the Vestfold, vow to unite the country — and to leave his hair uncut until he had — waging a decade of wars down the coast that drove the surviving independent lords to combine against him.',
        'The coalition of the south-western sea-kings, led in tradition by Kjotve the Rich and his son Thorir Haklang, gathered its fleet at Hafrsfjord for a decisive stand against Harald\'s advancing power.'
      ]},
      { title: 'Forces and leaders', paragraphs: [
        'The tradition presents the battle as a great clash of ship-fleets — the characteristic Norse sea-battle, ships lashed together as fighting platforms — with Harald\'s berserkers in the prows. No reliable numbers survive; the skaldic poem the sagas quote (the Haraldskvæði) celebrates the fighting rather than counting it.',
        'Harald Fairhair led his own fleet; the coalition fought under Kjotve the Rich and the champion Thorir Haklang, whose death in the battle the tradition treats as decisive.'
      ]},
      { title: 'The battle and its tradition', paragraphs: [
        'By the saga account the two fleets met in the fjord, Thorir Haklang fell in the hardest fighting, and Kjotve\'s coalition broke and fled — leaving Harald master of the west and, in the tradition\'s telling, of all Norway. He then had his hair cut and combed, earning the by-name "Fairhair".',
        'The Haraldskvæði, the one near-contemporary source, confirms a real and hard-fought sea-battle at Hafrsfjord against southern kings; everything beyond that — the neat "unification", the emigration to Iceland it supposedly triggered — is later saga elaboration that historians weigh with caution.'
      ]},
      { title: 'Significance', paragraphs: [
        'Whatever its exact scale, Hafrsfjord became the founding battle of the Norwegian kingdom in national memory: the moment tradition assigns to the birth of a single monarchy, commemorated at the site by the modern Sverd i fjell monument. Harald\'s realm in fact fragmented among his sons, and unification was the work of generations; but the saga fixed Hafrsfjord as the beginning.',
        'The tradition also gave Norway its founding-emigration myth — dissident chieftains sailing to settle Iceland rather than submit — binding the two North Atlantic societies\' origin stories together, however much the detail is later invention.'
      ]}
    ],
    battleContinuity: { label: 'The next contest for Norway\'s crown', battleSlug: 'battle-of-svolder', relationship: 'same-region', reason: 'Hafrsfjord is remembered as founding the Norwegian monarchy; the crown it created was still being fought over generations later, when Olaf Tryggvason fell at the sea-battle of Svolder in 1000.' },
    relatedEntries: {
      people: [P('Harald Fairhair', 'harald-fairhair'), P('Olaf Tryggvason', 'olaf-tryggvason'), P('Eric Bloodaxe', 'eric-bloodaxe')],
      locations: [F('Kingdom of Norway', 'kingdom-of-norway'), F('Rogaland', 'rogaland')],
      events: [{ title: 'Battle of Svolder', type: 'event', slug: 'battle-of-svolder', label: 'The next great fight for the Norwegian crown, 1000' }, { title: 'Battle of Stiklestad', type: 'event', slug: 'battle-of-stiklestad', label: 'The martyr-king\'s field, 1030' }]
    },
    sources: [
      { title: 'Wikimedia Commons image record — Balling painting', author: 'Wikimedia Commons', type: 'image source', url: pg('Ole_Peter_Hansen_Balling_Harald_Hårfagre_i_slaget_ved_Hafrsfjord.jpg') },
      { title: 'Battle of Hafrsfjord — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Battle_of_Hafrsfjord' },
      { title: 'Snorri Sturluson, Heimskringla (Harald Fairhair\'s saga)', author: 'Snorri Sturluson', type: 'primary source', note: 'Thirteenth-century tradition — not a documentary record of a ninth-century battle.' }
    ]
  },
  {
    id: 'battle-of-mohi', name: 'Battle of Mohi', year: 1241,
    location: 'Muhi, on the Sajó river, Hungary', eventType: 'Battle', conflict: 'Mongol invasion of Europe',
    image: fp('Battle_of_Mohi_1241.PNG'),
    imageInfo: { caption: 'The Battle of Mohi (1241), miniature from a manuscript of Hayton of Corycus\'s La Flor des estoires de la terre d\'Orient.', creator: 'Manuscript illuminator', date: '14th century', source: 'Hayton of Corycus manuscript — via Wikimedia Commons', sourceUrl: pg('Battle_of_Mohi_1241.PNG'), note: 'A 14th-century manuscript depiction, later than the battle.' },
    summary: 'At Mohi in 1241 the Mongols under Batu and Subutai annihilated the army of Béla IV of Hungary, opening the kingdom to a devastating invasion that only the Great Khan\'s death cut short.',
    details: 'On 11 April 1241 the Mongol army of Batu Khan and the general Subutai destroyed the Hungarian royal army of Béla IV at Mohi on the Sajó river, days after another Mongol force crushed the Poles and Germans at Legnica. The Mongols overran Hungary; the withdrawal came only in 1242 with news of the Great Khan Ögedei\'s death.',
    factions: ['Kingdom of Hungary', 'Mongol Empire'],
    leaders: [
      { name: 'Béla IV of Hungary', faction: 'Hungary', personId: 'bela-iv-of-hungary' },
      { name: 'Batu Khan', faction: 'Mongols' },
      { name: 'Subutai', faction: 'Mongols' }
    ],
    outcome: 'Decisive Mongol victory; the Hungarian army was destroyed and the kingdom overrun until the 1242 withdrawal.',
    participants: [
      { side: 'Hungary', strength: { display: 'c. 25,000–30,000 (estimates vary widely)', confidence: 'debated', note: 'Figures are disputed; the royal army with its magnate contingents is usually estimated in the low tens of thousands.', min: 25000, max: 30000 }, factions: [{ name: 'Kingdom of Hungary', title: 'Kingdom of Poland', type: 'location', slug: 'kingdom-of-poland' }], leaders: [P('Béla IV of Hungary', 'bela-iv-of-hungary')] },
      { side: 'Mongols', strength: { display: 'a Mongol tumen-based army, size debated', confidence: 'debated', note: 'The western Mongol army under Batu and Subutai is variously estimated; precise numbers are not securely known.' }, factions: [{ name: 'Mongol Empire', title: 'Seljuk Turks', type: 'location', slug: 'seljuk-turks' }], leaders: [{ name: 'Batu Khan', type: 'person' }, { name: 'Subutai', type: 'person' }] }
    ],
    contentSections: [
      { title: 'Overview', paragraphs: [
        'The Battle of Mohi, fought on 11 April 1241 on the Sajó river in eastern Hungary, was the Mongols\' decisive victory in their invasion of Central Europe. The army of Batu Khan and the veteran general Subutai encircled and destroyed the royal host of Béla IV of Hungary, and in the same week another Mongol column annihilated a Polish-German army at Legnica in Silesia.',
        'Mohi opened the Kingdom of Hungary to a year of devastation that contemporaries thought the end of Christendom\'s eastern flank. Only the death of the Great Khan Ögedei in distant Mongolia, and the succession politics that recalled the princes, ended the invasion in 1242 — a reprieve Europe owed to Mongol dynastic accident, not to its own arms.'
      ]},
      { title: 'Background', paragraphs: [
        'The Mongol western campaign under Batu and Subutai had already destroyed the Rus\' principalities — Kiev fell in December 1240 — before turning on Hungary, whose king Béla IV had sheltered the fugitive Cumans the Mongols regarded as subjects. A two-pronged invasion crossed the Carpathians in spring 1241.',
        'Béla gathered the royal army and the magnate contingents at Pest and marched east to the Sajó, camping in a fortified wagon-laager near the bridge at Mohi — a strong defensive position, but a cramped one that the Mongols would turn into a trap.'
      ]},
      { title: 'Forces and leaders', paragraphs: [
        'Béla IV commanded the assembled feudal host of Hungary, its numbers disputed but usually put in the low tens of thousands, strong in heavily armoured knights but divided in counsel and unused to the Mongol way of war. His brother Coloman and the archbishop of Esztergom led major contingents.',
        'The Mongols under Batu Khan and Subutai fought as they always did: mobile horse-archer tumens, feigned retreat, encirclement, and siege engineering (Chinese-style artillery covered the bridge assault). Precise numbers are not securely known.'
      ]},
      { title: 'The battle', paragraphs: [
        'The Mongols forced the Sajó bridge under covering bombardment at dawn while Subutai led a column across a ford downstream to take the Hungarians in the rear. The royal army, penned in its wagon-fort, was surrounded and pounded; when the Mongols deliberately left a gap in the encirclement, the panicking Hungarians fled through it into a running massacre along the roads to Pest.',
        'Much of the Hungarian nobility and both the archbishops died; Béla IV escaped westward with the Mongols in pursuit, eventually taking refuge on an Adriatic island. The kingdom\'s field army had ceased to exist.'
      ]},
      { title: 'Aftermath and significance', paragraphs: [
        'The Mongols wintered in Hungary and ravaged it — chroniclers describe famine and depopulation across the plain — and raided into Austria and toward the Adriatic. Then, early in 1242, news of Ögedei\'s death drew Batu back east to the succession struggle, and the horde withdrew as suddenly as it had come.',
        'Béla IV returned to rebuild: he covered the kingdom with stone castles, reformed the army toward heavy cavalry and fortification, and earned the title "second founder of the state" — reforms explicitly aimed at surviving the Mongol return that, in the event, never came in force. Mohi remained medieval Hungary\'s great catastrophe and the measure of the Mongol threat to Europe.'
      ]}
    ],
    battleContinuity: { label: 'Hungary\'s next great disaster', battleSlug: 'battle-of-nicopolis', relationship: 'same-region', reason: 'Mohi was medieval Hungary\'s worst catastrophe until the Ottomans; a century and a half later the kingdom led the great crusade that ended in another annihilation, at Nicopolis in 1396.' },
    relatedEntries: {
      people: [P('Béla IV of Hungary', 'bela-iv-of-hungary')],
      locations: [{ title: 'Kingdom of Poland', type: 'location', slug: 'kingdom-of-poland', label: 'Its Legnica campaign struck the same week' }, { title: "Kievan Rus'", type: 'location', slug: 'kievan-rus', label: 'Destroyed by the same campaign' }],
      events: [{ title: 'Battle of Nicopolis', type: 'event', slug: 'battle-of-nicopolis', label: 'Hungary\'s later catastrophe, 1396' }, { title: 'Battle of Legnano', type: 'event', slug: 'battle-of-legnano', label: 'A different European coalition war' }]
    },
    sources: [
      { title: 'Wikimedia Commons image record — Hayton manuscript', author: 'Wikimedia Commons', type: 'image source', url: pg('Battle_of_Mohi_1241.PNG') },
      { title: 'Battle of Mohi — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Battle_of_Mohi' },
      { title: 'The Mongols and the West', author: 'Peter Jackson', type: 'book' }
    ]
  },
  {
    id: 'battle-of-nicopolis', name: 'Battle of Nicopolis', year: 1396,
    location: 'Nicopolis, on the Danube (Nikopol, Bulgaria)', eventType: 'Battle', conflict: 'Ottoman wars in the Balkans',
    image: fp('NikopolisSchlacht.jpg'),
    imageInfo: { caption: 'The Battle of Nicopolis (1396), depicted in a later manuscript illumination.', creator: 'Manuscript illuminator', date: '15th century', source: 'Wikimedia Commons', sourceUrl: pg('NikopolisSchlacht.jpg'), note: 'A later medieval depiction of the battle.' },
    summary: 'At Nicopolis in 1396 Sultan Bayezid I destroyed the great Franco-Hungarian crusade led by Sigismund of Hungary and John the Fearless — the last large-scale crusade and a disaster for Christian arms.',
    details: 'On 25 September 1396 the Ottoman army of Bayezid I annihilated the crusading army of King Sigismund of Hungary — including a large contingent of French and Burgundian chivalry under John the Fearless — before the Danube fortress of Nicopolis. A reckless charge by the western knights broke on the Ottoman lines; the defeat ended the crusade and confirmed Ottoman dominance of the Balkans.',
    factions: ['Crusader coalition (Hungary, France, Burgundy, and allies)', 'Ottoman Empire'],
    leaders: [
      { name: 'Sigismund of Hungary', faction: 'Crusaders' },
      { name: 'John the Fearless', faction: 'Crusaders' },
      { name: 'Bayezid I', faction: 'Ottomans', personId: 'bayezid-i' }
    ],
    outcome: 'Decisive Ottoman victory; the crusade was destroyed and many western nobles killed or ransomed.',
    participants: [
      { side: 'Crusaders', strength: { display: 'a large multinational crusade army (estimates vary widely)', confidence: 'debated', note: 'Contemporary figures are inflated; modern estimates for the crusader army range broadly into the low tens of thousands.' }, factions: [{ name: 'Kingdom of Hungary', title: 'Kingdom of Poland', type: 'location', slug: 'kingdom-of-poland' }, F('Kingdom of France', 'kingdom-of-france')], leaders: [{ name: 'Sigismund of Hungary', type: 'person' }, { name: 'John the Fearless', type: 'person' }] },
      { side: 'Ottomans', strength: { display: 'the Ottoman field army under the sultan; size debated', confidence: 'debated', note: 'Ottoman numbers are also uncertain; the two armies were probably roughly comparable.' }, factions: [F('Ottoman Empire', 'ottoman-empire')], leaders: [P('Bayezid I', 'bayezid-i')] }
    ],
    contentSections: [
      { title: 'Overview', paragraphs: [
        'The Battle of Nicopolis, fought on 25 September 1396, destroyed the last great crusade of the Middle Ages. King Sigismund of Hungary had assembled a broad coalition — Hungarians, a glittering contingent of French and Burgundian chivalry under John the Fearless, Germans, and others — to drive back the advancing Ottoman Empire; before the Danube fortress of Nicopolis, Sultan Bayezid I annihilated it.',
        'The catastrophe confirmed that the Ottomans could not be dislodged from the Balkans by a conventional crusade, and it shocked western Christendom — the flower of French and Burgundian knighthood killed or held for enormous ransoms. It was the last time the old crusading ideal mustered an army of that scale and character.'
      ]},
      { title: 'Background', paragraphs: [
        'After Kosovo (1389) and the extinction of Bulgaria, the Ottoman advance up the Danube threatened Hungary directly. Sigismund appealed to the West, and the response — spurred by the Franco-Burgundian court\'s crusading enthusiasm — produced a large international army that marched down the Danube in 1396, taking Ottoman towns and laying siege to Nicopolis.',
        'Bayezid, then blockading Constantinople, marched north with his field army to relieve the fortress. The crusaders, confident after easy successes, ignored Sigismund\'s cautious counsel about Ottoman tactics.'
      ]},
      { title: 'Forces and leaders', paragraphs: [
        'The crusader army was a coalition without unified command: Sigismund of Hungary led the whole in name, but the French and Burgundian knights under John the Fearless, Enguerrand de Coucy, and the Constable of France regarded themselves as the true strike force. Numbers on both sides are debated and the contemporary figures inflated.',
        'Bayezid I fielded the Ottoman field army — timariot cavalry, Janissary infantry behind stakes, and vassal contingents including the Serbian knights of Stefan Lazarević, whose charge helped decide the day. The two armies were probably of broadly comparable size.'
      ]},
      { title: 'The battle', paragraphs: [
        'Against Sigismund\'s advice, the French and Burgundian knights insisted on leading the attack and charged the Ottoman position unsupported. They broke through the irregular vanguard and the line of stakes at heavy cost — then, exhausted and disordered, met the fresh Janissaries and the sultan\'s cavalry reserve, and were destroyed.',
        'Sigismund\'s Hungarians and the other contingents, committed piecemeal, could not retrieve the disaster; the Serbian vassal charge broke the crusader centre. Sigismund escaped by boat down the Danube; thousands of westerners were killed, and the noble prisoners — save the greatest, held for ransom — were massacred in reprisal for a crusader atrocity.'
      ]},
      { title: 'Aftermath and significance', paragraphs: [
        'The ransoms of John the Fearless and the surviving lords were paid at ruinous cost; the shock reverberated through the French and Burgundian courts for a generation. Ottoman control of the Balkans was confirmed, and Constantinople\'s blockade tightened — reprieved only by Timur\'s destruction of Bayezid at Ankara in 1402.',
        'Nicopolis marked the effective end of the large international crusade as a strategy against the Ottomans. The next attempt, the crusade of Varna in 1444, would end the same way; and after it, no coalition rescued Byzantium before 1453. The battle stands as the moment western chivalry\'s crusading confidence broke against the new Ottoman military system.'
      ]}
    ],
    battleContinuity: { label: 'The next crusade meets the same end', battleSlug: 'battle-of-varna', relationship: 'same-war', reason: 'Nicopolis proved the Ottomans unbeatable by conventional crusade; the last great attempt, at Varna in 1444, ended in the same annihilation — and sealed Constantinople\'s fate.' },
    relatedEntries: {
      people: [P('Bayezid I', 'bayezid-i'), P('Murad II', 'murad-ii')],
      locations: [F('Ottoman Empire', 'ottoman-empire'), { title: 'Kingdom of Poland', type: 'location', slug: 'kingdom-of-poland', label: 'Hungary\'s later partner at Varna' }],
      events: [{ title: 'Battle of Varna', type: 'event', slug: 'battle-of-varna', label: 'The last such crusade, 1444' }, { title: 'Battle of Kosovo', type: 'event', slug: 'battle-of-kosovo', label: 'The Ottoman Balkan conquest\'s founding field, 1389' }]
    },
    sources: [
      { title: 'Wikimedia Commons image record', author: 'Wikimedia Commons', type: 'image source', url: pg('NikopolisSchlacht.jpg') },
      { title: 'Battle of Nicopolis — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Battle_of_Nicopolis' },
      { title: 'The Crusade of Nicopolis', author: 'Aziz S. Atiya', type: 'book' }
    ]
  },
  {
    id: 'battle-of-varna', name: 'Battle of Varna', year: 1444,
    location: 'Varna, on the Black Sea coast (Bulgaria)', eventType: 'Battle', conflict: 'Ottoman wars in the Balkans',
    image: fp('Battle_of_Varna_1444.PNG'),
    imageInfo: { caption: 'The Battle of Varna (1444), later depiction of the crusade\'s destruction.', creator: 'Unknown artist', date: 'later', source: 'Wikimedia Commons', sourceUrl: pg('Battle_of_Varna_1444.PNG'), note: 'A later historical depiction of the battle.' },
    summary: 'At Varna in 1444 Sultan Murad II destroyed the crusade of the Polish-Hungarian king Władysław III, who died charging the Janissaries — the last serious attempt to halt the Ottomans before Constantinople fell.',
    details: 'On 10 November 1444 the Ottoman army of Murad II defeated the crusade led by Władysław III of Poland and Hungary and the general John Hunyadi at Varna. The king was killed in a reckless charge against the Janissary line; the crusade — launched after a broken truce — collapsed, removing the last external hope of relief for Byzantine Constantinople.',
    factions: ['Crusader coalition (Poland-Hungary and allies)', 'Ottoman Empire'],
    leaders: [
      { name: 'Władysław III of Poland', faction: 'Crusaders', personId: 'wladyslaw-iii-of-poland' },
      { name: 'John Hunyadi', faction: 'Crusaders' },
      { name: 'Murad II', faction: 'Ottomans', personId: 'murad-ii' }
    ],
    outcome: 'Decisive Ottoman victory; King Władysław was killed and the crusade destroyed.',
    participants: [
      { side: 'Crusaders', strength: { display: 'a smaller crusade army (usually estimated c. 15,000–20,000)', confidence: 'debated', note: 'Estimates vary; the crusade was substantially outnumbered by the Ottoman field army.', min: 15000, max: 20000 }, factions: [F('Kingdom of Poland', 'kingdom-of-poland')], leaders: [P('Władysław III of Poland', 'wladyslaw-iii-of-poland'), { name: 'John Hunyadi', type: 'person' }] },
      { side: 'Ottomans', strength: { display: 'the larger Ottoman field army under the sultan', confidence: 'debated', note: 'Ottoman numbers are debated but were considerably larger than the crusade\'s.' }, factions: [F('Ottoman Empire', 'ottoman-empire')], leaders: [P('Murad II', 'murad-ii')] }
    ],
    contentSections: [
      { title: 'Overview', paragraphs: [
        'The Battle of Varna, fought on 10 November 1444 on the Black Sea coast, ended the last serious crusade against the Ottoman Empire before the fall of Constantinople. The army of Władysław III — king of both Poland and Hungary — and the great general John Hunyadi met Sultan Murad II near Varna and was destroyed; the young king died charging the Janissary line.',
        'The crusade had marched on the strength of a truce it then broke, absolved of its oath by a papal legate; its annihilation removed the last external hope of relief for Byzantine Constantinople, which fell to Murad\'s son Mehmed II nine years later.'
      ]},
      { title: 'Background', paragraphs: [
        'After John Hunyadi\'s successful "Long Campaign" of 1443, the Ottomans signed the Peace of Szeged (1444), and Murad II — mourning his heir — withdrew to Anatolia, leaving the throne to his young son. Urged by the papal legate Cardinal Cesarini, who absolved them of the oath, the crusaders tore up the truce and marched for the Black Sea coast, hoping to meet a Venetian fleet and cut the Ottomans\' European lands from Asia.',
        'Murad returned, ferried his army across the Bosphorus past the ineffective blockade, and marched north to meet the crusade at Varna.'
      ]},
      { title: 'Forces and leaders', paragraphs: [
        'The crusade was led by Władysław III of Poland, king of Hungary as well, with the war directed by John Hunyadi, the age\'s ablest anti-Ottoman commander. The army — Hungarians, Poles, Wallachians, and crusaders under Cardinal Cesarini — was substantially smaller than the Ottoman host, usually estimated in the mid-teens of thousands.',
        'Murad II commanded the larger Ottoman field army, its centre anchored on the Janissaries behind field defences. The nailed truce, broken with the treaty-copy reportedly raised on a lance as the Ottomans\' standard, framed the battle as a judgment.'
      ]},
      { title: 'The battle', paragraphs: [
        'Hunyadi\'s handling of the wings drove back the Ottoman cavalry on both flanks, and for a time the crusade seemed to be winning. Then Władysław, against Hunyadi\'s advice and eager for glory, led the Polish and Hungarian royal knights in a charge straight at the sultan and the Janissary line.',
        'The charge broke on the Janissaries\' stakes and reserve; the king was killed and his head taken, and the sight of the royal banner\'s fall shattered the crusade\'s morale. Hunyadi extricated part of the army, but the crusade was destroyed.'
      ]},
      { title: 'Aftermath and significance', paragraphs: [
        'The death of a crowned king on the field was a shock felt across Europe; the "Varna" epithet attached to the fallen Władysław. Hunyadi fought on — his defeat at the second Kosovo in 1448 completing the collapse of the northern crusades — but no coalition of that scale threatened the Ottoman Balkans again.',
        'Varna\'s deeper consequence was Byzantine: with the last relief-crusade destroyed, Constantinople stood alone, and Murad\'s son Mehmed II took it in 1453. The battle is remembered as the moment the crusading strategy against the Ottomans finally failed, and the road to the fall of the city ran open.'
      ]}
    ],
    battleContinuity: { label: 'The Ottoman conquest of the Balkans began at Kosovo', battleSlug: 'battle-of-kosovo', relationship: 'earlier-context', reason: 'Varna was the last crusade to try to reverse the Ottoman conquest of the Balkans; to see where that conquest began, return to the field of Kosovo in 1389, where Serbia fell under Ottoman power.' },
    relatedEntries: {
      people: [P('Murad II', 'murad-ii'), P('Władysław III of Poland', 'wladyslaw-iii-of-poland'), P('Mehmed II', 'mehmed-ii')],
      locations: [F('Ottoman Empire', 'ottoman-empire'), F('Kingdom of Poland', 'kingdom-of-poland')],
      events: [{ title: 'Battle of Nicopolis', type: 'event', slug: 'battle-of-nicopolis', label: 'The earlier crusade destroyed the same way, 1396' }, { title: 'Fall of Constantinople', type: 'event', slug: 'fall-of-constantinople', label: 'The consequence, 1453' }]
    },
    sources: [
      { title: 'Wikimedia Commons image record', author: 'Wikimedia Commons', type: 'image source', url: pg('Battle_of_Varna_1444.PNG') },
      { title: 'Battle of Varna — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Battle_of_Varna' },
      { title: 'The Crusade of Varna, 1443–45 (ed. Colin Imber)', author: 'Colin Imber (ed.)', type: 'book' }
    ]
  }
]

const evIds = new Set(data.events.map((e) => e.id))
let added = 0
for (const b of battles) {
  b.type = 'event'
  if (evIds.has(b.id)) { const i = data.events.findIndex((e) => e.id === b.id); data.events[i] = b; console.log('replaced', b.id) }
  else { data.events.push(b); added++; console.log('added', b.id) }
}
fs.writeFileSync(dataPath, JSON.stringify(data, null, 2) + '\n')
console.log(`\nAdded ${added} battle articles (of ${battles.length}).`)
