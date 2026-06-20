import { useEffect } from 'react'
import { useLocation, useNavigationType } from 'react-router-dom'

export default function ScrollToTop() {
  const { pathname } = useLocation()
  const navigationType = useNavigationType()

  useEffect(() => {
    // On POP (browser back/forward), let archive list pages restore their own
    // saved scroll position. Only force the top for new (PUSH/REPLACE) navigations.
    if (navigationType === 'POP') return
    window.scrollTo({ top: 0, left: 0 })
  }, [pathname, navigationType])

  return null
}
