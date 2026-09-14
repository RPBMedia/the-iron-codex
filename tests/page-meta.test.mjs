/**
 * Shared page metadata (client/src/lib/pageMeta.js).
 *
 * The data test at the bottom is the one that matters: it is the gate that
 * stops a blank archive card from ever shipping again, whatever field a future
 * article happens to be written with.
 */
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { leadText, clampText } from '../client/src/lib/pageMeta.js'

test('a summary wins when an article has one', () => {
  assert.equal(leadText({ summary: 'Short.', overview: ['Longer.'], details: 'Details.' }), 'Short.')
})

test('people fall back to the first overview paragraph — the blank-card bug', () => {
  // Shaped like pope-clement-v on 2026-09-14: overview present, no summary.
  const pope = { overview: ['Pope Clement V was the first of the Avignon popes.', 'A Gascon canon lawyer.'], details: '' }
  assert.equal(leadText(pope), 'Pope Clement V was the first of the Avignon popes.')
})

test('an overview written as a single string still counts', () => {
  assert.equal(leadText({ overview: 'A dynasty.' }), 'A dynasty.')
})

test('a whitespace-only summary does not hide a real overview', () => {
  assert.equal(leadText({ summary: '   ', overview: ['Real text.'] }), 'Real text.')
})

test('details are the last resort, and nothing at all is an empty string', () => {
  assert.equal(leadText({ details: 'Only details.' }), 'Only details.')
  assert.equal(leadText({}), '')
  assert.equal(leadText(null), '')
})

test('clampText leaves short text alone', () => {
  assert.equal(clampText('A short line.', 158), 'A short line.')
})

test('clampText cuts long text at a boundary, never mid-word', () => {
  const long = 'The Shroud of Turin is a linen cloth, first recorded at Lirey in Champagne in the 1350s, which later passed to the House of Savoy and was carried to Turin in 1578.'
  const out = clampText(long, 80)
  assert.ok(out.length <= 81, `too long: ${out.length}`)
  assert.ok(out.endsWith('…'))
  assert.ok(long.startsWith(out.slice(0, -1).trim()), 'must be a prefix of the original')
})

test('every article in the archive has lead text for its card', () => {
  const data = JSON.parse(readFileSync(new URL('../server/data/history.json', import.meta.url), 'utf8'))
  const blank = []
  for (const [collection, entries] of Object.entries(data)) {
    if (!Array.isArray(entries)) continue
    for (const entry of entries) {
      if (!leadText(entry)) blank.push(`${collection}/${entry.id}`)
    }
  }
  assert.deepEqual(blank, [], `articles that would render a blank card: ${blank.join(', ')}`)
})
