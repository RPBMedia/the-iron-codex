// Portugal foundations: the people, events, and polities the Kingdom of
// Portugal anchor article links to. 2 people (Henry of Burgundy, Teresa of
// León), 4 events (São Mamede, Ourique, Treaty of Zamora, Siege of Lisbon),
// 2 locations (Kingdom of León as a full polity article, Lisbon).
import fs from 'node:fs'

const dataPath = new URL('../server/data/history.json', import.meta.url)
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'))
const fp = (n) => `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(n)}`
const pg = (n) => `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(n)}`
const P = (personSlug, displayName, note) => ({ personSlug, displayName, ...(note ? { note } : {}) })
const UN = (displayName, note) => ({ displayName, ...(note ? { note } : {}) })
const NONE = (displayName, note) => ({ status: 'none', displayName, note })

// ── PEOPLE ──────────────────────────────────────────────────────────────────
const people = [
  {
    id: 'henry-count-of-portugal', type: 'character', name: 'Henry, Count of Portugal', aliases: ['Henry of Burgundy', 'Conde D. Henrique'],
    born: 1066, died: 1112, deathAge: 'about 46', causeOfDeath: 'Died at Astorga, reportedly of wounds or illness contracted during the Leonese succession wars',
    restingPlace: 'Braga Cathedral', location: 'County of Portugal',
    image: fp('Henry,_Count_of_Portugal.jpg'),
    imageInfo: { caption: 'Henry, Count of Portugal, in the Portuguese manuscript-portrait tradition.', creator: 'Unknown artist', date: 'later medieval tradition', source: 'Wikimedia Commons', sourceUrl: pg('Henry,_Count_of_Portugal.jpg'), note: 'A posthumous imagined likeness; no contemporary portrait survives.' },
    summary: 'Henry of Burgundy received the County of Portugal from Alfonso VI of León-Castile in 1096 and governed it as a crusading frontier lordship — the seed from which his son Afonso Henriques grew an independent kingdom.',
    title: 'count of Portugal', roles: ['Count of Portugal'],
    birth: { date: 'c. 1066', place: 'Duchy of Burgundy', note: 'A younger son of the Burgundian ducal house; grandson of Duke Robert I and great-grandson of King Robert II of France.' },
    death: { date: '22 May 1112', place: 'Astorga, León', note: 'Died campaigning in the chaos that followed Alfonso VI\'s death.', circumstance: 'Buried in Braga Cathedral; his widow Teresa took over the county\'s government.' },
    quickFacts: { realm: 'County of Portugal (under León)', dynasty: 'House of Burgundy (Portuguese branch)', culture: 'Franco-Iberian frontier', knownFor: 'founding the comital house from which the Portuguese monarchy grew' },
    isRuler: true,
    succession: { office: 'Count of Portugal', predecessor: NONE('None as count of the second county', 'Alfonso VI created the county for Henry in 1096, detaching it from Raymond of Burgundy\'s Galicia'), successor: P('teresa-of-leon', 'Teresa of León', 'His widow, who ruled the county for their young son') },
    overview: [
      'Henry of Burgundy came to Iberia in the wave of French knights drawn to the wars against the Almoravids after the fall of Toledo in 1085. Alfonso VI of León-Castile married him to his illegitimate daughter Teresa and, in 1096, granted the pair the lands between the Minho and the Tagus — the County of Portugal, held in vassalage to the Leonese crown.',
      'Henry governed from Guimarães and Braga, defended the Tagus frontier against Almoravid attacks, promoted the see of Braga\'s claims to metropolitan rank, and in the succession chaos after Alfonso VI\'s death in 1109 manoeuvred — unsuccessfully but instructively — to make his county independent in all but name. His son Afonso Henriques completed what the father\'s ambition had sketched.'
    ],
    contentSections: [
      { title: 'Overview', paragraphs: [
        'Henry of Burgundy came to Iberia in the wave of French knights drawn to the wars against the Almoravids after the fall of Toledo in 1085. Alfonso VI of León-Castile married him to his illegitimate daughter Teresa and, in 1096, granted the pair the lands between the Minho and the Tagus — the County of Portugal, held in vassalage to the Leonese crown.',
        'Henry governed from Guimarães and Braga, defended the Tagus frontier against Almoravid attacks, promoted the see of Braga\'s claims to metropolitan rank, and in the succession chaos after Alfonso VI\'s death in 1109 manoeuvred — unsuccessfully but instructively — to make his county independent in all but name. His son Afonso Henriques completed what the father\'s ambition had sketched.'
      ]},
      { title: 'Birth and early life', paragraphs: [
        'Henry was born about 1066 into the ducal house of Burgundy, a younger son with royal Capetian blood and no inheritance. Like his elder kinsman Raymond of Burgundy he sought his fortune in the Iberian wars, arriving in the retinues that answered Alfonso VI\'s appeals after the Almoravid victory at Sagrajas in 1086.',
        'Service brought marriage: Teresa, Alfonso\'s favourite illegitimate daughter, came with the frontier lands of the old Portucale county. The grant of 1096 made Henry a count on the most exposed edge of Christian Iberia — a position of danger and, precisely for that reason, of unusual autonomy.'
      ]},
      { title: 'Character and Personality', paragraphs: [
        'The chronicle record of Henry is thin and mostly administrative — charters, campaigns, and church politics — and honesty requires saying that his personality survives only in outline. What the documents show is a persistent negotiator: he attended the councils of the realm, pressed Braga\'s metropolitan case at Rome until it succeeded in 1100, and extracted from the dying Alfonso VI\'s court every concession the moment offered.',
        'Later Portuguese tradition, writing under his descendants, made him a crusading paladin and even sent him on pilgrimage to the Holy Land; the contemporary evidence supports the soldier — he fought Almoravid incursions for fifteen years — but not the legend. His measurable legacy is the political instinct he transmitted: every ambiguity in his vassalage that could be stretched toward autonomy, he stretched.'
      ]},
      { title: 'Count of Portugal', paragraphs: [
        'Henry\'s county ran from the Minho to the Tagus, with its heart in the old Suevic-era centres of Braga and Guimarães. His government was frontier government: repopulating war-scarred districts with charters of settlement, garrisoning the line of the Mondego and Tagus, and riding to the great defeats and stands of the Almoravid wars — including the disaster at Uclés in 1108, where the Leonese heir fell and the whole peninsula\'s politics broke open.',
        'In the crisis that followed — Alfonso VI dead in 1109, his heiress Urraca contested by her Aragonese husband and by every magnate with a claim — Henry played all sides for Portuguese advantage, allying and breaking with Alfonso the Battler and with Urraca\'s partisans in turn. He died at Astorga in May 1112, mid-intrigue, leaving Teresa a county that had learned to behave like a principality.'
      ]},
      { title: 'Legacy', paragraphs: [
        'Henry founded the comital house that became the Portuguese royal dynasty within a generation: his son Afonso Henriques took the royal title by 1139, and every king of Portugal to 1383 descended from him in the direct male line — the "Afonsine" or Burgundian dynasty of Portuguese historiography.',
        'His promotion of Braga — metropolitan see from 1100, seat of his tomb — gave the future kingdom an ecclesiastical capital independent of Compostela and Toledo, an underrated precondition for political independence. The count who never stopped renegotiating his vassalage was buried in the cathedral whose autonomy he had won first.'
      ]}
    ],
    timeline: [
      { date: 'c. 1066', title: 'Born in Burgundy', description: 'A younger son of the Burgundian ducal house, great-grandson of Robert II of France.' },
      { date: 'c. 1087–1094', title: 'To the Iberian wars', description: 'Joins the French knights reinforcing Alfonso VI of León-Castile against the Almoravids.' },
      { date: '1096', title: 'Count of Portugal', description: 'Alfonso VI grants Henry and Teresa the county between the Minho and the Tagus.' },
      { date: '1100', title: 'Braga restored to metropolitan rank', description: 'Henry\'s lobbying at Rome wins the see of Braga its archbishopric, an ecclesiastical spine for the county.' },
      { date: '1108', title: 'Uclés and the succession crisis', description: 'The Leonese heir Sancho falls to the Almoravids; Alfonso VI\'s death in 1109 opens the war of Urraca\'s succession.' },
      { date: '1109–1112', title: 'Playing the crisis', description: 'Henry shifts between Urraca and Alfonso the Battler, bargaining Portuguese autonomy from both.' },
      { date: '22 May 1112', title: 'Dies at Astorga', description: 'Teresa rules the county for their three-year-old son Afonso Henriques.' }
    ],
    relatedEntries: {
      people: [
        { title: 'Teresa of León', type: 'person', slug: 'teresa-of-leon', label: 'Wife, co-ruler, and successor' },
        { title: 'Afonso I of Portugal', type: 'person', slug: 'afonso-i-of-portugal', label: 'Son — the first king' }
      ],
      locations: [
        { title: 'Kingdom of León', type: 'location', slug: 'kingdom-of-leon', label: 'The overlord crown he served and circumvented' },
        { title: 'Kingdom of Portugal', type: 'location', slug: 'kingdom-of-portugal', label: 'The kingdom his county became' }
      ],
      events: [ { title: 'Battle of São Mamede', type: 'event', slug: 'battle-of-sao-mamede', label: 'Where his son seized his inheritance' } ]
    },
    sources: [
      { title: 'Wikimedia Commons image record', author: 'Wikimedia Commons', type: 'image source', url: pg('Henry,_Count_of_Portugal.jpg') },
      { title: 'Henry, Count of Portugal — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Henry,_Count_of_Portugal' },
      { title: 'The Formation of Medieval Portugal (in: Portugal in European and World History)', author: 'Modern Portuguese medievalist scholarship', type: 'book', note: 'Covers the Burgundian counts and the origins of the monarchy.' }
    ]
  },
  {
    id: 'teresa-of-leon', type: 'character', name: 'Teresa of León', aliases: ['Teresa of Portugal', 'Tarasia', 'Queen Teresa'],
    born: 1080, died: 1130, deathAge: 'about 50', causeOfDeath: 'Died in Galician exile two years after her defeat at São Mamede',
    restingPlace: 'Braga Cathedral, beside Count Henry', location: 'County of Portugal',
    image: fp('Theresa_of_Portugal_(1080-1130)_mini.jpg'),
    imageInfo: { caption: 'Teresa of León in a miniature from the Compendio de crónicas de reyes.', creator: 'Unknown illuminator', date: 'later medieval', source: 'Biblioteca Nacional de España — via Wikimedia Commons', sourceUrl: pg('Theresa_of_Portugal_(1080-1130)_mini.jpg'), note: 'A later imagined portrait from the chronicle tradition.' },
    summary: 'Teresa of León ruled the County of Portugal for eighteen years (1112–1128), styled herself queen, and fought her own son Afonso Henriques for the county\'s future — losing it at São Mamede in 1128.',
    title: 'countess and self-styled queen of Portugal', roles: ['Countess of Portugal', 'Self-styled Queen'],
    birth: { date: 'c. 1080', place: 'León', note: 'Illegitimate daughter of Alfonso VI of León-Castile and Jimena Muñoz.' },
    death: { date: '11 November 1130', place: 'Galicia', note: 'Died in exile north of the Minho after São Mamede.', circumstance: 'Her body was returned to Braga Cathedral to lie beside Count Henry.' },
    quickFacts: { realm: 'County of Portugal', dynasty: 'Jiménez (León) / House of Burgundy by marriage', culture: 'Leonese-Portuguese', knownFor: 'ruling Portugal as self-styled queen and the war with her son' },
    isRuler: true,
    succession: { office: 'Countess of Portugal', predecessor: P('henry-count-of-portugal', 'Henry, Count of Portugal', 'Her husband'), successor: P('afonso-i-of-portugal', 'Afonso I of Portugal', 'Her son, who took the county from her at São Mamede in 1128') },
    overview: [
      'Teresa, Alfonso VI\'s illegitimate daughter, governed Portugal from Count Henry\'s death in 1112 — first for her infant son, then increasingly for herself, using the title regina in her own charters from 1117, a claim the papal chancery itself sometimes echoed.',
      'Her rule balanced war and diplomacy with her half-sister Queen Urraca\'s León, Almoravid raids that burned as far as the suburbs of Coimbra, and the rising power of the Galician house of Traba, whose lord Fernando Pérez became her partner in power and in scandal. The Portuguese barons and her adolescent son raised their standard against that Galician connection, and at São Mamede, under the walls of Guimarães, her army was beaten and her rule ended.'
    ],
    contentSections: [
      { title: 'Overview', paragraphs: [
        'Teresa, Alfonso VI\'s illegitimate daughter, governed Portugal from Count Henry\'s death in 1112 — first for her infant son, then increasingly for herself, using the title regina in her own charters from 1117, a claim the papal chancery itself sometimes echoed.',
        'Her rule balanced war and diplomacy with her half-sister Queen Urraca\'s León, Almoravid raids that burned as far as the suburbs of Coimbra, and the rising power of the Galician house of Traba, whose lord Fernando Pérez became her partner in power and in scandal. The Portuguese barons and her adolescent son raised their standard against that Galician connection, and at São Mamede, under the walls of Guimarães, her army was beaten and her rule ended.'
      ]},
      { title: 'Birth and early life', paragraphs: [
        'Teresa was born about 1080 to Alfonso VI and the Leonese noblewoman Jimena Muñoz — illegitimate, but acknowledged, favoured, and politically useful. Her marriage to Henry of Burgundy around 1094 carried the county of Portugal as her dowry-portion, making her from the start co-proprietor rather than consort: the charters run in both names.',
        'The distinction mattered. When Henry died at Astorga in 1112, no regency council displaced her; the county\'s government passed to the countess as naturally as it had been shared with her.'
      ]},
      { title: 'Character and Personality', paragraphs: [
        'The sources for Teresa were mostly written by the victors — her son\'s court and the chroniclers of Santa Cruz de Coimbra — and they built the image later tradition amplified: the proud, wilful queen-mother, besotted with her Galician favourite, sacrificing Portuguese interests to Traba ambition. Read against the charters, a different figure emerges: a ruler who kept an exposed frontier county intact for sixteen years between three stronger powers, and whose "arrogant" royal style was a deliberate constitutional claim her son would simply inherit.',
        'Her political instincts were her father\'s: she fought Urraca when war served, treated when it did not, and used marriage-diplomacy — her daughters into the houses of Traba and beyond — exactly as every crowned contemporary did. The liaison with Fernando Pérez de Traba was real, publicly acknowledged, and politically fatal: it handed her son\'s party the banner of "Portugal for the Portuguese" that carried the field at São Mamede.'
      ]},
      { title: 'Rule of Portugal', paragraphs: [
        'Teresa\'s wars with Urraca ran along the Minho: she took Tui and the southern Galician marches in 1116, lost and regained ground through the truces of 1121 — negotiated with papal legates present, sister to sister, each styled queen. Southward she rebuilt what the Almoravids burned, recharted Coimbra in 1111 with Count Henry and pushed settlement back to the Mondego line after the great raid of 1116–1117 besieged the city itself.',
        'From about 1121 the Traba connection reshaped her court: Galician magnates in Portuguese honores, her daughter married into the house, Fernando Pérez holding Porto and Coimbra. The Portuguese baronage — the men of Entre-Douro-e-Minho who had made the county — coalesced around the young Afonso Henriques, who knighted himself at Zamora cathedral in 1125 in the old imperial fashion. The final breach came in 1128: the barons proclaimed the son, the mother summoned her Galician allies, and on 24 June the armies met at São Mamede field below Guimarães castle. Teresa\'s force was routed; she and Fernando Pérez withdrew north of the Minho for good.'
      ]},
      { title: 'Death and legacy', paragraphs: [
        'Teresa died in Galicia on 11 November 1130 and was carried back to Braga to lie beside Count Henry — the founding pair reunited by the son who had defeated her.',
        'Portuguese national tradition long cast her as the obstacle the founder-hero overcame; modern historiography has largely reversed the verdict, crediting her regency with preserving the county\'s autonomy through the most dangerous two decades of its existence and pioneering the royal title her son made permanent. Without Teresa\'s regina there is no straightforward road to Afonso\'s rex.'
      ]}
    ],
    timeline: [
      { date: 'c. 1080', title: 'Born', description: 'Illegitimate daughter of Alfonso VI of León-Castile and Jimena Muñoz.' },
      { date: 'c. 1094', title: 'Marries Henry of Burgundy', description: 'The county of Portugal comes with her as dowry; the couple rule jointly.' },
      { date: '1112', title: 'Takes the government', description: 'Rules Portugal on Henry\'s death, for her infant son and increasingly in her own right.' },
      { date: '1116–1117', title: 'War on two fronts', description: 'Fights Urraca on the Minho while an Almoravid host besieges Coimbra; the city holds.' },
      { date: '1117', title: 'Regina Tarasia', description: 'Begins styling herself queen in her charters, a claim papal letters sometimes repeat.' },
      { date: 'c. 1121', title: 'The Traba ascendancy', description: 'Fernando Pérez de Traba rises to dominance in her court and her county\'s key offices.' },
      { date: '24 June 1128', title: 'São Mamede', description: 'Her army is defeated by her son\'s partisans below Guimarães; her rule of Portugal ends.' },
      { date: '11 November 1130', title: 'Dies in exile', description: 'Dies in Galicia; buried beside Henry in Braga Cathedral.' }
    ],
    relatedEntries: {
      people: [
        { title: 'Henry, Count of Portugal', type: 'person', slug: 'henry-count-of-portugal', label: 'Husband and predecessor' },
        { title: 'Afonso I of Portugal', type: 'person', slug: 'afonso-i-of-portugal', label: 'Son, rival, and successor' }
      ],
      locations: [
        { title: 'Kingdom of León', type: 'location', slug: 'kingdom-of-leon', label: 'Her father\'s crown and her sister\'s rival realm' },
        { title: 'Kingdom of Portugal', type: 'location', slug: 'kingdom-of-portugal' }
      ],
      events: [ { title: 'Battle of São Mamede', type: 'event', slug: 'battle-of-sao-mamede', label: 'Where mother and son settled the county\'s future' } ]
    },
    sources: [
      { title: 'Wikimedia Commons image record', author: 'Wikimedia Commons', type: 'image source', url: pg('Theresa_of_Portugal_(1080-1130)_mini.jpg') },
      { title: 'Theresa, Countess of Portugal — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Theresa,_Countess_of_Portugal' },
      { title: 'D. Teresa (Rainhas de Portugal series)', author: 'Portuguese academic biography tradition', type: 'book', note: 'Modern scholarly treatment of the countess-queen.' }
    ]
  }
]

