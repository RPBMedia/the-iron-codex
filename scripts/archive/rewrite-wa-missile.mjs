/**
 * M5 batch 6 — the two missile weapons rewritten to the documented standard.
 *
 * `war-bow` is the archive's umbrella article for powerful war bows generally and
 * was rewritten in an earlier batch; `longbow` is therefore written here as the
 * specifically Welsh and English weapon, leaning on the Mary Rose assemblage and
 * the English archery statutes rather than restating the general case.
 *
 * Only battles with articles are named (Crécy, Poitiers, Agincourt, Patay,
 * Castillon, Arsuf, Grunwald).
 */
import { readFileSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dataPath = path.join(__dirname, '../server/data/history.json')
const data = JSON.parse(readFileSync(dataPath, 'utf8'))
const S = (title, ...paragraphs) => ({ title, paragraphs })

const articles = {
  longbow: [
    S('Overview',
      'The longbow is the tall self bow of Wales and England, drawn to the ear and shot in volleys by massed archers. Between roughly 1300 and 1450 it gave English armies a capability no continental force could match.',
      'It is a simple object and a demanding one. A single stave of yew, a string, and an arrow — but the draw weights recovered from the Mary Rose run from about 100 to over 180 pounds, which is far beyond what an untrained man can manage at all.',
      'That is the weapon\'s real character. It required no expensive materials and a great deal of expensive time, which is the reverse of almost every other weapon in the archive and explains both its dominance and its disappearance.'),
    S('Design and construction',
      'The bow is a self bow — one piece of wood, not laminated — standing 1.8 to 2 metres, roughly the height of the archer. Yew was preferred above every other timber, and the best was imported from Spain, Italy and the Baltic because English yew grew too fast and too knotty.',
      'The stave is cut so that the pale, elastic sapwood lies along the back and the denser heartwood forms the belly. Sapwood resists stretching and heartwood resists compression, so the bow is a natural laminate made by careful selection rather than by glue.',
      'The cross-section is a rounded D, deep rather than wide, and the tips carry horn nocks to take the string without crushing the wood. There is no shaped handle: the archer grips the bare middle of the stave, and the whole bow bends through its length.'),
    S('Battlefield use',
      'It was shot in volleys at a formation, not aimed at individuals. Massed archers could put ten to twelve arrows a minute each into a target area at 180 to 230 metres, and the effect is a continuous fall of arrows rather than a series of shots.',
      'Its most consistent victims were horses. Unarmoured or lightly barded animals under sustained shooting become unmanageable, and a cavalry charge that arrives with half its horses down or bolting has already failed — which is a large part of what happened at the Battle of Crécy in 1346 and the Battle of Agincourt in 1415.',
      'English tactical practice paired archers with dismounted men-at-arms behind stakes or broken ground, so the enemy had to come through the arrows to reach a prepared line. The Battle of Poitiers in 1356 is the clearest demonstration of the combination working as designed.'),
    S('Strengths and weaknesses',
      'Its strengths are volume, range and cost. Nothing else in medieval Europe delivers that weight of missiles that fast, and the raw materials are a stave of wood and a hemp string.',
      'Its weakness is the archer. Drawing 150 pounds repeatedly takes years of conditioning begun in adolescence, and the skeletons of the Mary Rose crew show it plainly — thickened left forearms, enlarged shoulder joints and spinal adaptation from a lifetime of shooting.',
      'Claims that it reliably punched through good plate need careful qualification. Testing gives results that swing enormously with range, arrowhead, angle of strike and plate quality, and the honest position is that the longbow was devastating against horses, mail, textile and the badly equipped, and much less certain against a fifteenth-century harness.'),
    S('Historical development',
      'Powerful bows were used across Europe for centuries, and what changed in England was not the object but the institution: from the late thirteenth century the Crown built a system that produced archers in numbers.',
      'Edward III legislated for it directly, requiring practice at the butts on feast days and restricting the sports that competed with it, and the archery statutes were reissued by his successors for a century and a half.',
      'The system ends before the weapon does. At the Battle of Patay in 1429 the English archers were caught before their stakes were planted and were ridden down, and at the Battle of Castillon in 1453 French artillery in a fortified camp destroyed an English attack outright — the longbow had not become worse, it had been outmatched.'),
    S('Regional variation',
      'The weapon is Welsh in origin as an English military instrument. Its effectiveness was learned in the Welsh wars of the thirteenth century, and Welsh archers served in English armies throughout the following period.',
      'It never transferred abroad, and the reason is institutional rather than technical. No continental power built the training system, and by the time anyone might have tried, the crossbow and then the handgun offered comparable effect from men trained in weeks.',
      'The bows themselves vary little. What the Mary Rose showed is a remarkably consistent product — a standardised military weapon made in quantity to a known pattern, not a collection of individual craftsmen\'s bows.'),
    S('Famous examples or users',
      'The Mary Rose is the whole material record. When Henry VIII\'s warship was raised in 1982 she gave up 137 complete bows and around 3,500 arrows, and before that not a single intact medieval English war bow was known to survive.',
      'That assemblage settled arguments that had run for a century. The draw weights are far higher than nineteenth-century writers had assumed, the bows are longer, and the consistency of manufacture is greater — almost everything now said about the weapon rests on those objects.',
      'The archers themselves are the other famous users, and the chroniclers of the Hundred Years\' War name them collectively rather than individually — one of the few cases where a weapon\'s reputation belongs to a class of ordinary men rather than to a commander.'),
    S('Legacy',
      'The longbow became a national myth, and the myth has outgrown the evidence. It is credited with English victories in which dismounted men-at-arms, terrain, mud and French tactical error all did at least as much work.',
      'Its real lesson is about institutions. A cheap weapon that takes a decade to learn can only be fielded by a society organised to produce its users, and when that organisation lapsed the weapon lapsed with it, whatever its qualities.',
      'It was replaced by the handgun for exactly the reason it had once won: the gun was worse in almost every measurable way and could be handed to a man who had never used one, which in the end is the argument that decides how armies are equipped.')
  ],

  crossbow: [
    S('Overview',
      'The crossbow is a bow mounted crosswise on a stock, drawn and held by a mechanism so the shooter can aim at leisure and release with a trigger. It was in use across Europe throughout the Middle Ages and dominated missile warfare in most of it.',
      'Its decisive quality is that it separates strength from skill. The power comes from the spanning mechanism rather than the archer\'s back, so a man trained for days can shoot a weapon that would defeat a lifelong bowman drawing by hand.',
      'That made it the weapon of towns, garrisons and mercenary companies — anyone who needed effective missile troops without a generation to raise them.'),
    S('Design and construction',
      'The bow, called the prod or lath, is mounted across the front of a wooden stock called the tiller. Early prods are composite — layers of horn, sinew and wood glued together — and from the fourteenth century steel prods become standard.',
      'The string is held by a rotating nut of antler or bone set into the tiller, released by a trigger below. It is a simple and very robust mechanism, and it is what allows the weapon to be spanned, carried loaded and shot at a chosen moment.',
      'Draw weights range enormously, from perhaps 150 pounds on a light hunting weapon to 1,000 pounds and beyond on a heavy steel siege crossbow. Spanning devices scale with them: a belt hook and stirrup for light weapons, then the goat\'s-foot lever, the cranequin and the windlass for the heaviest.'),
    S('Battlefield use',
      'It came into its own in siege warfare, where a slow rate of shooting matters little and accuracy and penetration matter a great deal. Crossbowmen on walls and in siege lines are a constant of medieval warfare from the eleventh century onward.',
      'In the field crossbowmen usually worked behind a pavise, a large standing shield propped up to cover the shooter while he spanned his weapon — a necessary arrangement, since spanning leaves a man defenceless for several seconds.',
      'The Genoese crossbowmen at the Battle of Crécy in 1346 are the cautionary example. Sent forward exhausted, into rain that had slackened their strings, with their pavises still in the baggage train, they were broken by English archery and then ridden down by their own cavalry — a failure of command rather than of the weapon.'),
    S('Strengths and weaknesses',
      'Its strengths are penetration, accuracy and training time. A heavy crossbow delivers more energy than any hand bow, it can be aimed deliberately from a rest, and its user is competent in days rather than years.',
      'It can also be carried loaded, which no bow can. A crossbowman can climb a ladder, wait in ambush or hold a gate with the weapon spanned and ready, and that changes what missile troops can be asked to do.',
      'Its weakness is rate of shooting. One to two bolts a minute against a longbowman\'s ten to twelve is a fivefold disadvantage in volume, and heavy weapons needing a windlass are slower still. Composite prods also suffer badly in wet weather, as Crécy showed.'),
    S('Historical development',
      'It is known in the ancient world and reappears in Europe by the tenth century, spreading rapidly through the eleventh as siege warfare intensified and as towns needed defenders they could equip quickly.',
      'The Second Lateran Council of 1139 condemned its use against Christians, a prohibition often cited as evidence of how feared it was. Its practical effect was negligible: crossbows were used continuously against Christian enemies throughout the following centuries.',
      'Steel prods arrive in the fourteenth century and push draw weights and penetration far higher, and the weapon remains in service well into the sixteenth — outlasting the longbow, and giving way only to the handgun that worked on the same principle of trainability.'),
    S('Regional variation',
      'Genoese crossbowmen were the most sought-after mercenaries in Europe and served across the continent, to the point that "Genoese" functioned almost as a job description in fourteenth-century accounts.',
      'German and Bohemian workshops led on steel prods and on the cranequin, the geared spanning device that made the heaviest weapons usable in the field, and Central European armouries hold the finest surviving examples.',
      'Italian and Iberian forms tend toward lighter weapons for mounted and skirmishing use, and Mediterranean naval warfare relied heavily on crossbows, where a slow, accurate, penetrating weapon suited fighting from a deck.'),
    S('Famous examples or users',
      'Richard the Lionheart was killed by a crossbow bolt while besieging the castle of Châlus-Chabrol in 1199, dying of the resulting infection — the most famous single casualty the weapon ever caused, and a reminder of what it did to men in armour at close range.',
      'The Genoese are the defining professional users, and their reputation across two centuries makes the Crécy episode more instructive rather than less: the best missile troops in Europe were ruined by being committed badly.',
      'The Royal Armouries at Leeds, the Metropolitan Museum of Art and Swiss and German collections hold substantial numbers, including steel-prod weapons with cranequins and windlasses intact, which is unusual — the mechanisms usually go before the bows do.'),
    S('Legacy',
      'The crossbow established the principle that decided the future of missile warfare: a weapon that can be issued to a man trained in a week will beat a better weapon that takes ten years to learn.',
      'The handgun inherited that logic directly, and the transition from crossbow to arquebus is far smoother than the transition from bow to gun — same stock, same trigger, same tactical role, same kind of soldier.',
      'It survives as a hunting and target weapon, and the Lateran condemnation survives as a much-repeated story about a weapon so terrible the Church tried to ban it — which is a better anecdote than it is a description of what actually happened.')
  ]
}

let n = 0
for (const [id, sections] of Object.entries(articles)) {
  const entry = data.weaponsArmor.find((x) => x.id === id)
  if (!entry) throw new Error(`missing article: ${id}`)
  const before = (entry.contentSections ?? []).flatMap((s) => s.paragraphs ?? []).join(' ').length
  entry.contentSections = sections
  const after = sections.flatMap((s) => s.paragraphs).join(' ').length
  console.log(`${id.padEnd(10)} ${String(before).padStart(5)} -> ${String(after).padStart(5)} chars  (${sections.length} sections, ${sections.flatMap((s) => s.paragraphs).length} paragraphs)`)
  n++
}

writeFileSync(dataPath, JSON.stringify(data, null, 2))
console.log(`\n${n} missile-weapon articles rewritten; history.json written`)
