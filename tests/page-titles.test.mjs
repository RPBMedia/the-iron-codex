/**
 * Page titles (client/src/lib/pageTitles.js).
 *
 * The last test is the one that matters. The tab-title bug existed because
 * titles lived only in the prerenderer; the fix shares one module between the
 * prerenderer and the app. The failure mode worth guarding is someone "fixing"
 * a title by hand-writing it back into prerender.mjs, which quietly re-creates
 * two sources of truth that will drift.
 */
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import {
  SITE_NAME,
  articleTitle,
  homeTitle,
  notFoundTitle,
  pageTitle,
  utilityLabel
} from '../client/src/lib/pageTitles.js'

test('an article title uses the most specific qualifier it has', () => {
  assert.equal(articleTitle({ name: 'Edward I', title: 'King of England', eventType: 'x' }, 'people'), 'Edward I — King of England | The Iron Codex')
  assert.equal(articleTitle({ name: 'Battle of Bannockburn', eventType: 'Battle' }, 'events'), 'Battle of Bannockburn — Battle | The Iron Codex')
  assert.equal(articleTitle({ name: 'Lisbon', locationType: 'City' }, 'locations'), 'Lisbon — City | The Iron Codex')
  assert.equal(articleTitle({ name: 'Longsword', weaponArmorType: 'Weapon' }, 'weapons-armor'), 'Longsword — Weapon | The Iron Codex')
})

test('with nothing more specific, the collection names the article', () => {
  assert.equal(articleTitle({ name: 'Shroud of Turin' }, 'artifacts'), 'Shroud of Turin — Artifacts | The Iron Codex')
})

test('an unknown collection still yields a usable title', () => {
  assert.equal(articleTitle({ name: 'Mystery' }, 'nowhere'), 'Mystery | The Iron Codex')
})

test('site-level titles', () => {
  assert.equal(homeTitle(), 'The Iron Codex — A medieval history archive')
  assert.equal(pageTitle('Topics'), 'Topics — The Iron Codex')
  assert.equal(notFoundTitle(), 'Page not found — The Iron Codex')
  assert.equal(pageTitle(utilityLabel('insights')), 'Insights — The Iron Codex')
  assert.equal(utilityLabel('no-such-route'), undefined)
})

test('prerender.mjs builds no title by hand — it must import them', () => {
  const src = readFileSync(new URL('../scripts/prerender.mjs', import.meta.url), 'utf8')
  assert.match(src, /from '\.\.\/client\/src\/lib\/pageTitles\.js'/, 'prerender.mjs must import pageTitles.js')
  for (const pattern of [/— \$\{SITE_NAME\}/, /\| \$\{SITE_NAME\}/, /const SITE_NAME\s*=/, /const COLLECTION_LABEL\s*=/, /const UTILITY\s*=/]) {
    assert.doesNotMatch(src, pattern, `prerender.mjs re-creates a title source: ${pattern}`)
  }
  assert.equal(SITE_NAME, 'The Iron Codex')
})

test('the main menu is alphabetical, with Home pinned first', () => {
  // Owner rule, 2026-09-20: the menu had grown past the point where a curated
  // order was findable. Asserted rather than trusted, because the failure mode is
  // someone appending a new collection to the end of the array and nobody
  // noticing that the list is no longer sorted.
  //
  // Home is exempt on purpose: it is the site root rather than a collection, and
  // sorted it would land between Events and Houses, which reads as a mistake.
  const source = readFileSync(new URL('../client/src/components/Header.jsx', import.meta.url), 'utf8')

  const block = source.match(/const COLLECTIONS = \[([\s\S]*?)\]\.sort\(/)?.[1]
  assert.ok(block, 'could not find the COLLECTIONS array — was the menu restructured?')

  const labels = [...block.matchAll(/label:\s*'([^']+)'/g)].map((m) => m[1])
  assert.ok(labels.length >= 8, `expected the full menu, found ${labels.length} items`)

  const sorted = [...labels].sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }))
  assert.deepEqual(labels, sorted, 'the menu items are not in alphabetical order in the source')

  assert.ok(!labels.includes('Home'), 'Home belongs outside COLLECTIONS, pinned first')
  assert.match(source, /const primaryNavigation = \[HOME, \.\.\.COLLECTIONS\]/)
})
