import { Link, useParams } from 'react-router-dom'
import { TOPICS, topicBySlug } from '../lib/topics.js'

/**
 * Topic landing pages (Track C M3).
 *
 * Data comes from a STATIC import, never from the API. That is deliberate and
 * load-bearing: the collection hubs fetched their contents at runtime and so
 * rendered empty for Googlebot, which reported them as soft 404s. A generated
 * module is in the bundle, so the first render is always the finished page —
 * there is no loading state to catch a crawler out and no request to fail.
 */

const COLLECTION_LABEL = {
  people: 'People',
  events: 'Events',
  locations: 'Locations',
  houses: 'Houses',
  orders: 'Orders',
  artifacts: 'Artifacts',
  'weapons-armor': 'Weapons & Armor'
}

// Reading order: the narrative collections first, the material ones after.
const GROUP_ORDER = ['events', 'people', 'locations', 'houses', 'orders', 'weapons-armor', 'artifacts']

export function TopicsIndex() {
  return (
    <section className="content-section page-section">
      <p className="eyebrow">Subjects</p>
      <h1>Topics</h1>
      <p>
        The archive organised by subject rather than by category — each page gathers
        everything held on one period or conflict, across people, battles, places,
        dynasties and arms.
      </p>
      <div className="list-grid">
        {TOPICS.map((topic) => (
          <Link key={topic.slug} className="topic-card" to={`/topics/${topic.slug}`}>
            <h2>{topic.heading}</h2>
            <p>{topic.blurb}</p>
            <p className="archive-count">{topic.count} articles</p>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default function TopicPage() {
  const { slug } = useParams()
  const topic = topicBySlug(slug)

  if (!topic) {
    return (
      <section className="empty-state">
        <p className="eyebrow">Unknown subject</p>
        <h1>Topic not found</h1>
        <Link className="button" to="/topics">All topics</Link>
      </section>
    )
  }

  const groups = GROUP_ORDER
    .filter((key) => topic.members[key]?.length)
    .map((key) => [key, topic.members[key]])

  return (
    <section className="content-section page-section">
      <p className="eyebrow">Subject</p>
      <h1>{topic.heading}</h1>

      {topic.intro.map((paragraph, i) => (
        <p key={i}>{paragraph}</p>
      ))}

      <p className="archive-count">{topic.count} articles in this subject</p>

      {groups.map(([key, list]) => (
        <div key={key} className="topic-group">
          <h2 className="section-heading wide">{COLLECTION_LABEL[key] ?? key}</h2>
          <ul className="topic-list">
            {list.map((item) => (
              <li key={item.id}>
                <Link to={`/${key}/${item.id}`}>{item.name}</Link>
                {item.summary && <span className="topic-list-summary">{item.summary}</span>}
              </li>
            ))}
          </ul>
        </div>
      ))}

      <div className="topic-group">
        <h2 className="section-heading wide">Other subjects</h2>
        <ul className="topic-list">
          {TOPICS.filter((t) => t.slug !== topic.slug).map((t) => (
            <li key={t.slug}>
              <Link to={`/topics/${t.slug}`}>{t.heading}</Link>
              <span className="topic-list-summary">{t.blurb}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
