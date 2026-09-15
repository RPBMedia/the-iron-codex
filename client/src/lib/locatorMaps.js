/**
 * Medieval base maps for city locator insets (QUEUE 0k).
 *
 * Owner rules, 2026-09-15: every city shows where it lies in its region, and the
 * base map is medieval whenever one is possible; modern borders are a fallback only.
 *
 * Each base map carries a calibration that turns a latitude and longitude into a
 * point on the map, in the SVG's own viewBox units:
 *   x = a * lon + b
 *   y = c * mercY(lat) + d
 * The coefficients were fitted against the towns the map itself marks, and
 * tests/locator-maps.test.mjs checks them against those markers.
 */

export const mercY = (lat) => Math.log(Math.tan(Math.PI / 4 + (lat * Math.PI) / 360))

export const LOCATOR_MAPS = {
  // Fitted against 23 marked towns from Akaba to Hama; worst error 7 units, about
  // the size of a town marker on the map.
  'kingdom-of-jerusalem': {
    title: 'Kingdom of Jerusalem in the twelfth century',
    src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Principal_locations_in_the_Kingdom_of_Jerusalem.svg',
    source: 'Wikimedia Commons (Goran tek-en, CC BY-SA 4.0)',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Principal_locations_in_the_Kingdom_of_Jerusalem.svg',
    width: 589.99,
    height: 1288.1,
    calibration: { a: 161.23890573857665, b: -5387.373143225597, c: -9343.211834237816, d: 6243.789933821397 }
  }
}

export function projectOnMap(map, { lat, lon }) {
  const { a, b, c, d } = map.calibration
  return { x: a * lon + b, y: c * mercY(lat) + d }
}

/**
 * The base map and marker position for an article, or null when the article has
 * no coordinates, names no known base map, or lies outside that map.
 */
export function locatorFor(article) {
  const map = LOCATOR_MAPS[article?.locatorMap]
  const { lat, lon } = article?.coordinates ?? {}
  if (!map || !Number.isFinite(lat) || !Number.isFinite(lon)) return null
  const { x, y } = projectOnMap(map, { lat, lon })
  if (x < 0 || y < 0 || x > map.width || y > map.height) return null
  return { map, x, y }
}

/**
 * A window of the base map around the marker, so the inset shows the region at a
 * size where the map's own town names stay readable. The marker sits a little
 * below centre (markerDown), so more of the region shows above it. The window is
 * clamped to the map's edges; every value is a percentage of the window, for CSS
 * positioning.
 */
export function cropWindow(map, x, y, viewW = 340, viewH = 320, markerDown = 0.55) {
  const clamp = (v, lo, hi) => Math.min(Math.max(v, lo), hi)
  const x0 = clamp(x - viewW / 2, 0, map.width - viewW)
  const y0 = clamp(y - viewH * markerDown, 0, map.height - viewH)
  return {
    viewW,
    viewH,
    imgWidthPct: (map.width / viewW) * 100,
    imgLeftPct: (-x0 / viewW) * 100,
    imgTopPct: (-y0 / viewH) * 100,
    markerLeftPct: ((x - x0) / viewW) * 100,
    markerTopPct: ((y - y0) / viewH) * 100
  }
}
