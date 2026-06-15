import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import LoadingState from '../components/LoadingState.jsx'
import { getSearchCollections } from '../lib/api.js'

const indexGroups = [
  { key: 'people', title: 'People', collection: 'people' },
  { key: 'battles', title: 'Battles', collection: 'events' },
  { key: 'events', title: 'Events', collection: 'events' },
  { key: 'locations', title: 'Locations', collection: 'locations' },
  { key: 'artifacts', title: 'Artifacts', collection: 'artifacts' }
]

export default function IndexPage() {
  const [collections, setCollections] = useState(null)
  const [status, setStatus] = useState('loading')
  const [query, setQuery] = useState('')

  useEffect(() => {
    setStatus('loading')
    getSearchCollections()
      .then((payload) => {
        setCollections(payload)
        setStatus('ready')
      })
      .catch(() => setStatus('error'))
  }, [])

  const groups = useMemo(() => buildIndexGroups(collections, query), [collections, query])
  const totalCount = groups.reduce((sum, group) => sum + group.entries.length, 0)

  return (
    <section className="content-section page-section index-page">
      <div className="section-heading wide">
        <p className="eyebrow">Master list</p>
        <h1>Index</h1>
        <p>Every article in the Codex, grouped by category and ordered alphabetically.</p>
      </div>

      {status === 'loading' && <LoadingState label="Opening the index" />}
      {status === 'error' && (
        <div className="empty-state compact">
          <h2>Could not load the index</h2>
          <p>Check that the API server is running.</p>
        </div>
      )}
      {status === 'ready' && (
        <>
          <label className="index-search">
            <span>Search the Index</span>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search titles, types, and summaries"
            />
          </label>

          <p className="index-summary" aria-live="polite">
            Showing {totalCount} {totalCount === 1 ? 'article' : 'articles'}
            {query.trim() ? ` for "${query.trim()}"` : ''}
          </p>

          <div className="index-groups">
            {groups.map((group) => (
              <IndexGroup group={group} key={group.key} />
            ))}
          </div>
        </>
      )}
    </section>
  )
}

function IndexGroup({ group }) {
  return (
    <section className="index-group" aria-labelledby={`index-${group.key}`}>
      <div className="index-group-heading">
        <h2 id={`index-${group.key}`}>{group.title}</h2>
        <span>{group.entries.length}</span>
      </div>

      {group.entries.length ? (
        <div className="index-letter-groups">
          {group.letterGroups.map((letterGroup) => (
            <section className="index-letter-group" key={`${group.key}-${letterGroup.letter}`}>
              <h3>{letterGroup.letter}</h3>
              <ul>
                {letterGroup.entries.map((entry) => (
                  <li key={`${entry.collection}-${entry.id}`}>
                    <Link className="article-link" to={`/${entry.collection}/${entry.id}`}>
                      {entry.name}
                    </Link>
                    {entry.meta && <span>{entry.meta}</span>}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      ) : (
        <p className="index-empty">No matching entries.</p>
      )}
    </section>
  )
}

function buildIndexGroups(collections, query) {
  if (!collections) return []

  const normalizedQuery = query.trim().toLowerCase()
  const entriesByGroup = {
    people: normalizeEntries(collections.people, 'people'),
    battles: normalizeEntries(
      collections.events?.filter((event) => event.eventType === 'Battle'),
      'events'
    ),
    events: normalizeEntries(
      collections.events?.filter((event) => event.eventType !== 'Battle'),
      'events'
    ),
    locations: normalizeEntries(collections.locations, 'locations'),
    artifacts: normalizeEntries(collections.artifacts, 'artifacts')
  }

  return indexGroups.map((group) => {
    const entries = dedupeEntries(entriesByGroup[group.key] ?? [])
      .filter((entry) => matchesQuery(entry, normalizedQuery))
      .sort(compareEntries)

    return {
      ...group,
      entries,
      letterGroups: groupByInitial(entries)
    }
  })
}

function normalizeEntries(items = [], collection) {
  return items
    .filter((item) => item?.id && item?.name)
    .map((item) => ({
      id: item.id,
      name: item.name,
      collection,
      meta: entryMeta(item, collection),
      searchText: [
        item.name,
        item.summary,
        item.details,
        item.eventType,
        item.locationType,
        item.title,
        item.location,
        item.kingdom,
        ...(item.aliases ?? []),
        ...(item.roles ?? []),
        ...(item.knownFor ?? [])
      ].filter(Boolean).join(' ').toLowerCase()
    }))
}

function dedupeEntries(entries) {
  return [...new Map(entries.map((entry) => [`${entry.collection}:${entry.id}`, entry])).values()]
}

function matchesQuery(entry, query) {
  return !query || entry.searchText.includes(query)
}

function compareEntries(a, b) {
  return sortTitle(a.name).localeCompare(sortTitle(b.name), undefined, {
    sensitivity: 'base',
    numeric: true
  })
}

function sortTitle(title) {
  return String(title).replace(/^the\s+/i, '')
}

function groupByInitial(entries) {
  const groups = new Map()

  entries.forEach((entry) => {
    const initial = sortTitle(entry.name).normalize('NFD').replace(/[\u0300-\u036f]/g, '').charAt(0).toUpperCase()
    const letter = /[A-Z]/.test(initial) ? initial : '#'

    if (!groups.has(letter)) groups.set(letter, [])
    groups.get(letter).push(entry)
  })

  return [...groups.entries()].map(([letter, letterEntries]) => ({ letter, entries: letterEntries }))
}

function entryMeta(item, collection) {
  if (collection === 'people') {
    const birthDate = item.birth?.date ?? item.born
    return birthDate ? `Born ${birthDate}` : ''
  }

  if (collection === 'events') {
    return [item.eventType, item.year].filter(Boolean).join(' · ')
  }

  if (collection === 'locations') {
    return item.locationType
  }

  return item.title ?? item.type
}
