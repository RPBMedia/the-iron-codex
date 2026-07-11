import express from 'express'
import cors from 'cors'
import { existsSync, readFileSync, statSync } from 'node:fs'
import { readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { createHmac, randomBytes, scrypt as scryptCallback, timingSafeEqual } from 'node:crypto'
import { promisify } from 'node:util'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const projectRoot = path.join(__dirname, '..')

loadEnvFile(path.join(projectRoot, '.env'))
loadEnvFile(path.join(__dirname, '.env'))

const app = express()
const port = process.env.PORT || 4000
const clientDist = path.join(__dirname, '..', 'client', 'dist')
const usersFile = process.env.AUTH_USERS_FILE || path.join(__dirname, 'data', 'users.json')
const scrypt = promisify(scryptCallback)
const sessionCookieName = 'ironcodex_session'
const sessionMaxAgeSeconds = 60 * 60 * 24 * 7
const authBaseUrl = process.env.AUTH_BASE_URL || `http://localhost:${port}`
const sessionSecret = process.env.AUTH_SESSION_SECRET || randomBytes(32).toString('hex')

if (!process.env.AUTH_SESSION_SECRET && process.env.NODE_ENV === 'production') {
  throw new Error('AUTH_SESSION_SECRET is required in production')
}

function loadEnvFile(filePath) {
  if (!existsSync(filePath)) return

  const lines = readFileSync(filePath, 'utf-8').split(/\r?\n/)

  for (const line of lines) {
    const trimmed = line.trim()

    if (!trimmed || trimmed.startsWith('#')) continue

    const separatorIndex = trimmed.indexOf('=')
    if (separatorIndex === -1) continue

    const key = trimmed.slice(0, separatorIndex).trim()
    let value = trimmed.slice(separatorIndex + 1).trim()

    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1)
    }

    process.env[key] = process.env[key] ?? value
  }
}

app.use(cors({ credentials: true, origin: process.env.CORS_ORIGIN || true }))
app.use(express.json())

const historyDataPath = path.join(__dirname, 'data', 'history.json')
let cachedHistoryData = null
let cachedHistoryMtimeMs = 0

function historyData() {
  const stats = statSync(historyDataPath)

  if (!cachedHistoryData || stats.mtimeMs !== cachedHistoryMtimeMs) {
    cachedHistoryData = JSON.parse(readFileSync(historyDataPath, 'utf-8'))
    cachedHistoryMtimeMs = stats.mtimeMs
  }

  return cachedHistoryData
}

function collections() {
  const data = historyData()

  return {
    events: data.events,
    characters: data.characters,
    locations: data.locations,
    artifacts: data.artifacts,
    weaponsArmor: data.weaponsArmor ?? []
  }
}

const flattenArticles = () =>
  Object.entries(collections()).flatMap(([collection, items]) =>
    items.map((item) => ({ ...item, collection }))
  )

const sortChronologically = (items) =>
  [...items].sort((a, b) => (a.year ?? a.born ?? 0) - (b.year ?? b.born ?? 0))

const publicCollectionName = (collection) => {
  if (collection === 'characters') return 'people'
  if (collection === 'weaponsArmor') return 'weapons-armor'
  return collection
}

const apiCollectionName = (collection) => {
  if (collection === 'people') return 'characters'
  if (collection === 'weapons-armor') return 'weaponsArmor'
  return collection
}

const movedArtifactArticles = {
  joyeuse: 'weaponsArmor',
  'sutton-hoo-helmet': 'weaponsArmor'
}

const publicUser = (user) => ({
  id: user.id,
  email: user.email,
  displayName: user.displayName,
  avatar: user.avatar,
  providers: user.providers ?? [],
  createdAt: user.createdAt
})

const normalizeEmail = (email) => String(email ?? '').trim().toLowerCase()

const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

function validatePassword(password) {
  if (typeof password !== 'string' || password.length < 10) {
    return 'Password must be at least 10 characters.'
  }

  if (!/[a-z]/.test(password) || !/[A-Z]/.test(password) || !/\d/.test(password)) {
    return 'Password must include uppercase, lowercase, and a number.'
  }

  return null
}

