/**
 * The interactive map's geometry: validity, extent, and who actually held what
 * (QUEUE 0v).
 *
 * Two jobs, and the second is the one worth having.
 *
 * The first is ordinary: rings closed, coordinates finite and on Earth, nothing
 * silently un-simplified. A 1 MB snapshot shipping to every visitor would be a quiet
 * regression, so the byte budget is asserted rather than hoped for.
 *
 * The second follows tests/locator-maps.test.mjs, which checks a projection against
 * towns the base map itself marks rather than trusting the coefficients. Here the
 * equivalent is point-in-polygon: Aachen has to fall inside the Carolingian Empire
 * in 800 and the Holy Roman Empire in 1100, or something is wrong with the clip, the
 * simplification, or the source. That asserts history, not topology, and it is the
 * only test here that would catch a snapshot silently rebuilt from the wrong year.
 *
 * ---
 *
 * Two limits of this source, found on 2026-09-20 and worth knowing before adding an
 * anchor:
 *
 * COASTAL CITIES DO NOT WORK. Constantinople is outside every polygon in all three
 * files - in the RAW source, before any simplification of ours. The upstream
 * coastline is too coarse to resolve a city on a strait, so the Bosphorus swallows
 * it. This says nothing about who held Constantinople; it says point-in-polygon is
 * the wrong instrument for a coastal point at this resolution. Reykjavík fails the
 * same way against the Icelandic Commonwealth polygon. Use inland anchors only.
 *
 * THE FRONTIERS CARRY REAL ERRORS. Every feature in the source is BORDERPRECISION 1,
 * "approximate", and it shows: at 1100 Toledo is inside the Almoravid polygon though
 * Castile took it in 1085, and Prague is inside Poland though Bohemia was Imperial;
 * at 1400 Athens is inside Byzantium though it was the Latin Duchy of Athens. Those
 * are frontier inaccuracies, not anachronistic states, so the polygons stay and the
 * map presents itself as one reconstruction rather than settled fact. Do not add
 * anchors on a contested frontier - an anchor has to be somewhere a century of
 * argument would not move.
 */

import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import {
  CAMERA_PRESETS,
  CANVAS,
  VIEW_HEIGHT,
  VIEW_WIDTH,
  panView,
  pathsForFeature,
  presetById,
  viewFromBounds,
  zoomView
} from '../client/src/lib/historicalMap.js'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const { dropFrom } = JSON.parse(
  readFileSync(join(root, 'server', 'data', 'map', 'polity-slugs.json'), 'utf8')
)
const SNAPSHOT_YEARS = [500, 600, 700, 800, 900, 1000, 1100, 1200, 1279, 1300, 1400]

/** Well clear of anything the map needs; a snapshot over this is un-simplified. */
const MAX_SNAPSHOT_BYTES = 200 * 1024

const raw = (year) => readFileSync(join(root, 'client', 'public', 'map-data', `snapshot-${year}.json`), 'utf8')
const snapshot = (year) => JSON.parse(raw(year))

const polygonsOf = (geometry) =>
  geometry.type === 'Polygon' ? [geometry.coordinates] : geometry.coordinates

const inRing = ([x, y], ring) => {
  let inside = false
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const [xi, yi] = ring[i]
    const [xj, yj] = ring[j]
    if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) inside = !inside
  }
  return inside
}

/** Inside the outer ring and outside every hole. */
const inFeature = (point, feature) =>
  polygonsOf(feature.geometry).some(
    (rings) => inRing(point, rings[0]) && !rings.slice(1).some((hole) => inRing(point, hole))
  )

const holderOf = (year, point) => [
  ...new Set(snapshot(year).features.filter((f) => inFeature(point, f)).map((f) => f.properties.name))
]

test('every snapshot parses as a FeatureCollection of polygons', () => {
  for (const year of SNAPSHOT_YEARS) {
    const g = snapshot(year)
    assert.equal(g.type, 'FeatureCollection')
    assert.ok(g.features.length > 0, `${year}: no features`)
    for (const f of g.features) {
      assert.ok(['Polygon', 'MultiPolygon'].includes(f.geometry.type), `${year}: ${f.geometry.type} is not a polygon`)
    }
  }
})

