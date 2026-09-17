/**
 * City locator maps (QUEUE 0k).
 *
 * The inset is only useful if the marker lands on the right town. The positions
 * below were measured from the Kingdom of Jerusalem base map's own town markers;
 * if the map file or its calibration changes, these fail before a wrong marker ships.
 */
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { LOCATOR_MAPS, projectOnMap, locatorFor } from '../client/src/lib/locatorMaps.js'
import { loadArchive } from '../server/data/archive.mjs'

const JERUSALEM_MARKERS = [
  { town: 'Beirut', lat: 33.8938, lon: 35.5018, x: 337.7, y: 366.6 },
  { town: 'Sidon', lat: 33.5571, lon: 35.3729, x: 321.7, y: 428.7 },
  { town: 'Acre', lat: 32.9236, lon: 35.0689, x: 271.3, y: 549.1 },
  { town: 'Jaffa', lat: 32.0543, lon: 34.752, x: 220.9, y: 719.9 },
  { town: 'Kerak', lat: 31.1807, lon: 35.7019, x: 369.2, y: 888.2 },
  { town: 'Petra', lat: 30.3285, lon: 35.4444, x: 324.1, y: 1055.6 },
  { town: 'Akaba', lat: 29.5267, lon: 35.0078, x: 255.9, y: 1195.3 },
  { town: 'Damascus', lat: 33.5106, lon: 36.3065, x: 466.9, y: 436.3 }
]

test('the Kingdom of Jerusalem calibration puts each marked town on its marker', () => {
  const map = LOCATOR_MAPS['kingdom-of-jerusalem']
  for (const m of JERUSALEM_MARKERS) {
    const { x, y } = projectOnMap(map, m)
    const error = Math.hypot(x - m.x, y - m.y)
    assert.ok(error <= 8, `${m.town} lands ${error.toFixed(1)} units from its marker`)
  }
})

test('every location that names a base map has coordinates that fall on it', () => {
  const data = loadArchive()
  const mapped = data.locations.filter((a) => a.locatorMap)
  assert.ok(mapped.length > 0, 'no location uses a locator map yet')
  for (const article of mapped) {
    assert.ok(LOCATOR_MAPS[article.locatorMap], `${article.id} names an unknown base map "${article.locatorMap}"`)
    assert.ok(locatorFor(article), `${article.id} has no coordinates on ${article.locatorMap}`)
  }
})

test('every mapped place puts its marker inside the map, by proportion', () => {
  // The locator shows the WHOLE base map and never a crop (owner, 2026-09-17:
  // a window onto part of a country cannot tell you where in that country a city
  // is). So the marker is placed by simple percentage of the full image, and the
  // only thing that must hold is that it lands inside it.
  //
  // This replaces two tests that checked a 340x320 crop window kept the dot
  // visible. That window no longer exists, and neither does cropWindow().
  const data = loadArchive()
  const mapped = data.locations.filter((a) => a.locatorMap)
  assert.ok(mapped.length > 0, 'no location uses a locator map')

  for (const article of mapped) {
    const locator = locatorFor(article)
    assert.ok(locator, `${article.id} has no marker on ${article.locatorMap}`)
    const leftPct = (locator.x / locator.map.width) * 100
    const topPct = (locator.y / locator.map.height) * 100
    assert.ok(
      leftPct >= 0 && leftPct <= 100,
      `${article.id} marker is ${leftPct.toFixed(1)}% across ${article.locatorMap} — off the map`
    )
    assert.ok(
      topPct >= 0 && topPct <= 100,
      `${article.id} marker is ${topPct.toFixed(1)}% down ${article.locatorMap} — off the map`
    )
  }

  // A place outside its map must yield no locator at all, rather than a dot
  // clamped to an edge and quietly lying about where the place is.
  assert.equal(locatorFor({ coordinates: { lat: 51.5, lon: -0.12 }, locatorMap: 'kingdom-of-jerusalem' }), null)
})
