import fs from 'node:fs'

const dataPath = new URL('../server/data/history.json', import.meta.url)
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'))

const suspiciousPatterns = [
  /developed in the context of regional medieval politics/i,
  /was shaped by lordship/i,
  /rulers, aristocracies, churches, cities, and armies constantly negotiated power/i,
  /played an important role/i,
  /was connected to warfare and diplomacy/i,
  /became significant over time/i,
  /had an impact on later history/i,
  /control of land and routes mattered/i,
  /balance between central power and regional autonomy/i,
  /legacy continued/i,
  /important in medieval Europe/i,
  /this figure was influential/i,
  /this artifact was meaningful/i,
  /mattered historically/i,
  /surviving evidence must often be read/i,
  /was central to .* historical importance/i,
  /appears in .*major.*phase.*reign/i,
  /is central to .* place in medieval history/i,
  /career connects directly/i,
  /included in IronCodex because/i,
  /appears in IronCodex/i,
  /serving as a generic map point/i,
  /Death details are summarized cautiously/i,
  /Birth details are not securely preserved/i,
  /the article keeps .* cautious/i,
  /where medieval sources disagree/i
]

const suspiciousTimelinePatterns = [
  ...suspiciousPatterns,
  /appears in .*major.*phase/i,
  /major.*phase.*reign/i,
  /is involved in important events/i,
  /becomes significant/i,
  /shapes medieval history/i,
  /continues to influence events/i,
  /continues to influence/i,
  /this event marks an important moment/i,
  /important moment/i,
  /the ruler'?s reign continues/i,
  /the person is associated with this period/i,
  /marks a documented or traditionally reported stage/i,
  /according to the approximate chronology/i,
  /interpreted cautiously where the medieval evidence is thin/i
]

const findings = []

function labelFor(item) {
  return item.id || item.slug || item.name || item.title || 'unknown-entry'
}

function walk(value, path, context) {
  if (typeof value === 'string') {
    const match = suspiciousPatterns.find((pattern) => pattern.test(value))
    if (match) {
      findings.push({
        collection: context.collection,
        article: context.article,
        path,
        pattern: match.source,
        snippet: value.slice(0, 220)
      })
    }
    return
  }

  if (Array.isArray(value)) {
    value.forEach((item, index) => walk(item, `${path}[${index}]`, context))
    return
  }

  if (value && typeof value === 'object') {
    Object.entries(value).forEach(([key, nested]) => {
      walk(nested, path ? `${path}.${key}` : key, context)
    })
  }
}

for (const [collection, entries] of Object.entries(data)) {
  if (!Array.isArray(entries)) continue

  for (const entry of entries) {
    walk(entry, '', { collection, article: labelFor(entry) })

    if (collection === 'characters') {
      validatePersonTimeline(entry)
    }
  }
}

function validatePersonTimeline(person) {
  const timeline = person.timeline ?? []

  if (timeline.length < 5) {
    findings.push({
      collection: 'characters',
      article: labelFor(person),
      path: 'timeline',
      pattern: 'minimum timeline length',
      snippet: `Person timeline has ${timeline.length} event(s); expected at least 5.`
    })
  }

  const descriptions = new Map()

  timeline.forEach((item, index) => {
    const path = `timeline[${index}]`
    const description = String(item.description ?? '').trim()

    if (!description) {
      findings.push({
        collection: 'characters',
        article: labelFor(person),
        path,
        pattern: 'missing timeline description',
        snippet: `${item.date ?? 'undated'} — ${item.title ?? 'untitled'}`
      })
      return
    }

    const match = suspiciousTimelinePatterns.find((pattern) => pattern.test(description))

    if (match) {
      findings.push({
        collection: 'characters',
        article: labelFor(person),
        path: `${path}.description`,
        pattern: match.source,
        snippet: description.slice(0, 220)
      })
    }

    descriptions.set(description, [...(descriptions.get(description) ?? []), index])
  })

  for (const [description, indexes] of descriptions) {
    if (indexes.length > 1) {
      findings.push({
        collection: 'characters',
        article: labelFor(person),
        path: `timeline[${indexes.join(',')}].description`,
        pattern: 'duplicate timeline description',
        snippet: description.slice(0, 220)
      })
    }
  }
}

if (findings.length) {
  console.error(`Content quality check found ${findings.length} suspicious phrase(s):`)
  for (const finding of findings) {
    console.error(
      `- ${finding.collection}/${finding.article} ${finding.path}: ${finding.snippet}`
    )
  }
  process.exit(1)
}

console.log('Content quality check passed: no suspicious template phrases found.')
