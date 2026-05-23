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
