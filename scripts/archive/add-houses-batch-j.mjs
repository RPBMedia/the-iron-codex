import { readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
const __dirname = dirname(fileURLToPath(import.meta.url))
const dataPath = join(__dirname, '..', 'server', 'data', 'history.json')
const data = JSON.parse(readFileSync(dataPath, 'utf8'))
const P = (slug, displayName, note) => ({ personSlug: slug, displayName, note })
const IMG = (f) => `https://commons.wikimedia.org/wiki/Special:FilePath/${f}?width=1000`
const SWEDEN = () => ({ name: 'Kingdom of Sweden', type: 'location', slug: 'kingdom-of-sweden' })

const munso = {
  id: 'house-of-munso', type: 'house', name: 'House of Munsö',
  aliases: ['House of Munsö / early Swedish line', 'Early Swedish royal line', 'Munsö dynasty', 'House of Munso', 'Munsö'],
  originYear: 970, endYear: 1060, reignSpan: 'c. 970–1060', region: 'Kingdom of Sweden', originPlace: 'Uppland, Sweden',
  arms: 'No medieval arms; the dynasty predates Swedish heraldry',
  image: IMG('Olaf%20Scotking%20of%20Sweden%20coin%20c%201030.jpg'),
  imageInfo: { caption: 'A silver penny of Olof Skötkonung, the first coins struck in Sweden, minted at Sigtuna around 1030.', creator: 'Royal mint at Sigtuna', date: 'c. 995–1030', source: 'Wikimedia Commons', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Olaf_Scotking_of_Sweden_coin_c_1030.jpg', note: 'A contemporary object of the dynasty — Sweden’s earliest coinage, struck under Olof Skötkonung.' },
  summary: 'The earliest historically attested Swedish royal dynasty, which produced the first Christian king and Sweden’s first coins.',
  overview: 'The House of Munsö is the earliest Swedish royal line known to history, ruling from the late tenth century. Under Eric the Victorious and his son Olof Skötkonung — the first Christian king of the Swedes and the first to strike Swedish coins — it began Sweden’s conversion, before the line failed and the crown passed to the House of Stenkil.',
  founder: P('eric-the-victorious', 'Eric the Victorious', 'First reliably historical king of the Swedes'),
  seats: [SWEDEN()],
  notableMembers: [
    P('eric-the-victorious', 'Eric the Victorious', 'Won the throne and defeated a rival at Fýrisvellir'),
    P('olof-skotkonung', 'Olof Skötkonung', 'First Christian king; struck Sweden’s first coins'),
    P('anund-jacob', 'Anund Jacob', 'Allied with Norway against Cnut the Great'),
    P('emund-the-old', 'Emund the Old', 'Last king of the Munsö line')
  ],
  familyTree: { caption: 'The early Swedish kings of the Munsö line, from Eric the Victorious to Emund the Old, after whom the crown passed to the House of Stenkil.', root: {
    name: 'Eric the Victorious', personSlug: 'eric-the-victorious', note: 'r. c. 970–995',
    children: [{ name: 'Olof Skötkonung', personSlug: 'olof-skotkonung', note: 'r. c. 995–1022', children: [
      { name: 'Anund Jacob', personSlug: 'anund-jacob', note: 'r. 1022–1050' },
      { name: 'Emund the Old', personSlug: 'emund-the-old', note: 'r. 1050–1060' }
    ] }]
  } },
  contentSections: [
    { title: 'Origins', paragraphs: [
      'The House of Munsö is the first Swedish royal line that can be placed in history rather than legend. Its founder, Eric the Victorious, ruled the Svear from the region around Uppsala and, according to tradition, defeated his nephew Styrbjörn at the battle of Fýrisvellir around 985.',
      'Sweden at this time was still largely pagan, centred on the great temple at Uppsala, and the kings ruled a loose realm of the Svear and Götar rather than a unified state.'
    ] },
    { title: 'Olof Skötkonung and conversion', paragraphs: [
      'Eric’s son Olof Skötkonung became the first Swedish king to accept Christianity, was baptised, and struck Sweden’s earliest coins at Sigtuna. His conversion was partial — the pagan cult at Uppsala continued — but it began the long Christianisation of the Swedes.',
      'Olof allied by marriage with the Norwegian and Danish royal houses, and his reign drew Sweden into the wider politics of the Viking-age North.'
    ] },
    { title: 'End of the line', paragraphs: [
      'Olof’s sons Anund Jacob and Emund the Old ruled in turn. Anund Jacob joined Norway’s Olaf Haraldsson against the empire of Cnut the Great, while Emund quarrelled with the Church over the organisation of the Swedish bishoprics.',
      'Emund died around 1060 without a male heir, ending the Munsö dynasty; the magnates then chose Stenkil, a Götar lord married into the royal family, beginning the House of Stenkil.'
    ] }
  ],
  timeline: [
    { date: 'c. 985', title: 'Eric the Victorious', description: 'The first historical Swedish king consolidates his rule.', links: [{ title: 'Eric the Victorious', type: 'person', slug: 'eric-the-victorious' }] },
    { date: 'c. 1000', title: 'Olof Skötkonung baptised', description: 'The first Christian king of the Swedes; first Swedish coins struck.', links: [{ title: 'Olof Skötkonung', type: 'person', slug: 'olof-skotkonung' }] },
    { date: '1060', title: 'End of the Munsö line', description: 'Emund the Old dies; the crown passes to Stenkil.', links: [{ title: 'Emund the Old', type: 'person', slug: 'emund-the-old' }] }
  ],
  relatedEntries: { people: [
    { title: 'Eric the Victorious', type: 'person', slug: 'eric-the-victorious', label: 'Founder' },
    { title: 'Olof Skötkonung', type: 'person', slug: 'olof-skotkonung', label: 'First Christian king' },
    { title: 'Anund Jacob', type: 'person', slug: 'anund-jacob', label: 'Rival of Cnut the Great' }
  ], locations: [SWEDEN()], houses: [{ title: 'House of Stenkil', type: 'house', slug: 'house-of-stenkil', label: 'The dynasty that succeeded them' }] },
  sources: [
    { title: 'House of Munsö — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/House_of_Muns%C3%B6' },
    { title: 'Olof Skötkonung — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Olof_Sk%C3%B6tkonung' },
    { title: 'Sweden: history — Encyclopaedia Britannica', author: 'Encyclopaedia Britannica', type: 'encyclopedia', url: 'https://www.britannica.com/place/Sweden' }
  ]
}

const stenkil = {
  id: 'house-of-stenkil', type: 'house', name: 'House of Stenkil',
  aliases: ['Stenkil dynasty', 'Stenkil'],
  originYear: 1060, endYear: 1125, reignSpan: 'c. 1060–1125', region: 'Kingdom of Sweden', originPlace: 'Västergötland, Sweden',
  arms: 'No medieval arms; the dynasty predates Swedish heraldry',
  image: IMG('Ingold%20the%20Elder%20of%20Sweden%20cenotaph%202009%20Varnhem%20Axvall%20(2).jpg'),
  imageInfo: { caption: 'The cenotaph of King Inge the Elder of the House of Stenkil, at Varnhem in Västergötland.', creator: 'Medieval/later grave monument, Varnhem Abbey', date: 'Inge the Elder d. c. 1110', source: 'Wikimedia Commons', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Ingold_the_Elder_of_Sweden_cenotaph_2009_Varnhem_Axvall_(2).jpg', note: 'A grave monument associated with the Stenkil king Inge the Elder; no contemporary portrait survives.' },
  summary: 'The Götar dynasty that ruled Sweden after the Munsö line and firmly established Christian kingship.',
  overview: 'The House of Stenkil took the Swedish throne around 1060, when the magnates chose Stenkil, a lord of Västergötland, after the Munsö line died out. Its kings — above all Inge the Elder — consolidated Christianity in Sweden against a pagan reaction, though the dynasty’s hold was repeatedly contested.',
  founder: P('stenkil', 'Stenkil', 'Elected king after the Munsö line failed'),
  seats: [SWEDEN()],
  notableMembers: [
    P('stenkil', 'Stenkil', 'Founder; a Christian Götar king'),
    P('inge-the-elder', 'Inge the Elder', 'Defended Christianity against the pagan reaction'),
    P('philip-halstensson', 'Philip Halstensson', 'Co-king of the later Stenkil line'),
    P('inge-the-younger', 'Inge the Younger', 'Last king of the dynasty')
  ],
  familyTree: { caption: 'The Stenkil kings: Stenkil and his sons Inge the Elder and Halsten, and Halsten’s sons Philip and Inge the Younger, who ruled jointly.', root: {
    name: 'Stenkil', personSlug: 'stenkil', note: 'r. c. 1060–1066',
    children: [
      { name: 'Inge the Elder', personSlug: 'inge-the-elder', note: 'r. c. 1079–1110' },
      { name: 'Halsten', note: 'co-king; d. c. 1084', children: [
        { name: 'Philip Halstensson', personSlug: 'philip-halstensson', note: 'r. c. 1110–1118' },
        { name: 'Inge the Younger', personSlug: 'inge-the-younger', note: 'r. c. 1118–1125' }
      ] }
    ]
  } },
  contentSections: [
    { title: 'Origins', paragraphs: [
      'When the Munsö line failed around 1060, the Swedes elected Stenkil, a powerful lord of Västergötland who had married a daughter of Emund the Old. His accession shifted the centre of royal power toward the Christian Götar lands in the south-west.',
      'Stenkil was a firm supporter of the Church, and his short reign helped entrench Christian kingship in a realm where the old religion remained strong.'
    ] },
    { title: 'Inge the Elder and the pagan reaction', paragraphs: [
      'Stenkil’s son Inge the Elder is the best-remembered king of the line. According to later tradition he was driven from the throne for refusing to sacrifice to the old gods at Uppsala, replaced by his pagan brother-in-law "Blot-Sweyn", but returned to kill the usurper and restore Christian rule.',
      'The story, recorded much later, dramatises the real struggle between Christianity and the Uppsala cult that marked Inge’s reign.'
    ] },
    { title: 'End of the line', paragraphs: [
      'Inge the Elder was followed by his nephews Philip and Inge the Younger, sons of his brother Halsten, who ruled jointly. Their reigns are thinly documented, and with the death of Inge the Younger around 1125 the Stenkil dynasty ended.',
      'The crown then fell into a long contest between the rival houses of Sverker and Erik.'
    ] }
  ],
  timeline: [
    { date: 'c. 1060', title: 'Stenkil elected king', description: 'A Götar lord succeeds the Munsö line.', links: [{ title: 'Stenkil', type: 'person', slug: 'stenkil' }] },
    { date: 'c. 1080', title: 'Inge the Elder and the Uppsala cult', description: 'The king defends Christianity against the pagan reaction.', links: [{ title: 'Inge the Elder', type: 'person', slug: 'inge-the-elder' }] },
    { date: 'c. 1125', title: 'End of the dynasty', description: 'Inge the Younger dies; the Sverker–Erik wars follow.', links: [{ title: 'Inge the Younger', type: 'person', slug: 'inge-the-younger' }] }
  ],
  relatedEntries: { people: [
    { title: 'Stenkil', type: 'person', slug: 'stenkil', label: 'Founder' },
    { title: 'Inge the Elder', type: 'person', slug: 'inge-the-elder', label: 'Defender of Christianity' },
    { title: 'Inge the Younger', type: 'person', slug: 'inge-the-younger', label: 'Last of the line' }
  ], locations: [SWEDEN()], houses: [{ title: 'House of Munsö', type: 'house', slug: 'house-of-munso', label: 'The dynasty they succeeded' }] },
  sources: [
    { title: 'House of Stenkil — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/House_of_Stenkil' },
    { title: 'Inge the Elder — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Inge_the_Elder' },
    { title: 'Sweden: the Middle Ages — Encyclopaedia Britannica', author: 'Encyclopaedia Britannica', type: 'encyclopedia', url: 'https://www.britannica.com/place/Sweden' }
  ]
}

const sverker = {
  id: 'house-of-sverker', type: 'house', name: 'House of Sverker',
  aliases: ['Sverker dynasty', 'Sverker'],
  originYear: 1130, endYear: 1222, reignSpan: '1130–1222', region: 'Kingdom of Sweden', originPlace: 'Östergötland, Sweden',
  arms: 'Attributed later arms: a griffin — the emblem of Östergötland associated with the dynasty',
  image: IMG('Alvastra.%20Cloister%20Ruins%20(3611182839).jpg'),
  imageInfo: { caption: 'The ruins of Alvastra Abbey, founded by King Sverker I and the burial place of the Sverker dynasty.', creator: 'Cistercian abbey, Östergötland (photograph)', date: 'Abbey founded 1143', source: 'Wikimedia Commons', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Alvastra._Cloister_Ruins_(3611182839).jpg', note: 'The dynastic monastery and burial church of the Sverkers; no contemporary portrait of the kings survives.' },
  summary: 'One of the two rival dynasties that fought for the Swedish crown in the twelfth and early thirteenth centuries.',
  overview: 'The House of Sverker, based in Östergötland, was one of the two families — with the House of Erik — that alternated on the Swedish throne through a century of dynastic civil war. Its founder Sverker I founded Alvastra Abbey; his descendants ruled between Erik kings until the line ended in 1222.',
  founder: P('sverker-i-of-sweden', 'Sverker I', 'Founder; united the Götar and Svear crowns'),
  seats: [SWEDEN()],
  notableMembers: [
    P('sverker-i-of-sweden', 'Sverker I', 'Founder; patron of Alvastra Abbey'),
    P('charles-vii-sverkersson', 'Charles VII', 'Sverker’s son; one of the first to use the royal number'),
    P('sverker-ii-of-sweden', 'Sverker II', 'Fought the Erik dynasty for the throne'),
    P('john-i-sverkersson', 'John I', 'Last Sverker king of Sweden')
  ],
  familyTree: { caption: 'The Sverker kings of Sweden, who alternated the throne with the rival House of Erik. Reigns were often separated by Erik kings; notes flag the succession.', root: {
    name: 'Sverker I', personSlug: 'sverker-i-of-sweden', note: 'r. c. 1130–1156',
    children: [{ name: 'Charles VII', personSlug: 'charles-vii-sverkersson', note: 'r. 1161–1167', children: [
      { name: 'Sverker II', personSlug: 'sverker-ii-of-sweden', note: 'r. 1196–1208', children: [
        { name: 'John I', personSlug: 'john-i-sverkersson', note: 'r. 1216–1222, last of the line' }
      ] }
    ] }]
  } },
  contentSections: [
    { title: 'Origins', paragraphs: [
      'Sverker I, a magnate of Östergötland, took the Swedish throne around 1130 amid the disorder that followed the Stenkil dynasty. He is credited with bringing the Cistercian order to Sweden, founding Alvastra Abbey in 1143, which became the burial church of his family.',
      'His accession opened a century in which the crown passed back and forth between his descendants and those of his rival, the House of Erik.'
    ] },
    { title: 'The Sverker–Erik wars', paragraphs: [
      'For four generations the two families fought for the Swedish crown, and it became almost a custom that a king of one house would be succeeded by a king of the other. Sverker I was murdered; his son Charles VII took the throne after the Erik king Eric IX was killed; Charles in turn was killed by Eric IX’s son.',
      'This alternation, unusual in medieval Europe, reflected a Swedish kingship still elective and shared between the great provinces of Götaland and Svealand.'
    ] },
    { title: 'End of the line', paragraphs: [
      'Sverker II fought the Erik dynasty and fell in battle in 1210. His son John I, the last of the Sverkers, ruled peacefully but briefly and died without an heir in 1222.',
      'With John’s death the Sverker line ended; the crown passed for a time to the House of Erik and then, through marriage, toward the rising House of Bjälbo.'
    ] }
  ],
  timeline: [
    { date: 'c. 1130', title: 'Sverker I takes the throne', description: 'A new dynasty rises in Östergötland.', links: [{ title: 'Sverker I', type: 'person', slug: 'sverker-i-of-sweden' }] },
    { date: '1143', title: 'Alvastra Abbey founded', description: 'The Cistercians come to Sweden; the dynastic burial church is established.' },
    { date: '1222', title: 'End of the Sverker line', description: 'John I dies without an heir.', links: [{ title: 'John I', type: 'person', slug: 'john-i-sverkersson' }] }
  ],
  relatedEntries: { people: [
    { title: 'Sverker I', type: 'person', slug: 'sverker-i-of-sweden', label: 'Founder' },
    { title: 'Sverker II', type: 'person', slug: 'sverker-ii-of-sweden', label: 'Fought the Erik dynasty' },
    { title: 'John I', type: 'person', slug: 'john-i-sverkersson', label: 'Last of the line' }
  ], locations: [SWEDEN()], houses: [{ title: 'House of Erik', type: 'house', slug: 'house-of-erik', label: 'The rival dynasty' }] },
  sources: [
    { title: 'House of Sverker — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/House_of_Sverker' },
    { title: 'Sverker I — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Sverker_I_of_Sweden' },
    { title: 'Sweden: the Middle Ages — Encyclopaedia Britannica', author: 'Encyclopaedia Britannica', type: 'encyclopedia', url: 'https://www.britannica.com/place/Sweden' }
  ]
}

const erik = {
  id: 'house-of-erik', type: 'house', name: 'House of Erik',
  aliases: ['Erik dynasty', 'Eriksson dynasty', 'House of Eric'],
  originYear: 1156, endYear: 1250, reignSpan: '1156–1250', region: 'Kingdom of Sweden', originPlace: 'Sweden',
  arms: 'Attributed later arms: three crowns and a lion — emblems later associated with Sweden',
  image: IMG('Eric%20the%20Holy%20of%20Sweden%20(crop).jpg'),
  imageInfo: { caption: 'Saint Eric (Eric IX), the dynasty’s founder and patron saint of Sweden, in a medieval image.', creator: 'Medieval Swedish church art', date: 'Eric IX d. 1160', source: 'Wikimedia Commons', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Eric_the_Holy_of_Sweden_(crop).jpg', note: 'A devotional image of Saint Eric, venerated as Sweden’s patron; it is a cult image rather than a portrait from life.' },
  summary: 'The rival of the Sverkers for the Swedish crown, and the dynasty of Saint Eric, Sweden’s patron saint.',
  overview: 'The House of Erik, descended from Eric IX — later venerated as Saint Eric, patron of Sweden — was one of the two dynasties that fought for the Swedish throne in the twelfth and thirteenth centuries. Alternating power with the House of Sverker, its kings advanced Christianity and royal authority before the line ended and the crown passed to the House of Bjälbo.',
  founder: P('eric-ix-of-sweden', 'Eric IX (Saint Eric)', 'Founder; patron saint of Sweden'),
  seats: [SWEDEN()],
  notableMembers: [
    P('eric-ix-of-sweden', 'Eric IX (Saint Eric)', 'Founder; Sweden’s patron saint'),
    P('knut-eriksson', 'Knut Eriksson', 'Avenged his father and secured the throne'),
    P('erik-knutsson', 'Erik Knutsson', 'Defeated the Sverkers to reclaim the crown'),
    P('eric-xi-eriksson', 'Eric XI', 'Last king of the Erik dynasty')
  ],
  familyTree: { caption: 'The Erik kings of Sweden, from Saint Eric to Eric XI, who alternated the throne with the House of Sverker. After Eric XI the crown passed to the House of Bjälbo.', root: {
    name: 'Eric IX (Saint Eric)', personSlug: 'eric-ix-of-sweden', note: 'r. 1156–1160',
    children: [{ name: 'Knut Eriksson', personSlug: 'knut-eriksson', note: 'r. 1167–1196', children: [
      { name: 'Erik Knutsson', personSlug: 'erik-knutsson', note: 'r. 1208–1216', children: [
        { name: 'Eric XI', personSlug: 'eric-xi-eriksson', note: 'r. 1222–1250, last of the line', branch: '→ House of Bjälbo' }
      ] }
    ] }]
  } },
  contentSections: [
    { title: 'Origins', paragraphs: [
      'The dynasty’s founder, Eric IX, ruled Sweden from about 1156 and is remembered as a law-giver and crusader who, by tradition, led an expedition to Christianise Finland. He was killed at Uppsala in 1160 by a rival, and his tomb became a centre of pilgrimage.',
      'Venerated as Saint Eric, he became the patron saint of Sweden and the emblem of its medieval monarchy, his image and the "Eric penny" tying the dynasty to the sacred.'
    ] },
    { title: 'The wars with the Sverkers', paragraphs: [
      'Eric IX’s death began the long alternation of the Erik and Sverker houses on the throne. His son Knut Eriksson killed the Sverker king Charles VII to avenge his father and ruled for nearly thirty years, and the two families continued to trade the crown by war and assassination into the thirteenth century.',
      'Erik Knutsson defeated the Sverkers in battle to reclaim the throne, but the struggle repeatedly threw the kingdom into civil war.'
    ] },
    { title: 'End of the line', paragraphs: [
      'The last Erik king, Eric XI, ruled with the powerful jarl Birger of the House of Bjälbo as the real power behind the throne. When Eric XI died childless in 1250, Birger secured the crown for his own son Valdemar.',
      'So the Erik dynasty gave way to the Bjälbo (Folkung) line, which would build the medieval Swedish state.'
    ] }
  ],
  timeline: [
    { date: '1156', title: 'Eric IX becomes king', description: 'The founder and future patron saint takes the throne.', links: [{ title: 'Eric IX (Saint Eric)', type: 'person', slug: 'eric-ix-of-sweden' }] },
    { date: '1160', title: 'Martyrdom of Saint Eric', description: 'Eric IX is killed at Uppsala and venerated as a saint.' },
    { date: '1250', title: 'End of the Erik line', description: 'Eric XI dies; the crown passes to the House of Bjälbo.', links: [{ title: 'Eric XI', type: 'person', slug: 'eric-xi-eriksson' }] }
  ],
  relatedEntries: { people: [
    { title: 'Eric IX (Saint Eric)', type: 'person', slug: 'eric-ix-of-sweden', label: 'Founder; patron saint' },
    { title: 'Knut Eriksson', type: 'person', slug: 'knut-eriksson', label: 'Secured the throne' },
    { title: 'Eric XI', type: 'person', slug: 'eric-xi-eriksson', label: 'Last of the line' }
  ], locations: [SWEDEN()], houses: [
    { title: 'House of Sverker', type: 'house', slug: 'house-of-sverker', label: 'The rival dynasty' },
    { title: 'House of Bjälbo', type: 'house', slug: 'house-of-bjalbo', label: 'The dynasty that succeeded them' }
  ] },
  sources: [
    { title: 'House of Eric — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/House_of_Eric' },
    { title: 'Eric IX — Encyclopaedia Britannica', author: 'Encyclopaedia Britannica', type: 'encyclopedia', url: 'https://www.britannica.com/biography/Eric-IX' },
    { title: 'Sweden: the Middle Ages — Encyclopaedia Britannica', author: 'Encyclopaedia Britannica', type: 'encyclopedia', url: 'https://www.britannica.com/place/Sweden' }
  ]
}

if (!Array.isArray(data.houses)) data.houses = []
for (const house of [munso, stenkil, sverker, erik]) {
  const i = data.houses.findIndex((h) => h.id === house.id)
  if (i >= 0) data.houses[i] = house; else data.houses.push(house)
}
writeFileSync(dataPath, JSON.stringify(data, null, 2))
console.log(`Batch J written. houses now (${data.houses.length}).`)
