/**
 * Build the interactive map's snapshot files (QUEUE 0v).
 *
 *   node scripts/build-map-snapshots.mjs
 *
 * Reads the immutable upstream originals in `server/data/map/source/`, clips them
 * to the canvas the brief defines, resolves each polity to a Codex article through
 * `server/data/map/polity-slugs.json`, simplifies, and writes
 * `client/public/map-data/snapshot-<year>.json`.
 *
 * Run by hand and commit the output, the way `update-content-dates.mjs` is run.
 * It is deliberately NOT in `vercel-build`: the build must not depend on geometry
 * that only changes when someone decides it should.
 *
 * Why the output lives in `client/public/` and not in a JS module: it is fetched at
 * runtime, so it never enters the application bundle. That matters twice over. The
 * app has no code splitting, so anything imported lands on all 923 article pages;
 * and the source data is GPL-3.0, so keeping it as a separate, separately-licensed
 * static file is the cautious reading. The two constraints happen to agree.
 *
 * Note `client/public/assets/` is forbidden (it collides with Vite's `dist/assets/`),
 * which is why the directory is `client/public/map-data/`.
 */

import { readFileSync, writeFileSync, mkdirSync, readdirSync } from 'node:fs'
import { createHash } from 'node:crypto'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const sourceDir = join(root, 'server', 'data', 'map', 'source')
const outDir = join(root, 'client', 'public', 'map-data')

export const SNAPSHOT_YEARS = [500, 600, 700, 800, 900, 1000, 1100, 1200, 1279, 1300, 1400]

/**
 * The canvas, as section 2 of the brief defines it: the British Isles and Atlantic
 * Europe, all of Scandinavia and Iceland, central/southern/eastern Europe, the
 * Byzantine world, Anatolia, the Levant and the whole crusading theatre, North
 * Africa across to Egypt, and enough of the Caucasus and Black Sea hinterland not
 * to clip anything that matters.
 *
 * West to -25 so Iceland is inside it; east to 65 for the Caspian and the Oxus
 * borderlands; south to 10 for the Sahel edge of the North African states; north to
 * 72 for the Norwegian and Sámi north. The brief is explicit that Cyprus, Jerusalem,
 * Egypt, Constantinople and Iceland must never be cut off, and tests/map-geometry
 * asserts exactly that against real coordinates.
 *
 * The upstream files are whole-world. Clipping here rather than in the client keeps
 * roughly two thirds of each file — the Americas, East Asia, Oceania — off the wire
 * entirely. None of it is in the Codex's 476–1453 scope and none of it would link to
 * an article.
 */
export const CANVAS = { west: -25, east: 65, south: 10, north: 72 }

/** ~110 m at the equator. Far finer than any frontier here is actually known. */
const COORD_DECIMALS = 3

/**
 * Douglas–Peucker tolerance in degrees.
 *
 * Was 0.02° (about 2 km), chosen when the map was a small static figure. Pan and
 * zoom made that visible — at the tightest camera the viewport is about 5.4° wide,
 * so a 2 km chord is a straight line several pixels long where a coastline should
 * be, and Greece and Dalmatia looked faceted.
 *
 * 0.005° measured on 2026-09-20 across all eleven snapshots:
 *
 *     tolerance   worst snapshot   all eleven
 *     0.02°       121 KB           1188 KB
 *     0.01°       141 KB           1328 KB
 *     0.005°      156 KB           1414 KB
 *     0.002°      171 KB           1500 KB
 *
 * Four times the detail for 29% more bytes, because the upstream geometry is itself
 * coarse enough that there is not much left to throw away — which is also why 0.002°
 * buys so little over 0.005° and was not taken.
 */
const SIMPLIFY_TOLERANCE = 0.005

/**
 * The coastline is simplified harder than the politics. It is background: nobody
 * reads a conclusion off the shape of the Adriatic, and at 50m resolution it is the
 * single largest file the map fetches. 0.02° on ne_50m is 183 KB against 240 KB at
 * 0.01°, and still far more detailed than ne_110m, which was 26 KB and visibly
 * polygonal once zoom existed.
 */
const LAND_SIMPLIFY_TOLERANCE = 0.02

const readJson = (path) => JSON.parse(readFileSync(path, 'utf8'))

const mapping = readJson(join(root, 'server', 'data', 'map', 'polity-slugs.json'))

// ---------------------------------------------------------------------------
// Geometry
// ---------------------------------------------------------------------------

/**
 * Perpendicular distance from p to the segment ab, in degrees.
 * Plain planar maths on lon/lat: at this tolerance the error from ignoring the
 * projection is far smaller than the tolerance itself.
 */
