/**
 * W&A upgrade — Longsword benchmark (prototype).
 * Rewrites the Longsword entry: sharper prose sections + new scannable structured
 * fields (specs, oakeshottTypes, combatModes, comparison, survivingExamples, myths,
 * timeline) rendered by the new W&A blocks in DetailPage.jsx. Idempotent.
 * Surviving-example figures are real Met Arms & Armor objects (verified).
 */
import fs from 'node:fs'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dataPath = path.join(__dirname, '../server/data/history.json')
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'))

const ls = data.weaponsArmor.find((w) => w.id === 'longsword')
if (!ls) throw new Error('longsword entry not found')

ls.summary = 'The longsword is a straight, double-edged European sword built for two hands, with a grip long enough for both fists and a blade usually a metre or more long. It rose from the great war swords of the 13th century, matured around 1350–1500 as plate armour spread, and became the central weapon of the written fencing traditions of Germany and Italy.'
ls.details = 'Unlike the one-handed arming sword carried with a shield, the longsword was gripped in two hands (hence "hand-and-a-half") and used with no shield, trading a free hand for reach, leverage, and techniques such as half-swording. It was the weapon of knights and men-at-arms on foot, and of the civilian fencing guilds whose fight-books preserve how it was actually used.'

ls.knownFor = [
  'The extended two-handed ("hand-and-a-half") grip that gave reach, leverage, and the option of half-swording.',
  'The core weapon of the surviving German (Liechtenauer) and Italian (Fiore dei Liberi) fencing traditions.',
  'Versatility across cutting and thrusting — from open Blossfechten to armoured Harnischfechten.',
  'Its strong association with late-medieval knights, men-at-arms, and civic fencing guilds.'
]

ls.imageInfo = {
  caption: 'A modern Albion reproduction of a late-medieval longsword, shown in full: the long two-handed grip, cruciform cross, and tapering double-edged blade.',
  creator: 'Albion Swords (modern reproduction); photograph, Wikimedia Commons',
  date: 'Modern reproduction of a c. 1400–1500 form',
  source: 'Wikimedia Commons',
  sourceUrl: 'https://commons.wikimedia.org/wiki/File:Albion_Mercenary_Medieval_Sword_2_(6092611904).jpg',
  note: 'A high-quality modern replica used to show the complete form; not an original medieval object.'
}

ls.specs = {
  note: 'Medieval swords varied by workshop, date, region, and purpose; these are typical ranges grounded in surviving museum examples, not fixed values.',
  rows: [
    { label: 'Period', value: 'c. 1250–1550' },
    { label: 'Peak use', value: 'Late 14th–15th century' },
    { label: 'Overall length', value: 'c. 100–130 cm' },
    { label: 'Blade length', value: 'c. 85–110 cm' },
    { label: 'Typical weight', value: 'c. 1.1–1.8 kg' },
    { label: 'Grip', value: 'Two-handed (hand-and-a-half)' },
    { label: 'Blade', value: 'Double-edged; broad cutting to acutely-tapered thrusting types' },
    { label: 'Primary actions', value: 'Cuts, thrusts, half-swording, pommel & cross strikes' },
    { label: 'Typical users', value: 'Knights, men-at-arms, fencing-guild members' },
    { label: 'Context', value: 'Foot sidearm; the weapon of judicial duels and civic fencing' }
  ]
}

ls.oakeshottTypes = {
  note: 'Ewart Oakeshott\'s 20th-century typology sorts medieval blades by geometry. Medieval warriors never used these numbers — they are a modern analytical tool.',
  diagram: {
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Oakeshott%20types.png',
    caption: 'Oakeshott\'s classification of medieval sword blades by form — the longsword families (types XIII, XV, XVII and XVIII) sit among them.'
  },
  rows: [
    { type: 'XIIIa', favors: 'Long, broad, near-parallel cutting blade — the earlier "war sword" (grans espées de guerre); powerful shearing cuts.' },
    { type: 'XVa', favors: 'Narrow, stiff, sharply tapered diamond section — thrust-oriented, for maille and armour gaps.' },
    { type: 'XVII', favors: 'Long, very stiff, hexagonal section — heavy thrusting against transitional and plate armour.' },
    { type: 'XVIIIb / XVIIIc', favors: 'Long grip with a still-cutting yet tapering blade — the versatile mature longsword balancing cut and thrust.' }
  ]
}

