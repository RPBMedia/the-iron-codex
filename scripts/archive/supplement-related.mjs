/**
 * Curated supplement for articles the structural builder left under 3 related
 * entries. Hand-curated links for high-value events/artifacts/characters, plus
 * an honest top-up for one-person locations that borrows the strongest links of
 * the single person who makes the place notable. Every slug is validated against
 * the data before insertion, so no broken/self/duplicate links are added.
 */
import fs from 'node:fs'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dataPath = path.join(__dirname, '../server/data/history.json')
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'))

const typeToCollection = {
  person: 'characters', event: 'events', location: 'locations', artifact: 'artifacts', weaponArmor: 'weaponsArmor'
}
const collectionToType = { characters: 'person', events: 'event', locations: 'location', artifacts: 'artifact', weaponsArmor: 'weaponArmor' }
const collectionToGroup = { characters: 'people', events: 'events', locations: 'locations', artifacts: 'artifacts', weaponsArmor: 'weaponsArmor' }
const anyTypeToCollection = {
  person: 'characters', people: 'characters', character: 'characters', event: 'events',
  location: 'locations', place: 'locations', kingdom: 'locations', polity: 'locations',
  artifact: 'artifacts', document: 'artifacts', weaponArmor: 'weaponsArmor', weapon: 'weaponsArmor',
  armor: 'weaponsArmor', shield: 'weaponsArmor', helmet: 'weaponsArmor', famousWeapon: 'weaponsArmor', famousArmor: 'weaponsArmor'
}

const byId = {}
for (const [col, arr] of Object.entries(data)) { if (Array.isArray(arr)) byId[col] = new Map(arr.map(a => [a.id, a])) }
const findArticle = (col, id) => byId[col]?.get(id)
const titleOf = (col, id) => { const a = findArticle(col, id); return a ? (a.name || a.title) : null }

const warnings = []
function validEntry(type, slug) {
  const col = typeToCollection[type]
  if (!col) { warnings.push(`bad type ${type}:${slug}`); return null }
  if (!findArticle(col, slug)) { warnings.push(`missing ${col}/${slug}`); return null }
  return { col, slug }
}

function currentKeys(article) {
  const s = new Set()
  for (const it of Object.values(article.relatedEntries || {}).flat()) {
    const col = anyTypeToCollection[it.type]
    if (col && it.slug) s.add(`${col}/${it.slug}`)
  }
  return s
}

function addEntry(article, selfCol, selfId, type, slug, label) {
  const v = validEntry(type, slug)
  if (!v) return false
  if (v.col === selfCol && v.slug === selfId) return false
  const key = `${v.col}/${v.slug}`
  if (currentKeys(article).has(key)) return false
  if (!article.relatedEntries) article.relatedEntries = {}
  const group = collectionToGroup[v.col]
  if (!article.relatedEntries[group]) article.relatedEntries[group] = []
  const entry = { title: titleOf(v.col, v.slug), type: collectionToType[v.col], slug: v.slug }
  if (label) entry.label = label
  article.relatedEntries[group].push(entry)
  return true
}

