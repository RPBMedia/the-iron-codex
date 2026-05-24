import { Link, NavLink, useNavigate } from 'react-router-dom'
import GlobalSearch from './GlobalSearch.jsx'
import { useAuth } from '../lib/auth.jsx'

export default function Header() {
  const { isAuthenticated, isLoading, signOut, user } = useAuth()
  const navigate = useNavigate()

  async function handleLogout() {
    await signOut()
    navigate('/')
  }

  return (
    <header className="site-header">
      <a className="brand" href="/">
        <span className="brand-mark" aria-hidden="true">
          <span></span>
        </span>
        <span>
          <strong>The Iron Codex</strong>
          <small>The European Middle Ages (476 - 1453)</small>
        </span>
      </a>
      <nav aria-label="Primary navigation">
        <GlobalSearch />
        <NavLink to="/">Home</NavLink>
        <NavLink to="/events">Events</NavLink>
        <NavLink to="/locations">Locations</NavLink>
        <NavLink to="/people">People</NavLink>
        <NavLink to="/artifacts">Artifacts</NavLink>
        <div className="auth-nav">
          {isLoading && <span className="auth-status">Checking account...</span>}
          {!isLoading && !isAuthenticated && (
            <>
              <NavLink to="/login">Log in</NavLink>
              <NavLink className="signup-link" to="/signup">Sign up</NavLink>
            </>
          )}
          {!isLoading && isAuthenticated && (
            <>
              <span className="auth-status">{user.email}</span>
              <Link className="favorites-link" to="/favorites">Favorites</Link>
              <button type="button" onClick={handleLogout}>Log out</button>
            </>
          )}
        </div>
      </nav>
    </header>
  )
}
