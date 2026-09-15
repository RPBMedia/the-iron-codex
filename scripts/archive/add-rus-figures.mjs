/**
 * Adds Rurik, Oleg of Novgorod, Igor of Kiev, and Olga of Kiev as full character articles,
 * plus Novgorod and Iskorosten/Korosten as location articles.
 */
import fs from 'node:fs'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dataPath = path.join(__dirname, '../server/data/history.json')
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'))

// ── Safety: confirm none of these already exist ──────────────────────────────
const existingIds = new Set((data.characters || []).map(c => c.id))
const toAdd = ['rurik', 'oleg-of-novgorod', 'igor-of-kiev', 'olga-of-kiev']
const conflicts = toAdd.filter(id => existingIds.has(id))
if (conflicts.length) {
  console.error('CONFLICT: entries already exist:', conflicts)
  process.exit(1)
}

const existingLocIds = new Set((data.locations || []).map(l => l.id))
const locConflicts = ['novgorod', 'iskorosten'].filter(id => existingLocIds.has(id))
if (locConflicts.length) {
  console.error('LOCATION CONFLICT:', locConflicts)
  process.exit(1)
}

// ── New character entries ─────────────────────────────────────────────────────

const newCharacters = [
  // ── RURIK ──────────────────────────────────────────────────────────────────
  {
    id: 'rurik',
    type: 'character',
    name: 'Rurik',
    aliases: ['Riurik', 'Rørik', 'Rorik (disputed identification)'],
    born: 820,
    died: 879,
    deathAge: 'unknown',
    causeOfDeath: 'Unknown; traditional death c. 879',
    restingPlace: 'Unknown',
    location: 'Northern Rus\' lands (Novgorod / Ladoga region)',
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Radzivill_Varangians_invited.jpg',
    summary: 'Varangian chieftain at the head of the Primary Chronicle\'s origin tradition for the Rus\', traditionally placed at Novgorod around 862 and regarded as the progenitor of the Rurikid dynasty.',
    title: 'Varangian ruler traditionally linked to the founding of the Rurikid dynasty',
    roles: [
      'Varangian ruler of the northern Rus\' lands',
      'Traditional founder of the Rurikid dynasty'
    ],
    birth: {
      date: 'c. early 9th century (uncertain)',
      place: { name: 'Unknown; Scandinavian origin implied in chronicle tradition' },
      note: 'No birth record exists. Rurik\'s Varangian identity implies Scandinavian origins, but neither the Primary Chronicle nor any other source states a specific birthplace.'
    },
    death: {
      date: 'c. 879 (traditional, chronicle chronology)',
      place: { name: 'Unknown; associated with the northern Rus\' lands' },
      circumstance: 'The Primary Chronicle gives no details of Rurik\'s death beyond a traditional date of 879. The chronicle then states he entrusted his young son Igor to his kinsman Oleg. No independent source corroborates the date or circumstances.'
    },
    quickFacts: {
      realm: 'Northern Rus\' lands (Novgorod / Ladoga region)',
      dynasty: 'Rurikid (as traditional founder)',
      culture: 'Varangian / Norse',
      knownFor: 'Foundation of the Rurikid dynasty tradition; invitation of the Varangians narrative'
    },
    imageInfo: {
      caption: 'Miniature from the Radziwill Chronicle (c. 1490) depicting the invitation of the Varangians — the chronicle episode in which Rurik is traditionally said to have come to govern the northern Rus\' lands.',
      creator: 'Unknown illuminator; Radziwill Chronicle (Radziwiłłowskaya Letopis)',
      date: 'c. 1490',
      source: 'Radziwill Chronicle / Wikimedia Commons',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Radzivill_Varangians_invited.jpg',
      note: 'A fifteenth-century illustrated copy of the Primary Chronicle. No contemporary image of Rurik exists; this miniature depicts a ninth-century event through a much later artistic tradition.'
    },
    sectionImages: [
      {
        section: 'Legacy',
        src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Varangian_routes.png',
        alt: 'Map of Varangian trade routes from Scandinavia to Byzantium and the Caspian',
        caption: 'Map of principal Varangian trade routes from Scandinavia to Byzantium and the Caspian Sea. Rurik\'s power base in the northern Rus\' lands sat at the northern end of this network.',
        creator: 'Wikimedia Commons contributor',
        date: 'Modern map based on historical data',
        source: 'Wikimedia Commons',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Varangian_routes.png',
        note: 'Schematic map; individual route details and chronology are approximate.'
      }
    ],
    contentSections: [
      {
        title: 'Overview',
        paragraphs: [
          'Rurik is the Varangian figure at the head of the Primary Chronicle\'s origin tradition for the Rus\'. The Primary Chronicle (Povest\' Vremennykh Let — "The Tale of Bygone Years"), compiled in its received form at the Kyiv-Pechersk Lavra in the early twelfth century, presents him as a Varangian chieftain invited to govern the northern Rus\' lands around 862. His successors — Oleg, Igor, and the later Rurikid rulers of Kyiv — would claim descent from him for centuries.',
          'The historical Rurik remains poorly documented outside the chronicle tradition. Historians debate whether he was a single leader, a composite figure assembled from multiple oral traditions, or possibly identifiable with Rorik of Dorestad, a ninth-century Danish chieftain who appears in Frankish annals between the 840s and 870s. Modern scholarship treats the chronicle narrative as an origin account shaped at least partly by later dynastic legitimacy concerns. The "Rurik question" has accumulated additional political weight through its entanglement with modern Russian and Ukrainian national histories.'
        ]
      },
      {
        title: 'Birth and early life',
        paragraphs: [
          'Rurik\'s origins are not specified in the Primary Chronicle beyond his identification as a Varangian — a term applied in Rus\' tradition to Norsemen who served as traders, mercenaries, and rulers across the river routes from the Baltic to the Black Sea. Scandinavia is implied by the label, but no specific homeland is named.',
          'A persistent historical identification connects Rurik with Rorik of Dorestad (also called Rorik of Jutland), a Danish chieftain who features in Frankish annals of the ninth century as a raider, a holder of Frisian territory under Carolingian grant, and a politically active figure in the politics of the North Sea world. The chronological overlap is plausible — Rorik appears in sources from the 840s to the 870s, consistent with the Rus\' chronicle\'s Rurik — but the identification depends on circumstantial parallels and has not been proven. Many historians treat it as a hypothesis rather than a settled conclusion.',
          'Alternative names — Riurik, Rørik — reflect transliterations from different medieval linguistic traditions. The Slavic "Rurik" and the Norse "Hrœrekr" (one possible Norse form) are not directly equivalent, and the name connections require careful handling.'
        ]
      },
      {
        title: 'As Varangian ruler and dynastic founder',
        paragraphs: [
          'The Primary Chronicle\'s account of the "invitation of the Varangians" (призвание варягов) presents Rurik\'s arrival as a deliberate act by northern peoples — Chud, Slovenes, Merya, and Ves\' — who, exhausted by internal strife, called on the Varangians across the sea: "Come and rule over us." This narrative closely parallels other medieval foundation stories, including those in the Frankish and Anglo-Saxon traditions, and is generally treated by historians as a stylized origin account rather than a straightforward historical record.',
          'Rurik is placed at Novgorod in the main chronicle tradition, though the location of his initial seat is debated. Archaeological evidence from Staraya Ladoga (Old Ladoga), a fortified settlement on the Volkhov River to the north of Novgorod, suggests it may have been an earlier Varangian centre before Novgorod\'s growth. Whether Rurik\'s initial base was at Ladoga, Novgorod, or somewhere nearby is unresolvable from current evidence.',
          'Two other Varangian leaders, Sineus and Truvor, appear alongside Rurik in the Primary Chronicle as co-rulers of adjacent territories, but are treated with deep skepticism by modern historians. The Swedish scholar Vilhelm Thomsen in the nineteenth century proposed that their names derived from a misreading of Old Norse phrases — sín húss ok þrúvar, meaning "his house and loyal company" — rather than representing actual individuals. Most modern scholars find this interpretation plausible, though it remains debated.',
          'Whatever the exact circumstances of Rurik\'s establishment in the north, the chronicle tradition is consistent: his descendants — through his son Igor and through the extended Rurikid house — held the principal principalities of Rus\' until the late sixteenth century. The claim of Rurikid descent was a foundational element of Rus\' royal legitimacy.'
        ]
      },
      {
        title: 'Death',
        paragraphs: [
          'The Primary Chronicle gives Rurik\'s death as 879. No circumstances or cause are described; the account moves directly from his death to the succession arrangements — that his young son Igor was entrusted to the care of his kinsman Oleg. The year 879 is part of the chronicle\'s retrospective chronological framework, constructed by monastic compilers working two to three centuries after the events they describe.',
          'No independent source corroborates the date. No burial site is recorded. The chronicle\'s silence on the details of Rurik\'s death is consistent with the general thinness of the historical record for ninth-century Rus\' — most of what is known derives from this single twelfth-century compilation, and even its reliability for this period is a subject of scholarly debate.'
        ]
      },
      {
        title: 'Legacy',
        paragraphs: [
          'Rurik gave his name to the Rurikid dynasty, which held the principal principalities of Kievan Rus\' for centuries and remained a legitimizing claim in Russian princely politics until the extinction of the line with Feodor I in 1598. The breadth of Rurikid claims — extending across the fractured principalities of medieval Rus\' — meant that dynastic descent from Rurik was one of the few unifying threads in a politically fragmented world.',
          'The "Normanist controversy" — a debate running from the eighteenth century onward about whether the founders of Rus\' were primarily Norse Varangians or indigenous Slavic peoples — attached enormous political charge to Rurik\'s identity. German scholars at the Russian Imperial Academy of Sciences in St. Petersburg in the eighteenth century argued for the Varangian/Norse origin, while Russian nationalist writers pushed back against what they saw as an implication of Slavic political incapacity. The controversy became genuinely politically toxic under Soviet rule, when Normanist interpretations were discouraged. Post-Soviet historiography has largely moved past the ideological dichotomy, but the debate lingers in popular history and occasionally in political rhetoric.',
          'The 1150th anniversary of the "invitation of the Varangians" in 2012 was marked in Russia as a national historical milestone, with Rurik framed as a founding figure of the Russian state — a framing that Ukrainian historians have contested, emphasizing the early Rus\' tradition as the precursor of the Ukrainian rather than the Russian state. Rurik\'s identity has become as much a modern political question as a historical one.'
        ]
      }
    ],
    keyAchievements: [
      {
        title: 'Traditional progenitor of the Rurikid dynasty',
        description: 'The dynasty that claimed descent from Rurik held the principal principalities of Kievan Rus\' and ruled in Moscow until 1598.'
      },
      {
        title: 'Founding figure of the Novgorod tradition',
        description: 'The Primary Chronicle associates Rurik with Novgorod as the first seat of Rurikid authority in the northern Rus\' lands.'
      },
      {
        title: 'Subject of the "invitation of the Varangians" origin narrative',
        description: 'His arrival story became the foundational legitimizing myth of Rurikid rule and one of the most debated episodes in early Rus\' historiography.'
      }
    ],
    timeline: [
      {
        date: 'c. early 9th century',
        title: 'Birth uncertain',
        description: 'No birth record exists. Chronicle tradition implies Scandinavian Varangian origins, but no specific date or place is given.',
      },
      {
        date: '862',
        title: 'Invited to govern the northern Rus\' lands (chronicle tradition)',
        description: 'The Primary Chronicle places Rurik\'s arrival in the northern Rus\' lands in 862, presenting it as a response to an invitation from Slavic and Finnic peoples seeking an end to internal strife.',
        links: [{ title: 'Novgorod', type: 'location', slug: 'novgorod' }]
      },
      {
        date: '860s',
        title: 'Consolidates authority in the northern Rus\' lands',
        description: 'Rurik establishes a power base in the region later associated with Novgorod and Ladoga, beginning the Varangian presence that the chronicle tradition presents as the origin of the Rurikid house.',
        links: [{ title: 'Novgorod', type: 'location', slug: 'novgorod' }]
      },
      {
        date: '860s–870s',
        title: 'Rurikid authority becomes tied to the Novgorod tradition',
        description: 'Chronicle entries for this period are sparse, but the tradition consistently presents Rurik as the ruling figure across the northern Rus\' lands during this decade.',
        links: [{ title: 'Kievan Rus\'', type: 'location', slug: 'kievan-rus' }]
      },
      {
        date: 'c. 879',
        title: 'Traditional death; Oleg named guardian of Igor',
        description: 'The Primary Chronicle dates Rurik\'s death to 879 without stating the cause or place. His young son Igor is said to have been placed under the guardianship of Oleg, who would carry Rurikid power south toward Kyiv.',
        links: [
          { title: 'Oleg of Novgorod', type: 'person', slug: 'oleg-of-novgorod' },
          { title: 'Igor of Kiev', type: 'person', slug: 'igor-of-kiev' }
        ]
      }
    ],
    relatedEntries: {
      people: [
        { title: 'Oleg of Novgorod', type: 'person', slug: 'oleg-of-novgorod', label: 'Successor and regent for Igor' },
        { title: 'Igor of Kiev', type: 'person', slug: 'igor-of-kiev', label: 'Traditional son and dynastic successor' }
      ],
      locations: [
        { title: 'Novgorod', type: 'location', slug: 'novgorod', label: 'Traditional seat of Rurikid power' },
        { title: 'Kievan Rus\'', type: 'location', slug: 'kievan-rus', label: 'The polity Rurikid successors built' }
      ],
      events: []
    },
    sources: [
      {
        title: 'Primary Chronicle (Povest\' Vremennykh Let) — Internet Medieval Sourcebook',
        author: 'Fordham University / trans. S. H. Cross and O. P. Sherbowitz-Wetzor',
        type: 'primary source in translation',
        url: 'https://sourcebooks.fordham.edu/basis/pvl.asp'
      },
      {
        title: 'Rurik — Encyclopaedia Britannica',
        type: 'reference article',
        url: 'https://www.britannica.com/biography/Rurik'
      },
      {
        title: 'Rurik — World History Encyclopedia',
        type: 'reference article',
        url: 'https://www.worldhistory.org/Rurik/'
      },
      {
        title: 'Franklin, Simon and Jonathan Shepard: The Emergence of Rus\' 750–1200. London: Longman, 1996.',
        type: 'scholarly monograph',
        url: 'https://www.worldcat.org/title/emergence-of-rus-750-1200/oclc/33334787'
      },
      {
        title: 'Duczko, Władysław: Viking Rus — Studies on the Presence of Scandinavians in Eastern Europe. Leiden: Brill, 2004.',
        type: 'scholarly monograph',
        url: 'https://www.worldcat.org/title/viking-rus/oclc/53335014'
      }
    ]
  },

  // ── OLEG OF NOVGOROD ───────────────────────────────────────────────────────
  {
    id: 'oleg-of-novgorod',
    type: 'character',
    name: 'Oleg of Novgorod',
    aliases: ['Oleg the Wise', 'Veshchiy Oleg', 'Oleh', 'Helgi (Norse equivalent name)'],
    born: 840,
    died: 912,
    deathAge: 'unknown',
    causeOfDeath: 'Chronicle tradition: bitten by a snake from the skull of his dead horse (legendary; likely not historical)',
    restingPlace: 'Unknown; tradition varies between Staraya Ladoga, Kyiv, and elsewhere',
    location: 'Novgorod and Kiev/Kyiv, Rus\'',
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Viktor_Vasnetsov_Prophetic_Oleg.jpg',
    summary: 'Varangian ruler in the Primary Chronicle tradition who extended Rurikid authority from Novgorod south to Kyiv and is credited with the first Rus\'–Byzantine treaty, traditionally dated to 911.',
    title: 'Varangian ruler associated with the rise of Kiev as a Rus\' power center',
    roles: [
      'Regent or ruler of the northern Rus\' lands after Rurik',
      'Conqueror and ruler of Kyiv',
      'Initiator of Rus\'–Byzantine diplomatic relations'
    ],
    birth: {
      date: 'Unknown; active from c. 879',
      place: { name: 'Unknown; Varangian (Norse) origin implied' },
      note: 'No birth record exists. Oleg appears in the chronicle as a kinsman or associate of Rurik, indicating Varangian background. His name corresponds to Old Norse Helgi, a common Norse name.'
    },
    death: {
      date: 'c. 912 (traditional, chronicle chronology)',
      place: { name: 'Unknown; traditions vary' },
      circumstance: 'The Primary Chronicle gives Oleg\'s death as 912 and describes it through a prophetic legend: a soothsayer predicted he would die from his horse; when the horse died, Oleg inspected its bones and was bitten by a snake that emerged from the skull. This story closely parallels Norse legend — specifically the Old Norse tale of Örvar-Oddr — and is generally treated as a literary tradition rather than historical fact. The actual circumstances and place of Oleg\'s death are unknown.'
    },
    quickFacts: {
      realm: 'Novgorod and Kievan Rus\'',
      dynasty: 'Rurikid (regent/ruler)',
      culture: 'Varangian / Norse',
      knownFor: 'Seizure of Kyiv; establishment of Rus\'–Byzantine diplomatic contact; legendary death prophecy'
    },
    imageInfo: {
      caption: 'Viktor Vasnetsov, "Meeting of Prince Oleg with the Soothsayer" (Вещий Олег), 1899. The painting depicts the legendary prophecy that Oleg would die from his horse — one of the most famous episodes of early Rus\' chronicle tradition.',
      creator: 'Viktor Vasnetsov (1848–1926)',
      date: '1899',
      source: 'Wikimedia Commons',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Viktor_Vasnetsov_Prophetic_Oleg.jpg',
      note: 'A nineteenth-century Romantic painting depicting a legendary episode from the Primary Chronicle. Not a contemporary depiction; Vasnetsov worked from chronicle tradition and his own artistic imagination.'
    },
    sectionImages: [
      {
        section: 'Campaigns against Byzantium',
        src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Radzivill_Oleg_campaign.jpg',
        alt: 'Radziwill Chronicle miniature showing Oleg\'s fleet approaching Constantinople',
        caption: 'Miniature from the Radziwill Chronicle (c. 1490) depicting Oleg\'s campaign against Constantinople — the chronicle episode in which Oleg is said to have hung his shield on the gates of the city.',
        creator: 'Unknown illuminator; Radziwill Chronicle',
        date: 'c. 1490',
        source: 'Radziwill Chronicle / Wikimedia Commons',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Radzivill_Oleg_campaign.jpg',
        note: 'Fifteenth-century illustration of events traditionally placed in 907. Byzantine sources do not independently record this campaign.'
      }
    ],
    contentSections: [
      {
        title: 'Overview',
        paragraphs: [
          'Oleg of Novgorod is presented in the Primary Chronicle as the ruler who extended Rurikid authority from northern Rus\' to Kyiv, transforming scattered Varangian presence along the river routes into a more cohesive political entity. The chronicle assigns him the epithet Veshchiy — the Wise, or the Prophetic — and his reign, traditionally 879 to 912, spans one of the most formative periods in early Rus\' history.',
          'Like Rurik before him, Oleg\'s historical figure is inseparable from the chronicle tradition that shaped it. The Primary Chronicle is a twelfth-century compilation that drew on earlier records, oral traditions, and retrospective narrative shaping by Kyivan monastic writers. Historians generally treat Oleg\'s career as broadly reflecting real Varangian expansion and early Rus\'–Byzantine contact, while recognizing that specific episodes, speeches, and dates belong to chronicle tradition rather than documented history.'
        ]
      },
      {
        title: 'Birth and early life',
        paragraphs: [
          'Oleg\'s origins are not stated in the Primary Chronicle. He appears as a kinsman or associate of Rurik, placed in authority over the young Igor after Rurik\'s death around 879. His Varangian background is implied — like Rurik, he belongs to the Norse-connected ruling layer of ninth-century Rus\'.',
          'His name, Oleg in its Slavic form, corresponds to the Old Norse Helgi, a common Norse personal name. Several modern historians point to this correspondence as further evidence of Varangian leadership in early Rus\', though the chronicle itself does not comment on the name\'s etymology. The Ukrainian transliteration Oleh preserves the same root.',
          'The question of whether Oleg was Rurik\'s kinsman by blood, by political alliance, or by retrospective chronicle construction is unanswerable from current evidence. The chronicle uses the word "rod" (kin) loosely, and the relationship between Rurik and Oleg may have been simplified by later compilers trying to present a coherent dynastic narrative.'
        ]
      },
      {
        title: 'As ruler of Novgorod and Kiev',
        paragraphs: [
          'According to the Primary Chronicle, Oleg moved south from the northern Rus\' lands around 882, seizing control of Kyiv. The chronicle says he killed Askold and Dir — Varangian men who had established themselves in Kyiv independently of Rurikid authority — presenting the infant Igor to them and declaring: "You are neither princes nor of a princely house, but I am of a princely house." He then made Kyiv his seat and declared it "the mother of Rus\' cities."',
          'This account has a strongly literary quality. The phrase "mother of Rus\' cities" appears to reflect the perspective of twelfth-century Kyivan monastic culture, projecting the importance of Kyiv backward into the ninth century. Whether the seizure of Kyiv from Askold and Dir reflects a real episode of Varangian political competition or is a later narrative construction is debated among historians.',
          'Oleg\'s decades of rule saw the extension of Rurikid tribute-taking to neighboring peoples — including the Drevlians, Radimichians, Severians, and Vyatichians. The chronicle\'s year-by-year entries for his reign mix plausible administrative and military activity with elements of legend. The economic basis of Rurikid power — controlling the river routes from the Baltic to the Black Sea and extracting tribute from peoples along them — is well supported by archaeological evidence of Scandinavian presence along these routes in the ninth and tenth centuries, even where the specific chronicle details are uncertain.'
        ]
      },
      {
        title: 'Campaigns against Byzantium',
        paragraphs: [
          'The most spectacular episode attributed to Oleg in the Primary Chronicle is a massive campaign against Constantinople in 907. The chronicle describes Oleg leading a fleet of two thousand ships to the walls of the city, using his boats on wheels to bypass the chain closing the Golden Horn, hanging his shield on the gates, and extracting a favorable commercial treaty from the Byzantines, who reportedly paid tribute and granted trading rights to avoid an assault.',
          'Byzantine sources do not record this campaign. The silence of Greek sources — which preserved records of other Rus\' attacks, including those under Igor in 941 — has led historians to treat the 907 episode with considerable caution. The campaign may represent a literary amplification of multiple raids or negotiations, telescoped into a single legendary episode with theatrical details (the boats-on-wheels, the shield on the gates) serving symbolic rather than historical purposes.',
          'A treaty between Rus\' and Byzantium dated to 911 is better attested. The chronicle quotes it in considerable detail, and the legal language and provisions — covering manslaughter, theft, Rus\' traders in Constantinople, Byzantine ransom of captives — have linguistic and procedural features consistent with an authentic ninth- or tenth-century diplomatic text. This treaty is the most reliably documented event of Oleg\'s reign and provides the earliest detailed evidence of Rus\'–Byzantine commercial relations.'
        ]
      },
      {
        title: 'Death',
        paragraphs: [
          'The Primary Chronicle gives Oleg\'s death in 912. The manner of his death is one of the most famous pieces of chronicle legend. A soothsayer, questioned by Oleg, prophesies that the prince will die from his horse. Oleg distances himself from the horse; the horse dies; years later, Oleg goes to look at its bones and is bitten on the foot by a snake that crawls from the skull. He dies from the bite.',
          'This story closely parallels the Norse saga tradition recorded in the Old Norse Örvar-Odds saga, in which an identical prophesied death — by a snake from the skull of a dead horse — is central to the plot. Whether the two traditions share a common origin, or whether the chronicle episode represents a direct borrowing from Norse narrative convention, the story belongs to legend rather than historical documentation. It is possible that actual knowledge of Oleg\'s death circumstances was lost, and the legend filled the gap.',
          'The location of Oleg\'s death and burial is also disputed in the sources themselves: the chronicle gives different accounts in different versions, mentioning Staraya Ladoga and Kyiv as alternative burial places. This inconsistency suggests the detail was uncertain even in the twelfth century.'
        ]
      },
      {
        title: 'Legacy',
        paragraphs: [
          'Oleg\'s lasting importance in Rus\' history lies in three things: the establishment of Kyiv as the center of Rurikid power, the subjugation of neighboring Slavic peoples into a tribute-based political economy, and the initiation of diplomatic and commercial contact with Byzantium that the 911 treaty formalized. These developments — whatever their precise form in historical reality — set the structural conditions for what later sources call Kievan Rus\'.',
          'His epithet Veshchiy (Wise/Prophetic) connected his name to the soothsayer episode and a tradition of supernaturally informed leadership. Later Orthodox Christian perspective reinterpreted him somewhat negatively as a pagan ruler whose power rested on pre-Christian traditions — a contrast with the Christian rulers, especially Vladimir I, who followed.',
          'Modern Ukrainian and Russian historiography both claim Oleg as a founding figure. The contested nature of early Rus\' history — and the political sensitivities around whether it belongs to a "Russian" or "Ukrainian" historical tradition — have made Oleg\'s memory part of a living political argument rather than a settled historical question.'
        ]
      }
    ],
    keyAchievements: [
      {
        title: 'Seized Kyiv and declared it the center of Rus\' authority',
        description: 'The Primary Chronicle\'s account of Oleg taking Kyiv in 882 and calling it the "mother of Rus\' cities" frames this as the founding act of Kievan Rus\' as a coherent polity.'
      },
      {
        title: 'Extended Rurikid tribute relationships across the Rus\' lands',
        description: 'Subjugated Drevlians, Radimichians, Severians, and others to Rurikid authority, creating the economic base of the emerging Kievan state.'
      },
      {
        title: 'Conducted the 907 Byzantine campaign and concluded the 911 treaty',
        description: 'Whether or not the 907 campaign happened as described, the 911 treaty with Byzantium is the earliest well-documented Rus\'–Byzantine diplomatic agreement and one of the oldest textual sources for Rus\' political structure.'
      }
    ],
    timeline: [
      {
        date: '9th century',
        title: 'Birth unknown',
        description: 'No birth record exists. Oleg appears in the chronicle as a Varangian kinsman of Rurik, active from the 870s onward. His Norse name form, Helgi, implies Scandinavian origins.'
      },
      {
        date: 'c. 879',
        title: 'Becomes regent after Rurik\'s death',
        description: 'When Rurik dies (traditionally 879), the chronicle places Oleg in authority as guardian of Rurik\'s young son Igor, governing the northern Rus\' lands on his behalf.',
        links: [
          { title: 'Rurik', type: 'person', slug: 'rurik' },
          { title: 'Novgorod', type: 'location', slug: 'novgorod' }
        ]
      },
      {
        date: '882',
        title: 'Seizes Kyiv; kills Askold and Dir',
        description: 'According to the Primary Chronicle, Oleg moves south and takes Kyiv, eliminating rival Varangian rulers Askold and Dir and declaring Kyiv the "mother of Rus\' cities" — the political center of Rurikid power.',
        links: [{ title: 'Kievan Rus\'', type: 'location', slug: 'kievan-rus' }]
      },
      {
        date: 'Late 9th century',
        title: 'Extends tribute authority over neighboring peoples',
        description: 'The chronicle records campaigns against the Drevlians, Radimichians, Severians, and other peoples, extending the Rurikid tribute network along the main river routes between the Baltic and the Black Sea.',
        links: [{ title: 'Kievan Rus\'', type: 'location', slug: 'kievan-rus' }]
      },
      {
        date: '907',
        title: 'Chronicle: campaign against Constantinople',
        description: 'The Primary Chronicle describes a massive Rus\' assault on Constantinople in 907. Byzantine sources are silent on this campaign; historians treat the episode as a literary construction or compression of multiple events, though it likely reflects a period of Rus\'–Byzantine confrontation.',
        links: [{ title: 'Constantinople', type: 'location', slug: 'constantinople' }]
      },
      {
        date: '911',
        title: 'Treaty with Byzantium',
        description: 'A commercial and diplomatic treaty between Rus\' and Byzantium dated 911 is preserved in the Primary Chronicle. Its legal provisions — covering trade, manslaughter, theft, captive ransom — are detailed enough that most historians regard the text as based on an authentic document.',
        links: [
          { title: 'Constantinople', type: 'location', slug: 'constantinople' },
          { title: 'Byzantine Empire', type: 'location', slug: 'byzantine-empire' }
        ]
      },
      {
        date: 'c. 912',
        title: 'Traditional death; legendary snake-from-skull story',
        description: 'The chronicle dates Oleg\'s death to 912 and describes it through the famous legend: a soothsayer had foretold he would die from his horse; after the horse died, Oleg was bitten by a snake from its skull. The story parallels the Old Norse Örvar-Odds saga and is treated by historians as legendary rather than historical.'
      }
    ],
    relatedEntries: {
      people: [
        { title: 'Rurik', type: 'person', slug: 'rurik', label: 'Predecessor; Oleg governed as his successor' },
        { title: 'Igor of Kiev', type: 'person', slug: 'igor-of-kiev', label: 'Ward and dynastic successor' },
        { title: 'Olga of Kiev', type: 'person', slug: 'olga-of-kiev', label: 'Igor\'s wife; regent after Igor\'s death' }
      ],
      locations: [
        { title: 'Novgorod', type: 'location', slug: 'novgorod', label: 'Northern Rus\' power base' },
        { title: 'Kievan Rus\'', type: 'location', slug: 'kievan-rus', label: 'The polity he helped create' },
        { title: 'Constantinople', type: 'location', slug: 'constantinople', label: 'Target of his 907 campaign and 911 treaty' },
        { title: 'Byzantine Empire', type: 'location', slug: 'byzantine-empire', label: 'Diplomatic partner' }
      ],
      events: []
    },
    sources: [
      {
        title: 'Primary Chronicle — Internet Medieval Sourcebook',
        author: 'Fordham University / trans. S. H. Cross and O. P. Sherbowitz-Wetzor',
        type: 'primary source in translation',
        url: 'https://sourcebooks.fordham.edu/basis/pvl.asp'
      },
      {
        title: 'Oleg of Novgorod — Encyclopaedia Britannica',
        type: 'reference article',
        url: 'https://www.britannica.com/biography/Oleg-prince-of-Kiev'
      },
      {
        title: 'Oleg of Novgorod — World History Encyclopedia',
        type: 'reference article',
        url: 'https://www.worldhistory.org/Oleg_of_Novgorod/'
      },
      {
        title: 'Franklin, Simon and Jonathan Shepard: The Emergence of Rus\' 750–1200. London: Longman, 1996.',
        type: 'scholarly monograph',
        url: 'https://www.worldcat.org/title/emergence-of-rus-750-1200/oclc/33334787'
      },
      {
        title: 'Shepard, Jonathan (ed.): The Cambridge History of the Byzantine Empire c. 500–1492. Cambridge: Cambridge University Press, 2008.',
        type: 'scholarly reference',
        url: 'https://www.cambridge.org/core/books/cambridge-history-of-the-byzantine-empire-c5001492/D4C9F0B36E7E985F1AF0CFBA4F0CE9BD'
      }
    ]
  },

  // ── IGOR OF KIEV ───────────────────────────────────────────────────────────
  {
    id: 'igor-of-kiev',
    type: 'character',
    name: 'Igor of Kiev',
    aliases: ['Igor I of Kiev', 'Ihor of Kyiv', 'Ingvar (Norse equivalent name)'],
    born: 877,
    died: 945,
    deathAge: 'c. 68 (traditional chronology; uncertain)',
    causeOfDeath: 'Killed by the Drevlians during tribute collection',
    restingPlace: 'Near Iskorosten (Korosten), Drevlian territory (traditional)',
    location: 'Kiev/Kyiv, Kievan Rus\'',
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Klavdiy_Lebedev_Igor.jpg',
    summary: 'Ruler of Kievan Rus\' and successor in the Rurikid dynastic tradition, whose reign (c. 912–945) included campaigns against Byzantium independently corroborated by Byzantine sources, and who was killed by the Drevlian tribe during a disputed tribute collection.',
    title: 'Ruler of Kievan Rus\' and successor in the Rurikid tradition',
    roles: [
      'Ruler of Kievan Rus\'',
      'Son of Rurik (traditional)',
      'Successor to Oleg of Novgorod'
    ],
    birth: {
      date: 'c. 877 (traditional, chronicle chronology; uncertain)',
      place: { name: 'Unknown; likely the northern Rus\' lands' },
      note: 'Igor\'s birth date of around 877 is derived from the Primary Chronicle\'s chronological framework, which makes him an infant at Rurik\'s death in 879 — consistent with Oleg serving as regent. No independent source confirms the date or birthplace.'
    },
    death: {
      date: '945',
      place: { name: 'Drevlian territory; traditionally Iskorosten (modern Korosten, Ukraine)', slug: 'iskorosten' },
      circumstance: 'Killed by the Drevlians during a second tributary demand in 945. After dismissing most of his druzhina, Igor returned to the Drevlians for additional tribute; their prince Mal led the killing. The manner of death is described with different details in different sources — some accounts specify that he was bound between bent trees.'
    },
    quickFacts: {
      realm: 'Kievan Rus\'',
      dynasty: 'Rurikid',
      culture: 'Varangian-Rus\'',
      knownFor: '941 campaign against Byzantium; 944 Rus\'–Byzantine treaty; death at Drevlian hands; husband of Olga of Kiev'
    },
    imageInfo: {
      caption: 'Klavdy Lebedev, "Igor\'s Drevlian Campaign" (Polotye igoria drevlyanami / Полюдье Игоря), late 19th century. Lebedev\'s painting depicts the tribute-collection confrontation that ended with Igor\'s death.',
      creator: 'Klavdy Lebedev (1852–1916)',
      date: 'Late 19th century',
      source: 'Wikimedia Commons',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Klavdiy_Lebedev_Igor.jpg',
      note: 'A nineteenth-century Russian historical painting depicting events traditionally placed in 945. Not a contemporary depiction; painted from chronicle sources and the artist\'s interpretation.'
    },
    sectionImages: [
      {
        section: 'Death',
        src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Radziwill_Igor_Drevlians.jpg',
        alt: 'Radziwill Chronicle miniature showing Igor\'s death at the hands of the Drevlians',
        caption: 'Miniature from the Radziwill Chronicle (c. 1490) depicting Igor\'s death at the hands of the Drevlians in 945.',
        creator: 'Unknown illuminator; Radziwill Chronicle',
        date: 'c. 1490',
        source: 'Radziwill Chronicle / Wikimedia Commons',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Radziwill_Igor_Drevlians.jpg',
        note: 'Fifteenth-century manuscript illustration of a tenth-century event. Not a contemporary depiction.'
      }
    ],
    contentSections: [
      {
        title: 'Overview',
        paragraphs: [
          'Igor of Kiev is presented in the Primary Chronicle as the son of Rurik and the successor of Oleg, ruling Kievan Rus\' from roughly 912 to his violent death in 945. His reign is marked by campaigns against Byzantium, tribute collection across the Rus\' lands, and the fatal confrontation with the Drevlian tribe that ended his life and triggered one of the most famous vengeance narratives in early Rus\' tradition.',
          'Igor occupies a slightly firmer footing in the historical record than Rurik or Oleg. Byzantine sources — including Liutprand of Cremona\'s Antapodosis — mention a Rus\' attack on Constantinople in 941, broadly consistent with the chronicle account. A treaty of 944 between Rus\' and Byzantium is preserved in the Primary Chronicle with enough formal detail to appear based on an authentic document. Igor\'s death in 945 is narrated with the kind of specific, politically consequential detail — named actors, specific motivations, verifiable succession crisis — that suggests access to genuine tradition.'
        ]
      },
      {
        title: 'Birth and early life',
        paragraphs: [
          'Igor\'s birth is traditionally placed around 877, derived from the Primary Chronicle\'s chronological framework, which makes him an infant at the time of Rurik\'s death in 879. This is internally consistent — it explains why Oleg governed for so long as regent — but the 877 date rests on the chronicle\'s own arithmetic rather than any independent evidence.',
          'The chronicle says nothing of Igor\'s upbringing beyond identifying him as Rurik\'s son and noting that he was placed in Oleg\'s care. His marriage to Olga — who would become one of the most celebrated figures in early Rus\' history — is mentioned briefly; later traditions variously identify Olga as a Pskov noblewoman, a Varangian, or a Bulgarian princess, but none of these identifications can be verified.',
          'His name in its Norse form is Ingvar, a common Norse personal name, reflecting the same Varangian-Norse leadership layer visible in Rurik (Hrœrekr) and Oleg (Helgi).'
        ]
      },
      {
        title: 'As ruler of Kiev',
        paragraphs: [
          'Igor became ruler in Kyiv around 912, following Oleg\'s death. His early reign involved reasserting Rurikid authority over tributary peoples — the Drevlians and Ulichians appear in the chronicle as targets of campaigns in this period. The Drevlians, who occupied the forested region to the northwest of Kyiv, were particularly resistant to Rurikid tribute demands, and Igor\'s relationship with them would define his final years.',
          'The polyud — the seasonal circuit through the Rus\' lands in which the ruler and his druzhina (armed retinue) traveled from settlement to settlement collecting tribute, hospitality, and labor services — was the economic engine of Rurikid power. It was also a potential site of conflict if the ruler\'s demands exceeded what subject communities considered legitimate. The tensions that ultimately killed Igor arose directly from the polyud system.',
          'The chronicle\'s picture of Igor\'s domestic rule is thinner than the account of his relations with Byzantium. He appears primarily as a military leader maintaining and extending what Oleg had built, rather than as an administrative innovator. The actual mechanisms of governance — how tribute was collected, distributed, and converted into political power — are visible in the archaeological record of silver and silk finds along the Rus\' river routes, but not in narrative detail.'
        ]
      },
      {
        title: 'Campaigns and diplomacy with Byzantium',
        paragraphs: [
          'The Primary Chronicle records a major Rus\' campaign against Byzantium in 941. Igor led a large fleet across the Black Sea. Byzantine accounts corroborate the attack: Liutprand of Cremona, writing in the mid-tenth century, describes a Rus\' force attacking the coast of Asia Minor, and Byzantine naval ships deployed Greek fire against the Rus\' fleet, burning many ships and causing heavy casualties. Igor withdrew and the campaign failed. Liutprand says he heard the story from his stepfather, who was in Constantinople at the time — giving us a near-contemporary external witness.',
          'A second expedition followed in 944. The chronicle suggests the Byzantines sent envoys to meet Igor as he assembled his forces, offering tribute and negotiations rather than face another assault. A treaty was concluded between Rus\' and Byzantium in 944 or 945. The text of this treaty is preserved in the Primary Chronicle and, like the 911 treaty attributed to Oleg, contains enough formal legal language to be considered based on an authentic document. Significantly, the 944 treaty names individual Rus\' envoys and merchants — and many of the names are Norse (Ivar, Sludi, Uleb) alongside Slavic ones — giving historians a direct glimpse of the mixed Varangian-Slavic character of the Rurikid ruling class.',
          'These Byzantine contacts are among the best-documented events of Igor\'s reign precisely because they involved Byzantine record-keeping as well as the Rus\' chronicle tradition. The 941 attack in particular is one of the points where the Primary Chronicle\'s narrative can be checked against independent evidence.'
        ]
      },
      {
        title: 'Death',
        paragraphs: [
          'In 945, the Primary Chronicle records that Igor\'s druzhina complained that their share of tribute from the Drevlians was inadequate compared to what the druzhina of the military commander Sveneld had collected in the same region. Igor dismissed most of his men and returned with a small retinue to the Drevlian lands for an additional levy. The Drevlians, led by their prince Mal, killed him.',
          'The chronicle account is specific in its political logic: the men said, "The servants of Sveneld are richly equipped with weapons and garments, but we are naked. Come with us, Prince, after tribute, that both you and we may profit." Igor\'s decision to act on this and return with a small force reflects either poor judgment, greed, or a miscalculation about Drevlian tolerance — or some combination. The Drevlians\' response ("If a wolf comes among the sheep, he will take away the whole flock one by one unless he be killed") has the character of a later explanatory narrative, but the underlying political dynamic — overextended tribute demands provoking lethal resistance — is entirely plausible as history.',
          'Igor\'s death is traditionally placed in the region of Iskorosten (modern Korosten in northern Ukraine), the main Drevlian settlement. After killing him, the Drevlians sent messengers to his widow Olga proposing that she marry their prince Mal and unite their peoples. Olga\'s elaborate response — the chronicle describes four successive acts of vengeance, culminating in the burning of Iskorosten — became one of the most famous episodes of early Rus\' narrative literature, whether or not all its details are historical.'
        ]
      },
      {
        title: 'Legacy',
        paragraphs: [
          'Igor\'s most durable legacy is the succession he enabled. His marriage to Olga produced Sviatoslav, who became one of the most aggressive military rulers in early Rus\' history. Olga\'s regency after 945 — and her eventual conversion to Orthodox Christianity, which she received in Constantinople — set in motion the Christianization of the Rurikid house that culminated in Vladimir I\'s mass baptism of the Rus\' people in 988.',
          'The 944 treaty with Byzantium is among the richest primary sources for early Rus\' political and social structure. The names of Rus\' envoys and merchants listed in the treaty illuminate the mixed Varangian-Slavic composition of the ruling class and the commercial networks that connected Rus\' to the Byzantine world. This document, preserved because of Igor\'s diplomacy, has informed historians\'s understanding of ninth- and tenth-century Rus\' more than almost any other source.',
          'Igor also became a cautionary figure in later Rus\' tradition. The story of his death from excessive tribute demands was explicitly cited in the chronicle as the context for the later tax reforms associated with Olga — she is said to have rationalized tribute collection precisely to prevent a repetition of what happened to Igor. In this way, his death became a foundation story for Rus\' administrative development as well as a narrative of vengeance.'
        ]
      }
    ],
    keyAchievements: [
      {
        title: '941 campaign against Byzantium — independently corroborated',
        description: 'The 941 attack on Constantinople is confirmed by Byzantine sources including Liutprand of Cremona, making it one of the best-attested events in early Rus\' history.'
      },
      {
        title: 'Concluded the 944 Rus\'–Byzantine treaty',
        description: 'The treaty\'s preserved text, with its named Rus\' envoys and detailed legal provisions, is a primary source of exceptional value for early Rus\' social and political structure.'
      },
      {
        title: 'Maintained Rurikid rule through a long reign',
        description: 'Igor\'s approximately 33-year reign kept the Rurikid succession intact and enabled the careers of Olga and Sviatoslav that followed.'
      }
    ],
    timeline: [
      {
        date: 'c. 877',
        title: 'Traditional birth',
        description: 'Chronicle chronology places Igor\'s birth around 877, making him an infant at Rurik\'s death in 879. No independent source confirms the date or birthplace.',
        links: [{ title: 'Rurik', type: 'person', slug: 'rurik' }]
      },
      {
        date: '879',
        title: 'Rurik dies; Igor placed under Oleg\'s guardianship',
        description: 'Rurik\'s death leaves the infant Igor as nominal heir. Oleg governs as regent and continues Rurikid expansion, holding power for over three decades.',
        links: [
          { title: 'Rurik', type: 'person', slug: 'rurik' },
          { title: 'Oleg of Novgorod', type: 'person', slug: 'oleg-of-novgorod' }
        ]
      },
      {
        date: 'c. 912',
        title: 'Succeeds Oleg as ruler of Kiev',
        description: 'After Oleg\'s death, Igor takes direct rule of Kyiv and the Rurikid power structure. His early reign involves campaigns against the Drevlians and Ulichians to reassert tributary authority.',
        links: [
          { title: 'Oleg of Novgorod', type: 'person', slug: 'oleg-of-novgorod' },
          { title: 'Kievan Rus\'', type: 'location', slug: 'kievan-rus' }
        ]
      },
      {
        date: '941',
        title: 'Campaign against Byzantium; fleet burned by Greek fire',
        description: 'Igor leads a major Rus\' fleet against Constantinople. Byzantine ships use Greek fire against the Rus\' vessels, burning much of the fleet. Igor withdraws. Liutprand of Cremona, writing near-contemporaneously, independently corroborates the attack.',
        links: [
          { title: 'Constantinople', type: 'location', slug: 'constantinople' },
          { title: 'Byzantine Empire', type: 'location', slug: 'byzantine-empire' }
        ]
      },
      {
        date: '944',
        title: 'Second Byzantine expedition and treaty',
        description: 'Igor assembles a second force; the Byzantines send envoys to negotiate. A treaty concluded in 944–945 is preserved in the Primary Chronicle with named Rus\' envoys — many with Norse names — and detailed commercial and legal provisions.',
        links: [
          { title: 'Constantinople', type: 'location', slug: 'constantinople' },
          { title: 'Byzantine Empire', type: 'location', slug: 'byzantine-empire' }
        ]
      },
      {
        date: '945',
        title: 'Returns to Drevlian lands for second tribute collection with small retinue',
        description: 'After his druzhina complains about tribute returns, Igor dismisses most of his men and returns to the Drevlians for additional levy. The Drevlians, led by Prince Mal, interpret his return as intolerable overreach.',
        links: [{ title: 'Iskorosten', type: 'location', slug: 'iskorosten' }]
      },
      {
        date: '945',
        title: 'Killed by the Drevlians',
        description: 'The Drevlians kill Igor near Iskorosten. His death ends one of the longer reigns in the Rurikid tradition and triggers the regency of his widow Olga, whose vengeance against the Drevlians became one of the most celebrated episodes in early Rus\' narrative.',
        links: [
          { title: 'Iskorosten', type: 'location', slug: 'iskorosten' },
          { title: 'Olga of Kiev', type: 'person', slug: 'olga-of-kiev' }
        ]
      },
      {
        date: 'After 945',
        title: 'Olga takes power as regent; avenges Igor',
        description: 'Olga of Kiev governs as regent for their son Sviatoslav. The Primary Chronicle records four acts of vengeance against the Drevlians, culminating in the burning of Iskorosten. Olga later converts to Orthodox Christianity in Constantinople.',
        links: [
          { title: 'Olga of Kiev', type: 'person', slug: 'olga-of-kiev' },
          { title: 'Iskorosten', type: 'location', slug: 'iskorosten' }
        ]
      }
    ],
    relatedEntries: {
      people: [
        { title: 'Rurik', type: 'person', slug: 'rurik', label: 'Traditional father and dynastic progenitor' },
        { title: 'Oleg of Novgorod', type: 'person', slug: 'oleg-of-novgorod', label: 'Regent and predecessor' },
        { title: 'Olga of Kiev', type: 'person', slug: 'olga-of-kiev', label: 'Wife; regent after Igor\'s death' },
        { title: 'Harald Hardrada', type: 'person', slug: 'harald-hardrada', label: 'Later Varangian figure who served at the Kyiv court' }
      ],
      locations: [
        { title: 'Kievan Rus\'', type: 'location', slug: 'kievan-rus', label: 'Realm' },
        { title: 'Constantinople', type: 'location', slug: 'constantinople', label: 'Target of 941 campaign; site of 944 treaty' },
        { title: 'Byzantine Empire', type: 'location', slug: 'byzantine-empire', label: 'Diplomatic and military counterpart' },
        { title: 'Iskorosten', type: 'location', slug: 'iskorosten', label: 'Site of his death' },
        { title: 'Novgorod', type: 'location', slug: 'novgorod', label: 'Northern Rus\' power base' }
      ],
      events: []
    },
    sources: [
      {
        title: 'Primary Chronicle — Internet Medieval Sourcebook',
        author: 'Fordham University / trans. S. H. Cross and O. P. Sherbowitz-Wetzor',
        type: 'primary source in translation',
        url: 'https://sourcebooks.fordham.edu/basis/pvl.asp'
      },
      {
        title: 'Igor of Kiev — Encyclopaedia Britannica',
        type: 'reference article',
        url: 'https://www.britannica.com/biography/Igor-prince-of-Kiev'
      },
      {
        title: 'Igor of Kiev — World History Encyclopedia',
        type: 'reference article',
        url: 'https://www.worldhistory.org/Igor_of_Kiev/'
      },
      {
        title: 'Liutprand of Cremona: Antapodosis (c. 958–962) — Internet Medieval Sourcebook',
        type: 'primary source in translation',
        url: 'https://sourcebooks.fordham.edu/basis/liutprand-antapodosis.asp'
      },
      {
        title: 'Franklin, Simon and Jonathan Shepard: The Emergence of Rus\' 750–1200. London: Longman, 1996.',
        type: 'scholarly monograph',
        url: 'https://www.worldcat.org/title/emergence-of-rus-750-1200/oclc/33334787'
      }
    ]
  },

  // ── OLGA OF KIEV ───────────────────────────────────────────────────────────
  {
    id: 'olga-of-kiev',
    type: 'character',
    name: 'Olga of Kiev',
    aliases: ['Saint Olga', 'Olga the Wise', 'Helga (Norse equivalent name)', 'Equal-to-the-Apostles (Orthodox title)'],
    born: 890,
    died: 969,
    deathAge: 'c. 79 (traditional chronology; uncertain)',
    causeOfDeath: 'Natural causes',
    restingPlace: 'Kyiv; relics later translated to the Church of the Tithes',
    location: 'Kiev/Kyiv, Kievan Rus\'',
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Viktor_Vasnetsov_-_Princess_Olga.jpg',
    summary: 'Regent of Kievan Rus\' after the murder of her husband Igor of Kiev in 945, the first Rurikid ruler to convert to Orthodox Christianity, and one of the most powerful political figures of the early Rus\' period.',
    title: 'Regent of Kievan Rus\' and first Rurikid Christian ruler',
    roles: [
      'Regent of Kievan Rus\' (945–c. 960)',
      'Princess of Kyiv',
      'First Rurikid ruler to convert to Orthodox Christianity'
    ],
    birth: {
      date: 'c. 890 (traditional; uncertain)',
      place: { name: 'Unknown; traditions suggest Pskov region or Varangian origins' },
      note: 'Olga\'s origins are disputed. The Primary Chronicle offers no birthplace; later traditions variously make her a Pskov noblewoman, a Varangian, or of Bulgarian origin. None of these can be verified.'
    },
    death: {
      date: '969',
      place: { name: 'Kyiv', slug: 'kievan-rus' },
      circumstance: 'Died in Kyiv in 969. She had converted to Christianity in Constantinople around 957 and spent her final years as a Christian ruler in a court that remained predominantly pagan under her son Sviatoslav.'
    },
    quickFacts: {
      realm: 'Kievan Rus\'',
      dynasty: 'Rurikid (by marriage)',
      culture: 'Varangian-Rus\'',
      knownFor: 'Regent after Igor\'s death; vengeance against the Drevlians; conversion to Orthodox Christianity; administrative reforms; canonization as a saint'
    },
    imageInfo: {
      caption: 'Viktor Vasnetsov, "Princess Olga" (Княгиня Ольга), from his frescoes in Saint Vladimir\'s Cathedral, Kyiv, c. 1885–1896. Olga is depicted as a Christian princess in a later devotional portrait tradition.',
      creator: 'Viktor Vasnetsov (1848–1926)',
      date: 'c. 1885–1896',
      source: 'Wikimedia Commons',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Viktor_Vasnetsov_-_Princess_Olga.jpg',
      note: 'A late nineteenth-century devotional portrait from the cathedral interior. Not a contemporary likeness; painted from iconographic tradition rather than historical documentation.'
    },
    contentSections: [
      {
        title: 'Overview',
        paragraphs: [
          'Olga of Kiev was the regent of Kievan Rus\' following the murder of her husband Igor in 945, and the first ruler of the Rurikid dynasty to convert to Orthodox Christianity. She governed on behalf of their young son Sviatoslav for roughly fifteen years, during which she conducted her celebrated vengeance against the Drevlians, undertook a diplomatic mission to Constantinople where she was baptized, and — according to the chronicle — introduced administrative reforms to the tribute system that had contributed to Igor\'s death.',
          'Olga is among the best-documented figures of early Rus\' history, in part because her embassy to Constantinople in around 957 is recorded by the Byzantine Emperor Constantine VII Porphyrogennetos in his De Cerimoniis, providing an external source that corroborates her historical existence and her visit to the Byzantine court. She was later canonized as a saint in the Orthodox Church, becoming one of the foundational figures of Russian and Ukrainian Christian identity.'
        ]
      },
      {
        title: 'Birth and early life',
        paragraphs: [
          'Olga\'s origins are not given in the Primary Chronicle. Later traditions variously identify her as a woman of noble birth from the Pskov region, as a Varangian, or as a Bulgarian princess brought to Kyiv as part of a diplomatic arrangement. None of these traditions can be verified against contemporary sources, and historians generally treat her origins as unknown.',
          'Her marriage to Igor is mentioned in the chronicle without elaboration. The name Olga corresponds to the Old Norse Helga, consistent with the Varangian naming conventions of the ruling class. Her intelligence and political ability are consistently emphasized in the chronicle, which credits her with the administrative reorganization of the tribute system in the years after Igor\'s death.'
        ]
      },
      {
        title: 'Regency and vengeance against the Drevlians',
        paragraphs: [
          'When the Drevlians killed Igor in 945, they sent ambassadors to Olga proposing that she marry their prince Mal. The Primary Chronicle records four acts of vengeance that Olga carried out in response, presented in a literary structure of escalating retribution. In the first, she had the Drevlian ambassadors buried alive in their boat. In the second, a second embassy was burned alive in a bathhouse. In the third, she killed Drevlian notables at a funeral feast ostensibly for Igor. In the fourth and most consequential, she laid siege to Iskorosten, and — the chronicle says — burned the city by means of birds carrying burning material tied to their legs.',
          'The four-vengeance structure has a folkloric quality that most historians treat as literary shaping rather than strict historical record. Nevertheless, the underlying historical reality — that Olga led a military campaign against the Drevlians, defeated them, and imposed severe terms — is broadly accepted. The burning of Iskorosten and the reassertion of Rurikid authority over the Drevlians removed the threat the Drevlian attack had posed to Rurikid continuity.'
        ]
      },
      {
        title: 'Administrative reforms',
        paragraphs: [
          'The chronicle credits Olga with reorganizing the system of tribute collection in the aftermath of Igor\'s death. She is said to have established fixed tribute rates and created special collection points (pogosts) to replace the polyud — the personal circuit of tribute collection that had made the amounts liable to variation and escalation. If this account reflects genuine administrative change, Olga\'s reforms represent one of the first steps toward a more regular system of governance in Rus\'.',
          'Historians treat the pogost tradition with cautious interest. The word refers to a settlement with a church and cemetery, and later clearly served administrative functions. Whether Olga created the institution or simply regularized an existing practice — and whether the tribute reforms were as systematic as the chronicle implies — cannot be confirmed from current evidence, but the credit given to her in the primary source is notable.'
        ]
      },
      {
        title: 'Conversion to Christianity',
        paragraphs: [
          'Around 957, Olga traveled to Constantinople and was baptized as a Christian. Constantine VII Porphyrogennetos records her visit in De Cerimoniis, describing her reception at the imperial court in detail — including the protocol for her seating as a ruler. This is one of the few events of the early Rus\' period independently verified by Byzantine court documentation.',
          'The Primary Chronicle frames her baptism with a later legendary elaboration: it says the emperor wanted to marry her, and she outwitted him by insisting he serve as her godfather, after which she could point out that he could not marry his goddaughter. This story is generally treated as a later addition. The historical reality is that Olga was received at the Byzantine court as a significant diplomatic figure and underwent baptism there, taking the Christian name Helena.',
          'Olga\'s conversion did not immediately Christianize the Rus\'. Her son Sviatoslav remained pagan and showed no interest in conversion — the chronicle preserves a pointed exchange in which he tells her he cannot convert because his druzhina would mock him. The mass Christianization of the Rus\' came under her grandson Vladimir I in 988, more than a generation later. But Olga\'s conversion established a precedent and personal connection to Byzantine Christianity that shaped what followed.'
        ]
      },
      {
        title: 'Death',
        paragraphs: [
          'Olga died in Kyiv in 969. She had spent her final years in an ambiguous position — a Christian ruler in a court dominated by her pagan son, who had largely taken military and political command. The chronicle records that she continued to influence events and maintained connections to Christian clergy in Kyiv.',
          'She was later venerated as a saint in the Orthodox Church, receiving the title "Equal-to-the-Apostles" (Isapóstolos) — a high honor awarded to figures credited with the conversion of a people. Her feast day is 11 July. Her remains were translated to the Desyatynna Church (Church of the Tithes) in Kyiv under Vladimir I, who built the church in part as a statement of his Christian legitimacy.'
        ]
      },
      {
        title: 'Legacy',
        paragraphs: [
          'Olga is one of the most important figures in the Christianization of the Rus\'. Her baptism in Constantinople established a personal bond between the Rurikid house and Byzantine Christianity, and her administrative reorganization of Rus\' governance — whether fully historical or partially legendary — became a model credited to her in later tradition.',
          'She was canonized as a saint and became a patron figure of both Russian Orthodox and Ukrainian Greek Catholic traditions. Statues of Olga stand in Kyiv and Pskov. In modern Ukraine, she is claimed as a founding mother of the Ukrainian state; in Russia, as one of the earliest saints in the Russian Orthodox heritage. As with other early Rus\' figures, her memory sits at the intersection of history and modern national identity.',
          'Her importance to IronCodex lies in connecting the early Rurikid tradition — Rurik, Oleg, Igor — to the Christianization of Rus\' that would shape eastern European religious and political culture for centuries, and in providing one of the most documented political careers of any woman in the early medieval eastern European record.'
        ]
      }
    ],
    keyAchievements: [
      {
        title: 'Secured Rurikid succession through a political crisis',
        description: 'After Igor\'s murder, Olga\'s regency prevented the collapse of Rurikid authority and preserved the succession for Sviatoslav.'
      },
      {
        title: 'First Rurikid ruler to convert to Orthodox Christianity',
        description: 'Her baptism in Constantinople, documented by Constantine VII Porphyrogennetos, opened the personal and diplomatic connection that led to the mass conversion under Vladimir I in 988.'
      },
      {
        title: 'Canonized as a saint in the Orthodox Church',
        description: 'Olga received the title Equal-to-the-Apostles and is venerated across Russian Orthodox and Ukrainian Christian traditions.'
      },
      {
        title: 'Administrative reorganization of tribute collection',
        description: 'The Primary Chronicle credits her with establishing regular tribute rates and pogost collection points, representing an early step toward more systematic Rus\' governance.'
      }
    ],
    timeline: [
      {
        date: 'c. 890',
        title: 'Traditional birth (uncertain)',
        description: 'Olga\'s birth date and origins are unknown. She appears in the chronicle as Igor\'s wife; later traditions offer conflicting accounts of her background.'
      },
      {
        date: '945',
        title: 'Igor killed; Olga becomes regent',
        description: 'After the Drevlians kill Igor during a disputed tribute collection, Olga takes power as regent for their young son Sviatoslav.',
        links: [
          { title: 'Igor of Kiev', type: 'person', slug: 'igor-of-kiev' },
          { title: 'Iskorosten', type: 'location', slug: 'iskorosten' }
        ]
      },
      {
        date: '945–946',
        title: 'Vengeance against the Drevlians; Iskorosten burned',
        description: 'Olga conducts four acts of retribution against the Drevlians, culminating in the siege and burning of their capital Iskorosten (modern Korosten). The chronicle account has a literary-legendary structure, but the military reassertion of Rurikid authority over the Drevlians is historically plausible.',
        links: [{ title: 'Iskorosten', type: 'location', slug: 'iskorosten' }]
      },
      {
        date: 'c. 947',
        title: 'Administrative reforms: tribute regulation',
        description: 'The chronicle credits Olga with establishing fixed tribute rates and pogost collection points, replacing the variable polyud system that had contributed to Igor\'s death.'
      },
      {
        date: 'c. 957',
        title: 'Embassy to Constantinople; baptism',
        description: 'Olga visits Constantinople and is baptized as a Christian, taking the name Helena. Constantine VII Porphyrogennetos describes her reception in De Cerimoniis — one of the most direct Byzantine documentary references to an early Rus\' ruler.',
        links: [
          { title: 'Constantinople', type: 'location', slug: 'constantinople' },
          { title: 'Byzantine Empire', type: 'location', slug: 'byzantine-empire' }
        ]
      },
      {
        date: 'c. 960',
        title: 'Sviatoslav takes active military command',
        description: 'As Sviatoslav reaches adulthood, he begins conducting his own military campaigns. Olga\'s formal regency gives way, though she remains in Kyiv and continues to influence affairs.',
        links: [{ title: 'Kievan Rus\'', type: 'location', slug: 'kievan-rus' }]
      },
      {
        date: '969',
        title: 'Death in Kyiv',
        description: 'Olga dies in Kyiv, having spent her final years as a Christian in a court where Sviatoslav and his druzhina remained pagan. She was later canonized as a saint and given the title Equal-to-the-Apostles.',
        links: [{ title: 'Kievan Rus\'', type: 'location', slug: 'kievan-rus' }]
      }
    ],
    relatedEntries: {
      people: [
        { title: 'Igor of Kiev', type: 'person', slug: 'igor-of-kiev', label: 'Husband; his murder precipitated her regency' },
        { title: 'Rurik', type: 'person', slug: 'rurik', label: 'Father-in-law in dynastic tradition' },
        { title: 'Oleg of Novgorod', type: 'person', slug: 'oleg-of-novgorod', label: 'Predecessor; established the Kyiv power base' }
      ],
      locations: [
        { title: 'Kievan Rus\'', type: 'location', slug: 'kievan-rus', label: 'Realm she governed as regent' },
        { title: 'Constantinople', type: 'location', slug: 'constantinople', label: 'Site of her baptism, documented by Constantine VII' },
        { title: 'Byzantine Empire', type: 'location', slug: 'byzantine-empire', label: 'Diplomatic and religious connection' },
        { title: 'Iskorosten', type: 'location', slug: 'iskorosten', label: 'Drevlian capital she besieged and burned' }
      ],
      events: []
    },
    sources: [
      {
        title: 'Primary Chronicle — Internet Medieval Sourcebook',
        author: 'Fordham University / trans. S. H. Cross and O. P. Sherbowitz-Wetzor',
        type: 'primary source in translation',
        url: 'https://sourcebooks.fordham.edu/basis/pvl.asp'
      },
      {
        title: 'Olga of Kiev — Encyclopaedia Britannica',
        type: 'reference article',
        url: 'https://www.britannica.com/biography/Olga-princess-of-Kiev'
      },
      {
        title: 'Olga of Kiev — World History Encyclopedia',
        type: 'reference article',
        url: 'https://www.worldhistory.org/Olga_of_Kiev/'
      },
      {
        title: 'Constantine VII Porphyrogennetos: De Cerimoniis — Dumbarton Oaks / Byzantine Studies',
        type: 'primary source reference',
        url: 'https://www.doaks.org/resources/online-publications'
      },
      {
        title: 'Franklin, Simon and Jonathan Shepard: The Emergence of Rus\' 750–1200. London: Longman, 1996.',
        type: 'scholarly monograph',
        url: 'https://www.worldcat.org/title/emergence-of-rus-750-1200/oclc/33334787'
      }
    ]
  }
]

