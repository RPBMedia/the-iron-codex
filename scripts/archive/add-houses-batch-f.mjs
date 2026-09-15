import { readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const dataPath = join(__dirname, '..', 'server', 'data', 'history.json')
const data = JSON.parse(readFileSync(dataPath, 'utf8'))
const P = (slug, displayName, note) => ({ personSlug: slug, displayName, note })

// Precursor correction: Shirkuh (Saladin's uncle) is part of the Ayyubid family.
{ const c = data.characters.find((x) => x.id === 'shirkuh'); if (c) { c.quickFacts = c.quickFacts || {}; c.quickFacts.dynasty = 'Ayyubid' } }

/* ---------------------------------------------------------- RURIKID */
const rurikid = {
  id: 'house-of-rurik',
  type: 'house',
  name: 'Rurikid dynasty',
  aliases: ['Rurikid', 'Rurikids', 'Rurikid (as traditional founder)', 'Rurikid (regent/ruler)', 'Rurikid (by marriage)', 'Rurikid (chronicle tradition)', 'House of Rurik', 'Riurikid'],
  originYear: 862,
  endYear: 1240,
  reignSpan: 'from c. 862 (early Rus’, to the Codex’s medieval focus)',
  region: 'Kievan Rus’',
  originPlace: 'Novgorod and Kiev',
  arms: 'The bident (dvuzubets) and trident (tryzub) — princely marks (tamga) used by the early Rurikid rulers',
  image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Radzivill%20chronicle%20015.jpg?width=1000',
  imageInfo: {
    caption: 'Early Rus’ rulers depicted in the Radziwiłł Chronicle, a later illustrated copy of the Rus’ chronicle tradition.',
    creator: 'Radziwiłł Chronicle (illustrated manuscript)',
    date: '15th-century copy of earlier chronicles',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Radzivill_chronicle_015.jpg',
    note: 'A late medieval manuscript image; the earliest Rurikid history survives through the Primary Chronicle and later copies, not contemporary record.'
  },
  summary: 'The dynasty that, by chronicle tradition, founded and ruled the early Rus’ lands from Rurik through the princes of Kiev.',
  overview: 'The Rurikids were the ruling house of the early Rus’ lands, tracing their origin — through the twelfth-century Primary Chronicle — to the Varangian leader Rurik, traditionally invited to rule at Novgorod in 862. Their princes at Kiev, from Oleg and Igor through Olga and Sviatoslav, built the political and religious foundations of Rus’, a heritage shared by Russia, Ukraine, and Belarus.',
  founder: P('rurik', 'Rurik', 'Varangian leader named as founder by the Primary Chronicle'),
  seats: [{ name: 'Kievan Rus’', type: 'location', slug: 'kievan-rus' }],
  notableMembers: [
    P('rurik', 'Rurik', 'Traditional founder of the dynasty'),
    P('oleg-of-novgorod', 'Oleg of Novgorod', 'Kinsman and regent who moved the seat to Kiev'),
    P('igor-of-kiev', 'Igor of Kiev', 'Prince of Kiev; attacked Constantinople'),
    P('olga-of-kiev', 'Olga of Kiev', 'Regent and the first Rus’ ruler to convert to Christianity'),
    P('sviatoslav-i-of-kiev', 'Sviatoslav I', 'Warrior-prince who campaigned against the Khazars and Bulgars'),
    P('yaropolk-i-of-kiev', 'Yaropolk I', 'Prince of Kiev amid the dynasty’s succession struggles')
  ],
  familyTree: {
    caption: 'The early Rurikid princes as recorded by the Primary Chronicle. This descent is chronicle tradition, not documented fact; Oleg ruled as kinsman and regent rather than in the direct line. Norse name-forms (Helgi, Helga, Ingvar) underlie the Slavic names.',
    root: {
      name: 'Rurik', personSlug: 'rurik', note: 'by tradition arrived 862',
      children: [
        { name: 'Oleg of Novgorod', personSlug: 'oleg-of-novgorod', note: 'kinsman and regent for Igor' },
        {
          name: 'Igor of Kiev', personSlug: 'igor-of-kiev', note: 'd. c. 945 (by the chronicle)',
          spouse: { name: 'Olga of Kiev', personSlug: 'olga-of-kiev', note: 'regent after Igor’s death' },
          children: [{
            name: 'Sviatoslav I', personSlug: 'sviatoslav-i-of-kiev', note: 'd. 972',
            children: [{ name: 'Yaropolk I', personSlug: 'yaropolk-i-of-kiev', note: 'd. c. 980' }]
          }]
        }
      ]
    }
  },
  contentSections: [
    { title: 'Origins', paragraphs: [
      'The dynasty’s origins are known chiefly through the Primary Chronicle, a twelfth-century compilation that dates the arrival of the Varangian (Norse) leader Rurik to 862, invited by feuding Slavic and Finnic peoples to rule at Novgorod. This account mixes earlier records, oral tradition, and later monastic shaping, and should be read as tradition rather than documentary history.',
      'The names of the early rulers reveal their Norse origins — Oleg is the Norse Helgi, Olga is Helga, Igor is Ingvar — a Scandinavian warrior-trading elite that gradually merged with the Slavic population it ruled.'
    ]},
    { title: 'From Novgorod to Kiev', paragraphs: [
      'According to the chronicle, Rurik’s kinsman Oleg moved the centre of power south to Kiev on the Dnieper, the great river road linking the Baltic to Constantinople. Oleg and his successor Igor raided and traded with the Byzantine Empire; Igor’s attack on Constantinople in 941 is independently confirmed by the Western envoy Liutprand of Cremona, one of the few external checks on the chronicle.',
      'Igor was killed, tradition says, while extorting tribute from the Drevlians, leaving his widow Olga as regent for their young son.'
    ]},
    { title: 'Olga and Sviatoslav', paragraphs: [
      'Olga ruled as a forceful regent and, around 957, travelled to Constantinople and was baptised — a visit corroborated by the emperor Constantine VII’s own account of receiving her. She became the first Rus’ ruler to accept Christianity, though the wider conversion of Rus’ came later.',
      'Her son Sviatoslav remained a pagan warrior-prince, destroying the Khazar state and campaigning in the Balkans against the Bulgars before being killed by the Pechenegs; the tale that his skull was made into a drinking cup is chronicle tradition in the Norse manner.'
    ]},
    { title: 'Succession struggles', paragraphs: [
      'Sviatoslav divided his lands among his sons, and their wars — in which Yaropolk I fell — were resolved when Vladimir seized sole rule and, around 988, converted Rus’ to Byzantine Christianity, a turning point that lies just beyond this cluster of early princes.',
      'The Rurikid practice of dividing the realm among sons repeatedly produced fratricidal succession wars, a structural weakness of the early Rus’ polity.'
    ]},
    { title: 'Legacy', paragraphs: [
      'The Rurikids gave the Rus’ lands their princely dynasty, their conversion to Orthodox Christianity, and the political traditions of Kiev — a shared medieval heritage of Russia, Ukraine, and Belarus that should not be reduced to any one modern nation’s founding story.',
      'Branches of the house would rule the Rus’ principalities, and eventually Moscow, for centuries, until the Rurikid line finally ended in the sixteenth century.'
    ]}
  ],
  timeline: [
    { date: '862', title: 'Rurik at Novgorod (by tradition)', description: 'The Primary Chronicle dates the Varangian invitation to 862.', links: [{ title: 'Rurik', type: 'person', slug: 'rurik' }] },
    { date: '941', title: 'Igor attacks Constantinople', description: 'A raid independently confirmed by Liutprand of Cremona.', links: [{ title: 'Igor of Kiev', type: 'person', slug: 'igor-of-kiev' }] },
    { date: 'c. 957', title: 'Olga’s baptism', description: 'The regent converts at Constantinople, corroborated by Constantine VII.', links: [{ title: 'Olga of Kiev', type: 'person', slug: 'olga-of-kiev' }] },
    { date: '972', title: 'Death of Sviatoslav', description: 'The warrior-prince falls to the Pechenegs.', links: [{ title: 'Sviatoslav I', type: 'person', slug: 'sviatoslav-i-of-kiev' }] }
  ],
  relatedEntries: {
    people: [
      { title: 'Rurik', type: 'person', slug: 'rurik', label: 'Founder by tradition' },
      { title: 'Olga of Kiev', type: 'person', slug: 'olga-of-kiev', label: 'First Christian ruler of Rus’' },
      { title: 'Sviatoslav I', type: 'person', slug: 'sviatoslav-i-of-kiev', label: 'Warrior-prince' }
    ],
    locations: [{ title: 'Kievan Rus’', type: 'location', slug: 'kievan-rus', label: 'The realm they ruled' }]
  },
  sources: [
    { title: 'Rurik dynasty — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Rurik_dynasty' },
    { title: 'Kievan Rus — Encyclopaedia Britannica', author: 'Encyclopaedia Britannica', type: 'encyclopedia', url: 'https://www.britannica.com/place/Kievan-Rus' },
    { title: 'Primary Chronicle — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Primary_Chronicle' }
  ]
}

/* ------------------------------------------------------------- ARPAD */
const arpad = {
  id: 'house-of-arpad',
  type: 'house',
  name: 'Árpád dynasty',
  aliases: ['Árpád', 'Arpad', 'Árpáds', 'House of Árpád', 'Arpad dynasty', 'Árpád dynasty'],
  originYear: 1000,
  endYear: 1301,
  reignSpan: '1000–1301',
  region: 'Kingdom of Hungary',
  originPlace: 'Pannonia (the Carpathian basin)',
  arms: 'Barry of eight gules and argent — the Árpád stripes of Hungary',
  image: 'https://commons.wikimedia.org/wiki/Special:FilePath/B%C3%A9la%20IV%20(Chronicon%20Pictum%20126).jpg?width=1000',
  imageInfo: {
    caption: 'King Béla IV of Hungary, who rebuilt the kingdom after the Mongol invasion, in the 14th-century Illuminated Chronicle.',
    creator: 'Chronicon Pictum (Illuminated Chronicle)',
    date: 'c. 1360',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:B%C3%A9la_IV_(Chronicon_Pictum_126).jpg',
    note: 'A later Hungarian royal-chronicle depiction of Béla IV, "second founder" of the kingdom.'
  },
  summary: 'The founding dynasty of Christian Hungary, from Saint Stephen to the rebuilding of the kingdom after the Mongol invasion.',
  overview: 'The Árpád dynasty, named for the Magyar chieftain who led the conquest of the Carpathian basin, gave Hungary its first Christian king in Saint Stephen around 1000 and ruled for three centuries. Its later kings issued the Golden Bull, survived the catastrophic Mongol invasion, and under Béla IV rebuilt the country before the male line failed in 1301.',
  founder: { displayName: 'Árpád', note: 'Magyar chieftain who led the conquest of the Carpathian basin, c. 895 (no Codex article yet)' },
  notableMembers: [
    P('emeric-of-hungary', 'Emeric', 'King during the dynasty’s high medieval expansion'),
    P('andrew-ii-of-hungary', 'Andrew II', 'Issued the Golden Bull of 1222'),
    P('bela-iv-of-hungary', 'Béla IV', 'Rebuilt Hungary after the Mongol invasion')
  ],
  familyTree: {
    caption: 'The later Árpád kings shown here descend from Béla III: his sons Emeric and Andrew II, and Andrew’s son Béla IV. The dynasty traced its origin to the Magyar chieftain Árpád and its royal line to Saint Stephen.',
    root: {
      name: 'Béla III', note: 'King of Hungary, d. 1196',
      children: [
        { name: 'Emeric', personSlug: 'emeric-of-hungary', note: 'r. 1196–1204' },
        {
          name: 'Andrew II', personSlug: 'andrew-ii-of-hungary', note: 'r. 1205–1235',
          children: [{ name: 'Béla IV', personSlug: 'bela-iv-of-hungary', note: 'r. 1235–1270' }]
        }
      ]
    }
  },
  contentSections: [
    { title: 'Origins', paragraphs: [
      'The dynasty is named for Árpád, the Magyar chieftain who according to tradition led the Hungarian tribes into the Carpathian basin around 895. A century later his descendant Géza and Géza’s son Stephen turned the pagan Magyar confederation into a Christian kingdom.',
      'Crowned around 1000 with a crown said to have been sent by the pope, Saint Stephen founded bishoprics, imposed Christianity, and organised Hungary into counties, making the Árpáds the founders of the Hungarian state.'
    ]},
    { title: 'The high medieval kingdom', paragraphs: [
      'Over the following two centuries the Árpáds expanded into Croatia and Transylvania and drew Hungary into the politics of central Europe and the Crusades. Royal power was increasingly contested by a rising nobility.',
      'In 1222 Andrew II was forced to grant the Golden Bull, a charter of noble liberties often compared to England’s Magna Carta, which limited royal power and asserted the rights of the nobility.'
    ]},
    { title: 'The Mongol catastrophe', paragraphs: [
      'In 1241 the Mongols invaded and shattered the Hungarian army at the Battle of Mohi, and Béla IV fled to the Adriatic coast as the country was devastated. When the Mongols withdrew the following year, Béla returned to a ruined kingdom.',
      'He rebuilt Hungary so thoroughly — founding stone castles, fortifying towns, and inviting settlers — that he is remembered as the "second founder" of the state.'
    ]},
    { title: 'End of the line and legacy', paragraphs: [
      'The last Árpád kings struggled against overmighty nobles, and in 1301 the male line ended with Andrew III, plunging Hungary into a war of succession from which the Angevin Charles Robert eventually emerged as king.',
      'The Árpáds left Hungary a Christian kingdom with its church, counties, and law, and their cult of royal saints — Saint Stephen, Saint Ladislaus, Saint Elizabeth — shaped Hungarian identity for centuries.'
    ]}
  ],
  timeline: [
    { date: 'c. 1000', title: 'Saint Stephen crowned', description: 'The first Christian king founds the Hungarian kingdom.' },
    { date: '1222', title: 'The Golden Bull', description: 'Andrew II grants a charter of noble liberties.', links: [{ title: 'Andrew II', type: 'person', slug: 'andrew-ii-of-hungary' }] },
    { date: '1241', title: 'Battle of Mohi', description: 'The Mongols destroy the Hungarian army and devastate the kingdom.', links: [{ title: 'Battle of Mohi', type: 'event', slug: 'battle-of-mohi' }] },
    { date: '1301', title: 'End of the Árpád line', description: 'Andrew III dies without a male heir.', links: [{ title: 'Béla IV', type: 'person', slug: 'bela-iv-of-hungary' }] }
  ],
  relatedEntries: {
    people: [
      { title: 'Andrew II', type: 'person', slug: 'andrew-ii-of-hungary', label: 'Issued the Golden Bull' },
      { title: 'Béla IV', type: 'person', slug: 'bela-iv-of-hungary', label: 'Rebuilt Hungary after the Mongols' },
      { title: 'Emeric', type: 'person', slug: 'emeric-of-hungary', label: 'High medieval king' }
    ],
    events: [{ title: 'Battle of Mohi', type: 'event', slug: 'battle-of-mohi', label: 'The Mongol catastrophe, 1241' }]
  },
  sources: [
    { title: 'Árpád dynasty — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/%C3%81rp%C3%A1d_dynasty' },
    { title: 'Hungary: The Árpáds — Encyclopaedia Britannica', author: 'Encyclopaedia Britannica', type: 'encyclopedia', url: 'https://www.britannica.com/place/Hungary/The-Arpad-dynasty' },
    { title: 'Béla IV — Encyclopaedia Britannica', author: 'Encyclopaedia Britannica', type: 'encyclopedia', url: 'https://www.britannica.com/biography/Bela-IV' }
  ]
}

/* -------------------------------------------------------- GEDIMINAS */
const gediminas = {
  id: 'house-of-gediminas',
  type: 'house',
  name: 'House of Gediminas',
  aliases: ['Gediminid', 'Gediminids', 'Gediminid dynasty', 'Jagiellon', 'Jagiellonian', 'Jagiellonian dynasty', 'House of Jagiellon', 'Jagiellons', 'Jagiellonians'],
  originYear: 1315,
  endYear: 1572,
  reignSpan: '1315–1572',
  region: 'Lithuania & Poland',
  originPlace: 'Grand Duchy of Lithuania',
  arms: 'The Vytis (Pahonia) — an armoured knight on horseback — and the Columns of Gediminas',
  image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Tomb%20effigy%20of%20Jogaila%20(Wladyslaw%20II%20Jagiello).JPG?width=1000',
  imageInfo: {
    caption: 'Tomb effigy of Jogaila (Władysław II Jagiełło), founder of the Jagiellonian royal line, in Wawel Cathedral, Kraków.',
    creator: 'Gothic tomb sculpture, Wawel Cathedral',
    date: 'c. 1430s',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Tomb_effigy_of_Jogaila_(Wladyslaw_II_Jagiello).JPG',
    note: 'A near-contemporary funerary effigy of the Lithuanian grand duke who became king of Poland.'
  },
  summary: 'The Lithuanian dynasty that, through the union of Jogaila with Poland, ruled the vast Polish-Lithuanian realm and much of central Europe.',
  overview: 'The House of Gediminas rose as grand dukes of pagan Lithuania, the last great non-Christian power in Europe. When Grand Duke Jogaila married the Polish queen Jadwiga, accepted Christianity, and became King Władysław II in 1386, he founded the Jagiellonian dynasty that would rule Poland, Lithuania, and beyond, and that broke the Teutonic Knights at Grunwald.',
  founder: P('wladyslaw-ii-jagiello', 'Władysław II Jagiełło', 'Grand Duke of Lithuania who became king of Poland, founding the royal dynasty'),
  seats: [
    { name: 'Grand Duchy of Lithuania', type: 'location', slug: 'grand-duchy-of-lithuania' },
    { name: 'Kingdom of Poland', type: 'location', slug: 'kingdom-of-poland' }
  ],
  notableMembers: [
    P('wladyslaw-ii-jagiello', 'Władysław II Jagiełło', 'Founder of the Jagiellonian royal line'),
    P('vytautas', 'Vytautas the Great', 'Grand Duke of Lithuania at its greatest extent'),
    P('skirgaila', 'Skirgaila', 'Regent of Lithuania for Jogaila'),
    P('svitrigaila', 'Svitrigaila', 'Grand Duke; rival in the Lithuanian civil war'),
    P('wladyslaw-iii-of-poland', 'Władysław III', 'King of Poland and Hungary; died at Varna in 1444')
  ],
  familyTree: {
    caption: 'The Gediminid grand dukes and the Jagiellonian royal line. Gediminas’s grandsons Jogaila and Vytautas ruled together after 1386; Jogaila’s branch became the kings of Poland. ⚭ marks a marriage.',
    root: {
      name: 'Gediminas', note: 'Grand Duke of Lithuania, r. c. 1315–1341',
      children: [
        {
          name: 'Algirdas', note: 'Grand Duke of Lithuania',
          children: [
            {
              name: 'Jogaila (Władysław II)', personSlug: 'wladyslaw-ii-jagiello', note: 'King of Poland 1386–1434',
              spouse: { name: 'Jadwiga of Poland' },
              children: [{ name: 'Władysław III', personSlug: 'wladyslaw-iii-of-poland', note: 'r. 1434–1444, died at Varna' }]
            },
            { name: 'Skirgaila', personSlug: 'skirgaila', note: 'regent of Lithuania' },
            { name: 'Svitrigaila', personSlug: 'svitrigaila', note: 'Grand Duke of Lithuania' }
          ]
        },
        {
          name: 'Kęstutis', note: 'Grand Duke of Lithuania',
          children: [{ name: 'Vytautas the Great', personSlug: 'vytautas', note: 'Grand Duke, d. 1430' }]
        }
      ]
    }
  },
  contentSections: [
    { title: 'Origins', paragraphs: [
      'Gediminas, grand duke from about 1315, made Lithuania a great power stretching deep into the Rus’ lands while remaining pagan, the last major non-Christian state in Europe. His descendants ruled a vast, religiously mixed realm of Baltic pagans and Orthodox Slavs.',
      'The decisive turn came with his grandson Jogaila, who in 1386 accepted Catholic baptism, married the young Polish queen Jadwiga, and was crowned king of Poland as Władysław II — a personal union that bound Poland and Lithuania together.'
    ]},
    { title: 'Jogaila, Vytautas, and Grunwald', paragraphs: [
      'Jogaila ruled Poland while his cousin Vytautas the Great governed Lithuania, at times as rivals, at times as partners. Together in 1410 they led the Polish-Lithuanian armies to a crushing victory over the Teutonic Knights at the Battle of Grunwald, one of the largest battles of medieval Europe, breaking the power of the crusading Order.',
      'Under Vytautas Lithuania reached its greatest extent, from the Baltic almost to the Black Sea.'
    ]},
    { title: 'The Jagiellonian kings', paragraphs: [
      'Jogaila founded a royal dynasty that would rule Poland-Lithuania for nearly two centuries. His son Władysław III became king of Poland and Hungary but was killed leading a crusade against the Ottomans at the Battle of Varna in 1444, still a teenager.',
      'Later Jagiellonians would also hold the crowns of Bohemia and Hungary, making the dynasty one of the most powerful in fifteenth- and sixteenth-century Europe.'
    ]},
    { title: 'Legacy', paragraphs: [
      'The union of Gediminid Lithuania with Poland created one of the largest states in Europe and set the Polish-Lithuanian Commonwealth on its historical course. The dynasty’s conversion of Lithuania completed the Christianisation of Europe.',
      'Grunwald became a lasting symbol of Polish and Lithuanian nationhood, and the Jagiellonians a byword for a golden age of central European power.'
    ]}
  ],
  timeline: [
    { date: 'c. 1315', title: 'Gediminas builds Lithuania', description: 'The grand duchy becomes a great power in eastern Europe.' },
    { date: '1386', title: 'Union of Poland and Lithuania', description: 'Jogaila is baptised, marries Jadwiga, and becomes king of Poland.', links: [{ title: 'Władysław II Jagiełło', type: 'person', slug: 'wladyslaw-ii-jagiello' }] },
    { date: '1410', title: 'Battle of Grunwald', description: 'Jogaila and Vytautas crush the Teutonic Knights.', links: [{ title: 'Battle of Grunwald', type: 'event', slug: 'battle-of-grunwald' }] },
    { date: '1444', title: 'Death at Varna', description: 'Władysław III falls leading a crusade against the Ottomans.', links: [{ title: 'Władysław III', type: 'person', slug: 'wladyslaw-iii-of-poland' }] }
  ],
  relatedEntries: {
    people: [
      { title: 'Władysław II Jagiełło', type: 'person', slug: 'wladyslaw-ii-jagiello', label: 'Founder of the royal line' },
      { title: 'Vytautas the Great', type: 'person', slug: 'vytautas', label: 'Lithuania at its height' },
      { title: 'Władysław III', type: 'person', slug: 'wladyslaw-iii-of-poland', label: 'Died at Varna' }
    ],
    events: [{ title: 'Battle of Grunwald', type: 'event', slug: 'battle-of-grunwald', label: 'Victory over the Teutonic Knights, 1410' }],
    locations: [
      { title: 'Grand Duchy of Lithuania', type: 'location', slug: 'grand-duchy-of-lithuania', label: 'Ancestral realm' },
      { title: 'Kingdom of Poland', type: 'location', slug: 'kingdom-of-poland', label: 'The crown they gained' }
    ]
  },
  sources: [
    { title: 'Jagiellonian dynasty — Encyclopaedia Britannica', author: 'Encyclopaedia Britannica', type: 'encyclopedia', url: 'https://www.britannica.com/topic/Jagiellon-dynasty' },
    { title: 'Gediminids — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Gediminids' },
    { title: 'Władysław II Jagiełło — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/W%C5%82adys%C5%82aw_II_Jagie%C5%82%C5%82o' }
  ]
}

/* ---------------------------------------------------------- AYYUBID */
const ayyubid = {
  id: 'house-of-ayyubid',
  type: 'house',
  name: 'Ayyubid dynasty',
  aliases: ['Ayyubid', 'Ayyubids', 'House of Ayyub', 'Ayyubid dynasty'],
  originYear: 1171,
  endYear: 1260,
  reignSpan: '1171–1260',
  region: 'Egypt, Syria & the Levant',
  originPlace: 'Kurdish origins; based in Egypt and Syria',
  arms: 'The Ayyubids used no European-style arms; a golden eagle is sometimes associated with the family',
  image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Saladin.jpg?width=1000',
  imageInfo: {
    caption: 'Saladin, founder of the Ayyubid dynasty, in a medieval depiction.',
    creator: 'Medieval manuscript depiction',
    date: 'Later depiction (Saladin r. 1171–1193)',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Saladin.jpg',
    note: 'A medieval image of Saladin; contemporary likenesses of the sultan do not survive.'
  },
  summary: 'The Kurdish dynasty founded by Saladin that reunited Egypt and Syria and retook Jerusalem from the Crusaders.',
  overview: 'The Ayyubid dynasty was founded by Saladin, who ended the Fatimid caliphate in Egypt in 1171 and united Egypt and Muslim Syria under Sunni rule. He recovered Jerusalem in 1187 and withstood the Third Crusade; his brother al-Adil and nephew al-Kamil held the family empire together before it gave way to the Mamluks.',
  founder: P('saladin', 'Saladin', 'Founder; united Egypt and Syria and retook Jerusalem'),
  seats: [{ name: 'Ayyubid Sultanate', type: 'location', slug: 'ayyubid-sultanate' }],
  notableMembers: [
    P('shirkuh', 'Shirkuh', 'Saladin’s uncle; conquered Egypt for the family'),
    P('saladin', 'Saladin', 'Founder of the dynasty; victor of Hattin'),
    P('al-adil-i', 'al-Adil I', 'Saladin’s brother; reunited the Ayyubid lands'),
    P('al-kamil', 'al-Kamil', 'Ceded Jerusalem to Frederick II by treaty'),
    P('al-adil-ii', 'al-Adil II', 'Later Ayyubid sultan of Egypt')
  ],
  familyTree: {
    caption: 'The Ayyubid family, descended from the Kurdish commander Ayyub. Saladin and al-Adil I were brothers; al-Kamil and al-Adil II continued the Egyptian line. Shirkuh, Saladin’s uncle, won Egypt for the family.',
    root: {
      name: 'Shadhi', note: 'Kurdish progenitor of the family',
      children: [
        {
          name: 'Najm ad-Din Ayyub', note: 'the dynasty’s eponym',
          children: [
            { name: 'Saladin', personSlug: 'saladin', note: 'r. 1171–1193' },
            {
              name: 'al-Adil I', personSlug: 'al-adil-i', note: 'r. 1200–1218',
              children: [{
                name: 'al-Kamil', personSlug: 'al-kamil', note: 'r. 1218–1238',
                children: [{ name: 'al-Adil II', personSlug: 'al-adil-ii', note: 'r. 1238–1240' }]
              }]
            }
          ]
        },
        { name: 'Shirkuh', personSlug: 'shirkuh', note: 'general; d. 1169' }
      ]
    }
  },
  contentSections: [
    { title: 'Origins', paragraphs: [
      'The family were Kurds from Armenia who rose in the service of the Zengid rulers of Syria. Saladin’s uncle Shirkuh led Zengid armies into Fatimid Egypt, and when he died in 1169 the young Saladin succeeded him as vizier.',
      'In 1171 Saladin abolished the Shia Fatimid caliphate, returned Egypt to Sunni allegiance, and after his master Nur ad-Din’s death made himself the independent ruler of Egypt and much of Syria, founding the Ayyubid dynasty.'
    ]},
    { title: 'Saladin and the reconquest of Jerusalem', paragraphs: [
      'Saladin united the Muslim Near East and turned against the Crusader states. In 1187 he destroyed the army of the Kingdom of Jerusalem at the Battle of Hattin and recaptured Jerusalem itself, ending eighty-eight years of Crusader rule over the holy city.',
      'His victories provoked the Third Crusade, in which he faced Richard the Lionheart; the two fought to a stalemate and a truce that left Saladin in control of Jerusalem while allowing Christian pilgrimage. Even Western writers remembered him as a model of chivalry and generosity.'
    ]},
    { title: 'The family empire', paragraphs: [
      'Saladin divided his lands among his relatives, and after his death in 1193 his brother al-Adil I outmanoeuvred his sons to reunite the Ayyubid domains. Al-Adil’s son al-Kamil, ruling Egypt, took the pragmatic step in 1229 of ceding Jerusalem to the Emperor Frederick II by treaty rather than fighting the Sixth Crusade.',
      'The Ayyubid realm was really a family confederation of princes in Cairo, Damascus, Aleppo, and beyond, held together — or divided — by kinship.'
    ]},
    { title: 'Fall of the dynasty', paragraphs: [
      'The reliance on slave-soldiers proved the dynasty’s undoing. In 1250 the Mamluks, the elite military slaves of the Egyptian Ayyubids, seized power in Cairo, and by 1260 the last Ayyubid rulers had been swept away, though minor branches lingered in Syria.',
      'The Mamluks who replaced them would go on to destroy the remaining Crusader states and halt the Mongols.'
    ]},
    { title: 'Legacy', paragraphs: [
      'The Ayyubids reunited Egypt and Muslim Syria, restored Sunni Islam in Egypt, and made Saladin an enduring symbol of Muslim resistance to the Crusades. They fortified Cairo’s Citadel and patronised religious colleges (madrasas) across their lands.',
      'Their fall to their own Mamluk soldiers set the pattern for the next three centuries of Egyptian history.'
    ]}
  ],
  timeline: [
    { date: '1171', title: 'Saladin founds the dynasty', description: 'The Fatimid caliphate is abolished and Egypt returns to Sunni rule.', links: [{ title: 'Saladin', type: 'person', slug: 'saladin' }] },
    { date: '1187', title: 'Battle of Hattin and the fall of Jerusalem', description: 'Saladin destroys the Crusader army and retakes Jerusalem.', links: [{ title: 'Battle of Hattin', type: 'event', slug: 'battle-of-hattin' }] },
    { date: '1192', title: 'Truce of the Third Crusade', description: 'Saladin and Richard the Lionheart reach a settlement.', links: [{ title: 'Third Crusade', type: 'event', slug: 'third-crusade' }] },
    { date: '1229', title: 'al-Kamil cedes Jerusalem', description: 'Jerusalem is handed to Frederick II by treaty.', links: [{ title: 'al-Kamil', type: 'person', slug: 'al-kamil' }] },
    { date: '1250', title: 'The Mamluks seize power', description: 'The dynasty’s slave-soldiers overthrow the Egyptian Ayyubids.' }
  ],
  relatedEntries: {
    people: [
      { title: 'Saladin', type: 'person', slug: 'saladin', label: 'Founder' },
      { title: 'al-Adil I', type: 'person', slug: 'al-adil-i', label: 'Reunited the family lands' },
      { title: 'al-Kamil', type: 'person', slug: 'al-kamil', label: 'Ceded Jerusalem by treaty' }
    ],
    events: [
      { title: 'Battle of Hattin', type: 'event', slug: 'battle-of-hattin', label: 'Saladin’s great victory, 1187' },
      { title: 'Third Crusade', type: 'event', slug: 'third-crusade', label: 'Saladin vs. Richard the Lionheart' }
    ],
    locations: [{ title: 'Ayyubid Sultanate', type: 'location', slug: 'ayyubid-sultanate', label: 'Their realm' }]
  },
  sources: [
    { title: 'Ayyubid dynasty — Encyclopaedia Britannica', author: 'Encyclopaedia Britannica', type: 'encyclopedia', url: 'https://www.britannica.com/topic/Ayyubid-dynasty' },
    { title: 'Saladin — Encyclopaedia Britannica', author: 'Encyclopaedia Britannica', type: 'encyclopedia', url: 'https://www.britannica.com/biography/Saladin' },
    { title: 'Ayyubid dynasty — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Ayyubid_dynasty' }
  ]
}

/* ----------------------------------------------------------- SELJUK */
const seljuk = {
  id: 'house-of-seljuk',
  type: 'house',
  name: 'House of Seljuk',
  aliases: ['Seljuk', 'Seljuks', 'Seljuk dynasty', 'Great Seljuk', 'Seljuq', 'Seljuq dynasty', 'Great Seljuq'],
  originYear: 1037,
  endYear: 1194,
  reignSpan: '1037–1194 (Great Seljuks)',
  region: 'Persia, Mesopotamia & Anatolia',
  originPlace: 'Central Asian Turkic steppe',
  arms: 'The Seljuks used no European-style arms; the double-headed eagle and a bow-and-arrow tamga are associated with them',
  image: 'https://commons.wikimedia.org/wiki/Special:FilePath/BnF%20Fr232%20fol323%20Alp%20Arslan%20Romanus.jpg?width=1000',
  imageInfo: {
    caption: 'Sultan Alp Arslan humiliating the captured Byzantine emperor Romanos IV after Manzikert, in a later Western manuscript.',
    creator: 'Manuscript illumination (BnF, Fr. 232)',
    date: '15th-century depiction',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:BnF_Fr232_fol323_Alp_Arslan_Romanus.jpg',
    note: 'A later European depiction of the Seljuk sultan Alp Arslan and his most famous captive.'
  },
  summary: 'The Turkic dynasty that built a great sultanate across Persia and the Near East and, by winning Manzikert, opened Anatolia to the Turks.',
  overview: 'The House of Seljuk led the Oghuz Turks out of Central Asia to build the Great Seljuk Empire across Persia, Iraq, and Syria in the eleventh century. Ruling as sultans in the name of the Abbasid caliph, Tughril Beg, Alp Arslan, and Malik-Shah I presided over a Sunni revival and a cultural golden age, and their victory at Manzikert in 1071 began the Turkish settlement of Anatolia.',
  founder: P('tughril-beg', 'Tughril Beg', 'First Great Seljuk sultan'),
  notableMembers: [
    P('tughril-beg', 'Tughril Beg', 'Founder; entered Baghdad as sultan in 1055'),
    P('alp-arslan', 'Alp Arslan', 'Victor of Manzikert over the Byzantines'),
    P('malik-shah-i', 'Malik-Shah I', 'The empire at its height, with the vizier Nizam al-Mulk')
  ],
  familyTree: {
    caption: 'The Great Seljuk sultans, descended from the eponymous chief Seljuk. Tughril Beg was succeeded by his nephew Alp Arslan, son of his brother Chaghri Beg, and then by Malik-Shah I.',
    root: {
      name: 'Seljuk', note: 'eponymous Oghuz Turkic chief',
      children: [
        { name: 'Tughril Beg', personSlug: 'tughril-beg', note: 'r. 1037–1063' },
        {
          name: 'Chaghri Beg', note: 'Tughril’s brother',
          children: [{
            name: 'Alp Arslan', personSlug: 'alp-arslan', note: 'r. 1063–1072',
            children: [{ name: 'Malik-Shah I', personSlug: 'malik-shah-i', note: 'r. 1072–1092' }]
          }]
        }
      ]
    }
  },
  contentSections: [
    { title: 'Origins', paragraphs: [
      'The dynasty took its name from Seljuk, a chief of the Oghuz Turks who converted to Islam on the Central Asian steppe around 1000. His grandsons Tughril Beg and Chaghri Beg led their followers into Persia, defeating the Ghaznavids and overrunning the region.',
      'In 1055 Tughril Beg entered Baghdad, freed the Abbasid caliph from the control of the Shia Buyids, and was recognised as sultan — temporal protector of Sunni Islam under the caliph’s spiritual authority.'
    ]},
    { title: 'Alp Arslan and Manzikert', paragraphs: [
      'Tughril’s nephew Alp Arslan expanded the empire into Armenia and Syria. In 1071 he met the Byzantine emperor Romanos IV at the Battle of Manzikert and won a crushing victory, capturing the emperor himself.',
      'Manzikert broke Byzantine control of Anatolia and opened the interior to Turkish settlement — one of the decisive battles of the Middle Ages, whose consequences reached to the Crusades and the eventual rise of the Ottomans.'
    ]},
    { title: 'The golden age of Malik-Shah', paragraphs: [
      'Under Malik-Shah I the Great Seljuk Empire reached its height, stretching from the borders of China to the Mediterranean. Much of the credit belongs to his brilliant Persian vizier Nizam al-Mulk, who built a network of madrasas, reformed the administration, and wrote a famous manual of statecraft.',
      'This was an age of Persian cultural flowering under Turkish rule, associated with the poet and astronomer Omar Khayyam and the reform of the calendar.'
    ]},
    { title: 'Fragmentation and legacy', paragraphs: [
      'After Malik-Shah’s death in 1092 the empire fragmented among rival princes and Turkish commanders, and it was in this divided world that the First Crusade arrived in 1096. The Great Seljuk sultanate faded in the twelfth century, though a Seljuk branch ruled the Sultanate of Rum in Anatolia for longer.',
      'The Seljuks left a lasting mark: they entrenched Sunni Islam and the madrasa, spread Persian administrative culture, and — above all — turned Anatolia into the Turkish land it has been ever since.'
    ]}
  ],
  timeline: [
    { date: '1055', title: 'Tughril Beg enters Baghdad', description: 'The caliph recognises the first Seljuk sultan.', links: [{ title: 'Tughril Beg', type: 'person', slug: 'tughril-beg' }] },
    { date: '1071', title: 'Battle of Manzikert', description: 'Alp Arslan defeats and captures the Byzantine emperor.', links: [{ title: 'Battle of Manzikert', type: 'event', slug: 'battle-of-manzikert' }] },
    { date: '1072', title: 'Accession of Malik-Shah', description: 'The empire reaches its height under him and Nizam al-Mulk.', links: [{ title: 'Malik-Shah I', type: 'person', slug: 'malik-shah-i' }] },
    { date: '1092', title: 'Death of Malik-Shah', description: 'The Great Seljuk Empire begins to fragment.' }
  ],
  relatedEntries: {
    people: [
      { title: 'Tughril Beg', type: 'person', slug: 'tughril-beg', label: 'Founder' },
      { title: 'Alp Arslan', type: 'person', slug: 'alp-arslan', label: 'Victor of Manzikert' },
      { title: 'Malik-Shah I', type: 'person', slug: 'malik-shah-i', label: 'The empire at its height' }
    ],
    events: [{ title: 'Battle of Manzikert', type: 'event', slug: 'battle-of-manzikert', label: 'Opened Anatolia to the Turks, 1071' }]
  },
  sources: [
    { title: 'Seljuq dynasty — Encyclopaedia Britannica', author: 'Encyclopaedia Britannica', type: 'encyclopedia', url: 'https://www.britannica.com/topic/Seljuq' },
    { title: 'Alp-Arslan — Encyclopaedia Britannica', author: 'Encyclopaedia Britannica', type: 'encyclopedia', url: 'https://www.britannica.com/biography/Alp-Arslan' },
    { title: 'Seljuk Empire — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Seljuk_Empire' }
  ]
}

if (!Array.isArray(data.houses)) data.houses = []
for (const house of [rurikid, arpad, gediminas, ayyubid, seljuk]) {
  const i = data.houses.findIndex((h) => h.id === house.id)
  if (i >= 0) data.houses[i] = house
  else data.houses.push(house)
}

writeFileSync(dataPath, JSON.stringify(data, null, 2))
console.log(`Batch F written. houses now (${data.houses.length}): ${data.houses.map((h) => h.id).join(', ')}`)
