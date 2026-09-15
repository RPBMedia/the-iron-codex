/**
 * TRACK A, M4 — Nineveh 627.
 *
 * Four articles: the battle, the Sasanian Empire as an anchor realm, and Heraclius
 * and Khosrow II.
 *
 * SHAHRBARAZ IS DEFERRED. No image of him exists — not even a coin, despite his
 * having briefly taken the throne in 630 — so he cannot have an article under the
 * archive's rules. He is named in prose without a link and recorded in QUEUE.md.
 *
 * Source note: this milestone leaves Procopius behind entirely. The evidence for
 * Heraclius's campaigns is Theophanes writing two centuries later, the Chronicon
 * Paschale, George of Pisidia's panegyric verse, and Armenian and Syriac
 * chronicles — thinner, later and more partisan than anything M2 and M3 rested on.
 * The articles say so rather than narrating with borrowed confidence.
 *
 * Both rulers are illustrated with coins struck in their own reigns, which for this
 * period is the closest thing to a contemporary likeness that exists.
 */
import { readFileSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dataPath = path.join(__dirname, '../server/data/history.json')
const data = JSON.parse(readFileSync(dataPath, 'utf8'))
const S = (title, ...paragraphs) => ({ title, paragraphs })
const img = (f) => `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(f)}`

const heraclius = {
  id: 'heraclius', type: 'character', name: 'Heraclius',
  aliases: ['Herakleios', 'Flavius Heraclius Augustus'],
  born: 575, died: 641, deathAge: 'about 66',
  causeOfDeath: 'Died at Constantinople in February 641 after a long illness.',
  restingPlace: 'Church of the Holy Apostles, Constantinople',
  location: 'Constantinople',
  title: 'Emperor of the Romans',
  roles: ['Emperor', 'Commander'],
  image: img('Eraclio e i figli costantino III coimperatore ed eraclione, solido, in oro, zecca di costantinopoli, 610-641, recto,0.jpg'),
  imageInfo: {
    caption: 'A gold solidus struck at Constantinople in Heraclius\'s reign, showing the bearded emperor between his sons Constantine III and Heraclonas.',
    creator: 'Constantinople mint',
    date: '610–641',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Eraclio_e_i_figli_costantino_III_coimperatore_ed_eraclione,_solido,_in_oro,_zecca_di_costantinopoli,_610-641,_recto,0.jpg',
    note: 'A contemporary object struck in his own reign, used because no portrait of Heraclius exists. Coin images of this period are conventional rather than individual likenesses, though the beard is a genuine feature — Heraclius grew one and it is how his coinage distinguishes him from his predecessors. Licensed CC BY-SA 4.0.'
  },
  summary: 'Heraclius ruled the eastern empire from 610 to 641, took it to the brink of destruction and back, defeated Persia — and then lost everything he had won to the Arab conquests.',
  overview: 'He is the emperor of the greatest reversal and the cruellest one: six years of campaigning recovered the east, and a decade later it was gone for good.',
  greatestFeats: [
    'Destroyed the Persian army at Nineveh in 627 after six years campaigning in person',
    'Recovered Syria, Palestine and Egypt and returned the True Cross to Jerusalem',
    'Held Constantinople through the Avar and Persian siege of 626'
  ],
  birth: { date: 'c. 575', place: { name: 'Cappadocia' } },
  death: { date: '641', place: { name: 'Constantinople', slug: 'constantinople' }, circumstance: 'Died in February 641 after years of illness, having seen the Arab conquest take Syria and Egypt.' },
  quickFacts: { realm: 'Eastern Roman Empire', dynasty: 'Heraclian dynasty', culture: 'Roman, of Armenian descent', knownFor: 'Defeating Persia, then losing the east to the Arabs' },
  isRuler: true,
  succession: {
    office: 'Emperor of the Romans',
    predecessor: { displayName: 'Phocas', note: 'A usurper who had murdered the emperor Maurice in 602; Heraclius overthrew and executed him in 610. No article yet in this archive.' },
    successor: { displayName: 'Constantine III and Heraclonas', note: 'His sons, who succeeded jointly in 641; Constantine III died within months and the succession was disputed. No articles yet in this archive.' }
  },
  contentSections: [
    S('Overview',
      'Heraclius came to the throne in 610 by overthrowing a usurper, and inherited an empire that was in the process of losing.',
      'Persia held Syria, Palestine and Egypt; the Avars were in the Balkans; Jerusalem had fallen and the True Cross had been carried off. In 626 Constantinople itself was besieged from both sides at once.',
      'He then did something no emperor had done for centuries: he took the field in person for six years and won the war outright. And within a decade of that victory, the Arab conquests took the east away permanently.'),
    S('Birth and early life',
      'He was born around 575 into a family of Armenian descent, the son of the exarch of Africa, and grew up in the provincial military aristocracy rather than at court.',
      'In 608 his father revolted against the emperor Phocas, who had seized power in 602 by murdering Maurice, and the revolt was run from Carthage.',
      'Heraclius sailed to Constantinople in 610, deposed Phocas and had him executed. He inherited the war Phocas had provoked and no obvious means of fighting it.'),
    S('Character and Personality',
      'The sources are thinner and more partisan than for Justinian, and much of what survives is panegyric — George of Pisidia wrote verse in his praise while the campaigns were still running, and later Byzantine writers treated him as a model Christian emperor.',
      'What the record consistently shows is personal courage and an unusual willingness to campaign in person, which had not been normal imperial behaviour for two hundred years. He is described leading from the front and, at Nineveh, killing the Persian commander in single combat.',
      'The later years read very differently. Illness, a marriage to his niece Martina that scandalised the church, dynastic anxiety, and then the Arab conquests undoing everything — the sources describe an old man who would not cross the Bosphorus by ship and had a bridge of boats disguised with branches. Whether that is illness, terror or invention is not recoverable.'),
    S('The war with Persia',
      'The first decade was disaster. Antioch, Damascus and Jerusalem fell, the True Cross was taken to Ctesiphon, and by 619 Egypt — the empire\'s grain supply — was Persian.',
      'From 622 Heraclius campaigned in person, striking into Armenia and the Persian heartland rather than defending the lost provinces directly, and funding the war partly on the treasure of the church.',
      'In 626 Constantinople was besieged by the Avars from Europe and the Persians from Asia while he was away in the east. The walls and the fleet held, and the failure broke the coalition.'),
    S('Nineveh and victory',
      'In December 627 he brought the Persian field army to battle near the ruins of Nineveh and destroyed it, then marched on the royal residence at Dastagird.',
      'Khosrow II was overthrown by his own nobles and son in 628 and executed, and the peace that followed restored the pre-war frontier and the True Cross, which Heraclius returned to Jerusalem in 630.',
      'It was, on paper, the most complete victory the empire had won in centuries.'),
    S('The Arab conquests',
      'It lasted about six years. Arab forces entered Syria from the mid-630s, and the empire — exhausted, its provinces devastated by twenty years of Persian occupation and reconquest — could not hold them.',
      'Syria was lost, then Palestine, then Egypt. Heraclius took the True Cross from Jerusalem back to Constantinople rather than see it captured again, and died in 641 with the eastern provinces gone.',
      'The empire that survived him was a different thing: smaller, Greek rather than Latin in its administration, and permanently defensive. He changed the imperial title from Augustus to Basileus, which is a fair marker of the transition.'),
    S('Legacy',
      'He is the emperor of the greatest reversal in Byzantine history and of the cruellest sequel, and the two are not separable: the war that beat Persia hollowed out both empires and left the field open.',
      'His reforms outlived his conquests. Greek as the language of state, the changed imperial title, and the military reorganisation of Anatolia shaped the medieval empire far more than the recovered provinces ever did.',
      'Later Byzantines remembered him as the emperor who restored the Cross. That is the story his own panegyrists wrote, and it survived because the alternative — the emperor who won everything and lost it — was harder to celebrate.')
  ],
  timeline: [
    { date: 'c. 575', title: 'Born', description: 'Born in Cappadocia to a family of Armenian descent in the provincial military aristocracy.' },
    { date: '610', title: 'Seizes the throne', description: 'Sails from Carthage, deposes and executes the usurper Phocas.' },
    { date: '614', title: 'Jerusalem falls', description: 'The Persians take Jerusalem and carry off the True Cross to Ctesiphon.' },
    { date: '619', title: 'Egypt lost', description: 'Persia takes Egypt, the empire\'s grain supply.' },
    { date: '622', title: 'Takes the field', description: 'Begins six years of campaigning in person, striking at the Persian heartland rather than defending the provinces.' },
    { date: '626', title: 'Constantinople besieged', description: 'Avars and Persians besiege the capital together while he is in the east; the walls and the fleet hold.' },
    { date: '627', title: 'Nineveh', description: 'Destroys the Persian field army near the ruins of Nineveh.', links: [{ title: 'Battle of Nineveh', type: 'event', slug: 'battle-of-nineveh' }] },
    { date: '630', title: 'The True Cross restored', description: 'Returns the relic to Jerusalem in a ceremony that became the high point of his reign.' },
    { date: '636–642', title: 'The east is lost', description: 'Arab forces take Syria, Palestine and Egypt from an exhausted empire.' },
    { date: '641', title: 'Died', description: 'Died at Constantinople after long illness, the eastern provinces gone.' }
  ],
  relatedEntries: {
    people: [
      { title: 'Khosrow II', type: 'person', slug: 'khosrow-ii', label: 'His opponent for eighteen years' },
      { title: 'Justinian I', type: 'person', slug: 'justinian-i', label: 'The emperor whose reconquest he inherited the cost of' }
    ],
    events: [
      { title: 'Battle of Nineveh', type: 'event', slug: 'battle-of-nineveh', label: 'His decisive victory' }
    ],
    locations: [
      { title: 'Byzantine Empire', type: 'location', slug: 'byzantine-empire', label: 'The realm he ruled' },
      { title: 'Constantinople', type: 'location', slug: 'constantinople', label: 'His capital, besieged in 626' },
      { title: 'Sasanian Empire', type: 'location', slug: 'sasanian-empire', label: 'The realm he defeated' }
    ]
  },
  sources: [
    { title: 'Theophanes the Confessor, Chronicle', url: 'https://en.wikipedia.org/wiki/Theophanes_the_Confessor', type: 'primary source' },
    { title: 'Heraclius', url: 'https://en.wikipedia.org/wiki/Heraclius', type: 'encyclopedia' },
    { title: 'Byzantine and Christian Museum, Athens', url: 'https://www.byzantinemuseum.gr/en/', type: 'museum collection', institution: 'Byzantine and Christian Museum' }
  ]
}

const khosrow = {
  id: 'khosrow-ii', type: 'character', name: 'Khosrow II',
  aliases: ['Khosrau II', 'Chosroes II', 'Khosrow Parviz'],
  born: 570, died: 628, deathAge: 'about 58',
  causeOfDeath: 'Deposed by his son Kavad II and executed in February 628.',
  restingPlace: 'Unknown',
  location: 'Ctesiphon',
  title: 'Shahanshah of Iran',
  roles: ['King of Kings'],
  image: img('Drachma, Khosrow II Parviz (5374491495).jpg'),
  imageInfo: {
    caption: 'A silver drachm of Khosrow II: the crowned royal bust on one face, the Zoroastrian fire altar with its two attendants on the other.',
    creator: 'Sasanian mint',
    date: '590–628',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Drachma,_Khosrow_II_Parviz_(5374491495).jpg',
    note: 'A contemporary object struck in his own reign, used because no portrait of Khosrow II exists. The royal bust is a conventional image of kingship rather than a likeness; the fire altar reverse is standard on Sasanian coinage and states the dynasty\'s Zoroastrian character. Licensed CC BY-SA 2.0.'
  },
  summary: 'Khosrow II ruled Iran from 590 to 628, conquered Syria, Palestine and Egypt from the Roman empire, and lost everything within four years of his high point.',
  overview: 'He is the last great Sasanian king and the one who destroyed the dynasty, having pushed a war further than his empire could sustain.',
  greatestFeats: [
    'Conquered Syria, Palestine and Egypt from the eastern Roman empire',
    'Took Jerusalem in 614 and carried off the True Cross',
    'Brought a Persian army to the Bosphorus in 626'
  ],
  birth: { date: 'c. 570', place: { name: 'The Sasanian Empire' } },
  death: { date: '628', place: { name: 'Ctesiphon' }, circumstance: 'Deposed and executed on the orders of his son Kavad II after the defeat at Nineveh.' },
  quickFacts: { realm: 'Sasanian Empire', dynasty: 'House of Sasan', culture: 'Persian', knownFor: 'Nearly destroying the eastern Roman empire' },
  isRuler: true,
  succession: {
    office: 'Shahanshah of Iran',
    predecessor: { displayName: 'Bahram Chobin', note: 'A usurping general who drove Khosrow out in 590; Khosrow was restored the following year with Roman help from the emperor Maurice. No article yet in this archive.' },
    successor: { displayName: 'Kavad II', note: 'His son, who deposed and executed him in 628 and made peace with Heraclius, dying of plague months later. No article yet in this archive.' }
  },
  contentSections: [
    S('Overview',
      'Khosrow II ruled the Sasanian empire from 590 to 628 and took it to its greatest territorial extent since its foundation, holding Syria, Palestine, Egypt and much of Anatolia.',
      'He is also the king who destroyed it. The war that produced those conquests exhausted Iran, and after Heraclius\'s counter-offensive his own nobles and his own son killed him.',
      'Within twenty years of his death the Sasanian empire had ceased to exist.'),
    S('Birth and early life',
      'He came to the throne in 590 after his father Hormizd IV was deposed and killed, and almost immediately lost it to a usurping general, Bahram Chobin.',
      'He fled to Roman territory and appealed to the emperor Maurice, who restored him with Roman troops in 591 — an extraordinary intervention, paid for with territorial concessions in Armenia and Mesopotamia.',
      'That debt shaped everything after. Khosrow owed his throne to Maurice personally, and when Maurice was murdered by Phocas in 602 he had both a genuine grievance and an irresistible opportunity.'),
    S('Character and Personality',
      'He is harder to see than Heraclius, because the Persian sources for his reign are largely lost and what survives comes from his enemies or from much later Islamic-era compilations.',
      'The consistent impressions are magnificence and detachment. His court at Dastagird and Ctesiphon was famously opulent, and he directed a twenty-six-year war largely through generals rather than commanding in person — the opposite of Heraclius\'s approach, and arguably the difference that decided it.',
      'Later Persian literature turned him into a romantic figure: the Khosrow Parviz of the Shahnameh, and the lover of Shirin in a tradition that runs through Nizami. That is memory rather than evidence, and it should not be read back into the reign.'),
    S('The great war',
      'Phocas\'s murder of Maurice in 602 gave Khosrow his pretext, and he invaded claiming to avenge his patron. What began as a punitive war became a war of conquest.',
      'His armies took Antioch, Damascus and then Jerusalem in 614, where the True Cross was captured and carried to Ctesiphon — an event that gave the whole conflict a religious charge it had not had before.',
      'Egypt fell by 619, and in 626 a Persian army under Shahrbaraz stood on the Asian shore opposite Constantinople while the Avars assaulted the walls from Europe. It was the closest any power came to taking the city before 1204.'),
    S('Collapse',
      'The coalition of 626 failed, and Heraclius was already deep in the Persian heartland striking at territory the armies in Egypt and Syria could not defend.',
      'At Nineveh in December 627 the Persian field army was destroyed, and Heraclius marched on Dastagird, which Khosrow abandoned.',
      'His nobles had had enough. In February 628 his son Kavad II deposed him and had him executed, made peace, and returned the conquests and the True Cross. Kavad died of plague within months, and the dynasty fell into a succession crisis it never resolved.'),
    S('Legacy',
      'He came closer to destroying the eastern Roman empire than anyone until 1204, and the effort destroyed his own.',
      'The two empires emerged from twenty-six years of war so weakened that neither could resist the Arab armies that appeared in the 630s. Iran fell entirely; the Roman empire lost its eastern half.',
      'It is the clearest case in this archive of a war in which both sides lost, and the winner only more slowly.')
  ],
  timeline: [
    { date: 'c. 570', title: 'Born', description: 'Born into the House of Sasan, son of Hormizd IV.' },
    { date: '590', title: 'Accession and flight', description: 'Comes to the throne, is driven out by the usurper Bahram Chobin, and flees to Roman territory.' },
    { date: '591', title: 'Restored by Rome', description: 'Restored by the emperor Maurice with Roman troops, at the price of territory in Armenia and Mesopotamia.' },
    { date: '602', title: 'War declared', description: 'Maurice is murdered by Phocas; Khosrow invades, claiming to avenge his patron.' },
    { date: '614', title: 'Jerusalem taken', description: 'His armies take Jerusalem and carry the True Cross to Ctesiphon.' },
    { date: '619', title: 'Egypt conquered', description: 'Egypt falls, depriving Constantinople of its grain supply.' },
    { date: '626', title: 'Constantinople besieged', description: 'A Persian army stands opposite the capital while the Avars assault the walls; the attempt fails.' },
    { date: '627', title: 'Nineveh', description: 'The Persian field army is destroyed and Heraclius marches on the royal residences.', links: [{ title: 'Battle of Nineveh', type: 'event', slug: 'battle-of-nineveh' }] },
    { date: '628', title: 'Deposed and executed', description: 'Overthrown by his son Kavad II and put to death; the conquests and the True Cross are returned.' }
  ],
  relatedEntries: {
    people: [
      { title: 'Heraclius', type: 'person', slug: 'heraclius', label: 'His opponent for a quarter-century' }
    ],
    events: [
      { title: 'Battle of Nineveh', type: 'event', slug: 'battle-of-nineveh', label: 'The defeat that ended his reign' }
    ],
    locations: [
      { title: 'Sasanian Empire', type: 'location', slug: 'sasanian-empire', label: 'The realm he ruled and ruined' },
      { title: 'Byzantine Empire', type: 'location', slug: 'byzantine-empire', label: 'The empire he nearly destroyed' }
    ]
  },
  sources: [
    { title: 'Theophanes the Confessor, Chronicle', url: 'https://en.wikipedia.org/wiki/Theophanes_the_Confessor', type: 'primary source' },
    { title: 'Khosrow II', url: 'https://en.wikipedia.org/wiki/Khosrow_II', type: 'encyclopedia' },
    { title: 'British Museum — Sasanian collections', url: 'https://www.britishmuseum.org/collection', type: 'museum collection', institution: 'British Museum' }
  ]
}

const sasanianEmpire = {
  id: 'sasanian-empire', type: 'location', locationType: 'Empire',
  name: 'Sasanian Empire', aliases: ['Sassanid Empire', 'Eranshahr', 'Persian Empire'],
  kingdom: 'Sasanian Empire', year: 224,
  image: img('Map of the Sasanian Empire at its apex under Khosrow II.png'),
  imageInfo: {
    caption: 'The Sasanian Empire at its greatest extent under Khosrow II, holding Syria, Palestine, Egypt and much of Anatolia alongside the Iranian heartland.',
    creator: 'Wikimedia Commons contributor',
    date: 'modern map of the empire at its apex',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Map_of_the_Sasanian_Empire_at_its_apex_under_Khosrow_II.png',
    note: 'A modern map, showing the empire at the high point it reached in the 620s and held for only a few years. Licensed CC BY 4.0.'
  },
  summary: 'The Sasanian Empire ruled Iran and Mesopotamia from 224 to 651, and was the eastern Roman empire\'s equal and rival for four centuries.',
  overview: 'It was never a barbarian kingdom on the Roman model but a peer state with its own imperial ideology, and the two exhausted each other so thoroughly that a third power took both.',
  knownFor: [
    'The last pre-Islamic Persian empire, ruling from 224 to 651.',
    'Zoroastrianism as a state religion, with the fire altar on its coinage.',
    'Four centuries of near-continuous rivalry with Rome and then Byzantium.',
    'Captured the Roman emperor Valerian alive in 260.'
  ],
  contentSections: [
    S('Overview',
      'The Sasanian Empire ruled Iran, Mesopotamia and much of Central Asia from 224 to 651, and for the whole of that time it was Rome\'s only true peer.',
      'This distinction matters for how the archive reads it. The Vandals and Ostrogoths were successor kingdoms built inside the Roman world; the Sasanians were an independent empire with their own imperial ideology, state religion and court, and they regarded Rome as an equal rather than a superior.',
      'It ended not through Roman victory but through mutual exhaustion: the great war of 602–628 left both empires so weakened that the Arab conquests took Iran entirely and half of the Roman east with it.'),
    S('Origins',
      'Ardashir I overthrew the last Parthian king, Artabanus IV, around 224, and the dynasty took its name from his ancestor Sasan.',
      'The new regime presented itself as a restoration — a deliberate revival of the Achaemenid empire that Alexander had destroyed — and adopted a far more centralised administration than the Parthians had run.',
      'Its capital was Ctesiphon on the Tigris, which remained the seat of the empire for its whole existence and was among the largest cities in the world.'),
    S('Religion and society',
      'Zoroastrianism was the state religion, with an organised priesthood and royal fire temples, and the fire altar appears on the reverse of Sasanian coinage throughout the dynasty.',
      'The empire nonetheless contained very large Christian, Jewish and later Manichaean populations. Treatment varied sharply by reign and by the state of relations with Rome — Christians could be tolerated as subjects or suspected as a Roman fifth column depending on the decade.',
      'Society was strongly stratified, with a great noble houses at the top whose power was a permanent constraint on royal authority — and, in 628, the mechanism by which Khosrow II was removed.'),
    S('The Roman wars',
      'War with Rome ran, on and off, for four hundred years, mostly over Armenia and Mesopotamia and mostly without decisive result.',
      'Its most spectacular moment came in 260, when Shapur I defeated and captured the Roman emperor Valerian alive — an event commemorated in rock reliefs at Naqsh-e Rostam and never forgotten on either side.',
      'The wars were generally limited and the frontier generally stable. What made the last war different was that Khosrow II abandoned the traditional objectives and tried to destroy the Roman empire outright.'),
    S('Major rulers',
      'Ardashir I (224–242) founded the dynasty and its ideology. Shapur I (240–270) fought three Roman emperors and captured one.',
      'Khosrow I Anushirvan (531–579) is the reforming king: he restructured taxation and the army, patronised learning, and gave the empire the administrative shape it held to the end. Byzantine writers treated him as a formidable and civilised opponent.',
      'Khosrow II (590–628) took the empire to its greatest extent and destroyed it in the attempt. Yazdegerd III (632–651) was the last shah, dying a fugitive after the Arab conquest.'),
    S('Government, economy and culture',
      'The empire was administratively sophisticated, with a professional bureaucracy, a land-tax system reformed under Khosrow I, and a network of royal roads and postal stages.',
      'It sat astride the trade routes between the Mediterranean and India and China, and much of its wealth came from controlling that traffic.',
      'Its art — rock reliefs, silver plate, textiles — was exported and imitated widely, and Sasanian silverwork turns up from Europe to China. The Academy of Gondishapur made it a centre of medicine and learning.'),
    S('Fall',
      'The war of 602–628 broke it. The conquests of Syria and Egypt could not be held once Heraclius struck at the Iranian heartland, and the defeat at Nineveh in 627 destroyed the field army.',
      'Khosrow II was executed in 628, and the four years that followed saw a rapid succession of short-lived rulers, including the general Shahrbaraz, who seized the throne in 630 and was killed within weeks.',
      'Arab armies invaded in the 630s and defeated the Sasanians decisively at Qadisiyyah and Nahavand. Yazdegerd III fled east and was murdered in 651, and the empire ended.'),
    S('Legacy',
      'Much of Sasanian administration, court ceremonial and art passed directly into the Islamic caliphates, so the empire survived in its institutions long after its dynasty.',
      'Its four-century rivalry with Rome shaped both states, and the way it ended is a caution about total war between peers: neither empire could finish the other, and both were left too weak to resist a third party.',
      'For this archive it is the great eastern opponent — the realm against which the Roman empire measured itself for longer than it measured itself against anyone else.')
  ],
  timeline: [
    { date: '224', title: 'Dynasty founded', description: 'Ardashir I overthrows the last Parthian king and founds the Sasanian empire.' },
    { date: '260', title: 'Valerian captured', description: 'Shapur I defeats and captures the Roman emperor Valerian alive.' },
    { date: '363', title: 'Julian\'s invasion fails', description: 'The emperor Julian invades Mesopotamia and is killed; Rome cedes territory.' },
    { date: '531', title: 'Accession of Khosrow I', description: 'Khosrow I begins a reign of reform in taxation, the army and administration.' },
    { date: '591', title: 'Khosrow II restored by Rome', description: 'The emperor Maurice restores Khosrow II to the throne with Roman troops.' },
    { date: '602', title: 'The last great war begins', description: 'Khosrow II invades Roman territory after the murder of Maurice.' },
    { date: '614', title: 'Jerusalem taken', description: 'Sasanian forces capture Jerusalem and carry off the True Cross.' },
    { date: '626', title: 'Constantinople besieged', description: 'A Persian army reaches the Bosphorus while the Avars assault the walls; the attempt fails.' },
    { date: '627', title: 'Nineveh', description: 'The field army is destroyed by Heraclius near the ruins of Nineveh.', links: [{ title: 'Battle of Nineveh', type: 'event', slug: 'battle-of-nineveh' }] },
    { date: '628', title: 'Khosrow II executed', description: 'Deposed by his son; a four-year succession crisis follows.' },
    { date: '636–642', title: 'The Arab conquest', description: 'Arab armies defeat the Sasanians at Qadisiyyah and Nahavand.' },
    { date: '651', title: 'The empire ends', description: 'Yazdegerd III, the last shah, is murdered as a fugitive in the east.' }
  ],
  relatedEntries: {
    people: [
      { title: 'Khosrow II', type: 'person', slug: 'khosrow-ii', label: 'Its last great king' },
      { title: 'Heraclius', type: 'person', slug: 'heraclius', label: 'The emperor who broke it' }
    ],
    events: [
      { title: 'Battle of Nineveh', type: 'event', slug: 'battle-of-nineveh', label: 'Where its field army was destroyed' }
    ],
    locations: [
      { title: 'Byzantine Empire', type: 'location', slug: 'byzantine-empire', label: 'Its rival for four centuries' },
      { title: 'Constantinople', type: 'location', slug: 'constantinople', label: 'The city it reached but never took' }
    ]
  },
  sources: [
    { title: 'Theophanes the Confessor, Chronicle', url: 'https://en.wikipedia.org/wiki/Theophanes_the_Confessor', type: 'primary source' },
    { title: 'Sasanian Empire', url: 'https://en.wikipedia.org/wiki/Sasanian_Empire', type: 'encyclopedia' },
    { title: 'British Museum — Sasanian collections', url: 'https://www.britishmuseum.org/collection', type: 'museum collection', institution: 'British Museum' }
  ]
}

const nineveh = {
  id: 'battle-of-nineveh', type: 'event', eventType: 'Battle', name: 'Battle of Nineveh',
  year: 627, location: 'Near the ruins of Nineveh, in Mesopotamia', eventLocation: 'The plain near the ruins of Nineveh',
  conflict: 'The Roman–Persian war of 602–628',
  image: img('Battle of nineveh-mohammad adil rais.PNG'),
  imageInfo: {
    caption: 'Heraclius\'s campaign into the Persian heartland and the battle near Nineveh in December 627.',
    creator: 'Wikimedia Commons contributor',
    date: 'modern map of the 627 campaign',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Battle_of_nineveh-mohammad_adil_rais.PNG',
    note: 'A modern campaign map, used because no contemporary depiction of the battle exists and the point of the engagement is where it was fought — deep in Persian territory, hundreds of miles from the provinces Persia had conquered. Licensed CC BY-SA 3.0.'
  },
  summary: 'On 12 December 627 Heraclius destroyed the Persian field army near the ruins of Nineveh, opening the road to the royal residences and bringing down Khosrow II.',
  details: 'It is the decisive battle of a twenty-six-year war, and it was won hundreds of miles from any of the territory the war had been fought over.',
  outcome: 'Decisive Roman victory; the Persian commander killed and the field army destroyed.',
  background: 'Rather than defend the lost provinces, Heraclius campaigned into the Persian heartland, forcing Khosrow to fight where he could not afford to lose.',
  battle: 'The two armies met on the plain near Nineveh. The fighting lasted most of a day, and the Persian commander Rhahzadh was killed — by Heraclius himself, according to the sources.',
  aftermath: 'Heraclius marched on Dastagird, which Khosrow abandoned. Khosrow was deposed and executed within two months, and his son made peace.',
  contentSections: [
    S('Overview',
      'Nineveh was fought on 12 December 627 on the plain beside the ruins of the old Assyrian capital, and it decided a war that had run for twenty-six years.',
      'What makes it remarkable is where it happened. Persia held Syria, Palestine, Egypt and much of Anatolia; the battle that lost them was fought in Mesopotamia, hundreds of miles from any of it.',
      'That was the whole of Heraclius\'s strategy: refuse to fight for the provinces, and threaten instead the heartland the Persian armies could not abandon their conquests to defend.'),
    S('Background',
      'By 626 the Persian position looked overwhelming, and a Persian army had stood on the Asian shore opposite Constantinople while the Avars assaulted the land walls. The city held and the coalition broke.',
      'Heraclius had spent the preceding years campaigning in Armenia and the Caucasus, building an alliance with the Göktürks and striking where Persian forces were thin.',
      'In late 627 he marched south into Mesopotamia. Khosrow ordered his general Rhahzadh to intercept, with instructions that amounted to a demand for battle.'),
    S('The battle',
      'The armies met near Nineveh in December, and the fighting lasted through most of a day — unusually long for a pitched battle of the period.',
      'The sources say that Heraclius killed Rhahzadh in single combat, and that he was wounded in the face doing it. The detail comes from writers sympathetic to him and should be treated with appropriate caution, but the death of the Persian commander is not in dispute.',
      'With Rhahzadh dead the Persian army broke, and no other field force stood between Heraclius and the royal residences.'),
    S('Aftermath',
      'Heraclius marched on Dastagird, Khosrow\'s favourite residence, and took it; Khosrow fled to Ctesiphon without giving battle again.',
      'The Persian nobility had had enough of a war that had brought a Roman army into Mesopotamia. In February 628 Khosrow was deposed by his son Kavad II and executed.',
      'Kavad made peace at once, returning the conquered provinces and the True Cross. Heraclius restored the relic to Jerusalem in 630 in the ceremony that became the emblem of his reign.'),
    S('Significance',
      'It is one of the most complete strategic victories in late antiquity, and it saved the eastern Roman empire from destruction.',
      'It also destroyed both combatants. Persia fell into a four-year succession crisis and never recovered; the Roman empire had spent a generation and its treasury, and its eastern provinces had been fought across repeatedly.',
      'Within a decade Arab armies took Syria, Palestine, Egypt and eventually the whole Sasanian empire. Nineveh is therefore a victory that decided a war and settled almost nothing — the last battle of one world rather than the first of the next.'),
    S('Sources',
      'The evidence here is markedly thinner than for the sixth-century campaigns. There is no Procopius: no participant historian, no eyewitness account.',
      'What survives is Theophanes the Confessor, writing nearly two centuries later, the Chronicon Paschale, panegyric verse by George of Pisidia written to celebrate the emperor, and Armenian and Syriac chronicles with their own concerns.',
      'The result is that the strategic shape of the campaign is reasonably secure while its tactical detail — including the single combat — rests on later and interested testimony. The articles here say so rather than narrating with borrowed confidence.')
  ],
  participants: [
    {
      side: 'Eastern Roman army',
      factions: [{ name: 'Byzantine Empire', title: 'Byzantine Empire', type: 'location', slug: 'byzantine-empire' }],
      leaders: [{ name: 'Heraclius', title: 'Heraclius', type: 'person', slug: 'heraclius' }],
      strength: { display: 'c. 25,000–50,000', confidence: 'debated', note: 'No reliable figure survives. Estimates vary widely and rest on later chronicles rather than on any contemporary count.' }
    },
    {
      side: 'Sasanian army',
      factions: [{ name: 'Sasanian Empire', title: 'Sasanian Empire', type: 'location', slug: 'sasanian-empire' }],
      leaders: [{ name: 'Rhahzadh' }],
      strength: { display: 'Unknown; probably smaller than the Roman force', confidence: 'unknown', note: 'No figures survive. The army was assembled hurriedly to intercept Heraclius while Persia\'s main forces were dispersed across the conquered provinces. Rhahzadh has no article in this archive.' }
    }
  ],
  battleContinuity: {
    label: 'Where the empire this victory saved eventually broke',
    battleSlug: 'battle-of-manzikert',
    relationship: 'same-factions',
    reason: 'Nineveh saved the eastern Roman empire and exhausted it; within a decade the Arab conquests took Syria, Palestine and Egypt, and at Manzikert in 1071 the empire lost Anatolia itself — the last of the ground Heraclius had fought to keep.'
  },
  relatedEntries: {
    people: [
      { title: 'Heraclius', type: 'person', slug: 'heraclius', label: 'Commanded the Roman army in person' },
      { title: 'Khosrow II', type: 'person', slug: 'khosrow-ii', label: 'Lost his throne within two months of it' }
    ],
    events: [
      { title: 'Fall of Constantinople', type: 'event', slug: 'fall-of-constantinople', label: 'The city this victory preserved, until 1453' }
    ],
    locations: [
      { title: 'Sasanian Empire', type: 'location', slug: 'sasanian-empire', label: 'The realm whose field army was destroyed' },
      { title: 'Byzantine Empire', type: 'location', slug: 'byzantine-empire', label: 'The empire it saved' }
    ]
  },
  sources: [
    { title: 'Theophanes the Confessor, Chronicle', url: 'https://en.wikipedia.org/wiki/Theophanes_the_Confessor', type: 'primary source' },
    { title: 'Battle of Nineveh (627)', url: 'https://en.wikipedia.org/wiki/Battle_of_Nineveh_(627)', type: 'encyclopedia' },
    { title: 'Campaign map', url: 'https://commons.wikimedia.org/wiki/File:Battle_of_nineveh-mohammad_adil_rais.PNG', type: 'image source', institution: 'Wikimedia Commons' }
  ]
}

data.characters.push(heraclius, khosrow)
data.locations.push(sasanianEmpire)
data.events.push(nineveh)

// Link the new material into what already exists.
const byz = data.locations.find((l) => l.id === 'byzantine-empire')
;(byz.relatedEntries.events ??= []).push({ title: 'Battle of Nineveh', type: 'event', slug: 'battle-of-nineveh', label: 'The victory that saved the empire from Persia in 627' })
;(byz.relatedEntries.people ??= []).push({ title: 'Heraclius', type: 'person', slug: 'heraclius', label: 'Emperor 610–641; defeated Persia and lost the east to the Arabs' })

console.log('+ characters : heraclius, khosrow-ii')
console.log('+ locations  : sasanian-empire')
console.log('+ events     : battle-of-nineveh')
console.log('~ byzantine-empire linked to Nineveh and Heraclius')

writeFileSync(dataPath, JSON.stringify(data, null, 2))
console.log(`\nM4 written — characters ${data.characters.length}, locations ${data.locations.length}, events ${data.events.length}`)
