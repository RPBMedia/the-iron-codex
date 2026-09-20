/**
 * SSR entry for the render gate (`scripts/check-render.mjs`).
 *
 * Renders one article's DetailPage to static markup so a build can assert what
 * the page ACTUALLY renders. Nothing else in the project can: the prerenderer
 * writes a hand-built SEO skeleton — an h1, some paragraphs, a related list —
 * not React output. So a component can be deleted, never written, or silently
 * broken and every existing gate still passes.
 *
 * That is not hypothetical. The contents rail was recorded as shipped in
 * milestone U2 while never having been built, and grepping the deployed HTML for
 * it returned zero — as did grepping for `detail-hero` and `bio-section`,
 * because none of that markup is in a prerendered page at all.
 *
 * It lives in `client/src/` rather than beside the checker because Vite and node
 * both resolve a module's imports from its own directory: an entry under
 * `scripts/` cannot find `react-dom/server`, which is installed in
 * `client/node_modules`.
 */
import { renderToStaticMarkup } from 'react-dom/server'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import DetailPage from './pages/DetailPage.jsx'
import MapPage, { MapPageContent } from './pages/MapPage.jsx'
import { AuthProvider } from './lib/auth.jsx'

/**
 * @param {object} article  an enriched archive article — pass it through
 *                          `enrichArticle` first, exactly as the server does
 * @param {string} collection  public collection name, e.g. "events", "people"
 * @returns {string} the rendered HTML for that article page
 */
export function renderArticle(article, collection) {
  const path = `/${collection}/${article.id}`
  return renderToStaticMarkup(
    <MemoryRouter initialEntries={[path]}>
      <AuthProvider>
        <Routes>
          <Route
            path="/:collection/:id"
            element={<DetailPage article={{ ...article, collection }} />}
          />
        </Routes>
      </AuthProvider>
    </MemoryRouter>
  )
}

/**
 * The map page, rendered server-side (QUEUE 0v).
 *
 * This is the reason the map is inline SVG and not MapLibre. A WebGL renderer
 * touches `window` on import, so the choice would have been to lazy-load it and
 * keep the map OUT of this gate — leaving the one page on the site that makes
 * historical claims as the one page nothing structurally verifies. Plain SVG
 * renders in Node unchanged, so the map is gated like everything else.
 *
 * It renders in its loading state here, which is correct and is the point: the
 * geometry arrives by fetch at runtime, and what this asserts is that the shell
 * around it — the year control, the evidence strip, the attribution — exists and
 * survives before any data does.
 */
export function renderMapPage() {
  return renderToStaticMarkup(
    <MemoryRouter initialEntries={['/map?year=1147']}>
      <AuthProvider>
        <Routes>
          {/*
            MapPageContent, not MapPage. MapPage is the temporary admin-only
            guard, and server-side there is no session, so rendering it here
            would only ever assert the "page not found" branch — the map itself
            would stop being checked for as long as the gate exists. The gate is
            temporary; the reason this check exists is not.
          */}
          <Route path="/map" element={<MapPageContent />} />
        </Routes>
      </AuthProvider>
    </MemoryRouter>
  )
}
