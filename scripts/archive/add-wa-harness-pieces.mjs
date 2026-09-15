/**
 * The three uncovered body zones, plus the breastplate.
 *
 * Prompted by the owner asking why the gorget was absent. A body-zone checklist —
 * rather than the prose scan the M8 gap analysis used — found that neck, arms and
 * legs had ZERO coverage between them: `plate-armor` describes a full harness in
 * prose while roughly half of that harness had no article anywhere.
 *
 * Arms and legs are each treated as one article rather than five, because they
 * were made, bought and worn as units and splitting them would fragment the
 * collection for no gain.
 *
 * All images verified in period and European. The Met's holdings skew late and
 * several strong candidates were rejected on date: a German gorget of c. 1550, a
 * Nuremberg leg harness of the 16th century, and Japanese gorgets of the 17th and
 * 18th centuries.
 *
 * The bevor is deferred: no clean standalone photograph of a fifteenth-century
 * example could be found, only a decorated princely piece shown as a crop of a
 * larger harness.
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
    id: 'gorget',
    name: 'Gorget',
    type: 'weaponArmor',
    weaponArmorType: 'Armor',
    aliases: ['neck defence', 'mail standard', 'pisane', 'gorgerin'],
    year: 1480,
    period: 'Late Middle Ages',
    region: 'Western Europe',
    material: 'Riveted mail, or articulated steel plates',
    battlefieldRole: 'Closing the gap between helmet and body armour',
    image: '/gorget-ai.png',
    imageInfo: {
      caption: 'AI-generated illustration of an early plate gorget of the later fifteenth century: articulated lames on sliding rivets, hinged at one side and buckled at the other.',
      creator: 'AI-generated for The Iron Codex',
      date: 'generated 2026',
      source: 'The Iron Codex (AI illustration)',
      sourceUrl: '',
      aiGenerated: true,
      note: 'Not a photograph of an object. It is used because the plate gorget is essentially a sixteenth-century development and no in-period photograph could be sourced: every gorget in the major open collections is later, including a German example of about 1550 and Japanese pieces of the seventeenth and eighteenth centuries, which are outside this archive on both date and region. For most of the Middle Ages the throat was covered by mail or a bevor rather than by a plate collar of this kind.'
    },
    specs: {
      note: 'Medieval neck defence is mostly mail; the articulated plate gorget belongs to the very end of the period and matures afterwards.',
      rows: [
        { label: 'Period', value: 'Mail forms throughout; plate from c. 1480' },
        { label: 'Mail forms', value: 'Coif, standard or pisane — a collar of riveted mail' },
        { label: 'Plate construction', value: 'Front and back plates with articulated lames' },
        { label: 'Articulation', value: 'Sliding rivets, so the collar flexes as the head turns' },
        { label: 'Fastening', value: 'Hinged one side, hook or buckle the other' },
        { label: 'Weight', value: 'c. 1–1.5 kg in plate' },
        { label: 'Overlaps', value: 'Helmet above, breastplate below' },
        { label: 'Role', value: 'Covering the throat, the worst gap in a harness' }
      ]
    },
    summary: 'A gorget covers the throat and upper chest, closing the gap between helmet and body armour — in mail for most of the Middle Ages, and in articulated plate only at the very end.',
    details: 'The throat is the most dangerous opening a harness leaves. Fifteenth-century fight books send the point there first, and everything the medieval armourer did at the neck was an attempt to shut it.',
    knownFor: [
      'Closing the throat — the gap the fight books teach you to attack first.',
      'For most of the Middle Ages this was mail: a coif, a standard, or an aventail.',
      'The articulated plate gorget is a late development, standard only in the sixteenth century.',
      'The last piece of armour still worn, surviving as an officer\'s badge of rank into the twentieth century.'
    ],
    contentSections: [
      S('Overview',
        'A gorget is a defence for the throat and the upper chest, sitting between the helmet above and the body armour below. It exists to close a gap, and the gap it closes is the most dangerous one a harness leaves.',
        'For most of the medieval period it is not a plate at all. The throat was covered by mail — the skirt of a coif, a separate mail collar called a standard or pisane, or the aventail hanging from a bascinet — and by the bevor worn with a sallet.',
        'The articulated steel collar that the word now brings to mind is a late arrival. It appears toward the end of the fifteenth century and becomes standard only in the sixteenth, which places its great period just outside this archive.'),
      S('Design and construction',
        'The mail forms are simple and effective: a collar of riveted rings, either integral to a coif or made separately and worn under or over the body armour, covering the throat and the tops of the shoulders.',
        'The plate gorget is built from a main front plate and a main back plate, each with two or three narrower lames above and below. The lames are joined by sliding rivets, so the collar flexes as the head turns instead of locking it in place.',
        'It hinges on one side and hooks or buckles on the other, and the neck opening is finished with a roped or turned edge for strength. On later harness it also carries the pauldrons, which is a structural job as much as a protective one.'),
      S('Protection and battlefield role',
        'The throat is where an armoured man is killed. The fifteenth-century fight books are explicit: against a man in harness, the point goes to the visor, the armpit, the groin — and the throat, which is closest to the weapon hand and least well covered.',
        'A mail collar answers a cut and a slash well and a determined thrust much less well, which is precisely the weakness that drove the eventual move to plate at this one spot.',
        'The plate gorget also solves an engineering problem. Helmet and breastplate cannot simply meet, because the head must turn; a separate collar lets the helmet rotate on it while the seam stays covered throughout.'),
      S('Strengths and limitations',
        'Its strength is that it addresses a gap nothing else could. A harness with a superb breastplate and a superb helmet is still open at the neck without it.',
        'Its limitation is movement. A rigid collar high under the jaw restricts how far the head can turn and tip, which costs the wearer awareness at exactly the moment he needs it, and no amount of articulation removes that entirely.',
        'It is also uncomfortable in a way the rest of a harness is not. Weight bearing on the collarbones and heat trapped at the throat are constant complaints, and the mail forms it replaced were far easier to wear.'),
      S('Historical development',
        'The mail coif covers the throat from the eleventh century onward, and by the fourteenth a separate mail collar is a recognised item, listed in inventories under names including standard and pisane.',
        'The bascinet\'s aventail does the same job from the mid-fourteenth century, laced to the helmet rim and hanging over the shoulders, and the sallet\'s bevor does it differently from the mid-fifteenth by covering the chin and throat from below.',
        'The articulated plate gorget emerges from these solutions in the last decades of the fifteenth century and becomes general in the sixteenth — after which it outlives every other piece of armour on the body.'),
      S('Regional variation',
        'Italian practice through the fifteenth century tended to attach a bevor-like plate to the breastplate itself, so the throat defence and the body armour were one assembly.',
        'German practice kept them separate, pairing a sallet with a bevor strapped round the neck, which is why the German sallet looks so incomplete without it.',
        'The independent plate gorget that supersedes both is a shared late development rather than a regional one, and by the sixteenth century it is universal across European harness.'),
      S('Surviving examples',
        'In-period examples are scarce, which is itself informative: mail collars were cut up or reused, and the plate gorget barely existed before 1500.',
        'The major collections — the Metropolitan Museum of Art, the Kunsthistorisches Museum in Vienna, the Wallace Collection — hold gorgets in numbers, but overwhelmingly sixteenth century and later.',
        'The best medieval evidence is therefore indirect: effigies and brasses showing mail collars at the throat, manuscript illustration, and the bevors and aventails that survive attached to the helmets they served.'),
      S('Legacy',
        'The gorget is the last piece of armour anyone wore. As harness retreated in the face of firearms it outlasted the limbs, then the cuirass, and remained in use long after the rest had gone.',
        'It then stopped being armour and became a symbol. Shrunk to a crescent of metal hung on a chain, it marked an officer on duty in European armies into the nineteenth century and survived on some uniforms into the twentieth.',
        'That afterlife makes it the clearest case in the archive of a piece of equipment outliving its function entirely — from the plate that shut the deadliest gap in a harness to a badge worn by men who would never be stabbed in the throat.')
    ],
    relatedEntries: {
      weaponsArmor: [
        { title: 'Plate Armor', type: 'weaponArmor', slug: 'plate-armor', label: 'The harness whose seam it closes' },
        { title: 'Mail Coif', type: 'weaponArmor', slug: 'mail-coif', label: 'The medieval throat defence for most of the period' },
        { title: 'Sallet', type: 'weaponArmor', slug: 'sallet', label: 'Worn with a bevor doing the same job' },
        { title: 'Bascinet', type: 'weaponArmor', slug: 'bascinet', label: 'Its aventail covered the throat and shoulders' },
        { title: 'Armet', type: 'weaponArmor', slug: 'armet', label: 'Closed at the throat where a gorget met it' },
        { title: 'Rondel Dagger', type: 'weaponArmor', slug: 'rondel-dagger', label: 'The weapon aimed at the gap it closes' }
      ]
    },
    sources: [
      { title: 'Metropolitan Museum of Art — Arms and Armor department', url: 'https://www.metmuseum.org/art/collection/search?department=4', type: 'museum collection', institution: 'Metropolitan Museum of Art' },
      { title: 'Wallace Collection — European Armoury', url: 'https://www.wallacecollection.org/', type: 'museum collection', institution: 'Wallace Collection' },
      { title: 'Royal Armouries — armour collection', url: 'https://royalarmouries.org/collection/', type: 'museum collection', institution: 'Royal Armouries' }
    ]
  },

  {
    id: 'breastplate',
    name: 'Breastplate',
    type: 'weaponArmor',
    weaponArmorType: 'Armor',
    aliases: ['cuirass', 'Kastenbrust', 'plackart'],
    year: 1420,
    period: 'Late Middle Ages',
    region: 'Italy and the Holy Roman Empire',
    material: 'Steel',
    battlefieldRole: 'The central defence of the torso in a plate harness',
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Breastplate%20%28Kastenbrust%29%20MET%20DP-12882-026.jpg',
    imageInfo: {
      caption: 'A German Kastenbrust breastplate of about 1450, shown complete with its flared skirt and radiating fluting.',
      creator: 'German armourer; photograph by the Metropolitan Museum of Art',
      date: 'c. 1450 (object)',
      source: 'Metropolitan Museum of Art, Arms and Armor / Wikimedia Commons',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Breastplate_(Kastenbrust)_MET_DP-12882-026.jpg',
      note: 'An original surviving breastplate of the distinctive German "box-breast" form, complete and raised from a single plate. Released CC0 under the Met Open Access programme.'
    },
    specs: {
      note: 'Typical ranges for the fifteenth century; breastplates were fitted to an individual and vary considerably.',
      rows: [
        { label: 'Period', value: 'c. 1370–1600 (single-plate forms from c. 1400)' },
        { label: 'Weight', value: 'c. 2.5–5 kg' },
        { label: 'Thickness', value: 'c. 1.5–3 mm, thickest at the centre' },
        { label: 'Construction', value: 'Raised from one plate; later two-piece with a plackart' },
        { label: 'Below it', value: 'A fauld of horizontal lames over the hips' },
        { label: 'Fittings', value: 'Lance rest on the right; straps to a backplate' },
        { label: 'German form', value: 'Kastenbrust — boxy, angular, often fluted' },
        { label: 'Italian form', value: 'Globose — smooth, rounded, deflecting by curve' }
      ]
    },
    summary: 'The breastplate is the shaped steel plate over the chest, and the piece a plate harness is built around.',
    details: 'It works by geometry rather than thickness: compound curves turn a point aside instead of resisting it head-on, which is why a breastplate of two or three millimetres defeats weapons that a flat plate twice as thick would not.',
    knownFor: [
      'Defeats weapons by shape rather than thickness — compound curves turn a point aside.',
      'The German Kastenbrust, boxy and angular, against the smooth globose Italian form.',
      'Carries the lance rest, a bracket taking the shock of the couched charge into the body.',
      'The longest-serving piece of armour on the battlefield, worn by cavalry into the twentieth century.'
    ],
    contentSections: [
      S('Overview',
        'The breastplate is the shaped steel plate covering the chest, and it is the piece around which a plate harness is assembled. Everything else — the gorget above, the fauld below, the arm defences at the sides — attaches to it or against it.',
        'Its arrival marks the real transition to plate armour. As long as the torso was protected by mail or by a coat of plates, a harness was an accumulation of parts; once a single shaped plate covers the chest, the harness becomes a designed object.',
        'It is also the piece that lasted. Long after helmets, limbs and gauntlets had been abandoned, cavalry were still riding out in a breastplate and backplate, and cuirassiers wore them into the twentieth century.'),
      S('Design and construction',
        'It is raised from a single plate of steel by hammering over stakes, and the difficulty is the compound curvature: the surface has to swell over the chest and tuck under the ribs without cracking or thinning.',
        'That shaping is the armour. A curved surface presents a glancing face to almost every angle of attack, so a point that would bite into a flat plate skids off instead, and a breastplate of two to three millimetres does work that a much heavier flat plate could not.',
        'Below it hangs a fauld of horizontal lames covering the hips, and on the right side sits the lance rest — a bracket that takes the shock of a couched lance into the wearer\'s body rather than into his arm. From the mid-fifteenth century many are made in two pieces, a lower plackart overlapping an upper plate so the torso can bend.'),
      S('Protection and battlefield role',
        'Against every hand weapon of the period a good breastplate is effectively proof. Cuts glance, thrusts skid, and the fifteenth-century fight books do not attempt to defeat it at all — they attack the gaps instead.',
        'It is what makes the dismounted man-at-arms of the fifteenth century so formidable. At the Battle of Agincourt in 1415 the French advanced on foot in full harness, and what stopped them was mud, exhaustion and the press rather than any weapon reaching their chests.',
        'Mounted, it carries the lance rest and therefore the entire mechanics of the charge. The breastplate is what allows a rider to deliver the momentum of horse and man through a lance point without being driven out of the saddle.'),
      S('Strengths and limitations',
        'Its strengths are protection and load-bearing. It stops what the period could throw at it, and it distributes the weight of the harness across the torso rather than hanging it from the shoulders.',
        'Its limitations are rigidity and heat. A one-piece breastplate does not bend, so a man in an early form cannot stoop easily — which is exactly what the two-piece plackart construction was invented to fix.',
        'Firearms eventually changed the calculation rather than defeating it outright. Breastplates were made thicker and "proofed" by being shot at, and the dent left by the proof shot became a maker\'s guarantee — but the added weight is what finally drove the rest of the harness away.'),
      S('Historical development',
        'The coat of plates and the brigandine cover the torso with many small plates through the fourteenth century, and the single breastplate emerges from them around 1400 as armourers gained the skill to raise one large piece.',
        'The first half of the fifteenth century produces the two great regional forms: the German Kastenbrust, boxy and angular with a flared skirt, and the Italian globose breastplate, smooth and rounded.',
        'From mid-century the two-piece construction spreads, and after 1500 the form changes with fashion — peascod shapes, heavier proof plates — before contracting to the cavalry cuirass that outlives everything else.'),
      S('Regional variation',
        'The Italian globose form deflects by curvature alone and is characteristic of the Milanese workshops that armed much of Europe. It is smooth, unfluted and shaped to the body.',
        'The German Kastenbrust is its opposite: an angular box-like chest with a sharply flared lower edge, often finished with radiating fluting, and it is one of the most recognisable armour forms of the mid-fifteenth century.',
        'German practice then moves on to the fluted Gothic style, where the fluting stiffens a thinner plate, and the two traditions converge only in the sixteenth century.'),
      S('Surviving examples',
        'Breastplates survive far better than most armour, being large, solid and worth keeping, and every major collection holds them in numbers.',
        'The Metropolitan Museum of Art holds a German Kastenbrust of about 1450 that is among the clearest surviving examples of that form, and the Churburg armoury preserves outstanding Italian breastplates in their original harnesses.',
        'A caution that applies throughout: a breastplate displayed as part of a harness may not belong to it. Composite assembly is extremely common, and a coherent-looking armour is often several armours.'),
      S('Legacy',
        'The breastplate is the longest-serving piece of armour in European history. It outlived the helmet, the limb defences and the gauntlet, and cavalry in several armies still wore one at the outbreak of the First World War.',
        'Its principle — defeat a projectile by presenting it a glancing surface rather than by opposing it — is still how armour is designed, from tank glacis plates to modern helmets.',
        'It also carries the clearest single lesson of medieval armour: thickness is a crude answer, and shape is a better one.')
    ],
    relatedEntries: {
      weaponsArmor: [
        { title: 'Plate Armor', type: 'weaponArmor', slug: 'plate-armor', label: 'The harness it is the centre of' },
        { title: 'Coat of Plates', type: 'weaponArmor', slug: 'coat-of-plates', label: 'The many-plate defence it replaced' },
        { title: 'Gothic Plate Armor', type: 'weaponArmor', slug: 'gothic-plate-armor', label: 'The fluted German development' },
        { title: 'Gorget', type: 'weaponArmor', slug: 'gorget', label: 'Covers the seam above it' },
        { title: 'Lance', type: 'weaponArmor', slug: 'lance', label: 'The lance rest is bolted to it' },
        { title: 'Arquebus', type: 'weaponArmor', slug: 'arquebus', label: 'The threat it was later proofed against' }
      ]
    },
    sources: [
      { title: 'Breastplate (Kastenbrust), Metropolitan Museum of Art', url: 'https://commons.wikimedia.org/wiki/File:Breastplate_(Kastenbrust)_MET_DP-12882-026.jpg', type: 'image source', institution: 'Metropolitan Museum of Art' },
      { title: 'Metropolitan Museum of Art — Arms and Armor department', url: 'https://www.metmuseum.org/art/collection/search?department=4', type: 'museum collection', institution: 'Metropolitan Museum of Art' },
      { title: 'Wallace Collection — European Armoury', url: 'https://www.wallacecollection.org/', type: 'museum collection', institution: 'Wallace Collection' }
    ]
  },

  {
    id: 'arm-harness',
    name: 'Arm Harness',
    type: 'weaponArmor',
    weaponArmorType: 'Armor',
    aliases: ['arm defence', 'pauldron', 'rerebrace', 'couter', 'vambrace', 'spaulder'],
    year: 1400,
    period: 'Late Middle Ages',
    region: 'Italy and the Holy Roman Empire',
    material: 'Steel plates on leather straps, with mail at the joints',
    battlefieldRole: 'Protecting the shoulder, upper arm, elbow and forearm',
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Upper%20Arm%20Defense%20%28Rerebrace%29%20and%20Elbow%20Defense%20%28Couter%29%20MET%2029.150.49%20001august2014.jpg',
    imageInfo: {
      caption: 'An Italian rerebrace and couter of about 1430–40: the upper-arm tube with its winged elbow defence still attached.',
      creator: 'Italian armourer; photograph by the Metropolitan Museum of Art',
      date: 'c. 1430–40 (object)',
      source: 'Metropolitan Museum of Art, Arms and Armor, accession 29.150.49 / Wikimedia Commons',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Upper_Arm_Defense_(Rerebrace)_and_Elbow_Defense_(Couter)_MET_29.150.49_001august2014.jpg',
      note: 'Original surviving components, complete as an upper-arm assembly. The surface mottling is age. Released CC0 under the Met Open Access programme.'
    },
    specs: {
      note: 'Names by position. Fifteenth-century arm harness varies considerably between Italian and German practice.',
      rows: [
        { label: 'Period', value: 'c. 1330–1600 (full plate arms from c. 1400)' },
        { label: 'Pauldron / spaulder', value: 'Shoulder; a pauldron is larger and wraps further' },
        { label: 'Rerebrace', value: 'Upper arm, above the elbow' },
        { label: 'Couter', value: 'Elbow, usually with a fan or wing over the joint' },
        { label: 'Vambrace', value: 'Forearm, below the elbow' },
        { label: 'Besagew', value: 'A disc covering the armpit' },
        { label: 'Weight', value: 'c. 1.5–2.5 kg per arm' },
        { label: 'Role', value: 'Covering the limb held nearest the enemy' }
      ]
    },
    summary: 'The arm harness is the assembly of plates covering shoulder, upper arm, elbow and forearm — pauldron, rerebrace, couter and vambrace.',
    details: 'The arms are held forward of everything else, so they take blows first, and the armpit behind them is one of the killing gaps a whole family of weapons was designed to find.',
    knownFor: [
      'Four pieces by position: pauldron, rerebrace, couter, vambrace.',
      'The couter carries a fan or wing shielding the inside of the elbow.',
      'The besagew, a disc hung over the armpit — one of the deadliest gaps in a harness.',
      'Italian arms are asymmetric, the left made heavier because it faces the opponent.'
    ],
    contentSections: [
      S('Overview',
        'An arm harness is not one object but an assembly, named by position: a pauldron or spaulder over the shoulder, a rerebrace on the upper arm, a couter at the elbow, and a vambrace on the forearm.',
        'The problem it solves is the hardest in armour after the hand. The arm has two major joints, it must move through a very wide range, and it is held out in front of the body where it takes blows before anything else does.',
        'Its solution is articulation: rigid plates over the long bones, overlapping lames across the joints, and mail filling what plate cannot reach.'),
      S('Design and construction',
        'The rerebrace and vambrace are tubes, each usually made in two halves hinged along one side and closed with a strap, so they can be sprung open to get the arm in and then shut around it.',
        'The couter spans the elbow with a shaped cop, and its distinguishing feature is the fan or wing standing out on the outer side, covering the joint when the arm bends and shielding the inside of the elbow from a thrust.',
        'The shoulder is either a spaulder — narrow, following the shoulder line — or a pauldron, which is larger and wraps over the shoulder onto the chest and back. Where the pauldron leaves a gap at the armpit, a besagew, a small disc on a strap, hangs across it.'),
      S('Protection and battlefield role',
        'The arms are the first thing an opponent can reach, and the fight books say so. A cut to an unarmoured arm ends a fight as decisively as one to the head, and any harness that leaves the arms bare is not a harness.',
        'The armpit is the real prize. It cannot be covered in rigid plate without stopping the arm moving, so it is filled with mail and shielded by the besagew, and the fifteenth-century armoured-combat manuals send the point there again and again.',
        'The whole assembly also has to permit half-swording, poleaxe work and grappling, which is a demanding requirement: the wearer must be able to bring both hands together in front of his chest and above his head without a gap opening anywhere.'),
      S('Strengths and limitations',
        'Its strength is that it covers a moving limb completely. A well-made fifteenth-century arm harness has no position within the arm\'s natural range in which bare flesh is exposed.',
        'Its limitation is the trade against reach and weight. Every lame added to a joint improves coverage and costs a little movement, and the arms are where a wearer notices added weight most because he is lifting it constantly.',
        'The joints are also where a harness fails first. Straps wear, leathers rot and rivets shear, and loose arm defences shift out of position at exactly the moment they are needed.'),
      S('Historical development',
        'Through the thirteenth century the arm is protected by the sleeve of a mail hauberk and nothing else. From the early fourteenth, plate cops are strapped over the mail at the elbow — the first plate on the arm anywhere.',
        'Splinted defences and hardened leather follow, and by about 1400 the full plate arm exists: shoulder, upper arm, elbow and forearm all in articulated steel, with mail surviving only at the armpit.',
        'The fifteenth century refines articulation rather than adding coverage, and the sixteenth adds bulk and decoration before the whole assembly is abandoned as firearms make it not worth its weight.'),
      S('Regional variation',
        'Italian arm harness is characteristically asymmetric. The left arm faces the opponent in the lists and in the charge, so its pauldron is made larger and heavier, while the right is cut away to let the lance and sword arm work.',
        'German gothic arms are narrower, more sharply pointed and fluted in line with the rest of the harness, and German practice tends to prefer spaulders where Italian prefers the wrap-around pauldron.',
        'Both traditions converge on the same underlying answer, and the differences are in emphasis rather than in mechanism.'),
      S('Surviving examples',
        'Arm defences survive in reasonable numbers because they are solid and worth keeping, though usually separated from the harnesses they belonged to.',
        'The Metropolitan Museum of Art holds Italian rerebraces and couters of about 1430 to 1440 that show the mature form clearly, and the Churburg armoury preserves complete arms on their original harnesses.',
        'A besagew or a loose couter is common in collections; a matched pair of complete arms with their original straps is rare, because the leather is the first thing to go.'),
      S('Legacy',
        'The arm harness is the best demonstration in the archive of articulation as an engineering discipline. Covering a two-jointed limb through its full range without opening a gap is a harder problem than covering a torso, and fifteenth-century armourers solved it.',
        'Its solutions — overlapping lames on sliding rivets, rigid shells over long bones, flexible material at the joints — are the same ones used in modern protective equipment for the same reasons.',
        'It also explains the shape of late medieval fighting. Because the arms were covered and the armpits were not, an entire family of weapons and techniques grew up around reaching a gap the size of a hand.')
    ],
    relatedEntries: {
      weaponsArmor: [
        { title: 'Plate Armor', type: 'weaponArmor', slug: 'plate-armor', label: 'The harness it forms part of' },
        { title: 'Leg Harness', type: 'weaponArmor', slug: 'leg-harness', label: 'The same problem solved for the legs' },
        { title: 'Gauntlet', type: 'weaponArmor', slug: 'gauntlet', label: 'What the vambrace runs into' },
        { title: 'Mail Armor', type: 'weaponArmor', slug: 'mail-armor', label: 'Fills the armpit where plate cannot reach' },
        { title: 'Rondel Dagger', type: 'weaponArmor', slug: 'rondel-dagger', label: 'Aimed at the armpit it cannot fully close' },
        { title: 'Longsword', type: 'weaponArmor', slug: 'longsword', label: 'Half-swording depends on the arms articulating' }
      ]
    },
    sources: [
      { title: 'Rerebrace and couter, Metropolitan Museum of Art acc. 29.150.49', url: 'https://commons.wikimedia.org/wiki/File:Upper_Arm_Defense_(Rerebrace)_and_Elbow_Defense_(Couter)_MET_29.150.49_001august2014.jpg', type: 'image source', institution: 'Metropolitan Museum of Art' },
      { title: 'Metropolitan Museum of Art — Arms and Armor department', url: 'https://www.metmuseum.org/art/collection/search?department=4', type: 'museum collection', institution: 'Metropolitan Museum of Art' },
      { title: 'Wallace Collection — European Armoury', url: 'https://www.wallacecollection.org/', type: 'museum collection', institution: 'Wallace Collection' }
    ]
  },

  {
    id: 'leg-harness',
    name: 'Leg Harness',
    type: 'weaponArmor',
    weaponArmorType: 'Armor',
    aliases: ['leg defence', 'cuisse', 'poleyn', 'greave', 'sabaton', 'chausses'],
    year: 1400,
    period: 'Late Middle Ages',
    region: 'Italy and the Holy Roman Empire',
    material: 'Steel plates on leather straps, over mail or padded hose',
    battlefieldRole: 'Protecting the thigh, knee, shin and foot',
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Pair%20of%20Thigh%20Defenses%20%28Cuisses%29%20with%20Knee%20Defenses%20%28Poleyns%29%20MET%2029.158.278a%20001Sept2014.jpg',
    imageInfo: {
      caption: 'An Italian cuisse with its poleyn, of about 1425–50, showing the thigh plate and the winged knee defence.',
      creator: 'Italian armourer; photograph by the Metropolitan Museum of Art',
      date: 'c. 1425–50, with later elements (object)',
      source: 'Metropolitan Museum of Art, Arms and Armor, accession 29.158.278a / Wikimedia Commons',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Pair_of_Thigh_Defenses_(Cuisses)_with_Knee_Defenses_(Poleyns)_MET_29.158.278a_001Sept2014.jpg',
      note: 'Original surviving components. The Met records the assembly as of about 1425–50 and later, so some elements are additions — normal for armour parts kept in use across generations. Released CC0 under the Met Open Access programme.'
    },
    specs: {
      note: 'Names by position. Mail chausses precede plate and continue alongside it at the joints.',
      rows: [
        { label: 'Period', value: 'Mail from the 12th c.; full plate legs from c. 1350' },
        { label: 'Cuisse', value: 'Thigh, from hip to knee' },
        { label: 'Poleyn', value: 'Knee, usually with a side wing' },
        { label: 'Greave', value: 'Shin and calf, in two hinged halves' },
        { label: 'Sabaton', value: 'Foot, built of overlapping lames' },
        { label: 'Chausses', value: 'Mail leggings, the earlier solution' },
        { label: 'Weight', value: 'c. 3–5 kg per leg' },
        { label: 'Role', value: 'Covering the limbs that carry everything else' }
      ]
    },
    summary: 'The leg harness covers thigh, knee, shin and foot — cuisse, poleyn, greave and sabaton — over mail or padded hose.',
    details: 'Legs were armoured early and thoroughly, because a mounted man\'s legs are at the height of an infantryman\'s weapon and a dismounted man who is hamstrung is finished.',
    knownFor: [
      'Four pieces by position: cuisse, poleyn, greave, sabaton.',
      'The greave is made in two hinged halves closing around the calf.',
      'Mail chausses were the earlier solution and survived at the joints.',
      'Leg armour costs more stamina than any other part — the wearer lifts it with every stride.'
    ],
    contentSections: [
      S('Overview',
        'A leg harness is the assembly covering the lower limb: a cuisse over the thigh, a poleyn at the knee, a greave on the shin and calf, and a sabaton over the foot.',
        'Legs were armoured early. A rider\'s legs hang at exactly the height an infantryman can reach, and a man on foot whose knee or thigh is opened is out of the fight immediately, so the leg is one of the first places plate appears.',
        'It is also the most expensive coverage in stamina. Weight on the leg is lifted with every stride, which is why armoured men fighting on foot tire so much faster than the same men standing still.'),
      S('Design and construction',
        'The cuisse is a plate shaped to the front of the thigh, strapped round the back and often hung from a belt or from the fauld so its weight is carried at the waist rather than by the leg itself.',
        'The poleyn caps the knee and usually carries a wing on the outer side, guarding the joint\'s vulnerable outer face. It is joined to the cuisse and greave by short articulating lames so the knee bends fully.',
        'The greave is made in two halves hinged down one side and closed with hooks or straps on the other, enclosing the calf completely. Below it the sabaton is built from overlapping lames, following the foot and flexing as it does.'),
      S('Protection and battlefield role',
        'Mounted, the legs are the most exposed part of the rider. Infantry attack them because they are within reach when nothing else is, and a rider brought down by a leg wound is as beaten as one unhorsed.',
        'On foot, the legs are the target of choice in armoured combat after the gaps. The fifteenth-century manuals include strikes and hooks to the knee and ankle, and the poleaxe\'s beak was used for exactly that.',
        'The sabaton is a compromise the other pieces are not. Long-pointed sabatons were fashionable and their points were removable, because a knight who dismounted needed to walk and fight rather than pose.'),
      S('Strengths and limitations',
        'Its strength is complete coverage of a limb that is both exposed and structurally critical. The legs carry the whole harness, and a man whose leg fails is finished regardless of how good his breastplate is.',
        'Its cost is measurable. The 2011 study that put a full harness at roughly double the energy cost of moving unarmoured attributes much of that to leg armour specifically, because it is lifted and swung with every step rather than merely carried.',
        'The joints are the weakness, as always. The back of the knee cannot be plated without stopping it bending, so it is left to mail or padding — and the fight books know it.'),
      S('Historical development',
        'Mail chausses — leggings of riveted mail, laced to a belt — are the twelfth- and thirteenth-century solution, and they are as expensive and heavy as a hauberk for a much smaller area.',
        'Plate arrives at the knee first, as poleyns strapped over the mail in the late thirteenth and early fourteenth century, for the same reason plate arrived first at the elbow: the joints are where a blow concentrates.',
        'Through the fourteenth century cuisses, greaves and sabatons follow, and by about 1400 the leg is fully plated with mail surviving only behind the knee. The sixteenth century then begins shedding it, and leg armour is among the first parts of a harness to be abandoned.'),
      S('Regional variation',
        'Italian legs are smooth and rounded, matching the globose breastplate, and Milanese work is generously proportioned with heavy poleyn wings.',
        'German gothic legs are narrower, fluted and drawn to points, with the long pointed sabaton at its most extreme in the later fifteenth century.',
        'Practice also differs by use. A harness for fighting on foot dispenses with the long sabaton points entirely and often uses a heavier, more enclosed greave.'),
      S('Surviving examples',
        'Leg components survive in fair numbers but usually detached, and matched pairs on their original harness are much rarer than single cuisses or greaves.',
        'The Metropolitan Museum of Art holds Italian cuisses with poleyns of about 1425 to 1450, and the Churburg armoury preserves complete legs on fifteenth-century harnesses.',
        'The Met records its example as being of that date "and later", which is the normal condition of armour parts: pieces were repaired and replaced across generations, and a leg harness in a case is often a working assembly rather than one moment.'),
      S('Legacy',
        'Leg armour is the clearest measure of what a harness actually cost its wearer. It is the part that tires a man, and the first part abandoned once firearms made the whole system a poorer bargain.',
        'It also shows how completely medieval armour followed the threat. Legs were armoured early and heavily because that is where mounted men were attacked, and lightened as soon as the fighting changed.',
        'Its descendants are narrow but real: the knee and shin protection of modern motorcycling and industrial equipment solves the same problem with the same anatomy, and arrives at strikingly similar shapes.')
    ],
    relatedEntries: {
      weaponsArmor: [
        { title: 'Plate Armor', type: 'weaponArmor', slug: 'plate-armor', label: 'The harness it forms part of' },
        { title: 'Arm Harness', type: 'weaponArmor', slug: 'arm-harness', label: 'The same problem solved for the arms' },
        { title: 'Mail Armor', type: 'weaponArmor', slug: 'mail-armor', label: 'Chausses were the earlier solution' },
        { title: 'Poleaxe', type: 'weaponArmor', slug: 'poleaxe', label: 'Its beak was used to hook the knee and ankle' },
        { title: 'Barding', type: 'weaponArmor', slug: 'barding', label: 'Protecting the horse the legs hung either side of' },
        { title: 'Gothic Plate Armor', type: 'weaponArmor', slug: 'gothic-plate-armor', label: 'The long pointed sabaton at its most extreme' }
      ]
    },
    sources: [
      { title: 'Cuisses with poleyns, Metropolitan Museum of Art acc. 29.158.278a', url: 'https://commons.wikimedia.org/wiki/File:Pair_of_Thigh_Defenses_(Cuisses)_with_Knee_Defenses_(Poleyns)_MET_29.158.278a_001Sept2014.jpg', type: 'image source', institution: 'Metropolitan Museum of Art' },
      { title: 'Metropolitan Museum of Art — Arms and Armor department', url: 'https://www.metmuseum.org/art/collection/search?department=4', type: 'museum collection', institution: 'Metropolitan Museum of Art' },
      { title: 'Royal Armouries — armour collection', url: 'https://royalarmouries.org/collection/', type: 'museum collection', institution: 'Royal Armouries' }
    ]
  }
]

let n = 0
for (const article of articles) {
  if (data.weaponsArmor.some((x) => x.id === article.id)) throw new Error(`already exists: ${article.id}`)
  data.weaponsArmor.push(article)
  console.log(`+ ${article.id.padEnd(13)} ${article.contentSections.length} sections, ${article.contentSections.flatMap((s) => s.paragraphs).join(' ').length} chars`)
  n++
}

const get = (id) => {
  const e = data.weaponsArmor.find((x) => x.id === id)
  if (!e) throw new Error(`missing: ${id}`)
  return e
}
const backLinks = {
  'plate-armor': [
    { title: 'Breastplate', slug: 'breastplate', label: 'The plate the whole harness is built around' },
    { title: 'Arm Harness', slug: 'arm-harness', label: 'Shoulder, upper arm, elbow and forearm' },
    { title: 'Leg Harness', slug: 'leg-harness', label: 'Thigh, knee, shin and foot' },
    { title: 'Gorget', slug: 'gorget', label: 'Closes the seam between helmet and cuirass' }
  ],
  'coat-of-plates': [{ title: 'Breastplate', slug: 'breastplate', label: 'The single plate that replaced it' }],
  'mail-coif': [{ title: 'Gorget', slug: 'gorget', label: 'The later plate answer at the throat' }],
  gauntlet: [{ title: 'Arm Harness', slug: 'arm-harness', label: 'What the gauntlet cuff runs into' }],
  'mail-armor': [{ title: 'Leg Harness', slug: 'leg-harness', label: 'Chausses were the mail solution for the legs' }]
}
for (const [id, entries] of Object.entries(backLinks)) {
  ;(get(id).relatedEntries.weaponsArmor ??= []).push(...entries.map((e) => ({ ...e, type: 'weaponArmor' })))
  console.log(`  back-link ${id} -> ${entries.map((e) => e.slug).join(', ')}`)
}

writeFileSync(dataPath, JSON.stringify(data, null, 2))
console.log(`\n${n} articles added; weaponsArmor now ${data.weaponsArmor.length}`)
