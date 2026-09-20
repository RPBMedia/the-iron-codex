/**
 * The interactive map's snapshot files: structure, provenance and links (QUEUE 0v).
 *
 * This exists because the map is the one feature on the site that can state a
 * historical claim the Codex never wrote and nobody proofread. The geometry comes
 * from an outside project, the build script reshapes it, and both can go wrong
 * quietly — a polygon pointing at the wrong article reads as fact.
 *
 * So the invariants here are mostly about honesty rather than correctness:
 *  - a link exists only where a real article backs it;
 *  - a gap is declared, never merely absent;
 *  - the licence and the source survive every rebuild.
 *
 * The last one is not paranoia. The data is GPL-3.0 from a project whose README
 * says nothing about data licensing, and the owner's decision on 2026-09-20 was to
 * use it *on condition* of prominent attribution. A rebuild that quietly lost the
 * attribution would break that condition, so the build is gated on it.
 */

import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import { loadArchive } from '../server/data/archive.mjs'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const SNAPSHOT_YEARS = [500, 600, 700, 800, 900, 1000, 1100, 1200, 1279, 1300, 1400]

const snapshot = (year) =>
  JSON.parse(readFileSync(join(root, 'client', 'public', 'map-data', `snapshot-${year}.json`), 'utf8'))

const mapping = JSON.parse(readFileSync(join(root, 'server', 'data', 'map', 'polity-slugs.json'), 'utf8'))

/** The map's link types, in the vocabulary the rest of the archive already uses. */
const LINK_TYPE_TO_COLLECTION = { location: 'locations', house: 'houses', order: 'orders' }

test('every snapshot year is inside the Codex scope of 476-1453', () => {
  for (const year of SNAPSHOT_YEARS) {
    assert.ok(Number.isInteger(year), `${year} is not an integer year`)
    assert.ok(year >= 476 && year <= 1453, `${year} is outside 476-1453`)
    assert.equal(snapshot(year).properties.evidenceYear, year)
  }
})

test('snapshot years are strictly ascending, so the slider can resolve them in order', () => {
  const sorted = [...SNAPSHOT_YEARS].sort((a, b) => a - b)
  assert.deepEqual(SNAPSHOT_YEARS, sorted)
  assert.equal(new Set(SNAPSHOT_YEARS).size, SNAPSHOT_YEARS.length, 'a year is repeated')
})

test('every snapshot carries its source, licence and provenance', () => {
  for (const year of SNAPSHOT_YEARS) {
    const p = snapshot(year).properties
    for (const field of ['source', 'sourceUrl', 'sourceFile', 'sourceSha256', 'sourceCommit', 'retrieved', 'license']) {
      assert.ok(p[field], `${year}: ${field} is missing or empty`)
    }
    assert.equal(p.license, 'GPL-3.0', `${year}: the licence is not the one the owner accepted`)
    assert.match(p.sourceSha256, /^[0-9a-f]{64}$/, `${year}: sourceSha256 is not a sha-256`)
    assert.ok(p.sourceUrl.startsWith('https://'), `${year}: sourceUrl is not a URL`)
  }
})

test('every snapshot records how its geometry was derived', () => {
  // The brief requires original geometry to stay immutable and every derivation to
  // be documented. Without these numbers "is this file simplified?" has no answer.
  for (const year of SNAPSHOT_YEARS) {
    const p = snapshot(year).properties
    assert.ok(p.simplifyTolerance > 0, `${year}: no simplification tolerance recorded`)
    assert.ok(p.positionsBefore > p.positionsAfter, `${year}: simplification did not reduce anything`)
    assert.ok(p.coordinateDecimals >= 2, `${year}: coordinates rounded too hard to be useful`)
  }
})

test('every polity link resolves to an article that actually exists', () => {
  // A wrong link is worse than a missing one - the rule tests/order-links.test.mjs
  // already enforces for realms and dynasties. The map is held to it too.
  const data = loadArchive()
  const broken = []
  for (const year of SNAPSHOT_YEARS) {
    for (const feature of snapshot(year).features) {
      const { slug, linkType, name } = feature.properties
      if (!slug) continue
      const collection = LINK_TYPE_TO_COLLECTION[linkType]
      if (!collection) {
        broken.push(`${year}/${name}: unknown link type ${linkType}`)
        continue
      }
      if (!data[collection].some((a) => a.id === slug)) {
        broken.push(`${year}/${name} -> ${collection}/${slug}`)
      }
    }
  }
  assert.deepEqual(broken, [], `map polygons pointing at articles that do not exist: ${broken.join(', ')}`)
})

