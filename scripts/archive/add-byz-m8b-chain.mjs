/**
 * TRACK A, M8b (second pass) — closing the chain M8b opened.
 *
 * The owner checked Irene of Athens and found her successor, Nikephoros I,
 * unlinked. That was correct behaviour — a displayName with a note saying no
 * article exists — but it was also the top item on the backlog the first M8b pass
 * created, so it is closed here along with the rest of that generation.
 *
 * Eight rulers: Anastasius I, Tiberius II Constantine, Maurice, Anastasius II,
 * Nikephoros I, Michael II, Leo VI and Alexander.
 *
 * These eight close on each other, which is the point. Anastasius I → Justin I,
 * Justin II → Tiberius II → Maurice → Phocas, Anastasius II → Theodosius III,
 * Irene → Nikephoros I, Michael II → Theophilos, Basil I → Leo VI → Alexander →
 * Constantine VII. Running link-stale-succession-endpoints.mjs afterwards should
 * close roughly eight more links in the existing articles.
 *
 * WHAT REMAINS AFTERWARDS, and it is now a short list: Zeno (before Anastasius I),
 * Staurakios (after Nikephoros I), Leo V (before Michael II), and Philippikos
 * Bardanes (before Anastasius II) — of whom Philippikos has no image in any form
 * and is deferred on the usual rule. Constantine III and Heraklonas remain
 * deferred for the same reason.
 *
 * IMAGE NOTE: Leo VI does not use the Hagia Sophia mosaic of himself, because
 * that image is already the primary for the Macedonian dynasty house and the
 * archive does not reuse images across articles. He takes a solidus instead.
 */
import { readFileSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dataPath = path.join(__dirname, '../server/data/history.json')
const data = JSON.parse(readFileSync(dataPath, 'utf8'))
const S = (title, ...paragraphs) => ({ title, paragraphs })
const img = (f) => `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(f)}`
const BYZ = { title: 'Byzantine Empire', type: 'location', slug: 'byzantine-empire', label: 'The realm he ruled' }
const CPL = { title: 'Constantinople', type: 'location', slug: 'constantinople', label: 'His capital' }
const src = (t, u, y = 'encyclopedia') => ({ title: t, url: u, type: y })
const THEOPH = src('Theophanes the Confessor, Chronicle', 'https://en.wikipedia.org/wiki/Theophanes_the_Confessor', 'primary source')
const DOAKS = { title: 'Dumbarton Oaks — Byzantine Collection', url: 'https://www.doaks.org/resources/coins', type: 'museum collection', institution: 'Dumbarton Oaks' }

const rulers = [

{
  id: 'anastasius-i', name: 'Anastasius I', aliases: ['Anastasius I Dicorus', 'Anastasios I'],
  born: 431, died: 518, deathAge: 'about 87',
  causeOfDeath: 'Died in July 518 during a thunderstorm, aged nearly ninety, having named no heir.',
  location: 'Constantinople', title: 'Emperor of the Romans', roles: ['Emperor'],
  image: img('Flavius Anastasius Probus 01c (Anastasius I) (cropped).JPG'),
  imageInfo: {
    caption: 'Anastasius I carved in ivory, in a detail from a consular diptych of his reign.',
    creator: 'Constantinople workshop', date: 'early 6th century', source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Flavius_Anastasius_Probus_01c_(Anastasius_I)_(cropped).JPG',
    note: 'A contemporary carving, which is rare for an emperor of this period. Consular diptychs were commissioned to mark a consulship and distributed as gifts, so the portrait type is official rather than personal. Public domain.'
  },
  epithets: [{ name: 'Dicorus', type: 'byname', note: 'Means "two-pupilled", from eyes of different colours — one black, one blue, according to the sources.' }],
  summary: 'Anastasius I reformed the coinage and the tax system, abolished a hated levy, and left the fullest treasury in Byzantine history to a successor he never chose.',
  overview: 'The best financial administrator ever to hold the throne, and the reason Justinian could afford to reconquer anything.',
  greatestFeats: ['Reformed the copper coinage into a system that lasted centuries', 'Abolished the chrysargyron, the levy that fell hardest on the poor', 'Left a reserve of 320,000 pounds of gold'],
  birth: { date: 'c. 431', place: { name: 'Dyrrhachium, in Illyria' } },
  death: { date: '518', place: { name: 'Constantinople', slug: 'constantinople' }, circumstance: 'Died in July 518 at nearly ninety without designating a successor, opening the way for the commander of the guard.' },
  quickFacts: { realm: 'Eastern Roman Empire', dynasty: 'Not dynastic', culture: 'Roman', knownFor: 'The treasury that paid for Justinian\'s reconquests' },
  isRuler: true,
  succession: {
    office: 'Emperor of the Romans',
    predecessor: { displayName: 'Zeno', note: 'An Isaurian general whose reign saw the last western emperor deposed in 476; Anastasius was chosen by his widow Ariadne and married her. No article yet in this archive.' },
    successor: { personSlug: 'justin-i', displayName: 'Justin I', note: 'Commander of the excubitors, who took the throne in the confusion that followed a death with no designated heir.' }
  },
  contentSections: [
    S('Overview',
      'Anastasius was a palace official of sixty when the empress Ariadne selected him to succeed her husband Zeno in 491, and married him. He ruled for twenty-seven years and was, by a distance, the most competent financial administrator to hold the office.',
      'He abolished the chrysargyron, a tax on trade that fell hardest on the poorest, reformed the copper coinage into a usable system of denominations, and tightened tax collection without increasing rates.',
      'The result was a reserve of some 320,000 pounds of gold at his death — the largest surplus in the empire\'s recorded history, and the fund that Justinian spent on Africa, Italy and Hagia Sophia within a generation.'),
    S('Birth and early life',
      'He was born at Dyrrhachium about 431 and rose through the palace bureaucracy rather than the army, serving as a silentiary — an usher of the imperial chamber — which is an unusually quiet route to the purple.',
      'He was known for religious opinions leaning towards the Monophysite position, which made his accession controversial and his reign quarrelsome: the patriarch required a written profession of orthodoxy from him before the coronation.',
      'The byname Dicorus, "two-pupilled", comes from his having eyes of different colours, and is one of the few personal details about a Byzantine emperor that is simply physical description rather than propaganda.'),
    S('Character and Personality',
      'The sources divide on him along religious lines and agree on his competence, which makes the portrait unusually reliable where it overlaps.',
      'He is described as careful, patient, personally frugal and unusually accessible, and the abolition of the chrysargyron was greeted with public celebrations that suggest the reputation was earned.',
      'His weakness was the same as his strength: he governed like an accountant in a century that required more. The Persian war of 502–506 caught him unprepared, and his religious policy — persistently sympathetic to the Monophysites — provoked riots in the capital and a serious revolt in Thrace under Vitalian.'),
    S('Reign',
      'The financial reforms are the substance. The chrysargyron went in 498; the copper coinage was reorganised the same year into marked denominations that made small transactions workable for the first time in generations; and the collection of the land tax was professionalised.',
      'He fought Persia from 502 to 506 without decisive result, and built the great fortress of Dara on the Mesopotamian frontier — the position whose loss under Justin II would help drive that emperor mad.',
      'He also built the Anastasian Wall across Thrace to protect the approaches to Constantinople, and spent his last years managing the revolt of Vitalian, who besieged the capital three times over the religious question.'),
    S('Legacy',
      'The treasury is the legacy, and it is a larger one than it sounds. Justinian\'s reconquest of Africa and Italy, the building of Hagia Sophia and the codification of Roman law were all paid for out of a surplus that Anastasius accumulated and neither of his immediate successors could have generated.',
      'The copper coinage reform outlasted the empire\'s territorial extent, and the fortress at Dara shaped the eastern frontier for a century.',
      'He died without naming an heir, which handed the throne to whoever held the palace — and that turned out to be Justin, an illiterate peasant who commanded the guard.')
  ],
  timeline: [
    { d: 'c. 431', t: 'Born', x: 'Born at Dyrrhachium in Illyria.' },
    { d: '491', t: 'Chosen by the empress', x: 'Ariadne selects the elderly palace official to succeed Zeno, and marries him.' },
    { d: '498', t: 'The chrysargyron abolished', x: 'The trade levy that fell hardest on the poor is ended, and the copper coinage reformed.' },
    { d: '502–506', t: 'War with Persia', x: 'An inconclusive war leads to the building of the frontier fortress at Dara.' },
    { d: 'c. 512', t: 'The Anastasian Wall', x: 'A wall is built across Thrace to protect the approaches to Constantinople.' },
    { d: '513–515', t: 'The revolt of Vitalian', x: 'A general besieges the capital three times over the emperor\'s religious policy.' },
    { d: '518', t: 'Died', x: 'Dies at nearly ninety without an heir, leaving the largest treasury in Byzantine history.' }
  ],
  related: { people: [{ title: 'Justin I', type: 'person', slug: 'justin-i', label: 'Took the throne on his death' }, { title: 'Justinian I', type: 'person', slug: 'justinian-i', label: 'Spent the treasury he accumulated' }], locations: [BYZ, CPL] },
  sources: [src('Procopius, History of the Wars', 'https://en.wikipedia.org/wiki/History_of_the_Wars', 'primary source'), src('Anastasius I Dicorus', 'https://en.wikipedia.org/wiki/Anastasius_I_Dicorus'), DOAKS]
},

{
  id: 'tiberius-ii-constantine', name: 'Tiberius II Constantine', aliases: ['Tiberius II', 'Tiberios II Constantinus'],
  born: 535, died: 582, deathAge: 'about 47',
  causeOfDeath: 'Died in August 582, reportedly after eating bad food, having designated Maurice the day before.',
  location: 'Constantinople', title: 'Emperor of the Romans', roles: ['Emperor'],
  image: img('Tiberios II (obverse).jpg'),
  imageInfo: {
    caption: 'A gold solidus of Tiberius II Constantine, struck at Constantinople.',
    creator: 'Constantinople mint', date: '578–582', source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Tiberios_II_(obverse).jpg',
    note: 'A contemporary object of his own reign. He took the additional name Constantine on his accession, which the coin legend carries. Public domain.'
  },
  summary: 'Tiberius II was adopted as heir by an emperor who had lost his mind, ruled four years, gave away the treasury in tax remissions and gifts, and chose Maurice to follow him.',
  overview: 'Remembered for generosity in a state that could not afford any, and for one excellent appointment.',
  greatestFeats: ['Governed capably as Caesar during Justin II\'s incapacity', 'Rebuilt the eastern army under Maurice, who beat the Persians at Solachon', 'Chose a successor on merit rather than blood'],
  birth: { date: 'c. 535', place: { name: 'Thrace' } },
  death: { date: '582', place: { name: 'Constantinople', slug: 'constantinople' }, circumstance: 'Died in August 582, having named Maurice as his heir and married him to his daughter the previous day.' },
  quickFacts: { realm: 'Eastern Roman Empire', dynasty: 'Justinian dynasty', culture: 'Roman', knownFor: 'Generosity, and appointing Maurice' },
  isRuler: true,
  succession: {
    office: 'Emperor of the Romans',
    predecessor: { personSlug: 'justin-ii', displayName: 'Justin II', note: 'Who adopted him as Caesar in 574 during a lucid interval and left him to govern; Tiberius ruled in his name for four years before becoming emperor in his own right.' },
    successor: { personSlug: 'maurice', displayName: 'Maurice', note: 'His best general, married to his daughter Constantina and designated the day before his death.' }
  },
  contentSections: [
    S('Overview',
      'Tiberius commanded the excubitors — the palace guard — when the emperor Justin II\'s mind gave way, and was adopted as Caesar in 574 in one of Justin\'s lucid intervals.',
      'He governed in the emperor\'s name for four years and in his own from 578, and the four years of his sole reign are remembered mainly for spending.',
      'He remitted a year\'s taxes, distributed largesse on a scale the sources dwell on, and emptied the reserves that Justin\'s parsimony had accumulated. He also made the one decision that mattered: he chose Maurice.'),
    S('Birth and early life',
      'He was a Thracian, born about 535, and made his career in the guard rather than in the field armies — the same route Justin I had taken sixty years before.',
      'He commanded against the Avars in the early 570s without much success, which did not prevent his promotion, and was close enough to the empress Sophia for the sources to speculate about her intentions towards him.',
      'The adoption of 574 was arranged by Sophia and by Justin in a lucid interval, and the speech Justin is said to have made on the occasion — warning the new Caesar not to repeat his own mistakes — is among the most striking passages in John of Ephesus.'),
    S('Character and Personality',
      'The tradition is warm about him in a way it is about very few emperors, and the warmth is specifically about generosity.',
      'He is described as handsome, affable, merciful to opponents and incapable of refusing a request — remitting taxes, funding building, paying for games, and giving away treasure that the empire, fighting on three frontiers, urgently needed.',
      'The empress Sophia, who had expected to govern through him, found he would not be governed and quarrelled with him. What the sources present as amiability, a treasury official would have called something harsher, and Maurice inherited the consequences.'),
    S('Reign',
      'The Persian war continued, and here his judgement was sound: he promoted Maurice, an official with no field experience, to command in the east, and Maurice won a significant victory at Solachon in 586 — after Tiberius\'s death, but with the army he had rebuilt.',
      'In the Balkans the position deteriorated. Sirmium, the great fortress on the Save, fell to the Avars in 582 after a long blockade, and Slavic groups moved south in numbers that the empire could not answer.',
      'In Italy the Lombards continued to advance, and Tiberius\'s response — subsidising the Franks to attack them — was the traditional expedient and did not work.'),
    S('Legacy',
      'His reign is short and the record mixed, but the succession he arranged gave the empire twenty years of competent government under Maurice at a moment when it could have had none.',
      'That is also the tragedy of it, because Maurice\'s murder in 602 by the mutiny that raised Phocas is the event that begins the seventh-century catastrophe. Tiberius chose well and the choice was undone by a payroll dispute on the Danube.',
      'The treasury he emptied is the other half of his record, and it is not a small charge: the empire fought the wars of the next two decades without the reserve that Anastasius had built and Justin II had guarded.')
  ],
  timeline: [
    { d: 'c. 535', t: 'Born', x: 'Born in Thrace; rises through the palace guard rather than the field armies.' },
    { d: '574', t: 'Adopted as Caesar', x: 'Justin II adopts him in a lucid interval and hands over the government.' },
    { d: '578', t: 'Becomes emperor', x: 'Justin II dies and Tiberius rules in his own right, taking the name Constantine.' },
    { d: '579', t: 'Tax remissions', x: 'He remits a year\'s taxes and distributes largesse on a scale the sources dwell on.' },
    { d: '582', t: 'Sirmium falls', x: 'The great fortress on the Save is lost to the Avars after a long blockade.' },
    { d: '582', t: 'Maurice designated', x: 'He names his eastern commander as heir and marries him to his daughter Constantina.' },
    { d: '582', t: 'Died', x: 'Dies in August, the day after arranging the succession.' }
  ],
  related: { people: [{ title: 'Justin II', type: 'person', slug: 'justin-ii', label: 'Who adopted him during his own incapacity' }, { title: 'Maurice', type: 'person', slug: 'maurice', label: 'His general, son-in-law and successor' }], locations: [BYZ, CPL] },
  sources: [src('John of Ephesus, Ecclesiastical History', 'https://en.wikipedia.org/wiki/John_of_Ephesus', 'primary source'), src('Tiberius II Constantine', 'https://en.wikipedia.org/wiki/Tiberius_II_Constantine'), DOAKS]
},

{
  id: 'maurice', name: 'Maurice', aliases: ['Maurikios', 'Mauricius'],
  born: 539, died: 602, deathAge: 'about 63',
  causeOfDeath: 'Executed at Chalcedon in November 602, after being made to watch the killing of five of his sons.',
  location: 'Constantinople', title: 'Emperor of the Romans', roles: ['Emperor', 'Commander'],
  image: img('Maurice (Mutinensis).png'),
  imageInfo: {
    caption: 'Maurice in a fifteenth-century portrait from the Modena manuscript of the chronicle of John Zonaras.',
    creator: 'Unknown Byzantine artist, Mutinensis gr. 122', date: '15th century', source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Maurice_(Mutinensis).png',
    note: 'Drawn some eight centuries after his death, from the same codex as this archive\'s portraits of Leo III, Basil I and Nikephoros II. A convention of imperial appearance rather than a likeness. Public domain.'
  },
  summary: 'Maurice ended the Persian war by restoring Khosrow II to his throne, fought the Avars on the Danube for a decade, and was murdered with five of his sons by a mutiny in 602 — the act that started a century of catastrophe.',
  overview: 'The last competent emperor before the deluge, and the man whose murder gave Persia its pretext for the war that broke both empires.',
  greatestFeats: ['Ended two centuries of Persian war on favourable terms by restoring Khosrow II in 591', 'Recovered the Danube frontier and campaigned across it', 'Probably authored or sponsored the Strategikon, the finest military manual of the age'],
  birth: { date: 'c. 539', place: { name: 'Arabissus, in Cappadocia' } },
  death: { date: '602', place: { name: 'Chalcedon' }, circumstance: 'Executed after watching five of his sons killed before him; his death gave Khosrow II the pretext for the war of 602–628.' },
  quickFacts: { realm: 'Eastern Roman Empire', dynasty: 'Justinian dynasty', culture: 'Roman, of Cappadocian origin', knownFor: 'The peace with Persia, and the murder that undid it' },
  isRuler: true,
  succession: {
    office: 'Emperor of the Romans',
    predecessor: { personSlug: 'tiberius-ii-constantine', displayName: 'Tiberius II Constantine', note: 'Who promoted him from the bureaucracy to the eastern command, married him to his daughter, and designated him the day before dying.' },
    successor: { personSlug: 'phocas', displayName: 'Phocas', note: 'The junior officer raised by the Danube mutiny of 602, who had him and five of his sons executed.' }
  },
  contentSections: [
    S('Overview',
      'Maurice came from Cappadocia and rose through the imperial bureaucracy rather than the army, which makes his career as a general improbable and his success at it more so.',
      'Tiberius II gave him the eastern command, he beat the Persians at Solachon in 586, and as emperor from 582 he ended the war in 591 by an extraordinary intervention: restoring the exiled Sasanian prince Khosrow II to his throne with Roman troops, in exchange for territory in Armenia and Mesopotamia.',
      'He then spent a decade recovering the Danube frontier, and was murdered in 602 by the army he had spent that decade driving.'),
    S('Birth and early life',
      'He was born about 539 at Arabissus in Cappadocia and came to Constantinople as a notary, entering the imperial secretariat under Tiberius when the latter was still Caesar.',
      'Promotion to the eastern command in 578 was on Tiberius\'s judgement rather than any obvious qualification, and it was vindicated: he reorganised a demoralised army and won at Solachon.',
      'In 582 he married Tiberius\'s daughter Constantina and was designated heir the day before his father-in-law died.'),
    S('Character and Personality',
      'The consistent portrait is of an austere, disciplined, financially rigorous man who was respected and not liked, and the qualities that made him effective are precisely the ones that killed him.',
      'He cut army pay and rations, refused to ransom prisoners the Avars held — who were then killed — and ordered the Danube army to winter beyond the river to save money. Each decision was defensible in isolation and the accumulation was fatal.',
      'He was also genuinely pious and personally decent by the standards of the office: he spared rebels, was faithful to his wife, and the sources record him accepting his death as a judgement, reportedly saying "Just art thou, O Lord, and righteous are thy judgements" as his sons were killed. Whether or not he said it, the tradition wanted him to have.'),
    S('The Persian settlement',
      'In 590 Khosrow II was driven from the Persian throne by the usurper Bahram Chobin and fled to Roman territory. Maurice restored him with Roman troops the following year.',
      'The terms were the best any Roman emperor had obtained from Persia: most of Armenia and eastern Mesopotamia ceded, and an end to the subsidies Constantinople had been paying. Two centuries of intermittent war closed on Roman advantage.',
      'The relationship was personal as well as diplomatic. Khosrow called Maurice his father, and when Maurice was murdered in 602 the Persian king treated it as an outrage to be avenged — which is the pretext, and possibly the motive, for the war that ran until 628.'),
    S('The Danube and the mutiny',
      'With the east settled, Maurice turned to the Balkans, and for a decade Roman armies campaigned across the Danube against the Avars and the Slavs with real success — the first sustained offensive there in a century.',
      'The Strategikon, a military manual usually attributed to him or to his circle, belongs to this period and is the best surviving guide to how a late Roman army actually operated, down to drill, camp layout and the tactics of specific enemies.',
      'In 602 he ordered the army to winter north of the Danube rather than return to quarters, saving the cost of supply. The army mutinied, proclaimed a junior officer named Phocas, and marched on Constantinople. Maurice fled, was captured at Chalcedon, and was executed after watching five of his sons killed in front of him.'),
    S('Legacy',
      'His murder is the hinge of the seventh century, and this archive treats it as such. Khosrow II invaded to avenge him; the war ran twenty-six years and exhausted both empires; and the Arab conquests took Syria, Egypt and the whole Sasanian state within a generation of its end.',
      'The Strategikon outlived the state it was written for and shaped Byzantine military thinking for centuries.',
      'He is the last emperor of the Justinianic house and the last to govern a Roman empire that still looked like the one Justinian had assembled. Everything after him is a smaller and harder thing.')
  ],
  timeline: [
    { d: 'c. 539', t: 'Born', x: 'Born at Arabissus in Cappadocia; enters the imperial secretariat as a notary.' },
    { d: '578', t: 'Given the eastern command', x: 'Tiberius promotes a bureaucrat to lead the army against Persia.' },
    { d: '586', t: 'Solachon', x: 'He defeats the Persians in a battle that vindicates the appointment.' },
    { d: '582', t: 'Becomes emperor', x: 'Marries Tiberius\'s daughter and is designated heir the day before his death.' },
    { d: '591', t: 'Khosrow II restored', x: 'Roman troops put the exiled Sasanian prince back on his throne; the war ends on Roman terms.' },
    { d: '590s', t: 'The Danube offensive', x: 'A decade of campaigning across the river against Avars and Slavs, and the Strategikon.' },
    { d: '602', t: 'The mutiny', x: 'Ordered to winter beyond the Danube, the army revolts and proclaims Phocas.' },
    { d: '602', t: 'Executed', x: 'Killed at Chalcedon after watching five of his sons put to death.' }
  ],
  related: { people: [{ title: 'Phocas', type: 'person', slug: 'phocas', label: 'The officer whose mutiny killed him' }, { title: 'Khosrow II', type: 'person', slug: 'khosrow-ii', label: 'Whom he restored, and who invaded to avenge him' }, { title: 'Heraclius', type: 'person', slug: 'heraclius', label: 'Who inherited the war his murder began' }], locations: [BYZ, CPL, { title: 'Sasanian Empire', type: 'location', slug: 'sasanian-empire', label: 'Settled on Roman terms in 591' }] },
  sources: [src('Theophylact Simocatta, History', 'https://en.wikipedia.org/wiki/Theophylact_Simocatta', 'primary source'), src('The Strategikon of Maurice', 'https://en.wikipedia.org/wiki/Strategikon_of_Maurice', 'primary source'), src('Maurice (emperor)', 'https://en.wikipedia.org/wiki/Maurice_(emperor)')]
},

{
  id: 'anastasius-ii', name: 'Anastasius II', aliases: ['Artemios', 'Anastasios II'],
  born: 670, died: 719, deathAge: 'unknown',
  causeOfDeath: 'Executed in 719 after a failed attempt to recover the throne with Bulgar support.',
  location: 'Constantinople', title: 'Emperor of the Romans', roles: ['Emperor'],
  image: img('Anastasius II sb1464 (obverse).jpg'),
  imageInfo: {
    caption: 'A gold solidus of Anastasius II, from a reign of two years.',
    creator: 'Constantinople mint', date: '713–715', source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Anastasius_II_sb1464_(obverse).jpg',
    note: 'A contemporary object. He reigned under the name Anastasius, having been the civil servant Artemios before his elevation. Public domain.'
  },
  summary: 'Anastasius II was a civil servant raised to the throne in 713 who saw the Umayyad invasion coming and prepared for it, and was deposed by his own expedition before it arrived.',
  overview: 'The emperor whose warning was right and whose army mutinied rather than hear it.',
  greatestFeats: ['Rebuilt the walls and stockpiled supplies before the great siege of 717–718', 'Sent an embassy that gave accurate warning of the coming Umayyad invasion'],
  birth: { date: 'Unknown', place: { name: 'The Byzantine Empire' } },
  death: { date: '719', place: { name: 'Constantinople', slug: 'constantinople' }, circumstance: 'Executed by Leo III after attempting to recover the throne with Bulgar help while the empire recovered from the siege.' },
  quickFacts: { realm: 'Eastern Roman Empire', dynasty: 'Not dynastic', culture: 'Roman', knownFor: 'Preparing for the siege of 717 and being deposed before it' },
  isRuler: true,
  succession: {
    office: 'Emperor of the Romans',
    predecessor: { displayName: 'Philippikos Bardanes', note: 'An Armenian officer raised by the revolt that killed Justinian II in 711 and blinded in his turn in 713. No image of him survives in any form, so this archive cannot give him an article.' },
    successor: { personSlug: 'theodosius-iii', displayName: 'Theodosius III', note: 'A provincial tax official proclaimed by the Opsikian troops who mutinied against Anastasius in 715, and who abdicated to Leo III two years later.' }
  },
  contentSections: [
    S('Overview',
      'Anastasius II was the imperial secretary Artemios when the officers who had blinded Philippikos Bardanes chose him for the throne in 713.',
      'He was a competent administrator in a period that had produced six emperors in as many years, and he used his two years well: he sent an embassy to Damascus that came back with accurate intelligence about the invasion the caliphate was preparing, and he acted on it.',
      'The walls were repaired, the granaries filled, the fleet rebuilt. Then he sent that fleet against the Arabs, and it mutinied, deposed him, and put a tax collector on the throne instead.'),
    S('Birth and early life',
      'Nothing is recorded of his origins beyond his profession: he was a notary and imperial secretary, a career civil servant of the kind the seventh-century crises repeatedly threw up as emperors.',
      'He took the name Anastasius on his accession — a common practice, and in his case a claim on the memory of the great financial reformer of two centuries earlier.',
      'His accession followed the deposition and blinding of Philippikos, and he moved quickly to restore the religious settlement Philippikos had overturned, reinstating the acts of the Third Council of Constantinople.'),
    S('Character and Personality',
      'He is one of the few emperors of the anarchy whose competence the sources concede without qualification, and the reason is that his preparations demonstrably saved the city two years after he lost the throne.',
      'What emerges is an administrator\'s temperament: he gathered intelligence, planned on it, restored the church settlement without drama, and appointed on merit.',
      'What he lacked was any hold on the army, and the sources give no sign that he understood the danger. Sending a mutinous-minded fleet to a distant rendezvous under commanders he had appointed over their heads was an administrator\'s decision, not a soldier\'s.'),
    S('Reign and fall',
      'The embassy to the caliph\'s court reported that a great expedition against Constantinople was being prepared, and Anastasius took the report seriously. The Theodosian walls were repaired, engines mounted, grain stockpiled and the fleet enlarged.',
      'In 715 he sent that fleet to Rhodes to strike at the Arab naval preparations before they were complete — sound strategy, and the point at which everything went wrong.',
      'The Opsikian troops in the fleet mutinied, killed the commander he had appointed, and sailed back, proclaiming a reluctant provincial tax official as Theodosius III. Anastasius held out at Nicaea for some months and then abdicated and became a monk at Thessalonica.'),
    S('Legacy',
      'The preparations were the point. When the Umayyad army arrived in August 717 the city was walled, provisioned and defended, and it held for twelve months. Leo III gets the credit and deserves most of it; the granaries were Anastasius\'s.',
      'He could not leave it there. In 719, with the siege lifted and Leo III on the throne, he attempted to recover power with Bulgar support, was abandoned by his allies and executed.',
      'His reign is the clearest case in this archive of the seventh- and eighth-century pattern: the empire repeatedly produced capable men, and repeatedly could not keep them on the throne long enough to matter.')
  ],
  timeline: [
    { d: '713', t: 'Proclaimed emperor', x: 'The imperial secretary Artemios is raised to the throne after Philippikos is blinded.' },
    { d: '713', t: 'Orthodoxy restored', x: 'He reinstates the acts of the Third Council of Constantinople that his predecessor had rejected.' },
    { d: '714', t: 'The embassy to Damascus', x: 'His envoys return with accurate intelligence about the invasion being prepared.' },
    { d: '714–715', t: 'Preparing the city', x: 'The walls are repaired, engines mounted, granaries filled and the fleet enlarged.' },
    { d: '715', t: 'The fleet mutinies', x: 'Sent against Arab naval preparations, the Opsikian troops revolt and proclaim Theodosius III.' },
    { d: '715', t: 'Abdicates', x: 'He gives up the throne after holding out at Nicaea and becomes a monk at Thessalonica.' },
    { d: '719', t: 'Executed', x: 'Killed by Leo III after attempting to recover the throne with Bulgar support.' }
  ],
  related: { people: [{ title: 'Theodosius III', type: 'person', slug: 'theodosius-iii', label: 'The tax official whose mutinous troops replaced him' }, { title: 'Leo III', type: 'person', slug: 'leo-iii-the-isaurian', label: 'Who executed him, and inherited his preparations' }], events: [{ title: 'Siege of Constantinople (717–718)', type: 'event', slug: 'siege-of-constantinople-717', label: 'Survived partly on the supplies he laid in' }], locations: [BYZ, CPL] },
  sources: [THEOPH, src('Anastasius II (emperor)', 'https://en.wikipedia.org/wiki/Anastasius_II_(emperor)'), DOAKS]
},

{
  id: 'nikephoros-i', name: 'Nikephoros I', aliases: ['Nicephorus I', 'Nikephoros the Logothete'],
  born: 760, died: 811, deathAge: 'about 51',
  causeOfDeath: 'Killed in the Varbitsa Pass in July 811; Krum of Bulgaria had his skull mounted in silver as a drinking cup.',
  location: 'Constantinople', title: 'Emperor of the Romans', roles: ['Emperor', 'Commander'],
  image: img('INC-1870-a Солид. Никифор I и его сын Ставракий. Ок. 803—811 гг. (аверс).png'),
  imageInfo: {
    caption: 'A gold solidus of Nikephoros I with his son Staurakios, struck between about 803 and 811.',
    creator: 'Constantinople mint', date: 'c. 803–811', source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:INC-1870-a_%D0%A1%D0%BE%D0%BB%D0%B8%D0%B4._%D0%9D%D0%B8%D0%BA%D0%B8%D1%84%D0%BE%D1%80_I_%D0%B8_%D0%B5%D0%B3%D0%BE_%D1%81%D1%8B%D0%BD_%D0%A1%D1%82%D0%B0%D0%B2%D1%80%D0%B0%D0%BA%D0%B8%D0%B9._%D0%9E%D0%BA._803%E2%80%94811_%D0%B3%D0%B3._(%D0%B0%D0%B2%D0%B5%D1%80%D1%81).png',
    note: 'A contemporary object showing father and son, struck in the years before both died in the Bulgarian campaign of 811 — the son of wounds taken in the same battle. Public domain.'
  },
  summary: 'Nikephoros I overthrew the empress Irene, reformed the empire\'s finances with a rigour that made him hated, and was killed by the Bulgars in 811 — the first emperor to die in battle against a foreign enemy since 378.',
  overview: 'A treasury official who took the throne, fixed the finances, and was destroyed in a mountain pass.',
  greatestFeats: ['Restored imperial finances after Irene\'s ruinous tax remissions', 'Resettled and re-garrisoned the Slavic Balkans, restoring imperial authority in Greece', 'Took the Bulgarian capital Pliska in 811'],
  birth: { date: 'c. 760', place: { name: 'Seleucia, in Pisidia' } },
  death: { date: '811', place: { name: 'The Varbitsa Pass, in the Balkan mountains' }, circumstance: 'Killed with most of his army in a night ambush; Krum had his skull lined with silver and used it as a drinking cup.' },
  quickFacts: { realm: 'Eastern Roman Empire', dynasty: 'Nikephorian dynasty', culture: 'Roman', knownFor: 'Fiscal reform, and dying in the Varbitsa Pass' },
  isRuler: true,
  succession: {
    office: 'Emperor of the Romans',
    predecessor: { personSlug: 'irene-of-athens', displayName: 'Irene of Athens', note: 'His employer as general logothete — the empire\'s chief finance minister — whom he deposed in a palace coup in October 802 and exiled to Lesbos.' },
    successor: { displayName: 'Staurakios', note: 'His son, wounded in the same battle in the Varbitsa Pass and paralysed; he reigned two months before abdicating and died of his injuries. No article yet in this archive.' }
  },
  contentSections: [
    S('Overview',
      'Nikephoros was the general logothete — effectively the empire\'s finance minister — under the empress Irene, and in October 802 he overthrew her.',
      'What followed was eight years of unpopular competence. He reversed the tax remissions that had made Irene popular and the treasury empty, taxed the church and the monasteries, tightened collection, and restored imperial authority in a Balkan peninsula that had slipped largely out of Byzantine control.',
      'In 811 he invaded Bulgaria, took and burned the capital Pliska, and was caught in the Varbitsa Pass on the way home. He and most of his army were killed, and Khan Krum had his skull made into a drinking cup.'),
    S('Birth and early life',
      'He came from Seleucia in Pisidia and, by his own family tradition, from Arab royal descent through the Ghassanid line — a claim the sources report and cannot verify.',
      'His career was in the treasury rather than the army, which makes his later personal command of a Balkan campaign a considerable gamble on his own account.',
      'By 802 he held the empire\'s senior financial office under an empress whose fiscal policy he must have regarded as ruinous, which is the ordinary and sufficient explanation for the coup.'),
    S('Character and Personality',
      'The chronicler Theophanes hated him and is the main source, so the portrait needs handling: Nikephoros taxed the monasteries, and Theophanes was a monk.',
      'What Theophanes gives is a grasping, irreligious tyrant with a list of "ten vexations" — the fiscal measures, enumerated as crimes. Read as a description of policy rather than of character, the list is actually a summary of a coherent and rather impressive programme of financial reconstruction.',
      'What can be said independently is that he was personally brave, took the field himself against an enemy that had destroyed reputations, and pressed a campaign further than prudence allowed. The Bulgarian invasion of 811 was daring and it was his own decision, and it killed him.'),
    S('Reign',
      'The financial programme was the substance of the reign. He restored the taxes Irene had remitted, made the church and monasteries pay, reformed the assessment of land, and regulated shipping loans and the coinage.',
      'In the Balkans he did what no emperor had managed since the Slavic settlement: campaigns in Greece, the re-establishment of themes in the Peloponnese, and the systematic resettlement of Greek-speaking populations into areas that had slipped from imperial control. The recovery of Greece for Byzantium begins here.',
      'He also faced Krum, who had unified the Bulgars and taken Serdica in 809. Nikephoros invaded in 811, defeated the Bulgar forces, took Pliska and burned it, and rejected Krum\'s offers of peace.'),
    S('The Varbitsa Pass',
      'The Bulgars blocked the passes behind the returning Roman army with wooden palisades and fell on the camp at night on 26 July 811.',
      'The army was destroyed. Nikephoros was killed, his son Staurakios was wounded so badly that he was paralysed, and much of the empire\'s command structure died in the pass.',
      'Krum had the emperor\'s skull cleaned, lined with silver, and used as a drinking cup at feasts — an act the Byzantine tradition never forgot and which appears in this archive\'s article on the First Bulgarian Empire. Nikephoros was the first Roman emperor killed by a foreign enemy in battle since Valens at Adrianople in 378.'),
    S('Legacy',
      'The finances he restored funded the empire through the following decades, and the Balkan resettlement is the foundation of the Byzantine recovery of Greece — both durable achievements that his hostile chronicler recorded as offences.',
      'The disaster of 811 cost the empire an emperor, an army and a generation of confidence in the Balkans, and it made Krum the most dangerous enemy the empire faced in Europe until Symeon a century later.',
      'His son survived him by two months, and the dynasty ended with his son-in-law Michael I two years later.')
  ],
  timeline: [
    { d: 'c. 760', t: 'Born', x: 'Born at Seleucia in Pisidia; makes his career in the treasury.' },
    { d: 'c. 800', t: 'General logothete', x: 'Holds the empire\'s senior financial office under the empress Irene.' },
    { d: '802', t: 'Seizes the throne', x: 'Deposes Irene in a palace coup and exiles her to Lesbos.' },
    { d: '803–810', t: 'The fiscal programme', x: 'Restores remitted taxes, taxes the monasteries, and reforms assessment and the coinage.' },
    { d: '805–807', t: 'The Balkans recovered', x: 'Campaigns in Greece and resettlement restore imperial authority in the Peloponnese.' },
    { d: '809', t: 'Krum takes Serdica', x: 'The unified Bulgars under Krum become the empire\'s principal European threat.' },
    { d: '811', t: 'Pliska burned', x: 'He invades Bulgaria, defeats its forces, takes the capital and refuses peace.' },
    { d: '26 July 811', t: 'Killed in the Varbitsa Pass', x: 'The army is destroyed in a night ambush; Krum has his skull made into a drinking cup.' }
  ],
  related: { people: [{ title: 'Irene of Athens', type: 'person', slug: 'irene-of-athens', label: 'His employer, whom he overthrew' }, { title: 'Michael II', type: 'person', slug: 'michael-ii', label: 'Who took the throne nine years after his death' }], locations: [BYZ, CPL, { title: 'First Bulgarian Empire', type: 'location', slug: 'first-bulgarian-empire', label: 'Whose khan Krum destroyed him in 811' }] },
  sources: [THEOPH, src('Nikephoros I', 'https://en.wikipedia.org/wiki/Nikephoros_I'), DOAKS]
},

{
  id: 'michael-ii', name: 'Michael II', aliases: ['Michael the Amorian', 'Michael the Stammerer'],
  born: 770, died: 829, deathAge: 'about 59',
  causeOfDeath: 'Died of kidney disease in October 829, the first emperor in decades to die peacefully in his bed.',
  location: 'Constantinople', title: 'Emperor of the Romans', roles: ['Emperor'],
  image: img('Michael II in the Madrid Skylitzes.jpg'),
  imageInfo: {
    caption: 'Michael II in a Madrid Skylitzes miniature.',
    creator: 'Madrid Skylitzes manuscript', date: '12th–13th century', source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Michael_II_in_the_Madrid_Skylitzes.jpg',
    note: 'A manuscript image painted three to four centuries after his death. Not a likeness. Public domain.'
  },
  epithets: [{ name: 'the Stammerer', type: 'byname', note: 'Greek Traulos, from a speech impediment. Contemporary and descriptive rather than hostile, though his enemies made use of it.' }],
  summary: 'Michael II was condemned to death for conspiracy, was crowned instead when his supporters murdered the emperor in the palace chapel, and founded the Amorian dynasty while still wearing his fetters.',
  overview: 'A provincial soldier who came to the throne on Christmas morning by way of a murder in church, and then ruled without much distinction and without disaster.',
  greatestFeats: ['Survived the revolt of Thomas the Slav, which besieged Constantinople for a year', 'Founded a dynasty that lasted three reigns and ended iconoclasm', 'Died peacefully in his bed, which almost no emperor of the period managed'],
  birth: { date: 'c. 770', place: { name: 'Amorion, in Phrygia' } },
  death: { date: '829', place: { name: 'Constantinople', slug: 'constantinople' }, circumstance: 'Died of kidney disease in October 829, succeeded without dispute by his son.' },
  quickFacts: { realm: 'Eastern Roman Empire', dynasty: 'Amorian dynasty', culture: 'Roman', knownFor: 'Founding the Amorian dynasty by a murder in the palace chapel' },
  isRuler: true,
  succession: {
    office: 'Emperor of the Romans',
    predecessor: { displayName: 'Leo V the Armenian', note: 'His old comrade, who made him a senior commander and then condemned him for conspiracy; Michael\'s supporters murdered Leo in the palace chapel on Christmas morning 820. No article yet in this archive.' },
    successor: { personSlug: 'theophilos', displayName: 'Theophilos', note: 'His son, the last iconoclast emperor and the most conspicuously cultivated ruler of the century.' }
  },
  contentSections: [
    S('Overview',
      'Michael came from Amorion in Phrygia, a garrison city in central Anatolia, and rose through the army alongside Leo the Armenian — the two men were comrades and then rivals.',
      'Leo took the throne in 813, promoted Michael, and in December 820 condemned him to death for conspiracy. Michael\'s supporters got to Leo first, killing him in the palace chapel during the Christmas morning service.',
      'He was brought from his cell and crowned still in his fetters, because nobody could find the key. The dynasty he founded lasted until 867 and ended iconoclasm — though not under him.'),
    S('Birth and early life',
      'He was born about 770 at Amorion into a family the sources treat as obscure and possibly connected to one of the Judaising sects of Phrygia, an accusation later writers made much of.',
      'He was a soldier of the Anatolic theme and made his career alongside Leo the Armenian and Thomas the Slav — three provincial officers of the same generation, all three of whom would end up claiming the throne.',
      'He was uneducated and spoke with a stammer, and the aristocracy of the capital regarded him as a peasant in armour. He appears never to have much minded.'),
    S('Character and Personality',
      'The sources dislike him without being able to accuse him of very much, which is an unusual position for a Byzantine emperor who came to power by murder.',
      'He is described as blunt, unlettered and unceremonious, indifferent to the refinements of the court and impatient with theological argument — which shaped his religious policy more than conviction did. He kept iconoclasm in place but enforced it lightly, recalled exiles, and told both sides to be quiet.',
      'His second marriage was the scandal of the reign: he took Euphrosyne, a daughter of Constantine VI, out of a convent to marry her, which was canonically indefensible and politically shrewd, since it linked his new dynasty to the old imperial line.'),
    S('The revolt of Thomas the Slav',
      'In 821 Thomas the Slav — the third of the three comrades — raised a revolt that drew in much of Anatolia, the Arabs of the caliphate, and a fleet, and besieged Constantinople for the better part of a year.',
      'It was the most dangerous internal challenge the empire had faced in a century. Michael held the city, and the siege broke when Khan Omurtag of Bulgaria intervened on the emperor\'s side.',
      'Thomas was captured and executed in 823, but the damage was permanent: the Anatolian themes had been gutted, the fleet weakened, and the empire had no capacity left when Crete and Sicily were attacked.'),
    S('Losses and legacy',
      'Crete was taken in the 820s by Andalusian exiles who founded an emirate that dominated the Aegean for 135 years, and Sicily was invaded by the Aghlabids in 827, beginning a conquest that took most of the island over the following decades.',
      'Both losses followed directly from the revolt, and neither was recovered in his lifetime — Crete came back in 961, and Sicily never did.',
      'What he passed on was stability of a modest kind: a dynasty, an undisputed succession to a capable son, and a religious policy cool enough that his daughter-in-law could reverse it without a civil war. For an emperor who arrived in fetters, that is a reasonable account.')
  ],
  timeline: [
    { d: 'c. 770', t: 'Born', x: 'Born at Amorion in Phrygia; makes his career in the Anatolic theme alongside Leo the Armenian and Thomas the Slav.' },
    { d: '813', t: 'Leo V takes the throne', x: 'His old comrade becomes emperor and promotes him to senior command.' },
    { d: 'December 820', t: 'Condemned, then crowned', x: 'Sentenced to death for conspiracy, he is crowned in his fetters after his supporters murder Leo in the palace chapel.' },
    { d: '821–823', t: 'The revolt of Thomas the Slav', x: 'A rebellion besieges Constantinople for most of a year and is broken with Bulgar help.' },
    { d: '824', t: 'Marries Euphrosyne', x: 'He takes a daughter of Constantine VI out of a convent to link his dynasty to the old line.' },
    { d: 'c. 824–827', t: 'Crete lost', x: 'Andalusian exiles take the island and found the emirate that will dominate the Aegean.' },
    { d: '827', t: 'The invasion of Sicily', x: 'Aghlabid forces land in Sicily and begin a conquest the empire never reverses.' },
    { d: '829', t: 'Died', x: 'Dies of kidney disease, succeeded without dispute by his son Theophilos.' }
  ],
  related: { people: [{ title: 'Theophilos', type: 'person', slug: 'theophilos', label: 'His son and successor' }, { title: 'Michael III', type: 'person', slug: 'michael-iii', label: 'His grandson, and the last of his dynasty' }], locations: [BYZ, CPL, { title: 'Emirate of Crete', type: 'location', slug: 'emirate-of-crete', label: 'Founded on the island lost in his reign' }] },
  sources: [THEOPH, src('Michael II', 'https://en.wikipedia.org/wiki/Michael_II'), DOAKS]
},

{
  id: 'leo-vi', name: 'Leo VI', aliases: ['Leo VI the Wise', 'Leo the Philosopher', 'Leon VI'],
  born: 866, died: 912, deathAge: 'about 46',
  causeOfDeath: 'Died in May 912 of an intestinal illness, leaving a six-year-old heir.',
  location: 'Constantinople', title: 'Emperor of the Romans', roles: ['Emperor', 'Scholar'],
  image: img('Gold Solidus of Leo VI.png'),
  imageInfo: {
    caption: 'A gold solidus of Leo VI, struck at Constantinople.',
    creator: 'Constantinople mint', date: '886–912', source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Gold_Solidus_of_Leo_VI.png',
    note: 'A contemporary object of his reign. The Hagia Sophia mosaic showing him prostrate before Christ is the better-known image of him, and this archive uses it as the primary image of the Macedonian dynasty rather than reusing it here. Public domain.'
  },
  epithets: [{ name: 'the Wise', type: 'byname', note: 'For his learning and his legal work rather than his judgement — his reign was militarily disastrous and his marriages split the church.' }],
  summary: 'Leo VI completed the recodification of Roman law in Greek, wrote on tactics and ceremony, married four times to produce an heir, and lost Sicily, Thessalonica and every war he fought.',
  overview: 'The most learned emperor of the Macedonian house and one of its least successful, whose determination to have a son split the church.',
  greatestFeats: ['Completed the Basilika, the Greek recodification of Roman law', 'Wrote the Taktika, a major military treatise, and the Book of the Eparch on the guilds of Constantinople', 'Secured the succession of his son Constantine VII against enormous canonical resistance'],
  birth: { date: '866', place: { name: 'Constantinople', slug: 'constantinople' } },
  death: { date: '912', place: { name: 'Constantinople', slug: 'constantinople' }, circumstance: 'Died in May 912, leaving the throne to his brother Alexander as regent for his six-year-old son.' },
  quickFacts: { realm: 'Eastern Roman Empire', dynasty: 'Macedonian dynasty', culture: 'Roman', knownFor: 'The Basilika, and four marriages to get an heir' },
  isRuler: true,
  succession: {
    office: 'Emperor of the Romans',
    predecessor: { personSlug: 'basil-i', displayName: 'Basil I', note: 'His father — or possibly Michael III, since Leo\'s mother Eudokia Ingerina had been Michael\'s mistress before Basil married her, and the question was raised in his own lifetime.' },
    successor: { personSlug: 'alexander', displayName: 'Alexander', note: 'His brother, who ruled thirteen destructive months as senior emperor and regent for Constantine VII.' }
  },
  contentSections: [
    S('Overview',
      'Leo VI ruled from 886 to 912 and is the most bookish emperor between Constantine VII and nobody at all — his own grandson would be the next.',
      'He completed the Basilika, the sixty-book Greek recodification of Justinian\'s law that his father had begun, and wrote or sponsored the Taktika on warfare, the Book of the Eparch on the guilds of the capital, homilies, and poetry.',
      'He also lost Sicily, saw Thessalonica sacked, was beaten repeatedly by Symeon of Bulgaria, and spent the last decade of his reign in a canonical crisis of his own making over his fourth marriage.'),
    S('Birth and early life',
      'He was born in 866 to Eudokia Ingerina, who had been the mistress of the emperor Michael III before Basil I married her at Michael\'s arrangement. Whether Basil or Michael was his father was asked in his own lifetime and cannot be answered.',
      'Basil disliked him, and in 883 imprisoned him for three years on a charge of conspiracy, releasing him only shortly before his own death.',
      'He was educated by the patriarch Photios, the outstanding scholar of the age, and the education took: the reign\'s intellectual output is real and much of it is his own work.'),
    S('Character and Personality',
      'He is a genuinely odd figure — a scholar-emperor with no military ability, a legislator on marriage who broke his own law, and a ruler whose most famous act was a canonical scandal.',
      'The sources treat him with a kind of baffled respect. His learning is not in question; his judgement of people was poor and his judgement of Symeon of Bulgaria was catastrophic.',
      'The marriages define him. Three wives died without leaving a surviving son, and Byzantine canon law regarded even a third marriage as barely tolerable. He took a mistress, Zoe Karbonopsina, she bore him Constantine, and he married her — a fourth marriage, uncanonical beyond argument, which got him barred from communion and split the church into factions that outlasted him.'),
    S('The law and the wars',
      'The Basilika is the achievement. Sixty books, in Greek, superseding the Latin corpus that had become unusable, and remaining the law of the empire until its end. Alongside it he issued the Novels, over a hundred new laws, several of which quietly abolished dead letters — including, with some irony, provisions on marriage.',
      'The wars went uniformly badly. Symeon of Bulgaria beat Byzantine armies repeatedly from 894 and extracted tribute; Thessalonica, the empire\'s second city, was sacked from the sea in 904 by a renegade fleet under Leo of Tripoli; and Taormina fell in 902, completing the Muslim conquest of Sicily.',
      'His Taktika, written while all this was happening, is a serious and intelligent treatise on how to fight the empire\'s enemies. The gap between the analysis and the results is the reign in one image.'),
    S('Legacy',
      'The legal codification outlasted everything else and is the reason the Macedonian period is remembered as a legal as well as a military high point.',
      'The fourth marriage got him his heir, and Constantine VII produced the books this archive relies on and the dynasty that produced Basil II. Judged on that alone the scandal was worth it, which is presumably how he judged it.',
      'The Hagia Sophia mosaic over the Imperial Door, showing an emperor prostrate before Christ, is generally identified as him. If so it is a striking piece of self-presentation from a man the church had barred from communion — the emperor on the floor, asking.')
  ],
  timeline: [
    { d: '866', t: 'Born', x: 'Born to Eudokia Ingerina; whether his father was Basil I or Michael III was disputed in his own lifetime.' },
    { d: '883', t: 'Imprisoned by his father', x: 'Basil I confines him for three years on a charge of conspiracy.' },
    { d: '886', t: 'Becomes emperor', x: 'Succeeds Basil I and dismisses his father\'s ministers.' },
    { d: '888', t: 'The Basilika', x: 'The sixty-book Greek recodification of Roman law is completed.' },
    { d: '894–896', t: 'War with Symeon', x: 'Bulgaria defeats Byzantine armies repeatedly and extracts tribute.' },
    { d: '902', t: 'Sicily lost', x: 'Taormina falls, completing the Muslim conquest of the island.' },
    { d: '904', t: 'Thessalonica sacked', x: 'The empire\'s second city is taken from the sea by a renegade fleet.' },
    { d: '906', t: 'The fourth marriage', x: 'He marries Zoe Karbonopsina to legitimise his son, and is barred from communion.' },
    { d: '912', t: 'Died', x: 'Dies leaving a six-year-old heir under the regency of his brother Alexander.' }
  ],
  related: { people: [{ title: 'Basil I', type: 'person', slug: 'basil-i', label: 'His father, who imprisoned him for three years' }, { title: 'Constantine VII', type: 'person', slug: 'constantine-vii', label: 'The son his fourth marriage was contracted to legitimise' }, { title: 'Alexander', type: 'person', slug: 'alexander', label: 'His brother and successor' }], locations: [BYZ, CPL] },
  sources: [src('Leo VI, Taktika', 'https://en.wikipedia.org/wiki/Taktika_(Leo_VI)', 'primary source'), src('Leo VI the Wise', 'https://en.wikipedia.org/wiki/Leo_VI_the_Wise'), DOAKS]
},

{
  id: 'alexander', name: 'Alexander', aliases: ['Alexander of Byzantium', 'Alexandros'],
  born: 870, died: 913, deathAge: 'about 43',
  causeOfDeath: 'Died in June 913 of exhaustion after playing at the ball-court, according to the sources.',
  location: 'Constantinople', title: 'Emperor of the Romans', roles: ['Emperor'],
  image: img('Alexandros mosaic.jpg'),
  imageInfo: {
    caption: 'The emperor Alexander in mosaic, in the north gallery of Hagia Sophia.',
    creator: 'Constantinople, imperial workshop', date: '912–913', source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Alexandros_mosaic.jpg',
    note: 'Made during his thirteen-month reign and still in place, which makes it a securely contemporary portrait of an emperor who barely reigned — and the only surviving mosaic portrait of a Byzantine emperor identified beyond doubt by its own inscription. Public domain.'
  },
  summary: 'Alexander was co-emperor for twenty-six years and sole ruler for thirteen months, in which he dismissed his brother\'s ministers, refused tribute to Bulgaria and started a thirty-year war.',
  overview: 'A reign short enough to be measured in months and destructive enough to be measured in decades.',
  greatestFeats: [],
  birth: { date: 'c. 870', place: { name: 'Constantinople', slug: 'constantinople' } },
  death: { date: '913', place: { name: 'Constantinople', slug: 'constantinople' }, circumstance: 'Died in June 913 after playing at the ball-court, thirteen months into his sole reign.' },
  quickFacts: { realm: 'Eastern Roman Empire', dynasty: 'Macedonian dynasty', culture: 'Roman', knownFor: 'Thirteen months that started a war with Bulgaria' },
  isRuler: true,
  succession: {
    office: 'Emperor of the Romans',
    predecessor: { personSlug: 'leo-vi', displayName: 'Leo VI', note: 'His elder brother, who kept him as co-emperor for twenty-six years without giving him any share of government.' },
    successor: { personSlug: 'constantine-vii', displayName: 'Constantine VII', note: 'His nephew, seven years old, left under a regency in the middle of the Bulgarian war Alexander had provoked.' }
  },
  contentSections: [
    S('Overview',
      'Alexander was crowned co-emperor as a child in 879 and remained one for thirty-three years, of which twenty-six were under his brother Leo VI, who gave him no authority whatever.',
      'When Leo died in May 912 he became senior emperor and regent for his six-year-old nephew, and used the position mainly to reverse his brother\'s arrangements: the ministers were dismissed, the patriarch deposed, and his brother\'s widow expelled from the palace.',
      'He then refused the annual tribute to Symeon of Bulgaria, which restarted a war that ran for the next thirty years. He died thirteen months into the reign.'),
    S('Birth and early life',
      'He was born about 870, the son of Basil I and Eudokia Ingerina, and was made co-emperor in 879 after the death of his eldest brother.',
      'That was the extent of his career. Leo VI, who succeeded in 886, kept him in the purple and out of the government for a quarter of a century, and the sources describe a man who filled the time with hunting, the hippodrome and the company of his own household.',
      'Whether he was as idle as the tradition says or simply had nothing to do is impossible to separate, and it is worth noting the question rather than assuming the answer.'),
    S('Character and Personality',
      'The sources are uniformly hostile and unusually specific, which does not make them right but does make them interesting.',
      'They describe drunkenness, indifference to government, and an interest in pagan divination — including a story that he had a bronze statue in the hippodrome dressed and fed on the advice of soothsayers, in the belief that it was linked to his health.',
      'What is not in dispute is the pattern of the thirteen months: everything his brother had built was undone quickly and with evident personal animus, and nothing was put in its place. He was a man kept from power for twenty-six years who used it, when it came, to settle scores.'),
    S('Thirteen months',
      'He removed Leo\'s ministers and the admiral Himerios, deposed the patriarch Euthymios and restored Nicholas Mystikos, and expelled the empress Zoe — Constantine VII\'s mother — from the palace.',
      'The consequential act was foreign. Symeon of Bulgaria sent an embassy in 913 to renew the treaty and the annual payments; Alexander dismissed it and refused the tribute.',
      'Symeon invaded, and the war that followed dominated the next three decades, brought Bulgarian armies to the walls of Constantinople and forced the empire to recognise Symeon as emperor of the Bulgarians. Alexander was dead within months of starting it, and his seven-year-old nephew inherited it.'),
    S('Legacy',
      'He is the clearest case in this archive of how much damage a short reign can do, and the Bulgarian war he provoked is the reason the following decade of Constantine VII\'s minority was as dangerous as it was.',
      'The mosaic in the north gallery of Hagia Sophia, made in his thirteen months and still in place, is the strange survival: a securely identified contemporary portrait of a Byzantine emperor, which is more than most of his far more consequential predecessors left.',
      'He died at the ball-court, and the tradition treats it as divine judgement. It reads more like exhaustion in a man of forty-three who had spent twenty-six years waiting and thirteen months in a hurry.')
  ],
  timeline: [
    { d: 'c. 870', t: 'Born', x: 'Born to Basil I and Eudokia Ingerina.' },
    { d: '879', t: 'Crowned co-emperor', x: 'Made co-emperor as a child after the death of his eldest brother.' },
    { d: '886–912', t: 'Twenty-six years without power', x: 'Leo VI keeps him in the purple and entirely out of the government.' },
    { d: 'May 912', t: 'Becomes senior emperor', x: 'Leo dies and Alexander rules as regent for his six-year-old nephew.' },
    { d: '912', t: 'The purge', x: 'Leo\'s ministers are dismissed, the patriarch replaced, and the empress expelled from the palace.' },
    { d: '913', t: 'Tribute refused', x: 'He dismisses Symeon of Bulgaria\'s embassy and refuses the annual payments.' },
    { d: 'June 913', t: 'Died', x: 'Dies after playing at the ball-court, leaving a child emperor and a war.' }
  ],
  related: { people: [{ title: 'Leo VI', type: 'person', slug: 'leo-vi', label: 'His brother, who kept him from power for twenty-six years' }, { title: 'Constantine VII', type: 'person', slug: 'constantine-vii', label: 'His nephew, left a child emperor in the middle of a war' }], locations: [BYZ, CPL, { title: 'First Bulgarian Empire', type: 'location', slug: 'first-bulgarian-empire', label: 'Whose ruler he provoked into thirty years of war' }] },
  sources: [src('Theophanes Continuatus', 'https://en.wikipedia.org/wiki/Theophanes_Continuatus', 'primary source'), src('Alexander (Byzantine emperor)', 'https://en.wikipedia.org/wiki/Alexander_(Byzantine_emperor)'), DOAKS]
}

]

for (const r of rulers) {
  const entry = {
    id: r.id, type: 'character', name: r.name, aliases: r.aliases,
    born: r.born, died: r.died, deathAge: r.deathAge,
    causeOfDeath: r.causeOfDeath, restingPlace: r.restingPlace ?? 'Unknown',
    location: r.location, title: r.title, roles: r.roles,
    image: r.image, imageInfo: r.imageInfo,
    summary: r.summary, overview: r.overview,
    birth: r.birth, death: r.death, quickFacts: r.quickFacts,
    isRuler: r.isRuler, succession: r.succession,
    contentSections: r.contentSections,
    timeline: r.timeline.map((t) => ({ date: t.d, title: t.t, description: t.x })),
    relatedEntries: {
      ...(r.related.people ? { people: r.related.people } : {}),
      ...(r.related.events ? { events: r.related.events } : {}),
      locations: r.related.locations
    },
    sources: r.sources
  }
  if (r.greatestFeats?.length) entry.greatestFeats = r.greatestFeats
  if (r.epithets) entry.epithets = r.epithets
  data.characters.push(entry)
  console.log('+ ' + r.id)
}

// Link the new rulers into the houses that name them.
const houseLinks = {
  'justinian-dynasty': { 'Tiberius II Constantine': 'tiberius-ii-constantine', 'Maurice': 'maurice' },
  'amorian-dynasty': { 'Michael II': 'michael-ii' },
  'macedonian-dynasty': { 'Leo VI the Wise': 'leo-vi', 'Leo VI': 'leo-vi' }
}
for (const [houseId, members] of Object.entries(houseLinks)) {
  const house = data.houses.find((h) => h.id === houseId)
  for (const m of house.notableMembers ?? []) {
    const slug = members[m.displayName]
    if (slug && !m.personSlug) { m.personSlug = slug; console.log(`~ ${houseId}: ${m.displayName} -> ${slug}`) }
  }
  ;(function walk(n) {
    if (!n) return
    const slug = members[n.name]
    if (slug && !n.personSlug) { n.personSlug = slug; console.log(`~ ${houseId} tree: ${n.name} -> ${slug}`) }
    if (n.spouse) walk(n.spouse)
    ;(n.children ?? []).forEach(walk)
  })(house.familyTree?.root)
}

writeFileSync(dataPath, JSON.stringify(data, null, 2))
console.log(`\nChain closed — characters ${data.characters.length}`)
