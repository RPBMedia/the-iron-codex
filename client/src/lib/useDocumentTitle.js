import { useEffect } from 'react'

/**
 * Keep the browser tab's title in step with the page on screen.
 *
 * Call it with a title from `pageTitles.js`, never a hand-written string — that
 * module is shared with the prerenderer, and a string written here would drift
 * from the one a full page load serves. A falsy title leaves the current one in
 * place.
 */
export function useDocumentTitle(title) {
  useEffect(() => {
    if (title) document.title = title
  }, [title])
}
