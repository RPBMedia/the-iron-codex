/**
 * Closes the English line back to its 9th-century root: Egbert of Wessex and his
 * son Æthelwulf and grandsons Æthelbald and Æthelberht, linking down to the
 * existing anchor Æthelred I of Wessex. Bounded above by Beorhtric (noted), the
 * obscure earlier West Saxon king Egbert succeeded. Idempotent.
 */
import fs from 'node:fs'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dataPath = path.join(__dirname, '../server/data/history.json')
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'))

const WX = { title: 'Kingdom of Wessex', type: 'location', slug: 'kingdom-of-wessex' }
const per = (slug, title, label) => ({ title, type: 'person', slug, label })
const src = (title, url) => ({ title, author: 'Encyclopaedia Britannica', type: 'encyclopedia', url })
const genealogy = 'From a genealogical chronicle roll of the kings of England (British Library, MS Royal 14 B), a fourteenth-century image, not a likeness from life.'

const people = [
  // ── EGBERT OF WESSEX ──────────────────────────────────────────────────────────
  {
    id: 'egbert-of-wessex', type: 'character', name: 'Egbert of Wessex', born: 770, died: 839,
    deathAge: 'about 69', causeOfDeath: 'Natural causes', restingPlace: 'Old Minster, Winchester',
    location: 'Kingdom of Wessex', aliases: ['Ecgberht', 'Egbert the Great', 'Ecgberht of Wessex'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/83/Egbert_-_MS_Royal_14_B_V.jpg',
    summary: 'King of Wessex (802–839) who broke the supremacy of Mercia, made Wessex the leading English kingdom, and founded the royal house that would unite England.',
    title: 'King of Wessex', roles: ['King of Wessex'],
    birth: { date: 'c. 770', place: { name: 'Wessex' }, note: 'Of the West Saxon royal line; spent years in exile at the court of Charlemagne.' },
    death: { date: '839', place: { name: 'Wessex' }, circumstance: 'Died in 839 as the most powerful king in England, succeeded by his son Æthelwulf.' },
    quickFacts: { realm: 'Kingdom of Wessex', dynasty: 'House of Wessex', culture: 'Anglo-Saxon', knownFor: 'ending Mercian supremacy and making Wessex the leading English kingdom' },
    imageInfo: { caption: 'King Egbert of Wessex in a genealogical chronicle of the English kings.', creator: 'Unknown (BL MS Royal 14 B V)', date: '14th century', source: 'Wikimedia Commons', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Egbert_-_MS_Royal_14_B_V.jpg', license: 'Public domain', note: genealogy },
    overview: [
      'Egbert was king of Wessex from 802 to 839, and the ruler who raised his kingdom from a Mercian dependency to the dominant power in England, founding the West Saxon dynasty that would go on to unite the country. Of the royal line of Wessex, he had spent years in exile — partly at the court of Charlemagne — before returning to claim the throne in 802.',
      'In 825 he shattered Mercian supremacy at the Battle of Ellandun, bringing the south-eastern kingdoms of Kent, Surrey, Sussex, and Essex under Wessex, and in 829 he briefly overran Mercia itself and received the submission of Northumbria, so that the Anglo-Saxon Chronicle counted him a "Bretwalda", an overlord of Britain. His grandson would be Alfred the Great.'
    ],
    greatestFeats: ['King of Wessex', 'Ended Mercian supremacy at Ellandun (825)', 'Founder of the dynasty that united England'],
    contentSections: [
      { title: 'Overview', paragraphs: [
        'Egbert was king of Wessex from 802 to 839, and the ruler who raised his kingdom from a Mercian dependency to the dominant power in England, founding the West Saxon dynasty that would go on to unite the country. Of the royal line of Wessex, he had spent years in exile — partly at the court of Charlemagne — before returning to claim the throne in 802.',
        'In 825 he shattered Mercian supremacy at the Battle of Ellandun, bringing the south-eastern kingdoms of Kent, Surrey, Sussex, and Essex under Wessex, and in 829 he briefly overran Mercia itself and received the submission of Northumbria, so that the Anglo-Saxon Chronicle counted him a "Bretwalda", an overlord of Britain. His grandson would be Alfred the Great.'
      ]},
      { title: 'Birth and early life', paragraphs: [
        'Egbert was born about 770, a member of the West Saxon royal house with a claim to the throne. Driven into exile by the dominant Mercian king Offa and his ally Beorhtric of Wessex, he took refuge for years on the Continent, spending time at the court of the great Frankish emperor Charlemagne — an experience that may have shaped his later kingship.',
        'When Beorhtric died in 802, Egbert returned and was accepted as king of Wessex, at first ruling a kingdom still overshadowed by Mercia.'
      ]},
      { title: 'Character and Personality', paragraphs: [
        'Egbert emerges from the sparse records as a patient, formidable, and far-sighted ruler — a king who bided his time through long years of exile and dependency, then struck decisively when Mercian power faltered. His years among the Franks appear to have given him a wider horizon than most Anglo-Saxon kings of his day.',
        'What the record shows is above all political and military judgement: he built up Wessex\'s strength quietly, chose his moment to challenge Mercia, and pressed his victory into a lasting expansion of West Saxon power without overreaching into commitments he could not hold. He was also shrewd enough to consolidate his conquests by installing his son as under-king in the south-east, founding a durable dynasty rather than a passing supremacy. He is remembered as the hard, capable architect of Wessex\'s greatness.'
      ]},
      { title: 'The rise of Wessex', paragraphs: [
        'For the first part of his reign Egbert consolidated his hold on Wessex and campaigned against the Britons of Cornwall. The decisive change came in 825, when he met and crushed the Mercian king Beornwulf at the Battle of Ellandun. The victory ended more than a century of Mercian dominance over southern England: Kent, Surrey, Sussex, and Essex submitted to Egbert, who set his son Æthelwulf to rule them.',
        'In 829 Egbert went further, conquering Mercia outright for a time and leading his army north until the Northumbrians acknowledged his overlordship. Though Mercia soon recovered its independence, the balance of power had shifted for good: Wessex, not Mercia, was now the leading kingdom of the English, a position it would never lose.'
      ]},
      { title: 'Death', paragraphs: [
        'Egbert died in 839, having also beaten back early Viking raids on his coasts, and was buried at Winchester. He was succeeded, without dispute, by his son Æthelwulf, to whom he passed a greatly strengthened and expanded kingdom.'
      ]},
      { title: 'Legacy', paragraphs: [
        'Egbert is remembered as the founder of the greatness of Wessex and of the royal line that would unite England. By breaking Mercian supremacy and making his kingdom the dominant English power, he laid the foundation on which his descendants — his son Æthelwulf, and above all his grandson Alfred the Great and great-great-grandson Æthelstan — would build the unified English monarchy. Later tradition, looking back, sometimes counted him the first king of the English.'
      ]}
    ],
    keyAchievements: [
      { title: 'King of Wessex, 802–839', description: 'Raised Wessex from Mercian dependency to the leading English kingdom.' },
      { title: 'Victory at Ellandun, 825', description: 'Broke Mercian supremacy and won the south-east of England.' },
      { title: 'Founder of the West Saxon dynasty', description: 'Began the line that would unite England under his descendants.' }
    ],
    timeline: [
      { date: 'c. 770', title: 'Born', description: 'Born of the West Saxon royal line; later exiled at Charlemagne\'s court.' },
      { date: '802', title: 'Becomes King of Wessex', description: 'Returns from exile to take the throne on the death of Beorhtric.', links: [WX] },
      { date: '825', title: 'Victory at Ellandun', description: 'Crushes Mercia and wins Kent, Surrey, Sussex, and Essex for Wessex.' },
      { date: '829', title: 'Overlord of Britain', description: 'Briefly conquers Mercia and receives the submission of Northumbria as "Bretwalda".' },
      { date: '839', title: 'Dies', description: 'Dies the most powerful king in England; his son Æthelwulf succeeds.', links: [per('aethelwulf-of-wessex', 'Æthelwulf of Wessex', 'His son and successor')] }
    ],
    relatedEntries: {
      locations: [ { ...WX, label: 'The kingdom he made supreme' } ],
      people: [ per('aethelwulf-of-wessex', 'Æthelwulf of Wessex', 'His son and successor'), per('alfred-the-great', 'Alfred the Great', 'His grandson') ],
      events: []
    },
    sources: [ src('Egbert | king of Wessex', 'https://www.britannica.com/biography/Egbert'), src('Anglo-Saxon England', 'https://www.britannica.com/place/United-Kingdom/Anglo-Saxon-England') ],
    isRuler: true,
    succession: { office: 'King of Wessex',
      predecessor: { displayName: 'Beorhtric of Wessex', note: 'The earlier West Saxon king, on whose death in 802 Egbert returned from exile to take the throne. The obscure earlier kings of Wessex are not yet covered in the Codex.' },
      successor: { personSlug: 'aethelwulf-of-wessex', displayName: 'Æthelwulf of Wessex', note: 'His son, whom he had set to rule the newly won south-east.' } }
  },

  // ── ÆTHELWULF ─────────────────────────────────────────────────────────────────
  {
    id: 'aethelwulf-of-wessex', type: 'character', name: 'Æthelwulf of Wessex', born: 795, died: 858,
    deathAge: 'about 63', causeOfDeath: 'Natural causes', restingPlace: 'Steyning, later Winchester',
    location: 'Kingdom of Wessex', aliases: ['Ethelwulf', 'Æthelwulf'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/d6/%C3%86thelwulf_-_MS_Royal_14_B_VI.jpg',
    summary: 'King of Wessex (839–858), son of Egbert and father of Alfred the Great, a pious king who checked the Vikings at Aclea and made a famous pilgrimage to Rome.',
    title: 'King of Wessex', roles: ['King of Wessex'],
    birth: { date: 'c. 795', place: { name: 'Wessex' }, note: 'Son of Egbert; father of four future kings, including Alfred the Great.' },
    death: { date: '13 January 858', place: { name: 'Wessex' }, circumstance: 'Died in 858, having divided the kingdom with his rebellious son Æthelbald to avoid civil war.' },
    quickFacts: { realm: 'Kingdom of Wessex', dynasty: 'House of Wessex', culture: 'Anglo-Saxon', knownFor: 'his victory over the Vikings at Aclea and his pilgrimage to Rome' },
    imageInfo: { caption: 'King Æthelwulf of Wessex in a genealogical chronicle of the English kings.', creator: 'Unknown (BL MS Royal 14 B VI)', date: 'c. 1320', source: 'Wikimedia Commons', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Æthelwulf_-_MS_Royal_14_B_VI.jpg', license: 'Public domain', note: genealogy },
    overview: [
      'Æthelwulf was king of Wessex from 839 to 858, the son of Egbert and the father of four sons who would each become king — among them Alfred the Great. He consolidated the dominant position his father had won for Wessex and, in a mounting Viking storm, won one of the great English victories of the age.',
      'In 851 he defeated a large Danish army at the Battle of Aclea, a rare and decisive check on the Vikings. A notably pious king, he made a year-long pilgrimage to Rome in 855–856, granting a tithe of royal land to the Church and marrying, on his return, a Frankish princess. His absence had bred rebellion at home, which he settled by dividing the kingdom with his son rather than plunging Wessex into civil war.'
    ],
    greatestFeats: ['King of Wessex', 'Defeated the Vikings at Aclea (851)', 'Father of Alfred the Great'],
    contentSections: [
      { title: 'Overview', paragraphs: [
        'Æthelwulf was king of Wessex from 839 to 858, the son of Egbert and the father of four sons who would each become king — among them Alfred the Great. He consolidated the dominant position his father had won for Wessex and, in a mounting Viking storm, won one of the great English victories of the age.',
        'In 851 he defeated a large Danish army at the Battle of Aclea, a rare and decisive check on the Vikings. A notably pious king, he made a year-long pilgrimage to Rome in 855–856, granting a tithe of royal land to the Church and marrying, on his return, a Frankish princess. His absence had bred rebellion at home, which he settled by dividing the kingdom with his son rather than plunging Wessex into civil war.'
      ]},
      { title: 'Birth and early life', paragraphs: [
        'Æthelwulf was born about 795, the son of Egbert. When his father broke Mercian power and won the south-east of England in 825, Æthelwulf was installed as under-king of Kent and its neighbouring provinces, gaining long experience of rule before he inherited Wessex itself on Egbert\'s death in 839.',
        'By his first wife, Osburh, he was the father of five sons and a daughter; four of the sons — Æthelbald, Æthelberht, Æthelred, and Alfred — would reign in turn.'
      ]},
      { title: 'Character and Personality', paragraphs: [
        'Æthelwulf is remembered as a devout, generous, and conciliatory king, more temperate than martial by inclination, though capable of decisive action when the kingdom was threatened. His deep piety shaped his reign: he was open-handed to the Church, granted it a great endowment of land, and undertook the long and dangerous journey to Rome that few kings could contemplate.',
        'That same mildness governed his handling of crisis. Faced on his return from Rome with a son who had seized power in his absence, Æthelwulf chose reconciliation over vengeance, accepting a division of the kingdom rather than risking civil war — a self-effacing wisdom the chroniclers admired. He was a stabiliser rather than a conqueror, whose careful, pious rule preserved and passed on the greatness his father had built, and whose true legacy lay in the remarkable sons he raised.'
      ]},
      { title: 'The Viking wars and the pilgrimage to Rome', paragraphs: [
        'Æthelwulf\'s reign coincided with the intensifying Viking assault on England. Danish fleets grew larger and bolder, and in 851 a great army stormed Canterbury and London and put the Mercian king to flight. Æthelwulf met this host at Aclea and, in the words of the Anglo-Saxon Chronicle, made "the greatest slaughter of a heathen host" yet heard of — a victory that gave Wessex a generation\'s respite.',
        'Secure enough to leave his kingdom, Æthelwulf travelled to Rome in 855 on pilgrimage, taking the young Alfred with him, and granted a tenth of his royal lands to the Church. On the way home he married Judith, daughter of the Frankish king Charles the Bald. In his absence, however, his eldest surviving son Æthelbald had led a conspiracy to seize the throne; Æthelwulf averted war by agreeing to share the kingdom with him.'
      ]},
      { title: 'Death', paragraphs: [
        'Æthelwulf died on 13 January 858. By his arrangement the crown passed to his rebellious son Æthelbald in Wessex proper, while another son, Æthelberht, held the south-east — a partition that would soon be reunited as his sons succeeded one another.'
      ]},
      { title: 'Legacy', paragraphs: [
        'Æthelwulf is remembered as the pious king who held Wessex steady through the first great surge of the Viking wars and as the father of the royal brothers who followed him — above all Alfred the Great, whose survival and greatness rested on the strong, well-ordered kingdom Æthelwulf preserved. His victory at Aclea and his careful, unselfish statesmanship in the crisis of 856 mark him as a quietly successful king in a violent age.'
      ]}
    ],
    keyAchievements: [
      { title: 'King of Wessex, 839–858', description: 'Consolidated the supremacy his father Egbert had won.' },
      { title: 'Victory at Aclea, 851', description: 'Inflicted a rare, crushing defeat on a great Viking army.' },
      { title: 'Pilgrimage to Rome and the Church tithe', description: 'Made a famous pilgrimage and endowed the Church with royal land.' }
    ],
    timeline: [
      { date: 'c. 795', title: 'Born', description: 'Born the son of Egbert of Wessex.' },
      { date: '825', title: 'Under-king of Kent', description: 'Installed by his father to rule the newly won south-eastern provinces.' },
      { date: '839', title: 'Becomes King of Wessex', description: 'Succeeds his father Egbert on the West Saxon throne.', links: [per('egbert-of-wessex', 'Egbert of Wessex', 'His father and predecessor'), WX] },
      { date: '851', title: 'Victory at Aclea', description: 'Destroys a great Danish army in one of the age\'s decisive English victories.' },
      { date: '855–856', title: 'Pilgrimage to Rome', description: 'Journeys to Rome with young Alfred and endows the Church; his son rebels in his absence.', links: [per('alfred-the-great', 'Alfred the Great', 'His son, who accompanied him')] },
      { date: '13 January 858', title: 'Dies', description: 'Dies having divided the kingdom with his son Æthelbald to keep the peace.', links: [per('aethelbald-of-wessex', 'Æthelbald of Wessex', 'His son and successor')] }
    ],
    relatedEntries: {
      locations: [ { ...WX, label: 'His kingdom' } ],
      people: [ per('egbert-of-wessex', 'Egbert of Wessex', 'His father and predecessor'), per('aethelbald-of-wessex', 'Æthelbald of Wessex', 'His son and successor'), per('alfred-the-great', 'Alfred the Great', 'His youngest son') ],
      events: []
    },
    sources: [ src('Ethelwulf | king of Wessex', 'https://www.britannica.com/biography/Ethelwulf'), src('Anglo-Saxon England', 'https://www.britannica.com/place/United-Kingdom/Anglo-Saxon-England') ],
    isRuler: true,
    succession: { office: 'King of Wessex',
      predecessor: { personSlug: 'egbert-of-wessex', displayName: 'Egbert of Wessex', note: 'His father, who had made Wessex the leading English kingdom.' },
      successor: { personSlug: 'aethelbald-of-wessex', displayName: 'Æthelbald of Wessex', note: 'His eldest surviving son, who had rebelled in his absence and with whom he shared the kingdom.' } }
  },

  // ── ÆTHELBALD ─────────────────────────────────────────────────────────────────
  {
    id: 'aethelbald-of-wessex', type: 'character', name: 'Æthelbald of Wessex', born: 831, died: 860,
    deathAge: 'about 29', causeOfDeath: 'Natural causes', restingPlace: 'Sherborne Abbey',
    location: 'Kingdom of Wessex', aliases: ['Ethelbald', 'Æthelbald'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/%C3%86thelbald_-_MS_Royal_14_B_VI.jpg',
    summary: 'King of Wessex (858–860), eldest surviving son of Æthelwulf, who rebelled against his father and scandalously married his father\'s young widow before his short reign ended.',
    title: 'King of Wessex', roles: ['King of Wessex'],
    birth: { date: 'c. 831', place: { name: 'Wessex' }, note: 'Eldest surviving son of Æthelwulf; brother of Alfred the Great.' },
    death: { date: '20 December 860', place: { name: 'Wessex' }, circumstance: 'Died in 860 after a reign of about two years; succeeded by his brother Æthelberht.' },
    quickFacts: { realm: 'Kingdom of Wessex', dynasty: 'House of Wessex', culture: 'Anglo-Saxon', knownFor: 'his rebellion against his father and his scandalous marriage' },
    imageInfo: { caption: 'King Æthelbald of Wessex in a genealogical chronicle of the English kings.', creator: 'Unknown (BL MS Royal 14 B VI)', date: 'c. 1350', source: 'Wikimedia Commons', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Æthelbald_-_MS_Royal_14_B_VI.jpg', license: 'Public domain', note: genealogy },
    overview: [
      'Æthelbald was king of Wessex from 858 to 860, the eldest surviving son of Æthelwulf and an elder brother of Alfred the Great. He is remembered chiefly for the manner of his coming to power: while his father was on pilgrimage to Rome in 855–856, Æthelbald led a conspiracy to seize the throne, and on Æthelwulf\'s return the kingdom was divided between them to avoid war.',
      'On his father\'s death in 858 Æthelbald took the whole of Wessex, and promptly scandalised the Church by marrying Judith, his father\'s young Frankish widow — a union condemned as contrary to canon law. His reign lasted barely two years before his death in 860, when the crown passed to his brother Æthelberht.'
    ],
    greatestFeats: ['King of Wessex'],
    contentSections: [
      { title: 'Overview', paragraphs: [
        'Æthelbald was king of Wessex from 858 to 860, the eldest surviving son of Æthelwulf and an elder brother of Alfred the Great. He is remembered chiefly for the manner of his coming to power: while his father was on pilgrimage to Rome in 855–856, Æthelbald led a conspiracy to seize the throne, and on Æthelwulf\'s return the kingdom was divided between them to avoid war.',
        'On his father\'s death in 858 Æthelbald took the whole of Wessex, and promptly scandalised the Church by marrying Judith, his father\'s young Frankish widow — a union condemned as contrary to canon law. His reign lasted barely two years before his death in 860, when the crown passed to his brother Æthelberht.'
      ]},
      { title: 'Birth and early life', paragraphs: [
        'Æthelbald was born about 831, one of the elder sons of King Æthelwulf. He grew up as a prince of the dominant English kingdom and, as his father aged, came to expect the succession. His impatience for it, and perhaps fear that Æthelwulf\'s pilgrimage and Frankish marriage might reorder the inheritance, drove him into rebellion.'
      ]},
      { title: 'Character and Personality', paragraphs: [
        'Æthelbald is a dimly recorded figure, seen mostly through two controversial acts — his rebellion and his marriage — that earned him the disapproval of the churchmen who wrote the sources. From them he emerges as ambitious, headstrong, and heedless of both filial duty and canon law: a prince who would not wait for a crown, and a king who took his father\'s widow in defiance of the Church.',
        'Whether this is the whole man is impossible to know; his reign was too short, and the record too thin and hostile, to reveal much else. He was clearly forceful and self-willed, and his revolt showed the dangerous ambition that could grip a royal heir. But he also proved willing, in 856, to accept a compromise rather than fight his own father to the death — so that even his rebellion stopped short of the worst. He remains the wayward eldest brother in the story of Æthelwulf\'s remarkable sons.'
      ]},
      { title: 'Rebellion and reign', paragraphs: [
        'The defining episode of Æthelbald\'s life came during his father\'s absence in Rome. With the support of some leading men, Æthelbald plotted to prevent Æthelwulf\'s return to power. The old king, coming home in 856, chose not to fight: rather than tear Wessex apart, he agreed to a partition, leaving Æthelbald the western, senior portion of the kingdom.',
        'When Æthelwulf died in 858, Æthelbald ruled the whole of Wessex. His marriage to Judith, his father\'s widow — a girl of perhaps fourteen, and a great-granddaughter of Charlemagne — was denounced by the Church as incestuous and unlawful, and appears to have been dissolved. His brief reign left little other mark before his early death.'
      ]},
      { title: 'Death', paragraphs: [
        'Æthelbald died on 20 December 860, after a reign of about two years, and was buried at Sherborne. Having no heir to succeed him, he was followed by his brother Æthelberht, who reunited the western kingdom with the south-east he already ruled.'
      ]},
      { title: 'Legacy', paragraphs: [
        'Æthelbald is remembered as the least edifying of the sons of Æthelwulf — the rebel prince and scandalous king whose short reign is a cautionary episode between his father\'s careful rule and the reunification under his brothers. His death without heirs cleared the way for the orderly succession of Æthelberht, Æthelred, and finally Alfred, under whom the House of Wessex would meet and master the Viking storm.'
      ]}
    ],
    keyAchievements: [
      { title: 'King of Wessex, 858–860', description: 'Ruled the whole kingdom after sharing it with his father.' },
      { title: 'Held the western kingdom from 856', description: 'Won a share of Wessex through his revolt during Æthelwulf\'s pilgrimage.' }
    ],
    timeline: [
      { date: 'c. 831', title: 'Born', description: 'Born an elder son of King Æthelwulf.' },
      { date: '856', title: 'Rebels and wins a share of Wessex', description: 'Conspires to seize power during his father\'s pilgrimage; the kingdom is divided.', links: [per('aethelwulf-of-wessex', 'Æthelwulf of Wessex', 'His father')] },
      { date: '858', title: 'Becomes King of Wessex', description: 'Takes the whole kingdom on his father\'s death.', links: [WX] },
      { date: '858', title: 'Marries Judith', description: 'Scandalously marries his father\'s young widow, condemned by the Church.' },
      { date: '20 December 860', title: 'Dies', description: 'Dies after a short reign; his brother Æthelberht succeeds and reunites the kingdom.', links: [per('aethelberht-of-wessex', 'Æthelberht of Wessex', 'His brother and successor')] }
    ],
    relatedEntries: {
      locations: [ { ...WX, label: 'His kingdom' } ],
      people: [ per('aethelwulf-of-wessex', 'Æthelwulf of Wessex', 'His father and predecessor'), per('aethelberht-of-wessex', 'Æthelberht of Wessex', 'His brother and successor') ],
      events: []
    },
    sources: [ src('Ethelbald | king of Wessex', 'https://www.britannica.com/place/United-Kingdom/Anglo-Saxon-England'), src('Anglo-Saxon England', 'https://www.britannica.com/place/United-Kingdom/Anglo-Saxon-England') ],
    isRuler: true,
    succession: { office: 'King of Wessex',
      predecessor: { personSlug: 'aethelwulf-of-wessex', displayName: 'Æthelwulf of Wessex', note: 'His father, whose throne he had seized a share of by revolt, then inherited in full.' },
      successor: { personSlug: 'aethelberht-of-wessex', displayName: 'Æthelberht of Wessex', note: 'His brother, who reunited Wessex with the south-east on Æthelbald\'s death.' } }
  },

  // ── ÆTHELBERHT ────────────────────────────────────────────────────────────────
  {
    id: 'aethelberht-of-wessex', type: 'character', name: 'Æthelberht of Wessex', born: 835, died: 865,
    deathAge: 'about 30', causeOfDeath: 'Natural causes', restingPlace: 'Sherborne Abbey',
    location: 'Kingdom of Wessex', aliases: ['Ethelbert', 'Æthelberht'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/81/%C3%86thelberht_-_MS_Royal_14_B_VI.jpg',
    summary: 'King of Wessex (860–865), son of Æthelwulf, who permanently reunited Wessex with the south-east and defended his realm against Viking raids, including a sack of Winchester.',
    title: 'King of Wessex', roles: ['King of Wessex'],
    birth: { date: 'c. 835', place: { name: 'Wessex' }, note: 'Son of Æthelwulf; brother of Æthelred I and Alfred the Great.' },
    death: { date: '865', place: { name: 'Wessex' }, circumstance: 'Died in 865, just as the Viking Great Heathen Army was arriving in England; succeeded by his brother Æthelred.' },
    quickFacts: { realm: 'Kingdom of Wessex', dynasty: 'House of Wessex', culture: 'Anglo-Saxon', knownFor: 'reuniting Wessex and the south-east and defending against Viking raids' },
    imageInfo: { caption: 'King Æthelberht of Wessex in a genealogical chronicle of the English kings.', creator: 'Unknown (BL MS Royal 14 B VI)', date: '14th century', source: 'Wikimedia Commons', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Æthelberht_-_MS_Royal_14_B_VI.jpg', license: 'Public domain', note: genealogy },
    overview: [
      'Æthelberht was king of Wessex from 860 to 865, the son of Æthelwulf and a brother of Æthelred I and Alfred the Great. He had ruled the south-eastern provinces of Kent, Surrey, Sussex, and Essex as under-king during his brother Æthelbald\'s reign, and on Æthelbald\'s death in 860 he united them with Wessex proper.',
      'Crucially, he did not treat the south-east as a separate sub-kingdom to be handed on, but merged it permanently into a single realm — an important step in the making of a unified kingdom. His reign was troubled by Viking raids, including a Danish force that stormed and sacked Winchester before being defeated, and it ended in 865 just as the far greater threat of the Viking Great Heathen Army reached England.'
    ],
    greatestFeats: ['King of Wessex', 'Permanently reunited Wessex and the south-east'],
    contentSections: [
      { title: 'Overview', paragraphs: [
        'Æthelberht was king of Wessex from 860 to 865, the son of Æthelwulf and a brother of Æthelred I and Alfred the Great. He had ruled the south-eastern provinces of Kent, Surrey, Sussex, and Essex as under-king during his brother Æthelbald\'s reign, and on Æthelbald\'s death in 860 he united them with Wessex proper.',
        'Crucially, he did not treat the south-east as a separate sub-kingdom to be handed on, but merged it permanently into a single realm — an important step in the making of a unified kingdom. His reign was troubled by Viking raids, including a Danish force that stormed and sacked Winchester before being defeated, and it ended in 865 just as the far greater threat of the Viking Great Heathen Army reached England.'
      ]},
      { title: 'Birth and early life', paragraphs: [
        'Æthelberht was born about 835, a son of King Æthelwulf. When his father went on pilgrimage to Rome and then divided the kingdom, Æthelberht was given, or confirmed in, the rule of the south-eastern provinces — Kent, Surrey, Sussex, and Essex — which he governed as under-king while his elder brother Æthelbald held Wessex proper.',
        'On Æthelbald\'s death in 860, rather than pass the south-east to another brother as a separate charge, Æthelberht took the whole inheritance together.'
      ]},
      { title: 'Character and Personality', paragraphs: [
        'Æthelberht is remembered as a capable and well-regarded king, and his brief reign left a gentler reputation than his brother Æthelbald\'s. The sources, with little to record of scandal or strife within the kingdom, present a ruler under whom Wessex enjoyed a measure of harmony and good order even as the Viking danger grew.',
        'His most telling act was quiet but significant: the permanent union of the south-eastern lands with Wessex, setting aside the old practice of parcelling them out as a separate under-kingdom. That decision — whether by design or convenience — shows a king thinking in terms of a single, consolidated realm rather than a family patrimony to be divided, and marks him as a modest but constructive contributor to the slow making of a united England.'
      ]},
      { title: 'A reunited kingdom and the Viking raids', paragraphs: [
        'By keeping Wessex and the south-east under one crown, Æthelberht ended the arrangement, going back to his grandfather Egbert, by which the conquered south-east was ruled by a separate member of the royal house. From his reign on, these lands were simply part of an enlarged Wessex — a consolidation that strengthened the kingdom for the ordeal to come.',
        'That ordeal was already at hand. Viking raids intensified through his reign; a Danish army landed and sacked Winchester, the chief city of Wessex, before the men of Hampshire and Berkshire caught and defeated it. In 865, as Æthelberht\'s reign ended, the great Viking army that would overrun much of England — the "Great Heathen Army" — arrived on its shores.'
      ]},
      { title: 'Death', paragraphs: [
        'Æthelberht died in 865, after a reign of about five years, and was buried beside his brother Æthelbald at Sherborne. He was succeeded by his brother Æthelred, who would face the full fury of the Viking invasion.'
      ]},
      { title: 'Legacy', paragraphs: [
        'Æthelberht is remembered as the king who permanently joined the south-east to Wessex, a quiet but real step toward the unified English kingdom, and as the third of Æthelwulf\'s sons to hold the crown in the orderly brotherly succession that led to Alfred the Great. His peaceful, consolidating reign was the last calm before the storm of the Great Heathen Army broke over his brothers\' reigns.'
      ]}
    ],
    keyAchievements: [
      { title: 'King of Wessex, 860–865', description: 'Ruled a kingdom increasingly pressed by Viking raids.' },
      { title: 'Permanently reunited Wessex and the south-east', description: 'Merged Kent and the south-eastern provinces into a single realm.' }
    ],
    timeline: [
      { date: 'c. 835', title: 'Born', description: 'Born a son of King Æthelwulf.' },
      { date: 'c. 855', title: 'Under-king of the south-east', description: 'Rules Kent, Surrey, Sussex, and Essex during his brother Æthelbald\'s reign.' },
      { date: '860', title: 'Becomes King of Wessex', description: 'Succeeds Æthelbald and permanently unites the south-east with Wessex.', links: [per('aethelbald-of-wessex', 'Æthelbald of Wessex', 'His brother and predecessor'), WX] },
      { date: 'c. 860', title: 'Sack of Winchester', description: 'A Danish army storms Winchester before being defeated by the local levies.' },
      { date: '865', title: 'Dies as the Great Army arrives', description: 'Dies just as the Viking Great Heathen Army reaches England; his brother Æthelred succeeds.', links: [per('aethelred-i-of-wessex', 'Æthelred I of Wessex', 'His brother and successor')] }
    ],
    relatedEntries: {
      locations: [ { ...WX, label: 'His kingdom' } ],
      people: [ per('aethelbald-of-wessex', 'Æthelbald of Wessex', 'His brother and predecessor'), per('aethelred-i-of-wessex', 'Æthelred I of Wessex', 'His brother and successor'), per('alfred-the-great', 'Alfred the Great', 'His youngest brother') ],
      events: []
    },
    sources: [ src('Ethelbert | king of Wessex', 'https://www.britannica.com/place/United-Kingdom/Anglo-Saxon-England'), src('Anglo-Saxon England', 'https://www.britannica.com/place/United-Kingdom/Anglo-Saxon-England') ],
    isRuler: true,
    succession: { office: 'King of Wessex',
      predecessor: { personSlug: 'aethelbald-of-wessex', displayName: 'Æthelbald of Wessex', note: 'His brother, on whose death Æthelberht united the south-east with Wessex proper.' },
      successor: { personSlug: 'aethelred-i-of-wessex', displayName: 'Æthelred I of Wessex', note: 'His brother, who would face the full onslaught of the Viking Great Heathen Army.' } }
  }
]

// Insert / replace
let added = 0, replaced = 0
for (const p of people) {
  const i = data.characters.findIndex(c => c.id === p.id)
  if (i >= 0) { data.characters[i] = p; replaced++ } else { data.characters.push(p); added++ }
}

// Relink the one existing endpoint.
const byId = new Map(data.characters.map(c => [c.id, c]))
const c = byId.get('aethelred-i-of-wessex')
if (c?.succession?.predecessor) {
  c.succession.predecessor = { personSlug: 'aethelberht-of-wessex', displayName: 'Æthelberht of Wessex', note: 'His elder brother, third of Æthelwulf\'s sons to hold the crown in turn.' }
  console.log('relinked aethelred-i-of-wessex.predecessor -> aethelberht-of-wessex')
}

fs.writeFileSync(dataPath, JSON.stringify(data, null, 2))
console.log(`\n9th-century Wessex kings added: ${added}, replaced: ${replaced}. Total characters: ${data.characters.length}`)
