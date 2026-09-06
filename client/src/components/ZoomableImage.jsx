import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

/**
 * An article image that opens full-screen when clicked.
 *
 * Article images are letterboxed into a fixed-height frame so the whole object is
 * always visible (see the Weapons & Armor full-object rule). That is correct, but
 * it renders long objects — a lance, a halberd, a war bow — very small. This gives
 * the reader a way to inspect them without leaving the page.
 *
 * The overlay shows the image alone: no caption, no metadata, nothing but the
 * object, so it can be read at the largest size the viewport allows.
 *
 * Closing: the cross at the top-right of the image, clicking the backdrop, or
 * Escape. Body scroll is locked while open so the page behind does not move.
 */
export default function ZoomableImage({ src, alt, onError, className, loading }) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return undefined
    const onKey = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = previousOverflow
    }
  }, [open])

  const openZoom = () => setOpen(true)

  return (
    <>
      <img
        src={src}
        alt={alt}
        className={['zoomable-image', className].filter(Boolean).join(' ')}
        loading={loading}
        onError={onError}
        onClick={openZoom}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault()
            openZoom()
          }
        }}
        role="button"
        tabIndex={0}
        aria-label={alt ? `Enlarge image: ${alt}` : 'Enlarge image'}
      />

      {open &&
        createPortal(
          <div
            className="image-lightbox"
            role="dialog"
            aria-modal="true"
            aria-label={alt || 'Enlarged image'}
            onClick={() => setOpen(false)}
          >
            <div className="image-lightbox-frame" onClick={(event) => event.stopPropagation()}>
              <img className="image-lightbox-img" src={src} alt={alt} />
              <button
                type="button"
                className="image-lightbox-close"
                onClick={() => setOpen(false)}
                aria-label="Close enlarged image"
                autoFocus
              >
                <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <path
                    d="M6 6l12 12M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
          </div>,
          document.body
        )}
    </>
  )
}
