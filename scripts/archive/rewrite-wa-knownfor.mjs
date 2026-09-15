/**
 * M6 — replace the templated `knownFor` bullets on the 23 Weapons & Armor
 * articles that still carried them.
 *
 * The template read, on every one of them: "…shows how medieval protection
 * balanced cost, mobility, visibility, and resistance to weapons" and "Its form
 * changed as weapons, horse warfare, infantry tactics, and metalworking
 * developed." That is the exact interchangeable prose CLAUDE.md forbids — and on
 * the surcoat it was also false, since a surcoat has no resistance to weapons at
 * all. Twenty-three articles were also below the documented minimum of three
 * bullets.
 *
 * The nineteen weapon articles already carried specific bullets and are left
 * alone; the Longsword benchmark set the standard these follow.
 */
import { readFileSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dataPath = path.join(__dirname, '../server/data/history.json')
const data = JSON.parse(readFileSync(dataPath, 'utf8'))

const knownFor = {
  // ---- helmets -------------------------------------------------------------
  'nasal-helmet': [
    'The single iron bar down the face — the whole identity of the type in one component.',
    'Worn on both sides at the Battle of Hastings and shown throughout the Bayeux Tapestry.',
    'A conical skull shaped to turn a descending cut rather than absorb it.',
    'Built either from one raised piece or riveted in segments over a frame, the spangenhelm method.'
  ],
  'great-helm': [
    'Total enclosure of the head, resting on the shoulders rather than sitting on the skull.',
    'Vision cut to a narrow occularium — the deliberate trade of sight for frontal protection.',
    'Worn over a mail coif or a small skullcap, never directly on the head.',
    'Carried the heraldic crest, which is why the shape survives in coats of arms long after the helmet did.'
  ],
  bascinet: [
    'A pointed skull that deflects a descending blow off to the side.',
    'The aventail, a mail curtain laced to the helmet rim to cover neck and shoulders.',
    'The standard head defence of the fourteenth-century man-at-arms across Western Europe.',
    'Replaced the great helm by offering comparable protection with far better vision and breathing.'
  ],
  'hounskull-bascinet': [
    'The conical visor drawn to a point well in front of the face, so a spear or lance skids away from the eye slots.',
    'Named from the German Hundsgugel, "dog\'s hood" — the "dog-faced" bascinet.',
    'The defining silhouette of the armoured knight from roughly 1380 to 1420.',
    'A visor that could be removed entirely, leaving a plain bascinet underneath.'
  ],
  'kettle-hat': [
    'The wide brim, which stops a blow falling from above and shades the eyes.',
    'Full peripheral vision and unobstructed breathing, unlike every enclosed helmet.',
    'Cheap enough to be the standard infantry helmet for three centuries.',
    'Worn by knights as well, particularly in sieges and on the march.'
  ],
  sallet: [
    'A skull drawn out over the neck into a long swept tail — the feature that names the type.',
    'Paired with a bevor, a separate plate covering chin and throat.',
    'The most common helmet in fifteenth-century Germany and general across Europe after 1450.',
    'German forms carry a long tail; Italian forms are rounder, shorter and closer to the head.'
  ],
  'mail-coif': [
    'A mail hood covering head, neck and shoulders, worn under a helmet rather than instead of one.',
    'Integral to the hauberk in early forms, and a separate garment from the thirteenth century.',
    'What made a great helm wearable, cushioning and covering everything the rigid helmet did not.',
    'Mail rather than a rigid defence, which is why the archive types it as Armor, not Helmet.'
  ],

  // ---- body armour ---------------------------------------------------------
  'mail-armor': [
    'Four-in-one riveted rings, so a blow is spread across the surrounding fabric rather than concentrated where it landed.',
    'Twenty to thirty thousand individually riveted rings in a single knee-length shirt.',
    'Close to unbeatable against the cut, and defeated by a stiff thrust.',
    '"Chain mail" is a nineteenth-century coinage; medieval writers said simply mail.'
  ],
  hauberk: [
    'The knee-length mail shirt, split front and back so its wearer could sit a horse.',
    'Ten to fifteen kilograms hanging from the shoulders, with a belt taking part of it to the hips.',
    'Integral mail mittens and coif in the most complete twelfth-century forms.',
    'Baha ad-Din describes crusaders at the Battle of Arsuf marching on with arrows standing in their mail.'
  ],
  gambeson: [
    'Layered quilted linen that defeats a point by absorbing and gripping it rather than resisting it.',
    'Worn alone as the whole armour of most medieval infantry, and under mail and plate by everyone else.',
    'Required equipment under English assize legislation for men below the mail-owning ranks.',
    'The pourpoint of Charles de Blois in Lyon is the outstanding surviving example.'
  ],
  'coat-of-plates': [
    'Iron plates riveted inside a fabric or leather cover, with only the rivet heads showing outside.',
    'The bridge between the mail hauberk and the solid breastplate.',
    'Around two dozen were recovered from the Visby grave pits of 1361 — the largest group anywhere.',
    'Known chiefly from archaeology, because the cover rots and the rivets corrode.'
  ],
  brigandine: [
    'Hundreds of small plates riveted inside a cover of canvas or velvet.',
    'Ordered rows of gilded rivet heads serving as both fastening and decoration.',
    'Flexible enough for archers and billmen who had to march, shoot and climb.',
    'Worn across the whole social range, from plain canvas to crimson velvet with gilt rivets.'
  ],
  'plate-armor': [
    'A full harness of shaped steel, articulated so that no gap opens through a joint\'s full range.',
    'Twenty to thirty kilograms distributed across the whole body rather than hung from the shoulders.',
    'A 2011 treadmill study measured roughly double the energy cost of moving unarmoured — a real penalty, and not immobility.',
    'Fifteenth-century fight manuals ignore the plate entirely and attack the gaps: visor, armpit, groin, back of the knee.'
  ],
  'gothic-plate-armor': [
    'Fluting that stiffens a thinner plate, saving real weight across a whole harness.',
    'The elongated, sharply waisted South German silhouette of about 1450 to 1500.',
    'The Helmschmied workshop in Augsburg and the Treytz workshop in Innsbruck.',
    '"Gothic" is a nineteenth-century borrowing from architecture, not a term any armourer used.'
  ],

  // ---- garment -------------------------------------------------------------
  surcoat: [
    'A sleeveless cloth coat worn over armour, belted at the waist and split for riding.',
    'It stops no weapon: its functions are identification, shade and shedding rain.',
    'The origin of the phrase "coat of arms" — the arms were literally on the coat.',
    'The Black Prince\'s jupon at Canterbury Cathedral is the outstanding survival.'
  ],

  // ---- shields -------------------------------------------------------------
  shield: [
    'The first piece of defensive equipment most medieval fighters owned and the last they gave up.',
    'Cheap where mail was not — a carpenter could make one, an armourer was not required.',
    'Turned an individual into part of a formation: overlapped shields are harder to break than the men behind them.',
    'Its medieval history is a story of shrinking, as plate armour gradually took over its job.'
  ],
  buckler: [
    'A small round shield held in the fist rather than strapped to the arm.',
    'Too small to hide behind, and designed instead to be thrust out at the opponent\'s hand and blade.',
    'The shield of the street and the fencing school rather than the battlefield line.',
    'Royal Armouries MS I.33, the earliest European fight book, teaches sword and buckler as one system.'
  ],
  'kite-shield': [
    'A long tapering tail that covers the rider\'s left leg, which a round shield leaves exposed.',
    'Round-topped in the eleventh century, flat-topped by the twelfth.',
    'Carried across Latin Europe, Byzantium and the Crusader states alike.',
    'Shown in use throughout the Bayeux Tapestry, on horseback and in the shield wall.'
  ],
  'heater-shield': [
    'The flat-topped triangular shape most people picture when they picture a knight.',
    'The shape on which European heraldry was formalised.',
    'Shorter than the kite shield because mail leg defences had made the long tail unnecessary.',
    'The name is not medieval: nineteenth-century antiquaries thought it resembled the base of a flat iron.'
  ],
  pavise: [
    'A large standing shield that is placed rather than carried.',
    'Cover for a crossbowman during the several seconds spanning leaves him defenceless.',
    'The equipment of prepared positions and siege lines rather than of open manoeuvre.',
    'The Genoese at the Battle of Crécy were destroyed in part because theirs were still in the baggage train.'
  ],

  // ---- named artifacts -----------------------------------------------------
  'sutton-hoo-helmet': [
    'A fixed faceplate with eyes, nose, mouth and moustache — the wearer presented a metal face.',
    'Tinned bronze panels over iron, so it would have looked bright silver rather than dark.',
    'One eyebrow inlaid with garnets over gold foil and the other not, an asymmetry that lit up in firelight.',
    'Recovered as roughly 500 fragments and reconstructed twice; the famous face is a modern assembly of ancient pieces.'
  ],
  'ulfberht-swords': [
    'Around 170 blades carrying the inlaid +VLFBERH+T name, found from Ireland to Russia.',
    'A label covering a corpus made over some two and a half centuries, not one sword.',
    'The best examples are crucible steel far more consistent than European bloomery furnaces normally produced.',
    'Widely counterfeited with misspellings — the earliest well-documented brand piracy in European metalwork.'
  ],
  joyeuse: [
    'The sword used in the coronation of French kings, through to that of Charles X in 1825.',
    'A composite object: a tenth- or eleventh-century pommel, twelfth-century quillons, and later grip and scabbard.',
    'No component dates to Charlemagne\'s lifetime, so the traditional attribution cannot stand as stated.',
    'Its importance is what it asserted about Carolingian descent, not what it could do as a weapon.'
  ]
}

let n = 0
for (const [id, bullets] of Object.entries(knownFor)) {
  const entry = data.weaponsArmor.find((x) => x.id === id)
  if (!entry) throw new Error(`missing article: ${id}`)
  const before = (entry.knownFor ?? []).length
  entry.knownFor = bullets
  console.log(`${id.padEnd(20)} ${before} -> ${bullets.length} bullets`)
  n++
}

writeFileSync(dataPath, JSON.stringify(data, null, 2))
console.log(`\n${n} knownFor lists rewritten; history.json written`)
