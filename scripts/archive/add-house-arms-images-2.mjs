import { readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
const __dirname = dirname(fileURLToPath(import.meta.url))
const dataPath = join(__dirname, '..', 'server', 'data', 'history.json')
const data = JSON.parse(readFileSync(dataPath, 'utf8'))
const IMG = (f) => `https://commons.wikimedia.org/wiki/Special:FilePath/${f}?width=700`
const FILE = (f) => `https://commons.wikimedia.org/wiki/File:${f}`
const SVG_NOTE = 'Heraldic rendering (SVG) of the historical arms, not a surviving medieval object.'

// 14 houses whose arms images were found and verified visually (Oldenburg and
// the Italo-Norman Hauteville deliberately skipped — no correct clean image
// exists on Commons, so they keep their arms text without a wrong picture).
const arms = {
  'house-of-wittelsbach': {
    file: 'Wittelsbach%20Arms.svg', page: 'Wittelsbach_Arms.svg',
    caption: 'The quartered arms of the House of Wittelsbach — the golden Palatinate lion and the blue-and-white lozenges of Bavaria.', note: SVG_NOTE
  },
  'house-of-luxembourg': {
    file: 'Coat%20of%20arms%20of%20the%20House%20of%20Luxembourg.svg', page: 'Coat_of_arms_of_the_House_of_Luxembourg.svg',
    caption: 'The arms of the House of Luxembourg — barry of silver and blue, a crowned red lion.', note: SVG_NOTE
  },
  'house-of-stewart': {
    file: 'Stewart%20arms.svg', page: 'Stewart_arms.svg',
    caption: 'The Stewart arms — a blue-and-white chequered fess on gold.', note: SVG_NOTE
  },
  'house-of-balliol': {
    file: 'Balliol%20arms.svg', page: 'Balliol_arms.svg',
    caption: 'The arms of Balliol — a silver orle on red.', note: SVG_NOTE
  },
  'house-of-courtenay': {
    file: 'Blason%20Courtenay.svg', page: 'Blason_Courtenay.svg',
    caption: 'The arms of Courtenay — three red roundels (torteaux) on gold.', note: SVG_NOTE
  },
  'house-of-dunkeld': {
    file: 'Royal%20Arms%20of%20the%20Kingdom%20of%20Scotland.svg', page: 'Royal_Arms_of_the_Kingdom_of_Scotland.svg',
    caption: 'The royal arms of Scotland — the red lion rampant within a double tressure — settled under the later kings of the house.', note: SVG_NOTE
  },
  'house-of-lazarevic': {
    file: 'Coat%20of%20arms%20of%20Moravian%20Serbia.svg', page: 'Coat_of_arms_of_Moravian_Serbia.svg',
    caption: 'The arms of the Lazarević despots of Moravian Serbia — the white Serbian double-headed eagle on red.', note: SVG_NOTE
  },
  'house-of-poitiers': {
    file: 'Blason%20du%20duch%C3%A9%20de%20Guyenne.svg', page: 'Blason_du_duché_de_Guyenne.svg',
    caption: 'The arms of the dukes of Aquitaine (Guyenne) — a single gold leopard on red.', note: SVG_NOTE
  },
  'house-of-griffin': {
    file: 'Wappen%20Pommern.svg', page: 'Wappen_Pommern.svg',
    caption: 'The arms of Pomerania — the red griffin on silver — borne by the Griffin dukes.', note: SVG_NOTE
  },
  'house-of-palaiologos': {
    file: 'Byzantine%20imperial%20flag,%2014th%20century.svg', page: 'Byzantine_imperial_flag,_14th_century.svg',
    caption: 'The Palaiologan imperial emblem — the gold tetragrammic cross flanked by four firesteels — on the 14th-century Byzantine banner.',
    note: 'A rendering of the Palaiologan dynastic banner; the Byzantine emperors used such emblems rather than a Western coat of arms.'
  },
  'house-of-wessex': {
    file: 'Flag%20of%20Wessex.svg', page: 'Flag_of_Wessex.svg',
    caption: 'The golden wyvern, the emblem later associated with the kingdom of Wessex.',
    note: 'A modern flag rendering of the Wessex wyvern — an attributed emblem, not a documented early-medieval coat of arms.'
  },
  'house-of-welf': {
    file: 'Coat%20of%20arms%20of%20Brunswick-L%C3%BCneburg.svg', page: 'Coat_of_arms_of_Brunswick-Lüneburg.svg',
    caption: 'The arms of the Welf duchy of Brunswick-Lüneburg — the two gold Brunswick lions impaled with the blue lion of Lüneburg.', note: SVG_NOTE
  },
  'house-of-mecklenburg': {
    file: 'Wappen%20Mecklenburg.svg', page: 'Wappen_Mecklenburg.svg',
    caption: 'The arms of Mecklenburg — quartered, with the crowned black bull’s head of the duchy.', note: SVG_NOTE
  },
  'house-of-bonde': {
    file: 'Karl%20Knutssons%20(Bonde)%20vapen%20(i%20rikssigillet%201448).png', page: 'Karl_Knutssons_(Bonde)_vapen_(i_rikssigillet_1448).png',
    caption: 'The royal seal of Karl Knutsson Bonde (1448), quartering the Three Crowns of Sweden, the Folkung lion, and the Bonde boat.',
    note: 'A drawing of Charles VIII’s contemporary 1448 royal seal; the Bonde boat appears as one quarter.'
  }
}

let n = 0
for (const [id, a] of Object.entries(arms)) {
  const h = data.houses.find((x) => x.id === id)
  if (!h) { console.warn('MISSING house:', id); continue }
  h.armsImage = IMG(a.file)
  h.armsImageInfo = { caption: a.caption, source: 'Wikimedia Commons', sourceUrl: FILE(a.page), note: a.note }
  n++
}

// Wording tidy: the Wittelsbach arms text described only the Bavarian lozenges,
// but the dynasty (and its arms image) also carries the Palatinate lion.
const witt = data.houses.find((h) => h.id === 'house-of-wittelsbach')
if (witt) witt.arms = 'Quarterly, the golden lion of the Palatinate and the blue-and-white lozenges of Bavaria — the arms of the two Wittelsbach branches.'

writeFileSync(dataPath, JSON.stringify(data, null, 2))
console.log(`Set arms images on ${n} houses. Houses with armsImage now: ${data.houses.filter((h) => h.armsImage).length}/${data.houses.length}.`)
