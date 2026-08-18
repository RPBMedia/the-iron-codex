import { readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
const __dirname = dirname(fileURLToPath(import.meta.url))
const dataPath = join(__dirname, '..', 'server', 'data', 'history.json')
const data = JSON.parse(readFileSync(dataPath, 'utf8'))

const src = (file) => `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(file)}?width=700`
const page = (file) => `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(file.replace(/ /g, '_'))}`

// houseId -> { text: plain-language arms description, file?: Commons filename, cap?: image caption }
const A = {
  'house-of-plantagenet': { text: 'Three gold lions on a red field — the royal arms of England, borne by the Plantagenet kings.', file: 'Royal arms of England.svg', cap: 'The royal arms of England — three gold lions on red — borne by the Plantagenet kings from Richard I.' },
  'house-of-wessex': { text: 'A golden wyvern (dragon), the emblem later associated with Wessex. The dynasty predates true heraldry.' },
  'house-of-normandy': { text: 'Two gold lions on a red field — the arms of the dukes of Normandy.', file: 'Arms of William the Conqueror (1066-1087).svg', cap: 'The two gold lions of Normandy, in the arms attributed to William the Conqueror.' },
  'house-of-capet': { text: 'Gold fleurs-de-lis strewn across a blue field — the early royal arms of France (“France Ancient”).', file: 'Arms of the Kingdom of France (Ancien).svg', cap: 'The early royal arms of France (“France Ancient”): gold fleurs-de-lis strewn on blue.' },
  'house-of-osman': { text: 'The Ottomans bore no European-style coat of arms; the sultan’s authority was signalled by the tughra, his calligraphic monogram.' },
  'house-of-burgundy-portugal': { text: 'A white shield bearing five blue escutcheons set in a cross, each charged with silver roundels (the Portuguese “quinas”) — the arms of Portugal.', file: 'CoA of Portugal (1248-1385) circular.svg', cap: 'The Portuguese “quinas”: five blue escutcheons in cross on white, the arms of the Afonsine kings.' },
  'house-of-estridsen': { text: 'Three blue crowned lions among red hearts on a gold field — the arms of Denmark.', file: 'National coat of arms of Denmark.svg', cap: 'The three crowned blue lions of Denmark, the realm’s enduring arms.' },
  'house-of-aviz': { text: 'The Portuguese arms (the “quinas” within a border of golden castles), differenced by the green cross of the Order of Aviz.', file: 'Shield of Kingdom of Portugal (1481-1910).svg', cap: 'The Portuguese royal arms — the quinas within a bordure of castles — as borne under the House of Aviz.' },
  'house-of-valois': { text: 'Three gold fleurs-de-lis on a blue field — the royal arms of France (“France Modern”).', file: 'Arms of the Kingdom of France (Moderne).svg', cap: 'The royal arms of France (“France Modern”): three gold fleurs-de-lis on blue.' },
  'house-of-trastamara': { text: 'The quartered arms of Castile and León — golden castles and purple lions.', file: 'Coat of Arms of Castile and Leon.svg', cap: 'The quartered arms of Castile and León — golden castles and lions — the arms of the Crown of Castile.' },
  'house-of-komnenos': { text: 'The Byzantine emperors bore no Western coat of arms; the double-headed eagle became associated with the imperial dynasties.' },
  'house-of-palaiologos': { text: 'The Palaiologan emblem was the tetragrammic cross — a cross flanked by four firesteels — rather than a Western coat of arms.' },
  'house-of-hohenstaufen': { text: 'Three black lions on a gold field — the arms attributed to the Hohenstaufen dukes of Swabia.' },
  'house-of-carolingian': { text: 'The Carolingians predate heraldry; the dynasty is symbolised by Charlemagne’s monogram and imperial seal.' },
  'house-of-jelling': { text: 'The Jelling kings bore no coat of arms; the dynasty is symbolised by the great runestone of Jelling.' },
  'house-of-fairhair': { text: 'A golden lion bearing the axe of Saint Olaf on a red field — the royal arms of Norway, attributed to the line in later heraldry.', file: 'Coat of arms of Norway.svg', cap: 'The Norwegian royal arms: a crowned golden lion bearing the axe of Saint Olaf (a later attribution to the old dynasty).' },
  'house-of-sverre': { text: 'A golden lion bearing the axe of Saint Olaf on a red field — the arms of medieval Norway.', file: 'Coat of arms of Norway.svg', cap: 'The royal arms of Norway — the crowned lion with Saint Olaf’s axe — as used from the thirteenth century.' },
  'house-of-bjalbo': { text: 'A gold lion striding over three silver bends on a blue field — the “Folkung lion” of the Bjälbo dynasty.', file: 'COA family sv Folkungaätten.svg', cap: 'The “Folkung lion” of the House of Bjälbo — a gold lion over silver bends on blue.' },
  'house-of-rurik': { text: 'The early Rus’ princes marked their seals and coins with the bident and trident (tamga), not Western heraldry.' },
  'house-of-arpad': { text: 'Horizontal bars of red and silver — the “Árpád stripes”, one of the oldest emblems of Hungary.' },
  'house-of-gediminas': { text: 'The mounted knight of the Vytis (Pahonia) and the Columns of Gediminas — the emblems of Lithuania.' },
  'house-of-ayyubid': { text: 'The Ayyubids bore no Western coat of arms; a golden eagle is sometimes linked to the family.' },
  'house-of-seljuk': { text: 'The Seljuks bore no Western coat of arms; a double-headed eagle and a bow-and-arrow mark (tamga) are associated with them.' },
  'house-of-lancaster': { text: 'The royal arms of England (three gold lions on red) with a blue label of France; the red rose became the Lancastrian badge.', file: 'Coat of Arms of John of Gaunt, Duke of Lancaster.svg', cap: 'The arms of John of Gaunt, founder of the Lancastrian line — the royal arms of England differenced with a label.' },
  'house-of-bruce': { text: 'A red lion rampant within a red double border on a gold field — the royal arms of Scotland.', file: 'Royal Coat of Arms of the Kingdom of Scotland.svg', cap: 'The royal arms of Scotland — the red lion rampant within a double tressure — borne by Robert the Bruce.' },
  'house-of-anjou-capetian': { text: 'Gold fleurs-de-lis on blue with a red label — the arms of the Capetian Angevins of Naples.', file: 'Coat of arms of the Anjou-Naples dynasty (Capetians).svg', cap: 'The Capetian Angevin arms of Naples — France Ancient differenced with a red label.' },
  'house-of-boulogne': { text: 'A gold cross flanked by four smaller gold crosses on a silver field — the arms of the Kingdom of Jerusalem.', file: 'Arms of the Kingdom of Jerusalem.svg', cap: 'The arms of the Kingdom of Jerusalem — a gold cross potent between four crosslets on silver.' },
  'house-of-anjou-rethel': { text: 'The arms of the Kingdom of Jerusalem — a gold cross flanked by four smaller gold crosses on a silver field.', file: 'Arms of the Kingdom of Jerusalem (Ströhl).svg', cap: 'The royal arms of Jerusalem, borne by its Angevin kings.' },
  'house-of-doukas': { text: 'The Byzantine emperors bore no Western coat of arms.' },
  'house-of-zengid': { text: 'The Zengids bore no Western coat of arms.' },
  'house-of-ivrea': { text: 'The arms of the Crown of Castile — golden castles and lions.', file: 'Kingdom of Castile Arms.svg', cap: 'The arms of the Crown of Castile — the golden castle and the lion — borne by the Jiménez (Ivrea) kings.' },
  'house-of-hauteville': { text: 'A silver shield with an indented red chief — the arms attributed to the Hauteville family.' },
  'house-of-lusignan': { text: 'Horizontal bars of silver and blue — the arms of Lusignan.', file: 'Blason maison fr de Lusignan.svg', cap: 'The barry silver-and-blue arms of the House of Lusignan.' },
  'house-of-montferrat': { text: 'A silver shield with a red chief — the arms of the marquesses of Montferrat.', file: 'Blason marquisat it Montferrat 1.svg', cap: 'The arms of the marquesses of Montferrat — silver with a red chief.' },
  'house-of-toulouse': { text: 'A pierced, twelve-pointed gold cross on red — the “cross of Toulouse” (the Occitan cross).', file: 'Blason Languedoc.svg', cap: 'The cross of Toulouse — the voided, pommetted gold cross on red used by the counts of Toulouse.' },
  'house-of-flanders-hainaut': { text: 'A black lion rampant on a gold field — the arms of the counts of Flanders.', file: 'CoA Flanders County.svg', cap: 'The black lion of Flanders on gold — the arms of the counts who became Latin Emperors.' },
  'house-of-munso': { text: 'The Munsö kings predate Swedish heraldry and bore no coat of arms.' },
  'house-of-stenkil': { text: 'The Stenkil kings predate Swedish heraldry and bore no coat of arms.' },
  'house-of-sverker': { text: 'A griffin, the emblem of Östergötland, was later attributed to the Sverker dynasty, which predates true heraldry.' },
  'house-of-erik': { text: 'Three crowns and a lion, later emblems of Sweden, were attributed to the line; the dynasty predates true heraldry.' }
}

let textN = 0, imgN = 0, missing = []
for (const h of data.houses ?? []) {
  const a = A[h.id]
  if (!a) { missing.push(h.id); continue }
  h.arms = a.text; textN++
  if (a.file) {
    h.armsImage = src(a.file)
    h.armsImageInfo = {
      caption: a.cap,
      source: 'Wikimedia Commons',
      sourceUrl: page(a.file),
      note: 'Heraldic rendering (SVG) of the historical arms, not a surviving medieval object.'
    }
    imgN++
  } else {
    delete h.armsImage; delete h.armsImageInfo
  }
}
writeFileSync(dataPath, JSON.stringify(data, null, 2))
console.log(`Arms text set on ${textN} houses; arms image on ${imgN}. Missing map: ${missing.join(', ') || 'none'}`)
