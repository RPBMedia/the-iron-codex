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
  const copy = useMemo(() => collectionCopy[collection], [collection])

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
        <div className="list-grid">
          {items.map((item) => (
            <ArticleCard article={item} collection={collection} key={item.id} />
          ))}
        </div>
      )}
    </section>
  )
}
