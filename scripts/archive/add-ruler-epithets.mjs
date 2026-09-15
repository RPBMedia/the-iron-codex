/**
 * Adds curated historical nicknames/epithets (`epithets` field) to ruler Person
 * articles and normalizes the `deathAge` field. Idempotent upsert semantics:
 * every id listed in EPITHETS gets its `epithets` array set wholesale (re-running
 * produces the same result), and every id in DEATH_AGE_FIXES gets its `deathAge`
 * replaced with the normalized value.
 *
 * Epithet types (see CLAUDE.md "Ruler Nicknames, Epithets, and Age at Death"):
 *   byname | epithet | later epithet | translated byname | hostile epithet |
 *   legendary epithet | posthumous epithet | religious epithet | honorific | uncertain
 *
 * deathAge normalized forms: "N" (exact, non-circa dates only), "about N"
 * (year-level / approximate), "probably over N", or any value containing
 * "unknown" (renders nothing in the UI).
 */
import fs from 'node:fs'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dataPath = path.join(__dirname, '../server/data/history.json')
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'))

const e = (name, type, note) => ({ name, type, ...(note ? { note } : {}) })

// personId -> full epithets array (set wholesale — upsert semantics)
const EPITHETS = {
  // ── Sample set ──
  'edward-i-of-england': [
    e('Longshanks', 'byname', 'Referring to his unusual height.'),
    e('Hammer of the Scots', 'later epithet', 'From the 16th-century inscription on his tomb at Westminster — Scottorum malleus — not contemporary usage.')
  ],
  'richard-the-lionheart': [
    e('the Lionheart', 'translated byname', 'English rendering of the French Cœur de Lion, used in his own lifetime.')
  ],
  'william-the-conqueror': [
    e('the Conqueror', 'later epithet', 'The standard retrospective epithet; contemporaries knew him as William the Bastard.')
  ],
  'alfred-the-great': [
    e('the Great', 'later epithet', "No contemporary source calls him 'the Great'; the epithet was popularised in the 16th century.")
  ],
  'cnut-the-great': [
    e('the Great', 'later epithet', 'From later Scandinavian and English tradition — Old Norse Knútr inn ríki.')
  ],
  'harald-fairhair': [
    e('Fairhair', 'legendary epithet', 'Saga byname (Old Norse Hárfagri); rests on much later saga tradition.')
  ],
  'harald-hardrada': [
    e('Hardrada', 'byname', "Old Norse harðráði — 'hard ruler', 'stern in counsel'; from saga tradition.")
  ],
  'charles-martel': [
    e('the Hammer (Martel)', 'later epithet', 'First attested in ninth-century sources after his death; he ruled as mayor of the palace, never as king.')
  ],

  // ── England, Wessex, Denmark's English world ──
  'aethelred-the-unready': [
    e('the Unready', 'hostile epithet', "Old English Unræd, 'ill-counselled' — a hostile pun on his name coined after his death; not 'unprepared'.")
  ],
  'eric-bloodaxe': [
    e('Bloodaxe', 'legendary epithet', 'Saga byname (Old Norse Blóðøx); rests on later saga tradition.')
  ],
  'sweyn-forkbeard': [e('Forkbeard', 'translated byname')],
  'harald-bluetooth': [
    e('Bluetooth', 'translated byname', 'Danish Blåtand, a later byname of uncertain origin.')
  ],
  'mehmed-ii': [e('the Conqueror (Fatih)', 'translated byname', 'Turkish Fatih.')],
  'valdemar-iv-atterdag': [
    e('Atterdag', 'byname', "Danish byname of debated meaning — traditionally 'day again'/'new dawn'.")
  ],
  'john-balliol': [
    e('Toom Tabard', 'hostile epithet', "Scots for 'empty coat', after his ritual humiliation in 1296.")
  ],
  'pepin-the-short': [e('the Short', 'later epithet')],
  'louis-the-pious': [e('the Pious', 'epithet')],
  'gorm-the-old': [e('the Old', 'later epithet')],
  'edmund-ironside': [e('Ironside', 'byname')],
  'edward-the-confessor': [e('the Confessor', 'religious epithet')],
  'edward-the-martyr': [e('the Martyr', 'religious epithet')],
  'edgar-the-peaceful': [e('the Peaceful', 'epithet')],
  'eadwig-of-england': [e('All-Fair', 'later epithet')],
  'harold-harefoot': [e('Harefoot', 'byname')],
  'william-ii-of-england': [
    e('Rufus', 'byname', 'Contemporary byname, probably from his ruddy complexion.')
  ],
  'henry-i-of-england': [e('Beauclerc', 'later epithet')],
  'john-of-england': [
    e('Lackland', 'hostile epithet', 'Contemporary — coined for the landless youngest son of Henry II.')
  ],
  'edward-the-elder': [e('the Elder', 'later epithet')],
  'aethelstan': [e('the Glorious', 'later epithet')],
  'cnut-iv-of-denmark': [e('the Holy', 'religious epithet')],
  'louis-ix-of-france': [e('Saint Louis', 'religious epithet')],
  'eric-ix-of-sweden': [e('Saint Erik', 'religious epithet')],
  'olaf-ii-haraldsson': [e('Saint Olaf', 'religious epithet')],

  // ── Contested dual pairs ──
  'peter-of-castile': [
    e('the Cruel', 'hostile epithet', 'From victorious Trastámara propaganda.'),
    e('the Just', 'epithet', 'El Justiciero — the name his supporters used.')
  ],
  'peter-i-of-portugal': [
    e('the Just', 'epithet'),
    e('the Cruel', 'hostile epithet', "Portuguese tradition split along partisan lines between 'the Just' and 'the Cruel'.")
  ],
  'charles-vi-of-france': [
    e('the Beloved', 'epithet', 'Contemporary usage.'),
    e('the Mad', 'later epithet', 'Later epithet referring to his recurring illness.')
  ],
  'ferdinand-i-of-portugal': [
    e('the Handsome', 'epithet'),
    e('the Inconstant', 'hostile epithet')
  ],

  // ── France ──
  'philip-ii-of-france': [e('Augustus', 'epithet', 'Coined by his chronicler Rigord.')],
  'louis-vi-of-france': [e('the Fat', 'byname')],
  'louis-viii-of-france': [e('the Lion', 'epithet')],
  'philip-iii-of-france': [e('the Bold', 'epithet')],
  'philip-iv-of-france': [e('the Fair', 'byname', 'Le Bel — from his appearance, not his justice.')],
  'louis-x-of-france': [e('the Quarrelsome', 'hostile epithet')],
  'philip-v-of-france': [e('the Tall', 'byname')],
  'charles-iv-of-france': [e('the Fair', 'byname')],
  'charles-v-of-france': [e('the Wise', 'epithet')],
  'charles-vii-of-france': [
    e('the Victorious', 'epithet'),
    e('the Well-Served', 'epithet')
  ],
  'louis-v-of-france': [
    e('the Do-Nothing', 'hostile epithet', 'Le Fainéant — a later hostile label for his brief, powerless reign.')
  ],
  'robert-ii-of-france': [e('the Pious', 'epithet')],
  'philip-i-of-france': [e('the Amorous', 'later epithet')],
  'john-ii-of-france': [
    e('the Good', 'translated byname', "Le Bon — closer to 'brave' than 'good'.")
  ],

  // ── Empire ──
  'frederick-i-barbarossa': [
    e('Barbarossa', 'translated byname', "'Redbeard' — the Italian byname from his campaigns in Lombardy.")
  ],
  'frederick-ii-holy-roman-emperor': [
    e('Stupor Mundi', 'later epithet', "'Wonder of the World' — later admiring Latin epithet.")
  ],
  'charlemagne': [
    e('the Great', 'epithet', 'Carolus Magnus — the epithet fused into his very name.')
  ],

  // ── Scandinavia ──
  'magnus-the-good': [e('the Good', 'epithet')],
  'haakon-the-good': [e('the Good', 'epithet')],
  'magnus-barefoot': [
    e('Barefoot', 'translated byname', 'Old Norse berfœttr; saga tradition links it to his adopting Gaelic dress.')
  ],
  'magnus-vi-lawmender': [
    e('Lawmender', 'translated byname', 'Norwegian Lagabøte, from his law reforms.')
  ],
  'olaf-iii-of-norway': [e('Kyrre', 'byname', "'The Peaceful' — Old Norse kyrre.")],
  'harald-greycloak': [
    e('Greycloak', 'translated byname', 'Old Norse Gráfeldr; from saga tradition.')
  ],
  'jarl-hakon-sigurdsson': [
    e('the Powerful', 'epithet', 'Old Norse inn ríki; from saga tradition.')
  ],
  'eric-the-victorious': [
    e('the Victorious', 'legendary epithet', 'Swedish Segersäll, from later saga tradition.')
  ],
  'olof-skotkonung': [
    e('Skötkonung', 'byname', 'Byname of uncertain meaning; left untranslated.')
  ],
  'emund-the-old': [e('the Old', 'byname')],
  'eric-xi-eriksson': [e('the Lisp and Lame', 'later epithet')],
  'magnus-iii-of-sweden': [
    e('Ladulås', 'byname', "'Barnlock' — traditionally from protecting peasants against lodging demands.")
  ],
  'valdemar-i-of-denmark': [e('the Great', 'epithet')],
  'valdemar-ii-of-denmark': [e('the Victorious', 'translated byname', 'Danish Sejr.')],
  'eric-iv-of-denmark': [e('Ploughpenny', 'hostile epithet', 'From his unpopular plough tax.')],
  'eric-v-of-denmark': [e('Klipping', 'byname', 'From the clipped coinage of his reign.')],
  'eric-vi-of-denmark': [e('Menved', 'byname')],
  'eric-i-of-denmark': [e('Evergood', 'epithet')],
  'eric-ii-of-denmark': [e('Emune', 'byname', "'The Memorable'.")],
  'eric-iii-of-denmark': [e('Lamb', 'byname')],
  'harald-iii-of-denmark': [e('Hen', 'byname', "Meaning debated — possibly 'whetstone'.")],
  'oluf-i-of-denmark': [e('Hunger', 'hostile epithet', 'From the famines of his reign.')],
  'sweyn-iii-of-denmark': [
    e('Grathe', 'posthumous epithet', 'From Grathe Heath, where he was defeated and killed.')
  ],
  'haakon-iv-haakonsson': [e('the Old', 'byname')],
  'sigurd-of-norway': [
    e('the Crusader', 'translated byname', "Old Norse Jórsalafari, 'Jerusalem-farer'.")
  ],

  // ── Iberia ──
  'afonso-i-of-portugal': [
    e('the Conqueror', 'epithet', 'O Conquistador — from his conquests from Ourique to Lisbon.')
  ],
  'sancho-i-of-portugal': [e('the Populator', 'translated byname', 'Portuguese O Povoador.')],
  'afonso-ii-of-portugal': [e('the Fat', 'byname')],
  'sancho-ii-of-portugal': [
    e('the Pious', 'epithet'),
    e('Capelo', 'byname', "'The Hooded'.")
  ],
  'afonso-iii-of-portugal': [
    e('the Boulonnais', 'byname', 'From his time as count of Boulogne.')
  ],
  'denis-of-portugal': [
    e('the Farmer King', 'epithet'),
    e('the Poet King', 'epithet')
  ],
  'afonso-iv-of-portugal': [e('the Brave', 'epithet')],
  'afonso-v-of-portugal': [e('the African', 'later epithet', 'From his Moroccan campaigns.')],
  'edward-of-portugal': [e('the Eloquent', 'epithet')],
  'john-ii-of-portugal': [e('the Perfect Prince', 'later epithet')],
  'john-i-of-portugal': [e('of Good Memory', 'posthumous epithet')],
  'alfonso-viii-of-castile': [e('the Noble', 'epithet')],
  'sancho-iii-of-castile': [e('the Desired', 'epithet')],
  'alfonso-xi-of-castile': [e('the Avenger', 'epithet')],
  'henry-ii-of-castile': [
    e('of the Mercies', 'epithet', 'From his lavish grants to supporters.')
  ],
  'henry-iii-of-castile': [
    e('the Sufferer', 'byname', 'El Doliente — from his chronic ill health.')
  ],

  // ── East and Southeast ──
  'bayezid-i': [e('the Thunderbolt', 'translated byname', 'Turkish Yıldırım — contemporary.')],
  'bayezid-ii': [e('the Just', 'translated byname')],
  'michael-vii-doukas': [
    e('Parapinakes', 'hostile epithet', "'Minus a quarter' — from the currency debasement famine of his reign.")
  ],
  'john-ii-komnenos': [e('the Good', 'translated byname', 'Greek Kaloïōannēs.')],
  'baldwin-iv-of-jerusalem': [e('the Leper', 'byname')],
  'baldwin-v-of-jerusalem': [e('the Child', 'byname')],
  'louis-i-of-hungary': [e('the Great', 'epithet')],
  'vytautas': [e('the Great', 'later epithet')],
  'stefan-lazarevic': [e('the Tall', 'byname')],
  'wladyslaw-iii-of-poland': [
    e('of Varna', 'posthumous epithet', 'Polish Warneńczyk — from the battle where he fell.')
  ],
  'oleg-of-novgorod': [
    e('the Wise', 'legendary epithet', "The Primary Chronicle's veshchy, 'the seer'; chronicle tradition, not documented fact.")
  ],
  'olga-of-kiev': [
    e('the Wise', 'legendary epithet', 'Chronicle epithet from later Rus\' tradition, not contemporary usage.')
  ],
  'al-adil-i': [
    e('Saphadin', 'translated byname', 'The Frankish rendering of his honorific Sayf al-Din.')
  ],
  // Edward the Black Prince is isRuler:true in this archive (Prince of Aquitaine),
  // so he is in scope for the epithets pass.
  'edward-the-black-prince': [
    e('the Black Prince', 'posthumous epithet', 'First recorded in the 16th century; contemporaries knew him as Edward of Woodstock.')
  ]
}