async function readUsers() {
  try {
    const users = JSON.parse(await readFile(usersFile, 'utf-8'))
    return Array.isArray(users) ? users : []
  } catch (error) {
    if (error.code === 'ENOENT') {
      return []
    }

    throw error
  }
}

async function writeUsers(users) {
  await writeFile(usersFile, JSON.stringify(users, null, 2) + '\n')
}

async function hashPassword(password) {
  const salt = randomBytes(16).toString('hex')
  const hash = await scrypt(password, salt, 64)

  return { salt, hash: Buffer.from(hash).toString('hex') }
}

async function verifyPassword(password, user) {
  if (!user.passwordHash || !user.passwordSalt) return false

  const candidate = await scrypt(password, user.passwordSalt, 64)
  const stored = Buffer.from(user.passwordHash, 'hex')

  if (stored.length !== candidate.length) return false

  return timingSafeEqual(stored, candidate)
}

function base64Url(input) {
  return Buffer.from(input).toString('base64url')
}

function signPayload(payload) {
  const body = base64Url(JSON.stringify(payload))
  const signature = createHmac('sha256', sessionSecret).update(body).digest('base64url')

  return `${body}.${signature}`
}

function verifySessionToken(token) {
  const [body, signature] = String(token ?? '').split('.')

  if (!body || !signature) return null

  const expected = createHmac('sha256', sessionSecret).update(body).digest('base64url')
  const signatureBuffer = Buffer.from(signature)
  const expectedBuffer = Buffer.from(expected)

  if (signatureBuffer.length !== expectedBuffer.length || !timingSafeEqual(signatureBuffer, expectedBuffer)) {
    return null
  }

  const payload = JSON.parse(Buffer.from(body, 'base64url').toString('utf-8'))

  if (!payload.sub || Date.now() > payload.exp) return null

  return payload
}

function parseCookies(req) {
  return Object.fromEntries(
    String(req.headers.cookie ?? '')
      .split(';')
      .map((cookie) => cookie.trim())
      .filter(Boolean)
      .map((cookie) => {
        const [name, ...value] = cookie.split('=')
        return [name, decodeURIComponent(value.join('='))]
      })
  )
}

function sessionCookie(token) {
  const secure = process.env.NODE_ENV === 'production' ? '; Secure' : ''

  return `${sessionCookieName}=${encodeURIComponent(token)}; HttpOnly; SameSite=Lax; Path=/; Max-Age=${sessionMaxAgeSeconds}${secure}`
}

function clearSessionCookie() {
  const secure = process.env.NODE_ENV === 'production' ? '; Secure' : ''

  return `${sessionCookieName}=; HttpOnly; SameSite=Lax; Path=/; Max-Age=0${secure}`
}

function setSession(res, user) {
  const token = signPayload({
    sub: user.id,
    email: user.email,
    exp: Date.now() + sessionMaxAgeSeconds * 1000
  })

  res.setHeader('Set-Cookie', sessionCookie(token))
}

async function currentUser(req) {
  const token = parseCookies(req)[sessionCookieName]
  const session = verifySessionToken(token)

  if (!session) return null

  const users = await readUsers()
  return users.find((user) => user.id === session.sub) ?? null
}

async function requireUser(req, res, next) {
  const user = await currentUser(req)

  if (!user) {
    return res.status(401).json({ message: 'Log in to access this section.' })
  }

  req.user = user
  next()
}

