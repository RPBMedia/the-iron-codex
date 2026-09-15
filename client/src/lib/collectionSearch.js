/**
 * Ranking for the search box on the archive pages (People, Locations, Events…).
 *
 * The box matches any article whose text mentions the query, then the page sorts
 * the matches. Sorting alone buried the obvious result: a search for "Saladin" on
 * People listed Al-Adil I, Al-Adil II and the Amalrics first, because their
 * articles mention him, and Saladin's own article fell below the first page of
 * twenty (owner report, 2026-09-15). So a search ranks by how well the article
 * itself matches first, and the chosen sort only orders articles that match
 * equally well.
 *
 * Tiers, best first: the name is the query; an alias is the query; the name
 * starts with the query; the name contains it; an alias contains it; only the
 * article text mentions it.
 */

// Same folding as lib/search.js: case, accents and punctuation don't matter.
export function normalizeSearch(value) {
  return [value]
    .flat(Infinity)
    .filter(Boolean)
    .join(' ')
    .toLowerCase()
    // NFD splits accents off most letters but leaves these whole, so fold them by hand.
    .replace(/[łŁ]/g, 'l').replace(/[øØ]/g, 'o').replace(/[æÆ]/g, 'ae').replace(/[œŒ]/g, 'oe')
    .replace(/ß/g, 'ss').replace(/[đĐðÐ]/g, 'd').replace(/[þÞ]/g, 'th')
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^\w\s-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

export function searchRelevance(item, query) {
  const q = normalizeSearch(query)
  if (!q) return 0
  const name = normalizeSearch(item?.name)
  const aliases = (item?.aliases ?? []).map(normalizeSearch)
  if (name === q) return 6
  if (aliases.includes(q)) return 5
  if (name.startsWith(q)) return 4
  if (name.includes(q)) return 3
  if (aliases.some((alias) => alias.includes(q))) return 2
  return 1
}

/** Wraps a sort comparator so better matches for the query always come first. */
export function byRelevanceThen(query, compare) {
  if (!normalizeSearch(query)) return compare
  const cache = new Map()
  const tier = (item) => {
    if (!cache.has(item)) cache.set(item, searchRelevance(item, query))
    return cache.get(item)
  }
  return (a, b) => tier(b) - tier(a) || compare(a, b)
}