// ── Curated supplements (type, slug, reason) ───────────────────────────────────
const CURATED = {
  'events/fall-of-western-rome': [
    ['location', 'rome', 'The imperial capital'],
    ['location', 'byzantine-empire', 'The surviving eastern Roman empire'],
    ['location', 'carolingian-empire', 'Later western imperial revival'],
    ['event', 'charlemagne-crowned', 'Revived a western imperial title in 800']
  ],
  'events/charlemagne-crowned': [
    ['location', 'carolingian-empire', 'The empire the coronation crowned'],
    ['location', 'aachen', "Charlemagne's imperial capital"],
    ['event', 'treaty-of-verdun', 'Divided the empire he built'],
    ['location', 'papacy', 'Pope Leo III performed the coronation']
  ],
  'events/treaty-of-verdun': [
    ['location', 'carolingian-empire', 'The empire it partitioned'],
    ['person', 'charlemagne', 'Grandfather whose empire was divided'],
    ['event', 'charlemagne-crowned', 'Created the empire later split in 843'],
    ['location', 'kingdom-of-france', 'West Francia became the kernel of France']
  ],
  'events/magna-carta': [
    ['artifact', 'magna-carta-document', 'The charter itself'],
    ['event', 'battle-of-bouvines', "John's 1214 defeat that triggered the crisis"],
    ['person', 'philip-ii-of-france', 'His victory at Bouvines weakened King John'],
    ['person', 'pope-innocent-iii', 'Annulled the charter shortly after sealing']
  ],
  'events/black-death-europe': [
    ['location', 'constantinople', 'Entry point into the Mediterranean world'],
    ['location', 'kingdom-of-england', 'Devastated population and labour'],
    ['location', 'kingdom-of-france', 'Struck amid the Hundred Years’ War'],
    ['person', 'magnus-eriksson', 'Reign struck by the plague in Scandinavia']
  ],
  'artifacts/bayeux-tapestry': [
    ['person', 'william-the-conqueror', 'Depicts his conquest of England'],
    ['event', 'norman-conquest', 'Narrates the Norman conquest'],
    ['location', 'duchy-of-normandy', 'Norman work commemorating the conquest'],
    ['person', 'harold-godwinson', 'His defeat and death are central to the work']
  ],
  'artifacts/magna-carta-document': [
    ['event', 'magna-carta', 'The 1215 sealing the document records'],
    ['location', 'kingdom-of-england', 'Constrained the English crown'],
    ['person', 'pope-innocent-iii', 'Annulled the charter in 1215'],
    ['event', 'battle-of-bouvines', "John's defeat that forced the charter"]
  ],
  'artifacts/book-of-kells': [
    ['artifact', 'lindisfarne-gospels', 'Related insular illuminated gospel book'],
    ['location', 'northumbria', 'Centre of the wider insular manuscript tradition'],
    ['artifact', 'royal-frankish-annals', 'Comparable major early-medieval manuscript'],
    ['artifact', 'codex-gigas', 'Comparable major medieval manuscript']
  ],
  'artifacts/lindisfarne-gospels': [
    ['location', 'northumbria', 'Produced at Lindisfarne in Northumbria'],
    ['artifact', 'book-of-kells', 'Related insular illuminated gospel book'],
    ['location', 'kingdom-of-england', 'Later medieval English context'],
    ['artifact', 'royal-frankish-annals', 'Comparable major early-medieval manuscript']
  ],
  'artifacts/shroud-of-turin': [
    ['location', 'constantinople', 'A relic of disputed Byzantine-era origin'],
    ['location', 'crusader-states', 'Relic trade flourished in the crusading era'],
    ['location', 'kingdom-of-jerusalem', 'Centre of medieval relic veneration'],
    ['event', 'third-crusade', 'Crusading era of relic acquisition']
  ],
  'artifacts/codex-gigas': [
    ['artifact', 'royal-frankish-annals', 'Comparable major medieval manuscript'],
    ['artifact', 'book-of-kells', 'Comparable major medieval manuscript'],
    ['artifact', 'lindisfarne-gospels', 'Comparable major medieval manuscript']
  ],
  'artifacts/royal-frankish-annals': [
    ['person', 'charlemagne', 'Chief subject of the annals'],
    ['location', 'carolingian-empire', 'Records the Carolingian realm'],
    ['event', 'charlemagne-crowned', 'Documents the imperial coronation of 800'],
    ['location', 'frankish-kingdom', 'The realm the annals chronicle']
  ],
  'characters/eleanor-of-aquitaine': [
    ['location', 'aquitaine', 'Her duchy, held in her own right'],
    ['person', 'richard-the-lionheart', 'Her son, whom she supported as king'],
    ['location', 'kingdom-of-england', 'Queen of England by her second marriage'],
    ['location', 'kingdom-of-france', 'Queen of France by her first marriage'],
    ['person', 'louis-vii-of-france', 'Her first husband']
  ],
  'characters/isabella-of-castile': [
    ['location', 'kingdom-of-castile', 'Queen of Castile in her own right'],
    ['location', 'kingdom-of-aragon', 'United with Castile through her marriage'],
    ['location', 'gutierre-munoz', 'Where she was proclaimed queen in 1474']
  ],
  'characters/ragnar-lothbrok': [
    ['location', 'kingdom-of-denmark', 'Linked to Danish royal legend'],
    ['weaponArmor', 'viking-sword', 'Weapon of his Viking-age world'],
    ['weaponArmor', 'dane-axe', 'Weapon of his Viking-age world']
  ],
  'characters/godfred-of-denmark': [
    ['person', 'charlemagne', 'His great Frankish adversary'],
    ['location', 'carolingian-empire', 'The empire he confronted'],
    ['person', 'hemming-of-denmark', 'His successor in Denmark']
  ],
  'characters/hemming-of-denmark': [
    ['person', 'godfred-of-denmark', 'His predecessor'],
    ['location', 'carolingian-empire', 'Made peace with the Frankish empire'],
    ['person', 'horik-i-of-denmark', 'His successor']
  ],
  'characters/horik-i-of-denmark': [
    ['person', 'hemming-of-denmark', 'His predecessor'],
    ['person', 'horik-ii-of-denmark', 'His successor'],
    ['location', 'carolingian-empire', 'Managed relations with the Franks']
  ],
  'characters/horik-ii-of-denmark': [
    ['person', 'horik-i-of-denmark', 'His predecessor'],
    ['person', 'gorm-the-old', 'Later king of a more unified Denmark'],
    ['location', 'ribe', 'Early Danish royal and church centre']
  ],
  'characters/christopher-of-bavaria': [
    ['location', 'kalmar-union', 'Ruled the union of the three kingdoms'],
    ['person', 'eric-of-pomerania', 'His deposed predecessor'],
    ['person', 'christian-i-of-denmark', 'His successor']
  ],
  'characters/christian-i-of-denmark': [
    ['location', 'kalmar-union', 'Ruled the union of the three kingdoms'],
    ['location', 'kingdom-of-denmark', 'Founder of the Oldenburg royal line'],
    ['person', 'christopher-of-bavaria', 'His predecessor']
  ],
  'characters/haakon-vi-of-norway': [
    ['location', 'kingdom-of-norway', 'Last king of an independent Norway'],
    ['person', 'margaret-i', 'His wife, architect of the Kalmar Union'],
    ['person', 'magnus-eriksson', 'His father']
  ],
  'characters/eric-the-victorious': [
    ['location', 'uppsala', 'Cult and assembly centre of his realm'],
    ['person', 'eric-ix-of-sweden', 'Later Swedish royal saint'],
    ['location', 'kingdom-of-denmark', 'Rival realm of his Danish opponents']
  ],
  'characters/birger-jarl': [
    ['person', 'valdemar-of-sweden', 'His son, whom he made king'],
    ['person', 'magnus-iii-of-sweden', 'His son and later king'],
    ['location', 'stockholm', 'Traditionally founded under him']
  ],
  'characters/magnus-eriksson': [
    ['location', 'kingdom-of-norway', 'Ruled Norway as well as Sweden'],
    ['person', 'haakon-vi-of-norway', 'His son and co-ruler in Norway'],
    ['event', 'black-death-europe', 'His reign was struck by the plague']
  ],
  'characters/charles-viii-of-sweden': [
    ['location', 'kalmar-union', 'Opposed Danish union rule'],
    ['person', 'christian-i-of-denmark', 'His union-era rival'],
    ['location', 'kingdom-of-norway', 'Briefly held the Norwegian crown']
  ],
  'locations/carolingian-empire': [
    ['person', 'charlemagne', 'Its greatest ruler'],
    ['event', 'charlemagne-crowned', 'Imperial coronation of 800'],
    ['event', 'treaty-of-verdun', 'Partitioned the empire in 843'],
    ['location', 'frankish-kingdom', 'The realm it grew from'],
    ['location', 'aachen', 'Its imperial capital']
  ],
  'locations/winchester-cathedral': [
    ['location', 'winchester', 'The city it stands in'],
    ['location', 'kingdom-of-wessex', 'Royal centre of the West Saxon kings'],
    ['person', 'alfred-the-great', 'Associated with the West Saxon royal centre'],
    ['person', 'cnut-the-great', 'Buried at Winchester']
  ],
  'locations/roskilde': [
    ['person', 'harald-bluetooth', 'Traditionally linked to its early church'],
    ['person', 'sweyn-ii-estridsson', 'Danish king tied to the see'],
    ['person', 'valdemar-i-of-denmark', 'Danish royal burial tradition'],
    ['location', 'copenhagen', 'Later Danish royal centre nearby']
  ],
  'locations/al-andalus': [
    ['person', 'abd-al-rahman-al-ghafiqi', 'Commander who raided from al-Andalus'],
    ['location', 'almohad-caliphate', 'Later ruling power in the peninsula'],
    ['person', 'alfonso-viii-of-castile', 'Christian adversary in the Reconquista']
  ],
  'locations/kingdom-of-poland': [
    ['person', 'wladyslaw-ii-jagiello', 'King who won Grunwald'],
    ['person', 'vytautas', 'Lithuanian ally at Grunwald'],
    ['location', 'teutonic-order', 'Its great northern adversary'],
    ['location', 'grand-duchy-of-lithuania', 'Partner realm in personal union']
  ],
  'locations/crusader-states': [
    ['location', 'kingdom-of-jerusalem', 'The principal crusader state'],
    ['person', 'godfrey-of-bouillon', 'First Latin ruler of Jerusalem'],
    ['person', 'saladin', 'Conqueror who shattered the kingdom'],
    ['event', 'first-crusade-called', 'The crusade that founded them']
  ],
  'locations/kingdom-of-aragon': [
    ['location', 'kingdom-of-castile', 'United with Aragon under Ferdinand and Isabella'],
    ['person', 'isabella-of-castile', 'Her marriage joined the crowns'],
    ['location', 'kingdom-of-navarre', 'Neighbouring Iberian realm'],
    ['person', 'alfonso-viii-of-castile', 'Allied Christian king at Las Navas']
  ],
  'locations/kingdom-of-navarre': [
    ['location', 'kingdom-of-castile', 'Neighbouring Iberian realm'],
    ['location', 'kingdom-of-aragon', 'Neighbouring Iberian realm'],
    ['person', 'alfonso-viii-of-castile', 'Allied Christian king at Las Navas']
  ]
}

