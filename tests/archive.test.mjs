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

const EXPECTED = ['events', 'characters', 'artifacts', 'locations', 'weaponsArmor', 'houses', 'orders']

test('the archive loads every collection, each with articles', () => {
  const data = loadArchive()
  for (const collection of EXPECTED) {
    assert.ok(Array.isArray(data[collection]), `${collection} is missing`)
    assert.ok(data[collection].length > 0, `${collection} is empty`)
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
