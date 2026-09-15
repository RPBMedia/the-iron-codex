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
import { LOCATOR_MAPS, projectOnMap, locatorFor, cropWindow } from '../client/src/lib/locatorMaps.js'

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
  const data = JSON.parse(readFileSync(new URL('../server/data/history.json', import.meta.url), 'utf8'))
  const mapped = data.locations.filter((a) => a.locatorMap)
  assert.ok(mapped.length > 0, 'no location uses a locator map yet')
  for (const article of mapped) {
    assert.ok(LOCATOR_MAPS[article.locatorMap], `${article.id} names an unknown base map "${article.locatorMap}"`)
    assert.ok(locatorFor(article), `${article.id} has no coordinates on ${article.locatorMap}`)
  }
})

test('the crop window keeps the marker inside and never runs off the map', () => {
  const map = LOCATOR_MAPS['kingdom-of-jerusalem']
  for (const [x, y] of [[369.2, 888.2], [0, 0], [map.width, map.height], [map.width / 2, 20]]) {
    const view = cropWindow(map, x, y)
    assert.ok(view.markerLeftPct >= 0 && view.markerLeftPct <= 100, `marker x ${view.markerLeftPct}% for ${x},${y}`)
    assert.ok(view.markerTopPct >= 0 && view.markerTopPct <= 100, `marker y ${view.markerTopPct}% for ${x},${y}`)
    assert.ok(view.imgLeftPct <= 0 && view.imgTopPct <= 0, `window starts inside the map for ${x},${y}`)
  }
  assert.equal(locatorFor({ coordinates: { lat: 51.5, lon: -0.12 }, locatorMap: 'kingdom-of-jerusalem' }), null)
})
