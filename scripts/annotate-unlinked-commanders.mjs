/**
 * Every commander who appears in a Battle/Siege article without an article of
 * their own now says WHY, in a short note under the name.
 *
 * The defect the owner found on the 717–718 siege: Maslama commanded the entire
 * expedition, is named eleven times in the prose, and rendered in the Leaders
 * block as plain grey text beside a blue linked Leo III. Nothing distinguished
 * "deferred for a documented reason" from "we forgot", and the reader has no way
 * to tell. The archive states its unknowns everywhere else — succession boxes
 * carry a status, army strengths carry a confidence and a note — and the leader
 * cards were the one place carrying an absence silently.
 *
 * Idempotent: run it again after adding a commander and it fills only what is
 * missing. A commander who later gets an article keeps the slug and drops the
 * note, since the renderer only shows the note when there is no link.
 */
import { readFileSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dataPath = path.join(__dirname, '../server/data/history.json')
const data = JSON.parse(readFileSync(dataPath, 'utf8'))

// Keyed by event id, then by the leader's name exactly as stored.
const NOTES = {
  'siege-of-rome-537': {
    'Vitiges': 'No article: no image of him survives in any form — no coin, no later depiction — so the archive cannot give him a page.'
  },
  'battle-of-nineveh': {
    'Rhahzadh': 'No article: he is known only as the commander killed in this battle, and no image or biography survives to build one from.'
  },
  'siege-of-constantinople-626': {
    'Bonus': 'No article: the patrician who commanded the defence, and no image of him survives in any form.',
    'Sergius': 'No article: the patriarch who carried the icon along the walls. No image of him survives — even his own encyclopedia entries carry none.',
    'The Khagan of the Avars (name not recorded)': 'Not a gap in this archive: no surviving source of any kind records the name of the khagan who besieged the city.',
    'Shahrbaraz': 'No article: no image of him survives in any form, not even a coin, despite his briefly taking the Persian throne in 630.'
  },
  'siege-of-constantinople-717': {
    'Maslama ibn Abd al-Malik': 'No article: he commanded the whole expedition, and no image of him survives in any form — no portrait and no coin, since he was never caliph.',
    'The Bulgar ruler (Tervel or Kormesiy — the sources do not settle it)': 'Not a gap in this archive: the sources disagree over which Bulgar ruler led the attack of 718, so neither can be named with confidence.'
  }
}

let filled = 0
for (const [eventId, byName] of Object.entries(NOTES)) {
  const event = data.events.find((e) => e.id === eventId)
  if (!event) { console.warn(`! missing event ${eventId}`); continue }
  for (const participant of event.participants ?? []) {
    for (const leader of participant.leaders ?? []) {
      const note = byName[leader.name]
      if (!note || leader.slug || leader.note) continue
      leader.note = note
      filled++
      console.log(`+ ${eventId}: ${leader.name}`)
    }
  }
}

// Report anything still bare, so a future milestone cannot quietly reintroduce
// the same silent absence.
const stillBare = []
for (const event of data.events) {
  if (!['Battle', 'Siege'].includes(event.eventType)) continue
  for (const participant of event.participants ?? []) {
    for (const leader of participant.leaders ?? []) {
      if (!leader.slug && !leader.note) stillBare.push(`${event.id}: ${leader.name}`)
    }
  }
}

console.log(`\n${filled} commander note(s) added.`)
if (stillBare.length) {
  console.log(`${stillBare.length} unlinked commander(s) still carry no explanation:`)
  stillBare.forEach((s) => console.log('  -', s))
} else {
  console.log('Every unlinked commander in the archive now explains itself.')
}

writeFileSync(dataPath, JSON.stringify(data, null, 2))
