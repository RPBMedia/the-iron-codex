/**
 * Slice the OpenHistoricalMap download into dated snapshots (QUEUE 0v).
 *
 *   node scripts/fetch-ohm-source.mjs     # once, downloads the geometry
 *   node scripts/build-ohm-snapshots.mjs  # this, slices it by year
 *
 * The point of this source is that it has no keyframes. Every feature carries
 * `start_date` and `end_date`, so the years below are OUR choice rather than
 * whatever a publisher happened to draw — which is the whole reason the owner
 * asked for finer steps than a century.
 *
 * Every snapshot here is therefore an EXACT reconstruction of its year, not the
 * nearest one before it. That is a real difference in kind from the
 * historical-basemaps snapshots and the map says so: with this source selected
 * there is no gap between the year chosen and the year drawn.
 *
 * Geometry comes from relations, so a polity is assembled from its member ways
 * rather than read as a ready-made polygon. That assembly is the bulk of this
 * file and the fiddly part: OHM's ways arrive unordered and in arbitrary
 * direction, and have to be stitched end-to-end into closed rings.
 */

import { readFileSync, writeFileSync, mkdirSync, readdirSync, existsSync } from 'node:fs'
import { createHash } from 'node:crypto'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const sourceDir = join(root, 'server', 'data', 'map', 'source', 'ohm')
const rawDir = join(sourceDir, 'raw')
const outDir = join(root, 'client', 'public', 'map-data', 'ohm')

const CANVAS = { west: -25, east: 65, south: 10, north: 72 }
const COORD_DECIMALS = 3
/**
 * Harder than the other source's 0.005 degrees, and deliberately so.
 *
 * OHM traces real coastlines at survey resolution, where historical-basemaps
 * ships geometry that is already generalised — so at an identical tolerance the
 * OHM snapshots came out 300 to 475 KB against 60 to 134 KB, three to four times
 * the budget, for detail invisible at this canvas. 0.02 degrees brings them into
 * the same range as the maps they sit beside, which also means the two
 * reconstructions are compared on their history rather than on their smoothness.
 */
const SIMPLIFY_TOLERANCE = 0.02

/**
 * Every ten years, which is what the owner asked for. 476 and 1453 are included
 * as the period's own endpoints even though they are not round numbers: a reader
 * who drags to either end should see a map, not a message about coverage.
 */
export const OHM_YEARS = (() => {
  const years = [476]
  for (let y = 480; y <= 1450; y += 10) years.push(y)
  years.push(1453)
  return years
})()

const pad = (year) => String(year).padStart(4, '0')

/**
 * OHM dates are ISO-ish strings: "1204", "1191-07-12", "0124". Comparing them as
 * strings works because they are zero-padded and most-significant-first — which is
 * why the fetcher pads the years it queries with too.
 */
const activeAt = (tags, year) => {
  const start = tags.start_date
  if (!start) return false
  const y = pad(year)
  if (start > `${y}-12-31`) return false
  const end = tags.end_date
  return !end || end >= y
}

// ---------------------------------------------------------------------------
// Ring assembly
// ---------------------------------------------------------------------------

const key = ([lon, lat]) => `${lon.toFixed(7)},${lat.toFixed(7)}`
const same = (a, b) => key(a) === key(b)

/**
 * Stitch a relation's member ways into closed rings.
 *
 * OHM gives the ways of a boundary in no particular order and in no particular
 * direction, so this walks them: take any unused way, then repeatedly find one
 * that starts or ends where the current chain ends, reversing it if needed, until
 * the chain closes. Whatever will not close is discarded rather than forced shut,
 * because a ring closed by joining two ends that were never adjacent is a border
 * nobody drew.
 */
function assembleRings(ways) {
  const pool = ways.filter((w) => Array.isArray(w) && w.length >= 2)
  const rings = []

  while (pool.length) {
    let chain = pool.shift().slice()
    let extended = true

    while (extended && !same(chain[0], chain[chain.length - 1])) {
      extended = false
      const tail = chain[chain.length - 1]
      for (let i = 0; i < pool.length; i++) {
        const way = pool[i]
        if (same(way[0], tail)) {
          chain = chain.concat(way.slice(1))
          pool.splice(i, 1)
          extended = true
          break
        }
        if (same(way[way.length - 1], tail)) {
          chain = chain.concat(way.slice(0, -1).reverse())
          pool.splice(i, 1)
          extended = true
          break
        }
      }
    }

    if (same(chain[0], chain[chain.length - 1]) && chain.length >= 4) rings.push(chain)
  }
  return rings
}

