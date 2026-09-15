import { readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
const __dirname = dirname(fileURLToPath(import.meta.url))
const dataPath = join(__dirname, '..', 'server', 'data', 'history.json')
const data = JSON.parse(readFileSync(dataPath, 'utf8'))
const P = (slug, displayName, note) => ({ personSlug: slug, displayName, note })
const IMG = (f) => `https://commons.wikimedia.org/wiki/Special:FilePath/${f}?width=1000`
const SCOT = () => ({ name: 'Kingdom of Scotland', type: 'location', slug: 'kingdom-of-scotland' })

// 1. Almohad dynasty — the Berber caliphate of the Maghreb and al-Andalus
const almohad = {
  id: 'almohad-dynasty', type: 'house', name: 'Almohad dynasty',
  aliases: ['Almohad', 'Almohads', 'Almohad dynasty', 'Almohad Caliphate', 'al-Muwahhidun', 'Muwahhidun'],
  originYear: 1121, endYear: 1269, reignSpan: 'c. 1121–1269', region: 'The Maghreb & al-Andalus', originPlace: 'The Atlas Mountains, Morocco',
  arms: 'None — a Berber Islamic dynasty with no European heraldry; its emblems were a plain white banner and the distinctive square-die gold dinar.',
  image: IMG('View%20from%20Alc%C3%A1zar%20on%20Giralda%20%287077900543%29.jpg'),
  imageInfo: { caption: 'The Giralda of Seville — originally the minaret of the Almohad great mosque, built in the 1180s–1190s; the bell-stage on top is a 16th-century Christian addition.', creator: 'Photograph', date: 'Minaret late 12th century', source: 'Wikimedia Commons', sourceUrl: 'https://commons.wikimedia.org/wiki/File:View_from_Alc%C3%A1zar_on_Giralda_(7077900543).jpg', note: 'A surviving Almohad monument; only the lower brick tower is Almohad, the ornate belfry being added after the Christian conquest.' },
  summary: 'The Berber religious movement and dynasty that ruled North Africa and Muslim Spain in the 12th–13th centuries, until its power in Iberia was broken at Las Navas de Tolosa.',
  overview: 'The Almohads (al-Muwahhidun, "those who affirm God’s unity") began as a reformist movement among the Masmuda Berbers of the Atlas, preached by Ibn Tumart. Under the caliph Abd al-Mu’min they overthrew the Almoravids and built an empire spanning the Maghreb and al-Andalus, with Marrakesh and Seville as capitals. Their defeat under Muhammad al-Nasir at Las Navas de Tolosa in 1212 began the collapse of their Iberian power.',
  founder: { displayName: 'Abd al-Mu’min', note: 'First Almohad caliph; conqueror of Marrakesh (no Codex article yet). The movement’s spiritual founder was Ibn Tumart.' },
  seats: [{ name: 'Almohad Caliphate', type: 'location', slug: 'almohad-caliphate' }],
  notableMembers: [
    { displayName: 'Abd al-Mu’min', note: 'First caliph; ended the Almoravids and took Marrakesh in 1147' },
    { displayName: 'Yaqub al-Mansur', note: 'Caliph who beat Castile at Alarcos (1195) and built the Giralda and Koutoubia' },
    P('muhammad-al-nasir', 'Muhammad al-Nasir', 'Caliph defeated at Las Navas de Tolosa in 1212')
  ],
  familyTree: { caption: 'The Almohad caliphs from the founder Abd al-Mu’min through the builder al-Mansur to al-Nasir, whose defeat broke Almohad power in Spain; only al-Nasir has a Codex article so far.', root: {
    name: 'Abd al-Mu’min', note: 'first Almohad caliph, d. 1163',
    children: [
      { name: 'Abu Yaqub Yusuf', note: 'caliph; patron of the philosopher Averroes', children: [
        { name: 'Yaqub al-Mansur', note: 'victor of Alarcos, 1195', children: [
          { name: 'Muhammad al-Nasir', personSlug: 'muhammad-al-nasir', note: 'defeated at Las Navas, 1212' }
        ] }
      ] }
    ]
  } },
  contentSections: [
    { title: 'Origins', paragraphs: [
      'The movement was founded by Ibn Tumart, a Masmuda Berber scholar who returned from the Islamic east preaching a rigorous doctrine of divine unity and denouncing the ruling Almoravids as lax. Proclaimed the infallible Mahdi by his followers around 1121, he organised a militant community in the High Atlas. After his death his disciple Abd al-Mu’min took the title of caliph, welded the Berber tribes into an army, and over two decades conquered all of Morocco, taking the Almoravid capital Marrakesh in 1147.',
      'From the Maghreb the Almohads crossed into al-Andalus, absorbing the fragmented Muslim taifa states and confronting the advancing Christian kingdoms of Iberia.'
    ] },
    { title: 'Zenith and building', paragraphs: [
      'Under Abd al-Mu’min’s successors the caliphate reached its height. Yaqub al-Mansur crushed the Castilians at Alarcos in 1195 and presided over a great flowering of architecture: the Giralda minaret in Seville, the Koutoubia in Marrakesh, and the unfinished Hassan Tower of Rabat all date from Almohad patronage, sharing a severe, geometric brick style. The court also protected philosophers, most famously Averroes (Ibn Rushd).',
      'At its greatest extent the empire ran from the Atlantic coast of Morocco across North Africa and into southern Spain, the last great Berber empire to hold both shores of the strait.'
    ] },
    { title: 'Las Navas de Tolosa and decline', paragraphs: [
      'The turning point came in 1212, when a crusading coalition of Castile, Aragon, and Navarre destroyed the army of the caliph Muhammad al-Nasir at Las Navas de Tolosa. The defeat shattered Almohad prestige and manpower in Iberia and opened al-Andalus to Christian conquest: Córdoba fell to Castile in 1236 and Seville in 1248.',
      'In the Maghreb the caliphate fragmented as Berber rivals — the Marinids, Hafsids, and Zayyanids — carved up its lands, and the last Almohad caliph was killed at Marrakesh in 1269. Their fall reshaped the western Mediterranean, hastening both the Reconquista in Spain and the rise of new dynasties in North Africa.'
    ] }
  ],
  timeline: [
    { date: '1147', title: 'Marrakesh taken', description: 'Abd al-Mu’min ends the Almoravids and makes Marrakesh the Almohad capital.' },
    { date: '1195', title: 'Victory at Alarcos', description: 'Yaqub al-Mansur defeats Castile, the high-water mark of Almohad power in Spain.' },
    { date: '1212', title: 'Battle of Las Navas de Tolosa', description: 'A Christian coalition crushes al-Nasir, breaking Almohad power in Iberia.', links: [{ title: 'Battle of Las Navas de Tolosa', type: 'event', slug: 'battle-of-las-navas-de-tolosa' }] }
  ],
  relatedEntries: { people: [
    { title: 'Muhammad al-Nasir', type: 'person', slug: 'muhammad-al-nasir', label: 'The caliph beaten at Las Navas' }
  ], events: [{ title: 'Battle of Las Navas de Tolosa', type: 'event', slug: 'battle-of-las-navas-de-tolosa', label: 'The 1212 defeat that broke the dynasty' }], locations: [
    { title: 'Almohad Caliphate', type: 'location', slug: 'almohad-caliphate', label: 'The state they ruled' },
    { title: 'Al-Andalus', type: 'location', slug: 'al-andalus', label: 'Muslim Spain, lost after 1212' }
  ] },
  sources: [
    { title: 'Almohads — Encyclopaedia Britannica', author: 'Encyclopaedia Britannica', type: 'encyclopedia', url: 'https://www.britannica.com/topic/Almohads' },
    { title: 'Muhammad al-Nasir — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Muhammad_al-Nasir' },
    { title: 'Almohad Caliphate — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Almohad_Caliphate' }
  ]
}

// 2. House of Lazarević — Moravian Serbia and the despotate
const lazarevic = {
  id: 'house-of-lazarevic', type: 'house', name: 'House of Lazarević',
  aliases: ['Lazarević', 'Lazarevic', 'House of Lazarević', 'Lazarević dynasty'],
  originYear: 1371, endYear: 1427, reignSpan: '1371–1427', region: 'Moravian Serbia', originPlace: 'Serbia',
  arms: 'Gules, a double-headed eagle argent — the Serbian eagle borne by the Lazarević despots.',
  image: IMG('Despot%20Stefan%20Lazarevi%C4%87,%20Manasija.jpg'),
  imageInfo: { caption: 'Despot Stefan Lazarević, in a contemporary fresco in his monastery of Manasija (Resava), painted c. 1415–1418.', creator: 'Fresco, Manasija monastery', date: 'c. 1415–1418', source: 'Wikimedia Commons', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Despot_Stefan_Lazarevi%C4%87,_Manasija.jpg', note: 'A contemporary Serbian church fresco of the despot, painted in his own foundation during his lifetime.' },
  summary: 'The Serbian princely house that led Moravian Serbia after the fall of the Nemanjić empire — Prince Lazar, who died at Kosovo, and his son the despot Stefan Lazarević.',
  overview: 'After the Serbian Empire disintegrated, Prince Lazar Hrebeljanović built the strongest of the successor states in the Morava valley, and died fighting the Ottomans at the Battle of Kosovo in 1389. His son Stefan Lazarević, as Despot of Serbia, balanced Ottoman overlordship against a brilliant cultural revival, moving his capital to Belgrade and earning renown as a soldier and a writer.',
  founder: { displayName: 'Lazar Hrebeljanović', note: 'Prince of Moravian Serbia; died at the Battle of Kosovo, 1389 (no Codex article yet)' },
  notableMembers: [
    { displayName: 'Lazar Hrebeljanović', note: 'Founding prince; fell at Kosovo in 1389' },
    P('stefan-lazarevic', 'Stefan Lazarević', 'Despot of Serbia; soldier, writer, and builder of Manasija'),
    { displayName: 'Milica', note: 'Lazar’s widow; regent for the young Stefan' }
  ],
  familyTree: { caption: 'The short-lived Lazarević line: Prince Lazar and his widow Milica, and their son the despot Stefan, who died without an heir. ⚭ marks a marriage.', root: {
    name: 'Lazar Hrebeljanović', note: 'Prince of Serbia, d. 1389', spouse: { name: 'Milica', note: 'regent after Kosovo' },
    children: [
      { name: 'Stefan Lazarević', personSlug: 'stefan-lazarevic', note: 'Despot of Serbia, d. 1427' }
    ]
  } },
  contentSections: [
    { title: 'Origins', paragraphs: [
      'The house rose amid the wreckage of the Serbian Empire. After the death of Emperor Dušan the empire splintered, and the Serbian defeat at Marica in 1371 destroyed the power of the southern lords. Into that vacuum stepped Lazar Hrebeljanović, a nobleman of the Morava valley who gathered the strongest of the Serbian statelets and won recognition as the leading prince, ruling from Kruševac.',
      'Lazar allied with the Church and other Serbian and Bosnian lords to resist the advancing Ottomans, and his reign became the last stand of an independent Serbia.'
    ] },
    { title: 'Kosovo and the despot Stefan', paragraphs: [
      'In 1389 Lazar met the Ottoman sultan Murad I at the Battle of Kosovo. Both rulers died in the fighting — Murad assassinated, Lazar captured and executed — and though the battle was militarily indecisive it passed into Serbian memory as a sacred national catastrophe. Lazar’s young son Stefan, at first under his mother Milica’s regency, became an Ottoman vassal, and fought in the sultan’s armies at the Battle of Nicopolis in 1396 and at Ankara in 1402.',
      'The Ottoman collapse at Ankara, where Timur shattered Sultan Bayezid, freed Stefan’s hand. He took the Byzantine title of despot, threw off close Ottoman control, and moved his capital to Belgrade.'
    ] },
    { title: 'A golden autumn', paragraphs: [
      'Stefan Lazarević presided over a remarkable cultural flowering — often called the Resava or Morava school — founding the fortified monastery of Manasija as a centre of learning and manuscript production. He was himself an author, whose lyrical "Slovo ljubve" ("Discourse on Love") is a landmark of medieval Serbian literature, and a knight of the Order of the Dragon.',
      'He died without a son in 1427, and the despotate passed to his nephew Đurađ Branković — the last flowering of independent Serbia before the Ottoman conquest completed in 1459.'
    ] }
  ],
  timeline: [
    { date: '1389', title: 'Battle of Kosovo', description: 'Prince Lazar dies fighting Murad I; the despotate passes to his son Stefan.', links: [{ title: 'Battle of Kosovo', type: 'event', slug: 'battle-of-kosovo' }] },
    { date: '1402', title: 'Stefan gains autonomy', description: 'After the Ottoman defeat at Ankara, Stefan takes the title of despot and moves his capital to Belgrade.', links: [{ title: 'Stefan Lazarević', type: 'person', slug: 'stefan-lazarevic' }] },
    { date: '1427', title: 'Death of Stefan', description: 'The despot dies without an heir; Serbia passes to the Branković family.' }
  ],
  relatedEntries: { people: [
    { title: 'Stefan Lazarević', type: 'person', slug: 'stefan-lazarevic', label: 'Despot of Serbia' }
  ], events: [
    { title: 'Battle of Kosovo', type: 'event', slug: 'battle-of-kosovo', label: 'Where his father Lazar fell, 1389' },
    { title: 'Battle of Nicopolis', type: 'event', slug: 'battle-of-nicopolis', label: 'Stefan fought as an Ottoman vassal, 1396' }
  ], houses: [{ title: 'House of Osman', type: 'house', slug: 'house-of-osman', label: 'The Ottoman dynasty they served and resisted' }] },
  sources: [
    { title: 'Stefan Lazarević — Encyclopaedia Britannica', author: 'Encyclopaedia Britannica', type: 'encyclopedia', url: 'https://www.britannica.com/biography/Stefan-Lazarevic' },
    { title: 'Stefan Lazarević — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Stefan_Lazarevi%C4%87' },
    { title: 'Moravian Serbia — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Moravian_Serbia' }
  ]
}

// 3. Uí Ímair — the Norse kings of Dublin and York
const uiImair = {
  id: 'house-of-ui-imair', type: 'house', name: 'Uí Ímair',
  aliases: ['Uí Ímair', 'Ui Imair', 'House of Ivar', 'Dynasty of Ívarr', 'Uí Ímair dynasty', 'Ivar dynasty'],
  originYear: 853, endYear: 1094, reignSpan: 'Dublin & York, 9th–11th centuries', region: 'The Irish Sea world — Dublin & York', originPlace: 'The Viking sea-kingdoms',
  arms: 'None — the Viking-age kings ruled before heraldry; the raven of their York coinage served as their emblem.',
  image: IMG('York%20raven%20penny.jpg'),
  imageInfo: { caption: 'A silver "raven" penny minted at York (Jórvík) c. 939–941 for Olaf Guthfrithson — its obverse legend "Anlaf Cununc," Olaf the King.', creator: 'Hiberno-Norse moneyers, York', date: 'c. 939–941', source: 'Wikimedia Commons', sourceUrl: 'https://commons.wikimedia.org/wiki/File:York_raven_penny.jpg', note: 'A genuine coin of the dynasty (British Museum); the raven was the war-standard of the Norse kings of York.' },
  summary: 'The dominant Norse-Gaelic dynasty of the Viking Age Irish Sea — the "grandsons of Ívarr," kings of Dublin and repeatedly of York.',
  overview: 'The Uí Ímair, descendants of Ímar (Ívarr), were the leading Scandinavian dynasty of the ninth- and tenth-century Irish Sea world. From their base at Dublin they seized and lost the kingdom of York (Jórvík) again and again, dominating the sea-lanes between Ireland, Britain, and the Isles. Olaf Guthfrithson, king of Dublin and York, fought the English at the Battle of Brunanburh.',
  founder: { displayName: 'Ímar (Ívarr)', note: 'Founding king of the dynasty at Dublin, d. 873; often identified with Ivar the Boneless (no Codex article yet)' },
  notableMembers: [
    { displayName: 'Ímar (Ívarr)', note: 'Founder; king of Dublin, d. 873' },
    P('olaf-guthfrithson', 'Olaf Guthfrithson', 'King of Dublin and York; fought at Brunanburh in 937'),
    { displayName: 'Amlaíb Cuarán', note: 'Long-reigning king of Dublin and York in the later 10th century' }
  ],
  familyTree: { caption: 'The Uí Ímair as reconstructed from Irish and English annals: the "grandsons of Ímar" who ruled Dublin and York; only Olaf Guthfrithson has a Codex article so far.', root: {
    name: 'Ímar (Ívarr)', note: 'king of Dublin, d. 873',
    children: [
      { name: 'the grandsons of Ímar', note: 'kings of Dublin and York', children: [
        { name: 'Olaf Guthfrithson', personSlug: 'olaf-guthfrithson', note: 'king of Dublin and York, d. 941' }
      ] }
    ]
  } },
  contentSections: [
    { title: 'Origins', paragraphs: [
      'The dynasty took its name from Ímar, a Viking leader who with his kinsmen fastened a lasting Norse grip on Dublin in the 850s and 860s; Irish annals call his descendants the Uí Ímair, the "grandsons of Ímar." From Dublin the family ranged across the Irish Sea, raiding and ruling in Ireland, the Hebrides, the Isle of Man, and northern Britain, making themselves the pre-eminent sea-kings of the age.',
      'Their great prize on the British side was York — Jórvík — the rich former Northumbrian capital, which they took in the early tenth century and held intermittently against Wessex.'
    ] },
    { title: 'Dublin, York, and Brunanburh', paragraphs: [
      'The dynasty’s history is a long contest for York against the expanding kingdom of Wessex. In 937 Olaf Guthfrithson, king of Dublin, allied with Constantine II of Alba and the Britons of Strathclyde and invaded England, only to be defeated by King Æthelstan at the Battle of Brunanburh — one of the bloodiest battles of the age. Olaf recovered York after Æthelstan’s death in 939, and the family’s kings, including the much-travelled Amlaíb Cuarán, ruled it on and off for another fifteen years.',
      'At York they struck a distinctive coinage bearing the raven, the bird of Odin and the war-standard of the Norse, the emblem by which the dynasty is still remembered.'
    ] },
    { title: 'Decline', paragraphs: [
      'The Norse kingdom of York was finally extinguished in 954 with the expulsion and death of Erik Bloodaxe, and York passed permanently to the English crown. The Uí Ímair kept Dublin far longer, where they remained a power in Irish and Irish-Sea politics into the eleventh century, until their bloody defeat at Clontarf in 1014 and the rise of new forces reduced them.',
      'Their long dominance shaped the Viking Age around the Irish Sea, and their kings — bridging Ireland, the Isles, and northern England — were among the most far-ranging rulers of early medieval Europe.'
    ] }
  ],
  timeline: [
    { date: '873', title: 'Death of Ímar', description: 'The founding king of the Dublin dynasty dies; his descendants become the Uí Ímair.' },
    { date: '937', title: 'Battle of Brunanburh', description: 'Olaf Guthfrithson and his allies are defeated by Æthelstan of Wessex.', links: [{ title: 'Battle of Brunanburh', type: 'event', slug: 'battle-of-brunanburh' }] },
    { date: '954', title: 'End of Norse York', description: 'The expulsion of Erik Bloodaxe ends the Scandinavian kingdom of York.' }
  ],
  relatedEntries: { people: [
    { title: 'Olaf Guthfrithson', type: 'person', slug: 'olaf-guthfrithson', label: 'King of Dublin and York' }
  ], events: [{ title: 'Battle of Brunanburh', type: 'event', slug: 'battle-of-brunanburh', label: 'Olaf’s defeat by Æthelstan, 937' }], houses: [
    { title: 'House of Wessex', type: 'house', slug: 'house-of-wessex', label: 'The English kings who contested York and ended their rule there' }
  ] },
  sources: [
    { title: 'Uí Ímair — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/U%C3%AD_%C3%8Dmair' },
    { title: 'Olaf Guthfrithson — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Amla%C3%ADb_mac_Gofraid' },
    { title: 'Scandinavian York — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Scandinavian_York' }
  ]
}

// 4. House of Alpin — the first kings of Alba
const alpin = {
  id: 'house-of-alpin', type: 'house', name: 'House of Alpin',
  aliases: ['Alpínid (house of Cináed mac Ailpín)', 'House of Alpin', 'Alpínid', 'Alpin dynasty', 'Clann Cináeda meic Ailpín', 'MacAlpin dynasty'],
  originYear: 843, endYear: 1034, reignSpan: 'c. 843–1034', region: 'Alba (Scotland)', originPlace: 'The kingdom of the Picts and Scots',
  arms: 'None — the early kings of Alba ruled before heraldry; monuments such as the Dupplin Cross carried their royal imagery.',
  image: IMG('The%20Dupplin%20Cross.jpg'),
  imageInfo: { caption: 'The Dupplin Cross, an early-10th-century cross-slab from the heartland of Alba, whose inscription names King Constantine.', creator: 'Pictish/Alba sculptors', date: 'Early 10th century', source: 'Wikimedia Commons', sourceUrl: 'https://commons.wikimedia.org/wiki/File:The_Dupplin_Cross.jpg', note: 'A royal monument of the kings of Alba, bearing the name of a King Constantine and a mounted-warrior panel; a genuine contemporary artefact of the dynasty’s world.' },
  summary: 'The dynasty of Kenneth MacAlpin, which united the Picts and Scots into the kingdom of Alba and ruled it for nearly two centuries.',
  overview: 'The House of Alpin — in Gaelic Clann Cináeda meic Ailpín — descended from Kenneth MacAlpin, traditionally remembered as the king who joined the Pictish and Scottish realms into the single kingdom of Alba around 843. His descendants, among them the powerful Constantine II, consolidated that kingdom against Vikings and the English, and ruled until the line ended with Malcolm II in 1034.',
  founder: { displayName: 'Kenneth MacAlpin', note: 'Cináed mac Ailpín, king who united Picts and Scots, d. 858 (no Codex article yet)' },
  seats: [SCOT()],
  notableMembers: [
    { displayName: 'Kenneth MacAlpin', note: 'Founder; united the Picts and Scots, c. 843' },
    P('constantine-ii-of-scotland', 'Constantine II', 'Long-reigning king of Alba; fought at Brunanburh in 937'),
    { displayName: 'Malcolm II', note: 'Last king of the male line; secured the southern border, d. 1034' }
  ],
  familyTree: { caption: 'The kings of Alba of the house of Alpin from Kenneth MacAlpin to Malcolm II, reconstructed from the king-lists; only Constantine II has a Codex article so far.', root: {
    name: 'Kenneth MacAlpin', note: 'first king of Alba, d. 858',
    children: [
      { name: 'the kings of Alba', note: 'Clann Cináeda meic Ailpín', children: [
        { name: 'Constantine II', personSlug: 'constantine-ii-of-scotland', note: 'r. 900–943' },
        { name: 'Malcolm II', note: 'last of the male line, d. 1034' }
      ] }
    ]
  } },
  contentSections: [
    { title: 'Origins', paragraphs: [
      'The dynasty is named for Kenneth MacAlpin (Cináed mac Ailpín), who around 843 became king of both the Picts and the Gaelic Scots of Dál Riata. Later tradition made him the conqueror who fused the two peoples; modern historians see a longer, murkier process of Gaelic ascendancy over a Pictish kingdom battered by Viking raids. Whatever the mechanism, from his reign the combined realm came to be called Alba, and its kings were drawn from his descendants.',
      'The early kingdom was centred on the fertile lands of Fortriu and the Tay, with its royal and religious heart at Scone and Dunkeld, where relics of Columba were brought for safety from the Vikings.'
    ] },
    { title: 'Constantine II and the making of Alba', paragraphs: [
      'The dynasty’s greatest figure was Constantine II, who reigned for over forty years from 900. He beat back Viking attacks, presided in 906 at Scone over a council that bound king and church together in the emerging Scottish kingdom, and manoeuvred among the rising powers of the Norse of Dublin and the English of Wessex.',
      'In 937 he joined Olaf Guthfrithson and the Britons of Strathclyde in a great invasion of England, but was defeated by Æthelstan at the Battle of Brunanburh, where his son was killed. Late in life he abdicated to become a monk at St Andrews, a rare peaceful end for a king of the age.'
    ] },
    { title: 'The end of the male line', paragraphs: [
      'For a century the crown passed among the branches of the house, often violently, by a system of alternating succession that pitted cousins against one another. The last king of the direct male line was Malcolm II, who strengthened the kingdom’s hold on the south and, lacking a son, arranged the succession of his grandson Duncan.',
      'With Malcolm’s death in 1034 the crown passed to the related House of Dunkeld, but the kingdom of Alba that the house of Alpin had forged — the nucleus of medieval Scotland — endured and grew.'
    ] }
  ],
  timeline: [
    { date: 'c. 843', title: 'Kenneth MacAlpin unites Picts and Scots', description: 'The founder joins the two kingdoms into what becomes Alba.' },
    { date: '937', title: 'Battle of Brunanburh', description: 'Constantine II is defeated by Æthelstan in the great invasion of England.', links: [{ title: 'Battle of Brunanburh', type: 'event', slug: 'battle-of-brunanburh' }] },
    { date: '1034', title: 'Death of Malcolm II', description: 'The last king of the male line dies; the crown passes to the House of Dunkeld.' }
  ],
  relatedEntries: { people: [
    { title: 'Constantine II', type: 'person', slug: 'constantine-ii-of-scotland', label: 'The great king of Alba' }
  ], events: [{ title: 'Battle of Brunanburh', type: 'event', slug: 'battle-of-brunanburh', label: 'Constantine II’s defeat by Æthelstan, 937' }], locations: [SCOT()] },
  sources: [
    { title: 'Kenneth I — Encyclopaedia Britannica', author: 'Encyclopaedia Britannica', type: 'encyclopedia', url: 'https://www.britannica.com/biography/Kenneth-I' },
    { title: 'Constantine II of Scotland — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Constantine_II_of_Scotland' },
    { title: 'House of Alpin — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/House_of_Alpin' }
  ]
}

if (!Array.isArray(data.houses)) data.houses = []
for (const house of [almohad, lazarevic, uiImair, alpin]) {
  const i = data.houses.findIndex((h) => h.id === house.id)
  if (i >= 0) data.houses[i] = house; else data.houses.push(house)
}
writeFileSync(dataPath, JSON.stringify(data, null, 2))
console.log(`Batch O written. houses now (${data.houses.length}).`)
