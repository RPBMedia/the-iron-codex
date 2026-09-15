/**
 * Owner review of the Tier 1 articles, 2026-09-07. Three findings:
 *
 * 1. The bombard and hand cannon images showed incomplete museum artifacts — a
 *    bare barrel on gallery plinths, and a barrel with no tiller. Ruled a hard no
 *    across the archive; see the new rule at the top of the Weapons & Armor image
 *    section in CLAUDE.md. The principal image must show the weapon as it was
 *    used: complete and in its working configuration.
 *
 *    The bombard is fixed here with a real photograph of a complete gun still
 *    strapped into its timber bed at the Château de Castelnaud. The Dardanelles
 *    Gun moves to a section image, where a bare barrel is exactly right — it shows
 *    the scale and the screw-together construction.
 *
 *    The hand cannon has no such photograph anywhere. Commons (several categories
 *    and searches), the Met, Cleveland and Historic Enterprises all hold or show
 *    bare barrels; the wooden tiller always rots. It goes to an AI illustration
 *    under the documented last-resort rule, generated separately.
 *
 * 2. Specifications must appear on EVERY Weapons & Armor article. Six lacked the
 *    block: the three named artifacts and the three new Tier 1 articles.
 *
 * 3. The pike article, held back from the Tier 1 commit for want of an image,
 *    is added here with the owner-generated illustration.
 */
import { readFileSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dataPath = path.join(__dirname, '../server/data/history.json')
const data = JSON.parse(readFileSync(dataPath, 'utf8'))
const S = (title, ...paragraphs) => ({ title, paragraphs })
const get = (id) => {
  const entry = data.weaponsArmor.find((x) => x.id === id)
  if (!entry) throw new Error(`missing article: ${id}`)
  return entry
}

// ---- 1. bombard: complete gun in its bed, fragment demoted to a section image --

const bombard = get('bombard')
const previousBombardImage = bombard.image
const previousBombardInfo = bombard.imageInfo

bombard.image = 'https://commons.wikimedia.org/wiki/Special:FilePath/Bombarde%20-%20Ch%C3%A2teau%20de%20Castelnaud%20-%2020090926.jpg'
bombard.imageInfo = {
  caption: 'A 15th-century bombard complete in its working configuration: the barrel strapped by iron bands into the heavy timber bed it was fired from, at the Château de Castelnaud.',
  creator: 'Unknown French founder; photograph via Wikimedia Commons',
  date: '15th century (object); photograph 2009',
  source: 'Musée de la Guerre au Moyen Âge, Château de Castelnaud / Wikimedia Commons',
  sourceUrl: 'https://commons.wikimedia.org/wiki/File:Bombarde_-_Ch%C3%A2teau_de_Castelnaud_-_20090926.jpg',
  note: 'An original gun shown as it was actually emplaced — a bombard had no wheels and no carriage, and was lashed into a timber bed that absorbed the recoil into the ground. A bare barrel on museum plinths shows a component rather than a weapon.'
}
bombard.sectionImages = [
  {
    section: 'Regional variation',
    src: previousBombardImage,
    caption: 'The Dardanelles Gun of 1464, an Ottoman bombard in the Royal Armouries collection, shown as two bronze halves that screw together.',
    creator: previousBombardInfo.creator,
    date: previousBombardInfo.date,
    source: previousBombardInfo.source,
    sourceUrl: previousBombardInfo.sourceUrl,
    note: 'The barrel alone, without a bed — appropriate here because the point of the image is the scale and the screw joint at the centre, not the weapon in service.'
  }
]

// ---- 2. specifications on every Weapons & Armor article ----------------------

const specs = {
  bombard: {
    note: 'Typical ranges for the largest guns; bombards varied enormously by founder, date and material.',
    rows: [
      { label: 'Period', value: 'c. 1370–1500' },
      { label: 'Calibre', value: 'c. 30–80 cm on the largest' },
      { label: 'Weight', value: 'c. 1–16+ tonnes' },
      { label: 'Construction', value: 'Wrought-iron staves and hoops, or cast bronze' },
      { label: 'Projectile', value: 'Dressed stone shot' },
      { label: 'Rate of fire', value: 'A few shots per day' },
      { label: 'Mounting', value: 'Lashed into a timber bed; no carriage' },
      { label: 'Role', value: 'Siege artillery' }
    ]
  },
  trebuchet: {
    note: 'Figures for large counterweight machines, drawn from written accounts and modern working reconstructions; no medieval example survives to measure.',
    rows: [
      { label: 'Period', value: 'c. 1180–1450 (counterweight form)' },
      { label: 'Beam length', value: 'c. 8–15 m' },
      { label: 'Counterweight', value: 'c. 1–10 tonnes' },
      { label: 'Projectile', value: 'c. 50–150 kg stone' },
      { label: 'Range', value: 'c. 200–300 m' },
      { label: 'Rate of fire', value: 'A few shots per hour' },
      { label: 'Materials', value: 'Timber frame, rope, iron fittings' },
      { label: 'Role', value: 'Siege engine' }
    ]
  },
  'hand-cannon': {
    note: 'Typical ranges; early firearms were made individually and vary widely.',
    rows: [
      { label: 'Period', value: 'c. 1330–1450' },
      { label: 'Barrel length', value: 'c. 20–40 cm' },
      { label: 'Overall length', value: 'c. 1.0–1.5 m with tiller' },
      { label: 'Weight', value: 'c. 3–8 kg' },
      { label: 'Calibre', value: 'c. 15–35 mm' },
      { label: 'Effective range', value: 'c. 30–50 m against a formation' },
      { label: 'Ignition', value: 'Hot wire or slow match to a touch hole' },
      { label: 'Role', value: 'Personal firearm' }
    ]
  },
  pike: {
    note: 'Typical ranges; pike lengths grew through the period and varied between national practices.',
    rows: [
      { label: 'Period', value: 'c. 1300–1600' },
      { label: 'Overall length', value: 'c. 4–6 m' },
      { label: 'Head length', value: 'c. 20–30 cm' },
      { label: 'Weight', value: 'c. 2.5–4 kg' },
      { label: 'Shaft', value: 'Ash, tapering toward the butt' },
      { label: 'Grip', value: 'Two-handed' },
      { label: 'Formation', value: 'Deep block; front ranks level points' },
      { label: 'Role', value: 'Anti-cavalry infantry weapon' }
    ]
  },
  joyeuse: {
    note: 'A composite object assembled over centuries of ceremonial use; the components are of markedly different dates.',
    rows: [
      { label: 'Earliest component', value: 'Pommel, 10th–11th century' },
      { label: 'Quillons', value: '12th century, cast as winged creatures' },
      { label: 'Grip and scabbard', value: 'Later medieval and early modern' },
      { label: 'Materials', value: 'Steel, gold, silver, gemstones' },
      { label: 'Collection', value: 'Musée du Louvre, Paris' },
      { label: 'Function', value: 'French coronation regalia' },
      { label: 'Last used', value: 'Coronation of Charles X, 1825' },
      { label: 'Attribution', value: 'Traditionally Charlemagne\'s; no part dates to his lifetime' }
    ]
  },
  'sutton-hoo-helmet': {
    note: 'Dating rests on a purse of Merovingian gold coins buried with the helmet; the shape is the product of reconstruction rather than direct observation.',
    rows: [
      { label: 'Date', value: 'Early 7th century, c. 620–625' },
      { label: 'Found', value: 'Mound 1, Sutton Hoo, Suffolk, 1939' },
      { label: 'Construction', value: 'Iron cap faced with tinned bronze panels' },
      { label: 'Decoration', value: 'Stamped figural and interlace panels; garnet-inlaid eyebrows' },
      { label: 'Condition', value: 'c. 500 fragments' },
      { label: 'Reconstructions', value: 'Two — 1940s, then 1970–71 under Nigel Williams' },
      { label: 'Collection', value: 'British Museum' },
      { label: 'Closest parallels', value: 'Vendel and Valsgärde helmets, eastern Sweden' }
    ]
  },
  'ulfberht-swords': {
    note: 'A corpus rather than one object; quality and construction vary widely across it, and a large proportion are imitations.',
    rows: [
      { label: 'Period', value: 'c. 9th–11th century' },
      { label: 'Known examples', value: 'c. 170' },
      { label: 'Blade length', value: 'c. 70–80 cm' },
      { label: 'Inscription', value: '+VLFBERH+T, in inlaid iron letters' },
      { label: 'Method', value: 'Letters forge-welded flush into the blade, not stamped' },
      { label: 'Origin', value: 'Frankish Rhineland workshop or lineage' },
      { label: 'Distribution', value: 'Ireland to the Rus\' lands' },
      { label: 'Caution', value: 'Many are misspelled contemporary counterfeits' }
    ]
  }
}

for (const [id, block] of Object.entries(specs)) {
  if (id === 'pike') continue // added with the article below
  get(id).specs = block
  console.log(`specs added: ${id}`)
}

// ---- 3. the pike article ------------------------------------------------------

const pike = {
  id: 'pike',
  name: 'Pike',
  type: 'weaponArmor',
  weaponArmorType: 'Weapon',
  aliases: ['long pike', 'Langspiess'],
  year: 1350,
  period: 'Late Middle Ages',
  region: 'Switzerland, Flanders and the Empire',
  material: 'Ash shaft with a small steel head and iron langets',
  battlefieldRole: 'Anti-cavalry infantry weapon fought in deep blocks',
  image: '/pike-ai.png',
  imageInfo: {
    caption: 'AI-generated illustration of a late-medieval European pike, shown complete: a small narrow head, long iron langets, and a plain ash shaft of about five metres.',
    creator: 'AI-generated for The Iron Codex',
    date: 'generated 2026',
    source: 'The Iron Codex (AI illustration)',
    sourceUrl: '',
    aiGenerated: true,
    note: 'Not a photograph of an object. It is used because no suitably licensed photograph of a complete pike could be sourced: the weapon is four to six metres long, and museums photograph the head rather than the whole thing — the Metropolitan Museum\'s entire pike series is head-only close-ups. It follows the Swiss and south German form of roughly 1450 to 1500 and is not evidence for any individual surviving weapon.'
  },
  specs: specs.pike,
  summary: 'The pike was an infantry spear of four to six metres, fought in deep blocks, and it took the battlefield back from heavy cavalry.',
  details: 'Its head is almost trivial and its shaft is the weapon. A block of pikemen presenting levelled points was something a mounted charge could not break, and the formation rather than the individual is the unit of analysis.',
  knownFor: [
    'A shaft of four to six metres carrying a head of barely thirty centimetres.',
    'Fought in deep blocks where the front ranks level their points and the rear ranks push.',
    'Flemish and Swiss infantry used it to beat heavy cavalry decisively from 1302 onward.',
    'Long iron langets riveted down the shaft to stop the head being cut off.'
  ],
  contentSections: [
    S('Overview',
      'The pike is an infantry spear made very long — four to six metres — and used in a deep block rather than by an individual. It is the weapon that ended three centuries of heavy cavalry dominance in Europe.',
      'Almost all of it is shaft. The head is small, narrow and unremarkable, and everything that makes a pike effective is a consequence of its length and of the formation it is used in.',
      'It is therefore the clearest case in the archive of a weapon that cannot be understood as an object. A single pike is nearly useless; ten thousand of them in disciplined blocks reshaped European warfare.'),
    S('Design and construction',
      'The shaft is ash, straight-grained and tapering slightly toward the butt, and it is the expensive part: a five-metre stave without a knot or a twist is a demanding piece of timber, and pike shafts were a traded commodity in their own right.',
      'The head is a small leaf or lozenge of steel, twenty to thirty centimetres, socketed onto the shaft. It needs to be no larger, because a pike kills by being driven with the weight of several ranks behind it rather than by the size of its point.',
      'Long iron langets — flat straps riveted down the sides of the shaft below the head, often seventy centimetres or more — stop an opponent simply cutting the head off with an axe or a halberd. A plain iron ferrule protects the butt, which is planted in the ground against a charge.'),
    S('Battlefield use',
      'Pikemen fight in a deep block, commonly several thousand strong. The front four or five ranks level their pikes so that a horse or a man approaching the formation meets four or five points at once; the ranks behind hold theirs upright and push.',
      'Against cavalry the effect is close to absolute. A horse will not run onto a hedge of points, and a charge that stops in front of a pike block is a stationary target for everything behind it.',
      'The block is not purely defensive. Swiss practice in particular used pike squares offensively, advancing at speed to shatter an opposing formation, with halberdiers stepping into the gaps to do the close killing where the pikes had done the pushing.'),
    S('Strengths and weaknesses',
      'Its strengths are reach, cost and the confidence it gives ordinary men. A militia that would break in the open will hold behind a hedge of pikes, and the weapon itself is a stave and a small piece of steel.',
      'Its weaknesses are flanks, missiles and broken ground. A pike block that is outflanked cannot turn quickly, it cannot answer archery or artillery at all, and rough terrain destroys the cohesion that makes it work — which is why pike formations were eventually paired with handgunners.',
      'The individual pikeman is also helpless once the block breaks. In a close melee a five-metre shaft is a liability, so pikemen carried a sword or a dagger for the moment their formation stopped existing.'),
    S('Historical development',
      'The long infantry spear is not new, but its systematic use in deep blocks is. Flemish militia beat French heavy cavalry at Courtrai in 1302 with long spears and pikes, a result that shocked Europe precisely because it should not have been possible.',
      'The Swiss developed it furthest through the fourteenth century, at Morgarten in 1315 and Sempach in 1386, and by the fifteenth their pike squares were the most feared infantry on the continent and the most sought-after mercenaries.',
      'The pike then outlasts the Middle Ages entirely. Combined with firearms into pike-and-shot, it remains standard European infantry equipment until the socket bayonet let a musketeer be his own pikeman around 1700.'),
    S('Regional variation',
      'Swiss practice is the reference. Swiss blocks were deep, aggressive and drilled, and their reputation was such that other powers hired them rather than trying to copy them.',
      'The German Landsknechts were raised in deliberate imitation from the 1480s and became the Swiss formations\' principal rivals, using very similar weapons and a similar tactical system.',
      'Flemish and Scottish traditions ran in parallel: Flemish militias used long spears and pikes from the early fourteenth century, and Scottish schiltrons at the Battle of Bannockburn in 1314 achieved a comparable result against English cavalry with a shorter spear and the same principle.'),
    S('Famous examples or users',
      'The Swiss cantons are the defining users, and the pike is inseparable from their emergence as a military and political force in the fourteenth and fifteenth centuries.',
      'Surviving medieval pikes are rare and rarely displayed complete, for the practical reason that a five-metre weapon is difficult to store and to exhibit — museum collections hold the heads, and the shafts are almost always gone.',
      'The Landeszeughaus in Graz holds the largest surviving arsenal of this kind of equipment, though its holdings are mostly later than the medieval period; earlier material is known chiefly from heads, from illustration and from written ordinances.'),
    S('Legacy',
      'The pike broke the military logic that had held since the eleventh century. Heavy cavalry had been decisive because nothing infantry could do reliably stopped a charge; a pike block did, cheaply, with men who were not aristocrats.',
      'It made infantry the centre of European armies again and kept it there, and the pike-and-shot formations that dominated the sixteenth and seventeenth centuries are its direct descendants.',
      'Its end was quiet. The socket bayonet did not defeat the pike; it absorbed it, by letting every musketeer fix a point to his own weapon and dispensing with the specialist entirely.')
  ],
  relatedEntries: {
    events: [
      { title: 'Battle of Bannockburn', type: 'event', slug: 'battle-of-bannockburn', label: 'Scottish schiltrons broke English cavalry on the same principle' }
    ],
    weaponsArmor: [
      { title: 'Spear', type: 'weaponArmor', slug: 'spear', label: 'The weapon it grew out of' },
      { title: 'Halberd', type: 'weaponArmor', slug: 'halberd', label: 'Fought alongside it in the same blocks' },
      { title: 'Lance', type: 'weaponArmor', slug: 'lance', label: 'The cavalry charge it was built to stop' },
      { title: 'Hand Cannon', type: 'weaponArmor', slug: 'hand-cannon', label: 'Paired with it into pike-and-shot' },
      { title: 'Plate Armor', type: 'weaponArmor', slug: 'plate-armor', label: 'Worn by the men-at-arms it faced' }
    ]
  },
  sources: [
    { title: 'Pike (weapon)', url: 'https://en.wikipedia.org/wiki/Pike_(weapon)', type: 'encyclopedia' },
    { title: 'Landeszeughaus, Graz — the Styrian Armoury', url: 'https://www.museum-joanneum.at/en/landeszeughaus', type: 'museum collection', institution: 'Universalmuseum Joanneum' },
    { title: 'Royal Armouries — polearms collection', url: 'https://royalarmouries.org/collection/', type: 'museum collection', institution: 'Royal Armouries' }
  ]
}

if (data.weaponsArmor.some((x) => x.id === 'pike')) throw new Error('pike already exists')
data.weaponsArmor.push(pike)
console.log(`+ pike ${pike.contentSections.length} sections, ${pike.contentSections.flatMap((s) => s.paragraphs).join(' ').length} chars`)

// Reciprocity for the pike.
for (const [id, entry] of Object.entries({
  spear: { label: 'The four-to-six-metre descendant that beat cavalry' },
  halberd: { label: 'Fought in the same blocks, doing the close killing' },
  lance: { label: 'The infantry answer that ended the couched charge' }
})) {
  ;(get(id).relatedEntries.weaponsArmor ??= []).push({ title: 'Pike', type: 'weaponArmor', slug: 'pike', ...entry })
  console.log(`  back-link ${id} -> pike`)
}

writeFileSync(dataPath, JSON.stringify(data, null, 2))
console.log(`\nweaponsArmor now ${data.weaponsArmor.length}; articles without specs: ${data.weaponsArmor.filter((a) => !a.specs).length}`)
