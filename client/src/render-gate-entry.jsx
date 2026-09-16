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
