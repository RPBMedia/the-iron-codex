/**
 * TRACK D, batch 2 — six more unique surviving artifacts.
 *
 * Three of the nine remaining are DEFERRED for want of a licensed photograph of
 * the actual object, and the brief forbids generated imagery where the object
 * survives:
 *
 *   - Churburg Armour No. 13 — the Churburg armoury is private and licenses no
 *     photographs. Commons holds other Churburg harnesses; using one of those
 *     would be passing off a different object.
 *   - Henry V's funeral achievements — held by Westminster Abbey, no open licence.
 *   - Sword of St Maurice (Turin) — the only Commons candidate turned out on
 *     inspection to be a MODERN REPRODUCTION: mirror-polished steel and a new
 *     leather grip. Using it for a named-artifact article would have been exactly
 *     the substitution the brief rules out.
 *
 * Every image below is a photograph of the actual surviving object, and where it
 * is shot through display glass or is an old monochrome plate, the caption says so.
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
    id: 'st-wenceslas-helmet',
    name: 'Helmet of St Wenceslas',
    type: 'weaponArmor', weaponArmorType: 'Famous armor',
    aliases: ['Svatováclavská přilba', 'Wenceslas helmet'],
    year: 950, period: 'Early Middle Ages', region: 'Bohemia',
    material: 'Iron with a silver-plated nasal',
    battlefieldRole: 'National relic of Bohemia and a rare 10th-century helmet',
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/St%20Wenceslas%20helmet.jpg',
    imageInfo: {
      caption: 'The helmet of St Wenceslas, shown from the front and rear: a conical iron bowl with a decorated browband and a silver-plated nasal bearing a Crucifixion.',
      creator: 'Unknown; archival photograph',
      date: '10th century (object)',
      source: 'St Vitus Treasury, Prague Castle / Wikimedia Commons',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:St_Wenceslas_helmet.jpg',
      note: 'The actual surviving object. An older monochrome photograph, used because no freely licensed colour photograph of the helmet could be found; the damage visible to the bowl is genuine. Public domain.'
    },
    specs: { note: 'One of very few tenth-century helmets surviving anywhere in Europe.', rows: [
      { label: 'Date', value: '10th century' },
      { label: 'Bowl', value: 'Conical, raised iron' },
      { label: 'Browband', value: 'Decorated, with applied ornament' },
      { label: 'Nasal', value: 'Silver-plated, worked with a Crucifixion' },
      { label: 'Kept with', value: 'A mail shirt and a sword, as Bohemian relics' },
      { label: 'Location', value: 'St Vitus Treasury, Prague Castle' },
      { label: 'Attribution', value: 'Traditionally St Wenceslas, murdered 935' },
      { label: 'Condition', value: 'Damaged at the crown; otherwise substantially intact' }
    ] },
    summary: 'A tenth-century iron helmet kept in Prague as the helmet of St Wenceslas, with a silver nasal worked with a Crucifixion.',
    details: 'Unusually among relic-objects, the dating does not rule out the tradition: the helmet really is of Wenceslas\'s century, even if nothing proves it was his.',
    knownFor: [
      'A silver-plated nasal worked with a figure of the crucified Christ.',
      'One of very few tenth-century helmets surviving anywhere in Europe.',
      'Kept with a mail shirt and a sword as the relics of Bohemia\'s patron saint.',
      'A rare case where the object\'s date is actually compatible with its tradition.'
    ],
    contentSections: [
      S('Overview',
        'The helmet of St Wenceslas is a conical iron helmet of the tenth century, kept in the treasury of St Vitus Cathedral at Prague Castle among the national relics of Bohemia.',
        'Its most striking feature is the nasal — a bar of silver-plated iron descending over the face, worked with a figure of the crucified Christ, so that the wearer looked out from behind a crucifix.',
        'It is preserved with a mail shirt and a sword as the equipment of Duke Wenceslas, murdered in 935 and Bohemia\'s patron saint.'),
      S('Date and provenance',
        'The helmet is dated on stylistic and technical grounds to the tenth century, which places it squarely in Wenceslas\'s own lifetime — and that is unusual among objects of this kind.',
        'It has been in ecclesiastical custody in Prague for as long as records reach, kept and displayed as a relic rather than as arms, and it appears in inventories of the cathedral treasury across the medieval and early modern centuries.',
        'The bowl and the nasal are not necessarily of one origin. The nasal\'s decoration has been read as western European work while the bowl has been connected to eastern or Scandinavian traditions, and the helmet may be an assembly.'),
      S('Construction',
        'The bowl is conical and raised, with a decorated band around the brow carrying applied ornament, in a form found across northern and eastern Europe in this period.',
        'The nasal is the exceptional element: a broad silver-plated bar, extended into a cross-like shape, with the crucified Christ worked in relief along it.',
        'The crown is damaged, and the helmet as displayed shows that loss honestly rather than hiding it behind restoration.'),
      S('Attribution and reliability',
        'The tradition should still not be stated as fact — no chain of evidence connects this object to Wenceslas personally, and relics acquire attributions readily.',
        'But the usual objection does not apply here. Where Joyeuse and the Wallace Sword are contradicted by their own materials, this helmet is genuinely of the right century, so the tradition is at least possible in a way those are not.',
        'The honest position: a tenth-century Bohemian helmet of the highest quality, kept as Wenceslas\'s since at least the Middle Ages, whose ownership cannot be demonstrated and cannot be ruled out either.'),
      S('Historical context',
        'Wenceslas ruled Bohemia in the 920s and 930s and was killed in 935, most probably at the instigation of his brother Boleslav. He was rapidly venerated, and his cult became the central expression of Bohemian identity.',
        'The relics — helmet, mail and sword — belong to that cult rather than to a battlefield. They were the material proof of a sainted ruler, and their possession helped legitimise those who held them.',
        'They came to function as something close to Bohemian regalia, invoked in the ceremonial and political language of the Czech lands for centuries.'),
      S('The surviving object today',
        'It is held in the St Vitus Treasury at Prague Castle, with the associated mail shirt and sword, and is displayed only occasionally.',
        'Its condition is stable and the damage to the bowl is original rather than recent, so what is on display is close to what has been in Prague for a thousand years.',
        'Access is restricted in the way relics generally are, which is part of why good modern photography of it is scarce.'),
      S('Significance',
        'It is one of the very few tenth-century helmets to survive anywhere in Europe, which would make it important even without the attribution.',
        'The Crucifixion on the nasal is its real interest: armour and devotion fused in one object, so that the thing protecting the face also declared what the wearer believed.',
        'For the archive it sits usefully beside Joyeuse and the Wallace Sword, as the case where the evidence happens to permit the tradition rather than contradicting it.')
    ],
    relatedEntries: { weaponsArmor: [
      { title: 'Nasal Helmet', type: 'weaponArmor', slug: 'nasal-helmet', label: 'The type it belongs to' },
      { title: 'Spangenhelm', type: 'weaponArmor', slug: 'spangenhelm', label: 'The wider early medieval construction tradition' },
      { title: 'Gjermundbu Helmet', type: 'weaponArmor', slug: 'gjermundbu-helmet', label: 'The other great 10th-century helmet survival' },
      { title: 'Mail Armor', type: 'weaponArmor', slug: 'mail-armor', label: 'A mail shirt is kept with it' },
      { title: 'Joyeuse', type: 'weaponArmor', slug: 'joyeuse', label: 'A relic whose dating does NOT support its tradition' },
      { title: 'Coppergate Helmet', type: 'weaponArmor', slug: 'coppergate-helmet', label: 'Another helmet carrying Christian invocation' }
    ] },
    sources: [
      { title: 'Prague Castle — St Vitus Treasury', url: 'https://www.hrad.cz/en', type: 'museum collection', institution: 'Prague Castle Administration' },
      { title: 'Helmet of St Wenceslas photograph', url: 'https://commons.wikimedia.org/wiki/File:St_Wenceslas_helmet.jpg', type: 'image source', institution: 'Wikimedia Commons' },
      { title: 'Kunsthistorisches Museum Wien — comparative early medieval arms', url: 'https://www.khm.at/en/', type: 'museum collection', institution: 'Kunsthistorisches Museum' }
    ]
  },

  {
    id: 'reichsschwert',
    name: 'Imperial Sword (Reichsschwert)',
    type: 'weaponArmor', weaponArmorType: 'Famous weapon',
    aliases: ['Reichsschwert', 'Imperial Sword'],
    year: 1200, period: 'High Middle Ages', region: 'Holy Roman Empire',
    material: 'Steel blade; gilded scabbard with silver-gilt panels',
    battlefieldRole: 'Coronation regalia of the Holy Roman Empire',
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Imperial%20Sword%20of%20the%20Holy%20Roman%20Empire.jpg',
    imageInfo: {
      caption: 'The Imperial Sword with its gilded scabbard, whose panels carry figures of rulers, displayed with the Imperial Regalia in Vienna.',
      creator: 'Photograph via Wikimedia Commons',
      date: 'sword c. 1200; scabbard earlier (object)',
      source: 'Imperial Treasury, Hofburg, Vienna / Wikimedia Commons',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Imperial_Sword_of_the_Holy_Roman_Empire.jpg',
      note: 'The actual surviving object, photographed in its case, showing the scabbard alongside the blade. Licensed CC BY-SA 3.0.'
    },
    specs: { note: 'Sword and scabbard are of different dates, which is normal for regalia kept in use across centuries.', rows: [
      { label: 'Sword', value: 'c. 1200, with a later grip' },
      { label: 'Scabbard', value: 'Earlier than the sword; silver-gilt panels' },
      { label: 'Scabbard imagery', value: 'A sequence of rulers in embossed panels' },
      { label: 'Blade inscription', value: 'Christus vincit, Christus regnat, Christus imperat' },
      { label: 'Function', value: 'Carried in imperial coronations' },
      { label: 'Kept with', value: 'The Imperial Regalia (Reichskleinodien)' },
      { label: 'Location', value: 'Imperial Treasury, Hofburg, Vienna' },
      { label: 'Not to be confused with', value: 'The Sword of St Maurice, a separate regalia sword' }
    ] },
    summary: 'The Imperial Sword is the coronation sword of the Holy Roman Empire, kept with the Imperial Regalia in Vienna.',
    details: 'Sword and scabbard are of different dates and the scabbard is the more remarkable piece: a sequence of gilded panels showing rulers, turning the object into an argument about imperial descent.',
    knownFor: [
      'The coronation sword of the Holy Roman Empire, part of the Imperial Regalia.',
      'A gilded scabbard whose panels show a sequence of rulers — imperial legitimacy as an object.',
      'A blade inscription reading Christus vincit, Christus regnat, Christus imperat.',
      'A different object from the Sword of St Maurice, which is also in the same collection.'
    ],
    contentSections: [
      S('Overview',
        'The Imperial Sword is the ceremonial sword of the Holy Roman Empire, one of the Reichskleinodien — the regalia used in the making of emperors — and it is kept today in the Imperial Treasury in Vienna.',
        'It is a real sword rather than a symbolic shape, but its whole significance is ceremonial: it was carried in procession and used in the ritual by which an emperor was invested.',
        'It should not be confused with the Sword of St Maurice, which is a separate regalia sword held in the same collection, nor with the differently named sword of that dedication at Turin.'),
      S('Date and provenance',
        'The sword itself is generally dated to around 1200, with a grip renewed later, while the scabbard is older than the blade it now holds.',
        'That mismatch is normal for regalia. Objects in continuous ceremonial use are repaired, re-hilted and re-mounted across centuries, and the assembly a visitor sees is the sum of that history rather than a single moment.',
        'The regalia were held at Nuremberg for much of the later Middle Ages, moved to Vienna in 1796 ahead of the French advance, and have remained in the Habsburg treasury since apart from a wartime removal.'),
      S('Construction',
        'The blade is a straight double-edged sword of its period, carrying an inscription invoking Christ as conqueror, ruler and commander — the acclamation that recurs throughout imperial ceremonial.',
        'The scabbard is the extraordinary element: covered in gold with silver-gilt plates worked in relief, carrying a sequence of ruler figures.',
        'The effect is that the scabbard makes a historical argument. Displaying a line of rulers on the sheath of the sword used to make emperors asserts the continuity of the office itself.'),
      S('Historical context',
        'The Imperial Regalia were the physical apparatus of a monarchy that had no fixed capital and an elective succession, and their possession mattered politically.',
        'A ruler who held the regalia could be crowned with them, and their custody was contested during disputed successions in a way that had real consequences.',
        'The sword\'s role was investiture — the moment the new emperor was girded with the sword of the realm, taking up the duty of defending the Church and keeping the peace.'),
      S('Attribution and reliability',
        'There is no attribution problem in the ownership sense: the sword is documented as regalia and its ceremonial career is well recorded.',
        'Dating is the live question, and the sword and scabbard have been assigned to different periods by different scholars. The article gives the commonly published dates and treats them as estimates rather than settled facts.',
        'A caution about the name: several swords in European treasuries carry imperial or saintly dedications, and the literature is not always careful about which is meant. This one is the Reichsschwert in Vienna.'),
      S('The surviving object today',
        'It is displayed in the Imperial Treasury in the Hofburg, Vienna, with the crown, the orb, the sceptre and the rest of the Reichskleinodien.',
        'Its condition is good, as one would expect of an object kept in treasuries rather than used, and it is shown with the scabbard so that the panels can be seen.',
        'It is among the most-visited medieval objects in Europe, and the Imperial Regalia as a group are one of the few medieval royal collections to survive substantially intact.'),
      S('Significance',
        'It is one of the best surviving examples of a sword functioning as a political instrument rather than a weapon.',
        'It also demonstrates that regalia are arguments. The scabbard\'s file of rulers claims descent and legitimacy, and it made that claim to every person who watched an emperor girded with it.',
        'Together with Szczerbiec and Joyeuse it forms a small group of European coronation swords, and comparing them shows how differently three realms told the same story about where authority came from.')
    ],
    relatedEntries: {
      locations: [{ title: 'Holy Roman Empire', type: 'location', slug: 'holy-roman-empire', label: 'The realm whose regalia it is' }],
      weaponsArmor: [
        { title: 'Arming Sword', type: 'weaponArmor', slug: 'arming-sword', label: 'The type its blade belongs to' },
        { title: 'Szczerbiec', type: 'weaponArmor', slug: 'szczerbiec', label: 'The Polish coronation sword' },
        { title: 'Joyeuse', type: 'weaponArmor', slug: 'joyeuse', label: 'The French coronation sword' },
        { title: 'Ulfberht Swords', type: 'weaponArmor', slug: 'ulfberht-swords', label: 'Frankish blades of the preceding centuries' }
      ]
    },
    sources: [
      { title: 'Imperial Treasury Vienna — Reichskleinodien', url: 'https://www.kaiserliche-schatzkammer.at/en/', type: 'museum collection', institution: 'Kaiserliche Schatzkammer Wien' },
      { title: 'Imperial Sword photograph', url: 'https://commons.wikimedia.org/wiki/File:Imperial_Sword_of_the_Holy_Roman_Empire.jpg', type: 'image source', institution: 'Wikimedia Commons' },
      { title: 'Kunsthistorisches Museum Wien', url: 'https://www.khm.at/en/', type: 'museum collection', institution: 'Kunsthistorisches Museum' }
    ]
  },

  {
    id: 'szczerbiec',
    name: 'Szczerbiec',
    type: 'weaponArmor', weaponArmorType: 'Famous weapon',
    aliases: ['Polish coronation sword', 'the notched sword'],
    year: 1250, period: 'High Middle Ages', region: 'Poland',
    material: 'Steel blade with a gold and enamel hilt',
    battlefieldRole: 'Coronation sword of the Polish monarchy',
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Szczerbiec%20Polish%20coronation%20sword.jpg',
    imageInfo: {
      caption: 'The hilt and cross-guard of Szczerbiec, where the inscriptions and Christian symbols that make the sword important are carried.',
      creator: 'Unknown; archival photograph',
      date: '12th–13th century (object)',
      source: 'Wawel Royal Castle, Kraków / Wikimedia Commons',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Szczerbiec_Polish_coronation_sword.jpg',
      note: 'The actual surviving object. An older monochrome plate showing the hilt rather than the whole sword, used because the inscriptions on the pommel, grip and cross-guard are the object\'s substance and are legible here. Public domain.'
    },
    specs: { note: 'Dating is debated within the 12th and 13th centuries; the blade is not thought to be original to the hilt.', rows: [
      { label: 'Date', value: 'Late 12th or 13th century' },
      { label: 'Hilt', value: 'Gold plates over the pommel, grip and cross-guard' },
      { label: 'Decoration', value: 'Latin inscriptions, evangelist symbols, niello and enamel' },
      { label: 'Blade', value: 'Not believed original to the hilt' },
      { label: 'Ceremonial use', value: 'Polish coronations from 1320 to 1764' },
      { label: 'Name', value: 'Szczerbiec — "the notched sword"' },
      { label: 'Location', value: 'Wawel Royal Castle, Kraków' },
      { label: 'Status', value: 'The only surviving piece of the medieval Polish crown jewels' }
    ] },
    summary: 'Szczerbiec is the coronation sword of the Polish monarchy and the only piece of the medieval Polish crown jewels to survive.',
    details: 'Its gold hilt carries Latin inscriptions and evangelist symbols. Its legend — that it was notched on the gate of Kyiv in 1018 — is impossible, since the sword is at least a century and a half younger.',
    knownFor: [
      'The coronation sword of Poland, used from 1320 to 1764.',
      'The only surviving piece of the medieval Polish crown jewels.',
      'A gold hilt covered in Latin inscriptions, evangelist symbols and niello.',
      'A famous legend about a notch, contradicted by the sword\'s own date.'
    ],
    contentSections: [
      S('Overview',
        'Szczerbiec is the coronation sword of the Polish monarchy, kept at Wawel Royal Castle in Kraków, and the only object from the medieval Polish crown jewels to survive at all.',
        'It is a sword of the twelfth or thirteenth century whose hilt is covered in gold plates worked with Latin inscriptions, the symbols of the evangelists and Christian ornament.',
        'The name means "the notched sword", and the notch is the beginning of a story the object itself refuses to support.'),
      S('Date and provenance',
        'The sword is dated to the late twelfth or the thirteenth century, with scholars differing within that range on the evidence of its ornament, script and technique.',
        'Its documented ceremonial career begins in 1320, with the coronation of Władysław the Elbow-high, and it was used in Polish coronations for more than four centuries until 1764.',
        'Its modern history is turbulent even by regalia standards: seized in 1795 at the partitions, passed through private and Russian hands across the nineteenth century, returned to Poland in 1928, evacuated to Canada in 1939 and finally brought home in 1959.'),
      S('Construction',
        'The hilt is the object. Gold plates sheathe the disc pommel, the grip and the arms of the cross-guard, decorated with niello and enamel and covered with inscriptions.',
        'Those inscriptions are Latin invocations and magical-devotional formulae, and the evangelist symbols appear among them — the sword is as much an object of religious power as of rule.',
        'The blade is not thought to be original to the hilt. Regalia are repaired and remounted, and here the gold furniture is the historic element while the blade beneath it is a later companion.'),
      S('Attribution and reliability',
        'The legend holds that Bolesław I struck the Golden Gate of Kyiv with the sword in 1018 and notched it, and that the name records the blow.',
        'This cannot be true of this object. The sword is at least a century and a half younger than 1018, so whatever Bolesław may have done, he did not do it with this.',
        'The legend is nonetheless historically important, because it was believed. Attaching an eleventh-century conquest to the sword used to crown later kings made a claim about continuity, and that claim is part of why the object was preserved.'),
      S('Historical context',
        'A coronation sword is an instrument of legitimacy, and in an elective monarchy that mattered a great deal: whoever was crowned with Szczerbiec was king in a way a rival was not.',
        'Its long use from 1320 to 1764 spans the Piast, Jagiellonian and elective periods, so the same object passed through every phase of Polish kingship.',
        'Its survival through the partitions, when the rest of the regalia was destroyed or dispersed, turned it from a ceremonial object into a national one.'),
      S('The surviving object today',
        'It is displayed at Wawel Royal Castle in Kraków among the crown treasury holdings, and is among the most significant medieval objects in Poland.',
        'It has been studied intensively, including technical analysis of the gold work and the inscriptions, and remains the subject of active scholarly disagreement over its exact date and origin.',
        'The blade and hilt are shown together as they now exist, with the composite nature of the assembly acknowledged rather than disguised.'),
      S('Significance',
        'It is the outstanding surviving European coronation sword after Joyeuse and the Imperial Sword, and the one whose decoration is most densely inscribed.',
        'It also illustrates the pattern this archive meets repeatedly: an object of genuine importance carrying a legend it cannot support, where both the object and the legend are worth taking seriously as history.',
        'That it survived at all — the single remnant of a destroyed regalia, recovered from exile twice in one century — is much of why it means what it does in Poland.')
    ],
    relatedEntries: {
      locations: [{ title: 'Kingdom of Poland', type: 'location', slug: 'kingdom-of-poland', label: 'The realm it crowned' }],
      weaponsArmor: [
        { title: 'Imperial Sword (Reichsschwert)', type: 'weaponArmor', slug: 'reichsschwert', label: 'The imperial counterpart' },
        { title: 'Joyeuse', type: 'weaponArmor', slug: 'joyeuse', label: 'The French coronation sword' },
        { title: 'Arming Sword', type: 'weaponArmor', slug: 'arming-sword', label: 'The type its blade belongs to' },
        { title: "William Wallace's Sword", type: 'weaponArmor', slug: 'wallace-sword', label: 'Another national sword whose legend outruns its date' }
      ]
    },
    sources: [
      { title: 'Wawel Royal Castle — crown treasury', url: 'https://wawel.krakow.pl/en', type: 'museum collection', institution: 'Wawel Royal Castle' },
      { title: 'Szczerbiec photograph', url: 'https://commons.wikimedia.org/wiki/File:Szczerbiec_Polish_coronation_sword.jpg', type: 'image source', institution: 'Wikimedia Commons' },
      { title: 'Kunsthistorisches Museum Wien — comparative regalia', url: 'https://www.khm.at/en/', type: 'museum collection', institution: 'Kunsthistorisches Museum' }
    ]
  },

  {
    id: 'pembridge-helm',
    name: 'Pembridge Helm',
    type: 'weaponArmor', weaponArmorType: 'Famous armor',
    aliases: ['Pembridge helmet', 'Pembrugge helm'],
    year: 1360, period: 'Late Middle Ages', region: 'England',
    material: 'Iron',
    battlefieldRole: 'One of very few surviving English great helms',
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Pembridge%20Helm.JPG',
    imageInfo: {
      caption: 'The Pembridge Helm, a great helm of about the third quarter of the fourteenth century, associated with Sir Richard Pembridge.',
      creator: 'Photograph via Wikimedia Commons',
      date: 'c. 1350–1375 (object)',
      source: 'National Museums Scotland / Wikimedia Commons',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Pembridge_Helm.JPG',
      note: 'The actual surviving object, photographed on display against a coloured backdrop which tints the iron. Released CC0.'
    },
    specs: { note: 'One of a handful of surviving English great helms, and the best known of them.', rows: [
      { label: 'Date', value: 'c. 1350–1375' },
      { label: 'Form', value: 'Great helm, fully enclosing, resting on the shoulders' },
      { label: 'Construction', value: 'Riveted iron plates' },
      { label: 'Associated with', value: 'Sir Richard Pembridge, died 1375' },
      { label: 'Original setting', value: 'Hung above his tomb in Hereford Cathedral' },
      { label: 'Acquired', value: 'Passed into Scottish national collections in the 19th century' },
      { label: 'Collection', value: 'National Museums Scotland' },
      { label: 'Comparable', value: 'The Prankh helm; very few others survive' }
    ] },
    summary: 'The Pembridge Helm is one of the very few surviving English great helms, associated with Sir Richard Pembridge and formerly hung above his tomb at Hereford.',
    details: 'It is a late great helm, made when the bascinet had already taken over on the battlefield, and it survives for the same reason as the Prankh helm — it was hung in a church and left alone.',
    knownFor: [
      'One of only a handful of surviving English great helms.',
      'Hung for centuries above Sir Richard Pembridge\'s tomb in Hereford Cathedral.',
      'A late example, made when the bascinet had already displaced the type in war.',
      'Preserved by being taken out of use, like almost all surviving medieval helms.'
    ],
    contentSections: [
      S('Overview',
        'The Pembridge Helm is a great helm of about the third quarter of the fourteenth century, and one of the very few English examples of the type to survive at all.',
        'It is associated with Sir Richard Pembridge, a knight of Edward III\'s reign who died in 1375, and it hung for centuries above his tomb in Hereford Cathedral.',
        'It is now in the national collections in Scotland, having left Hereford in the nineteenth century.'),
      S('Date and provenance',
        'The helm is dated to roughly 1350 to 1375 on its form, which makes it contemporary with Pembridge himself and with the last decades in which great helms were made.',
        'Its documented setting is funerary. Like the Prankh helm and the Black Prince\'s achievements, it belongs to the tradition of hanging a dead knight\'s arms above his tomb, and that is why it survived.',
        'It passed out of the cathedral in the nineteenth century, when such objects were being collected, and entered the Scottish national collections where it remains.'),
      S('Construction',
        'It is a fully enclosing helm of riveted iron plates, covering the whole head and resting on the shoulders rather than sitting on the skull, with a vision slit and breathing holes.',
        'By this date the form had become tall and shaped rather than the simple cylinder of a century earlier, and the Pembridge helm shows that developed profile.',
        'It carries no crest today, unlike the Prankh helm, and whether one was ever fitted to it is not established.'),
      S('Historical context',
        'By the 1360s the great helm was no longer the fighting helmet of choice. The bascinet with an aventail had taken over in war, being lighter, better ventilated and far better for seeing.',
        'What kept the great helm alive was the tournament and ceremony, where its enclosure and its capacity to carry a crest still mattered, and where being recognisable was the point.',
        'A helm of this date is therefore likely to be tournament and display equipment as much as battlefield gear, which is a caution to apply to Pembridge as to Prankh.'),
      S('Attribution and reliability',
        'The association with Pembridge rests on its presence above his tomb, which is good evidence for whose achievement it was but not proof that he wore it in war.',
        'A funerary achievement can be a man\'s own equipment or a piece made for the funeral, and the distinction is frequently impossible to settle.',
        'What is secure is the date, the type and the English origin — which is what makes the object valuable, since English great helms are otherwise almost unknown.'),
      S('The surviving object today',
        'It is held by National Museums Scotland and displayed there, and its condition is good for an object of its age and history.',
        'A replica hangs at Hereford in place of the original, which is the usual modern arrangement for funerary achievements.',
        'Its removal from the cathedral is itself part of the object\'s story, and a reminder of how nineteenth-century collecting redistributed medieval material.'),
      S('Significance',
        'It is one of the primary objects for the study of the great helm, simply because so few survive: the type is abundantly illustrated and almost never preserved.',
        'It also documents the end of the form. A helm made in the 1360s is a late one, and its existence shows the type persisting in ceremonial use after it had lost the battlefield.',
        'With the Prankh helm it makes the pattern plain: the great helms we have survive because they were hung in churches, not because they were used well.')
    ],
    relatedEntries: { weaponsArmor: [
      { title: 'Great Helm', type: 'weaponArmor', slug: 'great-helm', label: 'The type it is a rare survival of' },
      { title: 'Great Helm of Albert von Prankh', type: 'weaponArmor', slug: 'prankh-great-helm', label: 'The continental counterpart, with its crest' },
      { title: 'Bascinet', type: 'weaponArmor', slug: 'bascinet', label: 'The helmet displacing it in war by this date' },
      { title: 'Heater Shield', type: 'weaponArmor', slug: 'heater-shield', label: 'The other surface of the same heraldic system' },
      { title: 'Mail Coif', type: 'weaponArmor', slug: 'mail-coif', label: 'Worn beneath a great helm' }
    ] },
    sources: [
      { title: 'National Museums Scotland', url: 'https://www.nms.ac.uk/', type: 'museum collection', institution: 'National Museums Scotland' },
      { title: 'Pembridge Helm photograph', url: 'https://commons.wikimedia.org/wiki/File:Pembridge_Helm.JPG', type: 'image source', institution: 'Wikimedia Commons' },
      { title: 'Royal Armouries — helmets collection', url: 'https://royalarmouries.org/collection/', type: 'museum collection', institution: 'Royal Armouries' }
    ]
  },

  {
    id: 'avant-armour',
    name: 'Avant Armour',
    type: 'weaponArmor', weaponArmorType: 'Famous armor',
    aliases: ['Avant harness', 'Glasgow Avant armour'],
    year: 1445, period: 'Late Middle Ages', region: 'Milan',
    material: 'Steel',
    battlefieldRole: 'One of the earliest substantially complete European plate armours',
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Avant%20armour%20upper%20section.JPG',
    imageInfo: {
      caption: 'The Avant armour, a Milanese harness of about 1440, displayed at Kelvingrove in Glasgow.',
      creator: 'Photograph via Wikimedia Commons',
      date: 'c. 1440–1450 (object)',
      source: 'Kelvingrove Art Gallery and Museum, Glasgow / Wikimedia Commons',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Avant_armour_upper_section.JPG',
      note: 'The actual surviving harness, photographed in its display case, so there are reflections from the gallery windows. Licensed CC BY-SA 4.0.'
    },
    specs: { note: 'One of the earliest substantially complete European armours; some elements are restorations.', rows: [
      { label: 'Date', value: 'c. 1440–1450' },
      { label: 'Origin', value: 'Milan' },
      { label: 'Style', value: 'Italian — smooth, rounded, asymmetric' },
      { label: 'Name', value: 'From the word AVANT struck on the armour' },
      { label: 'Attribution', value: 'Milanese workshop, on armourers\' marks' },
      { label: 'Completeness', value: 'Substantially complete, with restored elements' },
      { label: 'Collection', value: 'Kelvingrove Art Gallery and Museum, Glasgow' },
      { label: 'Significance', value: 'A reference object for 15th-century Milanese armour' }
    ] },
    summary: 'The Avant armour is a Milanese harness of about 1440 and one of the earliest substantially complete European plate armours to survive.',
    details: 'It takes its name from the word AVANT struck on it, and it is a primary reference for what a mid-fifteenth-century Italian harness actually was.',
    knownFor: [
      'One of the earliest substantially complete European plate armours in existence.',
      'Named from the word AVANT struck on the armour itself.',
      'Milanese work of about 1440, in the smooth rounded Italian style.',
      'A reference object against which other fifteenth-century harnesses are dated.'
    ],
    contentSections: [
      S('Overview',
        'The Avant armour is an Italian plate harness of about 1440, made in Milan, and among the earliest substantially complete European armours anywhere.',
        'That completeness is what makes it matter. Fifteenth-century armour survives overwhelmingly as loose pieces, and a harness that hangs together as one object of one date is a rarity.',
        'It takes its name from the word AVANT struck into the metal — a motto or war cry rather than a maker\'s name.'),
      S('Date and provenance',
        'It is dated to roughly 1440 to 1450 on style and on armourers\' marks, and attributed to a Milanese workshop of the period when Milan was arming much of Europe.',
        'Its earlier ownership history is not fully traced, which is common for armour that passed through the nineteenth-century collecting market before entering a public museum.',
        'It is now at Kelvingrove Art Gallery and Museum in Glasgow, among the most important medieval objects in Scotland.'),
      S('Construction',
        'It is Italian in every respect: smooth rounded surfaces without fluting, shaped to deflect by curvature, and asymmetric — the left side heavier, because that is the side presented to an opponent.',
        'The harness includes the helmet, cuirass, arm and leg defences articulated by overlapping lames on internal leathers, and it shows the mature Milanese solution to covering a moving body.',
        'Some elements are restorations. Almost every displayed armour of this age includes replaced or reassembled parts, and a complete-looking harness should always prompt the question of which pieces belong.'),
      S('Historical context',
        'Milan in the middle of the fifteenth century was the centre of European armour production, exporting complete harnesses across the continent on a genuinely industrial scale.',
        'A harness of this quality was equipment for a man-at-arms of substantial means, at the point when plate armour had reached its functional peak and before firearms began to change the calculation.',
        'It belongs to the same world as the Churburg harnesses in South Tyrol, which are the other principal group of surviving Italian armour of the period.'),
      S('Attribution and reliability',
        'The Milanese attribution rests on armourers\' marks and on style, both of which are reasonably firm, and the date is broadly agreed.',
        'What should not be assumed is that the harness as displayed is exactly as it left the workshop. Restoration and reassembly are part of its history and are documented rather than hidden.',
        'The AVANT inscription gives the armour its name but not its owner. It is a motto, and it does not identify the man it was made for.'),
      S('The surviving object today',
        'It is displayed at Kelvingrove in Glasgow, mounted as a complete harness, and is one of the museum\'s best-known objects.',
        'It has been studied and published as a reference piece, and other harnesses and loose components are routinely dated by comparison with it.',
        'Being on open display in a case rather than in a study collection, it is unusually accessible for an object of its importance.'),
      S('Significance',
        'It is a benchmark. When so much fifteenth-century armour survives as isolated pieces, a coherent harness of known date and origin is what everything else gets measured against.',
        'It also shows the Italian tradition at its height, and reads directly against the German Gothic style — smooth against fluted, rounded against pointed, deflecting by curve against deflecting by ridge.',
        'For the archive it is the object that makes the plate-armour article concrete: the thing itself, rather than a description of a type.')
    ],
    relatedEntries: { weaponsArmor: [
      { title: 'Plate Armor', type: 'weaponArmor', slug: 'plate-armor', label: 'The type it is the outstanding early survival of' },
      { title: 'Gothic Plate Armor', type: 'weaponArmor', slug: 'gothic-plate-armor', label: 'The German tradition to read it against' },
      { title: 'Breastplate', type: 'weaponArmor', slug: 'breastplate', label: 'The Italian globose form it carries' },
      { title: 'Arm Harness', type: 'weaponArmor', slug: 'arm-harness', label: 'Its articulated arms, complete and in place' },
      { title: 'Leg Harness', type: 'weaponArmor', slug: 'leg-harness', label: 'Its leg defences, likewise' },
      { title: 'Armet', type: 'weaponArmor', slug: 'armet', label: 'The Italian helmet of the same decades' }
    ] },
    sources: [
      { title: 'Glasgow Museums — Kelvingrove Art Gallery and Museum', url: 'https://www.glasgowlife.org.uk/museums/venues/kelvingrove-art-gallery-and-museum', type: 'museum collection', institution: 'Glasgow Museums' },
      { title: 'Avant armour photograph', url: 'https://commons.wikimedia.org/wiki/File:Avant_armour_upper_section.JPG', type: 'image source', institution: 'Wikimedia Commons' },
      { title: 'Wallace Collection — European Armoury', url: 'https://www.wallacecollection.org/', type: 'museum collection', institution: 'Wallace Collection' }
    ]
  },

  {
    id: 'black-prince-achievements',
    name: 'Achievements of the Black Prince',
    type: 'weaponArmor', weaponArmorType: 'Famous armor',
    aliases: ['Black Prince achievements', 'Canterbury achievements'],
    year: 1376, period: 'Late Middle Ages', region: 'England',
    material: 'Iron, wood, leather, velvet and embroidered textile',
    battlefieldRole: 'Funerary achievements hung above a royal tomb',
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Black%20Prince%20Heraldic%20Achievements%20%28cropped%29.JPG',
    imageInfo: {
      caption: 'The surviving achievements of the Black Prince at Canterbury Cathedral: the crested helm, the jupon, the shield and the gauntlets.',
      creator: 'Photograph via Wikimedia Commons',
      date: '14th century (objects)',
      source: 'Canterbury Cathedral / Wikimedia Commons',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Black_Prince_Heraldic_Achievements_(cropped).JPG',
      note: 'The actual surviving objects, photographed through their display case, so reflections are visible. Replicas now hang above the tomb itself. Licensed CC BY-SA 4.0.'
    },
    specs: { note: 'The most complete surviving set of medieval funerary achievements in England.', rows: [
      { label: 'Date', value: '14th century; the prince died in 1376' },
      { label: 'Surviving pieces', value: 'Helm with crest, jupon, shield, gauntlets, scabbard' },
      { label: 'Missing', value: 'The sword' },
      { label: 'Crest', value: 'A lion or leopard, on a chapeau' },
      { label: 'Jupon', value: 'A padded and embroidered garment bearing the royal arms' },
      { label: 'Original setting', value: 'Hung above the tomb in Canterbury Cathedral' },
      { label: 'Now', value: 'Displayed in the cathedral; replicas hang over the tomb' },
      { label: 'Removed from the tomb', value: 'In the twentieth century, for conservation' }
    ] },
    summary: 'The achievements of Edward the Black Prince — helm, crest, jupon, shield and gauntlets — hung above his tomb at Canterbury and survive as the most complete such set in England.',
    details: 'They are the single best surviving illustration of what heraldic display looked like as physical objects, and they must not be assumed to be his battlefield equipment.',
    knownFor: [
      'The most complete set of medieval funerary achievements surviving in England.',
      'A crested helm, a jupon bearing the royal arms, a shield and gilt gauntlets.',
      'The sword is missing, and has been since at least the seventeenth century.',
      'Replicas now hang above the tomb; the originals were taken down for conservation.'
    ],
    contentSections: [
      S('Overview',
        'Edward of Woodstock, the Black Prince, died in 1376 and was buried in Canterbury Cathedral, and his funeral achievements were hung above the tomb.',
        'They survive: a helm with its crest, a jupon bearing the royal arms, a shield, gauntlets and a scabbard. The sword is gone.',
        'As a group they are the most complete set of medieval funerary achievements in England and one of the most important survivals of heraldic material anywhere.'),
      S('Date and provenance',
        'The objects belong to the fourteenth century and to the prince\'s own lifetime or funeral, and their provenance is exceptionally secure: they have been at Canterbury, above the tomb, since 1376.',
        'That continuity is what makes them valuable. Almost no medieval textile or crest survives, and these did because they hung high in a cathedral and nobody disturbed them.',
        'They were taken down in the twentieth century for conservation, and replicas were made to hang in their place. The originals are displayed in the cathedral under controlled conditions.'),
      S('The surviving objects',
        'The helm is a great helm carrying a crest — a lion or leopard on a chapeau — and it is one of the very few medieval crests in existence, in the same rare class as the Prankh helm.',
        'The jupon is the outstanding piece: a padded, quilted and embroidered garment bearing the royal arms of England quartered with France, and it is one of very few surviving medieval heraldic garments.',
        'The shield, the gilt gauntlets and the scabbard complete the group. The sword itself has been missing since at least the seventeenth century, and the tradition that Cromwell took it is repeated more often than it is evidenced.'),
      S('Attribution and reliability',
        'The attribution to the Black Prince is as secure as such things get: the objects have hung above his tomb, in a documented cathedral, continuously since his funeral.',
        'What must not be assumed is that they are his battlefield equipment. A funerary achievement may be a man\'s own arms or may be made for the funeral, and for the textile pieces in particular the question is genuinely open.',
        'The jupon is the clearest case. It is a real, wearable garment of high quality, but whether it was worn in war, worn ceremonially, or made for the tomb cannot be settled from the object.'),
      S('Historical context',
        'The Black Prince was the outstanding English commander of his generation, victor at Poitiers in 1356 and a central figure of the Hundred Years\' War, and he died before his father, so he never reigned.',
        'The achievements belong to a widespread practice: a dead knight\'s arms hung above his tomb, a permanent statement of who he had been and what he had been entitled to display.',
        'That the practice preserved so little elsewhere makes this survival disproportionately important, and it is why the Prankh helm and the Pembridge helm keep appearing alongside it.'),
      S('The surviving objects today',
        'They are displayed within Canterbury Cathedral, conserved and protected, while modern replicas occupy their original position above the tomb.',
        'The substitution is standard practice and honest — the objects could not survive continued exposure — but it does mean a visitor to the tomb is looking at copies.',
        'The originals have been extensively studied, particularly the jupon, whose construction is a rare direct source for how such a garment was actually made.'),
      S('Significance',
        'They are the best surviving answer to what heraldry looked like as physical objects rather than as painted devices, and the jupon is close to unique as a surviving armorial garment.',
        'They also demonstrate why funerary achievements matter so much to arms history: the objects that survive are overwhelmingly the ones taken out of use, and hanging something in a church is the most effective preservation medieval Europe managed.',
        'For the archive they anchor several articles at once — the great helm, the surcoat and jupon, the heater shield and the gauntlet — in a single, securely provenanced group.')
    ],
    relatedEntries: {
      people: [{ title: 'Edward the Black Prince', type: 'person', slug: 'edward-the-black-prince', label: 'Whose achievements they are' }],
      weaponsArmor: [
        { title: 'Surcoat', type: 'weaponArmor', slug: 'surcoat', label: 'The jupon is the outstanding surviving example' },
        { title: 'Great Helm', type: 'weaponArmor', slug: 'great-helm', label: 'The crested helm of the group' },
        { title: 'Great Helm of Albert von Prankh', type: 'weaponArmor', slug: 'prankh-great-helm', label: 'The other surviving crest' },
        { title: 'Heater Shield', type: 'weaponArmor', slug: 'heater-shield', label: 'The shield of the group' },
        { title: 'Gauntlet', type: 'weaponArmor', slug: 'gauntlet', label: 'The gilt gauntlets of the group' },
        { title: 'Pembridge Helm', type: 'weaponArmor', slug: 'pembridge-helm', label: 'Another English funerary helm' }
      ]
    },
    sources: [
      { title: 'Canterbury Cathedral — the Black Prince', url: 'https://www.canterbury-cathedral.org/', type: 'museum collection', institution: 'Canterbury Cathedral' },
      { title: 'Black Prince achievements photograph', url: 'https://commons.wikimedia.org/wiki/File:Black_Prince_Heraldic_Achievements_(cropped).JPG', type: 'image source', institution: 'Wikimedia Commons' },
      { title: 'Royal Armouries — arms and armour collection', url: 'https://royalarmouries.org/collection/', type: 'museum collection', institution: 'Royal Armouries' }
    ]
  }
]

let n = 0
for (const article of articles) {
  if (data.weaponsArmor.some((x) => x.id === article.id)) throw new Error(`already exists: ${article.id}`)
  data.weaponsArmor.push(article)
  console.log(`+ ${article.id.padEnd(26)} ${article.contentSections.length} sections, ${article.contentSections.flatMap((s) => s.paragraphs).join(' ').length} chars`)
  n++
}

const get = (id) => {
  const e = data.weaponsArmor.find((x) => x.id === id)
  if (!e) throw new Error(`missing: ${id}`)
  return e
}
// Generic -> surviving example, and the person -> object reciprocity the new rule demands.
const backLinks = {
  'great-helm': [{ title: 'Pembridge Helm', slug: 'pembridge-helm', label: 'Surviving example — one of very few English great helms' }],
  'plate-armor': [{ title: 'Avant Armour', slug: 'avant-armour', label: 'Surviving example — among the earliest complete harnesses' }],
  surcoat: [{ title: 'Achievements of the Black Prince', slug: 'black-prince-achievements', label: 'Surviving example — the jupon at Canterbury' }],
  'heater-shield': [{ title: 'Achievements of the Black Prince', slug: 'black-prince-achievements', label: 'Surviving example — the shield at Canterbury' }],
  'nasal-helmet': [{ title: 'Helmet of St Wenceslas', slug: 'st-wenceslas-helmet', label: 'Surviving example — a 10th-century helmet with a Crucifixion nasal' }],
  'arming-sword': [
    { title: 'Imperial Sword (Reichsschwert)', slug: 'reichsschwert', label: 'Surviving example — the imperial coronation sword' },
    { title: 'Szczerbiec', slug: 'szczerbiec', label: 'Surviving example — the Polish coronation sword' }
  ],
  joyeuse: [
    { title: 'Imperial Sword (Reichsschwert)', slug: 'reichsschwert', label: 'The imperial counterpart' },
    { title: 'Szczerbiec', slug: 'szczerbiec', label: 'The Polish counterpart' }
  ],
  'prankh-great-helm': [
    { title: 'Pembridge Helm', slug: 'pembridge-helm', label: 'The English counterpart' },
    { title: 'Achievements of the Black Prince', slug: 'black-prince-achievements', label: 'The other surviving crest' }
  ]
}
for (const [id, entries] of Object.entries(backLinks)) {
  ;(get(id).relatedEntries.weaponsArmor ??= []).push(...entries.map((e) => ({ ...e, type: 'weaponArmor' })))
  console.log(`  back-link ${id} -> ${entries.map((e) => e.slug).join(', ')}`)
}

// Person -> object, required by the reciprocity rule added this session.
const prince = data.characters.find((c) => c.id === 'edward-the-black-prince')
if (!prince) throw new Error('missing edward-the-black-prince')
;(prince.relatedEntries.weaponsArmor ??= []).push({
  title: 'Achievements of the Black Prince', type: 'weaponArmor', slug: 'black-prince-achievements',
  label: 'His funeral achievements, surviving at Canterbury'
})
console.log('  back-link characters/edward-the-black-prince -> black-prince-achievements')

writeFileSync(dataPath, JSON.stringify(data, null, 2))
console.log(`\n${n} artifacts added; weaponsArmor now ${data.weaponsArmor.length}`)
