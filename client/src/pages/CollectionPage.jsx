import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import ArticleCard from '../components/ArticleCard.jsx'
import LoadingState from '../components/LoadingState.jsx'
import { getCollection } from '../lib/api.js'

const batchSize = 10

const collectionCopy = {
  events: {
    eyebrow: 'Chronological records',
    title: 'Events',
    description: 'Important events in medieval Europe, ordered from 476 through 1453.'
  },
  locations: {
    eyebrow: 'Places',
    title: 'Locations',
    description: 'Medieval kingdoms, cities, and towns that shaped the map of Europe.'
  },
  people: {
    eyebrow: 'People',
    title: 'People',
    description: 'Kings, queens, commanders, scholars, and rulers connected to the medieval European world.'
  },
  artifacts: {
    eyebrow: 'Objects',
    title: 'Artifacts',
    description: 'Relics, manuscripts, weapons, documents, and material culture from the medieval period.'
  }
}

export default function CollectionPage({ collection }) {
  const [items, setItems] = useState([])
  const [status, setStatus] = useState('loading')
  const [visibleCount, setVisibleCount] = useState(batchSize)
  const [isLoadingMore, setIsLoadingMore] = useState(false)
  const [searchParams, setSearchParams] = useSearchParams()
  const copy = useMemo(() => collectionCopy[collection], [collection])
  const archiveState = useMemo(() => readArchiveState(searchParams, collection), [collection, searchParams])
  const filterConfigs = useMemo(() => getFilterConfigs(items, collection), [collection, items])
  const sortOptions = useMemo(() => getSortOptions(collection), [collection])
  const filteredItems = useMemo(
    () => filterItems(items, collection, archiveState, filterConfigs),
    [archiveState, collection, filterConfigs, items]
  )
  const sortedItems = useMemo(
    () => sortItems(filteredItems, collection, archiveState.sort),
    [archiveState.sort, collection, filteredItems]
  )
  const visibleItems = useMemo(() => sortedItems.slice(0, visibleCount), [sortedItems, visibleCount])
  const hasMore = visibleItems.length < sortedItems.length

  useEffect(() => {
    setStatus('loading')
    getCollection(collection)
      .then((data) => {
        setItems(data)
        setStatus('ready')
      })
      .catch(() => setStatus('error'))
  }, [collection])

  useEffect(() => {
    setVisibleCount(batchSize)
  }, [archiveState.search, archiveState.sort, archiveState.filters, collection])

  function updateQuery(updates) {
    setSearchParams((currentParams) => {
      const nextParams = new URLSearchParams(currentParams)

      for (const [key, value] of Object.entries(updates)) {
        if (!value) {
          nextParams.delete(key)
        } else {
          nextParams.set(key, value)
        }
      }

      return nextParams
    })
  }

  function loadMore() {
    setIsLoadingMore(true)
    setVisibleCount((count) => Math.min(count + batchSize, sortedItems.length))
    window.setTimeout(() => setIsLoadingMore(false), 180)
  }

  return (
    <section className="content-section page-section">
      <div className="section-heading wide">
        <p className="eyebrow">{copy.eyebrow}</p>
        <h1>{copy.title}</h1>
        <p>{copy.description}</p>
      </div>

      {status === 'loading' && <LoadingState label={`Loading ${copy.title.toLowerCase()}`} />}
      {status === 'error' && (
        <div className="empty-state compact">
          <h2>Could not load {copy.title.toLowerCase()}</h2>
          <p>Check that the API server is running.</p>
        </div>
      )}
      {status === 'ready' && (
        <>
          <div className="archive-controls" role="search" aria-label={`${copy.title} archive controls`}>
            <label className="archive-search">
              <span>Search {copy.title}</span>
              <input
                type="search"
                value={archiveState.search}
                onChange={(event) => updateQuery({ search: event.target.value.trimStart() })}
                placeholder={`Search ${copy.title.toLowerCase()}`}
              />
            </label>

            <div className="archive-filter-row">
              {filterConfigs.map((filter) => (
                <label className="archive-select" key={filter.key}>
                  <span>{filter.label}</span>
                  <select
                    value={archiveState.filters[filter.key] ?? ''}
                    onChange={(event) => updateQuery({ [filter.key]: event.target.value })}
                  >
                    <option value="">All</option>
                    {filter.options.map((option) => (
                      <option value={option.value} key={option.value}>{option.label}</option>
                    ))}
                  </select>
                </label>
              ))}

              <label className="archive-select">
                <span>Sort by</span>
                <select value={archiveState.sort} onChange={(event) => updateQuery({ sort: event.target.value })}>
                  {sortOptions.map((option) => (
                    <option value={option.value} key={option.value}>{option.label}</option>
                  ))}
                </select>
              </label>
            </div>
          </div>

          <div className="archive-count" aria-live="polite">
            Showing {visibleItems.length} of {sortedItems.length} {copy.title.toLowerCase()}
          </div>

          {sortedItems.length > 0 ? (
            <>
              <div className="list-grid">
                {visibleItems.map((item) => (
                  <ArticleCard article={item} collection={collection} key={item.id} />
                ))}
              </div>
              <div className="load-more-region">
                {hasMore ? (
                  <button className="button secondary load-more-button" type="button" onClick={loadMore} disabled={isLoadingMore}>
                    {isLoadingMore ? 'Loading more' : `Load more ${copy.title.toLowerCase()}`}
                  </button>
                ) : (
                  <p>All results loaded.</p>
                )}
              </div>
            </>
          ) : (
            <div className="empty-state compact">
              <h2>No results found</h2>
              <p>Try a different search, filter, or sort option.</p>
            </div>
          )}
        </>
      )}
    </section>
  )
}

