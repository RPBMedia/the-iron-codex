/**
 * Scandinavia pass. Creates the two clean-close, high-value articles whose
 * neighbours already exist (Abel of Denmark; Jarl Håkon Sigurdsson of Norway)
 * and relinks their endpoints, then status-classifies the collective / rival /
 * semi-legendary Scandinavian succession ends that are NOT single article-able
 * rulers (disputed / fragmented / unknown, each with a note). Idempotent.
 */
import fs from 'node:fs'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dataPath = path.join(__dirname, '../server/data/history.json')
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'))

const DEN = { title: 'Kingdom of Denmark', type: 'location', slug: 'kingdom-of-denmark' }
const NOR = { title: 'Kingdom of Norway', type: 'location', slug: 'kingdom-of-norway' }
const per = (slug, title, label) => ({ title, type: 'person', slug, label })
const src = (title, url) => ({ title, author: 'Encyclopaedia Britannica', type: 'encyclopedia', url })

const people = [
  // ── ABEL OF DENMARK ───────────────────────────────────────────────────────────
  {
    id: 'abel-of-denmark', type: 'character', name: 'Abel of Denmark', born: 1218, died: 1252,
    deathAge: 'about 34', causeOfDeath: 'Killed in battle against the Frisians', restingPlace: 'Schleswig Cathedral',
    location: 'Kingdom of Denmark', aliases: ['Abel Valdemarsen', 'Abel of Schleswig'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Abel%2C_King_of_Denmark.jpg',
    summary: 'King of Denmark (1250–1252), Duke of Schleswig, who took the throne after his brother Eric IV was murdered — a killing widely blamed on Abel himself — and fell in battle two years later.',
    title: 'King of Denmark', roles: ['King of Denmark', 'Duke of Schleswig'],
    birth: { date: '1218', place: { name: 'Denmark' }, note: 'Second son of Valdemar II of Denmark; Duke of Schleswig before becoming king.' },
    death: { date: '29 June 1252', place: { name: 'Husum marshes' }, circumstance: 'Killed on campaign against the rebellious Frisians of the Danish marshes in 1252.' },
    quickFacts: { realm: 'Kingdom of Denmark', dynasty: 'House of Estridsen', culture: 'Danish', knownFor: 'taking the throne after the murder of his brother Eric IV, which he was accused of ordering' },
    imageInfo: { caption: 'A depiction of Abel of Denmark, photographed by Richard Mortel.', creator: 'Later depiction (photograph by Richard Mortel)', date: 'Photograph 2017 of a later depiction', source: 'Wikimedia Commons', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Abel,_King_of_Denmark.jpg', license: 'CC0', note: 'A later portrait depiction of the king, not a likeness from life.' },
    overview: [
      'Abel was king of Denmark from 1250 to 1252, a reign of less than two years overshadowed by the crime that opened it. The second son of Valdemar II, he ruled the Duchy of Schleswig and spent years in bitter conflict with his elder brother, King Eric IV Ploughpenny, over power and territory.',
      'In 1250 Eric IV was seized while a guest of Abel, taken out onto the water, and beheaded. Abel swore his innocence with two dozen co-jurors and was elected king, but the suspicion of fratricide clung to him. He fell in battle against the rebellious Frisians in 1252, and the crown passed to his younger brother Christopher rather than to his own sons.'
    ],
    greatestFeats: ['King of Denmark', 'Duke of Schleswig'],
    contentSections: [
      { title: 'Overview', paragraphs: [
        'Abel was king of Denmark from 1250 to 1252, a reign of less than two years overshadowed by the crime that opened it. The second son of Valdemar II, he ruled the Duchy of Schleswig and spent years in bitter conflict with his elder brother, King Eric IV Ploughpenny, over power and territory.',
        'In 1250 Eric IV was seized while a guest of Abel, taken out onto the water, and beheaded. Abel swore his innocence with two dozen co-jurors and was elected king, but the suspicion of fratricide clung to him. He fell in battle against the rebellious Frisians in 1252, and the crown passed to his younger brother Christopher rather than to his own sons.'
      ]},
      { title: 'Birth and early life', paragraphs: [
        'Abel was born in 1218, the second surviving son of the powerful King Valdemar II of Denmark. As a younger son he was granted the Duchy of Schleswig, and through marriage he was drawn into the orbit of the counts of Holstein, ties that made him as much a south-Jutland prince as a Danish royal.',
        'Valdemar II\'s division of authority among his sons sowed the conflict that defined Abel\'s life. When his eldest brother became king as Eric IV in 1241, Abel resisted royal attempts to tax and control his duchy, and the two brothers waged a series of destructive wars through the 1240s.'
      ]},
      { title: 'Character and Personality', paragraphs: [
        'Abel is remembered above all through the shadow of his brother\'s murder, and the sources — written under the dynasty of the brother who succeeded him — are not kind. They present an ambitious, hard, and grasping prince, jealous of royal authority over his duchy and willing to go to terrible lengths to defend and extend his own power.',
        'The oath of innocence he swore over Eric\'s death, backed by twenty-four co-jurors, was believed by few then and fewer since; Danish tradition made him a fratricide haunted after death, his ghost said to ride the Schleswig marshes. Whatever the truth, the portrait that survives is of a proud territorial magnate who valued the near-independence of his ducal power above the loyalty owed to a royal brother.'
      ]},
      { title: 'The murder of Eric IV and Abel\'s reign', paragraphs: [
        'The long feud reached its climax in August 1250. Eric IV, visiting Abel at Schleswig, was seized by the duke\'s men, rowed out onto the Schlei, and beheaded, his body sunk in the water. Abel at once denied any part in it, cleared himself by a compurgation oath with twenty-four nobles, and was duly elected and crowned king of Denmark.',
        'His short reign was spent trying to secure a monarchy weakened by the scandal and by the concessions he had made to the Church and nobility to win the crown. In 1252 he led a campaign to force the tax-refusing Frisians of the western marshes to submit, and was killed among them — a death that Danish moralists read as divine judgement for his brother\'s blood.'
      ]},
      { title: 'Death', paragraphs: [
        'Abel fell in the marshes near Husum on 29 June 1252. Because his sons were young and abroad, and his name stained, the Danish magnates passed over his line and elected his youngest brother king as Christopher I. Abel\'s descendants continued as dukes of Schleswig, a lasting source of conflict with the Danish crown.'
      ]},
      { title: 'Legacy', paragraphs: [
        'Abel\'s brief reign left little but a dark reputation and a dynastic quarrel. The suspicion of fratricide made him a byword in Danish legend, and the exclusion of his sons from the throne, while their ducal line endured in Schleswig, set the stage for generations of strife between the kings of Denmark and the dukes of Schleswig-Holstein. He is remembered less as a ruler than as the central figure of one of medieval Denmark\'s most notorious crimes.'
      ]}
    ],
    keyAchievements: [
      { title: 'King of Denmark, 1250–1252', description: 'Elected king after clearing himself of his brother\'s murder by oath.' },
      { title: 'Duke of Schleswig', description: 'Ruled Schleswig as a near-independent prince, resisting royal control.' }
    ],
    timeline: [
      { date: '1218', title: 'Born', description: 'Born the second son of King Valdemar II of Denmark.' },
      { date: 'c. 1232', title: 'Becomes Duke of Schleswig', description: 'Granted the Duchy of Schleswig as a younger son of Valdemar II.', links: [DEN] },
      { date: '1241–1250', title: 'Wars with Eric IV', description: 'Resists his brother King Eric IV\'s authority in a series of destructive wars.', links: [per('eric-iv-of-denmark', 'Eric IV of Denmark', 'His brother and rival')] },
      { date: 'August 1250', title: 'Eric IV murdered at Schleswig', description: 'Eric IV is seized and beheaded while Abel\'s guest; Abel is elected king after swearing innocence.', links: [per('eric-iv-of-denmark', 'Eric IV of Denmark', 'His murdered brother and predecessor')] },
      { date: '29 June 1252', title: 'Killed fighting the Frisians', description: 'Dies on campaign in the marshes; the crown passes to his brother Christopher I.', links: [per('christopher-i-of-denmark', 'Christopher I of Denmark', 'His brother and successor')] }
    ],
    relatedEntries: {
      locations: [ { ...DEN, label: 'His kingdom' } ],
      people: [ per('eric-iv-of-denmark', 'Eric IV of Denmark', 'His brother, whose murder he was accused of ordering'), per('christopher-i-of-denmark', 'Christopher I of Denmark', 'His youngest brother and successor') ],
      events: []
    },
    sources: [ src('Abel | king of Denmark', 'https://www.britannica.com/place/Denmark'), src('Denmark — history', 'https://www.britannica.com/place/Denmark/History') ],
    isRuler: true,
    succession: { office: 'King of Denmark',
      predecessor: { personSlug: 'eric-iv-of-denmark', displayName: 'Eric IV of Denmark', note: 'His elder brother, murdered at Schleswig in 1250 — a killing widely blamed on Abel.' },
      successor: { personSlug: 'christopher-i-of-denmark', displayName: 'Christopher I of Denmark', note: 'His youngest brother, elected king over Abel\'s own excluded sons.' } }
  },

  // ── JARL HÅKON SIGURDSSON ─────────────────────────────────────────────────────
  {
    id: 'jarl-hakon-sigurdsson', type: 'character', name: 'Jarl Håkon Sigurdsson', born: 937, died: 995,
    deathAge: 'about 58', causeOfDeath: 'Killed by his own slave during a revolt', restingPlace: 'Unknown',
    location: 'Kingdom of Norway', aliases: ['Haakon Sigurdsson', 'Håkon the Powerful', 'Hákon jarl', 'Earl Haakon of Lade'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/10/H%C3%A5kon_jarl.jpg',
    summary: 'Earl of Lade and de facto ruler of Norway (c. 975–995), the last great pagan lord of Norway, who governed independently before being overthrown by Olaf Tryggvason.',
    title: 'Ruler of Norway (Jarl of Lade)', roles: ['Jarl of Lade', 'Ruler of Norway'],
    birth: { date: 'c. 937', place: { name: 'Trøndelag' }, note: 'Son of Sigurd, Earl of Lade; head of the powerful jarls of Lade in Trøndelag.' },
    death: { date: '995', place: { name: 'Gauldal, Trøndelag' }, circumstance: 'Murdered by his own slave Tormod Kark while hiding in a pigsty during the revolt that brought Olaf Tryggvason to power.' },
    quickFacts: { realm: 'Kingdom of Norway', dynasty: 'Jarls of Lade (Hlaðir)', culture: 'Norse', knownFor: 'ruling Norway as its last great pagan lord before Olaf Tryggvason' },
    imageInfo: { caption: 'Jarl Håkon Sigurdsson, illustrated by Christian Krohg for an edition of Snorri\'s Heimskringla.', creator: 'Christian Krohg', date: 'c. 1895–1899', source: 'Wikimedia Commons', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Håkon_jarl.jpg', license: 'Public domain', note: 'A late nineteenth-century saga illustration, not a contemporary likeness.' },
    overview: [
      'Håkon Sigurdsson, Earl of Lade, was the effective ruler of Norway for some twenty years, from about 975 to 995. Head of the great jarl dynasty of Lade in Trøndelag, he governed the country as an independent lord — nominally under the overlordship of the Danish king Harald Bluetooth, whom he soon threw off — and is remembered as the last powerful champion of the old Norse paganism against the coming of Christianity.',
      'He came to power by helping to destroy the Christianising king Harald Greycloak, ruled through the loyalty of the pagan chieftains, and famously defended Norway against a great Danish-backed invasion by the Jomsvikings. His rule ended in revolt: hunted down after his overbearing conduct turned the country against him, he was killed by his own slave just as Olaf Tryggvason arrived to claim the throne.'
    ],
    greatestFeats: ['Ruled Norway for two decades', 'Threw off Danish overlordship', 'Defended Norway against the Jomsviking invasion'],
    contentSections: [
      { title: 'Overview', paragraphs: [
        'Håkon Sigurdsson, Earl of Lade, was the effective ruler of Norway for some twenty years, from about 975 to 995. Head of the great jarl dynasty of Lade in Trøndelag, he governed the country as an independent lord — nominally under the overlordship of the Danish king Harald Bluetooth, whom he soon threw off — and is remembered as the last powerful champion of the old Norse paganism against the coming of Christianity.',
        'He came to power by helping to destroy the Christianising king Harald Greycloak, ruled through the loyalty of the pagan chieftains, and famously defended Norway against a great Danish-backed invasion by the Jomsvikings. His rule ended in revolt: hunted down after his overbearing conduct turned the country against him, he was killed by his own slave just as Olaf Tryggvason arrived to claim the throne.'
      ]},
      { title: 'Birth and early life', paragraphs: [
        'Håkon was born about 937 into the jarls of Lade, the dominant family of Trøndelag in northern Norway, whose power rested on the loyalty of the region\'s pagan chieftains and the great temple cults they patronised. His father, Earl Sigurd, was killed by the sons of Eric Bloodaxe, and Håkon inherited both the earldom and the feud.',
        'Driven from Norway by King Harald Greycloak, Håkon took refuge with the Danish king Harald Bluetooth, and it was with Danish help that he returned to overthrow Harald Greycloak and take control of Norway.'
      ]},
      { title: 'Character and Personality', paragraphs: [
        'The sagas paint Håkon as a formidable and cunning ruler — a shrewd war-leader and politician, generous to his friends, deeply devoted to the old gods, and increasingly arrogant and predatory as his power grew. He is the great pagan antagonist of the saga tradition, set against the Christianising kings who followed him.',
        'That tradition, written down by Christian authors, dwells on his devotion to heathen sacrifice and, in its hostile later phase, on his lust and high-handedness toward the wives and daughters of the free farmers — the conduct said to have finally turned Trøndelag against him. Beneath the moralising he emerges as a strong and capable lord of the old order, whose downfall came when the very chieftains whose interests he embodied would no longer tolerate his overreach.'
      ]},
      { title: 'Ruler of Norway', paragraphs: [
        'For about two decades Håkon governed Norway from Trøndelag, not as king but as jarl, ruling through alliance with the regional chieftains rather than by imposing a centralised monarchy. He soon repudiated his nominal subjection to Harald Bluetooth of Denmark and ruled as an independent power, restoring and protecting the pagan cult against the Christian pressure the Danish kings represented.',
        'His most celebrated feat was the defence of Norway against the Jomsvikings, the fabled Baltic warrior-brotherhood launched against him with Danish backing. In a hard-fought sea battle at Hjörungavágr, Håkon defeated the invaders and secured his hold on the country — the high point of his rule.'
      ]},
      { title: 'Downfall and death', paragraphs: [
        'In his last years Håkon\'s conduct — above all, in the sagas, his seizing of free men\'s womenfolk — provoked a rising of the Trøndelag farmers just as Olaf Tryggvason, a claimant of the old royal line, landed to claim the throne. Deserted and hunted, Håkon hid in a pigsty on a farm at Gauldal with his slave Tormod Kark.',
        'There, in 995, Kark cut his master\'s throat as he slept, and carried the earl\'s head to Olaf — who, rather than reward the betrayal, had the slave executed. Håkon\'s death cleared the way for Olaf Tryggvason\'s Christian kingship.'
      ]},
      { title: 'Legacy', paragraphs: [
        'Jarl Håkon is remembered as the last great pagan ruler of Norway, the powerful lord under whom the old religion and the old decentralised order of the jarls had their final flourishing. His fall marked a turning point: with Olaf Tryggvason began the sustained, forcible Christianisation of Norway and the drive toward a unified Christian monarchy. In the saga literature he stands as the formidable heathen shadow against which the missionary kings defined themselves.'
      ]}
    ],
    keyAchievements: [
      { title: 'Ruled Norway for two decades', description: 'Governed the country as Earl of Lade, c. 975–995, through the pagan chieftains.' },
      { title: 'Cast off Danish overlordship', description: 'Repudiated his subjection to Harald Bluetooth and ruled independently.' },
      { title: 'Defeated the Jomsvikings', description: 'Turned back the great Danish-backed invasion at the battle of Hjörungavágr.' }
    ],
    timeline: [
      { date: 'c. 937', title: 'Born', description: 'Born into the jarls of Lade, the dominant family of Trøndelag.' },
      { date: 'c. 961', title: 'Inherits the earldom', description: 'Succeeds his father Sigurd, murdered by the sons of Eric Bloodaxe, and inherits the feud.' },
      { date: 'c. 975', title: 'Takes control of Norway', description: 'With Danish help, overthrows Harald Greycloak and becomes ruler of Norway.', links: [per('harald-greycloak', 'Harald Greycloak', 'The king he overthrew'), NOR] },
      { date: 'c. 986', title: 'Defeats the Jomsvikings', description: 'Defeats the Danish-backed Jomsviking invasion at Hjörungavágr, the height of his power.' },
      { date: '995', title: 'Killed during the revolt', description: 'Betrayed and killed by his slave Kark as Olaf Tryggvason seizes the throne.', links: [per('olaf-tryggvason', 'Olaf Tryggvason', 'Who supplanted him as king')] }
    ],
    relatedEntries: {
      locations: [ { ...NOR, label: 'The realm he ruled' } ],
      people: [ per('harald-greycloak', 'Harald Greycloak', 'The king he overthrew to take power'), per('olaf-tryggvason', 'Olaf Tryggvason', 'Who supplanted him as king of Norway'), per('harald-bluetooth', 'Harald Bluetooth', 'His onetime Danish overlord') ],
      events: []
    },
    sources: [ src('Haakon Sigurdsson | Norwegian ruler', 'https://www.britannica.com/place/Norway'), src('Norway — history', 'https://www.britannica.com/place/Norway/History') ],
    isRuler: true,
    succession: { office: 'Ruler of Norway (Jarl of Lade)',
      predecessor: { personSlug: 'harald-greycloak', displayName: 'Harald Greycloak', note: 'The Christianising king he overthrew, with Danish help, to take control of Norway.' },
      successor: { personSlug: 'olaf-tryggvason', displayName: 'Olaf Tryggvason', note: 'Who took the throne as king in 995 as Håkon was killed in the revolt against him.' } }
  }
]

// Insert / replace the two articles
let added = 0, replaced = 0
for (const p of people) {
  const i = data.characters.findIndex(c => c.id === p.id)
  if (i >= 0) { data.characters[i] = p; replaced++ } else { data.characters.push(p); added++ }
}

const byId = new Map(data.characters.map(c => [c.id, c]))

// Relink the four endpoints that named the two new figures.
const relink = (rulerId, side, personSlug, displayName, note) => {
  const c = byId.get(rulerId)
  if (!c?.succession?.[side]) { console.warn(`SKIP relink ${rulerId}.${side}`); return }
  c.succession[side] = { personSlug, displayName, note }
  console.log(`relinked ${rulerId}.${side} -> ${personSlug}`)
}
relink('eric-iv-of-denmark', 'successor', 'abel-of-denmark', 'Abel of Denmark', 'His brother, elected king after Eric\'s murder — a killing widely blamed on Abel.')
relink('christopher-i-of-denmark', 'predecessor', 'abel-of-denmark', 'Abel of Denmark', 'His brother, on whose death in battle Christopher was elected over Abel\'s excluded sons.')
relink('harald-greycloak', 'successor', 'jarl-hakon-sigurdsson', 'Jarl Håkon Sigurdsson', 'The Earl of Lade who, with Danish help, overthrew him and ruled Norway.')
relink('olaf-tryggvason', 'predecessor', 'jarl-hakon-sigurdsson', 'Jarl Håkon Sigurdsson', 'The pagan Earl of Lade who ruled Norway until Olaf supplanted him in 995.')

// Status-classify the collective / rival / semi-legendary succession ends.
// [rulerId, side, status, note]
const statusPatches = [
  ['godfred-of-denmark', 'predecessor', 'unknown',
    'Danish kingship before Godfred is known only from scattered Frankish annals; the earlier king Sigfred cannot be securely placed in the succession.'],
  ['hemming-of-denmark', 'successor', 'disputed',
    'After Hemming, the rival claimants Sigfred and Anulo fought for the Danish throne; both fell in the battle of 812.'],
  ['horik-i-of-denmark', 'predecessor', 'fragmented',
    'The Danish kingship was contested and shared between Harald Klak and the sons of Godfred before Horik I prevailed.'],
  ['gorm-the-old', 'predecessor', 'unknown',
    'The Danish kings before Gorm the Old — traditionally his father Harthacnut (Hardegon) — belong to a semi-legendary period not securely recorded.'],
  ['sigurd-of-norway', 'successor', 'disputed',
    'Norway passed to the rival kings Magnus IV and Harald Gille, whose contested succession opened a century of Norwegian civil war.'],
  ['olaf-tryggvason', 'successor', 'fragmented',
    'After Olaf fell at Svolder (c. 1000), Norway was divided among the jarls Eric and Sweyn Håkonsson under Danish and Swedish overlordship.'],
  ['olaf-ii-haraldsson', 'predecessor', 'fragmented',
    'Before Olaf II reunited the kingdom, Norway was ruled in divided fashion by the jarls Eric and Sweyn Håkonsson.'],
  ['stenkil', 'successor', 'disputed',
    'After Stenkil\'s death the Swedish throne was contested by two rival claimants both named Eric, who destroyed each other in the ensuing strife.']
]
for (const [id, side, status, note] of statusPatches) {
  const c = byId.get(id)
  if (!c?.succession?.[side]) { console.warn(`SKIP status ${id}.${side}`); continue }
  const prev = c.succession[side]
  c.succession[side] = { status, displayName: prev.displayName, note }
  console.log(`${id}.${side}: ${prev.displayName} -> status:${status}`)
}

fs.writeFileSync(dataPath, JSON.stringify(data, null, 2))
console.log(`\nScandinavia: articles added ${added}, replaced ${replaced}. Total characters: ${data.characters.length}`)
