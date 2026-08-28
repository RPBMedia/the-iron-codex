/**
 * Reconquista Batch 2 — the Simancas cluster (10th century).
 * Adds: Battle of Simancas (939), Ramiro II of León, Abd al-Rahman III,
 * Caliphate of Córdoba (polity), Simancas (fortress town). Bidirectional links,
 * verified Wikimedia images, aliases, sources. Idempotent by id. Also rewires
 * the existing Covadonga continuity forward to Simancas.
 */
import fs from 'node:fs'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dataPath = path.join(__dirname, '../server/data/history.json')
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'))

const loc = (slug, title, label) => ({ title, type: 'location', slug, label })
const per = (slug, title, label) => ({ title, type: 'person', slug, label })
const evt = (slug, title, label) => ({ title, type: 'event', slug, label })
const hse = (slug, title, label) => ({ title, type: 'house', slug, label })
const fp = (file) => `https://commons.wikimedia.org/wiki/Special:FilePath/${file}`
const upsert = (arr, entry) => {
  const i = arr.findIndex(e => e.id === entry.id)
  if (i >= 0) { arr[i] = entry; return 'updated' }
  arr.push(entry); return 'added'
}

// ---------------------------------------------------------------- EVENT
const battle = {
  id: 'battle-of-simancas', type: 'event', name: 'Battle of Simancas', year: 939,
  location: 'Simancas, Kingdom of León, Iberia', eventType: 'Battle',
  conflict: 'Reconquista — Leonese–Córdoban wars',
  image: fp('Caliphate%20of%20C%C3%B3rdoba%20under%20Almanzor%20-%201000%20CE.png'),
  summary: 'In August 939 a Christian coalition under Ramiro II of León crushed the great campaigning army of Caliph Abd al-Rahman III near Simancas on the Duero — a rare personal defeat for the caliph and the high-water mark of Leonese power.',
  details: 'Abd al-Rahman III led an enormous caliphal expedition — later remembered as the "Campaign of Omnipotence" — northward against León. Ramiro II, allied with García Sánchez I of Pamplona and Count Fernán González of Castile, met and broke it at Simancas, then destroyed much of the retreating army at the ravine of al-Khandaq (Alhandega).',
  factions: ['Kingdom of León', 'County of Castile', 'Kingdom of Pamplona', 'Caliphate of Córdoba'],
  leaders: [
    { name: 'Ramiro II of León', faction: 'Christian coalition', personId: 'ramiro-ii-of-leon' },
    { name: 'Fernán González', faction: 'County of Castile' },
    { name: 'García Sánchez I of Pamplona', faction: 'Kingdom of Pamplona' },
    { name: 'Abd al-Rahman III', faction: 'Caliphate of Córdoba', personId: 'abd-al-rahman-iii' }
  ],
  eventLocation: { name: 'Simancas' },
  outcome: 'Decisive Christian victory; the caliphal army was routed and Abd al-Rahman III barely escaped, halting Córdoban expansion on the Duero frontier for years.',
  background: [
    'Abd al-Rahman III had proclaimed himself caliph in 929 and raised the power of Córdoba to its height, but the Christian kingdoms of the north were also strengthening. Ramiro II of León, an aggressive and capable warrior-king, had already beaten Córdoban forces and pressed the frontier southward toward the Duero.',
    'In 939 the caliph mustered a vast army for a punitive campaign into León. Ramiro gathered his own coalition — the Leonese host, the Castilian levies of Count Fernán González, and the Pamplonese under García Sánchez I — and concentrated near the fortress of Simancas to meet the invasion.'
  ],
  battle: 'The armies clashed near Simancas in early August; a solar eclipse on 19 July had unsettled the caliph\'s troops beforehand. The caliphal army, for all its size, was broken in the fighting and forced into retreat. The disaster was completed as the Muslims fell back across broken country and were trapped and slaughtered at a great ravine or ditch the Arabic sources call al-Khandaq — the "Alhandega" of the Christian accounts. Abd al-Rahman III escaped only with difficulty, abandoning his camp and, reputedly, a fine Qur\'an and his armour; the caliph, humiliated, later had a number of his own officers who had failed executed. The size of both armies is unknowable — the sources trade in tens of thousands — but the scale of the Córdoban defeat is not in doubt.',
  aftermath: 'The victory was the summit of Ramiro II\'s reign and of tenth-century Leonese power. The Duero frontier was secured and Christian repopulation of the borderlands pushed on. For Abd al-Rahman III it was the one great military catastrophe of a long and otherwise triumphant reign; he never again took the field in person, directing later campaigns through his generals.',
  imageInfo: {
    caption: 'The Caliphate of Córdoba and the Christian realms of the north (map showing the caliphate\'s extent c. 1000), the frontier world in which Simancas was fought.',
    creator: 'Historical map, Wikimedia Commons',
    date: 'Map of the caliphate c. 1000 (context for the 939 battle)',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Caliphate_of_C%C3%B3rdoba_under_Almanzor_-_1000_CE.png',
    license: 'Creative Commons',
    note: 'A territorial map for context; it shows the caliphate slightly later, at its Almanzor-era height.'
  },
  contentSections: [
    { title: 'Overview', paragraphs: [
      'The Battle of Simancas was fought in August 939 near the fortress of Simancas on the Duero, between a Christian coalition led by Ramiro II of León and the great campaigning army of Abd al-Rahman III, the first Umayyad caliph of Córdoba. It ended in a heavy Córdoban defeat and a rout at the ravine of al-Khandaq during the retreat.',
      'The battle marked the high point of Leonese military power in the tenth century and inflicted on Abd al-Rahman III the only major personal defeat of his long reign. It secured the Duero frontier for the Christian kingdoms and confirmed Ramiro II\'s formidable reputation.'
    ]},
    { title: 'Background', paragraphs: [
      'The caliphate Abd al-Rahman III founded in 929 was the dominant power of the peninsula, but the northern kingdoms were growing more assertive. Ramiro II of León had already defeated Córdoban armies and advanced the frontier, provoking a major response from Córdoba.',
      'In 939 the caliph led a huge expedition north against León. Ramiro answered with a coalition drawing in the Castilians of Count Fernán González and the Pamplonese of García Sánchez I, and the two hosts converged near Simancas.'
    ]},
    { title: 'Forces and commanders', paragraphs: [
      'Ramiro II commanded the Christian coalition in person, supported by the ablest frontier lords of the north; the alliance of León, Castile and Pamplona was the kind of combined effort that Christian Iberia only occasionally managed. The caliphal army under Abd al-Rahman III was larger and lavishly equipped, the instrument of a state at its height.',
      'As so often for the period, the numbers are beyond recovery: the sources speak of tens of thousands on each side, figures that cannot be trusted. What is clear is that the caliph fielded the greater force and still lost.'
    ]},
    { title: 'The battle', paragraphs: [
      'A solar eclipse shortly before the campaign had unnerved the caliphal troops, and when the armies met near Simancas the great Córdoban host was broken in the fighting and thrown back. The retreat turned into catastrophe at the ravine the Arabic writers call al-Khandaq, where the fleeing army was trapped and cut to pieces.',
      'Abd al-Rahman III escaped only narrowly, leaving behind his camp and, tradition says, his gilded Qur\'an and armour. So shaken and shamed was the caliph that he had a number of his own commanders executed for the failure, and he never personally led an army again.'
    ]},
    { title: 'Aftermath', paragraphs: [
      'Simancas was the crowning victory of Ramiro II\'s reign. It stabilised the Duero frontier, encouraged the repopulation of the border zone, and marked the moment when Leonese power pressed hardest against Córdoba.',
      'For the caliphate the defeat was a serious but not fatal blow: Abd al-Rahman III\'s state remained the strongest in Iberia, and by the end of the century, under the general Almanzor, Córdoban armies would again devastate the Christian north. But the caliph\'s aura of invincibility had been broken at Simancas.'
    ]},
    { title: 'Historical significance', paragraphs: [
      'The battle stands as the outstanding Christian success of the tenth century and a reminder that the balance of the Reconquista swung back and forth. Neither side was a united bloc: the Christian victory depended on a fragile coalition of rival realms, and Córdoba\'s power would soon recover and strike back.',
      'It also shows the limits of the "unstoppable caliphate" image. Abd al-Rahman III was the greatest ruler of Umayyad al-Andalus, yet at Simancas his army was destroyed by a coalition of smaller northern kingdoms — a defeat serious enough that Córdoban tradition preferred to dwell on other campaigns.'
    ]}
  ],
  sources: [
    { title: 'Battle of Simancas', author: 'Wikipedia', type: 'reference', url: 'https://en.wikipedia.org/wiki/Battle_of_Simancas' },
    { title: 'Ibn Hayyan, al-Muqtabis', author: 'Andalusi chronicle (11th c.)', type: 'primary source', url: 'https://en.wikipedia.org/wiki/Ibn_Hayyan' }
  ],
  participants: [
    {
      side: 'Christian coalition',
      factions: [
        { name: 'Kingdom of León', title: 'Kingdom of León', type: 'location', slug: 'kingdom-of-leon' },
        { name: 'County of Castile', title: 'County of Castile' },
        { name: 'Kingdom of Pamplona', title: 'Kingdom of Pamplona' }
      ],
      leaders: [ { name: 'Ramiro II of León', title: 'Ramiro II of León', type: 'person', slug: 'ramiro-ii-of-leon' } ],
      strength: { display: 'A combined northern host; no reliable figure', confidence: 'debated', note: 'León, Castile and Pamplona combined; chronicle totals of tens of thousands are not credible.' }
    },
    {
      side: 'Caliphate of Córdoba',
      factions: [ { name: 'Caliphate of Córdoba', title: 'Caliphate of Córdoba', type: 'location', slug: 'caliphate-of-cordoba' } ],
      leaders: [ { name: 'Abd al-Rahman III', title: 'Abd al-Rahman III', type: 'person', slug: 'abd-al-rahman-iii' } ],
      strength: { display: 'The larger army; chronicle claims of tens of thousands are unreliable', confidence: 'chronicle-claim', note: 'The caliph\'s "Campaign of Omnipotence" was a major muster, but the figures cannot be trusted.' }
    }
  ],
  battleContinuity: {
    label: 'The decisive turning point that followed centuries later',
    battleSlug: 'battle-of-las-navas-de-tolosa',
    relationship: 'same-war',
    reason: 'Simancas was the high-water mark of tenth-century Christian arms against Córdoba; the same long struggle reached its decisive turn at Las Navas de Tolosa in 1212, when a Christian coalition broke Almohad power in the south.'
  },
  relatedEntries: {
    people: [
      per('ramiro-ii-of-leon', 'Ramiro II of León', 'Led the victorious coalition'),
      per('abd-al-rahman-iii', 'Abd al-Rahman III', 'The defeated caliph')
    ],
    locations: [
      loc('simancas', 'Simancas', 'Site of the battle'),
      loc('caliphate-of-cordoba', 'Caliphate of Córdoba', 'The defeated power'),
      loc('kingdom-of-leon', 'Kingdom of León', 'The victorious realm')
    ]
  }
}