const eventSortDates = {
  'fall-of-western-rome': { year: 476, month: 9, day: 4 },
  'battle-of-hafrsfjord': { year: 872, month: 1, day: 1 },
  'battle-of-edington': { year: 878, month: 5, day: 12 },
  'battle-of-brunanburh': { year: 937, month: 10, day: 1 },
  'battle-of-mohi': { year: 1241, month: 4, day: 11 },
  'battle-of-stirling-bridge': { year: 1297, month: 9, day: 11 },
  'battle-of-nicopolis': { year: 1396, month: 9, day: 25 },
  'battle-of-varna': { year: 1444, month: 11, day: 10 },
  'battle-of-tours': { year: 732, month: 10, day: 10 },
  'charlemagne-crowned': { year: 800, month: 12, day: 25 },
  'treaty-of-verdun': { year: 843, month: 8, day: 1 },
  'battle-of-stamford-bridge': { year: 1066, month: 9, day: 25 },
  'norman-conquest': { year: 1066, month: 9, day: 28 },
  'battle-of-hastings': { year: 1066, month: 10, day: 14 },
  'battle-of-manzikert': { year: 1071, month: 8, day: 26 },
  'first-crusade-called': { year: 1095, month: 11, day: 27 },
  'battle-of-legnano': { year: 1176, month: 5, day: 29 },
  'third-crusade': { year: 1189 },
  'battle-of-las-navas-de-tolosa': { year: 1212, month: 7, day: 16 },
  'battle-of-bouvines': { year: 1214, month: 7, day: 27 },
  'magna-carta': { year: 1215, month: 6, day: 15 },
  'battle-of-bannockburn': { year: 1314, month: 6, day: 23 },
  'hundred-years-war': { year: 1337 },
  'battle-of-crecy': { year: 1346, month: 8, day: 26 },
  'black-death-europe': { year: 1347 },
  'battle-of-poitiers': { year: 1356, month: 9, day: 19 },
  'battle-of-kosovo': { year: 1389, month: 6, day: 15 },
  'battle-of-grunwald': { year: 1410, month: 7, day: 15 },
  'battle-of-sao-mamede': { year: 1128, month: 6, day: 24 },
  'battle-of-ourique': { year: 1139, month: 7, day: 25 },
  'treaty-of-zamora': { year: 1143, month: 10, day: 5 },
  'siege-of-lisbon': { year: 1147, month: 10, day: 24 },
  'battle-of-agincourt': { year: 1415, month: 10, day: 25 },
  'siege-of-rouen': { year: 1419, month: 1, day: 19 },
  'battle-of-verneuil': { year: 1424, month: 8, day: 17 },
  'siege-of-orleans': { year: 1429, month: 5, day: 8 },
  'battle-of-patay': { year: 1429, month: 6, day: 18 },
  'battle-of-formigny': { year: 1450, month: 4, day: 15 },
  'fall-of-constantinople': { year: 1453, month: 5, day: 29 },
  'battle-of-castillon': { year: 1453, month: 7, day: 17 }
}

function numericYear(value) {
  const match = String(value ?? '').match(/\d{3,4}/)
  return match ? Number(match[0]) : null
}

function chronologicalSortKey(article, publicCollection) {
  if (publicCollection === 'people') {
    return article.born ?? numericYear(article.birth?.date)
  }

  if (publicCollection === 'events') {
    const dateParts = eventSortDates[article.id] ?? { year: article.year }

    return dateParts.year
      ? dateParts.year * 10000 + (dateParts.month ?? 0) * 100 + (dateParts.day ?? 0)
      : null
  }

  return article.year ?? article.born ?? numericYear(article.date ?? article.founded ?? article.established)
}

function articlePreviewFromFavorite(favorite) {
  const requestedCollection = apiCollectionName(favorite.articleType ?? favorite.collection)
  const articleId = favorite.articleId ?? favorite.id
  const collectionName = articleForCollection(requestedCollection, articleId)
  const collection = collections()[collectionName]
  const article = collection?.find((item) => item.id === articleId)

  if (!article) return null

  const publicCollection = publicCollectionName(collectionName)
  const dateSortKey = chronologicalSortKey(article, publicCollection)

  return {
    favoriteId: favorite.id,
    id: article.id,
    articleId: article.id,
    title: article.name,
    type: article.type ?? article.eventType ?? article.locationType ?? publicCollection,
    articleType: publicCollection,
    collection: publicCollection,
    description: article.summary ?? article.details,
    date: article.year ?? article.born,
    dateSortKey,
    image: article.image,
    url: `/${publicCollection}/${article.id}`,
    createdAt: favorite.createdAt
  }
}

