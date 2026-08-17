import { readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const dataPath = join(__dirname, '..', 'server', 'data', 'history.json')
const data = JSON.parse(readFileSync(dataPath, 'utf8'))
const P = (slug, displayName, note) => ({ personSlug: slug, displayName, note })

/* ----------------------------------------------------------- JELLING */
const jelling = {
  id: 'house-of-jelling',
  type: 'house',
  name: 'House of Jelling',
  aliases: ['Jelling dynasty', 'Knýtlinga', 'House of Knýtlinga', 'House of Knýtlinga (Denmark)', 'House of Knýtlinga (Jelling line)', 'House of Denmark'],
  originYear: 936,
  endYear: 1042,
  reignSpan: 'c. 936–1042',
  region: 'Denmark, England & Norway',
  originPlace: 'Jelling, Jutland',
  arms: 'No medieval coat of arms; the dynasty is symbolised by the great runestone of Jelling',
  image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Jelling%20stone.jpg?width=1000',
  imageInfo: {
    caption: 'The larger Jelling stone, raised by Harald Bluetooth to proclaim his unification and Christianisation of Denmark — often called Denmark’s "birth certificate".',
    creator: 'Harald Bluetooth (runestone, Jelling)',
    date: 'c. 965–970',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Jelling_stone.jpg',
    note: 'A contemporary monument of the dynasty itself, naming Gorm, Thyra, and Harald and recording Denmark’s conversion.'
  },
  summary: 'The Viking-age dynasty of Gorm the Old that unified Denmark, converted it to Christianity, and under Cnut the Great ruled a North Sea empire including England.',
  overview: 'The House of Jelling, also called the Knýtlinga, took Denmark from a patchwork of chieftaincies to a Christian kingdom and then to the summit of Viking power. From Gorm the Old and Harald Bluetooth through Sweyn Forkbeard to Cnut the Great, the dynasty conquered England and briefly ruled a North Sea empire spanning Denmark, England, and Norway.',
  founder: P('gorm-the-old', 'Gorm the Old', 'First historically attested king of a united Denmark'),
  seats: [
    { name: 'Kingdom of Denmark', type: 'location', slug: 'kingdom-of-denmark' },
    { name: 'North Sea Empire', type: 'location', slug: 'north-sea-empire' }
  ],
  notableMembers: [
    P('gorm-the-old', 'Gorm the Old', 'Founder of the dynasty at Jelling'),
    P('harald-bluetooth', 'Harald Bluetooth', 'United Denmark and adopted Christianity'),
    P('sweyn-forkbeard', 'Sweyn Forkbeard', 'Conquered England in 1013'),
    P('harald-ii-of-denmark', 'Harald II', 'King of Denmark while Cnut fought in England'),
    P('cnut-the-great', 'Cnut the Great', 'Ruled the North Sea empire of England, Denmark, and Norway'),
    P('harold-harefoot', 'Harold Harefoot', 'Cnut’s son; king of England 1035–1040'),
    P('harthacnut', 'Harthacnut', 'Last Jelling king of England and Denmark')
  ],
  familyTree: {
    caption: 'The Jelling (Knýtlinga) dynasty from Gorm the Old to Cnut the Great’s sons, whose deaths without heirs ended the North Sea empire. ⚭ marks a marriage.',
    root: {
      name: 'Gorm the Old', personSlug: 'gorm-the-old', note: 'd. c. 958',
      spouse: { name: 'Thyra' },
      children: [{
        name: 'Harald Bluetooth', personSlug: 'harald-bluetooth', note: 'r. c. 958–986',
        children: [{
          name: 'Sweyn Forkbeard', personSlug: 'sweyn-forkbeard', note: 'r. 986–1014',
          children: [
            { name: 'Harald II', personSlug: 'harald-ii-of-denmark', note: 'r. 1014–1018' },
            {
              name: 'Cnut the Great', personSlug: 'cnut-the-great', note: 'r. 1016/18–1035',
              children: [
                { name: 'Harold Harefoot', personSlug: 'harold-harefoot', note: 'r. England 1035–1040' },
                { name: 'Harthacnut', personSlug: 'harthacnut', note: 'r. 1035/40–1042, no heir' }
              ]
            }
          ]
        }]
      }]
    }
  },
  contentSections: [
    { title: 'Origins', paragraphs: [
      'The dynasty is named for its seat at Jelling in Jutland, where the first securely historical king, Gorm the Old, ruled in the early tenth century. His son Harald Bluetooth raised the great Jelling runestone claiming to have "won all Denmark for himself" and to have made the Danes Christian — the founding monument of the Danish kingdom.',
      'Harald’s reign brought royal power, a network of ring fortresses, and the conversion that tied Denmark to Latin Christendom, though old Norse religion and Viking raiding continued.'
    ]},
    { title: 'The conquest of England', paragraphs: [
      'Harald’s son Sweyn Forkbeard turned Danish power outward, raiding England for years and finally conquering it in 1013, driving out King Æthelred the Unready. Sweyn died months later in 1014, and his son Cnut had to win the kingdom again, defeating Edmund Ironside and becoming king of England in 1016.',
      'The Jelling kings thus achieved what generations of Vikings had only raided for: the throne of England itself.'
    ]},
    { title: 'Cnut and the North Sea empire', paragraphs: [
      'Cnut the Great ruled England, Denmark, and for a time Norway as a single North Sea empire, governing England through English earls and law while drawing on Scandinavian military power. He made a celebrated pilgrimage to Rome in 1027 and presented himself as a Christian European king rather than a Viking raider.',
      'The famous story of Cnut commanding the tide — usually misremembered — was told to show his humility before God, not his arrogance: he set his throne at the sea’s edge to prove that even a king’s power had limits.'
    ]},
    { title: 'Collapse of the empire', paragraphs: [
      'Cnut’s empire depended on his own person and did not survive his death in 1035. His sons Harold Harefoot and Harthacnut divided and disputed the inheritance, and both died young and without heirs — Harthacnut in 1042.',
      'The English throne then returned to the West Saxon line under Edward the Confessor, while in Denmark the crown passed to Cnut’s nephew Sweyn Estridsson, founder of the House of Estridsen.'
    ]},
    { title: 'Legacy', paragraphs: [
      'The Jelling dynasty made Denmark a Christian kingdom and, for a generation, the centre of a North Sea empire that placed a Danish king on the English throne. Its monuments at Jelling remain the oldest royal record of the Danish state.',
      'Its brief mastery of England left a lasting mark on English law, land-holding, and the Anglo-Scandinavian character of eleventh-century England, and set the stage for the succession crisis of 1066.'
    ]}
  ],
  timeline: [
    { date: 'c. 958', title: 'Harald Bluetooth succeeds Gorm', description: 'The Jelling stone proclaims a united, Christian Denmark.', links: [{ title: 'Harald Bluetooth', type: 'person', slug: 'harald-bluetooth' }] },
    { date: '1013', title: 'Sweyn Forkbeard conquers England', description: 'Æthelred the Unready is driven out.', links: [{ title: 'Sweyn Forkbeard', type: 'person', slug: 'sweyn-forkbeard' }] },
    { date: '1016', title: 'Cnut becomes king of England', description: 'After defeating Edmund Ironside, Cnut takes the English throne.', links: [{ title: 'Cnut the Great', type: 'person', slug: 'cnut-the-great' }] },
    { date: '1027', title: 'Cnut’s pilgrimage to Rome', description: 'The North Sea emperor presents himself as a Christian king.' },
    { date: '1042', title: 'Death of Harthacnut', description: 'The Jelling line ends; the English crown returns to the West Saxons.', links: [{ title: 'Harthacnut', type: 'person', slug: 'harthacnut' }] }
  ],
  relatedEntries: {
    people: [
      { title: 'Harald Bluetooth', type: 'person', slug: 'harald-bluetooth', label: 'United and Christianised Denmark' },
      { title: 'Sweyn Forkbeard', type: 'person', slug: 'sweyn-forkbeard', label: 'Conquered England' },
      { title: 'Cnut the Great', type: 'person', slug: 'cnut-the-great', label: 'North Sea emperor' }
    ],
    locations: [
      { title: 'Kingdom of Denmark', type: 'location', slug: 'kingdom-of-denmark', label: 'Their kingdom' },
      { title: 'North Sea Empire', type: 'location', slug: 'north-sea-empire', label: 'Cnut’s realm' }
    ]
  },
  sources: [
    { title: 'House of Knýtlinga — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/House_of_Knýtlinga' },
    { title: 'Canute (the Great) — Encyclopaedia Britannica', author: 'Encyclopaedia Britannica', type: 'encyclopedia', url: 'https://www.britannica.com/biography/Canute-I' },
    { title: 'Jelling stones — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Jelling_stones' }
  ]
}

/* ---------------------------------------------------------- FAIRHAIR */
const fairhair = {
  id: 'house-of-fairhair',
  type: 'house',
  name: 'House of Fairhair',
  aliases: ['Fairhair dynasty', 'Fairhair dynasty / saga tradition', 'Fairhair line (Eirikssons)', 'Norwegian royal line', 'Norwegian royal line / saga tradition', 'Hardrada line', 'Hardrada / Norwegian royal line', 'Saint Olaf’s line', 'Hårfagre'],
  originYear: 872,
  endYear: 1130,
  reignSpan: 'c. 872–1130 (traditional)',
  region: 'Kingdom of Norway',
  originPlace: 'Norway',
  arms: 'The Norwegian lion with the axe of St Olaf became the royal emblem only in the later medieval period',
  image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Harold%20Fairhair%20Flateyjarbok.jpg?width=1000',
  imageInfo: {
    caption: 'Harald Fairhair, traditional unifier of Norway, in a scene from the 14th-century Icelandic manuscript Flateyjarbók.',
    creator: 'Icelandic manuscript illumination (Flateyjarbók)',
    date: 'c. 1390',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Harold_Fairhair_Flateyjarbok.jpg',
    note: 'A later saga-manuscript depiction; the earliest history of the dynasty is preserved through Icelandic saga tradition rather than contemporary record.'
  },
  summary: 'The traditional dynasty of the unifiers of Norway, from Harald Fairhair through Saint Olaf and Harald Hardrada.',
  overview: 'The House of Fairhair is the dynasty that Norwegian and Icelandic tradition credits with unifying Norway under Harald Fairhair around 872. Its kings — remembered largely through later saga tradition — Christianised the country under Olaf Tryggvason and Saint Olaf, and reached across the North Sea under Harald Hardrada, whose death at Stamford Bridge in 1066 marked the end of the Viking age.',
  founder: P('harald-fairhair', 'Harald Fairhair', 'Traditional unifier of Norway, c. 872'),
  seats: [{ name: 'Kingdom of Norway', type: 'location', slug: 'kingdom-of-norway' }],
  notableMembers: [
    P('harald-fairhair', 'Harald Fairhair', 'Traditional unifier of Norway'),
    P('haakon-the-good', 'Haakon the Good', 'Raised Christian in England; early convert-king'),
    P('eric-bloodaxe', 'Eric Bloodaxe', 'Harald’s son; also king at York'),
    P('olaf-tryggvason', 'Olaf Tryggvason', 'Forcibly Christianised much of Norway'),
    P('olaf-ii-haraldsson', 'Olaf II (Saint Olaf)', 'Norway’s patron saint; fell at Stiklestad'),
    P('magnus-the-good', 'Magnus the Good', 'Son of Saint Olaf; king of Norway and Denmark'),
    P('harald-hardrada', 'Harald Hardrada', 'Varangian, king, and claimant of England; died at Stamford Bridge'),
    P('magnus-barefoot', 'Magnus Barefoot', 'Campaigned across the Irish Sea')
  ],
  familyTree: {
    caption: 'The kings of the Fairhair line. The early descent from Harald Fairhair is preserved through Icelandic saga tradition and is genealogically uncertain; the later father-to-son links (the Hardrada line) are better recorded. ⚭ marks a marriage.',
    root: {
      name: 'Harald Fairhair', personSlug: 'harald-fairhair', note: 'traditional r. c. 872–930',
      children: [
        {
          name: 'Eric Bloodaxe', personSlug: 'eric-bloodaxe', note: 'r. c. 930–934',
          children: [{ name: 'Harald Greycloak', personSlug: 'harald-greycloak', note: 'r. c. 961–970' }]
        },
        { name: 'Haakon the Good', personSlug: 'haakon-the-good', note: 'r. c. 934–961' },
        {
          name: 'Later kings of the Fairhair line', note: 'linked to Harald Fairhair by saga tradition; the exact descent is uncertain', branch: 'saga tradition',
          children: [
            { name: 'Olaf Tryggvason', personSlug: 'olaf-tryggvason', note: 'r. 995–1000' },
            {
              name: 'Olaf II (Saint Olaf)', personSlug: 'olaf-ii-haraldsson', note: 'r. 1015–1028',
              children: [{ name: 'Magnus the Good', personSlug: 'magnus-the-good', note: 'r. 1035–1047' }]
            },
            {
              name: 'Harald Hardrada', personSlug: 'harald-hardrada', note: 'r. 1046–1066; half-brother of St Olaf',
              children: [{
                name: 'Olaf III', personSlug: 'olaf-iii-of-norway', note: 'r. 1067–1093',
                children: [{
                  name: 'Magnus Barefoot', personSlug: 'magnus-barefoot', note: 'r. 1093–1103',
                  children: [{ name: 'Øystein I', personSlug: 'oystein-i-of-norway', note: 'r. 1103–1123' }]
                }]
              }]
            }
          ]
        }
      ]
    }
  },
  contentSections: [
    { title: 'Origins', paragraphs: [
      'Norwegian tradition holds that Harald Fairhair united the many petty kingdoms of Norway into one realm after a decisive sea-battle at Hafrsfjord, traditionally dated around 872. This account survives mainly through Icelandic sagas written three centuries later, so the details — and the completeness of his unification — are uncertain, but Harald became the ancestor-figure of the Norwegian monarchy.',
      'His many sons fought over the inheritance. Eric Bloodaxe, remembered for killing his brothers, was driven out and later ruled as a Viking king at York, while the English-raised Haakon the Good returned to take Norway and make the first royal attempts at Christianisation.'
    ]},
    { title: 'The conversion of Norway', paragraphs: [
      'Two kings named Olaf drove Norway’s conversion, both through force. Olaf Tryggvason, a former Viking, imposed Christianity harshly during his short reign before dying at the sea-battle of Svolder around 1000. A generation later Olaf Haraldsson — Saint Olaf — completed the work, and though he was killed by rebellious chieftains at Stiklestad in 1030, his cult as Norway’s patron saint quickly made him more powerful in death than in life.',
      'The sagas surround both kings with legend, and their stories must be read as tradition shaped by later Christian memory as much as as documentary history.'
    ]},
    { title: 'Harald Hardrada and the Viking age', paragraphs: [
      'Saint Olaf’s half-brother Harald Sigurdsson, called Hardrada ("hard-ruler"), fled after Stiklestad to serve in the Varangian Guard at Constantinople before returning to claim Norway in 1046. A formidable and ruthless king, he founded Oslo and warred for years against Denmark.',
      'In 1066 he invaded England to claim its throne, but was defeated and killed by Harold Godwinson at the Battle of Stamford Bridge — a defeat traditionally taken to mark the end of the Viking age, days before the Norman landing at Hastings.'
    ]},
    { title: 'The later Fairhair kings', paragraphs: [
      'Harald Hardrada’s line continued through his son Olaf III "the Peaceful", whose long reign brought stability and the growth of Norwegian towns, and his grandson Magnus Barefoot, who campaigned aggressively around the Irish Sea and the Scottish isles before dying in Ireland in 1103.',
      'Magnus’s son Øystein I and his brothers ruled jointly, developing Norway’s church, law, and trade, in a more settled age than that of their raiding ancestors.'
    ]},
    { title: 'Legacy', paragraphs: [
      'The Fairhair dynasty gave Norway its founding myth, its conversion, and its patron saint. The cult of Saint Olaf and the idea of a single Norwegian kingdom descended from Harald Fairhair shaped Norwegian identity for the rest of the Middle Ages.',
      'When the direct line faltered in the twelfth century, Norway fell into decades of civil war from which a new dynasty, the House of Sverre, eventually emerged.'
    ]}
  ],
  timeline: [
    { date: 'c. 872', title: 'Harald Fairhair unites Norway', description: 'By tradition, victory at Hafrsfjord makes Harald king of a united Norway.', links: [{ title: 'Harald Fairhair', type: 'person', slug: 'harald-fairhair' }] },
    { date: 'c. 1000', title: 'Death of Olaf Tryggvason', description: 'The convert-king falls at the sea-battle of Svolder.', links: [{ title: 'Olaf Tryggvason', type: 'person', slug: 'olaf-tryggvason' }] },
    { date: '1030', title: 'Saint Olaf falls at Stiklestad', description: 'Olaf Haraldsson is killed and soon venerated as Norway’s patron saint.', links: [{ title: 'Olaf II (Saint Olaf)', type: 'person', slug: 'olaf-ii-haraldsson' }] },
    { date: '1046', title: 'Harald Hardrada takes the throne', description: 'The former Varangian returns from Byzantium to rule Norway.', links: [{ title: 'Harald Hardrada', type: 'person', slug: 'harald-hardrada' }] },
    { date: '1066', title: 'Death at Stamford Bridge', description: 'Hardrada’s fall is often taken to end the Viking age.', links: [{ title: 'Battle of Stamford Bridge', type: 'event', slug: 'battle-of-stamford-bridge' }] }
  ],
  relatedEntries: {
    people: [
      { title: 'Harald Fairhair', type: 'person', slug: 'harald-fairhair', label: 'Founder by tradition' },
      { title: 'Olaf II (Saint Olaf)', type: 'person', slug: 'olaf-ii-haraldsson', label: 'Patron saint of Norway' },
      { title: 'Harald Hardrada', type: 'person', slug: 'harald-hardrada', label: 'Last great Viking king' }
    ],
    events: [{ title: 'Battle of Stamford Bridge', type: 'event', slug: 'battle-of-stamford-bridge', label: 'Hardrada’s death, 1066' }],
    locations: [{ title: 'Kingdom of Norway', type: 'location', slug: 'kingdom-of-norway', label: 'The realm they unified' }]
  },
  sources: [
    { title: 'Fairhair dynasty — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Fairhair_dynasty' },
    { title: 'Harald I (Fairhair) — Encyclopaedia Britannica', author: 'Encyclopaedia Britannica', type: 'encyclopedia', url: 'https://www.britannica.com/biography/Harald-I-king-of-Norway' },
    { title: 'Harald Hardrada — Encyclopaedia Britannica', author: 'Encyclopaedia Britannica', type: 'encyclopedia', url: 'https://www.britannica.com/biography/Harald-III-Sigurdsson' }
  ]
}

/* ------------------------------------------------------------ SVERRE */
const sverre = {
  id: 'house-of-sverre',
  type: 'house',
  name: 'House of Sverre',
  aliases: ['Sverre dynasty', 'Sverre dynasty / contested royal line', 'House of Sverre (Birkebeiner)', 'Sverrir dynasty'],
  originYear: 1184,
  endYear: 1319,
  reignSpan: '1184–1319',
  region: 'Kingdom of Norway',
  originPlace: 'Norway',
  arms: 'Gules, a lion rampant or bearing the axe of St Olaf — the arms of medieval Norway',
  image: 'https://commons.wikimedia.org/wiki/Special:FilePath/HakonTheOldAndSkule-Flateyjarbok%20crop.jpg?width=1000',
  imageInfo: {
    caption: 'King Haakon IV of Norway, greatest of the Sverre dynasty, in the Icelandic manuscript Flateyjarbók.',
    creator: 'Icelandic manuscript illumination (Flateyjarbók)',
    date: 'c. 1390',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:HakonTheOldAndSkule-Flateyjarbok_crop.jpg',
    note: 'A later saga-manuscript image of Haakon IV, under whom Norway reached its medieval height.'
  },
  summary: 'The dynasty founded by the rebel king Sverre that ended Norway’s civil wars and led the kingdom to its medieval golden age.',
  overview: 'The House of Sverre rose from Norway’s long civil wars when Sverre Sigurdsson, leader of the Birkebeiner faction, seized the throne in 1184. His descendants — above all Haakon IV and Magnus VI the Lawmender — ended the succession wars, codified the law, and brought Norway to its greatest medieval extent, including Iceland and Greenland.',
  founder: P('sverre-sigurdsson', 'Sverre Sigurdsson', 'Birkebeiner leader who seized the throne in 1184'),
  seats: [{ name: 'Kingdom of Norway', type: 'location', slug: 'kingdom-of-norway' }],
  notableMembers: [
    P('sverre-sigurdsson', 'Sverre Sigurdsson', 'Founder; defied the Church and won the crown'),
    P('hakon-iii-sverresson', 'Haakon III', 'Reconciled briefly with the Church'),
    P('inge-ii-bardsson', 'Inge II Bårdsson', 'Birkebeiner king during the last civil wars'),
    P('haakon-iv-haakonsson', 'Haakon IV', 'Ended the civil wars; Norway’s medieval height'),
    P('magnus-vi-lawmender', 'Magnus VI the Lawmender', 'Gave Norway a unified national law code'),
    P('eric-ii-of-norway', 'Eric II', 'Fought the "War of the Skirts" with the Hansa'),
    P('haakon-v-magnusson', 'Haakon V', 'Moved the capital to Oslo; last of the direct line')
  ],
  familyTree: {
    caption: 'The Sverre dynasty from the rebel king Sverre to Haakon V, after whom the crown passed by marriage toward the union with Sweden. Several early reigns fell during Norway’s civil wars; notes flag the kinship.',
    root: {
      name: 'Sverre Sigurdsson', personSlug: 'sverre-sigurdsson', note: 'r. 1184–1202',
      children: [
        {
          name: 'Haakon III', personSlug: 'hakon-iii-sverresson', note: 'r. 1202–1204',
          children: [{
            name: 'Haakon IV', personSlug: 'haakon-iv-haakonsson', note: 'r. 1217–1263; posthumous son',
            children: [{
              name: 'Magnus VI the Lawmender', personSlug: 'magnus-vi-lawmender', note: 'r. 1263–1280',
              children: [
                { name: 'Eric II', personSlug: 'eric-ii-of-norway', note: 'r. 1280–1299' },
                { name: 'Haakon V', personSlug: 'haakon-v-magnusson', note: 'r. 1299–1319, last of the direct line' }
              ]
            }]
          }]
        },
        { name: 'Inge II Bårdsson', personSlug: 'inge-ii-bardsson', note: 'r. 1204–1217; kinsman and Birkebeiner king' }
      ]
    }
  },
  contentSections: [
    { title: 'Origins', paragraphs: [
      'For much of the twelfth century Norway was torn by civil wars between rival claimants and factions, the Birkebeiner ("birch-legs") and the Bagl-party. Into this came Sverre Sigurdsson, a former priest from the Faroes who claimed to be a royal son, took over the Birkebeiner, and by 1184 had defeated and killed King Magnus Erlingsson to win the throne.',
      'Sverre ruled in open defiance of the Church, which excommunicated him, and defended his rule in the Sverris saga, a remarkable near-contemporary account partly composed under his own direction.'
    ]},
    { title: 'The end of the civil wars', paragraphs: [
      'The wars outlived Sverre, running through the short reigns of his son Haakon III and the Birkebeiner king Inge II Bårdsson. They were finally ended by Sverre’s grandson Haakon IV Haakonsson, whose disputed birth was resolved by ordeal and whose long reign from 1217 brought lasting peace.',
      'Haakon IV made the succession hereditary and orderly, ending generations of contested kingship.'
    ]},
    { title: 'The Norwegian golden age', paragraphs: [
      'Under Haakon IV Norway reached its greatest medieval extent, bringing Iceland and Greenland under the crown in the 1260s and building a court that translated European romances into Old Norse. His son Magnus VI earned the name "the Lawmender" by replacing the old regional laws with a single national law code in the 1270s — a rare achievement in medieval Europe.',
      'This was the height of the medieval Norwegian state: unified, law-governed, and reaching across the North Atlantic.'
    ]},
    { title: 'The end of the line', paragraphs: [
      'Magnus VI’s sons Eric II and Haakon V ruled a kingdom increasingly pressed by the German Hanseatic merchants who dominated its trade. Haakon V moved the capital to Oslo and strengthened the fortress of Akershus, but he left only a daughter.',
      'On his death in 1319 the direct Sverre line ended, and through his daughter’s marriage the Norwegian crown passed to the Swedish king Magnus Eriksson, beginning the drift toward the Scandinavian unions.'
    ]},
    { title: 'Legacy', paragraphs: [
      'The House of Sverre ended Norway’s civil wars and gave it hereditary kingship, a national law, and its widest medieval reach across the North Atlantic. The Sverris saga and the sagas commissioned at Haakon IV’s court are among the treasures of Old Norse literature.',
      'After the dynasty, Norway increasingly shared its crown with its neighbours, a path that led eventually into the Kalmar Union.'
    ]}
  ],
  timeline: [
    { date: '1184', title: 'Sverre wins the throne', description: 'The Birkebeiner leader defeats Magnus Erlingsson.', links: [{ title: 'Sverre Sigurdsson', type: 'person', slug: 'sverre-sigurdsson' }] },
    { date: '1217', title: 'Accession of Haakon IV', description: 'His long reign ends the civil wars.', links: [{ title: 'Haakon IV', type: 'person', slug: 'haakon-iv-haakonsson' }] },
    { date: '1262', title: 'Iceland joins Norway', description: 'Haakon IV brings Iceland and Greenland under the crown.' },
    { date: '1274', title: 'The Code of Magnus the Lawmender', description: 'Norway receives a single national law.', links: [{ title: 'Magnus VI the Lawmender', type: 'person', slug: 'magnus-vi-lawmender' }] },
    { date: '1319', title: 'End of the direct line', description: 'Haakon V dies; the crown passes toward Sweden.', links: [{ title: 'Haakon V', type: 'person', slug: 'haakon-v-magnusson' }] }
  ],
  relatedEntries: {
    people: [
      { title: 'Sverre Sigurdsson', type: 'person', slug: 'sverre-sigurdsson', label: 'Founder' },
      { title: 'Haakon IV', type: 'person', slug: 'haakon-iv-haakonsson', label: 'Norway’s medieval height' },
      { title: 'Magnus VI the Lawmender', type: 'person', slug: 'magnus-vi-lawmender', label: 'National law-giver' }
    ],
    locations: [{ title: 'Kingdom of Norway', type: 'location', slug: 'kingdom-of-norway', label: 'The realm they ruled' }]
  },
  sources: [
    { title: 'Sverre dynasty — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Sverre_dynasty' },
    { title: 'Haakon IV — Encyclopaedia Britannica', author: 'Encyclopaedia Britannica', type: 'encyclopedia', url: 'https://www.britannica.com/biography/Haakon-IV' },
    { title: 'Sverre Sigurdsson — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Sverre_of_Norway' }
  ]
}

/* ------------------------------------------------------------ BJÄLBO */
const bjalbo = {
  id: 'house-of-bjalbo',
  type: 'house',
  name: 'House of Bjälbo',
  aliases: ['Bjälbo dynasty', 'Bjälbo family', 'Folkung', 'Folkungs', 'House of Folkung', 'Bjälbo / Norwegian royal line', 'Bjälbo / Estridsen line'],
  originYear: 1250,
  endYear: 1387,
  reignSpan: '1250–1387',
  region: 'Kingdom of Sweden',
  originPlace: 'Bjälbo, Östergötland',
  arms: 'Azure, a lion or over three bends argent (the "Folkung lion") — an emblem of medieval Sweden',
  image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Statue%20of%20Birger%20jarl%20Riddarholmstorget%20september%202011.jpg?width=1000',
  imageInfo: {
    caption: 'Statue of Birger Jarl in Stockholm, the city he is traditionally credited with founding, in the square named for him.',
    creator: 'Bengt Erland Fogelberg (statue, 1854)',
    date: '1854',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Statue_of_Birger_jarl_Riddarholmstorget_september_2011.jpg',
    note: 'A 19th-century monument to the Bjälbo regent whose sons founded the royal Folkung line.'
  },
  summary: 'The Swedish dynasty of Birger Jarl, whose descendants ruled Sweden and reached the crowns of Norway during the age before the Kalmar Union.',
  overview: 'The House of Bjälbo, or the Folkungs, rose from the powerful jarls of Sweden to the throne when Birger Jarl secured the crown for his son in 1250. His descendants built the medieval Swedish state — its towns, laws, and church — and through Magnus Eriksson briefly united the crowns of Sweden and Norway on the eve of the Kalmar Union.',
  founder: P('birger-jarl', 'Birger Jarl', 'Regent whose sons founded the royal Folkung line'),
  seats: [{ name: 'Kingdom of Sweden', type: 'location', slug: 'kingdom-of-sweden' }],
  notableMembers: [
    P('birger-jarl', 'Birger Jarl', 'Regent and founder; traditional founder of Stockholm'),
    P('valdemar-of-sweden', 'Valdemar', 'First Folkung king of Sweden'),
    P('magnus-iii-of-sweden', 'Magnus III Ladulås', 'Strengthened the crown and the nobility'),
    P('birger-magnusson', 'Birger Magnusson', 'His reign ended in the Nyköping banquet murders'),
    P('magnus-eriksson', 'Magnus Eriksson', 'King of Sweden and Norway; issued a national law'),
    P('haakon-vi-of-norway', 'Haakon VI', 'King of Norway; married Margaret of Denmark'),
    P('olaf-iv-of-norway', 'Olaf IV', 'Child king through whom the Kalmar Union began')
  ],
  familyTree: {
    caption: 'The Folkung (Bjälbo) line from the jarls to Birger Jarl’s royal descendants, ending with Haakon VI and the child Olaf IV, through whom the crowns passed toward the Kalmar Union. ⚭ marks a marriage.',
    root: {
      name: 'Bjälbo jarls', note: 'the Folkung magnates of Östergötland',
      children: [
        { name: 'Ulf Fase', personSlug: 'ulf-fase', note: 'jarl before Birger' },
        {
          name: 'Birger Jarl', personSlug: 'birger-jarl', note: 'jarl and regent, d. 1266',
          children: [
            { name: 'Valdemar', personSlug: 'valdemar-of-sweden', note: 'r. 1250–1275' },
            {
              name: 'Magnus III Ladulås', personSlug: 'magnus-iii-of-sweden', note: 'r. 1275–1290',
              children: [
                { name: 'Birger Magnusson', personSlug: 'birger-magnusson', note: 'r. 1290–1318' },
                {
                  name: 'Eric Magnusson', note: 'Duke of Södermanland',
                  children: [{
                    name: 'Magnus Eriksson', personSlug: 'magnus-eriksson', note: 'r. Sweden 1319–1364, Norway 1319–1343',
                    children: [{
                      name: 'Haakon VI', personSlug: 'haakon-vi-of-norway', note: 'r. Norway 1343–1380',
                      spouse: { name: 'Margaret of Denmark' },
                      children: [{ name: 'Olaf IV', personSlug: 'olaf-iv-of-norway', note: 'r. 1380–1387', branch: '→ Kalmar Union' }]
                    }]
                  }]
                }
              ]
            }
          ]
        }
      ]
    }
  },
  contentSections: [
    { title: 'Origins', paragraphs: [
      'The Bjälbo family were great magnates of Östergötland who supplied the jarls — the highest office below the king — of medieval Sweden. The decisive figure was Birger Jarl, who as regent crushed rival nobles, is traditionally credited with founding Stockholm, and in 1250 secured the throne for his young son Valdemar, founding the royal Folkung line.',
      'Birger issued laws protecting women, churches, homes, and assemblies — the "peace laws" — that laid foundations for a stronger Swedish state.'
    ]},
    { title: 'The Folkung kings', paragraphs: [
      'Birger’s son Valdemar was overthrown by his brother Magnus III, nicknamed Ladulås ("Barn-lock") for protecting peasants from the exactions of travelling nobles. Magnus strengthened royal power, defined the privileges of a knightly nobility, and patronised the Church.',
      'His son Birger Magnusson quarrelled murderously with his brothers, imprisoning and starving them after the notorious Nyköping banquet of 1317 — a crime that provoked a rising, drove Birger into exile, and passed the crown to a child.'
    ]},
    { title: 'Magnus Eriksson and the union of crowns', paragraphs: [
      'That child, Magnus Eriksson, grandson of Magnus Ladulås, was elected king of Sweden in 1319 and inherited Norway the same year, uniting the two crowns in his person. He issued a national law code for Sweden, but his long reign was troubled by war, the Black Death, and noble revolt, and the two kingdoms were later divided among his sons.',
      'His son Haakon VI kept the Norwegian crown and married Margaret, daughter of Valdemar IV of Denmark — the union that would shape the north.'
    ]},
    { title: 'Toward the Kalmar Union', paragraphs: [
      'Haakon VI and Margaret’s son Olaf IV inherited Denmark through his mother and Norway through his father, so that a single child briefly embodied the union of two Scandinavian crowns. When Olaf died young in 1387, his mother Margaret carried the inheritance forward.',
      'Through her, the crowns of Denmark, Norway, and Sweden were joined in the Kalmar Union of 1397 — the Bjälbo inheritance flowing into a united Scandinavia.'
    ]},
    { title: 'Legacy', paragraphs: [
      'The House of Bjälbo built much of the medieval Swedish state — its capital at Stockholm, its national law, its noble and ecclesiastical order — and reached the thrones of Sweden and Norway. The "Folkung lion" became a lasting emblem of Sweden.',
      'By binding the Swedish and Norwegian successions to the Danish through marriage, the dynasty helped create the conditions for the Kalmar Union that would dominate Scandinavian politics into the sixteenth century.'
    ]}
  ],
  timeline: [
    { date: '1250', title: 'Birger Jarl’s son crowned', description: 'Valdemar becomes the first Folkung king of Sweden.', links: [{ title: 'Birger Jarl', type: 'person', slug: 'birger-jarl' }] },
    { date: '1275', title: 'Magnus Ladulås takes the throne', description: 'He strengthens royal power and the nobility.', links: [{ title: 'Magnus III Ladulås', type: 'person', slug: 'magnus-iii-of-sweden' }] },
    { date: '1317', title: 'The Nyköping banquet', description: 'Birger Magnusson murders his brothers, provoking his own fall.', links: [{ title: 'Birger Magnusson', type: 'person', slug: 'birger-magnusson' }] },
    { date: '1319', title: 'Sweden and Norway united', description: 'Magnus Eriksson inherits both crowns as a child.', links: [{ title: 'Magnus Eriksson', type: 'person', slug: 'magnus-eriksson' }] },
    { date: '1387', title: 'Death of Olaf IV', description: 'The child king’s death leaves the inheritance to Margaret and the coming union.', links: [{ title: 'Olaf IV', type: 'person', slug: 'olaf-iv-of-norway' }] }
  ],
  relatedEntries: {
    people: [
      { title: 'Birger Jarl', type: 'person', slug: 'birger-jarl', label: 'Founder' },
      { title: 'Magnus III Ladulås', type: 'person', slug: 'magnus-iii-of-sweden', label: 'Strengthened the crown' },
      { title: 'Magnus Eriksson', type: 'person', slug: 'magnus-eriksson', label: 'United Sweden and Norway' }
    ],
    locations: [{ title: 'Kingdom of Sweden', type: 'location', slug: 'kingdom-of-sweden', label: 'The realm they ruled' }]
  },
  sources: [
    { title: 'House of Bjälbo — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/House_of_Bjelbo' },
    { title: 'Birger Jarl — Encyclopaedia Britannica', author: 'Encyclopaedia Britannica', type: 'encyclopedia', url: 'https://www.britannica.com/biography/Birger-Jarl' },
    { title: 'Magnus VII (Magnus Eriksson) — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Magnus_IV_of_Sweden' }
  ]
}

if (!Array.isArray(data.houses)) data.houses = []
for (const house of [jelling, fairhair, sverre, bjalbo]) {
  const i = data.houses.findIndex((h) => h.id === house.id)
  if (i >= 0) data.houses[i] = house
  else data.houses.push(house)
}

writeFileSync(dataPath, JSON.stringify(data, null, 2))
console.log(`Batch E written. houses now (${data.houses.length}): ${data.houses.map((h) => h.id).join(', ')}`)
