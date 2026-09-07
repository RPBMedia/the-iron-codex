/**
 * Bec de corbin.
 *
 * The owner asked why there was no article, and the honest audit answer was "half
 * a miss": the poleaxe article already describes the hammer-and-beak head, and
 * war-hammer covers the beak, so it was covered IN SUBSTANCE — but a reader
 * searching "bec de corbin" found nothing, and landing on an article under a
 * different name is its own kind of wrong. That argument won.
 *
 * My hesitation was manufacturing a distinction the sources will not bear, since
 * medieval writers were not consistent about any of these names. The answer is to
 * put that problem INSIDE the article, in a terminology section, rather than to
 * refuse to write it. Aliases are added here and to the neighbouring articles so
 * every name in the cluster resolves somewhere sensible.
 */
import { readFileSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dataPath = path.join(__dirname, '../server/data/history.json')
const data = JSON.parse(readFileSync(dataPath, 'utf8'))
const S = (title, ...paragraphs) => ({ title, paragraphs })

if (data.weaponsArmor.some((x) => x.id === 'bec-de-corbin')) throw new Error('already exists')

const article = {
  id: 'bec-de-corbin',
  name: 'Bec de Corbin',
  type: 'weaponArmor',
  weaponArmorType: 'Weapon',
  aliases: ['bec de faucon', 'crow\'s beak', 'raven\'s beak', 'horseman\'s hammer', 'Lucerne hammer'],
  year: 1400,
  period: 'Late Middle Ages',
  region: 'France, Burgundy and the Holy Roman Empire',
  material: 'Steel head on an ash haft with iron langets',
  battlefieldRole: 'Anti-armour staff weapon combining hammer, beak and spike',
  image: '/bec-de-corbin-ai.png',
  imageInfo: {
    caption: 'AI-generated illustration of a bec de corbin: a hammer face, a long downward-curving beak and a top spike, on a langeted haft.',
    creator: 'AI-generated for The Iron Codex',
    date: 'generated 2026',
    source: 'The Iron Codex (AI illustration)',
    sourceUrl: '',
    aiGenerated: true,
    note: 'Not a photograph of an object. It is used because no suitably licensed photograph of a complete example could be sourced — museums photograph staff-weapon heads rather than whole weapons, the same problem that affects the poleaxe and the pike. It follows the French and Burgundian form of roughly 1400 to 1500 and deliberately carries a hammer face rather than an axe blade, which is what separates this head from a poleaxe.'
  },
  specs: {
    note: 'Typical ranges. Both a short horseman\'s form and a long foot-combat form exist, and the boundary with the poleaxe and the war hammer is a modern one.',
    rows: [
      { label: 'Period', value: 'c. 1380–1550' },
      { label: 'Region', value: 'France, Burgundy, the Holy Roman Empire, Switzerland' },
      { label: 'Overall length', value: 'c. 120–200 cm, depending on form' },
      { label: 'Head', value: 'Hammer face, rear beak, top spike' },
      { label: 'Beak', value: 'Long, curving downward to a point' },
      { label: 'Weight', value: 'c. 2–3 kg' },
      { label: 'Haft', value: 'Ash, with iron langets against a cutting blow' },
      { label: 'Role', value: 'Defeating plate armour in foot combat' }
    ]
  },
  summary: 'The bec de corbin is a staff weapon whose head carries a hammer face, a long downward-curving beak and a top spike — a poleaxe built around a hammer rather than an axe.',
  details: 'The name is French for "crow\'s beak", after the hooked rear spike that gives the weapon its character and most of its usefulness against armour.',
  knownFor: [
    'A long downward-curving rear beak — the "crow\'s beak" the weapon is named for.',
    'A hammer face rather than an axe blade, which is what separates it from a poleaxe.',
    'Built for one job: defeating a man in full plate harness.',
    'One of a cluster of overlapping names that medieval writers used inconsistently.'
  ],
  contentSections: [
    S('Overview',
      'The bec de corbin is a staff weapon of the later Middle Ages whose head combines three things: a hammer face on one side, a long beak curving downward on the other, and a spike rising from the top.',
      'The name is French — "crow\'s beak" — and it describes the rear spike, which is the feature the weapon is built around and the one that does most of its work.',
      'It belongs to the family that includes the poleaxe and the war hammer, and it exists for the same reason they do: by the fifteenth century a man in a good harness could not be cut, and something had to be done about him.'),
    S('Terminology — a warning',
      'This is one of the least stable names in the medieval armoury, and any tidy definition is a modern convenience rather than a medieval fact.',
      'Bec de corbin, bec de faucon, horseman\'s hammer, Lucerne hammer, war hammer and poleaxe all overlap. Period inventories use them loosely, the same object can appear under several, and the neat museum distinctions between them were largely drawn in the nineteenth and twentieth centuries.',
      'The usable modern convention, adopted here, is this: a head with a HAMMER face and a rear beak is a bec de corbin, while a head with an AXE blade and a rear spike is a poleaxe. It is a serviceable line, and it is not one a fifteenth-century armourer would have recognised as binding.'),
    S('Design and construction',
      'The head is forged as a unit and mounted on an ash haft, generally between about 1.2 and 2 metres depending on whether the weapon is meant for a horseman or for fighting on foot.',
      'The hammer face is small and often dished or serrated so it bites rather than skidding off a curved plate. Opposite it the beak runs out and curves down to a point, so that a pulling motion drives it in instead of letting it slide away.',
      'A spike on top allows the weapon to be used as a short spear, and iron langets run down the haft from the head — long straps riveted to the wood, so an opponent cannot simply cut the shaft in half. A butt ferrule finishes the other end.'),
    S('Battlefield use',
      'It is a weapon for fighting armoured men on foot, and it belongs to the same world as the poleaxe, the war hammer and the rondel dagger: the fifteenth-century contest between plate armour and the tools built to defeat it.',
      'Each part of the head has a job. The hammer delivers concussion through the plate, the beak concentrates enormous force on a point to punch through or to hook a limb, and the top spike keeps an opponent at distance and threatens the gaps.',
      'The hook is what makes it dangerous beyond simple impact. Catching a knee, an ankle, a helmet rim or a shoulder and pulling brings an armoured man down, and once he is on the ground the fight is effectively finished.'),
    S('Strengths and weaknesses',
      'Its strength is versatility against a single hard problem. Against a harness it offers concussion, puncture and a hook, and the wielder chooses in the moment according to what he can reach.',
      'Its weakness is specialisation. Against an unarmoured opponent it is slow, heavy and much worse than a sword, and it demands both hands and room to swing.',
      'Like every hooked weapon it also commits its user. A blow that misses takes time to recover, and against a faster opponent inside the head\'s reach the wielder is in trouble.'),
    S('Historical development',
      'It emerges in the later fourteenth century out of the war hammer and the long-hafted axe, at exactly the point when plate armour was becoming general and cutting weapons were losing their purchase.',
      'The fifteenth century is its period. It appears throughout the illustrated record in the hands of armoured men-at-arms fighting on foot, and in the judicial duel, where combat between two men in harness was the whole event.',
      'It persists into the sixteenth century and then fades with the harness that justified it, though the Swiss Lucerne hammer — a long-hafted relative with a multi-pronged beak — remained in infantry service somewhat longer.'),
    S('Regional variation',
      'The French and Burgundian tradition gives the weapon its name and its classic form, and the term is used most consistently in that context.',
      'The Swiss Lucerne hammer is the best-defined regional variant: long-hafted, with a hammer head whose face is drawn into several prongs, used by infantry in the pike formations rather than by individual men-at-arms.',
      'German practice tends to use hammer heads on poleaxe hafts without drawing a separate category at all, which is a large part of why the vocabulary is so tangled.'),
    S('Famous examples or users',
      'Surviving examples are held in the Wallace Collection, the Metropolitan Museum of Art, the Kunsthistorisches Museum in Vienna and the Swiss collections, generally catalogued under one or another of the overlapping names.',
      'The fifteenth-century fight books are the best evidence for use. Le Jeu de la Hache and the German armoured-combat material teach a system for the whole staff-weapon family, and the techniques transfer directly between an axe head and a hammer head.',
      'A caution when reading catalogues: a weapon labelled bec de corbin in one collection may be labelled a war hammer or a poleaxe in another, and the label often says more about the cataloguer than about the object.'),
    S('Legacy',
      'The bec de corbin is a good short answer to the question of what plate armour did to weapon design. It has no edge worth the name, and every part of it is aimed at a problem that did not exist two centuries earlier.',
      'It left no military descendants, because the problem disappeared with the armour, and the hooked hammer survives today only as a tool.',
      'Its clearest lesson is about vocabulary. A reader who wants to know what a medieval weapon "really was" will often find that the medieval writers were less interested in the distinction than the modern catalogue is.')
  ],
  comparison: {
    title: 'Bec de corbin vs. poleaxe',
    leftLabel: 'Bec de corbin',
    rightLabel: 'Poleaxe',
    rows: [
      { feature: 'Main head', left: 'Hammer face', right: 'Axe blade' },
      { feature: 'Rear', left: 'Long downward-curving beak', right: 'Spike or shorter beak' },
      { feature: 'Top', left: 'Spike', right: 'Spike' },
      { feature: 'Primary effect', left: 'Concussion and hooking', right: 'Cutting and hooking' },
      { feature: 'Haft', left: 'c. 120–200 cm, langeted', right: 'c. 150–200 cm, langeted' },
      { feature: 'How firm is the line?', left: 'A modern convention', right: 'The same modern convention' }
    ]
  },
  relatedEntries: {
    weaponsArmor: [
      { title: 'Poleaxe', type: 'weaponArmor', slug: 'poleaxe', label: 'The axe-headed member of the same family' },
      { title: 'War Hammer', type: 'weaponArmor', slug: 'war-hammer', label: 'The shorter one-handed relative' },
      { title: 'Plate Armor', type: 'weaponArmor', slug: 'plate-armor', label: 'The defence it exists to defeat' },
      { title: 'Rondel Dagger', type: 'weaponArmor', slug: 'rondel-dagger', label: 'What finished the man it brought down' },
      { title: 'Halberd', type: 'weaponArmor', slug: 'halberd', label: 'The infantry-formation cousin' },
      { title: 'Estoc', type: 'weaponArmor', slug: 'estoc', label: 'The sword built for the same problem' }
    ]
  },
  sources: [
    { title: 'Wallace Collection — European Armoury', url: 'https://www.wallacecollection.org/', type: 'museum collection', institution: 'Wallace Collection' },
    { title: 'Metropolitan Museum of Art — Arms and Armor department', url: 'https://www.metmuseum.org/art/collection/search?department=4', type: 'museum collection', institution: 'Metropolitan Museum of Art' },
    { title: 'Royal Armouries — polearms collection', url: 'https://royalarmouries.org/collection/', type: 'museum collection', institution: 'Royal Armouries' }
  ]
}

data.weaponsArmor.push(article)
console.log(`+ bec-de-corbin: ${article.contentSections.length} sections, ${article.contentSections.flatMap((s) => s.paragraphs).join(' ').length} chars`)

const get = (id) => {
  const e = data.weaponsArmor.find((x) => x.id === id)
  if (!e) throw new Error(`missing: ${id}`)
  return e
}

// Reciprocal links.
for (const [id, label] of Object.entries({
  poleaxe: 'The hammer-headed member of the same family',
  'war-hammer': 'The long-hafted form of the same idea',
  halberd: 'The hammer-and-beak relative used by men-at-arms',
  estoc: 'The staff weapon built for the same problem'
})) {
  ;(get(id).relatedEntries.weaponsArmor ??= []).push({
    title: 'Bec de Corbin', type: 'weaponArmor', slug: 'bec-de-corbin', label
  })
  console.log(`  back-link ${id} -> bec-de-corbin`)
}

// Aliases so every name in this tangled cluster lands somewhere sensible rather
// than returning nothing.
const aliasAdds = {
  poleaxe: ['pollaxe', 'hache'],
  'war-hammer': ['horseman\'s pick', 'martel-de-fer']
}
for (const [id, extra] of Object.entries(aliasAdds)) {
  const entry = get(id)
  entry.aliases = [...new Set([...(entry.aliases ?? []), ...extra])]
  console.log(`  aliases ${id} += ${extra.join(', ')}`)
}

writeFileSync(dataPath, JSON.stringify(data, null, 2))
console.log(`\nweaponsArmor now ${data.weaponsArmor.length}`)
