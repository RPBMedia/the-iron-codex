/**
 * User store.
 *
 * The archive originally kept accounts in a JSON file inside the deployment
 * bundle. That cannot work on a serverless host: the filesystem is read-only, so
 * every write failed with EROFS and account creation was impossible in
 * production — by password signup and by Google sign-in alike.
 *
 * This module puts a small seam in front of storage and picks a backend from the
 * environment, in order:
 *
 *   1. Upstash Redis  — UPSTASH_REDIS_REST_URL + UPSTASH_REDIS_REST_TOKEN
 *   2. Supabase       — SUPABASE_URL + SUPABASE_SERVICE_ROLE_KEY
 *   3. The JSON file  — local development only; cannot work on a read-only host
 *
 * Both remote backends are plain HTTP, so no driver dependency is added and both
 * work from a serverless function without connection pooling.
 *
 * The four operations here replace a read-all/mutate/write-all pattern. That
 * pattern was tolerable against a single file and would be indefensible against a
 * database — toggling one favourite would have rewritten every account.
 *
 * No dependency is added: PostgREST is plain HTTP and the service-role key never
 * leaves the server.
 */
import { readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const usersFile = process.env.AUTH_USERS_FILE || path.join(__dirname, 'data', 'users.json')

const SUPABASE_URL = process.env.SUPABASE_URL?.replace(/\/+$/, '')
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY
export const usingSupabase = Boolean(SUPABASE_URL && SUPABASE_KEY)

// Configurable so the store can live in an EXISTING Supabase project alongside
// another app's tables without colliding — set SUPABASE_USERS_TABLE to something
// namespaced like `ironcodex_users` when sharing a project.
const TABLE = process.env.SUPABASE_USERS_TABLE || 'users'

const UPSTASH_URL = process.env.UPSTASH_REDIS_REST_URL?.replace(/\/+$/, '')
const UPSTASH_TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN
export const usingUpstash = Boolean(UPSTASH_URL && UPSTASH_TOKEN)

/**
 * Which backend is live, decided once at startup.
 *
 * On the production host the JSON file can never be written, so selecting it
 * there means the Upstash or Supabase variables are missing or misnamed. That
 * used to surface only at the first signup, as the original EROFS outage did.
 * Now it is logged at startup and every account operation fails with the reason.
 * The archive itself keeps serving: every page runs through this same function,
 * so throwing at import would take the whole site down with the accounts.
 */
export const storeBackend = usingUpstash ? 'upstash' : usingSupabase ? 'supabase' : 'file'
const productionHost = process.env.NODE_ENV === 'production' || Boolean(process.env.VERCEL)
export const storeMisconfigured = productionHost && storeBackend === 'file'

if (storeMisconfigured) {
  console.error(
    'user-store: no remote backend in production. Set UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN, ' +
      'or SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY. Account operations will fail until then.'
  )
} else {
  console.info(`user-store: backend = ${storeBackend}`)
}

function assertConfigured() {
  if (storeMisconfigured) {
    throw new Error('User store is not configured for production: set the Upstash or Supabase environment variables.')
  }
}

/**
 * Key layout:
 *   user:<id>          -> the account, as JSON
 *   user:email:<email> -> the id, so a login can find an account by address
 *
 * The email key is an index, not a copy: it holds only the id, so an account is
 * never stored twice and the two can never disagree about anything but existence.
 */
const userKey = (id) => `user:${id}`
const emailKey = (email) => `user:email:${email}`

/** Run one or more Redis commands through the Upstash REST endpoint. */
async function redis(commands) {
  const pipeline = Array.isArray(commands[0])
  const response = await fetch(`${UPSTASH_URL}${pipeline ? '/pipeline' : ''}`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${UPSTASH_TOKEN}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(commands)
  })
  if (!response.ok) {
    const detail = await response.text().catch(() => '')
    throw new Error(`Upstash command failed: ${response.status} ${detail.slice(0, 300)}`)
  }
  const body = await response.json()
  if (pipeline) return body.map((entry) => entry.result)
  if (body.error) throw new Error(`Upstash error: ${body.error}`)
  return body.result
}

const parseUser = (raw) => {
  if (!raw) return null
  try {
    return typeof raw === 'string' ? JSON.parse(raw) : raw
  } catch {
    return null
  }
}

