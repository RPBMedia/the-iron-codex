// Batch 1: English rulers needed as succession links (11 articles).
import fs from 'node:fs'

const dataPath = new URL('../server/data/history.json', import.meta.url)
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'))

const fp = (n) => `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(n)}`
const pg = (n) => `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(n)}`
const P = (personSlug, displayName, note) => ({ personSlug, displayName, ...(note ? { note } : {}) })
const UN = (displayName, note) => ({ displayName, ...(note ? { note } : {}) })

const ROLL_NOTE = 'A thirteenth/fourteenth-century imagined portrait from a royal genealogical roll — no contemporary likeness survives.'

const people = [
  {
    id: 'aethelred-i-of-wessex', type: 'character', name: 'Æthelred I of Wessex', aliases: ['Aethelred I', 'Ethelred I'],
    born: 845, died: 871, deathAge: 'about 26', causeOfDeath: 'Died after Easter 871, possibly of wounds from the fighting against the Danes',
    restingPlace: 'Wimborne Minster, Dorset', location: 'Kingdom of Wessex',
    image: fp('Æthelred_-_MS_Royal_14_B_VI.jpg'),
    imageInfo: { caption: 'Æthelred I in a fourteenth-century genealogical roll of English kings.', creator: 'Unknown illuminator', date: '14th century', source: 'British Library, Royal MS 14 B VI — via Wikimedia Commons', sourceUrl: pg('Æthelred_-_MS_Royal_14_B_VI.jpg'), note: ROLL_NOTE },
    summary: 'Æthelred I was king of Wessex from 865 to 871, leading the West Saxon resistance through the first years of the Great Heathen Army\'s invasion alongside his younger brother Alfred.',
    title: 'king of Wessex', roles: ['King of Wessex'],
    birth: { date: 'c. 845', place: 'Wessex', note: 'Fourth son of King Æthelwulf; his exact birthplace is not recorded.' },
    death: { date: 'April 871', place: 'Wessex', note: 'Died shortly after Easter 871, during the "year of nine battles" against the Danes.', circumstance: 'Died weeks after the battle of Meretun — whether of wounds or illness the sources do not say — and was buried at Wimborne Minster.' },
    quickFacts: { realm: 'Kingdom of Wessex', dynasty: 'House of Wessex', culture: 'Anglo-Saxon Christian', knownFor: 'leading Wessex in the first campaigns against the Great Heathen Army' },
    isRuler: true,
    succession: { office: 'King of Wessex', predecessor: UN('Æthelberht of Wessex', 'His elder brother, third of Æthelwulf\'s sons to hold the crown in turn'), successor: P('alfred-the-great', 'Alfred the Great', 'His youngest brother, chosen over Æthelred\'s infant sons') },
    overview: [
      'Æthelred I ruled Wessex from 865 to 871 — precisely the years in which the Great Heathen Army landed in East Anglia, destroyed the kingdoms of Northumbria and East Anglia, and finally turned on Wessex itself. His reign was consumed by that emergency.',
      'He fought the campaign of 870–871 with his brother Alfred at his side: Reading, Ashdown, Basing, Meretun. He died just after Easter 871 in the middle of the war, and because his sons were small children, the crown passed to Alfred.'
    ],
    contentSections: [
      { title: 'Overview', paragraphs: [
        'Æthelred I ruled Wessex from 865 to 871 — precisely the years in which the Great Heathen Army landed in East Anglia, destroyed the kingdoms of Northumbria and East Anglia, and finally turned on Wessex itself. His reign was consumed by that emergency.',
        'He fought the campaign of 870–871 with his brother Alfred at his side: Reading, Ashdown, Basing, Meretun. He died just after Easter 871 in the middle of the war, and because his sons were small children, the crown passed to Alfred.'
      ]},
      { title: 'Birth and early life', paragraphs: [
        'Æthelred was born around 845, the fourth of King Æthelwulf\'s five sons. The family\'s unusual arrangement — the brothers succeeding one another in turn rather than father to son — was designed to keep an adult on the throne while the Danish threat grew, and Æthelred received the crown in 865 on the death of his brother Æthelberht.',
        'Nothing certain is recorded of his childhood. He attested charters as a boy and grew up in a court that had already endured decades of coastal raiding, in which royal authority meant above all the ability to raise and lead the fyrd.'
      ]},
      { title: 'Character and Personality', paragraphs: [
        'The sources remember Æthelred chiefly through one anecdote. At Ashdown in January 871, according to Asser — Alfred\'s biographer, writing a generation later and naturally inclined to favour his subject — Æthelred refused to leave his tent until the priest had finished Mass, while the Danes advanced and Alfred was forced to open the attack alone. Asser frames it as piety verging on hazard; the battle was nonetheless won, and the story preserved both readings.',
        'Beyond that, his conduct suggests a dogged, dutiful king rather than a brilliant one: he kept the West Saxon army in the field through a winter of repeated defeats without the kingdom breaking, and he maintained the fraternal partnership with Alfred that the succession scheme required. Later West Saxon tradition treated him as near-saintly; his cult at Wimborne, though never formalised, reflects that memory.'
      ]},
      { title: 'The war of 870–871', paragraphs: [
        'In late 870 the Great Heathen Army under Halfdan seized Reading and began probing into Wessex. Æthelred and Alfred struck back within days at the battle of Englefield\'s aftermath and then assaulted Reading itself, where they were repulsed with loss.',
        'Four days later the brothers won the battle of Ashdown on the Berkshire downs, killing a Danish king and five jarls — the first major English victory over the great army. It bought weeks, not safety: defeats followed at Basing and at Meretun, and a second Danish fleet arrived in the spring. Æthelred died just after Easter with the war at its lowest point.'
      ]},
      { title: 'Death and succession', paragraphs: [
        'Æthelred died in April 871, whether from wounds taken at Meretun or from illness the Anglo-Saxon Chronicle does not record. He was buried at Wimborne Minster in Dorset, where his memory was later kept as that of a martyr-king fallen in the defence of Christian Wessex.',
        'His sons Æthelhelm and Æthelwold were infants, and the witan passed the crown to Alfred under the family compact. Æthelwold would contest that settlement violently after Alfred\'s death in 899, allying with the Danes of Northumbria — a reminder that the smooth fraternal succession of 871 carried a generation-long cost.'
      ]},
      { title: 'Legacy', paragraphs: [
        'Æthelred\'s reign is overshadowed by his brother\'s, but the shape of Alfred\'s achievement was set in Æthelred\'s war: Wessex alone of the English kingdoms met the great army with its royal house, army, and church intact. The five brutal engagements of 870–871 proved the kingdom could absorb defeat without dissolving.',
        'His burial place at Wimborne became a point of dynastic memory, and his descendants through Æthelwold\'s line vanished from history after 902 — leaving the whole future of the English monarchy to run through Alfred.'
      ]}
    ],
    timeline: [
      { date: 'c. 845', title: 'Born', description: 'Fourth son of King Æthelwulf of Wessex and Osburh.' },
      { date: '865', title: 'Becomes king of Wessex', description: 'Succeeds his brother Æthelberht just as the Great Heathen Army lands in East Anglia.' },
      { date: 'late 870', title: 'Danes seize Reading', description: 'Halfdan\'s army fortifies Reading as a base for the invasion of Wessex; Æthelred\'s assault on the camp is repulsed.' },
      { date: 'January 871', title: 'Battle of Ashdown', description: 'With Alfred, defeats the Danish army on the Berkshire downs; King Bagsecg and five jarls are killed.' },
      { date: 'early 871', title: 'Defeats at Basing and Meretun', description: 'The Danish army, reinforced by a summer fleet, wins the next engagements as the war grinds on.' },
      { date: 'April 871', title: 'Dies', description: 'Dies shortly after Easter and is buried at Wimborne Minster; his brother Alfred takes the crown.' }
    ],
    relatedEntries: {
      people: [ { title: 'Alfred the Great', type: 'person', slug: 'alfred-the-great', label: 'Brother and successor' } ],
      locations: [ { title: 'Kingdom of England', type: 'location', slug: 'kingdom-of-england', label: 'The realm his house later united' } ],
      events: [ { title: 'Battle of Stamford Bridge', type: 'event', slug: 'battle-of-stamford-bridge', label: 'The last act of the Viking wars his reign opened' } ]
    },
    sources: [
      { title: 'Wikimedia Commons image record — Royal MS 14 B VI', author: 'Wikimedia Commons', type: 'image source', url: pg('Æthelred_-_MS_Royal_14_B_VI.jpg') },
      { title: 'Æthelred I of Wessex — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/%C3%86thelred_I_of_Wessex' },
      { title: 'Asser, Life of King Alfred (ed. Keynes & Lapidge, Alfred the Great)', author: 'Asser', type: 'primary source', note: 'Near-contemporary account of the campaigns of 870–871 and the Ashdown Mass anecdote.' }
    ]
  },
  {
    id: 'edward-the-elder', type: 'character', name: 'Edward the Elder', aliases: ['Eadweard'],
    born: 874, died: 924, deathAge: 'about 50', causeOfDeath: 'Died at Farndon-on-Dee shortly after suppressing a revolt at Chester',
    restingPlace: 'New Minster, Winchester', location: 'Kingdom of Wessex',
    image: fp('Edward_the_Elder_-_MS_Royal_14_B_V.jpg'),
    imageInfo: { caption: 'Edward the Elder in a thirteenth-century genealogical roll of English kings.', creator: 'Unknown illuminator', date: 'c. 1300', source: 'British Library, Royal MS 14 B V — via Wikimedia Commons', sourceUrl: pg('Edward_the_Elder_-_MS_Royal_14_B_V.jpg'), note: ROLL_NOTE },
    summary: 'Edward the Elder, king of the Anglo-Saxons from 899 to 924, conquered the Danish-held east midlands and East Anglia with his sister Æthelflæd, extending West Saxon power over most of England south of the Humber.',
    title: 'king of the Anglo-Saxons', roles: ['King of the Anglo-Saxons'],
    birth: { date: 'c. 874', place: 'Wessex', note: 'Eldest son of Alfred the Great and Ealhswith; his birthplace is not recorded.' },
    death: { date: '17 July 924', place: 'Farndon-on-Dee, Mercia', note: 'Died days after putting down a Mercian-Welsh revolt at Chester.', circumstance: 'Died on campaign at Farndon, and was buried in the New Minster at Winchester which he had founded.' },
    quickFacts: { realm: 'Kingdom of the Anglo-Saxons', dynasty: 'House of Wessex', culture: 'Anglo-Saxon Christian', knownFor: 'conquering the southern Danelaw and building the burh network with Æthelflæd' },
    isRuler: true,
    succession: { office: 'King of the Anglo-Saxons', predecessor: P('alfred-the-great', 'Alfred the Great', 'His father; Edward first defeated his cousin Æthelwold\'s Danish-backed challenge'), successor: UN('Æthelstan', 'His eldest son, first king to rule all England') },
    overview: [
      'Edward the Elder turned his father Alfred\'s successful defence of Wessex into systematic conquest. Between 909 and 920, in partnership with his sister Æthelflæd, Lady of the Mercians, he took the whole southern Danelaw — Essex, East Anglia, and the Five Boroughs — behind an advancing line of fortified burhs.',
      'By his death in 924 every ruler south of the Humber, and by their formal submission several beyond it, acknowledged his lordship. His son Æthelstan completed the work by taking York.'
    ],
    contentSections: [
      { title: 'Overview', paragraphs: [
        'Edward the Elder turned his father Alfred\'s successful defence of Wessex into systematic conquest. Between 909 and 920, in partnership with his sister Æthelflæd, Lady of the Mercians, he took the whole southern Danelaw — Essex, East Anglia, and the Five Boroughs — behind an advancing line of fortified burhs.',
        'By his death in 924 every ruler south of the Humber, and by their formal submission several beyond it, acknowledged his lordship. His son Æthelstan completed the work by taking York.'
      ]},
      { title: 'Birth and early life', paragraphs: [
        'Edward was born around 874, the eldest son of Alfred and Ealhswith, in the years when his father was fighting for Wessex\'s survival. He was educated at court alongside his sister Æthelflæd and commanded troops young: at Farnham in 893 he led the flying column that ran down a Danish raiding army and penned it on Thorney island.',
        'His path to the throne was contested. On Alfred\'s death in 899 his cousin Æthelwold — son of King Æthelred I, passed over as an infant in 871 — seized Wimborne, fled to the Danes of Northumbria, and returned at the head of a Danish army. The challenge ended only when Æthelwold was killed in battle at the Holme in 902.'
      ]},
      { title: 'Character and Personality', paragraphs: [
        'The Anglo-Saxon Chronicle, effectively a court record for these years, presents Edward through his actions — methodical, relentless, and unglamorous. Where Alfred\'s biographer gave posterity an inner life, no Asser wrote for Edward, and William of Malmesbury later summed up the comparison that stuck: inferior to his father in letters, superior in the glory of his power.',
        'What the record shows is a planner. The conquest of the Danelaw was not won in famous pitched battles but by a grinding sequence of fortress-building, garrison work, and negotiated submissions, each burh consolidating the last season\'s gains before the next advance. That patience, sustained over a decade, argues a commander of unusual discipline — and the repeated submissions of Danish armies on terms suggest an enemy who found him worth surrendering to rather than fighting.'
      ]},
      { title: 'The conquest of the Danelaw', paragraphs: [
        'The decisive blow came early: at Tettenhall in 910 the combined Mercian and West Saxon armies destroyed a great Northumbrian raiding army, killing its kings and freeing Edward\'s southern campaigns from the threat of northern intervention.',
        'From 911 Edward and Æthelflæd advanced in tandem — she from the Mercian side with fortresses at Tamworth, Stafford, and Derby; he up the eastern flank with burhs at Hertford, Witham, Buckingham, Bedford, and Maldon. Danish Essex submitted in 913, East Anglia and Cambridge in 917 after the failure of a coordinated Danish counter-offensive, and Stamford, Nottingham, and Lincoln followed. When Æthelflæd died in 918, Edward took direct control of Mercia, absorbing the double kingdom his father had only imagined.'
      ]},
      { title: 'Death', paragraphs: [
        'In 924 Chester rose in revolt in alliance with the Welsh. Edward suppressed the rising, and died at Farndon-on-Dee on 17 July, still on campaign — a fitting end for a king who had spent nearly his whole reign in the field.',
        'He was buried in the New Minster at Winchester, his own foundation. The succession briefly split along the fault line of his two kingdoms — Ælfweard in Wessex, Æthelstan in Mercia — until Ælfweard\'s death within weeks left Æthelstan as sole king.'
      ]},
      { title: 'Legacy', paragraphs: [
        'Edward\'s burh network permanently changed English governance: the fortified towns he and Æthelflæd planted became shire centres, mints, and markets, and the shire structure of the midlands still traces his campaigns. The military conquest carried an administrative revolution inside it.',
        'Historians have long treated him as the most underrated of the West Saxon kings — the indispensable middle term between Alfred\'s survival and Æthelstan\'s kingdom of all England.'
      ]}
    ],
    timeline: [
      { date: 'c. 874', title: 'Born', description: 'Eldest son of Alfred the Great and Ealhswith.' },
      { date: '893', title: 'Victory at Farnham', description: 'Leads the pursuit that catches a Danish raiding army at Farnham and besieges it on Thorney island.' },
      { date: '899', title: 'Succeeds Alfred', description: 'Becomes king of the Anglo-Saxons; his cousin Æthelwold revolts and flees to the Danes.' },
      { date: '902', title: 'Battle of the Holme', description: 'Æthelwold\'s Danish-backed challenge ends with his death in battle against the Kentish levies.' },
      { date: '910', title: 'Battle of Tettenhall', description: 'His and Æthelflæd\'s armies destroy the Northumbrian host, killing its kings and opening the Danelaw to conquest.' },
      { date: '917–918', title: 'The Danelaw falls', description: 'East Anglia, Essex, and the Five Boroughs submit as the burh lines close; on Æthelflæd\'s death Edward takes Mercia under direct rule.' },
      { date: '17 July 924', title: 'Dies at Farndon', description: 'Dies days after crushing the Chester revolt; buried in the New Minster, Winchester.' }
    ],
    relatedEntries: {
      people: [ { title: 'Alfred the Great', type: 'person', slug: 'alfred-the-great', label: 'Father and predecessor' } ],
      locations: [ { title: 'Kingdom of England', type: 'location', slug: 'kingdom-of-england', label: 'The kingdom his conquests made possible' } ],
      events: [ { title: 'Battle of Stamford Bridge', type: 'event', slug: 'battle-of-stamford-bridge', label: 'The end of the Viking age his wars began to close' } ]
    },
    sources: [
      { title: 'Wikimedia Commons image record — Royal MS 14 B V', author: 'Wikimedia Commons', type: 'image source', url: pg('Edward_the_Elder_-_MS_Royal_14_B_V.jpg') },
      { title: 'Edward the Elder — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Edward_the_Elder' },
      { title: 'Edward the Elder, 899–924 (ed. N. J. Higham & D. H. Hill)', author: 'N. J. Higham and D. H. Hill (eds.)', type: 'book', note: 'The standard modern collection on the reign.' }
    ]
  },
  {
    id: 'edmund-ironside', type: 'character', name: 'Edmund Ironside', aliases: ['Edmund II'],
    born: 990, died: 1016, deathAge: 'about 26', causeOfDeath: 'Died 30 November 1016, weeks after the peace of Alney; contemporary sources do not record the cause, later chronicles allege murder',
    restingPlace: 'Glastonbury Abbey', location: 'Kingdom of England',
    image: fp('Edmund_Ironside_-_MS_Royal_14_B_VI.jpg'),
    imageInfo: { caption: 'Edmund Ironside in a fourteenth-century genealogical roll of English kings.', creator: 'Unknown illuminator', date: '14th century', source: 'British Library, Royal MS 14 B VI — via Wikimedia Commons', sourceUrl: pg('Edmund_Ironside_-_MS_Royal_14_B_VI.jpg'), note: ROLL_NOTE },
    summary: 'Edmund Ironside, king of England for seven months in 1016, fought five pitched battles against Cnut\'s invasion in a single campaigning season, earning his byname before defeat at Assandun forced the division of the kingdom.',
    title: 'king of England', roles: ['King of England'],
    birth: { date: 'c. 990', place: 'England', note: 'Third son of Æthelred the Unready and his first wife Ælfgifu; exact birthplace unrecorded.' },
    death: { date: '30 November 1016', place: 'London or Oxford', note: 'Died weeks after the treaty of Alney divided England between him and Cnut.', circumstance: 'The earliest sources record only his death; the lurid murder stories are later embellishment. His death gave Cnut the whole kingdom.' },
    quickFacts: { realm: 'Kingdom of England', dynasty: 'House of Wessex', culture: 'Anglo-Saxon Christian', knownFor: 'the five-battle campaign of 1016 against Cnut' },
    isRuler: true,
    succession: { office: 'King of England', predecessor: UN('Æthelred the Unready', 'His father, whose death in April 1016 left London to proclaim Edmund while much of the nobility treated with Cnut'), successor: P('cnut-the-great', 'Cnut the Great', 'Under the treaty of Alney, the survivor of the two kings took all England') },
    overview: [
      'Edmund Ironside compressed a whole reign\'s worth of war into seven months of 1016. Proclaimed king by London on his father\'s death in April, he raised army after army in a kingdom exhausted by decades of Danegeld and betrayal, and fought Cnut\'s invasion to a standstill — Penselwood, Sherston, the relief of London, Brentford, Otford.',
        'Betrayed at Assandun by the ealdorman Eadric Streona\'s flight, he treated with Cnut on the island of Alney: Edmund kept Wessex, Cnut took the north, and the survivor would take all. Edmund died on 30 November, and the Danish conquest of England was complete.'
    ],
    contentSections: [
      { title: 'Overview', paragraphs: [
        'Edmund Ironside compressed a whole reign\'s worth of war into seven months of 1016. Proclaimed king by London on his father\'s death in April, he raised army after army in a kingdom exhausted by decades of Danegeld and betrayal, and fought Cnut\'s invasion to a standstill — Penselwood, Sherston, the relief of London, Brentford, Otford.',
        'Betrayed at Assandun by the ealdorman Eadric Streona\'s flight, he treated with Cnut on the island of Alney: Edmund kept Wessex, Cnut took the north, and the survivor would take all. Edmund died on 30 November, and the Danish conquest of England was complete.'
      ]},
      { title: 'Birth and early life', paragraphs: [
        'Edmund was born around 990, third son of Æthelred the Unready. The deaths of his elder brothers by 1014 made him heir at the moment the dynasty\'s fortunes collapsed: Sweyn Forkbeard\'s conquest drove Æthelred into Norman exile that winter, and the family returned only on Sweyn\'s sudden death.',
        'In 1015 Edmund broke openly with his father\'s court. When Eadric Streona murdered the leading thegns of the Five Boroughs, Edmund married the widow of one of them, seized their lands, and raised the north — positioning himself as the war party\'s leader against a regime that had bought off the Danes for a generation.'
      ]},
      { title: 'Character and Personality', paragraphs: [
        'The byname "Ironside", which the Anglo-Saxon Chronicle says the English gave him for his valour, is itself the best-attested judgment of contemporaries. In a political class notorious for treachery and collapse, Edmund\'s distinguishing quality was that he kept fighting: five armies raised and led in one season, in a kingdom that had not won a major battle in a generation.',
        'The chronicle tradition pairs him constantly with his opposite, Eadric Streona — the arch-traitor whose desertions frame Edmund\'s courage. Norse praise-poetry honoured him too; the skalds of Cnut\'s own court remembered the campaign as hard-fought against a worthy king. Whether he possessed any political gifts beyond war was never tested; he was dead within weeks of the peace.'
      ]},
      { title: 'The war of 1016', paragraphs: [
        'Æthelred died on 23 April 1016 with Cnut\'s fleet moving on London. The citizens and the councillors present chose Edmund; a larger assembly at Southampton chose Cnut. Edmund rode west, raised Wessex, and fought drawn battles at Penselwood and Sherston, then broke the Danish siege of London, driving Cnut\'s army from its lines and winning again at Brentford and Otford as the Danes fell back into Kent.',
        'At Assandun in Essex on 18 October, with the whole English levy engaged, Eadric Streona — lately readmitted to Edmund\'s side — fled the field with his division, and the English army was destroyed; the flower of the English nobility died there. Edmund, wounded by some accounts, met Cnut at Alney near Deerhurst and divided the realm.'
      ]},
      { title: 'Death', paragraphs: [
        'Edmund died on 30 November 1016. The earliest and best sources — the Chronicle, Thietmar of Merseburg — record the fact without a cause, and a young man\'s death after a season of wounds and exhaustion needs no villain. The elaborate privy-murder stories belong to twelfth-century storytelling.',
        'He was buried beside his grandfather King Edgar at Glastonbury. Cnut took the whole kingdom, judicially murdered Eadric Streona within the year, and sent Edmund\'s infant sons into an exile that ended, two generations later, with Edgar Ætheling\'s futile candidacy in 1066.'
      ]},
      { title: 'Legacy', paragraphs: [
        'Edmund became the exemplary lost cause of English memory: the king who proved the conquest was not inevitable. Cnut himself cultivated the memory, visiting Glastonbury to honour his "brother" and thereby folding Edmund\'s legitimacy into his own.',
        'Through Edmund\'s exiled son Edward and granddaughter Margaret of Scotland, his blood returned to the English throne in 1100 by Margaret\'s daughter\'s marriage to Henry I — making Edmund an ancestor of every later English monarch.'
      ]}
    ],
    timeline: [
      { date: 'c. 990', title: 'Born', description: 'Third son of Æthelred the Unready and Ælfgifu of York.' },
      { date: '1015', title: 'Breaks with the court', description: 'After Eadric Streona\'s murders at Oxford, marries Sigeferth\'s widow and takes the submission of the Five Boroughs against his father\'s wishes.' },
      { date: '23 April 1016', title: 'Proclaimed king', description: 'London chooses Edmund on Æthelred\'s death while Cnut\'s fleet closes on the city.' },
      { date: 'summer 1016', title: 'The five battles', description: 'Fights Cnut at Penselwood and Sherston, relieves London, and wins at Brentford and Otford.' },
      { date: '18 October 1016', title: 'Assandun', description: 'Eadric Streona deserts mid-battle; the English army and much of the nobility are destroyed.' },
      { date: 'autumn 1016', title: 'Peace of Alney', description: 'Meets Cnut on Alney island: Edmund keeps Wessex, Cnut the north, the survivor to take all.' },
      { date: '30 November 1016', title: 'Dies', description: 'Dies at about twenty-six; Cnut becomes king of all England.' }
    ],
    relatedEntries: {
      people: [
        { title: 'Cnut the Great', type: 'person', slug: 'cnut-the-great', label: 'Rival, treaty partner, and successor' },
        { title: 'Sweyn Forkbeard', type: 'person', slug: 'sweyn-forkbeard', label: 'Whose conquest framed Edmund\'s youth' }
      ],
      locations: [ { title: 'Kingdom of England', type: 'location', slug: 'kingdom-of-england' } ],
      events: [ { title: 'Battle of Stamford Bridge', type: 'event', slug: 'battle-of-stamford-bridge', label: 'The later end of the Anglo-Scandinavian struggle' } ]
    },
    sources: [
      { title: 'Wikimedia Commons image record — Royal MS 14 B VI', author: 'Wikimedia Commons', type: 'image source', url: pg('Edmund_Ironside_-_MS_Royal_14_B_VI.jpg') },
      { title: 'Edmund Ironside — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Edmund_Ironside' },
      { title: 'The Anglo-Saxon Chronicle, s.a. 1016', author: 'Anglo-Saxon Chronicle', type: 'primary source', note: 'The fullest near-contemporary narrative of the 1016 campaign.' }
    ]
  },
  {
    id: 'harold-harefoot', type: 'character', name: 'Harold Harefoot', aliases: ['Harold I of England'],
    born: 1016, died: 1040, deathAge: 'about 24', causeOfDeath: 'Died at Oxford after an illness; the sources give no detail',
    restingPlace: 'St Clement Danes, London, after Harthacnut exhumed him from Westminster', location: 'Kingdom of England',
    image: fp('Harold_Harefoot_-_MS_Royal_14_B_VI.jpg'),
    imageInfo: { caption: 'Harold Harefoot in a fourteenth-century genealogical roll of English kings.', creator: 'Unknown illuminator', date: '14th century', source: 'British Library, Royal MS 14 B VI — via Wikimedia Commons', sourceUrl: pg('Harold_Harefoot_-_MS_Royal_14_B_VI.jpg'), note: ROLL_NOTE },
    summary: 'Harold Harefoot, son of Cnut by Ælfgifu of Northampton, ruled England first as regent and then as King Harold I (1035–1040) while his half-brother Harthacnut was held in Denmark.',
    title: 'king of England', roles: ['King of England'],
    birth: { date: 'c. 1016', place: 'England', note: 'Son of Cnut and Ælfgifu of Northampton; hostile tradition questioned his paternity, a standard slur against his mother\'s party.' },
    death: { date: '17 March 1040', place: 'Oxford', note: 'Died as Harthacnut prepared an invasion fleet.', circumstance: 'Died after an unrecorded illness; Harthacnut later had his body dug up from Westminster and flung into a fen, whence it was recovered and reburied in London.' },
    quickFacts: { realm: 'Kingdom of England', dynasty: 'House of Knýtlinga (Denmark)', culture: 'Anglo-Danish', knownFor: 'seizing the English throne while Harthacnut was detained in Denmark' },
    isRuler: true,
    succession: { office: 'King of England', predecessor: P('cnut-the-great', 'Cnut the Great', 'His father; the succession split between Cnut\'s sons by different mothers'), successor: P('harthacnut', 'Harthacnut', 'His half-brother, whose invasion fleet was ready when Harold died') },
    overview: [
      'Harold Harefoot\'s short reign was the working-out of Cnut\'s untidy inheritance. Cnut\'s death in 1035 left two sons by two mothers: Harthacnut, the designated heir, pinned in Denmark by the threat of Magnus of Norway; and Harold, on the spot in England with his mother Ælfgifu of Northampton and the backing of Earl Leofric and the fleet.',
      'Chosen first as regent at the Oxford assembly of 1035, Harold was full king by 1037. His reign\'s darkest act was the seizure and blinding of the ætheling Alfred, Æthelred\'s son, in 1036 — a crime that shadowed Earl Godwin, his agent in it, for the rest of his career.'
    ],
    contentSections: [
      { title: 'Overview', paragraphs: [
        'Harold Harefoot\'s short reign was the working-out of Cnut\'s untidy inheritance. Cnut\'s death in 1035 left two sons by two mothers: Harthacnut, the designated heir, pinned in Denmark by the threat of Magnus of Norway; and Harold, on the spot in England with his mother Ælfgifu of Northampton and the backing of Earl Leofric and the fleet.',
        'Chosen first as regent at the Oxford assembly of 1035, Harold was full king by 1037. His reign\'s darkest act was the seizure and blinding of the ætheling Alfred, Æthelred\'s son, in 1036 — a crime that shadowed Earl Godwin, his agent in it, for the rest of his career.'
      ]},
      { title: 'Birth and early life', paragraphs: [
        'Harold was born around 1016 to Ælfgifu of Northampton, Cnut\'s first, "handfast" wife, whose midland family had been mauled by Æthelred\'s regime. His nickname, first recorded later, was taken to refer to speed in the hunt.',
        'While Emma of Normandy\'s son Harthacnut was groomed for Denmark, Harold and his brother Sweyn were deployed by Cnut through their mother — Sweyn and Ælfgifu ruling Norway in the early 1030s so harshly that the Norwegians rose and expelled them, an experience of his mother\'s regency style that Harold presumably remembered.'
      ]},
      { title: 'Character and Personality', paragraphs: [
        'Harold had the misfortune to be remembered chiefly by his enemies. The Encomium Emmae Reginae, written for his rival\'s mother, paints him as an impious usurper who shunned church services; the C manuscript of the Anglo-Saxon Chronicle doubted he was Cnut\'s son at all. These are the standard weapons of eleventh-century faction, not description.',
        'His actions read differently: he outmanoeuvred Queen Emma, Earl Godwin, and the designated heir from a standing start, converted a regency into a crowned kingship within two years, and held England quiet enough that the sources record almost no internal disturbance. That suggests political competence of a high order in a very young man — exercised, in the Alfred affair, with the ruthlessness the age expected.'
      ]},
      { title: 'Reign', paragraphs: [
        'The Oxford meeting of 1035 split the realm functionally: Harold held the north and the machinery of government as regent, while Emma sat at Winchester keeping Wessex — and the treasury — for the absent Harthacnut. By 1037, with Harthacnut still detained, "Harold was everywhere chosen king", as the Chronicle puts it, and Emma was driven into exile at Bruges.',
        'The turning point was the affair of the æthelings in 1036. Alfred, the younger of Æthelred\'s exiled sons in Normandy, crossed to England — to visit his mother, said his partisans; to bid for the crown, evidently feared the regime. Intercepted by Earl Godwin at Guildford, his companions were killed or mutilated and Alfred was blinded so brutally that he died at Ely. The deed secured Harold\'s throne and became the enduring stain on everyone associated with it.'
      ]},
      { title: 'Death', paragraphs: [
        'Harold died at Oxford on 17 March 1040, aged about twenty-four, just as Harthacnut and Emma had assembled an invasion fleet at Bruges. England thus changed kings without a battle: the fleet sailed in peacefully at midsummer.',
        'Harthacnut\'s first recorded act was to have his half-brother\'s body dragged out of its Westminster grave, beheaded by some accounts, and thrown into the marshes — recovered later, tradition says, by London fishermen and reburied in the Danish church of St Clement Danes.'
      ]},
      { title: 'Legacy', paragraphs: [
        'Harold\'s five years demonstrated how completely Cnut\'s Anglo-Danish state ran on the earls and the fleet rather than on designated heirs: possession of England, not testamentary right, made the king. The lesson was not lost on the men of 1066.',
        'The Alfred affair had the longer echo. It gave Edward the Confessor a lifelong grievance against Godwin\'s house, and Norman propaganda a ready-made atrocity with which to blacken Harold Godwinson\'s family a generation later.'
      ]}
    ],
    timeline: [
      { date: 'c. 1016', title: 'Born', description: 'Son of Cnut and Ælfgifu of Northampton, born around the year of his father\'s English conquest.' },
      { date: '1035', title: 'Regent of England', description: 'The Oxford assembly makes Harold regent while Harthacnut is held in Denmark; Emma keeps Wessex.' },
      { date: '1036', title: 'The ætheling Alfred is destroyed', description: 'Æthelred\'s son Alfred is seized at Guildford by Earl Godwin, blinded, and dies at Ely.' },
      { date: '1037', title: 'Chosen king everywhere', description: 'Crowned as sole king; Emma of Normandy is driven into exile at Bruges.' },
      { date: '17 March 1040', title: 'Dies at Oxford', description: 'Dies with Harthacnut\'s invasion fleet ready at Bruges; the crown passes without a fight.' },
      { date: 'summer 1040', title: 'Posthumous vengeance', description: 'Harthacnut exhumes and desecrates his body, later reburied at St Clement Danes.' }
    ],
    relatedEntries: {
      people: [
        { title: 'Cnut the Great', type: 'person', slug: 'cnut-the-great', label: 'Father' },
        { title: 'Harthacnut', type: 'person', slug: 'harthacnut', label: 'Half-brother, rival, and successor' },
        { title: 'Edward the Confessor', type: 'person', slug: 'edward-the-confessor', label: 'Whose brother Alfred was destroyed under Harold\'s regime' }
      ],
      locations: [ { title: 'Kingdom of England', type: 'location', slug: 'kingdom-of-england' } ],
      events: []
    },
    sources: [
      { title: 'Wikimedia Commons image record — Royal MS 14 B VI', author: 'Wikimedia Commons', type: 'image source', url: pg('Harold_Harefoot_-_MS_Royal_14_B_VI.jpg') },
      { title: 'Harold Harefoot — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Harold_Harefoot' },
      { title: 'Encomium Emmae Reginae (ed. A. Campbell)', author: 'Anonymous, 11th century', type: 'primary source', note: 'Hostile contemporary account written for Emma of Normandy; essential and partisan.' }
    ]
  },
  {
    id: 'william-ii-of-england', type: 'character', name: 'William II of England', aliases: ['William Rufus'],
    born: 1057, died: 1100, deathAge: 'about 43', causeOfDeath: 'Killed by an arrow while hunting in the New Forest, 2 August 1100',
    restingPlace: 'Winchester Cathedral', location: 'Kingdom of England',
    image: fp('William_Rufus.jpg'),
    imageInfo: { caption: 'William Rufus as imagined in a later medieval manuscript.', creator: 'Unknown illuminator', date: 'later medieval', source: 'Wikimedia Commons', sourceUrl: pg('William_Rufus.jpg'), note: 'No contemporary portrait of Rufus survives; this is a later imagined likeness.' },
    summary: 'William II "Rufus", second Norman king of England (1087–1100), beat down rebellion and Scottish and Welsh challenges, wrung Normandy from his crusading brother, and died with an arrow in his chest in the New Forest.',
    title: 'king of England', roles: ['King of England'],
    birth: { date: 'c. 1057', place: 'Normandy', note: 'Third son of William the Conqueror and Matilda of Flanders.' },
    death: { date: '2 August 1100', place: 'New Forest, Hampshire', note: 'Shot through by an arrow while hunting; Walter Tirel was blamed and fled abroad.', circumstance: 'Whether accident or assassination has been argued ever since; his brother Henry rode straight to Winchester for the treasury and was crowned within three days.' },
    quickFacts: { realm: 'Kingdom of England', dynasty: 'House of Normandy', culture: 'Anglo-Norman', knownFor: 'holding the Conquest settlement together and his violent death in the New Forest' },
    isRuler: true,
    succession: { office: 'King of England', predecessor: P('william-the-conqueror', 'William the Conqueror', 'His father, who left England to Rufus and Normandy to Robert Curthose'), successor: UN('Henry I', 'His younger brother, crowned within days of the New Forest shooting') },
    overview: [
      'William Rufus inherited England in 1087 under his father\'s division — the kingdom to him, Normandy to his elder brother Robert Curthose — and spent his reign mastering the consequences. He crushed the great baronial rising of 1088 that backed Robert, then reversed the pressure until Robert pawned Normandy to him in 1096 to go on the First Crusade.',
      'Contemporary churchmen loathed him: he kept sees vacant to milk their revenues and drove Archbishop Anselm into exile. Soldiers followed him gladly. He died unexplained in the New Forest, and his brother Henry took the crown at speed.'
    ],
    contentSections: [
      { title: 'Overview', paragraphs: [
        'William Rufus inherited England in 1087 under his father\'s division — the kingdom to him, Normandy to his elder brother Robert Curthose — and spent his reign mastering the consequences. He crushed the great baronial rising of 1088 that backed Robert, then reversed the pressure until Robert pawned Normandy to him in 1096 to go on the First Crusade.',
        'Contemporary churchmen loathed him: he kept sees vacant to milk their revenues and drove Archbishop Anselm into exile. Soldiers followed him gladly. He died unexplained in the New Forest, and his brother Henry took the crown at speed.'
      ]},
      { title: 'Birth and early life', paragraphs: [
        'Born in Normandy around 1057, Rufus — the byname from his red face — was the Conqueror\'s third son and the favourite. His eldest brother Robert rebelled twice against their father; Rufus stayed loyal, fighting at his side, and was rewarded on the deathbed at Rouen in 1087 with the greater prize: the crowned kingdom rather than the ancestral duchy.',
        'He was knighted and trained by Lanfranc, the great archbishop who had anchored his father\'s regime, and it was Lanfranc who crowned him at Westminster within three weeks of the Conqueror\'s death — speed that forestalled any move for Robert.'
      ]},
      { title: 'Character and Personality', paragraphs: [
        'Almost everything written about Rufus\'s character was written by monks he had taxed, and it shows. William of Malmesbury and Orderic Vitalis describe a stocky, red-faced, stammering king, blasphemous and mocking, presiding over a court whose fashions and morals scandalised the cloister; Eadmer, Anselm\'s biographer, made him nearly diabolical. The absence of wife, mistress, or child left his private life to hostile speculation from that day to this.',
        'The same sources concede, almost against their will, the qualities his own world prized: open-handed generosity to soldiers, flawless courage, and a knightly sense of largesse — the chivalric virtues in their rawest form. Mercenaries across France held him the best of paymasters. The monastic verdict and the military one describe the same man from opposite sides of a real divide: Rufus paid the warrior class and squeezed the praying one.'
      ]},
      { title: 'Reign', paragraphs: [
        'The test came at once. In 1088 half the Anglo-Norman baronage, led by his uncle Odo of Bayeux, rose to reunite England and Normandy under the pliable Robert. Rufus appealed to the English shire levies with promises of good law and lighter taxes, took Rochester, and broke the revolt — then spent the next decade turning England\'s wealth against Normandy until Robert mortgaged him the duchy for 10,000 marks in 1096 and left for Jerusalem.',
        'On his other frontiers he was relentless: Cumbria annexed and Carlisle founded in 1092; the Scottish crown effectively in his gift after Malcolm III fell at Alnwick in 1093; the Welsh marches pushed forward behind new castles. The machinery that paid for it all — vacant bishoprics farmed, geld driven hard by his minister Ranulf Flambard — is what the chronicles could not forgive; the quarrel over church rights sent Anselm of Canterbury into exile in 1097.'
      ]},
      { title: 'Death in the New Forest', paragraphs: [
        'On the evening of 2 August 1100 Rufus rode out hunting in the New Forest and was shot through the chest by an arrow loosed — all accounts agree — by or near Walter Tirel, lord of Poix. The court scattered; Tirel fled to France protesting his innocence for the rest of his life; and the king\'s body came to Winchester on a charcoal-burner\'s cart.',
        'His younger brother Henry, in the hunting party that day, rode straight for the treasury at Winchester and was crowned at Westminster on 5 August — three days, start to finish. Robert Curthose was still on the road home from crusade. No inquest was ever held; historians remain genuinely divided between hunting accident, which was common enough, and a murder whose one clear beneficiary moved with remarkable readiness.'
      ]},
      { title: 'Legacy', paragraphs: [
        'Rufus consolidated the Conquest at its most fragile point, proving in 1088 that the Anglo-Norman kingdom could survive its own baronage, and his Cumbrian and Welsh gains fixed borders that outlasted him by centuries. Westminster Hall, which he built and thought "not half large enough", still stands as the one physical monument of his reign.',
        'The manner of his death, and the monks\' portrait of the king it ended, made him medieval England\'s standing example of impious kingship punished — the Rufus Stone in the New Forest still marks the traditional spot. Modern historians, working from the record rather than the sermon, have largely rebuilt him as one of the most effective of the Norman kings.'
      ]}
    ],
    timeline: [
      { date: 'c. 1057', title: 'Born', description: 'Third son of William the Conqueror and Matilda of Flanders, born in Normandy.' },
      { date: 'September 1087', title: 'Crowned king of England', description: 'Receives England under his father\'s deathbed division; crowned by Lanfranc within three weeks.' },
      { date: '1088', title: 'Crushes the barons\' revolt', description: 'Defeats the rising for Robert Curthose led by Odo of Bayeux, rallying the English levies to the crown.' },
      { date: '1092', title: 'Takes Cumbria', description: 'Annexes Carlisle and settles the north-west, fixing the Scottish border on the Solway.' },
      { date: '1096', title: 'Normandy in pawn', description: 'Robert mortgages the duchy to him for 10,000 marks and departs on the First Crusade.' },
      { date: '1097', title: 'Anselm goes into exile', description: 'The quarrel over church councils and dues drives Archbishop Anselm from England.' },
      { date: '2 August 1100', title: 'Killed in the New Forest', description: 'Dies with an arrow through the chest; Henry seizes the treasury and crown within three days.' }
    ],
    relatedEntries: {
      people: [
        { title: 'William the Conqueror', type: 'person', slug: 'william-the-conqueror', label: 'Father and predecessor' },
        { title: 'Harold Godwinson', type: 'person', slug: 'harold-godwinson', label: 'Whose fall at Hastings created the realm Rufus inherited' }
      ],
      locations: [ { title: 'Kingdom of England', type: 'location', slug: 'kingdom-of-england' }, { title: 'Duchy of Normandy', type: 'location', slug: 'duchy-of-normandy', label: 'Held in pawn from 1096' } ],
      events: [ { title: 'Battle of Hastings', type: 'event', slug: 'battle-of-hastings', label: 'The conquest that made his house royal' } ]
    },
    sources: [
      { title: 'Wikimedia Commons image record', author: 'Wikimedia Commons', type: 'image source', url: pg('William_Rufus.jpg') },
      { title: 'William II of England — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/William_II_of_England' },
      { title: 'William Rufus', author: 'Frank Barlow', type: 'book', note: 'The standard modern biography.' }
    ]
  },
  {
    id: 'henry-ii-of-england', type: 'character', name: 'Henry II of England', aliases: ['Henry Plantagenet', 'Henry FitzEmpress'],
    born: 1133, died: 1189, deathAge: '56', causeOfDeath: 'Died at Chinon, broken by fever and the rebellion of his sons',
    restingPlace: 'Fontevraud Abbey', location: 'Kingdom of England',
    image: fp('Church_of_Fontevraud_Abbey_Henry_II_effigy.jpg'),
    imageInfo: { caption: 'Tomb effigy of Henry II at Fontevraud Abbey, carved around the turn of the thirteenth century.', creator: 'Unknown sculptor', date: 'c. 1200', source: 'Fontevraud Abbey — via Wikimedia Commons', sourceUrl: pg('Church_of_Fontevraud_Abbey_Henry_II_effigy.jpg'), note: 'A near-contemporary funerary effigy, idealised rather than a portrait from life.' },
    summary: 'Henry II ruled an empire from the Scottish border to the Pyrenees (1154–1189), rebuilt royal government and the common law after the Anarchy, destroyed his friend Becket, and was destroyed in turn by his own sons.',
    title: 'king of England', roles: ['King of England', 'Duke of Normandy and Aquitaine', 'Count of Anjou'],
    birth: { date: '5 March 1133', place: 'Le Mans, Maine', note: 'Son of Empress Matilda, heiress of Henry I, and Geoffrey Plantagenet, count of Anjou.' },
    death: { date: '6 July 1189', place: 'Chinon, Anjou', note: 'Died two days after accepting humiliating terms from Philip II and his son Richard.', circumstance: 'Legend says he turned his face to the wall on learning his favourite son John had joined the rebellion; he was carried to Fontevraud for burial.' },
    quickFacts: { realm: 'Angevin empire (England, Normandy, Anjou, Aquitaine)', dynasty: 'House of Plantagenet', culture: 'Anglo-Norman / Angevin', knownFor: 'founding the Plantagenet dynasty, the common law, and the Becket conflict' },
    isRuler: true,
    succession: { office: 'King of England', predecessor: UN('Stephen of Blois', 'The treaty of Winchester (1153) ended the Anarchy by recognising Henry as Stephen\'s heir'), successor: P('richard-the-lionheart', 'Richard the Lionheart', 'His eldest surviving son, in rebellion against him at the end') },
    overview: [
      'Henry II was twenty-one when the treaty ending the Anarchy made him king of England, already duke of Normandy, count of Anjou, and — by his marriage to Eleanor of Aquitaine — master of half of France. For thirty-five years he ran that sprawling inheritance at a famous, furious pace.',
      'His legal reforms — itinerant justices, standard writs, juries of presentment — laid the foundations of the English common law. His attempt to master the church broke on Thomas Becket\'s martyrdom in 1170; his attempt to master his family broke on the rebellions of his sons, the last of which killed him.'
    ],
    contentSections: [
      { title: 'Overview', paragraphs: [
        'Henry II was twenty-one when the treaty ending the Anarchy made him king of England, already duke of Normandy, count of Anjou, and — by his marriage to Eleanor of Aquitaine — master of half of France. For thirty-five years he ran that sprawling inheritance at a famous, furious pace.',
        'His legal reforms — itinerant justices, standard writs, juries of presentment — laid the foundations of the English common law. His attempt to master the church broke on Thomas Becket\'s martyrdom in 1170; his attempt to master his family broke on the rebellions of his sons, the last of which killed him.'
      ]},
      { title: 'Birth and early life', paragraphs: [
        'Henry was born at Le Mans in 1133 to the Empress Matilda, Henry I\'s disinherited heiress, and Geoffrey Plantagenet of Anjou. His boyhood was the civil war: shipped to England at nine as a figurehead for his mother\'s cause, leading a comic-opera mercenary raid at fourteen that his enemy King Stephen ended up paying to send home.',
        'The luck of 1151–1153 transformed him: his father\'s death gave him Anjou, his marriage to the newly divorced Eleanor of Aquitaine gave him the south, and Stephen\'s heir Eustace died just as Henry\'s final English campaign forced the treaty of Winchester. He was crowned in December 1154, the first undisputed succession in England in half a century.'
      ]},
      { title: 'Character and Personality', paragraphs: [
        'An unusual number of eyewitnesses described Henry, and they agree: a barrel-chested, bow-legged, grey-eyed man in perpetual motion, careless of dress, never sitting even at Mass, wearing out courtiers who complained — as Peter of Blois memorably did — of a court that moved like an army and ate like one. He had a trained lawyer\'s memory, spoke several languages, and preferred maps and books to tournaments.',
        'The Angevin temper was his signature flaw. Contemporaries traded stories of the king rolling on the floor gnawing rushes in rage, and the four knights who killed Becket were launched by exactly such an outburst. Gerald of Wales, who hated him with a courtier\'s intimacy, still granted him mercy in victory and steadiness in disaster; his deepest failure, all sources agree, was that he could delegate nothing — least of all power to his own sons, whose rebellions were the price of his grip.'
      ]},
      { title: 'Government and law', paragraphs: [
        'Henry\'s first decade was reconstruction: the Anarchy\'s unlicensed castles razed, mercenaries expelled, the exchequer restored, and royal justice pushed back into the shires. The assizes of Clarendon (1166) and Northampton (1176) set juries of local men to present criminals to travelling royal justices; standardised writs made the king\'s court the default forum for land disputes; and "novel disseisin" and its sister actions gave every free tenant quick royal remedy against dispossession.',
        'The Becket quarrel grew from the same drive. The Constitutions of Clarendon (1164) claimed for royal courts the criminal punishment of clergy and control of appeals to Rome; his former chancellor and friend, now archbishop, resisted to exile and back, and on 29 December 1170 four of Henry\'s knights, taking the king\'s rage at face value, cut Becket down in his own cathedral. The murder forced Henry to public penance at Canterbury in 1174 and cost him the Constitutions\' letter, though royal power over the church kept most of their substance.'
      ]},
      { title: 'The family wars and death', paragraphs: [
        'Henry crowned his eldest son the "Young King" in 1170 but gave him no real power, and in 1173–74 the Young King, Richard, Geoffrey, Eleanor herself, the kings of France and Scotland, and half the baronage came at him at once. He won everywhere — capturing the Scottish king at Alnwick the very week he did penance at Canterbury — and imprisoned Eleanor for the next fifteen years.',
        'The sons kept coming. The Young King died in revolt in 1183; Geoffrey died in 1186; and in 1188–89 Richard, fearing disinheritance in favour of John, allied with Philip II of France and broke the old king\'s power in Maine and Touraine. Henry accepted terms at Ballan on 4 July 1189, asked for the list of the conspirators, and — the story runs — found John\'s name at its head. He died at Chinon two days later, muttering, in the chroniclers\' telling, "shame, shame on a conquered king".'
      ]},
      { title: 'Legacy', paragraphs: [
        'The common law is Henry\'s monument: the machinery of writs, juries, and itinerant justices he built proved so useful that it survived every later constitutional convulsion, and its descendants govern much of the world today. In that respect no medieval English king matters more.',
        'The empire died faster than the law. Richard mortgaged it for crusade and ransom; John lost Normandy and Anjou within fifteen years of Henry\'s death, a collapse sealed at Bouvines. What endured of the Angevin state was exactly the part built in England — the governed kingdom, not the dynastic agglomeration.'
      ]}
    ],
    timeline: [
      { date: '5 March 1133', title: 'Born at Le Mans', description: 'Son of Empress Matilda and Geoffrey Plantagenet of Anjou.' },
      { date: 'May 1152', title: 'Marries Eleanor of Aquitaine', description: 'Weeks after her divorce from Louis VII, adding Aquitaine to Normandy and Anjou.' },
      { date: 'December 1154', title: 'Crowned king of England', description: 'Succeeds Stephen under the treaty of Winchester, ending the Anarchy.' },
      { date: '1164', title: 'Constitutions of Clarendon', description: 'Asserts royal jurisdiction over the church, opening the war with Becket.' },
      { date: '1166', title: 'Assize of Clarendon', description: 'Juries of presentment and itinerant justices begin the common-law revolution.' },
      { date: '29 December 1170', title: 'Becket murdered', description: 'Four of Henry\'s knights kill the archbishop in Canterbury cathedral.' },
      { date: '1173–1174', title: 'The great rebellion', description: 'Defeats the coalition of his wife, three sons, France, Scotland, and Flanders.' },
      { date: '6 July 1189', title: 'Dies at Chinon', description: 'Defeated by Richard and Philip II, dies after learning John too had turned; buried at Fontevraud.' }
    ],
    relatedEntries: {
      people: [
        { title: 'Eleanor of Aquitaine', type: 'person', slug: 'eleanor-of-aquitaine', label: 'Wife, duchess, and eventual rebel' },
        { title: 'Richard the Lionheart', type: 'person', slug: 'richard-the-lionheart', label: 'Son and successor' },
        { title: 'Philip II of France', type: 'person', slug: 'philip-ii-of-france', label: 'The rival who learned statecraft at his expense' }
      ],
      locations: [ { title: 'Kingdom of England', type: 'location', slug: 'kingdom-of-england' }, { title: 'Duchy of Normandy', type: 'location', slug: 'duchy-of-normandy' } ],
      events: []
    },
    sources: [
      { title: 'Wikimedia Commons image record — Fontevraud effigy', author: 'Wikimedia Commons', type: 'image source', url: pg('Church_of_Fontevraud_Abbey_Henry_II_effigy.jpg') },
      { title: 'Henry II of England — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Henry_II_of_England' },
      { title: 'Henry II', author: 'W. L. Warren', type: 'book', note: 'The classic modern biography of the reign.' }
    ]
  },
  {
    id: 'john-of-england', type: 'character', name: 'John of England', aliases: ['John Lackland', 'Jean sans Terre'],
    born: 1166, died: 1216, deathAge: '49', causeOfDeath: 'Dysentery, at Newark Castle during the civil war of the Magna Carta barons',
    restingPlace: 'Worcester Cathedral', location: 'Kingdom of England',
    image: fp('Jan_tomb.jpg'),
    imageInfo: { caption: 'Effigy of King John on his tomb in Worcester Cathedral, carved c. 1232 — the earliest surviving royal effigy in England.', creator: 'Unknown sculptor', date: 'c. 1232', source: 'Worcester Cathedral — via Wikimedia Commons', sourceUrl: pg('Jan_tomb.jpg'), note: 'A near-contemporary idealised effigy, not a portrait from life.' },
    summary: 'King John (1199–1216) lost Normandy and the Angevin heartlands to Philip II, taxed England to breaking point to win them back, saw the attempt die at Bouvines, and was forced by his barons to seal Magna Carta.',
    title: 'king of England', roles: ['King of England', 'Lord of Ireland'],
    birth: { date: '24 December 1166', place: 'Beaumont Palace, Oxford', note: 'Youngest son of Henry II and Eleanor of Aquitaine — "Lackland" because the empire was already assigned to his brothers.' },
    death: { date: '18–19 October 1216', place: 'Newark Castle', note: 'Died of dysentery in the middle of the barons\' war, days after losing his baggage train in the Wash.', circumstance: 'His death saved the Plantagenet cause: the rebels\' French candidate lost his purpose, and the loyalists crowned John\'s nine-year-old son Henry III.' },
    quickFacts: { realm: 'Kingdom of England', dynasty: 'House of Plantagenet', culture: 'Anglo-Norman / Angevin', knownFor: 'the loss of Normandy and Magna Carta' },
    isRuler: true,
    succession: { office: 'King of England', predecessor: P('richard-the-lionheart', 'Richard the Lionheart', 'His brother; John was preferred over their nephew Arthur of Brittany'), successor: P('henry-iii-of-england', 'Henry III of England', 'His nine-year-old son, crowned amid the civil war') },
    overview: [
      'John\'s reign is the story of a great inheritance lost and a great document extracted. Within five years of his accession, Philip II of France had taken Normandy, Anjou, and the Angevin heartland; the murder of his captive nephew Arthur of Brittany, universally laid at John\'s door, cost him whatever legitimacy might have saved them.',
      'A decade of ruthless taxation built the war chest for reconquest — and the coalition it paid for was destroyed at Bouvines in 1214. The barons rose, Magna Carta was sealed at Runnymede in June 1215, repudiated within months, and John died mid-civil-war with a French prince occupying London.'
    ],
    contentSections: [
      { title: 'Overview', paragraphs: [
        'John\'s reign is the story of a great inheritance lost and a great document extracted. Within five years of his accession, Philip II of France had taken Normandy, Anjou, and the Angevin heartland; the murder of his captive nephew Arthur of Brittany, universally laid at John\'s door, cost him whatever legitimacy might have saved them.',
        'A decade of ruthless taxation built the war chest for reconquest — and the coalition it paid for was destroyed at Bouvines in 1214. The barons rose, Magna Carta was sealed at Runnymede in June 1215, repudiated within months, and John died mid-civil-war with a French prince occupying London.'
      ]},
      { title: 'Birth and early life', paragraphs: [
        'John was born at Oxford in 1166, the youngest of Henry II and Eleanor\'s eight children, nicknamed "Lackland" because the family lands were already spoken for. He was his father\'s favourite — it was the discovery of John\'s name among the 1189 conspirators that finished the old king.',
        'His apprenticeship was inglorious: a 1185 expedition to rule Ireland that collapsed amid mockery of the local lords, and a treacherous bid for the crown while Richard sat in a German prison, bought off on the Lionheart\'s return with the famous verdict "he is a child". Richard nonetheless named him heir over their nephew Arthur, and in 1199 the Angevin establishment preferred the known man to the boy.'
      ]},
      { title: 'Character and Personality', paragraphs: [
        'The monastic chroniclers who fixed John\'s reputation — Roger of Wendover and Matthew Paris above all, writing under his son — made him a monster of lechery, cruelty, and impiety, and the worst tales (the Interdict-era atrocities, the sneering at Mass) come from them at second hand. The administrative records his own government kept in unprecedented volume show something more unsettling: an intelligent, industrious, detail-obsessed king who travelled his realm constantly, heard lawsuits personally, and understood money better than any predecessor.',
        'The flaw the records confirm is the one his contemporaries named: a suspicious, mocking meanness of spirit that could not keep faith or inspire it. He humiliated where Richard charmed, took hostages from the loyal, starved prisoners of rank — Arthur\'s fate, and the de Braose family\'s, were believed by the men who mattered — and so entered his great crisis with no reservoir of trust. Barons will forgive a tyrant who wins; John was a tyrant who lost.'
      ]},
      { title: 'The loss of Normandy and the road to Runnymede', paragraphs: [
        'The war with Philip II turned on Arthur. Captured at Mirebeau in 1202 in John\'s one brilliant stroke, the boy vanished in Rouen custody by Easter 1203, and the Breton and Norman baronage went over to Philip. Château Gaillard fell in March 1204; Rouen surrendered in June; three centuries of Norman connection ended in a single campaign season.',
        'What followed was the most efficient extortion machine England had seen — scutages, reliefs, forest fines, the Interdict years (1208–1213) in which John simply pocketed the church\'s revenues — all banked for the great counterstroke. It came in 1214 as a two-front design: John from Poitou, his nephew Otto IV and the Flemish coalition from the north. La Roche-aux-Moines ended the southern arm in retreat, and on 27 July Philip destroyed the coalition at Bouvines. The money was spent, the prestige gone; civil war followed within the year, and the settlement forced on John at Runnymede in June 1215 — Magna Carta — was annulled at his request by the pope within ten weeks, reigniting the war it had paused.'
      ]},
      { title: 'Death', paragraphs: [
        'The rebels offered the crown to Prince Louis of France, who entered London in June 1216 while John harried the country in a war of sieges and burnings. Crossing the tidal estuaries of the Wash in October, his baggage train — treasury, regalia, by tradition the crown jewels — was swallowed by the returning tide.',
        'Already sick with dysentery, John died at Newark on the night of 18–19 October 1216 and was buried, by his own wish, before the shrine of St Wulfstan at Worcester. The regency of William Marshal reissued Magna Carta within a month, and the rebellion, deprived of its cause, expelled Louis by 1217.'
      ]},
      { title: 'Legacy', paragraphs: [
        'Magna Carta outgrew its author beyond all recognition: a failed peace treaty between a cornered king and his barons became, through reissue and myth, the foundation stone of the rule of law in the English-speaking world. John\'s tyranny, not any intention of his, created the precedent that the king is under the law.',
        'The territorial verdict was equally permanent. After 1204 the English crown was English in fact as well as name; the cross-Channel state of the Conqueror\'s heirs was gone, and the long attempt to reverse that verdict would eventually take the form of the Hundred Years\' War.'
      ]}
    ],
    timeline: [
      { date: '24 December 1166', title: 'Born at Oxford', description: 'Youngest son of Henry II and Eleanor of Aquitaine.' },
      { date: '1199', title: 'Crowned king', description: 'Succeeds Richard I, preferred by the Anglo-Norman establishment over Arthur of Brittany.' },
      { date: '1202–1203', title: 'Mirebeau and Arthur\'s disappearance', description: 'Captures his nephew in a lightning march; Arthur vanishes in Rouen custody and the baronage deserts.' },
      { date: '1204', title: 'Normandy falls', description: 'Château Gaillard and Rouen surrender to Philip II; the Angevin heartland is lost.' },
      { date: '1208–1213', title: 'The Interdict', description: 'England placed under papal interdict in the Canterbury dispute; John farms the church\'s revenues.' },
      { date: '27 July 1214', title: 'Bouvines', description: 'Philip II destroys John\'s coalition; the reconquest project dies with it.' },
      { date: '15 June 1215', title: 'Magna Carta', description: 'Seals the Great Charter at Runnymede; it is annulled within ten weeks and civil war resumes.' },
      { date: '18–19 October 1216', title: 'Dies at Newark', description: 'Dies of dysentery after losing his baggage in the Wash; buried at Worcester.' }
    ],
    relatedEntries: {
      people: [
        { title: 'Richard the Lionheart', type: 'person', slug: 'richard-the-lionheart', label: 'Brother and predecessor' },
        { title: 'Philip II of France', type: 'person', slug: 'philip-ii-of-france', label: 'The rival who took Normandy and won Bouvines' },
        { title: 'Eleanor of Aquitaine', type: 'person', slug: 'eleanor-of-aquitaine', label: 'Mother, whose duchy he inherited and lost control of' }
      ],
      locations: [ { title: 'Kingdom of England', type: 'location', slug: 'kingdom-of-england' }, { title: 'Duchy of Normandy', type: 'location', slug: 'duchy-of-normandy', label: 'Lost in 1204' } ],
      events: [ { title: 'Battle of Bouvines', type: 'event', slug: 'battle-of-bouvines', label: 'Where his grand coalition died' } ]
    },
    sources: [
      { title: 'Wikimedia Commons image record — Worcester effigy', author: 'Wikimedia Commons', type: 'image source', url: pg('Jan_tomb.jpg') },
      { title: 'John, King of England — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/John,_King_of_England' },
      { title: 'King John: England, Magna Carta and the Making of a Tyrant', author: 'Stephen Church', type: 'book', note: 'A leading modern account of the reign and its records.' }
    ]
  },
  {
    id: 'henry-iii-of-england', type: 'character', name: 'Henry III of England', aliases: ['Henry of Winchester'],
    born: 1207, died: 1272, deathAge: '65', causeOfDeath: 'Died at Westminster after a long decline',
    restingPlace: 'Westminster Abbey', location: 'Kingdom of England',
    image: fp('Henry_III_funeral_head.jpg'),
    imageInfo: { caption: 'Gilt-bronze head of Henry III from his tomb effigy in Westminster Abbey, cast by William Torel in 1291.', creator: 'William Torel', date: '1291', source: 'Westminster Abbey — via Wikimedia Commons', sourceUrl: pg('Henry_III_funeral_head.jpg'), note: 'Cast two decades after his death; an idealised royal image rather than a life portrait.' },
    summary: 'Henry III reigned fifty-six years (1216–1272), rebuilt Westminster Abbey and the ideology of sacral kingship, and provoked the baronial revolution of 1258–1265 that forced parliament into English government.',
    title: 'king of England', roles: ['King of England', 'Lord of Ireland', 'Duke of Aquitaine'],
    birth: { date: '1 October 1207', place: 'Winchester Castle', note: 'Eldest son of King John and Isabella of Angoulême.' },
    death: { date: '16 November 1272', place: 'Westminster', note: 'Died with his heir Edward away on crusade.', circumstance: 'Buried in the abbey he had rebuilt, in the former grave of Edward the Confessor, whose cult he had made the centre of English kingship.' },
    quickFacts: { realm: 'Kingdom of England', dynasty: 'House of Plantagenet', culture: 'English / Plantagenet', knownFor: 'rebuilding Westminster Abbey and the crisis of 1258–1265 that entrenched parliament' },
    isRuler: true,
    succession: { office: 'King of England', predecessor: P('john-of-england', 'John', 'His father, who died mid-civil-war leaving a nine-year-old heir'), successor: P('edward-i-of-england', 'Edward I of England', 'His son, on crusade when the old king died') },
    overview: [
      'Crowned at nine with a French prince holding London, Henry III owed his throne to William Marshal\'s regency and the reissued Magna Carta. His long personal rule was pious, artistic, extravagant, and politically maladroit: foreign favourites, failed continental schemes, and the ruinous "Sicilian business" drove the baronage under Simon de Montfort to impose conciliar government in 1258.',
      'The Barons\' War that followed saw the king captured at Lewes in 1264 and rescued by his son Edward\'s victory at Evesham in 1265. His truest monument is Westminster Abbey, rebuilt at staggering cost around the shrine of Edward the Confessor.'
    ],
    contentSections: [
      { title: 'Overview', paragraphs: [
        'Crowned at nine with a French prince holding London, Henry III owed his throne to William Marshal\'s regency and the reissued Magna Carta. His long personal rule was pious, artistic, extravagant, and politically maladroit: foreign favourites, failed continental schemes, and the ruinous "Sicilian business" drove the baronage under Simon de Montfort to impose conciliar government in 1258.',
        'The Barons\' War that followed saw the king captured at Lewes in 1264 and rescued by his son Edward\'s victory at Evesham in 1265. His truest monument is Westminster Abbey, rebuilt at staggering cost around the shrine of Edward the Confessor.'
      ]},
      { title: 'Birth and early life', paragraphs: [
        'Henry was born at Winchester in 1207 and inherited, at nine, a kingdom half-occupied by the French prince Louis and the rebel barons. The old regent William Marshal won the war for him — Lincoln by land, Sandwich by sea — and won the peace by reissuing Magna Carta in the young king\'s name, turning the rebels\' manifesto into the crown\'s own promise.',
        'The minority government of Marshal, the legate, and Hubert de Burgh rebuilt royal authority castle by castle. Henry emerged into full power in 1227 with a high sacral notion of kingship — and none of the military or managerial instincts of his grandfather Henry II.'
      ]},
      { title: 'Character and Personality', paragraphs: [
        'Contemporaries found Henry easy to describe and hard to respect. Matthew Paris, who knew and constantly criticised him, shows a king devout to the point of ostentation — hearing Mass daily, feeding hundreds of paupers, obsessed with the cult of Edward the Confessor — and simultaneously petulant, credulous, and changeable, "simplex" in the chronicler\'s damning word. He wept easily, forgave easily, and made the same mistakes serially.',
        'His genuine gifts were aesthetic. The rebuilding of Westminster Abbey, the patronage of goldsmiths and painters, the elaboration of court ceremony — these came from real discernment and made his court the artistic centre of the realm. Dante would later place him, gently, in purgatory as the "king of simple life"; his own barons put it more brutally when they insisted he govern through a council, since he would not be governed by judgment.'
      ]},
      { title: 'Reign and the baronial revolution', paragraphs: [
        'Henry\'s continental ambitions ran backwards: expeditions to recover Poitou failed at Taillebourg in 1242, and by the treaty of Paris (1259) he formally surrendered Normandy, Anjou, and Poitou, keeping Gascony as a French fief. The "Sicilian business" — accepting the pope\'s offer of the Sicilian crown for his son Edmund in exchange for underwriting a papal war — saddled the crown with impossible debts and triggered the explosion.',
        'In 1258 a coalition of magnates led by Simon de Montfort forced the Provisions of Oxford on him: a council of fifteen chosen with the barons, thrice-yearly parliaments, and reforming justices in the shires. Henry\'s repudiations and the barons\' divisions slid into war; Montfort captured king and heir at Lewes in May 1264 and ruled through the famous parliament of 1265 that first summoned burgesses alongside knights. Edward\'s escape and victory at Evesham in August 1265, where Montfort was killed and dismembered, restored the king — but the Dictum of Kenilworth and the statute of Marlborough conceded much of the reform in the crown\'s own name.'
      ]},
      { title: 'Death', paragraphs: [
        'Henry\'s final years were quiet, spent finishing the abbey; the Confessor\'s relics were translated into their new shrine in October 1269 with the king and his sons carrying the coffin. He died at Westminster on 16 November 1272, with Edward away on crusade.',
        'So secure was the settlement after Evesham that the succession passed without a ripple to an absent heir — the first time since 1066 that England changed kings with the successor overseas and no one under arms.'
      ]},
      { title: 'Legacy', paragraphs: [
        'The constitutional residue of Henry\'s misgovernment proved permanent: regular parliaments, the community of the realm as a political actor, and the principle — extracted, resisted, and finally absorbed — that the king rules with counsel. Edward I built his stronger monarchy on exactly those foundations.',
        'Westminster Abbey as it stands is substantially Henry\'s building, and the coronation church he made around the Confessor\'s shrine has crowned every monarch since. No English king left a greater work of art; few left a thinner record of political judgment.'
      ]}
    ],
    timeline: [
      { date: '1 October 1207', title: 'Born at Winchester', description: 'Eldest son of King John and Isabella of Angoulême.' },
      { date: '28 October 1216', title: 'Crowned at nine', description: 'Crowned at Gloucester with a borrowed circlet while Prince Louis holds London; Marshal\'s regency reissues Magna Carta.' },
      { date: '1227', title: 'Personal rule begins', description: 'Declares himself of full age and begins governing in his own right.' },
      { date: '1245', title: 'Westminster Abbey rebuilding begins', description: 'Starts the reconstruction of the abbey around the Confessor\'s shrine at crown expense.' },
      { date: '1258', title: 'Provisions of Oxford', description: 'The baronial coalition imposes conciliar government and regular parliaments.' },
      { date: '14 May 1264', title: 'Captured at Lewes', description: 'Simon de Montfort defeats and captures the king and Lord Edward.' },
      { date: '4 August 1265', title: 'Rescued by Evesham', description: 'Edward destroys Montfort; royal authority is restored with reforms absorbed.' },
      { date: '16 November 1272', title: 'Dies at Westminster', description: 'Buried in the Confessor\'s old grave in his rebuilt abbey.' }
    ],
    relatedEntries: {
      people: [
        { title: 'John of England', type: 'person', slug: 'john-of-england', label: 'Father' },
        { title: 'Edward I of England', type: 'person', slug: 'edward-i-of-england', label: 'Son and successor' },
        { title: 'Louis IX of France', type: 'person', slug: 'louis-ix-of-france', label: 'Brother-in-law, treaty partner, and failed arbitrator of 1264' }
      ],
      locations: [ { title: 'Kingdom of England', type: 'location', slug: 'kingdom-of-england' } ],
      events: []
    },
    sources: [
      { title: 'Wikimedia Commons image record — Torel effigy head', author: 'Wikimedia Commons', type: 'image source', url: pg('Henry_III_funeral_head.jpg') },
      { title: 'Henry III of England — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Henry_III_of_England' },
      { title: 'Henry III (2 vols.)', author: 'David Carpenter', type: 'book', note: 'The definitive modern biography.' }
    ]
  },
  {
    id: 'richard-ii-of-england', type: 'character', name: 'Richard II of England', aliases: ['Richard of Bordeaux'],
    born: 1367, died: 1400, deathAge: '33', causeOfDeath: 'Died in Pontefract Castle after his deposition, almost certainly starved',
    restingPlace: 'Westminster Abbey (moved from Kings Langley in 1413)', location: 'Kingdom of England',
    image: fp('Richard_II_King_of_England.jpg'),
    imageInfo: { caption: 'The Westminster Abbey portrait of Richard II, c. 1390s — the earliest surviving contemporary painted portrait of an English monarch.', creator: 'Unknown court painter', date: 'c. 1390s', source: 'Westminster Abbey — via Wikimedia Commons', sourceUrl: pg('Richard_II_King_of_England.jpg'), note: 'A contemporary image, made in the king\'s own lifetime.' },
    summary: 'Richard II (1377–1399), the boy king of the Peasants\' Revolt, built an exalted, theatrical monarchy, struck down his baronial enemies in 1397, and was deposed and killed by his cousin Henry Bolingbroke.',
    title: 'king of England', roles: ['King of England'],
    birth: { date: '6 January 1367', place: 'Bordeaux, Aquitaine', note: 'Son of Edward the Black Prince and Joan of Kent; grandson of Edward III.' },
    death: { date: 'February 1400', place: 'Pontefract Castle', note: 'Died in captivity weeks after the failed Epiphany Rising of his supporters.', circumstance: 'Contemporaries believed he was starved, by his own despair in the official version, by his jailers in everyone else\'s.' },
    quickFacts: { realm: 'Kingdom of England', dynasty: 'House of Plantagenet', culture: 'English / court of the International Gothic', knownFor: 'facing down the Peasants\' Revolt and being deposed by Henry IV' },
    isRuler: true,
    succession: { office: 'King of England', predecessor: P('edward-iii-of-england', 'Edward III of England', 'His grandfather; Richard\'s father the Black Prince died the year before'), successor: P('henry-iv-of-england', 'Henry IV of England', 'His cousin Bolingbroke, who took the crown by deposition in 1399') },
    overview: [
      'Richard II came to the throne at ten and met his defining moment at fourteen, riding out to face the rebel host of the Peasants\' Revolt at Smithfield after Wat Tyler was cut down. The nerve he showed that day hardened into a conviction of sacral kingship that his nobility could neither share nor manage.',
      'Humiliated by the Lords Appellant in 1386–88, he took his revenge a decade later — execution, exile, and confiscation — and his seizure of the exiled Bolingbroke\'s Lancastrian inheritance in 1399 united the realm against him. He surrendered without a battle, resigned the crown under duress, and died at Pontefract.'
    ],
    contentSections: [
      { title: 'Overview', paragraphs: [
        'Richard II came to the throne at ten and met his defining moment at fourteen, riding out to face the rebel host of the Peasants\' Revolt at Smithfield after Wat Tyler was cut down. The nerve he showed that day hardened into a conviction of sacral kingship that his nobility could neither share nor manage.',
        'Humiliated by the Lords Appellant in 1386–88, he took his revenge a decade later — execution, exile, and confiscation — and his seizure of the exiled Bolingbroke\'s Lancastrian inheritance in 1399 united the realm against him. He surrendered without a battle, resigned the crown under duress, and died at Pontefract.'
      ]},
      { title: 'Birth and early life', paragraphs: [
        'Richard was born at Bordeaux in 1367, in his father\'s Aquitainian court, and became heir apparent at nine when the Black Prince died in 1376. A year later Edward III followed, and the boy was crowned amid genuine popular hope — and a war going badly, taxed by the hated poll taxes that lit the fuse of 1381.',
        'The Peasants\' Revolt made him. With London burning, the chancellor and treasurer beheaded by the crowd, and the government paralysed, the fourteen-year-old met the rebels twice, and at Smithfield — his mayor having struck Tyler down before his eyes — rode alone toward the drawn bows with the words the chronicles made famous: "I will be your captain; you shall have from me what you seek." The concessions were revoked within weeks, and the revolt\'s leaders hanged; the lesson Richard took was the mystique of the royal person.'
      ]},
      { title: 'Character and Personality', paragraphs: [
        'Richard is the most vividly rendered English king of his century — tall, fair, stammering slightly when angry, fastidious (posterity credits his court with the handkerchief), and devoted to art, ceremony, and the company of favourites above the tournament culture of his class. The Wilton Diptych, in which angels wearing his white hart badge attend him before the Virgin, is a window straight into his self-conception: kingship as sacred office, majesty as mystery.',
        'The monastic chroniclers of the Lancastrian settlement — Walsingham above all, writing under the dynasty that destroyed him — describe a tyrant of caprice: vindictive, extravagant, surrounding himself with flatterers and archers, forcing oaths and blank charters on his subjects. Even discounting the victors\' pen, the pattern of 1397–99 shows a king for whom past injury outweighed present counsel, and modern historians still debate where theatrical majesty ended and something like instability began.'
      ]},
      { title: 'Reign: majesty, revenge, and fall', paragraphs: [
        'The first crisis came in 1386–88, when the "Wonderful Parliament" imposed a council on him and, after his favourite de Vere\'s rout at Radcot Bridge, the "Merciless Parliament" of the five Lords Appellant executed or exiled the inner circle of his court. Richard submitted, waited, and governed moderately for eight years — the calm that made the storm the more shocking.',
        'In July 1397 he arrested the three senior Appellants: Gloucester, his uncle, smothered at Calais; Arundel executed; Warwick exiled. Parliament at Shrewsbury made the crown financially independent and delegated its powers to a committee of the king\'s men. When John of Gaunt died in February 1399, Richard confiscated the vast Lancastrian inheritance of the exiled Bolingbroke and sailed for Ireland — and Bolingbroke landed at Ravenspur to claim, he said, only his duchy. The realm went over to him wholesale; Richard, cornered in Wales, was taken at Flint, paraded to London, and on 30 September 1399 his renunciation and deposition were read to parliament.'
      ]},
      { title: 'Death', paragraphs: [
        'Richard was held at Pontefract in Yorkshire. In January 1400 a rising of his old courtiers — the Epiphany Rising — attempted to seize Henry IV and restore him, and its failure sealed the prisoner\'s fate: by mid-February he was dead, starved by his keepers or, as the Lancastrian version preferred, by his own refusal of food.',
        'The body was displayed at St Paul\'s to kill the inevitable rumours of survival — pretenders claiming to be Richard troubled Henry IV for years regardless — and buried at Kings Langley. Henry V, who had been kindly treated by Richard as a boy, moved him in 1413 to the Westminster tomb Richard had built beside his beloved first queen, Anne of Bohemia.'
      ]},
      { title: 'Legacy', paragraphs: [
        'The deposition of an anointed king by a subject with an army set the precedent that haunted the fifteenth century: the Lancastrian title made in 1399 was unmade by the same logic in 1461 and after, and contemporaries traced the Wars of the Roses back to Pontefract. Shakespeare\'s Richard II, written under a queen who knew the parallel — "I am Richard II, know ye not that?" — fixed the reign permanently in political imagination.',
        'His court\'s culture outlived his politics: Chaucer and Gower wrote under his patronage networks, the Wilton Diptych and the Westminster portrait began English royal portraiture, and the rebuilt Westminster Hall with its hammerbeam roof — finished just in time to stage his own deposition — remains among the grandest rooms in Europe.'
      ]}
    ],
    timeline: [
      { date: '6 January 1367', title: 'Born at Bordeaux', description: 'Son of the Black Prince, in the English court of Aquitaine.' },
      { date: '16 July 1377', title: 'Crowned at ten', description: 'Succeeds his grandfather Edward III amid war weariness and heavy taxation.' },
      { date: 'June 1381', title: 'Faces the Peasants\' Revolt', description: 'Meets the rebels at Mile End and Smithfield; after Tyler is killed, the boy king rides forward and disperses the host.' },
      { date: '1388', title: 'The Merciless Parliament', description: 'The Lords Appellant execute or exile the king\'s inner circle after Radcot Bridge.' },
      { date: 'July 1397', title: 'Revenge on the Appellants', description: 'Gloucester, Arundel, and Warwick are destroyed; the "tyranny" of Richard\'s last two years begins.' },
      { date: 'March 1399', title: 'Seizes the Lancastrian inheritance', description: 'Confiscates the exiled Bolingbroke\'s duchy on Gaunt\'s death and departs for Ireland.' },
      { date: '30 September 1399', title: 'Deposed', description: 'Taken at Flint, he resigns the crown under duress; parliament accepts Henry of Lancaster as king.' },
      { date: 'February 1400', title: 'Dies at Pontefract', description: 'Dead in captivity — starved, contemporaries believed — after the Epiphany Rising fails.' }
    ],
    relatedEntries: {
      people: [
        { title: 'Edward III of England', type: 'person', slug: 'edward-iii-of-england', label: 'Grandfather and predecessor' },
        { title: 'Edward, the Black Prince', type: 'person', slug: 'edward-the-black-prince', label: 'Father' },
        { title: 'Henry IV of England', type: 'person', slug: 'henry-iv-of-england', label: 'Cousin, supplanter, and successor' }
      ],
      locations: [ { title: 'Kingdom of England', type: 'location', slug: 'kingdom-of-england' } ],
      events: [ { title: "Hundred Years' War", type: 'event', slug: 'hundred-years-war', label: 'The inherited war his truce with France interrupted' } ]
    },
    sources: [
      { title: 'Wikimedia Commons image record — Westminster portrait', author: 'Wikimedia Commons', type: 'image source', url: pg('Richard_II_King_of_England.jpg') },
      { title: 'Richard II of England — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Richard_II_of_England' },
      { title: 'Richard II', author: 'Nigel Saul', type: 'book', note: 'The standard modern biography.' }
    ]
  },
  {
    id: 'henry-iv-of-england', type: 'character', name: 'Henry IV of England', aliases: ['Henry Bolingbroke', 'Henry of Lancaster'],
    born: 1367, died: 1413, deathAge: '45', causeOfDeath: 'Died after years of a disfiguring chronic illness contemporaries called leprosy',
    restingPlace: 'Canterbury Cathedral', location: 'Kingdom of England',
    image: fp('King_Henry_IV_from_NPG.jpg'),
    imageInfo: { caption: 'Henry IV, oil on panel, late sixteenth or early seventeenth century — part of the standard posthumous royal portrait sets.', creator: 'Unknown artist', date: 'c. 1590–1620', source: 'National Portrait Gallery, London — via Wikimedia Commons', sourceUrl: pg('King_Henry_IV_from_NPG.jpg'), note: 'A much later imagined likeness; no contemporary painted portrait of Henry IV survives.' },
    summary: 'Henry IV, the exiled duke who deposed Richard II in 1399, spent his reign defending a usurped crown against Percys, Welsh rebels, and Scots, and died worn out at forty-five, leaving a secured throne to Henry V.',
    title: 'king of England', roles: ['King of England', 'Duke of Lancaster'],
    birth: { date: 'c. April 1367', place: 'Bolingbroke Castle, Lincolnshire', note: 'Son of John of Gaunt, duke of Lancaster, and Blanche of Lancaster; grandson of Edward III.' },
    death: { date: '20 March 1413', place: 'Jerusalem Chamber, Westminster Abbey', note: 'Died in the abbot\'s chamber called Jerusalem — fulfilling, chroniclers noted, a prophecy that he would die "in Jerusalem".', circumstance: 'Worn down since 1405 by a chronic skin disease and seizures that his enemies called divine judgment for Archbishop Scrope\'s execution.' },
    quickFacts: { realm: 'Kingdom of England', dynasty: 'House of Lancaster', culture: 'English / Lancastrian', knownFor: 'deposing Richard II and founding the Lancastrian dynasty' },
    isRuler: true,
    succession: { office: 'King of England', predecessor: P('richard-ii-of-england', 'Richard II of England', 'His cousin, deposed in 1399 after confiscating the Lancastrian inheritance'), successor: P('henry-v-of-england', 'Henry V of England', 'His eldest son') },
    overview: [
      'Henry Bolingbroke was the most accomplished knight of his generation — crusader in Prussia, pilgrim to Jerusalem, famous in the lists — before Richard II\'s confiscation of his inheritance forced the choice between beggary and usurpation. He landed with a handful of men in July 1399 and was king by October.',
      'The crown taken by force had to be held by force: the Percys\' rebellions (Shrewsbury, 1403), Owain Glyndŵr\'s decade-long Welsh war, the archbishop of York executed for treason in 1405 — and then illness, penury, and a restless heir. He kept the throne, which was the whole task, and passed it whole to his son.'
    ],
    contentSections: [
      { title: 'Overview', paragraphs: [
        'Henry Bolingbroke was the most accomplished knight of his generation — crusader in Prussia, pilgrim to Jerusalem, famous in the lists — before Richard II\'s confiscation of his inheritance forced the choice between beggary and usurpation. He landed with a handful of men in July 1399 and was king by October.',
        'The crown taken by force had to be held by force: the Percys\' rebellions (Shrewsbury, 1403), Owain Glyndŵr\'s decade-long Welsh war, the archbishop of York executed for treason in 1405 — and then illness, penury, and a restless heir. He kept the throne, which was the whole task, and passed it whole to his son.'
      ]},
      { title: 'Birth and early life', paragraphs: [
        'Henry was born at Bolingbroke in 1367, heir to the greatest private inheritance in England — the duchy of Lancaster of his father John of Gaunt. He and his cousin Richard II, born the same year, were knighted together as boys; the parallel lives diverged from there.',
        'As earl of Derby he was one of the five Lords Appellant who broke Richard\'s court party in 1387–88, then prudently spent the 1390s abroad: two reisen with the Teutonic Knights against Lithuania, and a grand pilgrimage through Venice to Jerusalem that made him the most travelled English royal of the age. Exiled in 1398 on a pretext, he watched Richard seize the whole Lancastrian inheritance on Gaunt\'s death in 1399 — and returned.'
      ]},
      { title: 'Character and Personality', paragraphs: [
        'Before 1399 the record is of a paragon: courteous, cultivated, musical (he travelled with his own chapel), a champion jouster, and conspicuously pious in the crusading-chivalric mode. Foreign courts from Königsberg to Milan feted him; even chroniclers hostile to his later kingship remembered the exile\'s departure as a popular tragedy.',
        'Kingship revealed the other side: a suspicious, calculating survivor who broke the Percys who had made him, executed an archbishop against all counsel, and answered parliament\'s endless criticism of his household with patience, evasion, and necessity. The long humiliating illness after 1405 — read by his enemies as God\'s verdict for Scrope\'s blood — he bore, by all accounts, with grim penitential endurance, planning to the last a crusade he would never make.'
      ]},
      { title: 'Reign', paragraphs: [
        'The usurpation was smooth; keeping the crown was war without end. Wales rose under Owain Glyndŵr in 1400 and burned English rule back to the castles for a decade. The Percys — Northumberland, Worcester, and Hotspur — who had carried Henry to the throne turned on him in 1403, and only the desperate victory at Shrewsbury, where Hotspur died and the Prince of Wales took an arrow in the face, saved the dynasty. Scrope\'s rising followed in 1405, and the archbishop\'s execution shocked even Henry\'s friends; Northumberland\'s last throw ended at Bramham Moor in 1408.',
        'Through it all ran poverty and parliament: the Commons attached conditions, named councillors, and audited the household of a king who had promised in 1399 to "live of his own". From 1406 his health collapsed, and the last years were a muffled struggle between the ailing king and the ambitious Prince of Wales, whose partisans openly discussed abdication. Henry kept the crown to his final breath — reportedly telling the prince, who had lifted it from the pillow prematurely, that God alone knew what right either of them had to it.'
      ]},
      { title: 'Death', paragraphs: [
        'Henry collapsed while praying at the Confessor\'s shrine in Westminster Abbey on 20 March 1413 and was carried into the abbot\'s Jerusalem Chamber, where he died — fulfilling, as every chronicler observed, the prophecy that he would die in Jerusalem, which he had understood as a crusader\'s death.',
        'He chose burial not at Westminster among the kings but at Canterbury, beside the shrine of St Thomas Becket — the martyr of royal overreach — a placement historians still read as the usurper\'s last plea for legitimacy and pardon.'
      ]},
      { title: 'Legacy', paragraphs: [
        'Henry proved a usurpation could be made to stick: fourteen years of rebellion, penury, and parliamentary siege ended in the first peaceful succession from father to son in England since 1327. Everything Henry V achieved was built on that unglamorous survival.',
        'But the title deed of 1399 could never be unwritten. The Lancastrian claim rested on parliament\'s acceptance of a fait accompli, and when Lancastrian kingship faltered under his grandson Henry VI, the house of York needed only to reread the precedent. The long shadow of Bolingbroke\'s landing reached to Bosworth.'
      ]}
    ],
    timeline: [
      { date: 'April 1367', title: 'Born at Bolingbroke', description: 'Heir of John of Gaunt and the duchy of Lancaster.' },
      { date: '1390–1393', title: 'Crusades and Jerusalem', description: 'Campaigns with the Teutonic Knights in Lithuania and completes a pilgrimage to Jerusalem.' },
      { date: 'September 1398', title: 'Exiled', description: 'Banished by Richard II after the aborted duel with Mowbray at Coventry.' },
      { date: 'July 1399', title: 'Lands at Ravenspur', description: 'Returns to claim the confiscated Lancastrian inheritance; the realm goes over to him.' },
      { date: '13 October 1399', title: 'Crowned king', description: 'Accepts the crown after Richard\'s enforced resignation and deposition.' },
      { date: '21 July 1403', title: 'Battle of Shrewsbury', description: 'Defeats and kills Hotspur; the Percy revolt is broken and the dynasty saved.' },
      { date: 'June 1405', title: 'Executes Archbishop Scrope', description: 'The archbishop of York is beheaded for rebellion; Henry\'s illness begins soon after.' },
      { date: '20 March 1413', title: 'Dies at Westminster', description: 'Dies in the Jerusalem Chamber; buried at Canterbury beside Becket\'s shrine.' }
    ],
    relatedEntries: {
      people: [
        { title: 'Richard II of England', type: 'person', slug: 'richard-ii-of-england', label: 'Cousin, victim, and predecessor' },
        { title: 'Henry V of England', type: 'person', slug: 'henry-v-of-england', label: 'Son and successor' },
        { title: 'Edward III of England', type: 'person', slug: 'edward-iii-of-england', label: 'Grandfather, source of the Lancastrian claim' }
      ],
      locations: [ { title: 'Kingdom of England', type: 'location', slug: 'kingdom-of-england' } ],
      events: [ { title: "Hundred Years' War", type: 'event', slug: 'hundred-years-war', label: 'Dormant in his reign, renewed by his son' } ]
    },
    sources: [
      { title: 'Wikimedia Commons image record — NPG panel', author: 'Wikimedia Commons', type: 'image source', url: pg('King_Henry_IV_from_NPG.jpg') },
      { title: 'Henry IV of England — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Henry_IV_of_England' },
      { title: 'The Fears of Henry IV', author: 'Ian Mortimer', type: 'book', note: 'A major modern biography of Bolingbroke.' }
    ]
  },
  {
    id: 'henry-vi-of-england', type: 'character', name: 'Henry VI of England', aliases: ['Henry of Windsor'],
    born: 1421, died: 1471, deathAge: '49', causeOfDeath: 'Died in the Tower of London the night Edward IV returned in triumph; almost certainly killed on Yorkist orders',
    restingPlace: 'Windsor, St George\'s Chapel (moved from Chertsey in 1484)', location: 'Kingdom of England',
    image: fp('Henry_VI_of_England,_Shrewsbury_book.jpg'),
    imageInfo: { caption: 'Henry VI enthroned, receiving the Talbot Shrewsbury Book from John Talbot, 1444–45.', creator: 'Rouen workshop illuminator', date: '1444–1445', source: 'British Library, Royal MS 15 E VI — via Wikimedia Commons', sourceUrl: pg('Henry_VI_of_England,_Shrewsbury_book.jpg'), note: 'A contemporary presentation miniature made during the king\'s lifetime.' },
    summary: 'Henry VI, crowned in infancy king of England and of France, presided helplessly over the loss of the Hundred Years\' War and the collapse into the Wars of the Roses; twice deposed, he died in the Tower in 1471.',
    title: 'king of England', roles: ['King of England', 'Disputed king of France'],
    birth: { date: '6 December 1421', place: 'Windsor Castle', note: 'Only child of Henry V and Catherine of Valois; king at nine months.' },
    death: { date: '21 May 1471', place: 'Tower of London', note: 'Died hours after Edward IV re-entered London from Tewkesbury, where Henry\'s only son had been killed.', circumstance: 'The official story of death from "melancholy" convinced no one; his exhumed skull showed damage consistent with violence.' },
    quickFacts: { realm: 'Kingdom of England (and claimed France)', dynasty: 'House of Lancaster', culture: 'English / Lancastrian', knownFor: 'the loss of France, the Wars of the Roses, and founding Eton and King\'s College' },
    isRuler: true,
    succession: { office: 'King of England', predecessor: P('henry-v-of-england', 'Henry V of England', 'His father, dead at thirty-five with his conquest incomplete'), successor: UN('Edward IV', 'The Yorkist king who deposed him in 1461, briefly lost the throne back to him in 1470–71, and destroyed his house at Tewkesbury') },
    overview: [
      'Henry VI inherited both crowns of the Treaty of Troyes before his first birthday and grew into the gentlest and least capable king medieval England produced. The French kingdom of his childhood coronations was gone by 1453 — Formigny and Castillon ending it — and the debts, defeats, and feuds of that failure ignited the Wars of the Roses.',
      'Twice king and twice deposed, a catatonic invalid at the worst moments and a saintly innocent at the best, he outlived his cause: his son died at Tewkesbury in May 1471, and Henry followed within days in the Tower. Within decades pilgrims sought miracles at his tomb.'
    ],
    contentSections: [
      { title: 'Overview', paragraphs: [
        'Henry VI inherited both crowns of the Treaty of Troyes before his first birthday and grew into the gentlest and least capable king medieval England produced. The French kingdom of his childhood coronations was gone by 1453 — Formigny and Castillon ending it — and the debts, defeats, and feuds of that failure ignited the Wars of the Roses.',
        'Twice king and twice deposed, a catatonic invalid at the worst moments and a saintly innocent at the best, he outlived his cause: his son died at Tewkesbury in May 1471, and Henry followed within days in the Tower. Within decades pilgrims sought miracles at his tomb.'
      ]},
      { title: 'Birth and early life', paragraphs: [
        'Henry was born at Windsor in December 1421 and was king of England at nine months when Henry V died at Vincennes; two months later Charles VI\'s death made him, by the Treaty of Troyes, king of France as well. His uncles ruled for him — Bedford in France, Gloucester (checked by Cardinal Beaufort) in England.',
        'He was crowned at Westminster in 1429 and, in answer to Charles VII\'s Reims coronation, at Notre-Dame in Paris in 1431 — the only English king ever crowned king of France. The dual monarchy he embodied was already dying around the ceremony: Joan of Arc had turned the war, and Burgundy abandoned the English alliance in 1435.'
      ]},
      { title: 'Character and Personality', paragraphs: [
        'Everyone who described Henry agreed on the piety and the simplicity; they differed only in whether it was holiness or incapacity. John Blacman, his chaplain and hagiographer, recorded a king who wore hair shirts under royal robes, recoiled from nudity and profanity, pardoned traitors compulsively, and interrupted state business for prayer. Harsher observers — and the Yorkist propaganda that built on them — saw childish innocence where a realm needed judgment: a king who gave away the same office twice, signed whatever was put before him, and could be possessed by whoever held the pen.',
        'In August 1453, on news of the disaster at Castillon, he fell into a catatonic stupor that lasted seventeen months, unable to speak or recognise his newborn son — an inheritance, contemporaries whispered, from his grandfather Charles VI\'s madness. Modern writers hesitate over how to name his condition; his own age concluded more simply that the house of Lancaster was under judgment. What no one contested was his personal blamelessness: alone among the era\'s protagonists, Henry was never accused of cruelty.'
      ]},
      { title: 'The loss of France and the fall into civil war', paragraphs: [
        'Henry\'s majority government, dominated by Suffolk, staked everything on peace: the truce of Tours in 1444, marriage to Margaret of Anjou in 1445, and the secret, catastrophic surrender of Maine. The bill came due in 1449–1453: Rouen fell, Formigny destroyed the last field army in Normandy, Castillon killed Talbot and took Gascony. Suffolk was murdered at sea, Cade\'s rebels held London for three days, and the crown\'s debts passed £370,000.',
        'The king\'s collapse in 1453 handed government to his cousin Richard of York as Protector — and the recovery of his wits handed it back to Margaret and the Beaufort duke of Somerset, whom York blamed for France. The first blood came at St Albans in 1455, where Somerset died; the full war from 1459. After the carnage at Towton in March 1461, the largest battle ever fought on English soil, York\'s son reigned as Edward IV, and Henry was a fugitive and then, from 1465, a prisoner in the Tower. Warwick\'s volte-face restored him as a puppet in October 1470 — the "readeption" — until Edward returned to win Barnet and Tewkesbury within a single spring.'
      ]},
      { title: 'Death', paragraphs: [
        'Prince Edward of Lancaster, Henry\'s only child, was killed at Tewkesbury on 4 May 1471. On the night of 21 May, as Edward IV re-entered London in triumph, Henry died in the Tower — of "pure displeasure and melancholy" said the official chronicle, of a blow to the head said the age and, when his remains were examined in 1910, said his skull.',
        'The body was displayed at St Paul\'s, where it bled, observers reported, and was buried obscurely at Chertsey Abbey. Richard III moved it to Windsor in 1484 to manage the growing pilgrim traffic.'
      ]},
      { title: 'Legacy', paragraphs: [
        'The failed king became a popular saint. Miracles multiplied at Windsor — over three hundred were collected — and Henry VII petitioned Rome for a canonisation that lapsed only with the Reformation; the cult of "holy King Henry" was among the most vigorous in late medieval England, the people\'s verdict overturning the political one.',
        'His enduring works are the two great foundations of 1440–41, Eton College and King\'s College, Cambridge, whose chapels — the latter among the last and greatest statements of English Gothic — outlasted every dynasty concerned. The reign itself became the standing lesson, retold from Fortescue to Shakespeare, that medieval monarchy had no answer to a king who was merely good.'
      ]}
    ],
    timeline: [
      { date: '6 December 1421', title: 'Born at Windsor', description: 'Only child of Henry V and Catherine of Valois.' },
      { date: '31 August 1422', title: 'King at nine months', description: 'Succeeds Henry V; by Troyes becomes titular king of France in October.' },
      { date: '16 December 1431', title: 'Crowned in Paris', description: 'The only English king crowned king of France, answering Charles VII\'s Reims coronation.' },
      { date: '1445', title: 'Marries Margaret of Anjou', description: 'The peace policy\'s centrepiece, bound to the secret surrender of Maine.' },
      { date: '1440–1441', title: 'Founds Eton and King\'s', description: 'Establishes his twin colleges at Eton and Cambridge.' },
      { date: 'August 1453', title: 'Mental collapse', description: 'Falls into a seventeen-month stupor on news of Castillon; York becomes Protector.' },
      { date: 'March 1461', title: 'Deposed after Towton', description: 'Edward IV takes the throne; Henry becomes fugitive, then prisoner.' },
      { date: 'October 1470', title: 'The readeption', description: 'Warwick restores him as figurehead king for six months.' },
      { date: '21 May 1471', title: 'Dies in the Tower', description: 'Killed the night of Edward IV\'s return; his son already dead at Tewkesbury.' }
    ],
    relatedEntries: {
      people: [
        { title: 'Henry V of England', type: 'person', slug: 'henry-v-of-england', label: 'Father, whose conquest he inherited and lost' },
        { title: 'Joan of Arc', type: 'person', slug: 'joan-of-arc', label: 'Whose intervention doomed his French crown' }
      ],
      locations: [ { title: 'Kingdom of England', type: 'location', slug: 'kingdom-of-england' }, { title: 'Kingdom of France', type: 'location', slug: 'kingdom-of-france', label: 'The crown he wore and lost' } ],
      events: [
        { title: 'Battle of Castillon', type: 'event', slug: 'battle-of-castillon', label: 'The defeat that ended his French kingdom and broke his mind' },
        { title: 'Battle of Formigny', type: 'event', slug: 'battle-of-formigny', label: 'The loss of Normandy under his rule' }
      ]
    },
    sources: [
      { title: 'Wikimedia Commons image record — Talbot Shrewsbury Book', author: 'Wikimedia Commons', type: 'image source', url: pg('Henry_VI_of_England,_Shrewsbury_book.jpg') },
      { title: 'Henry VI of England — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Henry_VI_of_England' },
      { title: 'Henry VI', author: 'Bertram Wolffe', type: 'book', note: 'A standard critical biography of the reign.' }
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
console.log(`Added ${added} English rulers (of ${people.length}).`)
