import { useEffect, useState } from 'react'
import { SITE_NAME, notFoundTitle, pageTitle, utilityLabel } from '../lib/pageTitles.js'
import { useDocumentTitle } from '../lib/useDocumentTitle.js'
import { Link } from 'react-router-dom'
import LoadingState from '../components/LoadingState.jsx'
import { useAuth } from '../lib/auth.jsx'

/**
 * Private Insights dashboard (Track C M8).
 *
 * Hiding this page from the menu is a usability choice, not a security boundary —
 * `/api/insights` is guarded server-side by `requireAdmin` and answers 404 to
 * everyone else. This component only decides what to draw.
 *
 * THE EMPTY STATE IS THE IMPORTANT PART. Analytics started today with zero
 * history, and the brief is explicit that nothing may imply traffic that does not
 * exist. So this shows real zeros and explains why, rather than a demo chart or a
 * plausible-looking placeholder.
 *
 * It reports VIEWS, never "visitors". With no cookie and no stored identifier
 * there is no honest way to count unique people, so it does not pretend to.
 */

const RANGES = [
  { days: 7, label: '7 days' },
  { days: 30, label: '30 days' },
  { days: 90, label: '90 days' }
]

/**
 * A daily bar chart whose bars each carry their own readout. The readout shows
 * at once on hover and on keyboard or touch focus; every bar is a focusable list
 * item with its own label, so the numbers are reachable without a mouse (the old
 * chart was one `role="img"` with a native `title` that took seconds to appear
 * and never did on touch).
 */
function Bars({ daily, unit, label }) {
  const max = Math.max(1, ...daily.map((d) => d.value))
  const edge = Math.max(1, Math.round(daily.length * 0.12))
  return (
    <div className="insights-chart" role="list" aria-label={label}>
      {daily.map((d, i) => {
        const text = `${d.value.toLocaleString()} ${unit}${d.value === 1 ? '' : 's'}`
        const placement = i < edge ? ' tip-start' : i >= daily.length - edge ? ' tip-end' : ''
        return (
          <div
            key={d.date}
            className={`insights-bar-slot${placement}`}
            role="listitem"
            tabIndex={0}
            aria-label={`${d.date}: ${text}`}
          >
            <div className="insights-bar" style={{ height: `${(d.value / max) * 100}%` }} />
            <span className="insights-tip" aria-hidden="true">
              {d.date} · <strong>{text}</strong>
            </span>
          </div>
        )
      })}
    </div>
  )
}

