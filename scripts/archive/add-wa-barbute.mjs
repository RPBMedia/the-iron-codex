/**
 * Tier 3 — the barbute.
 *
 * Image: Metropolitan Museum 49.163.2, Italian and probably Milanese, c. 1475,
 * CC0. Shot frontally, which matters here more than usual: the T-shaped face
 * opening IS the type, and the Met's profile views of the same helmet hide it
 * completely. Three other candidates were rejected first — a corroded river find
 * from Hereford, a market-stall reproduction that was not a barbute at all, and a
 * Castelnaud example photographed from behind.
 */
import { readFileSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dataPath = path.join(__dirname, '../server/data/history.json')
const data = JSON.parse(readFileSync(dataPath, 'utf8'))
const S = (title, ...paragraphs) => ({ title, paragraphs })

if (data.weaponsArmor.some((x) => x.id === 'barbute')) throw new Error('already exists')

const article = {
  id: 'barbute',
  name: 'Barbute',
  type: 'weaponArmor',
  weaponArmorType: 'Helmet',
  aliases: ['barbuta', 'celata alla veneziana'],
  year: 1450,
  period: 'Late Middle Ages',
  region: 'Italy',
  material: 'Steel',
  battlefieldRole: 'Open-faced helmet giving deep coverage of the head, cheeks and neck',
  image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Barbute%20MET%2049.163.2%20001AA2015.jpg',
  imageInfo: {
    caption: 'An Italian barbute of about 1475, probably Milanese, shown from the front so the T-shaped face opening that defines the type is visible.',
    creator: 'Italian armourer, probably Milan; photograph by the Metropolitan Museum of Art',
    date: 'c. 1475 (object); photograph 2015',
    source: 'Metropolitan Museum of Art, Arms and Armor, accession 49.163.2 / Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Barbute_MET_49.163.2_001AA2015.jpg',
    note: 'An original surviving helmet, complete and raised from a single plate. The surface mottling is age. Photographed frontally deliberately: the same helmet in profile shows nothing of the face opening, which is the whole point of the type. Released CC0 under the Met Open Access programme.'
  },
  specs: {
    note: 'Typical ranges for the fifteenth century; barbutes vary in how far the face opening is closed.',
    rows: [
      { label: 'Period', value: 'c. 1400–1500' },
      { label: 'Region', value: 'Italy, above all Milan' },
      { label: 'Weight', value: 'c. 2–3 kg' },
      { label: 'Construction', value: 'Usually raised from a single plate' },
      { label: 'Face opening', value: 'T-shaped or Y-shaped; no visor' },
      { label: 'Coverage', value: 'Skull, ears, cheeks and neck to the nape' },
      { label: 'Worn with', value: 'A mail standard or a gorget at the throat' },
      { label: 'Role', value: 'Infantry and light cavalry head defence' }
    ]
  },
  summary: 'The barbute is the Italian open-faced helmet of the fifteenth century, drawn down over the ears, cheeks and neck and pierced by a T-shaped face opening.',
  details: 'It gives more coverage than any other open helmet without sacrificing vision or breathing, and it was the working helmet of Italian infantry and of the condottiere companies.',
  knownFor: [
    'A T-shaped or Y-shaped face opening, and no visor at all.',
    'Usually raised from one plate, extending down over the ears, cheeks and nape.',
    'The characteristic helmet of Italian infantry and the condottiere companies.',
    'Its resemblance to the classical Corinthian helmet is real but the connection is debated.'
  ],
  contentSections: [
    S('Overview',
      'The barbute is an open-faced helmet that comes down over the ears, cheeks and back of the neck, leaving a T-shaped or Y-shaped opening for the eyes, nose and mouth. It has no visor.',
      'It occupies a genuine middle ground. It covers far more of the head than a kettle hat or a nasal helmet, and gives up only the face itself compared with a closed helmet — while keeping full vision, unobstructed breathing and the ability to hear an order.',
      'It is an Italian object above all, produced in quantity by the Milanese workshops that armed much of fifteenth-century Europe, and it is the helmet of the infantryman and the condottiere rather than of the fully armoured man-at-arms.'),
    S('Design and construction',
      'The best examples are raised from a single plate, which is demanding work: a barbute is deep, closely curved and has no seams, and getting there without cracking the steel is a test of an armourer\'s skill.',
      'The face opening is cut as a T or a Y — a vertical slot down the centre for nose and mouth, opening into a horizontal band across the eyes. How far the cheeks close toward the centre varies, and the most enclosed examples leave very little face exposed.',
      'The rim is usually rolled or turned for strength, and the lower edge sweeps down over the nape. A row of small holes around the rim carried the lining, and a mail standard or a gorget covered the throat below.'),
    S('Protection and battlefield role',
      'Its coverage is unusually complete for an open helmet. Blows to the side of the head, the ear and the back of the neck are all stopped, and those are the strikes an infantryman in a press is most likely to receive.',
      'What it keeps is situational awareness. A man in a barbute can see, hear and breathe normally, which matters more to infantry fighting in a line and to light cavalry than the extra protection a visor would add.',
      'It equipped the Italian companies of the fifteenth century, whose warfare was largely a matter of professional infantry and mercenary contracts. It is the helmet of the man expected to march, hold a position and fight all day rather than deliver a mounted charge.'),
    S('Strengths and limitations',
      'Its strengths are coverage, vision and simplicity. There is no visor to jam, no hinge to fail and no cheek pieces to fasten, and a barbute can be put on and taken off in a moment without help.',
      'Its limitation is the obvious one: the face is open. A thrust with a spear, a bolt or a dagger point can reach it, and against a fully armoured opponent seeking exactly those gaps that is a real exposure.',
      'It is also hot and heavy for an open helmet, since the extra coverage is extra steel, and the deep form traps heat around the head in a way a kettle hat with its open brim does not.'),
    S('Historical development',
      'It appears in Italy in the early fifteenth century and matures over the following decades, becoming standard Italian infantry equipment by mid-century.',
      'The most enclosed forms, where the cheeks nearly meet, belong to the middle of the century; later examples tend to open out again, and the type shades into the Italian sallet — the celata — with which it is easily confused.',
      'It fades toward 1500 as the sallet and the armet divide the field between them, though the open-faced principle persists in later light-cavalry helmets that keep the face clear for the same reasons.'),
    S('Regional variation',
      'It is fundamentally Italian, and Milanese work sets the standard. Italian export was extensive enough that barbutes turn up across Europe without ever becoming a local product elsewhere.',
      'A Spanish variant is recognised in museum cataloguing, and the Metropolitan Museum holds an example described as being in the fifteenth-century Spanish style, showing how the form travelled and was adapted.',
      'The terminology is unreliable. "Barbute" is a modern usage from the Italian barbuta, period documents are inconsistent, and the boundary between a very enclosed barbute and an Italian sallet is a modern distinction rather than a medieval one.'),
    S('Famous examples or users',
      'The Metropolitan Museum of Art holds several fifteenth-century barbutes, including a Milanese example of about 1475, and the Wallace Collection and the Castelnaud museum hold others in good condition.',
      'The condottieri are its defining users, and it appears throughout the art of fifteenth-century Italy on infantry and on men-at-arms fighting on foot.',
      'A caution about corroded finds: an English example recovered from the River Lugg and now at Hereford is important as an archaeological object but has lost so much metal that it shows the type poorly — it is evidence, not illustration.'),
    S('Legacy',
      'The barbute is the most complete answer the Middle Ages found to the question of how much of the head can be covered without closing the face, and nothing later improved much on it within those terms.',
      'Its resemblance to the classical Corinthian helmet is striking and much remarked on. Whether Italian armourers were consciously reviving an ancient form during a period of enthusiastic classicism, or arrived at the same shape because the problem has the same solution, is genuinely argued and not settled.',
      'It also demonstrates that late medieval armour was not a single upward march toward more enclosure. Italy produced the barbute and the armet at the same time, for different men doing different jobs, and both were current together.')
  ],
  relatedEntries: {
    weaponsArmor: [
      { title: 'Sallet', type: 'weaponArmor', slug: 'sallet', label: 'The type it shades into, and is confused with' },
      { title: 'Armet', type: 'weaponArmor', slug: 'armet', label: 'The closed Italian helmet made alongside it' },
      { title: 'Kettle Hat', type: 'weaponArmor', slug: 'kettle-hat', label: 'The other great open infantry helmet' },
      { title: 'Great Helm', type: 'weaponArmor', slug: 'great-helm', label: 'The enclosure it deliberately refuses' },
      { title: 'Brigandine', type: 'weaponArmor', slug: 'brigandine', label: 'Worn by the same Italian infantry' },
      { title: 'Plate Armor', type: 'weaponArmor', slug: 'plate-armor', label: 'The harness it completed for men fighting on foot' }
    ]
  },
  sources: [
    { title: 'Barbute, Metropolitan Museum of Art acc. 49.163.2', url: 'https://commons.wikimedia.org/wiki/File:Barbute_MET_49.163.2_001AA2015.jpg', type: 'image source', institution: 'Metropolitan Museum of Art' },
    { title: 'Metropolitan Museum of Art — Arms and Armor department', url: 'https://www.metmuseum.org/art/collection/search?department=4', type: 'museum collection', institution: 'Metropolitan Museum of Art' },
    { title: 'Wallace Collection — European Armoury', url: 'https://www.wallacecollection.org/', type: 'museum collection', institution: 'Wallace Collection' }
  ]
}

data.weaponsArmor.push(article)
console.log(`+ barbute: ${article.contentSections.length} sections, ${article.contentSections.flatMap((s) => s.paragraphs).join(' ').length} chars`)

const get = (id) => {
  const e = data.weaponsArmor.find((x) => x.id === id)
  if (!e) throw new Error(`missing: ${id}`)
  return e
}
for (const [id, label] of Object.entries({
  sallet: 'The Italian open helmet it shades into',
  armet: 'The open-faced Italian helmet made alongside it',
  'kettle-hat': 'The other great open infantry helmet'
})) {
  ;(get(id).relatedEntries.weaponsArmor ??= []).push({ title: 'Barbute', type: 'weaponArmor', slug: 'barbute', label })
  console.log(`  back-link ${id} -> barbute`)
}

writeFileSync(dataPath, JSON.stringify(data, null, 2))
console.log(`\nweaponsArmor now ${data.weaponsArmor.length}`)
