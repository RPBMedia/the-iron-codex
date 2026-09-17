/**
 * The archive on disk (QUEUE 0m, M1): one JSON file per article plus index.json.
 *
 * Every page, gate and build step reads the data through loadArchive(), so a file
 * the index doesn't list, or an index entry with no file, would silently drop or
 * break an article. These tests check that the two agree and that saving the
 * archive and loading it back changes nothing.
 */
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { mkdtempSync, readdirSync, readFileSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import path from 'node:path'
import { ARCHIVE_DIR, loadArchive, saveArchive } from '../server/data/archive.mjs'

const EXPECTED = ['events', 'characters', 'artifacts', 'locations', 'weaponsArmor', 'houses', 'orders', 'civilizations']

/**
 * Collections allowed to be registered but still empty.
 *
 * `civilizations` (QUEUE 0e) is built architecture-first by instruction: the
 * collection, route, index, filters, entity-link type and prerender support all
 * land before a single article does, so that the first article is written
 * against a finished surface rather than the surface being retrofitted around
 * it. Between those two moments the collection is legitimately empty.
 *
 * The exemption is self-removing, which is the point. The second test below
 * fails the moment this collection HAS articles, so the allowance cannot quietly
 * outlive its reason the way a comment would. When the first civilization
 * article lands, delete the id from this set — the suite will tell you to.
 */
const ALLOWED_EMPTY = new Set(['civilizations'])

test('the archive loads every collection, each with articles', () => {
  const data = loadArchive()
  for (const collection of EXPECTED) {
    assert.ok(Array.isArray(data[collection]), `${collection} is missing`)
    if (ALLOWED_EMPTY.has(collection)) continue
    assert.ok(data[collection].length > 0, `${collection} is empty`)
  }
})

test('no collection is still exempted from the empty check once it has articles', () => {
  const data = loadArchive()
  for (const collection of ALLOWED_EMPTY) {
    assert.equal(
      data[collection]?.length ?? 0,
      0,
      `${collection} now has articles — remove it from ALLOWED_EMPTY in this file so the empty check guards it again`
    )
  }
})

test('index.json and the article files agree exactly', () => {
  const { collections } = JSON.parse(readFileSync(path.join(ARCHIVE_DIR, 'index.json'), 'utf8'))
  for (const [collection, ids] of Object.entries(collections)) {
    assert.equal(new Set(ids).size, ids.length, `${collection} lists an id twice`)
    const files = readdirSync(path.join(ARCHIVE_DIR, collection)).filter((f) => f.endsWith('.json')).map((f) => f.slice(0, -5))
    assert.deepEqual([...files].sort(), [...ids].sort(), `${collection}: files on disk differ from index.json`)
    for (const id of ids) {
      const article = JSON.parse(readFileSync(path.join(ARCHIVE_DIR, collection, `${id}.json`), 'utf8'))
      assert.equal(article.id, id, `${collection}/${id}.json holds article "${article.id}"`)
    }
  }
})

test('saving the archive and loading it back reproduces it exactly', () => {
  const data = loadArchive()
  const dir = mkdtempSync(path.join(tmpdir(), 'iron-codex-archive-'))
  try {
    saveArchive(data, dir)
    assert.equal(JSON.stringify(loadArchive(dir)), JSON.stringify(data))
  } finally {
    rmSync(dir, { recursive: true, force: true })
  }
})
