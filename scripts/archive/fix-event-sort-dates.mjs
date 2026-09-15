/**
 * The events index sorts chronologically off a hand-written day-precision map in
 * server/index.js. An event missing from that map falls back to `{ year }`, which
 * the sort key turns into `year * 10000` — 1 January of that year.
 *
 * So an undated event always sorts BEFORE every dated event of the same year,
 * regardless of when it happened. The map had 43 entries and the archive has 93
 * events, and nothing has ever checked the gap.
 *
 * The visible consequence, found by scripts/audit-track-a-integration.mjs:
 *
 *   Myriokephalon (17 September 1176) sorted before Legnano (29 May 1176).
 *   Ad Decimum, Tricamarum and the Vandalic War (all 533) tied at 5330000, so
 *     their order was whatever the array happened to give.
 *   Vladimir (February 1238) and the Sit river (March 1238) likewise tied.
 *
 * This adds the eight events that share a year with another event. Events alone
 * in their year are left out deliberately: a sort key of 1 January is harmless
 * when there is nothing to sort against, and adding fifty entries nobody needs
 * makes the map harder to maintain, not easier.
 *
 * The regression guard is the other half of this fix and lives in
 * check-content-quality.mjs: any two events sharing a year must BOTH carry a
 * sort date. That is the rule this map has always implied and never stated.
 */
import { readFileSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const serverPath = path.join(__dirname, '../server/index.js')
let src = readFileSync(serverPath, 'utf8')

// Every date below is the conventional one given in the article itself.
const ADDITIONS = [
  ["'vandalic-war'", '{ year: 533, month: 6, day: 21 }', "the fleet sails from Constantinople; the war runs to March 534"],
  ["'battle-of-ad-decimum'", '{ year: 533, month: 9, day: 13 }', ''],
  ["'battle-of-tricamarum'", '{ year: 533, month: 12, day: 15 }', ''],
  ["'battle-of-fulford'", '{ year: 1066, month: 9, day: 20 }', ''],
  ["'battle-of-myriokephalon'", '{ year: 1176, month: 9, day: 17 }', ''],
  ["'siege-of-vladimir'", '{ year: 1238, month: 2, day: 7 }', 'the day the city fell; the assault began on the 3rd'],
  ["'battle-of-the-sit-river'", '{ year: 1238, month: 3, day: 4 }', ''],
  ["'battle-of-legnica'", '{ year: 1241, month: 4, day: 9 }', '']
]

const anchor = "  'battle-of-castillon': { year: 1453, month: 7, day: 17 }\n}"
if (!src.includes(anchor)) throw new Error('eventSortDates anchor not found — did the map change?')

const already = ADDITIONS.filter(([k]) => src.includes(`  ${k}:`))
const pending = ADDITIONS.filter(([k]) => !src.includes(`  ${k}:`))

if (pending.length) {
  const lines = pending
    .map(([k, v, note]) => `  ${k}: ${v}${note ? `, // ${note}` : ','}`)
    .join('\n')
  src = src.replace(
    anchor,
    `  'battle-of-castillon': { year: 1453, month: 7, day: 17 },\n` +
    `  // Added by M14 integration: these share a year with another event, and an\n` +
    `  // event missing from this map sorts to 1 January and jumps the queue.\n` +
    `${lines.replace(/,(\s*\/\/[^\n]*)?$/, '$1')}\n}`
  )
  writeFileSync(serverPath, src)
}

for (const [k] of pending) console.log(`added ${k}`)
for (const [k] of already) console.log(`already present ${k}`)
