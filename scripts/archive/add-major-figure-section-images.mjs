// Major Figure Image Enrichment (see CLAUDE.md "Major Figure Image Enrichment").
// Sets sectionImages on selected major ruler/leader articles. Idempotent: each
// run replaces the person's sectionImages wholesale with the curated set below.
// Every file was verified against the Commons API (existence, dimensions,
// license, creator) before inclusion. Captions state honestly what each image
// is — later depictions, monuments, tombs, maps and associated places are
// never presented as portraits from life.
import fs from 'node:fs'

const dataPath = new URL('../server/data/history.json', import.meta.url)
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'))

const filePath = (name) => `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(name.replaceAll(' ', '_'))}`
const fileSource = (name) => `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(name.replaceAll(' ', '_'))}`
const img = (section, name, caption, { creator, date, note, alt } = {}) => ({
  section,
  src: filePath(name),
  alt: alt ?? caption,
  caption,
  creator: creator ?? undefined,
  date: date ?? undefined,
  source: 'Wikimedia Commons',
  sourceUrl: fileSource(name),
  note
})

const enrichment = {
  charlemagne: [
    img('As emperor in the West', 'Friedrich Kaulbach - Krönung Karls des Großen.jpg',
      'The imperial coronation of Charlemagne in Rome, Christmas Day 800, as imagined by Friedrich Kaulbach.',
      { creator: 'Friedrich Kaulbach', date: '1861', note: 'A 19th-century history painting — a later imagining of the coronation, valuable for how the event was remembered, not as a record of how it looked.' }),
    img('Legacy', 'Aachen Germany Imperial-Cathedral-01.jpg',
      'Aachen Cathedral, built around Charlemagne’s Palatine Chapel, his burial place and the coronation church of later German kings.',
      { creator: 'CEphoto, Uwe Aranas', date: '2014 photograph', note: 'The octagonal Palatine Chapel at its core was Charlemagne’s own chapel, consecrated c. 805 — a surviving building from his reign.' })
  ],
  'charles-martel': [
    img('As Frankish military ruler', 'Steuben - Bataille de Poitiers.png',
      'Charles Martel at the Battle of Tours (732), by Charles de Steuben.',
      { creator: 'Charles de Steuben', date: '1834–1837', note: 'A Romantic-era history painting, over a thousand years after the battle — it shows the legend of Tours, not the eighth-century reality.' })
  ],
  'alfred-the-great': [
    img('As king of Wessex', "Statue d'Alfred le Grand à Winchester.jpg",
      'The statue of Alfred the Great at Winchester, his capital, erected in 1899 for the millenary of his death.',
      { creator: 'Hamo Thornycroft (sculptor); photograph by Odejea', date: 'Statue 1899', note: 'A modern monument reflecting Alfred’s Victorian reputation as founder of the English nation — not a likeness from life.' }),
    img('Legacy', 'The Alfred Jewel.jpg',
      'The Alfred Jewel, inscribed “AELFRED MEC HEHT GEWYRCAN” (“Alfred ordered me made”), probably the handle of a reading pointer sent out with his book translations.',
      { creator: 'Photograph by Giles Watson', date: 'Late 9th century (object)', note: 'A genuine object from Alfred’s own court circle, now in the Ashmolean Museum — direct physical evidence of his programme of learning.' })
  ],
  aethelstan: [
    img('The making of England', 'The Tomb of Athelstan in Malmesbury Abbey.jpg',
      'The tomb of Æthelstan in Malmesbury Abbey, where the first king of all England chose to be buried.',
      { creator: 'Photograph by Ethan Doyle White', date: 'Monument 15th century', note: 'The effigy is a 15th-century memorial, not a contemporary likeness; the burial at Malmesbury, away from the Wessex dynastic church at Winchester, was Æthelstan’s own deliberate choice.' })
  ],
  'cnut-the-great': [
    img('As king of England, Denmark, and Norway', 'North Sea Empire under King Cnut 1016-1035.png',
      'The North Sea Empire: England, Denmark, and Norway under Cnut’s rule, c. 1016–1035.',
      { creator: 'SagaraViking', date: 'Modern map', note: 'A modern reconstruction map of Cnut’s realms and spheres of influence — boundaries are approximate.' }),
    img('Legacy', 'Early medieval coin, penny of Cnut (FindID 780380).jpg',
      'A silver penny of Cnut, struck in England — the routine machinery of English royal government working for a Danish king.',
      { creator: 'Portable Antiquities Scheme', date: '1016–1035 (object)', note: 'Contemporary evidence from Cnut’s own reign: he kept and exploited the sophisticated English coinage system rather than replacing it.' })
  ],
  'harald-fairhair': [
    img('Legacy', 'Haraldshaugen.jpg',
      'Haraldshaugen, the national monument at Haugesund raised in 1872 for the millennium of the battle of Hafrsfjord, at Harald’s traditional burial site.',
      { creator: 'Photograph by Asketaska', date: 'Monument 1872', note: 'A 19th-century national monument marking the saga tradition of Harald’s unification of Norway — evidence of his later importance to Norwegian identity, not of ninth-century events.' })
  ],
  'sweyn-forkbeard': [
    img('Death', 'Cambridgemsee359f4edmundkillingsweyn.jpg',
      'The legend of Sweyn’s death: St Edmund, the martyred English king, spears Sweyn in his sleep — from the Miracles of St Edmund.',
      { creator: 'Miniature associated with the circle of Master Hugo / Bury St Edmunds', date: 'c. 1130 (manuscript)', note: 'A 12th-century English monastic legend, hostile to Sweyn — it records how the conquered remembered the conqueror, not how he actually died in February 1014.' })
  ],
  'harald-hardrada': [
    img('As king of Norway and claimant in England', 'Harold-III-Coin.png',
      'A silver penny of Harald Hardrada, struck in Norway with the triquetra symbol — coinage was part of his drive to build a stronger Norwegian kingship.',
      { creator: 'Drawing by C. I. Schive', date: '1046–1066 (coin)', note: 'A 19th-century engraved drawing of a genuine coin type of Harald’s reign; his minting drew on what he had learned of Byzantine state finance.' }),
    // The Kirkwall window is the article's MAIN image (owner's choice); the Arbo
    // Stamford Bridge painting sits in the Death section instead.
    img('Death', 'Arbo - Battle of Stamford Bridge (1870).jpg',
      'Peter Nicolai Arbo, Battle of Stamford Bridge, showing Harald Hardrada in later historical imagination.',
      { creator: 'Peter Nicolai Arbo', date: '1870', note: 'Later nineteenth-century historical painting, not a contemporary portrait; selected because it directly represents Harald’s defining final battle.' })
  ],
  'william-the-conqueror': [
    img('As duke of Normandy and king of England', 'Bayeux Tapestry scene57 Harold death.jpg',
      'The death of King Harold at Hastings, from the Bayeux Tapestry — the decisive moment of William’s conquest of England.',
      { creator: 'Unknown 11th-century embroiderers', date: 'c. 1070s', note: 'Near-contemporary and made within living memory of 1066, though produced for the Norman side; the tapestry is propaganda as well as testimony.' }),
    img('Legacy', 'Domesday Book, Cambridgeshire, page 21.png',
      'A page of Domesday Book (1086), William’s great survey of England — the most complete record of any eleventh-century European kingdom.',
      { creator: 'Royal clerks of William I', date: '1086', note: 'A genuine administrative product of William’s reign, demonstrating the reach of Norman royal government over conquered England.' })
  ],
  'harold-godwinson': [
    img('As king of England', 'Bayeux Tapestry scene23 Harold sacramentum fecit Willelmo duci.jpg',
      'Harold swears his famous oath to Duke William, from the Bayeux Tapestry — the Norman justification for the invasion of 1066.',
      { creator: 'Unknown 11th-century embroiderers', date: 'c. 1070s', note: 'A Norman-commissioned scene: whether Harold swore such an oath, and under what compulsion, was contested even at the time. It shows the case made against him, not neutral fact.' })
  ],
  'henry-v-of-england': [
    img('As king of England', 'Schlacht von Azincourt.jpg',
      'The Battle of Agincourt (1415), from a 15th-century manuscript of the St Albans Chronicle.',
      { creator: 'Unknown 15th-century illuminator', date: 'c. 1422 (manuscript)', note: 'A near-contemporary manuscript miniature — stylised medieval battle imagery rather than reportage, but from within living memory of the battle.' })
  ],
  'edward-i-of-england': [
    img('As king of England', 'Caernarfon Castle from the air.jpg',
      'Caernarfon Castle, the greatest of the fortresses Edward I built to hold conquered Wales.',
      { creator: 'Photograph by Kadpot', date: 'Begun 1283', note: 'A surviving building of Edward’s own reign; its imperial styling, echoing the walls of Constantinople, was deliberate political theatre in stone.' })
  ],
  'edward-iii-of-england': [
    img('As king of England', 'Battle of crecy froissart.jpg',
      'The Battle of Crécy (1346), from an illuminated manuscript of Froissart’s Chronicles.',
      { creator: 'Loyset Liédet (illuminator)', date: 'c. 1470s (manuscript)', note: 'Painted over a century after the battle for Froissart’s chivalric history — it shows how Crécy was remembered at the Burgundian court, in 15th-century arms and armour.' })
  ],
  'richard-the-lionheart': [
    img('As king of England and crusader commander', 'Les Andelys Château Gaillard 03.jpg',
      'Château Gaillard above the Seine, Richard’s “saucy castle” — built in under two years (1196–1198) with everything he had learned of siegecraft on crusade.',
      { creator: 'Photograph by Zairon', date: 'Built 1196–1198', note: 'A surviving work of Richard’s own reign and his personal pride; its fall to Philip II in 1204, after his death, opened Normandy to French conquest.' }),
    img('Death', 'Church of Fontevraud Abbey Richard I effigy.jpg',
      'The tomb effigy of Richard I at Fontevraud Abbey, where he was buried at his father’s feet.',
      { creator: 'Photograph by Adam Bishop', date: 'Early 13th century (effigy)', note: 'One of the earliest royal effigies in Europe, carved close to his lifetime — idealised royal imagery rather than a true portrait.' })
  ],
  saladin: [
    img('As sultan of Egypt and Syria', "Saladin captures Holy Cross from Guy of Lusignan at battle of Hadin in 1187, Matthew Paris's Chronica Maiora, 1235-59 (24034025387).jpg",
      'Saladin seizes the True Cross from King Guy at the Battle of Hattin (1187), as drawn by the English chronicler Matthew Paris.',
      { creator: 'Matthew Paris', date: '1235–1259 (manuscript)', note: 'A 13th-century English monastic drawing — a Christian view of the catastrophe of Hattin made two generations later, not an eyewitness image.' }),
    img('Death', "Saladin's Tomb, Damascus (دمشق), Syria - Wooden tomb of Saladin - PHBZ024 2016 1334 - Dumbarton Oaks.jpg",
      'The wooden cenotaph of Saladin in his mausoleum beside the Umayyad Mosque, Damascus.',
      { creator: 'Photograph by Frank Kidner (Dumbarton Oaks)', date: 'Mausoleum 1196', note: 'Saladin’s actual burial place, built by his son three years after his death in 1193 — the medieval wooden cenotaph survives beside a later marble one.' })
  ],
  'joan-of-arc': [
    img('As military figure and visionary', "Lenepveu, Jeanne d'Arc au siège d'Orléans.jpg",
      'Joan of Arc at the siege of Orléans (1429), from Jules-Eugène Lenepveu’s murals in the Panthéon, Paris.',
      { creator: 'Jules-Eugène Lenepveu', date: '1886–1890', note: 'A 19th-century national mural — Joan as France’s Third Republic wished to remember her, in imagined armour and banner, not a contemporary image.' }),
    img('Death', 'Joan of arc interrogation.jpg',
      'Joan of Arc interrogated in her prison cell by the Cardinal of Winchester, by Paul Delaroche.',
      { creator: 'Paul Delaroche', date: '1824', note: 'A Romantic history painting of her 1431 trial at Rouen — dramatised centuries later; the trial transcripts, not images, are the real surviving record.' })
  ],
  'afonso-i-of-portugal': [
    img('Birth and early life', 'Exterior view of Castelo de Guimarães 14.jpg',
      'The castle of Guimarães, cradle of the Portuguese monarchy and the political world of the young Afonso Henriques.',
      { creator: 'Photograph by John Samuel', date: '10th–12th century (castle)', note: 'The surviving castle is much rebuilt, but Guimarães was the seat of the county of Portugal and the traditional (though unproven) birthplace of Afonso; the Battle of São Mamede was fought nearby in 1128.' }),
    img('Legacy', 'Túmulo de Dom Afonso Henriques, Fundador de Portugal - Igreja de Santa Cruz - Coimbra - Portugal (4357253400).jpg',
      'The tomb of Afonso Henriques in the church of Santa Cruz, Coimbra.',
      { creator: 'Photograph by Vitor Oliveira', date: 'Tomb rebuilt early 16th century', note: 'Afonso was buried at Santa Cruz in 1185; the present ornate tomb is a Manueline replacement of c. 1520 — royal memory magnified by a later, richer Portugal.' })
  ],
  'robert-the-bruce': [
    img('As king of Scots', 'Declaration of arbroath.jpg',
      'The Declaration of Arbroath (1320), the barons’ letter to the pope asserting Scotland’s independence under King Robert.',
      { creator: 'Barons of Scotland (Bernard of Kilwinning, probable drafter)', date: '1320', note: 'A genuine surviving document of Bruce’s reign — the most famous statement of the cause he fought for.' }),
    img('Death', 'Dunfermline Abbey Nave 1847.jpg',
      'The Romanesque nave of Dunfermline Abbey, burial church of Scottish kings, where Robert the Bruce was laid to rest in 1329.',
      { creator: 'Robert William Billings (engraving)', date: '1847 (engraving)', note: 'A 19th-century architectural engraving of the genuine 12th-century nave; Bruce’s heart, at his own wish, was carried toward the Holy Land and now lies at Melrose.' })
  ],
  'william-wallace': [
    img('Legacy', 'Wallace monument.jpg',
      'The National Wallace Monument at Stirling, overlooking the site of his victory at Stirling Bridge.',
      { creator: 'Photograph by Eusebius', date: 'Monument 1861–1869', note: 'A Victorian national monument — evidence of Wallace’s later transformation into Scotland’s national hero, not of the historical man.' })
  ],
  'mehmed-ii': [
    img('As sultan of the Ottoman Empire', 'Zonaro GatesofConst.jpg',
      'Mehmed II enters Constantinople, 29 May 1453, by the Ottoman court painter Fausto Zonaro.',
      { creator: 'Fausto Zonaro', date: 'c. 1903', note: 'Painted for the Ottoman court over four centuries after the conquest — imperial commemoration, not an eyewitness record.' }),
    img('Legacy', 'Rumelihisarı.JPG',
      'Rumeli Hisarı on the Bosphorus, the fortress Mehmed built in months in 1452 to cut Constantinople off before the final siege.',
      { creator: 'Photograph by İhsan Deniz Kılıçoğlu', date: 'Built 1452', note: 'A surviving work of Mehmed’s own preparation for the siege — “the throat-cutter,” as contemporaries called it.' })
  ],
  'philip-ii-of-france': [
    img('As king of France', 'Bataille de Bouvines gagnee par Philippe Auguste.jpg',
      'Philip Augustus at the Battle of Bouvines (1214), by Horace Vernet.',
      { creator: 'Horace Vernet', date: '1827', note: 'A 19th-century Galerie des Batailles painting — Bouvines as French national memory, six centuries after Philip’s decisive victory.' })
  ],
  'philip-iv-of-france': [
    img('The papacy and the Templars', 'Templars on Stake.jpg',
      'Templars burned at the stake, from a medieval manuscript — the end of the order Philip IV destroyed.',
      { creator: 'Unknown medieval illuminator', date: '14th–15th century (manuscript)', note: 'A later medieval miniature of the suppression of 1307–1314; small in scale, but a genuine medieval image of how the Templars’ end was remembered.' })
  ],
  'philip-vi-of-france': [
    img('As king of France', 'Sacre philippe VI.jpg',
      'The coronation of Philip VI at Reims in 1328 — the first Valois king, whose contested succession helped ignite the Hundred Years’ War.',
      { creator: 'Unknown medieval illuminator', date: '14th century (manuscript)', note: 'A medieval chronicle miniature of the coronation; formal royal imagery rather than a record of individual likenesses.' })
  ],
  'isabella-of-castile': [
    img('As queen of Castile', 'La Rendición de Granada - Pradilla.jpg',
      'The surrender of Granada, 2 January 1492: Boabdil yields the keys of the city to Ferdinand and Isabella, by Francisco Pradilla.',
      { creator: 'Francisco Pradilla y Ortiz', date: '1882', note: 'A celebrated 19th-century history painting — the completion of the Reconquista as Spain’s national imagination framed it four centuries on.' })
  ],
  'eleanor-of-aquitaine': [
    img('Legacy', 'Fontevraud Abbatiale R01.jpg',
      'The abbey church of Fontevraud, where Eleanor retired, died, and lies buried beside Henry II and Richard the Lionheart.',
      { creator: 'Photograph by Marc Ryckaert', date: '12th century (church)', note: 'The genuine Romanesque church of Eleanor’s own lifetime — she made it the necropolis of the Plantagenet dynasty.' })
  ],
  'margaret-i': [
    img('As queen of Denmark, Norway, and Sweden', 'Kalmar castle (by Pudelek).JPG',
      'Kalmar Castle, Sweden, where the union of the three Scandinavian crowns under Margaret’s great-nephew Erik was sealed in 1397.',
      { creator: 'Photograph by Pudelek', date: '12th–16th century (castle)', note: 'The castle that gave the Kalmar Union its name; the present building is substantially the later Vasa-era rebuilding of the medieval fortress.' })
  ],
  rurik: [
    img('As Varangian ruler and dynastic founder', 'Rurik - from Titulyarnik (1672).jpg',
      'Rurik as imagined in the Tsarsky Titulyarnik, the Moscow court’s book of rulers, in 1672.',
      { creator: 'Moscow court workshop', date: '1672', note: 'A 17th-century dynastic imagining, eight centuries after the events — evidence of how the Romanov court claimed Rurik, not of the man himself, whose very existence rests on much later chronicles.' })
  ],
  'oleg-of-novgorod': [
    img('Death', 'Russian konung Oleg by Vasnetsov 1.jpg',
      'Oleg at the bones of his horse, by Viktor Vasnetsov — the chronicle legend of the prophecy of his death.',
      { creator: 'Viktor Vasnetsov', date: '1899', note: 'A 19th-century illustration of the Primary Chronicle’s famous legend (the serpent in the horse’s skull), itself written down some two centuries after Oleg — literary tradition, not history.' })
  ],
  'igor-of-kiev': [
    img('As ruler of Kiev', 'Knyaz Igor in 945 by Lebedev.jpg',
      'Prince Igor collecting tribute from the Drevlians in 945, by Klavdiy Lebedev — the exaction that led to his death.',
      { creator: 'Klavdiy Lebedev', date: 'c. 1900–1908', note: 'A modern painting of the Primary Chronicle’s account, composed centuries after the events it describes; the chronicle tradition is the only source for Igor’s death.' })
  ],
  'frederick-i-barbarossa': [
    img('As Holy Roman Emperor', 'Cappenberger Kopf-WUS02772.jpg',
      'The Cappenberg head, a gilded bust given by Barbarossa to his godfather Otto of Cappenberg — long thought to reflect the emperor’s own features.',
      { creator: 'Unknown 12th-century goldsmith', date: 'c. 1155–1160', note: 'A genuine masterpiece of Barbarossa’s own time and circle; whether it is truly a likeness of the emperor is debated, but it is the closest thing to one that survives.' })
  ],
  'louis-ix-of-france': [
    img('As crusader king of France', 'Santa Capilla, París, Francia, 2022-11-01, DD 80-82 HDR.jpg',
      'The upper chapel of the Sainte-Chapelle, built by Louis IX to house the Crown of Thorns.',
      { creator: 'Photograph by Diego Delso', date: 'Built 1242–1248', note: 'Louis’s own building, consecrated the year he left on crusade — the fullest surviving expression of his sacral kingship.' })
  ],
  'godfrey-of-bouillon': [
    img('As First Crusade leader and ruler of Jerusalem', 'Godfrey of Bouillon, holding a pollaxe. (Manta Castle, Cuneo, Italy).jpg',
      'Godfrey of Bouillon among the Nine Worthies, fresco in the Castello della Manta, Italy.',
      { creator: 'Master of the Castello della Manta', date: 'c. 1420', note: 'A 15th-century chivalric fresco: Godfrey as legend, three centuries after his death — evidence of his fame, not his appearance.' })
  ],
  'constantine-xi-palaiologos': [
    img('Legacy', 'Statue of Constanine XI Palaiologos at the National Historical Museum of Athens.jpg',
      'The statue of Constantine XI, last emperor of the Romans, outside the National Historical Museum in Athens.',
      { creator: 'Photograph by George E. Koronaios', date: 'Modern statue', note: 'A modern Greek national monument — the emperor who died at the walls in 1453 as later Hellenism chose to remember him.' })
  ],
  'john-i-of-portugal': [
    img('Aljubarrota, England, and Ceuta', 'Batalha September 2021-2.jpg',
      'The monastery of Batalha (“Battle Abbey”), built by John I in thanksgiving for the victory at Aljubarrota (1385).',
      { creator: 'Photograph by Alvesgaspar', date: 'Begun 1386', note: 'John’s own votive foundation and burial place — the architectural monument of the Avis dynasty’s victory and legitimacy.' })
  ],
  'henry-ii-of-england': [
    img('Government and law', 'Forteresse royale de Chinon (37).jpg',
      'The royal fortress of Chinon on the Vienne, a favourite seat of Henry II’s continental empire, where he died in 1189.',
      { creator: 'Photograph by M.herrick', date: '12th century (fortress)', note: 'Substantially a building of Henry’s own reign, at the heart of the Angevin lands that made him mightier than his French overlord.' })
  ],
  'harald-bluetooth': [
    img('As king of Denmark and Norway', 'Jelling stone.jpg',
      'The great Jelling runestone, raised by Harald Bluetooth: “…that Harald who won for himself all Denmark and Norway and made the Danes Christian.”',
      { creator: 'Photograph by Ljunie', date: 'c. 965 (stone)', note: 'Harald’s own monument in his own words — the “birth certificate of Denmark,” contemporary evidence of his rule and conversion.' })
  ]
}

let people = 0, images = 0
const byId = new Map(data.characters.map((c) => [c.id, c]))
for (const [id, sectionImages] of Object.entries(enrichment)) {
  const person = byId.get(id)
  if (!person) { console.error(`MISSING PERSON: ${id}`); process.exitCode = 1; continue }
  const sections = new Set((person.contentSections ?? []).map((s) => s.title))
  for (const im of sectionImages) {
    if (!sections.has(im.section)) { console.error(`SECTION MISMATCH: ${id} -> "${im.section}"`); process.exitCode = 1 }
  }
  person.sectionImages = sectionImages.map((im) => JSON.parse(JSON.stringify(im)))
  people += 1
  images += sectionImages.length
}

fs.writeFileSync(dataPath, JSON.stringify(data, null, 2) + '\n')
console.log(`Set sectionImages on ${people} people (${images} images).`)
