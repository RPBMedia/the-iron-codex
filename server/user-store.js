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

export async function findUserById(id) {
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

/** Patch one account. Only the supplied fields are written. */
export async function updateUser(id, patch) {
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