function readArchiveState(searchParams, collection) {
  const search = searchParams.get('search') ?? ''
  const sort = searchParams.get('sort') ?? defaultSort(collection)
  const filters = {}

  for (const [key, value] of searchParams.entries()) {
    if (!['search', 'sort'].includes(key)) {
      filters[key] = value
    }
  }

  return { filters, search, sort }
}

function defaultSort(collection) {
  return collection === 'events' ? 'date-asc' : 'alpha'
}

function filterItems(items, collection, archiveState, filterConfigs) {
  const search = archiveState.search.trim().toLowerCase()

  return items.filter((item) => {
    if (search && !searchableText(item, collection).includes(search)) {
      return false
    }

    return filterConfigs.every((filter) => {
      const selected = archiveState.filters[filter.key]

      if (!selected) {
        return true
      }

      return filter.getValue(item) === selected
    })
  })
}

function sortItems(items, collection, sort) {
  const sorted = [...items]

  if (sort === 'date-asc') {
    return sorted.sort((a, b) => dateValue(a) - dateValue(b) || a.name.localeCompare(b.name))
  }

  if (sort === 'date-desc') {
    return sorted.sort((a, b) => dateValue(b, true) - dateValue(a, true) || a.name.localeCompare(b.name))
  }

  if (sort === 'type') {
    return sorted.sort((a, b) => typeLabel(a, collection).localeCompare(typeLabel(b, collection)) || a.name.localeCompare(b.name))
  }

  return sorted.sort((a, b) => a.name.localeCompare(b.name))
}

function getSortOptions(collection) {
  const dateLabel = collection === 'people' ? 'Born, oldest first' : 'Chronological'

  return [
    { value: 'alpha', label: 'Alphabetical' },
    { value: 'date-asc', label: dateLabel },
    { value: 'date-desc', label: collection === 'people' ? 'Born, newest first' : 'Newest first' },
    { value: 'type', label: 'Type' }
  ]
}

function getFilterConfigs(items, collection) {
  const configs = []

  if (items.some((item) => dateValue(item) !== Number.POSITIVE_INFINITY)) {
    configs.push({
      key: 'century',
      label: 'Century',
      getValue: (item) => centuryValue(dateValue(item)),
      options: uniqueOptions(items.map((item) => centuryValue(dateValue(item))).filter(Boolean))
    })
  }

  if (collection === 'events') {
    configs.push({
      key: 'type',
      label: 'Event type',
      getValue: (item) => item.eventType,
      options: uniqueOptions(items.map((item) => item.eventType).filter(Boolean))
    })
  }

  if (collection === 'locations') {
    configs.push({
      key: 'type',
      label: 'Location type',
      getValue: (item) => item.locationType,
      options: uniqueOptions(items.map((item) => item.locationType).filter(Boolean))
    })

    configs.push({
      key: 'realm',
      label: 'Realm',
      getValue: (item) => item.kingdom,
      options: uniqueOptions(items.map((item) => item.kingdom).filter(Boolean))
    })
  }

  if (collection === 'people') {
    configs.push({
      key: 'culture',
      label: 'Culture',
      getValue: (item) => item.quickFacts?.culture,
      options: uniqueOptions(items.map((item) => item.quickFacts?.culture).filter(Boolean))
    })

    configs.push({
      key: 'realm',
      label: 'Realm',
      getValue: (item) => item.quickFacts?.realm,
      options: uniqueOptions(items.map((item) => item.quickFacts?.realm).filter(Boolean))
    })
  }

  if (collection === 'artifacts') {
    configs.push({
      key: 'region',
      label: 'Region',
      getValue: (item) => item.location,
      options: uniqueOptions(items.map((item) => item.location).filter(Boolean))
    })
  }

  return configs.filter((config) => config.options.length > 0)
}

function searchableText(item, collection) {
  const values = [
    item.name,
    item.summary,
    item.details,
    item.eventType,
    item.conflict,
    item.locationType,
    item.location,
    item.kingdom,
    item.quickFacts?.realm,
    item.quickFacts?.culture,
    item.quickFacts?.knownFor,
    ...(item.aliases ?? []),
    ...(item.roles ?? []),
    ...(item.knownFor ?? []),
    ...(item.contentSections ?? []).flatMap((section) => [section.title, ...(section.paragraphs ?? [])]),
    typeLabel(item, collection),
    centuryValue(dateValue(item))
  ]

  return values.filter(Boolean).join(' ').toLowerCase()
}

function dateValue(item, descending = false) {
  const value = Number(item.year ?? item.born ?? item.birth?.date?.match(/\d+/)?.[0])

  if (Number.isFinite(value)) {
    return value
  }

  return descending ? Number.NEGATIVE_INFINITY : Number.POSITIVE_INFINITY
}

function centuryValue(year) {
  if (!Number.isFinite(year)) {
    return ''
  }

  const century = Math.ceil(year / 100)
  return `${century}`
}

function typeLabel(item, collection) {
  return item.eventType ?? item.locationType ?? item.title ?? collection
}

function uniqueOptions(values) {
  return [...new Set(values)]
    .sort((a, b) => String(a).localeCompare(String(b), undefined, { numeric: true }))
    .map((value) => ({ value: String(value), label: labelForOption(value) }))
}

function labelForOption(value) {
  const stringValue = String(value)

  if (/^\d+$/.test(stringValue)) {
    return `${stringValue}${ordinalSuffix(Number(stringValue))} century`
  }

  return stringValue
}

function ordinalSuffix(number) {
  const mod100 = number % 100

  if (mod100 >= 11 && mod100 <= 13) {
    return 'th'
  }

  return { 1: 'st', 2: 'nd', 3: 'rd' }[number % 10] ?? 'th'
}
