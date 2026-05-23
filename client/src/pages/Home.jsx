import { useEffect, useState } from 'react'
import ArticleCard from '../components/ArticleCard.jsx'
import LoadingState from '../components/LoadingState.jsx'
import { getHomeArticles } from '../lib/api.js'

export default function Home() {
  const [articles, setArticles] = useState([])
  const [status, setStatus] = useState('loading')

  useEffect(() => {
    getHomeArticles()
      .then((items) => {
        setArticles(items)
        setStatus('ready')
      })
      .catch(() => setStatus('error'))
  }, [])

  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Middle Ages Europe</p>
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
        <div className="section-heading">
          <p className="eyebrow">Random articles</p>
          <h2>From the archive</h2>
        </div>

        {status === 'loading' && <LoadingState />}
        {status === 'error' && <ErrorMessage />}
        {status === 'ready' && (
          <div className="card-grid">
            {articles.map((article) => (
              <ArticleCard article={article} key={`${article.collection}-${article.id}`} />
            ))}
          </div>
        )}
      </section>
    </>
  )
}

function ErrorMessage() {
  return (
    <div className="empty-state compact">
      <h2>Could not load the archive</h2>
      <p>Start the Node server and refresh the page.</p>
    </div>
  )
}
