import { Fragment, useEffect, useState } from 'react'
import { SITE_NAME, articleTitle, notFoundTitle } from '../lib/pageTitles.js'
import { useDocumentTitle } from '../lib/useDocumentTitle.js'
import { Link, useNavigate, useLocation, useParams } from 'react-router-dom'
import FavoriteButton from '../components/FavoriteButton.jsx'
import LoadingState from '../components/LoadingState.jsx'
import { topicsForArticle } from '../lib/topics.js'
import ZoomableImage from '../components/ZoomableImage.jsx'
import { getArticle } from '../lib/api.js'
import { ambiguousEntityAliases, entityLinks } from '../lib/entityLinks.js'
import { reportArticleImageFailure } from '../lib/images.js'
import { locatorFor } from '../lib/locatorMaps.js'

const collectionLabels = {
  events: 'Events',
  locations: 'Locations',
  people: 'People',
  houses: 'Houses',
  artifacts: 'Artifacts',
  'weapons-armor': 'Weapons & Armor',
  orders: 'Military Orders',
  civilizations: 'Civilizations'
}

/**
 * The article the prerenderer inlined into this exact page, if any.
 *
 * Read once at module load and then discarded, because it is only ever correct
 * for the URL the browser actually landed on — after a client-side navigation to
 * a different article it would be stale, which is why `takeInlined` checks the
 * collection and id and can only ever return the payload once.
 */
const inlinedArticle = (() => {
  if (typeof document === 'undefined') return null
  const tag = document.getElementById('__ARTICLE__')
  if (!tag) return null
  try {
    return JSON.parse(tag.textContent)
  } catch {
    return null
  }
})()

let inlinedConsumed = false

function takeInlined(collection, id) {
  if (inlinedConsumed || !inlinedArticle) return null
  if (inlinedArticle.collection !== collection || inlinedArticle.id !== id) return null
  inlinedConsumed = true
  return inlinedArticle.article
}

/**
 * "Part of" — the article's link back to the subjects it belongs to.
 *
 * This is what makes the topic clusters bidirectional. A reader who arrives on
 * one battle from a search can reach the whole subject, and the link graph
 * points both ways instead of only outward from the hub.
 */
function TopicLinks({ id }) {
  const topics = topicsForArticle(id)
  if (!topics.length) return null
  return (
    <p className="article-topics">
      <span className="eyebrow">Part of</span>
      {topics.map((t) => (
        <Link key={t.slug} className="article-topic-link" to={`/topics/${t.slug}`}>{t.title}</Link>
      ))}
    </p>
  )
}

/**
 * `article` is supplied only by the render gate (`scripts/check-render.mjs`),
 * which renders each article family to markup in node and asserts its structure.
 * The browser never passes it.
 *
 * It exists because this component's data arrives through an effect, and effects
 * do not run during static rendering — so without a prop the gate would only
 * ever see `LoadingState`. Shimming a fake `document` to feed the `__ARTICLE__`
 * path would work too, but a global shim is a worse thing to depend on than one
 * optional prop that is obvious at the call site.
 */
export default function DetailPage({ article: providedArticle = null }) {
  const { collection: routeCollection, id: routeId } = useParams()
  const collection = providedArticle ? providedArticle.collection ?? routeCollection : routeCollection
  const id = providedArticle ? providedArticle.id ?? routeId : routeId
  const navigate = useNavigate()
  const routerLocation = useLocation()
  // Seeded from the prerendered payload on a first load, so the very first
  // render is the finished article rather than a spinner — no API round-trip,
  // and nothing for a crawler to miss.
  const [preloaded] = useState(() => providedArticle ?? takeInlined(collection, id))
  const [article, setArticle] = useState(preloaded)
  const [status, setStatus] = useState(preloaded ? 'ready' : 'loading')

  useEffect(() => {
    if (providedArticle) return undefined
    let cancelled = false
    const inlined = article && article.id === id ? article : takeInlined(collection, id)
    if (inlined) {
      setArticle(inlined)
      setStatus('ready')
      return
    }
    setStatus('loading')
    getArticle(collection, id)
      .then((data) => {
        if (cancelled) return
        setArticle(data)
        setStatus('ready')
      })
      .catch(() => { if (!cancelled) setStatus('error') })
    return () => { cancelled = true }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [collection, id])

  // The tab follows the article. While the next one loads it names the site,
  // not the article the reader has just left.
  useDocumentTitle(
    status === 'ready' && article ? articleTitle(article, collection) : status === 'error' ? notFoundTitle() : SITE_NAME
  )

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
        <div className="detail-media-col">
          <ImageWithCaption article={article} />
          {/* Civilizations included: a people that bore no heraldry still has an
              emblem panel, and it is often the only object they made that
              survives. The Pechenegs left an axe head from a grave and the
              Cumans their kurgan steles — both already captioned to say the
              people bore no coat of arms. Gating this on house/location alone
              would drop those images silently when the articles move. */}
          {(article.type === 'house' || article.type === 'location' || article.type === 'civilization') && <ArmsImage article={article} />}
          {article.type === 'order' && <OrderSigilImage article={article} />}
        </div>
        <div className="detail-body">
          <BackToArchiveLink collection={collection} routerLocation={routerLocation} navigate={navigate} />
          <p className="eyebrow">{articleTypeLabel(article)}</p>
          <h1>{article.name}</h1>
          {article.type === 'character' && <PersonSubtitle article={article} />}
          {/* The deck, under the title, where it reads on load (owner, 2026-09-16).
              Every type has a summary — 175 of 176 locations, all houses, orders,
              weapons and artifacts — but only events ever printed one, at the top
              of the body. It moves here rather than being copied, so nothing is
              said twice. */}
          {String(article.summary ?? '').trim() && (
            <p className="article-deck">{renderLinkedText(article.summary, article)}</p>
          )}
          <FavoriteAction article={articleWithIdentity} />
          {article.type === 'location' && <LocationHero article={article} />}
          {article.type === 'event' && <EventHero article={article} />}
          {article.type === 'house' && <HouseHero article={article} />}
          {(article.type === 'artifact' || article.type === 'weaponArmor') && <StandardHero article={article} />}
          {article.type === 'order' && <OrderHero article={article} />}
          {article.type === 'civilization' && <CivilizationHero article={article} />}
        </div>
        {/* A grid child in column 1, landing under the image, rather than nested
            inside the media column. It reads identically on desktop, but only
            siblings can be reordered, and §25 puts "On this page" AFTER the
            metadata on a phone. */}
        <ContentsRail article={article} />
        {/* Factions, leaders and outcome sit in the hero's right column beneath
            the year/location/conflict strip, level with the contents rail. That
            strip is three short cards and stopped well above the image, leaving
            black space the reader had to scroll past to reach who actually
            fought (owner report on battle-of-lechfeld). */}
        {article.type === 'event' && <EventIntel article={article} />}
        {/* Option B (owner, 2026-09-16): a person's facts are a full-width band
            beneath BOTH hero columns, not a stack inside the right one. With
            everything except the image in the right column, that column ran to
            about 810px against a 590px portrait and left a slab of dead black
            under the picture on every person page with more than four facts.
            This is the move the battle pages already got: the hero introduces,
            the band records. */}
        {article.type === 'character' && <PersonFactBand article={article} />}
      </section>

      <section className="detail-content">
        <div className="detail-content-inner">
          {article.type === 'character' && <PersonContent article={article} />}
          {article.type === 'location' && <LocationContent article={article} />}
          {article.type === 'event' && <EventContent article={article} />}
          {article.type === 'house' && <HouseContent article={article} />}
          {(article.type === 'artifact' || article.type === 'weaponArmor') && <StandardContent article={article} />}
          {article.type === 'order' && <OrderContent article={article} />}
          {article.type === 'civilization' && <CivilizationContent article={article} />}
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

/**
 * The caption block under every article image, in one place.
 *
 * It renders exactly two things: a short description of the image, and a link to
 * where the image came from. Creator, date and the provenance note stay in the
 * data — they are needed for auditing and for the image validators — but they are
 * not printed under the picture, because a five-line credit block buried the
 * image it was supposed to serve. Anything the reader needs to know about the
 * object belongs in the article.
 *
 * Every figure in this file uses this component. Do not reintroduce a local
 * figcaption: the rule only holds if there is one implementation of it.
 */
function ImageCredit({ info, children }) {
  if (!info) return null
  return (
    <figcaption>
      {info.caption && <strong>{info.caption}</strong>}
      {info.source && (
        info.sourceUrl ? (
          <a href={info.sourceUrl} target="_blank" rel="noopener noreferrer">Source: {info.source}</a>
        ) : (
          <span className="image-credit-source">Source: {info.source}</span>
        )
      )}
      {children}
    </figcaption>
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
        <ZoomableImage
          src={article.image}
          alt={article.imageInfo?.caption || article.name}
          onError={(event) => {
            reportArticleImageFailure(article, 'image', event.currentTarget.currentSrc || event.currentTarget.src)
            setFailed(true)
          }}
        />
      )}
      <ImageCredit info={article.imageInfo} />
    </figure>
  )
}

