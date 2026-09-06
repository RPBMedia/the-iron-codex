import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useAuth } from '../lib/auth.jsx'

export default function AuthPage({ mode }) {
  const isSignup = mode === 'signup'
  const { isAuthenticated, signIn, signUp } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const returnTo = location.state?.returnTo ?? new URLSearchParams(location.search).get('returnTo') ?? '/favorites'

  if (isAuthenticated) {
    return <Navigate to={returnTo} replace />
  }

  function validateForm() {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      return 'Enter a valid email address.'
    }

    if (isSignup && password.length < 10) {
      return 'Password must be at least 10 characters.'
    }

    if (isSignup && (!/[a-z]/.test(password) || !/[A-Z]/.test(password) || !/\d/.test(password))) {
      return 'Password must include uppercase, lowercase, and a number.'
    }

    if (!password) {
      return 'Enter your password.'
    }

    return ''
  }

  async function handleSubmit(event) {
    event.preventDefault()
    const validationError = validateForm()

    if (validationError) {
      setError(validationError)
      return
    }

    setIsSubmitting(true)
    setError('')

    try {
      if (isSignup) {
        await signUp(email, password)
      } else {
        await signIn(email, password)
      }

      navigate(returnTo, { replace: true })
    } catch (authError) {
      setError(authError.message)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="auth-page">
      <div className="auth-card">
        <p className="eyebrow">Your archive</p>
        <h1>{isSignup ? 'Create your IronCodex account' : 'Sign in to IronCodex'}</h1>
        <p>
          {isSignup
            ? 'Start building a private archive of saved articles and research trails.'
            : 'Return to your saved medieval history archive.'}
        </p>

        <form className="auth-form" onSubmit={handleSubmit}>
          <label>
            Email
            <input
              type="email"
              value={email}
              autoComplete="email"
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </label>
          <label>
            Password
            <input
              type="password"
              value={password}
              autoComplete={isSignup ? 'new-password' : 'current-password'}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </label>
          {isSignup && <p className="auth-hint">Use at least 10 characters with uppercase, lowercase, and a number.</p>}
          {error && <p className="form-error" role="alert">{error}</p>}
          <button className="button" type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Working...' : isSignup ? 'Create account' : 'Sign in'}
          </button>
        </form>

        <div className="auth-divider">or</div>
        <a className="auth-google" href={`/api/auth/google?returnTo=${encodeURIComponent(returnTo)}`}>
          <GoogleMark />
          <span>Continue with Google</span>
        </a>

        <p className="auth-switch">
          {isSignup ? 'Already have an account?' : 'New to IronCodex?'}{' '}
          <Link to={isSignup ? '/login' : '/signup'} state={{ returnTo }}>
            {isSignup ? 'Sign in' : 'Create an account'}
          </Link>
        </p>
      </div>
    </section>
  )
}

/**
 * Google's four-colour "G". Their identity guidelines require this mark on a
 * "Continue with Google" button and forbid recolouring it, so the fills are fixed
 * rather than inheriting the archive's palette.
 */
function GoogleMark() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" focusable="false">
      <path
        fill="#EA4335"
        d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
      />
      <path
        fill="#4285F4"
        d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
      />
      <path
        fill="#FBBC05"
        d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24s.92 7.54 2.56 10.78l7.97-6.19z"
      />
      <path
        fill="#34A853"
        d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
      />
    </svg>
  )
}