ls.combatModes = [
  { title: 'Unarmoured (Blossfechten)', body: 'Cuts, thrusts and parries flow from the bind of the blades; the fencer reads pressure (Fühlen) and winds (Winden) to a new opening, all while fighting for distance and the initiative (Vor and Nach). Close range collapses into grappling.' },
  { title: 'Armoured (Harnischfechten)', body: 'Ordinary cuts do little to good plate, so the fight becomes a struggle for the point: the sword is gripped in half-sword and driven into the gaps — visor, throat, armpit, inside of the elbow, palms and groin.' },
  { title: 'Half-swording', body: 'One hand stays on the hilt while the other grips the blade to steer the point with precision. Far from absurd, gripping the blade was a deliberate, taught technique — especially useful against an armoured opponent.', highlight: true },
  { title: 'Mordschlag (murder-stroke)', body: 'The blade is held in both hands and the sword swung like a short mace, striking with the heavy cross or pommel — a way to hurt an armoured man where the edge is useless.' },
  { title: 'Grappling (Ringen)', body: 'Longsword play routinely turned into wrestling: throws, arm-locks, disarms, takedowns and dagger finishes. Medieval martial training was integrated, not isolated to one weapon.' }
]

ls.comparison = {
  title: 'Longsword vs. arming sword',
  leftLabel: 'Longsword',
  rightLabel: 'Arming sword',
  rows: [
    { feature: 'Grip', left: 'Two-handed (hand-and-a-half)', right: 'One-handed' },
    { feature: 'Typical length', left: 'c. 100–130 cm', right: 'c. 90–100 cm' },
    { feature: 'Shield', left: 'Used without a shield', right: 'Usually paired with a shield' },
    { feature: 'Handling', left: 'Reach, leverage, half-swording', right: 'Speed with a free shield hand' },
    { feature: 'Peak period', left: 'Late 14th–15th c.', right: '11th–14th c. (persists later)' },
    { feature: 'Role', left: 'Primary weapon & fencing sword', right: 'Knightly sidearm' }
  ]
}

ls.survivingExamples = [
  { name: 'Hand-and-a-Half Sword', date: 'ca. 1400–1430', origin: 'probably German', overall: '124.8 cm', blade: '97.8 cm', weight: '1560 g', collection: 'Metropolitan Museum of Art, acc. 2006.564', sourceUrl: 'https://www.metmuseum.org/art/collection/search/27966' },
  { name: 'Hand-and-a-Half Sword', date: 'ca. 1500–1525', origin: 'German', overall: '127.6 cm', blade: '96 cm', weight: '1814 g', collection: 'Metropolitan Museum of Art, acc. 1988.26', sourceUrl: 'https://www.metmuseum.org/art/collection/search/27169' }
]

ls.myths = [
  { claim: 'Longswords weighed 4–6 kg.', reality: 'Surviving examples run about 1.1–1.8 kg; the Met\'s 15th-century sword weighs 1.56 kg.' },
  { claim: 'Medieval swords were crude, heavy clubs.', reality: 'They were precisely balanced cut-and-thrust tools, with distal taper and a tuned point of balance for quick handling.' },
  { claim: 'A sword edge could cut through plate armour.', reality: 'It could not. Against plate, fighters thrust into the gaps or struck with the pommel and cross.' },
  { claim: 'Half-swording would destroy your hands.', reality: 'Gripping the blade — with control, not a draw-cut, and often gloved — was a standard, illustrated technique.' },
  { claim: 'Every longsword was mainly a battlefield weapon.', reality: 'It was equally the weapon of the judicial duel and of the civilian fencing guilds that produced the fight-books.' },
  { claim: '"Longsword", "bastard sword" and "hand-and-a-half" are one exact category.', reality: 'They are overlapping later labels for related forms, not a single standardised medieval type.' }
]