test('every ring is closed and has enough positions to be a ring', () => {
  for (const year of SNAPSHOT_YEARS) {
    for (const f of snapshot(year).features) {
      for (const rings of polygonsOf(f.geometry)) {
        for (const ring of rings) {
          assert.ok(ring.length >= 4, `${year}/${f.properties.name}: a ring has ${ring.length} positions`)
          assert.deepEqual(ring[0], ring[ring.length - 1], `${year}/${f.properties.name}: a ring is not closed`)
        }
      }
    }
  }
})

test('every coordinate is finite and on Earth', () => {
  for (const year of SNAPSHOT_YEARS) {
    for (const f of snapshot(year).features) {
      for (const rings of polygonsOf(f.geometry)) {
        for (const ring of rings) {
          for (const [x, y] of ring) {
            assert.ok(Number.isFinite(x) && Number.isFinite(y), `${year}/${f.properties.name}: non-finite coordinate`)
            assert.ok(x >= -180 && x <= 180, `${year}/${f.properties.name}: longitude ${x} off the globe`)
            assert.ok(y >= -90 && y <= 90, `${year}/${f.properties.name}: latitude ${y} off the globe`)
          }
        }
      }
    }
  }
})

test('no snapshot is large enough to hurt, so an un-simplified rebuild fails loudly', () => {
  for (const year of SNAPSHOT_YEARS) {
    const bytes = Buffer.byteLength(raw(year))
    assert.ok(
      bytes <= MAX_SNAPSHOT_BYTES,
      `${year}: ${Math.round(bytes / 1024)} KB exceeds the ${MAX_SNAPSHOT_BYTES / 1024} KB budget - was it built without simplification?`
    )
  }
})

test('the canvas reaches the places the brief says it must never clip', () => {
  // Section 2 of the brief is explicit that Cyprus, Jerusalem, Egypt, Constantinople
  // and Iceland must stay on the canvas. Whether a polygon covers them is a separate
  // question (see the header); this asserts the CANVAS does, which is what "not
  // clipped" means.
  const mustReach = {
    Jerusalem: [35.22, 31.78],
    Constantinople: [28.98, 41.01],
    Cairo: [31.24, 30.04],
    Nicosia: [33.36, 35.17],
    'Reykjavík': [-21.94, 64.15],
    'North Cape': [25.78, 71.17]
  }
  for (const year of SNAPSHOT_YEARS) {
    const c = snapshot(year).properties.canvas
    for (const [place, [lon, lat]] of Object.entries(mustReach)) {
      assert.ok(
        lon >= c.west && lon <= c.east && lat >= c.south && lat <= c.north,
        `${year}: ${place} falls outside the canvas`
      )
    }
  }
})

test('no polity inside the canvas is lost between the source and the snapshot', () => {
  // Islands and small territories are what an over-eager Douglas-Peucker deletes
  // first, and the brief names Cyprus twice as something that must never be lost.
  //
  // Asserting Cyprus by name was the first version of this and it was wrong: the
  // source only names Cyprus separately from 800 on — at 500, 600 and 700 it is
  // simply Eastern Roman territory, so the test failed on data that was correct.
  //
  // Comparing against the source instead is both stronger and immune to that: it
  // catches ANY polity that survives the clip but not the simplification, for every
  // year, without a list to keep up to date.
  const canvas = snapshot(SNAPSHOT_YEARS[0]).properties.canvas
  const touchesCanvas = (coordinates) => {
    let hit = false
    const walk = (c) => {
      if (typeof c[0] === 'number') {
        const [x, y] = c
        if (x >= canvas.west && x <= canvas.east && y >= canvas.south && y <= canvas.north) hit = true
      } else c.forEach(walk)
    }
    walk(coordinates)
    return hit
  }

  const lost = []
  for (const year of SNAPSHOT_YEARS) {
    const sourceFile = join(root, 'server', 'data', 'map', 'source', `world_${year}.geojson`)
    const source = JSON.parse(readFileSync(sourceFile, 'utf8'))
    const expected = new Set(
      source.features
        .filter((f) => f.properties?.NAME && f.geometry && touchesCanvas(f.geometry.coordinates))
        .map((f) => f.properties.NAME)
    )
    const got = new Set(snapshot(year).features.map((f) => f.properties.name))
    for (const name of expected) {
      // A deliberate drop is not a loss; `dropFrom` in polity-slugs.json records why.
      // Read rather than hardcoded, so adding a drop does not mean editing this test
      // — and so a drop that is NOT declared there still fails, which is the point.
      const drop = dropFrom[name]
      if (drop && drop.years.includes(year)) continue
      if (!got.has(name)) lost.push(`${year}/${name}`)
    }
  }
  assert.deepEqual(lost, [], `polities simplified out of existence: ${lost.join(', ')}`)
})