/** Signed area, for telling an outer ring from a hole and the big from the small. */
function ringArea(ring) {
  let area = 0
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    area += (ring[j][0] + ring[i][0]) * (ring[j][1] - ring[i][1])
  }
  return area / 2
}

// ---------------------------------------------------------------------------
// Clip and simplify — same rules as the other source, so the two are comparable
// ---------------------------------------------------------------------------

function pointSegmentDistance(p, a, b) {
  const dx = b[0] - a[0]
  const dy = b[1] - a[1]
  if (dx === 0 && dy === 0) return Math.hypot(p[0] - a[0], p[1] - a[1])
  const t = Math.max(0, Math.min(1, ((p[0] - a[0]) * dx + (p[1] - a[1]) * dy) / (dx * dx + dy * dy)))
  return Math.hypot(p[0] - (a[0] + t * dx), p[1] - (a[1] + t * dy))
}

function simplifyRing(ring, tolerance) {
  if (ring.length <= 4) return ring
  const keep = new Uint8Array(ring.length)
  keep[0] = 1
  keep[ring.length - 1] = 1
  const stack = [[0, ring.length - 1]]
  while (stack.length) {
    const [first, last] = stack.pop()
    let maxDistance = 0
    let index = 0
    for (let i = first + 1; i < last; i++) {
      const d = pointSegmentDistance(ring[i], ring[first], ring[last])
      if (d > maxDistance) {
        maxDistance = d
        index = i
      }
    }
    if (maxDistance > tolerance) {
      keep[index] = 1
      stack.push([first, index], [index, last])
    }
  }
  const out = ring.filter((_, i) => keep[i])
  return out.length >= 4 ? out : null
}

const round = (n) => Number(n.toFixed(COORD_DECIMALS))

const touchesCanvas = (ring) =>
  ring.some(([x, y]) => x >= CANVAS.west && x <= CANVAS.east && y >= CANVAS.south && y <= CANVAS.north)

function prepareRing(ring) {
  if (!touchesCanvas(ring)) return null
  const simplified = simplifyRing(ring, SIMPLIFY_TOLERANCE)
  if (!simplified) return null
  const rounded = simplified.map(([x, y]) => [round(x), round(y)])
  const first = rounded[0]
  const last = rounded[rounded.length - 1]
  if (first[0] !== last[0] || first[1] !== last[1]) rounded.push([first[0], first[1]])
  return rounded.length >= 4 ? rounded : null
}

// ---------------------------------------------------------------------------
// Build
// ---------------------------------------------------------------------------

if (!existsSync(rawDir)) {
  console.error('No OHM download found. Run: node scripts/fetch-ohm-source.mjs')
  process.exit(1)
}

const manifest = JSON.parse(readFileSync(join(sourceDir, 'manifest.json'), 'utf8'))
const mapping = JSON.parse(readFileSync(join(root, 'server', 'data', 'map', 'polity-slugs.json'), 'utf8'))

/** Every relation, with its rings already assembled — done once, not per year. */
const relations = new Map()
let rawBytes = 0

for (const file of readdirSync(rawDir).sort()) {
  const text = readFileSync(join(rawDir, file), 'utf8')
  rawBytes += Buffer.byteLength(text)
  for (const element of JSON.parse(text).elements ?? []) {
    if (element.type !== 'relation' || !element.tags?.name) continue

    const outers = []
    const inners = []
    for (const member of element.members ?? []) {
      if (!member.geometry) continue
      const way = member.geometry.map((p) => [p.lon, p.lat])
      ;(member.role === 'inner' ? inners : outers).push(way)
    }

    const outerRings = assembleRings(outers).map(prepareRing).filter(Boolean)
    if (!outerRings.length) continue
    const innerRings = assembleRings(inners).map(prepareRing).filter(Boolean)

    // Largest first, so a hole is matched against the ring most likely to contain
    // it and the biggest piece of a scattered polity leads its MultiPolygon.
    outerRings.sort((a, b) => Math.abs(ringArea(b)) - Math.abs(ringArea(a)))

    relations.set(element.id, {
      id: element.id,
      tags: element.tags,
      outerRings,
      innerRings
    })
  }
}

