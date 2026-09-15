// One-time migration: add curated battleContinuity links to every Battle article.
// Selection follows the priority order documented in CLAUDE.md ("Battle Continuity Links"):
// same war > same campaign/crisis > same region+timeframe > shared factions > tactical comparison > nearest relevant.
import fs from 'node:fs'

const dataPath = new URL('../server/data/history.json', import.meta.url)
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'))

const continuity = {
  'battle-of-tours': {
    label: 'Another clash on the Christian–Muslim frontier',
    battleSlug: 'battle-of-las-navas-de-tolosa',
    relationship: 'tactical-comparison',
    reason: "Charles Martel's victory near Tours halted the northward reach of Umayyad al-Andalus; at Las Navas de Tolosa in 1212, a coalition of Iberian Christian kings broke Almohad power in the same peninsula where that expansion began."
  },
  'battle-of-hastings': {
    label: 'Where Norman kingship led England',
    battleSlug: 'battle-of-bouvines',
    relationship: 'same-factions',
    reason: "Hastings bound England's crown to lands and claims in France; at Bouvines in 1214 that entanglement collapsed, when Philip II of France crushed the coalition backing King John and confirmed the loss of the Angevin lands."
  },
  'battle-of-agincourt': {
    label: 'The battle Agincourt repeated',
    battleSlug: 'battle-of-crecy',
    relationship: 'same-war',
    reason: "Henry V's victory at Agincourt reused the formula proven at Crécy nearly seventy years earlier — dismounted men-at-arms and massed longbowmen breaking French attacks in the same Hundred Years' War."
  },
  'battle-of-manzikert': {
    label: 'The Turkish advance continues',
    battleSlug: 'battle-of-kosovo',
    relationship: 'chronological-follow-up',
    reason: "Manzikert opened Anatolia to Turkish power after the capture of Emperor Romanos IV; three centuries later at Kosovo, the Ottoman heirs of that advance fought the Serbian-led coalition in a battle that shaped Balkan resistance and memory."
  },
  'battle-of-stamford-bridge': {
    label: 'Follow the crisis of 1066',
    battleSlug: 'battle-of-hastings',
    relationship: 'same-crisis',
    reason: "Stamford Bridge ended Harald Hardrada's invasion, but Harold Godwinson immediately had to march south to face William of Normandy at Hastings, where the same succession crisis was decided within three weeks."
  },
  'battle-of-bouvines': {
    label: 'The next great Anglo-French clash',
    battleSlug: 'battle-of-crecy',
    relationship: 'same-factions',
    reason: "Bouvines confirmed Capetian dominance over England's continental claims; when the dynastic quarrel reignited as the Hundred Years' War, Crécy in 1346 opened the next great round of Anglo-French battle."
  },
  'battle-of-legnano': {
    label: "The Empire's next great defeat",
    battleSlug: 'battle-of-bouvines',
    relationship: 'same-factions',
    reason: "Legnano broke Frederick Barbarossa's campaign against the Lombard League; at Bouvines a generation later the imperial cause failed again, when Otto IV fell alongside the coalition defeated by Philip II of France."
  },
  'battle-of-las-navas-de-tolosa': {
    label: "Where al-Andalus's expansion was first checked",
    battleSlug: 'battle-of-tours',
    relationship: 'tactical-comparison',
    reason: "Las Navas de Tolosa broke Almohad power in Iberia; nearly five centuries earlier, Charles Martel's Franks had halted the northward reach of Umayyad al-Andalus near Tours — two battles that bracket the rise and turning of Muslim power based in the peninsula."
  },
  'battle-of-bannockburn': {
    label: "England's tactical lessons applied",
    battleSlug: 'battle-of-crecy',
    relationship: 'tactical-comparison',
    reason: "The English defeat by Robert Bruce at Bannockburn pushed English armies toward dismounted men-at-arms fighting beside massed archers — the system Edward III used to devastating effect against France at Crécy in 1346."
  },
  'battle-of-crecy': {
    label: "Continue the Hundred Years' War",
    battleSlug: 'battle-of-poitiers',
    relationship: 'same-war',
    reason: "Poitiers came ten years after Crécy and turned another English defensive victory into a French political crisis, ending with King John II of France captured by the Black Prince's army."
  },
  'battle-of-poitiers': {
    label: "Continue the Hundred Years' War",
    battleSlug: 'battle-of-agincourt',
    relationship: 'same-war',
    reason: "After Poitiers, the war's next great field battle came at Agincourt in 1415, where Henry V's outnumbered army destroyed the French attack and revived English fortunes in the same conflict."
  },
  'battle-of-kosovo': {
    label: 'Where the Turkish advance began',
    battleSlug: 'battle-of-manzikert',
    relationship: 'tactical-comparison',
    reason: 'The Ottoman power that fought at Kosovo grew from the Turkish entry into Anatolia opened at Manzikert in 1071, when Seljuk forces defeated the Byzantine army and captured Emperor Romanos IV.'
  },
  'battle-of-grunwald': {
    label: 'Knighthood in crisis, five years apart',
    battleSlug: 'battle-of-agincourt',
    relationship: 'tactical-comparison',
    reason: "Within five years, two of Europe's proudest knightly hosts were destroyed — the Teutonic Order at Grunwald and the French nobility at Agincourt — battles that together mark the crisis of heavy cavalry warfare in the early fifteenth century."
  },
  'battle-of-svolder': {
    label: 'The next fall of a Norwegian king',
    battleSlug: 'battle-of-stiklestad',
    relationship: 'chronological-follow-up',
    reason: "Olaf Tryggvason's death at Svolder left Norway contested between rival dynasties; thirty years later Olaf II Haraldsson fell at Stiklestad fighting to hold the same kingdom, a death that became the foundation of the cult of Saint Olaf."
  },
  'battle-of-stiklestad': {
    label: 'Follow Harald Hardrada',
    battleSlug: 'battle-of-stamford-bridge',
    relationship: 'chronological-follow-up',
    reason: 'Harald Hardrada fought at Stiklestad beside his half-brother Olaf II and survived the defeat; thirty-six years later his own invasion of England ended when Harold Godwinson defeated and killed him at Stamford Bridge.'
  },
  'battle-of-gestilren': {
    label: 'Another Scandinavian crown decided in battle',
    battleSlug: 'battle-of-stiklestad',
    relationship: 'same-region',
    reason: "Sverker II fell at Gestilren contending for the Swedish throne, as Olaf II Haraldsson had fallen at Stiklestad contending for Norway's — kings killed in dynastic battles remembered chiefly through later narrative tradition."
  },
  'battle-of-fulford': {
    label: 'Five days later at Stamford Bridge',
    battleSlug: 'battle-of-stamford-bridge',
    relationship: 'same-campaign',
    reason: "Fulford gave Harald Hardrada and Tostig Godwinson control of the approach to York, but within five days Harold Godwinson's army arrived from the south and destroyed the Norwegian force at Stamford Bridge."
  }
}

const battles = data.events.filter((e) => e.eventType === 'Battle')
const battleIds = new Set(battles.map((b) => b.id))
let updated = 0

for (const battle of battles) {
  const entry = continuity[battle.id]
  if (!entry) {
    console.error(`MISSING continuity mapping for battle: ${battle.id}`)
    process.exitCode = 1
    continue
  }
  if (!battleIds.has(entry.battleSlug)) {
    console.error(`${battle.id}: target ${entry.battleSlug} is not a Battle article`)
    process.exitCode = 1
    continue
  }
  if (entry.battleSlug === battle.id) {
    console.error(`${battle.id}: continuity target is itself`)
    process.exitCode = 1
    continue
  }
  battle.battleContinuity = entry
  updated++
}

if (process.exitCode) {
  console.error('Aborting without writing due to errors above.')
  process.exit(1)
}

fs.writeFileSync(dataPath, JSON.stringify(data, null, 2) + '\n')
console.log(`Added battleContinuity to ${updated} of ${battles.length} Battle articles.`)