function articleIdentity(article) {
  return {
    articleId: article.id,
    articleType: publicCollectionName(article.collection)
  }
}

function articleUrl(article) {
  const identity = articleIdentity(article)

  return `/${identity.articleType}/${identity.articleId}`
}

function articleCard(article) {
  const identity = articleIdentity(article)

  return {
    ...article,
    collection: identity.articleType,
    articleId: identity.articleId,
    articleType: identity.articleType,
    articleUrl: articleUrl(article)
  }
}

function findArticle(articleType, articleId) {
  const requestedCollection = apiCollectionName(articleType)
  const collectionName = articleForCollection(requestedCollection, articleId)
  const article = collections()[collectionName]?.find((item) => item.id === articleId)

  return article ? articleCard({ ...article, collection: collectionName }) : null
}

function articleForCollection(collectionName, articleId) {
  if (collectionName === 'artifacts' && movedArtifactArticles[articleId]) {
    return movedArtifactArticles[articleId]
  }

  return collectionName
}

function favoriteKey(favorite) {
  return `${favorite.articleType}:${favorite.articleId}`
}

function articleKey(article) {
  const identity = articleIdentity(article)

  return `${identity.articleType}:${identity.articleId}`
}

function seededShuffle(items, seed) {
  let state = [...seed].reduce((value, char) => value + char.charCodeAt(0), 0) || 1

  return [...items].sort(() => {
    state = (state * 1664525 + 1013904223) % 4294967296
    return state / 4294967296 - 0.5
  })
}

function todaysSeed(suffix = '') {
  return `${new Date().toISOString().slice(0, 10)}:${suffix}`
}

function takeUnique(items, count, used = new Set()) {
  const picked = []

  for (const item of items) {
    const key = articleKey(item)
    if (used.has(key)) continue
    picked.push(articleCard(item))
    used.add(key)
    if (picked.length === count) break
  }

  return picked
}

function discoverySections() {
  const data = historyData()
  const all = flattenArticles()
  const used = new Set()
  const archive = takeUnique(seededShuffle(all, todaysSeed('all')), 3, used)
  const people = takeUnique(seededShuffle(data.characters.map((item) => ({ ...item, collection: 'characters' })), todaysSeed('people')), 3, used)
  const placesAndRelics = takeUnique(
    seededShuffle(
      [
        ...data.locations.map((item) => ({ ...item, collection: 'locations' })),
        ...data.artifacts.map((item) => ({ ...item, collection: 'artifacts' })),
        ...(data.weaponsArmor ?? []).map((item) => ({ ...item, collection: 'weaponsArmor' }))
      ],
      todaysSeed('places-relics')
    ),
    3,
    used
  )

  return [
    { id: 'archive', eyebrow: 'Discovery', title: 'From the Archive', articles: archive },
    { id: 'people', eyebrow: 'Figures', title: 'People of the Age', articles: people },
    { id: 'places-relics', eyebrow: 'Places, relics, and arms', title: 'Places, Relics, and Arms', articles: placesAndRelics }
  ].filter((section) => section.articles.length)
}

function searchableTerms(article) {
  return [
    article.name,
    article.type,
    article.title,
    article.eventType,
    article.locationType,
    article.location,
    article.kingdom,
    article.conflict,
    article.weaponArmorType,
    article.period,
    article.region,
    article.material,
    article.battlefieldRole,
    article.summary,
    article.details,
    article.quickFacts?.realm,
    article.quickFacts?.culture,
    article.quickFacts?.knownFor,
    ...(article.aliases ?? []),
    ...(article.roles ?? []),
    ...(article.factions ?? []),
    ...(article.knownFor ?? []),
    ...(article.leaders ?? []).flatMap((leader) => [leader.name, leader.faction]),
    ...(article.relatedEntries ? Object.values(article.relatedEntries).flatMap((items) => items.map((item) => item.title)) : [])
  ]
    .filter(Boolean)
    .join(' ')
    .toLowerCase()
}

