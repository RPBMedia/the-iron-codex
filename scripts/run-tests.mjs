/**
 * Test runner.
 *
 * Exists because `node --test tests/*.test.mjs` in the Vercel build command
 * depends on the SHELL expanding the glob, and on the CLI accepting a file list —
 * two things that vary by build image and Node version. It failed on Vercel while
 * passing locally in a clean clone, which is exactly the kind of difference not
 * worth debugging remotely when it can be removed.
 *
 * Discovery happens in Node here, so nothing depends on the shell, and the
 * programmatic `run()` API behaves the same across versions.
 */
import { run } from 'node:test'
import { spec } from 'node:test/reporters'
import { readdirSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const testsDir = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'tests')

const files = readdirSync(testsDir)
  .filter((f) => f.endsWith('.test.mjs'))
  .map((f) => path.join(testsDir, f))
  .sort()

if (!files.length) {
  console.error('No test files found in tests/ — refusing to pass vacuously.')
  process.exit(1)
}

console.log(`Running ${files.length} test file(s):`)
for (const f of files) console.log('  ' + path.basename(f))

let failed = 0
run({ files, concurrency: true })
  .on('test:fail', () => { failed++ })
  .compose(spec)
  .pipe(process.stdout)

process.on('exit', () => {
  if (failed > 0) process.exitCode = 1
})
