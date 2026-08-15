const apiBase = '/api'
const apiCollections = {
  people: 'characters',
  'weapons-armor': 'weaponsArmor'
}

export async function getHomeArticles() {
  return request('/home')
}

export async function getCollection(collection) {
  return request(`/${apiName(collection)}`)
}

export async function getArticle(collection, id) {
  return request(`/${apiName(collection)}/${id}`)
}

export async function getSearchCollections() {
  const [events, people, locations, artifacts, weaponsArmor, houses] = await Promise.all([
    getCollection('events'),
    getCollection('people'),
    getCollection('locations'),
    getCollection('artifacts'),
    getCollection('weapons-armor'),
    getCollection('houses')
  ])

  return { artifacts, events, locations, people, weaponsArmor, houses }
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
