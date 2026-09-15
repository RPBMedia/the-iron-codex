/**
 * M5 batch 4 — the five bladed sidearms rewritten to the documented standard:
 * an overview plus the seven mandated weapon topics, three substantial paragraphs
 * each, with named battles, individuals and surviving objects throughout.
 *
 * Only battles that have articles are named in prose (Hastings, Stamford Bridge,
 * Stiklestad, Bouvines, Crécy, Poitiers, Agincourt, Grunwald, Arsuf).
 *
 * Named objects used here are real and checkable: the Conyers Falchion at Durham,
 * the Thorpe Falchion at Norwich, the Seax of Beagnoth in the British Museum, and
 * Royal Armouries MS I.33. No accession numbers are invented, and dimensions are
 * given as ranges.
 */
import { readFileSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dataPath = path.join(__dirname, '../server/data/history.json')
const data = JSON.parse(readFileSync(dataPath, 'utf8'))
const S = (title, ...paragraphs) => ({ title, paragraphs })

const articles = {
  'arming-sword': [
    S('Overview',
      'The arming sword is the single-handed cruciform sword of the high and later Middle Ages: a straight double-edged blade, a simple cross guard, a grip for one hand and a counterweighting pommel. For roughly four centuries it was the standard sidearm of anyone who fought for a living.',
      'The name is modern shorthand. Medieval sources call it simply a sword, and "arming sword" comes into use later to distinguish it from the two-handed longsword that grew up beside it in the fourteenth century.',
      'It was rarely the weapon that decided a fight. Men went into battle with a spear, a lance, a poleaxe or a bow, and drew the sword when those were gone, broken or useless at close quarters — which is precisely why almost everyone carried one.'),
    S('Design and construction',
      'A typical example runs about 90 to 100 centimetres overall with a blade of 70 to 80, and weighs between roughly 1 and 1.5 kilograms. The persistent claim that medieval swords weighed five or ten kilos is nonsense that survives because almost nobody has held one.',
      'The blade is forged with a distal taper — thicker at the hilt, thinner toward the point — and usually carries a fuller, a shallow groove running down part of its length. The fuller lightens the blade without weakening it, in the same way an I-beam is stiff for its weight; it is not a "blood groove", which is a modern invention with no medieval basis.',
      'Balance is set by the pommel, a solid mass of iron or steel peened onto the tang behind the hand. Moving weight rearward brings the point of balance close to the guard and makes the sword feel quick, and the variety of pommel shapes catalogued in Ewart Oakeshott\'s typology is largely a record of armourers adjusting that feel.'),
    S('Battlefield use',
      'It was a companion weapon, worn at the hip and drawn when the primary weapon failed. Cavalry used it after the lance shattered, infantry after the spear was lost, and both used it in the crush where longer weapons had no room.',
      'It was designed around a shield. Through the eleventh to thirteenth centuries the sword and the kite or heater shield are a single system, and the earliest surviving European fighting manual — Royal Armouries MS I.33, written around 1300 — teaches sword and buckler as a coordinated pair rather than the sword alone.',
      'Its role narrowed as armour improved. Against a fourteenth-century harness a cut achieves very little, and the fight manuals respond by teaching the sword to be gripped at the blade and used to thrust into gaps or to strike with the pommel — the sword used as a short lever rather than an edge.'),
    S('Strengths and weaknesses',
      'Its strength is versatility in one hand. It cuts, it thrusts, it can be worn all day without hindrance, it leaves the other hand free for a shield or a rein, and it works on foot or mounted without modification.',
      'Its weakness is armour. A sword cut is very dangerous to an unarmoured or lightly armoured man and close to irrelevant against plate, and even against good mail the edge is defeated by the fabric. The sword did not lose value because it was a bad weapon but because its opponents changed.',
      'It is also short. In an open field a spear or a poleaxe outreaches it decisively, and the sword only becomes the better tool once the distance has already closed to arm\'s length — which is why it is a sidearm in nearly every army that used it.'),
    S('Historical development',
      'Its ancestry is the Viking-age sword, and the transition around the eleventh century is gradual: the blade lengthens, the guard straightens and extends, and the multi-lobed Scandinavian pommel gives way to the disc and wheel forms that dominate the later Middle Ages.',
      'The thirteenth century is its broad-bladed high point, built for the cut against mail. From the fourteenth the profile changes markedly — blades narrow, taper harder and stiffen into a sharp point, because a stiff point is the only thing a sword can offer against plate.',
      'The fifteenth century sees it specialise in both directions at once: shorter, stiffer thrusting blades for armoured fighting, and lighter, more complex-hilted forms for civilian wear that lead directly toward the side-sword and the rapier.'),
    S('Regional variation',
      'European blades are remarkably standardised, in large part because the trade was international. Blades made in the Rhineland, above all around Solingen and Passau, were exported across the continent and hilted locally, so a "German" blade might carry an English or Italian hilt.',
      'What varies most is the hilt. Guard length, pommel shape and grip proportion differ by region and generation, and because these are the parts most easily replaced, many surviving swords are marriages of components from different decades.',
      'Scandinavian and Baltic finds tend to preserve earlier forms longer, while Italian and Iberian workshops move earliest toward the narrow, sharply tapering thrusting blade — a regional difference that tracks how quickly plate armour spread in each place.'),
    S('Famous examples or users',
      'The Bayeux Tapestry shows arming swords in use throughout the Battle of Hastings in 1066, carried alongside spears and kite shields, and its depictions are among the best evidence for how the weapon was worn and drawn.',
      'Royal Armouries MS I.33, the earliest European fight book, is the single most important source for how the weapon was actually handled, teaching a system of guards and counters for sword and buckler around 1300 — two centuries before the better-known German and Italian traditions were written down.',
      'The Royal Armouries at Leeds, the Wallace Collection and the Metropolitan Museum of Art hold substantial groups of surviving examples, and a great many more come from river finds, where anaerobic mud preserved blades that would have rusted away in the ground.'),
    S('Legacy',
      'The arming sword set the shape of the European sword for half a millennium: straight blade, cross guard, pommel counterweight. Nearly every later Western sword is a variation on that arrangement rather than a departure from it.',
      'It is also the ancestor of the civilian sword. As the battlefield role receded, the same weapon lightened, acquired a more protective hilt and became the side-sword and then the rapier — a weapon for streets and duels rather than for war.',
      'Its cruciform silhouette became one of the most recognisable symbols in European culture, carried onto tomb effigies, coats of arms and church monuments, where it stands for knighthood and for the cross at the same time.')
  ],

  'viking-sword': [
    S('Overview',
      'The Viking sword is the double-edged, single-handed sword of Scandinavia and the wider Norse world from roughly the eighth to the eleventh century. It is the most prestigious object in that culture\'s material record and the one most often buried with its owner.',
      'It was never common. Spears and axes armed most fighters, and a sword marked a man of standing — which is why the sagas name individual swords and treat them as heirlooms with histories, in a way they never treat an axe.',
      'The label is a modern convenience covering blades made across a wide area, many of them Frankish exports hilted in Scandinavia. Calling the type Viking describes who carried it rather than who made it.'),
    S('Design and construction',
      'A typical sword runs 85 to 95 centimetres overall with a broad blade of 70 to 80, a pronounced fuller, and a weight around 1 to 1.3 kilograms. The blade is broad and nearly parallel-sided, ending in a rounded or shortly tapered point — a cutting weapon, not a thrusting one.',
      'The hilt is short and gripped tightly between a lower guard and an upper guard surmounted by a pommel, often lobed into three or five sections. Jan Petersen\'s 1919 typology sorts these hilts into lettered types and remains the framework the whole field uses.',
      'Many earlier blades are pattern-welded: rods of iron and steel twisted and forge-welded together, then given hardened cutting edges. The technique produces a visible herringbone or serpentine figure in the metal and was a practical answer to inconsistent iron, but it declines through the tenth century as more reliable high-carbon steel became available.'),
    S('Battlefield use',
      'It was a cutting weapon used with a round shield, delivered from the shoulder and elbow at an opponent\'s head, arms and legs. Against a man in a padded coat or none at all, a single good cut ends the fight.',
      'The shield is half the system. Norse fighting as the sagas and the finds describe it is a matter of shield work and footwork with the sword arriving in the openings, and the wear patterns on surviving shield bosses show how much of the defensive work the shield did.',
      'It appears at the great engagements of the Norse world — the Battle of Stiklestad in 1030, where Olaf Haraldsson was killed, and the Battle of Stamford Bridge in 1066, where Harald Hardrada\'s army was destroyed weeks before the Norman landing.'),
    S('Strengths and weaknesses',
      'Its strength is the cut. A broad, well-balanced blade with hardened edges, swung from a shield wall, is devastating against flesh and against the mail and padding most opponents wore, and it remains quick enough in the hand to recover between blows.',
      'Its weakness is the point. The rounded tip and broad profile make it poor at thrusting, and against good mail the sword struggles in exactly the way that would later drive the whole European tradition toward narrower, stiffer blades.',
      'It was also expensive and slow to make. A pattern-welded blade represented weeks of skilled work, and that cost is the reason the sword signalled status: owning one said something about a man before he ever drew it.'),
    S('Historical development',
      'The type grows out of the migration-period sword of northern Europe, and by the eighth century it has settled into the broad-bladed, lobed-pommel form that dominates the Viking age.',
      'Through the ninth and tenth centuries the great change is metallurgical rather than formal. Imported Frankish blades of consistent high-carbon steel — the Ulfberht group above all — displace pattern-welding, and the sword becomes a better weapon without looking very different.',
      'From the late tenth century the hilt begins to change: guards lengthen and straighten, pommels simplify toward the disc, and by the eleventh century the sword has become the cruciform arming sword of the high Middle Ages. There is no break, only a slow reshaping.'),
    S('Regional variation',
      'Norway has produced the largest number of finds by a wide margin, because pagan furnished burial persisted there longest and swords went into the ground with their owners. That is an accident of burial custom, not evidence that Norwegians owned more swords.',
      'Danish and Swedish material is comparatively thinner for the same reason, and much of what survives from the Baltic and the Rus\' lands reflects trade and service abroad rather than local production.',
      'Insular hilts from Britain and Ireland often carry distinctive decoration in silver and copper alloy inlay applied to imported blades, which is the clearest evidence that blade-making and hilting were separate trades operating in different places.'),
    S('Famous examples or users',
      'The Ulfberht blades are the best-known group: some 170 survive, all carrying an inlaid iron inscription of that name, and their quality was high enough that the name was extensively counterfeited with misspellings — the earliest well-documented case of brand piracy in European metalwork.',
      'River finds are disproportionately important because anaerobic mud preserves iron. The Thames and the Witham have both produced swords in far better condition than anything from a dry grave, and the British Museum holds several of them.',
      'The National Museum of Denmark, the Museum of Cultural History in Oslo and the Swedish History Museum hold the largest collections, and the sagas supply the other half of the record: named swords with histories, given, inherited and buried.'),
    S('Legacy',
      'The Viking sword is the direct ancestor of the medieval arming sword, and through it of every later European straight sword. The lineage is continuous and can be followed hilt by hilt through the eleventh century.',
      'Its metallurgy left the more interesting legacy. The problem the Ulfberht blades solved — how to get consistent high-carbon steel before anyone understood carbon — is still an active question, and the answer involves trade routes reaching well beyond Scandinavia.',
      'It is also the most heavily mythologised weapon in the archive, and much of what is popularly believed about it is wrong: it was not enormous, not crude, not primarily an axe-man\'s afterthought, and not owned by ordinary farmers.')
  ],

  falchion: [
    S('Overview',
      'The falchion is a single-edged sword with a broad, often forward-weighted blade, used across Europe from the thirteenth to the sixteenth century. It looks like a cleaver and is frequently described as one, which does it a considerable disservice.',
      'It occupies an odd place in the record: extremely common in manuscript illustration and extremely rare among surviving objects. Perhaps a handful of medieval European falchions survive, against thousands of depictions.',
      'That gap has produced a persistent caricature — the falchion as a crude peasant chopper — which the few surviving examples flatly contradict. The best of them are finely made and richly decorated objects.'),
    S('Design and construction',
      'The blade is single-edged and broadens toward the point, putting mass forward of the hand so the weapon cuts with authority. Overall length is typically 75 to 95 centimetres, and weight generally falls between 1 and 1.5 kilograms — no heavier than a double-edged sword of similar size.',
      'Two broad forms appear. One has a nearly straight back with a clipped or angled point; the other sweeps in a continuous convex curve toward a broad tip. Both are attested throughout the period and neither replaced the other.',
      'The hilt is ordinary sword furniture — cross guard, one-handed grip, pommel — which is exactly what separates a falchion from a large knife. It was made by sword cutlers to sword standards, not improvised from agricultural tools.'),
    S('Battlefield use',
      'It was a cutting sidearm, valued where a heavy blow mattered more than a precise one: against shields, against mail and padding, and in the press where there is no room to fence.',
      'Manuscript evidence shows it in every hand. The Maciejowski Bible of about 1250 gives it to knights and infantry alike, and it appears throughout thirteenth- and fourteenth-century illumination in the hands of men who plainly are not poor.',
      'It also carried an iconographic load. Illuminators repeatedly assign the falchion to executioners, to foreign soldiers and to the enemies of Christ, which means some of its apparent ubiquity in art is symbolism rather than a straight record of what people carried.'),
    S('Strengths and weaknesses',
      'Its strength is cutting power for its length. Mass concentrated forward of the hand does what a longer, evenly balanced blade would need more reach to achieve, so it delivers heavy blows from a short, handy weapon.',
      'Its weakness is the thrust and the recovery. A blade weighted toward the point is slower to bring back on line than a balanced one, and the broad tip makes it poor at finding a gap in armour — the exact capability the fourteenth century increasingly demanded.',
      'It also gives up reach. Against a spear or a longsword the falchion has to close before it can do anything, which is manageable for a sidearm and fatal for a primary weapon.'),
    S('Historical development',
      'It appears in European art from the thirteenth century, and its origins are argued: descent from the seax, from the Continental long knife, and from contact with single-edged blades further east have all been proposed, and the evidence does not settle it.',
      'It is at its most visible in the thirteenth and fourteenth centuries, exactly the period when mail was still the dominant armour and a heavy cut was still worth delivering.',
      'From the fifteenth century it gives ground to the German Messer and its relatives — single-edged swords built with knife-style hilt construction — and the tradition continues from there into the sixteenth-century dussack rather than dying out.'),
    S('Regional variation',
      'English and French material dominates the surviving and illustrated record, though the type is depicted from Iberia to the Baltic and clearly was not regional in use.',
      'Central Europe develops the Messer as a parallel line, distinguished less by blade shape than by how the hilt is built — slabs riveted to a flat tang, like a knife, rather than a tang passed through a pommel.',
      'Italian sources show curved single-edged blades under several names, and the modern habit of sorting all of them into tidy categories imposes an order the medieval vocabulary did not have.'),
    S('Famous examples or users',
      'The Conyers Falchion at Durham Cathedral, made about 1260 to 1270, is the outstanding survival: a fine weapon with a decorated hilt, kept because it was the token by which the Conyers family held their land, and displayed to each new Bishop of Durham on his first entry into the diocese.',
      'The Thorpe Falchion, in the collections at Norwich, is the other well-known English example, and its plainer, more workmanlike construction shows the range the type covered.',
      'Together they make the point that matters: the falchion was not one thing socially. The same weapon served as an infantry sidearm and as an object fine enough to secure a barony.'),
    S('Legacy',
      'The falchion is the European ancestor of a long line of single-edged military swords — the Messer, the dussack, the hanger, and eventually the naval cutlass, all built on the same logic of a short, forward-weighted cutting blade.',
      'It also survives as a heraldic and ceremonial object. The Conyers Falchion is still a tenure token rather than a museum piece, which is a rare instance of a medieval weapon keeping its original legal meaning into the present.',
      'Its historiography is a caution. A weapon known mostly from pictures acquired a reputation for crudeness that the objects contradict, which is a good reminder to weight surviving material over artistic convention when the two disagree.')
  ],

  'rondel-dagger': [
    S('Overview',
      'The rondel dagger is the armour-fighting dagger of the later Middle Ages: a stiff, sharply tapering blade between two discs, one serving as guard and one as pommel. It appears in the fourteenth century and remains in use into the sixteenth.',
      'It exists because of plate armour. As harness closed off the body, the decisive weapon became the one that could be driven into the gaps that remained — the visor, the armpit, the groin, the back of the knee — and the rondel dagger is that weapon.',
      'It was carried by men-at-arms as a matter of course and by civilians as everyday wear, so it turns up in both military and domestic contexts, and in wills and inventories as often as in battle accounts.'),
    S('Design and construction',
      'The blade runs roughly 25 to 40 centimetres and is built for rigidity rather than cutting: usually of triangular, diamond or square section, thick at the base and tapering to a needle point. Many examples have no cutting edge worth the name at all.',
      'The two discs give the weapon its name and its function. The lower disc keeps the hand from sliding onto the blade under a hard thrust; the upper disc lets the wearer put his palm against the pommel and drive with the weight of his body behind it.',
      'Construction is plain and strong. Grips are wood, bone or horn between the discs, and the whole assembly is built to survive being hammered into steel — which is why surviving examples are so often intact when more elegant weapons are not.'),
    S('Battlefield use',
      'It is the finishing weapon of armoured combat. The fifteenth-century fight books treat armoured fighting as a wrestling problem: bring the man down, control him, and put the dagger through a gap. Fiore dei Liberi and the German masters after him all teach it the same way.',
      'That is a grim and entirely ordinary part of a medieval battle. After the Battle of Agincourt in 1415 the French men-at-arms who fell in the mud and could not rise were killed on the ground, and this is the weapon that did it.',
      'It also did quieter work. As civilian wear it was a self-defence weapon and, being worn at the hip in ordinary dress, appears repeatedly in accounts of murders and brawls where no armour was involved at all.'),
    S('Strengths and weaknesses',
      'Its strength is penetration. A stiff point driven with the shoulder behind it will find and pass a mail gusset or a joint gap in plate, which nothing else in the armoury does reliably at close quarters.',
      'Its weakness is that it needs contact. The rondel dagger is useless at any distance, so it only becomes relevant once grappling has begun — it is the last step of a sequence, never the opening.',
      'It is also poor at everything else. With little or no edge it does not cut, it cannot parry a real weapon, and outside the specific problem of an armoured opponent at arm\'s length it is worse than an ordinary knife.'),
    S('Historical development',
      'It emerges in the second half of the fourteenth century, in step with the spread of plate defences over mail, and its appearance is one of the clearest cases of a weapon invented for a problem that did not previously exist.',
      'Through the fifteenth century it becomes standard equipment for the armoured man, hung at the right hip and shown on effigies and brasses across Europe as part of the complete harness.',
      'It persists into the sixteenth century, then fades with the harness that justified it, though its logic survives in the stiletto — a narrow, edgeless thrusting dagger built on exactly the same reasoning.'),
    S('Regional variation',
      'The type is remarkably uniform across Europe, which is unusual and reflects a design driven by a single mechanical requirement rather than by fashion.',
      'What varies is finish. Plain iron and wood examples sit alongside pieces with ivory grips, engraved discs and gilded mounts, and the difference is entirely social — the working parts are identical.',
      'Related forms shade into it at the edges: the bollock dagger and the ballock-hilted knife carry similar stiff blades on quite different hilts, and contemporary vocabulary does not draw the lines modern collectors do.'),
    S('Famous examples or users',
      'The Royal Armouries at Leeds, the Metropolitan Museum of Art and the Wallace Collection all hold examples, and river and archaeological finds have produced many more, since the solid construction survives burial well.',
      'The fight books are the best witness to its use. Fiore dei Liberi\'s treatise of about 1409 devotes extended sequences to the dagger, and the German tradition after Johannes Liechtenauer teaches the same problem — a man in harness is beaten by grappling and a point, not by a sword.',
      'Effigies and monumental brasses across England, France and the Empire show it worn as standard by armoured men through the fifteenth century, which is how we know how it was carried and on which hip.'),
    S('Legacy',
      'The rondel dagger is the clearest proof that medieval arms development was a genuine arms race. Plate armour defeated the cut, and within a generation Europe was producing a weapon designed for nothing but defeating plate.',
      'Its descendant is the stiletto, and through it the whole family of narrow thrusting daggers that persisted long after armour left the battlefield.',
      'It also corrects a romantic picture of chivalric combat. The fight manuals are explicit that a fight between armoured men usually ended on the ground with a dagger, not with a duel of sword strokes, and the surviving weapons agree with them.')
  ],

  seax: [
    S('Overview',
      'The seax is the single-edged knife of the Germanic peoples of early medieval Europe, in use from roughly the fifth century to the eleventh. It ranges from a small utility blade to a sword-length weapon, all under the same name.',
      'It was close to universal. Where swords marked out a small elite, nearly every free man appears to have owned a seax, and it turns up in graves across England, Frisia, Francia and Scandinavia in enormous numbers.',
      'It was also a tool as much as a weapon, used for eating, working and cutting, worn horizontally at the belt in ordinary dress rather than kept for war — which is a large part of why so many survive.'),
    S('Design and construction',
      'All seaxes share a single edge and an angled or straight back, but the size range is extreme: small examples run 15 to 25 centimetres, the broadseax around 30 to 40, and the langseax can reach 70 or 80, which puts it in sword territory.',
      'The distinctive Anglo-Saxon form is the broken-back seax, in which the back runs straight from the hilt and then angles down sharply to meet the edge at the point. The shape is unmistakable and is one of the more reliable regional markers in early medieval metalwork.',
      'Construction ranges from plain iron to serious work: pattern-welded blades, inlaid wire in copper alloy, silver and brass, and grooves cut along the back and filled with contrasting metal. The best are as finely made as any sword of their period.'),
    S('Battlefield use',
      'The larger forms were genuine weapons, used as a shorter and much cheaper alternative to the sword by men who fought with spear and shield and needed something for close quarters.',
      'The langseax in particular functioned as a poor man\'s sword: sword-length, single-edged, far quicker to make and far less costly, and effective enough that its owners were buried with it.',
      'The smaller forms were carried by everyone and used for everything, which is why they appear in graves of every status and of both sexes — the seax is not straightforwardly a military object at all.'),
    S('Strengths and weaknesses',
      'Its strengths are cost and versatility. A single-edged blade needs less steel and less skill than a double-edged sword, and the result serves as a weapon, a tool and an item of dress at once.',
      'Its weaknesses are reach and guard. Most seaxes have little or no cross guard, so the hand is exposed, and even a langseax is outreached by a spear — it is a weapon for the moment the line has broken up.',
      'The single edge is also a limitation in a fight, halving the available attacks compared with a double-edged blade, though it makes the back of the blade thick and the whole thing far harder to break.'),
    S('Historical development',
      'It appears in the migration period and spreads with Germanic settlement across northern Europe, becoming ubiquitous by the sixth and seventh centuries.',
      'The Anglo-Saxon sequence is well dated: narrow forms give way to broadseaxes, and the broken-back form dominates the ninth and tenth centuries, making the type a useful chronological indicator for archaeologists.',
      'It disappears from England after the Norman conquest, as continental fashions in arms and dress displace it, though single-edged knives of course continue everywhere — what ends is the seax as a recognised category with its own social meaning.'),
    S('Regional variation',
      'Continental and Scandinavian forms tend toward long, narrow blades, while the broken-back profile is characteristically Anglo-Saxon and is much rarer outside England.',
      'Frankish material shows the widest size range, including the largest langseaxes, and Frisian and Rhineland finds sit between the English and Scandinavian traditions in both shape and decoration.',
      'Decoration also varies regionally: inlaid wire and geometric panels are common on English blades, while Scandinavian examples more often rely on pattern-welding and hilt fittings for their display.'),
    S('Famous examples or users',
      'The Seax of Beagnoth in the British Museum, a tenth-century blade found in the Thames, is the outstanding example: inlaid in silver, copper and brass with the complete Anglo-Saxon runic futhorc and the name Beagnoth, most likely its maker.',
      'It is the only known object carrying the full futhorc, which makes it a document of early English literacy as much as a weapon, and it is among the most-studied objects of the Anglo-Saxon period.',
      'Beyond it, seaxes fill museum cases across northern Europe — the British Museum, the National Museum of Denmark and the Rijksmuseum van Oudheden among many others — usually in numbers, because they were buried in numbers.'),
    S('Legacy',
      'A long tradition connects the seax to the name of the Saxons themselves, repeated from Isidore of Seville onward. It is an etymology recorded by early writers rather than a demonstrated fact, and modern scholarship treats it with caution.',
      'Its influence on later single-edged European weapons — the long knife, the Messer, arguably the falchion — is often asserted and hard to prove, since single-edged blades have been made everywhere and continuity is difficult to demonstrate.',
      'What is certain is its value as evidence. Because almost everyone owned one and almost everyone was buried with one, the seax gives archaeologists a dense, well-distributed body of material that says more about ordinary early medieval life than the rarer and grander objects do.')
  ]
}

let n = 0
for (const [id, sections] of Object.entries(articles)) {
  const entry = data.weaponsArmor.find((x) => x.id === id)
  if (!entry) throw new Error(`missing article: ${id}`)
  const before = (entry.contentSections ?? []).flatMap((s) => s.paragraphs ?? []).join(' ').length
  entry.contentSections = sections
  const after = sections.flatMap((s) => s.paragraphs).join(' ').length
  console.log(`${id.padEnd(16)} ${String(before).padStart(5)} -> ${String(after).padStart(5)} chars  (${sections.length} sections, ${sections.flatMap((s) => s.paragraphs).length} paragraphs)`)
  n++
}

writeFileSync(dataPath, JSON.stringify(data, null, 2))
console.log(`\n${n} bladed-sidearm articles rewritten; history.json written`)
