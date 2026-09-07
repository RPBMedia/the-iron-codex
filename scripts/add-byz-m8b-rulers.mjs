/**
 * TRACK A, M8b — the emperors the battles never reached.
 *
 * Thirteen ruler articles, created at the owner's instruction after the Isaurian
 * dynasty page showed two of five rulers linked. Track A's milestones are
 * organised around battles, so an emperor gets an article when he commands one;
 * none of these do, and the archive was carrying them as named-but-unlinked
 * succession endpoints — a state CLAUDE.md's chaining rule calls transitional and
 * owed.
 *
 * In chronological order: Justin I, Justin II, Phocas, Constans II,
 * Constantine IV, Justinian II, Theodosius III, Leo IV, Constantine VI, Irene,
 * Theophilos, Basil I, Constantine VII.
 *
 * WHAT THIS CLOSES. Running link-stale-succession-endpoints.mjs afterwards links
 * every endpoint these articles satisfy — Heraclius's predecessor, Leo III's
 * predecessor, Constantine V's successor, Michael III's predecessor and
 * successor, Romanos II's predecessor, and both of Justinian I's. The three
 * houses created earlier today also stop being half-linked: the Heraclian house
 * gains Constans II, Constantine IV and Justinian II; the Isaurian house gains
 * Leo IV, Constantine VI and Irene; the Macedonian house gains Basil I and
 * Constantine VII.
 *
 * STILL DEFERRED, and for the usual reason. Constantine III and Heraklonas
 * (641), whose reigns lasted months, have no image in any form — not a coin
 * securely theirs, nothing. They remain named on Heraclius's succession box
 * without a link. Leo VI is a different case: he has images and deserves an
 * article, but he is not a succession endpoint anywhere in the archive yet, so he
 * waits rather than being swept in.
 *
 * IMAGES. Where a coin exists it is used, because for most of these men a coin is
 * the only contemporary object that survives. Three exceptions earn better:
 * Phocas has a bronze bust in the British Museum, Constantine IV a mosaic
 * portrait, and Constantine VII the Pushkin ivory showing Christ crowning him.
 * Basil I and Theophilos use later manuscript portraits, captioned as such.
 */
import { readFileSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dataPath = path.join(__dirname, '../server/data/history.json')
const data = JSON.parse(readFileSync(dataPath, 'utf8'))
const S = (title, ...paragraphs) => ({ title, paragraphs })
const img = (f) => `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(f)}`
const BYZ = { title: 'Byzantine Empire', type: 'location', slug: 'byzantine-empire' }
const CPL = { title: 'Constantinople', type: 'location', slug: 'constantinople' }
const src = (t, u, y = 'encyclopedia') => ({ title: t, url: u, type: y })
const THEOPH = src('Theophanes the Confessor, Chronicle', 'https://en.wikipedia.org/wiki/Theophanes_the_Confessor', 'primary source')
const SKYL = src('John Skylitzes, Synopsis of Histories', 'https://en.wikipedia.org/wiki/John_Skylitzes', 'primary source')
const DOAKS = { title: 'Dumbarton Oaks — Byzantine Collection', url: 'https://www.doaks.org/resources/coins', type: 'museum collection', institution: 'Dumbarton Oaks' }

const rulers = [

{
  id: 'justin-i', name: 'Justin I', aliases: ['Justin the Thracian', 'Iustinus I'],
  born: 450, died: 527, deathAge: 'about 77',
  causeOfDeath: 'Died in August 527 of an old wound in the foot that turned gangrenous.',
  location: 'Constantinople', title: 'Emperor of the Romans', roles: ['Emperor'],
  image: img('Solidus of Justin I (obverse).jpg'),
  imageInfo: {
    caption: 'A gold solidus of Justin I, struck at Constantinople during his reign.',
    creator: 'Constantinople mint', date: '518–527', source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Solidus_of_Justin_I_(obverse).jpg',
    note: 'A contemporary object from his own reign. The helmeted bust is the standard imperial type of the period rather than a likeness. Public domain.'
  },
  summary: 'Justin I rose from an illiterate Thracian peasant to emperor at nearly seventy, and his chief act was to bring his nephew Justinian to Constantinople.',
  overview: 'A career soldier who became emperor almost by accident and whose reign is usually read as the prologue to his nephew\'s.',
  greatestFeats: ['Ended the Acacian schism and restored communion with Rome in 519', 'Secured the throne for his nephew Justinian', 'Rose from the peasantry to the purple through the guards'],
  birth: { date: 'c. 450', place: { name: 'Bederiana, in Illyricum' } },
  death: { date: '527', place: { name: 'Constantinople', slug: 'constantinople' }, circumstance: 'Died in August 527, having already made Justinian co-emperor in April.' },
  quickFacts: { realm: 'Eastern Roman Empire', dynasty: 'Justinian dynasty', culture: 'Roman, of Thracian peasant origin', knownFor: 'Rising from the peasantry, and making Justinian his heir' },
  isRuler: true,
  succession: {
    office: 'Emperor of the Romans',
    predecessor: { displayName: 'Anastasius I', note: 'A capable administrator who died in 518 aged nearly ninety, leaving a full treasury and no designated heir. No article yet in this archive.' },
    successor: { personSlug: 'justinian-i', displayName: 'Justinian I', note: 'His nephew, whom he adopted, promoted and finally crowned as co-emperor four months before his death.' }
  },
  contentSections: [
    S('Overview',
      'Justin was born to a peasant family in the Latin-speaking Balkans about 450, walked to Constantinople as a young man to enlist, and rose through the palace guard to command it.',
      'When the emperor Anastasius died in 518 without an heir, Justin was around seventy and commander of the excubitors, the guard closest to the palace. The succession went to him in circumstances the sources describe as a mixture of accident and bribery.',
      'He ruled for nine years, mostly through his nephew, and the reign matters chiefly for what it set up: the religious settlement with Rome, and Justinian.'),
    S('Birth and early life',
      'His origins were genuinely humble in a way the Roman world rarely produced emperors from. Procopius says he arrived in the capital as a boy from Bederiana with nothing but a cloak and a supply of biscuit, which is a literary flourish over a real fact.',
      'He served in the Isaurian and Persian wars, rose steadily on competence, and by 515 commanded the excubitors — a position that put him in the palace at the moment the throne fell vacant.',
      'The sources report that he was illiterate, or nearly so, and used a stencil to trace his signature. Procopius, who hated the whole family, is the loudest witness for this, but it is not implausible for a soldier of his background.'),
    S('Character and Personality',
      'He is one of the harder emperors to see, because he is almost always described in relation to his nephew — either as the vehicle for Justinian\'s rise or as a simple soldier out of his depth in the palace.',
      'What the record supports is a competent, orthodox, uncomplicated man who had spent fifty years in the army and governed like it: he backed the Chalcedonian party firmly, made peace with Rome, and delegated administration to people who could read.',
      'Procopius\'s Secret History calls him a fool and worse, but the Secret History calls everyone that, and its portrait of Justin as an amiable idiot manipulated by Justinian should be read as the polemic it is rather than the assessment it pretends to be.'),
    S('Reign',
      'His first major act was religious. The Acacian schism had divided Constantinople from Rome for thirty-five years over the Monophysite question, and Justin ended it in 519 by accepting the papal terms outright.',
      'That decision aligned the empire with the western church and against the Monophysite populations of Egypt and Syria, and the persecution that followed stored up the alienation that made the Arab conquests easier a century later.',
      'Abroad he managed the Persian frontier without a general war, refused the emperor Kavad\'s request to adopt his son Khosrow — a refusal with long consequences — and cultivated the Christian kingdoms of the Caucasus and Ethiopia. At home Justinian was already running much of the government.'),
    S('Legacy',
      'The dynasty he founded ran to 602 and includes the empire\'s last great reconquest, so his significance is genuine even if it is derivative.',
      'His own contribution was the religious realignment of 519 and the decision to raise Justinian rather than any of the other candidates who might have been advanced.',
      'He is also the last emperor in this archive to rise from the bottom of society through the army alone — a route the later empire, with its entrenched military aristocracy, would make far harder.')
  ],
  timeline: [
    { d: 'c. 450', t: 'Born', x: 'Born to a peasant family at Bederiana in the Latin-speaking Balkans.' },
    { d: 'c. 470', t: 'Enlists', x: 'Walks to Constantinople and joins the palace guard.' },
    { d: 'c. 515', t: 'Commands the excubitors', x: 'Reaches the command of the guard regiment closest to the emperor.' },
    { d: '518', t: 'Becomes emperor', x: 'Anastasius dies without an heir and Justin, aged about seventy, is proclaimed.' },
    { d: '519', t: 'The Acacian schism ends', x: 'He accepts Rome\'s terms and restores communion after thirty-five years of division.' },
    { d: '525', t: 'Justinian marries Theodora', x: 'He repeals the law forbidding senators to marry actresses so his nephew can marry.' },
    { d: '527', t: 'Died', x: 'Dies in August, four months after crowning Justinian co-emperor.' }
  ],
  related: { people: [{ title: 'Justinian I', type: 'person', slug: 'justinian-i', label: 'His nephew, heir and successor' }], locations: [BYZ, CPL] },
  sources: [src('Procopius, Secret History', 'https://en.wikipedia.org/wiki/Secret_History_(Procopius)', 'primary source'), src('Justin I', 'https://en.wikipedia.org/wiki/Justin_I'), DOAKS]
},

{
  id: 'justin-ii', name: 'Justin II', aliases: ['Iustinus II'],
  born: 520, died: 578, deathAge: 'about 58',
  causeOfDeath: 'Died in October 578 after years of mental illness during which others governed for him.',
  location: 'Constantinople', title: 'Emperor of the Romans', roles: ['Emperor'],
  image: img('Solidus of Justin II (obverse).jpg'),
  imageInfo: {
    caption: 'A gold solidus of Justin II, struck at Constantinople during his reign.',
    creator: 'Constantinople mint', date: '565–578', source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Solidus_of_Justin_II_(obverse).jpg',
    note: 'A contemporary object from his own reign, and a conventional imperial type rather than a portrait. Public domain.'
  },
  summary: 'Justin II inherited Justinian\'s overextended empire, stopped paying its neighbours to stay away, lost Italy to the Lombards and Syria to Persia, and went mad.',
  overview: 'The emperor who discovered what Justinian\'s conquests had actually cost, and could not pay it.',
  greatestFeats: ['Held the eastern empire together through the first collapse of Justinian\'s settlement', 'Adopted Tiberius as heir in a lucid interval, securing a capable successor'],
  birth: { date: 'c. 520', place: { name: 'The Byzantine Empire' } },
  death: { date: '578', place: { name: 'Constantinople', slug: 'constantinople' }, circumstance: 'Died in October 578 after nearly a decade of incapacity, with Tiberius already governing as Caesar.' },
  quickFacts: { realm: 'Eastern Roman Empire', dynasty: 'Justinian dynasty', culture: 'Roman', knownFor: 'Inheriting an empire that could not afford itself' },
  isRuler: true,
  succession: {
    office: 'Emperor of the Romans',
    predecessor: { personSlug: 'justinian-i', displayName: 'Justinian I', note: 'His uncle, whose reconquests of Africa and Italy he inherited along with the bill for them.' },
    successor: { displayName: 'Tiberius II Constantine', note: 'Commander of the excubitors, adopted as Caesar in 574 during a lucid interval and left to govern; he reigned until 582. No article yet in this archive.' }
  },
  contentSections: [
    S('Overview',
      'Justin II succeeded his uncle Justinian in 565 and inherited an empire that looked enormous on a map and was insolvent underneath it.',
      'His response was to stop paying. Justinian had bought peace on several frontiers with subsidies, and Justin refused them — most consequentially to the Persians, which restarted a war the empire could not afford, and to the Avars, who had to be dealt with anyway.',
      'Within a decade Italy was largely lost to the Lombards, the Balkans were open to Avars and Slavs, and the eastern war was going badly. In 574 he suffered a mental collapse and never fully recovered.'),
    S('Birth and early life',
      'He was a nephew of Justinian through the emperor\'s sister, and married Sophia, a niece of the empress Theodora — so the succession kept the family arrangement doubled.',
      'He held the office of curopalates in the palace during his uncle\'s last years and took the throne quickly on Justinian\'s death in November 565, forestalling a rival cousin of the same name.',
      'The reign began with a public gesture that set its tone: he paid off his uncle\'s debts personally and announced an end to the corruption and the subsidies of the old regime.'),
    S('Character and Personality',
      'The sources describe a proud, rigid man with a strong sense of imperial dignity and a poor sense of what the empire could sustain — which is a combination that appears repeatedly among successors to great reigns.',
      'His refusal of tribute to the Persians and the Avars was defensible as principle and disastrous as policy, and the fact that he framed it in terms of Roman honour rather than of arithmetic is the clearest window onto how he thought.',
      'His illness is described with unusual specificity: periods of violent derangement, lucid intervals, and the famous detail that organ music was played to calm him. In one of the lucid intervals he adopted Tiberius and delivered a speech of abdication that John of Ephesus reports as an admission that he had governed badly — which, if it is anything like accurate, is the most self-aware statement any Byzantine emperor left.'),
    S('The collapse of the settlement',
      'The Lombards entered Italy in 568, three years into the reign, and took most of the north within a decade. Justinian\'s twenty-year war to recover Italy was undone in less time than it had taken to win.',
      'In the east, Justin\'s refusal of the annual payments and his intervention in Armenia restarted the Persian war in 572. Dara, the key fortress of the Mesopotamian frontier, fell in 573, and the news is what the sources connect to his collapse.',
      'In the Balkans the Avars pressed south and Slavic groups began settling permanently. Every frontier Justinian had stabilised was in trouble at once, and the treasury he had emptied could not answer any of them.'),
    S('Legacy',
      'His reign is the hinge between Justinian\'s empire and the smaller, harder state that fought Persia to exhaustion under Heraclius fifty years later.',
      'The judgement usually passed on him — that he destroyed his uncle\'s achievement — is too simple. The reconquests were unaffordable before he touched them, and the collapse he presided over had been prepared by the plague, the wars and the finances he inherited.',
      'What he did contribute was the choice of Tiberius, made while ill and made well. The succession he arranged carried the empire to Maurice and gave it two decades of competent government before the crisis of 602.')
  ],
  timeline: [
    { d: 'c. 520', t: 'Born', x: 'Born into the imperial family as a nephew of Justinian.' },
    { d: '565', t: 'Becomes emperor', x: 'Takes the throne on Justinian\'s death and repudiates the policy of subsidies.' },
    { d: '568', t: 'The Lombards enter Italy', x: 'Justinian\'s reconquest begins to come apart within three years.' },
    { d: '572', t: 'War with Persia resumes', x: 'His refusal of tribute and intervention in Armenia restart the eastern war.' },
    { d: '573', t: 'Dara falls', x: 'The key Mesopotamian fortress is lost; the news is linked to his mental collapse.' },
    { d: '574', t: 'Tiberius adopted', x: 'In a lucid interval he adopts the commander of the excubitors as Caesar and hands over government.' },
    { d: '578', t: 'Died', x: 'Dies in October after years of incapacity; Tiberius succeeds without dispute.' }
  ],
  related: { people: [{ title: 'Justinian I', type: 'person', slug: 'justinian-i', label: 'His uncle and predecessor' }], locations: [BYZ, CPL] },
  sources: [src('John of Ephesus, Ecclesiastical History', 'https://en.wikipedia.org/wiki/John_of_Ephesus', 'primary source'), src('Justin II', 'https://en.wikipedia.org/wiki/Justin_II'), DOAKS]
},

{
  id: 'phocas', name: 'Phocas', aliases: ['Focas', 'Phokas'],
  born: 547, died: 610, deathAge: 'about 63',
  causeOfDeath: 'Executed by Heraclius in October 610, dismembered after being brought before him in chains.',
  location: 'Constantinople', title: 'Emperor of the Romans', roles: ['Emperor'],
  image: img('Phocas, British Museum.jpg'),
  imageInfo: {
    caption: 'A bronze bust of Phocas in the British Museum, crowned and bearded in the imperial manner.',
    creator: 'Byzantine workshop', date: '7th century', source: 'Wikimedia Commons (British Museum)',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Phocas,_British_Museum.jpg',
    note: 'A contemporary object, which is unusual for an emperor of this period and unusual for one so thoroughly condemned by the tradition — most images of Phocas were destroyed after his fall. Public domain.'
  },
  summary: 'Phocas seized the throne in a mutiny in 602, murdered the emperor Maurice and his sons, and lost most of the east to Persia before Heraclius killed him in 610.',
  overview: 'The usurpation that started the war that broke both the Roman and Persian empires.',
  greatestFeats: [],
  birth: { date: 'c. 547', place: { name: 'The Balkan provinces' } },
  death: { date: '610', place: { name: 'Constantinople', slug: 'constantinople' }, circumstance: 'Brought before Heraclius in chains and executed; his body was mutilated and burned.' },
  quickFacts: { realm: 'Eastern Roman Empire', dynasty: 'Not dynastic', culture: 'Roman', knownFor: 'The murder of Maurice and the collapse that followed' },
  isRuler: true,
  succession: {
    office: 'Emperor of the Romans',
    predecessor: { displayName: 'Maurice', note: 'A capable emperor of twenty years whom Phocas had murdered with five of his sons in 602; the murder gave Khosrow II his pretext for war. No article yet in this archive.' },
    successor: { personSlug: 'heraclius', displayName: 'Heraclius', note: 'Son of the exarch of Africa, who sailed on Constantinople and had him executed in October 610.' }
  },
  contentSections: [
    S('Overview',
      'Phocas was a junior officer in the Danube army when it mutinied in 602 over the emperor Maurice\'s order to winter beyond the river, and it raised him to the throne.',
      'He took Constantinople, and had Maurice executed after making him watch the killing of five of his sons. That act shaped the following quarter-century: Khosrow II of Persia, who owed his own throne to Maurice, declared war to avenge him.',
      'Eight years later Syria, Palestine and much of Anatolia were being overrun, the Balkans were open, and the empire was in revolt against him. Heraclius sailed from Carthage, and Phocas was executed in October 610.'),
    S('Birth and early life',
      'Almost nothing is known of him before 602. He was a centurion or of similar rank in the Balkan army, described as a subordinate officer rather than a commander, and had once served on an embassy to Constantinople.',
      'Maurice\'s order to the army to winter north of the Danube — sound strategy, unbearable to the soldiers — produced the mutiny, and the troops chose Phocas as their figurehead.',
      'That is the whole of his preparation for the throne, and it shows in everything that followed.'),
    S('Character and Personality',
      'Here more than anywhere the archive has to say what kind of evidence it is using. Every surviving account of Phocas was written after his fall, under the dynasty that overthrew him, and they are uniformly and enthusiastically hostile.',
      'The portrait they give is of a cruel, drunken, physically repulsive tyrant who ruled by torture and execution. Some of it is certainly true — the killing of Maurice\'s sons in front of him is not in dispute, and the purges of the aristocracy are well attested.',
      'What cannot be recovered is any counterweight, because none was allowed to survive. He had support somewhere: he held the throne for eight years, was recognised by the pope, and put up a column in the Roman Forum that still stands. This archive records him as a usurper whose reign was a disaster, and notes that the man himself is invisible behind the condemnation.'),
    S('The catastrophe',
      'Khosrow II had been restored to the Persian throne in 591 by Maurice, and treated the murder as both an outrage and an opportunity. Persian armies moved into Mesopotamia and Armenia from 603 and did not stop.',
      'Phocas had no answer. The best troops were on the Danube or in revolt, the aristocracy had been purged, and the empire\'s religious divisions were sharpened by his persecution of the Jews and pressure on the Monophysites.',
      'By 610 the Persians were approaching the Anatolian heartland, the Balkans were being overrun by Avars and Slavs, and the exarch of Africa had rebelled. His son sailed east and took the capital with little resistance.'),
    S('Legacy',
      'The war he provoked ran for twenty-six years, exhausted both the Roman and Persian empires, and left them open to the Arab conquests that took Syria, Egypt and the whole Sasanian state within a generation of its end.',
      'That is an enormous consequence for an eight-year reign, and it is why the archive treats 602 rather than 610 as the hinge of the seventh century.',
      'His column in the Roman Forum, dedicated in 608, is the last monument ever erected in that space — an unintentionally perfect epitaph for a reign at the end of the ancient world.')
  ],
  timeline: [
    { d: 'c. 547', t: 'Born', x: 'Born in the Balkan provinces; almost nothing is recorded of his early life.' },
    { d: '602', t: 'The mutiny', x: 'The Danube army refuses to winter beyond the river and proclaims him emperor.' },
    { d: '602', t: 'Maurice murdered', x: 'Maurice is executed after watching the killing of five of his sons.' },
    { d: '603', t: 'Persia declares war', x: 'Khosrow II invades to avenge his patron; the war will run for twenty-six years.' },
    { d: '608', t: 'The column in the Forum', x: 'A column is dedicated to him in the Roman Forum — the last monument raised there.' },
    { d: '608', t: 'Africa revolts', x: 'The exarch of Africa rebels and his son prepares to sail on Constantinople.' },
    { d: '610', t: 'Executed', x: 'Heraclius takes the capital and has him put to death in October.' }
  ],
  related: { people: [{ title: 'Heraclius', type: 'person', slug: 'heraclius', label: 'Deposed and executed him in 610' }, { title: 'Khosrow II', type: 'person', slug: 'khosrow-ii', label: 'Used the murder of Maurice as his pretext for war' }], locations: [BYZ, { title: 'Sasanian Empire', type: 'location', slug: 'sasanian-empire', label: 'Which invaded to avenge Maurice' }] },
  sources: [THEOPH, src('Phocas', 'https://en.wikipedia.org/wiki/Phocas'), { title: 'British Museum', url: 'https://www.britishmuseum.org/collection', type: 'museum collection', institution: 'British Museum' }]
},

{
  id: 'constans-ii', name: 'Constans II', aliases: ['Constans II Pogonatos', 'Konstas II'],
  born: 630, died: 668, deathAge: '38',
  causeOfDeath: 'Murdered in his bath at Syracuse in July 668, struck with a soap dish by a servant.',
  location: 'Syracuse', title: 'Emperor of the Romans', roles: ['Emperor', 'Commander'],
  image: img('Solidus Constans II (obverse).jpg'),
  imageInfo: {
    caption: 'A gold solidus of Constans II, whose coinage tracks the growth of the beard that gave him his nickname.',
    creator: 'Constantinople mint', date: '641–668', source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Solidus_Constans_II_(obverse).jpg',
    note: 'A contemporary object of his own reign. The coinage of Constans is unusual in showing a visible physical change over time as the emperor aged, which is as close to portraiture as Byzantine coin dies get. Public domain.'
  },
  summary: 'Constans II ruled for twenty-seven years as the Arab conquests took Egypt and Africa, moved his court to Sicily, and was murdered in his bath there.',
  overview: 'The emperor who held the empire together through its worst decades and was hated for the choices it took.',
  greatestFeats: ['Held Anatolia and the capital through the first Arab expansion', 'Reorganised the surviving provinces on the lines that became the theme system', 'Broke the religious deadlock over Monotheletism by prohibiting the argument'],
  birth: { date: '630', place: { name: 'Constantinople', slug: 'constantinople' } },
  death: { date: '668', place: { name: 'Syracuse, in Sicily' }, circumstance: 'Murdered in his bath by a servant in July 668, in a conspiracy that briefly raised a usurper in Sicily.' },
  quickFacts: { realm: 'Eastern Roman Empire', dynasty: 'Heraclian dynasty', culture: 'Roman', knownFor: 'Ruling through the Arab conquests, and moving the court west' },
  isRuler: true,
  succession: {
    office: 'Emperor of the Romans',
    predecessor: { displayName: 'Heraklonas', note: 'His uncle, deposed and mutilated in 641 after a few months, in the succession crisis that followed Heraclius\'s death. No image of him survives in any form, so this archive cannot give him an article.' },
    successor: { personSlug: 'constantine-iv', displayName: 'Constantine IV', note: 'His son, who put down the Sicilian usurper and then held Constantinople against the first Arab blockade.' }
  },
  contentSections: [
    S('Overview',
      'Constans II became emperor at eleven in 641, in the wreckage that followed his grandfather Heraclius\'s death, and ruled for twenty-seven years — the whole of the period in which the Arab conquests took Egypt, then Africa, and turned the Mediterranean into a contested sea.',
      'He is the emperor who had to work out how a Roman empire operates after losing half of itself, and much of what he improvised became permanent: soldiers settled on the land in the surviving provinces, a fleet rebuilt, a religious argument suppressed rather than resolved.',
      'In 663 he moved his court to Syracuse in Sicily, which the capital never forgave, and was murdered there five years later.'),
    S('Birth and early life',
      'He was born in 630, the son of Constantine III, and came to the throne as a boy after his father died within months of Heraclius and his uncle Heraklonas was deposed and mutilated.',
      'His accession speech to the senate — reported by Theophanes and probably written for him — is a striking document: an eleven-year-old emperor apologising for his family\'s murders and asking the senate to govern with him.',
      'The empire he inherited had already lost Syria, Palestine and most of Egypt. Alexandria fell for the last time in 646, when he was sixteen.'),
    S('Character and Personality',
      'The tradition is hostile, and the reason is specific: he had his brother Theodosius killed in 660 and he moved the capital west, and the Constantinopolitan sources never forgave either.',
      'They call him Pogonatos, the bearded, and describe him as harsh, obstinate and haunted — Theophanes has him dreaming of his murdered brother handing him a cup of blood. What the same sources cannot conceal is that he campaigned personally in the Balkans, in Armenia and in Italy, and that the state survived a generation that ought to have finished it.',
      'The move to Sicily is the decision everything turns on. Read as desertion it is contemptible; read as strategy it is arguable — the western Mediterranean was still defensible, Africa was not yet lost, and an emperor in Syracuse was closer to the Lombards, the Berbers and the sea than one in Constantinople. He was killed before it could be judged.'),
    S('Reign',
      'The Arab advance was continuous. Egypt was gone by 646, the fleet was beaten at the Battle of the Masts off the Lycian coast in 655 — the first great Arab naval victory — and only the Muslim civil war after 656 gave the empire a decade of relief.',
      'He used it. The remaining provinces were reorganised with soldiers settled on land they had reason to defend, a system his successors developed into the themes, and the Balkans were campaigned in for the first time in decades.',
      'On religion he issued the Typos in 648, which did not settle the Monothelete controversy but forbade anyone to discuss it — and then persecuted those who would not stop, including Pope Martin I and Maximus the Confessor, both of whom died in exile after mutilation. It is the least defensible part of his reign and it did not work.'),
    S('Legacy',
      'He is the emperor of the worst decades, and the empire came out of them still functioning, which is not a small thing to have presided over.',
      'The provincial reorganisation he began is the foundation of the theme system that defended Anatolia for four centuries, and the fleet he rebuilt is what held the sea approaches to the capital until Greek fire arrived under his son.',
      'His murder in a Sicilian bathhouse, and the speed with which his son crushed the usurper and brought the court home, is a fair summary of how the experiment ended: the strategy died with him and Constantinople stayed the capital.')
  ],
  timeline: [
    { d: '630', t: 'Born', x: 'Born to Constantine III, grandson of Heraclius.' },
    { d: '641', t: 'Emperor at eleven', x: 'Succeeds after his father\'s death and his uncle\'s deposition in the succession crisis.' },
    { d: '646', t: 'Alexandria lost', x: 'Egypt passes finally to the caliphate, taking the empire\'s grain supply with it.' },
    { d: '648', t: 'The Typos', x: 'He forbids discussion of the Monothelete question and persecutes those who continue it.' },
    { d: '655', t: 'The Battle of the Masts', x: 'The Byzantine fleet is destroyed off the Lycian coast in the first great Arab naval victory.' },
    { d: '660', t: 'His brother killed', x: 'Theodosius is put to death; the capital turns against him permanently.' },
    { d: '663', t: 'The court moves west', x: 'He visits Rome — the last emperor to do so — and settles at Syracuse in Sicily.' },
    { d: '668', t: 'Murdered', x: 'Killed in his bath at Syracuse; his son crushes the usurper and returns the court to Constantinople.' }
  ],
  related: { people: [{ title: 'Heraclius', type: 'person', slug: 'heraclius', label: 'His grandfather' }, { title: 'Constantine IV', type: 'person', slug: 'constantine-iv', label: 'His son and successor' }], locations: [BYZ, CPL] },
  sources: [THEOPH, src('Constans II', 'https://en.wikipedia.org/wiki/Constans_II'), DOAKS]
},

{
  id: 'constantine-iv', name: 'Constantine IV', aliases: ['Konstantinos IV'],
  born: 652, died: 685, deathAge: 'about 33',
  causeOfDeath: 'Died of dysentery in September 685, aged about thirty-three.',
  location: 'Constantinople', title: 'Emperor of the Romans', roles: ['Emperor', 'Commander'],
  image: img('Constantine IV mosaic.png'),
  imageInfo: {
    caption: 'Constantine IV in mosaic, from the church of Sant\'Apollinare in Classe at Ravenna.',
    creator: 'Ravenna workshop', date: '7th century', source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Constantine_IV_mosaic.png',
    note: 'A mosaic of his own century, made in the Italian exarchate to commemorate privileges he granted the church of Ravenna. One of very few surviving contemporary images of a seventh-century emperor. Public domain.'
  },
  summary: 'Constantine IV held Constantinople against the first sustained Arab attack, in the campaign that produced the earliest recorded use of Greek fire, and ended the Monothelete controversy at a council.',
  overview: 'A short reign that saved the city, settled the church, and lost the Balkans to the Bulgars.',
  greatestFeats: ['Held Constantinople against the Arab blockade of 674–678', 'Presided over the Third Council of Constantinople, ending the Monothelete controversy', 'Recognised, in defeat, the Bulgar state that would last three centuries'],
  birth: { date: 'c. 652', place: { name: 'Constantinople', slug: 'constantinople' } },
  death: { date: '685', place: { name: 'Constantinople', slug: 'constantinople' }, circumstance: 'Died of dysentery in September 685 after a reign of seventeen years.' },
  quickFacts: { realm: 'Eastern Roman Empire', dynasty: 'Heraclian dynasty', culture: 'Roman', knownFor: 'Greek fire, and the defence of Constantinople in 674–678' },
  isRuler: true,
  succession: {
    office: 'Emperor of the Romans',
    predecessor: { personSlug: 'constans-ii', displayName: 'Constans II', note: 'His father, murdered in his bath at Syracuse in 668; Constantine crushed the Sicilian usurper and brought the court back to Constantinople.' },
    successor: { personSlug: 'justinian-ii', displayName: 'Justinian II', note: 'His son, sixteen at his accession, whose two reigns and mutilation between them are among the strangest careers in the empire\'s history.' }
  },
  contentSections: [
    S('Overview',
      'Constantine IV came to the throne in 668 at about sixteen, put down the usurper who had murdered his father, and brought the imperial court back from Sicily to Constantinople.',
      'The defining event of his reign was the Arab attempt on the capital between 674 and 678 — a sustained naval blockade rather than a single siege, and the first serious attempt to take the city since the Avars in 626.',
      'It failed, and the weapon that broke it, Greek fire, appears in the historical record here for the first time. He then settled the empire\'s longest-running religious quarrel and died at thirty-three.'),
    S('Birth and early life',
      'He was born about 652 and was left as senior emperor in Constantinople when his father moved the court to Sicily in 663 — so he was governing the eastern half of the empire in his father\'s name from his early teens.',
      'When Constans was murdered at Syracuse in 668, the army in Sicily proclaimed an Armenian usurper, Mezezius. Constantine sailed west, crushed the revolt and returned, which settled both the succession and the question of where the empire would be ruled from.',
      'He also removed his two brothers from the imperial college in 681, after the army agitated for the three to rule jointly, and had their noses slit — the first use in this family of a mutilation that would recur through the dynasty.'),
    S('Character and Personality',
      'He is described as competent, decisive and personally involved in his campaigns, and the record supports it: he moved fast on the Sicilian revolt, he directed the defence of the capital in person, and he did not lose control of his government at any point in seventeen years.',
      'The mutilation of his brothers is the episode that complicates the portrait. It was politically rational — a three-emperor arrangement had no chance of working — and it was also the kind of act that made his son\'s reign possible to imagine.',
      'What comes through most consistently is a certain unsentimental clarity. He fought the Arabs to a standstill and then made peace with tribute; he fought the Bulgars, lost, and recognised their state; he called a council and accepted an outcome that repudiated his own grandfather\'s religious policy. None of it is heroic and all of it worked.'),
    S('The defence of the city',
      'From 674 an Arab fleet operated from a base at Cyzicus in the Sea of Marmara and blockaded Constantinople through successive campaigning seasons, in what the sources present as a four-year attempt to take the city by attrition.',
      'The empire\'s answer was a new weapon. Greek fire — a petroleum-based incendiary projected through siphons and unquenchable by water — is first recorded in this campaign, attributed to an engineer named Kallinikos from Heliopolis in Syria, and it destroyed the Arab fleet.',
      'The caliph Mu\'awiya made peace in 678 on terms that included tribute to Constantinople, which is the only occasion in the seventh century that the flow ran that way. The relief was real enough that the Avars and the Slavs of the Balkans sent embassies acknowledging imperial authority.'),
    S('The council and the Bulgars',
      'In 680–681 he convened the Third Council of Constantinople, which condemned Monotheletism — the compromise doctrine his great-grandfather Heraclius had promoted and his father had tried to silence — and restored communion with Rome.',
      'It was an act of settlement rather than conviction, and it worked: the controversy that had divided the empire for fifty years and killed a pope was over.',
      'In the same years he lost the Balkans. Asparuh\'s Bulgars crossed the Danube, his campaign against them in 680 failed, and in 681 he signed a treaty recognising a Bulgar state on former imperial soil and agreeing to pay it tribute — the foundation of the First Bulgarian Empire, and a frontier problem for the next three hundred and thirty-seven years.')
  ],
  timeline: [
    { d: 'c. 652', t: 'Born', x: 'Born to Constans II; left governing in Constantinople when his father moved to Sicily.' },
    { d: '668', t: 'Becomes emperor', x: 'Crushes the usurper who murdered his father and returns the court to Constantinople.' },
    { d: '674–678', t: 'The Arab blockade', x: 'A four-year attempt on the capital is broken, and Greek fire enters the historical record.' },
    { d: '678', t: 'Peace with tribute', x: 'Mu\'awiya makes peace on terms that include payments to Constantinople.' },
    { d: '680', t: 'Defeated by the Bulgars', x: 'His campaign against Asparuh fails in the Danube marshes.' },
    { d: '680–681', t: 'The Third Council of Constantinople', x: 'Monotheletism is condemned and communion with Rome restored.' },
    { d: '681', t: 'Bulgaria recognised', x: 'A treaty concedes a Bulgar state south of the Danube, with tribute.' },
    { d: '685', t: 'Died', x: 'Dies of dysentery at about thirty-three; his son Justinian II succeeds at sixteen.' }
  ],
  related: { people: [{ title: 'Constans II', type: 'person', slug: 'constans-ii', label: 'His father' }, { title: 'Justinian II', type: 'person', slug: 'justinian-ii', label: 'His son and successor' }], events: [{ title: 'Siege of Constantinople (717–718)', type: 'event', slug: 'siege-of-constantinople-717', label: 'The later Arab attempt, broken by the same weapon and the same walls' }], locations: [BYZ, CPL, { title: 'First Bulgarian Empire', type: 'location', slug: 'first-bulgarian-empire', label: 'Which he was forced to recognise in 681' }] },
  sources: [THEOPH, src('Constantine IV', 'https://en.wikipedia.org/wiki/Constantine_IV'), DOAKS]
},

{
  id: 'justinian-ii', name: 'Justinian II', aliases: ['Justinian Rhinotmetos', 'Ioustinianos II'],
  born: 668, died: 711, deathAge: 'about 42',
  causeOfDeath: 'Killed in Anatolia in December 711 by officers of a military revolt; his head was sent to Ravenna and Rome.',
  location: 'Constantinople', title: 'Emperor of the Romans', roles: ['Emperor'],
  image: img('Byzantium, Constantinople, 8th century - Solidus of Justinian II with Bust of Christ (obverse) - 2012.47.a - Cleveland Museum of Art.jpg'),
  imageInfo: {
    caption: 'A gold solidus of Justinian II bearing the bust of Christ — the first coin in history to carry it.',
    creator: 'Constantinople mint', date: 'reign of Justinian II', source: 'Wikimedia Commons (Cleveland Museum of Art)',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Byzantium,_Constantinople,_8th_century_-_Solidus_of_Justinian_II_with_Bust_of_Christ_(obverse)_-_2012.47.a_-_Cleveland_Museum_of_Art.jpg',
    note: 'His most consequential single act as an object: putting Christ on the obverse and the emperor on the reverse, describing himself as the servant of Christ. The caliph Abd al-Malik responded by reforming Islamic coinage to bear text alone. Released CC0.'
  },
  epithets: [
    { name: 'Rhinotmetos', type: 'byname', note: 'Means "the slit-nosed", from the mutilation inflicted at his deposition in 695 to disqualify him from ruling. He returned to the throne anyway, reportedly wearing a gold replacement.' }
  ],
  summary: 'Justinian II was deposed and mutilated in 695, exiled to the Crimea, retook Constantinople in 705, and reigned a second time until he was killed in 711 — the last of the Heraclian dynasty.',
  overview: 'The only Byzantine emperor to be mutilated, exiled and then reign again, and the reason the mutilation of rivals stopped being a guarantee.',
  greatestFeats: ['Put the image of Christ on the coinage, the first ruler anywhere to do so', 'Recovered his throne ten years after being deposed and mutilated', 'Convened the Quinisext Council, which codified much of Orthodox canon law'],
  birth: { date: 'c. 668', place: { name: 'Constantinople', slug: 'constantinople' } },
  death: { date: '711', place: { name: 'Anatolia' }, circumstance: 'Killed by rebel officers in December 711 along with his young son, ending the Heraclian dynasty.' },
  quickFacts: { realm: 'Eastern Roman Empire', dynasty: 'Heraclian dynasty', culture: 'Roman', knownFor: 'Being deposed, mutilated, exiled — and coming back' },
  isRuler: true,
  succession: {
    office: 'Emperor of the Romans',
    predecessor: { personSlug: 'constantine-iv', displayName: 'Constantine IV', note: 'His father, who died of dysentery in 685 leaving him the throne at sixteen. The succession box refers to his first reign; his second, from 705, followed the usurpers Leontios and Tiberius III.' },
    successor: { displayName: 'Philippikos Bardanes', note: 'An Armenian officer raised by the revolt that killed Justinian in 711; he reigned two years before being blinded in his turn. No article yet in this archive.' }
  },
  contentSections: [
    S('Overview',
      'Justinian II came to the throne at sixteen in 685 as the fourth generation of his family to rule, and had the confidence of a man who had never known anything else.',
      'His first reign lasted ten years and ended in revolt: he was deposed in 695, had his nose slit and his tongue slit to disqualify him from ever ruling again, and was exiled to Cherson in the Crimea.',
      'He came back. In 705 he retook Constantinople with Bulgar help, ruled a second time for six years, and was killed in 711 with his son — the end of the dynasty Heraclius had founded a century earlier.'),
    S('Birth and early life',
      'He was born about 668, the son of Constantine IV, and succeeded at sixteen with a full treasury, a settled church and a frontier that his father had stabilised on all sides.',
      'His early campaigns went well: he pushed the Arabs back in Armenia, resettled Slavic populations from the Balkans into Anatolia to fill out the army, and negotiated favourably with the caliphate over Cyprus and Armenia.',
      'The trouble was domestic. He taxed hard, built expensively, and used two officials — a former monk and a eunuch treasurer — whose methods of raising money made him hated by exactly the classes that could remove him.'),
    S('Character and Personality',
      'The consistent impression is of ability wrapped in an absolute inability to judge how far he could push people, and after 705 of something considerably darker.',
      'The first reign shows real vision. The coinage reform is a genuinely original act of political theology; the Quinisext Council of 692 codified church discipline in ways still binding in Orthodoxy; the population transfers were ambitious administration. All of it was done without any sense that resentment accumulates.',
      'The second reign is revenge. He came back to punish, executed the men who had deposed him, and sent expeditions against Cherson, the city that had exiled him, with orders the sources describe as exterminatory. Whether ten years of mutilated exile explains that or merely occasioned it is not recoverable, but the change in him is the one thing every source agrees on.'),
    S('Deposition and return',
      'In 695 the army and the city rose, led by the general Leontios. Justinian was deposed, and instead of being executed he was mutilated — nose and tongue slit — on the reasoning that a disfigured man could not be emperor, and exiled to Cherson.',
      'The reasoning failed. He escaped Cherson, married the sister of the Khazar khagan, escaped an assassination attempt arranged with the reigning emperor, sailed through a storm on the Black Sea, and made an alliance with the Bulgar khan Tervel.',
      'In 705 he entered Constantinople through a disused water conduit with a small force, took the palace and the throne, and had his two predecessors publicly humiliated and beheaded. Tervel was rewarded with the title of Caesar — the first foreign ruler ever granted it.'),
    S('Legacy',
      'His return broke the convention that mutilation ended a career, and later Byzantine politics is harsher for it: if a slit nose was not enough, blinding and death became the safer options.',
      'The Quinisext Council and the coinage are the durable achievements, and both were assertions of the same idea — that the emperor governed a specifically Christian order and could say so on the currency and in canon law.',
      'His death in 711 ended the Heraclian dynasty after a hundred and one years. Six emperors followed in six years, until a provincial general took the throne in 717 with an Umayyad army marching on the capital.')
  ],
  timeline: [
    { d: 'c. 668', t: 'Born', x: 'Born to Constantine IV, fourth generation of the Heraclian house.' },
    { d: '685', t: 'Emperor at sixteen', x: 'Succeeds his father with a stable frontier and a full treasury.' },
    { d: '692', t: 'The Quinisext Council', x: 'A council at Constantinople codifies church discipline; Rome refuses to accept several canons.' },
    { d: 'c. 692', t: 'Christ on the coinage', x: 'He becomes the first ruler anywhere to place the image of Christ on a coin.' },
    { d: '695', t: 'Deposed and mutilated', x: 'Leontios overthrows him; his nose is slit and he is exiled to Cherson in the Crimea.' },
    { d: '705', t: 'Returns to the throne', x: 'He enters the city through a water conduit with Bulgar backing and executes his predecessors.' },
    { d: '711', t: 'Killed', x: 'A military revolt kills him and his son in Anatolia, ending the Heraclian dynasty.' }
  ],
  related: { people: [{ title: 'Constantine IV', type: 'person', slug: 'constantine-iv', label: 'His father' }, { title: 'Leo III', type: 'person', slug: 'leo-iii-the-isaurian', label: 'Rose in imperial service under him, and took the throne six years after his death' }], locations: [BYZ, CPL, { title: 'First Bulgarian Empire', type: 'location', slug: 'first-bulgarian-empire', label: 'Whose khan Tervel restored him in 705' }] },
  sources: [THEOPH, src('Justinian II', 'https://en.wikipedia.org/wiki/Justinian_II'), { title: 'Cleveland Museum of Art', url: 'https://www.clevelandart.org/', type: 'museum collection', institution: 'Cleveland Museum of Art' }]
},

{
  id: 'theodosius-iii', name: 'Theodosius III', aliases: ['Theodosios III'],
  born: 680, died: 754, deathAge: 'unknown',
  causeOfDeath: 'Died as a monk at Ephesus, at an unrecorded date after his abdication in 717.',
  location: 'Constantinople', title: 'Emperor of the Romans', roles: ['Emperor'],
  image: img('Coin of Theodosius III.png'),
  imageInfo: {
    caption: 'A coin of Theodosius III, from a reign of less than two years.',
    creator: 'Constantinople mint', date: '715–717', source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Coin_of_Theodosius_III.png',
    note: 'Very little survives of him and the coinage is most of it. A reluctant emperor of twenty months leaves a thin material record. Public domain.'
  },
  summary: 'Theodosius III was a tax collector raised to the throne by a mutiny in 715, and abdicated in 717 rather than fight Leo III with an Umayyad invasion approaching.',
  overview: 'The emperor whose best decision was to stop being emperor.',
  greatestFeats: ['Repaired the walls and stockpiled grain before the siege of 717–718', 'Abdicated without civil war at the moment the empire could least afford one'],
  birth: { date: 'Unknown', place: { name: 'The Byzantine Empire' } },
  death: { date: 'After 717', place: { name: 'Ephesus' }, circumstance: 'Lived as a monk after his abdication; the date of his death is not recorded.' },
  quickFacts: { realm: 'Eastern Roman Empire', dynasty: 'Not dynastic', culture: 'Roman', knownFor: 'Abdicating in favour of Leo III on the eve of the great siege' },
  isRuler: true,
  succession: {
    office: 'Emperor of the Romans',
    predecessor: { displayName: 'Anastasius II', note: 'Deposed by the mutinous Opsikian troops in 715; he later attempted a return with Bulgar help and was executed in 719. No article yet in this archive.' },
    successor: { personSlug: 'leo-iii-the-isaurian', displayName: 'Leo III', note: 'Strategos of the Anatolics, who marched on the capital in 717; Theodosius abdicated on terms rather than fight him with an Umayyad army approaching.' }
  },
  contentSections: [
    S('Overview',
      'Theodosius III was a tax official at Adramyttium when the Opsikian troops mutinied against the emperor Anastasius II in 715 and decided they needed a figurehead.',
      'The sources say he hid, and that they found him and proclaimed him against his will, which is unusual enough to be worth believing.',
      'He held the throne for about twenty months, during which the empire prepared for the invasion everyone knew was coming, and then abdicated in March 717 in favour of a general who could actually fight it.'),
    S('Birth and early life',
      'Nothing certain is known of his origins. A tradition that he was a son of the emperor Tiberius III appears in some sources and is generally rejected.',
      'He was a fiscal official — a tax collector — in the province of the Opsikian theme, which is the least likely background for a Byzantine emperor in this archive apart from Basil I\'s stables.',
      'The mutiny that raised him was about grievances against Anastasius II, not about him, and he was chosen precisely because he was nobody.'),
    S('Character and Personality',
      'There is almost nothing to go on, and the honest thing is to say so rather than construct a personality from two decisions.',
      'What those two decisions show is a man without ambition and with a functioning sense of proportion. He did not want the throne, took it under compulsion, and gave it up the moment a better candidate appeared — at a point when clinging on would have meant civil war with an Umayyad army in Anatolia.',
      'Theophanes, who is hostile to almost everyone, records no crimes against him. For a Byzantine emperor who was deposed, silence in that source is close to praise.'),
    S('Reign and abdication',
      'His government spent its short life preparing. The Theodosian walls were repaired, grain was stockpiled in the capital, and the fleet was made ready — measures that mattered enormously in the twelve months after he left the throne.',
      'In 716 Leo, strategos of the Anatolics, and Artabasdos of the Armeniacs declared against him while negotiating with the advancing Umayyad commander Maslama. By early 717 Leo was marching on the capital.',
      'Theodosius consulted the patriarch and the senate and abdicated on terms in March 717, entering the church at Ephesus as a monk with his son. Five months later the Umayyad army was at the walls, and the city held — partly on the supplies he had laid in.'),
    S('Legacy',
      'He is a footnote with an outsized moment. The empire was one civil war away from losing its capital in 717, and the man on the throne stepped aside instead of fighting for it.',
      'The preparations made in his twenty months were not trivial either: walls, grain and ships are exactly what the siege turned on.',
      'He lived out his life as a monk at Ephesus and is said to have been venerated there. It is the quietest exit any deposed Byzantine emperor in this archive managed.')
  ],
  timeline: [
    { d: '715', t: 'Proclaimed by mutineers', x: 'The Opsikian troops depose Anastasius II and force the throne on a provincial tax official.' },
    { d: '715–716', t: 'Preparing for the siege', x: 'The walls are repaired, grain stockpiled and the fleet made ready.' },
    { d: '716', t: 'Leo and Artabasdos declare', x: 'The strategoi of the Anatolic and Armeniac themes refuse to recognise him.' },
    { d: 'March 717', t: 'Abdication', x: 'He gives up the throne on terms and becomes a monk at Ephesus with his son.' },
    { d: 'August 717', t: 'The siege begins', x: 'The Umayyad army reaches the walls five months after his abdication.', links: [{ title: 'Siege of Constantinople (717–718)', type: 'event', slug: 'siege-of-constantinople-717' }] },
    { d: 'After 717', t: 'Died', x: 'Dies at Ephesus at an unrecorded date; he is said to have been venerated locally.' }
  ],
  related: { people: [{ title: 'Leo III', type: 'person', slug: 'leo-iii-the-isaurian', label: 'To whom he abdicated in 717' }], events: [{ title: 'Siege of Constantinople (717–718)', type: 'event', slug: 'siege-of-constantinople-717', label: 'Which his preparations helped the city survive' }], locations: [BYZ, CPL] },
  sources: [THEOPH, src('Theodosius III', 'https://en.wikipedia.org/wiki/Theodosius_III'), DOAKS]
},

{
  id: 'leo-iv', name: 'Leo IV', aliases: ['Leo IV the Khazar', 'Leon IV'],
  born: 750, died: 780, deathAge: '30',
  causeOfDeath: 'Died of a fever in September 780, aged thirty.',
  location: 'Constantinople', title: 'Emperor of the Romans', roles: ['Emperor'],
  image: img('Gold Solidus of Leo IV.jpg'),
  imageInfo: {
    caption: 'A gold solidus of Leo IV, struck at Constantinople during his short reign.',
    creator: 'Constantinople mint', date: '775–780', source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Gold_Solidus_of_Leo_IV.jpg',
    note: 'A contemporary object of his own reign. Isaurian coinage typically shows the reigning emperor with his predecessors, asserting the dynasty rather than the man. Public domain.'
  },
  epithets: [
    { name: 'the Khazar', type: 'byname', note: 'From his mother Tzitzak, a Khazar khagan\'s daughter who took the name Irene at her baptism — not a comment on him but on the marriage alliance that produced him.' }
  ],
  summary: 'Leo IV reigned five years between two committed iconoclasts, relaxed the persecution of monks, and died at thirty leaving a nine-year-old son and a widow who would undo the family\'s religious policy.',
  overview: 'The moderate in a dynasty of hardliners, and the hinge on which its religious position turned.',
  greatestFeats: ['Relaxed his father\'s persecution of the monasteries', 'Held the eastern frontier and campaigned successfully in Syria', 'Secured his son\'s succession, which passed the throne to his widow Irene'],
  birth: { date: '750', place: { name: 'Constantinople', slug: 'constantinople' } },
  death: { date: '780', place: { name: 'Constantinople', slug: 'constantinople' }, circumstance: 'Died of a fever in September 780; a later tradition that it was brought on by a stolen crown is unverifiable.' },
  quickFacts: { realm: 'Eastern Roman Empire', dynasty: 'Isaurian dynasty', culture: 'Roman, of Khazar descent on his mother\'s side', knownFor: 'A short moderate reign between two iconoclast emperors' },
  isRuler: true,
  succession: {
    office: 'Emperor of the Romans',
    predecessor: { personSlug: 'constantine-v', displayName: 'Constantine V', note: 'His father, the dynasty\'s best soldier and its most committed iconoclast, who died on campaign against the Bulgars in 775.' },
    successor: { personSlug: 'constantine-vi', displayName: 'Constantine VI', note: 'His son, nine years old at his accession, for whom his widow Irene governed as regent — and whom she eventually blinded.' }
  },
  contentSections: [
    S('Overview',
      'Leo IV ruled for five years between his father Constantine V, who persecuted the monasteries, and his wife Irene, who restored the icons. He did neither.',
      'He kept the iconoclast position formally but stopped enforcing it harshly, appointed monks to bishoprics, and let the temperature fall — until near the end of his reign, when he moved against courtiers found with icons.',
      'He died at thirty in 780, leaving a nine-year-old heir and a strongly iconophile widow with the regency, which decided the empire\'s religious direction for the next twenty years.'),
    S('Birth and early life',
      'He was born in 750 to Constantine V and the empress Irene — a Khazar princess, daughter of the khagan, married to seal an alliance against the caliphate, and the source of his byname.',
      'He was crowned co-emperor as a small child in 751, and grew up in the household of the most militarily successful emperor of the century, campaigning with his father against the Bulgars.',
      'In 769 he married an Athenian orphan named Irene, chosen in circumstances the sources do not explain and who was, whatever the process, a convinced venerator of icons married into the family that had outlawed them.'),
    S('Character and Personality',
      'He is a genuinely difficult figure to read because his reign was short and his position was ambiguous, and the iconophile sources that dominate the period cannot decide whether to credit him with restraint or condemn him for heresy.',
      'What the actions suggest is a ruler who inherited a policy he did not much believe in and was unwilling either to enforce or to repudiate — appointing monks as bishops, ending the public humiliations, and leaving the doctrine in place.',
      'The one hard episode is at the end: in 780 a group of courtiers was found with icons and punished, and the sources link it to a rupture with his wife. Whether that represents a change of heart, a reassertion under pressure from the army, or simply a palace quarrel cannot be determined from what survives.'),
    S('Reign',
      'Militarily the reign continued his father\'s success without his father\'s intensity. Byzantine forces campaigned in Syria in 778, taking Germanikeia, and beat back Abbasid raids into Anatolia.',
      'On the northern frontier he kept the peace his father\'s nine Bulgarian campaigns had bought, and he was preparing an expedition against the Bulgars when he died.',
      'His most consequential act was dynastic: in 776 he had his son Constantine crowned co-emperor and made the army and the city swear to recognise no other line, over the objections of his own half-brothers, whose subsequent conspiracies he put down.'),
    S('Legacy',
      'The five years matter mostly for what they made possible. By relaxing the persecution without repudiating the doctrine, he left the question open at exactly the moment his death handed the government to Irene.',
      'She restored the veneration of images at the Second Council of Nicaea in 787, seven years after he died, and the iconoclasm his father had entrenched was condemned as heresy within a generation.',
      'A later tradition holds that he died of a fever brought on by wearing a jewelled crown taken from Hagia Sophia — a story with the shape of a moral about sacrilege, and no evidential value whatever.')
  ],
  timeline: [
    { d: '750', t: 'Born', x: 'Born to Constantine V and his Khazar wife Irene.' },
    { d: '751', t: 'Crowned co-emperor', x: 'Crowned as an infant, securing the Isaurian succession into a third generation.' },
    { d: '769', t: 'Marries Irene of Athens', x: 'Marries an Athenian orphan who venerates icons, into a family that has outlawed them.' },
    { d: '775', t: 'Becomes emperor', x: 'Succeeds on his father\'s death on campaign against the Bulgars.' },
    { d: '776', t: 'His son crowned', x: 'Constantine VI is made co-emperor and the succession is sworn to, over his half-brothers\' objections.' },
    { d: '778', t: 'Campaign in Syria', x: 'Byzantine forces take Germanikeia and beat back Abbasid raids into Anatolia.' },
    { d: '780', t: 'Died', x: 'Dies of a fever at thirty, leaving a nine-year-old heir and an iconophile widow as regent.' }
  ],
  related: { people: [{ title: 'Constantine V', type: 'person', slug: 'constantine-v', label: 'His father' }, { title: 'Constantine VI', type: 'person', slug: 'constantine-vi', label: 'His son and successor' }, { title: 'Irene of Athens', type: 'person', slug: 'irene-of-athens', label: 'His wife, who governed after him and restored the icons' }], locations: [BYZ, CPL] },
  sources: [THEOPH, src('Leo IV the Khazar', 'https://en.wikipedia.org/wiki/Leo_IV_the_Khazar'), DOAKS]
},

{
  id: 'constantine-vi', name: 'Constantine VI', aliases: ['Konstantinos VI'],
  born: 771, died: 797, deathAge: 'unknown',
  causeOfDeath: 'Blinded on his mother\'s orders in August 797; the date and manner of his death afterwards are not recorded.',
  location: 'Constantinople', title: 'Emperor of the Romans', roles: ['Emperor'],
  image: img('INC-3040-r Солид. Константин VI и Ирина. 793—979 гг. (реверс).png'),
  imageInfo: {
    caption: 'A gold solidus showing Constantine VI with his mother Irene, struck in the years when they ruled jointly.',
    creator: 'Constantinople mint', date: '790s', source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:INC-3040-r_%D0%A1%D0%BE%D0%BB%D0%B8%D0%B4._%D0%9A%D0%BE%D0%BD%D1%81%D1%82%D0%B0%D0%BD%D1%82%D0%B8%D0%BD_VI_%D0%B8_%D0%98%D1%80%D0%B8%D0%BD%D0%B0._793%E2%80%94979_%D0%B3%D0%B3._(%D1%80%D0%B5%D0%B2%D0%B5%D1%80%D1%81).png',
    note: 'A contemporary object showing the arrangement that defined and ended his life: mother and son on the same coin, in a joint rule that neither of them accepted. Public domain.'
  },
  summary: 'Constantine VI reigned under his mother Irene, pushed her aside, was pushed back, and was blinded on her orders in 797 in the room where he had been born.',
  overview: 'The last male Isaurian, destroyed by a mother who wanted the throne more than she wanted a son on it.',
  greatestFeats: ['Took personal command of the army against the Bulgars and the Arabs', 'Briefly governed in his own name after removing his mother from power in 790'],
  birth: { date: '771', place: { name: 'Constantinople', slug: 'constantinople' } },
  death: { date: 'After 797', place: { name: 'Constantinople', slug: 'constantinople' }, circumstance: 'Blinded in the Porphyra chamber of the palace in August 797; whether he died of the wounds or lived on in obscurity is disputed.' },
  quickFacts: { realm: 'Eastern Roman Empire', dynasty: 'Isaurian dynasty', culture: 'Roman', knownFor: 'Being blinded by his own mother to keep her on the throne' },
  isRuler: true,
  succession: {
    office: 'Emperor of the Romans',
    predecessor: { personSlug: 'leo-iv', displayName: 'Leo IV', note: 'His father, who died of a fever in 780 leaving him emperor at nine under his mother\'s regency.' },
    successor: { personSlug: 'irene-of-athens', displayName: 'Irene of Athens', note: 'His mother, who had him blinded and then ruled in her own name as emperor — the first woman to do so.' }
  },
  contentSections: [
    S('Overview',
      'Constantine VI became emperor at nine in 780 with his mother Irene as regent, and spent his entire adult life failing to get out from under her.',
      'He was of age in 790 and forced her from power with army backing, then let her return as co-ruler within two years, which was the decisive mistake.',
      'In 797, after a series of military failures and a scandalous second marriage had cost him his support, she had him seized and blinded in the room he had been born in. He disappears from the record afterwards.'),
    S('Birth and early life',
      'He was born in 771, crowned co-emperor at five, and was nine when his father died. His mother governed as regent for a decade and had no intention of stopping.',
      'A betrothal to Charlemagne\'s daughter Rotrud was arranged and then broken off, a piece of diplomacy that mattered more than it seems: a Frankish–Byzantine marriage would have changed the shape of the next century, and its failure contributed to Charlemagne\'s imperial coronation in 800.',
      'Irene instead married him to Maria of Amnia, chosen through a bride-show, in 788. He resented the choice and eventually repudiated her, which became the crisis of his reign.'),
    S('Character and Personality',
      'He is generally judged weak, and the judgement is largely fair, but it is worth being precise about what the weakness consisted of.',
      'He was not incapable — he campaigned personally, held commands, and had enough support in the army in 790 to remove his mother from power outright. What he lacked was the ruthlessness to finish anything: having deposed Irene, he restored her; having gained the army\'s loyalty, he spent it by blinding and mutilating his uncles and having a popular general\'s eyes put out.',
      'The sources for all this are monastic and hostile to him for the marriage rather than the politics, so the moral emphasis is skewed. But the pattern of half-measures is visible through the bias and it is what destroyed him.'),
    S('Reign and fall',
      'His military record was poor: defeats by the Bulgars at Marcellae in 792 and by the Arabs, and a mutiny in the Armeniac theme that he suppressed with mutilations that cost him the army\'s goodwill.',
      'The fatal issue was his marriage. In 795 he repudiated Maria, forced her into a convent, and married his mistress Theodote — an act the church condemned as adultery and which produced the "Moechian controversy", a schism between the emperor and the monastic party led by Theodore the Studite.',
      'That gave Irene her opening. With the monks against him, the army alienated and his own record indefensible, she moved in August 797: he was seized in the palace and blinded, deliberately in the Porphyra, the chamber where imperial children were born and where he had been born himself.'),
    S('Legacy',
      'He was the last male ruler of the Isaurian dynasty. Irene ruled alone for five years, was deposed in 802, and the family that had saved Constantinople in 718 ended in a palace coup.',
      'The blinding is one of the most notorious acts in Byzantine history, and its notoriety is deserved — but it is also the logical endpoint of a system with no rule of succession, in which the difference between regent and ruler was whatever the parties could enforce.',
      'His deposition had a distant consequence in the west. With a woman on the throne in Constantinople and no emperor the Franks recognised, the papacy crowned Charlemagne emperor in Rome on Christmas Day 800.')
  ],
  timeline: [
    { d: '771', t: 'Born', x: 'Born to Leo IV and Irene of Athens.' },
    { d: '780', t: 'Emperor at nine', x: 'Succeeds his father under his mother\'s regency.' },
    { d: '788', t: 'Married to Maria of Amnia', x: 'His mother arranges the marriage after breaking off his betrothal to Charlemagne\'s daughter.' },
    { d: '790', t: 'Removes his mother', x: 'With army backing he forces Irene from power and rules in his own name.' },
    { d: '792', t: 'Irene restored, Marcellae lost', x: 'He allows his mother back as co-ruler and is defeated by the Bulgars at Marcellae.' },
    { d: '795', t: 'The Moechian controversy', x: 'He repudiates his wife and marries his mistress, splitting with the monastic party.' },
    { d: '797', t: 'Blinded', x: 'Seized on his mother\'s orders and blinded in the chamber where he was born.' }
  ],
  related: { people: [{ title: 'Irene of Athens', type: 'person', slug: 'irene-of-athens', label: 'His mother, regent, rival and destroyer' }, { title: 'Leo IV', type: 'person', slug: 'leo-iv', label: 'His father' }], locations: [BYZ, CPL] },
  sources: [THEOPH, src('Constantine VI', 'https://en.wikipedia.org/wiki/Constantine_VI'), DOAKS]
},

{
  id: 'irene-of-athens', name: 'Irene of Athens', aliases: ['Irene', 'Eirene', 'Empress Irene'],
  born: 752, died: 803, deathAge: 'about 51',
  causeOfDeath: 'Died in exile on Lesbos in August 803, less than a year after being deposed.',
  location: 'Constantinople', title: 'Emperor of the Romans', roles: ['Empress', 'Emperor'],
  image: img('Irene solidus sb 1599 (obverse).jpg'),
  imageInfo: {
    caption: 'A gold solidus of Irene, crowned and holding cross and sceptre, with her name and title around the edge.',
    creator: 'Constantinople mint', date: '797–802', source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Irene_solidus_sb_1599_(obverse).jpg',
    note: 'A contemporary object from her sole reign. Her coins are the point of the reign in miniature: she issued them in her own name and on some of them styled herself basileus, the masculine title, rather than the feminine basilissa. Public domain.'
  },
  summary: 'Irene ruled the Byzantine Empire as regent and then in her own name, restored the veneration of icons at the Second Council of Nicaea, and had her own son blinded to keep the throne.',
  overview: 'The first woman to rule the empire in her own right, and the reason the pope decided the imperial throne was vacant.',
  greatestFeats: ['Restored the veneration of images at the Second Council of Nicaea in 787', 'Ruled as sole monarch from 797 to 802, the first woman to do so', 'Governed the empire in fact for more than twenty years'],
  birth: { date: 'c. 752', place: { name: 'Athens' } },
  death: { date: '803', place: { name: 'Lesbos' }, circumstance: 'Died in exile on Lesbos in August 803, reportedly supporting herself by spinning wool.' },
  quickFacts: { realm: 'Eastern Roman Empire', dynasty: 'Isaurian dynasty', culture: 'Roman, from Athens', knownFor: 'Restoring the icons, and blinding her own son' },
  isRuler: true,
  succession: {
    office: 'Emperor of the Romans',
    predecessor: { personSlug: 'constantine-vi', displayName: 'Constantine VI', note: 'Her son, whom she had blinded in August 797 in order to rule alone.' },
    successor: { displayName: 'Nikephoros I', note: 'Her finance minister, who deposed her in a palace coup in October 802 and reigned until Krum of Bulgaria destroyed him and his army in 811. No article yet in this archive.' }
  },
  contentSections: [
    S('Overview',
      'Irene was an orphan from Athens brought to Constantinople in 769 to marry the heir of a dynasty that had spent forty years suppressing the veneration of religious images — which she venerated.',
      'When her husband Leo IV died in 780 she became regent for their nine-year-old son, and she governed the empire, with one interruption, for the next twenty-two years.',
      'She reversed the religious policy of the dynasty she had married into, was pushed aside by her son, came back, had him blinded, and ruled for five years as sole monarch. She was deposed in 802 and died in exile within a year.'),
    S('Birth and early life',
      'She came from a noble Athenian family, was orphaned, and was selected as a bride for Leo IV in circumstances the sources do not explain — possibly a bride-show, possibly a deliberate choice of someone without a powerful family behind her.',
      'That she was an iconophile marrying into the iconoclast house is either a remarkable oversight or evidence that the policy was less absolute at court than the later sources suggest.',
      'She bore Constantine in 771. In 780, months before Leo\'s death, a group of courtiers was caught with icons and punished, and the sources link the episode to a rupture between the imperial couple.'),
    S('Character and Personality',
      'She is one of the most consequential rulers in this archive and one of the hardest to judge fairly, because the two things she is known for point in opposite moral directions.',
      'The iconophile sources, who owe her everything, praise her piety and her firmness. They also have to record that she blinded her son, and they largely do so without comment, which is its own kind of statement.',
      'What the record shows is exceptional political skill: she outmanoeuvred her husband\'s brothers, purged and rebuilt the army command, called and controlled a general council of the church, and recovered power after being removed from it. And it shows that she would do anything at all to hold it. Both are true and neither cancels the other.'),
    S('The restoration of the icons',
      'Her first attempt at a council in 786 was broken up by iconoclast soldiers who invaded the church with drawn swords. She responded by transferring the units concerned out of the capital on a pretext and disbanding them.',
      'The Second Council of Nicaea met in 787 and condemned iconoclasm, restoring the veneration — not worship — of images and defining the distinction that Orthodox theology has held to since.',
      'It did not settle the matter permanently; iconoclasm returned under Leo V in 815 and was only finally ended in 843. But the theological framework was set here, and it is the reason her memory is honoured in the Orthodox church despite everything else.'),
    S('Sole rule and fall',
      'Her son removed her from power in 790, restored her in 792, and by 797 had destroyed his own support. In August she had him seized and blinded, and took the throne herself.',
      'She ruled for five years and issued coins and documents in her own name, in some cases using basileus, the masculine title. She cut taxes heavily, which was popular and fiscally ruinous, and negotiated with Charlemagne — a marriage between them was discussed, which would have reunited the empires on paper.',
      'In October 802 her finance minister Nikephoros led a palace coup, and she was exiled to Lesbos, where she died within the year.'),
    S('Legacy',
      'She restored the icons and ended the first iconoclast period, which is why she is a saint in the Orthodox church, and she blinded her son, which is why she is not much celebrated anywhere else.',
      'Her sole rule had a consequence she cannot have wanted. In the west, a woman on the imperial throne was treated as a vacancy: on Christmas Day 800 Pope Leo III crowned Charlemagne emperor in Rome, on the argument that there was no emperor in Constantinople. The two-empire problem in medieval Europe begins here.',
      'She was the last of the Isaurian line to rule, and the dynasty that had held the walls in 718 ended with her deposition by a treasury official.')
  ],
  timeline: [
    { d: 'c. 752', t: 'Born', x: 'Born to a noble Athenian family and orphaned young.' },
    { d: '769', t: 'Marries Leo IV', x: 'An icon-venerating Athenian marries the heir of the iconoclast dynasty.' },
    { d: '780', t: 'Regent', x: 'Leo IV dies and she governs for their nine-year-old son.' },
    { d: '786', t: 'The council broken up', x: 'Iconoclast soldiers disrupt her first council; she disbands the units responsible.' },
    { d: '787', t: 'Second Council of Nicaea', x: 'Iconoclasm is condemned and the veneration of images restored.' },
    { d: '790', t: 'Removed by her son', x: 'Constantine VI takes power with army backing; she is restored as co-ruler two years later.' },
    { d: '797', t: 'Blinds her son and takes the throne', x: 'Constantine VI is blinded and she rules alone, the first woman to do so.' },
    { d: '800', t: 'Charlemagne crowned in Rome', x: 'The papacy treats the imperial throne as vacant with a woman on it.' },
    { d: '802', t: 'Deposed', x: 'Her finance minister Nikephoros overthrows her in a palace coup.' },
    { d: '803', t: 'Died', x: 'Dies in exile on Lesbos within a year of her deposition.' }
  ],
  related: { people: [{ title: 'Constantine VI', type: 'person', slug: 'constantine-vi', label: 'Her son, whom she blinded' }, { title: 'Leo IV', type: 'person', slug: 'leo-iv', label: 'Her husband' }, { title: 'Charlemagne', type: 'person', slug: 'charlemagne', label: 'Crowned emperor in the west during her sole reign' }], locations: [BYZ, CPL] },
  sources: [THEOPH, src('Irene of Athens', 'https://en.wikipedia.org/wiki/Irene_of_Athens'), DOAKS]
},

{
  id: 'theophilos', name: 'Theophilos', aliases: ['Theophilus', 'Theophilos the Unfortunate'],
  born: 813, died: 842, deathAge: 'about 29',
  causeOfDeath: 'Died of dysentery in January 842, aged about twenty-nine.',
  location: 'Constantinople', title: 'Emperor of the Romans', roles: ['Emperor'],
  image: img('Theophilos (cropped).jpg'),
  imageInfo: {
    caption: 'Theophilos enthroned, in a detail from a Madrid Skylitzes miniature.',
    creator: 'Madrid Skylitzes manuscript', date: '12th–13th century', source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Theophilos_(cropped).jpg',
    note: 'A manuscript image painted three to four centuries after his death, in a chronicle written by the party that had defeated his religious policy. Not a likeness. Public domain.'
  },
  summary: 'Theophilos was the last iconoclast emperor, a conspicuous patron of learning and building, and the ruler who watched the Abbasids sack Amorion, his own dynasty\'s home city.',
  overview: 'The most cultivated emperor of the ninth century and the one whose reign was defined by a defeat he could not prevent.',
  greatestFeats: ['Rebuilt the Great Palace with mechanical marvels and patronised the mathematician Leo', 'Reformed the coinage and heard petitions from the public in person', 'Held the empire together through the worst Abbasid campaign of the century'],
  birth: { date: 'c. 813', place: { name: 'Constantinople', slug: 'constantinople' } },
  death: { date: '842', place: { name: 'Constantinople', slug: 'constantinople' }, circumstance: 'Died of dysentery in January 842, leaving a two-year-old son under the regency of his wife Theodora.' },
  quickFacts: { realm: 'Eastern Roman Empire', dynasty: 'Amorian dynasty', culture: 'Roman', knownFor: 'The last iconoclast reign, and the sack of Amorion' },
  isRuler: true,
  succession: {
    office: 'Emperor of the Romans',
    predecessor: { displayName: 'Michael II', note: 'His father, called the Amorian and the Stammerer, who took the throne in 820 by having Leo V murdered in the palace chapel. No article yet in this archive.' },
    successor: { personSlug: 'michael-iii', displayName: 'Michael III', note: 'His son, two years old at his accession, under the regency of the empress Theodora — who ended iconoclasm within a year of Theophilos\'s death.' }
  },
  contentSections: [
    S('Overview',
      'Theophilos ruled from 829 to 842 and is the most conspicuously cultivated emperor between Justinian and Constantine VII: a patron of scholars, a builder of palaces, and a ruler who took the ceremonial and judicial functions of the office unusually seriously.',
      'He was also the last iconoclast, reviving a policy that had gone quiet, and the emperor under whom the Abbasid caliphate inflicted the heaviest defeat of the century on the empire.',
      'In 838 the caliph al-Mu\'tasim marched on Amorion — his own dynasty\'s home city, chosen for exactly that reason — and destroyed it. He died four years later at twenty-nine.'),
    S('Birth and early life',
      'He was born about 813, the son of Michael II, a provincial soldier from Amorion in Phrygia who had come to the throne by murdering his predecessor in the palace chapel on Christmas morning 820.',
      'He was crowned co-emperor as a child and given a serious education under John the Grammarian, a scholar and committed iconoclast who became patriarch and shaped both his learning and his religious position.',
      'He succeeded in 829 and married Theodora, chosen at a bride-show, who venerated icons — the same arrangement that had produced Irene two generations earlier, and with the same eventual outcome.'),
    S('Character and Personality',
      'The sources are hostile on doctrine and unusually admiring on everything else, which makes him one of the better-attested Byzantine personalities.',
      'He is described riding weekly to the church of the Blachernae so that anyone could approach him with a petition, and hearing cases in person with a reputation for even-handedness that the tradition preserved despite disapproving of him.',
      'The taste for display was famous: a throne room with a gilded plane tree full of mechanical singing birds and lions that roared, a palace built in imitation of the caliph\'s at Baghdad, and diplomatic gifts designed to impress the very court he was fighting. He also had a genuine intellectual seriousness — the mathematician Leo was his protégé, and the caliph al-Ma\'mun is said to have tried to hire the man away.'),
    S('The war and Amorion',
      'The eastern war ran throughout his reign and mostly against him. He won a notable success at Zapetra in 837 and celebrated a triumph for it, which provoked exactly the retaliation it should have.',
      'In 838 al-Mu\'tasim invaded with one of the largest armies the caliphate ever sent into Anatolia and split it in two. Theophilos was defeated at Anzen, and the caliph marched on Amorion — the birthplace of the dynasty, chosen deliberately as the target.',
      'The city fell after a siege of two weeks and was destroyed, its population killed or enslaved. Forty-two officers taken there were held at Samarra for seven years and executed for refusing to convert; they are remembered in the Orthodox calendar as the Forty-Two Martyrs of Amorion. Theophilos never recovered from it, politically or personally.'),
    S('Legacy',
      'His religious policy died with him. Within a year of his death his widow Theodora had restored the veneration of images, and she managed it so as to protect his memory — insisting he had repented before the end, which is what allowed the settlement to be made without condemning the last emperor by name.',
      'What survived was the cultural revival. The patronage of Leo the Mathematician and the scholarship of his reign feed directly into the intellectual flowering under his son and the Macedonians after them.',
      'The Byzantine popular tradition treated him kindly, remembering the emperor who rode out to hear complaints. Given that he lost Amorion and backed the losing side of the empire\'s longest religious argument, that is a considerable achievement of reputation.')
  ],
  timeline: [
    { d: 'c. 813', t: 'Born', x: 'Born to Michael II, first emperor of the Amorian dynasty.' },
    { d: '829', t: 'Becomes emperor', x: 'Succeeds his father and marries Theodora, chosen at a bride-show.' },
    { d: '830s', t: 'Patronage and building', x: 'Rebuilds the Great Palace with mechanical marvels and patronises Leo the Mathematician.' },
    { d: '837', t: 'Victory at Zapetra', x: 'A successful raid into Abbasid territory is celebrated with a triumph in the capital.' },
    { d: '838', t: 'Anzen and Amorion', x: 'Defeated at Anzen; al-Mu\'tasim destroys Amorion, the dynasty\'s home city.' },
    { d: '840s', t: 'The Forty-Two Martyrs', x: 'Officers captured at Amorion are held at Samarra and executed for refusing to convert.' },
    { d: '842', t: 'Died', x: 'Dies of dysentery at about twenty-nine, leaving a two-year-old heir.' }
  ],
  related: { people: [{ title: 'Michael III', type: 'person', slug: 'michael-iii', label: 'His son and successor' }, { title: 'Petronas', type: 'person', slug: 'petronas', label: 'His wife\'s brother, later the victor of the Lalakaon' }], locations: [BYZ, CPL, { title: 'Abbasid Caliphate', type: 'location', slug: 'abbasid-caliphate', label: 'Which sacked his dynasty\'s home city in 838' }] },
  sources: [THEOPH, src('Theophilos (emperor)', 'https://en.wikipedia.org/wiki/Theophilos_(emperor)'), DOAKS]
},

{
  id: 'basil-i', name: 'Basil I', aliases: ['Basil the Macedonian', 'Basileios I'],
  born: 811, died: 886, deathAge: 'about 75',
  causeOfDeath: 'Died in August 886 of a fever, after a hunting accident in which he was reportedly dragged by a stag.',
  location: 'Constantinople', title: 'Emperor of the Romans', roles: ['Emperor'],
  image: img('Basil I (Mutinensis).png'),
  imageInfo: {
    caption: 'Basil I in a fifteenth-century portrait from the Modena manuscript of the chronicle of John Zonaras.',
    creator: 'Unknown Byzantine artist, Mutinensis gr. 122', date: '15th century', source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Basil_I_(Mutinensis).png',
    note: 'Drawn some six centuries after his death for a manuscript of a chronicle, from the same codex as this archive\'s portraits of Leo III and Nikephoros II. A convention of imperial appearance rather than a likeness. Public domain.'
  },
  summary: 'Basil I rose from a Macedonian peasant family through the imperial stables, murdered his patron Michael III in 867, and founded the dynasty that ruled Byzantium for 189 years.',
  overview: 'A groom who became emperor by killing the man who raised him, and whose descendants took the empire to its medieval peak.',
  greatestFeats: ['Founded the Macedonian dynasty, the longest and most successful in Byzantine history', 'Began the recodification of Roman law in Greek completed by his son as the Basilika', 'Recovered ground in southern Italy and rebuilt the fleet'],
  birth: { date: 'c. 811', place: { name: 'The theme of Macedonia, in Thrace' } },
  death: { date: '886', place: { name: 'Constantinople', slug: 'constantinople' }, circumstance: 'Died in August 886 after a hunting accident, having outlived his favourite son and, by some accounts, lost his balance of mind.' },
  quickFacts: { realm: 'Eastern Roman Empire', dynasty: 'Macedonian dynasty', culture: 'Roman, of Armenian descent settled in Thrace', knownFor: 'Founding the Macedonian dynasty by murder' },
  isRuler: true,
  succession: {
    office: 'Emperor of the Romans',
    predecessor: { personSlug: 'michael-iii', displayName: 'Michael III', note: 'His patron, who raised him from the stables to co-emperor, and whom he had murdered in his bedchamber in September 867.' },
    successor: { displayName: 'Leo VI the Wise', note: 'His son — or possibly Michael III\'s, since Leo\'s mother had been Michael\'s mistress before Basil married her. He completed the Basilika and married four times to get an heir. No article yet in this archive.' }
  },
  contentSections: [
    S('Overview',
      'Basil was born to a peasant family in the theme of Macedonia in Thrace, of Armenian descent, and came to Constantinople with nothing.',
      'He rose through a talent for horses and physical strength into the imperial stables, attracted the attention of the emperor Michael III, and became his chamberlain, his favourite and finally his co-emperor.',
      'He got there by murder: the Caesar Bardas in 866, and Michael himself in September 867. The dynasty he founded lasted until 1056 and produced the empire\'s medieval peak, which is why the histories written under it worked so hard on the story of how it began.'),
    S('Birth and early life',
      'The details of his origins are obscured by later dynastic propaganda, which supplied him with a descent from the Armenian Arsacid kings and prophetic dreams to match. What survives underneath is a peasant family, possibly one deported to Thrace, and a young man who walked to the capital looking for work.',
      'He entered the service of a relative of the emperor, was noticed for breaking a horse nobody else could manage and for defeating a Bulgarian champion in a wrestling match, and was taken into Michael III\'s household.',
      'The rise was fast and complete: chamberlain, then married to the emperor\'s mistress Eudokia Ingerina at Michael\'s arrangement, then co-emperor in 866 after he had removed the Caesar Bardas — the emperor\'s uncle and the man actually running the government.'),
    S('Character and Personality',
      'Everything written about him was written by or for his descendants, and it is worth being blunt about what that means: the sources are a dynastic charter, not a biography.',
      'They give him vigour, judgement, personal courage and a talent for administration, and the record of the reign does support competence. They also give him a providential rise, prophetic signs and a predecessor so degenerate that killing him was a public service — which is the part that should be set aside.',
      'What can be read through it is a man of enormous physical ability and political nerve who was entirely unsentimental about the people who had helped him. He killed Bardas, who had made his career possible, and Michael, who had made him emperor. His last years were dominated by grief for a dead son and by suspicion of the living one, whom he imprisoned for three years.'),
    S('Reign',
      'The legal work is the achievement that lasted. He began a systematic revision and translation of Justinian\'s law into Greek, issued the Procheiron and the Epanagoge, and set in motion the recodification his son completed as the Basilika — the legal foundation of the middle Byzantine state.',
      'Militarily the record is mixed but positive: ground recovered in southern Italy, Bari taken in 876, the fleet rebuilt and Cyprus briefly recovered, and campaigns against the Paulicians of Tephrike that destroyed them as a power.',
      'In the church he deposed the patriarch Photios, restored him later, and managed relations with Rome with more care than his predecessors — a policy of not provoking the papacy that lasted until his son fell out with it.'),
    S('Legacy',
      'The dynasty is the legacy. Nine emperors and 189 years, including Constantine VII, Nikephoros II and John I as regents by marriage, and Basil II — under whom the empire reached its greatest medieval extent.',
      'The historiographical legacy is more troubling and this archive has to keep pointing at it. The Macedonian historians blackened Michael III to justify the murder, and the version they produced held for a thousand years; the archive\'s article on Michael III exists partly to say so.',
      'His own end has a symmetry the chroniclers enjoyed: killed by a hunting accident involving a stag, in some accounts after his belt caught on its antlers, and dying convinced his surviving son was plotting against him. Leo VI succeeded without difficulty.')
  ],
  timeline: [
    { d: 'c. 811', t: 'Born', x: 'Born to a peasant family of Armenian descent in the theme of Macedonia.' },
    { d: 'c. 856', t: 'Enters Michael III\'s household', x: 'Noticed for horsemanship and strength, he becomes the emperor\'s favourite and chamberlain.' },
    { d: '866', t: 'Murders Bardas', x: 'The Caesar who governed the empire is killed with the emperor\'s consent; Basil is crowned co-emperor.' },
    { d: '867', t: 'Murders Michael III', x: 'The emperor is killed in his bedchamber and Basil takes the throne alone.', links: [{ title: 'Michael III', type: 'person', slug: 'michael-iii' }] },
    { d: '870s', t: 'The legal revival', x: 'The Procheiron and Epanagoge begin the recodification of Roman law in Greek.' },
    { d: '872', t: 'Tephrike destroyed', x: 'The Paulician state on the eastern frontier is broken.' },
    { d: '876', t: 'Bari taken', x: 'Byzantine authority is restored in southern Italy.' },
    { d: '886', t: 'Died', x: 'Dies after a hunting accident; his son Leo VI succeeds.' }
  ],
  related: { people: [{ title: 'Michael III', type: 'person', slug: 'michael-iii', label: 'His patron, whom he murdered' }, { title: 'Basil II', type: 'person', slug: 'basil-ii', label: 'His great-great-grandson, the dynasty\'s greatest emperor' }], locations: [BYZ, CPL] },
  sources: [SKYL, src('Basil I', 'https://en.wikipedia.org/wiki/Basil_I'), DOAKS]
},

{
  id: 'constantine-vii', name: 'Constantine VII', aliases: ['Constantine VII Porphyrogennetos', 'Konstantinos VII'],
  born: 905, died: 959, deathAge: '54',
  causeOfDeath: 'Died in November 959, possibly of fever; poisoning by his daughter-in-law was rumoured and never shown.',
  location: 'Constantinople', title: 'Emperor of the Romans', roles: ['Emperor', 'Scholar'],
  image: img('Constantine VII Porphyrogenitus (2).jpeg'),
  imageInfo: {
    caption: 'Christ crowning Constantine VII, on a carved ivory panel inscribed with his name and title.',
    creator: 'Constantinople, imperial workshop', date: 'mid-10th century', source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Constantine_VII_Porphyrogenitus_(2).jpeg',
    note: 'A contemporary object made in his own reign and inscribed with his name, which makes it one of the securest imperial images in this archive. The subject is a claim as much as a portrait: the emperor crowned directly by Christ, without human intermediary — useful for a man whose legitimacy had been questioned since birth. Public domain.'
  },
  epithets: [
    { name: 'Porphyrogennetos', type: 'byname', note: 'Means "born in the purple", in the porphyry chamber reserved for the birth of a reigning emperor\'s children. He used it constantly, because his legitimacy was attacked from birth: his parents\' marriage was his father\'s fourth and canonically irregular.' }
  ],
  summary: 'Constantine VII spent most of his life as a figurehead while others ruled, and used the time to write the books that are now the principal sources for how the Byzantine Empire understood itself.',
  overview: 'The emperor who was kept from power and turned the enforced leisure into the most useful body of writing any medieval ruler produced.',
  greatestFeats: ['Commissioned and partly wrote the De Administrando Imperio and the Book of Ceremonies', 'Patronised the encyclopaedic compilation that preserved much of classical learning', 'Ruled in his own right for fourteen years after four decades as a figurehead'],
  birth: { date: '905', place: { name: 'Constantinople', slug: 'constantinople' } },
  death: { date: '959', place: { name: 'Constantinople', slug: 'constantinople' }, circumstance: 'Died in November 959; his son Romanos II succeeded him without dispute.' },
  quickFacts: { realm: 'Eastern Roman Empire', dynasty: 'Macedonian dynasty', culture: 'Roman', knownFor: 'The books that are the archive\'s own sources for Byzantium' },
  isRuler: true,
  succession: {
    office: 'Emperor of the Romans',
    predecessor: { displayName: 'Alexander', note: 'His uncle, brother of Leo VI, whose thirteen-month reign in 912–913 was destructive enough that his death was widely welcomed. No article yet in this archive.' },
    successor: { personSlug: 'romanos-ii', displayName: 'Romanos II', note: 'His son, who reigned less than four years and in that time sent the expedition that retook Crete.' }
  },
  contentSections: [
    S('Overview',
      'Constantine VII was born in 905 to Leo VI and his fourth wife, a marriage the church regarded as uncanonical, and he spent his entire life answering the question of whether he was legitimate.',
      'He became emperor at seven and was a figurehead for most of the next forty years — first under regents, then under his father-in-law Romanos Lekapenos, who made himself senior emperor and ruled for a quarter of a century.',
      'He ruled in his own right only from 945, at forty. What he did with the decades of enforced idleness is why he matters: he wrote, commissioned and compiled the works that are now the main sources for Byzantine government, diplomacy, ceremony and the peoples around the empire.'),
    S('Birth and early life',
      'His father Leo VI had married three times without producing a surviving male heir, and Byzantine canon law disapproved of even a third marriage. The fourth, to Constantine\'s mother Zoe Karbonopsina, was a scandal that split the church and got the emperor temporarily barred from communion.',
      'He was born in the porphyry chamber of the palace — hence Porphyrogennetos, a title he used at every opportunity as an argument about his own status.',
      'His father died when he was six and his uncle Alexander a year later, leaving him a child emperor under a regency that included his mother and the patriarch, in an atmosphere of coups and Bulgarian invasion.'),
    S('Character and Personality',
      'He is the most sympathetic figure in this archive\'s Byzantine material and one of the least effective, and the two are related.',
      'The sources describe a mild, studious, sociable man, fond of painting and food and conversation, who drank more than he should in later life and who was not remotely a match for the professional politicians around him. Romanos Lekapenos took his government away by marrying a daughter to him and simply outmanoeuvring him, and he accepted it for twenty-four years.',
      'The compensation was intellectual and it was enormous. He assembled scholars, commissioned compilations, wrote or supervised books on ceremony, administration and the empire\'s neighbours, and treated the imperial library as a project rather than a decoration. Given a throne he could not use, he built a reference work for the ones who came after him.'),
    S('The books',
      'The De Administrando Imperio was written for his son as a private handbook on the peoples around the empire — Pechenegs, Rus\', Magyars, Serbs, Croats, Arabs — and on how to manage each of them. It is candid in a way no public document would be, and it is the single most important source for the early history of several eastern European peoples.',
      'The Book of Ceremonies records the ritual of the imperial court in exhaustive detail, from coronations to the reception of ambassadors, and preserves earlier material going back centuries.',
      'Alongside these he sponsored the De Thematibus on the provinces, a life of his grandfather Basil I that is dynastic history rather than biography, and the great encyclopaedic excerpts that preserved fragments of classical historians whose complete works are lost. The archive uses several of these as sources; without them the middle Byzantine period would be far darker.'),
    S('Sole rule',
      'Romanos Lekapenos was deposed by his own sons in December 944, and they in turn were removed by the palace and the city a few weeks later in favour of the legitimate emperor. Constantine finally ruled alone from January 945.',
      'The fourteen years that followed were quietly successful. The eastern frontier moved forward under generals of the Phokas and Kourkouas families, an embassy from Olga of Kiev was received in the ceremonial he had documented, and the administration was competent.',
      'He died in November 959 and his son Romanos II succeeded without difficulty. Two years later the expedition Romanos sent retook Crete, and the great phase of the reconquest began with the machinery his father had maintained.')
  ],
  timeline: [
    { d: '905', t: 'Born in the purple', x: 'Born to Leo VI and his canonically irregular fourth wife; his legitimacy is contested from the start.' },
    { d: '913', t: 'Emperor at seven', x: 'His uncle Alexander dies and he succeeds under a regency, with Bulgaria invading.' },
    { d: '920', t: 'Romanos Lekapenos takes over', x: 'His father-in-law becomes senior emperor and governs for the next twenty-four years.' },
    { d: '920s–940s', t: 'The books', x: 'He compiles and commissions the De Administrando Imperio, the Book of Ceremonies and the encyclopaedic excerpts.' },
    { d: '945', t: 'Rules in his own right', x: 'The Lekapenos sons are removed and Constantine governs alone at forty.' },
    { d: '957', t: 'Olga of Kiev received', x: 'The Rus\' princess is received in Constantinople with the ceremonial he had documented.' },
    { d: '959', t: 'Died', x: 'Dies in November; his son Romanos II succeeds without dispute.' }
  ],
  related: { people: [{ title: 'Romanos II', type: 'person', slug: 'romanos-ii', label: 'His son and successor' }, { title: 'Olga of Kiev', type: 'person', slug: 'olga-of-kiev', label: 'Received at his court in 957' }, { title: 'Basil II', type: 'person', slug: 'basil-ii', label: 'His grandson' }], locations: [BYZ, CPL] },
  sources: [src('Constantine VII, De Administrando Imperio', 'https://en.wikipedia.org/wiki/De_Administrando_Imperio', 'primary source'), src('Constantine VII, Book of Ceremonies', 'https://en.wikipedia.org/wiki/De_Ceremoniis', 'primary source'), src('Constantine VII', 'https://en.wikipedia.org/wiki/Constantine_VII'), { title: 'Pushkin Museum, Moscow', url: 'https://pushkinmuseum.art/', type: 'museum collection', institution: 'Pushkin Museum' }]
}

]

// Expand the compact shapes into full character records.
for (const r of rulers) {
  const entry = {
    id: r.id, type: 'character', name: r.name, aliases: r.aliases,
    born: r.born, died: r.died, deathAge: r.deathAge,
    causeOfDeath: r.causeOfDeath, restingPlace: r.restingPlace ?? 'Unknown',
    location: r.location, title: r.title, roles: r.roles,
    image: r.image, imageInfo: r.imageInfo,
    summary: r.summary, overview: r.overview,
    greatestFeats: r.greatestFeats,
    birth: r.birth, death: r.death, quickFacts: r.quickFacts,
    isRuler: r.isRuler, succession: r.succession,
    contentSections: r.contentSections,
    timeline: r.timeline.map((t) => ({ date: t.d, title: t.t, description: t.x, ...(t.links ? { links: t.links } : {}) })),
    relatedEntries: {
      ...(r.related.people ? { people: r.related.people } : {}),
      ...(r.related.events ? { events: r.related.events } : {}),
      locations: r.related.locations.map((l) => (l.label ? l : { ...l, label: l.slug === 'byzantine-empire' ? 'The realm he ruled' : 'His capital' }))
    },
    sources: r.sources
  }
  if (r.epithets) entry.epithets = r.epithets
  if (!entry.greatestFeats?.length) delete entry.greatestFeats
  data.characters.push(entry)
  console.log('+ ' + r.id)
}

// ── Link the new rulers into the three houses ─────────────────────────────────
const houseLinks = {
  'house-of-heraclius': { 'Constans II': 'constans-ii', 'Constantine IV': 'constantine-iv', 'Justinian II': 'justinian-ii' },
  'isaurian-dynasty': { 'Leo IV': 'leo-iv', 'Irene': 'irene-of-athens', 'Constantine VI': 'constantine-vi' },
  'macedonian-dynasty': { 'Basil I': 'basil-i', 'Constantine VII': 'constantine-vii' }
}
for (const [houseId, members] of Object.entries(houseLinks)) {
  const house = data.houses.find((h) => h.id === houseId)
  for (const m of house.notableMembers ?? []) {
    const slug = members[m.displayName]
    if (slug && !m.personSlug) { m.personSlug = slug; console.log(`~ ${houseId}: ${m.displayName} -> ${slug}`) }
  }
  ;(function walk(n) {
    if (!n) return
    const slug = members[n.name] ?? members[(n.name || '').replace(/ the Khazar| Doukas| Porphyrogennetos| the Amorian/, '')]
    if (slug && !n.personSlug) { n.personSlug = slug; console.log(`~ ${houseId} tree: ${n.name} -> ${slug}`) }
    if (n.spouse) walk(n.spouse)
    ;(n.children ?? []).forEach(walk)
  })(house.familyTree?.root)
}

writeFileSync(dataPath, JSON.stringify(data, null, 2))
console.log(`\nM8b written — characters ${data.characters.length}`)
