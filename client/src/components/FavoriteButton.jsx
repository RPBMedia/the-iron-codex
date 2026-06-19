import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../lib/auth.jsx'

export default function FavoriteButton({ article, variant = 'icon', onChanged }) {
  const articleType = article.articleType ?? displayCollection(article.collection ?? `${article.type}s`)
  const articleId = article.articleId ?? article.id
  const { isAuthenticated, isFavorite, toggleFavorite } = useAuth()
  const [error, setError] = useState('')
  const [isPending, setIsPending] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const favorited = isFavorite(articleType, articleId)
  const label = favorited ? 'Unfavorite' : 'Favorite'
  const ariaLabel = favorited ? 'Remove from favorites' : 'Add to favorites'

  async function handleToggle(event) {
    event.preventDefault()
    event.stopPropagation()
    setError('')

    if (!isAuthenticated) {
      navigate('/login', { state: { returnTo: location.pathname } })
      return
    }

    setIsPending(true)

    try {
      const nextState = await toggleFavorite(articleType, articleId)
      onChanged?.(nextState)
    } catch (favoriteError) {
      setError(favoriteError.message)
    } finally {
      setIsPending(false)
    }
  }

  return (
    <span className={`favorite-control favorite-${variant}`}>
      <button
        type="button"
        className={favorited ? 'is-favorited' : ''}
        aria-label={ariaLabel}
        aria-pressed={favorited}
        disabled={isPending}
        onClick={handleToggle}
      >
        <FavoriteIcon />
        {variant === 'detail' && <span>{label}</span>}
      </button>
      {variant === 'detail' && !isAuthenticated && (
        <a
          className="favorite-login-note"
          href="/login"
          onClick={(event) => {
            event.preventDefault()
            navigate('/login', { state: { returnTo: location.pathname } })
          }}
        >
          Login to add favorite articles
        </a>
      )}
      {error && <span className="favorite-error" role="alert">{error}</span>}
    </span>
  )
}

function FavoriteIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" focusable="false">
      <path d="M12 2.6l2.92 5.92 6.53.95-4.72 4.6 1.12 6.5L12 17.49 6.15 20.57l1.12-6.5-4.72-4.6 6.53-.95L12 2.6z" />
    </svg>
  )
}

function displayCollection(collection) {
  if (collection === 'characters') return 'people'
  if (collection === 'weaponsArmor') return 'weapons-armor'
  return collection
}
