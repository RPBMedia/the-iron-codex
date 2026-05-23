import { useEffect, useMemo, useState } from 'react'
import ArticleCard from '../components/ArticleCard.jsx'
import LoadingState from '../components/LoadingState.jsx'
import { getCollection } from '../lib/api.js'

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
  const [peopleSort, setPeopleSort] = useState('name')
  const copy = useMemo(() => collectionCopy[collection], [collection])
  const visibleItems = useMemo(() => sortItems(items, collection, peopleSort), [collection, items, peopleSort])

  useEffect(() => {
    setStatus('loading')
    getCollection(collection)
      .then((data) => {
        setItems(data)
        setStatus('ready')
      })
      .catch(() => setStatus('error'))
  }, [collection])

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
          {collection === 'people' && (
            <div className="collection-tools">
              <label className="sort-control">
                <span>Sort by</span>
                <select value={peopleSort} onChange={(event) => setPeopleSort(event.target.value)}>
                  <option value="name">Name</option>
                  <option value="born-asc">Born, oldest first</option>
                  <option value="born-desc">Born, newest first</option>
                </select>
              </label>
            </div>
          )}
          <div className="list-grid">
            {visibleItems.map((item) => (
              <ArticleCard article={item} collection={collection} key={item.id} />
            ))}
          </div>
        </>
      )}
    </section>
  )
}

function sortItems(items, collection, peopleSort) {
  if (collection !== 'people') {
    return items
  }

  const sorted = [...items]

  if (peopleSort === 'born-asc') {
    return sorted.sort((a, b) => Number(a.born ?? 9999) - Number(b.born ?? 9999) || a.name.localeCompare(b.name))
  }

  if (peopleSort === 'born-desc') {
    return sorted.sort((a, b) => Number(b.born ?? -9999) - Number(a.born ?? -9999) || a.name.localeCompare(b.name))
  }

  return sorted.sort((a, b) => a.name.localeCompare(b.name))
}
