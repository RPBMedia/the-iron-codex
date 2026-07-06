/**
 * Ayyubid & Mamluk cluster. Four rulers whose named endpoints link to existing
 * anchors: As-Salih Ismail (Nur ad-Din's successor), Al-Adil II (al-Kamil's),
 * Al-Mansur Ali (Qutuz's predecessor), Baraka Khan (Baybars's successor).
 * Open-side neighbours are noted boundaries. All have coin images. Idempotent.
 */
import fs from 'node:fs'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dataPath = path.join(__dirname, '../server/data/history.json')
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'))

const CRU = { title: 'Crusader States', type: 'location', slug: 'crusader-states' }
const per = (slug, title, label) => ({ title, type: 'person', slug, label })
const src = (title, url) => ({ title, author: 'Encyclopaedia Britannica', type: 'encyclopedia', url })

const people = [
  // ── AS-SALIH ISMAIL ───────────────────────────────────────────────────────────
  {
    id: 'as-salih-ismail', type: 'character', name: 'As-Salih Ismail', born: 1163, died: 1181,
    deathAge: 'about 18', causeOfDeath: 'Illness, possibly poison', restingPlace: 'Aleppo',
    location: 'Zengid Emirate of Aleppo', aliases: ['as-Salih Ismail al-Malik', 'al-Salih Ismail'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/9f/Al-Salih_Isma%60il%2C_Halab%2C_571_H_Zengid.jpg',
    summary: 'Zengid emir of Aleppo (1174–1181), the boy-son of Nur ad-Din whose minority allowed Saladin to seize Damascus and most of Muslim Syria.',
    title: 'Zengid Emir of Aleppo', roles: ['Zengid Emir of Aleppo'],
    birth: { date: '1163', place: { name: 'Syria' }, note: 'Son of Nur ad-Din, ruler of Aleppo and Damascus.' },
    death: { date: '4 December 1181', place: { name: 'Aleppo' }, circumstance: 'Died young in Aleppo, some said by poison, still resisting Saladin\'s advance.' },
    quickFacts: { realm: 'Zengid Emirate of Aleppo', dynasty: 'Zengid', culture: 'Turkic / Syrian', knownFor: 'the boy-emir whose minority opened Syria to Saladin' },
    imageInfo: { caption: 'A Zengid coin struck at Aleppo in the name of as-Salih Ismail.', creator: 'Zengid mint of Aleppo', date: '571 AH (1175–76)', source: 'Wikimedia Commons', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Al-Salih_Isma%60il,_Halab,_571_H_Zengid.jpg', license: 'CC0', note: 'A coin struck in his name; no portrait survives.' },
    overview: [
      'As-Salih Ismail was the Zengid emir of Aleppo from 1174 to 1181, the young son and heir of the great Nur ad-Din, who had united Muslim Syria against the Crusaders. He came to power as a boy of eleven on his father\'s sudden death, and his minority proved the undoing of his house.',
      'With the strong hand of Nur ad-Din gone, his ablest lieutenant, Saladin, moved from Egypt into Syria and seized Damascus and much of the country, claiming to act as the guardian of Nur ad-Din\'s heir. As-Salih, holding out in Aleppo, became the rallying point of resistance to Saladin, but he died still a teenager in 1181, and within two years Aleppo too had fallen to Saladin, extinguishing Zengid power.'
    ],
    greatestFeats: ['Zengid Emir of Aleppo', 'Heir of Nur ad-Din'],
    contentSections: [
      { title: 'Overview', paragraphs: [
        'As-Salih Ismail was the Zengid emir of Aleppo from 1174 to 1181, the young son and heir of the great Nur ad-Din, who had united Muslim Syria against the Crusaders. He came to power as a boy of eleven on his father\'s sudden death, and his minority proved the undoing of his house.',
        'With the strong hand of Nur ad-Din gone, his ablest lieutenant, Saladin, moved from Egypt into Syria and seized Damascus and much of the country, claiming to act as the guardian of Nur ad-Din\'s heir. As-Salih, holding out in Aleppo, became the rallying point of resistance to Saladin, but he died still a teenager in 1181, and within two years Aleppo too had fallen to Saladin, extinguishing Zengid power.'
      ]},
      { title: 'Birth and early life', paragraphs: [
        'As-Salih Ismail was born in 1163, the son of Nur ad-Din, the atabeg who had welded Aleppo, Damascus, and much of Muslim Syria into a single power dedicated to the holy war against the Crusader states. When Nur ad-Din died suddenly in 1174, the eleven-year-old As-Salih was proclaimed his successor at Aleppo, with the great emirs of the realm contending to control him.',
        'His inheritance was immediately imperilled by the ambitions of Saladin, whom Nur ad-Din had sent to govern Egypt and who now claimed to act in the boy\'s name.'
      ]},
      { title: 'Character and Personality', paragraphs: [
        'As-Salih Ismail is remembered less as a personality than as a symbol — the legitimate boy-heir around whom loyalty to the house of Nur ad-Din gathered against the usurping ambition of Saladin. The sources, especially those hostile to Saladin, cast him in a sympathetic light, the rightful young prince dispossessed by an over-mighty servant.',
        'What the record allows him is a certain dignity and resolve beyond his years. He appealed to the people of his cities against Saladin, held Aleppo through repeated sieges, and became a genuine focus of Zengid loyalism. Yet he was, inevitably, a pawn as much as a prince — his cause managed by the emirs around him, his fate bound to a power struggle he was too young to master. He is the poignant last hope of the Zengid house, whose early death sealed its fall.'
      ]},
      { title: 'The rise of Saladin', paragraphs: [
        'The central drama of As-Salih\'s brief reign was the loss of his father\'s empire to Saladin. Within months of Nur ad-Din\'s death Saladin marched from Egypt into Syria and took Damascus, presenting himself as the loyal protector of the young emir even as he stripped away his lands. As-Salih, withdrawn to Aleppo, refused this fiction and led the resistance, appealing to the loyalty owed his father\'s memory.',
        'For years Aleppo and its allies — including, at times, the Zengids of Mosul and even, opportunistically, the Crusaders and the Assassins — fought to check Saladin\'s expansion. But Saladin steadily prevailed, and As-Salih was confined to an ever-shrinking sphere around his capital.'
      ]},
      { title: 'Death', paragraphs: [
        'As-Salih Ismail died at Aleppo on 4 December 1181, aged only eighteen, some said of poison. On his deathbed he is reported to have urged his followers to hand the city to his Zengid cousins of Mosul rather than to Saladin. Aleppo passed briefly to a cousin of the house, but in 1183 Saladin at last took the city, ending Zengid rule there.'
      ]},
      { title: 'Legacy', paragraphs: [
        'As-Salih Ismail is remembered as the boy-emir whose death cleared Saladin\'s path to the mastery of Muslim Syria. So long as Nur ad-Din\'s legitimate heir lived, Saladin\'s expansion wore the guise of protection and met determined resistance; with As-Salih gone and Aleppo taken, Saladin could unite Egypt and Syria under his own house, the Ayyubids, and turn that united power against the Crusader Kingdom of Jerusalem — the road that led to Hattin in 1187.'
      ]}
    ],
    keyAchievements: [
      { title: 'Zengid Emir of Aleppo, 1174–1181', description: 'Heir of Nur ad-Din and focus of resistance to Saladin.' },
      { title: 'Held Aleppo against Saladin', description: 'Kept the Zengid cause alive through repeated sieges.' }
    ],
    timeline: [
      { date: '1163', title: 'Born', description: 'Born the son of Nur ad-Din, ruler of Muslim Syria.', links: [per('nur-ad-din', 'Nur ad-Din', 'His father')] },
      { date: '1174', title: 'Succeeds as a boy', description: 'Becomes emir of Aleppo at eleven on his father\'s sudden death.', links: [per('nur-ad-din', 'Nur ad-Din', 'His father and predecessor')] },
      { date: '1174', title: 'Saladin seizes Damascus', description: 'Saladin marches from Egypt and takes Damascus in the boy-emir\'s name.', links: [per('saladin', 'Saladin', 'His rival, who dismantled his inheritance')] },
      { date: '1175–1181', title: 'Resistance from Aleppo', description: 'Holds Aleppo as the rallying point of Zengid loyalism against Saladin.', links: [CRU] },
      { date: '4 December 1181', title: 'Dies young', description: 'Dies at eighteen; within two years Saladin takes Aleppo, ending Zengid rule.' }
    ],
    relatedEntries: {
      locations: [ { ...CRU, label: 'The Crusader states his house fought' } ],
      people: [ per('nur-ad-din', 'Nur ad-Din', 'His father and predecessor'), per('saladin', 'Saladin', 'The rival who supplanted his house') ],
      events: []
    },
    sources: [ src('Nur al-Din | Muslim ruler', 'https://www.britannica.com/biography/Nur-al-Din'), src('Saladin | Biography, Achievements, & Facts', 'https://www.britannica.com/biography/Saladin') ],
    isRuler: true,
    succession: { office: 'Zengid Emir of Aleppo',
      predecessor: { personSlug: 'nur-ad-din', displayName: 'Nur ad-Din', note: 'His father, who had united Muslim Syria; As-Salih succeeded him as a boy in 1174.' },
      successor: { displayName: 'Imad al-Din Zengi II', note: 'A Zengid cousin who briefly held Aleppo after As-Salih\'s death, before Saladin annexed the city in 1183, ending Zengid rule there.' } }
  },

  // ── AL-ADIL II ────────────────────────────────────────────────────────────────
  {
    id: 'al-adil-ii', type: 'character', name: 'Al-Adil II', born: 1221, died: 1248,
    deathAge: 'about 27', causeOfDeath: 'Died in prison', restingPlace: 'Egypt',
    location: 'Ayyubid Sultanate of Egypt', aliases: ['al-Adil II Abu Bakr', 'Sayf al-Din Abu Bakr'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/f2/Ayyubid_AV_dinar%2C_al-%27Adil_Abu_Bakr_II%2C_m.al-Qahira%2C_637_AH.jpg',
    summary: 'Ayyubid sultan of Egypt (1238–1240), the pleasure-loving son of al-Kamil, deposed and imprisoned by his brother after a brief and neglectful reign.',
    title: 'Ayyubid Sultan of Egypt', roles: ['Ayyubid Sultan of Egypt'],
    birth: { date: '1221', place: { name: 'Egypt' }, note: 'Son of the Ayyubid sultan al-Kamil.' },
    death: { date: '9 February 1248', place: { name: 'Egypt' }, circumstance: 'Died in captivity, having been deposed by his brother as-Salih Ayyub in 1240.' },
    quickFacts: { realm: 'Ayyubid Sultanate of Egypt', dynasty: 'Ayyubid', culture: 'Kurdish / Egyptian', knownFor: 'his short, neglectful reign and swift deposition' },
    imageInfo: { caption: 'A gold dinar of al-Adil II struck at Cairo.', creator: 'Ayyubid mint of Cairo', date: '637 AH (1239–40)', source: 'Wikimedia Commons', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Ayyubid_AV_dinar,_al-%27Adil_Abu_Bakr_II,_m.al-Qahira,_637_AH.jpg', license: 'Attribution', note: 'A coin struck in his name; no portrait survives.' },
    overview: [
      'Al-Adil II was the Ayyubid sultan of Egypt from 1238 to 1240, the son and chosen heir of the powerful al-Kamil. He inherited the central Ayyubid sultanate at a moment when the confederation of Ayyubid princes founded by Saladin was fracturing into rivalry, and he proved wholly unequal to holding it together.',
      'Young and devoted to pleasure, he neglected the business of rule and alienated the emirs and his own kinsmen. Within two years he was overthrown by his elder half-brother, as-Salih Ayyub, who seized Egypt and threw al-Adil into a prison where he eventually died.'
    ],
    greatestFeats: ['Ayyubid Sultan of Egypt'],
    contentSections: [
      { title: 'Overview', paragraphs: [
        'Al-Adil II was the Ayyubid sultan of Egypt from 1238 to 1240, the son and chosen heir of the powerful al-Kamil. He inherited the central Ayyubid sultanate at a moment when the confederation of Ayyubid princes founded by Saladin was fracturing into rivalry, and he proved wholly unequal to holding it together.',
        'Young and devoted to pleasure, he neglected the business of rule and alienated the emirs and his own kinsmen. Within two years he was overthrown by his elder half-brother, as-Salih Ayyub, who seized Egypt and threw al-Adil into a prison where he eventually died.'
      ]},
      { title: 'Birth and early life', paragraphs: [
        'Al-Adil II was born in 1221, a son of al-Kamil, the ablest of Saladin\'s Ayyubid successors, who had defeated the Fifth Crusade and handed Jerusalem to the Emperor Frederick II by treaty. Named heir in Egypt, al-Adil succeeded his father on al-Kamil\'s death in 1238, while other Ayyubid princes held Damascus and the Syrian lands.'
      ]},
      { title: 'Character and Personality', paragraphs: [
        'Al-Adil II is remembered, unflatteringly, as a frivolous and negligent ruler — a young sultan who preferred amusement and the company of favourites to the hard work of governing a threatened realm. The sources dwell on his idleness and his poor choice of counsellors, and contrast him sharply with his formidable father and his more capable brother.',
        'His failings were those of weakness rather than cruelty. He let power slip through indolence, offended the great Mamluk emirs on whom Ayyubid rule depended, and failed to command the loyalty even of his own household. In an age and a dynasty that demanded constant vigilance and hard campaigning, his want of seriousness was fatal; he is remembered as the sultan who lost Egypt through neglect.'
      ]},
      { title: 'A short reign and deposition', paragraphs: [
        'Al-Adil\'s brief reign was spent losing ground. His neglect of government and his reliance on unpopular favourites alienated the Ayyubid emirs, while his half-brother as-Salih Ayyub, ruling in the Jazira and Syria, gathered support against him. In 1240 the emirs of Egypt turned to as-Salih Ayyub, who entered Cairo and took the throne.',
        'Al-Adil was seized and imprisoned. His fall passed the Ayyubid sultanate to the more ruthless and capable as-Salih Ayyub, under whom the Mamluk soldiery that would soon supplant the dynasty rose to new prominence.'
      ]},
      { title: 'Death', paragraphs: [
        'Al-Adil II remained a prisoner for the rest of his life and died in captivity on 9 February 1248, while his brother\'s regime faced the onset of the Seventh Crusade under Louis IX of France.'
      ]},
      { title: 'Legacy', paragraphs: [
        'Al-Adil II is remembered as one of the weakest of the Ayyubid sultans, whose brief and negligent reign hastened the disintegration of Saladin\'s dynasty. His overthrow brought to power his brother as-Salih Ayyub, whose heavy reliance on Mamluk troops set the stage for the soldiers\' seizure of power a decade later and the birth of the Mamluk Sultanate that would rule Egypt for centuries.'
      ]}
    ],
    keyAchievements: [
      { title: 'Ayyubid Sultan of Egypt, 1238–1240', description: 'Inherited the central Ayyubid sultanate from his father al-Kamil.' }
    ],
    timeline: [
      { date: '1221', title: 'Born', description: 'Born a son of the Ayyubid sultan al-Kamil.', links: [per('al-kamil', 'Al-Kamil', 'His father')] },
      { date: '1238', title: 'Becomes Sultan of Egypt', description: 'Succeeds his father al-Kamil as Ayyubid sultan in Egypt.', links: [per('al-kamil', 'Al-Kamil', 'His father and predecessor')] },
      { date: '1238–1240', title: 'A neglectful reign', description: 'Alienates the emirs and kinsmen through idleness and poor counsel.', links: [CRU] },
      { date: '1240', title: 'Deposed by his brother', description: 'Overthrown by as-Salih Ayyub, who seizes Egypt and imprisons him.' },
      { date: '9 February 1248', title: 'Dies in prison', description: 'Dies in captivity as the Seventh Crusade approaches Egypt.' }
    ],
    relatedEntries: {
      locations: [ { ...CRU, label: 'The Crusader states his dynasty faced' } ],
      people: [ per('al-kamil', 'Al-Kamil', 'His father and predecessor'), per('al-adil-i', 'Al-Adil I', 'His great-grandfather and namesake, brother of Saladin') ],
      events: []
    },
    sources: [ src('Ayyubid dynasty', 'https://www.britannica.com/topic/Ayyubid-dynasty'), src('al-Kamil | Ayyubid sultan', 'https://www.britannica.com/biography/al-Kamil') ],
    isRuler: true,
    succession: { office: 'Ayyubid Sultan of Egypt',
      predecessor: { personSlug: 'al-kamil', displayName: 'Al-Kamil', note: 'His father, the ablest of Saladin\'s successors, who named al-Adil his heir in Egypt.' },
      successor: { displayName: 'as-Salih Ayyub', note: 'His half-brother, who deposed and imprisoned him in 1240; under as-Salih Ayyub the Mamluk soldiery rose that would soon replace the dynasty.' } }
  },

  // ── AL-MANSUR ALI ─────────────────────────────────────────────────────────────
  {
    id: 'al-mansur-ali', type: 'character', name: 'Al-Mansur Ali', born: 1242, died: 1259,
    deathAge: 'about 17', causeOfDeath: 'Unknown, after deposition', restingPlace: 'Egypt',
    location: 'Mamluk Sultanate of Egypt', aliases: ['al-Mansur Nur ad-Din Ali', 'al-Mansur Ali'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Gold_dinar_of_al-Mansur_Nur_ad-Din_Ali.jpg',
    summary: 'Mamluk sultan of Egypt (1257–1259), the boy-son of Aybak, deposed by the general Qutuz on the eve of the Mongol invasion because a child could not lead the defence.',
    title: 'Mamluk Sultan', roles: ['Mamluk Sultan of Egypt'],
    birth: { date: 'c. 1242', place: { name: 'Egypt' }, note: 'Son of Aybak, the first Mamluk sultan, and stepson of Shajar al-Durr.' },
    death: { date: 'after 1259', place: { name: 'Egypt' }, circumstance: 'Deposed by Qutuz in 1259; his later fate is uncertain.' },
    quickFacts: { realm: 'Mamluk Sultanate of Egypt', dynasty: 'Mamluk (early)', culture: 'Egyptian / Turkic', knownFor: 'the boy-sultan deposed so an adult could face the Mongols' },
    imageInfo: { caption: 'A gold dinar of the Mamluk sultan al-Mansur Ali.', creator: 'Mamluk mint', date: 'c. 1257–1259', source: 'Wikimedia Commons', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Gold_dinar_of_al-Mansur_Nur_ad-Din_Ali.jpg', license: 'CC0', note: 'A coin struck in his name; no portrait survives.' },
    overview: [
      'Al-Mansur Ali was the Mamluk sultan of Egypt from 1257 to 1259, in the earliest, unstable years of the Mamluk state that had just supplanted the Ayyubids. A boy of about fifteen, the son of the murdered first Mamluk sultan Aybak, he was a figurehead behind whom the great Mamluk emirs contended for power.',
      'His brief reign ended as the terrifying Mongol advance under Hulagu reached Syria. Arguing that a child could not lead the defence of Islam against the Mongols, the powerful commander Qutuz deposed al-Mansur in 1259 and took the throne himself — going on to win the pivotal victory over the Mongols at Ain Jalut the next year.'
    ],
    greatestFeats: ['Mamluk Sultan of Egypt'],
    contentSections: [
      { title: 'Overview', paragraphs: [
        'Al-Mansur Ali was the Mamluk sultan of Egypt from 1257 to 1259, in the earliest, unstable years of the Mamluk state that had just supplanted the Ayyubids. A boy of about fifteen, the son of the murdered first Mamluk sultan Aybak, he was a figurehead behind whom the great Mamluk emirs contended for power.',
        'His brief reign ended as the terrifying Mongol advance under Hulagu reached Syria. Arguing that a child could not lead the defence of Islam against the Mongols, the powerful commander Qutuz deposed al-Mansur in 1259 and took the throne himself — going on to win the pivotal victory over the Mongols at Ain Jalut the next year.'
      ]},
      { title: 'Birth and early life', paragraphs: [
        'Al-Mansur Ali was born about 1242, the son of Izz al-Din Aybak, a Mamluk officer who had become the first sultan of the new Mamluk regime after the fall of the Ayyubids in Egypt. When Aybak was murdered in 1257 — in the deadly intrigues surrounding the formidable queen Shajar al-Durr — the emirs raised the boy al-Mansur to the throne as a compromise figurehead.'
      ]},
      { title: 'Character and Personality', paragraphs: [
        'Al-Mansur Ali left almost no personal mark on history; he was a child sultan, and the record treats him purely as an instrument of the factions around him rather than as an actor in his own right. Real power lay with the senior Mamluk emirs, above all Qutuz, who governed in his name.',
        'His significance is entirely situational. He embodied the fragility of the infant Mamluk state — a regime of soldiers not yet settled into a stable order of succession, in which a boy could be raised up and cast down as the emirs required. When the supreme crisis came, in the form of the Mongol invasion, the very fact of his childhood became the argument for his removal, and he was set aside without resistance.'
      ]},
      { title: 'Deposition on the eve of the Mongols', paragraphs: [
        'Al-Mansur\'s reign coincided with the most dangerous moment in the history of the Muslim Near East: the westward march of the Mongols under Hulagu, who sacked Baghdad and extinguished the Abbasid caliphate in 1258 and then turned toward Syria and Egypt. As the Mongol threat loomed, the emir Qutuz — the strongman of the regime — argued that only a capable adult sultan could rally the defence of Islam.',
        'On that ground Qutuz deposed the boy al-Mansur in 1259 and made himself sultan. The judgement was vindicated the following year, when Qutuz and his lieutenant Baybars destroyed a Mongol army at the Battle of Ain Jalut, halting the Mongol advance.'
      ]},
      { title: 'Death', paragraphs: [
        'After his deposition al-Mansur Ali disappears from the record; his later fate is uncertain. His removal passed the sultanate to Qutuz and, soon after, to Baybars, under whom the Mamluk state became the great power of the region.'
      ]},
      { title: 'Legacy', paragraphs: [
        'Al-Mansur Ali is remembered as the boy-sultan whose deposition brought a capable leader to the throne of Egypt at the decisive hour. His removal in favour of Qutuz made possible the Mamluk victory at Ain Jalut, one of the turning points of the age, which saved Egypt and Syria from the Mongols and confirmed the Mamluk Sultanate as the dominant Muslim power for the next two and a half centuries.'
      ]}
    ],
    keyAchievements: [
      { title: 'Mamluk Sultan of Egypt, 1257–1259', description: 'A boy-sultan of the earliest Mamluk regime.' }
    ],
    timeline: [
      { date: 'c. 1242', title: 'Born', description: 'Born the son of Aybak, the first Mamluk sultan.' },
      { date: '1257', title: 'Raised to the throne', description: 'Made sultan as a boy after his father Aybak\'s murder, a figurehead for the emirs.' },
      { date: '1258', title: 'The Mongols sack Baghdad', description: 'Hulagu\'s Mongols destroy Baghdad and turn toward Syria and Egypt.' },
      { date: '1259', title: 'Deposed by Qutuz', description: 'Qutuz removes the boy-sultan, arguing that only an adult can face the Mongols.', links: [per('qutuz', 'Qutuz', 'Who deposed him and took the throne')] },
      { date: '1260', title: 'Victory at Ain Jalut', description: 'His successor Qutuz defeats the Mongols at Ain Jalut, vindicating the deposition.', links: [per('baybars', 'Baybars', 'Qutuz\'s lieutenant and eventual successor')] }
    ],
    relatedEntries: {
      locations: [ { ...CRU, label: 'The Crusader states his regime confronted' } ],
      people: [ per('qutuz', 'Qutuz', 'Who deposed him and took the throne'), per('baybars', 'Baybars', 'The Mamluk sultan who soon dominated the state') ],
      events: []
    },
    sources: [ src('Mamluk | Islamic dynasty', 'https://www.britannica.com/topic/Mamluk'), src('Quṭuz | Mamluk sultan', 'https://www.britannica.com/biography/Qutuz') ],
    isRuler: true,
    succession: { office: 'Mamluk Sultan',
      predecessor: { displayName: 'Aybak', note: 'His father, Izz al-Din Aybak, the first Mamluk sultan of Egypt, murdered in 1257.' },
      successor: { personSlug: 'qutuz', displayName: 'Qutuz', note: 'The emir who deposed the boy-sultan in 1259 to lead the defence against the Mongols.' } }
  },

  // ── BARAKA KHAN ───────────────────────────────────────────────────────────────
  {
    id: 'baraka-khan', type: 'character', name: 'Baraka Khan', born: 1260, died: 1280,
    deathAge: 'about 20', causeOfDeath: 'Illness (a fall from a horse, by one account)', restingPlace: 'Damascus',
    location: 'Mamluk Sultanate of Egypt', aliases: ['al-Said Barakah', 'al-Malik al-Said Barakah Khan', 'Baraka Qan'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/39/Barakah_coin.jpg',
    summary: 'Mamluk sultan of Egypt (1277–1279), the son of the great Baybars, whose weak rule and clashes with the senior emirs led to his deposition and the rise of Qalawun.',
    title: 'Mamluk Sultan', roles: ['Mamluk Sultan of Egypt'],
    birth: { date: '1260', place: { name: 'Egypt' }, note: 'Son of the Mamluk sultan Baybars.' },
    death: { date: '1280', place: { name: 'Damascus' }, circumstance: 'Died in 1280, a year after being forced from the throne.' },
    quickFacts: { realm: 'Mamluk Sultanate of Egypt', dynasty: 'Mamluk (Bahri)', culture: 'Egyptian / Turkic', knownFor: 'the son of Baybars whose deposition opened the way for Qalawun' },
    imageInfo: { caption: 'A coin of the Mamluk sultan al-Said Baraka Khan.', creator: 'Mamluk mint', date: 'c. 1277–1279', source: 'Wikimedia Commons', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Barakah_coin.jpg', license: 'CC0', note: 'A coin struck in his name; no portrait survives.' },
    overview: [
      'Baraka Khan was the Mamluk sultan of Egypt from 1277 to 1279, the son and heir of the great Baybars, who had done more than anyone to build the Mamluk Sultanate into the leading power of the Near East. Baybars had tried to make the sultanate hereditary in his own line, and on his death Baraka succeeded him.',
      'But the young sultan could not command the loyalty of his father\'s formidable comrades. His attempts to favour his own men against the senior Mamluk emirs provoked a revolt, and in 1279 he was forced to abdicate. After the brief nominal reign of his young brother, the powerful emir Qalawun seized the throne, founding the Qalawunid dynasty that would rule for a century.'
    ],
    greatestFeats: ['Mamluk Sultan of Egypt', 'Son and heir of Baybars'],
    contentSections: [
      { title: 'Overview', paragraphs: [
        'Baraka Khan was the Mamluk sultan of Egypt from 1277 to 1279, the son and heir of the great Baybars, who had done more than anyone to build the Mamluk Sultanate into the leading power of the Near East. Baybars had tried to make the sultanate hereditary in his own line, and on his death Baraka succeeded him.',
        'But the young sultan could not command the loyalty of his father\'s formidable comrades. His attempts to favour his own men against the senior Mamluk emirs provoked a revolt, and in 1279 he was forced to abdicate. After the brief nominal reign of his young brother, the powerful emir Qalawun seized the throne, founding the Qalawunid dynasty that would rule for a century.'
      ]},
      { title: 'Birth and early life', paragraphs: [
        'Baraka was born in 1260, the son of Baybars, the Mamluk sultan and general who had helped defeat the Mongols at Ain Jalut and had hammered the Crusader states with relentless campaigns. Baybars, unusually among the Mamluks, sought to found a dynasty, associating Baraka with him on the throne and grooming him to succeed. On Baybars\'s death in 1277, Baraka became sultan.'
      ]},
      { title: 'Character and Personality', paragraphs: [
        'Baraka Khan is remembered as an amiable but weak and ill-judged young ruler, wholly overshadowed by the memory of his mighty father. The Mamluk system rested not on heredity but on the collective power and mutual loyalty of the great slave-soldier emirs, and Baraka lacked both the standing and the skill to master those hard men who had been his father\'s equals.',
        'His fatal error was to try to build a power base of his own younger favourites at the expense of the senior emirs, whose resentment he thereby united against himself. He appears as a prince undone by the impossible position of a hereditary heir within a system that did not truly recognise heredity — pleasant enough, perhaps, but without the ruthless authority the Mamluk sultanate demanded, and swept aside the moment he lost the soldiers\' confidence.'
      ]},
      { title: 'A weak reign and abdication', paragraphs: [
        'Baraka\'s short reign was consumed by his losing struggle with the great Mamluk emirs. His promotion of his own men and his mistrust of his father\'s veteran commanders alienated the powerful factions of the army, above all the emirs Qalawun and Baysari. In 1279 they rose against him, besieged him in the citadel of Cairo, and compelled him to abdicate.',
        'The throne passed nominally to Baraka\'s seven-year-old brother, Solamish, but real power lay with Qalawun, who soon set the child aside and made himself sultan.'
      ]},
      { title: 'Death', paragraphs: [
        'Baraka Khan was sent away to Kerak and then Damascus, where he died in 1280, only about twenty, a year after his fall. His deposition ended the attempt of Baybars to found a lasting dynasty in his own direct line.'
      ]},
      { title: 'Legacy', paragraphs: [
        'Baraka Khan is remembered as the son whose failure ended Baybars\'s hopes of a hereditary sultanate and cleared the way for Qalawun. His fall confirmed the essential character of the early Mamluk state — a regime in which supreme power belonged to whichever great emir could command the loyalty of the slave-soldier army, not to the blood of a previous sultan. The Qalawunid line that replaced him would, ironically, achieve the dynastic continuity that Baybars had sought and Baraka had failed to hold.'
      ]}
    ],
    keyAchievements: [
      { title: 'Mamluk Sultan of Egypt, 1277–1279', description: 'Succeeded his father Baybars as sultan.' },
      { title: 'Heir of Baybars', description: 'Baybars\'s attempt to found a hereditary Mamluk dynasty.' }
    ],
    timeline: [
      { date: '1260', title: 'Born', description: 'Born the son of the Mamluk sultan Baybars.', links: [per('baybars', 'Baybars', 'His father')] },
      { date: '1277', title: 'Becomes Sultan', description: 'Succeeds his father Baybars, who had groomed him as heir.', links: [per('baybars', 'Baybars', 'His father and predecessor')] },
      { date: '1277–1279', title: 'Clashes with the emirs', description: 'Alienates his father\'s veteran commanders by favouring his own men.', links: [CRU] },
      { date: '1279', title: 'Forced to abdicate', description: 'Besieged in the Cairo citadel by the great emirs and compelled to abdicate.' },
      { date: '1280', title: 'Dies', description: 'Dies at Damascus; the emir Qalawun takes the throne, founding the Qalawunid line.' }
    ],
    relatedEntries: {
      locations: [ { ...CRU, label: 'The Crusader states his father had assailed' } ],
      people: [ per('baybars', 'Baybars', 'His father and predecessor'), per('qutuz', 'Qutuz', 'The earlier Mamluk sultan of his father\'s generation') ],
      events: []
    },
    sources: [ src('Mamluk | Islamic dynasty', 'https://www.britannica.com/topic/Mamluk'), src('Baybars I | Mamluk sultan', 'https://www.britannica.com/biography/Baybars-I') ],
    isRuler: true,
    succession: { office: 'Mamluk Sultan',
      predecessor: { personSlug: 'baybars', displayName: 'Baybars', note: 'His father, the great Mamluk sultan, who had tried to make the throne hereditary in his line.' },
      successor: { displayName: 'Qalawun', note: 'After the brief nominal reign of Baraka\'s young brother Solamish, the emir Qalawun took the throne, founding the Qalawunid dynasty that ruled for a century.' } }
  }
]

let added = 0, replaced = 0
for (const p of people) {
  const i = data.characters.findIndex(c => c.id === p.id)
  if (i >= 0) { data.characters[i] = p; replaced++ } else { data.characters.push(p); added++ }
}
const byId = new Map(data.characters.map(c => [c.id, c]))
const relink = (rulerId, side, personSlug, displayName, note) => {
  const c = byId.get(rulerId)
  if (!c?.succession?.[side]) { console.warn(`SKIP ${rulerId}.${side}`); return }
  c.succession[side] = { personSlug, displayName, note }
  console.log(`relinked ${rulerId}.${side} -> ${personSlug}`)
}
relink('nur-ad-din', 'successor', 'as-salih-ismail', 'As-Salih Ismail', 'His son, the boy-emir of Aleppo whose minority let Saladin seize Syria.')
relink('al-kamil', 'successor', 'al-adil-ii', 'Al-Adil II', 'His son, whose neglectful reign ended in deposition after two years.')
relink('qutuz', 'predecessor', 'al-mansur-ali', 'Al-Mansur Ali', 'The boy-sultan Qutuz deposed in 1259 to face the Mongols.')
relink('baybars', 'successor', 'baraka-khan', 'Baraka Khan', 'His son, whose weak reign ended in deposition and the rise of Qalawun.')

fs.writeFileSync(dataPath, JSON.stringify(data, null, 2))
console.log(`\nAyyubid/Mamluk added: ${added}, replaced: ${replaced}. Total: ${data.characters.length}`)
