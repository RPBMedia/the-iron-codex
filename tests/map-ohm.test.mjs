/**
 * The OpenHistoricalMap reconstruction (QUEUE 0v).
 *
 * This source exists because the other one could not do what was asked.
 * `historical-basemaps` publishes eleven dated files inside 476–1453 and no more,
 * so the map could not change more often than about once a century, and it has
 * holes — northern Germany and the Baltic are blank at 1200 while mapped either
 * side of it. OHM dates every feature individually, so any year can be asked for.
 *
 * What is checked here is mostly the thing that could silently go wrong: the
 * geometry is assembled from relation members rather than read as ready-made
 * polygons, and a stitching bug produces rings that are closed and valid and
 * simply the wrong shape. So the anchors matter more here than anywhere: they
 * assert that the assembled polygons land where those polities actually were.
 */

import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync, existsSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import { MAP_SOURCES, holderAt } from '../client/src/lib/historicalMap.js'
import { loadArchive } from '../server/data/archive.mjs'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const dir = join(root, 'client', 'public', 'map-data', 'ohm')
const YEARS = MAP_SOURCES.ohm.years

/** Larger than the other source's 200 KB: OHM carries per-feature dates and ids. */
const MAX_BYTES = 260 * 1024

const raw = (year) => readFileSync(join(dir, `snapshot-${year}.json`), 'utf8')
const snapshot = (year) => JSON.parse(raw(year))

test('every year the source advertises has a snapshot on disk', () => {
  const missing = YEARS.filter((y) => !existsSync(join(dir, `snapshot-${y}.json`)))
  assert.deepEqual(missing, [], `years offered by the UI with no file behind them: ${missing.join(', ')}`)
  assert.ok(YEARS.length >= 90, `expected decade coverage, found ${YEARS.length} years`)
})

test('the decade steps really are ten years apart, and span the period', () => {
  assert.equal(YEARS[0], 476, 'the first step is not the start of the period')
  assert.equal(YEARS[YEARS.length - 1], 1453, 'the last step is not the end of the period')
  for (const year of YEARS) {
    assert.ok(year >= 476 && year <= 1453, `${year} is outside 476-1453`)
  }
  // Every interior gap is a decade. If this ever fails the UI's promise of
  // "every 10 years" has quietly stopped being true.
  const interior = YEARS.slice(1, -1)
  for (let i = 1; i < interior.length; i++) {
    assert.equal(interior[i] - interior[i - 1], 10, `gap between ${interior[i - 1]} and ${interior[i]} is not 10 years`)
  }
})

test('every snapshot claims to be exact, because every feature is dated', () => {
  // The distinguishing property of this source. If `exact` were ever false here
  // the UI would start telling readers the year is approximate when it is not,
  // and vice versa — the one thing both sources must never get wrong.
  for (const year of [YEARS[0], YEARS[Math.floor(YEARS.length / 2)], YEARS[YEARS.length - 1]]) {
    const p = snapshot(year).properties
    assert.equal(p.exact, true, `${year}: snapshot does not declare itself exact`)
    assert.equal(p.evidenceYear, year, `${year}: snapshot is dated ${p.evidenceYear}`)
    assert.equal(p.license, 'CC0 (some individual features CC-BY or CC-BY-SA)')
    assert.ok(p.source.includes('OpenHistoricalMap'))
  }
})

test('geometry is valid and no snapshot is oversized', () => {
  for (const year of YEARS) {
    const g = snapshot(year)
    assert.ok(g.features.length > 0, `${year}: no features`)
    assert.ok(
      Buffer.byteLength(raw(year)) <= MAX_BYTES,
      `${year}: ${Math.round(Buffer.byteLength(raw(year)) / 1024)} KB exceeds the ${MAX_BYTES / 1024} KB budget`
    )
    for (const f of g.features) {
      const polygons = f.geometry.type === 'Polygon' ? [f.geometry.coordinates] : f.geometry.coordinates
      for (const rings of polygons) {
        for (const ring of rings) {
          assert.ok(ring.length >= 4, `${year}/${f.properties.name}: ring of ${ring.length} positions`)
          assert.deepEqual(ring[0], ring[ring.length - 1], `${year}/${f.properties.name}: unclosed ring`)
          for (const [x, y] of ring) {
            assert.ok(Number.isFinite(x) && Number.isFinite(y), `${year}/${f.properties.name}: non-finite coordinate`)
          }
        }
      }
    }
  }
})

