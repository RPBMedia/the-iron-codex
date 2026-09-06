/**
 * dane-axe — principal image from a reputable maker's product photograph.
 *
 * Was a head-and-partial-haft photograph: the defining feature of a Dane axe is
 * the long two-handed haft, and it ran out of frame. Every free-licensed source
 * checked (Commons Category:Dane axes, the en-wiki article's own files,
 * Openverse across Flickr/Wikimedia/museums, the Met, Cleveland) returns axe
 * HEADS only, because that is what museums photograph.
 *
 * Now a complete forged reproduction from Wulflund (Czech forge): 122 cm overall,
 * 20 cm head, 24 cm blade, plain welded edge — proportions consistent with
 * surviving Dane axes. Self-hosted rather than hotlinked, credited to the maker
 * with a link to the product page.
 */
import { readFileSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dataPath = path.join(__dirname, '../server/data/history.json')
const data = JSON.parse(readFileSync(dataPath, 'utf8'))
const e = data.weaponsArmor.find((x) => x.id === 'dane-axe')
if (!e) throw new Error('dane-axe missing')

const old = { image: e.image, info: e.imageInfo }

e.image = '/dane-axe-wulflund.jpg'
e.imageInfo = {
  caption:
    'Modern forged reproduction of a Dane axe, shown complete: the broad flaring bearded head and the full two-handed haft running to the butt — the long shaft being the feature that defines the type.',
  creator: 'Wulflund (Czech forge) — maker and product photograph',
  date: 'modern reproduction of a 10th–12th century form',
  source: 'Wulflund, reproduced with credit',
  sourceUrl: 'https://www.wulflund.com/dane-axe-viking-sharp-replica',
  note:
    'A reproduction, not an excavated axe. Its stated dimensions — 122 cm overall, a 20 cm head with a 24 cm edge, plain and forged with a welded edge — sit within the range of surviving Danish axes, and the plain head is right: the decorated knotwork heads sold by some makers are modern styling, not a medieval norm. It is used because museums photograph axe heads rather than whole axes, so no free-licensed photograph shows the complete weapon. Photograph used with maker credit and a link to the source page.'
}

e.sectionImages = [
  ...(e.sectionImages ?? []),
  {
    section: 'Regional variations and examples',
    src: old.image,
    alt: old.info?.caption ?? 'Close view of a Dane axe head.',
    caption: 'The head alone, showing the thin, broadly flared blade and the pronounced beard at its lower edge.',
    creator: old.info?.creator ?? 'Unknown',
    date: old.info?.date ?? '',
    source: old.info?.source ?? 'Wikimedia Commons',
    sourceUrl: old.info?.sourceUrl ?? '',
    note:
      'A detail view, which is how surviving axes are almost always photographed — the thin blade and wide edge are what archaeologists classify on, and the wooden haft rarely survives at all.'
  }
]

console.log('dane-axe: principal -> /dane-axe-wulflund.jpg (maker photograph, credited)')
writeFileSync(dataPath, JSON.stringify(data, null, 2))
console.log('history.json written')