/** Row (snake_case, as stored) -> user object (camelCase, as the app expects). */
function fromRow(row) {
  if (!row) return null
  return {
    id: row.id,
    email: row.email,
    passwordHash: row.password_hash ?? undefined,
    passwordSalt: row.password_salt ?? undefined,
    displayName: row.display_name ?? undefined,
    avatar: row.avatar ?? undefined,
    googleSub: row.google_sub ?? undefined,
    providers: row.providers ?? [],
    favorites: row.favorites ?? [],
    createdAt: row.created_at
  }
}

/** user object -> row. Undefined keys are omitted so PATCH only touches what changed. */
function toRow(user) {
  const row = {
    id: user.id,
    email: user.email,
    password_hash: user.passwordHash,
    password_salt: user.passwordSalt,
    display_name: user.displayName,
    avatar: user.avatar,
    google_sub: user.googleSub,
    providers: user.providers,
    favorites: user.favorites,
    created_at: user.createdAt
  }
  for (const key of Object.keys(row)) if (row[key] === undefined) delete row[key]
  return row
}

async function supabase(pathAndQuery, options = {}) {
  const response = await fetch(`${SUPABASE_URL}/rest/v1/${pathAndQuery}`, {
    ...options,
    headers: {
      apikey: SUPABASE_KEY,
      Authorization: `Bearer ${SUPABASE_KEY}`,
      'Content-Type': 'application/json',
      ...options.headers
    }
  })
  if (!response.ok) {
    const detail = await response.text().catch(() => '')
    throw new Error(`Supabase ${options.method ?? 'GET'} ${pathAndQuery} failed: ${response.status} ${detail.slice(0, 300)}`)
  }
  return response.status === 204 ? null : response.json()
}

// ---- file fallback ---------------------------------------------------------

async function readFileUsers() {
  try {
    const users = JSON.parse(await readFile(usersFile, 'utf-8'))
    return Array.isArray(users) ? users : []
  } catch (error) {
    if (error.code === 'ENOENT') return []
    throw error
  }
}

async function writeFileUsers(users) {
  try {
    await writeFile(usersFile, JSON.stringify(users, null, 2) + '\n')
  } catch (error) {
    if (error?.code === 'EROFS' || error?.code === 'EACCES') {
      throw new Error(
        `User store is not writable at ${usersFile} (${error.code}). On a read-only or ` +
          'serverless filesystem this path can never be written — configure SUPABASE_URL and ' +
          'SUPABASE_SERVICE_ROLE_KEY so accounts are stored in the database instead.'
      )
    }
    throw error
  }
}

// ---- public API ------------------------------------------------------------

/**
 * A read-only round trip to the live backend, for /api/health. Reports the
 * backend and whether it answered, never account data or secrets, so "is sign-in
 * stable?" can be checked with one request instead of believed.
 */
export async function checkStore(timeoutMs = 3000) {
  const started = Date.now()
  if (storeMisconfigured) return { backend: storeBackend, ok: false, reason: 'not configured for production' }
  let timer
  try {
    const probe =
      storeBackend === 'upstash'
        ? redis(['PING'])
        : storeBackend === 'supabase'
          ? supabase(`${TABLE}?select=id&limit=1`)
          : readFileUsers()
    const timeout = new Promise((_, reject) => {
      timer = setTimeout(() => reject(new Error('timed out')), timeoutMs)
    })
    await Promise.race([probe, timeout])
    return { backend: storeBackend, ok: true, ms: Date.now() - started }
  } catch (error) {
    return {
      backend: storeBackend,
      ok: false,
      reason: error?.message === 'timed out' ? 'timed out' : 'unreachable',
      ms: Date.now() - started
    }
  } finally {
    clearTimeout(timer)
  }
}

export async function findUserById(id) {
  assertConfigured()
  if (!id) return null
  if (usingUpstash) {
    return parseUser(await redis(['GET', userKey(id)]))
  }
  if (usingSupabase) {
    const rows = await supabase(`${TABLE}?id=eq.${encodeURIComponent(id)}&limit=1`)
    return fromRow(rows?.[0])
  }
  const users = await readFileUsers()
  return users.find((user) => user.id === id) ?? null
}