test('inland anchors fall inside the polity that actually held them', () => {
  // The test that asserts history rather than topology. Each anchor is inland, and
  // each is somewhere no serious reconstruction would move. If one of these breaks,
  // the snapshot was rebuilt from the wrong year or the clip went wrong.
  const anchors = [
    { place: 'Aachen', point: [6.08, 50.78], holders: { 800: 'Carolingian Empire', 1100: 'Holy Roman Empire', 1400: 'Holy Roman Empire' } },
    { place: 'Ankara', point: [32.85, 39.93], holders: { 800: 'Byzantine Empire', 1100: 'Byzantine Empire', 1400: 'Ottoman Empire' } },
    { place: 'Rome', point: [12.5, 41.9], holders: { 800: 'Papal States', 1100: 'Papal States', 1400: 'Papal States' } },
    { place: 'Baghdad', point: [44.36, 33.31], holders: { 800: 'Abbasid Caliphate', 1100: 'Seljuk Empire' } },
    { place: 'Kyiv', point: [30.52, 50.45], holders: { 1100: 'Kievan Rus' } },
    { place: 'Cracow', point: [19.94, 50.06], holders: { 1100: 'Poland' } },
    { place: 'Uppsala', point: [17.64, 59.86], holders: { 1100: 'Sweden', 1400: 'Kalmar Union' } },
    { place: 'Paris', point: [2.35, 48.86], holders: { 800: 'Carolingian Empire', 1100: 'Kingdom of France' } },
    { place: 'Jerusalem', point: [35.22, 31.78], holders: { 800: 'Abbasid Caliphate', 1100: 'Fatimid Caliphate' } }
  ]

  const wrong = []
  for (const { place, point, holders } of anchors) {
    for (const [year, expected] of Object.entries(holders)) {
      const found = holderOf(Number(year), point)
      if (!found.includes(expected)) {
        wrong.push(`${place} in ${year}: expected ${expected}, found ${found.join(' + ') || '(unmapped)'}`)
      }
    }
  }
  assert.deepEqual(wrong, [], `anchors landed in the wrong polity: ${wrong.join('; ')}`)
})

test('the map changes between snapshots, so the slider has something to show', () => {
  // A guard against the dullest possible failure: three snapshots built from the
  // same source file. Anatolia and Iberia are the two theatres that must differ.
  const ankara = [32.85, 39.93]
  assert.notDeepEqual(holderOf(800, ankara), holderOf(1400, ankara), 'Anatolia is unchanged from 800 to 1400')

  const names = SNAPSHOT_YEARS.map((y) => new Set(snapshot(y).features.map((f) => f.properties.name)))
  for (let i = 1; i < names.length; i++) {
    assert.notDeepEqual([...names[i]].sort(), [...names[i - 1]].sort(), `snapshots ${SNAPSHOT_YEARS[i - 1]} and ${SNAPSHOT_YEARS[i]} list the same polities`)
  }
})

test('a polity with overlapping parts is never drawn as one evenodd path', () => {
  // The owner saw black gaps across Italy, the Balkans, Anatolia and the Nile that
  // moved as the year was scrubbed. Cause: a MultiPolygon's parts were joined into
  // one path and filled `evenodd`, so any two parts that overlap cancelled and
  // punched a hole through to the sea. On a map whose entire premise is that blank
  // ground means "no evidence here", holes in the world are the worst artefact
  // available.
  //
  // The fix is one path per polygon, so `evenodd` only ever sees rings that belong
  // to each other and a genuine enclave still reads as a hole. This asserts the
  // splitter itself, since the overlap that triggered it is real data: if
  // pathsForFeature ever goes back to returning one string per feature, this fails.
  const multiparts = SNAPSHOT_YEARS.flatMap((year) =>
    snapshot(year).features.filter((f) => f.geometry.type === 'MultiPolygon')
  )
  assert.ok(multiparts.length > 0, 'no MultiPolygon in any snapshot - this test is no longer testing anything')

  for (const feature of multiparts) {
    const paths = pathsForFeature(feature)
    assert.equal(
      paths.length,
      feature.geometry.coordinates.length,
      `${feature.properties.name}: ${paths.length} paths for ${feature.geometry.coordinates.length} polygons - parts were merged`
    )
    for (const d of paths) {
      assert.ok(d.startsWith('M'), `${feature.properties.name}: a path does not begin with a move`)
    }
  }
})

