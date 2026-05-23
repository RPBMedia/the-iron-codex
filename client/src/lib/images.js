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
        <linearGradient id="steel" x1="0" x2="1">
          <stop offset="0" stop-color="#8d939f"/>
          <stop offset="0.5" stop-color="#f4f4f4"/>
          <stop offset="1" stop-color="#8d939f"/>
        </linearGradient>
      </defs>
      <rect width="1200" height="760" fill="url(#bg)"/>
      <path d="M0 586 C255 514 405 642 664 564 C875 500 1008 518 1200 442 L1200 760 L0 760 Z" fill="#070708" opacity="0.58"/>
      <path d="M596 122 L634 122 L654 484 L576 484 Z" fill="url(#steel)"/>
      <path d="M596 122 L576 484 L615 450 L654 484 L634 122 Z" fill="${accent}" opacity="0.28"/>
      <rect x="456" y="498" width="318" height="42" rx="2" fill="${accent}"/>
      <rect x="586" y="532" width="58" height="150" fill="url(#steel)"/>
      <rect x="522" y="674" width="186" height="34" rx="4" fill="${accent}"/>
      <circle cx="614" cy="380" r="235" fill="none" stroke="#d7d9dd" stroke-opacity="0.12" stroke-width="2"/>
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

  return imageElement.naturalWidth < 900 || imageElement.naturalHeight < 520
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
