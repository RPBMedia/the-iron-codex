/**
 * Build-time prerendering: one static HTML file per URL, with real metadata.
 *
 * WHY THIS AND NOT THE ALTERNATIVES (Track C M1 decision, 2026-09-08).
 *
 * Before this, `vercel.json` rewrote `/(.*)` to `/index.html`, so all 809 URLs
 * returned the same shell: `<title>The Iron Codex</title>` and an empty `#root`.
 * Three ways to fix that in a Vite SPA:
 *
 *   (a) react-helmet — rejected outright. Twitter, Facebook, Slack, Discord and
 *       LinkedIn run NO JavaScript, so client-side tags fix nothing for sharing.
 *   (b) Runtime injection in the Express function — works, but routes every page
 *       view through a serverless invocation and gives up static edge caching.
 *   (c) This. Prerender at build time.
 *
 * (c) wins on a point specific to this project: `history.json` is already bundled
 * into the deployment via `includeFiles`, so a content change ALREADY requires a
 * redeploy. Prerendering therefore costs nothing in freshness, keeps every page
 * on the CDN, adds no runtime cost, and needs no React SSR.
 *
 * WHAT EACH FILE GETS: title, description, canonical, Open Graph, Twitter card,
 * JSON-LD (typed per collection) and BreadcrumbList — plus the article's real
 * text inside `#root`, so a crawler that never runs JavaScript still reads the
 * article. React's createRoot().render() clears `#root` on mount, so the SPA is
 * byte-for-byte the same experience for a human.
 *
 * ROUTING NOTE. This requires `"cleanUrls": true` in vercel.json, so `/people/x`
 * resolves to `people/x.html`. That resolution appends `.html`, which is why the
 * old `/index` route had to move: `/index` would resolve to the ROOT `index.html`
 * and silently serve the home page's metadata. It is now `/archive`, with a
 * permanent redirect from `/index` so no existing link breaks.
 *
 * The catch-all rewrite is gone, which is what finally makes 404s real: with
 * every valid URL present as a file, anything else falls through to `404.html`,
 * which Vercel serves with an actual 404 status.
 */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
// The SAME enrichment the API applies, imported rather than reimplemented, so a
// prerendered page and a live-fetched page can never disagree.
import { enrichArticle } from '../server/article-enrichment.js'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')
const distDir = path.join(root, 'client', 'dist')
const data = JSON.parse(readFileSync(path.join(root, 'server', 'data', 'history.json'), 'utf8'))

const SITE = 'https://www.theironcodex.org'
const SITE_NAME = 'The Iron Codex'
const TAGLINE = 'A medieval history archive'

const shell = readFileSync(path.join(distDir, 'index.html'), 'utf8')

// --- helpers ---------------------------------------------------------------

const esc = (s) => String(s ?? '')
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;').replace(/'/g, '&#39;')

/** Meta descriptions are truncated by search engines around 155-160 characters. */
const clamp = (s, max = 158) => {
  const text = String(s ?? '').replace(/\s+/g, ' ').trim()
  if (text.length <= max) return text
  const cut = text.slice(0, max)
  const stop = Math.max(cut.lastIndexOf('. '), cut.lastIndexOf(', '), cut.lastIndexOf(' '))
  return `${cut.slice(0, stop > 60 ? stop : max).trim()}…`
}

/** og:image wants an absolute URL. Commons files can be asked for a wide render. */
const absoluteImage = (src) => {
  if (!src) return `${SITE}/android-chrome-512x512.png`
  if (src.startsWith('/')) return `${SITE}${src}`
  if (src.includes('commons.wikimedia.org') && !src.includes('width=')) {
    return `${src}${src.includes('?') ? '&' : '?'}width=1200`
  }
  return src
}

const publicCollection = (c) =>
  c === 'characters' ? 'people' : c === 'weaponsArmor' ? 'weapons-armor' : c

const COLLECTION_LABEL = {
  people: 'People', events: 'Events', locations: 'Locations',
  artifacts: 'Artifacts', 'weapons-armor': 'Weapons & Armor',
  houses: 'Houses', orders: 'Orders'
}

const COLLECTION_BLURB = {
  people: 'Rulers, commanders, churchmen and chroniclers of the medieval world.',
  events: 'Battles, sieges, treaties and turning points from the fifth century to the fifteenth.',
  locations: 'Kingdoms, empires, cities and battlefields of medieval Europe and its frontiers.',
  artifacts: 'Surviving objects, documents and relics of the Middle Ages.',
  'weapons-armor': 'European medieval weapons, armor, shields, helmets, and famous surviving arms.',
  houses: 'The royal and noble dynasties of medieval Europe and its neighbours.',
  orders: 'The military and religious orders of the medieval world.'
}

