/**
 * M10 — Tier 1 of the coverage-gap analysis, approved by the archive owner.
 *
 * Three of the four Tier 1 articles. The fourth, the pike, is held back: a pike is
 * four to six metres long, and museums photograph the head rather than the weapon.
 * The Met's whole pike series is head-only close-ups, and no licensed photograph of
 * a complete medieval pike could be found. That is the documented AI-last-resort
 * case, and the illustration is being generated separately.
 *
 * Each article follows the M5 standard: an overview plus the seven mandated weapon
 * topics, three substantial paragraphs each, a sourced principal image meeting the
 * full-object and condition rules, five or more related entries, three or more
 * sources.
 *
 * Battles named in prose either have articles (Fall of Constantinople, Battle of
 * Castillon, Siege of Orléans, Battle of Agincourt, Battle of Grunwald) or are
 * added to BATTLE_BACKLOG in the checker as a documented create-or-document
 * decision.
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
    id: 'bombard',
    name: 'Bombard',
    type: 'weaponArmor',
    weaponArmorType: 'Weapon',
    aliases: ['siege bombard', 'great gun', 'siege cannon'],
    year: 1400,
    period: 'Late Middle Ages',
    region: 'Western Europe and the Ottoman world',
    material: 'Wrought iron staves and hoops, or cast bronze',
    battlefieldRole: 'Siege artillery for breaching fortifications',
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Dardanelles%20Gun%202023.JPG',
    imageInfo: {
      caption: 'The Dardanelles Gun, a bronze Ottoman bombard cast in 1464, shown complete in the Royal Armouries collection at Fort Nelson.',
      creator: 'Munir Ali (founder); photograph by Wikimedia user Geni',
      date: '1464 (object); photograph 2023',
      source: 'Royal Armouries, Fort Nelson / Wikimedia Commons',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Dardanelles_Gun_2023.JPG',
      note: 'An original surviving gun, cast eleven years after the fall of Constantinople and in the same tradition as the guns used there. It breaks into two halves that screw together, both visible here. Licensed CC BY-SA 4.0.'
    },
    summary: 'The bombard was the great siege gun of the fourteenth and fifteenth centuries, built to batter down walls that no earlier weapon could bring low.',
    details: 'Bombards were enormous, immobile and slow, and they ended the long dominance of the high stone curtain wall. Both battles that close the medieval period — Castillon and the fall of Constantinople, in the same year — were decided by gunpowder artillery.',
    knownFor: [
      'The weapon that ended the dominance of the high stone curtain wall.',
      'Ottoman bombards battered the Theodosian Walls of Constantinople in 1453.',
      'Built either from wrought iron staves hooped like a barrel, or cast whole in bronze.',
      'The largest fired stone shot of half a metre across, a few times a day at most.'
    ],
    contentSections: [
      S('Overview',
        'A bombard is a very large gunpowder cannon built for one purpose: to knock down a wall. It appears in Europe in the fourteenth century and dominates siege warfare through the fifteenth, and it is the weapon that closes the medieval period.',
        'Everything about it is subordinated to that single task. It is enormous, it is almost immobile, it shoots a few times a day, and it is not expected to hit anything smaller than a curtain wall — none of which matters if the wall comes down.',
        'It did what nothing before it could. Siege engines could batter a wall for months; a bombard battery could open a breach in days, and the change was fast enough that European fortification had to be redesigned from first principles.'),
      S('Design and construction',
        'Two methods were used. The older builds the barrel from longitudinal wrought-iron staves held by shrunk-on iron hoops — the same construction as a wooden barrel, and the reason a gun barrel is called a barrel at all. The other casts the gun whole in bronze, which is stronger and far more expensive.',
        'The scale is difficult to overstate. Calibres of thirty to eighty centimetres are normal for the largest, weights run past sixteen tonnes, and the shot is dressed stone rather than iron, because a stone ball of that size is cheaper and does not need a perfect bore to fit.',
        'Many are built in two pieces — a barrel and a separate powder chamber — that screw or wedge together, which makes an otherwise unmovable object transportable and lets the chamber be made thicker where the pressure is greatest.'),
      S('Battlefield use',
        'A bombard is emplaced, not manoeuvred. It travels in pieces on carts or barges, is assembled in a prepared position within range of the target wall, and stays there until the siege ends.',
        'Rate of fire is measured in shots per day for the largest pieces. The gun must cool, be swabbed, reloaded and re-laid, and the crew must be confident it will not burst — so a battery works by patient repetition against one section of wall rather than by weight of fire.',
        'Its decisive moment is 1453. At the Fall of Constantinople Ottoman bombards, including guns cast for Mehmed II by the Hungarian founder Orban, broke the Theodosian Walls that had held for a thousand years, and in the same year at the Battle of Castillon French guns in a fortified park destroyed John Talbot\'s attacking army.'),
      S('Strengths and weaknesses',
        'Its strength is that it solves a problem nothing else could. A high stone wall was, before gunpowder, close to impregnable to anything but starvation or treachery; a bombard battery reduces it to a matter of weeks.',
        'Its weaknesses are immobility, cost and danger. It is useless in a field battle, it consumes vast quantities of expensive powder, and it kills its own crews with some regularity — James II of Scotland was killed in 1460 when a gun burst beside him while he was besieging Roxburgh.',
        'It is also at the mercy of the weather and the roads. Powder spoils in damp, and moving a sixteen-tonne gun across medieval roads in winter is simply not possible, which tied the great guns to the campaigning season.'),
      S('Historical development',
        'Small gunpowder weapons appear in Europe in the first half of the fourteenth century, and guns grow steadily larger through it as founders learn what their materials will take.',
        'The giant bombards belong to the first three-quarters of the fifteenth century — Mons Meg was cast in 1449, the Dardanelles Gun in 1464 — and they represent the peak of the "bigger is better" approach to siege artillery.',
        'They are then superseded quickly. Longer, lighter cast-bronze guns firing iron shot proved more accurate, more mobile and more destructive than a giant stone-throwing bombard, and by the end of the century the huge guns were obsolete curiosities.'),
      S('Regional variation',
        'Flanders and Burgundy produced some of the largest European guns, and Dulle Griet at Ghent survives from that tradition. The Empire produced Faule Mette at Brunswick and the Pumhart von Steyr, which has the largest calibre of any surviving bombard.',
        'Scotland has Mons Meg, made in Flanders in 1449 and given to James II — a reminder that great guns were diplomatic gifts as much as weapons, since very few rulers could have one made.',
        'The Ottoman tradition worked in cast bronze at a scale nobody in Europe matched, and the Dardanelles Gun is the outstanding survivor: two bronze halves that screw together, cast in 1464 by Munir Ali.'),
      S('Famous examples or users',
        'Orban is the best-documented gunfounder of the period. A Hungarian, he offered his services first to Constantine XI, who could not pay him, and then to Mehmed II, who could — a decision that helped decide the siege of 1453.',
        'Mons Meg is at Edinburgh Castle, Dulle Griet at Ghent, Faule Mette is known from records, and the Pumhart von Steyr is in the Heeresgeschichtliches Museum in Vienna. The Dardanelles Gun is at Fort Nelson, in the Royal Armouries collection.',
        'These survive precisely because they became obsolete rather than being melted down and recast — the giant bombards were too large and too odd to be worth reusing, so they were left where they stood.'),
      S('Legacy',
        'The bombard ended one era of fortification and began another. High walls became a liability, and European defence was rebuilt around low, thick, angled earth and masonry ramparts designed to absorb shot rather than resist it.',
        'It also concentrated military power. A siege train was so expensive that only a ruler with a real treasury could keep one, which strengthened kings against nobles whose castles had previously been beyond reach.',
        'The word survives in "bombardment", long after the weapon itself was replaced by the lighter, longer guns that made it redundant within a single generation.')
    ],
    relatedEntries: {
      events: [
        { title: 'Fall of Constantinople', type: 'event', slug: 'fall-of-constantinople', label: 'Ottoman bombards broke the Theodosian Walls' },
        { title: 'Battle of Castillon', type: 'event', slug: 'battle-of-castillon', label: 'French guns destroyed the English attack' },
        { title: 'Siege of Orléans', type: 'event', slug: 'siege-of-orleans', label: 'Gunpowder artillery used on both sides' }
      ],
      people: [
        { title: 'Mehmed II', type: 'person', slug: 'mehmed-ii', label: 'Commissioned the great guns of 1453' }
      ],
      weaponsArmor: [
        { title: 'Hand Cannon', type: 'weaponArmor', slug: 'hand-cannon', label: 'The same technology at personal scale' },
        { title: 'Trebuchet', type: 'weaponArmor', slug: 'trebuchet', label: 'The siege engine it replaced' },
        { title: 'Pavise', type: 'weaponArmor', slug: 'pavise', label: 'Cover for the missile troops of a siege line' }
      ]
    },
    sources: [
      { title: 'Dardanelles Gun', url: 'https://commons.wikimedia.org/wiki/File:Dardanelles_Gun_2023.JPG', type: 'image source', institution: 'Wikimedia Commons' },
      { title: 'Bombard (weapon)', url: 'https://en.wikipedia.org/wiki/Bombard_(weapon)', type: 'encyclopedia' },
      { title: 'Royal Armouries — Fort Nelson artillery collection', url: 'https://royalarmouries.org/collection/', type: 'museum collection', institution: 'Royal Armouries' }
    ]
  },

  {
    id: 'trebuchet',
    name: 'Trebuchet',
    type: 'weaponArmor',
    weaponArmorType: 'Weapon',
    aliases: ['counterweight trebuchet', 'traction trebuchet', 'blide'],
    year: 1200,
    period: 'High Middle Ages',
    region: 'Europe, Byzantium and the Islamic world',
    material: 'Timber frame and beam, rope, iron fittings, earth or stone counterweight',
    battlefieldRole: 'Siege engine for battering walls and shooting into fortifications',
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/2018%20Zamek%20w%20Bolkowie%2022.jpg',
    imageInfo: {
      caption: 'Modern reconstruction of a trebuchet at Bolków Castle in Poland, shown complete with frame, pivoted beam and sling.',
      creator: 'Photograph by Jacek Halicki',
      date: 'modern reconstruction of a 13th-century form; photograph 2018',
      source: 'Bolków Castle, Poland / Wikimedia Commons',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:2018_Zamek_w_Bolkowie_22.jpg',
      note: 'A reconstruction, not a surviving machine: no medieval trebuchet survives anywhere, because they were built of timber on site and dismantled or left to rot. Every image of one is therefore either a manuscript depiction or a modern rebuild. Licensed CC BY 3.0.'
    },
    summary: 'The trebuchet was the most powerful siege engine of the pre-gunpowder Middle Ages, using a falling counterweight to hurl stones at a wall with remarkable consistency.',
    details: 'A pivoted beam, a sling and a counterweight box turned gravity into a repeatable, accurate bombardment. No medieval example survives; everything known comes from written accounts, manuscript images, excavated emplacements and modern reconstructions.',
    knownFor: [
      'A falling counterweight driving a pivoted beam and a sling — gravity turned into artillery.',
      'Accurate and repeatable: the same counterweight and the same shot land in the same place.',
      'Edward I built one so large at Stirling in 1304 that he made the garrison wait while it was assembled.',
      'Not one medieval trebuchet survives anywhere; every image is a manuscript depiction or a modern rebuild.'
    ],
    contentSections: [
      S('Overview',
        'The trebuchet is a siege engine that throws a heavy projectile by dropping a large weight. A beam pivots on an axle high in a timber frame, with a counterweight box on the short arm and a sling on the long one, and releasing the weight whips the sling through a long arc.',
        'It is the most powerful artillery Europe had before gunpowder, and unlike the torsion engines of the ancient world it uses no springs, ropes under tension or animal sinew — only gravity, which does not weaken with weather or age.',
        'Nothing survives. Trebuchets were built of timber at the siege site, from local wood by carpenters, and dismantled or abandoned afterwards, so the entire physical record consists of a few excavated emplacements and counterweight pits.'),
      S('Design and construction',
        'The frame is a heavy timber A-frame or box carrying an axle several metres above the ground. The beam is unequal: perhaps a fifth of its length on the counterweight side and four-fifths on the throwing side, which multiplies the speed of the tip.',
        'The counterweight is a box of stone, earth or lead, often hinged so it falls vertically and delivers its energy more efficiently. On the largest machines it weighs several tonnes, and it is the single component that determines the engine\'s power.',
        'The sling is what makes it work. A projectile simply attached to the beam would leave at the beam\'s tip speed; a sling adds a second lever that roughly doubles it, and a release pin set at a chosen angle decides when the sling opens.'),
      S('Battlefield use',
        'It is a wall-breaking machine. Shot of fifty to a hundred and fifty kilograms is thrown two to three hundred metres, and the method is repetition — hit the same course of masonry until it fails.',
        'Its consistency is what distinguishes it. The same counterweight and the same weight of shot produce very nearly the same trajectory, so once a machine is ranged it can be fired repeatedly into the same spot, which no earlier engine could manage reliably.',
        'It was also used to shoot over walls rather than at them: incendiaries, and — in a number of well-attested cases — the corpses of animals and of the besiegers\' own dead, thrown into a town to spread disease and break morale.'),
      S('Strengths and weaknesses',
        'Its strengths are power, accuracy and reliability. It uses no perishable tension components, it can be built from local timber by ordinary carpenters, and a well-built machine will shoot all day for weeks.',
        'Its weakness is that it cannot go anywhere. A large trebuchet is built where it will be used and takes days or weeks to erect, so it belongs entirely to siege warfare and has no place at all in a field battle.',
        'It is also slow. A few shots an hour is normal, because the counterweight has to be winched back up between each one, and on the largest machines that is the work of many men or a treadwheel.'),
      S('Historical development',
        'The earlier form is the traction trebuchet, pulled by a team hauling on ropes rather than by a counterweight. It reaches the Mediterranean world from China through the Islamic lands and is in use in Europe by the twelfth century.',
        'The counterweight machine appears in the later twelfth century, and it is a genuine advance: a weight can be made far heavier and far more consistent than a team of men pulling, so the engine becomes both more powerful and more accurate.',
        'The thirteenth century is its high point, and it remains in use well into the fifteenth alongside early gunpowder artillery. It disappears only when bombards became reliable enough to do the same job faster.'),
      S('Regional variation',
        'The engine is common to Latin Europe, Byzantium and the Islamic world, and it moved freely between them — crusading warfare in particular spread designs in both directions, and Arabic and Latin sources describe closely comparable machines.',
        'Northern European machines are the best documented in the written record, largely because English and French royal accounts record the carpenters, timber and ironwork paid for at specific sieges.',
        'The vocabulary is unstable and does not map cleanly onto machine types: trebuchet, mangonel, perrier and blide are used loosely and sometimes interchangeably in medieval sources, and modern distinctions between them are largely a scholarly convenience.'),
      S('Famous examples or users',
        'Edward I of England is the best-known enthusiast. At the siege of Stirling Castle in 1304 he had an enormous machine called Warwolf built, and when the garrison offered to surrender before it was finished he refused to accept until it had been shot.',
        'The written record is otherwise the main source: royal accounts, chronicle descriptions of specific sieges, and manuscript illuminations, which show the machines clearly enough to reconstruct their proportions.',
        'The physical evidence is entirely modern. Working reconstructions at Bolków, Château des Baux, Warwick and the Middelaldercentret in Denmark have established what these machines could actually do, and much of the current understanding of their range and accuracy comes from throwing stones with them.'),
      S('Legacy',
        'The trebuchet made the long siege a matter of engineering rather than starvation, and for two centuries it was the most destructive machine in Europe.',
        'It was replaced by gunpowder for reasons of speed rather than power. A good trebuchet could out-throw an early bombard in weight of shot, but the gun did its work faster and did not need a team of carpenters and a forest.',
        'It is now better understood than it was for most of the last five centuries, because reconstruction has answered questions the written sources left open — a rare case where building a thing turned out to be the only way to study it.')
    ],
    relatedEntries: {
      events: [
        { title: 'Siege of Lisbon', type: 'event', slug: 'siege-of-lisbon', label: 'Siege engines used against the walls' },
        { title: 'Siege of Kyiv', type: 'event', slug: 'siege-of-kyiv', label: 'Mongol siege engines against a walled city' }
      ],
      people: [
        { title: 'Edward I of England', type: 'person', slug: 'edward-i-of-england', label: 'Built Warwolf at Stirling in 1304' }
      ],
      weaponsArmor: [
        { title: 'Bombard', type: 'weaponArmor', slug: 'bombard', label: 'The gunpowder weapon that replaced it' },
        { title: 'Crossbow', type: 'weaponArmor', slug: 'crossbow', label: 'The other missile weapon of the siege line' },
        { title: 'Pavise', type: 'weaponArmor', slug: 'pavise', label: 'Cover for troops working a siege' }
      ]
    },
    sources: [
      { title: 'Trebuchet reconstruction, Bolków Castle', url: 'https://commons.wikimedia.org/wiki/File:2018_Zamek_w_Bolkowie_22.jpg', type: 'image source', institution: 'Wikimedia Commons' },
      { title: 'Trebuchet', url: 'https://en.wikipedia.org/wiki/Trebuchet', type: 'encyclopedia' },
      { title: 'Royal Armouries — siege warfare collection', url: 'https://royalarmouries.org/collection/', type: 'museum collection', institution: 'Royal Armouries' }
    ]
  },

  {
    id: 'hand-cannon',
    name: 'Hand Cannon',
    type: 'weaponArmor',
    weaponArmorType: 'Weapon',
    aliases: ['handgonne', 'hand gun', 'handgun', 'Büchse'],
    year: 1380,
    period: 'Late Middle Ages',
    region: 'Europe, especially the Empire and Bohemia',
    material: 'Cast bronze or forged iron barrel on a wooden tiller',
    battlefieldRole: 'Personal gunpowder weapon for infantry and defenders',
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Tannenbergb%C3%BCchse%20Germanisches%20Nationalmuseum.jpg',
    imageInfo: {
      caption: 'The Tannenberg gun, the oldest surviving European firearm, recovered from a castle destroyed in 1399 and now in the Germanisches Nationalmuseum.',
      creator: 'Unknown German founder; photograph via Wikimedia Commons',
      date: 'before 1399 (object); photograph 2011',
      source: 'Germanisches Nationalmuseum, Nuremberg / Wikimedia Commons',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Tannenbergb%C3%BCchse_Germanisches_Nationalmuseum.jpg',
      note: 'The original cast bronze barrel, complete, with its touch hole visible. The wooden tiller it was mounted on has not survived, as is normal for this weapon — the wood rots and the barrel does not. Licensed CC BY-SA 4.0.'
    },
    summary: 'The hand cannon was the first personal firearm: a short barrel on a wooden shaft, fired by touching a hot wire or a match to a hole in the top.',
    details: 'Crude, slow and inaccurate, it nonetheless did the one thing that mattered — it made a soldier dangerous after a fortnight of training rather than a decade, which is why it displaced both the crossbow and the war bow.',
    knownFor: [
      'The first personal firearm in Europe, in use from the mid-fourteenth century.',
      'Fired by touching a hot wire or a slow match to a hole bored in the top of the barrel.',
      'The Tannenberg gun, from a castle destroyed in 1399, is the oldest surviving European firearm.',
      'Central to the Hussite wagon forts of the 1420s, the first army built around gunpowder infantry.'
    ],
    contentSections: [
      S('Overview',
        'A hand cannon is the simplest possible firearm: a metal tube closed at one end, with a small hole bored near the closed end, mounted on a wooden shaft. Powder and ball go in the muzzle, and fire goes in the hole.',
        'It appears in Europe in the middle of the fourteenth century and is in general military use by the end of it. By any technical measure it is worse than the crossbow it competed with — slower, less accurate, less reliable — and it won anyway.',
        'The reason is training. A crossbowman needed weeks and an archer needed years; a man with a hand cannon needed a fortnight, and armies could be raised faster than they could be trained.'),
      S('Design and construction',
        'The barrel is thirty to forty centimetres, either cast in bronze or forged from iron, thickest at the breech where the pressure is greatest. The bore is smooth and the fit of the ball is loose, which costs a great deal of the powder\'s energy.',
        'The touch hole is bored through the top of the barrel into the powder chamber. A wire heated in a brazier, or later a length of slow match — cord soaked in saltpetre that smoulders steadily — is touched to it to fire the gun.',
        'The barrel is fixed to a wooden tiller, either socketed over it or strapped down. Almost no tillers survive, because the wood rots while the barrel does not, which is why museum hand cannons are usually bare barrels.'),
      S('Battlefield use',
        'It was fired from a rest, from a wall, or over a pavise, and often by two men — one to hold and aim, one to apply the fire. Everything about the loading and firing cycle is slow and requires both hands and open flame.',
        'Effective range is short, perhaps fifty metres against a formed target, and accuracy against an individual is negligible. What it delivers at that range is penetration: a heavy lead ball will go through plate that would turn an arrow.',
        'The Hussite armies of the 1420s were the first to build a system around it. Jan Žižka\'s war wagons carried handgunners and crossbowmen behind timber sides, forming a mobile fortification that repeatedly broke the heavy cavalry sent against it.'),
      S('Strengths and weaknesses',
        'Its strengths are training time, penetration and effect. A recruit is useful in days, the ball defeats armour that stops other missiles, and the noise, smoke and flame frightened men and horses in a way a crossbow bolt did not.',
        'Its weaknesses are almost everything else. It is slow to load, hopelessly inaccurate beyond short range, useless in rain, and dependent on keeping a source of fire alight next to a supply of gunpowder.',
        'It also burst. Early barrels were made without a real understanding of the pressures involved, and the risk to the man holding it was a genuine part of the weapon\'s character rather than an occasional accident.'),
      S('Historical development',
        'The first European references to small guns appear in the 1320s and 1330s, and the weapon spreads steadily through the fourteenth century, first as a curiosity and then as ordinary equipment for town militias and garrisons.',
        'The Tannenberg gun gives a firm date: it was recovered from Tannenberg castle in Hesse, destroyed in 1399, so the weapon must predate that year, and it is the oldest surviving firearm in Europe.',
        'From the early fifteenth century the improvements come quickly — longer barrels, better powder, and above all the matchlock, which holds the burning match in a moving arm so the shooter can keep both hands on the weapon and actually aim. That change turns the hand cannon into the arquebus.'),
      S('Regional variation',
        'The Empire and Bohemia led. German founders produced most of the surviving early guns, and the Hussite wars made Bohemia the first place where gunpowder infantry were decisive rather than incidental.',
        'Burgundian and Flemish armies adopted handguns early and in numbers, and the Burgundian ordinances of the fifteenth century specify handgunners as a fixed proportion of a company — an early instance of firearms being organised rather than merely owned.',
        'Italy and Iberia developed the weapon along the same lines, and the Iberian kingdoms carried the resulting arquebus into the campaigns that ended the medieval period on the peninsula.'),
      S('Famous examples or users',
        'The Tannenberg gun in Nuremberg is the key object: a complete bronze barrel with a firm terminus of 1399, and the reference point against which every other early firearm is dated.',
        'The Loshult gun, found in Sweden and generally dated to the fourteenth century, is the other early survival, and its shape — a bulbous breech narrowing to a flared muzzle — matches the earliest manuscript depictions closely.',
        'Jan Žižka is the most consequential user. Blind for the last part of his career, he built the Hussite tactical system around wagons, handguns and light artillery, and was not defeated in the field.'),
      S('Legacy',
        'The hand cannon is the ancestor of every subsequent firearm, and the line from it to the arquebus, the musket and the rifle is direct and unbroken.',
        'It ended the age of the trained missile specialist. The English archer and the Genoese crossbowman were both products of societies organised to produce them, and neither institution could justify itself against a weapon that needed no such investment.',
        'It also marks the practical end of the armoured knight as the decisive arm, though not as quickly as is usually claimed — plate armour was proofed against firearms and stayed in use for another two centuries, growing thicker and covering less.')
    ],
    relatedEntries: {
      events: [
        { title: 'Battle of Castillon', type: 'event', slug: 'battle-of-castillon', label: 'Gunpowder decided the battle that ended the Hundred Years\' War' },
        { title: 'Battle of Grunwald', type: 'event', slug: 'battle-of-grunwald', label: 'Early gunpowder weapons present on the field' }
      ],
      weaponsArmor: [
        { title: 'Crossbow', type: 'weaponArmor', slug: 'crossbow', label: 'Displaced by it on the same argument about training' },
        { title: 'Longbow', type: 'weaponArmor', slug: 'longbow', label: 'The tradition it made unaffordable' },
        { title: 'Bombard', type: 'weaponArmor', slug: 'bombard', label: 'The same technology at siege scale' },
        { title: 'Plate Armor', type: 'weaponArmor', slug: 'plate-armor', label: 'The defence it was eventually proofed against' }
      ]
    },
    sources: [
      { title: 'Tannenberg gun, Germanisches Nationalmuseum', url: 'https://commons.wikimedia.org/wiki/File:Tannenbergb%C3%BCchse_Germanisches_Nationalmuseum.jpg', type: 'image source', institution: 'Wikimedia Commons' },
      { title: 'Hand cannon', url: 'https://en.wikipedia.org/wiki/Hand_cannon', type: 'encyclopedia' },
      { title: 'Royal Armouries — early firearms collection', url: 'https://royalarmouries.org/collection/', type: 'museum collection', institution: 'Royal Armouries' }
    ]
  }
]

let n = 0
for (const article of articles) {
  if (data.weaponsArmor.some((x) => x.id === article.id)) {
    throw new Error(`article already exists: ${article.id} — this script creates, it does not update`)
  }
  data.weaponsArmor.push(article)
  const chars = article.contentSections.flatMap((s) => s.paragraphs).join(' ').length
  console.log(`+ ${article.id.padEnd(12)} ${article.contentSections.length} sections, ${chars} chars, ${Object.values(article.relatedEntries).flat().length} related`)
  n++
}

// Reciprocity: the articles these link to should link back. Bidirectional
// navigation is a documented rule, and a one-way link is a half-built connection.
const backLinks = {
  crossbow: [{ title: 'Hand Cannon', type: 'weaponArmor', slug: 'hand-cannon', label: 'The weapon that displaced it' }],
  longbow: [{ title: 'Hand Cannon', type: 'weaponArmor', slug: 'hand-cannon', label: 'The weapon that replaced the trained archer' }],
  'war-bow': [{ title: 'Hand Cannon', type: 'weaponArmor', slug: 'hand-cannon', label: 'What ended every war-bow tradition' }],
  pavise: [{ title: 'Hand Cannon', type: 'weaponArmor', slug: 'hand-cannon', label: 'Handgunners sheltered behind it too' }],
  'plate-armor': [{ title: 'Hand Cannon', type: 'weaponArmor', slug: 'hand-cannon', label: 'The threat breastplates were later proofed against' }]
}
for (const [id, entries] of Object.entries(backLinks)) {
  const entry = data.weaponsArmor.find((x) => x.id === id)
  if (!entry) throw new Error(`back-link target missing: ${id}`)
  ;(entry.relatedEntries.weaponsArmor ??= []).push(...entries)
  console.log(`  back-link ${id} -> ${entries.map((e) => e.slug).join(', ')}`)
}

writeFileSync(dataPath, JSON.stringify(data, null, 2))
console.log(`\n${n} Tier 1 articles added; weaponsArmor now ${data.weaponsArmor.length}`)
