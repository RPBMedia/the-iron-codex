import { useEffect, useState } from 'react'
import { Link, useNavigate, useLocation, useParams } from 'react-router-dom'
import FavoriteButton from '../components/FavoriteButton.jsx'
import LoadingState from '../components/LoadingState.jsx'
import { getArticle } from '../lib/api.js'
import { ambiguousEntityAliases, entityLinks } from '../lib/entityLinks.js'
import { reportArticleImageFailure } from '../lib/images.js'

const collectionLabels = {
  events: 'Events',
  locations: 'Locations',
  people: 'People',
  artifacts: 'Artifacts',
  'weapons-armor': 'Weapons & Armor'
}

export default function DetailPage() {
  const { collection, id } = useParams()
  const navigate = useNavigate()
  const routerLocation = useLocation()
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

  const articleWithIdentity = {
    ...article,
    articleId: article.id,
    articleType: collection === 'characters' ? 'people' : collection,
    collection: collection === 'characters' ? 'people' : collection
  }

  return (
    <article className="detail-page">
      <section className="detail-hero">
        <ImageWithCaption article={article} />
        <div className="detail-body">
          <BackToArchiveLink collection={collection} routerLocation={routerLocation} navigate={navigate} />
          <p className="eyebrow">{articleTypeLabel(article)}</p>
          <h1>{article.name}</h1>
          {article.type === 'character' && <PersonSubtitle article={article} />}
          <FavoriteAction article={articleWithIdentity} />
          {article.type === 'character' && <PersonHero article={article} />}
          {article.type === 'location' && <LocationHero article={article} />}
          {article.type === 'event' && <EventHero article={article} />}
          {(article.type === 'artifact' || article.type === 'weaponArmor') && <StandardHero article={article} />}
        </div>
      </section>

      <section className="detail-content">
        <div className="detail-content-inner">
          {article.type === 'character' && <PersonContent article={article} />}
          {article.type === 'location' && <LocationContent article={article} />}
          {article.type === 'event' && <EventContent article={article} />}
          {(article.type === 'artifact' || article.type === 'weaponArmor') && <StandardContent article={article} />}
        </div>
      </section>
    </article>
  )
}

function BackToArchiveLink({ collection, routerLocation, navigate }) {
  const label = collectionLabels[collection] ?? 'archive'
  const from = routerLocation.state?.from
  // If we arrived here from this collection's archive list, go back through
  // history so the list restores its scroll position and loaded item count.
  const cameFromArchive = typeof from === 'string' && from.startsWith(`/${collection}`)

  if (cameFromArchive) {
    return (
      <button type="button" className="back-link back-link-button" onClick={() => navigate(-1)}>
        Back to {label}
      </button>
    )
  }

  return (
    <Link className="back-link" to={`/${collection}`}>
      Back to {label}
    </Link>
  )
}

