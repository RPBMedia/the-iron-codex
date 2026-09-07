/**
 * Tier 3, final article — the military flail.
 *
 * This one needed two attempts at the image. The first came back as a one-handed
 * spiked ball on a chain, which the prompt had excluded: that is the contested
 * form, and leading with it would have asserted exactly what the article sets out
 * to qualify. The second, used here, shows the two-handed peasant-derived flail —
 * two wooden arms joined by chain links — which is the well-attested weapon.
 *
 * The article is as much a myth-correction as a description, and the correction is
 * pitched carefully: the ball-and-chain is not claimed never to have existed, only
 * that it is far rarer than popular culture suggests and that its museum record is
 * badly contaminated by nineteenth-century romantic fabrications.
 */
import { readFileSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dataPath = path.join(__dirname, '../server/data/history.json')
const data = JSON.parse(readFileSync(dataPath, 'utf8'))
const S = (title, ...paragraphs) => ({ title, paragraphs })

if (data.weaponsArmor.some((x) => x.id === 'military-flail')) throw new Error('already exists')

const article = {
  id: 'military-flail',
  name: 'Military Flail',
  type: 'weaponArmor',
  weaponArmorType: 'Weapon',
  aliases: ['war flail', 'Kriegsflegel', 'cep', 'threshing flail'],
  year: 1420,
  period: 'Late Middle Ages',
  region: 'Bohemia, the Holy Roman Empire and Central Europe',
  material: 'Two wooden arms joined by iron chain, the striking arm banded and studded',
  battlefieldRole: 'Infantry weapon of peasant armies, above all the Hussites',
  image: '/flail-ai.png',
  imageInfo: {
    caption: 'AI-generated illustration of a two-handed military flail of the Hussite type: a long wooden haft and a short banded striking arm joined by iron chain links.',
    creator: 'AI-generated for The Iron Codex',
    date: 'generated 2026',
    source: 'The Iron Codex (AI illustration)',
    sourceUrl: '',
    aiGenerated: true,
    note: 'Not a photograph of an object. It is used because no suitably licensed photograph of a medieval European military flail could be sourced. It shows the two-handed form derived from the agricultural threshing flail, which is the well-attested weapon, rather than the one-handed spiked ball on a chain — see the myths section on why that distinction matters.'
  },
  specs: {
    note: 'Figures reflect the two-handed Hussite-type flail, which is the securely attested European military form.',
    rows: [
      { label: 'Period', value: 'c. 1400–1500 as a military weapon' },
      { label: 'Region', value: 'Bohemia, the Holy Roman Empire, Central Europe' },
      { label: 'Haft length', value: 'c. 120–140 cm' },
      { label: 'Striking arm', value: 'c. 40–50 cm of banded, studded hardwood' },
      { label: 'Joint', value: 'Two or three iron chain links, or a leather strap' },
      { label: 'Weight', value: 'c. 2–3 kg' },
      { label: 'Grip', value: 'Two-handed' },
      { label: 'Origin', value: 'The agricultural threshing flail, militarised' },
      { label: 'Role', value: 'Infantry weapon, above all in the Hussite wars' }
    ]
  },
  summary: 'The military flail is a threshing tool turned into a weapon: a long wooden haft and a short banded striking arm joined by a few links of chain.',
  details: 'It is the characteristic weapon of the Hussite armies of the 1420s, who took a farm implement every Bohemian village owned and used it to beat crusading forces sent against them.',
  knownFor: [
    'A militarised threshing flail — two wooden arms joined by chain, not a ball on a chain.',
    'The signature weapon of the Hussite armies of the 1420s and 1430s.',
    'The hinged joint lets the head keep travelling after the haft has stopped.',
    'The one-handed spiked ball everyone pictures is far rarer than popular culture suggests.'
  ],
  contentSections: [
    S('Overview',
      'A military flail is an agricultural threshing flail made for war. The farm tool is two wooden arms joined by a short flexible link: a long handle, and a shorter beater swung against grain to knock the seed loose.',
      'The military version keeps that construction and hardens the beater with iron bands and studs. Nothing else changes, which is the point — a weapon that every village already owned in unmilitarised form could be raised in enormous numbers overnight.',
      'It is above all a Bohemian weapon, and it belongs to the Hussite wars of the 1420s and 1430s, where peasant armies used it against the armoured crusading forces sent to destroy them.'),
    S('Design and construction',
      'The haft is a straight wooden pole of about 120 to 140 centimetres, held in both hands, usually with an iron ferrule at each end to stop the wood splitting.',
      'The striking arm is a shorter piece of hardwood, forty to fifty centimetres, ringed with iron bands and set with short spikes or studs. It is a wooden club faced with iron, not a metal head.',
      'The two are joined by two or three heavy iron chain links, or on simpler examples by a leather strap. That joint is the entire weapon: it is what separates a flail from a club, and everything the weapon does well and badly follows from it.'),
    S('Battlefield use',
      'The hinged joint means the head keeps travelling after the haft has stopped. A blow can therefore whip over the top of a raised shield or around the side of a parry and still arrive with full force, which no rigid weapon can do.',
      'It was used in mass by formed infantry rather than by individuals, which suits both its origins and its hazards — a line of men swinging flails together is formidable, while a single flail-man is at a serious disadvantage.',
      'The Hussite armies under Jan Žižka built a system around exactly this: war wagons drawn into a fortified circle, handgunners and crossbowmen shooting from behind the timber, and flails and polearms to meet whatever reached the wagons. That combination repeatedly broke heavy cavalry.'),
    S('Strengths and weaknesses',
      'Its strengths are cost and reach past a defence. It required no armourer and no purchase — the tool already existed in every barn — and its hinged head is genuinely difficult to block, since stopping the haft does not stop the head.',
      'Its weakness is control. A weapon whose business end is on the end of a chain cannot be recovered quickly, cannot be used to parry at all, and is dangerous to the men on either side of the wielder.',
      'It also needs room to swing. In a press it is useless, and its user has no defensive option whatever once the blow is committed, which is why it belongs in a formation with other weapons rather than alone.'),
    S('Historical development',
      'The threshing flail is ancient and universal wherever grain is grown, and improvised military use is presumably as old as peasant levies. What is new in the fifteenth century is its deliberate manufacture as a weapon.',
      'The Hussite wars are the moment it becomes a serious military instrument. Bohemian peasant armies from the 1420s used it systematically, and Hussite manuscripts and later illustrations show it alongside handguns and polearms in wagon-fort warfare.',
      'It persists in Central and Eastern Europe through the fifteenth century and beyond, gradually giving way as infantry equipment standardised around pike and shot, and it never becomes standard in Western European armies at all.'),
    S('Regional variation',
      'The Bohemian cep is the definitive form and the one the Hussites made famous, and the Czech vocabulary for it is agricultural rather than military.',
      'German-speaking lands use Kriegsflegel — war flail — and produced comparable weapons, and the type is well represented in Central European armouries and manuscripts.',
      'Western Europe largely did not adopt it. Its association with peasant armies is part of the reason: it is a weapon of the levy and the religious insurgency rather than of the man-at-arms, and it carried that social meaning with it.'),
    S('Famous examples or users',
      'Jan Žižka and the Hussite armies are the defining users. Blind for the latter part of his career, Žižka built a tactical system around wagons, gunpowder and cheap infantry weapons, and was not defeated in the field.',
      'Hussite illustration is the best evidence for the weapon, showing flails carried alongside handguns and polearms by men in ordinary clothing rather than harness.',
      'Surviving examples are held in Czech, Austrian and German collections, though identifying a genuine fifteenth-century military flail is harder than it looks, since the agricultural version continued unchanged for centuries afterwards.'),
    S('Legacy',
      'The military flail is the clearest case in the archive of a weapon that is a tool with iron added, and of what a well-organised peasant army could achieve against armoured professionals.',
      'It left almost no descendants, because its one real advantage — reaching past a guard — was bought at a price in control that no later infantry weapon was willing to pay.',
      'Its afterlife is entirely cultural. The flail is one of the most recognisable medieval weapons in popular imagination, and almost everything popularly believed about it describes a different object from the one the Hussites actually carried.')
  ],
  myths: [
    { claim: 'The medieval flail was a one-handed spiked ball on a chain.', reality: 'The securely attested European military flail is two-handed and derived from the threshing flail — two wooden arms joined by chain. One-handed ball-and-chain weapons do appear in some late medieval and early modern contexts, but they are far rarer than popular culture suggests, and a large proportion of museum examples are now regarded as nineteenth-century romantic fabrications.' },
    { claim: 'Flails were standard knightly equipment.', reality: 'It is a weapon of peasant levies and religious insurgents, above all the Hussites, and carried that social meaning. Men-at-arms used the poleaxe, the war hammer and the mace.' },
    { claim: 'A flail was a superior weapon because it could get around shields.', reality: 'It can, and that is its real advantage. It is bought at the cost of any ability to parry, slow recovery, danger to neighbouring men, and uselessness in a press.' },
    { claim: 'A peasant weapon meant an ineffective army.', reality: 'Hussite armies armed largely with flails, polearms and handguns behind war wagons defeated successive crusades sent against them.' }
  ],
  relatedEntries: {
    weaponsArmor: [
      { title: 'Mace', type: 'weaponArmor', slug: 'mace', label: 'The rigid impact weapon it is contrasted with' },
      { title: 'War Hammer', type: 'weaponArmor', slug: 'war-hammer', label: 'What men-at-arms carried instead' },
      { title: 'Hand Cannon', type: 'weaponArmor', slug: 'hand-cannon', label: 'Its partner in the Hussite wagon forts' },
      { title: 'Halberd', type: 'weaponArmor', slug: 'halberd', label: 'The other infantry polearm of the same armies' },
      { title: 'Pike', type: 'weaponArmor', slug: 'pike', label: 'The infantry weapon that displaced it' },
      { title: 'Bill / Billhook', type: 'weaponArmor', slug: 'bill-billhook', label: 'The other farm tool turned military weapon' }
    ]
  },
  sources: [
    { title: 'Kunsthistorisches Museum Wien — Hofjagd- und Rüstkammer', url: 'https://www.khm.at/en/visit/collections/hofjagd-und-ruestkammer/', type: 'museum collection', institution: 'Kunsthistorisches Museum' },
    { title: 'Royal Armouries — arms collection', url: 'https://royalarmouries.org/collection/', type: 'museum collection', institution: 'Royal Armouries' },
    { title: 'Flail (weapon)', url: 'https://en.wikipedia.org/wiki/Flail_(weapon)', type: 'encyclopedia' }
  ]
}

data.weaponsArmor.push(article)
console.log(`+ military-flail: ${article.contentSections.length} sections, ${article.contentSections.flatMap((s) => s.paragraphs).join(' ').length} chars`)

const get = (id) => {
  const e = data.weaponsArmor.find((x) => x.id === id)
  if (!e) throw new Error(`missing: ${id}`)
  return e
}
for (const [id, label] of Object.entries({
  mace: 'The flexible-headed weapon it is contrasted with',
  'hand-cannon': 'Its partner behind the Hussite war wagons',
  'bill-billhook': 'The other farm tool that became a military weapon'
})) {
  ;(get(id).relatedEntries.weaponsArmor ??= []).push({ title: 'Military Flail', type: 'weaponArmor', slug: 'military-flail', label })
  console.log(`  back-link ${id} -> military-flail`)
}

writeFileSync(dataPath, JSON.stringify(data, null, 2))
console.log(`\nweaponsArmor now ${data.weaponsArmor.length}`)
