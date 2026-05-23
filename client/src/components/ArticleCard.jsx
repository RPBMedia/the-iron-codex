import { Link } from 'react-router-dom'
import { fallbackImage, shouldUseFallbackImage } from '../lib/images.js'

export default function ArticleCard({ article, collection }) {
  const targetCollection = displayCollection(collection ?? article.collection ?? `${article.type}s`)

  return (
    <Link className="article-card" to={`/${targetCollection}/${article.id}`}>
      <ImageWithFallback article={article} />
      <div className="card-content">
        <div className="card-meta">
          <span>{labelFor(article)}</span>
          <span>{formatDate(article)}</span>
        </div>
        <h2>{article.name}</h2>
        {cardSubtitle(article) && <span className="card-subtitle">{cardSubtitle(article)}</span>}
        <p>{article.summary}</p>
        <span className="read-link">Open article</span>
      </div>
    </Link>
  )
}

function ImageWithFallback({ article }) {
  return (
    <div className="image-frame">
      <img
        src={article.image}
        alt={article.name}
        loading="lazy"
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
  )
}

function labelFor(article) {
  if (article.type === 'event' && article.eventType && article.eventType !== 'Other') {
    return article.eventType
  }

  if (article.type === 'location') {
    return article.locationType
  }

  return {
    event: 'Event',
    character: 'Person',
    location: 'Location',
    artifact: 'Artifact'
  }[article.type] ?? 'Article'
}

function formatDate(article) {
  if ('born' in article || 'died' in article) {
    return `${article.born ?? 'Unknown'}-${article.died ?? 'Unknown'}`
  }

  if (article.locationType) {
    return article.locationType === 'Kingdom' ? 'Kingdom' : article.kingdom
  }

  return `${article.year}`
}

function displayCollection(collection) {
  return collection === 'characters' ? 'people' : collection
}

function cardSubtitle(article) {
  if (article.type === 'location') {
    return article.locationType === 'Kingdom' ? 'Kingdom' : article.kingdom
  }

  if (article.type === 'event' && article.eventType && article.eventType !== 'Other') {
    return article.eventType
  }

  return ''
}
