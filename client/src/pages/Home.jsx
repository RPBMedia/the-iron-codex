import { useEffect, useState } from 'react'
import ArticleCard from '../components/ArticleCard.jsx'
import LoadingState from '../components/LoadingState.jsx'
import { getHomeArticles } from '../lib/api.js'
import { useAuth } from '../lib/auth.jsx'

export default function Home() {
  const { isAuthenticated, isLoading, user } = useAuth()
  const [homeData, setHomeData] = useState({ sections: [] })
  const [status, setStatus] = useState('loading')

  useEffect(() => {
    if (isLoading) return

    setStatus('loading')
    getHomeArticles()
      .then((payload) => {
        setHomeData(Array.isArray(payload) ? { sections: [{ id: 'archive', title: 'From the Archive', articles: payload }] } : payload)
        setStatus('ready')
      })
      .catch(() => setStatus('error'))
  }, [isLoading, isAuthenticated])

  const displayName = displayNameFor(user)

  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">{isAuthenticated ? `Greetings, ${displayName}` : 'Middle Ages Europe'}</p>
          <h1>The Iron Codex</h1>
          <p className="hero-tagline">Kingdoms, heroes, relics, and legends of the Middle Ages</p>
          <p className="hero-summary">
            Curated records from the fall of the Western Roman Empire in 476 to the fall of
            Constantinople in 1453.
          </p>
          <div className="hero-actions">
            <a className="button" href="/events">Events</a>
            <a className="button secondary" href="/people">People</a>
          </div>
        </div>
      </section>

      <section className="content-section">
        {status === 'loading' && <LoadingState />}
        {status === 'error' && <ErrorMessage />}
        {status === 'ready' && isAuthenticated && !homeData.hasFavorites && (
          <div className="empty-state compact home-archive-prompt">
            <h2>Start building your archive</h2>
            <p>Favorite people, battles, places, artifacts, and arms to shape your own recommendations.</p>
          </div>
        )}
        {status === 'ready' && homeData.sections?.map((section) => (
          <article className="home-section" key={section.id ?? section.title}>
            <div className="section-heading">
              <p className="eyebrow">{section.eyebrow ?? (homeData.recommendationMode ? 'Recommended' : 'Discovery')}</p>
              <h2>{section.title}</h2>
            </div>
            <div className="card-grid">
              {section.articles.map((article) => (
                <ArticleCard article={article} key={`${article.collection}-${article.id}`} />
              ))}
            </div>
          </article>
        ))}
      </section>
    </>
  )
}

function displayNameFor(user) {
  if (!user) return 'traveler'
  if (user.displayName) return user.displayName.split(' ')[0]

  return user.email?.split('@')[0] ?? 'traveler'
}

function ErrorMessage() {
  return (
    <div className="empty-state compact">
      <h2>Could not load the archive</h2>
      <p>Start the Node server and refresh the page.</p>
    </div>
  )
}
