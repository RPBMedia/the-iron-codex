/**
 * Page metadata shared by the browser app AND the build scripts.
 *
 * This file is imported by React components and by Node scripts
 * (`scripts/prerender.mjs`, `scripts/build-topics.mjs`) alike, so it must stay
 * plain ESM: no JSX, no `import.meta.env`, no browser globals, no imports at all.
 * Its whole job is to be the ONE place a rule lives, so the prerendered HTML a
 * crawler reads and the page a person navigates to can never disagree.
 */

/**
 * The short text that describes an article on a card, a search result or a
 * topic list.
 *
 * WHY THE FALLBACK EXISTS. People articles are written with an `overview`
 * (an array of paragraphs), not a `summary`. The archive cards, search results
 * and topic lists read `summary` alone, so on 2026-09-14 sixty articles — 58
 * people, including Godfrey of Bouillon and every pope, plus Lisbon and the
 * Kingdom of León — rendered a card with a name, a date and nothing else.
 *
 * The prerenderer had solved exactly this months earlier, for meta
 * descriptions, with the chain below. It lived in one script and the app never
 * learned it. Now both use this function, so an article that has any lead text
 * at all shows it everywhere — and the fix does not depend on anyone writing a
 * `summary` for sixty articles, which is the kind of fix that quietly regresses
 * the next time a person is added.
 */
export function leadText(article) {
  if (!article) return ''
  const overview = Array.isArray(article.overview) ? article.overview[0] : article.overview
  for (const candidate of [article.summary, overview, article.details]) {
    const text = typeof candidate === 'string' ? candidate.trim() : ''
    if (text) return text
  }
  return ''
}

/**
 * Shorten text to a readable length without cutting a word in half.
 *
 * Moved verbatim from `scripts/prerender.mjs`, where it trimmed meta
 * descriptions to the ~155-160 characters search engines display. Prefers to
 * stop at a sentence or clause boundary, then a word boundary, and only hard-cuts
 * when there is no sensible break in the first 60 characters.
 */
export function clampText(value, max = 158) {
  const text = String(value ?? '').replace(/\s+/g, ' ').trim()
  if (text.length <= max) return text
  const cut = text.slice(0, max)
  const stop = Math.max(cut.lastIndexOf('. '), cut.lastIndexOf(', '), cut.lastIndexOf(' '))
  return `${cut.slice(0, stop > 60 ? stop : max).trim()}…`
}
