import fs from 'node:fs'

const dataPath = new URL('../server/data/history.json', import.meta.url)
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'))

// Hard failure: historicalReliability field must not exist
const hardFailings = []
for (const [collection, entries] of Object.entries(data)) {
  if (!Array.isArray(entries)) continue
  for (const entry of entries) {
    if ('historicalReliability' in entry) {
      hardFailings.push(`${collection}/${entry.id || entry.slug || entry.name || 'unknown'}: has forbidden 'historicalReliability' field`)
    }
  }
}
if (hardFailings.length) {
  console.error(`HARD FAILURE: ${hardFailings.length} article(s) still have the removed 'historicalReliability' field:`)
  hardFailings.forEach(f => console.error(' -', f))
  process.exit(1)
}

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
  /surviving examples and manuscript images must be read together/i,
  /was central to .* historical importance/i,
  /appears in .*major.*phase.*reign/i,
  /is central to .* place in medieval history/i,
  /career connects directly/i,
  /included in IronCodex because/i,
  /appears in IronCodex/i,
  /IronCodex role is to make linked biographical facts/i,
  /serving as a generic map point/i,
  /Death details are summarized cautiously/i,
  /Birth details are not securely preserved/i,
  /the article keeps .* cautious/i,
  /where medieval sources disagree/i,
  // Location template phrases
  /geography shaped movement, defense, worship, trade, or politics/i,
  /medieval history of .+ is tied to regional power and to the people or events listed in its archive connections/i,
  /medieval power was local as well as royal: courts, shrines, markets, bridges, fortifications/i,
  /events connected to .+ should be read through the wider archive rather than in isolation/i,
  /IronCodex marks that uncertainty in connected people and event pages/i,
  /The legacy of .+ survives through monuments, ruins, maps, manuscripts, local memory/i,
  /its importance may have changed over time, especially after conquest, dynastic change/i,
  /for places such as towns, cathedrals, castles, and battlefields, the surrounding roads/i,
  // Weapon/armor filler phrases
  /weapon categories are modern conveniences applied to objects that varied/i,
  /armor terminology varies between museum catalogues, modern typologies/i,
  /involved rulers, commanders, clerics, nobles/i,
  // Generic filler — only match when "details are uncertain" is the whole sentence/paragraph
  /^(the )?details are uncertain\.?\s*$/i,
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

// Hard failure: no standalone "Historical reliability" / "source note" content section
const reliabilitySectionRe = /historical reliability|source note/i

// Cross-article duplicate paragraph detection: a paragraph reused verbatim across
// 2+ different articles is templated filler and fails the specificity test.
const paragraphArticles = new Map() // normalized text -> Set(articleKey)

for (const [collection, entries] of Object.entries(data)) {
  if (!Array.isArray(entries)) continue

  for (const entry of entries) {
    walk(entry, '', { collection, article: labelFor(entry) })

    if (collection === 'characters') {
      validatePersonTimeline(entry)
    }

    const articleKey = `${collection}/${entry.id || entry.slug || labelFor(entry)}`
    for (const section of (entry.contentSections ?? [])) {
      if (reliabilitySectionRe.test(section.title || '')) {
        findings.push({
          collection,
          article: labelFor(entry),
          path: `contentSections "${section.title}"`,
          pattern: 'standalone Historical reliability / source note section (forbidden)',
          snippet: (section.paragraphs?.[0] ?? '').slice(0, 160)
        })
      }
      for (const paragraph of (section.paragraphs ?? [])) {
        const text = (paragraph || '').trim()
        if (text.length < 40) continue
        if (!paragraphArticles.has(text)) paragraphArticles.set(text, new Set())
        paragraphArticles.get(text).add(articleKey)
      }
    }
  }
}

for (const [text, articles] of paragraphArticles) {
  if (articles.size > 1) {
    findings.push({
      collection: 'multiple',
      article: [...articles].join(', '),
      path: 'contentSections.paragraphs',
      pattern: 'paragraph reused verbatim across multiple articles (templated filler)',
      snippet: text.slice(0, 160)
    })
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