// ---------------------------------------------------------------- PERSON: Ramiro II
const ramiro = {
  id: 'ramiro-ii-of-leon', type: 'person', name: 'Ramiro II of León',
  aliases: ['Ramiro II', 'Ramiro the Devil', 'Ramiro el Diablo'],
  born: 'c. 900', died: '951', deathAge: 'about 51', restingPlace: 'León',
  birth: { date: 'c. 900', place: 'Kingdom of León' },
  death: { date: '5 January 951', place: 'León' },
  location: 'Kingdom of León, Iberia',
  image: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Ramiro2Leon.jpg',
  title: 'king of León', isRuler: true,
  roles: ['King of León', 'Victor of the Battle of Simancas'],
  epithets: [ { name: 'the Devil', type: 'hostile epithet', note: 'Called "el Diablo" by his Muslim adversaries for his ferocity in war.' } ],
  summary: 'Ramiro II was the warrior-king of León whose victory at Simancas in 939 shattered a caliphal army and marked the height of tenth-century Leonese power.',
  details: 'Ramiro seized the throne of León in 931 by deposing his brother Alfonso IV, and reigned until 951 as one of the most aggressive Christian rulers of the age, feared by his Muslim enemies as "the Devil".',
  overview: 'Among the early kings of León, Ramiro II stands out as a soldier: a ruler remembered chiefly for beating Córdoba in the field at a time when the caliphate was the strongest power in Iberia.',
  quickFacts: { realm: 'Kingdom of León', dynasty: 'House of Asturias', culture: 'Leonese', knownFor: 'Victory over Abd al-Rahman III at Simancas (939)' },
  contentSections: [
    { title: 'Overview', paragraphs: [
      'Ramiro II of León ruled from 931 to 951 and was the dominant Christian war-leader of his generation. His great victory at Simancas in 939, over the campaigning army of Caliph Abd al-Rahman III, was the outstanding Christian success of the tenth century.',
      'He came to the throne by force, expanded the Leonese frontier toward the Duero, and left his Muslim opponents with a lasting dread of his name. His reign marks the moment when León pressed hardest against the power of Córdoba.'
    ]},
    { title: 'Reign and wars', paragraphs: [
      'Ramiro took the crown in 931 after deposing and blinding his brother Alfonso IV, "the Monk", who had tried to reclaim it. As king he waged relentless war on the southern frontier, winning at Osma in 933 and, above all, at Simancas and the ravine of al-Khandaq in 939, where the caliph\'s army was destroyed.',
      'He worked with the frontier lords of Castile and the kings of Pamplona, though these alliances were uneasy — Count Fernán González of Castile was as much a rival as a partner. Ramiro pushed forward the repopulation of the borderlands and died in 951, leaving the throne to his son Ordoño III.'
    ]},
    { title: 'Character and Personality', paragraphs: [
      'The Ramiro of the sources is a hard and formidable man, a king who took his crown by deposing a brother and who fought the caliphate with a relentlessness that earned him the byname "the Devil" from his Muslim enemies. That name, hostile in origin, is itself a measure of the fear he inspired.',
      'He was evidently a gifted battlefield commander and a determined frontier-builder, but also a ruler of his violent age, willing to blind a rival and to execute failure. The admiring Christian and dismayed Muslim accounts agree on his effectiveness even where they differ on everything else.'
    ]}
  ],
  keyAchievements: [
    'Seized the throne of León in 931',
    'Won the Battle of Simancas over Abd al-Rahman III (939)',
    'Advanced and repopulated the Duero frontier'
  ],
  timeline: [
    { date: 'c. 900', title: 'Born', description: 'Born into the Leonese royal house.' },
    { date: '931', title: 'Became king', description: 'Took the throne of León, deposing his brother Alfonso IV.' },
    { date: '933', title: 'Victory at Osma', description: 'Defeated a Córdoban army at Osma.' },
    { date: '939', title: 'Battle of Simancas', description: 'Crushed Abd al-Rahman III\'s great army at Simancas and al-Khandaq.' },
    { date: '951', title: 'Died', description: 'Died at León; succeeded by his son Ordoño III.' }
  ],
  succession: {
    office: 'King of León',
    predecessor: { displayName: 'Alfonso IV of León', note: 'His brother, whom he deposed and blinded.' },
    successor: { displayName: 'Ordoño III of León', note: 'His son.' }
  },
  imageInfo: {
    caption: 'Ramiro II of León in a medieval depiction; his victory at Simancas made him the leading Christian war-king of the tenth century.',
    creator: 'Medieval depiction, Wikimedia Commons',
    date: 'Medieval / later depiction',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Ramiro2Leon.jpg',
    license: 'Public domain',
    note: 'No contemporary portrait survives; this is a later royal image.'
  },
  sources: [
    { title: 'Ramiro II of León', author: 'Wikipedia', type: 'reference', url: 'https://en.wikipedia.org/wiki/Ramiro_II_of_Le%C3%B3n' }
  ],
  relatedEntries: {
    events: [ evt('battle-of-simancas', 'Battle of Simancas', 'His crowning victory') ],
    locations: [ loc('kingdom-of-leon', 'Kingdom of León', 'His realm'), loc('simancas', 'Simancas', 'Site of his great victory') ],
    houses: [ hse('house-of-asturias', 'House of Asturias', 'The Astur-Leonese line he belonged to') ]
  }
}

