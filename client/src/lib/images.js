export function fallbackImage(article) {
  const name = article?.name ?? 'The Iron Codex'
  const type = article?.type ?? 'article'
  const initials = name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join('')
    .toUpperCase()

  const accent = {
    event: '#b1192a',
    character: '#f2c14e',
    location: '#d7d9dd',
    artifact: '#d7d9dd'
  }[type] ?? '#f2c14e'

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="760" viewBox="0 0 1200 760">
      <defs>
        <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stop-color="#0b0b0d"/>
          <stop offset="0.54" stop-color="#1a1718"/>
          <stop offset="1" stop-color="#3a1118"/>
        </linearGradient>
      </defs>
      <rect width="1200" height="760" fill="url(#bg)"/>
      <path d="M0 586 C255 514 405 642 664 564 C875 500 1008 518 1200 442 L1200 760 L0 760 Z" fill="#070708" opacity="0.58"/>
      <circle cx="600" cy="356" r="236" fill="none" stroke="#d7d9dd" stroke-opacity="0.14" stroke-width="2"/>
      <circle cx="600" cy="356" r="158" fill="${accent}" opacity="0.12"/>
      <path d="M390 505 C480 440 542 430 603 474 C664 430 734 440 810 505" fill="none" stroke="#f5f1e8" stroke-opacity="0.2" stroke-width="14" stroke-linecap="round"/>
      <path d="M390 548 C480 483 542 473 603 517 C664 473 734 483 810 548" fill="none" stroke="#f2c14e" stroke-opacity="0.35" stroke-width="10" stroke-linecap="round"/>
      <text x="80" y="126" fill="#f2c14e" font-family="Inter, Arial, sans-serif" font-size="28" font-weight="900" letter-spacing="0">THE IRON CODEX</text>
      <text x="80" y="640" fill="#f5f1e8" font-family="Inter, Arial, sans-serif" font-size="118" font-weight="900" letter-spacing="0">${escapeSvg(initials)}</text>
    </svg>
  `

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`
}

export function shouldUseFallbackImage(imageElement) {
  const source = imageElement.currentSrc || imageElement.src

  if (source.startsWith('data:image/svg+xml')) {
    return false
  }

  return false
}

function escapeSvg(value) {
  return value.replace(/[&<>"']/g, (char) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&apos;'
  }[char]))
}
