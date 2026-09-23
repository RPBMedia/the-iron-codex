/**
 * Write the archive's read-only data as static files the CDN can serve.
 *
 * ⚠️ WHY THIS EXISTS (2026-09-23). The header search box fetched all eight
 * collections — 9.5 MB — through the server function on every visit, and the
 * archive pages and article pages fetched theirs the same way, uncached. That
 * pushed the site past Vercel's free 10 GB a month of Fast Origin Transfer,
 * which is only charged for traffic through a function. Static files do not
 * touch it. So the build writes, into client/dist/data/:
 *
 *   collections/<collection>.json    card versions (lib/archiveCards.js)
 *   text/<collection>.json           folded full text for the archive search box
 *   articles/<collection>/<id>.json  each article, enriched exactly as the API does
 *   search-index.json                the header search index, prebuilt
 *
 * The client reads these first and falls back to the API (lib/api.js), so the
 * API still works for `npm run dev` and for ids moved between collections.
 *
 * Runs after `vite build` (which empties dist/). Fails loudly on anything
 * missing: a silent fallback in production would put the traffic back on the
 * function without anyone noticing.
 *
 *   node scripts/build-static-data.mjs
 */
import { mkdirSync, rmSync, writeFileSync, existsSync } from 'node:fs'
import path from 'node:path'
import { gzipSync } from 'node:zlib'
import { fileURLToPath } from 'node:url'
import { loadArchive } from '../server/data/archive.mjs'
// The SAME enrichment the API applies, so a static article and an API article
// can never disagree.
import { enrichArticle } from '../server/article-enrichment.js'
import { cardFor } from '../client/src/lib/archiveCards.js'
import { foldedTextMap } from '../client/src/lib/archiveText.js'
import { buildSearchIndex } from '../client/src/lib/search.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const distDir = path.join(__dirname, '..', 'client', 'dist')
const outDir = path.join(distDir, 'data')

if (!existsSync(path.join(distDir, 'index.html'))) {
  console.error('build-static-data: client/dist has no index.html. Run the client build first.')
  process.exit(1)
}

const data = loadArchive()
// Keyed as the server's collections() is, which enrichArticle expects.
const collections = {
  events: data.events,
  characters: data.characters,
  locations: data.locations,
  artifacts: data.artifacts,
  weaponsArmor: data.weaponsArmor ?? [],
  houses: data.houses ?? [],
  orders: data.orders ?? [],
  civilizations: data.civilizations ?? []
}

const PUBLIC_NAME = { characters: 'people', weaponsArmor: 'weapons-armor' }
const publicName = (collection) => PUBLIC_NAME[collection] ?? collection
// The API returns events in date order; the files keep that order.
const ordered = (collection, items) =>
  collection === 'events' ? [...items].sort((a, b) => (a.year ?? a.born ?? 0) - (b.year ?? b.born ?? 0)) : items

rmSync(outDir, { recursive: true, force: true })

const totals = { files: 0, raw: 0, gz: 0 }
const sizes = {}
function write(relative, value) {
  const file = path.join(outDir, relative)
  mkdirSync(path.dirname(file), { recursive: true })
  const body = Buffer.from(JSON.stringify(value))
  writeFileSync(file, body)
  const gz = gzipSync(body).length
  totals.files += 1
  totals.raw += body.length
  totals.gz += gz
  return gz
}

const SAFE_ID = /^[a-z0-9][a-z0-9-]*$/
for (const [collection, items] of Object.entries(collections)) {
  const name = publicName(collection)
  const list = ordered(collection, items)
  sizes[name] = write(`collections/${name}.json`, list.map(cardFor))
  write(`text/${name}.json`, foldedTextMap(list, name))

  for (const article of list) {
    // A file name the URL can reach unencoded; anything else would 404 on the
    // CDN and quietly fall back to the function.
    if (!SAFE_ID.test(article.id)) {
      console.error(`build-static-data: article id "${article.id}" in ${name} is not a plain slug.`)
      process.exit(1)
    }
    write(`articles/${name}/${article.id}.json`, enrichArticle(article, collections))
  }
}

// The header search index: the same entries the browser used to build itself.
const searchIndex = buildSearchIndex({
  people: collections.characters,
  events: collections.events,
  locations: collections.locations,
  artifacts: collections.artifacts,
  weaponsArmor: collections.weaponsArmor,
  houses: collections.houses,
  orders: collections.orders
})
const indexGz = write('search-index.json', searchIndex)

const articleCount = Object.values(collections).reduce((sum, items) => sum + items.length, 0)
const kb = (bytes) => `${Math.round(bytes / 1024)} KB`
console.log(
  `build-static-data: ${articleCount} articles, ${totals.files} files, ${kb(totals.raw)} (${kb(totals.gz)} gzipped). ` +
    `Cards gzipped: ${Object.entries(sizes).map(([k, v]) => `${k} ${kb(v)}`).join(', ')}. Search index ${kb(indexGz)} gzipped.`
)
