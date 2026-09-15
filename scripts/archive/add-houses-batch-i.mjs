import { readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const dataPath = join(__dirname, '..', 'server', 'data', 'history.json')
const data = JSON.parse(readFileSync(dataPath, 'utf8'))
const P = (slug, displayName, note) => ({ personSlug: slug, displayName, note })

/* ----------------------------------------------------------- DOUKAS */
const doukas = {
  id: 'house-of-doukas',
  type: 'house',
  name: 'House of Doukas',
  aliases: ['Doukas', 'Doukid', 'Doukai', 'Ducas', 'Doukas dynasty', 'Doukid-era imperial politics'],
  originYear: 1059,
  endYear: 1078,
  reignSpan: '1059–1078',
  region: 'Byzantine Empire',
  originPlace: 'Paphlagonia (Anatolia)',
  arms: 'The Byzantine imperial insignia; the Doukai used no European-style arms',
  image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Romanos%20IV%20and%20Eudokia%20coin%20(transparent%20background).png?width=1000',
  imageInfo: {
    caption: 'Christ crowning Romanos IV Diogenes and the empress Eudokia, on a Byzantine gold coin of the Doukid era.',
    creator: 'Byzantine imperial mint',
    date: 'c. 1068–1071',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Romanos_IV_and_Eudokia_coin_(transparent_background).png',
    note: 'A contemporary coin of Romanos IV, who ruled through his marriage to the Doukas empress Eudokia.'
  },
  summary: 'The Byzantine imperial family that held the throne between the Macedonian and Komnenian dynasties, on the eve of the disaster at Manzikert.',
  overview: 'The House of Doukas, a great Byzantine aristocratic family, provided emperors in the mid-eleventh century as the empire drifted toward crisis. Constantine X and his son Michael VII presided over military decline and the loss of Italy, while Romanos IV Diogenes — emperor through marriage into the family — met catastrophe against the Seljuks at Manzikert in 1071.',
  founder: P('constantine-x-doukas', 'Constantine X Doukas', 'First Doukas emperor, 1059'),
  seats: [{ name: 'Byzantine Empire', type: 'location', slug: 'byzantine-empire' }],
  notableMembers: [
    P('constantine-x-doukas', 'Constantine X', 'First Doukas emperor; cut military spending'),
    P('romanos-iv-diogenes', 'Romanos IV Diogenes', 'Emperor by marriage; captured at Manzikert'),
    P('michael-vii-doukas', 'Michael VII', 'Presided over further decline and lost southern Italy')
  ],
  familyTree: {
    caption: 'The Doukas emperors. Constantine X’s widow Eudokia married Romanos IV Diogenes, who ruled until his defeat at Manzikert; Constantine’s son Michael VII then took sole power. ⚭ marks a marriage.',
    root: {
      name: 'Constantine X Doukas', personSlug: 'constantine-x-doukas', note: 'r. 1059–1067',
      spouse: { name: 'Eudokia Makrembolitissa' },
      children: [
        { name: 'Michael VII Doukas', personSlug: 'michael-vii-doukas', note: 'r. 1071–1078' },
        { name: 'Romanos IV Diogenes', personSlug: 'romanos-iv-diogenes', note: 'stepfather-emperor by marriage to Eudokia; r. 1068–1071' }
      ]
    }
  },
  contentSections: [
    { title: 'Origins', paragraphs: [
      'The Doukai were one of the oldest and grandest families of the Byzantine aristocracy, with roots in Paphlagonia. They came to the throne in 1059 when Constantine X Doukas succeeded the abdicating Isaac I Komnenos.',
      'Constantine X, a civilian aristocrat suspicious of the army, slashed military spending and favoured the bureaucratic elite of Constantinople — a policy that weakened the frontier defences just as new enemies pressed on every side.'
    ]},
    { title: 'Romanos IV and Manzikert', paragraphs: [
      'When Constantine X died in 1067 his widow Eudokia married the general Romanos Diogenes to give the empire a soldier-emperor. Romanos IV rebuilt the neglected army and marched east against the Seljuk Turks, but at the Battle of Manzikert in 1071 he was betrayed by the Doukas faction, defeated, and captured — the first Roman emperor taken alive by a Muslim ruler.',
      'The Doukas court repudiated him on his release, and in the civil war that followed the empire’s hold on Anatolia collapsed.'
    ]},
    { title: 'Michael VII and decline', paragraphs: [
      'Constantine X’s son Michael VII took sole power, but he was a scholarly, ineffective ruler nicknamed "Parapinakes" ("minus a quarter") for the debasement of the coinage and grain measure under him. His reign saw the final loss of Byzantine Italy to the Normans in 1071 and rebellions across the shrinking empire.',
      'Michael was overthrown in 1078, and after a few more short reigns the throne passed to the Komnenoi, who would restore Byzantine fortunes.'
    ]},
    { title: 'Legacy', paragraphs: [
      'The Doukas emperors are remembered above all for the catastrophe of Manzikert and the loss of Anatolia that followed — a turning point that opened the Byzantine heartland to Turkish settlement and helped set the stage for the Crusades.',
      'The family itself remained powerful: Doukas women married into the Komnenian dynasty, and the name recurred among the Byzantine elite for centuries.'
    ]}
  ],
  timeline: [
    { date: '1059', title: 'Constantine X becomes emperor', description: 'The Doukas family takes the Byzantine throne.', links: [{ title: 'Constantine X', type: 'person', slug: 'constantine-x-doukas' }] },
    { date: '1068', title: 'Romanos IV made emperor', description: 'Eudokia marries a general to lead the army.', links: [{ title: 'Romanos IV Diogenes', type: 'person', slug: 'romanos-iv-diogenes' }] },
    { date: '1071', title: 'Battle of Manzikert', description: 'Romanos IV is defeated and captured by the Seljuks.', links: [{ title: 'Battle of Manzikert', type: 'event', slug: 'battle-of-manzikert' }] },
    { date: '1078', title: 'Fall of Michael VII', description: 'The last Doukas emperor is overthrown.', links: [{ title: 'Michael VII', type: 'person', slug: 'michael-vii-doukas' }] }
  ],
  relatedEntries: {
    people: [
      { title: 'Constantine X', type: 'person', slug: 'constantine-x-doukas', label: 'First Doukas emperor' },
      { title: 'Romanos IV Diogenes', type: 'person', slug: 'romanos-iv-diogenes', label: 'Defeated at Manzikert' },
      { title: 'Michael VII', type: 'person', slug: 'michael-vii-doukas', label: 'The empire’s decline' }
    ],
    events: [{ title: 'Battle of Manzikert', type: 'event', slug: 'battle-of-manzikert', label: 'The 1071 disaster' }],
    locations: [{ title: 'Byzantine Empire', type: 'location', slug: 'byzantine-empire', label: 'Their realm' }],
    houses: [{ title: 'House of Komnenos', type: 'house', slug: 'house-of-komnenos', label: 'The dynasty that restored the empire' }]
  },
  sources: [
    { title: 'Doukas — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Doukas' },
    { title: 'Romanus IV Diogenes — Encyclopaedia Britannica', author: 'Encyclopaedia Britannica', type: 'encyclopedia', url: 'https://www.britannica.com/biography/Romanus-IV-Diogenes' },
    { title: 'Battle of Manzikert — Encyclopaedia Britannica', author: 'Encyclopaedia Britannica', type: 'encyclopedia', url: 'https://www.britannica.com/event/Battle-of-Manzikert' }
  ]
}

/* ----------------------------------------------------------- ZENGID */
const zengid = {
  id: 'house-of-zengid',
  type: 'house',
  name: 'Zengid dynasty',
  aliases: ['Zengid', 'Zangid', 'Zengids', 'Zangids', 'House of Zengi'],
  originYear: 1127,
  endYear: 1183,
  reignSpan: '1127–1183 (Syrian line)',
  region: 'Syria & northern Mesopotamia',
  originPlace: 'Mosul and Aleppo',
  arms: 'The Zengids used no European-style arms; a blue field is sometimes associated with the dynasty',
  image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Nur%20ad-Din%20Zangi2.jpg?width=1000',
  imageInfo: {
    caption: 'Nur ad-Din, the great Zengid ruler of Syria, in a later depiction.',
    creator: 'Later depiction',
    date: 'Later image (Nur ad-Din r. 1146–1174)',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Nur_ad-Din_Zangi2.jpg',
    note: 'A later image of the Zengid ruler who united Muslim Syria against the Crusaders.'
  },
  summary: 'The Turkish dynasty of Zengi and Nur ad-Din that united Muslim Syria against the Crusaders and prepared the ground for Saladin.',
  overview: 'The Zengids were a Turkish (atabeg) dynasty that rose in Mosul and Aleppo in the twelfth century. Imad ad-Din Zengi captured Edessa in 1144, triggering the Second Crusade, and his son Nur ad-Din united Muslim Syria and championed the counter-crusade — a work completed by his lieutenant Saladin, whose Ayyubids displaced the Zengid line.',
  founder: P('imad-ad-din-zengi', 'Imad ad-Din Zengi', 'Founder; captured Edessa from the Crusaders'),
  notableMembers: [
    P('imad-ad-din-zengi', 'Imad ad-Din Zengi', 'Founder; took Edessa in 1144'),
    P('nur-ad-din', 'Nur ad-Din', 'United Muslim Syria and led the counter-crusade'),
    P('as-salih-ismail', 'as-Salih Ismail', 'Nur ad-Din’s young son; last effective Zengid of Syria')
  ],
  familyTree: {
    caption: 'The Syrian Zengid line: the atabeg Zengi, his son Nur ad-Din, and Nur ad-Din’s son as-Salih Ismail, after whom Saladin’s Ayyubids took Syria.',
    root: {
      name: 'Imad ad-Din Zengi', personSlug: 'imad-ad-din-zengi', note: 'atabeg of Mosul & Aleppo, d. 1146',
      children: [{
        name: 'Nur ad-Din', personSlug: 'nur-ad-din', note: 'r. 1146–1174',
        children: [{ name: 'as-Salih Ismail', personSlug: 'as-salih-ismail', note: 'r. 1174–1181' }]
      }]
    }
  },
  contentSections: [
    { title: 'Origins', paragraphs: [
      'The dynasty was founded by Imad ad-Din Zengi, a Turkish military governor (atabeg) who from 1127 built a powerful state around Mosul and Aleppo. Ruthless and effective, he united much of Muslim northern Syria and Mesopotamia under his command.',
      'In 1144 Zengi captured the Crusader county of Edessa, the first of the crusader states to fall — a blow that shocked Europe and provoked the Second Crusade.'
    ]},
    { title: 'Nur ad-Din and the counter-crusade', paragraphs: [
      'Zengi’s son Nur ad-Din inherited Aleppo and went on to unite Muslim Syria, taking Damascus in 1154. A pious and disciplined ruler, he made the recovery of Jerusalem and the revival of Sunni Islam a central cause, building mosques, madrasas, and hospitals and presenting himself as the model just prince (mujahid).',
      'It was Nur ad-Din who sent his general Shirkuh, and Shirkuh’s nephew Saladin, into Egypt — a campaign that would ultimately overshadow the Zengids themselves.'
    ]},
    { title: 'Eclipse by the Ayyubids', paragraphs: [
      'When Nur ad-Din died in 1174 his heir as-Salih Ismail was a child, and Saladin — now master of Egypt — moved to take Nur ad-Din’s Syrian lands, presenting himself as the true heir to his cause. By the time as-Salih died in 1181, the Zengid state of Syria had passed to the Ayyubids.',
      'A junior Zengid line lingered at Mosul, but the dynasty’s historical role was over.'
    ]},
    { title: 'Legacy', paragraphs: [
      'The Zengids reversed the momentum of the Crusades: Zengi took the first crusader state, and Nur ad-Din forged the united Muslim Syria and the ideology of counter-crusade that Saladin inherited and used to retake Jerusalem.',
      'Nur ad-Din in particular was remembered by later Muslim tradition as a model of just and pious rule, a reputation that shaped the image of the ideal Islamic ruler.'
    ]}
  ],
  timeline: [
    { date: '1127', title: 'Zengi takes Mosul', description: 'The dynasty’s power base is founded.', links: [{ title: 'Imad ad-Din Zengi', type: 'person', slug: 'imad-ad-din-zengi' }] },
    { date: '1144', title: 'Fall of Edessa', description: 'Zengi captures the first crusader state, triggering the Second Crusade.' },
    { date: '1154', title: 'Nur ad-Din takes Damascus', description: 'Muslim Syria is united under one ruler.', links: [{ title: 'Nur ad-Din', type: 'person', slug: 'nur-ad-din' }] },
    { date: '1174', title: 'Saladin takes over Syria', description: 'After Nur ad-Din’s death the Ayyubids eclipse the Zengids.' }
  ],
  relatedEntries: {
    people: [
      { title: 'Imad ad-Din Zengi', type: 'person', slug: 'imad-ad-din-zengi', label: 'Founder; took Edessa' },
      { title: 'Nur ad-Din', type: 'person', slug: 'nur-ad-din', label: 'United Muslim Syria' },
      { title: 'as-Salih Ismail', type: 'person', slug: 'as-salih-ismail', label: 'Last Zengid of Syria' }
    ],
    houses: [{ title: 'Ayyubid dynasty', type: 'house', slug: 'house-of-ayyubid', label: 'Saladin’s house, which succeeded them' }]
  },
  sources: [
    { title: 'Zangi dynasty — Encyclopaedia Britannica', author: 'Encyclopaedia Britannica', type: 'encyclopedia', url: 'https://www.britannica.com/topic/Zangid-dynasty' },
    { title: 'Nur al-Din — Encyclopaedia Britannica', author: 'Encyclopaedia Britannica', type: 'encyclopedia', url: 'https://www.britannica.com/biography/Nur-al-Din' },
    { title: 'Zengid dynasty — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Zengid_dynasty' }
  ]
}

/* ------------------------------------------------------------ IVREA */
const ivrea = {
  id: 'house-of-ivrea',
  type: 'house',
  name: 'House of Ivrea',
  aliases: ['House of Ivrea (Jiménez)', 'House of Ivrea (Burgundy)', 'Castilian House of Ivrea (Burgundy)', 'Jiménez', 'House of Jiménez', 'Jiménez dynasty', 'Ivrea'],
  originYear: 1126,
  endYear: 1369,
  reignSpan: '1126–1369 (Castilian line)',
  region: 'Kingdom of Castile',
  originPlace: 'Navarre and Castile',
  arms: 'Quarterly, Castile and León — the arms of the Crown of Castile',
  image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Alfonso%20VIII%20de%20Castilla-1214.jpg?width=1000',
  imageInfo: {
    caption: 'Alfonso VIII of Castile, victor of Las Navas de Tolosa, in a later depiction.',
    creator: 'Later depiction',
    date: 'Later image (Alfonso VIII r. 1158–1214)',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Alfonso_VIII_de_Castilla-1214.jpg',
    note: 'A later image of the greatest of the Castilian kings of the Jiménez (Ivrea) line.'
  },
  summary: 'The royal house of the Jiménez (Ivrea) line that ruled Castile from the twelfth century until the Trastámara took the throne in 1369.',
  overview: 'The House of Ivrea, the Castilian branch of the old Jiménez dynasty, ruled the Kingdom of Castile through the high Middle Ages. Its kings led the Reconquista — Alfonso VIII broke Almohad power at Las Navas de Tolosa in 1212 — before the line ended in civil war with Peter the Cruel and the rise of the Trastámaras.',
  founder: { displayName: 'Sancho III of Navarre', note: 'Sancho the Great, 11th-century progenitor of the Jiménez royal line (no Codex article yet)' },
  seats: [{ name: 'Kingdom of Castile', type: 'location', slug: 'kingdom-of-castile' }],
  notableMembers: [
    P('sancho-iii-of-castile', 'Sancho III', 'King of Castile at the division from León'),
    P('alfonso-viii-of-castile', 'Alfonso VIII', 'Victor of Las Navas de Tolosa, 1212'),
    P('henry-i-of-castile', 'Henry I', 'Boy king whose early death passed Castile to the León line'),
    P('alfonso-xi-of-castile', 'Alfonso XI', 'Reasserted royal power and won at the Salado'),
    P('peter-of-castile', 'Peter the Cruel', 'Last of the line; killed by his half-brother Henry of Trastámara')
  ],
  cadetBranches: [
    { name: 'House of Trastámara', note: 'Founded by Henry II, illegitimate son of Alfonso XI, who killed Peter the Cruel in 1369.' }
  ],
  familyTree: {
    caption: 'The Castilian kings of the Jiménez (Ivrea) line. Several generations between Alfonso VIII and Alfonso XI are compressed here to the kings held in the Codex; the line ended with Peter the Cruel and passed to the Trastámara.',
    root: {
      name: 'Sancho III', personSlug: 'sancho-iii-of-castile', note: 'r. 1157–1158',
      children: [{
        name: 'Alfonso VIII', personSlug: 'alfonso-viii-of-castile', note: 'r. 1158–1214',
        children: [
          { name: 'Henry I', personSlug: 'henry-i-of-castile', note: 'r. 1214–1217' },
          {
            name: 'Berengaria and the 13th-century kings', note: 'Ferdinand III, Alfonso X and their successors',
            children: [{
              name: 'Alfonso XI', personSlug: 'alfonso-xi-of-castile', note: 'r. 1312–1350',
              children: [{ name: 'Peter the Cruel', personSlug: 'peter-of-castile', note: 'r. 1350–1369', branch: '→ House of Trastámara' }]
            }]
          }
        ]
      }]
    }
  },
  contentSections: [
    { title: 'Origins', paragraphs: [
      'The Castilian royal house descended from the Jiménez dynasty of Navarre, whose greatest figure, Sancho III "the Great" of Navarre, dominated Christian Spain in the early eleventh century and parcelled out kingdoms among his sons. From this line came the kings who made Castile the leading power of the Reconquista.',
      'Historians often call the Castilian branch the "House of Ivrea", after a distant Italian ancestor, to distinguish it from the later Trastámaras; contemporaries simply knew them as the kings of Castile.'
    ]},
    { title: 'The Reconquista and Las Navas', paragraphs: [
      'The dynasty’s central achievement was the war against Muslim al-Andalus. Alfonso VIII suffered a shattering defeat at Alarcos in 1195, but in 1212, at the head of a coalition of Iberian kings, he crushed the Almohads at the Battle of Las Navas de Tolosa — the decisive victory that broke Muslim power in the peninsula and opened Andalusia to Christian conquest.',
      'Under his successors Castile absorbed Córdoba, Seville, and much of the south, becoming the largest of the Spanish kingdoms.'
    ]},
    { title: 'Alfonso XI and Peter the Cruel', paragraphs: [
      'After a turbulent fourteenth-century minority, Alfonso XI restored strong royal government, defeated a last great Moroccan invasion at the Salado in 1340, and issued important law codes. His son Peter — remembered as "the Cruel" or "the Just" depending on the teller — ruled harshly and made many enemies.',
      'Peter’s wars against his illegitimate half-brother Henry of Trastámara drew in England and France as a theatre of the Hundred Years’ War.'
    ]},
    { title: 'End of the line and legacy', paragraphs: [
      'In 1369 Henry of Trastámara killed Peter the Cruel at Montiel and seized the throne, ending the Ivrea line and founding the Trastámara dynasty that would eventually unite Spain.',
      'The House of Ivrea left Castile the dominant power of Christian Iberia, its Reconquista carried almost to completion and its royal institutions and law firmly established.'
    ]}
  ],
  timeline: [
    { date: '1158', title: 'Accession of Alfonso VIII', description: 'The reign of Castile’s great Reconquista king begins.', links: [{ title: 'Alfonso VIII', type: 'person', slug: 'alfonso-viii-of-castile' }] },
    { date: '1212', title: 'Battle of Las Navas de Tolosa', description: 'Alfonso VIII breaks Almohad power in Spain.', links: [{ title: 'Battle of Las Navas de Tolosa', type: 'event', slug: 'battle-of-las-navas-de-tolosa' }] },
    { date: '1340', title: 'Battle of the Salado', description: 'Alfonso XI defeats the last great Moroccan invasion.', links: [{ title: 'Alfonso XI', type: 'person', slug: 'alfonso-xi-of-castile' }] },
    { date: '1369', title: 'Death of Peter the Cruel', description: 'Henry of Trastámara kills Peter and founds a new dynasty.', links: [{ title: 'Peter the Cruel', type: 'person', slug: 'peter-of-castile' }] }
  ],
  relatedEntries: {
    people: [
      { title: 'Alfonso VIII', type: 'person', slug: 'alfonso-viii-of-castile', label: 'Victor of Las Navas' },
      { title: 'Alfonso XI', type: 'person', slug: 'alfonso-xi-of-castile', label: 'Restored royal power' },
      { title: 'Peter the Cruel', type: 'person', slug: 'peter-of-castile', label: 'Last of the line' }
    ],
    events: [{ title: 'Battle of Las Navas de Tolosa', type: 'event', slug: 'battle-of-las-navas-de-tolosa', label: 'The great Reconquista victory, 1212' }],
    locations: [{ title: 'Kingdom of Castile', type: 'location', slug: 'kingdom-of-castile', label: 'The realm they ruled' }],
    houses: [{ title: 'House of Trastámara', type: 'house', slug: 'house-of-trastamara', label: 'The dynasty that succeeded them' }]
  },
  sources: [
    { title: 'House of Ivrea — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/House_of_Ivrea' },
    { title: 'Alfonso VIII — Encyclopaedia Britannica', author: 'Encyclopaedia Britannica', type: 'encyclopedia', url: 'https://www.britannica.com/biography/Alfonso-VIII' },
    { title: 'Battle of Las Navas de Tolosa — Encyclopaedia Britannica', author: 'Encyclopaedia Britannica', type: 'encyclopedia', url: 'https://www.britannica.com/event/Battle-of-Las-Navas-de-Tolosa' }
  ]
}

if (!Array.isArray(data.houses)) data.houses = []
for (const house of [doukas, zengid, ivrea]) {
  const i = data.houses.findIndex((h) => h.id === house.id)
  if (i >= 0) data.houses[i] = house
  else data.houses.push(house)
}

writeFileSync(dataPath, JSON.stringify(data, null, 2))
console.log(`Batch I written. houses now (${data.houses.length}): ${data.houses.map((h) => h.id).join(', ')}`)
