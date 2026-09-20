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
 * ===========================================================================
 * TEMPORARY — the map is visible to the admin account only (owner instruction,
 * 2026-09-20). REMOVE THIS WHEN THE FEATURE IS FINISHED.
 * ===========================================================================
 *
 * The reason is not secrecy, it is that readers should not meet a half-built
 * feature. So this is a visibility gate, not a security boundary, and it is
 * worth being exact about what it does and does not do:
 *
 *   IT DOES hide the Map link from the header, and render "page not found" for
 *   anyone who reaches /map without being the admin.
 *
 *   IT DOES NOT make the map data private. The snapshots under
 *   `/map-data/*.json` are static CDN files and stay publicly fetchable by
 *   anyone who knows or guesses the URL, and MapPage's code is still in the
 *   single JS bundle. Putting the geometry behind the API would cost the CDN
 *   cache, push about a megabyte of JSON through the serverless function and
 *   need an `includeFiles` change — a large permanent cost for a temporary
 *   measure. If the requirement ever becomes genuine secrecy rather than
 *   tidiness, that is the work, and this comment is where to start.
 *
 * Admin is decided SERVER-SIDE from ADMIN_EMAIL (see `server/admin.js`) and a
 * verified Google sign-in. The address is never in this bundle; the client
 * learns only a boolean about itself. Setting it to a particular address here
 * would have undone that, which is why this reuses the existing mechanism.
 *
 * To remove: set this to false, then delete it and its three call sites —
 * `Header.jsx` (the nav item), `MapPage.jsx` (the guard) and `prerender.mjs`
 * (the stripped body). `tests/map-snapshots.test.mjs` names them too.
 */
export const MAP_IS_ADMIN_ONLY = true

/**
 * The years we hold evidence for. Not a choice of "interesting dates": these are the
 * files the source actually publishes inside 476–1453 that we audited and kept.
 * See `server/data/map/source/SOURCE.md`.
 *
 * 500, 600 and 700 were added after the owner pointed out the map was blank before
 * 800. They link very little — the Codex has few articles for post-Roman polities —
 * but a map of 500 with four linkable states is still a map of 500, and the
 * alternative was five centuries of nothing.
 */
export const SNAPSHOT_YEARS = [500, 600, 700, 800, 900, 1000, 1100, 1200, 1279, 1300, 1400]

/** Physical coastline under the politics, so water reads as water. Public domain. */
export const LAND_URL = '/map-data/land.json'

/**
 * The coverage inventory: which years are sourced, how many polities each holds,
 * and which of them the Codex has no article for. Stats only, no geometry.
 *
 * The brief's definition of done asks for "a published inventory of which periods
 * and regions remain insufficiently mapped", and it is the one deliverable a
 * finished-looking interface cannot fake. A slider spanning 476-1453 is complete
 * as an INTERFACE while the evidence behind it is eleven dated files; this is what
 * stops the first being read as the second.
 */
export const COVERAGE_URL = '/map-data/coverage.json'

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

/**
 * Camera presets, as section 2 of the brief asks for.
 *
 * Bounds are in degrees, and each is deliberately a little generous: the brief is
 * emphatic that Cyprus, Jerusalem, Egypt, Constantinople and Iceland must never be
 * clipped, and a preset that cuts the edge off its own subject is worse than no
 * preset. `tests/map-geometry.test.mjs` asserts the landmarks each one claims.
 */
export const CAMERA_PRESETS = [
  { id: 'canvas', label: 'Whole canvas', bounds: CANVAS },
  { id: 'europe', label: 'Europe', bounds: { west: -12, east: 32, south: 35, north: 62 } },
  { id: 'britain', label: 'British Isles', bounds: { west: -11, east: 3, south: 49, north: 61 } },
  { id: 'scandinavia', label: 'Scandinavia', bounds: { west: -25, east: 33, south: 53, north: 72 } },
  { id: 'iberia', label: 'Iberia', bounds: { west: -10.5, east: 5, south: 35.5, north: 44.5 } },
  { id: 'byzantium', label: 'Byzantium', bounds: { west: 14, east: 45, south: 30, north: 48 } },
  { id: 'holy-land', label: 'Holy Land & Crusades', bounds: { west: 25, east: 48, south: 27, north: 42 } },
  { id: 'mediterranean', label: 'Mediterranean', bounds: { west: -7, east: 40, south: 27, north: 47 } }
]

/** lon/lat → viewBox units. */
export function projectPoint(lon, lat) {
  const x = ((lon - CANVAS.west) / (CANVAS.east - CANVAS.west)) * VIEW_WIDTH
  const top = mercY(CANVAS.north)
  const y = ((top - mercY(lat)) / (top - mercY(CANVAS.south))) * VIEW_HEIGHT
  return [x, y]
}

/**
 * viewBox units → lon/lat. The inverse of `projectPoint`.
 *
 * Needed so the map can answer a question about a point the reader is hovering:
 * the pointer arrives in screen space, and everything that knows about history is
 * indexed by longitude and latitude.
 */
