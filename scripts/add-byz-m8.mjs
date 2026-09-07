/**
 * TRACK A, M8 — the reconquest of Crete, 960–961.
 *
 * Four articles: the siege of Chandax, the Emirate of Crete, Nikephoros II
 * Phokas and Romanos II.
 *
 * This is where the recovery that began at the Lalakaon stops being defensive.
 * Byzantium had tried to retake Crete in 843, 866, 911 and 949 and failed every
 * time; in 961 it succeeded, and the general who did it was emperor two years
 * later. LALAKAON'S CONTINUITY IS RE-POINTED HERE, off Manzikert, as promised in
 * M7 — 863 broke the raiding emirate on land, 961 broke the one at sea.
 *
 * locationType "Emirate" is reused from M7 (Melitene) exactly as planned.
 *
 * Chandax's own continuity points at Manzikert for want of anything nearer.
 * **Re-point it at Antioch when M9 lands** — that is where the reconquest Crete
 * opened actually ended up.
 *
 * IMAGE NOTE, and it is a near miss worth recording. The obvious coin for
 * Romanos II is Commons's "Constantine VII & Romanos II.png", whose own
 * description reads "Histamenon of Constantine VII with Romanos I" — the file
 * name and the description disagree about which Romanos is on it. A biography
 * must not lead with a contested identification, so this uses the Dumbarton Oaks
 * solidus dated 959–963, inside his sole reign and unambiguous.
 *
 * Two commanders are named without articles and carry notes saying why: the emir
 * Abd al-Aziz, and Leo Phokas. John Tzimiskes is a succession endpoint here and
 * gets his article in M9.
 */
import { readFileSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dataPath = path.join(__dirname, '../server/data/history.json')
const data = JSON.parse(readFileSync(dataPath, 'utf8'))
const S = (title, ...paragraphs) => ({ title, paragraphs })
const img = (f) => `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(f)}`

const chandax = {
  id: 'siege-of-chandax', type: 'event', eventType: 'Siege', name: 'Siege of Chandax',
  // NOT "Siege of Candia": the phrase trips the battle-link gate as an
  // unresolvable "Siege of X", and it is genuinely ambiguous besides — the famous
  // Siege of Candia is the Ottoman–Venetian one of 1648–1669, seven centuries
  // later and well outside this archive. "Chandax" auto-aliases from the title.
  aliases: ['Byzantine reconquest of Crete', 'Fall of Chandax'],
  year: 960,
  location: 'Chandax, on Crete',
  eventLocation: 'Chandax, the fortified capital of the Emirate of Crete, on the north coast of the island',
  conflict: 'The Byzantine reconquest of Crete',
  image: img('Byzantines under Nikephoros Phokas besiege Chandax.png'),
  imageInfo: {
    caption: 'The Byzantine fleet, the siege camp and the walls of Chandax, in a thirteenth-century Madrid Skylitzes miniature of the siege.',
    creator: 'Madrid Skylitzes manuscript',
    date: '13th century',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Byzantines_under_Nikephoros_Phokas_besiege_Chandax.png',
    note: 'Painted some three centuries after the siege, and it shows the shape of the operation rather than its detail: ships on the left, the army camped between, the walled city on the right. That relationship — a fleet that could keep an army supplied through a winter — is what decided it. Public domain.'
  },
  summary: 'Between July 960 and March 961 Nikephoros Phokas besieged Chandax through a Cretan winter and took it, ending 135 years of Muslim rule on Crete and the piracy that had made the Aegean unsafe.',
  details: 'The fifth Byzantine attempt to retake the island, and the first that did not go home.',
  outcome: 'Decisive Byzantine victory; Chandax stormed on 6 March 961 and the emirate extinguished.',
  background: 'Crete had been a corsair state since the 820s, and four previous expeditions to recover it had failed.',
  battle: 'An opposed amphibious landing was followed by an eight-month blockade, mining under the walls and a storm of the city in March.',
  aftermath: 'The Aegean was cleared of Cretan piracy, and Nikephoros returned to a triumph and was emperor within two years.',
  contentSections: [
    S('Overview',
      'In July 960 a Byzantine expedition landed on Crete under Nikephoros Phokas, Domestic of the Schools, and settled down in front of the emirate\'s capital at Chandax. It stayed through the autumn, through a winter on a hostile island, and stormed the city on 6 March 961.',
      'The island had been Muslim for a hundred and thirty-five years and the base from which Aegean piracy operated. Four earlier expeditions — in 843, 866, 911 and 949 — had all been sent to take it back, and all four had failed.',
      'The difference in 961 was not tactical brilliance but persistence and logistics: an army that could be supplied by sea and a commander who refused to sail home for the winter. Nikephoros was proclaimed emperor two years later, and the fleet and treasury that Crete freed up paid for the conquests of Cilicia, Cyprus and Antioch that followed.'),
    S('Background',
      'Crete had been taken in the 820s by Andalusian exiles and turned into a corsair state whose fleets raided the islands, the Greek coasts and shipping across the eastern Mediterranean. For the empire it was not a border problem but an interior one: the Aegean is the sea Constantinople sits on.',
      'The record of failure was long and expensive. An expedition in 843 collapsed; the one prepared in 866 ended before it sailed when its commander, the Caesar Bardas, was murdered in the camp; a large fleet under Himerios was destroyed in 911; another attempt in 949 was beaten on the beaches.',
      'By 960 the empire was in a stronger position than at any point since the Arab conquests. The eastern frontier had been reversed since the Lalakaon, the Abbasid caliphate had fragmented, and Constantinople had a professional army and the ships to move it.'),
    S('The landing',
      'The expedition sailed in the summer of 960 and made an opposed landing on the north coast. Byzantine accounts describe purpose-built transports that let armoured cavalry come ashore ready to fight rather than assembling on the beach under attack, which is the moment amphibious operations of this period usually failed.',
      'The Cretan force that met the landing was beaten, and the army moved on Chandax — al-Khandaq, "the ditch", the fortified capital the emirate had built when it took the island.',
      'Nikephoros then made the decision the campaign turned on. Rather than raid the island and withdraw before winter, as every previous expedition had done, he invested the city and prepared to stay.'),
    S('The winter siege',
      'The siege ran for eight months. The city was strongly walled and well provisioned, no relief came from Egypt or Syria, and the besiegers spent the winter in camp on an island whose countryside was hostile.',
      'The fleet is what made it possible: it kept the army fed, blockaded the harbour, and prevented the emirate from doing what it had always done and dispersing its ships to raid elsewhere.',
      'By late winter the Byzantines were mining under the walls. On 6 March 961 a section was brought down and the city was stormed and sacked. The emir Abd al-Aziz was captured, and the plunder of a century of piracy went back to Constantinople with the army.'),
    S('Aftermath',
      'Crete became Byzantine territory again and was resettled and Christianised over the following decades, a process the monk Nikon led with a preaching mission remembered for the single word he was named after.',
      'The strategic effect was immediate. The Aegean stopped being a raiding ground, the islands and the Greek coasts became safe for the first time in generations, and the fleet that had been tied to defending them was freed for offensive use in the east.',
      'Nikephoros celebrated a triumph in Constantinople, was sent east to campaign against Aleppo the following year, and was proclaimed emperor in 963 by an army that had followed him to Crete. The captured emir\'s son entered Byzantine service and died fighting for the empire at Dorostolon.'),
    S('Significance',
      'Chandax is where the Byzantine recovery becomes a reconquest. The Lalakaon in 863 had ended the raids the empire suffered; 961 took territory back, and it took the one piece of territory whose loss had been felt in every port in the Aegean.',
      'It also made a dynasty. The Phokas family had produced generals for generations, and the prestige of Crete carried Nikephoros to the throne — the second time in the archive that a successful frontier commander becomes emperor, after Leo III.',
      'And it set the pattern for the next decade: an amphibious, well-supplied, patient campaign against a fragmented Muslim world, which is what took Cilicia and Cyprus in 964–965 and Antioch in 969.'),
    S('Sources',
      'This campaign is unusually well covered. Leo the Deacon wrote a history within living memory of it, John Skylitzes drew on earlier material, and a contemporary poem — Theodosius the Deacon\'s verses on the capture of Crete — was composed to celebrate the victory almost immediately.',
      'All of it is Byzantine and all of it is triumphal, and the poem in particular is a panegyric rather than a report. Arabic notices of the loss are brief and add little detail.',
      'The result is that the shape of the campaign is secure — the landing, the winter, the mine, the March assault — while the numbers on both sides are the usual chronicle inflation, and the atrocity figures for the sack should be treated the same way.')
  ],
  timeline: [
    { date: '843, 866, 911, 949', title: 'Four failed attempts', description: 'Byzantine expeditions to retake Crete collapse, are aborted, or are destroyed; the 866 preparation ends with the murder of the Caesar Bardas.' },
    { date: 'July 960', title: 'The landing', description: 'Nikephoros Phokas puts an army ashore on the north coast against opposition and defeats the Cretan field force.' },
    { date: 'Autumn 960', title: 'Chandax invested', description: 'Rather than withdraw for the winter as earlier expeditions had, the army digs in around the capital.' },
    { date: 'Winter 960–961', title: 'The blockade holds', description: 'The fleet supplies the besiegers and blockades the harbour; no relief arrives from Egypt or Syria.' },
    { date: '6 March 961', title: 'Chandax stormed', description: 'A mined section of wall comes down and the city is taken and sacked; the emir Abd al-Aziz is captured.' },
    { date: '961', title: 'Triumph in Constantinople', description: 'Nikephoros returns with the plunder of a century of piracy and is celebrated in the capital.' },
    { date: '963', title: 'The general becomes emperor', description: 'Nikephoros is proclaimed emperor by the army two years after the victory.' }
  ],
  participants: [
    {
      side: 'Byzantine Empire',
      factions: [{ name: 'Byzantine Empire', title: 'Byzantine Empire', type: 'location', slug: 'byzantine-empire' }],
      leaders: [{ name: 'Nikephoros II Phokas', title: 'Nikephoros II Phokas', type: 'person', slug: 'nikephoros-ii-phokas' }],
      strength: { display: 'Chronicle figures range from 27,000 to implausibly large fleets; a major expeditionary force', confidence: 'debated', note: 'Byzantine sources give numbers for ships and men that cannot be reconciled with each other. What is not in doubt is that this was the largest amphibious operation the empire had mounted in generations.' }
    },
    {
      side: 'Emirate of Crete',
      factions: [{ name: 'Emirate of Crete', title: 'Emirate of Crete', type: 'location', slug: 'emirate-of-crete' }],
      leaders: [{ name: 'Abd al-Aziz ibn Shu\'ayb', note: 'No article: the last emir of Crete, called Kouroupas in the Greek sources and known almost entirely through the account of his defeat. No image of him exists.' }],
      strength: { display: 'Unknown; the field force of the island and the garrison of Chandax', confidence: 'unknown', note: 'No figures survive from the Cretan side. The emirate\'s strength was its fleet and its walls rather than its field army, and the blockade neutralised the first.' }
    }
  ],
  battleContinuity: {
    label: 'Continue to where the reconquest was undone',
    battleSlug: 'battle-of-manzikert',
    relationship: 'same-region',
    reason: 'Crete began a century of Byzantine advance that took Cilicia, Cyprus and Antioch; at Manzikert in 1071 the empire lost Anatolia and the recovery that started here was reversed within a generation.'
  },
  relatedEntries: {
    people: [
      { title: 'Nikephoros II Phokas', type: 'person', slug: 'nikephoros-ii-phokas', label: 'Commanded the expedition, and was emperor two years later' },
      { title: 'Romanos II', type: 'person', slug: 'romanos-ii', label: 'The emperor who sent it' }
    ],
    events: [
      { title: 'Battle of Lalakaon', type: 'event', slug: 'battle-of-lalakaon', label: 'Where the recovery began, on land, a century earlier' }
    ],
    locations: [
      { title: 'Emirate of Crete', type: 'location', slug: 'emirate-of-crete', label: 'The state this siege extinguished' },
      { title: 'Byzantine Empire', type: 'location', slug: 'byzantine-empire', label: 'Whose reconquest begins here' }
    ]
  },
  sources: [
    { title: 'Leo the Deacon, History', url: 'https://en.wikipedia.org/wiki/Leo_the_Deacon', type: 'primary source' },
    { title: 'John Skylitzes, Synopsis of Histories', url: 'https://en.wikipedia.org/wiki/John_Skylitzes', type: 'primary source' },
    { title: 'Siege of Chandax', url: 'https://en.wikipedia.org/wiki/Siege_of_Chandax', type: 'encyclopedia' },
    { title: 'Biblioteca Nacional de España — Madrid Skylitzes', url: 'https://www.bne.es/en', type: 'museum collection', institution: 'Biblioteca Nacional de España' }
  ]
}

const crete = {
  id: 'emirate-of-crete', type: 'location', locationType: 'Emirate',
  name: 'Emirate of Crete', aliases: ['Iqritish', 'Cretan Saracens', 'Emirate of Iqritish'],
  kingdom: 'Emirate of Crete', year: 824,
  image: img('A monk shows the Cretan Saracens where to build Chandax.jpg'),
  imageInfo: {
    caption: 'A monk shows the newly arrived Cretan Arabs where to build Chandax, in a thirteenth-century Madrid Skylitzes miniature.',
    creator: 'Madrid Skylitzes manuscript',
    date: '13th century',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:A_monk_shows_the_Cretan_Saracens_where_to_build_Chandax.jpg',
    note: 'A Byzantine story about the founding of the enemy capital, painted four centuries later — the chronicle explaining how the invaders came to build in exactly the right place. It is evidence for how the emirate was remembered, not for how it was founded. Public domain.'
  },
  sectionImages: [
    {
      section: 'A state built on raiding',
      src: img('Emirate of Crete Map.svg'),
      caption: 'Crete and the Aegean islands the emirate held or dominated at its height.',
      creator: 'Wikimedia Commons contributor',
      date: 'modern map of the emirate',
      source: 'Wikimedia Commons',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Emirate_of_Crete_Map.svg',
      note: 'A modern map. The point it makes is positional: from Crete a fleet reaches the Peloponnese, the Cyclades and the Anatolian coast in days, which is why the island mattered out of all proportion to its size. Public domain.'
    }
  ],
  summary: 'The Emirate of Crete was a corsair state founded by Andalusian exiles in the 820s that dominated the Aegean for 135 years, until Nikephoros Phokas took its capital in 961.',
  overview: 'A small island polity whose fleets made the Aegean unsafe for four generations, and which four Byzantine expeditions failed to remove before the fifth succeeded.',
  knownFor: [
    'Founded in the 820s by Andalusian exiles expelled from Córdoba and then from Alexandria.',
    'Built Chandax — al-Khandaq, "the ditch" — the fortified capital that is modern Heraklion.',
    'Made the Aegean a raiding ground for 135 years and supplied the eastern Mediterranean slave trade.',
    'Survived Byzantine attempts to retake the island in 843, 866, 911 and 949.',
    'Destroyed by Nikephoros Phokas in the siege of Chandax, 960–961.'
  ],
  contentSections: [
    S('Overview',
      'The Emirate of Crete existed from the 820s to 961 and was, in practice, a state organised around seaborne raiding. It held one large island, built one great fortress-city, and made itself the dominant naval power in a sea that belonged to the Byzantine empire on every map.',
      'Its founders were exiles twice over: Andalusians driven out of Córdoba after a failed revolt, then out of Alexandria after another, who arrived in the Aegean looking for somewhere to settle and found an island the empire had left thinly defended.',
      'For Constantinople it was a wound in the interior rather than on a frontier, which is why five expeditions were sent to remove it, and why the fifth is remembered as one of the great achievements of the tenth-century recovery.'),
    S('Foundation',
      'The core group came from the suburb of Córdoba whose revolt against the Umayyad emir al-Hakam I was crushed in 818; the survivors were expelled. They went first to Alexandria, took part in the disorders there, and were expelled again in the early 820s.',
      'Led by Abu Hafs Umar al-Iqritishi, they landed on Crete around 824 and had the island within a few years. The empire was preoccupied — the revolt of Thomas the Slav had just been suppressed and the Amorian dynasty was three years old — and the response was slow and unsuccessful.',
      'They built their capital on the north coast and gave it the name al-Khandaq, "the ditch", after the fortification that defined it. The Greeks called it Chandax; the Venetians later called it Candia; it is modern Heraklion, and the city has been the island\'s capital ever since.'),
    S('A state built on raiding',
      'The emirate\'s economy was plunder, ransom and slaves, and its instrument was a fleet. From Crete a squadron could reach the Cyclades, the Peloponnese, Euboea, Thessaly or the coast of Anatolia within days, and for four generations it did.',
      'The raids were not incidental. Aegean shipping had to be convoyed or armed, island populations moved inland or fortified, and the empire kept naval themes in being specifically to answer Crete. The slave markets of the eastern Mediterranean were supplied substantially from these raids.',
      'Cretan power also worked in concert with other Muslim naval forces. The sack of Thessalonica in 904 — the empire\'s second city, taken and stripped by a fleet under the renegade Leo of Tripoli — belongs to the same maritime world, and Byzantine writers treated the two threats as one problem.'),
    S('Major rulers',
      'The emirs are known through Byzantine chronicles and their own coinage, and the sequence is reasonably secure even where the men are not.',
      'Abu Hafs Umar I founded the emirate and the dynasty in the 820s and ruled until about 855. His descendants held it for the whole of its existence — an unusual continuity for a state of this kind, and a sign that the raiding economy worked well enough to keep one family in charge of it.',
      'Abd al-Aziz ibn Shu\'ayb, called Kouroupas by the Greeks, was the last of them. He was captured when Chandax fell in 961 and taken to Constantinople for Nikephoros\'s triumph; his son converted, entered Byzantine service, and died fighting for the empire at Dorostolon a decade later.'),
    S('The failed reconquests',
      'The empire tried four times before it succeeded, and the failures are as instructive as the victory.',
      'An expedition in 843 achieved nothing. A far larger one was prepared in 866 by the Caesar Bardas, and ended before it sailed when Bardas was murdered in the camp by Basil the Macedonian — palace politics destroying a campaign before it began. In 911 a great fleet under Himerios reached the island and was then destroyed at sea on the return. A further attempt in 949 was beaten at the landing.',
      'The common thread is that a fleet could reach Crete but an army could not stay. Every expedition faced the same problem — take the walls quickly or go home before winter — and until 960 every one of them went home.'),
    S('The end',
      'Nikephoros Phokas landed in July 960 with a force built to remain, invested Chandax, and held the siege through the winter while his fleet kept the army supplied and the harbour closed. The city was mined and stormed on 6 March 961.',
      'The sack was thorough and the emirate ended with it. There was no successor state and no attempt at reconquest: the fleet that had made Crete formidable was destroyed with the city that built it.',
      'Crete was resettled and returned to Christianity over the following decades, with the missionary monk Nikon prominent in the process, and remained Byzantine until the Fourth Crusade sold it to Venice in 1204.'),
    S('Legacy',
      'The emirate is the clearest demonstration in this archive of what sea power meant in the medieval Mediterranean. A single island in the right position, held by a state willing to specialise in raiding, tied down the resources of an empire for a hundred and thirty-five years.',
      'Its capital outlived it. Chandax became Candia under the Venetians and Heraklion today, and the name records a ditch dug by Andalusian exiles in the 820s.',
      'Its destruction is the hinge of the tenth-century recovery: the Aegean became safe, the fleet was freed for the eastern campaigns, and the general who did it took the throne.')
  ],
  timeline: [
    { date: '818', title: 'Expelled from Córdoba', description: 'The revolt of the Rabad suburb is crushed and its survivors are driven out of al-Andalus.' },
    { date: 'c. 824', title: 'Landing on Crete', description: 'Abu Hafs Umar leads the exiles to Crete after a second expulsion from Alexandria.' },
    { date: 'c. 827', title: 'Chandax founded', description: 'The fortified capital al-Khandaq is built on the north coast; it is modern Heraklion.' },
    { date: '843', title: 'First reconquest fails', description: 'A Byzantine expedition achieves nothing and the island stays lost.' },
    { date: '866', title: 'The expedition that never sailed', description: 'Bardas is murdered in the camp by Basil the Macedonian and the preparation collapses.' },
    { date: '904', title: 'Thessalonica sacked', description: 'A Muslim fleet takes the empire\'s second city, in the same maritime world Cretan raiding belonged to.' },
    { date: '911', title: 'Himerios destroyed', description: 'A large Byzantine fleet reaches Crete and is destroyed at sea on the return.' },
    { date: '949', title: 'Beaten at the landing', description: 'A fourth attempt is defeated on the beaches.' },
    { date: '960–961', title: 'The siege of Chandax', description: 'Nikephoros Phokas winters before the walls and storms the city on 6 March 961.', links: [{ title: 'Siege of Chandax', type: 'event', slug: 'siege-of-chandax' }] },
    { date: '961', title: 'The emirate ends', description: 'The last emir is taken to Constantinople; Crete is resettled and returns to Christianity.' }
  ],
  relatedEntries: {
    people: [
      { title: 'Nikephoros II Phokas', type: 'person', slug: 'nikephoros-ii-phokas', label: 'Destroyed it in 960–961' },
      { title: 'Michael III', type: 'person', slug: 'michael-iii', label: 'In whose reign the 866 expedition against it collapsed' }
    ],
    events: [
      { title: 'Siege of Chandax', type: 'event', slug: 'siege-of-chandax', label: 'Where it was extinguished' }
    ],
    locations: [
      { title: 'Byzantine Empire', type: 'location', slug: 'byzantine-empire', label: 'Whose sea it raided for 135 years' },
      { title: 'Emirate of Melitene', type: 'location', slug: 'emirate-of-melitene', label: 'The land frontier\'s equivalent, broken a century earlier' }
    ]
  },
  sources: [
    { title: 'Leo the Deacon, History', url: 'https://en.wikipedia.org/wiki/Leo_the_Deacon', type: 'primary source' },
    { title: 'John Skylitzes, Synopsis of Histories', url: 'https://en.wikipedia.org/wiki/John_Skylitzes', type: 'primary source' },
    { title: 'Emirate of Crete', url: 'https://en.wikipedia.org/wiki/Emirate_of_Crete', type: 'encyclopedia' },
    { title: 'Dumbarton Oaks — Byzantine studies', url: 'https://www.doaks.org/research/byzantine', type: 'academic resource', institution: 'Dumbarton Oaks' }
  ]
}

const nikephoros = {
  id: 'nikephoros-ii-phokas', type: 'character', name: 'Nikephoros II Phokas',
  aliases: ['Nikephoros II', 'Nicephorus Phocas', 'Nikephoros Phokas'],
  born: 912, died: 969, deathAge: 'about 57',
  causeOfDeath: 'Murdered in his bedchamber in the palace on the night of 10–11 December 969.',
  restingPlace: 'Church of the Holy Apostles, Constantinople',
  location: 'Constantinople',
  title: 'Emperor of the Romans',
  roles: ['Emperor', 'Commander'],
  image: img('Nikephoros II Phokas (Mutinensis).png'),
  imageInfo: {
    caption: 'Nikephoros II Phokas in a fifteenth-century portrait from the Modena manuscript of the chronicle of John Zonaras.',
    creator: 'Unknown Byzantine artist, Mutinensis gr. 122',
    date: '15th century',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Nikephoros_II_Phokas_(Mutinensis).png',
    note: 'Drawn some five centuries after his death for a manuscript of a chronicle, so it is a convention of what a soldier-emperor should look like rather than a likeness. It is the best portrait image of him that exists. Public domain.'
  },
  epithets: [
    { name: 'the Pale Death of the Saracens', type: 'epithet', note: 'The phrase Byzantine tradition attached to his eastern campaigns; admiring rather than hostile, and not a name he used himself.' }
  ],
  summary: 'Nikephoros II Phokas took Crete in 961, Cilicia and Cyprus by 965 and Antioch in 969, ruled as emperor from 963, and was murdered in his own bedchamber by the general who succeeded him.',
  overview: 'The most successful Byzantine soldier of the century and one of its least popular emperors — an ascetic in a hair shirt who taxed the capital hard and quarrelled with the church about whether his dead soldiers were martyrs.',
  greatestFeats: [
    'Took Chandax in 961 and ended 135 years of Muslim rule on Crete',
    'Conquered Cilicia and Cyprus, and took Antioch in 969 after three centuries in Muslim hands',
    'Rebuilt the Byzantine army into the offensive instrument of the tenth-century reconquest'
  ],
  birth: { date: 'c. 912', place: { name: 'Cappadocia' } },
  death: { date: '969', place: { name: 'Constantinople', slug: 'constantinople' }, circumstance: 'Murdered in the palace by a conspiracy led by John Tzimiskes, his nephew by marriage and fellow general, with the empress Theophano\'s complicity.' },
  quickFacts: { realm: 'Eastern Roman Empire', dynasty: 'Phokas family', culture: 'Roman, of the Cappadocian military aristocracy', knownFor: 'The reconquest of Crete, Cilicia, Cyprus and Antioch' },
  isRuler: true,
  succession: {
    office: 'Emperor of the Romans',
    predecessor: { personSlug: 'romanos-ii', displayName: 'Romanos II', note: 'Died suddenly at twenty-four in 963, leaving two small sons; Nikephoros married his widow and ruled as senior emperor.' },
    successor: { displayName: 'John I Tzimiskes', note: 'His fellow general and the man who murdered him, who then ruled until 976 and continued his eastern conquests. Article planned for Track A M9.' }
  },
  contentSections: [
    S('Overview',
      'Nikephoros Phokas came from the Cappadocian military aristocracy, the class that supplied the empire\'s generals for generations, and spent his career on the eastern frontier before the reconquest of Crete in 961 made him the most celebrated soldier in the empire.',
      'Two years later the army proclaimed him emperor. He married Theophano, the widow of Romanos II, and ruled as senior emperor over her two small sons — one of whom, Basil II, would become the greatest of the Macedonian emperors.',
      'He spent six years as emperor conquering and was murdered in his bedroom in the seventh, by the general he had trusted most and the empress he had married.'),
    S('Birth and early life',
      'He was born around 912 into the Phokas family, whose men had held high command since the ninth century, and his father Bardas Phokas was Domestic of the Schools before him.',
      'He rose through the eastern commands in the 940s and 950s in a period when the frontier was already moving in the empire\'s favour, and by 954 held the Domesticate himself.',
      'His reputation before Crete was for method rather than dash: careful supply, night marches, fortified camps, and a preference for attritional campaigning that ground down opponents rather than seeking a decisive battle.'),
    S('Character and Personality',
      'He is one of the few Byzantine emperors whose personality is described consistently by writers with different agendas, and what they describe is austerity to the point of strangeness.',
      'He wore a hair shirt under the imperial robes, slept on the floor of his chamber on a leopard skin, ate no meat, and was closer to the monastic world than to the court — he was a patron and friend of Athanasios, founder of the Great Lavra on Mount Athos, and had considered taking vows himself.',
      'That did not make him gentle. He was a hard commander and a harder emperor, and his one genuinely striking religious argument was an attempt to have soldiers killed fighting Muslims declared martyrs — which the church refused, on the ground that killing disqualified a man from that honour whatever the cause. The refusal says as much about Byzantine religion as the request says about him.'),
    S('Crete and the eastern conquests',
      'The Cretan expedition of 960–961 was the campaign that made him. He landed against opposition, invested Chandax, kept the army supplied through a winter that four previous expeditions had refused to face, mined the walls and stormed the city in March.',
      'He went east immediately afterwards and sacked Aleppo in 962. As emperor he took Cilicia in 964–965, opening the Taurus passes for good, and Cyprus in the same period, which completed Byzantine control of the eastern Mediterranean sea lanes.',
      'Antioch fell in 969, the greatest of the recoveries — a patriarchal city that had been in Muslim hands for more than three centuries. Nikephoros was not present, and the manner of its taking is a story that belongs to the men who actually did it.'),
    S('Emperor',
      'Government did not suit him as well as war. The conquests were expensive, and he paid for them with heavy taxation, a debased lighter coin alongside the full-weight one, and confiscations that fell on the church.',
      'He legislated against the growth of monastic landholding, which he regarded as unproductive wealth, and against the great estates swallowing the soldier-farmers the theme system depended on. Both were defensible policies and both made powerful enemies.',
      'A famine in the capital, an unpopular currency, a court that found him graceless, and a church he had antagonised left him isolated in the city while he remained idolised in the camps. He built a wall around the palace, which the chroniclers took as a sign that he knew.'),
    S('Murder',
      'The conspiracy was led by John Tzimiskes, his nephew by marriage and the best general in the empire after himself, and it had the cooperation of the empress Theophano.',
      'On the night of 10–11 December 969 the conspirators were smuggled into the palace and found the emperor asleep on the floor of his chamber rather than in his bed, which nearly saved him. He was killed there.',
      'Tzimiskes took the throne and ruled for seven years, continuing the eastern campaigns. Theophano, who had been an emperor\'s daughter-in-law, an emperor\'s wife twice over and a conspirator against the second, was exiled — Tzimiskes had no intention of marrying her.'),
    S('Legacy',
      'He left the empire holding Crete, Cyprus, Cilicia and Antioch, with the eastern frontier further forward than at any time since the Arab conquests, and with an army that had been rebuilt as an offensive instrument.',
      'His military treatises — or the ones attributed to his circle — describe that army in detail, and they are among the best evidence surviving for how a tenth-century Byzantine force actually campaigned.',
      'He is the clearest case in the archive of an emperor whose reputation with the army and with the capital pointed in opposite directions, and the gap between them killed him. The Orthodox church later venerated him as a saint, which he would probably have appreciated more than the throne.')
  ],
  timeline: [
    { date: 'c. 912', title: 'Born', description: 'Born into the Phokas family of Cappadocia, whose men had held high command for generations.' },
    { date: '954', title: 'Domestic of the Schools', description: 'Takes command of the empire\'s central armies on the eastern frontier.' },
    { date: '960–961', title: 'Crete', description: 'Winters before Chandax and storms it in March, ending the emirate and Aegean piracy.', links: [{ title: 'Siege of Chandax', type: 'event', slug: 'siege-of-chandax' }] },
    { date: '962', title: 'Aleppo sacked', description: 'Campaigns into Syria immediately after Crete and takes the Hamdanid capital.' },
    { date: '963', title: 'Proclaimed emperor', description: 'Romanos II dies at twenty-four; the army proclaims Nikephoros, who marries the widowed empress Theophano.' },
    { date: '964–965', title: 'Cilicia and Cyprus', description: 'Takes the Cilician cities and the island of Cyprus, securing the sea lanes and the Taurus passes.' },
    { date: '967', title: 'Quarrel with the church', description: 'His attempt to have soldiers killed in battle declared martyrs is refused.' },
    { date: '969', title: 'Antioch recovered', description: 'The patriarchal city falls after more than three centuries in Muslim hands.' },
    { date: '969', title: 'Murdered', description: 'Killed in the palace on the night of 10–11 December by a conspiracy under John Tzimiskes.' }
  ],
  relatedEntries: {
    people: [
      { title: 'Romanos II', type: 'person', slug: 'romanos-ii', label: 'The emperor who sent him to Crete, and whose widow he married' }
    ],
    events: [
      { title: 'Siege of Chandax', type: 'event', slug: 'siege-of-chandax', label: 'The campaign that carried him to the throne' }
    ],
    locations: [
      { title: 'Emirate of Crete', type: 'location', slug: 'emirate-of-crete', label: 'The state he destroyed' },
      { title: 'Byzantine Empire', type: 'location', slug: 'byzantine-empire', label: 'The realm he ruled and enlarged' },
      { title: 'Constantinople', type: 'location', slug: 'constantinople', label: 'Where he was murdered in his own palace' }
    ]
  },
  sources: [
    { title: 'Leo the Deacon, History', url: 'https://en.wikipedia.org/wiki/Leo_the_Deacon', type: 'primary source' },
    { title: 'Nikephoros II Phokas', url: 'https://en.wikipedia.org/wiki/Nikephoros_II_Phokas', type: 'encyclopedia' },
    { title: 'Dumbarton Oaks — Byzantine Collection', url: 'https://www.doaks.org/resources/coins', type: 'museum collection', institution: 'Dumbarton Oaks' }
  ]
}

const romanos = {
  id: 'romanos-ii', type: 'character', name: 'Romanos II',
  aliases: ['Romanus II', 'Romanos II Porphyrogennetos'],
  born: 938, died: 963, deathAge: 'about 24',
  causeOfDeath: 'Died suddenly on 15 March 963, after returning exhausted from hunting; poisoning was rumoured and never shown.',
  restingPlace: 'Church of the Holy Apostles, Constantinople',
  location: 'Constantinople',
  title: 'Emperor of the Romans',
  roles: ['Emperor'],
  image: img('Romanos II solidus.png'),
  imageInfo: {
    caption: 'A gold solidus of Romanos II, struck at Constantinople during his sole reign of 959–963.',
    creator: 'Constantinople mint',
    date: '959–963',
    source: 'Wikimedia Commons (Dumbarton Oaks)',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Romanos_II_solidus.png',
    note: 'Chosen because it is unambiguous. The obvious alternative — a histamenon captioned on Commons as Constantine VII with one or other Romanos — is a coin whose own file name and description disagree about which Romanos it shows, and a biography should not lead with a contested identification. Public domain.'
  },
  summary: 'Romanos II reigned from 959 to 963 and died at twenty-four. Crete was retaken and Aleppo sacked in those four years, by generals he had the sense to appoint and leave alone.',
  overview: 'A short reign with an outsized record, and a persistent difficulty in saying how much of it belonged to the emperor.',
  greatestFeats: [
    'Appointed Nikephoros Phokas to the Cretan command and backed the expedition that succeeded where four had failed',
    'Presided over the recovery of Crete in 961 and the sack of Aleppo in 962',
    'Left an undisputed succession in his two sons, one of whom became Basil II'
  ],
  birth: { date: 'c. 938', place: { name: 'Constantinople', slug: 'constantinople' } },
  death: { date: '963', place: { name: 'Constantinople', slug: 'constantinople' }, circumstance: 'Died on 15 March 963 at about twenty-four, four days after returning exhausted from a hunt.' },
  quickFacts: { realm: 'Eastern Roman Empire', dynasty: 'Macedonian dynasty', culture: 'Roman', knownFor: 'A four-year reign in which Crete was retaken' },
  isRuler: true,
  succession: {
    office: 'Emperor of the Romans',
    predecessor: { displayName: 'Constantine VII', note: 'His father, the scholar-emperor whose Book of Ceremonies and De Administrando Imperio are among the archive\'s standing sources. Article owed — see Track A M8b.' },
    successor: { personSlug: 'nikephoros-ii-phokas', displayName: 'Nikephoros II Phokas', note: 'Romanos\'s sons Basil II and Constantine VIII were small children; Nikephoros married their mother Theophano and ruled as senior emperor from 963.' }
  },
  contentSections: [
    S('Overview',
      'Romanos II was born in the purple, succeeded his father Constantine VII in 959, and was dead at about twenty-four in 963. His reign lasted three and a half years.',
      'In that time the empire retook Crete after a century and a half and sacked Aleppo, which is a better military record than most emperors manage in decades. He was present for none of it.',
      'The question the sources leave open, and cannot close, is whether that is a criticism. He appointed the right generals, gave them what they needed and did not interfere, which is a real if unglamorous form of competence — and it is also exactly what a pleasure-loving young man with capable ministers would look like.'),
    S('Birth and early life',
      'He was the son of Constantine VII, the scholar-emperor who wrote or commissioned the Book of Ceremonies and the De Administrando Imperio, and was crowned co-emperor as a small child.',
      'He married twice. The first was a diplomatic match to a Provençal princess who died young; the second, which produced the emperors of the next generation, was to a woman of obscure and much-discussed origin who took the name Theophano.',
      'Hostile tradition made her an innkeeper\'s daughter and Romanos a young man ruled by her, and later histories added her to the deaths of both her husbands. Almost none of it is verifiable, and much of it is the standard treatment of a low-born empress in Byzantine writing.'),
    S('Character and Personality',
      'The portrait in the sources is of an amiable, handsome, athletic young man devoted to hunting and the games, who left government to his ministers — above all the eunuch Joseph Bringas — and to his generals.',
      'It is not a hostile portrait so much as a dismissive one, and it should be read carefully. Byzantine writers had a settled idea of what a serious emperor looked like, and it did not include enthusiasm for the hunt; the same authors describe his father as a scholar too absorbed in books to rule, so the family could not win either way.',
      'What can be said is that he made two decisions that mattered more than anything a more diligent emperor could have done at his desk. He sent Nikephoros Phokas to Crete, and he sent him east afterwards. Judgement in appointments is not nothing.'),
    S('Crete and Aleppo',
      'The Cretan expedition sailed in 960 under Nikephoros Phokas with the resources of the state behind it, and it succeeded where the attempts of 843, 866, 911 and 949 had failed — the difference being an army supplied through a winter siege rather than withdrawn before it.',
      'Chandax fell on 6 March 961, the emirate was extinguished, and Aegean piracy ended with it. The plunder came back to Constantinople with the army and the triumph was celebrated in the capital.',
      'Nikephoros went east the following year and sacked Aleppo, the Hamdanid capital, while his brother Leo Phokas held the Anatolian frontier. In four years the empire had taken the Aegean back and put the principal Muslim power in northern Syria on the defensive.'),
    S('Death and what followed',
      'He died on 15 March 963, four days after coming back exhausted from a hunt. He was about twenty-four and had reigned three and a half years.',
      'Poisoning was rumoured immediately and attached, as such rumours did, to Theophano — who was pregnant with their daughter at the time, and who gained nothing by it. No source offers evidence, and the suddenness of a young man\'s death was reason enough for the story in a court that expected them.',
      'His sons Basil II and Constantine VIII were five and three. Within months Nikephoros Phokas had been proclaimed by the army, had married Theophano and had taken the senior throne — and the boys survived to inherit it, which given the century they were born into is the most surprising part of the whole sequence.'),
    S('Legacy',
      'The reign is a genuine problem of attribution, and worth stating as one rather than resolving. The achievements are large, the emperor\'s personal part in them is invisible, and the sources are more interested in his hunting than in his appointments.',
      'What is not in doubt is that the tenth-century reconquest gathered its decisive momentum in these four years, and that the men who carried it out — Nikephoros and Leo Phokas — were his choices.',
      'His real legacy is his younger son. Basil II, five years old when his father died, ruled for half a century and took the empire to its greatest extent since Justinian.')
  ],
  timeline: [
    { date: 'c. 938', title: 'Born', description: 'Born in the purple to the emperor Constantine VII.' },
    { date: 'c. 956', title: 'Marries Theophano', description: 'Marries a woman of obscure origins whose reputation later writers blackened thoroughly.' },
    { date: '959', title: 'Becomes emperor', description: 'Succeeds his father Constantine VII and leaves government largely to his ministers.' },
    { date: '960', title: 'The Cretan expedition sails', description: 'He appoints Nikephoros Phokas to command the fifth attempt to retake the island.', links: [{ title: 'Siege of Chandax', type: 'event', slug: 'siege-of-chandax' }] },
    { date: '961', title: 'Crete retaken', description: 'Chandax falls on 6 March and the emirate is destroyed; the triumph is celebrated in Constantinople.' },
    { date: '962', title: 'Aleppo sacked', description: 'Nikephoros campaigns into Syria and takes the Hamdanid capital.' },
    { date: '963', title: 'Died', description: 'Dies suddenly on 15 March at about twenty-four, leaving two small sons.' }
  ],
  relatedEntries: {
    people: [
      { title: 'Nikephoros II Phokas', type: 'person', slug: 'nikephoros-ii-phokas', label: 'His general, his successor, and his widow\'s second husband' }
    ],
    events: [
      { title: 'Siege of Chandax', type: 'event', slug: 'siege-of-chandax', label: 'The victory of his reign, won in his absence' }
    ],
    locations: [
      { title: 'Byzantine Empire', type: 'location', slug: 'byzantine-empire', label: 'The realm he ruled for three and a half years' },
      { title: 'Constantinople', type: 'location', slug: 'constantinople', label: 'Where he was born and died' },
      { title: 'Emirate of Crete', type: 'location', slug: 'emirate-of-crete', label: 'Destroyed by the expedition he sent' }
    ]
  },
  sources: [
    { title: 'Leo the Deacon, History', url: 'https://en.wikipedia.org/wiki/Leo_the_Deacon', type: 'primary source' },
    { title: 'John Skylitzes, Synopsis of Histories', url: 'https://en.wikipedia.org/wiki/John_Skylitzes', type: 'primary source' },
    { title: 'Romanos II', url: 'https://en.wikipedia.org/wiki/Romanos_II', type: 'encyclopedia' },
    { title: 'Dumbarton Oaks — Byzantine Collection', url: 'https://www.doaks.org/resources/coins', type: 'museum collection', institution: 'Dumbarton Oaks' }
  ]
}

data.events.push(chandax)
data.locations.push(crete)
data.characters.push(nikephoros, romanos)

// ── Re-point Lalakaon's continuity, as promised in M7 ─────────────────────────
// It pointed at Manzikert for want of anything nearer. Chandax is forward, in the
// same long struggle, and is the moment the recovery Lalakaon began turned into
// territorial reconquest.
const lalakaon = data.events.find((e) => e.id === 'battle-of-lalakaon')
lalakaon.battleContinuity = {
  label: 'Continue to the reconquest it made possible',
  battleSlug: 'siege-of-chandax',
  relationship: 'same-factions',
  reason: 'Lalakaon broke the emirate that raided Anatolia by land; a century later at Chandax the empire destroyed the one that raided the Aegean by sea, and stopped defending the frontier in favour of taking territory back.'
}

// ── Link into what already exists (bidirectional) ─────────────────────────────
const push = (arr, item) => { if (!arr.some((x) => x.slug === item.slug)) arr.push(item) }
const loc = (id) => data.locations.find((l) => l.id === id)
const chr = (id) => data.characters.find((c) => c.id === id)

const chandaxRef = (label) => ({ title: 'Siege of Chandax', type: 'event', slug: 'siege-of-chandax', label })
const creteRef = (label) => ({ title: 'Emirate of Crete', type: 'location', slug: 'emirate-of-crete', label })

const byz = loc('byzantine-empire')
push((byz.relatedEntries.events ??= []), chandaxRef('Where the reconquest of the tenth century began, in 961'))
push((byz.relatedEntries.locations ??= []), creteRef('The corsair state that held its Aegean for 135 years'))
push((byz.relatedEntries.people ??= []), { title: 'Nikephoros II Phokas', type: 'person', slug: 'nikephoros-ii-phokas', label: 'Emperor 963–969; took Crete, Cilicia, Cyprus and Antioch' })

push((lalakaon.relatedEntries.events ??= []), chandaxRef('Where the recovery it began became a reconquest'))

const melitene = loc('emirate-of-melitene')
push((melitene.relatedEntries.locations ??= []), creteRef('The naval equivalent, destroyed a century after Melitene\'s army was'))

const michael = chr('michael-iii')
push((michael.relatedEntries.locations ??= []), creteRef('The emirate whose reconquest collapsed with Bardas\'s murder in 866'))

console.log('+ events     : siege-of-chandax')
console.log('+ locations  : emirate-of-crete')
console.log('+ characters : nikephoros-ii-phokas, romanos-ii')
console.log('~ battle-of-lalakaon continuity re-pointed: manzikert -> siege-of-chandax')
console.log('~ linked     : byzantine-empire, emirate-of-melitene, michael-iii')

writeFileSync(dataPath, JSON.stringify(data, null, 2))
console.log(`\nM8 written — characters ${data.characters.length}, locations ${data.locations.length}, events ${data.events.length}`)
