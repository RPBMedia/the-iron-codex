import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getGlobalSearchIndex, searchArchive, shouldNavigateDirectly } from '../lib/search.js'

export default function GlobalSearch() {
  const [query, setQuery] = useState('')
  const [index, setIndex] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(-1)
  const navigate = useNavigate()
  const searchRef = useRef(null)
  const suggestions = useMemo(() => searchArchive(index, query, 6), [index, query])

  useEffect(() => {
    getGlobalSearchIndex().then(setIndex).catch(() => setIndex([]))
  }, [])

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

  function submitSearch(event) {
    event.preventDefault()
    const trimmedQuery = query.trim()

    if (!trimmedQuery) {
      return
    }

    const results = searchArchive(index, trimmedQuery, 20)

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
          setQuery(event.target.value)
          setIsOpen(event.target.value.trim().length > 0)
          setActiveIndex(-1)
        }}
        onFocus={() => setIsOpen(query.trim().length > 0)}
        onKeyDown={handleKeyDown}
      />
      <button type="submit" aria-label="Search IronCodex">Search</button>

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
