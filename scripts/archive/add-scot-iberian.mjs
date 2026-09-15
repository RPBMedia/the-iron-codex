/**
 * Scottish & Iberian singles. Five rulers whose named endpoints link to existing
 * anchors: Robert II of Scotland (David II's successor), Margaret Maid of Norway
 * (John Balliol's predecessor), Sancho III and Henry I of Castile (Alfonso VIII's
 * predecessor and successor), and Alfonso XI of Castile (Peter of Castile's
 * predecessor). Open-side neighbours are noted boundaries. Idempotent.
 */
import fs from 'node:fs'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dataPath = path.join(__dirname, '../server/data/history.json')
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'))

const SCO = { title: 'Kingdom of Scotland', type: 'location', slug: 'kingdom-of-scotland' }
const CAS = { title: 'Kingdom of Castile', type: 'location', slug: 'kingdom-of-castile' }
const per = (slug, title, label) => ({ title, type: 'person', slug, label })
const ev = (slug, title, label) => ({ title, type: 'event', slug, label })
const src = (title, url) => ({ title, author: 'Encyclopaedia Britannica', type: 'encyclopedia', url })

const people = [
  // ── ROBERT II OF SCOTLAND ─────────────────────────────────────────────────────
  {
    id: 'robert-ii-of-scotland', type: 'character', name: 'Robert II of Scotland', born: 1316, died: 1390,
    deathAge: 'about 74', causeOfDeath: 'Natural causes', restingPlace: 'Scone Abbey',
    location: 'Kingdom of Scotland', aliases: ['Robert the Steward', 'Robert Stewart'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/Robert_II%2C_King_of_Scotland_seal.png',
    summary: 'King of Scots (1371–1390) and first monarch of the House of Stewart, a grandson of Robert the Bruce who ruled a weak but stable kingdom in his old age.',
    title: 'King of Scots', roles: ['King of Scots'],
    birth: { date: '2 March 1316', place: { name: 'Paisley' }, note: 'Son of Walter the Steward and Marjorie Bruce, daughter of Robert the Bruce.' },
    death: { date: '19 April 1390', place: { name: 'Dundonald Castle' }, circumstance: 'Died in old age in 1390, succeeded by his son Robert III.' },
    quickFacts: { realm: 'Kingdom of Scotland', dynasty: 'House of Stewart (founder)', culture: 'Scottish', knownFor: 'founding the royal House of Stewart' },
    imageInfo: { caption: 'The royal seal of Robert II, first Stewart king of Scots.', creator: 'Royal Scottish chancery', date: 'Seal of 1371–1390', source: 'Wikimedia Commons', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Robert_II,_King_of_Scotland_seal.png', license: 'Public domain', note: 'A drawing of the king\'s great seal; no portrait from life survives.' },
    overview: [
      'Robert II was king of Scots from 1371 to 1390 and the first monarch of the House of Stewart, the dynasty that would rule Scotland, and later all Britain, for over three centuries. A grandson of Robert the Bruce through his mother Marjorie, and hereditary High Steward of Scotland, he was heir presumptive throughout the reign of his uncle David II.',
      'He served long years as guardian of the realm during David\'s captivity in England, and finally came to the throne himself in 1371, already fifty-five. His reign was peaceful but weak: an ageing king who left much of the governing and fighting to his many sons, presiding over a Scotland that had won its independence but remained poor and factious.'
    ],
    greatestFeats: ['Founder of the House of Stewart', 'King of Scots', 'Guardian of Scotland during David II\'s captivity'],
    contentSections: [
      { title: 'Overview', paragraphs: [
        'Robert II was king of Scots from 1371 to 1390 and the first monarch of the House of Stewart, the dynasty that would rule Scotland, and later all Britain, for over three centuries. A grandson of Robert the Bruce through his mother Marjorie, and hereditary High Steward of Scotland, he was heir presumptive throughout the reign of his uncle David II.',
        'He served long years as guardian of the realm during David\'s captivity in England, and finally came to the throne himself in 1371, already fifty-five. His reign was peaceful but weak: an ageing king who left much of the governing and fighting to his many sons, presiding over a Scotland that had won its independence but remained poor and factious.'
      ]},
      { title: 'Birth and early life', paragraphs: [
        'Robert was born in 1316, the son of Walter the Steward and of Marjorie Bruce, the daughter of King Robert the Bruce; his mother died giving birth to him. As hereditary High Steward — from which office the family took the surname Stewart — and grandson of the hero-king, Robert stood close to the throne, and when the childless David II ruled, Robert was his heir.',
        'During David\'s long captivity in England after the disaster of Neville\'s Cross (1346), Robert twice acted as guardian of the kingdom, gaining decades of experience of Scottish government before he ever wore the crown.'
      ]},
      { title: 'Character and Personality', paragraphs: [
        'Robert II is remembered as an amiable, cautious, and rather ineffectual king — a marked contrast to his warrior grandfather. Handsome and famously fertile, with a vast brood of legitimate and illegitimate children, he was better at securing his dynasty than at ruling it, and in his later years his energy visibly failed.',
        'Contemporaries and historians have judged him a weak monarch who allowed royal authority to slacken and left the real exercise of power to his ambitious sons and the great magnates. Yet his very mildness and his long apprenticeship as guardian gave Scotland a measure of continuity and peace after the upheavals of the wars of independence. He was a survivor and a founder rather than a leader — the patient heir who at last inherited, and who planted a dynasty that would outlast every rival.'
      ]},
      { title: 'Reign', paragraphs: [
        'Robert came to the throne in 1371 on the death of David II, the last of the direct Bruce line, and was crowned at Scone. His reign avoided major war with England for a time, and the ransom and border pressures of David\'s day eased, but royal government grew slack. Increasingly infirm, Robert delegated authority to his sons, notably the earls of Fife and Buchan — the latter, the "Wolf of Badenoch", a byword for lawlessness in the north.',
        'By the 1380s Robert had effectively been sidelined by his own heirs, who governed in his name as his powers declined, even as border warfare with England resumed.'
      ]},
      { title: 'Death', paragraphs: [
        'Robert II died at Dundonald Castle on 19 April 1390 and was buried at Scone. He was succeeded by his eldest son, who took the regnal name Robert III — continuing the Stewart line.'
      ]},
      { title: 'Legacy', paragraphs: [
        'Robert II is remembered above all as the founder of the House of Stewart, the dynasty descended from him that would rule Scotland until 1603 and then, as the Stuarts, the whole of Britain. If he was himself a weak king, his dynastic achievement was immense: through his many descendants the blood of Robert the Bruce and the Stewart name passed down the centuries to shape the history of two kingdoms.'
      ]}
    ],
    keyAchievements: [
      { title: 'First Stewart king of Scots', description: 'Founded the dynasty that ruled Scotland and later Britain for centuries.' },
      { title: 'Guardian of Scotland', description: 'Governed the realm during David II\'s long captivity in England.' },
      { title: 'A peaceful, stabilising reign', description: 'Gave Scotland continuity after the wars of independence.' }
    ],
    timeline: [
      { date: '2 March 1316', title: 'Born', description: 'Born to Walter the Steward and Marjorie Bruce, daughter of Robert the Bruce.', links: [per('robert-the-bruce', 'Robert the Bruce', 'His grandfather')] },
      { date: '1346', title: 'Guardian of the realm', description: 'Governs Scotland during the captivity of David II after Neville\'s Cross.', links: [per('david-ii-of-scotland', 'David II of Scotland', 'His uncle, whose realm he guarded')] },
      { date: '1371', title: 'Becomes King of Scots', description: 'Succeeds the childless David II, founding the House of Stewart.', links: [per('david-ii-of-scotland', 'David II of Scotland', 'His uncle and predecessor'), SCO] },
      { date: 'c. 1384', title: 'Sidelined by his sons', description: 'His failing powers pass to his sons as border war with England resumes.' },
      { date: '19 April 1390', title: 'Dies', description: 'Dies at Dundonald; his son succeeds as Robert III.' }
    ],
    relatedEntries: {
      locations: [ { ...SCO, label: 'His kingdom' } ],
      people: [ per('david-ii-of-scotland', 'David II of Scotland', 'His uncle and predecessor'), per('robert-the-bruce', 'Robert the Bruce', 'His grandfather, the hero-king') ],
      events: []
    },
    sources: [ src('Robert II | king of Scotland', 'https://www.britannica.com/biography/Robert-II-king-of-Scotland'), src('House of Stewart', 'https://www.britannica.com/topic/house-of-Stewart') ],
    isRuler: true,
    succession: { office: 'King of Scots',
      predecessor: { personSlug: 'david-ii-of-scotland', displayName: 'David II of Scotland', note: 'His uncle, the last of the direct Bruce line, on whose childless death Robert founded the Stewart dynasty.' },
      successor: { displayName: 'Robert III', note: 'His eldest son, who succeeded in 1390 and continued the House of Stewart.' } }
  },

  // ── MARGARET, MAID OF NORWAY ──────────────────────────────────────────────────
  {
    id: 'margaret-maid-of-norway', type: 'character', name: 'Margaret, Maid of Norway', born: 1283, died: 1290,
    deathAge: 'about 7', causeOfDeath: 'Illness, at sea', restingPlace: 'Bergen, Norway',
    location: 'Kingdom of Scotland', aliases: ['Margaret of Norway', 'the Maid of Norway'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/d6/Margaret%2C_Maid_of_Norway_in_the_Lerwick_Town_Hall_%28cropped%29.jpg',
    summary: 'Queen of Scots (1286–1290), the child heiress whose death at sea, aged seven, ended the direct royal line and triggered the succession crisis that led to the Wars of Scottish Independence.',
    title: 'Queen of Scots', roles: ['Queen of Scots'],
    birth: { date: 'c. 1283', place: { name: 'Norway' }, note: 'Daughter of King Eric II of Norway and Margaret of Scotland; granddaughter of Alexander III.' },
    death: { date: 'September 1290', place: { name: 'Orkney' }, circumstance: 'Died in Orkney, aged about seven, on the voyage to take up her Scottish inheritance.' },
    quickFacts: { realm: 'Kingdom of Scotland', dynasty: 'House of Dunkeld / Sverre (Norway)', culture: 'Norwegian / Scottish', knownFor: 'the child-queen whose death triggered the Scottish succession crisis' },
    imageInfo: { caption: 'Margaret, Maid of Norway, in a commemorative stained-glass window in Lerwick Town Hall, Shetland.', creator: 'Victorian stained-glass window', date: 'Later commemorative window (19th century)', source: 'Wikimedia Commons', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Margaret,_Maid_of_Norway_in_the_Lerwick_Town_Hall_(cropped).jpg', license: 'CC BY-SA 2.0', note: 'A later commemorative depiction, not a likeness from life.' },
    overview: [
      'Margaret, known as the Maid of Norway, was queen of Scots from 1286 to 1290, though she never set foot in her kingdom nor was crowned. The daughter of King Eric II of Norway and granddaughter of the Scottish king Alexander III, she became heiress to the Scottish throne as an infant when Alexander died in 1286 leaving no other direct descendant.',
      'Plans were laid to bring the little queen to Scotland and to marry her to the son of Edward I of England, uniting the two realms. But in 1290, on the voyage west, the seven-year-old Margaret fell ill and died in Orkney. Her death extinguished the ancient line of Scottish kings and threw the kingdom into a disputed succession — the "Great Cause" — that opened the door to English intervention and the long Wars of Scottish Independence.'
    ],
    greatestFeats: ['Queen of Scots', 'Heiress of the ancient Scottish royal line'],
    contentSections: [
      { title: 'Overview', paragraphs: [
        'Margaret, known as the Maid of Norway, was queen of Scots from 1286 to 1290, though she never set foot in her kingdom nor was crowned. The daughter of King Eric II of Norway and granddaughter of the Scottish king Alexander III, she became heiress to the Scottish throne as an infant when Alexander died in 1286 leaving no other direct descendant.',
        'Plans were laid to bring the little queen to Scotland and to marry her to the son of Edward I of England, uniting the two realms. But in 1290, on the voyage west, the seven-year-old Margaret fell ill and died in Orkney. Her death extinguished the ancient line of Scottish kings and threw the kingdom into a disputed succession — the "Great Cause" — that opened the door to English intervention and the long Wars of Scottish Independence.'
      ]},
      { title: 'Birth and inheritance', paragraphs: [
        'Margaret was born about 1283 in Norway, the daughter of King Eric II and of his wife Margaret, a daughter of Alexander III of Scotland. When Alexander III\'s own children all predeceased him and the king himself died in a fall from his horse in 1286, the infant Margaret in Norway was left as his only direct descendant and heir.',
        'The Scottish magnates recognised her as their queen and appointed guardians to govern the realm in her name while she remained a child in her father\'s kingdom.'
      ]},
      { title: 'Character and Personality', paragraphs: [
        'Margaret died a small child and left no imprint of personality at all; she is one of history\'s purest examples of a monarch important entirely for her blood and her fate rather than any act of her own. She was never more than an infant symbol — the fragile thread on which the peace and independence of a kingdom, and a projected union of two realms, precariously hung.',
        'Her significance lies wholly in what her existence and her death set in motion. Alive, she was the hope of a peaceful settlement of Scotland\'s future and a marriage alliance with England; dead, she became the occasion for one of the great crises of Scottish history. In her brief life the whole tragedy of the coming age was contained: a kingdom whose survival depended on the life of a child who did not live to reach it.'
      ]},
      { title: 'The plan and the voyage', paragraphs: [
        'With a girl-queen in Norway and Scotland governed by guardians, the great question was her future. Edward I of England proposed that Margaret marry his son and heir, the future Edward II, and by the Treaty of Birgham in 1290 the Scots agreed — on terms meant to preserve Scotland\'s laws and independence within the union. Preparations were made to bring the young queen home at last.',
        'In the autumn of 1290 Margaret set sail for Scotland. But the crossing sickened her, and the ship put in at Orkney, then under Norwegian rule, where the child died.'
      ]},
      { title: 'Death and the Great Cause', paragraphs: [
        'Margaret\'s death in Orkney in September 1290 was a catastrophe for Scotland. With her ended the direct line of the House of Dunkeld that had ruled since the eleventh century, and no clear heir remained. Thirteen claimants came forward, and to avoid civil war the Scots invited Edward I of England to arbitrate — the "Great Cause".',
        'Edward used the opportunity to assert overlordship, chose John Balliol as king in 1292, and soon reduced Scotland to a dependency — provoking the rebellion and the Wars of Scottish Independence under Wallace and Robert the Bruce.'
      ]},
      { title: 'Legacy', paragraphs: [
        'Margaret, Maid of Norway, is remembered as the child-queen whose death changed the course of Scottish and British history. Had she lived to marry the heir of England, the crowns might have been united three centuries before they were, and peacefully; instead her death opened the disputed succession that let Edward I intervene, and so began the long, bitter struggle for Scottish independence that would define the age of Wallace and Bruce.'
      ]}
    ],
    keyAchievements: [
      { title: 'Queen of Scots, 1286–1290', description: 'Recognised as heiress and queen while an infant in Norway.' },
      { title: 'The Treaty of Birgham', description: 'The projected marriage to England\'s heir that her death undid.' }
    ],
    timeline: [
      { date: 'c. 1283', title: 'Born', description: 'Born in Norway to King Eric II and a daughter of Alexander III of Scotland.' },
      { date: '1286', title: 'Becomes heiress to Scotland', description: 'Made heir on the death of her grandfather Alexander III, with guardians ruling for her.', links: [SCO] },
      { date: '1290', title: 'Treaty of Birgham', description: 'The Scots agree to her marriage to the future Edward II of England, safeguarding Scots law.' },
      { date: 'September 1290', title: 'Dies in Orkney', description: 'Dies at about seven on the voyage to Scotland, ending the direct royal line.' },
      { date: '1291–1292', title: 'The Great Cause', description: 'Her death triggers a disputed succession; Edward I arbitrates and installs John Balliol.', links: [per('john-balliol', 'John Balliol', 'Chosen king after her death'), ev('wars-of-scottish-independence', 'Wars of Scottish Independence', 'The struggle her death set in motion')] }
    ],
    relatedEntries: {
      locations: [ { ...SCO, label: 'The kingdom she never reached' } ],
      people: [ per('john-balliol', 'John Balliol', 'Chosen king after her death in the Great Cause') ],
      events: [ ev('wars-of-scottish-independence', 'Wars of Scottish Independence', 'The long struggle her death helped ignite') ]
    },
    sources: [ src('Margaret | queen of Scotland', 'https://www.britannica.com/biography/Margaret-Maid-of-Norway'), src('Scotland — history', 'https://www.britannica.com/place/Scotland/History') ],
    isRuler: true,
    succession: { office: 'Queen of Scots',
      predecessor: { displayName: 'Alexander III', note: 'Her grandfather, king of Scots, on whose death in 1286 the infant Margaret became heiress. The earlier kings of the House of Dunkeld are not yet covered in the Codex.' },
      successor: { personSlug: 'john-balliol', displayName: 'John Balliol', note: 'Chosen king in 1292 through the "Great Cause" arbitration by Edward I, after the interregnum her death opened.' } }
  },

  // ── SANCHO III OF CASTILE ─────────────────────────────────────────────────────
  {
    id: 'sancho-iii-of-castile', type: 'character', name: 'Sancho III of Castile', born: 1134, died: 1158,
    deathAge: 'about 23', causeOfDeath: 'Illness', restingPlace: 'Toledo Cathedral',
    location: 'Kingdom of Castile', aliases: ['Sancho III the Desired', 'Sancho el Deseado'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/00/Sancho_III_de_Castela_-_Compendio_de_cr%C3%B3nicas_de_reyes_%28Biblioteca_Nacional_de_Espa%C3%B1a%29.png',
    summary: 'King of Castile (1157–1158), whose one-year reign began the separate Castilian kingdom, founded the Order of Calatrava, and left an infant heir in Alfonso VIII.',
    title: 'King of Castile', roles: ['King of Castile'],
    birth: { date: '1134', place: { name: 'Kingdom of León' }, note: 'Son of Alfonso VII, emperor of León and Castile.' },
    death: { date: '31 August 1158', place: { name: 'Toledo' }, circumstance: 'Died after a reign of only a year, leaving his infant son Alfonso VIII amid a disputed regency.' },
    quickFacts: { realm: 'Kingdom of Castile', dynasty: 'House of Ivrea (Jiménez)', culture: 'Castilian', knownFor: 'the brief reign that founded the separate Kingdom of Castile' },
    imageInfo: { caption: 'Sancho III of Castile in a fourteenth-century compendium of the chronicles of the kings.', creator: 'Compendio de crónicas de reyes (BNE)', date: 'c. 1312–1325', source: 'Wikimedia Commons', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Sancho_III_de_Castela_-_Compendio_de_crónicas_de_reyes_(Biblioteca_Nacional_de_España).png', license: 'Public domain', note: 'A later manuscript depiction, not a likeness from life.' },
    overview: [
      'Sancho III, called "the Desired", was king of Castile for a single year, from 1157 to 1158. The elder son of Alfonso VII, emperor of León and Castile, he inherited Castile when his father, on his deathbed, divided his realms between his two sons — giving Castile to Sancho and León to his brother Ferdinand II, and so beginning the long separation of the two Spanish kingdoms.',
      'Sancho\'s brief reign was notable chiefly for the founding of the Order of Calatrava, the first Spanish military order, established to defend the frontier fortress of Calatrava against the Almohads. He died suddenly in 1158, leaving as his heir the infant Alfonso VIII, whose long minority would plunge Castile into a bitter struggle for the regency.'
    ],
    greatestFeats: ['King of Castile', 'Founded the Order of Calatrava', 'Began the separate Kingdom of Castile'],
    contentSections: [
      { title: 'Overview', paragraphs: [
        'Sancho III, called "the Desired", was king of Castile for a single year, from 1157 to 1158. The elder son of Alfonso VII, emperor of León and Castile, he inherited Castile when his father, on his deathbed, divided his realms between his two sons — giving Castile to Sancho and León to his brother Ferdinand II, and so beginning the long separation of the two Spanish kingdoms.',
        'Sancho\'s brief reign was notable chiefly for the founding of the Order of Calatrava, the first Spanish military order, established to defend the frontier fortress of Calatrava against the Almohads. He died suddenly in 1158, leaving as his heir the infant Alfonso VIII, whose long minority would plunge Castile into a bitter struggle for the regency.'
      ]},
      { title: 'Birth and early life', paragraphs: [
        'Sancho was born in 1134, the elder son of Alfonso VII, who styled himself emperor of Spain and ruled both León and Castile. Raised as heir to a great realm, Sancho found his inheritance divided when Alfonso VII, following Iberian custom, split his dominions between his sons at his death in 1157: Sancho received Castile, and his younger brother Ferdinand received León.'
      ]},
      { title: 'Character and Personality', paragraphs: [
        'Sancho III reigned too briefly to leave a rounded portrait, but the sources present him warmly, and his byname "the Desired" reflects the affection and high hopes attached to him. He appears as a promising and well-regarded young king, pious and active, whose short rule was cut off before it could show its full measure.',
        'The one enduring act of his reign — his patronage of the new Order of Calatrava — reveals a king alert to the central task of Castilian kingship, the defence and extension of the Christian frontier against the Muslim south. In entrusting an exposed fortress to a brotherhood of warrior-monks, he showed both piety and strategic sense. He is remembered as the good king who died too soon, leaving his kingdom to the perils of a royal minority.'
      ]},
      { title: 'Reign and the Order of Calatrava', paragraphs: [
        'Sancho\'s single year on the throne is remembered above all for the founding of the Order of Calatrava in 1158. When the Templars declared they could no longer hold the frontier fortress of Calatrava against the threatened Almohad advance, Sancho granted it to an abbot and his followers, who formed a new military-religious order to defend it — the first of the great Spanish orders, and a lasting instrument of the Reconquista.',
        'Beyond this, Sancho worked to secure his new and separate kingdom of Castile and to manage relations with his brother in León, but he had little time to shape his reign before it ended.'
      ]},
      { title: 'Death', paragraphs: [
        'Sancho III died on 31 August 1158, after a reign of barely a year, and was buried at Toledo. His heir was his son Alfonso VIII, a child of about three, whose minority at once became the prize in a violent contest between the great noble houses of Castile.'
      ]},
      { title: 'Legacy', paragraphs: [
        'Sancho III is remembered as the king whose brief reign founded the independent Kingdom of Castile and the Order of Calatrava. The division of his father\'s empire that made him king began the long separation of Castile and León that would last, with interruptions, until 1230. And though his own reign was short, his son Alfonso VIII would grow to be one of the greatest of Castilian kings, the victor of Las Navas de Tolosa.'
      ]}
    ],
    keyAchievements: [
      { title: 'King of Castile, 1157–1158', description: 'Founded the separate Castilian kingdom on his father\'s division of his empire.' },
      { title: 'Founded the Order of Calatrava', description: 'Established the first Spanish military order to defend the frontier.' }
    ],
    timeline: [
      { date: '1134', title: 'Born', description: 'Born the elder son of Alfonso VII, emperor of León and Castile.' },
      { date: 'c. 1151', title: 'Marries Blanche of Navarre', description: 'Marries Blanche of Navarre, who would bear the future Alfonso VIII.' },
      { date: '1157', title: 'Becomes King of Castile', description: 'Inherits Castile when his father divides his realms between his sons.', links: [CAS] },
      { date: '1158', title: 'Founds the Order of Calatrava', description: 'Grants the frontier fortress of Calatrava to a new military order.' },
      { date: '31 August 1158', title: 'Dies', description: 'Dies after a year\'s reign, leaving the infant Alfonso VIII as heir.', links: [per('alfonso-viii-of-castile', 'Alfonso VIII of Castile', 'His son and successor')] }
    ],
    relatedEntries: {
      locations: [ { ...CAS, label: 'The kingdom his reign founded' } ],
      people: [ per('alfonso-viii-of-castile', 'Alfonso VIII of Castile', 'His infant son and successor'), per('henry-i-of-castile', 'Henry I of Castile', 'His grandson, the boy-king') ],
      events: []
    },
    sources: [ src('Order of Calatrava', 'https://www.britannica.com/topic/Order-of-Calatrava'), src('Castile | historical region, Spain', 'https://www.britannica.com/place/Castile') ],
    isRuler: true,
    succession: { office: 'King of Castile',
      predecessor: { displayName: 'Alfonso VII of León and Castile', note: 'His father, "the Emperor", who on his death in 1157 divided his realms — Castile to Sancho, León to his brother Ferdinand II.' },
      successor: { personSlug: 'alfonso-viii-of-castile', displayName: 'Alfonso VIII of Castile', note: 'His infant son, whose long minority became a violent contest for the regency.' } }
  },

  // ── HENRY I OF CASTILE ────────────────────────────────────────────────────────
  {
    id: 'henry-i-of-castile', type: 'character', name: 'Henry I of Castile', born: 1204, died: 1217,
    deathAge: 'about 13', causeOfDeath: 'Accident (a falling roof tile)', restingPlace: 'Las Huelgas, Burgos',
    location: 'Kingdom of Castile', aliases: ['Enrique I', 'Henry I'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/14/Henrique_I_de_Castela_-_Compendio_de_cr%C3%B3nicas_de_reyes_%28Biblioteca_Nacional_de_Espa%C3%B1a%29_%28cropped%29.png',
    summary: 'King of Castile (1214–1217), the boy-son of Alfonso VIII, whose brief reign under contested regency ended in a freak accident, passing the crown toward the union of Castile and León.',
    title: 'King of Castile', roles: ['King of Castile'],
    birth: { date: '14 April 1204', place: { name: 'Valladolid' }, note: 'Son of Alfonso VIII of Castile; succeeded as a child.' },
    death: { date: '6 June 1217', place: { name: 'Palencia' }, circumstance: 'Killed at about thirteen when a roof tile fell on his head while at play.' },
    quickFacts: { realm: 'Kingdom of Castile', dynasty: 'House of Ivrea (Jiménez)', culture: 'Castilian', knownFor: 'the boy-king whose accidental death led to the union of Castile and León' },
    imageInfo: { caption: 'Henry I of Castile in a fourteenth-century compendium of the chronicles of the kings.', creator: 'Compendio de crónicas de reyes (BNE)', date: 'c. 1312–1325', source: 'Wikimedia Commons', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Henrique_I_de_Castela_-_Compendio_de_crónicas_de_reyes_(Biblioteca_Nacional_de_España)_(cropped).png', license: 'Public domain', note: 'A later manuscript depiction, not a likeness from life.' },
    overview: [
      'Henry I was king of Castile from 1214 to 1217, a boy who came to the throne at ten on the death of his father, the great Alfonso VIII, victor of Las Navas de Tolosa. His short reign was dominated by a bitter struggle for control of the young king between his elder sister Berengaria and the ambitious noble house of Lara.',
      'Before Henry could grow to rule in his own right, he was killed in a freak accident in 1217, when a tile fell from a roof and struck him on the head. His death passed the Castilian crown to his sister Berengaria, who at once ceded it to her son Ferdinand III — the king who would permanently unite Castile and León and drive the Reconquista deep into Andalusia.'
    ],
    greatestFeats: ['King of Castile'],
    contentSections: [
      { title: 'Overview', paragraphs: [
        'Henry I was king of Castile from 1214 to 1217, a boy who came to the throne at ten on the death of his father, the great Alfonso VIII, victor of Las Navas de Tolosa. His short reign was dominated by a bitter struggle for control of the young king between his elder sister Berengaria and the ambitious noble house of Lara.',
        'Before Henry could grow to rule in his own right, he was killed in a freak accident in 1217, when a tile fell from a roof and struck him on the head. His death passed the Castilian crown to his sister Berengaria, who at once ceded it to her son Ferdinand III — the king who would permanently unite Castile and León and drive the Reconquista deep into Andalusia.'
      ]},
      { title: 'Birth and early life', paragraphs: [
        'Henry was born in 1204, the youngest son and only surviving male child of Alfonso VIII of Castile and Eleanor of England, a daughter of Henry II and Eleanor of Aquitaine. When Alfonso VIII died in 1214, followed within weeks by Queen Eleanor, the ten-year-old Henry became king under the regency of his mother\'s designated successor — first his sister Berengaria, and then, seized from her, the head of the house of Lara.'
      ]},
      { title: 'Character and Personality', paragraphs: [
        'Henry I was a child throughout his reign and died before reaching manhood, so almost nothing of his own character can be known; he is a boy glimpsed only as the object of others\' ambitions. The sources are concerned not with him but with the factions that fought to control him — his formidable sister Berengaria on one side, the grasping Count Álvaro Núñez de Lara on the other.',
        'His significance is that of the vulnerable minor king around whom a kingdom\'s politics turned. His person was the prize; whoever held the boy ruled Castile. That his brief life ended not in battle or intrigue but by sheer accident — a falling tile — only underscores how much, in an age of dynastic monarchy, the fate of a great kingdom could hang on the fragile life of a single child.'
      ]},
      { title: 'A contested minority', paragraphs: [
        'Henry\'s reign was a struggle for the regency. His sister Berengaria, the eldest child of Alfonso VIII and a woman of great ability, was the natural guardian, but the powerful Count Álvaro Núñez de Lara wrested control of the young king from her and governed harshly in his name, provoking noble resistance and near civil war.',
        'The kingdom was thus divided and unsettled throughout Henry\'s childhood reign, the boy-king a pawn in the hands of contending magnates, with Berengaria working patiently to recover her brother and her family\'s position.'
      ]},
      { title: 'Death', paragraphs: [
        'In June 1217, while Henry was staying at Palencia, a tile dislodged from a roof — by some accounts as boys played on it — fell and struck the king on the head. He died of the injury on 6 June 1217, still only thirteen, and was buried at the royal abbey of Las Huelgas in Burgos.'
      ]},
      { title: 'Legacy', paragraphs: [
        'Henry I is remembered as the boy-king whose accidental death transformed the map of Spain. His crown passed to his sister Berengaria, who immediately renounced it in favour of her son Ferdinand III; and Ferdinand, already king of Castile, would in 1230 also inherit León, permanently uniting the two great Christian kingdoms and carrying the Reconquista to Córdoba and Seville. The freak death of a thirteen-year-old thus stands at the threshold of the united Crown of Castile.'
      ]}
    ],
    keyAchievements: [
      { title: 'King of Castile, 1214–1217', description: 'Reigned as a boy under a bitterly contested regency.' }
    ],
    timeline: [
      { date: '14 April 1204', title: 'Born', description: 'Born the son of Alfonso VIII of Castile and Eleanor of England.' },
      { date: '1214', title: 'Becomes King of Castile', description: 'Succeeds his father Alfonso VIII as a boy of ten.', links: [per('alfonso-viii-of-castile', 'Alfonso VIII of Castile', 'His father and predecessor'), CAS] },
      { date: '1215', title: 'Seized by the Laras', description: 'Count Álvaro Núñez de Lara wrests control of the young king from his sister Berengaria.' },
      { date: 'c. 1216', title: 'A divided kingdom', description: 'Castile is unsettled by the struggle for the regency during his minority.' },
      { date: '6 June 1217', title: 'Killed by a falling tile', description: 'Dies at thirteen; his sister Berengaria inherits and cedes the crown to Ferdinand III.' }
    ],
    relatedEntries: {
      locations: [ { ...CAS, label: 'His kingdom' } ],
      people: [ per('alfonso-viii-of-castile', 'Alfonso VIII of Castile', 'His father and predecessor'), per('sancho-iii-of-castile', 'Sancho III of Castile', 'His grandfather') ],
      events: []
    },
    sources: [ src('Castile | historical region, Spain', 'https://www.britannica.com/place/Castile'), src('Ferdinand III | king of Castile and León', 'https://www.britannica.com/biography/Ferdinand-III-king-of-Castile-and-Leon') ],
    isRuler: true,
    succession: { office: 'King of Castile',
      predecessor: { personSlug: 'alfonso-viii-of-castile', displayName: 'Alfonso VIII of Castile', note: 'His father, victor of Las Navas de Tolosa, whom he succeeded as a boy in 1214.' },
      successor: { displayName: 'Berengaria of Castile', note: 'His sister, who inherited on his accidental death and at once ceded the crown to her son Ferdinand III, who united Castile and León.' } }
  },

  // ── ALFONSO XI OF CASTILE ─────────────────────────────────────────────────────
  {
    id: 'alfonso-xi-of-castile', type: 'character', name: 'Alfonso XI of Castile', born: 1311, died: 1350,
    deathAge: 'about 38', causeOfDeath: 'The Black Death, on campaign', restingPlace: 'Córdoba, later Seville',
    location: 'Kingdom of Castile', aliases: ['Alfonso XI the Avenger', 'Alfonso el Justiciero'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Libro_de_la_Coronaci%C3%B3n_de_los_Reyes_de_Castilla--2_%28cropped%29.jpg',
    summary: 'King of Castile and León (1312–1350), who restored royal power after a turbulent minority and crushed the last great Marinid invasion at the Battle of Río Salado.',
    title: 'King of Castile and León', roles: ['King of Castile and León'],
    birth: { date: '13 August 1311', place: { name: 'Salamanca' }, note: 'Son of Ferdinand IV of Castile; succeeded as an infant.' },
    death: { date: '26 March 1350', place: { name: 'Gibraltar' }, circumstance: 'Died of the Black Death while besieging Gibraltar; the only reigning European monarch to die of the plague.' },
    quickFacts: { realm: 'Kingdom of Castile and León', dynasty: 'House of Ivrea (Burgundy)', culture: 'Castilian', knownFor: 'restoring royal power and his victory at Río Salado' },
    imageInfo: { caption: 'Alfonso XI of Castile, from the fourteenth-century Book of the Coronation of the Kings of Castile.', creator: 'Libro de la Coronación de los Reyes de Castilla', date: '14th century', source: 'Wikimedia Commons', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Libro_de_la_Coronación_de_los_Reyes_de_Castilla--2_(cropped).jpg', license: 'Public domain', note: 'A near-contemporary manuscript image of the king.' },
    overview: [
      'Alfonso XI, called "the Avenger" or "the Just", was king of Castile and León from 1312 to 1350. He succeeded as an infant of one, and his long minority was a period of anarchy, as rival regents and great nobles fought over the kingdom. Coming into his own power in the mid-1320s, he set about restoring the authority of the crown with a hard hand.',
      'His reign is remembered above all for his triumphs on the Reconquista frontier. In 1340 he crushed a great invasion by the Marinids of Morocco and the emir of Granada at the Battle of Río Salado — the last major Muslim invasion of Iberia — and went on to take Algeciras. He strengthened royal law and government at home, and died in 1350 of the Black Death while besieging Gibraltar.'
    ],
    greatestFeats: ['Restored royal power in Castile', 'Won the Battle of Río Salado (1340)', 'Captured Algeciras (1344)'],
    contentSections: [
      { title: 'Overview', paragraphs: [
        'Alfonso XI, called "the Avenger" or "the Just", was king of Castile and León from 1312 to 1350. He succeeded as an infant of one, and his long minority was a period of anarchy, as rival regents and great nobles fought over the kingdom. Coming into his own power in the mid-1320s, he set about restoring the authority of the crown with a hard hand.',
        'His reign is remembered above all for his triumphs on the Reconquista frontier. In 1340 he crushed a great invasion by the Marinids of Morocco and the emir of Granada at the Battle of Río Salado — the last major Muslim invasion of Iberia — and went on to take Algeciras. He strengthened royal law and government at home, and died in 1350 of the Black Death while besieging Gibraltar.'
      ]},
      { title: 'Birth and early life', paragraphs: [
        'Alfonso was born in 1311, the son of Ferdinand IV of Castile, and became king in 1312 as a baby of one on his father\'s sudden death. His minority lasted well over a decade and was among the most turbulent in Castilian history, as his grandmother María de Molina, his uncles, and the great noble factions struggled for control of the regency and plundered the kingdom.',
        'Declared of age in the mid-1320s, Alfonso moved swiftly and ruthlessly to break the power of the overmighty magnates and take the government into his own hands.'
      ]},
      { title: 'Character and Personality', paragraphs: [
        'Alfonso XI was a hard, forceful, and effective king — a ruler of fierce energy and few scruples, who earned both his bynames, "the Avenger" and "the Just", by the harshness with which he enforced royal authority. Having grown up amid the chaos of his minority, he was determined never to be a puppet, and he crushed the great nobles who had preyed on the kingdom, sometimes by treachery and violence.',
        'That ruthlessness served a genuine vision of strong monarchy. He reformed the law and the administration, curbed the aristocracy, and threw the concentrated power of the crown into the holy war against the Muslims of the south. His private life was as forceful as his public one — his long devotion to his mistress Leonor de Guzmán, and the brood of illegitimate sons she bore him, would ignite a civil war after his death. He is remembered as a formidable warrior-king who restored Castile\'s strength at home and its fortunes on the frontier.'
      ]},
      { title: 'Restoring royal power and the war on the frontier', paragraphs: [
        'Once in command, Alfonso XI rebuilt the shattered authority of the crown, breaking the noble leagues, reforming justice through the Ordenamiento de Alcalá, and reasserting royal control over towns and revenues. With the kingdom in hand, he turned to the Reconquista frontier, where a new danger had arisen: the Marinid sultans of Morocco, invited by Granada, threatened a great counter-invasion.',
        'In October 1340 Alfonso, allied with Portugal, met the combined Marinid and Granadan army at the River Salado near Tarifa and destroyed it — the last great Muslim invasion of the Iberian Peninsula, and a victory that echoed across Christendom. He followed it up with the long and successful siege of Algeciras (1342–1344), a key Muslim port.'
      ]},
      { title: 'Death', paragraphs: [
        'In 1350 Alfonso XI was besieging Gibraltar, the last Muslim stronghold on the strait, when the Black Death swept through his army. The king caught the plague and died before the walls on 26 March 1350 — the only reigning European monarch to die of the great pandemic. He was succeeded by his legitimate son, Peter, later called the Cruel.'
      ]},
      { title: 'Legacy', paragraphs: [
        'Alfonso XI is remembered as one of the strongest of medieval Castilian kings — the ruler who tamed the anarchy of his minority, restored the power of the crown, reformed its law, and won at Río Salado one of the decisive victories of the Reconquista. But his legacy was double-edged: his devotion to Leonor de Guzmán and their sons set his legitimate heir Peter against the illegitimate Trastámara line, igniting the Castilian civil war that would consume his son\'s reign and change the dynasty.'
      ]}
    ],
    keyAchievements: [
      { title: 'Restored royal authority', description: 'Broke the noble factions and reformed law after his anarchic minority.' },
      { title: 'Victory at Río Salado, 1340', description: 'Crushed the last great Marinid invasion of Iberia.' },
      { title: 'Captured Algeciras, 1344', description: 'Took a key Muslim port on the Strait of Gibraltar.' }
    ],
    timeline: [
      { date: '13 August 1311', title: 'Born', description: 'Born the son of Ferdinand IV of Castile.' },
      { date: '1312', title: 'Becomes king as an infant', description: 'Succeeds his father at one; a long, anarchic minority follows.', links: [CAS] },
      { date: 'c. 1325', title: 'Takes personal power', description: 'Comes of age and crushes the noble factions to restore the crown.' },
      { date: '30 October 1340', title: 'Victory at Río Salado', description: 'Destroys the Marinid-Granadan invasion, the last great Muslim assault on Iberia.' },
      { date: '1344', title: 'Captures Algeciras', description: 'Takes the key Muslim port after a long siege.' },
      { date: '26 March 1350', title: 'Dies of the plague', description: 'Dies of the Black Death besieging Gibraltar; his son Peter succeeds.', links: [per('peter-of-castile', 'Peter of Castile', 'His son and successor')] }
    ],
    relatedEntries: {
      locations: [ { ...CAS, label: 'His kingdom' } ],
      people: [ per('peter-of-castile', 'Peter of Castile', 'His son and successor'), per('henry-ii-of-castile', 'Henry II of Castile', 'His illegitimate son, founder of the Trastámara line') ],
      events: []
    },
    sources: [ src('Alfonso XI | king of Castile', 'https://www.britannica.com/biography/Alfonso-XI'), src('Battle of Río Salado', 'https://www.britannica.com/place/Castile') ],
    isRuler: true,
    succession: { office: 'King of Castile and León',
      predecessor: { displayName: 'Ferdinand IV of Castile', note: 'His father, "the Summoned", on whose death in 1312 Alfonso succeeded as an infant.' },
      successor: { personSlug: 'peter-of-castile', displayName: 'Peter of Castile', note: 'His legitimate son, "the Cruel", whose reign was consumed by war with Alfonso\'s illegitimate Trastámara sons.' } }
  }
]

let added = 0, replaced = 0
for (const p of people) {
  const i = data.characters.findIndex(c => c.id === p.id)
  if (i >= 0) { data.characters[i] = p; replaced++ } else { data.characters.push(p); added++ }
}
const byId = new Map(data.characters.map(c => [c.id, c]))
const relink = (rulerId, side, personSlug, displayName, note) => {
  const c = byId.get(rulerId)
  if (!c?.succession?.[side]) { console.warn(`SKIP ${rulerId}.${side}`); return }
  c.succession[side] = { personSlug, displayName, note }
  console.log(`relinked ${rulerId}.${side} -> ${personSlug}`)
}
relink('david-ii-of-scotland', 'successor', 'robert-ii-of-scotland', 'Robert II of Scotland', 'His nephew, the High Steward, who founded the House of Stewart.')
relink('john-balliol', 'predecessor', 'margaret-maid-of-norway', 'Margaret, Maid of Norway', 'The child-queen whose death opened the disputed succession that made Balliol king.')
relink('alfonso-viii-of-castile', 'predecessor', 'sancho-iii-of-castile', 'Sancho III of Castile', 'His father, whose one-year reign founded the separate Kingdom of Castile.')
relink('alfonso-viii-of-castile', 'successor', 'henry-i-of-castile', 'Henry I of Castile', 'His son, the boy-king killed by a falling tile.')
relink('peter-of-castile', 'predecessor', 'alfonso-xi-of-castile', 'Alfonso XI of Castile', 'His father, "the Avenger", victor of Río Salado.')

fs.writeFileSync(dataPath, JSON.stringify(data, null, 2))
console.log(`\nScottish/Iberian added: ${added}, replaced: ${replaced}. Total: ${data.characters.length}`)
