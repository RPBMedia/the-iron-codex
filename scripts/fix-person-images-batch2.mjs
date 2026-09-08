/**
 * Two person-image rule violations, fixed.
 *
 * The rule (owner, 2026-09-07): a person's main image must depict the person.
 * The audit of 43 coin/seal/map primaries triaged as follows —
 *
 *   Byzantine solidi (~11)   pass. Byzantine gold is figural by convention;
 *                            every one carries an imperial bust.
 *   Royal seals (~7)         pass. Medieval seals show enthroned or equestrian
 *                            figures.
 *   Scandinavian pennies(~14) need individual eyes; some carry a crude bust,
 *                            some only a cross and a legend.
 *   Islamic gold coinage (5) FAIL, and cannot be fixed by finding a better
 *                            coin: the coinage is aniconic by religious
 *                            convention, so no portrait exists to find.
 *   kerbogha                 FAIL — its primary image was a MAP of the crusader
 *                            states. Not a person at all, the same defect as
 *                            kilij-arslan-i.
 *
 * The two fixed here are the two for which a real depiction was found.
 *
 * NOT FIXED, and deliberately left rather than papered over: al-adil-ii,
 * al-mansur-ali, baraka-khan, yusuf-ibn-tashfin and muhammad-al-nasir. Commons
 * holds no depiction of any of them — the one file titled "محمد الناصر" turns
 * out to be Arabic calligraphy of the name, not a portrait. This is the
 * systematic problem already raised for the owner's decision: the image rule,
 * applied evenly, filters out Muslim rulers because their coinage carries no
 * faces. Leaving five visible violations is more honest than quietly relaxing
 * the rule for them.
 */
import { readFileSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dataPath = path.join(__dirname, '../server/data/history.json')
const data = JSON.parse(readFileSync(dataPath, 'utf8'))
const img = (f) => `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(f)}`
const person = (id) => data.characters.find((c) => c.id === id)

// --- Kerbogha: a crusader-states map replaced by an actual depiction -------
const k = person('kerbogha')
const oldKerboghaImage = k.image
k.image = img('Kerbogha Antiochie.jpg')
k.imageInfo = {
  caption: 'Kerbogha directing the siege of Antioch in 1098, in a manuscript illumination of 1337.',
  creator: 'Anonymous illuminator',
  date: 'c. 1337',
  source: 'Wikimedia Commons',
  sourceUrl: 'https://commons.wikimedia.org/wiki/File:Kerbogha_Antiochie.jpg',
  note: 'A genuine medieval depiction, though made some 240 years after the event and by the other side: Kerbogha is the crowned figure at left, directing crossbowmen against the walls. The armour, the crown and the crossbows are the illuminator\'s own century, not his. It replaces a locator map of the crusader states, which depicted no person at all. Public domain.'
}
k.sectionImages = [
  {
    section: 'Overview',
    src: oldKerboghaImage,
    caption: 'The crusader states around 1135, showing Antioch and the Mosul frontier Kerbogha campaigned across.',
    creator: 'Wikimedia Commons contributor',
    date: 'modern map',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Map_Crusader_states_1135-en.svg',
    note: 'A modern map. It was previously this article\'s main image, which broke the rule that a person\'s primary image must show the person; here it does the job it is actually good for.'
  },
  ...(k.sectionImages ?? [])
]

// --- Qutuz: an aniconic dinar replaced by a statue -------------------------
const q = person('qutuz')
const oldQutuzImage = q.image
q.image = img('صورة تمثال سيف الدين قطز crop.jpg')
q.imageInfo = {
  caption: 'Bronze bust of Sayf al-Din Qutuz at the Cairo Citadel.',
  creator: 'Modern sculptor; photographed by a Wikimedia contributor',
  date: 'modern statue, photographed 2012',
  source: 'Wikimedia Commons (Citadel of Saladin, Cairo)',
  sourceUrl: 'https://commons.wikimedia.org/wiki/File:%D8%B5%D9%88%D8%B1%D8%A9_%D8%AA%D9%85%D8%AB%D8%A7%D9%84_%D8%B3%D9%8A%D9%81_%D8%A7%D9%84%D8%AF%D9%8A%D9%86_%D9%82%D8%B7%D8%B2_crop.jpg',
  note: 'A modern commemorative bust and not a likeness — no depiction of Qutuz made in his lifetime exists, and Mamluk coinage is aniconic, so none could. It replaces a gold dinar bearing only inscription, which showed the office and not the man. CC BY-SA 3.0.'
}
q.sectionImages = [
  {
    section: 'Overview',
    src: oldQutuzImage,
    caption: 'A gold dinar struck for Qutuz, carrying his titles in inscription and no image.',
    creator: 'Mamluk mint',
    date: 'c. 1259–1260',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Qutuz_gold_dinar_obverse.jpg',
    note: 'The hard contemporary evidence for his reign, and the reason it sits here rather than at the top: Mamluk coinage is aniconic by religious convention, so it carries his name and titles and no portrait. It proves he ruled and shows nothing of the man.'
  },
  ...(q.sectionImages ?? [])
]

console.log('kerbogha: crusader-states MAP -> 1337 manuscript illumination')
console.log('qutuz:    aniconic gold dinar -> bronze bust, Cairo Citadel')
console.log('\nstill unresolved (no depiction exists on Commons):')
for (const id of ['al-adil-ii', 'al-mansur-ali', 'baraka-khan', 'yusuf-ibn-tashfin', 'muhammad-al-nasir']) {
  console.log('  ' + id)
}

writeFileSync(dataPath, JSON.stringify(data, null, 2))