// ---------------------------------------------------------------- PERSON: Abd al-Rahman III
const abd = {
  id: 'abd-al-rahman-iii', type: 'person', name: 'Abd al-Rahman III',
  aliases: ['Abd ar-Rahman III', 'Abd al-Rahman al-Nasir', 'al-Nasir li-Din Allah'],
  born: '890', died: '961', deathAge: 'about 71', restingPlace: 'Córdoba',
  birth: { date: '11 January 890', place: 'Córdoba' },
  death: { date: '15 October 961', place: 'Córdoba' },
  location: 'Córdoba, al-Andalus',
  image: fp('Abd%20al%20Rahman%20III.jpg'),
  title: 'Caliph of Córdoba', isRuler: true,
  roles: ['Emir of Córdoba', 'First Caliph of Córdoba'],
  epithets: [ { name: 'al-Nasir', type: 'honorific', note: 'His caliphal title "al-Nasir li-Din Allah", "Defender of God\'s Religion".' } ],
  summary: 'Abd al-Rahman III was the greatest ruler of Umayyad al-Andalus, who reunited the fractured emirate, proclaimed himself caliph in 929, and raised Córdoba to the height of its power — though his army was famously beaten at Simancas.',
  details: 'Ruling from 912 to 961, Abd al-Rahman III restored and expanded the authority of Córdoba, declared the Caliphate of Córdoba in 929, and built the palace-city of Medina Azahara. Simancas in 939 was the one great defeat of his reign.',
  overview: 'Abd al-Rahman III turned a crumbling emirate into the most powerful and cultured state in western Europe, and his fifty-year reign defines the golden age of al-Andalus.',
  quickFacts: { realm: 'Caliphate of Córdoba', dynasty: 'Umayyad dynasty (Córdoba)', culture: 'Andalusi', knownFor: 'Proclaiming the Caliphate of Córdoba; the golden age of al-Andalus' },
  contentSections: [
    { title: 'Overview', paragraphs: [
      'Abd al-Rahman III ruled Córdoba from 912 to 961, first as emir and, from 929, as the first caliph of al-Andalus. He inherited a state fragmenting into rebellion and rebuilt it into the dominant power of the Iberian Peninsula and one of the richest in Europe.',
      'His reign is remembered as the golden age of al-Andalus — an era of expanding authority, diplomacy with Byzantium and the Christian kingdoms, and the building of the palace-city of Medina Azahara. Its one great military scar was the defeat at Simancas in 939.'
    ]},
    { title: 'Emir, caliph and al-Andalus', paragraphs: [
      'Coming to power in 912 as a young emir, Abd al-Rahman III spent decades subduing rebels and rival lords across al-Andalus, restoring Córdoban control province by province. In 929, at the height of his authority and in rivalry with the Fatimids of North Africa and the Abbasids of Baghdad, he took the title of caliph, proclaiming the independent Caliphate of Córdoba.',
      'Under him Córdoba became a great centre of administration, learning and trade, and he pressed the frontier war against the Christian north. The disaster at Simancas in 939 checked that expansion and so shook him that he never led an army in person again, but his state remained supreme until his death in 961, when he was succeeded by his son al-Hakam II.'
    ]},
    { title: 'Character and Personality', paragraphs: [
      'Abd al-Rahman III emerges from the sources as a patient, calculating statesman rather than a battlefield adventurer: a ruler who spent twenty years methodically reassembling a broken realm before claiming its highest title. He cultivated an image of magnificence — the palace-city, the receptions of foreign envoys — as an instrument of authority.',
      'The reaction to Simancas reveals a harder and prouder side: humiliated, he had commanders who failed him executed and withdrew from personal command, governing the wars thereafter from Córdoba. Contemporaries across the religious divide acknowledged his stature, and later Andalusi memory made his reign the standard against which decline was measured.'
    ]}
  ],
  keyAchievements: [
    'Reunified the fractured emirate of Córdoba',
    'Proclaimed the Caliphate of Córdoba in 929',
    'Built Medina Azahara and presided over the golden age of al-Andalus'
  ],
  timeline: [
    { date: '890', title: 'Born', description: 'Born at Córdoba into the Umayyad house.' },
    { date: '912', title: 'Became emir', description: 'Succeeded as emir of Córdoba and began restoring its authority.' },
    { date: '929', title: 'Proclaimed caliph', description: 'Declared the Caliphate of Córdoba and took the title al-Nasir.' },
    { date: '939', title: 'Battle of Simancas', description: 'His great army was destroyed by Ramiro II of León; he never led an army again.' },
    { date: '961', title: 'Died', description: 'Died at Córdoba; succeeded by his son al-Hakam II.' }
  ],
  succession: {
    office: 'Caliph of Córdoba',
    predecessor: { displayName: 'None — first caliph of Córdoba', note: 'He proclaimed the caliphate in 929; as emir he had succeeded his grandfather Abdullah.' },
    successor: { displayName: 'al-Hakam II', note: 'His son.' }
  },
  imageInfo: {
    caption: '"Abd al-Rahman III Receiving the Ambassador" by Dionís Baixeras (1885), depicting the caliph\'s court at Córdoba.',
    creator: 'Dionís Baixeras Verdaguer',
    date: '1885 (19th-century painting)',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Abd_al_Rahman_III.jpg',
    license: 'Public domain',
    note: 'A 19th-century imagining of the caliph\'s court, not a contemporary likeness.'
  },
  sources: [
    { title: 'Abd al-Rahman III', author: 'Wikipedia', type: 'reference', url: 'https://en.wikipedia.org/wiki/Abd_al-Rahman_III' }
  ],
  relatedEntries: {
    events: [ evt('battle-of-simancas', 'Battle of Simancas', 'His one great defeat') ],
    locations: [
      loc('caliphate-of-cordoba', 'Caliphate of Córdoba', 'The caliphate he founded'),
      loc('al-andalus', 'al-Andalus', 'The land he ruled')
    ]
  }
}

