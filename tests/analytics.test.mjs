/**
 * Privacy guarantees of the analytics layer (Track C M7/M13).
 *
 * These tests exist because the privacy claim on the Insights page — "nothing
 * that identifies a reader" — is a promise, and a promise nothing verifies is
 * just a sentence. Each case is a way that promise could be broken by accident.
 */
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { referrerHost, SAFE_PATH } from '../server/analytics.js'

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
