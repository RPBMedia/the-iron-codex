/**
 * The interactive historical map: projection, snapshot resolution, path building
 * (QUEUE 0v).
 *
 * Plain ESM on purpose — no JSX, no import.meta.env, no browser globals — so the
 * Node test runner and the SSR render gate can both import it directly, the same
 * constraint `pageTitles.js` and `locatorMaps.js` already live under.
 *
 * The Mercator helper is `mercY` from `locatorMaps.js` rather than a second copy.
 * There is one projection in this codebase and it stays that way.
 */

import { mercY } from './locatorMaps.js'

/**
 * The years we hold evidence for. Not a choice of "interesting dates": these are the
 * three files the source actually publishes inside 476–1453 that we audited and kept.
 * See `server/data/map/source/SOURCE.md`.
 */
export const SNAPSHOT_YEARS = [800, 1100, 1400]

/** The Codex's period. The slider spans all of it; the evidence does not. */
export const FIRST_YEAR = 476
export const LAST_YEAR = 1453

/** Must match CANVAS in `scripts/build-map-snapshots.mjs`. */
export const CANVAS = { west: -25, east: 65, south: 10, north: 72 }

/**
 * The SVG viewBox. Width is arbitrary; height is derived so that a degree of
 * longitude and a degree of latitude keep Mercator's own ratio. Hard-coding a
 * height would stretch Scandinavia or squash the Levant.
 */
export const VIEW_WIDTH = 1000
export const VIEW_HEIGHT = Math.round(
  (VIEW_WIDTH * (mercY(CANVAS.north) - mercY(CANVAS.south))) / ((CANVAS.east - CANVAS.west) * (Math.PI / 180))
)

/** lon/lat → viewBox units. */
export function projectPoint(lon, lat) {
  const x = ((lon - CANVAS.west) / (CANVAS.east - CANVAS.west)) * VIEW_WIDTH
  const top = mercY(CANVAS.north)
  const y = ((top - mercY(lat)) / (top - mercY(CANVAS.south))) * VIEW_HEIGHT
  return [x, y]
}

const ringToPath = (ring) => {
  let d = ''
  for (let i = 0; i < ring.length; i++) {
    const [x, y] = projectPoint(ring[i][0], ring[i][1])
    d += `${i === 0 ? 'M' : 'L'}${x.toFixed(1)} ${y.toFixed(1)}`
  }
  return `${d}Z`
}

/**
 * One `d` string **per polygon**, not one per feature.
 *
 * This looked like a needless split until the map was on screen: joining a
 * MultiPolygon's parts into a single path and filling it `evenodd` means any two
 * parts that overlap cancel each other and punch a hole straight through to the
 * sea. The source has plenty of those — a polity's territories are drawn
 * independently and are not guaranteed to be disjoint — so the 1400 map came out
 * with black gaps across Italy, the Balkans, Anatolia and the Nile, and they moved
 * as you scrubbed because each snapshot overlaps differently. They read as holes in
 * the world, which on a map whose whole point is that blank ground means "no
 * evidence" is the worst possible artefact.
 *
 * `evenodd` still applies *within* a polygon, which is what makes an enclave a real
 * hole rather than more of the same territory. Keeping each polygon separate means
 * the rule only ever sees rings that belong together.
 */
export function pathsForFeature(feature) {
  const polygons =
    feature.geometry.type === 'Polygon' ? [feature.geometry.coordinates] : feature.geometry.coordinates
  return polygons.map((rings) => rings.map(ringToPath).join(''))
}

/**
 * Which snapshot to show for a requested year.
 *
 * The rule is **the nearest source date at or before the year**, and the direction
 * matters more than the distance. Showing a later snapshot would put polities on the
 * map before they existed — the Ottomans in 1100 — which is a fabricated historical
 * claim rather than a rounding error. Showing an earlier one is merely out of date,
 * and the UI says by how much.
 *
 * Before the first snapshot there is nothing to show, and the map is deliberately
 * empty. `reason: 'before-evidence'` is not an error state: blank ground here means
 * no snapshot covers it, never that the land was empty or unruled.
 */
export function resolveSnapshot(year) {
  const candidates = SNAPSHOT_YEARS.filter((y) => y <= year)
  if (!candidates.length) {
    return { evidenceYear: null, gap: null, reason: 'before-evidence', nextYear: SNAPSHOT_YEARS[0] }
  }
  const evidenceYear = candidates[candidates.length - 1]
  return {
    evidenceYear,
    gap: year - evidenceYear,
    reason: year === evidenceYear ? 'exact' : 'nearest-before',
    nextYear: SNAPSHOT_YEARS.find((y) => y > year) ?? null
  }
}

/** The previous/next source date relative to a year, for the jump buttons. */
export const previousSnapshot = (year) => [...SNAPSHOT_YEARS].reverse().find((y) => y < year) ?? null
export const nextSnapshot = (year) => SNAPSHOT_YEARS.find((y) => y > year) ?? null

const clampYear = (value) => Math.min(LAST_YEAR, Math.max(FIRST_YEAR, value))

/** Parse the `year` query parameter. Anything unusable falls back to 1100. */
export function yearFromParam(value) {
  const parsed = Number.parseInt(value ?? '', 10)
  return Number.isFinite(parsed) ? clampYear(parsed) : 1100
}

export const snapshotUrl = (evidenceYear) => `/map-data/snapshot-${evidenceYear}.json`

/**
 * The sentence under the year. This is the feature's whole honesty budget in one
 * string, so it lives here next to the resolution rule rather than in the component,
 * and it is a plain function so a test can read it.
 */
export function evidenceSentence(year, resolution) {
  if (resolution.reason === 'before-evidence') {
    return `No mapped evidence for ${year}. This map's earliest source date is ${resolution.nextYear}. Blank ground means no snapshot covers it — not that the land was empty or unruled.`
  }
  if (resolution.reason === 'exact') {
    return `These borders are the source's own dated reconstruction for ${resolution.evidenceYear}.`
  }
  const years = resolution.gap === 1 ? '1 year' : `${resolution.gap} years`
  return `These borders are the source's reconstruction for ${resolution.evidenceYear}, ${years} before the year you selected. Nothing here is a reconstruction of ${year}.`
}

/** Where a polygon's article lives, in the archive's own route vocabulary. */
export function articleHref(properties) {
  if (!properties.slug) return null
  const collection = { location: 'locations', house: 'houses', order: 'orders' }[properties.linkType]
  return collection ? `/${collection}/${properties.slug}` : null
}
