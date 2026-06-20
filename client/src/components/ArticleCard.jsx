import { useState } from 'react'
import { Link } from 'react-router-dom'
import FavoriteButton from './FavoriteButton.jsx'
import { reportArticleImageFailure } from '../lib/images.js'

export default function ArticleCard({ article, collection, onFavoriteChanged }) {
  const targetCollection = displayCollection(collection ?? article.collection ?? `${article.type}s`)
  const articleWithIdentity = {
    ...article,
    articleType: targetCollection,
    articleId: article.id,
    articleUrl: `/${targetCollection}/${article.id}`
  }

  return (
    <article className="article-card">
      <FavoriteButton article={articleWithIdentity} onChanged={(isFavorited) => onFavoriteChanged?.(articleWithIdentity, isFavorited)} />
      <Link className="article-card-link" to={`/${targetCollection}/${article.id}`}>
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
    </article>
  )
}

function ImageWithFallback({ article }) {
  const [failed, setFailed] = useState(false)

  if (failed || !article.image) {
    return (
      <div className="image-frame image-frame-error" role="img" aria-label={`Image unavailable for ${article.name}`}>
        <span>Image unavailable</span>
      </div>
    )
  }

  return (
    <div className="image-frame">
      <img
        src={article.image}
        alt={article.name}
        loading="lazy"
        onError={(event) => {
          reportArticleImageFailure(article, 'image', event.currentTarget.currentSrc || event.currentTarget.src)
          setFailed(true)
        }}
      />
    </div>
  )
}

function labelFor(article) {
  if (article.type === 'character') {
    return article.title ?? 'Person'
  }

  if (article.type === 'event' && article.eventType && article.eventType !== 'Other') {
    return article.eventType
  }

  if (article.type === 'location') {
    return article.locationType
  }

  if (article.type === 'weaponArmor') {
    return article.weaponArmorType ?? 'Weapons & Armor'
  }

  return {
    event: 'Event',
    location: 'Location',
    artifact: 'Artifact',
    weaponArmor: 'Weapons & Armor'
  }[article.type] ?? 'Article'
}

function formatDate(article) {
  if ('born' in article || 'died' in article) {
    return `${article.born ?? 'Unknown'}-${article.died ?? 'Unknown'}`
  }

  if (article.locationType) {
    return article.locationType === 'Kingdom' ? 'Kingdom' : article.kingdom
  }

  if (article.type === 'weaponArmor') {
    return article.period ?? article.year ?? ''
  }

  return `${article.year}`
}

function displayCollection(collection) {
  if (collection === 'characters') return 'people'
  if (collection === 'weaponsArmor') return 'weapons-armor'
  return collection
}

function cardSubtitle(article) {
  if (article.type === 'location') {
    return article.locationType === 'Kingdom' ? 'Kingdom' : article.kingdom
  }

  if (article.type === 'event' && article.eventType && article.eventType !== 'Other') {
    return article.eventType
  }

  if (article.type === 'weaponArmor') {
    return [article.material, article.region].filter(Boolean).join(' · ')
  }

  return ''
}
