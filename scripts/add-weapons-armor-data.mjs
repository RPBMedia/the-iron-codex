import fs from 'node:fs'

const dataPath = new URL('../server/data/history.json', import.meta.url)
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'))

const artifactById = new Map((data.artifacts ?? []).map((item) => [item.id, item]))
const sourceCollections = [
  ['people', 'person', data.characters ?? []],
  ['events', 'event', data.events ?? []],
  ['locations', 'location', data.locations ?? []],
  ['artifacts', 'artifact', data.artifacts ?? []]
]

data.artifacts = (data.artifacts ?? []).filter((item) => ![
  'joyeuse',
  'sutton-hoo-helmet',
  'varangian-guard'
].includes(item.id))

const commons = (file) => ({
  src: `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(file)}`,
  sourceUrl: `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(file).replace(/%20/g, '_')}`
})

function imageInfo({ file, caption, creator = 'Unknown maker or photographer', date, source = 'Wikimedia Commons', note }) {
  const { src, sourceUrl } = commons(file)
  return {
    image: src,
    imageInfo: {
      caption,
      creator,
      date,
      source,
      sourceUrl,
      note
    },
    imageSource: sourceUrl
  }
}

function source(title, url, type = 'reference work', author = title.split(':')[0]) {
  return { title, author, type, url }
}

function entry({
  id,
  name,
  aliases = [],
  weaponArmorType,
  year,
  period,
  region,
  material,
  battlefieldRole,
  image,
  summary,
  details,
  sections,
  knownFor,
  relatedEntries = {},
  historicalReliability,
  extraSources = []
}) {
  return {
    id,
    type: 'weaponArmor',
    name,
    aliases,
    weaponArmorType,
    year,
    period,
    region,
    material,
    battlefieldRole,
    image: image.image,
    summary,
    details,
    contentSections: sections.map(([title, paragraphs]) => ({ title, paragraphs })),
    imageInfo: image.imageInfo,
    historicalReliability,
    knownFor,
    relatedEntries,
    sources: [
      source('Wikimedia Commons image record', image.imageInfo.sourceUrl, 'image metadata', 'Wikimedia Commons'),
      ...extraSources
    ]
  }
}

function weapon({
  id,
  name,
  aliases,
  year,
  period,
  region,
  material,
  battlefieldRole,
  image,
  summary,
  design,
  use,
  development,
  variations,
  examples,
  legacy,
  relatedEntries,
  historicalReliability = 'Weapon categories are modern conveniences applied to objects that varied by workshop, region, and date; surviving examples and manuscript images must be read together.'
}) {
  return entry({
    id,
    name,
    aliases,
    weaponArmorType: 'Weapon',
    year,
    period,
    region,
    material,
    battlefieldRole,
    image,
    summary,
    details: use,
    sections: [
      ['Overview', [summary, use]],
      ['Design and construction', [design]],
      ['Use in warfare', [use]],
      ['Historical development', [development]],
      ['Regional variations and examples', [variations, examples].filter(Boolean)],
      ['Legacy', [legacy]]
    ],
    knownFor: [
      `${name} formed part of the equipment of medieval European fighters in a specific tactical setting rather than as a fantasy archetype.`,
      `Its construction and use changed with armor, social status, training, and battlefield conditions.`
    ],
    relatedEntries,
    historicalReliability,
    extraSources: [
      source(`Wikipedia: ${name}`, `https://en.wikipedia.org/wiki/${encodeURIComponent((aliases?.[0] ?? name).replaceAll(' ', '_'))}`)
    ]
  })
}

function armor({
  id,
  name,
  aliases,
  year,
  period,
  region,
  material,
  battlefieldRole,
  image,
  summary,
  design,
  protection,
  development,
  variations,
  examples,
  legacy,
  relatedEntries,
  historicalReliability = 'Armor terminology varies between museum catalogues, modern typologies, and medieval language; the article describes broad families while noting regional and chronological variation.'
}) {
  return entry({
    id,
    name,
    aliases,
    weaponArmorType: /shield|buckler|pavise/i.test(name) ? 'Shield' : /helm|helmet|bascinet|sallet|coif/i.test(name) ? 'Helmet' : 'Armor',
    year,
    period,
    region,
    material,
    battlefieldRole,
    image,
    summary,
    details: protection,
    sections: [
      ['Overview', [summary, protection]],
      ['Design and construction', [design]],
      ['Protection and battlefield role', [protection]],
      ['Historical development', [development]],
      ['Regional variations and surviving pieces', [variations, examples].filter(Boolean)],
      ['Legacy', [legacy]]
    ],
    knownFor: [
      `${name} shows how medieval protection balanced cost, mobility, visibility, and resistance to weapons.`,
      `Its form changed as weapons, horse warfare, infantry tactics, and metalworking developed.`
    ],
    relatedEntries,
    historicalReliability,
    extraSources: [
      source(`Wikipedia: ${name}`, `https://en.wikipedia.org/wiki/${encodeURIComponent((aliases?.[0] ?? name).replaceAll(' ', '_'))}`)
    ]
  })
}

