import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import LoadingState from '../components/LoadingState.jsx'
import { useDocumentTitle } from '../lib/useDocumentTitle.js'
import { pageTitle, utilityLabel } from '../lib/pageTitles.js'
import { useAuth } from '../lib/auth.jsx'
import {
  CAMERA_PRESETS,
  MAP_IS_ADMIN_ONLY,
  CANVAS,
  FIRST_YEAR,
  LAND_URL,
  LAST_YEAR,
  SNAPSHOT_YEARS,
  VIEW_HEIGHT,
  VIEW_WIDTH,
  articleHref,
  evidenceSentence,
  nextSnapshot,
  parseTypedYear,
  panView,
  pathsForFeature,
  presetById,
  previousSnapshot,
  resolveSnapshot,
  snapshotUrl,
  viewBoxString,
  viewFromBounds,
  yearFromParam,
  zoomView
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
 * Polity fills. A small, flat, earthy set — these are territories, not categories,
 * and the map should look like the rest of the Codex rather than like a pie chart.
 *
 * Mid-toned rather than dark: since Option D the map sits on a pale sea over a
 * paper-toned land layer, so these have to carry against a light ground, and the
 * dark ink stroke between them does the separating that darkness used to.
 *
 * Colour never carries meaning here. It separates neighbours and nothing else —
 * every frontier in this data is "approximate" and says so in the legend, and every
 * polygon's name, status and link are in the panel and the list. The brief forbids
 * expressing authority or confidence in colour alone, so we express none in colour
 * at all.
 */
const FILLS = [
  '#b5795e', '#7f9270', '#9c6a64', '#6f83a0', '#b39a52',
  '#8a8178', '#9c7f90', '#6b9078', '#b08a3e', '#8089a3'
]

/**
 * How long a snapshot takes to cross-fade into the next, in milliseconds.
 *
 * Short on purpose. Scrubbing crosses keyframes in quick succession, and anything
 * slower reads as the map lagging behind the slider rather than as a transition.
 * Under `prefers-reduced-motion` the site-wide block at the end of styles.css
 * clamps the animation to 0.01ms, so this becomes an instant swap for free.
 */
const FADE_MS = 260

/** Stable per-name colour, so a polity keeps its fill across snapshots. */
function fillFor(name) {
  let hash = 0
  for (let i = 0; i < name.length; i++) hash = (hash * 31 + name.charCodeAt(i)) >>> 0
  return FILLS[hash % FILLS.length]
}

export default function MapPage() {
  const { isAdmin, isLoading: authLoading } = useAuth()

  // TEMPORARY, owner instruction 2026-09-20: the map is under construction and
  // readers should not meet a half-built feature. Removal is described at
  // MAP_IS_ADMIN_ONLY in ../lib/historicalMap.js.
  //
  // This returns the same "not found" wording the 404 route uses rather than
  // "you are not allowed", because a refusal tells a stranger there is something
  // here — and the point is tidiness, not a locked door. The real guard for
  // /api/insights does the same thing for the same reason.
  //
  // The map is a separate component rather than an early return inside one, so
  // that its dozen hooks are never conditionally skipped. Returning early above
  // `useState` in a single component would change the hook order between the
  // admin's render and everyone else's, which React rejects outright.
  if (MAP_IS_ADMIN_ONLY && authLoading) return <LoadingState label="Loading" />
  if (MAP_IS_ADMIN_ONLY && !isAdmin) return <MapNotFound />

  return <MapPageContent />
}

/** Byte-for-byte the wording of the catch-all route in App.jsx. */
function MapNotFound() {
  useDocumentTitle(pageTitle('Page not found'))
  return (
    <section className="content-section page-section">
      <div className="empty-state">
        <p className="eyebrow">Lost manuscript</p>
        <h1>Page not found</h1>
        <p>That page does not exist in the archive.</p>
      </div>
    </section>
  )
}

export function MapPageContent() {
  useDocumentTitle(pageTitle(utilityLabel('map')))

  const [searchParams, setSearchParams] = useSearchParams()
  const year = yearFromParam(searchParams.get('year'))
  const selectedName = searchParams.get('polity')

  /*
   * Layers, not a single snapshot, so the map can cross-fade when the year crosses
   * a keyframe (owner choice, 2026-09-20). Newest last; usually one entry, briefly
   * two while the old one fades out.
   *
   * WHOLE LAYERS ONLY. Appendix F forbids vertex interpolation and it is not
   * squeamishness: a border that slides from one shape to another draws a conquest
   * that did not happen that way, on a map whose entire argument is that it shows
   * only what a source dated. Two stacked groups changing opacity make no claim
   * about what happened in between.
   */
  const [layers, setLayers] = useState([])
  const fadeTimer = useRef(null)
  const snapshot = layers.length ? layers[layers.length - 1].data : null

  /*
   * Whether a map has ever been on screen. This is what stops the flicker the
   * owner found crossing 800 to 790: the first visit to an uncached year used to
   * set status to 'loading', which unmounts the whole map block — so the map
   * vanished, the spinner appeared, and then a fresh map faded in from nothing.
   * The fade was working; it was fading in over a hole.
   *
   * With a map already up, a later fetch leaves it alone and the new layer simply
   * cross-fades in when it lands. The spinner is only ever for the first load,
   * when there is genuinely nothing to look at.
   */
  const hasShownMap = useRef(false)
  const [isFetching, setIsFetching] = useState(false)

  const [land, setLand] = useState(null)
  const [status, setStatus] = useState('loading')
  const [query, setQuery] = useState('')
  const [hover, setHover] = useState(null)

  /*
   * The typed year is a draft until it is committed, and that is the whole trick.
   * Bound straight to the year, typing "1147" would pass through 1, 11 and 114 —
   * each one clamped to 476 and each one fetching a snapshot — so the map would
   * lurch to the start of the period between keystrokes. The draft commits on Enter
   * and on blur instead.
   */
  const [yearDraft, setYearDraft] = useState(String(year))
  useEffect(() => setYearDraft(String(year)), [year])

  // The camera. The preset lives in the URL so a view is shareable — "look at the
  // Holy Land in 1200" is a link — while free panning and zooming stay transient,
  // because a query string that changes on every drag makes the back button useless.
  const presetId = searchParams.get('view') ?? 'canvas'
  const [view, setView] = useState(() => viewFromBounds(presetById(presetId).bounds))
  const svgRef = useRef(null)
  const drag = useRef(null)
  const dragEnded = useRef(false)

  useEffect(() => {
    setView(viewFromBounds(presetById(presetId).bounds))
  }, [presetId])

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

  // The coastline never changes, so it is fetched once and is not part of the
  // year's loading state: a slow land layer must not hold up the politics, and a
  // failed one must not blank the map. Worst case the map looks as it did before
  // the layer existed.
  useEffect(() => {
    const controller = new AbortController()
    fetch(LAND_URL, { signal: controller.signal })
      .then((response) => (response.ok ? response.json() : null))
      .then((data) => data && setLand(data))
      .catch(() => {})
    return () => controller.abort()
  }, [])

  /**
   * Put a snapshot on screen, fading out whatever was there.
   *
   * The timer is cleared on every call, so scrubbing fast through several keyframes
   * does not queue a stack of fades — each change replaces the one in flight and
   * only the newest pair is ever on screen. Without that, dragging from 500 to 1400
   * leaves ten layers stacked at partial opacity and the map turns to mud.
   */
  const showLayer = useCallback((key, data) => {
    if (data) hasShownMap.current = true
    setLayers((prev) => {
      const current = prev[prev.length - 1]
      if (current && current.key === key) return prev
      return current ? [current, { key, data }] : [{ key, data }]
    })
    window.clearTimeout(fadeTimer.current)
    fadeTimer.current = window.setTimeout(() => setLayers((prev) => prev.slice(-1)), FADE_MS)
  }, [])

  useEffect(() => () => window.clearTimeout(fadeTimer.current), [])

  useEffect(() => {
    if (evidenceYear === null) {
      // Before the first source date. Fade the politics away rather than blanking
      // them, so moving off the edge of the evidence reads as the same gesture as
      // moving between two snapshots.
      showLayer('none', null)
      setStatus('ready')
      return undefined
    }
    const cached = cache.current.get(evidenceYear)
    if (cached) {
      showLayer(evidenceYear, cached)
      setStatus('ready')
      return undefined
    }

    // Rapid scrubbing fires a request per keyframe crossed. Without the abort the
    // slowest response wins rather than the newest, and the map settles on a year
    // the reader has already left.
    const controller = new AbortController()
    // Only blank the page when there is nothing to blank. With a map already up,
    // the old one stays put and the new one cross-fades in on arrival.
    if (!hasShownMap.current) setStatus('loading')
    setIsFetching(true)
    fetch(snapshotUrl(evidenceYear), { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error(`snapshot ${evidenceYear}: ${response.status}`)
        return response.json()
      })
      .then((data) => {
        cache.current.set(evidenceYear, data)
        showLayer(evidenceYear, data)
        setStatus('ready')
        setIsFetching(false)
      })
      .catch((error) => {
        if (error.name === 'AbortError') return
        setIsFetching(false)
        // A failed refetch keeps the map that is already on screen. Replacing a
        // working 800 with an error panel because 700 timed out would lose more
        // than it reports.
        if (!hasShownMap.current) setStatus('error')
      })
    return () => controller.abort()
  }, [evidenceYear, showLayer])

  /*
   * Preload the neighbouring source dates once the page is idle.
   *
   * The cross-fade only looks like a transition when the geometry is already in
   * hand; otherwise there is a network round trip in the middle of it and the
   * fade starts late. Scrubbing almost always goes to an adjacent keyframe, so
   * fetching those two ahead removes the wait in the common case.
   *
   * `requestIdleCallback` so this never competes with the snapshot actually being
   * looked at, with a timeout fallback for Safari, which still lacks it.
   */
  useEffect(() => {
    if (evidenceYear === null) return undefined
    const neighbours = [previousSnapshot(evidenceYear), nextSnapshot(evidenceYear)].filter(
      (y) => y !== null && !cache.current.has(y)
    )
    if (!neighbours.length) return undefined

    let cancelled = false
    const controller = new AbortController()
    const run = () => {
      for (const y of neighbours) {
        if (cancelled) return
        fetch(snapshotUrl(y), { signal: controller.signal })
          .then((response) => (response.ok ? response.json() : null))
          .then((data) => data && cache.current.set(y, data))
          .catch(() => {})
      }
    }

    const idle = window.requestIdleCallback
    const handle = idle ? idle(run, { timeout: 2000 }) : window.setTimeout(run, 400)
    return () => {
      cancelled = true
      controller.abort()
      if (idle) window.cancelIdleCallback?.(handle)
      else window.clearTimeout(handle)
    }
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

  // Search over the list, not over the map. With 70 polities at 1100 the list is a
  // scroll box, and a reader who knows the name should not have to hunt for it.
  const visiblePolities = useMemo(() => {
    const q = query.trim().toLowerCase()
    return q ? polities.filter((p) => p.name.toLowerCase().includes(q)) : polities
  }, [polities, query])

  /* --- Camera gestures ---------------------------------------------------
     Hand-rolled because the renderer is plain SVG. It is about sixty lines,
     which was the trade recorded when MapLibre was turned down, and it buys
     back the ~230 KB gzip that would otherwise land on all 923 article pages.

     Pointer events rather than mouse events, so a touch drag works with the
     same code path; pointer capture so a drag that leaves the SVG still
     tracks. */
  const clientToView = (event) => {
    const rect = svgRef.current?.getBoundingClientRect()
    if (!rect) return null
    return {
      x: view.x + ((event.clientX - rect.left) / rect.width) * view.w,
      y: view.y + ((event.clientY - rect.top) / rect.height) * view.h
    }
  }

  const onPointerDown = (event) => {
    // Only a plain primary-button drag pans. A click on a polygon has to keep
    // selecting it, so the drag is only treated as a pan once it actually moves.
    if (event.button !== 0) return
    drag.current = { startX: event.clientX, startY: event.clientY, view, moved: false }
    svgRef.current?.setPointerCapture?.(event.pointerId)
  }

  const onPointerMove = (event) => {
    const rect = svgRef.current?.getBoundingClientRect()
    const d = drag.current

    if (d && rect) {
      const dx = ((event.clientX - d.startX) / rect.width) * d.view.w
      const dy = ((event.clientY - d.startY) / rect.height) * d.view.h
      if (d.moved || Math.hypot(dx, dy) >= 2) {
        d.moved = true
        setHover(null)
        setView(panView(d.view, -dx, -dy))
        return
      }
    }

    /*
     * The hover tooltip. Mouse only: a touch "hover" is just the moment before a
     * tap, and a tooltip that appears under a finger and then vanishes is noise.
     *
     * This is an enhancement and never the only way to identify a territory — the
     * list, the panel and each path's own aria-label all carry the name, which is
     * what a keyboard or screen-reader user actually uses.
     */
    if (event.pointerType !== 'mouse' || !rect) return
    const name = event.target?.getAttribute?.('data-polity')
    if (!name) {
      setHover(null)
      return
    }
    setHover({ name, x: event.clientX - rect.left, y: event.clientY - rect.top })
  }

  const onPointerUp = (event) => {
    svgRef.current?.releasePointerCapture?.(event.pointerId)
    // Leave `moved` readable for one click cycle: the polygon's onClick fires
    // after this, and a pan that ended over a territory must not select it.
    const d = drag.current
    drag.current = null
    if (d?.moved) {
      dragEnded.current = true
      window.setTimeout(() => {
        dragEnded.current = false
      }, 0)
    }
  }

  const onWheel = (event) => {
    event.preventDefault()
    setView(zoomView(view, event.deltaY > 0 ? 1.15 : 1 / 1.15, clientToView(event)))
  }

  const zoomBy = (factor) => setView(zoomView(view, factor))
  const resetCamera = () => setView(viewFromBounds(presetById(presetId).bounds))
  const isZoomed = Math.abs(view.w - viewFromBounds(presetById(presetId).bounds).w) > 1

  /**
   * Commit a typed year. Anything unusable snaps back to the year in the URL rather
   * than to a default: a reader who typed "abc" over 1147 meant to change it, not to
   * be sent to 1100.
   */
  const commitYear = (raw) => {
    const parsed = parseTypedYear(raw)
    if (parsed === null) {
      setYearDraft(String(year))
      return
    }
    setYearDraft(String(parsed))
    if (parsed !== year) updateQuery({ year: parsed })
  }

  // A pan that happens to end over a territory must not select it.
  const select = (name) => {
    if (dragEnded.current) return
    updateQuery({ polity: name })
  }
  const clearSelection = () => updateQuery({ polity: null })

  const previous = previousSnapshot(year)
  const next = nextSnapshot(year)

  return (
    // Both classes on ONE element, as every other page does it. `.page-section`
    // sets a width but no auto margin — the centring comes from `.content-section`,
    // so nesting them leaves the page flush left and drags the full-bleed dark band
    // off centre with it.
    <section className="content-section page-section map-page">
      {/*
        Option D, chosen by the owner 2026-09-20. The title and the controls sit on
        the dark band the rest of the site already uses as a hero; the map and its
        panel sit below on the normal light ground. The page was previously dark all
        the way down, which the owner found too heavy — and a dark page made the map
        itself read as a black void rather than as a map.
      */}
      <div className="map-hero">
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
            {/*
              The year is typed as well as dragged. 977 years on a slider is about
              two years per pixel on a laptop, so landing on 1187 exactly is a
              pixel-hunt; this makes every year in the period reachable directly.
              The two controls share one value and the slider stays primary.
            */}
            <input
              className="map-year-value"
              type="number"
              inputMode="numeric"
              min={FIRST_YEAR}
              max={LAST_YEAR}
              step={1}
              value={yearDraft}
              aria-label="Year, type to jump"
              onChange={(event) => setYearDraft(event.target.value)}
              onBlur={() => commitYear(yearDraft)}
              onKeyDown={(event) => {
                if (event.key === 'Enter') {
                  event.preventDefault()
                  commitYear(yearDraft)
                  event.currentTarget.blur()
                }
                if (event.key === 'Escape') setYearDraft(String(year))
              }}
            />
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
            {/*
              A background fetch is quiet but not silent. The map stays on screen
              while it runs, so without this line a slow connection looks like the
              map ignoring the year you chose.
            */}
            {isFetching && status === 'ready' && (
              <p className="map-evidence-fetching">Fetching the {evidenceYear} reconstruction…</p>
            )}
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
              {/*
                Camera controls. The presets are the brief's, and they are buttons
                rather than a select so that reaching the Holy Land is one tap on a
                phone. Zoom and reset are buttons too: wheel and drag are the
                enhancement, and neither is reachable from a keyboard.
              */}
              <div className="map-camera">
                <div className="map-presets" role="group" aria-label="Camera presets">
                  {CAMERA_PRESETS.map((preset) => (
                    <button
                      key={preset.id}
                      type="button"
                      className={`map-preset${preset.id === presetId ? ' is-active' : ''}`}
                      aria-pressed={preset.id === presetId}
                      onClick={() => updateQuery({ view: preset.id === 'canvas' ? null : preset.id })}
                    >
                      {preset.label}
                    </button>
                  ))}
                </div>
                <div className="map-zoom" role="group" aria-label="Zoom">
                  <button type="button" onClick={() => zoomBy(1 / 1.4)} aria-label="Zoom in">+</button>
                  <button type="button" onClick={() => zoomBy(1.4)} aria-label="Zoom out">&minus;</button>
                  <button type="button" onClick={resetCamera} disabled={!isZoomed}>Reset</button>
                </div>
              </div>

              {/*
                The tooltip is positioned against THIS wrapper, not against the
                figure. The camera controls live in the figure above the map, so
                measuring from the figure put every tooltip a preset-row's height
                too high — and the presets wrap to two rows at some widths, so the
                error changed with the window. The wrapper hugs the SVG, so the
                coordinates from its bounding rect and the tooltip's origin agree.
              */}
              <div className="map-canvas">
              <svg
                ref={svgRef}
                viewBox={viewBoxString(view)}
                className="map-svg"
                role="group"
                aria-label={
                  evidenceYear === null
                    ? `No mapped political geography for ${year}`
                    : `Political geography reconstructed for ${evidenceYear}`
                }
                onPointerDown={onPointerDown}
                onPointerMove={onPointerMove}
                onPointerUp={onPointerUp}
                onPointerCancel={onPointerUp}
                onPointerLeave={() => setHover(null)}
                onWheel={onWheel}
              >
                {/* Sized to the whole canvas, not the camera, so panning never
                    reveals an unpainted edge beyond the sea. */}
                <rect x="0" y="0" width={VIEW_WIDTH} height={VIEW_HEIGHT} className="map-sea" />
                {/*
                  Physical coastline, under everything. Without it the sea and the
                  ground nobody has mapped are the same colour, so the Mediterranean,
                  the Atlantic and the Sahara all read as holes in the world — which
                  says the land was not there, rather than that we do not know who
                  held it. It carries no political information and is never
                  selectable.
                */}
                {land?.features.map((feature, index) =>
                  pathsForFeature(feature).map((d, part) => (
                    <path key={`land-${index}-${part}`} d={d} className="map-land" aria-hidden="true" />
                  ))
                )}
                {/*
                  One group per layer. `key` is the evidence year, so React mounts a
                  fresh group when the year changes and the CSS animation actually
                  runs — reusing the node would leave it at its finished opacity and
                  nothing would fade.

                  Only the newest layer is interactive. The one fading out is inert
                  and aria-hidden: half-transparent Byzantium from the year you just
                  left should not be clickable, focusable, or announced.
                */}
                {layers.map((layer, layerIndex) => {
                  const isCurrent = layerIndex === layers.length - 1
                  return (
                    <g
                      key={layer.key}
                      className={`map-layer${isCurrent ? '' : ' is-leaving'}`}
                      aria-hidden={isCurrent ? undefined : 'true'}
                    >
                      {layer.data?.features.map((feature, index) => {
                        const { name } = feature.properties
                        const isSelected = isCurrent && name === selectedName
                        // One path per polygon, never one per feature — see
                        // pathsForFeature. Only the first is a tab stop: a polity
                        // with nine islands should be one stop through the map,
                        // not nine.
                        return pathsForFeature(feature).map((d, part) => (
                          <path
                            key={`${name}-${index}-${part}`}
                            d={d}
                            data-polity={isCurrent ? name : undefined}
                            className={`map-polity${isSelected ? ' is-selected' : ''}`}
                            style={{ fill: fillFor(name) }}
                            tabIndex={isCurrent && part === 0 ? 0 : -1}
                            role={isCurrent && part === 0 ? 'button' : 'presentation'}
                            aria-pressed={isCurrent && part === 0 ? isSelected : undefined}
                            aria-label={isCurrent && part === 0 ? name : undefined}
                            aria-hidden={isCurrent && part === 0 ? undefined : 'true'}
                            onClick={isCurrent ? () => select(name) : undefined}
                            onKeyDown={(event) => {
                              if (!isCurrent) return
                              if (event.key === 'Enter' || event.key === ' ') {
                                event.preventDefault()
                                select(name)
                              }
                              if (event.key === 'Escape') clearSelection()
                            }}
                          />
                        ))
                      })}
                    </g>
                  )
                })}
              </svg>

              {/*
                Offset from the pointer rather than centred on it, so it never covers
                the territory it is naming, and flipped near the right edge so it
                never leaves the figure. `aria-hidden` because it duplicates the
                path's own aria-label — announcing it twice helps nobody.
              */}
              {hover && (
                <div
                  className={`map-tooltip${hover.x > 0.72 * (svgRef.current?.clientWidth ?? 0) ? ' flip' : ''}`}
                  style={{ left: `${hover.x}px`, top: `${hover.y}px` }}
                  aria-hidden="true"
                >
                  {hover.name}
                </div>
              )}
              </div>
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
                <label className="map-list-search">
                  <span>Find a polity</span>
                  <input
                    type="search"
                    value={query}
                    placeholder={`Find among ${polities.length}`}
                    onChange={(event) => setQuery(event.target.value)}
                  />
                </label>
                <p className="map-list-count" aria-live="polite">
                  {query.trim()
                    ? `${visiblePolities.length} of ${polities.length} match`
                    : `${polities.length} polities`}
                </p>
                <ul>
                  {visiblePolities.map((polity) => (
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
    </section>
  )
}
