import { readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
const __dirname = dirname(fileURLToPath(import.meta.url))
const dataPath = join(__dirname, '..', 'server', 'data', 'history.json')
const data = JSON.parse(readFileSync(dataPath, 'utf8'))
const IMG = (f) => `https://commons.wikimedia.org/wiki/Special:FilePath/${f}?width=700`

// The three houses that carried arms text but no arms image (M5 gap).
const arms = {
  'house-of-arpad': {
    armsImage: IMG('Coa%20Hungary%20Country%20History%20(855-1301).svg'),
    armsImageInfo: {
      caption: 'The Árpád stripes — the red-and-silver barry that is one of the oldest arms of Hungary.',
      source: 'Wikimedia Commons',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Coa_Hungary_Country_History_(855-1301).svg',
      note: 'Heraldic rendering (SVG) of the historical Árpád arms, not a surviving medieval object.'
    }
  },
  'house-of-hohenstaufen': {
    armsImage: IMG('Armoiries%20Famille%20Hohenstaufen%20superseding.svg'),
    armsImageInfo: {
      caption: 'The arms of the Hohenstaufen dukes of Swabia — three black lions on a gold field.',
      source: 'Wikimedia Commons',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Armoiries_Famille_Hohenstaufen_superseding.svg',
      note: 'Heraldic rendering (SVG) of the historical Swabian/Hohenstaufen arms, not a surviving medieval object.'
    }
  },
  'house-of-gediminas': {
    armsImage: IMG('Coat%20of%20arms%20of%20Lithuania%20with%20Vytis%20(Waykimas)%20and%20the%20Columns%20of%20Gediminas,%201440.jpg'),
    armsImageInfo: {
      caption: 'The Vytis (Pahonia) mounted knight and the Columns of Gediminas — the Lithuanian arms of the Gediminids — in an armorial of 1440.',
      source: 'Wikimedia Commons',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Coat_of_arms_of_Lithuania_with_Vytis_(Waykimas)_and_the_Columns_of_Gediminas,_1440.jpg',
      note: 'A 15th-century armorial depiction showing both the Vytis and the Columns of Gediminas together.'
    }
  }
}

let n = 0
for (const [id, patch] of Object.entries(arms)) {
  const h = data.houses.find((x) => x.id === id)
  if (!h) { console.warn('MISSING house:', id); continue }
  h.armsImage = patch.armsImage
  h.armsImageInfo = patch.armsImageInfo
  n++
}
writeFileSync(dataPath, JSON.stringify(data, null, 2))
console.log(`Arms images set on ${n} houses. Houses with armsImage now: ${data.houses.filter((h) => h.armsImage).length}/${data.houses.length}.`)
