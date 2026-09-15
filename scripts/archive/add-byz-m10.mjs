/**
 * TRACK A, M10 — Kleidion 1014 and the end of the First Bulgarian Empire.
 *
 * Five articles: the battle, the First Bulgarian Empire as an anchor realm,
 * Basil II, Samuel of Bulgaria, and the Macedonian dynasty as a House.
 *
 * The house is not optional here. Romanos II (M8) and Basil II (this milestone)
 * are both Macedonian rulers, which trips validateDynastyHouseCoverage — the rule
 * added at the owner's instruction earlier today. It fires exactly as designed,
 * on the first milestone after it was written. Basil I, Leo VI and Constantine
 * VII are listed in the house by name pending their articles in the M8b backfill,
 * which follows immediately.
 *
 * THE AGREED CORRECTION, and it governs the whole battle article:
 *   • **The blinding is Skylitzes, writing about 1070** — some fifty-five years
 *     after the battle, not a contemporary account. The article reports it as
 *     what a later chronicler wrote, with the doubts modern historians attach.
 *   • **Bulgaria did not fall in 1014.** It fought on for four more years and was
 *     annexed in 1018. Kleidion is decisive in the way a long war's turning point
 *     is decisive, not because it ended anything that summer.
 * "Boulgaroktonos" gets the same treatment: it is not a contemporary title and
 * appears about a century and a half after Basil's death, so it is recorded in
 * the epithets card typed as a later epithet with the date stated.
 *
 * IMAGE CATCH WORTH RECORDING. Commons's "Samuil of bolgaria reconstruction.jpg"
 * — which is the English Wikipedia's lead image for Samuel — shows a forensic
 * bust whose museum card, legible in the photograph, reads "Яромир
 * Пшемыслович": Jaromír of the Přemyslids, a Bohemian duke, not Samuel of
 * Bulgaria. It is not used here. Samuel's article leads with his fortress at
 * Ohrid instead, captioned to say no likeness of him survives.
 */
import { readFileSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dataPath = path.join(__dirname, '../server/data/history.json')
const data = JSON.parse(readFileSync(dataPath, 'utf8'))
const S = (title, ...paragraphs) => ({ title, paragraphs })
const img = (f) => `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(f)}`

const kleidion = {
  id: 'battle-of-kleidion', type: 'event', eventType: 'Battle', name: 'Battle of Kleidion',
  aliases: ['Battle of Belasitsa', 'Battle of the Kleidion Pass'],
  year: 1014,
  location: 'The Kleidion pass, in the Belasica mountains',
  eventLocation: 'The valley of the Struma at Kleidion, between the Belasica and Ograzhden mountains',
  conflict: 'The Byzantine–Bulgarian wars',
  image: img('66-manasses-chronicle.jpg'),
  imageInfo: {
    caption: 'Basil II\'s cavalry defeating Samuel\'s Bulgarians, and below, Samuel dying as the blinded soldiers return, in a fourteenth-century Manasses Chronicle miniature.',
    creator: 'Manuscript of the Constantine Manasses Chronicle',
    date: '14th century',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:66-manasses-chronicle.jpg',
    note: 'A Bulgarian manuscript of the fourteenth century, three hundred years after the battle, illustrating the story as the chronicle tradition had settled it — including the blinding, which is itself a later account. Public domain.'
  },
  summary: 'On 29 July 1014 Basil II destroyed Samuel\'s army in the Kleidion pass by sending a force over the mountain onto its rear. The mass blinding that followed is the most famous atrocity in Byzantine history — and it is reported by a chronicler writing fifty-five years later.',
  details: 'The turning point of a twenty-year war that still took four more years to finish.',
  outcome: 'Decisive Byzantine victory; the Bulgarian field army destroyed and thousands captured.',
  background: 'Basil II had been grinding down Samuel\'s empire since the 990s, taking fortresses and refusing pitched battle.',
  battle: 'A frontal assault on the palisaded pass failed; Nikephoros Xiphias led a detachment over Mount Belasica and attacked from behind.',
  aftermath: 'Samuel died two months later. Bulgarian resistance continued under his successors until the annexation of 1018.',
  contentSections: [
    S('Overview',
      'By 1014 Basil II had been at war with Samuel of Bulgaria for most of thirty years, and had learned how to fight him: not by seeking a decisive battle, but by taking fortresses one at a time, campaigning every year, and refusing to be drawn into the mountains on Bulgarian terms.',
      'That summer Samuel tried to stop him at Kleidion, a narrow point in the valley of the Struma between the Belasica and Ograzhden ranges, by blocking the pass with a palisade and holding it in strength. Basil\'s frontal attacks failed.',
      'The battle was decided by a flank march. Nikephoros Xiphias took a detachment over the shoulder of Mount Belasica and came down behind the Bulgarian position on 29 July, and the army in the pass broke between the two forces.'),
    S('Background',
      'The First Bulgarian Empire had been beaten once already, by John Tzimiskes in 971, and had recovered under a new leadership in the west — Samuel and his brothers, the sons of a provincial governor, who rebuilt a Bulgarian state around Ohrid while Basil II was fighting civil wars at home.',
      'Basil\'s early attempt to deal with them ended in humiliation at Trajan\'s Gate in 986, where his army was ambushed in a pass and he escaped with difficulty. It is the defeat that shaped his later method.',
      'From about 1000 he campaigned in Bulgaria every year with a professional army and a system: reduce the fortresses, garrison them, come back next spring. It was slow, expensive, and it worked, and by 1014 Samuel was defending a shrinking territory against an opponent who no longer made mistakes.'),
    S('The battle',
      'Samuel fortified the pass at Kleidion — the name means "the key" — with a wooden palisade and a strong force, and for several days the Byzantine assaults were beaten back with heavy loss.',
      'Basil then detached Nikephoros Xiphias, the strategos of Philippopolis, with orders to work round the position. Xiphias took his men over the steep ground of Mount Belasica and descended behind the Bulgarian line on 29 July.',
      'Attacked front and rear in a confined valley, the Bulgarian army disintegrated. Samuel escaped only because his son Gabriel Radomir got him out; the rest of the army was killed or taken, and the sources put the prisoners in the region of fourteen or fifteen thousand.'),
    S('The blinding, and who reported it',
      'The story everyone knows is this: Basil had the prisoners blinded, ninety-nine men in every hundred, leaving one in each hundred with a single eye to guide the rest home; Samuel saw the column arrive at Prilep, collapsed, and died two days later.',
      'It needs stating plainly where that comes from. The account is in John Skylitzes, who wrote around 1070 — about fifty-five years after the battle — and it is not in the contemporary or near-contemporary material. Yahya of Antioch, writing much closer to the events, does not describe it.',
      'Modern historians divide on it. Some accept a mass blinding on a smaller scale, since blinding was a routine Byzantine punishment and the mutilation of prisoners is well attested elsewhere; others regard the numbers and the arithmetic of one guide per hundred as a literary construction. What can be said is that Samuel did die on 6 October 1014, and that the story was firmly established in the Byzantine tradition within two generations. This archive reports it as what Skylitzes wrote, because that is what it is.'),
    S('What Kleidion did not do',
      'It did not end the war. This is the point most popular accounts get wrong, and it matters for judging both men.',
      'Samuel died in October 1014 and was succeeded by his son Gabriel Radomir, who was murdered by his cousin Ivan Vladislav, who fought on and died besieging Dyrrhachium in 1018. Only then did the Bulgarian nobility come to terms, and the annexation was completed that year — four years after the battle.',
      'Basil spent those four years doing what he had done for the previous fourteen: taking fortresses, accepting surrenders, and campaigning every season. Kleidion destroyed the Bulgarian field army and, in the chronicle tradition, killed its ruler. The state it belonged to took four more years to finish.'),
    S('Significance',
      'The annexation of 1018 ended three and a half centuries of Bulgarian independence and put the Byzantine frontier back on the Danube for the first time since the seventh century. It is the high-water mark of the medieval empire.',
      'It is also the source of Basil\'s posthumous name. He was called Boulgaroktonos, the Bulgar-slayer, but not by his contemporaries: the epithet appears about a century and a half after his death, when the empire had lost the Balkans again and needed the memory of the emperor who had held them.',
      'For Bulgaria the battle became something else entirely — a national memory of catastrophe and endurance, commemorated in modern monuments, and the reason the Belasica pass is a place of pilgrimage rather than a footnote.'),
    S('Sources',
      'The principal narrative is John Skylitzes, writing around 1070 and drawing on earlier material now lost, and everything vivid about Kleidion comes from him.',
      'Yahya of Antioch, an Arabic-language Christian chronicler who wrote much closer to the events, covers Basil\'s Bulgarian wars without the blinding episode. Later Bulgarian and Byzantine tradition follows Skylitzes, and the Manasses Chronicle miniature used here is a fourteenth-century illustration of his story.',
      'So the shape is secure — a battle at Kleidion in July 1014, a Byzantine victory by flank march, Samuel\'s death in October — and the single most famous detail rests on one chronicler working two generations later. Saying so is not scepticism for its own sake; it is the difference between a fact and a tradition.')
  ],
  timeline: [
    { date: '976', title: 'The Cometopuli rise', description: 'The sons of Count Nicholas, Samuel among them, rebuild a Bulgarian state in the west as Basil II faces civil war at home.' },
    { date: '986', title: 'Trajan\'s Gate', description: 'Samuel ambushes and destroys Basil\'s army in a mountain pass; the emperor escapes with difficulty.' },
    { date: 'c. 1000–1014', title: 'The grinding campaigns', description: 'Basil campaigns in Bulgaria annually, reducing fortresses and refusing pitched battle.' },
    { date: '29 July 1014', title: 'Kleidion', description: 'Nikephoros Xiphias flanks the palisaded pass over Mount Belasica and the Bulgarian army is destroyed.' },
    { date: '6 October 1014', title: 'Death of Samuel', description: 'Samuel dies at Prilep; Skylitzes, writing about 1070, attributes it to the shock of seeing the blinded prisoners return.' },
    { date: '1015', title: 'Gabriel Radomir murdered', description: 'Samuel\'s son and successor is killed by his cousin Ivan Vladislav, who continues the war.' },
    { date: '1018', title: 'Bulgaria annexed', description: 'Ivan Vladislav dies at Dyrrhachium and the Bulgarian nobility submits; the frontier returns to the Danube.' }
  ],
  participants: [
    {
      side: 'Byzantine Empire',
      factions: [{ name: 'Byzantine Empire', title: 'Byzantine Empire', type: 'location', slug: 'byzantine-empire' }],
      leaders: [
        { name: 'Basil II', title: 'Basil II', type: 'person', slug: 'basil-ii' },
        { name: 'Nikephoros Xiphias', note: 'No article: the strategos of Philippopolis whose flank march over Mount Belasica decided the battle. He later rebelled against Basil and was tonsured; no image of him survives.' }
      ],
      strength: { display: 'Unknown; the imperial field army after fourteen years of annual campaigning', confidence: 'unknown', note: 'No reliable figure survives for either side. The sources are interested in the prisoners rather than in the armies.' }
    },
    {
      side: 'First Bulgarian Empire',
      factions: [{ name: 'First Bulgarian Empire', title: 'First Bulgarian Empire', type: 'location', slug: 'first-bulgarian-empire' }],
      leaders: [{ name: 'Samuel of Bulgaria', title: 'Samuel of Bulgaria', type: 'person', slug: 'samuel-of-bulgaria' }],
      strength: { display: 'Chronicle figures give c. 14,000–15,000 taken prisoner; the army\'s size is not recorded', confidence: 'chronicle-claim', note: 'The prisoner figure comes from Skylitzes, writing about 1070, and is bound up with the blinding story that rests on the same source. It should not be read as a count of the army.' }
    }
  ],
  battleContinuity: {
    label: 'Continue to where this empire was lost',
    battleSlug: 'battle-of-manzikert',
    relationship: 'chronological-follow-up',
    reason: 'Kleidion and the annexation of 1018 gave the empire its greatest extent since Justinian; within fifty years of Basil II\'s death Manzikert opened Anatolia to the Seljuks and the position he built came apart.'
  },
  relatedEntries: {
    people: [
      { title: 'Basil II', type: 'person', slug: 'basil-ii', label: 'Commanded, and took his posthumous name from this war' },
      { title: 'Samuel of Bulgaria', type: 'person', slug: 'samuel-of-bulgaria', label: 'Lost his army here and died ten weeks later' }
    ],
    events: [
      { title: 'Battle of Manzikert', type: 'event', slug: 'battle-of-manzikert', label: 'Where the empire this victory built was undone' }
    ],
    locations: [
      { title: 'First Bulgarian Empire', type: 'location', slug: 'first-bulgarian-empire', label: 'Annexed four years after this battle' },
      { title: 'Byzantine Empire', type: 'location', slug: 'byzantine-empire', label: 'Restored to the Danube for the first time since the 600s' }
    ]
  },
  sources: [
    { title: 'John Skylitzes, Synopsis of Histories', url: 'https://en.wikipedia.org/wiki/John_Skylitzes', type: 'primary source' },
    { title: 'Yahya of Antioch, Chronicle', url: 'https://en.wikipedia.org/wiki/Yahya_of_Antioch', type: 'primary source' },
    { title: 'Battle of Kleidion', url: 'https://en.wikipedia.org/wiki/Battle_of_Kleidion', type: 'encyclopedia' },
    { title: 'Dumbarton Oaks — Byzantine studies', url: 'https://www.doaks.org/research/byzantine', type: 'academic resource', institution: 'Dumbarton Oaks' }
  ]
}

const bulgaria = {
  id: 'first-bulgarian-empire', type: 'location', locationType: 'Empire',
  name: 'First Bulgarian Empire', aliases: ['Bulgarian Empire', 'Bulgaria', 'Danube Bulgaria'],
  kingdom: 'First Bulgarian Empire', year: 681,
  image: img('Madara Rider 2016.jpg'),
  imageInfo: {
    caption: 'The Madara Rider, a relief cut into a cliff face in north-eastern Bulgaria in the early eighth century, showing a horseman spearing a lion with a dog behind him.',
    creator: 'PlusUA',
    date: 'photographed 2016; the relief of the early 8th century',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Madara_Rider_2016.jpg',
    note: 'The only surviving monumental relief of its kind in Europe, carved for the early Bulgar khans and surrounded by Greek inscriptions recording their treaties with Byzantium. Heavily weathered, and its exact subject is debated. Licensed CC BY-SA 4.0.'
  },
  summary: 'The First Bulgarian Empire ruled the eastern Balkans from 681 to 1018, converted to Christianity, gave the Slavs their alphabet, and was annexed by Basil II after a war of thirty years.',
  overview: 'The state that forced the Byzantine empire to recognise a rival emperor in Europe, and that produced the literary language of Orthodox Slavdom.',
  knownFor: [
    'Founded in 681 when Asparuh\'s Bulgars defeated Constantine IV and forced the empire to pay tribute.',
    'Khan Krum killed the emperor Nikephoros I in 811 and had his skull made into a drinking cup.',
    'Converted to Christianity under Boris I in 864 and adopted the Slavonic liturgy.',
    'Under Simeon I its ruler took the title of tsar and besieged Constantinople.',
    'Annexed by Basil II in 1018 after the defeat at Kleidion four years earlier.'
  ],
  contentSections: [
    S('Overview',
      'The First Bulgarian Empire was founded on the lower Danube in 681 and lasted until 1018 — three and a half centuries during which it was the Byzantine empire\'s most persistent European neighbour, its most dangerous one, and eventually its province.',
      'It began as a steppe khanate: Bulgar horsemen under Asparuh who crossed the Danube, beat a Roman army, and settled among a Slavic population they came to rule and eventually to merge with.',
      'It ended as a Christian, Slavonic-speaking empire whose ruler claimed the title of emperor and whose churchmen created the written language of Orthodox Slavdom — which is why its cultural afterlife is larger than its political record.'),
    S('Foundation',
      'The Bulgars were a Turkic steppe people who moved west from the Pontic grasslands under pressure from the Khazars. In 680 Asparuh crossed the Danube into imperial territory, and the emperor Constantine IV led an expedition to remove him.',
      'The campaign failed badly, and in 681 the empire signed a treaty recognising Bulgar control of the lands between the Danube and the Balkan range, and agreeing to pay tribute. It is one of the very few occasions on which Constantinople formally conceded imperial territory to a new state on its own doorstep.',
      'The new khanate ruled a majority Slavic population from a capital at Pliska, and the relationship between the Bulgar ruling group and its Slavic subjects — which ended in a fused, Slavic-speaking people — is the central social fact of its history.'),
    S('The khans and the wars',
      'The eighth and early ninth centuries were a long contest with the empire, and Bulgaria won more of it than the Byzantine sources like to admit. Tervel intervened decisively in imperial politics and, by one tradition, at the Arab siege of Constantinople in 718.',
      'Krum, who ruled from about 803 to 814, is the most formidable of them. He destroyed the emperor Nikephoros I and his army in a mountain pass in 811 — the first emperor killed by a foreign enemy since 378 — and had the skull mounted in silver as a drinking cup, an act the Byzantine tradition never forgot.',
      'His successors consolidated rather than expanded. Omurtag built in stone, kept the peace, and left inscriptions in Greek recording his treaties, which are among the best evidence for how the early Bulgarian state actually worked.'),
    S('Christianity and the alphabet',
      'Boris I accepted Christianity from Constantinople in 864, choosing the Byzantine church over the Frankish one after playing them against each other, and imposed it on a nobility that revolted and was destroyed for it.',
      'The decision that mattered more came next. When the disciples of Cyril and Methodius were expelled from Moravia, Boris took them in, and the schools at Preslav and Ohrid developed their work into the Cyrillic alphabet and a full Slavonic liturgy and literature.',
      'This is Bulgaria\'s largest contribution to European history. Old Church Slavonic became the liturgical and literary language of the Orthodox Slavs — Serbia, Rus\' and eventually Russia — and the alphabet is still in use from Sofia to Vladivostok.'),
    S('Major rulers',
      'Asparuh (c. 681–700) founded the state on the Danube. Tervel (700–721) made and unmade Byzantine emperors and campaigned as far as Constantinople.',
      'Krum (c. 803–814) destroyed Nikephoros I and his army in 811 and nearly took the capital. Boris I (852–889) converted the country and sheltered the Slavonic mission. Simeon I (893–927) is the golden age: educated in Constantinople, he fought the empire for thirty years, took the title tsar, and turned Preslav into a capital of letters.',
      'Peter I (927–969) kept a long peace. Samuel (997–1014), of the later western dynasty, fought Basil II for thirty years, and Ivan Vladislav (1015–1018) was the last, dying at Dyrrhachium in the year the empire ended.'),
    S('Simeon and the imperial claim',
      'Simeon I is the ruler who forced the Byzantines to take Bulgaria seriously as a rival rather than a nuisance. He had been educated in Constantinople, spoke and wrote Greek, and understood exactly what imperial legitimacy consisted of.',
      'He beat Byzantine armies repeatedly, appeared before the walls of Constantinople, and extracted recognition as basileus — emperor — of the Bulgarians. No other medieval ruler in Europe obtained that concession from Constantinople.',
      'His Preslav was a deliberate rival capital, with a golden church, a literary school and a court modelled on the one he had studied in. The claim did not survive him intact, but the precedent did.'),
    S('Decline and annexation',
      'Peter I\'s long reign kept peace with the empire and lost ground at home to the Bogomil movement and to a nobility that had stopped paying for wars. In 968 Nikephoros II invited Sviatoslav of Kiev to attack Bulgaria as a proxy, and the Rus\' came, won, and stayed.',
      'John Tzimiskes expelled the Rus\' in 971 and annexed eastern Bulgaria, deposing its tsar in Constantinople. What survived was in the west, where the Cometopuli — the sons of Count Nicholas — built a second Bulgarian state around Ohrid under Samuel.',
      'That state fought Basil II for thirty years, lost its army at Kleidion in 1014, and submitted in 1018. Bulgaria then spent 167 years as Byzantine provinces before the second empire was proclaimed in 1185.'),
    S('Legacy',
      'The alphabet is the thing that outlasted everything. Cyrillic and the Slavonic literary tradition went out from Preslav and Ohrid to Serbia and to Rus\', and shaped the religious and literary culture of eastern Europe permanently.',
      'Politically the empire is the demonstration that the Byzantine Balkans were never securely Byzantine. Bulgaria took territory from the empire, extracted tribute and imperial recognition, and although Basil II ended it, a second Bulgarian empire replaced it within two centuries.',
      'And Kleidion gave it a memory. The battle and the blinded army became the central image of Bulgarian national history in the modern period, which is a large afterlife for an episode that rests on a single chronicler writing two generations later.')
  ],
  timeline: [
    { date: '681', title: 'The empire founded', description: 'Asparuh defeats Constantine IV and Byzantium recognises a Bulgar state south of the Danube, with tribute.' },
    { date: '718', title: 'Bulgars at Constantinople', description: 'A Bulgar army attacks the Arab besiegers of the capital; the sources disagree over whether Tervel or Kormesiy led it.', links: [{ title: 'Siege of Constantinople (717–718)', type: 'event', slug: 'siege-of-constantinople-717' }] },
    { date: '811', title: 'Krum destroys an emperor', description: 'Nikephoros I and his army are annihilated in a mountain pass and his skull is made into a drinking cup.' },
    { date: '864', title: 'Boris I converts', description: 'Bulgaria accepts Christianity from Constantinople after weighing the Frankish alternative.' },
    { date: 'c. 886', title: 'The Slavonic schools', description: 'Disciples of Cyril and Methodius are received at Preslav and Ohrid; Cyrillic and a Slavonic literature develop.' },
    { date: '913–927', title: 'Simeon\'s imperial claim', description: 'Simeon I takes the title of tsar and is recognised by Constantinople as emperor of the Bulgarians.' },
    { date: '971', title: 'Eastern Bulgaria annexed', description: 'John Tzimiskes expels the Rus\' and deposes the tsar; the state survives only in the west.' },
    { date: '976', title: 'The Cometopuli', description: 'The sons of Count Nicholas rebuild a Bulgarian state around Ohrid.' },
    { date: '1014', title: 'Kleidion', description: 'Basil II destroys Samuel\'s army in the Belasica mountains.', links: [{ title: 'Battle of Kleidion', type: 'event', slug: 'battle-of-kleidion' }] },
    { date: '1018', title: 'Annexation', description: 'The Bulgarian nobility submits and the empire\'s frontier returns to the Danube.' },
    { date: '1185', title: 'The second empire', description: 'Bulgarian independence is restored after 167 years of Byzantine rule.' }
  ],
  relatedEntries: {
    people: [
      { title: 'Samuel of Bulgaria', type: 'person', slug: 'samuel-of-bulgaria', label: 'Its last great ruler' },
      { title: 'Basil II', type: 'person', slug: 'basil-ii', label: 'The emperor who annexed it in 1018' },
      { title: 'John I Tzimiskes', type: 'person', slug: 'john-i-tzimiskes', label: 'Annexed its eastern half in 971' }
    ],
    events: [
      { title: 'Battle of Kleidion', type: 'event', slug: 'battle-of-kleidion', label: 'Where its field army was destroyed' },
      { title: 'Siege of Constantinople (717–718)', type: 'event', slug: 'siege-of-constantinople-717', label: 'Where its Bulgars attacked the Arab besiegers' }
    ],
    locations: [
      { title: 'Byzantine Empire', type: 'location', slug: 'byzantine-empire', label: 'Its neighbour, opponent and eventual conqueror' },
      { title: 'Kievan Rus', type: 'location', slug: 'kievan-rus', label: 'Whose invasion in 968 began its collapse' }
    ]
  },
  sources: [
    { title: 'John Skylitzes, Synopsis of Histories', url: 'https://en.wikipedia.org/wiki/John_Skylitzes', type: 'primary source' },
    { title: 'Theophanes the Confessor, Chronicle', url: 'https://en.wikipedia.org/wiki/Theophanes_the_Confessor', type: 'primary source' },
    { title: 'First Bulgarian Empire', url: 'https://en.wikipedia.org/wiki/First_Bulgarian_Empire', type: 'encyclopedia' },
    { title: 'Dumbarton Oaks — Byzantine studies', url: 'https://www.doaks.org/research/byzantine', type: 'academic resource', institution: 'Dumbarton Oaks' }
  ]
}

const basilII = {
  id: 'basil-ii', type: 'character', name: 'Basil II',
  aliases: ['Basil II Boulgaroktonos', 'Basileios II', 'Basil the Bulgar-slayer'],
  born: 958, died: 1025, deathAge: 'about 67',
  causeOfDeath: 'Died on 15 December 1025 while preparing an expedition to recover Sicily.',
  restingPlace: 'Church of St John the Theologian at the Hebdomon, outside Constantinople — by his own choice, not the imperial mausoleum',
  location: 'Constantinople',
  title: 'Emperor of the Romans',
  roles: ['Emperor', 'Commander'],
  image: img('Basilios II.jpg'),
  imageInfo: {
    caption: 'Basil II in armour, crowned by an angel and standing over prostrate suppliants, in the frontispiece of his own psalter.',
    creator: 'Constantinople, imperial workshop',
    date: 'early 11th century',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Basilios_II.jpg',
    note: 'A reproduction of the frontispiece of the Psalter of Basil II in the Biblioteca Marciana in Venice, made in his own reign and under his own direction. It is the closest thing to an official self-portrait any Byzantine emperor left: no throne, no court, armour and a spear, and the defeated at his feet. Public domain.'
  },
  epithets: [
    { name: 'Boulgaroktonos', type: 'later epithet', note: 'The "Bulgar-slayer". Not contemporary — it appears about a century and a half after his death, when the empire had lost the Balkans and needed the memory.' }
  ],
  summary: 'Basil II reigned for forty-nine years, the longest in Byzantine history, annexed Bulgaria after a thirty-year war, and left the empire at its greatest extent since Justinian and its treasury full.',
  overview: 'A soldier-emperor who spent his reign in camp, never married, wrote no laws he did not need, and left an empire that began to come apart within thirty years of his death.',
  greatestFeats: [
    'Destroyed Samuel\'s army at Kleidion in 1014 and annexed Bulgaria in 1018',
    'Survived thirteen years of civil war against the great families and then broke their power by law',
    'Left the treasury full and the frontier on the Danube and the Euphrates'
  ],
  birth: { date: '958', place: { name: 'Constantinople', slug: 'constantinople' } },
  death: { date: '1025', place: { name: 'Constantinople', slug: 'constantinople' }, circumstance: 'Died on 15 December 1025 aged about sixty-seven, planning the reconquest of Sicily, and was buried outside the walls at his own request.' },
  quickFacts: { realm: 'Eastern Roman Empire', dynasty: 'Macedonian dynasty', culture: 'Roman', knownFor: 'The conquest of Bulgaria and the empire\'s greatest medieval extent' },
  isRuler: true,
  succession: {
    office: 'Emperor of the Romans',
    predecessor: { personSlug: 'john-i-tzimiskes', displayName: 'John I Tzimiskes', note: 'His guardian and senior co-emperor, who had murdered Nikephoros II; Basil had been a nominal co-emperor since childhood and took power in his own right on Tzimiskes\'s death in 976.' },
    successor: { displayName: 'Constantine VIII', note: 'His brother, co-emperor in name for half a century and sole ruler for three undistinguished years. Basil never married and left no child, and the dynasty ended with his nieces.' }
  },
  contentSections: [
    S('Overview',
      'Basil II came to the throne in name as a child in 960 and in fact in 976, and ruled until 1025 — forty-nine years, the longest reign in the empire\'s history.',
      'He spent the first thirteen of them fighting for survival against the great Anatolian military families who had made and unmade the previous three emperors, and most of the remaining thirty-six on campaign, principally against Bulgaria.',
      'What he left was an empire stretching from the Danube to the Euphrates, a full treasury, a broken aristocracy — and no heir, because he never married. Within half a century of his death the position had been lost.'),
    S('Birth and early life',
      'He was born in 958 to Romanos II and the empress Theophano, and was crowned co-emperor as a small child. His father died when he was five, and his mother married Nikephoros Phokas, who ruled as senior emperor until he was murdered.',
      'John Tzimiskes then ruled for seven years while Basil and his brother Constantine remained co-emperors in name. It is a remarkable fact of his childhood that two successive soldier-emperors took the senior throne over him and neither had him killed.',
      'He took power in his own right in 976 at eighteen, under the tutelage of the chamberlain Basil Lekapenos, and spent the next decade discovering that the throne and the power were different things.'),
    S('Character and Personality',
      'Psellos, writing a generation later, gives the fullest portrait, and it is of a man who deliberately made himself into an instrument. Short, unimpressive on horseback, brusque in speech, indifferent to ceremony, dress and the pleasures the court existed to provide.',
      'He lived in camp for most of forty years, ate with the soldiers, kept no mistress that anyone recorded and never married — an extraordinary omission for an emperor with a dynasty to continue, and one contemporaries could not explain either.',
      'The early humiliations explain a good deal: the defeat at Trajan\'s Gate in 986, the two great rebellions that nearly took his throne, and the discovery that his own chief minister was governing without him. What emerged was a suspicious, tireless, methodical ruler who trusted procedure over people and never again risked a battle he had not arranged.'),
    S('The civil wars',
      'Bardas Skleros rebelled in 976 and Bardas Phokas — nephew of Nikephoros II — in 987, and between them they nearly ended the Macedonian dynasty. At one point Phokas held all of Anatolia and was proclaimed emperor.',
      'Basil survived by an alliance that changed European history. He asked Vladimir of Kiev for troops, and got six thousand Rus\' warriors in exchange for the hand of his sister Anna — a porphyrogenita, born in the purple, whose marriage to a foreign ruler was against every Byzantine precedent.',
      'The price included Vladimir\'s conversion, and the Christianisation of the Rus\' followed. The six thousand Rus\' became the Varangian Guard, and Basil destroyed Phokas at Abydos in 989 with their help. He then spent years dismantling the families that had rebelled.'),
    S('The Bulgarian war',
      'Samuel of Bulgaria had rebuilt a Bulgarian state in the west while Basil was fighting for his throne, and in 986 he destroyed Basil\'s army at Trajan\'s Gate. It was the emperor\'s only serious defeat and it determined how he fought afterwards.',
      'From about 1000 he campaigned in Bulgaria nearly every year: taking fortresses, garrisoning them, refusing battle unless it was on his terms, and coming back the following spring. It was a strategy of exhaustion, and it took fourteen years.',
      'At Kleidion in July 1014 the Bulgarian army was destroyed by a flank march over Mount Belasica, and Samuel died in October. The war nonetheless ran until 1018, when the Bulgarian nobility submitted and the empire\'s frontier returned to the Danube for the first time in three and a half centuries.'),
    S('Government',
      'His domestic policy was a war on the great landowners, whom he blamed for the rebellions and for swallowing the soldier-farmers the army was recruited from. The allelengyon of 1002 made the powerful liable for the unpaid taxes of the poor in their districts, which was as unpopular with them as it sounds.',
      'He was careful with money in a way no previous emperor of the century had been, and he died with a reserve reported in the region of two hundred thousand pounds of gold — a figure that says more about the state\'s capacity than any narrative could.',
      'He founded nothing, built little, patronised no literature to speak of, and issued no great law code. The empire he handed on was a going concern rather than a monument, which was evidently how he wanted it.'),
    S('Legacy',
      'The extent of the empire at his death was the greatest since Justinian, and unlike Justinian\'s it was solvent. Bulgaria was a province, Armenia was being absorbed, Syria was tributary, and southern Italy was held.',
      'The failure was dynastic and it was total. He never married, his brother Constantine VIII was incapable, and the succession passed through Constantine\'s daughters Zoe and Theodora to a series of husbands and adoptees. Within thirty years the treasury was gone and the army had been run down; within fifty came Manzikert.',
      'The name came later. Boulgaroktonos is not a title he used or was given in his lifetime — it appears about a hundred and fifty years afterwards, when the Balkans had been lost again and the memory of the emperor who held them had become useful.')
  ],
  timeline: [
    { date: '958', title: 'Born', description: 'Born to Romanos II and Theophano and crowned co-emperor as a small child.' },
    { date: '976', title: 'Takes power', description: 'John Tzimiskes dies and Basil rules in his own right at eighteen, under the chamberlain Basil Lekapenos.' },
    { date: '986', title: 'Trajan\'s Gate', description: 'Samuel of Bulgaria destroys his army in a mountain pass; it is the defeat that shapes his later method.' },
    { date: '988', title: 'The Rus\' alliance', description: 'Vladimir of Kiev sends six thousand warriors in exchange for the emperor\'s sister, and accepts Christianity; the Varangian Guard is founded.' },
    { date: '989', title: 'Abydos', description: 'Bardas Phokas is defeated and the thirteen-year civil war ends.' },
    { date: '1002', title: 'The allelengyon', description: 'The great landowners are made liable for the unpaid taxes of the poor in their districts.' },
    { date: '29 July 1014', title: 'Kleidion', description: 'The Bulgarian army is destroyed in the Belasica mountains.', links: [{ title: 'Battle of Kleidion', type: 'event', slug: 'battle-of-kleidion' }] },
    { date: '1018', title: 'Bulgaria annexed', description: 'The Bulgarian nobility submits and the frontier returns to the Danube.' },
    { date: '1025', title: 'Died', description: 'Dies on 15 December while preparing to recover Sicily, and is buried outside the walls at his own request.' }
  ],
  relatedEntries: {
    people: [
      { title: 'Romanos II', type: 'person', slug: 'romanos-ii', label: 'His father, who died when he was five' },
      { title: 'John I Tzimiskes', type: 'person', slug: 'john-i-tzimiskes', label: 'His guardian and predecessor' },
      { title: 'Samuel of Bulgaria', type: 'person', slug: 'samuel-of-bulgaria', label: 'His opponent for thirty years' }
    ],
    events: [
      { title: 'Battle of Kleidion', type: 'event', slug: 'battle-of-kleidion', label: 'The victory his posthumous name comes from' }
    ],
    locations: [
      { title: 'Byzantine Empire', type: 'location', slug: 'byzantine-empire', label: 'Which he took to its greatest medieval extent' },
      { title: 'First Bulgarian Empire', type: 'location', slug: 'first-bulgarian-empire', label: 'Annexed in 1018 after a thirty-year war' },
      { title: 'Kievan Rus', type: 'location', slug: 'kievan-rus', label: 'Whose conversion followed his marriage alliance of 988' }
    ]
  },
  sources: [
    { title: 'Michael Psellos, Chronographia', url: 'https://en.wikipedia.org/wiki/Chronographia_(Michael_Psellos)', type: 'primary source' },
    { title: 'John Skylitzes, Synopsis of Histories', url: 'https://en.wikipedia.org/wiki/John_Skylitzes', type: 'primary source' },
    { title: 'Basil II', url: 'https://en.wikipedia.org/wiki/Basil_II', type: 'encyclopedia' },
    { title: 'Biblioteca Marciana — Psalter of Basil II', url: 'https://marciana.venezia.sbn.it/', type: 'museum collection', institution: 'Biblioteca Nazionale Marciana' }
  ]
}

const samuel = {
  id: 'samuel-of-bulgaria', type: 'character', name: 'Samuel of Bulgaria',
  aliases: ['Samuil', 'Tsar Samuel', 'Samuil of Bulgaria'],
  born: 950, died: 1014, deathAge: 'unknown',
  causeOfDeath: 'Died on 6 October 1014, ten weeks after Kleidion; the tradition attributes it to a stroke on seeing his blinded army return.',
  restingPlace: 'The church of St Achilleios on Lake Prespa, where a grave identified as his was excavated',
  location: 'Ohrid',
  title: 'Tsar of Bulgaria',
  roles: ['Tsar', 'Commander'],
  image: img('Samuel\'s Fortress Ohrid 1.jpg'),
  imageInfo: {
    caption: 'Samuel\'s Fortress above Ohrid, the walls of the citadel that guarded the capital of his empire.',
    creator: 'kallerna',
    date: 'photographed 2023',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Samuel%27s_Fortress_Ohrid_1.jpg',
    note: 'The fortress bears his name and stands over the city he made his capital, though most of the visible walls are later rebuilding on earlier foundations. It is used because no likeness of Samuel survives — and because the image Commons offers as one is misidentified: the forensic bust captioned as him carries a museum label reading Jaromír of the Přemyslids, a Bohemian duke. Licensed CC BY-SA 4.0.'
  },
  summary: 'Samuel rebuilt a Bulgarian empire from Ohrid after the Byzantine conquest of 971, fought Basil II for thirty years, and died ten weeks after losing his army at Kleidion.',
  overview: 'The ruler who gave the First Bulgarian Empire a second life and outlasted every Byzantine attempt to end it but the last.',
  greatestFeats: [
    'Rebuilt a Bulgarian state around Ohrid after the annexation of the east in 971',
    'Destroyed Basil II\'s army at Trajan\'s Gate in 986',
    'Held an empire from the Danube to the Adriatic and central Greece at its height'
  ],
  birth: { date: 'Unknown, probably in the 940s or 950s', place: { name: 'Bulgaria' } },
  death: { date: '1014', place: { name: 'Prilep' }, circumstance: 'Died on 6 October 1014, ten weeks after the defeat at Kleidion.' },
  quickFacts: { realm: 'First Bulgarian Empire', dynasty: 'The Cometopuli', culture: 'Bulgarian', knownFor: 'Thirty years of war with Basil II' },
  isRuler: true,
  succession: {
    office: 'Tsar of Bulgaria',
    predecessor: { displayName: 'Roman', note: 'The last tsar of the old dynasty, a son of Peter I who had been castrated in Byzantine captivity and died in 997; Samuel had ruled in fact for two decades before taking the title. No article yet in this archive.' },
    successor: { displayName: 'Gabriel Radomir', note: 'His son, who ruled for a year and was murdered by his cousin Ivan Vladislav in 1015. No article yet in this archive.' }
  },
  contentSections: [
    S('Overview',
      'Samuel was one of the four sons of Count Nicholas, a provincial Bulgarian governor, and the brothers appear in the sources collectively as the Cometopuli — the count\'s sons.',
      'They rose in 976, when the death of John Tzimiskes gave Bulgaria its opportunity: the eastern half of the empire had been annexed by Byzantium five years earlier, but the western lands around Ohrid and Prespa had never been occupied.',
      'Samuel outlived his brothers, ruled in fact from the 980s and in title from 997, and spent thirty years fighting Basil II. He held an empire reaching from the Danube to the Adriatic and deep into Greece, and he lost it fortress by fortress.'),
    S('Rise',
      'Bulgaria had been broken in 971. Tzimiskes took the capital Preslav, deposed the tsar in a ceremony in Constantinople, and abolished the Bulgarian patriarchate — but Byzantine control reached only the east.',
      'When Tzimiskes died in 976 and Basil II inherited a civil war, the Cometopuli took the west. Three brothers died in the fighting of the following years and Samuel was left in sole command, ruling from Ohrid with a patriarch of his own.',
      'He took the title of tsar only in 997, after the death in captivity of Roman, the last of the old dynasty. Until then he governed as the servant of a state whose ruler was a Byzantine prisoner, which is a fair measure of how seriously the legitimacy of the old line was taken.'),
    S('Character and Personality',
      'He is visible almost entirely through his enemies, and their portrait is of a formidable, energetic and merciless opponent rather than a character.',
      'What can be read from his actions is a ruler who understood terrain better than anyone he fought, who preferred ambush and the mountain pass to open battle, and who kept a large territory together for three decades under continuous attack — which requires more than generalship.',
      'The one intimate episode the sources preserve is the blinding of his own captured son-in-law\'s people and the family violence that surrounded his succession, and even that comes through Byzantine and later Bulgarian tradition. His death — collapsing at the sight of the blinded army — is the most famous thing about him and belongs to the same tradition rather than to any contemporary account.'),
    S('The war with Basil II',
      'In 986 Basil II invaded and besieged Sofia, and Samuel destroyed his army as it withdrew through the pass of Trajan\'s Gate. The emperor escaped; the humiliation was total, and it bought Bulgaria more than a decade while Basil fought his own aristocracy.',
      'Samuel used it. At its height his empire ran from the Danube to the Adriatic coast, took Dyrrhachium, raided into the Peloponnese and held most of the southern Balkans.',
      'From about 1000 the pressure became continuous. Basil campaigned every year, took fortresses methodically and garrisoned what he took, and there was no second Trajan\'s Gate — the emperor never again gave him the opportunity.'),
    S('Kleidion and death',
      'In July 1014 Samuel blocked the pass at Kleidion with a palisade and a strong force, and beat off the Byzantine assaults until a detachment under Nikephoros Xiphias crossed Mount Belasica and came down behind him.',
      'The army was destroyed. Samuel escaped only because his son Gabriel Radomir extracted him, and thousands were taken prisoner.',
      'He died on 6 October, ten weeks later. The tradition that he collapsed at the sight of the blinded prisoners returning comes from Skylitzes, writing about 1070, and is inseparable from the blinding story itself — which the same chronicler is the only source for. He was buried at St Achilleios on Lake Prespa, where a grave identified as his was excavated in the twentieth century.'),
    S('Legacy',
      'The state survived him by four years and no more. Gabriel Radomir was murdered by his cousin within a year, Ivan Vladislav fought on and died at Dyrrhachium in 1018, and Bulgaria was annexed that year.',
      'His archbishopric at Ohrid outlasted the empire. Basil II left it in being with reduced status rather than abolishing it, and it remained the ecclesiastical centre of the region for centuries — the most durable institution Samuel created.',
      'In the modern Balkans he is claimed as a national figure by more than one country, and the argument over whether his state was Bulgarian or Macedonian is a live political matter rather than a historical one. The medieval sources call it Bulgaria, which is what this archive records; what it meant to the people in it is a different and much harder question.')
  ],
  timeline: [
    { date: '971', title: 'Bulgaria broken', description: 'John Tzimiskes annexes the east and deposes the tsar; the western lands remain unoccupied.' },
    { date: '976', title: 'The Cometopuli rise', description: 'The death of Tzimiskes gives the sons of Count Nicholas their opportunity in the west.' },
    { date: '986', title: 'Trajan\'s Gate', description: 'Samuel destroys Basil II\'s retreating army in the pass; the emperor barely escapes.' },
    { date: '990s', title: 'The empire at its height', description: 'His territory reaches from the Danube to the Adriatic and into central Greece.' },
    { date: '997', title: 'Takes the title of tsar', description: 'Assumes the imperial title after the death in Byzantine captivity of Roman, last of the old dynasty.' },
    { date: 'c. 1000–1014', title: 'Ground down', description: 'Basil campaigns annually, taking and garrisoning fortresses; Samuel is never again able to force a decision.' },
    { date: '29 July 1014', title: 'Kleidion', description: 'His palisaded position is flanked over Mount Belasica and his army destroyed.', links: [{ title: 'Battle of Kleidion', type: 'event', slug: 'battle-of-kleidion' }] },
    { date: '6 October 1014', title: 'Died', description: 'Dies at Prilep ten weeks after the battle; the tradition of the blinded army comes from Skylitzes, writing about 1070.' }
  ],
  relatedEntries: {
    people: [
      { title: 'Basil II', type: 'person', slug: 'basil-ii', label: 'His opponent for thirty years' },
      { title: 'John I Tzimiskes', type: 'person', slug: 'john-i-tzimiskes', label: 'Whose conquest of 971 he rebuilt the state after' }
    ],
    events: [
      { title: 'Battle of Kleidion', type: 'event', slug: 'battle-of-kleidion', label: 'Where his army was destroyed' }
    ],
    locations: [
      { title: 'First Bulgarian Empire', type: 'location', slug: 'first-bulgarian-empire', label: 'The empire he rebuilt and ruled' },
      { title: 'Byzantine Empire', type: 'location', slug: 'byzantine-empire', label: 'The power that ground his state down' }
    ]
  },
  sources: [
    { title: 'John Skylitzes, Synopsis of Histories', url: 'https://en.wikipedia.org/wiki/John_Skylitzes', type: 'primary source' },
    { title: 'Yahya of Antioch, Chronicle', url: 'https://en.wikipedia.org/wiki/Yahya_of_Antioch', type: 'primary source' },
    { title: 'Samuel of Bulgaria', url: 'https://en.wikipedia.org/wiki/Samuel_of_Bulgaria', type: 'encyclopedia' }
  ]
}

const macedonian = {
  id: 'macedonian-dynasty', type: 'house', name: 'Macedonian dynasty',
  aliases: ['House of Macedon', 'Macedonians', 'Macedonian'],
  originYear: 867, endYear: 1056, reignSpan: '867–1056',
  region: 'Byzantine Empire',
  originPlace: 'The theme of Macedonia, in Thrace — not the ancient kingdom',
  arms: 'The Byzantine emperors bore no Western coat of arms.',
  image: img('Emperor Leo VI detail.jpg'),
  imageInfo: {
    caption: 'Leo VI prostrate before Christ, in the mosaic above the Imperial Door of Hagia Sophia.',
    creator: 'Constantinople, imperial workshop',
    date: 'late 9th or early 10th century',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Emperor_Leo_VI_detail.jpg',
    note: 'A mosaic of the dynasty\'s own century, still in place over the door the emperors used to enter Hagia Sophia. The posture is the point: the second Macedonian emperor shown flat on the floor before Christ, in the most public position in the empire\'s greatest church. Licensed CC BY 4.0.'
  },
  summary: 'The dynasty that ruled Byzantium from 867 to 1056, took the empire to its greatest medieval extent, and produced its finest art, law and scholarship before running out of heirs.',
  overview: 'Founded by a peasant groom who murdered his way to the throne, and ended by two elderly sisters — and in between, the most successful two centuries the medieval empire had.',
  founder: {
    displayName: 'Basil I',
    note: 'A Macedonian peasant who rose through the stables and murdered Michael III in 867'
  },
  seats: [
    { name: 'Constantinople', type: 'location', slug: 'constantinople' },
    { name: 'Byzantine Empire', type: 'location', slug: 'byzantine-empire' }
  ],
  notableMembers: [
    { displayName: 'Basil I', note: 'r. 867–886; founded the dynasty by murdering his predecessor and began the legal revival' },
    { displayName: 'Leo VI the Wise', note: 'r. 886–912; completed the Basilika law code and married four times to get an heir' },
    { displayName: 'Constantine VII', note: 'r. 913–959; the scholar-emperor of the Book of Ceremonies and De Administrando Imperio' },
    { personSlug: 'romanos-ii', displayName: 'Romanos II', note: 'r. 959–963; sent the expedition that retook Crete, and died at twenty-four' },
    { personSlug: 'basil-ii', displayName: 'Basil II', note: 'r. 976–1025; annexed Bulgaria and took the empire to its greatest medieval extent' },
    { displayName: 'Zoe and Theodora', note: 'Nieces of Basil II, through whom the throne passed to a succession of husbands until 1056' }
  ],
  familyTree: {
    caption: 'The Macedonian emperors. Nikephoros II Phokas and John I Tzimiskes ruled as senior emperors by marriage and usurpation rather than as members of the family, which is why the line runs through Romanos II\'s sons. ⚭ marks a marriage.',
    root: {
      name: 'Basil I',
      note: 'r. 867–886; founder',
      children: [
        {
          name: 'Leo VI the Wise',
          note: 'r. 886–912',
          children: [
            {
              name: 'Constantine VII Porphyrogennetos',
              note: 'r. 913–959; the scholar-emperor',
              children: [
                {
                  name: 'Romanos II',
                  personSlug: 'romanos-ii',
                  note: 'r. 959–963',
                  spouse: { name: 'Theophano', note: 'Later married Nikephoros II and conspired in his murder' },
                  children: [
                    { name: 'Basil II', personSlug: 'basil-ii', note: 'r. 976–1025; never married' },
                    { name: 'Constantine VIII', note: 'r. 1025–1028; father of Zoe and Theodora, through whom the dynasty ended' }
                  ]
                }
              ]
            }
          ]
        },
        { name: 'Alexander', note: 'r. 912–913; brother of Leo VI, a brief and destructive reign' }
      ]
    }
  },
  contentSections: [
    S('Origins',
      'The dynasty is named for the theme of Macedonia in Thrace, not for the ancient kingdom, and its founder was a peasant. Basil I came to Constantinople from a provincial family, made his career in the stables through a talent for horses and physical strength, and attracted the attention of the emperor Michael III.',
      'He rose to become chamberlain, then co-emperor, and got there by arranging the murder of the Caesar Bardas in 866 and then of Michael himself in September 867.',
      'The historians of the dynasty he founded then spent two centuries explaining that this had been necessary — which is why Michael III is remembered as a drunk, and why the Amorian material in this archive has to be read against the grain.'),
    S('Law, letters and the imperial revival',
      'The Macedonians took the empire\'s intellectual life seriously in a way no dynasty had since Justinian. Basil I began a systematic revision of the law, and Leo VI completed it as the Basilika — Justinian\'s corpus in Greek, reorganised and made usable.',
      'Constantine VII is the emblem of the period: a ruler who spent decades sidelined from actual power and used them to compile the Book of Ceremonies and the De Administrando Imperio, both of which this archive draws on as sources for how the empire understood itself and its neighbours.',
      'The art of the period — the Paris Psalter, the Joshua Roll, the mosaics of Hagia Sophia including the one above — is the finest Byzantine work after late antiquity, and the deliberate revival of classical models in it is why the century is often called the Macedonian Renaissance.'),
    S('The conquests',
      'The military record is the strongest of any Byzantine dynasty. The frontier moved outward continuously for more than a century, though much of the fighting was done by generals who were not Macedonians at all.',
      'Crete was retaken in 961, Cilicia and Cyprus in 964–965, Antioch in 969 — all under Nikephoros Phokas and his officers, and all in the reigns of Romanos II and the two soldier-emperors who ruled in the name of his sons.',
      'Basil II then annexed Bulgaria in 1018 after a thirty-year war, restoring the Danube frontier for the first time since the seventh century. At his death in 1025 the empire ran from the Danube to the Euphrates and had money in the treasury.'),
    S('The end',
      'Basil II never married and left no child. His brother Constantine VIII ruled three undistinguished years and left two daughters, Zoe and Theodora, and the throne passed through Zoe\'s three husbands and an adopted son.',
      'Theodora, the last of the line, ruled alone in her seventies and died in 1056 without an heir. The dynasty had lasted 189 years and ended for the simplest possible reason.',
      'What followed was rapid. The treasury Basil II had filled was spent, the army he had built was run down in favour of mercenaries, and in 1071 at Manzikert the empire lost Anatolia. The gap between the greatest extent and the catastrophe is forty-six years.'),
    S('Legacy',
      'The Macedonian period is the one later Byzantines looked back to, and the one modern historians generally regard as the empire\'s medieval peak: militarily dominant, administratively competent, intellectually productive and financially solvent at the same time.',
      'Its weakness was structural and it was never solved. The empire had no rule of succession, so the throne depended on whether a capable adult male existed at the right moment, and twice in this dynasty the answer was no — filled once by soldier-emperors marrying in, and at the end by nobody at all.',
      'The Macedonian emperors are also the reason this archive can be written. The Book of Ceremonies, the De Administrando Imperio, the Basilika and the chronicles compiled under their patronage are a large part of what survives about the middle Byzantine centuries.')
  ],
  timeline: [
    { date: '867', title: 'Basil I takes the throne', description: 'The Macedonian groom murders Michael III and founds the dynasty.' },
    { date: '888', title: 'The Basilika', description: 'Leo VI completes the Greek recodification of Roman law begun under his father.' },
    { date: '913', title: 'Accession of Constantine VII', description: 'The scholar-emperor begins a reign in which he is repeatedly sidelined and writes the books the empire is remembered by.' },
    { date: '961', title: 'Crete retaken', description: 'Nikephoros Phokas ends the Cretan emirate and Aegean piracy.', links: [{ title: 'Siege of Chandax', type: 'event', slug: 'siege-of-chandax' }] },
    { date: '969', title: 'Antioch recovered', description: 'The greatest eastern city returns to the empire after 331 years.', links: [{ title: 'Siege of Antioch (969)', type: 'event', slug: 'siege-of-antioch-969' }] },
    { date: '976', title: 'Basil II takes power', description: 'The dynasty\'s greatest emperor begins a forty-nine-year reign, the longest in Byzantine history.', links: [{ title: 'Basil II', type: 'person', slug: 'basil-ii' }] },
    { date: '1018', title: 'Bulgaria annexed', description: 'The Danube frontier is restored and the empire reaches its greatest medieval extent.', links: [{ title: 'Battle of Kleidion', type: 'event', slug: 'battle-of-kleidion' }] },
    { date: '1056', title: 'The dynasty ends', description: 'Theodora dies without an heir after 189 years of Macedonian rule.' },
    { date: '1071', title: 'Manzikert', description: 'Fifteen years after the dynasty ends, the empire loses Anatolia.', links: [{ title: 'Battle of Manzikert', type: 'event', slug: 'battle-of-manzikert' }] }
  ],
  relatedEntries: {
    people: [
      { title: 'Basil II', type: 'person', slug: 'basil-ii', label: 'Its greatest emperor' },
      { title: 'Romanos II', type: 'person', slug: 'romanos-ii', label: 'In whose short reign Crete was retaken' },
      { title: 'Michael III', type: 'person', slug: 'michael-iii', label: 'The emperor its founder murdered' }
    ],
    events: [
      { title: 'Battle of Kleidion', type: 'event', slug: 'battle-of-kleidion', label: 'The victory that completed the Bulgarian conquest' },
      { title: 'Siege of Antioch (969)', type: 'event', slug: 'siege-of-antioch-969', label: 'The high-water mark of its eastern conquests' }
    ],
    locations: [
      { title: 'Byzantine Empire', type: 'location', slug: 'byzantine-empire', label: 'The realm it ruled for 189 years' },
      { title: 'First Bulgarian Empire', type: 'location', slug: 'first-bulgarian-empire', label: 'Annexed under Basil II in 1018' }
    ]
  },
  sources: [
    { title: 'Constantine VII, De Administrando Imperio', url: 'https://en.wikipedia.org/wiki/De_Administrando_Imperio', type: 'primary source' },
    { title: 'Michael Psellos, Chronographia', url: 'https://en.wikipedia.org/wiki/Chronographia_(Michael_Psellos)', type: 'primary source' },
    { title: 'Macedonian dynasty', url: 'https://en.wikipedia.org/wiki/Macedonian_dynasty', type: 'encyclopedia' },
    { title: 'Dumbarton Oaks — Byzantine studies', url: 'https://www.doaks.org/research/byzantine', type: 'academic resource', institution: 'Dumbarton Oaks' }
  ]
}

data.events.push(kleidion)
data.locations.push(bulgaria)
data.characters.push(basilII, samuel)
data.houses.push(macedonian)

// ── Link into what already exists (bidirectional) ─────────────────────────────
const push = (arr, item) => { if (!arr.some((x) => x.slug === item.slug)) arr.push(item) }
const loc = (id) => data.locations.find((l) => l.id === id)
const chr = (id) => data.characters.find((c) => c.id === id)
const evt = (id) => data.events.find((e) => e.id === id)

const kleidionRef = (label) => ({ title: 'Battle of Kleidion', type: 'event', slug: 'battle-of-kleidion', label })
const bulgariaRef = (label) => ({ title: 'First Bulgarian Empire', type: 'location', slug: 'first-bulgarian-empire', label })

const byz = loc('byzantine-empire')
push((byz.relatedEntries.events ??= []), kleidionRef('Where the Bulgarian war was decided, in 1014'))
push((byz.relatedEntries.locations ??= []), bulgariaRef('Its European rival for three and a half centuries'))
push((byz.relatedEntries.people ??= []), { title: 'Basil II', type: 'person', slug: 'basil-ii', label: 'Emperor 976–1025; the longest reign in Byzantine history' })

const tzim = chr('john-i-tzimiskes')
push((tzim.relatedEntries.locations ??= []), bulgariaRef('Whose eastern half he annexed in 971'))
push((tzim.relatedEntries.people ??= []), { title: 'Basil II', type: 'person', slug: 'basil-ii', label: 'His ward and successor' })

const romanos = chr('romanos-ii')
push((romanos.relatedEntries.people ??= []), { title: 'Basil II', type: 'person', slug: 'basil-ii', label: 'His son, five years old when he died' })

const manzikert = evt('battle-of-manzikert')
push((manzikert.relatedEntries.events ??= []), kleidionRef('The empire\'s high point, fifty-seven years earlier'))

const rus = loc('kievan-rus')
push((rus.relatedEntries.people ??= []), { title: 'Basil II', type: 'person', slug: 'basil-ii', label: 'Whose marriage alliance of 988 brought the Rus\' to Christianity' })

console.log('+ events     : battle-of-kleidion')
console.log('+ locations  : first-bulgarian-empire')
console.log('+ characters : basil-ii, samuel-of-bulgaria')
console.log('+ houses     : macedonian-dynasty')
console.log('~ linked     : byzantine-empire, john-i-tzimiskes, romanos-ii,')
console.log('               battle-of-manzikert, kievan-rus')

writeFileSync(dataPath, JSON.stringify(data, null, 2))
console.log(`\nM10 core written — characters ${data.characters.length}, locations ${data.locations.length}, events ${data.events.length}, houses ${data.houses.length}`)
