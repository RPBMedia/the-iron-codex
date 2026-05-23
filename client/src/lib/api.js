const apiBase = '/api'
const apiCollections = {
  people: 'characters'
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
  const [events, people, locations, artifacts] = await Promise.all([
    getCollection('events'),
    getCollection('people'),
    getCollection('locations'),
    getCollection('artifacts')
  ])

  return { artifacts, events, locations, people }
}

function apiName(collection) {
  return apiCollections[collection] ?? collection
}

async function request(path) {
  const response = await fetch(`${apiBase}${path}`)

  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`)
  }

  return response.json()
}
