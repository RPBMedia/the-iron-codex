import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import LoadingState from '../components/LoadingState.jsx'
import { useDocumentTitle } from '../lib/useDocumentTitle.js'
import { pageTitle, utilityLabel } from '../lib/pageTitles.js'
import {
  CANVAS,
  FIRST_YEAR,
  LAST_YEAR,
  SNAPSHOT_YEARS,
  VIEW_HEIGHT,
  VIEW_WIDTH,
  articleHref,
  evidenceSentence,
  nextSnapshot,
  pathsForFeature,
  previousSnapshot,
  resolveSnapshot,
  snapshotUrl,
  yearFromParam
} from '../lib/historicalMap.js'

/**
 * The interactive historical map (QUEUE 0v).
 *
 * Inline SVG rather than a mapping library, and the reasons are in QUEUE.md: the
 * render gate runs the real component tree through Node and MapLibre's WebGL would
 * break it, the app has no code splitting so a library lands on all 923 article
 * pages, and an SVG path is a focusable DOM node where a canvas polygon is not.
 *
 * The thing this page has to get right is not the rendering. It is never implying
 * that a year on the slider is a year we have evidence for. The year and the
 * evidence date are two separate readouts that are never merged, and the sentence
 * between them comes from `evidenceSentence` so that a test can read it.
 */

/**
 * Polity fills. Deliberately a small, flat, restrained set drawn from the site's own
 * near-black/brass/ivory range rather than a rainbow: these are territories, not
 * categories, and the map should look like the rest of the Codex.
 *
 * Colour never carries meaning here. It separates neighbours and nothing else —
 * every frontier in this data is "approximate" and says so in the legend, and every
 * polygon's name, status and link are in the panel and the list. The brief forbids
 * expressing authority or confidence in colour alone, so we express none in colour
 * at all.
 */
const FILLS = [
  '#7c5c2a', '#5d6b52', '#6b4a45', '#4f5a6b', '#7a6a3f',
  '#56504a', '#6d5560', '#46604f', '#7b5340', '#5a5f72'
]

/** Stable per-name colour, so a polity keeps its fill across snapshots. */
function fillFor(name) {
  let hash = 0
  for (let i = 0; i < name.length; i++) hash = (hash * 31 + name.charCodeAt(i)) >>> 0
  return FILLS[hash % FILLS.length]
}

