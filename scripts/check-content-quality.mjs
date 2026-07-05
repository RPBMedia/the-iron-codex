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

// Hard failure: buzzword-list prose. A section fails if it contains a paragraph
// that is a long comma-separated list of generic medieval nouns AND the whole
// section lacks concrete anchors (fewer than 2 named entities and no date).
const buzzGenericNouns = [
  'cathedral cities', 'monasteries', 'lordships', 'merchant towns', 'mining regions', 'borderlands',
  'communes', 'castles', 'churches', 'nobles', 'nobility', 'merchants', 'peasants', 'clergy', 'clerics',
  'towns', 'roads', 'trade', 'warfare', 'religion', 'agriculture', 'charters', 'seals', 'rituals',
  'institutions', 'warriors', 'knights', 'abbeys', 'bishoprics', 'duchies', 'counties', 'assemblies',
  'guilds', 'markets', 'kingdoms', 'rulers', 'commanders', 'shrines', 'bridges', 'fortifications',
  'courts', 'dynasties', 'languages', 'pilgrimage', 'manuscripts', 'coinage', 'tolls', 'rents', 'tithes',
  'literacy', 'aristocracies', 'cities', 'settlements', 'monks', 'priests', 'lords', 'vassals', 'serfs', 'soldiers'
]
const buzzProperStop = new Set(['The', 'A', 'An', 'In', 'It', 'He', 'She', 'They', 'His', 'Her', 'Their', 'This',
  'That', 'These', 'Those', 'German', 'Latin', 'Italian', 'Czech', 'French', 'English', 'European', 'Christian',
  'Catholic', 'Roman', 'Imperial', 'Slavic', 'Alpine', 'Baltic', 'Where', 'When', 'While', 'Although', 'After',
  'Before', 'During', 'Both', 'Many', 'Some', 'Most', 'Its', 'Such', 'But', 'And', 'For', 'By', 'As', 'At',
  'Medieval', 'Church', 'Kingdom', 'Empire', 'Norman', 'Scandinavian', 'Viking'])