// ── EVENTS ──────────────────────────────────────────────────────────────────
const events = [
  {
    id: 'battle-of-sao-mamede', type: 'event', name: 'Battle of São Mamede', year: 1128,
    location: 'São Mamede field, by Guimarães',
    image: fp('Castelo_de_Guimaraes.jpg'),
    imageInfo: { caption: 'Guimarães Castle seen from the São Mamede field, where the battle was fought in 1128.', creator: 'Modern photograph', date: 'modern', source: 'Wikimedia Commons', sourceUrl: pg('Castelo_de_Guimaraes.jpg'), note: 'No medieval depiction of the battle survives; the battlefield and the castle it was fought beneath stand for it.' },
    summary: 'At São Mamede, outside Guimarães, the young Afonso Henriques and the Portuguese barons defeated his mother Teresa and her Galician allies — the founding battle of Portuguese autonomy.',
    details: 'Fought on 24 June 1128 on the field of São Mamede below Guimarães castle, the battle settled who would rule the County of Portugal: the countess-queen Teresa with her Traba partners, or her son Afonso Henriques at the head of the Portuguese baronage. The son\'s victory expelled the Galician connection and began the eleven-year march from county to kingdom.',
    eventType: 'Battle', conflict: 'Portuguese struggle for autonomy from León',
    factions: ['Portuguese barons of Afonso Henriques', 'Teresa of León and the house of Traba'],
    leaders: [
      { name: 'Afonso Henriques', faction: 'Portuguese barons', personId: 'afonso-i-of-portugal' },
      { name: 'Teresa of León', faction: 'Comital court', personId: 'teresa-of-leon' },
      { name: 'Fernando Pérez de Traba', faction: 'Comital court' }
    ],
    outcome: 'Victory for Afonso Henriques; Teresa and the Traba party were driven from Portugal.',
    participants: [
      { side: 'Portuguese barons', strength: { display: 'unknown — a baronial host of the county', confidence: 'unknown', note: 'No source records numbers; both forces were regional noble retinues and their followings.' }, factions: [{ name: 'County of Portugal', title: 'Kingdom of Portugal', type: 'location', slug: 'kingdom-of-portugal' }], leaders: [{ name: 'Afonso Henriques', type: 'person', slug: 'afonso-i-of-portugal' }] },
      { side: 'Comital court and Galician allies', strength: { display: 'unknown — comital retinues with Galician support', confidence: 'unknown', note: 'No source records numbers for Teresa\'s and the Traba forces.' }, factions: [{ name: 'Kingdom of León', title: 'Kingdom of León', type: 'location', slug: 'kingdom-of-leon' }], leaders: [{ name: 'Teresa of León', type: 'person', slug: 'teresa-of-leon' }, { name: 'Fernando Pérez de Traba', type: 'person' }] }
    ],
    contentSections: [
      { title: 'Overview', paragraphs: [
        'The battle of São Mamede, fought on 24 June 1128 on the field below Guimarães castle, is conventionally the founding act of Portugal: the moment the county\'s native baronage, behind the nineteen-year-old Afonso Henriques, took its government away from his mother Teresa and her Galician allies of the house of Traba.',
        'It was a small battle with a continental consequence. Nothing in 1128 said the winner would wear a crown; but the party that won was precisely the party defined by Portuguese autonomy — against Galician magnates, against Leonese overlordship, against the county\'s absorption into anyone else\'s politics — and its leader spent the next forty years turning that programme into a kingdom.'
      ]},
      { title: 'Background', paragraphs: [
        'Teresa\'s regency had drifted, in her son\'s partisans\' eyes, into a Galician captivity: Fernando Pérez de Traba held the county\'s great strongholds, Galician clients held its honores, and the county\'s future seemed mortgaged to a trans-Minho aristocratic bloc. The young Afonso — knighted by his own hand at Zamora in 1125, in the emperor\'s old fashion — became the standard around which the barons of Entre-Douro-e-Minho and the see of Braga gathered.',
        'The breach turned military in 1127–1128. Alfonso VII of León-Castile, Teresa\'s nephew, besieged Guimarães itself to enforce his overlordship — tradition has the young Afonso\'s tutor Egas Moniz pledging homage to raise the siege — and when the Leonese pressure lifted, the internal question remained: mother\'s party or son\'s. The armies met at midsummer on São Mamede field.'
      ]},
      { title: 'The battle and its aftermath', paragraphs: [
        'No detailed contemporary account of the fighting survives; the chronicles record the essential result. Afonso\'s barons broke the comital army, Teresa and Fernando Pérez fled north of the Minho, and by tradition the countess was briefly held before her expulsion. Guimarães, the cradle-fortress of the county, passed definitively to the son.',
        'Afonso dated his rule from the victory, governing as infans and duke of the Portuguese. The programme São Mamede had crowned unfolded across the next two decades: victory over the Muslims at Ourique in 1139 and the royal title with it, the treaty of Zamora with León in 1143, and the conquest of Lisbon in 1147. The field below Guimarães kept its place in Portuguese memory as the spot where, as the town\'s later motto has it, Portugal was born.'
      ]}
    ],
    sources: [
      { title: 'Wikimedia Commons image record', author: 'Wikimedia Commons', type: 'image source', url: pg('Castelo_de_Guimaraes.jpg') },
      { title: 'Battle of São Mamede — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Battle_of_S%C3%A3o_Mamede' },
      { title: 'Chronica Gothorum / Annales D. Alfonsi Portugallensium regis', author: 'Portuguese annalistic tradition', type: 'primary source', note: 'The thin but near-contemporary Portuguese record of the founding decades.' }
    ],
    relatedEntries: {
      people: [
        { title: 'Afonso I of Portugal', type: 'person', slug: 'afonso-i-of-portugal', label: 'The victorious son' },
        { title: 'Teresa of León', type: 'person', slug: 'teresa-of-leon', label: 'The defeated countess-queen' }
      ],
      locations: [ { title: 'Kingdom of Portugal', type: 'location', slug: 'kingdom-of-portugal', label: 'The polity the battle founded' }, { title: 'Kingdom of León', type: 'location', slug: 'kingdom-of-leon' } ],
      events: [ { title: 'Battle of Ourique', type: 'event', slug: 'battle-of-ourique', label: 'The next step to the crown' } ]
    },
    battleContinuity: {
      label: 'Follow the making of Portugal',
      battleSlug: 'battle-of-ourique',
      relationship: 'same-campaign',
      reason: 'São Mamede gave Afonso Henriques the county; eleven years later his victory over the Almoravids at Ourique gave him the pretext and prestige to call himself king.'
    }
  },
  {
    id: 'battle-of-ourique', type: 'event', name: 'Battle of Ourique', year: 1139,
    location: 'Ourique (traditional site debated), southern Portugal',
    image: fp('BatalhaOurique.jpg'),
    imageInfo: { caption: 'The battle of Ourique as imagined in later Portuguese painting, with the legendary apparition of Christ to Afonso Henriques.', creator: 'Later Portuguese painting tradition', date: 'early modern', source: 'Wikimedia Commons', sourceUrl: pg('BatalhaOurique.jpg'), note: 'A much later devotional-patriotic image of the battle\'s legend, not a medieval record.' },
    summary: 'Afonso Henriques\'s victory over Almoravid forces at Ourique in July 1139 became the founding legend of the Portuguese crown — the battle after which he was styled king.',
    details: 'Fought on 25 July 1139 against Almoravid forces at a site tradition places at Ourique in the far south, the battle is documented only thinly: a real victory over a Muslim army, magnified by later tradition into a miracle. From roughly this date Afonso Henriques\'s charters style him rex — the victory, wherever exactly it was won, marked the assumption of the royal title.',
    eventType: 'Battle', conflict: 'Reconquista in western Iberia',
    factions: ['Portuguese', 'Almoravids'],
    leaders: [ { name: 'Afonso Henriques', faction: 'Portuguese', personId: 'afonso-i-of-portugal' }, { name: 'Almoravid commanders (unnamed in reliable sources)', faction: 'Almoravids' } ],
    outcome: 'Portuguese victory; Afonso Henriques took the title of king in its aftermath.',
    participants: [
      { side: 'Portuguese', strength: { display: 'a raiding army, size unrecorded', confidence: 'unknown', note: 'The near-contemporary annals give no numbers; the expedition was probably a deep mounted raid, not a full host.' }, factions: [{ name: 'Kingdom of Portugal', title: 'Kingdom of Portugal', type: 'location', slug: 'kingdom-of-portugal' }], leaders: [{ name: 'Afonso Henriques', type: 'person', slug: 'afonso-i-of-portugal' }] },
      { side: 'Almoravids', strength: { display: 'legend claims five kings\' armies; reality unrecorded', confidence: 'chronicle-claim', note: 'The five defeated kings belong to the later Ourique legend; the real Almoravid force was likely a regional army of unknown size.' }, factions: [{ name: 'Almoravid emirate', title: 'Almohad Caliphate', type: 'location', slug: 'almohad-caliphate' }], leaders: [{ name: 'Almoravid field commanders', type: 'person' }] }
    ],
    contentSections: [
      { title: 'Overview', paragraphs: [
        'The battle of Ourique, fought on 25 July 1139, occupies a double place in Portuguese history: a real military victory over Almoravid forces, and the seed of the monarchy\'s founding legend. The contemporary record is one thin line of annals; what is certain is the consequence — from about this date Afonso Henriques\'s documents call him king, and his descendants dated the monarchy from the field of Ourique.',
        'Everything vivid about the battle belongs to later centuries. The vision of Christ promising victory, the five Moorish kings slain, the acclamation on the battlefield, the divine origin of the five-shield arms of Portugal — these grew in chronicles and shrine-lore from the fourteenth century onward, achieving their full form in the era when Portuguese independence again needed miraculous credentials. The article\'s duty is to keep the two Ouriques distinct.'
      ]},
      { title: 'The battle in the record', paragraphs: [
        'The near-contemporary Portuguese annals record only that Afonso fought and defeated a Muslim force at Ourique in July 1139 — probably a deep raid into Almoravid Alentejo striking a regional army, not the apocalyptic clash of legend. Even the site is debated: the southern Ourique of tradition sits improbably deep in Muslim territory for 1139, and historians have proposed locations closer to the Tagus frontier.',
        'The political use was immediate and real. Victory in the field was the classic Iberian warrant for royal rank — as Aragon and Navarre\'s kings had shown — and Afonso, already effectively independent since São Mamede, converted Ourique\'s prestige into the title his charters begin using: Alfonsus Portugallensium rex. The assemblies later tradition placed at Lamego to "elect" him are early modern invention; the charters are the true coronation.'
      ]},
      { title: 'The legend and its work', paragraphs: [
        'The Ourique legend — Christ appearing to Afonso on the eve of battle, promising that he and his line would be God\'s chosen kings — first appears fully formed centuries after the battle and served each age that retold it: legitimising the new dynasty of Aviz after 1385, anchoring resistance to Castile, and furnishing the national arms with a sacred etymology (the five escutcheons as the five wounds of Christ, the five defeated kings).',
        'IronCodex treats the legend as what it is: one of medieval and early modern Europe\'s most successful pieces of dynastic myth-making, comparable to France\'s Clovis ampulla or Denmark\'s falling Dannebrog. The historical battle mattered because a frontier count needed a crown; the legendary battle mattered because a kingdom needed a covenant. Both are part of Ourique\'s history — as long as they are never confused.'
      ]}
    ],
    sources: [
      { title: 'Wikimedia Commons image record', author: 'Wikimedia Commons', type: 'image source', url: pg('BatalhaOurique.jpg') },
      { title: 'Battle of Ourique — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Battle_of_Ourique' },
      { title: 'Annales D. Alfonsi Portugallensium regis; later Crónica de 1419 and Ourique tradition', author: 'Portuguese chronicle tradition', type: 'primary source', note: 'The one-line contemporary notice versus the grown legend — read side by side.' }
    ],
    relatedEntries: {
      people: [ { title: 'Afonso I of Portugal', type: 'person', slug: 'afonso-i-of-portugal', label: 'Victor, and king from this field' } ],
      locations: [ { title: 'Kingdom of Portugal', type: 'location', slug: 'kingdom-of-portugal' } ],
      events: [
        { title: 'Battle of São Mamede', type: 'event', slug: 'battle-of-sao-mamede', label: 'The internal victory that preceded it' },
        { title: 'Siege of Lisbon', type: 'event', slug: 'siege-of-lisbon', label: 'The conquest that followed the crown' }
      ]
    },
    battleContinuity: {
      label: 'The conquest of Lisbon follows',
      battleSlug: 'siege-of-lisbon',
      relationship: 'same-war',
      reason: 'Ourique made Afonso a king in name; the capture of Lisbon in 1147, with the help of a passing crusader fleet, gave his kingdom its great city and its Tagus frontier.'
    }
  },
  {
    id: 'treaty-of-zamora', type: 'event', name: 'Treaty of Zamora', year: 1143,
    location: 'Zamora, on the Duero',
    image: fp('Tratado_(21238137571).jpg'),
    imageInfo: { caption: 'Azulejo tile panel commemorating the Treaty of Zamora of 1143, by which Alfonso VII of León recognised Afonso Henriques\'s royal rule in Portugal.', creator: 'Portuguese azulejo tradition', date: 'modern commemorative panel', source: 'Wikimedia Commons', sourceUrl: pg('Tratado_(21238137571).jpg'), note: 'A modern commemorative image; the treaty itself survives only through chronicle and charter evidence.' },
    summary: 'At Zamora in October 1143, in the presence of a papal legate, Alfonso VII of León-Castile recognised his cousin Afonso Henriques as king in Portugal — the diplomatic charter of Portuguese independence.',
    details: 'The meeting of the two cousins at Zamora on 4–5 October 1143, brokered by Cardinal Guido de Vico, converted battlefield reality into legal form: Afonso Henriques held Portugal as king, with a nominal deference to the Leonese emperor that his diplomacy immediately set about dissolving by placing Portugal under the direct protection of the papacy for an annual census. Full papal recognition of the royal title waited until Manifestis Probatum in 1179.',
    eventType: 'Treaty', conflict: 'Portuguese struggle for autonomy from León',
    factions: ['Kingdom of Portugal', 'Kingdom of León'],
    leaders: [
      { name: 'Afonso Henriques', faction: 'Portugal', personId: 'afonso-i-of-portugal' },
      { name: 'Alfonso VII of León-Castile', faction: 'León' },
      { name: 'Cardinal Guido de Vico, papal legate', faction: 'Papacy' }
    ],
    outcome: 'Leonese recognition of Afonso Henriques\'s kingship in Portugal; Portugal commended itself to the papacy.',
    contentSections: [
      { title: 'Overview', paragraphs: [
        'The Treaty of Zamora of October 1143 is the diplomatic birth certificate of Portugal — the moment the neighbouring power that mattered recognised Afonso Henriques\'s royal rule. The two cousins, the self-made king and the Leonese emperor Alfonso VII, met at Zamora on the Duero with the papal legate Cardinal Guido de Vico presiding, and closed a war that had run alongside their whole adult lives.',
        'The settlement\'s genius was its ambiguity. Afonso was king — Alfonso VII, who had taken the imperial title at León in 1135 precisely to preside over other kings, could tolerate a royal cousin as he tolerated royal vassals in Navarre and Zaragoza. Afonso Henriques, for his part, conceded ceremonial deference and, that same December, performed his master-stroke: commending Portugal directly to Saint Peter, as a censual vassal of the papacy at four ounces of gold a year — an overlord conveniently in Rome, invoked precisely to exclude the one in León.'
      ]},
      { title: 'Terms and context', paragraphs: [
        'No text of the treaty survives; its content is reconstructed from the chronicles and from what changed in the documents after it. Afonso Henriques\'s chancery had used rex since Ourique in 1139; after Zamora, Leonese documents stop contesting it. The border war along the Minho and the Duero paused. And the legate\'s presence tied the settlement to the wider peace Rome was imposing on the peninsula\'s Christian kings in crusading years.',
        'The papal commendation of December 1143 (the letter Claves regni) began a thirty-six-year diplomatic campaign at the curia. The popes accepted Portugal\'s census and protection while carefully addressing Afonso as dux — until 1179, when Alexander III\'s bull Manifestis Probatum finally granted the royal title in full, sealing at Rome what Zamora had conceded on the Duero. Legal independence was not an event but a process; Zamora was its hinge.'
      ]}
    ],
    sources: [
      { title: 'Wikimedia Commons image record', author: 'Wikimedia Commons', type: 'image source', url: pg('Tratado_(21238137571).jpg') },
      { title: 'Treaty of Zamora — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Treaty_of_Zamora' },
      { title: 'Manifestis Probatum (1179) and the papal-Portuguese correspondence', author: 'Papal chancery / Portuguese royal chancery', type: 'primary source', note: 'The documentary arc from the 1143 commendation to full recognition in 1179.' }
    ],
    relatedEntries: {
      people: [ { title: 'Afonso I of Portugal', type: 'person', slug: 'afonso-i-of-portugal', label: 'The king recognised' } ],
      locations: [
        { title: 'Kingdom of Portugal', type: 'location', slug: 'kingdom-of-portugal', label: 'The kingdom legalised' },
        { title: 'Kingdom of León', type: 'location', slug: 'kingdom-of-leon', label: 'The overlord that let go' }
      ],
      events: [
        { title: 'Battle of Ourique', type: 'event', slug: 'battle-of-ourique', label: 'The victory that made the title' },
        { title: 'Siege of Lisbon', type: 'event', slug: 'siege-of-lisbon', label: 'The conquest that followed the recognition' }
      ]
    }
  },
  {
    id: 'siege-of-lisbon', type: 'event', name: 'Siege of Lisbon', year: 1147,
    location: 'Lisbon, on the Tagus',
    image: fp('Conquista_de_Lisboa_(Roque_Gameiro,_Quadros_da_História_de_Portugal,_1917).png'),
    imageInfo: { caption: 'The conquest of Lisbon in 1147, watercolour by Alfredo Roque Gameiro (Quadros da História de Portugal, 1917).', creator: 'Alfredo Roque Gameiro', date: '1917', source: 'Quadros da História de Portugal — via Wikimedia Commons', sourceUrl: pg('Conquista_de_Lisboa_(Roque_Gameiro,_Quadros_da_História_de_Portugal,_1917).png'), note: 'A modern historical illustration; the siege itself is documented by the eyewitness De expugnatione Lyxbonensi.' },
    summary: 'Afonso Henriques took Lisbon from its Muslim rulers in October 1147 after a seventeen-week siege, aided by a fleet of Second Crusade crusaders from England, Flanders, and the Rhineland — the making of Portugal\'s great city.',
    details: 'The siege ran from 1 July to 24 October 1147. A storm-scattered crusader fleet bound for the Holy Land — English, Norman, Flemish, and Rhenish contingents perhaps 10,000 strong — was persuaded at Porto to join the Portuguese king\'s attack on Lisbon in return for the city\'s plunder. Siege towers, mines, and famine broke the defence; the city surrendered on terms imperfectly kept. An English priest\'s eyewitness account, De expugnatione Lyxbonensi, documents the whole enterprise.',
    eventType: 'Siege', conflict: 'Reconquista in western Iberia',
    factions: ['Kingdom of Portugal and crusader fleet', 'Almoravid-era Lisbon'],
    leaders: [
      { name: 'Afonso Henriques', faction: 'Portuguese', personId: 'afonso-i-of-portugal' },
      { name: 'Hervey de Glanvill and the crusader commanders', faction: 'Crusader fleet' },
      { name: 'The qadi and garrison of Lisbon', faction: 'Lisbon' }
    ],
    outcome: 'Lisbon surrendered on 24 October 1147; the city passed permanently under Portuguese rule.',
    eventLocation: { name: 'Lisbon', locationId: 'lisbon' },
    participants: [
      { side: 'Portuguese and crusaders', strength: { display: 'c. 10,000–13,000 crusaders (160–200 ships) plus the Portuguese host', confidence: 'estimated', note: 'The eyewitness De expugnatione counts the fleet at about 164 ships; modern estimates put the combined besieging force in the low tens of thousands.', min: 10000, max: 13000 }, factions: [{ name: 'Kingdom of Portugal', title: 'Kingdom of Portugal', type: 'location', slug: 'kingdom-of-portugal' }], leaders: [{ name: 'Afonso Henriques', type: 'person', slug: 'afonso-i-of-portugal' }, { name: 'Hervey de Glanvill', type: 'person' }] },
      { side: 'Lisbon garrison', strength: { display: 'chronicle claims of 15,000 families within the walls; fighting men unknown', confidence: 'chronicle-claim', note: 'The eyewitness reports a city swollen with refugees; his population figures are impressions, not counts, and the fighting garrison is nowhere enumerated.' }, factions: [{ name: 'Almoravid-era taifa of Lisbon', title: 'Almohad Caliphate', type: 'location', slug: 'almohad-caliphate' }], leaders: [{ name: 'The qadi of Lisbon', type: 'person' }] }
    ],
    contentSections: [
      { title: 'Overview', paragraphs: [
        'The siege of Lisbon, 1 July to 24 October 1147, was the greatest conquest of Afonso Henriques\'s reign and the only lasting Christian success of the Second Crusade. It joined two enterprises by accident of weather: the Portuguese king\'s long-planned descent on the Tagus, and a fleet of some 160–200 crusader ships from England, Normandy, Flanders, and the Rhineland, driven into Porto on their way to the Holy Land.',
        'The bargain struck — the crusaders to have the city\'s plunder and ransom, the king its walls and sovereignty, settlers among them lands and liberties — is preserved in the remarkable eyewitness account of an Anglo-Norman priest, De expugnatione Lyxbonensi, which makes this one of the best-documented military operations of the twelfth century.'
      ]},
      { title: 'Background', paragraphs: [
        'Lisbon in 1147 was the largest city of the western peninsula\'s Muslim coast — swollen, the eyewitness says, with refugees from the fallen towns of the frontier, its suburbs rich in orchards and its citadel commanding the Tagus estuary. Afonso Henriques had taken Santarém, the key of the middle Tagus, by escalade that March; Lisbon was the campaign\'s second, harder act.',
        'The crusader fleet — sworn to mutual discipline at Dartmouth, its contingents led by men like Hervey de Glanvill, Arnold of Aerschot, and Christian of Ghistelles — reached Porto in June. Bishop Peter of Porto preached them into the enterprise with the king\'s offer; the theological scruple (was fighting in Iberia a valid crusade?) had been settled that spring by Eugenius III\'s Divina dispensatione, which put the Iberian front on a par with the Holy Land.'
      ]},
      { title: 'The siege', paragraphs: [
        'The allies invested the city from July: Portuguese on the eastern hills, English and Normans on the west, Flemings and Rhinelanders east of the castle. The suburbs fell in the first assaults; the walled city then endured seventeen weeks of blockade, bombardment by mangonels — the eyewitness counts five thousand stones in ten hours from one battery — mining against the walls, and two great siege towers, the first burned, the second, engineered by a Pisan master, finally winched to the wall in October.',
        'Famine decided it. With the tower at the rampart and the mines opening breaches, the defenders treated; the surrender of 24 October promised lives and property, and was promptly violated in part by crusader plundering the chronicler himself condemns. The mosque became the cathedral, an English crusader-priest, Gilbert of Hastings, became Lisbon\'s first bishop, and many of the northern crusaders settled rather than sailing on — their liberties written into the city\'s charters.'
      ]},
      { title: 'Aftermath and significance', paragraphs: [
        'Lisbon anchored Portugal on the Tagus. With Santarém and Lisbon the kingdom held the river line that would be its strategic spine for the rest of the Reconquista; the frontier castles passed to the military orders — the Templars at Tomar guarding the approaches — and the city grew into the kingdom\'s commercial capital and, from 1255, its seat of government.',
        'In the larger Second Crusade, whose grand armies met disaster at Dorylaeum and Damascus, Lisbon stood out as the one durable gain — a pattern (sea-borne northern crusaders, Iberian employment, permanent conquest) repeated at Silves in 1189 and Alcácer in 1217. For the Portuguese monarchy, the conquest completed the founding sequence begun at São Mamede: county seized, crown assumed at Ourique, crown recognised at Zamora, and now a royal city worthy of the title.'
      ]}
    ],
    sources: [
      { title: 'Wikimedia Commons image record — Roque Gameiro watercolour', author: 'Wikimedia Commons', type: 'image source', url: pg('Conquista_de_Lisboa_(Roque_Gameiro,_Quadros_da_História_de_Portugal,_1917).png') },
      { title: 'Siege of Lisbon — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Siege_of_Lisbon' },
      { title: 'De expugnatione Lyxbonensi (The Conquest of Lisbon), ed./trans. C. W. David', author: 'Anonymous Anglo-Norman eyewitness', type: 'primary source', note: 'The eyewitness account that documents the fleet, the bargain, and the seventeen-week siege.' }
    ],
    relatedEntries: {
      people: [ { title: 'Afonso I of Portugal', type: 'person', slug: 'afonso-i-of-portugal', label: 'The conquering king' } ],
      locations: [
        { title: 'Lisbon', type: 'location', slug: 'lisbon', label: 'The city taken' },
        { title: 'Kingdom of Portugal', type: 'location', slug: 'kingdom-of-portugal' }
      ],
      events: [
        { title: 'Battle of Ourique', type: 'event', slug: 'battle-of-ourique', label: 'The crown-making victory eight years earlier' },
        { title: 'Battle of Aljubarrota', type: 'event', slug: 'battle-of-aljubarrota', label: 'The kingdom\'s later fight for survival' }
      ]
    },
    battleContinuity: {
      label: 'The kingdom fights for its life',
      battleSlug: 'battle-of-aljubarrota',
      relationship: 'same-region',
      reason: 'Lisbon made Portugal a Tagus power; two and a half centuries later, at Aljubarrota in 1385, the kingdom founded on these conquests defended its independence against Castile and kept it.'
    }
  }
]