function ImageWithCaption({ article }) {
  const [failed, setFailed] = useState(false)

  return (
    <figure className={`detail-media detail-media-${article.type}`}>
      {failed || !article.image ? (
        <div className="detail-image-error" role="img" aria-label={`Image unavailable for ${article.name}`}>
          <span>Image unavailable</span>
        </div>
      ) : (
        <img
          src={article.image}
          alt={article.name}
          onError={(event) => {
            reportArticleImageFailure(article, 'image', event.currentTarget.currentSrc || event.currentTarget.src)
            setFailed(true)
          }}
        />
      )}
      {article.imageInfo && (
        <figcaption>
          <strong>{article.imageInfo.caption}</strong>
          {article.imageInfo.creator && <span>Creator: {article.imageInfo.creator}</span>}
          {article.imageInfo.date && <span>Date: {article.imageInfo.date}</span>}
          {article.imageInfo.source && (
            article.imageInfo.sourceUrl ? (
              <a href={article.imageInfo.sourceUrl} target="_blank" rel="noopener noreferrer">Source: {article.imageInfo.source}</a>
            ) : (
              <span>Source: {article.imageInfo.source}</span>
            )
          )}
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

  if (article.type === 'weaponArmor') {
    return article.weaponArmorType ?? 'Weapons & Armor'
  }

  return article.type
}

function StandardHero({ article }) {
  if (article.type === 'weaponArmor') {
    const facts = [
      { label: 'Category', value: article.weaponArmorType },
      { label: 'Period', value: article.period },
      { label: 'Region', value: article.region },
      { label: 'Material', value: article.material },
      { label: 'Role', value: article.battlefieldRole }
    ].filter((fact) => fact.value)

    return (
      <dl className="fact-strip rich-facts">
        {facts.map((fact) => (
          <div key={fact.label}>
            <dt>{fact.label}</dt>
            <dd>{fact.value}</dd>
          </div>
        ))}
      </dl>
    )
  }

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
  const sections = article.contentSections?.length
    ? article.contentSections
    : [{ title: 'Overview', paragraphs: [article.summary, article.details].filter(Boolean) }]

  return (
    <>
      {sections.map((section, index) => (
        <ArticleSection
          key={section.title}
          className={index === 0 ? 'overview-section' : ''}
          title={section.title}
          paragraphs={section.paragraphs}
          article={article}
        />
      ))}
      <SourcesList sources={article.sources} />
      <RelatedEntries groups={article.relatedEntries} />
    </>
  )
}

function EventHero({ article }) {
  const participants = normalizedParticipants(article)
  const hasEventIntel = participants.length > 0 || article.outcome

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
        {article.conflict && (
          <div>
            <dt>Conflict</dt>
            <dd>{renderLinkedText(article.conflict, article)}</dd>
          </div>
        )}
      </dl>

      {hasEventIntel && (
        <div className="event-intel">
          <InfoBlock title="Factions">
            <div className="event-side-grid">
              {participants.map((participant) => (
                <section className="event-side-card" key={participant.side}>
                  <h3>{participant.side}</h3>
                  <div className="entity-chip-list">
                    {participant.factions.map((faction) => (
                      <EntryLink entry={faction} key={`${faction.type}-${faction.slug}-${faction.name}`}>
                        {faction.name ?? faction.title}
                      </EntryLink>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </InfoBlock>
          <InfoBlock title="Leaders">
            <div className="event-side-grid">
              {participants.map((participant) => (
                <section className="event-leader-group" key={`${participant.side}-leaders`}>
                  <h3>{participant.side}</h3>
                  {participant.leaders?.length ? (
                    <ul className="leader-list">
                      {participant.leaders.map((leader) => (
                        <li key={`${participant.side}-${leader.slug ?? leader.name}`}>
                          <EntryLink entry={leader}>{leader.name ?? leader.title}</EntryLink>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="event-uncertain-note">No single named commander is securely represented.</p>
                  )}
                </section>
              ))}
            </div>
          </InfoBlock>
          {article.outcome && (
            <InfoBlock title="Outcome">
              <p>{renderLinkedText(article.outcome, article)}</p>
              {article.outcomeDetail && <p>{renderLinkedText(article.outcomeDetail, article)}</p>}
            </InfoBlock>
          )}
          <BattleContinuity article={article} />
        </div>
      )}
    </div>
  )
}

const MILITARY_EVENT_TYPES = ['Battle', 'Siege']

function BattleContinuity({ article }) {
  const continuity = article.battleContinuity

  if (!MILITARY_EVENT_TYPES.includes(article.eventType) || !continuity?.target) return null

  const { target } = continuity

  return (
    <section className="info-block battle-continuity">
      <h2>{continuity.label}</h2>
      <Link className="battle-continuity-card" to={`/events/${target.id}`}>
        {target.image && (
          <span className="battle-continuity-thumb" aria-hidden="true">
            <img src={target.image} alt="" loading="lazy" />
          </span>
        )}
        <span className="battle-continuity-body">
          <span className="battle-continuity-title">
            {target.name}
            {target.year && <span className="battle-continuity-year">{target.year}</span>}
          </span>
          <span className="battle-continuity-meta">
            {target.eventType}
            {target.conflict ? ` · ${target.conflict}` : ''}
          </span>
          <span className="battle-continuity-reason">{continuity.reason}</span>
        </span>
        <span className="battle-continuity-arrow" aria-hidden="true">→</span>
      </Link>
    </section>
  )
}

function normalizedParticipants(article) {
  if (article.participants?.length) {
    return article.participants.map((participant) => ({
      side: participant.side ?? participant.name,
      factions: (participant.factions ?? []).map(normalizedEntry),
      leaders: (participant.leaders ?? []).map(normalizedEntry)
    }))
  }

  const factions = article.factions ?? []
  const leaders = article.leaders ?? []

  return factions.map((faction) => ({
    side: typeof faction === 'string' ? faction : faction.name,
    factions: [normalizedEntry(faction)],
    leaders: leaders
      .filter((leader) => leader.faction === (typeof faction === 'string' ? faction : faction.name))
      .map(normalizedEntry)
  }))
}

function normalizedEntry(entry) {
  if (typeof entry === 'string') {
    return { name: entry, title: entry, type: 'location' }
  }

  return {
    ...entry,
    name: entry.name ?? entry.title,
    title: entry.title ?? entry.name,
    type: entry.type ?? (entry.personId ? 'person' : 'location'),
    slug: entry.slug ?? entry.personId ?? entry.locationId
  }
}

function EventContent({ article }) {
  const isBattle = article.eventType === 'Battle'
  const sections = article.contentSections?.length
    ? article.contentSections
    : [
        { title: 'Background', paragraphs: article.background },
        isBattle ? { title: 'The battle', paragraphs: [article.battle] } : null,
        { title: 'Aftermath', paragraphs: [article.aftermath ?? article.details] }
      ].filter(Boolean)

  return (
    <>
      <p className="standfirst">{renderLinkedText(article.summary, article)}</p>

      {sections.map((section) => (
        <ArticleSection key={section.title} title={section.title} paragraphs={section.paragraphs} article={article} />
      ))}
      <SourcesList sources={article.sources} />
      <RelatedEntries groups={article.relatedEntries} />
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
  const sections = article.contentSections?.length
    ? article.contentSections
    : [{ title: 'Overview', paragraphs: article.overview }]

  return (
    <>
      {sections.map((section, index) => (
        <ArticleSection
          key={section.title}
          className={index === 0 ? 'overview-section' : ''}
          title={section.title}
          paragraphs={section.paragraphs}
          article={article}
        />
      ))}
      <section className="bio-section">
        <h2>Known for</h2>
        <ul className="feat-list">
          {(article.knownFor ?? []).map((fact) => (
            <li key={fact}>{fact}</li>
          ))}
        </ul>
      </section>
      <SourcesList sources={article.sources} />
      <RelatedEntries groups={article.relatedEntries} />
    </>
  )
}

function PersonHero({ article }) {
  return (
    <div className="person-profile">
      <PersonQuickFacts article={article} />
      <RulerSuccession article={article} />
    </div>
  )
}

function RulerSuccession({ article }) {
  const succession = article.succession

  if (!article.isRuler || !succession) return null

  return (
    <div className="succession-block">
      <dl className="fact-strip succession-strip">
        <SuccessionCard label="Predecessor" entry={succession.predecessor} />
        <SuccessionCard label="Successor" entry={succession.successor} />
      </dl>
      {succession.note && <p className="succession-office-note">{succession.note}</p>}
    </div>
  )
}

function SuccessionCard({ label, entry }) {
  if (!entry) return null

  return (
    <div className="succession-card">
      <dt>{label}</dt>
      <dd>
        {entry.personSlug ? (
          <Link className="succession-link" to={`/people/${entry.personSlug}`}>{entry.displayName}</Link>
        ) : (
          <span className="succession-name">{entry.displayName}</span>
        )}
        {entry.note && <small className="succession-note">{entry.note}</small>}
      </dd>
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
            article={article}
          />
        )}
        {articleSections.map((section) => (
          <ArticleSection key={section.title} title={section.title} paragraphs={section.paragraphs} article={article} />
        ))}
        <KeyAchievements achievements={article.keyAchievements ?? achievementFallback(article)} article={article} />
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

function FavoriteAction({ article }) {
  return (
    <div className="article-actions" aria-label="Article actions">
      <FavoriteButton article={article} variant="detail" />
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

function ArticleSection({ title, paragraphs, className = '', article }) {
  const sectionImages = sectionImagesFor(article, title)

  return (
    <section className={`bio-section ${className}`}>
      <h2>{title}</h2>
      {(paragraphs ?? []).filter(Boolean).map((paragraph, index) => (
        <FragmentWithImages
          imageInsertIndex={index}
          images={sectionImages}
          key={paragraph}
          paragraph={paragraph}
          article={article}
        />
      ))}
      {!(paragraphs ?? []).filter(Boolean).length && sectionImages.map((image) => (
        <SectionImage image={image} key={`${image.src}-${image.caption}`} />
      ))}
    </section>
  )
}

function FragmentWithImages({ article, imageInsertIndex, images, paragraph }) {
  const shouldInsertImages = imageInsertIndex === 0 && images.length > 0

  return (
    <>
      <p>{renderLinkedText(paragraph, article)}</p>
      {shouldInsertImages && images.map((image) => (
        <SectionImage image={image} key={`${image.src}-${image.caption}`} />
      ))}
    </>
  )
}

function sectionImagesFor(article, title) {
  if (!article?.sectionImages?.length || !title) return []

  return article.sectionImages.filter((image) => normalizedSectionTitle(image.section) === normalizedSectionTitle(title))
}

function normalizedSectionTitle(value) {
  return String(value ?? '')
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

function SectionImage({ image }) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    if (import.meta.env.DEV) {
      console.warn(`Section image failed to load: ${image?.src}`)
    }

    return (
      <figure className="section-figure section-figure-unavailable">
        <figcaption>
          <strong>{image.caption}</strong>
          {image.source && (
            image.sourceUrl ? (
              <a href={image.sourceUrl} target="_blank" rel="noopener noreferrer">Source: {image.source}</a>
            ) : (
              <span>Source: {image.source}</span>
            )
          )}
          <em>Image temporarily unavailable.</em>
        </figcaption>
      </figure>
    )
  }

  return (
    <figure className="section-figure">
      <img
        src={image.src}
        alt={image.alt ?? image.caption}
        loading="lazy"
        onError={() => setFailed(true)}
      />
      <figcaption>
        <strong>{image.caption}</strong>
        {image.creator && <span>Creator: {image.creator}</span>}
        {image.date && <span>Date: {image.date}</span>}
        {image.source && (
          image.sourceUrl ? (
            <a href={image.sourceUrl} target="_blank" rel="noopener noreferrer">Source: {image.source}</a>
          ) : (
            <span>Source: {image.source}</span>
          )
        )}
        {image.note && <em>{image.note}</em>}
      </figcaption>
    </figure>
  )
}

function KeyAchievements({ achievements, article }) {
  if (!achievements?.length) return null

  return (
    <section className="bio-section key-achievements">
      <h2>Key achievements</h2>
      <div className="achievement-list">
        {achievements.map((achievement) => (
          <article className="achievement-item" key={achievement.title}>
            <h3>{achievement.title}</h3>
            {achievement.description && <p>{renderLinkedText(achievement.description, article)}</p>}
            <InlineLinks links={achievement.links} />
          </article>
        ))}
      </div>
    </section>
  )
}

function Timeline({ items }) {
  if (!items?.length) return null

  const normalizedItems = items.map((item) => {
    const description = typeof item.description === 'string' ? item.description.trim() : ''

    if (!description && import.meta.env.DEV) {
      console.warn('Timeline entry is missing a description:', item)
    }

    return { ...item, description }
  })

  return (
    <section className="rail-card timeline-card">
      <h2>Timeline</h2>
      <ol>
        {normalizedItems.map((item) => (
          <li key={`${item.date}-${item.title}`}>
            <time>{item.date}</time>
            <strong>{item.title}</strong>
            {item.description && <p>{renderLinkedText(item.description)}</p>}
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

function SourcesList({ sources }) {
  if (!sources?.length) return null

  return (
    <section className="bio-section sources-list">
      <h2>Sources / further reading</h2>
      <ul>
        {sources.map((source) => (
          <li key={`${source.title}-${source.author ?? source.authorOrInstitution ?? ''}-${source.url ?? ''}`}>
            <SourceTitle source={source} />
            <SourceMeta source={source} />
          </li>
        ))}
      </ul>
    </section>
  )
}

function SourceTitle({ source }) {
  if (!source.url) {
    return <strong>{source.title}</strong>
  }

  if (source.url.startsWith('/')) {
    return <Link className="source-link" to={source.url}>{source.title}</Link>
  }

  return (
    <a className="source-link" href={source.url} target="_blank" rel="noopener noreferrer">
      {source.title}
    </a>
  )
}

function SourceMeta({ source }) {
  const institution = source.authorOrInstitution ?? source.author
  const details = [institution, source.type, source.accessed && `accessed ${source.accessed}`].filter(Boolean)

  if (!details.length && !source.note) return null

  return (
    <>
      {details.length > 0 && <span>{details.join(' · ')}</span>}
      {source.note && <em>{source.note}</em>}
    </>
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

function renderLinkedText(text, article) {
  if (!text || typeof text !== 'string') return text

  const matches = findEntityMatches(text, article)

  if (!matches.length) {
    return text
  }

  const nodes = []
  let cursor = 0

  matches.forEach((match) => {
    if (match.index > cursor) {
      nodes.push(text.slice(cursor, match.index))
    }

    if (match.entry) {
      nodes.push(
        <Link className="article-link" to={routeForEntry(match.entry)} key={`${match.index}-${match.term}`}>
          {text.slice(match.index, match.index + match.term.length)}
        </Link>
      )
    } else {
      nodes.push(text.slice(match.index, match.index + match.term.length))
    }

    cursor = match.index + match.term.length
  })

  if (cursor < text.length) {
    nodes.push(text.slice(cursor))
  }

  return nodes
}

function findEntityMatches(text, article) {
  const currentEntry = currentEntryKey(article)
  const overrides = findLinkOverrideMatches(text, article, currentEntry)
  const occupied = overrides.map((match) => [match.index, match.index + match.term.length])
  const candidates = entityLinks
    .flatMap((entry) => [entry.label, ...(entry.aliases ?? [])].map((term) => ({ entry, term })))
    .filter(({ entry }) => `${entry.type}-${entry.slug}` !== currentEntry)
    .filter(({ term }) => term && text.toLowerCase().includes(term.toLowerCase()))
    .sort((a, b) => b.term.length - a.term.length)

  const usedEntries = new Set()
  const matches = overrides.filter((match) => match.entry)

  matches.forEach((match) => usedEntries.add(`${match.entry.type}-${match.entry.slug}`))

  candidates.forEach(({ entry: originalEntry, term }) => {
    let entry = originalEntry
    const resolvedEntry = resolveAmbiguousAlias(term, text, article, currentEntry)

    if (resolvedEntry === null) return
    if (resolvedEntry) entry = resolvedEntry

    const entryKey = `${entry.type}-${entry.slug}`
    if (entryKey === currentEntry || usedEntries.has(entryKey)) return

    const pattern = new RegExp(`(^|[^A-Za-z0-9])(${escapeRegExp(term)})(?=$|[^A-Za-z0-9])`, 'i')
    const match = text.match(pattern)

    if (!match || match.index === undefined) return

    const index = match.index + match[1].length
    const end = index + match[2].length
    const overlaps = occupied.some(([start, existingEnd]) => index < existingEnd && end > start)

    if (overlaps) return

    occupied.push([index, end])
    usedEntries.add(entryKey)
    matches.push({ entry, term: match[2], index })
  })

  return matches.sort((a, b) => a.index - b.index)
}

function findLinkOverrideMatches(text, article, currentEntry) {
  const overrides = (article?.linkOverrides ?? [])
    .filter((override) => override.term && text.toLowerCase().includes(override.term.toLowerCase()))
    .sort((a, b) => b.term.length - a.term.length)

  const occupied = []
  const matches = []

  overrides.forEach((override) => {
    const pattern = new RegExp(`(^|[^A-Za-z0-9])(${escapeRegExp(override.term)})(?=$|[^A-Za-z0-9])`, 'i')
    const match = text.match(pattern)

    if (!match || match.index === undefined) return

    const index = match.index + match[1].length
    const end = index + match[2].length
    const overlaps = occupied.some(([start, existingEnd]) => index < existingEnd && end > start)

    if (overlaps) return

    occupied.push([index, end])

    if (override.target && `${override.target.type}-${override.target.slug}` !== currentEntry) {
      matches.push({ entry: override.target, term: match[2], index })
      return
    }

    matches.push({ entry: null, term: match[2], index })
  })

  return matches
}

function resolveAmbiguousAlias(term, text, article, currentEntry) {
  const ambiguousAlias = ambiguousEntityAliases.find((alias) =>
    alias.terms.some((aliasTerm) => aliasTerm.toLowerCase() === term.toLowerCase())
  )

  if (!ambiguousAlias) return undefined

  const context = text.toLowerCase()
  const scoredTargets = ambiguousAlias.possibleTargets
    .map((target) => ({
      ...target,
      score: (target.contextHints ?? []).filter((hint) => context.includes(hint.toLowerCase())).length
    }))
    .sort((a, b) => b.score - a.score)

  const currentTarget = scoredTargets.find((target) => `${target.type}-${target.slug}` === currentEntry)

  if (currentTarget && currentTarget.score > 0) {
    return null
  }

  if (!scoredTargets.length || scoredTargets[0].score === 0) {
    return null
  }

  if (scoredTargets[1] && scoredTargets[1].score === scoredTargets[0].score) {
    return null
  }

  return scoredTargets[0]
}

function currentEntryKey(article) {
  if (!article?.id) return ''

  return `${article.type === 'character' ? 'person' : article.type}-${article.id}`
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
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
      {death.event && (
        <>
          {' · '}
          <EntryLink entry={death.event}>{death.event.name ?? death.event.title}</EntryLink>
        </>
      )}
      {death.place && (
        <>
          {' · '}
          <LinkedLocationFact place={death.place} />
        </>
      )}
      {death.circumstance && <small>{renderLinkedText(death.circumstance, article)}</small>}
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
    polity: 'locations',
    artifact: 'artifacts',
    document: 'artifacts',
    weaponArmor: 'weapons-armor',
    weapon: 'weapons-armor',
    armor: 'weapons-armor',
    shield: 'weapons-armor',
    helmet: 'weapons-armor',
    famousWeapon: 'weapons-armor',
    famousArmor: 'weapons-armor'
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
  if (MILITARY_EVENT_TYPES.includes(article.eventType) && article.eventLocation?.locationId) {
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
