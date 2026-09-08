/**
 * Per-article last-modified dates for the sitemap.
 *
 * THE PROBLEM THIS FIXES. The sitemap stamped every URL with the BUILD date, so
 * each deploy told Google that all 817 pages had changed — including the 800 that
 * had not. Google treats `lastmod` as a hint and stops trusting it when a site is
 * obviously lying, which costs exactly the thing the field is for: prompt
 * recrawling of the handful of pages that genuinely did change.
 *
 * HOW IT WORKS. Each article is hashed on its content-bearing fields only, and
 * the hash is compared with the committed record in `server/data/content-dates.json`.
 * A changed hash means the article really was edited, and only then does its date
 * move to today. Untouched articles keep the date they have had for months.
 *
 * The hash deliberately EXCLUDES nothing structural — it covers prose, timeline,
 * images and related entries — because all of those change what a reader and a
 * crawler see.
 *
 * WHY IT RUNS LOCALLY AND NOT IN THE BUILD. The record has to persist between
 * builds, and a Vercel build cannot commit to the repository. So this runs as
 * part of the content workflow and the updated file is committed alongside the
 * content change, which is also the honest place for it: the date belongs to the
 * edit, not to the deploy.
 *
 *   npm run content     # this plus the social-card generator
 */
import { readFileSync, writeFileSync, existsSync } from 'node:fs'
import { createHash } from 'node:crypto'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')
const datesPath = path.join(root, 'server', 'data', 'content-dates.json')
const data = JSON.parse(readFileSync(path.join(root, 'server', 'data', 'history.json'), 'utf8'))

const pub = (c) => (c === 'characters' ? 'people' : c === 'weaponsArmor' ? 'weapons-armor' : c)
const today = new Date().toISOString().slice(0, 10)

/** Everything that changes what a reader or a crawler sees. */
const fingerprint = (a) => createHash('sha256').update(JSON.stringify({
  name: a.name, summary: a.summary, overview: a.overview, details: a.details,
  contentSections: a.contentSections, timeline: a.timeline,
  image: a.image, imageInfo: a.imageInfo, sectionImages: a.sectionImages,
  relatedEntries: a.relatedEntries, quickFacts: a.quickFacts,
  succession: a.succession, participants: a.participants, sources: a.sources
})).digest('hex').slice(0, 16)

const previous = existsSync(datesPath) ? JSON.parse(readFileSync(datesPath, 'utf8')) : { articles: {} }
const first = !existsSync(datesPath)

const next = { generated: today, articles: {} }
let changed = 0, unchanged = 0
const changedIds = []

for (const [collection, arr] of Object.entries(data)) {
  if (!Array.isArray(arr)) continue
  for (const a of arr) {
    const key = `${pub(collection)}/${a.id}`
    const hash = fingerprint(a)
    const prior = previous.articles[key]
    if (prior && prior.hash === hash) {
      next.articles[key] = prior
      unchanged++
    } else {
      next.articles[key] = { hash, date: today }
      changed++
      if (prior) changedIds.push(key)
    }
  }
}

// Articles deleted from the archive simply drop out of the record.
const removed = Object.keys(previous.articles ?? {}).filter((k) => !next.articles[k])

writeFileSync(datesPath, JSON.stringify(next, null, 2))

if (first) {
  console.log(`Seeded ${changed} articles at ${today}.`)
  console.log('This first run dates everything today, which is unavoidable — there is')
  console.log('no record of when each article was last edited. From here it tracks real')
  console.log('changes, and untouched articles will keep this date.')
} else {
  console.log(`${changed} changed, ${unchanged} unchanged, ${removed.length} removed.`)
  if (changedIds.length) {
    console.log(`\nDated ${today}:`)
    for (const id of changedIds.slice(0, 25)) console.log(`  ${id}`)
    if (changedIds.length > 25) console.log(`  ... and ${changedIds.length - 25} more`)
  }
  if (changed === 0) console.log('\nNothing to commit — no article content changed.')
}
