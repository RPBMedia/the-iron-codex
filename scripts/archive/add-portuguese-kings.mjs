/**
 * Adds the medieval kings of Portugal (Afonso I 1139 -> John II d.1495) as full
 * ruler articles: House of Burgundy (Afonsine) and House of Aviz. Each entry has
 * biography, Character and Personality, timeline (>=5), related entries (>=3),
 * sources, a resolved image, isRuler + succession chain. Idempotent by id.
 */
import fs from 'node:fs'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dataPath = path.join(__dirname, '../server/data/history.json')
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'))
const imgMap = JSON.parse(fs.readFileSync('C:/Users/ruipa/AppData/Local/Temp/claude/c--Users-ruipa-CodeWorkspace/1e4f3312-4a26-40ca-92c3-4c8a44c16584/scratchpad/pt-images.json', 'utf8'))

const PT = { title: 'Kingdom of Portugal', type: 'location', slug: 'kingdom-of-portugal' }
const CAST = { title: 'Kingdom of Castile', type: 'location', slug: 'kingdom-of-castile' }
const ANDALUS = { title: 'Al-Andalus', type: 'location', slug: 'al-andalus' }
const ALMOHAD = { title: 'Almohad Caliphate', type: 'location', slug: 'almohad-caliphate' }
const ENGLAND = { title: 'Kingdom of England', type: 'location', slug: 'kingdom-of-england' }
const ARAGON = { title: 'Kingdom of Aragon', type: 'location', slug: 'kingdom-of-aragon' }
const PAPACY = { title: 'Papacy', type: 'location', slug: 'papacy' }
const LASNAVAS = { title: 'Battle of Las Navas de Tolosa', type: 'event', slug: 'battle-of-las-navas-de-tolosa' }
const ISABELLA = { title: 'Isabella I of Castile', type: 'person', slug: 'isabella-of-castile' }
const person = (slug, title, label) => ({ title, type: 'person', slug, label })

function king(spec) {
  const img = imgMap[spec.id]
  if (!img) throw new Error('no image for ' + spec.id)
  return {
    id: spec.id,
    type: 'character',
    name: spec.name,
    born: spec.born,
    died: spec.died,
    deathAge: spec.deathAge,
    causeOfDeath: spec.causeOfDeath,
    restingPlace: spec.restingPlace,
    location: 'Kingdom of Portugal',
    image: img.image,
    summary: spec.summary,
    overview: spec.sections[0].paragraphs,
    greatestFeats: spec.greatestFeats,
    title: spec.titleField,
    roles: spec.roles,
    ...(spec.roleNote ? { roleNote: spec.roleNote } : {}),
    birth: spec.birth,
    death: spec.death,
    quickFacts: spec.quickFacts,
    imageInfo: img.imageInfo,
    contentSections: spec.sections,
    keyAchievements: spec.keyAchievements,
    timeline: spec.timeline,
    relatedEntries: spec.relatedEntries,
    sources: spec.sources,
    aliases: spec.aliases,
    isRuler: true,
    succession: spec.succession
  }
}

const britannica = (title, url) => ({ title, author: 'Encyclopaedia Britannica', type: 'encyclopedia', url })
const whe = (title, url) => ({ title, author: 'World History Encyclopedia', type: 'reference article', url })

