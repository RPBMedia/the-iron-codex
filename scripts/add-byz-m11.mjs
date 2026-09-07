/**
 * TRACK A, M11 — the steppe frontier: Levounion 1091, Beroia 1122, Sirmium 1167.
 *
 * Five articles: the three battles, and the Pechenegs and Cumans as anchor
 * polities.
 *
 * THE AGREED CORRECTION: **Manuel I was not present at Sirmium.** Andronikos
 * Kontostephanos commanded, and the article says so in the summary rather than
 * burying it, because the victory is routinely credited to the emperor who was in
 * Constantinople at the time.
 *
 * The milestone has a shape worth stating: two peoples arrive on the Danube, one
 * is destroyed in a single day at Levounion and finished off at Beroia, and the
 * other — which helped destroy the first — outlives the empire that used it and
 * ends up supplying the Mamluk sultans of Egypt. The Cumans' article therefore
 * links forward to Kalka and the Mongol material rather than stopping at 1200.
 *
 * DEFERRED: **Andronikos Kontostephanos**, the victor of Sirmium, has no image in
 * any form. He is named as commander with a note, which is now the sixth such
 * deferral in Track A and the reason the owner has an open decision in QUEUE.md
 * about the image rule's systematic effect.
 *
 * Sirmium's continuity points at Kosovo 1389 for want of anything nearer — **re-point it at the sack of 1204 when M13 lands**, which is the event
 * that actually undid what Manuel built.
 */
import { readFileSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dataPath = path.join(__dirname, '../server/data/history.json')
const data = JSON.parse(readFileSync(dataPath, 'utf8'))
const S = (title, ...paragraphs) => ({ title, paragraphs })
const img = (f) => `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(f)}`

const levounion = {
  id: 'battle-of-levounion', type: 'event', eventType: 'Battle', name: 'Battle of Levounion',
  aliases: ['Battle of Mount Levounion'], year: 1091,
  location: 'Mount Levounion, in Thrace',
  eventLocation: 'The hill of Levounion near the mouth of the Hebros, in Thrace',
  conflict: 'The Byzantine–Pecheneg wars',
  image: img('Cumania (1200) eng.png'),
  imageInfo: {
    caption: 'The Cuman lands north of the Black Sea, from which the forty thousand horsemen who decided the battle came.',
    creator: 'Wikimedia Commons contributor', date: 'modern map of Cumania around 1200', source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Cumania_(1200)_eng.png',
    note: 'A modern map, and a century later than the battle, used because no depiction of Levounion exists and because the map explains the outcome: Alexios won by hiring the people who had driven the Pechenegs onto his frontier in the first place. Public domain.'
  },
  summary: 'On 29 April 1091 Alexios I, with forty thousand Cuman allies, annihilated the Pecheneg host at Mount Levounion. Anna Komnene wrote that an entire people was destroyed in a single day.',
  details: 'The most complete destruction of a people recorded in Byzantine history, achieved by hiring their cousins.',
  outcome: 'Decisive Byzantine and Cuman victory; the Pecheneg nation destroyed as an independent power.',
  background: 'Pecheneg forces had wintered in Thrace and were within striking distance of Constantinople; the empire had no army left to face them alone.',
  battle: 'The Byzantine centre and the Cuman wings attacked the Pecheneg wagon camp at dawn and destroyed it, with the non-combatants inside.',
  aftermath: 'The survivors were enrolled in Byzantine service; a remnant returned across the Danube and was finished at Beroia in 1122.',
  contentSections: [
    S('Overview',
      'In the spring of 1091 the Byzantine Empire was closer to collapse than at any time since 717. The Seljuks held Anatolia, a Norman invasion had been beaten off at ruinous cost, and a Pecheneg host was wintering inside Thrace within a few days\' march of the capital, in alliance with a Turkish emir whose fleet was in the Aegean.',
      'Alexios I had no army capable of meeting them. What he had was diplomacy, and he used it: he hired the Cumans, the steppe people who had pushed the Pechenegs west in the first place, and brought forty thousand of them into Thrace.',
      'On 29 April the combined force attacked the Pecheneg camp at Levounion. What followed was not a battle so much as an extermination, and Anna Komnene — the emperor\'s daughter, and the source for all of it — recorded it in those terms.'),
    S('Background',
      'The Pechenegs had crossed the Danube in force from the 1040s and had beaten Byzantine armies repeatedly. By 1090 they had wintered south of the Balkan range and were operating in Thrace as a permanent presence rather than a raid.',
      'Alexios had been emperor for ten years and had spent them on other emergencies: the Norman invasion of the Balkans under Robert Guiscard, the loss of Anatolia to the Seljuks, and a currency collapse.',
      'The Pecheneg alliance with Tzachas, the Turkish emir of Smyrna, was what made 1091 an existential year rather than a bad one. A coordinated attack by land and sea on Constantinople was a real possibility, and the empire had no field army to prevent it.'),
    S('The Cuman alliance',
      'The Cumans and the Pechenegs were both Turkic steppe peoples, and the Cumans had driven the Pechenegs off the Pontic grasslands a generation earlier. Alexios\'s proposal was that they finish the job on Byzantine soil, for pay.',
      'Anna Komnene describes the negotiation with some anxiety: forty thousand Cuman horsemen inside imperial territory were an enormous risk, and the emperor spent much of the campaign managing allies who might have changed sides for a better offer.',
      'The gamble is the reign in miniature. Alexios had no army, so he bought one, and he spent the next decade doing versions of the same thing — including, four years later, the appeal to the west that produced the First Crusade.'),
    S('The battle',
      'The armies met on 29 April at the hill of Levounion, near the mouth of the Hebros in Thrace. The Pechenegs were encamped with their families and their wagons, in the steppe manner.',
      'The attack went in at dawn and the camp was overrun. The killing continued into the evening and included the non-combatants, and the Byzantine and Cuman forces then massacred a large number of prisoners during the night — an act Anna Komnene reports and does not defend.',
      'Her summary is the sentence the battle is remembered by: an entire people was destroyed in a single day.'),
    S('Aftermath',
      'The Pechenegs ceased to exist as an independent power. The survivors were settled inside the empire and enrolled as troops, and Pecheneg units appear in Byzantine armies for the next century.',
      'The Cumans were paid and went home, and they remained a factor on the Danube — sometimes allies, more often not — for the next hundred and fifty years.',
      'A Pecheneg remnant that had stayed north of the Danube crossed again in 1122 and was destroyed by John II at Beroia. After that they disappear from history as a distinct people.'),
    S('Significance',
      'Levounion is the point at which Alexios\'s reign stops being a holding action. The immediate threat to the capital was gone, the Balkans were secure for the first time in decades, and the recovery that carried the Komnenian dynasty through the twelfth century begins here.',
      'It is also the clearest example in this archive of the steppe frontier working as a system rather than a line: the empire did not defeat the Pechenegs so much as arrange for another steppe people to do it, which is precisely the policy Constantine VII had set out in the De Administrando Imperio a century and a half earlier.',
      'Four years later Alexios sent the appeal west that produced the First Crusade — a request for mercenaries that arrived as an army of conquest, and a reminder that hiring other people\'s soldiers does not always end as well as it did in 1091.')
  ],
  timeline: [
    { date: '1040s', title: 'The Pechenegs cross the Danube', description: 'Pecheneg groups enter Byzantine territory in force and defeat imperial armies repeatedly.' },
    { date: '1090', title: 'Wintering in Thrace', description: 'A Pecheneg host winters south of the Balkan range, within reach of the capital.' },
    { date: '1090–1091', title: 'Alliance with Tzachas', description: 'The emir of Smyrna coordinates with the Pechenegs, threatening a combined attack by land and sea.' },
    { date: 'Spring 1091', title: 'The Cumans are hired', description: 'Alexios brings forty thousand Cuman horsemen into Thrace against their steppe rivals.' },
    { date: '29 April 1091', title: 'Levounion', description: 'The Pecheneg camp is overrun at dawn and the people destroyed, non-combatants included.' },
    { date: '1091', title: 'The survivors enrolled', description: 'Pecheneg survivors are settled in the empire and serve in its armies.' },
    { date: '1122', title: 'Beroia', description: 'A remnant that had stayed north of the Danube is destroyed by John II.', links: [{ title: 'Battle of Beroia', type: 'event', slug: 'battle-of-beroia' }] }
  ],
  participants: [
    {
      side: 'Byzantine Empire and the Cumans',
      factions: [
        { name: 'Byzantine Empire', title: 'Byzantine Empire', type: 'location', slug: 'byzantine-empire' },
        { name: 'Cumans', title: 'Cumans', type: 'location', slug: 'cumans' }
      ],
      leaders: [{ name: 'Alexios I Komnenos', title: 'Alexios I Komnenos', type: 'person', slug: 'alexios-i-komnenos' }],
      strength: { display: 'c. 40,000 Cumans with a small Byzantine force', confidence: 'estimated', note: 'Anna Komnene gives the Cuman figure; the Byzantine contingent was small, which is the point of the campaign. The proportions matter more than the totals.' }
    },
    {
      side: 'Pechenegs',
      factions: [{ name: 'Pechenegs', title: 'Pechenegs', type: 'location', slug: 'pechenegs' }],
      leaders: [{ name: 'The Pecheneg chieftains (not individually named in the sources)', note: 'Not a gap in this archive: Anna Komnene describes the host and its destruction without naming its leaders, and no other source supplies them.' }],
      strength: { display: 'Unknown; the whole people with its wagons and families', confidence: 'unknown', note: 'The Pechenegs were encamped as a migrating nation rather than an army, which is why the sources describe the destruction of non-combatants alongside the fighting men.' }
    }
  ],
  battleContinuity: {
    label: 'Continue to the end of the Pechenegs',
    battleSlug: 'battle-of-beroia',
    relationship: 'same-factions',
    reason: 'Levounion destroyed the Pecheneg host in Thrace but a remnant remained north of the Danube; thirty-one years later John II caught it at Beroia and the people disappear from history there.'
  },
  relatedEntries: {
    people: [
      { title: 'Alexios I Komnenos', type: 'person', slug: 'alexios-i-komnenos', label: 'Commanded, and hired the allies who won it' },
      { title: 'Constantine VII', type: 'person', slug: 'constantine-vii', label: 'Whose handbook set out the policy of playing steppe peoples against each other' }
    ],
    events: [
      { title: 'Battle of Beroia', type: 'event', slug: 'battle-of-beroia', label: 'Where the Pecheneg remnant was finished' }
    ],
    locations: [
      { title: 'Pechenegs', type: 'location', slug: 'pechenegs', label: 'Destroyed as a people here' },
      { title: 'Cumans', type: 'location', slug: 'cumans', label: 'Whose forty thousand horsemen decided it' },
      { title: 'Byzantine Empire', type: 'location', slug: 'byzantine-empire', label: 'Whose recovery begins here' }
    ]
  },
  sources: [
    { title: 'Anna Komnene, The Alexiad', url: 'https://en.wikipedia.org/wiki/Alexiad', type: 'primary source' },
    { title: 'Battle of Levounion', url: 'https://en.wikipedia.org/wiki/Battle_of_Levounion', type: 'encyclopedia' },
    { title: 'Dumbarton Oaks — Byzantine studies', url: 'https://www.doaks.org/research/byzantine', type: 'academic resource', institution: 'Dumbarton Oaks' }
  ]
}

const beroia = {
  id: 'battle-of-beroia', type: 'event', eventType: 'Battle', name: 'Battle of Beroia',
  aliases: ['Battle of Beroe'], year: 1122,
  location: 'Beroia, in Thrace',
  eventLocation: 'Near Beroia in Thrace, modern Stara Zagora',
  conflict: 'The Byzantine–Pecheneg wars',
  image: img('John\'sEmpire.jpg'),
  imageInfo: {
    caption: 'The Byzantine Empire under John II Komnenos, whose Balkan frontier the Pecheneg crossing of 1122 threatened.',
    creator: 'Wikimedia Commons contributor', date: 'modern map of the empire under John II', source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:John%27sEmpire.jpg',
    note: 'A modern map. No depiction of the battle exists; what the map shows is why it mattered — a Pecheneg force loose in Thrace was inside the empire\'s European core, not on its edge. Public domain.'
  },
  summary: 'In 1122 John II Komnenos destroyed the last Pecheneg host at Beroia, breaking their wagon laager with the axes of the Varangian Guard. The Pechenegs disappear from history afterwards.',
  details: 'The battle that ended a people, and the last great action of the Varangian Guard.',
  outcome: 'Decisive Byzantine victory; the Pecheneg host destroyed and its survivors settled in the empire.',
  background: 'A Pecheneg remnant that had survived Levounion crossed the Danube into Byzantine territory.',
  battle: 'Repeated attacks failed against the wagon laager until the Varangian Guard was sent in with axes to cut it apart.',
  aftermath: 'John instituted an annual feast to commemorate the victory; the Pechenegs cease to appear as a people.',
  contentSections: [
    S('Overview',
      'Thirty-one years after Levounion, a Pecheneg force crossed the Danube into imperial territory — the remnant that had stayed north of the river when the main host was destroyed in Thrace.',
      'John II Komnenos met them near Beroia in Thrace in 1122. The Pechenegs did what steppe peoples on the defensive did: they formed their wagons into a fortified circle and fought from inside it.',
      'Byzantine attacks failed repeatedly against the laager until the emperor sent in the Varangian Guard, whose two-handed axes cut the wagons apart. The Pechenegs were destroyed, and after 1122 they do not appear again as an independent people.'),
    S('Background',
      'John II had succeeded his father Alexios in 1118 and inherited a recovering empire and a policy of consolidation on every frontier.',
      'The Pecheneg crossing was not a migration on the scale of the 1040s but it was serious enough to require a field campaign, and the emperor first tried what his father had done — negotiation, gifts, and buying off some chieftains against others.',
      'It bought time rather than a settlement, and in 1122 he brought them to battle.'),
    S('The wagon laager',
      'The Pecheneg formation was the standard steppe defensive tactic: the wagons drawn into a ring, the animals and families inside, archers shooting from between and beneath them.',
      'It was extremely difficult to attack with cavalry, which is what a Byzantine field army mainly was, and the first Byzantine assaults were beaten back with loss. John was wounded in the leg by an arrow during the fighting.',
      'The solution was infantry with the right weapon. The Varangian Guard — by this date largely English and Danish, and armed with the long two-handed axe — was sent in to break the wagons themselves, and it did. Once the ring was open the cavalry could enter, and the battle became a massacre.'),
    S('Aftermath',
      'The survivors were enrolled in imperial service and settled inside the empire, as those of Levounion had been. Pecheneg troops continued to appear in Byzantine armies, but as imperial soldiers rather than as a people with a policy of their own.',
      'John instituted an annual commemoration — the "Pecheneg feast" — which was still being kept generations later.',
      'The Danube frontier was quiet afterwards for a generation, and John spent the following years on Hungary, on the Serbs, and then on the eastern campaigns that occupied the rest of his reign.'),
    S('Significance',
      'Beroia is the end of a people. The Pechenegs had dominated the north Pontic steppe for two centuries, destroyed the Magyars\' homeland and pushed them into Pannonia, killed a prince of Kiev, and fought the empire for eighty years; after 1122 they are a name in other people\'s armies.',
      'It is also the last great action of the Varangian Guard as a decisive battlefield force. The unit continued for another two centuries, but this is the engagement in which it did the thing it was famous for and changed the outcome.',
      'For John II it confirmed the Komnenian restoration in Europe. His father had bought a victory with Cuman mercenaries in 1091; the son won one with his own army in 1122, which is a fair measure of what thirty years had rebuilt.')
  ],
  timeline: [
    { date: '1091', title: 'Levounion', description: 'The main Pecheneg host is destroyed in Thrace by Alexios I and his Cuman allies.', links: [{ title: 'Battle of Levounion', type: 'event', slug: 'battle-of-levounion' }] },
    { date: '1118', title: 'John II succeeds', description: 'Alexios dies and his son inherits a recovering empire and a policy of consolidation.' },
    { date: '1121', title: 'The Pechenegs cross the Danube', description: 'The remnant that stayed north of the river enters imperial territory.' },
    { date: '1122', title: 'Negotiation fails', description: 'Gifts and the buying of chieftains buy time rather than a settlement.' },
    { date: '1122', title: 'Beroia', description: 'The wagon laager is broken by the Varangian Guard and the Pecheneg host destroyed; John is wounded by an arrow.' },
    { date: 'After 1122', title: 'The Pecheneg feast', description: 'John institutes an annual commemoration of the victory, kept for generations.' }
  ],
  participants: [
    {
      side: 'Byzantine Empire',
      factions: [{ name: 'Byzantine Empire', title: 'Byzantine Empire', type: 'location', slug: 'byzantine-empire' }],
      leaders: [{ name: 'John II Komnenos', title: 'John II Komnenos', type: 'person', slug: 'john-ii-komnenos' }],
      strength: { display: 'Unknown; the imperial field army with the Varangian Guard', confidence: 'unknown', note: 'No figures survive. The composition matters more than the size: the battle turned on having axe-armed infantry available when the cavalry could not break the wagons.' }
    },
    {
      side: 'Pechenegs',
      factions: [{ name: 'Pechenegs', title: 'Pechenegs', type: 'location', slug: 'pechenegs' }],
      leaders: [{ name: 'The Pecheneg chieftains (not individually named in the sources)', note: 'Not a gap in this archive: the Byzantine accounts describe the laager and its destruction without naming the leaders inside it.' }],
      strength: { display: 'Unknown; a migrating host fighting from a wagon laager', confidence: 'unknown', note: 'As at Levounion, the Pechenegs were encamped as a people rather than deployed as an army, with families and animals inside the wagon ring.' }
    }
  ],
  battleContinuity: {
    label: 'Continue to the Komnenian high point',
    battleSlug: 'battle-of-sirmium',
    relationship: 'same-region',
    reason: 'Beroia secured the Danube frontier for a generation; forty-five years later at Sirmium the empire went further and made the kingdom of Hungary itself accept Byzantine overlordship — the furthest Byzantine authority reached in Europe after the eleventh century.'
  },
  relatedEntries: {
    people: [
      { title: 'John II Komnenos', type: 'person', slug: 'john-ii-komnenos', label: 'Commanded, and was wounded in the fighting' },
      { title: 'Alexios I Komnenos', type: 'person', slug: 'alexios-i-komnenos', label: 'His father, who had destroyed the main host in 1091' }
    ],
    events: [
      { title: 'Battle of Levounion', type: 'event', slug: 'battle-of-levounion', label: 'Where the main Pecheneg host was destroyed' },
      { title: 'Battle of Sirmium', type: 'event', slug: 'battle-of-sirmium', label: 'The Komnenian high point in Europe' }
    ],
    locations: [
      { title: 'Pechenegs', type: 'location', slug: 'pechenegs', label: 'Ended as a people here' },
      { title: 'Byzantine Empire', type: 'location', slug: 'byzantine-empire', label: 'Whose Danube frontier this secured' }
    ]
  },
  sources: [
    { title: 'John Kinnamos, Deeds of John and Manuel Comnenus', url: 'https://en.wikipedia.org/wiki/John_Kinnamos', type: 'primary source' },
    { title: 'Niketas Choniates, History', url: 'https://en.wikipedia.org/wiki/Niketas_Choniates', type: 'primary source' },
    { title: 'Battle of Beroia', url: 'https://en.wikipedia.org/wiki/Battle_of_Beroia', type: 'encyclopedia' }
  ]
}

const sirmium = {
  id: 'battle-of-sirmium', type: 'event', eventType: 'Battle', name: 'Battle of Sirmium',
  aliases: ['Battle of Semlin', 'Battle of Zemun'], year: 1167,
  location: 'Near Sirmium, on the Sava',
  eventLocation: 'Near Sirmium and Zemun, on the lower Sava in modern Serbia',
  conflict: 'The Byzantine–Hungarian wars',
  image: img('Bizancio1180AD-en.svg'),
  imageInfo: {
    caption: 'The Byzantine Empire in 1180, at the end of Manuel I\'s reign, holding the Sava frontier that Sirmium won.',
    creator: 'Wikimedia Commons contributor', date: 'modern map of the empire in 1180', source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Bizancio1180AD-en.svg',
    note: 'A modern map showing the result rather than the battle. The northern frontier on the Danube and Sava is what 1167 secured, and it is the furthest Byzantine authority reached in Europe after the eleventh century. Public domain.'
  },
  summary: 'On 8 July 1167 a Byzantine army under Andronikos Kontostephanos destroyed the Hungarian army near Sirmium, forcing Hungary to accept Byzantine overlordship. Manuel I, to whom the victory is usually credited, was not there.',
  details: 'The high point of Byzantine power in Europe since the eleventh century, won by a general most accounts forget.',
  outcome: 'Decisive Byzantine victory; Hungary accepted Byzantine suzerainty and ceded Syrmia, Bosnia and Dalmatia.',
  background: 'Manuel I had spent a decade intervening in Hungarian succession disputes to bring the kingdom into the imperial orbit.',
  battle: 'Kontostephanos drew up his army with the heaviest troops in the centre; the Hungarian charge broke on it and the army was destroyed.',
  aftermath: 'Hungary recognised Byzantine overlordship; the settlement lasted until Manuel\'s death in 1180.',
  contentSections: [
    S('Overview',
      'The Battle of Sirmium was fought on 8 July 1167 on the lower Sava, and it settled a decade of Byzantine intervention in the affairs of the kingdom of Hungary.',
      'The Byzantine army destroyed the Hungarian one, and Hungary accepted Byzantine overlordship along with the loss of Syrmia, Bosnia and Dalmatia. It is the furthest imperial authority reached in Europe after the eleventh century.',
      'It is also routinely credited to the wrong man. **Manuel I Komnenos was not present at the battle**; the army was commanded by his nephew Andronikos Kontostephanos, the megas doux, and the plan and the execution were his.'),
    S('Background',
      'Manuel I spent his reign trying to make the Balkans a Byzantine sphere, and Hungary was the largest obstacle and the largest opportunity. From the 1150s he intervened repeatedly in Hungarian succession disputes, backing claimants and taking hostages.',
      'The most ambitious version of the policy was dynastic: Manuel brought the Hungarian prince Béla to Constantinople, betrothed him to his daughter, gave him the invented title of despot, and for a time intended him as heir to the empire — which would have united the two crowns.',
      'When Manuel\'s own son was born in 1169 that plan lapsed, but in 1167 it was still live, and the war was fought over exactly that: whether Hungary would be a Byzantine client or an independent kingdom.'),
    S('The battle',
      'Kontostephanos brought the army to the Sava in the summer of 1167 and met the Hungarian force, commanded by a general the Byzantine sources call Dénes, near Sirmium.',
      'He arranged his line with the heaviest cavalry in the centre and archers and light troops on the flanks, and received the Hungarian charge rather than meeting it — a deliberate choice, and the sources make clear it was his.',
      'The charge broke on the Byzantine centre, the flanks closed, and the Hungarian army was destroyed. The Byzantine accounts describe enormous quantities of captured armour and standards, and Kontostephanos sent the news to the emperor in Constantinople.'),
    S('Who won it',
      'This archive states the correction plainly because the error is so common. Manuel I was in Constantinople. The campaign was planned in his name and the credit was taken in his name, and John Kinnamos and Niketas Choniates both make clear that Andronikos Kontostephanos commanded on the day.',
      'Kontostephanos was Manuel\'s nephew, held the office of megas doux, and had already commanded in Italy and at sea. Sirmium is his victory and it is the one usually filed under the emperor\'s name.',
      'He has no article in this archive for the ordinary reason: no image of him survives in any form. He is named here as the commander, with the correction stated, which is the best the archive\'s rules allow.'),
    S('Aftermath',
      'Hungary came to terms. Byzantine overlordship was acknowledged, Syrmia and the Dalmatian coast passed to the empire, and Bosnia came into the imperial sphere. Manuel celebrated a triumph in Constantinople.',
      'The settlement held for thirteen years and did not survive him. Béla returned to Hungary in 1172 as king Béla III — a Byzantine-raised monarch who was, in the end, a Hungarian one — and after Manuel died in 1180 the ceded territories went back.',
      'The Komnenian position in Europe unravelled quickly afterwards, and the empire never again held the Sava.'),
    S('Significance',
      'Sirmium is the high-water mark of the twelfth-century recovery in Europe, as Antioch was in the east two centuries earlier. For a decade the empire held a frontier on the Danube and the Sava and a client kingdom beyond it.',
      'The speed of the collapse after 1180 is the standing lesson of the Komnenian period: the system depended on one capable emperor, and the machinery of client states and dynastic marriages he built did not outlive him by three years.',
      'The battle also stands as this archive\'s clearest case of misattributed credit — not propaganda, as with Michael III, but the ordinary process by which a reign absorbs the achievements of the people who served it.')
  ],
  timeline: [
    { date: '1150s', title: 'Intervention in Hungary', description: 'Manuel I backs claimants in Hungarian succession disputes to bring the kingdom into the imperial orbit.' },
    { date: '1163', title: 'Béla brought to Constantinople', description: 'The Hungarian prince is betrothed to Manuel\'s daughter and named despot, intended as heir to the empire.' },
    { date: '1166', title: 'War resumes', description: 'Hungarian resistance to Byzantine claims over Syrmia and Dalmatia leads to renewed campaigning.' },
    { date: '8 July 1167', title: 'Sirmium', description: 'Andronikos Kontostephanos destroys the Hungarian army; Manuel is in Constantinople.' },
    { date: '1167', title: 'Hungary submits', description: 'Byzantine overlordship is acknowledged and Syrmia, Bosnia and Dalmatia pass into the imperial sphere.' },
    { date: '1169', title: 'The dynastic plan lapses', description: 'The birth of Manuel\'s son ends the prospect of Béla inheriting the empire.' },
    { date: '1172', title: 'Béla III crowned', description: 'The Byzantine-raised prince returns to Hungary as its king.' },
    { date: '1180', title: 'The settlement ends', description: 'Manuel dies and the ceded territories return to Hungary within a few years.' }
  ],
  participants: [
    {
      side: 'Byzantine Empire',
      factions: [{ name: 'Byzantine Empire', title: 'Byzantine Empire', type: 'location', slug: 'byzantine-empire' }],
      leaders: [{ name: 'Andronikos Kontostephanos', note: 'No article: the megas doux who actually commanded and won the battle, and the reason this article carries a correction. No image of him survives in any form, which is the same rule that has deferred five other commanders in this track.' }],
      strength: { display: 'Unknown; a full imperial field army with allied contingents', confidence: 'unknown', note: 'The Byzantine sources describe the deployment in detail and the numbers not at all, which is characteristic of Kinnamos and Choniates.' }
    },
    {
      side: 'Kingdom of Hungary',
      factions: [{ name: 'Kingdom of Hungary', title: 'Kingdom of Hungary', type: 'location', slug: 'kingdom-of-hungary' }],
      leaders: [{ name: 'Dénes', note: 'No article: the Hungarian commander, known to the Byzantine sources by that name and little else. No image of him survives.' }],
      strength: { display: 'Unknown; the Hungarian royal army', confidence: 'unknown', note: 'Byzantine accounts stress the quantity of armour captured rather than the number of men, and Hungarian sources say very little about a defeat.' }
    }
  ],
  battleContinuity: {
    label: 'Continue to who ended up holding these Balkans',
    battleSlug: 'battle-of-kosovo',
    relationship: 'same-region',
    reason: 'Sirmium is the last time a Byzantine emperor dictated terms in the northern Balkans; the position collapsed within three years of Manuel\'s death, and at Kosovo in 1389 the same lands passed to the Ottomans who would take Constantinople itself.'
  },
  relatedEntries: {
    people: [
      { title: 'Manuel I Komnenos', type: 'person', slug: 'manuel-i-komnenos', label: 'Whose policy it completed — and who was not present' }
    ],
    events: [
      { title: 'Battle of Beroia', type: 'event', slug: 'battle-of-beroia', label: 'Where the Danube frontier had been secured' },
      { title: 'Battle of Manzikert', type: 'event', slug: 'battle-of-manzikert', label: 'The eastern disaster the Komnenoi were still recovering from' }
    ],
    locations: [
      { title: 'Kingdom of Hungary', type: 'location', slug: 'kingdom-of-hungary', label: 'Which accepted Byzantine overlordship after it' },
      { title: 'Byzantine Empire', type: 'location', slug: 'byzantine-empire', label: 'At its greatest European extent since the eleventh century' }
    ]
  },
  sources: [
    { title: 'John Kinnamos, Deeds of John and Manuel Comnenus', url: 'https://en.wikipedia.org/wiki/John_Kinnamos', type: 'primary source' },
    { title: 'Niketas Choniates, History', url: 'https://en.wikipedia.org/wiki/Niketas_Choniates', type: 'primary source' },
    { title: 'Battle of Sirmium', url: 'https://en.wikipedia.org/wiki/Battle_of_Sirmium', type: 'encyclopedia' }
  ]
}

const pechenegs = {
  id: 'pechenegs', type: 'location', locationType: 'Polity',
  name: 'Pechenegs', aliases: ['Patzinaks', 'Pecheneg confederation', 'Bisseni'],
  kingdom: 'Pechenegs', year: 890,
  image: img('The Pechenegs defeating the Rus, from the Skyllitzes Matritensis, fol. 173r, (Public Domain) via Creative Commons.jpg'),
  imageInfo: {
    caption: 'Pecheneg horsemen riding down their enemies, in a Madrid Skylitzes miniature.',
    creator: 'Madrid Skylitzes manuscript', date: '12th–13th century', source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:The_Pechenegs_defeating_the_Rus,_from_the_Skyllitzes_Matritensis,_fol._173r,_(Public_Domain)_via_Creative_Commons.jpg',
    note: 'A Byzantine manuscript image of the people this archive knows almost entirely through Byzantine eyes. The Pechenegs left no written record of their own. Public domain.'
  },
  summary: 'The Pechenegs were a Turkic steppe confederation who dominated the north Pontic grasslands for two centuries, drove the Magyars into Pannonia, killed a prince of Kiev, and were destroyed by the Byzantine Empire in 1091 and 1122.',
  overview: 'A people the empire spent two hundred years bribing, hiring and fearing, and then annihilated in a single morning.',
  knownFor: [
    'Occupied the steppe between the Danube and the Volga from the late ninth century.',
    'Drove the Magyars out of Etelköz in the 890s, pushing them into the Hungarian plain.',
    'Killed Sviatoslav of Kiev at the Dnieper cataracts in 972 and made a cup from his skull.',
    'Are the subject of the opening chapters of Constantine VII\'s handbook of imperial diplomacy.',
    'Destroyed as a people at Levounion in 1091 and finished at Beroia in 1122.'
  ],
  contentSections: [
    S('Overview',
      'The Pechenegs were a confederation of Turkic-speaking tribes who moved west onto the grasslands north of the Black Sea in the late ninth century and held them for roughly two hundred years.',
      'They had no cities, no written language and no single ruler — eight tribes under their own chieftains, in a confederation that acted together when it suited and separately when it did not.',
      'For the Byzantine Empire they were the central fact of the northern frontier: too dangerous to fight, too useful to destroy, and positioned so that they could be set against the Rus\', the Magyars, the Bulgars or each other. That policy worked for a century and a half and then failed completely.'),
    S('Origins and the steppe',
      'They appear in the sources moving west under pressure from the Oghuz and the Khazars, and by the 890s they held the steppe from the Danube to the Don.',
      'Their first great act was to destroy the Magyar homeland of Etelköz while its warriors were away campaigning. The Magyars moved west into the Carpathian basin, where they became Hungary — so the kingdom the empire fought at Sirmium in 1167 exists in the shape it does because of a Pecheneg raid in the 890s.',
      'They lived by herding, by raiding, and by charging tolls on the river trade between the Rus\' and Constantinople — which made them essential to that trade and a permanent threat to it.'),
    S('Major figures',
      'The Pechenegs left no records, so the named individuals are those the Byzantine and Rus\' sources happened to mention, and the list is short and unreliable.',
      'Kourya is named as the chieftain who killed Sviatoslav of Kiev at the Dnieper cataracts in 972 and had his skull mounted as a drinking cup — the second ruler in this archive to suffer that particular fate.',
      'In the eleventh century the sources name Tyrach and Kegen, rivals whose quarrel brought the Pechenegs across the Danube: Kegen defected to the empire with his followers and was baptised, and Tyrach led the invasion that followed. Their conflict is the clearest surviving glimpse of Pecheneg politics, and it comes entirely from the people they were invading.'),
    S('The empire\'s handbook',
      'The clearest statement of Byzantine steppe policy is the opening of the De Administrando Imperio, the private handbook Constantine VII wrote for his son around 950, and it is about the Pechenegs.',
      'The argument is systematic: keep peace with the Pechenegs, because while they are friendly the Rus\' cannot attack, the Magyars cannot attack, and the Bulgars can be threatened. Every other people on the northern frontier is managed through them.',
      'It is the frankest surviving document of how the empire actually thought about its neighbours — not as enemies to be conquered but as forces to be balanced — and the Pechenegs are its worked example.'),
    S('Into the empire',
      'The system broke in the eleventh century, when the Cumans pushed the Pechenegs west and the empire could no longer keep them on the far side of the Danube.',
      'From 1046 large groups crossed into imperial territory, sometimes as invited settlers and sometimes as invaders, and Byzantine armies were beaten repeatedly — most heavily in the campaigns of 1049 to 1053, which cost the empire an army and a reputation.',
      'By 1090 a Pecheneg host was wintering in Thrace, in alliance with the Turkish emir of Smyrna, and the capital itself was threatened.'),
    S('Destruction',
      'On 29 April 1091 Alexios I met them at Mount Levounion with forty thousand Cuman horsemen he had hired, and destroyed the host with its families in a single day.',
      'A remnant remained north of the Danube and crossed again a generation later; John II caught it at Beroia in 1122 and destroyed it in turn, breaking the wagon laager with the axes of the Varangian Guard.',
      'After 1122 the Pechenegs do not appear as an independent people. Survivors were settled inside the empire and in Hungary, served as troops, and were absorbed.'),
    S('Legacy',
      'They are the clearest case in this archive of a people who existed for everyone else\'s purposes. Almost everything known about them was written by Byzantines, Rus\' or Hungarians, all of whom were describing an enemy or a hired sword.',
      'Their strategic effect was enormous and largely accidental: they made Hungary Hungarian by expelling the Magyars from the steppe, they controlled the trade route between Kiev and Constantinople, and they killed Sviatoslav.',
      'And their end is unusually abrupt. Most peoples in this archive fade, split or are absorbed over generations; the Pechenegs were destroyed on a specific morning, and the source that records it says so in as many words.')
  ],
  timeline: [
    { date: 'c. 890s', title: 'The Magyars driven west', description: 'Pecheneg attacks destroy the Magyar homeland of Etelköz and push them into the Carpathian basin.' },
    { date: 'c. 950', title: 'The imperial handbook', description: 'Constantine VII opens the De Administrando Imperio with the argument that Byzantine northern policy runs through the Pechenegs.' },
    { date: '972', title: 'Sviatoslav killed', description: 'The prince of Kiev is ambushed at the Dnieper cataracts and his skull made into a drinking cup.' },
    { date: '1046–1053', title: 'Crossing the Danube', description: 'Large groups enter imperial territory and defeat Byzantine armies repeatedly.' },
    { date: '1090', title: 'Wintering in Thrace', description: 'A Pecheneg host winters inside the empire in alliance with the emir of Smyrna.' },
    { date: '1091', title: 'Levounion', description: 'Alexios I and forty thousand Cumans destroy the host in a single day.', links: [{ title: 'Battle of Levounion', type: 'event', slug: 'battle-of-levounion' }] },
    { date: '1122', title: 'Beroia', description: 'John II destroys the last host; the Pechenegs disappear as an independent people.', links: [{ title: 'Battle of Beroia', type: 'event', slug: 'battle-of-beroia' }] }
  ],
  relatedEntries: {
    people: [
      { title: 'Sviatoslav I of Kiev', type: 'person', slug: 'sviatoslav-i-of-kiev', label: 'Killed by them at the Dnieper cataracts in 972' },
      { title: 'Constantine VII', type: 'person', slug: 'constantine-vii', label: 'Whose handbook makes them the hinge of imperial diplomacy' },
      { title: 'Alexios I Komnenos', type: 'person', slug: 'alexios-i-komnenos', label: 'Destroyed them at Levounion' }
    ],
    events: [
      { title: 'Battle of Levounion', type: 'event', slug: 'battle-of-levounion', label: 'Where they were destroyed as a people' },
      { title: 'Battle of Beroia', type: 'event', slug: 'battle-of-beroia', label: 'Where the remnant ended' }
    ],
    locations: [
      { title: 'Cumans', type: 'location', slug: 'cumans', label: 'Who drove them west and then helped destroy them' },
      { title: 'Byzantine Empire', type: 'location', slug: 'byzantine-empire', label: 'Which managed them for a century and then annihilated them' },
      { title: 'Kievan Rus', type: 'location', slug: 'kievan-rus', label: 'Whose trade route to Constantinople they controlled' }
    ]
  },
  sources: [
    { title: 'Constantine VII, De Administrando Imperio', url: 'https://en.wikipedia.org/wiki/De_Administrando_Imperio', type: 'primary source' },
    { title: 'Anna Komnene, The Alexiad', url: 'https://en.wikipedia.org/wiki/Alexiad', type: 'primary source' },
    { title: 'Pechenegs', url: 'https://en.wikipedia.org/wiki/Pechenegs', type: 'encyclopedia' }
  ]
}

const cumans = {
  id: 'cumans', type: 'location', locationType: 'Polity',
  name: 'Cumans', aliases: ['Polovtsy', 'Kipchaks', 'Cuman–Kipchak confederation', 'Cumania'],
  kingdom: 'Cumans', year: 1050,
  image: img('Cuman statues from Ukraine in Neues Museum, Berlin.jpg'),
  imageInfo: {
    caption: 'Cuman stone figures from Ukraine, carved to stand over graves and now in the Neues Museum in Berlin.',
    creator: 'Cuman craftsmen; photographed in the Neues Museum', date: '11th–13th century', source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Cuman_statues_from_Ukraine_in_Neues_Museum,_Berlin.jpg',
    note: 'These are the Cumans\' own work, which makes them rare: like the Pechenegs, the Cumans left no writing, and almost everything else known about them comes from the people they fought. The figures hold vessels at the waist and stood over burial mounds across the steppe. Licensed CC BY-SA 3.0.'
  },
  summary: 'The Cumans were the Turkic confederation that ruled the steppe from the Danube to the Volga in the eleventh to thirteenth centuries, fought and served every power around them, and were shattered by the Mongols in 1223.',
  overview: 'A people with no state, no capital and no writing, who nonetheless decided the fate of Byzantine, Rus\' and Hungarian politics for two hundred years — and then supplied Egypt with its sultans.',
  knownFor: [
    'Ruled the Desht-i Qipchaq, the steppe from the Danube to the Volga.',
    'Fought the Rus\' principalities for a century and a half, and married into them.',
    'Provided the forty thousand horsemen who destroyed the Pechenegs at Levounion in 1091.',
    'Were broken by the Mongols at the Kalka in 1223 and fled west into Hungary.',
    'Supplied, through the slave markets, the Kipchak Mamluks who ruled Egypt and Syria.'
  ],
  contentSections: [
    S('Overview',
      'The Cumans — Polovtsy to the Rus\', Kipchaks in the Islamic sources — moved west across the steppe in the eleventh century and displaced the Pechenegs and the Oghuz from the grasslands north of the Black Sea.',
      'They were never a state. What the sources call Cumania was a confederation of clans under their own khans, without a capital, a central authority or a written language, occupying the largest continuous grassland in Europe.',
      'That did not make them marginal. For two centuries no war in the northern Balkans, the Rus\' lands or the Hungarian plain was fought without Cuman cavalry on one side or both, and the Byzantine Empire owed them one of its most important victories.'),
    S('The steppe confederation',
      'Their organisation was the standard steppe pattern: clans grouped into larger units under khans, cooperating for large campaigns and operating separately the rest of the time.',
      'They lived by herding, by raiding settled neighbours, by charging for passage, and increasingly by selling captives — and, in the end, by being sold themselves.',
      'The stone figures they set over their burial mounds are the largest body of physical evidence they left: thousands of them once stood across the steppe, and they are the closest thing to a Cuman self-portrait that exists.'),
    S('Major figures',
      'As with the Pechenegs, the named khans are the ones outsiders recorded, and the list reflects who fought whom rather than who mattered.',
      'Tugorkan and Bönek are the khans who led the Cuman force at Levounion in 1091 and then spent the following decade raiding the Rus\' — Tugorkan was killed outside Pereyaslavl in 1096, having in the meantime married his daughter to the prince of Kiev.',
      'Köten is the last and most consequential: the khan who led the survivors of the Mongol invasion into Hungary in 1239, was granted lands in exchange for conversion, and was murdered in Pest by a mob who believed the Cumans were Mongol spies — shortly before the Mongols arrived and destroyed the Hungarian army at Mohi.'),
    S('Byzantium, the Rus\' and Hungary',
      'Their relationship with the Byzantine Empire was mercenary in the exact sense. In 1091 Alexios I hired forty thousand of them and destroyed the Pechenegs at Levounion; in other decades they raided the same frontier they had been paid to defend.',
      'With the Rus\' the relationship was continuous war and continuous intermarriage. Cuman raids are the background to a century and a half of Rus\' history and to the Tale of Igor\'s Campaign, and several Rus\' princes had Cuman mothers.',
      'With Hungary it ended in settlement. The Cumans who fled the Mongols were given land in the Hungarian plain, and the region of Kunság still carries their name; their language survived there into the seventeenth century.'),
    S('The Mongols',
      'In 1223 a Mongol reconnaissance force under Jebe and Subutai came round the Caucasus and attacked the Cumans, who appealed to the Rus\' princes for help.',
      'The combined Cuman and Rus\' army was destroyed at the Kalka River. It is the first encounter between the Mongols and either people, and it went badly enough to be remembered as a portent.',
      'The full invasion came in 1237. Cumania was destroyed as a political entity, and the survivors split: some submitted and were absorbed into the Golden Horde, some fled to Hungary and Bulgaria, and very large numbers were sold into slavery.'),
    S('Legacy',
      'The largest consequence was one nobody intended. Kipchak captives sold through the Black Sea slave markets became the military slaves of the Ayyubid sultans of Egypt, and in 1250 those Mamluks took the state for themselves.',
      'The Mamluk sultanate that resulted was Kipchak in origin and ruled Egypt and Syria for two and a half centuries — it stopped the Mongols at Ain Jalut in 1260, and it was a Kipchak-born sultan, Baibars, who destroyed Antioch in 1268.',
      'So a steppe confederation with no writing and no capital ended up supplying the dynasty that halted the Mongol advance and finished the last of the Byzantine east. The Codex Cumanicus, a phrasebook compiled by Italian merchants and German missionaries, is most of what survives of the language.')
  ],
  timeline: [
    { date: 'c. 1050', title: 'West across the steppe', description: 'Cuman groups displace the Oghuz and Pechenegs from the grasslands north of the Black Sea.' },
    { date: '1091', title: 'Levounion', description: 'Forty thousand Cumans hired by Alexios I destroy the Pechenegs in Thrace.', links: [{ title: 'Battle of Levounion', type: 'event', slug: 'battle-of-levounion' }] },
    { date: '1096', title: 'Tugorkan killed', description: 'The khan who fought at Levounion dies outside Pereyaslavl, having married his daughter to the prince of Kiev.' },
    { date: '1185', title: 'The Tale of Igor\'s Campaign', description: 'A failed Rus\' expedition against the Cumans becomes the most famous poem in early Slavic literature.' },
    { date: '1223', title: 'The Kalka River', description: 'A Mongol reconnaissance force destroys a combined Cuman and Rus\' army.', links: [{ title: 'Battle of the Kalka River', type: 'event', slug: 'battle-of-the-kalka-river' }] },
    { date: '1237–1241', title: 'Cumania destroyed', description: 'The Mongol invasion ends the confederation; survivors are absorbed, flee west, or are sold into slavery.' },
    { date: '1239', title: 'Köten enters Hungary', description: 'The khan leads survivors into the Hungarian plain and is murdered in Pest as a suspected Mongol spy.' },
    { date: '1250', title: 'The Mamluks take Egypt', description: 'Kipchak military slaves seize the Ayyubid state and found a sultanate that lasts two and a half centuries.' }
  ],
  relatedEntries: {
    people: [
      { title: 'Alexios I Komnenos', type: 'person', slug: 'alexios-i-komnenos', label: 'Hired forty thousand of them in 1091' },
      { title: 'Subutai', type: 'person', slug: 'subutai', label: 'Whose reconnaissance destroyed them at the Kalka in 1223' }
    ],
    events: [
      { title: 'Battle of Levounion', type: 'event', slug: 'battle-of-levounion', label: 'Their most consequential service to the empire' },
      { title: 'Battle of the Kalka River', type: 'event', slug: 'battle-of-the-kalka-river', label: 'Their first encounter with the Mongols' }
    ],
    locations: [
      { title: 'Pechenegs', type: 'location', slug: 'pechenegs', label: 'Whom they drove west and then helped destroy' },
      { title: 'Mongol Empire', type: 'location', slug: 'mongol-empire', label: 'Which ended Cumania in the 1230s' },
      { title: 'Kievan Rus', type: 'location', slug: 'kievan-rus', label: 'Their opponents, trading partners and in-laws for a century and a half' }
    ]
  },
  sources: [
    { title: 'Anna Komnene, The Alexiad', url: 'https://en.wikipedia.org/wiki/Alexiad', type: 'primary source' },
    { title: 'The Codex Cumanicus', url: 'https://en.wikipedia.org/wiki/Codex_Cumanicus', type: 'primary source' },
    { title: 'Cumans', url: 'https://en.wikipedia.org/wiki/Cumans', type: 'encyclopedia' },
    { title: 'Neues Museum, Berlin', url: 'https://www.smb.museum/en/museums-institutions/neues-museum/home/', type: 'museum collection', institution: 'Neues Museum' }
  ]
}

data.events.push(levounion, beroia, sirmium)
data.locations.push(pechenegs, cumans)

// ── Bidirectional links ───────────────────────────────────────────────────────
const push = (arr, item) => { if (!arr.some((x) => x.slug === item.slug)) arr.push(item) }
const loc = (id) => data.locations.find((l) => l.id === id)
const chr = (id) => data.characters.find((c) => c.id === id)
const evt = (id) => data.events.find((e) => e.id === id)

const levRef = (label) => ({ title: 'Battle of Levounion', type: 'event', slug: 'battle-of-levounion', label })
const berRef = (label) => ({ title: 'Battle of Beroia', type: 'event', slug: 'battle-of-beroia', label })
const sirRef = (label) => ({ title: 'Battle of Sirmium', type: 'event', slug: 'battle-of-sirmium', label })

// Commander→battle reciprocity is required by the checker.
const alexios = chr('alexios-i-komnenos')
push((alexios.relatedEntries.events ??= []), levRef('His victory over the Pechenegs in 1091'))
const john2 = chr('john-ii-komnenos')
push((john2.relatedEntries.events ??= []), berRef('Where he destroyed the last Pecheneg host'))
const manuel = chr('manuel-i-komnenos')
push((manuel.relatedEntries.events ??= []), sirRef('Won in his name by Andronikos Kontostephanos, in his absence'))

const byz = loc('byzantine-empire')
push((byz.relatedEntries.events ??= []), levRef('Where the Pechenegs were destroyed in 1091'))
push((byz.relatedEntries.events ??= []), sirRef('Its greatest European extent since the eleventh century'))

const hungary = loc('kingdom-of-hungary')
push((hungary.relatedEntries.events ??= []), sirRef('Where its army was destroyed and it accepted Byzantine overlordship in 1167'))

const rus = loc('kievan-rus')
push((rus.relatedEntries.locations ??= []), { title: 'Cumans', type: 'location', slug: 'cumans', label: 'Its steppe neighbours, enemies and in-laws for a century and a half' })
push((rus.relatedEntries.locations ??= []), { title: 'Pechenegs', type: 'location', slug: 'pechenegs', label: 'Who controlled its trade route to Constantinople' })

const sviatoslav = chr('sviatoslav-i-of-kiev')
push((sviatoslav.relatedEntries.locations ??= []), { title: 'Pechenegs', type: 'location', slug: 'pechenegs', label: 'Who killed him at the Dnieper cataracts in 972' })

const kalka = evt('battle-of-the-kalka-river')
push((kalka.relatedEntries.locations ??= []), { title: 'Cumans', type: 'location', slug: 'cumans', label: 'Whose appeal for help brought the Rus\' to the river' })

const mongols = loc('mongol-empire')
push((mongols.relatedEntries.locations ??= []), { title: 'Cumans', type: 'location', slug: 'cumans', label: 'Destroyed in the 1230s; their captives became the Mamluks of Egypt' })

console.log('+ events    : battle-of-levounion, battle-of-beroia, battle-of-sirmium')
console.log('+ locations : pechenegs, cumans')
console.log('~ linked    : alexios-i-komnenos, john-ii-komnenos, manuel-i-komnenos,')
console.log('              byzantine-empire, kingdom-of-hungary, kievan-rus,')
console.log('              sviatoslav-i-of-kiev, battle-of-the-kalka-river, mongol-empire')

writeFileSync(dataPath, JSON.stringify(data, null, 2))
console.log(`\nM11 written — characters ${data.characters.length}, locations ${data.locations.length}, events ${data.events.length}`)
