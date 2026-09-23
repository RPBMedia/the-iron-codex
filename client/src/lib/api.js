import { foldedTextMap } from './archiveText.js'

const apiBase = '/api'
const apiCollections = {
  people: 'characters',
  'weapons-armor': 'weaponsArmor'
}

/**
 * ⚠️ READ-ONLY ARCHIVE DATA COMES FROM STATIC FILES, NOT THE API (2026-09-23).
 *
 * Every visit used to pull the whole archive — 9.5 MB — through the server
 * function, for the header search box alone, and that pushed the site past
 * Vercel's free 10 GB a month of origin transfer. The build now writes the
 * same data to `/data/` (scripts/build-static-data.mjs), which the CDN serves
 * without ever waking the function:
 *
 *   /data/collections/<collection>.json   cards for an archive page
 *   /data/text/<collection>.json          folded full text, for its search box
 *   /data/articles/<collection>/<id>.json one enriched article
 *   /data/search-index.json               the header search index
 *
 * The API stays as the fallback: `npm run dev` has no build output, and an
 * article reached under an old collection (/locations/teutonic-order) is only
 * resolved server-side. A fallback in production means a file is missing, so
 * it says so in the console.
 */
const dataBase = '/data'
const ARCHIVE_COLLECTIONS = ['events', 'people', 'locations', 'artifacts', 'weapons-armor', 'houses', 'orders', 'civilizations']

async function staticData(path) {
  const response = await fetch(`${dataBase}${path}`)
  // The dev server answers a missing file with the app's index.html and a 200,
  // so the content type is checked as well as the status.
  if (!response.ok || !(response.headers.get('content-type') ?? '').includes('json')) {
    throw new Error(`No static data at ${path}`)
  }
  return response.json()
}

async function staticOr(path, fallback) {
  try {
    return await staticData(path)
  } catch (error) {
    if (import.meta.env?.PROD) console.warn(`[data] ${error.message}; using the API`)
    return fallback()
  }
}

export async function getHomeArticles() {
  return request('/home')
}

/** Card versions of a collection's articles, for an archive page. */
export async function getCollection(collection) {
  return staticOr(`/collections/${collection}.json`, () => request(`/${apiName(collection)}`))
}

/** `{ [id]: folded full text }` for an archive page's search box. */
export async function getCollectionText(collection) {
  return staticOr(`/text/${collection}.json`, async () =>
    foldedTextMap(await request(`/${apiName(collection)}`), collection)
  )
}

export async function getArticle(collection, id) {
  return staticOr(`/articles/${collection}/${encodeURIComponent(id)}.json`, () =>
    request(`/${apiName(collection)}/${id}`)
  )
}

/** The prebuilt header search index. Throws when there is no build output. */
export async function getStaticSearchIndex() {
  return staticData('/search-index.json')
}

function byCollection(values) {
  const [events, people, locations, artifacts, weaponsArmor, houses, orders, civilizations] = values
  return { artifacts, events, locations, people, weaponsArmor, houses, orders, civilizations }
}

/** Cards for every collection, for the full index page. */
export async function getSearchCollections() {
  return byCollection(await Promise.all(ARCHIVE_COLLECTIONS.map(getCollection)))
}

/** Whole articles for every collection. Only the dev fallback for the search index uses this. */
export async function getFullCollections() {
  return byCollection(await Promise.all(ARCHIVE_COLLECTIONS.map((c) => request(`/${apiName(c)}`))))
}

export async function getAuthState() {
  return request('/auth/me')
}

export async function signUpWithPassword(email, password) {
  return request('/auth/signup', {
    method: 'POST',
    body: JSON.stringify({ email, password })
  })
}

export async function signInWithPassword(email, password) {
  return request('/auth/login', {
    method: 'POST',
    body: JSON.stringify({ email, password })
  })
}

export async function logout() {
  return request('/auth/logout', { method: 'POST' })
}

export async function getFavorites() {
  return request('/favorites')
}

export async function getFavoriteIds() {
  return request('/favorites/ids')
}

export async function addFavorite(articleType, articleId) {
  return request('/favorites', {
    method: 'POST',
    body: JSON.stringify({ articleType, articleId })
  })
}

export async function removeFavorite(articleType, articleId) {
  return request(`/favorites/${articleType}/${articleId}`, { method: 'DELETE' })
}

function apiName(collection) {
  return apiCollections[collection] ?? collection
}

async function request(path, options = {}) {
  const response = await fetch(`${apiBase}${path}`, {
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers ?? {})
    },
    ...options
  })

  if (!response.ok) {
    const payload = await response.json().catch(() => null)
    throw new Error(payload?.message ?? `Request failed: ${response.status}`)
  }

  return response.json()
}