function recommendSectionsFor(user) {
  const favoritePreviews = (user.favorites ?? []).map(articlePreviewFromFavorite).filter(Boolean)
  if (!favoritePreviews.length) return []

  const favoriteKeys = new Set(favoritePreviews.map((favorite) => `${favorite.articleType}:${favorite.articleId}`))
  const favoriteArticles = favoritePreviews
    .map((favorite) => findArticle(favorite.articleType, favorite.articleId))
    .filter(Boolean)
  const favoriteTerms = new Set(
    favoriteArticles
      .flatMap((article) => searchableTerms(article).split(/\W+/))
      .filter((term) => term.length > 3)
  )
  const linkedTitles = new Set(
    favoriteArticles.flatMap((article) =>
      article.relatedEntries ? Object.values(article.relatedEntries).flatMap((items) => items.map((item) => item.title.toLowerCase())) : []
    )
  )

  const scored = flattenArticles()
    .map(articleCard)
    .filter((article) => !favoriteKeys.has(`${article.articleType}:${article.articleId}`))
    .map((article) => {
      const terms = searchableTerms(article)
      let score = 0

      if (linkedTitles.has(article.name.toLowerCase())) score += 20
      for (const term of favoriteTerms) {
        if (terms.includes(term)) score += 1
      }
      if (favoriteArticles.some((favorite) => favorite.articleType !== article.articleType)) score += 2

      return { article, score }
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((item) => item.article)

  if (!scored.length) return []

  const used = new Set()
  return [
    { id: 'recommended', eyebrow: 'From your archive trail', title: 'Recommended for you', articles: takeUnique(scored, 3, used) },
    {
      id: 'recommended-people',
      eyebrow: 'Related figures',
      title: 'Related People',
      articles: takeUnique(scored.filter((article) => article.articleType === 'people'), 3, used)
    },
    {
      id: 'recommended-context',
      eyebrow: 'Connected entries',
      title: 'Events, Places, Relics, and Arms',
      articles: takeUnique(scored.filter((article) => article.articleType !== 'people'), 3, used)
    }
  ].filter((section) => section.articles.length)
}

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', scope: 'Medieval Europe, 476-1453' })
})

app.get('/api/auth/me', async (req, res) => {
  const user = await currentUser(req)
  res.json({ authenticated: Boolean(user), user: user ? publicUser(user) : null })
})

app.get('/api/favorites/ids', requireUser, (req, res) => {
  res.json({
    favorites: (req.user.favorites ?? []).map((favorite) => ({
      articleId: favorite.articleId,
      articleType: favorite.articleType,
      key: favoriteKey(favorite)
    }))
  })
})

app.post('/api/favorites', requireUser, async (req, res) => {
  const articleType = publicCollectionName(req.body.articleType)
  const articleId = String(req.body.articleId ?? '')
  const article = findArticle(articleType, articleId)

  if (!article) {
    return res.status(404).json({ message: 'Article not found.' })
  }

  const users = await readUsers()
  const user = users.find((candidate) => candidate.id === req.user.id)
  user.favorites = user.favorites ?? []

  const existing = user.favorites.find((favorite) => favorite.articleType === articleType && favorite.articleId === articleId)
  if (existing) {
    return res.status(200).json({ favorite: articlePreviewFromFavorite(existing), alreadyExists: true })
  }

  const favorite = {
    id: randomBytes(12).toString('hex'),
    userId: user.id,
    articleId,
    articleType,
    articleTitle: article.name,
    articleUrl: article.articleUrl,
    createdAt: new Date().toISOString()
  }

  user.favorites.push(favorite)
  await writeUsers(users)
  res.status(201).json({ favorite: articlePreviewFromFavorite(favorite) })
})