// ---------------------------------------------------------------- LOCATION: Caliphate of Córdoba
const caliphate = {
  id: 'caliphate-of-cordoba', type: 'location', locationType: 'caliphate', name: 'Caliphate of Córdoba',
  aliases: ['Córdoban Caliphate', 'Caliphate of Cordoba', 'Umayyad Caliphate of Córdoba'],
  year: '929–1031', image: fp('C%C3%B3rdoba%20-%20Mezquita-Catedral%20-%20Interior%20-%2001.jpg'),
  summary: 'The Umayyad caliphate of al-Andalus, proclaimed by Abd al-Rahman III at Córdoba in 929 and the dominant power of tenth-century Iberia until it fragmented into the taifa kingdoms after 1031.',
  overview: 'The Caliphate of Córdoba was the height of Muslim political power in Iberia — a wealthy, centralised state ruling most of the peninsula from its capital at Córdoba.',
  knownFor: 'The golden age of al-Andalus; the Great Mosque of Córdoba and Medina Azahara',
  contentSections: [
    { title: 'Overview', paragraphs: [
      'The Caliphate of Córdoba was declared by Abd al-Rahman III in 929, when the Umayyad ruler of al-Andalus, until then styled emir, claimed the title of caliph in his own right. For a century it was the strongest and most sophisticated state in western Europe, ruling most of the Iberian Peninsula from Córdoba.',
      'It should not be confused with the earlier Umayyad Caliphate of Damascus, from whose overthrown dynasty its founders descended. The Córdoban caliphate was a distinct, Iberian state, born of the Umayyad survival in the far west after 750.'
    ]},
    { title: 'Height and collapse', paragraphs: [
      'Under Abd al-Rahman III and his son al-Hakam II the caliphate flourished as a centre of learning, art and commerce, and the palace-city of Medina Azahara and the expanded Great Mosque of Córdoba proclaimed its magnificence. Late in the tenth century the chamberlain Almanzor seized effective power and led devastating raids against the Christian north.',
      'After Almanzor\'s death the state fell into civil war (the fitna), and in 1031 the caliphate was abolished. Al-Andalus splintered into the taifa kingdoms — the small, competing Muslim states whose weakness would open the way for Christian expansion.'
    ]}
  ],
  timeline: [
    { date: '929', title: 'Caliphate proclaimed', description: 'Abd al-Rahman III takes the title of caliph at Córdoba.' },
    { date: '939', title: 'Battle of Simancas', description: 'The caliphal army is defeated by Ramiro II of León.' },
    { date: '1031', title: 'Abolished', description: 'The caliphate ends and al-Andalus fragments into taifa kingdoms.' }
  ],
  imageInfo: {
    caption: 'The hypostyle hall of the Great Mosque of Córdoba, the supreme monument of the Caliphate of Córdoba.',
    creator: 'Photograph, Wikimedia Commons',
    date: 'Mosque begun 785, expanded under the caliphate',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:C%C3%B3rdoba_-_Mezquita-Catedral_-_Interior_-_01.jpg',
    license: 'Creative Commons',
    note: 'The mosque\'s famous arcades, greatly enlarged during the caliphate.'
  },
  sources: [
    { title: 'Caliphate of Córdoba', author: 'Wikipedia', type: 'reference', url: 'https://en.wikipedia.org/wiki/Caliphate_of_C%C3%B3rdoba' }
  ],
  relatedEntries: {
    people: [ per('abd-al-rahman-iii', 'Abd al-Rahman III', 'Its founder and greatest caliph') ],
    events: [ evt('battle-of-simancas', 'Battle of Simancas', 'A rare defeat of the caliphal army') ],
    locations: [ loc('al-andalus', 'al-Andalus', 'The Muslim Iberia it ruled') ]
  }
}

