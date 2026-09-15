/**
 * Archive-page search ranking (owner report, 2026-09-15): searching People for
 * "Saladin" must put Saladin's own article first, not the alphabetically earlier
 * articles that merely mention him.
 */
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { byRelevanceThen, matchesSearch, normalizeSearch, searchRelevance } from '../client/src/lib/collectionSearch.js'
import { loadArchive } from '../server/data/archive.mjs'

const alphabetical = (a, b) => a.name.localeCompare(b.name)

test('an exact name beats an alias, a partial name and a text mention', () => {
  const query = 'Saladin'
  assert.ok(searchRelevance({ name: 'Saladin' }, query) > searchRelevance({ name: 'Yusuf', aliases: ['Saladin'] }, query))
  assert.ok(searchRelevance({ name: 'Yusuf', aliases: ['Saladin'] }, query) > searchRelevance({ name: 'Saladin the Elder' }, query))
  assert.ok(searchRelevance({ name: 'Saladin the Elder' }, query) > searchRelevance({ name: 'Al-Adil I' }, query))
  assert.equal(searchRelevance({ name: 'Anything' }, ''), 0)
})

test('matching ignores case and accents', () => {
  assert.equal(searchRelevance({ name: 'Władysław II Jagiełło' }, 'wladyslaw ii jagiello'), 6)
})

test('searching People for "Saladin" lists his article first', () => {
  const people = loadArchive().characters
  const matches = people.filter((person) => JSON.stringify(person).toLowerCase().includes('saladin'))
  assert.ok(matches.length > 20, 'expected many articles that mention Saladin')
  const ranked = [...matches].sort(byRelevanceThen('Saladin', alphabetical))
  assert.equal(ranked[0].id, 'saladin')
})

test('without a query the chosen sort is untouched', () => {
  const items = [{ name: 'B' }, { name: 'A' }]
  assert.deepEqual([...items].sort(byRelevanceThen('', alphabetical)).map((i) => i.name), ['A', 'B'])
})

// The filter runs before the ranking. The first version fixed only the ranking,
// so "wladyslaw jagiello" still found nothing. These run the whole path.
const peopleSearch = (query) => {
  const people = loadArchive().characters
  const matches = people.filter((person) => matchesSearch(normalizeSearch(JSON.stringify(person)), query))
  return matches.sort(byRelevanceThen(query, alphabetical))
}

test('the filter matches every word in any order, folding ł', () => {
  assert.equal(matchesSearch(normalizeSearch('Władysław II Jagiełło'), 'wladyslaw jagiello'), true)
  assert.equal(matchesSearch(normalizeSearch('Władysław II Jagiełło'), 'jagiello wladyslaw'), true)
  assert.equal(matchesSearch(normalizeSearch('Władysław II Jagiełło'), 'wladyslaw casimir'), false)
})

test('People search for "wladyslaw jagiello" finds Władysław II Jagiełło first', () => {
  const ranked = peopleSearch('wladyslaw jagiello')
  assert.ok(ranked.length > 0, 'no results')
  assert.equal(ranked[0].id, 'wladyslaw-ii-jagiello')
})

test('People search for "Saladin" still puts him first through the filter', () => {
  assert.equal(peopleSearch('Saladin')[0].id, 'saladin')
})
