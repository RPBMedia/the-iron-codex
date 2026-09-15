/**
 * TRACK A, M7 — the turn of the Arab–Byzantine wars: Akroinon 740 and
 * Lalakaon 863.
 *
 * Seven articles: two battles, two realms (the Abbasid Caliphate and the
 * Emirate of Melitene), and three people (Constantine V, Michael III, Petronas).
 *
 * The milestone's argument is that these two battles bracket the change. In 740
 * the empire beats a raiding army and survives; in 863 it destroys the emirate
 * that had been raiding it, and from then on Byzantium attacks and the caliphate
 * defends. Everything in between — the Abbasid revolution, the move to Baghdad
 * and then Samarra, and the collapse of caliphal authority in the 860s — is why.
 *
 * Two agreed corrections are applied here:
 *   • "Al-Malik ibn Shuʿayb" is a mis-parse. The commander killed at Akroinon
 *     alongside Abdallah al-Battal was Malik ibn Shu'ayb.
 *   • Nasar belongs to the naval campaigns of the 880s, not to Lalakaon. He is
 *     not mentioned in the Lalakaon article at all.
 *
 * locationType "Emirate" is new and is added to POLITY_TYPES in
 * check-content-quality.mjs in the same commit; the Emirate of Crete reuses it
 * in M8.
 *
 * Lalakaon's continuity points at Manzikert for want of anything nearer, exactly
 * as Tricamarum and Nineveh did before it. **Re-point it at Crete 960–961 when
 * M8 lands** — recorded in QUEUE.md.
 */
import { readFileSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dataPath = path.join(__dirname, '../server/data/history.json')
const data = JSON.parse(readFileSync(dataPath, 'utf8'))
const S = (title, ...paragraphs) => ({ title, paragraphs })
const img = (f) => `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(f)}`

// ── Battles ───────────────────────────────────────────────────────────────────

const akroinon = {
  id: 'battle-of-akroinon', type: 'event', eventType: 'Battle', name: 'Battle of Akroinon',
  aliases: ['Battle of Akroinos'],
  year: 740,
  location: 'Akroinon, in Phrygia',
  eventLocation: 'Akroinon in Phrygia, near modern Afyonkarahisar',
  conflict: 'The Arab–Byzantine wars',
  image: img('Asia Minor ca 740 AD.svg'),
  imageInfo: {
    caption: 'Byzantine Asia Minor in 740, showing the themes, the frontier zone of the Thughur, and Akroinon in Phrygia where the raiding army was destroyed.',
    creator: 'Cplakidas (Wikimedia Commons)',
    date: 'modern map of Anatolia in 740',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Asia_Minor_ca_740_AD.svg',
    note: 'A modern map, used because no depiction of the battle exists and because the point of Akroinon is where it happened — deep inside Anatolia, at the far end of a raiding route that had been running almost annually for a century. Licensed CC BY-SA 3.0.'
  },
  summary: 'In 740 Leo III and his son Constantine destroyed an Umayyad raiding army at Akroinon in Phrygia, killing both its commanders. It was the last great Umayyad invasion of Anatolia.',
  details: 'A raid rather than a conquest, and its destruction ended the era in which such raids were routine.',
  outcome: 'Decisive Byzantine victory; the raiding division destroyed and both its commanders killed.',
  background: 'Annual Umayyad raiding into Anatolia had continued since the failure at Constantinople in 718, but the caliphate was nearing its own political crisis.',
  battle: 'The Byzantine army caught the raiding division at Akroinon and destroyed it; Abdallah al-Battal and Malik ibn Shu\'ayb were both killed.',
  aftermath: 'The Umayyad state fell to the Abbasid revolution within ten years, and the annual invasions of Anatolia stopped being an existential threat.',
  contentSections: [
    S('Overview',
      'In 740 an Umayyad army crossed into Anatolia in three divisions, as it had done nearly every year for a century. One of them, some twenty thousand strong under Abdallah al-Battal and Malik ibn Shu\'ayb, was met at Akroinon in Phrygia by a Byzantine army under the emperor Leo III and his son Constantine.',
      'The division was destroyed and both commanders were killed. That is the whole of the engagement, and its importance is entirely in what it ended rather than in how it was fought.',
      'The raids had been the empire\'s permanent condition since the 660s. Akroinon was the last of the great ones, and within ten years the dynasty that had launched them no longer existed.'),
    S('Background',
      'The failure at Constantinople in 717–718 had cost the caliphate a fleet and an army but not the initiative. Umayyad forces continued to cross the Taurus passes almost every year, sacking towns, taking captives and occasionally wintering on Byzantine soil.',
      'Leo III had spent the intervening two decades on the answer: the theme system, which settled soldiers on land they had reason to defend and put a standing provincial army where the raiders would arrive. The empire could not stop the raids at the frontier, but it could increasingly punish them on the way home.',
      'The 740 campaign was launched under the caliph Hisham and was large even by the standards of the period. Its three divisions ranged separately, which is what allowed the Byzantines to engage one of them alone.'),
    S('The battle',
      'The Byzantine army caught the division under al-Battal and Malik ibn Shu\'ayb at Akroinon, in Phrygia, well inside Anatolia. Theophanes puts the raiding force at twenty thousand and its dead at over thirteen thousand, and the figures should be read as an order of magnitude rather than a count.',
      'What the sources agree on is the completeness of it: the division broke, both of its commanders were killed, and the remnant escaped to Synnada in poor order. Byzantine armies had beaten raiding parties before; destroying a full division with its leadership was new.',
      'The reader should note the name of the losing commander. Abdallah al-Battal was already a celebrated frontier warrior, and after his death he grew into Battal Gazi, the hero of a Turkish and Islamic epic tradition that outlived every state involved — a shrine at Seyitgazi still marks the tomb associated with him. The man who lost the battle is far better remembered than the emperor who won it.'),
    S('Aftermath',
      'The Umayyad caliphate was already straining, and in 750 it was overthrown by the Abbasid revolution and the capital moved from Damascus towards Iraq. The new dynasty continued the raids, but from a court a thousand miles further east and with its attention on Khurasan, Iran and its own succession.',
      'For the empire the change was decisive without being visible at once. The frontier stayed violent for two more centuries, but the annual campaign to destroy the Roman state stopped, and Constantinople was never besieged by a caliphal army again.',
      'Leo III died in 741 and the throne passed to Constantine V, who had fought here as a young man and who spent his reign on the offensive — against the Bulgars in the Balkans and across the Taurus into Syria.'),
    S('Significance',
      'Akroinon is a small battle with a large position in the story. It closes the century of Umayyad offensives that had begun with the conquest of Syria and had twice reached the walls of Constantinople.',
      'It is also the point where the theme system can first be seen working as designed: a provincial army raised where the enemy would come, commanded by an emperor who had been a provincial general himself, catching a raiding column that had grown used to being unopposed.',
      'The eastern balance did not tip here — that took another century and a quarter, and the battle at the Lalakaon in 863. But this is where it stopped tipping the other way.'),
    S('Sources',
      'Theophanes the Confessor supplies the Byzantine account, with the numbers, and the Arabic tradition records the campaign and the death of al-Battal without dwelling on the defeat.',
      'The two traditions can be checked against each other on this occasion, and they agree that the division was destroyed and its commanders killed. They disagree on scale, as they always do.',
      'The largest distortion is not in either chronicle but in what came afterwards: al-Battal\'s epic afterlife means much of what is popularly said about Akroinon is drawn from a legendary cycle composed centuries later, in which he is not defeated at all.')
  ],
  timeline: [
    { date: '718', title: 'The siege fails', description: 'The Umayyad army withdraws from Constantinople, but the annual raids into Anatolia continue.', links: [{ title: 'Siege of Constantinople (717–718)', type: 'event', slug: 'siege-of-constantinople-717' }] },
    { date: '740', title: 'Three divisions cross the Taurus', description: 'A large Umayyad campaign under the caliph Hisham enters Anatolia in separate columns.' },
    { date: '740', title: 'Akroinon', description: 'Leo III and Constantine destroy the division under Abdallah al-Battal and Malik ibn Shu\'ayb in Phrygia.' },
    { date: '741', title: 'Death of Leo III', description: 'The emperor dies and is succeeded by his son Constantine V.' },
    { date: '750', title: 'The Abbasid revolution', description: 'The Umayyad caliphate falls and the centre of the Islamic world moves east towards Iraq.' }
  ],
  participants: [
    {
      side: 'Byzantine Empire',
      factions: [{ name: 'Byzantine Empire', title: 'Byzantine Empire', type: 'location', slug: 'byzantine-empire' }],
      leaders: [
        { name: 'Leo III', title: 'Leo III', type: 'person', slug: 'leo-iii-the-isaurian' },
        { name: 'Constantine V', title: 'Constantine V', type: 'person', slug: 'constantine-v' }
      ],
      strength: { display: 'Unknown; a field army drawn from the Anatolian themes', confidence: 'unknown', note: 'No figure survives for the Byzantine force. The sources are interested in the size of the raiding army and the scale of its destruction, not in what beat it.' }
    },
    {
      side: 'Umayyad Caliphate',
      factions: [{ name: 'Umayyad Caliphate', title: 'Umayyad Caliphate', type: 'location', slug: 'umayyad-caliphate' }],
      leaders: [
        { name: 'Abdallah al-Battal', note: 'No article: no image of him survives. He became Battal Gazi, the hero of a later Turkish and Islamic epic cycle, and the legend is far better attested than the man.' },
        { name: 'Malik ibn Shu\'ayb', note: 'No article: he is known only as the second commander killed here. His name is often mis-rendered "al-Malik ibn Shu\'ayb", which is a mis-parse rather than a title.' }
      ],
      strength: { display: 'c. 20,000 in the division engaged; Theophanes claims over 13,000 dead', confidence: 'chronicle-claim', note: 'Theophanes\'s figures for a raiding division that had entered Anatolia as one of three columns. The proportion of dead he reports is implausibly high even for a rout, though both traditions agree the division was destroyed.' }
    }
  ],
  battleContinuity: {
    label: 'Continue to the battle that reversed the frontier',
    battleSlug: 'battle-of-lalakaon',
    relationship: 'same-factions',
    reason: 'Akroinon ended the Umayyad offensives but left the frontier raiding intact for another century; at the Lalakaon in 863 the empire destroyed the emirate that had inherited that raiding, and afterwards it was Byzantium that attacked.'
  },
  relatedEntries: {
    people: [
      { title: 'Leo III', type: 'person', slug: 'leo-iii-the-isaurian', label: 'Commanded in person' },
      { title: 'Constantine V', type: 'person', slug: 'constantine-v', label: 'Fought here before his own reign' }
    ],
    events: [
      { title: 'Siege of Constantinople (717–718)', type: 'event', slug: 'siege-of-constantinople-717', label: 'The failed siege that these raids followed' },
      { title: 'Battle of Lalakaon', type: 'event', slug: 'battle-of-lalakaon', label: 'Where the eastern balance finally turned' }
    ],
    locations: [
      { title: 'Umayyad Caliphate', type: 'location', slug: 'umayyad-caliphate', label: 'Whose last great invasion of Anatolia this was' },
      { title: 'Byzantine Empire', type: 'location', slug: 'byzantine-empire', label: 'Whose theme armies fought it' }
    ]
  },
  sources: [
    { title: 'Theophanes the Confessor, Chronicle', url: 'https://en.wikipedia.org/wiki/Theophanes_the_Confessor', type: 'primary source' },
    { title: 'Battle of Akroinon', url: 'https://en.wikipedia.org/wiki/Battle_of_Akroinon', type: 'encyclopedia' },
    { title: 'Dumbarton Oaks — Byzantine studies', url: 'https://www.doaks.org/research/byzantine', type: 'academic resource', institution: 'Dumbarton Oaks' }
  ]
}

const lalakaon = {
  id: 'battle-of-lalakaon', type: 'event', eventType: 'Battle', name: 'Battle of Lalakaon',
  aliases: ['Battle of Poson', 'Battle of Porson'],
  year: 863,
  location: 'The river Lalakaon, in Paphlagonia',
  eventLocation: 'The Lalakaon river in Paphlagonia, in northern Anatolia',
  conflict: 'The Arab–Byzantine wars',
  image: img('Fighting between Byzantines and Arabs Chronikon of Ioannis Skylitzes, end of 13th century..jpg'),
  imageInfo: {
    caption: 'Byzantine and Arab cavalry colliding at the Lalakaon in a thirteenth-century Madrid Skylitzes miniature; the emir of Melitene is shown among the dead.',
    creator: 'Madrid Skylitzes manuscript',
    date: '13th century',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Fighting_between_Byzantines_and_Arabs_Chronikon_of_Ioannis_Skylitzes,_end_of_13th_century..jpg',
    note: 'The manuscript names this battle specifically, which is unusual — most Skylitzes battle scenes are generic. It was painted some four centuries later in Norman Sicily, so the armour and banners are of its own time rather than of 863. Public domain.'
  },
  summary: 'On 3 September 863 a Byzantine army under Petronas encircled and destroyed the raiding army of Umar al-Aqta, emir of Melitene, at the river Lalakaon. The emir was killed and the eastern frontier never looked the same.',
  details: 'The strategic turning point of two centuries of war: after Lalakaon the empire raided and the caliphate defended.',
  outcome: 'Decisive Byzantine victory; the emir of Melitene killed and his army annihilated.',
  background: 'Umar al-Aqta had raided across Anatolia to the Black Sea, as he had done for thirty years, while the caliphate itself was collapsing into military anarchy at Samarra.',
  battle: 'Three Byzantine armies converged and surrounded the raiders in the valley of the Lalakaon; the emir died attempting to break out.',
  aftermath: 'The emirate of Melitene never recovered as an offensive power, and the initiative on the eastern frontier passed permanently to Byzantium.',
  contentSections: [
    S('Overview',
      'In the summer of 863 Umar al-Aqta, emir of Melitene, led a raiding army across Anatolia to Amisos on the Black Sea. It was the kind of expedition he had been making for three decades, and the kind Byzantine emperors had been enduring for two centuries.',
      'On the way back he was intercepted. Petronas, uncle of the emperor Michael III, brought three armies together from the west, the east and the north, closed them around the raiders in the valley of the Lalakaon, and destroyed the force on 3 September. The emir was killed.',
      'Everything about the eastern frontier changed afterwards. The emirate of Melitene, which had been the most dangerous raiding power on the border, was finished as an offensive threat, and within seventy years Byzantine armies were taking the frontier cities themselves.'),
    S('Background',
      'The Arab–Byzantine frontier was not a line but a zone — the Thughur, a belt of fortified cities on the Arab side facing the Byzantine themes across the Taurus and Anti-Taurus. Its emirs raided under their own authority, and the most effective of them held Melitene on the upper Euphrates.',
      'Umar al-Aqta had held it since the 830s and had made himself the terror of Anatolia, often campaigning in concert with the Paulicians of Tephrike, a heretical Christian community that had made common cause with the emirate against the empire.',
      'What had changed by 863 was not on the frontier but behind it. The Abbasid caliphate had fallen into the crisis known as the anarchy at Samarra: caliphs raised and murdered by their own Turkish troops, and no central authority able to support or restrain the frontier emirs. Melitene raided in 863 with nothing behind it.'),
    S('The battle',
      'Petronas commanded the response, holding the office of Domestic of the Schools, and the plan was an encirclement rather than an interception: forces from the western themes, from the eastern themes and from the Black Sea coast converged on the returning raiders.',
      'The armies met at the Lalakaon, in Paphlagonia, on 3 September 863. The Byzantines closed the ring and held the high ground, and the raiders were caught in a valley with no line of retreat that had not already been blocked.',
      'Umar al-Aqta was killed trying to break out. His army was destroyed almost entirely, and a second column under the emir of Tarsus was intercepted and beaten in the same season, which removed both of the frontier\'s principal raiding leaders in a single year.'),
    S('Aftermath',
      'Petronas was made magistros and celebrated in a triumph, and he died two years later, in 865.',
      'Melitene survived as a city and an emirate but never again mounted a campaign of the kind Umar had made routine. The Paulicians of Tephrike lost their most useful ally and were destroyed as a power within a decade.',
      'The wider consequence took longer to become visible. From the 860s the empire began raiding across the Taurus rather than absorbing raids from it, and the frontier cities that had launched a century of invasions — Melitene itself in 934, then Cilicia, Antioch and Aleppo — were taken one after another in the tenth century.'),
    S('Significance',
      'Lalakaon is the hinge of the Arab–Byzantine wars. Before it the empire is on the defensive everywhere in the east, and its best outcome is a raiding army destroyed on its way home. After it the empire is the aggressor, and it stays that way for a hundred and fifty years.',
      'The reason is only partly the battle. Byzantine recovery met Abbasid disintegration at exactly this moment, and the frontier emirates that had once been the sharp end of a united caliphate were left to face a reorganised empire on their own.',
      'It also matters for how the reign of Michael III is judged. He was not present and did not command, but the victory belongs to his reign, along with the mission of Cyril and Methodius to the Slavs in the same year — and both are routinely lost behind the nickname his enemies gave him.'),
    S('Sources',
      'The main accounts are the continuators of Theophanes and the chronicle of John Skylitzes, with Arabic notices of the emir\'s death, and they agree on the encirclement, the date and the outcome.',
      'The Byzantine sources were written under the Macedonian dynasty founded by the man who murdered Michael III, which colours the treatment of the reign around the battle but not of the battle itself: Petronas was the new dynasty\'s kinsman by marriage and there was no reason to diminish him.',
      'One correction is worth stating, because it recurs in popular accounts. The admiral Nasar belongs to the naval campaigns of the 880s and had nothing to do with the Lalakaon; the confusion comes from compressing the whole of the ninth-century recovery into its most famous battle.')
  ],
  timeline: [
    { date: '830s', title: 'Umar al-Aqta becomes emir', description: 'Melitene emerges as the most dangerous raiding power on the Arab–Byzantine frontier.' },
    { date: '860', title: 'The Rus\' attack Constantinople', description: 'A seaborne raid reaches the capital while the empire\'s armies are engaged in the east.' },
    { date: '861', title: 'The anarchy at Samarra begins', description: 'The murder of the caliph al-Mutawakkil starts a decade of Abbasid collapse, leaving the frontier emirs unsupported.' },
    { date: 'Summer 863', title: 'The raid to the Black Sea', description: 'Umar al-Aqta leads his army across Anatolia and sacks Amisos on the northern coast.' },
    { date: '3 September 863', title: 'Lalakaon', description: 'Petronas encircles the returning raiders in Paphlagonia and destroys them; the emir is killed.' },
    { date: '863', title: 'The second column beaten', description: 'The emir of Tarsus is intercepted and defeated in the same season, removing both principal raiding leaders.' },
    { date: '865', title: 'Death of Petronas', description: 'The victor dies two years after his triumph, having been raised to the rank of magistros.' },
    { date: '934', title: 'Melitene taken', description: 'John Kourkouas captures the city itself, seventy years after the battle that broke its army.' }
  ],
  participants: [
    {
      side: 'Byzantine Empire',
      factions: [{ name: 'Byzantine Empire', title: 'Byzantine Empire', type: 'location', slug: 'byzantine-empire' }],
      leaders: [{ name: 'Petronas', title: 'Petronas', type: 'person', slug: 'petronas' }],
      strength: { display: 'Three converging field armies; no reliable total survives', confidence: 'unknown', note: 'The sources describe the manoeuvre rather than the numbers. What they make clear is that the Byzantine force was assembled from several themes specifically to surround the raiders, not to meet them head-on.' }
    },
    {
      side: 'Emirate of Melitene',
      factions: [{ name: 'Emirate of Melitene', title: 'Emirate of Melitene', type: 'location', slug: 'emirate-of-melitene' }],
      leaders: [{ name: 'Umar al-Aqta', note: 'No article: the emir killed here, known through Byzantine chronicles and Arabic notices of his death, with no image and no biography to build one from.' }],
      strength: { display: 'Chronicle figures range widely; a raiding army rather than a caliphal field force', confidence: 'debated', note: 'Byzantine sources give numbers in the tens of thousands, which suits an encirclement narrative. The force was assembled by a frontier emirate on its own authority and is unlikely to have been of that scale.' }
    }
  ],
  battleContinuity: {
    label: 'Continue to the empire on the offensive',
    battleSlug: 'battle-of-manzikert',
    relationship: 'same-region',
    reason: 'Lalakaon began the recovery that carried Byzantine armies back across the Taurus into Cilicia, Antioch and Aleppo; Manzikert in 1071 is where that recovery was undone and Anatolia itself was lost.'
  },
  relatedEntries: {
    people: [
      { title: 'Petronas', type: 'person', slug: 'petronas', label: 'Commanded the encirclement' },
      { title: 'Michael III', type: 'person', slug: 'michael-iii', label: 'The emperor whose reign it belongs to' }
    ],
    events: [
      { title: 'Battle of Akroinon', type: 'event', slug: 'battle-of-akroinon', label: 'Where the Umayyad offensives ended, a century earlier' }
    ],
    locations: [
      { title: 'Emirate of Melitene', type: 'location', slug: 'emirate-of-melitene', label: 'Whose army was destroyed and whose emir was killed' },
      { title: 'Abbasid Caliphate', type: 'location', slug: 'abbasid-caliphate', label: 'Collapsing into anarchy at exactly this moment' },
      { title: 'Byzantine Empire', type: 'location', slug: 'byzantine-empire', label: 'Which took the initiative in the east from here on' }
    ]
  },
  sources: [
    { title: 'Theophanes Continuatus', url: 'https://en.wikipedia.org/wiki/Theophanes_Continuatus', type: 'primary source' },
    { title: 'John Skylitzes, Synopsis of Histories', url: 'https://en.wikipedia.org/wiki/John_Skylitzes', type: 'primary source' },
    { title: 'Battle of Lalakaon', url: 'https://en.wikipedia.org/wiki/Battle_of_Lalakaon', type: 'encyclopedia' },
    { title: 'Biblioteca Nacional de España — Madrid Skylitzes', url: 'https://www.bne.es/en', type: 'museum collection', institution: 'Biblioteca Nacional de España' }
  ]
}

// ── Realms ────────────────────────────────────────────────────────────────────

const abbasid = {
  id: 'abbasid-caliphate', type: 'location', locationType: 'Caliphate',
  name: 'Abbasid Caliphate', aliases: ['Abbasids', 'Abbasid Empire'],
  kingdom: 'Abbasid Caliphate', year: 750,
  image: img('Great Mosque of Samarra - Dec 27, 2017 01.jpg'),
  imageInfo: {
    caption: 'The Malwiya, the spiral minaret of the Great Mosque at Samarra, built for the caliph al-Mutawakkil around 850, beside the mosque\'s outer wall.',
    creator: 'Mahdi Almasi',
    date: 'photographed 2017; the mosque built c. 848–852',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Great_Mosque_of_Samarra_-_Dec_27,_2017_01.jpg',
    note: 'A modern photograph of a surviving Abbasid building. Samarra was the capital from 836 to 892, built because the caliphs\' Turkish troops could no longer be housed in Baghdad — so the monument is also evidence of the problem that would destroy caliphal authority. Licensed CC BY 4.0.'
  },
  sectionImages: [
    {
      section: 'The empire at its height',
      src: img('Abbasid Caliphate 850AD.png'),
      caption: 'The Abbasid Caliphate around 850, with the provinces still under the caliph shown against the dynasties already governing themselves.',
      creator: 'Cattette (Wikimedia Commons)',
      date: 'modern map of the caliphate in 850',
      source: 'Wikimedia Commons',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Abbasid_Caliphate_850AD.png',
      note: 'A modern map, and the shading is the point: at the caliphate\'s cultural height a substantial part of it was already autonomous in practice. Licensed CC BY 4.0.'
    }
  ],
  summary: 'The Abbasid Caliphate ruled the Islamic world from 750, moved its capital to Baghdad, presided over the greatest flowering of medieval science and letters, and lost real power long before the Mongols ended it in 1258.',
  overview: 'The dynasty that turned a conquest state into a civilisation, and then spent four centuries as the figurehead of an empire it no longer governed.',
  knownFor: [
    'Overthrew the Umayyads in 750 and moved the centre of the Islamic world from Syria to Iraq.',
    'Founded Baghdad in 762 as a purpose-built round city and imperial capital.',
    'Presided over the translation movement that preserved and extended Greek science, medicine and philosophy.',
    'Lost effective power to its own Turkish soldiery from the 860s and to the Buyids in 945.',
    'Ended in 1258 when the Mongols sacked Baghdad and killed the last caliph.'
  ],
  contentSections: [
    S('Overview',
      'The Abbasids took the caliphate from the Umayyads in 750 and held the title for five centuries, but the story divides sharply in two. For roughly its first hundred and fifty years the dynasty governed the largest and richest state in the world; for the three centuries after that it reigned over an empire that had come apart underneath it.',
      'The change of dynasty was also a change of civilisation. The capital moved from Damascus, a Mediterranean city in former Roman territory, to Iraq and a new foundation at Baghdad, and the administration took on the shape of Persian imperial practice — a vizier, a bureaucracy, a court.',
      'For this archive the Abbasids are the eastern power that the Byzantine empire faced for its whole middle period: the enemy of the annual raids, the state that exchanged prisoners and embassies with Constantinople, and the one whose collapse in the 860s made the Byzantine recovery possible.'),
    S('The revolution of 750',
      'The Umayyads had ruled from Damascus as an Arab military aristocracy, and by the 740s their support had narrowed to the point of brittleness. The Abbasid movement — descended from the Prophet\'s uncle al-Abbas — gathered the disaffected: non-Arab Muslims excluded from privilege, Shi\'a groups hoping for a family closer to the Prophet\'s line, and the discontented armies of Khurasan.',
      'The revolt broke out in Khurasan in 747 under the black banners and swept west. The Umayyad army was destroyed at the river Zab in 750 and the dynasty was hunted down; one prince escaped to Spain and founded the emirate that became the Caliphate of Córdoba.',
      'The new regime disappointed most of the coalition that had raised it. The Shi\'a expectations were not met, and the Abbasids governed as an imperial dynasty rather than a restoration — but the barrier between Arab conquerors and everyone else was gone for good.'),
    S('Baghdad and the empire at its height',
      'Al-Mansur founded Baghdad in 762 on the Tigris as a round city with the palace and mosque at its centre, and within fifty years it was probably the largest city in the world outside China. It sat on the trade routes between the Mediterranean, the Indian Ocean and Central Asia, and taxed all of them.',
      'The reign of Harun al-Rashid (786–809) is the conventional high point, and his court entered European memory through the Thousand and One Nights — which is a later literary construction and not evidence for how he governed. What is solid is the machinery: a vizierate held for a generation by the Barmakid family, a professional bureaucracy, and a treasury with the reach to fund it.',
      'The most durable achievement was intellectual. Under al-Ma\'mun in particular, Greek, Persian and Indian works were systematically translated into Arabic, and the scholarship built on them in medicine, astronomy, mathematics and philosophy travelled back into Latin Europe centuries later. The Arabic transmission is how much of Greek science survived at all.'),
    S('Major rulers',
      'Al-Saffah (750–754) took the throne in the revolution. His brother al-Mansur (754–775) was the real founder of the state: he built Baghdad, crushed the rivals who had helped him to power, and set the dynasty\'s administrative shape.',
      'Harun al-Rashid (786–809) presided over the height of Abbasid wealth and prestige and divided the succession between his sons, which produced a civil war. Al-Ma\'mun (813–833) won it, patronised the translation movement, and imposed the mihna, an inquisition into religious doctrine that his successors abandoned.',
      'Al-Mu\'tasim (833–842) built the Turkish slave-soldier corps that became the state\'s military spine and eventually its master, and founded Samarra to house them. Al-Mutawakkil (847–861) built the Great Mosque there and was murdered by those same troops, opening the anarchy at Samarra. Al-Musta\'sim (1242–1258) was the last caliph in Baghdad, killed by the Mongols.'),
    S('Losing power',
      'The decline was not conquest from outside but the failure of the centre. Al-Mu\'tasim\'s Turkish regiments were loyal to their commanders rather than to the dynasty, and after the murder of al-Mutawakkil in 861 they made and unmade four caliphs in nine years — the crisis known as the anarchy at Samarra.',
      'Provinces stopped waiting for permission. The Aghlabids in North Africa, the Tulunids in Egypt, the Samanids in Central Asia and eventually the Hamdanids in northern Syria governed and taxed on their own account while acknowledging the caliph in the coinage and the Friday prayer.',
      'The formal end of Abbasid power came in 945, when the Buyids took Baghdad and made the caliph a religious figurehead under military protection. The Seljuk Turks replaced them in 1055 in the same role. The title kept its authority; the office had none.'),
    S('The Byzantine frontier',
      'For Constantinople the Abbasids were the permanent eastern adversary, but a different one from the Umayyads. The capital was now in Iraq, not Syria, and no Abbasid caliph attempted to take Constantinople.',
      'What continued was the frontier: the Thughur, a belt of fortified cities from Cilicia to the Euphrates whose emirs raided into Anatolia most years. Harun al-Rashid campaigned there in person and extracted tribute from the empress Irene; the emirate of Melitene under Umar al-Aqta made the raiding an annual terror in the ninth century.',
      'The relationship had a civil register too. The two states exchanged embassies and negotiated prisoner exchanges at the river Lamos in Cilicia at intervals through the ninth and tenth centuries, and Byzantine and Abbasid scholarship crossed the frontier more easily than armies did.'),
    S('The end',
      'Hulagu, grandson of Genghis Khan, took Baghdad in 1258 after a short siege. The city was sacked, its libraries destroyed, and the caliph al-Musta\'sim was killed — by tradition rolled in a carpet and trampled, so that no royal blood touched the ground.',
      'A branch of the family was maintained in Cairo by the Mamluk sultans as a ceremonial caliphate until the Ottoman conquest of 1517, with religious prestige and no power of any kind.',
      'The destruction of Baghdad has often been treated as the end of Islamic intellectual life, which it was not — Cairo, Damascus, Konya and the cities of Iran and Central Asia continued. What ended in 1258 was the institution that had held the Islamic world together in name for five hundred years after it had ceased to do so in fact.'),
    S('Legacy',
      'The Abbasid centuries produced the mathematics, astronomy, medicine and philosophy that Latin Europe imported through Spain and Sicily from the twelfth century, along with the numerals, the algebra and much of the Aristotle it studied.',
      'Politically the dynasty demonstrated something that recurs across this archive: an empire can lose its capacity to govern long before it loses its legitimacy, and the two can stay separated for centuries.',
      'For the Byzantine story the Abbasid trajectory is the other half of the explanation. The empire\'s tenth-century reconquest of the east was not only a Byzantine achievement — it happened against a caliphate that had stopped being able to defend its own frontier.')
  ],
  timeline: [
    { date: '747', title: 'Revolt in Khurasan', description: 'The Abbasid movement rises under the black banners against Umayyad rule.' },
    { date: '750', title: 'The Umayyads overthrown', description: 'The Umayyad army is destroyed at the river Zab and the dynasty is hunted down; one prince escapes to Spain.' },
    { date: '762', title: 'Baghdad founded', description: 'Al-Mansur builds a new round city on the Tigris as the imperial capital.' },
    { date: '786', title: 'Accession of Harun al-Rashid', description: 'The reign conventionally treated as the height of Abbasid wealth and prestige begins.' },
    { date: '813', title: 'Al-Ma\'mun wins the civil war', description: 'The war between Harun\'s sons ends; al-Ma\'mun patronises the translation of Greek, Persian and Indian learning into Arabic.' },
    { date: '836', title: 'The court moves to Samarra', description: 'Al-Mu\'tasim builds a new capital to house the Turkish regiments Baghdad could no longer contain.' },
    { date: '861', title: 'The anarchy at Samarra', description: 'Al-Mutawakkil is murdered by his own guard; four caliphs are made and unmade in nine years.' },
    { date: '863', title: 'Melitene destroyed at the Lalakaon', description: 'With no support from a collapsing centre, the frontier emirate loses its army and its emir.', links: [{ title: 'Battle of Lalakaon', type: 'event', slug: 'battle-of-lalakaon' }] },
    { date: '945', title: 'The Buyids take Baghdad', description: 'The caliph becomes a religious figurehead under military protection; real power passes to the amirs.' },
    { date: '1055', title: 'The Seljuks arrive', description: 'Seljuk Turks replace the Buyids as the caliphate\'s protectors and masters.' },
    { date: '1258', title: 'Baghdad sacked', description: 'Hulagu\'s Mongols take the city and kill the last caliph; a ceremonial line continues in Cairo.' }
  ],
  relatedEntries: {
    people: [
      { title: 'Michael III', type: 'person', slug: 'michael-iii', label: 'Whose reign coincided with the Abbasid collapse into anarchy' }
    ],
    events: [
      { title: 'Battle of Lalakaon', type: 'event', slug: 'battle-of-lalakaon', label: 'Where its frontier emirate was destroyed unsupported' }
    ],
    locations: [
      { title: 'Umayyad Caliphate', type: 'location', slug: 'umayyad-caliphate', label: 'The dynasty it overthrew in 750' },
      { title: 'Emirate of Melitene', type: 'location', slug: 'emirate-of-melitene', label: 'Its frontier emirate facing Byzantine Anatolia' },
      { title: 'Byzantine Empire', type: 'location', slug: 'byzantine-empire', label: 'Its permanent adversary across the Taurus' },
      { title: 'Mongol Empire', type: 'location', slug: 'mongol-empire', label: 'Which ended it at Baghdad in 1258' },
      { title: 'Damascus', type: 'location', slug: 'damascus', label: 'The Umayyad capital it displaced in favour of Iraq' }
    ]
  },
  sources: [
    { title: 'Al-Tabari, History of the Prophets and Kings', url: 'https://en.wikipedia.org/wiki/History_of_the_Prophets_and_Kings', type: 'primary source' },
    { title: 'Abbasid Caliphate', url: 'https://en.wikipedia.org/wiki/Abbasid_Caliphate', type: 'encyclopedia' },
    { title: 'The Metropolitan Museum of Art — Islamic art collection', url: 'https://www.metmuseum.org/about-the-met/collection-areas/islamic-art', type: 'museum collection', institution: 'The Metropolitan Museum of Art' }
  ]
}

const melitene = {
  id: 'emirate-of-melitene', type: 'location', locationType: 'Emirate',
  name: 'Emirate of Melitene', aliases: ['Malatya', 'Melitene'],
  kingdom: 'Emirate of Melitene', year: 750,
  image: img('Arab-Byzantine frontier zone.svg'),
  imageInfo: {
    caption: 'The Arab–Byzantine frontier zone, with Melitene on the upper Euphrates at the centre of the Thughur and the passes leading into Byzantine Anatolia.',
    creator: 'Cplakidas (Wikimedia Commons)',
    date: 'modern map of the frontier, 7th–10th centuries',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Arab-Byzantine_frontier_zone.svg',
    note: 'A modern map, and the double naming on it — Melitene and Malatya, Germanikeia and Mar\'ash — is the subject in miniature: a zone where every fortress had a Greek name and an Arabic one because it changed hands repeatedly. Licensed CC BY-SA 3.0.'
  },
  summary: 'Melitene was the Muslim frontier emirate on the upper Euphrates, the most dangerous raiding power on the Byzantine border, until its army and its emir were destroyed at the Lalakaon in 863.',
  overview: 'A city-state whose business was the annual raid, and whose destruction marks the moment the frontier reversed.',
  knownFor: [
    'The principal fortress-city of the Thughur, the Muslim frontier zone facing Byzantine Anatolia.',
    'Ruled by Umar al-Aqta, the most feared raider of the ninth century.',
    'Allied with the Paulicians of Tephrike, a heretical Christian community, against the empire.',
    'Lost its army and its emir at the Lalakaon in 863 and never raided in strength again.',
    'Taken by the Byzantine general John Kourkouas in 934.'
  ],
  contentSections: [
    S('Overview',
      'Melitene — Malatya in Arabic, and in Turkish since — stood on the upper Euphrates where the routes from Mesopotamia into Anatolia converge. Whoever held it could put an army into the Byzantine themes in a fortnight, which is why it was fortified, lost, retaken and refortified for three centuries.',
      'Under the Umayyads and then the Abbasids it was the anchor of the Thughur, the belt of frontier cities that faced the empire across the Taurus and Anti-Taurus mountains. Its emirs governed with a good deal of independence and raided on their own authority.',
      'In the ninth century it became the most dangerous of them, and its destruction at the Lalakaon in 863 is one of the clearest turning points in this archive: the raiding stopped, and within seventy years the city itself was Byzantine.'),
    S('The frontier it belonged to',
      'The Arab–Byzantine border was not a line. It was a depopulated zone of mountains and passes with fortified cities on both sides — the Thughur and al-Awasim facing the Byzantine themes — and it was designed to be raided across rather than settled.',
      'Raiding was an institution with its own season and its own religious framing. Expeditions crossed in spring and summer, aimed at plunder, captives and the destruction of harvests rather than at holding ground, and volunteers came from across the Islamic world to take part.',
      'For the empire the effect was constant attrition. The theme system existed largely to absorb it: soldiers settled on the land, fortified refuges for the population, and a doctrine of shadowing raiders rather than meeting them, which is set out in the Byzantine military manuals of the period.'),
    S('Umar al-Aqta and the great raids',
      'Umar ibn Abdallah al-Aqta — the epithet means "the one-handed" — held Melitene from the 830s and made it the most effective raiding power on the frontier for thirty years.',
      'His campaigns reached across Anatolia repeatedly, and in 863 as far as Amisos on the Black Sea coast, which is most of the way through the empire\'s Asian territory. Byzantine sources treat him as a standing emergency rather than an episode.',
      'His most interesting alliance was with the Paulicians of Tephrike under Karbeas — a Christian sect the empire had persecuted, which had fled across the frontier and made common cause with the Muslim emirates against Constantinople. The frontier was not a religious line drawn tidily.'),
    S('Major rulers',
      'The emirs of Melitene are known mostly through the chronicles of the people they attacked, so the list is partial and the dates are approximate.',
      'The dynasty of the Banu Sulaym held the city under Abbasid authority that grew more nominal as the ninth century went on. Umar al-Aqta, emir from the 830s until his death in 863, is the only one whose career can be followed in any detail, and he is the one every Byzantine source names.',
      'After him the emirate continued under his descendants and then under Hamdanid influence, but as a target rather than a threat. The last emirs negotiated with Byzantine generals over terms of submission rather than launching campaigns.'),
    S('Destruction and afterwards',
      'The raid of 863 ended at the river Lalakaon in Paphlagonia, where Petronas surrounded the returning army with converging forces and destroyed it. Umar was killed. The emirate lost its field army and its leadership in an afternoon.',
      'It could not be rebuilt, because the caliphate behind it was in the middle of the anarchy at Samarra and had no capacity to reinforce a frontier city. The Paulician allies at Tephrike were destroyed within a decade, and the whole eastern frontier began to move.',
      'Melitene itself held out for another seventy years. John Kourkouas took it in 934 and the population was given the choice of conversion or removal; the city became Byzantine territory and a base for the campaigns that took Cilicia and Antioch in the following decades.'),
    S('Legacy',
      'The emirate is remembered for what its fall marks rather than for what it built. It is the clearest single case of a frontier power that depended entirely on the state behind it, and collapsed the moment that state stopped functioning.',
      'It also complicates the standard picture of the frontier. A Muslim emirate allied with a Christian sect against a Christian empire is not a religious war in any simple sense, and the double-named fortresses on the map are the residue of populations that changed rulers repeatedly.',
      'The city survived everything. Malatya is a substantial Turkish city today, and the old walled town at Battalgazi carries the name of Abdallah al-Battal, the Umayyad raider killed at Akroinon two centuries before the emirate\'s own destruction.')
  ],
  timeline: [
    { date: 'c. 750', title: 'A frontier emirate under the Abbasids', description: 'Melitene anchors the Thughur, the belt of fortified cities facing Byzantine Anatolia.' },
    { date: '830s', title: 'Umar al-Aqta becomes emir', description: 'The emirate becomes the most effective raiding power on the whole frontier.' },
    { date: 'c. 843', title: 'Alliance with the Paulicians', description: 'Karbeas leads the persecuted Paulicians across the frontier to Tephrike, and they raid alongside Melitene.' },
    { date: '861', title: 'The caliphate collapses into anarchy', description: 'The murder of al-Mutawakkil leaves the frontier emirates without central support.' },
    { date: '863', title: 'Lalakaon', description: 'The raiding army is encircled in Paphlagonia and destroyed; Umar al-Aqta is killed.', links: [{ title: 'Battle of Lalakaon', type: 'event', slug: 'battle-of-lalakaon' }] },
    { date: '870s', title: 'Tephrike destroyed', description: 'The Paulician state is broken by Byzantine campaigns, removing the emirate\'s ally.' },
    { date: '928–931', title: 'Byzantine pressure', description: 'John Kourkouas raids and blockades the city repeatedly as the frontier moves east.' },
    { date: '934', title: 'The city falls', description: 'Kourkouas takes Melitene; it becomes a Byzantine base for the conquest of Cilicia and Antioch.' }
  ],
  relatedEntries: {
    people: [
      { title: 'Petronas', type: 'person', slug: 'petronas', label: 'Destroyed its army and killed its emir in 863' }
    ],
    events: [
      { title: 'Battle of Lalakaon', type: 'event', slug: 'battle-of-lalakaon', label: 'Where it lost its army and its emir' }
    ],
    locations: [
      { title: 'Abbasid Caliphate', type: 'location', slug: 'abbasid-caliphate', label: 'Its nominal overlord, and unable to support it by 863' },
      { title: 'Byzantine Empire', type: 'location', slug: 'byzantine-empire', label: 'The empire it raided for a century, and which took it in 934' }
    ]
  },
  sources: [
    { title: 'Theophanes Continuatus', url: 'https://en.wikipedia.org/wiki/Theophanes_Continuatus', type: 'primary source' },
    { title: 'Emirate of Melitene', url: 'https://en.wikipedia.org/wiki/Melitene', type: 'encyclopedia' },
    { title: 'Dumbarton Oaks — Byzantine studies', url: 'https://www.doaks.org/research/byzantine', type: 'academic resource', institution: 'Dumbarton Oaks' }
  ]
}

// ── People ────────────────────────────────────────────────────────────────────

const constantineV = {
  id: 'constantine-v', type: 'character', name: 'Constantine V',
  aliases: ['Constantine V Kopronymos', 'Konstantinos V'],
  born: 718, died: 775, deathAge: '57',
  causeOfDeath: 'Died of a fever on campaign against the Bulgars in September 775.',
  restingPlace: 'Church of the Holy Apostles, Constantinople',
  location: 'Constantinople',
  title: 'Emperor of the Romans',
  roles: ['Emperor', 'Commander'],
  image: img('Solidus of Constantine V Copronymus.jpg'),
  imageInfo: {
    caption: 'A gold solidus of Constantine V, struck at Constantinople during his reign.',
    creator: 'Constantinople mint',
    date: '741–775',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Solidus_of_Constantine_V_Copronymus.jpg',
    note: 'A contemporary object from his own reign, used because no portrait survives — and the absence is itself a consequence of his policy and of the reaction to it. The bust is a conventional image of imperial office rather than a likeness. Licensed CC BY-SA 3.0.'
  },
  epithets: [
    { name: 'Kopronymos', type: 'hostile epithet', note: 'Meaning "dung-named", from a story that he fouled the font at his own baptism. Coined by his iconophile enemies after his death.' },
    { name: 'Kaballinos', type: 'hostile epithet', note: 'The "horse-man", mocking his interest in stables. Also from hostile sources rather than contemporary usage.' }
  ],
  summary: 'Constantine V ruled from 741 to 775, was the most successful soldier-emperor of his century, and is remembered chiefly through the abuse of the writers who defeated his religious policy.',
  overview: 'An emperor who won almost every war he fought and whose own tradition called him "dung-named", which is a fair measure of how completely the record was written by his enemies.',
  greatestFeats: [
    'Retook the throne from the usurper Artabasdos after a two-year civil war',
    'Beat the Bulgars repeatedly, including at Anchialos in 763',
    'Repopulated Constantinople after the plague of 747 and rebuilt its water supply'
  ],
  birth: { date: '718', place: { name: 'Constantinople', slug: 'constantinople' } },
  death: { date: '775', place: { name: 'Thrace, on campaign' }, circumstance: 'Died of a fever while marching against the Bulgars, and was buried in the Church of the Holy Apostles.' },
  quickFacts: { realm: 'Eastern Roman Empire', dynasty: 'Isaurian dynasty', culture: 'Roman', knownFor: 'Iconoclasm, and beating the Bulgars for thirty years' },
  isRuler: true,
  succession: {
    office: 'Emperor of the Romans',
    predecessor: { personSlug: 'leo-iii-the-isaurian', displayName: 'Leo III', note: 'His father, who held Constantinople through the siege of 717–718 and began the iconoclast policy his son hardened.' },
    successor: { displayName: 'Leo IV', note: 'His son, called "the Khazar" from his mother\'s descent, who reigned five years and relaxed the persecution of monks. No article yet in this archive.' }
  },
  contentSections: [
    S('Overview',
      'Constantine V was born in 718, in the year his father held Constantinople against the Umayyad siege, and ruled from 741 until his death on campaign in 775. By any military measure he was the most successful emperor of the eighth century.',
      'He fought the Bulgars for most of his reign and generally beat them, campaigned across the Taurus against the caliphate, repopulated a capital emptied by plague, and handed on a stable throne to his son.',
      'He also pushed iconoclasm further than his father, called a church council to declare images heretical, and persecuted the monasteries that resisted. The tradition that eventually won gave him the name Kopronymos, and it is the name that stuck.'),
    S('Birth and early life',
      'He was born in Constantinople in 718 and crowned co-emperor as an infant in 720, so he had no life before the purple. His mother was Maria, and his father the general who had taken the throne the year before he was born.',
      'He was on campaign early. At Akroinon in 740 he fought beside his father in the battle that destroyed the last great Umayyad raiding army in Anatolia, and he succeeded to the throne the following year.',
      'His accession was immediately challenged. Artabasdos, his brother-in-law and commander of the Opsikian troops, seized Constantinople while Constantine was in Asia and held it for two years with the support of the image-venerating party. Constantine retook the city in 743 and had the usurper blinded.'),
    S('Character and Personality',
      'Nothing written about him is neutral. The sources are the work of the iconophile monastic tradition — Theophanes above all — writing after the policy he championed had been condemned, and they are less a portrait than a prosecution.',
      'The prosecution nonetheless has to concede the record. He is described as personally brave, obsessively attentive to logistics and fortification, and popular with the army and with the population of the capital he repopulated and re-watered. Some of his measures were remembered gratefully for generations, and a century later crowds prayed at his tomb during a Bulgar invasion.',
      'The hostile detail is largely about his manner and his tastes: the nickname Kaballinos, mocking his interest in horses and stables; the accusations of coarseness; the story of the baptismal font that produced Kopronymos. These belong to the vocabulary of vilification rather than to biography, and they are worth naming precisely so a reader can see what kind of evidence they are.'),
    S('Wars',
      'The Bulgar wars ran through his whole reign — nine campaigns by the usual count, combining army and fleet, and aimed at the Bulgar heartland rather than at defending Thrace. His victory at Anchialos in 763 was the most complete, and the pressure he sustained kept the Bulgar khanate in crisis for two decades.',
      'In the east he went over to the offensive for the first time in a century, raiding across the Taurus and taking Germanikeia and Theodosiopolis in the 740s and 750s while the caliphate changed dynasty. He resettled captured Christian populations in Thrace, which served both the frontier and the depopulated Balkans.',
      'The army he did this with was partly his own creation. He built the tagmata — professional regiments based near the capital, loyal to the emperor rather than to a provincial commander — which gave the throne a striking force and, not incidentally, an insurance policy against the kind of provincial revolt that had raised his own father.'),
    S('Iconoclasm',
      'In 754 he called a council at Hieria, attended by more than three hundred bishops and without the Pope or the eastern patriarchs, which declared the veneration of images heretical. That gave the policy a conciliar authority it had lacked under Leo III.',
      'Enforcement went much further than his father had taken it, and it fell hardest on the monasteries, which were the strongest centres of resistance. Monks were publicly humiliated, forced to marry, imprisoned and in some cases killed; the patriarch Constantine II was deposed, paraded and executed. Monastic property was confiscated.',
      'The Second Council of Nicaea condemned Hieria in 787, twelve years after his death, and iconoclasm was finally abandoned in 843. Everything preserved about his theology comes through the refutations written by the winners, so his own arguments survive only as quotations chosen to be answered.'),
    S('Legacy',
      'He left the empire militarily stronger and financially sounder than he found it, with a professional central army, a working frontier, a repopulated capital and an undisputed succession — and a religious policy that would be condemned as heresy within a generation.',
      'The condemnation shaped the record so thoroughly that his reputation had to be reconstructed by modern historians from what his enemies could not deny. It is the clearest case in this archive of a reign whose evidence is entirely in the hands of the opposition.',
      'His dynasty ended with his grandson, deposed and blinded by his own mother Irene, who restored the images. What outlasted him was the tagmata, the Bulgar frontier he had held, and the eastern offensive posture that the tenth century would carry to Antioch.')
  ],
  timeline: [
    { date: '718', title: 'Born', description: 'Born in Constantinople in the year his father held the city against the Umayyad siege.' },
    { date: '720', title: 'Crowned co-emperor', description: 'Crowned as an infant, securing the Isaurian succession.' },
    { date: '740', title: 'Akroinon', description: 'Fights beside his father in the destruction of the Umayyad raiding army in Phrygia.', links: [{ title: 'Battle of Akroinon', type: 'event', slug: 'battle-of-akroinon' }] },
    { date: '741–743', title: 'Civil war with Artabasdos', description: 'His brother-in-law seizes Constantinople; Constantine retakes it after two years and has him blinded.' },
    { date: '747', title: 'Plague', description: 'Bubonic plague empties Constantinople; he repopulates it with settlers from Greece and the islands.' },
    { date: '754', title: 'The Council of Hieria', description: 'A council of over three hundred bishops declares the veneration of images heretical.' },
    { date: '763', title: 'Victory at Anchialos', description: 'Defeats the Bulgars in the most complete of his nine campaigns against them.' },
    { date: '766', title: 'The aqueduct restored', description: 'Rebuilds the aqueduct of Valens, restoring the capital\'s water supply after the plague years.' },
    { date: '775', title: 'Died', description: 'Dies of a fever on campaign in Thrace, succeeded without dispute by his son Leo IV.' }
  ],
  relatedEntries: {
    people: [
      { title: 'Leo III', type: 'person', slug: 'leo-iii-the-isaurian', label: 'His father, and his commander at Akroinon' }
    ],
    events: [
      { title: 'Battle of Akroinon', type: 'event', slug: 'battle-of-akroinon', label: 'Fought here as a young man' },
      { title: 'Siege of Constantinople (717–718)', type: 'event', slug: 'siege-of-constantinople-717', label: 'The siege his father held in the year he was born' }
    ],
    locations: [
      { title: 'Byzantine Empire', type: 'location', slug: 'byzantine-empire', label: 'The realm he ruled for thirty-four years' },
      { title: 'Constantinople', type: 'location', slug: 'constantinople', label: 'His capital, repopulated and re-watered after the plague' }
    ]
  },
  sources: [
    { title: 'Theophanes the Confessor, Chronicle', url: 'https://en.wikipedia.org/wiki/Theophanes_the_Confessor', type: 'primary source' },
    { title: 'Constantine V', url: 'https://en.wikipedia.org/wiki/Constantine_V', type: 'encyclopedia' },
    { title: 'Dumbarton Oaks — Byzantine Collection', url: 'https://www.doaks.org/resources/coins', type: 'museum collection', institution: 'Dumbarton Oaks' }
  ]
}

const michaelIII = {
  id: 'michael-iii', type: 'character', name: 'Michael III',
  aliases: ['Michael the Drunkard', 'Michael III the Amorian'],
  born: 840, died: 867, deathAge: '27',
  causeOfDeath: 'Murdered in his bedchamber in September 867 by men sent by Basil the Macedonian.',
  restingPlace: 'Chrysopolis, later moved to the Church of the Holy Apostles',
  location: 'Constantinople',
  title: 'Emperor of the Romans',
  roles: ['Emperor'],
  image: img('Emperor Michael III and Caesar Bardas.png'),
  imageInfo: {
    caption: 'Michael III with his uncle Bardas, whom he raised to Caesar and who governed in his name, in a thirteenth-century Madrid Skylitzes miniature.',
    creator: 'Madrid Skylitzes manuscript',
    date: '13th century',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Emperor_Michael_III_and_Caesar_Bardas.png',
    note: 'A manuscript depiction made some four centuries later, and in a chronicle written under the dynasty founded by his murderer. It is the best image available and it is not a likeness. Public domain.'
  },
  epithets: [
    { name: 'the Drunkard', type: 'hostile epithet', note: 'Greek Methystes. Applied by historians writing under the dynasty of Basil I, who had murdered him and needed the killing to look like a rescue.' }
  ],
  summary: 'Michael III ruled from 842 to 867. His reign restored the icons, converted the Bulgars, sent Cyril and Methodius to the Slavs and broke the eastern frontier open — and his successor\'s historians recorded him as a drunk.',
  overview: 'The emperor whose reign contains most of the ninth century\'s achievements and whose name is a synonym for dissipation, because the man who had him killed commissioned the history.',
  greatestFeats: [
    'His reign saw the final restoration of icons in 843, ending more than a century of dispute',
    'The victory at the Lalakaon in 863 that broke the eastern frontier open',
    'Sent Cyril and Methodius to the Slavs, and oversaw the conversion of Bulgaria'
  ],
  birth: { date: '840', place: { name: 'Constantinople', slug: 'constantinople' } },
  death: { date: '867', place: { name: 'Constantinople', slug: 'constantinople' }, circumstance: 'Murdered at the age of twenty-seven by agents of his co-emperor Basil, who took the throne and founded the Macedonian dynasty.' },
  quickFacts: { realm: 'Eastern Roman Empire', dynasty: 'Amorian dynasty', culture: 'Roman', knownFor: 'A consequential reign remembered through his murderer\'s propaganda' },
  isRuler: true,
  succession: {
    office: 'Emperor of the Romans',
    predecessor: { displayName: 'Theophilos', note: 'His father, the last iconoclast emperor, who died in 842 leaving him a child under the regency of his mother Theodora. No article yet in this archive.' },
    successor: { displayName: 'Basil I', note: 'His co-emperor, who had him murdered in 867 and founded the Macedonian dynasty. No article yet in this archive.' }
  },
  contentSections: [
    S('Overview',
      'Michael III came to the throne in 842 at the age of two and was murdered in 867 at twenty-seven. Between those dates the empire restored the veneration of icons, destroyed the emirate that had been raiding Anatolia for a generation, converted the Bulgars, and sent a mission to the Slavs that produced a written Slavonic language.',
      'He personally directed very little of it. His mother Theodora governed as regent until 856, and his uncle Bardas ran the state as Caesar for most of the decade after that.',
      'What he is remembered for is drinking, chariot-racing and blasphemous horseplay, on the authority of writers working for the dynasty founded by the man who killed him. The reign and the reputation are almost unrelated, and separating them is most of what an article about him has to do.'),
    S('Birth and early life',
      'He was born in 840, the son of the emperor Theophilos and the empress Theodora, and became emperor at two when his father died.',
      'The regency was his mother\'s, and its defining act came in 843: the restoration of the icons, ending the second iconoclast period and the dispute that had run since Leo III. It is commemorated in the Orthodox calendar as the Triumph of Orthodoxy, and it happened in Michael\'s name while he was three years old.',
      'He grew up as a ceremonial emperor in someone else\'s government, which is the beginning of the problem. In 856 he took power in his own name, with his uncle Bardas removing Theodora and the minister Theoktistos, and Bardas then held the substance of authority as Caesar.'),
    S('Character and Personality',
      'The hostile portrait is vivid and specific: a young man who drank, spent public money on the hippodrome, staged mock church processions with a companion dressed as the patriarch, and neglected the empire to his favourites. It comes from Theophanes Continuatus and the chroniclers working under Basil I and his descendants.',
      'The motive for it is not hidden. Basil murdered a reigning emperor and needed the act to look like a deliverance, and the surviving histories were written by and for his dynasty. Almost none of the discreditable material is corroborated outside that tradition.',
      'What can be said with more confidence is that he was young, was governed by capable relatives, and elevated a Macedonian groom named Basil to co-emperor on his own judgement — a decision that killed him within a year. That is a real failure of judgement, and it does not require the drunkenness to explain it.'),
    S('A consequential reign',
      'The 860s are among the most productive decades in Byzantine history. At the Lalakaon in 863 his uncle Petronas encircled and destroyed the army of the emir of Melitene, and the eastern frontier that had been a source of annual raids became a frontier the empire could push.',
      'In the same year the brothers Cyril and Methodius were sent to Great Moravia, and the alphabet and liturgical language they devised became the foundation of Slavonic Christianity and letters — arguably the most durable thing any Byzantine government ever did.',
      'In 864 the Bulgar khan Boris accepted Christianity from Constantinople, bringing the empire\'s most persistent European enemy into its religious orbit. And in 860 a Rus\' fleet appeared before the capital itself, the first appearance in this archive of a people who would matter for centuries.'),
    S('Murder',
      'Basil, a peasant from Macedonia who had risen through the stables and the emperor\'s favour, was crowned co-emperor in 866 after arranging the murder of Bardas.',
      'In September 867 Michael was killed in his bedchamber by Basil\'s men. He was twenty-seven and had no son; Basil took the throne unopposed and founded the dynasty that ruled for nearly two centuries.',
      'The new regime\'s historians then explained the killing. Michael became the drunk who had squandered an empire, and Basil the providential rescuer — a version that held for a thousand years and is only now routinely qualified.'),
    S('Legacy',
      'The verdict has been reversed slowly and incompletely. Modern historians generally credit his reign with the eastern turn, the Slavonic mission and the Bulgar conversion, while noting that the credit belongs more to Theodora, Bardas, Petronas and the patriarch Photios than to the emperor himself.',
      'That is a fair judgement and it is still not the popular one. "Michael the Drunkard" remains the label, which is a lesson about who writes history worth stating plainly rather than implying.',
      'His body was moved to the Church of the Holy Apostles by Leo VI — Basil\'s successor, and possibly Michael\'s son, since Leo\'s mother had been Michael\'s mistress before Basil married her. The Macedonian dynasty may have descended from the emperor it was founded on murdering.')
  ],
  timeline: [
    { date: '840', title: 'Born', description: 'Born to the emperor Theophilos and the empress Theodora.' },
    { date: '842', title: 'Emperor at two', description: 'Succeeds his father under the regency of his mother Theodora.' },
    { date: '843', title: 'The icons restored', description: 'The regency ends iconoclasm; the event is kept in the Orthodox calendar as the Triumph of Orthodoxy.' },
    { date: '856', title: 'Bardas takes power', description: 'His uncle removes Theodora and Theoktistos and governs as Caesar in his name.' },
    { date: '860', title: 'The Rus\' before the walls', description: 'A Rus\' fleet raids the capital, the first appearance of a power that would matter for centuries.' },
    { date: '863', title: 'Lalakaon', description: 'Petronas destroys the army of the emir of Melitene and reverses the eastern frontier.', links: [{ title: 'Battle of Lalakaon', type: 'event', slug: 'battle-of-lalakaon' }] },
    { date: '863', title: 'Cyril and Methodius sent to the Slavs', description: 'The mission to Great Moravia produces a written Slavonic language and liturgy.' },
    { date: '864', title: 'Bulgaria converted', description: 'The khan Boris accepts Christianity from Constantinople.' },
    { date: '866', title: 'Basil crowned co-emperor', description: 'Basil the Macedonian arranges the murder of Bardas and is raised to the throne beside Michael.' },
    { date: '867', title: 'Murdered', description: 'Killed in his bedchamber at twenty-seven; Basil takes the throne and founds the Macedonian dynasty.' }
  ],
  relatedEntries: {
    people: [
      { title: 'Petronas', type: 'person', slug: 'petronas', label: 'His uncle, and the victor of the Lalakaon' }
    ],
    events: [
      { title: 'Battle of Lalakaon', type: 'event', slug: 'battle-of-lalakaon', label: 'The victory of his reign' }
    ],
    locations: [
      { title: 'Byzantine Empire', type: 'location', slug: 'byzantine-empire', label: 'The realm he reigned over from the age of two' },
      { title: 'Constantinople', type: 'location', slug: 'constantinople', label: 'Where he was born and murdered' },
      { title: 'Abbasid Caliphate', type: 'location', slug: 'abbasid-caliphate', label: 'Collapsing into anarchy during his reign' }
    ]
  },
  sources: [
    { title: 'Theophanes Continuatus', url: 'https://en.wikipedia.org/wiki/Theophanes_Continuatus', type: 'primary source' },
    { title: 'John Skylitzes, Synopsis of Histories', url: 'https://en.wikipedia.org/wiki/John_Skylitzes', type: 'primary source' },
    { title: 'Michael III', url: 'https://en.wikipedia.org/wiki/Michael_III', type: 'encyclopedia' }
  ]
}

const petronas = {
  id: 'petronas', type: 'character', name: 'Petronas',
  aliases: ['Petronas the Domestic', 'Petronas magistros'],
  born: 800, died: 865, deathAge: 'unknown',
  causeOfDeath: 'Died in 865, two years after his victory at the Lalakaon.',
  restingPlace: 'Unknown',
  location: 'Constantinople',
  title: 'Domestic of the Schools',
  roles: ['Commander'],
  image: img('Petronas with John the monk.png'),
  imageInfo: {
    caption: 'Petronas riding with John, the monk of Latros, who is said to have foretold his victory at the Lalakaon, in a thirteenth-century Madrid Skylitzes miniature.',
    creator: 'Madrid Skylitzes manuscript',
    date: '13th century',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Petronas_with_John_the_monk.png',
    note: 'A manuscript depiction painted some four centuries after his death, illustrating a story the chronicle tells rather than an event anyone recorded at the time. It is the only image of him that exists. Public domain.'
  },
  summary: 'Petronas was the Byzantine general who destroyed the army of the emir of Melitene at the Lalakaon in 863, the victory that turned the eastern frontier in the empire\'s favour.',
  overview: 'The uncle of an emperor and the brother of the man who governed for him, remembered for one battle he planned exactly right.',
  greatestFeats: [
    'Encircled and destroyed the raiding army of Umar al-Aqta at the Lalakaon in 863',
    'Held the office of Domestic of the Schools, commanding the empire\'s central regiments',
    'Was raised to the rank of magistros and celebrated in a triumph in Constantinople'
  ],
  birth: { date: 'Unknown, probably in the early ninth century', place: { name: 'Paphlagonia' } },
  death: { date: '865', place: { name: 'Constantinople', slug: 'constantinople' }, circumstance: 'Died two years after the Lalakaon, at the height of his reputation.' },
  quickFacts: { realm: 'Eastern Roman Empire', dynasty: 'The family of the empress Theodora', culture: 'Roman', knownFor: 'Winning the battle that reversed the eastern frontier' },
  contentSections: [
    S('Overview',
      'Petronas belonged to the family that ran the empire in the middle of the ninth century: brother of the empress Theodora, brother of Bardas who governed as Caesar, and uncle of the emperor Michael III.',
      'He held military command through the 850s and 860s, including the office of Domestic of the Schools, which put the central regiments of the army under him. His career is otherwise sparsely recorded, as most Byzantine generals\' are.',
      'In September 863 he destroyed the raiding army of Umar al-Aqta, emir of Melitene, at the river Lalakaon in Paphlagonia. It is the reason he has an article, and the reason the tenth-century reconquest of the east was possible.'),
    S('Birth and early life',
      'His birth is not recorded and neither is his year of birth; the family came from Paphlagonia in northern Anatolia and rose with his sister\'s marriage to the emperor Theophilos.',
      'When Theophilos died in 842, Theodora became regent for the child Michael III, and her brothers moved into the centre of government. Petronas took military office and his brother Bardas took politics.',
      'In 856 the brothers removed Theodora and her minister Theoktistos and put the sixteen-year-old Michael in nominal charge with Bardas as the real ruler. Petronas\'s part in that coup is recorded without detail, which is typical of what the sources preserve about him.'),
    S('Character and Personality',
      'Very little survives of him as a person, and honesty requires saying so rather than assembling a character from a single battle.',
      'What the chronicles do preserve is a reputation for competence rather than for the qualities they usually praise. He is not described as pious, or eloquent, or generous; he is described as the man who was given the eastern command in a bad year and produced the one result nobody had managed in two centuries.',
      'The one personal story the tradition tells is the meeting with John, the monk of Latros, who is said to have foretold his victory — the scene the Skylitzes manuscript illustrates. It says more about how chroniclers explained success than about Petronas, and it is included here as what it is: a story attached to a winner.'),
    S('The Lalakaon',
      'In 863 Umar al-Aqta led his army from Melitene across Anatolia to Amisos on the Black Sea. Petronas was given the response, and did not attempt to meet the raiders head-on.',
      'Instead he assembled forces from the western themes, the eastern themes and the Black Sea coast and moved them so that they converged on the returning column, closing around it in the valley of the Lalakaon and taking the high ground before the fighting began.',
      'The encirclement held. The raiding army was destroyed on 3 September and the emir was killed attempting to break out. The manoeuvre required several separate commands to arrive in the right places at once, which is the part of it that deserves the credit.'),
    S('Afterwards',
      'He was raised to the rank of magistros, one of the highest dignities of the court, and a triumph was celebrated in Constantinople for the victory.',
      'He died two years later, in 865, before the crisis that destroyed the rest of his family: his brother Bardas was murdered in 866 and his nephew Michael in 867, both at the hands of Basil the Macedonian.',
      'His reputation survived that change of dynasty intact, which is unusual for anyone associated with Michael III. The Macedonian historians who blackened the emperor had no reason to diminish the general, and the victory was too useful to the empire\'s self-image to be spoiled.'),
    S('Legacy',
      'The Lalakaon is the hinge of the Arab–Byzantine wars, and Petronas is the man who planned it. After 863 the frontier emirates were no longer able to mount the annual invasions that had defined the border for two centuries, and the empire began to push east.',
      'The campaigns that took Melitene in 934, and Cilicia, Antioch and Aleppo in the decades after, followed the opening he made. He did not live to see any of it.',
      'He is a good example of a figure this archive exists to keep visible: a commander with one securely recorded achievement of the first importance, whose life is otherwise almost entirely unrecoverable.')
  ],
  timeline: [
    { date: 'Early 9th century', title: 'Born', description: 'Born in Paphlagonia; the year is not recorded.' },
    { date: '830', title: 'His sister becomes empress', description: 'Theodora marries the emperor Theophilos, bringing her family into the centre of the state.' },
    { date: '842', title: 'The regency', description: 'Theophilos dies and Theodora governs for the infant Michael III; her brothers take office.' },
    { date: '856', title: 'The coup', description: 'With his brother Bardas he removes Theodora and Theoktistos from power.' },
    { date: 'c. 856', title: 'Domestic of the Schools', description: 'Takes command of the central regiments of the imperial army.' },
    { date: '3 September 863', title: 'Lalakaon', description: 'Encircles and destroys the army of Umar al-Aqta in Paphlagonia; the emir is killed.', links: [{ title: 'Battle of Lalakaon', type: 'event', slug: 'battle-of-lalakaon' }] },
    { date: '863', title: 'Magistros', description: 'Raised to one of the highest court dignities and honoured with a triumph in Constantinople.' },
    { date: '865', title: 'Died', description: 'Dies two years after the victory, before the murders that destroyed the rest of his family.' }
  ],
  relatedEntries: {
    people: [
      { title: 'Michael III', type: 'person', slug: 'michael-iii', label: 'His nephew, and the emperor whose reign the victory belongs to' }
    ],
    events: [
      { title: 'Battle of Lalakaon', type: 'event', slug: 'battle-of-lalakaon', label: 'The battle he planned and won' }
    ],
    locations: [
      { title: 'Emirate of Melitene', type: 'location', slug: 'emirate-of-melitene', label: 'Whose army he destroyed and whose emir he killed' },
      { title: 'Byzantine Empire', type: 'location', slug: 'byzantine-empire', label: 'The empire whose eastern frontier he reversed' }
    ]
  },
  sources: [
    { title: 'Theophanes Continuatus', url: 'https://en.wikipedia.org/wiki/Theophanes_Continuatus', type: 'primary source' },
    { title: 'John Skylitzes, Synopsis of Histories', url: 'https://en.wikipedia.org/wiki/John_Skylitzes', type: 'primary source' },
    { title: 'Petronas (general)', url: 'https://en.wikipedia.org/wiki/Petronas_(general)', type: 'encyclopedia' },
    { title: 'Biblioteca Nacional de España — Madrid Skylitzes', url: 'https://www.bne.es/en', type: 'museum collection', institution: 'Biblioteca Nacional de España' }
  ]
}

data.events.push(akroinon, lalakaon)
data.locations.push(abbasid, melitene)
data.characters.push(constantineV, michaelIII, petronas)

// ── Link into what already exists (bidirectional) ─────────────────────────────
const push = (arr, item) => { if (!arr.some((x) => x.slug === item.slug)) arr.push(item) }
const loc = (id) => data.locations.find((l) => l.id === id)
const chr = (id) => data.characters.find((c) => c.id === id)
const evt = (id) => data.events.find((e) => e.id === id)

const akroinonRef = (label) => ({ title: 'Battle of Akroinon', type: 'event', slug: 'battle-of-akroinon', label })
const lalakaonRef = (label) => ({ title: 'Battle of Lalakaon', type: 'event', slug: 'battle-of-lalakaon', label })
const abbasidRef = (label) => ({ title: 'Abbasid Caliphate', type: 'location', slug: 'abbasid-caliphate', label })

const byz = loc('byzantine-empire')
push((byz.relatedEntries.events ??= []), akroinonRef('The last great Umayyad invasion of Anatolia, destroyed in 740'))
push((byz.relatedEntries.events ??= []), lalakaonRef('Where the eastern frontier turned in its favour, in 863'))
push((byz.relatedEntries.locations ??= []), abbasidRef('Its eastern adversary from 750 to the eleventh century'))

const umayyad = loc('umayyad-caliphate')
push((umayyad.relatedEntries.events ??= []), akroinonRef('Its last great invasion of Anatolia, destroyed in 740'))
push((umayyad.relatedEntries.locations ??= []), abbasidRef('The dynasty that overthrew it in 750'))

const mongols = loc('mongol-empire')
push((mongols.relatedEntries.locations ??= []), abbasidRef('Ended by Hulagu at Baghdad in 1258'))

// Leo III fought at Akroinon, so the commander→battle reciprocity rule requires
// the battle in his own related entries — and his 740 timeline entry can now link.
const leo = chr('leo-iii-the-isaurian')
push((leo.relatedEntries.events ??= []), akroinonRef('His last victory, fought beside his son'))
const leoAkroinon = leo.timeline.find((t) => t.date === '740')
if (leoAkroinon && !leoAkroinon.links) {
  leoAkroinon.links = [{ title: 'Battle of Akroinon', type: 'event', slug: 'battle-of-akroinon' }]
}
push((leo.relatedEntries.people ??= []), { title: 'Constantine V', type: 'person', slug: 'constantine-v', label: 'His son and successor, who fought beside him at Akroinon' })

const siege717 = evt('siege-of-constantinople-717')
push((siege717.relatedEntries.events ??= []), akroinonRef('Where the raids that followed the siege were finally broken'))

console.log('+ events     : battle-of-akroinon, battle-of-lalakaon')
console.log('+ locations  : abbasid-caliphate, emirate-of-melitene')
console.log('+ characters : constantine-v, michael-iii, petronas')
console.log('~ linked     : byzantine-empire, umayyad-caliphate, mongol-empire,')
console.log('               leo-iii-the-isaurian, siege-of-constantinople-717')

writeFileSync(dataPath, JSON.stringify(data, null, 2))
console.log(`\nM7 written — characters ${data.characters.length}, locations ${data.locations.length}, events ${data.events.length}`)
