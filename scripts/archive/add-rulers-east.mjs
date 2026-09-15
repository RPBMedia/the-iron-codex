// Batch 3: Byzantine (6) and Islamic-east (6) rulers needed as succession links.
import fs from 'node:fs'

const dataPath = new URL('../server/data/history.json', import.meta.url)
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'))
const fp = (n) => `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(n)}`
const pg = (n) => `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(n)}`
const P = (personSlug, displayName, note) => ({ personSlug, displayName, ...(note ? { note } : {}) })
const UN = (displayName, note) => ({ displayName, ...(note ? { note } : {}) })
const NONE = (displayName, note) => ({ status: 'none', displayName, note })

const people = [
  {
    id: 'constantine-x-doukas', type: 'character', name: 'Constantine X Doukas', aliases: ['Konstantinos X Doukas'],
    born: 1006, died: 1067, deathAge: 'about 61', causeOfDeath: 'Died of illness in Constantinople',
    restingPlace: 'Constantinople', location: 'Byzantine Empire',
    image: fp('Constantine_X_full_portrait.jpg'),
    imageInfo: { caption: 'Constantine X Doukas in imperial regalia, from contemporary Byzantine imagery.', creator: 'Byzantine artist', date: '11th century', source: 'Wikimedia Commons', sourceUrl: pg('Constantine_X_full_portrait.jpg'), note: 'Formal imperial iconography rather than a portrait from life.' },
    summary: 'Constantine X Doukas (1059–1067) let the Byzantine army decay while the Seljuk Turks probed Anatolia — the neglect that Manzikert would price four years after his death.',
    title: 'Byzantine emperor', roles: ['Byzantine Emperor'],
    birth: { date: 'c. 1006', place: 'Paphlagonia (probably)', note: 'Of the great civil-aristocratic Doukas family.' },
    death: { date: '23 May 1067', place: 'Constantinople', note: 'Left the empire to his young sons under Eudokia Makrembolitissa\'s regency.', circumstance: 'He bound Eudokia by oath not to remarry — an oath the Turkish emergency forced the patriarch to dissolve within the year.' },
    quickFacts: { realm: 'Byzantine Empire', dynasty: 'Doukas', culture: 'Byzantine Greek', knownFor: 'military neglect on the eve of the Seljuk crisis' },
    isRuler: true,
    succession: { office: 'Byzantine Emperor', predecessor: UN('Isaac I Komnenos', 'The soldier-emperor who abdicated to a monastery in 1059, persuaded to name Constantine his heir'), successor: P('romanos-iv-diogenes', 'Romanos IV Diogenes', 'The general Eudokia married to give the empire a sword') },
    overview: [
      'Constantine X was the civil establishment\'s emperor: a Doukas aristocrat raised to the purple in 1059 when Isaac I Komnenos, the reforming soldier, abdicated in illness and disillusion. The bureaucracy and the intellectuals — his patron was the philosopher-politician Michael Psellos — got the ruler they wanted.',
      'The army paid. Budgets were slashed, frontier corps disbanded, commands sold; and in his very reign the price appeared — Armenia\'s capital Ani fell to Alp Arslan in 1064, and Turkish raiders wintered inside Anatolia. He died in 1067 leaving boys, a bound widow, and a broken shield.'
    ],
    contentSections: [
      { title: 'Overview', paragraphs: [
        'Constantine X was the civil establishment\'s emperor: a Doukas aristocrat raised to the purple in 1059 when Isaac I Komnenos, the reforming soldier, abdicated in illness and disillusion. The bureaucracy and the intellectuals — his patron was the philosopher-politician Michael Psellos — got the ruler they wanted.',
        'The army paid. Budgets were slashed, frontier corps disbanded, commands sold; and in his very reign the price appeared — Armenia\'s capital Ani fell to Alp Arslan in 1064, and Turkish raiders wintered inside Anatolia. He died in 1067 leaving boys, a bound widow, and a broken shield.'
      ]},
      { title: 'Birth and early life', paragraphs: [
        'Born around 1006 into the Doukai — one of the oldest names of the Anatolian aristocracy, by his generation thoroughly domesticated into the capital\'s civil elite — Constantine rose through court dignities and a fortunate second marriage to Eudokia Makrembolitissa, niece of the patriarch Michael Keroularios.',
        'He backed Isaac Komnenos\'s military coup of 1057, and when Isaac\'s reforming zeal exhausted the establishment and his own health, Psellos engineered the succession: Isaac abdicated into a monastery in November 1059, and Constantine — the safe, senatorial choice — took the throne.'
      ]},
      { title: 'Character and Personality', paragraphs: [
        'Psellos\'s Chronographia, our fullest source, praises his friend and creature warmly — gentle, just, pious, a lover of learning and of legal niceties who would rather, he said, be remembered as a man of letters than as emperor — and the praise damns him. Even Psellos concedes the military men despised the regime; the historian Attaleiates, who watched the eastern collapse, is openly contemptuous of an emperor who economised on soldiers while multiplying court stipends.',
        'His obsessive dynasticism completed the damage: crowning his small sons, exacting the famous oath from Eudokia never to remarry, binding the senate to his children — arrangements designed to keep the Doukai in power, which they did, at the cost of paralysing the empire\'s response in the crisis years that followed.'
      ]},
      { title: 'Reign', paragraphs: [
        'The reign\'s ledger is short on events and long on erosion: the Hungarian capture of Belgrade, the Uze crossing of the Danube in 1064 bought off with gold and smallpox, and in the east the methodical Seljuk advance — Ani sacked in 1064, Caesarea plundered by Turkish bands operating hundreds of miles inside the frontier. The tagmatic field armies shrank as pay and rolls were cut; Armenian buffer principalities, annexed by his predecessors, were left ungarrisoned.',
        'When he died on 23 May 1067 the establishment attempted government by regency — Eudokia and the children, Psellos advising — but within months the scale of the Turkish emergency forced the capital to accept what Constantine had tried to forbid: the empress\'s remarriage to a fighting general, Romanos Diogenes.'
      ]},
      { title: 'Legacy', paragraphs: [
        'Manzikert happened in 1071, but the historians who lived through it — Attaleiates above all — dated the disaster from Constantine\'s economies: the army Romanos led east was, they insist, a shadow force of unpaid veterans and raw hirelings precisely because of the Doukas decade. Modern Byzantinists broadly concur that the 1060s neglect, more than the battle itself, opened Anatolia.',
        'His dynasty outlived his empire\'s heartland: the Doukai supplied the next emperor but one, married into the Komnenoi, and their name ran on in the aristocracy for centuries — the family project succeeding exactly as the imperial one failed.'
      ]}
    ],
    timeline: [
      { date: 'c. 1006', title: 'Born', description: 'Into the civil-aristocratic branch of the Doukas family.' },
      { date: '1057–1059', title: 'Ally of Isaac Komnenos', description: 'Supports the military coup, then inherits the throne when Isaac abdicates.' },
      { date: '24 November 1059', title: 'Crowned emperor', description: 'The civil establishment\'s candidate, sponsored by Michael Psellos.' },
      { date: '1064', title: 'Ani falls', description: 'Alp Arslan sacks the Armenian capital while the eastern armies wither.' },
      { date: '1065', title: 'Uze invasion', description: 'A Danube crossing by the Uzes is survived by luck, plague, and payment rather than force.' },
      { date: '23 May 1067', title: 'Dies', description: 'Leaves child heirs and a sworn widow; the Turkish emergency breaks the arrangement within months.' }
    ],
    relatedEntries: {
      people: [
        { title: 'Romanos IV Diogenes', type: 'person', slug: 'romanos-iv-diogenes', label: 'The soldier who inherited his neglected army' },
        { title: 'Alp Arslan', type: 'person', slug: 'alp-arslan', label: 'The Seljuk sultan who took Ani in his reign' },
        { title: 'Michael VII Doukas', type: 'person', slug: 'michael-vii-doukas', label: 'Son' }
      ],
      locations: [ { title: 'Byzantine Empire', type: 'location', slug: 'byzantine-empire' } ],
      events: [ { title: 'Battle of Manzikert', type: 'event', slug: 'battle-of-manzikert', label: 'The reckoning his economies prepared' } ]
    },
    sources: [
      { title: 'Wikimedia Commons image record', author: 'Wikimedia Commons', type: 'image source', url: pg('Constantine_X_full_portrait.jpg') },
      { title: 'Constantine X Doukas — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Constantine_X_Doukas' },
      { title: 'Michael Psellos, Chronographia; Michael Attaleiates, History', author: 'Psellos; Attaleiates', type: 'primary source', note: 'The two contemporary, opposed verdicts on the reign.' }
    ]
  },
  {
    id: 'michael-vii-doukas', type: 'character', name: 'Michael VII Doukas', aliases: ['Michael Parapinakes'],
    born: 1050, died: 1090, deathAge: 'about 40', causeOfDeath: 'Died a monk in Constantinople, years after his deposition',
    restingPlace: 'Constantinople', location: 'Byzantine Empire',
    image: fp('Michael_VII_Doukas_from_the_Khakhuli_Triptych.png'),
    imageInfo: { caption: 'Michael VII Doukas on a cloisonné enamel plaque from the Khakhuli Triptych.', creator: 'Byzantine enamellist', date: '11th century', source: 'Khakhuli Triptych, Georgian National Museum — via Wikimedia Commons', sourceUrl: pg('Michael_VII_Doukas_from_the_Khakhuli_Triptych.png'), note: 'A contemporary enamel in formal imperial iconography.' },
    summary: 'Michael VII "Parapinakes" (1071–1078), enthroned by the faction that betrayed Romanos IV after Manzikert, presided over the currency\'s collapse and the effective loss of Anatolia to the Turks.',
    title: 'Byzantine emperor', roles: ['Byzantine Emperor'],
    birth: { date: 'c. 1050', place: 'Constantinople', note: 'Eldest son of Constantine X and Eudokia Makrembolitissa.' },
    death: { date: 'c. 1090', place: 'Constantinople', note: 'Deposed in 1078, he ended as a monk and titular metropolitan of Ephesus.', circumstance: 'His derisive byname — "minus a quarter" — recorded the debased measure of wheat his inflation bought.' },
    quickFacts: { realm: 'Byzantine Empire', dynasty: 'Doukas', culture: 'Byzantine Greek', knownFor: 'the post-Manzikert collapse and the debasement nicknamed after him' },
    isRuler: true,
    succession: { office: 'Byzantine Emperor', predecessor: P('romanos-iv-diogenes', 'Romanos IV Diogenes', 'Betrayed after Manzikert by the Doukas faction that ruled through Michael'), successor: P('nikephoros-iii-botaneiates', 'Nikephoros III Botaneiates', 'The aged general whose revolt ended the regime in 1078') },
    overview: [
      'Michael VII wore the crown while other men wore the power: his uncle the Caesar John Doukas and the eunuch-logothete Nikephoritzes ran the state that had blinded Romanos IV rather than honour his treaty with the Seljuks — a betrayal that gave Alp Arslan\'s Turks a grievance and a license.',
      'In his seven years the nomisma\'s gold content fell to open fraud (his nickname, "Parapinakes", priced it), Norman mercenaries carved a private state in Anatolia, the Balkans revolted, and Turkish war-bands moved from raiding Anatolia to garrisoning it. Two military revolts converged on the capital in 1078; Michael abdicated into a monastery.'
    ],
    contentSections: [
      { title: 'Overview', paragraphs: [
        'Michael VII wore the crown while other men wore the power: his uncle the Caesar John Doukas and the eunuch-logothete Nikephoritzes ran the state that had blinded Romanos IV rather than honour his treaty with the Seljuks — a betrayal that gave Alp Arslan\'s Turks a grievance and a license.',
        'In his seven years the nomisma\'s gold content fell to open fraud (his nickname, "Parapinakes", priced it), Norman mercenaries carved a private state in Anatolia, the Balkans revolted, and Turkish war-bands moved from raiding Anatolia to garrisoning it. Two military revolts converged on the capital in 1078; Michael abdicated into a monastery.'
      ]},
      { title: 'Birth and early life', paragraphs: [
        'Born around 1050 to Constantine X and Eudokia, Michael was crowned co-emperor as a child within his father\'s dynastic fortifications, and educated by Michael Psellos himself — an education, Psellos boasts, in philosophy, rhetoric, and verse. Even the flatterer admits his pupil preferred iambics to administration.',
        'He was senior emperor in name from 1067, shelved during his stepfather Romanos IV\'s war-regime, and restored to the front of the coinage by the coup of 1071, when the Doukai used Manzikert to destroy Romanos — repudiating his treaty, defeating him in the field, and blinding him with a brutality that killed him.'
      ]},
      { title: 'Character and Personality', paragraphs: [
        'The sources converge from opposite directions: Psellos\'s affectionate portrait of a gentle, bookish, abstemious prince who wrote poetry and shrank from decisions is, in Attaleiates\'s hostile telling, the same man seen plainly — passive, pliable, absorbed in trifles while the logothete sold offices and cornered the grain trade. Neither historian records of him a single act of cruelty; neither records an act of will.',
        'Byzantines, who expected emperors to be either terrible or holy, found something contemptible in mere harmlessness at the head of a collapsing state; the market nickname Parapinakes — the emperor of the short measure — is the populace\'s one-word character sketch, and it stuck for good.'
      ]},
      { title: 'Reign', paragraphs: [
        'The regime\'s original sin — the destruction of Romanos rather than the ransom of Anatolia — dictated everything after. Freed from the treaty, the Turks raided as conquerors; the Norman condottiere Roussel de Bailleul turned his contract army into a personal principality in Galatia, and the government, unable to defeat him, invited the Seljuks deeper in to do it — hiring the wolf against the dog. The young Alexios Komnenos\'s capture of Roussel in 1076 was the one clean success, and it announced the family that would inherit the wreck.',
        'Nikephoritzes\'s fiscal machine — state grain monopoly at Rhaidestos, sold offices, and a nomisma debased toward one-third alloy — financed the court while it burned the currency\'s thousand-year credit. By 1077 revolts rose east (Botaneiates) and west (Bryennios); the capital\'s guilds and clergy declared for Botaneiates, and on 31 March 1078 Michael exchanged the purple for a monk\'s habit at Stoudios, ending as titular metropolitan of Ephesus — "more suited", Attaleiates sneers, "to that dignity than to empire".'
      ]},
      { title: 'Legacy', paragraphs: [
        'Michael\'s reign fixed the scale of the Manzikert disaster: it was in the 1070s, not in 1071, that Anatolia — the empire\'s granary and recruiting ground for seven centuries — actually slipped away, as Turkish bands invited against rebels stayed as masters. When Alexios I took power in 1081 the empire was, in effect, a Balkan state with a great city attached.',
        'The debasement bearing his nickname became the textbook case of Byzantine fiscal collapse, undone only by Alexios\'s currency reform a generation later. His marriage alliance — his son by Maria of Alania betrothed into the Komnenian settlement — let the Doukas blood flow on into the dynasty that replaced him.'
      ]}
    ],
    timeline: [
      { date: 'c. 1050', title: 'Born in the purple', description: 'Eldest son of Constantine X and Eudokia Makrembolitissa.' },
      { date: '1067–1071', title: 'Emperor in name', description: 'Nominal senior emperor through his stepfather Romanos IV\'s war-regime.' },
      { date: '1071–1072', title: 'The Doukas coup', description: 'After Manzikert his faction repudiates the treaty and blinds Romanos; Michael rules alone in name.' },
      { date: '1074–1076', title: 'Roussel\'s Norman state', description: 'A mercenary principality in Galatia is broken only by hiring the Seljuks and by Alexios Komnenos.' },
      { date: '1070s', title: 'The Parapinakes inflation', description: 'The gold nomisma is debased toward a third alloy; the wheat measure shrinks by a quarter.' },
      { date: '31 March 1078', title: 'Abdicates', description: 'Botaneiates\'s revolt takes the capital; Michael becomes a monk at Stoudios.' }
    ],
    relatedEntries: {
      people: [
        { title: 'Romanos IV Diogenes', type: 'person', slug: 'romanos-iv-diogenes', label: 'Stepfather, destroyed by Michael\'s faction' },
        { title: 'Constantine X Doukas', type: 'person', slug: 'constantine-x-doukas', label: 'Father' },
        { title: 'Nikephoros III Botaneiates', type: 'person', slug: 'nikephoros-iii-botaneiates', label: 'Successor by revolt' }
      ],
      locations: [ { title: 'Byzantine Empire', type: 'location', slug: 'byzantine-empire' } ],
      events: [ { title: 'Battle of Manzikert', type: 'event', slug: 'battle-of-manzikert', label: 'The defeat his faction converted into catastrophe' } ]
    },
    sources: [
      { title: 'Wikimedia Commons image record — Khakhuli enamel', author: 'Wikimedia Commons', type: 'image source', url: pg('Michael_VII_Doukas_from_the_Khakhuli_Triptych.png') },
      { title: 'Michael VII Doukas — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Michael_VII_Doukas' },
      { title: 'Michael Attaleiates, History', author: 'Michael Attaleiates', type: 'primary source', note: 'Contemporary account, sharply hostile to the regime.' }
    ]
  },
  {
    id: 'nikephoros-iii-botaneiates', type: 'character', name: 'Nikephoros III Botaneiates', aliases: ['Nicephorus III'],
    born: 1002, died: 1081, deathAge: 'about 79', causeOfDeath: 'Died a monk shortly after his deposition by Alexios Komnenos',
    restingPlace: 'Monastery of the Peribleptos, Constantinople', location: 'Byzantine Empire',
    image: fp('Nikephoros_III.jpg'),
    imageInfo: { caption: 'Nikephoros III Botaneiates enthroned, from a contemporary illuminated manuscript of his reign.', creator: 'Constantinopolitan illuminator', date: 'c. 1078–1081', source: 'Bibliothèque nationale de France, Ms. Coislin 79 — via Wikimedia Commons', sourceUrl: pg('Nikephoros_III.jpg'), note: 'A genuinely contemporary imperial image, made for the emperor himself.' },
    summary: 'Nikephoros III Botaneiates, an aged Anatolian general, seized the throne from Michael VII in 1078 and held it three chaotic years before the Komnenoi took it from him in 1081.',
    title: 'Byzantine emperor', roles: ['Byzantine Emperor'],
    birth: { date: 'c. 1002', place: 'Anatolia', note: 'Of the military aristocracy; a veteran of half a century of campaigns.' },
    death: { date: 'late 1081', place: 'Constantinople', note: 'Deposed on Easter Day 1081, he died a monk within the year.', circumstance: 'Asked what he minded most in his fall, he reportedly answered: abstinence from meat.' },
    quickFacts: { realm: 'Byzantine Empire', dynasty: 'Botaneiates (transitional)', culture: 'Byzantine Greek', knownFor: 'the coup of 1078 and being supplanted by Alexios Komnenos' },
    isRuler: true,
    succession: { office: 'Byzantine Emperor', predecessor: P('michael-vii-doukas', 'Michael VII Doukas', 'Abdicated into a monastery as the revolts closed in'), successor: P('alexios-i-komnenos', 'Alexios I Komnenos', 'Whose army took the city on Easter Day 1081') },
    overview: [
      'Nikephoros Botaneiates was past seventy-five when he raised his revolt at Nicaea in 1077 — a grandee of the Anatolian military class with fifty years of service from the Pecheneg wars to Manzikert\'s aftermath. The capital, sick of the Doukas regime, opened its gates by acclamation in March 1078.',
      'His reign was a coda played too late: three years of blinding rivals, emptying the treasury with donatives, and marrying Michael VII\'s living wife, while the young Komnenoi generals won his battles for him. On Easter Day 1081 Alexios Komnenos\'s troops sacked their way into the city, and the old man exchanged the purple for the habit without a fight.'
    ],
    contentSections: [
      { title: 'Overview', paragraphs: [
        'Nikephoros Botaneiates was past seventy-five when he raised his revolt at Nicaea in 1077 — a grandee of the Anatolian military class with fifty years of service from the Pecheneg wars to Manzikert\'s aftermath. The capital, sick of the Doukas regime, opened its gates by acclamation in March 1078.',
        'His reign was a coda played too late: three years of blinding rivals, emptying the treasury with donatives, and marrying Michael VII\'s living wife, while the young Komnenoi generals won his battles for him. On Easter Day 1081 Alexios Komnenos\'s troops sacked their way into the city, and the old man exchanged the purple for the habit without a fight.'
      ]},
      { title: 'Birth and early life', paragraphs: [
        'Born around 1002 into the Botaneiatai — Anatolian military aristocracy whose court genealogists, once he was emperor, obligingly traced him to the ancient Phokades — Nikephoros served through the eleventh-century army\'s whole arc of glory and decay: against the Pechenegs in the 1040s (where his fighting retreat saved a broken army), at the side of Isaac Komnenos\'s coup in 1057, as governor in the Balkans and Anatolia.',
        'Passed over repeatedly for the throne he thought his due — Eudokia had considered him for the marriage that went to Romanos Diogenes — he watched the Parapinakes regime lose his native Anatolia, and in October 1077, as strategos of the Anatolic theme, had himself proclaimed emperor, reaching Nicaea with Turkish auxiliaries hired from the very enemy.'
      ]},
      { title: 'Character and Personality', paragraphs: [
        'The paradox of Botaneiates is that our fullest praise of him — Attaleiates\'s History, dedicated to him — and our sharpest mockery — Anna Komnene\'s Alexiad, written for the family that deposed him — describe recognisably the same man from opposite motives: personally brave, open-handed to the point of fiscal ruin, courteous, and simply too old. Anna grants the fine soldierly presence and notes the exhaustion behind it.',
        'The reign\'s conduct shows an old campaigner\'s instincts without an old statesman\'s: rivals blinded promptly (Bryennios, Basilakes — by his Komnenos generals\' hands), the treasury poured out in ranks and stipends to buy the capital\'s love, and the scandalous third marriage — to Maria of Alania, whose husband Michael VII lived as a monk — accepted for dynastic cover. Contemporaries read it as the establishment\'s last, cynical improvisation; within three years the improvisers themselves went over to Alexios.'
      ]},
      { title: 'Reign and fall', paragraphs: [
        'Every month of the reign burned inheritance: the donatives and promotions emptied what Nikephoritzes\'s extortions had gathered; Anatolia, garrisoned by the Turkish "allies" of the civil wars, slid finally out of imperial administration — by 1081 Suleiman ibn Qutalmish sat at Nicaea itself, across the water from the capital. The rebellions of Bryennios and Basilakes in the Balkans were crushed for him by the young Alexios Komnenos, each victory raising the general the throne could not afford to reward enough.',
        'When the childless old man let the succession drift toward a favourite, the Komnenoi struck first, with the Doukai — their in-laws — behind them. Alexios\'s army entered Constantinople through a suborned gate on 1 April 1081 and sacked its own capital for a day; Botaneiates, refusing to let more blood be shed for him, walked to the Peribleptos monastery and took the tonsure.'
      ]},
      { title: 'Legacy', paragraphs: [
        'Botaneiates closed the eleventh-century carousel of short-reigned soldier-emperors, and his failure defined his successor\'s programme: everything Alexios I built — the family-consortium government, the new coinage, the western alliances — answered deficiencies Botaneiates\'s three years had made undeniable.',
        'He survives best in art history: the Coislin 79 manuscript\'s portraits of him enthroned amid his court are among the finest imperial images Byzantium ever produced — painted, with perfect period irony, for a reign the texts remember as bankruptcy.'
      ]}
    ],
    timeline: [
      { date: 'c. 1002', title: 'Born', description: 'Into the Anatolian military aristocracy.' },
      { date: '1040s–1060s', title: 'Half a century of service', description: 'Distinguished against the Pechenegs, in the 1057 coup, and in Balkan and Anatolian commands.' },
      { date: 'October 1077', title: 'Revolt at Nicaea', description: 'Proclaimed emperor by the Anatolian armies, with hired Turkish support.' },
      { date: '27 March 1078', title: 'Enters Constantinople', description: 'The capital deserts Michael VII; Botaneiates is crowned and marries Maria of Alania.' },
      { date: '1078–1080', title: 'Rebellions crushed by proxy', description: 'Alexios Komnenos defeats Bryennios and Basilakes for the old emperor.' },
      { date: '1 April 1081', title: 'Deposed', description: 'The Komnenian coup takes the city on Easter Day; he retires to the Peribleptos as a monk and dies within the year.' }
    ],
    relatedEntries: {
      people: [
        { title: 'Michael VII Doukas', type: 'person', slug: 'michael-vii-doukas', label: 'Predecessor, deposed by his revolt' },
        { title: 'Alexios I Komnenos', type: 'person', slug: 'alexios-i-komnenos', label: 'The general who served, then supplanted him' },
        { title: 'Anna Komnene', type: 'person', slug: 'anna-komnene', label: 'Whose Alexiad preserved his portrait in defeat' }
      ],
      locations: [ { title: 'Byzantine Empire', type: 'location', slug: 'byzantine-empire' } ],
      events: [ { title: 'Battle of Manzikert', type: 'event', slug: 'battle-of-manzikert', label: 'The catastrophe whose aftershocks carried him to power' } ]
    },
    sources: [
      { title: 'Wikimedia Commons image record — Coislin 79', author: 'Wikimedia Commons', type: 'image source', url: pg('Nikephoros_III.jpg') },
      { title: 'Nikephoros III Botaneiates — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Nikephoros_III_Botaneiates' },
      { title: 'Anna Komnene, The Alexiad', author: 'Anna Komnene', type: 'primary source', note: 'The Komnenian account of his reign and deposition.' }
    ]
  },
  {
    id: 'john-ii-komnenos', type: 'character', name: 'John II Komnenos', aliases: ['John the Good', 'Kaloïōannēs'],
    born: 1087, died: 1143, deathAge: '55', causeOfDeath: 'Septicaemia from a hand wound by a poisoned arrow, in a hunting accident on campaign in Cilicia',
    restingPlace: 'Monastery of Christ Pantokrator, Constantinople', location: 'Byzantine Empire',
    image: fp('Jean_II_Comnene.jpg'),
    imageInfo: { caption: 'John II Komnenos in the mosaic panel of Hagia Sophia, made in his own reign.', creator: 'Byzantine mosaicist', date: 'c. 1118–1122', source: 'Hagia Sophia, Istanbul — via Wikimedia Commons', sourceUrl: pg('Jean_II_Comnene.jpg'), note: 'A contemporary mosaic portrait from the emperor\'s lifetime.' },
    summary: 'John II Komnenos (1118–1143), "the Good", spent a quarter-century of annual campaigns rebuilding Byzantine power in the Balkans, Anatolia, and Syria — the finest soldier-emperor of the Komnenian restoration.',
    title: 'Byzantine emperor', roles: ['Byzantine Emperor'],
    birth: { date: '13 September 1087', place: 'Constantinople', note: 'Eldest son of Alexios I Komnenos and Irene Doukaina; born in the purple.' },
    death: { date: '8 April 1143', place: 'Cilicia', note: 'Died of a septic arrow-wound taken while boar-hunting during the Syrian campaign.', circumstance: 'On his deathbed he passed over his surviving elder son to designate the youngest, Manuel, before the army.' },
    quickFacts: { realm: 'Byzantine Empire', dynasty: 'Komnenos', culture: 'Byzantine Greek', knownFor: 'the Komnenian restoration at its height; annual campaigns for twenty-five years' },
    isRuler: true,
    succession: { office: 'Byzantine Emperor', predecessor: P('alexios-i-komnenos', 'Alexios I Komnenos', 'His father; John outmanoeuvred his mother and sister\'s cabal for Bryennios to take the throne'), successor: UN('Manuel I Komnenos', 'His youngest son, designated before the army in Cilicia') },
    overview: [
      'John II inherited his father\'s restored-but-fragile empire in 1118 — over the plots of his own mother and his sister Anna Komnene — and improved it methodically for twenty-five years: the Pechenegs annihilated at Beroia in 1122, Serbia and Hungary checked, Danishmend Anatolia rolled back, Cilicia conquered, and Antioch itself brought to homage in 1137.',
      'Even the hostile Latin chroniclers called him "the Good": pious without theatre, austere in a luxurious court, merciful past the point his officers approved. He died absurdly — a scratched hand from his own poisoned hunting arrows — planning the campaign that might have retaken Antioch outright.'
    ],
    contentSections: [
      { title: 'Overview', paragraphs: [
        'John II inherited his father\'s restored-but-fragile empire in 1118 — over the plots of his own mother and his sister Anna Komnene — and improved it methodically for twenty-five years: the Pechenegs annihilated at Beroia in 1122, Serbia and Hungary checked, Danishmend Anatolia rolled back, Cilicia conquered, and Antioch itself brought to homage in 1137.',
        'Even the hostile Latin chroniclers called him "the Good": pious without theatre, austere in a luxurious court, merciful past the point his officers approved. He died absurdly — a scratched hand from his own poisoned hunting arrows — planning the campaign that might have retaken Antioch outright.'
      ]},
      { title: 'Birth and early life', paragraphs: [
        'Born in the purple chamber in 1087, crowned co-emperor at five, John was the living pledge of the Komnenos-Doukas settlement. His accession in 1118 had to be seized rather than received: his mother Irene and sister Anna pressed the dying Alexios to prefer Anna\'s husband Nikephoros Bryennios, and John took the imperial signet from his father\'s deathbed — with, one account says, the dying man\'s connivance — and secured the palace before the funeral.',
        'Anna\'s conspiracy against him the next year ended with a clemency that shocked the age: estates confiscated, then largely returned; no blindings, no executions. The historian sister retired to a convent to write the Alexiad — and to omit her brother\'s reign from history.'
      ]},
      { title: 'Character and Personality', paragraphs: [
        'The sources — Choniates and Kinnamos looking back from Manuel\'s reign, and Latin writers like William of Tyre who had no reason to flatter — agree to a degree rare for any Byzantine emperor: Kaloïōannēs, John the Good, was the best man of his dynasty. Short, dark, and unbeautiful (the mosaic in Hagia Sophia is honest about this), he banned the court\'s luxuries at table, punished no one with death or mutilation in a quarter-century of reign — a record perhaps unique among emperors — and lived with his Hungarian empress Piroska-Irene in what even gossip conceded was fidelity.',
        'His one recorded vice was the family\'s: relentlessness. The army was his instrument and his home; he campaigned every year of his reign, drilled the new native regiments personally, and forgave Anna, his cousins, and captured enemies with the same efficiency with which he broke their plans. Choniates, no flatterer of Komnenoi, sums him as "the crown of all the emperors of the Komnenos line".'
      ]},
      { title: 'Reign', paragraphs: [
        'The pattern was annual and cumulative. In Europe: the Pecheneg horde that crossed the Danube in 1122 was destroyed at Beroia so completely that the people vanished from history — the Varangian Guard\'s axes breaking the wagon-fort — and Hungary and Serbia were fought and married into equilibrium. Venice extorted the renewal of its trade privileges by raiding the islands in 1126, a humiliation John absorbed and never forgot: the fleet he founded was his answer.',
        'In Asia the reconquest advanced from 1130: the Danishmend emirate beaten back after Melitene, Kastamonu and Gangra taken in the campaigns of 1132–1135, Cilician Armenia conquered outright in 1137 — and then the great demonstration before Antioch, where Raymond of Poitiers did homage and, in 1138, the emperor stormed Shaizar\'s outworks while his Latin vassals diced in their tents. The second Syrian expedition of 1142, aimed at making Antioch\'s submission real, was cut short by winter; the third never marched, because on 8 April 1143, in the Cilician hills, a poisoned arrow from his own quiver opened his hand as he hunted boar, and the sepsis killed him within days.'
      ]},
      { title: 'Legacy', paragraphs: [
        'John\'s deathbed choice — Manuel, the younger but abler son, invested before the army over his surviving elder brother — held, and gave the empire another forty Komnenian years. The Pantokrator monastery he and Irene founded in Constantinople, with its imperial mausoleum and its famous fifty-bed hospital regulated down to the doctors\' shifts, survives as the Zeyrek Mosque — the largest Byzantine building of its century.',
        'Historians\' verdict has generally followed Choniates\'s: the steadiest hand of the dynasty, whose patient reconstruction Manuel\'s brilliance would spend. What Manzikert had shattered, John came nearer than any emperor to restoring; the empire\'s twelfth-century weight in the world was substantially his work.'
      ]}
    ],
    timeline: [
      { date: '13 September 1087', title: 'Born in the purple', description: 'Eldest son of Alexios I and Irene Doukaina; crowned co-emperor as a child.' },
      { date: '15 August 1118', title: 'Takes the throne', description: 'Secures the palace against his mother and sister\'s party for Bryennios.' },
      { date: '1119', title: 'Anna\'s plot forgiven', description: 'The conspiracy is broken without a single execution or blinding.' },
      { date: '1122', title: 'Beroia', description: 'Annihilates the last Pecheneg horde; the "Pecheneg peril" ends forever.' },
      { date: '1132–1135', title: 'Anatolian reconquest', description: 'Kastamonu and Gangra fall as the Danishmends are driven back.' },
      { date: '1137–1138', title: 'Cilicia and Antioch', description: 'Conquers Cilician Armenia; Antioch does homage and Shaizar is stormed.' },
      { date: '8 April 1143', title: 'Dies in Cilicia', description: 'A septic wound from his own poisoned hunting arrow kills him; Manuel is designated before the army.' }
    ],
    relatedEntries: {
      people: [
        { title: 'Alexios I Komnenos', type: 'person', slug: 'alexios-i-komnenos', label: 'Father and predecessor' },
        { title: 'Anna Komnene', type: 'person', slug: 'anna-komnene', label: 'Sister, rival, and silent historian' }
      ],
      locations: [ { title: 'Byzantine Empire', type: 'location', slug: 'byzantine-empire' } ],
      events: [ { title: 'Battle of Manzikert', type: 'event', slug: 'battle-of-manzikert', label: 'The loss his dynasty spent three generations repairing' } ]
    },
    sources: [
      { title: 'Wikimedia Commons image record — Hagia Sophia mosaic', author: 'Wikimedia Commons', type: 'image source', url: pg('Jean_II_Comnene.jpg') },
      { title: 'John II Komnenos — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/John_II_Komnenos' },
      { title: 'Niketas Choniates, Historia; John Kinnamos, Epitome', author: 'Choniates; Kinnamos', type: 'primary source', note: 'The principal Greek narratives of the reign.' }
    ]
  },
  {
    id: 'john-viii-palaiologos', type: 'character', name: 'John VIII Palaiologos', aliases: ['Ioannes VIII'],
    born: 1392, died: 1448, deathAge: '55', causeOfDeath: 'Died in Constantinople, worn out, months after news of the crusade\'s defeat at Kosovo',
    restingPlace: 'Pantokrator Monastery, Constantinople', location: 'Byzantine Empire',
    image: fp('Palaio.jpg'),
    imageInfo: { caption: 'John VIII Palaiologos, from Pisanello\'s celebrated portrait medal made at the Council of Ferrara-Florence.', creator: 'Pisanello', date: '1438–1439', source: 'Wikimedia Commons', sourceUrl: pg('Palaio.jpg'), note: 'Drawn from life at the council; the most reliable likeness of any Byzantine emperor.' },
    summary: 'John VIII Palaiologos (1425–1448) ruled a Constantinople-sized empire and staked everything on church union at Florence (1439) to buy Western rescue — winning the union on paper, a doomed crusade in fact.',
    title: 'Byzantine emperor', roles: ['Byzantine Emperor'],
    birth: { date: '18 December 1392', place: 'Constantinople', note: 'Eldest son of Manuel II Palaiologos and Helena Dragaš.' },
    death: { date: '31 October 1448', place: 'Constantinople', note: 'Died childless; the crown passed to his brother Constantine, the last emperor.', circumstance: 'He outlived by weeks the news of Varna\'s sequel at Kosovo — the end of the rescue his union had been priced at.' },
    quickFacts: { realm: 'Byzantine Empire (Constantinople and the Morea)', dynasty: 'Palaiologos', culture: 'Byzantine Greek', knownFor: 'the Union of Florence and the last Western crusades for Byzantium' },
    isRuler: true,
    succession: { office: 'Byzantine Emperor', predecessor: UN('Manuel II Palaiologos', 'His father, who had toured the West begging aid a generation earlier'), successor: P('constantine-xi-palaiologos', 'Constantine XI', 'His brother, crowned at Mistra; the empire\'s last emperor') },
    overview: [
      'John VIII ruled an "empire" that was, by his accession in 1425, the city of Constantinople, a few islands, and the Morea — tribute-paying tenant of the Ottoman power that had already besieged it twice in his lifetime. Every policy reduced to one question: what would bring a Western army?',
      'His answer was the union of the churches, pursued personally: two years in Italy at Ferrara and Florence, and on 6 July 1439 the union decree read in Florence cathedral in Greek and Latin. The theological price split his church and city; the strategic payment — the crusade of Varna — died on the Black Sea coast in 1444, and with it the policy, the emperor\'s health, and the city\'s last real hope.'
    ],
    contentSections: [
      { title: 'Overview', paragraphs: [
        'John VIII ruled an "empire" that was, by his accession in 1425, the city of Constantinople, a few islands, and the Morea — tribute-paying tenant of the Ottoman power that had already besieged it twice in his lifetime. Every policy reduced to one question: what would bring a Western army?',
        'His answer was the union of the churches, pursued personally: two years in Italy at Ferrara and Florence, and on 6 July 1439 the union decree read in Florence cathedral in Greek and Latin. The theological price split his church and city; the strategic payment — the crusade of Varna — died on the Black Sea coast in 1444, and with it the policy, the emperor\'s health, and the city\'s last real hope.'
      ]},
      { title: 'Birth and early life', paragraphs: [
        'Born in 1392 to Manuel II and the Serbian princess Helena Dragaš, John grew up inside the siege: Bayezid I\'s blockade of Constantinople framed his childhood, his father\'s begging tour of Western courts (Paris, London) his boyhood, and the reprieve of Ankara — Timur\'s destruction of Bayezid in 1402 — his political education: the city\'s survival depended on others\' wars.',
        'As co-emperor and regent through the 1410s and early 1420s he backed the losing pretender in the Ottoman succession wars — a gamble that brought Murad II\'s siege of 1422 down on the city — and inherited sole rule in 1425 with the lesson learned: Byzantium could no longer even intrigue safely.'
      ]},
      { title: 'Character and Personality', paragraphs: [
        'Pisanello\'s medal and drawings from Florence — the pointed beard, the extraordinary hat, the melancholy hauteur — fixed John\'s face in European art for a century; Sphrantzes and the Greek memoirists fixed the man: intelligent, cultivated, personally imposing, a keen huntsman even in poverty, and possessed of a stubborn, joyless courage suited to a policy he knew his own people hated. At Florence he argued points of procedure and precedence for months — the beggar-emperor insisting on the purple.',
        'The union cost him what remained of comfort at home. Loukas Notaras\'s notorious verdict — sooner the sultan\'s turban than the cardinal\'s hat — spoke for the city; John\'s own confessor deserted the union; his empress Maria of Trebizond died of plague while he was defending it. Contemporaries and historians have read him either as the realist who tried the only card left, or as the emperor who bought a paper communion at the price of his church\'s unity on the eve of its martyrdom. Both readings agree he paid personally and without illusion.'
      ]},
      { title: 'Reign', paragraphs: [
        'The military reality was set early: the 1422 siege shown survivable only by luck, Thessalonica — sold to Venice in desperation — stormed by Murad II in 1430. The Morea, run by his brothers from Mistra, was the one province with life in it; the Hexamilion wall across the Isthmus, rebuilt at ruinous cost, was twice flattened by Ottoman armies almost in passing.',
        'The union project consumed the 1430s: the voyage to Italy (1437), the councils at Ferrara and then Florence, plague, penury, and the final decree — Laetentur caeli, 6 July 1439 — signed by all the Greek bishops but one, Mark of Ephesus, whose lone refusal became the Orthodox resistance\'s banner. The promised crusade marched in 1444: Hungary\'s Hunyadi and King Władysław III broke the truce of Szeged, and at Varna in November the king\'s head ended the campaign on an Ottoman lance. John, prudent to the last, sent Murad II congratulations; there was nothing else left to send. He died on 31 October 1448, weeks after Hunyadi\'s last field army was beaten at the second battle of Kosovo.'
      ]},
      { title: 'Legacy', paragraphs: [
        'The union of Florence was proclaimed in Hagia Sophia only in December 1452, to empty stalls and a hostile city, five months before the walls fell; as policy it had failed before it was ever enacted. Yet the Greek delegation\'s sojourn — Plethon lecturing Florence on Plato, Bessarion staying to become a Roman cardinal and the manuscripts\' great rescuer — seeded the Hellenic strand of the Italian Renaissance: the mission that failed to save Byzantium helped transplant it.',
        'Pisanello\'s profile of John became the West\'s stock image of imperial and exotic majesty, painted into Magi processions and bronze doors for generations. He left the crown to the brother who would die in the breach — the last transfer of the Roman succession, arranged, like everything in his reign, in the shadow of the end.'
      ]}
    ],
    timeline: [
      { date: '18 December 1392', title: 'Born', description: 'Eldest son of Manuel II Palaiologos and Helena Dragaš.' },
      { date: '1422', title: 'Murad II besieges the city', description: 'The price of backing a pretender; the walls hold one more time.' },
      { date: '1425', title: 'Sole emperor', description: 'Succeeds Manuel II as ruler of the city-state empire.' },
      { date: '1430', title: 'Thessalonica falls', description: 'The empire\'s second city, held by Venice, is stormed by Murad II.' },
      { date: '1437–1439', title: 'Ferrara and Florence', description: 'Leads the Greek church to Italy; the union decree is signed on 6 July 1439.' },
      { date: 'November 1444', title: 'Varna', description: 'The crusade bought by the union is destroyed; the policy dies with it.' },
      { date: '31 October 1448', title: 'Dies', description: 'Childless; Constantine XI, crowned at Mistra, inherits the last five years.' }
    ],
    relatedEntries: {
      people: [
        { title: 'Constantine XI Palaiologos', type: 'person', slug: 'constantine-xi-palaiologos', label: 'Brother and final successor' },
        { title: 'Mehmed II', type: 'person', slug: 'mehmed-ii', label: 'The conqueror whose accession he outlived by months in effect' }
      ],
      locations: [ { title: 'Byzantine Empire', type: 'location', slug: 'byzantine-empire' } ],
      events: [
        { title: 'Fall of Constantinople', type: 'event', slug: 'fall-of-constantinople', label: 'The end his diplomacy tried to forestall' },
        { title: 'Battle of Kosovo', type: 'event', slug: 'battle-of-kosovo', label: 'The 1389 battle whose 1448 sequel closed his reign in defeat' }
      ]
    },
    sources: [
      { title: 'Wikimedia Commons image record — Pisanello medal', author: 'Wikimedia Commons', type: 'image source', url: pg('Palaio.jpg') },
      { title: 'John VIII Palaiologos — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/John_VIII_Palaiologos' },
      { title: 'The Immortal Emperor / Byzantium: The Decline and Fall', author: 'Donald M. Nicol; Steven Runciman', type: 'book', note: 'Standard modern accounts of the last Palaiologoi.' }
    ]
  },
  {
    id: 'henry-of-flanders', type: 'character', name: 'Henry of Flanders', aliases: ['Henry of Hainault', 'Henry I of Constantinople'],
    born: 1176, died: 1216, deathAge: 'about 40', causeOfDeath: 'Died suddenly at Thessalonica; contemporaries suspected poison',
    restingPlace: 'Constantinople (traditionally)', location: 'Latin Empire of Constantinople',
    image: fp('Henry_Flandry.jpg'),
    imageInfo: { caption: 'Henry of Flanders, Latin emperor of Constantinople, in a later depiction.', creator: 'Unknown artist', date: 'later', source: 'Wikimedia Commons', sourceUrl: pg('Henry_Flandry.jpg'), note: 'A posthumous imagined likeness; no contemporary portrait survives.' },
    summary: 'Henry of Flanders (1206–1216), second Latin emperor of Constantinople, was the one ruler of the crusader empire who governed rather than merely occupied — conciliating his Greek subjects and holding both frontiers.',
    title: 'Latin emperor of Constantinople', roles: ['Latin Emperor of Constantinople'],
    birth: { date: 'c. 1176', place: 'Valenciennes, Hainaut', note: 'Younger son of Count Baldwin V of Hainaut; brother of Emperor Baldwin I.' },
    death: { date: '11 June 1216', place: 'Thessalonica', note: 'Died suddenly, aged about forty, preparing operations in the north.', circumstance: 'The suspicion of poison was contemporary; the empire\'s decline from his death was unarguable.' },
    quickFacts: { realm: 'Latin Empire of Constantinople', dynasty: 'House of Flanders-Hainaut', culture: 'Franco-Flemish crusader', knownFor: 'stabilising the Latin Empire and conciliating its Greek population' },
    isRuler: true,
    succession: { office: 'Latin Emperor of Constantinople', predecessor: P('baldwin-i-latin-emperor', 'Baldwin I', 'His brother, captured by the Bulgarians at Adrianople; Henry was crowned when his death was confirmed'), successor: UN('Peter of Courtenay', 'His brother-in-law, captured in Epirus before ever reaching his capital') },
    overview: [
      'Henry took over the Fourth Crusade\'s improvised empire at its lowest point: his brother Baldwin captured after Adrianople (1205), the Frankish knighthood decimated by Kaloyan\'s Bulgarians and Cumans, Thrace burning. As regent and then emperor he stabilised all of it — beating Kaloyan back from the walls, then turning the Bulgarian alliance system inside out.',
      'What set him apart was policy toward the conquered: Greek archons taken into service and fief, Orthodox clergy shielded from papal legates\' Latinising demands, a Greek-friendly court that contemporaries on both sides remarked on. The Greek chronicler Akropolites — no friend of Latins — called him a second Ares who treated the Romans as his own people. He died at forty, and the empire never found his like again.'
    ],
    contentSections: [
      { title: 'Overview', paragraphs: [
        'Henry took over the Fourth Crusade\'s improvised empire at its lowest point: his brother Baldwin captured after Adrianople (1205), the Frankish knighthood decimated by Kaloyan\'s Bulgarians and Cumans, Thrace burning. As regent and then emperor he stabilised all of it — beating Kaloyan back from the walls, then turning the Bulgarian alliance system inside out.',
        'What set him apart was policy toward the conquered: Greek archons taken into service and fief, Orthodox clergy shielded from papal legates\' Latinising demands, a Greek-friendly court that contemporaries on both sides remarked on. The Greek chronicler Akropolites — no friend of Latins — called him a second Ares who treated the Romans as his own people. He died at forty, and the empire never found his like again.'
      ]},
      { title: 'Birth and early life', paragraphs: [
        'Henry was born about 1176 at Valenciennes, a younger son of the house of Hainaut-Flanders, and took the cross with his brother Count Baldwin IX in 1200. Through the crusade\'s diversions — Zara, the two sieges of Constantinople — he emerged as one of its most reliable field commanders, leading the foraging war in Asia Minor after the conquest.',
        'The partition made his brother emperor and Henry his sword. When Baldwin was taken at Adrianople in April 1205 and Doge Dandolo died weeks later, the barons made Henry regent of a state one year old and apparently dying; confirmation of Baldwin\'s death in captivity brought his coronation on 20 August 1206.'
      ]},
      { title: 'Character and Personality', paragraphs: [
        'The chroniclers of both camps drew him warmly, which for a Latin emperor of Constantinople is itself the finding. Henry of Valenciennes, his own historian, shows the gallant and shrewd campaigner; Greek tradition preserved something rarer — the conqueror who heard Orthodox liturgies, took Greek nobles to fief and to table, married by policy but kept faith by temperament, and told the papal legate that his Greek subjects\' church was not the legate\'s to plunder.',
        'His two political marriages measure the pragmatist: first Agnes of Montferrat to bind the Lombard barons of Thessalonica; then, most striking of all, Maria of Bulgaria — daughter of the Kaloyan whose army had destroyed his brother — to convert the empire\'s deadliest enemy into its ally. Courage, moderation, and an entire freedom from the crusader establishment\'s contempt for the "schismatics": the combination kept a stillborn state alive for a decade.'
      ]},
      { title: 'Reign', paragraphs: [
        'The military ledger: Kaloyan\'s great invasions of 1206 beaten off and Thrace reoccupied; the Lombard revolt of Thessalonica faced down in 1208–1209 and the kingdom brought to homage at Ravennika; Boril of Bulgaria crushed at Philippopolis in 1208; and in Asia, war and then equilibrium with Theodore Laskaris\'s Nicaean empire — the treaty of 1214 fixing a frontier that let both states breathe. The Bulgarian marriage-alliance of 1213 completed the reversal: the power that had nearly strangled the empire in its cradle now guarded its northern flank.',
        'Inside, he governed against the grain of the conquest: enforcing the Ravennika settlements that kept church lands from baronial and legatine plunder alike, promoting Greeks — the future emperor-chronicler\'s family among them — into the imperial service, and holding the Venetian quarter to partnership rather than dominance. It was, in scale, a small state\'s politics; it was also the only decade in which the Latin Empire functioned as a state at all.'
      ]},
      { title: 'Death and legacy', paragraphs: [
        'Henry died suddenly at Thessalonica on 11 June 1216, forty years old, while organising the north against Epirus; poison was suspected at the time — the Lombard party and a resentful stepmother-regency furnishing candidates — though nothing was proven. He left no son.',
        'The succession showed his worth by contrast: Peter of Courtenay was captured crossing Epirus and never reached Constantinople, and the empire began the long contraction that ended with the Palaiologan recovery of the city in 1261. Historians of the Latin Empire agree on the counterfactual his death poses: it was under Henry, and only under Henry, that the Fourth Crusade\'s creation looked briefly like a durable Balkan power.'
      ]}
    ],
    timeline: [
      { date: 'c. 1176', title: 'Born at Valenciennes', description: 'Younger son of Count Baldwin V of Hainaut.' },
      { date: '1202–1204', title: 'On the Fourth Crusade', description: 'Serves through Zara and both sieges of Constantinople as a leading commander.' },
      { date: 'April 1205', title: 'Regent after Adrianople', description: 'Takes over the collapsing empire when Baldwin I is captured by Kaloyan.' },
      { date: '20 August 1206', title: 'Crowned emperor', description: 'Consecrated in Hagia Sophia after Baldwin\'s death in captivity is confirmed.' },
      { date: '1208', title: 'Philippopolis', description: 'Defeats Boril of Bulgaria, securing Thrace.' },
      { date: '1213–1214', title: 'The two settlements', description: 'Bulgarian marriage-alliance and the Nicaean treaty fix both frontiers.' },
      { date: '11 June 1216', title: 'Dies at Thessalonica', description: 'Sudden death, poison suspected; the empire\'s effective history ends with him.' }
    ],
    relatedEntries: {
      people: [
        { title: 'Baldwin I, Latin Emperor', type: 'person', slug: 'baldwin-i-latin-emperor', label: 'Brother and predecessor' },
        { title: 'Enrico Dandolo', type: 'person', slug: 'enrico-dandolo', label: 'The doge whose crusade made the empire Henry inherited' },
        { title: 'Boniface of Montferrat', type: 'person', slug: 'boniface-of-montferrat', label: 'Rival crusade leader; his Thessalonica Henry brought to homage' }
      ],
      locations: [ { title: 'Byzantine Empire', type: 'location', slug: 'byzantine-empire', label: 'The state the crusade had partitioned' } ],
      events: []
    },
    sources: [
      { title: 'Wikimedia Commons image record', author: 'Wikimedia Commons', type: 'image source', url: pg('Henry_Flandry.jpg') },
      { title: 'Henry of Flanders — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Henry_of_Flanders' },
      { title: 'Henry of Valenciennes, Histoire de l\'empereur Henri', author: 'Henry of Valenciennes', type: 'primary source', note: 'Contemporary Old French account of the reign.' }
    ]
  },
  {
    id: 'orhan', type: 'character', name: 'Orhan', aliases: ['Orhan Gazi', 'Orhan Bey'],
    born: 1281, died: 1362, deathAge: 'about 81', causeOfDeath: 'Died of old age at Bursa',
    restingPlace: 'Bursa', location: 'Ottoman Beylik',
    image: fp('Orhan_Gazi.jpg'),
    imageInfo: { caption: 'Orhan Gazi in the Ottoman court portrait tradition.', creator: 'Ottoman court painter', date: 'early modern', source: 'Wikimedia Commons', sourceUrl: pg('Orhan_Gazi.jpg'), note: 'Painted long after his lifetime, in the standard dynastic portrait series.' },
    summary: 'Orhan (c. 1323–1362), second Ottoman ruler, took Bursa, Nicaea, and Nicomedia from Byzantium, built the first Ottoman institutions — and planted the dynasty in Europe at Gallipoli in 1354.',
    title: 'Ottoman bey', roles: ['Bey of the Ottoman emirate'],
    birth: { date: 'c. 1281', place: 'Söğüt region, Bithynia', note: 'Son of Osman I, the dynasty\'s founder, and Malhun Hatun.' },
    death: { date: 'March 1362', place: 'Bursa', note: 'Died at about eighty in the capital he had conquered.', circumstance: 'Buried at Bursa beside his father; the state he left was an empire in all but name.' },
    quickFacts: { realm: 'Ottoman emirate (Bithynia, then Thrace)', dynasty: 'House of Osman', culture: 'Turkish Muslim (ghazi frontier)', knownFor: 'taking Bursa and Nicaea and the Ottoman crossing into Europe' },
    isRuler: true,
    succession: { office: 'Ottoman ruler', predecessor: UN('Osman I', 'His father, the eponymous founder, who died as Bursa was falling'), successor: P('murad-i', 'Murad I', 'His son, who carried the European conquest to Adrianople and Kosovo') },
    overview: [
      'Orhan inherited a hill-country ghazi band and left a two-continent state. Bursa fell as his father died (1326) and became the first real Ottoman capital; Nicaea followed in 1331 after the last Byzantine field army in Asia was beaten at Pelekanon, and Nicomedia in 1337 — the conquest of Byzantine Bithynia complete.',
      'Byzantium\'s civil wars then opened Europe themselves: hired by John VI Kantakouzenos — who gave him his daughter Theodora in marriage — Orhan\'s troops learned the Thracian roads as allies, and in 1354, when an earthquake threw down Gallipoli\'s walls, his son Suleyman occupied the town. The Ottomans never left Europe again.'
    ],
    contentSections: [
      { title: 'Overview', paragraphs: [
        'Orhan inherited a hill-country ghazi band and left a two-continent state. Bursa fell as his father died (1326) and became the first real Ottoman capital; Nicaea followed in 1331 after the last Byzantine field army in Asia was beaten at Pelekanon, and Nicomedia in 1337 — the conquest of Byzantine Bithynia complete.',
        'Byzantium\'s civil wars then opened Europe themselves: hired by John VI Kantakouzenos — who gave him his daughter Theodora in marriage — Orhan\'s troops learned the Thracian roads as allies, and in 1354, when an earthquake threw down Gallipoli\'s walls, his son Suleyman occupied the town. The Ottomans never left Europe again.'
      ]},
      { title: 'Birth and early life', paragraphs: [
        'Orhan was born about 1281 in the Söğüt marches, where his father Osman was one frontier bey among a dozen heirs of the Seljuk collapse. He commanded in Osman\'s later campaigns as the emirate\'s little war of posts closed around Bursa.',
        'The dynastic tradition records the succession as a model: Orhan\'s brother Alaeddin declining the throne or accepting the vizierate, the brothers dividing labour rather than the state — a story burnished later, but reflecting the fact that the Ottomans, almost alone among the beyliks, did not fragment at each succession.'
      ]},
      { title: 'Character and Personality', paragraphs: [
        'The Byzantine statesmen who dealt with Orhan — Kantakouzenos above all, his father-in-law and ally-victim — describe a ruler of formidable practical intelligence: patient in siege, opportunist in alliance, scrupulous within a bargain and entirely unsentimental beyond it. The traveller Ibn Battuta, who saw him in the 1330s, called him the greatest of the Turkmen kings in wealth, lands, and forces, and noted his habit of ceaseless movement among his nearly hundred fortresses.',
        'The institution-building shows the ambition behind the raider\'s manner: the first Ottoman silver coinage struck in his name, the first medreses and mosques at Iznik and Bursa, the yaya standing infantry that prefigured the Janissaries — a chieftain deliberately assembling the apparatus of a state, and marrying into the imperial house he was dismembering.'
      ]},
      { title: 'Reign', paragraphs: [
        'The Bithynian conquest was methodical: blockade rather than assault, the countryside strangled until Bursa (1326), Nicaea (1331), and Nicomedia (1337) opened their gates — the young Andronikos III and John Kantakouzenos beaten at Pelekanon in 1329 in Byzantium\'s last attempt to relieve Asia. The beylik of Karesi, absorbed in the 1340s, brought the dynasty to the Dardanelles shore.',
        'Then Byzantium hired its own successor. In the civil war of the 1340s Kantakouzenos bought Orhan\'s six thousand horsemen with money, plunder-rights, and his daughter; Ottoman troops campaigned across Thrace as imperial allies for a decade, and when the earthquake of 2 March 1354 levelled Gallipoli\'s defences, Suleyman Pasha\'s men walked in and fortified it as a permanent bridgehead. Kantakouzenos\'s protests met the reply of a man who understood facts: God had opened the gate. Adrianople\'s fall — the next reign\'s work — was already implicit.'
      ]},
      { title: 'Legacy', paragraphs: [
        'Orhan\'s eighty years spanned the whole transformation: born a chieftain\'s son among tents, he died a sovereign with a chancery, a coinage, two capitals, and a European province. The machinery his reign began — regular revenue, standing troops, the incorporation of Christian tributaries and renegades — is what separated the Ottomans from every rival beylik with equal courage and worse institutions.',
        'Gallipoli proved the hinge of centuries: from that earthquake bridgehead came Adrianople, Kosovo, and ultimately 1453 — his great-great-grandson Mehmed II closing the circle around the city whose civil wars had shown Orhan the way across.'
      ]}
    ],
    timeline: [
      { date: 'c. 1281', title: 'Born', description: 'Son of Osman I in the Söğüt frontier country.' },
      { date: '6 April 1326', title: 'Bursa falls', description: 'The blockade succeeds as Osman dies; Bursa becomes the Ottoman capital.' },
      { date: '10–11 June 1329', title: 'Pelekanon', description: 'Defeats Andronikos III\'s relief army — Byzantium\'s last field effort in Asia.' },
      { date: '2 March 1331', title: 'Nicaea surrenders', description: 'The old imperial city yields; Nicomedia follows in 1337.' },
      { date: '1346', title: 'Marries Theodora Kantakouzene', description: 'The alliance with John VI opens Thrace to Ottoman arms as hired allies.' },
      { date: '2 March 1354', title: 'Gallipoli occupied', description: 'Suleyman Pasha fortifies the earthquake-ruined town: the permanent European bridgehead.' },
      { date: 'March 1362', title: 'Dies at Bursa', description: 'Murad I inherits a state astride two continents.' }
    ],
    relatedEntries: {
      people: [
        { title: 'Murad I', type: 'person', slug: 'murad-i', label: 'Son and successor' },
        { title: 'Bayezid I', type: 'person', slug: 'bayezid-i', label: 'Grandson, the Thunderbolt' }
      ],
      locations: [ { title: 'Byzantine Empire', type: 'location', slug: 'byzantine-empire', label: 'The neighbour whose Asian provinces he absorbed' }, { title: 'Bursa', type: 'location', slug: 'bursa', label: 'His conquest and capital' } ],
      events: []
    },
    sources: [
      { title: 'Wikimedia Commons image record', author: 'Wikimedia Commons', type: 'image source', url: pg('Orhan_Gazi.jpg') },
      { title: 'Orhan — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Orhan' },
      { title: 'The Ottoman Empire: The Classical Age 1300–1600', author: 'Halil İnalcık', type: 'book', note: 'Standard account of the early Ottoman state formation.' }
    ]
  },
  {
    id: 'bayezid-i', type: 'character', name: 'Bayezid I', aliases: ['Bayezid the Thunderbolt', 'Yıldırım Bayezid'],
    born: 1360, died: 1403, deathAge: 'about 43', causeOfDeath: 'Died in Timur\'s captivity after Ankara — of despair, illness, or suicide by the varying accounts',
    restingPlace: 'Bursa', location: 'Ottoman Sultanate',
    image: fp('The_accession_of_Sultan_Bayezid_I_(enthroned)._Ahmedî,_Iskendername,_VBNM,_circa_1460.,_Cod._Or._XC_(57),_y._240b.jpg'),
    imageInfo: { caption: 'The accession of Bayezid I, miniature from Ahmedî\'s İskendernâme, c. 1460.', creator: 'Ottoman miniaturist', date: 'c. 1460', source: 'Biblioteca Nazionale Marciana, Venice — via Wikimedia Commons', sourceUrl: pg('The_accession_of_Sultan_Bayezid_I_(enthroned)._Ahmedî,_Iskendername,_VBNM,_circa_1460.,_Cod._Or._XC_(57),_y._240b.jpg'), note: 'Made two generations after his death, in the earliest Ottoman manuscript-painting tradition.' },
    summary: 'Bayezid I "the Thunderbolt" (1389–1402) crushed the crusade of Nicopolis and nearly took Constantinople — before Timur destroyed him at Ankara and the captive sultan died in a conqueror\'s baggage train.',
    title: 'Ottoman sultan', roles: ['Ottoman Sultan'],
    birth: { date: 'c. 1360', place: 'Ottoman Anatolia', note: 'Son of Murad I and Gülçiçek Hatun.' },
    death: { date: '8 March 1403', place: 'Akşehir, in Timurid custody', note: 'Died months after his capture at Ankara.', circumstance: 'The iron-cage story is later embellishment; captivity itself, and his empire\'s collapse behind him, needed none.' },
    quickFacts: { realm: 'Ottoman Sultanate', dynasty: 'House of Osman', culture: 'Turkish Muslim', knownFor: 'Nicopolis, the first siege of Constantinople, and the catastrophe at Ankara' },
    isRuler: true,
    succession: { office: 'Ottoman Sultan', predecessor: P('murad-i', 'Murad I', 'Killed at Kosovo; Bayezid was proclaimed on the field and had his brother strangled within the hour'), successor: UN('Mehmed I', 'After Ankara his sons fought the eleven-year Interregnum; Mehmed I reunited the state in 1413') },
    overview: [
      'Bayezid took the throne on the field of Kosovo in 1389 — inaugurating, with his brother\'s immediate strangling, the Ottoman law of fratricide — and earned his byname by campaigning at storm-speed between two continents: the Anatolian beyliks annexed in a single sweep, Bulgaria extinguished, Constantinople blockaded for six years.',
      'At Nicopolis in 1396 he destroyed the last great Western crusade. At Ankara in 1402 Timur destroyed him: the Anatolian levies deserted to their old emirs, the Serbian vassals died loyal, and the sultan was run down and caged — figuratively at least. His empire dissolved into a decade of civil war among his sons, and Constantinople breathed for another half-century.'
    ],
    contentSections: [
      { title: 'Overview', paragraphs: [
        'Bayezid took the throne on the field of Kosovo in 1389 — inaugurating, with his brother\'s immediate strangling, the Ottoman law of fratricide — and earned his byname by campaigning at storm-speed between two continents: the Anatolian beyliks annexed in a single sweep, Bulgaria extinguished, Constantinople blockaded for six years.',
        'At Nicopolis in 1396 he destroyed the last great Western crusade. At Ankara in 1402 Timur destroyed him: the Anatolian levies deserted to their old emirs, the Serbian vassals died loyal, and the sultan was run down and caged — figuratively at least. His empire dissolved into a decade of civil war among his sons, and Constantinople breathed for another half-century.'
      ]},
      { title: 'Birth and early life', paragraphs: [
        'Born about 1360 to Murad I, Bayezid earned the name Yıldırım — Thunderbolt — as a prince commanding on the Anatolian frontier. At Kosovo in June 1389 he led the counter-stroke that decided the battle; when his father was killed, the commanders proclaimed Bayezid on the field, and his elder brother Yakub, still commanding a victorious wing, was strangled before he learned why he had been summoned.',
        'The succession method he improvised became dynastic law — codified under his great-grandson Mehmed II — and its logic was his reign\'s: the Ottoman state would not fragment as every Turkish polity before it had, whatever the cost in brothers.'
      ]},
      { title: 'Character and Personality', paragraphs: [
        'The sources — Ottoman chronicles, Byzantine historians, the crusade\'s survivors like Schiltberger — agree on the velocity and the violence: a commander of terrifying speed and personal ferocity, first into the assault, capable after Nicopolis of watching thousands of prisoners beheaded through a morning. They agree too on the appetites the pious chroniclers deplored — the wine, the splendour, the grand vizier\'s fiscal rapacity tolerated — an un-ghazi magnificence learned partly from the Serbian princess Olivera he loved among his wives.',
        'Contradiction ran through him: the blockader of Constantinople who was also the first sultan to imagine himself its Roman successor, demanding from the caliph in Cairo the title Sultan of Rum; the destroyer of the beyliks who filled his court with their poets. Ottoman memory, shaped by the catastrophe, made him the exemplum of hubris — the Thunderbolt who mocked Timur\'s letters and lost God\'s favour with the battle.'
      ]},
      { title: 'Reign', paragraphs: [
        'The decade of conquests ran on two fronts. In Anatolia he did what no ghazi propriety allowed — swallowed the Muslim beyliks whole (Aydın, Saruhan, Menteşe, Germiyan, finally Karaman) — and in Europe he ended Tarnovo Bulgaria (1393), took Thessaly, and hung a six-year blockade on Constantinople from the new castle of Anadoluhisarı. The relief crusade — Hungarian, French, Burgundian chivalry, the largest since Acre — he annihilated at Nicopolis on 25 September 1396, the French charge breaking itself exactly as at Crécy, on stakes and disciplined infantry with the sultan\'s counterattack behind.',
        'The eastern reckoning came when the beyliks\' dispossessed emirs reached Timur\'s court. The two empires\' letters grew mutually unforgivable, and on 28 July 1402 at Ankara, Timur\'s host — with elephants, and with the beylik contingents in Bayezid\'s own army primed to defect — enveloped the exhausted Ottoman force. The Serbs under Stefan Lazarević charged three times to break the ring; the Thunderbolt fought with an axe until his horse fell. He died at Akşehir on 8 March 1403, in captivity that Timur made courteous after the first display, while his sons\' civil war — the Interregnum — dismembered everything behind him.'
      ]},
      { title: 'Legacy', paragraphs: [
        'Ankara nearly ended the Ottoman project: the beyliks resurrected, the European vassals loosed, the capital-in-waiting reprieved — Constantinople\'s fall postponed fifty-one years precisely by Bayezid\'s defeat. That the state reassembled at all, under Mehmed I by 1413, proved the institutions stronger than the catastrophe; the lesson Ottoman government drew — never again a single battle with everything staked — shaped the careful imperialism of the next two reigns.',
        'His monuments survived him in Bursa — the Ulu Cami and his own complex — and so did the cautionary legend: the caged sultan became a fixture of both Ottoman moralising and European drama, Marlowe\'s Tamburlaine giving the story its most famous stage.'
      ]}
    ],
    timeline: [
      { date: 'c. 1360', title: 'Born', description: 'Son of Murad I and Gülçiçek Hatun.' },
      { date: '15 June 1389', title: 'Proclaimed at Kosovo', description: 'Takes the throne on the battlefield; his brother Yakub is strangled.' },
      { date: '1390–1392', title: 'Annexes the beyliks', description: 'Sweeps the Anatolian emirates into the sultanate in one campaign season after another.' },
      { date: '1394', title: 'Blockade of Constantinople begins', description: 'Anadoluhisarı rises on the Bosphorus; the six-year stranglehold starts.' },
      { date: '25 September 1396', title: 'Nicopolis', description: 'Destroys the great Western crusade on the Danube.' },
      { date: '28 July 1402', title: 'Ankara', description: 'Timur envelops the Ottoman army; the beylik troops defect and the sultan is captured.' },
      { date: '8 March 1403', title: 'Dies in captivity', description: 'The Interregnum of his sons is already tearing the empire apart.' }
    ],
    relatedEntries: {
      people: [
        { title: 'Murad I', type: 'person', slug: 'murad-i', label: 'Father, killed at Kosovo' },
        { title: 'Prince Lazar', type: 'person', slug: 'prince-lazar', label: 'The Serbian prince who fell opposite his father' },
        { title: 'Mehmed II', type: 'person', slug: 'mehmed-ii', label: 'Great-grandson, who completed what the blockade began' }
      ],
      locations: [ { title: 'Byzantine Empire', type: 'location', slug: 'byzantine-empire', label: 'Blockaded six years; reprieved by Ankara' } ],
      events: [ { title: 'Battle of Kosovo', type: 'event', slug: 'battle-of-kosovo', label: 'Where his reign began over two dead rulers' } ]
    },
    sources: [
      { title: 'Wikimedia Commons image record — İskendernâme miniature', author: 'Wikimedia Commons', type: 'image source', url: pg('The_accession_of_Sultan_Bayezid_I_(enthroned)._Ahmedî,_Iskendername,_VBNM,_circa_1460.,_Cod._Or._XC_(57),_y._240b.jpg') },
      { title: 'Bayezid I — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Bayezid_I' },
      { title: 'The Ottoman Empire: The Classical Age 1300–1600', author: 'Halil İnalcık', type: 'book', note: 'Covers the reign, Nicopolis, and Ankara.' }
    ]
  },
  {
    id: 'murad-ii', type: 'character', name: 'Murad II', aliases: ['Koca Murad'],
    born: 1404, died: 1451, deathAge: '46', causeOfDeath: 'Apoplexy at Edirne',
    restingPlace: 'Muradiye Complex, Bursa', location: 'Ottoman Sultanate',
    image: fp('Murad_II._Hünername,_folio_143b._TSMK_Hazine_1523_(created_1584-1588).jpg'),
    imageInfo: { caption: 'Murad II, miniature from the Hünername, Topkapı Palace, 1584–1588.', creator: 'Ottoman court atelier', date: '1584–1588', source: 'Topkapı Palace Museum, Hazine 1523 — via Wikimedia Commons', sourceUrl: pg('Murad_II._Hünername,_folio_143b._TSMK_Hazine_1523_(created_1584-1588).jpg'), note: 'From the classical Ottoman dynastic cycle, painted well after his lifetime.' },
    summary: 'Murad II (1421–1451) rebuilt Ottoman power after the Interregnum, twice abdicated for the contemplative life, and twice returned — to destroy the Varna crusade (1444) and Hunyadi at the second Kosovo (1448).',
    title: 'Ottoman sultan', roles: ['Ottoman Sultan'],
    birth: { date: 'June 1404', place: 'Amasya', note: 'Son of Mehmed I, restorer of the post-Ankara state.' },
    death: { date: '3 February 1451', place: 'Edirne', note: 'Died planning nothing larger than the peace he had won.', circumstance: 'His will asked for a simple open-air grave at Bursa, rain falling on it — where he still lies.' },
    quickFacts: { realm: 'Ottoman Sultanate', dynasty: 'House of Osman', culture: 'Turkish Muslim', knownFor: 'Varna, the second Kosovo, and twice renouncing the throne' },
    isRuler: true,
    succession: { office: 'Ottoman Sultan', predecessor: UN('Mehmed I', 'His father, who had reunited the empire after the Interregnum'), successor: P('mehmed-ii', 'Mehmed II', 'His son, to whom he twice yielded the throne in life and finally at death') },
    overview: [
      'Murad II spent his first decade burying the Interregnum\'s ghosts — a pretender uncle strangled at Edirne after a Byzantine-sponsored civil war, the 1422 siege of Constantinople as the receipt — and his middle years fighting the long Hungarian-Venetian coalition on the Danube and the sea.',
      'In 1444, peace signed and son enthroned, he retired to Manisa — and the Christian powers tore up the treaty. Recalled, he destroyed the crusade at Varna in November 1444, put down the Janissaries\' price for his second return, and finished the argument with Hunyadi at Kosovo in 1448. The son he twice stepped aside for was Mehmed the Conqueror.'
    ],
    contentSections: [
      { title: 'Overview', paragraphs: [
        'Murad II spent his first decade burying the Interregnum\'s ghosts — a pretender uncle strangled at Edirne after a Byzantine-sponsored civil war, the 1422 siege of Constantinople as the receipt — and his middle years fighting the long Hungarian-Venetian coalition on the Danube and the sea.',
        'In 1444, peace signed and son enthroned, he retired to Manisa — and the Christian powers tore up the treaty. Recalled, he destroyed the crusade at Varna in November 1444, put down the Janissaries\' price for his second return, and finished the argument with Hunyadi at Kosovo in 1448. The son he twice stepped aside for was Mehmed the Conqueror.'
      ]},
      { title: 'Birth and early life', paragraphs: [
        'Born at Amasya in 1404, in the middle of the fratricidal Interregnum, Murad was governor of the same province as a boy while his father Mehmed I stitched the empire back together. He succeeded at seventeen in 1421 — and Byzantium promptly released the pretender "False" Mustafa against him, the last play of the old policy of feeding Ottoman civil wars.',
        'Murad crushed it within a year, hanged his uncle from Edirne\'s walls, blinded the brothers a looser age might have spared, and laid siege to Constantinople in 1422 as punishment — lifting it only when a genuine brother\'s revolt, also Byzantine-encouraged, called him to Anatolia.'
      ]},
      { title: 'Character and Personality', paragraphs: [
        'Murad is the sultan contemporaries found easiest to like and hardest to explain. The Greek historians — Doukas, Chalkokondyles — dwell on his fidelity to treaties, his mercy in victory, his distaste for conquest beyond necessity: judgments almost unheard-of from Byzantine pens about Ottoman rulers. The dervish orders and poets he patronised at Edirne remembered the mystic\'s temperament under the armour; his will, asking burial in the open ground at Bursa so the rain of God might fall on him, was its own character sketch.',
        'The double abdication proves the inclination was real — no medieval monarch played at renunciation twice — and the double return proves the discipline that overrode it. At Varna, with the battle wavering and the broken treaty nailed to a lance as the army\'s standard, the retired mystic commanded the centre that held; the combination of contemplative longing and battlefield iron is the man entire.'
      ]},
      { title: 'Reign', paragraphs: [
        'The pattern of the middle years was coalition management: Venice fought over Thessalonica (stormed 1430), Hungary over the Danube line, Karaman gnawing from Anatolia whenever the West attacked — and Hunyadi\'s "Long Campaign" of 1443 breaking deep into the Balkans until winter and the Zlatica passes stopped it. The peace of Szeged in summer 1444 gave back Serbia to Branković and swore ten years\' truce; Murad, mourning his eldest son, enthroned the twelve-year-old Mehmed and withdrew to Manisa.',
        'Within weeks the cardinal-legate absolved Hungary of the oath, and the crusade marched for Varna to meet the Venetian fleet. Murad, ferried across the Bosphorus under Genoese sail past the useless blockade, took command: on 10 November 1444 King Władysław III died charging the Janissary line, Cardinal Cesarini died in the rout, and the last crusade for Constantinople died with them. The Janissary mutiny that forced Murad\'s formal second reign (1446) and the three-day slaughter of the second Kosovo (October 1448) — Hunyadi\'s last great army broken — completed the settlement his son would inherit: a Balkans without a rescuer.'
      ]},
      { title: 'Legacy', paragraphs: [
        'Murad handed Mehmed II an instrument no Ottoman ruler had yet possessed: frontiers quiet by exhaustion of every enemy, the Janissary machine tempered at Varna and Kosovo, and a treasury and administration the Halil Çandarlı vizierate had kept in careful order. The conquest of 1453 was planned within two years of his grave — with his army.',
        'His Edirne — the poets\' and dervishes\' court, the great mosque complexes — marks the moment Ottoman high culture found its classical voice; and his tomb at Bursa, earth open to the sky as he asked, remains the dynasty\'s most eloquent monument precisely for its refusal of monument.'
      ]}
    ],
    timeline: [
      { date: 'June 1404', title: 'Born at Amasya', description: 'Son of Mehmed I, in the shadow of the Interregnum.' },
      { date: '1421–1423', title: 'Crushes the pretenders', description: 'Defeats "False" Mustafa and a brother\'s revolt; besieges Constantinople in reprisal.' },
      { date: '29 March 1430', title: 'Takes Thessalonica', description: 'Storms the empire\'s second city from Venice.' },
      { date: 'summer 1444', title: 'Peace of Szeged and abdication', description: 'Signs the ten-year truce, enthrones young Mehmed, retires to Manisa.' },
      { date: '10 November 1444', title: 'Varna', description: 'Recalled to command, destroys the oath-breaking crusade; the king of Hungary falls.' },
      { date: '17–19 October 1448', title: 'Second Kosovo', description: 'Breaks Hunyadi\'s last offensive in three days on the old battlefield.' },
      { date: '3 February 1451', title: 'Dies at Edirne', description: 'Mehmed II succeeds, already planning the conquest of Constantinople.' }
    ],
    relatedEntries: {
      people: [
        { title: 'Mehmed II', type: 'person', slug: 'mehmed-ii', label: 'Son, twice enthroned by his father\'s renunciations' },
        { title: 'Bayezid I', type: 'person', slug: 'bayezid-i', label: 'Grandfather, whose catastrophe defined the caution Murad practised' },
        { title: 'John VIII Palaiologos', type: 'person', slug: 'john-viii-palaiologos', label: 'The emperor whose union-crusade he destroyed at Varna' }
      ],
      locations: [ { title: 'Byzantine Empire', type: 'location', slug: 'byzantine-empire' } ],
      events: [ { title: 'Battle of Kosovo', type: 'event', slug: 'battle-of-kosovo', label: 'The 1389 field where he beat Hunyadi in 1448' } ]
    },
    sources: [
      { title: 'Wikimedia Commons image record — Hünername', author: 'Wikimedia Commons', type: 'image source', url: pg('Murad_II._Hünername,_folio_143b._TSMK_Hazine_1523_(created_1584-1588).jpg') },
      { title: 'Murad II — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Murad_II' },
      { title: 'The Crusade of Varna, 1443–45 (ed. Colin Imber)', author: 'Colin Imber (ed.)', type: 'book', note: 'Sources and analysis for the Szeged-Varna crisis.' }
    ]
  },
  {
    id: 'bayezid-ii', type: 'character', name: 'Bayezid II', aliases: ['Bayezid the Just', 'Sofu Bayezid'],
    born: 1447, died: 1512, deathAge: '64', causeOfDeath: 'Died on the road into retirement, weeks after his forced abdication',
    restingPlace: 'Bayezid II Mosque, Istanbul', location: 'Ottoman Sultanate',
    image: fp('Portrait_of_Bayezid_II_from_a_16th_century_Ottoman_miniature.jpg'),
    imageInfo: { caption: 'Bayezid II in a sixteenth-century Ottoman miniature.', creator: 'Ottoman court atelier', date: '16th century', source: 'Wikimedia Commons', sourceUrl: pg('Portrait_of_Bayezid_II_from_a_16th_century_Ottoman_miniature.jpg'), note: 'From the dynastic portrait tradition, close to but after his lifetime.' },
    summary: 'Bayezid II (1481–1512) consolidated his father Mehmed\'s conquests, built the Ottoman navy into a Mediterranean power, and welcomed the Jews expelled from Spain — before his son Selim forced him from the throne.',
    title: 'Ottoman sultan', roles: ['Ottoman Sultan'],
    birth: { date: 'December 1447', place: 'Demotika (Didymoteicho)', note: 'Son of Mehmed II and Gülbahar Hatun.' },
    death: { date: '26 May 1512', place: 'near Demotika', note: 'Died a month after abdicating to Selim I, near his own birthplace.', circumstance: 'Contemporaries inevitably suspected his masterful son\'s hand in so timely a death.' },
    quickFacts: { realm: 'Ottoman Sultanate', dynasty: 'House of Osman', culture: 'Turkish Muslim', knownFor: 'consolidating the conquests, the new navy, and receiving Sephardic Jewry' },
    isRuler: true,
    succession: { office: 'Ottoman Sultan', predecessor: P('mehmed-ii', 'Mehmed II', 'His father the Conqueror; the succession was fought out with his brother Cem'), successor: UN('Selim I', 'His son, who forced the abdication with Janissary backing in 1512') },
    overview: [
      'Bayezid II won the throne in 1481 against his brother Cem — whose twenty-year afterlife as a hostage-pretender in Rhodes, France, and Rome hung over half the reign — and governed the Conqueror\'s overextended empire as a consolidator: fortresses, fleets, law-codes, and endowments rather than new fronts.',
      'His navy, built against Venice, won the war of 1499–1503 and made the Ottomans a Mediterranean sea-power; his open ports received the Jews of Spain after 1492 — Istanbul and Salonica\'s Sephardic centuries date from his invitation. The Safavid fire in the east and three sons\' rivalry burned down his old age; Selim, the harshest of them, took the throne and the old man died on the road home.'
    ],
    contentSections: [
      { title: 'Overview', paragraphs: [
        'Bayezid II won the throne in 1481 against his brother Cem — whose twenty-year afterlife as a hostage-pretender in Rhodes, France, and Rome hung over half the reign — and governed the Conqueror\'s overextended empire as a consolidator: fortresses, fleets, law-codes, and endowments rather than new fronts.',
        'His navy, built against Venice, won the war of 1499–1503 and made the Ottomans a Mediterranean sea-power; his open ports received the Jews of Spain after 1492 — Istanbul and Salonica\'s Sephardic centuries date from his invitation. The Safavid fire in the east and three sons\' rivalry burned down his old age; Selim, the harshest of them, took the throne and the old man died on the road home.'
      ]},
      { title: 'Birth and early life', paragraphs: [
        'Born at Demotika in Thrace in 1447, Bayezid served the classical princely apprenticeship as governor of Amasya, where his circle ran to Sufis, poets, and astronomers — tastes his terrifying father monitored with some suspicion. He fought at Otlukbeli against Uzun Hasan in 1473 on the empire\'s eastern hinge.',
        'Mehmed II\'s sudden death in May 1481 set the brothers racing for the capital. The Janissaries declared for Bayezid; Cem, holding Bursa briefly as a rival sultan, proposed partitioning the empire — Anatolia for himself, Europe for his brother — and received the dynasty\'s whole answer in one sentence: empire is a bride who cannot be shared. Beaten at Yenişehir, Cem fled to the Knights of Rhodes, and Europe held him as a loaded weapon for twenty years.'
      ]},
      { title: 'Character and Personality', paragraphs: [
        'The sources split him neatly from both father and son: where Mehmed conquered and Selim would scourge, Bayezid administered, endowed, and prayed — "Sofu", the devout, to a soldiery that meant it half as complaint. Venetian envoys\' relazioni describe a heavy, melancholy, deliberate sovereign, learned in philosophy and Islamic law, sparing of war but not incapable of it, whose court replaced his father\'s Italian painters with calligraphers and jurists.',
        'His justice earned the epithet "Adlî" and his patronage was systematic — the great külliye complexes at Amasya, Edirne, and Istanbul, and the pensioned scholars, among them the Jewish physicians and printers whose welcome he framed, by the famous (if later-polished) remark, as Ferdinand of Aragon impoverishing Spain to enrich the Ottomans. The endgame showed the limits of mildness in his house: pressed between sons, he armed none convincingly, and the Janissaries chose for him.'
      ]},
      { title: 'Reign', paragraphs: [
        'The Cem hostage-crisis disciplined the reign\'s first half: while Rome priced his brother\'s custody — Innocent VIII took him for a crusade that never marched, and Bayezid paid 45,000 ducats yearly to keep it so — the sultan could risk no great western war. He took Kilia and Akkerman (1484) to close the Black Sea, fought Mamluk Egypt to a costly draw (1485–1491), and waited; Cem died in French custody at Naples in 1495, and the check lifted.',
        'The Venetian war of 1499–1503 announced the new instrument: the rebuilt fleet under Kemal Reis won at Zonchio — the first great gunnery battle under sail — and took Lepanto, Modon, and Coron, the "eyes of the Republic". In the east a different century opened: the Safavid Shah Ismail\'s militant Shiism ran like fire through the Anatolian Turkmen, the Şahkulu revolt of 1511 burned across the peninsula, and Bayezid\'s measured methods visibly no longer answered. Selim, governor of Trabzon, forced the issue sword in hand; on 25 April 1512 the Janissaries imposed the abdication, and the old sultan died en route to Demotika a month later.'
      ]},
      { title: 'Legacy', paragraphs: [
        'Bayezid\'s consolidation made his grandson\'s golden age arithmetically possible: the fleet that would fight Preveza, the treasury Selim spent on Chaldiran and Egypt, the law-book culture Suleiman codified — each was banked between 1481 and 1512. Empires need digestive reigns, and his was the Ottoman example.',
        'The Sephardic settlement was the reign\'s most durable single act: the largest Jewish communities in the world grew in Ottoman Salonica and Istanbul under the protection his firmans began. And the manner of his fall — Janissaries enthroning the violent son over the pacific father — wrote the template of Ottoman politics for the next two centuries.'
      ]}
    ],
    timeline: [
      { date: 'December 1447', title: 'Born at Demotika', description: 'Son of Mehmed II; princely governor at Amasya.' },
      { date: 'May 1481', title: 'Wins the succession', description: 'The Janissaries declare for him; Cem is defeated at Yenişehir and flees to Rhodes.' },
      { date: '1484', title: 'Kilia and Akkerman', description: 'Closes the Black Sea coast, linking the empire to the Crimean Khanate by land.' },
      { date: '1492', title: 'Receives Sephardic Jewry', description: 'Opens Ottoman ports and cities to the Jews expelled from Spain.' },
      { date: '1499–1503', title: 'Venetian war', description: 'Zonchio, Lepanto, Modon, Coron: the new fleet makes the Ottomans a naval power.' },
      { date: '1511', title: 'Şahkulu revolt', description: 'Safavid-inspired rising sweeps Anatolia as the succession struggle ignites.' },
      { date: '25 April 1512', title: 'Forced abdication', description: 'Selim I takes the throne with Janissary backing; Bayezid dies on the road a month later.' }
    ],
    relatedEntries: {
      people: [
        { title: 'Mehmed II', type: 'person', slug: 'mehmed-ii', label: 'Father, the Conqueror' },
        { title: 'Murad II', type: 'person', slug: 'murad-ii', label: 'Grandfather, whose consolidating style he echoed' }
      ],
      locations: [ { title: 'Byzantine Empire', type: 'location', slug: 'byzantine-empire', label: 'Its former capital, the Istanbul he endowed' } ],
      events: [ { title: 'Fall of Constantinople', type: 'event', slug: 'fall-of-constantinople', label: 'The conquest he inherited and consolidated' } ]
    },
    sources: [
      { title: 'Wikimedia Commons image record', author: 'Wikimedia Commons', type: 'image source', url: pg('Portrait_of_Bayezid_II_from_a_16th_century_Ottoman_miniature.jpg') },
      { title: 'Bayezid II — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Bayezid_II' },
      { title: 'The Ottoman Empire: The Classical Age 1300–1600', author: 'Halil İnalcık', type: 'book', note: 'Standard treatment of the consolidation era.' }
    ]
  },
  {
    id: 'tughril-beg', type: 'character', name: 'Tughril Beg', aliases: ['Toghrul I', 'Rukn al-Dunya wa-l-Din Tughril'],
    born: 990, died: 1063, deathAge: 'about 73', causeOfDeath: 'Died of illness at Rayy',
    restingPlace: 'Tomb tower of Tughril, Rayy (Tehran)', location: 'Seljuk Empire',
    image: fp('Seljuk_Sultan_Tugrul_Bey_sitting_on_his_throne._Topkapı_Sarayı_Müzesi_1653-3_(304_B).jpg'),
    imageInfo: { caption: 'Tughril Beg enthroned, from an Ottoman-era manuscript in the Topkapı Palace collection.', creator: 'Manuscript painter', date: 'later manuscript tradition', source: 'Topkapı Sarayı Müzesi — via Wikimedia Commons', sourceUrl: pg('Seljuk_Sultan_Tugrul_Bey_sitting_on_his_throne._Topkapı_Sarayı_Müzesi_1653-3_(304_B).jpg'), note: 'A later imagined depiction; no contemporary portrait exists.' },
    summary: 'Tughril Beg led the Seljuk Turks from steppe clan to Middle Eastern empire: victor of Dandanaqan (1040), master of Baghdad (1055), and the first Turk invested by the caliph as sultan.',
    title: 'Seljuk sultan', roles: ['Sultan of the Seljuk Empire'],
    birth: { date: 'c. 990', place: 'Central Asian steppe (Oghuz lands)', note: 'Grandson of Seljuk, the clan\'s eponym; raised with his brother Chaghri after their father\'s early death.' },
    death: { date: '4 September 1063', place: 'Rayy', note: 'Died childless; his nephew Alp Arslan took the sultanate.', circumstance: 'His tomb tower still stands at Rayy south of Tehran.' },
    quickFacts: { realm: 'Seljuk Empire', dynasty: 'House of Seljuk', culture: 'Oghuz Turkish, Sunni Muslim', knownFor: 'founding the Seljuk sultanate and "liberating" the Abbasid caliph' },
    isRuler: true,
    succession: { office: 'Seljuk Sultan', predecessor: NONE('None as Seljuk Sultan', 'Tughril created the office: the caliph\'s investiture of 1058 made a steppe war-leader the first sultan of the Seljuk empire'), successor: P('alp-arslan', 'Alp Arslan', 'His nephew, Chaghri\'s son, who took the throne after a brief succession fight') },
    overview: [
      'Tughril and his brother Chaghri led the Seljuk branch of the Oghuz across the Oxus in the 1020s as hired swords and hungry migrants; at Dandanaqan in 1040 they broke the Ghaznavid empire\'s field army and divided eastern Islam between them — Chaghri taking Khurasan, Tughril the westward road.',
      'The road ended at Baghdad. In 1055 the powerless Abbasid caliph invited him in against the Shia Buyid emirs; in 1058 al-Qa\'im crowned him "King of East and West" — the caliphate\'s spiritual authority now wedded to Turkish military power. The bargain defined Sunni statecraft for centuries, and made the Turks, within one generation of paganism, Islam\'s swordarm.'
    ],
    contentSections: [
      { title: 'Overview', paragraphs: [
        'Tughril and his brother Chaghri led the Seljuk branch of the Oghuz across the Oxus in the 1020s as hired swords and hungry migrants; at Dandanaqan in 1040 they broke the Ghaznavid empire\'s field army and divided eastern Islam between them — Chaghri taking Khurasan, Tughril the westward road.',
        'The road ended at Baghdad. In 1055 the powerless Abbasid caliph invited him in against the Shia Buyid emirs; in 1058 al-Qa\'im crowned him "King of East and West" — the caliphate\'s spiritual authority now wedded to Turkish military power. The bargain defined Sunni statecraft for centuries, and made the Turks, within one generation of paganism, Islam\'s swordarm.'
      ]},
      { title: 'Birth and early life', paragraphs: [
        'Tughril was born about 990 into the ruling kin of the Seljuk Oghuz, in the steppe world north of the Aral Sea; the clan had lately converted to Islam, a decision that pointed its raids and its loyalties south. Orphaned early, he and Chaghri were raised by their grandfather Seljuk himself in the tradition\'s telling.',
        'The brothers\' early decades were the freelance politics of the frontier: service and betrayal among Qarakhanids and Khwarazmians, imprisonments, escapes, and at last the fatal invitation into Khurasan, where the Ghaznavid sultan Mas\'ud alternately settled and massacred the hungry Turkmen until the quarrel came to battle.'
      ]},
      { title: 'Character and Personality', paragraphs: [
        'The Muslim chroniclers, Ibn al-Athir foremost, wrote Tughril as the acceptable face of the Turkish conquest: patient where his Turkmen were rapacious, abstemious, regular in prayer, famously clement at Baghdad where his troops\' entry had begun in riot. The praise is formulaic in places, but the career it decorates — half a century without a recorded act of gratuitous cruelty to a surrendered enemy, in that century — gives it substance.',
        'His statecraft had a steppe chieftain\'s patience and a convert\'s calculation: twenty years pacing the conquest of Persia city by city, the Shia Buyids dismantled under a Sunni-restoration banner that cost nothing and bought legitimacy everywhere, and at the end the extraordinary demand — pressed to the point of scandal and granted on his deathbed\'s eve — to marry the caliph\'s own daughter: the nomad\'s blood joined to the Prophet\'s house.'
      ]},
      { title: 'Reign', paragraphs: [
        'Dandanaqan (May 1040) was the founding act: three days of thirst-war outside Merv destroyed Mas\'ud of Ghazna\'s great army, and the brothers\' famous division followed — Chaghri the east, Tughril the west, the empire run as a family federation, with all its future civil wars implicit. Tughril took Nishapur, then Rayy and Isfahan through the 1040s and 1050s, sending the unruly Turkmen ahead into Armenia and Anatolia — the raids that Byzantium would meet at Manzikert a generation later.',
        'Baghdad crowned the design. Entering in December 1055 as the caliph\'s deliverer from the Buyids, he survived the Basasiri revolt that briefly restored Shia prayers in the capital (1058–1060), restored al-Qa\'im, and received the double investiture: sultan, "King of East and West", with his name in the khutba beside the caliph\'s. Church and sword had found their Sunni constitutional form: the caliph reigned, the sultan ruled.'
      ]},
      { title: 'Legacy', paragraphs: [
        'Tughril\'s sultanate became the template of Middle Eastern government for half a millennium: Turkish military dynasties ruling in the caliph\'s name — Seljuks, Zengids, Ayyubids, Mamluks, Ottomans — all descend constitutionally from the investiture of 1058. The Turkmen pressure he aimed westward reshaped Anatolia permanently within thirty years of his death.',
        'He died childless at Rayy in 1063; the empire passed, after a short convulsion, to Chaghri\'s son Alp Arslan, and then to Malik-Shah — the three-reign arc that contemporaries already recognised as the Great Seljuk age. His tomb tower at Rayy, a plain brick cylinder of enormous dignity, still stands over the city\'s traffic.'
      ]}
    ],
    timeline: [
      { date: 'c. 990', title: 'Born on the steppe', description: 'Grandson of Seljuk, in the newly Muslim Oghuz clan.' },
      { date: 'May 1040', title: 'Dandanaqan', description: 'With Chaghri, destroys the Ghaznavid army; the brothers divide the east.' },
      { date: '1040s–1050s', title: 'Conquest of Persia', description: 'Nishapur, Rayy, and Isfahan fall; Turkmen raids probe Armenia and Anatolia.' },
      { date: 'December 1055', title: 'Enters Baghdad', description: 'Ends Buyid control of the caliphate at al-Qa\'im\'s invitation.' },
      { date: '1058', title: 'Invested as sultan', description: 'Crowned "King of East and West" by the caliph — the first Seljuk sultan.' },
      { date: '1060–1062', title: 'Basasiri crushed, caliph restored', description: 'Defeats the Fatimid-backed revolt and reclaims Baghdad for Sunni order.' },
      { date: '4 September 1063', title: 'Dies at Rayy', description: 'Childless; Alp Arslan succeeds after a brief struggle.' }
    ],
    relatedEntries: {
      people: [
        { title: 'Alp Arslan', type: 'person', slug: 'alp-arslan', label: 'Nephew and successor' },
        { title: 'Romanos IV Diogenes', type: 'person', slug: 'romanos-iv-diogenes', label: 'The emperor who would face the forces Tughril unleashed' }
      ],
      locations: [ { title: 'Seljuk Turks', type: 'location', slug: 'seljuk-turks', label: 'The empire he founded' } ],
      events: [ { title: 'Battle of Manzikert', type: 'event', slug: 'battle-of-manzikert', label: 'Fought by his nephew with the empire he built' } ]
    },
    sources: [
      { title: 'Wikimedia Commons image record', author: 'Wikimedia Commons', type: 'image source', url: pg('Seljuk_Sultan_Tugrul_Bey_sitting_on_his_throne._Topkapı_Sarayı_Müzesi_1653-3_(304_B).jpg') },
      { title: 'Tughril — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Tughril' },
      { title: 'The Great Seljuk Empire', author: 'A. C. S. Peacock', type: 'book', note: 'The standard modern history of the dynasty.' }
    ]
  },
  {
    id: 'malik-shah-i', type: 'character', name: 'Malik-Shah I', aliases: ['Jalāl al-Dawla Malik-Shāh'],
    born: 1055, died: 1092, deathAge: '37', causeOfDeath: 'Died suddenly at Baghdad — fever officially; poison, contemporaries whispered, weeks after his vizier\'s murder',
    restingPlace: 'Isfahan', location: 'Seljuk Empire',
    image: fp('Malik-Shah_I.jpg'),
    imageInfo: { caption: 'Malik-Shah I as depicted in the manuscript tradition.', creator: 'Manuscript painter', date: 'later manuscript tradition', source: 'Wikimedia Commons', sourceUrl: pg('Malik-Shah_I.jpg'), note: 'A later imagined depiction; no contemporary portrait exists.' },
    summary: 'Under Malik-Shah I (1072–1092) and his vizier Nizam al-Mulk, the Great Seljuk empire reached its zenith — from the Mediterranean to Central Asia — and within weeks of their deaths in 1092 began to break apart.',
    title: 'Seljuk sultan', roles: ['Sultan of the Seljuk Empire'],
    birth: { date: 'August 1055', place: 'Seljuk Persia', note: 'Son of Alp Arslan; raised under Nizam al-Mulk\'s tutelage.' },
    death: { date: '19 November 1092', place: 'Baghdad', note: 'Died a month after Nizam al-Mulk\'s assassination on the road.', circumstance: 'The double death of sultan and vizier in five weeks broke the empire\'s spine; the succession wars began at once.' },
    quickFacts: { realm: 'Great Seljuk Empire', dynasty: 'House of Seljuk', culture: 'Turko-Persian, Sunni Muslim', knownFor: 'the Seljuk zenith with Nizam al-Mulk — and the collapse that followed their deaths' },
    isRuler: true,
    succession: { office: 'Seljuk Sultan', predecessor: P('alp-arslan', 'Alp Arslan', 'His father, murdered by a captive on the Oxus campaign'), successor: UN('Mahmud I and the warring brothers', 'His child son\'s nomination ignited the succession wars that fractured the empire') },
    overview: [
      'Malik-Shah inherited at seventeen, defended the throne against his uncle at Kerj Abu Dulaf, and then presided — with Nizam al-Mulk, the Persian vizier who had served his father — over the Seljuk noon: Transoxania to the gates of Egypt, the khutba read for him, as the chroniclers boasted, from Kashgar to Jerusalem and Yemen.',
      'The partnership of Turkish sword and Persian pen built the classical Islamic state — the Nizamiyya madrasas, the reformed "Jalali" calendar computed by Omar Khayyam\'s commission, the iqta system regularised. In 1092 an Assassin\'s knife took the vizier and fever (or poison) took the sultan within five weeks, and the edifice cracked along every dynastic seam at once.'
    ],
    contentSections: [
      { title: 'Overview', paragraphs: [
        'Malik-Shah inherited at seventeen, defended the throne against his uncle at Kerj Abu Dulaf, and then presided — with Nizam al-Mulk, the Persian vizier who had served his father — over the Seljuk noon: Transoxania to the gates of Egypt, the khutba read for him, as the chroniclers boasted, from Kashgar to Jerusalem and Yemen.',
        'The partnership of Turkish sword and Persian pen built the classical Islamic state — the Nizamiyya madrasas, the reformed "Jalali" calendar computed by Omar Khayyam\'s commission, the iqta system regularised. In 1092 an Assassin\'s knife took the vizier and fever (or poison) took the sultan within five weeks, and the edifice cracked along every dynastic seam at once.'
      ]},
      { title: 'Birth and early life', paragraphs: [
        'Born in 1055, the year his great-uncle Tughril entered Baghdad, Malik-Shah was raised for empire under Nizam al-Mulk\'s personal direction and named heir over older claimants by Alp Arslan. He was with the army on the Oxus in 1072 when a captured castellan stabbed his father in the sultan\'s own tent.',
        'The accession was contested as every Seljuk accession would be: his uncle Qavurt of Kirman asserted the steppe principle of seniority and was defeated at Kerj Abu Dulaf in 1073, then strangled with a bowstring — the settlement\'s grim punctuation, conventionally blamed on the vizier\'s counsel.'
      ]},
      { title: 'Character and Personality', paragraphs: [
        'The chroniclers\' Malik-Shah is the huntsman-king of the Persian ideal: magnificent, open-handed, a builder of mosques and towers of gazelle horns with equal enthusiasm, pious enough for two pilgrimages and worldly enough for the polo grounds of Isfahan, his beloved capital. Ibn al-Athir\'s obituary — justice, splendour, and the empire\'s golden security of roads — is the official portrait, and much of it is verifiable in stone and institution.',
        'The question his reign never had to answer alone was competence apart from Nizam al-Mulk: for twenty years the vizier\'s administration ran the empire while the sultan campaigned and adjudicated. The final months suggest the answer the empire feared — turned against the aging vizier by the Assassins\' whisperers and his own household\'s factions (his wife Terken Khatun pressing her infant son\'s claim), Malik-Shah let the old man fall to the murderers on the Baghdad road, and had five weeks to regret it.'
      ]},
      { title: 'Reign', paragraphs: [
        'The frontiers ran outward in every direction: Transoxania to Kashgar under direct or tributary rule after the campaigns against the Qarakhanids; Syria organised under his brother Tutush; Anatolia — after Manzikert\'s opening — filling with Turkmen under Suleiman ibn Qutalmish, whose Rum sultanate at Nicaea was a cousin\'s state, obedient mostly in name. Fatimid Egypt alone held the line of active hostility, and the proto-crusade quarrels over Jerusalem and the pilgrim roads incubated in that standoff.',
        'The interior work outlasted the borders: the Nizamiyya colleges from Baghdad to Nishapur trained the Sunni bureaucratic-clerical class for centuries (al-Ghazali held the Baghdad chair under this reign); the Jalali calendar of 1079 corrected the solar year to a precision Europe would not match for five hundred years; and Nizam al-Mulk\'s Siyasatnama, written for this sultan, became the mirror-of-princes for the whole Perso-Turkish world. Against it all grew the reign\'s dark twin — Hasan-i Sabbah\'s Assassins in Alamut, whose first great victim, in October 1092, was the vizier himself.'
      ]},
      { title: 'Legacy', paragraphs: [
        'The double death of 1092 is one of medieval history\'s cleanest hinges: within five years the empire was a battlefield of brothers, nephews, and atabegs — and when the First Crusade marched into Syria in 1097, it passed through a Seljuk world too busy fighting itself to combine against the newcomers. Antioch and Jerusalem fell into the crack that opened at Malik-Shah\'s deathbed.',
        'What endured was the machinery: the madrasa system, the iqta military economy, the sultan-caliph constitutional balance — the framework within which Zengi, Nur ad-Din, and Saladin would eventually reassemble the response to the crusades. The Great Seljuk moment was brief; its institutions governed the region for centuries.'
      ]}
    ],
    timeline: [
      { date: 'August 1055', title: 'Born', description: 'Son of Alp Arslan, in the year Tughril entered Baghdad.' },
      { date: '1072', title: 'Succeeds at seventeen', description: 'Proclaimed on Alp Arslan\'s murder during the Oxus campaign.' },
      { date: '1073', title: 'Kerj Abu Dulaf', description: 'Defeats and executes his uncle Qavurt, securing the throne.' },
      { date: '1079', title: 'The Jalali calendar', description: 'His astronomers — Omar Khayyam among them — reform the solar calendar.' },
      { date: '1080s', title: 'The empire\'s noon', description: 'Transoxania, Syria, and the Anatolian marches acknowledge the sultan from Kashgar to the Mediterranean.' },
      { date: '14 October 1092', title: 'Nizam al-Mulk assassinated', description: 'The vizier of thirty years falls to an Assassin on the Baghdad road, his master\'s favour already withdrawn.' },
      { date: '19 November 1092', title: 'Dies at Baghdad', description: 'Fever or poison; the succession wars begin within weeks.' }
    ],
    relatedEntries: {
      people: [
        { title: 'Alp Arslan', type: 'person', slug: 'alp-arslan', label: 'Father and predecessor' },
        { title: 'Tughril Beg', type: 'person', slug: 'tughril-beg', label: 'Great-uncle, founder of the sultanate' },
        { title: 'Kilij Arslan I', type: 'person', slug: 'kilij-arslan-i', label: 'The Rum cousin who inherited the Anatolian frontier — and the First Crusade' }
      ],
      locations: [ { title: 'Seljuk Turks', type: 'location', slug: 'seljuk-turks', label: 'The empire at its height' } ],
      events: [ { title: 'Battle of Manzikert', type: 'event', slug: 'battle-of-manzikert', label: 'His father\'s victory, whose Anatolian harvest his reign gathered' } ]
    },
    sources: [
      { title: 'Wikimedia Commons image record', author: 'Wikimedia Commons', type: 'image source', url: pg('Malik-Shah_I.jpg') },
      { title: 'Malik-Shah I — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Malik-Shah_I' },
      { title: 'The Great Seljuk Empire', author: 'A. C. S. Peacock', type: 'book', note: 'Standard modern history, covering the zenith and the 1092 collapse.' }
    ]
  }
]

const ids = new Set(data.characters.map((c) => c.id))
let added = 0
for (const p of people) {
  if (ids.has(p.id)) { console.log(`skip (exists): ${p.id}`); continue }
  data.characters.push(p)
  added++
}
fs.writeFileSync(dataPath, JSON.stringify(data, null, 2) + '\n')
console.log(`Added ${added} eastern rulers (of ${people.length}).`)
