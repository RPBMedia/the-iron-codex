/**
 * IndexNow: tell Bing (and DuckDuckGo, Yandex, and Bing-backed AI search) that
 * specific URLs changed, instead of waiting for a crawl.
 *
 * Google does not participate — for Google the sitemap is still the mechanism.
 * This is worth having anyway because Bing feeds DuckDuckGo and ChatGPT search,
 * and IndexNow submissions are typically picked up within hours rather than days.
 *
 * WHAT IT SUBMITS: only the URLs whose content actually changed, read from
 * server/data/content-dates.json. Submitting all 817 every time would be both
 * useless and a good way to get the key ignored.
 *
 * DELIBERATELY NOT PART OF THE BUILD, for two reasons: the build runs BEFORE the
 * deploy is live, so it would announce URLs that are not yet updated; and an
 * outbound announcement to a third party should be an explicit act, not a side
 * effect of pushing code.
 *
 *   npm run ping           # submit today's changed URLs
 *   npm run ping -- --dry  # show what would be submitted, send nothing
 */
import { readFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')

const HOST = 'www.theironcodex.org'
const KEY = 'f817e22a1bc37f0b422dd43f3fe86b7e'
const dry = process.argv.includes('--dry')

const { articles } = JSON.parse(readFileSync(path.join(root, 'server', 'data', 'content-dates.json'), 'utf8'))
const today = new Date().toISOString().slice(0, 10)
const changed = Object.entries(articles).filter(([, v]) => v.date === today).map(([k]) => `https://${HOST}/${k}`)

if (!changed.length) {
  console.log('Nothing changed today — nothing to submit.')
  process.exit(0)
}

console.log(`${changed.length} URL(s) changed today:`)
for (const u of changed.slice(0, 20)) console.log('  ' + u)
if (changed.length > 20) console.log(`  ... and ${changed.length - 20} more`)

if (dry) { console.log('\n--dry: nothing sent.'); process.exit(0) }

// Guard against announcing the whole archive. This fires the first time
// content-dates.json is seeded (every article gets today's date), and would fire
// again after any bulk edit. Submitting hundreds of URLs at once is useless and
// a good way to have the key ignored, so it takes an explicit override.
const BULK_LIMIT = 50
if (changed.length > BULK_LIMIT && !process.argv.includes('--force')) {
  console.log(`\nRefusing to submit ${changed.length} URLs at once (limit ${BULK_LIMIT}).`)
  console.log('This usually means content-dates.json was just seeded or a bulk edit')
  console.log('landed, not that 800 articles genuinely changed. Bing will find them')
  console.log('from the sitemap. Pass --force if you really mean it.')
  process.exit(0)
}

const response = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList: changed })
})

// 200 and 202 both mean accepted; 422 usually means the key file is unreachable.
console.log(`\nIndexNow responded ${response.status} ${response.statusText}`)
if (!response.ok) console.log(await response.text().catch(() => ''))
