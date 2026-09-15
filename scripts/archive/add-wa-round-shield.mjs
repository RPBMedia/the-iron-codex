/**
 * Tier 2 — the round shield.
 *
 * The archive's Norse coverage is extensive (Viking sword, Dane axe, battle axe,
 * Stamford Bridge, Stiklestad) and the shield wall is described repeatedly, but
 * the generic `shield` article gives the round shield two sentences and there was
 * no article of its own.
 *
 * Image: AI illustration, under the documented last-resort rule. A Viking-age
 * shield is limewood planks, a hide facing and an iron boss; the wood and leather
 * rot completely, so originals survive as bosses and plank fragments. Commons has
 * no complete example free of people — the round-shield category is African,
 * Scythian, Malaysian and a 1590 Nuremberg parade shield, and the Viking category
 * is entirely reenactment group photographs. Showing a bare iron boss would be
 * exactly the incomplete-artifact failure the owner ruled out on 2026-09-07.
 */
import { readFileSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dataPath = path.join(__dirname, '../server/data/history.json')
const data = JSON.parse(readFileSync(dataPath, 'utf8'))
const S = (title, ...paragraphs) => ({ title, paragraphs })

if (data.weaponsArmor.some((x) => x.id === 'round-shield')) throw new Error('round-shield already exists')

const article = {
  id: 'round-shield',
  name: 'Round Shield',
  type: 'weaponArmor',
  weaponArmorType: 'Shield',
  aliases: ['Viking shield', 'Viking round shield', 'lime-wood shield'],
  year: 900,
  period: 'Early Middle Ages',
  region: 'Scandinavia, the British Isles and the North Sea world',
  material: 'Butted limewood planks with a hide facing and an iron boss',
  battlefieldRole: 'Primary defence of the shield wall, and an offensive tool in its own right',
  image: '/round-shield-ai.png',
  imageInfo: {
    caption: 'AI-generated illustration of a Viking-age round shield, shown complete: butted limewood planks, a domed iron boss, a stitched rawhide rim and a simple painted scheme.',
    creator: 'AI-generated for The Iron Codex',
    date: 'generated 2026',
    source: 'The Iron Codex (AI illustration)',
    sourceUrl: '',
    aiGenerated: true,
    note: 'Not a photograph of an object. It is used because no suitably licensed photograph of a complete round shield could be sourced: the limewood and hide rot completely and only the iron boss survives, so originals exist as bosses and plank fragments, and the available reconstructions on Wikimedia Commons are all reenactment photographs with people in frame. It follows the Gokstad find for its proportions and its two-colour quartered scheme, and is not evidence for any individual surviving shield.'
  },
  specs: {
    note: 'Figures from the Gokstad ship find of 1880, the only large group of Viking-age shields to survive, plus grave finds of bosses. Individual shields varied.',
    rows: [
      { label: 'Period', value: 'c. 700–1100 (in general use far earlier and later)' },
      { label: 'Diameter', value: 'c. 80–95 cm' },
      { label: 'Thickness', value: 'c. 6–12 mm — a thin board, not a slab' },
      { label: 'Weight', value: 'c. 3–5 kg' },
      { label: 'Board', value: 'Butted planks of lime, fir or alder' },
      { label: 'Facing', value: 'Thin leather or linen, glued and painted' },
      { label: 'Rim', value: 'Stitched rawhide binding' },
      { label: 'Boss', value: 'Domed iron, riveted over a central hand hole' },
      { label: 'Grip', value: 'Single wooden bar across the back — centre grip, not strapped' },
      { label: 'Role', value: 'Shield wall and single combat' }
    ]
  },
  summary: 'The round shield was the universal defence of the early medieval North: a thin board of butted planks with an iron boss, held in one fist at the centre.',
  details: 'It was cheap, active and expendable — used to strike and bind as much as to block, and expected to be destroyed in the course of a fight. The Gokstad ship find of 1880 remains the only substantial group to survive.',
  knownFor: [
    'A thin board of butted limewood planks, not a thick slab — commonly 6 to 12 mm.',
    'Held by a single bar behind a domed iron boss, in one fist, rather than strapped to the arm.',
    'The basis of the shield wall, where overlapped shields made a line stronger than its men.',
    'Thirty-two shields survived on the Gokstad ship, painted alternately yellow and black.'
  ],
  contentSections: [
    S('Overview',
      'The round shield is the defence of the early medieval North: a flat circular board around eighty to ninety-five centimetres across, faced with hide, bound at the rim, and held in one fist by a bar behind an iron boss.',
      'It was near-universal. Where a sword marked a man of standing, every free man who fought owned a shield, and it is the one piece of equipment that appears in essentially every early medieval grave assemblage that contains weapons at all.',
      'It is also the most misunderstood object in the Norse armoury, because it looks passive and was not. A shield of this kind is a weapon used to strike, hook and bind, and it was expected to be cut to pieces in the course of a fight.'),
    S('Design and construction',
      'The board is made of straight planks butted edge to edge — lime above all, sometimes fir or alder — glued and faced rather than jointed. The Gokstad shields are around seven millimetres thick at the edge, which is far thinner than most people expect.',
      'That thinness is deliberate. A thin board is light enough to move quickly and cheap enough to replace, and a blade that bites into it is momentarily trapped in the wood rather than skidding off a hard surface.',
      'A round hole at the centre takes the hand, covered by a domed iron boss riveted through the board, with a wooden bar across the back serving as the grip. The rim is bound with stitched rawhide, which shrinks as it dries and holds the planks together — the single most important structural element after the boss.'),
    S('Protection and battlefield role',
      'Its primary role is the shield wall, where a line of men overlap their shields so each is covered partly by his neighbour. The formation is stronger than the sum of its parts, and it fails when it loses cohesion rather than when individual shields fail.',
      'Held in one fist at arm\'s length, it can be moved to meet a blow anywhere around the body, and the centre grip lets it be punched forward, rotated to deflect, and used to trap an opponent\'s weapon or shield rim.',
      'It appears throughout the fighting of the Norse world — at the Battle of Stiklestad in 1030, at the Battle of Stamford Bridge in 1066, and in the English shield wall that held the ridge for most of the day at the Battle of Hastings in the same year.'),
    S('Strengths and limitations',
      'Its strengths are coverage, cost and versatility. A carpenter could make one from local timber, it covers from chin to thigh, and it works equally in a formation and in a single fight.',
      'Its limitation is that it is consumable. Thin limewood splits, the facing tears and the rim binding parts, and the sagas treat a shield being destroyed during a fight as an ordinary event rather than a disaster — men carried spares, and the shields on the Gokstad ship were racked along the gunwale in numbers.',
      'The centre grip is a genuine trade-off. It gives far more mobility than a strapped shield but nothing like the same passive security: the shield is only where the hand puts it, so the arm tires and a moment\'s inattention is an opening.'),
    S('Historical development',
      'Round shields are used across northern Europe from long before the Viking age and are the standard form throughout the migration period and the early medieval centuries.',
      'They remain essentially unchanged for centuries, which is itself informative: the design was well matched to the way people fought, and there was no pressure to alter it while spear, axe and sword remained the principal weapons.',
      'The change comes with cavalry. From the eleventh century the kite shield spreads because a round shield leaves a rider\'s left leg exposed, and the round form retreats to infantry use and then to the smaller buckler and the targe.'),
    S('Regional variation',
      'Scandinavian material dominates, because pagan furnished burial persisted longest there and the Gokstad ship preserved shields in a way nothing else has.',
      'Anglo-Saxon shields are known mainly from their bosses, which are tall and conical rather than the flatter Scandinavian dome, and from the Sutton Hoo assemblage, where a ceremonial shield with elaborate mounts was buried in Mound 1.',
      'Continental and Frankish forms are broadly similar in construction, and the type is common enough across the North Sea world that a shield alone is rarely diagnostic of where its owner came from.'),
    S('Famous examples or surviving pieces',
      'The Gokstad ship, excavated in Norway in 1880, is the whole of the good evidence: thirty-two shields survived, racked along the ship\'s side, painted alternately yellow and black, and they supply almost every figure quoted about the type.',
      'Everything else is bosses. Iron survives where wood and hide do not, so the graves of northern Europe have produced thousands of bosses and almost no boards, which badly skews the impression a museum case gives.',
      'The Trelleborg fortress in Denmark produced a rare surviving board fragment, and reconstructions built to the Gokstad specification have done much of the work of establishing how these shields actually behaved under a blow.'),
    S('Legacy',
      'The round shield is the longest-serving defensive object in northern Europe, and its persistence is a reminder that equipment stops changing when it fits the fighting rather than when it stops being improvable.',
      'Its descendants are the buckler and the targe, both of which keep the centre grip and the active, weapon-like handling while shrinking the board.',
      'It also carries a persistent misconception worth correcting: the thick, heavy, iron-rimmed shield of film and reenactment is a modern object built for repeated safe contact. A real one was thin, light and expendable, and behaved completely differently.')
  ],
  comparison: {
    title: 'Round shield vs. kite shield',
    leftLabel: 'Round shield',
    rightLabel: 'Kite shield',
    rows: [
      { feature: 'Shape', left: 'Circular, c. 80–95 cm', right: 'Long and tapering, c. 100–140 cm' },
      { feature: 'Grip', left: 'Centre grip, one fist behind the boss', right: 'Arm straps (enarmes), strapped to the forearm' },
      { feature: 'Boss', left: 'Structural — covers the hand hole', right: 'Decorative or absent' },
      { feature: 'Covers', left: 'Chin to thigh, on foot', right: 'Shoulder past the leg, on horseback' },
      { feature: 'Handling', left: 'Highly mobile; can strike and bind', right: 'Passive; stays where the arm holds it' },
      { feature: 'Peak period', left: 'c. 700–1050', right: 'c. 1050–1200' }
    ]
  },
  myths: [
    { claim: 'Viking shields were thick, heavy and iron-rimmed.', reality: 'The Gokstad boards are about 7 mm thick with a stitched rawhide rim. Thick iron-rimmed shields are modern reenactment and sport equipment built to survive repeated hits.' },
    { claim: 'A shield was meant to last a battle.', reality: 'It was consumable. Saga accounts treat shields splitting mid-fight as routine, and men carried spares.' },
    { claim: 'Shields were strapped to the arm.', reality: 'Viking-age round shields are centre-grip — held in one fist by a bar behind the boss. Arm straps belong to the kite shield and later forms.' },
    { claim: 'They were painted with runes and dragons.', reality: 'The surviving evidence is simple geometry — the Gokstad shields alternate plain yellow and black. Elaborate Norse ornament on shields is a modern invention.' },
    { claim: 'A shield was purely defensive.', reality: 'The centre grip makes it an active tool: punched forward, rotated to deflect, used to hook a rim or trap a weapon.' }
  ],
  relatedEntries: {
    events: [
      { title: 'Battle of Hastings', type: 'event', slug: 'battle-of-hastings', label: 'The English shield wall held the ridge for most of the day' },
      { title: 'Battle of Stamford Bridge', type: 'event', slug: 'battle-of-stamford-bridge', label: 'Fought on both sides with shield and spear' },
      { title: 'Battle of Stiklestad', type: 'event', slug: 'battle-of-stiklestad', label: 'Norse shield-wall fighting at its height' }
    ],
    weaponsArmor: [
      { title: 'Shield', type: 'weaponArmor', slug: 'shield', label: 'The wider history of the object' },
      { title: 'Kite Shield', type: 'weaponArmor', slug: 'kite-shield', label: 'The mounted form that displaced it' },
      { title: 'Viking Sword', type: 'weaponArmor', slug: 'viking-sword', label: 'Its constant partner in the sources' },
      { title: 'Dane Axe', type: 'weaponArmor', slug: 'dane-axe', label: 'The weapon that required giving it up' },
      { title: 'Buckler', type: 'weaponArmor', slug: 'buckler', label: 'The centre-grip descendant' },
      { title: 'Spear', type: 'weaponArmor', slug: 'spear', label: 'The weapon most shield-wall fighters actually carried' }
    ]
  },
  sources: [
    { title: 'Museum of Cultural History, Oslo — the Gokstad ship', url: 'https://www.khm.uio.no/english/visit-us/viking-ship-museum/', type: 'museum collection', institution: 'Museum of Cultural History, University of Oslo' },
    { title: 'National Museum of Denmark — Viking weapons and shields', url: 'https://en.natmus.dk/', type: 'museum collection', institution: 'National Museum of Denmark' },
    { title: 'British Museum — early medieval collections', url: 'https://www.britishmuseum.org/collection', type: 'museum collection', institution: 'British Museum' },
    { title: 'Viking Age shields', url: 'https://en.wikipedia.org/wiki/Shield#Middle_Ages', type: 'encyclopedia' }
  ]
}

data.weaponsArmor.push(article)
console.log(`+ round-shield: ${article.contentSections.length} sections, ${article.contentSections.flatMap((s) => s.paragraphs).join(' ').length} chars`)

const get = (id) => {
  const e = data.weaponsArmor.find((x) => x.id === id)
  if (!e) throw new Error(`missing: ${id}`)
  return e
}
for (const [id, label] of Object.entries({
  shield: 'The early medieval form treated in detail',
  'kite-shield': 'The centre-grip round shield it replaced',
  'viking-sword': 'Its constant partner in Norse fighting',
  'dane-axe': 'The two-handed axe meant giving this up',
  buckler: 'The small centre-grip shield descended from it'
})) {
  ;(get(id).relatedEntries.weaponsArmor ??= []).push({ title: 'Round Shield', type: 'weaponArmor', slug: 'round-shield', label })
  console.log(`  back-link ${id} -> round-shield`)
}

writeFileSync(dataPath, JSON.stringify(data, null, 2))
console.log(`\nweaponsArmor now ${data.weaponsArmor.length}`)