export function unprojectPoint(x, y) {
  const lon = CANVAS.west + (x / VIEW_WIDTH) * (CANVAS.east - CANVAS.west)
  const top = mercY(CANVAS.north)
  const m = top - (y / VIEW_HEIGHT) * (top - mercY(CANVAS.south))
  const lat = (2 * Math.atan(Math.exp(m)) - Math.PI / 2) * (180 / Math.PI)
  return [lon, lat]
}

const pointInRing = ([x, y], ring) => {
  let inside = false
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const [xi, yi] = ring[i]
    const [xj, yj] = ring[j]
    if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) inside = !inside
  }
  return inside
}

/** The polity holding a lon/lat in a snapshot, or null. */
export function holderAt(snapshot, point) {
  if (!snapshot) return null
  for (const feature of snapshot.features) {
    const polygons =
      feature.geometry.type === 'Polygon' ? [feature.geometry.coordinates] : feature.geometry.coordinates
    for (const rings of polygons) {
      if (pointInRing(point, rings[0]) && !rings.slice(1).some((hole) => pointInRing(point, hole))) {
        return feature.properties.name
      }
    }
  }
  return null
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

export const clampYear = (value) => Math.min(LAST_YEAR, Math.max(FIRST_YEAR, value))

/**
 * Parse a typed year. Returns null when there is no usable number, so the caller
 * can put back what was there rather than guessing — someone who types nonsense
 * over 1147 meant to change it, not to be sent to the default.
 */
export function parseTypedYear(raw) {
  const parsed = Number.parseInt(String(raw ?? '').trim(), 10)
  return Number.isFinite(parsed) ? clampYear(parsed) : null
}

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
    return `No evidence this early — the first source date is ${resolution.nextYear}. Blank ground means no snapshot covers it, not that the land was empty.`
  }
  if (resolution.reason === 'exact') {
    return `${resolution.evidenceYear} is a date the source reconstructs directly.`
  }
  const years = resolution.gap === 1 ? '1 year' : `${resolution.gap} years`
  return `Borders reconstructed for ${resolution.evidenceYear}, ${years} earlier. Nothing here is a reconstruction of ${year}.`
}

/**
 * Whether the evidence deserves emphasis.
 *
 * On a source year the notice is nearly content-free — "1000 is a date the source
 * reconstructs" — and giving it a red heading and three reserved lines made the
 * most important warning on the page into furniture the reader learns to skip.
 * It is loud exactly when the map is NOT showing the year asked for.
 */
export const evidenceIsStale = (resolution) => resolution.reason !== 'exact'

// ---------------------------------------------------------------------------
// Camera
// ---------------------------------------------------------------------------

/** A degree box → a viewBox rectangle in projected units. */
export function viewFromBounds(bounds) {
  const [left, top] = projectPoint(bounds.west, bounds.north)
  const [right, bottom] = projectPoint(bounds.east, bounds.south)
  return { x: left, y: top, w: right - left, h: bottom - top }
}

export const presetById = (id) => CAMERA_PRESETS.find((p) => p.id === id) ?? CAMERA_PRESETS[0]

export const viewBoxString = (view) =>
  `${view.x.toFixed(1)} ${view.y.toFixed(1)} ${view.w.toFixed(1)} ${view.h.toFixed(1)}`

/** The tightest and widest the camera may go, as a fraction of the whole canvas. */
const MIN_SPAN = 0.06
const MAX_SPAN = 1

/**
 * Zoom about a fixed point, clamped, and kept inside the canvas.
 *
 * Clamping matters more than it looks: without it a few scroll gestures put the
 * camera somewhere in the Atlantic with nothing on screen and no obvious way back,
 * which reads as the map having broken rather than as the reader having zoomed.
 */
export function zoomView(view, factor, focus = null) {
  const cx = focus ? focus.x : view.x + view.w / 2
  const cy = focus ? focus.y : view.y + view.h / 2

  const minW = VIEW_WIDTH * MIN_SPAN
  const maxW = VIEW_WIDTH * MAX_SPAN
  const w = Math.min(maxW, Math.max(minW, view.w * factor))
  const h = w * (VIEW_HEIGHT / VIEW_WIDTH)

  // Keep the focus under the cursor: the point it was at stays where it was.
  const ratio = w / view.w
  return clampView({
    x: cx - (cx - view.x) * ratio,
    y: cy - (cy - view.y) * ratio,
    w,
    h
  })
}

export function panView(view, dx, dy) {
  return clampView({ ...view, x: view.x + dx, y: view.y + dy })
}

/** Never let the camera leave the canvas entirely. */
export function clampView(view) {
  const w = Math.min(view.w, VIEW_WIDTH)
  const h = Math.min(view.h, VIEW_HEIGHT)
  return {
    w,
    h,
    x: Math.min(Math.max(view.x, 0), VIEW_WIDTH - w),
    y: Math.min(Math.max(view.y, 0), VIEW_HEIGHT - h)
  }
}

/** Where a polygon's article lives, in the archive's own route vocabulary. */
export function articleHref(properties) {
  if (!properties.slug) return null
  const collection = { location: 'locations', house: 'houses', order: 'orders', civilization: 'civilizations' }[properties.linkType]
  return collection ? `/${collection}/${properties.slug}` : null
}
