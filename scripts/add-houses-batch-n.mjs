import { readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
const __dirname = dirname(fileURLToPath(import.meta.url))
const dataPath = join(__dirname, '..', 'server', 'data', 'history.json')
const data = JSON.parse(readFileSync(dataPath, 'utf8'))
const P = (slug, displayName, note) => ({ personSlug: slug, displayName, note })
const IMG = (f) => `https://commons.wikimedia.org/wiki/Special:FilePath/${f}?width=1000`
const ENG = () => ({ name: 'Kingdom of England', type: 'location', slug: 'kingdom-of-england' })
const DK = () => ({ name: 'Kingdom of Denmark', type: 'location', slug: 'kingdom-of-denmark' })
const SWE = () => ({ name: 'Kingdom of Sweden', type: 'location', slug: 'kingdom-of-sweden' })

// 1. House of Blois — Stephen and the Anarchy
const blois = {
  id: 'house-of-blois', type: 'house', name: 'House of Blois',
  aliases: ['House of Blois', 'Blois', 'de Blois', 'Blois dynasty'],
  originYear: 1135, endYear: 1154, reignSpan: '1135–1154 (England)', region: 'Blois & Champagne; England', originPlace: 'Blois, France',
  arms: 'Fixed royal arms of England postdate Stephen’s reign; the counts of Blois-Champagne used various coats, not a settled royal shield.',
  image: IMG('Great_Seal_of_King_Stephen_%28cropped%29_1.jpg'),
  imageInfo: { caption: 'The great seal of Stephen, King of England, enthroned with sword and orb — "Stephanus Dei Gratia Rex Anglorum."', creator: 'Royal chancery of England', date: '12th century (r. 1135–1154)', source: 'Wikimedia Commons', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Great_Seal_of_King_Stephen_(cropped)_1.jpg', note: 'A cast of Stephen’s contemporary great seal, the official image of his kingship.' },
  summary: 'The comital house of Blois-Champagne that briefly held the English crown under Stephen, whose disputed reign plunged England into the civil war called the Anarchy.',
  overview: 'Stephen of Blois, grandson of William the Conqueror through his mother Adela of Normandy, seized the English throne in 1135 ahead of Henry I’s designated heir, the Empress Matilda. The result was two decades of civil war, the Anarchy, ending when Stephen agreed to make Matilda’s son Henry of Anjou his heir — passing the crown to the House of Plantagenet in 1154.',
  founder: P('stephen-of-england', 'Stephen', 'Count of Boulogne who took the English crown in 1135'),
  seats: [ENG()],
  notableMembers: [
    P('stephen-of-england', 'Stephen', 'King of England, r. 1135–1154'),
    { displayName: 'Henry of Blois', note: 'His brother; powerful Bishop of Winchester and papal legate' },
    { displayName: 'Eustace IV of Boulogne', note: 'Stephen’s son and heir, who predeceased him in 1153' }
  ],
  familyTree: { caption: 'Stephen’s descent from the Conqueror through his mother Adela, and his son Eustace who died before him. ⚭ marks a marriage.', root: {
    name: 'Stephen-Henry, Count of Blois', note: 'crusader lord', spouse: { name: 'Adela of Normandy', note: 'daughter of William the Conqueror' },
    children: [
      { name: 'Stephen', personSlug: 'stephen-of-england', note: 'King of England, 1135–1154', children: [
        { name: 'Eustace IV', note: 'heir; died 1153' }
      ] },
      { name: 'Henry of Blois', note: 'Bishop of Winchester' }
    ]
  } },
  contentSections: [
    { title: 'Origins', paragraphs: [
      'The house sprang from the counts of Blois and Champagne, one of the greatest noble families of northern France. Stephen’s father, Count Stephen-Henry, was a leader of the First Crusade; his mother was Adela, a daughter of William the Conqueror, which gave Stephen a claim to the Anglo-Norman inheritance. Raised at the court of his uncle Henry I of England, Stephen was richly endowed and married the heiress of the county of Boulogne.',
      'That combination — royal Norman blood, English and continental estates, and a powerful churchman brother — made Stephen one of the strongest men in the kingdom when Henry I died.'
    ] },
    { title: 'The seizure of the crown and the Anarchy', paragraphs: [
      'Henry I had made his barons swear to accept his daughter, the Empress Matilda, as his heir, but on his death in 1135 Stephen crossed swiftly to England and had himself crowned before Matilda could act. Many barons accepted him, but Matilda and her half-brother Robert of Gloucester pressed her claim, and by 1139 England was at war.',
      'The struggle, remembered as the Anarchy, saw shifting fortunes: Stephen was captured at Lincoln in 1141 and briefly displaced, then restored; the chronicler’s phrase that "Christ and his saints slept" caught the lawlessness of a land fought over by rival garrisons for nearly twenty years.'
    ] },
    { title: 'The Treaty of Wallingford and the end', paragraphs: [
      'The deadlock broke when Matilda’s son Henry of Anjou invaded in 1153 and Stephen’s heir Eustace died. By the Treaty of Wallingford, Stephen kept the crown for his lifetime but recognised Henry as his successor, disinheriting his surviving son William.',
      'Stephen died in 1154, and Henry succeeded as Henry II, the first king of the House of Plantagenet. The house of Blois thus held the English throne for a single, troubled generation, remembered chiefly for the civil war its disputed succession unleashed.'
    ] }
  ],
  timeline: [
    { date: '1135', title: 'Stephen seizes the throne', description: 'On Henry I’s death Stephen is crowned ahead of the Empress Matilda.', links: [{ title: 'Stephen', type: 'person', slug: 'stephen-of-england' }] },
    { date: '1141', title: 'Captured at Lincoln', description: 'Stephen is taken prisoner and briefly loses power before being restored.' },
    { date: '1153', title: 'Treaty of Wallingford', description: 'Stephen recognises Henry of Anjou as heir, ending the Anarchy.' }
  ],
  relatedEntries: { people: [
    { title: 'Stephen', type: 'person', slug: 'stephen-of-england', label: 'The one Blois king of England' }
  ], locations: [ENG()], houses: [
    { title: 'House of Normandy', type: 'house', slug: 'house-of-normandy', label: 'The line of his grandfather William the Conqueror' },
    { title: 'House of Plantagenet', type: 'house', slug: 'house-of-plantagenet', label: 'The Angevins who succeeded him under Henry II' }
  ] },
  sources: [
    { title: 'Stephen — Encyclopaedia Britannica', author: 'Encyclopaedia Britannica', type: 'encyclopedia', url: 'https://www.britannica.com/biography/Stephen-king-of-England' },
    { title: 'Stephen, King of England — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Stephen,_King_of_England' },
    { title: 'The Anarchy — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/The_Anarchy' }
  ]
}

// 2. House of Griffin — the dukes of Pomerania and the Kalmar Union
const griffin = {
  id: 'house-of-griffin', type: 'house', name: 'House of Griffin',
  aliases: ['House of Griffin / Kalmar Union monarchy', 'House of Griffin', 'Griffin', 'Griffins', 'Griffin dynasty', 'Greifen', 'Pomeranian dynasty'],
  originYear: 1121, endYear: 1637, reignSpan: 'Pomerania c.1121–1637; Kalmar Union 1396–1439', region: 'Pomerania & the Kalmar Union', originPlace: 'Duchy of Pomerania',
  arms: 'Argent, a griffin segreant gules — the griffin of Pomerania.',
  image: IMG('Erik%20I,%201382-1459,%20hertig%20av%20Pommern%20konung%20av%20Danmark%20Norge%20och%20Sverige%20-%20Nationalmuseum%20-%2015058.tif'),
  imageInfo: { caption: 'Eric of Pomerania, the Griffin king of Denmark, Norway, and Sweden in the Kalmar Union.', creator: 'Unknown (Nationalmuseum, Stockholm)', date: 'Later portrait (Eric d. 1459)', source: 'Wikimedia Commons', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Erik_I,_1382-1459,_hertig_av_Pommern_konung_av_Danmark_Norge_och_Sverige_-_Nationalmuseum_-_15058.tif', note: 'A later painted portrait of Eric of Pomerania, not a contemporary likeness.' },
  summary: 'The Slavic-origin dynasty of the dukes of Pomerania, whose scion Eric of Pomerania ruled the three kingdoms of the Kalmar Union.',
  overview: 'The Griffins (Greifen) ruled the Duchy of Pomerania on the southern Baltic from the twelfth century until 1637, taking their name from the griffin on their arms. Their most far-reaching member was Eric of Pomerania, adopted heir of Margaret I, who wore the united crowns of Denmark, Norway, and Sweden before his deposition in 1439.',
  founder: { displayName: 'Wartislaw I', note: 'First historically attested Duke of Pomerania (no Codex article yet)' },
  notableMembers: [
    P('eric-of-pomerania', 'Eric of Pomerania', 'King of Denmark, Norway, and Sweden in the Kalmar Union'),
    { displayName: 'Wartislaw I', note: 'Founding duke of Pomerania, converted in the Wendish mission' },
    { displayName: 'Bogislaw X', note: '"the Great"; reunited the Pomeranian duchies (late 15th century)' }
  ],
  familyTree: { caption: 'The Griffin dukes of Pomerania, from whom Margaret I’s adopted heir Eric drew his royal claim; only Eric has a Codex article so far.', root: {
    name: 'Wartislaw I', note: 'first Duke of Pomerania',
    children: [
      { name: 'the Pomeranian dukes', note: 'the Griffin line', children: [
        { name: 'Eric of Pomerania', personSlug: 'eric-of-pomerania', note: 'King of the Kalmar Union, adopted heir of Margaret I' }
      ] }
    ]
  } },
  contentSections: [
    { title: 'Origins', paragraphs: [
      'The Griffins emerged as dukes of Pomerania in the early twelfth century, a Slavic-origin dynasty on the frontier where the Holy Roman Empire, Poland, and the pagan Baltic peoples met. Duke Wartislaw I accepted Christianity during the missions of the 1120s, and his descendants held Pomerania — often divided among branches such as Pomerania-Wolgast and Pomerania-Stettin — for five centuries until the line died out in 1637.',
      'Their emblem, the red griffin, gave the house its name and still appears in the arms of the Pomeranian lands.'
    ] },
    { title: 'Eric of Pomerania and the Kalmar Union', paragraphs: [
      'The dynasty’s greatest prize came through kinship with Denmark. Margaret I, who had united Denmark, Norway, and Sweden, had no surviving child, and she adopted her great-nephew, the Griffin prince Bogislaw, renamed Eric, as heir. Crowned king of the three realms in 1397, Eric ruled the Kalmar Union in his own right after Margaret’s death in 1412.',
      'His long reign was consumed by wars with the Hanseatic League and the Holstein counts over Schleswig, and by heavy taxation that alienated the Swedes. Rebellion drove him out: deposed in all three kingdoms by 1439, he withdrew to the island of Gotland, from which he raided Baltic shipping as a freebooter before returning at last to Pomerania.'
    ] },
    { title: 'Legacy', paragraphs: [
      'Eric’s fall passed the union crowns first to the Wittelsbach Christopher of Bavaria and then to the House of Oldenburg, but the Griffins kept Pomerania. The duchy remained a Baltic power, contested between Brandenburg and, later, Sweden, until the last Griffin duke died in 1637 during the Thirty Years’ War and the lands were partitioned.',
      'The house is remembered as the long-lived native dynasty of Pomerania and, briefly, as the ruling family of all three Scandinavian kingdoms.'
    ] }
  ],
  timeline: [
    { date: '1397', title: 'Eric crowned in the Kalmar Union', description: 'Margaret I’s Griffin heir is crowned king of Denmark, Norway, and Sweden.', links: [{ title: 'Eric of Pomerania', type: 'person', slug: 'eric-of-pomerania' }] },
    { date: '1439', title: 'Eric deposed', description: 'Rebellion drives him from all three thrones; he retires to Gotland.' },
    { date: '1637', title: 'End of the Griffin line', description: 'The last Duke of Pomerania dies and the duchy is partitioned.' }
  ],
  relatedEntries: { people: [
    { title: 'Eric of Pomerania', type: 'person', slug: 'eric-of-pomerania', label: 'The Griffin king of the Kalmar Union' }
  ], locations: [DK(), SWE()], houses: [
    { title: 'House of Estridsen', type: 'house', slug: 'house-of-estridsen', label: 'Margaret I’s house, from which he inherited the union' }
  ] },
  sources: [
    { title: 'House of Pomerania — Encyclopaedia Britannica', author: 'Encyclopaedia Britannica', type: 'encyclopedia', url: 'https://www.britannica.com/place/Pomerania' },
    { title: 'Eric of Pomerania — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Eric_of_Pomerania' },
    { title: 'House of Griffin — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/House_of_Pomerania' }
  ]
}

// 3. House of Mecklenburg — the Obotrite dukes and a king of Sweden
const mecklenburg = {
  id: 'house-of-mecklenburg', type: 'house', name: 'House of Mecklenburg',
  aliases: ['House of Mecklenburg', 'Mecklenburg', 'Mecklenburg dynasty', 'Obotrite dynasty'],
  originYear: 1131, endYear: 1918, reignSpan: 'Mecklenburg c.1131–1918; Sweden 1364–1389', region: 'Mecklenburg (northern Germany) & Sweden', originPlace: 'Mecklenburg, on the Baltic',
  arms: 'Or, a bull’s head sable, crowned, langued and armed — the bull’s head of Mecklenburg.',
  image: IMG('Albert%20III%20Mecklenburg-Sweden.jpg'),
  imageInfo: { caption: 'Albert of Mecklenburg, King of Sweden, in a later portrait bearing the arms of Mecklenburg and the Three Crowns of Sweden.', creator: 'Unknown (Schwerin collection)', date: 'Later portrait (Albert d. 1412)', source: 'Wikimedia Commons', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Albert_III_Mecklenburg-Sweden.jpg', note: 'A later dynastic portrait of Albert as King of Sweden, not a contemporary likeness.' },
  summary: 'The Mecklenburg dukes, descended from the Slavic Obotrite princes, one of whom — Albert — was elected King of Sweden before his defeat by Margaret I.',
  overview: 'The House of Mecklenburg traced its descent from Niklot, prince of the Obotrites, whose family became Christian German dukes on the Baltic after the Wendish Crusade. In 1364 the Swedish nobility, in revolt against Magnus IV, offered the crown to the Mecklenburg prince Albert; he reigned until 1389, when he was defeated and captured by Margaret I of Denmark.',
  founder: { displayName: 'Niklot', note: 'Prince of the Obotrites; ancestor of the Mecklenburg dukes (no Codex article yet)' },
  seats: [SWE()],
  notableMembers: [
    P('albert-of-mecklenburg', 'Albert of Mecklenburg', 'Duke of Mecklenburg elected King of Sweden, 1364–1389'),
    { displayName: 'Niklot', note: 'Obotrite prince who resisted Henry the Lion’s Wendish Crusade' },
    { displayName: 'Henry Borwin I', note: 'Niklot’s grandson; first Christian lord of Mecklenburg' }
  ],
  familyTree: { caption: 'The Mecklenburg line from its Obotrite founder Niklot to Albert, who took the Swedish crown; only Albert has a Codex article so far.', root: {
    name: 'Niklot', note: 'Prince of the Obotrites, d. 1160',
    children: [
      { name: 'the dukes of Mecklenburg', note: 'the Christianised German line', children: [
        { name: 'Albert of Mecklenburg', personSlug: 'albert-of-mecklenburg', note: 'King of Sweden, 1364–1389' }
      ] }
    ]
  } },
  contentSections: [
    { title: 'Origins', paragraphs: [
      'The house descended from Niklot, prince of the Obotrites, a confederation of Slavic peoples on the Baltic coast who resisted German and Danish expansion in the twelfth century. Niklot died fighting Henry the Lion’s Wendish Crusade in 1160, but his descendants accepted Christianity and German overlordship and were recognised as hereditary lords, later dukes, of Mecklenburg — a rare case of a native Slavic dynasty surviving the conquest to rule as imperial princes into the twentieth century.',
      'From their Baltic duchy the Mecklenburgs married into the royal houses of Scandinavia, which drew them into the politics of the northern kingdoms.'
    ] },
    { title: 'Albert, King of Sweden', paragraphs: [
      'In 1363 Swedish magnates in revolt against King Magnus IV turned to Duke Albert II of Mecklenburg, whose wife was a Swedish royal princess, and the next year his son Albert was elected and crowned King of Sweden. His reign depended on the great nobles who had raised him, and his attempts to build royal and Mecklenburg power against them steadily lost him support.',
      'When he moved to seize the estates of the powerful magnate Bo Jonsson Grip, the Swedish council offered the regency to Margaret I of Denmark. Albert marched against her and was decisively beaten and taken prisoner at Åsle in 1389.'
    ] },
    { title: 'Aftermath', paragraphs: [
      'Albert’s defeat delivered Sweden to Margaret and cleared the way for the Kalmar Union of 1397; after years of captivity he renounced his claim and returned to rule in Mecklenburg, where he died in 1412. The bitterness of the war lived on in the Baltic, where Mecklenburg-backed privateers, the Victual Brothers, plagued shipping for years.',
      'The ducal house itself endured far longer than its Swedish adventure: the Mecklenburgs ruled their German duchies until the fall of the monarchies in 1918.'
    ] }
  ],
  timeline: [
    { date: '1364', title: 'Albert crowned King of Sweden', description: 'Swedish nobles in revolt against Magnus IV elect the Mecklenburg prince.', links: [{ title: 'Albert of Mecklenburg', type: 'person', slug: 'albert-of-mecklenburg' }] },
    { date: '1389', title: 'Defeat at Åsle', description: 'Margaret I defeats and captures Albert, winning Sweden.' },
    { date: '1412', title: 'Death of Albert', description: 'The deposed king dies as Duke of Mecklenburg.' }
  ],
  relatedEntries: { people: [
    { title: 'Albert of Mecklenburg', type: 'person', slug: 'albert-of-mecklenburg', label: 'Mecklenburg duke and King of Sweden' }
  ], locations: [SWE()], houses: [
    { title: 'House of Bjälbo', type: 'house', slug: 'house-of-bjalbo', label: 'The Swedish royal house (Magnus IV) he displaced' },
    { title: 'House of Estridsen', type: 'house', slug: 'house-of-estridsen', label: 'Margaret I’s house, which defeated him' }
  ] },
  sources: [
    { title: 'Albert, king of Sweden — Encyclopaedia Britannica', author: 'Encyclopaedia Britannica', type: 'encyclopedia', url: 'https://www.britannica.com/biography/Albert-king-of-Sweden' },
    { title: 'Albert, King of Sweden — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Albert,_King_of_Sweden' },
    { title: 'House of Mecklenburg — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/House_of_Mecklenburg' }
  ]
}

// 4. House of Borjigin (Jochid line) — the Golden Horde
const borjigin = {
  id: 'house-of-borjigin', type: 'house', name: 'House of Borjigin',
  aliases: ['Borjigin (house of Jochi)', 'Borjigin', 'Borjigid', 'House of Jochi', 'Jochid', 'Golden Horde dynasty', 'Genghisid'],
  originYear: 1206, endYear: 1502, reignSpan: 'Golden Horde, 1240s–1502', region: 'The western Mongol steppe & the Rus’ lands', originPlace: 'The Mongolian steppe',
  arms: 'None — the Mongol khans used the tamga, a clan seal-mark, rather than European heraldry.',
  image: IMG('Batu_Khan_on_the_Throne_by_Rashid_al-Din_%28cropped%29.jpg'),
  imageInfo: { caption: 'Batu Khan enthroned as ruler of the Golden Horde, in a manuscript of Rashid al-Din’s Jami al-tawarikh.', creator: 'Rashid al-Din, Jami al-tawarikh', date: 'Manuscript c. 1430s (Batu d. 1255)', source: 'Wikimedia Commons', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Batu_Khan_on_the_Throne_by_Rashid_al-Din_(cropped).jpg', note: 'A Persian manuscript depiction from the Mongol historiographical tradition, not a life portrait.' },
  summary: 'The imperial clan of Genghis Khan, whose Jochid branch under Batu Khan founded the Golden Horde and dominated the Rus’ lands for over two centuries.',
  overview: 'The Borjigin were the ruling clan of the Mongol Empire, the house of Genghis Khan. Its senior western branch descended from his eldest son Jochi, and it was Jochi’s son Batu who led the Mongol conquest of Europe and founded the Golden Horde — the khanate that ruled the western steppe and held the Russian principalities in vassalage until the fifteenth century.',
  founder: { displayName: 'Genghis Khan', note: 'United the Mongols in 1206; founder of the Borjigin imperial clan (no Codex article yet)' },
  notableMembers: [
    P('batu-khan', 'Batu Khan', 'Founder of the Golden Horde; led the invasion of Europe'),
    { displayName: 'Jochi', note: 'Genghis Khan’s eldest son, from whom the western branch descends' },
    { displayName: 'Berke', note: 'Batu’s brother and successor; the first Mongol khan to adopt Islam' }
  ],
  familyTree: { caption: 'The Jochid branch of the Borjigin clan: Genghis Khan’s eldest son Jochi and his sons Batu and Berke, founders and rulers of the Golden Horde; only Batu has a Codex article so far.', root: {
    name: 'Genghis Khan', note: 'united the Mongols, 1206',
    children: [
      { name: 'Jochi', note: 'eldest son; the western ulus', children: [
        { name: 'Batu Khan', personSlug: 'batu-khan', note: 'founded the Golden Horde' },
        { name: 'Berke', note: 'khan; first Muslim convert of the line' }
      ] }
    ]
  } },
  contentSections: [
    { title: 'Origins', paragraphs: [
      'The Borjigin were the clan of Temüjin, who as Genghis Khan united the Mongol tribes in 1206 and built the largest contiguous land empire in history. In the Mongol system each of his sons received an ulus, a share of peoples and lands: to his eldest son Jochi fell the westernmost territories, "as far as Mongol hooves had trodden." Jochi died before his father, and his inheritance passed to his sons.',
      'From this Jochid branch — one line of the wider Genghisid house — grew the khanate that Europeans and Russians came to call the Golden Horde.'
    ] },
    { title: 'Batu Khan and the conquest of the west', paragraphs: [
      'Between 1236 and 1242 Jochi’s son Batu, with the veteran general Subutai directing the campaigns, led the Mongol armies across the Volga: they destroyed the Rus’ principalities, sacked Kiev in 1240, and burst into Central Europe, crushing the Hungarians at the Battle of Mohi and the Poles and Germans at Legnica in 1241. Only the death of the Great Khan Ögedei, which recalled the princes to the Mongol homeland, spared western Europe a deeper invasion.',
      'Batu withdrew to the lower Volga and made his capital at Sarai, organising the conquered steppe and the Russian lands into a durable state. Though he never took the title of Great Khan himself, his influence made him a decisive voice in the succession struggles of the empire.'
    ] },
    { title: 'The Golden Horde', paragraphs: [
      'The Jochid state Batu founded held the Russian principalities as tributaries for more than two centuries: their princes travelled to Sarai for the patent to rule, and Moscow’s later rise began as the horde’s favoured tax-collector. Under Batu’s brother Berke the ruling house adopted Islam, and the khanate became a major Islamic power straddling the trade routes between Europe and Asia.',
      'The Golden Horde fragmented in the fifteenth century into the khanates of Kazan, Astrakhan, and Crimea, and the "great horde" itself was extinguished in 1502 — but the Genghisid, Jochid bloodline remained the badge of legitimate rule across the steppe long afterward.'
    ] }
  ],
  timeline: [
    { date: '1206', title: 'Genghis Khan unites the Mongols', description: 'The Borjigin clan founds the Mongol Empire.' },
    { date: '1241', title: 'Battle of Mohi', description: 'Batu and Subutai destroy the Hungarian army in the invasion of Europe.', links: [{ title: 'Battle of Mohi', type: 'event', slug: 'battle-of-mohi' }] },
    { date: '1240s', title: 'The Golden Horde founded', description: 'Batu organises the western ulus from his capital at Sarai.', links: [{ title: 'Batu Khan', type: 'person', slug: 'batu-khan' }] }
  ],
  relatedEntries: { people: [
    { title: 'Batu Khan', type: 'person', slug: 'batu-khan', label: 'Founder of the Golden Horde' },
    { title: 'Subutai', type: 'person', slug: 'subutai', label: 'The general who won his European campaigns' }
  ], events: [{ title: 'Battle of Mohi', type: 'event', slug: 'battle-of-mohi', label: 'Batu’s destruction of Hungary, 1241' }] },
  sources: [
    { title: 'Batu — Encyclopaedia Britannica', author: 'Encyclopaedia Britannica', type: 'encyclopedia', url: 'https://www.britannica.com/biography/Batu' },
    { title: 'Batu Khan — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Batu_Khan' },
    { title: 'Golden Horde — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Golden_Horde' }
  ]
}

if (!Array.isArray(data.houses)) data.houses = []
for (const house of [blois, griffin, mecklenburg, borjigin]) {
  const i = data.houses.findIndex((h) => h.id === house.id)
  if (i >= 0) data.houses[i] = house; else data.houses.push(house)
}
writeFileSync(dataPath, JSON.stringify(data, null, 2))
console.log(`Batch N written. houses now (${data.houses.length}).`)
