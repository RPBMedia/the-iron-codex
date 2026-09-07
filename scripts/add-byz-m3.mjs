/**
 * TRACK A, M3 — the Gothic War.
 *
 * Eight articles: the war, three of its engagements, the Ostrogothic Kingdom as an
 * anchor polity, and Narses, Totila and Teias.
 *
 * VITIGES IS DEFERRED. No image of him exists in any form — not a coin, not a later
 * depiction, nothing on Commons — so he cannot have an article yet. The Siege of
 * Rome names him as the Gothic commander without a link, which is the archive's
 * documented convention for a named commander awaiting an article, and the
 * deferral is recorded in QUEUE.md rather than left implicit.
 *
 * Continuity chain: this milestone lets Tricamarum be re-pointed away from
 * Manzikert, which was always a placeholder, onto the Siege of Rome where it
 * belongs. The chain now runs Ad Decimum -> Tricamarum -> Siege of Rome -> Taginae
 * -> Mons Lactarius.
 *
 * The through-line of the whole milestone is the contrast with M2: Africa took nine
 * months, Italy took nineteen years and ruined the country it was fought to save.
 */
import { readFileSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dataPath = path.join(__dirname, '../server/data/history.json')
const data = JSON.parse(readFileSync(dataPath, 'utf8'))
const S = (title, ...paragraphs) => ({ title, paragraphs })
const img = (f) => `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(f)}`

const romanSide = (leaders, display, note) => ({
  side: 'Eastern Roman army',
  factions: [{ name: 'Byzantine Empire', title: 'Byzantine Empire', type: 'location', slug: 'byzantine-empire' }],
  leaders,
  strength: { display, confidence: 'estimated', note }
})
const gothSide = (leaders, display, note) => ({
  side: 'Ostrogothic army',
  factions: [{ name: 'Ostrogothic Kingdom', title: 'Ostrogothic Kingdom', type: 'location', slug: 'ostrogothic-kingdom' }],
  leaders,
  strength: { display, confidence: 'debated', note }
})

// ─── People ────────────────────────────────────────────────────────────────────

const narses = {
  id: 'narses', type: 'character', name: 'Narses',
  aliases: ['Narses the Eunuch'],
  born: 478, died: 573, deathAge: 'probably over 90',
  causeOfDeath: 'Died in Italy in extreme old age; the circumstances are not recorded.',
  restingPlace: 'Unknown',
  location: 'Italy',
  title: 'Praepositus sacri cubiculi and commander in Italy',
  roles: ['General', 'Court chamberlain'],
  image: img('Narses.jpg'),
  imageInfo: {
    caption: 'A later depiction of Narses, the court eunuch who finished the Gothic War — no contemporary likeness of him survives.',
    creator: 'Unknown; later depiction',
    date: 'later imagining, not contemporary',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Narses.jpg',
    note: 'Not a portrait from life. No contemporary image of Narses is known, and this is a later artist\'s conception. Public domain.'
  },
  summary: 'Narses was a court eunuch who took command in Italy in his seventies and won the Gothic War that Belisarius had been unable to finish.',
  overview: 'He is the least likely great commander of the sixth century: a palace official with no field career until an age when most men were long retired.',
  greatestFeats: [
    'Destroyed the Ostrogothic army and killed Totila at Taginae in 552',
    'Ended the Ostrogothic kingdom at Mons Lactarius',
    'Governed Italy for over a decade afterwards'
  ],
  birth: { date: 'c. 478', place: { name: 'Persarmenia' } },
  death: { date: 'c. 573', place: { name: 'Italy' }, circumstance: 'Died in Italy at a very great age, having outlived Justinian by some years.' },
  quickFacts: { realm: 'Eastern Roman Empire', culture: 'Armenian', knownFor: 'Winning the Gothic War' },
  contentSections: [
    S('Overview',
      'Narses was a eunuch of the imperial household who rose to be one of the most powerful men at Justinian\'s court, and then, in his seventies, became the general who finally won the Gothic War.',
      'He had no significant field career before that. He was a palace official, a treasurer and a chamberlain, and his military reputation rests almost entirely on the last decade of a very long life.',
      'He won the war Belisarius could not finish, and he did it by being given what Belisarius never was: enough men and enough money.'),
    S('Birth and early life',
      'He was born around 478, probably in Persarmenia, and came to Constantinople as a eunuch of the imperial household — a career path that could lead to enormous influence and was closed to no one by birth.',
      'He rose through the treasury to become praepositus sacri cubiculi, the head of the emperor\'s household, one of the great offices of the court.',
      'His first recorded moment of consequence is the Nika riots of 532, where he reportedly went among the factions with a bag of gold and bought off enough of the Blues to split the rising.'),
    S('Character and Personality',
      'Procopius, who disliked most people, treats him with a certain wary respect: careful, patient, generous with money and unusually good at managing the barbarian contingents that made up much of his army.',
      'His handling of those troops is the trait everyone notes. The Lombard and Herul mercenaries he took to Italy were difficult, and he managed them by paying them properly and sending them home before they became a problem — a competence in logistics and personnel rather than in heroics.',
      'He was also devout in a way the sources emphasise, attributing his victories to prayer and to the Virgin, and he built and endowed churches in Italy. Whether that piety is his or his biographers\' is not fully separable.'),
    S('Command in Italy',
      'He was sent to Italy in 551 with an army far larger and better funded than anything Belisarius had commanded there, and with the authority to spend.',
      'At Taginae in 552 he destroyed the Gothic army and Totila was killed. At Mons Lactarius shortly afterwards he destroyed its successor and Teias with it, ending the Ostrogothic kingdom.',
      'He then spent years mopping up Frankish and Alemannic invasions and Gothic garrisons, and governed Italy into the 560s.'),
    S('The Lombard story',
      'A persistent tradition holds that Narses, dismissed and insulted by Justin II\'s empress, invited the Lombards into Italy out of spite — and they duly invaded in 568.',
      'The story is late and hostile, and it does the convenient work of blaming a foreigner and a eunuch for a disaster with much deeper causes.',
      'What is not in doubt is that Italy after eighteen years of war was too exhausted and too thinly garrisoned to resist, and that the Gothic War itself is the better explanation for what happened in 568.'),
    S('Legacy',
      'He won the war, and the manner of it is instructive: what changed between Belisarius\'s failure and Narses\'s success was not generalship but resources.',
      'His victory was also hollow. Italy was devastated, Rome was a shell, and within fifteen years the Lombards had taken much of what he had reconquered.',
      'He remains one of the most unusual figures of the period — a household eunuch who ended a Gothic kingdom in his mid-seventies — and the sources have never quite known what to do with him.')
  ],
  timeline: [
    { date: 'c. 478', title: 'Born', description: 'Born in Persarmenia; came to Constantinople as a eunuch of the imperial household.' },
    { date: '532', title: 'Nika riots', description: 'Reportedly splits the rising by buying off the Blue faction with imperial gold.' },
    { date: '538–539', title: 'First command in Italy', description: 'Sent to Italy alongside Belisarius; their disagreement contributes to the fall of Milan and he is recalled.' },
    { date: '551', title: 'Given command', description: 'Appointed to command in Italy with a large, properly funded army.' },
    { date: '552', title: 'Taginae', description: 'Destroys the Gothic army; Totila is killed.', links: [{ title: 'Battle of Taginae', type: 'event', slug: 'battle-of-taginae' }] },
    { date: '552–553', title: 'Mons Lactarius', description: 'Destroys the last Gothic army and Teias with it, ending the kingdom.', links: [{ title: 'Battle of Mons Lactarius', type: 'event', slug: 'battle-of-mons-lactarius' }] },
    { date: '554–560s', title: 'Governs Italy', description: 'Clears Frankish and Gothic remnants and administers the reconquered province.' },
    { date: 'c. 573', title: 'Died', description: 'Died in Italy at a very great age, some years after Justinian.' }
  ],
  relatedEntries: {
    people: [
      { title: 'Totila', type: 'person', slug: 'totila', label: 'The king he defeated and killed' },
      { title: 'Belisarius', type: 'person', slug: 'belisarius', label: 'His predecessor in the Italian command' },
      { title: 'Justinian I', type: 'person', slug: 'justinian-i', label: 'The emperor he served' }
    ],
    events: [
      { title: 'Gothic War', type: 'event', slug: 'gothic-war', label: 'The war he ended' },
      { title: 'Battle of Taginae', type: 'event', slug: 'battle-of-taginae', label: 'His decisive victory' },
      { title: 'Battle of Mons Lactarius', type: 'event', slug: 'battle-of-mons-lactarius', label: 'Where the kingdom ended' }
    ],
    locations: [{ title: 'Byzantine Empire', type: 'location', slug: 'byzantine-empire', label: 'The empire he served' }]
  },
  sources: [
    { title: 'Procopius, History of the Wars', url: 'https://www.gutenberg.org/ebooks/16764', type: 'primary source' },
    { title: 'Narses', url: 'https://en.wikipedia.org/wiki/Narses', type: 'encyclopedia' },
    { title: 'British Museum — late antique collections', url: 'https://www.britishmuseum.org/collection', type: 'museum collection', institution: 'British Museum' }
  ]
}

const totila = {
  id: 'totila', type: 'character', name: 'Totila',
  aliases: ['Baduila'],
  born: 510, died: 552, deathAge: 'unknown',
  causeOfDeath: 'Mortally wounded in the rout after Taginae in 552.',
  restingPlace: 'Caprae, where he died',
  location: 'Italy',
  title: 'King of the Ostrogoths',
  roles: ['King', 'Commander'],
  image: img('Francesco Salviati - Portrait of Totila, c. 1549.jpg'),
  imageInfo: {
    caption: 'A Renaissance imagining of Totila by Francesco Salviati, painted around 1549 — nearly a thousand years after his death.',
    creator: 'Francesco Salviati',
    date: 'c. 1549',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Francesco_Salviati_-_Portrait_of_Totila,_c._1549.jpg',
    note: 'Not a portrait and not evidence for his appearance. No contemporary likeness of Totila exists; his own coins carry the name Baduila but conventional imagery. This is a sixteenth-century invention and is used because nothing closer survives. Public domain.'
  },
  summary: 'Totila was king of the Ostrogoths from 541 to 552 and very nearly reversed the Byzantine conquest of Italy before being killed at Taginae.',
  overview: 'He inherited a beaten kingdom and won back most of Italy, and he is one of the few opponents Procopius openly admires.',
  greatestFeats: [
    'Recovered most of Italy from the Byzantines after 541',
    'Took Rome twice',
    'Maintained a reputation for treating civilians and prisoners well'
  ],
  birth: { date: 'c. 510', place: { name: 'Italy' } },
  death: { date: '552', place: { name: 'Caprae, in Italy' }, circumstance: 'Wounded in the flight from Taginae and died shortly afterwards.' },
  quickFacts: { realm: 'Ostrogothic Kingdom', dynasty: 'Amal connection claimed', culture: 'Ostrogothic', knownFor: 'Nearly winning back Italy' },
  isRuler: true,
  succession: {
    office: 'King of the Ostrogoths',
    predecessor: { displayName: 'Eraric', note: 'A short-lived king murdered in 541 after negotiating with the Byzantines. No article yet in this archive.' },
    successor: { personSlug: 'teias', displayName: 'Teias', note: 'Elected after Taginae and the last Ostrogothic king.' }
  },
  contentSections: [
    S('Overview',
      'Totila became king of the Ostrogoths in 541, when the kingdom had already lost Ravenna and looked finished, and within a few years he had taken back most of Italy.',
      'He is the most capable opponent the Byzantines faced in this war, and the one who came closest to reversing its outcome entirely.',
      'His own coins call him Baduila; Totila is the name Procopius uses, and it is the one that stuck.'),
    S('Birth and early life',
      'Little is known of his early life beyond that he was a nephew of Ildibad, an earlier Gothic king, and was commanding at Treviso when he was offered the crown.',
      'He was young — probably around thirty — and was chosen in a moment of crisis, after Eraric had been murdered for negotiating a surrender to the empire.',
      'He inherited perhaps a few thousand fighting men and a handful of northern cities.'),
    S('Character and Personality',
      'Procopius, who wrote for the other side, treats Totila with a respect he extends to almost no one else, and repeatedly contrasts his conduct with that of the Byzantine commanders.',
      'The recurring theme is his treatment of civilians and prisoners. He is described restraining his troops from plunder and violence, releasing captives, and dealing generously with cities that surrendered — behaviour presented as both principled and shrewd, since it made surrender to him attractive.',
      'He also had a taste for the theatrical. Before Taginae he is said to have ridden between the armies in gilded armour, wheeling his horse and throwing his lance and catching it, in a display that was partly bravado and partly a way of buying time for reinforcements that never arrived in useful numbers.'),
    S('The recovery of Italy',
      'From 541 he moved fast and avoided sieges where he could, taking cities by negotiation and beating the scattered Byzantine field forces in detail.',
      'He took Naples in 543, and Rome itself in 546 — and, finding the city indefensible, briefly considered destroying it, before letters from Belisarius persuaded him not to.',
      'Rome changed hands repeatedly in these years, and by 550 Totila held most of Italy along with Sicily, Sardinia and Corsica. He repeatedly offered peace on terms and Justinian repeatedly refused.'),
    S('Taginae and death',
      'Justinian finally committed the resources the war had always needed and sent Narses in 551 with a large, properly paid army.',
      'They met at Taginae in 552. Narses drew up a crescent of dismounted troops with massed archers on the wings, and the Gothic cavalry charge was shot to pieces before it reached the line.',
      'Totila was wounded in the rout and died shortly afterwards at Caprae. With him went the only real chance the Ostrogothic kingdom had.'),
    S('Legacy',
      'He is the reason the Gothic War lasted nineteen years instead of five, and the reason Italy was fought over so comprehensively that the reconquest ruined what it recovered.',
      'His reputation is unusual in resting on an enemy\'s account. Procopius had no reason to flatter him, which is exactly why the praise carries weight.',
      'He also fixed the pattern the Byzantines eventually learned: a war fought on the cheap against a competent opponent is more expensive than one fought properly.')
  ],
  timeline: [
    { date: 'c. 510', title: 'Born', description: 'Born in Italy; a nephew of the Gothic king Ildibad.' },
    { date: '541', title: 'Elected king', description: 'Chosen after the murder of Eraric, inheriting a kingdom reduced to a few northern cities.' },
    { date: '543', title: 'Takes Naples', description: 'Captures Naples and is noted for the restraint with which he treats the population.' },
    { date: '546', title: 'Takes Rome', description: 'Captures Rome, considers destroying it, and is talked out of it.' },
    { date: '550', title: 'Height of the recovery', description: 'Holds most of Italy with Sicily, Sardinia and Corsica; offers peace and is refused.' },
    { date: '551', title: 'Narses is sent', description: 'Justinian commits a large, properly funded army to Italy under Narses.' },
    { date: '552', title: 'Killed at Taginae', description: 'His army is destroyed and he is mortally wounded in the rout.', links: [{ title: 'Battle of Taginae', type: 'event', slug: 'battle-of-taginae' }] }
  ],
  relatedEntries: {
    people: [
      { title: 'Narses', type: 'person', slug: 'narses', label: 'The general who defeated and killed him' },
      { title: 'Teias', type: 'person', slug: 'teias', label: 'His successor, and the last Gothic king' },
      { title: 'Belisarius', type: 'person', slug: 'belisarius', label: 'His opponent in the middle years of the war' }
    ],
    events: [
      { title: 'Gothic War', type: 'event', slug: 'gothic-war', label: 'The war he nearly won' },
      { title: 'Battle of Taginae', type: 'event', slug: 'battle-of-taginae', label: 'Where he was killed' }
    ],
    locations: [{ title: 'Ostrogothic Kingdom', type: 'location', slug: 'ostrogothic-kingdom', label: 'The realm he restored and lost' }]
  },
  sources: [
    { title: 'Procopius, History of the Wars', url: 'https://www.gutenberg.org/ebooks/16764', type: 'primary source' },
    { title: 'Totila', url: 'https://en.wikipedia.org/wiki/Totila', type: 'encyclopedia' },
    { title: 'Portrait of Totila by Francesco Salviati', url: 'https://commons.wikimedia.org/wiki/File:Francesco_Salviati_-_Portrait_of_Totila,_c._1549.jpg', type: 'image source', institution: 'Wikimedia Commons' }
  ]
}

const teias = {
  id: 'teias', type: 'character', name: 'Teias',
  aliases: ['Teia', 'Teja'],
  born: 510, died: 553, deathAge: 'unknown',
  causeOfDeath: 'Killed fighting on foot at Mons Lactarius.',
  restingPlace: 'Unknown',
  location: 'Italy',
  title: 'King of the Ostrogoths',
  roles: ['King', 'Commander'],
  image: img('Teias.jpg'),
  imageInfo: {
    caption: 'A later depiction of Teias, the last Ostrogothic king — no contemporary image of him survives.',
    creator: 'Unknown; later depiction',
    date: 'later imagining, not contemporary',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Teias.jpg',
    note: 'Not a portrait from life and not evidence for his appearance. Teias reigned for months and left no coinage or image; this is a later artist\'s conception. Public domain.'
  },
  summary: 'Teias was the last king of the Ostrogoths, elected after Totila\'s death and killed within months at Mons Lactarius.',
  overview: 'His reign was a fighting retreat, and his death is the moment the Ostrogothic kingdom ends.',
  greatestFeats: [
    'Held the remnant of the Gothic army together after Taginae',
    'Fought a last stand on the slopes of Vesuvius that Procopius describes at length'
  ],
  birth: { date: 'c. 510', place: { name: 'Italy' } },
  death: { date: '553', place: { name: 'Mons Lactarius, near Vesuvius' }, circumstance: 'Killed fighting on foot in the battle that ended his kingdom.' },
  quickFacts: { realm: 'Ostrogothic Kingdom', culture: 'Ostrogothic', knownFor: 'Being the last Ostrogothic king' },
  isRuler: true,
  succession: {
    office: 'King of the Ostrogoths',
    predecessor: { personSlug: 'totila', displayName: 'Totila', note: 'Killed at Taginae in 552.' },
    successor: { status: 'office-ended', displayName: 'None — the kingdom ended', note: 'The Ostrogothic kingdom was extinguished in 553; the surviving Goths negotiated to leave Italy and no successor was chosen.' }
  },
  contentSections: [
    S('Overview',
      'Teias was elected king of the Ostrogoths after Totila was killed at Taginae in 552, and he is the last man to hold the title.',
      'His reign lasted months and consisted almost entirely of retreat, ending on the slopes of Vesuvius at Mons Lactarius.',
      'He is known essentially through Procopius\'s account of how he died, which is among the most deliberately heroic passages in the whole of the Wars.'),
    S('Birth and early life',
      'Almost nothing is recorded of him before 552. He was one of Totila\'s commanders and evidently a senior one, since he was chosen king immediately after the defeat.',
      'He inherited a kingdom that had lost its army, its treasury and most of its cities within a single afternoon.',
      'What he had left was a body of surviving warriors and the Gothic treasure at Pavia.'),
    S('Character and Personality',
      'The sources give him one scene, and it is a set piece. Procopius describes him at Mons Lactarius fighting on foot at the front of the line, holding his shield until it was so full of embedded spears that he called for another, and being killed in the moment of exchanging it.',
      'It is a magnificent passage and it should be read as literature as much as reportage. Procopius is writing the death of a kingdom and reaching for Homer to do it.',
      'What can reasonably be taken from it is that Teias fought and died personally in the front rank, and that his own side and his enemies both remembered it — the Goths who surrendered afterwards did so on terms, not as a rout.'),
    S('Mons Lactarius',
      'After Taginae he withdrew south, and Narses brought him to battle near Mount Vesuvius, at a place the sources call Mons Lactarius.',
      'The Goths were cut off from supply and fought a desperate two-day battle on the slopes. Teias was killed on the first day.',
      'The survivors negotiated rather than surrendering unconditionally: they were allowed to leave Italy and depart with their property, on the condition that they never again make war on the empire.'),
    S('The end of the kingdom',
      'With Teias dead and the terms agreed, the Ostrogothic kingdom simply stopped existing, sixty years after Theodoric had founded it.',
      'Gothic garrisons held out in a few places for several more years, and Frankish and Alemannic invasions kept Narses occupied, but there was no longer a Gothic state.',
      'Italy passed under direct imperial administration for fifteen years, until the Lombards arrived in 568 and took much of it from an exhausted province.'),
    S('Legacy',
      'He is remembered for how he died rather than for anything he did as king, which is a fair reflection of a reign that lasted months and offered no other choices.',
      'His last stand became a set piece of late antique historiography, and later German romantic writing made a great deal of it.',
      'For the archive he marks the end point of Justinian\'s Italian war: the moment the reconquest succeeded, on a country it had spent nineteen years destroying.')
  ],
  timeline: [
    { date: 'c. 510', title: 'Born', description: 'Born in Italy; a commander under Totila, otherwise unrecorded.' },
    { date: '552', title: 'Elected king', description: 'Chosen after Totila\'s death at Taginae, inheriting a kingdom without an army.', links: [{ title: 'Battle of Taginae', type: 'event', slug: 'battle-of-taginae' }] },
    { date: '552', title: 'Withdraws south', description: 'Falls back toward Campania with the surviving Gothic forces and the royal treasure.' },
    { date: '553', title: 'Mons Lactarius', description: 'Brought to battle near Vesuvius and killed fighting on foot in the front rank.', links: [{ title: 'Battle of Mons Lactarius', type: 'event', slug: 'battle-of-mons-lactarius' }] },
    { date: '553', title: 'The Goths negotiate terms', description: 'The survivors agree to leave Italy with their property rather than surrender unconditionally.' },
    { date: '553', title: 'The kingdom ends', description: 'The Ostrogothic kingdom ceases to exist, sixty years after Theodoric founded it.' }
  ],
  relatedEntries: {
    people: [
      { title: 'Totila', type: 'person', slug: 'totila', label: 'His predecessor, killed at Taginae' },
      { title: 'Narses', type: 'person', slug: 'narses', label: 'The general who destroyed his army' }
    ],
    events: [
      { title: 'Battle of Mons Lactarius', type: 'event', slug: 'battle-of-mons-lactarius', label: 'Where he was killed' },
      { title: 'Gothic War', type: 'event', slug: 'gothic-war', label: 'The war that ended with him' }
    ],
    locations: [{ title: 'Ostrogothic Kingdom', type: 'location', slug: 'ostrogothic-kingdom', label: 'The realm that died with him' }]
  },
  sources: [
    { title: 'Procopius, History of the Wars', url: 'https://www.gutenberg.org/ebooks/16764', type: 'primary source' },
    { title: 'Teia', url: 'https://en.wikipedia.org/wiki/Teia', type: 'encyclopedia' },
    { title: 'British Museum — late antique collections', url: 'https://www.britishmuseum.org/collection', type: 'museum collection', institution: 'British Museum' }
  ]
}

// ─── Polity ────────────────────────────────────────────────────────────────────

const ostrogothicKingdom = {
  id: 'ostrogothic-kingdom', type: 'location', locationType: 'Kingdom',
  name: 'Ostrogothic Kingdom', aliases: ['Kingdom of the Ostrogoths', 'Gothic Italy'],
  kingdom: 'Ostrogothic Kingdom', year: 493,
  image: img('Map of The Ostrogothic Kingdom in 523 AD.png'),
  imageInfo: {
    caption: 'The Ostrogothic kingdom at its greatest extent in 523, holding Italy with Dalmatia, Provence and lands beyond the Alps.',
    creator: 'Wikimedia Commons contributor',
    date: 'modern map of the kingdom in 523',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Map_of_The_Ostrogothic_Kingdom_in_523_AD.png',
    note: 'A modern map rather than a medieval one, used because it shows the kingdom\'s extent at its height more clearly than any surviving source. Licensed CC BY-SA.'
  },
  summary: 'The Ostrogothic Kingdom ruled Italy from 493 to 553, preserving Roman administration under Gothic kings until Justinian\'s armies destroyed it.',
  overview: 'Under Theodoric it was the most successful of the barbarian successor states. Sixty years later it had been fought out of existence, and Italy with it.',
  knownFor: [
    'Theodoric the Great ruled Italy for thirty-three years keeping Roman law and administration intact.',
    'Ravenna as its capital, where its churches and mosaics survive.',
    'Arian kings ruling a Catholic population, without systematic persecution.',
    'Destroyed in the Gothic War of 535–554, which ruined Italy in the process.'
  ],
  contentSections: [
    S('Overview',
      'The Ostrogothic Kingdom held Italy from 493 until 553, founded by Theodoric the Great after he killed Odoacer and took Ravenna.',
      'It was in many ways the most successful of the successor states. Roman law, the Senate, the civil administration and the consulship all continued, with a Gothic army and a Gothic king above them.',
      'It ended in nineteen years of war with Justinian\'s empire, which reconquered Italy and in doing so destroyed the thing worth reconquering.'),
    S('Theodoric and the settlement',
      'Theodoric entered Italy in 489 on the eastern emperor\'s commission, defeated Odoacer over four years, and killed him personally at a banquet in 493.',
      'What followed was a deliberate division of labour. The Goths were the army and held land assignments; the Romans ran the administration, the courts and the cities, and Roman law continued to apply to them.',
      'Theodoric ruled thirty-three years from Ravenna, corresponded with Constantinople as a legitimate authority, and left the buildings and mosaics that are the kingdom\'s most visible survival.'),
    S('Religion and the Roman elite',
      'The Goths were Arian Christians and the Italian population Catholic, and for most of Theodoric\'s reign that difference was managed rather than fought over.',
      'It soured at the end. Suspicion of Roman senatorial contacts with Constantinople led to the execution of Boethius around 524 — a philosopher whose Consolation of Philosophy, written in prison awaiting death, became one of the most read books of the Middle Ages.',
      'That episode did lasting damage to the kingdom\'s standing with the Roman elite whose cooperation it depended on.'),
    S('The succession crisis',
      'Theodoric died in 526 leaving a ten-year-old grandson, Athalaric, with his daughter Amalasuintha as regent — an educated, Romanised woman who governed capably and was resented for it.',
      'Athalaric died in 534. Amalasuintha took her cousin Theodahad as co-ruler and he had her imprisoned and murdered in 535.',
      'Justinian had been in correspondence with Amalasuintha and used her murder as his justification for war. Whether he wanted the pretext or merely accepted it is a question the sources cannot settle.'),
    S('Major rulers',
      'Theodoric the Great (493–526) is the kingdom in every meaningful sense: he made it, defined its settlement with the Roman population, and left it at its height.',
      'Athalaric (526–534) reigned as a child under Amalasuintha\'s regency; Theodahad (534–536) murdered her, lost Sicily and Naples, and was killed by his own side for incompetence.',
      'Vitiges (536–540) besieged Belisarius in Rome for a year and eventually surrendered at Ravenna. After a brief interval, Totila (541–552) recovered most of Italy before being killed at Taginae, and Teias (552–553) was the last king.'),
    S('Government, society and economy',
      'The kingdom ran on inherited Roman machinery: the praetorian prefecture, the tax system, the city councils and the courts continued much as before.',
      'Cassiodorus, who served as Theodoric\'s minister, left a collection of official letters that is the single best window into how the administration actually worked.',
      'The Goths were a minority — an army and a landholding class rather than a settling population — and the distance between them and the Romans, in law, religion and language, was never closed.'),
    S('The Gothic War and the end',
      'Justinian\'s forces took Sicily in 535 and Belisarius entered Rome in 536 and Ravenna in 540, and the kingdom looked finished.',
      'It was not. Totila recovered nearly all of Italy in the 540s, and the war ran on until Narses destroyed the Gothic army at Taginae in 552 and Teias at Mons Lactarius the following year.',
      'The surviving Goths were permitted to leave Italy on terms. The kingdom simply ended, and the Italy that remained was so exhausted that the Lombards took much of it in 568 with comparatively little difficulty.'),
    S('Legacy',
      'Its lasting monuments are in Ravenna — the mausoleum of Theodoric, the churches and the mosaics — and in the books that came out of it, above all Boethius and Cassiodorus.',
      'Its political lesson is bleaker. The most successful attempt to run a post-Roman state on Roman lines was destroyed not by barbarian rivals but by the Roman empire itself.',
      'The reconquest that ended it is the clearest case in this archive of a war that achieved its objective and lost the thing it was fought for.')
  ],
  timeline: [
    { date: '489', title: 'Theodoric enters Italy', description: 'Theodoric crosses into Italy on the eastern emperor\'s commission to remove Odoacer.' },
    { date: '493', title: 'Kingdom founded', description: 'Theodoric kills Odoacer at Ravenna and takes Italy.' },
    { date: 'c. 524', title: 'Execution of Boethius', description: 'The philosopher is executed on suspicion of treasonable contact with Constantinople.' },
    { date: '526', title: 'Death of Theodoric', description: 'Theodoric dies leaving a child heir and a regency.' },
    { date: '534', title: 'Athalaric dies', description: 'The boy king dies; Amalasuintha takes Theodahad as co-ruler.' },
    { date: '535', title: 'Murder of Amalasuintha', description: 'Theodahad has her killed, giving Justinian his justification for war.' },
    { date: '536', title: 'Belisarius takes Rome', description: 'Byzantine forces enter Rome; the Gothic position in the south collapses.', links: [{ title: 'Gothic War', type: 'event', slug: 'gothic-war' }] },
    { date: '537–538', title: 'The siege of Rome', description: 'Vitiges besieges Belisarius in Rome for a year and nine days and fails.', links: [{ title: 'Siege of Rome', type: 'event', slug: 'siege-of-rome-537' }] },
    { date: '540', title: 'Ravenna falls', description: 'Vitiges surrenders the capital; the kingdom appears finished.' },
    { date: '541–550', title: 'Totila\'s recovery', description: 'Totila retakes most of Italy, including Rome twice, and offers peace repeatedly.' },
    { date: '552', title: 'Taginae', description: 'Narses destroys the Gothic army and Totila is killed.', links: [{ title: 'Battle of Taginae', type: 'event', slug: 'battle-of-taginae' }] },
    { date: '553', title: 'The kingdom ends', description: 'Teias is killed at Mons Lactarius and the surviving Goths leave Italy on terms.' }
  ],
  relatedEntries: {
    people: [
      { title: 'Totila', type: 'person', slug: 'totila', label: 'The king who nearly saved it' },
      { title: 'Teias', type: 'person', slug: 'teias', label: 'Its last king' },
      { title: 'Belisarius', type: 'person', slug: 'belisarius', label: 'Who took Rome and Ravenna from it' }
    ],
    events: [
      { title: 'Gothic War', type: 'event', slug: 'gothic-war', label: 'The war that destroyed it' },
      { title: 'Battle of Taginae', type: 'event', slug: 'battle-of-taginae', label: 'Where its army was destroyed' }
    ],
    locations: [
      { title: 'Byzantine Empire', type: 'location', slug: 'byzantine-empire', label: 'The empire that conquered it' },
      { title: 'Rome', type: 'location', slug: 'rome', label: 'Fought over repeatedly through the war' }
    ]
  },
  sources: [
    { title: 'Procopius, History of the Wars', url: 'https://www.gutenberg.org/ebooks/16764', type: 'primary source' },
    { title: 'Ostrogothic Kingdom', url: 'https://en.wikipedia.org/wiki/Ostrogothic_Kingdom', type: 'encyclopedia' },
    { title: 'Early Christian monuments of Ravenna', url: 'https://whc.unesco.org/en/list/788/', type: 'institution', institution: 'UNESCO World Heritage Centre' }
  ]
}

// ─── Events ────────────────────────────────────────────────────────────────────

const gothicWar = {
  id: 'gothic-war', type: 'event', eventType: 'War', name: 'Gothic War',
  year: 535, location: 'Italy', eventLocation: 'Italy, Sicily and Dalmatia',
  conflict: 'Justinian\'s wars of reconquest',
  image: img('Erster und Zweiter Gotenkrieg.png'),
  imageInfo: {
    caption: 'The Gothic War in Italy, showing the Byzantine advance of 535–540 and the Gothic recovery under Totila that followed.',
    creator: 'Wikimedia Commons contributor',
    date: 'modern map of the war of 535–554',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Erster_und_Zweiter_Gotenkrieg.png',
    note: 'A modern map, used because it shows both phases of the war — the rapid conquest and the long reversal — which is the shape of the whole conflict. Licensed CC BY-SA.'
  },
  summary: 'The Gothic War of 535–554 was Justinian\'s attempt to reconquer Italy. It took nineteen years, destroyed the Ostrogothic kingdom, and ruined Italy in the process.',
  details: 'Africa had fallen in nine months, so Italy was expected to be straightforward. It was the longest and most destructive of the reconquest wars.',
  outcome: 'Byzantine victory; the Ostrogothic kingdom abolished and Italy annexed — an exhausted province lost largely to the Lombards within fifteen years.',
  background: 'Theodahad\'s murder of Amalasuintha in 535 gave Justinian a justification for war, following his success against the Vandals two years earlier.',
  battle: 'Belisarius took Sicily, Naples, Rome and Ravenna by 540. Totila then recovered nearly all of Italy before Narses destroyed the Gothic army at Taginae in 552.',
  aftermath: 'Italy was depopulated, Rome reduced to a fraction of its size, and the Senate ceased to function. The Lombards invaded in 568 and took much of the peninsula.',
  contentSections: [
    S('Overview',
      'The Gothic War was Justinian\'s attempt to take Italy back from the Ostrogoths, and it is the war that broke the reconquest.',
      'It was expected to be quick. The Vandal kingdom had fallen in nine months in 533–534, and Italy was invaded in the same confident spirit two years later.',
      'It lasted nineteen years, consumed men and money the empire could not spare, and left Italy in a condition from which it did not recover for centuries.'),
    S('Background',
      'Theodoric\'s death in 526 left the Ostrogothic kingdom with a child king and a regency, and the regent Amalasuintha was murdered by her co-ruler Theodahad in 535.',
      'Justinian had been in correspondence with her, and her death gave him a justification. Whether he engineered the opportunity or simply seized it is not recoverable from the sources.',
      'The African campaign had made the enterprise look cheap, and the Gothic kingdom was internally divided and led by a man his own nobles despised.'),
    S('The first phase, 535–540',
      'Belisarius took Sicily in 535 with almost no fighting, crossed to the mainland, and captured Naples and then Rome in 536.',
      'Vitiges besieged him in Rome for a year and nine days and failed to take it, and the Gothic position unravelled from there.',
      'In 540 Belisarius entered Ravenna. Offered the western empire by the Goths as a way to end the war, he appeared to accept, took the city, and handed it to Justinian. The war looked won.'),
    S('The second phase, 541–552',
      'It was not. Totila became king in 541 and, with a fraction of the forces the Byzantines had, took back nearly all of Italy within a decade.',
      'Rome changed hands four times. Belisarius returned in 544 to a war that was now being fought without adequate men or money, and achieved little.',
      'Totila repeatedly offered terms; Justinian repeatedly refused. The war ground on because neither side could finish it and one side would not stop.'),
    S('The end, 551–554',
      'In 551 Justinian finally sent an army large enough for the task, under Narses, with the money to pay it.',
      'Narses destroyed the Gothic army at Taginae in 552 and killed Totila; he destroyed its successor and Teias at Mons Lactarius the following year.',
      'Gothic garrisons and Frankish invasions occupied several more years, and the Pragmatic Sanction of 554 formally reorganised Italy as an imperial province.'),
    S('Consequences',
      'Italy was devastated. Rome had changed hands repeatedly and was reduced to a fraction of its population; the aqueducts were cut and never fully restored; the Senate disappears from the record within a generation.',
      'The empire had spent nineteen years and enormous resources at the same time as plague and a permanent Persian frontier, and the reconquest was never consolidated.',
      'In 568 the Lombards invaded and took much of the peninsula against little resistance, so the Italy Justinian won was largely lost within fifteen years of winning it.'),
    S('Significance',
      'It is the counter-example to the Vandalic War, and the two should be read together: the same emperor, the same strategy and, in the first phase, the same general, with opposite results.',
      'The difference was the opponent and the commitment. Africa faced a divided kingdom with an unpopular king; Italy produced Totila, and the empire refused to fund the war properly until the sixteenth year of it.',
      'It is the clearest case in this archive of a war that achieved every stated objective and destroyed the thing it was fought to recover.')
  ],
  participants: [
    romanSide(
      [{ name: 'Belisarius', title: 'Belisarius', type: 'person', slug: 'belisarius' }, { name: 'Narses', title: 'Narses', type: 'person', slug: 'narses' }],
      'c. 7,500 initially; c. 25,000–35,000 under Narses in 552',
      'Belisarius invaded with a very small force and was starved of reinforcement for most of the war; Narses was finally given an army adequate to the task.'
    ),
    gothSide(
      [{ name: 'Totila', title: 'Totila', type: 'person', slug: 'totila' }, { name: 'Teias', title: 'Teias', type: 'person', slug: 'teias' }],
      'Unknown; probably tens of thousands at its height',
      'No reliable figures survive for Gothic strength at any point in the war, and Procopius\'s numbers are not consistent.'
    )
  ],
  relatedEntries: {
    people: [
      { title: 'Belisarius', type: 'person', slug: 'belisarius', label: 'Commanded the first phase' },
      { title: 'Narses', type: 'person', slug: 'narses', label: 'Commanded the final phase' },
      { title: 'Totila', type: 'person', slug: 'totila', label: 'Nearly reversed the conquest' },
      { title: 'Justinian I', type: 'person', slug: 'justinian-i', label: 'Ordered and prolonged the war' }
    ],
    events: [
      { title: 'Siege of Rome', type: 'event', slug: 'siege-of-rome-537', label: 'Its most famous defensive action' },
      { title: 'Battle of Taginae', type: 'event', slug: 'battle-of-taginae', label: 'The battle that decided it' },
      { title: 'Vandalic War', type: 'event', slug: 'vandalic-war', label: 'The campaign that made it look easy' }
    ],
    locations: [
      { title: 'Ostrogothic Kingdom', type: 'location', slug: 'ostrogothic-kingdom', label: 'The realm destroyed' },
      { title: 'Rome', type: 'location', slug: 'rome', label: 'Fought over four times' }
    ]
  },
  sources: [
    { title: 'Procopius, History of the Wars', url: 'https://www.gutenberg.org/ebooks/16764', type: 'primary source' },
    { title: 'Gothic War (535–554)', url: 'https://en.wikipedia.org/wiki/Gothic_War_(535%E2%80%93554)', type: 'encyclopedia' },
    { title: 'Early Christian monuments of Ravenna', url: 'https://whc.unesco.org/en/list/788/', type: 'institution', institution: 'UNESCO World Heritage Centre' }
  ]
}

const siegeOfRome = {
  id: 'siege-of-rome-537', type: 'event', eventType: 'Siege', name: 'Siege of Rome',
  year: 537, location: 'Rome', eventLocation: 'Rome, behind the Aurelian Walls',
  conflict: 'Gothic War',
  image: img('Aurelian Walls Rome 2011 1.jpg'),
  imageInfo: {
    caption: 'The Aurelian Walls of Rome, the circuit Belisarius repaired and held against the Gothic army for a year and nine days.',
    creator: 'Photograph via Wikimedia Commons',
    date: '3rd century (walls); photograph 2011',
    source: 'Rome / Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Aurelian_Walls_Rome_2011_1.jpg',
    note: 'The actual fortification of the siege, still standing. The walls were already some 250 years old in 537 and Belisarius had them repaired and ditched before the Goths arrived. Licensed CC BY-SA.'
  },
  summary: 'From March 537 to March 538 Belisarius held Rome against a much larger Gothic army under Vitiges, for a year and nine days.',
  details: 'It is one of the great defensive operations of late antiquity, and the siege in which Rome\'s aqueducts were cut — ending the ancient city\'s water supply for good.',
  outcome: 'Byzantine victory; the Goths withdrew after a year, having failed to take the city.',
  background: 'Belisarius entered Rome in December 536. Vitiges marched south from Ravenna with a far larger army to retake it.',
  battle: 'The Goths assaulted the walls, cut the aqueducts and blockaded the city. Belisarius held the circuit with a small garrison and the citizens, and counter-attacked repeatedly.',
  aftermath: 'Vitiges withdrew in March 538 with his army badly reduced. Rome had been held, but the city was permanently damaged.',
  contentSections: [
    S('Overview',
      'Belisarius entered Rome in December 536 with a force of a few thousand, and in March 537 the Gothic army arrived to take it back.',
      'He held the city for a year and nine days against far superior numbers, and the siege is among the most impressive defensive operations of the period.',
      'It is also the moment Rome as an ancient city effectively ends: the aqueducts were cut and never properly restored, and the population that had depended on them left.'),
    S('Background',
      'Rome had opened its gates to Belisarius without a fight, and the Gothic garrison had withdrawn north.',
      'Vitiges came south from Ravenna with an army Procopius numbers implausibly high but which was certainly many times the size of the garrison.',
      'Belisarius spent the interval repairing the Aurelian Walls, digging a ditch, and stockpiling grain — preparations that decided the siege before it began.'),
    S('The siege',
      'The Goths built camps around the northern and eastern approaches and assaulted the walls with towers and rams. The first great assault was beaten off with heavy losses.',
      'They cut all the aqueducts, which ended the city\'s water supply, closed the public baths and stopped the mills — Belisarius replaced the last with floating mills moored in the Tiber.',
      'The fighting included a defence of the mausoleum of Hadrian, where the garrison reportedly broke up the statues decorating it and threw the pieces down on the attackers. Belisarius counter-attacked constantly with small mounted sorties rather than waiting behind the walls.'),
    S('Aftermath',
      'The Gothic army wasted through the winter from disease, hunger and casualties, and withdrew in March 538 having achieved nothing.',
      'Belisarius had held, but Rome had not survived intact. The aqueducts stayed broken, and a city that had already shrunk enormously since the fourth century now lost most of what remained.',
      'The war moved north, and Rome would change hands four more times before it ended — each time with less of it left.'),
    S('Significance',
      'It is the defensive counterpart to Ad Decimum: a demonstration that a small professional force, well handled and well prepared, could hold against far greater numbers.',
      'It also shows the shape of the whole Italian war. Belisarius won, and won brilliantly, with resources that should not have been enough — and the empire took that as proof it need not send more.',
      'The cutting of the aqueducts is the detail that outlasts the campaign. The siege ended a system of urban life that had run for eight hundred years, and Rome did not have running water on that scale again for a millennium.')
  ],
  participants: [
    romanSide(
      [{ name: 'Belisarius', title: 'Belisarius', type: 'person', slug: 'belisarius' }],
      'c. 5,000 troops with the citizens',
      'A very small garrison for a circuit of nineteen kilometres; the civilian population was pressed into watch duty and repair work.'
    ),
    gothSide(
      [{ name: 'Vitiges' }],
      'Unknown; Procopius claims 150,000',
      'The chronicle figure is not credible. Modern estimates are far lower, in the tens of thousands, but no reliable number survives. Vitiges has no article in this archive yet — no image of him exists in any form — so he is named here without a link.'
    )
  ],
  battleContinuity: {
    label: 'Follow the war to the battle that decided it',
    battleSlug: 'battle-of-taginae',
    relationship: 'same-war',
    reason: 'Holding Rome in 538 did not end the war: Totila recovered nearly all of Italy in the following decade, and the conflict was only decided at Taginae in 552, where Narses destroyed the Gothic army and Totila was killed.'
  },
  relatedEntries: {
    people: [
      { title: 'Belisarius', type: 'person', slug: 'belisarius', label: 'Held the city' },
      { title: 'Justinian I', type: 'person', slug: 'justinian-i', label: 'The emperor whose war it was' }
    ],
    events: [
      { title: 'Gothic War', type: 'event', slug: 'gothic-war', label: 'The war it belongs to' },
      { title: 'Battle of Taginae', type: 'event', slug: 'battle-of-taginae', label: 'Where the war was finally decided' }
    ],
    locations: [
      { title: 'Rome', type: 'location', slug: 'rome', label: 'The city besieged' },
      { title: 'Ostrogothic Kingdom', type: 'location', slug: 'ostrogothic-kingdom', label: 'The besieging power' }
    ]
  },
  sources: [
    { title: 'Procopius, History of the Wars', url: 'https://www.gutenberg.org/ebooks/16764', type: 'primary source' },
    { title: 'Siege of Rome (537–538)', url: 'https://en.wikipedia.org/wiki/Siege_of_Rome_(537%E2%80%93538)', type: 'encyclopedia' },
    { title: 'Aurelian Walls', url: 'https://commons.wikimedia.org/wiki/File:Aurelian_Walls_Rome_2011_1.jpg', type: 'image source', institution: 'Wikimedia Commons' }
  ]
}

const taginae = {
  id: 'battle-of-taginae', type: 'event', eventType: 'Battle', name: 'Battle of Taginae',
  year: 552, location: 'Taginae, in the Apennines', eventLocation: 'Taginae, in the central Apennines',
  conflict: 'Gothic War',
  image: img('Battle of Taginae 552 AD, Narses against Totila.svg'),
  imageInfo: {
    caption: 'The deployment at Taginae: Narses\'s dismounted centre with massed archers curving forward on both wings, against the Gothic cavalry.',
    creator: 'Wikimedia Commons contributor',
    date: 'modern diagram of the battle of 552',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Battle_of_Taginae_552_AD,_Narses_against_Totila.svg',
    note: 'A modern reconstruction diagram, not a contemporary depiction. The battle is known from Procopius and any plan of it interprets his narrative. Licensed CC BY-SA.'
  },
  summary: 'At Taginae in 552, Narses destroyed the Ostrogothic army with massed archery and dismounted infantry, and Totila was killed in the rout.',
  details: 'It is a textbook case of a commander choosing the ground and the formation, and of a cavalry charge delivered into exactly what it should have avoided.',
  outcome: 'Decisive Byzantine victory; Totila killed and the Gothic field army destroyed.',
  background: 'Narses came south from Ravenna with a large army. Totila moved to intercept him in the Apennines.',
  battle: 'Narses formed a crescent of dismounted troops with archers on both wings. The Gothic cavalry charged the centre and was shot to pieces from the flanks.',
  aftermath: 'Totila was mortally wounded in the flight and died at Caprae. The Goths elected Teias and withdrew south.',
  contentSections: [
    S('Overview',
      'Taginae was fought in the summer of 552 in the central Apennines, and it decided the Gothic War after seventeen years.',
      'Narses had a large, well-paid army for the first time in the conflict, and he used it in a formation that gave the Gothic cavalry no good option.',
      'Totila was killed, the Gothic field army ceased to exist, and the kingdom followed within a year.'),
    S('Background',
      'Narses marched south from Ravenna in 552, avoiding the coast road that Gothic garrisons controlled, and Totila moved to meet him in the mountains.',
      'Totila was waiting for reinforcements — a body of two thousand horsemen still on the road — and needed time.',
      'Both armies drew up, and there followed the episode Procopius makes most of: Totila riding out between the lines in gilded armour, wheeling his horse and throwing and catching his lance in a display of horsemanship, spinning out the hours until his reinforcements arrived.'),
    S('The battle',
      'Narses formed his centre of dismounted heavy troops, with some four thousand archers on each wing curving forward, so that anything attacking the centre entered a pocket enfiladed from both sides.',
      'Totila attacked with cavalry and, according to Procopius, ordered his men to use lances only — a decision that gave up any answer to the archery.',
      'The charge was shot to pieces before it reached the line. The Gothic cavalry recoiled onto its own infantry, the formation collapsed, and the whole army broke.'),
    S('Aftermath',
      'Totila was wounded in the flight and carried to Caprae, where he died. The scale of the Gothic loss was such that no field army could be reformed.',
      'The surviving Goths elected Teias and withdrew southward toward Campania and the royal treasure.',
      'Narses moved on Rome, which fell shortly afterwards, and then south after Teias.'),
    S('Significance',
      'It ended a war that had been unwinnable for a decade, and it did so because the empire finally paid for it — the tactical brilliance mattered, but so did having enough archers to form two wings of four thousand.',
      'The formation itself became a set piece in military history: dismounted heavy infantry as an anvil, with massed missile troops shaped to enfilade anything that closed.',
      'For the archive it is the decisive engagement of Justinian\'s Italian war, and the point from which the Ostrogothic kingdom had a year left to live.')
  ],
  participants: [
    romanSide(
      [{ name: 'Narses', title: 'Narses', type: 'person', slug: 'narses' }],
      'c. 20,000–30,000',
      'The first properly resourced army the empire committed to Italy, including some 8,000 archers deployed on the two wings.'
    ),
    gothSide(
      [{ name: 'Totila', title: 'Totila', type: 'person', slug: 'totila' }],
      'Unknown; smaller than the Byzantine army',
      'Procopius gives no reliable total. Totila was awaiting 2,000 additional horsemen when the battle began, which suggests he considered himself outnumbered.'
    )
  ],
  battleContinuity: {
    label: 'Follow the war to its last battle',
    battleSlug: 'battle-of-mons-lactarius',
    relationship: 'same-war',
    reason: 'The Goths elected Teias after Totila\'s death and withdrew south; Narses brought them to battle near Vesuvius within months, where Teias was killed and the surviving Goths agreed to leave Italy.'
  },
  relatedEntries: {
    people: [
      { title: 'Narses', type: 'person', slug: 'narses', label: 'Commanded the Byzantine army' },
      { title: 'Totila', type: 'person', slug: 'totila', label: 'Commanded the Gothic army and was killed' }
    ],
    events: [
      { title: 'Gothic War', type: 'event', slug: 'gothic-war', label: 'The war it decided' },
      { title: 'Battle of Mons Lactarius', type: 'event', slug: 'battle-of-mons-lactarius', label: 'The battle that followed' }
    ],
    locations: [{ title: 'Ostrogothic Kingdom', type: 'location', slug: 'ostrogothic-kingdom', label: 'The realm whose army was destroyed' }]
  },
  sources: [
    { title: 'Procopius, History of the Wars', url: 'https://www.gutenberg.org/ebooks/16764', type: 'primary source' },
    { title: 'Battle of Taginae', url: 'https://en.wikipedia.org/wiki/Battle_of_Taginae', type: 'encyclopedia' },
    { title: 'Battle diagram', url: 'https://commons.wikimedia.org/wiki/File:Battle_of_Taginae_552_AD,_Narses_against_Totila.svg', type: 'image source', institution: 'Wikimedia Commons' }
  ]
}

const monsLactarius = {
  id: 'battle-of-mons-lactarius', type: 'event', eventType: 'Battle', name: 'Battle of Mons Lactarius',
  year: 553, location: 'Mons Lactarius, near Vesuvius', eventLocation: 'The slopes of Mons Lactarius, near Mount Vesuvius',
  conflict: 'Gothic War',
  image: img('Gothic Battle of Mons Lactarius on Vesuvius.jpg'),
  imageInfo: {
    caption: 'A later depiction of the battle of Mons Lactarius, where the last Ostrogothic army was destroyed on the slopes below Vesuvius.',
    creator: 'Unknown; later depiction',
    date: 'later imagining, not contemporary',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Gothic_Battle_of_Mons_Lactarius_on_Vesuvius.jpg',
    note: 'Not a contemporary image. No depiction of the battle survives from the period, and this is a later artist\'s conception based on Procopius\'s narrative. Public domain.'
  },
  summary: 'At Mons Lactarius in 553, Narses destroyed the last Ostrogothic army and Teias was killed, ending the kingdom.',
  details: 'The Goths fought for two days on the mountain slopes, then negotiated terms to leave Italy rather than surrender unconditionally.',
  outcome: 'Byzantine victory; Teias killed and the Ostrogothic kingdom ended.',
  background: 'After Taginae the surviving Goths elected Teias and withdrew into Campania, where Narses cut them off from supply.',
  battle: 'The Goths, trapped and starving, attacked downhill. Teias was killed on the first day and the fighting continued into a second.',
  aftermath: 'The survivors agreed to leave Italy with their property on condition they never again made war on the empire.',
  contentSections: [
    S('Overview',
      'Mons Lactarius was fought in 553 on the slopes near Vesuvius, and it is where the Ostrogothic kingdom ended.',
      'The Goths under Teias had withdrawn south after Taginae and were cut off from supply on the mountain, and the battle was fought by an army that had nothing left to do but fight.',
      'It lasted two days, Teias was killed on the first, and the survivors negotiated their way out of Italy rather than being destroyed.'),
    S('Background',
      'After Totila\'s death the surviving Goths elected Teias and moved into Campania, both to secure the royal treasure at Cumae and to link up with a promised Frankish intervention that never came.',
      'Narses followed and manoeuvred them onto the high ground, then blocked their supply route.',
      'Starvation rather than assault decided the position: the Goths could stay and starve or come down and fight.'),
    S('The battle',
      'They came down, and the fighting was infantry work on broken slopes with no room for manoeuvre — the Goths on foot, having lost or eaten their horses.',
      'Procopius gives Teias a set-piece death: fighting in the front rank, holding his shield until it was so heavy with embedded spears that he called for a fresh one, and being struck down in the moment of the exchange.',
      'The Goths fought on through a second day after he was killed, then sent to Narses for terms.'),
    S('Aftermath',
      'The terms were unusually generous. The surviving Goths were permitted to leave Italy with their movable property, on the undertaking that they would never again make war on the empire.',
      'Narses accepted rather than pressing for annihilation, which was pragmatic: he still faced Frankish and Alemannic invasions and Gothic garrisons holding out in the north.',
      'The Ostrogothic kingdom, founded by Theodoric sixty years earlier, ceased to exist.'),
    S('Significance',
      'It is the end of Gothic Italy, and with it the end of the most successful of the post-Roman successor states.',
      'It also completes the reconquest — and completes the demonstration of what the reconquest cost. Italy was depopulated and impoverished, and within fifteen years the Lombards took much of it with little resistance.',
      'Procopius closes his account of the war here, and the literary care he gives Teias\'s death is a measure of what he thought had ended.')
  ],
  participants: [
    romanSide(
      [{ name: 'Narses', title: 'Narses', type: 'person', slug: 'narses' }],
      'Unknown; the field army that had won at Taginae',
      'No separate figure survives for this engagement; Narses had detached forces to garrison Rome and screen the north.'
    ),
    gothSide(
      [{ name: 'Teias', title: 'Teias', type: 'person', slug: 'teias' }],
      'Unknown; the remnant after Taginae',
      'No figures survive. The force was the surviving Gothic army after Taginae, fighting on foot and cut off from supply.'
    )
  ],
  battleContinuity: {
    label: 'Where the eastern empire\'s military system eventually failed',
    battleSlug: 'battle-of-manzikert',
    relationship: 'same-factions',
    reason: 'Mons Lactarius completes Justinian\'s reconquest, won by professional armies operating far from home; at Manzikert in 1071 that system finally broke, and the empire lost Anatolia, the recruiting ground the whole model had depended on.'
  },
  relatedEntries: {
    people: [
      { title: 'Teias', type: 'person', slug: 'teias', label: 'Killed here; the last Gothic king' },
      { title: 'Narses', type: 'person', slug: 'narses', label: 'Commanded the Byzantine army' }
    ],
    events: [
      { title: 'Gothic War', type: 'event', slug: 'gothic-war', label: 'The war it ended' },
      { title: 'Battle of Taginae', type: 'event', slug: 'battle-of-taginae', label: 'The battle that preceded it' }
    ],
    locations: [{ title: 'Ostrogothic Kingdom', type: 'location', slug: 'ostrogothic-kingdom', label: 'The realm that ended with it' }]
  },
  sources: [
    { title: 'Procopius, History of the Wars', url: 'https://www.gutenberg.org/ebooks/16764', type: 'primary source' },
    { title: 'Battle of Mons Lactarius', url: 'https://en.wikipedia.org/wiki/Battle_of_Mons_Lactarius', type: 'encyclopedia' },
    { title: 'Depiction of the battle', url: 'https://commons.wikimedia.org/wiki/File:Gothic_Battle_of_Mons_Lactarius_on_Vesuvius.jpg', type: 'image source', institution: 'Wikimedia Commons' }
  ]
}

// ─── Write ─────────────────────────────────────────────────────────────────────

data.characters.push(narses, totila, teias)
data.locations.push(ostrogothicKingdom)
data.events.push(gothicWar, siegeOfRome, taginae, monsLactarius)

// Re-point Tricamarum: it reached all the way to Manzikert only because nothing
// Byzantine existed between 534 and 1071. The Siege of Rome is now the right target.
const tric = data.events.find((e) => e.id === 'battle-of-tricamarum')
tric.battleContinuity = {
  label: 'Follow the reconquest to Italy',
  battleSlug: 'siege-of-rome-537',
  relationship: 'same-war',
  reason: 'Africa fell in nine months, and Justinian went into Italy the following year on the strength of it; the siege of Rome in 537–538 is where that confidence met an opponent who would not collapse, and the Gothic War ran on for nineteen years.'
}

// Belisarius links forward into the Italian war.
const bel = data.characters.find((c) => c.id === 'belisarius')
bel.relatedEntries.events.push(
  { title: 'Gothic War', type: 'event', slug: 'gothic-war', label: 'The Italian war he opened and could not finish' },
  { title: 'Siege of Rome', type: 'event', slug: 'siege-of-rome-537', label: 'He held the city for a year and nine days' }
)
bel.relatedEntries.locations.push({ title: 'Ostrogothic Kingdom', type: 'location', slug: 'ostrogothic-kingdom', label: 'The realm he took Rome and Ravenna from' })

const just = data.characters.find((c) => c.id === 'justinian-i')
just.relatedEntries.events.push({ title: 'Gothic War', type: 'event', slug: 'gothic-war', label: 'His longest and costliest war' })
just.relatedEntries.people.push({ title: 'Narses', type: 'person', slug: 'narses', label: 'The chamberlain who won Italy for him' })

const rome = data.locations.find((l) => l.id === 'rome')
;(rome.relatedEntries.events ??= []).push({ title: 'Siege of Rome', type: 'event', slug: 'siege-of-rome-537', label: 'Besieged for a year in 537–538; the aqueducts were cut' })

console.log('+ characters : narses, totila, teias')
console.log('+ locations  : ostrogothic-kingdom')
console.log('+ events     : gothic-war, siege-of-rome-537, battle-of-taginae, battle-of-mons-lactarius')
console.log('~ tricamarum battleContinuity re-pointed from Manzikert to the Siege of Rome')
console.log('~ belisarius, justinian-i and rome linked into the Italian war')

writeFileSync(dataPath, JSON.stringify(data, null, 2))
console.log(`\nM3 written — characters ${data.characters.length}, locations ${data.locations.length}, events ${data.events.length}`)