app.delete('/api/favorites/:articleType/:articleId', requireUser, async (req, res) => {
  const articleType = publicCollectionName(req.params.articleType)
  const articleId = req.params.articleId
  const users = await readUsers()
  const user = users.find((candidate) => candidate.id === req.user.id)
  const before = user.favorites?.length ?? 0

  user.favorites = (user.favorites ?? []).filter(
    (favorite) => !(favorite.articleType === articleType && favorite.articleId === articleId)
  )

  if (user.favorites.length === before) {
    return res.status(404).json({ message: 'Favorite not found.' })
  }

  await writeUsers(users)
  res.json({ removed: true, articleType, articleId })
})

app.post('/api/auth/signup', async (req, res) => {
  const email = normalizeEmail(req.body.email)
  const password = req.body.password

  if (!isValidEmail(email)) {
    return res.status(400).json({ message: 'Enter a valid email address.' })
  }

  const passwordError = validatePassword(password)
  if (passwordError) {
    return res.status(400).json({ message: passwordError })
  }

  const users = await readUsers()
  if (users.some((user) => user.email === email)) {
    return res.status(409).json({ message: 'An account already exists for this email.' })
  }

  const passwordRecord = await hashPassword(password)
  const user = {
    id: randomBytes(16).toString('hex'),
    email,
    passwordHash: passwordRecord.hash,
    passwordSalt: passwordRecord.salt,
    providers: ['password'],
    favorites: [],
    createdAt: new Date().toISOString()
  }

  users.push(user)
  await writeUsers(users)
  setSession(res, user)
  res.status(201).json({ authenticated: true, user: publicUser(user) })
})

app.post('/api/auth/login', async (req, res) => {
  const email = normalizeEmail(req.body.email)
  const password = req.body.password

  if (!isValidEmail(email) || typeof password !== 'string') {
    return res.status(400).json({ message: 'Enter your email and password.' })
  }

  const users = await readUsers()
  const user = users.find((candidate) => candidate.email === email)

  if (!user || !(await verifyPassword(password, user))) {
    return res.status(401).json({ message: 'Incorrect email or password.' })
  }

  setSession(res, user)
  res.json({ authenticated: true, user: publicUser(user) })
})

app.post('/api/auth/logout', (_req, res) => {
  res.setHeader('Set-Cookie', clearSessionCookie())
  res.json({ authenticated: false, user: null })
})

app.get('/api/auth/google', (req, res) => {
  if (!process.env.GOOGLE_CLIENT_ID || !process.env.GOOGLE_CLIENT_SECRET) {
    return res.redirect('/auth/callback?error=google_not_configured')
  }

  const redirectUri = new URL('/api/auth/google/callback', authBaseUrl).toString()
  const state = signPayload({
    sub: 'google-oauth-state',
    returnTo: typeof req.query.returnTo === 'string' ? req.query.returnTo : '/favorites',
    exp: Date.now() + 10 * 60 * 1000
  })
  const params = new URLSearchParams({
    client_id: process.env.GOOGLE_CLIENT_ID,
    redirect_uri: redirectUri,
    response_type: 'code',
    scope: 'openid email profile',
    state,
    prompt: 'select_account'
  })

  res.redirect(`https://accounts.google.com/o/oauth2/v2/auth?${params.toString()}`)
})

