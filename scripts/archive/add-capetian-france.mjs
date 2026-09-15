/**
 * Closes the Capetian–Valois main royal line of France. Creates the nine missing
 * kings (Hugh Capet, Robert II, Henry I, Philip I; Philip IV, Louis X, Philip V;
 * Charles VI, Charles VII) so the succession runs continuously from the dynasty's
 * founder to the end of IronCodex scope, and relinks the four existing endpoints
 * that named them as bare text. Bounded above by the Carolingians (noted) and
 * below by Louis XI (outside-scope, r. 1461). Idempotent.
 */
import fs from 'node:fs'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dataPath = path.join(__dirname, '../server/data/history.json')
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'))

const FR = { title: 'Kingdom of France', type: 'location', slug: 'kingdom-of-france' }
const per = (slug, title, label) => ({ title, type: 'person', slug, label })
const ev = (slug, title, label) => ({ title, type: 'event', slug, label })
const src = (title, url) => ({ title, author: 'Encyclopaedia Britannica', type: 'encyclopedia', url })
const wailly = 'A drawing of the king\'s royal seal, made by Natalis de Wailly for his 1838 study of French royal diplomatics.'

const people = [
  // ── HUGH CAPET ────────────────────────────────────────────────────────────────
  {
    id: 'hugh-capet', type: 'character', name: 'Hugh Capet', born: 941, died: 996,
    deathAge: 'about 55', causeOfDeath: 'Natural causes', restingPlace: 'Basilica of Saint-Denis',
    location: 'Kingdom of France', aliases: ['Hugues Capet', 'Hugh the Great\'s son'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/65/SceauHuguesCapet_%28cropped%29.PNG',
    summary: 'Duke of the Franks elected King of the Franks in 987, founder of the Capetian dynasty that would rule France for over three centuries in the direct line.',
    title: 'King of the Franks', roles: ['King of the Franks'],
    birth: { date: 'c. 941', place: { name: 'West Francia' }, note: 'Son of Hugh the Great, Duke of the Franks, of the powerful Robertian house.' },
    death: { date: '24 October 996', place: { name: 'Paris' }, circumstance: 'Died in 996 after securing the succession of his son Robert, whom he had crowned co-king.' },
    quickFacts: { realm: 'Kingdom of the Franks', dynasty: 'House of Capet (founder)', culture: 'Frankish', knownFor: 'founding the Capetian dynasty by his election as king in 987' },
    imageInfo: { caption: 'The royal seal of Hugh Capet, first Capetian king of the Franks.', creator: 'Rendering of Hugh Capet\'s seal', date: 'Seal of 987–996 (later rendering)', source: 'Wikimedia Commons', sourceUrl: 'https://commons.wikimedia.org/wiki/File:SceauHuguesCapet_(cropped).PNG', license: 'CC BY-SA 3.0', note: 'A rendering of the king\'s contemporary seal, the closest thing to an official image of him.' },
    overview: [
      'Hugh Capet was Duke of the Franks and, from 987, King of the Franks — the founder of the Capetian dynasty that would rule France in the direct male line until 1328 and, through its branches, for centuries more. Head of the great Robertian house, he was chosen king by the magnates on the death of the last Carolingian, Louis V.',
      'His own royal power was modest, confined largely to the lands around Paris and Orléans while the great territorial princes ruled their own domains, but he secured the future of his line by having his son Robert crowned co-king in his own lifetime. That single act of dynastic caution proved decisive: the Capetians held the throne unbroken for over three hundred years.'
    ],
    greatestFeats: ['Founded the Capetian dynasty', 'Elected King of the Franks in 987', 'Secured the succession of his son Robert II'],
    contentSections: [
      { title: 'Overview', paragraphs: [
        'Hugh Capet was Duke of the Franks and, from 987, King of the Franks — the founder of the Capetian dynasty that would rule France in the direct male line until 1328 and, through its branches, for centuries more. Head of the great Robertian house, he was chosen king by the magnates on the death of the last Carolingian, Louis V.',
        'His own royal power was modest, confined largely to the lands around Paris and Orléans while the great territorial princes ruled their own domains, but he secured the future of his line by having his son Robert crowned co-king in his own lifetime. That single act of dynastic caution proved decisive: the Capetians held the throne unbroken for over three hundred years.'
      ]},
      { title: 'Birth and early life', paragraphs: [
        'Hugh was born about 941 into the Robertian house, the son of Hugh the Great, Duke of the Franks, the most powerful magnate of the West Frankish kingdom. On his father\'s death he inherited the duchy and with it a position that rivalled, and often overshadowed, the declining Carolingian kings whom his family nominally served.',
        'For decades Hugh was the real power behind the West Frankish throne. When the young Carolingian king Louis V died childless in 987, the assembled nobles and the archbishop of Reims passed over the remaining Carolingian claimant and elected Hugh king.'
      ]},
      { title: 'Character and Personality', paragraphs: [
        'Hugh Capet is remembered less for a vivid personality than for a shrewd, patient political sense. He was the pragmatic head of a great house who understood that the Carolingian monarchy had hollowed out, and who reached for the crown not through spectacular conquest but through influence, alliance with the Church, and careful management of his fellow magnates.',
        'The defining trait of his kingship was caution. Knowing how fragile an elected, resource-poor monarchy was, he spent his reign consolidating rather than expanding, and above all safeguarding the succession. His willingness to share the crown with his son in his own lifetime, rather than gamble on another election, reveals a ruler thinking in dynasties and generations — the founding instinct of the house that bore his name.'
      ]},
      { title: 'King of the Franks', paragraphs: [
        'As king, Hugh commanded little more direct territory than he had as duke: the royal demesne was a modest block of land around Paris and Orléans, and the dukes and counts of Normandy, Flanders, Aquitaine, and Burgundy governed as they pleased. His reign was spent defending this narrow base, managing the powerful Church, and containing the last Carolingian claimant, Charles of Lorraine, whom he eventually captured.',
        'His most important act was dynastic. Within months of his own coronation he had his son Robert anointed co-king, ensuring that on his death the crown would pass smoothly within the family rather than returning to the uncertainty of election. This became the pattern of the early Capetians and the foundation of their success.'
      ]},
      { title: 'Death', paragraphs: [
        'Hugh Capet died on 24 October 996 and was buried, like so many French kings after him, in the abbey of Saint-Denis. His son succeeded him without challenge as Robert II, exactly as Hugh had arranged.'
      ]},
      { title: 'Legacy', paragraphs: [
        'Hugh Capet\'s reign was, in territorial terms, unremarkable; his importance lies entirely in what he began. The dynasty he founded would slowly transform the weak elective kingship he inherited into the strongest monarchy in medieval Europe, and every king of France down to the Revolution — Capetian, Valois, and Bourbon alike — descended from him. He is remembered as the ancestor of a nation\'s royal line, the man from whom "Capetian France" takes its name.'
      ]}
    ],
    keyAchievements: [
      { title: 'Founder of the Capetian dynasty', description: 'His election in 987 began the royal house that ruled France for centuries.' },
      { title: 'Elected King of the Franks, 987', description: 'Chosen by the magnates over the last Carolingian claimant.' },
      { title: 'Secured a hereditary succession', description: 'Had his son Robert crowned co-king, making the crown effectively hereditary.' }
    ],
    timeline: [
      { date: 'c. 941', title: 'Born', description: 'Born into the Robertian house, son of Hugh the Great, Duke of the Franks.' },
      { date: 'c. 956', title: 'Becomes Duke of the Franks', description: 'Inherits his father\'s duchy and its dominant position in West Francia.' },
      { date: '987', title: 'Elected King of the Franks', description: 'Chosen king on the death of the last Carolingian, Louis V, founding the Capetian dynasty.', links: [FR] },
      { date: '987', title: 'Has his son crowned co-king', description: 'Secures the succession by having Robert anointed king within months of his own coronation.', links: [per('robert-ii-of-france', 'Robert II of France', 'His son and co-king')] },
      { date: '991', title: 'Captures the last Carolingian claimant', description: 'Seizes Charles of Lorraine, ending the Carolingian challenge to his throne.' },
      { date: '24 October 996', title: 'Dies', description: 'Dies at Paris; his son succeeds without challenge as Robert II.', links: [per('robert-ii-of-france', 'Robert II of France', 'His successor')] }
    ],
    relatedEntries: {
      locations: [ { ...FR, label: 'The kingdom he came to rule' } ],
      people: [ per('robert-ii-of-france', 'Robert II of France', 'His son, co-king, and successor'), per('henry-i-of-france', 'Henry I of France', 'His grandson, the third Capetian king') ],
      events: []
    },
    sources: [ src('Hugh Capet | king of France', 'https://www.britannica.com/biography/Hugh-Capet'), src('Capetian dynasty', 'https://www.britannica.com/topic/Capetian-dynasty') ],
    isRuler: true,
    succession: { office: 'King of the Franks',
      predecessor: { displayName: 'Louis V of France', note: 'The last Carolingian king, on whose childless death in 987 the magnates elected Hugh, founding a new dynasty. The Carolingian kings are a separate line not yet covered in the Codex.' },
      successor: { personSlug: 'robert-ii-of-france', displayName: 'Robert II of France', note: 'His son, whom he had crowned co-king to secure the succession.' } }
  },

  // ── ROBERT II THE PIOUS ───────────────────────────────────────────────────────
  {
    id: 'robert-ii-of-france', type: 'character', name: 'Robert II of France', born: 972, died: 1031,
    deathAge: 'about 58', causeOfDeath: 'Natural causes', restingPlace: 'Basilica of Saint-Denis',
    location: 'Kingdom of France', aliases: ['Robert the Pious', 'Robert le Pieux'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/9f/Sceau_de_Robert_II_le_pieux.jpg',
    summary: 'Second Capetian king of France (996–1031), a learned and devout ruler whose long reign consolidated the young dynasty despite a scandalous excommunication over his marriage.',
    title: 'King of the Franks', roles: ['King of the Franks'],
    birth: { date: '27 March 972', place: { name: 'Orléans' }, note: 'Son of Hugh Capet, crowned co-king in his father\'s lifetime.' },
    death: { date: '20 July 1031', place: { name: 'Melun' }, circumstance: 'Died in 1031 after a reign of thirty-five years, troubled at its end by revolts of his own sons.' },
    quickFacts: { realm: 'Kingdom of the Franks', dynasty: 'House of Capet', culture: 'Frankish', knownFor: 'consolidating the Capetian dynasty and his piety and learning' },
    imageInfo: { caption: 'The royal seal of Robert II the Pious.', creator: 'Natalis de Wailly (drawing of the seal)', date: 'Seal of 996–1031 (drawn 1838)', source: 'Wikimedia Commons', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Sceau_de_Robert_II_le_pieux.jpg', license: 'Public domain', note: wailly },
    overview: [
      'Robert II, called "the Pious", was the second Capetian king of France, reigning from 996 to 1031. Crowned co-king by his father Hugh Capet, he succeeded smoothly and gave the young dynasty something it badly needed: a long, stable reign that made Capetian rule seem normal rather than a passing accident of election.',
      'A cultivated and devout man, educated at Reims, he was known for his religious learning and his support of the Church, even composing Latin hymns. Yet his reign was also marked by a bitter clash with the papacy over his marriage to Bertha of Burgundy, for which he was excommunicated, and by the slow, patient work of extending the modest royal domain.'
    ],
    greatestFeats: ['Consolidated the Capetian dynasty', 'A learned, pious king and hymn-writer', 'Annexed the Duchy of Burgundy to the royal domain'],
    contentSections: [
      { title: 'Overview', paragraphs: [
        'Robert II, called "the Pious", was the second Capetian king of France, reigning from 996 to 1031. Crowned co-king by his father Hugh Capet, he succeeded smoothly and gave the young dynasty something it badly needed: a long, stable reign that made Capetian rule seem normal rather than a passing accident of election.',
        'A cultivated and devout man, educated at Reims, he was known for his religious learning and his support of the Church, even composing Latin hymns. Yet his reign was also marked by a bitter clash with the papacy over his marriage to Bertha of Burgundy, for which he was excommunicated, and by the slow, patient work of extending the modest royal domain.'
      ]},
      { title: 'Birth and early life', paragraphs: [
        'Robert was born in 972 at Orléans, the son of Hugh Capet. Educated at the cathedral school of Reims under the great scholar Gerbert of Aurillac — the future Pope Sylvester II — he received an unusually good education for a prince and retained a lifelong love of learning and the liturgy.',
        'In 987, the year of his father\'s election, Robert was himself crowned co-king, so that when Hugh died in 996 he succeeded as sole ruler without dispute.'
      ]},
      { title: 'Character and Personality', paragraphs: [
        'Robert earned his byname "the Pious" honestly. Contemporaries remembered a king genuinely devoted to the Church and its liturgy, learned in Latin letters, and personally gentle — given, the chroniclers said, to charity and to a mildness unusual in a warrior aristocracy. His biographer Helgaud of Fleury painted him almost as a saint.',
        'That devout image sits beside a more complicated reality. The same pious king defied the pope to keep a marriage the Church condemned as incestuous, endured years of excommunication rather than give up Bertha, and could be politically ruthless when the survival of his line demanded it. He emerges as a genuinely religious man who was nonetheless, first and always, a king determined to root his fragile dynasty in the soil of France.'
      ]},
      { title: 'Reign and the excommunication', paragraphs: [
        'Robert\'s reign was one of patient consolidation. He worked to extend royal influence and, in a major gain for the crown, secured the Duchy of Burgundy for his family after a long struggle, attaching it to the royal domain. He governed in close partnership with the Church, whose support was the young dynasty\'s greatest asset.',
        'His great crisis was personal. His marriage to Bertha of Burgundy fell within the forbidden degrees of kinship, and when Robert refused to repudiate her, Pope Gregory V excommunicated him. He eventually gave way, setting Bertha aside and marrying Constance of Arles, a formidable and divisive queen whose intrigues, and the ambitions of their sons, embittered his final years.'
      ]},
      { title: 'Death', paragraphs: [
        'Robert II died on 20 July 1031, his last years darkened by revolts of his sons, who fought over the succession even before his death. He was buried at Saint-Denis, and his son Henry succeeded him as Henry I.'
      ]},
      { title: 'Legacy', paragraphs: [
        'Robert the Pious is remembered as the king who made the Capetian dynasty durable. His long and largely peaceful reign, his alliance with the Church, and his acquisition of Burgundy all helped transform his father\'s precarious election into an established monarchy. In French memory he survives as the learned, gentle, hymn-writing king — the pious second founder of the royal house.'
      ]}
    ],
    keyAchievements: [
      { title: 'Consolidated Capetian rule', description: 'A long, stable reign that normalised the new dynasty\'s hold on the crown.' },
      { title: 'Acquired the Duchy of Burgundy', description: 'Attached Burgundy to the royal domain after a lengthy struggle.' },
      { title: 'A learned, devout kingship', description: 'Educated at Reims, he supported the Church and composed Latin hymns.' }
    ],
    timeline: [
      { date: '972', title: 'Born', description: 'Born at Orléans, son of Hugh Capet; educated at Reims under Gerbert of Aurillac.' },
      { date: '987', title: 'Crowned co-king', description: 'Anointed king alongside his father to secure the Capetian succession.', links: [per('hugh-capet', 'Hugh Capet', 'His father and co-king')] },
      { date: '996', title: 'Becomes sole king', description: 'Succeeds Hugh Capet without challenge on his father\'s death.', links: [FR] },
      { date: 'c. 998', title: 'Excommunicated over his marriage', description: 'Excommunicated for his marriage to Bertha of Burgundy, within the forbidden degrees of kinship.' },
      { date: '1016', title: 'Secures Burgundy', description: 'Gains the Duchy of Burgundy for his house, extending the royal domain.' },
      { date: '20 July 1031', title: 'Dies', description: 'Dies at Melun amid the revolts of his sons; succeeded by Henry I.', links: [per('henry-i-of-france', 'Henry I of France', 'His son and successor')] }
    ],
    relatedEntries: {
      locations: [ { ...FR, label: 'His kingdom' } ],
      people: [ per('hugh-capet', 'Hugh Capet', 'His father and predecessor'), per('henry-i-of-france', 'Henry I of France', 'His son and successor') ],
      events: []
    },
    sources: [ src('Robert II | king of France', 'https://www.britannica.com/biography/Robert-II-king-of-France'), src('Capetian dynasty', 'https://www.britannica.com/topic/Capetian-dynasty') ],
    isRuler: true,
    succession: { office: 'King of the Franks',
      predecessor: { personSlug: 'hugh-capet', displayName: 'Hugh Capet', note: 'His father, founder of the dynasty, who had him crowned co-king.' },
      successor: { personSlug: 'henry-i-of-france', displayName: 'Henry I of France', note: 'His son, who succeeded after the strife over the succession among Robert\'s sons.' } }
  },

  // ── HENRY I OF FRANCE ─────────────────────────────────────────────────────────
  {
    id: 'henry-i-of-france', type: 'character', name: 'Henry I of France', born: 1008, died: 1060,
    deathAge: 'about 52', causeOfDeath: 'Natural causes', restingPlace: 'Basilica of Saint-Denis',
    location: 'Kingdom of France', aliases: ['Henri Ier', 'Henry I Capet'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Sceau_du_roi_Henri_Ier.jpg',
    summary: 'Third Capetian king of France (1031–1060), whose reign saw royal authority at a low ebb amid noble revolts and the rise of the Duke of Normandy.',
    title: 'King of the Franks', roles: ['King of the Franks'],
    birth: { date: '4 May 1008', place: { name: 'Reims' }, note: 'Son of Robert II the Pious and Constance of Arles.' },
    death: { date: '4 August 1060', place: { name: 'Vitry-aux-Loges' }, circumstance: 'Died in 1060, having crowned his young son Philip co-king the previous year.' },
    quickFacts: { realm: 'Kingdom of the Franks', dynasty: 'House of Capet', culture: 'Frankish', knownFor: 'a reign of weak royal power and his marriage to Anne of Kiev' },
    imageInfo: { caption: 'The royal seal of Henry I of France.', creator: 'Natalis de Wailly (drawing of the seal)', date: 'Seal of 1031–1060 (drawn 1838)', source: 'Wikimedia Commons', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Sceau_du_roi_Henri_Ier.jpg', license: 'Public domain', note: wailly },
    overview: [
      'Henry I was the third Capetian king of France, reigning from 1031 to 1060. He came to the throne only after fighting off a rebellion by his own brother, backed by their mother Constance, and his reign is generally seen as the low point of early Capetian royal power.',
      'While the great princes — above all the rising Duke of Normandy, the future William the Conqueror — grew more powerful, Henry struggled to assert authority beyond the royal domain, and his attempts to check Normandy ended in defeat. He is remembered too for his marriage to Anne of Kiev, which brought a princess of the Rus\' to the French court.'
    ],
    greatestFeats: ['King of France for nearly thirty years', 'Married Anne of Kiev', 'Secured his son Philip\'s succession'],
    contentSections: [
      { title: 'Overview', paragraphs: [
        'Henry I was the third Capetian king of France, reigning from 1031 to 1060. He came to the throne only after fighting off a rebellion by his own brother, backed by their mother Constance, and his reign is generally seen as the low point of early Capetian royal power.',
        'While the great princes — above all the rising Duke of Normandy, the future William the Conqueror — grew more powerful, Henry struggled to assert authority beyond the royal domain, and his attempts to check Normandy ended in defeat. He is remembered too for his marriage to Anne of Kiev, which brought a princess of the Rus\' to the French court.'
      ]},
      { title: 'Birth and early life', paragraphs: [
        'Henry was born in 1008, a son of Robert II the Pious and Constance of Arles. Crowned co-king in 1027 in the Capetian fashion, he nonetheless had to fight for his inheritance: on his father\'s death in 1031 his mother Constance championed his younger brother Robert, and Henry secured the throne only after a hard struggle, buying his brother off with the Duchy of Burgundy.',
        'That contested accession set the tone for a reign spent defending a weak monarchy against powerful relatives and vassals.'
      ]},
      { title: 'Character and Personality', paragraphs: [
        'Henry I is a shadowy figure whom the sources treat mostly as a beleaguered warrior-king rather than a personality. What emerges is a ruler defined by struggle: a man who spent his reign campaigning to hold together an inheritance that great vassals and rebellious kin were constantly pulling apart.',
        'If he lacked the pious lustre of his father, he showed a certain dogged resilience. He survived rebellion at his accession, waged repeated wars to contain the duke of Normandy, and — for all his failures in the field — kept the crown intact and passed it securely to his son. His was the persistence of a king holding a weak hand, whose chief achievement was simply to endure and to keep the dynasty going.'
      ]},
      { title: 'A weak crown among great princes', paragraphs: [
        'Henry\'s reign coincided with the growing power of the territorial princes, and none troubled him more than the dukes of Normandy. He at first supported the young Duke William, even helping him against his rebels, but came to fear Norman power and twice invaded Normandy — only to be defeated, notably at Mortemer in 1054, as William established the strength that would carry him to England.',
        'Beyond such wars the king\'s effective authority scarcely reached past the royal demesne around Paris and Orléans. Henry\'s marriage to Anne of Kiev, daughter of Grand Prince Yaroslav the Wise, was a striking piece of long-range diplomacy, and Anne would serve as regent for their son.'
      ]},
      { title: 'Death', paragraphs: [
        'Having had his son Philip crowned co-king in 1059, Henry I died on 4 August 1060. The boy succeeded as Philip I under the regency of his mother Anne of Kiev and the count of Flanders.'
      ]},
      { title: 'Legacy', paragraphs: [
        'Henry I\'s reign marks the nadir of early Capetian fortunes, when the crown was poorest and the great vassals strongest. Yet he preserved the essential achievement of his house — an unbroken hereditary succession — passing the throne intact to his son. His reign also forms the backdrop to the rise of Norman power under William the Conqueror, the vassal who would soon outshine his king.'
      ]}
    ],
    keyAchievements: [
      { title: 'Held the throne for nearly thirty years', description: 'Preserved Capetian rule through rebellion and the rise of the great princes.' },
      { title: 'Marriage to Anne of Kiev', description: 'A far-reaching dynastic alliance with the Rus\'; Anne later served as regent.' },
      { title: 'Secured Philip I\'s succession', description: 'Had his son crowned co-king in 1059, continuing the dynasty.' }
    ],
    timeline: [
      { date: '1008', title: 'Born', description: 'Born to Robert II the Pious and Constance of Arles.' },
      { date: '1027', title: 'Crowned co-king', description: 'Anointed king alongside his father in the Capetian manner.', links: [per('robert-ii-of-france', 'Robert II of France', 'His father and co-king')] },
      { date: '1031', title: 'Wins a contested throne', description: 'Secures the crown against his brother and mother, ceding Burgundy to buy peace.', links: [FR] },
      { date: '1051', title: 'Marries Anne of Kiev', description: 'Weds the daughter of Yaroslav the Wise, a striking long-range alliance.' },
      { date: '1054', title: 'Defeated by Normandy at Mortemer', description: 'His invasion of Normandy fails as Duke William\'s power grows.', links: [per('william-the-conqueror', 'William the Conqueror', 'The Norman duke who defeated him')] },
      { date: '4 August 1060', title: 'Dies', description: 'Dies having crowned his son Philip co-king; Philip I succeeds under regency.', links: [per('philip-i-of-france', 'Philip I of France', 'His son and successor')] }
    ],
    relatedEntries: {
      locations: [ { ...FR, label: 'His kingdom' } ],
      people: [ per('robert-ii-of-france', 'Robert II of France', 'His father and predecessor'), per('philip-i-of-france', 'Philip I of France', 'His son and successor'), per('william-the-conqueror', 'William the Conqueror', 'His overmighty vassal, Duke of Normandy') ],
      events: []
    },
    sources: [ src('Henry I | king of France', 'https://www.britannica.com/biography/Henry-I-king-of-France'), src('Capetian dynasty', 'https://www.britannica.com/topic/Capetian-dynasty') ],
    isRuler: true,
    succession: { office: 'King of the Franks',
      predecessor: { personSlug: 'robert-ii-of-france', displayName: 'Robert II of France', note: 'His father, on whose death he won a contested succession against his brother.' },
      successor: { personSlug: 'philip-i-of-france', displayName: 'Philip I of France', note: 'His son, crowned co-king in 1059 and succeeding as a child under regency.' } }
  },

  // ── PHILIP I OF FRANCE ────────────────────────────────────────────────────────
  {
    id: 'philip-i-of-france', type: 'character', name: 'Philip I of France', born: 1052, died: 1108,
    deathAge: 'about 56', causeOfDeath: 'Natural causes', restingPlace: 'Abbey of Saint-Benoît-sur-Loire (Fleury)',
    location: 'Kingdom of France', aliases: ['Philippe Ier', 'Philip the Amorous'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/0d/Sceau_du_roi_Philippe_Ier.jpg',
    summary: 'Fourth Capetian king of France (1060–1108), whose long reign slowly enlarged the royal domain but was overshadowed by his excommunication for a scandalous second marriage.',
    title: 'King of the Franks', roles: ['King of the Franks'],
    birth: { date: '23 May 1052', place: { name: 'Kingdom of France' }, note: 'Son of Henry I of France and Anne of Kiev.' },
    death: { date: '29 July 1108', place: { name: 'Melun' }, circumstance: 'Died in 1108 after a reign of forty-eight years, one of the longest in French history.' },
    quickFacts: { realm: 'Kingdom of the Franks', dynasty: 'House of Capet', culture: 'Frankish', knownFor: 'his long reign, his excommunication, and reigning during the First Crusade' },
    imageInfo: { caption: 'The royal seal of Philip I of France.', creator: 'Natalis de Wailly (drawing of the seal)', date: 'Seal of 1060–1108 (drawn 1838)', source: 'Wikimedia Commons', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Sceau_du_roi_Philippe_Ier.jpg', license: 'Public domain', note: wailly },
    overview: [
      'Philip I was the fourth Capetian king of France, reigning for forty-eight years from 1060 to 1108 — one of the longest reigns of any French monarch. He came to the throne as a boy of eight under the regency of his mother Anne of Kiev, and grew into a shrewd if unheroic ruler who patiently worked to strengthen the modest royal domain.',
      'His reign spanned the age of the First Crusade, in which he took no part, and was clouded by his repudiation of his wife Bertha and his notorious union with Bertrade de Montfort, for which the Church repeatedly excommunicated him. For all the scandal, he added important territory around Paris and left the crown stronger than he found it.'
    ],
    greatestFeats: ['A forty-eight-year reign', 'Enlarged the royal domain around Paris', 'Held the crown through the age of the First Crusade'],
    contentSections: [
      { title: 'Overview', paragraphs: [
        'Philip I was the fourth Capetian king of France, reigning for forty-eight years from 1060 to 1108 — one of the longest reigns of any French monarch. He came to the throne as a boy of eight under the regency of his mother Anne of Kiev, and grew into a shrewd if unheroic ruler who patiently worked to strengthen the modest royal domain.',
        'His reign spanned the age of the First Crusade, in which he took no part, and was clouded by his repudiation of his wife Bertha and his notorious union with Bertrade de Montfort, for which the Church repeatedly excommunicated him. For all the scandal, he added important territory around Paris and left the crown stronger than he found it.'
      ]},
      { title: 'Birth and early life', paragraphs: [
        'Philip was born in 1052, the son of Henry I and Anne of Kiev, and given a Greek name unusual in the West — a mark of his mother\'s eastern royal background. Crowned co-king in 1059, he succeeded the following year as a child of eight, with his mother and Count Baldwin V of Flanders governing as regents.',
        'Coming of age, he inherited the familiar Capetian problem: a crown rich in dignity but poor in land, hemmed in by great vassals, above all the Norman kings who now ruled England as well as their duchy.'
      ]},
      { title: 'Character and Personality', paragraphs: [
        'Philip I is remembered as a canny, worldly, and unglamorous king — no crusader or warrior-hero, but a patient accumulator of advantage. Contemporaries, especially churchmen scandalised by his private life, were often hostile, painting him as greedy and self-indulgent; his later nickname "the Amorous" preserves the memory of the marriage that defined his reputation.',
        'Beneath the scandal was a competent political operator. He understood that the crown\'s strength lay in slowly enlarging its own lands and playing its great vassals against one another, and he pursued that unspectacular strategy for half a century. He was the kind of king whose achievements are measured not in battles but in acres — the steady, self-interested consolidation on which his more famous successors would build.'
      ]},
      { title: 'Reign and excommunication', paragraphs: [
        'Philip devoted his reign to the patient enlargement of the royal domain, buying, seizing, and inheriting lands — notably the Gâtinais, the Vexin, and Bourges — that thickened the crown\'s territory around Paris and the Loire. He kept clear of grand adventures, declining to join the First Crusade that carried off so many of his nobles after 1096.',
        'His great scandal was matrimonial. Having repudiated his wife Bertha, he carried off and married Bertrade de Montfort, the wife of the Count of Anjou. The Church condemned the union as bigamous and adulterous, and Philip was excommunicated more than once, his lands laid under interdict, before an uneasy reconciliation late in his reign.'
      ]},
      { title: 'Death', paragraphs: [
        'Philip I died on 29 July 1108, having in his last years associated his son Louis with the government of the kingdom. He chose to be buried not at Saint-Denis but at the abbey of Fleury (Saint-Benoît-sur-Loire). His son succeeded him as Louis VI.'
      ]},
      { title: 'Legacy', paragraphs: [
        'Philip I is remembered as the king whose long, patient reign quietly repaired the fortunes of the Capetian crown after the weakness of his father\'s day. By steadily enlarging the royal domain and outlasting his rivals, he handed to his son Louis VI a monarchy with a firmer territorial base — the foundation on which the twelfth-century recovery of French royal power would be built. The scandal of his marriage, however, ensured that the Church remembered him less kindly than the crown had reason to.'
      ]}
    ],
    keyAchievements: [
      { title: 'Reigned forty-eight years', description: 'One of the longest reigns in French history, giving the dynasty stability.' },
      { title: 'Enlarged the royal domain', description: 'Added the Gâtinais, Vexin, and Bourges, thickening crown lands around Paris.' },
      { title: 'Prepared Louis VI\'s succession', description: 'Associated his son with the government and passed on a stronger crown.' }
    ],
    timeline: [
      { date: '1052', title: 'Born', description: 'Born to Henry I of France and Anne of Kiev.' },
      { date: '1060', title: 'Becomes king as a child', description: 'Succeeds Henry I at eight under the regency of his mother Anne of Kiev.', links: [per('henry-i-of-france', 'Henry I of France', 'His father and predecessor'), FR] },
      { date: '1092', title: 'Marries Bertrade de Montfort', description: 'Repudiates Bertha and marries the wife of the Count of Anjou, provoking the Church.' },
      { date: '1095', title: 'Excommunicated', description: 'Excommunicated over the marriage; his lands are laid under interdict.' },
      { date: '1096', title: 'Stays home from the First Crusade', description: 'Takes no part in the crusade that carries off many of his nobles.' },
      { date: '29 July 1108', title: 'Dies', description: 'Dies at Melun; buried at Fleury; succeeded by his son Louis VI.', links: [per('louis-vi-of-france', 'Louis VI of France', 'His son and successor')] }
    ],
    relatedEntries: {
      locations: [ { ...FR, label: 'His kingdom' } ],
      people: [ per('henry-i-of-france', 'Henry I of France', 'His father and predecessor'), per('louis-vi-of-france', 'Louis VI of France', 'His son and successor') ],
      events: []
    },
    sources: [ src('Philip I | king of France', 'https://www.britannica.com/biography/Philip-I-king-of-France'), src('Capetian dynasty', 'https://www.britannica.com/topic/Capetian-dynasty') ],
    isRuler: true,
    succession: { office: 'King of the Franks',
      predecessor: { personSlug: 'henry-i-of-france', displayName: 'Henry I of France', note: 'His father, whom he succeeded as a child under his mother\'s regency.' },
      successor: { personSlug: 'louis-vi-of-france', displayName: 'Louis VI of France', note: 'His son, who as king would greatly strengthen royal authority.' } }
  },

  // ── PHILIP IV THE FAIR ────────────────────────────────────────────────────────
  {
    id: 'philip-iv-of-france', type: 'character', name: 'Philip IV of France', born: 1268, died: 1314,
    deathAge: 'about 46', causeOfDeath: 'Stroke, after a hunting accident', restingPlace: 'Basilica of Saint-Denis',
    location: 'Kingdom of France', aliases: ['Philip the Fair', 'Philippe le Bel'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/98/Philip_iv_and_family._2_%28detail_crop%29.jpg',
    summary: 'King of France (1285–1314), a ruthless centraliser who destroyed the Knights Templar, humbled the papacy, and greatly strengthened the French monarchy.',
    title: 'King of France', roles: ['King of France', 'King of Navarre'],
    birth: { date: '1268', place: { name: 'Fontainebleau' }, note: 'Son of Philip III the Bold; also king of Navarre by marriage to Joan I.' },
    death: { date: '29 November 1314', place: { name: 'Fontainebleau' }, circumstance: 'Died in 1314 of a stroke following a hunting accident, within a year of the Templars\' destruction.' },
    quickFacts: { realm: 'Kingdom of France', dynasty: 'House of Capet', culture: 'French', knownFor: 'destroying the Knights Templar and forcing the papacy to Avignon' },
    imageInfo: { caption: 'Philip IV the Fair in a fourteenth-century manuscript, depicted with his family.', creator: 'Unknown manuscript illuminator', date: '14th century', source: 'Wikimedia Commons', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Philip_iv_and_family._2_(detail_crop).jpg', license: 'Public domain', note: 'A near-contemporary manuscript depiction rather than a portrait from life.' },
    overview: [
      'Philip IV, called "the Fair" for his handsome looks, was king of France from 1285 to 1314 and one of the most powerful and controversial of all medieval French kings. A cold, formidable centraliser who governed through able and ruthless lawyer-ministers, he pushed royal authority to new heights at the expense of the Church, the nobility, and his own creditors.',
      'His reign is remembered above all for two great confrontations: his clash with Pope Boniface VIII, which ended with the papacy removed to Avignon under French influence, and his destruction of the wealthy Knights Templar, whom he had arrested, tortured, and burned while seizing their assets. He also fought a costly war with Flanders and repeatedly debased the coinage to fund his ambitions.'
    ],
    greatestFeats: ['Destroyed the Knights Templar', 'Humbled the papacy and brought it to Avignon', 'Greatly strengthened the centralised French monarchy'],
    contentSections: [
      { title: 'Overview', paragraphs: [
        'Philip IV, called "the Fair" for his handsome looks, was king of France from 1285 to 1314 and one of the most powerful and controversial of all medieval French kings. A cold, formidable centraliser who governed through able and ruthless lawyer-ministers, he pushed royal authority to new heights at the expense of the Church, the nobility, and his own creditors.',
        'His reign is remembered above all for two great confrontations: his clash with Pope Boniface VIII, which ended with the papacy removed to Avignon under French influence, and his destruction of the wealthy Knights Templar, whom he had arrested, tortured, and burned while seizing their assets. He also fought a costly war with Flanders and repeatedly debased the coinage to fund his ambitions.'
      ]},
      { title: 'Birth and early life', paragraphs: [
        'Philip was born in 1268, the son of Philip III the Bold. His marriage to Joan I of Navarre brought him that kingdom and the rich county of Champagne, and he succeeded his father as king of France in 1285. From the start he surrounded himself with a group of professional administrators and legists — men like Guillaume de Nogaret and Enguerrand de Marigny — through whom he would govern.',
        'He inherited a strong monarchy and set about making it stronger still, treating the kingdom as a machine of law and revenue to be centralised under the crown.'
      ]},
      { title: 'Character and Personality', paragraphs: [
        'Philip the Fair is one of the enigmas of medieval kingship. Contemporaries found him cold, silent, and unreadable — a magnificent, impassive figure whose intentions were impossible to guess, and who let his ministers take the blame for his harshest acts. Some saw a pious king manipulated by ruthless servants; others, a ruthless king hiding behind pious servants.',
        'What is certain is the character of his rule: relentless, legalistic, and without sentiment where the power and solvency of the crown were concerned. He broke a pope, annihilated a crusading order, expelled Jews and Lombard bankers to seize their wealth, and debased his coinage without hesitation. Whether the driving will was his own or his ministers\', the reign bears the stamp of a single ambition — the supremacy of the French crown over every rival, sacred or secular.'
      ]},
      { title: 'The papacy and the Templars', paragraphs: [
        'Philip\'s need for money brought him into collision with Pope Boniface VIII over the taxation of the clergy, a quarrel that escalated until the king\'s agents seized the aged pope at Anagni in 1303. Boniface died soon after, and within a few years the papacy had been drawn to Avignon, beginning the long period of French-dominated popes.',
        'In 1307 Philip turned on the Knights Templar, the wealthy military order to which he was heavily in debt. He had its members arrested across France in a single coordinated swoop, extracted confessions of heresy under torture, and pressed the Avignon pope to suppress the order; its last grand master, Jacques de Molay, was burned in 1314. The crown absorbed much of the Templars\' wealth.'
      ]},
      { title: 'Death', paragraphs: [
        'Philip IV died on 29 November 1314, of a stroke following a hunting accident, only months after the burning of Jacques de Molay. He left three sons — the future Louis X, Philip V, and Charles IV — who would each reign in turn, and a daughter, Isabella, whose son would claim the French throne and help ignite the Hundred Years\' War.'
      ]},
      { title: 'Legacy', paragraphs: [
        'Philip the Fair left the French monarchy stronger, more centralised, and more feared than ever before, but also strained and resented. His humbling of the papacy and destruction of the Templars became bywords for the reach of royal power, and legend later imagined a "curse" of the Templars falling on his swiftly failing line. Within fourteen years all three of his sons had died without surviving male heirs, extinguishing the direct Capetian line and opening the disputed succession that led to the Hundred Years\' War.'
      ]}
    ],
    keyAchievements: [
      { title: 'Destroyed the Knights Templar', description: 'Arrested, tried, and suppressed the order (1307–1314), seizing its wealth.' },
      { title: 'Humbled the papacy', description: 'Broke Boniface VIII and helped bring the papacy to Avignon.' },
      { title: 'Centralised the monarchy', description: 'Governed through professional legists, strengthening royal administration and finance.' }
    ],
    timeline: [
      { date: '1268', title: 'Born', description: 'Born at Fontainebleau, son of Philip III the Bold.' },
      { date: '1285', title: 'Becomes King of France', description: 'Succeeds his father; already king of Navarre by marriage to Joan I.', links: [per('philip-iii-of-france', 'Philip III of France', 'His father and predecessor'), FR] },
      { date: '1303', title: 'The outrage at Anagni', description: 'His agents seize Pope Boniface VIII, who dies soon after, breaking papal resistance.' },
      { date: '1307', title: 'Arrests the Templars', description: 'Has the Knights Templar arrested across France in a single day on charges of heresy.' },
      { date: '1314', title: 'Burning of Jacques de Molay', description: 'The last Templar grand master is burned; the order is destroyed and its wealth seized.' },
      { date: '29 November 1314', title: 'Dies', description: 'Dies of a stroke; succeeded by his son Louis X, first of three sons to reign.', links: [per('louis-x-of-france', 'Louis X of France', 'His son and successor')] }
    ],
    relatedEntries: {
      locations: [ { ...FR, label: 'His kingdom' } ],
      people: [ per('philip-iii-of-france', 'Philip III of France', 'His father and predecessor'), per('louis-x-of-france', 'Louis X of France', 'His eldest son and successor') ],
      events: []
    },
    sources: [ src('Philip IV | king of France', 'https://www.britannica.com/biography/Philip-IV-king-of-France'), src('Knights Templar', 'https://www.britannica.com/topic/Templar') ],
    isRuler: true,
    succession: { office: 'King of France', note: 'Succession shown for the French crown; Philip IV was also king of Navarre by right of his wife Joan I.',
      predecessor: { personSlug: 'philip-iii-of-france', displayName: 'Philip III of France', note: 'His father, "the Bold", whom he succeeded in 1285.' },
      successor: { personSlug: 'louis-x-of-france', displayName: 'Louis X of France', note: 'His eldest son, first of Philip\'s three sons to reign in turn.' } }
  },

  // ── LOUIS X THE QUARRELSOME ───────────────────────────────────────────────────
  {
    id: 'louis-x-of-france', type: 'character', name: 'Louis X of France', born: 1289, died: 1316,
    deathAge: 'about 26', causeOfDeath: 'Illness (pleurisy or pneumonia), after playing jeu de paume', restingPlace: 'Basilica of Saint-Denis',
    location: 'Kingdom of France', aliases: ['Louis the Quarrelsome', 'Louis le Hutin', 'Louis the Stubborn'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/30/Ludv%C3%ADk_X.png',
    summary: 'King of France and Navarre (1314–1316), whose brief reign is remembered for an edict freeing serfs and the scandal of the Tour de Nesle; his death opened a succession crisis.',
    title: 'King of France', roles: ['King of France', 'King of Navarre'],
    birth: { date: '4 October 1289', place: { name: 'Paris' }, note: 'Eldest son of Philip IV the Fair; king of Navarre from 1305 by his mother\'s right.' },
    death: { date: '5 June 1316', place: { name: 'Vincennes' }, circumstance: 'Died suddenly in 1316, reportedly after drinking cooled wine following a game of jeu de paume; his son John I was born posthumously.' },
    quickFacts: { realm: 'Kingdom of France and Navarre', dynasty: 'House of Capet', culture: 'French', knownFor: 'his edict freeing serfs, the Tour de Nesle affair, and his sudden death' },
    imageInfo: { caption: 'Louis X of France in a fourteenth-century illumination.', creator: 'Unknown manuscript illuminator', date: 'between 1330 and 1340', source: 'Wikimedia Commons', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Ludvík_X.png', license: 'Public domain', note: 'A manuscript illumination made a generation after his death, not a likeness from life.' },
    overview: [
      'Louis X, nicknamed "the Quarrelsome" (le Hutin), was king of France and Navarre from 1314 to 1316. The eldest son of Philip IV the Fair, he inherited a monarchy strained by his father\'s harsh government and reigned for less than two years before dying suddenly at twenty-six.',
      'His short reign is remembered for a famous edict proclaiming that "France signifies freedom" and offering serfs the chance to buy their liberty, for the scandal of the Tour de Nesle affair that disgraced his first wife, and above all for the succession crisis his death provoked. He left a pregnant queen; the posthumous son she bore, John I, lived only five days, and the crown passed to Louis\'s brother.'
    ],
    greatestFeats: ['King of France and Navarre', 'Edict inviting serfs to purchase their freedom', 'Readmitted the Jews to France'],
    contentSections: [
      { title: 'Overview', paragraphs: [
        'Louis X, nicknamed "the Quarrelsome" (le Hutin), was king of France and Navarre from 1314 to 1316. The eldest son of Philip IV the Fair, he inherited a monarchy strained by his father\'s harsh government and reigned for less than two years before dying suddenly at twenty-six.',
        'His short reign is remembered for a famous edict proclaiming that "France signifies freedom" and offering serfs the chance to buy their liberty, for the scandal of the Tour de Nesle affair that disgraced his first wife, and above all for the succession crisis his death provoked. He left a pregnant queen; the posthumous son she bore, John I, lived only five days, and the crown passed to Louis\'s brother.'
      ]},
      { title: 'Birth and early life', paragraphs: [
        'Louis was born in 1289, the eldest son of Philip IV the Fair and Joan I of Navarre. Through his mother he became king of Navarre in 1305, some years before he inherited France. His first marriage, to Margaret of Burgundy, ended in disaster when she was convicted in the Tour de Nesle affair of 1314 — a scandal of royal adultery that broke over the court just as his father lay dying — and imprisoned; she died in captivity soon after.',
        'On Philip IV\'s death in November 1314 Louis succeeded to a France seething with noble resentment against the late king\'s ministers.'
      ]},
      { title: 'Character and Personality', paragraphs: [
        'Louis X is a faintly drawn figure, his character glimpsed mostly through his nickname "le Hutin" — variously rendered as the Quarrelsome, the Headstrong, or the Stubborn — and through the turbulence of his brief reign. He appears as a young king of no great ability, buffeted by forces larger than himself: a hostile nobility, an inherited crisis of government, and a scandal that struck at his own marriage bed.',
        'What little the reign reveals suggests a ruler more reactive than commanding. He appeased the angry nobles by sacrificing his father\'s hated minister Enguerrand de Marigny to the gallows, and issued populist measures freeing serfs and recalling the Jews as much to raise money and goodwill as from conviction. He is remembered less for what he did than for the dynastic catastrophe that his early death set in motion.'
      ]},
      { title: 'A short and troubled reign', paragraphs: [
        'Faced with a noble reaction against Philip IV\'s regime, Louis gave way: he had the powerful minister Enguerrand de Marigny hanged and granted charters restoring privileges to the aristocracy. To fill the treasury and win favour, he issued the celebrated 1315 edict declaring that any serf might purchase his freedom, "according to the principle that all men are born free", and he readmitted the Jews, expelled by his father, under regulated terms.',
        'These measures did little to steady the reign. In 1316 Louis died suddenly at Vincennes, reportedly after drinking chilled wine following a strenuous game of jeu de paume — an early ancestor of tennis — leaving his second wife, Clementia of Hungary, pregnant.'
      ]},
      { title: 'Death and the succession crisis', paragraphs: [
        'Louis X\'s death in June 1316 left the succession open, for his only living child was a daughter, Joan, whose legitimacy was clouded by the Tour de Nesle scandal. The kingdom waited on the queen\'s pregnancy: she bore a son, John I "the Posthumous", who was king from birth but lived only five days. The crown then passed to Louis\'s brother, Philip V, who set aside the claim of Louis\'s daughter — a decision that hardened into the principle that women could not inherit the French throne.'
      ]},
      { title: 'Legacy', paragraphs: [
        'Louis X\'s reign is remembered chiefly for its consequences. His edict on serfdom left a noble statement of principle, if limited effect, but it was his death that changed history: the five-day life of his son John I and the passing of the crown to his brother established the exclusion of female succession that would later be invoked to bar the English kings from the French throne, one of the roots of the Hundred Years\' War.'
      ]}
    ],
    keyAchievements: [
      { title: 'King of France and Navarre', description: 'Reigned 1314–1316, king of Navarre from 1305 by his mother\'s right.' },
      { title: 'Edict on serfdom, 1315', description: 'Invited serfs to buy their freedom on the principle that men are born free.' },
      { title: 'Readmitted the Jews', description: 'Recalled the Jews expelled by his father under regulated terms.' }
    ],
    timeline: [
      { date: '1289', title: 'Born', description: 'Born at Paris, eldest son of Philip IV the Fair and Joan I of Navarre.' },
      { date: '1305', title: 'Becomes King of Navarre', description: 'Inherits Navarre on his mother\'s death, years before inheriting France.' },
      { date: '1314', title: 'The Tour de Nesle scandal', description: 'His wife Margaret of Burgundy is convicted of adultery and imprisoned.' },
      { date: '1314', title: 'Becomes King of France', description: 'Succeeds his father Philip IV amid a noble reaction against the old regime.', links: [per('philip-iv-of-france', 'Philip IV of France', 'His father and predecessor'), FR] },
      { date: '1315', title: 'Edict inviting serfs to buy freedom', description: 'Issues the famous edict that "France signifies freedom".' },
      { date: '5 June 1316', title: 'Dies suddenly', description: 'Dies after a game of jeu de paume; his posthumous son John I lives five days, and his brother Philip V takes the throne.', links: [per('philip-v-of-france', 'Philip V of France', 'His brother and successor')] }
    ],
    relatedEntries: {
      locations: [ { ...FR, label: 'His kingdom' } ],
      people: [ per('philip-iv-of-france', 'Philip IV of France', 'His father and predecessor'), per('philip-v-of-france', 'Philip V of France', 'His brother and successor') ],
      events: []
    },
    sources: [ src('Louis X | king of France', 'https://www.britannica.com/biography/Louis-X-king-of-France'), src('Capetian dynasty', 'https://www.britannica.com/topic/Capetian-dynasty') ],
    isRuler: true,
    succession: { office: 'King of France', note: 'Succession shown for the French crown; Louis X was also king of Navarre.',
      predecessor: { personSlug: 'philip-iv-of-france', displayName: 'Philip IV of France', note: 'His father, "the Fair", whom he succeeded in 1314.' },
      successor: { personSlug: 'philip-v-of-france', displayName: 'Philip V of France', note: 'His brother, who took the throne after the five-day life of Louis\'s posthumous son John I "the Posthumous".' } }
  },

  // ── PHILIP V THE TALL ─────────────────────────────────────────────────────────
  {
    id: 'philip-v-of-france', type: 'character', name: 'Philip V of France', born: 1291, died: 1322,
    deathAge: 'about 31', causeOfDeath: 'Illness (dysentery)', restingPlace: 'Basilica of Saint-Denis',
    location: 'Kingdom of France', aliases: ['Philip the Tall', 'Philippe le Long'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/c5/Sacre_Philippe5_France_01_%28cropped%29.jpg',
    summary: 'King of France and Navarre (1316–1322), who seized the throne over his infant niece, established that women could not inherit the French crown, and reformed royal administration.',
    title: 'King of France', roles: ['King of France', 'King of Navarre'],
    birth: { date: '1291', place: { name: 'Lyon' }, note: 'Second son of Philip IV the Fair; brother of Louis X.' },
    death: { date: '3 January 1322', place: { name: 'Longchamp, Paris' }, circumstance: 'Died in 1322 of illness after a reign of five years, leaving only daughters; his brother Charles IV succeeded.' },
    quickFacts: { realm: 'Kingdom of France and Navarre', dynasty: 'House of Capet', culture: 'French', knownFor: 'excluding female succession and reforming royal administration' },
    imageInfo: { caption: 'The coronation of Philip V, from a fourteenth-century copy of the Grandes Chroniques de France.', creator: 'Grandes Chroniques de France (manuscript)', date: '14th century', source: 'Wikimedia Commons', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Sacre_Philippe5_France_01_(cropped).jpg', license: 'Public domain', note: 'A manuscript illumination of his coronation, not a portrait from life.' },
    overview: [
      'Philip V, called "the Tall", was king of France and Navarre from 1316 to 1322. The second son of Philip IV the Fair, he seized the throne in the crisis that followed the death of his brother Louis X, setting aside the claim of Louis\'s infant daughter Joan and having himself crowned — a coup that established the enduring principle that a woman could not inherit the French crown.',
        'His brief reign proved surprisingly constructive. An intelligent and orderly ruler, he pursued a serious programme of administrative and financial reform, attempting to standardise coinage, weights, and measures across the kingdom and to regularise the royal finances, even as his reign was troubled by the popular unrest of the Pastoureaux and the persecution of lepers and Jews in 1320–1321.'
    ],
    greatestFeats: ['Established the exclusion of female succession', 'Reformed royal finance and administration', 'Attempted to standardise coinage and measures'],
    contentSections: [
      { title: 'Overview', paragraphs: [
        'Philip V, called "the Tall", was king of France and Navarre from 1316 to 1322. The second son of Philip IV the Fair, he seized the throne in the crisis that followed the death of his brother Louis X, setting aside the claim of Louis\'s infant daughter Joan and having himself crowned — a coup that established the enduring principle that a woman could not inherit the French crown.',
        'His brief reign proved surprisingly constructive. An intelligent and orderly ruler, he pursued a serious programme of administrative and financial reform, attempting to standardise coinage, weights, and measures across the kingdom and to regularise the royal finances, even as his reign was troubled by the popular unrest of the Pastoureaux and the persecution of lepers and Jews in 1320–1321.'
      ]},
      { title: 'Birth and early life', paragraphs: [
        'Philip was born about 1291, the second son of Philip IV the Fair, and was made Count of Poitiers. Like his brothers he married into the Burgundian nobility, and his wife Joan of Burgundy was briefly caught up in the Tour de Nesle scandal but cleared. On the death of his brother Louis X in 1316 Philip, as the senior surviving brother, took charge of the kingdom as regent while the realm awaited the birth of Louis\'s posthumous child.',
        'When that child, John I, died after five days, Philip moved quickly to make himself king rather than yield to the claim of Louis\'s young daughter Joan.'
      ]},
      { title: 'Character and Personality', paragraphs: [
        'Philip V is generally reckoned the ablest of Philip the Fair\'s three sons. Where his brothers seem slight or unlucky, he shows as a shrewd, energetic, and methodical ruler with a genuine appetite for the business of government — a king who grasped the levers of administration and used them deliberately.',
        'That competence had a hard, opportunistic edge. He took the throne by a swift political stroke, outmanoeuvring the supporters of his infant niece and securing an assembly\'s endorsement of the convenient doctrine that women could not succeed. Once crowned, the same decisiveness went into reform: he pressed forward with rationalising the coinage, the royal finances, and the machinery of state. He was a builder and organiser, whose orderly instincts were matched by a firm readiness to bend law and custom to his own advantage.'
      ]},
      { title: 'Reign and reforms', paragraphs: [
        'Having secured the crown, Philip V governed with unusual attention to administration. He worked to reform and centralise the royal finances, held reforming assemblies, and attempted the ambitious standardisation of coinage, weights, and measures throughout the kingdom — a rationalising vision far ahead of what his short reign could achieve.',
        'His reign was shaken by the disorders of 1320–1321: the Pastoureaux, bands of poor "shepherds" who marched south attacking officials and Jews, and then a panic that accused lepers, and again Jews, of poisoning wells, unleashing savage persecution. Philip\'s government struggled to contain these upheavals.'
      ]},
      { title: 'Death', paragraphs: [
        'Philip V died of illness on 3 January 1322, still only about thirty-one. Having no surviving son, he was succeeded — by the very principle of male-only succession he had himself established — by his younger brother, Charles IV, the last of Philip the Fair\'s sons to reign.'
      ]},
      { title: 'Legacy', paragraphs: [
        'Philip V is remembered both as an unusually capable administrator and as the king whose seizure of the throne fixed the exclusion of women from the French succession. That precedent, devised to serve his own ambition, would outlast him spectacularly: within a generation it was being invoked to deny the crown to Edward III of England, Philip IV\'s grandson through the female line — one of the legal roots of the Hundred Years\' War.'
      ]}
    ],
    keyAchievements: [
      { title: 'Excluded female succession', description: 'Took the throne over his niece, establishing that women could not inherit the French crown.' },
      { title: 'Administrative and financial reform', description: 'Reorganised royal finances and held reforming assemblies.' },
      { title: 'Attempted standardisation', description: 'Sought a uniform coinage and uniform weights and measures across France.' }
    ],
    timeline: [
      { date: 'c. 1291', title: 'Born', description: 'Born at Lyon, second son of Philip IV the Fair; made Count of Poitiers.' },
      { date: '1316', title: 'Becomes regent', description: 'Takes charge of the kingdom on the death of his brother Louis X, pending the royal birth.', links: [per('louis-x-of-france', 'Louis X of France', 'His brother and predecessor')] },
      { date: '1316', title: 'Seizes the throne', description: 'After the five-day life of the infant John I, has himself crowned, setting aside his niece Joan.', links: [FR] },
      { date: '1317', title: 'Female succession excluded', description: 'An assembly endorses the principle that a woman cannot inherit the French crown.' },
      { date: '1320–1321', title: 'The Pastoureaux and the leper scare', description: 'Popular risings and a persecution of lepers and Jews convulse the kingdom.' },
      { date: '3 January 1322', title: 'Dies', description: 'Dies of illness with no surviving son; his brother Charles IV succeeds.', links: [per('charles-iv-of-france', 'Charles IV of France', 'His brother and successor')] }
    ],
    relatedEntries: {
      locations: [ { ...FR, label: 'His kingdom' } ],
      people: [ per('louis-x-of-france', 'Louis X of France', 'His brother and predecessor'), per('charles-iv-of-france', 'Charles IV of France', 'His brother and successor') ],
      events: []
    },
    sources: [ src('Philip V | king of France', 'https://www.britannica.com/biography/Philip-V-king-of-France'), src('Capetian dynasty', 'https://www.britannica.com/topic/Capetian-dynasty') ],
    isRuler: true,
    succession: { office: 'King of France', note: 'Succession shown for the French crown; Philip V was also king of Navarre.',
      predecessor: { personSlug: 'louis-x-of-france', displayName: 'Louis X of France', note: 'His brother; Philip took the crown after the five-day life of Louis\'s posthumous son John I "the Posthumous".' },
      successor: { personSlug: 'charles-iv-of-france', displayName: 'Charles IV of France', note: 'His younger brother, the last of Philip IV\'s sons to reign.' } }
  },

  // ── CHARLES VI THE MAD ────────────────────────────────────────────────────────
  {
    id: 'charles-vi-of-france', type: 'character', name: 'Charles VI of France', born: 1368, died: 1422,
    deathAge: 'about 53', causeOfDeath: 'Natural causes', restingPlace: 'Basilica of Saint-Denis',
    location: 'Kingdom of France', aliases: ['Charles the Mad', 'Charles the Beloved', 'Charles le Fol', 'Charles le Bien-Aimé'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/0a/Charles_VI_de_France_-_Dialogues_de_Pierre_Salmon_-_Bib_de_Gen%C3%A8ve_MsFr165f4.jpg',
    summary: 'King of France (1380–1422) whose recurring madness plunged the kingdom into the Armagnac–Burgundian civil war, the English invasion, and the Treaty of Troyes that disinherited his son.',
    title: 'King of France', roles: ['King of France'],
    birth: { date: '3 December 1368', place: { name: 'Paris' }, note: 'Son of Charles V the Wise; succeeded as a boy of eleven.' },
    death: { date: '21 October 1422', place: { name: 'Paris' }, circumstance: 'Died in 1422 with his kingdom divided and partly ruled by the English under the Treaty of Troyes.' },
    quickFacts: { realm: 'Kingdom of France', dynasty: 'House of Valois', culture: 'French', knownFor: 'his madness and the collapse of France into civil war and English conquest' },
    imageInfo: { caption: 'Charles VI of France receiving a book, from the Dialogues of Pierre Salmon, c. 1411–1413.', creator: 'Attributed to the Mazarine Master', date: 'c. 1411–1413', source: 'Wikimedia Commons', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Charles_VI_de_France_-_Dialogues_de_Pierre_Salmon_-_Bib_de_Gen%C3%A8ve_MsFr165f4.jpg', license: 'Public domain', note: 'A near-contemporary manuscript illumination made during his own reign.' },
    overview: [
      'Charles VI, king of France from 1380 to 1422, is remembered by two opposite bynames that capture the tragedy of his reign: "the Beloved" of his hopeful early years and "the Mad" of the decades that followed. He succeeded as a boy under the rule of ambitious uncles, and his personal reign began with promise.',
      'From 1392, however, he was struck by recurring fits of insanity that left him incapable of ruling for months at a time. The power vacuum at the centre of the kingdom set his relatives at each other\'s throats in the Armagnac–Burgundian civil war, invited the renewed English onslaught that triumphed at Agincourt, and ended with the Treaty of Troyes of 1420, by which the mad king recognised Henry V of England as his heir, disinheriting his own son.'
    ],
    greatestFeats: ['King of France for forty-two years', 'A reign that shaped the Hundred Years\' War\'s darkest phase'],
    contentSections: [
      { title: 'Overview', paragraphs: [
        'Charles VI, king of France from 1380 to 1422, is remembered by two opposite bynames that capture the tragedy of his reign: "the Beloved" of his hopeful early years and "the Mad" of the decades that followed. He succeeded as a boy under the rule of ambitious uncles, and his personal reign began with promise.',
        'From 1392, however, he was struck by recurring fits of insanity that left him incapable of ruling for months at a time. The power vacuum at the centre of the kingdom set his relatives at each other\'s throats in the Armagnac–Burgundian civil war, invited the renewed English onslaught that triumphed at Agincourt, and ended with the Treaty of Troyes of 1420, by which the mad king recognised Henry V of England as his heir, disinheriting his own son.'
      ]},
      { title: 'Birth and early life', paragraphs: [
        'Charles was born in 1368, the son of Charles V "the Wise", and came to the throne in 1380 as a boy of eleven. During his minority the kingdom was governed — and its recovered strength squandered — by his powerful uncles, the dukes of Anjou, Berry, and Burgundy. When Charles took power into his own hands in 1388, recalling his father\'s able ministers, hopes were high, and it was then that he earned the name "the Beloved".',
        'That promise was shattered in 1392 when, on a march into Brittany, the young king suddenly went mad, killing several of his own companions before he could be subdued.'
      ]},
      { title: 'Character and Personality', paragraphs: [
        'Charles VI\'s personality is inseparable from his illness. In his lucid periods he could be gracious, pious, and well-meaning — the amiable prince his people had loved — but from 1392 his mind repeatedly gave way, in episodes that could last for months. During these he sometimes failed to recognise his own wife and children, believed himself made of glass and liable to shatter, and had to be cared for as an invalid.',
        'The tragedy of his reign is that of a fundamentally sympathetic man rendered incapable of the one thing his position demanded: consistent rule. His recurring incapacity created a vacuum that stronger and more ruthless figures — his brother Louis of Orléans, his cousin John the Fearless of Burgundy, his own queen Isabeau of Bavaria — rushed to fill, and it was in that vacuum, rather than through any act of the king himself, that the disasters of his reign unfolded.'
      ]},
      { title: 'Madness, civil war, and the English', paragraphs: [
        'The king\'s madness left France without a functioning head of state for thirty years. Control of the incapacitated king and his government became the prize in a savage rivalry between the houses of Orléans (the Armagnacs) and Burgundy, which erupted into open civil war after John the Fearless had Louis of Orléans murdered in 1407.',
        'Into this divided kingdom Henry V of England struck in 1415, destroying the French nobility at the Battle of Agincourt. With Burgundy allied to the English after John the Fearless\'s own murder in 1419, the helpless Charles VI was brought to sign the Treaty of Troyes in 1420: he gave his daughter to Henry V, recognised the English king as heir and regent of France, and disinherited his son the Dauphin.'
      ]},
      { title: 'Death', paragraphs: [
        'Charles VI died in October 1422, only weeks after Henry V. By the terms of Troyes the infant Henry VI of England was proclaimed king of France in Paris, while the disinherited Dauphin held the south as the rival "King of Bourges". The kingdom Charles left was broken in two.'
      ]},
      { title: 'Legacy', paragraphs: [
        'Charles VI\'s reign was one of the great catastrophes of French history: a strong monarchy inherited from his wise father was reduced, through his madness and the strife it unleashed, to civil war, foreign conquest, and the near-extinction of the Valois claim to the throne. Yet the disinherited son he seemed to have doomed would, as Charles VII and with the aid of Joan of Arc, ultimately recover the kingdom and expel the English — so that the darkest reign gave way to the recovery that ended the Hundred Years\' War.'
      ]}
    ],
    keyAchievements: [
      { title: 'King of France for forty-two years', description: 'One of the longest reigns in French history, though incapacitated for much of it.' },
      { title: 'A hopeful personal reign, 1388–1392', description: 'Recalled his father\'s able ministers and won the love of his people before his illness.' },
      { title: 'Central to the Hundred Years\' War', description: 'His incapacity shaped the war\'s darkest phase, from Agincourt to the Treaty of Troyes.' }
    ],
    timeline: [
      { date: '1368', title: 'Born', description: 'Born at Paris, son of Charles V the Wise.' },
      { date: '1380', title: 'Becomes King of France', description: 'Succeeds as a boy of eleven, under the rule of his ambitious uncles.', links: [per('charles-v-of-france', 'Charles V of France', 'His father and predecessor'), FR] },
      { date: '1392', title: 'Struck by madness', description: 'Suddenly goes mad on a march into Brittany, beginning thirty years of recurring insanity.' },
      { date: '1407', title: 'Armagnac–Burgundian civil war', description: 'The murder of Louis of Orléans by John the Fearless plunges France into civil war.' },
      { date: '1415', title: 'Defeat at Agincourt', description: 'Henry V destroys the French army at the Battle of Agincourt.', links: [ev('battle-of-agincourt', 'Battle of Agincourt', 'The English victory of 1415'), ev('hundred-years-war', 'Hundred Years\' War', 'The war of his reign')] },
      { date: '1420', title: 'Treaty of Troyes', description: 'Recognises Henry V as heir to France, disinheriting his own son the Dauphin.' },
      { date: '21 October 1422', title: 'Dies', description: 'Dies with the kingdom divided between the English-backed Henry VI and his disinherited son.', links: [per('charles-vii-of-france', 'Charles VII of France', 'His disinherited son and eventual successor')] }
    ],
    relatedEntries: {
      locations: [ { ...FR, label: 'His divided kingdom' } ],
      people: [ per('charles-v-of-france', 'Charles V of France', 'His father and predecessor'), per('charles-vii-of-france', 'Charles VII of France', 'His son, disinherited then successor') ],
      events: [ ev('battle-of-agincourt', 'Battle of Agincourt', 'The 1415 disaster of his reign'), ev('hundred-years-war', 'Hundred Years\' War', 'The war that engulfed his kingdom') ]
    },
    sources: [ src('Charles VI | king of France', 'https://www.britannica.com/biography/Charles-VI-king-of-France'), src('Hundred Years’ War', 'https://www.britannica.com/event/Hundred-Years-War') ],
    isRuler: true,
    succession: { office: 'King of France',
      predecessor: { personSlug: 'charles-v-of-france', displayName: 'Charles V of France', note: 'His father, "the Wise", whom he succeeded as a boy in 1380.' },
      successor: { personSlug: 'charles-vii-of-france', displayName: 'Charles VII of France', note: 'His son, disinherited by the Treaty of Troyes but eventually king as Charles VII.' } }
  },

  // ── CHARLES VII THE VICTORIOUS ────────────────────────────────────────────────
  {
    id: 'charles-vii-of-france', type: 'character', name: 'Charles VII of France', born: 1403, died: 1461,
    deathAge: 'about 58', causeOfDeath: 'Illness (an infected leg, aggravated by self-starvation)', restingPlace: 'Basilica of Saint-Denis',
    location: 'Kingdom of France', aliases: ['Charles the Victorious', 'Charles the Well-Served', 'Charles le Victorieux'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/7/71/KarlVII.jpg',
    summary: 'King of France (1422–1461) who, rescued by Joan of Arc, recovered his kingdom, expelled the English, and ended the Hundred Years\' War in 1453.',
    title: 'King of France', roles: ['King of France'],
    birth: { date: '22 February 1403', place: { name: 'Paris' }, note: 'Son of Charles VI the Mad; disinherited by the Treaty of Troyes.' },
    death: { date: '22 July 1461', place: { name: 'Mehun-sur-Yèvre' }, circumstance: 'Died in 1461, victor over the English, succeeded by his estranged son Louis XI.' },
    quickFacts: { realm: 'Kingdom of France', dynasty: 'House of Valois', culture: 'French', knownFor: 'recovering France with the help of Joan of Arc and winning the Hundred Years\' War' },
    imageInfo: { caption: 'Charles VII of France, in the celebrated portrait by Jean Fouquet, c. 1445–1450.', creator: 'Jean Fouquet', date: 'c. 1445–1450', source: 'Wikimedia Commons', sourceUrl: 'https://commons.wikimedia.org/wiki/File:KarlVII.jpg', license: 'Public domain', note: 'One of the first true-to-life royal portraits in Western art, painted from life by Jean Fouquet.' },
    overview: [
      'Charles VII, called "the Victorious", was king of France from 1422 to 1461, and the monarch under whom the kingdom was rescued from its lowest ebb and the Hundred Years\' War at last brought to a triumphant close. Disinherited by his own mad father under the Treaty of Troyes, he began his reign as the mocked "King of Bourges", ruling only the lands south of the Loire while an English king was crowned in Paris.',
      'His cause was transformed by Joan of Arc, whose relief of Orléans in 1429 and insistence on his coronation at Reims restored the legitimacy and momentum of the Valois monarchy. Over the following decades Charles reorganised his army and finances, reconciled with Burgundy, and drove the English from Normandy and Gascony, ending the war in 1453 with almost all of France recovered.'
    ],
    greatestFeats: ['Recovered France and won the Hundred Years\' War', 'Restored by Joan of Arc\'s relief of Orléans and his coronation at Reims', 'Created France\'s first standing royal army'],
    contentSections: [
      { title: 'Overview', paragraphs: [
        'Charles VII, called "the Victorious", was king of France from 1422 to 1461, and the monarch under whom the kingdom was rescued from its lowest ebb and the Hundred Years\' War at last brought to a triumphant close. Disinherited by his own mad father under the Treaty of Troyes, he began his reign as the mocked "King of Bourges", ruling only the lands south of the Loire while an English king was crowned in Paris.',
        'His cause was transformed by Joan of Arc, whose relief of Orléans in 1429 and insistence on his coronation at Reims restored the legitimacy and momentum of the Valois monarchy. Over the following decades Charles reorganised his army and finances, reconciled with Burgundy, and drove the English from Normandy and Gascony, ending the war in 1453 with almost all of France recovered.'
      ]},
      { title: 'Birth and early life', paragraphs: [
        'Charles was born in 1403, a younger son of Charles VI the Mad and Isabeau of Bavaria, and became Dauphin only through the deaths of his elder brothers. Growing up amid the Armagnac–Burgundian civil war, he was implicated in the murder of John the Fearless of Burgundy in 1419, which drove Burgundy into the arms of England. In 1420 the Treaty of Troyes disinherited him in favour of Henry V of England.',
        'When his father and Henry V both died in 1422, Charles proclaimed himself king south of the Loire, but his position was desperate: uncrowned, short of money, doubted even in his own legitimacy, and facing the English and their Burgundian allies.'
      ]},
      { title: 'Character and Personality', paragraphs: [
        'Charles VII is one of history\'s great late developers. In his youth he seemed feeble and irresolute — the diffident, melancholy "King of Bourges", passive in the face of disaster and easily dominated by favourites and factions. Contemporaries doubted his nerve and even, in the whispers of the day, his royal paternity.',
        'The mature king was a different man, or at least revealed hidden qualities: patient, shrewd, and an outstanding judge of servants, he earned the alternative byname "the Well-Served" for his gift of employing able men — soldiers, financiers like Jacques Cœur, and administrators — and letting them work. If he lacked the personal heroism of Joan of Arc, whom he notably failed to save, he possessed the harder political virtues of persistence and calculation, and it was under his unglamorous, methodical direction that France was rebuilt and the long war finally won.'
      ]},
      { title: 'Joan of Arc and the recovery of France', paragraphs: [
        'In 1429, with the English besieging Orléans, the last great fortress of the loyal south, the peasant visionary Joan of Arc came to Charles and persuaded him to let her lead an army to its relief. The raising of the Siege of Orléans and the victories that followed broke the spell of English invincibility, and Joan led Charles deep into enemy-held territory to be crowned and anointed king at Reims, the traditional coronation city — an act that decisively legitimised his kingship.',
        'Charles did not save Joan when she was captured and burned in 1431, a lasting stain on his reputation. But the tide he had turned did not recede. He reconciled with Burgundy at Arras in 1435, recovered Paris, reformed his army with the ordinance companies and a regular tax to pay them, and in a final campaign expelled the English from Normandy and Gascony, winning the war at the Battle of Castillon in 1453.'
      ]},
      { title: 'Death', paragraphs: [
        'Charles VII\'s last years were embittered by the rebellions and plots of his son and heir, the future Louis XI, with whom he was deeply estranged. He died in 1461 — by tradition refusing food for fear of poison — and was succeeded by that same son.'
      ]},
      { title: 'Legacy', paragraphs: [
        'Charles VII is remembered as the king who saved France. Under him the kingdom passed from the brink of dissolution to victory: the English were expelled, the Hundred Years\' War was ended, and the crown emerged with a standing army and a reformed system of taxation that made it far stronger than before. The reign that began with a disinherited fugitive at Bourges ended with a restored and consolidated monarchy — the foundation on which his son Louis XI would build the modern French state.'
      ]}
    ],
    keyAchievements: [
      { title: 'Won the Hundred Years\' War', description: 'Expelled the English from France, ending the war at Castillon in 1453.' },
      { title: 'Restored by Joan of Arc', description: 'The relief of Orléans and his coronation at Reims in 1429 turned the war around.' },
      { title: 'Created a standing army', description: 'Reformed the army with the ordinance companies and a regular tax to pay them.' }
    ],
    timeline: [
      { date: '1403', title: 'Born', description: 'Born at Paris, son of Charles VI the Mad; later Dauphin.' },
      { date: '1420', title: 'Disinherited at Troyes', description: 'The Treaty of Troyes names Henry V of England heir to France, disinheriting him.' },
      { date: '1422', title: 'Proclaims himself king', description: 'On his father\'s death, claims the crown south of the Loire as the "King of Bourges".', links: [per('charles-vi-of-france', 'Charles VI of France', 'His father and predecessor'), FR] },
      { date: '1429', title: 'Orléans relieved and coronation at Reims', description: 'Joan of Arc raises the siege of Orléans and leads him to be crowned at Reims.', links: [per('joan-of-arc', 'Joan of Arc', 'Who restored his cause'), ev('siege-of-orleans', 'Siege of Orléans', 'The 1429 turning point')] },
      { date: '1435', title: 'Reconciles with Burgundy', description: 'The Treaty of Arras ends the Burgundian alliance with England.' },
      { date: '1453', title: 'Wins the Hundred Years\' War', description: 'Expels the English from Gascony at the Battle of Castillon, ending the war.', links: [ev('hundred-years-war', 'Hundred Years\' War', 'Which he brought to an end')] },
      { date: '22 July 1461', title: 'Dies', description: 'Dies estranged from his heir; succeeded by his son Louis XI.' }
    ],
    relatedEntries: {
      locations: [ { ...FR, label: 'The kingdom he recovered' } ],
      people: [ per('charles-vi-of-france', 'Charles VI of France', 'His father and predecessor'), per('joan-of-arc', 'Joan of Arc', 'Who rescued his cause at Orléans and Reims') ],
      events: [ ev('siege-of-orleans', 'Siege of Orléans', 'The 1429 turning point of his reign'), ev('hundred-years-war', 'Hundred Years\' War', 'The war he brought to a victorious close') ]
    },
    sources: [ src('Charles VII | king of France', 'https://www.britannica.com/biography/Charles-VII-king-of-France'), src('Hundred Years’ War', 'https://www.britannica.com/event/Hundred-Years-War') ],
    isRuler: true,
    succession: { office: 'King of France',
      predecessor: { personSlug: 'charles-vi-of-france', displayName: 'Charles VI of France', note: 'His father, "the Mad", who had disinherited him by the Treaty of Troyes.' },
      successor: { status: 'outside-scope', displayName: 'Louis XI of France', note: 'His son, who began his reign in 1461 — after IronCodex\'s 1453 medieval cutoff — and belongs to the transition to the early-modern French state.' } }
  }
]

// Insert / replace
let added = 0, replaced = 0
for (const p of people) {
  const i = data.characters.findIndex(c => c.id === p.id)
  if (i >= 0) { data.characters[i] = p; replaced++ } else { data.characters.push(p); added++ }
}

// Relink the four existing endpoints that named these kings as bare text.
const byId = new Map(data.characters.map(c => [c.id, c]))
const relink = (rulerId, side, personSlug, displayName, note) => {
  const c = byId.get(rulerId)
  if (!c?.succession?.[side]) { console.warn(`SKIP relink ${rulerId}.${side}`); return }
  c.succession[side] = { personSlug, displayName, note }
  console.log(`relinked ${rulerId}.${side} -> ${personSlug}`)
}
relink('louis-vi-of-france', 'predecessor', 'philip-i-of-france', 'Philip I of France', 'His father, whose long reign enlarged the royal domain around Paris.')
relink('philip-iii-of-france', 'successor', 'philip-iv-of-france', 'Philip IV of France', 'His son, "the Fair", who destroyed the Templars and humbled the papacy.')
relink('charles-iv-of-france', 'predecessor', 'philip-v-of-france', 'Philip V of France', 'His brother, the last two of Philip IV\'s three sons to reign.')
relink('charles-v-of-france', 'successor', 'charles-vi-of-france', 'Charles VI of France', 'His son, "the Mad", whose incapacity brought France to civil war and English conquest.')

fs.writeFileSync(dataPath, JSON.stringify(data, null, 2))
console.log(`\nCapetian kings added: ${added}, replaced: ${replaced}. Total characters: ${data.characters.length}`)
