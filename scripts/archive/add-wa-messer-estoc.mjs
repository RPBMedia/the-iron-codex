/**
 * Tier 3 — messer and estoc.
 *
 * Both use owner-generated illustrations under the last-resort rule. Commons has
 * no Messer category at all and every hit is a blurry glass-fronted display case
 * with a dozen objects in it; for the estoc it holds a black-and-white archival
 * photograph of two swords, one badly corroded, and a file that turns out to be a
 * digital illustration rather than a photograph of an object.
 *
 * The flail is held back. The generated image came back as a one-handed spiked
 * ball on a chain, which the prompt explicitly excluded: that is the contested
 * form the article exists to put in context, and leading with it would assert
 * exactly what the article sets out to qualify.
 */
import { readFileSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dataPath = path.join(__dirname, '../server/data/history.json')
const data = JSON.parse(readFileSync(dataPath, 'utf8'))
const S = (title, ...paragraphs) => ({ title, paragraphs })

const articles = [
  {
    id: 'messer',
    name: 'Messer',
    type: 'weaponArmor',
    weaponArmorType: 'Weapon',
    aliases: ['langes Messer', 'grosses Messer', 'Kriegsmesser', 'long knife'],
    year: 1400,
    period: 'Late Middle Ages',
    region: 'The Holy Roman Empire, Bohemia and Hungary',
    material: 'Steel blade with wood or horn grip slabs riveted to a flat tang',
    battlefieldRole: 'Single-edged sidearm for townsmen, militia and soldiers',
    image: '/messer-ai.png',
    imageInfo: {
      caption: 'AI-generated illustration of a German langes Messer of the fifteenth century, showing the riveted slab hilt and the Nagel projecting from the guard.',
      creator: 'AI-generated for The Iron Codex',
      date: 'generated 2026',
      source: 'The Iron Codex (AI illustration)',
      sourceUrl: '',
      aiGenerated: true,
      note: 'Not a photograph of an object. It is used because no suitably licensed photograph of a complete Messer could be sourced: Wikimedia Commons has no category for the type, and the available images are glass-fronted display cases holding many objects at once. It follows the German form of about 1400 to 1500 and shows the two features that define it — a knife-style hilt of slabs riveted to a flat tang, and the Nagel.'
    },
    specs: {
      note: 'Typical ranges. Messers run from large knives to two-handed Kriegsmesser, and the category is broad.',
      rows: [
        { label: 'Period', value: 'c. 1350–1550' },
        { label: 'Region', value: 'German-speaking lands, Bohemia, Hungary' },
        { label: 'Blade length', value: 'c. 60–80 cm' },
        { label: 'Overall length', value: 'c. 80–100 cm' },
        { label: 'Weight', value: 'c. 0.8–1.2 kg' },
        { label: 'Blade', value: 'Single-edged, straight or slightly curved, clipped point' },
        { label: 'Hilt', value: 'Flat tang with riveted slabs — knife construction, no pommel cap' },
        { label: 'Guard', value: 'Straight cross with a Nagel on the right side' },
        { label: 'Role', value: 'Civilian sidearm and militia weapon' }
      ]
    },
    summary: 'The Messer is a single-edged German sword built like a knife: a flat tang with wooden slabs riveted to either side, and a stud called a Nagel guarding the hand.',
    details: 'It was the everyday sidearm of the German-speaking lands, carried by townsmen and soldiers alike, and it has the largest surviving medieval fencing manual devoted to any single weapon.',
    knownFor: [
      'Knife-style hilt construction — slabs riveted to a flat tang, with no pommel cap.',
      'The Nagel, a steel stud projecting from the guard to shield the knuckles.',
      'Johannes Lecküchner\'s treatise of 1482, the largest medieval fencing manual on one weapon.',
      'A civilian weapon as much as a military one, worn in towns across the Empire.'
    ],
    contentSections: [
      S('Overview',
        'A Messer is a single-edged sword of the German-speaking lands, and its defining feature is not the blade but the hilt: it is built like a knife, with a flat tang and two slabs of wood or horn riveted to either side of it.',
        'The name simply means "knife", and the larger forms are distinguished as langes Messer — long knife — or grosses Messer. Their size makes the label look odd, since a langes Messer is by any ordinary measure a sword.',
        'It was carried by townsmen, militia and soldiers across the Empire, Bohemia and Hungary from the fourteenth century into the sixteenth, and it is one of the most common weapons of late medieval Central Europe.'),
      S('Design and construction',
        'The blade is single-edged, generally sixty to eighty centimetres, straight or gently curved, and often widened toward a clipped point that puts mass where the cut lands.',
        'The hilt is the diagnostic feature. A sword\'s tang passes through the grip and is peened over a pommel; a Messer\'s tang is a flat plate with slabs riveted onto its faces, exactly like a large kitchen knife, and there is no pommel cap at all.',
        'From the right-hand side of the cross guard projects a Nagel — a short steel stud or nail shielding the knuckles from a blade running down the guard. Together the slab hilt and the Nagel identify a Messer at a glance and distinguish it from a falchion.'),
      S('Battlefield use',
        'It is a sidearm rather than a battlefield primary, worn at the hip in ordinary dress and drawn when needed — which in a late medieval town meant brawls and self-defence as often as war.',
        'In military use it served militia and infantry alongside the halberd and the crossbow, and larger two-handed forms, sometimes called Kriegsmesser, appear in the late fifteenth and sixteenth centuries in the hands of professional soldiers.',
        'Its civilian role is what generated the fencing literature. A weapon that ordinary men carried and might have to use was worth teaching, and the German masters taught it as a system in its own right rather than as a poor substitute for the longsword.'),
      S('Strengths and weaknesses',
        'Its strengths are cost and handiness. Knife construction is quicker and cheaper than a through-tang sword hilt, the single edge needs less steel, and the result is short, light and easy to wear all day.',
        'Its weakness is the same single edge. Half the possible attacks are unavailable compared with a double-edged blade, and the clipped point is a compromise rather than a good thrusting tip.',
        'The hilt construction is also structurally weaker than a peened tang under a very heavy blow, which is one reason the largest two-handed forms eventually adopted more sword-like assembly.'),
      S('Historical development',
        'It emerges in the fourteenth century out of the broader family of large single-edged knives and the falchion tradition, and by the fifteenth it is thoroughly established across Central Europe.',
        'A frequently repeated explanation is that Messers were built as knives to evade guild restrictions or civic laws on carrying swords. It is a neat story and it may contain something, but the documentary support is thin and it should be treated as a suggestion rather than an established fact.',
        'The type continues into the sixteenth century, growing into the two-handed Kriegsmesser at one end and shading into the dussack at the other, and it feeds directly into the later European single-edged hangers.'),
      S('Regional variation',
        'It is fundamentally a German-speaking phenomenon, with the densest evidence from the Empire, Bohemia and Hungary, and its vocabulary is German throughout.',
        'Hungarian and Bohemian forms show more curvature, plausibly through contact with the sabre traditions further east, while examples from the Rhineland and the south tend straighter.',
        'The falchion is the western parallel rather than the same weapon: comparable blades, quite different hilt construction, and the two should not be treated as one type under different names.'),
      S('Famous examples or users',
        'Johannes Lecküchner\'s treatise of 1482 is the outstanding source and one of the remarkable documents of medieval martial culture: a manual of well over four hundred illustrated techniques devoted entirely to the Messer.',
        'Nothing else in the medieval fencing corpus gives a single weapon that much attention, and its existence is the strongest evidence available for how widely the Messer was carried and how seriously it was taken.',
        'Surviving examples are held in German and Austrian collections and appear in the German fight books throughout the fifteenth century, generally in civilian dress rather than in armour.'),
      S('Legacy',
        'The Messer is the ancestor of the dussack and through it of the European single-edged training and duelling weapons of the sixteenth century.',
        'It also corrects an assumption about medieval arms: the characteristic weapon of a late medieval German town was not a knightly sword but a large single-edged knife, worn by people who were not soldiers.',
        'Its fencing literature is its most valuable legacy. Lecküchner\'s manual is a detailed record of how an ordinary weapon was actually used, which is exactly what the medieval record usually fails to preserve.')
    ],
    relatedEntries: {
      weaponsArmor: [
        { title: 'Falchion', type: 'weaponArmor', slug: 'falchion', label: 'The western parallel, differently hilted' },
        { title: 'Arming Sword', type: 'weaponArmor', slug: 'arming-sword', label: 'The sword it was an alternative to' },
        { title: 'Longsword', type: 'weaponArmor', slug: 'longsword', label: 'Taught by the same German masters' },
        { title: 'Seax', type: 'weaponArmor', slug: 'seax', label: 'The older single-edged tradition' },
        { title: 'Buckler', type: 'weaponArmor', slug: 'buckler', label: 'Carried with it in civilian fencing' }
      ]
    },
    sources: [
      { title: 'Germanisches Nationalmuseum — arms collection', url: 'https://www.gnm.de/', type: 'museum collection', institution: 'Germanisches Nationalmuseum' },
      { title: 'Kunsthistorisches Museum Wien — Hofjagd- und Rüstkammer', url: 'https://www.khm.at/en/visit/collections/hofjagd-und-ruestkammer/', type: 'museum collection', institution: 'Kunsthistorisches Museum' },
      { title: 'Wiktenauer — Johannes Lecküchner', url: 'https://wiktenauer.com/wiki/Johannes_Leck%C3%BCchner', type: 'scholarly resource' }
    ]
  },

  {
    id: 'estoc',
    name: 'Estoc',
    type: 'weaponArmor',
    weaponArmorType: 'Weapon',
    aliases: ['tuck', 'Panzerstecher', 'koncerz'],
    year: 1400,
    period: 'Late Middle Ages',
    region: 'France, the Holy Roman Empire and Central Europe',
    material: 'Steel',
    battlefieldRole: 'Edgeless thrusting sword for fighting armoured opponents',
    image: '/estoc-ai.png',
    imageInfo: {
      caption: 'AI-generated illustration of an estoc of the fifteenth century, showing the stiff edgeless blade of diamond section tapering to a needle point.',
      creator: 'AI-generated for The Iron Codex',
      date: 'generated 2026',
      source: 'The Iron Codex (AI illustration)',
      sourceUrl: '',
      aiGenerated: true,
      note: 'Not a photograph of an object. It is used because no suitably licensed photograph of a complete estoc could be sourced: Wikimedia Commons holds a black-and-white archival photograph of two swords, one badly corroded, and a digital illustration rather than a photograph of an object. It follows the Central European form of about 1400 to 1470 and deliberately shows no cutting edges and no fuller.'
    },
    specs: {
      note: 'Typical ranges for the fifteenth century; estocs vary between compact cavalry weapons and long two-handed forms.',
      rows: [
        { label: 'Period', value: 'c. 1350–1600' },
        { label: 'Region', value: 'France, the Holy Roman Empire, Poland and Hungary' },
        { label: 'Overall length', value: 'c. 110–140 cm' },
        { label: 'Blade length', value: 'c. 90–120 cm' },
        { label: 'Weight', value: 'c. 1.2–2 kg' },
        { label: 'Blade section', value: 'Square, diamond or triangular — no cutting edge' },
        { label: 'Grip', value: 'One-handed for cavalry, or hand-and-a-half' },
        { label: 'Role', value: 'Thrusting into the gaps of plate armour' }
      ]
    },
    summary: 'The estoc is a sword with no cutting edges: a stiff spike of square or diamond section, made to thrust into the gaps of plate armour.',
    details: 'It is the sword\'s answer to the same problem that produced the poleaxe and the rondel dagger. Where a cut achieves nothing against a harness, a rigid point driven into a joint achieves a great deal.',
    knownFor: [
      'No cutting edges at all — a stiff spike of square, diamond or triangular section.',
      'Built to thrust into the gaps of plate armour, where a cut is useless.',
      'Carried at the saddle by cavalry as a secondary weapon after the lance.',
      'Survives longest in Poland and Hungary as the koncerz, the hussar\'s thrusting sword.'
    ],
    contentSections: [
      S('Overview',
        'An estoc is a sword built for one purpose: to thrust through a gap in armour. It has no cutting edges. The blade is a rigid spike of square, diamond or triangular section, thick at the hilt and tapering to a needle point.',
        'It exists because of plate armour. Once a harness could turn any cut, the sword either found a way to defeat it or became irrelevant, and the estoc is the most literal answer available — a sword that gives up cutting entirely in exchange for a point stiff enough to be driven home.',
        'It is called the tuck in English and the Panzerstecher — "armour-stabber" — in German, and the German name describes the weapon better than either of the others.'),
      S('Design and construction',
        'The blade runs ninety to a hundred and twenty centimetres and is thick through its section rather than wide across it. A diamond or square cross-section resists bending in every direction, which is exactly what a thrust into steel requires.',
        'There is no fuller and no edge. The faces meet at ridges rather than at a sharpened edge, and a blade of this kind cannot cut at all — a fact that surprises people who assume every sword is a cutting weapon with a point attached.',
        'Hilts vary with the role. Cavalry versions are one-handed with a simple cross; infantry versions have a long grip for one and a half hands and often a ricasso, a blunt section above the guard, to be gripped in half-sword.'),
      S('Battlefield use',
        'On foot it is used in half-sword: one hand on the grip and one on the blade, the point steered into a visor, an armpit or the inside of an elbow. It is handled far more like a short spear than like a sword.',
        'Mounted, it is carried at the saddle as a secondary weapon and drawn after the lance is gone. Against an armoured opponent at close quarters a rigid point delivered with the horse behind it is the most effective thing a rider can offer.',
        'It belongs to the same tactical world as the poleaxe, the war hammer and the rondel dagger — the fifteenth-century family of weapons designed around the single problem of an opponent in a good harness.'),
      S('Strengths and weaknesses',
        'Its strength is rigidity. A well-made estoc will not flex when its point meets steel, so the full force of the thrust arrives at the tip rather than being lost in the blade bending aside.',
        'Its weakness is total specialisation. Against an unarmoured opponent it is much worse than an ordinary sword: it cannot cut, it cannot threaten on the draw, and every attack must be a thrust.',
        'It is also awkward to wear. Long, straight and rigid, an estoc does not hang well at the hip, which is a large part of why it is so often shown slung from the saddle instead.'),
      S('Historical development',
        'It appears in the fourteenth century as plate spreads, and the timing is the same as for the rondel dagger and the poleaxe — the weapon exists because the target changed.',
        'The fifteenth century is its European high point, when it is standard equipment for men-at-arms fighting both mounted and on foot across France, the Empire and Central Europe.',
        'In Western Europe it fades with the armour that justified it. In Poland and Hungary it does not: the koncerz remained hussar equipment into the seventeenth century, carried under the saddle flap long after Western cavalry had abandoned the type.'),
      S('Regional variation',
        'French and English usage — estoc, tuck — tends to describe the longer, hand-and-a-half infantry form used in half-sword.',
        'German practice gives the clearest name and some of the most developed examples, and the Panzerstecher is well represented in Central European collections.',
        'The Polish and Hungarian koncerz is the longest-lived branch: a very long, narrow cavalry thrusting sword carried by hussars, and the direct descendant of the medieval estoc.'),
      S('Famous examples or users',
        'Surviving estocs are held in the major arms collections — the Wallace Collection, the Metropolitan Museum of Art and the Kunsthistorisches Museum in Vienna among them — though the type is far less common in museums than cutting swords.',
        'The fifteenth-century fight books are the best evidence for its use, since the armoured-combat sections describe half-sword technique that an edgeless blade suits better than an edged one.',
        'A word of caution about identification: a narrow, acutely tapering ordinary sword is not an estoc. The distinguishing test is the absence of any cutting edge, which cannot be judged from a photograph taken at a distance.'),
      S('Legacy',
        'The estoc is the clearest illustration of how completely plate armour reshaped the sword. A weapon whose entire identity is cutting produced a version that cannot cut at all.',
        'Its influence on the thrust-centred swords of the sixteenth century is real but easily overstated: the rapier grows out of civilian side-swords and duelling rather than directly out of the armour-piercing estoc.',
        'Its clearest descendant is the koncerz, which carried the medieval logic into early modern cavalry warfare and outlived by two centuries the armour it was designed to defeat.')
    ],
    relatedEntries: {
      weaponsArmor: [
        { title: 'Plate Armor', type: 'weaponArmor', slug: 'plate-armor', label: 'The defence it was built to defeat' },
        { title: 'Longsword', type: 'weaponArmor', slug: 'longsword', label: 'Shares the half-sword technique' },
        { title: 'Rondel Dagger', type: 'weaponArmor', slug: 'rondel-dagger', label: 'The same idea at close quarters' },
        { title: 'Poleaxe', type: 'weaponArmor', slug: 'poleaxe', label: 'The other answer to a good harness' },
        { title: 'Arming Sword', type: 'weaponArmor', slug: 'arming-sword', label: 'The cutting sword it deliberately abandons' },
        { title: 'Lance', type: 'weaponArmor', slug: 'lance', label: 'Carried at the saddle as its successor in the charge' }
      ]
    },
    sources: [
      { title: 'Wallace Collection — European Armoury', url: 'https://www.wallacecollection.org/', type: 'museum collection', institution: 'Wallace Collection' },
      { title: 'Metropolitan Museum of Art — Arms and Armor department', url: 'https://www.metmuseum.org/art/collection/search?department=4', type: 'museum collection', institution: 'Metropolitan Museum of Art' },
      { title: 'Kunsthistorisches Museum Wien — Hofjagd- und Rüstkammer', url: 'https://www.khm.at/en/visit/collections/hofjagd-und-ruestkammer/', type: 'museum collection', institution: 'Kunsthistorisches Museum' }
    ]
  }
]

let n = 0
for (const article of articles) {
  if (data.weaponsArmor.some((x) => x.id === article.id)) throw new Error(`already exists: ${article.id}`)
  data.weaponsArmor.push(article)
  console.log(`+ ${article.id.padEnd(8)} ${article.contentSections.length} sections, ${article.contentSections.flatMap((s) => s.paragraphs).join(' ').length} chars`)
  n++
}

const get = (id) => {
  const e = data.weaponsArmor.find((x) => x.id === id)
  if (!e) throw new Error(`missing: ${id}`)
  return e
}
const backLinks = {
  falchion: [{ title: 'Messer', slug: 'messer', label: 'The German parallel, built like a knife' }],
  seax: [{ title: 'Messer', slug: 'messer', label: 'The later single-edged German tradition' }],
  'plate-armor': [{ title: 'Estoc', slug: 'estoc', label: 'The edgeless sword built to defeat it' }],
  'rondel-dagger': [{ title: 'Estoc', slug: 'estoc', label: 'The same idea at sword length' }],
  poleaxe: [{ title: 'Estoc', slug: 'estoc', label: 'The other answer to a good harness' }]
}
for (const [id, entries] of Object.entries(backLinks)) {
  ;(get(id).relatedEntries.weaponsArmor ??= []).push(...entries.map((e) => ({ ...e, type: 'weaponArmor' })))
  console.log(`  back-link ${id} -> ${entries.map((e) => e.slug).join(', ')}`)
}

writeFileSync(dataPath, JSON.stringify(data, null, 2))
console.log(`\n${n} articles added; weaponsArmor now ${data.weaponsArmor.length}`)