const entries = [
  weapon({
    id: 'arming-sword',
    name: 'Arming Sword',
    aliases: ['Knightly sword', 'Single-handed sword'],
    year: 1150,
    period: 'High medieval',
    region: 'Western Europe',
    material: 'Iron or steel blade with organic grip and metal fittings',
    battlefieldRole: 'Sidearm for knights, men-at-arms, and other elite fighters',
    image: imageInfo({
      file: 'Sword-ca-1300_AD.JPG',
      caption: 'Single-handed medieval sword, c. 1300.',
      date: 'c. 1300',
      source: 'Wikimedia Commons',
      note: 'Surviving museum object representative of the arming sword family.'
    }),
    summary: 'The arming sword was the familiar single-handed sword of high medieval Europe, carried with a shield or buckler and used by knights, sergeants, and other armed elites.',
    design: 'Most arming swords had a straight double-edged blade, a crossguard, a one-handed grip, and a pommel that helped balance the weapon. Blade forms varied: some favored broad cutting surfaces, while later examples narrowed toward stronger points for thrusting into mail gaps or against textile and plate defenses.',
    use: 'In battle the arming sword was rarely the only weapon a fighter carried. It worked as a close-range sidearm after a lance, spear, or missile exchange, and it paired naturally with kite shields, heater shields, or bucklers depending on date and social setting.',
    development: 'The weapon developed from early medieval spatha-like swords into the knightly sword of the eleventh through thirteenth centuries. Its changing blade geometry reflects the same military world that produced mail hauberks, surcoats, shield heraldry, and eventually more plate protection.',
    variations: 'Museum typologies separate arming swords by blade shape, fuller, guard, and pommel, but medieval users did not follow one fixed classification. Regional workshops across France, England, the German lands, Iberia, and Italy produced forms suited to local fashion and warfare.',
    examples: 'Arming swords appear in effigies, seals, manuscript illuminations, and surviving finds. They are closely tied to the visual culture of knighthood, but they were practical arms rather than merely symbols of rank.',
    legacy: 'The arming sword became the standard image of the medieval knightly sidearm. Its later ceremonial and heraldic uses grew from a long battlefield association with oath, lordship, military service, and noble identity.',
    relatedEntries: {
      people: ['William the Conqueror', 'Richard the Lionheart'],
      events: ['Battle of Hastings', 'Third Crusade'],
      weaponsArmor: ['Shield', 'Mail armor', 'Longsword']
    }
  }),
  weapon({
    id: 'longsword',
    name: 'Longsword',
    aliases: ['Hand-and-a-half sword', 'Bastard sword'],
    year: 1350,
    period: 'Late medieval',
    region: 'Western and Central Europe',
    material: 'Steel blade with extended grip, crossguard, and pommel',
    battlefieldRole: 'Two-handed or hand-and-a-half weapon for armored and unarmored combat',
    image: imageInfo({
      file: 'Hand-and-a-Half_Sword_MET_DP146428.jpg',
      caption: 'Hand-and-a-half sword in the Metropolitan Museum of Art.',
      date: '15th century',
      source: 'Metropolitan Museum of Art / Wikimedia Commons',
      note: 'Surviving late medieval sword; not tied to a single named owner.'
    }),
    summary: 'The longsword was a later medieval sword with a grip long enough for two hands, closely associated with armored combat, judicial duels, and fencing traditions.',
    design: 'Longswords usually combined a straight double-edged blade with an extended grip and a pronounced pommel. Their blades could cut powerfully, but many late medieval examples also had stiff points for thrusting into armor gaps at the visor, armpit, hand, or joints.',
    use: 'A trained fighter could use the longsword with broad cuts, thrusts, binding actions, pommel strikes, and half-swording. In armored combat, holding the blade with one hand helped guide the point precisely against weak places in plate harness.',
    development: 'The longsword flourished as plate armor spread in the fourteenth and fifteenth centuries. Fight books associated with masters such as Johannes Liechtenauer and Fiore dei Liberi preserve sophisticated methods for using it in war, duel, and judicial combat.',
    variations: 'German, Italian, Burgundian, English, and Iberian examples differ in blade section, hilt fashion, and intended balance. Some were battlefield weapons, while others served in civilian martial training or aristocratic display.',
    examples: 'Surviving museum swords and illustrated fencing manuscripts are the strongest evidence for longsword use. They show a weapon embedded in technical martial culture rather than a heavy club-like fantasy sword.',
    legacy: 'Modern historical fencing has made the longsword one of the best-studied medieval weapons, but its original setting was the disciplined martial world of late medieval knights, men-at-arms, and trained urban fighters.',
    relatedEntries: {
      events: ['Battle of Agincourt'],
      weaponsArmor: ['Arming Sword', 'Plate armor', 'Bascinet']
    }
  }),
  weapon({
    id: 'viking-sword',
    name: 'Viking Sword',
    aliases: ['Carolingian sword'],
    year: 900,
    period: 'Early medieval',
    region: 'Scandinavia and the North Sea world',
    material: 'Iron or steel blade with decorated hilt fittings',
    battlefieldRole: 'Prestige sidearm for elite warriors in Viking Age warfare',
    image: imageInfo({
      file: 'Viking_swords_closeup.jpg',
      caption: 'Close view of Viking Age swords.',
      date: 'Viking Age',
      source: 'Wikimedia Commons',
      note: 'Surviving swords; individual ownership is often unknown.'
    }),
    summary: 'The Viking sword was an elite early medieval weapon used across Scandinavia, the British Isles, and the Frankish world during the Viking Age.',
    design: 'Viking swords were usually double-edged with a broad blade, a short guard, and a distinctive multi-lobed or geometric pommel. Many blades were pattern-welded or made from imported high-quality steel, while hilts could carry silver, copper alloy, or inlay decoration.',
    use: 'The sword functioned as a high-status sidearm in raiding, local warfare, and royal retinues. Many Scandinavian fighters used spears and axes as primary weapons, making the sword both practical and socially charged.',
    development: 'Viking swords grew out of Frankish and Migration-period blade traditions. Trade, gift exchange, plunder, and Frankish export controls all shaped their movement through the North Sea and Baltic worlds.',
    variations: 'Hilt types varied sharply by region and date. Some blades carry inscriptions such as ULFBERHT, while others reveal local assembly of imported blades with Scandinavian hilt fittings.',
    examples: 'Grave finds, river deposits, and hoards preserve many examples. Their burial contexts connect swords to status, identity, and memory as much as to combat.',
    legacy: 'The Viking sword remains a key witness to early medieval exchange: it links Scandinavian raiders and rulers to Frankish workshops, river routes, elite burial customs, and the politics of gift-giving.',
    relatedEntries: {
      people: ['Harald Hardrada', 'Cnut the Great'],
      locations: ['Kingdom of Denmark', 'Kingdom of Norway'],
      weaponsArmor: ['Ulfberht swords', 'Seax', 'Dane axe']
    }
  }),
  weapon({
    id: 'seax',
    name: 'Seax',
    aliases: ['Scramasax', 'Sax'],
    year: 700,
    period: 'Early medieval',
    region: 'Anglo-Saxon, Frankish, and Scandinavian Europe',
    material: 'Iron or steel single-edged blade with organic grip',
    battlefieldRole: 'Knife, sidearm, and utility blade',
    image: imageInfo({
      file: 'Seax_of_Beagnoth.jpg',
      caption: 'The Seax of Beagnoth, an Anglo-Saxon single-edged blade.',
      date: '9th-10th century',
      source: 'British Museum / Wikimedia Commons',
      note: 'Surviving inscribed object; more elaborate than many everyday seaxes.'
    }),
    summary: 'The seax was a single-edged blade used in early medieval northwestern Europe as a tool, sidearm, and status object.',
    design: 'Seaxes ranged from short utility knives to long fighting blades. They usually had a straight or slightly broken-back edge profile, a single cutting edge, and a tang fitted into an organic grip that rarely survives archaeologically.',
    use: 'A seax could cut food, craft materials, and enemies. In Anglo-Saxon and Frankish contexts it was part of everyday armed culture, especially for people who did not necessarily own a sword.',
    development: 'The form developed in the Migration and early medieval periods and remained common through the Viking Age. Longer forms overlapped with fighting knives and short swords, while smaller examples remained practical tools.',
    variations: 'Frankish, Anglo-Saxon, and Scandinavian seaxes differ in length, blade profile, decoration, and burial context. The Beagnoth example is famous for its runic inscription and craftsmanship.',
    examples: 'Grave finds and river finds show that seaxes crossed the boundary between utility object and weapon. Their presence in burials can mark gender, status, and local custom differently from region to region.',
    legacy: 'The seax gives a more grounded picture of early medieval weaponry than sword-centered imagery alone: many fighters relied on cheaper, multipurpose blades that belonged to daily life as well as combat.',
    relatedEntries: {
      locations: ['Kingdom of Wessex', 'Northumbria'],
      weaponsArmor: ['Viking sword', 'Dagger / rondel dagger']
    }
  }),
  weapon({
    id: 'rondel-dagger',
    name: 'Dagger / Rondel Dagger',
    aliases: ['Rondel dagger', 'Medieval dagger'],
    year: 1400,
    period: 'Late medieval',
    region: 'Western Europe',
    material: 'Steel blade with disc-shaped guard and pommel',
    battlefieldRole: 'Close-combat sidearm and armor-gap weapon',
    image: imageInfo({
      file: 'Rondel_dagger_MET_DP140501.jpg',
      caption: 'Late medieval rondel dagger.',
      date: '15th century',
      source: 'Metropolitan Museum of Art / Wikimedia Commons',
      note: 'Surviving object representative of the rondel dagger form.'
    }),
    summary: 'The rondel dagger was a late medieval sidearm with disc-like fittings, often associated with knights, men-at-arms, and armored close combat.',
    design: 'Its name comes from the round rondels at guard and pommel. Many had stiff triangular or diamond-section blades built for thrusting rather than broad cutting, making them useful against mail links or gaps in plate armor.',
    use: 'The rondel dagger was carried at the belt and could be decisive in grappling, battlefield finishing blows, and judicial duel techniques. Fight books show dagger defenses, disarms, and counterattacks as a major part of martial training.',
    development: 'Daggers had long been common in medieval Europe, but the rondel form became especially visible in the fourteenth and fifteenth centuries alongside plate harness and formalized combat pedagogy.',
    variations: 'Some examples are plain military tools; others have decorated grips and mounts. Blade forms vary from narrow thrusting spikes to broader blades suited to mixed cutting and thrusting.',
    examples: 'Museum collections preserve many rondel daggers, while manuscript images and fight books show their use in controlled but dangerous close-quarters fighting.',
    legacy: 'The rondel dagger reminds readers that medieval combat did not end with sword blows. Grappling, armor gaps, and disciplined close work mattered in the lethal space after a fighter lost distance.',
    relatedEntries: {
      weaponsArmor: ['Longsword', 'Plate armor', 'Bascinet']
    }
  }),
  weapon({
    id: 'longbow',
    name: 'Longbow',
    aliases: ['English longbow'],
    year: 1300,
    period: 'High and late medieval',
    region: 'Wales and England',
    material: 'Yew or other bow wood with hemp, linen, or sinew string',
    battlefieldRole: 'Massed missile weapon for infantry archers',
    image: imageInfo({
      file: 'Battle_of_crecy_froissart.jpg',
      caption: 'Manuscript depiction of archery at the Battle of Crecy.',
      date: '15th-century manuscript image',
      source: 'Bibliotheque nationale de France / Wikimedia Commons',
      note: 'Later manuscript depiction; useful for reception and battlefield imagery rather than exact equipment detail.'
    }),
    summary: 'The longbow was a powerful self bow associated especially with Welsh and English archers in the wars of the thirteenth to fifteenth centuries.',
    design: 'Longbows were tall self bows, often made from yew with sapwood and heartwood working together. Their draw weights could be very high, demanding long training and physical adaptation from archers.',
    use: 'English armies used longbowmen in dense formations, often protected by stakes or terrain and integrated with dismounted men-at-arms. At Crecy, Poitiers, and Agincourt, archery shaped the tactical conditions under which French attacks failed.',
    development: 'Welsh warfare helped bring the longbow into English royal armies, and the weapon became central to recruiting, practice laws, and campaign logistics. Its use depended on trained manpower and huge supplies of arrows, not simply on the bow itself.',
    variations: 'War bows differed in draw weight, wood, and regional production. The Mary Rose bows are later Tudor survivals, but they help illuminate the physical power of the late medieval war bow tradition.',
    examples: 'Longbow evidence includes surviving bows, arrowheads, battlefield accounts, statutes on archery practice, and manuscript depictions. The weapon’s effectiveness varied with weather, armor, terrain, and command decisions.',
    legacy: 'The longbow became a defining symbol of English victories in the Hundred Years’ War, though modern historians treat its battlefield role as part of a combined tactical system rather than a single miracle weapon.',
    relatedEntries: {
      events: ['Battle of Crécy', 'Battle of Agincourt', "Hundred Years' War"],
      locations: ['Kingdom of England', 'Kingdom of France'],
      weaponsArmor: ['War bow', 'Plate armor', 'Pavise']
    }
  }),
  weapon({
    id: 'crossbow',
    name: 'Crossbow',
    aliases: ['Arbalest'],
    year: 1200,
    period: 'High and late medieval',
    region: 'Europe and the Mediterranean',
    material: 'Wooden tiller with composite, steel, or wooden bow and mechanical lock',
    battlefieldRole: 'Missile weapon for sieges, infantry, and specialist troops',
    image: imageInfo({
      file: 'Une_arbalète_classique.jpg',
      caption: 'A medieval-style crossbow with tiller, bow, and trigger mechanism.',
      source: 'Wikimedia Commons',
      note: 'Photograph of a crossbow form; examples varied greatly by date and mechanism.'
    }),
    summary: 'The crossbow used a mechanical lock to hold a drawn bow, allowing powerful shots from fortifications, ships, siege works, and infantry lines.',
    design: 'Crossbows combined a bow or prod with a stock-like tiller, a nut or lock, and a trigger. Stronger versions required belt hooks, goat’s-foot levers, windlasses, or cranequins to span the bow.',
    use: 'Crossbowmen were valuable in siege warfare because they could shoot from cover, hold a drawn weapon ready, and train more quickly than elite longbowmen. Genoese crossbowmen became especially famous in Mediterranean and French service.',
    development: 'Crossbows were known earlier, but they became a major European military weapon in the high Middle Ages. Church criticism of crossbow use against Christians did not prevent rulers, communes, and crusader armies from employing them widely.',
    variations: 'Simple wooden crossbows, composite prods, steel-prodded arbalests, and mounted or siege crossbows all had different power and reload demands. Pavises often protected crossbowmen during reloading.',
    examples: 'Crossbows appear in crusading sources, city arsenals, ship inventories, and battlefield accounts. Their practical value lay in trained crews, ammunition, pavise support, and siege conditions.',
    legacy: 'The crossbow bridges medieval hand weapons and later mechanical missile technology. It changed the balance between training time, armor penetration, and defensive positions without replacing bows everywhere.',
    relatedEntries: {
      events: ['Battle of Crécy', 'Third Crusade'],
      weaponsArmor: ['Pavise', 'Longbow', 'Plate armor']
    }
  }),
  weapon({
    id: 'lance',
    name: 'Lance',
    aliases: ['Knightly lance'],
    year: 1100,
    period: 'High medieval',
    region: 'Western Europe',
    material: 'Wooden shaft with iron or steel head',
    battlefieldRole: 'Cavalry shock weapon',
    image: imageInfo({
      file: 'Normans_Bayeux.jpg',
      caption: 'Norman cavalry with lances in the Bayeux Tapestry.',
      date: 'late 11th century embroidery',
      source: 'Bayeux Museum / Wikimedia Commons',
      note: 'Near-contemporary visual source for Norman cavalry, though stylized.'
    }),
    summary: 'The lance was the primary shock weapon of medieval heavy cavalry, used from horseback to deliver reach, momentum, and formation pressure.',
    design: 'A war lance was a long wooden shaft tipped with iron or steel. Over time, tournament lances developed specialized forms, while battlefield lances remained practical weapons shaped by riding style, armor, and cavalry tactics.',
    use: 'A couched lance charge could break exposed infantry or enemy cavalry under the right conditions, but its success depended on discipline, terrain, horse quality, and support from other troops. Knights also used lances overarm or underarm in earlier depictions.',
    development: 'The lance became visually central to knightly warfare between the eleventh and thirteenth centuries. Its use evolved with saddles, stirrups, shields, and mail-clad cavalry, then later with full plate harness and tournament culture.',
    variations: 'Battlefield, hunting, and tournament lances differed. Iberian, French, English, German, and Italian cavalry traditions all shaped how the weapon was carried and deployed.',
    examples: 'The Bayeux Tapestry shows Norman cavalry with lances at Hastings, while later seals, manuscripts, and tournament books present the lance as a badge of aristocratic mounted warfare.',
    legacy: 'The lance became the defining emblem of knighthood, but its real history belongs to combined arms warfare: cavalry needed infantry, missiles, scouting, and logistics to turn shock action into victory.',
    relatedEntries: {
      events: ['Battle of Hastings', 'Battle of Bannockburn'],
      people: ['William the Conqueror'],
      weaponsArmor: ['Kite shield', 'Great helm', 'Mail armor']
    }
  }),
  weapon({
    id: 'spear',
    name: 'Spear',
    aliases: ['Thrusting spear'],
    year: 800,
    period: 'Early to late medieval',
    region: 'Europe',
    material: 'Wooden shaft with iron or steel head',
    battlefieldRole: 'Common infantry and cavalry weapon',
    image: imageInfo({
      file: 'Anglo-Saxon_spearheads_(FindID_104346).jpg',
      caption: 'Early medieval Anglo-Saxon spearheads.',
      date: 'early medieval',
      source: 'Portable Antiquities Scheme / Wikimedia Commons',
      note: 'Archaeological finds; shafts rarely survive with spearheads.'
    }),
    summary: 'The spear was one of the most common weapons of medieval Europe because it was cheaper than a sword, useful in formation, and adaptable to infantry or cavalry.',
    design: 'A spear joined a wooden shaft to an iron or steel head. Head shapes varied from leaf-shaped blades to narrower thrusting points, and ferrules or butt-spikes could protect the lower end or help plant the weapon.',
    use: 'Infantry used spears to hold ground, resist cavalry, or fight in local levies. Mounted warriors also used spears and lighter lances before specialized cavalry equipment became dominant.',
    development: 'The spear remained militarily relevant through the entire Middle Ages. Its descendants include longer pikes and specialized polearms, but basic spear forms continued because they were effective, affordable, and easy to produce.',
    variations: 'Early medieval grave finds, Viking Age spearheads, Anglo-Saxon weapons, and later militia spears show wide regional variety. Some were plain tools of war, while others carried decoration or status signals.',
    examples: 'Spears appear in burial archaeology, manuscript battle scenes, town arsenals, and chronicles. Their frequency is a corrective to sword-heavy images of medieval combat.',
    legacy: 'The spear’s endurance shows that medieval warfare depended on practical reach weapons used by many social ranks, not only elite arms carried by knights.',
    relatedEntries: {
      weaponsArmor: ['Lance', 'Javelin / throwing spear', 'Shield']
    }
  }),
  weapon({
    id: 'dane-axe',
    name: 'Dane Axe',
    aliases: ['Danish axe', 'Two-handed axe'],
    year: 1000,
    period: 'Late Viking Age and early medieval',
    region: 'Scandinavia and England',
    material: 'Iron or steel axe head on a long wooden haft',
    battlefieldRole: 'Two-handed cutting weapon for elite infantry',
    image: imageInfo({
      file: 'Tapisserie_agriculture_(cropped).JPG',
      caption: 'Axe-bearing figures in the Bayeux Tapestry, often compared with late Viking and Anglo-Danish axe use.',
      date: 'late 11th century embroidery',
      source: 'Bayeux Museum / Wikimedia Commons',
      note: 'Textile depiction; axe forms are stylized but historically associated with eleventh-century warfare.'
    }),
    summary: 'The Dane axe was a long-hafted axe associated with late Viking Age and Anglo-Danish elite warriors, including housecarls in eleventh-century England.',
    design: 'The weapon had a broad, relatively thin iron cutting blade mounted on a long haft. Its reach and cutting force made it different from smaller utility axes or throwing axes.',
    use: 'A trained axe-man could strike around shields, threaten horses, and deliver powerful blows against mail and helmets. At Hastings, English axe-bearing housecarls formed part of Harold Godwinson’s elite infantry.',
    development: 'The Dane axe belongs to the military world of the North Sea in the tenth and eleventh centuries. It reflects Scandinavian influence in England and the prestige of heavily armed retinues.',
    variations: 'Axe head shapes differed by region and date. Some were plain battlefield tools, while others had silver inlay or decoration that marked status.',
    examples: 'The Bayeux Tapestry, Scandinavian finds, and Anglo-Danish contexts preserve the Dane axe’s association with elite infantry. It is best understood as a professional retinue weapon rather than a universal Viking arm.',
    legacy: 'The Dane axe became one of the visual signatures of late Viking and Anglo-Saxon warfare, especially in accounts of 1066 and the fall of the old English kingdom.',
    relatedEntries: {
      people: ['Harold Godwinson', 'Cnut the Great'],
      events: ['Battle of Hastings'],
      weaponsArmor: ['Battle axe', 'Mail armor', 'Shield']
    }
  }),
  weapon({
    id: 'battle-axe',
    name: 'Battle Axe',
    aliases: ['War axe'],
    year: 1000,
    period: 'Early to late medieval',
    region: 'Europe',
    material: 'Iron or steel axe head on wooden haft',
    battlefieldRole: 'Cutting and hook-capable close weapon',
    image: imageInfo({
      file: 'Mammen_økse_D9947.jpg',
      caption: 'The decorated Mammen axe from Viking Age Denmark.',
      date: '10th century',
      source: 'National Museum of Denmark / Wikimedia Commons',
      note: 'Elite decorated axe; not every battle axe was this ornate.'
    }),
    summary: 'The battle axe was a broad family of medieval axe weapons, ranging from compact one-handed forms to larger battlefield axes.',
    design: 'Battle axes used a metal blade fixed to a wooden haft. Some were simple single-bit axes, while others had beards, spikes, or shapes that could hook shields, reins, or limbs.',
    use: 'Axes were valued because they could deliver heavy cuts and were cheaper to produce than swords. Infantry, mounted warriors, and raiders used different forms according to local fighting style.',
    development: 'Early medieval axe traditions in Scandinavia and the Slavic lands continued into Norman, Anglo-Saxon, and later medieval warfare. Specialized polearms eventually absorbed some axe functions.',
    variations: 'The decorated Mammen axe shows elite craftsmanship, while many battlefield axes were plain. Regional forms include bearded axes, broad axes, and smaller hand axes.',
    examples: 'Archaeological finds and manuscripts show axes in both elite and non-elite contexts. Their meaning could range from practical tool-weapon to status object.',
    legacy: 'The battle axe complicates the idea that medieval prestige belonged only to swords. In many regions an axe could be practical, frightening, and socially meaningful.',
    relatedEntries: {
      locations: ['Kingdom of Denmark'],
      weaponsArmor: ['Dane axe', 'Shield', 'Mail armor']
    }
  }),
  weapon({
    id: 'mace',
    name: 'Mace',
    aliases: ['Flanged mace'],
    year: 1300,
    period: 'High and late medieval',
    region: 'Europe',
    material: 'Iron, steel, or bronze head with wooden or metal haft',
    battlefieldRole: 'Blunt-force weapon against armor and helmets',
    image: imageInfo({
      file: 'Mace_MET_14.25.466.jpg',
      caption: 'Medieval mace in the Metropolitan Museum of Art.',
      date: '15th century',
      source: 'Metropolitan Museum of Art / Wikimedia Commons',
      note: 'Surviving object representative of late medieval mace forms.'
    }),
    summary: 'The mace was a compact striking weapon that concentrated force through a heavy head, flanges, or knobs.',
    design: 'Maces could have spherical, knobbed, or flanged heads. Metal flanges improved the weapon’s ability to focus impact against mail, helmets, and plate surfaces.',
    use: 'A mace did not need a sharp edge to injure an armored opponent. It could concuss, break bone, deform armor, or create openings in close combat.',
    development: 'Blunt weapons became more visible as armor improved. The mace also carried ceremonial and authority symbolism in courts and civic institutions, but its battlefield forms remained brutally practical.',
    variations: 'Mounted men-at-arms, infantry, and eastern European cavalry used different mace forms. Some examples are richly decorated, while others are austere military tools.',
    examples: 'Surviving maces in museum collections show both warlike and ceremonial contexts. Their design reveals a response to armor rather than a crude substitute for edged weapons.',
    legacy: 'The mace became a symbol of authority in later ceremonial settings, but that symbolism grew from its medieval association with command, force, and armored violence.',
    relatedEntries: {
      weaponsArmor: ['War hammer', 'Plate armor', 'Bascinet']
    }
  }),
  weapon({
    id: 'war-hammer',
    name: 'War Hammer',
    aliases: ['Horseman’s hammer'],
    year: 1400,
    period: 'Late medieval',
    region: 'Europe',
    material: 'Steel or iron head on wooden or metal haft',
    battlefieldRole: 'Anti-armor impact and piercing weapon',
    image: imageInfo({
      file: 'War_hammer_MET_14.25.478.jpg',
      caption: 'Late medieval war hammer.',
      date: '15th century',
      source: 'Metropolitan Museum of Art / Wikimedia Commons',
      note: 'Surviving object; many war hammers had both hammer face and beak.'
    }),
    summary: 'The war hammer was a late medieval striking weapon built to damage armor through impact, piercing, or both.',
    design: 'A typical war hammer had a hammer face on one side and a beak or spike on the other. The beak could bite into plate edges or concentrate force on a small point.',
    use: 'Men-at-arms used war hammers on horseback and on foot against armored opponents. The weapon was most useful at close range, where control and leverage mattered as much as raw force.',
    development: 'As plate armor improved, weapons that crushed, hooked, or pierced gained tactical value. The war hammer belongs to the same late medieval problem-set as poleaxes and specialized daggers.',
    variations: 'Some were short cavalry weapons; others had longer hafts closer to polearms. Decorated examples show elite ownership, while plainer versions served battlefield needs.',
    examples: 'Museum hammers, armor marks, and fight-book techniques show how late medieval combat adapted to the protective success of plate harness.',
    legacy: 'The war hammer is a useful reminder that armor did not make fighters invulnerable. It changed the toolkit, pushing combat toward impact, grappling, and precise attacks.',
    relatedEntries: {
      weaponsArmor: ['Mace', 'Poleaxe', 'Plate armor']
    }
  }),
  weapon({
    id: 'halberd',
    name: 'Halberd',
    aliases: ['Halbert'],
    year: 1450,
    period: 'Late medieval',
    region: 'Swiss and German-speaking Europe',
    material: 'Steel axe-spike-hook head on long wooden shaft',
    battlefieldRole: 'Infantry polearm for cutting, thrusting, and hooking',
    image: imageInfo({
      file: 'Halberd_MET_14.25.349.jpg',
      caption: 'Late medieval halberd.',
      date: '15th century',
      source: 'Metropolitan Museum of Art / Wikimedia Commons',
      note: 'Surviving polearm; forms varied by region and date.'
    }),
    summary: 'The halberd was a late medieval polearm combining an axe blade, thrusting spike, and hook-like rear projection.',
    design: 'Halberds mounted a complex steel head on a long shaft. The blade cut, the top spike thrust, and the rear hook could pull riders, catch armor, or control weapons.',
    use: 'Infantry used halberds in dense formations and close engagements, especially in regions where foot soldiers challenged mounted elites. The weapon’s reach and versatility suited disciplined urban and Swiss infantry.',
    development: 'The halberd emerged in the late medieval world of militias, mercenary infantry, and changing cavalry-infantry relations. Its rise overlaps with pikes, bills, and other specialized polearms.',
    variations: 'Swiss, German, and Italian halberds differ in blade shape and decorative finish. Some later ceremonial halberds are more ornate and less battlefield-focused.',
    examples: 'Surviving fifteenth-century halberds show practical heads with strong sockets and langets, while later guard weapons preserve the halberd’s prestige after its battlefield peak.',
    legacy: 'The halberd became a symbol of late medieval and early Renaissance infantry power, rooted in a period when disciplined foot soldiers could reshape aristocratic warfare.',
    relatedEntries: {
      weaponsArmor: ['Poleaxe', 'Bill / billhook', 'Plate armor']
    }
  }),
  weapon({
    id: 'poleaxe',
    name: 'Poleaxe',
    aliases: ['Pollaxe'],
    year: 1400,
    period: 'Late medieval',
    region: 'Western Europe',
    material: 'Steel hammer, axe, spike, and langets on wooden shaft',
    battlefieldRole: 'Armored foot combat weapon for knights and men-at-arms',
    image: imageInfo({
      file: 'Poleaxe_MET_14.25.340.jpg',
      caption: 'Late medieval poleaxe.',
      date: '15th century',
      source: 'Metropolitan Museum of Art / Wikimedia Commons',
      note: 'Surviving object representative of elite armored combat weapons.'
    }),
    summary: 'The poleaxe was a specialized late medieval weapon for armored foot combat, combining reach, impact, hooks, and thrusting points.',
    design: 'Poleaxes typically joined a top spike with an axe blade or hammer face and a rear beak. Metal langets reinforced the shaft against cuts and helped keep the head attached under heavy impact.',
    use: 'Knights and men-at-arms used poleaxes in duels, tournaments, and battlefield fighting on foot. Techniques included thrusting, hooking, hammering, shaft strikes, and grappling transitions.',
    development: 'The weapon developed as plate armor became more complete. It gave an armored fighter ways to exploit weak points, unbalance an opponent, and deliver force through hard surfaces.',
    variations: 'Some poleaxes favored axe blades, others hammers or beaks. Regional fighting traditions and tournament rules influenced exact forms.',
    examples: 'Fight books and surviving poleaxes show that the weapon belonged to a refined martial culture, not merely to brute force.',
    legacy: 'The poleaxe is one of the clearest expressions of late medieval armored combat: technical, close, and built around the strengths and weaknesses of plate harness.',
    relatedEntries: {
      weaponsArmor: ['War hammer', 'Halberd', 'Plate armor', 'Gothic plate armor']
    }
  }),
  weapon({
    id: 'bill-billhook',
    name: 'Bill / Billhook',
    aliases: ['Billhook', 'English bill'],
    year: 1400,
    period: 'Late medieval',
    region: 'England and Western Europe',
    material: 'Iron or steel hooked blade on a wooden shaft',
    battlefieldRole: 'Infantry polearm for cutting, hooking, and formation fighting',
    image: imageInfo({
      file: 'Bill_(weapon).jpg',
      caption: 'Medieval bill weapon with hooked blade.',
      date: 'late medieval form',
      source: 'Wikimedia Commons',
      note: 'Polearm type with agricultural-tool ancestry; examples varied widely.'
    }),
    summary: 'The bill was a hooked polearm especially associated with English infantry, adapted from cutting tools into battlefield equipment.',
    design: 'A military bill had a long shaft and a complex blade with cutting edge, hook, and often a thrusting spike. Its form allowed a fighter to chop, pull, snag reins, or drag at armor and limbs.',
    use: 'Billmen fought in infantry formations alongside archers and other troops. The hook made the weapon useful in rough close combat where a simple thrusting spear was less flexible.',
    development: 'The bill’s roots in agricultural cutting tools show how medieval armies adapted familiar implements into military polearms. By the fifteenth century it was a recognizable infantry weapon in English service.',
    variations: 'Bills could be plain or highly specialized, with different hook shapes and spikes. Continental relatives overlap with glaives, voulges, and other polearms.',
    examples: 'Muster records, artwork, and surviving heads point to a weapon used by common soldiers, town forces, and royal armies rather than only aristocratic fighters.',
    legacy: 'The bill shows the practical side of late medieval infantry warfare: reach, hooks, and formation discipline could matter as much as noble swordplay.',
    relatedEntries: {
      events: ['Battle of Agincourt'],
      locations: ['Kingdom of England'],
      weaponsArmor: ['Halberd', 'Spear', 'Longbow']
    }
  }),
  weapon({
    id: 'falchion',
    name: 'Falchion',
    aliases: ['Single-edged sword'],
    year: 1250,
    period: 'High medieval',
    region: 'Western Europe',
    material: 'Steel single-edged blade with sword hilt',
    battlefieldRole: 'Cutting sword or sidearm',
    image: imageInfo({
      file: 'Conyers_falchion.jpg',
      caption: 'The Conyers falchion, a surviving medieval single-edged sword.',
      date: '13th century',
      source: 'Wikimedia Commons',
      note: 'Surviving object; legendary associations around individual falchions require caution.'
    }),
    summary: 'The falchion was a medieval single-edged sword, often with a broad cutting blade and hilt construction related to other knightly swords.',
    design: 'Falchions varied from cleaver-like blades to slimmer curved forms. Unlike a simple tool, a falchion usually had sword-like fittings, including guard and pommel.',
    use: 'The weapon emphasized cutting power and could serve mounted or foot fighters. Manuscript art shows falchions in the hands of both elite and non-elite figures, though artistic convention complicates exact social interpretation.',
    development: 'Falchions appear in the high Middle Ages and survive in small numbers compared with double-edged swords. Their rarity in collections may reflect survival patterns as much as original battlefield frequency.',
    variations: 'Examples such as the Conyers falchion and Thorpe falchion show very different blade outlines. Literary and visual references add further complexity to the category.',
    examples: 'The Conyers falchion is tied to local ceremony and legend, while museum examples reveal skilled blade-making rather than crude chopping tools.',
    legacy: 'The falchion broadens the image of medieval swords beyond the double-edged knightly type, showing a wider range of cutting weapons in European martial culture.',
    relatedEntries: {
      weaponsArmor: ['Arming Sword', 'Seax', 'Dagger / rondel dagger']
    }
  }),
  weapon({
    id: 'war-bow',
    name: 'War Bow',
    aliases: ['Medieval war bow'],
    year: 1300,
    period: 'High and late medieval',
    region: 'Europe',
    material: 'Wooden bow with strong draw weight',
    battlefieldRole: 'High-powered military bow',
    image: imageInfo({
      file: 'Battle_of_crecy_froissart.jpg',
      caption: 'Archers in a later manuscript depiction of the Battle of Crecy.',
      date: '15th-century manuscript image',
      source: 'Bibliotheque nationale de France / Wikimedia Commons',
      note: 'Later manuscript depiction; used here to represent military archery rather than one preserved bow.'
    }),
    summary: 'War bow is a practical umbrella term for powerful bows used in medieval warfare, including but not limited to the English longbow.',
    design: 'A war bow was built for military draw weight and arrow delivery rather than hunting convenience. Construction depended on local wood, bowyer skill, and the archer’s training.',
    use: 'War bows could disrupt formations, wound horses, create tactical pressure, and force enemies to fight under missile threat. Their success depended on supply, discipline, and integration with other arms.',
    development: 'European war bows ranged from early medieval self bows to the highly organized English longbow system. Military archery changed with armor, battlefield doctrine, and state recruitment.',
    variations: 'Welsh and English longbows, Scandinavian bows, and other regional forms differed in size, draw weight, and tactical use. The term should not flatten every bow into one type.',
    examples: 'The Mary Rose bows are later survivals that illuminate powerful bow use near the medieval-early modern transition, while chronicles and battlefields reveal earlier military archery contexts.',
    legacy: 'The war bow helps separate the technical category of high-powered military archery from the narrower cultural fame of the English longbow.',
    relatedEntries: {
      weaponsArmor: ['Longbow', 'Crossbow', 'Pavise'],
      events: ['Battle of Crécy', 'Battle of Agincourt']
    }
  }),
  weapon({
    id: 'javelin-throwing-spear',
    name: 'Javelin / Throwing Spear',
    aliases: ['Throwing spear', 'Javelin'],
    year: 900,
    period: 'Early to high medieval',
    region: 'Europe',
    material: 'Light wooden shaft with iron head',
    battlefieldRole: 'Thrown missile weapon for skirmishing and opening attacks',
    image: imageInfo({
      file: 'Anglo-Saxon_spearheads_(FindID_104346).jpg',
      caption: 'Early medieval spearheads; lighter forms could be used as throwing spears.',
      date: 'early medieval',
      source: 'Portable Antiquities Scheme / Wikimedia Commons',
      note: 'Archaeological spearheads without surviving shafts; exact use must be inferred cautiously.'
    }),
    summary: 'Javelins and throwing spears gave medieval fighters a short-range missile option before close combat.',
    design: 'Throwing spears were generally lighter than thrusting spears or lances, with shafts suited to casting by hand. Archaeology rarely preserves shafts, so head size and context are important but imperfect clues.',
    use: 'Skirmishers, mounted raiders, and infantry could throw spears to disorder opponents, wound horses, or create openings before a melee. In some regions, thrown spears remained part of aristocratic and retinue warfare.',
    development: 'The weapon continued older European throwing-spear traditions into the early Middle Ages. Its prominence varied by region as bows, crossbows, and heavier infantry formations became more common.',
    variations: 'Terms in medieval sources can be imprecise, and the same spearhead might be interpreted differently depending on context. Scandinavian, Anglo-Saxon, and Frankish finds show broad variation.',
    examples: 'Burial finds and narrative sources show that throwing weapons belonged to practical battlefield preparation rather than only ceremonial display.',
    legacy: 'The javelin reminds us that medieval combat often began before sword range: missiles, disruption, and movement shaped the fight long before the final clash.',
    relatedEntries: {
      weaponsArmor: ['Spear', 'Shield', 'Viking sword']
    }
  }),
  armor({
    id: 'mail-armor',
    name: 'Mail Armor',
    aliases: ['Chainmail', 'Mail'],
    year: 1000,
    period: 'Early to high medieval',
    region: 'Europe',
    material: 'Interlinked iron or steel rings, often riveted',
    battlefieldRole: 'Flexible body protection against cuts and some thrusts',
    image: imageInfo({
      file: 'Italian_-_Mail_-_Walters_51575.jpg',
      caption: 'Mail armor preserved in the Walters Art Museum.',
      source: 'Walters Art Museum / Wikimedia Commons',
      note: 'Surviving mail; ring pattern and construction vary by date and region.'
    }),
    summary: 'Mail armor used thousands of interlinked metal rings to protect the body while preserving flexibility.',
    design: 'Good mail was usually riveted, with each ring joined to neighboring rings in a dense pattern. It required enormous labor and metal, making it valuable equipment even when visually plain.',
    protection: 'Mail was strong against cuts and many glancing blows, especially when worn over padding. It was weaker against heavy blunt trauma and focused thrusts, so gambesons and later plates supplemented it.',
    development: 'Mail was inherited from ancient and early medieval traditions but became the dominant elite armor of much of medieval Europe before plate harness matured.',
    variations: 'Mail could appear as shirts, sleeves, mittens, chausses, coifs, and voiders under plate. Regional ring size, riveting style, and tailoring changed over time.',
    examples: 'Mail appears constantly in manuscripts, grave finds, and museum collections. It remained useful beneath plate armor because it protected gaps at the joints.',
    legacy: 'Mail armor is central to understanding medieval protection because it connected early medieval warrior elites to later knights in plate through a long technological continuum.',
    relatedEntries: {
      weaponsArmor: ['Hauberk', 'Mail coif', 'Gambeson', 'Plate armor']
    }
  }),
  armor({
    id: 'mail-coif',
    name: 'Mail Coif',
    aliases: ['Chainmail coif'],
    year: 1150,
    period: 'High medieval',
    region: 'Europe',
    material: 'Riveted iron or steel mail rings',
    battlefieldRole: 'Flexible head, neck, and shoulder protection',
    image: imageInfo({
      file: 'Cofia_de_mallas_de_Tofta.jpg',
      caption: 'Mail coif from Tofta Church.',
      date: 'medieval',
      source: 'Wikimedia Commons',
      note: 'Surviving mail coif; exact dating depends on object context.'
    }),
    summary: 'The mail coif protected the head, neck, and shoulders, often worn under or with a helmet.',
    design: 'A mail coif was shaped from interlinked rings to cover the head and drape over the shoulders. Some were attached to hauberks, while others were separate garments.',
    protection: 'The coif guarded areas that helmets did not fully cover, especially the neck and jaw. Padding beneath it was essential to reduce impact and make the mail wearable.',
    development: 'Coifs were common in the high medieval period, especially with nasal helmets, great helms, and transitional head defenses. Later aventails attached to bascinets took over some of the same role.',
    variations: 'Some coifs included ventails that could fasten across the face. Others left more of the face open, depending on helmet pairing and date.',
    examples: 'Manuscripts and effigies frequently show coifs beneath helmets, while surviving examples reveal the craft and weight of flexible metal head protection.',
    legacy: 'The mail coif illustrates the layered nature of medieval armor: no single helmet solved every problem of visibility, breathing, comfort, and defense.',
    relatedEntries: {
      weaponsArmor: ['Mail Armor', 'Hauberk', 'Nasal helmet', 'Great helm']
    }
  }),
  armor({
    id: 'hauberk',
    name: 'Hauberk',
    aliases: ['Mail shirt'],
    year: 1100,
    period: 'High medieval',
    region: 'Europe',
    material: 'Riveted mail rings',
    battlefieldRole: 'Main body armor for knights and other armored fighters',
    image: imageInfo({
      file: 'Italian_-_Mail_-_Walters_51575.jpg',
      caption: 'Mail shirt representative of hauberk construction.',
      source: 'Walters Art Museum / Wikimedia Commons',
      note: 'Surviving mail garment; hauberks varied in length and sleeve coverage.'
    }),
    summary: 'The hauberk was a mail shirt, often reaching to the thighs or knees, that formed the core body armor of many high medieval fighters.',
    design: 'A hauberk used fitted mail panels to cover torso, arms, and sometimes hands. Slits allowed riding, while sleeves and attached mittens varied by date and wealth.',
    protection: 'The hauberk protected against sword cuts, light spear strikes, and many battlefield hazards. It worked best over a padded garment that absorbed force and prevented ring bruising.',
    development: 'Hauberks became strongly associated with Norman and knightly warfare from the eleventh century onward. As plate defenses appeared, hauberks shortened or became part of layered armor systems.',
    variations: 'Some were sleeveless or short; elite versions had long sleeves and integrated head or hand protection. Regional tailoring reflects both fighting style and available resources.',
    examples: 'The Bayeux Tapestry’s mail-clad warriors show the hauberk’s central place in eleventh-century warfare, while later effigies show its persistence beneath plates.',
    legacy: 'The hauberk was not primitive armor waiting for plate to arrive. For centuries it was expensive, flexible, repairable, and central to elite military identity.',
    relatedEntries: {
      events: ['Battle of Hastings'],
      weaponsArmor: ['Mail Armor', 'Gambeson', 'Surcoat']
    }
  }),
  armor({
    id: 'gambeson',
    name: 'Gambeson',
    aliases: ['Padded jack', 'Aketon'],
    year: 1200,
    period: 'High and late medieval',
    region: 'Europe',
    material: 'Layered linen, wool, or textile padding',
    battlefieldRole: 'Padded armor and under-armor shock absorption',
    image: imageInfo({
      file: 'Morgan_Bible_10r_detail.jpg',
      caption: 'Quilted textile armor in a detail from the Morgan Bible.',
      date: '13th century manuscript',
      source: 'Morgan Library & Museum / Wikimedia Commons',
      note: 'Manuscript depiction; useful for showing padded armor in use.'
    }),
    summary: 'The gambeson was padded textile armor worn alone by some fighters and beneath mail or plate by others.',
    design: 'Gambesons were made from layers of linen, wool, or other textiles stitched into padded channels. Thickness, cut, and fastening varied according to wealth and intended use.',
    protection: 'Padding absorbed impact, reduced chafing, and made mail or plate usable for long periods. A substantial gambeson could also defend against cuts and light missiles when worn by infantry.',
    development: 'Textile armor was indispensable throughout the Middle Ages but is underrepresented in museums because cloth decays. Its role grew more visible as mail and plate systems required carefully fitted underlayers.',
    variations: 'Aketons, jacks, arming doublets, and padded coats overlap in function but differ by date and region. Some were civilian-looking, while others were explicitly military garments.',
    examples: 'Manuscript images and written accounts preserve evidence for padded armor that archaeology often loses. Its absence from displays can distort how armored combat actually worked.',
    legacy: 'The gambeson highlights the importance of textiles in warfare. Medieval protection was not only metal; it was a layered system of cloth, leather, mail, and plate.',
    relatedEntries: {
      weaponsArmor: ['Mail Armor', 'Hauberk', 'Plate armor', 'Brigandine']
    }
  }),
  armor({
    id: 'surcoat',
    name: 'Surcoat',
    aliases: ['Coat over armor'],
    year: 1250,
    period: 'High medieval',
    region: 'Western Europe and the Crusader states',
    material: 'Textile garment worn over armor',
    battlefieldRole: 'Identification, display, and protection from sun or weather',
    image: imageInfo({
      file: 'Cpg359_46v.jpg',
      caption: 'Manuscript image showing surcoats worn over armor.',
      date: 'medieval manuscript',
      source: 'Wikimedia Commons',
      note: 'Manuscript depiction; heraldic and garment details may be stylized.'
    }),
    summary: 'The surcoat was a textile garment worn over armor, strongly associated with heraldry, crusading imagery, and knightly display.',
    design: 'Surcoats were sleeveless or short-sleeved garments worn over mail and later over some plate combinations. They could carry heraldic colors, crosses, or family devices.',
    protection: 'A surcoat was not armor in the same sense as mail or plate, but it protected metal from sun and weather, reduced heat, and helped identify fighters in visually crowded battles.',
    development: 'The garment became especially visible in the twelfth and thirteenth centuries. Crusading contexts helped spread images of armored riders wearing cloth over mail in hot climates and ceremonial settings.',
    variations: 'Surcoats ranged from plain practical garments to richly heraldic display. Military orders used distinctive crosses and colors to communicate corporate identity.',
    examples: 'Seals, effigies, and manuscripts show surcoats as part of the visual grammar of knighthood, lordship, and crusading.',
    legacy: 'The surcoat shows that battlefield equipment communicated identity as well as providing protection. Cloth, color, and heraldry mattered in a world of armored faces.',
    relatedEntries: {
      events: ['Third Crusade'],
      locations: ['Kingdom of Jerusalem'],
      weaponsArmor: ['Hauberk', 'Great helm', 'Heater shield']
    }
  }),
  armor({
    id: 'nasal-helmet',
    name: 'Nasal Helmet',
    aliases: ['Nasal helm'],
    year: 1050,
    period: 'Early to high medieval',
    region: 'Europe',
    material: 'Iron or steel skull with nasal guard',
    battlefieldRole: 'Head protection with open face and nose guard',
    image: imageInfo({
      file: 'KHM_Wien_A_41_-_Moravian_nasal_helmet,_11th_century_transparent.png',
      caption: 'Eleventh-century nasal helmet.',
      date: '11th century',
      source: 'Kunsthistorisches Museum Vienna / Wikimedia Commons',
      note: 'Surviving helmet; one regional example of a widespread type.'
    }),
    summary: 'The nasal helmet protected the skull and nose while leaving the eyes and mouth open for visibility and breathing.',
    design: 'Most nasal helmets had a conical or rounded metal skull and a projecting nasal bar. They could be worn with a mail coif to cover the rest of the head and neck.',
    protection: 'The nasal bar guarded the center of the face without enclosing the wearer. This preserved vision and ventilation but left cheeks and mouth less protected than later enclosed helmets.',
    development: 'Nasal helmets were common in the eleventh and twelfth centuries, visible in Norman, Anglo-Saxon, Scandinavian, and Central European contexts.',
    variations: 'Some were one-piece forged helmets; others were assembled from plates. Shapes varied from tall conical forms to rounded caps.',
    examples: 'The Bayeux Tapestry famously shows many nasal helmets in the context of 1066, making the type central to modern visual memory of Norman warfare.',
    legacy: 'The nasal helmet marks a transitional balance between open helmets and the more enclosed head defenses of the crusading and late medieval periods.',
    relatedEntries: {
      events: ['Battle of Hastings'],
      weaponsArmor: ['Mail coif', 'Great helm', 'Kite shield']
    }
  }),
  armor({
    id: 'kettle-hat',
    name: 'Kettle Hat / Kettle Helm',
    aliases: ['Kettle helm', 'Chapel-de-fer'],
    year: 1250,
    period: 'High and late medieval',
    region: 'Europe',
    material: 'Iron or steel helmet with brim',
    battlefieldRole: 'Infantry and cavalry head protection against downward blows and missiles',
    image: imageInfo({
      file: 'Clevelandart_1916.1565.jpg',
      caption: 'Medieval kettle hat in the Cleveland Museum of Art.',
      date: '15th century',
      source: 'Cleveland Museum of Art / Wikimedia Commons',
      note: 'Surviving object; kettle hats had many brim and skull shapes.'
    }),
    summary: 'The kettle hat was a brimmed helmet widely used by infantry and other soldiers because it protected the head while preserving sight and hearing.',
    design: 'Its defining feature was a broad brim attached to a metal skull. The brim deflected downward cuts, stones, arrows, and debris, making it useful in sieges and infantry fighting.',
    protection: 'The open face gave excellent awareness but less facial defense than a bascinet or great helm. Soldiers could combine it with mail, padding, or other head protection.',
    development: 'Kettle hats appeared in the high Middle Ages and remained common into the fifteenth century. Their practicality made them popular beyond elite cavalry circles.',
    variations: 'Some had shallow bowls; others had deeper skulls or more pronounced brims. Later forms could be made from one piece of metal or carefully joined plates.',
    examples: 'Manuscripts, town arsenals, and museum survivals show kettle hats used by archers, crossbowmen, infantry, and occasionally mounted troops.',
    legacy: 'The kettle hat is one of the clearest examples of sensible medieval design: broad protection, low complexity, and excellent visibility.',
    relatedEntries: {
      weaponsArmor: ['Longbow', 'Crossbow', 'Pavise']
    }
  }),
  armor({
    id: 'great-helm',
    name: 'Great Helm',
    aliases: ['Great helmet', 'Pot helm'],
    year: 1250,
    period: 'High medieval',
    region: 'Western Europe and the Crusader states',
    material: 'Iron or steel plates riveted into enclosed helmet',
    battlefieldRole: 'Enclosed head protection for mounted knights and men-at-arms',
    image: imageInfo({
      file: 'Topfhelm_DHM_transparent.png',
      caption: 'Great helm, or topfhelm, from the high medieval period.',
      date: '13th-14th century type',
      source: 'Deutsches Historisches Museum / Wikimedia Commons',
      note: 'Surviving helmet type; visibility and breathing were limited compared with open helmets.'
    }),
    summary: 'The great helm enclosed the head and face, becoming one of the most recognizable helmets of crusader and high medieval knightly warfare.',
    design: 'Great helms were built from riveted plates with narrow eye slits and breathing holes. They were often worn over a mail coif and padded arming cap.',
    protection: 'The helmet gave strong facial protection in the shock of mounted combat, but it limited vision, hearing, and ventilation. Fighters might remove or lift it outside the immediate charge.',
    development: 'The great helm developed from earlier face-protecting helmets in the late twelfth and thirteenth centuries and became common in the iconography of crusading knights.',
    variations: 'Flat-topped and later sugarloaf forms differed in shape and deflection. Heraldic crests and painted decoration appeared in tournament and display contexts.',
    examples: 'Seals, effigies, manuscripts, and surviving helms connect the great helm to aristocratic cavalry, crusading imagery, and the culture of heraldry.',
    legacy: 'The great helm became an enduring image of medieval knighthood, though its practical use belonged to particular tactical moments rather than all-day battlefield comfort.',
    relatedEntries: {
      events: ['Third Crusade'],
      locations: ['Kingdom of Jerusalem'],
      weaponsArmor: ['Mail coif', 'Surcoat', 'Heater shield']
    }
  }),
  armor({
    id: 'bascinet',
    name: 'Bascinet',
    aliases: ['Basinet'],
    year: 1375,
    period: 'Late medieval',
    region: 'Western Europe',
    material: 'Steel skull, often with visor and mail aventail',
    battlefieldRole: 'Head protection for knights and men-at-arms',
    image: imageInfo({
      file: 'Bascinet_MET_DT11527.jpg',
      caption: 'Late medieval bascinet with visor.',
      date: '14th-15th century',
      source: 'Metropolitan Museum of Art / Wikimedia Commons',
      note: 'Surviving helmet; visor and aventail combinations varied.'
    }),
    summary: 'The bascinet was a late medieval helmet that replaced many great helm functions with a closer-fitting skull and movable visor options.',
    design: 'A bascinet usually had a pointed or rounded steel skull and could be fitted with a visor. Many used a mail aventail attached by vervelles to protect the neck and shoulders.',
    protection: 'The helmet balanced protection with improved mobility and visibility. A raised visor allowed better breathing and awareness, while a closed visor protected the face in combat.',
    development: 'The bascinet became widespread in the fourteenth century as armor systems became more articulated. It suited mounted and foot combat better than the older barrel-like great helm.',
    variations: 'Open-faced, klappvisor, side-pivot visor, and hounskull forms all belong to the broad bascinet family.',
    examples: 'Effigies, battle art, and museum helmets show bascinets across Europe from the Hundred Years’ War into the early fifteenth century.',
    legacy: 'The bascinet demonstrates late medieval armor’s move toward fitted, articulated, and adaptable head protection rather than simple enclosure.',
    relatedEntries: {
      events: ['Battle of Agincourt'],
      weaponsArmor: ['Hounskull bascinet', 'Plate armor', 'Mail coif']
    }
  }),
  armor({
    id: 'hounskull-bascinet',
    name: 'Hounskull Bascinet',
    aliases: ['Pig-faced bascinet', 'Houndskull bascinet'],
    year: 1400,
    period: 'Late medieval',
    region: 'Western Europe',
    material: 'Steel helmet with projecting visor',
    battlefieldRole: 'Visored head protection for armored men-at-arms',
    image: imageInfo({
      file: 'Bascinet_MET_DT11527.jpg',
      caption: 'Bascinet with projecting visor related to hounskull forms.',
      date: '14th-15th century',
      source: 'Metropolitan Museum of Art / Wikimedia Commons',
      note: 'Representative visored bascinet; hounskull shapes varied in profile.'
    }),
    summary: 'The hounskull bascinet was a visored helmet whose projecting facepiece helped deflect blows and improve breathing space.',
    design: 'Its visor projected forward in a beak-like profile, sometimes called houndskull or pig-faced in modern terminology. The shape could deflect weapon points away from the face.',
    protection: 'The hounskull offered better facial defense than an open bascinet while retaining the fitted skull and aventail system. Visibility remained limited through narrow slits.',
    development: 'The form belongs especially to the late fourteenth and early fifteenth centuries, a period of intense experimentation in visored helmets and plate harness.',
    variations: 'Some hounskull visors were long and pointed; others were shorter. Regional armor styles and workshop traditions shaped the profile.',
    examples: 'Manuscript images and surviving helmets connect the hounskull to the armored men-at-arms of the Hundred Years’ War era.',
    legacy: 'The hounskull bascinet is one of the most distinctive products of late medieval armor engineering: functional, visually memorable, and tightly connected to plate warfare.',
    relatedEntries: {
      weaponsArmor: ['Bascinet', 'Plate armor', 'Poleaxe']
    }
  }),
  armor({
    id: 'sallet',
    name: 'Sallet',
    aliases: ['Salade'],
    year: 1450,
    period: 'Late medieval',
    region: 'Central and Western Europe',
    material: 'Steel helmet, often with tail and visor',
    battlefieldRole: 'Late medieval head protection for infantry and men-at-arms',
    image: imageInfo({
      file: 'Sallet_"in_the_Venetian_Style"_MET_DP22327.jpg',
      caption: 'Late medieval sallet in the Venetian style.',
      date: 'late 15th century',
      source: 'Metropolitan Museum of Art / Wikimedia Commons',
      note: 'Late medieval helmet type near the transition into early modern armor fashions.'
    }),
    summary: 'The sallet was a late medieval helmet with a swept-back tail and, in many forms, a visor or bevor pairing.',
    design: 'Sallets often had a rounded skull extending backward to protect the neck. Some had visors; others left the face open and relied on a separate bevor for throat and lower-face protection.',
    protection: 'The helmet deflected downward blows and gave good head and neck coverage while preserving mobility. Open forms were popular with infantry, while visored examples served armored elites.',
    development: 'The sallet emerged in the fifteenth century and belongs to late medieval warfare, especially in German, Italian, and Burgundian contexts. Later parade and early modern forms should not be confused with battlefield sallets.',
    variations: 'German sallets tend to have pronounced tails, while Italian forms often look rounder. Regional styles could be both practical and fashionable.',
    examples: 'Museum sallets survive in large numbers compared with earlier helmets, reflecting late medieval armor production and collecting patterns.',
    legacy: 'The sallet captures the elegance and specialization of late medieval armor at the edge of the Renaissance without ceasing to belong to medieval battlefield culture.',
    relatedEntries: {
      weaponsArmor: ['Gothic plate armor', 'Plate armor', 'Bascinet']
    }
  }),
  armor({
    id: 'brigandine',
    name: 'Brigandine',
    aliases: ['Brigandine armor'],
    year: 1450,
    period: 'Late medieval',
    region: 'Europe',
    material: 'Small metal plates riveted inside textile or leather covering',
    battlefieldRole: 'Flexible torso armor for soldiers and elites',
    image: imageInfo({
      file: 'Jakob_von_Ems_brigandine_by_Wendelin_Boeheim_(137935637).jpg',
      caption: 'Brigandine armor with visible rivet pattern.',
      date: 'late medieval style',
      source: 'Wikimedia Commons',
      note: 'Image illustrates plate-riveted textile armor; surviving examples vary.'
    }),
    summary: 'The brigandine protected the torso with many small overlapping plates hidden beneath a textile or leather outer layer.',
    design: 'A brigandine looked like a fitted garment from the outside, but rows of rivets revealed the metal plates inside. It could be tailored closely to the body and worn by a range of soldiers.',
    protection: 'It gave flexible torso protection that was easier to fit and sometimes cheaper than a full breastplate. It worked well with arm defenses, helmets, and mail at vulnerable gaps.',
    development: 'Brigandines became common in the fourteenth and fifteenth centuries as plate defenses spread beyond the highest elite. They reflect the broadening market for effective armor.',
    variations: 'Some were simple military coats; others had velvet covers, decorative rivets, or noble-quality tailoring. The number and shape of internal plates varied widely.',
    examples: 'Surviving brigandines from European arsenals and archaeological contexts show how hidden armor could be practical and visually refined at the same time.',
    legacy: 'The brigandine shows that late medieval armor was not only shining full harness. Flexible, textile-covered plate protected many fighters whose equipment sat between militia kit and princely armor.',
    relatedEntries: {
      weaponsArmor: ['Coat of plates', 'Gambeson', 'Plate armor']
    }
  }),
  armor({
    id: 'coat-of-plates',
    name: 'Coat of Plates',
    aliases: ['Pair of plates'],
    year: 1300,
    period: 'High to late medieval',
    region: 'Europe',
    material: 'Metal plates riveted inside textile or leather cover',
    battlefieldRole: 'Torso reinforcement over mail or padding',
    image: imageInfo({
      file: 'Visby_coat_of_plates.jpg',
      caption: 'Coat-of-plates remains associated with the Battle of Visby finds.',
      date: '14th century',
      source: 'Wikimedia Commons',
      note: 'Archaeological armor remains; individual battlefield ownership is unknown.'
    }),
    summary: 'The coat of plates used larger internal plates to reinforce the torso before fully shaped breastplates became common.',
    design: 'It consisted of overlapping iron or steel plates riveted to the inside of a textile or leather garment. From the outside, rivet heads and garment outline were often more visible than the plates themselves.',
    protection: 'The coat of plates strengthened the chest and abdomen against thrusts and impact while preserving some flexibility. It was often worn over mail and padding.',
    development: 'The form became prominent in the thirteenth and fourteenth centuries, especially during the transitional period between mail-dominated armor and full plate harness.',
    variations: 'Plate size, arrangement, and garment cut varied. The Visby finds are especially important because they preserve battlefield-related armor fragments from 1361.',
    examples: 'The Battle of Visby material gives rare archaeological insight into armor worn by combatants outside the most idealized knightly images.',
    legacy: 'The coat of plates is crucial for understanding armor evolution: plate did not suddenly replace mail, but grew through layered experiments in torso defense.',
    relatedEntries: {
      weaponsArmor: ['Brigandine', 'Mail Armor', 'Plate armor']
    }
  }),
  armor({
    id: 'plate-armor',
    name: 'Plate Armor',
    aliases: ['Plate harness', 'Full plate armor'],
    year: 1400,
    period: 'Late medieval',
    region: 'Western and Central Europe',
    material: 'Shaped steel plates with straps, rivets, mail, and textile foundations',
    battlefieldRole: 'Articulated full-body protection for elites and men-at-arms',
    image: imageInfo({
      file: 'Avant_Armour_MET_DP337102.jpg',
      caption: 'The Avant armor, a fifteenth-century plate harness.',
      date: 'c. 1440',
      source: 'Metropolitan Museum of Art / Wikimedia Commons',
      note: 'Surviving late medieval harness; elite armor, not typical of every soldier.'
    }),
    summary: 'Plate armor was an articulated system of shaped metal defenses that gave late medieval elites strong protection while preserving mobility.',
    design: 'A full harness combined helmet, breastplate, backplate, arm defenses, gauntlets, leg defenses, mail voiders, straps, and textile arming garments. Good armor was fitted to the wearer, making it both protective and mobile.',
    protection: 'Plate deflected cuts and resisted many missiles and thrusts, but it had gaps at joints, visor, hands, and underarms. Combat against plate often relied on impact weapons, grappling, half-swording, and dagger work.',
    development: 'Plate armor grew gradually from mail reinforcements, coats of plates, splinted limbs, and shaped breastplates in the thirteenth and fourteenth centuries. By the fifteenth century, regional armor centers produced highly refined harnesses.',
    variations: 'Italian, German, English, and Burgundian styles differed in silhouette, fluting, helmet pairing, and decorative treatment. Battlefield, tournament, and parade harnesses must be distinguished.',
    examples: 'Surviving harnesses in major museum collections reveal elite craftsmanship, while inventories and battlefield finds show that partial plate was far more common than complete princely armor.',
    legacy: 'Plate armor represents one of medieval Europe’s most sophisticated technologies: a wearable engineering system built around violence, status, craft, and the human body.',
    relatedEntries: {
      events: ['Battle of Agincourt'],
      weaponsArmor: ['Gothic plate armor', 'Longsword', 'Poleaxe', 'War hammer']
    }
  }),
  armor({
    id: 'gothic-plate-armor',
    name: 'Gothic Plate Armor',
    aliases: ['Gothic armor'],
    year: 1480,
    period: 'Late medieval',
    region: 'German-speaking Central Europe',
    material: 'Fluted steel plate harness',
    battlefieldRole: 'Elite late medieval armor emphasizing deflection and style',
    image: imageInfo({
      file: 'Gothic_armor,_Kunsthistorisches_Museum.jpg',
      caption: 'Late medieval Gothic-style plate armor.',
      date: 'late 15th century',
      source: 'Kunsthistorisches Museum / Wikimedia Commons',
      note: 'Late medieval armor style; some surviving examples were adapted or restored later.'
    }),
    summary: 'Gothic plate armor was a late medieval Central European armor style known for fluting, pointed forms, and sharply articulated surfaces.',
    design: 'The fluting on Gothic armor stiffened plates and helped deflect blows while creating a distinctive visual rhythm. Sallets, pointed sabatons, narrow waists, and complex gauntlets often formed part of the style.',
    protection: 'Like other full harness, Gothic armor protected through shaped steel, articulation, and careful fit. Its ridges and contours were not merely decorative; they interacted with deflection and structural strength.',
    development: 'The style flourished in the later fifteenth century, especially in German armor centers such as Augsburg and Nuremberg. It remains medieval in context even though it approaches the Renaissance chronologically.',
    variations: 'Not all fluted armor is identical, and not every late fifteenth-century harness was Gothic. Italian armor often favored smoother rounded surfaces by comparison.',
    examples: 'Museum harnesses attributed to German workshops show how armor could combine battlefield function, elite fashion, and courtly display.',
    legacy: 'Gothic plate armor is a high point of late medieval metalwork, showing how protection, aesthetics, and status merged in the final generations of medieval harness.',
    relatedEntries: {
      weaponsArmor: ['Plate armor', 'Sallet', 'Poleaxe']
    }
  }),
  armor({
    id: 'shield',
    name: 'Shield',
    aliases: ['Medieval shield'],
    year: 1100,
    period: 'Early to late medieval',
    region: 'Europe',
    material: 'Wood, leather, rawhide, textile, metal fittings, and paint',
    battlefieldRole: 'Hand-held defense and identity display',
    image: imageInfo({
      file: 'Shield_MET_14.25.1778.jpg',
      caption: 'Medieval shield in the Metropolitan Museum of Art.',
      source: 'Metropolitan Museum of Art / Wikimedia Commons',
      note: 'Surviving shields are rarer than manuscript and heraldic depictions.'
    }),
    summary: 'The shield was a defensive tool and visual marker that changed dramatically across the medieval period.',
    design: 'Medieval shields were usually made from wood faced with leather, textile, or gesso and strengthened with straps, grips, or metal fittings. Shape depended on tactical use and armor development.',
    protection: 'A shield could catch arrows, turn cuts, block spears, and create a mobile wall in formation. Its value declined for some heavily armored elites as plate harness improved, but infantry shields remained useful.',
    development: 'Round and oval early medieval shields gave way in many knightly contexts to kite shields and heater shields, while pavises and bucklers served more specialized roles.',
    variations: 'Round shields, kite shields, heater shields, bucklers, and pavises should not be treated as one object. Each answered a different tactical and social need.',
    examples: 'Heraldry made shields central to identity. Painted arms on shields helped distinguish lords, households, and political allegiance in war and ceremony.',
    legacy: 'The shield is both practical equipment and one of the main surfaces through which medieval warfare became visually legible.',
    relatedEntries: {
      weaponsArmor: ['Kite shield', 'Heater shield', 'Buckler', 'Pavise']
    }
  }),
  armor({
    id: 'kite-shield',
    name: 'Kite Shield',
    aliases: ['Kite-shaped shield'],
    year: 1050,
    period: 'Early to high medieval',
    region: 'Western Europe',
    material: 'Wood with leather or textile facing',
    battlefieldRole: 'Large shield for mounted and infantry fighters',
    image: imageInfo({
      file: 'Normans_Bayeux.jpg',
      caption: 'Kite shields carried by Norman fighters in the Bayeux Tapestry.',
      date: 'late 11th century embroidery',
      source: 'Bayeux Museum / Wikimedia Commons',
      note: 'Near-contemporary depiction of eleventh-century shield forms.'
    }),
    summary: 'The kite shield was a long, tapering shield strongly associated with eleventh- and twelfth-century cavalry and infantry.',
    design: 'Its rounded top and tapering lower end protected a large area of the body, including the legs of a mounted rider. It was usually strapped to the arm rather than held only by a central boss.',
    protection: 'The shield gave broad coverage before full leg armor became common. It could be used in mounted charges, infantry shield walls, and close fighting.',
    development: 'Kite shields appear prominently in the eleventh century and became a visual signature of Norman warfare. As armor and heraldry changed, shorter heater shields gradually replaced them in many elite contexts.',
    variations: 'Some were very long; others were shorter transitional forms. Painted decoration and early heraldic symbols became increasingly important.',
    examples: 'The Bayeux Tapestry preserves the most famous visual record of kite shields in action during the Norman Conquest.',
    legacy: 'The kite shield anchors the visual world of 1066 and the early crusading period, when mounted warriors still needed broad shield coverage alongside mail.',
    relatedEntries: {
      events: ['Battle of Hastings'],
      people: ['William the Conqueror'],
      weaponsArmor: ['Nasal helmet', 'Lance', 'Mail Armor']
    }
  }),
  armor({
    id: 'heater-shield',
    name: 'Heater Shield',
    aliases: ['Knightly shield'],
    year: 1250,
    period: 'High medieval',
    region: 'Western Europe',
    material: 'Wood, leather, gesso, textile, and paint',
    battlefieldRole: 'Compact shield for mounted and foot combat; heraldic display',
    image: imageInfo({
      file: 'Arms_of_William_Marshal,_1st_Earl_of_Pembroke.svg',
      caption: 'Heater-shaped heraldic shield associated with William Marshal’s arms.',
      source: 'Wikimedia Commons',
      note: 'Heraldic reconstruction of shield shape and arms, not a surviving battlefield shield.'
    }),
    summary: 'The heater shield was a compact high medieval shield shape closely tied to heraldry and knightly identity.',
    design: 'It had a flat or slightly curved top and a pointed lower end, smaller than the earlier kite shield. Its shape made it suitable for arm strapping and heraldic painting.',
    protection: 'The heater shield protected less of the body than a kite shield but was easier to carry with improving armor. It worked well for mounted combat, tournaments, and display.',
    development: 'As mail and plate defenses improved, knightly shields could shrink. The heater shield became a standard surface for coats of arms in the thirteenth and fourteenth centuries.',
    variations: 'Tournament shields, war shields, and heraldic depictions differed. Many surviving examples are ceremonial or funerary rather than ordinary battlefield gear.',
    examples: 'Seals, rolls of arms, manuscripts, and effigies make the heater shield central to the study of heraldry and aristocratic warfare.',
    legacy: 'The heater shield shows how equipment, identification, and lineage converged in medieval elite culture.',
    relatedEntries: {
      weaponsArmor: ['Shield', 'Surcoat', 'Great helm']
    }
  }),
  armor({
    id: 'buckler',
    name: 'Buckler',
    aliases: ['Small hand shield'],
    year: 1300,
    period: 'High and late medieval',
    region: 'Europe',
    material: 'Wood, iron, or steel with central grip',
    battlefieldRole: 'Small hand shield for personal defense and swordplay',
    image: imageInfo({
      file: 'Buckler_MET_14.25.560.jpg',
      caption: 'Medieval buckler in the Metropolitan Museum of Art.',
      date: '15th century',
      source: 'Metropolitan Museum of Art / Wikimedia Commons',
      note: 'Surviving small shield; bucklers varied in material and size.'
    }),
    summary: 'The buckler was a small hand-held shield used with swords, knives, and other sidearms.',
    design: 'A buckler was usually gripped in the fist behind a central boss or handle. Unlike larger strapped shields, it was highly mobile and could actively bind, punch, cover, or deflect.',
    protection: 'Its small size did not cover the whole body, but it protected the weapon hand and line of attack. Skill mattered because the buckler had to move with the fight.',
    development: 'Bucklers were common in civilian and military martial culture from the high Middle Ages onward. The I.33 manuscript shows one of the earliest European systems of sword-and-buckler fencing.',
    variations: 'Some were wooden with metal fittings; others were all metal. Shapes could be round, slightly conical, or more complex.',
    examples: 'Fight books, surviving bucklers, and urban weapon regulations show that this was a practical everyday defensive tool, not only battlefield equipment.',
    legacy: 'The buckler is a bridge between battlefield arms and civilian self-defense, revealing the technical sophistication of medieval personal combat.',
    relatedEntries: {
      weaponsArmor: ['Arming Sword', 'Dagger / rondel dagger', 'Shield']
    }
  }),
  armor({
    id: 'pavise',
    name: 'Pavise',
    aliases: ['Pavise shield'],
    year: 1400,
    period: 'Late medieval',
    region: 'Europe',
    material: 'Large wooden shield with painted or textile facing',
    battlefieldRole: 'Large shield for crossbowmen, siege troops, and infantry cover',
    image: imageInfo({
      file: 'Pavise_MET_14.25.721.jpg',
      caption: 'Painted pavise shield.',
      date: '15th century',
      source: 'Metropolitan Museum of Art / Wikimedia Commons',
      note: 'Surviving large shield; many pavises were painted with religious or civic imagery.'
    }),
    summary: 'The pavise was a large shield used to protect crossbowmen and other troops, especially during reloading or siege operations.',
    design: 'Pavises were tall, often slightly curved wooden shields, sometimes with central ridges and painted fronts. Some had props or could be held by assistants.',
    protection: 'The pavise created portable cover against arrows, bolts, and stones. It was especially useful for crossbowmen, whose reloading could take longer than shooting a bow.',
    development: 'Pavises became prominent in late medieval urban, siege, and mercenary warfare. They fit a world of crossbows, handguns, city militias, and fortified positions.',
    variations: 'Italian, Bohemian, German, and other regional pavises differed in size and decoration. Religious images on pavises could be both protective symbols and group markers.',
    examples: 'Museum pavises preserve painted surfaces that combine practical equipment with civic and devotional imagery.',
    legacy: 'The pavise shows that medieval defense was not only worn on the body. Portable cover was a tactical technology in its own right.',
    relatedEntries: {
      weaponsArmor: ['Crossbow', 'Kettle hat / kettle helm', 'Shield']
    }
  }),
  entry({
    id: 'ulfberht-swords',
    name: 'Ulfberht Swords',
    aliases: ['+VLFBERHT+ swords', 'Vlfberht swords'],
    weaponArmorType: 'Famous weapon',
    year: 900,
    period: 'Viking Age and early medieval',
    region: 'Frankish and Scandinavian worlds',
    material: 'High-quality iron or steel sword blades with inlaid inscriptions',
    battlefieldRole: 'Elite swords and prestige blades',
    image: imageInfo({
      file: 'Ulfberht_sword_-_Germanisches_Nationalmuseum_-_Nuremberg.jpg',
      caption: 'Ulfberht-inscribed sword in the Germanisches Nationalmuseum.',
      date: '9th-11th century type',
      source: 'Germanisches Nationalmuseum / Wikimedia Commons',
      note: 'Inscribed blade; production centers and authenticity of individual inscriptions are debated.'
    }),
    summary: 'Ulfberht swords are early medieval blades carrying variants of the +VLFBERHT+ inscription, found across northern and eastern Europe.',
    details: 'They are important because their inscriptions, metal quality, and distribution connect Viking Age Scandinavia to Frankish production, trade, elite gift exchange, and imitation.',
    sections: [
      ['Overview', [
        'Ulfberht swords are a group of early medieval blades marked with versions of the inscription +VLFBERHT+. They are not one single sword but a family of inscribed weapons found from western Europe to Scandinavia, the Baltic, and river-route regions farther east.',
        'Their fame rests on metal quality, inscription, and distribution. Some blades show unusually high-quality steel for their period, while others may be imitations using the prestige of the name.'
      ]],
      ['Description', [
        'Most Ulfberht swords are double-edged early medieval swords with inlaid letters on the blade. The inscription was probably a maker’s name, workshop mark, or prestige formula, though the exact meaning remains debated.'
      ]],
      ['Origin and dating', [
        'The swords are generally dated between the ninth and eleventh centuries. Many scholars connect the best examples to the Frankish world, where high-quality blade production and trade restrictions shaped access to elite weapons.'
      ]],
      ['Historical context', [
        'Their distribution maps the movement of weapons through trade, plunder, gift-giving, and long-distance contacts. Scandinavian warriors could carry blades whose material life began in or near Frankish production zones.'
      ]],
      ['Historical reliability and debate', [
        'Not every Ulfberht inscription has the same spelling, quality, or metallurgical profile. Some inscriptions may copy a prestigious mark, so the label should not be treated as a single brand with uniform production.'
      ]],
      ['Legacy', [
        'Ulfberht swords are among the clearest objects linking Viking Age warfare to craft specialization, trade routes, and social prestige.'
      ]]
    ],
    knownFor: [
      'Inscribed elite early medieval sword blades found across northern Europe.',
      'Evidence for high-quality steel, imitation, trade, and Frankish-Scandinavian contact.'
    ],
    relatedEntries: {
      locations: ['Carolingian Empire', 'Kingdom of Denmark', 'Kingdom of Norway'],
      weaponsArmor: ['Viking sword', 'Arming Sword']
    },
    historicalReliability: 'The inscription identifies a sword group, not a single maker whose biography is securely known. Metallurgy and inscription style vary between examples.',
    extraSources: [
      source('Wikipedia: Ulfberht swords', 'https://en.wikipedia.org/wiki/Ulfberht_swords')
    ]
  }),
  entry({
    id: 'joyeuse',
    name: 'Joyeuse',
    aliases: ['Sword of Charlemagne', 'French coronation sword'],
    weaponArmorType: 'Famous weapon',
    year: 1200,
    period: 'Medieval and later ceremonial use',
    region: 'France',
    material: 'Steel blade with gold, jewels, enamel, and later ceremonial fittings',
    battlefieldRole: 'Ceremonial royal sword, not a surviving battle weapon from Charlemagne’s lifetime',
    image: {
      image: artifactById.get('joyeuse')?.image ?? 'https://upload.wikimedia.org/wikipedia/commons/6/60/Joyeuse_louvre.JPG',
      imageInfo: {
        caption: 'Joyeuse, the French coronation sword preserved in the Louvre.',
        creator: 'Composite medieval and later object',
        date: 'medieval and later components',
        source: 'Louvre Museum / Wikimedia Commons',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Joyeuse_louvre.JPG',
        note: 'Surviving ceremonial sword associated by legend with Charlemagne; the object includes later material and coronation history.'
      }
    },
    summary: 'Joyeuse is the ceremonial sword associated with Charlemagne in French royal memory and used in later coronation ritual.',
    details: 'The surviving object is not a simple battlefield relic of Charlemagne. Its material history includes medieval and later components, and its power lay in royal ceremony, legendary association, and claims to Carolingian continuity.',
    sections: [
      ['Overview', [
        'Joyeuse is the famous French coronation sword traditionally associated with Charlemagne. In medieval and later royal ceremony, that association allowed French kings to connect their authority to the prestige of the Carolingian emperor.',
        'The surviving sword preserved in the Louvre is a composite object with later components. Its historical importance is therefore not that it can be treated as a securely preserved personal weapon of Charlemagne, but that it became a royal object through which legend, monarchy, and ritual met.'
      ]],
      ['Description', [
        'The sword combines a steel blade with precious fittings, including gold, enamel, and jeweled decoration. Its appearance reflects ceremonial display as much as weapon construction.'
      ]],
      ['Origin and dating', [
        'The legendary name reaches back to Charlemagne’s epic and royal memory, but the surviving sword’s parts belong to later medieval and post-medieval phases. Scholars distinguish the object’s physical history from its claimed Carolingian identity.'
      ]],
      ['Historical context and coronation role', [
        'Joyeuse became part of the regalia of the French monarchy. Carried in coronation ritual, it helped present the king as heir to sacred and imperial traditions rooted in the Frankish past.'
      ]],
      ['Historical reliability and tradition', [
        'The association with Charlemagne is a powerful tradition rather than secure proof of personal ownership. The sword matters because that tradition shaped French royal legitimacy and ceremonial memory.'
      ]],
      ['Legacy', [
        'Joyeuse remains one of the most famous medieval swords in Europe, not as a straightforward battlefield weapon but as a material expression of kingship, legend, and political inheritance.'
      ]]
    ],
    knownFor: [
      'French coronation sword associated with Charlemagne.',
      'Composite ceremonial object that distinguishes legend from material history.'
    ],
    relatedEntries: {
      people: ['Charlemagne'],
      locations: ['Kingdom of France', 'Frankish Kingdom'],
      weaponsArmor: ['Arming Sword']
    },
    historicalReliability: 'The Charlemagne association belongs to royal and epic tradition. The surviving sword’s components are later and should not be presented as a verified personal weapon of Charlemagne.',
    extraSources: [
      source('Louvre Collections: Coronation sword and scabbard', 'https://collections.louvre.fr/en/ark:/53355/cl010113785', 'museum collection', 'Musee du Louvre')
    ]
  }),
  entry({
    id: 'sutton-hoo-helmet',
    name: 'Sutton Hoo Helmet',
    aliases: ['Sutton Hoo helm'],
    weaponArmorType: 'Famous armor',
    year: 625,
    period: 'Early medieval',
    region: 'Anglo-Saxon England',
    material: 'Iron, tinned bronze panels, garnet, and decorative fittings',
    battlefieldRole: 'Elite helmet and royal display object in burial context',
    image: {
      image: artifactById.get('sutton-hoo-helmet')?.image ?? 'https://commons.wikimedia.org/wiki/Special:FilePath/Sutton_Hoo_helmet_2016.png',
      imageInfo: {
        caption: 'Reconstructed Sutton Hoo helmet.',
        creator: 'Unknown Anglo-Saxon craftworkers; modern reconstruction photographed by the British Museum',
        date: 'early 7th century original',
        source: 'British Museum / Wikimedia Commons',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Sutton_Hoo_helmet_2016.png',
        note: 'Modern reconstruction of an early medieval helmet from the Sutton Hoo ship burial.'
      }
    },
    summary: 'The Sutton Hoo Helmet is an early seventh-century Anglo-Saxon helmet from the elite ship burial at Sutton Hoo in Suffolk.',
    details: 'Its decorated construction, burial setting, and reconstruction make it one of the strongest visual witnesses to elite warrior culture in early medieval England.',
    sections: [
      ['Overview', [
        'The Sutton Hoo Helmet is one of the most important surviving pieces of early medieval European armor. Found in the ship burial at Sutton Hoo in Suffolk, it belongs to the Anglo-Saxon elite world of the early seventh century.',
        'The helmet matters because it combines protection, royal display, animal and warrior imagery, and North Sea connections. Its buried owner is not named by an inscription, but the scale of the burial suggests a person of exceptional rank, often discussed in relation to the kings of East Anglia.'
      ]],
      ['Description', [
        'The helmet was made from iron with decorative panels and facial features that create a powerful human-and-animal image. The reconstructed face, eyebrows, nose, and moustache give it an unusually arresting presence among early medieval finds.'
      ]],
      ['Origin and dating', [
        'The burial is usually dated to the early seventh century. The helmet’s style connects Anglo-Saxon England to Scandinavian and wider North Sea elite art, especially through animal ornament and warrior imagery.'
      ]],
      ['Historical context', [
        'Sutton Hoo’s ship burial reveals a ruling culture tied to gift exchange, warfare, feasting, travel, and Christian-pagan transition. The helmet was one element in a burial assemblage that included weapons, silver, gold, and imported objects.'
      ]],
      ['Provenance and current location', [
        'The helmet was excavated from the Sutton Hoo burial in 1939 and painstakingly reconstructed from fragments. It is now held by the British Museum, where it has become an icon of Anglo-Saxon England.'
      ]],
      ['Historical reliability and legacy', [
        'The object is archaeological evidence of very high quality, but the identity of the buried individual remains debated. Its legacy lies in making early medieval England visible as a wealthy, connected, and artistically sophisticated world.'
      ]]
    ],
    knownFor: [
      'Iconic early medieval Anglo-Saxon helmet from Sutton Hoo.',
      'Evidence for elite warrior identity and North Sea cultural connections.'
    ],
    relatedEntries: {
      locations: ['Kingdom of England', 'Northumbria'],
      weaponsArmor: ['Nasal helmet', 'Mail Armor', 'Shield']
    },
    historicalReliability: 'The helmet and burial are archaeologically secure, but the owner is unidentified; royal East Anglian associations remain interpretations rather than proven names.',
    extraSources: [
      source('British Museum: Sutton Hoo helmet', 'https://www.britishmuseum.org/collection/object/H_1939-1010-93', 'museum collection', 'British Museum')
    ]
  })
]