test('assembled polygons land where those polities actually were', () => {
  // The test that matters most for this source. Geometry here is stitched from
  // unordered, arbitrarily-directed relation members, and a stitching bug yields
  // rings that are closed, valid and the wrong shape — which nothing above would
  // notice. Inland anchors only, for the reason given in map-geometry.test.mjs.
  const anchors = [
    { place: 'Rome', point: [12.5, 41.9], year: 1200, expect: 'Status Ecclesiasticus' },
    { place: 'Ankara', point: [32.85, 39.93], year: 1200, expect: 'Imperium Romanum Orientale' },
    { place: 'Toledo', point: [-4.03, 39.87], year: 1200, expect: 'Reino de Castilla' },
    { place: 'Uppsala', point: [17.64, 59.86], year: 1200, expect: 'Konungariket Sverige' }
  ]
  const wrong = []
  for (const { place, point, year, expect } of anchors) {
    const held = holderAt(snapshot(year), point)
    if (held !== expect) wrong.push(`${place} in ${year}: expected ${expect}, found ${held ?? '(unmapped)'}`)
  }
  assert.deepEqual(wrong, [], `assembled geometry is in the wrong place: ${wrong.join('; ')}`)
})

test('OHM does NOT fill the gap that sent us looking for it, and that is recorded', () => {
  // Written as a failing expectation first, and it failed, which is how this got
  // caught. The claim in the original design note — that OHM's Holy Roman Empire
  // at 1200 reaches over Brandenburg where historical-basemaps' stops short —
  // was inferred from a tag listing and never checked against geometry. It is
  // false. OHM's HRE assembles correctly, 632 points, and also excludes Berlin.
  //
  // So this source buys decade resolution, not that hole. Asserted rather than
  // quietly dropped, because the next person to look will otherwise re-derive it.
  assert.equal(holderAt(snapshot(1200), [13.4, 52.52]), null, 'OHM now covers Berlin at 1200 — good news, and this test and the notes around it are out of date')

  // What it does buy in the Baltic: the Teutonic state, from the mid-thirteenth
  // century. historical-basemaps has nothing at Riga until 1279.
  assert.ok(holderAt(snapshot(1250), [24.1, 56.95]), 'Riga is unmapped at 1250')
})

test('OHM has holes of its own, and they are known rather than surprising', () => {
  // France at 1200 is the notable one: the relation exists in OHM and is dated
  // 1050 to 1212, but ships with no geometry at all, so the kingdom is a name
  // with no borders. Two other relations were in the same state when the data was
  // pulled. This is not a bug in the pipeline — it is the state of a
  // community-edited source, and the reason neither reconstruction is offered as
  // the authoritative one.
  assert.equal(holderAt(snapshot(1200), [2.35, 48.86]), null, 'OHM now maps Paris at 1200 — this note is out of date and the queue entry should be updated')
})

test('decade steps actually change the map, rather than repeating one snapshot', () => {
  // The entire justification for 100 files. If consecutive decades were identical
  // this source would be eleven keyframes wearing a disguise.
  const names = (y) => [...new Set(snapshot(y).features.map((f) => f.properties.name))].sort().join('|')
  let changes = 0
  for (let i = 1; i < YEARS.length; i++) {
    if (names(YEARS[i]) !== names(YEARS[i - 1])) changes++
  }
  assert.ok(changes > 40, `only ${changes} of ${YEARS.length - 1} decade steps change anything`)
})

test('every OHM link resolves to an article that exists', () => {
  // Same rule as the other source: a wrong link is worse than a missing one.
  const data = loadArchive()
  const collections = { location: 'locations', house: 'houses', order: 'orders', civilization: 'civilizations' }
  const broken = []
  for (const year of YEARS) {
    for (const { properties } of snapshot(year).features) {
      if (!properties.slug) continue
      const collection = collections[properties.linkType]
      if (!collection || !data[collection].some((a) => a.id === properties.slug)) {
        broken.push(`${year}/${properties.name} -> ${properties.linkType}/${properties.slug}`)
      }
    }
  }
  assert.deepEqual([...new Set(broken)], [], `OHM polygons pointing at articles that do not exist: ${broken.join(', ')}`)
})
