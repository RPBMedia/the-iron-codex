import { useEffect } from 'react'
import { useLocation, useNavigationType } from 'react-router-dom'

export default function ScrollToTop() {
  const { pathname } = useLocation()
  const navigationType = useNavigationType()

  useEffect(() => {
    // On POP (browser back/forward), let archive list pages restore their own
    // saved scroll position. Only force the top for new (PUSH/REPLACE) navigations,
    // and jump instantly so `html { scroll-behavior: smooth }` doesn't animate it.
    if (navigationType === 'POP') return
    try {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    } catch {
      window.scrollTo(0, 0)
    }
    // Reset every candidate scroller (some CSS configs scroll body, not window).
    if (document.documentElement) document.documentElement.scrollTop = 0
    if (document.body) document.body.scrollTop = 0
  }, [pathname, navigationType])

  return null
}
