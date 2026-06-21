import { useEffect, useLayoutEffect, useRef } from 'react'
import { useLocation, useNavigationType } from 'react-router-dom'

// Shared archive/list configuration.
// Every lazy-loaded archive list loads items in batches of this size.
export const ARCHIVE_PAGE_SIZE = 20

// Flip to true to trace save/restore in the browser console while debugging.
const DEBUG = false
function log(...args) {
  if (DEBUG && typeof console !== 'undefined') console.log('[archiveScroll]', ...args)
}

// State is keyed by the archive URL (pathname + search) — deterministic, so the
// same archive saves and reads under the same key on return, no matter how you got
// back. Filters/search/sort live in the URL, so they are part of the key.
const STORAGE_PREFIX = 'ironcodex:archive:'
const keyOf = (loc) => `${STORAGE_PREFIX}${loc.pathname}${loc.search}`

export function readArchiveEntryState(location) {
  try {
    const raw = sessionStorage.getItem(keyOf(location))
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

// Merge a partial update into the saved state for a key (never clobbers other
// fields like anchorId / visibleCount / scrollY written elsewhere).
function mergeState(key, partial) {
  let current = {}
  try {
    const raw = sessionStorage.getItem(key)
    current = raw ? JSON.parse(raw) : {}
  } catch {
    current = {}
  }
  try {
    sessionStorage.setItem(key, JSON.stringify({ ...current, ...partial }))
  } catch {
    // sessionStorage unavailable (private mode / quota) — ignore.
  }
}

// Saved state should only be restored when the user navigated BACK/forward (POP),
// not on a fresh visit. (The very first load also reports POP, which is fine — it
// just has nothing saved yet.)
export function getRestorableSnapshot(location, navigationType) {
  if (navigationType !== 'POP') return null
  return readArchiveEntryState(location)
}

// Record which list item was clicked, so we can scroll it back into view on
// return. Call this from the item's click handler (before navigation).
export function rememberArchiveAnchor(location, anchorId) {
  if (anchorId == null) return
  mergeState(keyOf(location), { anchorId: String(anchorId) })
  log('remember-anchor', { key: keyOf(location), anchorId })
}

function cssEscape(value) {
  const str = String(value)
  if (typeof window !== 'undefined' && window.CSS && typeof window.CSS.escape === 'function') {
    return window.CSS.escape(str)
  }
  return str.replace(/["\\\]]/g, '\\$&')
}

// Best-effort document scroll position, robust to which root element scrolls.
function readDocScroll() {
  const de = document.documentElement
  const body = document.body
  return Math.max(window.scrollY || 0, (de && de.scrollTop) || 0, (body && body.scrollTop) || 0)
}

/**
 * Persist and restore archive list position per archive URL so returning from an
 * article lands the user on the item they clicked.
 *
 * Primary mechanism is ANCHOR-based: the clicked item's id is remembered (via
 * rememberArchiveAnchor) and `element.scrollIntoView()` brings it back — this works
 * regardless of which element is the scroll container (window, body, or a div).
 * A pixel scroll position is also saved as a fallback.
 *
 * @param {object}  opts
 * @param {boolean} opts.ready      True once the list has rendered its (restored) items.
 * @param {object} [opts.snapshot]  Serializable extra state to persist (e.g. { visibleCount }).
 */
export function useArchiveStateRestoration({ ready = true, snapshot } = {}) {
  const location = useLocation()
  const navigationType = useNavigationType()
  const key = keyOf(location)

  // Captured once at mount, before any write, so it can't be clobbered.
  const toRestore = useRef(undefined)
  if (toRestore.current === undefined) {
    toRestore.current = getRestorableSnapshot(location, navigationType)
    log('mount', { key, navigationType, toRestore: toRestore.current })
  }
  const didRestore = useRef(false)

  // Persist the snapshot (e.g. { visibleCount }) whenever it changes.
  const snapshotStr = snapshot ? JSON.stringify(snapshot) : ''
  useEffect(() => {
    if (!snapshotStr) return
    mergeState(key, JSON.parse(snapshotStr))
  }, [key, snapshotStr])

  // Persist scroll position (throttled). Capture phase so it fires even if the
  // scroller is a nested element (scroll events don't bubble, but do capture).
  useEffect(() => {
    let timer = null
    const onScroll = (event) => {
      if (timer) return
      timer = window.setTimeout(() => {
        timer = null
        const target = event && event.target
        const top =
          !target || target === document || target === window
            ? readDocScroll()
            : (typeof target.scrollTop === 'number' ? target.scrollTop : readDocScroll())
        mergeState(key, { scrollY: top })
      }, 120)
    }
    window.addEventListener('scroll', onScroll, { capture: true, passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll, { capture: true })
      if (timer) window.clearTimeout(timer)
    }
  }, [key])

  // Restore once the list is ready (so the clicked item is rendered in the DOM).
  useLayoutEffect(() => {
    if (didRestore.current || !ready) return
    didRestore.current = true

    const data = toRestore.current
    if (!data) return

    const apply = () => {
      if (data.anchorId) {
        const el = document.querySelector(`[data-archive-item="${cssEscape(data.anchorId)}"]`)
        if (el) {
          el.scrollIntoView({ block: 'center', behavior: 'instant' })
          return 'anchor'
        }
      }
      if (typeof data.scrollY === 'number' && data.scrollY > 0) {
        window.scrollTo({ top: data.scrollY, left: 0, behavior: 'instant' })
        if (document.documentElement) document.documentElement.scrollTop = data.scrollY
        if (document.body) document.body.scrollTop = data.scrollY
        return 'scroll'
      }
      return null
    }

    const how = apply()
    log('restore', { how, anchorId: data.anchorId, scrollY: data.scrollY })
    // Re-assert across a few frames against late layout shift (images, fonts).
    let frames = 0
    const reassert = () => {
      apply()
      if (++frames < 5) window.requestAnimationFrame(reassert)
    }
    window.requestAnimationFrame(reassert)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ready])
}
