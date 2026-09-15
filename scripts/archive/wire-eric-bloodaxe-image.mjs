/**
 * Wires the owner's AI illustration of Eric Bloodaxe in as the primary image.
 *
 * The file arrived in `client/assets/people/`, which is the owner's originals
 * folder — the same place the Weapons & Armor source illustrations live — and is
 * NOT served. Vite serves `client/public/` only, and check-images resolves local
 * `/…` paths against `client/public` and `server/public`. Referencing it where it
 * landed would have 404'd in production and failed the image gate.
 *
 * So it follows the existing pattern: original kept in `client/assets/people/`,
 * served copy at `client/public/people/eric-bloodaxe.png`, referenced as
 * `/people/eric-bloodaxe.png`.
 *
 * Not `client/public/assets/…`: Vite emits its own bundles into `dist/assets/`,
 * and putting owner files there mixes them into the build-output namespace.
 * `/people/…` keeps them separate and still organised.
 *
 * Metadata follows the harald-fairhair convention exactly, per the rule added to
 * CLAUDE.md today. The Krohg illustration that was the interim primary moves down
 * to the saga section, where it is genuinely apt — it depicts the Egil scene the
 * article describes — and the coin stays in the York section.
 */
import { readFileSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dataPath = path.join(__dirname, '../server/data/history.json')
const data = JSON.parse(readFileSync(dataPath, 'utf8'))
const img = (f) => `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(f)}`

const e = data.characters.find((c) => c.id === 'eric-bloodaxe')

e.image = '/people/eric-bloodaxe.png'
e.imageInfo = {
  caption: 'Eric Bloodaxe envisioned as a tenth-century Norse king before his ships — a modern digital illustration.',
  creator: 'AI-generated digital artwork (artist unattributed)',
  date: 'modern',
  source: 'Local project asset, supplied by the site owner',
  sourceUrl: 'https://www.theironcodex.org/people/eric-bloodaxe',
  note: 'A modern, symbolic digital depiction (AI-generated), used as evocative imagery — not a historical portrait, contemporary likeness, or manuscript source. No authentic image of Eric Bloodaxe survives; the only depiction of him made before the modern era is a small nineteenth-century book illustration, shown further down this article.'
}

e.sectionImages = [
  {
    section: 'Character and Personality',
    src: img('Eirik Blodøks with Gunhild, Egil Skallagrimsson standing.jpg'),
    caption: 'Eirik enthroned with his queen Gunnhild and the poet Egil Skallagrímsson standing before them, drawn by Christian Krohg.',
    creator: 'Christian Krohg',
    date: 'c. 1899',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Eirik_Blod%C3%B8ks_with_Gunhild,_Egil_Skallagrimsson_standing.jpg',
    note: 'An illustration for an edition of the Heimskringla, and the only pre-modern depiction of Eirik that exists — a small one. It shows the scene from Egil\'s saga described in this section, in which the poet composes his way out of a death sentence.'
  },
  {
    section: 'King at York',
    src: img('Eric Bloodaxe silver penny; struck 952-954 AD (obverse).jpg'),
    caption: 'A silver penny struck for Eric at York between 952 and 954, reading ERIC REX around a sword.',
    creator: 'Northumbrian moneyer, York',
    date: 'c. 952–954',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Eric_Bloodaxe_silver_penny;_struck_952-954_AD_(obverse).jpg',
    note: 'The hardest evidence that exists for his reign, and the reason it sits here rather than at the top of the article: the coin carries his name, his title and a sword, and no portrait. It proves he ruled at York and shows nothing of the man.'
  }
]

console.log('eric-bloodaxe primary image ->', e.image)
console.log('  section images:', e.sectionImages.map((s) => s.section).join(', '))

writeFileSync(dataPath, JSON.stringify(data, null, 2))
