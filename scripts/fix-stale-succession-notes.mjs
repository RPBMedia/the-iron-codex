/**
 * Eighteen succession endpoints say "No article yet in this archive" directly
 * underneath a working link to that very article.
 *
 * The succession note renders unconditionally in DetailPage — unlike the
 * commander note, which the renderer suppresses when there is a link — so on Leo
 * III's page "Constantine V" is a blue link with "Article planned for Track A M7"
 * printed below it. M7 shipped weeks ago.
 *
 * This is the twin of the bug the succession-link regression check was built for.
 * That check catches the case where the article appears and the LINK is never
 * wired. Nothing was watching the case where the link IS wired and the NOTE is
 * left behind, which is the same oversight one field to the left.
 *
 * The notes themselves are good — each is a one-line characterisation of the
 * person, which is what the field is for. Only the trailing status sentence is
 * stale, so only that is removed. A guard is added to check-content-quality.mjs
 * so the pairing cannot drift again.
 */
import { readFileSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dataPath = path.join(__dirname, '../server/data/history.json')
const data = JSON.parse(readFileSync(dataPath, 'utf8'))

// Matches the trailing status sentence and the whitespace before it, and nothing
// else. Anchored to the end so a note that discusses another person's missing
// article mid-sentence is left alone.
const STALE_TAIL = /\s*(?:No article yet in this archive|No article in this archive|Article planned for Track [A-Z] M\d+)\.?\s*$/i

let fixed = 0
for (const c of data.characters) {
  for (const side of ['predecessor', 'successor']) {
    const entry = c.succession?.[side]
    if (!entry?.personSlug || !entry.note) continue
    const trimmed = entry.note.replace(STALE_TAIL, '').trim()
    if (trimmed === entry.note.trim()) continue
    if (!trimmed) {
      console.warn(`! ${c.id} ${side}: note is nothing but the stale sentence — left alone for review`)
      continue
    }
    entry.note = trimmed
    fixed++
    console.log(`${c.id} ${side} -> ${entry.personSlug}`)
  }
}

console.log(`\n${fixed} stale note(s) corrected.`)

// Report any that remain, so this cannot quietly half-finish.
const STALE = /no article yet|article planned|no article in this archive/i
const left = data.characters.flatMap((c) =>
  ['predecessor', 'successor']
    .map((side) => c.succession?.[side])
    .filter((s) => s?.personSlug && s.note && STALE.test(s.note))
)
console.log(left.length
  ? `WARNING: ${left.length} linked endpoint(s) still claim no article exists.`
  : 'Every linked succession endpoint now describes the person rather than the backlog.')

writeFileSync(dataPath, JSON.stringify(data, null, 2))
