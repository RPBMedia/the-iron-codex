/** Audit every ruler's predecessor/successor state. Read-only. */
import fs from 'node:fs'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
const __dirname = path.dirname(fileURLToPath(import.meta.url))
const data = JSON.parse(fs.readFileSync(path.join(__dirname, '../server/data/history.json'), 'utf8'))
const bySlug = new Map(data.characters.map(c => [c.id, c]))

function describe(e) {
  if (!e) return 'MISSING'
  if (e.personSlug) return `LINK -> ${e.personSlug}${bySlug.has(e.personSlug) ? '' : ' [BROKEN!]'}`
  if (e.status) return `status:${e.status} "${e.displayName || ''}"${e.note ? '' : ' [NO NOTE]'}`
  return `NAMED-UNLINKED "${e.displayName || ''}"${e.note ? '' : ' [NO NOTE]'}`
}

const rulers = data.characters.filter(c => c.isRuler && c.succession)
console.log(`Total rulers with succession: ${rulers.length}\n`)

const namedUnlinked = []
for (const r of rulers) {
  const s = r.succession
  const p = describe(s.predecessor), su = describe(s.successor)
  const flag = /NAMED-UNLINKED|MISSING|BROKEN|NO NOTE/.test(p + su)
  if (flag) {
    console.log(`${r.name} (${r.id})`)
    console.log(`   pred: ${p}`)
    console.log(`   succ: ${su}`)
  }
  if (/NAMED-UNLINKED/.test(p)) namedUnlinked.push(`${r.name} pred -> ${s.predecessor.displayName}`)
  if (/NAMED-UNLINKED/.test(su)) namedUnlinked.push(`${r.name} succ -> ${s.successor.displayName}`)
}

console.log(`\n--- ${namedUnlinked.length} NAMED-UNLINKED endpoints ---`)
namedUnlinked.forEach(x => console.log('  ' + x))
