import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { useAuth } from '../lib/auth.jsx'

/**
 * Records a pageview on every route change (Track C M7).
 *
 * Sends only the path and the referring host. No cookie, no stored id, no
 * fingerprint — see server/analytics.js for exactly what is kept.
 *
 * THE ADMIN'S OWN VIEWS ARE NOT COUNTED. The owner is by far the heaviest reader
 * of this site, and counting himself would make every number meaningless for the
 * one question the dashboard exists to answer: is anyone *else* reading it?
 *
 * Failures are swallowed. A missed count must never surface to a reader, and
 * `keepalive` lets the request outlive the navigation that triggered it.
 */
export default function PageViewBeacon() {
  const location = useLocation()
  const { isAdmin, isLoading } = useAuth()
  const lastSent = useRef(null)

  useEffect(() => {
    if (isLoading || isAdmin) return
    const path = location.pathname
    // React can re-run this for the same path (a search-param change, a
    // re-render); one view per path transition is what we mean by a pageview.
    if (lastSent.current === path) return
    lastSent.current = path

    fetch('/api/events/view', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ path, referrer: document.referrer || null }),
      keepalive: true
    }).catch(() => {})
  }, [location.pathname, isAdmin, isLoading])

  return null
}
