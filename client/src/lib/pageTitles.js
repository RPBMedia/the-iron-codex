/**
 * Every page title in the archive, in one place.
 *
 * WHY THIS FILE EXISTS. Until 2026-09-14 titles lived ONLY in the static HTML
 * that `scripts/prerender.mjs` writes, one file per URL. A full page load served
 * the right file and the tab was right. Every client-side navigation after that
 * swapped React components without touching `document.title`, so the tab kept
 * saying whatever the first page had set — home page to Insights, and the tab
 * still read "The Iron Codex". Refreshing only looked like a fix: it fetched a
 * different HTML file.
 *
 * The obvious patch — a `document.title = "…"` inside each page component —
 * would write every title twice, once here and once in the prerenderer, and the
 * two would drift. The first person to change a title in one place and not the
 * other would ship a tab that says one thing before a navigation and another
 * after it, which is a worse bug than this one because it is intermittent.
 *
 * So the prerenderer and the app both import these functions. Plain ESM, no
 * React and no browser globals, because Node imports this file too.
 *
 * It also matters beyond looks: screen readers announce the document title on
 * navigation, and bookmarks and history entries capture it.
 */

export const SITE_NAME = 'The Iron Codex'
export const TAGLINE = 'A medieval history archive'

/** Keyed by PUBLIC collection name — the one in the URL. */
export const COLLECTION_LABEL = {
  people: 'People',
  events: 'Events',
  locations: 'Locations',
  artifacts: 'Artifacts',
  'weapons-armor': 'Weapons & Armor',
  houses: 'Houses',
  orders: 'Orders',
  civilizations: 'Civilizations'
}

/**
 * Routes that exist but are never indexed: [route, label, blurb].
 *
 * Insights MUST stay in this list even though it is private. With the catch-all
 * rewrite gone, a route with no prerendered file 404s on direct load. Being
 * prerendered does not make it public — /api/insights is guarded server-side.
 */
export const UTILITY_PAGES = [
  ['search', 'Search', 'Search the archive.'],
  ['login', 'Log in', 'Log in to The Iron Codex.'],
  ['signup', 'Create an account', 'Create an Iron Codex account.'],
  ['favorites', 'Favourites', 'Your saved articles.'],
  ['auth/callback', 'Signing in…', 'Completing sign-in.'],
  ['insights', 'Insights', 'Private analytics.'],
  ['map', 'Historical map', 'Medieval political geography, from dated and cited sources.']
]

export const utilityLabel = (route) => UTILITY_PAGES.find(([r]) => r === route)?.[1]

/** "People — The Iron Codex". Used for every page that is not an article or the home page. */
export const pageTitle = (label) => `${label} — ${SITE_NAME}`

export const homeTitle = () => `${SITE_NAME} — ${TAGLINE}`

export const notFoundTitle = () => pageTitle('Page not found')

/**
 * "Bannockburn — Battle | The Iron Codex".
 *
 * The qualifier is the most specific thing the article knows about itself: a
 * person's title, an event's type, a location's type, a weapon's type, and only
 * then the collection name.
 */
export function articleTitle(article, publicCollection) {
  const qualifier =
    article.title || article.eventType || article.locationType || article.weaponArmorType || COLLECTION_LABEL[publicCollection]
  return qualifier ? `${article.name} — ${qualifier} | ${SITE_NAME}` : `${article.name} | ${SITE_NAME}`
}
