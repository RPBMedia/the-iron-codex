/**
 * Military orders link to their own articles (owner rule, 2026-09-15). Ulrich von
 * Jungingen's Realm/polity read "Teutonic Order" as plain text, and nine other
 * members carried their order in Dynasty/house, which only ever linked to Houses.
 * The server now attaches order links, the same way it attaches a dynasty's
 * House, and the page renders both fields as links.
 */
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { enrichArticle, withOrderLinks } from '../server/article-enrichment.js'
import { loadArchive } from '../server/data/archive.mjs'

const data = loadArchive()
const person = (id) => data.characters.find((p) => p.id === id)

test('a realm that is a military order links to the order', () => {
  const ulrich = enrichArticle(person('ulrich-von-jungingen'), data)
  assert.deepEqual(ulrich.orderLinks?.realm, { slug: 'teutonic-order', name: 'Teutonic Order' })
})

test('a dynasty that is a military order links to the order', () => {
  assert.equal(enrichArticle(person('hugh-de-payns'), data).orderLinks?.dynasty?.slug, 'knights-templar')
  assert.equal(enrichArticle(person('hermann-von-salza'), data).orderLinks?.dynasty?.slug, 'teutonic-order')
})

test('ordinary realms and dynasties get no order link', () => {
  const henry = enrichArticle(person('henry-i-of-england'), data)
  assert.equal(henry.orderLinks, undefined)
  assert.ok(henry.dynastyHouse?.slug, 'the House link still resolves')
})

test('non-person articles are left alone', () => {
  const order = data.orders.find((o) => o.id === 'teutonic-order')
  assert.equal(withOrderLinks(order, data), order)
})