// ── LOCATIONS ───────────────────────────────────────────────────────────────
const locations = [
  {
    id: 'kingdom-of-leon', type: 'location', name: 'Kingdom of León', locationType: 'Kingdom', year: 910,
    kingdom: 'Kingdom of León',
    image: fp('Adeffonsus_IX,_king_of_Galicia_and_Leon.jpg'),
    imageInfo: { caption: 'Alfonso IX, king of León and Galicia, in a miniature from the Tumbo A cartulary of Santiago de Compostela.', creator: 'Compostelan scriptorium', date: '12th–13th century', source: 'Tumbo A, Santiago de Compostela — via Wikimedia Commons', sourceUrl: pg('Adeffonsus_IX,_king_of_Galicia_and_Leon.jpg'), note: 'A contemporary royal image from the kingdom\'s own great cartulary.' },
    overview: [
      'The Kingdom of León (910–1230 as a distinct crown) was the senior Christian monarchy of medieval Iberia: heir of the Asturian kings and, through them, claimant to the Visigothic inheritance, whose rulers styled themselves emperors of all Spain. From León came the dynasties, the law, and the frontier institutions that shaped Castile and Portugal alike — both of which began as its counties and ended as its rivals.',
      'Its medieval arc ran from the imperial ambitions of Alfonso VI and Alfonso VII, through the loss of Portugal and the rise of Castile, to the definitive union of the crowns under Ferdinand III in 1230 — after which León remained a titular kingdom inside the Castilian monarchy, its cortes, fueros, and cathedral cities keeping a distinct identity to the end of the Middle Ages.'
    ],
    contentSections: [
      { title: 'Overview', paragraphs: [
        'The Kingdom of León (910–1230 as a distinct crown) was the senior Christian monarchy of medieval Iberia: heir of the Asturian kings and, through them, claimant to the Visigothic inheritance, whose rulers styled themselves emperors of all Spain. From León came the dynasties, the law, and the frontier institutions that shaped Castile and Portugal alike — both of which began as its counties and ended as its rivals.',
        'Its medieval arc ran from the imperial ambitions of Alfonso VI and Alfonso VII, through the loss of Portugal and the rise of Castile, to the definitive union of the crowns under Ferdinand III in 1230 — after which León remained a titular kingdom inside the Castilian monarchy, its cortes, fueros, and cathedral cities keeping a distinct identity to the end of the Middle Ages.'
      ]},
      { title: 'Background and origins', paragraphs: [
        'León began as the Asturian monarchy\'s move down from the mountains: around 910 the royal seat shifted from Oviedo to the old Roman legionary city of León (Legio), commanding the meseta\'s northwest. García I and his brothers Ordoño II and Fruela II ruled the enlarged kingdom — Asturias, Galicia, and the growing Duero frontier — as the leading Christian power facing the Caliphate of Córdoba.',
        'The tenth century tested it nearly to destruction: the caliphate\'s armies under Almanzor sacked León itself in 988 and Santiago in 997. But the kingdom\'s deep structure — repopulation charters filling the Duero basin, counts governing marches like Castile, the pilgrimage road to Compostela binding it to Europe — outlasted the raids, and the caliphate\'s collapse after 1031 reversed the tide permanently.'
      ]},
      { title: 'High Middle Ages: empire and division', paragraphs: [
        'The eleventh and twelfth centuries were León\'s imperial age. Fernando I (1037–1065) united León and Castile and took parias tribute from the taifa kings; his son Alfonso VI took Toledo in 1085 — the old Visigothic capital, the greatest single conquest of the Reconquista to that date — and styled himself imperator totius Hispaniae. Alfonso VII renewed the title with a formal imperial coronation at León in 1135, presiding over vassal kings from Navarre to Zaragoza.',
        'The same era divided the inheritance. The county of Castile went its own royal way from 1065 amid partitions and reunions; the county of Portugal, granted to Henry of Burgundy in 1096, slipped through Queen Urraca\'s troubled reign (1109–1126) and Afonso Henriques\'s wars toward the independence recognised at the Treaty of Zamora in 1143. After Alfonso VII\'s death in 1157 León and Castile were separate crowns again — cousin-kingdoms, allies against the Almohads and rivals everywhere else.',
        'The separate Leonese kingdom of Fernando II (1157–1188) and Alfonso IX (1188–1230) was no relic: it pushed its own frontier down through Extremadura — Cáceres, Mérida, and Badajoz fell to Alfonso IX in his last years — sponsored the military orders of Santiago and Alcántara, and in 1188 summoned townsmen to the royal curia at León, the assembly commonly counted the first parliamentary cortes in European history.'
      ]},
      { title: 'Political structure and rule', paragraphs: [
        'Leonese kingship was sacral and Gothic-revivalist — anointed kings, an imperial style grounded in the claim to the whole Visigothic inheritance — but operationally it ran on the frontier bargain: land for settlement, liberties for defence. The fueros (municipal charters) of towns like León itself (1017–1020, the great fuero associated with Alfonso V), Benavente, and the Extremaduran plazas defined mutual obligations of crown and community, and the councils (concejos) raised the militias that fought at the kings\' side.',
        'The church anchored the rest: Santiago de Compostela — apostolic shrine, pilgrimage magnet, and after 1120 an archbishopric aggressively led by Diego Gelmírez — gave the kingdom European reach, while the see of León and the abbeys of Sahagún and Celanova kept the royal archive and memory. The curia regia of magnates and bishops widened, in 1188, to include the cities: Alfonso IX\'s cortes bound the king to counsel and the realm to consent in a form that outlived the kingdom itself.'
      ]},
      { title: 'Major rulers', paragraphs: [
        'Ordoño II (910–924) — moved the royal seat to León and led the new kingdom\'s first great offensives and defeats against Córdoba.',
        'Alfonso V (999–1028) — rebuilt León after Almanzor\'s destructions and issued the kingdom\'s foundational fuero.',
        'Fernando I (1037–1065) — first union of León and Castile; tribute-taker of the taifas and patron of the kingdom\'s Romanesque flowering.',
        'Alfonso VI of Castile and León (1065/1072–1109) — conqueror of Toledo in 1085, emperor of the three religions in his own style, and the king whose grants created the county of Portugal.',
        'Urraca of León (1109–1126) — reigning queen through the succession wars with Alfonso the Battler of Aragon; held the crown together at the price of a decade of civil war.',
        'Alfonso VII (1126–1157) — crowned emperor at León in 1135; his death divided León and Castile between his sons for three generations.',
        'Fernando II (1157–1188) — expanded into Extremadura, sponsored the Order of Santiago, and sparred with both Portugal and Castile.',
        'Alfonso IX (1188–1230) — summoned Europe\'s first cortes with townsmen in 1188, conquered Cáceres, Mérida, and Badajoz, and was the last king of a separate León.'
      ]},
      { title: 'Wars, battles, and expansion', paragraphs: [
        'León\'s wars ran on two axes. Against al-Andalus: the disasters of Almanzor\'s raids (León sacked 988), the conquest of Toledo (1085), the Almoravid counter-blows at Sagrajas (1086) and Uclés (1108) that killed the heir Sancho, and the final Extremaduran conquests of Alfonso IX culminating at Mérida and Badajoz (1230). Leonese troops shared in the great victory of Las Navas de Tolosa in 1212 only obliquely — Alfonso IX, feuding with Castile, sat it out, one of the era\'s notorious absences.',
        'Against Christian neighbours: the wars of Urraca\'s succession against Aragon (1110s), the long duel with Afonso Henriques\'s Portugal — the Treaty of Zamora in 1143 conceding the royal title, the border wars over Galicia and the Minho continuing for decades — and the cousin-wars with Castile that papal legates repeatedly composed. Dynastic accident ended the rivalry: Fernando III, son of Alfonso IX and the Castilian heiress Berenguela, took Castile in 1217 and León in 1230, uniting the crowns for good.'
      ]},
      { title: 'Religion, culture, and society', paragraphs: [
        'León\'s cultural spine was the camino de Santiago: the pilgrimage road brought Cluniac monks, French settlers (the francos of the towns\' charters), Romanesque builders, and the liturgical revolution that replaced the old Hispanic rite with the Roman around 1080. San Isidoro de León — royal pantheon, scriptorium, and shrine of the Visigothic doctor-saint translated from Seville in 1063 — embodied the kingdom\'s claim to carry Gothic Christian Spain forward.',
        'Its society was a frontier society: peasant colonists holding by charter, town councils with their own militias and famously early liberties, Mozarabic Christians from the south settling beside francos and Galicians, and Jewish communities in the cathedral cities under royal protection that fluctuated with royal need. The kingdom\'s two universities of memory — the notarial culture of its great monasteries and the epic-legal culture that produced the cortes of 1188 — gave medieval Europe one of its earliest experiments in representative consent.'
      ]},
      { title: 'Decline, transformation, and legacy', paragraphs: [
        'León\'s end was a merger, not a fall. Fernando III\'s double inheritance in 1230 folded the crown into the Crown of Castile; the title survived — every Castilian and Spanish monarch since has been rex Legionis — along with the kingdom\'s cortes (merged with Castile\'s), its adelantamiento, and its lion arms quartered into the heraldry of Spain.',
        'Its deeper legacies outlived the institution: Toledo and the translation culture Alfonso VI\'s conquest opened; the cortes tradition of 1188 that UNESCO has recognised as the documentary cradle of European parliamentarism; and the two daughter-kingdoms — Castile and Portugal — whose separate paths defined Iberian history long after the old imperial crown that spawned them had become a title inside one of them.'
      ]}
    ],
    knownFor: [
      'Senior Christian crown of medieval Iberia, heir of Asturias and the Visigothic claim',
      'The conquest of Toledo (1085) and the imperial coronations of León',
      'The cortes of 1188 — Europe\'s earliest documented parliament with townsmen',
      'Mother-kingdom (and then rival) of both Castile and Portugal',
      'Union with Castile under Fernando III in 1230'
    ],
    timeline: [
      { date: 'c. 910', title: 'The court moves to León', description: 'The Asturian monarchy descends to the old legionary city; the Kingdom of León begins.' },
      { date: '988', title: 'Almanzor sacks León', description: 'The caliphate\'s great vizier burns the capital; the kingdom survives in its mountains and charters.' },
      { date: '1017–1020', title: 'Fuero of León', description: 'Alfonso V\'s great charter rebuilds the city and fixes the kingdom\'s early law.' },
      { date: '1037', title: 'Fernando I unites León and Castile', description: 'The first union of the two crowns under the Navarrese dynasty.' },
      { date: '1085', title: 'Toledo falls', description: 'Alfonso VI takes the old Visigothic capital — the Reconquista\'s greatest prize to date.' },
      { date: '1096', title: 'County of Portugal granted', description: 'Alfonso VI gives the western frontier county to Henry of Burgundy and Teresa.' },
      { date: '1135', title: 'Imperial coronation', description: 'Alfonso VII is crowned emperor of Spain at León, with vassal kings in attendance.' },
      { date: '1143', title: 'Treaty of Zamora', description: 'Alfonso VII recognises his cousin Afonso Henriques as king in Portugal.' },
      { date: '1188', title: 'The cortes of León', description: 'Alfonso IX summons bishops, magnates, and elected townsmen — Europe\'s earliest parliamentary assembly.' },
      { date: '1230', title: 'Union with Castile', description: 'Fernando III inherits León after Castile; the crowns unite permanently.' }
    ],
    relatedEntries: {
      people: [
        { title: 'Alfonso VIII of Castile', type: 'person', slug: 'alfonso-viii-of-castile', label: 'The Castilian cousin-rival generation' },
        { title: 'Afonso I of Portugal', type: 'person', slug: 'afonso-i-of-portugal', label: 'The vassal-count\'s son who became a rival king' },
        { title: 'Teresa of León', type: 'person', slug: 'teresa-of-leon', label: 'Daughter of the dynasty, countess of Portugal' }
      ],
      locations: [
        { title: 'Kingdom of Castile', type: 'location', slug: 'kingdom-of-castile', label: 'Daughter-county, rival crown, final partner' },
        { title: 'Kingdom of Portugal', type: 'location', slug: 'kingdom-of-portugal', label: 'The county that became a kingdom' }
      ],
      events: [
        { title: 'Treaty of Zamora', type: 'event', slug: 'treaty-of-zamora', label: 'Letting Portugal go' },
        { title: 'Battle of Las Navas de Tolosa', type: 'event', slug: 'battle-of-las-navas-de-tolosa', label: 'The great peninsular victory León famously missed' }
      ]
    },
    sources: [
      { title: 'Wikimedia Commons image record — Tumbo A', author: 'Wikimedia Commons', type: 'image source', url: pg('Adeffonsus_IX,_king_of_Galicia_and_Leon.jpg') },
      { title: 'Kingdom of León — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/Kingdom_of_Le%C3%B3n' },
      { title: 'The Contest of Christian and Muslim Spain', author: 'Bernard F. Reilly', type: 'book', note: 'Standard narrative of León-Castile in its imperial centuries.' }
    ]
  },
  {
    id: 'lisbon', type: 'location', name: 'Lisbon', locationType: 'City', year: 1147,
    kingdom: 'Kingdom of Portugal', kingdomId: 'kingdom-of-portugal',
    image: fp('Lisbon_in_1572.jpg'),
    imageInfo: { caption: 'Lisbon seen from the Tagus in the Braun and Hogenberg Civitates Orbis Terrarum, 1572 — the walled riverside city of the later Middle Ages still legible in its fabric.', creator: 'Georg Braun and Frans Hogenberg', date: '1572', source: 'Civitates Orbis Terrarum — via Wikimedia Commons', sourceUrl: pg('Lisbon_in_1572.jpg'), note: 'An early modern engraving; the earliest detailed city view, showing the medieval town a century after the period.' },
    overview: [
      'Lisbon — Roman Olisipo, Muslim al-Ushbuna, Portuguese Lisboa — commands the estuary of the Tagus, the finest harbour of Atlantic Iberia. Conquered by Afonso Henriques and a Second Crusade fleet after the seventeen-week siege of 1147, it grew from frontier prize into the effective capital of Portugal: seat of the court from the mid-thirteenth century, its greatest port, and by the end of the Middle Ages one of the Atlantic world\'s great cities.',
      'Its medieval story is the kingdom\'s in miniature: mosque made cathedral in 1147; an English crusader as first bishop; royal charters and Italian merchants building the river trade; the university founded by King Denis in 1290; the crisis of 1383–1385 in which Lisbon\'s citizens made João of Aviz king; and the Tagus waterfront from which, at the period\'s very edge, the ocean routes opened.'
    ],
    contentSections: [
      { title: 'Overview', paragraphs: [
        'Lisbon — Roman Olisipo, Muslim al-Ushbuna, Portuguese Lisboa — commands the estuary of the Tagus, the finest harbour of Atlantic Iberia. Conquered by Afonso Henriques and a Second Crusade fleet after the seventeen-week siege of 1147, it grew from frontier prize into the effective capital of Portugal: seat of the court from the mid-thirteenth century, its greatest port, and by the end of the Middle Ages one of the Atlantic world\'s great cities.',
        'Its medieval story is the kingdom\'s in miniature: mosque made cathedral in 1147; an English crusader as first bishop; royal charters and Italian merchants building the river trade; the university founded by King Denis in 1290; the crisis of 1383–1385 in which Lisbon\'s citizens made João of Aviz king; and the Tagus waterfront from which, at the period\'s very edge, the ocean routes opened.'
      ]},
      { title: 'Muslim al-Ushbuna and the conquest of 1147', paragraphs: [
        'Under Muslim rule from the eighth century, Lisbon was the north-westernmost great city of al-Andalus: a walled port on the castle hill above the Tagus, described by the 1147 eyewitness as teeming with refugees from the fallen frontier towns, its wealth in orchards, fisheries, and the river trade. It had been raided before — Alfonso VI held it briefly after 1093 — but held its hinterland until the kingdom of Portugal closed in.',
        'The siege of 1147 — Afonso Henriques\'s army joined by the storm-diverted crusader fleet from England, Flanders, and the Rhineland — ended on 24 October with the city\'s surrender. The great mosque became the cathedral (the Sé\'s Romanesque core still stands), Gilbert of Hastings became bishop, crusader settlers took houses and liberties, and the Muslim and Mozarabic population passed under Portuguese rule, the former concentrated in the Mouraria quarter that kept the name into modern times.'
      ]},
      { title: 'Medieval capital', paragraphs: [
        'Lisbon\'s rise to capital was commercial before it was constitutional. The Tagus anchorage made it the hinge between Mediterranean and northern sea-lanes; Genoese and Placentine merchants appear in royal grants from the thirteenth century, and King Denis (1279–1325) — who founded the university at Lisbon in 1290, chartered fairs, planted the pine forests for shipbuilding, and hired the Genoese Manuel Pessanha as hereditary admiral in 1317 — built the crown\'s maritime policy on the city\'s waterfront. The court settled definitively at Lisbon under Afonso III after 1255.',
        'The city\'s political weight showed in the kingdom\'s great crisis: in 1383–1385 Lisbon\'s merchants and craft guilds were the engine of the revolution that made the Master of Aviz king João I — the city withstood a Castilian siege through the plague summer of 1384, and its money and militia underwrote the victory at Aljubarrota. The Aviz monarchy repaid it: Lisbon\'s cortes, its customs house, and its arsenal became the kingdom\'s financial core, and by 1500 the city that the Middle Ages had made was the staging port of a world empire.'
      ]},
      { title: 'Society and fabric', paragraphs: [
        'Medieval Lisbon climbed from the river in tiers: the castle of São Jorge on the summit; the Alfama and Mouraria quarters on the slopes — fishermen, Muslims under protection, later the judiaria of one of Iberia\'s major Jewish communities; the cathedral and merchant town along the shore; and the Rossio commons where the fairs and, in 1383, the revolution assembled. Earthquakes (1344, 1356) and plague repeatedly scarred it; royal building — Denis\'s wall, Ferdinand I\'s great enceinte of the 1370s, thrown up in haste against Castile — repeatedly enlarged it.',
        'Its tongues and trades were a port\'s: Portuguese, Arabic, Hebrew, Genoese, and the English and Flemish of the wine and salt fleets. The city\'s liberties — confirmed and contested in charter after charter — made its concelho a political actor kings had to bargain with, never more decisively than when it chose its own king in 1383.'
      ]}
    ],
    knownFor: [
      'Conquered from al-Andalus by Afonso Henriques and a crusader fleet in 1147',
      'Portugal\'s great port and, from the mid-13th century, its capital',
      'King Denis\'s university (1290) and Genoese admiralty (1317)',
      'The revolution of 1383–1385 that made the House of Aviz',
      'Departure point of Portugal\'s Atlantic expansion at the period\'s end'
    ],
    relatedEntries: {
      people: [
        { title: 'Afonso I of Portugal', type: 'person', slug: 'afonso-i-of-portugal', label: 'Conqueror of 1147' },
        { title: 'Denis of Portugal', type: 'person', slug: 'denis-of-portugal', label: 'University, forests, and admiralty' },
        { title: 'John I of Portugal', type: 'person', slug: 'john-i-of-portugal', label: 'The king Lisbon\'s revolution made' }
      ],
      locations: [ { title: 'Kingdom of Portugal', type: 'location', slug: 'kingdom-of-portugal' } ],
      events: [
        { title: 'Siege of Lisbon', type: 'event', slug: 'siege-of-lisbon', label: 'The conquest of 1147' },
        { title: 'Battle of Aljubarrota', type: 'event', slug: 'battle-of-aljubarrota', label: 'The victory Lisbon\'s revolution required' }
      ]
    },
    sources: [
      { title: 'Wikimedia Commons image record — Braun & Hogenberg view', author: 'Wikimedia Commons', type: 'image source', url: pg('Lisbon_in_1572.jpg') },
      { title: 'History of Lisbon — Wikipedia', author: 'Wikipedia contributors', type: 'encyclopedia', url: 'https://en.wikipedia.org/wiki/History_of_Lisbon' },
      { title: 'De expugnatione Lyxbonensi (The Conquest of Lisbon)', author: 'Anonymous eyewitness, 1147', type: 'primary source', note: 'The fullest medieval description of the city at the moment of conquest.' }
    ]
  }
]