function buzzMaxCommaRun(text) {
  let max = 0
  for (const sentence of text.split(/(?<=[.!?])\s+/)) {
    const commas = (sentence.match(/,/g) || []).length
    if (commas >= 3) max = Math.max(max, commas + (/,?\s+and\s+/.test(sentence) ? 2 : 1))
  }
  return max
}
function buzzGenericCount(lower) {
  let n = 0
  for (const g of buzzGenericNouns) { const m = lower.match(new RegExp(`\\b${g}\\b`, 'g')); if (m) n += m.length }
  return n
}
function buzzNamedEntities(text) {
  const set = new Set()
  for (const sentence of text.split(/(?<=[.!?])\s+/)) {
    sentence.split(/\s+/).forEach((tok, i) => {
      if (i === 0) return
      const w = tok.replace(/[^A-Za-zÀ-ÿ'-]/g, '')
      if (/^[A-ZÀ-Þ][a-zà-ÿ]{2,}/.test(w) && !buzzProperStop.has(w)) set.add(w)
    })
  }
  return set.size
}
function validateSectionProse(collection, entry, label) {
  for (const section of (entry.contentSections ?? [])) {
    const paras = (section.paragraphs ?? []).filter(p => typeof p === 'string' && p.trim())
    if (!paras.length) continue
    const whole = paras.join(' ')
    const anchored = buzzNamedEntities(whole) >= 2 || /\b\d{3,4}\b/.test(whole)
    if (anchored) continue
    const listHeavy = paras.some(p => buzzMaxCommaRun(p) >= 5 && buzzGenericCount(p.toLowerCase()) >= 4)
    if (listHeavy) {
      findings.push({
        collection, article: label,
        path: `contentSections "${section.title}"`,
        pattern: 'buzzword-list prose: comma-separated list of generic nouns with no concrete anchors (named people/places/dates)',
        snippet: (paras.find(p => buzzMaxCommaRun(p) >= 5) ?? '').slice(0, 160)
      })
    }
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

// Hard failure: army size / estimated strength on Battle & Siege articles.
// Every listed faction/side must carry strength with a display value and a
// confidence; uncertain confidences require an explanatory note.
// See CLAUDE.md "Battle Army Size / Force Strength Rules".
const STRENGTH_CONFIDENCE = new Set(['confirmed', 'estimated', 'debated', 'chronicle-claim', 'unknown'])
const NOTE_REQUIRED_CONFIDENCE = new Set(['debated', 'chronicle-claim', 'unknown'])
function validateBattleStrength(entry, label) {
  if (!MILITARY_EVENT_TYPES.has(entry.eventType)) return
  const sides = entry.participants ?? []
  if (sides.length < 2) {
    findings.push({ collection: 'events', article: label, path: 'participants', pattern: `${entry.eventType} article must list at least two sides/factions with strength`, snippet: `${sides.length} side(s)` })
  }
  for (const part of sides) {
    const st = part.strength
    const where = `participants "${part.side}".strength`
    if (!st || !st.display || !String(st.display).trim()) {
      findings.push({ collection: 'events', article: label, path: where, pattern: 'faction/side missing army-size (estimated strength) data', snippet: part.side ?? '' })
      continue
    }
    if (!st.confidence || !STRENGTH_CONFIDENCE.has(st.confidence)) {
      findings.push({ collection: 'events', article: label, path: where, pattern: `strength confidence missing or invalid (use ${[...STRENGTH_CONFIDENCE].join('/')})`, snippet: String(st.confidence ?? '') })
    }
    if (NOTE_REQUIRED_CONFIDENCE.has(st.confidence) && !(st.note && st.note.trim())) {
      findings.push({ collection: 'events', article: label, path: where, pattern: `strength marked "${st.confidence}" requires an explanatory note`, snippet: st.display })
    }
    // Discourage false precision: a bare exact number with no range/qualifier.
    if (/^\s*[\d.,]+\s*$/.test(String(st.display)) && st.confidence !== 'confirmed') {
      findings.push({ collection: 'events', article: label, path: where, pattern: 'exact army-size number without a range or "confirmed" confidence (avoid false precision)', snippet: st.display })
    }
  }
  if (sides.length && !(entry.sources ?? []).length) {
    findings.push({ collection: 'events', article: label, path: 'sources', pattern: 'Battle/Siege article with factions must have sources supporting the army-size estimates', snippet: '' })
  }
}

// Hard failure: ruler succession boxes. Every character with isRuler: true must
// carry a succession object with predecessor and successor entries; linked slugs
// must resolve to real Person articles and never self-link; entries with no link
// must carry a displayName (and, for none/office-ended states, a note).
// See CLAUDE.md "Ruler Succession Boxes".
const characterIds = new Set((data.characters ?? []).map(c => c.id))

// Valid non-person succession states. "none" = first holder of the office;
// "office-ended" = the office lapsed; "unknown" = no securely recorded ruler;
// "outside-scope" = a real ruler outside IronCodex's 476–1453 medieval window;
// "disputed"/"fragmented" = contested or partitioned succession. See CLAUDE.md
// "Ruler Succession Link Rules".
const SUCCESSION_STATUSES = new Set(['none', 'office-ended', 'unknown', 'outside-scope', 'disputed', 'fragmented'])

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
    } else if (ref.status) {
      if (!SUCCESSION_STATUSES.has(ref.status)) {
        findings.push({ collection: 'characters', article: label, path: `succession.${side}.status`, pattern: `${side} has unknown status "${ref.status}" (use ${[...SUCCESSION_STATUSES].join('/')})`, snippet: ref.status })
      }
      if (!ref.note || !ref.note.trim()) {
        findings.push({ collection: 'characters', article: label, path: `succession.${side}.note`, pattern: `${side} with status "${ref.status}" requires an explanatory note`, snippet: '' })
      }
      // Outside-scope / disputed / fragmented must still name the ruler(s) they refer to.
      if ((ref.status === 'outside-scope' || ref.status === 'disputed' || ref.status === 'fragmented') && (!ref.displayName || !ref.displayName.trim())) {
        findings.push({ collection: 'characters', article: label, path: `succession.${side}.displayName`, pattern: `${side} with status "${ref.status}" must name the ruler(s) it refers to`, snippet: '' })
      }
    } else {
      // A named person with no article link (the {displayName, note} endpoint
      // pattern) is allowed, but MUST carry a note identifying the person, so no
      // named predecessor/successor is ever bare, unexplained text.
      if (!ref.note || !ref.note.trim()) {
        findings.push({ collection: 'characters', article: label, path: `succession.${side}`, pattern: `named ${side} "${ref.displayName}" is unlinked and has no note (link a Person article or add an explanatory note)`, snippet: ref.displayName ?? '' })
      }
    }
  }
}

// Hard failure: battle/siege leaders must not carry broken links. If a leader has
// a slug/personId it must resolve to a real Person article (never a non-person or
// self-link). Plus the explicit required leader links the task mandates.
function validateBattleLeaders(entry, label) {
  if (!MILITARY_EVENT_TYPES.has(entry.eventType) && entry.id !== 'fall-of-constantinople') return
  const checkSlug = (nm, slug, type) => {
    if (!slug) return
    if (slug === entry.id) findings.push({ collection: 'events', article: label, path: 'leaders', pattern: `leader "${nm}" self-links to the event`, snippet: slug })
    else if (!characterIds.has(slug)) findings.push({ collection: 'events', article: label, path: 'leaders', pattern: `leader "${nm}" links to a missing Person article`, snippet: slug })
    else if (type && type !== 'person') findings.push({ collection: 'events', article: label, path: 'leaders', pattern: `leader "${nm}" links to a non-Person article (type ${type})`, snippet: slug })
  }
  for (const part of entry.participants || []) for (const l of part.leaders || []) checkSlug(l.name || l.title, l.slug, l.type)
  for (const l of entry.leaders || []) checkSlug(l.name, l.personId, 'person')
}

// Explicit required links the audit task mandates (hard failures).
const REQUIRED_LEADER_LINKS = [['battle-of-aljubarrota', 'john-i-of-castile'], ['battle-of-aljubarrota', 'nuno-alvares-pereira']]
const REQUIRED_SUCCESSION_LINKS = [
  // [rulerId, side, expected personSlug OR "status:none"]
  ['afonso-i-of-portugal', 'predecessor', 'status:none'],
  ['afonso-i-of-portugal', 'successor', 'sancho-i-of-portugal'],
  ['philip-vi-of-france', 'predecessor', 'charles-iv-of-france'],
  ['philip-vi-of-france', 'successor', 'john-ii-of-france'],
  ['william-the-conqueror', 'predecessor', 'harold-godwinson'],
  ['saladin', 'successor', 'al-adil-i'],
  // Castilian Trastámara chain around John I of Castile (the audit's worked example).
  ['john-i-of-castile', 'predecessor', 'henry-ii-of-castile'],
  ['john-i-of-castile', 'successor', 'henry-iii-of-castile'],
  ['peter-of-castile', 'successor', 'henry-ii-of-castile'],
  ['henry-ii-of-castile', 'predecessor', 'peter-of-castile'],
  ['henry-ii-of-castile', 'successor', 'john-i-of-castile'],
  ['henry-iii-of-castile', 'predecessor', 'john-i-of-castile'],
  ['henry-iii-of-castile', 'successor', 'john-ii-of-castile'],
  ['john-ii-of-castile', 'predecessor', 'henry-iii-of-castile'],
  // The chain stops cleanly at the 1453 boundary: Henry IV (r. 1454) is outside scope.
  ['john-ii-of-castile', 'successor', 'status:outside-scope'],
  // Kingdom of Jerusalem succession web (fully closed — every end resolves).
  ['baldwin-iv-of-jerusalem', 'successor', 'baldwin-v-of-jerusalem'],
  ['baldwin-v-of-jerusalem', 'predecessor', 'baldwin-iv-of-jerusalem'],
  ['baldwin-v-of-jerusalem', 'successor', 'sibylla-of-jerusalem'],
  ['guy-of-lusignan', 'predecessor', 'baldwin-v-of-jerusalem'],
  ['sibylla-of-jerusalem', 'predecessor', 'baldwin-v-of-jerusalem'],
  ['henry-ii-of-champagne', 'successor', 'amalric-ii-of-lusignan'],
  ['amalric-ii-of-lusignan', 'predecessor', 'henry-ii-of-champagne'],
  ['amalric-ii-of-lusignan', 'successor', 'maria-of-montferrat'],
  ['isabella-i-of-jerusalem', 'successor', 'maria-of-montferrat'],
  ['maria-of-montferrat', 'predecessor', 'amalric-ii-of-lusignan'],
  ['maria-of-montferrat', 'successor', 'john-of-brienne'],
  ['john-of-brienne', 'predecessor', 'maria-of-montferrat'],
  // Capetian–Valois main line of France (continuous Hugh Capet -> Charles VII).
  ['hugh-capet', 'successor', 'robert-ii-of-france'],
  ['robert-ii-of-france', 'predecessor', 'hugh-capet'],
  ['robert-ii-of-france', 'successor', 'henry-i-of-france'],
  ['henry-i-of-france', 'predecessor', 'robert-ii-of-france'],
  ['henry-i-of-france', 'successor', 'philip-i-of-france'],
  ['philip-i-of-france', 'predecessor', 'henry-i-of-france'],
  ['philip-i-of-france', 'successor', 'louis-vi-of-france'],
  ['louis-vi-of-france', 'predecessor', 'philip-i-of-france'],
  ['philip-iii-of-france', 'successor', 'philip-iv-of-france'],
  ['philip-iv-of-france', 'predecessor', 'philip-iii-of-france'],
  ['philip-iv-of-france', 'successor', 'louis-x-of-france'],
  ['louis-x-of-france', 'predecessor', 'philip-iv-of-france'],
  ['louis-x-of-france', 'successor', 'philip-v-of-france'],
  ['philip-v-of-france', 'predecessor', 'louis-x-of-france'],
  ['philip-v-of-france', 'successor', 'charles-iv-of-france'],
  ['charles-iv-of-france', 'predecessor', 'philip-v-of-france'],
  ['charles-v-of-france', 'successor', 'charles-vi-of-france'],
  ['charles-vi-of-france', 'predecessor', 'charles-v-of-france'],
  ['charles-vi-of-france', 'successor', 'charles-vii-of-france'],
  ['charles-vii-of-france', 'predecessor', 'charles-vi-of-france'],
  // Chain stops cleanly at the 1453 boundary: Louis XI (r. 1461) is outside scope.
  ['charles-vii-of-france', 'successor', 'status:outside-scope']
]
function validateRequiredLinks() {
  const evById = new Map(data.events.map(e => [e.id, e]))
  const chById = new Map(data.characters.map(c => [c.id, c]))
  for (const [eid, slug] of REQUIRED_LEADER_LINKS) {
    const e = evById.get(eid)
    const linked = e && (e.participants || []).some(p => (p.leaders || []).some(l => l.slug === slug))
    if (!linked) findings.push({ collection: 'events', article: eid, path: 'leaders', pattern: `required leader link missing: ${eid} must link ${slug}`, snippet: slug })
  }
  for (const [cid, side, expected] of REQUIRED_SUCCESSION_LINKS) {
    const c = chById.get(cid)
    const ref = c?.succession?.[side]
    if (expected.startsWith('status:')) {
      const st = expected.split(':')[1]
      if (!ref || ref.status !== st) findings.push({ collection: 'characters', article: cid, path: `succession.${side}`, pattern: `required: ${cid} ${side} must be status "${st}"`, snippet: ref?.status ?? '' })
    } else if (!ref || ref.personSlug !== expected) {
      findings.push({ collection: 'characters', article: cid, path: `succession.${side}`, pattern: `required succession link missing: ${cid} ${side} must link ${expected}`, snippet: ref?.personSlug ?? ref?.displayName ?? '' })
    }
  }
}

// Hard failure: People-to-Battle linking. If a Person is a commander/participant
// of a Battle or Siege article, that battle must appear in the person's related
// entries. Plus explicit required pairs for the archive's marquee figures.
// See CLAUDE.md "People-to-Battle Linking Rules".
const personBattles = new Map() // personSlug -> Set(eventId) they led/fought in
function addPB(pid, eid) { if (!pid) return; if (!personBattles.has(pid)) personBattles.set(pid, new Set()); personBattles.get(pid).add(eid) }
for (const e of militaryEvents) {
  for (const l of e.leaders || []) addPB(l.personId, e.id)
  for (const p of e.participants || []) for (const l of p.leaders || []) addPB(l.slug, e.id)
  for (const it of Object.values(e.relatedEntries || {}).flat()) {
    if (it.type === 'person' && it.slug && /commander|fought|led|killed in this/i.test(it.label || '')) addPB(it.slug, e.id)
  }
}
// Explicit required pairs (event may be a war/fall, not only Battle/Siege).
const REQUIRED_PERSON_BATTLE = [
  ['john-i-of-portugal', 'battle-of-aljubarrota'],
  ['harald-hardrada', 'battle-of-stamford-bridge'], ['harald-hardrada', 'battle-of-stiklestad'],
  ['robert-the-bruce', 'battle-of-bannockburn'],
  ['henry-v-of-england', 'battle-of-agincourt'],
  ['william-the-conqueror', 'battle-of-hastings'],
  ['joan-of-arc', 'siege-of-orleans'],
  ['saladin', 'battle-of-hattin'],
  ['richard-the-lionheart', 'battle-of-arsuf'],
  ['edward-iii-of-england', 'battle-of-crecy'],
  ['philip-vi-of-france', 'battle-of-crecy'],
  ['mehmed-ii', 'fall-of-constantinople']
]
const eventIds = new Set((data.events ?? []).map(e => e.id))
function relatedSlugs(entry) {
  return new Set(Object.values(entry.relatedEntries || {}).flat().filter(x => x && x.slug).map(x => x.slug))
}
function validatePersonBattles(entry, label) {
  const rel = relatedSlugs(entry)
  // (a) participant in a battle/siege article -> must be in related entries
  for (const eid of personBattles.get(entry.id) || []) {
    if (!rel.has(eid)) {
      findings.push({ collection: 'characters', article: label, path: 'relatedEntries', pattern: `commander/participant of ${eid} but the battle is not in related entries`, snippet: eid })
    }
  }
  // (b) explicit required pairs
  for (const [pid, eid] of REQUIRED_PERSON_BATTLE) {
    if (entry.id !== pid) continue
    if (!eventIds.has(eid)) {
      findings.push({ collection: 'characters', article: label, path: 'relatedEntries', pattern: `required battle article ${eid} is missing from the archive`, snippet: eid })
    } else if (!rel.has(eid)) {
      findings.push({ collection: 'characters', article: label, path: 'relatedEntries', pattern: `required people-to-battle link missing: ${pid} -> ${eid}`, snippet: eid })
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
      validatePersonBattles(entry, labelFor(entry))
    }

    if (collection === 'events') {
      validateBattleContinuity(entry, labelFor(entry))
      validateBattleStrength(entry, labelFor(entry))
      validateBattleLeaders(entry, labelFor(entry))
    }

    validateRelatedEntries(collection, entry, labelFor(entry))
    validateSectionProse(collection, entry, labelFor(entry))

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

validateRequiredLinks()

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
