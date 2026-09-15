/**
 * Arquebus — the late-medieval transitional firearm.
 *
 * Checked before writing: no existing article, alias or id for arquebus,
 * harquebus, hackbut, hakenbüchse or matchlock anywhere in the archive. The term
 * already appears four times in existing Weapons & Armor prose with nowhere to
 * link, so the gap is real.
 *
 * Built on the Longsword structured model — specs, combatModes, timeline, two
 * comparison tables, survivingExamples, myths — because this subject rewards
 * scanning: most readers arrive wanting to know how it differed from the hand
 * cannon and from the musket, and both are tables rather than paragraphs.
 *
 * The dating discipline the owner asked for is the spine of the article: no
 * invention date, the five overlapping forms kept distinct, and the mature
 * matchlock explicitly NOT projected back onto 1453.
 */
import { readFileSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dataPath = path.join(__dirname, '../server/data/history.json')
const data = JSON.parse(readFileSync(dataPath, 'utf8'))
const S = (title, ...paragraphs) => ({ title, paragraphs })

if (data.weaponsArmor.some((x) => x.id === 'arquebus')) throw new Error('arquebus already exists')

const arquebus = {
  id: 'arquebus',
  name: 'Arquebus',
  type: 'weaponArmor',
  weaponArmorType: 'Weapon',
  aliases: ['harquebus', 'hackbut', 'hakenbüchse', 'haquebut', 'arcabuz'],
  year: 1470,
  period: 'Late Middle Ages',
  region: 'The Empire, Burgundy, Italy and Iberia',
  material: 'Iron or bronze barrel on a wooden stock, with an iron lock',
  battlefieldRole: 'Shoulder-fired infantry firearm',
  image: '/arquebus-ai.png',
  imageInfo: {
    caption: 'AI-generated illustration of a matchlock arquebus of the later fifteenth century, shown complete: shoulder stock, banded barrel, priming pan and serpentine.',
    creator: 'AI-generated for The Iron Codex',
    date: 'generated 2026',
    source: 'The Iron Codex (AI illustration)',
    sourceUrl: '',
    aiGenerated: true,
    note: 'Not a photograph of an object. It is used because no suitably licensed photograph of a complete fifteenth-century arquebus could be sourced; surviving examples of this date are rare, and museum photography of early firearms overwhelmingly shows detached barrels. It shows the MATURE form of roughly 1470 to 1500 — a weapon of this shape did not exist before about 1450, and the article is explicit that it must not be projected back onto 1453. It carries a serpentine and pan and deliberately no flintlock, wheel lock or sights.'
  },
  specs: {
    note: 'Approximate ranges for the later fifteenth century. Early firearms were made individually and vary enormously; where a figure is given as a range it is because the surviving material genuinely does not support anything tighter.',
    rows: [
      { label: 'Period', value: 'c. 1450–1500 (mature form later in that range)' },
      { label: 'Region', value: 'The Empire, Burgundy, Italy, Iberia' },
      { label: 'Overall length', value: 'c. 100–140 cm' },
      { label: 'Barrel length', value: 'c. 70–100 cm' },
      { label: 'Calibre', value: 'c. 15–20 mm' },
      { label: 'Weight', value: 'c. 4–6 kg' },
      { label: 'Ignition', value: 'Serpentine or early matchlock; slow match to a priming pan' },
      { label: 'Stock', value: 'Wooden, shaped to the shoulder or cheek' },
      { label: 'Ammunition', value: 'Cast lead ball' },
      { label: 'Effective range', value: 'c. 50–100 m against a formation' },
      { label: 'Rate of fire', value: 'Roughly one shot per minute' },
      { label: 'Role', value: 'Infantry firearm, in field and siege' }
    ]
  },
  summary: 'The arquebus was the first shoulder-fired firearm with a mechanical ignition, emerging gradually from the hand cannon during the fifteenth century.',
  details: 'A serpentine holding a burning match, brought to a priming pan by a lever, freed the shooter\'s hands and let him aim. It sits directly on the boundary between the medieval and early modern worlds.',
  knownFor: [
    'The first firearm a man could shoulder and aim with both hands on the weapon.',
    'The serpentine: a moving arm holding the burning match, brought to the pan by a lever.',
    'It emerged gradually across the fifteenth century — there is no invention date.',
    'The terms arquebus, hackbut and hakenbüchse overlap and are used inconsistently in period sources.'
  ],
  contentSections: [
    S('Overview',
      'The arquebus is the first firearm that a soldier could hold to his shoulder, aim along, and fire without taking a hand off the weapon. That single change — mechanical ignition — separates it from the hand cannon it grew out of.',
      'It emerged gradually through the fifteenth century rather than at a stroke. Stocks improved, the touch hole moved from the top of the barrel to the side, a small pan was added to hold priming powder, and a pivoting arm was fitted to bring a burning match down to it. The mature weapon is a late-fifteenth-century object.',
      'It belongs in a medieval archive because that whole sequence happens inside the Middle Ages, even though the weapon\'s great career comes afterwards. The arquebus is the last thing the medieval battlefield produced and the first thing the early modern one inherited.'),
    S('From hand cannon to arquebus',
      'The starting point is the hand cannon: a barrel on a stick, with the touch hole bored through the top, fired by touching a hot wire or a match to it by hand. The shooter cannot aim while doing that, and often needs a second man.',
      'Three changes fix it, and they arrive separately over decades. The stock is shaped so the weapon can be held to the shoulder or cheek rather than braced under the arm. The touch hole moves to the side of the barrel and gains a small pan to hold priming powder. And the match is fitted into a pivoting arm — the serpentine — so a lever brings it to the pan.',
      'The result is not a new invention but an accumulation. Any given surviving gun may have one, two or all three of these features, which is precisely why the terminology is so unstable and why no single date can be given for the arquebus appearing.'),
    S('The serpentine and the matchlock',
      'The serpentine is the whole breakthrough, and it is mechanically trivial: an S-shaped iron arm, pivoted on the side of the stock, with a clamp at the top holding a length of smouldering slow match.',
      'Pressing a lever underneath rotates the arm forward and down so the burning tip of the match dips into the priming pan. The priming powder flashes, the flash passes through the touch hole into the main charge, and the gun fires.',
      'What this buys is aim. Both hands stay on the weapon, both eyes stay on the target, and the shooter is no longer reaching across his own barrel with a piece of burning cord. Early forms are simply a lever and an arm; the developed matchlock adds a spring and a sear so the arm snaps rather than being pushed.'),
    S('Design and construction',
      'Barrels are forged iron or cast bronze depending on date and maker, generally 70 to 100 centimetres and smoothbore, of roughly 15 to 20 millimetres calibre. There is no standardisation: guns were made individually and bores vary within a single arsenal.',
      'The stock is wood, and its evolution is the visible history of the weapon. Early ones are barely more than a straightened tiller; later fifteenth-century stocks are shaped to sit against the shoulder or the cheek, which is what makes aiming possible at all.',
      'The barrel is held to the stock by iron bands or pins, and the lock — pan, serpentine, lever, and on later examples a spring and sear on a lock plate — is set into the right side of the stock. There is no rear sight, no trigger guard, and no safety of any kind; those all belong to later centuries.'),
    S('How it was fired',
      'Powder is measured into the muzzle, a lead ball follows, and both are rammed down onto the breech. A little fine powder goes into the pan beside the touch hole, and the pan cover — where one is fitted — is closed over it.',
      'The slow match, a length of cord soaked in saltpetre solution, is kept burning throughout. It is clamped into the serpentine, its tip blown to a bright coal, and the weapon is brought up.',
      'Pressing the lever swings the match into the pan. The priming flashes, fire passes through the touch hole, and the main charge fires. The whole cycle takes around a minute, and every step of it is vulnerable to rain, wind and a match that has gone out.'),
    S('Battlefield role',
      'It was an infantry weapon used from prepared positions and in formation, and its natural home in the fifteenth century is the siege and the fortified field position rather than the open manoeuvre battle.',
      'Its great tactical advantage over the crossbow and the bow is not performance but supply. A handgunner is useful within weeks, so an army can be expanded far faster than one depending on trained archers, and the same argument that had favoured the crossbow now told against it.',
      'It develops in step with the pike. Handgunners have no defence at all while reloading, so they need something to stand behind, and the pairing of shot with pike blocks that dominates the sixteenth century is already visible in Burgundian and Italian practice in the fifteenth.'),
    S('Limitations',
      'Rate of fire is the hard limit. Roughly one shot a minute against an archer\'s ten or twelve means a body of handgunners delivers a fraction of the missiles a body of archers would, and volume had to come from numbers.',
      'Accuracy against an individual is poor beyond fifty metres or so — a smoothbore firing a loose-fitting ball, aimed along a barrel with no rear sight. What it delivers reliably is a heavy ball into a formation, and penetration good enough to defeat armour that stopped an arrow.',
      'Weather and smoke are the other constraints. Rain puts out the match and spoils the priming, and a line of guns firing generates enough smoke to blind the men behind it — a practical problem that shaped how firearms were formed up for the next three centuries.'),
    S('Terminology',
      'The vocabulary is genuinely unstable and should not be tidied up. Arquebus, harquebus, hackbut, hakenbüchse, haquebut and arcabuz are used across regions and decades for weapons that are not always the same thing.',
      'The German hakenbüchse — "hook gun" — is the one term with a distinct technical meaning worth preserving. It refers to a gun with a hook under the barrel, hung over a wall or a pavise so the recoil goes into the parapet rather than the shooter, and that hook is a real feature rather than a naming variant. The English "hackbut" derives from it but is used much more loosely.',
      'Period documents also use the same word for weapons decades apart in sophistication. A fifteenth-century inventory listing arquebuses tells you the writer\'s vocabulary, not the mechanism, and identifying what a particular entry means usually requires evidence outside the word itself.'),
    S('Historical development',
      'Handheld gunpowder weapons are present in Europe from the first half of the fourteenth century and in ordinary military use by its end, but they are hand cannons: barrel, stick, hand-applied fire.',
      'Improvements accumulate through the early fifteenth century, and a serpentine appears in a German manuscript of around 1411 — early enough to show the idea existed, not early enough to show it was common. Transitional guns with shaped stocks and side touch holes spread across the middle of the century.',
      'By the last three decades of the fifteenth century the mature matchlock arquebus is recognisable, and Burgundian and Italian ordinances begin specifying handgunners as a fixed proportion of a company. Its expansion into the dominant infantry firearm belongs to the sixteenth century and to the campaigns that follow the medieval period.'),
    S('Constantinople, 1453 — a caution',
      'Handheld firearms were certainly present on both sides at the Fall of Constantinople. Ottoman and Byzantine forces both used gunpowder weapons, and contemporary accounts describe small arms alongside the great bombards that did the decisive work against the walls.',
      'What cannot be said is that these were arquebuses in the developed sense. The mature matchlock — shaped shoulder stock, side pan, sprung serpentine — is a weapon of the later fifteenth century, and projecting it back three or four decades onto the siege misrepresents both the technology and the date.',
      'The honest description is that portable firearms of some kind were in use at Constantinople, that they were most likely simple handguns or early transitional forms, and that the sources do not let us be more precise than that. The siege is remembered for artillery for good reason: it was the bombards, not the handguns, that decided it.'),
    S('Regional use',
      'The German lands led on the mechanism. Most of the earliest documented serpentine and matchlock arrangements are German or Bohemian, and the vocabulary that spread across Europe is largely German in origin.',
      'Burgundy organised it. Charles the Bold\'s military ordinances of the 1470s specify handgunners as a set proportion of each company, which is an early instance of firearms being treated as an establishment rather than a curiosity.',
      'Italy and Iberia carried it forward. Italian condottiere companies adopted handguns steadily through the later fifteenth century, and the Iberian kingdoms took the resulting weapon into the campaigns that closed the medieval period on the peninsula and then well beyond it.'),
    S('Legacy',
      'The arquebus ended the trained missile specialist as a category. The English archer and the Genoese crossbowman were both products of institutions built to produce them, and neither institution could justify its cost against a weapon that needed a fortnight.',
      'It did not make armour useless, and the common claim that it did is wrong by about two centuries. Breastplates were made thicker and proofed by being shot at, and armour retreated gradually to the torso and head rather than disappearing.',
      'Its direct line runs to the musket, the flintlock and everything after. What began as a barrel on a stick had, by 1500, become a shoulder weapon with a mechanical lock — the basic architecture of every firearm for the next four hundred years.')
  ],
  combatModes: [
    { title: 'From a wall or pavise', body: 'The natural fifteenth-century use. The gun rests on a parapet or a standing shield, which supports the weight and absorbs recoil, and the shooter is covered through the minute it takes to reload. The hook of a hakenbüchse exists for exactly this.' },
    { title: 'In the field, behind pikes', body: 'Handgunners are defenceless while loading, so they form up with pikemen who hold off cavalry while the shot reloads. The pairing is already visible in Burgundian and Italian practice and becomes the basis of sixteenth-century infantry.', highlight: true },
    { title: 'In a siege line', body: 'Slow, accurate, penetrating fire against defenders on a wall — the same tactical niche the crossbow had held, and the reason the two weapons served alongside each other for decades rather than one replacing the other overnight.' }
  ],
  timeline: [
    { date: 'c. 1330–1400', title: 'Hand cannon', description: 'A barrel on a wooden tiller, touch hole on top, fired by touching a hot wire or match to it by hand. No aiming.' },
    { date: 'c. 1400–1440', title: 'Improved handguns', description: 'Stocks are shaped for the body; the touch hole begins moving to the side of the barrel with a small pan beside it. A serpentine appears in a German manuscript of about 1411.' },
    { date: 'c. 1440–1470', title: 'Transitional forms', description: 'Guns combining a shoulder stock, side pan and a simple pivoting serpentine spread across the Empire and Burgundy. Terminology becomes thoroughly inconsistent.' },
    { date: 'c. 1470–1500', title: 'Mature matchlock arquebus', description: 'A sprung serpentine on a lock plate, a shaped shoulder stock and a pan cover. Burgundian ordinances specify handgunners as a fixed proportion of a company.' },
    { date: '16th century', title: 'Expansion and the musket', description: 'The arquebus becomes the standard infantry firearm, and the heavier musket appears alongside rather than replacing it.' }
  ],
  comparison: [
    {
      title: 'Arquebus vs. hand cannon',
      leftLabel: 'Arquebus',
      rightLabel: 'Hand cannon',
      rows: [
        { feature: 'Stock', left: 'Shaped wooden stock, held to shoulder or cheek', right: 'Straight wooden tiller, braced under the arm' },
        { feature: 'Touch hole', left: 'On the side, with a priming pan', right: 'On top of the barrel' },
        { feature: 'Ignition', left: 'Serpentine brings the match to the pan', right: 'Hot wire or match applied by hand' },
        { feature: 'Aiming', left: 'Both hands on the weapon; can be aimed', right: 'One hand occupied; effectively pointed' },
        { feature: 'Crew', left: 'One man', right: 'Often two' },
        { feature: 'Typical period', left: 'c. 1450–1500 onward', right: 'c. 1330–1450' }
      ]
    },
    {
      title: 'Arquebus vs. musket',
      leftLabel: 'Arquebus',
      rightLabel: 'Musket',
      rows: [
        { feature: 'Appears', left: 'Later 15th century', right: 'Mid-16th century' },
        { feature: 'Weight', left: 'c. 4–6 kg', right: 'c. 7–10 kg' },
        { feature: 'Calibre', left: 'c. 15–20 mm', right: 'c. 19–23 mm' },
        { feature: 'Rest', left: 'Fired unsupported', right: 'Early types often need a forked rest' },
        { feature: 'Purpose', left: 'General infantry firearm', right: 'Heavier ball to defeat proofed armour' },
        { feature: 'Relationship', left: 'Stayed in service alongside the musket for decades', right: 'Supplemented the arquebus rather than replacing it' }
      ]
    }
  ],
  myths: [
    { claim: 'Firearms swept away bows and crossbows immediately.', reality: 'They served side by side for the better part of a century. Crossbows remained in use into the sixteenth century, and the change was driven by training cost rather than by performance.' },
    { claim: 'Every fifteenth-century firearm was a matchlock.', reality: 'Most were not. Hand cannons fired by hand-applied match remained ordinary equipment throughout the century, and transitional forms with some features and not others are common.' },
    { claim: 'The arquebus was accurate at long range.', reality: 'A smoothbore firing a loose-fitting ball with no rear sight. Against an individual it is poor beyond about fifty metres; it was aimed at formations.' },
    { claim: 'Firearms made armour obsolete at once.', reality: 'Armour was made thicker and "proofed" by being shot at, and stayed in use for roughly two more centuries, gradually retreating to the torso and head.' },
    { claim: 'Arquebuses were a standard design.', reality: 'They were made individually. Calibre, length, lock and stock all vary widely, and no two guns from the same arsenal need match.' },
    { claim: 'The arquebus is an early modern weapon.', reality: 'Its whole development — stock, side pan, serpentine, matchlock — happens inside the fifteenth century. Its career is early modern; its birth is medieval.' }
  ],
  relatedEntries: {
    events: [
      { title: 'Fall of Constantinople', type: 'event', slug: 'fall-of-constantinople', label: 'Portable firearms present, but not the mature arquebus' },
      { title: 'Battle of Castillon', type: 'event', slug: 'battle-of-castillon', label: 'Gunpowder decided the battle that closed the Hundred Years\' War' }
    ],
    people: [
      { title: 'Mehmed II', type: 'person', slug: 'mehmed-ii', label: 'Commanded the gunpowder siege of 1453' }
    ],
    weaponsArmor: [
      { title: 'Hand Cannon', type: 'weaponArmor', slug: 'hand-cannon', label: 'The weapon it developed out of' },
      { title: 'Crossbow', type: 'weaponArmor', slug: 'crossbow', label: 'Served alongside it for decades before giving way' },
      { title: 'Longbow', type: 'weaponArmor', slug: 'longbow', label: 'The trained-specialist tradition it made unaffordable' },
      { title: 'Pike', type: 'weaponArmor', slug: 'pike', label: 'Protected handgunners while they reloaded' },
      { title: 'Plate Armor', type: 'weaponArmor', slug: 'plate-armor', label: 'Thickened and proofed in answer to it' },
      { title: 'Pavise', type: 'weaponArmor', slug: 'pavise', label: 'Cover to load behind, and a rest to fire from' }
    ]
  },
  sources: [
    { title: 'Royal Armouries — early firearms collection', url: 'https://royalarmouries.org/collection/', type: 'museum collection', institution: 'Royal Armouries' },
    { title: 'Metropolitan Museum of Art — Arms and Armor department', url: 'https://www.metmuseum.org/art/collection/search?department=4', type: 'museum collection', institution: 'Metropolitan Museum of Art' },
    { title: 'Kunsthistorisches Museum Wien — Hofjagd- und Rüstkammer', url: 'https://www.khm.at/en/visit/collections/hofjagd-und-ruestkammer/', type: 'museum collection', institution: 'Kunsthistorisches Museum' },
    { title: 'Deutsches Historisches Museum — collections', url: 'https://www.dhm.de/en/collections/', type: 'museum collection', institution: 'Deutsches Historisches Museum' },
    { title: 'Arquebus', url: 'https://en.wikipedia.org/wiki/Arquebus', type: 'encyclopedia' }
  ]
}

data.weaponsArmor.push(arquebus)
console.log(`+ arquebus: ${arquebus.contentSections.length} sections, ${arquebus.contentSections.flatMap((s) => s.paragraphs).join(' ').length} chars`)
console.log(`  specs ${arquebus.specs.rows.length} rows | ${arquebus.comparison.length} comparison tables | ${arquebus.myths.length} myths | timeline ${arquebus.timeline.length}`)

// Reciprocity.
const get = (id) => {
  const e = data.weaponsArmor.find((x) => x.id === id)
  if (!e) throw new Error(`missing: ${id}`)
  return e
}
for (const [id, label] of Object.entries({
  'hand-cannon': 'What it developed into once ignition became mechanical',
  crossbow: 'The firearm that finally displaced it',
  longbow: 'The firearm that made trained archery unaffordable',
  pike: 'Paired with it into pike-and-shot',
  pavise: 'Handgunners loaded behind it and fired across it'
})) {
  ;(get(id).relatedEntries.weaponsArmor ??= []).push({ title: 'Arquebus', type: 'weaponArmor', slug: 'arquebus', label })
  console.log(`  back-link ${id} -> arquebus`)
}

writeFileSync(dataPath, JSON.stringify(data, null, 2))
console.log(`\nweaponsArmor now ${data.weaponsArmor.length}`)
