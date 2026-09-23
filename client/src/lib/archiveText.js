/**
 * What an archive page's search box searches, shared by the browser AND the
 * build (`scripts/build-static-data.mjs`).
 *
 * WHY IT IS SHARED. The archive pages load small card files, not whole
 * articles (2026-09-23: the full People collection was 4 MB and every visit
 * paid for it). The box still searches full article text, so the build
 * pre-folds that text into a per-collection file the page fetches on the first
 * keystroke. Both sides must fold the same fields the same way, or a search
 * would match differently depending on where the text came from, so the rule
 * lives here once.
 *
 * Plain ESM with no JSX and no browser globals, like pageMeta.js.
 */
import { normalizeSearch } from './collectionSearch.js'
import { leadText } from './pageMeta.js'

export function searchableText(item, collection) {
  const values = [
    item.name,
    leadText(item),
    item.details,
    item.eventType,
    item.conflict,
    item.locationType,
    item.location,
    item.kingdom,
    item.weaponArmorType,
    item.period,
    item.region,
    item.material,
    item.battlefieldRole,
    item.quickFacts?.realm,
    item.quickFacts?.culture,
    item.quickFacts?.knownFor,
    // Civilizations: the endonym is often what a reader actually types
    // (Gutthiuda, Rhomaioi), and it is not an alias of the modern name.
    item.endonym,
    item.civilizationType,
    item.culturalFamily,
    ...(item.aliases ?? []),
    ...(item.roles ?? []),
    ...(item.knownFor ?? []),
    ...(item.contentSections ?? []).flatMap((section) => [section.title, ...(section.paragraphs ?? [])]),
    typeLabel(item, collection),
    centuryValue(dateValue(item))
  ]

  return values.filter(Boolean).join(' ').toLowerCase()
}

/** The folded text the search box matches against: `{ [id]: text }`. */
export function foldedTextMap(items, collection) {
  return Object.fromEntries(items.map((item) => [item.id, normalizeSearch(searchableText(item, collection))]))
}

export function dateValue(item, descending = false) {
  const value = Number(item.year ?? item.originYear ?? item.born ?? item.birth?.date?.match(/\d+/)?.[0])

  if (Number.isFinite(value)) {
    return value
  }

  return descending ? Number.NEGATIVE_INFINITY : Number.POSITIVE_INFINITY
}

export function centuryValue(year) {
  if (!Number.isFinite(year)) {
    return ''
  }

  const century = Math.ceil(year / 100)
  return `${century}`
}

export function typeLabel(item, collection) {
  return item.eventType ?? item.locationType ?? item.weaponArmorType ?? item.title ?? collection
}
