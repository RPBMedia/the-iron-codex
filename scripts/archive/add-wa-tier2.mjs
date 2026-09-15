/**
 * Tier 2 — barding, armet and spangenhelm.
 *
 * The gauntlet is held back: medieval gauntlets survive as cuffs and metacarpal
 * plates because the small finger lames are always lost, so the Met's 1420 and
 * 1450 Italian examples are both fingerless. That is the incomplete-artifact case
 * the owner ruled out, and an illustration is being generated instead.
 *
 * Image notes:
 * - barding uses the owner-generated illustration. Full plate bards are a
 *   later-15th-century development and nearly all complete survivals are 16th
 *   century, so every well-lit colour photograph available is out of period. The
 *   article is about in-period horse armour — mail trapper, textile caparison and
 *   iron shaffron — and the illustration shows exactly that.
 * - spangenhelm uses a Frankish original. Its cheek pieces have not survived,
 *   which is noted in the caption, but the segmented bowl IS the helmet: cheek
 *   pieces were an optional addition and many were worn without them. That is a
 *   different case from a hand cannon barrel, which cannot function without its
 *   tiller.
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
    id: 'barding',
    name: 'Barding',
    type: 'weaponArmor',
    weaponArmorType: 'Armor',
    aliases: ['horse armour', 'horse armor', 'trapper', 'caparison', 'shaffron', 'chanfron'],
    year: 1300,
    period: 'High Middle Ages',
    region: 'Western Europe',
    material: 'Riveted mail, quilted textile and hardened leather, with iron head defences',
    battlefieldRole: 'Protection for the warhorse, the most valuable and most targeted part of a knight',
    image: '/barding-ai.png',
    imageInfo: {
      caption: 'AI-generated illustration of a barded warhorse of about 1300: an iron shaffron over the head and a riveted mail trapper covering neck and body.',
      creator: 'AI-generated for The Iron Codex',
      date: 'generated 2026',
      source: 'The Iron Codex (AI illustration)',
      sourceUrl: '',
      aiGenerated: true,
      note: 'Not a photograph of an object. It is used because no suitably licensed photograph of in-period horse armour could be sourced: mail trappers and textile caparisons rot away entirely, and the complete barded horses in museum collections are full plate bards of the sixteenth century, a development that postdates this article\'s subject. It deliberately shows no plate crinet, peytral or crupper, since those belong to the later fifteenth century and after.'
    },
    specs: {
      note: 'Medieval horse armour is known mainly from effigies, manuscripts, inventories and surviving shaffrons; textile and mail defences survive very poorly, so weights in particular are estimates.',
      rows: [
        { label: 'Period', value: 'c. 1150–1450 for mail and textile forms' },
        { label: 'Head defence', value: 'Iron shaffron covering forehead and muzzle' },
        { label: 'Body defence', value: 'Mail trapper, or quilted textile caparison, or both' },
        { label: 'Coverage', value: 'Neck, chest and body to about the knees' },
        { label: 'Weight', value: 'c. 20–40 kg for a mail trapper' },
        { label: 'Cost', value: 'Comparable to a man\'s full harness; owned by few' },
        { label: 'Later development', value: 'Full plate bards from c. 1450–1500' },
        { label: 'Role', value: 'Protecting the horse in the charge' }
      ]
    },
    summary: 'Barding is armour for the warhorse — mail, quilted textile and hardened leather in the medieval centuries, with an iron shaffron over the head.',
    details: 'The horse was the largest target on the field and the most expensive thing a knight owned, and the archery that broke cavalry charges worked mainly by killing horses rather than men. Barding is the answer to that problem.',
    knownFor: [
      'The shaffron, an iron plate over the horse\'s forehead and muzzle with cup guards over the eyes.',
      'Mail trappers and quilted caparisons covering neck and body to the knees.',
      'A response to archery, which broke cavalry charges by killing horses rather than riders.',
      'Full plate bards are a later-fifteenth-century development; medieval barding is mail and cloth.'
    ],
    contentSections: [
      S('Overview',
        'Barding is armour for the horse. In the medieval centuries it means a mail trapper, a quilted textile caparison, hardened leather pieces, and an iron shaffron over the head — not the articulated plate bard that most people picture.',
        'It exists because of a simple asymmetry. A knight in full harness is very hard to kill; his horse, standing much larger and covered in nothing, is not. Killing the horse takes the man out of the fight just as effectively and is far easier.',
        'It was extremely expensive and correspondingly rare. A mail trapper contains more metal than a man\'s hauberk, and only the wealthiest could field a barded horse — which is why it appears far more often on seals and effigies, where display mattered, than it can have done in the field.'),
      S('Design and construction',
        'The shaffron is the one component that survives in numbers. It is an iron plate shaped to the horse\'s forehead and muzzle, with raised cup-shaped guards over the eyes and simple straps, and iron shaffrons are attested from the thirteenth century.',
        'The trapper is a mail covering hung over the horse\'s neck, chest and body, reaching to about the knees and split front and back so the legs move. It is made exactly like a hauberk and is enormously heavy — plausibly twenty to forty kilograms.',
        'The caparison is textile: a fitted cloth cover, often quilted, worn over the mail or instead of it. It carried the owner\'s arms, which is the reason it appears in almost every heraldic image of a mounted knight and why so many people assume horses were routinely armoured.'),
      S('Protection and battlefield role',
        'Its job is to get the horse through the approach. A charge that arrives with its horses dead or bolting has failed before contact, and every missile weapon on a medieval battlefield was more likely to hit a horse than the man on it.',
        'Against archery the effect is real but partial. Mail and quilted cloth will stop or slow many arrows, and even a shaffron that merely prevents a horse being blinded is doing decisive work — a wounded horse that keeps going is still a functioning cavalry mount.',
        'The English tactical system of the fourteenth century is the argument for it. At the Battle of Crécy in 1346 and the Battle of Agincourt in 1415 the massed shooting did most of its work on horses and on unarmoured limbs, and the French response over that period includes both dismounting the men-at-arms and armouring the horses of those who stayed mounted.'),
      S('Strengths and limitations',
        'Its strength is that it protects the part of the system most likely to fail. Nothing else a knight could buy addressed the horse, and the horse was both the expensive component and the vulnerable one.',
        'Its limitations are weight and heat. A mail trapper of thirty kilograms on top of saddle, rider and the rider\'s own harness is a serious load, and it costs the horse speed and stamina in exactly the moments that matter.',
        'Cost is the real constraint. Barding roughly doubles the price of equipping a man-at-arms, and the documentary record makes clear that most mounted men rode unarmoured horses however much the art suggests otherwise.'),
      S('Historical development',
        'Textile caparisons appear from the twelfth century, initially as much for display and weather as for defence, and become the standard visual attribute of the mounted knight in seals and effigies.',
        'Mail trappers follow in the later twelfth and thirteenth centuries for those who could afford them, and iron shaffrons are documented from the thirteenth — the head being both the most vulnerable point and the cheapest to armour.',
        'Plate comes late. Articulated bards with a crinet for the neck, a peytral for the chest and a crupper for the hindquarters develop only in the second half of the fifteenth century, and the great majority of complete surviving bards are sixteenth-century objects belonging to the period after this archive.'),
      S('Regional variation',
        'Western European practice is the best documented, through English, French and Burgundian inventories and through the effigies and brasses that show caparisons in heraldic detail.',
        'The Iberian frontier went the other way. Light cavalry fighting rewarded speed over protection, and the jinete tradition rode unarmoured horses deliberately rather than for want of means.',
        'Eastern and steppe practice shows lamellar and leather horse armour on quite different principles, encountered directly during the Mongol invasions and known from finds well outside Latin Europe.'),
      S('Surviving examples',
        'Shaffrons survive because they are iron. Examples from around 1400 are held in European collections, including a well-known piece long associated with Warwick Castle, and they are effectively the only in-period component available to study directly.',
        'Mail trappers and caparisons have not survived at all in Western Europe. Mail was too valuable to leave unused and textile rots, so this part of the subject depends entirely on images, wills and household accounts.',
        'The famous barded horses in the Metropolitan Museum, the Kunsthistorisches Museum and the Cleveland Museum of Art are magnificent and largely sixteenth-century. They show the mature plate bard rather than the medieval horse armour described here.'),
      S('Legacy',
        'Barding is the clearest evidence that medieval commanders understood where their cavalry was actually vulnerable. The equipment tracks the threat, and the threat was to the horse.',
        'It reached its fullest development just as it stopped mattering. Full plate bards arrive in the later fifteenth century, at the point when pike blocks and firearms were making the heavy charge a poorer bet, and they belong largely to the tournament thereafter.',
        'It also survives as a source of confusion. The caparison is everywhere in medieval art because it carried heraldry, and its ubiquity in images has left a lasting impression that armoured horses were common when the documents say they were not.')
    ],
    relatedEntries: {
      events: [
        { title: 'Battle of Crécy', type: 'event', slug: 'battle-of-crecy', label: 'English archery worked largely on horses' },
        { title: 'Battle of Agincourt', type: 'event', slug: 'battle-of-agincourt', label: 'The French dismounted rather than risk the horses' }
      ],
      weaponsArmor: [
        { title: 'Lance', type: 'weaponArmor', slug: 'lance', label: 'The weapon the barded horse existed to deliver' },
        { title: 'Mail Armor', type: 'weaponArmor', slug: 'mail-armor', label: 'The trapper is made exactly like a hauberk' },
        { title: 'Longbow', type: 'weaponArmor', slug: 'longbow', label: 'The threat it answered' },
        { title: 'Plate Armor', type: 'weaponArmor', slug: 'plate-armor', label: 'The rider\'s own harness' },
        { title: 'Surcoat', type: 'weaponArmor', slug: 'surcoat', label: 'The caparison carried the same arms as the man\'s coat' }
      ]
    },
    sources: [
      { title: 'Royal Armouries — horse armour collection', url: 'https://royalarmouries.org/collection/', type: 'museum collection', institution: 'Royal Armouries' },
      { title: 'Metropolitan Museum of Art — Arms and Armor department', url: 'https://www.metmuseum.org/art/collection/search?department=4', type: 'museum collection', institution: 'Metropolitan Museum of Art' },
      { title: 'Barding', url: 'https://en.wikipedia.org/wiki/Barding', type: 'encyclopedia' }
    ]
  },

  {
    id: 'armet',
    name: 'Armet',
    type: 'weaponArmor',
    weaponArmorType: 'Helmet',
    aliases: ['closed helmet'],
    year: 1440,
    period: 'Late Middle Ages',
    region: 'Italy, Burgundy and the Holy Roman Empire',
    material: 'Steel',
    battlefieldRole: 'Fully enclosing head defence for the armoured man-at-arms',
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/1450%20Armet%20anagoria.JPG',
    imageInfo: {
      caption: 'An armet of about 1450 in the Germanisches Nationalmuseum, Nuremberg, shown complete with its visor and hinged cheek pieces.',
      creator: 'Unknown armourer; photograph by Anagoria',
      date: 'c. 1450 (object); photograph 2013',
      source: 'Germanisches Nationalmuseum, Nuremberg / Wikimedia Commons',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:1450_Armet_anagoria.JPG',
      note: 'An original surviving helmet in its complete working configuration. The surface pitting is age; the form, including the hinged cheek pieces that make it an armet rather than a sallet or a bascinet, is entirely intact. Licensed CC BY 3.0.'
    },
    specs: {
      note: 'Typical ranges for the fifteenth century; armets vary considerably between Italian and northern workshops.',
      rows: [
        { label: 'Period', value: 'c. 1420–1550 (medieval phase to about 1500)' },
        { label: 'Region', value: 'Italy first, then Burgundy and the Holy Roman Empire' },
        { label: 'Weight', value: 'c. 2.5–3.5 kg' },
        { label: 'Construction', value: 'Skull with two hinged cheek pieces closing at the chin' },
        { label: 'Visor', value: 'Pivoted, usually removable' },
        { label: 'Rests on', value: 'The head, turning with it' },
        { label: 'Worn with', value: 'A gorget or mail standard at the throat' },
        { label: 'Role', value: 'Head defence for the fully armoured man-at-arms' }
      ]
    },
    summary: 'The armet is the close-fitting enclosed helmet of the fifteenth century, built from a skull and two hinged cheek pieces that close under the chin.',
    details: 'It gave the completeness of the great helm without its bulk, and unlike that helmet it turned with the head rather than sitting on the shoulders. With the sallet it is one of the two defining helmets of the late medieval man-at-arms.',
    knownFor: [
      'Two hinged cheek pieces closing under the chin — the feature that defines the type.',
      'Sits on the head and turns with it, unlike the great helm which rested on the shoulders.',
      'The Italian answer to the same problem the German sallet solved differently.',
      'Often fitted with a rondel at the back of the neck to protect the closure straps.'
    ],
    contentSections: [
      S('Overview',
        'The armet is a fully enclosing helmet built in three parts: a skull, and two cheek pieces hinged at the sides that swing forward and close under the chin. A pivoted visor completes it.',
        'That construction is the whole point. Because it opens, an armet can be made to fit closely around the head and jaw — far more closely than a helmet that has to be pulled on over the skull — and the result is compact, well balanced, and light for the protection it gives.',
        'It appears in Italy in the first half of the fifteenth century and spreads north, and with the sallet it is one of the two helmets that define the late medieval man-at-arms. The two solved the same problem in opposite ways.'),
      S('Design and construction',
        'The skull is raised from a single plate and shaped to the head, with the cheek pieces hinged near the temples. Closed, they meet at the chin and are secured with a hook, a pin or a strap.',
        'The visor pivots on the same axis or slightly above it, and is usually removable so the same helmet could be worn open on the march and closed for the fight. Many have a small reinforcing plate over the brow.',
        'A characteristic fitting is the rondel, a small disc on a short stem at the back of the neck. It is not decoration: it covers the strap or wing-nut securing the cheek pieces, which is the helmet\'s one obvious weak point from behind.'),
      S('Protection and battlefield role',
        'It gives complete coverage of the head and face with no gap between helmet and body armour, and because it turns with the head the wearer can look where he is going rather than turning his shoulders.',
        'Its weight, generally two and a half to three and a half kilograms, is carried on the head and the neck rather than the shoulders. That is heavier on the neck than a sallet but far better balanced than a great helm.',
        'It is equipment for the fully armoured — men fighting mounted with the lance, or on foot with poleaxe and dagger in the manner the fifteenth-century fight books describe, where the whole contest is a search for a gap and the armet leaves very few.'),
      S('Strengths and limitations',
        'Its strengths are close fit, complete coverage and balance. Nothing else in the period gives that much protection in that little bulk, and the close fit means the helmet moves with the wearer instead of shifting on him.',
        'Its limitations are heat, hearing and vision. A closed armet is stifling, sound arrives muffled, and the wearer sees through a slit — which is why they were worn open whenever fighting was not imminent.',
        'It also cannot be put on unaided. Cheek pieces have to be opened, the helmet settled, and the closure secured, which in practice means a servant — a real constraint that the sallet, simply dropped onto the head, did not share.'),
      S('Historical development',
        'It emerges in northern Italy in the 1420s and 1430s, developing out of the bascinet as armourers sought a helmet that could fit closely and still be got on and off.',
        'Through the middle of the century it spreads to Burgundy, France and the Holy Roman Empire, and by about 1450 it is standard equipment for the Italian man-at-arms while German practice continues to prefer the sallet and bevor.',
        'It continues past the medieval period into the sixteenth century, where it merges with parallel developments into the close helmet — a helmet with a visor and bevor pivoting on a common axis, which is a different construction despite the similar appearance.'),
      S('Regional variation',
        'Italian armets are the classic form: rounded, smooth, closely fitted, and made in the Milanese workshops that supplied much of Europe.',
        'Northern examples tend to be somewhat larger and more angular, and where German armourers adopted the type at all they often combined it with elements of their own sallet-and-bevor tradition.',
        'The rondel at the back of the neck is more common on Italian work than northern, and its presence is a reasonable if not decisive indicator of where a given helmet was made.'),
      S('Famous examples or users',
        'The Germanisches Nationalmuseum in Nuremberg, the Wallace Collection, the Metropolitan Museum of Art and the Kunsthistorisches Museum in Vienna all hold fifteenth-century examples in complete condition.',
        'It is the helmet of the Italian condottiere and of the Burgundian man-at-arms, and appears throughout the illustrated record of the second half of the fifteenth century on men fighting mounted and on foot.',
        'A caution that applies to the whole class: many displayed armets are composites, assembled from a skull, cheek pieces and visor of different dates, and a helmet that looks coherent on a stand may not be one object.'),
      S('Legacy',
        'The armet is the point at which head protection stopped being a compromise. Earlier helmets traded vision for coverage or coverage for comfort; this one gives nearly complete protection in a form the wearer can live in.',
        'Its principle — a helmet that opens to fit closely rather than being pulled on over the head — carried directly into the close helmet and through it into the tournament and parade armour of the following centuries.',
        'It is also the best illustration of how regional armour traditions diverged. Italy produced the armet and Germany the sallet with its bevor, and the difference between them says a good deal about how each expected its men to fight.')
    ],
    relatedEntries: {
      weaponsArmor: [
        { title: 'Sallet', type: 'weaponArmor', slug: 'sallet', label: 'The German answer to the same problem' },
        { title: 'Bascinet', type: 'weaponArmor', slug: 'bascinet', label: 'The helmet it developed out of' },
        { title: 'Great Helm', type: 'weaponArmor', slug: 'great-helm', label: 'The earlier fully enclosing helmet it replaced' },
        { title: 'Plate Armor', type: 'weaponArmor', slug: 'plate-armor', label: 'The harness it completed' },
        { title: 'Poleaxe', type: 'weaponArmor', slug: 'poleaxe', label: 'The weapon it was worn against' },
        { title: 'Rondel Dagger', type: 'weaponArmor', slug: 'rondel-dagger', label: 'Sought the gaps an armet leaves' }
      ]
    },
    sources: [
      { title: 'Armet, Germanisches Nationalmuseum', url: 'https://commons.wikimedia.org/wiki/File:1450_Armet_anagoria.JPG', type: 'image source', institution: 'Wikimedia Commons' },
      { title: 'Metropolitan Museum of Art — Arms and Armor department', url: 'https://www.metmuseum.org/art/collection/search?department=4', type: 'museum collection', institution: 'Metropolitan Museum of Art' },
      { title: 'Wallace Collection — European Armoury', url: 'https://www.wallacecollection.org/', type: 'museum collection', institution: 'Wallace Collection' }
    ]
  },

  {
    id: 'spangenhelm',
    name: 'Spangenhelm',
    type: 'weaponArmor',
    weaponArmorType: 'Helmet',
    aliases: ['banded helmet', 'segmented helmet', 'Baldenheim helmet'],
    year: 550,
    period: 'Early Middle Ages',
    region: 'Europe, from the Frankish lands to the Black Sea',
    material: 'Iron plates on an iron or bronze frame',
    battlefieldRole: 'Head protection built from segments rather than raised from one plate',
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Elmo%20franco%2C%2001.JPG',
    imageInfo: {
      caption: 'A Frankish spangenhelm, its bowl built from iron plates riveted into a banded frame with a decorated brow band.',
      creator: 'Unknown Frankish armourer; photograph by Sailko',
      date: 'early medieval (object); photograph 2011',
      source: 'Wikimedia Commons',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Elmo_franco,_01.JPG',
      note: 'An original surviving helmet. The segmented bowl and its frame — the feature that defines the type — are complete; the cheek pieces and any mail neck curtain have not survived, as is usual, since they hung from the rim on perishable fittings. Licensed CC BY-SA 3.0.'
    },
    specs: {
      note: 'Typical ranges. The type covers a long period and a very wide area, and construction varies considerably.',
      rows: [
        { label: 'Period', value: 'c. 400–1100' },
        { label: 'Distribution', value: 'From the Frankish lands to the Black Sea and beyond' },
        { label: 'Construction', value: 'Iron plates riveted into a frame of bands' },
        { label: 'Segments', value: 'Commonly four or six' },
        { label: 'Weight', value: 'c. 1.5–2.5 kg' },
        { label: 'Additions', value: 'Nasal, cheek pieces, mail neck curtain' },
        { label: 'Decoration', value: 'Gilded bronze bands and brow plates on high-status examples' },
        { label: 'Role', value: 'Head protection across the early medieval centuries' }
      ]
    },
    summary: 'The spangenhelm is a helmet built from separate iron plates riveted into a framework of bands, the dominant construction of the early medieval centuries.',
    details: 'Its importance is technological. Raising a helmet from one piece of iron is difficult and wasteful; building one from segments needs less skill and less good metal, which is how helmets were made across most of Europe for seven hundred years.',
    knownFor: [
      'A bowl built from separate plates riveted into a frame of bands — Spangen in German.',
      'The dominant helmet construction in Europe from roughly 400 to 1100.',
      'Made where raising a one-piece bowl was beyond the smith or the metal available.',
      'Distributed from the Frankish lands to the Black Sea, with the Baldenheim type the best-studied group.'
    ],
    contentSections: [
      S('Overview',
        'The spangenhelm is a helmet whose bowl is assembled rather than raised: iron plates riveted into a framework of bands, usually four or six segments held by a brow band and vertical straps meeting at the crown.',
        'The name is modern German — Spangen, the bands — and the type is defined by that construction rather than by shape, period or region. Spangenhelms are conical, rounded and everything in between.',
        'It is the standard European helmet for the better part of seven centuries, from the migration period into the eleventh century, which makes it the longest-serving head defence in this archive.'),
      S('Design and construction',
        'The frame comes first: a brow band closed into a hoop, with two or more bands arching over it and meeting at the apex. The gaps between them are filled with plates riveted in from inside.',
        'The reason is metallurgical. Raising a helmet bowl from a single piece of iron without cracking it is demanding work and wastes a great deal of metal, and in a period when good iron was scarce and specialist smiths scarcer, segments are simply easier.',
        'Additions hang from the rim: a nasal riveted to the brow band, hinged cheek pieces on either side, and often a mail curtain covering the neck. These are attached by perishable fittings and are usually the first things lost, so surviving helmets are frequently bowls alone.'),
      S('Protection and battlefield role',
        'A segmented bowl protects the skull well against a cut, which is what the swords and axes of the period mostly delivered, and the bands themselves act as reinforcement across the lines where a blow would otherwise land flat.',
        'Its weakness is the joints. Rivets can shear and plates can be driven apart under a heavy blow in a way a one-piece bowl would not, and this is the practical reason the type eventually gave way.',
        'It equipped the men who could afford any helmet at all — which through most of the early Middle Ages was a small minority. A helmet of any kind is a status marker in this period, and a gilded spangenhelm emphatically so.'),
      S('Strengths and limitations',
        'Its strengths are manufacturability and repairability. It can be made by a competent smith from ordinary iron in a workshop with no specialist tooling, and a damaged plate can be replaced without remaking the helmet.',
        'Its limitation is structural. Every rivet is a potential failure point, and once metalworking had advanced far enough to raise a bowl from one piece, the one-piece helmet was simply stronger for the same weight.',
        'It is also relatively heavy for the protection given, since the frame adds metal that contributes little except to hold the plates together.'),
      S('Historical development',
        'The construction reaches Europe from the late Roman and steppe worlds and is well established by the fifth century, spreading with the migration-period kingdoms.',
        'The sixth and seventh centuries produce the Baldenheim type, the best-studied group: high-status helmets with gilded bronze bands and decorated brow plates, found from France and Italy to the Balkans and clearly the product of a shared elite culture.',
        'It continues through the Carolingian and Viking centuries and is still in use in the eleventh, where the conical helmets of the Bayeux Tapestry include segmented examples. It gives way as one-piece raising became routine, which is the point at which the nasal helmet takes over.'),
      S('Regional variation',
        'The Baldenheim group is the defining western type, concentrated in Frankish, Lombard and Burgundian contexts, and its decoration is consistent enough across a very wide area to suggest a small number of workshops.',
        'Eastern and steppe forms are generally taller and more sharply conical, and the construction travelled along the same routes as the peoples who used it — the type is genuinely trans-continental in a way little else in this archive is.',
        'Insular material is thin and different. The Sutton Hoo helmet is not a spangenhelm but a Vendel-tradition helmet with a raised cap and applied panels, and the distinction is worth keeping because the two are often confused.'),
      S('Famous examples or surviving pieces',
        'The Baldenheim helmet itself, found in Alsace, gives the type its name, and comparable helmets are held in French, German, Italian and Balkan collections.',
        'The Gjermundbu helmet from Norway, the only substantially complete Viking-age helmet known, is a related four-plate construction with a spectacle-shaped eye guard, and is the single most important northern example.',
        'A great many finds are fragments — bands, brow plates and loose rivets — because the perishable fittings that held everything together decayed and the plates separated in the ground.'),
      S('Legacy',
        'The spangenhelm is the longest-serving helmet construction in European history, and its persistence tracks the state of metalworking rather than the state of warfare.',
        'Its disappearance is a technological milestone rather than a tactical one. When smiths could reliably raise a bowl from one plate, they did, and the segmented helmet became unnecessary rather than inadequate.',
        'It also demonstrates how far ideas travelled in a period usually imagined as isolated. The same construction, and in the Baldenheim group very nearly the same decoration, turns up from the Rhine to the Black Sea.')
    ],
    relatedEntries: {
      weaponsArmor: [
        { title: 'Nasal Helmet', type: 'weaponArmor', slug: 'nasal-helmet', label: 'The one-piece form that succeeded it' },
        { title: 'Sutton Hoo Helmet', type: 'weaponArmor', slug: 'sutton-hoo-helmet', label: 'A different early medieval tradition, often confused with it' },
        { title: 'Mail Armor', type: 'weaponArmor', slug: 'mail-armor', label: 'The neck curtain hung from its rim' },
        { title: 'Round Shield', type: 'weaponArmor', slug: 'round-shield', label: 'Carried by the same men' },
        { title: 'Viking Sword', type: 'weaponArmor', slug: 'viking-sword', label: 'The weapon of its later centuries' },
        { title: 'Great Helm', type: 'weaponArmor', slug: 'great-helm', label: 'Where enclosed head protection went next' }
      ]
    },
    sources: [
      { title: 'Frankish spangenhelm', url: 'https://commons.wikimedia.org/wiki/File:Elmo_franco,_01.JPG', type: 'image source', institution: 'Wikimedia Commons' },
      { title: 'British Museum — early medieval collections', url: 'https://www.britishmuseum.org/collection', type: 'museum collection', institution: 'British Museum' },
      { title: 'Spangenhelm', url: 'https://en.wikipedia.org/wiki/Spangenhelm', type: 'encyclopedia' }
    ]
  }
]

let n = 0
for (const article of articles) {
  if (data.weaponsArmor.some((x) => x.id === article.id)) throw new Error(`already exists: ${article.id}`)
  data.weaponsArmor.push(article)
  console.log(`+ ${article.id.padEnd(12)} ${article.contentSections.length} sections, ${article.contentSections.flatMap((s) => s.paragraphs).join(' ').length} chars`)
  n++
}

const get = (id) => {
  const e = data.weaponsArmor.find((x) => x.id === id)
  if (!e) throw new Error(`missing: ${id}`)
  return e
}
const backLinks = {
  lance: [{ title: 'Barding', slug: 'barding', label: 'Armour for the horse that carried it' }],
  'mail-armor': [{ title: 'Barding', slug: 'barding', label: 'Mail trappers were made the same way' }],
  sallet: [{ title: 'Armet', slug: 'armet', label: 'The Italian answer to the same problem' }],
  bascinet: [{ title: 'Armet', slug: 'armet', label: 'The enclosed helmet it developed into' }],
  'great-helm': [{ title: 'Armet', slug: 'armet', label: 'The close-fitting helmet that replaced it' }],
  'nasal-helmet': [{ title: 'Spangenhelm', slug: 'spangenhelm', label: 'The segmented construction it superseded' }],
  'sutton-hoo-helmet': [{ title: 'Spangenhelm', slug: 'spangenhelm', label: 'The segmented tradition it is often confused with' }]
}
for (const [id, entries] of Object.entries(backLinks)) {
  ;(get(id).relatedEntries.weaponsArmor ??= []).push(...entries.map((e) => ({ ...e, type: 'weaponArmor' })))
  console.log(`  back-link ${id} -> ${entries.map((e) => e.slug).join(', ')}`)
}

writeFileSync(dataPath, JSON.stringify(data, null, 2))
console.log(`\n${n} Tier 2 articles added; weaponsArmor now ${data.weaponsArmor.length}`)
