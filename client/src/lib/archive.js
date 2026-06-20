import { useEffect, useLayoutEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

// Shared archive/list configuration.
// Every lazy-loaded archive list loads items in batches of this size.
export const ARCHIVE_PAGE_SIZE = 20

function storageKey(location) {
  // location.key is unique per browser-history entry, so navigating back/forward
  // returns to the same entry and restores the scroll + loaded state saved for it.
  return `ironcodex:archive:${location.key ?? 'default'}`
}

export function readArchiveEntryState(location) {
  try {
    const raw = sessionStorage.getItem(storageKey(location))
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

function writeArchiveEntryState(location, data) {
  try {
    sessionStorage.setItem(storageKey(location), JSON.stringify(data))
  } catch {
    // sessionStorage can be unavailable (private mode / quota exceeded); ignore.
  }
}

// Persist and restore window scroll position for the current history entry, and
// optionally persist extra list state (e.g. loaded item count) via getState().
// Restoration runs once per mount, after `ready` is true, so the list has been
// rendered (cards use a fixed aspect-ratio, so height is stable before images load).
export function useArchiveScrollRestoration({ ready = true, getState } = {}) {
  const location = useLocation()
  const getStateRef = useRef(getState)
  getStateRef.current = getState
  const didRestore = useRef(false)

  useLayoutEffect(() => {
    if (didRestore.current || !ready) return

    const saved = readArchiveEntryState(location)
    if (saved && typeof saved.scrollY === 'number') {
      window.scrollTo(0, saved.scrollY)
    }
    didRestore.current = true
    // location.key identifies the history entry; ready gates until the list rendered.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ready, location.key])

  useEffect(() => {
    let timer = null

    const save = () => {
      writeArchiveEntryState(location, {
        scrollY: window.scrollY,
        ...(getStateRef.current ? getStateRef.current() : {})
      })
    }

    const onScroll = () => {
      if (timer) return
      timer = window.setTimeout(() => {
        timer = null
        save()
      }, 150)
    }

    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', onScroll)
      if (timer) window.clearTimeout(timer)
      // Save final position when leaving (e.g. clicking into an article).
      save()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.key])
}
