/**
 * M5 batch 7 — the three named-artifact articles.
 *
 * These do not take the generic-type structure. A named artifact article is about
 * one surviving object (or, for the Ulfberht group, one identified corpus), so it
 * is organised around description, dating, provenance, present condition and the
 * separation of the object from its legend — the requirement CLAUDE.md sets for
 * this class of article.
 *
 * The hard rule throughout: what survives is stated separately from what is
 * claimed about it, and no legendary property is written as fact.
 */
import { readFileSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dataPath = path.join(__dirname, '../server/data/history.json')
const data = JSON.parse(readFileSync(dataPath, 'utf8'))
const S = (title, ...paragraphs) => ({ title, paragraphs })

const articles = {
  'sutton-hoo-helmet': [
    S('Overview',
      'The Sutton Hoo helmet is an early seventh-century Anglo-Saxon helmet recovered from the ship burial at Mound 1 at Sutton Hoo in Suffolk, excavated in 1939. It is the most important object of its period from England and one of only a handful of complete Anglo-Saxon helmets known.',
      'It is a helmet and a mask at once. The face is covered by a fixed faceplate with eye openings, a nose, a mouth and a moustache, so the wearer presented a metal face rather than a human one — an object built to be seen as much as to protect.',
      'It survives as several hundred fragments, reconstructed twice in the twentieth century, and any account of it has to keep the recovered object and the reconstruction distinct.'),
    S('Description',
      'The helmet has an iron cap, cheek pieces, a deep neck guard and a rigid faceplate, and its surface was covered with tinned bronze panels stamped with repeated figural and interlace designs. It would have looked bright silver rather than dark iron.',
      'Two panel scenes recur: a mounted warrior riding down a fallen enemy, and two facing figures in horned headdresses holding spears. Both belong to a Germanic iconographic tradition found across the North Sea world.',
      'A gilded dragon head sits at the end of the crest, another at the brow, and the eyebrows are inlaid with garnets and edged in silver wire. One eyebrow carries garnets backed with gold foil and the other does not — an asymmetry that produced a striking effect in firelight and is generally taken to be deliberate.'),
    S('Origin and dating',
      'The burial is dated to the early seventh century, most often to around 620 or 625, on the evidence of a purse of Merovingian gold coins buried with it — the coins give a date after which the burial must have happened.',
      'The helmet\'s closest parallels are not English at all. Its construction and its stamped panels resemble helmets from the Vendel and Valsgärde cemeteries in eastern Sweden, and the relationship between the Sutton Hoo burial and Scandinavian elite culture is one of the long-running questions of the period.',
      'Whether it was made in England, imported, or made in England by someone working in a Scandinavian tradition is not settled. The most that can responsibly be said is that it belongs to a shared North Sea aristocratic style rather than to an isolated English one.'),
    S('Historical context',
      'Mound 1 is a ship burial: a vessel some 27 metres long was dragged uphill from the river and buried with a chamber of extraordinary grave goods — gold shoulder clasps, a great gold buckle, a purse lid, silver from the eastern Mediterranean, drinking horns, weapons and this helmet.',
      'No body was found. The soil is acidic and skeletal material does not survive it, and while phosphate traces have been argued as evidence of a burial, the question of whether anyone was interred there remains genuinely open.',
      'The occupant is most commonly identified as Rædwald, king of the East Angles, who died around 624 and whose status and dates fit. That identification is a strong inference from the wealth, the date and the location, not a documented fact, and no name is attached to the burial by anything found in it.'),
    S('The object and its reconstruction',
      'The helmet came out of the ground as roughly 500 corroded fragments, and everything known about its shape is the product of reconstruction rather than of direct observation.',
      'The first reconstruction, completed in the 1940s, was later judged wrong in significant respects, and the helmet was dismantled and rebuilt in the early 1970s under Nigel Williams. That second reconstruction is the object on display and the basis of every published image.',
      'The distinction matters and is easy to lose. The famous face is a modern assembly of ancient pieces, with plaster and shaped supports filling what did not survive, and the confident silhouette it presents was arrived at by argument rather than found intact.'),
    S('Provenance and current location',
      'The site was excavated in 1939 on land belonging to Edith Pretty, who had commissioned the local archaeologist Basil Brown to open the mounds. A coroner\'s inquest found the treasure to be hers, and she gave the entire assemblage to the nation.',
      'It is held by the British Museum, where the reconstructed helmet is displayed with the rest of the Mound 1 material. A full replica made by the Royal Armouries is also displayed, showing how the complete, bright-surfaced helmet would have appeared when new.',
      'The Sutton Hoo site itself is in the care of the National Trust, and further excavation and survey have continued since, including the discovery of other burials in the surrounding cemetery.'),
    S('Legacy',
      'The find transformed the study of early Anglo-Saxon England. A period thought materially impoverished produced goldwork, garnet cloisonné and long-distance trade goods of the first rank, and the phrase "Dark Ages" has been retreating from serious use ever since.',
      'It also reoriented the reading of Beowulf. The poem describes helmets with boar crests, ring-hilted swords and ship burials, and after 1939 those passages read as descriptions of a real material world rather than as poetic invention.',
      'The mask has become one of the most reproduced images in British archaeology, standing in for the whole Anglo-Saxon period — which is worth holding lightly, since it is an exceptional object from an exceptional burial and was never typical of anything.')
  ],

  'ulfberht-swords': [
    S('Overview',
      'The Ulfberht swords are a group of early medieval blades carrying an inlaid inscription of the name, usually rendered +VLFBERH+T or a variant. Around 170 are known, found from Ireland to Russia, and they were made across roughly two and a half centuries.',
      'This is a label rather than a single object. The article covers a corpus, not one sword, and the individual blades vary in quality, construction and date far more than the shared inscription suggests.',
      'They matter because of what the best of them are made of. Some Ulfberht blades are of a steel far more consistent than anything else known from early medieval Europe, which raises a question about materials and trade that is still not fully answered.'),
    S('Description',
      'The inscription is inlaid rather than stamped: iron letters were hammered into channels cut in the hot blade and forge-welded flush, so the name is part of the metal and not a surface mark. It usually sits in the upper third of the blade, within the fuller.',
      'Most examples are typical Viking-age swords in form — double-edged, broad, around 70 to 80 centimetres of blade, with a fuller and a rounded point. The blades were made in one place and hilted elsewhere, so the hilts vary regionally while the blades do not.',
      'Many blades carry a geometric pattern on the reverse face, opposite the name. The blades themselves survive far better than their hilts, since the organic grip materials rot and the fittings are often lost.'),
    S('Origin and dating',
      'The group spans roughly the ninth to the eleventh centuries, and the name is generally taken to be a workshop or a lineage of workshops in the Frankish Rhineland rather than one man — no individual could have covered that span.',
      'The Frankish attribution rests on the distribution of the earliest examples, on the Latin form of the name, and on the fact that Carolingian rulers repeatedly legislated against exporting weapons to the north, which implies there was a trade worth banning.',
      'Precise dating of individual blades is difficult. Most come from graves or rivers, and where a grave gives a date it dates the burial rather than the sword — swords were inherited, and a blade could be decades old when it went into the ground.'),
    S('Historical context',
      'The metallurgy is the heart of the subject. The finest Ulfberht blades are made from crucible steel with a high carbon content and remarkably few slag inclusions, which is not what European bloomery furnaces of the period normally produced.',
      'The most discussed explanation is that the steel arrived as imported ingots, most plausibly from Central Asia or the Middle East along the Volga trade routes that also brought Islamic silver dirhams into Scandinavia in very large quantities. The trade route is well evidenced; the ingots themselves are an inference from the metal.',
      'It is worth being careful here. Not every Ulfberht blade is of this quality, the analyses that support the crucible-steel argument cover a minority of the corpus, and popular accounts have run considerably ahead of what has actually been demonstrated.'),
    S('The name and its imitations',
      'A large proportion of surviving Ulfberht blades are of ordinary quality, and many carry the inscription misspelled or with the crosses in the wrong positions — the commonest variant places the second cross after the T rather than before it.',
      'The straightforward reading is counterfeiting. A name that guaranteed quality was worth copying, and copies were made by smiths who could reproduce the letters but not the steel, which makes this the earliest well-documented case of brand piracy in European metalwork.',
      'That has a practical consequence: the inscription is not a guarantee of anything. Assessing an Ulfberht blade means assessing the metal, and the name on it establishes only that someone wanted it associated with the name.'),
    S('Distribution and surviving examples',
      'The find distribution runs from Ireland and Britain through Scandinavia and the Baltic into the Rus\' lands, and the densest concentrations are Norwegian — an artefact of Norwegian burial custom rather than of where the swords were used.',
      'River finds have produced some of the best-preserved blades, and the anaerobic conditions in rivers such as the Thames and the Witham have kept inscriptions legible that would have corroded away in the ground.',
      'The Museum of Cultural History in Oslo, the National Museum of Denmark, the German National Museum in Nuremberg and the British Museum all hold examples. Because the blades are individually catalogued rather than treated as one collection, a single accession number would not describe the group.'),
    S('Legacy',
      'The Ulfberht corpus is the strongest evidence available that early medieval Europe was economically connected on a continental scale. Blades made in the Rhineland, possibly from steel that travelled the Volga, were buried in Norwegian graves.',
      'It also demolishes a stubborn picture of the Viking age as isolated and technologically backward. These are precisely made, consistently marked, widely distributed manufactured goods with a reputation that was worth forging.',
      'The remaining questions are real and open. Where the steel came from, whether one workshop or many used the name, and how the trade was organised are all argued rather than settled, and confident popular claims on any of them should be treated with suspicion.')
  ],

  joyeuse: [
    S('Overview',
      'Joyeuse is the sword kept among the French royal regalia and used in the coronation of French kings, held today in the Louvre. Tradition identifies it as the sword of Charlemagne.',
      'The object and the tradition have to be separated at the outset. The sword in the Louvre is real, and it is a genuine piece of medieval regalia with a documented ceremonial history; the attribution to Charlemagne is a claim made long after his death and is not supported by the object.',
      'Its importance is as a coronation object rather than as a weapon. For centuries it was the physical instrument by which French kingship connected itself to the Carolingian past, and that function is entirely historical whatever the sword\'s origin.'),
    S('Description',
      'The sword is a composite, assembled from parts of markedly different dates — which is normal for regalia, since pieces were repaired, replaced and reset over centuries of ceremonial use.',
      'The pommel is the earliest element, generally dated to the tenth or eleventh century, and is of a form found in Scandinavian and northern European work. The quillons are cast as winged creatures and are usually dated to the twelfth century.',
      'The grip and the scabbard are considerably later. The blade itself has been dated variously and the question is not closed, and the gold, the fleur-de-lis decoration and the surviving scabbard belong largely to the later medieval and early modern refurbishments.'),
    S('Origin and dating',
      'No part of the sword has been securely dated to Charlemagne\'s lifetime, which ended in 814. The earliest component is at least a century later, which by itself rules out the traditional attribution as it is usually stated.',
      'The documented history begins much later. The sword is recorded in the royal treasury at Saint-Denis, and its use in coronations is attested from the thirteenth century, which is where its verifiable career starts.',
      'The honest summary is that Joyeuse is a genuine medieval object of composite date, associated with Charlemagne by a tradition that grew up long after him, and that the association is a fact about French royal ideology rather than about the sword.'),
    S('The sword and the legend',
      'The literary Joyeuse belongs to the Song of Roland and the chansons de geste, where Charlemagne\'s sword is given a name, a history and miraculous properties — a fragment of the Holy Lance in its pommel among them.',
      'None of that describes the object in the Louvre, and it was written down in the eleventh and twelfth centuries, three hundred years after Charlemagne. The literary sword and the physical sword are separate subjects that share a name.',
      'The identification of the regalia sword with the epic one was useful precisely because it was believed. A Capetian or Valois king crowned with Charlemagne\'s sword was making a claim about legitimate descent, and the sword\'s value lay in what it asserted.'),
    S('Historical context and coronation role',
      'French kings were crowned at Reims, and Joyeuse was carried in the ceremony and girded on the new king as part of the ritual that made him a king — a physical act of investiture rather than a display of an heirloom.',
      'The regalia were kept at the abbey of Saint-Denis, the burial church of the French kings, and Joyeuse sat among a group of objects — crown, sceptre, hand of justice — whose collective purpose was to anchor the monarchy in a continuous sacred past.',
      'It was used in coronations through to that of Charles X in 1825, which gives it one of the longest documented ceremonial careers of any surviving European object.'),
    S('Provenance and current location',
      'The sword passed from Saint-Denis into the royal collections and survived the French Revolution, when a great deal of the regalia was destroyed or broken up for its materials.',
      'It is now in the Louvre, in the department of decorative arts, displayed with the surviving French crown jewels. Its continuous documented presence in the regalia from the medieval period is a large part of what makes it valuable.',
      'Its composite construction is itself the provenance record. The successive components are the physical trace of centuries of repair and reuse, and reading them is how the object\'s real history is recovered.'),
    S('Legacy',
      'Joyeuse is the clearest case in the archive of an object whose historical importance is entirely independent of whether its origin story is true. It crowned French kings for six centuries, and that is a fact regardless of who owned it in 800.',
      'It also shows how regalia work. A coronation object does not need to be authentic to be effective; it needs to be believed in, and Joyeuse was believed in for long enough to become genuinely historic by a different route.',
      'For the archive it is a standing reminder to keep two questions apart: what is this object, and what has been said about it. The answers here are both interesting and almost entirely unrelated.')
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
console.log(`\n${n} named-artifact articles rewritten; history.json written`)
