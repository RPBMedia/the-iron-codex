/**
 * Adds per-side army-size / estimated-strength data to every Battle/Siege article
 * (and the siege-style Fall of Constantinople). Medieval numbers are uncertain:
 * estimates use ranges, distinguish chronicle claims from modern estimates, and
 * say "Unknown" with a reason where no credible figure exists.
 * Also completes four battles whose `participants` were single-sided or empty.
 */
import fs from 'node:fs'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dataPath = path.join(__dirname, '../server/data/history.json')
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'))

const s = (display, confidence, note, extra = {}) => ({ display, confidence, ...(note ? { note } : {}), ...extra })

// battleId -> { exact side name -> strength }
const STRENGTH = {
  'battle-of-tours': {
    'Frankish forces': s('Unknown; perhaps 15,000–30,000', 'debated', 'No reliable figures survive; the chronicle numbers are fantastical and modern estimates are speculative.'),
    'Umayyad forces from al-Andalus': s('Unknown; a large raiding army, not the vast host of legend', 'debated', 'Arabic and Latin sources give no usable totals; the force was probably far smaller than later tradition claimed.')
  },
  'battle-of-hastings': {
    'Norman army': s('c. 7,000–8,000', 'estimated', 'Reconstructed from later sources and battlefield logistics rather than records; the exact size is uncertain.'),
    'English army': s('c. 7,000–8,000', 'debated', 'Debated; the two armies were probably roughly matched, so William did not win through simple numerical superiority.')
  },
  'battle-of-agincourt': {
    'English army': s('c. 6,000–9,000', 'estimated', 'Depleted and exhausted after the siege of Harfleur and a long march.', { min: 6000, max: 9000 }),
    'French army': s('c. 12,000–25,000', 'debated', 'Modern estimates vary widely; medieval accounts exaggerate the French advantage, but the English were significantly outnumbered.', { min: 12000, max: 25000 })
  },
  'battle-of-manzikert': {
    'Byzantine army': s('Unknown; perhaps 20,000–40,000', 'debated', 'Figures are debated; much of the army did not engage or defected, which mattered more than the raw total.'),
    'Seljuk army': s('Unknown; perhaps 20,000–30,000', 'debated', 'A mobile, largely mounted force; exact numbers are not recoverable from the sources.')
  },
  'battle-of-stamford-bridge': {
    'English army': s('Unknown; likely several thousand', 'debated', 'Harold Godwinson force-marched a substantial army north; the sources do not allow a confident total.'),
    'Norwegian invasion force': s('Unknown; likely several thousand', 'debated', 'A large part of the Norwegian force was caught away from the ships without armour; exact numbers are uncertain.')
  },
  'battle-of-bouvines': {
    'French royal army': s('c. 7,000–9,000', 'estimated', 'The two hosts were roughly matched in size; the battle turned on cohesion, not numbers.'),
    'Coalition army': s('c. 8,000–9,000', 'estimated', 'The imperial-Flemish-English coalition was similar in size to Philip II\'s army; figures are estimates.')
  },
  'battle-of-legnano': {
    'Lombard League': s('Unknown; several thousand, mostly communal militia and cavalry', 'debated', 'The league fielded the larger force, including the Milanese militia and the Company of Death; totals are not recorded.'),
    'Imperial army': s('Unknown; a smaller cavalry force, perhaps a few thousand', 'debated', 'Frederick I Barbarossa fought with a limited body of knights, having outrun his main strength.')
  },
  'battle-of-las-navas-de-tolosa': {
    'Iberian Christian coalition': s('c. 12,000–20,000', 'debated', 'The allied army of Castile, Aragon, and Navarre; modern estimates, not chronicle figures.'),
    'Almohad army': s('Chronicle claims are fantastical (100,000+); modern estimates far lower', 'chronicle-claim', 'The Almohad host was larger than the Christian army, but the enormous medieval totals are not credible; modern estimates run to perhaps 20,000–30,000.')
  },
  'battle-of-bannockburn': {
    'Scottish army': s('c. 5,000–8,000', 'estimated', 'Robert the Bruce\'s smaller army fought from prepared, boggy ground that neutralised English numbers.'),
    'English army': s('c. 15,000–20,000 (debated)', 'debated', 'The English were the larger force, but medieval claims are inflated and modern estimates vary.')
  },
  'battle-of-crecy': {
    'English army': s('c. 7,000–15,000', 'estimated', 'Built around massed longbowmen and dismounted men-at-arms in a strong defensive position.', { min: 7000, max: 15000 }),
    'French army': s('c. 20,000–30,000 (debated)', 'debated', 'The French army was larger, but some chronicle numbers are likely inflated; modern estimates vary widely.', { min: 20000, max: 30000 })
  },
  'battle-of-poitiers': {
    'Anglo-Gascon army': s('c. 6,000–10,000', 'estimated', 'Edward the Black Prince\'s outnumbered force fought a defensive action from broken, hedged ground.'),
    'French army': s('c. 11,000–16,000 (debated)', 'debated', 'Larger than the Anglo-Gascon force; exact figures are disputed and chronicle numbers unreliable.')
  },
  'battle-of-kosovo': {
    'Serbian-led Balkan coalition': s('Unknown; perhaps 12,000–25,000', 'debated', 'The coalition under Prince Lazar was smaller than the Ottoman army; no reliable totals survive.'),
    'Ottoman army': s('Unknown; perhaps 27,000–40,000', 'debated', 'Larger than the Balkan coalition; figures are modern estimates, as the sources give none reliable.')
  },
  'battle-of-grunwald': {
    'Polish-Lithuanian army': s('c. 20,000–30,000 (debated)', 'debated', 'One of the largest battles of medieval Europe; the allied army was the larger, but all totals are heavily debated.'),
    'Teutonic Order army': s('c. 15,000–20,000 (debated)', 'debated', 'The order\'s army was smaller and was destroyed; medieval figures are inflated and modern estimates vary.')
  },
  'siege-of-rouen': {
    'English army': s('Unknown; a substantial besieging army under Henry V', 'estimated', 'Large enough to blockade Normandy\'s capital through a six-month siege; no exact figure is recorded.'),
    'Rouen garrison and citizens': s('Garrison of a few thousand; a large civilian population swollen by refugees', 'debated', 'The defence collapsed through starvation rather than assault; the number of non-combatants who died is uncertain but very high.')
  },
  'battle-of-verneuil': {
    'English army': s('c. 8,000–9,000', 'estimated', 'The English won a hard defensive victory sometimes called "a second Agincourt".'),
    'Franco-Scottish army': s('c. 14,000–16,000 (debated)', 'debated', 'The larger Franco-Scottish army was shattered; the Scottish contingent was almost annihilated. Figures are estimates.')
  },
  'siege-of-orleans': {
    'French garrison and relief force': s('A garrison of a few thousand, reinforced by Joan of Arc\'s relief force', 'estimated', 'The defenders and relief troops together outnumbered the thin English siege lines by the time the siege was lifted.'),
    'English army': s('c. 4,000–5,000', 'estimated', 'Too few to fully invest the city, the English held a ring of forts that could be broken piecemeal.')
  },
  'battle-of-patay': {
    'French army': s('Several thousand; a fast-moving vanguard led the attack', 'estimated', 'A French cavalry vanguard caught the English before they could complete their defensive position.'),
    'English army': s('c. 3,000–5,000', 'estimated', 'The English field army was destroyed before its archers could deploy their stakes; exact numbers are uncertain.')
  },
  'battle-of-formigny': {
    'French royal army': s('c. 3,000–5,000 (reinforced during the battle)', 'estimated', 'A Breton force arriving on the flank turned the battle; the French were roughly matched with, then outnumbered, the English.'),
    'English army': s('c. 4,000', 'estimated', 'One of the last English field armies in Normandy; it was largely destroyed. Figures are estimates.')
  },
  'battle-of-castillon': {
    'French royal army': s('c. 7,000–10,000, with a strong artillery park', 'estimated', 'The French fought from a fortified artillery camp whose guns broke the English assault.'),
    'Anglo-Gascon army': s('c. 5,000–6,000 under John Talbot', 'estimated', 'Talbot attacked the entrenched French camp and was killed; the defeat ended the Hundred Years\' War. Figures are estimates.')
  },
  'battle-of-aljubarrota': {
    'Portuguese army': s('c. 6,000–7,000', 'estimated', 'The smaller Portuguese army, stiffened by English longbowmen, fought from a prepared defensive hill.', { min: 6000, max: 7000 }),
    'Castilian army': s('c. 20,000–30,000 (debated)', 'debated', 'Numbers vary by source; the key point is the Castilian numerical advantage, which the terrain neutralised.', { min: 20000, max: 30000 })
  },
  'battle-of-hattin': {
    'Ayyubid army': s('c. 30,000–40,000 (debated)', 'debated', 'Saladin fielded the larger army and controlled the water sources, which decided the battle as much as numbers.'),
    'Crusader army': s('c. 15,000–20,000, including perhaps 1,200 knights', 'estimated', 'Nearly the whole field strength of the Kingdom of Jerusalem, destroyed in a single day.')
  },
  'battle-of-arsuf': {
    'Crusader army': s('c. 20,000 (debated)', 'debated', 'Richard the Lionheart held a disciplined column on the march; exact figures are uncertain.'),
    'Ayyubid army': s('Larger than the crusader force; figures uncertain', 'debated', 'Saladin\'s mobile army relied on harassment and numbers, but no reliable total survives.')
  },
  'fall-of-constantinople': {
    'Ottoman besiegers': s('c. 50,000–80,000 (chronicle claims up to 200,000+ are inflated)', 'chronicle-claim', 'A very large besieging army with heavy cannon; the highest medieval figures are exaggerated, but the Ottomans hugely outnumbered the defenders.'),
    'Byzantine defenders': s('c. 7,000–10,000, including a small foreign contingent', 'estimated', 'A tiny garrison, including Genoese and Venetian volunteers, defending walls far too long for its numbers.')
  }
}

