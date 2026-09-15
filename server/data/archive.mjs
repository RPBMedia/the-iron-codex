/**
 * The archive on disk: one JSON file per article (QUEUE 0m, M1 data split).
 *
 * The whole archive used to live in a single `history.json`. The complete rulers
 * program would grow that by tens of megabytes, so it is stored instead as
 * `archive/<collection>/<id>.json`, with `archive/index.json` recording each
 * collection's article order. `loadArchive()` returns exactly the object
 * `history.json` used to hold ({ events, characters, locations, … }), so code
 * that reads the data does not change. A change to one article now rewrites one
 * small file, not the whole archive.
 *
 * `saveArchive()` writes only the files whose contents changed, removes files for
 * articles that no longer exist, and always rewrites `index.json`. That makes
 * `archiveVersion()` (its modification time) a cheap signal that the archive
 * changed.
 */
import { existsSync, mkdirSync, readFileSync, readdirSync, statSync, unlinkSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

export const ARCHIVE_DIR = path.join(path.dirname(fileURLToPath(import.meta.url)), 'archive')

const indexPath = (dir) => path.join(dir, 'index.json')
const articlePath = (dir, collection, id) => path.join(dir, collection, `${id}.json`)
const serialise = (value) => `${JSON.stringify(value, null, 2)}\n`

export function loadArchive(dir = ARCHIVE_DIR) {
  const { collections } = JSON.parse(readFileSync(indexPath(dir), 'utf8'))
  const data = {}
  for (const [collection, ids] of Object.entries(collections)) {
    data[collection] = ids.map((id) => JSON.parse(readFileSync(articlePath(dir, collection, id), 'utf8')))
  }
  return data
}

export function archiveVersion(dir = ARCHIVE_DIR) {
  return statSync(indexPath(dir)).mtimeMs
}

export function saveArchive(data, dir = ARCHIVE_DIR) {
  const collections = {}
  let changed = 0

  for (const [collection, items] of Object.entries(data)) {
    if (!Array.isArray(items)) throw new Error(`archive collection "${collection}" is not an array`)
    const ids = items.map((item) => {
      const id = item?.id
      if (typeof id !== 'string' || !/^[a-z0-9][a-z0-9-]*$/.test(id)) {
        throw new Error(`${collection}: article id ${JSON.stringify(id)} is not a safe file name`)
      }
      return id
    })
    const seen = new Set()
    for (const id of ids) {
      if (seen.has(id)) throw new Error(`${collection}: duplicate article id "${id}"`)
      seen.add(id)
    }

    mkdirSync(path.join(dir, collection), { recursive: true })
    for (const item of items) {
      const file = articlePath(dir, collection, item.id)
      const text = serialise(item)
      if (!existsSync(file) || readFileSync(file, 'utf8') !== text) {
        writeFileSync(file, text)
        changed++
      }
    }
    for (const name of readdirSync(path.join(dir, collection))) {
      if (name.endsWith('.json') && !seen.has(name.slice(0, -5))) {
        unlinkSync(path.join(dir, collection, name))
        changed++
      }
    }
    collections[collection] = ids
  }

  writeFileSync(indexPath(dir), serialise({ collections }))
  return changed
}