/** schema.org type per collection. */
const SCHEMA_TYPE = {
  people: 'Person', events: 'Event', locations: 'Place',
  artifacts: 'CreativeWork', 'weapons-armor': 'CreativeWork',
  houses: 'Organization', orders: 'Organization'
}

// --- page assembly ---------------------------------------------------------

function buildHead({ title, description, canonical, image, type = 'website', noindex = false, jsonLd = [] }) {
  const img = absoluteImage(image)
  const tags = [
    `<title>${esc(title)}</title>`,
    `<meta name="description" content="${esc(description)}" />`,
    `<link rel="canonical" href="${esc(canonical)}" />`,
    noindex
      ? '<meta name="robots" content="noindex, follow" />'
      : '<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />',
    `<meta property="og:site_name" content="${esc(SITE_NAME)}" />`,
    `<meta property="og:locale" content="en_GB" />`,
    `<meta property="og:type" content="${esc(type)}" />`,
    `<meta property="og:title" content="${esc(title)}" />`,
    `<meta property="og:description" content="${esc(description)}" />`,
    `<meta property="og:url" content="${esc(canonical)}" />`,
    `<meta property="og:image" content="${esc(img)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(title)}" />`,
    `<meta name="twitter:description" content="${esc(description)}" />`,
    `<meta name="twitter:image" content="${esc(img)}" />`
  ]
  for (const block of jsonLd) {
    // JSON-LD is escaped only for `<`, which is the sole sequence that could end
    // the script element early. Escaping quotes here would corrupt the JSON.
    tags.push(`<script type="application/ld+json">${JSON.stringify(block).replace(/</g, '\\u003c')}</script>`)
  }
  return tags.join('\n    ')
}

/**
 * Real, readable article text inside #root.
 *
 * Deliberately NOT hidden: content behind `display:none` is discounted by search
 * engines, and a reader on a slow connection is better served by unstyled prose
 * than by a blank page. React clears it the moment it mounts.
 */
function buildBody({ heading, lead, sections = [], links = [] }) {
  const out = [`<h1>${esc(heading)}</h1>`]
  if (lead) out.push(`<p>${esc(lead)}</p>`)
  for (const s of sections) {
    if (s.title) out.push(`<h2>${esc(s.title)}</h2>`)
    for (const p of s.paragraphs ?? []) out.push(`<p>${esc(p)}</p>`)
  }
  if (links.length) {
    out.push('<nav><h2>Related</h2><ul>')
    for (const l of links) out.push(`<li><a href="${esc(l.href)}">${esc(l.label)}</a></li>`)
    out.push('</ul></nav>')
  }
  return out.join('\n      ')
}

function writePage(relPath, { head, body, inlineArticle }) {
  // Inlining the article's data is what stops React from replacing the
  // prerendered prose with a loading spinner.
  //
  // Found by the owner testing a page in Search Console's URL Inspection: three
  // of four expected strings were present and the ARTICLE TEXT was not. The raw
  // HTML had 5,107 characters of it — but the tool shows the RENDERED DOM, and
  // React was clearing #root, rendering <LoadingState/>, and only then fetching
  // from /api. Google indexes the rendered result for a JavaScript app, so the
  // page it saw had no content at all.
  //
  // With the data already in the document there is no round-trip and no loading
  // state: React's first render is the finished article. It is also simply
  // faster for real readers, who were all paying for that round-trip too.
  //
  // `<` is escaped because a literal `</script>` inside the JSON would end the
  // element early. JSON.parse decodes it back.
  const dataTag = inlineArticle
    ? `<script id="__ARTICLE__" type="application/json">${JSON.stringify(inlineArticle).replace(/</g, '\\u003c')}</script>\n    `
    : ''
  let html = shell
    .replace(/<title>[^<]*<\/title>/, head)
    .replace('<div id="root"></div>', `${dataTag}<div id="root">\n      ${body}\n    </div>`)
  const file = path.join(distDir, relPath)
  mkdirSync(path.dirname(file), { recursive: true })
  writeFileSync(file, html)
}

// --- 1. detail pages -------------------------------------------------------

const urls = []
let pages = 0

