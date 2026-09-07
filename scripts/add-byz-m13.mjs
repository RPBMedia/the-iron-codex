/**
 * Track A M13 — the contrast defeats.
 *
 * Track A has so far been a story of Byzantine survival: Constantinople held in
 * 626 and again in 717, Nikephoros took Crete and Antioch back, Basil II broke
 * Bulgaria, Michael VIII walked back into the capital in 1261. This milestone is
 * the other half of the ledger, and it is deliberately the last narrative one.
 *
 * Four defeats, spread over 666 years, that each removed something the empire
 * never got back:
 *
 *   Yarmouk 636       — Syria, Palestine and Egypt, eight years after Heraclius
 *                       had won them back from Persia at Nineveh.
 *   Myriokephalon 1176 — the last realistic hope of retaking Anatolia.
 *   1204              — the city itself, to the people who were supposed to be
 *                       its allies.
 *   Bapheus 1302      — the first field defeat by the Ottomans, who would finish
 *                       the job in 1453.
 *
 * Also creates the four actors those battles need and the archive lacked: the
 * Rashidun Caliphate, the Sultanate of Rum, Khalid ibn al-Walid and Kilij
 * Arslan II. Nine articles.
 *
 * THREE QUEUED CONTINUITY RE-POINTS are applied at the end. Nineveh, Sirmium and
 * Pelagonia were each pointed at the nearest available battle for want of the
 * right one; M13 creates the right one in all three cases.
 *
 * TWO FIXES TO kilij-arslan-i, both of which this milestone makes unavoidable:
 * its primary image is a locator map of the Sultanate of Rum — a person's article
 * leading with a map, which the person-image rule forbids and which the
 * person-image audit had already flagged as a certain failure — and that same map
 * is the right primary for the sultanate-of-rum article created here. Its
 * `quickFacts.dynasty` also read "Not dynastic", which is simply wrong: he was a
 * Seljuk, son of Suleiman ibn Qutalmish.
 *
 * IMAGE PROVENANCE — every image below was fetched and looked at before use, not
 * chosen from a filename. Three things that decided choices:
 *
 *   - The Delacroix exists on Commons at 4608x3456, which is a photograph of the
 *     painting hanging in the Louvre, complete with frame, wall, neighbouring
 *     canvases and visitors. The 2223x1820 file is the clean reproduction. Bigger
 *     was worse, and only opening it showed that.
 *   - The Arabic-language Rashidun conquest map is the better map — phased by
 *     caliph, with scale and compass — but its legend is entirely in Arabic, so
 *     it is a section image with the phases explained in the caption, and the
 *     English map leads.
 *   - The only Commons images purporting to be portraits of Kilij Arslan I are
 *     three files from one uploader described as "potre" and "history", undated
 *     and unattributed. Unusable regardless of the licence claimed on them.
 */
import { readFileSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dataPath = path.join(__dirname, '../server/data/history.json')
const data = JSON.parse(readFileSync(dataPath, 'utf8'))

const img = (f) => `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(f)}`
const S = (title, ...paragraphs) => ({ title, paragraphs })
const T = (date, title, description) => ({ date, title, description })

const upsert = (collection, entry) => {
  const arr = data[collection]
  const i = arr.findIndex((a) => a.id === entry.id)
  if (i >= 0) arr[i] = entry
  else arr.push(entry)
  return entry
}

// ---------------------------------------------------------------------------
// 1. The Rashidun Caliphate — the power that won Yarmouk.
// ---------------------------------------------------------------------------
upsert('locations', {
  id: 'rashidun-caliphate',
  type: 'location',
  name: 'Rashidun Caliphate',
  aliases: ['Rightly Guided Caliphate', 'Rashidun', 'The Rightly Guided Caliphs'],
  locationType: 'Caliphate',
  kingdom: 'The Islamic world',
  year: 632,
  image: img('RashidunCaliphateEng.png'),
  imageInfo: {
    caption: 'The Rashidun Caliphate at its greatest extent in 654, under the third caliph Uthman.',
    creator: 'Wikimedia Commons contributor (Wario2)',
    date: 'modern map of the caliphate in 654',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:RashidunCaliphateEng.png',
    note: 'A modern map. Twenty-two years separate this from the death of Muhammad, and in that time the caliphate took Syria, Palestine, Egypt, Mesopotamia and Iran. The map labels the Byzantine Empire "Roman Empire", which is what it called itself. Released CC0.'
  },
  summary: 'The first Islamic state after the death of Muhammad, ruled by four caliphs between 632 and 661, which took Syria, Egypt and the whole Sasanian Empire in a single generation.',
  overview: [
    'Four caliphs — Abu Bakr, Umar, Uthman and Ali — ruled from Medina and then Kufa over an empire that grew faster than almost any other in recorded history.',
    'It destroyed one of the two great powers of late antiquity outright and took the richest provinces of the other, and then tore itself apart in a civil war over who had the right to lead it.'
  ],
  knownFor: 'The conquests that permanently removed Syria, Palestine and Egypt from the Roman world',
  details: 'The first caliphate, and the one whose conquests reshaped the Mediterranean.',
  contentSections: [
    S('Overview',
      'When Muhammad died at Medina in 632 he left no agreed successor and a community that had existed as a political entity for barely a decade. Within thirty years the state that community produced ruled from Tripoli in Libya to the edge of Afghanistan.',
      'The four caliphs of this period are called the Rashidun — "the rightly guided" — by Sunni tradition, a title given retrospectively and not shared by Shia Muslims, who hold that only Ali had any legitimate claim. The name itself is therefore an argument, and the archive uses it because it is the standard label, not because it settles anything.',
      'For this archive the caliphate matters as the power that broke the eastern Roman position in the Levant. Heraclius had just finished a twenty-six-year war against Persia and won it. Eight years after Nineveh, at Yarmouk, he lost Syria to an army from a place the empire had barely thought about.'),
    S('The conquests',
      'The conquests began almost immediately and moved on two fronts at once, which is part of why they worked: neither the Byzantines nor the Sasanians could concentrate against them, and both had just spent a generation destroying each other.',
      'Against Persia the decisive battle was al-Qadisiyyah, probably in 636, after which Ctesiphon fell and the Sasanian court began a long retreat east that ended with the last shah murdered near Merv in 651. Against the Romans the decisive battle was Yarmouk in the same year, after which Syria and Palestine were untenable and Jerusalem surrendered in 638. Egypt followed between 639 and 642.',
      'The speed invites explanation, and the honest answer is that several things were true at once: both empires were exhausted and financially broken by the war of 602–628, their frontier client systems had collapsed, their provincial populations in Syria and Egypt were religiously alienated from Constantinople, and the Arab armies were mobile, well led and fighting an offensive war with a coherent command.'),
    S('Government and administration',
      'The conquerors did not initially replace the machinery they captured. Byzantine and Sasanian tax systems went on functioning, staffed largely by the same people, with Greek and Persian remaining the languages of administration for decades. Arabic did not become the language of the chancery until the Umayyads, after this period.',
      'What changed was the top of the structure and the terms. Conquered non-Muslims became ahl al-dhimma — protected communities that kept their religion, courts and internal leadership in exchange for the jizya, a poll tax. It was not equality and was not meant to be, but for Syrian Miaphysites and Egyptian Copts, who had spent a century being coerced by Constantinople over doctrine, it was in practice a lighter hand than the one it replaced.',
      'Umar is credited with the garrison-city system — Kufa, Basra, Fustat — which kept the Arab armies concentrated in new settlements rather than dispersed among the conquered population. Those cities became the political centres of the Islamic world and, in short order, the places its civil wars started.'),
    S('Major rulers',
      'Abu Bakr (632–634) held the community together through the Ridda wars, in which the tribes that had submitted to Muhammad tried to leave after his death. Without that year the rest does not happen.',
      'Umar ibn al-Khattab (634–644) presided over the conquests of Syria, Egypt and Mesopotamia, built the administration, and was murdered in Medina by a Persian captive. He is the caliph most associated with the empire the conquests created.',
      'Uthman ibn Affan (644–656) oversaw the standardisation of the Qur\'anic text and was killed by mutineers in his own house, which begins the fitna. Ali ibn Abi Talib (656–661), Muhammad\'s cousin and son-in-law, spent his entire caliphate fighting other Muslims and was murdered at Kufa, after which Mu\'awiya founded the Umayyad Caliphate.'),
    S('The first fitna',
      'The murder of Uthman in 656 opened a civil war that has shaped Islam ever since. Ali was acclaimed caliph and immediately faced revolt: first from A\'isha, Talha and Zubayr at the Battle of the Camel, then from Mu\'awiya, the governor of Syria and Uthman\'s kinsman, who demanded justice for the murder and refused allegiance.',
      'The two sides fought at Siffin in 657 and then agreed to arbitration, which split Ali\'s own following — the Kharijites broke away over the principle that the matter was not arbitrable — and one of them killed him in 661.',
      'Mu\'awiya took the caliphate and made it hereditary, and the argument about whether he had the right to has never been resolved. The Sunni–Shia division has this war at its root, which is why the Rashidun period is contested ground rather than settled history.'),
    S('Legacy',
      'The territorial legacy is the simplest part: Syria, Palestine, Egypt and North Africa left the Roman world in this generation and did not return. Everything Track A records afterwards — the sieges of 674 and 717, the Anatolian frontier wars, the reconquests of Nikephoros Phokas — happens on a map this caliphate drew.',
      'It also ended the Sasanian Empire outright, which is the more complete achievement and the less remarked one. Byzantium survived, mutilated; Persia as a political entity did not survive at all.',
      'For the Roman side the loss was not only territorial. The provinces taken in the 630s were the empire\'s richest and its grain supply, and their loss forced the reorganisation into themes, the shrinking of the army, and the two-front defensive posture that defines the middle Byzantine centuries.')
  ],
  timeline: [
    T('632', 'Muhammad dies; Abu Bakr becomes caliph', 'The succession is contested from the first day and Abu Bakr is acclaimed at Saqifa.'),
    T('632–633', 'The Ridda wars', 'Tribes across Arabia repudiate their allegiance and are brought back by force.'),
    T('636', 'Yarmouk', 'The Byzantine field army in Syria is destroyed; Syria and Palestine become untenable.'),
    T('c. 636', 'Al-Qadisiyyah', 'The Sasanian army is broken and Ctesiphon falls soon afterwards.'),
    T('638', 'Jerusalem surrenders', 'The patriarch Sophronius yields the city on terms, by tradition to Umar in person.'),
    T('639–642', 'Egypt taken', 'Amr ibn al-As conquers Egypt; Alexandria falls, is briefly retaken by a Byzantine fleet, and is lost for good.'),
    T('651', 'The Sasanian Empire ends', 'Yazdegerd III is murdered near Merv, four centuries of Sasanian rule ending with him.'),
    T('656', 'Uthman murdered', 'Mutineers kill the caliph in Medina; Ali is acclaimed and the first fitna begins.'),
    T('657', 'Siffin', 'Ali and Mu\'awiya fight to a standstill and agree to arbitration, splitting Ali\'s support.'),
    T('661', 'Ali murdered; the Umayyads take power', 'Mu\'awiya becomes caliph and makes the office hereditary.')
  ],
  relatedEntries: {
    events: [
      { title: 'Battle of Yarmouk', type: 'event', slug: 'battle-of-yarmouk', label: 'The victory that took Syria' },
      { title: 'Siege of Constantinople (717–718)', type: 'event', slug: 'siege-of-constantinople-717', label: 'Where its Umayyad successor was finally stopped' }
    ],
    people: [
      { title: 'Khalid ibn al-Walid', type: 'person', slug: 'khalid-ibn-al-walid', label: 'Its most effective commander, dismissed at the height of his success' },
      { title: 'Heraclius', type: 'person', slug: 'heraclius', label: 'The emperor who lost Syria to it' }
    ],
    locations: [
      { title: 'Umayyad Caliphate', type: 'location', slug: 'umayyad-caliphate', label: 'What it became in 661' },
      { title: 'Byzantine Empire', type: 'location', slug: 'byzantine-empire', label: 'Which lost its richest provinces to it' },
      { title: 'Sasanian Empire', type: 'location', slug: 'sasanian-empire', label: 'Which it destroyed outright' }
    ]
  },
  sources: [
    { title: 'Al-Baladhuri, Futuh al-Buldan (The Conquest of the Lands)', url: 'https://en.wikipedia.org/wiki/Al-Baladhuri', type: 'primary source' },
    { title: 'Al-Tabari, History of the Prophets and Kings', url: 'https://en.wikipedia.org/wiki/Al-Tabari', type: 'primary source' },
    { title: 'Rashidun Caliphate', url: 'https://en.wikipedia.org/wiki/Rashidun_Caliphate', type: 'encyclopedia' }
  ]
})

// ---------------------------------------------------------------------------
// 2. The Sultanate of Rum — the power that won Myriokephalon.
//
// Takes the locator map that was wrongly serving as kilij-arslan-i's primary
// image. It is the right image here and the wrong one there.
// ---------------------------------------------------------------------------
upsert('locations', {
  id: 'sultanate-of-rum',
  type: 'location',
  name: 'Sultanate of Rum',
  aliases: ['Seljuk Sultanate of Rum', 'Sultanate of Iconium', 'Rum Seljuks', 'Anatolian Seljuks'],
  locationType: 'Sultanate',
  kingdom: 'Anatolia',
  year: 1077,
  image: img('Seljuk Sultanate of Rum 1190 Locator Map.svg'),
  imageInfo: {
    caption: 'The Sultanate of Rum with its borders as of 1190, marking the battle sites of Dorylaeum (1147), Myriokephalon (1176) and Antalya (1207).',
    creator: 'Wikimedia Commons contributor (MapMaster)',
    date: 'modern map, borders as of 1190',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Seljuk_Sultanate_of_Rum_1190_Locator_Map.svg',
    note: 'A modern locator map. Its value here is that it plots the battles as well as the borders, so Myriokephalon can be seen in relation to the territory it was fought over. CC BY-SA 4.0.'
  },
  summary: 'The Turkish sultanate that ruled central Anatolia from Konya between 1077 and 1308, carved out of Byzantine territory after Manzikert and named for the Romans it displaced.',
  overview: [
    'It took its name from Rum — "Rome" — because it was built on land the Romans had held, and its rulers were entirely comfortable saying so.',
    'It defeated the last serious Byzantine attempt to retake Anatolia at Myriokephalon in 1176, reached its cultural height under the Mongol shadow, and dissolved into the beyliks from which the Ottomans emerged.'
  ],
  knownFor: 'Holding Anatolia against Byzantium and the crusades, and the Seljuk architecture of Konya',
  details: 'The Turkish state in Anatolia between Manzikert and the Ottomans.',
  contentSections: [
    S('Overview',
      'The Sultanate of Rum was founded in the chaos after Manzikert, when Byzantine authority in Anatolia collapsed not because of the defeat itself but because of the civil wars that followed it. Turkish groups moved into a vacuum that the empire had created by fighting itself.',
      'Its first capital was Nicaea, close enough to Constantinople to be a standing insult. The First Crusade took Nicaea back in 1097 and the sultanate moved inland to Konya — ancient Iconium — where it stayed for two centuries.',
      'It was never the only Turkish power in Anatolia and was frequently not the strongest, but it outlasted its rivals, and its defeat of Manuel I at Myriokephalon in 1176 settled the question of who would hold the Anatolian plateau.'),
    S('Origins after Manzikert',
      'Suleiman ibn Qutalmish, a Seljuk of the line passed over for the sultanate in Iran, established himself in western Anatolia in the late 1070s, partly by invitation: Byzantine claimants in the civil wars hired Turkish troops against each other and then could not remove them.',
      'This is worth stating plainly because the usual telling makes Manzikert the cause of everything. Manzikert lost a battle and an emperor; it did not lose Anatolia. What lost Anatolia was the decade of Byzantine civil war afterwards, during which rival Roman generals brought Turkish forces west and gave them cities to hold.',
      'By the time Alexios I restored order in 1081 there was a Turkish sultanate at Nicaea, and no Byzantine army capable of removing it without outside help. That help arrived, on terms Alexios had not anticipated, as the First Crusade.'),
    S('Konya and the Seljuk cultural flowering',
      'The century after the crusades passed through was the sultanate\'s best. Konya became a genuine capital, and the Anatolian Seljuks built at a scale and quality that still defines the region: the Alâeddin Mosque on the citadel hill, the great madrasas, and above all the caravanserais, placed a day\'s travel apart along the trade roads and free to use for three nights.',
      'The art was distinctively Anatolian rather than an import — mina\'i and lustre tilework, figural stone relief of a kind rare elsewhere in the Islamic world, and a court poetry in Persian. The Rum Seljuks also struck figural coinage, including horsemen and a lion-and-sun device, which sets them apart from most contemporary Muslim mints.',
      'The population they ruled was mixed and stayed mixed: Greek-speaking Christians remained a large part of it for centuries, and the conversion of Anatolia was a slow process of the following three hundred years, not a consequence of conquest. Jalal al-Din Rumi, who gives the sultanate its most famous name, took his epithet from Rum and lived and died at Konya under its rule.'),
    S('Major rulers',
      'Suleiman ibn Qutalmish (c. 1077–1086) founded the sultanate at Nicaea. Kilij Arslan I (1092–1107) fought the People\'s Crusade and destroyed it at Civetot, then lost Nicaea and Dorylaeum to the real crusade the following year and moved the capital to Konya.',
      'Kilij Arslan II (1156–1192) is the sultanate\'s central figure: he defeated Manuel I Komnenos at Myriokephalon in 1176, and then made the mistake of dividing the sultanate among eleven sons, undoing much of what the victory won.',
      'Kaykhusraw I and Kaykaus I recovered the ground and took Antalya and Sinope, giving the sultanate ports on both seas. Kayqubad I (1220–1237) is generally reckoned its greatest ruler and its high point; his son Kaykhusraw II lost to the Mongols at Köse Dağ six years later and the sultanate never governed itself again.'),
    S('Decline under the Mongols',
      'The defeat at Köse Dağ in 1243 turned the sultanate into a tributary of the Mongol Ilkhanate, and after about 1260 the sultans were appointees rather than rulers. The state continued to exist, mint coins and build, but the decisions were made elsewhere.',
      'What filled the gap was the beyliks — the Turkish frontier emirates on the edges, which owed the sultan nothing in practice and were free to raid Byzantine territory on their own account. The Ottomans were one of the smallest of them.',
      'The line ended around 1308 with no successor worth recording. By then the political map of Anatolia was the one on which Bapheus was fought: a Byzantine remnant in the north-west, a dozen beyliks, and the Ilkhanate behind them all.')
  ],
  timeline: [
    T('1071', 'Manzikert', 'Romanos IV is defeated and captured; the Byzantine civil wars that follow open Anatolia.'),
    T('c. 1077', 'The sultanate founded', 'Suleiman ibn Qutalmish establishes himself in western Anatolia, with Nicaea as his capital.'),
    T('1097', 'Nicaea lost; the capital moves to Konya', 'The First Crusade takes Nicaea and beats Kilij Arslan I at Dorylaeum.'),
    T('1176', 'Myriokephalon', 'Kilij Arslan II destroys Manuel I\'s invasion in a mountain pass, ending Byzantine hopes in Anatolia.'),
    T('1220–1237', 'Kayqubad I', 'The sultanate\'s high point in territory, building and trade.'),
    T('1243', 'Köse Dağ', 'The Mongols crush the Seljuk army; the sultanate becomes a tributary and never recovers.'),
    T('c. 1300', 'The beyliks', 'Real power passes to the frontier emirates, one of which is Osman\'s.'),
    T('c. 1308', 'The line ends', 'The last sultan dies without a successor of any consequence.')
  ],
  relatedEntries: {
    events: [
      { title: 'Battle of Myriokephalon', type: 'event', slug: 'battle-of-myriokephalon', label: 'Its greatest victory' },
      { title: 'Battle of Manzikert', type: 'event', slug: 'battle-of-manzikert', label: 'The defeat that opened Anatolia to it' },
      { title: 'Battle of Bapheus', type: 'event', slug: 'battle-of-bapheus', label: 'Fought by one of the beyliks that replaced it' }
    ],
    people: [
      { title: 'Kilij Arslan II', type: 'person', slug: 'kilij-arslan-ii', label: 'Who won Myriokephalon and then divided the sultanate' },
      { title: 'Kilij Arslan I', type: 'person', slug: 'kilij-arslan-i', label: 'Who lost Nicaea and moved the capital to Konya' },
      { title: 'Manuel I Komnenos', type: 'person', slug: 'manuel-i-komnenos', label: 'The emperor it defeated in 1176' }
    ],
    locations: [
      { title: 'Seljuk Turks', type: 'location', slug: 'seljuk-turks', label: 'The wider dynasty it branched from' },
      { title: 'Byzantine Empire', type: 'location', slug: 'byzantine-empire', label: 'Whose Anatolian provinces it was built on' },
      { title: 'Ottoman Empire', type: 'location', slug: 'ottoman-empire', label: 'Which grew out of the beyliks that succeeded it' }
    ]
  },
  sources: [
    { title: 'Anna Komnene, The Alexiad', url: 'https://en.wikipedia.org/wiki/Alexiad', type: 'primary source' },
    { title: 'Ibn Bibi, al-Awamir al-Ala\'iyya', url: 'https://en.wikipedia.org/wiki/Ibn_Bibi', type: 'primary source' },
    { title: 'Sultanate of Rum', url: 'https://en.wikipedia.org/wiki/Sultanate_of_Rum', type: 'encyclopedia' }
  ]
})

// ---------------------------------------------------------------------------
// 3. Khalid ibn al-Walid — the commander at Yarmouk.
//
// IMAGE NOTE. No contemporary depiction of Khalid exists and none can, given
// the conventions of the society he belonged to: what Commons holds under his
// name is calligraphy of the name itself, and photographs of the mosque at Homs.
// Neither depicts a person, and the person-image rule added on 2026-09-07 rules
// both out as a primary — that rule exists precisely because Eric Bloodaxe's
// article led with a coin bearing a sword and no face.
//
// The image used is a 1935 line drawing from an illustrated Arabic history,
// public domain, which shows him mounted and fighting at Yarmouk. It is later
// artwork, which CLAUDE.md permits for people with no contemporary portrait
// provided the caption says so, and it depicts a human being, which is the test.
//
// This matters beyond one article: six commanders in Track A have been deferred
// for want of any image at all, and every one of them was non-Latin. Khalid is
// the first of that group to clear the bar, and he clears it because someone in
// 1935 drew him. The deferral list is a fact about what Commons holds, not about
// who mattered — see the open decision in QUEUE.md.
// ---------------------------------------------------------------------------
upsert('characters', {
  id: 'khalid-ibn-al-walid',
  type: 'person',
  name: 'Khalid ibn al-Walid',
  aliases: ['Sayf Allah al-Maslul', 'The Drawn Sword of God', 'Khalid bin Walid'],
  born: 'c. 585, Mecca',
  died: '642, Homs (or Medina)',
  deathAge: 'about 57',
  causeOfDeath: 'Illness, in bed — which he is reported to have resented',
  restingPlace: 'The Khalid ibn al-Walid Mosque at Homs, by tradition',
  location: 'Arabia, Mesopotamia and Syria',
  title: 'Commander of the Rashidun armies',
  roles: ['General', 'Companion of Muhammad'],
  image: img('Tarikhuna bi-uslub qasasi-Khalid ibn al-Walid fighting the Byzantines.jpg'),
  imageInfo: {
    caption: 'Khalid ibn al-Walid fighting the Byzantines at Yarmouk, in a line drawing from a 1935 illustrated Arabic history.',
    creator: 'Unknown illustrator, for Tarikhuna bi-uslub qasasi',
    date: '1935',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Tarikhuna_bi-uslub_qasasi-Khalid_ibn_al-Walid_fighting_the_Byzantines.jpg',
    note: 'A twentieth-century illustration, thirteen hundred years after the fact, and not a likeness — no depiction of Khalid made in his lifetime exists or could. It is used because it shows the man rather than his name: the only other images available are calligraphy of his name and photographs of the mosque at Homs, neither of which depicts a person. Public domain.'
  },
  summary: 'Khalid ibn al-Walid was the commander who beat the Byzantine army at Yarmouk in 636 and the Sasanians in Mesopotamia before it, and who was dismissed by the caliph Umar at the height of his success.',
  overview: [
    'He fought against Muhammad before he fought for him, commanded the Meccan cavalry that beat the Muslims at Uhud, converted in 629, and spent the rest of his life winning.',
    'His record is close to unbeaten across the Ridda wars, the Iraqi campaign and the conquest of Syria, and Umar removed him from command anyway — for reasons that are the most interesting thing about him.'
  ],
  greatestFeats: [
    'Commanded at Yarmouk in 636, the battle that took Syria and Palestine from the Roman Empire',
    'Marched an army across the Syrian desert from Iraq to Syria in 634, a crossing still argued over',
    'Held the Muslim army together at Mu\'ta in 629 and extracted it from a defeat'
  ],
  birth: 'Born at Mecca into the Banu Makhzum, one of the leading clans of the Quraysh, and raised to the cavalry warfare his family was known for.',
  death: 'Died of illness around 642, reportedly saying that he had fought in so many battles that there was no part of his body without a scar, and was dying in his bed like a camel.',
  quickFacts: {
    realm: 'Rashidun Caliphate',
    dynasty: 'Not dynastic',
    culture: 'Arab (Quraysh, Banu Makhzum)',
    knownFor: 'Winning Yarmouk, and being dismissed for it'
  },
  isRuler: false,
  contentSections: [
    S('Overview',
      'Khalid ibn al-Walid is the most successful field commander of the early Islamic conquests and one of the very few figures of the period whose military reputation is not seriously disputed by anyone.',
      'He appears first on the other side. At Uhud in 625 he commanded the Meccan cavalry that turned the Muslim flank and converted a Muslim victory into a defeat — the only real reverse Muhammad suffered. He converted in 629 and was given command almost immediately.',
      'Between 632 and 638 he commanded in the Ridda wars in Arabia, then in Mesopotamia against the Sasanians, then in Syria against the Romans, where Yarmouk is his and the archive\'s reason for the article. In 638 the caliph Umar dismissed him, and he never held command again.'),
    S('Character and Personality',
      'The sources are unanimous that he was fast, aggressive and willing to take risks that a more careful commander would not, and that this is why he kept winning. They are also clear that he was hard, and in at least one case that this became a scandal.',
      'The epithet Sayf Allah al-Maslul — "the drawn sword of God" — is attributed to Muhammad after Mu\'ta, where Khalid took over from three successive commanders who had been killed and got the army out. Whether the phrase is authentic or attached later, it stuck, and it is how he is known.',
      'The killing of Malik ibn Nuwayra during the Ridda wars, and Khalid\'s marriage to his widow immediately afterwards, was a scandal at the time and remains one. Abu Bakr declined to punish him, reportedly saying that he would not sheathe a sword God had drawn. Umar did not agree, and remembered.'),
    S('The Syrian campaign',
      'The crossing from Iraq to Syria in 634 is the operation his reputation is built on. Ordered west to reinforce the Syrian front, he took a route across the desert that the sources describe in circumstantial and partly incredible detail, including camels killed and used as water stores.',
      'The details are unverifiable and the marches described are at the edge of possibility, so the archive states the outcome rather than the legend: he arrived in Syria with an intact force at a moment when nobody expected him, and the campaign began going the Muslims\' way immediately afterwards.',
      'Damascus fell in 634. The Byzantines spent the next two years assembling the field army that would settle the matter, and Khalid — nominally under Abu Ubayda\'s overall command, but effectively directing the fighting — met it at the Yarmouk.'),
    S('Yarmouk',
      'The battle lasted several days in August 636 and was decided by cavalry. Khalid concentrated the Muslim horse into a single mobile reserve instead of splitting it between the wings, which let him restore whichever part of his line was breaking and then, on the last day, take the Byzantine army in the flank and drive it against broken ground.',
      'The Byzantine force was larger, was a coalition of Roman regulars, Armenians and Ghassanid Arabs with divided command, and had no comparable reserve. When it broke it could not disengage.',
      'The strategic result was immediate: Heraclius abandoned Syria, and no Roman army came back. Eight years after winning a twenty-six-year war against Persia, the empire had lost its richest provinces to an opponent it had barely registered.'),
    S('Dismissal',
      'In 638 Umar removed him from command. The stated reasons vary — a gift of money to a poet, an accounting question, a general insistence on discipline — and none of them are convincing on their own.',
      'The reason usually offered, and the one the archive finds most plausible, is political. Khalid had become the person the armies believed won the battles, and Umar wanted it understood that God won them and the caliph directed them. A commander of that stature was a structural problem regardless of loyalty, and Khalid was not obviously easy to control.',
      'He accepted it, which is itself notable, and lived out his last four years without a command. Umar is reported to have said after his death that he had been unjust to him.'),
    S('Legacy',
      'His campaigns are studied as military history in a way that little else from the period is, and the modern reputation is if anything inflated by that: the sources for his battles are late, formulaic and fond of him, and reconstructing what happened tactically at Yarmouk involves more inference than most accounts admit.',
      'What is not in doubt is the outcome. The Levant changed hands permanently in his campaigns, and the Byzantine Empire that appears everywhere else in this archive — the one fighting on two fronts from a shrunken Anatolian base — is the empire his victories created.',
      'The mosque at Homs that holds his reputed tomb was rebuilt in the early twentieth century on an Ayyubid foundation and remains a major shrine.')
  ],
  timeline: [
    T('c. 585', 'Born at Mecca', 'Into the Banu Makhzum, a leading Quraysh clan known for its cavalry.'),
    T('625', 'Uhud', 'Commands the Meccan cavalry whose flanking charge defeats the Muslims.'),
    T('629', 'Converts, and Mu\'ta', 'Joins the Muslim community and extracts the army from defeat at Mu\'ta after three commanders are killed.'),
    T('632–633', 'The Ridda wars', 'Commands against the Arabian tribes that repudiate Medina; the killing of Malik ibn Nuwayra dates from this campaign.'),
    T('633–634', 'Mesopotamia', 'Campaigns against the Sasanians on the Euphrates.'),
    T('634', 'The desert crossing', 'Marches from Iraq to Syria by a desert route and takes the Byzantines by surprise.'),
    T('636', 'Yarmouk', 'Destroys the Byzantine field army in Syria over several days of fighting.'),
    T('638', 'Dismissed by Umar', 'Removed from command at the height of his success and never given another.'),
    T('642', 'Dies', 'Of illness, reportedly resenting that it was not in battle.')
  ],
  relatedEntries: {
    events: [
      { title: 'Battle of Yarmouk', type: 'event', slug: 'battle-of-yarmouk', label: 'His victory, and the empire\'s worst day in the east' }
    ],
    people: [
      { title: 'Heraclius', type: 'person', slug: 'heraclius', label: 'The emperor whose army he destroyed' }
    ],
    locations: [
      { title: 'Rashidun Caliphate', type: 'location', slug: 'rashidun-caliphate', label: 'The state he fought for' },
      { title: 'Byzantine Empire', type: 'location', slug: 'byzantine-empire', label: 'Which lost Syria to him' }
    ]
  },
  sources: [
    { title: 'Al-Baladhuri, Futuh al-Buldan', url: 'https://en.wikipedia.org/wiki/Al-Baladhuri', type: 'primary source' },
    { title: 'Al-Tabari, History of the Prophets and Kings', url: 'https://en.wikipedia.org/wiki/Al-Tabari', type: 'primary source' },
    { title: 'Khalid ibn al-Walid', url: 'https://en.wikipedia.org/wiki/Khalid_ibn_al-Walid', type: 'encyclopedia' }
  ]
})

// ---------------------------------------------------------------------------
// 4. Kilij Arslan II — the victor of Myriokephalon.
//
// IMAGE NOTE. His primary image is a CONTEMPORARY depiction, which is rare
// enough in this part of the archive to be worth stating: a star-shaped mina'i
// tile from the Alâeddin Palace at Konya, made during his own reign, showing the
// sultan enthroned. The tile is broken at its edges — it is an excavated
// fragment — but the throne scene and the sultan's face are intact and legible,
// which is what the person-image rule asks of a primary.
//
// His coinage was considered and rejected for the primary slot: the surviving
// copper is heavily corroded and its figural side is no longer readable, which
// is a condition failure as well as very nearly a portrait failure.
// ---------------------------------------------------------------------------
upsert('characters', {
  id: 'kilij-arslan-ii',
  type: 'person',
  name: 'Kilij Arslan II',
  aliases: ['Qilij Arslan II', 'Izz al-Din Kilij Arslan', 'Kılıç Arslan II'],
  born: 'Unknown, early twelfth century',
  died: '1192, Konya',
  deathAge: 'Unknown',
  causeOfDeath: 'Old age, after losing control of his own sultanate',
  restingPlace: 'His türbe in the courtyard of the Alâeddin Mosque, Konya',
  location: 'Konya, Sultanate of Rum',
  title: 'Sultan of Rum',
  roles: ['Sultan', 'Commander'],
  image: img('Sultan Kilij Arslan II enthroned in a tile from Alaeddin Palace, Konya, 1156-92.jpg'),
  imageInfo: {
    caption: 'Kilij Arslan II enthroned, on a star-shaped mina\'i tile from the Alâeddin Palace at Konya, made during his reign.',
    creator: 'Anatolian Seljuk tile painter, Konya',
    date: 'c. 1156–1192',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Sultan_Kilij_Arslan_II_enthroned_in_a_tile_from_Alaeddin_Palace,_Konya,_1156-92.jpg',
    note: 'A contemporary depiction, which is unusual — it was made in his own palace during his own reign, in the Iranian mina\'i technique. The tile is an excavated fragment and is broken around its edges; the throne scene and the sultan\'s face are undamaged. It is a court image of a ruler rather than a likeness, but it is a depiction of the man made by people who could see him. Public domain.'
  },
  summary: 'Kilij Arslan II ruled the Sultanate of Rum for thirty-six years, destroyed Manuel I Komnenos\'s invasion at Myriokephalon in 1176, and then divided his sultanate among eleven sons.',
  overview: [
    'He is the sultan who ended Byzantine hopes of retaking Anatolia, and he did it by letting an emperor march an army into a pass he had chosen.',
    'He then spent his last years watching his sons fight each other for a state he had partitioned himself, which is the reason his victory changed less than it should have.'
  ],
  greatestFeats: [
    'Destroyed the Byzantine army at Myriokephalon in 1176, ending the last serious attempt to recover Anatolia',
    'Held the sultanate together against Byzantium, the Danishmendids and Frederick Barbarossa\'s crusade',
    'Presided over the consolidation of Konya as a Seljuk capital'
  ],
  birth: 'Born early in the twelfth century, a son of Mas\'ud I, into a sultanate that had spent two generations recovering from the First Crusade.',
  death: 'Died in 1192 at Konya, having lived long enough to be effectively deposed by his own son Kaykhusraw and to see the partition of the sultanate produce exactly the civil war it invited.',
  quickFacts: {
    realm: 'Sultanate of Rum',
    dynasty: 'Seljuk dynasty',
    culture: 'Turkish (Seljuk), Persianate court',
    knownFor: 'Myriokephalon, and dividing his sultanate among eleven sons'
  },
  isRuler: true,
  succession: {
    office: 'Sultan of Rum',
    predecessor: { displayName: 'Mas\'ud I', note: 'His father, who rebuilt the sultanate after the First Crusade and moved it firmly onto the Anatolian plateau. No article yet in this archive.' },
    successor: { displayName: 'Kaykhusraw I', note: 'His son, who took Konya before his father was dead, lost it to a brother, and returned twenty years later to reunite the sultanate. No article yet in this archive.' }
  },
  contentSections: [
    S('Overview',
      'Kilij Arslan II inherited a sultanate in 1156 that was one Turkish power among several in Anatolia, hemmed in by the Danishmendids to the east and by a Byzantine Empire under Manuel I Komnenos that was more capable and more aggressive than it had been for a century.',
      'He spent twenty years managing that position — submitting to Manuel when he had to, including a famous and much-described visit to Constantinople in 1162, and expanding at Danishmendid expense when he could.',
      'In 1176 Manuel came for him with the largest army the empire had put into Anatolia since Manzikert. Kilij Arslan let it into the pass at Myriokephalon and destroyed it, and the Anatolian question was settled for good.'),
    S('Character and Personality',
      'The Byzantine sources, which are the fullest we have and are hostile, present him as clever, patient and thoroughly untrustworthy — a man who made agreements he intended to break and flattered an emperor he was measuring.',
      'That is a portrait drawn by the losing side, and what it actually describes is a ruler in a weak position who used diplomacy to buy the twenty years he needed. His 1162 visit to Constantinople, where Manuel entertained him lavishly and extracted promises, reads in the Greek accounts as a submission; in the event, none of the promises constrained him.',
      'The decision that defines him is not the battle but what he did after it. Dividing the sultanate among eleven sons in the 1180s, each with a province, was a Turkish practice with its own logic — but he was old, they were rivals, and the result was that the state which had just beaten the Roman Empire spent the next generation at war with itself.'),
    S('Myriokephalon',
      'Manuel invaded in 1176 aiming at Konya itself, with a large army encumbered by a siege train. Kilij Arslan offered terms on the march and Manuel refused them, which every account treats as the decisive error.',
      'The Byzantine column entered the pass at Myriokephalon strung out over a long distance, and the Turks held the heights on both sides. What followed was less a battle than the destruction of a column that could not deploy: the siege train was lost, the rear was cut up, and Manuel — by his own admission afterwards — considered abandoning the army.',
      'Kilij Arslan then offered terms again, and this time took them: the emperor was allowed to withdraw in exchange for demolishing two frontier fortresses. Letting a beaten emperor go was a choice, and a shrewd one — a dead Manuel would have been replaced by an unknown, and a live humiliated one was worth more.'),
    S('The partition and the last years',
      'From about 1186 he divided the sultanate among his sons, keeping Konya. It did not work for a day longer than he was strong enough to enforce it.',
      'The sons fought each other, and in 1190 the sultanate had to face Frederick Barbarossa\'s crusade — the largest army to cross Anatolia since the First Crusade — while divided. Barbarossa took Konya in May 1190 and passed on through, which he could not have done against a united Rum.',
      'By 1192 Kilij Arslan was in the custody of one son and being moved about by another. He died at Konya that year, and the sultanate took twenty years to reassemble itself under his son Kaykhusraw I.'),
    S('Legacy',
      'Myriokephalon is his monument and it is a curious one. Militarily it was less catastrophic than Manzikert — the army escaped, the emperor lived, no territory changed hands directly — and strategically it mattered more, because after it no Byzantine emperor ever again seriously attempted to reconquer Anatolia.',
      'Manuel himself understood this. His letter to Henry II of England comparing the defeat to Manzikert is the empire\'s own verdict, and the reason the archive treats the two battles as a pair.',
      'His türbe stands in the courtyard of the Alâeddin Mosque on the citadel at Konya, among the tombs of the sultans of Rum — the building his dynasty is remembered by, in the city his father made its capital.')
  ],
  timeline: [
    T('1156', 'Succeeds his father Mas\'ud I', 'Inherits a sultanate ringed by the Danishmendids and a resurgent Byzantium.'),
    T('1162', 'Visits Constantinople', 'Manuel I entertains him for weeks and extracts undertakings that come to nothing.'),
    T('1174', 'Takes the Danishmendid lands', 'Removes his principal Turkish rival in Anatolia.'),
    T('1176', 'Myriokephalon', 'Destroys Manuel I\'s army in the pass and then lets the emperor withdraw on terms.'),
    T('c. 1186', 'Divides the sultanate', 'Partitions his territory among eleven sons, keeping Konya.'),
    T('1190', 'Barbarossa takes Konya', 'The Third Crusade passes through a sultanate too divided to stop it.'),
    T('1192', 'Dies at Konya', 'Effectively deposed by his own sons; buried in the Alâeddin Mosque courtyard.')
  ],
  relatedEntries: {
    events: [
      { title: 'Battle of Myriokephalon', type: 'event', slug: 'battle-of-myriokephalon', label: 'His victory over Manuel I' }
    ],
    people: [
      { title: 'Manuel I Komnenos', type: 'person', slug: 'manuel-i-komnenos', label: 'The emperor he beat, and had once been entertained by' },
      { title: 'Kilij Arslan I', type: 'person', slug: 'kilij-arslan-i', label: 'His great-grandfather, who moved the capital to Konya' }
    ],
    locations: [
      { title: 'Sultanate of Rum', type: 'location', slug: 'sultanate-of-rum', label: 'The state he ruled for thirty-six years' },
      { title: 'Byzantine Empire', type: 'location', slug: 'byzantine-empire', label: 'Whose Anatolian ambitions he ended' }
    ]
  },
  sources: [
    { title: 'Niketas Choniates, History', url: 'https://en.wikipedia.org/wiki/Niketas_Choniates', type: 'primary source' },
    { title: 'Ibn Bibi, al-Awamir al-Ala\'iyya', url: 'https://en.wikipedia.org/wiki/Ibn_Bibi', type: 'primary source' },
    { title: 'Kilij Arslan II', url: 'https://en.wikipedia.org/wiki/Kilij_Arslan_II', type: 'encyclopedia' }
  ]
})

// ---------------------------------------------------------------------------
// 5. Yarmouk, 636.
// ---------------------------------------------------------------------------
upsert('events', {
  id: 'battle-of-yarmouk',
  type: 'event',
  eventType: 'Battle',
  name: 'Battle of Yarmouk',
  aliases: ['Battle of the Yarmuk', 'Yarmuk 636'],
  year: 636,
  location: 'The Yarmouk valley, on the modern Syria–Jordan border',
  eventLocation: 'The plain above the Yarmouk river, east of the Sea of Galilee',
  conflict: 'The Muslim conquest of the Levant',
  image: img('Hayton BNF886 9v.jpg'),
  imageInfo: {
    caption: 'The Battle of Yarmouk in an early fourteenth-century manuscript of Hayton of Corycus, with the Byzantines at left and the Arabs at right.',
    creator: 'Anonymous Catalonian illustrator',
    date: 'c. 1310–1325',
    source: 'Wikimedia Commons, BnF Nouvelle acquisition française 886, fol. 9v',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Hayton_BNF886_9v.jpg',
    note: 'A medieval depiction, but made about 675 years after the battle and thoroughly anachronistic: the Byzantines are drawn in crusader-era mail and the banners are the illustrator\'s invention. It is used because it is a real medieval image of this battle rather than a modern reconstruction of it, and the caption should be read as the only warning needed. Public domain.'
  },
  sectionImages: [
    {
      section: 'The ground',
      src: img('Yarmouk River Valley.jpg'),
      caption: 'The Yarmouk river valley, whose ravines closed the Byzantine army\'s line of retreat.',
      creator: 'Wikimedia Commons contributor',
      date: 'modern photograph',
      source: 'Wikimedia Commons',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Yarmouk_River_Valley.jpg',
      note: 'The terrain is the part of this battle that has not changed. The plain is open enough for cavalry and is bounded by gorges, which is why a defeat here became a destruction. CC BY-SA 3.0.'
    },
    {
      section: 'The battle',
      src: img('Yarmuk Battle Islam.svg'),
      caption: 'A modern reconstruction of the battlefield, showing the rival lines, the roads and the ravines behind the Byzantine position.',
      creator: 'Wikimedia Commons contributor (SPQR10)',
      date: 'modern map',
      source: 'Wikimedia Commons',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Yarmuk_Battle_Islam.svg',
      note: 'Every map of Yarmouk is an interpretation: the sources are late and disagree about the dispositions, the number of days and where each contingent stood. Read it as one reading of the evidence. Released CC0.'
    }
  ],
  summary: 'In August 636 an Arab army destroyed the Byzantine field army in Syria at the Yarmouk, and the empire lost Syria, Palestine and eventually Egypt permanently.',
  details: 'The battle that ended Roman rule in the Levant, eight years after Heraclius had won it back from Persia.',
  outcome: 'Decisive Rashidun victory; the Byzantine army in Syria destroyed and the province abandoned.',
  background: 'Heraclius assembled a large coalition army to reverse the Arab conquest of Syria; it met Khalid ibn al-Walid above the Yarmouk.',
  battle: 'Several days of fighting decided by the Muslim cavalry reserve, which Khalid kept concentrated while the Byzantine wings fought separately.',
  aftermath: 'Heraclius withdrew from Syria altogether. Jerusalem surrendered in 638 and Egypt fell by 642.',
  contentSections: [
    S('Overview',
      'Yarmouk is the most consequential battle in this archive that most readers have never heard of. In a few days in August 636 the Roman Empire lost the provinces that had been the richest part of it since Pompey, and it never got them back.',
      'The timing is what makes it extraordinary. Heraclius had just concluded the longest and most desperate war in Byzantine history, marching into Persia and forcing a peace at Nineveh in 627 that restored every lost province. Yarmouk came nine years later.',
      'The empire that appears in the rest of Track A — fighting on two fronts from a shrunken Anatolian base, reorganised into themes, permanently on the defensive — is the empire this battle created.'),
    S('Background',
      'The war of 602–628 had ruined both great powers. Byzantium had won it, but had done so by stripping its provinces, melting church plate and borrowing against everything, and its frontier arrangements in the Syrian desert — the Ghassanid federates who watched the approaches — had lapsed during the Persian occupation and were not properly restored.',
      'Arab forces took Damascus in 634 and were operating across southern Syria within two years. Heraclius, at Antioch, assembled a large army to end the problem in one campaign: Roman regulars, Armenians under Vahan, Ghassanid Arab cavalry and levies.',
      'The Muslim commanders, hearing of it, concentrated their scattered forces on the Yarmouk — pulling back from Damascus and Emesa to do so, and reportedly returning the tribute they had taken from cities they were abandoning. Whether that gesture is history or edification, the concentration was the right decision.'),
    S('The ground',
      'The battlefield is a plain above the Yarmouk river, east of the Sea of Galilee, bounded on the west and south by the river\'s gorges and on the east by broken ground and a wadi.',
      'It is open enough for large cavalry actions, which suited both armies, and enclosed enough that an army breaking on it has very little room to run — which suited only one of them.',
      'The Byzantines drew up with their backs to that ground. That is the single fact that turns a lost battle into a destroyed army, and it is the one thing about Yarmouk that no source disputes.'),
    S('The battle',
      'The fighting lasted several days — six in the fullest accounts — and consisted of a series of Byzantine attacks that pushed the Muslim line back and were each restored before they broke it.',
      'The mechanism was Khalid ibn al-Walid\'s handling of the cavalry. Instead of dividing the horse between the wings in the conventional way, he kept it concentrated as a single mobile reserve and fed it to whichever part of the line was giving way. The Byzantine army, larger but with divided command between Vahan and the imperial officers, had no equivalent.',
      'On the last day Khalid used that reserve offensively, turned the Byzantine left, and got behind the army. The retreat ran into the ravines. The sources describe men going over the edges in the dark, and while the numbers they give are not usable, the outcome is not in question: the army did not re-form.'),
    S('Why the empire lost',
      'The simplest answers are the reliable ones. The Byzantine army was a coalition assembled for one campaign, with Armenian, Roman and Arab contingents that did not trust each other and a command split between Vahan and Theodore Trithyrios. The Muslim army had a single effective commander and had been fighting together for two years.',
      'Beyond the battlefield, the empire\'s position in Syria was politically hollow. A century of imperial pressure on Miaphysite Christians had left the Syrian population with no particular attachment to Constantinople, and the Ghassanid buffer had been allowed to decay. Some Ghassanid troops are reported to have changed sides during the battle itself.',
      'And the empire was broke. It could assemble this army once. When it was gone there was nothing behind it, which is why the loss of one battle produced the loss of an entire region rather than a second campaign.'),
    S('Aftermath and legacy',
      'Heraclius left Antioch for Constantinople and, in the phrase the chroniclers preserve, said farewell to Syria. Jerusalem held out until 638 and surrendered on terms; Egypt was gone by 642.',
      'The consequences for the empire were structural rather than merely territorial. Losing Syria and Egypt cost roughly two-thirds of its revenue and its grain, and forced the whole reorganisation of the seventh century — the themes, the smaller professional armies, the abandonment of the field-army model that had just failed.',
      'For the caliphate it opened everything. The armies that reached the walls of Constantinople in 674 and again in 717 were operating from Syria, which they held because of this battle.')
  ],
  timeline: [
    T('627', 'Nineveh', 'Heraclius defeats the Persians and, within a year, recovers every lost province.'),
    T('634', 'Damascus falls', 'Arab forces take the greatest city of Roman Syria.'),
    T('636 (summer)', 'The armies concentrate', 'The Muslim commanders abandon their gains to mass on the Yarmouk; Heraclius\'s coalition army marches south.'),
    T('636 (August)', 'Several days of fighting', 'Byzantine attacks push the Muslim line back repeatedly and are restored each time by the cavalry reserve.'),
    T('636 (August)', 'The Byzantine left is turned', 'Khalid takes the army in flank; the retreat runs into the ravines and the force is destroyed.'),
    T('636', 'Syria abandoned', 'Heraclius withdraws to Constantinople; no Roman army returns.'),
    T('638', 'Jerusalem surrenders', 'The patriarch Sophronius yields the city on terms.'),
    T('642', 'Egypt lost', 'Alexandria falls; the empire\'s grain supply and richest province are gone.')
  ],
  participants: [
    {
      side: 'Rashidun Caliphate',
      factions: [{ name: 'Rashidun Caliphate', title: 'Rashidun Caliphate', type: 'location', slug: 'rashidun-caliphate' }],
      leaders: [
        { name: 'Khalid ibn al-Walid', title: 'Khalid ibn al-Walid', type: 'person', slug: 'khalid-ibn-al-walid' },
        { name: 'Abu Ubayda ibn al-Jarrah', note: 'No article yet: the overall commander by the caliph\'s appointment, who by every account left the fighting to Khalid. A 1935 illustration is the only depiction of Khalid that exists; there is none of Abu Ubayda.' }
      ],
      strength: {
        display: 'Unknown; a concentrated force drawn in from Damascus, Emesa and the Jordan',
        confidence: 'unknown',
        note: 'The Arabic sources give figures from 24,000 to 40,000 and the Greek ones give none. All are late. What is clear is that the Muslim army was the smaller of the two and that it had been fighting together for two years.'
      }
    },
    {
      side: 'Byzantine Empire',
      factions: [{ name: 'Byzantine Empire', title: 'Byzantine Empire', type: 'location', slug: 'byzantine-empire' }],
      leaders: [
        { name: 'Vahan', note: 'No article yet: the Armenian commander who led the army in the field. No image of him exists in any form.' },
        { name: 'Theodore Trithyrios', note: 'No article yet: the imperial treasurer given a share of the command, which is part of why there was no single one. No image of him exists.' },
        { name: 'Heraclius', title: 'Heraclius', type: 'person', slug: 'heraclius', note: 'Not present: the emperor directed the campaign from Antioch and did not command in the battle.' }
      ],
      strength: {
        display: 'Unknown; larger than its opponent — Roman regulars, Armenians, Ghassanid Arab cavalry and levies',
        confidence: 'unknown',
        note: 'The figures in the sources run to 100,000 and higher and are not usable. The composition is better attested than the size, and it is the composition that explains the defeat: a coalition with divided command.'
      }
    }
  ],
  battleContinuity: {
    label: 'Continue to where the conquest was finally stopped',
    battleSlug: 'siege-of-constantinople-717',
    relationship: 'same-war',
    reason: 'Yarmouk gave the caliphate Syria, and Syria was the base from which its armies reached the walls of Constantinople. The advance that began here was stopped in 717–718.'
  },
  relatedEntries: {
    people: [
      { title: 'Khalid ibn al-Walid', type: 'person', slug: 'khalid-ibn-al-walid', label: 'Who commanded the winning side' },
      { title: 'Heraclius', type: 'person', slug: 'heraclius', label: 'Who lost in nine years what he had spent twenty-six winning' }
    ],
    events: [
      { title: 'Battle of Nineveh', type: 'event', slug: 'battle-of-nineveh', label: 'The victory this defeat undid' },
      { title: 'Siege of Constantinople (717–718)', type: 'event', slug: 'siege-of-constantinople-717', label: 'Where the advance from Syria was stopped' }
    ],
    locations: [
      { title: 'Rashidun Caliphate', type: 'location', slug: 'rashidun-caliphate', label: 'The victor' },
      { title: 'Byzantine Empire', type: 'location', slug: 'byzantine-empire', label: 'Which lost Syria, Palestine and Egypt as a result' }
    ]
  },
  sources: [
    { title: 'Al-Baladhuri, Futuh al-Buldan', url: 'https://en.wikipedia.org/wiki/Al-Baladhuri', type: 'primary source' },
    { title: 'Theophanes the Confessor, Chronographia', url: 'https://en.wikipedia.org/wiki/Theophanes_the_Confessor', type: 'primary source' },
    { title: 'Battle of the Yarmuk', url: 'https://en.wikipedia.org/wiki/Battle_of_the_Yarmuk', type: 'encyclopedia' }
  ]
})

// ---------------------------------------------------------------------------
// 6. Myriokephalon, 1176.
// ---------------------------------------------------------------------------
upsert('events', {
  id: 'battle-of-myriokephalon',
  type: 'event',
  eventType: 'Battle',
  name: 'Battle of Myriokephalon',
  aliases: ['Battle of Myriocephalum', 'Düzbel', 'Miryokefalon'],
  year: 1176,
  location: 'A mountain pass in Phrygia, south-western Anatolia',
  eventLocation: 'The pass at Myriokephalon, on the road towards Konya',
  conflict: 'The Byzantine–Seljuk wars',
  image: img('Istanbul Military Museum Historic images Battle of Myriokephalon in 2012 01 6492.jpg'),
  imageInfo: {
    caption: 'Seljuk horsemen falling on the Byzantine column in the pass, in a modern painting displayed at the Military Museum in Istanbul.',
    creator: 'Modern painter; photographed by Dosseman',
    date: 'modern painting, photographed 2012',
    source: 'Wikimedia Commons (Istanbul Military Museum)',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Istanbul_Military_Museum_Historic_images_Battle_of_Myriokephalon_in_2012_01_6492.jpg',
    note: 'A modern museum painting, not a medieval image — no contemporary depiction of this battle exists. It shows the Byzantines in crusader-style mail with crosses, which is a painter\'s convention rather than evidence, and it is a Turkish national museum\'s picture of a Turkish victory. It is used because it renders the one thing that decided the battle: a column caught in a defile by troops holding the heights. CC BY-SA 4.0.'
  },
  sectionImages: [
    {
      section: 'Aftermath',
      src: img('Sultanate of Rûm.svg'),
      caption: 'The growth of the Sultanate of Rum, centred on Iconium — the territory Manuel marched to recover and never did.',
      creator: 'Wikimedia Commons contributor (Swordrist)',
      date: 'modern map',
      source: 'Wikimedia Commons',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Sultanate_of_R%C3%BBm.svg',
      note: 'A modern map showing the sultanate\'s expansion in phases. It labels Konya by its Italian form, Iconio. CC BY-SA 4.0.'
    },
    {
      section: 'Legacy',
      src: img('Two Warriors on a Seljuq Marble Bas Relief.jpg'),
      caption: 'Two warriors on a twelfth-century Seljuk marble relief from Konya, from the culture that held Anatolia after 1176.',
      creator: 'Anatolian Seljuk sculptor, Konya; photographed by Suleyman Pa$a',
      date: 'twelfth century',
      source: 'Wikimedia Commons (Museum of Turkish and Islamic Arts, Istanbul)',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Two_Warriors_on_a_Seljuq_Marble_Bas_Relief.jpg',
      note: 'Figural stone relief of this kind is characteristic of Anatolian Seljuk art and unusual in the wider Islamic world. Museum inventory 2540, from Konya. CC BY 4.0.'
    }
  ],
  summary: 'In 1176 Manuel I Komnenos marched on Konya and was ambushed in a pass at Myriokephalon, ending the last serious Byzantine attempt to recover Anatolia.',
  details: 'Called a second Manzikert by the emperor who lost it, and in strategic terms the more final of the two.',
  outcome: 'Seljuk victory; the Byzantine siege train destroyed and the emperor allowed to withdraw on terms.',
  background: 'Manuel I had spent his reign restoring Byzantine power and moved at last against the Sultanate of Rum itself.',
  battle: 'The Byzantine column was caught strung out in a defile with the Turks holding the heights on both sides.',
  aftermath: 'Manuel demolished two frontier fortresses as agreed and never campaigned in Anatolia again; the interior stayed Turkish.',
  contentSections: [
    S('Overview',
      'Manuel I Komnenos spent thirty years making the Byzantine Empire look like a great power again — in Italy, in Hungary, in Antioch, in the Balkans — and in 1176 he moved on the thing that would have made it one: the recovery of Anatolia.',
      'He marched for Konya, the Seljuk capital, with a large army and a siege train. In a pass at Myriokephalon the sultan Kilij Arslan II caught the column stretched out along the road and destroyed a substantial part of it.',
      'Manuel got out, having agreed to demolish two frontier fortresses. He never tried again, and neither did anyone else. The Anatolian plateau, lost after Manzikert a century earlier, was now lost permanently.'),
    S('Background',
      'The Komnenian recovery is real and is easy to underrate. Alexios I, John II and Manuel I between them had restored the coasts of Anatolia, rebuilt the army, and made the empire the most formidable state in the eastern Mediterranean again.',
      'What none of them had done was retake the interior. The plateau was Turkish, and Konya was a capital. Manuel had spent years managing Kilij Arslan II diplomatically — including entertaining him in Constantinople for weeks in 1162 — while the sultan absorbed the Danishmendids and became the single Turkish power in Anatolia rather than one of several.',
      'By 1176 Manuel had concluded that the diplomacy had failed, which it had, and that the answer was a campaign against Konya itself. The army he assembled was large, encumbered by siege equipment, and included Hungarian and Serbian contingents and a force from Antioch.'),
    S('The march and the offer',
      'Kilij Arslan sent envoys as the Byzantines advanced, offering terms. Manuel refused them. Every account — Byzantine and Turkish, hostile and sympathetic — treats this as the mistake that decided the campaign, and Manuel\'s own officers are described as advising him to accept.',
      'The refusal made sense on paper. The sultan was offering to concede what a victory would take anyway, and Manuel had the larger army and had come a long way to use it.',
      'What he had not weighed properly was the route. The road to Konya passed through defiles in which a long column with a siege train could not deploy, and the Turks had every reason to know that better than he did.'),
    S('The battle',
      'The Byzantine army entered the pass at Myriokephalon in September 1176 in a column strung out over a considerable distance, with the divisions marching separately and the baggage and siege train in the middle.',
      'The Turks held the heights on both sides and attacked the column where it could not turn to face them. The rearward divisions were cut up badly, the siege train was lost, and Niketas Choniates — the fullest source, writing later and no admirer of Manuel — describes the emperor considering abandoning the army and being shamed out of it.',
      'The front of the column got clear of the defile and the army was not annihilated. That distinction matters militarily and mattered very little strategically, which is the paradox of this battle.'),
    S('Aftermath',
      'Kilij Arslan offered terms a second time and Manuel took them: withdrawal in exchange for demolishing the frontier fortresses at Dorylaeum and Sublaeum.',
      'Letting the emperor go was a deliberate choice by a sultan who had just beaten him, and a shrewd one. A dead Manuel meant an unknown successor and a war of revenge; a live and humiliated Manuel was a neighbour who would not come back.',
      'He did not come back. Manuel demolished one fortress and reneged on the other, fought no further campaign in the interior, and died four years later. His empire outlived him by twenty-four years before the Fourth Crusade finished it.'),
    S('Legacy',
      'Manuel himself supplied the comparison that has stuck. In a letter to Henry II of England he likened the defeat to Manzikert, which is the empire\'s own verdict on it and the reason this archive treats the two as a pair.',
      'The comparison is not exact and the ways it fails are instructive. Manzikert cost an emperor his freedom and a battle; Myriokephalon cost neither. But Manzikert was followed by civil wars that lost Anatolia, whereas Myriokephalon was followed by nothing at all — which is precisely the point. After 1176 no Byzantine ruler seriously attempted to reconquer the plateau, and the Turkish presence in Anatolia stopped being a problem to be solved and became a permanent fact.',
      'What grew on that plateau over the following century was the sultanate, then the beyliks, and then the smallest of the beyliks, whose first field victory over a Byzantine army came at Bapheus in 1302.')
  ],
  timeline: [
    T('1071', 'Manzikert', 'The defeat and the civil wars after it open Anatolia to Turkish settlement.'),
    T('1143–1180', 'Manuel I\'s reign', 'The Komnenian recovery restores the coasts, the army and the empire\'s standing.'),
    T('1162', 'Kilij Arslan II in Constantinople', 'Manuel entertains the sultan for weeks and extracts undertakings that come to nothing.'),
    T('1174', 'The sultan absorbs the Danishmendids', 'Rum becomes the single Turkish power in Anatolia rather than one of several.'),
    T('1176 (summer)', 'Manuel marches on Konya', 'A large army with a siege train sets out to take the Seljuk capital.'),
    T('1176', 'Terms refused', 'Kilij Arslan offers a settlement on the march; Manuel declines it against advice.'),
    T('1176 (September)', 'The pass', 'The column is caught in the defile; the siege train is lost and the rear divisions cut up.'),
    T('1176', 'Withdrawal on terms', 'Manuel agrees to demolish two frontier fortresses and leaves Anatolia for good.')
  ],
  participants: [
    {
      side: 'Sultanate of Rum',
      factions: [{ name: 'Sultanate of Rum', title: 'Sultanate of Rum', type: 'location', slug: 'sultanate-of-rum' }],
      leaders: [{ name: 'Kilij Arslan II', title: 'Kilij Arslan II', type: 'person', slug: 'kilij-arslan-ii' }],
      strength: {
        display: 'Unknown; a Turkish army fighting on chosen ground, strong in horse archers',
        confidence: 'unknown',
        note: 'No usable figures survive. The advantage was position rather than numbers, and the sultan\'s willingness to offer terms twice suggests he did not think he had overwhelming force.'
      }
    },
    {
      side: 'Byzantine Empire',
      factions: [{ name: 'Byzantine Empire', title: 'Byzantine Empire', type: 'location', slug: 'byzantine-empire' }],
      leaders: [{ name: 'Manuel I Komnenos', title: 'Manuel I Komnenos', type: 'person', slug: 'manuel-i-komnenos' }],
      strength: {
        display: 'Unknown; a large field army with a siege train, including Hungarian, Serbian and Antiochene contingents',
        confidence: 'unknown',
        note: 'Choniates gives no figure worth using. The siege train is the significant detail: it is what made the column long, slow and unable to deploy in a defile.'
      }
    }
  ],
  battleContinuity: {
    label: 'Continue to what became of the empire that lost here',
    battleSlug: 'siege-of-constantinople-1204',
    relationship: 'same-region',
    reason: 'Myriokephalon ended Byzantine hopes in Anatolia and left the empire dependent on its European provinces and on western goodwill. Twenty-eight years later the westerners took the capital.'
  },
  relatedEntries: {
    people: [
      { title: 'Manuel I Komnenos', type: 'person', slug: 'manuel-i-komnenos', label: 'Who called it a second Manzikert' },
      { title: 'Kilij Arslan II', type: 'person', slug: 'kilij-arslan-ii', label: 'Who chose the ground and then let the emperor go' }
    ],
    events: [
      { title: 'Battle of Manzikert', type: 'event', slug: 'battle-of-manzikert', label: 'The battle Manuel compared it to' },
      { title: 'Battle of Sirmium', type: 'event', slug: 'battle-of-sirmium', label: 'Manuel\'s great victory, nine years earlier' }
    ],
    locations: [
      { title: 'Sultanate of Rum', type: 'location', slug: 'sultanate-of-rum', label: 'The victor, and the permanent owner of the plateau' },
      { title: 'Byzantine Empire', type: 'location', slug: 'byzantine-empire', label: 'Which never campaigned in the Anatolian interior again' }
    ]
  },
  sources: [
    { title: 'Niketas Choniates, History', url: 'https://en.wikipedia.org/wiki/Niketas_Choniates', type: 'primary source' },
    { title: 'Manuel I\'s letter to Henry II of England', url: 'https://en.wikipedia.org/wiki/Battle_of_Myriokephalon', type: 'primary source' },
    { title: 'Battle of Myriokephalon', url: 'https://en.wikipedia.org/wiki/Battle_of_Myriokephalon', type: 'encyclopedia' }
  ]
})

// ---------------------------------------------------------------------------
// 7. The Fourth Crusade — the campaign, as distinct from the sack it produced.
// ---------------------------------------------------------------------------
upsert('events', {
  id: 'fourth-crusade',
  type: 'event',
  eventType: 'War',
  name: 'Fourth Crusade',
  aliases: ['The Fourth Crusade', 'The crusade of 1202–1204'],
  year: 1202,
  location: 'Venice, the Adriatic and Constantinople',
  eventLocation: 'From Venice to Zadar to Constantinople',
  conflict: 'The Crusades',
  image: img('Fourth Crusade and foundation of the Latin Empire.png'),
  imageInfo: {
    caption: 'The route of the Fourth Crusade from Venice to Zadar and on to Constantinople, and the Latin Empire and Venetian possessions that came out of it.',
    creator: 'Wikimedia Commons contributor (Kandi)',
    date: 'modern map of 1202–1204',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Fourth_Crusade_and_foundation_of_the_Latin_Empire.png',
    note: 'A modern map, and the clearest statement of what the crusade actually did: the dotted line runs from Venice to a Christian city in Dalmatia and then to a Christian capital, and never approaches Egypt or Jerusalem. CC BY-SA 4.0.'
  },
  sectionImages: [
    {
      section: 'The debts and the diversion',
      src: img('Gustave dore crusades entry of the crusaders into constantinople.jpg'),
      caption: 'The crusaders entering Constantinople, engraved by Gustave Doré for a nineteenth-century history of the crusades.',
      creator: 'Gustave Doré',
      date: 'c. 1877',
      source: 'Wikimedia Commons',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Gustave_dore_crusades_entry_of_the_crusaders_into_constantinople.jpg',
      note: 'A nineteenth-century illustration, six hundred years after the event and shaped by the romantic view of the crusades it was drawn for. Public domain.'
    }
  ],
  summary: 'The Fourth Crusade set out in 1202 to attack Egypt, could not pay the Venetians for its fleet, and ended by sacking Constantinople in 1204 without ever reaching the Holy Land.',
  details: 'The crusade that never fought a Muslim army, and destroyed the largest Christian state in Europe instead.',
  outcome: 'Constantinople taken and partitioned; a Latin Empire established; the crusade dissolved without going to Egypt or Jerusalem.',
  background: 'Innocent III called a crusade against Egypt; the army contracted with Venice for a fleet sized for far more men than turned up.',
  aftermath: 'The Byzantine Empire fragmented into successor states and was not restored until 1261, in a much weakened form.',
  contentSections: [
    S('Overview',
      'The Fourth Crusade is the one that went wrong in a way that is still argued about eight centuries later, and the argument matters because the two available explanations point in very different directions.',
      'The events are not in dispute. Innocent III proclaimed a crusade against Egypt in 1198. The army contracted with Venice for transport, could not pay, worked off part of the debt by capturing the Christian city of Zadar for Venice, was excommunicated for it, then diverted to Constantinople to install a claimant who had promised money it also never received, and finally stormed and sacked the city in April 1204.',
      'What is disputed is whether that sequence was a conspiracy or an accident. The archive\'s position is stated in this article: it looks much more like a chain of contingent decisions, each defensible in isolation, made by men progressively trapped by a debt.'),
    S('The debts and the diversion',
      'The contract with Venice was for a fleet to carry 33,500 men. About a third of that number arrived, because many crusaders had made their own arrangements from other ports, and the army could not pay a bill calculated for three times its size.',
      'Venice had spent a year building the fleet and had suspended its other commerce to do it. Enrico Dandolo, the doge — old, reportedly blind, and one of the shrewdest political operators of the century — proposed that the debt be worked off by services. The first service was the capture of Zadar, a Christian city under Hungarian protection, in November 1202. Innocent III excommunicated the whole army for it.',
      'At Zadar the crusade was approached by Alexios Angelos, son of the deposed emperor Isaac II, who offered enormous sums, ten thousand troops and the submission of the Greek church to Rome if the army would restore his father. It was a way out of a debt the crusade could not otherwise clear, and they took it.'),
    S('Was it a conspiracy?',
      'The conspiracy readings come in several forms — that Venice planned the diversion to remove a commercial rival, that Philip of Swabia orchestrated it for his brother-in-law Alexios, that Boniface of Montferrat did.',
      'The evidence for all of them is thin and mostly consists of the outcome. Against them: Venice had extensive privileges in Constantinople already and its trade depended on the empire functioning; the fleet was built to a contract that predated Alexios\'s approach; and the decision to storm the city in April 1204 was taken only after the regime the crusaders had installed collapsed and the money stopped.',
      'The alternative reading is less satisfying and better supported. A debt too large to pay, an army too small to leave, a fleet it did not control, an offer that solved everything, a puppet who could not deliver, and a city that would not pay — with each step following from the last. The archive holds to that, while noting that Venice profited enormously and that the men who benefited most were the ones making the decisions.'),
    S('The Latin Empire and the partition',
      'After the city fell the victors partitioned the empire by a treaty drafted in advance — the Partitio Romaniae. Baldwin of Flanders became Latin emperor; Boniface of Montferrat took Thessalonica; Venice took three-eighths of the empire, chosen with an eye to harbours rather than territory, and the islands and ports that made it a maritime power for the next three centuries.',
      'The Greek response was to reconstitute the empire elsewhere: at Nicaea, in Epirus, and at Trebizond, each claiming to be the real one. It was Nicaea that eventually won, and it took Constantinople back in 1261.',
      'The crusade itself simply ended. No part of it went on to Egypt or Jerusalem, which had been the point.'),
    S('Legacy',
      'The Latin Empire lasted fifty-seven years and was weak for all of them. The Byzantine Empire restored in 1261 held a fraction of its former territory, had lost its fleet and its treasury, and was permanently dependent on Italian commercial powers it could not tax.',
      'The schism between the Greek and Latin churches, which had been a formal quarrel of theologians since 1054, became something a Greek population had personal reasons to hold. That the empire\'s later appeals for western help against the Ottomans went largely unanswered, and were bitterly resented at home when they were made, has its root here.',
      'Innocent III, who had excommunicated the army and then had to accept what it did, wrote afterwards that the crusaders had turned their swords against Christians and taken the empire not for Christ but for themselves. It remains the sharpest verdict, and it was written by the man who called the crusade.')
  ],
  timeline: [
    T('1198', 'Innocent III calls the crusade', 'The target is Egypt, as the strategic route to Jerusalem.'),
    T('1201', 'The Venetian contract', 'Venice agrees to build and crew a fleet for 33,500 men; about a third assemble.'),
    T('1202 (November)', 'Zadar taken', 'The army captures a Christian city for Venice to work off its debt and is excommunicated.'),
    T('1203 (July)', 'First assault on Constantinople', 'Isaac II is restored and his son crowned Alexios IV alongside him.'),
    T('1204 (January)', 'The puppet regime collapses', 'Alexios IV, unable to pay, is deposed and strangled by Alexios V Doukas.'),
    T('1204 (April)', 'The city stormed and sacked', 'The crusaders take Constantinople and sack it for three days.'),
    T('1204 (May)', 'The Latin Empire founded', 'Baldwin of Flanders is crowned; the Partitio Romaniae divides the empire.'),
    T('1261', 'Constantinople recovered', 'Nicaean troops walk in through a postern gate and the Latin Empire ends.')
  ],
  participants: [
    {
      side: 'The crusaders and Venice',
      factions: [{ name: 'Republic of Venice', note: 'No article yet in this archive: the naval power that built the fleet, financed the crusade and took three-eighths of the empire.' }],
      leaders: [
        { name: 'Enrico Dandolo', title: 'Enrico Dandolo', type: 'person', slug: 'enrico-dandolo' },
        { name: 'Boniface of Montferrat', note: 'No article yet: the crusade\'s military leader, who took Thessalonica and was passed over for the imperial throne.' },
        { name: 'Baldwin of Flanders', note: 'No article yet: elected first Latin emperor in 1204 and captured by the Bulgarians a year later.' }
      ],
      strength: {
        display: 'About 10,000–12,000 crusaders and roughly 200 Venetian ships',
        confidence: 'estimated',
        note: 'The shortfall is the whole story: the fleet was contracted for 33,500 men and about a third of that number came, which created the debt that drove everything afterwards.'
      }
    },
    {
      side: 'Byzantine Empire',
      factions: [{ name: 'Byzantine Empire', title: 'Byzantine Empire', type: 'location', slug: 'byzantine-empire' }],
      leaders: [
        { name: 'Alexios III Angelos', note: 'No article yet: the reigning emperor in 1203, who fled the city with the treasury rather than fight.' },
        { name: 'Alexios V Doukas', note: 'No article yet: seized power in January 1204, organised the only serious defence, and fled when the walls were carried. A manuscript portrait of him survives in the Mutinensis codex.' }
      ],
      strength: {
        display: 'Unknown; a large garrison including the Varangian Guard, and a fleet that had been allowed to rot',
        confidence: 'unknown',
        note: 'The defence failed less for want of men than for want of anyone willing to lead it: two emperors fled in nine months. The Varangians, who were paid, fought.'
      }
    }
  ],
  relatedEntries: {
    events: [
      { title: 'Siege and Sack of Constantinople (1204)', type: 'event', slug: 'siege-of-constantinople-1204', label: 'What the crusade did instead of going to Egypt' },
      { title: 'Third Crusade', type: 'event', slug: 'third-crusade', label: 'The crusade before it' },
      { title: 'Recovery of Constantinople', type: 'event', slug: 'recovery-of-constantinople', label: 'The undoing, fifty-seven years later' }
    ],
    people: [
      { title: 'Enrico Dandolo', type: 'person', slug: 'enrico-dandolo', label: 'The doge who held the debt' }
    ],
    locations: [
      { title: 'Constantinople', type: 'location', slug: 'constantinople', label: 'The city it took' },
      { title: 'Latin Empire', type: 'location', slug: 'latin-empire', label: 'What it founded' },
      { title: 'Empire of Nicaea', type: 'location', slug: 'empire-of-nicaea', label: 'The successor state that eventually won' }
    ]
  },
  sources: [
    { title: 'Geoffrey of Villehardouin, The Conquest of Constantinople', url: 'https://en.wikipedia.org/wiki/Geoffrey_of_Villehardouin', type: 'primary source' },
    { title: 'Niketas Choniates, History', url: 'https://en.wikipedia.org/wiki/Niketas_Choniates', type: 'primary source' },
    { title: 'Robert of Clari, The Conquest of Constantinople', url: 'https://en.wikipedia.org/wiki/Robert_of_Clari', type: 'primary source' },
    { title: 'Fourth Crusade', url: 'https://en.wikipedia.org/wiki/Fourth_Crusade', type: 'encyclopedia' }
  ]
})

// ---------------------------------------------------------------------------
// 8. The siege and sack of Constantinople, 1204.
//
// TYPED `Siege`, NOT `Fall of City`, and the distinction is deliberate. The 1453
// fall and the 1261 recovery are both typed `Fall of City` because neither was
// decided by fighting the defenders off a wall — 1261 involved no fighting at
// all. 1204 was: two assaults on the sea walls, on 9 and 12 April, the second of
// which carried them. Typing it honestly also makes it a legal continuity target,
// which `fall-of-constantinople` is not — that is why Sirmium was left pointing
// at Kosovo in M11 and can now be re-pointed here.
// ---------------------------------------------------------------------------
upsert('events', {
  id: 'siege-of-constantinople-1204',
  type: 'event',
  eventType: 'Siege',
  name: 'Siege and Sack of Constantinople',
  aliases: ['Sack of Constantinople', 'Sack of Constantinople (1204)', 'The sack of 1204'],
  year: 1204,
  location: 'Constantinople',
  eventLocation: 'The sea walls along the Golden Horn, and the city within them',
  conflict: 'The Fourth Crusade',
  image: img('Eugène Delacroix - Prise de Constantinople par les croisés (12 avril 1204).jpg'),
  imageInfo: {
    caption: 'The crusaders entering Constantinople on 12 April 1204, painted by Eugène Delacroix in 1840.',
    creator: 'Eugène Delacroix',
    date: '1840',
    source: 'Wikimedia Commons (Musée du Louvre, Inv. 3821)',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Eug%C3%A8ne_Delacroix_-_Prise_de_Constantinople_par_les_crois%C3%A9s_(12_avril_1204).jpg',
    note: 'A nineteenth-century history painting, six centuries after the event and not evidence for any detail in it. It is used because it is the image through which the sack entered the western imagination, and because Delacroix put the conquerors on horseback in the middle distance and the people of the city in the foreground — which is a reading of the event, and the right one. Public domain.'
  },
  sectionImages: [
    {
      section: 'The sack',
      src: img('PriseDeConstantinople1204PalmaLeJeune.JPG'),
      caption: 'The taking of Constantinople, painted by Palma il Giovane for the Doge\'s Palace in Venice around 1600.',
      creator: 'Palma il Giovane (Jacopo Negretti, 1544–1620)',
      date: 'c. 1600',
      source: 'Wikimedia Commons',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:PriseDeConstantinople1204PalmaLeJeune.JPG',
      note: 'Painted for the Venetian state, four centuries later, as a celebration. Worth seeing beside the Delacroix: the same event as the victors chose to commemorate it. Public domain.'
    },
    {
      section: 'The partition',
      src: img('LatinEmpire2.png'),
      caption: 'The partition of the Byzantine Empire after 1204: the Latin Empire, the Venetian share, and the Greek successor states.',
      creator: 'Wikimedia Commons contributor',
      date: 'modern map of c. 1204',
      source: 'Wikimedia Commons',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:LatinEmpire2.png',
      note: 'Borders are approximate, as the map itself says — the Partitio Romaniae allocated a great deal of territory that nobody involved actually controlled. CC BY-SA 3.0.'
    }
  ],
  summary: 'In April 1204 the army of the Fourth Crusade stormed Constantinople and sacked it for three days, the first time in nine centuries the city had been taken by an enemy.',
  details: 'A crusade raised to attack Egypt destroyed the largest Christian state in Europe instead.',
  outcome: 'The city taken and sacked; the Byzantine Empire partitioned and a Latin Empire founded in its place.',
  background: 'The crusade had installed Alexios IV, who could not pay what he had promised; when he was deposed and killed, the army decided to take the city for itself.',
  battle: 'Two assaults on the sea walls along the Golden Horn, on 9 and 12 April; the second carried them and the defence collapsed.',
  aftermath: 'Three days of sack, the destruction or dispersal of much of the city\'s art and libraries, and fifty-seven years of Latin rule.',
  contentSections: [
    S('Overview',
      'Constantinople had been besieged by Avars, Persians, Arabs, Bulgars, Rus and Vikings across nine centuries, and had never fallen. In April 1204 it was taken by an army of western Christians who had set out to attack Egypt.',
      'The crusade had come to Constantinople the previous year to install Alexios IV, who had promised it enormous sums. He could not deliver, was deposed and strangled in January 1204, and his successor Alexios V repudiated the debt entirely.',
      'The crusaders and the Venetians then agreed among themselves — in a treaty signed in March, before the assault — to take the city and divide the empire. They stormed the sea walls on 12 April and sacked the city for three days.'),
    S('The assault',
      'The attack came from the Golden Horn rather than the land walls, which is the tactical fact that decided it. The Theodosian land walls had never been forced; the sea walls were lower, and the Venetian fleet could bring ships directly against them.',
      'The first assault, on 9 April, failed. The ships could not hold position against the wind and current and the troops that landed were driven off. The second, on 12 April, lashed ships together in pairs to steady the flying bridges, and a handful of men got onto the towers.',
      'Once a section of wall was carried the defence collapsed with startling speed. Alexios V fled the city that night. The Varangian Guard, who were paid professionals and had fought properly throughout, negotiated. By the following morning the city was open.'),
    S('The sack',
      'The sack lasted three days and was, by the standards even of its own century, exceptional — and it is worth being careful here, because the account is not only Greek. Villehardouin and Robert of Clari, both participants, describe plunder on a scale they found remarkable, and Pope Innocent III condemned it in the strongest terms available to him.',
      'The bronze horses that stand at San Marco in Venice came from the Hippodrome. The Pala d\'Oro was enriched with Constantinopolitan enamels. Relics went west in enormous numbers and are traceable in French and Italian church inventories for centuries afterwards. Niketas Choniates, who was there and lost everything, describes soldiers drinking from altar vessels in Hagia Sophia and a prostitute seated on the patriarch\'s throne — a scene written to shock and probably not invented.',
      'The bronze statuary of the Hippodrome and the fora, which included antique work that had survived a thousand years, was melted down for coin. That is the loss that cannot be recovered or repatriated, and the one the archive would single out: much of what the classical world had left standing in one place ended in 1204 as small change.'),
    S('The partition',
      'The Partitio Romaniae had been drafted before the walls were carried. Baldwin of Flanders was elected Latin emperor; Boniface of Montferrat, who had expected it, took Thessalonica instead; and Venice took three-eighths of the empire, choosing harbours, islands and the approaches to the Black Sea rather than land.',
      'That choice made Venice the dominant commercial power of the eastern Mediterranean for three hundred years and is the clearest single beneficiary of the whole affair.',
      'The Greek response was to reconstitute the empire in three places at once — Nicaea, Epirus and Trebizond — each claiming the imperial title. The archive follows that fight through Pelagonia in 1259 to the recovery of the city in 1261.'),
    S('Legacy',
      'The empire restored in 1261 was a different order of thing: a regional power with a fraction of its territory, no fleet, an economy in the hands of Italian merchants it could not tax, and a permanent Turkish frontier in Anatolia it could no longer push back.',
      'The damage to relations between the Greek and Latin churches outlived every political consequence. The schism of 1054 had been an argument among clergy; after 1204 it was something the population of a great city had personal cause to hold, and the later attempts at union — Lyon in 1274, Florence in 1439 — foundered on that as much as on theology.',
      'When the Ottomans took the city in 1453 they took a place that had been sacked once already, by its allies, and had never fully recovered. It is difficult to read the two events apart.')
  ],
  timeline: [
    T('1203 (July)', 'The first intervention', 'The crusade restores Isaac II and crowns his son Alexios IV.'),
    T('1203–1204 (winter)', 'The money does not come', 'Alexios IV cannot pay what he promised; relations with the army collapse.'),
    T('1204 (January)', 'Alexios V seizes power', 'Alexios IV is deposed and strangled; the new emperor repudiates the debt.'),
    T('1204 (March)', 'The Partitio Romaniae', 'Crusaders and Venetians agree in writing how to divide the empire before taking it.'),
    T('1204 (9 April)', 'The first assault fails', 'Ships cannot hold against wind and current; the landing parties are driven off.'),
    T('1204 (12 April)', 'The sea walls carried', 'Paired ships steady the flying bridges; a section of wall is taken and the defence collapses.'),
    T('1204 (12–15 April)', 'The sack', 'Three days of plunder; bronzes melted, relics dispersed, libraries destroyed.'),
    T('1204 (May)', 'Baldwin crowned', 'A Latin emperor is enthroned in Hagia Sophia and the empire is partitioned.')
  ],
  participants: [
    {
      side: 'The Fourth Crusade and Venice',
      factions: [{ name: 'Republic of Venice', note: 'No article yet in this archive: it supplied the fleet, whose ability to bring ships against the sea walls decided the assault.' }],
      leaders: [
        { name: 'Enrico Dandolo', title: 'Enrico Dandolo', type: 'person', slug: 'enrico-dandolo' },
        { name: 'Boniface of Montferrat', note: 'No article yet: the crusade\'s military leader, passed over for the throne and compensated with Thessalonica.' },
        { name: 'Baldwin of Flanders', note: 'No article yet: elected Latin emperor a month after the sack.' }
      ],
      strength: {
        display: 'About 10,000–12,000 crusaders and roughly 200 Venetian ships',
        confidence: 'estimated',
        note: 'A small force by the standards of the walls it attacked. It succeeded because it attacked the sea walls with a fleet rather than the land walls, and because the city\'s leadership twice ran away.'
      }
    },
    {
      side: 'Byzantine Empire',
      factions: [{ name: 'Byzantine Empire', title: 'Byzantine Empire', type: 'location', slug: 'byzantine-empire' }],
      leaders: [
        { name: 'Alexios V Doukas', note: 'No article yet: seized power in January 1204, mounted the only real defence, and fled the night the walls were carried. A portrait of him survives in the Mutinensis manuscript, so an article is possible.' },
        { name: 'The Varangian Guard', note: 'Not a person: the Scandinavian and English axe-guard, the one part of the defence that fought to the end and then negotiated rather than fled.' }
      ],
      strength: {
        display: 'Unknown; a large garrison behind the strongest walls in Europe, and no fleet worth the name',
        confidence: 'unknown',
        note: 'The city was not short of men. It was short of a fleet — allowed to decay over the previous decades — and of anyone in authority prepared to stay.'
      }
    }
  ],
  battleContinuity: {
    label: 'Continue to the fight over the wreckage',
    battleSlug: 'battle-of-pelagonia',
    relationship: 'same-war',
    reason: 'The sack broke the empire into rival successor states; Pelagonia in 1259 decided which of them would put it back together.'
  },
  relatedEntries: {
    events: [
      { title: 'Fourth Crusade', type: 'event', slug: 'fourth-crusade', label: 'The campaign that ended here' },
      { title: 'Battle of Pelagonia', type: 'event', slug: 'battle-of-pelagonia', label: 'The successor states fighting over what was left' },
      { title: 'Recovery of Constantinople', type: 'event', slug: 'recovery-of-constantinople', label: 'The city taken back in 1261' },
      { title: 'Fall of Constantinople', type: 'event', slug: 'fall-of-constantinople', label: 'The second and final fall, in 1453' }
    ],
    people: [
      { title: 'Enrico Dandolo', type: 'person', slug: 'enrico-dandolo', label: 'The doge, buried in Hagia Sophia' },
      { title: 'Michael VIII Palaiologos', type: 'person', slug: 'michael-viii-palaiologos', label: 'Who took the city back' }
    ],
    locations: [
      { title: 'Constantinople', type: 'location', slug: 'constantinople', label: 'Taken by an enemy for the first time in nine centuries' },
      { title: 'Latin Empire', type: 'location', slug: 'latin-empire', label: 'What replaced the empire for fifty-seven years' }
    ]
  },
  sources: [
    { title: 'Geoffrey of Villehardouin, The Conquest of Constantinople', url: 'https://en.wikipedia.org/wiki/Geoffrey_of_Villehardouin', type: 'primary source' },
    { title: 'Niketas Choniates, History', url: 'https://en.wikipedia.org/wiki/Niketas_Choniates', type: 'primary source' },
    { title: 'Robert of Clari, The Conquest of Constantinople', url: 'https://en.wikipedia.org/wiki/Robert_of_Clari', type: 'primary source' },
    { title: 'Sack of Constantinople (1204)', url: 'https://en.wikipedia.org/wiki/Sack_of_Constantinople', type: 'encyclopedia' }
  ]
})

// ---------------------------------------------------------------------------
// 9. Bapheus, 1302.
//
// IMAGE NOTE. The primary is a map of Anatolia in 1300 rather than a picture of
// the fighting, and the reason is that the map states the point of the article
// better than any battle scene could: Osman's territory is the smallest coloured
// patch on it. The one near-contemporary depiction available — an Ottoman court
// miniature of c. 1558 — survives only as a monochrome halftone and credits the
// battle to Orhan rather than Osman, so it sits in the section where that
// discrepancy can be explained.
// ---------------------------------------------------------------------------
upsert('events', {
  id: 'battle-of-bapheus',
  type: 'event',
  eventType: 'Battle',
  name: 'Battle of Bapheus',
  aliases: ['Battle of Koyunhisar', 'Bapheus 1302'],
  year: 1302,
  location: 'Near Nicomedia, in Bithynia',
  eventLocation: 'The plain of Bapheus, on the road east from Nicomedia',
  conflict: 'The Byzantine–Ottoman wars',
  image: img('Anatolian Beyliks in 1300.png'),
  imageInfo: {
    caption: 'Anatolia in 1300, with Osman\'s territory the small red patch on the Byzantine frontier, two years before Bapheus.',
    creator: 'Wikimedia Commons contributor (Khateeb88)',
    date: 'modern map of Anatolia in 1300',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Anatolian_Beyliks_in_1300.png',
    note: 'A modern map, and the reason it leads this article rather than a battle scene: it shows that in 1300 the Ottomans were the smallest thing on the map, smaller than Germiyan, Karaman or Aydin, and wedged against the Byzantine frontier. Everything else on it would eventually belong to them. CC BY-SA 3.0.'
  },
  sectionImages: [
    {
      section: 'What the Ottomans made of it',
      src: img('Sultan Orhan and the Executed Byzantine Prince after the Battle of Koyunhisar, from the Şahname-i Al-i Osman of Arifi, volume IV, transcribed by Mirza Huy-i Şirazi, c. 1558 (Private Collection, fol. 76a).jpg'),
      caption: 'The aftermath of the battle in an Ottoman court manuscript of about 1558, which credits the victory to Orhan rather than to his father Osman.',
      creator: 'Ottoman court artist, for the Şahname-i Al-i Osman of Arifi',
      date: 'c. 1558',
      source: 'Wikimedia Commons (private collection, fol. 76a)',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Sultan_Orhan_and_the_Executed_Byzantine_Prince_after_the_Battle_of_Koyunhisar,_from_the_%C5%9Eahname-i_Al-i_Osman_of_Arifi,_volume_IV,_transcribed_by_Mirza_Huy-i_%C5%9Eirazi,_c._1558_(Private_Collection,_fol._76a).jpg',
      note: 'Reproduced from a monochrome plate; no colour scan is available. Its interest is precisely its unreliability: painted 250 years after the battle for the Ottoman court, it gives the victory to Orhan, who was about twenty at the time and did not command. Public domain.'
    },
    {
      section: 'Legacy',
      src: img('Osman Gazi\'nin mezarı.JPG'),
      caption: 'The tomb of Osman I at Bursa — a city his son took, twenty-four years after Bapheus.',
      creator: 'Wikimedia Commons contributor',
      date: 'modern photograph',
      source: 'Wikimedia Commons',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Osman_Gazi%27nin_mezar%C4%B1.JPG',
      note: 'Osman was buried at Bursa by his own wish, according to Ottoman tradition, before the city had been taken. The tomb was rebuilt in the nineteenth century after an earthquake.'
    }
  ],
  summary: 'In 1302 Osman I defeated a Byzantine force near Nicomedia at Bapheus, the first victory in the field by the Ottomans over a Roman army and the beginning of their expansion.',
  details: 'A skirmish by the standards of this archive, and the start of the empire that ended the Byzantine one.',
  outcome: 'Ottoman victory; the Byzantine relief force withdrew into Nicomedia and Bithynian countryside passed out of imperial control.',
  background: 'Osman\'s beylik had been raiding Byzantine Bithynia; Andronikos II sent a force under the general Mouzalon to stop it.',
  battle: 'Ottoman horsemen broke the Byzantine force, whose Alan contingent left before or during the fighting.',
  aftermath: 'The countryside of Bithynia became untenable, the towns were isolated, and Ottoman prestige drew fighters from across Anatolia.',
  contentSections: [
    S('Overview',
      'Bapheus is the smallest battle in this milestone and arguably the most consequential. A few thousand men on each side met on a plain outside Nicomedia in the summer of 1302, and the winner\'s descendants ruled from Budapest to Basra.',
      'The Byzantine Empire had been restored to Constantinople for forty years and was in a bad way: no money, no fleet worth the name, its Anatolian frontier neglected by an emperor whose attention and resources were in Europe.',
      'Osman was the chief of one of the smallest Turkish beyliks, on the Byzantine border in Bithynia. His victory here was the first time the Ottomans beat a Roman army in the field, and its main effect was reputational: it announced that raiding Byzantine territory under Osman was profitable, and men came.'),
    S('The empire in 1302',
      'Michael VIII had recovered Constantinople in 1261 and spent the rest of his reign defending it against western attempts to take it back — an expensive success whose cost was Anatolia.',
      'His son Andronikos II inherited the bill. He disbanded the fleet as an economy, which handed the sea to Genoa and Venice, and reduced the frontier troops of the Anatolian marches, who had been the system that kept the beyliks out. The frontier was left to look after itself and it could not.',
      'By 1300 Turkish raiders were operating across Bithynia, the province closest to the capital. Andronikos hired 10,000 Alan mercenaries to deal with the problem, and it is a detachment of these, with local troops, that fought at Bapheus.'),
    S('The battle',
      'The Byzantine commander was the megas hetaireiarches George Mouzalon, with a force of perhaps two thousand men, of whom a large part were the Alan mercenaries. Osman had a similar or slightly larger number of Turkish horsemen, reinforced by fighters drawn in from neighbouring beyliks by the prospect of plunder.',
      'The accounts are brief. George Pachymeres, the only substantial source and a contemporary, describes an Ottoman attack that the Byzantine force could not hold, and the Alans either withdrawing before the fighting or leaving during it — mercenaries who had not been paid and had no stake in Bithynia.',
      'Mouzalon got the remainder into Nicomedia. The field belonged to Osman.'),
    S('What the Ottomans made of it',
      'The Ottoman tradition about this battle is a good example of what happens when a dynasty writes its own origins three centuries later. The court manuscripts assign the victory at Koyunhisar — the Turkish name for the battle — to Orhan, Osman\'s son, who was around twenty in 1302 and did not command.',
      'That is not a copying error but a dynastic preference: Orhan was the ruler who took Bursa and Nicaea and made the beylik a state, and later Ottoman writers built the origin story around the figure they found most useful.',
      'The archive follows Pachymeres, who was writing in Constantinople at the time and had no motive to credit Osman with anything. Where the Greek and the later Ottoman accounts differ about who was in command in 1302, the contemporary source is the one to prefer.'),
    S('Legacy',
      'The direct territorial result was modest and slow. The Ottomans did not take a walled city for another quarter century — Bursa fell in 1326, the year Osman died, and Nicaea in 1331 — because they had no siege capability and had to starve towns out.',
      'What Bapheus did was make the countryside impossible. Byzantine Bithynia became a set of isolated towns in a landscape controlled by someone else, and towns in that position eventually surrender.',
      'The reputational effect was larger still. A beylik that beat imperial troops in the open field attracted fighters from every other beylik in Anatolia, and it is that flow of manpower, rather than any territory taken in 1302, that turned the smallest emirate on the map into the state that took Constantinople in 1453.')
  ],
  timeline: [
    T('1261', 'Constantinople recovered', 'Michael VIII restores the empire to its capital and spends its resources defending it from the west.'),
    T('1282–1328', 'Andronikos II', 'The fleet is disbanded as an economy and the Anatolian frontier troops are reduced.'),
    T('c. 1299–1301', 'Osman raids Bithynia', 'The Ottoman beylik pushes into Byzantine territory around Nicomedia and Nicaea.'),
    T('1302 (July)', 'Bapheus', 'Osman defeats a Byzantine force under Mouzalon; the Alan mercenaries leave the field.'),
    T('1303–1305', 'The Catalan Company', 'Andronikos hires Catalan mercenaries against the Turks; they win battles and then turn on the empire.'),
    T('1326', 'Bursa falls', 'The first walled city taken by the Ottomans, in the year Osman dies.'),
    T('1331', 'Nicaea falls', 'Orhan takes the city where the Byzantine Empire had been reconstituted after 1204.'),
    T('1453', 'Constantinople falls', 'Mehmed II takes the city; the empire Bapheus began at last replaces the one it defeated.')
  ],
  participants: [
    {
      side: 'The Ottoman beylik',
      factions: [{ name: 'Ottoman Empire', title: 'Ottoman Empire', type: 'location', slug: 'ottoman-empire' }],
      leaders: [{ name: 'Osman I', title: 'Osman I', type: 'person', slug: 'osman-i' }],
      strength: {
        display: 'Perhaps 5,000 horsemen, including fighters drawn from neighbouring beyliks',
        confidence: 'estimated',
        note: 'Pachymeres gives a figure in this range. The composition matters more than the number: much of the force was not Osman\'s own, and had come for the plunder that his reputation now promised.'
      }
    },
    {
      side: 'Byzantine Empire',
      factions: [{ name: 'Byzantine Empire', title: 'Byzantine Empire', type: 'location', slug: 'byzantine-empire' }],
      leaders: [
        { name: 'George Mouzalon', note: 'No article yet: the megas hetaireiarches sent to relieve Nicomedia, who withdrew into the city with what was left of his force. No image of him exists.' }
      ],
      strength: {
        display: 'About 2,000, a large part of them Alan mercenaries who left the field',
        confidence: 'estimated',
        note: 'The Alans had been hired in their thousands and paid irregularly. Their departure is the immediate cause of the defeat and a fair summary of the empire\'s military position in 1302.'
      }
    }
  ],
  battleContinuity: {
    label: 'Continue to the Ottoman advance into Europe',
    battleSlug: 'battle-of-kosovo',
    relationship: 'same-war',
    reason: 'Bapheus began the Ottoman expansion at Byzantine expense in Anatolia; by Kosovo in 1389 the same state was deciding the future of the Balkans.'
  },
  relatedEntries: {
    people: [
      { title: 'Osman I', type: 'person', slug: 'osman-i', label: 'Whose first victory over an imperial army this was' },
      { title: 'Orhan', type: 'person', slug: 'orhan', label: 'Credited with the battle by later Ottoman tradition, wrongly' },
      { title: 'Michael VIII Palaiologos', type: 'person', slug: 'michael-viii-palaiologos', label: 'Whose western wars left this frontier undefended' }
    ],
    events: [
      { title: 'Battle of Pelagonia', type: 'event', slug: 'battle-of-pelagonia', label: 'The victory that led to the restoration this defeat began to undo' },
      { title: 'Fall of Constantinople', type: 'event', slug: 'fall-of-constantinople', label: 'Where the process that started here ended, in 1453' }
    ],
    locations: [
      { title: 'Ottoman Empire', type: 'location', slug: 'ottoman-empire', label: 'A beylik of a few thousand men in 1302' },
      { title: 'Byzantine Empire', type: 'location', slug: 'byzantine-empire', label: 'Which lost the Bithynian countryside as a result' },
      { title: 'Sultanate of Rum', type: 'location', slug: 'sultanate-of-rum', label: 'The collapsed sultanate whose beyliks the Ottomans came from' }
    ]
  },
  sources: [
    { title: 'George Pachymeres, Relations historiques', url: 'https://en.wikipedia.org/wiki/George_Pachymeres', type: 'primary source' },
    { title: 'Battle of Bapheus', url: 'https://en.wikipedia.org/wiki/Battle_of_Bapheus', type: 'encyclopedia' }
  ]
})

// ---------------------------------------------------------------------------
// The three queued continuity re-points.
//
// Each of these was pointed at the nearest available battle because the right
// one did not exist yet. All three are recorded in QUEUE.md as owed to M13.
// ---------------------------------------------------------------------------
const repoint = (id, battleSlug, label, reason) => {
  const e = data.events.find((x) => x.id === id)
  if (!e) throw new Error(`missing event ${id}`)
  const from = e.battleContinuity?.battleSlug
  e.battleContinuity = { ...e.battleContinuity, battleSlug, label, reason }
  console.log(`  continuity ${id}: ${from} -> ${battleSlug}`)
}

repoint('battle-of-nineveh', 'battle-of-yarmouk',
  'Continue to the battle that undid this one',
  'Nineveh won back Syria, Palestine and Egypt from Persia in 627. Yarmouk lost all three, permanently, nine years later.')

repoint('battle-of-sirmium', 'siege-of-constantinople-1204',
  'Continue to the undoing of everything Manuel built',
  'Sirmium in 1167 was the high point of Manuel I\'s empire in Europe. Thirty-seven years later the capital itself was taken by westerners.')

repoint('battle-of-pelagonia', 'battle-of-bapheus',
  'Continue to the power that would take it all',
  'Pelagonia decided which Greek state would restore the empire; Bapheus, forty-three years later, was the first field victory of the state that would end it.')

// ---------------------------------------------------------------------------
// Two fixes to kilij-arslan-i that this milestone forces.
// ---------------------------------------------------------------------------
const ka1 = data.characters.find((c) => c.id === 'kilij-arslan-i')

// (a) Its primary image was the Sultanate of Rum locator map — a person's
//     article leading with a map, which the person-image rule forbids outright,
//     and which the person-image audit had already flagged as a certain failure.
//     That same map is now the primary for sultanate-of-rum, where it belongs.
ka1.image = img('Vinzenz Katzler - Kilij Arslan I orders to built bone pyramides after the People\'s crusade, 1096.jpg')
ka1.imageInfo = {
  caption: 'Kilij Arslan I overseeing the heaping of the bones of the People\'s Crusade after Civetot, in an engraving by Vinzenz Katzler of about 1872.',
  creator: 'Vinzenz Katzler',
  date: 'c. 1872',
  source: 'Wikimedia Commons',
  sourceUrl: 'https://commons.wikimedia.org/wiki/File:Vinzenz_Katzler_-_Kilij_Arslan_I_orders_to_built_bone_pyramides_after_the_People%27s_crusade,_1096.jpg',
  note: 'A nineteenth-century European engraving, not a portrait and not sympathetic — it belongs to a tradition of orientalist crusade illustration and should be read as such. It replaces a locator map of the Sultanate of Rum, which depicted no person at all and is now the primary image of the sultanate\'s own article. The bone heap at Civetot is attested: Anna Komnene and the crusader chroniclers all describe it. Public domain.'
}

// (b) Its dynasty read "Not dynastic", which is simply wrong — he was a Seljuk,
//     son of Suleiman ibn Qutalmish. The value also silenced the Dynasty card
//     because "Not dynastic" is in the validator's NOT_A_DYNASTY set.
ka1.quickFacts = { ...ka1.quickFacts, dynasty: 'Seljuk dynasty' }

console.log('locations: rashidun-caliphate, sultanate-of-rum')
console.log('characters: khalid-ibn-al-walid, kilij-arslan-ii')
console.log('events: battle-of-yarmouk, battle-of-myriokephalon, fourth-crusade,')
console.log('        siege-of-constantinople-1204, battle-of-bapheus')
console.log('kilij-arslan-i: locator map -> Katzler engraving; dynasty -> Seljuk dynasty')

writeFileSync(dataPath, JSON.stringify(data, null, 2))
