import { Link, Navigate, useLocation } from 'react-router-dom'
import { useEffect, useMemo, useState } from 'react'
import { getFavorites } from '../lib/api.js'
import { useAuth } from '../lib/auth.jsx'
import FavoriteButton from '../components/FavoriteButton.jsx'
import { reportArticleImageFailure } from '../lib/images.js'
import { rememberArchiveAnchor, useArchiveStateRestoration } from '../lib/archive.js'

const titleCollator = new Intl.Collator(undefined, { sensitivity: 'base', numeric: true })

export default function FavoritesPage() {
  const { isAuthenticated, isLoading, user } = useAuth()
  const [favorites, setFavorites] = useState([])
  const [sortMode, setSortMode] = useState('name')
  const [error, setError] = useState('')
  const [isFetching, setIsFetching] = useState(false)
  const location = useLocation()

  useArchiveStateRestoration({ ready: isAuthenticated && !isFetching })

  useEffect(() => {
    if (!isAuthenticated) return

    setIsFetching(true)
    setError('')
    getFavorites()
      .then((payload) => setFavorites(payload.favorites ?? []))
      .catch((favoritesError) => setError(favoritesError.message))
      .finally(() => setIsFetching(false))
  }, [isAuthenticated])

  const sortedFavorites = useMemo(() => {
    return [...favorites].sort((a, b) => {
      if (sortMode === 'chronological') {
        const aDate = Number.isFinite(a.dateSortKey) ? a.dateSortKey : Number.POSITIVE_INFINITY
        const bDate = Number.isFinite(b.dateSortKey) ? b.dateSortKey : Number.POSITIVE_INFINITY

        if (aDate !== bDate) return aDate - bDate
      }

      return titleCollator.compare(a.title, b.title)
    })
  }, [favorites, sortMode])

  if (isLoading) {
    return <section className="empty-state"><p>Loading your archive...</p></section>
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ returnTo: location.pathname }} replace />
  }

  return (
    <section className="favorites-page">
      <div className="favorites-header">
        <div className="archive-hero">
          <p className="eyebrow">Private archive</p>
          <h1>Favorites</h1>
          <p>Signed in as {user.email}. Saved articles will appear here as the favorites feature grows.</p>
        </div>

        {favorites.length > 0 && (
          <div className="favorites-toolbar" aria-label="Favorite article controls">
            <label htmlFor="favorites-sort">Sort favorites</label>
            <select
              id="favorites-sort"
              value={sortMode}
              onChange={(event) => setSortMode(event.target.value)}
            >
              <option value="name">Name A-Z</option>
              <option value="chronological">Chronological</option>
            </select>
          </div>
        )}
      </div>

      <div className="favorites-body">
        {isFetching && <p className="archive-count">Loading favorites...</p>}
        {error && <p className="form-error" role="alert">{error}</p>}

        {!isFetching && favorites.length === 0 && (
          <section className="empty-state favorites-empty">
            <p className="eyebrow">Nothing saved yet</p>
            <h2>Your archive is ready.</h2>
            <p>You have no favorite articles yet. Explore the archive and mark entries to build your own medieval collection.</p>
            <Link className="button" to="/people">Browse people</Link>
          </section>
        )}

        {favorites.length > 0 && (
          <div className="favorites-list">
            {sortedFavorites.map((favorite) => (
              <article
                className="favorite-item"
                key={`${favorite.collection}-${favorite.id}`}
                data-archive-item={`${favorite.collection}:${favorite.id}`}
              >
                <Link
                  className="favorite-card-link"
                  to={favorite.url}
                  aria-label={`Open article: ${favorite.title}`}
                  onClick={() => rememberArchiveAnchor(location, `${favorite.collection}:${favorite.id}`)}
                />
                <FavoriteImage favorite={favorite} />
                <div>
                  <span>{favorite.type}{favorite.date ? ` · ${favorite.date}` : ''}</span>
                  <h2>{favorite.title}</h2>
                  <p>{favorite.description}</p>
                </div>
                <FavoriteButton
                  article={favorite}
                  onChanged={(isFavorited) => {
                    if (!isFavorited) {
                      setFavorites((items) => items.filter((item) => item.favoriteId !== favorite.favoriteId))
                    }
                  }}
                />
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

function FavoriteImage({ favorite }) {
  const [failed, setFailed] = useState(false)

  if (failed || !favorite.image) {
    return (
      <div className="favorite-image-error" role="img" aria-label={`Image unavailable for ${favorite.title}`}>
        <span>Image unavailable</span>
      </div>
    )
  }

  return (
    <img
      src={favorite.image}
      alt=""
      loading="lazy"
      onError={(event) => {
        reportArticleImageFailure(favorite, 'favorite image', event.currentTarget.currentSrc || event.currentTarget.src)
        setFailed(true)
      }}
    />
  )
}
