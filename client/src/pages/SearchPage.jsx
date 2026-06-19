import { useEffect, useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import LoadingState from '../components/LoadingState.jsx'
import { getGlobalSearchIndex, searchArchive } from '../lib/search.js'

const defaultGroupOrder = ['person', 'event', 'battle', 'kingdom', 'location', 'weaponArmor', 'document', 'artifact']
const yearGroupOrder = ['battle', 'event', 'person', 'kingdom', 'location', 'weaponArmor', 'document', 'artifact']

export default function SearchPage() {
  const [searchParams] = useSearchParams()
  const [index, setIndex] = useState([])
  const [status, setStatus] = useState('loading')
  const query = searchParams.get('q') ?? ''
  const results = useMemo(() => searchArchive(index, query, 100), [index, query])
  const groupedResults = useMemo(() => groupResults(results, query), [query, results])

  useEffect(() => {
    setStatus('loading')
    getGlobalSearchIndex()
      .then((searchIndex) => {
        setIndex(searchIndex)
        setStatus('ready')
      })
      .catch(() => setStatus('error'))
  }, [])

  return (
    <section className="content-section page-section search-results-page">
      <div className="section-heading wide">
        <p className="eyebrow">Global search</p>
        <h1>Search</h1>
        <p>{query ? `Results for "${query}"` : 'Search across the IronCodex archive.'}</p>
      </div>

      {status === 'loading' && <LoadingState label="Searching the archive" />}
      {status === 'error' && (
        <div className="empty-state compact">
          <h2>Could not search the archive</h2>
          <p>Check that the API server is running.</p>
        </div>
      )}
      {status === 'ready' && (
        <>
          <div className="search-summary" aria-live="polite">
            {query ? `${results.length} result${results.length === 1 ? '' : 's'} found` : 'Enter a search in the header to begin.'}
          </div>

          {!query && (
            <div className="empty-state compact">
              <h2>Search IronCodex</h2>
              <p>Try a person, event, artifact, location, kingdom, battle, document, or year.</p>
            </div>
          )}

          {query && results.length === 0 && (
            <div className="empty-state compact">
              <h2>No entries found for "{query}"</h2>
              <p>Try searching for a person, event, artifact, place, or year.</p>
            </div>
          )}

          {query && results.length > 0 && (
            <div className="search-result-groups">
              {groupedResults.map(([type, entries]) => (
                <section className="search-result-group" key={type}>
                  <h2>{groupLabel(type)}</h2>
                  <div className="search-result-list">
                    {entries.map((entry) => (
                      <Link className="search-result-card" to={entry.url} key={`${entry.type}-${entry.slug}`}>
                        <span>{entry.typeLabel}</span>
                        <strong>{entry.title}</strong>
                        {entry.dateLabel && <time>{entry.dateLabel}</time>}
                        {entry.description && <p>{entry.description}</p>}
                      </Link>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          )}
        </>
      )}
    </section>
  )
}

function groupResults(results, query) {
  const groups = new Map()
  const groupOrder = /^\d{3,4}$/.test(query.trim()) ? yearGroupOrder : defaultGroupOrder

  for (const result of results) {
    if (!groups.has(result.type)) {
      groups.set(result.type, [])
    }

    groups.get(result.type).push(result)
  }

  return [...groups.entries()].sort((a, b) => orderIndex(groupOrder, a[0]) - orderIndex(groupOrder, b[0]))
}

function orderIndex(order, type) {
  const index = order.indexOf(type)
  return index === -1 ? order.length : index
}

function groupLabel(type) {
  return {
    artifact: 'Artifacts',
    battle: 'Battles',
    document: 'Documents',
    event: 'Events',
    kingdom: 'Kingdoms and Polities',
    location: 'Locations',
    person: 'People',
    weaponArmor: 'Weapons & Armor'
  }[type] ?? 'Results'
}