console.log(`Assembled ${relations.size} relations from ${Math.round(rawBytes / 1024 / 1024)} MB raw\n`)

mkdirSync(outDir, { recursive: true })

const summary = []
const coverage = []
const unlinkedEverywhere = new Map()

for (const year of OHM_YEARS) {
  const features = []

  for (const relation of relations.values()) {
    if (!activeAt(relation.tags, year)) continue

    const name = relation.tags.name
    // OHM's own table: it names polities in their own language and period, so the
    // other source's mapping does not reach them.
    const candidate = mapping.ohmPolities[name] ?? null
    const link = candidate && (!candidate.years || candidate.years.includes(year)) ? candidate : null

    const geometry =
      relation.outerRings.length === 1 && !relation.innerRings.length
        ? { type: 'Polygon', coordinates: [relation.outerRings[0]] }
        : {
            type: 'MultiPolygon',
            // Holes are attached to the largest outer ring rather than tested
            // against each: at this tolerance a hole that belongs elsewhere is a
            // rounding artefact, and testing containment per ring would cost more
            // than the error it prevents.
            coordinates: relation.outerRings.map((ring, i) =>
              i === 0 ? [ring, ...relation.innerRings] : [ring]
            )
          }

    features.push({
      type: 'Feature',
      properties: {
        name,
        ohmId: relation.id,
        adminLevel: relation.tags.admin_level ?? null,
        // OHM dates a feature's own lifetime, which is finer than anything the
        // other source records and worth carrying to the panel.
        validFrom: relation.tags.start_date ?? null,
        validTo: relation.tags.end_date ?? null,
        wikidata: relation.tags.wikidata ?? null,
        borderPrecision: null,
        subjectTo: null,
        partOf: null,
        slug: link?.slug ?? null,
        linkType: link?.type ?? null,
        linkNote: link?.note ?? null,
        gapNote: link ? null : (candidate?.outOfRangeNote ?? mapping.knownGaps[name] ?? null)
      },
      geometry
    })
  }

  const names = [...new Set(features.map((f) => f.properties.name))]
  const linked = names.filter((n) => features.find((f) => f.properties.name === n)?.properties.slug)

  const snapshot = {
    type: 'FeatureCollection',
    properties: {
      evidenceYear: year,
      // The distinguishing claim of this source: the year drawn IS the year asked
      // for, because the data is dated per feature rather than per published map.
      exact: true,
      canvas: CANVAS,
      source: manifest.source,
      sourceUrl: manifest.sourceUrl,
      license: manifest.license,
      retrieved: manifest.fetched,
      adminLevels: manifest.adminLevels,
      simplifyTolerance: SIMPLIFY_TOLERANCE,
      coordinateDecimals: COORD_DECIMALS,
      polityCount: names.length,
      linkedCount: linked.length
    },
    features
  }

  const json = JSON.stringify(snapshot)
  writeFileSync(join(outDir, `snapshot-${year}.json`), json)

  summary.push({ year, polities: names.length, linked: linked.length, kb: Math.round(Buffer.byteLength(json) / 1024) })
  coverage.push({ year, polities: names.length, linked: linked.length, dropped: [] })

  for (const { properties } of features) {
    if (properties.slug) continue
    const seen = unlinkedEverywhere.get(properties.name) ?? { name: properties.name, years: [], note: properties.gapNote }
    if (!seen.years.includes(year)) seen.years.push(year)
    unlinkedEverywhere.set(properties.name, seen)
  }
}

writeFileSync(
  join(outDir, 'coverage.json'),
  JSON.stringify({
    generated: new Date().toISOString().slice(0, 10),
    period: { first: 476, last: 1453 },
    sourceYears: OHM_YEARS,
    unmappedBefore: OHM_YEARS[0],
    exact: true,
    canvas: CANVAS,
    years: coverage,
    totals: {
      snapshots: OHM_YEARS.length,
      unlinkedPolities: unlinkedEverywhere.size
    },
    unlinked: [...unlinkedEverywhere.values()].sort((a, b) => a.name.localeCompare(b.name))
  })
)

const totalKb = summary.reduce((sum, row) => sum + row.kb, 0)
console.table(summary.filter((_, i) => i % 10 === 0))
console.log(`\n${OHM_YEARS.length} snapshots, ${Math.round(totalKb / 1024)} MB total`)
console.log(`${unlinkedEverywhere.size} polities with no Codex article`)
