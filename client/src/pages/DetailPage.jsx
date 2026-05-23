import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import LoadingState from '../components/LoadingState.jsx'
import { getArticle } from '../lib/api.js'
import { fallbackImage, shouldUseFallbackImage } from '../lib/images.js'

const collectionLabels = {
  events: 'Events',
  people: 'People',
  artifacts: 'Artifacts'
}

export default function DetailPage() {
  const { collection, id } = useParams()
  const [article, setArticle] = useState(null)
  const [status, setStatus] = useState('loading')

  useEffect(() => {
    setStatus('loading')
    getArticle(collection, id)
      .then((data) => {
        setArticle(data)
        setStatus('ready')
      })
      .catch(() => setStatus('error'))
  }, [collection, id])

  if (status === 'loading') {
    return <LoadingState label="Opening article" />
  }

  if (status === 'error' || !article) {
    return (
      <section className="empty-state">
        <p className="eyebrow">Missing record</p>
        <h1>Article not found</h1>
        <Link className="button" to="/">Return home</Link>
      </section>
    )
  }

  return (
    <article className="detail-page">
      <div className="detail-media">
        <img
          src={article.image}
          alt={article.name}
          onLoad={(event) => {
            if (shouldUseFallbackImage(event.currentTarget)) {
              event.currentTarget.classList.add('generated-image')
              event.currentTarget.src = fallbackImage(article)
            }
          }}
          onError={(event) => {
            event.currentTarget.classList.add('generated-image')
            event.currentTarget.src = fallbackImage(article)
          }}
        />
      </div>
      <div className="detail-body">
        <Link className="back-link" to={`/${collection}`}>
          Back to {collectionLabels[collection] ?? 'archive'}
        </Link>
        <p className="eyebrow">{article.type === 'character' ? 'Person' : article.type}</p>
        <h1>{article.name}</h1>
        {article.type === 'character' ? <PersonArticle article={article} /> : <StandardArticle article={article} />}
      </div>
    </article>
  )
}

function StandardArticle({ article }) {
  return (
    <>
      <dl className="fact-strip">
        <div>
          <dt>Year</dt>
          <dd>{article.year}</dd>
        </div>
        <div>
          <dt>Location</dt>
          <dd>{article.location}</dd>
        </div>
      </dl>
      <p className="standfirst">{article.summary}</p>
      <p>{article.details}</p>
    </>
  )
}

function PersonArticle({ article }) {
  return (
    <div className="person-profile">
      <dl className="fact-strip person-facts">
        <div>
          <dt>Born</dt>
          <dd>{article.born ?? 'Unknown'}</dd>
        </div>
        <div>
          <dt>Died</dt>
          <dd>{formatDeath(article)}</dd>
        </div>
        <div>
          <dt>Resting place</dt>
          <dd>{article.restingPlace}</dd>
        </div>
      </dl>

      <section className="bio-section">
        <h2>Overview</h2>
        {(article.overview ?? [article.details]).map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </section>

      <section className="bio-section">
        <h2>Greatest feats</h2>
        <ul className="feat-list">
          {(article.greatestFeats ?? []).map((feat) => (
            <li key={feat}>{feat}</li>
          ))}
        </ul>
      </section>
    </div>
  )
}

function formatDeath(article) {
  const year = article.died ?? 'Unknown'
  const age = article.deathAge ? `, age ${article.deathAge}` : ''
  const cause = article.causeOfDeath ? `, ${article.causeOfDeath}` : ''

  return `${year}${age}${cause}`
}
