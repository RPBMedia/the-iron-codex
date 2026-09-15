/**
 * Normalise the `period` field: "Middle Ages", never "medieval".
 *
 * The archive had grown two conventions side by side — "Late Middle Ages" on some
 * cards and "Late medieval" on others — which reads as carelessness when two cards
 * sit next to each other in the grid. The owner spotted it on the Weapons & Armor
 * index, where "Churburg Armoury — LATE MIDDLE AGES" sat beside "Coat of Plates —
 * HIGH TO LATE MEDIEVAL".
 *
 * Rule: the era is written "Middle Ages", with an appropriate prefix (Early, High,
 * Late, or a range). "Medieval" is not used as a period label anywhere. Named
 * periods that are not the Middle Ages — the Viking Age — keep their own names.
 *
 * Deliberately a general transform rather than a lookup table, so variants that
 * were never in the data are handled the same way.
 */
import { readFileSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dataPath = path.join(__dirname, '../server/data/history.json')
const data = JSON.parse(readFileSync(dataPath, 'utf8'))

/** "Early to late medieval" -> "Early to Late Middle Ages" */
function normalisePeriod(value) {
  let out = value

  // "…medieval" -> "…Middle Ages", whatever precedes it.
  out = out.replace(/\bmedieval\b/gi, 'Middle Ages')

  // Capitalise the era qualifiers wherever they appear, so "Early to late" and
  // "High and late" come out consistent with "Late Middle Ages".
  out = out.replace(/\b(early|high|late)\b/gi, (m) => m[0].toUpperCase() + m.slice(1).toLowerCase())

  // "Middle Ages and later ceremonial use" reads better than "Middle Ages and
  // later…" produced from "Medieval and later…", but the transform already gives
  // that; just tidy any doubled spacing.
  return out.replace(/\s+/g, ' ').trim()
}

const changes = []
for (const [collection, entries] of Object.entries(data)) {
  if (!Array.isArray(entries)) continue
  for (const entry of entries) {
    if (typeof entry.period !== 'string' || !entry.period) continue
    const next = normalisePeriod(entry.period)
    if (next !== entry.period) {
      changes.push(`${collection}/${entry.id}: "${entry.period}" -> "${next}"`)
      entry.period = next
    }
  }
}

writeFileSync(dataPath, JSON.stringify(data, null, 2))

const summary = new Map()
for (const line of changes) {
  const key = line.replace(/^[^:]+: /, '')
  summary.set(key, (summary.get(key) ?? 0) + 1)
}
console.log(`${changes.length} period values normalised\n`)
for (const [k, v] of [...summary].sort()) console.log(`  ${String(v).padStart(3)}  ${k}`)
