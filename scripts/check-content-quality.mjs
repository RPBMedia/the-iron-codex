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

// Hard failure: every article must have >= 3 valid, non-duplicate, non-self related entries.
const relTypeToCollection = {
  person: 'characters', people: 'characters', character: 'characters', event: 'events',
  location: 'locations', place: 'locations', kingdom: 'locations', polity: 'locations',
  artifact: 'artifacts', document: 'artifacts', weaponArmor: 'weaponsArmor', weapon: 'weaponsArmor',
  armor: 'weaponsArmor', shield: 'weaponsArmor', helmet: 'weaponsArmor', famousWeapon: 'weaponsArmor', famousArmor: 'weaponsArmor'
}
const idsByCollection = {}
for (const [col, arr] of Object.entries(data)) {
  if (Array.isArray(arr)) idsByCollection[col] = new Set(arr.map(a => a.id))
}

function validateRelatedEntries(collection, entry, label) {
  const items = Object.values(entry.relatedEntries || {}).flatMap(v => Array.isArray(v) ? v : [])
  const seen = new Set()
  let valid = 0
  for (const it of items) {
    const tcol = relTypeToCollection[it?.type]
    const p = `relatedEntries -> ${it?.type}:${it?.slug}`
    if (!tcol) { findings.push({ collection, article: label, path: p, pattern: 'related entry has invalid/unknown type', snippet: it?.title ?? '' }); continue }
    if (!it.slug) { findings.push({ collection, article: label, path: p, pattern: 'related entry missing slug', snippet: it?.title ?? '' }); continue }
    if (tcol === collection && it.slug === entry.id) { findings.push({ collection, article: label, path: p, pattern: 'related entry self-link', snippet: it.title ?? '' }); continue }
    if (!idsByCollection[tcol]?.has(it.slug)) { findings.push({ collection, article: label, path: p, pattern: 'related entry points to a missing article', snippet: it.title ?? '' }); continue }
    const key = `${tcol}:${it.slug}`
    if (seen.has(key)) { findings.push({ collection, article: label, path: p, pattern: 'duplicate related entry', snippet: it.title ?? '' }); continue }
    seen.add(key)
    valid++
  }
  if (valid < 3) {
    findings.push({ collection, article: label, path: 'relatedEntries', pattern: `fewer than 3 valid related entries (has ${valid})`, snippet: '' })
  }
}

// Hard failure: no standalone "Historical reliability" / "source note" content section
const reliabilitySectionRe = /historical reliability|source note/i

// Hard failure: every Person (character) article must have a substantial, source-aware
// "Character and Personality" section. Applies ONLY to characters.
const CHARACTER_SECTION_TITLE = 'Character and Personality'
const clinicalTermsRe = /\b(narcissist(ic)?|psychopath(ic)?|sociopath(ic)?|bipolar|traumati[sz]ed|clinically depressed|autistic|schizophren\w*|paranoid|manic)\b/i

function validateCharacterPersonality(entry, label) {
  const section = (entry.contentSections ?? []).find(s => s.title === CHARACTER_SECTION_TITLE)
  if (!section) {
    findings.push({
      collection: 'characters',
      article: label,
      path: `contentSections "${CHARACTER_SECTION_TITLE}"`,
      pattern: 'missing required Character and Personality section',
      snippet: ''
    })
    return
  }
  const paragraphs = (section.paragraphs ?? []).filter(p => typeof p === 'string' && p.trim())
  const text = paragraphs.join(' ').trim()
  if (!text) {
    findings.push({ collection: 'characters', article: label, path: CHARACTER_SECTION_TITLE, pattern: 'empty Character and Personality section', snippet: '' })
    return
  }
  const sentenceCount = (text.match(/[.!?]/g) ?? []).length
  if (sentenceCount < 2 || text.length < 200) {
    findings.push({ collection: 'characters', article: label, path: CHARACTER_SECTION_TITLE, pattern: 'Character and Personality section too short / single-sentence', snippet: text.slice(0, 160) })
  }
  if (clinicalTermsRe.test(text)) {
    findings.push({ collection: 'characters', article: label, path: CHARACTER_SECTION_TITLE, pattern: 'modern clinical/diagnostic language in Character and Personality section', snippet: text.slice(0, 160) })
  }
}

