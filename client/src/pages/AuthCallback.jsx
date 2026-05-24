import { useEffect, useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { useAuth } from '../lib/auth.jsx'

const errorMessages = {
  google_email_unverified: 'Google did not return a verified email address.',
  google_failed: 'Google sign-in could not be completed.',
  google_not_configured: 'Google sign-in is not configured for this environment yet.'
}

export default function AuthCallback() {
  const [params] = useSearchParams()
  const { refreshAuth } = useAuth()
  const [error, setError] = useState(params.get('error') ?? '')
  const navigate = useNavigate()

  useEffect(() => {
    async function finishAuth() {
      if (error) return

      const user = await refreshAuth()
      navigate(user ? params.get('returnTo') ?? '/favorites' : '/login', { replace: true })
    }

    finishAuth()
  }, [error, navigate, params, refreshAuth])

  if (error) {
    return (
      <section className="auth-page">
        <div className="auth-card">
          <p className="eyebrow">Authentication</p>
          <h1>Sign-in needs attention</h1>
          <p className="form-error" role="alert">{errorMessages[error] ?? 'Authentication failed.'}</p>
          <Link className="button" to="/login">Back to sign in</Link>
        </div>
      </section>
    )
  }

  return (
    <section className="auth-page">
      <div className="auth-card">
        <p className="eyebrow">Authentication</p>
        <h1>Signing you in...</h1>
      </div>
    </section>
  )
}