test('an unlinked polity is either a declared gap or simply has no article, never a silent blank', () => {
  // Blank ground on this map must never read as empty or unruled land. A polygon
  // with no article still renders; what it must not do is render with nothing to say.
  for (const year of SNAPSHOT_YEARS) {
    for (const feature of snapshot(year).features) {
      const { slug, gapNote, name } = feature.properties
      if (slug) continue
      if (mapping.knownGaps[name]) {
        assert.ok(gapNote, `${year}/${name}: listed as a known gap but its note did not reach the snapshot`)
      }
    }
  }
})

test('the mapping file never points a territory at a city article', () => {
  // The source's "Granada" and "Novgorod" polygons are realms; the Codex articles of
  // those names are CITIES. Linking them would put a realm's territory on a city
  // page. Both are in knownGaps for exactly this reason, and this test stops either
  // from being "fixed" later by someone matching on name alone.
  const data = loadArchive()
  const cityish = /^city$/i
  const offenders = []
  for (const [name, link] of Object.entries(mapping.polities)) {
    if (link.type !== 'location') continue
    const article = data.locations.find((a) => a.id === link.slug)
    if (article && cityish.test(article.locationType ?? '')) {
      offenders.push(`${name} -> ${link.slug} (${article.locationType})`)
    }
  }
  assert.deepEqual(offenders, [], `territory polygons linked to city articles: ${offenders.join(', ')}`)
})

test('every dropped feature says why it was dropped, and is really gone', () => {
  // Dropping is a last resort and the reason is the whole point: unmapped ground is
  // honest, a stale label is not. An undocumented drop is indistinguishable from a
  // bug in the clip.
  for (const [name, drop] of Object.entries(mapping.dropFrom)) {
    assert.ok(drop.reason && drop.reason.length > 30, `${name}: dropped without a real reason`)
    assert.ok(Array.isArray(drop.years) && drop.years.length, `${name}: dropped from no year in particular`)
    for (const year of drop.years) {
      if (!SNAPSHOT_YEARS.includes(year)) continue
      const present = snapshot(year).features.some((f) => f.properties.name === name)
      assert.equal(present, false, `${year}: ${name} was meant to be dropped but is still in the snapshot`)
    }
  }
})

test('the Seljuk Caliphate is absent from 1400, because it had been gone for two centuries', () => {
  // Named on its own rather than left to the loop above: this is the one historical
  // claim the source got flatly wrong that we caught, and it is the reason the drop
  // mechanism exists at all. The Great Seljuk Empire ended in 1194, the Sultanate of
  // Rum in 1308; by 1400 Anatolia was Ottoman and the beyliks.
  const names = snapshot(1400).features.map((f) => f.properties.name)
  assert.ok(!names.includes('Seljuk Caliphate'), 'a state 200 years dead is on the 1400 map')
})

test('no feature is missing a name, and BORDERPRECISION survives the build', () => {
  for (const year of SNAPSHOT_YEARS) {
    for (const feature of snapshot(year).features) {
      assert.ok(feature.properties.name, `${year}: a feature has no name`)
      // Every feature in every in-scope source file is precision 1, "approximate".
      // Carried through rather than assumed, so a better future source is not
      // silently reported as approximate - and so the legend can stop saying
      // "all frontiers here are approximate" when that stops being true.
      assert.notEqual(feature.properties.borderPrecision, undefined, `${year}: borderPrecision was dropped`)
    }
  }
})

test('the legend may still say every frontier is approximate', () => {
  // If this fails, the data improved and the legend's wording is now wrong.
  // That is a good failure. Update the legend, then update this test.
  for (const year of SNAPSHOT_YEARS) {
    const values = new Set(snapshot(year).features.map((f) => f.properties.borderPrecision))
    assert.deepEqual([...values], [1], `${year}: border precision is no longer uniformly approximate`)
  }
})
