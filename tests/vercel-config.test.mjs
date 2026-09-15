/**
 * vercel.json is validated by Vercel before a build starts, so a bad value fails the
 * deployment in 0 ms with no build log. ec64dce and c163453 both failed that way:
 * the build command had grown to 258 characters against a schema limit of 256.
 * The full deploy chain now lives in package.json's "vercel-build" script.
 */
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'

const read = (file) => JSON.parse(readFileSync(new URL(`../${file}`, import.meta.url), 'utf-8'))

test('vercel.json buildCommand stays within the 256-character schema limit', () => {
  const { buildCommand } = read('vercel.json')
  assert.ok(buildCommand.length <= 256, `buildCommand is ${buildCommand.length} characters`)
})

test('the deploy chain runs the unit tests and the content gates', () => {
  const { buildCommand } = read('vercel.json')
  const chain = read('package.json').scripts[buildCommand.replace(/^npm run /, '')] ?? buildCommand
  for (const step of ['run-tests.mjs', 'check-content-quality.mjs', 'check-images.mjs', 'check-seo.mjs']) {
    assert.ok(chain.includes(step), `deploy chain is missing ${step}`)
  }
})