let curatedAdds = 0
for (const [key, entries] of Object.entries(CURATED)) {
  const [col, id] = key.split('/')
  const art = findArticle(col, id)
  if (!art) { warnings.push(`curated target missing ${key}`); continue }
  for (const [type, slug, label] of entries) {
    if (addEntry(art, col, id, type, slug, label)) curatedAdds++
  }
}

// ── Location top-up: borrow the strongest links of the single associated person ──
function validCount(article) { return currentKeys(article).size }

let topupAdds = 0
for (const loc of data.locations) {
  if (validCount(loc) >= 3) continue
  // associated people already on the card
  const people = (loc.relatedEntries?.people || []).map(p => p.slug).filter(Boolean)
  for (const personId of people) {
    if (validCount(loc) >= 4) break
    const person = findArticle('characters', personId)
    if (!person) continue
    const borrow = Object.values(person.relatedEntries || {}).flat()
    for (const it of borrow) {
      if (validCount(loc) >= 4) break
      const col = anyTypeToCollection[it.type]
      if (!col || !it.slug) continue
      // borrow locations, events, and other people (not the loc itself)
      if (addEntry(loc, 'locations', loc.id, collectionToType[col], it.slug, '')) topupAdds++
    }
  }
}

fs.writeFileSync(dataPath, JSON.stringify(data, null, 2))

// report
const stillUnder3 = []
for (const [col, arr] of Object.entries(data)) {
  if (!Array.isArray(arr)) continue
  for (const a of arr) if (validCount(a) < 3) stillUnder3.push(`${col}/${a.id} (${validCount(a)})`)
}
console.log('Curated entries added:', curatedAdds)
console.log('Location top-up entries added:', topupAdds)
console.log('Still under 3:', stillUnder3.length)
stillUnder3.forEach(x => console.log('   - ' + x))
if (warnings.length) { console.log('\nWARNINGS:'); [...new Set(warnings)].forEach(w => console.log('   ! ' + w)) }
