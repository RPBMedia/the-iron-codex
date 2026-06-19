import { Navigate, Route, Routes } from 'react-router-dom'
import Header from './components/Header.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import Home from './pages/Home.jsx'
import CollectionPage from './pages/CollectionPage.jsx'
import DetailPage from './pages/DetailPage.jsx'
import SearchPage from './pages/SearchPage.jsx'
import AuthCallback from './pages/AuthCallback.jsx'
import AuthPage from './pages/AuthPage.jsx'
import FavoritesPage from './pages/FavoritesPage.jsx'
import IndexPage from './pages/IndexPage.jsx'
import { AuthProvider } from './lib/auth.jsx'

export default function App() {
  return (
    <AuthProvider>
      <div className="app-shell">
        <ScrollToTop />
        <Header />
        <main>
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
            <Route path="/index" element={<IndexPage />} />
            <Route path="/search" element={<SearchPage />} />
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
  return (
    <section className="empty-state">
      <p className="eyebrow">Lost manuscript</p>
      <h1>Page not found</h1>
      <a className="button" href="/">Return home</a>
    </section>
  )
}
