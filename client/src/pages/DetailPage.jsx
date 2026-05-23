import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import LoadingState from '../components/LoadingState.jsx'
import { getArticle } from '../lib/api.js'
import { fallbackImage, shouldUseFallbackImage } from '../lib/images.js'

const collectionLabels = {
  events: 'Events',
  locations: 'Locations',
  people: 'People',
  artifacts: 'Artifacts'
}

export default function DetailPage() {
  const { collection, id } = useParams()
  const [article, setArticle] = useState(null)
  const [status, setStatus] = useState('loading')

  useEffect(() => {
    setStatus('loading')
    getArticle(collection, id)
      .then((data) => {
        setArticle(data)
        setStatus('ready')
      })
      .catch(() => setStatus('error'))
  }, [collection, id])

  if (status === 'loading') {
    return <LoadingState label="Opening article" />
  }

  if (status === 'error' || !article) {
    return (
      <section className="empty-state">
        <p className="eyebrow">Missing record</p>
        <h1>Article not found</h1>
        <Link className="button" to="/">Return home</Link>
      </section>
    )
  }

  return (
    <article className="detail-page">
      <section className="detail-hero">
        <ImageWithCaption article={article} />
        <div className="detail-body">
          <Link className="back-link" to={`/${collection}`}>
            Back to {collectionLabels[collection] ?? 'archive'}
          </Link>
          <p className="eyebrow">{articleTypeLabel(article)}</p>
          <h1>{article.name}</h1>
          {article.type === 'character' && <PersonSubtitle article={article} />}
          {article.type === 'character' && <FavoriteAction />}
          {article.type === 'character' && <PersonHero article={article} />}
          {article.type === 'location' && <LocationHero article={article} />}
          {article.type === 'event' && <EventHero article={article} />}
          {article.type === 'artifact' && <StandardHero article={article} />}
        </div>
      </section>

      <section className="detail-content">
        <div className="detail-content-inner">
          {article.type === 'character' && <PersonContent article={article} />}
          {article.type === 'location' && <LocationContent article={article} />}
          {article.type === 'event' && <EventContent article={article} />}
          {article.type === 'artifact' && <StandardContent article={article} />}
        </div>
      </section>
    </article>
  )
}

function ImageWithCaption({ article }) {
  return (
    <figure className={`detail-media detail-media-${article.type}`}>
      <img
        src={article.image}
        alt={article.name}
        onLoad={(event) => {
          if (shouldUseFallbackImage(event.currentTarget)) {
            event.currentTarget.classList.add('generated-image')
            event.currentTarget.src = fallbackImage(article)
          }
        }}
        onError={(event) => {
          event.currentTarget.classList.add('generated-image')
          event.currentTarget.src = fallbackImage(article)
        }}
      />
      {article.imageInfo && (
        <figcaption>
          <strong>{article.imageInfo.caption}</strong>
          {article.imageInfo.creator && <span>Creator: {article.imageInfo.creator}</span>}
          {article.imageInfo.date && <span>Date: {article.imageInfo.date}</span>}
          {article.imageInfo.source && <span>Source: {article.imageInfo.source}</span>}
          {article.imageInfo.note && <em>{article.imageInfo.note}</em>}
        </figcaption>
      )}
    </figure>
  )
}

function articleTypeLabel(article) {
  if (article.type === 'character') {
    return 'Historical figure'
  }

  if (article.type === 'event') {
    return article.eventType && article.eventType !== 'Other' ? article.eventType : 'Event'
  }

  if (article.type === 'location') {
    return article.locationType
  }

  return article.type
}

function StandardHero({ article }) {
  return (
    <dl className="fact-strip">
      <div>
        <dt>Year</dt>
        <dd>{article.year}</dd>
      </div>
      <div>
        <dt>Location</dt>
        <dd>{article.location}</dd>
      </div>
    </dl>
  )
}

function StandardContent({ article }) {
  return (
    <section className="bio-section">
      <h2>Overview</h2>
      <p className="standfirst">{article.summary}</p>
      <p>{article.details}</p>
    </section>
  )
}

function EventHero({ article }) {
  const isBattle = article.eventType === 'Battle'
  const isWar = article.eventType === 'War'

  return (
    <div className="event-profile">
      {article.eventType && article.eventType !== 'Other' && (
        <p className="article-subtitle">{article.eventType}</p>
      )}

      <dl className="fact-strip">
        <div>
          <dt>Year</dt>
          <dd>{article.year}</dd>
        </div>
        <div>
          <dt>Location</dt>
          <dd>{renderEventLocation(article)}</dd>
        </div>
      </dl>

      {(isBattle || isWar) && (
        <div className="event-intel">
          <InfoBlock title="Factions">
            <ul className="inline-list">
              {(article.factions ?? []).map((faction) => (
                <li key={faction}>{faction}</li>
              ))}
            </ul>
          </InfoBlock>
          <InfoBlock title="Leaders">
            <ul className="leader-list">
              {(article.leaders ?? []).map((leader) => (
                <li key={`${leader.faction}-${leader.name}`}>
                  <span>{leader.faction}</span>
                  {leader.personId ? (
                    <Link to={`/people/${leader.personId}`}>{leader.name}</Link>
                  ) : (
                    <strong>{leader.name}</strong>
                  )}
                </li>
              ))}
            </ul>
          </InfoBlock>
          <InfoBlock title="Outcome">
            <p>{article.outcome}</p>
          </InfoBlock>
        </div>
      )}
    </div>
  )
}