// Hard failure: every military event (Battle or Siege) must carry a curated
// battleContinuity link to another real military event, with a specific label
// and reason, and the link should move FORWARD through the same conflict when
// a later military event in that conflict exists.
// See CLAUDE.md "Battle Continuity Links".
const MILITARY_EVENT_TYPES = new Set(['Battle', 'Siege'])
const militaryEvents = (data.events ?? []).filter(e => MILITARY_EVENT_TYPES.has(e.eventType))
const militaryEventById = new Map(militaryEvents.map(e => [e.id, e]))
const genericContinuityReasonRe = /^(another (important|famous|major|great)? ?(medieval )?battle\.?|a battle from the same period\.?|this battle is related\.?|read another battle\.?)$/i
const validContinuityRelationships = new Set([
  'same-war', 'same-campaign', 'same-crisis', 'same-region',
  'same-factions', 'chronological-follow-up', 'tactical-comparison',
  'nearest-relevant-battle', 'earlier-context'
])
// Named regressions that must never come back: Agincourt looping backward to
// Crécy while later Hundred Years' War military events exist in the archive.
const forbiddenContinuityPairs = [['battle-of-agincourt', 'battle-of-crecy']]

function validateBattleContinuity(entry, label) {
  if (!MILITARY_EVENT_TYPES.has(entry.eventType)) {
    if (entry.battleContinuity) {
      findings.push({ collection: 'events', article: label, path: 'battleContinuity', pattern: 'battleContinuity on a non-military-event article (battles/sieges only)', snippet: '' })
    }
    return
  }

  const c = entry.battleContinuity
  if (!c) {
    findings.push({ collection: 'events', article: label, path: 'battleContinuity', pattern: `${entry.eventType} article missing battleContinuity`, snippet: '' })
    return
  }
  if (!c.battleSlug) {
    findings.push({ collection: 'events', article: label, path: 'battleContinuity.battleSlug', pattern: 'continuity target slug missing', snippet: '' })
  } else {
    if (c.battleSlug === entry.id) {
      findings.push({ collection: 'events', article: label, path: 'battleContinuity.battleSlug', pattern: 'continuity target is the article itself', snippet: c.battleSlug })
    }
    if (!militaryEventById.has(c.battleSlug)) {
      findings.push({ collection: 'events', article: label, path: 'battleContinuity.battleSlug', pattern: 'continuity target is missing or not a Battle/Siege article', snippet: c.battleSlug })
    }
  }
  if (!c.label || !c.label.trim()) {
    findings.push({ collection: 'events', article: label, path: 'battleContinuity.label', pattern: 'continuity label missing', snippet: '' })
  }
  const reason = (c.reason ?? '').trim()
  if (!reason) {
    findings.push({ collection: 'events', article: label, path: 'battleContinuity.reason', pattern: 'continuity reason missing', snippet: '' })
  } else if (reason.length < 80 || genericContinuityReasonRe.test(reason)) {
    findings.push({ collection: 'events', article: label, path: 'battleContinuity.reason', pattern: 'continuity reason too short or generic filler', snippet: reason.slice(0, 160) })
  }
  if (c.relationship && !validContinuityRelationships.has(c.relationship)) {
    findings.push({ collection: 'events', article: label, path: 'battleContinuity.relationship', pattern: `unknown continuity relationship type "${c.relationship}"`, snippet: '' })
  }

  for (const [from, to] of forbiddenContinuityPairs) {
    if (entry.id === from && c.battleSlug === to) {
      findings.push({ collection: 'events', article: label, path: 'battleContinuity.battleSlug', pattern: `forbidden backward continuity link ${from} -> ${to}`, snippet: '' })
    }
  }

  // Direction rules: continuity should move forward through the same conflict
  // when a later military event in that conflict exists in the archive.
  const target = militaryEventById.get(c.battleSlug)
  if (target?.year && entry.year && target.year < entry.year) {
    const laterInConflict = entry.conflict && militaryEvents.some(
      (e) => e.id !== entry.id && e.conflict === entry.conflict && e.year > entry.year
    )
    if (laterInConflict) {
      findings.push({ collection: 'events', article: label, path: 'battleContinuity.battleSlug', pattern: `continuity points backward (${target.year} < ${entry.year}) while a later ${entry.conflict} military event exists`, snippet: c.battleSlug })
    }
    if (/\bnext\b/i.test(`${c.label ?? ''} ${reason}`)) {
      findings.push({ collection: 'events', article: label, path: 'battleContinuity.label', pattern: 'backward continuity link labelled as "next"', snippet: c.label ?? '' })
    }
  }
}

