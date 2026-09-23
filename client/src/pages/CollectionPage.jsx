import { useEffect, useMemo, useRef, useState } from 'react'
import { byRelevanceThen, matchesSearch, normalizeSearch } from '../lib/collectionSearch.js'
import { useLocation, useNavigationType, useSearchParams } from 'react-router-dom'
import ArticleCard from '../components/ArticleCard.jsx'
import LoadingState from '../components/LoadingState.jsx'
import { getCollection, getCollectionText } from '../lib/api.js'
import { centuryValue, dateValue, searchableText, typeLabel } from '../lib/archiveText.js'
import { ARCHIVE_PAGE_SIZE, getRestorableSnapshot, useArchiveStateRestoration } from '../lib/archive.js'
import { COLLECTION_LABEL, pageTitle } from '../lib/pageTitles.js'
import { useDocumentTitle } from '../lib/useDocumentTitle.js'

const batchSize = ARCHIVE_PAGE_SIZE

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
    description: 'Relics, manuscripts, documents, and material culture from the medieval period.'
  },
  'weapons-armor': {
    eyebrow: 'Arms and armor',
    title: 'Weapons & Armor',
    description: 'European medieval weapons, armor, shields, helmets, and famous surviving arms.'
  },
  houses: {
    eyebrow: 'Dynasties',
    title: 'Houses',
    description: 'The ruling dynasties and noble lineages that held the crowns and lands of medieval Europe.'
  },
  orders: {
    eyebrow: 'Military religious orders',
    title: 'Military Orders',
    description: 'The warrior-monk brotherhoods — Templars, Hospitallers, Teutonic Knights, and their kin — that fought the Crusades and the Reconquista.'
  },
  civilizations: {
    eyebrow: 'Peoples and cultures',
    title: 'Civilizations',
    description: 'The peoples, cultures and identities of the medieval world — Goths, Norse, Byzantines, Magyars and their neighbours. A people is not the same thing as the state it built, and these pages describe the people.'
  }
}