// Deliberately NO epithets (documented skips — family names, dynasty names,
// titles, honorifics, or too thinly attested):
//   robert-the-bruce ("the Bruce" = family name de Brus), constantine-xi-palaiologos
//   (dynasty name), guthrum ("the Old" too thinly attested), godfrey-of-bouillon
//   ("Advocate of the Holy Sepulchre" is a title), osman-i / orhan / murad-i
//   (Gazi / Hudavendigar = honorific titles), hugh-capet (byname-turned-dynasty),
//   charles-viii-of-sweden (Bonde = family name), wladyslaw-ii-jagiello (Jagiełło =
//   Lithuanian name/dynasty), saladin (Salah ad-Din is his name), alp-arslan
//   (adopted name), mehmed-i ("the Restorer" — medium confidence), manuel-i-komnenos
//   ("the Great" — medium confidence), batu-khan ("Sain Khan" — medium confidence),
//   erik-knutsson (low confidence), plus all rulers with no historically
//   established nickname.

// personId -> normalized deathAge value.
// Categories: false-precision -> "about N"; format normalization ("c. N" ->
// "about N"); audit-approved missing values. All other "unknown" values stay
// as-is (documented ~70-ruler review backlog; never blanket-computed from the
// pseudo-precise numeric `born` field).
const DEATH_AGE_FIXES = {
  // False precision (circa birth dates) -> "about N"
  'charles-martel': 'about 53',
  'sigurd-of-norway': 'about 40',
  'harold-godwinson': 'about 44',
  'romanos-iv-diogenes': 'about 42',
  'prince-lazar': 'about 60',
  'murad-i': 'about 63',
  'wladyslaw-ii-jagiello': 'about 82',
  'vytautas': 'about 80',
  'henry-iv-of-england': 'about 45',
  'charles-d-albret': 'about 47',
  'tostig-godwinson': 'about 40',
  'ulrich-von-jungingen': 'about 50',
  // Format normalization: "c. N" -> "about N"
  'edward-the-confessor': 'about 62',
  'john-comyn': 'about 32',
  // Chronicle-tradition ages: caveat moves into death.note (see below)
  'igor-of-kiev': 'about 68',
  'olga-of-kiev': 'about 79',
  // Audit-approved missing values ONLY
  'harald-hardrada': 'about 51',
  'frederick-ii-holy-roman-emperor': '55', // day-level dates: 26 Dec 1194 – 13 Dec 1250
  'louis-ix-of-france': 'about 56',
  'harthacnut': 'about 24',
  'valdemar-i-of-denmark': 'about 51',
  'haakon-iv-haakonsson': 'about 59',
  'baldwin-iv-of-jerusalem': 'about 24',
  'jacques-de-molay': 'about 70'
}