// Hard failure: ruler succession boxes. Every character with isRuler: true must
// carry a succession object with predecessor and successor entries; linked slugs
// must resolve to real Person articles and never self-link; entries with no link
// must carry a displayName (and, for none/office-ended states, a note).
// See CLAUDE.md "Ruler Succession Boxes".
const characterIds = new Set((data.characters ?? []).map(c => c.id))

function validateRulerSuccession(entry, label) {
  if (!entry.isRuler) {
    if (entry.succession) {
      findings.push({ collection: 'characters', article: label, path: 'succession', pattern: 'succession data on a non-ruler article (set isRuler or remove)', snippet: '' })
    }
    return
  }
  const s = entry.succession
  if (!s) {
    findings.push({ collection: 'characters', article: label, path: 'succession', pattern: 'ruler article missing succession data', snippet: '' })
    return
  }
  if (!s.office || !s.office.trim()) {
    findings.push({ collection: 'characters', article: label, path: 'succession.office', pattern: 'succession office missing', snippet: '' })
  }
  for (const side of ['predecessor', 'successor']) {
    const ref = s[side]
    if (!ref) {
      findings.push({ collection: 'characters', article: label, path: `succession.${side}`, pattern: `ruler missing ${side} entry`, snippet: '' })
      continue
    }
    if (!ref.displayName || !ref.displayName.trim()) {
      findings.push({ collection: 'characters', article: label, path: `succession.${side}.displayName`, pattern: `${side} missing display name`, snippet: '' })
    }
    if (ref.personSlug) {
      if (ref.personSlug === entry.id) {
        findings.push({ collection: 'characters', article: label, path: `succession.${side}.personSlug`, pattern: `${side} self-link`, snippet: ref.personSlug })
      }
      if (!characterIds.has(ref.personSlug)) {
        findings.push({ collection: 'characters', article: label, path: `succession.${side}.personSlug`, pattern: `${side} links to a missing Person article`, snippet: ref.personSlug })
      }
    } else if ((ref.status === 'none' || ref.status === 'office-ended' || ref.status === 'unknown') && !ref.note) {
      findings.push({ collection: 'characters', article: label, path: `succession.${side}.note`, pattern: `${side} with status "${ref.status}" requires an explanatory note`, snippet: '' })
    }
  }
}

// Cross-article duplicate paragraph detection: a paragraph reused verbatim across
// 2+ different articles is templated filler and fails the specificity test.
const paragraphArticles = new Map() // normalized text -> Set(articleKey)

for (const [collection, entries] of Object.entries(data)) {
  if (!Array.isArray(entries)) continue

  for (const entry of entries) {
    walk(entry, '', { collection, article: labelFor(entry) })

    if (collection === 'characters') {
      validatePersonTimeline(entry)
      validateCharacterPersonality(entry, labelFor(entry))
      validateRulerSuccession(entry, labelFor(entry))
    }

    if (collection === 'events') {
      validateBattleContinuity(entry, labelFor(entry))
    }

    validateRelatedEntries(collection, entry, labelFor(entry))

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
