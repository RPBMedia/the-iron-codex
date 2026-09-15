/**
 * Bridges the century-long gap in the Danish royal line between the two existing
 * anchors Sweyn II Estridsson and Valdemar I the Great: the five sons of Sweyn II
 * (Harald III, Cnut IV the Holy, Oluf I, Eric I, Niels) and the kings of the
 * ensuing civil wars (Eric II, Eric III, Sweyn III Grathe). Closes both open
 * endpoints so the line runs continuously Sweyn II -> ... -> Valdemar I -> ... ->
 * Christopher I. Canute V (co-rival of the three-kings war) is handled in notes.
 * Idempotent.
 */
import fs from 'node:fs'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dataPath = path.join(__dirname, '../server/data/history.json')
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'))

const DEN = { title: 'Kingdom of Denmark', type: 'location', slug: 'kingdom-of-denmark' }
const ENG = { title: 'Kingdom of England', type: 'location', slug: 'kingdom-of-england' }
const per = (slug, title, label) => ({ title, type: 'person', slug, label })
const src = (title, url) => ({ title, author: 'Encyclopaedia Britannica', type: 'encyclopedia', url })

const people = [
  // ── HARALD III (HARALD HEN) ───────────────────────────────────────────────────
  {
    id: 'harald-iii-of-denmark', type: 'character', name: 'Harald III of Denmark', born: 1041, died: 1080,
    deathAge: 'about 39', causeOfDeath: 'Natural causes', restingPlace: 'Dalby, Scania',
    location: 'Kingdom of Denmark', aliases: ['Harald Hen', 'Harald the Soft', 'Harald Whetstone'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Harald_Hen_m%C3%B8nt_a.jpg',
    summary: 'King of Denmark (1076–1080), eldest surviving son of Sweyn II, a mild and popular king who confirmed the rights of the common people and reformed the coinage.',
    title: 'King of Denmark', roles: ['King of Denmark'],
    birth: { date: 'c. 1041', place: { name: 'Denmark' }, note: 'Eldest surviving son of Sweyn II Estridsson.' },
    death: { date: '17 April 1080', place: { name: 'Denmark' }, circumstance: 'Died in 1080 after a short and peaceful reign; succeeded by his more forceful brother Canute.' },
    quickFacts: { realm: 'Kingdom of Denmark', dynasty: 'House of Estridsen', culture: 'Danish', knownFor: 'his mildness and his laws favouring the common freemen' },
    imageInfo: { caption: 'A coin struck under Harald III (Harald Hen) of Denmark.', creator: 'Coin drawing by Peter Christian Hauberg', date: 'Coin of 1076–1080 (later drawing)', source: 'Wikimedia Commons', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Harald_Hen_mønt_a.jpg', license: 'Public domain', note: 'A study of the king\'s coinage; no portrait of him survives.' },
    overview: [
      'Harald III, known as Harald Hen — "the Soft" or "the Whetstone" — was king of Denmark from 1076 to 1080, the first of the five sons of Sweyn II Estridsson to reign in turn. Chosen at the assembly over his more warlike brother Canute, he proved a mild and conciliatory ruler.',
      'His short reign was remembered kindly by the common people, whose rights and lands he confirmed and whose burdens he eased; he reformed the coinage and upheld the popular laws. To the ambitious, however, his gentleness looked like weakness, and on his death the crown passed to the very brother the magnates had earlier passed over.'
    ],
    greatestFeats: ['King of Denmark', 'Confirmed the rights of the common freemen', 'Reformed the Danish coinage'],
    contentSections: [
      { title: 'Overview', paragraphs: [
        'Harald III, known as Harald Hen — "the Soft" or "the Whetstone" — was king of Denmark from 1076 to 1080, the first of the five sons of Sweyn II Estridsson to reign in turn. Chosen at the assembly over his more warlike brother Canute, he proved a mild and conciliatory ruler.',
        'His short reign was remembered kindly by the common people, whose rights and lands he confirmed and whose burdens he eased; he reformed the coinage and upheld the popular laws. To the ambitious, however, his gentleness looked like weakness, and on his death the crown passed to the very brother the magnates had earlier passed over.'
      ]},
      { title: 'Birth and early life', paragraphs: [
        'Harald was born about 1041, the eldest of the many sons of Sweyn II Estridsson, the king who had restored the native Danish royal line after the fall of Cnut the Great\'s North Sea empire. Sweyn left numerous sons, and it was among these brothers that the crown would pass for the next half-century.',
        'On Sweyn\'s death in 1076 the succession was contested between Harald and his forceful younger brother Canute; the assembly chose the milder Harald.'
      ]},
      { title: 'Character and Personality', paragraphs: [
        'Harald\'s byname "Hen" — a soft whetstone — captured how contemporaries saw him: gentle, mild, and accommodating where his brother Canute was hard and driving. The sources, several written under that same brother\'s cult, tend to damn Harald with faint praise, casting his mildness as weakness and irresolution.',
        'A fairer reading finds in him a genuinely popular king who preferred concord to coercion. He confirmed the freemen in their rights and commons, refused to press the crown\'s claims harshly, and reformed the coinage in the people\'s favour. If he lacked the grandeur and menace of Canute, he governed a peaceful and contented realm — a style of kingship the ordinary Dane had reason to prefer.'
      ]},
      { title: 'A mild reign', paragraphs: [
        'Harald\'s four years on the throne were quiet and, by the standards of the age, benign. He is credited with confirming and protecting the rights of the common freemen — their access to the commons, forests, and shores — against encroachment, and with a reform of the coinage that steadied its value. Later Danes looked back on "Harald\'s laws" as a golden standard of good, popular government.',
        'He made no great wars and pursued no grand ambitions abroad, a restraint that stood in sharp contrast to the plans his successor would soon pursue against England.'
      ]},
      { title: 'Death', paragraphs: [
        'Harald III died on 17 April 1080 after a reign of four years, and was buried at Dalby in Scania. The crown passed to his brother Canute, whose very different temperament would carry Denmark toward crisis.'
      ]},
      { title: 'Legacy', paragraphs: [
        'Harald Hen is remembered as the mild king of the sons of Sweyn — the ruler whose confirmation of popular rights left a fond memory of good governance, and whose gentleness the chroniclers of his sainted brother used as a foil. His brief, peaceful reign opened the era of the Estridsen brothers that would run, through saint and famine and civil strife, down to the founding of the Valdemar dynasty.'
      ]}
    ],
    keyAchievements: [
      { title: 'King of Denmark, 1076–1080', description: 'First of the five sons of Sweyn II to hold the throne.' },
      { title: 'Protected the common freemen', description: 'Confirmed popular rights and eased burdens, remembered in "Harald\'s laws".' },
      { title: 'Reformed the coinage', description: 'Steadied the Danish currency in the people\'s favour.' }
    ],
    timeline: [
      { date: 'c. 1041', title: 'Born', description: 'Born the eldest surviving son of Sweyn II Estridsson.' },
      { date: '1076', title: 'Elected King of Denmark', description: 'Chosen at the assembly over his more warlike brother Canute.', links: [per('sweyn-ii-estridsson', 'Sweyn II Estridsson', 'His father and predecessor'), DEN] },
      { date: 'c. 1077', title: 'Confirms popular rights', description: 'Upholds the rights of the common freemen and eases their burdens.' },
      { date: 'c. 1078', title: 'Reforms the coinage', description: 'Steadies the value of the Danish currency.' },
      { date: '17 April 1080', title: 'Dies', description: 'Dies after a peaceful reign; the crown passes to his brother Canute.', links: [per('cnut-iv-of-denmark', 'Cnut IV of Denmark', 'His brother and successor')] }
    ],
    relatedEntries: {
      locations: [ { ...DEN, label: 'His kingdom' } ],
      people: [ per('sweyn-ii-estridsson', 'Sweyn II Estridsson', 'His father and predecessor'), per('cnut-iv-of-denmark', 'Cnut IV of Denmark', 'His brother and successor') ],
      events: []
    },
    sources: [ src('Denmark — history', 'https://www.britannica.com/place/Denmark/History'), src('Sweyn II Estridsen | king of Denmark', 'https://www.britannica.com/place/Denmark') ],
    isRuler: true,
    succession: { office: 'King of Denmark',
      predecessor: { personSlug: 'sweyn-ii-estridsson', displayName: 'Sweyn II Estridsson', note: 'His father, who restored the native Danish royal line; Harald was the first of his sons to reign.' },
      successor: { personSlug: 'cnut-iv-of-denmark', displayName: 'Cnut IV of Denmark', note: 'His forceful brother, the future saint, whom the magnates had earlier passed over for Harald.' } }
  },

  // ── CNUT IV THE HOLY (ST CANUTE) ──────────────────────────────────────────────
  {
    id: 'cnut-iv-of-denmark', type: 'character', name: 'Cnut IV of Denmark', born: 1042, died: 1086,
    deathAge: 'about 44', causeOfDeath: 'Murdered in a revolt', restingPlace: 'St Canute\'s Cathedral, Odense',
    location: 'Kingdom of Denmark', aliases: ['Canute IV', 'Canute the Holy', 'Saint Canute', 'Knud den Hellige'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/f2/Christian-albrecht-von-benzon%2C_the_death_of_Canute_the_Holy.jpg',
    summary: 'King of Denmark (1080–1086) who planned a great invasion of England, strengthened crown and Church, and was murdered at the altar in Odense — becoming Denmark\'s first saint and patron.',
    title: 'King of Denmark', roles: ['King of Denmark'],
    birth: { date: 'c. 1042', place: { name: 'Denmark' }, note: 'A son of Sweyn II Estridsson; brother of Harald III.' },
    death: { date: '10 July 1086', place: { name: 'Odense' }, circumstance: 'Cut down before the altar of St Alban\'s Church at Odense during a rebellion, with his brother Benedict.' },
    quickFacts: { realm: 'Kingdom of Denmark', dynasty: 'House of Estridsen', culture: 'Danish', knownFor: 'his planned invasion of England, his murder at the altar, and his sainthood' },
    imageInfo: { caption: 'The death of Canute the Holy at the altar in Odense, painted by Christian Albrecht von Benzon (1843).', creator: 'Christian Albrecht von Benzon', date: '1843', source: 'Wikimedia Commons', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Christian-albrecht-von-benzon,_the_death_of_Canute_the_Holy.jpg', license: 'Public domain', note: 'A nineteenth-century history painting of the king\'s martyrdom, not a contemporary image.' },
    overview: [
      'Cnut IV, remembered as Canute the Holy, was king of Denmark from 1080 to 1086 and became the country\'s first saint. A forceful and ambitious son of Sweyn II, he sought to raise both the power of the crown and the standing of the Church, and famously planned a great invasion of England to make good the Danish royal claim inherited from Cnut the Great against William the Conqueror.',
      'The English expedition of 1085 gathered a huge fleet but broke up without sailing, and Canute\'s demands — heavy taxes, fines on those who had failed to muster, and tithes for the Church — provoked a revolt in Jutland. He was pursued to Odense and cut down before the altar of St Alban\'s Church in 1086. Miracles were soon reported at his tomb, and he was canonised in 1101 as Saint Canute, patron of Denmark.'
    ],
    greatestFeats: ['King of Denmark', 'Planned a great invasion of England', 'Became Denmark\'s first saint'],
    contentSections: [
      { title: 'Overview', paragraphs: [
        'Cnut IV, remembered as Canute the Holy, was king of Denmark from 1080 to 1086 and became the country\'s first saint. A forceful and ambitious son of Sweyn II, he sought to raise both the power of the crown and the standing of the Church, and famously planned a great invasion of England to make good the Danish royal claim inherited from Cnut the Great against William the Conqueror.',
        'The English expedition of 1085 gathered a huge fleet but broke up without sailing, and Canute\'s demands — heavy taxes, fines on those who had failed to muster, and tithes for the Church — provoked a revolt in Jutland. He was pursued to Odense and cut down before the altar of St Alban\'s Church in 1086. Miracles were soon reported at his tomb, and he was canonised in 1101 as Saint Canute, patron of Denmark.'
      ]},
      { title: 'Birth and early life', paragraphs: [
        'Canute was born about 1042, one of the sons of Sweyn II Estridsson. Forceful, pious, and ambitious, he had been a candidate for the throne in 1076, when the assembly preferred his milder brother Harald. He spent Harald\'s reign as a leading warrior of the realm, raiding in the Baltic, and on Harald\'s death in 1080 he was at last chosen king.',
        'He came to the throne with grand designs: to strengthen the monarchy, to advance the Church, and to press the old Danish claim to England.'
      ]},
      { title: 'Character and Personality', paragraphs: [
        'Canute was everything his brother Harald was not: hard-driving, imperious, and consumed by ambition for the crown and the Church alike. The sources — shaped by the cult that grew around him — present a king of fierce piety and iron will, a lawgiver and a champion of the clergy who exalted royal authority to a new and, to many Danes, alarming pitch.',
        'That combination of holiness and heavy-handedness is the key to both his fall and his sainthood. He demanded tithes and taxes with a rigour that outraged the freemen, and enforced the crown\'s rights without mercy; yet his devotion, his defence of the Church, and above all the manner of his death at the altar allowed churchmen to remember the harsh king as a martyr. He remains a paradox — the overbearing ruler whom Denmark came to venerate as a saint.'
      ]},
      { title: 'The English expedition and the revolt', paragraphs: [
        'Canute\'s great project was the conquest of England. As a descendant of the royal house of Cnut the Great, he claimed the English throne, and in 1085 he assembled a vast fleet — with Norwegian and Flemish allies — to wrest it from William the Conqueror. But the host was kept waiting through the summer while Canute dealt with affairs in the south, and the levy, restless and unpaid, dispersed without ever sailing.',
        'The reckoning fell on the king. Canute imposed heavy fines on those who had abandoned the muster and pressed his demands for taxes and Church tithes, and the freemen of Vendsyssel in northern Jutland rose in revolt. Canute fled south to the island of Funen.'
      ]},
      { title: 'Martyrdom', paragraphs: [
        'The rebels pursued Canute to Odense, where he took refuge in the wooden church of St Alban. There, on 10 July 1086, he was cut down before the altar together with his brother Benedict and many of his men, struck by a lance through a window as he knelt in prayer, according to the tradition.',
        'The years after his death brought famine, which many read as punishment for the killing of the king, and reports of miracles at his grave. In 1101 he was canonised — Denmark\'s first saint — and Odense became the centre of his cult.'
      ]},
      { title: 'Legacy', paragraphs: [
        'Canute IV is remembered as the last Scandinavian king to plan seriously the conquest of England, and as the martyr-king whose sainthood gave the young Danish monarchy a sacred patron of its own. His drive to exalt crown and Church, though it cost him his life, pointed the way the Danish monarchy would later travel, and his cult at Odense bound the dynasty of the Estridsens to the holiness of one of their own. He is the patron saint of Denmark.'
      ]}
    ],
    keyAchievements: [
      { title: 'King of Denmark, 1080–1086', description: 'Sought to strengthen both the crown and the Church.' },
      { title: 'Planned the invasion of England, 1085', description: 'Assembled a great fleet to claim the English throne from William the Conqueror.' },
      { title: 'Denmark\'s first saint', description: 'Canonised in 1101 as Saint Canute, patron of Denmark.' }
    ],
    timeline: [
      { date: 'c. 1042', title: 'Born', description: 'Born a son of Sweyn II Estridsson; passed over for the throne in 1076.' },
      { date: '1080', title: 'Becomes King of Denmark', description: 'Chosen king on the death of his brother Harald III.', links: [per('harald-iii-of-denmark', 'Harald III of Denmark', 'His brother and predecessor'), DEN] },
      { date: '1085', title: 'Plans the invasion of England', description: 'Assembles a great fleet against William the Conqueror, which disperses without sailing.', links: [{ ...ENG, label: 'His intended conquest' }, per('william-the-conqueror', 'William the Conqueror', 'His intended rival for England')] },
      { date: '10 July 1086', title: 'Murdered at the altar', description: 'Cut down before the altar of St Alban\'s at Odense during a Jutish revolt.' },
      { date: '1101', title: 'Canonised as Saint Canute', description: 'Declared a saint after reports of miracles; becomes patron of Denmark.', links: [per('oluf-i-of-denmark', 'Oluf I of Denmark', 'His brother, who had succeeded him')] }
    ],
    relatedEntries: {
      locations: [ { ...DEN, label: 'His kingdom' }, { ...ENG, label: 'The realm he sought to conquer' } ],
      people: [ per('harald-iii-of-denmark', 'Harald III of Denmark', 'His brother and predecessor'), per('oluf-i-of-denmark', 'Oluf I of Denmark', 'His brother and successor'), per('william-the-conqueror', 'William the Conqueror', 'The rival he planned to attack in England') ],
      events: []
    },
    sources: [ src('Canute IV | king of Denmark, saint', 'https://www.britannica.com/biography/Canute-IV'), src('Denmark — history', 'https://www.britannica.com/place/Denmark/History') ],
    isRuler: true,
    succession: { office: 'King of Denmark',
      predecessor: { personSlug: 'harald-iii-of-denmark', displayName: 'Harald III of Denmark', note: 'His milder brother, on whose death he finally gained the throne he had been denied in 1076.' },
      successor: { personSlug: 'oluf-i-of-denmark', displayName: 'Oluf I of Denmark', note: 'His brother, released from captivity in Flanders to take the throne after Canute\'s murder.' } }
  },

  // ── OLUF I (OLUF HUNGER) ──────────────────────────────────────────────────────
  {
    id: 'oluf-i-of-denmark', type: 'character', name: 'Oluf I of Denmark', born: 1050, died: 1095,
    deathAge: 'about 45', causeOfDeath: 'Natural causes, amid famine', restingPlace: 'Denmark',
    location: 'Kingdom of Denmark', aliases: ['Oluf Hunger', 'Olaf I', 'Oluf the Hungry'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/98/Coin_of_king_Olaf_I_of_Denmark_Olof_hunger.jpg',
    summary: 'King of Denmark (1086–1095), a son of Sweyn II whose reign was cursed by years of famine — blamed on him as divine punishment for the murder of his sainted brother Canute.',
    title: 'King of Denmark', roles: ['King of Denmark'],
    birth: { date: 'c. 1050', place: { name: 'Denmark' }, note: 'A son of Sweyn II Estridsson; a hostage in Flanders at the time of Canute\'s murder.' },
    death: { date: '18 August 1095', place: { name: 'Denmark' }, circumstance: 'Died in 1095 after a reign shadowed by repeated famine, which was widely blamed on him.' },
    quickFacts: { realm: 'Kingdom of Denmark', dynasty: 'House of Estridsen', culture: 'Danish', knownFor: 'the famines of his reign, which gave him the byname "Hunger"' },
    imageInfo: { caption: 'A coin of King Oluf I (Oluf Hunger) of Denmark.', creator: 'Royal Danish mint', date: 'Coin of 1086–1095', source: 'Wikimedia Commons', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Coin_of_king_Olaf_I_of_Denmark_Olof_hunger.jpg', license: 'CC BY-SA 3.0', note: 'A photograph of the king\'s coinage; no portrait of him survives.' },
    overview: [
      'Oluf I, remembered as Oluf Hunger, was king of Denmark from 1086 to 1095. A son of Sweyn II, he had been given as a hostage to Flanders during the revolt against his brother Canute, and was released to take the throne after Canute\'s murder in 1086.',
      'His reign was blighted by repeated years of failed harvests and famine — a calamity that popular and clerical opinion, devoted to the memory of his martyred brother, interpreted as divine punishment on the land for the killing of a saint, and fixed on the king himself in the cruel byname "Hunger". He died in 1095, and the crown passed to yet another brother, Eric.'
    ],
    greatestFeats: ['King of Denmark'],
    contentSections: [
      { title: 'Overview', paragraphs: [
        'Oluf I, remembered as Oluf Hunger, was king of Denmark from 1086 to 1095. A son of Sweyn II, he had been given as a hostage to Flanders during the revolt against his brother Canute, and was released to take the throne after Canute\'s murder in 1086.',
        'His reign was blighted by repeated years of failed harvests and famine — a calamity that popular and clerical opinion, devoted to the memory of his martyred brother, interpreted as divine punishment on the land for the killing of a saint, and fixed on the king himself in the cruel byname "Hunger". He died in 1095, and the crown passed to yet another brother, Eric.'
      ]},
      { title: 'Birth and early life', paragraphs: [
        'Oluf was born about 1050, one of the sons of Sweyn II Estridsson. During the rising that overthrew his brother Canute, Oluf — suspected of sympathy with the rebels — was sent as a hostage to his brother-in-law, the Count of Flanders. He was still in Flemish keeping when Canute was killed at Odense in 1086.',
        'Released in exchange for another royal brother, Oluf returned to Denmark and was chosen king.'
      ]},
      { title: 'Character and Personality', paragraphs: [
        'Oluf is among the most shadowy of the sons of Sweyn, remembered less for anything he did than for what befell his kingdom. The sources, steeped in the cult of his sainted brother, are relentlessly hostile: they cast the famines of his reign as heaven\'s verdict on him and turned even his name into an accusation.',
        'Stripped of that bias, little of his character can be recovered. He appears as an unlucky king who inherited a realm poisoned by the murder of a saint and the failure of the harvests, and who could do nothing to lift either curse. Whether cruel, weak, or merely unfortunate, he was remembered by a hostile tradition as the king in whose time Denmark starved — a reputation more the product of his brother\'s sanctity than of any recorded deed of his own.'
      ]},
      { title: 'A reign of famine', paragraphs: [
        'Oluf\'s nine years on the throne coincided with a run of disastrous harvests and severe famine across Denmark. In an age that read natural calamity as divine judgement, and with the cult of the martyred Canute rapidly taking hold, the suffering was laid at the door of the king who had succeeded him — as though the land itself rejected the brother of the man who had killed a saint.',
        'The byname "Hunger" was the result, an epithet of reproach fixed on Oluf by a tradition determined to contrast the barren years of his reign with the sanctity of his predecessor. Of his actual government, the hostile record preserves almost nothing.'
      ]},
      { title: 'Death', paragraphs: [
        'Oluf I died on 18 August 1095, his reign closing as it had run, under the shadow of dearth. He was succeeded by his brother Eric, whose reign the sources present as the return of plenty and good fortune.'
      ]},
      { title: 'Legacy', paragraphs: [
        'Oluf Hunger is remembered chiefly as the counter-image to his sainted brother: the unlucky, reproached king whose famine-struck reign the cult of Saint Canute used to point its moral. His story shows how quickly and how powerfully that cult reshaped Danish memory of the Estridsen brothers — and how a king could be condemned less for his acts than for the holiness of the man he followed.'
      ]}
    ],
    keyAchievements: [
      { title: 'King of Denmark, 1086–1095', description: 'Took the throne after the murder of his brother Canute.' },
      { title: 'Released from Flemish hostage-keeping', description: 'Returned from captivity in Flanders to be chosen king.' }
    ],
    timeline: [
      { date: 'c. 1050', title: 'Born', description: 'Born a son of Sweyn II Estridsson.' },
      { date: 'c. 1085', title: 'Held hostage in Flanders', description: 'Sent as a hostage to the Count of Flanders during the revolt against his brother Canute.' },
      { date: '1086', title: 'Becomes King of Denmark', description: 'Released and chosen king after Canute\'s murder.', links: [per('cnut-iv-of-denmark', 'Cnut IV of Denmark', 'His murdered brother and predecessor'), DEN] },
      { date: 'c. 1090', title: 'Years of famine', description: 'Repeated failed harvests devastate Denmark and are blamed on the king.' },
      { date: '18 August 1095', title: 'Dies', description: 'Dies amid the dearth of his reign; his brother Eric succeeds.', links: [per('eric-i-of-denmark', 'Eric I of Denmark', 'His brother and successor')] }
    ],
    relatedEntries: {
      locations: [ { ...DEN, label: 'His kingdom' } ],
      people: [ per('cnut-iv-of-denmark', 'Cnut IV of Denmark', 'His martyred brother and predecessor'), per('eric-i-of-denmark', 'Eric I of Denmark', 'His brother and successor') ],
      events: []
    },
    sources: [ src('Denmark — history', 'https://www.britannica.com/place/Denmark/History'), src('Canute IV | king of Denmark, saint', 'https://www.britannica.com/biography/Canute-IV') ],
    isRuler: true,
    succession: { office: 'King of Denmark',
      predecessor: { personSlug: 'cnut-iv-of-denmark', displayName: 'Cnut IV of Denmark', note: 'His brother, the martyred saint, after whose murder Oluf was released from Flanders to reign.' },
      successor: { personSlug: 'eric-i-of-denmark', displayName: 'Eric I of Denmark', note: 'His brother "the Evergood", whose reign was remembered as the return of plenty.' } }
  },

  // ── ERIC I (ERIC EVERGOOD) ────────────────────────────────────────────────────
  {
    id: 'eric-i-of-denmark', type: 'character', name: 'Eric I of Denmark', born: 1056, died: 1103,
    deathAge: 'about 47', causeOfDeath: 'Illness, on pilgrimage to the Holy Land', restingPlace: 'Paphos, Cyprus',
    location: 'Kingdom of Denmark', aliases: ['Eric Evergood', 'Erik Ejegod', 'Eric I the Good'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/56/Erik_1._Ejegods_coin.jpg',
    summary: 'King of Denmark (1095–1103), a popular and generous son of Sweyn II who won Scandinavia its own archbishopric at Lund and died on pilgrimage to the Holy Land.',
    title: 'King of Denmark', roles: ['King of Denmark'],
    birth: { date: 'c. 1056', place: { name: 'Denmark' }, note: 'A son of Sweyn II Estridsson; father of Canute Lavard.' },
    death: { date: '10 July 1103', place: { name: 'Paphos, Cyprus' }, circumstance: 'Died on Cyprus in 1103 while on pilgrimage to Jerusalem.' },
    quickFacts: { realm: 'Kingdom of Denmark', dynasty: 'House of Estridsen', culture: 'Danish', knownFor: 'securing the archbishopric of Lund and dying on pilgrimage to Jerusalem' },
    imageInfo: { caption: 'A coin of King Eric I (Eric Evergood) of Denmark.', creator: 'Royal Danish mint', date: 'Coin of 1095–1103', source: 'Wikimedia Commons', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Erik_1._Ejegods_coin.jpg', license: 'Public domain', note: 'A study of the king\'s coinage; no portrait of him survives.' },
    overview: [
      'Eric I, called Evergood (Ejegod), was king of Denmark from 1095 to 1103, and one of the most admired of the sons of Sweyn II. Generous, genial, and physically imposing, his reign was remembered as a return of good fortune after the famines of his brother Oluf.',
      'His greatest achievement was diplomatic and ecclesiastical: he persuaded the pope to grant Scandinavia its own archbishopric, established at Lund in 1103–1104, freeing the northern Church from the German see of Hamburg-Bremen. A devout man, he also promoted the canonisation of his martyred brother Canute, and he died in 1103 on pilgrimage to the Holy Land, at Paphos on Cyprus.'
    ],
    greatestFeats: ['King of Denmark', 'Won the archbishopric of Lund for Scandinavia', 'Died on pilgrimage to Jerusalem'],
    contentSections: [
      { title: 'Overview', paragraphs: [
        'Eric I, called Evergood (Ejegod), was king of Denmark from 1095 to 1103, and one of the most admired of the sons of Sweyn II. Generous, genial, and physically imposing, his reign was remembered as a return of good fortune after the famines of his brother Oluf.',
        'His greatest achievement was diplomatic and ecclesiastical: he persuaded the pope to grant Scandinavia its own archbishopric, established at Lund in 1103–1104, freeing the northern Church from the German see of Hamburg-Bremen. A devout man, he also promoted the canonisation of his martyred brother Canute, and he died in 1103 on pilgrimage to the Holy Land, at Paphos on Cyprus.'
      ]},
      { title: 'Birth and early life', paragraphs: [
        'Eric was born about 1056, another of the many sons of Sweyn II Estridsson. He came to the throne in 1095 on the death of his brother Oluf, the fourth of the brothers to reign, and brought to it a reputation for generosity, eloquence, and great physical strength that made him widely popular.',
        'His marriage to Bodil produced a son, Canute Lavard, whose murder a generation later would help plunge Denmark into civil war.'
      ]},
      { title: 'Character and Personality', paragraphs: [
        'Eric\'s byname "Evergood" reflects the warmth of his memory in the sources: a big, handsome, open-handed king, eloquent and companionable, whose accession felt like sunshine after the dearth of Oluf\'s years. He is the golden figure among the sons of Sweyn, praised for generosity and good fortune alike.',
        'Beneath the geniality was a genuinely able ruler and a sincere Christian. He worked patiently and successfully at the great diplomatic task of winning a Scandinavian archbishopric, took a personal role in promoting his brother\'s sainthood, and crowned his devotion with a pilgrimage to Jerusalem from which he did not return. Popular, pious, and effective, he embodied for later Danes the ideal of the good king.'
      ]},
      { title: 'The archbishopric of Lund', paragraphs: [
        'Eric\'s central achievement was to free the Scandinavian Church from foreign control. For generations the north had been subject to the German archbishopric of Hamburg-Bremen; Eric travelled and negotiated with Rome, and won the pope\'s agreement to raise Lund, in his Danish province of Scania, to an archbishopric with authority over all Scandinavia. The see was established in 1103–1104, a landmark in the independence of the northern Church.',
        'He paired this with devotion to his own dynasty\'s holiness, pressing the cause of his murdered brother Canute, whose canonisation had been secured in 1101.'
      ]},
      { title: 'Death on pilgrimage', paragraphs: [
        'In his last years Eric set out, in the fervour of the age of the First Crusade, on pilgrimage to the Holy Land — the first Danish king to do so. He got as far as Cyprus, where he fell ill and died at Paphos on 10 July 1103. His queen Bodil went on to Jerusalem and died on the Mount of Olives.'
      ]},
      { title: 'Legacy', paragraphs: [
        'Eric Evergood is remembered as the best-loved of the sons of Sweyn, the generous king of the good years. His winning of the archbishopric of Lund was a decisive step toward an independent Scandinavian Church, and his pilgrimage marked the entry of the Danish monarchy into the wider devotional world of crusading Europe. Through his son Canute Lavard, however, his line also became the seed of the civil wars that would convulse Denmark for a generation before his descendants founded the Valdemar dynasty.'
      ]}
    ],
    keyAchievements: [
      { title: 'King of Denmark, 1095–1103', description: 'The most admired of the sons of Sweyn, remembered for good fortune and generosity.' },
      { title: 'Won the archbishopric of Lund', description: 'Secured Scandinavia its own archbishopric, freeing it from Hamburg-Bremen.' },
      { title: 'Pilgrimage to the Holy Land', description: 'The first Danish king to set out for Jerusalem; died on Cyprus in 1103.' }
    ],
    timeline: [
      { date: 'c. 1056', title: 'Born', description: 'Born a son of Sweyn II Estridsson; later father of Canute Lavard.' },
      { date: '1095', title: 'Becomes King of Denmark', description: 'Succeeds his brother Oluf, bringing a reputation for generosity and good fortune.', links: [per('oluf-i-of-denmark', 'Oluf I of Denmark', 'His brother and predecessor'), DEN] },
      { date: '1101', title: 'Canonisation of his brother Canute', description: 'Promotes the successful canonisation of his martyred brother, Saint Canute.', links: [per('cnut-iv-of-denmark', 'Cnut IV of Denmark', 'His brother, whose sainthood he promoted')] },
      { date: '1103', title: 'Wins the archbishopric of Lund', description: 'Secures a Scandinavian archbishopric at Lund, independent of Hamburg-Bremen.' },
      { date: '10 July 1103', title: 'Dies on pilgrimage', description: 'Dies at Paphos on Cyprus en route to Jerusalem; his brother Niels succeeds.', links: [per('niels-of-denmark', 'Niels of Denmark', 'His brother and successor')] }
    ],
    relatedEntries: {
      locations: [ { ...DEN, label: 'His kingdom' } ],
      people: [ per('oluf-i-of-denmark', 'Oluf I of Denmark', 'His brother and predecessor'), per('niels-of-denmark', 'Niels of Denmark', 'His brother and successor'), per('cnut-iv-of-denmark', 'Cnut IV of Denmark', 'His brother, whose canonisation he secured') ],
      events: []
    },
    sources: [ src('Eric I | king of Denmark', 'https://www.britannica.com/place/Denmark/History'), src('Lund — archbishopric', 'https://www.britannica.com/place/Lund') ],
    isRuler: true,
    succession: { office: 'King of Denmark',
      predecessor: { personSlug: 'oluf-i-of-denmark', displayName: 'Oluf I of Denmark', note: 'His brother "Hunger", after whose famine-struck reign Eric\'s accession was hailed as the return of plenty.' },
      successor: { personSlug: 'niels-of-denmark', displayName: 'Niels of Denmark', note: 'His brother, the last and longest-reigning of the sons of Sweyn.' } }
  },

  // ── NIELS ─────────────────────────────────────────────────────────────────────
  {
    id: 'niels-of-denmark', type: 'character', name: 'Niels of Denmark', born: 1065, died: 1134,
    deathAge: 'about 69', causeOfDeath: 'Murdered in Schleswig after defeat in battle', restingPlace: 'Schleswig Cathedral',
    location: 'Kingdom of Denmark', aliases: ['Niels', 'Nicholas of Denmark'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Coin_of_Niels%2C_King_of_Denmark_1104_1134.jpg',
    summary: 'King of Denmark (1104–1134), the last and longest-reigning son of Sweyn II, whose thirty-year rule ended in the civil war sparked by the murder of Canute Lavard.',
    title: 'King of Denmark', roles: ['King of Denmark'],
    birth: { date: 'c. 1065', place: { name: 'Denmark' }, note: 'The youngest son of Sweyn II Estridsson.' },
    death: { date: '25 June 1134', place: { name: 'Schleswig' }, circumstance: 'Killed by the townsmen of Schleswig soon after his defeat at the Battle of Fotevik.' },
    quickFacts: { realm: 'Kingdom of Denmark', dynasty: 'House of Estridsen', culture: 'Danish', knownFor: 'a long reign ended by the murder of Canute Lavard and the civil war that followed' },
    imageInfo: { caption: 'A coin of King Niels of Denmark.', creator: 'Royal Danish mint', date: 'Coin of 1104–1134', source: 'Wikimedia Commons', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Coin_of_Niels,_King_of_Denmark_1104_1134.jpg', license: 'CC BY-SA 3.0', note: 'A photograph of the king\'s coinage; no portrait of him survives.' },
    overview: [
      'Niels was king of Denmark from 1104 to 1134, the youngest and last of the five sons of Sweyn II to reign, and his was much the longest of their reigns. For most of three decades he presided over a relatively stable and peaceable kingdom, ruling with the counsel of the Church and the great magnates.',
      'His reign ended in catastrophe. In 1131 his son Magnus murdered their popular kinsman Canute Lavard, Duke of Schleswig, igniting a civil war between the royal house and the friends of the murdered duke. Niels and Magnus were crushed at the Battle of Fotevik in 1134, Magnus was killed, and the old king, fleeing south, was cut down by the townsmen of Schleswig.'
    ],
    greatestFeats: ['King of Denmark for thirty years', 'The last of the sons of Sweyn to reign'],
    contentSections: [
      { title: 'Overview', paragraphs: [
        'Niels was king of Denmark from 1104 to 1134, the youngest and last of the five sons of Sweyn II to reign, and his was much the longest of their reigns. For most of three decades he presided over a relatively stable and peaceable kingdom, ruling with the counsel of the Church and the great magnates.',
        'His reign ended in catastrophe. In 1131 his son Magnus murdered their popular kinsman Canute Lavard, Duke of Schleswig, igniting a civil war between the royal house and the friends of the murdered duke. Niels and Magnus were crushed at the Battle of Fotevik in 1134, Magnus was killed, and the old king, fleeing south, was cut down by the townsmen of Schleswig.'
      ]},
      { title: 'Birth and early life', paragraphs: [
        'Niels was born about 1065, the youngest son of Sweyn II Estridsson, and came to the throne in 1104 after the death of his brother Eric I on pilgrimage. Four of his brothers had reigned before him; with Niels, the long succession of the sons of Sweyn reached its last and most durable king.',
        'He married Margaret Fredkulla, a Swedish princess, whose influence lent his early reign a reputation for good order and reconciliation.'
      ]},
      { title: 'Character and Personality', paragraphs: [
        'Niels is remembered as a mild, cautious, and somewhat colourless king, whose long reign owed more to careful management and the counsel of others than to any force of his own. For most of thirty years he kept the peace by working with the Church and the magnates rather than dominating them, and the sources treat this middle stretch of his rule as quietly successful.',
        'His fatal flaw was in his family. Devoted to his son Magnus and anxious to secure the succession for him, Niels allowed — or failed to prevent — the murder of the beloved Canute Lavard, and then backed Magnus against the vengeance it provoked. The steady old king proved unable to master the forces that murder unleashed, and his reign, so long stable, collapsed in blood at its very end.'
      ]},
      { title: 'The murder of Canute Lavard and the civil war', paragraphs: [
        'The peace of Niels\'s reign was shattered by dynastic jealousy. His nephew Canute Lavard — son of Eric Evergood, Duke of Schleswig, and a figure of great popularity and prestige — was seen as a rival to the succession of Niels\'s son Magnus. In 1131 Magnus lured Canute into a forest and killed him.',
        'The murder outraged Denmark and brought Canute Lavard\'s half-brother, Eric, into open war against the king. The struggle culminated at the Battle of Fotevik in Scania in 1134, where Niels and Magnus suffered a crushing defeat.'
      ]},
      { title: 'Death', paragraphs: [
        'Magnus was among the many killed at Fotevik. The aged Niels escaped the field and fled south, but at Schleswig — the city of the murdered Canute Lavard — the townsmen and the guild that had honoured the duke fell upon the king and killed him, on 25 June 1134. With him ended the reign of the sons of Sweyn.'
      ]},
      { title: 'Legacy', paragraphs: [
        'Niels is remembered as the last of the sons of Sweyn and as the king whose long, stable reign ended in the dynastic murder that opened Denmark\'s age of civil wars. The killing of Canute Lavard, which he failed to prevent and then defended, set the royal house against itself for a generation. Out of that long conflict would rise Canute Lavard\'s own son, the future Valdemar I, who at last reunited the kingdom and founded the Valdemar dynasty.'
      ]}
    ],
    keyAchievements: [
      { title: 'King of Denmark, 1104–1134', description: 'The longest reign of the sons of Sweyn, mostly peaceful and stable.' },
      { title: 'Ruled with Church and magnates', description: 'Kept order for three decades through counsel rather than domination.' }
    ],
    timeline: [
      { date: 'c. 1065', title: 'Born', description: 'Born the youngest son of Sweyn II Estridsson.' },
      { date: '1104', title: 'Becomes King of Denmark', description: 'Succeeds his brother Eric I, the last of the sons of Sweyn to reign.', links: [per('eric-i-of-denmark', 'Eric I of Denmark', 'His brother and predecessor'), DEN] },
      { date: '1131', title: 'Murder of Canute Lavard', description: 'His son Magnus murders the popular Canute Lavard, igniting civil war.' },
      { date: '1134', title: 'Defeat at Fotevik', description: 'Niels and Magnus are crushed at the Battle of Fotevik; Magnus is killed.', links: [per('eric-ii-of-denmark', 'Eric II of Denmark', 'The victor who overthrew him')] },
      { date: '25 June 1134', title: 'Killed at Schleswig', description: 'Cut down by the townsmen of Schleswig; Eric II takes the throne.', links: [per('eric-ii-of-denmark', 'Eric II of Denmark', 'His successor')] }
    ],
    relatedEntries: {
      locations: [ { ...DEN, label: 'His kingdom' } ],
      people: [ per('eric-i-of-denmark', 'Eric I of Denmark', 'His brother and predecessor'), per('eric-ii-of-denmark', 'Eric II of Denmark', 'The kinsman who overthrew him and succeeded') ],
      events: []
    },
    sources: [ src('Niels | king of Denmark', 'https://www.britannica.com/place/Denmark/History'), src('Denmark — history', 'https://www.britannica.com/place/Denmark/History') ],
    isRuler: true,
    succession: { office: 'King of Denmark',
      predecessor: { personSlug: 'eric-i-of-denmark', displayName: 'Eric I of Denmark', note: 'His brother "the Evergood", after whose death on pilgrimage Niels took the throne.' },
      successor: { personSlug: 'eric-ii-of-denmark', displayName: 'Eric II of Denmark', note: 'Canute Lavard\'s half-brother, who overthrew Niels at Fotevik to avenge the murdered duke.' } }
  },

  // ── ERIC II (ERIC EMUNE) ──────────────────────────────────────────────────────
  {
    id: 'eric-ii-of-denmark', type: 'character', name: 'Eric II of Denmark', born: 1090, died: 1137,
    deathAge: 'about 47', causeOfDeath: 'Murdered at an assembly', restingPlace: 'Ribe Cathedral',
    location: 'Kingdom of Denmark', aliases: ['Eric Emune', 'Erik Emune', 'Eric the Memorable'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/Erik_emune.jpg',
    summary: 'King of Denmark (1134–1137) who overthrew King Niels to avenge his half-brother Canute Lavard, then ruled harshly for three years before being murdered at a public assembly.',
    title: 'King of Denmark', roles: ['King of Denmark'],
    birth: { date: 'c. 1090', place: { name: 'Denmark' }, note: 'A son of Eric I Evergood; half-brother of the murdered Canute Lavard.' },
    death: { date: '18 September 1137', place: { name: 'Urnehoved, Jutland' }, circumstance: 'Speared to death by a magnate, Sorte Plov, at a public assembly in 1137.' },
    quickFacts: { realm: 'Kingdom of Denmark', dynasty: 'House of Estridsen', culture: 'Danish', knownFor: 'avenging Canute Lavard by overthrowing Niels, and his own harsh, brief reign' },
    imageInfo: { caption: 'A depiction of Eric II (Eric Emune) of Denmark.', creator: 'Later depiction', date: 'Later depiction', source: 'Wikimedia Commons', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Erik_emune.jpg', license: 'Public domain', note: 'A later depiction of the king, not a contemporary likeness.' },
    overview: [
      'Eric II, called Emune — "the Memorable" or "the Unforgettable" — was king of Denmark from 1134 to 1137. A son of Eric Evergood and half-brother of the murdered Canute Lavard, he led the war of vengeance against King Niels and his son Magnus, and won the crown by their defeat and deaths.',
      'His victory at the Battle of Fotevik in 1134 broke the old king\'s power, but Eric\'s own reign proved short and brutal. Harsh, vengeful, and feared, he crushed rivals and rebellions without mercy, until in 1137 he was struck down at a public assembly by a magnate he had wronged.'
    ],
    greatestFeats: ['King of Denmark', 'Avenged Canute Lavard at the Battle of Fotevik'],
    contentSections: [
      { title: 'Overview', paragraphs: [
        'Eric II, called Emune — "the Memorable" or "the Unforgettable" — was king of Denmark from 1134 to 1137. A son of Eric Evergood and half-brother of the murdered Canute Lavard, he led the war of vengeance against King Niels and his son Magnus, and won the crown by their defeat and deaths.',
        'His victory at the Battle of Fotevik in 1134 broke the old king\'s power, but Eric\'s own reign proved short and brutal. Harsh, vengeful, and feared, he crushed rivals and rebellions without mercy, until in 1137 he was struck down at a public assembly by a magnate he had wronged.'
      ]},
      { title: 'Birth and early life', paragraphs: [
        'Eric was born about 1090, a son of Eric I Evergood, and thus half-brother to Canute Lavard, the popular Duke of Schleswig. When Canute was murdered in 1131 by Magnus, the son of King Niels, Eric became the leader of the vengeance faction and the chief claimant against the reigning house.',
        'He raised a rebellion in the name of the murdered duke, drawing to his cause the many enemies of Niels and Magnus.'
      ]},
      { title: 'Character and Personality', paragraphs: [
        'Eric Emune was a hard and violent man even by the standards of a violent age. The sources present a ruthless avenger and a harsh king — brave and effective in war, but cruel, suspicious, and merciless toward those he suspected of disloyalty, including members of his own kin.',
        'His byname "Emune", the Memorable, carries an edge of dread as much as admiration. He won and held the throne by force and fear, mutilating and killing rivals, and the same ferocity that made him a formidable war-leader made him a hated ruler. That he was cut down in the open, at a peace-assembly, by a wronged subject who then walked away, suggests how far his cruelty had stripped him of the loyalty a king needed.'
      ]},
      { title: 'War of vengeance and reign', paragraphs: [
        'Eric\'s bid for the throne turned on avenging Canute Lavard. His war against Niels and Magnus reached its climax at the Battle of Fotevik in Scania in 1134, where the royal army was destroyed, Magnus fell, and the aged Niels fled to his death at Schleswig. Eric took the crown as Eric II.',
        'As king he ruled with the same hard hand that had won him power, suppressing rivals — among them his own nephews and kin — with executions, blindings, and mutilation. His brief reign kept the realm in fear rather than peace.'
      ]},
      { title: 'Death', paragraphs: [
        'On 18 September 1137, at a public assembly at Urnehoved in Jutland, Eric II was speared to death by a magnate named Sorte Plov, whom the king had provoked. He was buried at Ribe, and the crown passed to his nephew Eric, called the Lamb.'
      ]},
      { title: 'Legacy', paragraphs: [
        'Eric Emune is remembered as the fierce avenger of Canute Lavard and one of the harshest of Denmark\'s medieval kings, whose short reign deepened rather than healed the divisions of the civil wars. His violence and murder illustrate how far the royal house had turned upon itself; the ultimate beneficiary of the long conflict he helped drive would be Canute Lavard\'s posthumous son, the future Valdemar I.'
      ]}
    ],
    keyAchievements: [
      { title: 'King of Denmark, 1134–1137', description: 'Won the throne by overthrowing King Niels in the war of vengeance.' },
      { title: 'Victory at Fotevik, 1134', description: 'Destroyed the army of Niels and Magnus to avenge Canute Lavard.' }
    ],
    timeline: [
      { date: 'c. 1090', title: 'Born', description: 'Born a son of Eric I Evergood; half-brother of Canute Lavard.' },
      { date: '1131', title: 'Canute Lavard murdered', description: 'His half-brother is murdered by Magnus, son of King Niels; Eric leads the vengeance.' },
      { date: '1134', title: 'Victory at Fotevik', description: 'Defeats Niels and Magnus at Fotevik and takes the throne as Eric II.', links: [per('niels-of-denmark', 'Niels of Denmark', 'The king he overthrew'), DEN] },
      { date: '1134–1137', title: 'A harsh reign', description: 'Rules by force and fear, crushing rivals including his own kin.' },
      { date: '18 September 1137', title: 'Murdered at the assembly', description: 'Speared to death at Urnehoved; his nephew Eric III succeeds.', links: [per('eric-iii-of-denmark', 'Eric III of Denmark', 'His nephew and successor')] }
    ],
    relatedEntries: {
      locations: [ { ...DEN, label: 'His kingdom' } ],
      people: [ per('niels-of-denmark', 'Niels of Denmark', 'The king he overthrew and succeeded'), per('eric-iii-of-denmark', 'Eric III of Denmark', 'His nephew and successor') ],
      events: []
    },
    sources: [ src('Eric II | king of Denmark', 'https://www.britannica.com/place/Denmark/History'), src('Denmark — history', 'https://www.britannica.com/place/Denmark/History') ],
    isRuler: true,
    succession: { office: 'King of Denmark',
      predecessor: { personSlug: 'niels-of-denmark', displayName: 'Niels of Denmark', note: 'The old king he defeated at Fotevik and overthrew to avenge Canute Lavard.' },
      successor: { personSlug: 'eric-iii-of-denmark', displayName: 'Eric III of Denmark', note: 'His nephew "the Lamb", who succeeded on Eric II\'s murder.' } }
  },

  // ── ERIC III (ERIC LAMB) ──────────────────────────────────────────────────────
  {
    id: 'eric-iii-of-denmark', type: 'character', name: 'Eric III of Denmark', born: 1100, died: 1146,
    deathAge: 'about 46', causeOfDeath: 'Illness, after abdicating to a monastery', restingPlace: 'Odense',
    location: 'Kingdom of Denmark', aliases: ['Eric Lamb', 'Erik Lam', 'Eric the Lamb'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/63/Coin_danish_king_erik_lamm%2C_Eric_III_of_Denmark.jpg',
    summary: 'King of Denmark (1137–1146), a weak and conciliatory ruler beset by rival claimants, and the first Danish king to abdicate voluntarily — retiring to a monastery, which opened the war of the three kings.',
    title: 'King of Denmark', roles: ['King of Denmark'],
    birth: { date: 'c. 1100', place: { name: 'Denmark' }, note: 'Grandson of Eric I Evergood through his mother; nephew of Eric II.' },
    death: { date: '27 August 1146', place: { name: 'Odense' }, circumstance: 'Died in 1146 shortly after abdicating and entering a monastery.' },
    quickFacts: { realm: 'Kingdom of Denmark', dynasty: 'House of Estridsen', culture: 'Danish', knownFor: 'his weakness, and being the first Danish king to abdicate voluntarily' },
    imageInfo: { caption: 'A coin of King Eric III (Eric Lamb) of Denmark.', creator: 'Royal Danish mint', date: 'Coin of 1137–1146', source: 'Wikimedia Commons', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Coin_danish_king_erik_lamm,_Eric_III_of_Denmark.jpg', license: 'CC BY-SA 3.0', note: 'A photograph of the king\'s coinage; no portrait of him survives.' },
    overview: [
      'Eric III, called Eric Lamb for his mildness, was king of Denmark from 1137 to 1146. A grandson of Eric Evergood, he was raised to the throne after the murder of his uncle Eric Emune, and spent his reign struggling, with little success, to hold the fractured kingdom together against rival claimants.',
      'Weak and conciliatory where the times demanded strength, he was worn down by revolts and by the ambitions of the young pretenders Sweyn and Canute. In 1146, sick and exhausted, he did what no Danish king had done before: he abdicated and withdrew into a monastery, dying soon after. His resignation left the throne contested between rivals and opened the destructive war of the three kings.'
    ],
    greatestFeats: ['King of Denmark', 'The first Danish king to abdicate voluntarily'],
    contentSections: [
      { title: 'Overview', paragraphs: [
        'Eric III, called Eric Lamb for his mildness, was king of Denmark from 1137 to 1146. A grandson of Eric Evergood, he was raised to the throne after the murder of his uncle Eric Emune, and spent his reign struggling, with little success, to hold the fractured kingdom together against rival claimants.',
        'Weak and conciliatory where the times demanded strength, he was worn down by revolts and by the ambitions of the young pretenders Sweyn and Canute. In 1146, sick and exhausted, he did what no Danish king had done before: he abdicated and withdrew into a monastery, dying soon after. His resignation left the throne contested between rivals and opened the destructive war of the three kings.'
      ]},
      { title: 'Birth and early life', paragraphs: [
        'Eric was born about 1100, a grandson of Eric I Evergood through his mother, and so a member of the fractious royal kin. On the murder of his uncle Eric II Emune in 1137, Eric — mild where his uncle had been ferocious — was chosen king, in part as a relief from the terror of the previous reign.',
        'He inherited a realm exhausted by a decade of murder and civil war, and rivals with claims as good as his own.'
      ]},
      { title: 'Character and Personality', paragraphs: [
        'Eric\'s byname "Lamb" says almost everything the sources thought of him: gentle, mild, and pious, but weak — a king without the hardness his turbulent age required. After the ferocity of Eric Emune, his mildness was at first welcome, but it soon looked like helplessness in the face of ambitious and violent rivals.',
        'He was not without decency or piety; his final choice, to lay down the crown and end his days in a monastery, was remembered as an act of Christian humility rare among kings. But as a ruler he was overmatched. He could neither crush his rivals nor reconcile them, and his reign drifted from crisis to crisis until he gave it up — a good man, perhaps, and certainly an ineffective king.'
      ]},
      { title: 'A weak reign and abdication', paragraphs: [
        'Eric Lamb\'s reign was a losing struggle to keep control. He faced repeated challenges, most dangerously from the young Oluf Haraldsen, whom he eventually defeated, and lived under the shadow of the rising claims of Sweyn and Canute, grandsons of earlier kings. Unable to master the factions, he leaned on the Church and on compromise, and steadily lost ground.',
        'Worn out and ill, Eric took an unprecedented step in 1146: he resigned the crown and entered the monastery of St Canute at Odense as a monk. No Danish king had ever abdicated before.'
      ]},
      { title: 'Death', paragraphs: [
        'Eric III died in his monastery at Odense on 27 August 1146, only weeks or months after laying down the crown. He left no clear heir, and the throne he had resigned was at once contested.'
      ]},
      { title: 'Legacy', paragraphs: [
        'Eric Lamb is remembered as a weak but not ignoble king, and above all as the first Danish monarch to abdicate. His resignation, however humble, was a disaster for the realm: it threw the succession open between the rival claimants Sweyn, Canute, and Valdemar, and plunged Denmark into the war of the three kings that would rage for a decade until Valdemar I emerged as sole ruler.'
      ]}
    ],
    keyAchievements: [
      { title: 'King of Denmark, 1137–1146', description: 'Chosen as a mild successor after the murder of Eric Emune.' },
      { title: 'First Danish king to abdicate', description: 'Voluntarily resigned the crown and entered a monastery in 1146.' }
    ],
    timeline: [
      { date: 'c. 1100', title: 'Born', description: 'Born a grandson of Eric I Evergood; nephew of Eric II Emune.' },
      { date: '1137', title: 'Becomes King of Denmark', description: 'Chosen king after the murder of his uncle Eric II, as a mild alternative.', links: [per('eric-ii-of-denmark', 'Eric II of Denmark', 'His uncle and predecessor'), DEN] },
      { date: 'c. 1140', title: 'Struggles with rivals', description: 'Beset by revolts and by the rising claims of Sweyn and Canute.' },
      { date: '1146', title: 'Abdicates to a monastery', description: 'Resigns the crown — the first Danish king to do so — and becomes a monk at Odense.' },
      { date: '27 August 1146', title: 'Dies', description: 'Dies soon after abdicating; the throne is contested in the war of the three kings.', links: [per('sweyn-iii-of-denmark', 'Sweyn III of Denmark', 'A rival claimant who followed')] }
    ],
    relatedEntries: {
      locations: [ { ...DEN, label: 'His kingdom' } ],
      people: [ per('eric-ii-of-denmark', 'Eric II of Denmark', 'His uncle and predecessor'), per('sweyn-iii-of-denmark', 'Sweyn III of Denmark', 'A rival king who followed his abdication') ],
      events: []
    },
    sources: [ src('Eric III | king of Denmark', 'https://www.britannica.com/place/Denmark/History'), src('Denmark — history', 'https://www.britannica.com/place/Denmark/History') ],
    isRuler: true,
    succession: { office: 'King of Denmark',
      predecessor: { personSlug: 'eric-ii-of-denmark', displayName: 'Eric II of Denmark', note: 'His fierce uncle "Emune", on whose murder the mild Eric Lamb was chosen.' },
      successor: { personSlug: 'sweyn-iii-of-denmark', displayName: 'Sweyn III of Denmark', note: 'His abdication in 1146 split the realm between the rival kings Sweyn III and Canute V, opening the war of the three kings.' } }
  },

  // ── SWEYN III (SWEYN GRATHE) ──────────────────────────────────────────────────
  {
    id: 'sweyn-iii-of-denmark', type: 'character', name: 'Sweyn III of Denmark', born: 1125, died: 1157,
    deathAge: 'about 32', causeOfDeath: 'Killed at the Battle of Grathe Heath', restingPlace: 'Grathe, Jutland',
    location: 'Kingdom of Denmark', aliases: ['Sweyn Grathe', 'Sven Grathe', 'Sweyn III Grathe'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Swen.jpg',
    summary: 'King of Denmark (1146–1157) in the war of the three kings, whose treacherous attack at the Bloodfeast of Roskilde and defeat and death at Grathe Heath ended the civil wars and raised Valdemar I.',
    title: 'King of Denmark', roles: ['King of Denmark'],
    birth: { date: 'c. 1125', place: { name: 'Denmark' }, note: 'Son of Eric II Emune; a rival king in the war of the three kings.' },
    death: { date: '23 October 1157', place: { name: 'Grathe Heath, Jutland' }, event: { name: 'Battle of Grathe Heath', type: 'event' },
      circumstance: 'Defeated and killed by Valdemar at the Battle of Grathe Heath, ending the civil war.' },
    quickFacts: { realm: 'Kingdom of Denmark', dynasty: 'House of Estridsen', culture: 'Danish', knownFor: 'the war of the three kings, the Bloodfeast of Roskilde, and his death at Grathe Heath' },
    imageInfo: { caption: 'A medieval depiction of King Sweyn III (Sweyn Grathe) of Denmark.', creator: 'Anonymous', date: 'between 1229 and 1277', source: 'Wikimedia Commons', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Swen.jpg', license: 'Public domain', note: 'A medieval depiction from a thirteenth-century Danish source.' },
    overview: [
      'Sweyn III, called Sweyn Grathe, was one of the three rival kings of Denmark during the civil war of 1146–1157. Son of the fierce Eric Emune, he was elected king in Scania and Zealand after Eric Lamb\'s abdication, while Canute V was raised up in Jutland — beginning a decade of war for the crown into which the young Valdemar was also drawn.',
      'After years of fighting, the three agreed to partition Denmark at a reconciliation feast at Roskilde in 1157. There Sweyn treacherously attacked his rivals — the "Bloodfeast of Roskilde" — killing Canute V and wounding Valdemar, who escaped. Valdemar raised Jutland against him and destroyed Sweyn\'s army at Grathe Heath later that year; Sweyn was killed in the rout, leaving Valdemar sole king and founder of a new age.'
    ],
    greatestFeats: ['King of Denmark in the war of the three kings'],
    contentSections: [
      { title: 'Overview', paragraphs: [
        'Sweyn III, called Sweyn Grathe, was one of the three rival kings of Denmark during the civil war of 1146–1157. Son of the fierce Eric Emune, he was elected king in Scania and Zealand after Eric Lamb\'s abdication, while Canute V was raised up in Jutland — beginning a decade of war for the crown into which the young Valdemar was also drawn.',
        'After years of fighting, the three agreed to partition Denmark at a reconciliation feast at Roskilde in 1157. There Sweyn treacherously attacked his rivals — the "Bloodfeast of Roskilde" — killing Canute V and wounding Valdemar, who escaped. Valdemar raised Jutland against him and destroyed Sweyn\'s army at Grathe Heath later that year; Sweyn was killed in the rout, leaving Valdemar sole king and founder of a new age.'
      ]},
      { title: 'Birth and early life', paragraphs: [
        'Sweyn was born about 1125, the son of King Eric II Emune. When Eric Lamb abdicated in 1146, the kingdom\'s deep divisions surfaced at once: the assemblies of the different provinces chose different kings. Sweyn was elected in Scania and Zealand, while in Jutland the magnates raised up Canute V, grandson of King Niels.',
        'Neither would yield, and the young Valdemar — son of the murdered Canute Lavard — held the balance between them, allying now with one, now the other.'
      ]},
      { title: 'Character and Personality', paragraphs: [
        'Sweyn Grathe is remembered as an able but arrogant and untrustworthy king, whose reign is defined by the treachery that destroyed it. The sources, largely favourable to his ultimate conqueror Valdemar, present him as capable and cultivated — he brought German customs and courtly manners to Denmark — but also proud, grasping, and faithless.',
        'It is the Bloodfeast of Roskilde that fixed his reputation. Having sworn peace and partition with his rivals, he broke the oath in the most sacred setting of hospitality, turning a feast of reconciliation into a massacre. Whether from ruthless ambition or desperation, the act branded him a treacherous king, and his swift destruction at Grathe Heath was read by his enemies as the just punishment of a broken faith.'
      ]},
      { title: 'The war of the three kings', paragraphs: [
        'For a decade Denmark was torn between Sweyn, Canute V, and Valdemar, in shifting alliances and open war. Exhausted, the three at last agreed in 1157 to divide the kingdom between them, sealing the settlement at a great feast in Roskilde.',
        'At that feast Sweyn sprang his trap. His men fell on his fellow kings: Canute V was killed outright, but Valdemar, though wounded, cut his way out and fled to his native Jutland. The Bloodfeast of Roskilde turned the whole country against Sweyn.'
      ]},
      { title: 'Death at Grathe Heath', paragraphs: [
        'Valdemar raised Jutland in arms, and the two surviving kings met in battle on Grathe Heath, in central Jutland, on 23 October 1157. Sweyn\'s army was routed. Sweyn himself, fleeing the field, was caught and killed by peasants. His death ended the war of the three kings and left Valdemar sole ruler of Denmark.'
      ]},
      { title: 'Legacy', paragraphs: [
        'Sweyn Grathe is remembered as the treacherous loser of the war of the three kings, the king whose broken oath at Roskilde and defeat at Grathe Heath cleared the way for Valdemar I. His fall marks the end of the long Danish civil wars and the dynastic strife that had begun with the murder of Canute Lavard, and the beginning of the Valdemar era in which Denmark rose to new power.'
      ]}
    ],
    keyAchievements: [
      { title: 'King of Denmark, 1146–1157', description: 'One of the three rival kings during the long civil war.' },
      { title: 'Brought courtly customs to Denmark', description: 'Introduced German courtly and knightly manners to the Danish court.' }
    ],
    timeline: [
      { date: 'c. 1125', title: 'Born', description: 'Born the son of King Eric II Emune.' },
      { date: '1146', title: 'Elected king in the east', description: 'Chosen king in Scania and Zealand after Eric Lamb\'s abdication, against Canute V in Jutland.', links: [per('eric-iii-of-denmark', 'Eric III of Denmark', 'Whose abdication opened the throne'), DEN] },
      { date: '1146–1157', title: 'War of the three kings', description: 'Fights Canute V and Valdemar for the crown in shifting alliances.' },
      { date: '1157', title: 'The Bloodfeast of Roskilde', description: 'Treacherously attacks his rivals at a peace-feast, killing Canute V; Valdemar escapes.', links: [per('valdemar-i-of-denmark', 'Valdemar I of Denmark', 'The rival who escaped his trap')] },
      { date: '23 October 1157', title: 'Killed at Grathe Heath', description: 'Defeated by Valdemar at Grathe Heath and killed in the rout, ending the civil war.', links: [per('valdemar-i-of-denmark', 'Valdemar I of Denmark', 'His victor and successor')] }
    ],
    relatedEntries: {
      locations: [ { ...DEN, label: 'The kingdom he fought for' } ],
      people: [ per('eric-iii-of-denmark', 'Eric III of Denmark', 'Whose abdication opened the disputed throne'), per('valdemar-i-of-denmark', 'Valdemar I of Denmark', 'His rival, victor at Grathe Heath, and successor') ],
      events: []
    },
    sources: [ src('Sweyn III | king of Denmark', 'https://www.britannica.com/place/Denmark/History'), src('Valdemar I | king of Denmark', 'https://www.britannica.com/biography/Valdemar-I') ],
    isRuler: true,
    succession: { office: 'King of Denmark',
      predecessor: { personSlug: 'eric-iii-of-denmark', displayName: 'Eric III of Denmark', note: 'Whose abdication in 1146 split the realm; Sweyn was elected in the east against Canute V in Jutland.' },
      successor: { personSlug: 'valdemar-i-of-denmark', displayName: 'Valdemar I of Denmark', note: 'Who escaped the Bloodfeast of Roskilde, defeated and killed Sweyn at Grathe Heath, and reunited Denmark. (Their co-rival Canute V was murdered at Roskilde in 1157.)' } }
  }
]

// Insert / replace
let added = 0, replaced = 0
for (const p of people) {
  const i = data.characters.findIndex(c => c.id === p.id)
  if (i >= 0) { data.characters[i] = p; replaced++ } else { data.characters.push(p); added++ }
}

// Relink the two existing endpoints.
const byId = new Map(data.characters.map(c => [c.id, c]))
const relink = (rulerId, side, personSlug, displayName, note) => {
  const c = byId.get(rulerId)
  if (!c?.succession?.[side]) { console.warn(`SKIP relink ${rulerId}.${side}`); return }
  c.succession[side] = { personSlug, displayName, note }
  console.log(`relinked ${rulerId}.${side} -> ${personSlug}`)
}
relink('sweyn-ii-estridsson', 'successor', 'harald-iii-of-denmark', 'Harald III of Denmark', 'His eldest surviving son, "Harald Hen", first of the five sons of Sweyn to reign.')
relink('valdemar-i-of-denmark', 'predecessor', 'sweyn-iii-of-denmark', 'Sweyn III of Denmark', 'The last of the three rival kings, defeated and killed by Valdemar at Grathe Heath in 1157.')

fs.writeFileSync(dataPath, JSON.stringify(data, null, 2))
console.log(`\nDanish Valdemar-era kings added: ${added}, replaced: ${replaced}. Total characters: ${data.characters.length}`)
