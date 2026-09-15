/**
 * The three missing middle-Byzantine imperial houses: Heraclian, Isaurian and
 * Amorian.
 *
 * The gap the owner found: Michael III's Dynasty/House fact card was plain text
 * because no Amorian house article existed. The archive already held
 * house-of-komnenos, house-of-doukas and house-of-palaiologos — every Byzantine
 * house it had was LATE, covering the eleventh century to the fall, while Track A
 * has spent M4–M7 building emperors of the seventh to ninth. House↔Person
 * navigation worked for the empire's last four centuries and not for its middle
 * ones, which is backwards given where the archive is growing.
 *
 * The Macedonian dynasty is deliberately NOT created here: Basil I, Leo VI and
 * Basil II have no articles yet, so the house would have nobody to link. It comes
 * with M10 (Kleidion 1014, Basil II).
 *
 * Naming: the Komnenoi, Doukai and Palaiologoi are family names and take "House
 * of X". The Heraclians take one too. The Isaurians and Amorians do not — they
 * are named for regions (one of them wrongly), so the articles use the names the
 * sources and the scholarship use, and the aliases carry the rest.
 *
 * Images: no Byzantine dynasty bore a Western coat of arms, and the existing
 * Byzantine houses say so plainly in the `arms` field rather than inventing one.
 * Same convention here.
 */
import { readFileSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dataPath = path.join(__dirname, '../server/data/history.json')
const data = JSON.parse(readFileSync(dataPath, 'utf8'))
const S = (title, ...paragraphs) => ({ title, paragraphs })
const img = (f) => `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(f)}`
const NO_ARMS = 'The Byzantine emperors bore no Western coat of arms.'

const heraclian = {
  id: 'house-of-heraclius', type: 'house', name: 'House of Heraclius',
  aliases: ['Heraclian dynasty', 'Heraclians', 'Heraclian'],
  originYear: 610, endYear: 711, reignSpan: '610–711',
  region: 'Byzantine Empire',
  originPlace: 'Cappadocia, by way of the exarchate of Africa',
  arms: NO_ARMS,
  image: img('Constans II and sons.jpg'),
  imageInfo: {
    caption: 'A gold solidus of Constans II with his sons Constantine IV, Heraclius and Tiberius, struck at Constantinople around 661–663.',
    creator: 'Constantinople mint',
    date: 'c. 661–663',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Constans_II_and_sons.jpg',
    note: 'A contemporary object of the dynasty\'s third generation, showing the heavily bearded Constans II — grandson of Heraclius — with the sons who succeeded him. Coin portraits of this period are conventional images of office rather than likenesses. Licensed CC BY-SA 2.5.'
  },
  summary: 'The dynasty that ruled the eastern Roman empire from 610 to 711, destroyed Persia, lost the east to the Arab conquests, and turned a Latin empire into a Greek one.',
  overview: 'The House of Heraclius took the throne by revolt from Carthage and held it for a century in which the empire won the greatest victory in its history and then lost more than half its territory. Its emperors ended the four-hundred-year Persian rivalry, survived the Arab conquests and the first Arab blockade of Constantinople, and rebuilt the state on a smaller, Greek-speaking, permanently defensive footing.',
  founder: {
    personSlug: 'heraclius',
    displayName: 'Heraclius',
    note: 'Sailed from Carthage and deposed the usurper Phocas in 610'
  },
  seats: [
    { name: 'Constantinople', type: 'location', slug: 'constantinople' },
    { name: 'Byzantine Empire', type: 'location', slug: 'byzantine-empire' }
  ],
  notableMembers: [
    { personSlug: 'heraclius', displayName: 'Heraclius', note: 'r. 610–641; destroyed Persia at Nineveh, then lost Syria and Egypt to the Arabs' },
    { displayName: 'Constans II', note: 'r. 641–668; moved his court to Sicily and was murdered in his bath at Syracuse' },
    { displayName: 'Constantine IV', note: 'r. 668–685; broke the first Arab blockade of Constantinople with Greek fire' },
    { displayName: 'Justinian II', note: 'r. 685–695 and 705–711; deposed, mutilated, and the only emperor to return from exile and reign again' }
  ],
  familyTree: {
    caption: 'The Heraclian emperors, four generations from the revolt of 610 to the killing of Justinian II in 711.',
    root: {
      name: 'Heraclius',
      personSlug: 'heraclius',
      note: 'r. 610–641',
      children: [
        {
          name: 'Constantine III',
          note: 'r. 641; died within months of his accession',
          children: [
            {
              name: 'Constans II',
              note: 'r. 641–668; murdered at Syracuse',
              children: [
                {
                  name: 'Constantine IV',
                  note: 'r. 668–685; held the city against the Arab blockade',
                  children: [
                    { name: 'Justinian II', note: 'r. 685–695, 705–711; killed, ending the dynasty' }
                  ]
                }
              ]
            }
          ]
        },
        { name: 'Heraklonas', note: 'r. 641; deposed and mutilated in his first year' }
      ]
    }
  },
  contentSections: [
    S('Origins',
      'The dynasty came to power by revolt from the far edge of the empire. Heraclius the Elder was exarch of Africa, governing from Carthage, and in 608 he rebelled against the emperor Phocas, who had seized the throne in 602 by murdering Maurice and had since presided over military collapse.',
      'His son sailed for Constantinople and deposed Phocas in 610. The family was of Armenian descent and had made its career in the provincial military aristocracy rather than at court, which is a pattern that recurs through Byzantine history: the capital changes dynasty when a frontier general decides it should.',
      'What Heraclius inherited was a war he was losing. Persia held Syria and Palestine, Jerusalem fell in 614, and Egypt — the grain supply — was gone by 619.'),
    S('The Persian war and the great reversal',
      'From 622 Heraclius campaigned in person for six years, striking into Armenia and the Persian heartland instead of defending the lost provinces. In 626 the capital held against a combined Avar and Persian siege while he was away in the east, and in December 627 he destroyed the Persian field army at Nineveh.',
      'Khosrow II was deposed and executed within two months, the conquered provinces were returned, and the True Cross went back to Jerusalem in 630. It was the most complete victory the empire had won in centuries.',
      'It was also the most expensive. Both empires had spent a generation and their treasuries on the war, and both were left too weak to resist what came next.'),
    S('The Arab conquests',
      'Arab armies entered Syria in the mid-630s and the empire could not hold them. Syria, Palestine and Egypt were lost within a decade, and by the reign of Constans II the frontier had settled on the Taurus mountains, where it stayed for three hundred years.',
      'Constans II responded by moving west, taking his court to Syracuse in Sicily in 663 — a decision that looks like abandonment from Constantinople and like strategy from the Mediterranean, and which ended with his murder in his bath in 668.',
      'The dynasty\'s greatest defensive achievement came under his son. Constantine IV held Constantinople through the first sustained Arab attempt on the city between 674 and 678, and the campaign saw the first recorded use of Greek fire — the weapon that would save the city again in 717.'),
    S('Justinian II and the end',
      'Justinian II took the throne in 685 at sixteen and lost it in 695, when he was deposed, had his nose slit — a mutilation intended to disqualify him permanently — and was exiled to the Crimea.',
      'He came back. In 705 he retook Constantinople with Bulgar help and reigned a second time, wearing a gold nose, and spent six years pursuing the people who had deposed him.',
      'He was killed in 711 and his young son with him, ending the line. The empire then went through six emperors in six years, until a provincial general named Leo took the throne in 717 with an Umayyad army already marching on the capital.'),
    S('Legacy',
      'The Heraclians presided over the transformation that separates the eastern Roman empire from Byzantium as historians usually mean it. Greek replaced Latin as the language of state, the imperial title changed from Augustus to Basileus, and the provincial system began to be reorganised into the themes that would defend Anatolia for centuries.',
      'The territorial record is brutal: the dynasty inherited an empire holding Syria, Palestine, Egypt and North Africa and left one that held none of them. What it did leave was a state that had survived losing them, which no contemporary would have predicted in 640.',
      'Greek fire, the themes, and a capital that had learned it could be held against anything are the three inheritances the Isaurians used to stop the Arab conquests at the walls in 718.')
  ],
  timeline: [
    { date: '608', title: 'Revolt from Carthage', description: 'The exarch of Africa rebels against the emperor Phocas.' },
    { date: '610', title: 'Heraclius takes the throne', description: 'He deposes and executes Phocas, inheriting a war the empire is losing.', links: [{ title: 'Heraclius', type: 'person', slug: 'heraclius' }] },
    { date: '626', title: 'The Avar siege fails', description: 'Constantinople holds against a combined Avar and Persian attack while the emperor is in the east.', links: [{ title: 'Siege of Constantinople (626)', type: 'event', slug: 'siege-of-constantinople-626' }] },
    { date: '627', title: 'Nineveh', description: 'Heraclius destroys the Persian field army and ends four centuries of rivalry.', links: [{ title: 'Battle of Nineveh', type: 'event', slug: 'battle-of-nineveh' }] },
    { date: '636–642', title: 'The east is lost', description: 'Arab armies take Syria, Palestine and Egypt from an exhausted empire.' },
    { date: '663', title: 'The court moves to Syracuse', description: 'Constans II relocates west; he is murdered in Sicily five years later.' },
    { date: '674–678', title: 'The first Arab blockade', description: 'Constantine IV holds Constantinople, in the campaign that gives the first record of Greek fire.' },
    { date: '695', title: 'Justinian II deposed and mutilated', description: 'His nose is slit to disqualify him from the throne, and he is exiled to the Crimea.' },
    { date: '705', title: 'Justinian II restored', description: 'He retakes the city with Bulgar help and reigns a second time.' },
    { date: '711', title: 'The dynasty ends', description: 'Justinian II and his son are killed; six emperors follow in six years.' }
  ],
  relatedEntries: {
    people: [
      { title: 'Heraclius', type: 'person', slug: 'heraclius', label: 'Founder of the dynasty' },
      { title: 'Leo III', type: 'person', slug: 'leo-iii-the-isaurian', label: 'Took the throne six years after the dynasty ended' }
    ],
    events: [
      { title: 'Siege of Constantinople (626)', type: 'event', slug: 'siege-of-constantinople-626', label: 'The capital held in the founder\'s absence' },
      { title: 'Battle of Nineveh', type: 'event', slug: 'battle-of-nineveh', label: 'The dynasty\'s greatest victory' }
    ],
    locations: [
      { title: 'Byzantine Empire', type: 'location', slug: 'byzantine-empire', label: 'The realm it ruled for a century' },
      { title: 'Sasanian Empire', type: 'location', slug: 'sasanian-empire', label: 'The empire it destroyed, at ruinous cost' }
    ]
  },
  sources: [
    { title: 'Theophanes the Confessor, Chronicle', url: 'https://en.wikipedia.org/wiki/Theophanes_the_Confessor', type: 'primary source' },
    { title: 'Heraclian dynasty', url: 'https://en.wikipedia.org/wiki/Heraclian_dynasty', type: 'encyclopedia' },
    { title: 'Dumbarton Oaks — Byzantine Collection', url: 'https://www.doaks.org/resources/coins', type: 'museum collection', institution: 'Dumbarton Oaks' }
  ]
}

const isaurian = {
  id: 'isaurian-dynasty', type: 'house', name: 'Isaurian dynasty',
  aliases: ['House of Leo', 'Isaurians', 'Syrian dynasty', 'Isaurian'],
  originYear: 717, endYear: 802, reignSpan: '717–802',
  region: 'Byzantine Empire',
  originPlace: 'Germanikeia in northern Syria — not Isauria',
  arms: NO_ARMS,
  image: img('Istanbul Hagia Eirene Apse in 2016 08 0990.jpg'),
  imageInfo: {
    caption: 'The apse of Hagia Irene in Constantinople, where a plain mosaic cross stands in the place a figural image would have occupied.',
    creator: 'Dosseman',
    date: 'photographed 2016; the mosaic of the eighth century',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Istanbul_Hagia_Eirene_Apse_in_2016_08_0990.jpg',
    note: 'The best-surviving monument of iconoclast art, in a church rebuilt under Constantine V after the earthquake of 740. The cross is not decoration but doctrine: it is what the dynasty put in churches instead of saints. Licensed CC BY-SA 4.0.'
  },
  summary: 'The dynasty that saved Constantinople from the Umayyad siege of 717–718, ruled for eighty-five years, and made iconoclasm imperial policy.',
  overview: 'The Isaurian dynasty took the throne in the worst year the empire had faced and held the capital against a twelve-month Arab siege in its first. Its emperors rebuilt the army and the law, went over to the offensive against Bulgars and Arabs, and enforced the removal of religious images — the policy that decided how every history of them would be written. It ended with Irene, the first woman to rule the empire in her own name, who restored the icons and deposed her own son.',
  founder: {
    personSlug: 'leo-iii-the-isaurian',
    displayName: 'Leo III',
    note: 'Strategos of the Anatolics; took the throne in March 717'
  },
  seats: [
    { name: 'Constantinople', type: 'location', slug: 'constantinople' },
    { name: 'Byzantine Empire', type: 'location', slug: 'byzantine-empire' }
  ],
  notableMembers: [
    { personSlug: 'leo-iii-the-isaurian', displayName: 'Leo III', note: 'r. 717–741; held the city against the Umayyad siege and began iconoclasm' },
    { personSlug: 'constantine-v', displayName: 'Constantine V', note: 'r. 741–775; the dynasty\'s best soldier and its most committed iconoclast' },
    { displayName: 'Leo IV', note: 'r. 775–780; called "the Khazar" from his mother, and relaxed the persecution of monks' },
    { displayName: 'Irene', note: 'Regent from 780, sole ruler 797–802; restored the icons and blinded her own son to keep power' },
    { displayName: 'Constantine VI', note: 'r. 780–797; deposed and blinded by his mother, ending the male line' }
  ],
  familyTree: {
    caption: 'The Isaurian emperors. Irene ruled first as regent for her son Constantine VI and then in her own name, having had him blinded. ⚭ marks a marriage.',
    root: {
      name: 'Leo III',
      personSlug: 'leo-iii-the-isaurian',
      note: 'r. 717–741',
      children: [
        {
          name: 'Constantine V',
          personSlug: 'constantine-v',
          note: 'r. 741–775',
          children: [
            {
              name: 'Leo IV the Khazar',
              note: 'r. 775–780',
              spouse: { name: 'Irene of Athens' },
              children: [
                { name: 'Constantine VI', note: 'r. 780–797; blinded by his mother' }
              ]
            }
          ]
        }
      ]
    }
  },
  contentSections: [
    S('Origins and the wrong name',
      'The dynasty is named for a region it did not come from. Leo III was born at Germanikeia in northern Syria, in territory the caliphate had taken, and his family was resettled in Thrace under Justinian II. Isauria is in southern Anatolia; the label appears in later sources and has stuck regardless of the geography.',
      'He rose as a soldier under Justinian II and by 716 commanded the Anatolic theme, the largest and most exposed military province, facing an Umayyad invasion that everyone knew was coming.',
      'He took Constantinople in March 717 from Theodosius III, who abdicated rather than fight him with an enemy army approaching. It was the sixth usurpation in twenty years, and it was accepted because the alternative was worse.'),
    S('The siege and the recovery',
      'The Umayyad army reached the walls five months after his coronation and stayed for a year. Greek fire destroyed the fleet, an exceptional winter starved the besiegers, and the siege was lifted in August 718.',
      'The dynasty then spent eight decades converting survival into strength. Leo III reorganised the themes, split the oversized commands that had produced so many usurpers, and issued the Ecloga — a short, practical revision of Roman law in Greek rather than Latin.',
      'Constantine V went further and went on the offensive: nine campaigns against the Bulgars, raids across the Taurus into Syria, and the creation of the tagmata, professional regiments stationed near the capital and loyal to the emperor rather than to a provincial general.'),
    S('Iconoclasm',
      'From the 720s Leo III moved against religious images, and in 754 Constantine V called a council at Hieria that declared their veneration heretical. Enforcement fell hardest on the monasteries, which were the centres of resistance: monks were humiliated, imprisoned and in some cases killed, and monastic property was confiscated.',
      'The apse of Hagia Irene shows what the policy looked like in practice — a plain cross where a figure of Christ or the Virgin would have stood. It is the best-surviving iconoclast monument in the city.',
      'Almost everything known about the dynasty\'s theology comes through the writings of the people who defeated it. The Second Council of Nicaea condemned Hieria in 787, iconoclasm was finally abandoned in 843, and the surviving histories were written by the winning side.'),
    S('Irene and the end',
      'Leo IV died in 780 leaving a nine-year-old son, Constantine VI, and a widow, Irene of Athens, who governed as regent. She reversed the religious policy, restoring the veneration of images at the Second Council of Nicaea in 787.',
      'Her son came of age and pushed her aside, and she spent a decade manoeuvring to get back. In 797 she had him blinded — in the same room in which she had given birth to him, according to the chronicles — and ruled in her own name as emperor rather than empress, the first woman to do so.',
      'She was deposed in 802 by her finance minister Nikephoros and died in exile on Lesbos the following year. The dynasty founded on saving the empire ended with a mother destroying her son to keep his throne.'),
    S('Legacy',
      'The Isaurians left the state institutionally stronger than they found it: the themes reorganised, the tagmata created, the law rewritten in the language people actually spoke, the capital repopulated after the plague of 747 and its aqueduct rebuilt.',
      'They also left a religious settlement that was condemned as heresy within a generation of the last iconoclast emperor, which is why their reputation had to be reconstructed by modern historians out of what their enemies could not deny.',
      'The most consequential thing they did was the simplest. They stopped the Arab conquest at the walls of Constantinople in 718, and the frontier they established on the Taurus held until the eleventh century.')
  ],
  timeline: [
    { date: '717', title: 'Leo III takes the throne', description: 'The strategos of the Anatolics deposes Theodosius III with an Umayyad army approaching.', links: [{ title: 'Leo III', type: 'person', slug: 'leo-iii-the-isaurian' }] },
    { date: '717–718', title: 'The Umayyad siege fails', description: 'Twelve months of blockade end with the Arab fleet burned and the army starved.', links: [{ title: 'Siege of Constantinople (717–718)', type: 'event', slug: 'siege-of-constantinople-717' }] },
    { date: '726', title: 'The Ecloga', description: 'A short practical revision of Roman law is issued in Greek, and the move against images begins.' },
    { date: '740', title: 'Akroinon', description: 'Leo III and Constantine V destroy the last great Umayyad raiding army in Anatolia.', links: [{ title: 'Battle of Akroinon', type: 'event', slug: 'battle-of-akroinon' }] },
    { date: '754', title: 'The Council of Hieria', description: 'Constantine V has the veneration of images declared heretical by a council of over three hundred bishops.' },
    { date: '763', title: 'Victory at Anchialos', description: 'The most complete of Constantine V\'s nine campaigns against the Bulgars.' },
    { date: '787', title: 'Nicaea II restores the icons', description: 'The regent Irene reverses the dynasty\'s religious policy at the Second Council of Nicaea.' },
    { date: '797', title: 'Irene blinds her son', description: 'Constantine VI is deposed and blinded; Irene rules in her own name as emperor.' },
    { date: '802', title: 'The dynasty ends', description: 'Irene is deposed by her finance minister Nikephoros and dies in exile on Lesbos.' }
  ],
  relatedEntries: {
    people: [
      { title: 'Leo III', type: 'person', slug: 'leo-iii-the-isaurian', label: 'Founder of the dynasty' },
      { title: 'Constantine V', type: 'person', slug: 'constantine-v', label: 'Its best soldier and most committed iconoclast' }
    ],
    events: [
      { title: 'Siege of Constantinople (717–718)', type: 'event', slug: 'siege-of-constantinople-717', label: 'The siege it was founded on surviving' },
      { title: 'Battle of Akroinon', type: 'event', slug: 'battle-of-akroinon', label: 'Father and son fighting together in 740' }
    ],
    locations: [
      { title: 'Byzantine Empire', type: 'location', slug: 'byzantine-empire', label: 'The realm it ruled for eighty-five years' },
      { title: 'Umayyad Caliphate', type: 'location', slug: 'umayyad-caliphate', label: 'The power it stopped at the walls' }
    ]
  },
  sources: [
    { title: 'Theophanes the Confessor, Chronicle', url: 'https://en.wikipedia.org/wiki/Theophanes_the_Confessor', type: 'primary source' },
    { title: 'Isaurian dynasty', url: 'https://en.wikipedia.org/wiki/Isaurian_dynasty', type: 'encyclopedia' },
    { title: 'Dumbarton Oaks — Byzantine Collection', url: 'https://www.doaks.org/resources/coins', type: 'museum collection', institution: 'Dumbarton Oaks' }
  ]
}

const amorian = {
  id: 'amorian-dynasty', type: 'house', name: 'Amorian dynasty',
  aliases: ['Phrygian dynasty', 'Amorians', 'House of Amorion', 'Amorian'],
  originYear: 820, endYear: 867, reignSpan: '820–867',
  region: 'Byzantine Empire',
  originPlace: 'Amorion in Phrygia, central Anatolia',
  arms: NO_ARMS,
  image: img('Solidus of the byzantine emperor Theophilus.jpg'),
  imageInfo: {
    caption: 'A gold solidus of Theophilos, the second Amorian emperor and the last iconoclast, in the Numismatic Museum in Athens.',
    creator: 'Constantinople mint; photographed by Tilemahos Efthimiadis',
    date: 'struck 829–842; photographed 2009',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Solidus_of_the_byzantine_emperor_Theophilus.jpg',
    note: 'A contemporary object of the dynasty, photographed in its museum case. The bust is a conventional image of imperial office rather than a likeness — which is all Byzantine coinage ever offers. Licensed CC BY 2.0.'
  },
  summary: 'The short Byzantine dynasty of 820–867, which ended iconoclasm, turned the eastern frontier in the empire\'s favour, and was extinguished by the murder of its last emperor.',
  overview: 'The Amorian dynasty ruled for less than fifty years and packed most of the ninth century\'s achievements into them: the final restoration of the icons in 843, the destruction of the emirate of Melitene at the Lalakaon in 863, the mission of Cyril and Methodius to the Slavs, and the conversion of Bulgaria. It came to power by an assassination in a palace chapel and ended with one in a bedchamber.',
  founder: {
    displayName: 'Michael II',
    note: 'Called "the Amorian" and "the Stammerer"; seized the throne in 820'
  },
  seats: [
    { name: 'Constantinople', type: 'location', slug: 'constantinople' },
    { name: 'Byzantine Empire', type: 'location', slug: 'byzantine-empire' }
  ],
  notableMembers: [
    { displayName: 'Michael II', note: 'r. 820–829; took the throne by murdering Leo V in the palace chapel' },
    { displayName: 'Theophilos', note: 'r. 829–842; the last iconoclast emperor, and a notable patron of learning' },
    { displayName: 'Theodora', note: 'Empress and regent 842–856; restored the veneration of icons in 843' },
    { personSlug: 'michael-iii', displayName: 'Michael III', note: 'r. 842–867; murdered by Basil I, and recorded by Basil\'s historians as a drunk' },
    { personSlug: 'petronas', displayName: 'Petronas', note: 'Theodora\'s brother; won the Lalakaon in 863' }
  ],
  familyTree: {
    caption: 'The Amorian emperors. Theodora governed as regent for her son Michael III, and her brothers Bardas and Petronas held the state\'s highest offices. ⚭ marks a marriage.',
    root: {
      name: 'Michael II the Amorian',
      note: 'r. 820–829',
      children: [
        {
          name: 'Theophilos',
          note: 'r. 829–842; the last iconoclast emperor',
          spouse: { name: 'Theodora', note: 'Regent 842–856; restored the icons' },
          children: [
            { name: 'Michael III', personSlug: 'michael-iii', note: 'r. 842–867; murdered by Basil the Macedonian' }
          ]
        }
      ]
    }
  },
  contentSections: [
    S('Origins',
      'Michael II came from Amorion in Phrygia, a garrison city in central Anatolia, and rose through the army as a companion of the emperor Leo V. In 820 he was condemned to death for conspiracy, and his supporters killed Leo in the palace chapel on Christmas morning before the sentence could be carried out.',
      'He was brought from his cell to the throne still wearing his fetters, which nobody could find the key to. The dynasty began, in other words, in exactly the manner it would end.',
      'He was called "the Stammerer" and was mocked by the capital\'s aristocracy as a provincial soldier. His reign was spent putting down the revolt of Thomas the Slav, which nearly took Constantinople, and losing Crete and much of Sicily to Muslim expansion.'),
    S('Theophilos and the sack of Amorion',
      'Theophilos, who ruled from 829 to 842, was the most conspicuously cultured emperor of the century: he rebuilt the palace with mechanical golden birds and roaring lions in the throne room, patronised the mathematician Leo, and heard legal petitions in person on public rides through the city.',
      'He was also the last iconoclast emperor, reviving a policy that had been dormant, and he fought the Abbasids continuously and mostly without success.',
      'In 838 the caliph al-Mu\'tasim marched on the dynasty\'s own home city and destroyed it. The sack of Amorion killed or enslaved most of its population and was chosen deliberately to humiliate the ruling house, and Byzantine tradition remembered the forty-two officers taken to Samarra and executed there as martyrs.'),
    S('Theodora and the restoration of the icons',
      'Theophilos died in 842 leaving a two-year-old son, and his widow Theodora governed as regent. In 843 she ended iconoclasm, restoring the veneration of images and holding the synod commemorated in the Orthodox calendar as the Triumph of Orthodoxy.',
      'She managed the reversal with unusual care. Her husband had been an iconoclast and she protected his memory, insisting he had repented before death, and the settlement was made without a purge — which is a large part of why it held where the restoration of 787 had not.',
      'She was pushed out in 856 by her brother Bardas, who governed as Caesar for the next decade while her son held the title. Her other brother, Petronas, took the eastern command.'),
    S('The reign of Michael III',
      'The 860s are among the most consequential decades in Byzantine history and almost none of it is credited to the emperor whose reign it was. Petronas destroyed the army of the emir of Melitene at the Lalakaon in 863, ending the annual raiding that had defined the eastern frontier for two centuries.',
      'In the same year Cyril and Methodius were sent to the Slavs, producing an alphabet and a liturgical language that outlasted every institution involved; in 864 the Bulgar khan Boris accepted Christianity from Constantinople; and in 860 a Rus\' fleet appeared before the walls, the first appearance of a power that would matter for centuries.',
      'The Abbasid caliphate was meanwhile collapsing into the anarchy at Samarra, which is the other half of why the eastern frontier moved. Byzantine recovery and caliphal disintegration met in this reign.'),
    S('The end and the reputation',
      'Michael III raised a Macedonian groom named Basil to co-emperor in 866, after Basil had arranged the murder of Bardas. In September 867 Basil had Michael killed in his bedchamber and took the throne, founding the dynasty that ruled for nearly two centuries.',
      'The histories of the Amorian dynasty were then written by and for that dynasty. Michael III became "the Drunkard", a squanderer whose removal was a deliverance, and the achievements of his reign were quietly reassigned or ignored.',
      'The distortion is unusually complete and unusually well understood, which makes this dynasty one of the clearest cases in the archive of a record written by the winners. Modern historians credit the reign with the eastern turn, the Slavonic mission and the Bulgar conversion, while noting the credit belongs largely to Theodora, Bardas, Petronas and the patriarch Photios.')
  ],
  timeline: [
    { date: '820', title: 'Michael II takes the throne', description: 'Leo V is murdered in the palace chapel on Christmas morning and Michael is crowned still in his fetters.' },
    { date: '821–823', title: 'The revolt of Thomas the Slav', description: 'A rebellion besieges Constantinople and nearly ends the dynasty in its third year.' },
    { date: '829', title: 'Accession of Theophilos', description: 'The last iconoclast emperor begins a reign of continuous war with the Abbasids and conspicuous patronage at home.' },
    { date: '838', title: 'Amorion sacked', description: 'Al-Mu\'tasim destroys the dynasty\'s home city; the forty-two officers taken to Samarra are remembered as martyrs.' },
    { date: '843', title: 'The icons restored', description: 'The regent Theodora ends iconoclasm at the synod kept as the Triumph of Orthodoxy.' },
    { date: '856', title: 'Bardas takes power', description: 'Theodora is pushed aside; her brother governs as Caesar and her son reigns in name.' },
    { date: '860', title: 'The Rus\' before the walls', description: 'A seaborne raid reaches the capital, the first appearance of the Rus\' in Byzantine history.' },
    { date: '863', title: 'Lalakaon', description: 'Petronas destroys the army of the emir of Melitene, reversing the eastern frontier.', links: [{ title: 'Battle of Lalakaon', type: 'event', slug: 'battle-of-lalakaon' }] },
    { date: '863', title: 'The Slavonic mission', description: 'Cyril and Methodius are sent to Great Moravia and devise a written Slavonic language.' },
    { date: '864', title: 'Bulgaria converted', description: 'The khan Boris accepts Christianity from Constantinople.' },
    { date: '867', title: 'The dynasty ends', description: 'Basil the Macedonian murders Michael III and founds the Macedonian dynasty.', links: [{ title: 'Michael III', type: 'person', slug: 'michael-iii' }] }
  ],
  relatedEntries: {
    people: [
      { title: 'Michael III', type: 'person', slug: 'michael-iii', label: 'Its last emperor, murdered in 867' },
      { title: 'Petronas', type: 'person', slug: 'petronas', label: 'Brother of the empress Theodora, and victor of the Lalakaon' }
    ],
    events: [
      { title: 'Battle of Lalakaon', type: 'event', slug: 'battle-of-lalakaon', label: 'The victory of its final reign' }
    ],
    locations: [
      { title: 'Byzantine Empire', type: 'location', slug: 'byzantine-empire', label: 'The realm it ruled for forty-seven years' },
      { title: 'Abbasid Caliphate', type: 'location', slug: 'abbasid-caliphate', label: 'Which sacked its home city in 838, and collapsed during its last reign' },
      { title: 'Emirate of Melitene', type: 'location', slug: 'emirate-of-melitene', label: 'Destroyed as a raiding power under its last emperor' }
    ]
  },
  sources: [
    { title: 'Theophanes Continuatus', url: 'https://en.wikipedia.org/wiki/Theophanes_Continuatus', type: 'primary source' },
    { title: 'Amorian dynasty', url: 'https://en.wikipedia.org/wiki/Amorian_dynasty', type: 'encyclopedia' },
    { title: 'Numismatic Museum, Athens', url: 'https://www.nummus.gr/', type: 'museum collection', institution: 'Numismatic Museum of Athens' }
  ]
}

data.houses.push(heraclian, isaurian, amorian)

// ── Link the people back to their houses ──────────────────────────────────────
// The Dynasty/House fact card resolves through quickFacts.dynasty, so the value
// on each person must match the house name or one of its aliases exactly.
const push = (arr, item) => { if (!arr.some((x) => x.slug === item.slug)) arr.push(item) }
const chr = (id) => data.characters.find((c) => c.id === id)

const houseRef = (title, slug, label) => ({ title, type: 'house', slug, label })

for (const [personId, expected] of [
  ['heraclius', 'Heraclian dynasty'],
  ['leo-iii-the-isaurian', 'Isaurian dynasty'],
  ['constantine-v', 'Isaurian dynasty'],
  ['michael-iii', 'Amorian dynasty']
]) {
  const person = chr(personId)
  const actual = person.quickFacts?.dynasty
  console.log(`  ${personId}: dynasty "${actual}" ${actual === expected ? '✓ resolves' : '✗ MISMATCH, expected ' + expected}`)
}

// Petronas is not a ruler and carries a descriptive dynasty string rather than a
// house name; point it at the house properly now that one exists.
const petronas = chr('petronas')
petronas.quickFacts.dynasty = 'Amorian dynasty'

console.log('+ houses : house-of-heraclius, isaurian-dynasty, amorian-dynasty')
console.log('~ petronas quickFacts.dynasty -> "Amorian dynasty"')

writeFileSync(dataPath, JSON.stringify(data, null, 2))
console.log(`\nHouses written — houses ${data.houses.length}`)
