import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getGlobalSearchIndex, searchArchive, shouldNavigateDirectly } from '../lib/search.js'

export default function GlobalSearch() {
  const [query, setQuery] = useState('')
  const [index, setIndex] = useState([])
  const [indexStatus, setIndexStatus] = useState('idle')
  const [isOpen, setIsOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(-1)
  const navigate = useNavigate()
  const searchRef = useRef(null)
  const suggestions = useMemo(() => searchArchive(index, query, 6), [index, query])

  /**
   * ⚠️ THE INDEX LOADS WHEN SOMEONE REACHES FOR THE BOX, NOT WITH THE PAGE.
   * This component sits in the header of every page and used to fetch the
   * whole archive on mount — 9.5 MB through the server function per visit,
   * for a box most visitors never touch and no crawler ever types in. That
   * alone took the site past Vercel's free 10 GB of origin transfer
   * (2026-09-23). Focusing or typing starts the fetch — not hovering, which
   * would download it for every mouse that crosses the header. The index is a
   * static file now, and cached for the rest of the visit.
   */
  function loadIndex() {
    if (indexStatus !== 'idle') return
    setIndexStatus('loading')
    getGlobalSearchIndex()
      .then((loaded) => {
        setIndex(loaded)
        setIndexStatus('ready')
      })
      .catch(() => {
        setIndex([])
        setIndexStatus('idle') // try again on the next focus
      })
  }

  useEffect(() => {
    function handlePointerDown(event) {
      if (!searchRef.current?.contains(event.target)) {
        setIsOpen(false)
        setActiveIndex(-1)
      }
    }

    document.addEventListener('pointerdown', handlePointerDown)
    return () => document.removeEventListener('pointerdown', handlePointerDown)
  }, [])

  async function submitSearch(event) {
    event.preventDefault()
    const trimmedQuery = query.trim()

    if (!trimmedQuery) {
      return
    }

    // Enter can beat the index: wait for it rather than search nothing.
    let searchIndex = index
    if (indexStatus !== 'ready') {
      searchIndex = await getGlobalSearchIndex().catch(() => [])
    }
    const results = searchArchive(searchIndex, trimmedQuery, 20)

    setIsOpen(false)
    setActiveIndex(-1)

    if (shouldNavigateDirectly(results, trimmedQuery)) {
      navigate(results[0].url)
      return
    }

    navigate(`/search?q=${encodeURIComponent(trimmedQuery)}`)
  }

  function handleKeyDown(event) {
    if (event.key === 'Escape') {
      setIsOpen(false)
      setActiveIndex(-1)
      return
    }

    if (!isOpen || suggestions.length === 0) {
      return
    }

    if (event.key === 'ArrowDown') {
      event.preventDefault()
      setActiveIndex((index) => (index + 1) % suggestions.length)
    }

    if (event.key === 'ArrowUp') {
      event.preventDefault()
      setActiveIndex((index) => (index <= 0 ? suggestions.length - 1 : index - 1))
    }

    if (event.key === 'Enter' && activeIndex >= 0) {
      event.preventDefault()
      setIsOpen(false)
      navigate(suggestions[activeIndex].url)
    }
  }

  return (
    <form className="global-search" role="search" onSubmit={submitSearch} ref={searchRef}>
      <label htmlFor="global-search-input">Search IronCodex</label>
      <input
        id="global-search-input"
        type="search"
        value={query}
        placeholder="Search IronCodex..."
        autoComplete="off"
        aria-controls="global-search-suggestions"
        aria-expanded={isOpen && suggestions.length > 0}
        onChange={(event) => {
          loadIndex()
          setQuery(event.target.value)
          setIsOpen(event.target.value.trim().length > 0)
          setActiveIndex(-1)
        }}
        onFocus={() => {
          loadIndex()
          setIsOpen(query.trim().length > 0)
        }}
        onKeyDown={handleKeyDown}
      />
      <button type="submit" aria-label="Search IronCodex">Search</button>

      {isOpen && indexStatus === 'loading' && (
        <div className="global-search-suggestions" aria-busy="true" aria-label="Loading search">
          {[0, 1, 2].map((row) => (
            <div className="search-skeleton-row" key={row}>
              <span className="search-skeleton-line" />
              <span className="search-skeleton-line short" />
            </div>
          ))}
        </div>
      )}

      {isOpen && suggestions.length > 0 && (
        <div className="global-search-suggestions" id="global-search-suggestions">
          {suggestions.map((suggestion, index) => (
            <Link
              className={index === activeIndex ? 'active' : ''}
              to={suggestion.url}
              key={`${suggestion.type}-${suggestion.slug}`}
              onClick={() => {
                setIsOpen(false)
                setActiveIndex(-1)
              }}
            >
              <strong>{suggestion.title}</strong>
              <span>{suggestion.typeLabel}</span>
            </Link>
          ))}
          <button type="submit">See all results</button>
        </div>
      )}
    </form>
  )
}
