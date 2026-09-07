/**
 * Tier 2, last article — the gauntlet.
 *
 * Image is the owner-generated illustration, used under the last-resort rule.
 * Medieval gauntlets survive as cuffs and metacarpal plates: the finger lames are
 * small, individually riveted and always lost, so the Metropolitan's Italian
 * examples of about 1420 and 1450 are both fingerless. A fingerless gauntlet is
 * precisely the incomplete artifact the owner ruled out on 2026-09-07, and it
 * would also hide the thing the article is about — the articulation that lets a
 * man in steel still hold a weapon.
 */
import { readFileSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dataPath = path.join(__dirname, '../server/data/history.json')
const data = JSON.parse(readFileSync(dataPath, 'utf8'))
const S = (title, ...paragraphs) => ({ title, paragraphs })

if (data.weaponsArmor.some((x) => x.id === 'gauntlet')) throw new Error('gauntlet already exists')

const article = {
  id: 'gauntlet',
  name: 'Gauntlet',
  type: 'weaponArmor',
  weaponArmorType: 'Armor',
  aliases: ['hourglass gauntlet', 'mitten gauntlet', 'plate gloves'],
  year: 1380,
  period: 'Late Middle Ages',
  region: 'Italy, the Holy Roman Empire and Western Europe',
  material: 'Steel plates riveted to a leather glove',
  battlefieldRole: 'Protection for the hands, the most exposed part of an armoured man',
  image: '/gauntlet-ai.png',
  imageInfo: {
    caption: 'AI-generated illustration of a fingered gauntlet of the mid-fifteenth century, shown complete: flared cuff, metacarpal plate and articulated lames over each finger.',
    creator: 'AI-generated for The Iron Codex',
    date: 'generated 2026',
    source: 'The Iron Codex (AI illustration)',
    sourceUrl: '',
    aiGenerated: true,
    note: 'Not a photograph of an object. It is used because no suitably licensed photograph of a complete medieval gauntlet could be sourced: the finger lames are small and individually riveted and are always lost, so surviving examples — including the Metropolitan Museum\'s Italian gauntlets of about 1420 and 1450 — are cuffs and metacarpal plates without fingers. It follows the Italian and south German form of roughly 1420 to 1460.'
  },
  specs: {
    note: 'Typical ranges for the fifteenth century. Gauntlets were fitted to an individual hand and vary accordingly.',
    rows: [
      { label: 'Period', value: 'c. 1300–1600 (plate forms from c. 1350)' },
      { label: 'Weight', value: 'c. 0.5–0.9 kg each' },
      { label: 'Cuff', value: 'Flared, one plate; hourglass profile in the 14th century' },
      { label: 'Hand', value: 'Shaped metacarpal plate over the back' },
      { label: 'Fingers', value: 'Overlapping lames, riveted to a leather glove' },
      { label: 'Palm', value: 'Left open — leather only, for grip and feel' },
      { label: 'Forms', value: 'Fingered and mitten, both in use through the 15th century' },
      { label: 'Role', value: 'Hand protection for the fully armoured man' }
    ]
  },
  summary: 'The gauntlet is armour for the hand: steel plates riveted to a leather glove, with a flared cuff, a plate over the back of the hand and articulated lames along the fingers.',
  details: 'It is the hardest problem in armour. The hand is the part an opponent attacks first and the part that must keep working, so a gauntlet has to protect without preventing its wearer from gripping a weapon at all.',
  knownFor: [
    'The hands are the most-attacked target in armoured combat, and the first thing a fight book tells you to strike.',
    'The palm is left as bare leather — armouring it would destroy the grip.',
    'Overlapping lames along each finger, riveted individually to a leather glove.',
    'Fingered and mitten forms were used side by side, trading dexterity against protection.'
  ],
  contentSections: [
    S('Overview',
      'A gauntlet is a glove of steel plates: a flared cuff covering the wrist, a shaped plate over the back of the hand, and articulated lames running along the fingers, all riveted to a leather glove.',
      'It is the most demanding piece in a harness. Every other plate can simply be made thicker; a gauntlet has to protect a hand that must still close on a sword, a lance or a poleaxe, and every gram of protection is bought against dexterity.',
      'It also protects the part most likely to be hit. The hands are held forward of everything else, and the fifteenth-century fight books are explicit that they are the target of choice — an opponent who cannot grip has lost, whatever the rest of his armour is doing.'),
    S('Design and construction',
      'The foundation is a leather glove. Every plate is riveted to it, and the glove is what holds the assembly together and lets it flex — a gauntlet with the leather rotted away falls into a pile of unrelated pieces, which is exactly how most of them survive.',
      'The cuff is a single flared plate covering the wrist and the lower forearm, overlapping the vambrace above it. Fourteenth-century cuffs have the distinctive "hourglass" profile, wide at the opening and pinched at the wrist; fifteenth-century ones flare more simply.',
      'Over the back of the hand sits a shaped metacarpal plate, and from its lower edge run the finger defences: small overlapping lames, each riveted through the glove, with a separately articulated thumb. The palm carries no metal at all.'),
    S('Protection and battlefield role',
      'Its job is to keep a man in the fight. A cut to an unprotected hand ends the engagement immediately, and a fully armoured man with bare hands is not armoured in any sense that matters.',
      'The fight books treat the hands as a primary target and teach striking at them directly. Fiore dei Liberi and the German masters after Johannes Liechtenauer both work from the same understanding: a man in full harness has very few openings, and the hands are the closest and the most reachable.',
      'It also enables technique. Half-swording — gripping the blade to drive the point into a gap — is only sane in gauntlets, and the whole armoured fighting system depicted in the fifteenth-century manuals assumes them.'),
    S('Strengths and limitations',
      'Its strength is that it solves a problem with no alternative. Nothing else protects the hand, and mail mittens, the earlier solution, transmit every blow straight through to the fingers.',
      'Its limitation is the palm. Armouring it would give complete protection and make the gauntlet useless, so the palm stays leather and the inside of the hand remains the one deliberately unarmoured part of a full harness.',
      'The trade-off between fingered and mitten forms is the other constant tension. A mitten gauntlet, with the fingers under a few broad lames, is stronger and simpler; a fingered one lets the wearer do more. Both were in use at once, and the choice was the wearer\'s.'),
    S('Historical development',
      'The earliest solution is mail: integral mittens on the sleeves of a twelfth-century hauberk, with a leather palm and a slit at the wrist so the hand could be freed. They protect against cuts and do nothing about impact.',
      'From the later thirteenth century plates are added over leather or whalebone gloves, and by about 1350 the hourglass gauntlet is established — the first true plate gauntlet, with a flared pinched cuff and lames over the fingers.',
      'The fifteenth century refines rather than replaces it. Cuffs become simpler and larger, articulation improves, and the mitten form spreads for heavy fighting while fingered gauntlets continue alongside. Later developments — the locking gauntlet that fastens the hand shut around a sword hilt — belong to the tournament and to the sixteenth century.'),
    S('Regional variation',
      'Milanese gauntlets are rounded, smooth and generously proportioned, matching the Italian approach to the rest of the harness, and Italian workshops exported them across Europe.',
      'German gothic gauntlets are narrower, more sharply pointed and often fluted in line with the rest of the harness, and they tend toward the fingered form where Italian practice more often used mittens.',
      'A useful asymmetry: the left and right gauntlets of a harness are frequently not the same. The bridle hand needs less dexterity and often gets a heavier mitten, while the weapon hand keeps fingers.'),
    S('Surviving examples',
      'Complete medieval gauntlets are genuinely rare, and the reason is structural. The lames are small, each riveted to leather, and once the leather perishes the fingers are lost — so what survives is cuffs and metacarpal plates.',
      'The Metropolitan Museum of Art holds Italian examples of about 1420 and about 1450, both of which show the cuff and the back of the hand and neither of which retains its fingers.',
      'The best complete survivals are those still attached to full harnesses, in the Churburg armoury, the Wallace Collection and the Kunsthistorisches Museum in Vienna, where they were kept as part of an assembly rather than as loose pieces.'),
    S('Legacy',
      'The gauntlet is the clearest demonstration that armour is an engineering compromise rather than a matter of adding metal. The palm stays bare because the alternative is a wearer who cannot hold anything.',
      'It outlived most of the harness. Gauntlets and helmets were the last pieces to be abandoned as armour retreated in the face of firearms, because head and hands remained worth protecting after limbs no longer were.',
      'Its principle is still in use. Every modern protective glove — for welding, motorcycling, fencing, riot control — solves the same problem in the same way: hard plates over the back, flexible material in the palm, articulation at every joint.')
  ],
  comparison: {
    title: 'Fingered vs. mitten gauntlet',
    leftLabel: 'Fingered',
    rightLabel: 'Mitten',
    rows: [
      { feature: 'Fingers', left: 'Lames along each finger separately', right: 'A few broad lames over all four' },
      { feature: 'Dexterity', left: 'Better — can manipulate straps, reins, a dagger', right: 'Worse — grips a hilt and little else' },
      { feature: 'Protection', left: 'More joints, more gaps', right: 'Stronger; fewer places to be hit' },
      { feature: 'Construction', left: 'More lames, more rivets, costlier', right: 'Simpler and cheaper to make' },
      { feature: 'Typical use', left: 'Weapon hand; German preference', right: 'Bridle hand; common in Italian harness' },
      { feature: 'Period', left: 'Throughout the 14th–15th c.', right: 'Mainly the 15th c.' }
    ]
  },
  myths: [
    { claim: 'A gauntlet armoured the whole hand.', reality: 'The palm is bare leather. Armouring it would have destroyed the grip, and it is the one deliberately unprotected part of a full harness.' },
    { claim: 'Gauntlets made the hands clumsy and useless.', reality: 'A well-made fingered gauntlet allows a man to draw a dagger, work a buckle and grip a blade in half-sword. The fight manuals assume that dexterity throughout.' },
    { claim: 'Both gauntlets of a harness matched.', reality: 'Frequently not. The bridle hand often took a heavier mitten while the weapon hand kept articulated fingers.' },
    { claim: 'Complete medieval gauntlets are common in museums.', reality: 'They are rare. The finger lames are riveted to a leather glove, and when the leather perishes the fingers are lost — most survivals are cuffs and metacarpal plates.' }
  ],
  relatedEntries: {
    weaponsArmor: [
      { title: 'Plate Armor', type: 'weaponArmor', slug: 'plate-armor', label: 'The harness it completes' },
      { title: 'Gothic Plate Armor', type: 'weaponArmor', slug: 'gothic-plate-armor', label: 'German gauntlets follow its fluted, pointed style' },
      { title: 'Mail Armor', type: 'weaponArmor', slug: 'mail-armor', label: 'Mail mittens were the earlier solution' },
      { title: 'Longsword', type: 'weaponArmor', slug: 'longsword', label: 'Half-swording is only possible in gauntlets' },
      { title: 'Poleaxe', type: 'weaponArmor', slug: 'poleaxe', label: 'The weapon the armoured hand had to hold' },
      { title: 'Rondel Dagger', type: 'weaponArmor', slug: 'rondel-dagger', label: 'Drawn and used with gauntlets on' }
    ]
  },
  sources: [
    { title: 'Metropolitan Museum of Art — Arms and Armor department', url: 'https://www.metmuseum.org/art/collection/search?department=4', type: 'museum collection', institution: 'Metropolitan Museum of Art' },
    { title: 'Wallace Collection — European Armoury', url: 'https://www.wallacecollection.org/', type: 'museum collection', institution: 'Wallace Collection' },
    { title: 'Royal Armouries — armour collection', url: 'https://royalarmouries.org/collection/', type: 'museum collection', institution: 'Royal Armouries' },
    { title: 'Gauntlet (glove)', url: 'https://en.wikipedia.org/wiki/Gauntlet_(glove)', type: 'encyclopedia' }
  ]
}

data.weaponsArmor.push(article)
console.log(`+ gauntlet: ${article.contentSections.length} sections, ${article.contentSections.flatMap((s) => s.paragraphs).join(' ').length} chars`)

const get = (id) => {
  const e = data.weaponsArmor.find((x) => x.id === id)
  if (!e) throw new Error(`missing: ${id}`)
  return e
}
for (const [id, label] of Object.entries({
  'plate-armor': 'Hand protection, the hardest piece of the harness to design',
  'gothic-plate-armor': 'German gauntlets follow the same fluted, pointed style',
  longsword: 'Half-swording depends on wearing them',
  'rondel-dagger': 'Drawn and driven home with gauntlets on'
})) {
  ;(get(id).relatedEntries.weaponsArmor ??= []).push({ title: 'Gauntlet', type: 'weaponArmor', slug: 'gauntlet', label })
  console.log(`  back-link ${id} -> gauntlet`)
}

writeFileSync(dataPath, JSON.stringify(data, null, 2))
console.log(`\nweaponsArmor now ${data.weaponsArmor.length}`)
