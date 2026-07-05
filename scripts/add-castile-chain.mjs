/**
 * Iterative succession chain for the Castilian Trastámara line around John I of
 * Castile. Creates full ruler articles for Peter of Castile (the Cruel),
 * Henry II, Henry III, and John II of Castile, links John I of Castile's
 * predecessor/successor, and stops cleanly at Henry IV (outside the 476–1453
 * medieval scope). Idempotent by id.
 */
import fs from 'node:fs'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dataPath = path.join(__dirname, '../server/data/history.json')
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'))

const CAST = { title: 'Kingdom of Castile', type: 'location', slug: 'kingdom-of-castile' }
const per = (slug, title, label) => ({ title, type: 'person', slug, label })
const src = (title, url) => ({ title, author: 'Encyclopaedia Britannica', type: 'encyclopedia', url })

const people = [
  // ── PETER OF CASTILE (the Cruel) ─────────────────────────────────────────────
  {
    id: 'peter-of-castile', type: 'character', name: 'Peter of Castile', born: 1334, died: 1369,
    deathAge: 'about 35', causeOfDeath: 'Killed by his half-brother at Montiel', restingPlace: 'Seville Cathedral',
    location: 'Crown of Castile', aliases: ['Peter the Cruel', 'Pedro I', 'Pedro el Cruel', 'Peter the Just', 'el Justiciero'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/58/Monnaie_-_Espagne%2C_Castille_et_Leon%2C_Pierre_I%2C_dobla%2C_S%C3%A9ville_-_btv1b11335305r_%281_of_2%29.jpg',
    summary: 'King of Castile and León (1350–1369) whose bitter civil war against his illegitimate half-brothers ended with his murder by Henry of Trastámara, opening the Trastámara dynasty.',
    title: 'King of Castile and León', roles: ['King of Castile and León'],
    birth: { date: '1334', place: { name: 'Burgos' }, note: 'Legitimate son and heir of Alfonso XI of Castile.' },
    death: { date: '23 March 1369', place: { name: 'Montiel' }, event: { name: 'Battle of Montiel', type: 'event' },
      circumstance: 'Defeated at the Battle of Montiel in 1369, he was lured to his half-brother\'s tent and stabbed to death by Henry of Trastámara.' },
    quickFacts: { realm: 'Crown of Castile', dynasty: 'Castilian House of Ivrea (Burgundy)', culture: 'Castilian', knownFor: 'the Castilian civil war and his violent death, which founded the Trastámara dynasty' },
    imageInfo: { caption: 'A gold dobla of Peter of Castile struck at Seville during his reign (1350–1368).', creator: 'Royal mint of Seville', date: 'between 1350 and 1368', source: 'Wikimedia Commons', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Monnaie_-_Espagne,_Castille_et_Leon,_Pierre_I,_dobla,_S%C3%A9ville_-_btv1b11335305r_(1_of_2).jpg', license: 'Public domain', note: 'A coin bearing the king\'s title, a contemporary official image rather than a portrait from life.' },
    overview: [
      'Peter of Castile, remembered by his enemies as "the Cruel" and by his partisans as "the Just", was king of Castile and León from 1350 to 1369. His reign was consumed by a ferocious civil war against his illegitimate half-brothers, the sons of Alfonso XI by Leonor de Guzmán, led by Henry of Trastámara.',
      'The struggle became a front of the Hundred Years\' War, with Peter allied to England and the Black Prince and Henry to France. After early victory, Peter was finally defeated and murdered by Henry at Montiel in 1369, an act that ended the old Castilian line and founded the Trastámara dynasty.'
    ],
    greatestFeats: ['King of Castile and León', 'Victory at Nájera with the Black Prince (1367)', 'His death founded the Trastámara dynasty'],
    contentSections: [
      { title: 'Overview', paragraphs: [
        'Peter of Castile, remembered by his enemies as "the Cruel" and by his partisans as "the Just", was king of Castile and León from 1350 to 1369. His reign was consumed by a ferocious civil war against his illegitimate half-brothers, the sons of Alfonso XI by Leonor de Guzmán, led by Henry of Trastámara.',
        'The struggle became a front of the Hundred Years\' War, with Peter allied to England and the Black Prince and Henry to France. After early victory, Peter was finally defeated and murdered by Henry at Montiel in 1369, an act that ended the old Castilian line and founded the Trastámara dynasty.'
      ]},
      { title: 'Birth and early life', paragraphs: [
        'Peter was born in 1334, the legitimate son and heir of Alfonso XI of Castile. His father, however, openly favoured his mistress Leonor de Guzmán and their many sons, and on Alfonso\'s death in 1350 the rivalry between Peter and these half-brothers — above all Henry of Trastámara — set the pattern for his whole reign.',
        'Peter came to the throne as a teenager under the influence of the powerful courtier Juan Alfonso de Alburquerque, and his early attempts to assert royal authority against the great nobles quickly hardened into the violence that gave him his byname.'
      ]},
      { title: 'Character and Personality', paragraphs: [
        'Peter\'s reputation is one of the most contested of any medieval king, because the sources that shaped it were written by his enemies. The chronicle of Pero López de Ayala, composed under the victorious Trastámara dynasty, fixed the image of "Peter the Cruel": a vengeful, suspicious king who had opponents, kinsmen, and his own French wife Blanche of Bourbon killed.',
        'A rival tradition remembered him as "the Just" (el Justiciero), a king who enforced royal law harshly against overmighty nobles and protected townspeople and the vulnerable. The truth is hard to recover beneath the propaganda of the dynasty that overthrew him, but both traditions agree on a ruler of fierce will and readiness for violence, whose reign was defined by the merciless logic of a civil war for survival.'
      ]},
      { title: 'The Castilian civil war', paragraphs: [
        'Peter\'s reign was dominated by the war against Henry of Trastámara and his brothers. The conflict drew in the great powers: Henry was backed by France and the Aragonese and by the Breton captain Bertrand du Guesclin, while Peter allied with Edward, the Black Prince, and England. In 1367 the Black Prince won a crushing victory for Peter at the Battle of Nájera, temporarily restoring him.',
        'The English alliance did not hold. When the Black Prince withdrew, unpaid and disillusioned, Henry returned with French support. In 1369 Peter was besieged and defeated at Montiel; lured to a parley in his half-brother\'s tent, he was seized and stabbed to death by Henry himself.'
      ]},
      { title: 'Death', paragraphs: [
        'Peter was killed at Montiel on 23 March 1369 in a personal struggle with Henry of Trastámara, who thereby made himself king as Henry II. Peter\'s death ended the direct line of the old Castilian royal house and transferred the crown to the illegitimate Trastámara branch.'
      ]},
      { title: 'Legacy', paragraphs: [
        'Peter of Castile is remembered as much for his contested reputation as for his reign: the "Cruel" of Trastámara propaganda and the "Just" of a counter-tradition. His murder founded the Trastámara dynasty that would rule Castile — and, through his descendants, unite it with Aragon under the Catholic Monarchs. His entanglement of the Castilian civil war with the Hundred Years\' War also marks how deeply Iberian and wider European conflicts had become linked by the fourteenth century.'
      ]}
    ],
    keyAchievements: [
      { title: 'King of Castile and León, 1350–1369', description: 'Fought to assert royal authority through a long civil war against his half-brothers.' },
      { title: 'Victory at Nájera, 1367', description: 'Restored to power by the Black Prince\'s victory, tying the Castilian war to the Hundred Years\' War.' },
      { title: 'His death founded the Trastámara dynasty', description: 'His murder at Montiel gave the crown to Henry of Trastámara, beginning a new royal house.' }
    ],
    timeline: [
      { date: '1334', title: 'Born', description: 'Born at Burgos, legitimate heir of Alfonso XI of Castile.' },
      { date: '1350', title: 'Becomes King of Castile and León', description: 'Succeeds his father Alfonso XI amid rivalry with his illegitimate half-brothers.', links: [CAST] },
      { date: '1360s', title: 'Civil war with the Trastámara', description: 'Fights a long war against Henry of Trastámara, backed by France, Aragon, and Bertrand du Guesclin.' },
      { date: '1367', title: 'Restored by victory at Nájera', description: 'The Black Prince wins the Battle of Nájera for Peter, tying the Castilian war to the Hundred Years\' War.', links: [per('edward-the-black-prince', 'Edward, the Black Prince', 'His English ally at Nájera')] },
      { date: '23 March 1369', title: 'Killed at Montiel', description: 'Defeated and stabbed to death by Henry of Trastámara, who becomes King Henry II.', links: [per('henry-ii-of-castile', 'Henry II of Castile', 'His half-brother and killer')] }
    ],
    relatedEntries: {
      locations: [ { ...CAST, label: 'His realm' } ],
      people: [ per('henry-ii-of-castile', 'Henry II of Castile', 'His half-brother, rival, and successor'), per('edward-the-black-prince', 'Edward, the Black Prince', 'His ally, victor at Nájera') ],
      events: [ { title: 'Hundred Years\' War', type: 'event', slug: 'hundred-years-war', label: 'His civil war became a front of it' } ]
    },
    sources: [ src('Peter the Cruel | king of Castile', 'https://www.britannica.com/biography/Peter-the-Cruel'), src('Trastámara dynasty', 'https://www.britannica.com/topic/Trastamara-dynasty') ],
    isRuler: true,
    succession: { office: 'King of Castile and León',
      predecessor: { displayName: 'Alfonso XI of Castile', note: 'His father, the "Avenger" king, victor over the Marinids at the Río Salado; an in-scope predecessor whose own article is not yet in the Codex.' },
      successor: { personSlug: 'henry-ii-of-castile', displayName: 'Henry II of Castile', note: 'His illegitimate half-brother, who killed him at Montiel and took the throne, founding the Trastámara dynasty.' } }
  },

  // ── HENRY II OF CASTILE ───────────────────────────────────────────────────────
  {
    id: 'henry-ii-of-castile', type: 'character', name: 'Henry II of Castile', born: 1334, died: 1379,
    deathAge: 'about 45', causeOfDeath: 'Natural causes (possibly poison, disputed)', restingPlace: 'Toledo Cathedral',
    location: 'Crown of Castile', aliases: ['Henry of Trastámara', 'Enrique II', 'Henry the Fratricidal', 'el de las Mercedes'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Enrique_II_de_Castilla.jpg',
    summary: 'King of Castile and León (1369–1379) and founder of the Trastámara dynasty, who seized the throne by killing his half-brother Peter of Castile.',
    title: 'King of Castile and León', roles: ['King of Castile and León'],
    birth: { date: '1334', place: { name: 'Seville' }, note: 'Illegitimate son of Alfonso XI of Castile and Leonor de Guzmán.' },
    death: { date: '29 May 1379', place: { name: 'Santo Domingo de la Calzada' }, circumstance: 'Died in 1379 after a decade\'s reign; later tradition suspected poison, but this is uncertain.' },
    quickFacts: { realm: 'Crown of Castile', dynasty: 'House of Trastámara (founder)', culture: 'Castilian', knownFor: 'founding the Trastámara dynasty by killing Peter of Castile' },
    imageInfo: { caption: 'Henry II of Castile in a devotional image by Jaume Serra, c. 1360.', creator: 'Jaume Serra', date: 'c. 1360', source: 'Wikimedia Commons', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Enrique_II_de_Castilla.jpg', license: 'Public domain', note: 'A near-contemporary devotional painting rather than a state portrait.' },
    overview: [
      'Henry II of Castile, known as Henry of Trastámara, was king of Castile and León from 1369 to 1379 and the founder of the Trastámara dynasty that would rule Castile for over a century. An illegitimate son of Alfonso XI, he led a long rebellion against his legitimate half-brother Peter of Castile.',
      'Backed by France and the captain Bertrand du Guesclin, he defeated and personally killed Peter at Montiel in 1369, seizing the throne. He is remembered as "the Fratricidal" for that act and as "el de las Mercedes" for the lavish grants of land and privilege with which he bought noble support for his new dynasty.'
    ],
    greatestFeats: ['Founded the House of Trastámara', 'Won the Castilian civil war', 'Secured his dynasty through the "Mercedes Enriqueñas"'],
    contentSections: [
      { title: 'Overview', paragraphs: [
        'Henry II of Castile, known as Henry of Trastámara, was king of Castile and León from 1369 to 1379 and the founder of the Trastámara dynasty that would rule Castile for over a century. An illegitimate son of Alfonso XI, he led a long rebellion against his legitimate half-brother Peter of Castile.',
        'Backed by France and the captain Bertrand du Guesclin, he defeated and personally killed Peter at Montiel in 1369, seizing the throne. He is remembered as "the Fratricidal" for that act and as "el de las Mercedes" for the lavish grants of land and privilege with which he bought noble support for his new dynasty.'
      ]},
      { title: 'Birth and early life', paragraphs: [
        'Henry was born in 1334, one of the many sons of Alfonso XI of Castile by his mistress Leonor de Guzmán. Raised as Count of Trastámara, he grew up in the shadow of his father\'s open favour toward this second family, and of the hostility of the legitimate heir, Peter. When Alfonso died in 1350 and Leonor was soon executed on Peter\'s side, Henry became the natural leader of the aggrieved half-brothers.'
      ]},
      { title: 'Character and Personality', paragraphs: [
        'Henry is a difficult figure to judge fairly, because the dominant chronicle tradition — that of Pero López de Ayala, who served him — was written to justify his usurpation. That tradition presents a capable, politically shrewd, and pragmatic leader whose seizure of the throne, however violent, restored order after Peter\'s tyranny.',
        'What the record shows plainly is a ruler of ruthless political calculation. He murdered his own half-brother to take the crown, and then secured it by buying the loyalty of the Castilian nobility with enormous grants of land and rights — the "Mercedes Enriqueñas" — that permanently strengthened the aristocracy at the crown\'s expense. He appears as a usurper who understood exactly what his precarious new dynasty needed to survive.'
      ]},
      { title: 'As king of Castile', paragraphs: [
        'Having killed Peter at Montiel in 1369, Henry ruled for a decade as the first Trastámara king. His central problem was legitimacy: as an illegitimate usurper he needed to bind the nobility and the towns to his cause, and he did so through the lavish "Mercedes Enriqueñas", grants that made the great noble houses rich and powerful supporters of his line.',
        'In foreign affairs he maintained the French alliance that had won him the throne, keeping Castile a partner of France against England in the Hundred Years\' War. He defended his crown against the counter-claims of Peter\'s daughters and their foreign husbands, above all John of Gaunt, a threat his son John I would finally have to resolve.'
      ]},
      { title: 'Death', paragraphs: [
        'Henry II died on 29 May 1379 after a ten-year reign, leaving a consolidated dynasty to his son John I. Later tradition suspected he had been poisoned, but the circumstances are uncertain.'
      ]},
      { title: 'Legacy', paragraphs: [
        'Henry II founded the Trastámara dynasty, which ruled Castile until the union with Aragon and produced Isabella I and the Catholic Monarchs. His grants to the nobility reshaped Castilian politics for generations, entrenching an aristocracy that later kings — including his own descendants — struggled to control. He is remembered as both the fratricide who usurped a throne and the founder of Castile\'s most consequential royal house.'
      ]}
    ],
    keyAchievements: [
      { title: 'Founder of the House of Trastámara', description: 'Began the dynasty that would rule Castile and unite it with Aragon.' },
      { title: 'Won the Castilian civil war', description: 'Defeated and killed Peter of Castile at Montiel in 1369.' },
      { title: 'The Mercedes Enriqueñas', description: 'Secured his dynasty by granting vast lands and rights to the nobility.' }
    ],
    timeline: [
      { date: '1334', title: 'Born', description: 'Born at Seville, illegitimate son of Alfonso XI and Leonor de Guzmán.' },
      { date: '1350s–1360s', title: 'Leads the Trastámara cause', description: 'Heads the rebellion of the half-brothers against Peter of Castile, backed by France and Aragon.', links: [per('peter-of-castile', 'Peter of Castile', 'His half-brother and rival')] },
      { date: '1369', title: 'Kills Peter and takes the throne', description: 'Defeats and murders Peter at Montiel, becoming King Henry II and founding the Trastámara dynasty.', links: [CAST] },
      { date: '1370s', title: 'Secures the dynasty with the Mercedes', description: 'Buys noble loyalty through the lavish "Mercedes Enriqueñas" land grants.' },
      { date: '29 May 1379', title: 'Dies', description: 'Dies after a decade\'s reign, leaving the throne to his son John I.', links: [per('john-i-of-castile', 'John I of Castile', 'His son and successor')] }
    ],
    relatedEntries: {
      locations: [ { ...CAST, label: 'The realm he seized and ruled' } ],
      people: [ per('peter-of-castile', 'Peter of Castile', 'His half-brother, whom he killed to take the throne'), per('john-i-of-castile', 'John I of Castile', 'His son and successor') ],
      events: [ { title: 'Hundred Years\' War', type: 'event', slug: 'hundred-years-war', label: 'His French alliance tied Castile to it' } ]
    },
    sources: [ src('Henry II | king of Castile', 'https://www.britannica.com/biography/Henry-II-king-of-Castile'), src('Trastámara dynasty', 'https://www.britannica.com/topic/Trastamara-dynasty') ],
    isRuler: true,
    succession: { office: 'King of Castile and León',
      predecessor: { personSlug: 'peter-of-castile', displayName: 'Peter of Castile', note: 'His legitimate half-brother, whom he defeated and killed at Montiel in 1369.' },
      successor: { personSlug: 'john-i-of-castile', displayName: 'John I of Castile', note: 'His son, the second Trastámara king.' } }
  },

  // ── HENRY III OF CASTILE ──────────────────────────────────────────────────────
  {
    id: 'henry-iii-of-castile', type: 'character', name: 'Henry III of Castile', born: 1379, died: 1406,
    deathAge: 'about 27', causeOfDeath: 'Long illness', restingPlace: 'Toledo Cathedral',
    location: 'Crown of Castile', aliases: ['Henry the Sufferer', 'Enrique III', 'el Doliente', 'Henry the Infirm'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/fe/Henry_III_Rex.jpg',
    summary: 'King of Castile and León (1390–1406) who restored royal authority as a young king, sponsored early Atlantic exploration and an embassy to Timur, and died young of chronic illness.',
    title: 'King of Castile and León', roles: ['King of Castile and León'],
    birth: { date: '4 October 1379', place: { name: 'Burgos' }, note: 'Son of John I of Castile and Eleanor of Aragon.' },
    death: { date: '25 December 1406', place: { name: 'Toledo' }, circumstance: 'Died at Toledo on Christmas Day 1406 after years of chronic ill health, aged only twenty-seven.' },
    quickFacts: { realm: 'Crown of Castile', dynasty: 'House of Trastámara', culture: 'Castilian', knownFor: 'restoring royal authority and sponsoring the Canary expedition and the embassy to Timur' },
    imageInfo: { caption: 'Henry III of Castile, "the Sufferer", in a later Castilian royal image.', creator: 'After Alonso de Cartagena tradition', date: 'Later royal portrait tradition', source: 'Wikimedia Commons', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Henry_III_Rex.jpg', license: 'CC BY-SA 4.0', note: 'A later depiction from the Castilian royal portrait tradition, not a contemporary likeness.' },
    overview: [
      'Henry III of Castile, called "the Sufferer" (el Doliente) for his chronic ill health, was king of Castile and León from 1390 to 1406. He came to the throne as a child of eleven after his father John I died in a riding accident, and his minority was dominated by factional struggle among the great nobles.',
      'On coming of age he vigorously restored royal authority, curbing the aristocracy and reforming the finances. His reign is also remembered for its outward reach: he sponsored the beginning of the Castilian conquest of the Canary Islands and sent the celebrated embassy of Ruy González de Clavijo to the court of Timur. He died young, in 1406, of the illness that gave him his byname.'
    ],
    greatestFeats: ['Restored royal authority against the nobility', 'Sponsored the Canary Islands expedition', 'Sent the embassy of Clavijo to Timur'],
    contentSections: [
      { title: 'Overview', paragraphs: [
        'Henry III of Castile, called "the Sufferer" (el Doliente) for his chronic ill health, was king of Castile and León from 1390 to 1406. He came to the throne as a child of eleven after his father John I died in a riding accident, and his minority was dominated by factional struggle among the great nobles.',
        'On coming of age he vigorously restored royal authority, curbing the aristocracy and reforming the finances. His reign is also remembered for its outward reach: he sponsored the beginning of the Castilian conquest of the Canary Islands and sent the celebrated embassy of Ruy González de Clavijo to the court of Timur. He died young, in 1406, of the illness that gave him his byname.'
      ]},
      { title: 'Birth and early life', paragraphs: [
        'Henry was born in 1379, the son of John I of Castile and Eleanor of Aragon. He was still a child of eleven when his father\'s sudden death in a fall from his horse in 1390 made him king. His minority was a period of dangerous instability, as rival factions of the high nobility fought to control the young king and the regency.',
        'His marriage to Catherine of Lancaster, daughter of John of Gaunt, had been arranged by his father to end the Lancastrian claim to Castile; it united the Trastámara line with the rival claim descended from Peter of Castile, finally securing the dynasty against that threat.'
      ]},
      { title: 'Character and Personality', paragraphs: [
        'Henry III is remembered as a serious and determined ruler whose achievements were won against the constant drag of illness — the "Doliente" of his byname. Castilian tradition presents a king who, on emerging from a turbulent minority, surprised the overmighty nobles by his resolve, reclaiming royal rights and revenues they had seized and restoring the authority of the crown.',
        'That combination of physical frailty and political firmness defines him. He governed through capable officials, took a personal interest in justice and finance, and showed an unusual curiosity about the wider world, sponsoring voyages and embassies that reached from the Atlantic islands to Central Asia. He appears as a conscientious, forceful, and outward-looking king cut short by his health.'
      ]},
      { title: 'As king of Castile', paragraphs: [
        'Once of age, Henry III set about restoring the monarchy after the damage of his minority. He recovered crown lands and revenues alienated to the nobility, reformed the royal finances and administration, and re-established the authority of royal justice, checking the aristocratic power that his great-grandfather Henry II had done so much to build up.',
        'His reign looked outward as well. He sponsored the first stage of the Castilian conquest of the Canary Islands under Jean de Béthencourt, and in 1403–1406 sent Ruy González de Clavijo on a famous embassy to the court of Timur (Tamerlane) at Samarkand — one of the most remarkable long-distance diplomatic ventures of the medieval West.'
      ]},
      { title: 'Death', paragraphs: [
        'Henry III died at Toledo on Christmas Day 1406, worn down by the chronic illness that had shadowed his reign, aged only twenty-seven. He left the throne to his infant son John II, opening another long and troubled royal minority.'
      ]},
      { title: 'Legacy', paragraphs: [
        'Henry III is remembered as one of the more effective medieval Castilian kings, who restored royal authority and stabilised the Trastámara dynasty despite ill health and a difficult minority. His sponsorship of the Canary expedition and the embassy to Timur mark the beginnings of the outward, expansionist Castile that his descendants would carry across the oceans. His early death, however, plunged the kingdom back into the instability of a royal minority under his son John II.'
      ]}
    ],
    keyAchievements: [
      { title: 'Restored royal authority', description: 'Recovered crown lands and revenues and curbed the high nobility after his minority.' },
      { title: 'Sponsored the Canary Islands expedition', description: 'Backed the first stage of the Castilian conquest of the Canaries.' },
      { title: 'The embassy to Timur', description: 'Sent Ruy González de Clavijo to the court of Timur at Samarkand.' }
    ],
    timeline: [
      { date: '4 October 1379', title: 'Born', description: 'Born at Burgos to John I of Castile and Eleanor of Aragon.' },
      { date: '1390', title: 'Becomes king as a child', description: 'Succeeds his father John I at eleven after John\'s fatal riding accident, beginning a turbulent minority.', links: [per('john-i-of-castile', 'John I of Castile', 'His father and predecessor')] },
      { date: 'c. 1393', title: 'Restores royal authority', description: 'On coming of age, recovers crown lands and revenues and curbs the high nobility.', links: [CAST] },
      { date: '1402', title: 'Sponsors the Canary expedition', description: 'Backs the first stage of the Castilian conquest of the Canary Islands.' },
      { date: '1403–1406', title: 'Sends the embassy to Timur', description: 'Dispatches Ruy González de Clavijo on a famous embassy to the court of Timur at Samarkand.' },
      { date: '25 December 1406', title: 'Dies at Toledo', description: 'Dies young of chronic illness, leaving the throne to his infant son John II.', links: [per('john-ii-of-castile', 'John II of Castile', 'His son and successor')] }
    ],
    relatedEntries: {
      locations: [ { ...CAST, label: 'His realm' } ],
      people: [ per('john-i-of-castile', 'John I of Castile', 'His father and predecessor'), per('john-ii-of-castile', 'John II of Castile', 'His son and successor') ],
      events: [ { title: 'Hundred Years\' War', type: 'event', slug: 'hundred-years-war', label: 'His marriage settled the Lancastrian claim to Castile' } ]
    },
    sources: [ src('Henry III | king of Castile', 'https://www.britannica.com/biography/Henry-III-king-of-Castile'), src('Trastámara dynasty', 'https://www.britannica.com/topic/Trastamara-dynasty') ],
    isRuler: true,
    succession: { office: 'King of Castile and León',
      predecessor: { personSlug: 'john-i-of-castile', displayName: 'John I of Castile', note: 'His father, whose defeat at Aljubarrota he inherited along with the throne.' },
      successor: { personSlug: 'john-ii-of-castile', displayName: 'John II of Castile', note: 'His son, who succeeded as an infant in 1406.' } }
  },

  // ── JOHN II OF CASTILE ────────────────────────────────────────────────────────
  {
    id: 'john-ii-of-castile', type: 'character', name: 'John II of Castile', born: 1405, died: 1454,
    deathAge: 'about 49', causeOfDeath: 'Natural causes', restingPlace: 'Cartuja de Miraflores, Burgos',
    location: 'Crown of Castile', aliases: ['Juan II', 'Juan II de Castilla'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Burgos_-_Cartuja_de_Miraflores_-_Tumba_de_Juan_II_de_Castilla.jpg',
    summary: 'King of Castile and León (1406–1454) whose long reign was dominated by his favourite Álvaro de Luna and the turbulent high nobility; father of Isabella I.',
    title: 'King of Castile and León', roles: ['King of Castile and León'],
    birth: { date: '6 March 1405', place: { name: 'Toro' }, note: 'Son of Henry III of Castile; succeeded as an infant.' },
    death: { date: '20 July 1454', place: { name: 'Valladolid' }, circumstance: 'Died in 1454 after a reign of nearly fifty years, shortly after consenting to the execution of his own favourite, Álvaro de Luna.' },
    quickFacts: { realm: 'Crown of Castile', dynasty: 'House of Trastámara', culture: 'Castilian', knownFor: 'his long reign under the favourite Álvaro de Luna, and as the father of Isabella I' },
    imageInfo: { caption: 'The alabaster tomb effigy of John II of Castile in the Cartuja de Miraflores, Burgos, carved by Gil de Siloé.', creator: 'Gil de Siloé (tomb); photo by Ecelan', date: 'Late 15th-century tomb (photographed 2007)', source: 'Wikimedia Commons', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Burgos_-_Cartuja_de_Miraflores_-_Tumba_de_Juan_II_de_Castilla.jpg', license: 'CC BY-SA 3.0', note: 'A later funerary effigy, not a portrait from life.' },
    overview: [
      'John II of Castile was king of Castile and León from 1406 to 1454, one of the longest reigns in Castilian history, though he ruled in his own right for little of it. He succeeded his father Henry III as an infant, and his childhood was governed by a long regency under his mother Catherine of Lancaster and his uncle Ferdinand of Antequera.',
      'His reign is remembered above all for his dependence on his favourite, the constable Álvaro de Luna, who effectively governed Castile for decades amid constant conflict with the great nobles, before John was pressured into having him executed in 1453. A cultivated patron of poetry, John II left the throne in 1454 to his son Henry IV — and was also the father, by his second marriage, of the future Isabella I.'
    ],
    greatestFeats: ['King of Castile for nearly fifty years', 'Patron of Castilian letters', 'Father of Isabella I of Castile'],
    contentSections: [
      { title: 'Overview', paragraphs: [
        'John II of Castile was king of Castile and León from 1406 to 1454, one of the longest reigns in Castilian history, though he ruled in his own right for little of it. He succeeded his father Henry III as an infant, and his childhood was governed by a long regency under his mother Catherine of Lancaster and his uncle Ferdinand of Antequera.',
        'His reign is remembered above all for his dependence on his favourite, the constable Álvaro de Luna, who effectively governed Castile for decades amid constant conflict with the great nobles, before John was pressured into having him executed in 1453. A cultivated patron of poetry, John II left the throne in 1454 to his son Henry IV — and was also the father, by his second marriage, of the future Isabella I.'
      ]},
      { title: 'Birth and early life', paragraphs: [
        'John was born in 1405 and became king in 1406 at little over a year old, on the death of his father Henry III. His long minority was managed by a regency shared between his mother, Catherine of Lancaster, and his uncle Ferdinand, who left to become king of Aragon in 1412 — an arrangement that entangled Castilian and Aragonese politics through the ambitious "Infantes of Aragon", John\'s own cousins, who would trouble his whole reign.'
      ]},
      { title: 'Character and Personality', paragraphs: [
        'John II is remembered as a cultivated but politically weak king, more interested in letters, music, and the pleasures of the court than in the hard work of rule. His reign became a byword for government by favourite: he handed effective power to Álvaro de Luna and clung to him through decades of noble revolt, unable or unwilling to govern without him.',
        'Contemporary and later judgement is largely unflattering, presenting a ruler dominated in turn by his favourite, his cousins the Infantes of Aragon, and finally his second wife. Yet his court was a genuine centre of Castilian culture, and his own patronage of poetry and learning was real. He appears as an amiable, refined, and irresolute king whose long reign was run by stronger personalities around him — and whose final, reluctant consent to Álvaro de Luna\'s execution in 1453 is remembered as the tragic act of a man destroying the servant he could not do without.'
      ]},
      { title: 'As king of Castile', paragraphs: [
        'For most of his adult reign John II left the government of Castile to Álvaro de Luna, whom he made constable and who dominated the kingdom against the recurring revolts of the high nobility and the intrigues of the Infantes of Aragon. Luna\'s Castile won a notable victory over Granada at the Battle of La Higueruela in 1431, but his power rested entirely on the king\'s favour.',
        'That favour finally failed. Pressured by the nobility and by his second wife, Isabella of Portugal, John consented to Álvaro de Luna\'s arrest and execution in 1453. He survived his favourite by barely a year, dying in 1454 and leaving to his son Henry IV a kingdom exhausted by decades of aristocratic conflict.'
      ]},
      { title: 'Death', paragraphs: [
        'John II died at Valladolid on 20 July 1454, a little over a year after the execution of Álvaro de Luna, and was buried in the magnificent tomb his son commissioned at the Cartuja de Miraflores. His son Henry IV succeeded him.'
      ]},
      { title: 'Legacy', paragraphs: [
        'John II\'s long reign is remembered as an age of aristocratic turbulence and government by favourite, which left the Castilian monarchy weakened. Its most consequential legacy, however, lay in his children: his son Henry IV, whose disputed succession would convulse Castile, and his daughter by his second marriage, the future Isabella I, whose union with Ferdinand of Aragon would create a unified Spain. John II thus stands, for all his weakness, at the immediate root of the Catholic Monarchs.'
      ]}
    ],
    keyAchievements: [
      { title: 'King of Castile, 1406–1454', description: 'One of the longest reigns in Castilian history, mostly under the favourite Álvaro de Luna.' },
      { title: 'Victory at La Higueruela, 1431', description: 'His constable Álvaro de Luna defeated Granada in a celebrated battle.' },
      { title: 'Father of Isabella I', description: 'By his second marriage, the father of the future Queen Isabella I of Castile.' }
    ],
    timeline: [
      { date: '6 March 1405', title: 'Born', description: 'Born at Toro, son of Henry III of Castile.' },
      { date: '1406', title: 'Becomes king as an infant', description: 'Succeeds his father Henry III at little over a year old, beginning a long regency.', links: [per('henry-iii-of-castile', 'Henry III of Castile', 'His father and predecessor')] },
      { date: 'c. 1420s', title: 'Rule by Álvaro de Luna', description: 'Hands effective government to his favourite, the constable Álvaro de Luna, amid constant noble revolt.', links: [CAST] },
      { date: '1431', title: 'Victory at La Higueruela', description: 'Álvaro de Luna defeats Granada in a celebrated battle.' },
      { date: '1453', title: 'Executes Álvaro de Luna', description: 'Pressured by the nobility and his second wife, consents to his favourite\'s execution.' },
      { date: '20 July 1454', title: 'Dies at Valladolid', description: 'Dies a year after Luna, leaving the throne to his son Henry IV; he is also father of the future Isabella I.', links: [per('isabella-of-castile', 'Isabella I of Castile', 'His daughter and, later, queen')] }
    ],
    relatedEntries: {
      locations: [ { ...CAST, label: 'His realm' } ],
      people: [ per('henry-iii-of-castile', 'Henry III of Castile', 'His father and predecessor'), per('isabella-of-castile', 'Isabella I of Castile', 'His daughter, the future queen') ],
      events: [ { title: 'Hundred Years\' War', type: 'event', slug: 'hundred-years-war', label: 'The wider European conflict of his age' } ]
    },
    sources: [ src('John II | king of Castile', 'https://www.britannica.com/biography/John-II-king-of-Castile'), src('Álvaro de Luna | Spanish statesman', 'https://www.britannica.com/biography/Alvaro-de-Luna') ],
    isRuler: true,
    succession: { office: 'King of Castile and León',
      predecessor: { personSlug: 'henry-iii-of-castile', displayName: 'Henry III of Castile', note: 'His father, whom he succeeded as an infant in 1406.' },
      successor: { status: 'outside-scope', displayName: 'Henry IV of Castile', note: 'His son, who began ruling in 1454 — after IronCodex\'s 1453 medieval cutoff — and is not covered as a medieval ruler. (His half-sister Isabella I is in the archive as a distinct, later-medieval figure.)' } }
  }
]

const existing = new Set(data.characters.map(c => c.id))
let added = 0, replaced = 0
for (const p of people) {
  const i = data.characters.findIndex(c => c.id === p.id)
  if (i >= 0) { data.characters[i] = p; replaced++ } else { data.characters.push(p); added++ }
}

// Link John I of Castile's predecessor/successor to the new articles
const jic = data.characters.find(c => c.id === 'john-i-of-castile')
if (jic?.succession) {
  jic.succession.predecessor = { personSlug: 'henry-ii-of-castile', displayName: 'Henry II of Castile', note: 'His father, founder of the Trastámara dynasty, who took the throne by killing Peter of Castile in 1369.' }
  jic.succession.successor = { personSlug: 'henry-iii-of-castile', displayName: 'Henry III of Castile', note: 'His son, who succeeded as a child in 1390 and whose marriage to Catherine of Lancaster united the rival claims to Castile.' }
}

fs.writeFileSync(dataPath, JSON.stringify(data, null, 2))
console.log(`Castilian kings added: ${added}, replaced: ${replaced}. Total characters: ${data.characters.length}`)
console.log('John I of Castile relinked: predecessor -> henry-ii-of-castile, successor -> henry-iii-of-castile')