for (const [collection, arr] of Object.entries(data)) {
  if (!Array.isArray(arr)) continue
  const pub = publicCollection(collection)

  for (const a of arr) {
    const url = `${SITE}/${pub}/${a.id}`
    const qualifier = a.title || a.eventType || a.locationType || a.weaponArmorType || COLLECTION_LABEL[pub]
    const title = `${a.name} — ${qualifier} | ${SITE_NAME}`
    const lead = a.summary || (a.overview ?? [])[0] || a.details || ''
    const description = clamp(lead || `${a.name} in ${SITE_NAME}, ${TAGLINE.toLowerCase()}.`)

    const sections = (a.contentSections ?? []).slice(0, 6)
    const related = Object.values(a.relatedEntries ?? {}).flat()
      .filter((r) => r && r.slug && r.type)
      .slice(0, 12)
      .map((r) => ({
        label: r.title ?? r.slug,
        href: `/${{ person: 'people', event: 'events', location: 'locations', artifact: 'artifacts',
                    weaponArmor: 'weapons-armor', house: 'houses', order: 'orders' }[r.type] ?? 'people'}/${r.slug}`
      }))

    const entity = {
      '@context': 'https://schema.org',
      '@type': SCHEMA_TYPE[pub] ?? 'CreativeWork',
      name: a.name,
      description: clamp(lead, 300),
      url,
      ...(a.image ? { image: absoluteImage(a.image) } : {}),
      ...(a.aliases?.length ? { alternateName: a.aliases } : {}),
      isPartOf: { '@type': 'WebSite', name: SITE_NAME, url: SITE }
    }
    if (pub === 'people') {
      if (a.born) entity.birthDate = String(a.born)
      if (a.died) entity.deathDate = String(a.died)
      if (a.title) entity.jobTitle = a.title
    }
    if (pub === 'events' && a.year) entity.startDate = String(a.year)

    const breadcrumbs = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
        { '@type': 'ListItem', position: 2, name: COLLECTION_LABEL[pub] ?? pub, item: `${SITE}/${pub}` },
        { '@type': 'ListItem', position: 3, name: a.name, item: url }
      ]
    }

    writePage(`${pub}/${a.id}.html`, {
      head: buildHead({ title, description, canonical: url, image: a.image, type: 'article', jsonLd: [entity, breadcrumbs] }),
      body: buildBody({ heading: a.name, lead, sections, links: related }),
      inlineArticle: { collection: pub, id: a.id, article: enrichArticle(a, data) }
    })
    urls.push({ loc: url, priority: '0.8' })
    pages++
  }
}

// --- 2. collection index pages --------------------------------------------

for (const [collection, arr] of Object.entries(data)) {
  if (!Array.isArray(arr)) continue
  const pub = publicCollection(collection)
  const url = `${SITE}/${pub}`
  const label = COLLECTION_LABEL[pub] ?? pub
  const description = clamp(`${COLLECTION_BLURB[pub] ?? ''} ${arr.length} articles in ${SITE_NAME}.`)

  // Every article linked from its collection page, so a crawler reaches all 800
  // from nine hub pages without needing the sitemap.
  const links = arr
    .map((a) => ({ label: a.name, href: `/${pub}/${a.id}` }))
    .sort((x, y) => x.label.localeCompare(y.label))

  writePage(`${pub}.html`, {
    head: buildHead({
      title: `${label} — ${SITE_NAME}`,
      description,
      canonical: url,
      image: arr.find((a) => a.image)?.image,
      jsonLd: [{
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: label,
        description,
        url,
        isPartOf: { '@type': 'WebSite', name: SITE_NAME, url: SITE }
      }]
    }),
    body: buildBody({ heading: label, lead: COLLECTION_BLURB[pub], links })
  })
  urls.push({ loc: url, priority: '0.9' })
  pages++
}

// --- 3. home and the archive index ----------------------------------------

const totalArticles = Object.values(data).filter(Array.isArray).reduce((n, a) => n + a.length, 0)
const homeDescription = clamp(
  `${SITE_NAME} is ${TAGLINE.toLowerCase()} of ${totalArticles} researched articles on the people, battles, kingdoms, dynasties and surviving arms of the Middle Ages.`
)

writePage('index.html', {
  head: buildHead({
    title: `${SITE_NAME} — ${TAGLINE}`,
    description: homeDescription,
    canonical: `${SITE}/`,
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: SITE_NAME,
        alternateName: 'Iron Codex',
        description: homeDescription,
        url: SITE,
        potentialAction: {
          '@type': 'SearchAction',
          target: { '@type': 'EntryPoint', urlTemplate: `${SITE}/search?q={search_term_string}` },
          'query-input': 'required name=search_term_string'
        }
      }
    ]
  }),
  body: buildBody({
    heading: SITE_NAME,
    lead: homeDescription,
    links: Object.keys(data).filter((k) => Array.isArray(data[k]))
      .map((k) => ({ label: COLLECTION_LABEL[publicCollection(k)], href: `/${publicCollection(k)}` }))
  })
})
urls.push({ loc: `${SITE}/`, priority: '1.0' })
pages++