// Battles whose participants were single-sided or empty — rebuilt with both sides.
const p = (name, type, slug) => ({ name, title: name, type, ...(slug ? { slug } : {}) })
const REBUILD = {
  'battle-of-svolder': [
    { side: "Olaf Tryggvason's fleet", factions: [p('Kingdom of Norway', 'location', 'kingdom-of-norway')], leaders: [p('Olaf Tryggvason', 'person', 'olaf-tryggvason')],
      strength: s('A small fleet — saga tradition gives 11 ships, led by the Long Serpent', 'chronicle-claim', 'Saga ship-counts are traditional, not documentary; Olaf was heavily outnumbered and his fleet destroyed.') },
    { side: 'Allied coalition fleet', factions: [p('Kingdom of Denmark', 'location', 'kingdom-of-denmark'), p('Kingdom of Sweden', 'location', 'kingdom-of-sweden')], leaders: [p('Sweyn Forkbeard', 'person', 'sweyn-forkbeard'), p('Olof Skötkonung', 'person', 'olof-skotkonung'), p('Eric Hákonarson')],
      strength: s('A much larger fleet — saga tradition gives many dozens of ships', 'chronicle-claim', 'The Danish–Swedish–Norwegian coalition vastly outnumbered Olaf; precise numbers belong to saga tradition.') }
  ],
  'battle-of-stiklestad': [
    { side: "Olaf II Haraldsson's supporters", factions: [p('Kingdom of Norway', 'location', 'kingdom-of-norway')], leaders: [p('Olaf II Haraldsson', 'person', 'olaf-ii-haraldsson')],
      strength: s('Unknown; a modest force, perhaps a few thousand', 'debated', 'Olaf returned from exile with a small army; no reliable figures survive.') },
    { side: 'Peasant and magnate army', factions: [p('Kingdom of Norway', 'location', 'kingdom-of-norway')], leaders: [],
      strength: s('Unknown; larger than Olaf\'s force per saga tradition', 'debated', 'The army of Norwegian farmers and magnates opposed to Olaf, aligned with Cnut the Great, had no single royal commander.') }
  ],
  'battle-of-gestilren': [
    { side: 'Erik line', factions: [p('Kingdom of Sweden', 'location', 'kingdom-of-sweden')], leaders: [p('Erik Knutsson', 'person', 'erik-knutsson')],
      strength: s('Unknown; no reliable figures survive', 'unknown', 'This early-13th-century Swedish dynastic battle is barely documented; no army sizes are recorded.') },
    { side: 'Sverker line', factions: [p('Kingdom of Sweden', 'location', 'kingdom-of-sweden')], leaders: [p('Sverker II of Sweden', 'person', 'sverker-ii-of-sweden')],
      strength: s('Unknown; no reliable figures survive', 'unknown', 'Sverker II was killed here; the sources give no usable numbers for either side.') }
  ],
  'battle-of-fulford': [
    { side: 'Norwegian invasion force', factions: [p('Kingdom of Norway', 'location', 'kingdom-of-norway')], leaders: [p('Harald Hardrada', 'person', 'harald-hardrada'), p('Tostig Godwinson', 'person', 'tostig-godwinson')],
      strength: s('Unknown; likely several thousand', 'debated', 'Part of the large invasion fleet that Harald Hardrada led to Yorkshire in 1066.') },
    { side: 'Northern English army', factions: [p('Kingdom of England', 'location', 'kingdom-of-england')], leaders: [p('Edwin of Mercia'), p('Morcar of Northumbria')],
      strength: s('Unknown; likely several thousand', 'debated', 'The levies of the northern earls Edwin and Morcar, defeated before Harold Godwinson could arrive.') }
  ]
}