export default function CollectionPage({ collection }) {
  const location = useLocation()
  const navigationType = useNavigationType()
  const [items, setItems] = useState([])
  const [status, setStatus] = useState('loading')
  // Full article text for the search box, fetched on the first search rather
  // than with the page: the cards alone are a tenth of the size.
  const [textMap, setTextMap] = useState(null)
  // When returning to this archive (browser back/forward), restore the previously
  // loaded item count so the DOM is tall enough before scroll is restored.
  const [visibleCount, setVisibleCount] = useState(
    () => getRestorableSnapshot(location, navigationType)?.visibleCount ?? batchSize
  )
  const [isLoadingMore, setIsLoadingMore] = useState(false)
  const [searchParams, setSearchParams] = useSearchParams()

  // Persist the loaded count (so the DOM is tall enough on return) and restore the
  // clicked item into view once the list is ready.
  useArchiveStateRestoration({
    ready: status === 'ready',
    snapshot: { visibleCount }
  })
  const copy = useMemo(() => collectionCopy[collection], [collection])
  // COLLECTION_LABEL, not copy.title: the prerendered /orders page is titled
  // "Orders", and the tab must say the same thing before and after navigation.
  useDocumentTitle(pageTitle(COLLECTION_LABEL[collection] ?? copy.title))
  const archiveState = useMemo(() => readArchiveState(searchParams, collection), [collection, searchParams])
  const filterConfigs = useMemo(() => getFilterConfigs(items, collection), [collection, items])
  const sortOptions = useMemo(() => getSortOptions(collection), [collection])
  const searching = archiveState.search.trim().length > 0
  const textPending = searching && textMap === null
  const filteredItems = useMemo(
    () => filterItems(items, collection, archiveState, filterConfigs, textMap),
    [archiveState, collection, filterConfigs, items, textMap]
  )
  const sortedItems = useMemo(
    () => sortItems(filteredItems, collection, archiveState.sort, archiveState.search),
    [archiveState.search, archiveState.sort, collection, filteredItems]
  )
  const visibleItems = useMemo(() => sortedItems.slice(0, visibleCount), [sortedItems, visibleCount])
  const hasMore = visibleItems.length < sortedItems.length
  // Signature of the active query. Paging resets only when this actually changes,
  // not on mount — so a restored count survives, and StrictMode's double-invoke is safe.
  const filterSignature = `${collection}|${archiveState.search}|${archiveState.sort}|${JSON.stringify(archiveState.filters)}`
  const previousSignature = useRef(filterSignature)

  useEffect(() => {
    setStatus('loading')
    setTextMap(null)
    getCollection(collection)
      .then((data) => {
        setItems(data)
        setStatus('ready')
      })
      .catch(() => setStatus('error'))
  }, [collection])

  useEffect(() => {
    if (!searching || textMap !== null) return
    let cancelled = false
    getCollectionText(collection)
      .then((map) => { if (!cancelled) setTextMap(map) })
      // Without the text the box still matches names, lead text and aliases.
      .catch(() => { if (!cancelled) setTextMap({}) })
    return () => { cancelled = true }
  }, [collection, searching, textMap])

  useEffect(() => {
    if (previousSignature.current === filterSignature) return
    previousSignature.current = filterSignature
    setVisibleCount(batchSize)
  }, [filterSignature])

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

          {!textPending && (
            <div className="archive-count" aria-live="polite">
              Showing {visibleItems.length} of {sortedItems.length} {copy.title.toLowerCase()}
            </div>
          )}

          {textPending ? (
            <LoadingState label={`Searching ${copy.title.toLowerCase()}`} />
          ) : sortedItems.length > 0 ? (
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

// Folded searchable text per article. The build pre-folds the full text into
// `textMap`; a card-only fold (names, lead text, aliases) covers a failed fetch.
// Cached so it is not refolded on every keystroke.
const foldedTextCache = new WeakMap()

function foldedSearchableText(item, collection, textMap) {
  const folded = textMap?.[item.id]
  if (folded !== undefined) return folded
  if (!foldedTextCache.has(item)) foldedTextCache.set(item, normalizeSearch(searchableText(item, collection)))
  return foldedTextCache.get(item)
}

function filterItems(items, collection, archiveState, filterConfigs, textMap) {
  const search = archiveState.search.trim()

  return items.filter((item) => {
    if (search && !matchesSearch(foldedSearchableText(item, collection, textMap), search)) {
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

// With a search, articles that match by name or alias come first (lib/collectionSearch.js);
// the chosen sort orders articles that match equally well.
function sortItems(items, collection, sort, search = '') {
  const sorted = [...items]
  let compare = (a, b) => a.name.localeCompare(b.name)

  if (sort === 'date-asc') {
    compare = (a, b) => dateValue(a) - dateValue(b) || a.name.localeCompare(b.name)
  } else if (sort === 'date-desc') {
    compare = (a, b) => dateValue(b, true) - dateValue(a, true) || a.name.localeCompare(b.name)
  } else if (sort === 'type') {
    compare = (a, b) => typeLabel(a, collection).localeCompare(typeLabel(b, collection)) || a.name.localeCompare(b.name)
  }

  return sorted.sort(byRelevanceThen(search, compare))
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

  if (collection === 'weapons-armor') {
    configs.push({
      key: 'type',
      label: 'Type',
      getValue: (item) => item.weaponArmorType,
      options: uniqueOptions(items.map((item) => item.weaponArmorType).filter(Boolean))
    })

    configs.push({
      key: 'period',
      label: 'Period',
      getValue: (item) => item.period,
      options: uniqueOptions(items.map((item) => item.period).filter(Boolean))
    })

    configs.push({
      key: 'region',
      label: 'Region',
      getValue: (item) => item.region,
      options: uniqueOptions(items.map((item) => item.region).filter(Boolean))
    })
  }

  if (collection === 'houses') {
    configs.push({
      key: 'region',
      label: 'Region',
      getValue: (item) => item.region,
      options: uniqueOptions(items.map((item) => item.region).filter(Boolean))
    })
  }

  // Civilizations (QUEUE 0e, Appendix C §XXXIII). An alphabetical list of a
  // hundred and fifty peoples is a wall; these three axes are how a reader
  // actually arrives — by when, by where, or by kinship of culture.
  //
  // `culturalFamily` is deliberately coarse and carries "mixed / developing
  // identity" as a real value, because forcing contested populations into tidy
  // linguistic boxes is the exact failure mode the spec warns against.
  if (collection === 'civilizations') {
    configs.push({
      key: 'period',
      label: 'Period',
      getValue: (item) => item.period,
      options: uniqueOptions(items.map((item) => item.period).filter(Boolean))
    })

    configs.push({
      key: 'region',
      label: 'Region',
      getValue: (item) => item.region,
      options: uniqueOptions(items.map((item) => item.region).filter(Boolean))
    })

    configs.push({
      key: 'family',
      label: 'Cultural family',
      getValue: (item) => item.culturalFamily,
      options: uniqueOptions(items.map((item) => item.culturalFamily).filter(Boolean))
    })
  }

  return configs.filter((config) => config.options.length > 0)
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