function EventContent({ article }) {
  const isBattle = article.eventType === 'Battle'

  return (
    <>
      <p className="standfirst">{article.summary}</p>

      <ArticleSection title="Background" paragraphs={article.background} />
      {isBattle && <ArticleSection title="Battle" paragraphs={[article.battle]} />}
      <ArticleSection title="Aftermath" paragraphs={[article.aftermath ?? article.details]} />
    </>
  )
}

function LocationHero({ article }) {
  return (
    <div className="location-profile">
      <p className="article-subtitle">
        {article.locationType === 'Kingdom' ? 'Kingdom' : `${article.locationType} in ${article.kingdom}`}
      </p>
      <dl className="fact-strip">
        <div>
          <dt>Type</dt>
          <dd>{article.locationType}</dd>
        </div>
        <div>
          <dt>{article.locationType === 'Kingdom' ? 'Established' : 'Kingdom'}</dt>
          <dd>{article.locationType === 'Kingdom' ? article.year : renderKingdom(article)}</dd>
        </div>
      </dl>
    </div>
  )
}

function LocationContent({ article }) {
  return (
    <>
      <ArticleSection title="Overview" paragraphs={article.overview} />
      <section className="bio-section">
        <h2>Known for</h2>
        <ul className="feat-list">
          {(article.knownFor ?? []).map((fact) => (
            <li key={fact}>{fact}</li>
          ))}
        </ul>
      </section>
    </>
  )
}

function PersonHero({ article }) {
  return (
    <div className="person-profile">
      <PersonQuickFacts article={article} />
    </div>
  )
}

function PersonContent({ article }) {
  const sections = article.contentSections?.length
    ? article.contentSections
    : [{ title: 'Overview', paragraphs: article.overview ?? [article.details].filter(Boolean) }]
  const [overviewSection, ...articleSections] = sections

  return (
    <div className="person-archive-grid">
      <main className="person-main-column">
        {overviewSection && (
          <ArticleSection
            className="overview-section"
            title={overviewSection.title ?? 'Overview'}
            paragraphs={overviewSection.paragraphs}
          />
        )}
        <KeyAchievements achievements={article.keyAchievements ?? achievementFallback(article)} />
        {articleSections.map((section) => (
          <ArticleSection key={section.title} title={section.title} paragraphs={section.paragraphs} />
        ))}
        <HistoricalReliabilityNote note={article.historicalReliability} />
        <SourcesList sources={article.sources} />
      </main>
      <aside className="person-side-rail">
        <Timeline items={article.timeline} />
        <RelatedEntries groups={article.relatedEntries} />
      </aside>
    </div>
  )
}

function PersonSubtitle({ article }) {
  const roles = article.roles?.length ? article.roles : [article.title].filter(Boolean)

  return (
    <div className="person-subtitle">
      {roles.length > 0 && <p>{roles.join(' · ')}</p>}
      {article.roleNote && <span>{article.roleNote}</span>}
    </div>
  )
}

function FavoriteAction() {
  return (
    <div className="article-actions" aria-label="Article actions">
      <button type="button">Save to My Archive</button>
      <span>Log in to save this article</span>
    </div>
  )
}

function PersonQuickFacts({ article }) {
  const facts = [
    { label: 'Born', value: renderBirth(article) },
    { label: 'Died', value: renderDeath(article) },
    { label: 'Resting place', value: article.restingPlace },
    { label: 'Titles', value: article.roles?.join(', ') },
    { label: 'Realm / polity', value: article.quickFacts?.realm },
    { label: 'Dynasty / house', value: article.quickFacts?.dynasty },
    { label: 'Culture', value: article.quickFacts?.culture },
    { label: 'Known for', value: article.quickFacts?.knownFor }
  ].filter((fact) => fact.value)

  return (
    <dl className="fact-strip person-facts rich-facts">
      {facts.map((fact) => (
        <div key={fact.label}>
          <dt>{fact.label}</dt>
          <dd>{fact.value}</dd>
        </div>
      ))}
    </dl>
  )
}

function InfoBlock({ title, children }) {
  return (
    <section className="info-block">
      <h2>{title}</h2>
      {children}
    </section>
  )
}

