/**
 * Closes two segments of the English royal line. The 10th-century House of Wessex
 * between the existing anchors Edward the Elder and Edmund Ironside (Æthelstan,
 * Edmund I, Eadred, Eadwig, Edgar, Edward the Martyr, Æthelred the Unready), and
 * the Norman "Anarchy" between William II and Henry II (Henry I, Stephen). Closes
 * four open endpoints; both segments link continuously at each end. Idempotent.
 */
import fs from 'node:fs'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dataPath = path.join(__dirname, '../server/data/history.json')
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'))

const ENG = { title: 'Kingdom of England', type: 'location', slug: 'kingdom-of-england' }
const per = (slug, title, label) => ({ title, type: 'person', slug, label })
const src = (title, url) => ({ title, author: 'Encyclopaedia Britannica', type: 'encyclopedia', url })
const genealogy = 'From a genealogical chronicle roll of the kings of England (British Library, MS Royal 14 B VI), an early-fourteenth-century image, not a likeness from life.'

const people = [
  // ── ÆTHELSTAN ─────────────────────────────────────────────────────────────────
  {
    id: 'aethelstan', type: 'character', name: 'Æthelstan', born: 894, died: 939,
    deathAge: 'about 45', causeOfDeath: 'Natural causes', restingPlace: 'Malmesbury Abbey',
    location: 'Kingdom of England', aliases: ['Athelstan', 'Æthelstan the Glorious', 'First King of the English'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/68/Athelstan_%28cropped%29.jpg',
    summary: 'First king of all England (924–939), grandson of Alfred the Great, who conquered Northumbria and won the decisive Battle of Brunanburh to forge a single English kingdom.',
    title: 'King of the English', roles: ['King of the English'],
    birth: { date: 'c. 894', place: { name: 'Wessex' }, note: 'Son of Edward the Elder and grandson of Alfred the Great.' },
    death: { date: '27 October 939', place: { name: 'Gloucester' }, circumstance: 'Died in 939 at the height of his power, unmarried and childless; succeeded by his half-brother Edmund.' },
    quickFacts: { realm: 'Kingdom of England', dynasty: 'House of Wessex', culture: 'Anglo-Saxon', knownFor: 'unifying England and his victory at the Battle of Brunanburh' },
    imageInfo: { caption: 'King Æthelstan presenting a book to St Cuthbert, c. 934 — the earliest surviving portrait of an English king.', creator: 'Unknown (manuscript of Bede\'s Life of St Cuthbert)', date: 'c. 934', source: 'Wikimedia Commons', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Athelstan_(cropped).jpg', license: 'Public domain', note: 'A near-contemporary manuscript image, the oldest surviving portrait of an English monarch.' },
    overview: [
      'Æthelstan, grandson of Alfred the Great, was king of the Anglo-Saxons and then of the English from 924 to 939, and is regarded as the first king to rule a united England. Building on his father Edward the Elder\'s reconquests, he took control of Viking-held Northumbria in 927 and received the submission of the Welsh and Scottish rulers, styling himself king of all Britain.',
      'His supremacy was challenged by a great coalition of Scots, Strathclyde Britons, and the Norse of Dublin, whom he crushed in 937 at the Battle of Brunanburh, one of the most celebrated battles in early English history. A learned, pious, and diplomatically ambitious king, whose sisters married into the royal houses of Europe, he died in 939 having forged the kingdom of England.'
    ],
    greatestFeats: ['First king of a united England', 'Conquered Viking Northumbria', 'Won the Battle of Brunanburh (937)'],
    contentSections: [
      { title: 'Overview', paragraphs: [
        'Æthelstan, grandson of Alfred the Great, was king of the Anglo-Saxons and then of the English from 924 to 939, and is regarded as the first king to rule a united England. Building on his father Edward the Elder\'s reconquests, he took control of Viking-held Northumbria in 927 and received the submission of the Welsh and Scottish rulers, styling himself king of all Britain.',
        'His supremacy was challenged by a great coalition of Scots, Strathclyde Britons, and the Norse of Dublin, whom he crushed in 937 at the Battle of Brunanburh, one of the most celebrated battles in early English history. A learned, pious, and diplomatically ambitious king, whose sisters married into the royal houses of Europe, he died in 939 having forged the kingdom of England.'
      ]},
      { title: 'Birth and early life', paragraphs: [
        'Æthelstan was born about 894, the eldest son of Edward the Elder and grandson of Alfred the Great. Tradition held that the aged Alfred himself invested the boy with a scarlet cloak, a belt, and a sword — a token, later writers thought, of the greatness to come. He was raised partly at the Mercian court of his aunt Æthelflæd, the "Lady of the Mercians", which gave him a strong base of support.',
        'On his father\'s death in 924 the succession was briefly disputed, but Æthelstan was accepted first in Mercia and then across the whole English realm his father and grandfather had been building.'
      ]},
      { title: 'Character and Personality', paragraphs: [
        'Æthelstan emerges from the sources as a figure of unusual grandeur: a warrior-king of proven courage, but also a cultivated, devout, and cosmopolitan ruler who saw himself as more than a mere king of the West Saxons. He collected relics and books, patronised the Church lavishly, and gathered scholars to a court of European reach.',
        'His diplomacy reveals a ruler with a continental vision. He married his half-sisters to some of the greatest rulers of the age — among them Otto the Great of Germany and Hugh, duke of the Franks — and fostered foreign princes at his court. Pious, generous, and imperious, he cultivated an image of imperial kingship over the whole island of Britain, and largely made it real. That he never married, and left no son, only sharpened the sense that he was a king apart.'
      ]},
      { title: 'The making of England', paragraphs: [
        'Æthelstan\'s central achievement was to complete the unification of England. In 927 he seized York and brought the Viking kingdom of Northumbria under his rule, becoming the first king to govern all the English. At Eamont that year the kings of the Scots, of Strathclyde, and of the Welsh acknowledged his overlordship, and he took to styling himself king of all Britain on his coins and charters.',
        'His dominance provoked a reaction. In 937 a grand alliance of Constantine of Scotland, the Strathclyde Britons, and Olaf Guthfrithson\'s Norse of Dublin invaded, and Æthelstan met and destroyed them at the Battle of Brunanburh — a victory so total that it was sung as the salvation of England in the Anglo-Saxon Chronicle, and secured the unity of the kingdom.'
      ]},
      { title: 'Death', paragraphs: [
        'Æthelstan died on 27 October 939 at Gloucester, at the height of his prestige, and was buried at Malmesbury Abbey, which he had richly endowed. Having never married, he was succeeded by his young half-brother Edmund, who had fought beside him at Brunanburh.'
      ]},
      { title: 'Legacy', paragraphs: [
        'Æthelstan is remembered as the first king of a united England and one of the greatest of the Anglo-Saxon monarchs — a conqueror, lawgiver, and patron whose reign gave the new kingdom its shape and its place among the powers of Europe. Though the Viking north would rebel again after his death, the England he forged endured, and later ages looked back to Brunanburh and to Æthelstan as the true birth of the English realm.'
      ]}
    ],
    keyAchievements: [
      { title: 'First king of all England', description: 'United the English kingdoms and took control of Viking Northumbria in 927.' },
      { title: 'Victory at Brunanburh, 937', description: 'Destroyed a great coalition of Scots, Britons, and Norse, securing English unity.' },
      { title: 'A king of European stature', description: 'Married his sisters into Europe\'s royal houses and made his court a centre of learning.' }
    ],
    timeline: [
      { date: 'c. 894', title: 'Born', description: 'Born a son of Edward the Elder and grandson of Alfred the Great.', links: [per('alfred-the-great', 'Alfred the Great', 'His grandfather')] },
      { date: '924', title: 'Becomes king', description: 'Succeeds his father Edward the Elder, accepted in Mercia and then all England.', links: [per('edward-the-elder', 'Edward the Elder', 'His father and predecessor'), ENG] },
      { date: '927', title: 'Conquers Northumbria', description: 'Seizes York and becomes the first king to rule all the English.' },
      { date: '937', title: 'Wins the Battle of Brunanburh', description: 'Crushes a coalition of Scots, Britons, and Norse in a decisive victory.' },
      { date: '27 October 939', title: 'Dies', description: 'Dies at Gloucester, childless; succeeded by his half-brother Edmund.', links: [per('edmund-i-of-england', 'Edmund I of England', 'His half-brother and successor')] }
    ],
    relatedEntries: {
      locations: [ { ...ENG, label: 'The kingdom he forged' } ],
      people: [ per('edward-the-elder', 'Edward the Elder', 'His father and predecessor'), per('edmund-i-of-england', 'Edmund I of England', 'His half-brother and successor'), per('alfred-the-great', 'Alfred the Great', 'His grandfather') ],
      events: []
    },
    sources: [ src('Athelstan | king of England', 'https://www.britannica.com/biography/Athelstan'), src('Anglo-Saxon England', 'https://www.britannica.com/place/United-Kingdom/Anglo-Saxon-England') ],
    isRuler: true,
    succession: { office: 'King of the English',
      predecessor: { personSlug: 'edward-the-elder', displayName: 'Edward the Elder', note: 'His father, who had reconquered the Danelaw south of the Humber.' },
      successor: { personSlug: 'edmund-i-of-england', displayName: 'Edmund I of England', note: 'His half-brother, who had fought beside him at Brunanburh.' } }
  },

  // ── EDMUND I ──────────────────────────────────────────────────────────────────
  {
    id: 'edmund-i-of-england', type: 'character', name: 'Edmund I of England', born: 921, died: 946,
    deathAge: 'about 25', causeOfDeath: 'Stabbed at a feast', restingPlace: 'Glastonbury Abbey',
    location: 'Kingdom of England', aliases: ['Edmund the Elder', 'Edmund the Magnificent', 'Edmund the Deed-doer'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/a3/Edmund_I_-_MS_Royal_14_B_VI.jpg',
    summary: 'King of England (939–946), half-brother of Æthelstan, who reconquered the Norse-held north and revived English monasticism before being killed at a feast at twenty-five.',
    title: 'King of the English', roles: ['King of the English'],
    birth: { date: '921', place: { name: 'Wessex' }, note: 'Son of Edward the Elder; half-brother of Æthelstan.' },
    death: { date: '26 May 946', place: { name: 'Pucklechurch' }, circumstance: 'Stabbed to death at a royal feast at Pucklechurch while, by tradition, seizing an exiled outlaw.' },
    quickFacts: { realm: 'Kingdom of England', dynasty: 'House of Wessex', culture: 'Anglo-Saxon', knownFor: 'reconquering the north and his violent early death' },
    imageInfo: { caption: 'King Edmund I of England in a genealogical chronicle of the English kings.', creator: 'Unknown (BL MS Royal 14 B VI)', date: 'Early 14th century', source: 'Wikimedia Commons', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Edmund_I_-_MS_Royal_14_B_VI.jpg', license: 'Public domain', note: genealogy },
    overview: [
      'Edmund I, sometimes called the Magnificent, was king of England from 939 to 946. A half-brother of Æthelstan, he came to the throne at eighteen and at once faced the unravelling of his brother\'s conquests, as the Norse of Dublin reoccupied York and the north.',
      'Edmund fought back with energy, recovering the Five Boroughs of the Danelaw and finally reasserting English control over Northumbria. A patron of the monastic revival then beginning under Dunstan, whom he installed at Glastonbury, he seemed set for a great reign when he was suddenly killed in a scuffle at a feast in 946, still only in his mid-twenties.'
    ],
    greatestFeats: ['King of England', 'Reconquered the Danelaw and the north', 'Patron of the monastic revival under Dunstan'],
    contentSections: [
      { title: 'Overview', paragraphs: [
        'Edmund I, sometimes called the Magnificent, was king of England from 939 to 946. A half-brother of Æthelstan, he came to the throne at eighteen and at once faced the unravelling of his brother\'s conquests, as the Norse of Dublin reoccupied York and the north.',
        'Edmund fought back with energy, recovering the Five Boroughs of the Danelaw and finally reasserting English control over Northumbria. A patron of the monastic revival then beginning under Dunstan, whom he installed at Glastonbury, he seemed set for a great reign when he was suddenly killed in a scuffle at a feast in 946, still only in his mid-twenties.'
      ]},
      { title: 'Birth and early life', paragraphs: [
        'Edmund was born in 921, a son of Edward the Elder by a later marriage and thus a half-brother of Æthelstan, at whose court he was raised. He fought at his brother\'s side at the Battle of Brunanburh in 937, though still only about sixteen, and on Æthelstan\'s death in 939 he succeeded to the throne.',
        'He inherited a kingdom whose hard-won unity was immediately tested, as the Viking leader Olaf Guthfrithson swept back into York and overran the north-east Midlands.'
      ]},
      { title: 'Character and Personality', paragraphs: [
        'Edmund is remembered as a vigorous, forceful young king — a fighter who recovered by hard campaigning what had been lost at the start of his reign, and who threw royal support behind the reform of the English Church. The bynames later attached to him, "the Magnificent" and "the Deed-doer", capture the impression of restless energy his short reign left.',
        'He also showed a capacity for the politics of mercy and reform. He spared and reconciled defeated enemies, sponsored the young Dunstan and the beginnings of the great monastic revival, and issued law-codes concerned with reducing blood-feud and protecting the Church. The abrupt violence of his death — cut down in a brawl at his own feast — froze that promise, leaving the sense of a formidable reign broken off unfinished.'
      ]},
      { title: 'Reconquest and reform', paragraphs: [
        'Edmund\'s first years were spent recovering the north. After early setbacks he retook the Five Boroughs — Leicester, Nottingham, Derby, Lincoln, and Stamford — from the Norse in 942, a feat celebrated in a poem in the Anglo-Saxon Chronicle, and by 944 he had driven the Viking kings from York and restored English rule over Northumbria. He also campaigned into Strathclyde, which he ravaged and handed to the king of Scots in return for an alliance.',
        'At home he became a patron of Church reform, appointing Dunstan abbot of Glastonbury and supporting the monastic movement that would flower under his successors. His law-codes worked to curb the violence of the blood-feud and to strengthen public order.'
      ]},
      { title: 'Death', paragraphs: [
        'On 26 May 946, at a feast at Pucklechurch in Gloucestershire, Edmund was killed in a sudden affray — by tradition, while intervening to seize an exiled outlaw named Leofa who had returned to the hall. He was about twenty-five, and was buried at Glastonbury near his friend Dunstan. His young sons being infants, he was succeeded by his brother Eadred.'
      ]},
      { title: 'Legacy', paragraphs: [
        'Edmund I is remembered as a king of great early promise cut brutally short: the young warrior who saved his brother\'s united England by reconquering the north, and who set in motion the monastic revival that would define the tenth-century English Church. His sons Eadwig and Edgar would both later reign, and through Edgar his line would continue to the end of Anglo-Saxon England.'
      ]}
    ],
    keyAchievements: [
      { title: 'King of England, 939–946', description: 'Held together the united kingdom his brother had forged.' },
      { title: 'Reconquered the north', description: 'Recovered the Five Boroughs and Northumbria from the Norse by 944.' },
      { title: 'Patron of monastic reform', description: 'Installed Dunstan at Glastonbury, sponsoring the monastic revival.' }
    ],
    timeline: [
      { date: '921', title: 'Born', description: 'Born a son of Edward the Elder; half-brother of Æthelstan.' },
      { date: '937', title: 'Fights at Brunanburh', description: 'Fights beside Æthelstan in the great victory, though still a youth.' },
      { date: '939', title: 'Becomes King of England', description: 'Succeeds Æthelstan and at once faces the loss of the north.', links: [per('aethelstan', 'Æthelstan', 'His half-brother and predecessor'), ENG] },
      { date: '942–944', title: 'Reconquers the north', description: 'Retakes the Five Boroughs and Northumbria from the Norse.' },
      { date: '26 May 946', title: 'Killed at Pucklechurch', description: 'Stabbed at a royal feast; his brother Eadred succeeds.', links: [per('eadred-of-england', 'Eadred of England', 'His brother and successor')] }
    ],
    relatedEntries: {
      locations: [ { ...ENG, label: 'His kingdom' } ],
      people: [ per('aethelstan', 'Æthelstan', 'His half-brother and predecessor'), per('eadred-of-england', 'Eadred of England', 'His brother and successor') ],
      events: []
    },
    sources: [ src('Edmund I | king of England', 'https://www.britannica.com/biography/Edmund-I'), src('Anglo-Saxon England', 'https://www.britannica.com/place/United-Kingdom/Anglo-Saxon-England') ],
    isRuler: true,
    succession: { office: 'King of the English',
      predecessor: { personSlug: 'aethelstan', displayName: 'Æthelstan', note: 'His half-brother, the first king of all England, beside whom he had fought at Brunanburh.' },
      successor: { personSlug: 'eadred-of-england', displayName: 'Eadred of England', note: 'His brother, who succeeded because Edmund\'s own sons were still infants.' } }
  },

  // ── EADRED ────────────────────────────────────────────────────────────────────
  {
    id: 'eadred-of-england', type: 'character', name: 'Eadred of England', born: 923, died: 955,
    deathAge: 'about 32', causeOfDeath: 'Long illness', restingPlace: 'Old Minster, Winchester',
    location: 'Kingdom of England', aliases: ['Eadred', 'Edred'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/7/77/Eadred_-_MS_Royal_14_B_VI.jpg',
    summary: 'King of England (946–955), brother of Edmund I, who finally destroyed the Viking kingdom of York — expelling Eric Bloodaxe — despite chronic ill health.',
    title: 'King of the English', roles: ['King of the English'],
    birth: { date: 'c. 923', place: { name: 'Wessex' }, note: 'Youngest son of Edward the Elder; brother of Edmund I.' },
    death: { date: '23 November 955', place: { name: 'Frome' }, circumstance: 'Died in 955 after years of debilitating illness, unmarried and childless.' },
    quickFacts: { realm: 'Kingdom of England', dynasty: 'House of Wessex', culture: 'Anglo-Saxon', knownFor: 'ending the Viking kingdom of York by expelling Eric Bloodaxe' },
    imageInfo: { caption: 'King Eadred of England in a genealogical chronicle of the English kings.', creator: 'Unknown (BL MS Royal 14 B VI)', date: 'Early 14th century', source: 'Wikimedia Commons', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Eadred_-_MS_Royal_14_B_VI.jpg', license: 'Public domain', note: genealogy },
    overview: [
      'Eadred was king of England from 946 to 955, the youngest son of Edward the Elder and brother of Edmund I, whom he succeeded when Edmund\'s own sons were still children. Though dogged all his life by a wasting illness that left him barely able to eat, he proved a determined and successful king.',
      'His great achievement was to end, at last, the Viking kingdom of York. After years of revolt, and the dramatic intervention of the Norwegian adventurer Eric Bloodaxe, Eadred crushed Northumbrian resistance and in 954 drove out Eric — the last Scandinavian king of York — bringing the north permanently under the English crown.'
    ],
    greatestFeats: ['King of England', 'Ended the Viking kingdom of York', 'Expelled Eric Bloodaxe (954)'],
    contentSections: [
      { title: 'Overview', paragraphs: [
        'Eadred was king of England from 946 to 955, the youngest son of Edward the Elder and brother of Edmund I, whom he succeeded when Edmund\'s own sons were still children. Though dogged all his life by a wasting illness that left him barely able to eat, he proved a determined and successful king.',
        'His great achievement was to end, at last, the Viking kingdom of York. After years of revolt, and the dramatic intervention of the Norwegian adventurer Eric Bloodaxe, Eadred crushed Northumbrian resistance and in 954 drove out Eric — the last Scandinavian king of York — bringing the north permanently under the English crown.'
      ]},
      { title: 'Birth and early life', paragraphs: [
        'Eadred was born about 923, the youngest son of Edward the Elder by his third marriage. He came to the throne in 946 on the sudden murder of his brother Edmund, whose sons Eadwig and Edgar were too young to rule. He was closely supported throughout his reign by his mother, the dowager Eadgifu, and by Dunstan, who kept the royal treasure at Glastonbury.'
      ]},
      { title: 'Character and Personality', paragraphs: [
        'Eadred is remembered for the contrast between his frail body and his forceful will. The sources describe a king of persistent ill health — unable to swallow food properly, wasting and sickly — who nonetheless drove his campaigns in the north with unrelenting determination and personally led his armies.',
        'Pious and reliant on able advisers, especially Dunstan and his own mother, he governed through them without being dominated by them. His ferocity when crossed was real: when the Northumbrians broke faith with him he ravaged their land, and burned Ripon, before receiving their renewed submission. He appears as a sickly but iron-willed ruler who accomplished, in a short and painful life, the final subjection of Viking York that his more famous predecessors had left undone.'
      ]},
      { title: 'The end of Viking York', paragraphs: [
        'The dominant struggle of Eadred\'s reign was for Northumbria. The Northumbrians repeatedly repudiated English rule and took Scandinavian kings — first Olaf Sihtricson and then, most dramatically, the exiled Norwegian king Eric Bloodaxe. Eadred answered rebellion with devastating raids, and gradually wore down northern resistance.',
        'In 954 the Northumbrians finally expelled and killed Eric Bloodaxe, and submitted to Eadred. The kingdom of York, independent or Viking-ruled for generations, was extinguished, and Northumbria was absorbed into a single English kingdom — a settlement that, this time, held.'
      ]},
      { title: 'Death', paragraphs: [
        'Eadred\'s health, always poor, failed him young. He died on 23 November 955 at Frome, unmarried and without children, and was buried in the Old Minster at Winchester. He was succeeded by his nephew Eadwig, the elder son of Edmund I.'
      ]},
      { title: 'Legacy', paragraphs: [
        'Eadred is remembered as the king who completed the unification of England by finally ending the Viking kingdom of York. Frail and short-lived, he nonetheless secured the permanent incorporation of Northumbria into the English realm, so that the England forged by Æthelstan was, after him, no longer in doubt. His reign also entrenched the influence of Dunstan and the reforming churchmen who would dominate the age of his nephews.'
      ]}
    ],
    keyAchievements: [
      { title: 'King of England, 946–955', description: 'Ruled with determination despite lifelong illness.' },
      { title: 'Ended the kingdom of York', description: 'Subdued Northumbria and absorbed it permanently into England.' },
      { title: 'Expelled Eric Bloodaxe', description: 'Drove out the last Scandinavian king of York in 954.' }
    ],
    timeline: [
      { date: 'c. 923', title: 'Born', description: 'Born the youngest son of Edward the Elder.' },
      { date: '946', title: 'Becomes King of England', description: 'Succeeds his murdered brother Edmund, whose sons are too young to rule.', links: [per('edmund-i-of-england', 'Edmund I of England', 'His brother and predecessor'), ENG] },
      { date: '947–954', title: 'Struggle for Northumbria', description: 'Fights repeated northern revolts backed by Scandinavian kings.' },
      { date: '954', title: 'Expels Eric Bloodaxe', description: 'The Northumbrians drive out Eric Bloodaxe and submit; York is absorbed into England.' },
      { date: '23 November 955', title: 'Dies', description: 'Dies young of illness, childless; his nephew Eadwig succeeds.', links: [per('eadwig-of-england', 'Eadwig of England', 'His nephew and successor')] }
    ],
    relatedEntries: {
      locations: [ { ...ENG, label: 'His kingdom' } ],
      people: [ per('edmund-i-of-england', 'Edmund I of England', 'His brother and predecessor'), per('eadwig-of-england', 'Eadwig of England', 'His nephew and successor') ],
      events: []
    },
    sources: [ src('Eadred | king of England', 'https://www.britannica.com/biography/Eadred'), src('Anglo-Saxon England', 'https://www.britannica.com/place/United-Kingdom/Anglo-Saxon-England') ],
    isRuler: true,
    succession: { office: 'King of the English',
      predecessor: { personSlug: 'edmund-i-of-england', displayName: 'Edmund I of England', note: 'His brother, on whose murder Eadred took the throne over Edmund\'s infant sons.' },
      successor: { personSlug: 'eadwig-of-england', displayName: 'Eadwig of England', note: 'His nephew, the elder son of Edmund I, now come of age.' } }
  },

  // ── EADWIG ────────────────────────────────────────────────────────────────────
  {
    id: 'eadwig-of-england', type: 'character', name: 'Eadwig of England', born: 940, died: 959,
    deathAge: 'about 19', causeOfDeath: 'Unknown; died young', restingPlace: 'New Minster, Winchester',
    location: 'Kingdom of England', aliases: ['Eadwig All-Fair', 'Edwy'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/0a/Eadwig_-_MS_Royal_14_B_VI.jpg',
    summary: 'King of England (955–959), a teenage king whose quarrel with Dunstan and the loss of Mercia and Northumbria to his brother Edgar marked a short and troubled reign.',
    title: 'King of the English', roles: ['King of the English'],
    birth: { date: 'c. 940', place: { name: 'Wessex' }, note: 'Elder son of Edmund I; came to the throne as a teenager.' },
    death: { date: '1 October 959', place: { name: 'Winchester' }, circumstance: 'Died in 959 at about nineteen, after his kingdom had been split with his brother Edgar.' },
    quickFacts: { realm: 'Kingdom of England', dynasty: 'House of Wessex', culture: 'Anglo-Saxon', knownFor: 'his quarrel with Dunstan and the division of the kingdom' },
    imageInfo: { caption: 'King Eadwig of England in a genealogical chronicle of the English kings.', creator: 'Unknown (BL MS Royal 14 B VI)', date: 'Early 14th century', source: 'Wikimedia Commons', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Eadwig_-_MS_Royal_14_B_VI.jpg', license: 'Public domain', note: genealogy },
    overview: [
      'Eadwig, called "All-Fair" for his good looks, was king of England from 955 to 959. The elder son of Edmund I, he came to the throne as a boy of about fifteen and swiftly fell out with the most powerful churchman of the age, Dunstan, whom he drove into exile — a quarrel that shaped his hostile reputation in the monastic sources.',
      'His brief reign was marked by division. In 957 the Mercians and Northumbrians transferred their allegiance to his younger brother Edgar, splitting the kingdom in two, and Eadwig was left ruling only Wessex south of the Thames. He died in 959, still a teenager, and the whole realm passed to Edgar.'
    ],
    greatestFeats: ['King of England'],
    contentSections: [
      { title: 'Overview', paragraphs: [
        'Eadwig, called "All-Fair" for his good looks, was king of England from 955 to 959. The elder son of Edmund I, he came to the throne as a boy of about fifteen and swiftly fell out with the most powerful churchman of the age, Dunstan, whom he drove into exile — a quarrel that shaped his hostile reputation in the monastic sources.',
        'His brief reign was marked by division. In 957 the Mercians and Northumbrians transferred their allegiance to his younger brother Edgar, splitting the kingdom in two, and Eadwig was left ruling only Wessex south of the Thames. He died in 959, still a teenager, and the whole realm passed to Edgar.'
      ]},
      { title: 'Birth and early life', paragraphs: [
        'Eadwig was born about 940, the elder of the two sons of Edmund I. Because he and his brother Edgar had been infants when their father was murdered in 946, the throne had passed to their uncle Eadred; on Eadred\'s death in 955, Eadwig, now about fifteen, at last succeeded.',
        'His accession is famous chiefly for the scandalous story, told by his monastic enemies, of the day of his coronation feast, from which the young king slipped away to the company of a noblewoman and her daughter and had to be fetched back by Dunstan.'
      ]},
      { title: 'Character and Personality', paragraphs: [
        'Eadwig is one of the hardest Anglo-Saxon kings to judge fairly, because almost everything recorded of him was written by the monastic reformers he antagonised, above all the partisans of Dunstan. In their telling he is a wilful, pleasure-loving youth, ruled by a grasping faction of his wife\'s kin, who despoiled the Church and drove out its saints.',
        'A cooler reading allows for the ordinary difficulties of a boy-king surrounded by rival adult factions. His grants of land suggest a ruler energetically buying support, and his marriage to Ælfgifu tied him to one noble party against another. Whether genuinely dissolute or merely the loser of a factional struggle whose winners wrote the history, he remains fixed in tradition as the "All-Fair" young king who quarrelled with a saint.'
      ]},
      { title: 'A divided kingdom', paragraphs: [
        'Eadwig\'s reign quickly ran into trouble. His clash with Dunstan, whom he exiled and whose Glastonbury he stripped of treasure, alienated the powerful reforming party in the Church. His marriage to Ælfgifu was condemned by churchmen as being within the forbidden degrees of kinship and later annulled.',
        'In 957 the decisive blow fell: the Mercians and Northumbrians repudiated Eadwig and took his younger brother Edgar as their king, dividing the realm along the Thames. Eadwig kept Wessex, but the united monarchy of his uncles had, for the moment, come apart.'
      ]},
      { title: 'Death', paragraphs: [
        'Eadwig died on 1 October 959, at about nineteen, and was buried in the New Minster at Winchester. With no surviving children, he was succeeded across the whole reunited kingdom by his brother Edgar.'
      ]},
      { title: 'Legacy', paragraphs: [
        'Eadwig is remembered mainly as a cautionary figure in the story of the tenth-century Church — the young king whose feud with Dunstan and brief division of the kingdom form the dark prelude to the golden reign of his brother Edgar. His reign shows how quickly the new united monarchy could fracture along its old fault lines, and how completely the monastic reformers would shape the memory of a king who crossed them.'
      ]}
    ],
    keyAchievements: [
      { title: 'King of England, 955–959', description: 'Reigned as a teenager over a kingdom that split in his lifetime.' },
      { title: 'Ruled Wessex after the division', description: 'Retained the southern kingdom after Mercia and Northumbria chose Edgar.' }
    ],
    timeline: [
      { date: 'c. 940', title: 'Born', description: 'Born the elder son of Edmund I.' },
      { date: '955', title: 'Becomes King of England', description: 'Succeeds his uncle Eadred as a boy of about fifteen.', links: [per('eadred-of-england', 'Eadred of England', 'His uncle and predecessor'), ENG] },
      { date: '956', title: 'Quarrels with Dunstan', description: 'Drives the reforming abbot Dunstan into exile, alienating the Church.' },
      { date: '957', title: 'The kingdom divided', description: 'Mercia and Northumbria repudiate him for his brother Edgar; Eadwig keeps Wessex.' },
      { date: '1 October 959', title: 'Dies', description: 'Dies at about nineteen, childless; his brother Edgar reunites the realm.', links: [per('edgar-the-peaceful', 'Edgar the Peaceful', 'His brother and successor')] }
    ],
    relatedEntries: {
      locations: [ { ...ENG, label: 'His kingdom' } ],
      people: [ per('eadred-of-england', 'Eadred of England', 'His uncle and predecessor'), per('edgar-the-peaceful', 'Edgar the Peaceful', 'His brother and successor') ],
      events: []
    },
    sources: [ src('Eadwig | king of England', 'https://www.britannica.com/biography/Eadwig'), src('Anglo-Saxon England', 'https://www.britannica.com/place/United-Kingdom/Anglo-Saxon-England') ],
    isRuler: true,
    succession: { office: 'King of the English',
      predecessor: { personSlug: 'eadred-of-england', displayName: 'Eadred of England', note: 'His uncle, on whose death the elder son of Edmund I came of age to reign.' },
      successor: { personSlug: 'edgar-the-peaceful', displayName: 'Edgar the Peaceful', note: 'His younger brother, already king of Mercia after the division of 957, who reunited the realm.' } }
  },

  // ── EDGAR THE PEACEFUL ────────────────────────────────────────────────────────
  {
    id: 'edgar-the-peaceful', type: 'character', name: 'Edgar the Peaceful', born: 943, died: 975,
    deathAge: 'about 32', causeOfDeath: 'Natural causes', restingPlace: 'Glastonbury Abbey',
    location: 'Kingdom of England', aliases: ['Edgar the Peaceable', 'Eadgar'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/7/78/Edgar_-_MS_Royal_14_B_VI.jpg',
    summary: 'King of England (959–975), whose peaceful and powerful reign marked the height of the Anglo-Saxon monarchy, the great monastic reform, and a famous imperial coronation at Bath.',
    title: 'King of the English', roles: ['King of the English'],
    birth: { date: '943', place: { name: 'Wessex' }, note: 'Younger son of Edmund I; king of Mercia from 957 before ruling all England.' },
    death: { date: '8 July 975', place: { name: 'Winchester' }, circumstance: 'Died in 975 at the height of his power; his death opened a disputed succession between his sons.' },
    quickFacts: { realm: 'Kingdom of England', dynasty: 'House of Wessex', culture: 'Anglo-Saxon', knownFor: 'the peak of the Anglo-Saxon monarchy, the monastic reform, and his coronation at Bath' },
    imageInfo: { caption: 'King Edgar the Peaceful in a genealogical chronicle of the English kings.', creator: 'Unknown (BL MS Royal 14 B VI)', date: 'Early 14th century', source: 'Wikimedia Commons', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Edgar_-_MS_Royal_14_B_VI.jpg', license: 'Public domain', note: genealogy },
    overview: [
      'Edgar, called "the Peaceful", was king of England from 959 to 975, and his reign is remembered as the calm summit of the Anglo-Saxon monarchy. He came to the throne on the death of his brother Eadwig, having already ruled Mercia and Northumbria since the division of 957, and reunited the realm under a strong and settled government.',
      'His reign brought no great wars but sweeping reform. In close partnership with the churchmen Dunstan, Æthelwold, and Oswald, he presided over the golden age of the English Benedictine revival, reformed the coinage into a single national currency, and codified the law. In 973 he was crowned in a grand imperial ceremony at Bath and, at Chester, received the submission of the other kings of Britain — the high-water mark of Anglo-Saxon royal power.'
    ],
    greatestFeats: ['Reunited and ruled England at its Anglo-Saxon height', 'Led the great monastic reform', 'Reformed the coinage into a single currency'],
    contentSections: [
      { title: 'Overview', paragraphs: [
        'Edgar, called "the Peaceful", was king of England from 959 to 975, and his reign is remembered as the calm summit of the Anglo-Saxon monarchy. He came to the throne on the death of his brother Eadwig, having already ruled Mercia and Northumbria since the division of 957, and reunited the realm under a strong and settled government.',
        'His reign brought no great wars but sweeping reform. In close partnership with the churchmen Dunstan, Æthelwold, and Oswald, he presided over the golden age of the English Benedictine revival, reformed the coinage into a single national currency, and codified the law. In 973 he was crowned in a grand imperial ceremony at Bath and, at Chester, received the submission of the other kings of Britain — the high-water mark of Anglo-Saxon royal power.'
      ]},
      { title: 'Birth and early life', paragraphs: [
        'Edgar was born in 943, the younger son of Edmund I. Raised in the household of a Mercian ealdorman, he was closely linked to the reforming churchmen from his youth. When the Mercians and Northumbrians repudiated his brother Eadwig in 957, they made the fourteen-year-old Edgar their king; on Eadwig\'s death in 959 he succeeded to Wessex as well and reunited the kingdom.'
      ]},
      { title: 'Character and Personality', paragraphs: [
        'Edgar\'s byname "the Peaceful" reflects both the tranquillity of his reign and the character the sources give him: a strong, confident, and pious king who achieved by authority and good government what others sought through war. The monastic writers who dominated the record adored him as the royal champion of their reform, and painted him in almost ideal colours.',
        'The idealisation conceals a harder, more complex man — decisive, occasionally ruthless, and not without personal scandals that troubled the very churchmen who praised him. But the substance of the praise was earned: he kept the peace, commanded the obedience of his great men and of the other rulers of Britain, and lent the full weight of the crown to a religious and administrative renewal that transformed England. He was, by common judgement, the most successful of the later Anglo-Saxon kings.'
      ]},
      { title: 'Reform and imperial kingship', paragraphs: [
        'Edgar\'s reign was one of consolidation and reform rather than conquest. With Dunstan as archbishop of Canterbury and Æthelwold and Oswald as his allies, he drove forward the Benedictine monastic revival, refounding monasteries and issuing the Regularis Concordia to standardise their life. He reorganised the coinage into a single, uniform national currency renewed at regular intervals, and strengthened the machinery of shire and hundred.',
        'The symbolic climax came in 973. Edgar was crowned in a magnificent, deliberately imperial ceremony at Bath — the model for later English coronations — and then, at Chester, was rowed on the River Dee by a number of British and Scottish kings in token of their submission, a famous image of his overlordship of Britain.'
      ]},
      { title: 'Death', paragraphs: [
        'Edgar died on 8 July 975, only about thirty-two, and was buried at Glastonbury. His early death was a misfortune for England: he left two young sons by different mothers, Edward and Æthelred, and their disputed succession would quickly undo much of the stability he had built.'
      ]},
      { title: 'Legacy', paragraphs: [
        'Edgar the Peaceful is remembered as the greatest of the later Anglo-Saxon kings and his reign as the golden age of the Old English state — a time of peace, strong government, monastic revival, and a coinage and administration admired long after. Yet his achievement rested heavily on his own authority; his death at thirty-two exposed the fragility beneath, opening the disputed successions and renewed Viking assaults that would culminate in the troubled reign of his son Æthelred the Unready.'
      ]}
    ],
    keyAchievements: [
      { title: 'Reunited England and ruled its Anglo-Saxon height', description: 'Governed a peaceful, powerful, and well-ordered kingdom.' },
      { title: 'The monastic reform', description: 'Championed the Benedictine revival with Dunstan, Æthelwold, and Oswald.' },
      { title: 'Coronation at Bath and submission at Chester (973)', description: 'Staged an imperial coronation and received the homage of Britain\'s kings.' }
    ],
    timeline: [
      { date: '943', title: 'Born', description: 'Born the younger son of Edmund I.' },
      { date: '957', title: 'King of Mercia', description: 'Made king by the Mercians and Northumbrians when they repudiate his brother Eadwig.' },
      { date: '959', title: 'Reunites England', description: 'Succeeds to Wessex on Eadwig\'s death, reuniting the kingdom.', links: [per('eadwig-of-england', 'Eadwig of England', 'His brother and predecessor'), ENG] },
      { date: 'c. 970', title: 'The monastic reform', description: 'Drives the Benedictine revival and reforms the national coinage.' },
      { date: '973', title: 'Crowned at Bath', description: 'Staged an imperial coronation at Bath and receives the submission of British kings at Chester.' },
      { date: '8 July 975', title: 'Dies', description: 'Dies young, leaving a disputed succession between his sons Edward and Æthelred.', links: [per('edward-the-martyr', 'Edward the Martyr', 'His son and successor')] }
    ],
    relatedEntries: {
      locations: [ { ...ENG, label: 'His kingdom at its height' } ],
      people: [ per('eadwig-of-england', 'Eadwig of England', 'His brother and predecessor'), per('edward-the-martyr', 'Edward the Martyr', 'His son and successor') ],
      events: []
    },
    sources: [ src('Edgar | king of England', 'https://www.britannica.com/biography/Edgar-king-of-England'), src('Anglo-Saxon England', 'https://www.britannica.com/place/United-Kingdom/Anglo-Saxon-England') ],
    isRuler: true,
    succession: { office: 'King of the English',
      predecessor: { personSlug: 'eadwig-of-england', displayName: 'Eadwig of England', note: 'His brother, on whose death Edgar reunited the divided kingdom.' },
      successor: { personSlug: 'edward-the-martyr', displayName: 'Edward the Martyr', note: 'His elder son, whose disputed succession and murder would trouble the realm.' } }
  },

  // ── EDWARD THE MARTYR ─────────────────────────────────────────────────────────
  {
    id: 'edward-the-martyr', type: 'character', name: 'Edward the Martyr', born: 962, died: 978,
    deathAge: 'about 16', causeOfDeath: 'Murdered at Corfe', restingPlace: 'Shaftesbury Abbey',
    location: 'Kingdom of England', aliases: ['Eadweard', 'Saint Edward the Martyr'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/e3/Edward_the_Martyr_-_MS_Royal_14_B_VI.jpg',
    summary: 'King of England (975–978), the boy-king whose murder at Corfe — long blamed on his stepmother\'s faction — made way for Æthelred the Unready and won him veneration as a saint.',
    title: 'King of the English', roles: ['King of the English'],
    birth: { date: 'c. 962', place: { name: 'Wessex' }, note: 'Elder son of Edgar the Peaceful; succeeded amid a disputed succession.' },
    death: { date: '18 March 978', place: { name: 'Corfe' }, circumstance: 'Killed at Corfe in 978, by tradition at the instigation of the supporters of his half-brother Æthelred.' },
    quickFacts: { realm: 'Kingdom of England', dynasty: 'House of Wessex', culture: 'Anglo-Saxon', knownFor: 'his murder at Corfe and his cult as a martyr-saint' },
    imageInfo: { caption: 'King Edward the Martyr in a genealogical chronicle of the English kings.', creator: 'Unknown (BL MS Royal 14 B VI)', date: 'Early 14th century', source: 'Wikimedia Commons', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Edward_the_Martyr_-_MS_Royal_14_B_VI.jpg', license: 'Public domain', note: genealogy },
    overview: [
      'Edward, later venerated as Edward the Martyr, was king of England from 975 to 978. The elder son of Edgar the Peaceful, he was chosen king as a boy after his father\'s sudden death, over the claims of his young half-brother Æthelred, in a succession bitterly disputed between rival noble and ecclesiastical factions.',
      'His short reign was troubled by that division and by a reaction against the monastic reform his father had promoted. In March 978, while visiting his half-brother\'s household at Corfe, Edward was murdered — a killing widely believed to have been arranged by Æthelred\'s supporters. Miracles were soon reported at his tomb, and the murdered boy-king was honoured as a saint and martyr.'
    ],
    greatestFeats: ['King of England', 'Venerated as a martyr-saint'],
    contentSections: [
      { title: 'Overview', paragraphs: [
        'Edward, later venerated as Edward the Martyr, was king of England from 975 to 978. The elder son of Edgar the Peaceful, he was chosen king as a boy after his father\'s sudden death, over the claims of his young half-brother Æthelred, in a succession bitterly disputed between rival noble and ecclesiastical factions.',
        'His short reign was troubled by that division and by a reaction against the monastic reform his father had promoted. In March 978, while visiting his half-brother\'s household at Corfe, Edward was murdered — a killing widely believed to have been arranged by Æthelred\'s supporters. Miracles were soon reported at his tomb, and the murdered boy-king was honoured as a saint and martyr.'
      ]},
      { title: 'Birth and early life', paragraphs: [
        'Edward was born about 962, the elder son of Edgar the Peaceful, though by a union whose validity was later questioned. When Edgar died suddenly in 975, the succession was contested: one faction backed Edward, the other his much younger half-brother Æthelred, son of Edgar\'s queen Ælfthryth. With the support of Archbishop Dunstan, Edward was crowned.'
      ]},
      { title: 'Character and Personality', paragraphs: [
        'Edward reigned too briefly, and died too young, for much of a personal character to be recorded, and what little the sources say is coloured by the cult that grew around his death. Some accounts hint at a hot and violent temper in the boy-king; the hagiography that followed his murder recast him as an innocent, pious martyr.',
        'His true significance is less as a person than as a victim and a symbol. His reign became the focus of the factional and religious tensions left by his father\'s death, and his killing turned him almost at once into a holy martyr whose cult served the interests of those who deplored the manner of his brother\'s accession. He is remembered not for anything he did, but for how he died and what his death came to mean.'
      ]},
      { title: 'Disputed reign and murder', paragraphs: [
        'Edward\'s three-year reign was overshadowed by the disputed succession and by an "anti-monastic reaction", in which nobles who resented the wealth and privileges the reformed monasteries had gained under Edgar moved against them. The kingdom was uneasy and divided between the parties of the two royal half-brothers.',
        'On 18 March 978 Edward rode to visit Æthelred and his mother Ælfthryth at Corfe in Dorset. As he arrived, he was set upon and stabbed to death by members of the household. The murder was never openly avenged, and suspicion fell heavily on the faction of his stepmother and half-brother, who was the sole beneficiary.'
      ]},
      { title: 'Death and cult', paragraphs: [
        'Edward\'s body was hastily buried, but was soon translated to Shaftesbury Abbey, and reports of miracles turned his grave into a place of pilgrimage. Within a few years he was being venerated as a saint and martyr, and even his half-brother\'s government came to promote his cult, perhaps in expiation.'
      ]},
      { title: 'Legacy', paragraphs: [
        'Edward the Martyr is remembered less for his reign than for his murder and sainthood. His killing brought his half-brother Æthelred to a throne shadowed from the outset by the crime that had cleared it, a stain that contemporaries linked to the disasters that followed. As Saint Edward, the murdered boy-king became one of the most popular of Anglo-Saxon saints, his cult outlasting the dynasty and the kingdom into which he had been born.'
      ]}
    ],
    keyAchievements: [
      { title: 'King of England, 975–978', description: 'Reigned as a boy amid a bitterly disputed succession.' },
      { title: 'Venerated as a martyr-saint', description: 'His murder made him one of the most popular Anglo-Saxon saints.' }
    ],
    timeline: [
      { date: 'c. 962', title: 'Born', description: 'Born the elder son of Edgar the Peaceful.' },
      { date: '975', title: 'Becomes King of England', description: 'Chosen king as a boy, with Dunstan\'s support, over his half-brother Æthelred.', links: [per('edgar-the-peaceful', 'Edgar the Peaceful', 'His father and predecessor'), ENG] },
      { date: '975–978', title: 'A divided reign', description: 'Rules amid factional strife and a reaction against the monastic reform.' },
      { date: '18 March 978', title: 'Murdered at Corfe', description: 'Killed on visiting his half-brother\'s household; Æthelred takes the throne.', links: [per('aethelred-the-unready', 'Æthelred the Unready', 'His half-brother and successor')] },
      { date: 'c. 980', title: 'Venerated as a saint', description: 'Miracles at his tomb make him Saint Edward the Martyr.' }
    ],
    relatedEntries: {
      locations: [ { ...ENG, label: 'His kingdom' } ],
      people: [ per('edgar-the-peaceful', 'Edgar the Peaceful', 'His father and predecessor'), per('aethelred-the-unready', 'Æthelred the Unready', 'His half-brother and successor') ],
      events: []
    },
    sources: [ src('Saint Edward the Martyr | king of England', 'https://www.britannica.com/biography/Saint-Edward-the-Martyr'), src('Anglo-Saxon England', 'https://www.britannica.com/place/United-Kingdom/Anglo-Saxon-England') ],
    isRuler: true,
    succession: { office: 'King of the English',
      predecessor: { personSlug: 'edgar-the-peaceful', displayName: 'Edgar the Peaceful', note: 'His father, on whose sudden death the succession was disputed between Edward and Æthelred.' },
      successor: { personSlug: 'aethelred-the-unready', displayName: 'Æthelred the Unready', note: 'His half-brother, the sole beneficiary of his murder, who took the throne in 978.' } }
  },

  // ── ÆTHELRED THE UNREADY ──────────────────────────────────────────────────────
  {
    id: 'aethelred-the-unready', type: 'character', name: 'Æthelred the Unready', born: 966, died: 1016,
    deathAge: 'about 50', causeOfDeath: 'Illness', restingPlace: 'Old St Paul\'s Cathedral, London',
    location: 'Kingdom of England', aliases: ['Æthelred II', 'Ethelred the Unready', 'Æthelred Unræd'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/b/b3/Ethelred_the_Unready.jpg',
    summary: 'King of England (978–1016), whose long reign of renewed Viking invasions, Danegeld, and misgovernment ended in the Danish conquest of England by Sweyn Forkbeard and Cnut.',
    title: 'King of the English', roles: ['King of the English'],
    birth: { date: 'c. 966', place: { name: 'Wessex' }, note: 'Son of Edgar the Peaceful; came to the throne after his half-brother\'s murder.' },
    death: { date: '23 April 1016', place: { name: 'London' }, circumstance: 'Died in London in 1016 with the kingdom under Danish assault; his son Edmund Ironside fought on.' },
    quickFacts: { realm: 'Kingdom of England', dynasty: 'House of Wessex', culture: 'Anglo-Saxon', knownFor: 'the renewed Viking invasions, the Danegeld, and the loss of England to the Danes' },
    imageInfo: { caption: 'King Æthelred the Unready, from an illuminated genealogy of the English kings.', creator: 'Unknown medieval illuminator', date: 'Medieval', source: 'Wikimedia Commons', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Ethelred_the_Unready.jpg', license: 'Public domain', note: 'A medieval manuscript image of the king, not a likeness from life.' },
    overview: [
      'Æthelred II, remembered by the mocking byname "the Unready" — from Old English Unræd, "ill-advised" or "no counsel" — was king of England from 978 to 1016. He came to the throne as a boy after the murder of his half-brother Edward, a crime that shadowed his reign from the start, and ruled for nearly forty disastrous years.',
      'His reign saw the return of massive Viking assaults, which he met by paying vast tributes of silver — the Danegeld — that only invited more. His government was undermined by treachery and mistrust, worsened by the notorious St Brice\'s Day massacre of Danes in 1002, and finally overwhelmed when Sweyn Forkbeard of Denmark conquered England in 1013. Æthelred fled, briefly returned, and died in 1016 as his son Edmund Ironside carried on the fight against Sweyn\'s son Cnut.'
    ],
    greatestFeats: ['King of England for nearly forty years'],
    contentSections: [
      { title: 'Overview', paragraphs: [
        'Æthelred II, remembered by the mocking byname "the Unready" — from Old English Unræd, "ill-advised" or "no counsel" — was king of England from 978 to 1016. He came to the throne as a boy after the murder of his half-brother Edward, a crime that shadowed his reign from the start, and ruled for nearly forty disastrous years.',
        'His reign saw the return of massive Viking assaults, which he met by paying vast tributes of silver — the Danegeld — that only invited more. His government was undermined by treachery and mistrust, worsened by the notorious St Brice\'s Day massacre of Danes in 1002, and finally overwhelmed when Sweyn Forkbeard of Denmark conquered England in 1013. Æthelred fled, briefly returned, and died in 1016 as his son Edmund Ironside carried on the fight against Sweyn\'s son Cnut.'
      ]},
      { title: 'Birth and early life', paragraphs: [
        'Æthelred was born about 966, the son of Edgar the Peaceful and his queen Ælfthryth. He was a child of perhaps twelve when his half-brother Edward was murdered at Corfe in 978 — a killing from which Æthelred was the sole beneficiary, and in which his mother\'s faction was widely implicated. He was crowned king within weeks, but the taint of that blood clung to his kingship.'
      ]},
      { title: 'Character and Personality', paragraphs: [
        'Æthelred has come down as the archetype of the failed king, and his pun-name — Æthelred Unræd, "Noble-counsel the No-counsel" — fixed that judgement for all time. The sources, above all the vivid, despairing account in the Anglo-Saxon Chronicle written after the disasters, present a ruler who was irresolute, suspicious, and prone to violent, treacherous acts that backfired.',
        'Historians have softened the caricature: his government was administratively sophisticated, his law-making serious, and the sheer scale and persistence of the Viking onslaught would have tested any king. Yet the pattern of the reign — great tributes paid and then betrayed, commanders distrusted and dismissed, panic-stricken cruelties like the St Brice\'s Day massacre — does suggest a king who never mastered his own magnates or his enemies. He remains the byword for misrule at the end of Anglo-Saxon England.'
      ]},
      { title: 'The Viking storm and the Danegeld', paragraphs: [
        'From the 980s and 990s, Viking fleets returned to England in force, led by such figures as Olaf Tryggvason and later Sweyn Forkbeard. Unable to defeat them, Æthelred bought them off with escalating payments of silver, the Danegeld, raised by heavy taxation — a policy that filled the raiders\' ships and encouraged their return. In 1002, in a fit of fear and mistrust, he ordered the massacre of Danes living in England on St Brice\'s Day, an atrocity that, by tradition, killed a sister of Sweyn Forkbeard and hardened Danish enmity.',
        'The assaults grew into a campaign of conquest. In 1013 Sweyn Forkbeard overran England and was accepted as king; Æthelred fled to Normandy, to the court of his brother-in-law. Sweyn\'s sudden death early in 1014 allowed Æthelred to return, but his position was broken.'
      ]},
      { title: 'Death', paragraphs: [
        'Æthelred died in London on 23 April 1016, as Sweyn\'s son Cnut pressed the conquest of England. He was buried in Old St Paul\'s. His son Edmund Ironside took up the desperate fight against Cnut, but within months the Danish conquest was complete.'
      ]},
      { title: 'Legacy', paragraphs: [
        'Æthelred the Unready is remembered as the king who lost England to the Danes, the disastrous close of the House of Wessex\'s tenth-century greatness. His reign\'s failures — the endless Danegeld, the St Brice\'s Day massacre, the collapse before Sweyn and Cnut — became a lasting lesson in misgovernment. Yet his blood ran on: through his son Edward the Confessor the old line would briefly return, and through his Norman marriage he helped forge the tie that would bring William the Conqueror to England fifty years later.'
      ]}
    ],
    keyAchievements: [
      { title: 'King of England, 978–1016', description: 'Reigned nearly forty years through the return of the Viking wars.' },
      { title: 'The Danegeld', description: 'Raised vast tributes of silver to buy off Viking armies.' }
    ],
    timeline: [
      { date: 'c. 966', title: 'Born', description: 'Born a son of Edgar the Peaceful and Ælfthryth.' },
      { date: '978', title: 'Becomes King of England', description: 'Crowned as a boy after the murder of his half-brother Edward.', links: [per('edward-the-martyr', 'Edward the Martyr', 'His murdered half-brother and predecessor'), ENG] },
      { date: '991', title: 'First great Danegeld', description: 'Begins paying tribute to Viking armies after defeat at Maldon.' },
      { date: '1002', title: 'St Brice\'s Day massacre', description: 'Orders the killing of Danes in England, hardening Danish enmity.' },
      { date: '1013', title: 'Sweyn Forkbeard conquers England', description: 'Flees to Normandy as Sweyn Forkbeard is accepted as king.', links: [per('sweyn-forkbeard', 'Sweyn Forkbeard', 'The Danish conqueror who drove him out')] },
      { date: '23 April 1016', title: 'Dies', description: 'Dies in London as Cnut presses the conquest; his son Edmund Ironside fights on.', links: [per('edmund-ironside', 'Edmund Ironside', 'His son and successor')] }
    ],
    relatedEntries: {
      locations: [ { ...ENG, label: 'The kingdom he lost to the Danes' } ],
      people: [ per('edward-the-martyr', 'Edward the Martyr', 'His murdered half-brother and predecessor'), per('edmund-ironside', 'Edmund Ironside', 'His son and successor'), per('sweyn-forkbeard', 'Sweyn Forkbeard', 'The Danish king who conquered England') ],
      events: []
    },
    sources: [ src('Ethelred the Unready | king of England', 'https://www.britannica.com/biography/Ethelred-the-Unready'), src('Anglo-Saxon England', 'https://www.britannica.com/place/United-Kingdom/Anglo-Saxon-England') ],
    isRuler: true,
    succession: { office: 'King of the English',
      predecessor: { personSlug: 'edward-the-martyr', displayName: 'Edward the Martyr', note: 'His half-brother, whose murder in 978 brought Æthelred to the throne.' },
      successor: { personSlug: 'edmund-ironside', displayName: 'Edmund Ironside', note: 'His son, who fought on against Cnut. (Sweyn Forkbeard had briefly conquered England as king in 1013–1014.)' } }
  },

  // ── HENRY I OF ENGLAND ────────────────────────────────────────────────────────
  {
    id: 'henry-i-of-england', type: 'character', name: 'Henry I of England', born: 1068, died: 1135,
    deathAge: 'about 67', causeOfDeath: 'Illness ("a surfeit of lampreys")', restingPlace: 'Reading Abbey',
    location: 'Kingdom of England', aliases: ['Henry Beauclerc', 'Henry I Beauclerc'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/9c/Worcester_chronicle_-_Henry_I_in_a_hulk.png',
    summary: 'King of England (1100–1135), youngest son of William the Conqueror, an able and ruthless administrator who reunited England and Normandy — but whose heir\'s drowning opened the Anarchy.',
    title: 'King of England', roles: ['King of England', 'Duke of Normandy'],
    birth: { date: 'c. 1068', place: { name: 'Selby, England' }, note: 'Youngest son of William the Conqueror; the only one born in England.' },
    death: { date: '1 December 1135', place: { name: 'Lyons-la-Forêt, Normandy' }, circumstance: 'Died in Normandy in 1135, by tradition after eating a surfeit of lampreys; his contested succession opened civil war.' },
    quickFacts: { realm: 'Kingdom of England and Duchy of Normandy', dynasty: 'House of Normandy', culture: 'Anglo-Norman', knownFor: 'his strong government, reuniting England and Normandy, and the disputed succession he left' },
    imageInfo: { caption: 'Henry I of England aboard a ship, from the contemporary chronicle of John of Worcester (1118).', creator: 'John of Worcester', date: '1118', source: 'Wikimedia Commons', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Worcester_chronicle_-_Henry_I_in_a_hulk.png', license: 'CC BY 4.0', note: 'A near-contemporary manuscript image from a chronicle written during his own reign.' },
    overview: [
      'Henry I, called Beauclerc for his learning, was king of England from 1100 to 1135 and duke of Normandy from 1106. The youngest son of William the Conqueror, he seized the English throne within days of the death of his brother William II in a hunting accident, and secured it with a coronation charter of liberties that promised to end his brother\'s abuses.',
      'An exceptionally able and hard-headed ruler, he defeated and imprisoned his elder brother Robert Curthose to reunite England and Normandy, and built a formidable system of royal administration and justice that earned him the name "Lion of Justice". But the drowning of his only legitimate son in the White Ship disaster of 1120 wrecked his plans for the succession; his attempt to leave the crown to his daughter Matilda failed, and his death in 1135 plunged England into the civil war known as the Anarchy.'
    ],
    greatestFeats: ['King of England', 'Reunited England and Normandy', 'Built a powerful royal administration and justice'],
    contentSections: [
      { title: 'Overview', paragraphs: [
        'Henry I, called Beauclerc for his learning, was king of England from 1100 to 1135 and duke of Normandy from 1106. The youngest son of William the Conqueror, he seized the English throne within days of the death of his brother William II in a hunting accident, and secured it with a coronation charter of liberties that promised to end his brother\'s abuses.',
        'An exceptionally able and hard-headed ruler, he defeated and imprisoned his elder brother Robert Curthose to reunite England and Normandy, and built a formidable system of royal administration and justice that earned him the name "Lion of Justice". But the drowning of his only legitimate son in the White Ship disaster of 1120 wrecked his plans for the succession; his attempt to leave the crown to his daughter Matilda failed, and his death in 1135 plunged England into the civil war known as the Anarchy.'
      ]},
      { title: 'Birth and early life', paragraphs: [
        'Henry was born about 1068, the youngest and only English-born son of William the Conqueror. As a younger son he received money rather than lands at his father\'s death, and spent his early years manoeuvring between his elder brothers — Robert Curthose, who held Normandy, and William II Rufus, who held England. Well educated, patient, and calculating, he bided his time on the margins of power.',
        'His chance came in August 1100, when William Rufus was killed by an arrow while hunting in the New Forest. Henry, who was in the hunting party, rode straight for Winchester to seize the royal treasury and had himself crowned within days.'
      ]},
      { title: 'Character and Personality', paragraphs: [
        'Henry I was a ruler of formidable intelligence, self-control, and calculated ruthlessness. Better educated than most kings of his day — hence "Beauclerc", the fine scholar — he combined a lawyer\'s grasp of administration with an utter determination to dominate, and a memory for grudges. Contemporaries respected and feared him more than they loved him.',
        'He could be generous to loyal servants and was a discerning patron of able, low-born administrators, but he was merciless to those who defied him: he blinded and mutilated rebels and forgers, kept his own brother a prisoner for twenty-eight years, and ruled his barons by a mixture of patronage, law, and fear. Cold, patient, and effective, he was perhaps the most competent of the Norman kings, and the peace of his long reign — however harshly enforced — was remembered with longing during the chaos that followed it.'
      ]},
      { title: 'King and administrator', paragraphs: [
        'Henry secured his throne against his elder brother Robert Curthose, who claimed England; in 1106 he defeated and captured Robert at the Battle of Tinchebrai and took Normandy for himself, reuniting his father\'s dominions and holding Robert prisoner for the rest of his life. He spent much of his reign defending Normandy against rivals and the king of France.',
        'At home his achievement was the strengthening of royal government. He developed the Exchequer to audit the crown\'s revenues, sent out itinerant justices, and used written records and a corps of professional administrators to make the king\'s authority felt throughout the land. His firm keeping of the peace and justice earned him a lasting reputation as the "Lion of Justice".'
      ]},
      { title: 'The White Ship and the succession', paragraphs: [
        'The great catastrophe of Henry\'s reign was personal and dynastic. In November 1120 his only legitimate son and heir, William Adelin, drowned when the White Ship sank off Barfleur, along with many of the young Anglo-Norman nobility. Henry never recovered a secure succession. He named his daughter Matilda, widow of the Emperor, as his heir and made his barons swear to accept her, marrying her to Geoffrey of Anjou.',
        'But the prospect of a female ruler, and of an Angevin consort, was unwelcome to many. When Henry died in Normandy on 1 December 1135, his nephew Stephen of Blois moved faster than Matilda and seized the crown, breaking his oath — and igniting nearly two decades of civil war.'
      ]},
      { title: 'Legacy', paragraphs: [
        'Henry I is remembered as one of the ablest of English kings, whose strong, orderly, and feared government gave England a generation of peace and greatly advanced the machinery of royal administration and justice. Yet his failure to secure the succession undid much of that work: the drowning of his heir and the disputed claim of his daughter Matilda led directly to the Anarchy of Stephen\'s reign. Through Matilda, however, his blood passed to the Angevin, or Plantagenet, kings who would rule England for the next three centuries.'
      ]}
    ],
    keyAchievements: [
      { title: 'King of England, 1100–1135', description: 'Seized and held the throne with a charter of liberties and firm rule.' },
      { title: 'Reunited England and Normandy', description: 'Defeated and captured his brother Robert Curthose at Tinchebrai in 1106.' },
      { title: 'The "Lion of Justice"', description: 'Built up the Exchequer, itinerant justice, and a professional royal administration.' }
    ],
    timeline: [
      { date: 'c. 1068', title: 'Born', description: 'Born the youngest son of William the Conqueror, the only one born in England.', links: [per('william-the-conqueror', 'William the Conqueror', 'His father')] },
      { date: '1100', title: 'Seizes the throne', description: 'Crowned within days of the death of his brother William II in a hunting accident.', links: [per('william-ii-of-england', 'William II of England', 'His brother and predecessor'), ENG] },
      { date: '1106', title: 'Wins Normandy at Tinchebrai', description: 'Defeats and captures his brother Robert Curthose, reuniting England and Normandy.' },
      { date: '1120', title: 'The White Ship disaster', description: 'His only legitimate son drowns, wrecking the succession.' },
      { date: '1127', title: 'Names Matilda his heir', description: 'Makes his barons swear to accept his daughter Matilda as his successor.' },
      { date: '1 December 1135', title: 'Dies', description: 'Dies in Normandy; his nephew Stephen seizes the throne, opening the Anarchy.', links: [per('stephen-of-england', 'Stephen of England', 'His nephew and successor')] }
    ],
    relatedEntries: {
      locations: [ { ...ENG, label: 'His kingdom' } ],
      people: [ per('william-ii-of-england', 'William II of England', 'His brother and predecessor'), per('stephen-of-england', 'Stephen of England', 'His nephew and successor'), per('william-the-conqueror', 'William the Conqueror', 'His father') ],
      events: []
    },
    sources: [ src('Henry I | king of England', 'https://www.britannica.com/biography/Henry-I-king-of-England'), src('Norman Conquest', 'https://www.britannica.com/event/Norman-Conquest') ],
    isRuler: true,
    succession: { office: 'King of England', note: 'Succession shown for the English crown; Henry I was also duke of Normandy from 1106.',
      predecessor: { personSlug: 'william-ii-of-england', displayName: 'William II of England', note: 'His brother "Rufus", on whose death in a hunting accident Henry seized the throne.' },
      successor: { personSlug: 'stephen-of-england', displayName: 'Stephen of England', note: 'His nephew, who took the crown over Henry\'s designated heir, his daughter the Empress Matilda, opening the Anarchy.' } }
  },

  // ── STEPHEN OF ENGLAND ────────────────────────────────────────────────────────
  {
    id: 'stephen-of-england', type: 'character', name: 'Stephen of England', born: 1096, died: 1154,
    deathAge: 'about 58', causeOfDeath: 'Illness', restingPlace: 'Faversham Abbey',
    location: 'Kingdom of England', aliases: ['Stephen of Blois', 'King Stephen'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/d6/StephenatLincoln.jpg',
    summary: 'King of England (1135–1154), grandson of William the Conqueror, whose seizure of the throne over the Empress Matilda plunged England into the civil war known as the Anarchy.',
    title: 'King of England', roles: ['King of England'],
    birth: { date: 'c. 1096', place: { name: 'Blois, France' }, note: 'Grandson of William the Conqueror through his mother Adela; count of Blois and Boulogne.' },
    death: { date: '25 October 1154', place: { name: 'Dover' }, circumstance: 'Died in 1154, a year after agreeing that Matilda\'s son Henry should succeed him.' },
    quickFacts: { realm: 'Kingdom of England', dynasty: 'House of Blois', culture: 'Anglo-Norman', knownFor: 'the civil war of the Anarchy against the Empress Matilda' },
    imageInfo: { caption: 'King Stephen at the Battle of Lincoln, from a medieval manuscript.', creator: 'Unknown medieval illuminator', date: 'Turn of the 12th–13th century', source: 'Wikimedia Commons', sourceUrl: 'https://commons.wikimedia.org/wiki/File:StephenatLincoln.jpg', license: 'Public domain', note: 'A medieval manuscript depiction of the king in battle, not a likeness from life.' },
    overview: [
      'Stephen was king of England from 1135 to 1154, and his reign is remembered as "the Anarchy". A grandson of William the Conqueror through his mother Adela, and a favoured nephew of Henry I, he had sworn to uphold Henry\'s daughter Matilda as heir — but on the old king\'s death he crossed to England, seized the treasury, and had himself crowned.',
      'His usurpation was challenged by Matilda and her half-brother Robert of Gloucester, and from 1139 England was torn by a long, grinding civil war in which, as the chronicler put it, "Christ and his saints slept". Stephen was even captured and briefly deposed after the Battle of Lincoln in 1141. Neither side could win outright, and the war ended only in 1153, when Stephen — his own son having died — agreed that Matilda\'s son Henry of Anjou should succeed him. Stephen died the next year.'
    ],
    greatestFeats: ['King of England'],
    contentSections: [
      { title: 'Overview', paragraphs: [
        'Stephen was king of England from 1135 to 1154, and his reign is remembered as "the Anarchy". A grandson of William the Conqueror through his mother Adela, and a favoured nephew of Henry I, he had sworn to uphold Henry\'s daughter Matilda as heir — but on the old king\'s death he crossed to England, seized the treasury, and had himself crowned.',
        'His usurpation was challenged by Matilda and her half-brother Robert of Gloucester, and from 1139 England was torn by a long, grinding civil war in which, as the chronicler put it, "Christ and his saints slept". Stephen was even captured and briefly deposed after the Battle of Lincoln in 1141. Neither side could win outright, and the war ended only in 1153, when Stephen — his own son having died — agreed that Matilda\'s son Henry of Anjou should succeed him. Stephen died the next year.'
      ]},
      { title: 'Birth and early life', paragraphs: [
        'Stephen was born about 1096 at Blois, the son of Count Stephen of Blois and Adela, a daughter of William the Conqueror. Raised at the court of his uncle Henry I, he was showered with lands and titles, becoming one of the greatest magnates of England and Normandy and count of Boulogne by marriage. Like the other magnates, he had sworn to accept Henry\'s daughter Matilda as heir to the throne.',
        'When Henry I died in December 1135, Stephen acted at once. He crossed the Channel, secured the royal treasury at Winchester, and — with the support of much of the Church and baronage, who preferred him to a female ruler and her Angevin husband — was crowned king within weeks.'
      ]},
      { title: 'Character and Personality', paragraphs: [
        'Stephen was, by wide agreement, a brave, affable, and personally likeable man — generous, courageous in battle, and courteous even to enemies — who nonetheless made a poor king. His very mildness and inconstancy undid him: he was too ready to make concessions, too quick to trust and to forgive, and lacked the ruthless authority his uncle Henry I had wielded to hold the barons in check.',
        'The chroniclers lamented that a man of such personal virtues should have brought such misery on the land. He could win a battle but not a peace, gain a rival\'s submission and then squander it, and his good nature repeatedly let enemies slip through his hands. He is remembered as the well-meaning king whose weakness allowed the aristocracy to run wild and the kingdom to dissolve into anarchy.'
      ]},
      { title: 'The Anarchy', paragraphs: [
        'Stephen\'s seizure of the crown was contested from the start. In 1139 the Empress Matilda landed in England to press her claim, supported by her half-brother Robert of Gloucester, and the country split into warring camps of barons who exploited the conflict to build private power. In 1141 Stephen was defeated and captured at the Battle of Lincoln, and for a few months Matilda held the upper hand — though she was never crowned — before he was exchanged and restored.',
        'The war dragged on for over a decade without a decisive result, as royal authority collapsed and, in the chronicler\'s famous words, men said openly that "Christ and his saints slept". Castles multiplied, the coinage failed, and the country suffered grievously.'
      ]},
      { title: 'Death and settlement', paragraphs: [
        'The deadlock broke through exhaustion and dynastic accident. In 1153 Matilda\'s son, Henry of Anjou, invaded and campaigned to a standstill against Stephen; and the death that year of Stephen\'s own son and heir, Eustace, removed his reason to fight on. By the Treaty of Wallingford, Stephen recognised Henry as his heir, keeping the crown for his own lifetime. He died on 25 October 1154, and Henry succeeded peacefully as Henry II.'
      ]},
      { title: 'Legacy', paragraphs: [
        'Stephen is remembered as the king of the Anarchy, whose disputed reign became a byword for the breakdown of royal authority and the miseries of civil war. A likeable man and a poor ruler, he presided over the near-dissolution of the strong monarchy Henry I had built. Yet the settlement that ended his reign brought to the throne his rival\'s son, Henry II, founder of the Plantagenet dynasty, who would rebuild royal power on new foundations — so that the Anarchy became the dark prelude to one of the great ages of English kingship.'
      ]}
    ],
    keyAchievements: [
      { title: 'King of England, 1135–1154', description: 'Seized and held the crown through nearly two decades of civil war.' },
      { title: 'The Treaty of Wallingford, 1153', description: 'Ended the Anarchy by recognising Henry of Anjou as his heir.' }
    ],
    timeline: [
      { date: 'c. 1096', title: 'Born', description: 'Born at Blois, grandson of William the Conqueror through his mother Adela.' },
      { date: '1135', title: 'Seizes the throne', description: 'On Henry I\'s death, crosses to England and is crowned, over the Empress Matilda.', links: [per('henry-i-of-england', 'Henry I of England', 'His uncle and predecessor'), ENG] },
      { date: '1139', title: 'Civil war begins', description: 'Matilda lands to press her claim; England splits into the war of the Anarchy.' },
      { date: '1141', title: 'Captured at Lincoln', description: 'Defeated and captured at the Battle of Lincoln, then later exchanged and restored.' },
      { date: '1153', title: 'Treaty of Wallingford', description: 'Recognises Matilda\'s son Henry as his heir after the death of his own son Eustace.' },
      { date: '25 October 1154', title: 'Dies', description: 'Dies at Dover; Henry of Anjou succeeds peacefully as Henry II.', links: [per('henry-ii-of-england', 'Henry II of England', 'His successor')] }
    ],
    relatedEntries: {
      locations: [ { ...ENG, label: 'The kingdom torn by the Anarchy' } ],
      people: [ per('henry-i-of-england', 'Henry I of England', 'His uncle and predecessor'), per('henry-ii-of-england', 'Henry II of England', 'His rival\'s son and successor') ],
      events: []
    },
    sources: [ src('Stephen | king of England', 'https://www.britannica.com/biography/Stephen-king-of-England'), src('The Anarchy', 'https://www.britannica.com/biography/Stephen-king-of-England') ],
    isRuler: true,
    succession: { office: 'King of England',
      predecessor: { personSlug: 'henry-i-of-england', displayName: 'Henry I of England', note: 'His uncle, whose designated heir Matilda he supplanted by seizing the throne in 1135.' },
      successor: { personSlug: 'henry-ii-of-england', displayName: 'Henry II of England', note: 'The Empress Matilda\'s son, recognised as heir by the Treaty of Wallingford, who founded the Plantagenet line.' } }
  }
]

// Insert / replace
let added = 0, replaced = 0
for (const p of people) {
  const i = data.characters.findIndex(c => c.id === p.id)
  if (i >= 0) { data.characters[i] = p; replaced++ } else { data.characters.push(p); added++ }
}

// Relink the four existing endpoints.
const byId = new Map(data.characters.map(c => [c.id, c]))
const relink = (rulerId, side, personSlug, displayName, note) => {
  const c = byId.get(rulerId)
  if (!c?.succession?.[side]) { console.warn(`SKIP relink ${rulerId}.${side}`); return }
  c.succession[side] = { personSlug, displayName, note }
  console.log(`relinked ${rulerId}.${side} -> ${personSlug}`)
}
relink('edward-the-elder', 'successor', 'aethelstan', 'Æthelstan', 'His son, the first king of all England, victor of Brunanburh.')
relink('edmund-ironside', 'predecessor', 'aethelred-the-unready', 'Æthelred the Unready', 'His father, in whose disastrous reign England was overrun by the Danes.')
relink('william-ii-of-england', 'successor', 'henry-i-of-england', 'Henry I of England', 'His younger brother, who seized the throne on William\'s death in the New Forest.')
relink('henry-ii-of-england', 'predecessor', 'stephen-of-england', 'Stephen of England', 'The king of the Anarchy, who recognised Henry as his heir by the Treaty of Wallingford.')

fs.writeFileSync(dataPath, JSON.stringify(data, null, 2))
console.log(`\nEnglish kings added: ${added}, replaced: ${replaced}. Total characters: ${data.characters.length}`)
