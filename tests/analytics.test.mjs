/**
 * Privacy guarantees of the analytics layer (Track C M7/M13).
 *
 * These tests exist because the privacy claim on the Insights page — "nothing
 * that identifies a reader" — is a promise, and a promise nothing verifies is
 * just a sentence. Each case is a way that promise could be broken by accident.
 */
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { referrerHost, SAFE_PATH, favoritesByPeriod } from '../server/analytics.js'

test('a referrer is reduced to its host — the path is discarded', () => {
  // The path is the dangerous part: search engines put the query in it, so
  // storing a full referrer can mean storing what somebody searched for.
  assert.equal(referrerHost('https://www.google.com/search?q=someone+private'), 'www.google.com')
  assert.equal(referrerHost('https://news.ycombinator.com/item?id=123'), 'news.ycombinator.com')
})

test('internal navigation is not recorded as a referrer', () => {
  assert.equal(referrerHost('https://www.theironcodex.org/people/eric-bloodaxe'), null)
  assert.equal(referrerHost('https://theironcodex.org/topics'), null)
})

test('junk referrers are discarded rather than stored', () => {
  for (const bad of ['', null, undefined, 'not a url', 'javascript:alert(1)']) {
    assert.equal(referrerHost(bad), null, String(bad))
  }
})

test('a host is length-capped so a hostile referrer cannot bloat the store', () => {
  const host = referrerHost(`https://${'a'.repeat(300)}.com/`)
  assert.ok(host === null || host.length <= 80)
})

test('only clean internal paths are counted', () => {
  for (const good of ['/', '/topics', '/people/eric-bloodaxe', '/weapons-armor/wallace-sword']) {
    assert.ok(SAFE_PATH.test(good), good)
  }
})

test('paths that could carry identifiers or injection are rejected', () => {
  for (const bad of [
    'people/eric-bloodaxe',                 // not absolute
    '/search?q=private+search+terms',       // a query string
    '/people/eric#section',                 // a fragment
    '/people/<script>',                     // markup
    '/people/' + 'a'.repeat(200),           // over the length cap
    '/user@example.com'                     // an address in the path
  ]) {
    assert.equal(SAFE_PATH.test(bad), false, bad)
  }
})

// Favourites by period (owner: chart favourites by period, 2026-09-15).
const dates = ['2026-09-13', '2026-09-14', '2026-09-15']
const fav = (createdAt, articleUrl = '/people/saladin', extra = {}) => ({ articleType: 'people', articleId: 'saladin', articleUrl, createdAt, ...extra })

test('favourites are bucketed by the day they were added', () => {
  const result = favoritesByPeriod([
    fav('2026-09-14T08:00:00.000Z'),
    fav('2026-09-14T23:59:00.000Z', '/events/battle-of-hattin'),
    fav('2026-09-15T01:00:00.000Z')
  ], dates)
  assert.deepEqual(result.daily, [
    { date: '2026-09-13', count: 0 },
    { date: '2026-09-14', count: 2 },
    { date: '2026-09-15', count: 1 }
  ])
  assert.equal(result.total, 3)
  assert.deepEqual(result.articles, [
    { key: '/people/saladin', count: 2 },
    { key: '/events/battle-of-hattin', count: 1 }
  ])
})

test('favourites outside the period are not counted in it', () => {
  const result = favoritesByPeriod([fav('2026-08-01T12:00:00.000Z'), fav('2026-09-16T00:30:00.000Z')], dates)
  assert.equal(result.total, 0)
  assert.deepEqual(result.articles, [])
})

test('a favourite with no date is reported as undated, never guessed into a day', () => {
  const result = favoritesByPeriod([fav(undefined), fav('not a date'), fav('2026-09-13T10:00:00.000Z')], dates)
  assert.equal(result.undated, 2)
  assert.equal(result.total, 1)
})

test('favourites output carries article paths and counts, nothing about the reader', () => {
  const result = favoritesByPeriod([fav('2026-09-15T10:00:00.000Z', '/people/saladin', { userId: 'u-123', email: 'reader@example.com' })], dates)
  const text = JSON.stringify(result)
  assert.equal(text.includes('u-123'), false)
  assert.equal(text.includes('example.com'), false)
})

test('an unsafe article url falls back to the type and id, or is left out', () => {
  const result = favoritesByPeriod([
    fav('2026-09-15T10:00:00.000Z', 'https://evil.example/x?q=1'),
    { createdAt: '2026-09-15T11:00:00.000Z', articleUrl: '/people/<script>' }
  ], dates)
  assert.equal(result.total, 2)
  assert.deepEqual(result.articles, [{ key: '/people/saladin', count: 1 }])
})
