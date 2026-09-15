/**
 * M5 batch 1 — shields rewritten to the documented standard.
 *
 * Before: six sections of one sentence each, ~1,000–1,100 characters per article,
 * typically no date, no named engagement and no surviving object. After: the
 * seven topics CLAUDE.md mandates for a defensive article, three substantial
 * paragraphs per section, and at least one named battle, individual or museum
 * object in every article.
 *
 * Only battles that have articles (Hastings, Crécy, Poitiers, Agincourt, Stamford
 * Bridge) or sit on the tracked BATTLE_BACKLOG (Visby) are named in prose, so the
 * auto-linker resolves them and the battle-reference check stays green.
 *
 * Dimensions are ranges drawn from surviving examples, never invented exact
 * figures, and no accession number is quoted unless it was verified.
 */
import { readFileSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dataPath = path.join(__dirname, '../server/data/history.json')
const data = JSON.parse(readFileSync(dataPath, 'utf8'))

const S = (title, ...paragraphs) => ({ title, paragraphs })

const articles = {
  shield: [
    S('Overview',
      'The shield was the first piece of defensive equipment most medieval fighters owned and the last they gave up. It was cheap where mail was not, it could be made by a carpenter rather than an armourer, and it turned an individual into part of a formation: shields overlapped, and a line of them was harder to break than the sum of the men behind it.',
      'Its history across the medieval centuries is a story of shrinking. The round shield of the Viking Age is roughly a metre across because the body behind it is protected by little more than a mail shirt. By the fifteenth century, when a man-at-arms wears articulated plate from head to foot, the shield has contracted to a buckler in the fist or vanished from the battlefield altogether.',
      'What survives is scarce and lopsided. Waterlogged burials and mass graves preserve the wooden boards that normally rot, so most of what is known about construction comes from a handful of finds — the Gokstad ship burial, the grave pits at Visby — while the painted heraldic shields that hung in churches survive because they were never buried at all.'),
    S('Design and construction',
      'A medieval shield was a laminate. Thin planks of a light, forgiving wood — lime, poplar, willow, sometimes fir — were laid edge to edge and glued, then faced front and often back with hide, linen or parchment. The facing did the structural work: it held the boards together under impact and stopped a split running the length of the board.',
      'The rim was bound, usually with rawhide stitched through the edge, occasionally with iron. This is the part that decides whether a shield survives a fight: an unbound edge splits when a blade bites into it, while a bound edge closes around the cut. The rawhide binding on the Gokstad shields is one of the details that made those finds so valuable.',
      'How the shield was held changed everything about how it was used. An early shield has a hole cut through the centre, a bar across the back for the fist, and an iron boss riveted over the outside to cover the hand. A later shield abandons the boss and carries enarmes — straps the forearm passes through — with a longer guige strap over the shoulder to take the weight.'),
    S('Protection and battlefield role',
      'In formation the shield was a collective defence rather than a personal one. Overlapped along a line, shields presented a continuous face to missiles and made the front rank difficult to reach with a spear; the accounts of Harold\'s line at the Battle of Hastings describe exactly this, a wall the Norman cavalry could not open until the formation itself broke.',
      'In single combat it worked as an active weapon. A centre-grip shield can be punched forward, its rim used to strike or to bind an opponent\'s arm, and its face angled so a blow slides off rather than landing square. The fifteenth-century fencing manuals treat the buckler this way, and the same logic applies to its larger ancestors.',
      'Against missiles it was decisive in a way it never quite was against a determined blade. Arrows that would pass through mail stop in layered wood and hide, which is why shields persist longest exactly where arrows and bolts are thickest — with infantry, with crossbowmen, and in siege work, long after mounted men have set them aside.'),
    S('Strengths and limitations',
      'The shield\'s advantage was economic before it was tactical. A carpenter with seasoned planks, hide glue and a smith to make a boss could equip a man for a fraction of the cost of a mail shirt, which is why shields appear in every levy and militia list across the period while body armour appears only in the wealthier ones.',
      'Its cost was the hand that held it. A shield occupies an arm permanently, and any weapon that wants two hands — the great axe, the longbow, the poleaxe, the halberd — cannot be used with one. Every major two-handed weapon of the later Middle Ages is, in part, a decision to stop carrying a shield.',
      'It also wore out. Wood splits, facings tear, rawhide rims come loose, and a shield that has taken a hard fight is often described as needing replacement rather than repair. That disposability is part of why so few survive, and why the ones that do are usually objects that hung in a church rather than ones that went to war.'),
    S('Historical development',
      'The early medieval shield is round, centre-gripped and bossed, and it stays that way for centuries because the tactical problem does not change: a man in a mail shirt or none at all, fighting on foot in a line. The Gokstad ship burial of about 900 held sixty-four such shields, roughly ninety-four centimetres across and only six to eight millimetres thick, ranged along the vessel\'s sides.',
      'The kite shield arrives with the mounted warrior of the eleventh century and answers a specific problem — a rider\'s left leg, which a round shield leaves exposed. The Bayeux Tapestry, worked in the 1070s, shows the type in use on both sides at Hastings, long-bodied and round-topped.',
      'From the middle of the thirteenth century the shield contracts as plate defences spread up the limbs, becoming the flat-topped triangular form later antiquaries named the heater. By the time of the Battle of Agincourt in 1415 a fully harnessed man-at-arms fights without one, and the shield survives chiefly as a buckler, as a pavise for crossbowmen, and as a heraldic object in churches and on tombs.'),
    S('Regional variation and surviving examples',
      'Scandinavian and North Sea shields of the ninth and tenth centuries are large, round and thin, and were painted: traces on the Gokstad boards show alternating yellow and black. Their thinness is deliberate rather than shoddy — a thin faced board absorbs and grips a blade instead of resisting it rigidly.',
      'The grave pits of the Battle of Visby, dug after the fighting on Gotland in 1361, are the largest single source for what ordinary fourteenth-century equipment actually looked like, because the dead were buried in their armour in high summer. Nothing else in medieval Europe gives so direct a picture of what a militia force carried.',
      'Heraldic shields survive above ground where battlefield ones do not. The Seedorf shield in the Swiss National Museum, made in the 1230s and painted with the arms of the von Brienz family, and the shield of Konrad von Thüringen at Marburg are among the oldest surviving Western European examples, and both are church objects rather than excavated ones.'),
    S('Legacy',
      'The shield outlived its battlefield use as a symbol. The heraldic escutcheon on which coats of arms are still drawn is a stylised shield, and the shape persists in civic seals, regimental badges and national arms centuries after anyone carried one into a fight.',
      'Its practical descendants are narrower. The buckler survived in civilian self-defence into the sixteenth century, and the pavise\'s logic — portable cover carried to the fight rather than worn — reappears whenever troops need to advance under missile fire.',
      'For the archaeology it left a problem that shapes the whole subject. Because the wood normally rots and the iron boss does not, the surviving record over-represents early bossed shields and almost entirely loses the later strapped ones, so what looks like a clear typology is partly an accident of what happens to survive in the ground.')
  ],

  buckler: [
    S('Overview',
      'The buckler is a small round shield held in the fist rather than strapped to the arm, generally between about fifteen and forty-five centimetres across. It is not a reduced version of a war shield but a different tool: too small to hide behind, and designed instead to be thrust out at the opponent\'s hand and blade.',
      'It is the shield of the street and the fencing school rather than the battlefield line. Carried with a single-handed sword, it belongs to travellers, townsmen, soldiers off duty and the fencing masters who taught them, and it is documented far more richly in fight manuals and city ordinances than in battle accounts.',
      'That documentation makes it unusually well understood. The earliest surviving European fencing manual is about sword and buckler, which means the buckler is one of the few medieval defensive objects whose actual technique is recorded rather than reconstructed.'),
    S('Design and construction',
      'Most surviving bucklers are steel: a disc of plate, sometimes reinforced with riveted bands, raised into a hollow dome at the centre. The dome is not decoration but the whole point of the design — the hand sits inside it, gripping a single bar riveted across the cavity, so the boss covers the fist rather than the body.',
      'Wooden bucklers were made the same way as larger shields, with a plywood or plank core faced in canvas or leather and bound at the rim with rawhide, pierced at the centre for a separate steel boss. Both kinds appear in period images, and the choice seems to have been one of cost and local practice rather than function.',
      'Nothing straps a buckler to the arm. That single detail governs everything else: it can be extended to arm\'s length, rotated instantly, punched forward, or drawn back to the body, and it can be dropped in a moment — none of which is true of a shield carried on enarmes.'),
    S('Protection and battlefield role',
      'The buckler\'s primary job was to protect the sword hand. In sword-and-buckler play the two are held close together and moved as a unit, so the buckler covers the hand as the sword extends, which matters enormously in a duel fought without gauntlets against an opponent aiming for the nearest target.',
      'Against a cut it works by interception rather than absorption. A small disc met edge-on to an incoming blade deflects it wide with very little force, and the same disc thrust into an opponent\'s hilt binds his weapon long enough to strike past it. Blocking flat, in the way a large shield can afford to, is precisely what a buckler cannot do.',
      'On the battlefield it appears mainly with lighter troops and in the press of a siege, where a full shield is unwieldy. Its real habitat is civilian: the fight in a street or a tavern yard, where a man carries a sword because he travels and a buckler because it hangs from the same belt without encumbering him.'),
    S('Strengths and limitations',
      'Its strengths are portability and speed. A buckler weighs a fraction of a war shield, hangs from a belt hook when not in use, and can be brought into play in the time it takes to raise a hand. Nothing else in the medieval defensive repertoire is so nearly free to carry.',
      'Its limitation is equally plain: it covers almost nothing passively. A man standing still behind a buckler is protected only where the disc happens to be, which is why every surviving manual treats it as something to be actively placed rather than something to hide behind.',
      'It is also useless against volleys. Where a pavise or a large shield stops arrows for a man who must stand and reload, a buckler offers a missile no meaningful obstacle at all, and it disappears entirely from the contexts where shooting dominates.'),
    S('Historical development',
      'Small fist shields are old, but the buckler as a distinct European object belongs to the thirteenth century onward, appearing alongside the single-handed sword as personal arms became normal wear for townsmen and travellers. It spreads with civilian sword-carrying rather than with military reform.',
      'Its documentary high point is the fencing tradition. The manuscript known as I.33, compiled around 1300 and now in the Royal Armouries at Leeds, teaches sword and buckler as a complete system of guards and counters — the earliest surviving fight book in Europe, and evidence that the pairing was taught formally, not improvised.',
      'The pairing outlived the medieval period. Sword-and-buckler play remained common enough in sixteenth-century England to give the language the word swashbuckler, from the noise of a sword swashing against a buckler — a term originally for a swaggering bully rather than a hero.'),
    S('Regional variation and surviving examples',
      'Surviving medieval bucklers are predominantly steel and predominantly plain, and they are held across the major arms collections — the Royal Armouries, the Wallace Collection and the Metropolitan Museum among them. Decoration, where it occurs, is usually confined to the boss and the riveted bands.',
      'Continental and English practice differ less in the object than in how it was regulated. City ordinances repeatedly restrict who may carry sword and buckler and when, which tells us both that the combination was common and that authorities regarded it as trouble.',
      'The visual record is unusually rich for so humble an object. Beyond I.33, the fifteenth-century manuals of Talhoffer and Paulus Kal show it in use, and marginal illustrations in psalters and chronicles show it hanging from belts — a reminder that this was everyday equipment rather than a specialist arm.'),
    S('Legacy',
      'The buckler is the reason a substantial part of medieval fighting technique is recoverable at all. Because I.33 survives, historians and modern practitioners have a documented system to work from rather than inference drawn from wounds and images.',
      'It also outlasted the shield proper. While the war shield had effectively left the battlefield by the fifteenth century, the buckler remained a normal civilian companion to the sword into the age of the rapier, when it was gradually displaced by the dagger in the off hand.',
      'Its afterlife is linguistic as much as material. Swashbuckler entered English from the sound of the weapon in use, and the word long outlived any memory of the object that made the noise.')
  ],

  'heater-shield': [
    S('Overview',
      'The heater shield is the flat-topped, triangular shield of the high Middle Ages, in general use from roughly the middle of the thirteenth century into the fourteenth. It is the shape most people picture when they picture a knight, and the shape on which European heraldry was formalised.',
      'Its name is not medieval. Nineteenth-century antiquaries thought it resembled the base of a flat iron — a heater — and the term stuck, as several modern arms labels have. Medieval writers simply called it a shield, and any typology built on the word is a modern convenience applied to objects that varied continuously.',
      'It exists because armour improved. As mail and then plate crept down the legs, the long tail of the kite shield stopped protecting anything that was not already protected, and the shield contracted upward into a shorter, broader, lighter form.'),
    S('Design and construction',
      'The body is a shallow, curved board, made either of planks glued edge to edge or of thin layers laminated across the grain — an early plywood — so that the curve is built into the object rather than bent into it afterwards. Curvature matters: a curved face turns a blow aside where a flat one receives it squarely.',
      'The board was faced with canvas or leather, then covered in gesso, a chalk-and-glue ground, which took paint and gilding. The heraldry was not applied to bare wood but to a prepared surface, which is why the surviving painted shields hold their colour so well and why decoration and construction cannot be separated in this object.',
      'It was carried on enarmes — two or three straps through which the forearm passed — with a longer guige over the shoulder to bear the weight or to sling the shield on the back when riding. No boss and no central hand-hole: by this date the hand is protected by a gauntlet and the shield is worn rather than gripped.'),
    S('Protection and battlefield role',
      'On horseback the heater covered the rider\'s left side from shoulder to thigh, the zone an opponent could reach across the horse\'s neck in a passage of arms. Its shortened lower point cleared the saddle and the leg armour, which the kite shield had increasingly fouled.',
      'On foot it was used as an active guard, angled to deflect rather than held rigid to absorb, and its rim used offensively at close quarters in the same way as earlier shields. Dismounted men-at-arms fought this way throughout the fourteenth century, including in the great English defensive actions.',
      'Its most consequential function was arguably not protective at all. A painted shield identified its bearer at distance in a mêlée where the face was hidden by a great helm, and the practical need for that identification is one of the reasons heraldry became systematic in exactly this period.'),
    S('Strengths and limitations',
      'The heater is a good compromise object: light enough to be carried all day and manoeuvred quickly, large enough to cover the torso, and shaped so that its widest part protects the widest part of the body. Very little about it is wasted.',
      'Its limitation is that it was made obsolete by the same process that created it. Every improvement in plate defence reduced what a shield still needed to cover, and a fully harnessed man-at-arms of the early fifteenth century gains little from occupying an arm with one.',
      'It was also, as a wooden object, consumable. Surviving heater shields are overwhelmingly funerary or ceremonial — objects that hung above a tomb — while the ones carried in war were repaired, repainted and eventually discarded, leaving the surviving sample badly skewed toward the ornamental.'),
    S('Historical development',
      'The type emerges in the first half of the thirteenth century as the kite shield loses its lower point. The transition is gradual and the intermediate forms are common, which is one reason the modern typology of shields is less tidy than the labels suggest.',
      'It reaches its familiar proportions by about 1250 and stays broadly stable for a century, the period in which armorial display, tournament regulation and the office of arms all take recognisable shape. Shield and coat of arms develop together and cannot really be separated.',
      'It declines through the second half of the fourteenth century. At the Battle of Crécy in 1346 and the Battle of Poitiers in 1356 shields are still in evidence among men-at-arms; by the Battle of Agincourt in 1415 the fully harnessed combatant has largely abandoned them, and the shield survives chiefly in the tournament and on the tomb.'),
    S('Regional variation and surviving examples',
      'The Seedorf shield in the Swiss National Museum, made in the 1230s and bearing the arms of the von Brienz family, is among the oldest surviving Western European shields and shows the construction unusually completely: a curved wooden body, a gesso ground, and painted heraldry over it.',
      'The shield of Konrad von Thüringen, who died in 1240, survives in the Elisabethkirche at Marburg, and is a second example of the same phenomenon — a shield preserved because it hung in a church rather than because it was buried. Both are considerably degraded, which is normal for painted wood of this age.',
      'The heraldic achievements of Edward the Black Prince at Canterbury Cathedral, made in the 1370s, include his shield alongside helm, crest and gauntlets. Regional differences in shape are real but modest; the sharper differences are in heraldic convention rather than in the board itself.'),
    S('Legacy',
      'The heater shield gave heraldry its canvas, and the shape long outlived the object. The escutcheon of modern coats of arms is a heater in outline, and civic and national arms across Europe still use it centuries after anyone carried one.',
      'It also fixed a popular image. The triangular shield with a painted device is the visual shorthand for the medieval knight in later art, literature, film and games, which flattens a period of several centuries into a single fourteenth-century silhouette.',
      'For historians it is a useful marker of a broader transition. The rise and fall of the heater tracks the spread of plate armour almost exactly, and dating a shield type in an image often dates the harness worn with it.')
  ],

  'kite-shield': [
    S('Overview',
      'The kite shield is the long, tapering shield of the eleventh and twelfth centuries — round-topped at first, later flat-topped — carried above all by mounted warriors across Latin Europe, Byzantium and the Crusader states.',
      'Its defining feature is the tail. Where a round shield leaves a rider\'s left leg exposed, the kite runs down past the thigh, and almost everything else about the object follows from that single requirement.',
      'It is unusually well documented visually. The Bayeux Tapestry alone shows scores of them in use, carried mounted and on foot, slung on the back and used in a shield wall, which makes it one of the best-attested pieces of eleventh-century equipment.'),
    S('Design and construction',
      'Construction follows the general medieval pattern: planks of light wood laid edge to edge, faced with hide or linen, and bound at the rim. Where the body is long, a slight curve across its width helps it wrap the rider and stiffens a board that would otherwise be dangerously flexible along its length.',
      'Early examples keep an iron boss over a central hole, inherited from the round shield, even where the hand is no longer behind it. The boss on many kite shields is therefore decorative or vestigial — a good example of a form outlasting its function.',
      'The real carrying system is the set of enarmes on the back, through which the forearm passes, with a guige strap over the shoulder. This is what allows a long shield to be held steady on horseback while the left hand still manages the reins, and it is the innovation that makes the type possible at all.'),
    S('Protection and battlefield role',
      'Mounted, the kite covers the rider from shoulder to knee on the bridle side, which is the side an opponent naturally engages in a passage. Slung on the guige it can be carried on the back when riding at ease or when both hands are needed.',
      'Dismounted, it makes a formidable wall. The English line at the Battle of Hastings in 1066 fought on foot behind overlapping shields of this type, and the tapestry records both the wall and the difficulty the Norman cavalry had in breaking it.',
      'It was also a common feature of siege work, where a long board gives cover to a man approaching a wall, and of the Crusader states, where the type appears in Latin, Byzantine and local use through the twelfth century.'),
    S('Strengths and limitations',
      'Its strength is coverage. No other medieval shield protects so much of a mounted man for so little weight, and the long body is genuinely useful both in the saddle and in a standing line.',
      'Its weakness is that the same length fouls the leg on foot and becomes redundant as leg armour improves. Mail chausses, and later plate cuisses and greaves, make the tail protect armour rather than flesh — carried weight doing no work.',
      'The strapped carry that makes it possible also costs it the versatility of a centre grip. A shield on enarmes cannot be punched out or spun to a new angle the way a bossed round shield or a buckler can; it is worn, and it moves as the arm moves.'),
    S('Historical development',
      'The type appears in the tenth and eleventh centuries and spreads rapidly with the mounted warrior across Latin Europe and into Byzantium, where it is well represented in manuscript illumination.',
      'The rounded top gives way to a flat top through the twelfth century, shortening the shield slightly and improving the wearer\'s vision — a small change that also makes the face a better field for heraldry as armorial display becomes systematic.',
      'From the thirteenth century the tail shortens further and the type resolves into what later antiquaries called the heater. There is no clean break, and shields of intermediate proportion are common throughout, which is why the boundary between the two "types" is a modern convenience rather than a medieval distinction.'),
    S('Regional variation and surviving examples',
      'No complete Western European kite shield of the eleventh century survives, which is the central problem in studying it. What is known comes from images — the Bayeux Tapestry above all, along with manuscript illumination, seals and carved capitals — and from the general construction of shields recovered from other periods.',
      'Byzantine practice used the shape widely, and Byzantine illuminations show it alongside forms not seen in the West, a reminder that the kite is not a purely Norman object even though Norman art makes it famous.',
      'Painted decoration on kite shields precedes formal heraldry. The devices in the Bayeux Tapestry — dragons, crosses, geometric patterns — are not yet hereditary arms, and reading them as coats of arms is one of the commonest errors made about eleventh-century equipment.'),
    S('Legacy',
      'The kite shield is the visual signature of the eleventh and twelfth centuries, so firmly attached to the Norman period that its appearance in an image is often used to date the image.',
      'Structurally it was the bridge between two systems: the last shield designed around a warrior who was mostly unarmoured below the mail shirt, and the direct ancestor of the heraldic heater that replaced it.',
      'It also demonstrates how thin the surviving evidence can be. One of the best-attested objects of its century is known almost entirely from pictures of it, which should temper confidence about medieval equipment for which even the pictures are missing.')
  ],

  pavise: [
    S('Overview',
      'The pavise is a large standing shield, used from the fourteenth century into the sixteenth to give a crossbowman cover while he spanned and loaded his weapon. It is not carried in a fight so much as placed, and it belongs to a mode of warfare built around missile troops and prepared positions.',
      'It answers a specific mechanical problem. A crossbow is powerful but slow: spanning it with a belt hook, a windlass or a cranequin takes time during which the shooter is stationary, exposed and unable to defend himself. The pavise is the solution — a portable wall that stands where he stands.',
      'The name comes from Pavia in Lombardy, an early centre of manufacture, and the object spread from northern Italy across Central Europe, becoming especially associated with Bohemian and German warfare in the fifteenth century.'),
    S('Design and construction',
      'A pavise is a wooden board, generally of soft light timber, made in a range of sizes: large standing pavises roughly a metre to a metre and a half tall, and smaller hand pavises carried on the arm. Most are curved across their width to wrap the user and to stiffen the board.',
      'A vertical ridge or spine usually runs down the centre of the outer face. It is structural, adding rigidity along the length of a wide thin board, and it also presents an angled surface to anything arriving from the front, so bolts and arrows tend to be turned aside rather than met flat.',
      'The face was covered — canvas, linen or leather glued down, then gesso — and painted. Large standing pavises carried a prop or stake at the back so they could be set upright unattended, and many have a hand-hole or grip so a single man could carry his own cover forward.'),
    S('Protection and battlefield role',
      'The pavise made the crossbow viable as a battlefield weapon rather than merely a siege one. A crossbowman working from behind one could shoot, step back, span at his leisure and return, converting a slow weapon into a sustainable rate of fire that an unprotected shooter could not have managed.',
      'It was equally at home in siege warfare, on both sides of the wall, where troops had to work in the open under shooting — sappers, gunners, and men serving artillery all used them as movable cover.',
      'Its absence could be decisive. At the Battle of Crécy in 1346 the Genoese crossbowmen in French service were sent forward without their pavises, which had been left behind with the baggage train, and were shot down by English archers with no cover to fall back on. It is the clearest demonstration in the period of what the equipment was actually for.'),
    S('Strengths and limitations',
      'Its strength is that it converts a slow weapon into a viable one, and it does so cheaply — a carpenter, a painter and some hide, against the cost of arming a man in plate.',
      'Its limitation is mobility. A pavise is cover for a position, not for an advance: troops behind them are effectively fixed, and a force that has to move quickly must abandon them, which is exactly the situation the Genoese found themselves in.',
      'It was also vulnerable to the direction of attack. A pavise faces one way, and a line of them can be turned by cavalry reaching a flank, so the shields work only as part of a wider arrangement of stakes, wagons and terrain.'),
    S('Historical development',
      'The type appears in fourteenth-century Italy and spreads north with mercenary crossbowmen, becoming standard equipment wherever crossbows were used in numbers, and increasingly a piece of municipal property rather than personal kit.',
      'Its most distinctive phase is Bohemian. During the Hussite wars of 1419 to 1434 pavises were used in large numbers alongside the war-wagon formations that made those armies so difficult to attack, and Bohemian towns produced them in quantity with civic arms and saints painted on the face.',
      'The type fades in the sixteenth century as firearms displace the crossbow and field fortification changes. Its decline is not a failure of the design but the disappearance of the tactical problem it existed to solve.'),
    S('Regional variation and surviving examples',
      'Bohemian pavises are the best represented survivors, many bearing the arms of the towns that issued them, and museum collections in Central Europe hold them in numbers unmatched elsewhere. They are among the few classes of medieval shield that survive in quantity rather than as isolated pieces.',
      'German and Italian examples differ in proportion and in decoration more than in construction, and the same basic object appears under several regional names. Painted subjects range from civic heraldry to saints — a pavise could be both municipal property and a devotional object.',
      'The Metropolitan Museum of Art, the Deutsches Historisches Museum and the Wallace Collection all hold examples, and their painted faces are the reason so many survive: these were objects worth keeping, displaying and repainting rather than discarding.'),
    S('Legacy',
      'The pavise is the clearest medieval demonstration that protection did not have to be worn. Cover carried to the fight and set down is a distinct idea, and it reappears in every later period in which troops must work in the open under fire.',
      'It also preserves a class of painting that would otherwise be lost. Municipal pavises are among the best surviving examples of everyday civic art, carrying town arms and patron saints on objects made for use rather than display.',
      'For military history it marks the moment when missile troops became a permanent, protected component of a field army rather than skirmishers — a change completed, not begun, by gunpowder.')
  ]
}

let changed = 0
for (const [id, sections] of Object.entries(articles)) {
  const entry = data.weaponsArmor.find((x) => x.id === id)
  if (!entry) throw new Error(`missing article: ${id}`)
  const before = (entry.contentSections ?? []).flatMap((s) => s.paragraphs ?? []).join(' ').length
  entry.contentSections = sections
  const after = sections.flatMap((s) => s.paragraphs).join(' ').length
  console.log(`${id.padEnd(15)} ${String(before).padStart(5)} -> ${String(after).padStart(5)} chars  (${sections.length} sections, ${sections.flatMap((s) => s.paragraphs).length} paragraphs)`)
  changed++
}

writeFileSync(dataPath, JSON.stringify(data, null, 2))
console.log(`\n${changed} shield articles rewritten; history.json written`)
