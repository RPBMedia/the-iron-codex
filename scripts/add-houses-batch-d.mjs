import { readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const dataPath = join(__dirname, '..', 'server', 'data', 'history.json')
const data = JSON.parse(readFileSync(dataPath, 'utf8'))
const P = (slug, displayName, note) => ({ personSlug: slug, displayName, note })

/* ---------------------------------------------------------- KOMNENOS */
const komnenos = {
  id: 'house-of-komnenos',
  type: 'house',
  name: 'House of Komnenos',
  aliases: ['Komnenos', 'Komnenos (first)', 'Komnenian dynasty', 'Komnenoi', 'Comnenus'],
  originYear: 1081,
  endYear: 1185,
  reignSpan: '1081–1185',
  region: 'Byzantine Empire',
  originPlace: 'Paphlagonia (Anatolia)',
  arms: 'The Byzantine double-headed eagle, associated with the Komnenian and later dynasties',
  image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Comnenus%20mosaics%20Hagia%20Sophia.jpg?width=1000',
  imageInfo: {
    caption: 'Emperor John II Komnenos and Empress Irene flanking the Virgin and Child, a contemporary mosaic in Hagia Sophia.',
    creator: 'Byzantine mosaicists, Hagia Sophia, Constantinople',
    date: 'c. 1122',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Comnenus_mosaics_Hagia_Sophia.jpg',
    note: 'A contemporary imperial mosaic of the second Komnenian emperor and his consort.'
  },
  summary: 'The dynasty that restored the Byzantine Empire after the disaster of Manzikert and led it to a last age of power in the twelfth century.',
  overview: 'The House of Komnenos gave Byzantium its great twelfth-century revival. After the empire nearly collapsed following the Battle of Manzikert in 1071, Alexios I seized the throne in 1081 and, with his son John II and grandson Manuel I, rebuilt the army, the finances, and Byzantine prestige — the "Komnenian restoration".',
  founder: P('alexios-i-komnenos', 'Alexios I Komnenos', 'Seized the throne in 1081 and refounded the state'),
  seats: [{ name: 'Byzantine Empire', type: 'location', slug: 'byzantine-empire' }],
  notableMembers: [
    P('isaac-i-komnenos', 'Isaac I Komnenos', 'First Komnenos emperor, 1057–1059'),
    P('alexios-i-komnenos', 'Alexios I Komnenos', 'Founder of the dynasty; called the First Crusade'),
    P('john-ii-komnenos', 'John II Komnenos', 'The "good" emperor; steady reconquest in Anatolia'),
    P('manuel-i-komnenos', 'Manuel I Komnenos', 'The last great Komnenian emperor')
  ],
  familyTree: {
    caption: 'The Komnenian emperors: Isaac I’s brief reign, then the restored dynasty of Alexios I, John II, and Manuel I. ⚭ marks a marriage.',
    root: {
      name: 'Manuel Erotikos Komnenos', note: 'Progenitor of the house',
      children: [
        { name: 'Isaac I Komnenos', personSlug: 'isaac-i-komnenos', note: 'r. 1057–1059, abdicated' },
        {
          name: 'John Komnenos', note: 'Domestic of the Schools',
          children: [{
            name: 'Alexios I Komnenos', personSlug: 'alexios-i-komnenos', note: 'r. 1081–1118',
            spouse: { name: 'Irene Doukaina' },
            children: [{
              name: 'John II Komnenos', personSlug: 'john-ii-komnenos', note: 'r. 1118–1143',
              children: [{ name: 'Manuel I Komnenos', personSlug: 'manuel-i-komnenos', note: 'r. 1143–1180' }]
            }]
          }]
        }
      ]
    }
  },
  contentSections: [
    { title: 'Origins', paragraphs: [
      'The Komnenoi were a military aristocratic family from Paphlagonia in northern Anatolia. Isaac I Komnenos briefly held the throne from 1057 to 1059, but the dynasty’s real founder was his nephew Alexios I, who seized power in 1081 as the empire reeled from civil war and Turkish invasion after the Battle of Manzikert in 1071.',
      'Alexios came to a state that had lost most of Anatolia and faced Norman attacks in the west. His answer was to bind the great families to the throne by marriage and to rebuild the army around the imperial household.'
    ]},
    { title: 'Alexios I and the First Crusade', paragraphs: [
      'Alexios I stabilised the frontiers, defeated the Normans under Robert Guiscard and Bohemond, and beat back the Pechenegs. Needing western mercenaries to recover Anatolia, he appealed to the pope — and received instead the mass movement of the First Crusade in 1096, which he manoeuvred to recover cities such as Nicaea while managing dangerous crusader leaders.',
      'His daughter Anna Komnene recorded his reign in the Alexiad, one of the finest works of medieval Greek history.'
    ]},
    { title: 'John II and Manuel I', paragraphs: [
      'John II Komnenos, widely regarded as the ideal Byzantine emperor, spent his reign on campaign, restoring imperial authority over the Balkans and Anatolia and pressing into Syria. His son Manuel I made Byzantium the arbiter of the eastern Mediterranean, intervening in Italy, Hungary, and the Crusader states and hosting Western kings at his court.',
      'Manuel’s ambitions overreached at the pass of Myriokephalon in 1176, where the Seljuks checked his attempt to destroy their sultanate, ending hopes of fully reconquering Anatolia.'
    ]},
    { title: 'Decline and fall of the dynasty', paragraphs: [
      'Manuel’s death in 1180 left a child heir, and the dynasty consumed itself. His cousin Andronikos I seized power in a bloody coup in 1183, only to be overthrown and torn apart by a Constantinople mob in 1185, ending Komnenian rule in the capital.',
      'A branch of the family later founded the Empire of Trebizond, which survived on the Black Sea until 1461 — a distant afterlife of the house.'
    ]},
    { title: 'Legacy', paragraphs: [
      'The Komnenian restoration bought Byzantium a century of renewed power and cultural brilliance, but it rested on a narrow base of family rule and alliances with the Italian trading cities. When the dynasty collapsed, the weakened empire fell within a generation to the Fourth Crusade in 1204.',
      'For the twelfth century, though, the Komnenoi made Constantinople once more the richest and most sophisticated capital of the Christian world.'
    ]}
  ],
  timeline: [
    { date: '1057', title: 'Isaac I takes the throne', description: 'The first Komnenos briefly becomes emperor.', links: [{ title: 'Isaac I Komnenos', type: 'person', slug: 'isaac-i-komnenos' }] },
    { date: '1081', title: 'Alexios I refounds the dynasty', description: 'Alexios seizes power and begins the Komnenian restoration.', links: [{ title: 'Alexios I Komnenos', type: 'person', slug: 'alexios-i-komnenos' }] },
    { date: '1096', title: 'The First Crusade arrives', description: 'Alexios channels the western armies to recover Byzantine territory.', links: [{ title: 'Battle of Manzikert', type: 'event', slug: 'battle-of-manzikert' }] },
    { date: '1143', title: 'Accession of Manuel I', description: 'The last great Komnenian emperor takes the throne.', links: [{ title: 'Manuel I Komnenos', type: 'person', slug: 'manuel-i-komnenos' }] },
    { date: '1176', title: 'Check at Myriokephalon', description: 'The Seljuks halt Manuel’s bid to reconquer Anatolia.' },
    { date: '1185', title: 'Fall of the dynasty', description: 'Andronikos I is lynched and Komnenian rule in the capital ends.' }
  ],
  relatedEntries: {
    people: [
      { title: 'Alexios I Komnenos', type: 'person', slug: 'alexios-i-komnenos', label: 'Founder' },
      { title: 'John II Komnenos', type: 'person', slug: 'john-ii-komnenos', label: 'The ideal emperor' },
      { title: 'Manuel I Komnenos', type: 'person', slug: 'manuel-i-komnenos', label: 'Height of the restoration' }
    ],
    events: [{ title: 'Battle of Manzikert', type: 'event', slug: 'battle-of-manzikert', label: 'The 1071 disaster the dynasty recovered from' }],
    locations: [{ title: 'Byzantine Empire', type: 'location', slug: 'byzantine-empire', label: 'The realm they restored' }]
  },
  sources: [
    { title: 'Komnenos dynasty — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Komnenos' },
    { title: 'Alexius I Comnenus — Encyclopaedia Britannica', author: 'Encyclopaedia Britannica', type: 'encyclopedia', url: 'https://www.britannica.com/biography/Alexius-I-Comnenus' },
    { title: 'Byzantine Empire: The Komnenian restoration — Encyclopaedia Britannica', author: 'Encyclopaedia Britannica', type: 'encyclopedia', url: 'https://www.britannica.com/place/Byzantine-Empire' }
  ]
}

/* -------------------------------------------------------- PALAIOLOGOS */
const palaiologos = {
  id: 'house-of-palaiologos',
  type: 'house',
  name: 'House of Palaiologos',
  aliases: ['Palaiologos', 'Palaiologan dynasty', 'Palaiologoi', 'Palaeologus'],
  originYear: 1259,
  endYear: 1453,
  reignSpan: '1259–1453',
  region: 'Byzantine Empire',
  originPlace: 'Constantinople',
  arms: 'The Palaiologan tetragrammic cross — a cross with four beta-shaped firesteels, the dynasty’s emblem',
  image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Manuel%20II%20Palaiologos%20(cropped).jpg?width=1000',
  imageInfo: {
    caption: 'Emperor Manuel II Palaiologos, who toured Western Europe seeking help against the Ottomans.',
    creator: 'Byzantine manuscript depiction',
    date: 'Early 15th century',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Manuel_II_Palaiologos_(cropped).jpg',
    note: 'A period depiction of a late Palaiologan emperor; the dynasty ruled the empire’s final two centuries.'
  },
  summary: 'The last Byzantine dynasty, which recovered Constantinople in 1261 and ruled the shrinking empire until its fall in 1453.',
  overview: 'The House of Palaiologos was Byzantium’s longest-reigning and final dynasty. Michael VIII recovered Constantinople from the Latins in 1261, but the emperors who followed presided over a steadily shrinking state, squeezed between Serbs, Latins, and above all the rising Ottomans, until Constantine XI died defending the walls in 1453.',
  founder: { displayName: 'Michael VIII Palaiologos', note: 'Recovered Constantinople from the Latin Empire in 1261 (no Codex article yet)' },
  seats: [
    { name: 'Byzantine Empire', type: 'location', slug: 'byzantine-empire' },
    { name: 'Constantinople', type: 'location', slug: 'constantinople' }
  ],
  notableMembers: [
    P('manuel-ii-palaiologos', 'Manuel II Palaiologos', 'Toured Europe seeking aid against the Ottomans'),
    P('john-viii-palaiologos', 'John VIII Palaiologos', 'Sought Church union at Florence to win Western help'),
    P('constantine-xi-palaiologos', 'Constantine XI Palaiologos', 'Last Byzantine emperor; died defending the walls in 1453')
  ],
  familyTree: {
    caption: 'The final Palaiologan emperors. Michael VIII founded the dynasty in 1261; its last two emperors, John VIII and Constantine XI, were sons of Manuel II. ⚭ marks a marriage.',
    root: {
      name: 'Manuel II Palaiologos', personSlug: 'manuel-ii-palaiologos', note: 'r. 1391–1425',
      children: [
        { name: 'John VIII Palaiologos', personSlug: 'john-viii-palaiologos', note: 'r. 1425–1448' },
        { name: 'Constantine XI Palaiologos', personSlug: 'constantine-xi-palaiologos', note: 'r. 1449–1453, last emperor' }
      ]
    }
  },
  contentSections: [
    { title: 'Origins', paragraphs: [
      'When the Fourth Crusade sacked Constantinople in 1204, the Byzantine state survived in exile at Nicaea. There the general Michael Palaiologos usurped the throne and, in 1261, recaptured Constantinople from the Latin Empire, founding the dynasty as Michael VIII.',
      'The restored empire was a shadow of its former self — bankrupt, surrounded, and dependent on Italian sea power — but the Palaiologoi would rule what remained of it for nearly two centuries.'
    ]},
    { title: 'A shrinking empire', paragraphs: [
      'The fourteenth century brought civil wars between rival Palaiologan emperors, the loss of Anatolia to the Turks, and the rise of a Serbian empire under Stefan Dušan. Repeated dynastic strife, sometimes fought with Ottoman mercenaries, hastened the collapse of imperial power.',
      'By 1400 the empire had dwindled to Constantinople, a stretch of Greece, and a few islands, its emperors increasingly vassals or suppliants of the Ottoman sultans.'
    ]},
    { title: 'The search for Western help', paragraphs: [
      'Manuel II Palaiologos travelled as far as England and France pleading for aid, and his son John VIII accepted union between the Orthodox and Catholic churches at the Council of Florence in 1439 in a last bid for a crusade. The union was rejected by most of the Byzantine clergy and people and brought no effective help.',
      'The famous saying "better the sultan’s turban than the cardinal’s hat" captured the depth of resistance to Rome in the dying empire.'
    ]},
    { title: 'The fall of Constantinople', paragraphs: [
      'Constantine XI, the last emperor, faced Mehmed II’s siege in 1453 with only a few thousand defenders against a vast Ottoman army and its great cannon. When the walls were breached on 29 May, Constantine died fighting in the streets, and the Fall of Constantinople ended both the dynasty and the Roman Empire that had endured for a thousand years in the East.',
      'His body was never certainly identified, and he passed into legend as the "marble emperor" who would one day return.'
    ]},
    { title: 'Legacy', paragraphs: [
      'The Palaiologan era, for all its political decline, produced a brilliant late flowering of Byzantine art, scholarship, and theology — the "Palaiologan Renaissance" — whose scholars helped carry Greek learning to the Italian Renaissance.',
      'The double-headed eagle and the traditions of the last Christian Roman emperors passed into the heraldry and ideology of later states that claimed the Byzantine inheritance.'
    ]}
  ],
  timeline: [
    { date: '1261', title: 'Michael VIII recovers Constantinople', description: 'The Palaiologos dynasty is founded on the recaptured capital.' },
    { date: '1354', title: 'Ottomans cross into Europe', description: 'Gallipoli falls as Palaiologan civil wars weaken the empire.' },
    { date: '1391', title: 'Accession of Manuel II', description: 'An emperor who tours Europe for help takes the throne.', links: [{ title: 'Manuel II Palaiologos', type: 'person', slug: 'manuel-ii-palaiologos' }] },
    { date: '1439', title: 'Council of Florence', description: 'John VIII accepts Church union in a failed bid for Western aid.', links: [{ title: 'John VIII Palaiologos', type: 'person', slug: 'john-viii-palaiologos' }] },
    { date: '1453', title: 'Fall of Constantinople', description: 'Constantine XI dies defending the city; the empire ends.', links: [{ title: 'Fall of Constantinople', type: 'event', slug: 'fall-of-constantinople' }] }
  ],
  relatedEntries: {
    people: [
      { title: 'Manuel II Palaiologos', type: 'person', slug: 'manuel-ii-palaiologos', label: 'Sought Western aid' },
      { title: 'John VIII Palaiologos', type: 'person', slug: 'john-viii-palaiologos', label: 'Church union at Florence' },
      { title: 'Constantine XI Palaiologos', type: 'person', slug: 'constantine-xi-palaiologos', label: 'Last emperor' }
    ],
    events: [{ title: 'Fall of Constantinople', type: 'event', slug: 'fall-of-constantinople', label: 'The dynasty’s and the empire’s end, 1453' }],
    locations: [
      { title: 'Byzantine Empire', type: 'location', slug: 'byzantine-empire', label: 'The realm they ruled' },
      { title: 'Constantinople', type: 'location', slug: 'constantinople', label: 'Capital, recovered 1261 and lost 1453' }
    ]
  },
  sources: [
    { title: 'Palaiologos — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Palaiologos' },
    { title: 'Constantine XI Palaiologos — Encyclopaedia Britannica', author: 'Encyclopaedia Britannica', type: 'encyclopedia', url: 'https://www.britannica.com/biography/Constantine-XI-Palaeologus' },
    { title: 'Fall of Constantinople — Encyclopaedia Britannica', author: 'Encyclopaedia Britannica', type: 'encyclopedia', url: 'https://www.britannica.com/event/Fall-of-Constantinople-1453' }
  ]
}

/* ------------------------------------------------------- HOHENSTAUFEN */
const hohenstaufen = {
  id: 'house-of-hohenstaufen',
  type: 'house',
  name: 'House of Hohenstaufen',
  aliases: ['Hohenstaufen', 'Staufen', 'Staufer', 'Staufer dynasty', 'Hohenstaufen dynasty'],
  originYear: 1138,
  endYear: 1268,
  reignSpan: '1138–1268',
  region: 'Holy Roman Empire & Sicily',
  originPlace: 'Swabia',
  arms: 'Or, three lions passant sable — the arms attributed to the Hohenstaufen',
  image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Barbarossa.jpg?width=1000',
  imageInfo: {
    caption: 'Emperor Frederick I Barbarossa as a crusader, in a medieval manuscript.',
    creator: 'Medieval manuscript illumination',
    date: '1188 (manuscript of the Historia Hierosolymitana)',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Barbarossa.jpg',
    note: 'A near-contemporary manuscript image of the dynasty’s most famous emperor dressed as a crusader.'
  },
  summary: 'The Swabian dynasty that ruled the Holy Roman Empire at its medieval height and, through marriage, the Kingdom of Sicily.',
  overview: 'The House of Hohenstaufen produced some of the most powerful medieval emperors. From Conrad III through Frederick Barbarossa, Henry VI, and the extraordinary Frederick II, the Staufen fought to make the Holy Roman Empire a real monarchy, clashed repeatedly with the papacy and the Lombard cities, and united the Empire with the Norman kingdom of Sicily.',
  founder: { displayName: 'Frederick I, Duke of Swabia', note: 'First Staufen duke; father of the royal line (no Codex article yet)' },
  seats: [{ name: 'Holy Roman Empire', type: 'location', slug: 'holy-roman-empire' }],
  notableMembers: [
    P('conrad-iii-of-germany', 'Conrad III', 'First Hohenstaufen king of Germany'),
    P('frederick-i-barbarossa', 'Frederick I Barbarossa', 'Fought the Lombard League and the papacy; drowned on crusade'),
    P('henry-vi-holy-roman-emperor', 'Henry VI', 'United the Empire with the Norman kingdom of Sicily'),
    P('frederick-ii-holy-roman-emperor', 'Frederick II', 'The "wonder of the world"; emperor and king of Sicily')
  ],
  familyTree: {
    caption: 'The Hohenstaufen kings and emperors, from Conrad III and Frederick Barbarossa to Henry VI and Frederick II. Henry VI’s marriage to Constance of Sicily brought the Sicilian crown into the house.',
    root: {
      name: 'Frederick I, Duke of Swabia', note: 'Founder of the Staufen line',
      children: [
        { name: 'Conrad III', personSlug: 'conrad-iii-of-germany', note: 'King of Germany, r. 1138–1152' },
        {
          name: 'Frederick II, Duke of Swabia', note: 'Did not reign as king',
          children: [{
            name: 'Frederick I Barbarossa', personSlug: 'frederick-i-barbarossa', note: 'Emperor, r. 1155–1190',
            children: [{
              name: 'Henry VI', personSlug: 'henry-vi-holy-roman-emperor', note: 'Emperor, r. 1191–1197',
              spouse: { name: 'Constance of Sicily' },
              children: [{
                name: 'Frederick II', personSlug: 'frederick-ii-holy-roman-emperor', note: 'Emperor & King of Sicily, r. 1220–1250',
                children: [{ name: 'Conrad IV', note: 'Last Staufen king, d. 1254', branch: 'Line ended 1268 (Conradin)' }]
              }]
            }]
          }]
        }
      ]
    }
  },
  contentSections: [
    { title: 'Origins', paragraphs: [
      'The Staufen were dukes of Swabia who rose to the German throne when Conrad III was elected king in 1138, beginning a long rivalry with the Welf family — the Guelf-versus-Ghibelline struggle that would divide Italy for centuries. The dynasty took its name from the castle of Hohenstaufen.',
      'Conrad’s reign was troubled, but his nephew Frederick, who succeeded in 1152, would make the house the dominant power in Europe.'
    ]},
    { title: 'Frederick Barbarossa', paragraphs: [
      'Frederick I "Barbarossa" spent his long reign trying to turn the Holy Roman Empire into an effective monarchy, above all by mastering the wealthy cities of northern Italy. His defeat by the Lombard League at Legnano in 1176 forced a compromise, but he restored imperial prestige and arranged his son’s marriage to the heiress of Sicily.',
      'Barbarossa died in 1190 crossing a river in Anatolia during the Third Crusade, and passed into German legend as the emperor sleeping under a mountain who would one day return.'
    ]},
    { title: 'Henry VI and the Sicilian union', paragraphs: [
      'Henry VI married Constance of Sicily, heiress of the Norman House of Hauteville, and by 1194 had conquered the Kingdom of Sicily, uniting it with the Empire and encircling the Papal States. Ruthless and ambitious, he was planning further conquests when he died suddenly in 1197, leaving a three-year-old heir.',
      'The union of Empire and Sicily made the Hohenstaufen immensely powerful but set them on a collision course with a papacy determined never to be surrounded.'
    ]},
    { title: 'Frederick II, "wonder of the world"', paragraphs: [
      'Frederick II, raised in multicultural Sicily, was the most remarkable ruler of his age — a lawgiver, patron of scholars, and author of a famous treatise on falconry, who governed a brilliant court at Palermo and negotiated the return of Jerusalem on the Sixth Crusade without a battle. Contemporaries called him stupor mundi, the "wonder of the world".',
      'His endless war with the papacy, which excommunicated him repeatedly and branded him Antichrist, consumed his later reign and undermined the dynasty’s German base.'
    ]},
    { title: 'Fall of the house', paragraphs: [
      'After Frederick II’s death in 1250 the papacy set out to destroy his line. His son Conrad IV died in 1254, his illegitimate son Manfred fell in battle against the papal champion Charles of Anjou at Benevento in 1266, and his sixteen-year-old grandson Conradin was captured and beheaded in Naples in 1268, extinguishing the house.',
      'The fall of the Hohenstaufen left the Empire without a strong dynasty for decades — the "Great Interregnum" — and passed Sicily to the Angevins, reshaping the politics of Italy and Germany alike.'
    ]}
  ],
  timeline: [
    { date: '1138', title: 'Conrad III elected king', description: 'The Hohenstaufen take the German throne.', links: [{ title: 'Conrad III', type: 'person', slug: 'conrad-iii-of-germany' }] },
    { date: '1155', title: 'Barbarossa crowned emperor', description: 'Frederick I begins his long struggle for imperial power in Italy.', links: [{ title: 'Frederick I Barbarossa', type: 'person', slug: 'frederick-i-barbarossa' }] },
    { date: '1190', title: 'Barbarossa dies on crusade', description: 'The emperor drowns in Anatolia during the Third Crusade.', links: [{ title: 'Third Crusade', type: 'event', slug: 'third-crusade' }] },
    { date: '1194', title: 'Henry VI conquers Sicily', description: 'The Empire and the Norman kingdom of Sicily are united.', links: [{ title: 'Henry VI', type: 'person', slug: 'henry-vi-holy-roman-emperor' }] },
    { date: '1220', title: 'Frederick II crowned emperor', description: 'The "wonder of the world" reunites Empire and Sicily.', links: [{ title: 'Frederick II', type: 'person', slug: 'frederick-ii-holy-roman-emperor' }] },
    { date: '1268', title: 'Execution of Conradin', description: 'The last Hohenstaufen is beheaded in Naples; the house ends.' }
  ],
  relatedEntries: {
    people: [
      { title: 'Frederick I Barbarossa', type: 'person', slug: 'frederick-i-barbarossa', label: 'The great emperor' },
      { title: 'Henry VI', type: 'person', slug: 'henry-vi-holy-roman-emperor', label: 'United Empire and Sicily' },
      { title: 'Frederick II', type: 'person', slug: 'frederick-ii-holy-roman-emperor', label: '"Wonder of the world"' }
    ],
    events: [{ title: 'Third Crusade', type: 'event', slug: 'third-crusade', label: 'Barbarossa died leading it' }],
    locations: [{ title: 'Holy Roman Empire', type: 'location', slug: 'holy-roman-empire', label: 'Their empire' }]
  },
  sources: [
    { title: 'Hohenstaufen — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Hohenstaufen' },
    { title: 'Hohenstaufen dynasty — Encyclopaedia Britannica', author: 'Encyclopaedia Britannica', type: 'encyclopedia', url: 'https://www.britannica.com/topic/Hohenstaufen-dynasty' },
    { title: 'Frederick II — Encyclopaedia Britannica', author: 'Encyclopaedia Britannica', type: 'encyclopedia', url: 'https://www.britannica.com/biography/Frederick-II-Holy-Roman-emperor' }
  ]
}

/* -------------------------------------------------------- CAROLINGIAN */
const carolingian = {
  id: 'house-of-carolingian',
  type: 'house',
  name: 'Carolingian dynasty',
  aliases: ['Carolingian', 'Carolingian (founder as king)', 'Carolingian (last)', 'Carolingians', 'House of Charlemagne', 'Carolingian dynasty'],
  originYear: 751,
  endYear: 987,
  reignSpan: '751–987',
  region: 'Frankish Empire',
  originPlace: 'Austrasia (Frankish heartland)',
  arms: 'No medieval coat of arms; the dynasty is symbolised by Charlemagne’s monogram and imperial seal',
  image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Statuette%20%C3%A9questre%20dite%20de%20Charlemagne%20-%20Mus%C3%A9e%20du%20Louvre%20Objets%20d%27Art%20OA%208260.jpg?width=1000',
  imageInfo: {
    caption: 'The bronze equestrian statuette traditionally identified as Charlemagne, the dynasty’s greatest ruler.',
    creator: 'Carolingian metalwork (Louvre, OA 8260)',
    date: '9th century',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Statuette_%C3%A9questre_dite_de_Charlemagne_-_Mus%C3%A9e_du_Louvre_Objets_d%27Art_OA_8260.jpg',
    note: 'A rare Carolingian bronze; the identification as Charlemagne is traditional rather than certain.'
  },
  summary: 'The Frankish dynasty of Charlemagne, which built a Christian empire across western Europe and gave its name to the Carolingian Renaissance.',
  overview: 'The Carolingians rose from the Frankish mayors of the palace to kingship under Pepin the Short in 751, and to a revived Western empire under Charlemagne, crowned in Rome in 800. They reshaped medieval Europe — its church, learning, script, and administration — before the empire fragmented and the dynasty faded, ending in the West with Louis V in 987.',
  founder: P('charles-martel', 'Charles Martel', 'Frankish leader who founded the family’s power and halted the Arabs at Tours'),
  seats: [
    { name: 'Carolingian Empire', type: 'location', slug: 'carolingian-empire' },
    { name: 'Frankish Kingdom', type: 'location', slug: 'frankish-kingdom' }
  ],
  notableMembers: [
    P('charles-martel', 'Charles Martel', 'Halted the Arab advance at Tours in 732'),
    P('pepin-the-short', 'Pepin the Short', 'First Carolingian king of the Franks, 751'),
    P('charlemagne', 'Charlemagne', 'Emperor of the West; the dynasty’s greatest figure'),
    P('louis-the-pious', 'Louis the Pious', 'Held the empire together, but his sons divided it'),
    P('lothair-i', 'Lothair I', 'Emperor after the Treaty of Verdun split the empire'),
    P('louis-v-of-france', 'Louis V', 'Last Carolingian king of the Franks, d. 987')
  ],
  familyTree: {
    caption: 'The early Carolingian main line, from Charles Martel to the sons of Louis the Pious, whose Treaty of Verdun in 843 split the empire. The West Frankish royal line continued to Louis V (d. 987), several generations later.',
    root: {
      name: 'Charles Martel', personSlug: 'charles-martel', note: 'Mayor of the Palace, d. 741',
      children: [{
        name: 'Pepin the Short', personSlug: 'pepin-the-short', note: 'King of the Franks, r. 751–768',
        children: [{
          name: 'Charlemagne', personSlug: 'charlemagne', note: 'Emperor, r. 768–814',
          children: [{
            name: 'Louis the Pious', personSlug: 'louis-the-pious', note: 'Emperor, r. 814–840',
            children: [{ name: 'Lothair I', personSlug: 'lothair-i', note: 'Emperor, r. 840–855', branch: 'Treaty of Verdun (843) split the empire' }]
          }]
        }]
      }]
    }
  },
  contentSections: [
    { title: 'Origins', paragraphs: [
      'The family rose through the office of mayor of the palace in the Frankish kingdom, the real power behind the fading Merovingian kings. Charles Martel, the "Hammer", defeated an Arab-Berber army at the Battle of Tours in 732 and ruled the Franks in all but name.',
      'His son Pepin the Short took the final step in 751, deposing the last Merovingian and having himself anointed king with papal blessing — a sacral kingship that bound the new dynasty to the Church.'
    ]},
    { title: 'Charlemagne and the empire', paragraphs: [
      'Charlemagne conquered on every front — Lombard Italy, Saxony, Bavaria, and the Spanish March — welding much of western Europe into a single realm. On Christmas Day 800 Pope Leo III crowned him Emperor of the Romans, reviving an imperial title in the West for the first time since antiquity.',
      'He governed through counts, missi dominici, capitularies, and a network of bishops and abbots, and made his court at Aachen the centre of a revival of learning and Latin culture.'
    ]},
    { title: 'The Carolingian Renaissance', paragraphs: [
      'Charlemagne and his scholars, led by Alcuin of York, gathered manuscripts, standardised the liturgy, reformed education, and developed the clear Caroline minuscule script — the ancestor of modern lower-case letters — through which much classical literature survives.',
      'This "Carolingian Renaissance" gave medieval Europe a shared Latin Christian culture that long outlived the political empire.'
    ]},
    { title: 'Division and decline', paragraphs: [
      'Louis the Pious struggled to hold the empire together against his own rebellious sons, and after his death the Treaty of Verdun in 843 partitioned it three ways — the seed of later France and Germany. Repeated divisions, Viking raids, and the rise of powerful regional nobles steadily eroded royal authority.',
      'By the tenth century Carolingian kings were often figureheads, and rival families such as the Robertians (later Capetians) held the real power in West Francia.'
    ]},
    { title: 'End of the line and legacy', paragraphs: [
      'The dynasty ended in East Francia in 911 and in West Francia in 987, when Louis V died and the magnates chose Hugh Capet as king instead of a Carolingian claimant, beginning the Capetian age.',
      'Yet the Carolingian legacy was foundational: the alliance of Frankish kingship and the Church, the ideal of a Christian empire, the reformed script and schools, and the very map of medieval Europe all descended from Charlemagne’s house.'
    ]}
  ],
  timeline: [
    { date: '732', title: 'Battle of Tours', description: 'Charles Martel halts the Arab advance into Francia.', links: [{ title: 'Battle of Tours', type: 'event', slug: 'battle-of-tours' }] },
    { date: '751', title: 'Pepin becomes king', description: 'The Carolingians replace the Merovingian dynasty.', links: [{ title: 'Pepin the Short', type: 'person', slug: 'pepin-the-short' }] },
    { date: '800', title: 'Charlemagne crowned emperor', description: 'The imperial title is revived in the West.', links: [{ title: 'Charlemagne', type: 'person', slug: 'charlemagne' }] },
    { date: '843', title: 'Treaty of Verdun', description: 'The empire is divided among Louis the Pious’s sons.', links: [{ title: 'Lothair I', type: 'person', slug: 'lothair-i' }] },
    { date: '987', title: 'End of the West Frankish line', description: 'Louis V dies and Hugh Capet is chosen king.', links: [{ title: 'Louis V', type: 'person', slug: 'louis-v-of-france' }] }
  ],
  relatedEntries: {
    people: [
      { title: 'Charles Martel', type: 'person', slug: 'charles-martel', label: 'Founder of the family’s power' },
      { title: 'Charlemagne', type: 'person', slug: 'charlemagne', label: 'Emperor of the West' },
      { title: 'Louis the Pious', type: 'person', slug: 'louis-the-pious', label: 'Held the empire together' }
    ],
    events: [{ title: 'Battle of Tours', type: 'event', slug: 'battle-of-tours', label: 'Charles Martel’s victory, 732' }],
    locations: [
      { title: 'Carolingian Empire', type: 'location', slug: 'carolingian-empire', label: 'The empire they built' },
      { title: 'Frankish Kingdom', type: 'location', slug: 'frankish-kingdom', label: 'Their royal realm' }
    ]
  },
  sources: [
    { title: 'Carolingian dynasty — Encyclopaedia Britannica', author: 'Encyclopaedia Britannica', type: 'encyclopedia', url: 'https://www.britannica.com/topic/Carolingian-dynasty' },
    { title: 'Carolingian dynasty — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Carolingian_dynasty' },
    { title: 'Charlemagne — Encyclopaedia Britannica', author: 'Encyclopaedia Britannica', type: 'encyclopedia', url: 'https://www.britannica.com/biography/Charlemagne' }
  ]
}

if (!Array.isArray(data.houses)) data.houses = []
for (const house of [komnenos, palaiologos, hohenstaufen, carolingian]) {
  const i = data.houses.findIndex((h) => h.id === house.id)
  if (i >= 0) data.houses[i] = house
  else data.houses.push(house)
}

writeFileSync(dataPath, JSON.stringify(data, null, 2))
console.log(`Batch D written. houses now (${data.houses.length}): ${data.houses.map((h) => h.id).join(', ')}`)