// The parenthetical caveat stripped from igor/olga deathAge must survive
// user-visibly: it moves into death.note (rendered on the Died card).
const CHRONICLE_AGE_NOTE = {
  'igor-of-kiev': "Age at death follows the Primary Chronicle's traditional chronology, which is uncertain.",
  'olga-of-kiev': "Age at death follows the Primary Chronicle's traditional chronology, which is uncertain."
}

const byId = new Map(data.characters.map((c) => [c.id, c]))
let epithetPeople = 0
let epithetEntries = 0
let ageFixes = 0
const missing = []

for (const [id, epithets] of Object.entries(EPITHETS)) {
  const person = byId.get(id)
  if (!person) { missing.push(`epithets: ${id}`); continue }
  person.epithets = epithets
  epithetPeople++
  epithetEntries += epithets.length
}

for (const [id, value] of Object.entries(DEATH_AGE_FIXES)) {
  const person = byId.get(id)
  if (!person) { missing.push(`deathAge: ${id}`); continue }
  if (person.deathAge !== value) ageFixes++
  person.deathAge = value
}

for (const [id, note] of Object.entries(CHRONICLE_AGE_NOTE)) {
  const person = byId.get(id)
  if (!person || !person.death) { missing.push(`death.note: ${id}`); continue }
  const existing = String(person.death.note ?? '').trim()
  if (/traditional chronology|chronicle.{0,20}chronology/i.test(existing)) continue // already carried
  person.death.note = existing ? `${existing} ${note}` : note
}

if (missing.length) {
  console.error('Unresolved ids (nothing written):')
  missing.forEach((m) => console.error('  - ' + m))
  process.exit(1)
}

fs.writeFileSync(dataPath, JSON.stringify(data, null, 2) + '\n')
console.log(`Epithets set on ${epithetPeople} people (${epithetEntries} epithet entries).`)
console.log(`deathAge values changed this run: ${ageFixes} (idempotent; total curated fixes: ${Object.keys(DEATH_AGE_FIXES).length}).`)
