/**
 * Tier 3, first article — lamellar and scale armour.
 *
 * Prioritised ahead of the rest of Tier 3 because it is a dependency of Track A,
 * the Byzantine expansion: the klivanion is the standard Byzantine body armour and
 * the archive currently has no article to link it to.
 *
 * The article's spine is the distinction between the two constructions, because
 * they look superficially alike and are constantly confused: lamellar plates are
 * laced TO EACH OTHER and overlap upward with no backing; scale plates hang FROM a
 * fabric or leather backing and overlap downward.
 *
 * Image is the owner-generated illustration, used under the last-resort rule.
 * Lamellar survives only as loose plates — the Birka, Novgorod and Kostroma finds
 * are exactly that — and every reconstruction on Commons is a reenactment
 * photograph with people in frame or modern HMB sport kit laid out on grass.
 */
import { readFileSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dataPath = path.join(__dirname, '../server/data/history.json')
const data = JSON.parse(readFileSync(dataPath, 'utf8'))
const S = (title, ...paragraphs) => ({ title, paragraphs })

if (data.weaponsArmor.some((x) => x.id === 'lamellar-armor')) throw new Error('already exists')

const article = {
  id: 'lamellar-armor',
  name: 'Lamellar and Scale Armor',
  type: 'weaponArmor',
  weaponArmorType: 'Armor',
  aliases: ['lamellar', 'lamellar armour', 'scale armour', 'scale armor', 'klivanion', 'klibanion'],
  year: 950,
  period: 'Early and High Middle Ages',
  region: 'Byzantium, the steppe, the Rus\' lands and Eastern Europe',
  material: 'Small iron plates laced with leather or sinew, or riveted to a fabric backing',
  battlefieldRole: 'Body armour built from many small plates rather than rings or a single shell',
  image: '/lamellar-ai.png',
  imageInfo: {
    caption: 'AI-generated illustration of a Byzantine lamellar cuirass (klivanion) of about the tenth century, with shoulder pieces and a skirt of leather pteruges.',
    creator: 'AI-generated for The Iron Codex',
    date: 'generated 2026',
    source: 'The Iron Codex (AI illustration)',
    sourceUrl: '',
    aiGenerated: true,
    note: 'Not a photograph of an object. It is used because no suitably licensed photograph of a complete lamellar cuirass could be sourced: the leather lacing that holds lamellar together rots completely, so finds at Birka, Novgorod and Kostroma are loose plates, and the reconstructions available on Wikimedia Commons are reenactment photographs with people in frame or modern sport armour. It shows the plates laced to one another and overlapping upward with no backing, which is what distinguishes lamellar from scale.'
  },
  specs: {
    note: 'Lamellar is known almost entirely from loose plates, so plate dimensions are well evidenced and complete-garment figures are reconstruction estimates.',
    rows: [
      { label: 'Period', value: 'c. 500–1400 in Europe; far older in Asia' },
      { label: 'Region', value: 'Byzantium, the steppe, the Rus\' lands, Eastern Europe' },
      { label: 'Plate size', value: 'c. 4–8 cm tall, 1.5–3 cm wide' },
      { label: 'Plates per cuirass', value: 'Several hundred to over a thousand' },
      { label: 'Lamellar assembly', value: 'Plates laced to each other; rows overlap upward; no backing' },
      { label: 'Scale assembly', value: 'Plates riveted or sewn to a backing; overlap downward' },
      { label: 'Weight', value: 'c. 10–16 kg for a cuirass' },
      { label: 'Byzantine name', value: 'Klivanion (κλιβάνιον)' },
      { label: 'Role', value: 'Torso defence, especially for cavalry' }
    ]
  },
  summary: 'Lamellar armour is built from hundreds of small plates laced directly to one another; scale armour hangs similar plates from a fabric backing. The two look alike and are constantly confused.',
  details: 'Lamellar was the standard body armour of the Byzantine Empire, the steppe peoples and the Rus\' lands, where mail was the Western answer to the same problem. The Byzantine cuirass, the klivanion, is the form that matters most for this archive.',
  knownFor: [
    'Hundreds of small iron plates laced to each other, with no backing — the definition of lamellar.',
    'Scale is the opposite: plates hung from a fabric or leather backing, overlapping downward.',
    'The klivanion, the Byzantine cuirass, is the best-known European form.',
    'Because the lacing rots, lamellar survives almost everywhere as loose plates and nowhere as a garment.'
  ],
  contentSections: [
    S('Overview',
      'Lamellar armour is made of hundreds of small plates laced directly to one another with leather or sinew. There is no garment behind them: the lacing is the structure, and the plates hold each other in place.',
      'Scale armour looks similar and is built the opposite way round. Its plates are riveted or sewn onto a backing of fabric or leather and hang from it, overlapping downward like roof tiles, so the backing carries the weight and the plates only cover.',
      'Together they are the dominant body armour of the eastern medieval world, where Western Europe used mail. The Byzantine Empire, the steppe peoples, and the Rus\' lands all armoured their soldiers this way, and the Byzantine version — the klivanion — is the form this archive most needs.'),
    S('Design and construction',
      'A lamella is a small rectangular iron plate, typically four to eight centimetres tall and one and a half to three wide, pierced with pairs of holes along its edges. A cuirass takes several hundred of them and a full harness well over a thousand.',
      'The plates are laced into horizontal rows, each plate overlapping its neighbour, and the rows are then laced to each other so that each row laps upward over the one below. That upward overlap is diagnostic, and it means a downward blow slides across closed joints rather than into open ones.',
      'The result is a semi-rigid shell that flexes at the rows but not within them. A Byzantine klivanion is a torso cuirass fastened at the sides, usually with shoulder pieces of the same construction and a skirt of hanging leather strips — pteruges — below the waist.'),
    S('Protection and battlefield role',
      'Against cuts it is excellent: a blade meets overlapping iron backed by more iron, and the layered plates spread the force in a way a single thickness does not.',
      'Against arrows it does better than mail. This matters enormously in the eastern Mediterranean and on the steppe, where horse archery was the dominant threat, and it is a substantial part of why lamellar rather than mail became standard in those places.',
      'It was above all cavalry armour. The Byzantine kataphraktoi of the tenth century wore klivania, and the same construction equipped the horse archers of the steppe whose armies reached Europe during the Mongol invasions — the forces that destroyed the Hungarian and Polish armies at the Battle of Mohi and the Battle of Legnica in 1241.'),
    S('Strengths and weaknesses',
      'Its great practical strength is manufacture. Cutting and piercing small plates is unskilled work compared with drawing wire and riveting twenty thousand rings, so lamellar can be produced in quantity by workshops that could not make mail at all.',
      'It is also repairable in the field. A damaged plate is unlaced and replaced without touching the rest, where a torn mail shirt needs a specialist and a supply of rings.',
      'Its weakness is the lacing. Leather and sinew rot, stretch when wet and can be cut through, and a cuirass whose lacing has failed comes apart into its components — which is both its battlefield vulnerability and the reason none survive.'),
    S('Historical development',
      'Both constructions are ancient and reach medieval Europe from the east. Scale is well known in the Roman world as the lorica squamata, and lamellar arrives with the steppe peoples and through Byzantine contact with Persia and Central Asia.',
      'The Byzantine klivanion is documented from the tenth century in military manuals and in art, and is the standard cuirass of the heavy cavalry through the middle Byzantine period.',
      'In Western Europe it never took hold. Mail was established, the Western threat picture was different, and lamellar appears only sporadically — as at Birka in Sweden, where a tenth-century find of eastern type shows the trade route rather than local practice. In the east it persists into the fourteenth century and beyond.'),
    S('Regional variation',
      'Byzantine work is the most systematic, and the klivanion is described in the military treatises with enough precision that its construction can be reconstructed with some confidence.',
      'Steppe and Mongol forms favour longer plates and lighter cuirasses suited to horse archery, often combined with hardened leather rather than iron, and it is this tradition that Europe met directly in 1241.',
      'The Rus\' lands sit between the two and have produced the richest archaeological record in Europe: plate finds from Novgorod, Kostroma and elsewhere run into the thousands and cover the twelfth to fifteenth centuries.'),
    S('Surviving examples',
      'Not one complete medieval lamellar cuirass survives in Europe, and the reason is the lacing. When the leather perishes the plates separate, so what museums hold are handfuls or hundreds of loose lamellae rather than garments.',
      'The Birka find in Sweden, from the tenth century, is the best-known northern example and is important precisely because it is out of place — evidence of eastern contact along the Volga rather than of Scandinavian practice.',
      'Russian collections hold the largest assemblages, from Novgorod, Kostroma and other sites, and their plates are the primary evidence for how the construction actually worked. Everything about the complete garment is inferred from those plates, from Byzantine art, and from the written manuals.'),
    S('Legacy',
      'The logic of lamellar outlived the object in Western Europe. The coat of plates and the brigandine both work by hiding many small plates in a flexible assembly, arriving at a similar answer from a different direction.',
      'It also explains a real divergence in medieval warfare. Where mail dominated in the west and lamellar in the east, the difference tracks the threat — archery and cavalry in one theatre, the cut and the shield wall in the other — rather than any difference in skill.',
      'The terminology remains a problem worth stating plainly. Popular writing uses lamellar and scale interchangeably, museum labels are not always careful, and the only reliable test is the construction: are the plates laced to each other, or hung from something else?')
  ],
  comparison: {
    title: 'Lamellar vs. scale',
    leftLabel: 'Lamellar',
    rightLabel: 'Scale',
    rows: [
      { feature: 'Held together by', left: 'Lacing between the plates themselves', right: 'A fabric or leather backing' },
      { feature: 'Backing', left: 'None', right: 'Essential — carries the weight' },
      { feature: 'Overlap', left: 'Rows lap upward', right: 'Plates hang and lap downward' },
      { feature: 'Rigidity', left: 'Semi-rigid; flexes between rows', right: 'More flexible, follows the backing' },
      { feature: 'Repair', left: 'Unlace and replace a plate', right: 'Re-rivet or re-sew to the backing' },
      { feature: 'Failure mode', left: 'Lacing rots or is cut; it falls apart', right: 'Backing tears; plates are lost' }
    ]
  },
  myths: [
    { claim: 'Lamellar and scale are the same thing.', reality: 'They are opposite constructions. Lamellar plates lace to each other with no backing and overlap upward; scale plates hang from a backing and overlap downward.' },
    { claim: 'Lamellar was primitive compared with mail.', reality: 'It resists arrows better than mail and is far easier to manufacture and repair. It dominated the east because it suited the fighting there, not for want of alternatives.' },
    { claim: 'Vikings commonly wore lamellar.', reality: 'One find, at Birka, of eastern type. It evidences the Volga trade route rather than Scandinavian practice, and lamellar was not normal Norse equipment.' },
    { claim: 'Museums hold complete medieval lamellar armours.', reality: 'None survive in Europe. The lacing rots and the plates separate, so collections hold loose lamellae and every complete example on display is a reconstruction.' }
  ],
  relatedEntries: {
    events: [
      { title: 'Battle of Manzikert', type: 'event', slug: 'battle-of-manzikert', label: 'Byzantine heavy cavalry in klivania' },
      { title: 'Battle of Mohi', type: 'event', slug: 'battle-of-mohi', label: 'Steppe lamellar met European mail' },
      { title: 'Battle of Legnica', type: 'event', slug: 'battle-of-legnica', label: 'The same encounter in Poland, weeks earlier' }
    ],
    locations: [
      { title: 'Byzantine Empire', type: 'location', slug: 'byzantine-empire', label: 'Where the klivanion was standard' },
      { title: 'Kievan Rus', type: 'location', slug: 'kievan-rus', label: 'The richest archaeological record of lamellar plates' }
    ],
    weaponsArmor: [
      { title: 'Mail Armor', type: 'weaponArmor', slug: 'mail-armor', label: 'The Western answer to the same problem' },
      { title: 'Coat of Plates', type: 'weaponArmor', slug: 'coat-of-plates', label: 'Western armour reaching a similar answer' },
      { title: 'Brigandine', type: 'weaponArmor', slug: 'brigandine', label: 'Many small plates in a flexible assembly' },
      { title: 'War Bow', type: 'weaponArmor', slug: 'war-bow', label: 'The archery it resisted better than mail' }
    ]
  },
  sources: [
    { title: 'British Museum — Byzantine and early medieval collections', url: 'https://www.britishmuseum.org/collection', type: 'museum collection', institution: 'British Museum' },
    { title: 'Metropolitan Museum of Art — Arms and Armor department', url: 'https://www.metmuseum.org/art/collection/search?department=4', type: 'museum collection', institution: 'Metropolitan Museum of Art' },
    { title: 'Swedish History Museum — Birka finds', url: 'https://historiska.se/', type: 'museum collection', institution: 'Statens historiska museum' },
    { title: 'Lamellar armour', url: 'https://en.wikipedia.org/wiki/Lamellar_armour', type: 'encyclopedia' }
  ]
}

data.weaponsArmor.push(article)
console.log(`+ lamellar-armor: ${article.contentSections.length} sections, ${article.contentSections.flatMap((s) => s.paragraphs).join(' ').length} chars`)

const get = (id) => {
  const e = data.weaponsArmor.find((x) => x.id === id)
  if (!e) throw new Error(`missing: ${id}`)
  return e
}
for (const [id, label] of Object.entries({
  'mail-armor': 'The eastern alternative, dominant in Byzantium and on the steppe',
  'coat-of-plates': 'The same many-plates logic reached from the Western side',
  brigandine: 'Small plates in a flexible assembly, by a different route'
})) {
  ;(get(id).relatedEntries.weaponsArmor ??= []).push({ title: 'Lamellar and Scale Armor', type: 'weaponArmor', slug: 'lamellar-armor', label })
  console.log(`  back-link ${id} -> lamellar-armor`)
}

writeFileSync(dataPath, JSON.stringify(data, null, 2))
console.log(`\nweaponsArmor now ${data.weaponsArmor.length}`)
