/**
 * Puts the AI disclosure in front of the reader, in the owner's own words.
 *
 * The two AI illustrations of people in this archive already recorded that they
 * were AI-generated — but in `creator` and `note`, which the reader only meets
 * after the caption, and phrased as archival metadata rather than as a warning.
 * The owner's rule (2026-09-07) is that the caption itself must say it, in a
 * fixed sentence, before anything else:
 *
 *   "AI generated image used due to lack of real historical depictions of <name>."
 *
 * So the descriptive line each caption used to carry moves to second position and
 * the disclosure leads. The `aiGenerated: true` flag is set on both — it was
 * missing, which meant check-images could not see these images at all; that flag
 * is now what the archive-wide gate keys on.
 *
 * Idempotent: reruns leave a caption that already leads with the disclosure alone.
 */
import { readFileSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dataPath = path.join(__dirname, '../server/data/history.json')
const data = JSON.parse(readFileSync(dataPath, 'utf8'))

const DISCLOSURE = /^AI[- ]generated image used due to lack of real historical depictions of\b/i

// The trailing description each caption keeps, after the mandated sentence.
const DESCRIPTIONS = {
  'harald-fairhair': 'He is envisioned here as a Viking-age sea-king.',
  'eric-bloodaxe': 'He is envisioned here as a tenth-century Norse king before his ships.'
}

for (const [id, description] of Object.entries(DESCRIPTIONS)) {
  const person = data.characters.find((c) => c.id === id)
  if (!person) throw new Error(`missing character ${id}`)

  person.imageInfo.aiGenerated = true

  if (!DISCLOSURE.test(person.imageInfo.caption)) {
    person.imageInfo.caption =
      `AI generated image used due to lack of real historical depictions of ${person.name}. ${description}`
  }

  console.log(`${id}: aiGenerated=true`)
  console.log(`  ${person.imageInfo.caption}`)
}

writeFileSync(dataPath, JSON.stringify(data, null, 2))