// ---------------------------------------------------------------- LOCATION: Simancas
const simancas = {
  id: 'simancas', type: 'location', locationType: 'fortress', name: 'Simancas',
  aliases: ['Septimanca'],
  year: '10th century', image: fp('Castillo%20de%20Simancas%202017.jpg'),
  summary: 'A fortress town on the Duero near Valladolid, site of Ramiro II\'s great victory over Abd al-Rahman III in 939 and, much later, the archive of the Spanish crown.',
  overview: 'Simancas guarded a crossing of the Duero on the tenth-century frontier between León and al-Andalus, and its name is bound to the battle fought there in 939.',
  knownFor: 'The Battle of Simancas (939) and the later royal Archivo General de Simancas',
  contentSections: [
    { title: 'Overview', paragraphs: [
      'Simancas — the Roman Septimanca — is a fortified town on the river Duero near Valladolid, on what in the tenth century was the tense frontier between the Kingdom of León and the Caliphate of Córdoba. Its strategic crossing made it a natural point of concentration and conflict.',
      'The town is remembered above all for the battle of 939, in which Ramiro II of León and his allies destroyed the campaigning army of Abd al-Rahman III nearby, one of the great Christian victories of the age.'
    ]},
    { title: 'The castle and archive', paragraphs: [
      'The medieval castle of Simancas, rebuilt in later centuries, still crowns the town. In the sixteenth century it was chosen to hold the central records of the Spanish monarchy, and the Archivo General de Simancas remains one of the great state archives of Europe.',
      'That later role has kept the name Simancas famous far beyond the battle, but for the history of the Reconquista it is the fighting of 939 on the Duero that matters.'
    ]}
  ],
  timeline: [
    { date: '939', title: 'Battle of Simancas', description: 'Ramiro II defeats Abd al-Rahman III near the town.' }
  ],
  imageInfo: {
    caption: 'The castle of Simancas above the town on the Duero, near the site of the 939 battle.',
    creator: 'Photograph, Wikimedia Commons',
    date: 'Medieval castle (later rebuilt); photograph 2017',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Castillo_de_Simancas_2017.jpg',
    license: 'Creative Commons',
    note: 'The surviving fortress marks the frontier stronghold around which the battle was fought.'
  },
  sources: [
    { title: 'Simancas', author: 'Wikipedia', type: 'reference', url: 'https://en.wikipedia.org/wiki/Simancas' }
  ],
  relatedEntries: {
    events: [ evt('battle-of-simancas', 'Battle of Simancas', 'Fought near the town') ],
    people: [ per('ramiro-ii-of-leon', 'Ramiro II of León', 'Victor here in 939') ],
    locations: [ loc('kingdom-of-leon', 'Kingdom of León', 'The realm it defended') ]
  }
}

