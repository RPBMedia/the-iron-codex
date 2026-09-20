/**
 * Fetch OpenHistoricalMap boundaries for the map's second reconstruction
 * (QUEUE 0v, the alternative-reconstruction selector).
 *
 *   node scripts/fetch-ohm-source.mjs
 *
 * WHY A SECOND SOURCE AT ALL. `historical-basemaps` publishes eleven dated files
 * inside 476–1453 and no more, so the map could not change more often than about
 * once a century, and it has holes — northern Germany and the Baltic are blank at
 * 1200 while being mapped either side of it. Neither can be fixed from that
 * source: drawing a polygon or carrying 1100's forward into 1200 is the invented
 * claim the brief forbids.
 *
 * OHM fixes both, because it does not work in keyframes at all: every feature
 * carries `start_date` and `end_date`, so ANY year can be asked for. Around 1200
 * Aragon exists as three separate versions, the Holy Roman Empire splits at 1201,
 * Sicily and Normandy at 1204.
 *
 * WHY IT IS A SECOND SOURCE AND NOT A REPLACEMENT. OHM is dense in Europe and
 * thin outside it — at 1200 it has 102 features in core Europe and 2 in Egypt and
 * the Levant, where the brief explicitly requires coverage. And the two disagree:
 * OHM's Holy Roman Empire at 1200 reaches over Brandenburg while
 * historical-basemaps' stops short of Berlin. Splicing them would give one polity
 * two extents in one year — the composite the brief names and forbids. So the
 * reader picks a reconstruction and sees it whole.
 *
 * WHAT THIS SCRIPT DOES, AND WHY IN THIS SHAPE. Relations persist across decades:
 * one valid 1164–1200 appears in every decade slice between. Fetching per year
 * would pull the same geometry dozens of times and hammer a volunteer-run API, so
 * geometry is fetched ONCE PER RELATION and the years are sliced locally by
 * `build-ohm-snapshots.mjs`.
 *
 * Licence: OHM's database is CC0. Some individual features may be CC-BY or
 * CC-BY-SA, so the map attributes it regardless.
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const outDir = join(root, 'server', 'data', 'map', 'source', 'ohm')
const rawDir = join(outDir, 'raw')

const ENDPOINT = 'https://overpass-api.openhistoricalmap.org/api/interpreter'

/** Must match CANVAS in build-map-snapshots.mjs. */
const CANVAS = { west: -25, east: 65, south: 10, north: 72 }
const FIRST_YEAR = 476
const LAST_YEAR = 1453

/**
 * Sovereign polities and their major subdivisions only.
 *
 * Level 4 and below is counties, bishoprics and free cities — 400 more features,
 * a map too busy to read at this scale, and 400 more territories owing an article
 * under queue item 0w. Level 2 alone came out sparse in places. 2 and 3 is the cut
 * that matches what the other source draws.
 */
const ADMIN_LEVELS = ['2', '3']

/** Overpass is volunteer-run. Batches keep each request modest and resumable. */
const BATCH_SIZE = 40

const pad = (year) => String(year).padStart(4, '0')

async function overpass(query, label) {
  const response = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ data: query })
  })
  if (!response.ok) throw new Error(`${label}: Overpass returned ${response.status}`)
  return response.json()
}

/** Every relation whose lifetime overlaps the period, tags only. Cheap. */
async function fetchUniverse() {
  const levels = ADMIN_LEVELS.join('|')
  const query = `[out:json][timeout:180];
relation["boundary"="administrative"]["admin_level"~"^(${levels})$"]["start_date"]
  (if: t["start_date"] < "${pad(LAST_YEAR + 1)}" && (!is_tag("end_date") || t["end_date"] > "${pad(FIRST_YEAR)}"))
  (${CANVAS.south},${CANVAS.west},${CANVAS.north},${CANVAS.east});
out ids tags;`
  const data = await overpass(query, 'universe')
  return (data.elements ?? []).filter((r) => r.tags?.name)
}

/** Geometry for a batch of relation ids. */
async function fetchGeometry(ids) {
  const query = `[out:json][timeout:180];relation(id:${ids.join(',')});out geom;`
  return overpass(query, `geometry ${ids[0]}…`)
}

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

async function main() {
  mkdirSync(rawDir, { recursive: true })

  console.log('Asking OHM which boundaries overlap 476–1453…')
  const universe = await fetchUniverse()
  console.log(`  ${universe.length} relations at admin_level ${ADMIN_LEVELS.join(' and ')}\n`)

  const manifest = {
    fetched: new Date().toISOString().slice(0, 10),
    endpoint: ENDPOINT,
    source: 'OpenHistoricalMap',
    sourceUrl: 'https://www.openhistoricalmap.org/',
    license: 'CC0 (some individual features CC-BY or CC-BY-SA)',
    canvas: CANVAS,
    adminLevels: ADMIN_LEVELS,
    relations: universe.map((r) => ({
      id: r.id,
      name: r.tags.name,
      adminLevel: r.tags.admin_level,
      start: r.tags.start_date ?? null,
      end: r.tags.end_date ?? null,
      wikidata: r.tags.wikidata ?? null
    }))
  }
  writeFileSync(join(outDir, 'manifest.json'), JSON.stringify(manifest, null, 1))
  console.log('Wrote manifest.json\n')

  const ids = universe.map((r) => r.id)
  const batches = []
  for (let i = 0; i < ids.length; i += BATCH_SIZE) batches.push(ids.slice(i, i + BATCH_SIZE))

  for (const [index, batch] of batches.entries()) {
    const file = join(rawDir, `batch-${String(index).padStart(3, '0')}.json`)
    // Resumable: a run interrupted halfway picks up where it stopped rather than
    // asking a volunteer-run API for 85 MB it already served.
    if (existsSync(file)) {
      console.log(`  batch ${index + 1}/${batches.length} already on disk`)
      continue
    }
    process.stdout.write(`  batch ${index + 1}/${batches.length} (${batch.length} relations)… `)
    const data = await fetchGeometry(batch)
    writeFileSync(file, JSON.stringify(data))
    console.log(`${Math.round(Buffer.byteLength(JSON.stringify(data)) / 1024)} KB`)
    await sleep(1200)
  }

  const total = readdirSync(rawDir).reduce(
    (sum, f) => sum + readFileSync(join(rawDir, f)).length,
    0
  )
  console.log(`\nDone. ${batches.length} batches, ${Math.round(total / 1024 / 1024)} MB raw.`)
  console.log('Next: node scripts/build-ohm-snapshots.mjs')
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