app.get('/api/auth/google/callback', async (req, res) => {
  const state = verifySessionToken(req.query.state)
  const code = req.query.code

  if (!state || typeof code !== 'string') {
    return res.redirect('/auth/callback?error=google_failed')
  }

  try {
    const redirectUri = new URL('/api/auth/google/callback', authBaseUrl).toString()
    const tokenResponse = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        code,
        client_id: process.env.GOOGLE_CLIENT_ID,
        client_secret: process.env.GOOGLE_CLIENT_SECRET,
        redirect_uri: redirectUri,
        grant_type: 'authorization_code'
      })
    })

    if (!tokenResponse.ok) {
      throw new Error('Google token exchange failed')
    }

    const tokens = await tokenResponse.json()
    const profileResponse = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
      headers: { Authorization: `Bearer ${tokens.access_token}` }
    })

    if (!profileResponse.ok) {
      throw new Error('Google profile lookup failed')
    }

    const profile = await profileResponse.json()
    const email = normalizeEmail(profile.email)

    if (!isValidEmail(email) || profile.email_verified === false) {
      return res.redirect('/auth/callback?error=google_email_unverified')
    }

    const users = await readUsers()
    let user = users.find((candidate) => candidate.email === email)

    if (!user) {
      user = {
        id: randomBytes(16).toString('hex'),
        email,
        displayName: profile.name,
        avatar: profile.picture,
        providers: ['google'],
        googleSub: profile.sub,
        favorites: [],
        createdAt: new Date().toISOString()
      }
      users.push(user)
    } else {
      user.googleSub = user.googleSub ?? profile.sub
      user.displayName = user.displayName ?? profile.name
      user.avatar = user.avatar ?? profile.picture
      user.providers = Array.from(new Set([...(user.providers ?? []), 'google']))
    }

    await writeUsers(users)
    setSession(res, user)
    res.redirect(`/auth/callback?returnTo=${encodeURIComponent(state.returnTo ?? '/favorites')}`)
  } catch {
    res.redirect('/auth/callback?error=google_failed')
  }
})

app.get('/api/favorites', requireUser, (req, res) => {
  const favorites = (req.user.favorites ?? []).map(articlePreviewFromFavorite).filter(Boolean)
  res.json({ favorites })
})

app.get('/api/home', async (req, res) => {
  const user = await currentUser(req)
  const discovery = discoverySections()
  const recommendations = user ? recommendSectionsFor(user) : []

  res.json({
    articles: discovery[0]?.articles ?? [],
    sections: recommendations.length ? recommendations : discovery,
    recommendationMode: Boolean(recommendations.length),
    hasFavorites: Boolean(user?.favorites?.length)
  })
})

app.get('/api/:collection', (req, res) => {
  const collectionName = apiCollectionName(req.params.collection)
  const items = collections()[collectionName]

  if (!items) {
    return res.status(404).json({ message: 'Collection not found' })
  }

  res.json(collectionName === 'events' ? sortChronologically(items) : items)
})

app.get('/api/:collection/:id', (req, res) => {
  const requestedCollection = apiCollectionName(req.params.collection)
  const collectionName = articleForCollection(requestedCollection, req.params.id)
  const items = collections()[collectionName]

  if (!items) {
    return res.status(404).json({ message: 'Collection not found' })
  }

  const article = items.find((item) => item.id === req.params.id)

  if (!article) {
    return res.status(404).json({ message: 'Article not found' })
  }

  res.json(withBattleContinuityTarget(article))
})

// Military events (battles and sieges) store only the continuity target's
// slug; resolve the target's display data here so the client can render the
// block without a second fetch.
const MILITARY_EVENT_TYPES = new Set(['Battle', 'Siege'])

function withBattleContinuityTarget(article) {
  if (!MILITARY_EVENT_TYPES.has(article.eventType) || !article.battleContinuity?.battleSlug) {
    return article
  }

  const target = collections().events.find(
    (event) => event.id === article.battleContinuity.battleSlug && MILITARY_EVENT_TYPES.has(event.eventType)
  )

  if (!target) return article

  return {
    ...article,
    battleContinuity: {
      ...article.battleContinuity,
      target: {
        id: target.id,
        name: target.name,
        year: target.year,
        eventType: target.eventType,
        conflict: target.conflict ?? null,
        image: target.image ?? null
      }
    }
  }
}

app.use(express.static(clientDist))

app.use((_req, res) => {
  res.sendFile(path.join(clientDist, 'index.html'))
})

const server = app.listen(port, () => {
  console.log(`Medieval History API running on http://localhost:${port}`)
})

server.on('error', (error) => {
  console.error('Medieval History API failed to start:', error)
})
