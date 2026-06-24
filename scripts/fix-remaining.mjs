import fs from 'node:fs'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dataPath = path.join(__dirname, '../server/data/history.json')
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'))

// Actual event slugs in the data
const eventKeyFiguresFixes = {
  'fall-of-western-rome': 'Romulus Augustulus (last western emperor), Odoacer (Germanic chieftain who deposed him), and Zeno of Constantinople (eastern emperor who received the western imperial regalia).',
  'charlemagne-crowned': 'Charlemagne (Frankish king and new emperor), Pope Leo III (who performed the coronation at Saint Peter\'s), and Alcuin of York (scholar and royal advisor).',
  'first-crusade-called': 'Pope Urban II (initiator at Clermont), Alexios I Komnenos (Byzantine emperor whose appeal helped prompt the call), Godfrey of Bouillon, Raymond IV of Toulouse, Bohemond I of Antioch, and Robert Curthose among the leading crusade commanders.',
  'black-death-europe': 'No commander directed the plague\'s spread. Key observers include Giovanni Boccaccio in Florence, whose Decameron records the epidemic, and chroniclers at Siena, Avignon, and other affected cities who measured mortality and social collapse.',
}

for (const event of (data.events || [])) {
  const id = (event.id || event.slug || '').toLowerCase()
  if (eventKeyFiguresFixes[id] && event.contentSections) {
    const kfSection = event.contentSections.find(s => s.title?.toLowerCase().includes('key figures'))
    if (kfSection) {
      kfSection.paragraphs = kfSection.paragraphs.filter(p => !/involved rulers, commanders, clerics, nobles/i.test(p))
      // Add only if not already present
      if (!kfSection.paragraphs.some(p => p === eventKeyFiguresFixes[id])) {
        kfSection.paragraphs.push(eventKeyFiguresFixes[id])
      }
    }
  }
}

// Fix Baldwin I: "though details are uncertain" appears in causeOfDeath, death.circumstance, and contentSections
// Remove duplicate occurrences and clean up the causeOfDeath/death.circumstance standalone entries
for (const char of (data.characters || [])) {
  const id = char.id || char.slug || ''
  if (id !== 'baldwin-i-latin-emperor') continue

  // Fix causeOfDeath - replace vague ending with known information
  if (char.causeOfDeath && /details are uncertain/i.test(char.causeOfDeath)) {
    char.causeOfDeath = 'Died in captivity after capture by the Bulgarians'
  }

  // Fix death.circumstance
  if (char.death?.circumstance && /details are uncertain/i.test(char.death.circumstance)) {
    char.death.circumstance = 'Captured by Tsar Kaloyan after the Battle of Adrianople (1205) and died in Bulgarian captivity; the exact circumstances are unknown — contemporary sources disagree whether he was executed, died of wounds, or died of ill-treatment.'
  }

  // Fix contentSections: remove duplicate of death info paragraph
  if (char.contentSections) {
    const seenParas = new Set()
    char.contentSections.forEach(sec => {
      sec.paragraphs = (sec.paragraphs || []).filter(p => {
        if (!p) return false
        if (seenParas.has(p)) return false
        seenParas.add(p)
        return true
      })
    })
    char.contentSections = char.contentSections.filter(s => s.paragraphs?.length > 0)
  }
}

fs.writeFileSync(dataPath, JSON.stringify(data, null, 2))
console.log('Remaining fixes applied.')