function pointSegmentDistance(p, a, b) {
  const dx = b[0] - a[0]
  const dy = b[1] - a[1]
  if (dx === 0 && dy === 0) return Math.hypot(p[0] - a[0], p[1] - a[1])
  const t = Math.max(0, Math.min(1, ((p[0] - a[0]) * dx + (p[1] - a[1]) * dy) / (dx * dx + dy * dy)))
  return Math.hypot(p[0] - (a[0] + t * dx), p[1] - (a[1] + t * dy))
}

/** Douglas–Peucker. Iterative rather than recursive: some rings here are long. */
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
  // A ring needs four positions to be a ring at all, and the last must repeat the
  // first. Simplifying below that produces geometry no validator will accept, so
  // give up on this ring instead and let the caller drop it.
  return out.length >= 4 ? out : null
}

const round = (n) => Number(n.toFixed(COORD_DECIMALS))

/** A ring survives if any of its vertices is inside the canvas. */
const ringTouchesCanvas = (ring) =>
  ring.some(([x, y]) => x >= CANVAS.west && x <= CANVAS.east && y >= CANVAS.south && y <= CANVAS.north)

function closeRing(ring) {
  const first = ring[0]
  const last = ring[ring.length - 1]
  if (first[0] !== last[0] || first[1] !== last[1]) return [...ring, [first[0], first[1]]]
  return ring
}

/**
 * Clip and simplify one polygon's rings. Returns null when nothing survives.
 * Note this keeps whole rings rather than cutting them at the canvas edge: a
 * cut ring needs new vertices along the boundary, and inventing vertices — even
 * honest ones — is the kind of thing this feature has to be careful about. Rings
 * that merely overhang the edge are left whole and the viewport hides the rest.
 */
function processPolygon(rings, tolerance) {
  const out = []
  for (const ring of rings) {
    if (!ringTouchesCanvas(ring)) continue
    const simplified = simplifyRing(ring, tolerance)
    if (!simplified) continue
    out.push(closeRing(simplified.map(([x, y]) => [round(x), round(y)])))
  }
  // Rings after the first are holes. A polygon whose outer ring vanished is gone.
  return out.length ? out : null
}

function processGeometry(geometry, tolerance = SIMPLIFY_TOLERANCE) {
  if (geometry?.type === 'Polygon') {
    const rings = processPolygon(geometry.coordinates, tolerance)
    return rings ? { type: 'Polygon', coordinates: rings } : null
  }
  if (geometry?.type === 'MultiPolygon') {
    const polygons = geometry.coordinates.map((rings) => processPolygon(rings, tolerance)).filter(Boolean)
    return polygons.length ? { type: 'MultiPolygon', coordinates: polygons } : null
  }
  return null
}

const countPositions = (coordinates) => {
  let n = 0
  const walk = (c) => {
    if (typeof c[0] === 'number') n++
    else c.forEach(walk)
  }
  walk(coordinates)
  return n
}

// ---------------------------------------------------------------------------
// Build
// ---------------------------------------------------------------------------

