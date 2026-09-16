/**
 * The transformations applied to an article before it reaches the client.
 *
 * Extracted from server/index.js on 2026-09-08 because a SECOND consumer
 * appeared: the prerenderer inlines each article's data into its HTML so the
 * page renders without an API round-trip. Both must produce byte-identical
 * objects — if they drift, a prerendered page would render differently from the
 * same page fetched live, which is the sort of bug that is nearly invisible and
 * extremely annoying.
 *
 * Sharing the code is the only way to guarantee that, so this module is the one
 * definition and both sides import it.
 */

// Military events store only their continuity target's slug; the target's
// display data is resolved here so the client can render the block without a
// second fetch.
const MILITARY_EVENT_TYPES = new Set(['Battle', 'Siege'])

export function withBattleContinuityTarget(article, data) {
  if (!MILITARY_EVENT_TYPES.has(article.eventType) || !article.battleContinuity?.battleSlug) {
    return article
  }

  const target = data.events.find(
    (event) => event.id === article.battleContinuity.battleSlug && MILITARY_EVENT_TYPES.has(event.eventType)
  )

  if (!target) return article

  return {
    ...article,
    battleContinuity: {
      ...article.battleContinuity,
      target: {
        id: target.id,
        name: target.name,
        year: target.year,
        eventType: target.eventType,
        conflict: target.conflict ?? null,
        image: target.image ?? null
      }
    }
  }
}

// Ambiguous dynasty labels that must NOT auto-resolve to a House. "House of
// Anjou"/"Angevins" is claimed by both the Plantagenets and the distinct
// Capetian House of Anjou (Naples/Hungary/Poland), so linking on it would merge
// separate dynasties. We resolve only on unambiguous exact matches.
const AMBIGUOUS_DYNASTY_KEYS = new Set(['house of anjou', 'angevins', 'angevin dynasty', 'anjou'])

export const normalizeDynastyKey = (value) =>
  String(value ?? '').trim().toLowerCase().replace(/^the\s+/, '')

// Normalized house name + safe aliases -> { slug, name }.
export function dynastyHouseMap(data) {
  const map = new Map()
  for (const house of data.houses) {
    for (const label of [house.name, ...(house.aliases ?? [])]) {
      const key = normalizeDynastyKey(label)
      if (!key || AMBIGUOUS_DYNASTY_KEYS.has(key)) continue
      if (!map.has(key)) map.set(key, { slug: house.id, name: house.name })
    }
  }
  return map
}

// Attach the resolved House to a Person's Dynasty/House field so the client can
// render it as a link back to the House article (bidirectional navigation).
export function withDynastyHouse(article, data) {
  if (article.type !== 'character' || !article.quickFacts?.dynasty) return article
  const house = dynastyHouseMap(data).get(normalizeDynastyKey(article.quickFacts.dynasty))
  if (!house) return article
  return { ...article, dynastyHouse: house }
}

// Military orders (owner rule, 2026-09-15, reported on ulrich-von-jungingen): a
// Person whose Realm/polity or Dynasty/house names an order links to that order's
// article, the same way a dynasty links to its House. Resolved on exact names and
// aliases only.
export function orderNameMap(data) {
  const map = new Map()
  for (const order of data.orders ?? []) {
    for (const label of [order.name, ...(order.aliases ?? [])]) {
      const key = normalizeDynastyKey(label)
      if (key && !map.has(key)) map.set(key, { slug: order.id, name: order.name })
    }
  }
  return map
}

// A person's Realm/polity names a polity the archive usually holds an article
// for, and "every name in a fact links, like prose" (CLAUDE.md rule 5). It was
// plain text unless the realm was a military order, so Henry III's "Kingdom of
// England" went nowhere while his "House of Plantagenet" linked (owner,
// 2026-09-16). Resolved on exact names and aliases only, and a label claimed by
// two locations resolves to neither — a wrong link is worse than no link.
export function realmLocationMap(data) {
  const map = new Map()
  const ambiguous = new Set()
  for (const location of data.locations ?? []) {
    for (const label of [location.name, ...(location.aliases ?? [])]) {
      const key = normalizeDynastyKey(label)
      if (!key) continue
      const held = map.get(key)
      if (held && held.slug !== location.id) ambiguous.add(key)
      else if (!held) map.set(key, { slug: location.id, name: location.name })
    }
  }
  for (const key of ambiguous) map.delete(key)
  return map
}

export function withRealmLocation(article, data) {
  if (article.type !== 'character' || !article.quickFacts?.realm) return article
  const location = realmLocationMap(data).get(normalizeDynastyKey(article.quickFacts.realm))
  if (!location) return article
  return { ...article, realmLocation: location }
}

export function withOrderLinks(article, data) {
  if (article.type !== 'character') return article
  const map = orderNameMap(data)
  const realm = map.get(normalizeDynastyKey(article.quickFacts?.realm))
  const dynasty = map.get(normalizeDynastyKey(article.quickFacts?.dynasty))
  if (!realm && !dynasty) return article
  return { ...article, orderLinks: { ...(realm ? { realm } : {}), ...(dynasty ? { dynasty } : {}) } }
}

/** Exactly what `GET /api/:collection/:id` returns. */
export function enrichArticle(article, data) {
  return withRealmLocation(
    withOrderLinks(withDynastyHouse(withBattleContinuityTarget(article, data), data), data),
    data
  )
}