// `/archive` replaces `/index`, which could not survive clean-URL resolution.
const archiveLinks = Object.entries(data).filter(([, v]) => Array.isArray(v))
  .flatMap(([k, arr]) => arr.map((a) => ({ label: a.name, href: `/${publicCollection(k)}/${a.id}` })))
  .sort((x, y) => x.label.localeCompare(y.label))

writePage('archive.html', {
  head: buildHead({
    title: `Full index — ${SITE_NAME}`,
    description: clamp(`An A–Z index of all ${totalArticles} articles in ${SITE_NAME}: people, battles, locations, houses, artifacts, weapons and armor.`),
    canonical: `${SITE}/archive`,
    jsonLd: [{
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: `Full index — ${SITE_NAME}`,
      url: `${SITE}/archive`,
      isPartOf: { '@type': 'WebSite', name: SITE_NAME, url: SITE }
    }]
  }),
  body: buildBody({ heading: 'Full index', lead: `Every article in the archive, A to Z.`, links: archiveLinks })
})
urls.push({ loc: `${SITE}/archive`, priority: '0.9' })
pages++

// --- 4. utility routes: reachable, but never indexed -----------------------

const UTILITY = [
  ['search', 'Search', 'Search the archive.'],
  ['login', 'Log in', 'Log in to The Iron Codex.'],
  ['signup', 'Create an account', 'Create an Iron Codex account.'],
  ['favorites', 'Favourites', 'Your saved articles.'],
  ['auth/callback', 'Signing in…', 'Completing sign-in.']
]
for (const [route, label, blurb] of UTILITY) {
  writePage(`${route}.html`, {
    head: buildHead({
      title: `${label} — ${SITE_NAME}`,
      description: blurb,
      canonical: `${SITE}/${route}`,
      noindex: true
    }),
    body: buildBody({ heading: label, lead: blurb })
  })
  pages++
}

// --- 5. a real 404 ---------------------------------------------------------
// Vercel serves this with an actual 404 status once the catch-all rewrite is
// gone, which ends the soft-404-on-every-URL problem found in the M1 audit.
writePage('404.html', {
  head: buildHead({
    title: `Page not found — ${SITE_NAME}`,
    description: 'That page does not exist in the archive.',
    canonical: `${SITE}/404`,
    noindex: true
  }),
  body: buildBody({
    heading: 'Page not found',
    lead: 'That page does not exist in the archive.',
    links: [{ label: 'Full index', href: '/archive' }, { label: 'Home', href: '/' }]
  })
})
pages++

// --- 6. sitemap.xml and robots.txt ----------------------------------------

const today = new Date().toISOString().slice(0, 10)
writeFileSync(path.join(distDir, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  urls.map(({ loc, priority }) =>
    `  <url>\n    <loc>${esc(loc)}</loc>\n    <lastmod>${today}</lastmod>\n    <priority>${priority}</priority>\n  </url>`
  ).join('\n') +
  `\n</urlset>\n`)

// `/api/` is deliberately NOT disallowed, and that is load-bearing.
//
// It WAS disallowed when robots.txt was first written, and it caused Google to
// report "Page cannot be indexed: Soft 404" on /archive. Googlebot obeys
// robots.txt for the subresources a page fetches while rendering, so blocking
// /api/ meant every hub page rendered EMPTY for Google: /archive collapsed from
// 785 links to 1, and /people from a full list to zero characters. Google saw a
// blank page and correctly concluded it was an error page.
//
// Google's guidance is explicit — never block resources needed to render the
// page. The JSON is kept out of the index by an `X-Robots-Tag: noindex` header
// on /api responses instead, which is the correct mechanism: it permits
// fetching while forbidding indexing. robots.txt cannot express that.
writeFileSync(path.join(distDir, 'robots.txt'),
  `# ${SITE_NAME}\n` +
  `# /api/ is intentionally crawlable: the pages fetch it to render, and blocking\n` +
  `# it makes every hub page look like a soft 404. The JSON is kept out of the\n` +
  `# index with an X-Robots-Tag header instead.\n` +
  `User-agent: *\nAllow: /\n\n` +
  `Disallow: /search\nDisallow: /login\nDisallow: /signup\n` +
  `Disallow: /favorites\nDisallow: /auth/\n\n` +
  `Sitemap: ${SITE}/sitemap.xml\n`)

console.log(`prerendered ${pages} pages`)
console.log(`sitemap.xml: ${urls.length} indexable URLs`)
console.log(`robots.txt written`)