function buildSnapshot(year) {
  const file = `world_${year}.geojson`
  const raw = readFileSync(join(sourceDir, file), 'utf8')
  const source = JSON.parse(raw)

  const dropped = []
  const features = []
  let rawPositions = 0
  let keptPositions = 0

  for (const feature of source.features) {
    const name = feature.properties?.NAME
    if (!name) continue

    const drop = mapping.dropFrom[name]
    if (drop && drop.years.includes(year)) {
      if (!dropped.includes(name)) dropped.push(name)
      continue
    }

    rawPositions += countPositions(feature.geometry.coordinates)
    const geometry = processGeometry(feature.geometry)
    if (!geometry) continue
    keptPositions += countPositions(geometry.coordinates)

    /*
     * A mapping may carry `years`, and when it does the link applies ONLY in those
     * snapshots. This exists because a name is not a polity across time: the
     * source's "Seljuk Caliphate" is the Sultanate of Rum in 1279 and 1300 and a
     * state two centuries dead in 1400, and "Serbia" in 1100 is not the polity the
     * Codex's Serbia article covers (1371-1459).
     *
     * Out of range the polygon is drawn and named like any other unlinked one. It
     * is never linked to "the closest article", because a wrong link is worse than
     * a missing one.
     */
    const candidate = mapping.polities[name] ?? null
    const link = candidate && (!candidate.years || candidate.years.includes(year)) ? candidate : null
    features.push({
      type: 'Feature',
      properties: {
        name,
        // Every feature in every in-scope file is BORDERPRECISION 1. Carried through
        // rather than assumed, so a future source with better data is not silently
        // reported as approximate.
        borderPrecision: feature.properties.BORDERPRECISION ?? null,
        subjectTo: feature.properties.SUBJECTO || null,
        partOf: feature.properties.PARTOF || null,
        slug: link?.slug ?? null,
        linkType: link?.type ?? null,
        linkNote: link?.note ?? null,
        gapNote: link
          ? null
          : (candidate?.outOfRangeNote ?? mapping.knownGaps[name] ?? null)
      },
      geometry
    })
  }

  const names = [...new Set(features.map((f) => f.properties.name))]
  const linked = names.filter((n) => mapping.polities[n])

  return {
    type: 'FeatureCollection',
    properties: {
      evidenceYear: year,
      canvas: CANVAS,
      source: 'historical-basemaps by André Ourednik',
      sourceUrl: 'https://github.com/aourednik/historical-basemaps',
      sourceFile: file,
      sourceSha256: createHash('sha256').update(raw).digest('hex'),
      sourceCommit: 'da7a4b735ecef70aebdc9c73e409d8a2500d50f3',
      retrieved: '2026-09-20',
      license: 'GPL-3.0',
      simplifyTolerance: SIMPLIFY_TOLERANCE,
      coordinateDecimals: COORD_DECIMALS,
      positionsBefore: rawPositions,
      positionsAfter: keptPositions,
      polityCount: names.length,
      linkedCount: linked.length,
      droppedFeatures: dropped
    },
    features
  }
}

/**
 * The land layer (QUEUE 0v, owner report 2026-09-20).
 *
 * Without it, sea and unmapped land are painted the same near-black, so the
 * Mediterranean, the Atlantic and the Sahara are indistinguishable and all three
 * read as holes punched in the world. On a map whose central claim is that blank
 * ground means "no evidence here", that is the exact wrong reading: it says the
 * land was not there, rather than that we do not know who held it.
 *
 * With land underneath, water is water and unmapped ground is visibly land with no
 * snapshot over it.
 *
 * Natural Earth, and its terms are unusually plain: "No permission is needed to use
 * Natural Earth. Crediting the authors is unnecessary." Public domain, so unlike the
 * political geometry there is no licence question to carry. 110m rather than 50m —
 * at this canvas the coastline detail is invisible and 110m is a twelfth of the
 * bytes.
 */
function buildLand() {
  const file = 'ne_50m_land.geojson'
  const raw = readFileSync(join(sourceDir, file), 'utf8')
  const source = JSON.parse(raw)

  const features = []
  for (const feature of source.features) {
    const geometry = processGeometry(feature.geometry, LAND_SIMPLIFY_TOLERANCE)
    if (geometry) features.push({ type: 'Feature', properties: {}, geometry })
  }

  return {
    type: 'FeatureCollection',
    properties: {
      source: 'Natural Earth (ne_50m_land)',
      sourceUrl: 'https://www.naturalearthdata.com/',
      sourceFile: file,
      sourceSha256: createHash('sha256').update(raw).digest('hex'),
      retrieved: '2026-09-20',
      license: 'Public domain',
      simplifyTolerance: LAND_SIMPLIFY_TOLERANCE,
      note: 'Physical coastline only. It carries no political information and is not evidence of anything: it is there so that water reads as water and unmapped land reads as land.'
    },
    features
  }
}

mkdirSync(outDir, { recursive: true })

const land = buildLand()
writeFileSync(join(outDir, 'land.json'), JSON.stringify(land))
console.log(`land.json: ${land.features.length} features, ${Math.round(Buffer.byteLength(JSON.stringify(land)) / 1024)} KB\n`)

const summary = []
for (const year of SNAPSHOT_YEARS) {
  const snapshot = buildSnapshot(year)
  const target = join(outDir, `snapshot-${year}.json`)
  writeFileSync(target, JSON.stringify(snapshot))
  const bytes = readdirSync(outDir, { withFileTypes: true }) && Buffer.byteLength(JSON.stringify(snapshot))
  const p = snapshot.properties
  summary.push({
    year,
    features: snapshot.features.length,
    polities: p.polityCount,
    linked: p.linkedCount,
    kb: Math.round(bytes / 1024),
    reduction: `${Math.round((1 - p.positionsAfter / p.positionsBefore) * 100)}%`,
    dropped: p.droppedFeatures.join(', ') || '—'
  })
}

console.table(summary)
console.log(`\nWrote ${SNAPSHOT_YEARS.length} snapshots to client/public/map-data/`)
