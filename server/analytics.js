/**
 * First-party, privacy-safe analytics (Track C M6 + M7).
 *
 * WHY NO THIRD-PARTY PROVIDER (M6 decision, 2026-09-08).
 *
 *   Google Analytics 4 — free, but it is third-party tracking with cookies. In
 *     the EU that means a consent banner, and a banner costs more real readers
 *     than the data is worth on a site this size.
 *   Plausible / Fathom — genuinely privacy-first and very good, but they are a
 *     paid subscription, and the brief forbids new spend without approval.
 *   Vercel Analytics — well integrated, also paid beyond the hobby tier.
 *   THIS — first-party counters in the Upstash Redis the archive already runs
 *     for accounts. No vendor, no cookies, no consent banner, no data leaving
 *     the owner's own infrastructure, and no new bill.
 *
 * WHAT IS RECORDED, and it is deliberately the minimum that answers "is anyone
 * reading this?":
 *
 *   - a counter per path per day
 *   - a counter per referrer HOST per day (never the full referring URL, which
 *     can carry search terms and identifiers)
 *   - a counter per country, taken from the CDN's own geo header
 *
 * WHAT IS NEVER RECORDED: no cookie, no localStorage id, no fingerprint, no IP
 * address, no user agent, no session, no user id — not even for logged-in
 * readers. Nothing here can be tied to a person, which is what makes it exempt
 * from consent requirements rather than merely compliant with them.
 *
 * Because there are no identifiers, "visitors" is not a number this can produce.
 * It reports views, and says so, rather than inventing a unique-visitor figure it
 * has no way to know. That honesty is the point of the design.
 *
 * Keys expire after 90 days. Nothing is kept that nobody will look at.
 */
const UPSTASH_URL = process.env.UPSTASH_REDIS_REST_URL?.replace(/\/+$/, '')
const UPSTASH_TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN

export const analyticsAvailable = Boolean(UPSTASH_URL && UPSTASH_TOKEN)

const TTL_SECONDS = 90 * 24 * 60 * 60
const day = (d = new Date()) => d.toISOString().slice(0, 10)

async function redis(commands) {
  if (!analyticsAvailable) return null
  const pipeline = Array.isArray(commands[0])
  const response = await fetch(`${UPSTASH_URL}${pipeline ? '/pipeline' : ''}`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${UPSTASH_TOKEN}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(commands)
  })
  if (!response.ok) throw new Error(`analytics store failed: ${response.status}`)
  const body = await response.json()
  return pipeline ? body.map((r) => r.result) : body.result
}

/** Only same-shape internal paths are counted; anything else is discarded. */
export const SAFE_PATH = /^\/[A-Za-z0-9\-/]{0,120}$/

/** A referrer is reduced to its host. The path can carry search terms. */
export function referrerHost(referrer) {
  if (!referrer) return null
  try {
    const host = new URL(referrer).hostname.toLowerCase()
    if (!host || host.endsWith('theironcodex.org')) return null // internal navigation
    return host.slice(0, 80)
  } catch {
    return null
  }
}

export async function recordView({ path: rawPath, referrer, country }) {
  if (!analyticsAvailable) return
  const path = String(rawPath ?? '').split('?')[0]
  if (!SAFE_PATH.test(path)) return

  const d = day()
  const commands = [
    ['HINCRBY', `stats:paths:${d}`, path, 1],
    ['EXPIRE', `stats:paths:${d}`, TTL_SECONDS],
    ['INCR', `stats:views:${d}`],
    ['EXPIRE', `stats:views:${d}`, TTL_SECONDS]
  ]

  const host = referrerHost(referrer)
  if (host) {
    commands.push(['HINCRBY', `stats:referrers:${d}`, host, 1], ['EXPIRE', `stats:referrers:${d}`, TTL_SECONDS])
  }
  const cc = String(country ?? '').toUpperCase()
  if (/^[A-Z]{2}$/.test(cc)) {
    commands.push(['HINCRBY', `stats:countries:${d}`, cc, 1], ['EXPIRE', `stats:countries:${d}`, TTL_SECONDS])
  }

  await redis(commands)
}

const lastDays = (n) => Array.from({ length: n }, (_, i) => {
  const d = new Date()
  d.setUTCDate(d.getUTCDate() - i)
  return day(d)
}).reverse()

/** Merge a set of Redis hashes into one sorted { key, count } list. */
function mergeHashes(results) {
  const totals = new Map()
  for (const hash of results) {
    if (!hash) continue
    // Upstash returns a hash as a flat [field, value, field, value, ...] array.
    const entries = Array.isArray(hash) ? hash : Object.entries(hash).flat()
    for (let i = 0; i < entries.length; i += 2) {
      const key = entries[i]
      const value = Number(entries[i + 1]) || 0
      totals.set(key, (totals.get(key) ?? 0) + value)
    }
  }
  return [...totals.entries()].map(([key, count]) => ({ key, count })).sort((a, b) => b.count - a.count)
}

export async function readInsights(days = 30) {
  if (!analyticsAvailable) {
    return { available: false, days, totalViews: 0, daily: [], paths: [], referrers: [], countries: [] }
  }
  const dates = lastDays(days)

  const [viewCounts, pathHashes, referrerHashes, countryHashes] = await Promise.all([
    redis(dates.map((d) => ['GET', `stats:views:${d}`])),
    redis(dates.map((d) => ['HGETALL', `stats:paths:${d}`])),
    redis(dates.map((d) => ['HGETALL', `stats:referrers:${d}`])),
    redis(dates.map((d) => ['HGETALL', `stats:countries:${d}`]))
  ])

  const daily = dates.map((date, i) => ({ date, views: Number(viewCounts?.[i]) || 0 }))

  return {
    available: true,
    days,
    totalViews: daily.reduce((n, d) => n + d.views, 0),
    daily,
    paths: mergeHashes(pathHashes ?? []).slice(0, 40),
    referrers: mergeHashes(referrerHashes ?? []).slice(0, 25),
    countries: mergeHashes(countryHashes ?? []).slice(0, 25)
  }
}