export default function MapPage() {
  useDocumentTitle(pageTitle(utilityLabel('map')))

  const [searchParams, setSearchParams] = useSearchParams()
  const year = yearFromParam(searchParams.get('year'))
  const selectedName = searchParams.get('polity')

  const [snapshot, setSnapshot] = useState(null)
  const [status, setStatus] = useState('loading')

  const resolution = useMemo(() => resolveSnapshot(year), [year])
  const evidenceYear = resolution.evidenceYear

  // Snapshots are immutable once built, so a plain in-memory cache is enough and
  // scrubbing back over a year already seen costs nothing.
  const cache = useRef(new Map())

  const updateQuery = useCallback(
    (changes) => {
      const next = new URLSearchParams(searchParams)
      for (const [key, value] of Object.entries(changes)) {
        if (value === null || value === undefined) next.delete(key)
        else next.set(key, String(value))
      }
      setSearchParams(next, { replace: true })
    },
    [searchParams, setSearchParams]
  )

  useEffect(() => {
    if (evidenceYear === null) {
      setSnapshot(null)
      setStatus('ready')
      return undefined
    }
    const cached = cache.current.get(evidenceYear)
    if (cached) {
      setSnapshot(cached)
      setStatus('ready')
      return undefined
    }

    // Rapid scrubbing fires a request per keyframe crossed. Without the abort the
    // slowest response wins rather than the newest, and the map settles on a year
    // the reader has already left.
    const controller = new AbortController()
    setStatus('loading')
    fetch(snapshotUrl(evidenceYear), { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error(`snapshot ${evidenceYear}: ${response.status}`)
        return response.json()
      })
      .then((data) => {
        cache.current.set(evidenceYear, data)
        setSnapshot(data)
        setStatus('ready')
      })
      .catch((error) => {
        if (error.name !== 'AbortError') setStatus('error')
      })
    return () => controller.abort()
  }, [evidenceYear])

  const polities = useMemo(() => {
    if (!snapshot) return []
    const seen = new Map()
    for (const feature of snapshot.features) {
      const { name } = feature.properties
      if (!seen.has(name)) seen.set(name, feature.properties)
    }
    return [...seen.values()].sort((a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: 'base' }))
  }, [snapshot])

  const selected = polities.find((p) => p.name === selectedName) ?? null

  const select = (name) => updateQuery({ polity: name })
  const clearSelection = () => updateQuery({ polity: null })

  const previous = previousSnapshot(year)
  const next = nextSnapshot(year)

  return (
    <div className="map-page page-section">
      <div className="content-section">
        <header className="section-heading map-intro">
          <p className="eyebrow">Historical map</p>
          <h1>The medieval world, as one source reconstructs it</h1>
          <p className="map-lead">
            Choose any year between {FIRST_YEAR} and {LAST_YEAR}. The map shows the nearest dated
            reconstruction at or before that year — never a later one, which would put states on the
            map before they existed. Every frontier here is approximate, and the map says so.
          </p>
        </header>

        <div className="map-controls">
          <div className="map-year">
            <label htmlFor="map-year-input">Year</label>
            <output className="map-year-value" htmlFor="map-year-input">
              {year}
            </output>
            <input
              id="map-year-input"
              type="range"
              min={FIRST_YEAR}
              max={LAST_YEAR}
              step={1}
              value={year}
              list="map-year-ticks"
              aria-valuetext={
                evidenceYear === null
                  ? `${year}, no mapped evidence`
                  : `${year}, map evidence ${evidenceYear}`
              }
              onChange={(event) => updateQuery({ year: event.target.value })}
            />
            <datalist id="map-year-ticks">
              {SNAPSHOT_YEARS.map((y) => (
                <option key={y} value={y} label={String(y)} />
              ))}
            </datalist>
            <div className="map-year-scale" aria-hidden="true">
              <span>{FIRST_YEAR}</span>
              <span>{LAST_YEAR}</span>
            </div>
          </div>

          {/*
            The evidence strip. `aria-live` is polite and the text only changes when
            the KEYFRAME changes, not on every one of 977 year values — otherwise a
            screen reader announces the whole scrub.
          */}
          <div className="map-evidence" aria-live="polite">
            <p className="map-evidence-head">
              {evidenceYear === null ? 'No map evidence' : `Map evidence: ${evidenceYear}`}
            </p>
            <p className="map-evidence-note">{evidenceSentence(year, resolution)}</p>
            <div className="map-jumps">
              <button
                type="button"
                className="button secondary"
                disabled={previous === null}
                onClick={() => updateQuery({ year: previous })}
              >
                ◀ {previous ?? 'No earlier source'}
              </button>
              <button
                type="button"
                className="button secondary"
                disabled={next === null}
                onClick={() => updateQuery({ year: next })}
              >
                {next ?? 'No later source'} ▶
              </button>
            </div>
          </div>
        </div>

        {status === 'loading' && <LoadingState label="Loading the map" />}

        {status === 'error' && (
          <section className="empty-state compact">
            <h2>Could not load the map</h2>
            <p>The geometry for {evidenceYear} did not load. Try again, or choose another year.</p>
          </section>
        )}

        {status === 'ready' && (
          <div className="map-layout">
            <figure className="map-figure">
              <svg
                viewBox={`0 0 ${VIEW_WIDTH} ${VIEW_HEIGHT}`}
                className="map-svg"
                role="group"
                aria-label={
                  evidenceYear === null
                    ? `No mapped political geography for ${year}`
                    : `Political geography reconstructed for ${evidenceYear}`
                }
              >
                <rect x="0" y="0" width={VIEW_WIDTH} height={VIEW_HEIGHT} className="map-sea" />
                {snapshot?.features.map((feature, index) => {
                  const { name } = feature.properties
                  const isSelected = name === selectedName
                  // One path per polygon, never one per feature — see pathsForFeature.
                  // Only the first is a tab stop: a polity with nine islands should
                  // be one stop on the way through the map, not nine.
                  return pathsForFeature(feature).map((d, part) => (
                    <path
                      key={`${name}-${index}-${part}`}
                      d={d}
                      className={`map-polity${isSelected ? ' is-selected' : ''}`}
                      style={{ fill: fillFor(name) }}
                      tabIndex={part === 0 ? 0 : -1}
                      role={part === 0 ? 'button' : 'presentation'}
                      aria-pressed={part === 0 ? isSelected : undefined}
                      aria-label={part === 0 ? name : undefined}
                      aria-hidden={part === 0 ? undefined : 'true'}
                      onClick={() => select(name)}
                      onKeyDown={(event) => {
                        if (event.key === 'Enter' || event.key === ' ') {
                          event.preventDefault()
                          select(name)
                        }
                        if (event.key === 'Escape') clearSelection()
                      }}
                    />
                  ))
                })}
              </svg>
              <figcaption className="map-caption">
                {evidenceYear === null ? (
                  <>Nothing is mapped for {year}. Blank ground means no snapshot covers it.</>
                ) : (
                  <>
                    {polities.length} polities, reconstructed for {evidenceYear}. Every frontier shown
                    is approximate — the source rates all of them at its lowest precision. Dashed
                    edges are a reminder, not a distinction.
                  </>
                )}
              </figcaption>
            </figure>

            <div className="map-side">
              <section className="rail-card map-panel" aria-label="Selected polity">
                {selected ? (
                  <>
                    <p className="eyebrow">Selected</p>
                    <h2>{selected.name}</h2>
                    {selected.subjectTo && <p className="map-panel-meta">Subject to {selected.subjectTo}</p>}
                    {selected.partOf && <p className="map-panel-meta">Part of {selected.partOf}</p>}
                    <p className="map-panel-meta">Shown as it stood in the {evidenceYear} reconstruction.</p>
                    <p className="map-panel-precision">
                      Border precision: approximate. This outline is one reconstruction, not a
                      surveyed frontier.
                    </p>
                    {selected.linkNote && <p className="map-panel-note">{selected.linkNote}</p>}
                    {articleHref(selected) ? (
                      <Link className="read-link" to={articleHref(selected)}>
                        Read the article →
                      </Link>
                    ) : (
                      <p className="map-panel-gap">
                        {selected.gapNote ?? 'No Codex article yet for this polity.'}
                      </p>
                    )}
                    <button type="button" className="button secondary" onClick={clearSelection}>
                      Clear selection
                    </button>
                  </>
                ) : (
                  <>
                    <p className="eyebrow">Selected</p>
                    <p className="map-panel-empty">
                      Choose a territory on the map, or a name from the list below.
                    </p>
                  </>
                )}
              </section>

              {/*
                The list is not a fallback bolted on for accessibility. It is the
                primary way to reach a small territory — on a phone, half of these
                polygons are smaller than a fingertip — and the only way to reach one
                with a keyboard without tabbing through the whole map.
              */}
              <section className="rail-card map-list" aria-label="Polities on this map">
                <p className="eyebrow">On this map</p>
                <ul>
                  {polities.map((polity) => (
                    <li key={polity.name}>
                      <button
                        type="button"
                        className={`map-list-item${polity.name === selectedName ? ' is-selected' : ''}`}
                        onClick={() => select(polity.name)}
                      >
                        <span>{polity.name}</span>
                        {!polity.slug && <span className="map-list-gap">no article</span>}
                      </button>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </div>
        )}

        {/*
          The attribution is not decoration. The owner accepted this GPL-3.0 dataset
          on condition that it is named prominently, and check-seo.mjs asserts this
          text is in the built page so it cannot be dropped by accident.
        */}
        <footer className="map-attribution">
          <p>
            Geometry from{' '}
            <a href="https://github.com/aourednik/historical-basemaps" rel="noreferrer noopener">
              historical-basemaps
            </a>{' '}
            by André Ourednik, licensed <strong>GPL-3.0</strong>. It is a work in progress whose
            author cautions that premodern borders are disputed and overlapping. This map presents
            one reconstruction, not settled fact.
          </p>
          <p className="map-attribution-scope">
            Canvas: {Math.abs(CANVAS.west)}°W to {CANVAS.east}°E, {CANVAS.south}°N to {CANVAS.north}°N.
            Source dates held: {SNAPSHOT_YEARS.join(', ')}. Every other year shows the nearest
            reconstruction before it.
          </p>
        </footer>
      </div>
    </div>
  )
}