let strengthSides = 0
let rebuilt = 0
const missingSides = []

for (const e of data.events) {
  if (REBUILD[e.id]) {
    e.participants = REBUILD[e.id]
    rebuilt++
    strengthSides += e.participants.length
    continue
  }
  const map = STRENGTH[e.id]
  if (!map) continue
  const seen = new Set()
  for (const part of e.participants || []) {
    const st = map[part.side]
    if (st) { part.strength = st; strengthSides++; seen.add(part.side) }
  }
  for (const side of Object.keys(map)) if (!seen.has(side)) missingSides.push(`${e.id} :: side "${side}" not found in participants`)
}

fs.writeFileSync(dataPath, JSON.stringify(data, null, 2))
console.log(`Strength added to ${strengthSides} sides; ${rebuilt} battles rebuilt.`)
if (missingSides.length) { console.log('SIDE NAME MISMATCHES:'); missingSides.forEach(m => console.log('  ' + m)) }

// Report coverage: every Battle/Siege side must have strength
const gaps = []
for (const e of data.events) {
  if (!['Battle', 'Siege'].includes(e.eventType) && e.id !== 'fall-of-constantinople') continue
  for (const part of e.participants || []) if (!part.strength?.display) gaps.push(`${e.id} :: ${part.side}`)
  if (!(e.participants || []).length) gaps.push(`${e.id} :: NO participants`)
}
console.log(`\nCoverage gaps (${gaps.length}):`)
gaps.forEach(g => console.log('  ' + g))
