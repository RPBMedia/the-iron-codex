/**
 * Weapons & Armor M3 — the eight AI illustrations.
 *
 * Every photographic source was exhausted first (Commons categories/intitle/
 * full-text, the en-wiki articles' own image lists, Openverse across Flickr,
 * Wikimedia and museums, the Met and Cleveland CC0 APIs, and the maker sites
 * Wulflund, Museum Replicas, Cold Steel and Kult of Athena). Seven of the eight
 * fail for one structural reason: polearms are shipped and photographed as HEADS,
 * because a two-metre shaft fits neither a studio frame nor a parcel.
 *
 * Each is flagged `aiGenerated`, discloses itself in the caption's first sentence,
 * and records why it was needed — all three enforced by check-images.mjs. Each
 * previous image is demoted rather than deleted: they are good photographs of
 * heads, which is exactly what these articles could not otherwise show in detail.
 *
 * These are placeholders. Per CLAUDE.md a real photograph always takes precedence,
 * so re-check these whenever a new source opens up.
 */
import { readFileSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dataPath = path.join(__dirname, '../server/data/history.json')
const data = JSON.parse(readFileSync(dataPath, 'utf8'))
const wa = (id) => data.weaponsArmor.find((x) => x.id === id)

const WHY = 'no suitably licensed photograph of the complete weapon could be sourced'
const WHY_ARMOUR = 'no suitably licensed photograph of a complete example could be sourced'

const items = [
  {
    id: 'spear',
    file: '/spear-ai.png',
    caption:
      'AI-generated illustration of a European winged spear (Flügellanze) of about 1000–1200, shown complete: a leaf-shaped double-edged blade on a socket, two short lugs projecting where blade meets socket, and a plain ash shaft ending in an iron ferrule.',
    note: `Not a photograph of an object. It is used because ${WHY} — museums and makers alike photograph spearheads rather than mounted spears, since a two-metre shaft fits neither a studio frame nor a shipping parcel. The lugs are the diagnostic feature: they stopped the blade driving too deep and could catch an opponent's weapon or shield. It follows the general Carolingian-to-high-medieval type rather than reproducing one identified original.`,
    demote: 'Regional variations and examples',
    demoteNote:
      'A surviving winged spearhead in the Metropolitan Museum of Art, photographed alone as such finds almost always are — the iron head survives burial, the wooden shaft does not.'
  },
  {
    id: 'bill-billhook',
    file: '/bill-billhook-ai.png',
    caption:
      'AI-generated illustration of an English bill of the 15th century, shown complete: the curved concave blade descended from the agricultural billhook, a forward spike above it and a rear spike behind, socketed onto an ash haft with iron langets riveted down the shaft.',
    note: `Not a photograph of an object. It is used because ${WHY}. The bill was a converted farm tool, and the hook is the point of it: it could cut, thrust, and pull a rider from the saddle. The langets running down the haft are functional, protecting the shaft from being cut through. It follows the general English type rather than one identified original.`,
    demote: 'Regional variations and examples',
    demoteNote:
      'The head of a surviving bill in the Metropolitan Museum of Art. The hook, forward spike and rear spike read far more clearly here than at full length — which is why the photograph is kept.'
  },
  {
    id: 'poleaxe',
    file: '/poleaxe-ai.png',
    caption:
      'AI-generated illustration of a knightly poleaxe of about 1400–1480, shown complete: a crescent axe blade opposed by a squared hammer face, a long spike above, iron langets down the haft, and a rondel disc guarding the hands.',
    note: `Not a photograph of an object. It is used because ${WHY}. The combination is deliberate — the hammer for concussion against plate, the spike for thrusting into gaps, the axe for lighter targets — and the rondel protected the hands in the close fighting the weapon was built for. It follows the general 15th-century type rather than one identified original.`,
    demote: 'Regional variations and examples',
    demoteNote:
      'A surviving poleaxe head in the Metropolitan Museum of Art, seen from the side so the axe blade, top spike and rear hammer read in profile.'
  },
  {
    id: 'halberd',
    file: '/halberd-ai.png',
    caption:
      'AI-generated illustration of a Swiss or south German halberd of the 15th century, shown complete: an axe blade with a concave edge, a pointed rear fluke, and a long spike rising above both, forged as one head and riveted to an ash haft by iron langets.',
    note: `Not a photograph of an object. It is used because ${WHY}; Wulflund, one of the few makers producing them, states plainly that halberds are "delivered without wooden pole for cheaper and easier shipping". The three elements do three jobs — spike to thrust, blade to cut, fluke to hook a rider down. It follows the plain fighting type, not the pierced and etched ceremonial halberds of the 16th and 17th centuries.`,
    demote: 'Regional variations and examples',
    demoteNote:
      'A surviving halberd head in the Auckland War Memorial Museum, showing how the axe blade, spike and rear hook are forged together as a single unit.'
  },
  {
    id: 'lance',
    file: '/lance-ai.png',
    caption:
      'AI-generated illustration of a medieval European cavalry lance of about 1300–1450, shown complete: a long ash shaft thickest at the grip and tapering towards both ends, a small lozenge-section head, and a conical steel vamplate shielding the hand.',
    note: `Not a photograph of an object. It is used because ${WHY}. The proportions carry the argument: almost all the weapon is shaft, and the small head concentrates the momentum of horse and rider into a single point. The vamplate sits forward of the grip to protect the hand on impact. It follows the general war-lance form rather than a tournament lance, which used blunt crown-shaped coronels instead.`,
    demote: 'Regional variations and examples',
    demoteNote:
      'A surviving lance in the Metropolitan Museum of Art, photographed as a section rather than at full length — a reminder of how unwieldy the complete object is to display or photograph.'
  },
  {
    id: 'javelin-throwing-spear',
    file: '/javelin-throwing-spear-ai.png',
    caption:
      'AI-generated illustration of an early medieval throwing spear of the angon type, about 500–900, shown complete: a small barbed head on a long thin iron shank, socketed onto a slender wooden shaft, altogether lighter than a thrusting spear.',
    note: `Not a photograph of an object. It is used because ${WHY}. The long iron shank is the diagnostic feature — it let the head bury itself and made the weapon hard to pull free from a shield, weighing it down. Distinct from the Roman pilum, which used a heavier head on a thicker body. It follows the Frankish type described by Agathias rather than one identified find.`,
    demote: 'Regional variations and examples',
    demoteNote:
      'Reconstructed throwing spears carried at a living-history event, showing their length and lightness relative to a fighting spear.'
  },
  {
    id: 'war-bow',
    file: '/war-bow-ai.png',
    caption:
      'AI-generated illustration of an English war bow of the 15th century, shown complete and strung: a single tapered yew stave with pale sapwood along the back and darker heartwood on the belly, horn nocks at both tips, and no handle — the archer gripped the bare middle of the stave.',
    note: `Not a photograph of an object. It is used because ${WHY} — the surviving war bows are the Mary Rose staves, which are displayed massed in a case rather than individually. The two-tone wood is not decoration but construction: yew sapwood resists tension on the back of the bow while the heartwood resists compression on the belly, so the stave is cut to place each where it works. It follows the Mary Rose proportions rather than reproducing an individual bow.`,
    demote: 'Regional variations and examples',
    demoteNote:
      'War bows recovered from the Mary Rose, which sank in 1545 — by far the largest surviving group of English war bows, and the evidence behind almost everything known about their dimensions and draw weights.'
  },
  {
    id: 'coat-of-plates',
    file: '/coat-of-plates-ai.png',
    caption:
      'AI-generated illustration of a 14th-century coat of plates, shown as it would sit on the body: iron plates riveted inside a linen cover, their rivet heads showing in rows across the outer face, fastened with leather straps and buckles at the shoulders and sides.',
    note: `Not a photograph of an object. It is used because ${WHY_ARMOUR} — what survives, above all from the Wisby grave pits of 1361, is corroded plates whose textile covering has rotted away entirely, so no surviving example can show the garment as it was worn. The hidden plates are the defining feature and separate it from a brigandine, where the plates are smaller and more numerous, and from lamellar, where they are laced on the outside. It follows the Wisby type rather than one identified find.`,
    demote: 'Regional variations and surviving pieces',
    demoteNote:
      'The interior of a surviving coat of plates, showing the iron plates riveted to their fabric backing — the construction the outer cover concealed, and effectively all that survives of these garments.'
  }
]

for (const it of items) {
  const e = wa(it.id)
  if (!e) throw new Error(`missing article ${it.id}`)
  const old = { image: e.image, info: e.imageInfo }
  const titles = (e.contentSections ?? []).map((s) => s.title)
  if (!titles.includes(it.demote)) throw new Error(`${it.id}: no section "${it.demote}"`)

  e.image = it.file
  e.imageInfo = {
    caption: it.caption,
    creator: 'AI-generated for The Iron Codex',
    date: 'generated 2026',
    source: 'The Iron Codex (AI illustration)',
    sourceUrl: '',
    aiGenerated: true,
    note: it.note
  }
  e.sectionImages = [
    ...(e.sectionImages ?? []),
    {
      section: it.demote,
      src: old.image,
      alt: old.info?.caption ?? '',
      caption: old.info?.caption ?? '',
      creator: old.info?.creator ?? 'Unknown',
      date: old.info?.date ?? '',
      source: old.info?.source ?? 'Wikimedia Commons',
      sourceUrl: old.info?.sourceUrl ?? '',
      note: it.demoteNote
    }
  ]
  console.log(`${it.id.padEnd(24)} -> ${it.file}  (previous image kept under "${it.demote}")`)
}

writeFileSync(dataPath, JSON.stringify(data, null, 2))
console.log(`\n${items.length} articles updated; history.json written`)
