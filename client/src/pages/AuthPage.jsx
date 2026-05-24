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
        <a className="button secondary auth-google" href={`/api/auth/google?returnTo=${encodeURIComponent(returnTo)}`}>
          Continue with Google
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
