/**
 * M5 batch 5b — the shafted weapons rewritten to the documented standard: an
 * overview plus the seven mandated weapon topics, three substantial paragraphs
 * each, with named battles, individuals and surviving objects throughout.
 *
 * Only battles that have articles are named in prose (Hastings, Stamford Bridge,
 * Bouvines, Courtrai is NOT used, Crécy, Poitiers, Agincourt, Grunwald, Nicopolis,
 * Castillon, Arsuf, Las Navas de Tolosa, Bannockburn).
 */
import { readFileSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dataPath = path.join(__dirname, '../server/data/history.json')
const data = JSON.parse(readFileSync(dataPath, 'utf8'))
const S = (title, ...paragraphs) => ({ title, paragraphs })

const articles = {
  spear: [
    S('Overview',
      'The spear is the weapon of the medieval battlefield. Not the sword, not the axe: a shaft of ash with an iron head, carried by more men in more armies over more centuries than every other weapon in this archive combined.',
      'It is under-represented everywhere except the ground. Poets sing about swords, artists draw swords, and museums display swords — but the graves, the muster rolls and the ordinances all say spear, and the discrepancy is one of the more instructive things about the medieval record.',
      'Its dominance is a matter of arithmetic. A spear costs almost nothing, can be made by any village smith, teaches quickly, and gives an ordinary man a real chance against a better-equipped one. Nothing else in the armoury does all four.'),
    S('Design and construction',
      'A typical infantry spear runs 1.8 to 2.5 metres with a head of 20 to 50 centimetres, and the whole weapon weighs between 1 and 2 kilograms. Ash is the preferred shaft wood across northern Europe for its combination of straightness, strength and flex.',
      'The head is usually socketed: a flat iron blank forged into a leaf or lozenge blade with the base wrapped around a mandrel to form a socket, which then takes the shaft and is fixed with a rivet. Only the edges need hardening, so the steel requirement is tiny.',
      'Some heads carry lugs or wings projecting from the base of the blade. These stop the head being driven too deep to withdraw — a serious practical problem when spearing a man or a boar — and give a surface for parrying and for controlling an opponent\'s weapon.'),
    S('Battlefield use',
      'Its power is collective. A line of spears presented together is close to impassable to infantry and horses alike, because each man is protected by his neighbours\' points as much as by his own, and the formation only fails when it loses cohesion.',
      'The Anglo-Saxon shield wall at the Battle of Hastings in 1066 was built on spear and shield, and the Norman cavalry could not break it frontally for most of the day — it broke when men left the line to pursue, which is the standard way such formations die.',
      'It served mounted men too. Before the couched lance became standard, cavalry used the spear overhand and underhand, thrown and thrust, and the Bayeux Tapestry shows Norman horsemen using it in all of those ways within the same scene.'),
    S('Strengths and weaknesses',
      'Its strengths are reach, cost and the speed with which a man can be made useful with it. A levy given spears and a fortnight\'s drill is a real military asset; the same men given swords are not.',
      'Its weakness is the moment the formation breaks. In a swirling close fight a two-metre shaft is a liability, which is precisely why spearmen carried a seax, an axe or a knife for the point when the line dissolved.',
      'It is also poor against heavy armour on its own. A spear point will find a mail gap and can be driven hard, but against a fifteenth-century harness the infantry answer was a longer, heavier staff weapon with a hook and a hammer, not a plain spear.'),
    S('Historical development',
      'The spear is continuous from prehistory and shows no medieval starting point. What changes is context: the migration-period spear and shield give way to the Carolingian and Anglo-Saxon shield wall, then to the twelfth- and thirteenth-century infantry line.',
      'The great development is length. From the fourteenth century infantry spears grow into pikes of four metres and more, fielded in deep blocks that could stop cavalry outright — the Swiss and Flemish formations that reshaped European infantry warfare.',
      'The shorter spear never disappeared. It stayed in service as a hunting weapon, a guard weapon and a militia weapon long after the pike had taken over the battlefield proper.'),
    S('Regional variation',
      'Scandinavian and Anglo-Saxon heads are relatively broad and leaf-shaped, built for cutting as well as thrusting, and Norse sources describe spears used to hew as well as to stab.',
      'Frankish and later continental forms include winged and lugged heads in large numbers, and the wing is more common in central Europe than in the north or in Britain.',
      'Mediterranean and Iberian traditions favoured lighter shafts and narrower heads, well suited to the more mobile, skirmishing warfare of the Iberian frontier, where heavy static formations were less useful than speed.'),
    S('Famous examples or users',
      'The Bayeux Tapestry is the single best source for how spears were carried and used in the eleventh century, showing them thrown, thrust overhand, couched and presented in a line, all within one narrative.',
      'Anglo-Saxon and Scandinavian grave assemblages contain spearheads in enormous numbers — far outnumbering swords — and their distribution is the strongest evidence available for who actually fought and with what.',
      'English legislation makes the point in writing: the Assize of Arms of 1181 and the Statute of Winchester of 1285 both define the equipment men must own by their wealth, and for the great majority the requirement is a spear, a knife and a padded coat.'),
    S('Legacy',
      'The spear\'s descendant is the pike, and through the pike it shaped European warfare until the socket bayonet made every musketeer his own spearman — at which point the weapon disappeared by being absorbed rather than replaced.',
      'It also remains the strongest corrective to a sword-centred view of the Middle Ages. The typical medieval combatant was a spearman, and any picture of medieval war built on swords is a picture of a small and unrepresentative minority.',
      'Its social meaning ran the other way too: because everyone had one, the spear never acquired the prestige of the sword, and the historical record is skewed accordingly by the people who wrote it.')
  ],

  lance: [
    S('Overview',
      'The lance is the cavalry spear of the high and later Middle Ages, used couched — locked under the arm against the body — so that the weapon delivers the full momentum of horse and rider at a single point.',
      'That technique is the whole story. A spear thrown or thrust delivers the strength of a man\'s arm; a couched lance delivers the mass of a charging horse, and the difference is a change of kind rather than of degree.',
      'It became the defining weapon of the mounted warrior class and the basis of the shock charge that dominated European battlefields for roughly four centuries.'),
    S('Design and construction',
      'A war lance runs typically 3 to 4 metres and weighs 2 to 4 kilograms, most often of ash. It is far heavier and thicker than an infantry spear because it must survive an impact that would shatter a lighter shaft.',
      'The mature form is not a plain pole. From the fourteenth century the shaft swells behind the grip and narrows again, so the hand sits in a waisted section that resists the weapon being driven backward through the grip on impact.',
      'Two fittings complete the system. The vamplate, a conical steel guard, protects the hand, and the lance rest — a bracket bolted to the right side of the breastplate — takes the shock into the armour and the rider\'s body rather than into his arm alone.'),
    S('Battlefield use',
      'The couched charge works by mass and cohesion. Riders advance knee to knee at a controlled pace and strike together, and the effect depends far more on the formation arriving intact than on any individual\'s skill.',
      'It is a single-use weapon in practice. Lances shatter on impact or are abandoned in a target, which is why every man-at-arms carried a sword, a mace or a hammer for the fight that followed — the lance opens the engagement and rarely survives it.',
      'It could be stopped, and increasingly was. At the Battle of Bannockburn in 1314 English cavalry broke on Scottish schiltrons of spearmen, and the Battle of Agincourt in 1415 saw the French dismount most of their men-at-arms precisely because a mounted charge into prepared positions had become a poor bet.'),
    S('Strengths and weaknesses',
      'Its strength is unmatched shock. Nothing else in medieval warfare concentrates that much energy on that small an area, and a well-delivered charge against unsteady infantry or disordered cavalry decides a battle in a minute.',
      'Its weaknesses are ground, cohesion and the enemy\'s preparation. Mud, slopes, ditches, stakes and hedges all break a charge, and a charge that arrives ragged achieves nothing while presenting the horses to be killed.',
      'It is also nearly useless afterwards. Long, unwieldy and probably broken, the lance is discarded as soon as contact is made, so its user needs a full secondary armoury to remain in the fight.'),
    S('Historical development',
      'The couching technique spreads in the eleventh and twelfth centuries, and the Bayeux Tapestry catches the transition: it shows Norman riders at the Battle of Hastings in 1066 holding spears overhand, underhand and couched, all at once.',
      'The thirteenth century is its unchallenged period, and the Battle of Bouvines in 1214 is the classic demonstration of massed heavy cavalry deciding a major engagement.',
      'From the fourteenth century infantry answers accumulate — pike blocks, archery, dismounted men-at-arms, field fortification — and the lance stops being decisive on its own, though it remains standard cavalry equipment into the sixteenth century and survives longest in the tournament.'),
    S('Regional variation',
      'French and Burgundian practice represents the mature Western form: heavy lance, vamplate, lance rest, and the whole harness engineered around delivering and absorbing the charge.',
      'Iberian warfare kept lighter cavalry and lighter lances alongside the heavy tradition, since the frontier campaigning of the peninsula rewarded speed, raiding and pursuit more than a single decisive shock.',
      'Eastern and Central European practice developed its own heavy lance traditions, and Polish and Hungarian cavalry carried the couched lance forward into the early modern period after Western Europe had largely moved on.'),
    S('Famous examples or users',
      'Battlefield lances are essentially absent from museum collections, for the obvious reason: a weapon designed to shatter on impact and made almost entirely of wood leaves nothing behind.',
      'What survives is tournament equipment. The Royal Armouries, the Wallace Collection and the Kunsthistorisches Museum in Vienna hold jousting lances, vamplates and lance rests, and those are the objects almost every modern reconstruction is based on.',
      'The written and illustrated record fills the gap: chronicle accounts of Bouvines, manuscript illumination of the Hundred Years\' War, and the effigies and brasses that show how the lance rest sat on the breastplate.'),
    S('Legacy',
      'The lance created a social class as much as a tactic. The mounted, lance-armed warrior is the material basis of European knighthood, and the equipment and the status developed together.',
      'It survived longest as sport. The joust outlived the battlefield charge by generations, and the tournament lance — deliberately weakened to break safely — is what most people picture when they picture the weapon.',
      'Cavalry lances returned in the nineteenth century and lasted until the First World War, but that revival owes more to Polish and Cossack practice than to any unbroken descent from the medieval couched charge.')
  ],

  'javelin-throwing-spear': [
    S('Overview',
      'The javelin is the thrown spear: lighter and shorter than a fighting spear, carried in numbers, and used to break up an enemy formation before contact rather than to decide a fight by itself.',
      'It belongs to skirmishing warfare — raids, ambushes, frontier fighting and the opening stages of a battle — and to armies that valued mobility over the weight of a formed line.',
      'It never dominated European warfare the way the spear and the bow did, but it persisted for centuries in exactly the places where its qualities mattered, above all Iberia and the Mediterranean.'),
    S('Design and construction',
      'A javelin typically runs 1.2 to 1.8 metres and weighs well under a kilogram — perhaps 400 to 800 grams — because everything about it is subordinated to how far and how accurately it can be thrown.',
      'Heads are small and narrow, since a thrown weapon carries little energy and needs to concentrate what it has. Many are barbed so they cannot be pulled free and thrown back.',
      'Some forms use a long, soft iron shank behind the head, so the weapon bends on impact and is useless to the enemy — the principle of the Roman pilum, which persisted in the Frankish angon of the early medieval period.'),
    S('Battlefield use',
      'Javelins were thrown in volleys at short range, generally under thirty metres, immediately before contact. The aim is disruption: men flinching, shields raised, the line losing its dressing at the moment it most needs to hold.',
      'Against shields the effect can be mechanical rather than lethal. A javelin lodged in a shield makes it heavy and awkward, and a man who has to discard his shield in the front rank is effectively disarmed.',
      'Light cavalry used them extensively for harassment, riding within range, throwing, and withdrawing before contact — a technique that dominated Iberian frontier warfare and much of the fighting around the Mediterranean.'),
    S('Strengths and weaknesses',
      'Its strengths are speed, cheapness and the ability to hurt an enemy before he can reach you. A man can carry several, throw them quickly, and then fight with something else.',
      'Its weaknesses are range and power. A javelin is outranged decisively by any serious bow and delivers far less energy on arrival, so against well-armoured opponents it accomplishes little.',
      'Ammunition is the practical limit. A skirmisher carries perhaps three to six, and once they are thrown he is finished as a missile troop and must either withdraw or fight with a sidearm.'),
    S('Historical development',
      'Early medieval Europe inherited the thrown spear from the Roman world, and the Frankish angon — a barbed, long-shanked javelin of the sixth and seventh centuries — is its clearest early descendant.',
      'Through the high Middle Ages it retreats in northern Europe as the bow and then the crossbow take over the missile role more effectively, and by the thirteenth century it is marginal in most Western armies.',
      'It survived vigorously in Iberia, where the jinete light cavalry of the later Middle Ages used javelins as a central part of their tactics, and in the Mediterranean and Balkan warfare where similar conditions applied.'),
    S('Regional variation',
      'Iberian practice is the most developed. The jinetes rode light, threw javelins and avoided contact, and their tactics were shaped by centuries of frontier warfare where raiding mattered more than pitched battle.',
      'Frankish and Germanic forms of the early medieval period are heavier and closer to a thrown fighting spear, and the angon in particular is built to disable a shield rather than to kill at range.',
      'Byzantine and Balkan armies used javelin-armed light infantry throughout the period, and the technique passed back and forth across the frontier with the peoples who practised it on both sides.'),
    S('Famous examples or users',
      'The Iberian jinetes are the best-documented users, and their style of war was distinctive enough that the word passed into other languages to describe light cavalry generally.',
      'Angon heads survive in Frankish grave assemblages across northern France and the Rhineland, and their barbed, long-shanked construction is unmistakable and well represented in continental museum collections.',
      'Manuscript illustration across the Mediterranean world shows javelin-armed skirmishers throughout the period, and the Iberian chronicles describe their raiding tactics in enough detail to reconstruct how the weapon was actually used.'),
    S('Legacy',
      'The javelin is the weapon that best shows how European warfare specialised. It lost the missile role to the bow and the crossbow because those simply did the job better, and it survived only where mobility mattered more than range.',
      'Its tactical logic outlived the weapon. Light, mobile troops harassing a heavier enemy and refusing contact is a pattern that recurs throughout military history, and the Iberian jinetes are one of its clearest medieval expressions.',
      'It also has the distinction of surviving as sport rather than as war, which is a fate it shares with the bow and with almost nothing else in this archive.')
  ],

  halberd: [
    S('Overview',
      'The halberd is the great infantry polearm of the later Middle Ages: an axe blade, a rear hook or spike and a thrusting spike at the top, mounted on a shaft of roughly two metres.',
      'It is the poleaxe adapted for massed infantry — longer, cheaper and made in quantity — and it gave foot soldiers a weapon that could genuinely deal with an armoured horseman.',
      'It emerged with the Swiss in the fourteenth century and became one of the most widely used infantry weapons in Europe, staying in service for centuries after the medieval period ended.'),
    S('Design and construction',
      'The shaft runs 1.8 to 2.5 metres and the head combines three tools: a broad axe blade for cutting, a spike or beak on the reverse for hooking and punching, and a spike on top for thrusting.',
      'The complete weapon usually weighs between 2.5 and 3.5 kilograms, with the mass concentrated at the head. That makes it slower than a poleaxe but far more damaging on a full swing, and the extra length is worth the trade in a formation.',
      'Langets — iron straps running down from the head along the shaft — are standard, protecting the wood from being cut through and stopping the head loosening under repeated heavy impacts.'),
    S('Battlefield use',
      'It was used in formation rather than individually, and its natural partner is the pike. Pikes hold an enemy at distance and halberdiers step in to do the killing where the pike wall meets the enemy.',
      'Against cavalry it is devastating. The hook drags a rider from the saddle, the axe kills the horse, and the spike keeps the animal off in the meantime, so a body of halberdiers could break a charge that would ride down loose infantry.',
      'The Swiss made their reputation with it during the fourteenth and fifteenth centuries, and Swiss infantry became the most sought-after mercenaries in Europe on the strength of what pike-and-halberd formations could do.'),
    S('Strengths and weaknesses',
      'Its strength is doing several jobs at once for very little money. Cut, thrust and hook in one head, on a shaft any village could supply, meant a town militia could be armed to fight men-at-arms.',
      'Its weakness is that it needs a formation and space to swing. A halberdier alone is at a serious disadvantage against a swordsman who can close inside the head, and in a crush the weapon cannot be used at all.',
      'It also gives up reach to the pike. In the fifteenth and sixteenth centuries that mattered increasingly, and the halberd\'s role narrowed to supporting the pike block rather than forming the main line.'),
    S('Historical development',
      'It appears in the Swiss cantons in the fourteenth century, developing from the long-hafted axe and the agricultural billhook, and its early success is bound up with the emergence of Swiss infantry as a serious military force.',
      'Through the fifteenth century it spreads across the Empire and beyond as Swiss and German mercenaries carry it, and the head becomes more elaborate — thinner blades, more pronounced beaks, decorated surfaces.',
      'It remains in wide service into the seventeenth century, then follows the mace into ceremony, and it survives today in the guard formations that kept their historic equipment.'),
    S('Regional variation',
      'Swiss and South German forms are the classic type and set the standard for the whole of Europe, with a broad blade, a strong rear beak and a substantial top spike.',
      'Italian workshops produced lighter, more decorated versions, some of them clearly parade equipment for guards rather than field weapons, and these are heavily represented in museum collections.',
      'Related weapons shade into it at the edges — the voulge, the Lucerne hammer, the bardiche — and the boundaries between them are largely modern conveniences imposed on a continuum of local forms.'),
    S('Famous examples or users',
      'The Swiss infantry of the fourteenth and fifteenth centuries are the defining users, and their combination of pike and halberd made them the most effective and most in-demand infantry in Europe.',
      'The Papal Swiss Guard still carries the halberd, an unbroken line of ceremonial use running back to the mercenary companies that made the weapon famous.',
      'The Swiss National Museum in Zurich, the Kunsthistorisches Museum in Vienna and the Royal Armouries hold extensive collections, and Swiss and German museums preserve field examples with genuine combat damage.'),
    S('Legacy',
      'The halberd is a large part of the story of how infantry regained the battlefield from cavalry. Combined with the pike, it let foot soldiers beat mounted men-at-arms consistently, which had not been true for centuries.',
      'It outlasted almost every other medieval weapon in active service, remaining standard European infantry equipment into the seventeenth century and ceremonial equipment to the present.',
      'It is also the enduring member of the poleaxe family — the cheaper, longer, mass-issue cousin that survived precisely because it was made for armies rather than for individuals.')
  ],

  'bill-billhook': [
    S('Overview',
      'The bill is the English infantry polearm of the later Middle Ages, developed directly from the agricultural billhook: a curved cutting blade with a hook, a spike and often a rear spur, on a shaft of around two metres.',
      'Its origin in a farm tool is genuine rather than fanciful. The billhook was and remains a hedging and pruning implement, and the military bill is the same idea made larger, heavier and given a thrusting point.',
      'It was the characteristic weapon of English foot soldiers through the fifteenth century and into the sixteenth, so much so that "bills and bows" became the standard shorthand for an English army.'),
    S('Design and construction',
      'The shaft runs 1.8 to 2.4 metres and the head carries three or four working parts: a concave cutting edge, a pronounced hook at the top, a thrusting spike, and frequently a rear spur for punching.',
      'The hook is the defining element. Where a halberd\'s beak punches, a bill\'s hook grabs — it is shaped to catch a limb, a rein, a shield rim or the edge of a plate defence and pull, which is what the agricultural version does to a branch.',
      'Complete weapons weigh 2.5 to 3.5 kilograms and, like the halberd, carry langets down the shaft to protect the wood. The heads are usually simpler and cheaper to make than a halberd\'s, which was part of the appeal.'),
    S('Battlefield use',
      'It was the close-combat partner of the longbow in English armies. Archers shot until the enemy closed and then fought with bills and swords, and the two arms are consistently mentioned together in muster records and ordinances.',
      'Its speciality is unhorsing and unbalancing. The hook drags a rider down or pulls an infantryman out of his line, and once a man is off his feet the fight is effectively over.',
      'The English armies of the fifteenth century relied on it heavily, and it remained standard equipment through the civil wars of that century, when English forces fought largely on foot with bills, bows and poleaxes.'),
    S('Strengths and weaknesses',
      'Its strengths are cost, familiarity and versatility. A billhook was already in every English village, the transition to the military form required no new skills to make and few to use, and the finished weapon cuts, thrusts and hooks.',
      'Its weakness, shared with the halberd, is that it needs room and a formation. In a press the head is useless, and against a swordsman who gets inside the point the billman is in serious trouble.',
      'It is also less effective than a halberd against the best plate. The bill is a superb tool for catching and dragging, but its cutting edge does less against a good harness than a heavy axe blade would.'),
    S('Historical development',
      'It develops from the agricultural billhook during the thirteenth and fourteenth centuries, as militia weapons were drawn from what people already owned and then improved for war.',
      'The fifteenth century is its high point, when it becomes standard English infantry equipment and appears throughout the period\'s muster documents alongside the bow.',
      'It persisted into the sixteenth century, longer in England than in most of Europe, and Tudor musters still list bills in numbers when continental armies had largely moved to pike and shot.'),
    S('Regional variation',
      'The bill is characteristically English, and its prominence there reflects a military system built on shire levies equipped from what the community already had rather than on professional mercenary infantry.',
      'Italian workshops produced related forms — the roncone and its relatives — which share the hooked head but were often more elaborate, and Italian parade versions are common in museum collections.',
      'Continental Europe generally preferred the halberd, and the difference between English bill and Swiss halberd is a reasonable index of the difference between the two military systems that produced them.'),
    S('Famous examples or users',
      'English shire levies and retinues are the defining users, and the phrase "bills and bows" recurs throughout fifteenth-century English military documents as the standard description of a body of foot.',
      'The Royal Armouries at Leeds holds a substantial collection of English bills, including field examples that show the wear and repair of real service rather than parade condition.',
      'The weapon appears constantly in fifteenth- and sixteenth-century English illustration and in the muster rolls, which record who owned one and are among the best evidence available for how ordinary English soldiers were armed.'),
    S('Legacy',
      'The bill is the clearest case in the archive of a farm tool becoming a serious military weapon, and it kept the resemblance to its origin more visibly than anything else in medieval Europe.',
      'It also marks a real divergence in military systems: England fielded billmen and archers where the continent fielded pikemen and halberdiers, and the difference shaped how English armies fought for two centuries.',
      'It survives in its original form. The billhook is still made and still used for hedging, which makes it one of the very few objects here whose civilian version outlived its military one and is still in production.')
  ]
}

let n = 0
for (const [id, sections] of Object.entries(articles)) {
  const entry = data.weaponsArmor.find((x) => x.id === id)
  if (!entry) throw new Error(`missing article: ${id}`)
  const before = (entry.contentSections ?? []).flatMap((s) => s.paragraphs ?? []).join(' ').length
  entry.contentSections = sections
  const after = sections.flatMap((s) => s.paragraphs).join(' ').length
  console.log(`${id.padEnd(24)} ${String(before).padStart(5)} -> ${String(after).padStart(5)} chars  (${sections.length} sections, ${sections.flatMap((s) => s.paragraphs).length} paragraphs)`)
  n++
}

writeFileSync(dataPath, JSON.stringify(data, null, 2))
console.log(`\n${n} shafted-weapon articles rewritten; history.json written`)
