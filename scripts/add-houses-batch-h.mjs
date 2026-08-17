import { readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const dataPath = join(__dirname, '..', 'server', 'data', 'history.json')
const data = JSON.parse(readFileSync(dataPath, 'utf8'))
const P = (slug, displayName, note) => ({ personSlug: slug, displayName, note })

/* ---------------------------------------------------------- BOULOGNE */
const boulogne = {
  id: 'house-of-boulogne',
  type: 'house',
  name: 'House of Boulogne',
  aliases: ['House of Boulogne / Ardennes-Bouillon', 'Ardennes-Bouillon', 'House of Ardennes-Bouillon', 'Rethel family', 'Counts of Boulogne'],
  originYear: 1099,
  endYear: 1131,
  reignSpan: '1099–1131',
  region: 'Kingdom of Jerusalem',
  originPlace: 'Boulogne and the Ardennes',
  arms: 'Argent, a cross potent between four crosslets or — the arms of the Kingdom of Jerusalem',
  image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Godfrey%20of%20Bouillon%20from%20Histoire%20d%27Outremer.jpg?width=1000',
  imageInfo: {
    caption: 'Godfrey of Bouillon, leader of the First Crusade and first Frankish ruler of Jerusalem, in a manuscript of William of Tyre’s history.',
    creator: 'Manuscript of the Histoire d’Outremer',
    date: '13th–14th century',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Godfrey_of_Bouillon_from_Histoire_d%27Outremer.jpg',
    note: 'A later crusader-chronicle depiction of Godfrey, revered as one of the Nine Worthies.'
  },
  summary: 'The Ardennes-Bouillon family that founded the Kingdom of Jerusalem after the First Crusade, from Godfrey of Bouillon to Baldwin II.',
  overview: 'The House of Boulogne, of the Ardennes-Bouillon comital family, established Latin rule in the Holy Land after the First Crusade. Godfrey of Bouillon took Jerusalem in 1099, his brother Baldwin I became its first king, and their cousin Baldwin II consolidated the young crusader kingdom before it passed by marriage to the Angevins.',
  founder: P('godfrey-of-bouillon', 'Godfrey of Bouillon', 'Leader of the First Crusade; first Frankish ruler of Jerusalem'),
  seats: [{ name: 'Kingdom of Jerusalem', type: 'location', slug: 'kingdom-of-jerusalem' }],
  notableMembers: [
    P('godfrey-of-bouillon', 'Godfrey of Bouillon', 'Took Jerusalem in 1099 as "Advocate of the Holy Sepulchre"'),
    P('baldwin-i-of-jerusalem', 'Baldwin I', 'First to take the title King of Jerusalem'),
    P('baldwin-ii-of-jerusalem', 'Baldwin II', 'Cousin of Rethel; consolidated the kingdom')
  ],
  cadetBranches: [
    { name: 'House of Anjou-Rethel', note: 'Baldwin II’s daughter Melisende married Fulk of Anjou, carrying the crown to the Angevin line.' }
  ],
  familyTree: {
    caption: 'The Ardennes-Bouillon family that founded the Kingdom of Jerusalem: the brothers Godfrey and Baldwin I of Boulogne, and their kinsman Baldwin II of Rethel, whose daughter Melisende carried the crown to the House of Anjou-Rethel.',
    root: {
      name: 'Counts of Boulogne and Rethel', note: 'the Ardennes-Bouillon family',
      children: [
        { name: 'Godfrey of Bouillon', personSlug: 'godfrey-of-bouillon', note: 'ruled 1099–1100' },
        { name: 'Baldwin I', personSlug: 'baldwin-i-of-jerusalem', note: 'r. 1100–1118' },
        { name: 'Baldwin II', personSlug: 'baldwin-ii-of-jerusalem', note: 'cousin of Rethel; r. 1118–1131', branch: '→ House of Anjou-Rethel (via Melisende)' }
      ]
    }
  },
  contentSections: [
    { title: 'Origins', paragraphs: [
      'The family were counts of Boulogne and lords in the Ardennes, and Godfrey of Bouillon, Duke of Lower Lorraine, was one of the principal leaders of the First Crusade launched in 1096. After the bloody capture of Jerusalem in 1099, the crusaders chose Godfrey to rule.',
      'Godfrey refused the title of king in the city where Christ had worn a crown of thorns, taking instead the style "Advocate of the Holy Sepulchre". His early death in 1100 left the new conquest without a settled monarchy.'
    ]},
    { title: 'The first kings', paragraphs: [
      'Godfrey’s brother Baldwin, Count of Edessa, had no such scruples: he came south, was crowned in Bethlehem, and ruled as Baldwin I, the first King of Jerusalem. He expanded the kingdom by seizing the coastal cities with the help of the Italian fleets, giving it ports and revenue.',
      'On his death in 1118 the crown passed to his cousin Baldwin of Bourcq, Count of Edessa, of the related Rethel family, who ruled as Baldwin II.'
    ]},
    { title: 'Baldwin II and the succession', paragraphs: [
      'Baldwin II defended the kingdom against its Muslim neighbours, survived captivity, and presided over the early growth of the military orders — the Templars were founded in his reign. But he left only daughters.',
      'To secure the succession he married his eldest daughter and heiress, Melisende, to Fulk V, Count of Anjou, so that on his death in 1131 the crown of Jerusalem passed to the Angevin House of Anjou-Rethel.'
    ]},
    { title: 'Legacy', paragraphs: [
      'The House of Boulogne founded the Kingdom of Jerusalem and gave it its first institutions, its coastal cities, and its place at the head of the crusader states. Godfrey of Bouillon became a legend of Christian chivalry, remembered among the Nine Worthies.',
      'Through Melisende’s marriage the dynasty’s achievement passed to the Angevin kings under whom the kingdom reached its height — and then its crisis.'
    ]}
  ],
  timeline: [
    { date: '1099', title: 'Capture of Jerusalem', description: 'Godfrey of Bouillon becomes the first Frankish ruler of the city.', links: [{ title: 'Godfrey of Bouillon', type: 'person', slug: 'godfrey-of-bouillon' }] },
    { date: '1100', title: 'Baldwin I crowned king', description: 'Godfrey’s brother takes the royal title.', links: [{ title: 'Baldwin I', type: 'person', slug: 'baldwin-i-of-jerusalem' }] },
    { date: '1118', title: 'Accession of Baldwin II', description: 'The crown passes to the Rethel cousin.', links: [{ title: 'Baldwin II', type: 'person', slug: 'baldwin-ii-of-jerusalem' }] },
    { date: '1131', title: 'Crown passes to Anjou', description: 'Melisende and Fulk of Anjou inherit the kingdom.' }
  ],
  relatedEntries: {
    people: [
      { title: 'Godfrey of Bouillon', type: 'person', slug: 'godfrey-of-bouillon', label: 'Founder' },
      { title: 'Baldwin I', type: 'person', slug: 'baldwin-i-of-jerusalem', label: 'First king' },
      { title: 'Baldwin II', type: 'person', slug: 'baldwin-ii-of-jerusalem', label: 'Consolidated the kingdom' }
    ],
    locations: [{ title: 'Kingdom of Jerusalem', type: 'location', slug: 'kingdom-of-jerusalem', label: 'The kingdom they founded' }],
    houses: [{ title: 'House of Anjou-Rethel', type: 'house', slug: 'house-of-anjou-rethel', label: 'The Angevin line that succeeded them' }]
  },
  sources: [
    { title: 'Godfrey of Bouillon — Encyclopaedia Britannica', author: 'Encyclopaedia Britannica', type: 'encyclopedia', url: 'https://www.britannica.com/biography/Godfrey-of-Bouillon' },
    { title: 'Kingdom of Jerusalem — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Kingdom_of_Jerusalem' },
    { title: 'Baldwin I — Encyclopaedia Britannica', author: 'Encyclopaedia Britannica', type: 'encyclopedia', url: 'https://www.britannica.com/biography/Baldwin-I-king-of-Jerusalem' }
  ]
}

/* ------------------------------------------------------ ANJOU-RETHEL */
const anjouRethel = {
  id: 'house-of-anjou-rethel',
  type: 'house',
  name: 'House of Anjou-Rethel',
  aliases: ['Anjou-Rethel', 'House of Anjou / Montferrat', 'Angevin kings of Jerusalem'],
  originYear: 1131,
  endYear: 1205,
  reignSpan: '1131–1205',
  region: 'Kingdom of Jerusalem',
  originPlace: 'Anjou and the Holy Land',
  arms: 'Argent, a cross potent between four crosslets or — the arms of the Kingdom of Jerusalem',
  image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Coronation%20of%20Baldwin%20IV.jpg?width=1000',
  imageInfo: {
    caption: 'The coronation of the young Baldwin IV, the "Leper King" of Jerusalem, in a manuscript of William of Tyre.',
    creator: 'Manuscript of the Histoire d’Outremer (William of Tyre)',
    date: '13th–14th century',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Coronation_of_Baldwin_IV.jpg',
    note: 'A later crusader-chronicle miniature of the most famous king of the Angevin line of Jerusalem.'
  },
  summary: 'The Angevin dynasty of Jerusalem, descended from Fulk of Anjou and Queen Melisende, that ruled the crusader kingdom at its height and through its crisis.',
  overview: 'The House of Anjou-Rethel — a Jerusalem dynasty entirely distinct from the Angevin Plantagenets and the later Capetian House of Anjou — ruled the crusader Kingdom of Jerusalem from 1131. Founded by the marriage of Fulk of Anjou to the heiress Melisende, it produced the kingdom’s greatest kings and the tragic "Leper King" Baldwin IV, before the disaster at Hattin destroyed the kingdom in 1187.',
  founder: { displayName: 'Fulk of Anjou', note: 'Count of Anjou who married the heiress Melisende and became king of Jerusalem in 1131 (no Codex article yet)' },
  seats: [{ name: 'Kingdom of Jerusalem', type: 'location', slug: 'kingdom-of-jerusalem' }],
  notableMembers: [
    P('melisende-of-jerusalem', 'Melisende', 'Heiress and queen; co-ruler of the kingdom'),
    P('baldwin-iii-of-jerusalem', 'Baldwin III', 'Recovered royal authority; lost Edessa'),
    P('amalric-i-of-jerusalem', 'Amalric I', 'Invaded Egypt at the height of the kingdom'),
    P('baldwin-iv-of-jerusalem', 'Baldwin IV', 'The "Leper King" who checked Saladin'),
    P('sibylla-of-jerusalem', 'Sibylla', 'Queen; her husband Guy of Lusignan lost at Hattin'),
    P('baldwin-v-of-jerusalem', 'Baldwin V', 'Child king; died young'),
    P('isabella-i-of-jerusalem', 'Isabella I', 'Queen through whom the crown passed on after Hattin')
  ],
  familyTree: {
    caption: 'The Angevin kings of Jerusalem, from the marriage of Fulk of Anjou and Queen Melisende to Isabella I. Sibylla’s and Isabella’s husbands ruled as kings by right of their wives. ⚭ marks a marriage.',
    root: {
      name: 'Fulk of Anjou', note: 'Count of Anjou; King of Jerusalem 1131–1143',
      spouse: { name: 'Melisende', personSlug: 'melisende-of-jerusalem', note: 'heiress and co-ruler' },
      children: [
        { name: 'Baldwin III', personSlug: 'baldwin-iii-of-jerusalem', note: 'r. 1143–1163, no issue' },
        {
          name: 'Amalric I', personSlug: 'amalric-i-of-jerusalem', note: 'r. 1163–1174',
          children: [
            { name: 'Baldwin IV the Leper', personSlug: 'baldwin-iv-of-jerusalem', note: 'r. 1174–1185' },
            {
              name: 'Sibylla', personSlug: 'sibylla-of-jerusalem', note: 'Queen; m. Guy of Lusignan',
              children: [{ name: 'Baldwin V', personSlug: 'baldwin-v-of-jerusalem', note: 'r. 1185–1186, child king' }]
            },
            { name: 'Isabella I', personSlug: 'isabella-i-of-jerusalem', note: 'Queen, r. 1192–1205 (half-sister)' }
          ]
        }
      ]
    }
  },
  contentSections: [
    { title: 'Origins', paragraphs: [
      'The dynasty began in 1129 when Fulk V, Count of Anjou — the grandfather of the Plantagenet Henry II, but here founding a wholly separate royal line — came to the Holy Land and married Melisende, heiress of Baldwin II. On Baldwin’s death in 1131 they became king and queen of Jerusalem.',
      'This House of Anjou-Rethel should not be confused with the Angevin Plantagenets or the later Capetian House of Anjou: it was its own dynasty, ruling in the crusader East.'
    ]},
    { title: 'Melisende and the height of the kingdom', paragraphs: [
      'Melisende was a powerful queen who ruled jointly with her husband and then contested power with her son Baldwin III. Under Baldwin III and his brother Amalric I the kingdom reached its greatest strength, even invading Fatimid Egypt in the 1160s in an attempt to control the Nile.',
      'But the same years saw the rise of a united Muslim Syria under Nur ad-Din and then Saladin, and the loss of the northern county of Edessa that had triggered the Second Crusade.'
    ]},
    { title: 'The Leper King and the road to Hattin', paragraphs: [
      'Amalric’s son Baldwin IV came to the throne as a boy already afflicted with leprosy. Despite his illness he proved a capable soldier, checking Saladin at Montgisard in 1177, but his early death and the disputed succession among the factions of his sister Sibylla and half-sister Isabella fatally divided the kingdom.',
      'Sibylla’s husband Guy of Lusignan, made king, led the army to catastrophe at the Battle of Hattin in 1187, after which Saladin took Jerusalem itself.'
    ]},
    { title: 'After the fall', paragraphs: [
      'The kingdom survived only as a coastal rump based at Acre, recovered in part by the Third Crusade. The crown passed through Isabella I and her successive husbands — of the houses of Montferrat, Champagne, and Lusignan — so that royal authority increasingly lay with the queen’s consorts rather than a single dynasty.',
      'With Isabella the direct Angevin line of Jerusalem effectively ended, and the much-reduced kingdom passed to other families.'
    ]},
    { title: 'Legacy', paragraphs: [
      'The House of Anjou-Rethel ruled Outremer at its zenith and presided over its greatest catastrophe. Its kings — especially Baldwin IV, the Leper King who never surrendered — became enduring figures of crusader history.',
      'The loss of Jerusalem in 1187 reshaped Europe’s relationship with the crusades, provoking the Third Crusade and centuries of efforts to recover the holy city.'
    ]}
  ],
  timeline: [
    { date: '1131', title: 'Fulk and Melisende crowned', description: 'The Angevin dynasty inherits the crusader kingdom.', links: [{ title: 'Melisende', type: 'person', slug: 'melisende-of-jerusalem' }] },
    { date: '1163', title: 'Amalric I invades Egypt', description: 'The kingdom reaches its greatest ambition.', links: [{ title: 'Amalric I', type: 'person', slug: 'amalric-i-of-jerusalem' }] },
    { date: '1177', title: 'Baldwin IV checks Saladin', description: 'The Leper King wins at Montgisard.', links: [{ title: 'Baldwin IV', type: 'person', slug: 'baldwin-iv-of-jerusalem' }] },
    { date: '1187', title: 'Battle of Hattin', description: 'The kingdom’s army is destroyed and Jerusalem falls.', links: [{ title: 'Battle of Hattin', type: 'event', slug: 'battle-of-hattin' }] }
  ],
  relatedEntries: {
    people: [
      { title: 'Baldwin IV', type: 'person', slug: 'baldwin-iv-of-jerusalem', label: 'The Leper King' },
      { title: 'Amalric I', type: 'person', slug: 'amalric-i-of-jerusalem', label: 'Height of the kingdom' },
      { title: 'Melisende', type: 'person', slug: 'melisende-of-jerusalem', label: 'Founding queen' }
    ],
    events: [
      { title: 'Battle of Hattin', type: 'event', slug: 'battle-of-hattin', label: 'The catastrophe of 1187' },
      { title: 'Third Crusade', type: 'event', slug: 'third-crusade', label: 'The response to the kingdom’s fall' }
    ],
    locations: [{ title: 'Kingdom of Jerusalem', type: 'location', slug: 'kingdom-of-jerusalem', label: 'Their realm' }],
    houses: [{ title: 'House of Boulogne', type: 'house', slug: 'house-of-boulogne', label: 'The founding dynasty they succeeded' }]
  },
  sources: [
    { title: 'Kingdom of Jerusalem — Encyclopaedia Britannica', author: 'Encyclopaedia Britannica', type: 'encyclopedia', url: 'https://www.britannica.com/place/kingdom-of-Jerusalem' },
    { title: 'Baldwin IV — Encyclopaedia Britannica', author: 'Encyclopaedia Britannica', type: 'encyclopedia', url: 'https://www.britannica.com/biography/Baldwin-IV' },
    { title: 'Melisende of Jerusalem — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Melisende,_Queen_of_Jerusalem' }
  ]
}

if (!Array.isArray(data.houses)) data.houses = []
for (const house of [boulogne, anjouRethel]) {
  const i = data.houses.findIndex((h) => h.id === house.id)
  if (i >= 0) data.houses[i] = house
  else data.houses.push(house)
}

writeFileSync(dataPath, JSON.stringify(data, null, 2))
console.log(`Batch H written. houses now (${data.houses.length}): ${data.houses.map((h) => h.id).join(', ')}`)
