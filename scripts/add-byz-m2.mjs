/**
 * TRACK A, M2 — the Vandalic War.
 *
 * Seven articles: the war, its two battles, the Vandal Kingdom as an anchor
 * polity, and the three people the whole thing turns on. Nothing here existed
 * beforehand, which matches the M1 audit finding that the archive is empty between
 * 533 and 1014.
 *
 * Source discipline: almost everything known about this war comes from Procopius,
 * who was Belisarius's own secretary and present for much of it. That is unusually
 * good access and an unusually interested witness at the same time, and the
 * articles say so rather than quietly treating him as neutral.
 *
 * Two attributions handled with care: the San Vitale figure used for Belisarius is
 * only TRADITIONALLY him, and the story of his blinding and begging is a later
 * medieval invention with no contemporary basis.
 *
 * Battle continuity: Ad Decimum -> Tricamarum is the natural pair. Tricamarum has
 * to point at Manzikert for now because the archive holds no Byzantine battle
 * between 534 and 1071; it should be re-pointed at the Gothic War when M3 lands.
 */
import { readFileSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dataPath = path.join(__dirname, '../server/data/history.json')
const data = JSON.parse(readFileSync(dataPath, 'utf8'))
const S = (title, ...paragraphs) => ({ title, paragraphs })
const img = (f) => `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(f)}`

// ─── People ────────────────────────────────────────────────────────────────────

const justinian = {
  id: 'justinian-i', type: 'character', name: 'Justinian I',
  aliases: ['Justinian the Great', 'Flavius Petrus Sabbatius Iustinianus'],
  born: 482, died: 565, deathAge: 'about 83',
  causeOfDeath: 'Died in Constantinople in November 565, apparently of natural causes.',
  restingPlace: 'Church of the Holy Apostles, Constantinople',
  location: 'Constantinople',
  title: 'Emperor of the Romans',
  roles: ['Emperor', 'Lawgiver', 'Builder'],
  image: img('Mosaic of Justinian I - San Vitale - Ravenna 2016.jpg'),
  imageInfo: {
    caption: 'Justinian I in the mosaic of San Vitale at Ravenna, completed in 547 — a contemporary image, though an official one rather than a likeness taken from life.',
    creator: 'Unknown mosaicists, Ravenna',
    date: 'completed 547',
    source: 'Basilica of San Vitale, Ravenna / Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Mosaic_of_Justinian_I_-_San_Vitale_-_Ravenna_2016.jpg',
    note: 'Made within the emperor\'s lifetime and in a city he had recently reconquered, so it is contemporary — but it is imperial propaganda in a church apse, not a portrait sitting. Licensed CC BY-SA 4.0.'
  },
  summary: 'Justinian I ruled the eastern Roman empire from 527 to 565, reconquered North Africa and Italy, rebuilt Hagia Sophia and had Roman law codified.',
  overview: 'His reign is the last serious attempt to put the Roman empire back together, and it very nearly worked before plague and overreach undid it.',
  greatestFeats: [
    'Reconquered the Vandal kingdom of Africa in a single campaign season',
    'Had Roman law codified into the Corpus Juris Civilis',
    'Rebuilt Hagia Sophia after the Nika riots'
  ],
  birth: { date: 'c. 482', place: { name: 'Tauresium, in the Balkans' } },
  death: { date: '565', place: { name: 'Constantinople', slug: 'constantinople' }, circumstance: 'Died in November 565 after a reign of thirty-eight years, leaving no children.' },
  quickFacts: { realm: 'Eastern Roman Empire', dynasty: 'Justinian dynasty', culture: 'Roman', knownFor: 'Reconquest, law and Hagia Sophia' },
  isRuler: true,
  succession: {
    office: 'Emperor of the Romans',
    predecessor: { displayName: 'Justin I', note: 'His uncle, who raised him and adopted him; Justinian was effectively governing before Justin died in 527. No article yet in this archive.' },
    successor: { displayName: 'Justin II', note: 'His nephew, who inherited an empire far larger and far more exhausted than the one Justinian had received. No article yet in this archive.' }
  },
  contentSections: [
    S('Overview',
      'Justinian ruled from Constantinople for thirty-eight years, from 527 to 565, and spent them trying to reverse the collapse of the western Roman empire.',
      'He very nearly managed it. North Africa fell to his armies in a single campaign season, Italy and southern Spain followed, and for a moment the Mediterranean was again ringed by Roman territory.',
      'What he could not do was pay for it. Plague, exhaustion and permanent war on the Persian frontier meant the reconquest outlived him only barely, and the effort marked the eastern empire for a century afterwards.'),
    S('Birth and early life',
      'He was born around 482 at Tauresium in the Balkans, into a Latin-speaking provincial family of no distinction whatever.',
      'His rise came entirely through his uncle Justin, a soldier who worked his way up the guard and became emperor in 518. Justin brought his nephew to the capital, had him educated, and adopted him.',
      'By the time Justin died in 527 Justinian was already running much of the government, so his accession changed the title rather than the direction.'),
    S('Character and Personality',
      'Justinian is unusually well documented and unusually hard to read, because the same writer left two irreconcilable accounts of him. Procopius wrote the Wars, which treats the emperor as a serious if flawed ruler, and the Secret History, which portrays him as a demon in human form who destroyed more than he built.',
      'What both accounts agree on is the working habit. He barely slept, read everything, involved himself in the smallest administrative detail and in theological argument, and was nicknamed "the emperor who never sleeps". Contemporaries found him accessible and exhausting in roughly equal measure.',
      'He was also politically dependent on his wife Theodora to a degree that scandalised the aristocracy. During the Nika riots of 532, with the capital burning, it was reportedly Theodora who refused to let him flee — and the regime survived because he stayed. The relationship is the single most discussed feature of his character and the hardest to see past the hostility of the sources.'),
    S('Reign and reconquest',
      'The Nika riots of 532 nearly ended him in his fifth year: two circus factions united against the government, half Constantinople burned and a rival was proclaimed. The rising was put down with great slaughter, and Justinian emerged with no serious opposition left.',
      'He then turned outward. In 533 he sent Belisarius against the Vandal kingdom of Africa, and against the expectations of his own council the campaign destroyed it within months. Italy followed, in a war that dragged on for two decades.',
      'The reconquest was always financed on a shoestring, with armies too small for the ground they held, and it depended on commanders — Belisarius, and later Narses — performing far beyond what their resources should have allowed.'),
    S('Law and building',
      'His most durable achievement had nothing to do with armies. He ordered the whole inherited mass of Roman law reduced to order, and the result — the Codex, Digest, Institutes and Novels, later called the Corpus Juris Civilis — became the foundation of the European legal tradition.',
      'He rebuilt Hagia Sophia after the Nika riots on a scale nobody had attempted, with a dome that contemporaries found barely credible, and it remained the largest church in Christendom for nearly a thousand years.',
      'The building programme ran across the empire — fortifications, cisterns, churches and frontier works — and Procopius catalogued it in a separate book, the Buildings, whose flattery is as informative as the Secret History\'s venom.'),
    S('Plague and decline',
      'In 541 plague reached the empire and returned repeatedly for two centuries. Its first outbreak killed a very large share of the population of Constantinople and of the empire, and the manpower and tax base never recovered within his lifetime.',
      'The armies in Italy were left starved of reinforcement, the Gothic War dragged on far past any reasonable expectation, and the frontier with Persia demanded permanent expense.',
      'He died in 565 leaving an empire larger on the map than the one he inherited and materially weaker, and within a generation much of the western reconquest had been lost again.'),
    S('Legacy',
      'The legal codification is the reconquest that lasted. Roman law as Europe received it is Justinian\'s law, and it underlies the civil-law systems of most of the continent.',
      'Hagia Sophia stands, and remains the definitive statement of what the eastern empire believed about itself.',
      'The military legacy is more equivocal. He proved the reconquest was possible and simultaneously proved it could not be afforded, and historians have argued ever since about whether he saved the eastern empire or over-extended it into the crisis that followed.')
  ],
  timeline: [
    { date: 'c. 482', title: 'Born', description: 'Born at Tauresium in the Balkans to a Latin-speaking provincial family of no rank.' },
    { date: '518', title: 'His uncle becomes emperor', description: 'Justin I is raised to the purple; Justinian is brought into government and adopted.' },
    { date: '527', title: 'Accession', description: 'Becomes emperor on Justin\'s death, having already directed policy for years.' },
    { date: '532', title: 'Nika riots', description: 'The circus factions unite against him and much of Constantinople burns; the regime survives and crushes the rising.' },
    { date: '533–534', title: 'The Vandal kingdom destroyed', description: 'Belisarius takes Africa in a single campaign season.', links: [{ title: 'Vandalic War', type: 'event', slug: 'vandalic-war' }] },
    { date: '537', title: 'Hagia Sophia consecrated', description: 'The rebuilt church is finished, with a dome on a scale never previously attempted.' },
    { date: '541', title: 'Plague', description: 'Plague reaches the empire and devastates its population and revenues.' },
    { date: '565', title: 'Died', description: 'Died at Constantinople after thirty-eight years, leaving no children.' }
  ],
  relatedEntries: {
    people: [
      { title: 'Belisarius', type: 'person', slug: 'belisarius', label: 'His principal general' },
      { title: 'Gelimer', type: 'person', slug: 'gelimer', label: 'The Vandal king he destroyed' }
    ],
    events: [
      { title: 'Vandalic War', type: 'event', slug: 'vandalic-war', label: 'His first war of reconquest' },
      { title: 'Battle of Ad Decimum', type: 'event', slug: 'battle-of-ad-decimum', label: 'The battle that opened Africa' }
    ],
    locations: [
      { title: 'Byzantine Empire', type: 'location', slug: 'byzantine-empire', label: 'The realm he ruled' },
      { title: 'Constantinople', type: 'location', slug: 'constantinople', label: 'His capital' },
      { title: 'Vandal Kingdom', type: 'location', slug: 'vandal-kingdom', label: 'The realm he annexed' }
    ]
  },
  sources: [
    { title: 'Procopius, History of the Wars', url: 'https://www.gutenberg.org/ebooks/16764', type: 'primary source' },
    { title: 'Justinian I', url: 'https://en.wikipedia.org/wiki/Justinian_I', type: 'encyclopedia' },
    { title: 'Basilica of San Vitale, Ravenna', url: 'https://whc.unesco.org/en/list/788/', type: 'institution', institution: 'UNESCO World Heritage Centre' }
  ]
}

const belisarius = {
  id: 'belisarius', type: 'character', name: 'Belisarius',
  aliases: ['Flavius Belisarius'],
  born: 500, died: 565, deathAge: 'about 65',
  causeOfDeath: 'Died in 565, in the same year as the emperor he had served for nearly forty years.',
  restingPlace: 'Constantinople',
  location: 'Constantinople',
  title: 'Magister militum',
  roles: ['General', 'Commander'],
  image: img('Meister von San Vitale in Ravenna 013.jpg'),
  imageInfo: {
    caption: 'A figure from the San Vitale mosaic at Ravenna, traditionally identified as Belisarius — an identification that is conventional rather than proven.',
    creator: 'Unknown mosaicists, Ravenna',
    date: 'completed 547',
    source: 'Basilica of San Vitale, Ravenna / Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Meister_von_San_Vitale_in_Ravenna_013.jpg',
    note: 'The bearded figure to the emperor\'s right in the San Vitale panel is customarily called Belisarius, but the mosaic names nobody except Justinian and Bishop Maximian. The identification is a long-standing convention, not evidence, and no certain portrait of Belisarius exists. Public domain.'
  },
  summary: 'Belisarius was Justinian\'s foremost general, who destroyed the Vandal kingdom in a single campaign and fought the Gothic War in Italy for two decades.',
  overview: 'He won repeatedly with forces far smaller than the task, and is documented in unusual detail because his own secretary, Procopius, wrote the history.',
  greatestFeats: [
    'Destroyed the Vandal kingdom of Africa in roughly nine months',
    'Held Rome through a year-long Gothic siege',
    'Defended Constantinople against a Hunnic raid in 559 with almost no troops'
  ],
  birth: { date: 'c. 500', place: { name: 'Germania, in the Balkans' } },
  death: { date: '565', place: { name: 'Constantinople', slug: 'constantinople' }, circumstance: 'Died in 565, months before Justinian.' },
  quickFacts: { realm: 'Eastern Roman Empire', culture: 'Roman', knownFor: 'The reconquest of Africa and the Gothic War' },
  contentSections: [
    S('Overview',
      'Belisarius was the outstanding general of Justinian\'s reign and one of the most successful commanders in Roman history, which is a strange thing to be able to say about a man who was almost never given adequate forces.',
      'He destroyed the Vandal kingdom of Africa in about nine months with an army of some fifteen thousand, then spent two decades in Italy fighting the Ostrogoths with resources that were rarely equal to holding what he had taken.',
      'He is documented in exceptional detail because Procopius served as his legal secretary and wrote the history of his campaigns — which is both a gift and a problem.'),
    S('Birth and early life',
      'He was born around 500 in the Balkans, and like Justinian he came from the provincial Latin-speaking world rather than from the capital\'s aristocracy.',
      'He entered the imperial guard and rose through service on the Persian frontier, where he won at Dara in 530 and lost at Callinicum the following year.',
      'His decisive moment came in 532, when he was one of the commanders who suppressed the Nika riots — a service that made his career and bound him closely to the emperor.'),
    S('Character and Personality',
      'Procopius knew him personally and drew him as disciplined, personally brave, unusually restrained with plunder and severe about his soldiers\' behaviour toward civilians — a general who understood that an army looting a province he was trying to hold was defeating itself.',
      'The same writer, in the Secret History, presents him as weak in his own household and dominated by his wife Antonina, and treats his loyalty to Justinian as something close to servility. Both portraits come from the same well-placed witness, and neither can simply be discarded.',
      'What is not in doubt is that he refused the purple. Offered the western empire by the Goths in 540 as a way of ending the war, he appeared to accept, took Ravenna, and then handed everything to Justinian — an act that his contemporaries found either admirable or incomprehensible, and which the sources still argue over.'),
    S('The Vandal campaign',
      'In 533 Justinian sent him to Africa against the advice of most of the court, which remembered a catastrophic failed expedition in 468 and expected another.',
      'He landed unopposed, marched on Carthage, and destroyed the Vandal field army at Ad Decimum in September and again at Tricamarum in December. The kingdom that had held Africa for a century was gone within the campaign season.',
      'He returned to Constantinople with Gelimer as a captive and was granted a triumph — the first held by a private citizen in Rome or Constantinople for centuries, and effectively the last of its kind.'),
    S('Italy and afterwards',
      'He crossed to Italy in 535 and took Sicily, Naples and Rome, then held Rome through a Gothic siege lasting more than a year with a garrison that should not have been able to do it.',
      'Recalled, sent to Persia, and returned to Italy in 544, he found the Gothic War transformed and himself starved of men and money. The reconquest of Italy was eventually completed by Narses rather than by him.',
      'In 559 he was brought out of retirement to meet a Hunnic raid approaching Constantinople and drove it off with a scratch force, which was the last military act of his life.'),
    S('The legend of the blind beggar',
      'The best-known story about Belisarius is that Justinian had him blinded and reduced to begging in the streets, and it is the subject of a whole genre of paintings from the eighteenth and nineteenth centuries.',
      'There is no contemporary basis for it. Procopius, who was hostile enough to record it gladly, says nothing of the kind, and the story first appears centuries later.',
      'What did happen is duller and more plausible: he was briefly disgraced in 562 on a charge of conspiracy, his property was seized, and he was restored the following year. The legend grew out of that episode and out of a moral appetite for the fall of great men.'),
    S('Legacy',
      'He is the general who made Justinian\'s reconquest possible, and the practical demonstration that the eastern empire could still project force across the Mediterranean.',
      'He also demonstrated the limits of it. His campaigns succeeded because he could do more with less, which is not a strategy an empire can rely on, and the reconquest never had the resources to hold what he won.',
      'His posthumous reputation belongs largely to the invented story of his blinding, which says a great deal about later Europe and nothing whatever about the sixth century.')
  ],
  timeline: [
    { date: 'c. 500', title: 'Born', description: 'Born in the Balkans; entered the imperial guard and rose through service in the east.' },
    { date: '530', title: 'Victory at Dara', description: 'Defeats a much larger Persian army on the eastern frontier, making his reputation.' },
    { date: '532', title: 'Nika riots', description: 'One of the commanders who suppresses the rising in Constantinople, securing Justinian\'s throne.' },
    { date: '533', title: 'Ad Decimum', description: 'Destroys the Vandal field army ten miles from Carthage.', links: [{ title: 'Battle of Ad Decimum', type: 'event', slug: 'battle-of-ad-decimum' }] },
    { date: '533', title: 'Tricamarum', description: 'Breaks the last Vandal army; the kingdom collapses.', links: [{ title: 'Battle of Tricamarum', type: 'event', slug: 'battle-of-tricamarum' }] },
    { date: '534', title: 'Triumph in Constantinople', description: 'Granted a triumph, with Gelimer led in the procession — the last of its kind.' },
    { date: '535–540', title: 'The Gothic War', description: 'Takes Sicily, Naples and Rome, holds Rome through a year-long siege, and enters Ravenna.' },
    { date: '559', title: 'Last command', description: 'Drives off a Hunnic raid threatening Constantinople with a scratch force.' },
    { date: '565', title: 'Died', description: 'Died at Constantinople, months before the emperor he had served.' }
  ],
  relatedEntries: {
    people: [
      { title: 'Justinian I', type: 'person', slug: 'justinian-i', label: 'The emperor he served' },
      { title: 'Gelimer', type: 'person', slug: 'gelimer', label: 'The king he defeated and captured' }
    ],
    events: [
      { title: 'Vandalic War', type: 'event', slug: 'vandalic-war', label: 'The campaign he commanded' },
      { title: 'Battle of Ad Decimum', type: 'event', slug: 'battle-of-ad-decimum', label: 'His first victory in Africa' },
      { title: 'Battle of Tricamarum', type: 'event', slug: 'battle-of-tricamarum', label: 'The battle that ended the Vandal kingdom' }
    ],
    locations: [
      { title: 'Byzantine Empire', type: 'location', slug: 'byzantine-empire', label: 'The empire he fought for' },
      { title: 'Constantinople', type: 'location', slug: 'constantinople', label: 'Where he triumphed and died' }
    ]
  },
  sources: [
    { title: 'Procopius, History of the Wars', url: 'https://www.gutenberg.org/ebooks/16764', type: 'primary source' },
    { title: 'Belisarius', url: 'https://en.wikipedia.org/wiki/Belisarius', type: 'encyclopedia' },
    { title: 'Basilica of San Vitale, Ravenna', url: 'https://whc.unesco.org/en/list/788/', type: 'institution', institution: 'UNESCO World Heritage Centre' }
  ]
}

const gelimer = {
  id: 'gelimer', type: 'character', name: 'Gelimer',
  aliases: ['Geilamir'],
  born: 480, died: 553, deathAge: 'unknown',
  causeOfDeath: 'Unknown; he was alive on estates in Galatia after 534 and his death is not recorded.',
  restingPlace: 'Unknown',
  location: 'Carthage',
  title: 'King of the Vandals and Alans',
  roles: ['King'],
  image: img('AR 50 Denarii - Vandals - Gelimer - Carthage.jpg'),
  imageInfo: {
    caption: 'A silver coin of Gelimer struck at Carthage, carrying his name and title — the only contemporary likeness of the last Vandal king.',
    creator: 'Vandal mint, Carthage',
    date: '530–534',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:AR_50_Denarii_-_Vandals_-_Gelimer_-_Carthage.jpg',
    note: 'A contemporary object struck in his own reign, used because no portrait of Gelimer exists. Coin portraits of this period are conventional rather than individual likenesses. Public domain.'
  },
  summary: 'Gelimer was the last king of the Vandals, who seized the throne in 530 and lost his kingdom to Belisarius within four years.',
  overview: 'He is remembered less for how he ruled than for how he fell: undone at Ad Decimum by stopping to mourn his brother, and paraded through Constantinople reciting Ecclesiastes.',
  greatestFeats: [
    'Seized the Vandal throne from Hilderic in 530',
    'Rebuilt an army after Ad Decimum and fought again at Tricamarum',
    'Held out on Mount Papua through a winter siege before surrendering'
  ],
  birth: { date: 'c. 480', place: { name: 'The Vandal kingdom in Africa' } },
  death: { date: 'after 534', place: { name: 'Galatia' }, circumstance: 'Settled on estates in Galatia after his surrender; the date of his death is not recorded.' },
  quickFacts: { realm: 'Vandal Kingdom', dynasty: 'Hasding', culture: 'Vandal', knownFor: 'Losing the Vandal kingdom to Belisarius' },
  isRuler: true,
  succession: {
    office: 'King of the Vandals and Alans',
    predecessor: { displayName: 'Hilderic', note: 'His cousin, whom he deposed and imprisoned in 530 — the act Justinian used as his pretext for war. No article yet in this archive.' },
    successor: { status: 'office-ended', displayName: 'None — the kingdom was annexed', note: 'The Vandal kingdom was abolished in 534 and Africa became a Roman praetorian prefecture. There was no successor king.' }
  },
  contentSections: [
    S('Overview',
      'Gelimer was the last king of the Vandals and Alans, ruling from 530 until 534, when Belisarius destroyed his kingdom in a single campaign.',
      'He was a competent enough soldier and an unlucky one, and the two battles that ended his reign were both lost in ways that had more to do with timing than with generalship.',
      'What survives of him is largely Procopius\'s portrait, which is vivid, sympathetic in places, and written by the secretary of the man who defeated him.'),
    S('Birth and early life',
      'He was born around 480 into the Hasding royal house, the dynasty founded by Geiseric that had held Africa since 439.',
      'By the 520s he was the leading figure of the anti-Roman party at court, in opposition to King Hilderic, who was Catholic-leaning, friendly to Constantinople and unpopular with the Vandal nobility.',
      'In 530 he deposed and imprisoned Hilderic and took the throne — a move that had strong support at home and that handed Justinian precisely the pretext he wanted.'),
    S('Character and Personality',
      'Procopius portrays him as capable, pious in the Arian faith, and given to sudden emotion in a way that repeatedly cost him at the decisive moment.',
      'The defining episode is at Ad Decimum. With the battle in the balance and the Roman cavalry driven back, Gelimer came upon the body of his brother Ammatas and stopped to mourn and arrange his burial. The pause let Belisarius rally, and the battle was lost while the king was grieving.',
      'The other great scene is his surrender. Besieged through a winter on Mount Papua, he is said to have asked his Roman besieger for three things: a loaf of bread, a sponge, and a lyre — so that he could sing a lament for his own misfortune. The detail is Procopius at his most literary and should be read as such, but it is the image of Gelimer that has lasted.'),
    S('The loss of the kingdom',
      'When Belisarius landed in 533 Gelimer was caught badly out of position, with his best troops and his brother Tzazon away suppressing a revolt in Sardinia.',
      'His plan at Ad Decimum was sound — a three-part converging attack on the Roman column — and it failed on coordination, with each element arriving separately and being destroyed in turn.',
      'He recovered enough to gather another army with Tzazon\'s returning troops and fight again at Tricamarum in December, where Tzazon was killed and the Vandal army broke for good.'),
    S('Surrender and after',
      'He fled to Mount Papua in the Numidian highlands with a body of followers and was besieged there through the winter under conditions Procopius describes as wretched.',
      'He surrendered in the spring of 534 on a promise of honourable treatment, and was taken to Constantinople to walk in Belisarius\'s triumph.',
      'At the triumph he is said to have repeated the words of Ecclesiastes — vanity of vanities, all is vanity — as he was led past the emperor. He was offered patrician rank, refused to abandon Arianism and so could not receive it, and was settled with his family on estates in Galatia.'),
    S('Historical context',
      'The Vandal kingdom he inherited had been the dominant naval power of the western Mediterranean for a century, and had sacked Rome in 455.',
      'By the 530s it was militarily weaker than its reputation, divided over religion, and at odds with its Moorish neighbours, but the collapse was still faster than anyone in Constantinople expected.',
      'Justinian\'s stated cause was the restoration of the deposed Hilderic — who was murdered in prison during the campaign, removing the pretext and the alternative at once.'),
    S('Legacy',
      'He is the last of a line that had held Africa for a century, and his defeat ended Vandal history as a political fact within four years.',
      'His reputation rests almost entirely on Procopius, who gave him the two scenes everyone remembers — the mourning at Ad Decimum and the lyre on Mount Papua — and shaped him into a tragic figure rather than a tyrant.',
      'That shaping deserves scepticism. A defeated enemy who behaves with dignity flatters the victor, and Procopius was writing for the victor\'s side.')
  ],
  timeline: [
    { date: 'c. 480', title: 'Born', description: 'Born into the Hasding royal house of the Vandal kingdom in Africa.' },
    { date: '530', title: 'Seizes the throne', description: 'Deposes and imprisons his cousin Hilderic, giving Justinian his pretext for war.' },
    { date: '533', title: 'Belisarius lands', description: 'A Roman army lands in Africa unopposed while Gelimer\'s best troops are in Sardinia.' },
    { date: 'September 533', title: 'Ad Decimum', description: 'His converging attack fails; he loses the battle after stopping to mourn his brother.', links: [{ title: 'Battle of Ad Decimum', type: 'event', slug: 'battle-of-ad-decimum' }] },
    { date: 'December 533', title: 'Tricamarum', description: 'His last army is broken and his brother Tzazon killed.', links: [{ title: 'Battle of Tricamarum', type: 'event', slug: 'battle-of-tricamarum' }] },
    { date: '533–534', title: 'Besieged on Mount Papua', description: 'Holds out through the winter in the Numidian highlands before surrendering.' },
    { date: '534', title: 'Led in the triumph', description: 'Walks in Belisarius\'s triumph at Constantinople, reportedly reciting Ecclesiastes.' },
    { date: 'after 534', title: 'Settled in Galatia', description: 'Given estates in Galatia; refused patrician rank rather than abandon Arianism.' }
  ],
  relatedEntries: {
    people: [
      { title: 'Belisarius', type: 'person', slug: 'belisarius', label: 'The general who defeated and captured him' },
      { title: 'Justinian I', type: 'person', slug: 'justinian-i', label: 'The emperor who annexed his kingdom' }
    ],
    events: [
      { title: 'Vandalic War', type: 'event', slug: 'vandalic-war', label: 'The war that ended his reign' },
      { title: 'Battle of Ad Decimum', type: 'event', slug: 'battle-of-ad-decimum', label: 'His first defeat' },
      { title: 'Battle of Tricamarum', type: 'event', slug: 'battle-of-tricamarum', label: 'His final defeat' }
    ],
    locations: [
      { title: 'Vandal Kingdom', type: 'location', slug: 'vandal-kingdom', label: 'The realm he ruled and lost' }
    ]
  },
  sources: [
    { title: 'Procopius, History of the Wars', url: 'https://www.gutenberg.org/ebooks/16764', type: 'primary source' },
    { title: 'Gelimer', url: 'https://en.wikipedia.org/wiki/Gelimer', type: 'encyclopedia' },
    { title: 'Coin of Gelimer', url: 'https://commons.wikimedia.org/wiki/File:AR_50_Denarii_-_Vandals_-_Gelimer_-_Carthage.jpg', type: 'image source', institution: 'Wikimedia Commons' }
  ]
}

// ─── The Vandal Kingdom (anchor polity) ────────────────────────────────────────

const vandalKingdom = {
  id: 'vandal-kingdom', type: 'location', locationType: 'Kingdom',
  name: 'Vandal Kingdom', aliases: ['Kingdom of the Vandals and Alans', 'Regnum Vandalorum'],
  kingdom: 'Vandal Kingdom', year: 439,
  image: img('Kingdom of the Vandals and Alans - 476 AD.png'),
  imageInfo: {
    caption: 'The Vandal kingdom at its height in 476, holding North Africa with Sardinia, Corsica, the Balearics and western Sicily.',
    creator: 'Wikimedia Commons contributor',
    date: 'modern map of the 5th-century kingdom',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Kingdom_of_the_Vandals_and_Alans_-_476_AD.png',
    note: 'A modern map rather than a medieval one, used because it shows the kingdom\'s territorial extent — including the islands that made it a naval power — more clearly than any surviving source. Licensed CC BY 4.0.'
  },
  summary: 'The Vandal Kingdom held North Africa and the western Mediterranean islands from 439 to 534, and was the only barbarian successor state to build a serious navy.',
  overview: 'It took the richest provinces of the western empire, sacked Rome, and outlasted the western empire itself — then fell to Belisarius in a single campaign season.',
  knownFor: [
    'Seized Carthage and Roman Africa, the grain supply of the western empire.',
    'The only barbarian successor kingdom to become a naval power.',
    'Sacked Rome in 455, a fortnight of systematic plunder.',
    'Destroyed by Belisarius in about nine months in 533–534.'
  ],
  contentSections: [
    S('Overview',
      'The Vandal kingdom held Roman North Africa, together with Sardinia, Corsica, the Balearics and part of Sicily, from 439 until 534.',
      'It was the wealthiest of the barbarian successor states, because it took the richest provinces the western empire had — the grain and oil country whose surplus had fed Rome.',
      'It was also the only one to become a naval power, which made it a threat to the whole western Mediterranean rather than a regional kingdom.'),
    S('Origins and the crossing to Africa',
      'The Vandals entered the empire across the Rhine at the end of 406 and spent two decades moving through Gaul and Spain, absorbing the Alans, whose name their kings kept in their title thereafter.',
      'In 429 Geiseric took the whole people across the strait into Africa — a movement of tens of thousands, and one of the boldest decisions of the migration period.',
      'They took Carthage in 439, and a treaty with the western empire in 442 recognised their possession of the richest African provinces. What had been an invading confederation was now a state.'),
    S('Geiseric and the sea',
      'Geiseric ruled until 477 and made the kingdom what it was. Holding Carthage gave him the fleets and the harbours of Roman Africa, and he used them.',
      'In 455 he sailed on Rome and plundered it for a fortnight — more systematically and far less violently than the sack of 410, and the episode that attached the word "vandalism" to the name centuries later, quite unfairly.',
      'In 468 the eastern and western empires combined for an enormous seaborne expedition to destroy him, and he burned it in the bay of Carthage with fireships. That disaster crippled the western empire financially and was still remembered in Constantinople sixty years later, when Justinian\'s advisers begged him not to try again.'),
    S('Religion and division',
      'The Vandals were Arian Christians ruling a Nicene Catholic population, and unlike the Goths in Italy they made an issue of it.',
      'Huneric in particular persecuted the Catholic clergy in the 480s — exiles, confiscations and worse — and the memory of it left the African provincial population with no loyalty to the regime at all.',
      'That mattered in 533. When a Roman army landed, the towns did not resist and the countryside did not rise for its king, and the kingdom\'s internal weakness proved more decisive than its army.'),
    S('Major rulers',
      'Geiseric (428–477) is the founder in every sense: he led the crossing, took Carthage, built the fleet, sacked Rome and destroyed the expedition of 468. Everything the kingdom was, he made.',
      'Huneric (477–484) is remembered chiefly for the persecution of the Catholic church. Gunthamund (484–496) and Thrasamund (496–523) presided over a more settled and more Romanised court, with the persecution easing and Latin culture flourishing at Carthage.',
      'Hilderic (523–530) was friendly to Constantinople and tolerant of Catholics, which made him unpopular with the Vandal nobility; Gelimer deposed him in 530 and reigned until 534, when Belisarius destroyed the kingdom.'),
    S('Government, society and economy',
      'The kingdom ran on the Roman administration it inherited. Taxation, cities, law and landholding continued largely as before, with a Vandal landowning elite installed above them.',
      'Its wealth was agricultural and maritime: African grain and oil, and the shipping that moved them. Carthage remained one of the great cities of the Mediterranean throughout.',
      'The Vandals themselves were a small ruling minority, never numerous, and the distance between the Arian Vandal aristocracy and the Catholic Roman population was never closed.'),
    S('Fall',
      'Gelimer\'s deposition of Hilderic in 530 gave Justinian both a grievance and an opportunity, and in 533 Belisarius landed with about fifteen thousand men.',
      'The Vandal field army was beaten at Ad Decimum in September and again at Tricamarum in December, and Gelimer surrendered in the spring of 534 after a winter besieged on Mount Papua.',
      'Africa became a Roman praetorian prefecture. The Vandals ceased to exist as a political people within a generation, and their fighting men were drafted into eastern regiments and sent to the Persian frontier.'),
    S('Legacy',
      'The kingdom is the clearest case of a barbarian successor state that genuinely prospered — rich, naval, and secure enough to humiliate two empires at once — and then collapsed almost instantly when tested.',
      'Its reputation is largely a slander. "Vandalism" was coined in the eighteenth century, and the sack of 455 was a negotiated and comparatively disciplined plunder rather than an orgy of destruction.',
      'Its fall gave Justinian the confidence for the Italian war, which proved far harder and far longer, and which the Vandalic campaign had made look deceptively easy.')
  ],
  timeline: [
    { date: '406', title: 'Crossing of the Rhine', description: 'The Vandals enter the empire and begin two decades of movement through Gaul and Spain.' },
    { date: '429', title: 'Crossing to Africa', description: 'Geiseric takes the whole people across the strait into Roman North Africa.' },
    { date: '439', title: 'Capture of Carthage', description: 'Carthage falls, giving the Vandals the richest provinces of the west and its harbours.' },
    { date: '442', title: 'Treaty with the western empire', description: 'The western empire recognises Vandal possession of the African provinces.' },
    { date: '455', title: 'Sack of Rome', description: 'Geiseric plunders Rome for a fortnight, carrying off treasure and captives.' },
    { date: '468', title: 'The great expedition destroyed', description: 'A combined eastern and western fleet is burned in the bay of Carthage, crippling the western empire.' },
    { date: '477', title: 'Death of Geiseric', description: 'The founder dies after nearly fifty years, leaving the kingdom at its height.' },
    { date: '484', title: 'Persecution under Huneric', description: 'Catholic clergy are exiled and dispossessed, alienating the provincial population permanently.' },
    { date: '523', title: 'Accession of Hilderic', description: 'A king friendly to Constantinople and tolerant of Catholics, unpopular with the Vandal nobility.' },
    { date: '530', title: 'Gelimer seizes the throne', description: 'Hilderic is deposed and imprisoned, giving Justinian his pretext for war.' },
    { date: '533', title: 'Belisarius lands', description: 'A Roman army lands unopposed and wins at Ad Decimum in September.', links: [{ title: 'Battle of Ad Decimum', type: 'event', slug: 'battle-of-ad-decimum' }] },
    { date: '534', title: 'The kingdom is annexed', description: 'Gelimer surrenders; Africa becomes a Roman praetorian prefecture.', links: [{ title: 'Vandalic War', type: 'event', slug: 'vandalic-war' }] }
  ],
  relatedEntries: {
    people: [
      { title: 'Gelimer', type: 'person', slug: 'gelimer', label: 'Its last king' },
      { title: 'Belisarius', type: 'person', slug: 'belisarius', label: 'The general who destroyed it' },
      { title: 'Justinian I', type: 'person', slug: 'justinian-i', label: 'The emperor who annexed it' }
    ],
    events: [
      { title: 'Vandalic War', type: 'event', slug: 'vandalic-war', label: 'The war that ended it' },
      { title: 'Battle of Tricamarum', type: 'event', slug: 'battle-of-tricamarum', label: 'Where its last army was broken' }
    ],
    locations: [
      { title: 'Byzantine Empire', type: 'location', slug: 'byzantine-empire', label: 'The empire that annexed it' }
    ]
  },
  sources: [
    { title: 'Procopius, History of the Wars', url: 'https://www.gutenberg.org/ebooks/16764', type: 'primary source' },
    { title: 'Vandal Kingdom', url: 'https://en.wikipedia.org/wiki/Vandal_Kingdom', type: 'encyclopedia' },
    { title: 'British Museum — late antique Mediterranean collections', url: 'https://www.britishmuseum.org/collection', type: 'museum collection', institution: 'British Museum' }
  ]
}

// ─── Events ────────────────────────────────────────────────────────────────────

const romanSide = (strengthNote) => ({
  side: 'Eastern Roman army',
  factions: [{ name: 'Byzantine Empire', title: 'Byzantine Empire', type: 'location', slug: 'byzantine-empire' }],
  leaders: [{ name: 'Belisarius', title: 'Belisarius', type: 'person', slug: 'belisarius' }],
  strength: { display: 'c. 15,000', confidence: 'estimated', note: strengthNote, min: 13000, max: 16000 }
})
const vandalSide = (display, note) => ({
  side: 'Vandal army',
  factions: [{ name: 'Vandal Kingdom', title: 'Vandal Kingdom', type: 'location', slug: 'vandal-kingdom' }],
  leaders: [{ name: 'Gelimer', title: 'Gelimer', type: 'person', slug: 'gelimer' }],
  strength: { display, confidence: 'debated', note }
})

const vandalicWar = {
  id: 'vandalic-war', type: 'event', eventType: 'War', name: 'Vandalic War',
  year: 533, location: 'North Africa', eventLocation: 'The Vandal kingdom in North Africa',
  conflict: 'Justinian\'s wars of reconquest',
  image: img('Vandalic War campaign map.png'),
  imageInfo: {
    caption: 'The campaign of 533–534: the Roman landing, the march on Carthage, and the two battles that destroyed the Vandal kingdom.',
    creator: 'Wikimedia Commons contributor',
    date: 'modern map of the 533–534 campaign',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Vandalic_War_campaign_map.png',
    note: 'A modern campaign map, used because it shows the sequence of the war — landing, Ad Decimum, Carthage, Tricamarum, Mount Papua — more clearly than any surviving source. Licensed CC BY-SA 3.0.'
  },
  summary: 'The Vandalic War of 533–534 was Justinian\'s first war of reconquest, in which Belisarius destroyed the Vandal kingdom of North Africa in a single campaign season.',
  details: 'It was expected to fail, and instead took about nine months. Its success persuaded Justinian to attempt Italy, which took two decades and very nearly broke the empire.',
  outcome: 'Decisive Roman victory; the Vandal kingdom abolished and Africa annexed as a praetorian prefecture.',
  background: 'Gelimer deposed the pro-Roman king Hilderic in 530, giving Justinian a pretext. The court remembered the catastrophic expedition of 468 and opposed the war.',
  battle: 'Belisarius landed unopposed in 533, beat the Vandal field army at Ad Decimum and entered Carthage, then broke Gelimer\'s reformed army at Tricamarum in December.',
  aftermath: 'Gelimer surrendered in spring 534 and was led in a triumph at Constantinople. Africa was reorganised as a Roman prefecture, but Moorish revolts and army mutinies troubled it for years.',
  contentSections: [
    S('Overview',
      'The Vandalic War was Justinian\'s first attempt to reverse the collapse of the western empire, and by a wide margin his most successful.',
      'A Roman army of around fifteen thousand under Belisarius sailed for Africa in 533 and destroyed a kingdom that had held the richest provinces of the west for a century. The whole business took roughly nine months.',
      'Almost nothing about it was expected. The court in Constantinople had opposed the expedition, remembering that the last attempt on Carthage in 468 had bankrupted two empires.'),
    S('Background',
      'The Vandal kingdom had held Africa since 439 and had been the dominant naval power of the western Mediterranean, but by the 520s it was internally divided over religion and at odds with its Moorish neighbours.',
      'In 530 Gelimer deposed and imprisoned his cousin Hilderic, a king friendly to Constantinople and tolerant of the Catholic majority. Justinian demanded his restoration, was refused, and had his casus belli.',
      'His own advisers were against it. The disaster of 468, when a vast combined fleet was burned in the bay of Carthage, was still the reference point for what an African expedition cost.'),
    S('The campaign',
      'The fleet sailed in June 533 and landed in Africa unopposed, largely because Gelimer\'s best troops and his brother Tzazon were away suppressing a revolt in Sardinia.',
      'Belisarius marched on Carthage, imposed strict discipline to keep the provincial population neutral, and beat the Vandal army at Ad Decimum in September. Carthage opened its gates.',
      'Gelimer regrouped with Tzazon\'s returning troops and fought again at Tricamarum in December. That army broke too, Tzazon was killed, and the king fled to the Numidian highlands.'),
    S('Aftermath',
      'Gelimer held out on Mount Papua through the winter and surrendered in spring 534. He was taken to Constantinople and led in Belisarius\'s triumph — the first such procession for a private citizen in centuries and effectively the last of its kind.',
      'Africa was reorganised as a praetorian prefecture and its Vandal fighting men were drafted into eastern regiments and posted to the Persian frontier, where many promptly mutinied.',
      'The province was not quiet. Moorish revolts and mutinies among the Roman garrison troubled it for more than a decade, and holding Africa proved considerably harder than taking it.'),
    S('Significance',
      'It made the reconquest look possible. Justinian went into Italy the following year on the strength of this campaign, and the Gothic War that followed lasted two decades and did far more damage than it repaid.',
      'It also made Belisarius. He returned with a captive king, a triumph and a reputation that carried him through the rest of the reign.',
      'What it did not do was create a durable settlement. Africa stayed Roman for a century and a half, at real cost, until the Arab conquests removed it for good.'),
    S('Sources',
      'Almost everything known about this war comes from Procopius, who was Belisarius\'s legal secretary and present for the campaign.',
      'That gives an eyewitness account of unusual quality, with detail about terrain, logistics and decision-making that is rare for the period.',
      'It also gives an interested one. Procopius wrote to explain his patron\'s success, and the same man later wrote the Secret History, whose venom toward Justinian shows how much the public account was shaped. Both should be read together.')
  ],
  participants: [
    romanSide('The figure Procopius gives for the expeditionary force; it was small for the task and Belisarius never had all of it in one place.'),
    vandalSide('Unknown; probably comparable or larger', 'No reliable figures survive. Procopius gives no total for the Vandal army, and modern estimates range widely.')
  ],
  battleContinuity: {
    label: 'Follow the campaign to its first battle',
    battleSlug: 'battle-of-ad-decimum',
    relationship: 'same-campaign',
    reason: 'Ad Decimum was fought ten miles from Carthage in September 533 and decided the war within weeks of the landing; Gelimer\'s converging attack failed on timing and the road to the capital opened.'
  },
  relatedEntries: {
    people: [
      { title: 'Belisarius', type: 'person', slug: 'belisarius', label: 'Commanded the expedition' },
      { title: 'Justinian I', type: 'person', slug: 'justinian-i', label: 'Ordered the war' },
      { title: 'Gelimer', type: 'person', slug: 'gelimer', label: 'The king who lost the kingdom' }
    ],
    events: [
      { title: 'Battle of Ad Decimum', type: 'event', slug: 'battle-of-ad-decimum', label: 'The first battle of the campaign' },
      { title: 'Battle of Tricamarum', type: 'event', slug: 'battle-of-tricamarum', label: 'The battle that ended it' }
    ],
    locations: [
      { title: 'Vandal Kingdom', type: 'location', slug: 'vandal-kingdom', label: 'The realm destroyed' },
      { title: 'Byzantine Empire', type: 'location', slug: 'byzantine-empire', label: 'The empire that annexed it' }
    ]
  },
  sources: [
    { title: 'Procopius, History of the Wars', url: 'https://www.gutenberg.org/ebooks/16764', type: 'primary source' },
    { title: 'Vandalic War', url: 'https://en.wikipedia.org/wiki/Vandalic_War', type: 'encyclopedia' },
    { title: 'Vandalic War campaign map', url: 'https://commons.wikimedia.org/wiki/File:Vandalic_War_campaign_map.png', type: 'image source', institution: 'Wikimedia Commons' }
  ]
}

const adDecimum = {
  id: 'battle-of-ad-decimum', type: 'event', eventType: 'Battle', name: 'Battle of Ad Decimum',
  year: 533, location: 'Ad Decimum, ten miles from Carthage', eventLocation: 'Ad Decimum, on the road to Carthage',
  conflict: 'Vandalic War',
  image: img('Battle of Ad Decimum - First phase.svg'),
  imageInfo: {
    caption: 'The first phase of Ad Decimum: Gelimer\'s three converging columns and the Roman column advancing on Carthage.',
    creator: 'Wikimedia Commons contributor',
    date: 'modern diagram of the battle of 533',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Battle_of_Ad_Decimum_-_First_phase.svg',
    note: 'A modern reconstruction diagram, not a contemporary depiction. The battle is known only from Procopius, and any plan of it is an interpretation of his narrative. Licensed CC BY-SA 3.0.'
  },
  summary: 'At Ad Decimum on 13 September 533, Gelimer\'s plan to trap the Roman column ten miles from Carthage collapsed on timing, and Belisarius won the road to the city.',
  details: 'It is one of the clearest cases in military history of a good plan destroyed by coordination — and of a battle lost because a commander stopped to grieve.',
  outcome: 'Roman victory; Carthage opened its gates within days.',
  background: 'Belisarius had landed unopposed and was marching north on Carthage. Gelimer moved to trap the column at the tenth milestone.',
  battle: 'Three Vandal forces were to converge on the Roman column. They arrived separately, were beaten in turn, and Gelimer lost the initiative at the decisive moment.',
  aftermath: 'The Vandal army withdrew; Belisarius entered Carthage on 15 September and dined in the royal palace.',
  contentSections: [
    S('Overview',
      'Ad Decimum — "at the tenth milestone" — was fought on 13 September 533 on the road from the landing beaches to Carthage.',
      'Gelimer\'s plan was genuinely good: three forces converging simultaneously on a strung-out marching column, with his own troops closing the trap from behind.',
      'It failed entirely on timing, and the battle has become the standard illustration of what happens when a converging attack loses coordination.'),
    S('Background',
      'Belisarius had landed unopposed some days earlier and was marching north with his army in a long column, his cavalry screening ahead and the fleet shadowing the coast.',
      'Gelimer was behind him rather than in front, and saw the opportunity to catch the column between three forces at a defile where the road narrowed.',
      'His brother Ammatas was to come out from Carthage and block the head of the column, his nephew Gibamund to strike the flank across the plain, and Gelimer himself to fall on the rear.'),
    S('The battle',
      'Ammatas arrived early and with only part of his force, ran into the Roman advance guard, and was killed. His troops fled back toward Carthage, colliding with their own reinforcements coming the other way.',
      'Gibamund\'s flanking force was met by the Hunnic cavalry of the Roman army on the open plain and destroyed before it reached the column at all.',
      'Gelimer arrived last, drove back the Roman cavalry and for a moment held the field. Then he came upon his brother Ammatas\'s body, stopped to mourn and to arrange the burial, and let the initiative go. Belisarius rallied his cavalry, attacked, and the Vandal army broke.'),
    S('Aftermath',
      'The road to Carthage was open. Belisarius entered the city on 15 September and, in a scene Procopius clearly enjoyed, dined that evening in the Vandal royal palace on the meal prepared for Gelimer.',
      'He kept his army under strict discipline and paid for supplies, which kept the African population neutral — a decision that mattered more than the battle itself for what followed.',
      'Gelimer withdrew inland to gather what was left, and recalled his brother Tzazon and the Sardinian expedition.'),
    S('Significance',
      'The battle decided the campaign within weeks of the landing. A kingdom of a century fell because its field army was beaten in an afternoon on a road outside its capital.',
      'It is also the best surviving illustration of the coordination problem in pre-modern warfare. Three forces without communication cannot converge on a moving target, and Gelimer\'s plan required exactly that.',
      'The detail about the mourning is Procopius, and it should be treated with some care — a defeated enemy undone by brotherly grief is a very tidy story. But it is the account we have, from a man who was there.')
  ],
  participants: [
    romanSide('Only part of the expeditionary force was engaged; the advance guard and the Hunnic cavalry did most of the fighting.'),
    vandalSide('Unknown; split into three converging forces', 'No figures survive. What is certain is that the Vandal army was divided into three parts that never combined.')
  ],
  battleContinuity: {
    label: 'Follow the campaign to its decisive battle',
    battleSlug: 'battle-of-tricamarum',
    relationship: 'same-campaign',
    reason: 'Gelimer rebuilt an army around his brother Tzazon\'s troops recalled from Sardinia and fought again in December 533 at Tricamarum, where Tzazon was killed and the Vandal kingdom lost its last field force.'
  },
  relatedEntries: {
    people: [
      { title: 'Belisarius', type: 'person', slug: 'belisarius', label: 'Commanded the Roman army' },
      { title: 'Gelimer', type: 'person', slug: 'gelimer', label: 'Commanded the Vandal army' }
    ],
    events: [
      { title: 'Vandalic War', type: 'event', slug: 'vandalic-war', label: 'The campaign it belongs to' },
      { title: 'Battle of Tricamarum', type: 'event', slug: 'battle-of-tricamarum', label: 'The battle that followed' }
    ],
    locations: [
      { title: 'Vandal Kingdom', type: 'location', slug: 'vandal-kingdom', label: 'The realm defending itself' }
    ]
  },
  sources: [
    { title: 'Procopius, History of the Wars', url: 'https://www.gutenberg.org/ebooks/16764', type: 'primary source' },
    { title: 'Battle of Ad Decimum', url: 'https://en.wikipedia.org/wiki/Battle_of_Ad_Decimum', type: 'encyclopedia' },
    { title: 'Battle diagram', url: 'https://commons.wikimedia.org/wiki/File:Battle_of_Ad_Decimum_-_First_phase.svg', type: 'image source', institution: 'Wikimedia Commons' }
  ]
}

const tricamarum = {
  id: 'battle-of-tricamarum', type: 'event', eventType: 'Battle', name: 'Battle of Tricamarum',
  year: 533, location: 'Tricamarum, west of Carthage', eventLocation: 'Tricamarum, some twenty miles from Carthage',
  conflict: 'Vandalic War',
  image: img('Vandals and North Africa 533.png'),
  imageInfo: {
    caption: 'North Africa in 533: the Vandal kingdom in the year of Tricamarum, with Carthage and the theatre of the campaign.',
    creator: 'Wikimedia Commons contributor',
    date: 'modern map of the situation in 533',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Vandals_and_North_Africa_533.png',
    note: 'A map of the theatre in the year of the battle, used because no depiction of Tricamarum exists — the engagement is known only from Procopius and was never illustrated. Released CC0.'
  },
  summary: 'At Tricamarum in December 533, Belisarius broke the last Vandal field army. Gelimer\'s brother Tzazon was killed and the kingdom collapsed.',
  details: 'The battle was decided by a cavalry attack across a stream before the Roman infantry had even come up, and it ended a hundred years of Vandal Africa.',
  outcome: 'Decisive Roman victory; the Vandal army destroyed and the royal camp taken.',
  background: 'After Ad Decimum, Gelimer withdrew inland and rebuilt his army around the troops his brother Tzazon brought back from Sardinia.',
  battle: 'The Roman cavalry attacked across a small stream in three assaults. Tzazon was killed in the third, and the Vandal line broke.',
  aftermath: 'The Vandal camp with the royal treasure was taken. Gelimer fled to Mount Papua and surrendered in spring 534.',
  contentSections: [
    S('Overview',
      'Tricamarum was fought in December 533, some twenty miles from Carthage, and it destroyed what remained of the Vandal kingdom.',
      'Gelimer had spent the autumn rebuilding, and this was a real army rather than the improvised force of September — reinforced by the veteran troops his brother Tzazon had brought back from Sardinia.',
      'It lasted a matter of hours, and was decided by the Roman cavalry alone.'),
    S('Background',
      'After Ad Decimum, Gelimer withdrew inland and set about assembling everything the kingdom still had.',
      'Tzazon had been suppressing a revolt in Sardinia with the best of the Vandal army, and had been recalled the moment the Romans landed. His return gave Gelimer a serious force again.',
      'Gelimer also attempted to buy the Hunnic contingent out of the Roman army — a real danger, since their loyalty was genuinely uncertain, and Belisarius took considerable trouble to keep them.'),
    S('The battle',
      'The two armies met across a small stream. The Roman cavalry, arriving well ahead of the infantry, attacked without waiting for the rest of the army to come up.',
      'Three assaults went in across the stream. The Vandals held the first two, and in the third Tzazon was killed at the head of his troops.',
      'The Vandal line broke immediately after and fled to their camp, and when the Roman infantry finally arrived the camp was taken with the royal treasure in it. Gelimer had already ridden away.'),
    S('Aftermath',
      'The victory was cheap in Roman lives and total in effect. The Vandal kingdom had no army left, no treasury and no king in the field.',
      'Gelimer fled to Mount Papua in the Numidian highlands with a body of followers and was besieged there through the winter, surrendering in the spring of 534.',
      'Procopius, who was present, was more struck by the plunder than by the fighting, and his account of the Roman army losing its discipline among the Vandal camp\'s wealth is one of the sharper passages in the Wars.'),
    S('Significance',
      'It ended the Vandal kingdom. Between the landing in June and the surrender the following spring, a state that had held the richest provinces of the west for a century ceased to exist.',
      'It also confirmed a pattern that ran through Justinian\'s wars: a small, well-handled professional force could beat a larger one decisively, provided it was commanded by someone of the first rank.',
      'That lesson was drawn too confidently. Italy proved that the same approach against a more determined opponent produced twenty years of ruinous war rather than nine months of triumph.')
  ],
  participants: [
    romanSide('The cavalry engaged and won the battle before the infantry arrived, so the force actually fighting was a fraction of the whole.'),
    vandalSide('Unknown; probably larger than the Roman force', 'No figures survive. Procopius implies a Vandal numerical advantage but gives no total, and modern estimates are inferences from his narrative.')
  ],
  battleContinuity: {
    label: 'Where the eastern empire\'s military fortunes turned',
    battleSlug: 'battle-of-manzikert',
    relationship: 'same-factions',
    reason: 'Tricamarum is the high-water mark of the reconquest, won by a small professional army under a first-rate commander; at Manzikert in 1071 that same eastern Roman military system finally failed, and the empire lost Anatolia — the recruiting ground the whole model depended on.'
  },
  relatedEntries: {
    people: [
      { title: 'Belisarius', type: 'person', slug: 'belisarius', label: 'Commanded the Roman army' },
      { title: 'Gelimer', type: 'person', slug: 'gelimer', label: 'Commanded the Vandal army' }
    ],
    events: [
      { title: 'Vandalic War', type: 'event', slug: 'vandalic-war', label: 'The campaign it ended' },
      { title: 'Battle of Ad Decimum', type: 'event', slug: 'battle-of-ad-decimum', label: 'The battle that preceded it' }
    ],
    locations: [
      { title: 'Vandal Kingdom', type: 'location', slug: 'vandal-kingdom', label: 'The realm that fell with it' }
    ]
  },
  sources: [
    { title: 'Procopius, History of the Wars', url: 'https://www.gutenberg.org/ebooks/16764', type: 'primary source' },
    { title: 'Battle of Tricamarum', url: 'https://en.wikipedia.org/wiki/Battle_of_Tricamarum', type: 'encyclopedia' },
    { title: 'North Africa in 533', url: 'https://commons.wikimedia.org/wiki/File:Vandals_and_North_Africa_533.png', type: 'image source', institution: 'Wikimedia Commons' }
  ]
}

data.characters.push(justinian, belisarius, gelimer)
data.locations.push(vandalKingdom)
data.events.push(vandalicWar, adDecimum, tricamarum)

console.log('+ characters : justinian-i, belisarius, gelimer')
console.log('+ locations  : vandal-kingdom')
console.log('+ events     : vandalic-war, battle-of-ad-decimum, battle-of-tricamarum')

writeFileSync(dataPath, JSON.stringify(data, null, 2))
console.log(`\nM2 written — characters ${data.characters.length}, locations ${data.locations.length}, events ${data.events.length}`)
