/**
 * Guards on the auto-linker's ambiguous aliases.
 *
 * Why this exists. `check-content-quality` hard-fails on a MISSING link and
 * never on a WRONG one, so the single worst failure mode the archive has —
 * sending a reader to a different person, place or century — had no gate at all.
 * Every hazard below was found by hand, one at a time, and each was doing real
 * damage or was one article away from it:
 *
 *   Alexander        the Byzantine emperor's BARE label swallowed 70 strings,
 *                    every "Alexander III" on the Scottish pages among them.
 *   Teresa of Portugal  the countess who died in 1130, versus Alfonso IX's wife,
 *                    Sancho I's daughter, married in 1191.
 *   Shrewsbury       an earldom before it is a battle: 13 occurrences in
 *                    john-talbot, who holds the title.
 *   Adrianople       the city, filed as `edirne`, which therefore never claimed
 *                    the name. Valens in 378 and the Ottoman capture of 1361 are
 *                    both "Adrianople" and neither is the battle of 1205.
 *   Najera           a town in the Rioja.
 *   Stephen I        Hungary's king, versus Stephen of England, who IS Stephen I
 *                    of England in ordinary usage.
 *
 * These tests do not check the SCORING — that lives in resolveAmbiguousAlias
 * inside DetailPage.jsx and runs under the render gate. They check that the
 * guards exist, are well formed, point at real articles, and are not quietly
 * deleted. A guard removed by accident should fail a build, not a reader.
 */
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { entityLinks, ambiguousEntityAliases } from '../client/src/lib/entityLinks.js'
import { loadArchive } from '../server/data/archive.mjs'

const TYPE_TO_COLLECTION = {
  person: 'characters',
  event: 'events',
  location: 'locations',
  kingdom: 'locations',
  polity: 'locations',
  artifact: 'artifacts',
  document: 'artifacts',
  weaponArmor: 'weaponsArmor',
  order: 'orders'
}

// Each of these was a real, documented wrong-link hazard. Removing a guard must
// break the build rather than quietly restore the bug.
const MUST_STAY_GUARDED = [
  'Alexander',
  'Teresa of Portugal',
  'Shrewsbury',
  'Adrianople',
  'Nájera',
  'Stephen I'
]

test('every ambiguous-alias entry is well formed', () => {
  assert.ok(Array.isArray(ambiguousEntityAliases), 'ambiguousEntityAliases must be an array')
  assert.ok(ambiguousEntityAliases.length > 0, 'the guard list must not be empty')

  for (const entry of ambiguousEntityAliases) {
    const label = JSON.stringify(entry.terms)
    assert.ok(Array.isArray(entry.terms) && entry.terms.length > 0, `entry has no terms: ${label}`)
    for (const term of entry.terms) {
      assert.equal(typeof term, 'string', `non-string term in ${label}`)
      assert.ok(term.trim().length > 0, `empty term in ${label}`)
    }
    assert.ok(
      Array.isArray(entry.possibleTargets) && entry.possibleTargets.length > 0,
      `${label} has no possibleTargets — a guard with no target silently links nothing`
    )
    for (const target of entry.possibleTargets) {
      assert.ok(target.slug, `${label} has a target with no slug`)
      assert.ok(target.type, `${label} target ${target.slug} has no type`)
      assert.ok(target.label, `${label} target ${target.slug} has no label`)
      assert.ok(
        Array.isArray(target.contextHints) && target.contextHints.length > 0,
        `${label} target ${target.slug} has no contextHints — scoring would always be 0, so it could never link`
      )
    }
  }
})

test('every guarded target points at an article that exists', () => {
  const data = loadArchive()
  for (const entry of ambiguousEntityAliases) {
    for (const target of entry.possibleTargets ?? []) {
      const collection = TYPE_TO_COLLECTION[target.type]
      assert.ok(collection, `unknown target type "${target.type}" for ${target.slug}`)
      const found = (data[collection] ?? []).some((a) => a.id === target.slug)
      assert.ok(found, `guarded target ${target.slug} is not in ${collection}`)
    }
  }
})

test('no term is claimed by two different guard entries', () => {
  const seen = new Map()
  for (const entry of ambiguousEntityAliases) {
    for (const term of entry.terms ?? []) {
      const key = term.toLowerCase()
      assert.ok(
        !seen.has(key),
        `"${term}" is guarded twice, so which entry wins depends on array order`
      )
      seen.set(key, entry)
    }
  }
})

test('the hazards found by hand stay guarded', () => {
  const guarded = new Set()
  for (const entry of ambiguousEntityAliases) {
    for (const term of entry.terms ?? []) guarded.add(term.toLowerCase())
  }
  for (const term of MUST_STAY_GUARDED) {
    assert.ok(
      guarded.has(term.toLowerCase()),
      `"${term}" lost its guard. It was a real wrong-link bug once; see the comment in entityLinks.js before removing it.`
    )
  }
})

test('every guarded term is a live link term, or the guard is dead code', () => {
  // Precedence, read from findEntityMatches in DetailPage.jsx: candidates are
  // built from entityLinks labels and aliases FIRST, and resolveAmbiguousAlias
  // then runs per candidate, returning null to suppress the link or a different
  // entry to redirect it. So a guard only ever fires on a term the link table
  // already mints. A guarded term absent from the table guards nothing.
  //
  // (An earlier version of this test asserted the opposite — that a guarded term
  // must NOT be a minted alias — and every guard in the file failed it. The
  // assumption was wrong, not the data.)
  const minted = new Set()
  for (const entry of entityLinks) {
    for (const term of [entry.label, ...(entry.aliases ?? [])]) {
      if (term) minted.add(term.toLowerCase())
    }
  }
  const dead = []
  for (const entry of ambiguousEntityAliases) {
    for (const term of entry.terms ?? []) {
      if (!minted.has(term.toLowerCase())) dead.push(term)
    }
  }
  assert.deepEqual(
    dead,
    [],
    `these terms are guarded but never minted as link terms, so the guard can never fire: ${dead.join(', ')}`
  )
})
