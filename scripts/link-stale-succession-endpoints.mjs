/**
 * Succession endpoints that name a person who now HAS an article, but are still
 * plain text.
 *
 * Found while answering the owner's question about the Isaurian dynasty page:
 * Leo III's successor entry still read "Constantine V" as unlinked text, because
 * M6 wrote the entry as a backlog state and M7 created the person without going
 * back to close it. CLAUDE.md already calls the unlinked `{displayName, note}`
 * form "a transitional backlog state ... the goal is always to link it", so this
 * is a debt the rules anticipated and nothing was watching.
 *
 * Idempotent. The matching validator (validateSuccessionLinkRegression) fails the
 * build if one of these reappears.
 *
 * THE COLLISION MATTERS MORE THAN THE FIX. Matching on displayName alone finds a
 * third "candidate": John the Fearless's predecessor "Philip the Bold", which
 * resolves by alias to philip-iii-of-france — the wrong man by two centuries.
 * John's father was Philip the Bold, Duke of Burgundy (d. 1404); Philip III of
 * France (d. 1285) carries the same byname. Linking it would be exactly the
 * "wrong link is worse than a missing link" failure CLAUDE.md warns about, so the
 * name is denylisted here and in the validator rather than silently skipped.
 */
import { readFileSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dataPath = path.join(__dirname, '../server/data/history.json')
const data = JSON.parse(readFileSync(dataPath, 'utf8'))

// Names that must NEVER auto-resolve, with the reason. Same posture as
// ambiguousEntityAliases and AMBIGUOUS_DYNASTY_KEYS elsewhere in the archive.
export const AMBIGUOUS_SUCCESSION_NAMES = new Map([
  ['philip the bold', 'Philip the Bold, Duke of Burgundy (d. 1404) is not Philip III of France (d. 1285), who carries the same byname as an alias.']
])

const norm = (s) => String(s ?? '').trim().toLowerCase()
const byName = new Map()
for (const c of data.characters) {
  for (const n of [c.name, ...(c.aliases ?? [])]) {
    const k = norm(n)
    if (k && !byName.has(k)) byName.set(k, c.id)
  }
}

let linked = 0
const skipped = []
for (const c of data.characters) {
  const s = c.succession
  if (!s) continue
  for (const key of ['predecessor', 'successor']) {
    const entry = s[key]
    if (!entry || entry.personSlug || entry.status) continue
    const k = norm(entry.displayName)
    if (AMBIGUOUS_SUCCESSION_NAMES.has(k)) {
      skipped.push(`${c.id}.${key} "${entry.displayName}" — ${AMBIGUOUS_SUCCESSION_NAMES.get(k)}`)
      continue
    }
    const id = byName.get(k)
    if (!id || id === c.id) continue
    entry.personSlug = id
    linked++
    console.log(`+ ${c.id}.${key} -> ${id}`)
  }
}

console.log(`\n${linked} stale endpoint(s) linked.`)
if (skipped.length) {
  console.log(`${skipped.length} deliberately NOT linked:`)
  skipped.forEach((s) => console.log('  -', s))
}

writeFileSync(dataPath, JSON.stringify(data, null, 2))