ls.timeline = [
  { date: 'c. 1250–1300', title: 'War swords', description: 'Large "great swords" able to take a second hand (Oakeshott XIIIa) appear beside the one-handed arming sword.' },
  { date: 'c. 1300–1350', title: 'Hand-and-a-half forms', description: 'Longer grips let a knight add a second hand; transitional cut-and-thrust blades spread as maille gives way to plate.' },
  { date: 'c. 1350–1450', title: 'Mature longsword', description: 'Acutely tapering thrusting types (XV, XVII) answer plate armour; the German and Italian fencing traditions are written down.' },
  { date: 'c. 1450–1550', title: 'Fencing-guild weapon', description: 'As armoured foot combat wanes, the longsword thrives in judicial duels and civic fencing schools before the rapier eclipses it.' }
]

ls.contentSections = [
  { title: 'Overview', paragraphs: [
    'The longsword is a straight, double-edged European sword designed for two hands, with a grip long enough for both fists and a blade usually a little over a metre. It is distinct from the one-handed arming sword: where the arming sword was carried with a shield, the longsword gave up the shield for reach, leverage, and two-handed control.',
    'It emerged from the large war swords of the 13th century and matured between roughly 1350 and 1500, exactly as plate armour was replacing mail. That timing shaped it — the mature longsword had to both cut an unarmoured opponent and thrust into the gaps of a man in plate.',
    'It was the weapon of knights and men-at-arms fighting on foot, and, just as importantly, of the civilian fencing guilds of Germany and Italy. The fight-books those masters left behind make the longsword one of the best-understood weapons of the Middle Ages.'
  ]},
  { title: 'Names and classification', paragraphs: [
    '"Longsword" is chiefly a modern classification. Medieval writers used shifting terms in several languages — the German Langes Schwert, the French espée de guerre or grant espée — without a single fixed technical vocabulary.',
    '"Hand-and-a-half sword" describes the same physical idea: a grip that takes one hand comfortably and a second at need. "Bastard sword" is historically attested but was used loosely, and does not map neatly onto any one blade form.',
    'These labels overlap rather than divide cleanly, so they should not be treated as precise, interchangeable categories. They name a family of related two-handed swords, not a set of standardised types.'
  ]},
  { title: 'How it was used', paragraphs: [
    'Longsword fighting is preserved in unusual detail because fencing masters wrote and illustrated it. Their systems treat the sword as a lever and a probe, not a bludgeon: the fight is won by timing, leverage at the bind, and control of the opponent\'s point as much as by any single powerful blow.',
    'The same weapon was used very differently depending on whether the enemy was armoured. Open, unarmoured fencing (Blossfechten) relied on cuts, thrusts and the play of the blades; armoured fencing (Harnischfechten) abandoned most cuts for the thrust and the half-sword.',
    'Crucially, sword combat was never isolated from wrestling. A bind could become a throw, a disarm, or a dagger thrust, and the masters taught grappling as part of the same art. The cards below break down the main modes.'
  ]},
  { title: 'The fencing traditions', paragraphs: [
    'The German tradition descends from Johannes Liechtenauer, a 14th-century master whose teaching survives as a cryptic verse "Zettel" preserved and explained in later glosses and fight-books. Its core ideas — seizing the initiative (Vor), the master-cuts, winding at the bind, and feeling pressure through the blades — became the backbone of German longsword fencing.',
    'The Italian tradition is best known through Fiore dei Liberi, whose Fior di Battaglia (c. 1409) lays out an integrated art of wrestling, dagger, sword in one and two hands, armoured combat, poleaxe, and mounted fighting. Fiore shows the longsword as one part of a whole martial education, not a stand-alone skill.',
    'Together these traditions are why the longsword is so well understood today. They also anchor the weapon in a specific culture of trained fighters and fencing schools, well beyond the battlefield.'
  ]},
  { title: 'Historical development', paragraphs: [
    'The longsword did not appear suddenly, and plate armour did not simply "create" it. It grew out of the high-medieval knightly sword through a gradual lengthening of blade and grip during the 13th and early 14th centuries, when big "war swords" could already be gripped in two hands.',
    'As mail gave way to plate through the 14th century, blades diverged: some stayed broad for cutting, while stiff, sharply tapering forms developed for thrusting into armour. The mature hand-and-a-half sword of about 1350–1450 balanced these needs and coincided with the writing-down of the fencing systems.',
    'The timeline below traces that progression. It runs on into the later 15th and 16th centuries, when the longsword flourished in the fencing guilds even as its battlefield role declined.'
  ]},
  { title: 'Legacy', paragraphs: [
    'On the battlefield the longsword faded through the 16th century as massed pike and shot changed infantry warfare and lighter civilian swords took over personal defence. Its two-handed descendants, the great Zweihänder and montante, lingered as specialist weapons.',
    'Its deepest legacy is documentary. Because masters like Liechtenauer, Fiore and later Hans Talhoffer and Paulus Kal recorded their art, the longsword is the anchor of the modern revival of historical European martial arts, reconstructed directly from period manuals.',
    'That written record also corrects the popular picture. The medieval longsword of the sources is a fast, precise, versatile weapon used by trained fighters — not the clumsy heavy blade of later imagination.'
  ]}
]

