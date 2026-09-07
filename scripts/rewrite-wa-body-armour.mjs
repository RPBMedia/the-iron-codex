/**
 * M5 batch 3 — the eight body-armour articles rewritten to the documented
 * standard: seven mandated topics, three substantial paragraphs per section, and
 * named battles, individuals or surviving objects throughout.
 *
 * Only battles with articles are named in prose (Hastings, Arsuf, Bouvines,
 * Crécy, Poitiers, Agincourt, Grunwald, Las Navas de Tolosa) plus Visby, which
 * sits on the tracked BATTLE_BACKLOG.
 */
import { readFileSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dataPath = path.join(__dirname, '../server/data/history.json')
const data = JSON.parse(readFileSync(dataPath, 'utf8'))
const S = (title, ...paragraphs) => ({ title, paragraphs })

const articles = {
  'mail-armor': [
    S('Overview',
      'Mail is a fabric of interlinked iron rings, and for most of the Middle Ages it was simply what armour meant. It dominates European defence from before the Roman period until the fourteenth century, and it never entirely disappears: it was still being worn at the joints of plate harnesses two centuries after plate had taken the flat surfaces.',
      'Its virtue is that it is armour that behaves like cloth. It bends where the body bends, hangs where the body does not, and covers the awkward transitions — shoulder, elbow, groin — that rigid defences could not span until very late in the period.',
      'The popular term "chain mail" is a nineteenth-century coinage; medieval writers said simply mail, from the Latin macula, a mesh. The doubling is harmless in casual use but it obscures that mail is a material rather than a shape, and the same fabric was cut into shirts, hoods, leggings and collars.'),
    S('Design and construction',
      'The standard European weave is four-in-one: every ring passes through four others, so force applied at one point is distributed across the surrounding fabric rather than concentrated where it landed. Rings run in rows, and shaping is done by adding or dropping rings, exactly as a knitted garment is shaped.',
      'Making it is relentless. Iron was drawn into wire, wound around a rod, cut into open rings, each overlapped and pierced, and each closed with a tiny rivet. A knee-length hauberk contains something in the order of twenty to thirty thousand rings, every one handled individually — which is why mail was expensive as labour long before it was expensive as metal.',
      'Many surviving garments alternate rows of riveted rings with rows punched whole from sheet. The solid rows need no riveting and speed the work considerably, and the resulting fabric is as strong along the riveted rows where it matters most — a genuine manufacturing economy rather than a corner cut.'),
    S('Protection and battlefield role',
      'Against a cutting edge, mail is close to unbeatable. A sword drawn across riveted rings cannot part them, and the wound that would have opened an arm becomes a bruise. In a period when the sword, the axe and the spear did most of the killing, that covers most of what a fighter feared.',
      'It was never worn alone. Beneath it went a padded garment, without which the fabric simply transmits the blow: mail stops the edge but does nothing about the force behind it. The pairing of mail and padding is a single system, and any account of mail that omits the padding misdescribes how it worked.',
      'Its performance against arrows is the most argued point in the subject. Contemporary accounts cut both ways — Baha ad-Din describes crusader infantry at the Battle of Arsuf in 1191 marching on with arrows standing in their mail — and modern testing gives results that vary enormously with bow, range, arrowhead and the quality of the rings. The honest position is that mail defeated many arrows and not all of them.'),
    S('Strengths and limitations',
      'Its strengths are coverage, flexibility and repairability. A torn section can be patched ring by ring, a shirt can be enlarged or cut down, and a garment could pass through several owners across decades — which is exactly why so little survives intact.',
      'Its weakness is the point. A narrow, stiff spike driven with force can burst a rivet or spread a ring, and the fourteenth century produced a family of weapons designed to do precisely that. The rise of the rondel dagger, the armour-piercing arrowhead and the reinforced sword point are all arguments against mail.',
      'It is also unhelpful against blunt force. A mace or a poleaxe delivers its damage through the fabric regardless of whether the rings hold, which is why concussive weapons kept their place throughout the mail centuries and grew more important as plate arrived.'),
    S('Historical development',
      'Mail reaches medieval Europe from the Roman world, where the lorica hamata had been standard for centuries, and there is no real break in the tradition: the technique passes directly through the migration period into early medieval workshops.',
      'From the eleventh to the thirteenth century it is the principal armour of anyone who can afford it, and its coverage steadily expands — sleeves lengthen into mittens, the coif becomes standard, and mail leggings appear for those who fight mounted.',
      'The fourteenth century begins its retreat. Plate defences are strapped over mail at knee, elbow and shoulder, then across the torso, until by about 1420 the harness is plate and the mail survives only as gussets filling the gaps. The retreat is gradual, deliberate and driven by the thrust.'),
    S('Regional variation and surviving examples',
      'European mail is remarkably uniform, which makes loose fragments notoriously hard to attribute or date. Ring diameter, wire thickness and rivet type vary between workshops and periods, but not in ways that map neatly onto regions.',
      'The Visby grave pits of 1361 remain the single most valuable source, because the dead of that engagement were buried in their equipment and mail was recovered alongside the plate defences actually worn with it — a dated, complete assemblage rather than isolated pieces.',
      'Most mail in museum collections has been repaired, reassembled or partly remade, often in the nineteenth century when armour was collected enthusiastically and restored freely. Assessing any given garment means asking which of its rings are medieval, and the answer is frequently uncertain.'),
    S('Legacy',
      'Mail is the longest-serving armour in European history, and its persistence into the plate era is the clearest evidence that medieval armourers chose materials by function rather than fashion. It survived where flexibility mattered because nothing else worked there.',
      'It also outlived European warfare in the archaeological sense: mail continued in use across South Asia and the Middle East long after it vanished from Western battlefields, and much of what museums hold comes from those later traditions rather than from medieval Europe.',
      'Its modern descendants are industrial rather than military. Butcher\'s gloves and shark-resistant suits are riveted mail by another name, still doing the one thing mail has always done best — stopping a blade from parting flesh.')
  ],

  hauberk: [
    S('Overview',
      'The hauberk is the mail shirt: a knee- or thigh-length garment of riveted rings with long sleeves, the principal body defence of the European warrior from the eleventh century to the thirteenth. Where mail is the material, the hauberk is the object.',
      'It represents a very large investment. The labour in twenty thousand riveted rings put a hauberk beyond most men, and its ownership is one of the practical markers separating those who fought as a profession from those who were summoned to it.',
      'It is also the garment that defines the visual identity of the high Middle Ages. Almost every armoured figure in the Bayeux Tapestry wears one, and the image of a knee-length mail shirt over a padded garment is the standing picture of the eleventh-century warrior.'),
    S('Design and construction',
      'The body is a tube of mail, widened at the hem and split front and back so the wearer could sit a horse without the skirt binding. The split is a riding feature, and its presence in an image is a reasonable clue that the wearer was expected to be mounted.',
      'Sleeves lengthen through the period. Early hauberks stop at the elbow; by the twelfth century they reach the wrist, and the most complete extend into integral mail mittens with leather palms, which could be left hanging when the hands were needed for anything but fighting.',
      'Many earlier hauberks include an integral coif, so head and body are one garment, and some have a ventail — a flap drawn across the throat and secured at the temple. From the thirteenth century the coif is usually separate, which makes both pieces easier to repair and replace.'),
    S('Protection and battlefield role',
      'Worn over a padded garment, the hauberk covers the torso, arms and thighs against the cut — the great majority of blows in close combat. Its weight, generally in the range of ten to fifteen kilograms, hangs from the shoulders, and a belt at the waist transfers part of it to the hips.',
      'It defined what a charge could survive. The Norman cavalry at the Battle of Hastings in 1066 fought in hauberks against a formation of axes and spears, and the tapestry shows both the protection and its limits — mailed men are shown falling as often as prevailing.',
      'On crusade it was tested against archery in a way European fighting rarely managed. The accounts of the Battle of Arsuf in 1191 describe crusaders advancing under sustained shooting, and the survival of men whose mail was thick with arrows is one of the period\'s more striking testimonies to what the garment could absorb.'),
    S('Strengths and limitations',
      'Its strength is complete, flexible coverage of the body\'s core in a single garment. Nothing else available before the fifteenth century protects so much of a man while leaving him able to ride, climb and fight without adjustment.',
      'Its costs are heat and load. The weight hangs from the shoulders and the padding beneath traps heat, and accounts of campaigns in Syria and Palestine are full of men suffering badly in mail under a summer sun — a limitation the equipment could not design away.',
      'Its vulnerability, as with all mail, is the thrust and the blunt blow. A spear driven hard, a war hammer, or a fall from a horse could disable a man whose rings never parted, which is why plate reinforcements appear first over exactly those areas most likely to take a concentrated hit.'),
    S('Historical development',
      'The hauberk is well established by the tenth century and becomes the standard of the mounted warrior across Latin Europe in the eleventh, spreading with the same social changes that produced the castle and the mounted retinue.',
      'Through the twelfth and thirteenth centuries it grows more complete — longer sleeves, integral mittens, mail leggings worn with it — reaching the fullest coverage mail alone ever achieved at roughly the time of the Battle of Bouvines in 1214 and the Battle of Las Navas de Tolosa in 1212.',
      'The fourteenth century converts it from principal defence to foundation layer. Plate is strapped over it, then a coat of plates or a breastplate covers the torso, and by about 1400 the hauberk has become a shirt worn under a harness rather than the harness itself.'),
    S('Regional variation and surviving examples',
      'Complete medieval hauberks are extremely rare. Mail was too valuable to discard: damaged garments were cut down for gussets and patches, so the archaeological record consists overwhelmingly of fragments and the museum record of composite pieces.',
      'The Visby grave pits are again the exception that proves the rule, preserving mail in a dated context alongside the coats of plates worn over it, which is what makes that assemblage disproportionately important to the study of the whole period.',
      'Regional differences are hard to pin down because the fabric itself is so uniform. What differs is cut — the length of the skirt, whether sleeves end at wrist or mitten — and that is known far better from images and effigies than from surviving garments.'),
    S('Legacy',
      'The hauberk is the definitive object of the crusading centuries, and its silhouette carries the period in later art as reliably as the great helm carries the thirteenth century and full plate the fifteenth.',
      'Its long overlap with plate is the more interesting legacy. For a century the two were worn together, and the resulting transitional harnesses are among the most informative objects in arms history because they show armourers solving a problem in public, one strapped plate at a time.',
      'It also anchors a persistent misunderstanding worth correcting: mail was not primitive armour superseded by a better idea. It was excellent armour against the weapons of its own centuries, and it was displaced only when weapons changed to defeat it specifically.')
  ],

  gambeson: [
    S('Overview',
      'The gambeson is a quilted textile defence: layers of linen or wool stitched into channels and stuffed with tow, wool or rag. It was worn under mail and plate by those who had them, and worn alone as the whole of a man\'s armour by the far greater number who did not.',
      'It is the most widely worn armour of the Middle Ages and the least represented in museums, because textile rots where iron only corrodes. Almost the entire surviving record of medieval armour is metal, which quietly distorts the picture of what medieval armies actually looked like.',
      'It was also indispensable to everything worn over it. Mail without padding transmits the full shock of a blow, and plate without an arming garment has nothing to hang from and nothing to cushion it, so the gambeson is not an alternative to metal armour but its precondition.'),
    S('Design and construction',
      'Construction is quilting on a serious scale. Two layers of stout cloth are stitched in vertical or diagonal channels and the channels stuffed, and the number of layers varies enormously — contemporary references run from a handful to thirty and more, which is the difference between a padded jacket and a genuinely arrow-resistant garment.',
      'The stitching is structural. It holds the stuffing in place so it cannot migrate and leave a thin patch, and the direction of the channels shapes the garment to the body — which is why surviving quilted garments show channels running with the lines of the torso rather than in a plain grid.',
      'An arming garment made to go under plate is a more tailored object again: shaped to the body, fitted with arming points at shoulder, elbow and waist so that plate defences could be tied directly to it. The pourpoint of Charles de Blois, made about 1364 and now in Lyon, is the outstanding surviving example of that tailoring.'),
    S('Protection and battlefield role',
      'Layered textile is genuinely effective against cuts and surprisingly good against arrows, because it defeats a projectile by absorbing and gripping rather than resisting it. A point that would punch through a single thickness is slowed progressively as it drags through successive layers.',
      'It was the ordinary armour of ordinary soldiers. English assize legislation of the twelfth and thirteenth centuries defines equipment by wealth, and for men below the mail-owning ranks the required kit is a padded coat, a helmet and a spear — which is a fair description of most of the infantry in most medieval armies.',
      'Beneath metal it is doing the work no one sees. It spreads the load of a mail shirt across the shoulders and back, keeps rings from being driven into the skin, and absorbs the concussion that mail transmits — the difference between a bruise and a broken bone.'),
    S('Strengths and limitations',
      'Its strengths are cost, availability and comfort. It could be made by a tailor from materials any town had, repaired by anyone, and worn all day. For the price of one hauberk a lord could put padded coats on a great many men.',
      'Its limitations are the thrust and the weather. A determined point will find its way through textile in a way it will not through plate, and a soaked gambeson becomes enormously heavy and takes days to dry — a serious matter on campaign, and one contemporary writers complain about.',
      'It also burns, rots and wears out. Everything that makes it cheap makes it perishable, which is why a garment worn by the majority of medieval soldiers is now known chiefly from images, wills, inventories and a small handful of survivals.'),
    S('Historical development',
      'Padded defences are ancient, and quilted garments are attested across Europe well before the twelfth century, but the gambeson becomes prominent in the written record as mail becomes general — the two spread together, because each needs the other.',
      'Through the thirteenth and fourteenth centuries it develops in two directions at once: heavier, thicker coats worn alone by infantry, and lighter, closely tailored arming doublets made specifically to carry plate.',
      'That second line outlives the first. As full plate matures in the fifteenth century the arming doublet becomes a precise piece of engineering with points and gussets positioned to hang a harness correctly, while the thick standalone gambeson gradually gives way to the brigandine and the jack.'),
    S('Regional variation and surviving examples',
      'Terminology is a thicket: gambeson, aketon, pourpoint, jack and doublet overlap across languages and centuries, and the same garment can appear under several names. Any tidy modern distinction between them is a scholarly convenience.',
      'Surviving examples are countable on one hand. The pourpoint of Charles de Blois in Lyon is the best known, and it is a courtly garment rather than a battlefield one, which means the most-studied surviving quilted defence is not typical of what most wearers had.',
      'Everything else comes from images and documents — effigies, manuscript illumination, inventories, and legislation specifying who must own one. It is a rare case where the written record is far richer than the material one.'),
    S('Legacy',
      'The gambeson is the strongest corrective available to a distorted picture of medieval warfare. The armour most medieval soldiers wore was textile, cheap and locally made, not the steel that fills the display cases.',
      'It also demonstrates that armour was a system rather than a set of pieces. Mail and plate both depend on what is under them, and any account that treats the metal in isolation has removed a component the medieval wearer would have considered essential.',
      'Its principle never went away. Layered flexible material that absorbs and grips a projectile is the operating idea behind modern soft body armour, arrived at independently but working for the reasons a fourteenth-century tailor would have recognised.')
  ],

  'coat-of-plates': [
    S('Overview',
      'The coat of plates is a transitional defence of the thirteenth and fourteenth centuries: iron plates riveted to the inside of a fabric or leather garment, worn over mail. From the outside it looks like a sleeveless coat studded with rivet heads; the armour is entirely hidden.',
      'It marks the moment European armourers began putting rigid plate over the torso without abandoning mail. It is neither a mail garment nor a breastplate but a bridge between them, and its brief dominance maps almost exactly onto the century in which that transition happened.',
      'It is also, unusually, an object known primarily from archaeology rather than from museums. The single most important source is a mass grave, and almost everything reliable about its construction comes from there.'),
    S('Design and construction',
      'The garment is a cover of stout linen, canvas or leather, inside which iron plates are laid in overlapping rows and riveted through. The rivet heads show on the outside in regular lines, and reading those lines is how the internal plate layout can be inferred from a painting or an effigy.',
      'Plate arrangements vary widely. Some coats use a few large plates across the chest, others many smaller ones, and most combine sizes — larger over the chest where rigidity matters, smaller over the abdomen and flanks where the body must bend.',
      'It fastens with straps and buckles, usually at the shoulders and down one side or the front, so it could be put on without help. That matters practically: an armour a man can don alone is worth more on campaign than one requiring a servant.'),
    S('Protection and battlefield role',
      'Its purpose is to defeat the thrust that mail could not. A rigid plate spreads a concentrated point across its whole surface, so the spike that would burst a mail ring instead meets an inch of iron backed by the wearer\'s ribs.',
      'Worn over a hauberk, it produces a layered defence of textile, mail and plate, each covering the previous one\'s weakness. That combination is the standard equipment of the well-armed fourteenth-century man-at-arms and is what most figures in armour of that century are actually wearing.',
      'The evidence for its battlefield use is unusually direct. The grave pits from the fighting at Visby on Gotland in 1361 contained around two dozen coats of plates, buried with the men who wore them, and the wounds on those bodies show exactly what the armour stopped and what it did not.'),
    S('Strengths and limitations',
      'Its strength is that it adds rigid protection without sacrificing much movement. The plates are small enough and jointed enough by their fabric backing that the wearer can still bend, twist and mount a horse.',
      'Its weakness is the gaps. Plates overlap but do not interlock, and a determined point can find the seams between them — which is why the armet-era solution was eventually a single shaped breastplate rather than an assembly of small pieces.',
      'The cover is also a liability. Fabric and leather rot, straps break, and the rivets that hold everything together are the first thing to corrode — which is why nearly every surviving example is a set of loose plates and a stain where the garment was.'),
    S('Historical development',
      'Coats of plates appear in the thirteenth century, becoming common from around the middle of it, as the answer to weapons increasingly designed to punch through mail rather than cut it.',
      'They reach their widest use in the first half of the fourteenth century, the equipment of choice for a man-at-arms in the generation that fought at the Battle of Crécy in 1346 and the Battle of Poitiers in 1356.',
      'They are superseded from the later fourteenth century by the solid breastplate, which does the same job better with fewer joints, and by the brigandine, which takes the same hidden-plate principle in the opposite direction — many smaller plates for more flexibility.'),
    S('Regional variation and surviving examples',
      'The Wisby finds dominate the surviving record so completely that the type is often described in their terms, which is a real hazard: an assemblage from one engagement, in one place, in one year, is now standing in for a century of European practice.',
      'What those graves show is a range rather than a standard. Plate counts, sizes and arrangements differ substantially between individual coats, and some are clearly older equipment pressed into service by men who could afford nothing newer.',
      'Elsewhere the object survives mainly as loose plates in museum collections, and as rivet patterns in art. The Metropolitan Museum of Art and the Royal Armouries hold examples, most reconstructed to some degree on modern backings.'),
    S('Legacy',
      'The coat of plates is the clearest single illustration of how medieval armour actually changed — not by replacement, but by layering a new solution over an old one and then gradually letting the old one go.',
      'It also gave the Middle Ages one of its best archaeological windows. The Wisby graves are the closest thing the period offers to a controlled sample of what ordinary combatants wore, and they exist because the dead were buried quickly, in summer, still armoured.',
      'Its direct descendant is the brigandine, which kept the hidden-plate construction for another two centuries after the coat of plates itself had gone — the idea outliving the object.')
  ],

  brigandine: [
    S('Overview',
      'A brigandine is a body defence of many small iron plates riveted inside a fabric cover, most often a stout canvas faced with velvet or another fine textile. The plates are invisible; what shows is the cloth and the ordered rows of rivet heads, frequently gilded.',
      'It is the coat of plates taken to its logical end: more plates, smaller, and therefore far more flexible. Where a coat of plates has a dozen or so, a brigandine may have hundreds, and the resulting garment moves with the body almost like heavy cloth.',
      'It was worn from the late fourteenth century into the sixteenth by an unusually wide social range — infantry, archers, men-at-arms, and wealthy men who wanted armour that looked like clothing.'),
    S('Design and construction',
      'The cover is made first as a garment, then the plates are laid inside in overlapping rows and riveted through from the outside. Because each plate is small and each row overlaps the next, the assembly flexes freely in one direction while remaining rigid against a blow.',
      'The rivets are the decoration as well as the fastening. Gilded or latten-headed rivets in ordered rows across coloured velvet made the brigandine a conspicuous garment, and surviving examples show real care taken over the pattern the heads describe.',
      'Most open down the front and fasten with buckles or lacing, and many have separate shoulder pieces or skirts of the same construction. The best are shaped to the torso with tailored panels, which is what distinguishes an expensive brigandine from a serviceable one.'),
    S('Protection and battlefield role',
      'It gives most of the protection of a breastplate with far more freedom of movement, which is why it appealed to anyone who had to march, shoot or climb rather than sit a horse. Archers and billmen in particular are shown in brigandines throughout the fifteenth century.',
      'The overlapping plates handle a cut easily and resist a thrust well, though not as well as a solid breastplate: a point arriving between rivets can spread the plates apart where a single shaped plate would have turned it.',
      'Its social range is its most interesting feature. The same construction served a common soldier in plain canvas and a captain in crimson velvet with gilt rivets, and the difference between them was covering and tailoring rather than protection.'),
    S('Strengths and limitations',
      'Its strengths are flexibility, concealment and comfort. It distributes weight across the whole torso rather than hanging from the shoulders, and it can be worn under a coat, which matters in a period when going armed in a town was often regulated.',
      'Its limitation is that the fabric does the structural work. When the cover rots or the rivets corrode the whole thing falls apart, and a garment whose plates were sound may still be useless — which is why so few survive with their covers intact.',
      'It is also inferior to plate against the heaviest weapons. Against a poleaxe or a war hammer the many small plates transmit force where a shaped breastplate would deflect it, so the fully armoured man-at-arms of the fifteenth century still preferred plate for the torso.'),
    S('Historical development',
      'The type emerges in the later fourteenth century from the coat of plates, driven by the same demand that produced articulated plate elsewhere on the body: protection that moves.',
      'It becomes ubiquitous in the fifteenth century, worn on every side of the period\'s fighting — in the Hundred Years\' War, in the Italian wars, and by the retinues that fought the English civil wars of the later century.',
      'It survives into the sixteenth century, by which time it has largely become infantry equipment as plate harness becomes the preserve of the wealthy and firearms begin to change what body armour is expected to stop.'),
    S('Regional variation and surviving examples',
      'Italian workshops dominated production and export, and Italian brigandines set the standard for both construction and finish. Northern examples are often plainer, though the difference is one of covering rather than of the plate work beneath.',
      'The Metropolitan Museum of Art and the Royal Armouries hold examples with their coverings substantially intact, which are rare and valuable precisely because the textile survived. Far more common are sets of loose plates whose garment has gone entirely.',
      'A recurring hazard in identification is that a brigandine, a coat of plates and a jack of plate can look similar in a painting, and the differences — plate size, plate count, whether the plates are riveted or sewn — are largely invisible from outside.'),
    S('Legacy',
      'The brigandine is the longest-lived expression of the hidden-plate idea, running for the better part of two centuries and outlasting both the coat of plates that produced it and the mail it supplemented.',
      'It also complicates the neat story of armour progressing from mail to plate. For a century the best-equipped soldiers in Europe had a choice between rigid plate and flexible plate, and many of them chose flexibility.',
      'Its principle survives in modern armour that hides rigid panels inside a fabric carrier, which is the same solution to the same problem — protection that a wearer will actually keep on because it moves with him.')
  ],

  'plate-armor': [
    S('Overview',
      'Plate armour is a full harness of shaped steel plates, articulated at the joints, covering the wearer from head to foot. It reached maturity in the fifteenth century and represents the most sophisticated personal protective equipment made anywhere before the industrial age.',
      'It is not a single object but a system of dozens of pieces, each shaped to a part of the body and linked so that the whole moves. The engineering is in the articulation rather than in the plates: anyone can make a steel box, and the difficulty is making one a man can fight in.',
      'It is also the most misrepresented armour in popular memory, weighed down by a set of persistent myths about immobility that the surviving objects and modern testing both contradict.'),
    S('Design and construction',
      'Each piece is raised and shaped from sheet steel by hammering over stakes, a process of controlled stretching and compression that requires the metal to be worked hot and cold in sequence. The compound curves that make a breastplate deflect a point are the hardest part and the mark of a good armourer.',
      'Articulation is achieved with lames — narrow overlapping plates joined by rivets and internal leathers — so that an elbow or a knee bends through its full range while remaining covered throughout. A well-made harness has no position in which a gap opens.',
      'The harness hangs from an arming doublet rather than from the body. Points sewn to the doublet tie the plates in place, mail gussets fill the hollows at armpit and groin, and the weight is distributed across shoulders, waist and hips rather than borne at any single point.'),
    S('Protection and battlefield role',
      'Against every hand weapon of its period a good harness is close to proof. Cuts glance from curved surfaces, thrusts skid rather than bite, and the surviving fight manuals of the fifteenth century deal with armoured combat by ignoring the plate entirely and attacking the gaps — visor, armpit, groin, the back of the knee.',
      'Its most consequential effect was tactical rather than personal. Armoured men-at-arms fighting on foot became the decisive element of a fifteenth-century battle line, and the weapons that developed to fight them — the poleaxe, the war hammer, the rondel dagger — were designed specifically for the problem plate created.',
      'It did not make a man invulnerable, and the sources are blunt about this. At the Battle of Agincourt in 1415 heavily armoured French men-at-arms advanced across deep mud and arrived exhausted, and many died crushed or suffocated in the press rather than pierced — killed by the conditions their armour made harder to endure.'),
    S('Strengths and limitations',
      'The weight is commonly overstated and the distribution understated. A field harness generally runs between twenty and thirty kilograms — comparable to a modern soldier\'s loaded pack — but spread across the whole body rather than hung from the shoulders, which is why a fit man could run, mount and rise unaided in one.',
      'A study published in 2011 measured the actual cost, having volunteers move on a treadmill in replica harness: the energy expended was roughly double that of moving unarmoured, because the wearer lifts the weight of the leg armour with every stride and because breathing is restricted. That is a serious penalty, and quite different from the popular claim of immobility.',
      'Its real limitations are heat, vision and cost. A closed harness in summer is punishing, a visored helmet narrows the world to a slit, and a good harness represented a sum of money that placed it firmly beyond the ordinary soldier.'),
    S('Historical development',
      'Plate arrives piecemeal through the fourteenth century, strapped over mail at the joints where blows concentrated, then across the torso as the coat of plates and then the solid breastplate.',
      'By about 1420 the transition is complete and the full harness exists as a designed object rather than an accumulation. The following eighty years are its high period, in which the great Italian and German workshops produce the armour that fills museum collections today.',
      'It does not end abruptly with gunpowder. Breastplates were proofed against firearms and worn for another two centuries, but the full harness became progressively less worth its cost as firearms spread, and it retreated to the tournament and the parade ground.'),
    S('Regional variation and surviving examples',
      'Two traditions dominate. Milanese armour is smooth and rounded, built to deflect by shape, and characteristically asymmetric — the left side heavier, since it faces the opponent in the lists. German work is angular, fluted and elongated, deflecting by ridge as well as by curve.',
      'The Churburg armoury in South Tyrol preserves an exceptional group of fifteenth-century harnesses, and the Kunsthistorisches Museum in Vienna, the Royal Armouries and the Metropolitan Museum of Art hold the other major collections.',
      'A caution that applies to almost every displayed harness: many are composites, assembled in later centuries from pieces of different dates and origins. A convincing full harness in a case may be several armours wearing one stand.'),
    S('Legacy',
      'Plate armour is the high-water mark of a craft tradition, and its decline was economic as much as technical — it did not stop working, it stopped being worth what it cost against weapons that could be issued to thousands.',
      'It left an enormous cultural shadow, and most of what that shadow contains is wrong. The knight craned onto his horse, the man who cannot rise when he falls, the armour too heavy to walk in — none of it survives contact with the objects or with anyone who has worn a good reproduction.',
      'What it genuinely bequeathed is a body of engineering knowledge about shaping sheet metal for strength, and the demonstration that protection and mobility are a design problem rather than a straight trade-off.')
  ],

  'gothic-plate-armor': [
    S('Overview',
      'Gothic armour is the German style of full harness that flourished in the second half of the fifteenth century: elongated, sharply waisted, and covered in fluting that catches the light along the length of every plate.',
      'The name is a nineteenth-century borrowing from architecture, applied because the vertical fluting and cusped edges reminded antiquaries of Gothic tracery. It is a modern label for a real stylistic tradition, and the armourers who made it would not have recognised the term.',
      'It is the direct counterpart to the smooth, rounded Milanese style, and the contrast between the two is the clearest case in arms history of two workshops solving the same problem with opposite aesthetics — and both being right.'),
    S('Design and construction',
      'Fluting is the signature and it is structural before it is decorative. A ridge rolled into a plate stiffens it in the same way corrugation stiffens sheet metal, so a fluted plate can be made thinner and lighter than a smooth one of equal rigidity — a real weight saving across a full harness.',
      'The proportions are deliberately elongated. Breastplates are drawn out and waisted, sabatons extend into long points, and edges are cusped and often pierced with decorative borders, producing a silhouette that is unmistakably vertical.',
      'The articulation is superb and is the reason these harnesses are studied so closely. Overlapping lames at elbow, knee and shoulder are shaped so precisely that the joints move through their full range with no gap opening, which is harder than it sounds and harder still while keeping the fluted surface continuous.'),
    S('Protection and battlefield role',
      'A fluted surface deflects unusually well. A point sliding across a ridged plate is diverted along the flute rather than finding purchase, which adds a second deflecting mechanism to the compound curves the plate already has.',
      'It was working armour, not parade equipment, and was worn in the wars of the Empire and the Burgundian conflicts of the 1470s. The men who commissioned these harnesses expected to fight in them, and the wear on surviving examples confirms they did.',
      'Its lightness for a given rigidity mattered most to men fighting on foot, which the fifteenth-century battlefield increasingly demanded of the armoured class — the same pressure that produced the poleaxe as their characteristic weapon.'),
    S('Strengths and limitations',
      'Its strengths are stiffness for weight and superb articulation, and the two are connected: lighter plates make a harness that a man can move in for longer, and better joints mean less of the weight is fighting him.',
      'Its cost is labour. Fluting every plate multiplies the hammer work enormously, and the cusped and pierced borders that finish a good Gothic harness are days of additional effort, which put this armour firmly among the most expensive objects a nobleman owned.',
      'The elongated points and cusped edges are also fragile in a practical sense — long sabaton points were removable for fighting on foot, which tells you the makers knew perfectly well that some of the style was style.'),
    S('Historical development',
      'The tradition develops in the southern German workshops, above all Augsburg, Innsbruck and Nuremberg, from around the 1450s, and reaches its fullest expression in the 1470s and 1480s.',
      'The Helmschmied family of Augsburg and the Treytz workshop in Innsbruck are the best-documented makers, working for the imperial court and for princely customers across Central Europe, and their surviving harnesses define the style.',
      'It gives way around 1500 to the rounder, broader Maximilian style, which keeps the fluting but abandons the elongated silhouette in favour of a wider, heavier form that suits changing fashion in civilian dress as much as changing warfare.'),
    S('Regional variation and surviving examples',
      'The German and Italian traditions are genuinely distinct here, and unusually the difference is visible at a glance: the Milanese harness rounded, smooth and asymmetric, the Gothic angular, fluted and symmetrical.',
      'Export blurred the line considerably. Composite harnesses combining German and Italian pieces were assembled for wealthy customers, and several famous museum harnesses are exactly such marriages rather than the coherent products they appear to be.',
      'The Kunsthistorisches Museum in Vienna holds outstanding examples, as do the Wallace Collection, the Metropolitan Museum of Art and the Churburg armoury. As with all plate, provenance deserves scrutiny: nineteenth-century restoration was extensive and not always documented.'),
    S('Legacy',
      'Gothic armour is what most people picture when they picture a suit of armour, and its silhouette dominates later illustration far out of proportion to the three or four decades in which it was actually made.',
      'Technically its lasting contribution is the demonstration that surface geometry does structural work. Fluting to stiffen a thin plate is a principle industrial sheet metalwork rediscovered centuries later for the same reason.',
      'It also marks a high point of a craft that was about to be undermined. Within two generations firearms had begun to change the calculation, and no later armour would combine this much labour with this much practical purpose.')
  ],

  surcoat: [
    S('Overview',
      'The surcoat is the textile garment worn over armour from the later twelfth century to the fourteenth: a sleeveless coat, generally reaching below the knee and split for riding, belted at the waist and frequently painted or embroidered with its wearer\'s arms.',
      'It protects nothing. Cloth over mail stops no weapon, and the garment survives in the record not because it defended a man but because it identified him, kept the sun off his armour and kept the rain out of it.',
      'It is therefore best understood as part of the heraldic system rather than the armoury. The surcoat, the shield and the crest carry the same devices for the same reason, and the phrase "coat of arms" is a direct memory of the garment.'),
    S('Design and construction',
      'The basic form is simple: two panels of linen or wool joined at the shoulders and sides, sleeveless, open at the neck, with splits front and back so it falls either side of a saddle. Fit is controlled by a belt rather than by tailoring.',
      'Decoration is the expensive part. Arms were applied by painting, by appliqué in coloured cloth, or by embroidery, and a great man\'s surcoat could be silk, lined and richly worked — closer to court dress in cost than to military equipment.',
      'Length and cut change steadily. The long thirteenth-century surcoat gives way to the shorter, tighter cyclas and then to the closely fitted jupon of the later fourteenth century, which is padded, shaped to the breastplate beneath and no longer a loose coat at all.'),
    S('Protection and battlefield role',
      'Its practical functions are real but modest. Cloth over mail shades the metal, which matters considerably on crusade, and sheds rain, which matters everywhere — wet mail rusts fast, and a surcoat is easier to dry than a hauberk.',
      'Its serious function is recognition. Once the great helm closed the face there was no way to identify a man except by what he displayed, and the surcoat put his arms on the largest available surface at exactly the moment that problem became acute.',
      'It also carried allegiance rather than just identity. The military orders are the clearest case — the white surcoat with a red cross of the Templars, the black cross of the Teutonic Knights — where the garment announces an institution rather than a family.'),
    S('Strengths and limitations',
      'As identification it works extremely well, which is why it was adopted so quickly and so universally. A painted coat is visible at a distance, in dust and confusion, from angles where a shield is turned away.',
      'As equipment it is a liability. A loose garment over armour catches on weapons, tangles in a press, and can be gripped by an opponent, which is one reason the long surcoat gives way to the tight jupon and eventually disappears.',
      'And it has no protective value whatever. It is worth being blunt about this, because the surcoat is filed with armour in most collections and museum arrangement quietly implies a function it never had.'),
    S('Historical development',
      'The surcoat appears in the second half of the twelfth century, and its adoption is usually connected with the crusades, where cloth over mail in a hot climate has an obvious appeal — though the identification function spread it far beyond the Latin East.',
      'It is at its longest and loosest through the thirteenth century, the period in which heraldry itself becomes systematic and hereditary, and the two developments are plainly connected.',
      'From the mid-fourteenth century it shortens sharply into the cyclas and then the jupon, and as plate armour becomes complete and polished in the fifteenth century the covering garment disappears almost entirely — a harness good enough to display is not one you cover up.'),
    S('Regional variation and surviving examples',
      'Almost nothing survives, for the usual reason: textile decays, and a garment worn over armour was worn out rather than preserved. What is known comes overwhelmingly from effigies, brasses, seals and manuscript illumination.',
      'The outstanding exception is the jupon of Edward the Black Prince, made about 1376 and preserved with his heraldic achievements at Canterbury Cathedral — a padded, quartered garment of velvet and silk that shows how elaborate the late form had become.',
      'Regional differences are mostly heraldic rather than structural. The garment is much the same across Latin Europe; what varies is the system of arms displayed on it and the conventions governing who could display what.'),
    S('Legacy',
      'The surcoat named heraldry. A coat of arms is literally the coat, and the vocabulary of blazon still describes devices as if they were being placed on a garment worn by a man facing you.',
      'Its institutional descendants are everywhere: the tabard of a herald, the livery of a household, the identifying overgarment of a military order, and by a long chain of descent the modern uniform surcoat and sports shirt bearing a badge.',
      'It is also a useful reminder that not everything worn to war was armour. Identification, allegiance and display were operational requirements in their own right, and the surcoat solved them at a moment when the closing helmet had made them urgent.')
  ]
}

let n = 0
for (const [id, sections] of Object.entries(articles)) {
  const entry = data.weaponsArmor.find((x) => x.id === id)
  if (!entry) throw new Error(`missing article: ${id}`)
  const before = (entry.contentSections ?? []).flatMap((s) => s.paragraphs ?? []).join(' ').length
  entry.contentSections = sections
  const after = sections.flatMap((s) => s.paragraphs).join(' ').length
  console.log(`${id.padEnd(20)} ${String(before).padStart(5)} -> ${String(after).padStart(5)} chars  (${sections.length} sections, ${sections.flatMap((s) => s.paragraphs).length} paragraphs)`)
  n++
}

writeFileSync(dataPath, JSON.stringify(data, null, 2))
console.log(`\n${n} body-armour articles rewritten; history.json written`)