/**
 * Civilizations are not all the same kind of entity (Appendix C §2), and the
 * label says which. A Viking was someone on a raiding voyage, not a member of
 * an ethnic group — calling that page "People" would restate the myth it
 * exists to correct.
 */
const CIVILIZATION_TYPE_LABEL = {
  people: 'People',
  cultural: 'Cultural world',
  'developing-identity': 'Developing identity',
  confederation: 'Confederation',
  steppe: 'Steppe people',
  phenomenon: 'Historical phenomenon'
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

  // The eyebrow carries the civilization/state distinction where the reader
  // meets it first. "People", "Confederation" and "Historical phenomenon" are
  // genuinely different kinds of thing, and Vikings being labelled a phenomenon
  // rather than a people is the entire point of that article existing.
  if (article.type === 'civilization') {
    return CIVILIZATION_TYPE_LABEL[article.civilizationType] ?? 'People'
  }

  if (article.type === 'weaponArmor') {
    return article.weaponArmorType ?? 'Weapons & Armor'
  }

  if (article.type === 'house') {
    return 'Dynasty'
  }

  if (article.type === 'order') {
    return 'Military religious order'
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

  const facts = [
    { label: 'Year', value: article.year },
    { label: 'Location', value: article.location }
  ].filter((fact) => fact.value)
  if (!facts.length) return null

  return (
    <dl className="fact-strip">
      {facts.map((fact) => (
        <div key={fact.label}>
          <dt>{fact.label}</dt>
          <dd>{fact.value}</dd>
        </div>
      ))}
    </dl>
  )
}

// ---- Weapons & Armor structured blocks (scannable specs / tables / cards) ----
// Known-for items name people, places and events just as prose does, so they run
// through the same auto-linker (owner rule, 2026-09-15).
function KnownForBlock({ items, article }) {
  const list = asList(items)
  if (!list.length) return null
  return (
    <section className="article-section wa-block">
      <h2>Known for</h2>
      <ul className="wa-knownfor">{list.map((f, i) => <li key={i}>{renderLinkedText(f, article)}</li>)}</ul>
    </section>
  )
}

function WeaponSpecs({ specs }) {
  if (!specs?.rows?.length) return null
  const groups = []
  for (let i = 0; i < specs.rows.length; i += 3) groups.push(specs.rows.slice(i, i + 3))
  return (
    <section className="article-section wa-block">
      <h2>Specifications</h2>
      <div className="wa-cards wa-spec-cards">
        {groups.map((g, i) => (
          <div key={i} className="wa-card wa-spec-card">
            <dl>
              {g.map((r) => (
                <div key={r.label} className="wa-spec-item">
                  <dt>{r.label}</dt>
                  <dd>{r.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </div>
      {specs.note && <p className="wa-note">{specs.note}</p>}
    </section>
  )
}

function OakeshottTypes({ data }) {
  if (!data?.rows?.length) return null
  return (
    <section className="article-section wa-block">
      <h2>Blade typology (Oakeshott)</h2>
      {data.diagram?.img && (
        <figure className="wa-type-figure">
          <ZoomableImage
            src={data.diagram.img}
            alt="Chart of Oakeshott sword-blade types"
            loading="lazy"
          />
          {data.diagram.caption && (
            <figcaption>
              {data.diagram.caption} <span className="wa-zoom-hint">— click to enlarge</span>
            </figcaption>
          )}
        </figure>
      )}
      <div className="wa-cards wa-type-cards">
        {data.rows.map((r) => (
          <div key={r.type} className="wa-card wa-type-card">
            {r.img && (
              <img className="wa-type-img" src={r.img} alt={`Oakeshott type ${r.type} blade`} loading="lazy" />
            )}
            <h3>{r.type}</h3>
            <p>{r.favors}</p>
          </div>
        ))}
      </div>
      {data.note && <p className="wa-note">{data.note}</p>}
    </section>
  )
}

function WeaponTable({ title, note, columns, rows }) {
  if (!rows?.length) return null
  return (
    <section className="article-section wa-block">
      <h2>{title}</h2>
      <div className="wa-table-wrap">
        <table className="wa-table">
          <thead><tr>{columns.map((c, i) => <th key={i}>{c}</th>)}</tr></thead>
          <tbody>{rows.map((cells, i) => (
            <tr key={i}>{cells.map((cell, j) => <td key={j}>{cell}</td>)}</tr>
          ))}</tbody>
        </table>
      </div>
      {note && <p className="wa-note">{note}</p>}
    </section>
  )
}

function CombatModes({ modes }) {
  if (!modes?.length) return null
  return (
    <section className="article-section wa-block">
      <h2>How it was fought</h2>
      <div className="wa-cards">
        {modes.map((m) => (
          <div key={m.title} className={`wa-card${m.highlight ? ' wa-card-hl' : ''}`}>
            <h3>{m.title}</h3><p>{m.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function SurvivingExamples({ items }) {
  if (!items?.length) return null
  return (
    <section className="article-section wa-block">
      <h2>Surviving examples</h2>
      <div className="wa-cards">
        {items.map((it) => (
          <div key={it.name + it.collection} className="wa-card wa-object">
            <h3>{it.name}</h3>
            <p className="wa-object-meta">{[it.date, it.origin].filter(Boolean).join(' · ')}</p>
            <dl className="wa-object-specs">
              {it.overall && <div><dt>Overall</dt><dd>{it.overall}</dd></div>}
              {it.blade && <div><dt>Blade</dt><dd>{it.blade}</dd></div>}
              {it.weight && <div><dt>Weight</dt><dd>{it.weight}</dd></div>}
            </dl>
            <p className="wa-object-coll">
              {it.sourceUrl ? <a href={it.sourceUrl} target="_blank" rel="noreferrer">{it.collection}</a> : it.collection}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

function MythList({ items }) {
  if (!items?.length) return null
  return (
    <section className="article-section wa-block">
      <h2>Myths &amp; misconceptions</h2>
      <ul className="wa-myths">
        {items.map((m, i) => (
          <li key={i}>
            <span className="wa-myth-claim">{m.claim}</span>
            <span className="wa-myth-real">{m.reality}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

function WeaponArmorExtras({ article }) {
  // `comparison` accepts either a single table or an array of them. Most articles
  // need one; the arquebus needs two, because the reader's question is genuinely
  // twofold — how it differed from the hand cannon it grew out of, and from the
  // musket it is constantly confused with.
  const comparisons = [article.comparison].flat().filter((c) => c?.rows?.length)
  return (
    <>
      {article.combatModes && <CombatModes modes={article.combatModes} />}
      {article.oakeshottTypes && <OakeshottTypes data={article.oakeshottTypes} />}
      {article.timeline?.length ? <Timeline items={article.timeline} /> : null}
      {comparisons.map((cmp, index) => (
        <WeaponTable
          key={cmp.title ?? index}
          title={cmp.title}
          columns={['', cmp.leftLabel, cmp.rightLabel]}
          rows={cmp.rows.map((r) => [r.feature, r.left, r.right])}
        />
      ))}
      {article.survivingExamples && <SurvivingExamples items={article.survivingExamples} />}
      {article.myths && <MythList items={article.myths} />}
    </>
  )
}

function StandardContent({ article }) {
  const sections = article.contentSections?.length
    ? article.contentSections
    : [{ title: 'Overview', paragraphs: [article.summary, article.details].filter(Boolean) }]
  const isWA = article.type === 'weaponArmor'

  return (
    <>
      {isWA ? (
        <>
          {sections[0] && (
            <ArticleSection
              className="overview-section"
              title={sections[0].title}
              paragraphs={sections[0].paragraphs}
              article={article}
            />
          )}
          <KnownForBlock items={article.knownFor} article={article} />
          {article.specs && <WeaponSpecs specs={article.specs} />}
          {sections.slice(1).map((section) => (
            <ArticleSection key={section.title} title={section.title} paragraphs={section.paragraphs} article={article} />
          ))}
          <WeaponArmorExtras article={article} />
        </>
      ) : (
        sections.map((section, index) => (
          <ArticleSection
            key={section.title}
            className={index === 0 ? 'overview-section' : ''}
            title={section.title}
            paragraphs={section.paragraphs}
            article={article}
          />
        ))
      )}
      <SourcesList sources={article.sources} />
      <TopicLinks id={article.id} />
      <RelatedEntries groups={article.relatedEntries} />
    </>
  )
}

// ---- Military religious order (structured, scannable) ----
function OrderSigilImage({ article }) {
  const [failed, setFailed] = useState(false)
  if (!article.sigilImage || failed) return null
  const info = article.sigilImageInfo

  return (
    <figure className="detail-media detail-media-order detail-media-arms">
      <img
        src={article.sigilImage}
        alt={`Seal of the ${article.name}`}
        onError={(event) => {
          reportArticleImageFailure(article, 'sigilImage', event.currentTarget.currentSrc || event.currentTarget.src)
          setFailed(true)
        }}
      />
      <ImageCredit info={info} />
    </figure>
  )
}

function OrderHero({ article }) {
  const facts = [
    { label: 'Founded', value: article.founded },
    { label: 'Recognized', value: article.recognized },
    { label: 'Dissolved', value: article.dissolved },
    { label: 'Status', value: article.dissolved ? null : article.status },
    { label: 'Headquarters', value: article.headquarters },
    { label: 'Allegiance', value: article.allegiance },
    { label: 'Habit', value: article.habit }
  ].filter((fact) => fact.value)

  if (!facts.length && !article.purpose) return null

  return (
    <dl className="fact-strip rich-facts">
      {facts.map((fact) => (
        <div key={fact.label}>
          <dt>{fact.label}</dt>
          <dd>{fact.value}</dd>
        </div>
      ))}
      {article.purpose && (
        <div className="order-purpose">
          <dt>Purpose</dt>
          <dd>{article.purpose}</dd>
        </div>
      )}
    </dl>
  )
}

function OrderKeyStats({ items }) {
  if (!items?.length) return null
  return (
    <section className="article-section wa-block">
      <h2>At a glance</h2>
      <div className="wa-cards wa-spec-cards">
        <div className="wa-card wa-spec-card">
          <dl>
            {items.map((r) => (
              <div key={r.label} className="wa-spec-item">
                <dt>{r.label}</dt>
                <dd>{r.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}

function GrandMasterTable({ items }) {
  if (!items?.length) return null
  return (
    <section className="article-section wa-block">
      <h2>Grand Masters</h2>
      <div className="wa-table-wrap">
        <table className="wa-table">
          <thead><tr><th>Grand Master</th><th>Term</th><th>Note</th></tr></thead>
          <tbody>
            {items.map((m, i) => (
              <tr key={`${m.name}-${i}`}>
                <td>{m.slug ? <Link to={`/people/${m.slug}`}>{m.name}</Link> : m.name}</td>
                <td>{m.term}</td>
                <td>{m.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

function OrderBattles({ items }) {
  if (!items?.length) return null
  return (
    <section className="article-section wa-block">
      <h2>Major battles</h2>
      <div className="wa-cards">
        {items.map((b, i) => (
          <div key={`${b.name}-${i}`} className="wa-card wa-object">
            <h3>{b.slug ? <Link to={`/events/${b.slug}`}>{b.name}</Link> : b.name}</h3>
            <p className="wa-object-meta">{[b.date, b.opponent].filter(Boolean).join(' · ')}</p>
            {b.role && <p>{b.role}</p>}
            {b.outcome && <p className="wa-object-coll">{b.outcome}</p>}
          </div>
        ))}
      </div>
    </section>
  )
}

function OrderStrongholds({ items }) {
  if (!items?.length) return null
  return (
    <section className="article-section wa-block">
      <h2>Headquarters &amp; strongholds</h2>
      <div className="wa-cards">
        {items.map((s, i) => (
          <div key={`${s.name}-${i}`} className="wa-card">
            <h3>{s.slug ? <Link to={`/locations/${s.slug}`}>{s.name}</Link> : s.name}</h3>
            {s.period && <p className="wa-object-meta">{s.period}</p>}
            {s.note && <p>{s.note}</p>}
          </div>
        ))}
      </div>
    </section>
  )
}

function OrderContent({ article }) {
  const sections = article.contentSections?.length
    ? article.contentSections
    : [{ title: 'Overview', paragraphs: [article.summary].filter(Boolean) }]

  return (
    <>
      <ArticleSection
        className="overview-section"
        title={sections[0].title}
        paragraphs={sections[0].paragraphs}
        article={article}
      />
      <OrderKeyStats items={article.keyStats} />
      {sections.slice(1).map((section) => (
        <ArticleSection key={section.title} title={section.title} paragraphs={section.paragraphs} article={article} />
      ))}
      <GrandMasterTable items={article.grandMasters} />
      <OrderBattles items={article.battles} />
      <OrderStrongholds items={article.strongholds} />
      {article.timeline?.length ? <Timeline items={article.timeline} /> : null}
      {article.myths && <MythList items={article.myths} />}
      <SourcesList sources={article.sources} />
      <TopicLinks id={article.id} />
      <RelatedEntries groups={article.relatedEntries} />
    </>
  )
}

/**
 * The hero carries the event's core facts and nothing else.
 *
 * It used to carry the factions, leaders, outcome and the continuity card as
 * well, stacked under the fact strip. Because the hero is a two-column grid with
 * `align-items: start`, that made the text column far taller than the image
 * column beside it, and the hero's own near-black backdrop showed through the
 * gap: on the Battle of Brunanburh about 810px of dead black under a 417px
 * image, which the owner reported on 2026-09-15. It was not a one-page problem —
 * 86 of 95 event pages had a text column more than 300px taller, and raising the
 * image height would not have closed it (the same 86 overflow even at the
 * maximum image height, and enlarging images fights the whole-object and
 * no-margins rules). So the metadata moved into the article body, where it reads
 * as part of the article, and the hero balances against the image.
 *
 * The duplicated type label went with it: `articleTypeLabel` already prints
 * "Battle" as the eyebrow above the title, and this printed it again directly
 * under the Favorite control on 93 of 95 events.
 */
function EventHero({ article }) {
  return (
    <div className="event-profile">
      <dl className="fact-strip">
        {article.year && (
          <div>
            <dt>Year</dt>
            <dd>{article.year}</dd>
          </div>
        )}
        {renderEventLocation(article) && (
          <div>
            <dt>Location</dt>
            <dd>{renderEventLocation(article)}</dd>
          </div>
        )}
        {article.conflict && (
          <div>
            <dt>Conflict</dt>
            <dd>{renderLinkedText(article.conflict, article)}</dd>
          </div>
        )}
      </dl>
    </div>
  )
}

/**
 * Who fought, who led them, and how it ended — rendered in the article body,
 * after the opening section, rather than stacked in the hero. The continuity
 * card is no longer part of this block: it belongs at the end of the article,
 * where a reader who has finished is ready for the next battle.
 */
function EventIntel({ article }) {
  const participants = normalizedParticipants(article)
  if (!participants.length && !article.outcome) return null

  // Whether the ARTICLE names any commander, regardless of which side the
  // grouping managed to file them under.
  const hasNamedLeaders =
    (article.leaders ?? []).length > 0 || participants.some((p) => p.leaders?.length)

  return (
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
                  {participant.strength?.display && (
                    <div className="event-strength">
                      <span className="event-strength-label">Estimated strength</span>
                      <span className="event-strength-value">{participant.strength.display}</span>
                      {participant.strength.note && (
                        <p className="event-strength-note">{participant.strength.note}</p>
                      )}
                    </div>
                  )}
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
                          {/* A leader card shows the name and the person's ROLE,
                              nothing more (owner, 2026-09-16, on Lechfeld: "way
                              too much text… too exhaustive to read"). Seven
                              commanders there each carried a 110-211 character
                              paragraph, and the card became an essay.

                              The full note stays in the DATA — it is the archive's
                              record of why a name is unlinked, and 76 of 146 notes
                              carry that explanation. It just is not what a reader
                              needs while scanning who fought. */}
                          {!leader.slug && leaderRole(leader) && (
                            <p className="event-uncertain-note">{leaderRole(leader)}</p>
                          )}
                        </li>
                      ))}
                    </ul>
                  ) : hasNamedLeaders ? null : (
                    /* Only say this when the article really names no commander.
                       It is grouped by matching `leader.faction` to the side's
                       name, so a vocabulary mismatch used to strand every leader
                       and print this under BOTH sides — the Wars of Scottish
                       Independence claimed no commander was securely represented
                       while listing Wallace, Bruce and both Edwards (owner,
                       2026-09-16). A grouping failure must not become a
                       historical assertion. */
                    <p className="event-uncertain-note">No single named commander is securely represented.</p>
                  )}
                </section>
              ))}
            </div>
          </InfoBlock>
          <OutcomeBlock article={article} />
    </div>
  )
}

/**
 * The verdict first and bold, the explanation beneath it (owner, 2026-09-16):
 * "Decisive Byzantine victory" should be findable at a glance rather than read as
 * the opening words of a paragraph.
 *
 * 88 of the archive's 98 outcomes put the verdict before a semicolon, and one uses
 * a colon. Nine more are single sentences — "Frankish victory, generally treated as
 * decisive for Charles Martel's authority" — where splitting on the full stop would
 * embolden the whole line, so those split on the comma only when the opening
 * actually names a result. Anything else stays plain rather than being mangled.
 * `outcomeDetail` is in the schema but empty on every event, so the split comes
 * from the outcome string itself.
 */
const VERDICT_WORDS = /\b(victor|victories|defeat|success|stalemate|truce|withdrawal|surrender|captured?|repulsed|fell|failed|inconclusive)/i

/**
 * The short role shown under an unlinked commander's name.
 *
 * Leader notes were written to serve two masters: to say what the person did,
 * and to explain why the archive has no article for them. The second half is a
 * record for editors, not something a reader scanning a battle needs — so the
 * card shows the first clause and drops the rest.
 *
 * `title` wins when a leader has one. Otherwise the note's opening clause is
 * taken, cut at the first sentence end, and any "No biography…" sentence
 * removed. A clause longer than ~90 characters is trimmed at its last comma, so
 * "Duke of Lotharingia, recently in rebellion against Otto and restored to
 * favour, who recovered the plundered baggage train and was killed by an arrow
 * through the throat" becomes "Duke of Lotharingia".
 */
export function leaderRole(leader) {
  if (leader.title && leader.title !== leader.name) return leader.title

  const note = String(leader.note ?? '').trim()
  if (!note) return null

  // Two different boilerplates were used over time — "No biography in the Codex
  // yet" and "No article yet:" — and both are editor's record, not the reader's
  // business. Strip either wherever it sits, leading or trailing.
  const withoutBoilerplate = note
    .replace(/^\s*No (?:article|biography)[^:.]*[:.]\s*/i, '')
    .replace(/\s*No (?:article|biography)\b.*$/i, '')
    .trim()
  if (!withoutBoilerplate) return null

  const firstSentence = (withoutBoilerplate.split(/(?<=\.)\s+/)[0] ?? withoutBoilerplate)
    .replace(/[.;:,]\s*$/, '')
    .trim()
  if (!firstSentence) return null
  if (firstSentence.length <= 90) return firstSentence

  // Never cut mid-word, and never end on a dangling connective. Cutting at the
  // last space gave "mortally wounded by a cannon shot in" and "left Harold
  // Godwinson to meet two" — whole words, but the phrase still stops mid-thought.
  const head = firstSentence.slice(0, 90)
  const comma = head.lastIndexOf(',')
  const base = comma > 20 ? head.slice(0, comma) : head.slice(0, Math.max(head.lastIndexOf(' '), 0) || head.length)

  const DANGLING = /\s+(?:and|or|but|with|by|to|of|in|on|at|for|from|the|a|an|who|whose|which|that|his|her|their|its|two|both)$/i
  let trimmed = base.trim()
  while (DANGLING.test(trimmed)) trimmed = trimmed.replace(DANGLING, '').trim()

  return (trimmed || base).replace(/[.;:,]\s*$/, '').trim()
}

function splitOutcome(outcome) {
  const clause = outcome.match(/^([^;:]{3,90})[;:]\s*([\s\S]+)$/)
  if (clause) return [clause[1].trim(), clause[2].trim()]

  // A verdict closed with a FULL STOP — "Decisive German victory. The Magyar
  // army was destroyed in the pursuit…". This was the missing shape: the owner
  // reported Lechfeld's victor rendering unbolded, and it turned out six battles
  // wrote their outcome this way and none of them bolded the winner. The verdict
  // guard matters here more than above, because plenty of first sentences are
  // not verdicts at all.
  const sentence = outcome.match(/^([^.;:]{3,90})\.\s+([\s\S]+)$/)
  if (sentence && VERDICT_WORDS.test(sentence[1])) return [sentence[1].trim(), sentence[2].trim()]

  const comma = outcome.match(/^([^,]{3,60}),\s*([\s\S]+)$/)
  if (comma && VERDICT_WORDS.test(comma[1])) return [comma[1].trim(), comma[2].trim()]

  return [null, outcome]
}

function OutcomeBlock({ article }) {
  const outcome = String(article.outcome ?? '').trim()
  if (!outcome) return null

  const [verdict, rest] = splitOutcome(outcome)

  return (
    <InfoBlock title="Outcome" className="info-block-outcome">
      {verdict && <p className="event-outcome-verdict">{renderLinkedText(verdict, article)}</p>}
      <p className="event-outcome-rest">{renderLinkedText(rest, article)}</p>
      {article.outcomeDetail && <p className="event-outcome-rest">{renderLinkedText(article.outcomeDetail, article)}</p>}
    </InfoBlock>
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
      leaders: (participant.leaders ?? []).map(normalizedEntry),
      strength: participant.strength ?? null
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
      {/* EventIntel used to sit here, after the opening section. It moved into
          the hero (owner, 2026-09-16): the fact strip ended early and left a slab
          of black under it, while factions, leaders and outcome waited below the
          prose. They now fill that space beside the contents rail. */}
      {sections.map((section) => (
        <ArticleSection key={section.title} title={section.title} paragraphs={section.paragraphs} article={article} />
      ))}
      {/* The next battle belongs at the end, where the reader has finished this
          one, not in the hero before they have started it. */}
      <BattleContinuity article={article} />
      <Timeline items={article.timeline} />
      <SourcesList sources={article.sources} />
      <TopicLinks id={article.id} />
      <RelatedEntries groups={article.relatedEntries} />
    </>
  )
}

// Polities carry their own dates; everything else sits inside one. The set matches
// the kingdom-type list in scripts/check-images.mjs, so a Sultanate, Duchy or
// Khanate shows dates the way a Kingdom does. Reported by the owner on
// 2026-09-16: the Ayyubid Sultanate showed no dates at all, because "Sultanate"
// was not one of the three types listed here, so it fell through to the parent
// "Kingdom" card instead.
const POLITY_LOCATION_TYPES = new Set([
  'kingdom', 'empire', 'caliphate', 'sultanate', 'principality', 'grand duchy', 'duchy',
  'county', 'khanate', 'despotate', 'polity', 'imperial realm', 'league', 'military order',
  'region / duchy'
])

// A card with nothing in it is removed, never shown blank (owner rule,
// 2026-09-15). 34 non-kingdom locations record no parent kingdom; Danelaw's
// empty "Kingdom" card, under a "Region in undefined" subtitle, was the one
// reported.
function LocationHero({ article }) {
  const rawType = String(article.locationType ?? '').trim()
  const typeLabel = rawType ? rawType.charAt(0).toUpperCase() + rawType.slice(1) : null
  const isPolity = POLITY_LOCATION_TYPES.has(rawType.toLowerCase())
  // A polity that records when it ended shows the span it was active; one that
  // does not keeps its founding year alone rather than inventing an end.
  const hasSpan = Boolean(article.year && article.endYear)
  const facts = [
    { label: 'Type', value: typeLabel },
    isPolity
      ? { label: hasSpan ? 'Active' : 'Established', value: hasSpan ? `${article.year}–${article.endYear}` : article.year }
      : { label: 'Kingdom', value: article.kingdom ? renderKingdom(article) : null }
  ].filter((fact) => fact.value)
  // The eyebrow above the title already prints the type, so the subtitle earns its
  // place only when it adds the parent realm ("City in Kingdom of France"). Printed
  // bare it repeated the eyebrow on all 176 location pages, exactly as it did under
  // the Favorite control on events (owner report, 2026-09-15; U0 audit §2.4).
  const subtitle = !isPolity && article.kingdom && typeLabel ? `${typeLabel} in ${article.kingdom}` : null

  return (
    <div className="location-profile">
      {subtitle && <p className="article-subtitle">{subtitle}</p>}
      {facts.length > 0 && (
        <dl className="fact-strip">
          {facts.map((fact) => (
            <div key={fact.label}>
              <dt>{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </dl>
      )}
    </div>
  )
}

/**
 * A people, not a state (QUEUE 0e, Appendix C §1).
 *
 * The hero's job is to answer "who were these people, when, and where" before
 * the reader reads a word of prose — and to make the civilization/state
 * distinction visible rather than merely asserted in the Overview. That is what
 * the "Realms" fact is for: the Ostrogoths link out to the Ostrogothic Kingdom
 * from the top of the page, so the two are legible as different things at a
 * glance.
 *
 * The endonym leads as a subtitle wherever one is recorded, because for half
 * these peoples the name the archive files them under is an outsider's word.
 * The Byzantines called themselves Romans, and a page that never says so has
 * already misled the reader.
 *
 * Every fact is filtered before rendering: an empty card under a label is a
 * defect (owner rule), and these articles will routinely lack a religion, a
 * recorded endonym or a securely attested homeland.
 */
function CivilizationHero({ article }) {
  const realms = asList(article.majorRealms).slice(0, 3)

  const facts = [
    { label: 'Period', value: article.chronology ?? article.period },
    { label: 'Region', value: article.region },
    { label: 'Cultural family', value: article.culturalFamily },
    { label: 'Language', value: asList(article.languages).join(', ') || null },
    { label: 'Religion', value: asList(article.religions).join(', ') || null },
    {
      label: realms.length === 1 ? 'Realm' : 'Realms',
      value: realms.length
        ? realms.map((realm, index) => {
            const slug = typeof realm === 'string' ? null : realm.slug
            const name = typeof realm === 'string' ? realm : realm.name
            return (
              <span key={name}>
                {index > 0 && ', '}
                {slug
                  ? <EntryLink entry={{ type: 'location', slug, title: name }}>{name}</EntryLink>
                  : name}
              </span>
            )
          })
        : null
    }
  ].filter((fact) => fact.value)

  return (
    <div className="civilization-profile">
      {article.endonym && (
        <p className="article-subtitle">
          Called themselves <em>{article.endonym}</em>
        </p>
      )}
      {facts.length > 0 && (
        <dl className="fact-strip rich-facts">
          {facts.map((fact) => (
            <div key={fact.label}>
              <dt>{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </dl>
      )}
    </div>
  )
}

function CivilizationContent({ article }) {
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
      {asList(article.knownFor).length > 0 && (
        <section className="bio-section">
          <h2>Known for</h2>
          <ul className="feat-list">
            {asList(article.knownFor).map((fact) => (
              <li key={fact}>{renderLinkedText(fact, article)}</li>
            ))}
          </ul>
        </section>
      )}
      <Timeline items={article.timeline} />
      <SourcesList sources={article.sources} />
      <TopicLinks id={article.id} />
      <RelatedEntries groups={article.relatedEntries} />
    </>
  )
}

function LocationContent({ article }) {
  const sections = article.contentSections?.length
    ? article.contentSections
    : [{ title: 'Overview', paragraphs: article.overview }]
  const hasLocator = Boolean(locatorFor(article))

  return (
    <>
      {sections.map((section, index) => (
        <ArticleSection
          key={section.title}
          className={index === 0 ? 'overview-section' : ''}
          title={section.title}
          paragraphs={section.paragraphs}
          article={article}
          sideFigure={index === 0 && hasLocator ? <LocatorMap article={article} /> : null}
        />
      ))}
      {asList(article.knownFor).length > 0 && (
        <section className="bio-section">
          <h2>Known for</h2>
          <ul className="feat-list">
            {asList(article.knownFor).map((fact) => (
              <li key={fact}>{renderLinkedText(fact, article)}</li>
            ))}
          </ul>
        </section>
      )}
      {/* Kingdom/polity articles carry a medieval timeline like people do. */}
      <Timeline items={article.timeline} />
      <SourcesList sources={article.sources} />
      <TopicLinks id={article.id} />
      <RelatedEntries groups={article.relatedEntries} />
    </>
  )
}

// A second image beneath the main one: a dynasty's coat of arms on House pages,
// and a kingdom's arms or flag on Location pages, whose main image is its
// territory map (owner request, 2026-09-15). Many eastern and early houses had
// no heraldic arms, so the image is optional.
function ArmsImage({ article }) {
  const [failed, setFailed] = useState(false)
  if (!article.armsImage || failed) return null
  const info = article.armsImageInfo

  return (
    <figure className={`detail-media ${article.type === 'house' ? 'detail-media-house ' : ''}detail-media-arms`}>
      <img
        src={article.armsImage}
        alt={article.type === 'house' ? `Coat of arms of the ${article.name}` : `Arms of ${article.name}`}
        onError={(event) => {
          reportArticleImageFailure(article, 'armsImage', event.currentTarget.currentSrc || event.currentTarget.src)
          setFailed(true)
        }}
      />
      <ImageCredit info={info} />
    </figure>
  )
}

function HouseHero({ article }) {
  const primarySeat = article.seats?.[0]
  const facts = [
    { label: 'Period', value: article.reignSpan ?? (article.originYear ? `${article.originYear}` : null) },
    { label: 'Origin', value: article.originPlace },
    { label: 'Region', value: article.region },
    {
      label: 'Principal seat',
      value: primarySeat
        ? <EntryLink entry={{ type: 'location', slug: primarySeat.slug, title: primarySeat.name }}>{primarySeat.name}</EntryLink>
        : null
    },
    { label: 'Arms', value: article.arms }
  ].filter((fact) => fact.value)

  return (
    <div className="house-profile">
      {article.founder && (
        <p className="article-subtitle">
          Founded by{' '}
          {article.founder.personSlug
            ? <EntryLink entry={{ type: 'person', slug: article.founder.personSlug, title: article.founder.displayName }}>{article.founder.displayName}</EntryLink>
            : article.founder.displayName}
        </p>
      )}
      <dl className="fact-strip rich-facts">
        {facts.map((fact) => (
          <div key={fact.label}>
            <dt>{fact.label}</dt>
            <dd>{fact.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}

function HouseContent({ article }) {
  const sections = article.contentSections?.length
    ? article.contentSections
    : [{ title: 'Overview', paragraphs: [article.overview, article.summary].filter(Boolean) }]

  // The family tree renders immediately after the "Origins" section (or, if
  // there is no such section, after the first one).
  const originsIndex = Math.max(
    0,
    sections.findIndex((section) => /origin/i.test(section.title ?? ''))
  )

  return (
    <>
      {sections.map((section, index) => (
        <div key={section.title}>
          <ArticleSection
            className={index === 0 ? 'overview-section' : ''}
            title={section.title}
            paragraphs={section.paragraphs}
            article={article}
          />
          {index === originsIndex && <HouseTree article={article} />}
        </div>
      ))}
      <HouseMembers members={article.notableMembers} />
      <HouseCadetBranches branches={article.cadetBranches} article={article} />
      <Timeline items={article.timeline} />
      <SourcesList sources={article.sources} />
      <TopicLinks id={article.id} />
      <RelatedEntries groups={article.relatedEntries} />
    </>
  )
}

function shortHouseName(article) {
  return (article.name ?? '').replace(/^House of\s+/i, '').trim() || article.name
}

function HouseTree({ article }) {
  const tree = article.familyTree
  if (!tree?.root) return null

  const heading = tree.title ?? `${shortHouseName(article)} family tree`

  return (
    <section className="bio-section house-tree-section">
      <h2>{heading}</h2>
      {tree.caption && <p className="house-tree-caption">{tree.caption}</p>}
      <div className="house-tree" role="group" aria-label={heading}>
        <ul>
          <HouseTreeNode node={tree.root} />
        </ul>
      </div>
    </section>
  )
}

function HouseTreeNode({ node }) {
  return (
    <li>
      <div className="tree-node">
        <HouseTreePerson person={node} variant="main" />
        {node.spouse && (
          <>
            {/* role="img" so the aria-label is actually exposed: ARIA ignores a
                label on a generic span, which left the marriage symbol silent to
                a screen reader in every house family tree. */}
            <span className="tree-marriage" role="img" title="married" aria-label="married">⚭</span>
            <HouseTreePerson person={node.spouse} variant="spouse" />
          </>
        )}
      </div>
      {node.branch && <p className="tree-branch">{node.branch}</p>}
      {node.children?.length > 0 && (
        <ul>
          {node.children.map((child, index) => (
            <HouseTreeNode key={child.personSlug ?? child.name ?? index} node={child} />
          ))}
        </ul>
      )}
    </li>
  )
}

function HouseTreePerson({ person, variant }) {
  const inner = (
    <>
      <span className="tree-person-name">{person.name}</span>
      {person.note && <span className="tree-person-note">{person.note}</span>}
    </>
  )

  if (person.personSlug) {
    return <Link className={`tree-person tree-person-${variant}`} to={`/people/${person.personSlug}`}>{inner}</Link>
  }

  return <span className={`tree-person tree-person-${variant}`}>{inner}</span>
}

function HouseMembers({ members }) {
  if (!members?.length) return null

  return (
    <section className="bio-section house-members">
      <h2>Notable members</h2>
      <ul className="feat-list">
        {members.map((member) => (
          <li key={member.personSlug ?? member.displayName}>
            {member.personSlug
              ? <EntryLink entry={{ type: 'person', slug: member.personSlug, title: member.displayName }}>{member.displayName}</EntryLink>
              : <strong>{member.displayName}</strong>}
            {member.note && <span> — {member.note}</span>}
          </li>
        ))}
      </ul>
    </section>
  )
}

function HouseCadetBranches({ branches, article }) {
  if (!branches?.length) return null

  return (
    <section className="bio-section house-cadets">
      <h2>Cadet branches</h2>
      <ul className="feat-list">
        {branches.map((branch) => (
          <li key={branch.houseSlug ?? branch.name}>
            {branch.houseSlug
              ? <EntryLink entry={{ type: 'house', slug: branch.houseSlug, title: branch.name }}>{branch.name}</EntryLink>
              : <strong>{branch.name}</strong>}
            {branch.note && <span> — {renderLinkedText(branch.note, article)}</span>}
          </li>
        ))}
      </ul>
    </section>
  )
}

// "On this page" under the hero image — the spec's fix for the dead left column
// (Appendix B §5). The left column holds an image that stops early while the
// right column runs on, so the space under the picture is the one place every
// article type has to spare.
//
// Shown at FOUR OR MORE sections (owner decision, 2026-09-16, chosen from four
// measured options). The archive is bimodal — 15.7% of articles have 1–3
// sections, 77% have 5–8 — so the cut lands in a real gap rather than an
// arbitrary one: only 29 of 857 articles sit exactly at 4. Below the threshold
// a rail would be two or three links, which is a label pretending to be
// navigation, and it is shortest precisely where the article is shortest.
const CONTENTS_RAIL_MIN_SECTIONS = 4

function ContentsRail({ article }) {
  const entries = (article.contentSections ?? [])
    .map((section) => ({ title: section.title, id: sectionAnchorId(section.title) }))
    .filter((entry) => entry.title && entry.id)

  if (entries.length < CONTENTS_RAIL_MIN_SECTIONS) return null

  return (
    <nav className="contents-rail" aria-label="On this page">
      <h2>On this page</h2>
      <ol>
        {entries.map((entry) => (
          <li key={entry.id}>
            <a href={`#${entry.id}`}>{entry.title}</a>
          </li>
        ))}
      </ol>
    </nav>
  )
}

function PersonFactBand({ article }) {
  return (
    <div className="person-hero-band">
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

const SUCCESSION_STATUS_LABELS = {
  'outside-scope': 'Outside the Codex era',
  unknown: 'Unknown',
  disputed: 'Disputed succession',
  fragmented: 'Fragmented succession',
  'office-ended': 'Office ended',
  none: null,
}

function SuccessionCard({ label, entry }) {
  if (!entry) return null

  const statusLabel = entry.status ? SUCCESSION_STATUS_LABELS[entry.status] : null

  return (
    <div className="succession-card">
      <dt>{label}</dt>
      <dd>
        {entry.personSlug ? (
          <Link className="succession-link" to={`/people/${entry.personSlug}`}>{entry.displayName}</Link>
        ) : (
          <span className="succession-name">{entry.displayName || (entry.status === 'none' ? '—' : 'Unknown')}</span>
        )}
        {statusLabel && <span className="succession-status-tag">{statusLabel}</span>}
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
        <TopicLinks id={article.id} />
      <RelatedEntries groups={article.relatedEntries} />
      </aside>
    </div>
  )
}

function PersonSubtitle({ article }) {
  const roles = article.roles?.length ? article.roles : [article.title].filter(Boolean)

  return (
    <div className="person-subtitle">
      {/* .person-role so the hero ink rule can exclude it: without the class it
          ties `.detail-body p:not(.eyebrow)` and loses on order, so the gold this
          line is meant to be rendered as near-black body ink (owner, 2026-09-16). */}
      {roles.length > 0 && <p className="person-role">{roles.join(' · ')}</p>}
      {article.roleNote && <span>{article.roleNote}</span>}
    </div>
  )
}

function FavoriteAction({ article }) {
  // No aria-label on the wrapper: ARIA does not expose one on a generic div with
  // no role, so it was ignored by assistive tech — and redundant anyway, since
  // the FavoriteButton inside carries its own aria-label and aria-pressed. A
  // group of one control is noise, not structure.
  return (
    <div className="article-actions">
      <FavoriteButton article={article} variant="detail" />
    </div>
  )
}

// The Dynasty/House fact links back to the House article when the server has
// resolved one (bidirectional House <-> Person navigation); otherwise it stays
// as plain text (cadet-branch labels, or houses with no article yet).
function renderDynastyHouse(article) {
  const dynasty = article.quickFacts?.dynasty
  if (!dynasty) return null
  if (article.dynastyHouse?.slug) {
    return <Link to={`/houses/${article.dynastyHouse.slug}`}>{dynasty}</Link>
  }
  // An order member's "house" is their order (server: withOrderLinks).
  if (article.orderLinks?.dynasty?.slug) {
    return <Link to={`/orders/${article.orderLinks.dynasty.slug}`}>{dynasty}</Link>
  }
  return dynasty
}

// Realm/polity links to the order article when the realm is a military order,
// such as Ulrich von Jungingen's Teutonic Order (owner rule, 2026-09-15).
function renderRealm(article) {
  const realm = article.quickFacts?.realm
  if (!realm) return null
  if (article.orderLinks?.realm?.slug) {
    return <Link to={`/orders/${article.orderLinks.realm.slug}`}>{realm}</Link>
  }
  // The order check stays first: a Teutonic Knight's realm is the order, not a
  // kingdom. Otherwise the realm links to its polity article when one exists.
  if (article.realmLocation?.slug) {
    return <Link to={`/locations/${article.realmLocation.slug}`}>{realm}</Link>
  }
  return realm
}

function PersonQuickFacts({ article }) {
  const facts = [
    { label: 'Born', value: renderBirth(article) },
    { label: 'Died', value: renderDeath(article) },
    { label: 'Resting place', value: article.restingPlace },
    { label: 'Titles', value: article.roles?.join(', ') },
    { label: 'Nicknames', value: renderEpithets(article) },
    { label: 'Realm / polity', value: renderRealm(article) },
    { label: 'Dynasty / house', value: renderDynastyHouse(article) },
    { label: 'Culture', value: article.quickFacts?.culture },
    // Known for is a sentence, not a datum: it spans the band rather than being
    // squeezed into a third of it beside two-word values like "Anglo-French".
    { label: 'Known for', value: renderLinkedText(article.quickFacts?.knownFor, article), wide: true }
  ].filter((fact) => fact.value)

  return (
    <dl className="fact-strip person-facts rich-facts">
      {facts.map((fact) => (
        <div key={fact.label} className={fact.wide ? 'fact-wide' : undefined}>
          <dt>{fact.label}</dt>
          <dd>{fact.value}</dd>
        </div>
      ))}
    </dl>
  )
}

function InfoBlock({ title, children, className = '' }) {
  return (
    <section className={`info-block${className ? ` ${className}` : ''}`}>
      <h2>{title}</h2>
      {children}
    </section>
  )
}

// sideFigure puts a figure in its own column to the right of the whole section
// text (the city locator map), rather than floating it in part-way down, which
// left dead space beside and under short text (owner, 2026-09-15).
// Anchor id for a section heading, so the contents rail can jump to it. Derived
// from the title rather than stored, because section titles are the only stable
// identifier the data gives us and adding ids to 857 articles to support a
// navigation aid would be a mass data edit the UI spec forbids (§2).
export function sectionAnchorId(title) {
  const slug = String(title ?? '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
  return slug ? `section-${slug}` : null
}

function ArticleSection({ title, paragraphs, className = '', article, sideFigure = null }) {
  const sectionImages = sectionImagesFor(article, title)
  if (!(paragraphs ?? []).filter(Boolean).length && !sectionImages.length) return null

  const anchorId = sectionAnchorId(title)

  const text = (paragraphs ?? []).filter(Boolean).map((paragraph, index) => (
    <FragmentWithImages
      imageInsertIndex={index}
      images={sectionImages}
      key={paragraph}
      paragraph={paragraph}
      article={article}
    />
  ))

  if (sideFigure) {
    return (
      <section className={`bio-section ${className}`} id={anchorId ?? undefined}>
        <h2>{title}</h2>
        <div className="section-with-side-figure">
          <div className="section-text">{text}</div>
          <div className="section-side-figure">{sideFigure}</div>
        </div>
      </section>
    )
  }

  return (
    <section className={`bio-section ${className}`} id={anchorId ?? undefined}>
      <h2>{title}</h2>
      {text}
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

// Where a city lies in its region, on a medieval base map (owner rule, 2026-09-15;
// QUEUE 0k). A window of the base map around the city, with a marker at its
// coordinates; base maps and their calibration live in lib/locatorMaps.js. Renders
// nothing for an article with no coordinates or no base map that covers it.
function LocatorMap({ article }) {
  const [failed, setFailed] = useState(false)
  const locator = locatorFor(article)
  if (!locator || failed) return null
  const { map, x, y } = locator

  // THE WHOLE MAP, NEVER A CROP (owner, 2026-09-17).
  //
  // This used to show a 340x320 window of the base map around the marker, to
  // keep the map's own town names readable. That defeated the one job a locator
  // has. The owner reported Toledo sitting in an anonymous patch of provincial
  // borders and rivers, with no coastline and no national outline: you could see
  // a red dot, but not where in Spain it was.
  //
  // A locator answers "where in the country is this place", and only the whole
  // country can answer it — which is the Wikipedia location-map convention this
  // was always meant to follow. The marker is placed by simple proportion of the
  // full image, so it stays exact at any rendered size.
  const leftPct = (x / map.width) * 100
  const topPct = (y / map.height) * 100
  const aspect = map.width / map.height

  return (
    <figure className="section-figure locator-figure">
      <div
        className="locator-window"
        // A tall map (Portugal, Sweden, the Kingdom of Jerusalem) would run to
        // 700px in this column. `--locator-ar` lets the CSS cap the HEIGHT and
        // shrink the width proportionally, so the frame never distorts and the
        // percentages above stay true.
        style={{ '--locator-ar': aspect, aspectRatio: `${map.width} / ${map.height}` }}
        role="img"
        aria-label={`Map of ${map.title}, with ${article.name} marked in red`}
      >
        <img src={map.src} alt="" loading="lazy" onError={() => setFailed(true)} />
        <span className="locator-marker" style={{ left: `${leftPct}%`, top: `${topPct}%` }} />
      </div>
      {/* "modern map" only when the base map actually has modern borders. The
          Jerusalem map is a twelfth-century one, and calling it modern was
          wrong on all three of its places (found 2026-09-16 while adding the
          bounds maps, which ARE modern outlines and must say so). */}
      <ImageCredit
        info={{
          caption: map.modernBorders
            ? `${article.name} marked in red on a modern map of ${map.title}; the borders are today's, not those of the Middle Ages.`
            : `${article.name} marked in red on ${map.title}.`,
          source: map.source,
          sourceUrl: map.sourceUrl
        }}
      />
    </figure>
  )
}

function SectionImage({ image }) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    if (import.meta.env.DEV) {
      console.warn(`Section image failed to load: ${image?.src}`)
    }

    return (
      <figure className="section-figure section-figure-unavailable">
        <ImageCredit info={image}>
          <em>Image temporarily unavailable.</em>
        </ImageCredit>
      </figure>
    )
  }

  return (
    <figure className="section-figure">
      <ZoomableImage
        src={image.src}
        alt={image.alt ?? image.caption}
        loading="lazy"
        onError={() => setFailed(true)}
      />
      <ImageCredit info={image} />
    </figure>
  )
}

// An achievement is either an object with a title (and optional description and
// links) or a plain sentence. 48 people stored plain sentences, which rendered as
// empty boxes because only `.title` was read (Catherine of Valois, reported
// 2026-09-15). Anything without text is dropped, and an empty list hides the
// section, per the no-empty-cards rule.
function normalizedAchievements(achievements) {
  return asList(achievements)
    .map((achievement) => (typeof achievement === 'string' ? { title: achievement } : achievement))
    .filter((achievement) => achievement && String(achievement.title ?? '').trim())
}

function KeyAchievements({ achievements, article }) {
  const items = normalizedAchievements(achievements)
  if (!items.length) return null

  return (
    <section className="bio-section key-achievements">
      <h2>Key achievements</h2>
      <div className="achievement-list">
        {items.map((achievement) => (
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

// A list field stored as a lone string (Toledo's `knownFor`) renders as one item
// instead of crashing the whole page.
function asList(value) {
  if (Array.isArray(value)) return value
  return value ? [value] : []
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

// A place is an object ({ name, slug? }) or, in 58 older person articles, plain
// text such as "London or Oxford", which used to render as nothing.
function LinkedLocationFact({ place }) {
  if (!place) return 'Unknown'
  if (typeof place === 'string') return place

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
  const age = normalizeDeathAge(article.deathAge)

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
      {age && (
        <small className="death-age">
          {age.display}
          {age.aside && <span className="death-age-aside"> — {age.aside}</span>}
        </small>
      )}
    </>
  )
}

// Normalizes the curated deathAge string into a renderable "Aged ..." line.
// "68" -> "Aged 68"; "about 66" / "c. 62" -> "Aged about 66/62"; "probably
// over 70" -> "Aged probably over 70". Any value containing "unknown" renders
// nothing. A trailing parenthetical ("c. 68 (traditional chronology; uncertain)")
// becomes secondary text after an em dash. Never computed from the numeric
// `born` field — saga births are stored as pseudo-precise numbers.
function normalizeDeathAge(deathAge) {
  const raw = String(deathAge ?? '').trim()

  if (!raw || /unknown/i.test(raw)) return null

  const parenMatch = raw.match(/^([^(]*?)\s*\(([^)]*)\)\s*$/)
  const main = (parenMatch ? parenMatch[1] : raw).trim()
  const aside = parenMatch ? parenMatch[2].trim() : ''

  let match
  if ((match = main.match(/^(\d{1,3})$/))) {
    return { display: `Aged ${match[1]}`, aside }
  }
  if ((match = main.match(/^(?:about|c\.|circa)\s*(\d{1,3})$/i))) {
    return { display: `Aged about ${match[1]}`, aside }
  }
  if ((match = main.match(/^probably over\s*(\d{1,3})$/i))) {
    return { display: `Aged probably over ${match[1]}`, aside }
  }

  return null
}

// Renders the curated epithets field as the Nicknames fact card content.
// Returns null when the article has no epithets, so the card never renders empty.
function renderEpithets(article) {
  if (!article.epithets?.length) return null

  return (
    <div className="fact-nicknames">
      {article.epithets.map((epithet) => (
        <div className="fact-nickname" key={epithet.name}>
          <span className="fact-nickname-name">{epithet.name}</span>
          {epithet.note && <small>{epithet.note}</small>}
        </div>
      ))}
    </div>
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
    famousArmor: 'weapons-armor',
    house: 'houses',
    dynasty: 'houses',
    order: 'orders'
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
  return asList(article.greatestFeats).map((feat) => ({ title: feat, description: '' }))
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

  // Resolved server-side by `withKingdomLocation` for the 114 locations that name
  // a realm without storing its id. Same exact-name rules as dynasty and realm:
  // a name two locations claim resolves to neither, because a wrong link is
  // worse than a missing one.
  if (article.kingdomLocation?.slug) {
    return <Link to={`/locations/${article.kingdomLocation.slug}`}>{article.kingdom}</Link>
  }

  return article.kingdom
}

function formatDeath(article) {
  const year = article.died ?? 'Unknown'
  // Only meaningful, normalized ages appear — never ", age unknown".
  const normalizedAge = normalizeDeathAge(article.deathAge)
  const age = normalizedAge ? `, ${normalizedAge.display.charAt(0).toLowerCase()}${normalizedAge.display.slice(1)}` : ''
  const cause = article.causeOfDeath ? `, ${article.causeOfDeath}` : ''

  return `${year}${age}${cause}`
}