test('every camera preset frames the region it is named after', () => {
  // A preset that clips its own subject is worse than no preset, and the brief
  // names Cyprus, Jerusalem, Egypt, Constantinople and Iceland as things that must
  // never be cut off. These are the landmarks each preset claims to show.
  const claims = {
    canvas: [['Jerusalem', 35.22, 31.78], ['Reykjavík', -21.94, 64.15], ['Cairo', 31.24, 30.04]],
    europe: [['Rome', 12.5, 41.9], ['Kyiv', 30.52, 50.45], ['Toledo', -4.03, 39.87]],
    britain: [['London', -0.13, 51.51], ['Dublin', -6.26, 53.35], ['Orkney', -2.96, 58.98]],
    scandinavia: [['Reykjavík', -21.94, 64.15], ['Uppsala', 17.64, 59.86], ['Trondheim', 10.4, 63.43]],
    iberia: [['Toledo', -4.03, 39.87], ['Lisbon', -9.14, 38.71], ['Barcelona', 2.17, 41.39]],
    byzantium: [['Constantinople', 28.98, 41.01], ['Athens', 23.73, 37.98], ['Antioch', 36.16, 36.2]],
    'holy-land': [['Jerusalem', 35.22, 31.78], ['Nicosia', 33.36, 35.17], ['Cairo', 31.24, 30.04], ['Antioch', 36.16, 36.2]],
    mediterranean: [['Rome', 12.5, 41.9], ['Carthage', 10.32, 36.85], ['Nicosia', 33.36, 35.17]]
  }

  const outside = []
  for (const preset of CAMERA_PRESETS) {
    const b = preset.bounds
    for (const [place, lon, lat] of claims[preset.id] ?? []) {
      if (lon < b.west || lon > b.east || lat < b.south || lat > b.north) {
        outside.push(`${preset.id} clips ${place}`)
      }
    }
    // And every preset must itself sit inside the canvas, or it frames blank space.
    assert.ok(
      b.west >= CANVAS.west && b.east <= CANVAS.east && b.south >= CANVAS.south && b.north <= CANVAS.north,
      `${preset.id} reaches outside the canvas`
    )
    assert.ok(b.east > b.west && b.north > b.south, `${preset.id} has inverted bounds`)
  }
  assert.deepEqual(outside, [], `camera presets clipping their own subject: ${outside.join(', ')}`)
})

test('the camera cannot be zoomed or panned out of the world', () => {
  // Without clamping, a few scroll gestures put the camera somewhere in the
  // Atlantic with nothing on screen and no obvious way back — which reads as the
  // map having broken rather than as the reader having zoomed.
  let view = viewFromBounds(CANVAS)
  for (let i = 0; i < 40; i++) view = zoomView(view, 0.7)
  assert.ok(view.w > 0 && view.h > 0, 'zooming in collapsed the camera')
  assert.ok(view.x >= 0 && view.y >= 0, 'zooming in left the canvas')

  for (let i = 0; i < 40; i++) view = zoomView(view, 1.6)
  assert.ok(view.w <= VIEW_WIDTH + 0.5, 'zooming out went wider than the canvas')

  for (let i = 0; i < 40; i++) view = panView(view, 500, 500)
  assert.ok(view.x + view.w <= VIEW_WIDTH + 0.5, 'panning east left the canvas')
  assert.ok(view.y + view.h <= VIEW_HEIGHT + 0.5, 'panning south left the canvas')

  for (let i = 0; i < 40; i++) view = panView(view, -500, -500)
  assert.ok(view.x >= -0.5 && view.y >= -0.5, 'panning north-west left the canvas')
})

test('a preset id that does not exist falls back to the whole canvas', () => {
  // The preset comes from the query string, so it is reader-supplied input.
  assert.equal(presetById('nonsense').id, 'canvas')
  assert.equal(presetById(undefined).id, 'canvas')
})