function ArticleSection({ title, paragraphs, className = '' }) {
  return (
    <section className={`bio-section ${className}`}>
      <h2>{title}</h2>
      {(paragraphs ?? []).filter(Boolean).map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </section>
  )
}

function KeyAchievements({ achievements }) {
  if (!achievements?.length) return null

  return (
    <section className="bio-section key-achievements">
      <h2>Key achievements</h2>
      <div className="achievement-list">
        {achievements.map((achievement) => (
          <article className="achievement-item" key={achievement.title}>
            <h3>{achievement.title}</h3>
            {achievement.description && <p>{achievement.description}</p>}
            <InlineLinks links={achievement.links} />
          </article>
        ))}
      </div>
    </section>
  )
}

function Timeline({ items }) {
  if (!items?.length) return null

  return (
    <section className="rail-card timeline-card">
      <h2>Timeline</h2>
      <ol>
        {items.map((item) => (
          <li key={`${item.date}-${item.title}`}>
            <time>{item.date}</time>
            <strong>{item.title}</strong>
            {item.description && <p>{item.description}</p>}
            <InlineLinks links={item.links} />
          </li>
        ))}
      </ol>
    </section>
  )
}

function RelatedEntries({ groups }) {
  const entries = Object.entries(groups ?? {}).filter(([, items]) => items?.length)
  if (!entries.length) return null

  return (
    <section className="rail-card related-card">
      <h2>Related entries</h2>
      {entries.map(([group, items]) => (
        <div className="related-group" key={group}>
          <h3>{formatGroupName(group)}</h3>
          <ul>
            {items.map((item) => (
              <li key={`${item.type}-${item.slug}-${item.title}`}>
                <EntryLink entry={item}>{item.title}</EntryLink>
                {item.label && <span>{item.label}</span>}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  )
}

function HistoricalReliabilityNote({ note }) {
  if (!note) return null

  return (
    <section className="bio-section reliability-note">
      <h2>Historical reliability</h2>
      <p>{note}</p>
    </section>
  )
}

function SourcesList({ sources }) {
  if (!sources?.length) return null

  return (
    <section className="bio-section sources-list">
      <h2>Sources / further reading</h2>
      <ul>
        {sources.map((source) => (
          <li key={`${source.title}-${source.author ?? ''}`}>
            {source.url ? (
              <a href={source.url} target="_blank" rel="noreferrer">{source.title}</a>
            ) : (
              <strong>{source.title}</strong>
            )}
            <span>{[source.author, source.type].filter(Boolean).join(' · ')}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

function InlineLinks({ links }) {
  if (!links?.length) return null

  return (
    <div className="inline-links">
      {links.map((link) => (
        <EntryLink entry={link} key={`${link.type}-${link.slug}-${link.title}`}>{link.title}</EntryLink>
      ))}
    </div>
  )
}

function EntryLink({ entry, children }) {
  const route = routeForEntry(entry)

  if (!route) {
    return <span>{children}</span>
  }

  return <Link to={route}>{children}</Link>
}

function LinkedLocationFact({ place }) {
  if (!place) return 'Unknown'

  if (!place.slug) {
    return place.name
  }

  return <Link to={`/locations/${place.slug}`}>{place.name}</Link>
}

function renderBirth(article) {
  const birth = article.birth

  if (!birth) {
    return article.born ?? 'Unknown'
  }

  return (
    <>
      {birth.date ?? 'Unknown'}
      {birth.place && (
        <>
          {' · '}
          <LinkedLocationFact place={birth.place} />
        </>
      )}
      {birth.note && <small>{birth.note}</small>}
    </>
  )
}

function renderDeath(article) {
  const death = article.death
  const fallback = formatDeath(article)

  if (!death) {
    return fallback
  }

  return (
    <>
      {death.date ?? fallback}
      {death.place && (
        <>
          {' · '}
          <LinkedLocationFact place={death.place} />
        </>
      )}
      {death.note && <small>{death.note}</small>}
    </>
  )
}

function routeForEntry(entry) {
  const routeType = {
    person: 'people',
    people: 'people',
    character: 'people',
    event: 'events',
    location: 'locations',
    place: 'locations',
    kingdom: 'locations',
    artifact: 'artifacts'
  }[entry.type]

  return routeType && entry.slug ? `/${routeType}/${entry.slug}` : ''
}

function formatGroupName(group) {
  return group
    .replace(/([A-Z])/g, ' $1')
    .replace(/s$/, 's')
    .replace(/^./, (letter) => letter.toUpperCase())
}

function achievementFallback(article) {
  return (article.greatestFeats ?? []).map((feat) => ({ title: feat, description: '' }))
}

function renderEventLocation(article) {
  if (article.eventType === 'Battle' && article.eventLocation?.locationId) {
    return <Link to={`/locations/${article.eventLocation.locationId}`}>{article.eventLocation.name}</Link>
  }

  return article.eventLocation?.name ?? article.location
}

function renderKingdom(article) {
  if (article.kingdomId) {
    return <Link to={`/locations/${article.kingdomId}`}>{article.kingdom}</Link>
  }

  return article.kingdom
}

function formatDeath(article) {
  const year = article.died ?? 'Unknown'
  const age = article.deathAge ? `, age ${article.deathAge}` : ''
  const cause = article.causeOfDeath ? `, ${article.causeOfDeath}` : ''

  return `${year}${age}${cause}`
}
