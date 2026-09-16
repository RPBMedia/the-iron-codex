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
  },

  /*
   * Bounds maps, added 2026-09-16 for QUEUE 0k Option 1.
   *
   * These are MODERN outlines, which the owner's rule allows as a fallback where
   * no medieval base map can be used — and the caption must say the borders are
   * modern. They are here because calibrating a medieval map from its own town
   * labels was proven unworkable: 102 units of error on a 1405-wide map, with the
   * projection ruled out as the cause. A documented degree box is exact.
   *
   * Every box is the one Wikipedia's Module:Location map/data/<country> publishes
   * for that image, so a marker lands where its own pin templates would put it.
   */
  'british-isles': {
    title: 'The British Isles',
    src: 'https://commons.wikimedia.org/wiki/Special:FilePath/United_Kingdom_adm_location_map.svg',
    source: 'Wikimedia Commons (NordNordWest, CC BY-SA 3.0)',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:United_Kingdom_adm_location_map.svg',
    modernBorders: true,
    width: 1000,
    height: 1200,
    bounds: { top: 61, bottom: 49, left: -11, right: 2.2 }
  },
  france: {
    title: 'France and the Low Countries',
    src: 'https://commons.wikimedia.org/wiki/Special:FilePath/France_location_map-Regions_and_departements-2016.svg',
    source: 'Wikimedia Commons (Eric Gaba, CC BY-SA 4.0)',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:France_location_map-Regions_and_departements-2016.svg',
    modernBorders: true,
    width: 1000,
    height: 1000,
    bounds: { top: 51.5, bottom: 41.0, left: -5.8, right: 10.0 }
  },
  denmark: {
    title: 'Denmark',
    src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Denmark_adm_location_map.svg',
    source: 'Wikimedia Commons (NordNordWest, CC BY-SA 3.0)',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Denmark_adm_location_map.svg',
    modernBorders: true,
    width: 1000,
    height: 900,
    bounds: { top: 57.9, bottom: 54.3, left: 7.8, right: 15.4 }
  },
  norway: {
    title: 'Norway',
    src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Norway_location_map.svg',
    source: 'Wikimedia Commons (NordNordWest, CC BY-SA 3.0)',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Norway_location_map.svg',
    modernBorders: true,
    width: 1000,
    height: 1200,
    bounds: { top: 71.5, bottom: 57.6, left: 4.1, right: 31.6 }
  },
  sweden: {
    title: 'Sweden',
    src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Sweden_location_map.svg',
    source: 'Wikimedia Commons (NordNordWest, CC BY-SA 3.0)',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Sweden_location_map.svg',
    modernBorders: true,
    width: 1000,
    height: 1400,
    bounds: { top: 69.5, bottom: 55.1, left: 10.4, right: 24.6 }
  },

  /*
   * The rest of 0k's regions, added 2026-09-17 by the same bounds route, and
   * carrying the same modern-outline caveat in their captions.
   *
   * Spain needed care, and is the reason this comment exists. Its module
   * publishes `left = -26.925`, which is NOT the map's western edge: it belongs
   * to the Canary Islands, grafted into the corner by a formula that branches at
   * longitude -10. The mainland branch is plain and linear --
   *   x = 100*(lon + 9.9) / (4.8 + 9.9)
   *   y = 100*(44.4 - lat) / (44.4 - 34.7)
   * -- so the mainland box is the one used below. Every Iberian place in the
   * archive lies east of -10 and so never touches the inset branch. Taking the
   * published -26.925 at face value would have crushed Iberia into a fifth of the
   * frame and dropped every marker into the Atlantic.
   *
   * Portugal gets its own map rather than riding Spain's. Lisbon does fall inside
   * Spain's box, but on a map of Spain it lands in a blank unshaded neighbour,
   * which tells a reader roughly nothing.
   */
  spain: {
    title: 'Spain',
    src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Spain_adm_location_map.svg',
    source: 'Wikimedia Commons (NordNordWest, CC BY-SA 3.0 de)',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Spain_adm_location_map.svg',
    modernBorders: true,
    width: 1183,
    height: 1015,
    bounds: { top: 44.4, bottom: 34.7, left: -9.9, right: 4.8 }
  },
  portugal: {
    title: 'Portugal',
    src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Portugal_location_map.svg',
    source: 'Wikimedia Commons (NordNordWest, CC BY-SA 3.0)',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Portugal_location_map.svg',
    modernBorders: true,
    width: 612,
    height: 1173,
    bounds: { top: 42.3, bottom: 36.7, left: -9.8, right: -6.0 }
  },
  germany: {
    title: 'Germany',
    src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Germany_adm_location_map.svg',
    source: 'Wikimedia Commons (NordNordWest, CC BY-SA 3.0 de)',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Germany_adm_location_map.svg',
    modernBorders: true,
    width: 1073,
    height: 1272,
    bounds: { top: 55.1, bottom: 47.2, left: 5.5, right: 15.5 }
  },
  italy: {
    title: 'Italy',
    src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Italy_location_map.svg',
    source: 'Wikimedia Commons (NordNordWest, CC BY-SA 3.0)',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Italy_location_map.svg',
    modernBorders: true,
    width: 1030,
    height: 1295,
    bounds: { top: 47.4, bottom: 35.3, left: 6.2, right: 19.0 }
  },
  turkey: {
    title: 'Anatolia and Thrace',
    src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Turkey_adm_location_map.svg',
    source: 'Wikimedia Commons (NordNordWest, CC BY-SA 3.0 de)',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Turkey_adm_location_map.svg',
    modernBorders: true,
    width: 1578,
    height: 721,
    bounds: { top: 42.5, bottom: 35.5, left: 25.4, right: 45.0 }
  }
}

