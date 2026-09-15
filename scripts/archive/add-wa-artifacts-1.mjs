/**
 * TRACK D, batch 1 — unique surviving artifacts.
 *
 * Audit first, as the brief required. No duplicates: the archive held exactly
 * three unique artifacts (Joyeuse, the Sutton Hoo helmet, the Ulfberht group) and
 * none of the thirteen priority objects existed under any name or alias.
 *
 * These do NOT use the generic-type template. The structure is Overview, Date and
 * provenance, Construction, Historical context, Attribution and reliability, The
 * surviving object today, Significance — because the reader's question about a
 * specific object is different from their question about a form.
 *
 * All four images are real photographs of the actual objects, per the brief's ban
 * on generated imagery where the object survives. The Gjermundbu photograph was
 * checked against its Commons description before use, because the credit names
 * NTNU in Trondheim while the helmet is in Oslo — the description confirms the
 * Museum of Cultural History object rather than a replica.
 *
 * Attribution discipline: the Wallace sword is NOT presented as his battlefield
 * weapon. Its documented history begins in 1505, two centuries after his death,
 * and the article says so in its own section rather than in a footnote.
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
    id: 'wallace-sword',
    name: "William Wallace's Sword",
    type: 'weaponArmor',
    weaponArmorType: 'Famous weapon',
    aliases: ['Wallace Sword', 'the Wallace sword'],
    year: 1505,
    period: 'Late Middle Ages',
    region: 'Scotland',
    material: 'Steel blade with later hilt, pommel and grip',
    battlefieldRole: 'National relic; a two-handed sword of disputed date',
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Wallace%20sword.jpg',
    imageInfo: {
      caption: 'The Wallace Sword displayed at the National Wallace Monument, Stirling, photographed in its case.',
      creator: 'Photograph by Glenn J. Mason',
      date: 'object of disputed date; photograph 2006',
      source: 'National Wallace Monument, Stirling / Wikimedia Commons',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Wallace_sword.jpg',
      note: 'The actual surviving object, shown complete in its display case. The hilt, pommel and grip are not medieval — they are replacements, the sword having been re-hilted in 1505 and again in the nineteenth century. Licensed CC BY 2.0.'
    },
    specs: {
      note: 'Dimensions as commonly published by the National Wallace Monument. The date of the blade is disputed and the hilt furniture is demonstrably later.',
      rows: [
        { label: 'Overall length', value: 'c. 163 cm' },
        { label: 'Blade length', value: 'c. 132 cm' },
        { label: 'Weight', value: 'c. 2.7 kg' },
        { label: 'Grip', value: 'Two-handed' },
        { label: 'Hilt, pommel, grip', value: 'Later replacements, not medieval' },
        { label: 'First documented', value: '1505, in the accounts of James IV' },
        { label: 'Kept at', value: 'Dumbarton Castle for centuries' },
        { label: 'Now at', value: 'National Wallace Monument, Stirling' }
      ]
    },
    summary: 'A two-handed sword kept as the sword of William Wallace, at the National Wallace Monument in Stirling. Its documented history begins two centuries after his death.',
    details: 'The object is real and its career as a national relic is well recorded. What cannot be shown is that Wallace carried it, and the article keeps those two things apart.',
    knownFor: [
      'Scotland\'s most famous sword, and one whose attribution cannot be demonstrated.',
      'First securely documented in 1505, when James IV paid to have it re-hilted at Dumbarton Castle.',
      'The hilt, pommel and grip are replacements; only the blade may be old.',
      'A case study in how a tradition can become historically important in its own right.'
    ],
    contentSections: [
      S('Overview',
        'The Wallace Sword is a large two-handed sword displayed at the National Wallace Monument above Stirling, kept and shown for centuries as the sword of William Wallace.',
        'It is a genuine historical object with a long and well-documented career as a national relic. What it is not — or at least what cannot be shown — is Wallace\'s personal battlefield weapon.',
        'That distinction is the whole interest of the object, and the article keeps it in view throughout rather than burying it at the end.'),
      S('Date and provenance',
        'The sword\'s documented history begins in 1505, in the accounts of James IV, which record payment for binding the sword with silken cords and fitting it with a new hilt, pommel, scabbard and belt. It was then at Dumbarton Castle.',
        'William Wallace was executed in 1305. The first record of the sword therefore comes two hundred years after the man it is named for, and nothing survives to connect the object to him across that gap.',
        'It remained at Dumbarton Castle for centuries and was transferred to the newly built National Wallace Monument in the later nineteenth century, where it has been displayed since.'),
      S('Construction',
        'It is a large two-handed sword, published at around 163 centimetres overall with a blade of about 132 and a weight near 2.7 kilograms — substantial, but well within the range of real two-handed swords rather than the impossible object of legend.',
        'The hilt, pommel and grip are not medieval. They were replaced in 1505 on James IV\'s order and again in the nineteenth century, so the furniture a visitor sees today is Victorian work on an older blade.',
        'The blade itself is the open question. It has been argued to be composite — assembled from more than one blade — and its form has been read as belonging to a later period than 1300, since two-handed swords of this kind are more characteristic of the fifteenth and sixteenth centuries than of Wallace\'s lifetime.'),
      S('Attribution and reliability',
        'The traditional attribution should not be repeated as fact, and this article does not repeat it. There is no documentary chain from Wallace to the sword, the earliest record postdates his death by two centuries, and the weapon\'s form is difficult to reconcile with Scottish practice around 1300.',
        'Nor is the sword a fake in any useful sense. It was believed to be Wallace\'s in 1505, treated as a relic of the realm by a king who paid to have it refurbished, and kept in royal custody for generations. Its career as a national object is fully historical.',
        'The honest summary is therefore two statements held together: this is an important surviving object with a documented history from 1505, and it cannot be shown to have belonged to William Wallace.'),
      S('Historical context',
        'Wallace emerged in the rising of 1297 and, with Andrew Moray, destroyed an English army at the Battle of Stirling Bridge in September of that year, within sight of where the sword is now displayed.',
        'His defeat at Falkirk in 1298 ended his brief guardianship of Scotland, and after years as a fugitive he was taken in 1305, tried in Westminster Hall and executed.',
        'The sword\'s later history belongs to a different story: the making of Wallace as a national figure, in which physical relics mattered because they made an increasingly legendary man tangible.'),
      S('The surviving object today',
        'It is displayed at the National Wallace Monument in Stirling, in a case in the Hall of Heroes, and is among the most visited objects in Scotland.',
        'The sword was stolen in 1936 and recovered, and has been conserved several times, which adds further layers between the surviving blade and whatever it originally was.',
        'It is shown as a relic rather than as a dated arms-and-armour specimen, and the monument\'s own presentation of it has become part of its history.'),
      S('Significance',
        'Its importance is not as evidence for medieval Scottish swords, where its uncertain date makes it a poor witness, but as evidence for how nations make and keep relics.',
        'It also illustrates a pattern this archive meets repeatedly: an object venerated for centuries under an attribution that the object itself cannot support, from Joyeuse to the helmet of Saint Wenceslas.',
        'Handled honestly, the uncertainty makes the sword more interesting rather than less. A blade of debated date, re-hilted by a king who believed it was Wallace\'s, is a better historical document than a securely provenanced weapon would be.')
    ],
    relatedEntries: {
      people: [
        { title: 'William Wallace', type: 'person', slug: 'william-wallace', label: 'The man the sword is named for' }
      ],
      events: [
        { title: 'Battle of Stirling Bridge', type: 'event', slug: 'battle-of-stirling-bridge', label: 'Fought within sight of where the sword now stands' }
      ],
      locations: [
        { title: 'Kingdom of Scotland', type: 'location', slug: 'kingdom-of-scotland', label: 'The realm that kept it as a relic' }
      ],
      weaponsArmor: [
        { title: 'Longsword', type: 'weaponArmor', slug: 'longsword', label: 'The two-handed type it belongs to' },
        { title: 'Joyeuse', type: 'weaponArmor', slug: 'joyeuse', label: 'Another sword whose attribution outran its evidence' },
        { title: 'Arming Sword', type: 'weaponArmor', slug: 'arming-sword', label: 'What a Scot of Wallace\'s day more probably carried' }
      ]
    },
    sources: [
      { title: 'The Wallace Sword, National Wallace Monument', url: 'https://www.nationalwallacemonument.com/', type: 'museum collection', institution: 'National Wallace Monument, Stirling' },
      { title: 'Wallace Sword photograph', url: 'https://commons.wikimedia.org/wiki/File:Wallace_sword.jpg', type: 'image source', institution: 'Wikimedia Commons' },
      { title: 'National Museums Scotland — arms and armour', url: 'https://www.nms.ac.uk/', type: 'museum collection', institution: 'National Museums Scotland' }
    ]
  },

  {
    id: 'gjermundbu-helmet',
    name: 'Gjermundbu Helmet',
    type: 'weaponArmor',
    weaponArmorType: 'Famous armor',
    aliases: ['Gjermundbu helm', 'the Viking helmet'],
    year: 970,
    period: 'Viking Age',
    region: 'Norway',
    material: 'Iron',
    battlefieldRole: 'The only reasonably complete Viking-age helmet known',
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Hjelm%20av%20jern%20fra%20vikingtid%20fra%20Gjermundbu.jpg',
    imageInfo: {
      caption: 'The Gjermundbu helmet, reassembled from fragments, showing its four-plate construction and the iron spectacle guard over the eyes.',
      creator: 'Photograph shared by NTNU Vitenskapsmuseet',
      date: '10th century (object)',
      source: 'Museum of Cultural History, University of Oslo / Wikimedia Commons',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Hjelm_av_jern_fra_vikingtid_fra_Gjermundbu.jpg',
      note: 'The actual surviving object, held by the Museum of Cultural History in Oslo. It was recovered in fragments and reassembled, and the gaps between surviving pieces are visible. Licensed CC BY 2.0.'
    },
    specs: {
      note: 'The single most important object for Viking-age head protection, and the only substantially complete one.',
      rows: [
        { label: 'Date', value: '10th century, commonly c. 970' },
        { label: 'Found', value: 'Gjermundbu, Ringerike, Norway, 1943' },
        { label: 'Context', value: 'A cremation burial mound' },
        { label: 'Construction', value: 'Four iron plates on a browband and two crossing bands' },
        { label: 'Face defence', value: 'An iron "spectacle" guard over eyes and nose' },
        { label: 'Condition', value: 'Recovered in fragments; reassembled' },
        { label: 'Collection', value: 'Museum of Cultural History, University of Oslo' },
        { label: 'Comparable finds', value: 'None complete; a second partial helmet came from the same site' }
      ]
    },
    summary: 'The Gjermundbu helmet is the only reasonably complete Viking-age helmet ever found, recovered from a Norwegian burial mound in 1943.',
    details: 'Every reconstruction of a Norse helmet ultimately rests on this one object, which makes both its importance and its limitations unusually large.',
    knownFor: [
      'The only substantially complete Viking-age helmet known anywhere.',
      'An iron spectacle guard shielding the eyes and nose.',
      'Four-plate construction on a browband — a spangenhelm by method, not a one-piece bowl.',
      'The single strongest correction to the myth of the horned Viking helmet.'
    ],
    contentSections: [
      S('Overview',
        'The Gjermundbu helmet is an iron helmet of the tenth century, found in Norway in 1943, and it is the only reasonably complete Viking-age helmet that has ever been recovered.',
        'That is a remarkable statement to be able to make about a period that produced thousands of surviving swords, axes and spearheads. Helmets were rarer, more valuable and less often buried, and almost nothing survives.',
        'Its consequence is that this one object carries the entire evidential weight for what a Norse helmet looked like — which is why it appears in every reconstruction, every museum display and every serious discussion of the subject.'),
      S('Date and provenance',
        'It was found in 1943 at the Gjermundbu farm in Ringerike, north-west of Oslo, during the excavation of a burial mound, and is generally dated to the tenth century.',
        'The burial was a cremation, and the helmet came out of it in fragments alongside a substantial assemblage: mail, weapons, riding equipment and other goods indicating a person of considerable standing.',
        'A second, more fragmentary helmet from the same site has since been identified, which slightly softens the "only one" claim but does not change the picture — no other complete Viking-age helmet is known.'),
      S('Construction',
        'The bowl is built from four iron plates riveted to a browband and to two bands crossing over the crown. This is spangenhelm construction — assembled from segments rather than raised from a single piece — which places it in the same technical tradition as most early medieval European helmets.',
        'Its distinctive feature is the face defence: an iron guard shaped like a pair of spectacles, covering the eyes and the bridge of the nose and leaving the rest of the face open.',
        'There are traces suggesting a mail curtain hung at the neck, and a small spike at the crown. Nothing about it is decorated in the way the Sutton Hoo helmet is; it is a plain, functional object.'),
      S('Attribution and reliability',
        'There is no attribution problem here in the ownership sense — nobody claims to know whose helmet it was — but there is a reconstruction problem worth stating plainly.',
        'It was recovered as fragments and reassembled, so the shape on display is the product of interpretation as well as of survival. The gaps between surviving pieces are visible in the object itself, and the completeness of the crown in particular rests on reconstruction.',
        'That matters because so much rests on this single object. A reconstruction of a Viking helmet is a reconstruction of a reconstruction, and modern replicas that present a crisp, complete Gjermundbu are showing more confidence than the evidence carries.'),
      S('Historical context',
        'The burial belongs to the tenth-century Norwegian elite, and the assemblage — helmet, mail, weapons and riding gear together — describes a mounted warrior of substantial means rather than an ordinary fighter.',
        'That fits what is known from elsewhere. A helmet in this period is a marker of standing: most men in a Norse army fought in a padded garment with a shield and a spear, and any helmet at all put its owner in a small minority.',
        'The spectacle guard connects it to a broader northern and eastern European tradition, and comparable eye guards appear on helmets from the Vendel and Valsgärde cemeteries in Sweden and further east.'),
      S('The surviving object today',
        'It is held by the Museum of Cultural History at the University of Oslo, where it is displayed with the rest of the Gjermundbu assemblage.',
        'Its condition is stable and its incompleteness is visible, which is as it should be: a display that hid the gaps would misrepresent the single most important object in its field.',
        'Replicas of it are everywhere, in museums and in living history, and are usually far cleaner and more complete than the original.'),
      S('Significance',
        'It is the strongest available correction to the horned Viking helmet, which has no archaeological basis whatever and derives from nineteenth-century stage design and romantic art.',
        'It is also a caution about arguing from a single find. One helmet from one grave in one region cannot describe the head protection of the whole Norse world across three centuries, and confident claims about "the Viking helmet" are resting on a sample of one.',
        'Its greatest value may be negative: it tells us that Norse helmets existed, were plain, were built in segments, and were rare — and that almost everything else asserted about them is inference.')
    ],
    relatedEntries: {
      weaponsArmor: [
        { title: 'Spangenhelm', type: 'weaponArmor', slug: 'spangenhelm', label: 'The construction tradition it belongs to' },
        { title: 'Nasal Helmet', type: 'weaponArmor', slug: 'nasal-helmet', label: 'The one-piece form that followed' },
        { title: 'Sutton Hoo Helmet', type: 'weaponArmor', slug: 'sutton-hoo-helmet', label: 'The other great early medieval helmet find' },
        { title: 'Viking Sword', type: 'weaponArmor', slug: 'viking-sword', label: 'The weapon of the same graves' },
        { title: 'Round Shield', type: 'weaponArmor', slug: 'round-shield', label: 'What most Norse fighters had instead of a helmet' },
        { title: 'Mail Armor', type: 'weaponArmor', slug: 'mail-armor', label: 'Found in the same burial' }
      ]
    },
    sources: [
      { title: 'Museum of Cultural History, University of Oslo', url: 'https://www.khm.uio.no/english/', type: 'museum collection', institution: 'Museum of Cultural History, University of Oslo' },
      { title: 'Gjermundbu helmet photograph', url: 'https://commons.wikimedia.org/wiki/File:Hjelm_av_jern_fra_vikingtid_fra_Gjermundbu.jpg', type: 'image source', institution: 'Wikimedia Commons' },
      { title: 'National Museum of Denmark — Viking arms', url: 'https://en.natmus.dk/', type: 'museum collection', institution: 'National Museum of Denmark' }
    ]
  },

  {
    id: 'coppergate-helmet',
    name: 'Coppergate Helmet',
    type: 'weaponArmor',
    weaponArmorType: 'Famous armor',
    aliases: ['York Helmet', 'Coppergate helm'],
    year: 760,
    period: 'Early Middle Ages',
    region: 'Anglo-Saxon Northumbria',
    material: 'Iron with brass fittings and a mail neck curtain',
    battlefieldRole: 'One of the best-preserved Anglo-Saxon helmets',
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Coppergate%20Helmet%20YORCM%20CA665-1.jpg',
    imageInfo: {
      caption: 'The Coppergate helmet, found in York in 1982: an iron cap with brass edging, hinged cheek pieces, a nasal, and a mail curtain at the neck.',
      creator: 'Photograph by York Museums Trust staff',
      date: '8th century (object)',
      source: 'York Museums Trust, accession YORCM CA665 / Wikimedia Commons',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Coppergate_Helmet_YORCM_CA665-1.jpg',
      note: 'The actual surviving object, photographed by the holding institution. It survives substantially complete, which is exceptional for a helmet of this date. Licensed CC BY-SA 4.0.'
    },
    specs: {
      note: 'One of a very small group of Anglo-Saxon helmets, and the best preserved of them.',
      rows: [
        { label: 'Date', value: '8th century, commonly c. 750–775' },
        { label: 'Found', value: 'Coppergate, York, 1982' },
        { label: 'Context', value: 'A pit, during excavation of the Anglo-Scandinavian city' },
        { label: 'Construction', value: 'Iron cap with brass edging and crest bands' },
        { label: 'Face and neck', value: 'Nasal, hinged cheek pieces, mail curtain at the neck' },
        { label: 'Inscription', value: 'A Latin invocation naming Oshere' },
        { label: 'Collection', value: 'York Museums Trust, YORCM CA665' },
        { label: 'Comparable finds', value: 'Sutton Hoo, Benty Grange, Wollaston, Shorwell' }
      ]
    },
    summary: 'The Coppergate helmet is an eighth-century Anglo-Saxon helmet found in York in 1982, and the best-preserved example of its kind.',
    details: 'It carries a Latin inscription invoking God and naming a man called Oshere, which makes it one of the few pieces of early medieval armour connected to a named individual.',
    knownFor: [
      'The best-preserved Anglo-Saxon helmet known, found in York in 1982.',
      'A Latin inscription on its brass crest bands naming a man called Oshere.',
      'A mail curtain protecting the neck, surviving attached to the helmet.',
      'One of only a handful of Anglo-Saxon helmets ever found.'
    ],
    contentSections: [
      S('Overview',
        'The Coppergate helmet is an iron helmet of the eighth century, found in York in 1982 during excavation of the Anglo-Scandinavian city, and it is the best-preserved Anglo-Saxon helmet known.',
        'Where the Sutton Hoo helmet came out of the ground as hundreds of fragments requiring two reconstructions, this one survives substantially intact — cap, cheek pieces, nasal and mail neck curtain together.',
        'That completeness makes it the clearest single window onto how an Anglo-Saxon helmet was actually built and worn.'),
      S('Date and provenance',
        'It was recovered in 1982 from a pit during the Coppergate excavations in York, the same programme that produced the extraordinary evidence for Viking-age Jorvik.',
        'The helmet itself is earlier than the Scandinavian city, dating to the eighth century and generally placed around 750 to 775, so it belongs to Anglo-Saxon Northumbria rather than to the Norse period.',
        'How it came to be in the pit is not established. Deliberate deposition and simple loss have both been suggested, and the archaeological context does not settle it.'),
      S('Construction',
        'The cap is iron, built with a crest band running front to back and a brow band, with infill plates between — related in method to the segmented helmets of the wider early medieval world.',
        'Brass edging and decorated brass bands finish the cap, giving a contrast of yellow metal against iron that would have been conspicuous when new. A nasal protects the face, and hinged cheek pieces cover the sides.',
        'At the neck hangs a curtain of riveted mail, which survives attached — an unusual and valuable survival, since mail and iron rarely come out of the ground together in usable condition.'),
      S('The inscription',
        'The brass crest bands carry a Latin inscription, worn but largely legible, in the form of a protective invocation calling on God and the Holy Spirit, and naming a man called Oshere.',
        'Whether Oshere was the owner, the commissioner or a person the invocation was made for is not settled by the text, and the name is not securely identifiable with any figure known from written sources.',
        'What the inscription does establish is that this is a Christian object from a Christian milieu, made for someone of consequence enough to have his name worked into the metal.'),
      S('Historical context',
        'Eighth-century Northumbria was a wealthy and intellectually formidable kingdom, and the helmet belongs to the same world as the manuscripts and metalwork the period is better known for.',
        'Helmets were extraordinarily rare. Only a handful of Anglo-Saxon helmets have ever been found — Sutton Hoo, Benty Grange, Coppergate, Wollaston and Shorwell — across several centuries of a well-excavated country.',
        'The scarcity is real rather than an accident of survival. A helmet was the equipment of the very top of society, and most fighters had a shield, a spear and nothing on their heads.'),
      S('The surviving object today',
        'It is held by York Museums Trust under the accession number YORCM CA665 and displayed at the Yorkshire Museum in York.',
        'Its condition is exceptional for its date, and it has been extensively studied and published, including detailed examination of the mail and of the inscription.',
        'Replicas are on display in several museums, and comparison between original and replica is unusually instructive here because so little reconstruction was needed.'),
      S('Significance',
        'It is the reference object for Anglo-Saxon helmet construction, and its completeness lets questions be answered directly that elsewhere have to be inferred — how the cheek pieces hung, how the mail was attached, how the decoration was applied.',
        'Its inscription also links armour to literacy and to Christian practice in a way very little surviving equipment does. This is a war helmet carrying a prayer.',
        'Together with Sutton Hoo it defines what is known about elite Anglo-Saxon head protection, and the two are best read against each other: one spectacular, fragmentary and reconstructed, the other plainer, later and largely intact.')
    ],
    relatedEntries: {
      weaponsArmor: [
        { title: 'Sutton Hoo Helmet', type: 'weaponArmor', slug: 'sutton-hoo-helmet', label: 'The other great Anglo-Saxon helmet, to be read against it' },
        { title: 'Spangenhelm', type: 'weaponArmor', slug: 'spangenhelm', label: 'The construction tradition it relates to' },
        { title: 'Nasal Helmet', type: 'weaponArmor', slug: 'nasal-helmet', label: 'The later one-piece form' },
        { title: 'Mail Armor', type: 'weaponArmor', slug: 'mail-armor', label: 'Its neck curtain survives attached' },
        { title: 'Seax', type: 'weaponArmor', slug: 'seax', label: 'The characteristic Anglo-Saxon blade' },
        { title: 'Round Shield', type: 'weaponArmor', slug: 'round-shield', label: 'What most Anglo-Saxon fighters carried' }
      ]
    },
    sources: [
      { title: 'York Museums Trust — Coppergate Helmet, YORCM CA665', url: 'https://www.yorkmuseumstrust.org.uk/', type: 'museum collection', institution: 'York Museums Trust' },
      { title: 'Coppergate helmet photograph', url: 'https://commons.wikimedia.org/wiki/File:Coppergate_Helmet_YORCM_CA665-1.jpg', type: 'image source', institution: 'Wikimedia Commons' },
      { title: 'British Museum — early medieval collections', url: 'https://www.britishmuseum.org/collection', type: 'museum collection', institution: 'British Museum' }
    ]
  },

  {
    id: 'prankh-great-helm',
    name: 'Great Helm of Albert von Prankh',
    type: 'weaponArmor',
    weaponArmorType: 'Famous armor',
    aliases: ['Prankh helm', 'Pranckh helm'],
    year: 1350,
    period: 'High Middle Ages',
    region: 'Styria, Holy Roman Empire',
    material: 'Iron, with a crest of gilded and silvered material',
    battlefieldRole: 'A great helm surviving with its heraldic crest',
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Great%20helm%20of%20Albert%20von%20Pranckh%2C%2014th%20century.jpg',
    imageInfo: {
      caption: 'The great helm of Albert von Prankh, of about the mid-fourteenth century, shown with the heraldic crest that survives with it.',
      creator: 'Photograph by the KHM-Museumsverband',
      date: 'c. 1350 (object)',
      source: 'Kunsthistorisches Museum, Vienna / Wikimedia Commons',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Great_helm_of_Albert_von_Pranckh,_14th_century.jpg',
      note: 'The actual surviving object, photographed by the holding museum. The crest is the exceptional element: almost no medieval crests survive anywhere, because they were made of perishable materials. Licensed CC BY 4.0.'
    },
    specs: {
      note: 'One of very few great helms to survive with its crest, which is what makes it exceptional rather than merely rare.',
      rows: [
        { label: 'Date', value: 'c. mid-14th century' },
        { label: 'Region', value: 'Styria, in the Holy Roman Empire' },
        { label: 'Helm', value: 'Iron, of the fully enclosing great-helm form' },
        { label: 'Crest', value: 'A pair of horns rising from a fanned base, gilded and silvered' },
        { label: 'Exceptional because', value: 'The crest survives with the helm' },
        { label: 'Context', value: 'A funerary achievement, hung above a tomb' },
        { label: 'Collection', value: 'Kunsthistorisches Museum, Vienna' },
        { label: 'Family', value: 'The Prankh (Pranckh) family of Styria' }
      ]
    },
    summary: 'A mid-fourteenth-century great helm surviving with its heraldic crest — one of the very few medieval crests to come down to us at all.',
    details: 'Crests were made of light perishable materials and almost none survive. This one does, which turns a rare object into a uniquely informative one.',
    knownFor: [
      'One of the very few medieval helms to survive with its crest attached.',
      'The crest is a pair of horns on a fanned, gilded base — heraldry as an actual object.',
      'A funerary achievement, hung above a tomb rather than recovered from a battlefield.',
      'The clearest surviving evidence for what a crested helm actually looked like.'
    ],
    contentSections: [
      S('Overview',
        'This is a great helm of about the middle of the fourteenth century, associated with the Prankh family of Styria, and it survives with something almost nothing else does: its heraldic crest.',
        'Great helms themselves are rare but not unique. Crests are a different matter — they were built of light, perishable materials precisely so they could be worn on the head, and virtually none have come down to us.',
        'The result is an object that answers a question the written and painted record leaves open: what a crest was actually like as a physical thing, rather than as a device drawn on a page.'),
      S('Date and provenance',
        'The helm is generally dated to the middle decades of the fourteenth century, and is connected to Albert von Prankh, of a Styrian family within the Holy Roman Empire.',
        'It comes from a church, not from a battlefield or a grave. It belongs to the tradition of the funerary achievement: the arms and equipment of a dead man hung above his tomb as a permanent display of who he had been.',
        'That context is why it survived. Objects hung high in a church are kept, dusted and left alone for centuries, whereas anything in ordinary use is repaired, altered or worn out.'),
      S('Construction',
        'The helm is the classic fully enclosing form: an iron vessel covering the whole head and resting on the shoulders, with a narrow vision slit and breathing holes, in the shape that dominates knightly imagery of the thirteenth and fourteenth centuries.',
        'Above it rises the crest — a pair of horns springing from a fanned base, finished in gilding and silvering, so that the whole assembly would have flashed in sunlight at a distance.',
        'The crest is not iron. Medieval crests were made from light materials such as leather, parchment, cloth and wood over a frame, because a heavy one would have been unwearable, and it is exactly that lightness which normally guarantees they do not survive.'),
      S('Attribution and reliability',
        'The association with the Prankh family is secure in a way that many famous-object attributions are not: the object comes with a known family, a known region and a funerary context that explains its survival.',
        'What should not be assumed is that this is battlefield equipment. A funerary achievement may be a man\'s actual harness, or may be made for the tomb, and the two possibilities are not always separable.',
        'Crests in particular raise the question. A crest was worn in the tournament and in ceremonial display far more than in war, so a surviving crested helm is evidence for heraldic culture first and for battlefield practice second.'),
      S('Historical context',
        'The great helm existed because the closed face solved one problem and created another: a man in a helm could not be recognised, so he had to be identified by display.',
        'Crest, shield and surcoat carried the same arms for that reason, and the crested helm sits at the top of that system, held above the head where it could be seen furthest.',
        'By the middle of the fourteenth century the great helm was already being displaced in war by the bascinet, and its survival into this period is bound up with the tournament and with ceremony rather than with the battlefield.'),
      S('The surviving object today',
        'It is held by the Kunsthistorisches Museum in Vienna, in the Hofjagd- und Rüstkammer, among the most important collections of arms and armour in the world.',
        'It is displayed with the crest in place, which is how it should be seen — helm and crest were designed as one visual object and neither makes full sense alone.',
        'Its condition reflects centuries hanging in a church rather than use: the iron is worn and the crest\'s finish is degraded, but the assembly is intact.'),
      S('Significance',
        'It is the best surviving answer to what heraldry looked like in three dimensions. Coats of arms are abundantly documented on parchment and stone; the objects themselves are almost entirely gone.',
        'It also demonstrates why funerary achievements matter to arms history out of proportion to their number. The Black Prince\'s achievements at Canterbury survive for the same reason, and between them these objects preserve a class of material that ordinary use destroyed.',
        'For the archive it is a reminder that the most informative surviving objects are frequently not the ones that saw the most fighting, but the ones that were taken out of use and hung somewhere safe.')
    ],
    relatedEntries: {
      weaponsArmor: [
        { title: 'Great Helm', type: 'weaponArmor', slug: 'great-helm', label: 'The type it is the outstanding survival of' },
        { title: 'Surcoat', type: 'weaponArmor', slug: 'surcoat', label: 'Carried the same arms as the crest' },
        { title: 'Heater Shield', type: 'weaponArmor', slug: 'heater-shield', label: 'The third surface of the heraldic system' },
        { title: 'Bascinet', type: 'weaponArmor', slug: 'bascinet', label: 'The helmet displacing it in war by this date' },
        { title: 'Mail Coif', type: 'weaponArmor', slug: 'mail-coif', label: 'Worn beneath a great helm' },
        { title: 'Sutton Hoo Helmet', type: 'weaponArmor', slug: 'sutton-hoo-helmet', label: 'Another helmet preserved by being taken out of use' }
      ]
    },
    sources: [
      { title: 'Kunsthistorisches Museum Wien — Hofjagd- und Rüstkammer', url: 'https://www.khm.at/en/visit/collections/hofjagd-und-ruestkammer/', type: 'museum collection', institution: 'Kunsthistorisches Museum' },
      { title: 'Great helm of Albert von Prankh, KHM object record', url: 'https://www.khm.at/objektdb/detail/373606/', type: 'museum collection', institution: 'KHM-Museumsverband' },
      { title: 'Royal Armouries — helmets collection', url: 'https://royalarmouries.org/collection/', type: 'museum collection', institution: 'Royal Armouries' }
    ]
  }
]

let n = 0
for (const article of articles) {
  if (data.weaponsArmor.some((x) => x.id === article.id)) throw new Error(`already exists: ${article.id}`)
  data.weaponsArmor.push(article)
  console.log(`+ ${article.id.padEnd(20)} ${article.contentSections.length} sections, ${article.contentSections.flatMap((s) => s.paragraphs).join(' ').length} chars`)
  n++
}

// "Notable surviving examples" cross-links: the generic article points back at the
// object, so the archive works in both directions.
const get = (id) => {
  const e = data.weaponsArmor.find((x) => x.id === id)
  if (!e) throw new Error(`missing: ${id}`)
  return e
}
const backLinks = {
  'great-helm': [{ title: 'Great Helm of Albert von Prankh', slug: 'prankh-great-helm', label: 'Surviving example — the rare helm that kept its crest' }],
  spangenhelm: [
    { title: 'Gjermundbu Helmet', slug: 'gjermundbu-helmet', label: 'Surviving example — the only complete Viking-age helmet' },
    { title: 'Coppergate Helmet', slug: 'coppergate-helmet', label: 'Surviving example — the best-preserved Anglo-Saxon helmet' }
  ],
  'sutton-hoo-helmet': [
    { title: 'Coppergate Helmet', slug: 'coppergate-helmet', label: 'The other great Anglo-Saxon helmet' },
    { title: 'Gjermundbu Helmet', slug: 'gjermundbu-helmet', label: 'The Norse counterpart' }
  ],
  longsword: [{ title: "William Wallace's Sword", slug: 'wallace-sword', label: 'Surviving example — famous, and of disputed date' }],
  joyeuse: [{ title: "William Wallace's Sword", slug: 'wallace-sword', label: 'Another sword whose attribution outran its evidence' }],
  'nasal-helmet': [{ title: 'Gjermundbu Helmet', slug: 'gjermundbu-helmet', label: 'Surviving example of the segmented tradition' }]
}
for (const [id, entries] of Object.entries(backLinks)) {
  ;(get(id).relatedEntries.weaponsArmor ??= []).push(...entries.map((e) => ({ ...e, type: 'weaponArmor' })))
  console.log(`  back-link ${id} -> ${entries.map((e) => e.slug).join(', ')}`)
}

writeFileSync(dataPath, JSON.stringify(data, null, 2))
console.log(`\n${n} artifacts added; weaponsArmor now ${data.weaponsArmor.length}`)