const charIds = new Set(data.characters.map((c) => c.id))
const evIds = new Set(data.events.map((e) => e.id))
const locIds = new Set(data.locations.map((l) => l.id))
let added = 0
const upsert = (arr, item) => {
  const i = arr.findIndex((x) => x.id === item.id)
  if (i >= 0) { arr[i] = item; console.log('replaced', item.id) } else { arr.push(item); added++ }
}
for (const p of people) upsert(data.characters, p)
for (const e of events) upsert(data.events, e)
for (const l of locations) upsert(data.locations, l)

// Afonso I's succession stays scoped to the ROYAL office: predecessor is
// "none as king" (required pair in the checker). Teresa is linked through his
// related entries and the São Mamede article instead. Also ensure the battles
// he commands are in his related entries (commander->battle link rule).
const afonso = data.characters.find((c) => c.id === 'afonso-i-of-portugal')
if (afonso?.succession?.predecessor?.personSlug) {
  afonso.succession.predecessor = { status: 'none', displayName: 'None as King of Portugal', note: 'First king of Portugal; he took the county from his mother Teresa of León at São Mamede in 1128 and assumed the royal title after Ourique in 1139.' }
  console.log('restored afonso-i predecessor -> status:none (royal office)')
}
if (afonso) {
  afonso.relatedEntries = afonso.relatedEntries || {}
  afonso.relatedEntries.events = afonso.relatedEntries.events || []
  const have = new Set(afonso.relatedEntries.events.map((e) => e.slug))
  const want = [
    { title: 'Battle of São Mamede', type: 'event', slug: 'battle-of-sao-mamede', label: 'Took the county from his mother\'s party, 1128' },
    { title: 'Battle of Ourique', type: 'event', slug: 'battle-of-ourique', label: 'The victory after which he was styled king, 1139' },
    { title: 'Siege of Lisbon', type: 'event', slug: 'siege-of-lisbon', label: 'His greatest conquest, 1147' }
  ]
  for (const w of want) if (!have.has(w.slug)) { afonso.relatedEntries.events.push(w); console.log('afonso-i related +', w.slug) }
  const teresaLink = { title: 'Teresa of León', type: 'person', slug: 'teresa-of-leon', label: 'Mother and predecessor as ruler of the county' }
  afonso.relatedEntries.people = afonso.relatedEntries.people || []
  if (!afonso.relatedEntries.people.some((p) => p.slug === 'teresa-of-leon')) {
    afonso.relatedEntries.people.push(teresaLink); console.log('afonso-i related + teresa-of-leon')
  }
}

fs.writeFileSync(dataPath, JSON.stringify(data, null, 2) + '\n')
console.log(`Added ${added} Portugal-foundation articles.`)
