/**
 * Three major Byzantine emperors that address the flagged succession endpoints:
 * Isaac I Komnenos (Constantine X's predecessor), Manuel I Komnenos (John II's
 * successor), and Manuel II Palaiologos (John VIII's predecessor). Each links to
 * an existing anchor; each open-side neighbour (Michael VI, Alexios II, John V)
 * is a noted boundary, since the Byzantine middle (1143–1425) is otherwise not
 * yet in the Codex. Idempotent.
 */
import fs from 'node:fs'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dataPath = path.join(__dirname, '../server/data/history.json')
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'))

const BYZ = { title: 'Byzantine Empire', type: 'location', slug: 'byzantine-empire' }
const CPL = { title: 'Constantinople', type: 'location', slug: 'constantinople' }
const per = (slug, title, label) => ({ title, type: 'person', slug, label })
const src = (title, url) => ({ title, author: 'Encyclopaedia Britannica', type: 'encyclopedia', url })

const people = [
  // ── ISAAC I KOMNENOS ──────────────────────────────────────────────────────────
  {
    id: 'isaac-i-komnenos', type: 'character', name: 'Isaac I Komnenos', born: 1007, died: 1060,
    deathAge: 'about 53', causeOfDeath: 'Illness, as a monk', restingPlace: 'Stoudios Monastery, Constantinople',
    location: 'Byzantine Empire', aliases: ['Isaac I Comnenus', 'Isaakios I Komnenos'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/INC-3060-r_%D0%9D%D0%BE%D0%BC%D0%B8%D1%81%D0%BC%D0%B0_%D1%82%D0%B5%D1%82%D0%B0%D1%80%D1%82%D0%B5%D1%80%D0%BE%D0%BD._%D0%98%D1%81%D0%B0%D0%B0%D0%BA_I_%D0%9A%D0%BE%D0%BC%D0%BD%D0%B8%D0%BD._%D0%9E%D0%BA._1057%E2%80%941059_%D0%B3%D0%B3._%28%D1%80%D0%B5%D0%B2%D0%B5%D1%80%D1%81%29.png',
    summary: 'Byzantine emperor (1057–1059), the first of the Komnenos house, a soldier raised to the throne by military revolt who tried to reform the state before abdicating to become a monk.',
    title: 'Byzantine Emperor', roles: ['Byzantine Emperor'],
    birth: { date: 'c. 1007', place: { name: 'Constantinople' }, note: 'Son of a distinguished Anatolian military family, the Komnenoi.' },
    death: { date: 'c. 1060', place: { name: 'Constantinople' }, circumstance: 'Died as a monk at the Stoudios monastery, a year or so after abdicating the throne.' },
    quickFacts: { realm: 'Byzantine Empire', dynasty: 'Komnenos (first)', culture: 'Byzantine Greek', knownFor: 'seizing the throne by military revolt and his attempted reforms' },
    imageInfo: { caption: 'A gold coin of Isaac I Komnenos, showing the emperor holding a drawn sword.', creator: 'Byzantine imperial mint', date: 'c. 1057–1059', source: 'Wikimedia Commons', sourceUrl: 'https://commons.wikimedia.org/wiki/File:INC-3060-r_%D0%9D%D0%BE%D0%BC%D0%B8%D1%81%D0%BC%D0%B0_%D1%82%D0%B5%D1%82%D0%B0%D1%80%D1%82%D0%B5%D1%80%D0%BE%D0%BD._%D0%98%D1%81%D0%B0%D0%B0%D0%BA_I_%D0%9A%D0%BE%D0%BC%D0%BD%D0%B8%D0%BD._%D0%9E%D0%BA._1057%E2%80%941059_%D0%B3%D0%B3._(%D1%80%D0%B5%D0%B2%D0%B5%D1%80%D1%81).png', license: 'Public domain', note: 'A contemporary coin; the drawn sword advertised that he had won the throne by force of arms.' },
    overview: [
      'Isaac I Komnenos was Byzantine emperor from 1057 to 1059, the first member of the Komnenos family to hold the throne. A distinguished general, he was raised to power by a revolt of the Anatolian military aristocracy against the civil bureaucracy that had come to dominate Constantinople and against the aged emperor Michael VI.',
      'Once in power, Isaac set out to restore the empire\'s strained finances and military strength, cutting court expenditure and reclaiming property from a swollen bureaucracy and Church — policies that made him powerful enemies. His famous coins show him holding a drawn sword, a blunt assertion that he had taken the throne by arms. After barely two years, a serious illness led him to abdicate and retire to a monastery, naming Constantine X Doukas his successor.'
    ],
    greatestFeats: ['Byzantine Emperor', 'First of the Komnenos house', 'Attempted to reform the empire\'s finances and army'],
    contentSections: [
      { title: 'Overview', paragraphs: [
        'Isaac I Komnenos was Byzantine emperor from 1057 to 1059, the first member of the Komnenos family to hold the throne. A distinguished general, he was raised to power by a revolt of the Anatolian military aristocracy against the civil bureaucracy that had come to dominate Constantinople and against the aged emperor Michael VI.',
        'Once in power, Isaac set out to restore the empire\'s strained finances and military strength, cutting court expenditure and reclaiming property from a swollen bureaucracy and Church — policies that made him powerful enemies. His famous coins show him holding a drawn sword, a blunt assertion that he had taken the throne by arms. After barely two years, a serious illness led him to abdicate and retire to a monastery, naming Constantine X Doukas his successor.'
      ]},
      { title: 'Birth and early life', paragraphs: [
        'Isaac was born about 1007 into the Komnenoi, a rising family of the Anatolian military aristocracy. He made his career in the army, becoming commander of the eastern forces, at a time when the great soldiers of the provinces were increasingly at odds with the civil officials and courtiers who ran the empire from Constantinople and who, they felt, were starving the army and mismanaging the defence of the frontiers.',
        'When the elderly bureaucrat-emperor Michael VI slighted the leading generals in 1057, they proclaimed Isaac emperor and marched on the capital.'
      ]},
      { title: 'Character and Personality', paragraphs: [
        'Isaac I is remembered as a soldier\'s emperor — direct, energetic, and impatient with the elaborate, money-draining machinery of the Constantinopolitan court. The historian Michael Psellos, who knew him, portrays a vigorous and self-confident ruler who believed the empire could be set right by firm, frugal, soldierly government, and who set about it with more boldness than tact.',
        'That bluntness was both his strength and his undoing. His readiness to confront the bureaucracy and even the Church — deposing the formidable patriarch Michael Keroularios — showed real courage and clarity of purpose, but it isolated him from the very interests whose support an emperor needed. The sword on his coinage captured the man: a ruler who trusted in force and plain reform, and who, when illness struck, chose the monastery over a fight to hold a throne he had come to find wearisome.'
      ]},
      { title: 'Reform and abdication', paragraphs: [
        'Isaac came to power determined to repair the damage done by decades of extravagant and negligent government. He slashed court pensions and expenditure, revoked grants made by his predecessors, and reclaimed revenues and estates from the bureaucracy and from the wealthy monasteries and Church — even confiscating surplus ecclesiastical property. When the patriarch Michael Keroularios resisted, Isaac had him arrested and deposed.',
        'These measures, however necessary, turned the civil aristocracy and the Church against him and won him few friends. Late in 1059, after a chill caught while hunting turned into a grave illness, Isaac believed himself dying. He abdicated, passed over his own brother, and named the civil aristocrat Constantine Doukas as his successor, then withdrew to the monastery of Stoudios.'
      ]},
      { title: 'Death', paragraphs: [
        'Isaac recovered somewhat but kept to his monastic retirement, living out his days as a monk at Stoudios and, by tradition, working humbly among the brethren. He died about 1060. His abdication handed the empire to the civil aristocracy under Constantine X, whose neglect of the army would soon have grave consequences.'
      ]},
      { title: 'Legacy', paragraphs: [
        'Isaac I is remembered as the first Komnenos emperor and as a might-have-been reformer whose brief reign glimpsed, but could not achieve, the restoration of Byzantine strength. His fall returned power to the civil bureaucracy whose misgovernment helped bring on the disaster of Manzikert a dozen years later. Yet his family\'s moment had only been postponed: in 1081 his great-nephew Alexios I Komnenos would seize the throne and found the Komnenian dynasty that ruled the empire\'s twelfth-century revival.'
      ]}
    ],
    keyAchievements: [
      { title: 'Byzantine Emperor, 1057–1059', description: 'Raised to the throne by the revolt of the Anatolian military aristocracy.' },
      { title: 'First of the Komnenos house', description: 'Opened the line that would later rule the empire under Alexios I.' },
      { title: 'Attempted financial and military reform', description: 'Curbed the bureaucracy and Church to restore the state\'s strength.' }
    ],
    timeline: [
      { date: 'c. 1007', title: 'Born', description: 'Born into the Komnenoi, a family of the Anatolian military aristocracy.' },
      { date: '1057', title: 'Proclaimed emperor', description: 'Raised to the throne by a revolt of the generals against the emperor Michael VI.', links: [BYZ] },
      { date: '1057', title: 'Victory at Petroe', description: 'Defeats Michael VI\'s forces near Nicaea; Michael VI abdicates.' },
      { date: '1058', title: 'Deposes the patriarch', description: 'Arrests and deposes the patriarch Michael Keroularios in his drive to reform.' },
      { date: '1059', title: 'Abdicates to a monastery', description: 'Falls gravely ill, abdicates, and names Constantine X Doukas his successor.', links: [per('constantine-x-doukas', 'Constantine X Doukas', 'His chosen successor')] }
    ],
    relatedEntries: {
      locations: [ { ...BYZ, label: 'The empire he ruled' }, { ...CPL, label: 'His capital' } ],
      people: [ per('constantine-x-doukas', 'Constantine X Doukas', 'The civil aristocrat he named as successor'), per('alexios-i-komnenos', 'Alexios I Komnenos', 'His great-nephew, who founded the Komnenian dynasty') ],
      events: []
    },
    sources: [ src('Isaac I Comnenus | Byzantine emperor', 'https://www.britannica.com/biography/Isaac-I-Comnenus'), src('Byzantine Empire', 'https://www.britannica.com/place/Byzantine-Empire') ],
    isRuler: true,
    succession: { office: 'Byzantine Emperor',
      predecessor: { displayName: 'Michael VI', note: 'Michael VI Bringas, the elderly bureaucrat-emperor whom Isaac overthrew by military revolt in 1057. The Macedonian-era emperors before him are not yet covered in the Codex.' },
      successor: { personSlug: 'constantine-x-doukas', displayName: 'Constantine X Doukas', note: 'The civil aristocrat Isaac named on his abdication, passing over his own brother.' } }
  },

  // ── MANUEL I KOMNENOS ─────────────────────────────────────────────────────────
  {
    id: 'manuel-i-komnenos', type: 'character', name: 'Manuel I Komnenos', born: 1118, died: 1180,
    deathAge: 'about 61', causeOfDeath: 'Illness (fever)', restingPlace: 'Monastery of the Pantokrator, Constantinople',
    location: 'Byzantine Empire', aliases: ['Manuel I Comnenus', 'Manuel the Great', 'Manuel I Komnenos'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Manuel_I_Comnenus.jpg',
    summary: 'Byzantine emperor (1143–1180), the last great ruler of the Komnenian revival, whose ambitious wars on every front ended with the fateful defeat at Myriokephalon.',
    title: 'Byzantine Emperor', roles: ['Byzantine Emperor'],
    birth: { date: '28 November 1118', place: { name: 'Constantinople' }, note: 'Youngest son of John II Komnenos, named heir over his elder brother.' },
    death: { date: '24 September 1180', place: { name: 'Constantinople' }, circumstance: 'Died in 1180, leaving his young son Alexios II under a regency that soon collapsed.' },
    quickFacts: { realm: 'Byzantine Empire', dynasty: 'Komnenos', culture: 'Byzantine Greek', knownFor: 'his ambitious wars on every front and the defeat at Myriokephalon' },
    imageInfo: { caption: 'Manuel I Komnenos with his second wife, Maria of Antioch, in a twelfth-century manuscript (Vatican Library).', creator: 'Byzantine manuscript illuminator', date: '12th century', source: 'Wikimedia Commons', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Manuel_I_Comnenus.jpg', license: 'Public domain', note: 'A near-contemporary manuscript image of the emperor and empress.' },
    overview: [
      'Manuel I Komnenos was Byzantine emperor from 1143 to 1180, and the last of the three great emperors of the Komnenian revival that had restored Byzantine power in the twelfth century. Energetic, martial, and fascinated by the Latin West, he pursued a hugely ambitious foreign policy that sought to reassert Roman supremacy from Italy to the Crusader states.',
      'He warred against the Normans of Sicily, imposed his overlordship on the Crusader principality of Antioch, extended Byzantine influence over Hungary and the Balkans, and dreamed of reuniting the Christian churches under his own leadership. But his costly wars strained the empire, and his great expedition against the Seljuk Turks ended in the disastrous ambush at Myriokephalon in 1176 — a defeat that dashed hopes of recovering the Anatolian heartland and cast a long shadow over the empire\'s future.'
    ],
    greatestFeats: ['Byzantine Emperor at the height of the Komnenian revival', 'Overlord of Crusader Antioch', 'Extended Byzantine power in the Balkans and Hungary'],
    contentSections: [
      { title: 'Overview', paragraphs: [
        'Manuel I Komnenos was Byzantine emperor from 1143 to 1180, and the last of the three great emperors of the Komnenian revival that had restored Byzantine power in the twelfth century. Energetic, martial, and fascinated by the Latin West, he pursued a hugely ambitious foreign policy that sought to reassert Roman supremacy from Italy to the Crusader states.',
        'He warred against the Normans of Sicily, imposed his overlordship on the Crusader principality of Antioch, extended Byzantine influence over Hungary and the Balkans, and dreamed of reuniting the Christian churches under his own leadership. But his costly wars strained the empire, and his great expedition against the Seljuk Turks ended in the disastrous ambush at Myriokephalon in 1176 — a defeat that dashed hopes of recovering the Anatolian heartland and cast a long shadow over the empire\'s future.'
      ]},
      { title: 'Birth and early life', paragraphs: [
        'Manuel was born in 1118, the fourth and youngest son of the great emperor John II Komnenos. He was not the expected heir, but on campaign in 1143 the dying John, passing over his surviving elder son, named the young and capable Manuel to succeed him. Manuel secured the throne and the capital, and set about a reign that would carry the assertive spirit of his father and grandfather to its most ambitious — and most overreaching — heights.'
      ]},
      { title: 'Character and Personality', paragraphs: [
        'Manuel was a figure of dazzling energy and contradictions: a formidable soldier who loved the joust and the tournament, a lover of Latin knights and Western ways at the head of the Greek empire, and a restless, grandiose strategist forever pursuing several vast schemes at once. Contemporaries, Greek and Latin alike, were struck by his physical vigour, personal bravery, charm, and intellectual curiosity — he dabbled in theology, astrology, and even medicine.',
        'That same restlessness had its costs. His imagination outran his resources; he scattered the empire\'s strength across too many fronts and too many grand designs — Italy, Antioch, Egypt, Hungary, church union — draining the treasury and exhausting the army. Admired and even beloved, he was also, in the judgement of some later historians, the brilliant emperor whose overambition set the empire on the road to the crisis that followed his death.'
      ]},
      { title: 'Wars on every front', paragraphs: [
        'Manuel\'s reign was a whirl of campaigns and diplomacy in pursuit of a restored Roman supremacy. He fought the Normans of Sicily and launched an ambitious bid to reconquer southern Italy, which won early successes before collapsing. He compelled the Crusader Principality of Antioch to acknowledge Byzantine overlordship, married into the royal house of Jerusalem, and planned joint operations against Fatimid Egypt. In the Balkans he waged repeated wars that brought Hungary and Serbia under his influence.',
        'His grandest ambition was to make himself the arbiter of the Christian world, reuniting the Eastern and Western churches and the two empires under his own primacy. To this end he cultivated the Latins, employed them at his court, and negotiated endlessly with popes and princes — projects that dazzled but ultimately eluded him.'
      ]},
      { title: 'Myriokephalon and death', paragraphs: [
        'The turning point came against the Seljuk Turks of Rum. In 1176 Manuel led a great army to destroy the Seljuk capital of Konya, but at Myriokephalon, in a narrow mountain pass, the Turks ambushed and mauled his forces. Though not annihilated, the army was broken as an offensive instrument, and Manuel himself compared the disaster to Manzikert. The dream of driving the Turks from Anatolia died there.',
        'Manuel lived on until 1180, when he died of a fever, leaving the throne to his eleven-year-old son Alexios II under the regency of the empress Maria of Antioch.'
      ]},
      { title: 'Legacy', paragraphs: [
        'Manuel I is remembered as the last great emperor of the Komnenian age — a brilliant, ambitious, and cosmopolitan ruler under whom Byzantium cut a dazzling figure on the world stage. Yet his death is often taken as the beginning of the end: his overstretched wars had exhausted the empire, his succession was left to a child, and the anti-Latin reaction and dynastic murder that followed opened the long decline that would culminate in the sack of Constantinople by the Fourth Crusade in 1204.'
      ]}
    ],
    keyAchievements: [
      { title: 'Byzantine Emperor, 1143–1180', description: 'Ruled at the glittering height of the Komnenian revival.' },
      { title: 'Overlord of Antioch and arbiter of the Levant', description: 'Imposed Byzantine suzerainty on the Crusader states and planned to take Egypt.' },
      { title: 'Extended power in the Balkans', description: 'Brought Hungary and Serbia under Byzantine influence.' }
    ],
    timeline: [
      { date: '1118', title: 'Born', description: 'Born the youngest son of the emperor John II Komnenos.', links: [per('john-ii-komnenos', 'John II Komnenos', 'His father')] },
      { date: '1143', title: 'Becomes emperor', description: 'Named heir by his dying father over his elder brother, and secures the throne.', links: [per('john-ii-komnenos', 'John II Komnenos', 'His father and predecessor'), BYZ] },
      { date: '1155–1158', title: 'War in Italy', description: 'Launches an ambitious but ultimately failed campaign to reconquer southern Italy from the Normans.' },
      { date: '1159', title: 'Overlord of Antioch', description: 'Compels the Crusader Principality of Antioch to acknowledge Byzantine suzerainty.' },
      { date: '1176', title: 'Defeat at Myriokephalon', description: 'His great expedition against the Seljuks is ambushed, ending hopes of retaking Anatolia.' },
      { date: '24 September 1180', title: 'Dies', description: 'Dies of fever, leaving his young son Alexios II under a fragile regency.' }
    ],
    relatedEntries: {
      locations: [ { ...BYZ, label: 'The empire he ruled' }, { ...CPL, label: 'His capital' } ],
      people: [ per('john-ii-komnenos', 'John II Komnenos', 'His father and predecessor'), per('alexios-i-komnenos', 'Alexios I Komnenos', 'His grandfather, founder of the Komnenian dynasty') ],
      events: []
    },
    sources: [ src('Manuel I Comnenus | Byzantine emperor', 'https://www.britannica.com/biography/Manuel-I-Comnenus'), src('Byzantine Empire', 'https://www.britannica.com/place/Byzantine-Empire') ],
    isRuler: true,
    succession: { office: 'Byzantine Emperor',
      predecessor: { personSlug: 'john-ii-komnenos', displayName: 'John II Komnenos', note: 'His father, who named the young Manuel his heir over an elder brother.' },
      successor: { displayName: 'Alexios II Komnenos', note: 'His young son, who reigned as a child under regency before being overthrown and murdered by Andronikos I Komnenos in 1183. The later Komnenoi and the Angeloi are not yet covered in the Codex.' } }
  },

  // ── MANUEL II PALAIOLOGOS ─────────────────────────────────────────────────────
  {
    id: 'manuel-ii-palaiologos', type: 'character', name: 'Manuel II Palaiologos', born: 1350, died: 1425,
    deathAge: 'about 75', causeOfDeath: 'Natural causes, as a monk', restingPlace: 'Monastery of the Pantokrator, Constantinople',
    location: 'Byzantine Empire', aliases: ['Manuel II Palaeologus', 'Manuel II Palaiologos'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/92/Manuel_II_Palaiologos_%28cropped%29.jpg',
    summary: 'Byzantine emperor (1391–1425) of the empire\'s twilight, an Ottoman vassal and learned author who toured Western Europe — reaching London — in search of aid against the Turks.',
    title: 'Byzantine Emperor', roles: ['Byzantine Emperor'],
    birth: { date: '27 June 1350', place: { name: 'Constantinople' }, note: 'Son of John V Palaiologos, in the last age of the Byzantine Empire.' },
    death: { date: '21 July 1425', place: { name: 'Constantinople' }, circumstance: 'Died in 1425 as the monk Matthew, after a stroke, succeeded by his son John VIII.' },
    quickFacts: { realm: 'Byzantine Empire', dynasty: 'Palaiologos', culture: 'Byzantine Greek', knownFor: 'his European tour seeking aid and his survival of the Ottoman siege' },
    imageInfo: { caption: 'Manuel II Palaiologos, from a fifteenth-century manuscript portrait.', creator: 'Byzantine manuscript portrait', date: 'Early 15th century', source: 'Wikimedia Commons', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Manuel_II_Palaiologos_(cropped).jpg', license: 'CC BY-SA 4.0', note: 'A cropped detail of a near-contemporary manuscript portrait of the emperor.' },
    overview: [
      'Manuel II Palaiologos was Byzantine emperor from 1391 to 1425, ruling the shrunken remnant of the empire in its twilight, when Constantinople and a few scattered territories were nearly all that remained and the emperor was, in practice, a vassal of the Ottoman sultan. A brave, cultivated, and deeply learned man, he spent his reign in a desperate search for the means to survive.',
      'When the sultan Bayezid I laid siege to Constantinople, Manuel travelled across Western Europe from 1399 to 1403 — through Italy, France, and even to England — appealing in person for military help, the only Byzantine emperor ever to visit those lands. The city was saved not by the West but by Timur\'s destruction of Bayezid at Ankara in 1402, which bought the empire a last generation. A prolific author, Manuel spent his final years defending his tiny realm before dying as a monk in 1425.'
    ],
    greatestFeats: ['Byzantine Emperor in the empire\'s last age', 'Toured Western Europe seeking aid', 'A learned author and theologian'],
    contentSections: [
      { title: 'Overview', paragraphs: [
        'Manuel II Palaiologos was Byzantine emperor from 1391 to 1425, ruling the shrunken remnant of the empire in its twilight, when Constantinople and a few scattered territories were nearly all that remained and the emperor was, in practice, a vassal of the Ottoman sultan. A brave, cultivated, and deeply learned man, he spent his reign in a desperate search for the means to survive.',
        'When the sultan Bayezid I laid siege to Constantinople, Manuel travelled across Western Europe from 1399 to 1403 — through Italy, France, and even to England — appealing in person for military help, the only Byzantine emperor ever to visit those lands. The city was saved not by the West but by Timur\'s destruction of Bayezid at Ankara in 1402, which bought the empire a last generation. A prolific author, Manuel spent his final years defending his tiny realm before dying as a monk in 1425.'
      ]},
      { title: 'Birth and early life', paragraphs: [
        'Manuel was born in 1350, a son of the emperor John V Palaiologos, into a dynasty presiding over an empire in headlong decline, hemmed in by the rising power of the Ottoman Turks. He spent his early years amid civil wars and Ottoman pressure, at one point held as a hostage at the sultan\'s court and even compelled to accompany Ottoman campaigns. On his father\'s death in 1391 he slipped away from the sultan\'s camp to claim the throne.'
      ]},
      { title: 'Character and Personality', paragraphs: [
        'Manuel II was among the most admirable of the late emperors: courageous, dignified, and intellectually distinguished, he bore the humiliations of his position — vassalage, hostage-taking, endless begging for aid — with a stoic self-possession that impressed even his Latin hosts. He was a genuine scholar and prolific writer, the author of theological dialogues, letters, orations, and poetry, who kept the flame of Byzantine learning burning as the political world collapsed around him.',
        'His was the temperament of a wise man trapped in a hopeless situation. He understood, better than most, that Western help would come only at the price of submitting the Orthodox Church to Rome, and he was clear-eyed about how little the West would truly do; he is said to have counselled his son that the promise of church union was best dangled before the Turks as a threat, never actually concluded. Patient, realistic, and unbroken, he managed the empire\'s decline with a grace that its situation scarcely allowed.'
      ]},
      { title: 'The siege and the European tour', paragraphs: [
        'The great crisis of the reign was the long Ottoman blockade of Constantinople begun by Bayezid I in 1394. With the city slowly strangling, Manuel left it in the hands of a nephew and set out in 1399 on an extraordinary journey through the courts of the West — Venice, Milan, Paris, where he stayed with Charles VI, and London, where Henry IV received him — pleading for the men and money to save Christian Constantinople. He was honoured everywhere and helped almost nowhere.',
        'Deliverance came from the East instead. In 1402 the conqueror Timur crushed Bayezid I at the Battle of Ankara, shattering Ottoman power and lifting the siege. Manuel returned home to a reprieve, exploited the Ottoman Interregnum to recover territory and play the sultan\'s sons against one another, and rebuilt the Hexamilion wall defending the Morea.'
      ]},
      { title: 'Death', paragraphs: [
        'The reprieve did not last. Under Murad II the Ottomans besieged Constantinople again in 1422, and Manuel, aged and worn, suffered a stroke and withdrew from affairs, leaving government to his son John. He took monastic vows as the monk Matthew and died on 21 July 1425, succeeded by John VIII.'
      ]},
      { title: 'Legacy', paragraphs: [
        'Manuel II is remembered as the noblest of the last Byzantine emperors — a learned, courageous, and clear-sighted ruler who kept the dying empire alive by patience and diplomacy for another generation, and who embodied the intellectual brilliance of the Palaiologan twilight even as the state crumbled. He handed to his son John VIII an empire reduced almost to the walls of Constantinople, whose final fall to his grandson\'s Ottoman contemporaries lay less than thirty years ahead.'
      ]}
    ],
    keyAchievements: [
      { title: 'Byzantine Emperor, 1391–1425', description: 'Held the dying empire together through the worst of the Ottoman threat.' },
      { title: 'The European tour, 1399–1403', description: 'Travelled to Italy, France, and England seeking aid — the only emperor to do so.' },
      { title: 'A learned author', description: 'Wrote theological dialogues, letters, and orations, keeping Byzantine learning alive.' }
    ],
    timeline: [
      { date: '1350', title: 'Born', description: 'Born a son of John V Palaiologos, in the empire\'s last age.' },
      { date: '1391', title: 'Becomes emperor', description: 'Escapes the Ottoman camp to claim the throne on his father\'s death.', links: [BYZ, CPL] },
      { date: '1394', title: 'Ottoman siege of Constantinople', description: 'Bayezid I begins the long blockade of the capital.', links: [per('bayezid-i', 'Bayezid I', 'The sultan who besieged his capital')] },
      { date: '1399–1403', title: 'Tours Western Europe', description: 'Travels through Italy, France, and England pleading for help against the Turks.' },
      { date: '1402', title: 'Reprieve at Ankara', description: 'Timur destroys Bayezid I at Ankara, lifting the siege and saving the city.' },
      { date: '21 July 1425', title: 'Dies', description: 'Dies as the monk Matthew after a stroke; his son John VIII succeeds.', links: [per('john-viii-palaiologos', 'John VIII Palaiologos', 'His son and successor')] }
    ],
    relatedEntries: {
      locations: [ { ...BYZ, label: 'The empire in its twilight' }, { ...CPL, label: 'His besieged capital' } ],
      people: [ per('john-viii-palaiologos', 'John VIII Palaiologos', 'His son and successor'), per('bayezid-i', 'Bayezid I', 'The Ottoman sultan who besieged Constantinople') ],
      events: []
    },
    sources: [ src('Manuel II Palaeologus | Byzantine emperor', 'https://www.britannica.com/biography/Manuel-II-Palaeologus'), src('Byzantine Empire', 'https://www.britannica.com/place/Byzantine-Empire') ],
    isRuler: true,
    succession: { office: 'Byzantine Emperor',
      predecessor: { displayName: 'John V Palaiologos', note: 'His father, whose long, troubled reign as an Ottoman tributary preceded him. The earlier Palaiologan emperors are not yet covered in the Codex.' },
      successor: { personSlug: 'john-viii-palaiologos', displayName: 'John VIII Palaiologos', note: 'His son, who continued the search for Western aid and church union.' } }
  }
]

// Insert / replace
let added = 0, replaced = 0
for (const p of people) {
  const i = data.characters.findIndex(c => c.id === p.id)
  if (i >= 0) { data.characters[i] = p; replaced++ } else { data.characters.push(p); added++ }
}

// Relink the three existing endpoints.
const byId = new Map(data.characters.map(c => [c.id, c]))
const relink = (rulerId, side, personSlug, displayName, note) => {
  const c = byId.get(rulerId)
  if (!c?.succession?.[side]) { console.warn(`SKIP relink ${rulerId}.${side}`); return }
  c.succession[side] = { personSlug, displayName, note }
  console.log(`relinked ${rulerId}.${side} -> ${personSlug}`)
}
relink('constantine-x-doukas', 'predecessor', 'isaac-i-komnenos', 'Isaac I Komnenos', 'The soldier-emperor who named Constantine his successor on abdicating in 1059.')
relink('john-ii-komnenos', 'successor', 'manuel-i-komnenos', 'Manuel I Komnenos', 'His youngest son, whom he named heir on his deathbed over an elder brother.')
relink('john-viii-palaiologos', 'predecessor', 'manuel-ii-palaiologos', 'Manuel II Palaiologos', 'His father, who kept the dying empire alive by diplomacy and his tour of the West.')

fs.writeFileSync(dataPath, JSON.stringify(data, null, 2))
console.log(`\nByzantine emperors added: ${added}, replaced: ${replaced}. Total characters: ${data.characters.length}`)
