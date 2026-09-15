/**
 * M5 batch 5a — axes and impact weapons rewritten to the documented standard:
 * an overview plus the seven mandated weapon topics, three substantial paragraphs
 * each, with named battles, individuals and surviving objects throughout.
 *
 * Only battles that have articles are named in prose (Hastings, Stamford Bridge,
 * Stiklestad, Bannockburn, Agincourt, Crécy, Poitiers, Bouvines, Grunwald).
 *
 * Named objects and texts used here are real: the Mammen axe in the National
 * Museum of Denmark, the Bayeux Tapestry, and Le Jeu de la Hache. Dimensions are
 * ranges; no accession numbers are invented.
 */
import { readFileSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dataPath = path.join(__dirname, '../server/data/history.json')
const data = JSON.parse(readFileSync(dataPath, 'utf8'))
const S = (title, ...paragraphs) => ({ title, paragraphs })

const articles = {
  'battle-axe': [
    S('Overview',
      'The battle axe is the one-handed war axe of early and high medieval Europe: an iron head with a steel edge on a wooden haft, carried with a shield and used from the migration period through to the later Middle Ages.',
      'Its great advantage was never performance but price. An axe head needs a fraction of the steel a sword blade demands and far less skill to forge, so a man who could never afford a sword could arm himself properly with an axe and a spear.',
      'That economics made it the ordinary weapon of ordinary fighters across northern Europe for centuries, and it is one reason axes vastly outnumber swords in the archaeological record.'),
    S('Design and construction',
      'A one-handed head generally weighs between 0.7 and 1.5 kilograms on a haft of 60 to 90 centimetres. The head is far lighter than its appearance suggests: the blade is thin behind the edge and the metal is concentrated at the socket, not spread through the whole shape.',
      'Most medieval heads were made by wrapping an iron bar around a mandrel to form the socket, forge-welding the two arms together into the blade, and fire-welding a strip of hardened steel along the cutting edge. Only the edge needed to be steel, which is exactly where the cost saving came from.',
      'The haft passes through the socket and is wedged tight from above. It is a simple joint and a weak one: a haft that splits or works loose disables the weapon completely, and haft failure is a recurring theme in accounts of axe fighting.'),
    S('Battlefield use',
      'It was used with a shield, delivered in short chopping blows from behind the shield rim, and it did its worst work against helmets, limbs and the edges of shields rather than against a well-covered torso.',
      'The Bayeux Tapestry shows one-handed axes in use throughout the Battle of Hastings in 1066, carried by English and Norman fighters alike, alongside the far larger two-handed axes of the housecarls.',
      'It also had a hooking function. The lower horn of the blade could be used to drag down a shield rim or catch a limb, and the sagas describe axes being used to pull an opponent off balance as often as to cut him.'),
    S('Strengths and weaknesses',
      'Its strength is concentrated force. All the energy of the swing arrives at a short cutting edge, so an axe defeats a helmet or a mail shoulder that would turn a sword cut, and it does so with a much cheaper weapon.',
      'Its weakness is that it does almost nothing defensively. An axe cannot parry usefully and cannot threaten on the return stroke, so the axe-man depends entirely on his shield and is badly exposed the moment he commits to a blow.',
      'It is also easy to trap. A committed swing leaves the haft available to be caught or bound, and the head can be hooked in a shield or a mail skirt, which is why axe fighting in the sources is so bound up with grappling and footwork.'),
    S('Historical development',
      'Axes are among the oldest weapons in Europe, and the medieval war axe develops directly out of the tool with no clean dividing line — many early medieval heads would serve for either purpose.',
      'The Frankish francisca, a short-hafted throwing axe of the fifth and sixth centuries, is the first clearly military form, and it disappears by the eighth as fighting styles change.',
      'From the eighth century the Scandinavian tradition drives development, producing the bearded axe with its downward-extended lower blade and eventually the great two-handed forms; from the twelfth century the one-handed axe gradually becomes a secondary weapon as the sword spreads down the social scale.'),
    S('Regional variation',
      'Scandinavian axes are the best studied, and Jan Petersen\'s typology sorts them by head shape into a sequence that remains the standard reference for the whole northern European material.',
      'The bearded axe, with the lower edge drawn down into a hook, is characteristically Norse and gives both a longer cutting edge and a hand-hold behind the beard for close work.',
      'Central and eastern European finds show narrower, heavier heads better suited to punching through armour than to cutting, and the Rus\' lands produce distinctive small axes with decorated cheeks that sit between weapon and status object.'),
    S('Famous examples or users',
      'The Mammen axe, found in a tenth-century Danish grave and now in the National Museum of Denmark, is the outstanding survival: an iron head inlaid in silver with interlaced animal ornament, made for display rather than for hard use.',
      'The most-quoted episode belongs to Robert the Bruce, who on the first day of the Battle of Bannockburn in 1314 killed the English knight Henry de Bohun with a single axe blow to the head after de Bohun charged him with a lance.',
      'Museum holdings are extensive — the National Museum of Denmark, the Museum of Cultural History in Oslo and the British Museum among many — and river finds supply a great deal of the best-preserved material.'),
    S('Legacy',
      'The battle axe is the clearest illustration of how equipment followed money in medieval Europe. It armed the men who could not buy swords, which is most of them, and it did the job well enough that it stayed in service for a thousand years.',
      'Its two-handed development, the Dane axe, leads directly to the poleaxe and to the whole family of fifteenth-century staff weapons that combined an axe blade with a hammer and a spike.',
      'It also carried a persistent symbolic charge. The axe stands for the Norse and English warrior in later art and heraldry, and the Bruce\'s single blow at Bannockburn remains one of the best-known moments in Scottish national memory.')
  ],

  'dane-axe': [
    S('Overview',
      'The Dane axe is the great two-handed axe of the tenth to twelfth centuries, associated above all with Scandinavian and English elite infantry. Its dramatically flared cutting edge and long haft make it the most recognisable weapon of the Viking age.',
      'The name is a modern collector\'s and museum term rather than a medieval one. Norse sources say breiðøx — broad axe — and the surviving heads vary enough in width, curve and socket construction that the label covers a family of related objects rather than one standardised weapon.',
      'It was an elite weapon in practice if not in price. Using it means giving up the shield, which only makes sense for a man confident in his own skill and in the men beside him.'),
    S('Design and construction',
      'The head is distinguished by a lower cutting edge drawn dramatically forward and down, reaching 25 to 30 centimetres or more on large examples. The socket sits offset below the centre of the blade, shifting the weight forward for heavy blows.',
      'It is far lighter than it looks. The blade is thin — commonly only two to three millimetres through the body, thickening at the edge and the socket — so a complete head generally weighs between 1 and 2 kilograms, and the whole weapon on a haft of 1.2 to 1.4 metres comes in lighter than many people expect.',
      'That thinness is the design. A broad, thin blade on a long haft delivers an enormous edge velocity and concentrates it on a shallow arc of steel; heads in the Petersen Type L and Type M categories share this profile, though construction details differ from workshop to workshop.'),
    S('Battlefield use',
      'It was swung with both hands from a wide stance, and against an unarmoured or mail-clad opponent the result is decisive: contemporary accounts describe blows that split shields, took off limbs and killed horses.',
      'The Bayeux Tapestry shows English housecarls wielding it at the Battle of Hastings in 1066, and it shows the cost too — axe-men caught mid-swing with no shield, cut down by Norman cavalry. Both halves of that picture are the historical record.',
      'It appears at the Battle of Stamford Bridge in the same year and at the Battle of Stiklestad in 1030, and Norse tradition around Stamford Bridge preserves the story of a single axe-man holding the bridge, which says as much about how the weapon was remembered as about what happened.'),
    S('Strengths and weaknesses',
      'Its strength is reach combined with terrible cutting power. A long haft and a light, wide head give an axe-man both distance and a blow that mail simply cannot absorb, and the lower horn of the blade will hook a shield rim away from the man behind it.',
      'Its weakness is the shield he does not carry. A two-handed axe leaves its user with no passive defence at all, and the Bayeux Tapestry illustrates the consequence plainly enough.',
      'The commitment of the swing is the other problem. A missed blow takes time to recover, and against cavalry or a disciplined formation that interval is enough to be killed in — which is why the weapon works in a body of men rather than alone.'),
    S('Historical development',
      'It grows out of the smaller Scandinavian war axe during the tenth century as heads broaden and hafts lengthen, and reaches its full form in the eleventh.',
      'Its high point is the eleventh century, when it equips Danish and English housecarls and travels with them: Anglo-Saxon and Scandinavian axe-men in the Varangian Guard carried it to Constantinople, where Byzantine writers describe the emperor\'s axe-bearing guardsmen.',
      'It declines through the twelfth century as plate reinforcements spread and cavalry dominance grows, but it does not vanish — it evolves, its long haft and combined-head logic feeding directly into the poleaxe and the Lochaber and galloglass axes of later centuries.'),
    S('Regional variation',
      'Danish and Norwegian finds dominate the surviving record and define the type, with the widest and thinnest blades coming from tenth- and eleventh-century Danish contexts.',
      'English examples are known chiefly from illustration rather than survival, and the Bayeux Tapestry is effectively the primary source for how the weapon was used in England.',
      'Irish and Scottish traditions carried the form furthest forward in time: the galloglass axe of the later Middle Ages and the Lochaber axe are recognisable descendants, kept alive in places where heavy infantry stayed central to warfare.'),
    S('Famous examples or users',
      'The English housecarls of Harold Godwinson are the type\'s defining users, and their performance at Hastings — holding the ridge for most of a day before the line broke — is the reason the weapon carries the reputation it does.',
      'The Varangian Guard made it famous in the eastern Mediterranean, where Byzantine sources refer to the emperor\'s guardsmen by their axes, and the weapon became an emblem of the unit rather than merely its equipment.',
      'Surviving heads are held by the National Museum of Denmark, the Museum of Cultural History in Oslo and the British Museum, and many of the best-preserved come from rivers and bogs rather than from graves.'),
    S('Legacy',
      'The Dane axe is the direct ancestor of the poleaxe, the fifteenth century\'s premier weapon for armoured foot combat, and the logic carries straight across: a long haft, both hands, and a head that concentrates force.',
      'It also fixed an image. The axe-wielding Norse or Anglo-Saxon warrior is one of the most durable pictures in European popular memory, and the Bayeux Tapestry did more to establish it than any written source.',
      'Its most useful correction is about weight. The weapon that looks in art like a monstrous slab of iron was in fact a light, fast, thin-bladed tool — a piece of precision engineering rather than the brute object it is usually taken for.')
  ],

  mace: [
    S('Overview',
      'The mace is a shafted impact weapon with a heavy head, designed to defeat armour by transmitting force through it rather than by cutting or piercing. It runs from simple metal-bound clubs to the finely made flanged maces of the later Middle Ages.',
      'Its logic is the opposite of a blade\'s. A sword needs to reach flesh; a mace does not care whether it breaks the armour, because the damage happens to the man inside it.',
      'That made it increasingly relevant as armour improved, and the mace is one of the few weapons whose value rose steadily through the period rather than falling away.'),
    S('Design and construction',
      'A complete weapon typically runs 55 to 80 centimetres and weighs between 1 and 2.5 kilograms. The frequent claim that maces weighed ten or fifteen kilos is fantasy: a head that heavy could not be swung twice.',
      'The defining late-medieval form is the flanged mace, in which the head carries a ring of vertical iron blades standing out from the shaft. The flanges concentrate the impact along narrow ridges instead of spreading it over a rounded surface, which both increases the damage and helps the head bite rather than skid off a curved plate.',
      'Better examples are made as a single unit with the haft, so there is no join to fail under repeated hard impacts — a real advantage over an axe, where the haft-to-head joint is the weak point.'),
    S('Battlefield use',
      'It was a close-quarters weapon for armoured fighting, used mounted and on foot against opponents in mail or plate where a sword had little to offer.',
      'Against a helmet it is brutally effective. A mace blow does not need to breach the steel to concuss, stun or kill the man wearing it, and the fifteenth-century fight books treat a stunned opponent as a beaten one because the dagger follows immediately.',
      'It appears throughout the high and later Middle Ages in the hands of mounted men-at-arms, hung from the saddle where it could be taken up after the lance was gone — the same role the sword filled, for opponents the sword could not handle.'),
    S('Strengths and weaknesses',
      'Its strengths are armour-defeating impact, mechanical simplicity and durability. There is no edge to blunt, no point to bend and, on a one-piece head, no joint to loosen, so a mace stays serviceable through a campaign with no maintenance at all.',
      'Its weakness is reach and versatility. It is short, it has essentially one attack, it cannot parry, and against an unarmoured, mobile opponent a sword is simply the better weapon.',
      'It is also slow to recover. The weight that makes it effective makes it hard to stop and redirect, so a missed blow leaves a longer opening than a missed sword cut would.'),
    S('Historical development',
      'Simple clubs and metal-headed maces are ancient and continuous, and early medieval Europe shows knobbed and bound forms without much design ambition behind them.',
      'The type becomes a serious weapon in the twelfth and thirteenth centuries as mail becomes general, since mail is precisely the armour that stops edges and does nothing about impact.',
      'The flanged mace arrives in the fourteenth century in answer to plate and represents the mature form, staying in use well into the sixteenth — long after many contemporaries had become obsolete.'),
    S('Regional variation',
      'Eastern and Central European workshops produced the most developed flanged forms, and Hungarian, Polish and Rus\' examples are among the finest surviving, some with gilded or engraved heads.',
      'Western European maces tend to be plainer in the field, though the Wallace Collection and the Royal Armouries hold ornate Italian and German pieces that were as much statements of rank as weapons.',
      'The Ottoman and Mamluk traditions ran in parallel and were encountered directly on crusade and in the Balkans, and eastern forms influenced Central European design through the later Middle Ages.'),
    S('Famous examples or users',
      'The Bayeux Tapestry shows Odo of Bayeux, half-brother of William the Conqueror, carrying a club or mace at the Battle of Hastings in 1066, and that single image generated one of the most durable myths in the field.',
      'The myth is that clergy carried maces to avoid shedding blood, since canon law forbade it. There is no medieval authority for the claim: it is a much later invention, and medieval bishops who fought — Odo among them — used whatever weapons they liked and were criticised for fighting at all, not for the choice of weapon.',
      'By the later Middle Ages the mace had become an emblem of authority, carried before officials as a symbol of delegated power, which is why ceremonial maces still sit in parliaments and universities today.'),
    S('Legacy',
      'The mace is the most direct answer medieval Europe found to the problem of armour, and its logic never became obsolete — concussive force does not care what the target is wearing.',
      'Its ceremonial descendants are everywhere. The mace of a legislature or a university is a real weapon fossilised into a symbol, and the transition happened during the late medieval period itself rather than afterwards.',
      'It also punctures a comfortable idea about medieval warfare. The elegant weapons get the attention, but a great deal of armoured fighting was settled by hitting a man hard enough through his harness to stop him moving.')
  ],

  'war-hammer': [
    S('Overview',
      'The war hammer is a late-medieval weapon combining a hammer face with a curved rear spike, mounted on a short haft for one hand or a long one for two. It is a purpose-built answer to plate armour and appears when plate does.',
      'It solves the armour problem twice over. The hammer face delivers concussion through the plate, and the spike concentrates enormous force on a single point to punch through it or to hook and drag.',
      'It belongs to the fifteenth century above all, the period in which a fully armoured man-at-arms was the hardest target on the battlefield and the whole armoury was reorganising around him.'),
    S('Design and construction',
      'The horseman\'s hammer runs 50 to 70 centimetres with a head of 0.8 to 1.5 kilograms; two-handed versions on hafts of 1.2 metres or more shade into polearm territory and are usually classed with the poleaxe family.',
      'The head has two working faces. The hammer is often serrated or studded so it bites rather than glances off a curved plate, and the rear spike — the beak or fluke — curves downward to a point, so that the wielder\'s pulling motion drives it in rather than skidding.',
      'Better examples have langets, iron straps running down the haft from the head, which stop an opponent cutting the shaft and stop the head loosening. Some hafts are entirely of steel, which removes the weak point altogether.'),
    S('Battlefield use',
      'It was used by armoured men against armoured men, mounted and on foot, and belongs to the same tactical world as the poleaxe and the rondel dagger: weapons for beating a harness rather than for beating a man.',
      'The hammer face was used against helmets and the large curved surfaces of the harness to stun and disable, while the spike went for the thinner or less well-supported places — the joints, the back of the helmet, the shoulder.',
      'The spike also functioned as a hook. It could catch a limb, a shield rim or a helmet and drag a man off balance or off a horse, and once he was down the fight moved to grappling and the dagger.'),
    S('Strengths and weaknesses',
      'Its great strength is that it addresses armour two ways at once, so the wielder chooses his method against whatever part of the harness he can reach. Nothing else in the armoury is as flexible against plate.',
      'Its weakness is reach. The one-handed hammer is very short, and its user has to get inside the range of almost every other weapon on the field to use it, which is why it belongs to men who were themselves well armoured.',
      'It is also poor against an unarmoured opponent, where a sword is faster, longer and more versatile — a specialist weapon that is close to useless outside its specialism.'),
    S('Historical development',
      'It emerges in the fourteenth century alongside the spread of plate defences, and the timing is not a coincidence: the weapon exists because the target changed.',
      'The fifteenth century is its mature period, when it becomes standard cavalry equipment across Western and Central Europe and appears throughout the art of the Hundred Years\' War and the Burgundian wars.',
      'It persists into the sixteenth century, and the two-handed forms — the Lucerne hammer among them — remain in Swiss and German infantry service after the mounted hammer had begun to fade.'),
    S('Regional variation',
      'German and Central European workshops produced the most developed forms, including all-steel hafts and elaborately shaped beaks, and the war hammer is particularly prominent in Imperial and Hungarian contexts.',
      'French and Burgundian sources show it constantly in the hands of mounted men-at-arms, and the horseman\'s hammer became close to a badge of that class in the fifteenth century.',
      'Swiss infantry developed the long-hafted Lucerne hammer, which sits between the war hammer and the polearm and was used in the massed pike formations where reach mattered more than handiness.'),
    S('Famous examples or users',
      'The Wallace Collection, the Royal Armouries at Leeds and the Metropolitan Museum of Art all hold fine fifteenth-century examples, several with steel hafts and shaped beaks.',
      'It appears throughout the illustrated record of the period in the hands of armoured men-at-arms, and manuscript images of fifteenth-century battle show the hammer, the poleaxe and the mace crowding out the sword in exactly the way the surviving equipment suggests.',
      'The German fight books treat it within the broader teaching on armoured combat, where the underlying instruction is consistent whatever the weapon: control the man, unbalance him, and finish on the ground.'),
    S('Legacy',
      'The war hammer is the sharpest evidence available that medieval arms development was driven by a genuine contest. Plate armour was good enough to force the invention of dedicated tools to defeat it, and this is the most specialised of them.',
      'It left little military inheritance, because the problem it solved disappeared with the armour that created it — a weapon that became obsolete by winning rather than by failing.',
      'It remains a useful corrective to the picture of late-medieval combat as a sword fight. On a fifteenth-century battlefield the man-at-arms reached for a hammer or a poleaxe, and the sword hung at his hip largely unused.')
  ],

  poleaxe: [
    S('Overview',
      'The poleaxe is the specialist weapon of armoured foot combat in the fourteenth and fifteenth centuries: an axe blade or hammer face, a rear spike and a top spike, mounted on a haft of one and a half to two metres.',
      'It is emphatically not a peasant weapon. A poleaxe was expensive, purpose-made equipment for men who fought in full harness, and it was the weapon a fifteenth-century knight expected to use when he dismounted.',
      'It brings every anti-armour method together in one object — cut, concussion, thrust and hook — which is why it dominated the one form of combat where all four were needed at once.'),
    S('Design and construction',
      'The head carries three working parts: an axe blade or hammer face on one side, a spike or beak on the other, and a spike at the top for thrusting. Every one of them addresses armour a different way, and the wielder chooses in the moment.',
      'The haft runs 1.5 to 2 metres and is protected by langets — long iron straps running down from the head — so an opponent cannot simply cut the shaft in half. Many have a rondel disc guarding the forward hand.',
      'The whole weapon weighs typically 2 to 3 kilograms, well distributed along its length. That balance is the point: it is fast enough to fence with despite its size, which is what separates it from a simple heavy axe on a long stick.'),
    S('Battlefield use',
      'Its home is the dismounted fight between armoured men, which is where fifteenth-century battles were increasingly decided as men-at-arms left their horses to fight on foot.',
      'The whole weapon is a tool for the whole engagement. The spike keeps an opponent at distance, the axe or hammer strikes, the beak hooks a limb or an ankle to bring him down, and the butt end is used at close quarters where the head has no room.',
      'At the Battle of Agincourt in 1415 the French men-at-arms advanced dismounted, and the fighting in the press was done with exactly this class of weapon — a battle that illustrates both the poleaxe\'s dominance and the danger of the crush it was used in.'),
    S('Strengths and weaknesses',
      'It is the most complete anti-armour weapon of the Middle Ages. Against a harness that defeats cuts and turns thrusts, the poleaxe offers concussion, a hook and a stiff point, and it applies them all at a reach the opponent must cross.',
      'Its weakness is that it needs both hands and space. A poleaxe user carries no shield and cannot fight effectively in a tight press or a confined space, and the crush at Agincourt showed how badly that can go.',
      'It is also useless mounted, and expensive. This is equipment for a particular kind of fight — one that a knight of the fifteenth century expected to have, which is why so many owned one.'),
    S('Historical development',
      'It develops in the fourteenth century out of the long-hafted axe, driven by the same pressure that produced the war hammer: plate armour made cutting weapons ineffective and combined-head weapons necessary.',
      'The fifteenth century is its high period, when it is the standard weapon of the dismounted man-at-arms across Western Europe and the weapon of choice in the formal judicial duel.',
      'It fades in the sixteenth century with the armour and the style of fighting that justified it, leaving the halberd — a cheaper, longer, infantry-formation weapon — as the surviving member of the family.'),
    S('Regional variation',
      'French and Burgundian forms favour the axe blade with a rear beak; German examples more often use a hammer face, and the vocabulary in each language reflects the local preference.',
      'English sources use "poleaxe" broadly for the whole family, and the modern habit of distinguishing poleaxe, pollaxe, hache and Mordaxt imposes precision that medieval writers did not.',
      'Italian material shows lighter, more elaborate versions made for the judicial duel and the tournament, where the weapon\'s handling qualities mattered as much as its destructive power.'),
    S('Famous examples or users',
      'Le Jeu de la Hache, an anonymous French treatise of around 1400, is the outstanding source: a complete fighting system for the poleaxe alone, with no other weapon considered, which tells you how seriously the weapon was taken.',
      'Fiore dei Liberi covers it in his treatise of about 1409, and the German masters after Johannes Liechtenauer teach it within the broader curriculum of armoured combat, so the weapon is documented across three traditions.',
      'The Royal Armouries at Leeds, the Wallace Collection and the Metropolitan Museum of Art hold substantial groups, and many surviving examples show the wear that comes from real use rather than display.'),
    S('Legacy',
      'The poleaxe represents the highest development of medieval hand-to-hand weapon design: a single object that answers every property of a plate harness, evolved over a century of trying.',
      'Its descendant is the halberd, which took the combined-head idea into massed infantry service and remained standard for another two centuries after the poleaxe itself had gone.',
      'It is also the strongest argument against the sword-centred picture of medieval combat. The knight of 1415 fought on foot with a poleaxe; the sword was the sidearm he hoped not to need.')
  ]
}

let n = 0
for (const [id, sections] of Object.entries(articles)) {
  const entry = data.weaponsArmor.find((x) => x.id === id)
  if (!entry) throw new Error(`missing article: ${id}`)
  const before = (entry.contentSections ?? []).flatMap((s) => s.paragraphs ?? []).join(' ').length
  entry.contentSections = sections
  const after = sections.flatMap((s) => s.paragraphs).join(' ').length
  console.log(`${id.padEnd(14)} ${String(before).padStart(5)} -> ${String(after).padStart(5)} chars  (${sections.length} sections, ${sections.flatMap((s) => s.paragraphs).length} paragraphs)`)
  n++
}

writeFileSync(dataPath, JSON.stringify(data, null, 2))
console.log(`\n${n} axe and impact articles rewritten; history.json written`)
