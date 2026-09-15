/**
 * Carolingian & early Frankish cluster. Four rulers linking existing anchors back
 * through Frankish history: Pepin of Herstal (Charles Martel's predecessor),
 * Childeric III (Pepin the Short's predecessor, last Merovingian), Lothair I
 * (Louis the Pious's successor), and Louis V (Hugh Capet's predecessor, last
 * West-Frankish Carolingian). Open-side neighbours are noted boundaries. Idempotent.
 */
import fs from 'node:fs'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dataPath = path.join(__dirname, '../server/data/history.json')
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'))

const FR = { title: 'Kingdom of France', type: 'location', slug: 'kingdom-of-france' }
const HRE = { title: 'Holy Roman Empire', type: 'location', slug: 'holy-roman-empire' }
const per = (slug, title, label) => ({ title, type: 'person', slug, label })
const src = (title, url) => ({ title, author: 'Encyclopaedia Britannica', type: 'encyclopedia', url })

const people = [
  // ── PEPIN OF HERSTAL ──────────────────────────────────────────────────────────
  {
    id: 'pepin-of-herstal', type: 'character', name: 'Pepin of Herstal', born: 645, died: 714,
    deathAge: 'about 69', causeOfDeath: 'Illness', restingPlace: 'Chèvremont / Liège',
    location: 'Kingdom of the Franks', aliases: ['Pépin de Herstal', 'Pepin II', 'Pepin the Middle'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/b/b3/St_Hubert_of_Li%C3%A8ge_offers_his_services_to_Pepin_of_Heristal.jpg',
    summary: 'Frankish Mayor of the Palace (680–714) who reunited the Frankish realms under his rule and made his family the true power behind the Merovingian throne.',
    title: 'Mayor of the Palace', roles: ['Mayor of the Palace of the Franks'],
    birth: { date: 'c. 645', place: { name: 'Austrasia' }, note: 'Of the Pippinid and Arnulfing houses; father of Charles Martel.' },
    death: { date: '16 December 714', place: { name: 'Jupille' }, circumstance: 'Died in 714, his death touching off a succession struggle from which his son Charles Martel emerged victorious.' },
    quickFacts: { realm: 'Kingdom of the Franks', dynasty: 'Pippinid / Arnulfing', culture: 'Frankish', knownFor: 'reuniting Francia and founding the power of the future Carolingians' },
    imageInfo: { caption: 'St Hubert offering his services to Pepin of Herstal, in a fifteenth-century manuscript.', creator: 'Loyset Liédet (illuminator)', date: '1463', source: 'Wikimedia Commons', sourceUrl: 'https://commons.wikimedia.org/wiki/File:St_Hubert_of_Liège_offers_his_services_to_Pepin_of_Heristal.jpg', license: 'Public domain', note: 'A later manuscript illumination, not a likeness from life.' },
    overview: [
      'Pepin of Herstal was the Mayor of the Palace of the Franks from 680 to 714, and the man who made his family the true rulers of the Frankish kingdoms. In an age when the Merovingian kings had dwindled into powerless figureheads — the "do-nothing kings" — real authority lay with the mayors of the palace, and Pepin, head of the powerful Austrasian house descended from Arnulf of Metz and Pepin of Landen, seized that power for good.',
      'By his victory over the rival Neustrians at the Battle of Tertry in 687, Pepin united the mayoralties of all the Frankish realms under himself, ruling as effective sovereign while a shadow Merovingian sat on the throne. He was the grandfather of Charlemagne\'s grandfather — the founder of the dynasty\'s greatness — and the father of Charles Martel.'
    ],
    greatestFeats: ['Reunited the Frankish realms', 'Won the Battle of Tertry (687)', 'Founded the effective rule of the future Carolingians'],
    contentSections: [
      { title: 'Overview', paragraphs: [
        'Pepin of Herstal was the Mayor of the Palace of the Franks from 680 to 714, and the man who made his family the true rulers of the Frankish kingdoms. In an age when the Merovingian kings had dwindled into powerless figureheads — the "do-nothing kings" — real authority lay with the mayors of the palace, and Pepin, head of the powerful Austrasian house descended from Arnulf of Metz and Pepin of Landen, seized that power for good.',
        'By his victory over the rival Neustrians at the Battle of Tertry in 687, Pepin united the mayoralties of all the Frankish realms under himself, ruling as effective sovereign while a shadow Merovingian sat on the throne. He was the grandfather of Charlemagne\'s grandfather — the founder of the dynasty\'s greatness — and the father of Charles Martel.'
      ]},
      { title: 'Birth and early life', paragraphs: [
        'Pepin was born about 645 into the greatest noble family of Austrasia, the eastern Frankish realm, the grandson of Pepin of Landen and of Bishop Arnulf of Metz, whose descendants would become the Carolingians. He inherited vast estates and a claim to the hereditary office of mayor of the palace, the chief minister who commanded the army and ran the government in the king\'s name.',
        'As the Merovingian kings sank into impotence, the mayors became the real rulers, and Pepin set out to make himself master of all the Franks.'
      ]},
      { title: 'Character and Personality', paragraphs: [
        'Pepin of Herstal emerges from the sources as a shrewd, tenacious, and ruthless dynast — a great territorial magnate who understood that power in the Frankish world now flowed from land, arms, and the control of the mayoralty rather than from the fading royal title. Patient and calculating, he spent decades building his family\'s dominance and eliminating rivals.',
        'He was also the founder of a dynastic project that his descendants would carry to its culmination. By making the mayoralty hereditary in his house, subduing the outlying peoples, and cultivating the Church — supporting missionaries like Willibrord among the Frisians — he laid the political and religious foundations on which his son Charles Martel, his grandson Pepin the Short, and his great-great-grandson Charlemagne would build. He appears as the hard, far-seeing architect of Carolingian greatness.'
      ]},
      { title: 'Master of the Franks', paragraphs: [
        'Pepin\'s decisive achievement came in 687, when he led the Austrasians against the Neustrians — the western Franks — and defeated them at the Battle of Tertry. The victory made him mayor of the palace over Neustria and Burgundy as well as Austrasia, uniting the whole Frankish world under his authority. Thereafter he ruled as effective sovereign, styling himself "duke and prince of the Franks", while a powerless Merovingian reigned in name.',
        'He spent the following decades campaigning to hold and extend Frankish power — against the Frisians, Alemanni, and others — and worked closely with the Church, supporting the mission to convert the pagan peoples on his frontiers.'
      ]},
      { title: 'Death', paragraphs: [
        'Pepin died on 16 December 714. His attempt to pass his power to his young grandsons under the regency of his widow Plectrude collapsed into a violent succession struggle, from which his illegitimate son Charles — the future Charles Martel — emerged, after imprisonment and war, as the new master of the Franks.'
      ]},
      { title: 'Legacy', paragraphs: [
        'Pepin of Herstal is remembered as the founder of the effective rule of the Carolingian house. By uniting the Frankish mayoralties and making his family\'s power hereditary and unchallengeable, he set the stage for his descendants\' rise from mayors to kings to emperors. The Frankish hegemony he established would, within three generations, give Western Europe its first emperor since antiquity in his descendant Charlemagne.'
      ]}
    ],
    keyAchievements: [
      { title: 'Mayor of the Palace of all the Franks', description: 'United the Frankish realms under his rule from 687.' },
      { title: 'Victory at Tertry, 687', description: 'Defeated the Neustrians to become master of the whole Frankish world.' },
      { title: 'Founded Carolingian power', description: 'Made his family\'s dominance hereditary, the basis of the future dynasty.' }
    ],
    timeline: [
      { date: 'c. 645', title: 'Born', description: 'Born into the great Austrasian house of the future Carolingians.' },
      { date: '680', title: 'Becomes mayor of Austrasia', description: 'Takes the office of mayor of the palace in the eastern Frankish realm.', links: [FR] },
      { date: '687', title: 'Victory at Tertry', description: 'Defeats the Neustrians and becomes mayor over all the Franks.' },
      { date: 'c. 695', title: 'Rules as prince of the Franks', description: 'Governs the united realm while a powerless Merovingian reigns in name.' },
      { date: '16 December 714', title: 'Dies', description: 'Dies; his son Charles Martel wins the ensuing succession struggle.', links: [per('charles-martel', 'Charles Martel', 'His son and eventual successor')] }
    ],
    relatedEntries: {
      locations: [ { ...FR, label: 'The Frankish realm he ruled' } ],
      people: [ per('charles-martel', 'Charles Martel', 'His son and successor in power'), per('charlemagne', 'Charlemagne', 'His great-great-grandson, the emperor') ],
      events: []
    },
    sources: [ src('Pippin II | Frankish ruler', 'https://www.britannica.com/biography/Pippin-II'), src('Carolingian dynasty', 'https://www.britannica.com/topic/Carolingian-dynasty') ],
    isRuler: true,
    succession: { office: 'Mayor of the Palace',
      predecessor: { displayName: 'Wulfoald', note: 'The Austrasian mayor of the palace whom Pepin\'s family supplanted; the earlier mayors are not yet covered in the Codex.' },
      successor: { personSlug: 'charles-martel', displayName: 'Charles Martel', note: 'His son, who won the mayoralty after the succession struggle that followed Pepin\'s death.' } }
  },

  // ── CHILDERIC III ─────────────────────────────────────────────────────────────
  {
    id: 'childeric-iii', type: 'character', name: 'Childeric III', born: 717, died: 754,
    deathAge: 'about 37', causeOfDeath: 'Died in a monastery', restingPlace: 'Monastery of Saint-Bertin',
    location: 'Kingdom of the Franks', aliases: ['Childeric III', 'the last Merovingian'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/ee/Beaux-Arts_de_Carcassonne_-_Le_dernier_des_M%C3%A9rovingiens_-_Evariste-Vital_Luminais_-Joconde_04400000403.jpg',
    summary: 'The last Merovingian king of the Franks (743–751), a powerless figurehead deposed and tonsured by Pepin the Short, ending three centuries of Merovingian rule.',
    title: 'King of the Franks', roles: ['King of the Franks (Merovingian)'],
    birth: { date: 'c. 717', place: { name: 'Francia' }, note: 'A Merovingian of uncertain parentage, raised up as king by the mayors of the palace.' },
    death: { date: 'c. 754', place: { name: 'Saint-Omer' }, circumstance: 'Died in a monastery, some years after being deposed and tonsured by Pepin the Short.' },
    quickFacts: { realm: 'Kingdom of the Franks', dynasty: 'Merovingian (last)', culture: 'Frankish', knownFor: 'being the last Merovingian king, deposed by the Carolingians' },
    imageInfo: { caption: '"The Last of the Merovingians", a nineteenth-century painting by Évariste-Vital Luminais depicting the deposed Childeric III.', creator: 'Évariste-Vital Luminais', date: '19th century', source: 'Wikimedia Commons', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Beaux-Arts_de_Carcassonne_-_Le_dernier_des_Mérovingiens_-_Evariste-Vital_Luminais_-Joconde_04400000403.jpg', license: 'Public domain', note: 'A nineteenth-century history painting, not a contemporary likeness.' },
    overview: [
      'Childeric III was the last king of the Merovingian dynasty, which had ruled the Franks since the days of Clovis nearly three centuries before. He was a puppet from the start: raised to the throne in 743 by the Carolingian mayors of the palace, Pepin the Short and his brother Carloman, after the office had stood vacant for seven years, precisely because they needed a Merovingian figurehead to legitimise their own rule.',
      'By his reign the Merovingian kings had become mere ceremonial relics, "do-nothing kings" without lands, power, or authority, while the mayors governed. In 751, having consolidated his power and secured the blessing of the pope, Pepin the Short deposed Childeric, had him tonsured as a monk, and took the crown himself — ending the Merovingian line and beginning the Carolingian monarchy.'
    ],
    greatestFeats: ['Last Merovingian King of the Franks'],
    contentSections: [
      { title: 'Overview', paragraphs: [
        'Childeric III was the last king of the Merovingian dynasty, which had ruled the Franks since the days of Clovis nearly three centuries before. He was a puppet from the start: raised to the throne in 743 by the Carolingian mayors of the palace, Pepin the Short and his brother Carloman, after the office had stood vacant for seven years, precisely because they needed a Merovingian figurehead to legitimise their own rule.',
        'By his reign the Merovingian kings had become mere ceremonial relics, "do-nothing kings" without lands, power, or authority, while the mayors governed. In 751, having consolidated his power and secured the blessing of the pope, Pepin the Short deposed Childeric, had him tonsured as a monk, and took the crown himself — ending the Merovingian line and beginning the Carolingian monarchy.'
      ]},
      { title: 'Birth and elevation', paragraphs: [
        'Childeric was born about 717, a Merovingian of uncertain parentage — later doubts even questioned whether he truly belonged to the royal line. For seven years after 737 the Frankish throne had simply stood empty, the mayors ruling without a king; but in 743 Pepin the Short and Carloman, needing the sanction that only an anointed Merovingian could give, found Childeric and set him on the throne.'
      ]},
      { title: 'Character and Personality', paragraphs: [
        'Childeric III has no recorded character worth the name, and that is precisely the point of him: he was chosen to be a nonentity. The whole Merovingian kingship had by his day been reduced, in the famous description of Einhard, to a king who did nothing but sit on the throne with his long hair and flowing beard, receive ambassadors, and give the answers he had been taught, possessing nothing of his own but an empty title and a precarious income.',
        'Childeric embodied this hollowed-out royalty completely. He was a figurehead lifted from obscurity to lend the mask of legitimacy to the men who really ruled, and then discarded when he was no longer needed. His historical significance lies entirely in his deposition — the moment when the Carolingians judged the Merovingian fiction no longer worth maintaining and swept it away.'
      ]},
      { title: 'The end of the Merovingians', paragraphs: [
        'For eight years Childeric reigned as the last Merovingian, a ceremonial king while Pepin the Short governed as mayor of the palace. But Pepin, now sole master of the Franks, wished for the reality and the name of kingship to coincide. He appealed to Pope Zacharias with the pointed question of whether it was right that a man with no power should bear the royal title — and the pope answered that he who held the power should also be king.',
        'With that sanction, in 751 Pepin deposed Childeric. The last Merovingian was shorn of his long royal hair — the symbol of his sacred kingship — and shut up in a monastery, while Pepin was raised on the shield and anointed king of the Franks, founding the Carolingian dynasty.'
      ]},
      { title: 'Death', paragraphs: [
        'Childeric lived out his remaining years as a monk and died about 754. His young son Theuderic was likewise tonsured, extinguishing the direct Merovingian line.'
      ]},
      { title: 'Legacy', paragraphs: [
        'Childeric III is remembered as the last of the Merovingians, the dynasty that had founded the Frankish kingdom under Clovis. His deposition in 751 was one of the great turning points of early medieval history: it transferred the Frankish crown to the Carolingians, bound the new dynasty to the papacy that had blessed the change, and set in motion the chain of events that would lead to Charlemagne\'s empire and the shape of medieval Europe.'
      ]}
    ],
    keyAchievements: [
      { title: 'Last Merovingian King of the Franks', description: 'Reigned 743–751 as a figurehead for the Carolingian mayors.' }
    ],
    timeline: [
      { date: 'c. 717', title: 'Born', description: 'Born a Merovingian of uncertain parentage.' },
      { date: '743', title: 'Raised to the throne', description: 'Set on the throne by Pepin the Short and Carloman after a seven-year vacancy.', links: [FR] },
      { date: '743–751', title: 'A figurehead king', description: 'Reigns as a powerless ceremonial king while the mayors govern.' },
      { date: '751', title: 'Deposed by Pepin the Short', description: 'Deposed, tonsured, and shut in a monastery as Pepin takes the crown.', links: [per('pepin-the-short', 'Pepin the Short', 'Who deposed him and became king')] },
      { date: 'c. 754', title: 'Dies in a monastery', description: 'Dies a monk; the direct Merovingian line is extinguished.' }
    ],
    relatedEntries: {
      locations: [ { ...FR, label: 'The Frankish kingdom he nominally ruled' } ],
      people: [ per('pepin-the-short', 'Pepin the Short', 'Who deposed him and founded the Carolingian monarchy'), per('charles-martel', 'Charles Martel', 'The mayor whose sons controlled him') ],
      events: []
    },
    sources: [ src('Childeric III | Merovingian king', 'https://www.britannica.com/biography/Childeric-III'), src('Merovingian dynasty', 'https://www.britannica.com/topic/Merovingian-dynasty') ],
    isRuler: true,
    succession: { office: 'King of the Franks',
      predecessor: { displayName: 'Theuderic IV', note: 'The previous Merovingian king; after a seven-year vacancy of the throne, Childeric was raised up as the last of the line.' },
      successor: { personSlug: 'pepin-the-short', displayName: 'Pepin the Short', note: 'The mayor of the palace who deposed Childeric in 751 and took the crown, founding the Carolingian dynasty.' } }
  },

  // ── LOTHAIR I ─────────────────────────────────────────────────────────────────
  {
    id: 'lothair-i', type: 'character', name: 'Lothair I', born: 795, died: 855,
    deathAge: 'about 60', causeOfDeath: 'Illness, as a monk', restingPlace: 'Prüm Abbey',
    location: 'Frankish Empire', aliases: ['Lothair I', 'Lothar I', 'Lothaire'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/fb/Lothar_I.jpg',
    summary: 'Carolingian emperor (817/840–855) whose wars against his brothers ended in the Treaty of Verdun, which partitioned Charlemagne\'s empire and shaped the map of Europe.',
    title: 'Emperor of the Franks', roles: ['Holy Roman Emperor', 'King of Middle Francia'],
    birth: { date: '795', place: { name: 'Frankish Empire' }, note: 'Eldest son of Louis the Pious; grandson of Charlemagne.' },
    death: { date: '29 September 855', place: { name: 'Prüm' }, circumstance: 'Died as a monk at Prüm, days after abdicating and dividing his realm among his sons.' },
    quickFacts: { realm: 'Frankish Empire (Middle Francia)', dynasty: 'Carolingian', culture: 'Frankish', knownFor: 'the civil wars and the Treaty of Verdun that split Charlemagne\'s empire' },
    imageInfo: { caption: 'The emperor Lothair I, from the ninth-century Gospels of Lothair.', creator: 'Carolingian manuscript illuminator', date: 'c. 840s', source: 'Wikimedia Commons', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Lothar_I.jpg', license: 'Public domain', note: 'A contemporary manuscript portrait of the emperor.' },
    overview: [
      'Lothair I was Carolingian emperor from 840 to 855, the eldest son of Louis the Pious and grandson of Charlemagne. Made co-emperor and heir to the whole empire by his father in 817, he spent his life fighting to preserve that inheritance intact against his father and his brothers, who each sought a share of the vast realm.',
      'The struggle culminated after Louis the Pious\'s death in a civil war among the brothers, in which Lothair was defeated at the great Battle of Fontenoy in 841. The Treaty of Verdun in 843 then partitioned the empire: Lothair kept the imperial title and a long central strip — the "Middle Kingdom" running from the North Sea through Lotharingia to Italy — while his brothers took the eastern and western Frankish lands that would become Germany and France.'
    ],
    greatestFeats: ['Carolingian Emperor', 'King of Middle Francia', 'A principal in the Treaty of Verdun (843)'],
    contentSections: [
      { title: 'Overview', paragraphs: [
        'Lothair I was Carolingian emperor from 840 to 855, the eldest son of Louis the Pious and grandson of Charlemagne. Made co-emperor and heir to the whole empire by his father in 817, he spent his life fighting to preserve that inheritance intact against his father and his brothers, who each sought a share of the vast realm.',
        'The struggle culminated after Louis the Pious\'s death in a civil war among the brothers, in which Lothair was defeated at the great Battle of Fontenoy in 841. The Treaty of Verdun in 843 then partitioned the empire: Lothair kept the imperial title and a long central strip — the "Middle Kingdom" running from the North Sea through Lotharingia to Italy — while his brothers took the eastern and western Frankish lands that would become Germany and France.'
      ]},
      { title: 'Birth and early life', paragraphs: [
        'Lothair was born in 795, the eldest son of Louis the Pious and grandson of Charlemagne. In 817 his father issued the Ordinatio Imperii, making Lothair co-emperor and principal heir, with his younger brothers to hold subordinate kingdoms — an attempt to keep the empire united under one supreme ruler. Lothair was also given the kingdom of Italy.',
        'But Louis the Pious\'s later attempts to provide for a son by his second marriage, Charles the Bald, upset this settlement and set the family at war.'
      ]},
      { title: 'Character and Personality', paragraphs: [
        'Lothair I is remembered as an able but rigid and often overbearing prince, fiercely attached to the principle of imperial unity — and to his own supremacy within it. As the designated heir to the whole empire, he defended that inheritance with determination and no little ruthlessness, repeatedly rebelling against his own father when the succession was altered, and warring on his brothers to hold the empire together under his crown.',
        'That attachment to unity was both his cause and his limitation: he could not accept the partition of Charlemagne\'s legacy, yet he lacked the power to prevent it, and his defeats forced him to the very division he had fought to avoid. In his later years he grew weary of the struggle, and his final act — abdicating to die a monk after dividing his own realm among his sons — has an air of resignation. He appears as the last serious champion of a united Carolingian empire, defeated by the centrifugal forces of his house.'
      ]},
      { title: 'Civil war and the Treaty of Verdun', paragraphs: [
        'On Louis the Pious\'s death in 840, Lothair claimed authority over the whole empire as emperor, but his brothers Louis the German and Charles the Bald resisted. In 841 the two younger brothers combined and crushed Lothair at the bloody Battle of Fontenoy; the following year they sealed their alliance with the famous Oaths of Strasbourg.',
        'Unable to impose his will, Lothair came to terms. By the Treaty of Verdun in 843, the empire was divided into three: Charles the Bald received the western lands (the kernel of France), Louis the German the eastern (the kernel of Germany), and Lothair kept the imperial title together with a long, awkward central kingdom stretching from Frisia and Lotharingia down through Burgundy to Italy.'
      ]},
      { title: 'Death', paragraphs: [
        'Worn out by decades of conflict, Lothair abdicated in 855, dividing his Middle Kingdom among his three sons — Italy and the imperial title to Louis II, Lotharingia to Lothair II, and Provence to Charles — and retired to the monastery of Prüm, where he died within days, on 29 September 855.'
      ]},
      { title: 'Legacy', paragraphs: [
        'Lothair I is remembered as the emperor whose wars and defeat brought about the Treaty of Verdun, the partition that shattered Charlemagne\'s empire and drew the first outlines of France and Germany. His own Middle Kingdom, a fragile band with no natural unity, soon fragmented — and the disputed lands of Lotharingia that bore his name would be fought over between its western and eastern neighbours for a thousand years. His reign marks the beginning of the political division of Western Europe.'
      ]}
    ],
    keyAchievements: [
      { title: 'Carolingian Emperor, 840–855', description: 'Held the imperial title after Louis the Pious.' },
      { title: 'The Treaty of Verdun, 843', description: 'A principal in the partition that split the Frankish empire in three.' },
      { title: 'King of the Middle Kingdom', description: 'Ruled the central strip from Frisia through Lotharingia to Italy.' }
    ],
    timeline: [
      { date: '795', title: 'Born', description: 'Born the eldest son of Louis the Pious, grandson of Charlemagne.', links: [per('charlemagne', 'Charlemagne', 'His grandfather')] },
      { date: '817', title: 'Made co-emperor and heir', description: 'His father\'s Ordinatio Imperii names him principal heir to the whole empire.', links: [per('louis-the-pious', 'Louis the Pious', 'His father')] },
      { date: '840', title: 'Becomes sole emperor', description: 'Claims authority over the whole empire on Louis the Pious\'s death.', links: [HRE] },
      { date: '841', title: 'Defeated at Fontenoy', description: 'Crushed by his brothers Louis the German and Charles the Bald.' },
      { date: '843', title: 'Treaty of Verdun', description: 'Accepts the partition of the empire, keeping the imperial title and Middle Francia.' },
      { date: '855', title: 'Abdicates and dies', description: 'Divides his realm among his sons, becomes a monk, and dies at Prüm.' }
    ],
    relatedEntries: {
      locations: [ { ...HRE, label: 'The empire he held' }, { ...FR, label: 'The western lands that split from his empire' } ],
      people: [ per('louis-the-pious', 'Louis the Pious', 'His father and predecessor'), per('charlemagne', 'Charlemagne', 'His grandfather, whose empire was partitioned') ],
      events: []
    },
    sources: [ src('Lothair I | Holy Roman emperor', 'https://www.britannica.com/biography/Lothair-I'), src('Treaty of Verdun', 'https://www.britannica.com/event/Treaty-of-Verdun') ],
    isRuler: true,
    succession: { office: 'Emperor of the Franks',
      predecessor: { personSlug: 'louis-the-pious', displayName: 'Louis the Pious', note: 'His father, whose death in 840 opened the civil war among his sons over the imperial inheritance.' },
      successor: { displayName: 'Louis II', note: 'His son, who inherited the imperial title and Italy when Lothair divided his Middle Kingdom among his sons in 855.' } }
  },

  // ── LOUIS V OF FRANCE ─────────────────────────────────────────────────────────
  {
    id: 'louis-v-of-france', type: 'character', name: 'Louis V of France', born: 967, died: 987,
    deathAge: 'about 20', causeOfDeath: 'Hunting accident', restingPlace: 'Saint-Corneille, Compiègne',
    location: 'Kingdom of France', aliases: ['Louis V', 'Louis the Do-Nothing', 'Louis le Fainéant'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Louis_V_of_France_in_the_Bibliotheque.jpg',
    summary: 'The last Carolingian king of West Francia (986–987), whose brief and barren reign ended in a fatal hunting accident, opening the throne to Hugh Capet.',
    title: 'King of the Franks', roles: ['King of West Francia'],
    birth: { date: 'c. 967', place: { name: 'West Francia' }, note: 'Son of Lothair, king of West Francia; the last Carolingian king.' },
    death: { date: '22 May 987', place: { name: 'Senlis' }, circumstance: 'Died in a hunting accident, childless, after a reign of about a year — the last Carolingian.' },
    quickFacts: { realm: 'Kingdom of West Francia', dynasty: 'Carolingian (last)', culture: 'Frankish', knownFor: 'being the last Carolingian king of France' },
    imageInfo: { caption: 'Louis V of France in a fourteenth-century manuscript.', creator: 'Unknown manuscript illuminator', date: 'between 1300 and 1340', source: 'Wikimedia Commons', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Louis_V_of_France_in_the_Bibliotheque.jpg', license: 'Public domain', note: 'A later manuscript depiction, not a likeness from life.' },
    overview: [
      'Louis V was the last Carolingian king of West Francia, reigning barely a year from 986 to 987. The son of King Lothair, he inherited a monarchy that had shrunk to little more than a royal title and a modest domain, overshadowed by the great princes of the realm — above all the powerful Robertian duke Hugh Capet.',
      'His short reign achieved nothing memorable, earning him the derisive byname "the Do-Nothing" (le Fainéant). In 987 he died in a hunting accident, still only about twenty and without a child to follow him. The great men of the kingdom then passed over his Carolingian uncle and elected Hugh Capet king — ending the Carolingian dynasty in France and beginning the Capetian.'
    ],
    greatestFeats: ['Last Carolingian King of West Francia'],
    contentSections: [
      { title: 'Overview', paragraphs: [
        'Louis V was the last Carolingian king of West Francia, reigning barely a year from 986 to 987. The son of King Lothair, he inherited a monarchy that had shrunk to little more than a royal title and a modest domain, overshadowed by the great princes of the realm — above all the powerful Robertian duke Hugh Capet.',
        'His short reign achieved nothing memorable, earning him the derisive byname "the Do-Nothing" (le Fainéant). In 987 he died in a hunting accident, still only about twenty and without a child to follow him. The great men of the kingdom then passed over his Carolingian uncle and elected Hugh Capet king — ending the Carolingian dynasty in France and beginning the Capetian.'
      ]},
      { title: 'Birth and early life', paragraphs: [
        'Louis was born about 967, the son of King Lothair of West Francia, the great-great-grandson of Charlemagne through the western Carolingian line. He was crowned co-king in his father\'s lifetime, in the family\'s custom, and briefly married to a much older noblewoman in a failed bid to gain a foothold in the south. On his father\'s death in 986 he succeeded as sole king.',
        'He inherited a crown whose real power had dwindled to almost nothing: the Carolingian kings of France now directly ruled little more than a few towns, while dukes and counts governed the great provinces as they pleased.'
      ]},
      { title: 'Character and Personality', paragraphs: [
        'Louis V left too slight a mark, in too short a reign, for much of his character to be known, and what tradition remembered of him was almost wholly negative — the "Do-Nothing" king who achieved nothing. He appears as a young man of no great ability or force, unable to arrest the long decline of Carolingian royal power or to master the mighty princes who had eclipsed the crown.',
        'His byname, unfair perhaps to so brief a reign, expressed a wider truth about the late West-Frankish Carolingians: kings in name whose authority had drained away to the great feudatories. Louis was the final, faded representative of a once-mighty house, and his chief significance is that his sudden, heirless death removed the last obstacle to the change of dynasty that his powerlessness had already made all but inevitable.'
      ]},
      { title: 'A brief and barren reign', paragraphs: [
        'Louis\'s single year as sole king was spent largely in the quarrels that had marked his father\'s reign, including renewed conflict with the bishop of Reims and manoeuvring against the ambitions of Hugh Capet, duke of the Franks, who was by now far more powerful than the king. Louis achieved nothing to reverse the crown\'s decline.',
        'The end came suddenly. In May 987, while hunting in the forest near Senlis, Louis fell from his horse and was killed — or died soon after of the injury — leaving no child and no direct heir but an uncle, Charles of Lorraine, whom the magnates distrusted.'
      ]},
      { title: 'Death and the change of dynasty', paragraphs: [
        'With Louis dead and childless, an assembly of the leading nobles and churchmen met to choose a king. They set aside his uncle Charles of Lorraine, the last male Carolingian claimant, and instead elected the powerful and capable Hugh Capet, duke of the Franks. Hugh was crowned in 987, founding the Capetian dynasty.'
      ]},
      { title: 'Legacy', paragraphs: [
        'Louis V is remembered as the last of the Carolingian kings of France, whose death without an heir brought to an end the dynasty of Charlemagne in the western Frankish lands. His passing marked one of the great dynastic turning points of European history: the accession of Hugh Capet and the beginning of the Capetian line, which would rule France, in its direct and collateral branches, for the next eight centuries.'
      ]}
    ],
    keyAchievements: [
      { title: 'Last Carolingian King of West Francia', description: 'Reigned 986–987 as the final king of Charlemagne\'s western line.' }
    ],
    timeline: [
      { date: 'c. 967', title: 'Born', description: 'Born the son of King Lothair of West Francia, of the Carolingian line.' },
      { date: 'c. 979', title: 'Crowned co-king', description: 'Anointed king alongside his father in the Carolingian manner.' },
      { date: '986', title: 'Becomes sole king', description: 'Succeeds his father Lothair to a much-diminished crown.', links: [FR] },
      { date: '986–987', title: 'A powerless reign', description: 'Achieves nothing against the great princes, earning the name "the Do-Nothing".' },
      { date: '22 May 987', title: 'Dies in a hunting accident', description: 'Dies childless; the magnates elect Hugh Capet, ending the Carolingians.', links: [per('hugh-capet', 'Hugh Capet', 'Elected king after his death')] }
    ],
    relatedEntries: {
      locations: [ { ...FR, label: 'His diminished kingdom' } ],
      people: [ per('hugh-capet', 'Hugh Capet', 'Elected king on his death, founding the Capetians'), per('charlemagne', 'Charlemagne', 'His ancestor, founder of the Carolingian line') ],
      events: []
    },
    sources: [ src('Louis V | king of France', 'https://www.britannica.com/biography/Louis-V-king-of-France'), src('Carolingian dynasty', 'https://www.britannica.com/topic/Carolingian-dynasty') ],
    isRuler: true,
    succession: { office: 'King of the Franks',
      predecessor: { displayName: 'Lothair of France', note: 'His father, the penultimate Carolingian king of West Francia, whom he succeeded in 986.' },
      successor: { personSlug: 'hugh-capet', displayName: 'Hugh Capet', note: 'Elected king by the magnates after Louis died childless, founding the Capetian dynasty and ending Carolingian rule in France.' } }
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
relink('charles-martel', 'predecessor', 'pepin-of-herstal', 'Pepin of Herstal', 'His father, who united the Frankish mayoralties and founded the family\'s power.')
relink('pepin-the-short', 'predecessor', 'childeric-iii', 'Childeric III', 'The last Merovingian king, whom Pepin deposed in 751 to take the crown.')
relink('louis-the-pious', 'successor', 'lothair-i', 'Lothair I', 'His eldest son, whose wars with his brothers led to the Treaty of Verdun.')
relink('hugh-capet', 'predecessor', 'louis-v-of-france', 'Louis V of France', 'The last Carolingian king, on whose childless death Hugh was elected, founding the Capetians.')

fs.writeFileSync(dataPath, JSON.stringify(data, null, 2))
console.log(`\nCarolingian added: ${added}, replaced: ${replaced}. Total: ${data.characters.length}`)