export async function findUserByEmail(email) {
  assertConfigured()
  if (!email) return null
  if (usingUpstash) {
    const id = await redis(['GET', emailKey(email)])
    return id ? findUserById(id) : null
  }
  if (usingSupabase) {
    const rows = await supabase(`${TABLE}?email=eq.${encodeURIComponent(email)}&limit=1`)
    return fromRow(rows?.[0])
  }
  const users = await readFileUsers()
  return users.find((user) => user.email === email) ?? null
}

export async function createUser(user) {
  assertConfigured()
  if (usingUpstash) {
    // Write the account and its email index together, so a crash between the two
    // cannot leave an address pointing at nothing.
    await redis([
      ['SET', userKey(user.id), JSON.stringify(user)],
      ['SET', emailKey(user.email), user.id]
    ])
    return user
  }
  if (usingSupabase) {
    const rows = await supabase(TABLE, {
      method: 'POST',
      headers: { Prefer: 'return=representation' },
      body: JSON.stringify(toRow(user))
    })
    return fromRow(rows?.[0]) ?? user
  }
  const users = await readFileUsers()
  users.push(user)
  await writeFileUsers(users)
  return user
}

/**
 * Every account's creation time, and nothing else, for the private Insights
 * "accounts created" series. Read from the accounts themselves, so it answers
 * retroactively for any period and cannot drift from them, which a counter
 * started today could not do.
 */
export async function listAccountCreatedDates() {
  assertConfigured()
  if (usingUpstash) {
    return (await allUpstashUsers()).map((user) => user.createdAt).filter(Boolean)
  }
  if (usingSupabase) {
    const rows = await supabase(`${TABLE}?select=created_at`)
    return (rows ?? []).map((row) => row.created_at).filter(Boolean)
  }
  const users = await readFileUsers()
  return users.map((user) => user.createdAt).filter(Boolean)
}

/**
 * Every favourite's article and the date it was added, for the private Insights
 * favourites series (owner: chart favourites by period, 2026-09-15). Favourites
 * already store `createdAt`, so like the accounts series this answers for any
 * past period and cannot drift. It never says who favourited what: no user id,
 * no email, only the article and the date.
 */
export async function listFavoriteDates() {
  assertConfigured()
  const pick = (favorites) => (Array.isArray(favorites) ? favorites : []).map((favorite) => ({
    articleType: favorite?.articleType,
    articleId: favorite?.articleId,
    articleUrl: favorite?.articleUrl,
    createdAt: favorite?.createdAt
  }))
  if (usingUpstash) {
    return (await allUpstashUsers()).flatMap((user) => pick(user.favorites))
  }
  if (usingSupabase) {
    const rows = await supabase(`${TABLE}?select=favorites`)
    return (rows ?? []).flatMap((row) => pick(row.favorites))
  }
  const users = await readFileUsers()
  return users.flatMap((user) => pick(user.favorites))
}

/** Every account in the Upstash store, read in batches of 200. */
async function allUpstashUsers() {
  const ids = []
  let cursor = '0'
  do {
    const [next, keys] = await redis(['SCAN', cursor, 'MATCH', 'user:*', 'COUNT', '500'])
    cursor = String(next)
    for (const key of keys ?? []) if (!key.startsWith('user:email:')) ids.push(key)
  } while (cursor !== '0')
  const users = []
  for (let i = 0; i < ids.length; i += 200) {
    const raws = await redis(['MGET', ...ids.slice(i, i + 200)])
    for (const raw of raws ?? []) {
      const user = parseUser(raw)
      if (user) users.push(user)
    }
  }
  return users
}

/** Patch one account. Only the supplied fields are written. */
export async function updateUser(id, patch) {
  assertConfigured()
  if (usingUpstash) {
    const existing = await findUserById(id)
    if (!existing) return null
    const updated = { ...existing, ...patch }
    await redis(['SET', userKey(id), JSON.stringify(updated)])
    return updated
  }
  if (usingSupabase) {
    const rows = await supabase(`${TABLE}?id=eq.${encodeURIComponent(id)}`, {
      method: 'PATCH',
      headers: { Prefer: 'return=representation' },
      body: JSON.stringify(toRow({ id, ...patch }))
    })
    return fromRow(rows?.[0])
  }
  const users = await readFileUsers()
  const index = users.findIndex((user) => user.id === id)
  if (index === -1) return null
  users[index] = { ...users[index], ...patch }
  await writeFileUsers(users)
  return users[index]
}