function Table({ title, rows, emptyLabel, linkPaths = false }) {
  return (
    <div className="insights-panel">
      <h2>{title}</h2>
      {rows.length === 0 ? (
        <p className="insights-empty">{emptyLabel}</p>
      ) : (
        <ul className="insights-table">
          {rows.map((row) => (
            <li key={row.key}>
              <span className="insights-key">
                {linkPaths ? <Link to={row.key}>{row.key}</Link> : row.key}
              </span>
              <span className="insights-value">{row.count.toLocaleString()}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default function InsightsPage() {
  const { isAdmin, isLoading: authLoading } = useAuth()
  const [days, setDays] = useState(30)
  const [data, setData] = useState(null)
  const [status, setStatus] = useState('loading')

  useEffect(() => {
    if (authLoading || !isAdmin) return
    setStatus('loading')
    fetch(`/api/insights?days=${days}`, { credentials: 'include' })
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error(String(r.status)))))
      .then((payload) => { setData(payload); setStatus('ready') })
      .catch(() => setStatus('error'))
  }, [days, isAdmin, authLoading])

  // Anyone who is not the admin sees "Page not found" in the page, so the tab
  // says the same — it must not confirm that a private area exists.
  useDocumentTitle(authLoading ? SITE_NAME : isAdmin ? pageTitle(utilityLabel('insights')) : notFoundTitle())

  if (authLoading) return <LoadingState label="Checking account" />

  // Same response an unauthorized caller gets from the API: this page does not
  // confirm that an admin area exists.
  if (!isAdmin) {
    return (
      <section className="empty-state">
        <p className="eyebrow">Missing record</p>
        <h1>Page not found</h1>
        <Link className="button" to="/">Return home</Link>
      </section>
    )
  }

  const accounts = data?.accounts

  return (
    <section className="content-section page-section">
      <div className="section-heading wide">
        <p className="eyebrow">Private</p>
        <h1>Insights</h1>
        <p>
          First-party analytics, stored in the archive&rsquo;s own database. No cookies,
          no third-party tracking, and nothing that identifies a reader.
        </p>
      </div>

      <div className="insights-controls">
        {RANGES.map((r) => (
          <button
            key={r.days}
            type="button"
            className={`button secondary${days === r.days ? ' is-active' : ''}`}
            onClick={() => setDays(r.days)}
          >
            {r.label}
          </button>
        ))}
      </div>

      {status === 'loading' && <LoadingState label="Loading insights" />}

      {status === 'error' && (
        <div className="empty-state compact">
          <p>Could not load insights. The analytics store may be unreachable.</p>
        </div>
      )}

      {status === 'ready' && data && (
        <>
          {!data.available && (
            <div className="insights-panel insights-notice">
              <h2>Analytics storage is not configured</h2>
              <p>
                Set <code>UPSTASH_REDIS_REST_URL</code> and <code>UPSTASH_REDIS_REST_TOKEN</code> in
                the production environment. Until then nothing is recorded — and nothing is invented.
              </p>
            </div>
          )}

          <div className="insights-summary">
            <div className="insights-stat">
              <span className="insights-stat-value">{data.totalViews.toLocaleString()}</span>
              <span className="insights-stat-label">views, last {data.days} days</span>
            </div>
            {accounts?.available && (
              <div className="insights-stat">
                <span className="insights-stat-value">{accounts.total.toLocaleString()}</span>
                <span className="insights-stat-label">accounts created, last {data.days} days</span>
              </div>
            )}
            <p className="insights-note">
              Views, not visitors. With no cookie and no stored identifier there is no honest
              way to count unique people, so this does not claim to.
            </p>
          </div>

          {data.totalViews === 0 ? (
            <div className="insights-panel insights-notice">
              <h2>No views recorded yet</h2>
              <p>
                This is expected. Analytics began on 8 September 2026 and the site was
                submitted to Google the same day, so there is no history to show and no
                traffic to report. Numbers will appear here as they happen — nothing is
                back-filled or estimated.
              </p>
            </div>
          ) : (
            <Bars
              daily={data.daily.map((d) => ({ date: d.date, value: d.views }))}
              unit="view"
              label={`Daily views over ${data.daily.length} days`}
            />
          )}

          {accounts && !accounts.available && (
            <div className="insights-panel insights-notice">
              <h2>Account data unavailable</h2>
              <p>The user store could not be read, so account sign-ups are not shown. Views are unaffected.</p>
            </div>
          )}

          {accounts?.available && (
            <>
              <h2 className="insights-chart-title">Accounts created per day</h2>
              {accounts.total === 0 ? (
                <p className="insights-empty">No accounts were created in the last {data.days} days.</p>
              ) : (
                <Bars
                  daily={accounts.daily.map((d) => ({ date: d.date, value: d.count }))}
                  unit="account"
                  label={`Accounts created per day over ${accounts.daily.length} days`}
                />
              )}
            </>
          )}

          <div className="insights-grid">
            <Table title="Most viewed pages" rows={data.paths} emptyLabel="No page views recorded yet." linkPaths />
            <Table title="Referrers" rows={data.referrers} emptyLabel="No external referrers yet — expected until search engines start sending traffic." />
            <Table title="Countries" rows={data.countries} emptyLabel="No country data yet." />
          </div>
        </>
      )}
    </section>
  )
}