ls.sources = [
  { title: 'Wikimedia Commons image record', author: 'Wikimedia Commons', type: 'image metadata', url: 'https://commons.wikimedia.org/wiki/File:Albion_Mercenary_Medieval_Sword_2_(6092611904).jpg' },
  { title: 'Hand-and-a-Half Sword (ca. 1400–1430), acc. 2006.564', author: 'Metropolitan Museum of Art, Arms and Armor', type: 'museum collection', url: 'https://www.metmuseum.org/art/collection/search/27966' },
  { title: 'Records of the Medieval Sword', author: 'Ewart Oakeshott (Boydell Press, 1991)', type: 'scholarship', url: 'https://boydellandbrewer.com/9780851155661/records-of-the-medieval-sword/' },
  { title: 'Johannes Liechtenauer & Fiore dei Liberi (glosses and treatises)', author: 'Wiktenauer (HEMA Alliance)', type: 'primary-source tradition', url: 'https://wiktenauer.com/wiki/Johannes_Liechtenauer' },
  { title: 'Longsword', author: 'Wikipedia', type: 'reference', url: 'https://en.wikipedia.org/wiki/Longsword' }
]

// Related entries — ensure >=5 meaningful links (weapons + the battle where it mattered).
ls.relatedEntries = {
  weaponsArmor: [
    { title: 'Arming Sword', type: 'weaponArmor', slug: 'arming-sword', label: 'The one-handed sword it grew from' },
    { title: 'Plate Armor', type: 'weaponArmor', slug: 'plate-armor', label: 'The armour that shaped its late form' },
    { title: 'Rondel Dagger', type: 'weaponArmor', slug: 'rondel-dagger', label: 'The armoured-combat sidearm it paired with' },
    { title: 'Poleaxe', type: 'weaponArmor', slug: 'poleaxe', label: 'The knight\'s other foot weapon against plate' },
    { title: 'Bascinet', type: 'weaponArmor', slug: 'bascinet', label: 'The helmet whose visor gap was a thrust target' }
  ],
  events: [
    { title: 'Battle of Agincourt', type: 'event', slug: 'battle-of-agincourt', label: 'Dismounted men-at-arms fought on foot here' }
  ]
}

fs.writeFileSync(dataPath, JSON.stringify(data, null, 2))
console.log('Longsword upgraded. contentSections:', ls.contentSections.length,
  '| specs:', ls.specs.rows.length, '| combatModes:', ls.combatModes.length,
  '| survivingExamples:', ls.survivingExamples.length, '| myths:', ls.myths.length)