const ids = new Set()
for (const item of entries) {
  if (ids.has(item.id)) throw new Error(`Duplicate weaponsArmor id ${item.id}`)
  ids.add(item.id)
}

data.weaponsArmor = entries.sort((a, b) => a.name.localeCompare(b.name))

const lookup = new Map()
for (const [, type, items] of sourceCollections) {
  for (const item of items) {
    addLookup(item.name, { title: item.name, type, slug: item.id })
    ;(item.aliases ?? []).forEach((alias) => addLookup(alias, { title: item.name, type, slug: item.id }))
  }
}
for (const item of data.weaponsArmor) {
  addLookup(item.name, { title: item.name, type: 'weaponArmor', slug: item.id })
  ;(item.aliases ?? []).forEach((alias) => addLookup(alias, { title: item.name, type: 'weaponArmor', slug: item.id }))
}

for (const item of data.weaponsArmor) {
  item.relatedEntries = normalizeRelatedEntries(item.relatedEntries)
}

fs.writeFileSync(dataPath, `${JSON.stringify(data, null, 2)}\n`)

function addLookup(key, value) {
  if (!key) return
  lookup.set(normalizeKey(key), value)
}

function normalizeRelatedEntries(groups = {}) {
  return Object.fromEntries(Object.entries(groups).map(([group, items]) => [
    group,
    (items ?? []).map((item) => {
      if (item && typeof item === 'object') return item
      const title = String(item)
      const found = lookup.get(normalizeKey(title))
      if (found) return found
      return {
        title,
        type: {
          people: 'person',
          events: 'event',
          locations: 'location',
          artifacts: 'artifact',
          weaponsArmor: 'weaponArmor'
        }[group] ?? group,
        slug: slugify(title)
      }
    })
  ]))
}

function normalizeKey(value) {
  return String(value)
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[’']/g, '')
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim()
}

function slugify(value) {
  return normalizeKey(value).replace(/\s+/g, '-')
}
