import { Navigate, Route, Routes } from 'react-router-dom'
import Header from './components/Header.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import Home from './pages/Home.jsx'
import CollectionPage from './pages/CollectionPage.jsx'
import DetailPage from './pages/DetailPage.jsx'

export default function App() {
  return (
    <div className="app-shell">
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<CollectionPage collection="events" />} />
          <Route path="/people" element={<CollectionPage collection="people" />} />
          <Route path="/characters" element={<Navigate to="/people" replace />} />
          <Route path="/artifacts" element={<CollectionPage collection="artifacts" />} />
          <Route path="/:collection/:id" element={<DetailPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  )
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
