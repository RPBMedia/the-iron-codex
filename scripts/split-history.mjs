/**
 * One-off migration (QUEUE 0m, M1): split server/data/history.json into one file
 * per article under server/data/archive/, then prove that loading the split archive
 * reproduces history.json exactly. It refuses to finish if the two differ.
 *
 *   node scripts/split-history.mjs
 */
import { readFileSync } from 'node:fs'
import { loadArchive, saveArchive, ARCHIVE_DIR } from '../server/data/archive.mjs'

const source = new URL('../server/data/history.json', import.meta.url)
const original = JSON.parse(readFileSync(source, 'utf8'))

const changed = saveArchive(original)
const reloaded = loadArchive()

if (JSON.stringify(reloaded) !== JSON.stringify(original)) {
  console.error('split archive does NOT reproduce history.json; do not delete history.json')
  process.exit(1)
}

const counts = Object.fromEntries(Object.entries(reloaded).map(([k, v]) => [k, v.length]))
console.log(`wrote ${changed} file(s) to ${ARCHIVE_DIR}`)
console.log('collections:', counts)
console.log('verified: loadArchive() reproduces history.json exactly')
