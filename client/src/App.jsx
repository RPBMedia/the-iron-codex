import { Navigate, Route, Routes } from 'react-router-dom'
import { notFoundTitle } from './lib/pageTitles.js'
import { useDocumentTitle } from './lib/useDocumentTitle.js'
import Header from './components/Header.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import Home from './pages/Home.jsx'
import CollectionPage from './pages/CollectionPage.jsx'
import DetailPage from './pages/DetailPage.jsx'
import SearchPage from './pages/SearchPage.jsx'
import MapPage from './pages/MapPage.jsx'
import AuthCallback from './pages/AuthCallback.jsx'
import AuthPage from './pages/AuthPage.jsx'
import FavoritesPage from './pages/FavoritesPage.jsx'
import IndexPage from './pages/IndexPage.jsx'
import TopicPage, { TopicsIndex } from './pages/TopicPage.jsx'
import InsightsPage from './pages/InsightsPage.jsx'
import PageViewBeacon from './components/PageViewBeacon.jsx'
import { AuthProvider } from './lib/auth.jsx'

export default function App() {
  return (
    <AuthProvider>
      <div className="app-shell">
        {/* Keyboard and screen-reader users otherwise tab through the whole
            header — brand, search, every nav item, the account chip — on every
            page before reaching the article. Visually hidden until focused. */}
        <a className="skip-link" href="#main-content">Skip to content</a>
        <ScrollToTop />
      <PageViewBeacon />
        <Header />
        <main id="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<CollectionPage collection="events" />} />
            <Route path="/locations" element={<CollectionPage collection="locations" />} />
            <Route path="/people" element={<CollectionPage collection="people" />} />
            <Route path="/characters" element={<Navigate to="/people" replace />} />
            <Route path="/characters/:id" element={<RedirectCharacter />} />
            <Route path="/artifacts" element={<CollectionPage collection="artifacts" />} />
            <Route path="/artifacts/joyeuse" element={<Navigate to="/weapons-armor/joyeuse" replace />} />
            <Route path="/artifacts/sutton-hoo-helmet" element={<Navigate to="/weapons-armor/sutton-hoo-helmet" replace />} />
            <Route path="/weapons-armor" element={<CollectionPage collection="weapons-armor" />} />
            <Route path="/houses" element={<CollectionPage collection="houses" />} />
            <Route path="/orders" element={<CollectionPage collection="orders" />} />
            <Route path="/civilizations" element={<CollectionPage collection="civilizations" />} />
            <Route path="/locations/teutonic-order" element={<Navigate to="/orders/teutonic-order" replace />} />
            {/* Both were Polity-typed locations that were in substance people
                pages, and both are indexed at their old URLs. Moving them into
                the civilizations collection without these would 404 every
                inbound link and every search result. */}
            <Route path="/locations/pechenegs" element={<Navigate to="/civilizations/pechenegs" replace />} />
            <Route path="/locations/cumans" element={<Navigate to="/civilizations/cumans" replace />} />
            <Route path="/archive" element={<IndexPage />} />
            <Route path="/insights" element={<InsightsPage />} />
            <Route path="/topics" element={<TopicsIndex />} />
            <Route path="/topics/:slug" element={<TopicPage />} />
            {/* /index cannot be prerendered: clean-URL resolution maps it to the
                ROOT index.html, which would serve the home page's metadata. Vercel
                301s it to /archive in production; this keeps local dev honest. */}
            <Route path="/index" element={<Navigate to="/archive" replace />} />
            <Route path="/search" element={<SearchPage />} />
            {/* Above the /:collection/:id catch-all, or "map" is read as a collection. */}
            <Route path="/map" element={<MapPage />} />
            <Route path="/login" element={<AuthPage mode="login" />} />
            <Route path="/signup" element={<AuthPage mode="signup" />} />
            <Route path="/auth/callback" element={<AuthCallback />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="/:collection/:id" element={<DetailPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </AuthProvider>
  )
}

function RedirectCharacter() {
  const id = window.location.pathname.split('/').pop()

  return <Navigate to={`/people/${id}`} replace />
}

function NotFound() {
  useDocumentTitle(notFoundTitle())

  return (
    <section className="empty-state">
      <p className="eyebrow">Lost manuscript</p>
      <h1>Page not found</h1>
      <a className="button" href="/">Return home</a>
    </section>
  )
}