/**
 * Which base map a place should use, by its modern country.
 *
 * Assignment cannot be "the first box that contains the point": the boxes
 * overlap heavily — Hastings and Agincourt sit inside both the British Isles and
 * France, and Oslo, Copenhagen and Falsterbo inside all three Nordic boxes. The
 * country a place is actually in settles it, and `modernCountry` already records
 * that from the coordinates pass.
 */
export const COUNTRY_TO_MAP = {
  GB: 'british-isles',
  IE: 'british-isles',
  FR: 'france',
  BE: 'france',
  NL: 'france',
  DK: 'denmark',
  NO: 'norway',
  SE: 'sweden',
  ES: 'spain',
  PT: 'portugal',
  DE: 'germany',
  IT: 'italy',
  TR: 'turkey'
}

/**
 * Two kinds of base map, because fitting a projection to a historical map turned
 * out to be unreliable (2026-09-16).
 *
 * `calibration` — coefficients fitted against towns the map itself marks. Exact
 * when the map's marker positions are machine-readable, as on the Jerusalem map:
 * 23 towns, worst error 7 units.
 *
 * `bounds` — the map's edges in degrees, so a point is placed by proportion with
 * no fitting at all: correct by construction. This exists because calibrating
 * `France 1154-en.svg` from its 44 town LABELS failed at 102 units on a 1405-wide
 * map, and the projection was not the cause — Mercator, equirectangular and a
 * quadratic all landed within 2% of each other. A label sits left, right, above
 * or below its dot depending on space, and that scatter (~40 units) is the floor.
 * No projection choice escapes it.
 *
 * Bounds maps use the degree box Wikipedia's Module:Location map/data/<country>
 * publishes for each base image — the same numbers its own pin templates use.
 */
export function projectOnMap(map, { lat, lon }) {
  if (map.bounds) {
    const { top, bottom, left, right } = map.bounds
    return {
      x: ((lon - left) / (right - left)) * map.width,
      y: ((top - lat) / (top - bottom)) * map.height
    }
  }
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