// ── New location entries ──────────────────────────────────────────────────────

const newLocations = [
  {
    id: 'novgorod',
    type: 'location',
    name: 'Novgorod',
    locationType: 'City',
    kingdom: 'Northern Rus\' / Kievan Rus\'',
    year: '9th century onward',
    period: 'Early medieval / Viking Age',
    region: 'Northwestern Russia (modern Veliky Novgorod)',
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Novgorod_Sophia_Cathedral.jpg',
    summary: 'One of the most important cities of medieval Russia and a primary seat of early Rurikid power, Novgorod was a major trading center on the Volkhov River with connections to Scandinavia, the Baltic, and the river routes leading south toward Kyiv and Byzantium.',
    imageInfo: {
      caption: 'Cathedral of Saint Sophia, Veliky Novgorod, founded in the eleventh century under Yaroslav the Wise. The cathedral became the religious and civic center of medieval Novgorod.',
      source: 'Wikimedia Commons',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Novgorod_Sophia_Cathedral.jpg',
      note: 'Modern photograph of an eleventh-century structure. The cathedral and its kremlin are major surviving monuments of medieval Novgorodian culture.'
    },
    contentSections: [
      {
        title: 'Overview',
        paragraphs: [
          'Novgorod (modern Veliky Novgorod) on the Volkhov River in northwestern Russia was one of the most significant cities of medieval eastern Europe. In the Primary Chronicle tradition, it is the city most closely associated with Rurik\'s establishment of Varangian rule in the northern Rus\' lands around 862. Archaeological evidence confirms a substantial settlement at the site from the ninth century, though the city\'s precise origins and early form remain subjects of ongoing research.',
          'From the ninth through the fifteenth centuries, Novgorod served as a major commercial hub connecting the Scandinavian and Baltic world to the river routes leading south toward Kyiv and Constantinople. Its position on the trade network known as the route "from the Varangians to the Greeks" gave it economic and political importance that outlasted the rise of Kyiv and continued long after Kievan Rus\' fragmented under pressure from Mongol invasion.'
        ]
      },
      {
        title: 'Rurikid associations and early history',
        paragraphs: [
          'The Primary Chronicle presents Novgorod as the seat of Rurik\'s power following the invitation of the Varangians in 862, though some versions of the chronicle tradition place Rurik\'s initial base at Ladoga (Staraya Ladoga), the fortified settlement to the north on the same Volkhov River. Archaeological work at Staraya Ladoga has confirmed a Scandinavian presence from the eighth century, predating the chronicle\'s Rurik tradition by at least a generation.',
          'Whatever the specific sequence of early Varangian settlement, Novgorod emerged as a major center of early Rus\' power. When Oleg moved south to Kyiv around 882, Novgorod remained important as the northern anchor of the Rurikid system — its revenue and its position on Baltic-Black Sea trade routes made it indispensable to the emerging Kyivan state.',
          'The city\'s political culture developed a strong tradition of civic assembly — the veche (public assembly) — that gave Novgorodian elites and freemen a role in governance unusual in the Rus\' world. By the high medieval period, Novgorod had become the Republic of Novgorod, one of the few genuinely republican polities in medieval Europe, before its eventual subordination to Moscow in 1478.'
        ]
      },
      {
        title: 'Trade and cultural connections',
        paragraphs: [
          'Novgorod\'s wealth derived from its position at the intersection of the Baltic trade world and the river route south. Furs, wax, honey, and slaves from the forests of northern Russia moved through Novgorod toward the Baltic and Scandinavia; silver, silk, and luxury goods from Byzantium and the Islamic world moved north in return. Arabic dirhams found across Scandinavia and the Baltic reflect the silver that flowed through the eastern trade routes, with Novgorod as a major node.',
          'The Hanseatic League established a major trading station — the Peterhof — in Novgorod in the thirteenth century, reflecting the city\'s importance to long-distance northern European commerce centuries after the Viking Age. The survival of thousands of birchbark letters from medieval Novgorod, many concerned with trade disputes, family matters, and civic affairs, gives historians an unusually vivid picture of urban life in a medieval Rus\' city.'
        ]
      }
    ],
    sources: [
      {
        title: 'Novgorod — Encyclopaedia Britannica',
        type: 'reference article',
        url: 'https://www.britannica.com/place/Novgorod-Russia'
      },
      {
        title: 'Novgorod — World History Encyclopedia',
        type: 'reference article',
        url: 'https://www.worldhistory.org/Novgorod/'
      },
      {
        title: 'Brisbane, Mark (ed.): The Archaeology of Novgorod, Russia. Lincoln: Society for Medieval Archaeology, 1992.',
        type: 'archaeological study',
        url: 'https://www.worldcat.org/title/archaeology-of-novgorod-russia/oclc/27812462'
      }
    ]
  },
  {
    id: 'iskorosten',
    type: 'location',
    name: 'Iskorosten',
    locationType: 'Town / Settlement',
    kingdom: 'Drevlian territory / Kievan Rus\'',
    year: '10th century',
    period: 'Early medieval / Viking Age',
    region: 'Polesia, northern Ukraine (modern Korosten)',
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Korosten_city_Ukraine.jpg',
    summary: 'Capital of the Drevlian tribal territory and the location most associated with the death of Igor of Kiev in 945 and the subsequent punitive siege by Olga of Kiev.',
    imageInfo: {
      caption: 'Modern city of Korosten, Ukraine — the site of medieval Iskorosten, Drevlian capital and the location of Igor\'s death in 945.',
      source: 'Wikimedia Commons',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Korosten_city_Ukraine.jpg',
      note: 'Modern photograph. The medieval settlement was destroyed or severely damaged in Olga\'s siege of 945–946; the modern city of Korosten occupies the same general area.'
    },
    contentSections: [
      {
        title: 'Overview',
        paragraphs: [
          'Iskorosten (modern Korosten in Zhytomyr Oblast, northern Ukraine) was the principal settlement of the Drevlians, a Slavic tribal group who occupied the forested region to the northwest of Kyiv. In 945, it became the site of the most consequential episode in the early Rurikid period: the death of Igor of Kiev at Drevlian hands, and the subsequent siege and burning of the town by Igor\'s widow Olga.',
          'The name Iskorosten is traditionally derived from a Slavic word for stone or rock, reflecting the settlement\'s position on granite outcroppings on the Uzh River. Archaeological work in the Korosten area has confirmed settlement activity in the early medieval period, consistent with the chronicle\'s identification of this area as a Drevlian center.'
        ]
      },
      {
        title: 'Igor\'s death and Olga\'s siege',
        paragraphs: [
          'The Primary Chronicle places Igor\'s death in the Drevlian lands in 945. After Igor returned with a small retinue to demand additional tribute from the Drevlians, their prince Mal ordered him killed. The Drevlians then sent ambassadors to Kyiv to propose that Olga marry Mal and unite their peoples under Drevlian leadership.',
          'Olga\'s response, as the chronicle tells it, involved four successive acts of retribution, culminating in a siege of Iskorosten itself. The chronicle describes her burning the city through a ruse involving birds carrying burning material tied to their legs — an episode that most historians treat as legendary elaboration on what was likely a straightforward military siege. Whether or not the method was as exotic as described, the destruction of Iskorosten and the crushing of Drevlian independence appears to have been real: the Drevlians disappear as a distinct political entity from Rus\' sources after this episode.',
          'Olga\'s siege of Iskorosten reasserted Rurikid authority over the Drevlian lands, avenged Igor, and sent a clear message about the consequences of killing a Rurikid prince. The event became foundational in the early Rus\' narrative tradition and is one of the most-discussed episodes in the Primary Chronicle.'
        ]
      }
    ],
    sources: [
      {
        title: 'Korosten (Iskorosten) — World History Encyclopedia',
        type: 'reference article',
        url: 'https://www.worldhistory.org/Iskorosten/'
      },
      {
        title: 'Primary Chronicle — Internet Medieval Sourcebook',
        author: 'trans. S. H. Cross and O. P. Sherbowitz-Wetzor',
        type: 'primary source in translation',
        url: 'https://sourcebooks.fordham.edu/basis/pvl.asp'
      }
    ]
  }
]

// ── Insert into data ──────────────────────────────────────────────────────────
data.characters.push(...newCharacters)
data.locations.push(...newLocations)

fs.writeFileSync(dataPath, JSON.stringify(data, null, 2))

console.log('Added characters:', newCharacters.map(c => c.id).join(', '))
console.log('Added locations:', newLocations.map(l => l.id).join(', '))
console.log('Total characters now:', data.characters.length)
console.log('Total locations now:', data.locations.length)
