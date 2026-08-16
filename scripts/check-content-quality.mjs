import fs from 'node:fs'

const dataPath = new URL('../server/data/history.json', import.meta.url)
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'))

// ── Battle-reference linking (see CLAUDE.md "Battle Reference Linking Rules") ──
// Parse entityLinks so we can tell which "Battle of X" / "Siege of X" phrases the
// client auto-linker will resolve. A phrase that names an EXISTING battle article
// but fails to resolve is a real linking regression (hard fail). A phrase that
// names a battle with NO article must be on the triaged backlog allowlist,
// otherwise it fails loudly so someone decides create-vs-document.
const entityLinksSrc = fs.readFileSync(new URL('../client/src/lib/entityLinks.js', import.meta.url), 'utf8')
const linkableTerms = new Set()
const linkEntryRe = /\{\s*label:\s*"((?:[^"\\]|\\.)*)"\s*(?:,\s*aliases:\s*\[([^\]]*)\])?\s*,\s*type:\s*"([^"]*)"\s*,\s*slug:\s*"([^"]*)"\s*\}/g
let _le
while ((_le = linkEntryRe.exec(entityLinksSrc))) {
  const label = _le[1].replace(/\\"/g, '"')
  const aliases = (_le[2] || '').split(',').map(s => s.trim().replace(/^"|"$/g, '').replace(/\\"/g, '"')).filter(Boolean)
  for (const t of [label, ...aliases]) linkableTerms.add(t.toLowerCase())
}
const battleArticleNames = new Set(
  (data.events ?? []).filter(e => ['Battle', 'Siege'].includes(e.eventType)).map(e => (e.name || '').toLowerCase())
)
// Battles referenced in prose that do not yet have their own article. Each is a
// tracked decision (create a full article later, or leave documented). Adding a
// NEW unlinked battle reference not on this list fails the check.
const BATTLE_BACKLOG = new Set([
  'battle of aclea', 'battle of adrianople', 'battle of ain jalut', 'battle of alfarrobeira',
  'battle of ankara', 'battle of ashdown', 'battle of atoleiros', 'battle of ellandun',
  'battle of ellendun', 'battle of ethandun', 'battle of falköping', 'battle of fimreite',
  'battle of fontenoy', 'battle of fotevik', 'battle of fýrisvellir', 'battle of grathe heath',
  'battle of hova', 'battle of la higueruela', 'battle of largs', 'battle of lincoln',
  'battle of montiel', 'battle of nájera', 'battle of río salado', 'battle of salado',
  'battle of shrewsbury', 'battle of sparrsätra', 'battle of tertry', 'battle of tettenhall',
  'battle of tinchebrai', 'battle of tinchebray', 'battle of toro', 'battle of valverde',
  'battle of visby', 'siege of acre',
  // audit-regex boundary artifacts (a longer real article name gets truncated / over-captured)
  'battle of ars', 'battle of largs.', 'battle of visby finds', 'battle of visby find',
])
// Name particles that may sit BETWEEN capitalised name-words (not swallow the
// following common word): "Las Navas de Tolosa", "Río Salado". A capitalised
// word must follow the particle, so trailing "the/of" are not captured.
const battlePhraseRe = /\b(?:Battle|Siege) of [A-ZÀ-Þ][\wÀ-ÿ'’-]*(?:[ -](?:(?:of|de|del|la|le|aux|sur|da|dos) )?[A-ZÀ-Þ][\wÀ-ÿ'’-]*)*/g
function battlePhraseResolves(phrase) {
  const p = phrase.toLowerCase()
  if (linkableTerms.has(p)) return true
  for (const term of linkableTerms) {
    if (term.length < 5) continue
    const re = new RegExp(`(^|[^a-z0-9])${term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}($|[^a-z0-9])`, 'i')
    if (re.test(phrase)) return true
  }
  return false
}
function validateBattleLinking(text, label, path, findings) {
  let mm
  battlePhraseRe.lastIndex = 0
  while ((mm = battlePhraseRe.exec(text))) {
    const phrase = mm[0].replace(/[.,;:]$/, '').trim()
    if (battlePhraseResolves(phrase)) continue
    const key = phrase.toLowerCase()
    if (battleArticleNames.has(key)) {
      findings.push({ collection: 'links', article: label, path, pattern: `battle reference "${phrase}" has an article but does not auto-link (linking regression)`, snippet: phrase })
    } else if (!BATTLE_BACKLOG.has(key)) {
      findings.push({ collection: 'links', article: label, path, pattern: `unlinked battle reference "${phrase}" — create a full Battle article or add to the documented backlog`, snippet: phrase })
    }
  }
}

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
    validateBattleLinking(value, context.article, path, findings)
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
  armor: 'weaponsArmor', shield: 'weaponsArmor', helmet: 'weaponsArmor', famousWeapon: 'weaponsArmor', famousArmor: 'weaponsArmor',
  house: 'houses', dynasty: 'houses'
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

// Hard failure: curated nicknames/epithets and age-at-death sanity.
// `epithets`, when present, must be a non-empty array of typed entries with
// short notes; names must be nicknames, never formal titles or dynasty names.
// `deathAge` must be a normalized value ("N", "about N", "probably over N",
// or contain "unknown") with no false precision against the birth/death dates.
// See CLAUDE.md "Ruler Nicknames, Epithets, and Age at Death".
const EPITHET_TYPES = new Set([
  'byname', 'epithet', 'later epithet', 'translated byname', 'hostile epithet',
  'legendary epithet', 'posthumous epithet', 'religious epithet', 'honorific', 'uncertain'
])
const EPITHET_TITLE_RE = /^(king|queen|emperor|sultan|duke|count|prince|lord|earl) of /i
// Dynasty/family names are not nicknames — a small trap set of the likeliest offenders.
const EPITHET_DYNASTY_TRAPS = new Set([
  'palaiologos', 'komnenos', 'doukas', 'angelos', 'plantagenet', 'capet', 'jagiełło',
  'jagiello', 'trastámara', 'trastamara', 'valois', 'habsburg', 'rurikid', 'bonde', 'de brus'
])
// Real child monarchs whose curated age is legitimately under 10.
const CHILD_RULER_AGES_OK = new Set(['baldwin-v-of-jerusalem', 'margaret-maid-of-norway'])

function validateEpithetsAndAge(entry, label) {
  if ('epithets' in entry) {
    const eps = entry.epithets
    if (!Array.isArray(eps) || !eps.length) {
      findings.push({ collection: 'characters', article: label, path: 'epithets', pattern: 'epithets must be a non-empty array when present (remove the field instead of leaving it empty)', snippet: '' })
    } else {
      const seen = new Set()
      eps.forEach((ep, i) => {
        const p = `epithets[${i}]`
        if (!ep || typeof ep.name !== 'string' || !ep.name.trim()) {
          findings.push({ collection: 'characters', article: label, path: p, pattern: 'epithet missing a non-empty string name', snippet: JSON.stringify(ep ?? null).slice(0, 120) })
          return
        }
        const name = ep.name.trim()
        if (!EPITHET_TYPES.has(ep.type)) {
          findings.push({ collection: 'characters', article: label, path: `${p}.type`, pattern: `epithet type missing or invalid (use ${[...EPITHET_TYPES].join('/')})`, snippet: String(ep.type ?? '') })
        }
        if (ep.note !== undefined && (typeof ep.note !== 'string' || !ep.note.trim())) {
          findings.push({ collection: 'characters', article: label, path: `${p}.note`, pattern: 'epithet note must be a non-empty string when present', snippet: name })
        }
        if (typeof ep.note === 'string' && ep.note.length > 200) {
          findings.push({ collection: 'characters', article: label, path: `${p}.note`, pattern: `epithet note too long (${ep.note.length} chars; max 200)`, snippet: ep.note.slice(0, 120) })
        }
        const key = name.toLowerCase()
        if (seen.has(key)) {
          findings.push({ collection: 'characters', article: label, path: p, pattern: 'duplicate epithet name (case-insensitive)', snippet: name })
        }
        seen.add(key)
        if (EPITHET_TITLE_RE.test(name)) {
          findings.push({ collection: 'characters', article: label, path: p, pattern: 'epithet looks like a formal title, not a nickname', snippet: name })
        }
        if (EPITHET_DYNASTY_TRAPS.has(key)) {
          findings.push({ collection: 'characters', article: label, path: p, pattern: 'epithet is a dynasty/family name, not a nickname', snippet: name })
        }
      })
    }
  }

  if (entry.deathAge === undefined || entry.deathAge === null) return
  const v = String(entry.deathAge).trim()
  if (/unknown/i.test(v)) return // "unknown" (and variants) render nothing and are exempt
  const m = v.match(/^(about |probably over )?(\d{1,3})$/)
  if (!m) {
    findings.push({ collection: 'characters', article: label, path: 'deathAge', pattern: 'deathAge not in a normalized form ("N", "about N", "probably over N", or a value containing "unknown")', snippet: v })
    return
  }
  const age = Number(m[2])
  if ((age < 10 && !CHILD_RULER_AGES_OK.has(entry.id)) || age > 100) {
    findings.push({ collection: 'characters', article: label, path: 'deathAge', pattern: `implausible deathAge ${age} (allowed 10–100 unless a documented child monarch)`, snippet: v })
  }
  const birthDate = String(entry.birth?.date ?? '').trim()
  if (!m[1] && /^(c\.|circa|unknown)/i.test(birthDate)) {
    findings.push({ collection: 'characters', article: label, path: 'deathAge', pattern: `exact deathAge "${v}" with approximate/unknown birth date "${birthDate}" (false precision — use "about N")`, snippet: v })
  }
  const deathDate = String(entry.death?.date ?? '').trim()
  if (!deathDate || /^unknown/i.test(deathDate)) {
    findings.push({ collection: 'characters', article: label, path: 'deathAge', pattern: `numeric deathAge "${v}" but death date is unknown`, snippet: deathDate })
  }
}

// Hard-checked curated epithets (the feature's canonical examples) and the two
// canonical no-epithet articles (family/dynasty names are not nicknames).
const REQUIRED_EPITHETS = [
  ['edward-i-of-england', 'Longshanks'],
  ['richard-the-lionheart', 'the Lionheart'],
  ['william-the-conqueror', 'the Conqueror'],
  ['alfred-the-great', 'the Great'],
  ['cnut-the-great', 'the Great'],
  ['harald-fairhair', 'Fairhair'],
  ['harald-hardrada', 'Hardrada'],
  ['charles-martel', 'the Hammer (Martel)']
]
const FORBIDDEN_EPITHETS = ['robert-the-bruce', 'constantine-xi-palaiologos']

function validateRequiredEpithets() {
  const chById = new Map(data.characters.map(c => [c.id, c]))
  for (const [cid, name] of REQUIRED_EPITHETS) {
    const c = chById.get(cid)
    const has = (c?.epithets ?? []).some(ep => (ep?.name ?? '').trim().toLowerCase() === name.toLowerCase())
    if (!has) findings.push({ collection: 'characters', article: cid, path: 'epithets', pattern: `required epithet missing: ${cid} must carry "${name}"`, snippet: '' })
  }
  for (const cid of FORBIDDEN_EPITHETS) {
    const c = chById.get(cid)
    if (c && 'epithets' in c) findings.push({ collection: 'characters', article: cid, path: 'epithets', pattern: `forbidden epithets field on ${cid} (family/dynasty names are not nicknames — this article must have no Nicknames card)`, snippet: '' })
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
const REQUIRED_LEADER_LINKS = [
  ['battle-of-aljubarrota', 'john-i-of-castile'], ['battle-of-aljubarrota', 'nuno-alvares-pereira'],
  ['battle-of-edington', 'guthrum'],
  ['battle-of-patay', 'john-talbot'],
  ['battle-of-castillon', 'john-talbot'],
  ['battle-of-varna', 'john-hunyadi'],
  ['battle-of-stirling-bridge', 'andrew-moray'],
  ['battle-of-mohi', 'subutai'],
  ['battle-of-mohi', 'batu-khan'],
  ['battle-of-nicopolis', 'sigismund-of-luxembourg'],
  ['battle-of-nicopolis', 'john-the-fearless'],
  ['battle-of-brunanburh', 'olaf-guthfrithson'],
  ['battle-of-brunanburh', 'constantine-ii-of-scotland'],
  ['battle-of-verneuil', 'john-duke-of-bedford']
]
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
  ['charles-vii-of-france', 'successor', 'status:outside-scope'],
  // Scandinavia — the two clean-close articles (both neighbours already exist).
  ['eric-iv-of-denmark', 'successor', 'abel-of-denmark'],
  ['abel-of-denmark', 'predecessor', 'eric-iv-of-denmark'],
  ['abel-of-denmark', 'successor', 'christopher-i-of-denmark'],
  ['christopher-i-of-denmark', 'predecessor', 'abel-of-denmark'],
  ['harald-greycloak', 'successor', 'jarl-hakon-sigurdsson'],
  ['jarl-hakon-sigurdsson', 'predecessor', 'harald-greycloak'],
  ['jarl-hakon-sigurdsson', 'successor', 'olaf-tryggvason'],
  ['olaf-tryggvason', 'predecessor', 'jarl-hakon-sigurdsson'],
  // Norwegian civil-war era (Magnus V -> Sverre -> Håkon III -> Inge II -> Haakon IV).
  ['magnus-v-erlingsson', 'successor', 'sverre-sigurdsson'],
  ['sverre-sigurdsson', 'predecessor', 'magnus-v-erlingsson'],
  ['sverre-sigurdsson', 'successor', 'hakon-iii-sverresson'],
  ['hakon-iii-sverresson', 'predecessor', 'sverre-sigurdsson'],
  ['hakon-iii-sverresson', 'successor', 'inge-ii-bardsson'],
  ['inge-ii-bardsson', 'predecessor', 'hakon-iii-sverresson'],
  ['inge-ii-bardsson', 'successor', 'haakon-iv-haakonsson'],
  ['haakon-iv-haakonsson', 'predecessor', 'inge-ii-bardsson'],
  // Danish Valdemar era — the sons of Sweyn II through the civil wars to Valdemar I.
  ['sweyn-ii-estridsson', 'successor', 'harald-iii-of-denmark'],
  ['harald-iii-of-denmark', 'predecessor', 'sweyn-ii-estridsson'],
  ['harald-iii-of-denmark', 'successor', 'cnut-iv-of-denmark'],
  ['cnut-iv-of-denmark', 'predecessor', 'harald-iii-of-denmark'],
  ['cnut-iv-of-denmark', 'successor', 'oluf-i-of-denmark'],
  ['oluf-i-of-denmark', 'predecessor', 'cnut-iv-of-denmark'],
  ['oluf-i-of-denmark', 'successor', 'eric-i-of-denmark'],
  ['eric-i-of-denmark', 'predecessor', 'oluf-i-of-denmark'],
  ['eric-i-of-denmark', 'successor', 'niels-of-denmark'],
  ['niels-of-denmark', 'predecessor', 'eric-i-of-denmark'],
  ['niels-of-denmark', 'successor', 'eric-ii-of-denmark'],
  ['eric-ii-of-denmark', 'predecessor', 'niels-of-denmark'],
  ['eric-ii-of-denmark', 'successor', 'eric-iii-of-denmark'],
  ['eric-iii-of-denmark', 'predecessor', 'eric-ii-of-denmark'],
  ['eric-iii-of-denmark', 'successor', 'sweyn-iii-of-denmark'],
  ['sweyn-iii-of-denmark', 'predecessor', 'eric-iii-of-denmark'],
  ['sweyn-iii-of-denmark', 'successor', 'valdemar-i-of-denmark'],
  ['valdemar-i-of-denmark', 'predecessor', 'sweyn-iii-of-denmark'],
  // English 10th-century House of Wessex (Edward the Elder -> Edmund Ironside).
  ['edward-the-elder', 'successor', 'aethelstan'],
  ['aethelstan', 'predecessor', 'edward-the-elder'],
  ['aethelstan', 'successor', 'edmund-i-of-england'],
  ['edmund-i-of-england', 'predecessor', 'aethelstan'],
  ['edmund-i-of-england', 'successor', 'eadred-of-england'],
  ['eadred-of-england', 'predecessor', 'edmund-i-of-england'],
  ['eadred-of-england', 'successor', 'eadwig-of-england'],
  ['eadwig-of-england', 'predecessor', 'eadred-of-england'],
  ['eadwig-of-england', 'successor', 'edgar-the-peaceful'],
  ['edgar-the-peaceful', 'predecessor', 'eadwig-of-england'],
  ['edgar-the-peaceful', 'successor', 'edward-the-martyr'],
  ['edward-the-martyr', 'predecessor', 'edgar-the-peaceful'],
  ['edward-the-martyr', 'successor', 'aethelred-the-unready'],
  ['aethelred-the-unready', 'predecessor', 'edward-the-martyr'],
  ['aethelred-the-unready', 'successor', 'edmund-ironside'],
  ['edmund-ironside', 'predecessor', 'aethelred-the-unready'],
  // English Norman "Anarchy" (William II -> Henry II).
  ['william-ii-of-england', 'successor', 'henry-i-of-england'],
  ['henry-i-of-england', 'predecessor', 'william-ii-of-england'],
  ['henry-i-of-england', 'successor', 'stephen-of-england'],
  ['stephen-of-england', 'predecessor', 'henry-i-of-england'],
  ['stephen-of-england', 'successor', 'henry-ii-of-england'],
  ['henry-ii-of-england', 'predecessor', 'stephen-of-england'],
  // Early Ottoman sultans (Osman I founder -> Orhan; Bayezid I -> Mehmed I -> Murad II).
  ['osman-i', 'predecessor', 'status:none'],
  ['osman-i', 'successor', 'orhan'],
  ['orhan', 'predecessor', 'osman-i'],
  ['bayezid-i', 'successor', 'mehmed-i'],
  ['mehmed-i', 'predecessor', 'bayezid-i'],
  ['mehmed-i', 'successor', 'murad-ii'],
  ['murad-ii', 'predecessor', 'mehmed-i'],
  // Byzantine emperors linked to their existing anchors (open-side neighbours are
  // intentional noted boundaries: Michael VI, Alexios II, John V Palaiologos).
  ['constantine-x-doukas', 'predecessor', 'isaac-i-komnenos'],
  ['isaac-i-komnenos', 'successor', 'constantine-x-doukas'],
  ['john-ii-komnenos', 'successor', 'manuel-i-komnenos'],
  ['manuel-i-komnenos', 'predecessor', 'john-ii-komnenos'],
  ['john-viii-palaiologos', 'predecessor', 'manuel-ii-palaiologos'],
  ['manuel-ii-palaiologos', 'successor', 'john-viii-palaiologos'],
  // Crusader states linked to their existing anchors (open-side neighbours are
  // noted boundaries: Constance of Antioch, Pons of Tripoli, Yolanda of Flanders).
  ['bohemond-i-of-antioch', 'successor', 'bohemond-ii-of-antioch'],
  ['bohemond-ii-of-antioch', 'predecessor', 'bohemond-i-of-antioch'],
  ['raymond-iii-of-tripoli', 'predecessor', 'raymond-ii-of-tripoli'],
  ['raymond-ii-of-tripoli', 'successor', 'raymond-iii-of-tripoli'],
  ['henry-of-flanders', 'successor', 'peter-of-courtenay'],
  ['peter-of-courtenay', 'predecessor', 'henry-of-flanders'],
  // 9th-century House of Wessex (Egbert -> Æthelred I; Beorhtric above is noted).
  ['egbert-of-wessex', 'successor', 'aethelwulf-of-wessex'],
  ['aethelwulf-of-wessex', 'predecessor', 'egbert-of-wessex'],
  ['aethelwulf-of-wessex', 'successor', 'aethelbald-of-wessex'],
  ['aethelbald-of-wessex', 'predecessor', 'aethelwulf-of-wessex'],
  ['aethelbald-of-wessex', 'successor', 'aethelberht-of-wessex'],
  ['aethelberht-of-wessex', 'predecessor', 'aethelbald-of-wessex'],
  ['aethelberht-of-wessex', 'successor', 'aethelred-i-of-wessex'],
  ['aethelred-i-of-wessex', 'predecessor', 'aethelberht-of-wessex'],
  // Swedish civil-war era: Stenkil tail and the Sverker-Erik alternation.
  ['inge-the-elder', 'successor', 'philip-halstensson'],
  ['philip-halstensson', 'predecessor', 'inge-the-elder'],
  ['philip-halstensson', 'successor', 'inge-the-younger'],
  ['inge-the-younger', 'predecessor', 'philip-halstensson'],
  ['inge-the-younger', 'successor', 'sverker-i-of-sweden'],
  ['sverker-i-of-sweden', 'predecessor', 'inge-the-younger'],
  ['charles-vii-sverkersson', 'successor', 'knut-eriksson'],
  ['knut-eriksson', 'predecessor', 'charles-vii-sverkersson'],
  ['erik-knutsson', 'successor', 'john-i-sverkersson'],
  ['john-i-sverkersson', 'predecessor', 'erik-knutsson'],
  ['john-i-sverkersson', 'successor', 'eric-xi-eriksson'],
  ['eric-xi-eriksson', 'predecessor', 'john-i-sverkersson'],
  ['eric-xi-eriksson', 'successor', 'valdemar-of-sweden'],
  ['valdemar-of-sweden', 'predecessor', 'eric-xi-eriksson'],
  ['ulf-fase', 'successor', 'birger-jarl'],
  ['birger-jarl', 'predecessor', 'ulf-fase'],
  // Ayyubid & Mamluk (linked to anchors; open-side neighbours are noted boundaries).
  ['nur-ad-din', 'successor', 'as-salih-ismail'],
  ['as-salih-ismail', 'predecessor', 'nur-ad-din'],
  ['al-kamil', 'successor', 'al-adil-ii'],
  ['al-adil-ii', 'predecessor', 'al-kamil'],
  ['qutuz', 'predecessor', 'al-mansur-ali'],
  ['al-mansur-ali', 'successor', 'qutuz'],
  ['baybars', 'successor', 'baraka-khan'],
  ['baraka-khan', 'predecessor', 'baybars'],
  // Scottish & Iberian singles (linked to anchors).
  ['david-ii-of-scotland', 'successor', 'robert-ii-of-scotland'],
  ['robert-ii-of-scotland', 'predecessor', 'david-ii-of-scotland'],
  ['john-balliol', 'predecessor', 'margaret-maid-of-norway'],
  ['margaret-maid-of-norway', 'successor', 'john-balliol'],
  ['alfonso-viii-of-castile', 'predecessor', 'sancho-iii-of-castile'],
  ['sancho-iii-of-castile', 'successor', 'alfonso-viii-of-castile'],
  ['alfonso-viii-of-castile', 'successor', 'henry-i-of-castile'],
  ['henry-i-of-castile', 'predecessor', 'alfonso-viii-of-castile'],
  ['peter-of-castile', 'predecessor', 'alfonso-xi-of-castile'],
  ['alfonso-xi-of-castile', 'successor', 'peter-of-castile'],
  // Hungarian & East European (linked to anchors; open-side neighbours noted).
  ['andrew-ii-of-hungary', 'predecessor', 'emeric-of-hungary'],
  ['emeric-of-hungary', 'successor', 'andrew-ii-of-hungary'],
  ['andrew-ii-of-hungary', 'successor', 'bela-iv-of-hungary'],
  ['bela-iv-of-hungary', 'predecessor', 'andrew-ii-of-hungary'],
  ['wladyslaw-ii-jagiello', 'successor', 'wladyslaw-iii-of-poland'],
  ['wladyslaw-iii-of-poland', 'predecessor', 'wladyslaw-ii-jagiello'],
  ['vytautas', 'predecessor', 'skirgaila'],
  ['skirgaila', 'successor', 'vytautas'],
  ['vytautas', 'successor', 'svitrigaila'],
  ['svitrigaila', 'predecessor', 'vytautas'],
  ['jadwiga-of-poland', 'predecessor', 'louis-i-of-hungary'],
  ['louis-i-of-hungary', 'successor', 'jadwiga-of-poland'],
  ['prince-lazar', 'successor', 'stefan-lazarevic'],
  ['stefan-lazarevic', 'predecessor', 'prince-lazar'],
  ['sviatoslav-i-of-kiev', 'successor', 'yaropolk-i-of-kiev'],
  ['yaropolk-i-of-kiev', 'predecessor', 'sviatoslav-i-of-kiev'],
  // Carolingian & early Frankish (linked to anchors; open-side neighbours noted).
  ['charles-martel', 'predecessor', 'pepin-of-herstal'],
  ['pepin-of-herstal', 'successor', 'charles-martel'],
  ['pepin-the-short', 'predecessor', 'childeric-iii'],
  ['childeric-iii', 'successor', 'pepin-the-short'],
  ['louis-the-pious', 'successor', 'lothair-i'],
  ['lothair-i', 'predecessor', 'louis-the-pious'],
  ['hugh-capet', 'predecessor', 'louis-v-of-france'],
  ['louis-v-of-france', 'successor', 'hugh-capet']
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

// Hard failure: kingdom/polity article standards. Every location whose
// locationType marks it as a political entity must read as an anchor article:
// enough substantive sections, a Major-rulers-style section (unless the polity
// has no rulers to list, e.g. a league), and a detailed timeline.
// See CLAUDE.md "Kingdom and Polity Article Standards".
const POLITY_TYPES = new Set([
  'Kingdom', 'Empire', 'Duchy', 'County', 'Caliphate', 'Sultanate', 'Principality',
  'Polity', 'Polities', 'Grand duchy', 'League', 'Military order', 'Imperial realm', 'Region / duchy'
])
// Polities where a "Major rulers" section is structurally inapplicable
// (collective/confederate entities with no ruler line of their own).
const POLITY_NO_RULERS_OK = new Set(['lombard-league', 'north-sea-empire', 'crusader-states'])
const MAJOR_POLITY_TYPES = new Set(['Kingdom', 'Empire', 'Caliphate'])
const rulersSectionRe = /major (rulers|figures)|the states in brief/i

function validatePolityStandards(entry, label) {
  if (!POLITY_TYPES.has(entry.locationType)) return
  const sections = entry.contentSections ?? []
  const minSections = MAJOR_POLITY_TYPES.has(entry.locationType) ? 6 : 4
  if (sections.length < minSections) {
    findings.push({ collection: 'locations', article: label, path: 'contentSections', pattern: `polity article has ${sections.length} sections (minimum ${minSections})`, snippet: '' })
  }
  for (const s of sections) {
    const text = (s.paragraphs ?? []).join(' ')
    if (text.trim().length < 200) {
      findings.push({ collection: 'locations', article: label, path: `contentSections "${s.title}"`, pattern: 'polity section too thin (<200 chars)', snippet: text.slice(0, 120) })
    }
  }
  if (!POLITY_NO_RULERS_OK.has(entry.id) && !sections.some((s) => rulersSectionRe.test(s.title ?? ''))) {
    findings.push({ collection: 'locations', article: label, path: 'contentSections', pattern: 'polity article missing a Major rulers section', snippet: '' })
  }
  const tl = entry.timeline ?? []
  const minTimeline = MAJOR_POLITY_TYPES.has(entry.locationType) ? 8 : 5
  if (tl.length < minTimeline) {
    findings.push({ collection: 'locations', article: label, path: 'timeline', pattern: `polity timeline has ${tl.length} entries (minimum ${minTimeline})`, snippet: '' })
  }
  for (const item of tl) {
    if (!item.description || !String(item.description).trim()) {
      findings.push({ collection: 'locations', article: label, path: `timeline "${item.title}"`, pattern: 'polity timeline entry missing description', snippet: item.date ?? '' })
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
      validateEpithetsAndAge(entry, labelFor(entry))
    }

    if (collection === 'events') {
      validateBattleContinuity(entry, labelFor(entry))
      validateBattleStrength(entry, labelFor(entry))
      validateBattleLeaders(entry, labelFor(entry))
    }

    if (collection === 'locations') {
      validatePolityStandards(entry, labelFor(entry))
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
validateRequiredEpithets()

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

// ---- House <-> Person bidirectional link integrity ----
// Guards the reverse-navigation feature: House->Person links must resolve, House
// keys must be unambiguous, and the reported Henry I -> House of Normandy
// back-link must stay resolvable.
{
  const houses = data.houses ?? []
  const charById = new Map((data.characters ?? []).map((c) => [c.id, c]))
  const normDyn = (v) => String(v ?? '').trim().toLowerCase().replace(/^the\s+/, '')
  const AMBIGUOUS = new Set(['house of anjou', 'angevins', 'angevin dynasty', 'anjou'])

  // Safe house name/alias -> house id, flagging cross-house collisions.
  const houseKey = new Map()
  for (const h of houses) {
    for (const label of [h.name, ...(h.aliases ?? [])]) {
      const k = normDyn(label)
      if (!k || AMBIGUOUS.has(k)) continue
      if (houseKey.has(k) && houseKey.get(k) !== h.id) {
        findings.push({ collection: 'houses', article: h.name, path: `alias "${label}"`, pattern: `ambiguous House key "${k}" collides with ${houseKey.get(k)}`, snippet: '' })
      } else {
        houseKey.set(k, h.id)
      }
    }
  }

  // House -> Person: every member / family-tree / founder personSlug must resolve.
  for (const h of houses) {
    const slugs = new Set()
    for (const m of h.notableMembers ?? []) if (m.personSlug) slugs.add(m.personSlug)
    if (h.founder?.personSlug) slugs.add(h.founder.personSlug)
    ;(function walk(n) {
      if (!n) return
      if (n.personSlug) slugs.add(n.personSlug)
      if (n.spouse?.personSlug) slugs.add(n.spouse.personSlug)
      ;(n.children ?? []).forEach(walk)
    })(h.familyTree?.root)
    for (const slug of slugs) {
      if (!charById.has(slug)) {
        findings.push({ collection: 'houses', article: h.name, path: `personSlug ${slug}`, pattern: 'House links to a missing Person article', snippet: slug })
      }
    }
  }

  // Regression guard for the reported bug: Henry I must resolve to House of Normandy.
  if (charById.has('henry-i-of-england') && houses.some((h) => h.id === 'house-of-normandy')) {
    const hi = charById.get('henry-i-of-england')
    if (houseKey.get(normDyn(hi.quickFacts?.dynasty)) !== 'house-of-normandy') {
      findings.push({ collection: 'characters', article: 'Henry I of England', path: 'quickFacts.dynasty', pattern: 'must resolve to House of Normandy for the Dynasty/House back-link', snippet: String(hi.quickFacts?.dynasty) })
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
