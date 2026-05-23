import express from 'express'
import cors from 'cors'
import { readFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const app = express()
const port = process.env.PORT || 4000
const clientDist = path.join(__dirname, '..', 'client', 'dist')

app.use(cors())
app.use(express.json())

const data = JSON.parse(
  await readFile(path.join(__dirname, 'data', 'history.json'), 'utf-8')
)

const collections = {
  events: data.events,
  characters: data.characters,
  locations: data.locations,
  artifacts: data.artifacts
}

const flattenArticles = () =>
  Object.entries(collections).flatMap(([collection, items]) =>
    items.map((item) => ({ ...item, collection }))
  )

const sortChronologically = (items) =>
  [...items].sort((a, b) => (a.year ?? a.born ?? 0) - (b.year ?? b.born ?? 0))

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', scope: 'Medieval Europe, 476-1453' })
})

app.get('/api/home', (_req, res) => {
  const shuffled = flattenArticles().sort(() => Math.random() - 0.5)
  res.json(shuffled.slice(0, 3))
})

app.get('/api/:collection', (req, res) => {
  const items = collections[req.params.collection]

  if (!items) {
    return res.status(404).json({ message: 'Collection not found' })
  }

  res.json(req.params.collection === 'events' ? sortChronologically(items) : items)
})

app.get('/api/:collection/:id', (req, res) => {
  const items = collections[req.params.collection]

  if (!items) {
    return res.status(404).json({ message: 'Collection not found' })
  }

  const article = items.find((item) => item.id === req.params.id)

  if (!article) {
    return res.status(404).json({ message: 'Article not found' })
  }

  res.json(article)
})

app.use(express.static(clientDist))

app.use((_req, res) => {
  res.sendFile(path.join(clientDist, 'index.html'))
})

app.listen(port, () => {
  console.log(`Medieval History API running on http://localhost:${port}`)
})
