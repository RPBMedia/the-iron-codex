import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import LoadingState from '../components/LoadingState.jsx'
import { getArticle } from '../lib/api.js'
import { fallbackImage, shouldUseFallbackImage } from '../lib/images.js'

const collectionLabels = {
  events: 'Events',
  locations: 'Locations',
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
      <div className={`detail-media detail-media-${article.type}`}>
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
        <p className="eyebrow">{articleTypeLabel(article)}</p>
        <h1>{article.name}</h1>
        {article.type === 'character' && <PersonArticle article={article} />}
        {article.type === 'location' && <LocationArticle article={article} />}
        {article.type === 'event' && <EventArticle article={article} />}
        {article.type === 'artifact' && <StandardArticle article={article} />}
      </div>
    </article>
  )
}

function articleTypeLabel(article) {
  if (article.type === 'character') {
    return article.title ?? 'Person'
  }

  if (article.type === 'event') {
    return article.eventType && article.eventType !== 'Other' ? article.eventType : 'Event'
  }

  if (article.type === 'location') {
    return article.locationType
  }

  return article.type
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

function EventArticle({ article }) {
  const isBattle = article.eventType === 'Battle'
  const isWar = article.eventType === 'War'

  return (
    <div className="event-profile">
      {article.eventType && article.eventType !== 'Other' && (
        <p className="article-subtitle">{article.eventType}</p>
      )}

      <dl className="fact-strip">
        <div>
          <dt>Year</dt>
          <dd>{article.year}</dd>
        </div>
        <div>
          <dt>Location</dt>
          <dd>{renderEventLocation(article)}</dd>
        </div>
      </dl>

      {(isBattle || isWar) && (
        <div className="event-intel">
          <InfoBlock title="Factions">
            <ul className="inline-list">
              {(article.factions ?? []).map((faction) => (
                <li key={faction}>{faction}</li>
              ))}
            </ul>
          </InfoBlock>
          <InfoBlock title="Leaders">
            <ul className="leader-list">
              {(article.leaders ?? []).map((leader) => (
                <li key={`${leader.faction}-${leader.name}`}>
                  <span>{leader.faction}</span>
                  {leader.personId ? (
                    <Link to={`/people/${leader.personId}`}>{leader.name}</Link>
                  ) : (
                    <strong>{leader.name}</strong>
                  )}
                </li>
              ))}
            </ul>
          </InfoBlock>
          <InfoBlock title="Outcome">
            <p>{article.outcome}</p>
          </InfoBlock>
        </div>
      )}

      <p className="standfirst">{article.summary}</p>

      <ArticleSection title="Background" paragraphs={article.background} />
      {isBattle && <ArticleSection title="Battle" paragraphs={[article.battle]} />}
      <ArticleSection title="Aftermath" paragraphs={[article.aftermath ?? article.details]} />
    </div>
  )
}

function LocationArticle({ article }) {
  return (
    <div className="location-profile">
      <p className="article-subtitle">
        {article.locationType === 'Kingdom' ? 'Kingdom' : `${article.locationType} in ${article.kingdom}`}
      </p>
      <dl className="fact-strip">
        <div>
          <dt>Type</dt>
          <dd>{article.locationType}</dd>
        </div>
        <div>
          <dt>{article.locationType === 'Kingdom' ? 'Established' : 'Kingdom'}</dt>
          <dd>{article.locationType === 'Kingdom' ? article.year : renderKingdom(article)}</dd>
        </div>
      </dl>

      <ArticleSection title="Overview" paragraphs={article.overview} />
      <section className="bio-section">
        <h2>Known for</h2>
        <ul className="feat-list">
          {(article.knownFor ?? []).map((fact) => (
            <li key={fact}>{fact}</li>
          ))}
        </ul>
      </section>
    </div>
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

function InfoBlock({ title, children }) {
  return (
    <section className="info-block">
      <h2>{title}</h2>
      {children}
    </section>
  )
}

function ArticleSection({ title, paragraphs }) {
  return (
    <section className="bio-section">
      <h2>{title}</h2>
      {(paragraphs ?? []).filter(Boolean).map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </section>
  )
}

function renderEventLocation(article) {
  if (article.eventType === 'Battle' && article.eventLocation?.locationId) {
    return <Link to={`/locations/${article.eventLocation.locationId}`}>{article.eventLocation.name}</Link>
  }

  return article.eventLocation?.name ?? article.location
}

function renderKingdom(article) {
  if (article.kingdomId) {
    return <Link to={`/locations/${article.kingdomId}`}>{article.kingdom}</Link>
  }

  return article.kingdom
}

function formatDeath(article) {
  const year = article.died ?? 'Unknown'
  const age = article.deathAge ? `, age ${article.deathAge}` : ''
  const cause = article.causeOfDeath ? `, ${article.causeOfDeath}` : ''

  return `${year}${age}${cause}`
}