const results = []
results.push(['event', battle.name, upsert(data.events, battle)])
results.push(['person', ramiro.name, upsert(data.characters, ramiro)])
results.push(['person', abd.name, upsert(data.characters, abd)])
results.push(['location', caliphate.name, upsert(data.locations, caliphate)])
results.push(['location', simancas.name, upsert(data.locations, simancas)])

// Rewire Covadonga's continuity forward to Simancas (the next major Reconquista
// battle now in the archive), and add Simancas as a related event on it.
const cova = data.events.find(e => e.id === 'battle-of-covadonga')
if (cova) {
  cova.battleContinuity = {
    label: 'The first great field victory that followed',
    battleSlug: 'battle-of-simancas',
    relationship: 'chronological-follow-up',
    reason: 'Covadonga became the mythic beginning of Christian resistance; more than two centuries later, Ramiro II\'s victory at Simancas in 939 was the first great Christian battlefield triumph over the power of Córdoba.'
  }
  cova.relatedEntries = cova.relatedEntries || {}
  const evs = cova.relatedEntries.events = cova.relatedEntries.events || []
  if (!evs.some(e => e.slug === 'battle-of-simancas')) evs.push(evt('battle-of-simancas', 'Battle of Simancas', 'The next great Christian victory'))
  results.push(['rewire', 'Covadonga → Simancas', 'updated'])
}

// Add Ramiro II to the House of Asturias notable members (bidirectional).
const house = data.houses.find(h => h.id === 'house-of-asturias')
if (house && !house.notableMembers.some(m => m.personSlug === 'ramiro-ii-of-leon')) {
  house.notableMembers.push({ personSlug: 'ramiro-ii-of-leon', displayName: 'Ramiro II of León', note: 'Warrior-king; victor of Simancas (939).' })
  house.relatedEntries = house.relatedEntries || {}
  const ppl = house.relatedEntries.people = house.relatedEntries.people || []
  if (!ppl.some(p => p.slug === 'ramiro-ii-of-leon')) ppl.push(per('ramiro-ii-of-leon', 'Ramiro II of León', 'Leonese king of the line'))
  results.push(['backlink', 'House of Asturias → Ramiro II', 'added'])
}

fs.writeFileSync(dataPath, JSON.stringify(data, null, 2))
for (const [type, name, action] of results) console.log(`${action.padEnd(8)} ${type.padEnd(9)} ${name}`)
console.log('\nDone. Run gen-entity-links + gates.')
