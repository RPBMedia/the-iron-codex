/**
 * M5 batch 2 — the seven helmet articles rewritten to the documented standard.
 *
 * Same shape as batch 1: the seven topics CLAUDE.md mandates for a defensive
 * article, three substantial paragraphs per section, and at least one named
 * battle, individual or surviving museum object per article.
 *
 * Only battles with articles are named in prose (Hastings, Bouvines, Crécy,
 * Poitiers, Agincourt, Grunwald, Nicopolis, Castillon, Arsuf, Hattin) plus Visby,
 * which sits on the tracked BATTLE_BACKLOG.
 */
import { readFileSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dataPath = path.join(__dirname, '../server/data/history.json')
const data = JSON.parse(readFileSync(dataPath, 'utf8'))
const S = (title, ...paragraphs) => ({ title, paragraphs })

const articles = {
  'nasal-helmet': [
    S('Overview',
      'The nasal helmet is the standard head defence of Western Europe from roughly the ninth century to the twelfth: a conical or rounded skull with a single bar of iron descending over the nose. It is the helmet of the Norman Conquest, of the early crusades, and of most of the fighting in between.',
      'Its design is a compromise reached deliberately rather than by default. A fully enclosed helmet protects better but blinds and deafens the wearer; an open skull leaves the face bare. The nasal covers the one part of an exposed face that a downward cut most reliably finds, and costs almost nothing in vision or breathing.',
      'It is also the last European helmet that assumes a man will be recognised by his face. Once helmets close, identification has to move onto shields, surcoats and crests — so the nasal helmet marks the end of an era in more than construction.'),
    S('Design and construction',
      'Two construction methods coexist. The older is the spangenhelm: an iron framework of a browband and arching bands riveted together, with the gaps filled by plates of iron or horn. It is economical, because it needs no single large piece of good iron, and it is forgiving of the variable metal available to an early medieval smith.',
      'The alternative, increasingly common from the eleventh century, is a skull raised from a single plate. This is harder — it demands a smith who can sink and stretch iron without tearing it — but the result has no seams for a blade to catch and is stronger for its weight. The shift from segmented to one-piece skulls tracks improving metalworking as much as changing taste.',
      'The nasal itself is usually forged with the browband or riveted to it, and its width varies from a slender bar to a broad plate covering much of the nose and cheeks. Inside, the helmet was worn over a padded cap and often a mail coif; the helmet resists the edge, the padding absorbs the shock.'),
    S('Protection and battlefield role',
      'The nasal helmet is designed against the cut that arrives from above, which is the blow a mounted opponent or a man in a press most naturally delivers. A conical skull is particularly good at this: a curved, sloped surface turns a descending edge outward rather than stopping it, so much of the energy never reaches the head at all.',
      'Its combination with a mail coif is the point. The helmet takes the crown, the coif takes the neck and sides, and the two together cover almost everything without closing the wearer in. This is the system that fought at the Battle of Hastings in 1066, and the Bayeux Tapestry shows it worn on both sides almost universally.',
      'It travelled well. The same helmet appears on crusade, and forms of it were worn at the Battle of Arsuf in 1191 and across the Latin East, where its ventilation was a practical advantage in a climate that made closed helmets punishing.'),
    S('Strengths and limitations',
      'Its strengths are vision, hearing, breathing and weight. A man in a nasal helmet can see his flanks, hear an order and breathe freely through a long fight, which are not small things in a formation where losing awareness is more dangerous than losing armour.',
      'Its limitation is the open face. A thrust, and particularly a thrust from a spear or the point of a sword, can reach the eyes and mouth around the nasal, and the whole later history of European helmets is the history of closing that gap.',
      'The nasal bar also caught. Contemporary accounts describe helmets wrenched by a hand or a weapon hooked into the nasal, and the fixed bar gives an opponent a purchase that a smooth face does not — one reason later designs preferred a full visor or none.'),
    S('Historical development',
      'The type has late Roman and migration-period ancestry, and spangenhelm construction is well attested across early medieval Europe before the nasal becomes standard. By the tenth century the conical skull with nasal is recognisable across Frankish, Anglo-Saxon and Scandinavian use.',
      'It reaches its widest currency in the eleventh and early twelfth centuries, the period the Bayeux Tapestry documents so fully. During the twelfth century the skull becomes rounder and taller, and cheek and neck extensions begin to appear.',
      'From the late twelfth century the face closes. Extensions grow across the cheeks, a face-plate is added, and the result is the enclosed helm and then the great helm — a continuous development in which the nasal helmet is the recognisable starting point rather than a separate tradition.'),
    S('Regional variation and surviving examples',
      'Genuine early medieval helmets are extremely rare, and most claimed "Viking helmets" in popular use are nothing of the kind. The Gjermundbu helmet from Norway, of about the tenth century, is the only near-complete Scandinavian helmet of its age, and it carries a spectacle-shaped guard over the eyes rather than a simple nasal.',
      'The helmet preserved in the treasury of St Vitus Cathedral in Prague, associated by tradition with St Wenceslas, is among the finest surviving European examples of the type, with a decorated nasal worked into the browband. Its traditional attribution is devotional rather than documented, and should be read that way.',
      'Central and Eastern European finds show related forms with more pronounced points and applied decoration, and helmets of broadly this family were used well beyond Latin Europe. The regional boundaries drawn in modern typologies are considerably sharper than the surviving objects support.'),
    S('Legacy',
      'The nasal helmet is the direct structural ancestor of everything that follows. The great helm, the bascinet and the sallet all descend from the same problem — how much of the face to close — and each is a different answer to the question the nasal bar first posed.',
      'It is also, thanks to the Bayeux Tapestry, one of the most recognisable objects of the Middle Ages, and it fixes the visual identity of the eleventh century in later art as firmly as the heater shield fixes that of the fourteenth.',
      'Its rarity in the archaeological record carries a wider lesson. Helmets were valuable, repairable and reusable, so they were rarely buried and often remade, and the handful of survivors represent a fraction of what was worn.')
  ],

  'great-helm': [
    S('Overview',
      'The great helm is the fully enclosed cylindrical helmet of the thirteenth and fourteenth centuries — a flat-topped drum of riveted plates covering the entire head, pierced by a horizontal sight slit and a scatter of breathing holes.',
      'It is the most complete head protection of the medieval period and the most punishing to wear. It closes the face entirely, which is the whole point, and it does so at severe cost to vision, hearing, breathing and heat, which is why its battlefield life is shorter than its fame suggests.',
      'It is also the helmet that made heraldry necessary. A man inside a great helm is unidentifiable, so the crest on top and the arms on his shield and surcoat stop being ornament and become the practical means by which he is known.'),
    S('Design and construction',
      'The helm is built from several plates — typically a crown, a face plate and one or two side or rear plates — riveted together with the seams overlapped for strength. The flat top of the earlier forms is easy to make but poor at deflecting; later helms are given a rounded or conical crown for exactly that reason.',
      'The face carries a horizontal ocularium, the sight slit, often reinforced with a raised band across the eyes, and below it clusters of pierced holes for breath. The distribution of those holes is usually asymmetric, more numerous on the side away from an opponent\'s lance, which shows how carefully the piece was thought through.',
      'It was never worn alone. Beneath it went a padded arming cap and a mail coif, and by the fourteenth century a close-fitting steel cervelliere or bascinet as well, so that the great helm was the outer layer of a system rather than a single object. Much of its weight rested on the shoulders rather than the head.'),
    S('Protection and battlefield role',
      'The great helm exists for one tactical moment: the mounted charge with a couched lance, where a point arrives at the face at the combined speed of two horses. Against that, an open helmet is inadequate and a closed drum is not excessive.',
      'It was worn in general battle through the thirteenth century, and helms of this family were in use at the Battle of Bouvines in 1214 and across the crusading campaigns of the period. Its decline in the field begins when the compromise becomes unattractive — when the same protection can be had without the blindness.',
      'It kept a long second life in the tournament, where the charge is the whole event, the fight is brief, and restricted vision matters far less than in an all-day battle. Tournament helms grew heavier and more specialised long after field helms had moved on.'),
    S('Strengths and limitations',
      'Its strength is completeness. Nothing else in the thirteenth century closes the face so thoroughly, and against the lance point and the descending sword it is very effective indeed.',
      'Its limitations are severe and were understood at the time. Vision is reduced to a slit, peripheral sight is gone, hearing is muffled, and the interior becomes intensely hot; accounts of men suffocating or collapsing from heat in enclosed helmets are a recurring feature of the sources.',
      'It was therefore often not worn until it was needed. Fighting men carried the helm at the saddle or had it carried for them, donning it before contact and removing it as soon as the press broke — a practice that is itself evidence of how uncomfortable the thing was.'),
    S('Historical development',
      'The type grows out of the nasal helmet through the later twelfth century, as cheek and face plates extend across an open skull until the face is closed. The intermediate enclosed helms of about 1200 are recognisably the same object mid-evolution.',
      'It reaches its classic flat-topped form in the first half of the thirteenth century, then rounds and lengthens through the century, with the crown becoming conical and the lower edge extending toward the shoulders.',
      'In the fourteenth century it is displaced in the field by the bascinet, which offers a visor that can be raised, and retreats to the tournament and to funerary display. By the time of the Battle of Crécy in 1346 the bascinet is the fighting helmet and the great helm is increasingly ceremonial.'),
    S('Regional variation and surviving examples',
      'Surviving great helms are rare and mostly of German and Central European origin. The helm of Albert von Prankh in the Kunsthistorisches Museum in Vienna, of about 1300, is among the best known, and survives with the elaborate crest that would have identified its wearer.',
      'The helm of Hans Rieter von Kornburg in the Germanisches Nationalmuseum in Nuremberg, of the mid-fourteenth century, retains its gilt decorative bands and a mail curtain at the lower edge — a reminder that these were decorated objects rather than bare steel drums.',
      'Many surviving helms are funerary. Hung above a tomb as part of a heraldic achievement, they escaped the recycling that consumed working armour, which means the surviving sample is biased toward the ceremonial and the wealthy.'),
    S('Legacy',
      'The great helm gave heraldry its second element. The crest that sits above a coat of arms in modern armorial display is a direct memory of the crest fixed to the top of a helm so that a man could be known when his face could not be seen.',
      'It also gave later ages their dominant image of the knight. The anonymous steel drum is the visual shorthand for medieval chivalry in Victorian painting and in nearly all modern film and games, despite representing a comparatively brief phase of a long development.',
      'Technically it marks a limit that was tested and rejected. The great helm shows what total enclosure costs, and the entire fifteenth-century development of the visored bascinet and the sallet is an effort to keep its protection while recovering the senses it took away.')
  ],

  bascinet: [
    S('Overview',
      'The bascinet is the dominant fighting helmet of the fourteenth century: a pointed steel skull, close-fitting, hung with a curtain of mail called an aventail that covers the neck and shoulders, and usually fitted with a visor that can be raised.',
      'It solved the problem the great helm had exposed. A visored bascinet closes the face against a lance point when closed and returns sight and air when open, and the wearer chooses which he needs at any moment rather than deciding once before the charge.',
      'It was worn by everyone who could afford it, from men-at-arms to great captains, across the whole of the Hundred Years\' War, and it is the helmet in which most of the famous fourteenth-century engagements were fought.'),
    S('Design and construction',
      'The skull is raised from a single plate into a pointed, ovoid form, higher at the back than the front, so that a blow arriving from any direction meets a slope. The point is not decorative: it is the geometry that turns a descending blade off the head instead of stopping it.',
      'Around the lower edge runs a line of small pierced staples called vervelles, over which a leather band sewn to the top of the mail aventail was fitted and secured with a cord. The aventail hangs from these, protecting the neck and the shoulders, and can be removed for repair or replacement.',
      'Visors evolved quickly. The earliest, the klappvisier, hinged from a single central mount at the brow; the more successful arrangement pivoted the visor on hinges at both temples, so it could be lifted clear or removed entirely. By around 1400 the great bascinet replaced the mail aventail with plate defences riveted to the helmet itself.'),
    S('Protection and battlefield role',
      'The bascinet is the helmet of the dismounted man-at-arms, which is what the fourteenth-century battlefield increasingly demanded. English and French men-at-arms fought on foot at the Battle of Poitiers in 1356 and at the Battle of Agincourt in 1415 wearing bascinets, and the accounts of those fights are full of the consequences of restricted vision and air.',
      'Its combination of plate skull and mail aventail is a deliberate division of labour: rigid plate where a blow lands hardest, flexible mail where the head must turn. Nothing else of the period covers the neck so well without immobilising it.',
      'The raisable visor changed how a fight was conducted. Men could advance with the face open and close it at contact, and the sources record commanders raising visors to be recognised or to breathe — moments that would have been impossible in a great helm.'),
    S('Strengths and limitations',
      'Its strength is balance. The bascinet gives most of the protection of a great helm at less weight, with far better ventilation and the option of sight, and it sits close enough to the head to be worn all day without the fatigue an enclosing drum imposes.',
      'Its weakness is the aventail. Mail defends well against a cut but is vulnerable to a determined thrust from a narrow point, and the great bascinet\'s move to plate neck defences around 1400 is a direct response to weapons designed to find exactly that gap.',
      'Closed, it remained hard to breathe in. Fifteenth-century accounts of men suffocating in the press — notably in the crush at Agincourt — describe a hazard of closed helmets generally, and the bascinet was not exempt from it.'),
    S('Historical development',
      'The bascinet begins in the late thirteenth century as a light skull worn under a great helm, which is why the earliest examples are plain and close-fitting: they were an under-helmet, not a helmet in their own right.',
      'Through the first half of the fourteenth century it grows, acquires the aventail, and takes on a visor, at which point it no longer needs anything over it. The great helm is relegated to the tournament and the bascinet becomes the fighting helmet of Europe.',
      'By about 1400 the great bascinet appears, heavier and fully plated at throat and neck, resting partly on the shoulders. Within a few decades it is itself displaced by the sallet and armet, and the bascinet\'s century of dominance ends.'),
    S('Regional variation and surviving examples',
      'Italian and German workshops produced recognisably different profiles, the Italian tending to a smoother, more rounded skull and the German to a sharper point and a more angular visor, though the export trade blurred these differences considerably.',
      'Substantial numbers survive across the major collections — the Metropolitan Museum of Art, the Royal Armouries and the Kunsthistorisches Museum among them — and the Churburg armoury in South Tyrol preserves an unusually coherent group of fourteenth-century pieces.',
      'The mail aventails are far rarer than the skulls, because mail was recycled and leather bands perished, so many surviving bascinets are displayed with the vervelles intact but nothing hanging from them.'),
    S('Legacy',
      'The bascinet established the principle that a helmet should be openable. Every later European helmet with a movable visor descends from that idea, and it is the reason the closed helmet did not remain the blind drum the great helm had been.',
      'It also marks the fourteenth century visually as clearly as the heater shield does. A bascinet with an aventail in a manuscript image is a reliable dating clue, and its replacement by the sallet is one of the sharper visual breaks in medieval armour.',
      'Its underappreciated legacy is the aventail itself: a demonstration that mail and plate were not competing technologies replacing one another, but complementary materials used deliberately where each worked best.')
  ],

  'hounskull-bascinet': [
    S('Overview',
      'The hounskull is a bascinet fitted with a tall conical visor drawn out into a point, giving the wearer the muzzle-like profile that made it one of the most distinctive objects of the later fourteenth century.',
      'The name is an anglicisation of the German Hundsgugel, "hound\'s hood", and it is a modern label for a form medieval writers described simply as a bascinet with a visor. The visor is the variation; the helmet beneath it is an ordinary bascinet.',
      'The projecting shape is functional rather than decorative, and it survives in numbers precisely because it worked: it deflects a lance point, increases the volume of air available to a closed helmet, and moves the breathing holes away from the face.'),
    S('Design and construction',
      'The skull is a standard bascinet — raised from a single plate, pointed, hung with a mail aventail on vervelles. All the distinctive design sits in the visor, which is hinged at the temples and can be lifted or lifted off.',
      'The visor is drawn forward into a cone or wedge. Its two sight slits sit under a projecting brow that shades and shields them, and the breathing holes are clustered on the lower cone. Those holes are characteristically asymmetric: many on the right side of the wearer\'s face, few or none on the left.',
      'That asymmetry is one of the clearest pieces of design reasoning surviving in medieval armour. In a mounted encounter the opponent\'s lance comes from the wearer\'s left, so the left of the visor is kept solid while the right — the sheltered side — is pierced as generously as needed for air.'),
    S('Protection and battlefield role',
      'The pointed visor turns a thrust. A point arriving anywhere on that sloped cone is deflected outward instead of stopping against a flat plate, which is precisely the behaviour wanted from a helmet designed against couched lances and armour-piercing swords.',
      'It was a fighting helmet, not a parade one, and was worn in the major engagements of its period; men-at-arms in hounskulls fought at the Battle of Nicopolis in 1396 and in the campaigns leading to the Battle of Agincourt in 1415.',
      'The visor could be raised on the march, in council, or between charges, so the wearer spent most of a campaign with his face open — the practical arrangement that made the closed helmet tolerable at all.'),
    S('Strengths and limitations',
      'It is the best-ventilated closed helmet of its century. The cone holds a volume of air in front of the mouth that a close visor does not, and the concentration of breaths on the sheltered side allows generous piercing without weakening the struck face.',
      'Vision remains poor, as in any closed helmet: two slits, no periphery, and a projecting visor that limits downward sight in particular, which matters for a man fighting on foot over broken ground or fallen bodies.',
      'The projection is also a lever. A visor that sticks out can be gripped, struck or wrenched, and fifteenth-century designs move steadily back toward flatter, more compact visors partly for that reason.'),
    S('Historical development',
      'The form appears in the 1370s as visors evolve from the earlier klappvisier and spreads quickly across Western and Central Europe, becoming the characteristic knightly helmet of the last quarter of the fourteenth century.',
      'It remains in use into the first two decades of the fifteenth, overlapping with the great bascinet, which replaces the mail aventail with plate while sometimes keeping a similar visor.',
      'It disappears with the rise of the sallet and armet in the middle decades of the fifteenth century — helmets that offer comparable protection with a lower profile and better vision, and that do not present a projecting cone to be grabbed.'),
    S('Regional variation and surviving examples',
      'German examples tend to a longer, sharper cone; Italian ones are often shorter and more rounded, and the trade in Milanese armour spread Italian profiles far beyond Italy. The distinction is real but should not be pressed too hard on individual pieces.',
      'Good examples survive in the Metropolitan Museum of Art, the Royal Armouries and the Kunsthistorisches Museum, and the type is unusually well represented in funerary brasses and effigies, which often show the visor in detail.',
      'As with bascinets generally, complete pieces with their original aventails are rare; visors survive separately in some numbers, having been detachable by design and therefore easily parted from their helmets.'),
    S('Legacy',
      'The hounskull is the single most recognisable medieval helmet after the great helm, and its silhouette does a great deal of work in modern illustration, film and games — often anachronistically, attached to periods it never belonged to.',
      'Its asymmetric breathing holes are among the best surviving evidence that medieval armourers reasoned explicitly about threat direction rather than working by tradition alone.',
      'It also marks the high point of the projecting visor. Every later European visor is flatter, and the hounskull therefore represents a design idea that was taken to its limit and then deliberately reversed.')
  ],

  'kettle-hat': [
    S('Overview',
      'The kettle hat is an open helmet with a broad brim — a shallow bowl over the crown with a projecting rim all round — used across Europe from the twelfth century into the sixteenth. It is the most common medieval helmet, and the one worn by the greatest number of people.',
      'It is usually thought of as infantry equipment, and most of its wearers were infantry, but it was not a poor man\'s helmet by necessity. Knights and even kings wore kettle hats when vision and air mattered more than enclosure, particularly in sieges and on campaign.',
      'Its persistence is the strongest argument for it. Few pieces of medieval military equipment remained in use, essentially unchanged in principle, for four centuries.'),
    S('Design and construction',
      'The simplest examples are raised from a single plate, crown and brim together, which demands real skill from the smith. Cheaper versions were made in two or more pieces, with a separate brim riveted to a skull, and some were built on the older segmented pattern.',
      'The brim is the defining element and its angle is the design decision. A brim angled downward sheds blows and missiles outward away from the shoulders; a flatter brim gives better coverage against anything falling from directly above, which is why siege examples often have wide, level brims.',
      'Inside it was suspended on a lining band so the shell stood off the skull, leaving a gap that absorbed impact, and secured with a chin strap. Like all helmets it was worn over a padded cap, and frequently over a mail coif as well.'),
    S('Protection and battlefield role',
      'Its natural environment is the siege, where the danger comes from above — stones, bolts and arrows dropped from a wall onto men working at its foot. A brimmed helmet is the obvious answer to a vertical threat, and the kettle hat appears constantly in siege imagery for that reason.',
      'In the field it suited troops who needed to see and to shoot. Archers, crossbowmen, spearmen and billmen all wanted an unobstructed view and unobstructed breathing far more than they wanted their faces closed, and the kettle hat gives both.',
      'It was general infantry equipment in the great battles of the later Middle Ages, worn in numbers at engagements such as the Battle of Crécy in 1346 and the Battle of Grunwald in 1410, and the grave pits from the fighting at Visby in 1361 contain examples alongside the men who wore them.'),
    S('Strengths and limitations',
      'Its strengths are cheapness, comfort and awareness. A kettle hat can be made quickly, fits a range of heads, weighs little, and leaves its wearer able to see, hear, shout and breathe through a long day — which for a man in a formation is often worth more than a closed face.',
      'Its limitation is obvious: the face is entirely open. Against a thrust to the face, or an arrow arriving flat rather than from above, it offers nothing, and no amount of brim compensates.',
      'The brim itself has a cost. It catches on things in a press, and in a tight formation it can foul the men alongside — a small annoyance that partly explains why closed helmets were preferred once armour could be afforded.'),
    S('Historical development',
      'The type appears in the twelfth century and is well established by the thirteenth, when it is shown constantly in manuscript illumination — in the Maciejowski Bible among others — worn by knights and footmen alike in field and siege.',
      'Through the fourteenth and fifteenth centuries the form diversifies rather than replaces itself: deeper crowns, sharper brims, and versions with the brim swept down at front and back begin to shade into other helmet families.',
      'That shading is its most interesting descendant. The fifteenth-century sallet and the later morion both carry the kettle hat\'s logic of a brimmed protective shell forward, and the type in one form or another outlives most of the closed helmets of the Middle Ages.'),
    S('Regional variation and surviving examples',
      'English, French, German and Italian forms differ mainly in the depth of the crown and the sweep of the brim, and the same shape appears under many names — chapel-de-fer in French sources being the most common medieval term.',
      'The Visby finds give an unusually direct picture of what ordinary fourteenth-century head protection looked like, because the dead were buried in their equipment, and the assemblage is dominated by simple, practical helmets rather than knightly ones.',
      'Substantial numbers survive in European collections, and their very ordinariness is why: kettle hats were made in quantity, held in municipal armouries, and reissued over generations, so more of them entered the modern record than of any grander helmet.'),
    S('Legacy',
      'The kettle hat has the longest afterlife of any medieval helmet. Its logic reappears in the morion of the sixteenth century, and, more directly, in the British and Commonwealth steel helmet of the First World War — a brimmed shell adopted for exactly the medieval reason, to defeat a threat falling from above into a trench.',
      'It is also a corrective to a distorted picture of medieval warfare. The helmet most medieval soldiers actually wore was cheap, open and practical, not the enclosing knightly helm that dominates modern imagination.',
      'For historians its ubiquity makes it useful and frustrating at once: it appears everywhere and therefore dates nothing precisely, which is the price of a design good enough not to need changing.')
  ],

  'mail-coif': [
    S('Overview',
      'The mail coif is a hood of riveted mail covering the head, neck and shoulders. It was worn beneath a helmet, over a padded cap, and for lightly equipped men it was frequently the only head protection they had.',
      'It is the connective tissue of medieval head defence. A helmet covers the skull, but the neck and throat must still move, and mail is the only material available before the fifteenth century that protects a moving joint without immobilising it.',
      'Its history runs from the early medieval period to the fourteenth century, when the aventail hung from a bascinet takes over its role and the separate coif largely disappears.'),
    S('Design and construction',
      'A coif is made of the same riveted mail as a hauberk: rings of drawn iron wire, each closed with a rivet, interlinked in a four-in-one pattern. Rows are shaped by adding or dropping rings, so a skilled maker could tailor a hood to the curve of a skull and the spread of the shoulders.',
      'Early coifs were often integral with the hauberk, worked as a continuation of the garment. Separate coifs, standard from the thirteenth century, are easier to make and repair and allow the head defence to be replaced without touching the body armour.',
      'Many have a ventail — a flap of mail drawn across the throat and lower face and secured at the temple — and all were worn over a padded arming cap. That padding is not optional: without it, mail transmits the whole force of a blow directly to the skull.'),
    S('Protection and battlefield role',
      'Mail is at its best against the cut, and the coif is a cutting-age defence. A drawn edge cannot part riveted rings, and a coif with a good cap beneath it turns a blow that would otherwise open a scalp or take an ear.',
      'Worn under a helmet, it covers everything the helmet does not: the sides of the neck, the throat, and the shoulders where a descending blade lands after sliding off a curved skull. The nasal helmet and coif together are the standard head defence of the eleventh and twelfth centuries, and the Bayeux Tapestry shows the combination on almost every figure.',
      'For lighter troops the coif was often worn alone, sometimes with only a padded cap under it, which was cheap, took up no room, and gave real protection against the most common wound of medieval close combat.'),
    S('Strengths and limitations',
      'Its strengths are flexibility and coverage. It moves with the head, adapts to any shape, and covers the awkward junction between skull and shoulders that rigid plate could not span until quite late in the period.',
      'Its weakness is the thrust. A narrow point driven with force can burst or spread riveted rings, and the specialised thrusting weapons of the fourteenth century were designed to do exactly that — which is why plate gorgets and the great bascinet\'s plate neck defences replaced mail at the throat.',
      'It also does nothing against concussion. Mail stops the edge but transmits the shock, so a blow that fails to cut can still knock a man down or out, and the padded cap beneath is doing at least as much work as the mail itself.'),
    S('Historical development',
      'Mail hoods are attested from the early medieval period and become standard across Latin Europe with the general adoption of the mail hauberk. Through the eleventh and twelfth centuries the integral coif is the normal arrangement.',
      'In the thirteenth century the separate coif becomes usual, worn under the great helm, and mail remains the only defence for the neck throughout the period in which the enclosed helm dominates.',
      'The fourteenth century ends its independent life. The aventail laced to a bascinet does the same job better, and by about 1400 the great bascinet\'s plate neck defences displace mail at the throat altogether, leaving the coif to survive only among lightly armed troops.'),
    S('Regional variation and surviving examples',
      'Mail construction is remarkably consistent across Latin Europe, and coifs differ more in cut — how far they fall over the shoulders, whether they carry a ventail — than in the mail itself. Regional attribution of loose mail is notoriously difficult.',
      'Complete medieval coifs are rare. Mail was valuable and endlessly reusable, so damaged garments were cut up for patches rather than discarded, and much of what survives has been reassembled from fragments or restored in later centuries.',
      'Surviving mail is best represented in the great arms collections, and the Visby grave pits again provide unusually direct evidence, preserving mail alongside the plate defences worn with it in a single dated context.'),
    S('Legacy',
      'The coif shows that mail and plate were never simply successive technologies. Mail persisted exactly where flexibility was needed — the throat, the armpit, the back of the knee — long after plate had taken the flat surfaces, and it was chosen for that reason rather than kept out of conservatism.',
      'Its replacement by the aventail is a good illustration of how medieval armour actually changed: not by inventing a new material, but by attaching the same material to a better mounting point.',
      'The image of a mail hood framing a face is, through the Bayeux Tapestry and the effigies of the thirteenth century, one of the most persistent visual signatures of the medieval warrior, even though the object itself had a shorter working life than its fame implies.')
  ],

  sallet: [
    S('Overview',
      'The sallet is the characteristic helmet of the fifteenth century: a smooth, close-fitting shell drawn back over the skull, usually swept into a tail at the rear, and worn with a separate plate bevor covering the chin and throat.',
      'It represents a change of approach rather than a refinement. Where the bascinet closed the face with a visor hung from the helmet, the sallet divides the job in two — helmet above, bevor below — with the join covered by the wearer simply lowering his head.',
      'It was worn by everyone from archers to princes, in forms ranging from a plain open shell to the fully enclosing German type, and it dominates the visual record of European warfare from about 1440 to the end of the century.'),
    S('Design and construction',
      'The shell is raised from a single plate and shaped to the skull, then drawn out behind. The German form carries a long pointed tail over the neck; the Italian celata is shorter and more rounded, hugging the head and often ending near the nape.',
      'Vision is provided either by a slit cut into the shell itself, or by a short pivoting visor, or simply by leaving the face open — all three exist, and the same workshop might produce them alongside one another for different customers and purposes.',
      'The bevor is the other half of the system: a plate defence strapped around the neck and rising over the chin, sometimes to the lower lip. Helmet and bevor overlap when the head is lowered into a fighting posture, closing the face without any hinge or mechanism at all.'),
    S('Protection and battlefield role',
      'The overlap is the design. A man in a sallet and bevor lowers his head to close the gap and lift it to see and breathe, which gives him something close to the protection of a closed helmet with none of its permanence — the posture itself is the visor.',
      'The long tail of the German form protects the back of the neck, the area a blow finds when a man ducks or turns away, and it does so without the weight of a full gorget. That combination made it popular with men who fought on foot as well as mounted.',
      'It was worn on every side of the century\'s fighting. Sallets appear in numbers in the armies of the Hundred Years\' War\'s final campaigns, including at the Battle of Castillon in 1453, and across the Burgundian, German and Italian wars of the same decades.'),
    S('Strengths and limitations',
      'Its strengths are lightness, comfort and the ability to choose. A sallet weighs less than a great bascinet, sits closer to the head, and lets the wearer decide moment by moment how much of his face to expose without operating any mechanism.',
      'Its weakness is the join. Helmet and bevor meet rather than lock, and a thrust arriving upward at the right angle can find the gap — which is why the armet, with a genuinely enclosed and hinged construction, eventually displaced it for the fully armoured man-at-arms.',
      'The tail can also foul a backplate or a raised collar, and the deeper German forms restrict downward vision considerably, which matters for a man on foot watching his footing among the fallen.'),
    S('Historical development',
      'The sallet emerges in Italy in the early fifteenth century, apparently developing from the earlier open-faced barbute and the bascinet tradition, and spreads north rapidly through the trade in Milanese armour.',
      'German workshops take it in a distinct direction from about the 1440s, lengthening the tail and adding a visor to produce the fully enclosing form that is the most familiar version of the type.',
      'It is displaced from the 1490s onward by the close helmet and armet, which enclose the head completely with hinged cheek pieces and do not depend on the wearer\'s posture. The kettle hat\'s brimmed logic and the sallet\'s shell converge in the sixteenth-century morion.'),
    S('Regional variation and surviving examples',
      'The German and Italian traditions are genuinely distinct here in a way they are not for every helmet type: the long-tailed visored German sallet and the compact open celata are different objects addressing the same problem, and both were widely exported.',
      'Numerous examples survive in the Metropolitan Museum of Art, the Royal Armouries, the Wallace Collection and the Kunsthistorisches Museum, and the type is unusually well represented because it remained in municipal store long after it left the field.',
      'Bevors survive separately in some numbers and are frequently displayed apart from any helmet, which obscures how the system worked — a sallet shown without its bevor looks far more open than it ever was in use.'),
    S('Legacy',
      'The sallet is the last widely worn European helmet to leave the wearer a real choice about how enclosed to be, and its replacement by the close helmet marks the end of that flexibility.',
      'Its influence on later head protection is direct. The morion descends from the same family, and the shape of the shell — smooth, swept back, close to the skull — is echoed in helmets designed centuries later for reasons its makers would have recognised.',
      'It is also the helmet most often used to represent the late Middle Ages in modern illustration, to the point where the German visored sallet is frequently drawn on fourteenth-century figures who would in fact have worn a bascinet.')
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
console.log(`\n${n} helmet articles rewritten; history.json written`)
