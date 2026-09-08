/**
 * SEO gate: every URL the archive publishes must be prerendered correctly.
 *
 * The M1 audit found all 809 URLs sharing one title and an empty `#root`. This
 * checks the build output so that can never silently return — a new collection,
 * a renamed route or a broken prerender step would otherwise be invisible until
 * something stopped ranking months later.
 *
 * Run it after `npm run build`:  node scripts/check-seo.mjs
 */
import { readFileSync, existsSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')
const dist = path.join(root, 'client', 'dist')
const data = JSON.parse(readFileSync(path.join(root, 'server', 'data', 'history.json'), 'utf8'))

const SITE = 'https://www.theironcodex.org'
const pub = (c) => (c === 'characters' ? 'people' : c === 'weaponsArmor' ? 'weapons-armor' : c)

const findings = []
const fail = (file, message, detail = '') => findings.push({ file, message, detail })

if (!existsSync(dist)) {
  console.error('client/dist does not exist — run `npm run build` first.')
  process.exit(1)
}

const read = (rel) => (existsSync(path.join(dist, rel)) ? readFileSync(path.join(dist, rel), 'utf8') : null)

// --- required non-HTML artefacts ------------------------------------------
const robots = read('robots.txt')
if (!robots) fail('robots.txt', 'missing')
else if (!robots.includes(`Sitemap: ${SITE}/sitemap.xml`)) fail('robots.txt', 'does not point at the sitemap')

const sitemap = read('sitemap.xml')
if (!sitemap) fail('sitemap.xml', 'missing')

const sitemapUrls = new Set([...(sitemap ?? '').matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]))

// Cheap well-formedness checks: a sitemap that fails these is rejected outright
// by Search Console, which is the one consumer that matters.
if (sitemap) {
  if (!sitemap.startsWith('<?xml version="1.0" encoding="UTF-8"?>')) fail('sitemap.xml', 'missing XML declaration')
  if (!sitemap.includes('xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"')) fail('sitemap.xml', 'missing sitemap namespace')
  const opens = (sitemap.match(/<url>/g) ?? []).length
  const closes = (sitemap.match(/<\/url>/g) ?? []).length
  if (opens !== closes) fail('sitemap.xml', `unbalanced <url> elements (${opens} open, ${closes} close)`)
  if (/[<&](?![a-z#]+;|\/?(?:urlset|url|loc|lastmod|priority|\?xml))/i.test(sitemap)) {
    fail('sitemap.xml', 'contains an unescaped & or < in a URL')
  }
}

// --- every article must have its own page ---------------------------------
const GENERIC_TITLE = /<title>The Iron Codex<\/title>/

let checked = 0
for (const [collection, arr] of Object.entries(data)) {
  if (!Array.isArray(arr)) continue
  const p = pub(collection)

  for (const a of arr) {
    const rel = `${p}/${a.id}.html`
    const html = read(rel)
    if (!html) { fail(rel, 'article has no prerendered page'); continue }
    checked++

    const url = `${SITE}/${p}/${a.id}`
    if (GENERIC_TITLE.test(html)) fail(rel, 'still has the generic site title')
    if (!html.includes(`<link rel="canonical" href="${url}" />`)) fail(rel, 'canonical missing or wrong', url)
    if (!/<meta name="description" content="[^"]{40,}"/.test(html)) fail(rel, 'description missing or under 40 chars')
    if (!html.includes('property="og:image"')) fail(rel, 'no og:image — shares would preview blank')
    if (!html.includes('name="twitter:card"')) fail(rel, 'no twitter:card')
    if (!html.includes('application/ld+json')) fail(rel, 'no JSON-LD')
    if (!sitemapUrls.has(url)) fail(rel, 'not listed in sitemap.xml', url)

    // The point of prerendering: a crawler that runs no JavaScript must still
    // read the article. An empty #root means it gets nothing.
    const body = html.match(/<div id="root">([\s\S]*?)<\/div>\s*<\/body>/)?.[1] ?? ''
    if (body.replace(/<[^>]+>/g, '').trim().length < 200) {
      fail(rel, 'less than 200 characters of crawlable text inside #root')
    }
    if (!/<h1>/.test(body)) fail(rel, 'no <h1> in the prerendered body')

    // JSON-LD must parse. A malformed block is silently ignored by Google, so
    // this would otherwise look fine and do nothing.
    for (const m of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
      try { JSON.parse(m[1].replace(/\\u003c/g, '<')) } catch { fail(rel, 'JSON-LD does not parse') }
    }
  }
}

// --- collection hubs, home, archive, 404 and the noindex set --------------
for (const collection of Object.keys(data).filter((k) => Array.isArray(data[k]))) {
  const rel = `${pub(collection)}.html`
  const html = read(rel)
  if (!html) { fail(rel, 'collection page missing'); continue }
  if (!sitemapUrls.has(`${SITE}/${pub(collection)}`)) fail(rel, 'collection page not in sitemap')
  // Each hub must link every article in it, so all 800 are reachable by crawl
  // and not only by sitemap.
  const linked = new Set([...html.matchAll(new RegExp(`href="/${pub(collection)}/([a-z0-9-]+)"`, 'g'))].map((m) => m[1]))
  const missing = data[collection].filter((a) => !linked.has(a.id))
  if (missing.length) fail(rel, `${missing.length} article(s) not linked from their collection page`, missing.slice(0, 3).map((a) => a.id).join(', '))
}

for (const rel of ['index.html', 'archive.html', '404.html']) {
  if (!read(rel)) fail(rel, 'missing')
}
if (read('404.html') && !read('404.html').includes('noindex')) fail('404.html', 'not marked noindex')

for (const rel of ['search.html', 'login.html', 'signup.html', 'favorites.html', 'auth/callback.html']) {
  const html = read(rel)
  if (!html) { fail(rel, 'utility page missing — its route would 404 on direct load'); continue }
  if (!html.includes('content="noindex, follow"')) fail(rel, 'utility page is indexable — it must be noindex')
  if (sitemapUrls.has(`${SITE}/${rel.replace(/\.html$/, '')}`)) fail(rel, 'noindex page is listed in the sitemap')
}

// --- deployment config -----------------------------------------------------
const vercel = JSON.parse(readFileSync(path.join(root, 'vercel.json'), 'utf8'))
if (vercel.cleanUrls !== true) {
  fail('vercel.json', 'cleanUrls must be true or /people/x will not resolve to people/x.html')
}
const catchAll = (vercel.rewrites ?? []).find((r) => r.source === '/(.*)')
if (catchAll && catchAll.destination !== '/api/index') {
  fail('vercel.json', `catch-all rewrites to ${catchAll.destination} — anything but /api/index serves a page with status 200 and reinstates soft 404s`)
}
if (!catchAll) {
  // Without it, Vercel's injected Vite SPA fallback takes over and serves the
  // home page with a 200 for unknown URLs. Verified on production, twice.
  fail('vercel.json', 'no catch-all rewrite — unmatched URLs fall to Vercel\'s injected SPA fallback and return 200')
}

// --- report ----------------------------------------------------------------
if (findings.length) {
  console.error(`SEO check found ${findings.length} issue(s):`)
  for (const f of findings.slice(0, 40)) {
    console.error(`- ${f.file}: ${f.message}${f.detail ? `\n  ${f.detail}` : ''}`)
  }
  if (findings.length > 40) console.error(`... and ${findings.length - 40} more`)
  process.exit(1)
}

console.log(`SEO check passed: ${checked} article pages, ${sitemapUrls.size} sitemap URLs, robots.txt and 404 in place.`)
