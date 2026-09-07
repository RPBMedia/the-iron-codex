/**
 * TRACK D, batch 3 — closing what can honestly be closed.
 *
 * The owner asked for AI prompts for the three deferred artifacts. Two of them
 * turned out not to need one: a further search found real photographs of the
 * actual objects, which is always the better answer.
 *
 *  - Henry V's funeral achievements: J. Starkie Gardner's 1897 plate of the helm
 *    from the tomb. Small and monochrome, but the object itself, public domain.
 *  - Churburg: a photograph of harness S18, c. 1410. This is NOT harness No. 13,
 *    so the article is written about the ARMOURY and its harnesses rather than
 *    about No. 13 specifically, and the caption identifies S18 by name. Titling an
 *    article "No. 13" over a picture of S18 would be a falsehood with a photograph
 *    attached.
 *
 * The Sword of St Maurice at Turin remains deferred and gets no AI image. It is a
 * specific surviving object; generating one would fabricate a real artifact rather
 * than illustrate a type, which is the archive's own definition of fake evidence —
 * and validateAiGeneratedImage blocks AI on Famous weapon / Famous armor anyway.
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
    id: 'churburg-armour',
    name: 'Churburg Armoury',
    type: 'weaponArmor', weaponArmorType: 'Famous armor',
    aliases: ['Churburg', 'Castel Coira armoury', 'Churburg harnesses', 'Churburg 13'],
    year: 1400, period: 'Late Middle Ages', region: 'South Tyrol, with Italian armour',
    material: 'Steel',
    battlefieldRole: 'The most important surviving group of early plate harnesses',
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Churburg%20s18.jpg',
    imageInfo: {
      caption: 'Churburg harness S18, an Italian armour of about 1410 from the Churburg armoury, shown mounted and substantially complete.',
      creator: 'Unknown photographer',
      date: 'c. 1410 (object); photograph 1998',
      source: 'Churburg armoury, Schluderns, South Tyrol / Wikimedia Commons',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Churburg_s18.jpg',
      note: 'The actual surviving harness S18 — NOT the celebrated harness No. 13, for which no licensed photograph could be found. An older monochrome photograph; the black sleeves are the mount, not part of the armour. Licensed as copyrighted free use.'
    },
    specs: { note: 'A private collection, conventionally referred to by harness numbers. Access is restricted and photography is not generally licensed.', rows: [
      { label: 'Location', value: 'Churburg (Castel Coira), Schluderns, South Tyrol' },
      { label: 'Held by', value: 'The Trapp family, since the early 16th century' },
      { label: 'Core holdings', value: 'Italian harnesses, later 14th to mid-15th century' },
      { label: 'Most celebrated', value: 'Harness No. 13, an Italian armour of about 1390' },
      { label: 'Shown here', value: 'Harness S18, of about 1410' },
      { label: 'Why it matters', value: 'Never dispersed — the harnesses stayed together' },
      { label: 'Style', value: 'Italian: smooth, globose, deflecting by curve' },
      { label: 'Access', value: 'Private; limited public visiting' }
    ] },
    summary: 'The armoury at Churburg in South Tyrol holds the most important surviving group of early plate harnesses, kept together for centuries instead of being dispersed.',
    details: 'Its value is collective. Where museums hold loose pieces gathered from everywhere, Churburg preserves whole harnesses that have stayed in one place — which is why it is the yardstick for dating early plate.',
    knownFor: [
      'The most important surviving group of late-14th and early-15th-century plate harnesses.',
      'Never dispersed — the armour stayed in the castle instead of entering the collectors\' market.',
      'Harness No. 13, an Italian armour of about 1390, is its most celebrated single piece.',
      'A private collection, which is why photographs of it are scarce.'
    ],
    contentSections: [
      S('Overview',
        'Churburg — Castel Coira — is a castle at Schluderns in South Tyrol, and its armoury holds the most important surviving group of early European plate armour in existence.',
        'Its significance is not any single object but the group. Whole harnesses of the later fourteenth and earlier fifteenth centuries have stayed together in one building, and that is almost unique.',
        'The archive cites Churburg constantly — in the bascinet, plate armour, gothic armour, breastplate, gauntlet and limb-harness articles — because it is where the reference examples are.'),
      S('Date and provenance',
        'The castle has been held by the Trapp family since the early sixteenth century, and the armoury was never sold off, broken up or dispersed into the nineteenth-century collectors\' market.',
        'That is the whole story. Almost every other body of medieval armour was scattered: pieces were separated, sold individually, married to unrelated components and reassembled by dealers and museums.',
        'Because Churburg avoided that, its harnesses retain associations that elsewhere have been destroyed — which pieces belong with which, and what a complete armour of a given date actually consisted of.'),
      S('The harnesses',
        'The core holdings are Italian armours of roughly 1370 to 1450, from the period when the Milanese workshops were arming much of Europe, and they are conventionally referred to by number.',
        'Harness No. 13 is the most celebrated: an Italian armour of about 1390, and one of the earliest substantially complete plate harnesses to survive anywhere. It is the piece most often reproduced in the literature.',
        'The harness photographed here is S18, of about 1410 — a different armour of the same tradition, and a reminder that Churburg is a group rather than a single famous object.'),
      S('Attribution and reliability',
        'The harnesses are genuine and the collection\'s continuity is documented, but "complete" needs qualifying even here.',
        'Armours kept in use and in storage for centuries were repaired, and pieces have been moved between harnesses within the armoury itself over its long history. A Churburg harness is a well-associated group of components rather than a sealed moment.',
        'The numbering is also a modern scholarly convenience rather than a medieval inventory, and different publications have not always used it consistently.'),
      S('Historical context',
        'The armoury is essentially the accumulated equipment of a castle and its holders across the late medieval centuries, rather than a collection assembled by taste.',
        'That gives it a different character from a museum holding. It represents what one place actually had, over time, rather than what a curator or a collector chose to acquire.',
        'Its Italian character reflects the trade of the period: South Tyrol sat on the routes north from Milan, and Milanese harnesses reached the Empire in quantity.'),
      S('The collection today',
        'It remains in the castle and in private hands, with limited public access, and it is studied by appointment rather than browsed.',
        'That privacy is why photography of it is scarce and why this article is illustrated with an older image of one harness rather than the celebrated No. 13.',
        'It has nonetheless been published extensively, and the Churburg harnesses appear in essentially every serious study of early plate armour.'),
      S('Significance',
        'It is the dating yardstick for early European plate. When a museum assigns a loose breastplate or a pair of couters to a decade, the comparison is very often with Churburg.',
        'It also demonstrates by contrast how much the dispersal of armour cost. Every composite harness on a museum stand is a reconstruction of an association that Churburg simply never lost.',
        'For this archive it is the object behind the generic articles: the plate-armour, breastplate and limb-harness entries describe a system that Churburg preserves in the flesh.')
    ],
    relatedEntries: { weaponsArmor: [
      { title: 'Plate Armor', type: 'weaponArmor', slug: 'plate-armor', label: 'The system its harnesses preserve intact' },
      { title: 'Avant Armour', type: 'weaponArmor', slug: 'avant-armour', label: 'The comparable Milanese harness in Glasgow' },
      { title: 'Breastplate', type: 'weaponArmor', slug: 'breastplate', label: 'Italian globose forms in the collection' },
      { title: 'Arm Harness', type: 'weaponArmor', slug: 'arm-harness', label: 'Complete arms survive on its harnesses' },
      { title: 'Leg Harness', type: 'weaponArmor', slug: 'leg-harness', label: 'Complete legs survive likewise' },
      { title: 'Bascinet', type: 'weaponArmor', slug: 'bascinet', label: 'Helmets of the same harnesses' }
    ] },
    sources: [
      { title: 'Churburg S18 photograph', url: 'https://commons.wikimedia.org/wiki/File:Churburg_s18.jpg', type: 'image source', institution: 'Wikimedia Commons' },
      { title: 'Metropolitan Museum of Art — Arms and Armor department', url: 'https://www.metmuseum.org/art/collection/search?department=4', type: 'museum collection', institution: 'Metropolitan Museum of Art' },
      { title: 'Wallace Collection — European Armoury', url: 'https://www.wallacecollection.org/', type: 'museum collection', institution: 'Wallace Collection' }
    ]
  },

  {
    id: 'henry-v-achievements',
    name: 'Funeral Achievements of Henry V',
    type: 'weaponArmor', weaponArmorType: 'Famous armor',
    aliases: ['Henry V achievements', 'Henry V funeral helm'],
    year: 1422, period: 'Late Middle Ages', region: 'England',
    material: 'Iron, wood and leather',
    battlefieldRole: 'Funerary achievements displayed above a royal tomb',
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Helm%20from%20the%20tomb%20Henry%20V.png',
    imageInfo: {
      caption: 'The helm from the tomb of Henry V at Westminster Abbey, photographed for J. Starkie Gardner in 1897.',
      creator: 'J. Starkie Gardner',
      date: 'early 15th century (object); plate published 1897',
      source: 'Westminster Abbey / Wikimedia Commons',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Helm_from_the_tomb_Henry_V.png',
      note: 'The actual surviving helm, in a small monochrome plate of 1897 — the best freely licensed image available, as the Abbey does not license modern photography of the achievements. Public domain.'
    },
    specs: { note: 'The achievements are a group; the helm is the best documented and the piece shown here.', rows: [
      { label: 'Date', value: 'Early 15th century; the king died in 1422' },
      { label: 'The group', value: 'Helm, shield and saddle' },
      { label: 'Original setting', value: 'Above the chantry chapel, Westminster Abbey' },
      { label: 'Helm form', value: 'A great helm of tilting type' },
      { label: 'Now', value: 'Conserved and displayed; replicas above the chantry' },
      { label: 'Custodian', value: 'Westminster Abbey' },
      { label: 'Comparable', value: 'The Black Prince\'s achievements at Canterbury' },
      { label: 'Attribution caution', value: 'Not demonstrably worn in battle' }
    ] },
    summary: 'The helm, shield and saddle carried at Henry V\'s funeral in 1422 and displayed above his chantry at Westminster Abbey.',
    details: 'With the Black Prince\'s achievements at Canterbury they are the most important English funerary group to survive — and, like them, they must not be assumed to be battlefield equipment.',
    knownFor: [
      'The helm, shield and saddle from Henry V\'s funeral in 1422.',
      'Displayed for centuries above his chantry chapel in Westminster Abbey.',
      'With the Black Prince\'s achievements, the most important English survival of its kind.',
      'Often called his Agincourt helm — a tradition the objects cannot confirm.'
    ],
    contentSections: [
      S('Overview',
        'Henry V died in 1422 and was buried at Westminster Abbey, and the achievements carried at his funeral — a helm, a shield and a saddle — were placed above his chantry chapel.',
        'They survive, which is remarkable: leather, wood and textile almost never last, and these did only because they were hung high in an abbey and left undisturbed.',
        'With the Black Prince\'s achievements at Canterbury they form the two great English survivals of this practice.'),
      S('Date and provenance',
        'The objects belong to the early fifteenth century and to the king\'s funeral, and their provenance is about as secure as medieval provenance gets — they have been in one building, in one position, since 1422.',
        'They were removed from above the chantry in the twentieth century for conservation, and replicas were installed in their place, which is now standard practice for objects of this kind.',
        'The originals are held and displayed by the Abbey under controlled conditions.'),
      S('The surviving objects',
        'The helm is a great helm of tilting form — heavy, fully enclosing, and built for the lists rather than for a battlefield where the bascinet had long since taken over.',
        'The shield and the saddle complete the group. A funeral saddle is an especially rare survival, since saddles are leather and wood and essentially never last.',
        'The helm shows damage, and that damage is where the object\'s most repeated story begins.'),
      S('Attribution and reliability',
        'It is often said that this is the helm Henry wore at Agincourt in 1415, and that the damage to it is battle damage from that day.',
        'The objects cannot confirm that. A funerary achievement may be a man\'s own equipment or may be made or adapted for the funeral, and a tilting helm of this weight is in any case unlikely battlefield equipment for 1415.',
        'The honest position is that these are securely Henry V\'s funeral achievements, that they are genuine early fifteenth-century objects, and that no part of the Agincourt story can be demonstrated from them. That should be said where the reader meets the claim, not buried at the end.'),
      S('Historical context',
        'Henry V reigned from 1413 to 1422, won at Agincourt in 1415, conquered Normandy and secured the Treaty of Troyes before dying at thirty-five with the French crown promised to his heir.',
        'His funeral was a state occasion of great deliberateness, and the achievements were part of a display asserting what he had been and what his infant son inherited.',
        'The practice they belong to — hanging a dead man\'s arms above his tomb — was widespread, and its rarity today is a fact about survival rather than about how often it was done.'),
      S('The objects today',
        'They are conserved at Westminster Abbey, with replicas above the chantry so that the visual arrangement is preserved while the originals are protected.',
        'The Abbey does not license modern photography of them freely, which is why this article is illustrated with a plate published in 1897 — old, small and monochrome, but the actual object.',
        'They have been studied and published, particularly the helm, whose form and damage are the subject of the longest-running discussion.'),
      S('Significance',
        'They are one of only two substantial English funerary achievement groups, and between them and Canterbury they preserve nearly everything known about the practice in England.',
        'The saddle in particular is close to unique, and gives direct evidence for a class of object that otherwise survives almost not at all.',
        'They are also the archive\'s clearest example of a good story that the evidence will not carry. The Agincourt helm makes a better line than "a tilting helm of uncertain use", and the second is what the object supports.')
    ],
    relatedEntries: {
      people: [{ title: 'Henry V', type: 'person', slug: 'henry-v-of-england', label: 'Whose funeral achievements they are' }],
      events: [{ title: 'Battle of Agincourt', type: 'event', slug: 'battle-of-agincourt', label: 'The battle the helm is traditionally linked to' }],
      weaponsArmor: [
        { title: 'Achievements of the Black Prince', type: 'weaponArmor', slug: 'black-prince-achievements', label: 'The other great English funerary group' },
        { title: 'Great Helm', type: 'weaponArmor', slug: 'great-helm', label: 'The type of the surviving helm' },
        { title: 'Pembridge Helm', type: 'weaponArmor', slug: 'pembridge-helm', label: 'Another English funerary helm' },
        { title: 'Bascinet', type: 'weaponArmor', slug: 'bascinet', label: 'What was actually worn in war by 1415' }
      ]
    },
    sources: [
      { title: 'Westminster Abbey — Henry V', url: 'https://www.westminster-abbey.org/', type: 'museum collection', institution: 'Westminster Abbey' },
      { title: 'Helm from the tomb of Henry V, 1897 plate', url: 'https://commons.wikimedia.org/wiki/File:Helm_from_the_tomb_Henry_V.png', type: 'image source', institution: 'Wikimedia Commons' },
      { title: 'Royal Armouries — helmets collection', url: 'https://royalarmouries.org/collection/', type: 'museum collection', institution: 'Royal Armouries' }
    ]
  }
]

let n = 0
for (const article of articles) {
  if (data.weaponsArmor.some((x) => x.id === article.id)) throw new Error(`already exists: ${article.id}`)
  data.weaponsArmor.push(article)
  console.log(`+ ${article.id.padEnd(22)} ${article.contentSections.length} sections, ${article.contentSections.flatMap((s) => s.paragraphs).join(' ').length} chars`)
  n++
}

const get = (id) => {
  const e = data.weaponsArmor.find((x) => x.id === id)
  if (!e) throw new Error(`missing: ${id}`)
  return e
}
const backLinks = {
  'plate-armor': [{ title: 'Churburg Armoury', slug: 'churburg-armour', label: 'Surviving example — whole harnesses kept together' }],
  'avant-armour': [{ title: 'Churburg Armoury', slug: 'churburg-armour', label: 'The comparable Italian group in South Tyrol' }],
  bascinet: [{ title: 'Churburg Armoury', slug: 'churburg-armour', label: 'Surviving helmets on complete harnesses' }],
  'great-helm': [{ title: 'Funeral Achievements of Henry V', slug: 'henry-v-achievements', label: 'Surviving example — the helm at Westminster' }],
  'black-prince-achievements': [{ title: 'Funeral Achievements of Henry V', slug: 'henry-v-achievements', label: 'The other great English funerary group' }],
  'pembridge-helm': [{ title: 'Funeral Achievements of Henry V', slug: 'henry-v-achievements', label: 'Another English funerary helm' }]
}
for (const [id, entries] of Object.entries(backLinks)) {
  ;(get(id).relatedEntries.weaponsArmor ??= []).push(...entries.map((e) => ({ ...e, type: 'weaponArmor' })))
  console.log(`  back-link ${id} -> ${entries.map((e) => e.slug).join(', ')}`)
}

// Person -> object, required by the reciprocity rule.
const henry = data.characters.find((c) => c.id === 'henry-v-of-england')
if (!henry) throw new Error('missing henry-v-of-england')
;(henry.relatedEntries.weaponsArmor ??= []).push({
  title: 'Funeral Achievements of Henry V', type: 'weaponArmor', slug: 'henry-v-achievements',
  label: 'His funeral helm, shield and saddle at Westminster Abbey'
})
console.log('  back-link characters/henry-v-of-england -> henry-v-achievements')

writeFileSync(dataPath, JSON.stringify(data, null, 2))
console.log(`\n${n} artifacts added; weaponsArmor now ${data.weaponsArmor.length}`)
