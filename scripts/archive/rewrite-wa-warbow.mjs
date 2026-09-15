/**
 * M5 follow-up — `war-bow`, the last article below the standard.
 *
 * The depth validator caught it: six sections of two paragraphs each and no
 * strengths-and-weaknesses treatment at all. Its total length passed the crude
 * character test, which is exactly the blind spot the new validator closes.
 *
 * war-bow is the archive's UMBRELLA article for powerful military bows. The
 * English self bow has its own article, so this one is written around the thing
 * the category exists to say: that the self bow and the composite bow are
 * different machines, and that the anglocentric picture of medieval archery
 * leaves out the tradition that did the most damage to European armies.
 *
 * Battles named all have articles: Arsuf, Legnica, Mohi, Nicopolis, Varna,
 * Grunwald, Crécy, Agincourt.
 */
import { readFileSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dataPath = path.join(__dirname, '../server/data/history.json')
const data = JSON.parse(readFileSync(dataPath, 'utf8'))
const S = (title, ...paragraphs) => ({ title, paragraphs })

const sections = [
  S('Overview',
    'War bow is the umbrella term for the powerful military bows used across medieval Eurasia — the English and Welsh self bow among them, but also the composite bows of the steppe, the Ottoman world, Hungary and the Rus\' lands.',
    'The category exists to prevent two opposite mistakes. One is treating the English longbow as though it were the only serious military bow in the Middle Ages; the other is treating every medieval bow as interchangeable, when the two main families are built on completely different principles.',
    'What unites them is a threshold rather than a shape. A war bow is one heavy enough to be dangerous to armoured men and horses at battlefield ranges, which in practice means draw weights from roughly 80 pounds upward and, at the extremes, well past 150.'),
  S('Design and construction',
    'The self bow is a single stave of wood — yew above all, and elm or ash where yew was unavailable — shaped so that the wood\'s own layers do the work. It must be long, roughly the height of the archer, because a short piece of wood bent that far simply breaks.',
    'The composite bow is a manufactured object: a wooden core with horn glued along the belly and sinew laid along the back, bound with hide glue and left to cure for months or years. Horn resists compression and sinew resists stretching far better than wood does either, so the bow stores much more energy for its length.',
    'That difference decides everything else. A composite bow of a metre or less can match a self bow of nearly two, which is why every horse-archery tradition in the world uses composites — a two-metre stave cannot be shot from a saddle.'),
  S('Battlefield use',
    'The self-bow traditions shot in massed volleys from a static line, with archers concentrated in bodies and their shooting treated as an area effect. It is a tactic that requires formed infantry and prepared ground.',
    'The composite traditions used the bow mounted and mobile. Steppe and Turkish horse archers shot on the move, harassed at range, withdrew before contact and shot backwards while retreating, and the aim was to exhaust and disorder an enemy over hours rather than to break him in one exchange.',
    'European armies met the second kind repeatedly and rarely handled it well. Crusader forces were shot at for a full day\'s march before the Battle of Arsuf in 1191, and the Mongol armies that destroyed the Polish and Hungarian forces at the Battle of Legnica and the Battle of Mohi in 1241 did so with horse archery as the core of their method.'),
  S('Strengths and weaknesses',
    'Every war bow shares one great strength: it delivers lethal force at a distance, cheaply, from a weapon that a society can produce in quantity. Nothing else in medieval warfare kills at two hundred metres.',
    'They also share one great cost. Shooting a heavy bow accurately and repeatedly takes years of physical conditioning begun young, so a war-bow tradition is a social institution rather than an equipment choice, and it collapses when the institution does.',
    'Their weaknesses diverge. Self bows are relatively robust in bad weather but bulky and useless mounted; composites are compact and powerful but their hide glue is badly affected by damp, and prolonged rain or humidity can slacken a composite bow into uselessness — a real tactical vulnerability in northern and western Europe.'),
  S('Historical development',
    'Both families are far older than the Middle Ages, and the medieval period is a story of specialisation rather than invention. The composite bow is ancient in the Near East and on the steppe; the heavy self bow is ancient in northern Europe.',
    'The high medieval centuries see both pushed to their limits. Draw weights climb as armour improves, and the arms race is visible in the arrowheads: narrow bodkin points appear specifically to concentrate force against mail and plate.',
    'Both decline for the same reason and at roughly the same time. The handgun did not shoot further, faster or more accurately than a war bow, but it could be handed to a recruit trained in a fortnight, and no bow tradition could survive that comparison.'),
  S('Regional variation',
    'The English and Welsh tradition is the best-documented self-bow culture in Europe, sustained by legislation and practice requirements, and it produced the archery that shaped the Battle of Crécy in 1346 and the Battle of Agincourt in 1415.',
    'The steppe tradition — Mongol, Cuman, Tatar — is the most militarily consequential across Eurasia as a whole, and it reached deep into Europe: Tatar horse archers fought on the Polish-Lithuanian side at the Battle of Grunwald in 1410, more than a century after the Mongol invasions.',
    'The Ottoman tradition produced the most refined composite bows ever made, with extreme recurve and exceptional cast, and Ottoman archery was central to the defeats inflicted on crusading armies at the Battle of Nicopolis in 1396 and the Battle of Varna in 1444.'),
  S('Famous examples or users',
    'The Mary Rose assemblage, raised in 1982, is the only substantial body of surviving medieval European war bows, and effectively everything now known about English draw weights and construction comes from it.',
    'For the composite traditions almost nothing medieval survives, because horn, sinew and hide glue decay completely. What is known comes from later Ottoman and Central Asian bows, from depictions, and from the written archery manuals of the Ottoman and Arabic traditions.',
    'That imbalance in survival should be kept in mind whenever the two families are compared. One tradition left 137 bows in a shipwreck and the other left almost nothing, and the resulting literature is skewed accordingly.'),
  S('Legacy',
    'The war bow as a category is a corrective. Medieval archery is usually told as an English story, and the tradition that inflicted the heaviest defeats on European armies was the one they faced rather than the one they fielded.',
    'It also shows how completely a weapon can depend on the society behind it. Neither family was superseded by something that outperformed it; both ended because the institutions that produced skilled archers were more expensive than the alternative.',
    'What survived is the sport. Archery outlived its military role in every tradition that had one, and the technical knowledge preserved in Ottoman and English target shooting is a substantial part of how the medieval weapons are now understood.')
]

const entry = data.weaponsArmor.find((x) => x.id === 'war-bow')
if (!entry) throw new Error('war-bow article not found')
const before = (entry.contentSections ?? []).flatMap((s) => s.paragraphs ?? []).join(' ').length
entry.contentSections = sections
const after = sections.flatMap((s) => s.paragraphs).join(' ').length
console.log(`war-bow ${before} -> ${after} chars (${sections.length} sections, ${sections.flatMap((s) => s.paragraphs).length} paragraphs)`)

writeFileSync(dataPath, JSON.stringify(data, null, 2))