const kings = [
  // ── AFONSO I ────────────────────────────────────────────────────────────────
  {
    id: 'afonso-i-of-portugal', name: 'Afonso I of Portugal', born: 1109, died: 1185, deathAge: 'about 76',
    causeOfDeath: 'Natural causes in old age', restingPlace: 'Monastery of Santa Cruz, Coimbra',
    aliases: ['Afonso Henriques', 'Afonso the Conqueror', 'Afonso o Conquistador'],
    titleField: 'King of Portugal', roles: ['King of Portugal', 'Count of Portugal'],
    summary: 'The first king of Portugal, who won independence from León-Castile and carved a kingdom out of the western Reconquista.',
    birth: { date: 'c. 1109', place: { name: 'Guimarães or Viseu' }, note: 'Birthplace and exact year are debated; Guimarães is the traditional association.' },
    death: { date: '1185', place: { name: 'Coimbra' }, circumstance: 'Died at Coimbra in 1185, having ruled for nearly five decades; buried in the Monastery of Santa Cruz.' },
    quickFacts: { realm: 'Kingdom of Portugal', dynasty: 'House of Burgundy (Afonsine)', culture: 'Portuguese', knownFor: 'founding the Kingdom of Portugal and winning its independence' },
    greatestFeats: ['First King of Portugal', 'Won independence at São Mamede and Ourique', 'Captured Lisbon in 1147', 'Secured papal recognition of the kingdom'],
    sections: [
      { title: 'Overview', paragraphs: [
        'Afonso I, called Afonso Henriques, was the first king of Portugal and the founder of its independence. Son of Count Henry of Burgundy and Countess Teresa of León, he turned the frontier County of Portugal — a dependency of the crown of León — into a sovereign kingdom through rebellion against his own mother, war against Castile-León, and relentless campaigning against the Almoravids and Almohads of al-Andalus.',
        'Over a reign of nearly fifty years he pushed the southern frontier from the Douro past the Tagus, captured Lisbon with the help of a passing crusader fleet in 1147, and secured formal recognition of both his royal title and his kingdom from the Papacy. When he died in 1185 he left a defined, independent realm where none had existed at his birth.'
      ]},
      { title: 'Birth and early life', paragraphs: [
        'Afonso was born around 1109, the son of Henry of Burgundy, a French nobleman granted the County of Portugal, and Teresa, illegitimate daughter of Alfonso VI of León-Castile. When his father died in 1112 Teresa governed the county, increasingly in alliance with the Galician noble Fernão Peres de Trava, which alarmed the Portuguese nobility who feared absorption into Galicia.',
        'In 1128 the young Afonso, backed by that nobility, defeated his mother\'s forces at the Battle of São Mamede near Guimarães and took control of the county himself, ending Teresa\'s rule. It was the first decisive act of a career built on seizing and defending autonomy.'
      ]},
      { title: 'Character and Personality', paragraphs: [
        'Afonso Henriques is remembered above all as a warrior of formidable will and physical strength, and the tradition around him is heavily shaped by his role as founder-hero. Later chronicles and legend made him a giant of a man, personally leading charges into his old age, and attached to him the story of a miraculous vision of Christ before the Battle of Ourique in 1139 — a legend that cannot be treated as fact but shows how thoroughly Portuguese memory cast him as a providentially chosen king.',
        'What the record more securely supports is a ruler of stubborn ambition and political daring: a man who made war on his own mother, defied the overlordship of his powerful cousin Alfonso VII of León-Castile, and gambled repeatedly on conquest. He was also shrewd enough to seek legitimacy where force could not provide it, courting the Papacy and endowing religious houses such as Santa Cruz in Coimbra. His capture at Badajoz in 1169, where he broke his leg and was briefly taken prisoner, ended his campaigning and is a reminder that the founder was a soldier to the point of recklessness.'
      ]},
      { title: 'Founding the kingdom', paragraphs: [
        'Afonso first styled himself prince and then king, traditionally after a great victory over the Almoravids at the Battle of Ourique in 1139. In 1143 the Treaty of Zamora, mediated by a papal legate, secured recognition of his royal title from Alfonso VII of León-Castile, and Afonso placed his kingdom under the protection of the Holy See. Full papal confirmation came only in 1179, when Pope Alexander III\'s bull Manifestis Probatum recognised Afonso as king and Portugal as a kingdom.',
        'His reign was defined by conquest southward against the Muslim taifas and the Almoravid and Almohad empires. His greatest single triumph was the capture of Lisbon in 1147, achieved with the help of northern European crusaders sailing to the Second Crusade, whom he persuaded to besiege the city. Santarém fell the same year, and the frontier was pushed toward the Tagus, giving the young kingdom its future capital.'
      ]},
      { title: 'Death', paragraphs: [
        'Afonso died at Coimbra in 1185, having outlived most of his contemporaries and secured the succession for his son Sancho, who had already been leading campaigns in his father\'s name. He was buried in the Monastery of Santa Cruz in Coimbra, the royal foundation he had favoured.'
      ]},
      { title: 'Legacy', paragraphs: [
        'Afonso I is the founding figure of the Portuguese monarchy and the origin point of every later dynasty\'s claim to legitimacy. The kingdom he assembled — independent, papally recognised, and committed to the southward Reconquista — became one of the most durable states of medieval Europe, and his name and legend were invoked by Portuguese rulers for centuries as the model of the conquering, kingdom-making sovereign.'
      ]}
    ],
    keyAchievements: [
      { title: 'First King of Portugal', description: 'Transformed the County of Portugal into an independent kingdom, recognised by León-Castile in 1143 and by the Papacy in 1179.' },
      { title: 'Victory at São Mamede, 1128', description: 'Defeated his mother Teresa\'s Galician-backed faction to take control of the county.' },
      { title: 'Capture of Lisbon, 1147', description: 'Took Lisbon from the Muslims with the aid of a passing Second Crusade fleet, gaining the kingdom\'s future capital.' }
    ],
    timeline: [
      { date: 'c. 1109', title: 'Born', description: 'Born to Count Henry of Burgundy and Countess Teresa, heirs to the County of Portugal.' },
      { date: '1128', title: 'Wins the Battle of São Mamede', description: 'Defeats his mother Teresa and her Galician allies to seize control of the County of Portugal.' },
      { date: '1139', title: 'Acclaimed king after Ourique', description: 'Following a celebrated victory over the Almoravids at Ourique, Afonso takes the title of king.', links: [ANDALUS] },
      { date: '1143', title: 'Recognised by León-Castile (Treaty of Zamora)', description: 'Alfonso VII of León-Castile recognises Afonso\'s royal title; Portugal is placed under papal protection.', links: [CAST] },
      { date: '1147', title: 'Captures Lisbon', description: 'Takes Lisbon with the help of northern crusaders bound for the Second Crusade, pushing the frontier to the Tagus.' },
      { date: '1179', title: 'Papal recognition (Manifestis Probatum)', description: 'Pope Alexander III formally recognises Afonso as king and Portugal as a kingdom.', links: [PAPACY] },
      { date: '1185', title: 'Dies at Coimbra', description: 'Dies after nearly fifty years of rule, leaving an independent kingdom to his son Sancho I.', links: [person('sancho-i-of-portugal', 'Sancho I of Portugal', 'His son and successor')] }
    ],
    relatedEntries: {
      locations: [ { ...PT, label: 'The kingdom he founded' }, { ...ANDALUS, label: 'The Muslim-ruled south he campaigned against' }, { ...CAST, label: 'The overlord kingdom he broke free from' } ],
      people: [ person('sancho-i-of-portugal', 'Sancho I of Portugal', 'His son and successor') ],
      events: []
    },
    sources: [ britannica('Afonso I | king of Portugal', 'https://www.britannica.com/biography/Afonso-I-king-of-Portugal'), whe('Kingdom of Portugal', 'https://www.worldhistory.org/portugal/') ],
    succession: {
      office: 'King of Portugal',
      predecessor: { status: 'none', displayName: 'None — first King of Portugal', note: 'The first king of the Portuguese monarchy. Afonso had ruled the County of Portugal, inherited from his mother Countess Teresa, before taking the royal title; there was no earlier king of Portugal.' },
      successor: { personSlug: 'sancho-i-of-portugal', displayName: 'Sancho I', note: 'His son, who had already campaigned as heir' }
    }
  },

  // ── SANCHO I ─────────────────────────────────────────────────────────────────
  {
    id: 'sancho-i-of-portugal', name: 'Sancho I of Portugal', born: 1154, died: 1211, deathAge: 'about 56',
    causeOfDeath: 'Natural causes', restingPlace: 'Monastery of Santa Cruz, Coimbra',
    aliases: ['Sancho the Populator', 'Sancho o Povoador'],
    titleField: 'King of Portugal', roles: ['King of Portugal'],
    summary: 'Second king of Portugal, called "the Populator" for founding towns, settling the frontier, and building the kingdom\'s wealth.',
    birth: { date: '1154', place: { name: 'Coimbra' }, note: 'Son and heir of Afonso I.' },
    death: { date: '1211', place: { name: 'Coimbra' }, circumstance: 'Died at Coimbra in 1211 after a reign focused on consolidation; buried at Santa Cruz beside his father.' },
    quickFacts: { realm: 'Kingdom of Portugal', dynasty: 'House of Burgundy (Afonsine)', culture: 'Portuguese', knownFor: 'settling and developing the young kingdom' },
    greatestFeats: ['Founded and chartered numerous towns', 'Built a large royal treasury', 'Briefly captured Silves (1189)', 'Consolidated the kingdom his father won'],
    sections: [
      { title: 'Overview', paragraphs: [
        'Sancho I, the second king of Portugal, inherited a kingdom that his father Afonso I had conquered but barely organised, and he devoted his reign to consolidating it. His byname, "the Populator" (o Povoador), reflects his systematic founding and chartering of towns, resettlement of the war-torn frontier, and encouragement of agriculture, crafts, and trade.',
        'Though he continued the Reconquista — briefly taking Silves in the Algarve in 1189 — his lasting achievement was internal: turning a raw military frontier into a functioning realm with a full treasury, new settlements, and a growing network of religious and military orders. He died in 1211, leaving a far more stable kingdom than the one he had received.'
      ]},
      { title: 'Birth and early life', paragraphs: [
        'Sancho was born in 1154, the son and heir of Afonso I. He was trained for war and government in his father\'s later years, campaigning against the Almohads and effectively governing in Afonso\'s name after the old king was disabled by his injury at Badajoz in 1169. By the time he inherited the throne in 1185 he was an experienced commander and administrator.'
      ]},
      { title: 'Character and Personality', paragraphs: [
        'Sancho is remembered as a builder rather than a conqueror, and his epithet "the Populator" captures how his own age and later tradition understood him: a king whose energy went into settlement, charters, and the accumulation of resources rather than into the founder\'s dramatic campaigns. The record of his reign — dozens of town charters (forais), new religious foundations, and a famously large royal treasury — supports the image of a careful, acquisitive, and methodical ruler.',
        'That same drive to strengthen the crown\'s independence and wealth brought him into sharp conflict with the church over jurisdiction and taxation, disputes that at times led to interdict. He emerges as a pragmatic, hard-headed manager of the realm — pious in his foundations but unwilling to let ecclesiastical claims limit royal authority or drain the treasury he worked to build.'
      ]},
      { title: 'Settling the kingdom', paragraphs: [
        'Sancho\'s reign is defined by the deliberate development of the territory his father had conquered. He issued charters to found and populate towns, drew in settlers and religious and military orders to hold and work the frontier, and promoted agriculture and commerce as the basis of royal revenue. This policy of colonisation gave the kingdom a denser, more defensible settlement pattern and a more reliable economy.',
        'He did not abandon the Reconquista: in 1189 he captured Silves, a major Almohad city in the Algarve, with the help of passing crusaders, though the Almohads under Ya\'qub al-Mansur recovered it in 1191. The reversal underlined that the young kingdom\'s southern expansion would be slow and contested, and Sancho concentrated on holding and developing what lay north of the Tagus.'
      ]},
      { title: 'Death', paragraphs: [
        'Sancho I died at Coimbra in 1211 and was buried in the Monastery of Santa Cruz beside his father. He left the throne to his son Afonso II, along with a treasury and a settled kingdom that gave his successor the means to turn from conquest toward law and administration.'
      ]},
      { title: 'Legacy', paragraphs: [
        'Sancho I\'s reign was the crucial consolidating phase of the Portuguese monarchy. By populating the frontier, chartering towns, and building royal wealth, he converted his father\'s military conquests into a durable state, and the settlement and legal foundations he laid shaped Portuguese local government for centuries.'
      ]}
    ],
    keyAchievements: [
      { title: 'Systematic town-founding', description: 'Chartered and settled numerous towns, earning the byname "the Populator" and strengthening the frontier and economy.' },
      { title: 'Capture of Silves, 1189', description: 'Took the major Almohad city of Silves in the Algarve with crusader help, though it was lost again in 1191.' },
      { title: 'Built the royal treasury', description: 'Accumulated substantial crown wealth, giving his successors resources for government and defence.' }
    ],
    timeline: [
      { date: '1154', title: 'Born', description: 'Born at Coimbra, son and heir of Afonso I.' },
      { date: '1170', title: 'Knighted and leads campaigns', description: 'Takes an active military and governing role as his father ages and is disabled by injury.' },
      { date: '1185', title: 'Becomes King of Portugal', description: 'Succeeds his father Afonso I as the second king of Portugal.', links: [person('afonso-i-of-portugal', 'Afonso I of Portugal', 'His father and predecessor')] },
      { date: '1189', title: 'Captures Silves', description: 'Takes the Almohad city of Silves in the Algarve with the help of a passing crusader fleet.', links: [ALMOHAD] },
      { date: '1191', title: 'Loses Silves to the Almohads', description: 'Ya\'qub al-Mansur recovers Silves and much of the southern frontier, checking Portuguese expansion.', links: [ALMOHAD] },
      { date: '1211', title: 'Dies at Coimbra', description: 'Dies leaving a settled, wealthy kingdom to his son Afonso II.', links: [person('afonso-ii-of-portugal', 'Afonso II of Portugal', 'His son and successor')] }
    ],
    relatedEntries: {
      locations: [ { ...PT, label: 'The kingdom he consolidated' }, { ...ALMOHAD, label: 'The empire he fought in the Algarve' } ],
      people: [ person('afonso-i-of-portugal', 'Afonso I of Portugal', 'His father and predecessor'), person('afonso-ii-of-portugal', 'Afonso II of Portugal', 'His son and successor') ],
      events: []
    },
    sources: [ britannica('Sancho I | king of Portugal', 'https://www.britannica.com/biography/Sancho-I-king-of-Portugal'), whe('Kingdom of Portugal', 'https://www.worldhistory.org/portugal/') ],
    succession: {
      office: 'King of Portugal',
      predecessor: { personSlug: 'afonso-i-of-portugal', displayName: 'Afonso I', note: 'His father, the founding king' },
      successor: { personSlug: 'afonso-ii-of-portugal', displayName: 'Afonso II', note: 'His son' }
    }
  },

  // ── AFONSO II ────────────────────────────────────────────────────────────────
  {
    id: 'afonso-ii-of-portugal', name: 'Afonso II of Portugal', born: 1185, died: 1223, deathAge: 'about 37',
    causeOfDeath: 'Illness (afflicted by leprosy or a wasting disease)', restingPlace: 'Monastery of Alcobaça',
    aliases: ['Afonso the Fat', 'Afonso o Gordo'],
    titleField: 'King of Portugal', roles: ['King of Portugal'],
    summary: 'Third king of Portugal, who turned from conquest to law and administration, issuing the kingdom\'s first general laws.',
    birth: { date: '1185', place: { name: 'Coimbra' }, note: 'Son and heir of Sancho I.' },
    death: { date: '1223', place: { name: 'Coimbra' }, circumstance: 'Died in 1223 while excommunicate and with the kingdom under papal interdict, over his disputes with the church; buried at Alcobaça.' },
    quickFacts: { realm: 'Kingdom of Portugal', dynasty: 'House of Burgundy (Afonsine)', culture: 'Portuguese', knownFor: 'the first written laws of Portugal and administrative centralisation' },
    greatestFeats: ['Issued Portugal\'s first general laws (1211)', 'Launched the inquirições land surveys', 'Portuguese forces shared in the victory at Las Navas de Tolosa (1212)', 'Centralised royal administration'],
    sections: [
      { title: 'Overview', paragraphs: [
        'Afonso II, the third king of Portugal, broke with the warrior model of his father and grandfather and made his reign one of law, administration, and royal centralisation. Poor health left him unsuited to lead armies in person, and he governed instead through clerks and lawyers, issuing the first general laws of the kingdom in 1211 and launching sweeping inquiries into who held land and by what right.',
        'His efforts to subject the church and nobility to royal authority provoked fierce resistance and ultimately excommunication, so that he died in 1223 with the kingdom under papal interdict. Yet his reign marks the point at which Portugal began to be governed as a state of written law rather than only of conquest.'
      ]},
      { title: 'Birth and early life', paragraphs: [
        'Afonso was born in 1185, the son and heir of Sancho I. From early adulthood he suffered from a serious illness — described in the sources as a wasting disease, and by tradition as leprosy — that shaped his whole reign, making him unable to campaign like his ancestors and giving his byname "the Fat" a note of physical affliction rather than mere corpulence.'
      ]},
      { title: 'Character and Personality', paragraphs: [
        'Afonso II is the first Portuguese king remembered primarily as a legislator and administrator rather than a soldier, and the character that emerges from his reign is that of a determined, legally minded ruler working around the limits of his own poor health. Unable to lead in the field, he concentrated royal power through documents: general laws, land inquiries, and a professional chancery staffed by men trained in Roman and canon law.',
        'That determination made him a hard adversary of the church and the great magnates, whose wealth and jurisdiction he tried to bring under crown scrutiny. His clashes with the archbishop of Braga and with his own sisters over inherited lands escalated into excommunication and interdict, and he died unreconciled. He appears in the record as a stubborn, centralising ruler willing to accept conflict with the church as the price of strengthening the monarchy.'
      ]},
      { title: 'Law and centralisation', paragraphs: [
        'In 1211 Afonso II summoned a Cortes at Coimbra and promulgated the first general laws of Portugal, covering royal rights, property, justice, and the protection of the crown\'s prerogatives. These laws asserted that the king\'s authority stood above private and ecclesiastical claims, a principle that underpinned the rest of his programme.',
        'He also launched the inquirições — systematic inquiries into landholding designed to discover which estates had been usurped from the crown or held without proper title — and the confirmações, reviews of the privileges granted by his predecessors. These measures attacked the accumulated gains of the nobility and church and provoked the resistance that dominated his reign. During it, Portuguese knights joined the great Christian coalition that crushed the Almohads at the Battle of Las Navas de Tolosa in 1212, and royal forces took Alcácer do Sal in 1217.'
      ]},
      { title: 'Death', paragraphs: [
        'Afonso II died at Coimbra in 1223, excommunicate and with his kingdom under a papal interdict provoked by his long quarrel with the church. His son Sancho II inherited both the throne and the unresolved conflict with the ecclesiastical hierarchy.'
      ]},
      { title: 'Legacy', paragraphs: [
        'Afonso II shifted the Portuguese monarchy decisively from a machine of conquest toward one of law and administration. His general laws and land inquiries established the principle of an overriding royal authority defined in writing, a foundation that later kings such as Denis and Afonso III built upon even as his own reign ended in conflict with the church.'
      ]}
    ],
    keyAchievements: [
      { title: 'First general laws of Portugal, 1211', description: 'Issued the kingdom\'s first written general legislation, asserting royal authority over property and justice.' },
      { title: 'The inquirições', description: 'Launched systematic inquiries into landholding to recover crown lands and rights usurped by nobles and the church.' },
      { title: 'Las Navas de Tolosa, 1212', description: 'Portuguese knights shared in the decisive Christian victory over the Almohads in central Iberia.' }
    ],
    timeline: [
      { date: '1185', title: 'Born', description: 'Born at Coimbra, son and heir of Sancho I.' },
      { date: '1211', title: 'Becomes king and issues the first laws', description: 'Succeeds Sancho I and promulgates Portugal\'s first general laws at the Cortes of Coimbra.', links: [person('sancho-i-of-portugal', 'Sancho I of Portugal', 'His father and predecessor')] },
      { date: '1212', title: 'Las Navas de Tolosa', description: 'Portuguese knights join the Christian coalition that shatters Almohad power at Las Navas de Tolosa.', links: [LASNAVAS] },
      { date: '1217', title: 'Capture of Alcácer do Sal', description: 'Royal forces and crusaders take the strategic Muslim stronghold of Alcácer do Sal.' },
      { date: 'c. 1220', title: 'Excommunication and interdict', description: 'His campaign against church privileges and jurisdiction leads to his excommunication and a papal interdict on the kingdom.', links: [PAPACY] },
      { date: '1223', title: 'Dies at Coimbra', description: 'Dies excommunicate; his son Sancho II inherits the throne and the conflict with the church.', links: [person('sancho-ii-of-portugal', 'Sancho II of Portugal', 'His son and successor')] }
    ],
    relatedEntries: {
      locations: [ { ...PT, label: 'The kingdom he reformed by law' }, { ...PAPACY, label: 'The church authority he clashed with' } ],
      people: [ person('sancho-i-of-portugal', 'Sancho I of Portugal', 'His father and predecessor'), person('sancho-ii-of-portugal', 'Sancho II of Portugal', 'His son and successor') ],
      events: [ { ...LASNAVAS, label: 'Portuguese knights fought in this 1212 victory' } ]
    },
    sources: [ britannica('Afonso II | king of Portugal', 'https://www.britannica.com/biography/Afonso-II'), whe('Kingdom of Portugal', 'https://www.worldhistory.org/portugal/') ],
    succession: {
      office: 'King of Portugal',
      predecessor: { personSlug: 'sancho-i-of-portugal', displayName: 'Sancho I', note: 'His father' },
      successor: { personSlug: 'sancho-ii-of-portugal', displayName: 'Sancho II', note: 'His son' }
    }
  },

  // ── SANCHO II ────────────────────────────────────────────────────────────────
  {
    id: 'sancho-ii-of-portugal', name: 'Sancho II of Portugal', born: 1207, died: 1248, deathAge: 'about 40',
    causeOfDeath: 'Died in exile', restingPlace: 'Toledo Cathedral, Castile',
    aliases: ['Sancho the Pious', 'Sancho o Capelo', 'Sancho the Caped'],
    titleField: 'King of Portugal', roles: ['King of Portugal'],
    summary: 'Fourth king of Portugal, a Reconquista campaigner whose reign collapsed into civil conflict and ended in deposition and exile.',
    birth: { date: '1207', place: { name: 'Coimbra' }, note: 'Son and heir of Afonso II.' },
    death: { date: '1248', place: { name: 'Toledo, Castile' }, circumstance: 'Deposed by papal decree in 1245 and displaced by his brother; died in exile at Toledo in 1248.' },
    quickFacts: { realm: 'Kingdom of Portugal', dynasty: 'House of Burgundy (Afonsine)', culture: 'Portuguese', knownFor: 'Reconquista gains in the south and his deposition in 1245' },
    greatestFeats: ['Advanced the Reconquista into the Alentejo and Algarve', 'Took Serpa, Moura, and other southern towns', 'Only Portuguese king to be formally deposed by the Papacy'],
    sections: [
      { title: 'Overview', paragraphs: [
        'Sancho II, the fourth king of Portugal, inherited both a crown and a bitter quarrel with the church from his father Afonso II. He returned to the aggressive Reconquista of his ancestors, pushing the frontier deep into the Alentejo and Algarve, but at home his reign disintegrated into conflict with the nobility and the ecclesiastical hierarchy.',
        'Unable to keep order or reconcile with the church, he was formally deposed by Pope Innocent IV in 1245, who authorised his brother Afonso, Count of Boulogne, to take over the government. Sancho was driven out and died in exile in Castile in 1248 — the only Portuguese king ever removed from his throne by papal decree.'
      ]},
      { title: 'Birth and early life', paragraphs: [
        'Sancho was born in 1207 and came to the throne in 1223 as a teenager, on the death of his excommunicate father. His minority and youth left him dependent on powerful advisers and exposed to the factional struggles of the Portuguese nobility, and the unresolved conflict with the church shadowed him from the start of his reign.'
      ]},
      { title: 'Character and Personality', paragraphs: [
        'Sancho II is a difficult figure to judge, because the fullest accounts of his character come from the propaganda of those who deposed him. The papal case against him, echoed in later Portuguese tradition, painted him as weak, negligent, and incapable of governing or defending the church — a portrait designed to justify his removal. His byname "the Pious" or "the Caped" (o Capelo) points to a milder memory, of a devout but ineffectual king.',
        'What the record more securely shows is a capable Reconquista commander whose gifts as a warrior were not matched by success as a domestic ruler. He could win towns from the Muslims but could not master the factions of his own kingdom or repair the breach with the church that his father had opened. Whether his failure reflects genuine incapacity or the impossible inheritance of a realm at war with the papacy is hard to separate from the hostile tradition that condemned him.'
      ]},
      { title: 'Reconquista and collapse', paragraphs: [
        'For much of his reign Sancho pressed the war against the Muslims of the south, capturing Serpa, Moura, and other strongholds and extending Portuguese control across the Alentejo toward the Algarve. In these campaigns he showed the martial energy of the Afonsine line.',
        'At home, however, his authority crumbled. Disputes with bishops, complaints of misgovernment, and the resentment of powerful nobles combined into open crisis. In 1245 Pope Innocent IV issued the bull Grandi non immerito declaring Sancho unfit to rule and appointing his brother Afonso of Boulogne as governor of the realm. Civil war followed; Sancho, abandoned by much of the kingdom, was forced out.'
      ]},
      { title: 'Death', paragraphs: [
        'Deposed and displaced by his brother, Sancho II withdrew to Castile and died at Toledo in 1248, where he was buried. His removal transferred the crown to Afonso III without ending the line, but it stood as a stark demonstration of the power the papacy could wield over a medieval king.'
      ]},
      { title: 'Legacy', paragraphs: [
        'Sancho II is remembered chiefly for the manner of his fall — the only king of Portugal deposed by the church — and for the Reconquista gains that his brother would complete. His reign showed both the strength of the papacy in the thirteenth century and the danger to a king who could neither defeat his domestic enemies nor make peace with Rome.'
      ]}
    ],
    keyAchievements: [
      { title: 'Reconquista in the south', description: 'Captured Serpa, Moura, and other towns, extending Portuguese control across the Alentejo toward the Algarve.' },
      { title: 'Reign ended by papal deposition', description: 'Formally declared unfit to rule by Pope Innocent IV in 1245 — the only Portuguese king removed by papal decree.' }
    ],
    timeline: [
      { date: '1207', title: 'Born', description: 'Born at Coimbra, son and heir of Afonso II.' },
      { date: '1223', title: 'Becomes king as a youth', description: 'Succeeds his father Afonso II while still a teenager, inheriting the conflict with the church.', links: [person('afonso-ii-of-portugal', 'Afonso II of Portugal', 'His father and predecessor')] },
      { date: '1230s–1240s', title: 'Reconquista in the Alentejo', description: 'Captures Serpa, Moura, and other southern strongholds, extending the frontier toward the Algarve.', links: [ANDALUS] },
      { date: '1245', title: 'Deposed by Pope Innocent IV', description: 'The bull Grandi non immerito declares him unfit and names his brother Afonso of Boulogne as governor.', links: [PAPACY] },
      { date: '1246–1247', title: 'Civil war and displacement', description: 'Abandoned by much of the kingdom, Sancho is driven out by his brother\'s partisans.', links: [person('afonso-iii-of-portugal', 'Afonso III of Portugal', 'His brother, who displaced him')] },
      { date: '1248', title: 'Dies in exile at Toledo', description: 'Dies in Castile, deposed and displaced; his brother rules as Afonso III.', links: [CAST] }
    ],
    relatedEntries: {
      locations: [ { ...PT, label: 'The kingdom he lost' }, { ...ANDALUS, label: 'The Muslim south he campaigned against' }, { ...PAPACY, label: 'The authority that deposed him' } ],
      people: [ person('afonso-ii-of-portugal', 'Afonso II of Portugal', 'His father and predecessor'), person('afonso-iii-of-portugal', 'Afonso III of Portugal', 'His brother and successor') ],
      events: []
    },
    sources: [ britannica('Sancho II | king of Portugal', 'https://www.britannica.com/biography/Sancho-II-king-of-Portugal'), whe('Kingdom of Portugal', 'https://www.worldhistory.org/portugal/') ],
    succession: {
      office: 'King of Portugal',
      predecessor: { personSlug: 'afonso-ii-of-portugal', displayName: 'Afonso II', note: 'His father' },
      successor: { personSlug: 'afonso-iii-of-portugal', displayName: 'Afonso III', note: 'His younger brother, who displaced him after the papal deposition of 1245' }
    }
  },

  // ── AFONSO III ───────────────────────────────────────────────────────────────
  {
    id: 'afonso-iii-of-portugal', name: 'Afonso III of Portugal', born: 1210, died: 1279, deathAge: 'about 69',
    causeOfDeath: 'Natural causes', restingPlace: 'Monastery of Alcobaça',
    aliases: ['Afonso the Boulonnais', 'Afonso o Bolonhês'],
    titleField: 'King of Portugal', roles: ['King of Portugal', 'Count of Boulogne'],
    summary: 'Fifth king of Portugal, who completed the Reconquista by taking the Algarve and gave commoners a voice in the Cortes.',
    birth: { date: '1210', place: { name: 'Coimbra' }, note: 'Second son of Afonso II; became Count of Boulogne by marriage before taking the Portuguese throne.' },
    death: { date: '1279', place: { name: 'Lisbon' }, circumstance: 'Died in 1279, having fixed Portugal\'s southern borders and clashed with the church over taxation; buried at Alcobaça.' },
    quickFacts: { realm: 'Kingdom of Portugal', dynasty: 'House of Burgundy (Afonsine)', culture: 'Portuguese', knownFor: 'completing the Reconquista of the Algarve and summoning commoners to the Cortes' },
    greatestFeats: ['Conquered the Algarve, completing Portugal\'s Reconquista', 'First to summon commoners (the third estate) to the Cortes, 1254', 'Shifted the centre of government toward Lisbon'],
    sections: [
      { title: 'Overview', paragraphs: [
        'Afonso III, the fifth king of Portugal, came to the throne by displacing his own brother Sancho II, whom the papacy had deposed, and went on to complete the work the dynasty had begun. Under him Portuguese forces finished the Reconquista of the Algarve, giving the kingdom essentially the continental borders it holds today.',
        'A former Count of Boulogne shaped by the more centralised monarchy of France, Afonso strengthened royal administration, moved the effective centre of government toward Lisbon, and in 1254 summoned representatives of the towns to the Cortes for the first time — an early step toward a broader political community. His reign combined territorial completion with institutional development.'
      ]},
      { title: 'Birth and early life', paragraphs: [
        'Afonso was born in 1210, the second son of Afonso II. As a younger son with no expectation of the Portuguese throne, he made his career abroad, marrying Matilda II, Countess of Boulogne, and ruling that northern French county. There he absorbed the administrative habits of the Capetian world before the Portuguese crisis of the 1240s drew him home.',
        'When Pope Innocent IV deposed his brother Sancho II in 1245, the Portuguese opposition invited Afonso to take over the government. He returned, led the party that drove Sancho out, and after his brother\'s death in 1248 ruled as king in his own right.'
      ]},
      { title: 'Character and Personality', paragraphs: [
        'Afonso III is remembered as an able and ambitious administrator, a ruler formed by the more bureaucratic monarchy of France who brought that outlook to Portugal. His reign shows a consistent drive to strengthen and enrich the crown: completing the conquest of the Algarve, reorganising administration, developing the towns, and asserting royal rights against both nobles and the church.',
        'That acquisitiveness made him, like several of his ancestors, an opponent of ecclesiastical privilege, and his heavy taxation and encroachment on church rights drew complaints to Rome and eventually the threat of excommunication late in his reign. He appears as a calculating, energetic, and sometimes ruthless ruler — willing to unseat his own brother, willing to broaden the Cortes when it served the crown, and willing to quarrel with the church over money and jurisdiction.'
      ]},
      { title: 'Completing the Reconquista and the Cortes', paragraphs: [
        'Afonso III drove the final phase of the Portuguese Reconquista, capturing the remaining Muslim strongholds of the Algarve, including Faro, by around 1249. This brought the whole of the south under Portuguese rule and set off a dispute with Castile over sovereignty in the region, eventually settled by the Treaty of Badajoz in 1267, which recognised Portuguese possession of the Algarve.',
        'At home, his most far-reaching innovation came in 1254, when he summoned representatives of the townsmen — the commons — to a Cortes at Leiria, alongside the nobility and clergy. It was the first time the third estate took part in a Portuguese assembly, an early stage in the development of the Cortes as a body through which the crown negotiated taxation and consent with a wider political nation.'
      ]},
      { title: 'Death', paragraphs: [
        'Afonso III died in 1279, leaving a kingdom that had reached its natural southern limits and a strengthened, more centralised monarchy. He was succeeded by his son Denis, whose long reign would build on his father\'s administrative and territorial achievements.'
      ]},
      { title: 'Legacy', paragraphs: [
        'Afonso III completed the territorial making of Portugal and advanced its institutions. By finishing the conquest of the Algarve he fixed the kingdom\'s continental borders, and by bringing the towns into the Cortes he began the long development of representative assembly in Portuguese government — foundations on which his son Denis built one of the most stable reigns of the Middle Ages.'
      ]}
    ],
    keyAchievements: [
      { title: 'Conquest of the Algarve', description: 'Completed the Reconquista of southern Portugal, giving the kingdom its lasting continental borders.' },
      { title: 'Commoners in the Cortes, 1254', description: 'First Portuguese king to summon town representatives to a Cortes, broadening the political community.' },
      { title: 'Treaty of Badajoz, 1267', description: 'Settled the dispute with Castile over the Algarve, securing Portuguese sovereignty there.' }
    ],
    timeline: [
      { date: '1210', title: 'Born', description: 'Born a younger son of Afonso II, with no expectation of the throne.' },
      { date: 'c. 1235', title: 'Becomes Count of Boulogne', description: 'Marries Matilda II of Boulogne and rules the French county, absorbing Capetian administrative practice.', links: [ { title: 'Kingdom of France', type: 'location', slug: 'kingdom-of-france' } ] },
      { date: '1245–1248', title: 'Displaces Sancho II and becomes king', description: 'Invited to govern after the papal deposition of his brother, he takes the throne on Sancho\'s death in exile.', links: [person('sancho-ii-of-portugal', 'Sancho II of Portugal', 'The brother he displaced')] },
      { date: 'c. 1249', title: 'Completes the conquest of the Algarve', description: 'Takes Faro and the last Muslim strongholds of the south, fixing Portugal\'s continental borders.', links: [ANDALUS] },
      { date: '1254', title: 'Summons commoners to the Cortes', description: 'Brings town representatives into a Cortes at Leiria for the first time.' },
      { date: '1267', title: 'Treaty of Badajoz with Castile', description: 'Settles the dispute over the Algarve, securing Portuguese sovereignty.', links: [CAST] },
      { date: '1279', title: 'Dies at Lisbon', description: 'Dies leaving a completed kingdom to his son Denis.', links: [person('denis-of-portugal', 'Denis of Portugal', 'His son and successor')] }
    ],
    relatedEntries: {
      locations: [ { ...PT, label: 'The kingdom whose borders he completed' }, { ...CAST, label: 'Rival over the Algarve, settled in 1267' }, { ...ANDALUS, label: 'The Muslim south he finished conquering' } ],
      people: [ person('sancho-ii-of-portugal', 'Sancho II of Portugal', 'His brother and predecessor'), person('denis-of-portugal', 'Denis of Portugal', 'His son and successor') ],
      events: []
    },
    sources: [ britannica('Afonso III | king of Portugal', 'https://www.britannica.com/biography/Afonso-III-king-of-Portugal'), whe('Kingdom of Portugal', 'https://www.worldhistory.org/portugal/') ],
    succession: {
      office: 'King of Portugal',
      predecessor: { personSlug: 'sancho-ii-of-portugal', displayName: 'Sancho II', note: 'His elder brother, whom he displaced after the papal deposition of 1245' },
      successor: { personSlug: 'denis-of-portugal', displayName: 'Denis (Dinis I)', note: 'His son' }
    }
  },

  // ── DENIS ────────────────────────────────────────────────────────────────────
  {
    id: 'denis-of-portugal', name: 'Denis of Portugal', born: 1261, died: 1325, deathAge: 'about 63',
    causeOfDeath: 'Natural causes', restingPlace: 'Monastery of São Dinis, Odivelas',
    aliases: ['Dinis I', 'Denis the Farmer King', 'Dinis o Lavrador', 'the Poet King'],
    titleField: 'King of Portugal', roles: ['King of Portugal'],
    summary: 'Sixth king of Portugal, a reforming and cultured ruler who founded the university, fixed the Castilian border, and made Portuguese the language of government.',
    birth: { date: '1261', place: { name: 'Lisbon' }, note: 'Son and heir of Afonso III.' },
    death: { date: '1325', place: { name: 'Santarém' }, circumstance: 'Died in 1325 after a long reign, having survived a civil war with his heir; buried at the monastery of Odivelas.' },
    quickFacts: { realm: 'Kingdom of Portugal', dynasty: 'House of Burgundy (Afonsine)', culture: 'Portuguese', knownFor: 'founding the Portuguese university, the Treaty of Alcañices, and promoting agriculture and the vernacular' },
    greatestFeats: ['Founded the first Portuguese university (1290)', 'Treaty of Alcañices (1297) fixed the border with Castile', 'Created the Order of Christ (1319)', 'Made Portuguese the language of royal administration'],
    sections: [
      { title: 'Overview', paragraphs: [
        'Denis, sixth king of Portugal and often written Dinis, presided over one of the longest and most constructive reigns of the medieval kingdom. Where his predecessors had conquered and organised, Denis cultivated: he promoted agriculture and rural resettlement so energetically that he was remembered as "the Farmer King," founded the country\'s first university, and was himself a gifted troubadour poet.',
        'He fixed Portugal\'s eastern border with Castile through the Treaty of Alcañices in 1297 — one of the oldest stable borders in Europe — made Portuguese rather than Latin the language of the royal chancery, and after the suppression of the Knights Templar created the Portuguese Order of Christ to inherit their assets and their crusading role. His reign gave the kingdom a durable framework of learning, law, language, and settled frontiers.'
      ]},
      { title: 'Birth and early life', paragraphs: [
        'Denis was born in 1261, son of Afonso III and Beatrice of Castile, and inherited a kingdom that had reached its natural borders and needed development rather than conquest. He came to the throne in 1279 already exposed to a cultured court and to the administrative reforms of his father, and he married Elizabeth of Aragon, later venerated as a saint, whose reputation for piety and peacemaking became part of his reign\'s memory.'
      ]},
      { title: 'Character and Personality', paragraphs: [
        'Denis is remembered as the most cultivated of the early Portuguese kings, a patron of learning and a poet in his own right — more than a hundred of his cantigas, courtly songs in Galician-Portuguese, survive, making him one of the significant troubadour figures of the peninsula. That literary reputation sits beside a practical, improving temperament: the byname "the Farmer King" (o Lavrador) reflects his genuine and unusual attention to agriculture, land drainage, and the planting of the great pine forest near Leiria to hold the coastal dunes and supply timber.',
        'Beneath the cultured and constructive image was a firm and far-sighted ruler. He curbed the independent military orders, negotiated shrewdly with Castile and the papacy, and defended royal authority against the nobility. The great shadow over his personality is the bitter civil war of his last years against his son and heir, the future Afonso IV, who resented the favour Denis showed to an illegitimate son — a conflict that revealed the hard, controlling side of an otherwise celebrated reign.'
      ]},
      { title: 'Reforms, learning, and the frontier', paragraphs: [
        'In 1290 Denis founded a studium generale, the first Portuguese university, at Lisbon; after moving between Lisbon and Coimbra it settled permanently at Coimbra, where it remains one of the oldest universities in the world. He ordered the use of Portuguese in place of Latin in royal documents, a decisive act in the making of the national language, and codified and translated laws to make royal justice more accessible.',
        'In foreign affairs his masterpiece was the Treaty of Alcañices of 1297, which settled the long-disputed border with Castile and Léon and has remained substantially unchanged ever since. When the papacy suppressed the Knights Templar, Denis protected their Portuguese members and in 1319 secured the creation of the Order of Christ, which inherited the Templars\' Portuguese property and would later fund and lead maritime expansion. He also promoted commerce, chartered fairs, and organised the beginnings of a royal navy.'
      ]},
      { title: 'Death', paragraphs: [
        'Denis died at Santarém in 1325, having survived the revolt of his son and reconciled with him shortly before the end, in part through the mediation of his wife Elizabeth. He left the throne to Afonso IV and a kingdom transformed by decades of cultural, legal, and economic development.'
      ]},
      { title: 'Legacy', paragraphs: [
        'Denis is remembered as one of the greatest medieval kings of Portugal. His university, his promotion of the Portuguese language, the stable border he fixed with Castile, and the Order of Christ he created were all foundations that outlasted him by centuries — the last of them helping to finance the overseas expansion of his descendants. His reign is the model of medieval Portuguese kingship at its most constructive.'
      ]}
    ],
    keyAchievements: [
      { title: 'Founded the Portuguese university, 1290', description: 'Established the studium generale that became the University of Coimbra, one of the oldest in the world.' },
      { title: 'Treaty of Alcañices, 1297', description: 'Fixed the border with Castile-León, creating one of Europe\'s most enduring frontiers.' },
      { title: 'Created the Order of Christ, 1319', description: 'Founded the order that inherited the Templars\' Portuguese assets and later funded maritime expansion.' },
      { title: 'Made Portuguese the language of government', description: 'Replaced Latin with Portuguese in royal documents, shaping the national language.' }
    ],
    timeline: [
      { date: '1261', title: 'Born', description: 'Born at Lisbon to Afonso III and Beatrice of Castile.' },
      { date: '1279', title: 'Becomes King of Portugal', description: 'Succeeds his father Afonso III and begins a long reign of internal development.', links: [person('afonso-iii-of-portugal', 'Afonso III of Portugal', 'His father and predecessor')] },
      { date: '1290', title: 'Founds the university', description: 'Establishes Portugal\'s first university, later fixed at Coimbra.' },
      { date: '1297', title: 'Treaty of Alcañices with Castile', description: 'Settles the border with Castile-León, creating a frontier that endures to the present.', links: [CAST] },
      { date: '1319', title: 'Creates the Order of Christ', description: 'Secures a new military order to inherit the suppressed Templars\' Portuguese property and mission.' },
      { date: '1320s', title: 'Civil war with his heir', description: 'Fights a bitter conflict against his son, the future Afonso IV, over the favour shown to an illegitimate son.', links: [person('afonso-iv-of-portugal', 'Afonso IV of Portugal', 'His son and successor')] },
      { date: '1325', title: 'Dies at Santarém', description: 'Dies reconciled with his heir, leaving a transformed kingdom to Afonso IV.' }
    ],
    relatedEntries: {
      locations: [ { ...PT, label: 'The kingdom he developed and reformed' }, { ...CAST, label: 'Neighbour with whom he fixed the border in 1297' } ],
      people: [ person('afonso-iii-of-portugal', 'Afonso III of Portugal', 'His father and predecessor'), person('afonso-iv-of-portugal', 'Afonso IV of Portugal', 'His son and successor') ],
      events: []
    },
    sources: [ britannica('Denis | king of Portugal', 'https://www.britannica.com/biography/Denis-king-of-Portugal'), whe('Kingdom of Portugal', 'https://www.worldhistory.org/portugal/') ],
    succession: {
      office: 'King of Portugal',
      predecessor: { personSlug: 'afonso-iii-of-portugal', displayName: 'Afonso III', note: 'His father' },
      successor: { personSlug: 'afonso-iv-of-portugal', displayName: 'Afonso IV', note: 'His son, with whom he had earlier fought a civil war' }
    }
  },

  // ── AFONSO IV ────────────────────────────────────────────────────────────────
  {
    id: 'afonso-iv-of-portugal', name: 'Afonso IV of Portugal', born: 1291, died: 1357, deathAge: 'about 65',
    causeOfDeath: 'Natural causes', restingPlace: 'Lisbon Cathedral (Sé de Lisboa)',
    aliases: ['Afonso the Brave', 'Afonso o Bravo'],
    titleField: 'King of Portugal', roles: ['King of Portugal'],
    summary: 'Seventh king of Portugal, victor over the Marinids at Río Salado, remembered darkly for ordering the killing of Inês de Castro.',
    birth: { date: '1291', place: { name: 'Lisbon' }, note: 'Son and heir of King Denis.' },
    death: { date: '1357', place: { name: 'Lisbon' }, circumstance: 'Died in 1357 amid his son Pedro\'s revolt over the killing of Inês de Castro; buried in Lisbon Cathedral.' },
    quickFacts: { realm: 'Kingdom of Portugal', dynasty: 'House of Burgundy (Afonsine)', culture: 'Portuguese', knownFor: 'the victory of Río Salado and the killing of Inês de Castro' },
    greatestFeats: ['Shared in the great Christian victory at Río Salado (1340)', 'Strengthened royal justice and the navy', 'His reign saw the arrival of the Black Death (1348)'],
    sections: [
      { title: 'Overview', paragraphs: [
        'Afonso IV, seventh king of Portugal, earned the byname "the Brave" for his military energy, above all his part in the decisive Christian victory over the Marinids and Granadans at the Battle of Río Salado in 1340, which ended the last great Muslim invasion of the Iberian Peninsula from North Africa.',
        'His reign is remembered as much for tragedy and conflict: a war with Castile, the devastation of the Black Death in 1348, and above all his order for the killing of Inês de Castro, the mistress of his son and heir Pedro, in 1355. That act drove Pedro into open revolt and cast a long shadow over the end of an otherwise vigorous reign.'
      ]},
      { title: 'Birth and early life', paragraphs: [
        'Afonso was born in 1291, the legitimate son and heir of King Denis. His youth was marked by jealousy of his father\'s illegitimate son Afonso Sanches, whom he believed Denis favoured, and this resentment erupted into civil war against his own father in the 1320s before their reconciliation shortly before Denis\'s death. He inherited the throne in 1325 already hardened by that conflict.'
      ]},
      { title: 'Character and Personality', paragraphs: [
        'Afonso IV is remembered as a forceful and combative ruler — his byname "the Brave" (o Bravo) captures both real martial courage and a hard, sometimes harsh temperament. He had fought his own father as a prince, moved against his half-brother, and as king pursued royal authority and justice with vigour, curbing noble excesses and building up the fleet.',
        'The defining stain on his memory is the killing of Inês de Castro. Fearing the political influence of Inês, a Castilian noblewoman, and her family over his heir Pedro, Afonso authorised her execution in 1355. The decision — whether a cold act of statecraft against a feared foreign faction or a father\'s catastrophic misjudgement — provoked Pedro to rise in arms against him and became one of the most famous tragedies in Portuguese history, fixing Afonso in memory as the king who chose reason of state over his son\'s love, at ruinous cost.'
      ]},
      { title: 'War, plague, and Río Salado', paragraphs: [
        'Afonso\'s reign opened with a war against Castile, partly over the treatment of his daughter Maria, queen of Castile, before the two Christian kingdoms combined against a common enemy. In 1340 a Marinid army from Morocco allied with Granada threatened to reverse the Reconquista; Afonso IV led a Portuguese force alongside Alfonso XI of Castile to a crushing victory at the Battle of Río Salado, the last major Muslim invasion of Iberia from Africa.',
        'The later years of the reign were darker. The Black Death reached Portugal in 1348 and killed a large part of the population, disrupting labour, landholding, and royal revenue. Against this troubled background came the crisis over Inês de Castro and Pedro\'s revolt, which was still unresolved at the king\'s death.'
      ]},
      { title: 'Death', paragraphs: [
        'Afonso IV died at Lisbon in 1357 with the kingdom shaken by his heir\'s rebellion over the killing of Inês de Castro. He was succeeded by that same son, Pedro I, whose reign would be haunted by the memory of Inês and by a reputation for stern personal justice.'
      ]},
      { title: 'Legacy', paragraphs: [
        'Afonso IV left a double memory: the victorious defender of Christian Iberia at Río Salado, and the father who ordered the death of Inês de Castro. His reign combined genuine military and administrative achievement with the demographic catastrophe of the Black Death and a family tragedy that became one of the enduring legends of Portuguese literature and history.'
      ]}
    ],
    keyAchievements: [
      { title: 'Battle of Río Salado, 1340', description: 'Shared in the decisive Christian victory over the Marinids and Granada, ending the last great African invasion of Iberia.' },
      { title: 'Strengthened royal justice and the navy', description: 'Curbed noble power, promoted royal justice, and developed Portuguese naval capacity.' },
      { title: 'Reign of the Black Death', description: 'Governed Portugal through the arrival of the plague in 1348 and its social and economic upheaval.' }
    ],
    timeline: [
      { date: '1291', title: 'Born', description: 'Born at Lisbon, legitimate heir of King Denis.' },
      { date: '1325', title: 'Becomes King of Portugal', description: 'Succeeds his father Denis after their earlier civil war and reconciliation.', links: [person('denis-of-portugal', 'Denis of Portugal', 'His father and predecessor')] },
      { date: '1340', title: 'Victory at Río Salado', description: 'Leads a Portuguese army alongside Castile to crush the Marinid-Granadan invasion.', links: [CAST] },
      { date: '1348', title: 'The Black Death reaches Portugal', description: 'The plague devastates the population, disrupting society, labour, and royal revenue.' },
      { date: '1355', title: 'Orders the killing of Inês de Castro', description: 'Authorises the execution of his heir Pedro\'s mistress, provoking Pedro\'s revolt.', links: [person('peter-i-of-portugal', 'Peter I of Portugal', 'His son, driven to revolt')] },
      { date: '1357', title: 'Dies at Lisbon', description: 'Dies with Pedro\'s rebellion unresolved; his son succeeds as Peter I.' }
    ],
    relatedEntries: {
      locations: [ { ...PT, label: 'His kingdom' }, { ...CAST, label: 'Both rival and ally at Río Salado' } ],
      people: [ person('denis-of-portugal', 'Denis of Portugal', 'His father and predecessor'), person('peter-i-of-portugal', 'Peter I of Portugal', 'His son and successor') ],
      events: []
    },
    sources: [ britannica('Afonso IV | king of Portugal', 'https://www.britannica.com/biography/Afonso-IV-king-of-Portugal'), whe('Kingdom of Portugal', 'https://www.worldhistory.org/portugal/') ],
    succession: {
      office: 'King of Portugal',
      predecessor: { personSlug: 'denis-of-portugal', displayName: 'Denis (Dinis I)', note: 'His father' },
      successor: { personSlug: 'peter-i-of-portugal', displayName: 'Peter I', note: 'His son, who had risen in revolt over the killing of Inês de Castro' }
    }
  },

  // ── PETER I ──────────────────────────────────────────────────────────────────
  {
    id: 'peter-i-of-portugal', name: 'Peter I of Portugal', born: 1320, died: 1367, deathAge: 'about 46',
    causeOfDeath: 'Natural causes', restingPlace: 'Monastery of Alcobaça',
    aliases: ['Pedro I', 'Peter the Just', 'Peter the Cruel', 'Pedro o Justiceiro'],
    titleField: 'King of Portugal', roles: ['King of Portugal'],
    summary: 'Eighth king of Portugal, famous for the tragedy of Inês de Castro and for a reign of stern, personal royal justice.',
    birth: { date: '1320', place: { name: 'Coimbra' }, note: 'Son and heir of Afonso IV.' },
    death: { date: '1367', place: { name: 'Estremoz' }, circumstance: 'Died in 1367; buried at Alcobaça in a carved tomb facing that of Inês de Castro.' },
    quickFacts: { realm: 'Kingdom of Portugal', dynasty: 'House of Burgundy (Afonsine)', culture: 'Portuguese', knownFor: 'the vengeance for Inês de Castro and a reputation for harsh justice' },
    greatestFeats: ['Avenged Inês de Castro', 'Defended royal justice against nobles and clergy', 'Presided over a decade of relative peace and prosperity'],
    sections: [
      { title: 'Overview', paragraphs: [
        'Peter I, eighth king of Portugal, is inseparable in memory from the tragedy of Inês de Castro. As heir he had loved Inês, a Castilian noblewoman, against his father Afonso IV\'s wishes; after Afonso ordered her killed in 1355, Peter rose in revolt, and once king in 1357 he hunted down and had two of her killers executed with notorious cruelty, claiming he had secretly married her.',
        'Beyond that famous story, his ten-year reign was mostly peaceful and popular. He was known as "the Just" for his fierce, personal enforcement of the law against powerful offenders — though the same severity earned him the alternative byname "the Cruel." He died in 1367 and was buried at Alcobaça in a tomb placed to face that of Inês.'
      ]},
      { title: 'Birth and early life', paragraphs: [
        'Peter was born in 1320, son and heir of Afonso IV. His life was shaped by his relationship with Inês de Castro, a lady-in-waiting to his wife, with whom he formed a lasting attachment that his father regarded as a political threat because of the influence of her Castilian relatives. Afonso IV\'s decision to have Inês killed in 1355 turned the prince against the king and set the emotional and political tone for everything that followed.'
      ]},
      { title: 'Character and Personality', paragraphs: [
        'Peter I is one of the most vividly remembered Portuguese kings, thanks largely to the fourteenth-century chronicler Fernão Lopes, who portrayed a passionate, impulsive, and rigidly just ruler. His two contrasting bynames — "the Just" (o Justiceiro) and "the Cruel" (o Cru) — capture the same trait seen from opposite sides: an obsession with punishment that made him a terror to lawbreakers and overmighty nobles, and a defender of the common people who expected the king to enforce justice personally and without favour.',
        'Lopes records his restless energy, his fondness for music and dancing, and his habit of administering justice with his own hand, sometimes with shocking brutality. The vengeance he took on Inês\'s killers — by tradition having their hearts torn out — and the legend that he had her body exhumed and her hand kissed as queen, belong partly to later elaboration, but they express how thoroughly his personality was understood through grief, passion, and an unbending, personal idea of justice.'
      ]},
      { title: 'Vengeance and justice', paragraphs: [
        'On becoming king, Peter pursued the men who had carried out Inês de Castro\'s killing. Two of the three fled to Castile but were handed over in an exchange of exiles; Peter had them executed with deliberate cruelty. He also declared publicly that he had secretly married Inês, seeking to legitimise their children — the origin of the enduring legend that he had her corpse crowned, which the contemporary sources do not confirm but which captures the intensity of his devotion.',
        'Away from this personal drama, Peter\'s reign was a decade of relative calm and good government. He kept Portugal largely out of foreign war, protected the towns and common people, and enforced the law against the nobility and clergy with a severity that made his justice famous. His reputation as a just, if harsh, king rested on the sense that under him the powerful could not escape punishment.'
      ]},
      { title: 'Death', paragraphs: [
        'Peter I died in 1367 and was buried at the Monastery of Alcobaça. His tomb and that of Inês de Castro were carved with great richness and placed facing each other, so that — by the tradition attached to them — the lovers would rise facing one another at the Last Judgement. He was succeeded by his son Ferdinand I.'
      ]},
      { title: 'Legacy', paragraphs: [
        'Peter I\'s vengeance for Inês de Castro became one of the great tragic legends of Portuguese and European literature, retold by poets for centuries. Historically, his reign is remembered as a rare interval of peace and firm justice between the plague-stricken reign of his father and the wars and succession crisis that followed under his son. His bynames, "the Just" and "the Cruel," preserve the double edge of a king who made justice a personal passion.'
      ]}
    ],
    keyAchievements: [
      { title: 'Vengeance for Inês de Castro', description: 'Pursued and executed her killers and claimed to have secretly married her, creating an enduring legend.' },
      { title: 'A reign of firm justice', description: 'Enforced royal law personally and without favour, earning the bynames "the Just" and "the Cruel".' },
      { title: 'A decade of peace and prosperity', description: 'Kept Portugal out of major war and protected the towns and common people.' }
    ],
    timeline: [
      { date: '1320', title: 'Born', description: 'Born at Coimbra, son and heir of Afonso IV.' },
      { date: 'c. 1345', title: 'Attachment to Inês de Castro', description: 'Forms a lasting bond with Inês de Castro, opposed by his father for political reasons.' },
      { date: '1355', title: 'Inês is killed; Peter revolts', description: 'After Afonso IV orders Inês\'s death, Peter rises in armed revolt against his father.', links: [person('afonso-iv-of-portugal', 'Afonso IV of Portugal', 'His father, who ordered Inês\'s death')] },
      { date: '1357', title: 'Becomes King of Portugal', description: 'Succeeds Afonso IV and begins to pursue those responsible for Inês\'s death.' },
      { date: '1361', title: 'Executes Inês\'s killers', description: 'Has two of her killers put to death with notorious cruelty after an exchange of exiles with Castile.', links: [CAST] },
      { date: '1367', title: 'Dies and is buried at Alcobaça', description: 'Dies and is entombed in a carved sepulchre facing that of Inês de Castro; his son Ferdinand I succeeds.', links: [person('ferdinand-i-of-portugal', 'Ferdinand I of Portugal', 'His son and successor')] }
    ],
    relatedEntries: {
      locations: [ { ...PT, label: 'His kingdom' }, { ...CAST, label: 'Where Inês\'s killers fled and were exchanged' } ],
      people: [ person('afonso-iv-of-portugal', 'Afonso IV of Portugal', 'His father and predecessor'), person('ferdinand-i-of-portugal', 'Ferdinand I of Portugal', 'His son and successor') ],
      events: []
    },
    sources: [ britannica('Peter I | king of Portugal', 'https://www.britannica.com/biography/Peter-I-king-of-Portugal'), whe('Kingdom of Portugal', 'https://www.worldhistory.org/portugal/') ],
    succession: {
      office: 'King of Portugal',
      predecessor: { personSlug: 'afonso-iv-of-portugal', displayName: 'Afonso IV', note: 'His father, against whom he had revolted' },
      successor: { personSlug: 'ferdinand-i-of-portugal', displayName: 'Ferdinand I', note: 'His legitimate son' }
    }
  },

  // ── FERDINAND I ──────────────────────────────────────────────────────────────
  {
    id: 'ferdinand-i-of-portugal', name: 'Ferdinand I of Portugal', born: 1345, died: 1383, deathAge: 'about 38',
    causeOfDeath: 'Natural causes', restingPlace: 'Convento de São Francisco, Santarém',
    aliases: ['Fernando I', 'Ferdinand the Handsome', 'Ferdinand the Inconstant', 'Fernando o Formoso'],
    titleField: 'King of Portugal', roles: ['King of Portugal'],
    summary: 'Ninth king of Portugal and last of the House of Burgundy, whose wars with Castile and lack of a male heir triggered the 1383–1385 succession crisis.',
    birth: { date: '1345', place: { name: 'Coimbra' }, note: 'Son and heir of Peter I; the last legitimate male of the House of Burgundy.' },
    death: { date: '1383', place: { name: 'Lisbon' }, circumstance: 'Died in 1383 leaving only a daughter, Beatrice, married to the king of Castile — triggering the Interregnum of 1383–1385.' },
    quickFacts: { realm: 'Kingdom of Portugal', dynasty: 'House of Burgundy (Afonsine)', culture: 'Portuguese', knownFor: 'the Fernandine Wars with Castile and the succession crisis his death caused' },
    greatestFeats: ['Fought three wars with Castile for the Castilian crown', 'Built the Fernandine Walls of Lisbon', 'Passed commercial and agrarian legislation'],
    sections: [
      { title: 'Overview', paragraphs: [
        'Ferdinand I, ninth king of Portugal, was the last ruler of the House of Burgundy that had governed since Afonso I. His reign was dominated by three wars against Castile — the Fernandine Wars — fought over his claim to the Castilian throne after the murder of Peter of Castile, and by his controversial marriage to the Portuguese noblewoman Leonor Teles.',
        'His reign left the kingdom exhausted by war but strengthened by commercial and defensive works, including the great Fernandine Walls of Lisbon. When he died in 1383 leaving only a daughter, Beatrice, married to John I of Castile, the prospect of Portugal passing to the Castilian crown provoked the succession crisis known as the Interregnum of 1383–1385.'
      ]},
      { title: 'Birth and early life', paragraphs: [
        'Ferdinand was born in 1345, the legitimate son and heir of Peter I. He came to the throne in 1367 as the last legitimate male heir of the Burgundian line. When the male line of Castile\'s ruling house was extinguished by the killing of Peter of Castile in 1369, Ferdinand — as a great-grandson of a Castilian king — advanced a claim to the Castilian throne, drawing Portugal into a long and draining rivalry.'
      ]},
      { title: 'Character and Personality', paragraphs: [
        'Ferdinand I is remembered through two contrasting bynames — "the Handsome" (o Formoso) and "the Inconstant" (o Inconstante) — and the second captures the judgement of the chronicler Fernão Lopes, who portrayed a king of shifting purpose and poor political judgement. Lopes presents a ruler repeatedly drawn into wars he could not win, changing alliances between Castile, Aragon, and England, and dominated by his wife Leonor Teles and her favourites.',
        'His marriage to Leonor Teles, whom he took from another husband, scandalised the kingdom and became central to the hostile memory of his reign, as her influence and that of her lover the Count Andeiro were blamed for misgovernment. Yet the same king pursued real and far-sighted policies — encouraging trade, protecting shipping, and fortifying Lisbon. The portrait that survives is of a well-meaning but irresolute ruler whose inconstancy and disputed marriage helped bring the dynasty to its crisis.'
      ]},
      { title: 'The Fernandine Wars and Lisbon', paragraphs: [
        'Ferdinand fought three wars against Castile between 1369 and 1382 to press his claim to the Castilian throne, allying at various times with the Crown of Aragon, Granada, and England. The wars brought Castilian armies into Portugal, including the sack of the outskirts of Lisbon, and ended without securing his claim, leaving the kingdom weakened and its finances strained.',
        'To defend the capital, Ferdinand built the Fernandine Walls, a new and greatly enlarged ring of fortifications around Lisbon that reflected the city\'s growth as a commercial port. He also legislated to encourage agriculture and maritime trade, measures aimed at repairing the economic damage of continual war. His English alliance in the last war foreshadowed the Anglo-Portuguese partnership that his successor would formalise.'
      ]},
      { title: 'Death', paragraphs: [
        'Ferdinand died in 1383 leaving no legitimate son. His only surviving heir was his daughter Beatrice, married to John I of Castile, which raised the immediate prospect that the crown of Portugal would pass to the king of Castile. The regency of the widowed Leonor Teles was widely distrusted, and within months the kingdom slid into the crisis of the Interregnum.'
      ]},
      { title: 'Legacy', paragraphs: [
        'Ferdinand I was the last king of the House of Burgundy, and his reign\'s failures — the fruitless wars, the disputed marriage, and above all his death without a male heir — set the stage for the 1383–1385 Interregnum and the rise of a new dynasty. His Fernandine Walls and commercial legislation, however, marked the growing importance of Lisbon and of maritime trade that would define Portugal\'s future under the House of Aviz.'
      ]}
    ],
    keyAchievements: [
      { title: 'The Fernandine Wars', description: 'Fought three wars with Castile (1369–1382) to claim the Castilian throne, drawing in Aragon and England.' },
      { title: 'The Fernandine Walls of Lisbon', description: 'Built a greatly enlarged ring of fortifications reflecting Lisbon\'s growth as a commercial capital.' },
      { title: 'Commercial and agrarian legislation', description: 'Passed laws to encourage trade and farming and repair the damage of continual war.' }
    ],
    timeline: [
      { date: '1345', title: 'Born', description: 'Born at Coimbra, legitimate heir of Peter I and last male of the House of Burgundy.' },
      { date: '1367', title: 'Becomes King of Portugal', description: 'Succeeds his father Peter I as the ninth Portuguese king.', links: [person('peter-i-of-portugal', 'Peter I of Portugal', 'His father and predecessor')] },
      { date: '1369', title: 'Claims the Castilian throne', description: 'After the killing of Peter of Castile, Ferdinand advances a claim, beginning the Fernandine Wars.', links: [CAST] },
      { date: '1372–1373', title: 'Marriage to Leonor Teles', description: 'Marries the controversial Leonor Teles, whose influence dominates the rest of his reign.' },
      { date: '1373–1375', title: 'Builds the Fernandine Walls', description: 'Fortifies Lisbon with a new enlarged wall as Castilian armies threaten the kingdom.' },
      { date: '1383', title: 'Dies leaving only a daughter', description: 'Dies with heir Beatrice married to the king of Castile, triggering the Interregnum of 1383–1385.', links: [person('john-i-of-portugal', 'John I of Portugal', 'Eventual successor after the Interregnum')] }
    ],
    relatedEntries: {
      locations: [ { ...PT, label: 'His kingdom' }, { ...CAST, label: 'Rival whose throne he claimed in three wars' }, { ...ENGLAND, label: 'Ally in his last war with Castile' } ],
      people: [ person('peter-i-of-portugal', 'Peter I of Portugal', 'His father and predecessor'), person('john-i-of-portugal', 'John I of Portugal', 'Successor after the 1383–1385 Interregnum') ],
      events: []
    },
    sources: [ britannica('Ferdinand I | king of Portugal', 'https://www.britannica.com/biography/Ferdinand-I-king-of-Portugal'), whe('Kingdom of Portugal', 'https://www.worldhistory.org/portugal/') ],
    succession: {
      office: 'King of Portugal',
      predecessor: { personSlug: 'peter-i-of-portugal', displayName: 'Peter I', note: 'His father' },
      successor: { personSlug: 'john-i-of-portugal', displayName: 'John I', note: 'After the 1383–1385 Interregnum: the crown was disputed between Ferdinand\'s daughter Beatrice (and her husband John I of Castile) and John of Aviz, who prevailed in 1385' }
    }
  },

  // ── JOHN I ───────────────────────────────────────────────────────────────────
  {
    id: 'john-i-of-portugal', name: 'John I of Portugal', born: 1357, died: 1433, deathAge: 'about 76',
    causeOfDeath: 'Plague', restingPlace: 'Batalha Monastery',
    aliases: ['João I', 'John of Aviz', 'John of Good Memory', 'João de Boa Memória'],
    titleField: 'King of Portugal', roles: ['King of Portugal', 'Master of the Order of Aviz'],
    summary: 'Tenth king of Portugal and founder of the House of Aviz, who secured independence from Castile at Aljubarrota and opened Portugal\'s overseas expansion at Ceuta.',
    birth: { date: '1357', place: { name: 'Lisbon' }, note: 'Illegitimate son of Peter I; Master of the Order of Aviz before becoming king.' },
    death: { date: '1433', place: { name: 'Lisbon' }, circumstance: 'Died of plague in 1433 after a long reign of nearly fifty years; buried at Batalha, the monastery he founded to commemorate Aljubarrota.' },
    quickFacts: { realm: 'Kingdom of Portugal', dynasty: 'House of Aviz', culture: 'Portuguese', knownFor: 'founding the Aviz dynasty, winning Aljubarrota, the English alliance, and the conquest of Ceuta' },
    greatestFeats: ['Founded the House of Aviz', 'Won the Battle of Aljubarrota (1385), securing independence', 'Treaty of Windsor with England (1386)', 'Conquered Ceuta (1415), opening overseas expansion'],
    sections: [
      { title: 'Overview', paragraphs: [
        'John I, tenth king of Portugal, founded the House of Aviz and saved Portuguese independence at the moment it was most in danger. An illegitimate son of Peter I and Master of the military Order of Aviz, he emerged as leader of the resistance during the 1383–1385 Interregnum, when the death of Ferdinand I threatened to deliver Portugal to the crown of Castile.',
        'His decisive victory at the Battle of Aljubarrota in 1385, won with English archers and the generalship of Nuno Álvares Pereira, secured the throne and the kingdom\'s independence. He sealed a lasting alliance with England, married Philippa of Lancaster, and in 1415 captured Ceuta in North Africa — the traditional starting point of Portuguese overseas expansion. His long reign gave Portugal a new dynasty and a new maritime destiny.'
      ]},
      { title: 'Birth and early life', paragraphs: [
        'John was born in 1357, an illegitimate son of Peter I. As a boy he was made Master of the Order of Aviz, a Portuguese military-religious order, which gave him standing, lands, and a military following without any expectation of the crown. When Ferdinand I died in 1383 leaving only a daughter married to the king of Castile, John\'s position as an adult male of the royal blood and head of a military order made him the natural focus of those who refused Castilian rule.'
      ]},
      { title: 'Character and Personality', paragraphs: [
        'John I is remembered warmly in Portuguese tradition — his byname "of Good Memory" (de Boa Memória) reflects that — and the chronicler Fernão Lopes, who served the dynasty, gave him a full and largely admiring portrait. Lopes presents a shrewd, patient, and pious ruler who rose from an ambiguous birth to found a dynasty, combining personal courage with careful political calculation and a gift for winning loyalty.',
        'His reign shows a ruler who understood how to build legitimacy: he founded the great monastery of Batalha in thanksgiving for Aljubarrota, cultivated the English alliance, and raised a remarkable family — the "Illustrious Generation" of princes, including the future Edward I, Pedro, and Henry the Navigator, whom he educated for war, learning, and exploration. Beneath the good-natured memory was the hard determination of a man who had seized a contested throne and held it against Castile for half a century.'
      ]},
      { title: 'Aljubarrota, England, and Ceuta', paragraphs: [
        'During the Interregnum John was acclaimed defender and then regent of the kingdom, and after the killing of the Count Andeiro and the flight of the queen-regent Leonor Teles, he led the resistance to the Castilian invasion. On 14 August 1385, with a smaller army stiffened by English longbowmen and commanded in the field by the constable Nuno Álvares Pereira, he crushed the Castilian host at the Battle of Aljubarrota. Days later the Cortes of Coimbra acclaimed him King John I.',
        'He consolidated the victory diplomatically. The Treaty of Windsor in 1386 bound Portugal and England in a perpetual alliance — the oldest active alliance in the world — and he married Philippa of Lancaster, daughter of John of Gaunt, tying his new dynasty to the English royal house. In 1415 he led the expedition that captured the Moroccan port of Ceuta, an act traditionally seen as the beginning of Portugal\'s overseas empire and of the Age of Discovery that his son Henry would promote.'
      ]},
      { title: 'Death', paragraphs: [
        'John I died of plague in 1433 after a reign of nearly fifty years, one of the longest in Portuguese history. He was buried in the Monastery of Batalha, which he had founded to commemorate Aljubarrota, and was succeeded by his son Edward, the eldest of the Illustrious Generation.'
      ]},
      { title: 'Legacy', paragraphs: [
        'John I founded the House of Aviz, which would rule Portugal through its greatest age of expansion. By winning Aljubarrota he secured the kingdom\'s independence from Castile for two centuries; by the English alliance he set a lasting axis of Portuguese diplomacy; and by taking Ceuta he opened the overseas expansion that his descendants — above all Henry the Navigator — would carry into the Atlantic and beyond. His reign is the hinge between medieval Portugal and its imperial future.'
      ]}
    ],
    keyAchievements: [
      { title: 'Founded the House of Aviz', description: 'Rose from illegitimate birth and the mastership of a military order to found the dynasty that ruled Portugal\'s golden age.' },
      { title: 'Battle of Aljubarrota, 1385', description: 'Crushed the Castilian invasion with English archers and Nuno Álvares Pereira, securing independence.' },
      { title: 'Treaty of Windsor, 1386', description: 'Bound Portugal and England in the oldest active alliance in the world.' },
      { title: 'Conquest of Ceuta, 1415', description: 'Captured the Moroccan port, traditionally opening Portuguese overseas expansion.' }
    ],
    timeline: [
      { date: '1357', title: 'Born', description: 'Born an illegitimate son of Peter I; later made Master of the Order of Aviz.' },
      { date: '1383', title: 'Leads the resistance to Castile', description: 'On Ferdinand I\'s death, emerges as leader of those opposing the Castilian succession.', links: [person('ferdinand-i-of-portugal', 'Ferdinand I of Portugal', 'The last Burgundy king, whose death began the crisis')] },
      { date: '1385', title: 'Wins Aljubarrota and is acclaimed king', description: 'Defeats the Castilian invasion at Aljubarrota and is acclaimed King John I at the Cortes of Coimbra.', links: [CAST] },
      { date: '1386', title: 'Treaty of Windsor with England', description: 'Concludes a perpetual alliance with England and marries Philippa of Lancaster.', links: [ENGLAND] },
      { date: '1415', title: 'Captures Ceuta', description: 'Leads the conquest of Ceuta in North Africa, opening Portuguese overseas expansion.', links: [ANDALUS] },
      { date: '1433', title: 'Dies of plague', description: 'Dies after nearly fifty years\' reign; buried at Batalha and succeeded by his son Edward.', links: [person('edward-of-portugal', 'Edward of Portugal', 'His son and successor')] }
    ],
    relatedEntries: {
      locations: [ { ...PT, label: 'The kingdom he preserved and ruled' }, { ...CAST, label: 'The invader he defeated at Aljubarrota' }, { ...ENGLAND, label: 'His perpetual ally from 1386' } ],
      people: [ person('ferdinand-i-of-portugal', 'Ferdinand I of Portugal', 'The last Burgundy king; his predecessor as king'), person('edward-of-portugal', 'Edward of Portugal', 'His son and successor') ],
      events: []
    },
    sources: [ britannica('John I | king of Portugal', 'https://www.britannica.com/biography/John-I-king-of-Portugal'), whe('Kingdom of Portugal', 'https://www.worldhistory.org/portugal/') ],
    succession: {
      office: 'King of Portugal',
      note: 'Founder of the House of Aviz; the crown had been contested through the 1383–1385 Interregnum.',
      predecessor: { personSlug: 'ferdinand-i-of-portugal', displayName: 'Ferdinand I', note: 'The last king of the House of Burgundy; John took the throne in 1385 after the Interregnum, defeating the rival Castilian claim' },
      successor: { personSlug: 'edward-of-portugal', displayName: 'Edward (Duarte I)', note: 'His eldest son by Philippa of Lancaster' }
    }
  },

  // ── EDWARD ───────────────────────────────────────────────────────────────────
  {
    id: 'edward-of-portugal', name: 'Edward of Portugal', born: 1391, died: 1438, deathAge: 'about 46',
    causeOfDeath: 'Plague', restingPlace: 'Batalha Monastery',
    aliases: ['Duarte I', 'Edward the Philosopher King', 'Duarte o Eloquente'],
    titleField: 'King of Portugal', roles: ['King of Portugal'],
    summary: 'Eleventh king of Portugal, a scholar-king and author whose short reign was overshadowed by the disaster of the Tangier expedition.',
    birth: { date: '1391', place: { name: 'Viseu' }, note: 'Eldest son of John I and Philippa of Lancaster.' },
    death: { date: '1438', place: { name: 'Tomar' }, circumstance: 'Died of plague in 1438, grief-stricken after the Tangier disaster left his brother Fernando a captive in Morocco; buried at Batalha.' },
    quickFacts: { realm: 'Kingdom of Portugal', dynasty: 'House of Aviz', culture: 'Portuguese', knownFor: 'his writings on ethics and kingship and the failed Tangier expedition' },
    greatestFeats: ['Wrote the Loyal Counsellor and a treatise on horsemanship', 'Reformed inheritance law (the Lei Mental)', 'Reorganised royal legislation'],
    sections: [
      { title: 'Overview', paragraphs: [
        'Edward, eleventh king of Portugal and usually known by the Portuguese form Duarte, was the eldest son of John I and Philippa of Lancaster and one of the most learned monarchs of his age. In a short reign of only five years he pursued legal and administrative reform and wrote works of philosophy and practical instruction that are among the notable royal texts of the Middle Ages.',
        'His reign was overshadowed by a single catastrophe: the failed expedition against Tangier in 1437, in which his younger brother Fernando was captured and left as a hostage in Morocco. The disaster and the agonising question of how to ransom Fernando weighed on Edward until his death from plague in 1438, cutting short a reign of unusual intellectual promise.'
      ]},
      { title: 'Birth and early life', paragraphs: [
        'Edward was born in 1391, the eldest of the "Illustrious Generation" of princes raised by John I and Philippa of Lancaster. Educated for rule alongside his gifted brothers — Pedro, Henry the Navigator, and Fernando — he took an active part in government during his father\'s later years and joined the expedition that captured Ceuta in 1415. By the time he came to the throne in 1433 he was an experienced administrator with strong intellectual interests.'
      ]},
      { title: 'Character and Personality', paragraphs: [
        'Edward is unusual among medieval kings in that his personality can be read directly from his own writings. His book the Leal Conselheiro (The Loyal Counsellor) is a work of moral philosophy and self-examination, reflecting on virtue, emotion, sadness, and the duties of a Christian ruler, while his treatise on horsemanship shows a precise, methodical mind. Together they reveal a thoughtful, conscientious, and introspective king, given to careful reasoning and troubled by the weight of responsibility.',
        'That same conscientiousness became a source of torment. Torn between his duty to ransom his captive brother Fernando — which the Moroccans demanded be paid by surrendering Ceuta — and the counsel that the city must not be given up, Edward agonised without resolution. Contemporaries and later tradition remembered him as sinking into grief and melancholy over the dilemma, a scholar-king whose reflective temperament left him ill-suited to the brutal choice the Tangier disaster forced upon him.'
      ]},
      { title: 'Reform and the Tangier disaster', paragraphs: [
        'As king, Edward worked to reorganise Portuguese law and administration. He is associated with the Lei Mental, a law regulating the inheritance of crown grants to keep them within the male line and prevent the alienation of royal property, and with efforts to compile and rationalise the kingdom\'s legislation. These were the acts of a careful, systematising ruler.',
        'In 1437, against his own doubts and swayed by his brothers Henry and Fernando, Edward authorised an expedition to capture Tangier. It failed disastrously: the Portuguese army was trapped and forced to agree to surrender Ceuta in exchange for withdrawal, leaving Prince Fernando behind as a hostage to guarantee the deal. The Cortes and the king refused to give up Ceuta, and Fernando remained a captive in Morocco, where he died years later — remembered as the "Saint Prince." The failure and its moral burden defined the rest of Edward\'s short reign.'
      ]},
      { title: 'Death', paragraphs: [
        'Edward died of plague in 1438, only five years into his reign and still burdened by the unresolved fate of his captive brother. He left a young son, Afonso V, and a kingdom that would pass into a contested regency; he was buried at Batalha near his father.'
      ]},
      { title: 'Legacy', paragraphs: [
        'Edward is remembered as Portugal\'s philosopher-king, whose writings on ethics and government give a rare direct window into a medieval ruler\'s mind. His reign\'s tragedy — the Tangier disaster and the sacrifice of Prince Fernando — marked the limits of the North African crusading enterprise begun at Ceuta, even as his brother Henry turned Portuguese energies toward Atlantic exploration. His legal reforms, especially the Lei Mental, outlasted his brief rule.'
      ]}
    ],
    keyAchievements: [
      { title: 'The Loyal Counsellor', description: 'Wrote a work of moral philosophy on virtue, emotion, and Christian kingship, a rare royal-authored text.' },
      { title: 'The Lei Mental', description: 'Reformed the inheritance of crown grants to preserve royal property within the male line.' },
      { title: 'Reorganised royal legislation', description: 'Worked to compile and rationalise the laws of the kingdom.' }
    ],
    timeline: [
      { date: '1391', title: 'Born', description: 'Born at Viseu, eldest son of John I and Philippa of Lancaster.' },
      { date: '1415', title: 'Joins the conquest of Ceuta', description: 'Takes part in his father\'s expedition that captures Ceuta.', links: [person('john-i-of-portugal', 'John I of Portugal', 'His father and predecessor')] },
      { date: '1433', title: 'Becomes King of Portugal', description: 'Succeeds his father John I and begins a reign of legal and administrative reform.' },
      { date: 'c. 1437', title: 'Writes the Loyal Counsellor', description: 'Composes his work of moral philosophy on virtue and the duties of a ruler.' },
      { date: '1437', title: 'The Tangier disaster', description: 'Authorises the failed expedition against Tangier; his brother Fernando is left a hostage in Morocco.' },
      { date: '1438', title: 'Dies of plague', description: 'Dies grief-stricken over Fernando\'s captivity, leaving a young son, Afonso V.', links: [person('afonso-v-of-portugal', 'Afonso V of Portugal', 'His son and successor')] }
    ],
    relatedEntries: {
      locations: [ { ...PT, label: 'His kingdom' }, { ...ENGLAND, label: 'His mother Philippa of Lancaster\'s homeland and Portugal\'s ally' } ],
      people: [ person('john-i-of-portugal', 'John I of Portugal', 'His father and predecessor'), person('afonso-v-of-portugal', 'Afonso V of Portugal', 'His son and successor') ],
      events: []
    },
    sources: [ britannica('Edward | king of Portugal', 'https://www.britannica.com/biography/Edward-king-of-Portugal'), whe('Kingdom of Portugal', 'https://www.worldhistory.org/portugal/') ],
    succession: {
      office: 'King of Portugal',
      predecessor: { personSlug: 'john-i-of-portugal', displayName: 'John I', note: 'His father, founder of the House of Aviz' },
      successor: { personSlug: 'afonso-v-of-portugal', displayName: 'Afonso V', note: 'His young son, whose minority began under a contested regency' }
    }
  },

  // ── AFONSO V ─────────────────────────────────────────────────────────────────
  {
    id: 'afonso-v-of-portugal', name: 'Afonso V of Portugal', born: 1432, died: 1481, deathAge: 'about 48',
    causeOfDeath: 'Plague', restingPlace: 'Batalha Monastery',
    aliases: ['Afonso the African', 'Afonso o Africano'],
    titleField: 'King of Portugal', roles: ['King of Portugal'],
    summary: 'Twelfth king of Portugal, "the African" for his Moroccan conquests, whose bid for the Castilian throne ended at the Battle of Toro.',
    birth: { date: '1432', place: { name: 'Sintra' }, note: 'Son of Edward; came to the throne as a child under a contested regency.' },
    death: { date: '1481', place: { name: 'Sintra' }, circumstance: 'Died of plague in 1481, disillusioned after his failed claim to Castile; buried at Batalha.' },
    quickFacts: { realm: 'Kingdom of Portugal', dynasty: 'House of Aviz', culture: 'Portuguese', knownFor: 'his North African conquests and his failed claim to the Castilian throne' },
    greatestFeats: ['Conquered Alcácer Ceguer, Arzila, and Tangier in Morocco', 'Patronised early Atlantic exploration', 'Claimed the Castilian throne (ending at Toro, 1476)'],
    sections: [
      { title: 'Overview', paragraphs: [
        'Afonso V, twelfth king of Portugal, is known as "the African" for the campaigns that made him the great Portuguese conqueror in Morocco, where he captured Alcácer Ceguer, Arzila, and Tangier. His reign continued the North African crusading tradition begun at Ceuta and oversaw the steady advance of Portuguese Atlantic exploration down the African coast.',
        'His most ambitious venture ended in failure: claiming the crown of Castile through marriage to his niece Joanna, he invaded and was defeated at the Battle of Toro in 1476 by Ferdinand and Isabella, and renounced his claim in the Treaty of Alcáçovas in 1479. He died disillusioned in 1481, having won glory in Africa but lost his great gamble in Iberia.'
      ]},
      { title: 'Birth and early life', paragraphs: [
        'Afonso was born in 1432 and became king in 1438 at the age of six, on the death of his father Edward. His long minority was dominated by a struggle over the regency between his mother, Leonor of Aragon, and his uncle Pedro, Duke of Coimbra. Pedro governed as regent for years, but when Afonso came of age, court rivals turned him against his uncle; the conflict ended in 1449 at the Battle of Alfarrobeira, where Pedro was defeated and killed — a violent start to the king\'s personal rule.'
      ]},
      { title: 'Character and Personality', paragraphs: [
        'Afonso V is remembered as a chivalrous and crusading king, drawn more to the glory of arms and the honour-culture of knighthood than to the patient administration favoured by some of his line. His enthusiasm for war against the Muslims of Morocco earned him his byname and genuine military renown, and he cultivated the image of a crusader-king in the older medieval mould even as the world was changing around him.',
        'That chivalric temperament had its costs. His pursuit of the Castilian crown was an act of dynastic ambition and honour that overreached Portugal\'s strength and ended in defeat and humiliation; the sources describe him afterward as despondent, even briefly contemplating abdication and pilgrimage. He was also generous to his nobility, restoring lands and privileges that his more centralising successor would move sharply to reverse. He appears as a brave, honourable, and idealistic ruler whose reach in Iberia exceeded his grasp.'
      ]},
      { title: 'Africa, Castile, and Toro', paragraphs: [
        'From the 1450s Afonso threw Portuguese strength into Morocco. He took Alcácer Ceguer in 1458 and, in a major campaign of 1471, captured Arzila and Tangier, securing a string of Portuguese strongholds on the North African coast and earning the title "the African." Under his reign, too, Portuguese captains pushed exploration further down the West African coast, developing the trade in gold and enslaved people that Henry the Navigator had begun.',
        'His great miscalculation came in Iberia. On the death of Henry IV of Castile, Afonso married his own niece Joanna, whose claim to the Castilian throne was disputed, and invaded Castile to make her queen against the rival claim of Isabella and her husband Ferdinand of Aragon. At the Battle of Toro in 1476 the Portuguese were checked, and the campaign collapsed. By the Treaty of Alcáçovas in 1479 Afonso renounced the Castilian claim, while Castile recognised Portugal\'s rights over most of the Atlantic exploration — a consolation that pointed to the kingdom\'s maritime future.'
      ]},
      { title: 'Death', paragraphs: [
        'Afonso V died of plague in 1481, worn down by the failure of his Castilian venture. He was buried at Batalha and succeeded by his son John II, who had already fought at Toro and who would rule very differently, moving at once to crush the noble power his father had indulged.'
      ]},
      { title: 'Legacy', paragraphs: [
        'Afonso V left Portugal a chain of North African conquests and a strengthened tradition of Atlantic exploration, but also the memory of a failed bid for Castile that exhausted the treasury and empowered a nobility his successor would have to break. His reign stands between the crusading, chivalric world of the earlier Aviz kings and the harder, more centralised and exploratory monarchy of his son John II.'
      ]}
    ],
    keyAchievements: [
      { title: 'North African conquests', description: 'Captured Alcácer Ceguer (1458), Arzila, and Tangier (1471), earning the byname "the African".' },
      { title: 'Patron of Atlantic exploration', description: 'Oversaw the continued Portuguese advance down the West African coast.' },
      { title: 'Claim to the Castilian throne', description: 'Married his niece Joanna and invaded Castile, a bid that ended in defeat at Toro (1476) and renunciation in 1479.' }
    ],
    timeline: [
      { date: '1432', title: 'Born', description: 'Born at Sintra, son of King Edward.' },
      { date: '1438', title: 'Becomes king as a child', description: 'Succeeds his father Edward at age six, beginning a long, contested regency.', links: [person('edward-of-portugal', 'Edward of Portugal', 'His father and predecessor')] },
      { date: '1449', title: 'Battle of Alfarrobeira', description: 'His uncle and former regent Pedro is defeated and killed, marking the violent start of Afonso\'s personal rule.' },
      { date: '1458', title: 'Captures Alcácer Ceguer', description: 'Begins his North African conquests with the taking of Alcácer Ceguer.' },
      { date: '1471', title: 'Captures Arzila and Tangier', description: 'Takes Arzila and Tangier, securing his byname "the African".' },
      { date: '1476', title: 'Defeated at the Battle of Toro', description: 'His bid for the Castilian throne is checked by Ferdinand and Isabella at Toro.', links: [ISABELLA] },
      { date: '1481', title: 'Dies of plague', description: 'Dies disillusioned after renouncing the Castilian claim; his son John II succeeds.', links: [person('john-ii-of-portugal', 'John II of Portugal', 'His son and successor')] }
    ],
    relatedEntries: {
      locations: [ { ...PT, label: 'His kingdom' }, { ...CAST, label: 'The throne he claimed and lost at Toro' } ],
      people: [ person('edward-of-portugal', 'Edward of Portugal', 'His father and predecessor'), person('john-ii-of-portugal', 'John II of Portugal', 'His son and successor'), { ...ISABELLA, label: 'Rival for Castile, victorious at Toro' } ],
      events: []
    },
    sources: [ britannica('Afonso V | king of Portugal', 'https://www.britannica.com/biography/Afonso-V'), whe('Kingdom of Portugal', 'https://www.worldhistory.org/portugal/') ],
    succession: {
      office: 'King of Portugal',
      predecessor: { personSlug: 'edward-of-portugal', displayName: 'Edward (Duarte I)', note: 'His father' },
      successor: { personSlug: 'john-ii-of-portugal', displayName: 'John II', note: 'His son, whom he had made co-king in 1477' }
    }
  },

  // ── JOHN II ──────────────────────────────────────────────────────────────────
  {
    id: 'john-ii-of-portugal', name: 'John II of Portugal', born: 1455, died: 1495, deathAge: 'about 40',
    causeOfDeath: 'Illness (possibly poisoning, disputed)', restingPlace: 'Silves Cathedral, later Batalha Monastery',
    aliases: ['João II', 'the Perfect Prince', 'o Príncipe Perfeito'],
    titleField: 'King of Portugal', roles: ['King of Portugal'],
    summary: 'Thirteenth king of Portugal, who broke the high nobility, drove the search for a sea route to India, and negotiated the Treaty of Tordesillas.',
    birth: { date: '1455', place: { name: 'Lisbon' }, note: 'Son and heir of Afonso V.' },
    death: { date: '1495', place: { name: 'Alvor' }, circumstance: 'Died in 1495, his only legitimate son having died in a riding accident in 1491; succeeded by his cousin Manuel I.' },
    quickFacts: { realm: 'Kingdom of Portugal', dynasty: 'House of Aviz', culture: 'Portuguese', knownFor: 'crushing the great nobility, driving Atlantic exploration, and the Treaty of Tordesillas' },
    greatestFeats: ['Broke the power of the high nobility', 'Sponsored the voyages that rounded the Cape of Good Hope (1488)', 'Negotiated the Treaty of Tordesillas (1494)'],
    sections: [
      { title: 'Overview', paragraphs: [
        'John II, thirteenth king of Portugal, was one of the most formidable rulers of the late medieval Iberian world. Nicknamed "the Perfect Prince," he came to the throne determined to restore royal power after his father Afonso V had lavished lands and privileges on the nobility, and he broke the greatest noble houses with a ruthlessness that made the crown supreme.',
        'He also drove the Portuguese search for a sea route to India with new urgency, sponsoring the voyages of Diogo Cão and of Bartolomeu Dias, who rounded the Cape of Good Hope in 1488, and negotiating the Treaty of Tordesillas with Castile in 1494 to divide the newly explored world. His reign, ending in 1495 with the succession passing to his cousin Manuel, stands at the threshold between medieval Portugal and its imperial age.'
      ]},
      { title: 'Birth and early life', paragraphs: [
        'John was born in 1455, son and heir of Afonso V. He grew up in a court shaped by his father\'s crusading ambitions and by the overmighty nobility that Afonso indulged, and he fought at the Battle of Toro in 1476, where he was credited with holding part of the field even as his father\'s Castilian venture failed. That experience of noble arrogance and royal weakness shaped the hard purpose of his own reign.'
      ]},
      { title: 'Character and Personality', paragraphs: [
        'John II is remembered as a ruler of cold, formidable will — the byname "the Perfect Prince" (o Príncipe Perfeito) reflects a later admiration, associated with the image of the ideal Renaissance ruler, and tradition holds that contemporaries across Iberia regarded him as the model of a strong king. He was intelligent, secretive, and utterly determined to concentrate power in the crown, pursuing that goal with a ruthlessness that his contemporaries both feared and respected.',
        'The decisive proof of his character was his destruction of the great nobles. When he uncovered conspiracies against his centralising policies, he had the powerful Duke of Braganza tried and executed in 1483 and, the following year, personally stabbed to death the Duke of Viseu — his own brother-in-law and cousin — in the royal palace. These were acts of calculated terror as much as justice, and they broke the independent power of the high aristocracy. The same controlling intelligence made him a demanding, methodical patron of exploration, scrutinising every voyage and guarding its secrets as instruments of state.'
      ]},
      { title: 'Crown, sea, and the division of the world', paragraphs: [
        'John II\'s central domestic achievement was the subjugation of the nobility. By executing the Duke of Braganza and killing the Duke of Viseu, confiscating their vast estates, and asserting the crown\'s right to review all noble jurisdictions, he ended the noble dominance his father had allowed and made the monarchy the unchallenged power in Portugal.',
        'Abroad, he pressed the search for a sea route to the riches of the East. He sent Diogo Cão to explore the coast of Africa and the mouth of the Congo, and in 1487–1488 dispatched Bartolomeu Dias, who rounded the southern tip of Africa — the Cape of Good Hope — proving that the Indian Ocean could be reached by sea. When Columbus returned claiming lands in the west for Castile, John II negotiated the Treaty of Tordesillas in 1494, drawing a line dividing the newly explored and unexplored world between Portugal and Castile — a settlement that shaped the future of European empire. He is also remembered for having rejected Columbus\'s own proposal, judging his estimate of the distance to Asia to be wrong.'
      ]},
      { title: 'Death', paragraphs: [
        'John II\'s reign was clouded by the death of his only legitimate son, Afonso, in a riding accident in 1491, which destroyed his hopes of a direct heir. He worked to have an illegitimate son recognised, but failed, and on his own death in 1495 — attributed to illness, though poisoning was rumoured — the crown passed to his cousin and brother-in-law Manuel, Duke of Beja.'
      ]},
      { title: 'Legacy', paragraphs: [
        'John II left the Portuguese monarchy stronger than it had ever been, its nobility broken and its exploration poised on the edge of triumph — the sea route to India, opened by Vasco da Gama a few years after his death, was the direct fruit of the voyages he had driven. The Treaty of Tordesillas he negotiated divided the world between two crowns and shaped centuries of empire. His reign is the culmination of medieval Portuguese kingship and the immediate prelude to the Age of Discovery under his successor Manuel I.'
      ]}
    ],
    keyAchievements: [
      { title: 'Broke the high nobility', description: 'Executed the Duke of Braganza (1483) and killed the Duke of Viseu (1484), making the crown supreme.' },
      { title: 'The Cape of Good Hope, 1488', description: 'Sponsored Bartolomeu Dias\'s voyage rounding the southern tip of Africa, opening the route toward India.' },
      { title: 'Treaty of Tordesillas, 1494', description: 'Negotiated the division of the newly explored world between Portugal and Castile.' }
    ],
    timeline: [
      { date: '1455', title: 'Born', description: 'Born at Lisbon, son and heir of Afonso V.' },
      { date: '1476', title: 'Fights at the Battle of Toro', description: 'Takes part in his father\'s failed Castilian campaign, credited with steadiness on the field.', links: [ISABELLA] },
      { date: '1481', title: 'Becomes King of Portugal', description: 'Succeeds Afonso V and moves at once to restore royal power against the nobility.', links: [person('afonso-v-of-portugal', 'Afonso V of Portugal', 'His father and predecessor')] },
      { date: '1483–1484', title: 'Destroys the great nobles', description: 'Executes the Duke of Braganza and personally kills the Duke of Viseu, breaking aristocratic power.' },
      { date: '1488', title: 'Dias rounds the Cape of Good Hope', description: 'His captain Bartolomeu Dias rounds the southern tip of Africa, opening the sea route toward India.' },
      { date: '1494', title: 'Treaty of Tordesillas', description: 'Negotiates the division of the newly explored world with Castile.', links: [CAST] },
      { date: '1495', title: 'Dies at Alvor', description: 'Dies without a surviving legitimate heir; his cousin Manuel I succeeds and opens Portugal\'s imperial age.' }
    ],
    relatedEntries: {
      locations: [ { ...PT, label: 'The kingdom he made supreme over its nobility' }, { ...CAST, label: 'Partner in the Treaty of Tordesillas, 1494' } ],
      people: [ person('afonso-v-of-portugal', 'Afonso V of Portugal', 'His father and predecessor'), { ...ISABELLA, label: 'Castilian counterpart in the Tordesillas division' } ],
      events: []
    },
    sources: [ britannica('John II | king of Portugal', 'https://www.britannica.com/biography/John-II-king-of-Portugal'), whe('Kingdom of Portugal', 'https://www.worldhistory.org/portugal/') ],
    succession: {
      office: 'King of Portugal',
      predecessor: { personSlug: 'afonso-v-of-portugal', displayName: 'Afonso V', note: 'His father' },
      successor: { displayName: 'Manuel I', note: 'His first cousin and brother-in-law, who succeeded in 1495 after the death of John\'s only legitimate son and opened the Manueline age of overseas empire. Treated here as the endpoint of Portugal\'s medieval monarchy; Manuel I ruled into the early-modern Age of Discovery.' }
    }
  }
]

// ── apply ──────────────────────────────────────────────────────────────────
const existing = new Set(data.characters.map(c => c.id))
let added = 0, replaced = 0
for (const spec of kings) {
  const obj = king(spec)
  const idx = data.characters.findIndex(c => c.id === obj.id)
  if (idx >= 0) { data.characters[idx] = obj; replaced++ }
  else { data.characters.push(obj); added++ }
}

fs.writeFileSync(dataPath, JSON.stringify(data, null, 2))
console.log(`Portuguese kings added: ${added}, replaced: ${replaced}`)
console.log('Total characters now:', data.characters.length)
